import { app as Kt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ha(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const rt = {}, ko = [], gs = () => {
}, pi = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ka = (e) => e.startsWith("onUpdate:"), ht = Object.assign, qa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, rc = Object.prototype.hasOwnProperty, nt = (e, s) => rc.call(e, s), Ge = Array.isArray, bo = (e) => dn(e) === "[object Map]", Ro = (e) => dn(e) === "[object Set]", yl = (e) => dn(e) === "[object Date]", Ye = (e) => typeof e == "function", gt = (e) => typeof e == "string", ns = (e) => typeof e == "symbol", lt = (e) => e !== null && typeof e == "object", gi = (e) => (lt(e) || Ye(e)) && Ye(e.then) && Ye(e.catch), hi = Object.prototype.toString, dn = (e) => hi.call(e), cc = (e) => dn(e).slice(8, -1), yi = (e) => dn(e) === "[object Object]", Ya = (e) => gt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Go = /* @__PURE__ */ Ha(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, uc = /-\w/g, Qt = qn(
  (e) => e.replace(uc, (s) => s.slice(1).toUpperCase())
), dc = /\B([A-Z])/g, Gs = qn(
  (e) => e.replace(dc, "-$1").toLowerCase()
), Yn = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), da = qn(
  (e) => e ? `on${Yn(e)}` : ""
), Vs = (e, s) => !Object.is(e, s), En = (e, ...s) => {
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
}, fc = (e) => {
  const s = gt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let wl;
const Qn = () => wl || (wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gt(e) {
  if (Ge(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = gt(a) ? gc(a) : Gt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (gt(e) || lt(e))
    return e;
}
const mc = /;(?![^(]*\))/g, vc = /:([^]+)/, pc = /\/\*[^]*?\*\//g;
function gc(e) {
  const s = {};
  return e.replace(pc, "").split(mc).forEach((o) => {
    if (o) {
      const a = o.split(vc);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Ee(e) {
  let s = "";
  if (gt(e))
    s = e;
  else if (Ge(e))
    for (let o = 0; o < e.length; o++) {
      const a = Ee(e[o]);
      a && (s += a + " ");
    }
  else if (lt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yc = /* @__PURE__ */ Ha(hc);
function _i(e) {
  return !!e || e === "";
}
function wc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = so(e[a], s[a]);
  return o;
}
function so(e, s) {
  if (e === s) return !0;
  let o = yl(e), a = yl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = ns(e), a = ns(s), o || a)
    return e === s;
  if (o = Ge(e), a = Ge(s), o || a)
    return o && a ? wc(e, s) : !1;
  if (o = lt(e), a = lt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !so(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Ja(e, s) {
  return e.findIndex((o) => so(o, s));
}
const ki = (e) => !!(e && e.__v_isRef === !0), f = (e) => gt(e) ? e : e == null ? "" : Ge(e) || lt(e) && (e.toString === hi || !Ye(e.toString)) ? ki(e) ? f(e.value) : JSON.stringify(e, bi, 2) : String(e), bi = (e, s) => ki(s) ? bi(e, s.value) : bo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[fa(a, r) + " =>"] = l, o),
    {}
  )
} : Ro(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => fa(o))
} : ns(s) ? fa(s) : lt(s) && !Ge(s) && !yi(s) ? String(s) : s, fa = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ns(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ot;
class _c {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ot, !s && Ot && (this.index = (Ot.scopes || (Ot.scopes = [])).push(
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
      const o = Ot;
      try {
        return Ot = this, s();
      } finally {
        Ot = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ot, Ot = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ot = this.prevScope, this.prevScope = void 0);
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
  return Ot;
}
let ut;
const ma = /* @__PURE__ */ new WeakSet();
class $i {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ot && Ot.active && Ot.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ma.has(this) && (ma.delete(this), this.trigger()));
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
    const s = ut, o = os;
    ut = this, os = !0;
    try {
      return this.fn();
    } finally {
      Ii(this), ut = s, os = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Za(s);
      this.deps = this.depsTail = void 0, _l(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ma.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ta(this) && this.run();
  }
  get dirty() {
    return Ta(this);
  }
}
let Ci = 0, jo, Ho;
function xi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Ho, Ho = e;
    return;
  }
  e.next = jo, jo = e;
}
function Qa() {
  Ci++;
}
function Xa() {
  if (--Ci > 0)
    return;
  if (Ho) {
    let s = Ho;
    for (Ho = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; jo; ) {
    let s = jo;
    for (jo = void 0; s; ) {
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
    a.version === -1 ? (a === o && (o = l), Za(a), bc(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Ta(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Ei(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Ei(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tn) || (e.globalVersion = tn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ta(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = ut, a = os;
  ut = e, os = !0;
  try {
    Si(e);
    const l = e.fn(e._value);
    (s.version === 0 || Vs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    ut = o, os = a, Ii(e), e.flags &= -3;
  }
}
function Za(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      Za(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function bc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let os = !0;
const Ti = [];
function Is() {
  Ti.push(os), os = !1;
}
function Es() {
  const e = Ti.pop();
  os = e === void 0 ? !0 : e;
}
function _l(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = ut;
    ut = void 0;
    try {
      s();
    } finally {
      ut = o;
    }
  }
}
let tn = 0;
class $c {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class el {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!ut || !os || ut === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ut)
      o = this.activeLink = new $c(ut, this), ut.deps ? (o.prevDep = ut.depsTail, ut.depsTail.nextDep = o, ut.depsTail = o) : ut.deps = ut.depsTail = o, Ri(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = ut.depsTail, o.nextDep = void 0, ut.depsTail.nextDep = o, ut.depsTail = o, ut.deps === o && (ut.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, tn++, this.notify(s);
  }
  notify(s) {
    Qa();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Xa();
    }
  }
}
function Ri(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Ri(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ra = /* @__PURE__ */ new WeakMap(), eo = Symbol(
  ""
), Pa = Symbol(
  ""
), sn = Symbol(
  ""
);
function xt(e, s, o) {
  if (os && ut) {
    let a = Ra.get(e);
    a || Ra.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new el()), l.map = a, l.key = o), l.track();
  }
}
function Cs(e, s, o, a, l, r) {
  const c = Ra.get(e);
  if (!c) {
    tn++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Qa(), s === "clear")
    c.forEach(u);
  else {
    const d = Ge(e), m = d && Ya(o);
    if (d && o === "length") {
      const v = Number(a);
      c.forEach((g, w) => {
        (w === "length" || w === sn || !ns(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(sn)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(eo)), bo(e) && u(c.get(Pa)));
          break;
        case "delete":
          d || (u(c.get(eo)), bo(e) && u(c.get(Pa)));
          break;
        case "set":
          bo(e) && u(c.get(eo));
          break;
      }
  }
  Xa();
}
function po(e) {
  const s = st(e);
  return s === e ? s : (xt(s, "iterate", sn), qt(e) ? s : s.map(as));
}
function Xn(e) {
  return xt(e = st(e), "iterate", sn), e;
}
function Os(e, s) {
  return Ts(e) ? to(e) ? Io(as(s)) : Io(s) : as(s);
}
const Cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return va(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return po(this).concat(
      ...e.map((s) => Ge(s) ? po(s) : s)
    );
  },
  entries() {
    return va(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
  },
  every(e, s) {
    return ks(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return ks(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Os(this, a)),
      arguments
    );
  },
  find(e, s) {
    return ks(
      this,
      "find",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return ks(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return ks(
      this,
      "findLast",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return ks(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return ks(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return pa(this, "includes", e);
  },
  indexOf(...e) {
    return pa(this, "indexOf", e);
  },
  join(e) {
    return po(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return pa(this, "lastIndexOf", e);
  },
  map(e, s) {
    return ks(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return No(this, "pop");
  },
  push(...e) {
    return No(this, "push", e);
  },
  reduce(e, ...s) {
    return kl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return kl(this, "reduceRight", e, s);
  },
  shift() {
    return No(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return ks(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return No(this, "splice", e);
  },
  toReversed() {
    return po(this).toReversed();
  },
  toSorted(e) {
    return po(this).toSorted(e);
  },
  toSpliced(...e) {
    return po(this).toSpliced(...e);
  },
  unshift(...e) {
    return No(this, "unshift", e);
  },
  values() {
    return va(this, "values", (e) => Os(this, e));
  }
};
function va(e, s, o) {
  const a = Xn(e), l = a[s]();
  return a !== e && !qt(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const xc = Array.prototype;
function ks(e, s, o, a, l, r) {
  const c = Xn(e), u = c !== e && !qt(e), d = c[s];
  if (d !== xc[s]) {
    const g = d.apply(e, r);
    return u ? as(g) : g;
  }
  let m = o;
  c !== e && (u ? m = function(g, w) {
    return o.call(this, Os(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = d.call(c, m, a);
  return u && l ? l(v) : v;
}
function kl(e, s, o, a) {
  const l = Xn(e);
  let r = o;
  return l !== e && (qt(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Os(e, u), d, e);
  }), l[s](r, ...a);
}
function pa(e, s, o) {
  const a = st(e);
  xt(a, "iterate", sn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && ol(o[0]) ? (o[0] = st(o[0]), a[s](...o)) : l;
}
function No(e, s, o = []) {
  Is(), Qa();
  const a = st(e)[s].apply(e, o);
  return Xa(), Es(), a;
}
const Sc = /* @__PURE__ */ Ha("__proto__,__v_isRef,__isVue"), Pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ns)
);
function Ic(e) {
  ns(e) || (e = String(e));
  const s = st(this);
  return xt(s, "has", e), s.hasOwnProperty(e);
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
    const c = Ge(s);
    if (!l) {
      let d;
      if (c && (d = Cc[o]))
        return d;
      if (o === "hasOwnProperty")
        return Ic;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Tt(s) ? s : a
    );
    if ((ns(o) ? Pi.has(o) : Sc(o)) || (l || xt(s, "get", o), r))
      return u;
    if (Tt(u)) {
      const d = c && Ya(o) ? u : u.value;
      return l && lt(d) ? Nn(d) : d;
    }
    return lt(u) ? l ? Nn(u) : js(u) : u;
  }
}
class Di extends Mi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Ge(s) && Ya(o);
    if (!this._isShallow) {
      const m = Ts(r);
      if (!qt(a) && !Ts(a) && (r = st(r), a = st(a)), !c && Tt(r) && !Tt(a))
        return m || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : nt(s, o), d = Reflect.set(
      s,
      o,
      a,
      Tt(s) ? s : l
    );
    return s === st(l) && (u ? Vs(a, r) && Cs(s, "set", o, a) : Cs(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = nt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Cs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!ns(o) || !Pi.has(o)) && xt(s, "has", o), a;
  }
  ownKeys(s) {
    return xt(
      s,
      "iterate",
      Ge(s) ? "length" : eo
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
const Tc = /* @__PURE__ */ new Di(), Rc = /* @__PURE__ */ new Ec(), Pc = /* @__PURE__ */ new Di(!0);
const Ma = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function Mc(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = st(l), c = bo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...a), v = o ? Ma : s ? Io : as;
    return !s && xt(
      r,
      "iterate",
      d ? Pa : eo
    ), {
      // iterator protocol
      next() {
        const { value: g, done: w } = m.next();
        return w ? { value: g, done: w } : {
          value: u ? [v(g[0]), v(g[1])] : v(g),
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
function wn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Dc(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = st(r), u = st(l);
      e || (Vs(l, u) && xt(c, "get", l), xt(c, "get", u));
      const { has: d } = yn(c), m = s ? Ma : e ? Io : as;
      if (d.call(c, l))
        return m(r.get(l));
      if (d.call(c, u))
        return m(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && xt(st(l), "iterate", eo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = st(r), u = st(l);
      return e || (Vs(l, u) && xt(c, "has", l), xt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = st(u), m = s ? Ma : e ? Io : as;
      return !e && xt(d, "iterate", eo), u.forEach((v, g) => l.call(r, m(v), m(g), c));
    }
  };
  return ht(
    o,
    e ? {
      add: wn("add"),
      set: wn("set"),
      delete: wn("delete"),
      clear: wn("clear")
    } : {
      add(l) {
        !s && !qt(l) && !Ts(l) && (l = st(l));
        const r = st(this);
        return yn(r).has.call(r, l) || (r.add(l), Cs(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !qt(r) && !Ts(r) && (r = st(r));
        const c = st(this), { has: u, get: d } = yn(c);
        let m = u.call(c, l);
        m || (l = st(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), m ? Vs(r, v) && Cs(c, "set", l, r) : Cs(c, "add", l, r), this;
      },
      delete(l) {
        const r = st(this), { has: c, get: u } = yn(r);
        let d = c.call(r, l);
        d || (l = st(l), d = c.call(r, l)), u && u.call(r, l);
        const m = r.delete(l);
        return d && Cs(r, "delete", l, void 0), m;
      },
      clear() {
        const l = st(this), r = l.size !== 0, c = l.clear();
        return r && Cs(
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
function tl(e, s) {
  const o = Dc(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    nt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Lc = {
  get: /* @__PURE__ */ tl(!1, !1)
}, Nc = {
  get: /* @__PURE__ */ tl(!1, !0)
}, Uc = {
  get: /* @__PURE__ */ tl(!0, !1)
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
function js(e) {
  return Ts(e) ? e : sl(
    e,
    !1,
    Tc,
    Lc,
    Li
  );
}
function Fc(e) {
  return sl(
    e,
    !1,
    Pc,
    Nc,
    Ni
  );
}
function Nn(e) {
  return sl(
    e,
    !0,
    Rc,
    Uc,
    Ui
  );
}
function sl(e, s, o, a, l) {
  if (!lt(e) || e.__v_raw && !(s && e.__v_isReactive))
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
function to(e) {
  return Ts(e) ? to(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ts(e) {
  return !!(e && e.__v_isReadonly);
}
function qt(e) {
  return !!(e && e.__v_isShallow);
}
function ol(e) {
  return e ? !!e.__v_raw : !1;
}
function st(e) {
  const s = e && e.__v_raw;
  return s ? st(s) : e;
}
function Vc(e) {
  return !nt(e, "__v_skip") && Object.isExtensible(e) && wi(e, "__v_skip", !0), e;
}
const as = (e) => lt(e) ? js(e) : e, Io = (e) => lt(e) ? Nn(e) : e;
function Tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Bc(e, !1);
}
function Bc(e, s) {
  return Tt(e) ? e : new Wc(e, s);
}
class Wc {
  constructor(s, o) {
    this.dep = new el(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : st(s), this._value = o ? s : as(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || qt(s) || Ts(s);
    s = a ? s : st(s), Vs(s, o) && (this._rawValue = s, this._value = a ? s : as(s), this.dep.trigger());
  }
}
function He(e) {
  return Tt(e) ? e.value : e;
}
const Gc = {
  get: (e, s, o) => s === "__v_raw" ? e : He(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Tt(l) && !Tt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Ai(e) {
  return to(e) ? e : new Proxy(e, Gc);
}
class jc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new el(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ut !== this)
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
  return Ye(e) ? a = e : (a = e.get, l = e.set), new jc(a, l, o);
}
const _n = {}, Un = /* @__PURE__ */ new WeakMap();
let Xs;
function Kc(e, s = !1, o = Xs) {
  if (o) {
    let a = Un.get(o);
    a || Un.set(o, a = []), a.push(e);
  }
}
function qc(e, s, o = rt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, m = (E) => l ? E : qt(E) || l === !1 || l === 0 ? xs(E, 1) : xs(E);
  let v, g, w, p, _ = !1, C = !1;
  if (Tt(e) ? (g = () => e.value, _ = qt(e)) : to(e) ? (g = () => m(e), _ = !0) : Ge(e) ? (C = !0, _ = e.some((E) => to(E) || qt(E)), g = () => e.map((E) => {
    if (Tt(E))
      return E.value;
    if (to(E))
      return m(E);
    if (Ye(E))
      return d ? d(E, 2) : E();
  })) : Ye(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Is();
      try {
        w();
      } finally {
        Es();
      }
    }
    const E = Xs;
    Xs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Xs = E;
    }
  } : g = gs, s && l) {
    const E = g, D = l === !0 ? 1 / 0 : l;
    g = () => xs(E(), D);
  }
  const b = kc(), x = () => {
    v.stop(), b && b.active && qa(b.effects, v);
  };
  if (r && s) {
    const E = s;
    s = (...D) => {
      E(...D), x();
    };
  }
  let P = C ? new Array(e.length).fill(_n) : _n;
  const T = (E) => {
    if (!(!(v.flags & 1) || !v.dirty && !E))
      if (s) {
        const D = v.run();
        if (l || _ || (C ? D.some((N, O) => Vs(N, P[O])) : Vs(D, P))) {
          w && w();
          const N = Xs;
          Xs = v;
          try {
            const O = [
              D,
              // pass undefined as the old value when it's changed for the first time
              P === _n ? void 0 : C && P[0] === _n ? [] : P,
              p
            ];
            P = D, d ? d(s, 3, O) : (
              // @ts-expect-error
              s(...O)
            );
          } finally {
            Xs = N;
          }
        }
      } else
        v.run();
  };
  return u && u(T), v = new $i(g), v.scheduler = c ? () => c(T, !1) : T, p = (E) => Kc(E, !1, v), w = v.onStop = () => {
    const E = Un.get(v);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const D of E) D();
      Un.delete(v);
    }
  }, s ? a ? T(!0) : P = v.run() : c ? c(T.bind(null, !0), !0) : v.run(), x.pause = v.pause.bind(v), x.resume = v.resume.bind(v), x.stop = x, x;
}
function xs(e, s = 1 / 0, o) {
  if (s <= 0 || !lt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Tt(e))
    xs(e.value, s, o);
  else if (Ge(e))
    for (let a = 0; a < e.length; a++)
      xs(e[a], s, o);
  else if (Ro(e) || bo(e))
    e.forEach((a) => {
      xs(a, s, o);
    });
  else if (yi(e)) {
    for (const a in e)
      xs(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && xs(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    Zn(l, s, o);
  }
}
function ls(e, s, o, a) {
  if (Ye(e)) {
    const l = fn(e, s, o, a);
    return l && gi(l) && l.catch((r) => {
      Zn(r, s, o);
    }), l;
  }
  if (Ge(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ls(e[r], s, o, a));
    return l;
  }
}
function Zn(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || rt;
  if (s) {
    let u = s.parent;
    const d = s.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let g = 0; g < v.length; g++)
          if (v[g](e, d, m) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Is(), fn(r, null, 10, [
        e,
        d,
        m
      ]), Es();
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
const Lt = [];
let ms = -1;
const $o = [];
let zs = null, yo = 0;
const Oi = /* @__PURE__ */ Promise.resolve();
let An = null;
function yt(e) {
  const s = An || Oi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Jc(e) {
  let s = ms + 1, o = Lt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Lt[a], r = on(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function nl(e) {
  if (!(e.flags & 1)) {
    const s = on(e), o = Lt[Lt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= on(o) ? Lt.push(e) : Lt.splice(Jc(s), 0, e), e.flags |= 1, zi();
  }
}
function zi() {
  An || (An = Oi.then(Vi));
}
function Qc(e) {
  Ge(e) ? $o.push(...e) : zs && e.id === -1 ? zs.splice(yo + 1, 0, e) : e.flags & 1 || ($o.push(e), e.flags |= 1), zi();
}
function bl(e, s, o = ms + 1) {
  for (; o < Lt.length; o++) {
    const a = Lt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Lt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Fi(e) {
  if ($o.length) {
    const s = [...new Set($o)].sort(
      (o, a) => on(o) - on(a)
    );
    if ($o.length = 0, zs) {
      zs.push(...s);
      return;
    }
    for (zs = s, yo = 0; yo < zs.length; yo++) {
      const o = zs[yo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    zs = null, yo = 0;
  }
}
const on = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Vi(e) {
  try {
    for (ms = 0; ms < Lt.length; ms++) {
      const s = Lt[ms];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), fn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ms < Lt.length; ms++) {
      const s = Lt[ms];
      s && (s.flags &= -2);
    }
    ms = -1, Lt.length = 0, Fi(), An = null, (Lt.length || $o.length) && Vi();
  }
}
let kt = null, Bi = null;
function On(e) {
  const s = kt;
  return kt = e, Bi = e && e.type.__scopeId || null, s;
}
function h(e, s = kt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Vn(-1);
    const r = On(s);
    let c;
    try {
      c = e(...l);
    } finally {
      On(r), a._d && Vn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Xe(e, s) {
  if (kt === null)
    return e;
  const o = na(kt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, d = rt] = s[l];
    r && (Ye(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && xs(c), a.push({
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
function qs(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Is(), ls(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Es());
  }
}
const Wi = Symbol("_vte"), Gi = (e) => e.__isTeleport, Ko = (e) => e && (e.disabled || e.disabled === ""), $l = (e) => e && (e.defer || e.defer === ""), Cl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Da = (e, s) => {
  const o = e && e.to;
  return gt(o) ? s ? s(o) : null : o;
}, ji = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: C, createComment: b }
    } = m, x = Ko(s.props);
    let { shapeFlag: P, children: T, dynamicChildren: E } = s;
    if (e == null) {
      const D = s.el = C(""), N = s.anchor = C("");
      p(D, o, a), p(N, o, a);
      const O = (M, se) => {
        P & 16 && v(
          T,
          M,
          se,
          l,
          r,
          c,
          u,
          d
        );
      }, I = () => {
        const M = s.target = Da(s.props, _), se = Hi(M, s, C, p);
        M && (c !== "svg" && Cl(M) ? c = "svg" : c !== "mathml" && xl(M) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(M), x || (O(M, se), Tn(s, !1)));
      };
      x && (O(o, N), Tn(s, !0)), $l(s.props) ? (s.el.__isMounted = !1, Mt(() => {
        I(), delete s.el.__isMounted;
      }, r)) : I();
    } else {
      if ($l(s.props) && e.el.__isMounted === !1) {
        Mt(() => {
          ji.process(
            e,
            s,
            o,
            a,
            l,
            r,
            c,
            u,
            d,
            m
          );
        }, r);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const D = s.anchor = e.anchor, N = s.target = e.target, O = s.targetAnchor = e.targetAnchor, I = Ko(e.props), M = I ? o : N, se = I ? D : O;
      if (c === "svg" || Cl(N) ? c = "svg" : (c === "mathml" || xl(N)) && (c = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        M,
        l,
        r,
        c,
        u
      ), cl(e, s, !0)) : d || g(
        e,
        s,
        M,
        se,
        l,
        r,
        c,
        u,
        !1
      ), x)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : kn(
          s,
          o,
          D,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const Y = s.target = Da(
          s.props,
          _
        );
        Y && kn(
          s,
          Y,
          null,
          m,
          0
        );
      } else I && kn(
        s,
        N,
        O,
        m,
        1
      );
      Tn(s, x);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), r && l(d), c & 16) {
      const p = r || !Ko(w);
      for (let _ = 0; _ < u.length; _++) {
        const C = u[_];
        a(
          C,
          s,
          o,
          p,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: kn,
  hydrate: Xc
};
function kn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: m, props: v } = e, g = r === 2;
  if (g && a(c, s, o), (!g || Ko(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && a(u, s, o);
}
function Xc(e, s, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: m, createText: v }
}, g) {
  function w(C, b, x, P) {
    b.anchor = g(
      c(C),
      b,
      u(C),
      o,
      a,
      l,
      r
    ), b.targetStart = x, b.targetAnchor = P;
  }
  const p = s.target = Da(
    s.props,
    d
  ), _ = Ko(s.props);
  if (p) {
    const C = p._lpa || p.firstChild;
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
        let b = C;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor")
              s.targetStart = b;
            else if (b.data === "teleport anchor") {
              s.targetAnchor = b, p._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          b = c(b);
        }
        s.targetAnchor || Hi(p, s, v, m), g(
          C && c(C),
          s,
          p,
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
const bt = ji;
function Tn(e, s) {
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
const $s = Symbol("_leaveCb"), bn = Symbol("_enterCb");
function Ki() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return et(() => {
    e.isMounted = !0;
  }), tr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ht = [Function, Array], qi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ht,
  onEnter: Ht,
  onAfterEnter: Ht,
  onEnterCancelled: Ht,
  // leave
  onBeforeLeave: Ht,
  onLeave: Ht,
  onAfterLeave: Ht,
  onLeaveCancelled: Ht,
  // appear
  onBeforeAppear: Ht,
  onAppear: Ht,
  onAfterAppear: Ht,
  onAppearCancelled: Ht
}, Yi = (e) => {
  const s = e.subTree;
  return s.component ? Yi(s.component) : s;
}, Zc = {
  name: "BaseTransition",
  props: qi,
  setup(e, { slots: s }) {
    const o = dl(), a = Ki();
    return () => {
      const l = s.default && al(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = Ji(l), c = st(e), { mode: u } = c;
      if (a.isLeaving)
        return ga(r);
      const d = Sl(r);
      if (!d)
        return ga(r);
      let m = nn(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== St && oo(d, m);
      let v = o.subTree && Sl(o.subTree);
      if (v && v.type !== St && !Zs(v, d) && Yi(o).type !== St) {
        let g = nn(
          v,
          c,
          a,
          o
        );
        if (oo(v, g), u === "out-in" && d.type !== St)
          return a.isLeaving = !0, g.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, ga(r);
        u === "in-out" && d.type !== St ? g.delayLeave = (w, p, _) => {
          const C = Qi(
            a,
            v
          );
          C[String(v.key)] = v, w[$s] = () => {
            p(), w[$s] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function Ji(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== St) {
        s = o;
        break;
      }
  }
  return s;
}
const eu = Zc;
function Qi(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function nn(e, s, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: C,
    onBeforeAppear: b,
    onAppear: x,
    onAfterAppear: P,
    onAppearCancelled: T
  } = s, E = String(e.key), D = Qi(o, e), N = (M, se) => {
    M && ls(
      M,
      a,
      9,
      se
    );
  }, O = (M, se) => {
    const Y = se[1];
    N(M, se), Ge(M) ? M.every((F) => F.length <= 1) && Y() : M.length <= 1 && Y();
  }, I = {
    mode: c,
    persisted: u,
    beforeEnter(M) {
      let se = d;
      if (!o.isMounted)
        if (r)
          se = b || d;
        else
          return;
      M[$s] && M[$s](
        !0
        /* cancelled */
      );
      const Y = D[E];
      Y && Zs(e, Y) && Y.el[$s] && Y.el[$s](), N(se, [M]);
    },
    enter(M) {
      let se = m, Y = v, F = g;
      if (!o.isMounted)
        if (r)
          se = x || m, Y = P || v, F = T || g;
        else
          return;
      let z = !1;
      const Z = M[bn] = (q) => {
        z || (z = !0, q ? N(F, [M]) : N(Y, [M]), I.delayedLeave && I.delayedLeave(), M[bn] = void 0);
      };
      se ? O(se, [M, Z]) : Z();
    },
    leave(M, se) {
      const Y = String(e.key);
      if (M[bn] && M[bn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return se();
      N(w, [M]);
      let F = !1;
      const z = M[$s] = (Z) => {
        F || (F = !0, se(), Z ? N(C, [M]) : N(_, [M]), M[$s] = void 0, D[Y] === e && delete D[Y]);
      };
      D[Y] = e, p ? O(p, [M, z]) : z();
    },
    clone(M) {
      const se = nn(
        M,
        s,
        o,
        a,
        l
      );
      return l && l(se), se;
    }
  };
  return I;
}
function ga(e) {
  if (ea(e))
    return e = Bs(e), e.children = null, e;
}
function Sl(e) {
  if (!ea(e))
    return Gi(e.type) && e.children ? Ji(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Ye(o.default))
      return o.default();
  }
}
function oo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, oo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function al(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, a = a.concat(
      al(c.children, s, u)
    )) : (s || c.type !== St) && a.push(u != null ? Bs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function _e(e, s) {
  return Ye(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ht({ name: e.name }, s, { setup: e })
  ) : e;
}
function Xi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zn = /* @__PURE__ */ new WeakMap();
function qo(e, s, o, a, l = !1) {
  if (Ge(e)) {
    e.forEach(
      (_, C) => qo(
        _,
        s && (Ge(s) ? s[C] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (Co(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && qo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? na(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, m = s && s.r, v = u.refs === rt ? u.refs = {} : u.refs, g = u.setupState, w = st(g), p = g === rt ? pi : (_) => nt(w, _);
  if (m != null && m !== d) {
    if (Il(s), gt(m))
      v[m] = null, p(m) && (g[m] = null);
    else if (Tt(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Ye(d))
    fn(d, u, 12, [c, v]);
  else {
    const _ = gt(d), C = Tt(d);
    if (_ || C) {
      const b = () => {
        if (e.f) {
          const x = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Ge(x) && qa(x, r);
          else if (Ge(x))
            x.includes(r) || x.push(r);
          else if (_)
            v[d] = [r], p(d) && (g[d] = v[d]);
          else {
            const P = [r];
            d.value = P, e.k && (v[e.k] = P);
          }
        } else _ ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const x = () => {
          b(), zn.delete(e);
        };
        x.id = -1, zn.set(e, x), Mt(x, o);
      } else
        Il(e), b();
    }
  }
}
function Il(e) {
  const s = zn.get(e);
  s && (s.flags |= 8, zn.delete(e));
}
Qn().requestIdleCallback;
Qn().cancelIdleCallback;
const Co = (e) => !!e.type.__asyncLoader, ea = (e) => e.type.__isKeepAlive;
function tu(e, s) {
  Zi(e, "a", s);
}
function su(e, s) {
  Zi(e, "da", s);
}
function Zi(e, s, o = It) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ta(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ea(l.parent.vnode) && ou(a, s, o, l), l = l.parent;
  }
}
function ou(e, s, o, a) {
  const l = ta(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Hs(() => {
    qa(a[s], l);
  }, o);
}
function ta(e, s, o = It, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Is();
      const u = mn(o), d = ls(s, o, e, c);
      return u(), Es(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Rs = (e) => (s, o = It) => {
  (!rn || e === "sp") && ta(e, (...a) => s(...a), o);
}, nu = Rs("bm"), et = Rs("m"), au = Rs(
  "bu"
), er = Rs("u"), tr = Rs(
  "bum"
), Hs = Rs("um"), lu = Rs(
  "sp"
), iu = Rs("rtg"), ru = Rs("rtc");
function cu(e, s = It) {
  ta("ec", e, s);
}
const uu = "components", sr = Symbol.for("v-ndc");
function ll(e) {
  return gt(e) ? du(uu, e, !1) || e : e || sr;
}
function du(e, s, o = !0, a = !1) {
  const l = kt || It;
  if (l) {
    const r = l.type;
    {
      const u = Zu(
        r,
        !1
      );
      if (u && (u === s || u === Qt(s) || u === Yn(Qt(s))))
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
  return e && (e[s] || e[Qt(s)] || e[Yn(Qt(s))]);
}
function we(e, s, o, a) {
  let l;
  const r = o, c = Ge(e);
  if (c || gt(e)) {
    const u = c && to(e);
    let d = !1, m = !1;
    u && (d = !qt(e), m = Ts(e), e = Xn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        d ? m ? Io(as(e[v])) : as(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (lt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => s(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, m = u.length; d < m; d++) {
        const v = u[d];
        l[d] = s(e[v], v, d, r);
      }
    }
  else
    l = [];
  return l;
}
function no(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Ge(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function Je(e, s, o = {}, a, l) {
  if (kt.ce || kt.parent && Co(kt.parent) && kt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), R(
      B,
      null,
      [S("slot", o, a && a())],
      m ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && or(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    B,
    {
      key: (u && !ns(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function or(e) {
  return e.some((s) => ln(s) ? !(s.type === St || s.type === B && !or(s.children)) : !0) ? e : null;
}
const La = (e) => e ? br(e) ? na(e) : La(e.parent) : null, Yo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ht(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => La(e.parent),
    $root: (e) => La(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ar(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      nl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = yt.bind(e.proxy)),
    $watch: (e) => $u.bind(e)
  })
), ha = (e, s) => e !== rt && !e.__isScriptSetup && nt(e, s), fu = {
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
        if (ha(a, s))
          return c[s] = 1, a[s];
        if (l !== rt && nt(l, s))
          return c[s] = 2, l[s];
        if (nt(r, s))
          return c[s] = 3, r[s];
        if (o !== rt && nt(o, s))
          return c[s] = 4, o[s];
        Na && (c[s] = 0);
      }
    }
    const m = Yo[s];
    let v, g;
    if (m)
      return s === "$attrs" && xt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== rt && nt(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, nt(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return ha(l, s) ? (l[s] = o, !0) : a !== rt && nt(a, s) ? (a[s] = o, !0) : nt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== rt && u[0] !== "$" && nt(e, u) || ha(s, u) || nt(r, u) || nt(a, u) || nt(Yo, u) || nt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : nt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Tl(e) {
  return Ge(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Na = !0;
function mu(e) {
  const s = ar(e), o = e.proxy, a = e.ctx;
  Na = !1, s.beforeCreate && Rl(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: g,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: C,
    deactivated: b,
    beforeDestroy: x,
    beforeUnmount: P,
    destroyed: T,
    unmounted: E,
    render: D,
    renderTracked: N,
    renderTriggered: O,
    errorCaptured: I,
    serverPrefetch: M,
    // public API
    expose: se,
    inheritAttrs: Y,
    // assets
    components: F,
    directives: z,
    filters: Z
  } = s;
  if (m && vu(m, a, null), c)
    for (const ee in c) {
      const W = c[ee];
      Ye(W) && (a[ee] = W.bind(o));
    }
  if (l) {
    const ee = l.call(o, o);
    lt(ee) && (e.data = js(ee));
  }
  if (Na = !0, r)
    for (const ee in r) {
      const W = r[ee], ce = Ye(W) ? W.bind(o, o) : Ye(W.get) ? W.get.bind(o, o) : gs, de = !Ye(W) && Ye(W.set) ? W.set.bind(o) : gs, Ne = L({
        get: ce,
        set: de
      });
      Object.defineProperty(a, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (Fe) => Ne.value = Fe
      });
    }
  if (u)
    for (const ee in u)
      nr(u[ee], a, o, ee);
  if (d) {
    const ee = Ye(d) ? d.call(o) : d;
    Reflect.ownKeys(ee).forEach((W) => {
      _u(W, ee[W]);
    });
  }
  v && Rl(v, e, "c");
  function A(ee, W) {
    Ge(W) ? W.forEach((ce) => ee(ce.bind(o))) : W && ee(W.bind(o));
  }
  if (A(nu, g), A(et, w), A(au, p), A(er, _), A(tu, C), A(su, b), A(cu, I), A(ru, N), A(iu, O), A(tr, P), A(Hs, E), A(lu, M), Ge(se))
    if (se.length) {
      const ee = e.exposed || (e.exposed = {});
      se.forEach((W) => {
        Object.defineProperty(ee, W, {
          get: () => o[W],
          set: (ce) => o[W] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === gs && (e.render = D), Y != null && (e.inheritAttrs = Y), F && (e.components = F), z && (e.directives = z), M && Xi(e);
}
function vu(e, s, o = gs) {
  Ge(e) && (e = Ua(e));
  for (const a in e) {
    const l = e[a];
    let r;
    lt(l) ? "default" in l ? r = Rn(
      l.from || a,
      l.default,
      !0
    ) : r = Rn(l.from || a) : r = Rn(l), Tt(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Rl(e, s, o) {
  ls(
    Ge(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function nr(e, s, o, a) {
  let l = a.includes(".") ? rr(o, a) : () => o[a];
  if (gt(e)) {
    const r = s[e];
    Ye(r) && pt(l, r);
  } else if (Ye(e))
    pt(l, e.bind(o));
  else if (lt(e))
    if (Ge(e))
      e.forEach((r) => nr(r, s, o, a));
    else {
      const r = Ye(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ye(r) && pt(l, r, e);
    }
}
function ar(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (m) => Fn(d, m, c, !0)
  ), Fn(d, s, c)), lt(s) && r.set(s, d), d;
}
function Fn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Fn(e, r, o, !0), l && l.forEach(
    (c) => Fn(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = pu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const pu = {
  data: Pl,
  props: Ml,
  emits: Ml,
  // objects
  methods: Wo,
  computed: Wo,
  // lifecycle
  beforeCreate: Pt,
  created: Pt,
  beforeMount: Pt,
  mounted: Pt,
  beforeUpdate: Pt,
  updated: Pt,
  beforeDestroy: Pt,
  beforeUnmount: Pt,
  destroyed: Pt,
  unmounted: Pt,
  activated: Pt,
  deactivated: Pt,
  errorCaptured: Pt,
  serverPrefetch: Pt,
  // assets
  components: Wo,
  directives: Wo,
  // watch
  watch: hu,
  // provide / inject
  provide: Pl,
  inject: gu
};
function Pl(e, s) {
  return s ? e ? function() {
    return ht(
      Ye(e) ? e.call(this, this) : e,
      Ye(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function gu(e, s) {
  return Wo(Ua(e), Ua(s));
}
function Ua(e) {
  if (Ge(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Pt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Wo(e, s) {
  return e ? ht(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Ml(e, s) {
  return e ? Ge(e) && Ge(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : ht(
    /* @__PURE__ */ Object.create(null),
    Tl(e),
    Tl(s ?? {})
  ) : s;
}
function hu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = ht(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Pt(e[a], s[a]);
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
    Ye(a) || (a = ht({}, a)), l != null && !lt(l) && (l = null);
    const r = lr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = r.app = {
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
      use(v, ...g) {
        return c.has(v) || (v && Ye(v.install) ? (c.add(v), v.install(m, ...g)) : Ye(v) && (c.add(v), v(m, ...g))), m;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), m;
      },
      component(v, g) {
        return g ? (r.components[v] = g, m) : r.components[v];
      },
      directive(v, g) {
        return g ? (r.directives[v] = g, m) : r.directives[v];
      },
      mount(v, g, w) {
        if (!d) {
          const p = m._ceVNode || S(a, l);
          return p.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, na(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (ls(
          u,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, g) {
        return r.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = xo;
        xo = m;
        try {
          return v();
        } finally {
          xo = g;
        }
      }
    };
    return m;
  };
}
let xo = null;
function _u(e, s) {
  if (It) {
    let o = It.provides;
    const a = It.parent && It.parent.provides;
    a === o && (o = It.provides = Object.create(a)), o[e] = s;
  }
}
function Rn(e, s, o = !1) {
  const a = dl();
  if (a || xo) {
    let l = xo ? xo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ye(s) ? s.call(a && a.proxy) : s;
  }
}
const ku = Symbol.for("v-scx"), bu = () => Rn(ku);
function pt(e, s, o) {
  return ir(e, s, o);
}
function ir(e, s, o = rt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = ht({}, o), d = s && a || !s && r !== "post";
  let m;
  if (rn) {
    if (r === "sync") {
      const p = bu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = It;
  u.call = (p, _, C) => ls(p, v, _, C);
  let g = !1;
  r === "post" ? u.scheduler = (p) => {
    Mt(p, v && v.suspense);
  } : r !== "sync" && (g = !0, u.scheduler = (p, _) => {
    _ ? p() : nl(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = qc(e, s, u);
  return rn && (m ? m.push(w) : d && w()), w;
}
function $u(e, s, o) {
  const a = this.proxy, l = gt(e) ? e.includes(".") ? rr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Ye(s) ? r = s : (r = s.handler, o = s);
  const c = mn(this), u = ir(l, r.bind(a), o);
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
const Cu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Qt(s)}Modifiers`] || e[`${Gs(s)}Modifiers`];
function xu(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || rt;
  let l = o;
  const r = s.startsWith("update:"), c = r && Cu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => gt(v) ? v.trim() : v)), c.number && (l = o.map(Jn)));
  let u, d = a[u = da(s)] || // also try camelCase event handler (#2249)
  a[u = da(Qt(s))];
  !d && r && (d = a[u = da(Gs(s))]), d && ls(
    d,
    e,
    6,
    l
  );
  const m = a[u + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ls(
      m,
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
  if (!Ye(e)) {
    const d = (m) => {
      const v = cr(m, s, !0);
      v && (u = !0, ht(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (lt(e) && a.set(e, null), null) : (Ge(r) ? r.forEach((d) => c[d] = null) : ht(c, r), lt(e) && a.set(e, c), c);
}
function sa(e, s) {
  return !e || !Kn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), nt(e, s[0].toLowerCase() + s.slice(1)) || nt(e, Gs(s)) || nt(e, s));
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
    emit: d,
    render: m,
    renderCache: v,
    props: g,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: C
  } = e, b = On(e);
  let x, P;
  try {
    if (o.shapeFlag & 4) {
      const E = l || a, D = E;
      x = ps(
        m.call(
          D,
          E,
          v,
          g,
          p,
          w,
          _
        )
      ), P = u;
    } else {
      const E = s;
      x = ps(
        E.length > 1 ? E(
          g,
          { attrs: u, slots: c, emit: d }
        ) : E(
          g,
          null
        )
      ), P = s.props ? u : Iu(u);
    }
  } catch (E) {
    Jo.length = 0, Zn(E, e, 1), x = S(St);
  }
  let T = x;
  if (P && C !== !1) {
    const E = Object.keys(P), { shapeFlag: D } = T;
    E.length && D & 7 && (r && E.some(Ka) && (P = Eu(
      P,
      r
    )), T = Bs(T, P, !1, !0));
  }
  return o.dirs && (T = Bs(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && oo(T, o.transition), x = T, On(b), x;
}
const Iu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Kn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Eu = (e, s) => {
  const o = {};
  for (const a in e)
    (!Ka(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Tu(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = s, m = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Ll(a, c, m) : !!c;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== a[w] && !sa(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Ll(a, c, m) : !0 : !!c;
  return !1;
}
function Ll(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !sa(o, r))
      return !0;
  }
  return !1;
}
function Ru({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const ur = {}, dr = () => Object.create(ur), fr = (e) => Object.getPrototypeOf(e) === ur;
function Pu(e, s, o, a = !1) {
  const l = {}, r = dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mr(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : Fc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Mu(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = st(l), [d] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        let w = v[g];
        if (sa(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (nt(r, w))
            p !== r[w] && (r[w] = p, m = !0);
          else {
            const _ = Qt(w);
            l[_] = Aa(
              d,
              u,
              _,
              p,
              e,
              !1
            );
          }
        else
          p !== r[w] && (r[w] = p, m = !0);
      }
    }
  } else {
    mr(e, s, l, r) && (m = !0);
    let v;
    for (const g in u)
      (!s || // for camelCase
      !nt(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Gs(g)) === g || !nt(s, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Aa(
        d,
        u,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (r !== u)
      for (const g in r)
        (!s || !nt(s, g)) && (delete r[g], m = !0);
  }
  m && Cs(e.attrs, "set", "");
}
function mr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Go(d))
        continue;
      const m = s[d];
      let v;
      l && nt(l, v = Qt(d)) ? !r || !r.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : sa(e.emitsOptions, d) || (!(d in a) || m !== a[d]) && (a[d] = m, c = !0);
    }
  if (r) {
    const d = st(o), m = u || rt;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      o[g] = Aa(
        l,
        d,
        g,
        m[g],
        e,
        !nt(m, g)
      );
    }
  }
  return c;
}
function Aa(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = nt(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Ye(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          a = m[o];
        else {
          const v = mn(l);
          a = m[o] = d.call(
            null,
            s
          ), v();
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
    ] && (a === "" || a === Gs(o)) && (a = !0));
  }
  return a;
}
const Du = /* @__PURE__ */ new WeakMap();
function vr(e, s, o = !1) {
  const a = o ? Du : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!Ye(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = vr(g, s, !0);
      ht(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return lt(e) && a.set(e, ko), ko;
  if (Ge(r))
    for (let v = 0; v < r.length; v++) {
      const g = Qt(r[v]);
      Nl(g) && (c[g] = rt);
    }
  else if (r)
    for (const v in r) {
      const g = Qt(v);
      if (Nl(g)) {
        const w = r[v], p = c[g] = Ge(w) || Ye(w) ? { type: w } : ht({}, w), _ = p.type;
        let C = !1, b = !0;
        if (Ge(_))
          for (let x = 0; x < _.length; ++x) {
            const P = _[x], T = Ye(P) && P.name;
            if (T === "Boolean") {
              C = !0;
              break;
            } else T === "String" && (b = !1);
          }
        else
          C = Ye(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = b, (C || nt(p, "default")) && u.push(g);
      }
    }
  const m = [c, u];
  return lt(e) && a.set(e, m), m;
}
function Nl(e) {
  return e[0] !== "$" && !Go(e);
}
const il = (e) => e === "_" || e === "_ctx" || e === "$stable", rl = (e) => Ge(e) ? e.map(ps) : [ps(e)], Lu = (e, s, o) => {
  if (s._n)
    return s;
  const a = h((...l) => rl(s(...l)), o);
  return a._c = !1, a;
}, pr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (il(l)) continue;
    const r = e[l];
    if (Ye(r))
      s[l] = Lu(l, r, a);
    else if (r != null) {
      const c = rl(r);
      s[l] = () => c;
    }
  }
}, gr = (e, s) => {
  const o = rl(s);
  e.slots.default = () => o;
}, hr = (e, s, o) => {
  for (const a in s)
    (o || !il(a)) && (e[a] = s[a]);
}, Nu = (e, s, o) => {
  const a = e.slots = dr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (hr(a, s, o), o && wi(a, "_", l, !0)) : pr(s, a);
  } else s && gr(e, s);
}, Uu = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = rt;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : hr(l, s, o) : (r = !s.$stable, pr(s, l)), c = s;
  } else s && (gr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !il(u) && c[u] == null && delete l[u];
}, Mt = Vu;
function Au(e) {
  return Ou(e);
}
function Ou(e, s) {
  const o = Qn();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: g,
    nextSibling: w,
    setScopeId: p = gs,
    insertStaticContent: _
  } = e, C = (U, j, le, H = null, G = null, Q = null, ve = void 0, ie = null, be = !!j.dynamicChildren) => {
    if (U === j)
      return;
    U && !Zs(U, j) && (H = ue(U), Fe(U, G, Q, !0), U = null), j.patchFlag === -2 && (be = !1, j.dynamicChildren = null);
    const { type: ae, ref: Ue, shapeFlag: Pe } = j;
    switch (ae) {
      case oa:
        b(U, j, le, H);
        break;
      case St:
        x(U, j, le, H);
        break;
      case wa:
        U == null && P(j, le, H, ve);
        break;
      case B:
        F(
          U,
          j,
          le,
          H,
          G,
          Q,
          ve,
          ie,
          be
        );
        break;
      default:
        Pe & 1 ? D(
          U,
          j,
          le,
          H,
          G,
          Q,
          ve,
          ie,
          be
        ) : Pe & 6 ? z(
          U,
          j,
          le,
          H,
          G,
          Q,
          ve,
          ie,
          be
        ) : (Pe & 64 || Pe & 128) && ae.process(
          U,
          j,
          le,
          H,
          G,
          Q,
          ve,
          ie,
          be,
          Le
        );
    }
    Ue != null && G ? qo(Ue, U && U.ref, Q, j || U, !j) : Ue == null && U && U.ref != null && qo(U.ref, null, Q, U, !0);
  }, b = (U, j, le, H) => {
    if (U == null)
      a(
        j.el = u(j.children),
        le,
        H
      );
    else {
      const G = j.el = U.el;
      j.children !== U.children && m(G, j.children);
    }
  }, x = (U, j, le, H) => {
    U == null ? a(
      j.el = d(j.children || ""),
      le,
      H
    ) : j.el = U.el;
  }, P = (U, j, le, H) => {
    [U.el, U.anchor] = _(
      U.children,
      j,
      le,
      H,
      U.el,
      U.anchor
    );
  }, T = ({ el: U, anchor: j }, le, H) => {
    let G;
    for (; U && U !== j; )
      G = w(U), a(U, le, H), U = G;
    a(j, le, H);
  }, E = ({ el: U, anchor: j }) => {
    let le;
    for (; U && U !== j; )
      le = w(U), l(U), U = le;
    l(j);
  }, D = (U, j, le, H, G, Q, ve, ie, be) => {
    if (j.type === "svg" ? ve = "svg" : j.type === "math" && (ve = "mathml"), U == null)
      N(
        j,
        le,
        H,
        G,
        Q,
        ve,
        ie,
        be
      );
    else {
      const ae = U.el && U.el._isVueCE ? U.el : null;
      try {
        ae && ae._beginPatch(), M(
          U,
          j,
          G,
          Q,
          ve,
          ie,
          be
        );
      } finally {
        ae && ae._endPatch();
      }
    }
  }, N = (U, j, le, H, G, Q, ve, ie) => {
    let be, ae;
    const { props: Ue, shapeFlag: Pe, transition: fe, dirs: V } = U;
    if (be = U.el = c(
      U.type,
      Q,
      Ue && Ue.is,
      Ue
    ), Pe & 8 ? v(be, U.children) : Pe & 16 && I(
      U.children,
      be,
      null,
      H,
      G,
      ya(U, Q),
      ve,
      ie
    ), V && qs(U, null, H, "created"), O(be, U, U.scopeId, ve, H), Ue) {
      for (const Se in Ue)
        Se !== "value" && !Go(Se) && r(be, Se, null, Ue[Se], Q, H);
      "value" in Ue && r(be, "value", null, Ue.value, Q), (ae = Ue.onVnodeBeforeMount) && us(ae, H, U);
    }
    V && qs(U, null, H, "beforeMount");
    const Ae = zu(G, fe);
    Ae && fe.beforeEnter(be), a(be, j, le), ((ae = Ue && Ue.onVnodeMounted) || Ae || V) && Mt(() => {
      ae && us(ae, H, U), Ae && fe.enter(be), V && qs(U, null, H, "mounted");
    }, G);
  }, O = (U, j, le, H, G) => {
    if (le && p(U, le), H)
      for (let Q = 0; Q < H.length; Q++)
        p(U, H[Q]);
    if (G) {
      let Q = G.subTree;
      if (j === Q || wr(Q.type) && (Q.ssContent === j || Q.ssFallback === j)) {
        const ve = G.vnode;
        O(
          U,
          ve,
          ve.scopeId,
          ve.slotScopeIds,
          G.parent
        );
      }
    }
  }, I = (U, j, le, H, G, Q, ve, ie, be = 0) => {
    for (let ae = be; ae < U.length; ae++) {
      const Ue = U[ae] = ie ? Fs(U[ae]) : ps(U[ae]);
      C(
        null,
        Ue,
        j,
        le,
        H,
        G,
        Q,
        ve,
        ie
      );
    }
  }, M = (U, j, le, H, G, Q, ve) => {
    const ie = j.el = U.el;
    let { patchFlag: be, dynamicChildren: ae, dirs: Ue } = j;
    be |= U.patchFlag & 16;
    const Pe = U.props || rt, fe = j.props || rt;
    let V;
    if (le && Ys(le, !1), (V = fe.onVnodeBeforeUpdate) && us(V, le, j, U), Ue && qs(j, U, le, "beforeUpdate"), le && Ys(le, !0), (Pe.innerHTML && fe.innerHTML == null || Pe.textContent && fe.textContent == null) && v(ie, ""), ae ? se(
      U.dynamicChildren,
      ae,
      ie,
      le,
      H,
      ya(j, G),
      Q
    ) : ve || W(
      U,
      j,
      ie,
      null,
      le,
      H,
      ya(j, G),
      Q,
      !1
    ), be > 0) {
      if (be & 16)
        Y(ie, Pe, fe, le, G);
      else if (be & 2 && Pe.class !== fe.class && r(ie, "class", null, fe.class, G), be & 4 && r(ie, "style", Pe.style, fe.style, G), be & 8) {
        const Ae = j.dynamicProps;
        for (let Se = 0; Se < Ae.length; Se++) {
          const xe = Ae[Se], Me = Pe[xe], Re = fe[xe];
          (Re !== Me || xe === "value") && r(ie, xe, Me, Re, G, le);
        }
      }
      be & 1 && U.children !== j.children && v(ie, j.children);
    } else !ve && ae == null && Y(ie, Pe, fe, le, G);
    ((V = fe.onVnodeUpdated) || Ue) && Mt(() => {
      V && us(V, le, j, U), Ue && qs(j, U, le, "updated");
    }, H);
  }, se = (U, j, le, H, G, Q, ve) => {
    for (let ie = 0; ie < j.length; ie++) {
      const be = U[ie], ae = j[ie], Ue = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        be.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (be.type === B || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zs(be, ae) || // - In the case of a component, it could contain anything.
        be.shapeFlag & 198) ? g(be.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          le
        )
      );
      C(
        be,
        ae,
        Ue,
        null,
        H,
        G,
        Q,
        ve,
        !0
      );
    }
  }, Y = (U, j, le, H, G) => {
    if (j !== le) {
      if (j !== rt)
        for (const Q in j)
          !Go(Q) && !(Q in le) && r(
            U,
            Q,
            j[Q],
            null,
            G,
            H
          );
      for (const Q in le) {
        if (Go(Q)) continue;
        const ve = le[Q], ie = j[Q];
        ve !== ie && Q !== "value" && r(U, Q, ie, ve, G, H);
      }
      "value" in le && r(U, "value", j.value, le.value, G);
    }
  }, F = (U, j, le, H, G, Q, ve, ie, be) => {
    const ae = j.el = U ? U.el : u(""), Ue = j.anchor = U ? U.anchor : u("");
    let { patchFlag: Pe, dynamicChildren: fe, slotScopeIds: V } = j;
    V && (ie = ie ? ie.concat(V) : V), U == null ? (a(ae, le, H), a(Ue, le, H), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      le,
      Ue,
      G,
      Q,
      ve,
      ie,
      be
    )) : Pe > 0 && Pe & 64 && fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    U.dynamicChildren ? (se(
      U.dynamicChildren,
      fe,
      le,
      G,
      Q,
      ve,
      ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || G && j === G.subTree) && cl(
      U,
      j,
      !0
      /* shallow */
    )) : W(
      U,
      j,
      le,
      Ue,
      G,
      Q,
      ve,
      ie,
      be
    );
  }, z = (U, j, le, H, G, Q, ve, ie, be) => {
    j.slotScopeIds = ie, U == null ? j.shapeFlag & 512 ? G.ctx.activate(
      j,
      le,
      H,
      ve,
      be
    ) : Z(
      j,
      le,
      H,
      G,
      Q,
      ve,
      be
    ) : q(U, j, be);
  }, Z = (U, j, le, H, G, Q, ve) => {
    const ie = U.component = qu(
      U,
      H,
      G
    );
    if (ea(U) && (ie.ctx.renderer = Le), Yu(ie, !1, ve), ie.asyncDep) {
      if (G && G.registerDep(ie, A, ve), !U.el) {
        const be = ie.subTree = S(St);
        x(null, be, j, le), U.placeholder = be.el;
      }
    } else
      A(
        ie,
        U,
        j,
        le,
        G,
        Q,
        ve
      );
  }, q = (U, j, le) => {
    const H = j.component = U.component;
    if (Tu(U, j, le))
      if (H.asyncDep && !H.asyncResolved) {
        ee(H, j, le);
        return;
      } else
        H.next = j, H.update();
    else
      j.el = U.el, H.vnode = j;
  }, A = (U, j, le, H, G, Q, ve) => {
    const ie = () => {
      if (U.isMounted) {
        let { next: Pe, bu: fe, u: V, parent: Ae, vnode: Se } = U;
        {
          const ye = yr(U);
          if (ye) {
            Pe && (Pe.el = Se.el, ee(U, Pe, ve)), ye.asyncDep.then(() => {
              U.isUnmounted || ie();
            });
            return;
          }
        }
        let xe = Pe, Me;
        Ys(U, !1), Pe ? (Pe.el = Se.el, ee(U, Pe, ve)) : Pe = Se, fe && En(fe), (Me = Pe.props && Pe.props.onVnodeBeforeUpdate) && us(Me, Ae, Pe, Se), Ys(U, !0);
        const Re = Dl(U), Qe = U.subTree;
        U.subTree = Re, C(
          Qe,
          Re,
          // parent may have changed if it's in a teleport
          g(Qe.el),
          // anchor may have changed if it's in a fragment
          ue(Qe),
          U,
          G,
          Q
        ), Pe.el = Re.el, xe === null && Ru(U, Re.el), V && Mt(V, G), (Me = Pe.props && Pe.props.onVnodeUpdated) && Mt(
          () => us(Me, Ae, Pe, Se),
          G
        );
      } else {
        let Pe;
        const { el: fe, props: V } = j, { bm: Ae, m: Se, parent: xe, root: Me, type: Re } = U, Qe = Co(j);
        Ys(U, !1), Ae && En(Ae), !Qe && (Pe = V && V.onVnodeBeforeMount) && us(Pe, xe, j), Ys(U, !0);
        {
          Me.ce && // @ts-expect-error _def is private
          Me.ce._def.shadowRoot !== !1 && Me.ce._injectChildStyle(Re);
          const ye = U.subTree = Dl(U);
          C(
            null,
            ye,
            le,
            H,
            U,
            G,
            Q
          ), j.el = ye.el;
        }
        if (Se && Mt(Se, G), !Qe && (Pe = V && V.onVnodeMounted)) {
          const ye = j;
          Mt(
            () => us(Pe, xe, ye),
            G
          );
        }
        (j.shapeFlag & 256 || xe && Co(xe.vnode) && xe.vnode.shapeFlag & 256) && U.a && Mt(U.a, G), U.isMounted = !0, j = le = H = null;
      }
    };
    U.scope.on();
    const be = U.effect = new $i(ie);
    U.scope.off();
    const ae = U.update = be.run.bind(be), Ue = U.job = be.runIfDirty.bind(be);
    Ue.i = U, Ue.id = U.uid, be.scheduler = () => nl(Ue), Ys(U, !0), ae();
  }, ee = (U, j, le) => {
    j.component = U;
    const H = U.vnode.props;
    U.vnode = j, U.next = null, Mu(U, j.props, H, le), Uu(U, j.children, le), Is(), bl(U), Es();
  }, W = (U, j, le, H, G, Q, ve, ie, be = !1) => {
    const ae = U && U.children, Ue = U ? U.shapeFlag : 0, Pe = j.children, { patchFlag: fe, shapeFlag: V } = j;
    if (fe > 0) {
      if (fe & 128) {
        de(
          ae,
          Pe,
          le,
          H,
          G,
          Q,
          ve,
          ie,
          be
        );
        return;
      } else if (fe & 256) {
        ce(
          ae,
          Pe,
          le,
          H,
          G,
          Q,
          ve,
          ie,
          be
        );
        return;
      }
    }
    V & 8 ? (Ue & 16 && te(ae, G, Q), Pe !== ae && v(le, Pe)) : Ue & 16 ? V & 16 ? de(
      ae,
      Pe,
      le,
      H,
      G,
      Q,
      ve,
      ie,
      be
    ) : te(ae, G, Q, !0) : (Ue & 8 && v(le, ""), V & 16 && I(
      Pe,
      le,
      H,
      G,
      Q,
      ve,
      ie,
      be
    ));
  }, ce = (U, j, le, H, G, Q, ve, ie, be) => {
    U = U || ko, j = j || ko;
    const ae = U.length, Ue = j.length, Pe = Math.min(ae, Ue);
    let fe;
    for (fe = 0; fe < Pe; fe++) {
      const V = j[fe] = be ? Fs(j[fe]) : ps(j[fe]);
      C(
        U[fe],
        V,
        le,
        null,
        G,
        Q,
        ve,
        ie,
        be
      );
    }
    ae > Ue ? te(
      U,
      G,
      Q,
      !0,
      !1,
      Pe
    ) : I(
      j,
      le,
      H,
      G,
      Q,
      ve,
      ie,
      be,
      Pe
    );
  }, de = (U, j, le, H, G, Q, ve, ie, be) => {
    let ae = 0;
    const Ue = j.length;
    let Pe = U.length - 1, fe = Ue - 1;
    for (; ae <= Pe && ae <= fe; ) {
      const V = U[ae], Ae = j[ae] = be ? Fs(j[ae]) : ps(j[ae]);
      if (Zs(V, Ae))
        C(
          V,
          Ae,
          le,
          null,
          G,
          Q,
          ve,
          ie,
          be
        );
      else
        break;
      ae++;
    }
    for (; ae <= Pe && ae <= fe; ) {
      const V = U[Pe], Ae = j[fe] = be ? Fs(j[fe]) : ps(j[fe]);
      if (Zs(V, Ae))
        C(
          V,
          Ae,
          le,
          null,
          G,
          Q,
          ve,
          ie,
          be
        );
      else
        break;
      Pe--, fe--;
    }
    if (ae > Pe) {
      if (ae <= fe) {
        const V = fe + 1, Ae = V < Ue ? j[V].el : H;
        for (; ae <= fe; )
          C(
            null,
            j[ae] = be ? Fs(j[ae]) : ps(j[ae]),
            le,
            Ae,
            G,
            Q,
            ve,
            ie,
            be
          ), ae++;
      }
    } else if (ae > fe)
      for (; ae <= Pe; )
        Fe(U[ae], G, Q, !0), ae++;
    else {
      const V = ae, Ae = ae, Se = /* @__PURE__ */ new Map();
      for (ae = Ae; ae <= fe; ae++) {
        const Ve = j[ae] = be ? Fs(j[ae]) : ps(j[ae]);
        Ve.key != null && Se.set(Ve.key, ae);
      }
      let xe, Me = 0;
      const Re = fe - Ae + 1;
      let Qe = !1, ye = 0;
      const X = new Array(Re);
      for (ae = 0; ae < Re; ae++) X[ae] = 0;
      for (ae = V; ae <= Pe; ae++) {
        const Ve = U[ae];
        if (Me >= Re) {
          Fe(Ve, G, Q, !0);
          continue;
        }
        let tt;
        if (Ve.key != null)
          tt = Se.get(Ve.key);
        else
          for (xe = Ae; xe <= fe; xe++)
            if (X[xe - Ae] === 0 && Zs(Ve, j[xe])) {
              tt = xe;
              break;
            }
        tt === void 0 ? Fe(Ve, G, Q, !0) : (X[tt - Ae] = ae + 1, tt >= ye ? ye = tt : Qe = !0, C(
          Ve,
          j[tt],
          le,
          null,
          G,
          Q,
          ve,
          ie,
          be
        ), Me++);
      }
      const $e = Qe ? Fu(X) : ko;
      for (xe = $e.length - 1, ae = Re - 1; ae >= 0; ae--) {
        const Ve = Ae + ae, tt = j[Ve], wt = j[Ve + 1], at = Ve + 1 < Ue ? (
          // #13559, fallback to el placeholder for unresolved async component
          wt.el || wt.placeholder
        ) : H;
        X[ae] === 0 ? C(
          null,
          tt,
          le,
          at,
          G,
          Q,
          ve,
          ie,
          be
        ) : Qe && (xe < 0 || ae !== $e[xe] ? Ne(tt, le, at, 2) : xe--);
      }
    }
  }, Ne = (U, j, le, H, G = null) => {
    const { el: Q, type: ve, transition: ie, children: be, shapeFlag: ae } = U;
    if (ae & 6) {
      Ne(U.component.subTree, j, le, H);
      return;
    }
    if (ae & 128) {
      U.suspense.move(j, le, H);
      return;
    }
    if (ae & 64) {
      ve.move(U, j, le, Le);
      return;
    }
    if (ve === B) {
      a(Q, j, le);
      for (let Pe = 0; Pe < be.length; Pe++)
        Ne(be[Pe], j, le, H);
      a(U.anchor, j, le);
      return;
    }
    if (ve === wa) {
      T(U, j, le);
      return;
    }
    if (H !== 2 && ae & 1 && ie)
      if (H === 0)
        ie.beforeEnter(Q), a(Q, j, le), Mt(() => ie.enter(Q), G);
      else {
        const { leave: Pe, delayLeave: fe, afterLeave: V } = ie, Ae = () => {
          U.ctx.isUnmounted ? l(Q) : a(Q, j, le);
        }, Se = () => {
          Q._isLeaving && Q[$s](
            !0
            /* cancelled */
          ), Pe(Q, () => {
            Ae(), V && V();
          });
        };
        fe ? fe(Q, Ae, Se) : Se();
      }
    else
      a(Q, j, le);
  }, Fe = (U, j, le, H = !1, G = !1) => {
    const {
      type: Q,
      props: ve,
      ref: ie,
      children: be,
      dynamicChildren: ae,
      shapeFlag: Ue,
      patchFlag: Pe,
      dirs: fe,
      cacheIndex: V
    } = U;
    if (Pe === -2 && (G = !1), ie != null && (Is(), qo(ie, null, le, U, !0), Es()), V != null && (j.renderCache[V] = void 0), Ue & 256) {
      j.ctx.deactivate(U);
      return;
    }
    const Ae = Ue & 1 && fe, Se = !Co(U);
    let xe;
    if (Se && (xe = ve && ve.onVnodeBeforeUnmount) && us(xe, j, U), Ue & 6)
      oe(U.component, le, H);
    else {
      if (Ue & 128) {
        U.suspense.unmount(le, H);
        return;
      }
      Ae && qs(U, null, j, "beforeUnmount"), Ue & 64 ? U.type.remove(
        U,
        j,
        le,
        Le,
        H
      ) : ae && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ae.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Q !== B || Pe > 0 && Pe & 64) ? te(
        ae,
        j,
        le,
        !1,
        !0
      ) : (Q === B && Pe & 384 || !G && Ue & 16) && te(be, j, le), H && pe(U);
    }
    (Se && (xe = ve && ve.onVnodeUnmounted) || Ae) && Mt(() => {
      xe && us(xe, j, U), Ae && qs(U, null, j, "unmounted");
    }, le);
  }, pe = (U) => {
    const { type: j, el: le, anchor: H, transition: G } = U;
    if (j === B) {
      me(le, H);
      return;
    }
    if (j === wa) {
      E(U);
      return;
    }
    const Q = () => {
      l(le), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (U.shapeFlag & 1 && G && !G.persisted) {
      const { leave: ve, delayLeave: ie } = G, be = () => ve(le, Q);
      ie ? ie(U.el, Q, be) : be();
    } else
      Q();
  }, me = (U, j) => {
    let le;
    for (; U !== j; )
      le = w(U), l(U), U = le;
    l(j);
  }, oe = (U, j, le) => {
    const { bum: H, scope: G, job: Q, subTree: ve, um: ie, m: be, a: ae } = U;
    Ul(be), Ul(ae), H && En(H), G.stop(), Q && (Q.flags |= 8, Fe(ve, U, j, le)), ie && Mt(ie, j), Mt(() => {
      U.isUnmounted = !0;
    }, j);
  }, te = (U, j, le, H = !1, G = !1, Q = 0) => {
    for (let ve = Q; ve < U.length; ve++)
      Fe(U[ve], j, le, H, G);
  }, ue = (U) => {
    if (U.shapeFlag & 6)
      return ue(U.component.subTree);
    if (U.shapeFlag & 128)
      return U.suspense.next();
    const j = w(U.anchor || U.el), le = j && j[Wi];
    return le ? w(le) : j;
  };
  let ge = !1;
  const Te = (U, j, le) => {
    U == null ? j._vnode && Fe(j._vnode, null, null, !0) : C(
      j._vnode || null,
      U,
      j,
      null,
      null,
      null,
      le
    ), j._vnode = U, ge || (ge = !0, bl(), Fi(), ge = !1);
  }, Le = {
    p: C,
    um: Fe,
    m: Ne,
    r: pe,
    mt: Z,
    mc: I,
    pc: W,
    pbc: se,
    n: ue,
    o: e
  };
  return {
    render: Te,
    hydrate: void 0,
    createApp: wu(Te)
  };
}
function ya({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function zu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function cl(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Ge(a) && Ge(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Fs(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && cl(c, u)), u.type === oa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === St && !u.el && (u.el = c.el);
    }
}
function Fu(e) {
  const s = e.slice(), o = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const m = e[a];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < m ? r = u + 1 : c = u;
      m < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
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
  s && s.pendingBranch ? Ge(e) ? s.effects.push(...e) : s.effects.push(e) : Qc(e);
}
const B = Symbol.for("v-fgt"), oa = Symbol.for("v-txt"), St = Symbol.for("v-cmt"), wa = Symbol.for("v-stc"), Jo = [];
let Bt = null;
function n(e = !1) {
  Jo.push(Bt = e ? null : []);
}
function Bu() {
  Jo.pop(), Bt = Jo[Jo.length - 1] || null;
}
let an = 1;
function Vn(e, s = !1) {
  an += e, e < 0 && Bt && s && (Bt.hasOnce = !0);
}
function _r(e) {
  return e.dynamicChildren = an > 0 ? Bt || ko : null, Bu(), an > 0 && Bt && Bt.push(e), e;
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
function R(e, s, o, a, l) {
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
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const kr = ({ key: e }) => e ?? null, Pn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? gt(e) || Tt(e) || Ye(e) ? { i: kt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === B ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && kr(s),
    ref: s && Pn(s),
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
    ctx: kt
  };
  return u ? (ul(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= gt(o) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Bt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Bt.push(d), d;
}
const S = Wu;
function Wu(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === sr) && (e = St), ln(e)) {
    const u = Bs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && ul(u, o), an > 0 && !r && Bt && (u.shapeFlag & 6 ? Bt[Bt.indexOf(e)] = u : Bt.push(u)), u.patchFlag = -2, u;
  }
  if (ed(e) && (e = e.__vccOpts), s) {
    s = Gu(s);
    let { class: u, style: d } = s;
    u && !gt(u) && (s.class = Ee(u)), lt(d) && (ol(d) && !Ge(d) && (d = ht({}, d)), s.style = Gt(d));
  }
  const c = gt(e) ? 1 : wr(e) ? 128 : Gi(e) ? 64 : lt(e) ? 4 : Ye(e) ? 2 : 0;
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
  return e ? ol(e) || fr(e) ? ht({}, e) : e : null;
}
function Bs(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, m = s ? ju(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && kr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ge(r) ? r.concat(Pn(s)) : [r, Pn(s)] : Pn(s)
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
    ssContent: e.ssContent && Bs(e.ssContent),
    ssFallback: e.ssFallback && Bs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && oo(
    v,
    d.clone(v)
  ), v;
}
function $(e = " ", s = 0) {
  return S(oa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), R(St, null, e)) : S(St, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? S(St) : Ge(e) ? S(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? Fs(e) : S(oa, null, String(e));
}
function Fs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bs(e);
}
function ul(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Ge(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), ul(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !fr(s) ? s._ctx = kt : l === 3 && kt && (kt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ye(s) ? (s = { default: s, _ctx: kt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function ju(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Ee([s.class, a.class]));
      else if (l === "style")
        s.style = Gt([s.style, a.style]);
      else if (Kn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Ge(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function us(e, s, o, a = null) {
  ls(e, s, 7, [
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
    propsDefaults: rt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: rt,
    data: rt,
    props: rt,
    attrs: rt,
    slots: rt,
    refs: rt,
    setupState: rt,
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
let It = null;
const dl = () => It || kt;
let Bn, Oa;
{
  const e = Qn(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Bn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => It = o
  ), Oa = s(
    "__VUE_SSR_SETTERS__",
    (o) => rn = o
  );
}
const mn = (e) => {
  const s = It;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(s);
  };
}, Al = () => {
  It && It.scope.off(), Bn(null);
};
function br(e) {
  return e.vnode.shapeFlag & 4;
}
let rn = !1;
function Yu(e, s = !1, o = !1) {
  s && Oa(s);
  const { props: a, children: l } = e.vnode, r = br(e);
  Pu(e, a, r, s), Nu(e, l, o || s);
  const c = r ? Ju(e, s) : void 0;
  return s && Oa(!1), c;
}
function Ju(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fu);
  const { setup: a } = o;
  if (a) {
    Is();
    const l = e.setupContext = a.length > 1 ? Xu(e) : null, r = mn(e), c = fn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = gi(c);
    if (Es(), r(), (u || e.sp) && !Co(e) && Xi(e), u) {
      if (c.then(Al, Al), s)
        return c.then((d) => {
          Ol(e, d);
        }).catch((d) => {
          Zn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Ol(e, c);
  } else
    $r(e);
}
function Ol(e, s, o) {
  Ye(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : lt(s) && (e.setupState = Ai(s)), $r(e);
}
function $r(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || gs);
  {
    const l = mn(e);
    Is();
    try {
      mu(e);
    } finally {
      Es(), l();
    }
  }
}
const Qu = {
  get(e, s) {
    return xt(e, "get", ""), e[s];
  }
};
function Xu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Qu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function na(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ai(Vc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Yo)
        return Yo[o](e);
    },
    has(s, o) {
      return o in s || o in Yo;
    }
  })) : e.proxy;
}
function Zu(e, s = !0) {
  return Ye(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function ed(e) {
  return Ye(e) && "__vccOpts" in e;
}
const L = (e, s) => Hc(e, s, rn);
function vn(e, s, o) {
  try {
    Vn(-1);
    const a = arguments.length;
    return a === 2 ? lt(s) && !Ge(s) ? ln(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && ln(o) && (o = [o]), S(e, s, o));
  } finally {
    Vn(1);
  }
}
const td = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let za;
const zl = typeof window < "u" && window.trustedTypes;
if (zl)
  try {
    za = /* @__PURE__ */ zl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Cr = za ? (e) => za.createHTML(e) : (e) => e, sd = "http://www.w3.org/2000/svg", od = "http://www.w3.org/1998/Math/MathML", bs = typeof document < "u" ? document : null, Fl = bs && /* @__PURE__ */ bs.createElement("template"), nd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? bs.createElementNS(sd, e) : s === "mathml" ? bs.createElementNS(od, e) : o ? bs.createElement(e, { is: o }) : bs.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => bs.createTextNode(e),
  createComment: (e) => bs.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bs.querySelector(e),
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
}, Us = "transition", Uo = "animation", Eo = Symbol("_vtc"), xr = {
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
}, Sr = /* @__PURE__ */ ht(
  {},
  qi,
  xr
), ad = (e) => (e.displayName = "Transition", e.props = Sr, e), ld = /* @__PURE__ */ ad(
  (e, { slots: s }) => vn(eu, Ir(e), s)
), Js = (e, s = []) => {
  Ge(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Vl = (e) => e ? Ge(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Ir(e) {
  const s = {};
  for (const F in e)
    F in xr || (s[F] = e[F]);
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
    appearActiveClass: m = c,
    appearToClass: v = u,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = id(l), C = _ && _[0], b = _ && _[1], {
    onBeforeEnter: x,
    onEnter: P,
    onEnterCancelled: T,
    onLeave: E,
    onLeaveCancelled: D,
    onBeforeAppear: N = x,
    onAppear: O = P,
    onAppearCancelled: I = T
  } = s, M = (F, z, Z, q) => {
    F._enterCancelled = q, As(F, z ? v : u), As(F, z ? m : c), Z && Z();
  }, se = (F, z) => {
    F._isLeaving = !1, As(F, g), As(F, p), As(F, w), z && z();
  }, Y = (F) => (z, Z) => {
    const q = F ? O : P, A = () => M(z, F, Z);
    Js(q, [z, A]), Bl(() => {
      As(z, F ? d : r), fs(z, F ? v : u), Vl(q) || Wl(z, a, C, A);
    });
  };
  return ht(s, {
    onBeforeEnter(F) {
      Js(x, [F]), fs(F, r), fs(F, c);
    },
    onBeforeAppear(F) {
      Js(N, [F]), fs(F, d), fs(F, m);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(F, z) {
      F._isLeaving = !0;
      const Z = () => se(F, z);
      fs(F, g), F._enterCancelled ? (fs(F, w), Fa(F)) : (Fa(F), fs(F, w)), Bl(() => {
        F._isLeaving && (As(F, g), fs(F, p), Vl(E) || Wl(F, a, b, Z));
      }), Js(E, [F, Z]);
    },
    onEnterCancelled(F) {
      M(F, !1, void 0, !0), Js(T, [F]);
    },
    onAppearCancelled(F) {
      M(F, !0, void 0, !0), Js(I, [F]);
    },
    onLeaveCancelled(F) {
      se(F), Js(D, [F]);
    }
  });
}
function id(e) {
  if (e == null)
    return null;
  if (lt(e))
    return [_a(e.enter), _a(e.leave)];
  {
    const s = _a(e);
    return [s, s];
  }
}
function _a(e) {
  return fc(e);
}
function fs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(s);
}
function As(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Eo];
  o && (o.delete(s), o.size || (e[Eo] = void 0));
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
  const { type: c, timeout: u, propCount: d } = Er(e, s);
  if (!c)
    return a();
  const m = c + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(m, w), r();
  }, w = (p) => {
    p.target === e && ++v >= d && g();
  };
  setTimeout(() => {
    v < d && g();
  }, u + 1), e.addEventListener(m, w);
}
function Er(e, s) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Us}Delay`), r = a(`${Us}Duration`), c = Gl(l, r), u = a(`${Uo}Delay`), d = a(`${Uo}Duration`), m = Gl(u, d);
  let v = null, g = 0, w = 0;
  s === Us ? c > 0 && (v = Us, g = c, w = r.length) : s === Uo ? m > 0 && (v = Uo, g = m, w = d.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Us : Uo : null, w = v ? v === Us ? r.length : d.length : 0);
  const p = v === Us && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Us}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
    propCount: w,
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
function Fa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function cd(e, s, o) {
  const a = e[Eo];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Hl = Symbol("_vod"), ud = Symbol("_vsh"), dd = Symbol(""), fd = /(?:^|;)\s*display\s*:/;
function md(e, s, o) {
  const a = e.style, l = gt(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (gt(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Mn(a, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Mn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Mn(a, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = a[dd];
      c && (o += ";" + c), a.cssText = o, r = fd.test(o);
    }
  } else s && e.removeAttribute("style");
  Hl in e && (e[Hl] = r ? a.display : "", e[ud] && (a.display = "none"));
}
const Kl = /\s*!important$/;
function Mn(e, s, o) {
  if (Ge(o))
    o.forEach((a) => Mn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = vd(e, s);
    Kl.test(o) ? e.setProperty(
      Gs(a),
      o.replace(Kl, ""),
      "important"
    ) : e[a] = o;
  }
}
const ql = ["Webkit", "Moz", "ms"], ka = {};
function vd(e, s) {
  const o = ka[s];
  if (o)
    return o;
  let a = Qt(s);
  if (a !== "filter" && a in e)
    return ka[s] = a;
  a = Yn(a);
  for (let l = 0; l < ql.length; l++) {
    const r = ql[l] + a;
    if (r in e)
      return ka[s] = r;
  }
  return s;
}
const Yl = "http://www.w3.org/1999/xlink";
function Jl(e, s, o, a, l, r = yc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Yl, s.slice(6, s.length)) : e.setAttributeNS(Yl, s, o) : o == null || r && !_i(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : ns(o) ? String(o) : o
  );
}
function Ql(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? Cr(o) : o);
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
    u === "boolean" ? o = _i(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Ss(e, s, o, a) {
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
    const [u, d] = hd(s);
    if (a) {
      const m = r[s] = _d(
        a,
        l
      );
      Ss(e, u, m, d);
    } else c && (pd(e, u, c, d), r[s] = void 0);
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
  return [e[2] === ":" ? e.slice(3) : Gs(e.slice(2)), s];
}
let ba = 0;
const yd = /* @__PURE__ */ Promise.resolve(), wd = () => ba || (yd.then(() => ba = 0), ba = Date.now());
function _d(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ls(
      kd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = wd(), o;
}
function kd(e, s) {
  if (Ge(s)) {
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
  s === "class" ? cd(e, a, c) : s === "style" ? md(e, o, a) : Kn(s) ? Ka(s) || gd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : $d(e, s, a, c)) ? (Ql(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Jl(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !gt(a)) ? Ql(e, Qt(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), Jl(e, s, a, c));
};
function $d(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ei(s) && Ye(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ei(s) && gt(o) ? !1 : s in e;
}
const Tr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Wn = Symbol("_moveCb"), ti = Symbol("_enterCb"), Cd = (e) => (delete e.props.mode, e), xd = /* @__PURE__ */ Cd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ ht({}, Sr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = dl(), a = Ki();
    let l, r;
    return er(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Rd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(Id), l.forEach(Ed);
      const u = l.filter(Td);
      Fa(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Wn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Wn] = null, As(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = st(e), u = Ir(c);
      let d = c.tag || B;
      if (l = [], r)
        for (let m = 0; m < r.length; m++) {
          const v = r[m];
          v.el && v.el instanceof Element && (l.push(v), oo(
            v,
            nn(
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
      r = s.default ? al(s.default()) : [];
      for (let m = 0; m < r.length; m++) {
        const v = r[m];
        v.key != null && oo(
          v,
          nn(v, u, a, o)
        );
      }
      return S(d, null, r);
    };
  }
}), Sd = xd;
function Id(e) {
  const s = e.el;
  s[Wn] && s[Wn](), s[ti] && s[ti]();
}
function Ed(e) {
  Rr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Td(e) {
  const s = Tr.get(e), o = Rr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Rd(e, s, o) {
  const a = e.cloneNode(), l = e[Eo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Er(a);
  return r.removeChild(a), c;
}
const Ws = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ge(s) ? (o) => En(s, o) : s;
};
function Pd(e) {
  e.target.composing = !0;
}
function si(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Yt = Symbol("_assign");
function oi(e, s, o) {
  return s && (e = e.trim()), o && (e = Jn(e)), e;
}
const Wt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[Yt] = Ws(l);
    const r = a || l.props && l.props.type === "number";
    Ss(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Yt](oi(e.value, o, r));
    }), (o || r) && Ss(e, "change", () => {
      e.value = oi(e.value, o, r);
    }), s || (Ss(e, "compositionstart", Pd), Ss(e, "compositionend", si), Ss(e, "change", si));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[Yt] = Ws(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Jn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, cn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Yt] = Ws(o), Ss(e, "change", () => {
      const a = e._modelValue, l = To(e), r = e.checked, c = e[Yt];
      if (Ge(a)) {
        const u = Ja(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const m = [...a];
          m.splice(u, 1), c(m);
        }
      } else if (Ro(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Pr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ni,
  beforeUpdate(e, s, o) {
    e[Yt] = Ws(o), ni(e, s, o);
  }
};
function ni(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Ge(s))
    l = Ja(s, a.props.value) > -1;
  else if (Ro(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = so(s, Pr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const ss = {
  created(e, { value: s }, o) {
    e.checked = so(s, o.props.value), e[Yt] = Ws(o), Ss(e, "change", () => {
      e[Yt](To(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[Yt] = Ws(a), s !== o && (e.checked = so(s, a.props.value));
  }
}, hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Ro(s);
    Ss(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Jn(To(c)) : To(c)
      );
      e[Yt](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, yt(() => {
        e._assigning = !1;
      });
    }), e[Yt] = Ws(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    ai(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Yt] = Ws(o);
  },
  updated(e, { value: s }) {
    e._assigning || ai(e, s);
  }
};
function ai(e, s) {
  const o = e.multiple, a = Ge(s);
  if (!(o && !a && !Ro(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = To(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = Ja(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (so(To(c), s)) {
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
function Pr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const aa = {
  created(e, s, o) {
    $n(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    $n(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    $n(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    $n(e, s, o, a, "updated");
  }
};
function Md(e, s) {
  switch (e) {
    case "SELECT":
      return hs;
    case "TEXTAREA":
      return Wt;
    default:
      switch (s) {
        case "checkbox":
          return cn;
        case "radio":
          return ss;
        default:
          return Wt;
      }
  }
}
function $n(e, s, o, a, l) {
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
}, ft = (e, s) => {
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
}, Jt = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Gs(l.key);
    if (s.some(
      (c) => c === r || Nd[c] === r
    ))
      return e(l);
  }));
}, Ud = /* @__PURE__ */ ht({ patchProp: bd }, nd);
let li;
function Ad() {
  return li || (li = Au(Ud));
}
const la = ((...e) => {
  const s = Ad().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = zd(a);
    if (!l) return;
    const r = s._component;
    !Ye(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
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
  return gt(e) ? document.querySelector(e) : e;
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
}, jd = /* @__PURE__ */ _e({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Fd, [
      s.$slots.header ? (n(), i("div", Vd, [
        Je(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Bd, [
        Je(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Wd, [
        Je(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", Gd, [
        Je(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ke = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Nt = /* @__PURE__ */ ke(jd, [["__scopeId", "data-v-21565df9"]]), Hd = {
  key: 0,
  class: "panel-title-prefix"
}, Kd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, qd = /* @__PURE__ */ _e({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), R(ll(`h${e.level}`), {
      class: Ee(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", Hd, f(e.prefix), 1)) : (n(), i("span", Kd)),
        Je(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Yd = /* @__PURE__ */ ke(qd, [["__scopeId", "data-v-c3875efc"]]), Jd = ["title"], Qd = ["width", "height"], Xd = /* @__PURE__ */ _e({
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
      ])], 8, Qd))
    ], 8, Jd));
  }
}), Mr = /* @__PURE__ */ ke(Xd, [["__scopeId", "data-v-6fc7f16d"]]), Zd = { class: "header-left" }, ef = {
  key: 0,
  class: "header-actions"
}, tf = /* @__PURE__ */ _e({
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
      class: Ee(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Zd, [
        S(Yd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), R(Mr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", ef, [
        Je(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ ke(tf, [["__scopeId", "data-v-55a62cd6"]]), sf = {
  key: 0,
  class: "section-title-count"
}, of = {
  key: 1,
  class: "section-title-icon"
}, nf = /* @__PURE__ */ _e({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), R(ll(`h${e.level}`), {
      class: Ee(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Je(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", sf, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", of, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vt = /* @__PURE__ */ ke(nf, [["__scopeId", "data-v-559361eb"]]), af = { class: "status-grid" }, lf = { class: "status-grid__columns" }, rf = { class: "status-grid__column" }, cf = { class: "status-grid__title" }, uf = { class: "status-grid__column status-grid__column--right" }, df = { class: "status-grid__title" }, ff = {
  key: 0,
  class: "status-grid__footer"
}, mf = /* @__PURE__ */ _e({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", af, [
      t("div", lf, [
        t("div", rf, [
          t("h4", cf, f(e.leftTitle), 1),
          Je(s.$slots, "left", {}, void 0)
        ]),
        t("div", uf, [
          t("h4", df, f(e.rightTitle), 1),
          Je(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", ff, [
        Je(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), vf = /* @__PURE__ */ ke(mf, [["__scopeId", "data-v-73b7ba3f"]]), pf = {
  key: 0,
  class: "status-item__icon"
}, gf = {
  key: 1,
  class: "status-item__count"
}, hf = { class: "status-item__label" }, yf = /* @__PURE__ */ _e({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = L(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Ee(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", pf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", gf, f(e.count), 1)) : y("", !0),
      t("span", hf, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ ke(yf, [["__scopeId", "data-v-6f929183"]]), wf = { class: "issue-card__header" }, _f = { class: "issue-card__icon" }, kf = { class: "issue-card__title" }, bf = {
  key: 0,
  class: "issue-card__content"
}, $f = {
  key: 0,
  class: "issue-card__description"
}, Cf = {
  key: 1,
  class: "issue-card__items"
}, xf = {
  key: 2,
  class: "issue-card__actions"
}, Sf = /* @__PURE__ */ _e({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = L(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Ee(["issue-card", o.value])
    }, [
      t("div", wf, [
        t("span", _f, f(e.icon), 1),
        t("h4", kf, f(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", bf, [
        e.description ? (n(), i("p", $f, f(e.description), 1)) : y("", !0),
        Je(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Cf, [
        (n(!0), i(B, null, we(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", xf, [
        Je(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), es = /* @__PURE__ */ ke(Sf, [["__scopeId", "data-v-df6aa348"]]), If = ["type", "disabled"], Ef = {
  key: 0,
  class: "spinner"
}, Tf = /* @__PURE__ */ _e({
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
      class: Ee(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Ef)) : y("", !0),
      e.loading ? y("", !0) : Je(s.$slots, "default", { key: 1 }, void 0)
    ], 10, If));
  }
}), he = /* @__PURE__ */ ke(Tf, [["__scopeId", "data-v-772abe47"]]), Rf = { class: "empty-state" }, Pf = {
  key: 0,
  class: "empty-icon"
}, Mf = { class: "empty-message" }, Df = /* @__PURE__ */ _e({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", Rf, [
      e.icon ? (n(), i("div", Pf, f(e.icon), 1)) : y("", !0),
      t("p", Mf, f(e.message), 1),
      e.actionLabel ? (n(), R(he, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: h(() => [
          $(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), is = /* @__PURE__ */ ke(Df, [["__scopeId", "data-v-4466284f"]]), Lf = /* @__PURE__ */ _e({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Ee(["detail-label"]),
      style: Gt({ minWidth: e.minWidth })
    }, [
      Je(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Dn = /* @__PURE__ */ ke(Lf, [["__scopeId", "data-v-75e9eeb8"]]), Nf = /* @__PURE__ */ _e({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Ee(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Je(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Va = /* @__PURE__ */ ke(Nf, [["__scopeId", "data-v-2f186e4c"]]), Uf = { class: "detail-row" }, Af = /* @__PURE__ */ _e({
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
    return (s, o) => (n(), i("div", Uf, [
      S(Dn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), R(Va, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Je(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), mt = /* @__PURE__ */ ke(Af, [["__scopeId", "data-v-ef15664a"]]), Of = { class: "modal-header" }, zf = { class: "modal-body" }, Ff = { class: "status-section" }, Vf = {
  key: 0,
  class: "status-section"
}, Bf = { class: "section-header-row" }, Wf = {
  key: 0,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, qf = { class: "workflow-issue" }, Yf = {
  key: 1,
  class: "workflow-group"
}, Jf = { class: "workflow-group-header" }, Qf = { class: "workflow-group-title" }, Xf = { class: "workflow-list" }, Zf = { class: "workflow-name" }, em = { class: "workflow-issue" }, tm = {
  key: 2,
  class: "workflow-group"
}, sm = { class: "workflow-group-header" }, om = { class: "workflow-group-title" }, nm = { class: "workflow-list" }, am = { class: "workflow-name" }, lm = {
  key: 3,
  class: "workflow-group"
}, im = { class: "workflow-group-header" }, rm = { class: "workflow-group-title" }, cm = { class: "workflow-list" }, um = { class: "workflow-name" }, dm = {
  key: 4,
  class: "workflow-group"
}, fm = { class: "workflow-group-header" }, mm = { class: "workflow-group-title" }, vm = { class: "workflow-list" }, pm = { class: "workflow-name" }, gm = {
  key: 5,
  class: "workflow-group"
}, hm = { class: "workflow-group-title" }, ym = { class: "expand-icon" }, wm = {
  key: 0,
  class: "workflow-list"
}, _m = { class: "workflow-name" }, km = {
  key: 1,
  class: "status-section"
}, bm = {
  key: 0,
  class: "change-group"
}, $m = { class: "change-group-header" }, Cm = { class: "change-group-title" }, xm = { class: "change-list" }, Sm = { class: "node-name" }, Im = {
  key: 0,
  class: "dev-badge"
}, Em = {
  key: 1,
  class: "change-group"
}, Tm = { class: "change-group-header" }, Rm = { class: "change-group-title" }, Pm = { class: "change-list" }, Mm = { class: "node-name" }, Dm = {
  key: 0,
  class: "dev-badge"
}, Lm = {
  key: 2,
  class: "change-group"
}, Nm = { class: "change-list" }, Um = { class: "change-item" }, Am = { class: "node-name" }, Om = {
  key: 3,
  class: "change-group"
}, zm = {
  key: 2,
  class: "status-section"
}, Fm = { class: "section-header-row" }, Vm = {
  key: 0,
  class: "drift-item"
}, Bm = { class: "drift-list" }, Wm = {
  key: 0,
  class: "drift-list-more"
}, Gm = {
  key: 1,
  class: "drift-item"
}, jm = { class: "drift-list" }, Hm = {
  key: 0,
  class: "drift-list-more"
}, Km = {
  key: 2,
  class: "drift-item"
}, qm = { class: "drift-list" }, Ym = { class: "version-actual" }, Jm = { class: "version-expected" }, Qm = {
  key: 0,
  class: "drift-list-more"
}, Xm = {
  key: 3,
  class: "drift-item"
}, Zm = { class: "repair-action" }, ev = {
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
}, iv = { class: "modal-actions" }, rv = /* @__PURE__ */ _e({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    et(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), pt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const a = L(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = L(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = L(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((C) => {
        var x, P, T;
        const b = (T = (P = (x = s.status) == null ? void 0 : x.workflows) == null ? void 0 : P.analyzed) == null ? void 0 : T.find((E) => E.name === C);
        return !b || b.status !== "broken";
      })) || [];
    }), c = L(() => {
      var w, p, _, C, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = L(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = L(() => {
      var w, p, _, C, b, x;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((x = (b = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), m = L(() => {
      var p, _;
      const w = (_ = (p = s.status) == null ? void 0 : p.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function g(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var _, C, b, x, P, T, E, D, N, O, I, M, se, Y, F, z, Z, q, A, ee, W, ce;
      return n(), R(bt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (de) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = ft(() => {
            }, ["stop"]))
          }, [
            t("div", Of, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (de) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", zf, [
              t("div", Ff, [
                S(Vt, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                S(mt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", Vf, [
                t("div", Bf, [
                  S(Vt, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (de) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Wf, [
                  t("div", Gf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", jf, "BROKEN (COMMITTED) (" + f(a.value.length) + ")", 1)
                  ]),
                  t("div", Hf, [
                    (n(!0), i(B, null, we(a.value, (de) => (n(), i("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, f(de.name), 1),
                      t("span", qf, f(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Yf, [
                  t("div", Jf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Qf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Xf, [
                    (n(!0), i(B, null, we(l.value, (de) => (n(), i("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      t("span", Zf, f(de.name), 1),
                      t("span", em, f(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (n(), i("div", tm, [
                  t("div", sm, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", om, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", nm, [
                    (n(!0), i(B, null, we(e.status.workflows.new, (de) => (n(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", am, f(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (b = e.status.workflows) == null ? void 0 : b.modified) != null && x.length ? (n(), i("div", lm, [
                  t("div", im, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", rm, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", cm, [
                    (n(!0), i(B, null, we(e.status.workflows.modified, (de) => (n(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", um, f(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (P = e.status.workflows) == null ? void 0 : P.deleted) != null && T.length ? (n(), i("div", dm, [
                  t("div", fm, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", mm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", vm, [
                    (n(!0), i(B, null, we(e.status.workflows.deleted, (de) => (n(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", pm, f(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", gm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (de) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", hm, "SYNCED (" + f(r.value.length) + ")", 1),
                    t("span", ym, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", wm, [
                    (n(!0), i(B, null, we(r.value, (de) => (n(), i("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", _m, f(de), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", km, [
                S(Vt, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && D.length ? (n(), i("div", bm, [
                  t("div", $m, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Cm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", xm, [
                    (n(!0), i(B, null, we(e.status.git_changes.nodes_added, (de) => (n(), i("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      t("span", Sm, f(v(de)), 1),
                      g(de) ? (n(), i("span", Im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (O = (N = e.status.git_changes) == null ? void 0 : N.nodes_removed) != null && O.length ? (n(), i("div", Em, [
                  t("div", Tm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Rm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Pm, [
                    (n(!0), i(B, null, we(e.status.git_changes.nodes_removed, (de) => (n(), i("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      t("span", Mm, f(v(de)), 1),
                      g(de) ? (n(), i("span", Dm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (n(), i("div", Lm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Nm, [
                    t("div", Um, [
                      t("span", Am, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (M = e.status.git_changes) != null && M.has_other_changes ? (n(), i("div", Om, [...p[21] || (p[21] = [
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
              (se = e.status.comparison) != null && se.is_synced ? y("", !0) : (n(), i("div", zm, [
                t("div", Fm, [
                  S(Vt, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (de) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (F = (Y = e.status.comparison) == null ? void 0 : Y.missing_nodes) != null && F.length ? (n(), i("div", Vm, [
                  S(mt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Bm, [
                    (n(!0), i(B, null, we(e.status.comparison.missing_nodes.slice(0, 10), (de) => (n(), i("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + f(de), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Wm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Z = (z = e.status.comparison) == null ? void 0 : z.extra_nodes) != null && Z.length ? (n(), i("div", Gm, [
                  S(mt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", jm, [
                    (n(!0), i(B, null, we(e.status.comparison.extra_nodes.slice(0, 10), (de) => (n(), i("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + f(de), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Hm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (q = e.status.comparison) == null ? void 0 : q.version_mismatches) != null && A.length ? (n(), i("div", Km, [
                  S(mt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", qm, [
                    (n(!0), i(B, null, we(e.status.comparison.version_mismatches.slice(0, 10), (de) => (n(), i("div", {
                      key: de.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(de.name) + ": ", 1),
                      t("span", Ym, f(de.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", Jm, f(de.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Qm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ee = e.status.comparison) == null ? void 0 : ee.packages_in_sync) === !1 ? (n(), i("div", Xm, [
                  S(mt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Zm, [
                  S(he, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (de) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ce = (W = e.status.comparison) == null ? void 0 : W.disabled_nodes) != null && ce.length ? (n(), i("div", ev, [
                S(Vt, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", tv, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", sv, [
                  (n(!0), i(B, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (de) => (n(), i("div", {
                    key: de,
                    class: "drift-list-item"
                  }, " • " + f(de), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", ov, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", nv, [
                S(Vt, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", av, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (n(), i("div", lv, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", iv, [
              S(he, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (de) => w.$emit("close"))
              }, {
                default: h(() => [...p[33] || (p[33] = [
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
}), cv = /* @__PURE__ */ ke(rv, [["__scopeId", "data-v-e2b37122"]]), uv = { class: "health-section-header" }, dv = { class: "suggestions-content" }, fv = { class: "suggestions-text" }, mv = { style: { "margin-top": "var(--cg-space-3)" } }, vv = {
  key: 1,
  class: "no-issues-text"
}, pv = /* @__PURE__ */ _e({
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
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = k(!1), g = k(!1);
    function w() {
      g.value = !0, m("repair-environment");
    }
    function p() {
      g.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const C = L(() => {
      const pe = a.status.workflows.analyzed || [], me = pe.filter(
        (oe) => oe.unresolved_models_count > 0 || oe.ambiguous_models_count > 0
      );
      return me.length === 0 && a.status.missing_models_count > 0 ? pe.filter((oe) => oe.sync_state === "synced") : me;
    });
    function b() {
      const pe = C.value;
      pe.length !== 0 && (v.value = !0, m("repair-missing-models", pe.map((me) => me.name)));
    }
    function x() {
      v.value = !1;
    }
    s({ resetRepairingState: x, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const P = L(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), T = L(() => a.status.has_changes), E = L(() => {
      const pe = a.status.git_changes;
      return pe.nodes_added.length > 0 || pe.nodes_removed.length > 0 || pe.workflow_changes;
    }), D = L(() => a.status.has_changes || P.value), N = L(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), O = L(() => a.status.git_changes.has_other_changes), I = L(() => {
      var pe;
      return ((pe = a.status.workflows.analyzed) == null ? void 0 : pe.filter((me) => me.status === "broken")) || [];
    }), M = L(() => {
      var pe;
      return ((pe = a.status.workflows.analyzed) == null ? void 0 : pe.filter(
        (me) => me.has_path_sync_issues && !me.has_issues
      )) || [];
    }), se = L(() => I.value.length > 0);
    function Y(pe) {
      const me = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const oe of me) {
        const te = pe.match(oe);
        if (te != null && te[1])
          return te[1];
      }
      return null;
    }
    function F(pe) {
      const me = pe.map(Y).filter((oe) => !!oe);
      return [...new Set(me)];
    }
    function z(pe) {
      if (pe.length === 0) return "";
      if (pe.length === 1) return ` (>= ${pe[0]})`;
      const me = pe.slice(0, 2).map((te) => `>= ${te}`).join(", "), oe = pe.length > 2;
      return ` (${me}${oe ? ", ..." : ""})`;
    }
    function Z(pe) {
      const me = pe.issue_summary || "Has issues", oe = /(?:>=|v?\d+\.\d+)/i.test(me), te = F(pe.version_gated_guidance || []);
      return (pe.nodes_version_gated_count || 0) > 0 && te.length > 0 && !oe ? `${pe.name} — ${me} (needs ComfyUI ${te.map((ue) => `>= ${ue}`).join(", ")})` : `${pe.name} — ${me}`;
    }
    const q = L(() => I.value.reduce(
      (pe, me) => pe + (me.nodes_version_gated_count || 0),
      0
    )), A = L(() => {
      const pe = I.value.flatMap(
        (me) => F(me.version_gated_guidance || [])
      );
      return [...new Set(pe)];
    }), ee = L(() => I.value.reduce(
      (pe, me) => pe + (me.nodes_uninstallable_count || 0),
      0
    )), W = L(() => {
      const pe = [];
      return q.value > 0 && pe.push(
        `${q.value} require newer ComfyUI${z(A.value)}`
      ), ee.value > 0 && pe.push(`${ee.value} are uninstallable`), pe.length > 0 ? `These workflows have missing or blocked dependencies (${pe.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ce = L(() => se.value || M.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), de = L(() => {
      const pe = [];
      return a.status.workflows.new.length > 0 && pe.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && pe.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && pe.push(`${a.status.workflows.deleted.length} deleted`), pe.length > 0 ? `${pe.join(", ")} workflow${pe.length === 1 && !pe[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ne = L(() => {
      var oe, te;
      const pe = [], me = a.status.comparison;
      return (oe = me.missing_nodes) != null && oe.length && pe.push(`${me.missing_nodes.length} missing node${me.missing_nodes.length === 1 ? "" : "s"}`), (te = me.extra_nodes) != null && te.length && pe.push(`${me.extra_nodes.length} untracked node${me.extra_nodes.length === 1 ? "" : "s"}`), pe.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${pe.join(" and ")}.`;
    }), Fe = L(() => {
      var oe, te;
      const pe = [], me = a.status.comparison;
      return (oe = me.extra_nodes) != null && oe.length && (me.extra_nodes.slice(0, 3).forEach((ue) => {
        pe.push(`Untracked: ${ue}`);
      }), me.extra_nodes.length > 3 && pe.push(`...and ${me.extra_nodes.length - 3} more untracked`)), (te = me.missing_nodes) != null && te.length && (me.missing_nodes.slice(0, 3).forEach((ue) => {
        pe.push(`Missing: ${ue}`);
      }), me.missing_nodes.length > 3 && pe.push(`...and ${me.missing_nodes.length - 3} more missing`)), pe;
    });
    return (pe, me) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), R(es, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: me[0] || (me[0] = (oe) => pe.$emit("start-setup"))
              }, {
                default: h(() => [...me[13] || (me[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), R(es, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: me[1] || (me[1] = (oe) => pe.$emit("view-environments"))
              }, {
                default: h(() => [...me[14] || (me[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), R(es, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: me[2] || (me[2] = (oe) => pe.$emit("create-environment"))
              }, {
                default: h(() => [...me[15] || (me[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: me[4] || (me[4] = (oe) => r.value = !0),
            onMouseleave: me[5] || (me[5] = (oe) => r.value = !1)
          }, [
            t("div", uv, [
              S(Vt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...me[16] || (me[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(ld, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), R(he, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...me[17] || (me[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            S(vf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, no({
              left: h(() => [
                e.status.workflows.new.length ? (n(), R(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), R(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), R(ds, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                S(ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: P.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), R(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), R(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), R(ds, {
                  key: 2,
                  icon: "●",
                  count: N.value,
                  label: N.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                O.value ? (n(), R(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !E.value && !O.value ? (n(), R(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (n(), R(ds, {
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
                  me[19] || (me[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", dv, [
                    t("span", fv, f(de.value), 1),
                    S(he, {
                      variant: "primary",
                      size: "sm",
                      onClick: me[3] || (me[3] = (oe) => pe.$emit("commit-changes"))
                    }, {
                      default: h(() => [...me[18] || (me[18] = [
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
          e.status.is_detached_head ? (n(), R(es, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: me[6] || (me[6] = (oe) => pe.$emit("create-branch"))
              }, {
                default: h(() => [...me[20] || (me[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", mv, [
            S(Vt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...me[21] || (me[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ce.value ? (n(), i(B, { key: 0 }, [
              I.value.length > 0 ? (n(), R(es, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: W.value,
                items: I.value.map(Z)
              }, {
                actions: h(() => [
                  S(he, {
                    variant: "primary",
                    size: "sm",
                    onClick: me[7] || (me[7] = (oe) => pe.$emit("view-workflows"))
                  }, {
                    default: h(() => [...me[22] || (me[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              M.value.length > 0 ? (n(), R(es, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: M.value.map((oe) => `${oe.name} — ${oe.models_needing_path_sync_count} model path${oe.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  S(he, {
                    variant: "primary",
                    size: "sm",
                    onClick: me[8] || (me[8] = (oe) => pe.$emit("view-workflows"))
                  }, {
                    default: h(() => [...me[23] || (me[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !se.value ? (n(), R(es, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  S(he, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: b
                  }, {
                    default: h(() => [
                      $(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  S(he, {
                    variant: "secondary",
                    size: "sm",
                    onClick: me[9] || (me[9] = (oe) => pe.$emit("view-workflows"))
                  }, {
                    default: h(() => [...me[24] || (me[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), R(es, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Ne.value,
                items: Fe.value
              }, {
                actions: h(() => [
                  S(he, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...me[25] || (me[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(he, {
                    variant: "primary",
                    size: "sm",
                    onClick: me[10] || (me[10] = (oe) => pe.$emit("view-nodes"))
                  }, {
                    default: h(() => [...me[26] || (me[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), R(es, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  S(he, {
                    variant: "primary",
                    size: "sm",
                    onClick: me[11] || (me[11] = (oe) => pe.$emit("view-nodes"))
                  }, {
                    default: h(() => [...me[27] || (me[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : D.value ? (n(), i("span", vv, "No issues")) : (n(), R(is, {
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
        "is-repairing": g.value,
        onClose: me[12] || (me[12] = (oe) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), gv = /* @__PURE__ */ ke(pv, [["__scopeId", "data-v-8a474d8e"]]), hv = ["type", "value", "placeholder", "disabled"], yv = /* @__PURE__ */ _e({
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
    return et(() => {
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
      class: Ee(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Jt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Jt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, hv));
  }
}), Qo = /* @__PURE__ */ ke(yv, [["__scopeId", "data-v-0380d08f"]]), wv = { class: "branch-create-form" }, _v = { class: "form-actions" }, kv = /* @__PURE__ */ _e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = L(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", wv, [
      S(Qo, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => a.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", _v, [
        S(he, {
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
        S(he, {
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
}), bv = /* @__PURE__ */ ke(kv, [["__scopeId", "data-v-7c500394"]]), $v = { class: "branch-list-item__indicator" }, Cv = { class: "branch-list-item__name" }, xv = {
  key: 0,
  class: "branch-list-item__actions"
}, Sv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Iv = /* @__PURE__ */ _e({
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
      class: Ee(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", $v, f(e.isCurrent ? "●" : "○"), 1),
      t("span", Cv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", xv, [
        Je(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Sv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ev = /* @__PURE__ */ ke(Iv, [["__scopeId", "data-v-c6581a24"]]), HM = js({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const KM = [
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
], qM = {
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
], YM = [
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
function wo() {
  return !1;
}
function Rv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ot() {
  const e = k(!1), s = k(null);
  async function o(K, Ce) {
    var Ct;
    if (!((Ct = window.app) != null && Ct.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi(K, Ce);
    if (!Oe.ok) {
      const zt = await Oe.json().catch(() => ({}));
      throw new Error(zt.error || zt.message || `Request failed: ${Oe.status}`);
    }
    const ct = await Oe.text();
    if (ct)
      return JSON.parse(ct);
  }
  async function a(K = !1) {
    return o(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(K, Ce = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: Ce })
    });
  }
  async function r(K = 10, Ce = 0) {
    return o(`/v2/comfygit/log?limit=${K}&offset=${Ce}`);
  }
  async function c(K, Ce = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(K)}&limit=${Ce}`);
  }
  async function u(K) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function d() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function m() {
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
  async function g() {
    return o("/v2/comfygit/branches");
  }
  async function w(K) {
    return o(`/v2/comfygit/commit/${K}`);
  }
  async function p(K, Ce = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: Ce })
    });
  }
  async function _(K, Ce = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: Ce })
    });
  }
  async function C(K, Ce = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: Ce })
    });
  }
  async function b(K, Ce = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(K)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Ce })
    });
  }
  async function x() {
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
  async function P() {
    return (await x()).environments;
  }
  async function T(K) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(K)}`);
    } catch {
      return null;
    }
  }
  async function E(K, Ce) {
    const Oe = { target_env: K };
    return Ce && (Oe.workspace_path = Ce), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Oe)
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function N(K) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function O() {
    return o("/v2/workspace/environments/create_status");
  }
  async function I(K = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${K}`);
  }
  async function M(K) {
    return o(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function se(K = !1) {
    try {
      return o(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Ce = await a(K), Oe = [];
      return Ce.workflows.new.forEach((ct) => {
        Oe.push({
          name: ct,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), Ce.workflows.modified.forEach((ct) => {
        Oe.push({
          name: ct,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), Ce.workflows.synced.forEach((ct) => {
        Oe.push({
          name: ct,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), Oe;
    }
  }
  async function Y(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function F(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function z(K, Ce, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Ce, install_models: Oe })
    });
  }
  async function Z(K, Ce, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Ce, importance: Oe })
    });
  }
  async function q() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function A() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ee(K) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function W(K) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function ce(K, Ce) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Ce })
    });
  }
  async function de(K, Ce) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Ce })
    });
  }
  async function Ne(K) {
    return o(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function Fe(K) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function pe() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function me() {
    return o("/v2/workspace/models/directory");
  }
  async function oe(K) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function te(K) {
    const Ce = new URLSearchParams({ url: K });
    return o(`/v2/workspace/huggingface/repo-info?${Ce}`);
  }
  async function ue() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ge(K, Ce = 10) {
    const Oe = new URLSearchParams({ query: K, limit: String(Ce) });
    return o(`/v2/workspace/huggingface/search?${Oe}`);
  }
  async function Te(K) {
    try {
      const Ce = K ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(K)}` : "/v2/comfygit/config";
      return o(Ce);
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
  async function Le(K, Ce) {
    const Oe = Ce ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Ce)}` : "/v2/comfygit/config";
    return o(Oe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function We(K, Ce) {
    try {
      const Oe = new URLSearchParams();
      return K && Oe.append("level", K), Ce && Oe.append("lines", Ce.toString()), o(`/v2/comfygit/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function U(K, Ce) {
    try {
      const Oe = new URLSearchParams();
      return K && Oe.append("level", K), Ce && Oe.append("lines", Ce.toString()), o(`/v2/workspace/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function j() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function le() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function H(K, Ce) {
    try {
      const Oe = new URLSearchParams();
      return K && Oe.append("level", K), Ce && Oe.append("lines", Ce.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function G() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Q(K) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function ve() {
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
  async function ie(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function be(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function ae(K) {
    var Ct, zt, Ls, Ns;
    const Ce = Rv(), Oe = ((zt = (Ct = window.app) == null ? void 0 : Ct.api) == null ? void 0 : zt.clientId) ?? ((Ns = (Ls = window.app) == null ? void 0 : Ls.api) == null ? void 0 : Ns.initialClientId) ?? "comfygit-panel", ct = {
      kind: "install",
      params: {
        id: K.id,
        version: K.version || K.selected_version || "latest",
        selected_version: K.selected_version || "latest",
        repository: K.repository || "",
        mode: K.mode || "remote",
        channel: K.channel || "default"
      },
      ui_id: Ce,
      client_id: Oe
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ct)
    }), console.log("[ComfyGit] Task queued with ui_id:", Ce, "for package:", K.id), o("/v2/manager/queue/start").catch((hn) => {
      console.error("[ComfyGit] Queue start failed:", hn);
    }), { ui_id: Ce };
  }
  async function Ue(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function Pe(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function fe() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function V(K, Ce) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: Ce })
    });
  }
  async function Ae(K) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function Se(K, Ce, Oe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Ce, push_url: Oe })
    });
  }
  async function xe(K, Ce) {
    const Oe = {};
    return Ce && (Oe["X-Git-Auth-Token"] = Ce), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST",
      headers: Oe
    });
  }
  async function Me(K) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function Re(K = "skip", Ce = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: Ce
      })
    });
  }
  async function Qe(K, Ce) {
    const Oe = Ce ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview?branch=${encodeURIComponent(Ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview`;
    return o(Oe);
  }
  async function ye(K, Ce = {}) {
    const Oe = { "Content-Type": "application/json" };
    return Ce.authToken && (Oe["X-Git-Auth-Token"] = Ce.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/pull`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({
        model_strategy: Ce.modelStrategy || "skip",
        force: Ce.force || !1,
        resolutions: Ce.resolutions
      })
    });
  }
  async function X(K, Ce) {
    const Oe = Ce ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview?branch=${encodeURIComponent(Ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview`;
    return o(Oe);
  }
  async function $e(K, Ce = {}) {
    const Oe = { "Content-Type": "application/json" };
    return Ce.authToken && (Oe["X-Git-Auth-Token"] = Ce.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/push`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({ force: Ce.force || !1 })
    });
  }
  async function Ve(K, Ce) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Ce })
    });
  }
  async function tt(K) {
    const Ce = {
      success: 0,
      failed: []
    };
    for (const Oe of K)
      try {
        await F(Oe), Ce.success++;
      } catch (ct) {
        Ce.failed.push({
          name: Oe,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return Ce;
  }
  async function wt(K) {
    var ct;
    const Ce = new FormData();
    if (Ce.append("file", K), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Ce
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Oe.ok) {
      const Ct = await Oe.json().catch(() => ({}));
      throw new Error(Ct.error || `Preview failed: ${Oe.status}`);
    }
    return Oe.json();
  }
  async function at(K) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(K)}`
    );
  }
  async function Ds(K, Ce, Oe, ct) {
    var Ls;
    const Ct = new FormData();
    if (Ct.append("file", K), Ct.append("name", Ce), Ct.append("model_strategy", Oe), Ct.append("torch_backend", ct), !((Ls = window.app) != null && Ls.api))
      throw new Error("ComfyUI API not available");
    const zt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ct
    });
    if (!zt.ok) {
      const Ns = await zt.json().catch(() => ({}));
      throw new Error(Ns.message || Ns.error || `Import failed: ${zt.status}`);
    }
    return zt.json();
  }
  async function Xt() {
    return o("/v2/workspace/import/status");
  }
  async function ys(K) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: K })
    });
  }
  async function ao(K, Ce, Oe, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: K,
        name: Ce,
        model_strategy: Oe,
        torch_backend: ct
      })
    });
  }
  async function Do() {
    return o("/v2/setup/status");
  }
  async function Lo() {
    return o("/v2/comfygit/update-check");
  }
  async function ws() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function Ie(K) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ne() {
    return o("/v2/setup/initialize_status");
  }
  async function Ke(K) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function _t() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function At() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function jt(K, Ce) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: K, save_key: Ce })
    });
  }
  async function _s() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function $t(K) {
    const Ce = K ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(K)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Ce);
  }
  async function Be(K) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Zt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function cs(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function lo(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/stop`, {
      method: "POST"
    });
  }
  async function io(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/start`, {
      method: "POST"
    });
  }
  async function ro(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/status`);
  }
  async function Ks(K) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function co(K = !1) {
    return o(K ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function uo() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function fo() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function mo(K) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function vo(K) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ra(K) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ca() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ua(K) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/info`);
  }
  async function gn(K) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`);
  }
  async function re(K, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ce)
    });
  }
  async function J(K, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent(Ce)}/start`, {
      method: "POST"
    });
  }
  async function ze(K, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent(Ce)}/stop`, {
      method: "POST"
    });
  }
  async function je(K, Ce) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent(Ce)}`, {
      method: "DELETE"
    });
  }
  async function it(K) {
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
    validateExport: d,
    validateDeploy: m,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: g,
    getCommitDetail: w,
    checkout: p,
    createBranch: _,
    switchBranch: C,
    deleteBranch: b,
    // Environment Management
    listEnvironments: x,
    getEnvironments: P,
    getEnvironmentDetails: T,
    switchEnvironment: E,
    getSwitchProgress: D,
    createEnvironment: N,
    getCreateProgress: O,
    getComfyUIReleases: I,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: se,
    getWorkflowDetails: Y,
    resolveWorkflow: F,
    installWorkflowDeps: z,
    setModelImportance: Z,
    // Model Management
    getEnvironmentModels: q,
    getWorkspaceModels: A,
    getModelDetails: ee,
    openFileLocation: W,
    addModelSource: ce,
    removeModelSource: de,
    deleteModel: Ne,
    downloadModel: Fe,
    scanWorkspaceModels: pe,
    getModelsDirectory: me,
    setModelsDirectory: oe,
    getHuggingFaceRepoInfo: te,
    getModelsSubdirectories: ue,
    searchHuggingFaceRepos: ge,
    // Settings
    getConfig: Te,
    updateConfig: Le,
    // Debug/Logs
    getEnvironmentLogs: We,
    getWorkspaceLogs: U,
    getEnvironmentLogPath: j,
    getWorkspaceLogPath: le,
    getOrchestratorLogs: H,
    getOrchestratorLogPath: G,
    openFile: Q,
    // Node Management
    getNodes: ve,
    trackNodeAsDev: ie,
    installNode: be,
    queueNodeInstall: ae,
    updateNode: Ue,
    uninstallNode: Pe,
    // Git Remotes
    getRemotes: fe,
    addRemote: V,
    removeRemote: Ae,
    updateRemoteUrl: Se,
    fetchRemote: xe,
    getRemoteSyncStatus: Me,
    // Push/Pull
    getPullPreview: Qe,
    pullFromRemote: ye,
    getPushPreview: X,
    pushToRemote: $e,
    validateMerge: Ve,
    // Environment Sync
    syncEnvironmentManually: Re,
    // Workflow Repair
    repairWorkflowModels: tt,
    // Import Operations
    previewTarballImport: wt,
    previewGitImport: ys,
    validateEnvironmentName: at,
    executeImport: Ds,
    executeGitImport: ao,
    getImportProgress: Xt,
    // First-Time Setup
    getSetupStatus: Do,
    // Manager Update Notice
    getUpdateCheck: Lo,
    updateManager: ws,
    initializeWorkspace: Ie,
    getInitializeProgress: ne,
    validatePath: Ke,
    // Deploy Operations
    getDeploySummary: _t,
    getDataCenters: At,
    testRunPodConnection: jt,
    getNetworkVolumes: _s,
    getRunPodGpuTypes: $t,
    deployToRunPod: Be,
    getRunPodPods: Zt,
    terminateRunPodPod: cs,
    stopRunPodPod: lo,
    startRunPodPod: io,
    getDeploymentStatus: ro,
    exportDeployPackage: Ks,
    getStoredRunPodKey: co,
    clearRunPodKey: uo,
    // Custom Worker Operations
    getCustomWorkers: fo,
    addCustomWorker: mo,
    removeCustomWorker: vo,
    testWorkerConnection: ra,
    scanForWorkers: ca,
    getWorkerSystemInfo: ua,
    getWorkerInstances: gn,
    deployToWorker: re,
    startWorkerInstance: J,
    stopWorkerInstance: ze,
    terminateWorkerInstance: je,
    // Git Authentication
    testGitAuth: it
  };
}
const Pv = { class: "base-modal-header" }, Mv = {
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
}, Av = /* @__PURE__ */ _e({
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
    return et(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Hs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), R(bt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ee(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = ft(() => {
          }, ["stop"]))
        }, [
          t("div", Pv, [
            Je(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Mv, f(e.title), 1)) : y("", !0)
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
          t("div", Dv, [
            e.loading ? (n(), i("div", Lv, "Loading...")) : e.error ? (n(), i("div", Nv, f(e.error), 1)) : Je(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Uv, [
            Je(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), vt = /* @__PURE__ */ ke(Av, [["__scopeId", "data-v-8dab1081"]]), Ov = ["type", "disabled"], zv = {
  key: 0,
  class: "spinner"
}, Fv = /* @__PURE__ */ _e({
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
      class: Ee(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", zv)) : y("", !0),
      Je(s.$slots, "default", {}, void 0)
    ], 10, Ov));
  }
}), De = /* @__PURE__ */ ke(Fv, [["__scopeId", "data-v-f3452606"]]), Vv = { class: "commit-list" }, Bv = /* @__PURE__ */ _e({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", Vv, [
      Je(s.$slots, "default", {}, void 0)
    ]));
  }
}), Dr = /* @__PURE__ */ ke(Bv, [["__scopeId", "data-v-8c5ee761"]]), Wv = { class: "commit-hash" }, Gv = /* @__PURE__ */ _e({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = L(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Wv, f(o.value), 1));
  }
}), Lr = /* @__PURE__ */ ke(Gv, [["__scopeId", "data-v-7c333cc6"]]), jv = { class: "commit-message" }, Hv = { class: "commit-date" }, Kv = /* @__PURE__ */ _e({
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
      class: Ee(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      S(Lr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", jv, f(e.message), 1),
      t("span", Hv, f(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = ft(() => {
        }, ["stop"]))
      }, [
        Je(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Nr = /* @__PURE__ */ ke(Kv, [["__scopeId", "data-v-dd7c621b"]]), qv = { class: "header-info" }, Yv = { class: "branch-name" }, Jv = {
  key: 0,
  class: "current-badge"
}, Qv = { class: "branch-meta" }, Xv = { key: 0 }, Zv = {
  key: 0,
  class: "meta-note"
}, ep = {
  key: 0,
  class: "loading"
}, tp = {
  key: 1,
  class: "empty-state"
}, sp = /* @__PURE__ */ _e({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ot(), a = k([]), l = k(!1), r = k(!0);
    return et(async () => {
      try {
        const c = await o(s.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), R(vt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        t("div", qv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Yv, f(e.branchName), 1),
          e.isCurrent ? (n(), i("span", Jv, "CURRENT")) : y("", !0)
        ]),
        S(De, {
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
        t("div", Qv, [
          r.value ? (n(), i("span", Xv, "Loading...")) : (n(), i(B, { key: 1 }, [
            t("span", null, f(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", Zv, "(showing first " + f(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", ep, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", tp, " No commits found on this branch ")) : (n(), R(Dr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(B, null, we(a.value, (d) => (n(), R(Nr, {
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
        e.isCurrent ? y("", !0) : (n(), R(he, {
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
}), op = /* @__PURE__ */ ke(sp, [["__scopeId", "data-v-2e5437cc"]]), np = {
  key: 2,
  class: "branch-list"
}, ap = /* @__PURE__ */ _e({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1), l = k(null);
    function r(v) {
      o("create", v), c();
    }
    function c() {
      a.value = !1;
    }
    function u(v) {
      l.value = v;
    }
    function d(v) {
      l.value = null, o("delete", v);
    }
    function m(v) {
      l.value = null, o("switch", v);
    }
    return (v, g) => (n(), R(Nt, null, {
      header: h(() => [
        S(Ut, { title: "BRANCHES" }, {
          actions: h(() => [
            a.value ? y("", !0) : (n(), R(he, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: g[0] || (g[0] = (w) => a.value = !0)
            }, {
              default: h(() => [...g[2] || (g[2] = [
                $(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        a.value ? (n(), R(bv, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), R(is, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", np, [
          (n(!0), i(B, null, we(e.branches, (w) => (n(), R(Ev, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (n(), R(he, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: ft((p) => o("switch", w.name), ["stop"])
              }, {
                default: h(() => [...g[3] || (g[3] = [
                  $(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), R(op, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: g[1] || (g[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: m
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 1
    }));
  }
}), lp = /* @__PURE__ */ ke(ap, [["__scopeId", "data-v-eefdcb00"]]), ip = /* @__PURE__ */ _e({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = L(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), R(Nt, null, {
      header: h(() => [
        S(Ut, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (n(), R(is, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), R(Dr, { key: 1 }, {
          default: h(() => [
            (n(!0), i(B, null, we(e.commits, (r) => (n(), R(Nr, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                S(he, {
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
      _: 1
    }));
  }
}), rp = /* @__PURE__ */ ke(ip, [["__scopeId", "data-v-62a5d9da"]]);
async function Cn(e, s) {
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
      return await Cn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await Cn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Cn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Cn("/v2/comfygit/orchestrator/kill", { method: "POST" });
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
}, dp = /* @__PURE__ */ _e({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), R(ll(`h${e.level}`), {
      class: Ee(["base-title", e.variant])
    }, {
      default: h(() => [
        Je(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", up, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xo = /* @__PURE__ */ ke(dp, [["__scopeId", "data-v-5a01561d"]]), fp = ["value", "disabled"], mp = {
  key: 0,
  value: "",
  disabled: ""
}, vp = ["value"], pp = {
  key: 0,
  class: "base-select-error"
}, gp = /* @__PURE__ */ _e({
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
      class: Ee(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ee(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", mp, f(e.placeholder), 1)) : y("", !0),
        (n(!0), i(B, null, we(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, f(o(r)), 9, vp))), 128))
      ], 42, fp),
      e.error ? (n(), i("span", pp, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), hp = /* @__PURE__ */ ke(gp, [["__scopeId", "data-v-4996bfe0"]]), yp = { class: "popover-header" }, wp = { class: "popover-title" }, _p = { class: "popover-content" }, kp = {
  key: 0,
  class: "popover-actions"
}, bp = /* @__PURE__ */ _e({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), R(bt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Gt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = ft(() => {
          }, ["stop"]))
        }, [
          t("div", yp, [
            t("h4", wp, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", _p, [
            Je(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", kp, [
            Je(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ ke(bp, [["__scopeId", "data-v-42815ace"]]), $p = { class: "detail-section" }, Cp = {
  key: 0,
  class: "empty-message"
}, xp = { class: "model-header" }, Sp = { class: "model-name" }, Ip = { class: "model-details" }, Ep = { class: "model-row" }, Tp = { class: "model-row" }, Rp = { class: "label" }, Pp = {
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
}, Hp = {
  key: 0,
  class: "node-guidance"
}, Kp = /* @__PURE__ */ _e({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c } = ot(), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(Y) {
      switch (Y) {
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
    function b(Y) {
      switch (Y) {
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
    function x(Y) {
      switch (Y) {
        case "installed":
          return "installed";
        case "version_gated":
          return "version-gated";
        case "uninstallable":
          return "uninstallable";
        case "missing":
        default:
          return "missing";
      }
    }
    function P(Y) {
      switch (Y) {
        case "installed":
          return "✓";
        case "version_gated":
          return "⚠";
        case "uninstallable":
          return "✕";
        case "missing":
        default:
          return "✕";
      }
    }
    function T(Y) {
      switch (Y) {
        case "installed":
          return "Installed";
        case "version_gated":
          return "Needs newer ComfyUI";
        case "uninstallable":
          return "Uninstallable";
        case "missing":
        default:
          return "Missing";
      }
    }
    function E(Y) {
      if (!Y.loaded_by || Y.loaded_by.length === 0) return [];
      const F = Y.hash || Y.filename;
      return p.value.has(F) ? Y.loaded_by : Y.loaded_by.slice(0, 3);
    }
    function D(Y) {
      return p.value.has(Y);
    }
    function N(Y) {
      p.value.has(Y) ? p.value.delete(Y) : p.value.add(Y), p.value = new Set(p.value);
    }
    async function O() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (Y) {
        m.value = Y instanceof Error ? Y.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function I(Y, F) {
      g.value[Y] = F, v.value = !0;
    }
    async function M(Y) {
      try {
        await c(Y);
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function se() {
      if (!v.value) {
        a("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [Y, F] of Object.entries(g.value))
          await r(o.workflowName, Y, F);
        a("refresh"), a("close");
      } catch (Y) {
        m.value = Y instanceof Error ? Y.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return et(O), (Y, F) => (n(), i(B, null, [
      S(vt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: F[4] || (F[4] = (z) => a("close"))
      }, {
        body: h(() => [
          u.value ? (n(), i(B, { key: 0 }, [
            t("section", $p, [
              S(Xo, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (n(), i("div", Cp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(B, null, we(u.value.models, (z) => {
                var Z;
                return n(), i("div", {
                  key: z.hash || z.filename,
                  class: "model-card"
                }, [
                  t("div", xp, [
                    F[6] || (F[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Sp, f(z.filename), 1)
                  ]),
                  t("div", Ip, [
                    t("div", Ep, [
                      F[7] || (F[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ee(["value", C(z.status)])
                      }, f(b(z.status)), 3)
                    ]),
                    t("div", Tp, [
                      t("span", Rp, [
                        F[8] || (F[8] = $(" Importance: ", -1)),
                        S(Mr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: F[0] || (F[0] = (q) => w.value = !0)
                        })
                      ]),
                      S(hp, {
                        "model-value": g.value[z.filename] || z.importance,
                        options: _,
                        "onUpdate:modelValue": (q) => I(z.filename, q)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    z.loaded_by && z.loaded_by.length > 0 ? (n(), i("div", Pp, [
                      F[9] || (F[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Mp, [
                        (n(!0), i(B, null, we(E(z), (q, A) => (n(), i("div", {
                          key: `${q.node_id}-${A}`,
                          class: "node-reference"
                        }, f(q.node_type) + " (Node #" + f(q.node_id) + ") ", 1))), 128)),
                        z.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (q) => N(z.hash || z.filename)
                        }, f(D(z.hash || z.filename) ? "▼ Show less" : `▶ View all (${z.loaded_by.length})`), 9, Dp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    z.size_mb ? (n(), i("div", Lp, [
                      F[10] || (F[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Np, f(z.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    z.has_category_mismatch ? (n(), i("div", Up, [
                      F[13] || (F[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Ap, [
                        F[11] || (F[11] = $(" In ", -1)),
                        t("code", null, f(z.actual_category) + "/", 1),
                        F[12] || (F[12] = $(" but loader needs ", -1)),
                        t("code", null, f((Z = z.expected_categories) == null ? void 0 : Z[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  z.status !== "available" ? (n(), i("div", Op, [
                    z.status === "downloadable" ? (n(), R(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: F[1] || (F[1] = (q) => a("resolve"))
                    }, {
                      default: h(() => [...F[14] || (F[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : z.status === "category_mismatch" && z.file_path ? (n(), R(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => M(z.file_path)
                    }, {
                      default: h(() => [...F[15] || (F[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : z.status !== "path_mismatch" ? (n(), R(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: F[2] || (F[2] = (q) => a("resolve"))
                    }, {
                      default: h(() => [...F[16] || (F[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", zp, [
              S(Xo, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (n(), i("div", Fp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(B, null, we(u.value.nodes, (z, Z) => (n(), i("div", {
                key: `${z.name}-${z.status}-${Z}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Ee(["node-status", x(z.status)])
                }, f(P(z.status)), 3),
                t("div", Vp, [
                  t("div", Bp, [
                    t("span", Wp, f(z.name), 1),
                    t("span", Gp, f(T(z.status)), 1),
                    z.version ? (n(), i("span", jp, "v" + f(z.version), 1)) : y("", !0)
                  ]),
                  z.guidance ? (n(), i("div", Hp, f(z.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          S(De, {
            variant: "secondary",
            onClick: F[3] || (F[3] = (z) => a("close"))
          }, {
            default: h(() => [...F[17] || (F[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            onClick: se
          }, {
            default: h(() => [...F[18] || (F[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      S(rs, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: F[5] || (F[5] = (z) => w.value = !1)
      }, {
        content: h(() => [...F[19] || (F[19] = [
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
}), qp = /* @__PURE__ */ ke(Kp, [["__scopeId", "data-v-f12e12a8"]]), Ze = js({
  items: [],
  status: "idle"
});
let vs = null;
function Ur() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function $a(e) {
  return Ze.items.find((s) => s.id === e);
}
async function _o() {
  if (Ze.status === "downloading") return;
  const e = Ze.items.find((s) => s.status === "queued");
  if (!e) {
    Ze.status = "idle";
    return;
  }
  Ze.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Yp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ze.status = "idle", _o();
  }
}
async function Yp(e) {
  return new Promise((s, o) => {
    vs && (vs.close(), vs = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    vs = l;
    let r = Date.now(), c = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), g = (v - r) / 1e3;
            if (g > 0.5) {
              const w = e.downloaded - c;
              if (e.speed = w / g, r = v, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const p = e.size - e.downloaded;
                e.eta = p / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            u = !0, l.close(), vs = null, s();
            break;
          case "error":
            u = !0, l.close(), vs = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), vs = null, u || o(new Error("Connection lost"));
    };
  });
}
async function Jp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ze.items.some((l) => l.url === o.url && l.filename === o.filename))
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
      Ze.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Po() {
  function e(b) {
    for (const x of b) {
      if (Ze.items.some(
        (E) => E.url === x.url && E.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const T = {
        id: Ur(),
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
      Ze.items.push(T);
    }
    Ze.status === "idle" && _o();
  }
  async function s(b) {
    const x = $a(b);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), x.status = "failed", x.error = "Cancelled by user", Ze.status = "idle", _o();
      } else if (x.status === "queued") {
        const P = Ze.items.findIndex((T) => T.id === b);
        P >= 0 && Ze.items.splice(P, 1);
      }
    }
  }
  function o(b) {
    const x = $a(b);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, Ze.status === "idle" && _o());
  }
  function a(b) {
    const x = $a(b);
    !x || x.status !== "paused" || (x.status = "queued", Ze.status === "idle" && _o());
  }
  function l() {
    const b = Ze.items.filter((x) => x.status === "paused");
    for (const x of b)
      x.status = "queued";
    Ze.status === "idle" && _o();
  }
  function r(b) {
    const x = Ze.items.findIndex((P) => P.id === b);
    x >= 0 && ["completed", "failed", "paused"].includes(Ze.items[x].status) && Ze.items.splice(x, 1);
  }
  function c() {
    Ze.items = Ze.items.filter((b) => b.status !== "completed");
  }
  function u() {
    Ze.items = Ze.items.filter((b) => b.status !== "failed");
  }
  const d = L(
    () => Ze.items.find((b) => b.status === "downloading")
  ), m = L(
    () => Ze.items.filter((b) => b.status === "queued")
  ), v = L(
    () => Ze.items.filter((b) => b.status === "completed")
  ), g = L(
    () => Ze.items.filter((b) => b.status === "failed")
  ), w = L(
    () => Ze.items.filter((b) => b.status === "paused")
  ), p = L(() => Ze.items.length > 0), _ = L(
    () => Ze.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = L(
    () => Ze.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Nn(Ze),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: g,
    pausedItems: w,
    hasItems: p,
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
    loadPendingDownloads: Jp
  };
}
function Ar() {
  const e = k(null), s = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(P, T) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(P, T);
    if (!E.ok) {
      const N = await E.json().catch(() => ({})), O = N.error || N.message || `Request failed: ${E.status}`;
      throw new Error(O);
    }
    return E.json();
  }
  async function u(P) {
    l.value = !0, r.value = null;
    try {
      let T;
      return wo() || (T = await c(
        `/v2/comfygit/workflow/${P}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), T.nodes.version_gated = T.nodes.version_gated || [], T.nodes.uninstallable = T.nodes.uninstallable || [], T.node_guidance = T.node_guidance || {}, e.value = T, T;
    } catch (T) {
      const E = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = E, T;
    } finally {
      l.value = !1;
    }
  }
  async function d(P, T, E, D) {
    l.value = !0, r.value = null;
    try {
      let N;
      if (!wo()) {
        const O = Object.fromEntries(T), I = Object.fromEntries(E), M = D ? Array.from(D) : [];
        N = await c(
          `/v2/comfygit/workflow/${P}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: O,
              model_choices: I,
              skipped_packages: M
            })
          }
        );
      }
      return s.value = N, N;
    } catch (N) {
      const O = N instanceof Error ? N.message : "Unknown error occurred";
      throw r.value = O, N;
    } finally {
      l.value = !1;
    }
  }
  async function m(P, T = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return wo() || (E = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: P, limit: T })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const D = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = D, E;
    } finally {
      l.value = !1;
    }
  }
  async function v(P, T = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return wo() || (E = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: P, limit: T })
        }
      )), a.value = E.results, E.results;
    } catch (E) {
      const D = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = D, E;
    } finally {
      l.value = !1;
    }
  }
  const g = js({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function p(P) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return wo(), await _(P);
    } catch (T) {
      const E = T instanceof Error ? T.message : "Failed to install nodes";
      throw g.installError = E, T;
    }
  }
  async function _(P) {
    var E;
    const T = await c(
      `/v2/comfygit/workflow/${P}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: g.nodesToInstall
        })
      }
    );
    if (g.nodeInstallProgress) {
      g.nodeInstallProgress.totalNodes = g.nodesToInstall.length;
      const D = new Map(((E = T.failed) == null ? void 0 : E.map((N) => [N.node_id, N.error])) || []);
      for (let N = 0; N < g.nodesToInstall.length; N++) {
        const O = g.nodesToInstall[N], I = D.get(O);
        g.nodeInstallProgress.completedNodes.push({
          node_id: O,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = T.nodes_installed, g.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (g.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function C(P, T, E) {
    w(), g.phase = "resolving", r.value = null;
    const D = Object.fromEntries(T), N = Object.fromEntries(E);
    try {
      const O = await fetch(`/v2/comfygit/workflow/${P}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: N
        })
      });
      if (!O.ok)
        throw new Error(`Request failed: ${O.status}`);
      if (!O.body)
        throw new Error("No response body");
      const I = O.body.getReader(), M = new TextDecoder();
      let se = "";
      for (; ; ) {
        const { done: Y, value: F } = await I.read();
        if (Y) break;
        se += M.decode(F, { stream: !0 });
        const z = se.split(`

`);
        se = z.pop() || "";
        for (const Z of z) {
          if (!Z.trim()) continue;
          const q = Z.split(`
`);
          let A = "", ee = "";
          for (const W of q)
            W.startsWith("event: ") ? A = W.slice(7) : W.startsWith("data: ") && (ee = W.slice(6));
          if (ee)
            try {
              const W = JSON.parse(ee);
              b(A, W);
            } catch (W) {
              console.warn("Failed to parse SSE event:", W);
            }
        }
      }
    } catch (O) {
      const I = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = I, g.error = I, g.phase = "error", O;
    }
  }
  function b(P, T) {
    switch (P) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = T.total;
        break;
      case "file_start":
        g.currentFile = T.filename, g.currentFileIndex = T.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = T.downloaded, g.bytesTotal = T.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = T.nodes_to_install || [], T.download_results && (g.completedFiles = T.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = T.message, g.phase = "error", r.value = T.message;
        break;
    }
  }
  function x(P, T) {
    const { addToQueue: E } = Po(), D = T.filter((N) => N.url && N.target_path).map((N) => ({
      workflow: P,
      filename: N.filename,
      url: N.url,
      targetPath: N.target_path,
      size: N.size || 0,
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
    progress: g,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: C,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: x
  };
}
const Qp = { class: "resolution-stepper" }, Xp = { class: "stepper-header" }, Zp = ["onClick"], eg = {
  key: 0,
  class: "step-icon"
}, tg = {
  key: 1,
  class: "step-number"
}, sg = { class: "step-label" }, og = {
  key: 0,
  class: "step-connector"
}, ng = { class: "stepper-content" }, ag = /* @__PURE__ */ _e({
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
    function l(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const g = o.stepStats[m];
        return g.total > 0 && g.resolved === g.total;
      }
      return o.completedSteps.includes(m);
    }
    function r(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const g = o.stepStats[m];
        return g.resolved > 0 && g.resolved < g.total;
      }
      return !1;
    }
    function c(m) {
      return l(m) ? "state-complete" : r(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function d(m) {
      a("step-change", m);
    }
    return (m, v) => (n(), i("div", Qp, [
      t("div", Xp, [
        (n(!0), i(B, null, we(e.steps, (g, w) => (n(), i("div", {
          key: g.id,
          class: Ee(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": r(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Ee(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (n(), i("span", eg, "✓")) : (n(), i("span", tg, f(w + 1), 1))
          ], 2),
          t("div", sg, f(g.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", og)) : y("", !0)
        ], 10, Zp))), 128))
      ]),
      t("div", ng, [
        Je(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), lg = /* @__PURE__ */ ke(ag, [["__scopeId", "data-v-2a7b3af8"]]), ig = /* @__PURE__ */ _e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = L(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = L(() => `confidence-${o.value}`), l = L(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Ee(["confidence-badge", a.value, e.size])
    }, f(l.value), 3));
  }
}), Gn = /* @__PURE__ */ ke(ig, [["__scopeId", "data-v-17ec4b80"]]), rg = { class: "node-info" }, cg = { class: "node-info-text" }, ug = { class: "item-body" }, dg = {
  key: 0,
  class: "resolved-state"
}, fg = {
  key: 1,
  class: "multiple-options"
}, mg = { class: "options-list" }, vg = ["onClick"], pg = ["name", "value", "checked", "onChange"], gg = { class: "option-content" }, hg = { class: "option-header" }, yg = { class: "option-package-id" }, wg = {
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
  class: "searching-state"
}, xg = { class: "options-list" }, Sg = ["onClick"], Ig = ["name", "value"], Eg = { class: "option-content" }, Tg = { class: "option-header" }, Rg = { class: "option-package-id" }, Pg = {
  key: 0,
  class: "option-description"
}, Mg = { class: "option-meta" }, Dg = {
  key: 0,
  class: "installed-badge"
}, Lg = {
  key: 2,
  class: "unresolved-message"
}, Ng = { class: "action-buttons" }, Ug = /* @__PURE__ */ _e({
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
    function l(d, m = 80) {
      return d.length <= m ? d : d.slice(0, m - 3) + "...";
    }
    const r = L(() => !!o.choice);
    L(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), L(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const c = L(() => {
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
    function u(d) {
      a("option-selected", d);
    }
    return (d, m) => (n(), i("div", {
      class: Ee(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", rg, [
        t("span", cg, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ee(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", ug, [
        r.value ? (n(), i("div", dg, [
          S(De, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", fg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", mg, [
            (n(!0), i(B, null, we(e.options, (v, g) => (n(), i("label", {
              key: v.package_id,
              class: Ee(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => u(g)
              }, null, 40, pg),
              t("div", gg, [
                t("div", hg, [
                  t("span", yg, f(v.package_id), 1),
                  S(Gn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (n(), i("div", wg, f(v.title), 1)) : y("", !0),
                t("div", _g, [
                  v.is_installed ? (n(), i("span", kg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, vg))), 128))
          ]),
          t("div", bg, [
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", $g, [
          e.isSearching ? (n(), i("div", Cg, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(B, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", xg, [
              (n(!0), i(B, null, we(e.searchResults.slice(0, 5), (v, g) => (n(), i("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Ig),
                t("div", Eg, [
                  t("div", Tg, [
                    t("span", Rg, f(v.package_id), 1),
                    S(Gn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (n(), i("div", Pg, f(l(v.description)), 1)) : y("", !0),
                  t("div", Mg, [
                    v.is_installed ? (n(), i("span", Dg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Sg))), 128))
            ])
          ], 64)) : (n(), i("div", Lg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Ng, [
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => a("search"))
            }, {
              default: h(() => {
                var v;
                return [
                  $(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...m[17] || (m[17] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ag = /* @__PURE__ */ ke(Ug, [["__scopeId", "data-v-c2997d1d"]]), Og = { class: "item-navigator" }, zg = { class: "nav-item-info" }, Fg = ["title"], Vg = { class: "nav-controls" }, Bg = { class: "nav-arrows" }, Wg = ["disabled"], Gg = ["disabled"], jg = { class: "nav-position" }, Hg = /* @__PURE__ */ _e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Og, [
      t("div", zg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Fg)
      ]),
      t("div", Vg, [
        t("div", Bg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Wg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Gg)
        ]),
        t("span", jg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Or = /* @__PURE__ */ ke(Hg, [["__scopeId", "data-v-74af7920"]]), Kg = ["type", "value", "placeholder", "disabled"], qg = {
  key: 0,
  class: "base-input-error"
}, Yg = /* @__PURE__ */ _e({
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
      class: Ee(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ee(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = Jt((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Jt((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Kg),
      e.error ? (n(), i("span", qg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ ke(Yg, [["__scopeId", "data-v-9ba02cdc"]]), Jg = { class: "node-resolution-step" }, Qg = {
  key: 0,
  class: "auto-resolved-section"
}, Xg = { class: "section-header" }, Zg = { class: "stat-badge" }, eh = { class: "resolved-packages-list" }, th = { class: "package-info" }, sh = { class: "package-id" }, oh = { class: "node-count" }, nh = { class: "package-actions" }, ah = {
  key: 0,
  class: "status-badge install"
}, lh = {
  key: 1,
  class: "status-badge skip"
}, ih = ["onClick"], rh = {
  key: 1,
  class: "section-divider"
}, ch = { class: "step-header" }, uh = { class: "stat-badge" }, dh = {
  key: 1,
  class: "step-body"
}, fh = {
  key: 3,
  class: "empty-state"
}, mh = { class: "node-modal-body" }, vh = { class: "node-search-results-container" }, ph = {
  key: 0,
  class: "node-search-results"
}, gh = ["onClick"], hh = { class: "node-result-header" }, yh = { class: "node-result-package-id" }, wh = {
  key: 0,
  class: "node-result-description"
}, _h = {
  key: 1,
  class: "node-empty-state"
}, kh = {
  key: 2,
  class: "node-empty-state"
}, bh = {
  key: 3,
  class: "node-empty-state"
}, $h = { class: "node-manual-entry-modal" }, Ch = { class: "node-modal-body" }, xh = { class: "node-modal-actions" }, Sh = /* @__PURE__ */ _e({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, a = s, { searchNodes: l } = Ar(), r = k(0), c = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && W(), _.value = !1;
    }
    const b = L(() => o.nodes[r.value]), x = L(() => o.nodes.filter((te) => o.nodeChoices.has(te.node_type)).length), P = L(() => b.value ? w.value.get(b.value.node_type) || [] : []), T = L(() => b.value ? p.value.has(b.value.node_type) : !1);
    pt(b, async (te) => {
      var ue;
      te && ((ue = te.options) != null && ue.length || w.value.has(te.node_type) || p.value.has(te.node_type) || o.nodeChoices.has(te.node_type) || await E(te.node_type));
    }, { immediate: !0 });
    async function E(te) {
      p.value.add(te);
      try {
        const ue = await l(te, 5);
        w.value.set(te, ue);
      } catch {
        w.value.set(te, []);
      } finally {
        p.value.delete(te);
      }
    }
    const D = L(() => o.autoResolvedPackages.filter((te) => !o.skippedPackages.has(te.package_id)).length);
    function N(te) {
      return o.skippedPackages.has(te);
    }
    function O(te) {
      a("package-skip", te);
    }
    const I = L(() => {
      var ue;
      if (!b.value) return "not-found";
      const te = o.nodeChoices.get(b.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ue = b.value.options) != null && ue.length ? "ambiguous" : "not-found";
    }), M = L(() => {
      var ue;
      if (!b.value) return;
      const te = o.nodeChoices.get(b.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return te.package_id ? `→ ${te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ue = b.value.options) != null && ue.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function se(te) {
      te >= 0 && te < o.nodes.length && (r.value = te);
    }
    function Y() {
      var te;
      for (let ue = r.value + 1; ue < o.nodes.length; ue++) {
        const ge = o.nodes[ue];
        if (!((te = o.nodeChoices) != null && te.has(ge.node_type))) {
          se(ue);
          return;
        }
      }
    }
    function F() {
      b.value && (a("mark-optional", b.value.node_type), yt(() => Y()));
    }
    function z() {
      b.value && (a("skip", b.value.node_type), yt(() => Y()));
    }
    function Z(te) {
      b.value && (a("option-selected", b.value.node_type, te), yt(() => Y()));
    }
    function q() {
      b.value && a("clear-choice", b.value.node_type);
    }
    function A() {
      b.value && (d.value = b.value.node_type, v.value = P.value, c.value = !0, Fe(d.value));
    }
    function ee() {
      m.value = "", u.value = !0;
    }
    function W() {
      c.value = !1, d.value = "", v.value = [];
    }
    function ce() {
      u.value = !1, m.value = "";
    }
    let de = null;
    function Ne() {
      de && clearTimeout(de), de = setTimeout(() => {
        Fe(d.value);
      }, 300);
    }
    async function Fe(te) {
      if (!te.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(te, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function pe(te) {
      b.value && (a("manual-entry", b.value.node_type, te.package_id), W(), yt(() => Y()));
    }
    function me(te) {
      b.value && (a("manual-entry", b.value.node_type, te.package_id), yt(() => Y()));
    }
    function oe() {
      !b.value || !m.value.trim() || (a("manual-entry", b.value.node_type, m.value.trim()), ce(), yt(() => Y()));
    }
    return (te, ue) => {
      var ge, Te;
      return n(), i("div", Jg, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Qg, [
          t("div", Xg, [
            ue[6] || (ue[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Zg, f(D.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", eh, [
            (n(!0), i(B, null, we(e.autoResolvedPackages, (Le) => (n(), i("div", {
              key: Le.package_id,
              class: "resolved-package-item"
            }, [
              t("div", th, [
                t("code", sh, f(Le.package_id), 1),
                t("span", oh, f(Le.node_types_count) + " node type" + f(Le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", nh, [
                N(Le.package_id) ? (n(), i("span", lh, " SKIPPED ")) : (n(), i("span", ah, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (We) => O(Le.package_id)
                }, f(N(Le.package_id) ? "Include" : "Skip"), 9, ih)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", rh)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(B, { key: 2 }, [
          t("div", ch, [
            ue[7] || (ue[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", uh, f(x.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (n(), R(Or, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: ue[0] || (ue[0] = (Le) => se(r.value - 1)),
            onNext: ue[1] || (ue[1] = (Le) => se(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (n(), i("div", dh, [
            S(Ag, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ge = b.value.options) != null && ge.length),
              options: b.value.options,
              choice: (Te = e.nodeChoices) == null ? void 0 : Te.get(b.value.node_type),
              status: I.value,
              "status-label": M.value,
              "search-results": P.value,
              "is-searching": T.value,
              onMarkOptional: F,
              onSkip: z,
              onManualEntry: ee,
              onSearch: A,
              onOptionSelected: Z,
              onClearChoice: q,
              onSearchResultSelected: me
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", fh, [...ue[8] || (ue[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), R(bt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ue[4] || (ue[4] = ft((Le) => _.value = !0, ["self"])),
            onMouseup: ft(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: ue[3] || (ue[3] = (Le) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                ue[9] || (ue[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: W
                }, "✕")
              ]),
              t("div", mh, [
                S(Rt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ue[2] || (ue[2] = (Le) => d.value = Le),
                  placeholder: "Search by node type, package name...",
                  onInput: Ne
                }, null, 8, ["modelValue"]),
                t("div", vh, [
                  v.value.length > 0 ? (n(), i("div", ph, [
                    (n(!0), i(B, null, we(v.value, (Le) => (n(), i("div", {
                      key: Le.package_id,
                      class: "node-search-result-item",
                      onClick: (We) => pe(Le)
                    }, [
                      t("div", hh, [
                        t("code", yh, f(Le.package_id), 1),
                        Le.match_confidence ? (n(), R(Gn, {
                          key: 0,
                          confidence: Le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Le.description ? (n(), i("div", wh, f(Le.description), 1)) : y("", !0)
                    ], 8, gh))), 128))
                  ])) : g.value ? (n(), i("div", _h, "Searching...")) : d.value ? (n(), i("div", kh, 'No packages found matching "' + f(d.value) + '"', 1)) : (n(), i("div", bh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), R(bt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ft(ce, ["self"])
          }, [
            t("div", $h, [
              t("div", { class: "node-modal-header" }, [
                ue[10] || (ue[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              t("div", Ch, [
                S(Rt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ue[5] || (ue[5] = (Le) => m.value = Le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", xh, [
                  S(De, {
                    variant: "secondary",
                    onClick: ce
                  }, {
                    default: h(() => [...ue[11] || (ue[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(De, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: oe
                  }, {
                    default: h(() => [...ue[12] || (ue[12] = [
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
}), Ih = /* @__PURE__ */ ke(Sh, [["__scopeId", "data-v-6d7f8125"]]), Eh = { class: "node-info" }, Th = { class: "node-info-text" }, Rh = { class: "item-body" }, Ph = {
  key: 0,
  class: "resolved-state"
}, Mh = {
  key: 1,
  class: "multiple-options"
}, Dh = { class: "options-list" }, Lh = ["onClick"], Nh = ["name", "value", "checked", "onChange"], Uh = { class: "option-content" }, Ah = { class: "option-header" }, Oh = { class: "option-filename" }, zh = { class: "option-meta" }, Fh = { class: "option-size" }, Vh = { class: "option-category" }, Bh = { class: "option-path" }, Wh = { class: "action-buttons" }, Gh = {
  key: 2,
  class: "unresolved"
}, jh = { class: "action-buttons" }, Hh = /* @__PURE__ */ _e({
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
    const o = e, a = s, l = L(() => !!o.choice);
    L(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), L(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const r = L(() => {
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
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (n(), i("div", {
      class: Ee(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Eh, [
        t("span", Th, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ee(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Rh, [
        l.value ? (n(), i("div", Ph, [
          S(De, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Mh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Dh, [
            (n(!0), i(B, null, we(e.options, (v, g) => (n(), i("label", {
              key: v.model.hash,
              class: Ee(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, Nh),
              t("div", Uh, [
                t("div", Ah, [
                  t("span", Oh, f(v.model.filename), 1),
                  S(Gn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", zh, [
                  t("span", Fh, f(u(v.model.size)), 1),
                  t("span", Vh, f(v.model.category), 1)
                ]),
                t("div", Bh, f(v.model.relative_path), 1)
              ])
            ], 10, Lh))), 128))
          ]),
          t("div", Wh, [
            S(De, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Gh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", jh, [
            S(De, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => a("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...m[15] || (m[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Kh = /* @__PURE__ */ ke(Hh, [["__scopeId", "data-v-8a82fefa"]]), qh = { class: "model-resolution-step" }, Yh = { class: "step-header" }, Jh = { class: "step-info" }, Qh = { class: "step-title" }, Xh = { class: "step-description" }, Zh = { class: "stat-badge" }, ey = {
  key: 1,
  class: "step-body"
}, ty = {
  key: 2,
  class: "empty-state"
}, sy = { class: "model-search-modal" }, oy = { class: "model-modal-body" }, ny = {
  key: 0,
  class: "model-search-results"
}, ay = ["onClick"], ly = { class: "model-result-header" }, iy = { class: "model-result-filename" }, ry = { class: "model-result-meta" }, cy = { class: "model-result-category" }, uy = { class: "model-result-size" }, dy = {
  key: 0,
  class: "model-result-path"
}, fy = {
  key: 1,
  class: "model-no-results"
}, my = {
  key: 2,
  class: "model-searching"
}, vy = { class: "model-download-url-modal" }, py = { class: "model-modal-body" }, gy = { class: "model-input-group" }, hy = { class: "model-input-group" }, yy = { class: "model-modal-actions" }, wy = /* @__PURE__ */ _e({
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
    function a(W) {
      var ce;
      return W && ((ce = o[W]) == null ? void 0 : ce[0]) || null;
    }
    const l = e, r = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = L(() => l.models[c.value]), C = L(() => l.models.some((W) => W.is_download_intent)), b = L(() => l.models.filter(
      (W) => l.modelChoices.has(W.filename) || W.is_download_intent
    ).length), x = L(() => {
      var ce;
      if (!_.value) return "";
      const W = a((ce = _.value.reference) == null ? void 0 : ce.node_type);
      return W ? `${W}/${_.value.filename}` : "";
    }), P = L(() => {
      var ce;
      if (!_.value) return "not-found";
      const W = l.modelChoices.get(_.value.filename);
      if (W)
        switch (W.action) {
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
      return _.value.is_download_intent ? "download" : (ce = _.value.options) != null && ce.length ? "ambiguous" : "not-found";
    }), T = L(() => {
      var ce, de;
      if (!_.value) return;
      const W = l.modelChoices.get(_.value.filename);
      if (W)
        switch (W.action) {
          case "select":
            return (ce = W.selected_model) != null && ce.filename ? `→ ${W.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (de = _.value.options) != null && de.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function E(W) {
      W >= 0 && W < l.models.length && (c.value = W);
    }
    function D() {
      var W;
      for (let ce = c.value + 1; ce < l.models.length; ce++) {
        const de = l.models[ce];
        if (!de.is_download_intent && !((W = l.modelChoices) != null && W.has(de.filename))) {
          E(ce);
          return;
        }
      }
    }
    function N() {
      _.value && (r("mark-optional", _.value.filename), yt(() => D()));
    }
    function O() {
      _.value && (r("skip", _.value.filename), yt(() => D()));
    }
    function I(W) {
      _.value && (r("option-selected", _.value.filename, W), yt(() => D()));
    }
    function M() {
      _.value && r("clear-choice", _.value.filename);
    }
    function se() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function Y() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || x.value, d.value = !0);
    }
    function F() {
      u.value = !1, m.value = "", w.value = [];
    }
    function z() {
      d.value = !1, v.value = "", g.value = "";
    }
    function Z() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function q(W) {
      _.value && (F(), yt(() => D()));
    }
    function A() {
      !_.value || !v.value.trim() || (r("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), z(), yt(() => D()));
    }
    function ee(W) {
      if (!W) return "Unknown";
      const ce = W / (1024 * 1024 * 1024);
      return ce >= 1 ? `${ce.toFixed(2)} GB` : `${(W / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (W, ce) => {
      var de, Ne, Fe;
      return n(), i("div", qh, [
        t("div", Yh, [
          t("div", Jh, [
            t("h3", Qh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Xh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Zh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), R(Or, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ce[0] || (ce[0] = (pe) => E(c.value - 1)),
          onNext: ce[1] || (ce[1] = (pe) => E(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (n(), i("div", ey, [
          S(Kh, {
            filename: _.value.filename,
            "node-type": ((de = _.value.reference) == null ? void 0 : de.node_type) || "Unknown",
            "has-multiple-options": !!((Ne = _.value.options) != null && Ne.length),
            options: _.value.options,
            choice: (Fe = e.modelChoices) == null ? void 0 : Fe.get(_.value.filename),
            status: P.value,
            "status-label": T.value,
            onMarkOptional: N,
            onSkip: O,
            onDownloadUrl: Y,
            onSearch: se,
            onOptionSelected: I,
            onClearChoice: M
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", ty, [...ce[5] || (ce[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), R(bt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ft(F, ["self"])
          }, [
            t("div", sy, [
              t("div", { class: "model-modal-header" }, [
                ce[6] || (ce[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              t("div", oy, [
                S(Rt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ce[2] || (ce[2] = (pe) => m.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", ny, [
                  (n(!0), i(B, null, we(w.value, (pe) => (n(), i("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (me) => q()
                  }, [
                    t("div", ly, [
                      t("code", iy, f(pe.filename), 1)
                    ]),
                    t("div", ry, [
                      t("span", cy, f(pe.category), 1),
                      t("span", uy, f(ee(pe.size)), 1)
                    ]),
                    pe.relative_path ? (n(), i("div", dy, f(pe.relative_path), 1)) : y("", !0)
                  ], 8, ay))), 128))
                ])) : m.value && !p.value ? (n(), i("div", fy, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (n(), i("div", my, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), R(bt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ft(z, ["self"])
          }, [
            t("div", vy, [
              t("div", { class: "model-modal-header" }, [
                ce[7] || (ce[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              t("div", py, [
                t("div", gy, [
                  ce[8] || (ce[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(Rt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ce[3] || (ce[3] = (pe) => v.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", hy, [
                  ce[9] || (ce[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(Rt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ce[4] || (ce[4] = (pe) => g.value = pe),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", yy, [
                  S(De, {
                    variant: "secondary",
                    onClick: z
                  }, {
                    default: h(() => [...ce[10] || (ce[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(De, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: A
                  }, {
                    default: h(() => [...ce[11] || (ce[11] = [
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
}), _y = /* @__PURE__ */ ke(wy, [["__scopeId", "data-v-5c700bfa"]]), ky = { class: "applying-step" }, by = {
  key: 0,
  class: "phase-content"
}, $y = {
  key: 1,
  class: "phase-content"
}, Cy = { class: "phase-description" }, xy = { class: "overall-progress" }, Sy = { class: "progress-bar" }, Iy = { class: "progress-label" }, Ey = { class: "install-list" }, Ty = { class: "install-icon" }, Ry = { key: 0 }, Py = {
  key: 1,
  class: "spinner"
}, My = { key: 2 }, Dy = { key: 3 }, Ly = {
  key: 0,
  class: "install-error"
}, Ny = {
  key: 2,
  class: "phase-content"
}, Uy = { class: "phase-header" }, Ay = { class: "phase-title" }, Oy = { class: "completion-summary" }, zy = {
  key: 0,
  class: "summary-item success"
}, Fy = { class: "summary-text" }, Vy = {
  key: 1,
  class: "summary-item error"
}, By = { class: "summary-text" }, Wy = {
  key: 2,
  class: "failed-list"
}, Gy = { class: "failed-node-id" }, jy = { class: "failed-error" }, Hy = {
  key: 4,
  class: "summary-item success"
}, Ky = {
  key: 5,
  class: "restart-prompt"
}, qy = {
  key: 3,
  class: "phase-content error"
}, Yy = { class: "error-message" }, Jy = /* @__PURE__ */ _e({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = L(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), a = L(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = L(() => a.value.length > 0);
    function r(u, d) {
      var v, g;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, m;
      return (m = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, g, w;
      return n(), i("div", ky, [
        e.progress.phase === "resolving" ? (n(), i("div", by, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", $y, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Cy, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", xy, [
            t("div", Sy, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Iy, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Ey, [
            (n(!0), i(B, null, we(e.progress.nodesToInstall, (p, _) => (n(), i("div", {
              key: p,
              class: Ee(["install-item", r(p, _)])
            }, [
              t("span", Ty, [
                r(p, _) === "pending" ? (n(), i("span", Ry, "○")) : r(p, _) === "installing" ? (n(), i("span", Py, "◌")) : r(p, _) === "complete" ? (n(), i("span", My, "✓")) : r(p, _) === "failed" ? (n(), i("span", Dy, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (n(), i("span", Ly, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Ny, [
          t("div", Uy, [
            t("span", {
              class: Ee(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", Ay, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Oy, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", zy, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", Fy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Vy, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", By, f(a.value.length) + " package" + f(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Wy, [
              (n(!0), i(B, null, we(a.value, (p) => (n(), i("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", Gy, f(p.node_id), 1),
                t("span", jy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", Hy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Ky, [
              d[7] || (d[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (p) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", qy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", Yy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Qy = /* @__PURE__ */ ke(Jy, [["__scopeId", "data-v-5efaae58"]]), Xy = {
  key: 0,
  class: "loading-state"
}, Zy = {
  key: 1,
  class: "wizard-content"
}, e1 = {
  key: 0,
  class: "step-content"
}, t1 = { class: "analysis-summary" }, s1 = { class: "analysis-header" }, o1 = { class: "summary-description" }, n1 = { class: "stats-grid" }, a1 = { class: "stat-card" }, l1 = { class: "stat-items" }, i1 = {
  key: 0,
  class: "stat-item success"
}, r1 = { class: "stat-count" }, c1 = {
  key: 1,
  class: "stat-item info"
}, u1 = { class: "stat-count" }, d1 = {
  key: 2,
  class: "stat-item warning"
}, f1 = { class: "stat-count" }, m1 = {
  key: 3,
  class: "stat-item warning"
}, v1 = { class: "stat-count" }, p1 = {
  key: 4,
  class: "stat-item error"
}, g1 = { class: "stat-count" }, h1 = {
  key: 5,
  class: "stat-item error"
}, y1 = { class: "stat-count" }, w1 = { class: "stat-card" }, _1 = { class: "stat-items" }, k1 = { class: "stat-item success" }, b1 = { class: "stat-count" }, $1 = {
  key: 0,
  class: "stat-item info"
}, C1 = { class: "stat-count" }, x1 = {
  key: 1,
  class: "stat-item warning"
}, S1 = { class: "stat-count" }, I1 = {
  key: 2,
  class: "stat-item warning"
}, E1 = { class: "stat-count" }, T1 = {
  key: 3,
  class: "stat-item error"
}, R1 = { class: "stat-count" }, P1 = {
  key: 0,
  class: "status-message warning"
}, M1 = { class: "status-text" }, D1 = {
  key: 1,
  class: "status-message warning"
}, L1 = { class: "status-text" }, N1 = {
  key: 2,
  class: "status-message info"
}, U1 = { class: "status-text" }, A1 = {
  key: 3,
  class: "status-message info"
}, O1 = { class: "status-text" }, z1 = {
  key: 4,
  class: "status-message warning"
}, F1 = { class: "status-text" }, V1 = {
  key: 5,
  class: "status-message success"
}, B1 = {
  key: 6,
  class: "category-mismatch-section"
}, W1 = { class: "mismatch-list" }, G1 = { class: "mismatch-path" }, j1 = { class: "mismatch-target" }, H1 = {
  key: 7,
  class: "category-mismatch-section"
}, K1 = { class: "mismatch-list" }, q1 = { class: "mismatch-path" }, Y1 = { class: "status-text" }, J1 = { class: "mismatch-path" }, Q1 = { class: "status-text" }, X1 = {
  key: 3,
  class: "step-content"
}, Z1 = { class: "review-summary" }, e0 = { class: "review-stats" }, t0 = { class: "review-stat" }, s0 = { class: "stat-value" }, o0 = { class: "review-stat" }, n0 = { class: "stat-value" }, a0 = { class: "review-stat" }, l0 = { class: "stat-value" }, i0 = { class: "review-stat" }, r0 = { class: "stat-value" }, c0 = {
  key: 0,
  class: "review-section"
}, u0 = { class: "section-title" }, d0 = { class: "review-items" }, f0 = { class: "item-name" }, m0 = { class: "item-choice" }, v0 = {
  key: 0,
  class: "choice-badge install"
}, p0 = {
  key: 1,
  class: "choice-badge skip"
}, g0 = {
  key: 1,
  class: "review-section"
}, h0 = { class: "section-title" }, y0 = { class: "review-items" }, w0 = { class: "item-name" }, _0 = { class: "item-choice" }, k0 = {
  key: 0,
  class: "choice-badge install"
}, b0 = {
  key: 1,
  class: "choice-badge optional"
}, $0 = {
  key: 2,
  class: "choice-badge skip"
}, C0 = {
  key: 1,
  class: "choice-badge pending"
}, x0 = {
  key: 2,
  class: "review-section"
}, S0 = { class: "section-title" }, I0 = { class: "review-items download-details" }, E0 = { class: "download-info" }, T0 = { class: "item-name" }, R0 = { class: "download-meta" }, P0 = { class: "download-path" }, M0 = ["title"], D0 = {
  key: 3,
  class: "review-section"
}, L0 = { class: "section-title" }, N0 = { class: "review-items" }, U0 = { class: "item-name" }, A0 = { class: "item-choice" }, O0 = {
  key: 0,
  class: "choice-badge install"
}, z0 = {
  key: 1,
  class: "choice-badge download"
}, F0 = {
  key: 2,
  class: "choice-badge optional"
}, V0 = {
  key: 3,
  class: "choice-badge skip"
}, B0 = {
  key: 4,
  class: "choice-badge skip"
}, W0 = {
  key: 1,
  class: "choice-badge download"
}, G0 = {
  key: 2,
  class: "choice-badge pending"
}, j0 = {
  key: 4,
  class: "no-choices"
}, H0 = /* @__PURE__ */ _e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Ar(), { loadPendingDownloads: v } = Po(), { openFileLocation: g } = ot(), w = k(null), p = k(!1), _ = k(!1), C = k(null), b = k("analysis"), x = k([]), P = k(/* @__PURE__ */ new Map()), T = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Set()), D = L(() => {
      const ye = [
        { id: "analysis", label: "Analysis" }
      ];
      return (se.value || z.value) && ye.push({ id: "nodes", label: "Nodes" }), Y.value && ye.push({ id: "models", label: "Models" }), ye.push({ id: "review", label: "Review" }), b.value === "applying" && ye.push({ id: "applying", label: "Applying" }), ye;
    }), N = L(() => w.value ? w.value.stats.needs_user_input : !1), O = L(() => w.value ? w.value.nodes.version_gated || [] : []), I = L(() => w.value ? w.value.nodes.uninstallable || [] : []), M = L(() => O.value.length > 0 || I.value.length > 0), se = L(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), Y = L(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), F = L(() => w.value ? w.value.stats.download_intents > 0 : !1), z = L(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), Z = L(() => w.value ? w.value.nodes.resolved.length : 0), q = L(() => w.value ? w.value.models.resolved.filter((ye) => ye.has_category_mismatch) : []), A = L(() => q.value.length > 0), ee = L(() => se.value || z.value ? "nodes" : Y.value ? "models" : "review"), W = L(() => {
      if (!w.value) return [];
      const ye = w.value.nodes.resolved.filter(($e) => !$e.is_installed), X = /* @__PURE__ */ new Set();
      return ye.filter(($e) => X.has($e.package.package_id) ? !1 : (X.add($e.package.package_id), !0));
    }), ce = L(() => {
      if (!w.value) return [];
      const ye = w.value.nodes.resolved.filter(($e) => !$e.is_installed), X = /* @__PURE__ */ new Map();
      for (const $e of ye) {
        const Ve = X.get($e.package.package_id);
        Ve ? Ve.node_types_count++ : X.set($e.package.package_id, {
          package_id: $e.package.package_id,
          title: $e.package.title,
          node_types_count: 1
        });
      }
      return Array.from(X.values());
    }), de = L(() => W.value.filter((ye) => !E.value.has(ye.package.package_id))), Ne = L(() => w.value ? w.value.models.resolved.filter(
      (ye) => ye.match_type === "download_intent" || ye.match_type === "property_download_intent"
    ).map((ye) => ({
      filename: ye.reference.widget_value,
      reference: ye.reference,
      is_download_intent: !0,
      resolved_model: ye.model,
      download_source: ye.download_source,
      target_path: ye.target_path
    })) : []), Fe = L(() => {
      if (!w.value) return [];
      const ye = w.value.nodes.unresolved.map(($e) => ({
        node_type: $e.reference.node_type,
        reason: $e.reason,
        is_unresolved: !0,
        options: void 0
      })), X = w.value.nodes.ambiguous.map(($e) => ({
        node_type: $e.reference.node_type,
        has_multiple_options: !0,
        options: $e.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...ye, ...X];
    }), pe = L(() => {
      if (!w.value) return [];
      const ye = w.value.models.unresolved.map(($e) => ({
        filename: $e.reference.widget_value,
        reference: $e.reference,
        reason: $e.reason,
        is_unresolved: !0,
        options: void 0
      })), X = w.value.models.ambiguous.map(($e) => ({
        filename: $e.reference.widget_value,
        reference: $e.reference,
        has_multiple_options: !0,
        options: $e.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...ye, ...X];
    }), me = L(() => {
      const ye = pe.value, X = Ne.value.map(($e) => ({
        filename: $e.filename,
        reference: $e.reference,
        is_download_intent: !0,
        resolved_model: $e.resolved_model,
        download_source: $e.download_source,
        target_path: $e.target_path,
        options: void 0
      }));
      return [...ye, ...X];
    }), oe = L(() => Ne.value.filter((ye) => {
      const X = T.value.get(ye.filename);
      return X ? X.action === "download" : !0;
    }).map((ye) => ({
      filename: ye.filename,
      url: ye.download_source,
      target_path: ye.target_path
    })));
    function te(ye, X = 50) {
      return ye.length <= X ? ye : ye.slice(0, X - 3) + "...";
    }
    const ue = L(() => {
      let ye = de.value.length;
      for (const X of P.value.values())
        X.action === "install" && ye++;
      for (const X of T.value.values())
        X.action === "select" && ye++;
      return ye;
    }), ge = L(() => {
      let ye = 0;
      for (const X of T.value.values())
        X.action === "download" && ye++;
      for (const X of Ne.value)
        T.value.get(X.filename) || ye++;
      return ye;
    }), Te = L(() => {
      let ye = 0;
      for (const X of P.value.values())
        X.action === "optional" && ye++;
      for (const X of T.value.values())
        X.action === "optional" && ye++;
      return ye;
    }), Le = L(() => {
      let ye = E.value.size;
      for (const X of P.value.values())
        X.action === "skip" && ye++;
      for (const X of T.value.values())
        X.action === "skip" && ye++;
      for (const X of Fe.value)
        P.value.has(X.node_type) || ye++;
      for (const X of pe.value)
        T.value.has(X.filename) || ye++;
      return ye;
    }), We = L(() => {
      const ye = {};
      if (ye.analysis = { resolved: 1, total: 1 }, se.value) {
        const X = Fe.value.length, $e = Fe.value.filter(
          (Ve) => P.value.has(Ve.node_type)
        ).length;
        ye.nodes = { resolved: $e, total: X };
      }
      if (Y.value) {
        const X = me.value.length, $e = me.value.filter(
          (Ve) => T.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        ye.models = { resolved: $e, total: X };
      }
      if (ye.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const X = d.totalFiles || 1, $e = d.completedFiles.length;
        ye.applying = { resolved: $e, total: X };
      }
      return ye;
    });
    function U(ye) {
      b.value = ye;
    }
    function j() {
      const ye = D.value.findIndex((X) => X.id === b.value);
      ye > 0 && (b.value = D.value[ye - 1].id);
    }
    function le() {
      const ye = D.value.findIndex((X) => X.id === b.value);
      ye < D.value.length - 1 && (b.value = D.value[ye + 1].id);
    }
    async function H() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (ye) {
        C.value = ye instanceof Error ? ye.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function G() {
      x.value.includes("analysis") || x.value.push("analysis"), se.value || z.value ? b.value = "nodes" : Y.value ? b.value = "models" : b.value = "review";
    }
    function Q(ye) {
      P.value.set(ye, { action: "optional" });
    }
    function ve(ye) {
      P.value.set(ye, { action: "skip" });
    }
    function ie(ye, X) {
      var Ve;
      const $e = Fe.value.find((tt) => tt.node_type === ye);
      (Ve = $e == null ? void 0 : $e.options) != null && Ve[X] && P.value.set(ye, {
        action: "install",
        package_id: $e.options[X].package_id
      });
    }
    function be(ye, X) {
      P.value.set(ye, {
        action: "install",
        package_id: X
      });
    }
    function ae(ye) {
      P.value.delete(ye);
    }
    function Ue(ye) {
      E.value.has(ye) ? E.value.delete(ye) : E.value.add(ye);
    }
    function Pe(ye) {
      T.value.set(ye, { action: "optional" });
    }
    function fe(ye) {
      T.value.set(ye, { action: "skip" });
    }
    function V(ye, X) {
      var Ve;
      const $e = pe.value.find((tt) => tt.filename === ye);
      (Ve = $e == null ? void 0 : $e.options) != null && Ve[X] && T.value.set(ye, {
        action: "select",
        selected_model: $e.options[X].model
      });
    }
    function Ae(ye, X, $e) {
      T.value.set(ye, {
        action: "download",
        url: X,
        target_path: $e
      });
    }
    function Se(ye) {
      T.value.delete(ye);
    }
    async function xe(ye) {
      try {
        await g(ye);
      } catch (X) {
        C.value = X instanceof Error ? X.message : "Failed to open file location";
      }
    }
    async function Me() {
      var ye;
      _.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const X = await r(o.workflowName, P.value, T.value, E.value);
        X.models_to_download && X.models_to_download.length > 0 && u(o.workflowName, X.models_to_download);
        const $e = [
          ...X.nodes_to_install || [],
          ...de.value.map((tt) => tt.package.package_id)
        ];
        d.nodesToInstall = [...new Set($e)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((ye = d.nodeInstallProgress) == null ? void 0 : ye.completedNodes.some((tt) => !tt.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (X) {
        C.value = X instanceof Error ? X.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function Re() {
      a("refresh"), a("restart"), a("close");
    }
    async function Qe() {
      var X;
      const ye = ((X = d.nodeInstallProgress) == null ? void 0 : X.completedNodes.filter(($e) => !$e.success).map(($e) => $e.node_id)) || [];
      if (ye.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ye.length
        }, d.nodesToInstall = ye, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch ($e) {
          d.error = $e instanceof Error ? $e.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return et(H), (ye, X) => (n(), R(vt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: X[1] || (X[1] = ($e) => a("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (n(), i("div", Xy, [...X[2] || (X[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", Zy, [
          S(lg, {
            steps: D.value,
            "current-step": b.value,
            "completed-steps": x.value,
            "step-stats": We.value,
            onStepChange: U
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (n(), i("div", e1, [
            t("div", t1, [
              t("div", s1, [
                X[3] || (X[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", o1, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", n1, [
                t("div", a1, [
                  X[16] || (X[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", l1, [
                    Z.value > 0 ? (n(), i("div", i1, [
                      X[4] || (X[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", r1, f(Z.value), 1),
                      X[5] || (X[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", c1, [
                      X[6] || (X[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", u1, f(w.value.stats.packages_needing_installation), 1),
                      X[7] || (X[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", d1, [
                      X[8] || (X[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", f1, f(w.value.nodes.ambiguous.length), 1),
                      X[9] || (X[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    O.value.length > 0 ? (n(), i("div", m1, [
                      X[10] || (X[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", v1, f(O.value.length), 1),
                      X[11] || (X[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    I.value.length > 0 ? (n(), i("div", p1, [
                      X[12] || (X[12] = t("span", { class: "stat-icon" }, "⛔", -1)),
                      t("span", g1, f(I.value.length), 1),
                      X[13] || (X[13] = t("span", { class: "stat-label" }, "uninstallable", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", h1, [
                      X[14] || (X[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", y1, f(w.value.nodes.unresolved.length), 1),
                      X[15] || (X[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", w1, [
                  X[27] || (X[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", _1, [
                    t("div", k1, [
                      X[17] || (X[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", b1, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      X[18] || (X[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", $1, [
                      X[19] || (X[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", C1, f(w.value.stats.download_intents), 1),
                      X[20] || (X[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    A.value ? (n(), i("div", x1, [
                      X[21] || (X[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", S1, f(q.value.length), 1),
                      X[22] || (X[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", I1, [
                      X[23] || (X[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", E1, f(w.value.models.ambiguous.length), 1),
                      X[24] || (X[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", T1, [
                      X[25] || (X[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", R1, f(w.value.models.unresolved.length), 1),
                      X[26] || (X[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              N.value ? (n(), i("div", P1, [
                X[28] || (X[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", M1, f(Fe.value.length + pe.value.length) + " items need your input", 1)
              ])) : M.value ? (n(), i("div", D1, [
                X[29] || (X[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", L1, f(O.value.length + I.value.length) + " node type" + f(O.value.length + I.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : z.value ? (n(), i("div", N1, [
                X[30] || (X[30] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", U1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(F.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : F.value ? (n(), i("div", A1, [
                X[31] || (X[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", O1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : A.value ? (n(), i("div", z1, [
                X[32] || (X[32] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", F1, f(q.value.length) + " model" + f(q.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", V1, [...X[33] || (X[33] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              A.value ? (n(), i("div", B1, [
                X[36] || (X[36] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", W1, [
                  (n(!0), i(B, null, we(q.value, ($e) => {
                    var Ve, tt;
                    return n(), i("div", {
                      key: $e.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", G1, f($e.actual_category) + "/" + f((Ve = $e.model) == null ? void 0 : Ve.filename), 1),
                      X[35] || (X[35] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", j1, f((tt = $e.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      $e.file_path ? (n(), R(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (wt) => xe($e.file_path)
                      }, {
                        default: h(() => [...X[34] || (X[34] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              M.value ? (n(), i("div", H1, [
                X[37] || (X[37] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", K1, [
                  (n(!0), i(B, null, we(O.value, ($e) => {
                    var Ve;
                    return n(), i("div", {
                      key: `vg-${$e.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", q1, f($e.reference.node_type), 1),
                      t("span", Y1, f($e.guidance || ((Ve = w.value.node_guidance) == null ? void 0 : Ve[$e.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128)),
                  (n(!0), i(B, null, we(I.value, ($e) => {
                    var Ve;
                    return n(), i("div", {
                      key: `un-${$e.reference.node_type}-${$e.package.package_id}`,
                      class: "mismatch-item"
                    }, [
                      t("code", J1, f($e.reference.node_type), 1),
                      t("span", Q1, f($e.guidance || ((Ve = w.value.node_guidance) == null ? void 0 : Ve[$e.reference.node_type]) || "No installable package version found for the current environment."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "nodes" ? (n(), R(Ih, {
            key: 1,
            nodes: Fe.value,
            "node-choices": P.value,
            "auto-resolved-packages": ce.value,
            "skipped-packages": E.value,
            onMarkOptional: Q,
            onSkip: ve,
            onOptionSelected: ie,
            onManualEntry: be,
            onClearChoice: ae,
            onPackageSkip: Ue
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (n(), R(_y, {
            key: 2,
            models: me.value,
            "model-choices": T.value,
            onMarkOptional: Pe,
            onSkip: fe,
            onOptionSelected: V,
            onDownloadUrl: Ae,
            onClearChoice: Se
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (n(), i("div", X1, [
            t("div", Z1, [
              X[43] || (X[43] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", e0, [
                t("div", t0, [
                  t("span", s0, f(ue.value), 1),
                  X[38] || (X[38] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", o0, [
                  t("span", n0, f(ge.value), 1),
                  X[39] || (X[39] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", a0, [
                  t("span", l0, f(Te.value), 1),
                  X[40] || (X[40] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", i0, [
                  t("span", r0, f(Le.value), 1),
                  X[41] || (X[41] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ce.value.length > 0 ? (n(), i("div", c0, [
                t("h4", u0, "Node Packages (" + f(ce.value.length) + ")", 1),
                t("div", d0, [
                  (n(!0), i(B, null, we(ce.value, ($e) => (n(), i("div", {
                    key: $e.package_id,
                    class: "review-item"
                  }, [
                    t("code", f0, f($e.package_id), 1),
                    t("div", m0, [
                      E.value.has($e.package_id) ? (n(), i("span", p0, "Skipped")) : (n(), i("span", v0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Fe.value.length > 0 ? (n(), i("div", g0, [
                t("h4", h0, "Node Choices (" + f(Fe.value.length) + ")", 1),
                t("div", y0, [
                  (n(!0), i(B, null, we(Fe.value, ($e) => {
                    var Ve, tt, wt, at;
                    return n(), i("div", {
                      key: $e.node_type,
                      class: "review-item"
                    }, [
                      t("code", w0, f($e.node_type), 1),
                      t("div", _0, [
                        P.value.has($e.node_type) ? (n(), i(B, { key: 0 }, [
                          ((Ve = P.value.get($e.node_type)) == null ? void 0 : Ve.action) === "install" ? (n(), i("span", k0, f((tt = P.value.get($e.node_type)) == null ? void 0 : tt.package_id), 1)) : ((wt = P.value.get($e.node_type)) == null ? void 0 : wt.action) === "optional" ? (n(), i("span", b0, " Optional ")) : ((at = P.value.get($e.node_type)) == null ? void 0 : at.action) === "skip" ? (n(), i("span", $0, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", C0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              oe.value.length > 0 ? (n(), i("div", x0, [
                t("h4", S0, "Models to Download (" + f(oe.value.length) + ")", 1),
                t("div", I0, [
                  (n(!0), i(B, null, we(oe.value, ($e) => (n(), i("div", {
                    key: $e.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", E0, [
                      t("code", T0, f($e.filename), 1),
                      t("div", R0, [
                        t("span", P0, "→ " + f($e.target_path), 1),
                        $e.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: $e.url
                        }, f(te($e.url)), 9, M0)) : y("", !0)
                      ])
                    ]),
                    X[42] || (X[42] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              me.value.length > 0 ? (n(), i("div", D0, [
                t("h4", L0, "Models (" + f(me.value.length) + ")", 1),
                t("div", N0, [
                  (n(!0), i(B, null, we(me.value, ($e) => {
                    var Ve, tt, wt, at, Ds, Xt, ys;
                    return n(), i("div", {
                      key: $e.filename,
                      class: "review-item"
                    }, [
                      t("code", U0, f($e.filename), 1),
                      t("div", A0, [
                        T.value.has($e.filename) ? (n(), i(B, { key: 0 }, [
                          ((Ve = T.value.get($e.filename)) == null ? void 0 : Ve.action) === "select" ? (n(), i("span", O0, f((wt = (tt = T.value.get($e.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : wt.filename), 1)) : ((at = T.value.get($e.filename)) == null ? void 0 : at.action) === "download" ? (n(), i("span", z0, " Download ")) : ((Ds = T.value.get($e.filename)) == null ? void 0 : Ds.action) === "optional" ? (n(), i("span", F0, " Optional ")) : ((Xt = T.value.get($e.filename)) == null ? void 0 : Xt.action) === "skip" ? (n(), i("span", V0, " Skip ")) : ((ys = T.value.get($e.filename)) == null ? void 0 : ys.action) === "cancel_download" ? (n(), i("span", B0, " Cancel Download ")) : y("", !0)
                        ], 64)) : $e.is_download_intent ? (n(), i("span", W0, " Pending Download ")) : (n(), i("span", G0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              W.value.length === 0 && Fe.value.length === 0 && me.value.length === 0 ? (n(), i("div", j0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (n(), R(Qy, {
            key: 4,
            progress: He(d),
            onRestart: Re,
            onRetryFailed: Qe
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (n(), R(De, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: j
        }, {
          default: h(() => [...X[44] || (X[44] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        X[47] || (X[47] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || He(d).phase === "complete" || He(d).phase === "error" ? (n(), R(De, {
          key: 1,
          variant: "secondary",
          onClick: X[0] || (X[0] = ($e) => a("close"))
        }, {
          default: h(() => [
            $(f(He(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (n(), R(De, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: G
        }, {
          default: h(() => [
            $(f(ee.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (n(), R(De, {
          key: 3,
          variant: "primary",
          onClick: le
        }, {
          default: h(() => [
            $(f(Y.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (n(), R(De, {
          key: 4,
          variant: "primary",
          onClick: le
        }, {
          default: h(() => [...X[45] || (X[45] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (n(), R(De, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Me
        }, {
          default: h(() => [...X[46] || (X[46] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), K0 = /* @__PURE__ */ ke(H0, [["__scopeId", "data-v-d0723a71"]]), q0 = { class: "search-input-wrapper" }, Y0 = ["value", "placeholder"], J0 = /* @__PURE__ */ _e({
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
      const m = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", m);
      }, o.debounce)) : a("update:modelValue", m);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return et(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (n(), i("div", q0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Jt(u, ["escape"])
      }, null, 40, Y0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Q0 = /* @__PURE__ */ ke(J0, [["__scopeId", "data-v-266f857a"]]), X0 = { class: "search-bar" }, Z0 = /* @__PURE__ */ _e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", X0, [
      S(Q0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Mo = /* @__PURE__ */ ke(Z0, [["__scopeId", "data-v-3d51bbfd"]]), ew = { class: "section-group" }, tw = {
  key: 0,
  class: "section-content"
}, sw = /* @__PURE__ */ _e({
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
    return (c, u) => (n(), i("section", ew, [
      S(Vt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          $(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", tw, [
        Je(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), dt = /* @__PURE__ */ ke(sw, [["__scopeId", "data-v-c48e33ed"]]), ow = { class: "item-header" }, nw = {
  key: 0,
  class: "item-icon"
}, aw = { class: "item-info" }, lw = {
  key: 0,
  class: "item-title"
}, iw = {
  key: 1,
  class: "item-subtitle"
}, rw = {
  key: 0,
  class: "item-details"
}, cw = {
  key: 1,
  class: "item-actions"
}, uw = /* @__PURE__ */ _e({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = L(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Ee(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", ow, [
        l.$slots.icon ? (n(), i("span", nw, [
          Je(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", aw, [
          l.$slots.title ? (n(), i("div", lw, [
            Je(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", iw, [
            Je(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", rw, [
        Je(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", cw, [
        Je(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ ke(uw, [["__scopeId", "data-v-cc435e0e"]]), dw = { class: "loading-state" }, fw = { class: "loading-message" }, mw = /* @__PURE__ */ _e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", dw, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", fw, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ ke(mw, [["__scopeId", "data-v-ad8436c9"]]), vw = { class: "error-state" }, pw = { class: "error-message" }, gw = /* @__PURE__ */ _e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", vw, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", pw, f(e.message), 1),
      e.retry ? (n(), R(he, {
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
}), Ms = /* @__PURE__ */ ke(gw, [["__scopeId", "data-v-5397be48"]]), hw = /* @__PURE__ */ _e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ot(), r = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = L(
      () => r.value.filter((A) => A.status === "broken")
    ), C = L(
      () => r.value.filter((A) => A.status === "new")
    ), b = L(
      () => r.value.filter((A) => A.status === "modified")
    ), x = L(
      () => r.value.filter((A) => A.status === "synced")
    ), P = L(() => {
      if (!d.value.trim()) return r.value;
      const A = d.value.toLowerCase();
      return r.value.filter((ee) => ee.name.toLowerCase().includes(A));
    }), T = L(
      () => _.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = L(
      () => C.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = L(
      () => b.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = L(
      () => x.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = L(
      () => v.value ? N.value : N.value.slice(0, 5)
    );
    async function I(A = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(A);
      } catch (ee) {
        u.value = ee instanceof Error ? ee.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function M(A) {
      p.value = A, g.value = !0;
    }
    function se(A) {
      p.value = A, w.value = !0;
    }
    function Y() {
      a("refresh");
    }
    async function F() {
      w.value = !1, await I(!0);
    }
    async function z() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function Z(A) {
      if (A.issue_summary && A.issue_summary.trim().length > 0)
        return A.issue_summary;
      const ee = [];
      return A.version_gated_count && A.version_gated_count > 0 && ee.push(`${A.version_gated_count} node${A.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), A.uninstallable_count && A.uninstallable_count > 0 && ee.push(`${A.uninstallable_count} uninstallable node mapping${A.uninstallable_count > 1 ? "s" : ""}`), A.missing_nodes > 0 && ee.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && ee.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && ee.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && ee.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), ee.length > 0 ? ee.join(", ") : "Has issues";
    }
    function q(A) {
      const ee = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state;
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync` : ee || "Unknown";
    }
    return et(I), (A, ee) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          S(Mo, {
            modelValue: d.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = (W) => d.value = W),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), R(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), R(Ms, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            T.value.length ? (n(), R(dt, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(T.value, (W) => (n(), R(Et, {
                  key: W.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ee[7] || (ee[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(Z(W)), 1)
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ce) => se(W.name)
                    }, {
                      default: h(() => [...ee[8] || (ee[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(he, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => M(W.name)
                    }, {
                      default: h(() => [...ee[9] || (ee[9] = [
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
            E.value.length ? (n(), R(dt, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(E.value, (W) => (n(), R(Et, {
                  key: W.name,
                  status: W.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(W.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(q(W)), 1)
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => M(W.name)
                    }, {
                      default: h(() => [...ee[10] || (ee[10] = [
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
            D.value.length ? (n(), R(dt, {
              key: 2,
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(D.value, (W) => (n(), R(Et, {
                  key: W.name,
                  status: W.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ee[11] || (ee[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(q(W)), 1)
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => M(W.name)
                    }, {
                      default: h(() => [...ee[12] || (ee[12] = [
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
            N.value.length ? (n(), R(dt, {
              key: 3,
              title: "SYNCED",
              count: N.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ee[2] || (ee[2] = (W) => m.value = W)
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(O.value, (W) => (n(), R(Et, {
                  key: W.name,
                  status: W.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(W.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(q(W)), 1)
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ce) => M(W.name)
                    }, {
                      default: h(() => [...ee[13] || (ee[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && N.value.length > 5 ? (n(), R(he, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ee[1] || (ee[1] = (W) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(N.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            P.value.length ? y("", !0) : (n(), R(is, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (n(), R(qp, {
        key: 0,
        "workflow-name": p.value,
        onClose: ee[3] || (ee[3] = (W) => g.value = !1),
        onResolve: ee[4] || (ee[4] = (W) => se(p.value)),
        onRefresh: ee[5] || (ee[5] = (W) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (n(), R(K0, {
        key: 1,
        "workflow-name": p.value,
        onClose: F,
        onInstall: Y,
        onRefresh: ee[6] || (ee[6] = (W) => a("refresh")),
        onRestart: z
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), yw = /* @__PURE__ */ ke(hw, [["__scopeId", "data-v-681f8eab"]]), ww = /* @__PURE__ */ _e({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ee(["summary-bar", e.variant])
    }, [
      Je(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), pn = /* @__PURE__ */ ke(ww, [["__scopeId", "data-v-ccb7816e"]]), _w = {
  key: 0,
  class: "model-details"
}, kw = { class: "detail-section" }, bw = { class: "detail-row" }, $w = { class: "detail-value mono" }, Cw = { class: "detail-row" }, xw = { class: "detail-value mono" }, Sw = { class: "detail-row" }, Iw = { class: "detail-value mono" }, Ew = { class: "detail-row" }, Tw = { class: "detail-value" }, Rw = { class: "detail-row" }, Pw = { class: "detail-value" }, Mw = { class: "detail-row" }, Dw = { class: "detail-value" }, Lw = { class: "detail-section" }, Nw = { class: "section-header" }, Uw = {
  key: 0,
  class: "locations-list"
}, Aw = { class: "location-path mono" }, Ow = {
  key: 0,
  class: "location-modified"
}, zw = ["onClick"], Fw = {
  key: 1,
  class: "empty-state"
}, Vw = { class: "detail-section" }, Bw = { class: "section-header" }, Ww = {
  key: 0,
  class: "sources-list"
}, Gw = { class: "source-type" }, jw = ["href"], Hw = ["disabled", "onClick"], Kw = {
  key: 1,
  class: "empty-state"
}, qw = { class: "add-source-form" }, Yw = ["disabled"], Jw = {
  key: 2,
  class: "source-error"
}, Qw = {
  key: 3,
  class: "source-success"
}, Xw = /* @__PURE__ */ _e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = ot(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let b = null;
    function x(I, M = "success", se = 2e3) {
      b && clearTimeout(b), C.value = { message: I, type: M }, b = setTimeout(() => {
        C.value = null;
      }, se);
    }
    function P(I) {
      if (!I) return "Unknown";
      const M = 1024 * 1024 * 1024, se = 1024 * 1024;
      return I >= M ? `${(I / M).toFixed(1)} GB` : I >= se ? `${(I / se).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function T(I) {
      navigator.clipboard.writeText(I), x("Copied to clipboard!");
    }
    async function E(I) {
      try {
        await c(I), x("Opening file location...");
      } catch {
        x("Failed to open location", "error");
      }
    }
    async function D() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await O();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function N(I) {
      if (u.value) {
        w.value = I, p.value = null, _.value = null;
        try {
          await r(u.value.hash, I), x("Source removed"), await O();
        } catch (M) {
          p.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function O() {
      d.value = !0, m.value = null;
      try {
        u.value = await a(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return et(O), (I, M) => {
      var se;
      return n(), i(B, null, [
        S(vt, {
          title: `Model Details: ${((se = u.value) == null ? void 0 : se.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: M[5] || (M[5] = (Y) => I.$emit("close"))
        }, {
          body: h(() => {
            var Y, F, z, Z;
            return [
              u.value ? (n(), i("div", _w, [
                t("section", kw, [
                  t("div", bw, [
                    M[6] || (M[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", $w, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (q) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", Cw, [
                    M[7] || (M[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", xw, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (q) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", Sw, [
                    M[8] || (M[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", Iw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (q) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", Ew, [
                    M[9] || (M[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", Tw, f(P(u.value.size)), 1)
                  ]),
                  t("div", Rw, [
                    M[10] || (M[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", Pw, f(u.value.category), 1)
                  ]),
                  t("div", Mw, [
                    M[11] || (M[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", Dw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", Lw, [
                  t("h4", Nw, "Locations (" + f(((Y = u.value.locations) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (F = u.value.locations) != null && F.length ? (n(), i("div", Uw, [
                    (n(!0), i(B, null, we(u.value.locations, (q, A) => (n(), i("div", {
                      key: A,
                      class: "location-item"
                    }, [
                      t("span", Aw, f(q.path), 1),
                      q.modified ? (n(), i("span", Ow, "Modified: " + f(q.modified), 1)) : y("", !0),
                      q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ee) => E(q.path)
                      }, " Open File Location ", 8, zw)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", Fw, "No locations found"))
                ]),
                t("section", Vw, [
                  t("h4", Bw, "Download Sources (" + f(((z = u.value.sources) == null ? void 0 : z.length) || 0) + ")", 1),
                  (Z = u.value.sources) != null && Z.length ? (n(), i("div", Ww, [
                    (n(!0), i(B, null, we(u.value.sources, (q, A) => (n(), i("div", {
                      key: A,
                      class: "source-item"
                    }, [
                      t("span", Gw, f(q.type) + ":", 1),
                      t("a", {
                        href: q.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(q.url), 9, jw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === q.url,
                        onClick: (ee) => N(q.url)
                      }, f(w.value === q.url ? "..." : "×"), 9, Hw)
                    ]))), 128))
                  ])) : (n(), i("div", Kw, " No download sources configured ")),
                  t("div", qw, [
                    Xe(t("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (q) => v.value = q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Wt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: D
                    }, f(g.value ? "Adding..." : "Add Source"), 9, Yw)
                  ]),
                  p.value ? (n(), i("p", Jw, f(p.value), 1)) : y("", !0),
                  _.value ? (n(), i("p", Qw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (Y) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), R(bt, { to: "body" }, [
          C.value ? (n(), i("div", {
            key: 0,
            class: Ee(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), fl = /* @__PURE__ */ ke(Xw, [["__scopeId", "data-v-f15cbb56"]]), Zw = ["disabled"], e_ = { class: "dropdown-value" }, t_ = ["onClick"], s_ = {
  key: 0,
  class: "dropdown-error"
}, o_ = /* @__PURE__ */ _e({
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
    function d(x) {
      return typeof x == "string" ? x : x.value;
    }
    function m(x) {
      return typeof x == "string" ? x : x.label;
    }
    const v = L(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const x = o.options.find((P) => d(P) === o.modelValue);
      return x ? m(x) : String(o.modelValue);
    });
    function g() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function p(x) {
      a("update:modelValue", d(x)), w();
    }
    function _() {
      if (!r.value) return;
      const x = r.value.getBoundingClientRect(), P = window.innerHeight, T = P - x.bottom, E = x.top, D = Math.min(300, o.options.length * 36 + 8), N = T < D && E > T;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...N ? { bottom: `${P - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    pt(l, async (x) => {
      x && (await yt(), _());
    });
    function C() {
      l.value && _();
    }
    function b(x) {
      x.key === "Escape" && l.value && w();
    }
    return et(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", b);
    }), Hs(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", b);
    }), (x, P) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Ee(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", e_, f(v.value), 1),
        P[0] || (P[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Zw),
      (n(), R(bt, { to: "body" }, [
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
          style: Gt(u.value)
        }, [
          (n(!0), i(B, null, we(e.options, (T) => (n(), i("div", {
            key: d(T),
            class: Ee(["dropdown-option", { selected: d(T) === e.modelValue }]),
            onClick: (E) => p(T)
          }, f(m(T)), 11, t_))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", s_, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), n_ = /* @__PURE__ */ ke(o_, [["__scopeId", "data-v-857e085b"]]);
function a_(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function l_(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
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
function r_(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${i_(o)}`;
}
const c_ = { class: "hf-file-browser" }, u_ = { class: "browser-header" }, d_ = { class: "repo-info" }, f_ = { class: "repo-id" }, m_ = {
  key: 0,
  class: "revision-pill"
}, v_ = {
  key: 0,
  class: "loading-state"
}, p_ = {
  key: 1,
  class: "error-state"
}, g_ = { class: "toolbar" }, h_ = { class: "toolbar-actions" }, y_ = { class: "file-list-container" }, w_ = {
  key: 0,
  class: "file-list-header"
}, __ = ["checked", "indeterminate"], k_ = { class: "sort-indicator" }, b_ = { class: "sort-indicator" }, $_ = {
  key: 1,
  class: "empty-state"
}, C_ = {
  key: 2,
  class: "file-list"
}, x_ = ["onClick"], S_ = ["checked", "onChange"], I_ = { class: "file-path" }, E_ = { class: "file-size" }, T_ = { class: "destination-section" }, R_ = { class: "destination-row" }, P_ = {
  key: 0,
  class: "path-separator"
}, M_ = { class: "action-bar" }, D_ = { class: "summary-info" }, L_ = { class: "summary-count" }, N_ = { class: "summary-size" }, U_ = /* @__PURE__ */ _e({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ot(), c = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k("name"), p = k(!0), _ = k(""), C = k(""), b = k(""), x = k([]), P = k(!1);
    let T = !1;
    const E = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, D = L(() => {
      let oe = c.value;
      if (o.initialPath) {
        const te = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        oe = oe.filter((ue) => ue.path.startsWith(te) || ue.path === o.initialPath);
      }
      if (g.value && (oe = oe.filter((te) => te.is_model_file)), v.value.trim()) {
        const te = v.value.toLowerCase();
        oe = oe.filter((ue) => ue.path.toLowerCase().includes(te));
      }
      return oe;
    }), N = L(() => {
      const oe = [...D.value];
      return oe.sort((te, ue) => {
        let ge;
        return w.value === "name" ? ge = te.path.localeCompare(ue.path) : ge = te.size - ue.size, p.value ? ge : -ge;
      }), oe;
    }), O = L(() => D.value.length === 0 ? !1 : D.value.every((oe) => u.value.has(oe.path))), I = L(() => D.value.some((oe) => u.value.has(oe.path))), M = L(() => {
      const oe = x.value.map((te) => ({
        label: te,
        value: te
      }));
      return oe.push({ label: "Custom path...", value: "__custom__" }), oe;
    }), se = L(() => _.value === "__custom__" ? b.value.trim().length > 0 : _.value.length > 0), Y = L(() => {
      let oe = 0;
      for (const te of u.value) {
        const ue = c.value.find((ge) => ge.path === te);
        ue && (oe += ue.size);
      }
      return oe;
    });
    function F(oe) {
      if (oe === 0) return "0 B";
      const te = 1024 * 1024 * 1024, ue = 1024 * 1024, ge = 1024;
      return oe >= te ? `${(oe / te).toFixed(2)} GB` : oe >= ue ? `${(oe / ue).toFixed(1)} MB` : oe >= ge ? `${(oe / ge).toFixed(0)} KB` : `${oe} B`;
    }
    function z(oe) {
      const te = oe.match(E);
      return te ? `${te[1]}${te[4]}` : null;
    }
    function Z(oe) {
      const te = new Set(u.value), ue = te.has(oe.path), ge = oe.shard_group || z(oe.path);
      if (ge) {
        const Te = c.value.filter((Le) => (Le.shard_group || z(Le.path)) === ge);
        ue ? Te.forEach((Le) => te.delete(Le.path)) : Te.forEach((Le) => te.add(Le.path));
      } else
        ue ? te.delete(oe.path) : te.add(oe.path);
      u.value = te;
    }
    function q() {
      const oe = new Set(u.value);
      for (const te of D.value)
        te.is_model_file && oe.add(te.path);
      u.value = oe;
    }
    function A() {
      u.value = /* @__PURE__ */ new Set();
    }
    function ee() {
      if (O.value) {
        const oe = new Set(u.value);
        for (const te of D.value)
          oe.delete(te.path);
        u.value = oe;
      } else {
        const oe = new Set(u.value);
        for (const te of D.value)
          oe.add(te.path);
        u.value = oe;
      }
    }
    function W(oe) {
      w.value === oe ? p.value = !p.value : (w.value = oe, p.value = !0);
    }
    function ce(oe) {
      const te = oe.split("/");
      return te.length >= 2 ? te[te.length - 2] : null;
    }
    function de() {
      if (P.value || u.value.size === 0) return;
      const oe = /* @__PURE__ */ new Set();
      for (const ge of u.value) {
        const Te = ce(ge);
        Te && oe.add(Te.toLowerCase());
      }
      if (oe.size !== 1) return;
      const te = [...oe][0], ue = x.value.find(
        (ge) => ge.toLowerCase() === te
      );
      ue && ue !== _.value && (T = !0, _.value = ue, yt(() => {
        T = !1;
      }));
    }
    function Ne() {
      return _.value === "__custom__" ? b.value.trim() : C.value.trim() ? `${_.value}/${C.value.trim()}` : _.value;
    }
    function Fe() {
      if (u.value.size === 0 || !se.value) return;
      const oe = Ne(), te = [];
      for (const ue of u.value) {
        const ge = c.value.find((Te) => Te.path === ue);
        ge && te.push({
          url: r_(o.repoId, o.revision, ge.path),
          destination: oe,
          filename: ge.path.split("/").pop() || ge.path
        });
      }
      a("queue", te);
    }
    async function pe() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const oe = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, te = await l(oe);
          if (c.value = te.files, o.preselectedFile) {
            const ue = c.value.find((ge) => ge.path === o.preselectedFile);
            ue && Z(ue);
          }
        } catch (oe) {
          m.value = oe instanceof Error ? oe.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function me() {
      try {
        const oe = await r();
        x.value = oe.directories, oe.directories.length > 0 && !_.value && (_.value = oe.directories[0]);
      } catch {
        x.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return pt(() => [o.repoId, o.revision], () => {
      o.repoId && pe();
    }, { immediate: !1 }), pt(() => o.repoId, () => {
      P.value = !1;
    }), pt(u, () => {
      de();
    }, { deep: !0 }), pt(x, () => {
      x.value.length > 0 && u.value.size > 0 && de();
    }), pt(_, (oe, te) => {
      T || te === "" || (P.value = !0);
    }), et(() => {
      pe(), me();
    }), (oe, te) => (n(), i("div", c_, [
      t("div", u_, [
        t("button", {
          class: "back-btn",
          onClick: te[0] || (te[0] = (ue) => oe.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", d_, [
          t("span", f_, f(e.repoId), 1),
          e.revision ? (n(), i("span", m_, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (n(), i("div", v_, " Loading repository files... ")) : m.value ? (n(), i("div", p_, f(m.value), 1)) : (n(), i(B, { key: 2 }, [
        t("div", g_, [
          S(Rt, {
            modelValue: v.value,
            "onUpdate:modelValue": te[1] || (te[1] = (ue) => v.value = ue),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", h_, [
            t("button", {
              class: Ee(["toggle-btn", { active: g.value }]),
              onClick: te[2] || (te[2] = (ue) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: A
            }, "Clear")
          ])
        ]),
        t("div", y_, [
          D.value.length > 0 ? (n(), i("div", w_, [
            t("input", {
              type: "checkbox",
              checked: O.value,
              indeterminate: I.value && !O.value,
              class: "file-checkbox",
              onChange: ee
            }, null, 40, __),
            t("span", {
              class: "header-name",
              onClick: te[3] || (te[3] = (ue) => W("name"))
            }, [
              te[9] || (te[9] = $(" Name ", -1)),
              t("span", k_, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: te[4] || (te[4] = (ue) => W("size"))
            }, [
              te[10] || (te[10] = $(" Size ", -1)),
              t("span", b_, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          D.value.length === 0 ? (n(), i("div", $_, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", C_, [
            (n(!0), i(B, null, we(N.value, (ue) => (n(), i("div", {
              key: ue.path,
              class: Ee(["file-item", { selected: u.value.has(ue.path) }]),
              onClick: (ge) => Z(ue)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(ue.path),
                class: "file-checkbox",
                onClick: te[5] || (te[5] = ft(() => {
                }, ["stop"])),
                onChange: (ge) => Z(ue)
              }, null, 40, S_),
              t("span", I_, f(ue.path), 1),
              t("span", E_, f(F(ue.size)), 1)
            ], 10, x_))), 128))
          ]))
        ]),
        t("div", T_, [
          te[11] || (te[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", R_, [
            S(n_, {
              modelValue: _.value,
              "onUpdate:modelValue": te[6] || (te[6] = (ue) => _.value = ue),
              options: M.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (n(), i("span", P_, "/")) : y("", !0),
            _.value !== "__custom__" ? (n(), R(Rt, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": te[7] || (te[7] = (ue) => C.value = ue),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          _.value === "__custom__" ? (n(), R(Rt, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": te[8] || (te[8] = (ue) => b.value = ue),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", M_, [
          t("div", D_, [
            t("span", L_, f(u.value.size) + " file(s) selected", 1),
            t("span", N_, f(F(Y.value)), 1)
          ]),
          S(De, {
            variant: "primary",
            disabled: u.value.size === 0 || !se.value,
            onClick: Fe
          }, {
            default: h(() => [...te[12] || (te[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), A_ = /* @__PURE__ */ ke(U_, [["__scopeId", "data-v-183acebc"]]), O_ = { class: "token-config-modal" }, z_ = { class: "provider-info" }, F_ = { class: "provider-icon" }, V_ = { class: "provider-name" }, B_ = {
  key: 0,
  class: "current-token"
}, W_ = { class: "mask" }, G_ = { class: "token-input-section" }, j_ = { class: "input-label" }, H_ = { class: "help-text" }, K_ = ["href"], q_ = { class: "modal-actions" }, Y_ = /* @__PURE__ */ _e({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ot(), r = k(""), c = k(!1), u = k(!1), d = L(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), m = L(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = L(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), g = L(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = L(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function p() {
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
    return (C, b) => (n(), R(vt, {
      title: "Configure API Token",
      onClose: b[2] || (b[2] = (x) => C.$emit("close"))
    }, {
      body: h(() => [
        t("div", O_, [
          t("div", z_, [
            t("span", F_, f(m.value), 1),
            t("span", V_, f(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", B_, [
            b[4] || (b[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", W_, f(e.currentTokenMask), 1),
            S(De, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...b[3] || (b[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", G_, [
            t("label", j_, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            S(Rt, {
              modelValue: r.value,
              "onUpdate:modelValue": b[0] || (b[0] = (x) => r.value = x),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", H_, [
              t("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, K_)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        t("div", q_, [
          S(De, {
            variant: "secondary",
            onClick: b[1] || (b[1] = (x) => C.$emit("close"))
          }, {
            default: h(() => [...b[5] || (b[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(De, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: p
          }, {
            default: h(() => [...b[6] || (b[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), J_ = /* @__PURE__ */ ke(Y_, [["__scopeId", "data-v-0687d0ce"]]), Q_ = { class: "huggingface-tab" }, X_ = {
  key: 0,
  class: "search-section"
}, Z_ = { class: "search-header" }, ek = { class: "search-bar" }, tk = {
  key: 1,
  class: "search-results"
}, sk = {
  key: 0,
  class: "loading-state"
}, ok = {
  key: 1,
  class: "error-state"
}, nk = {
  key: 2,
  class: "results-list"
}, ak = ["onClick"], lk = { class: "repo-header" }, ik = { class: "repo-id" }, rk = { class: "repo-stats" }, ck = {
  class: "stat",
  title: "Downloads"
}, uk = {
  class: "stat",
  title: "Likes"
}, dk = {
  key: 0,
  class: "repo-desc"
}, fk = {
  key: 1,
  class: "repo-tags"
}, mk = {
  key: 3,
  class: "empty-state"
}, vk = {
  key: 4,
  class: "hint-state"
}, pk = /* @__PURE__ */ _e({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ot(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k("main"), g = k(), w = k(), p = k(!1), _ = k(null), C = L(() => {
      if (!u.value) return !1;
      const O = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || O.includes("authentication") || O.includes("unauthorized");
    });
    function b(O) {
      return O >= 1e6 ? `${(O / 1e6).toFixed(1)}M` : O >= 1e3 ? `${(O / 1e3).toFixed(1)}K` : String(O);
    }
    async function x() {
      const O = l.value.trim();
      if (!O) return;
      u.value = null;
      const I = l_(O);
      if (I.kind === "file" && I.repoId && I.path) {
        m.value = I.repoId, v.value = I.revision || "main";
        const M = I.path.split("/");
        M.length > 1 ? g.value = M.slice(0, -1).join("/") : g.value = void 0, w.value = I.path, a.value = "browse";
        return;
      }
      if (I.kind === "repo" && I.repoId) {
        m.value = I.repoId, v.value = I.revision || "main", g.value = I.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(O) && !O.includes("://")) {
        m.value = O, v.value = "main", g.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const M = await s(O);
        r.value = M.results, d.value = !0;
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function P(O) {
      m.value = O, v.value = "main", g.value = void 0, w.value = void 0, a.value = "browse";
    }
    function T() {
      a.value = "search", m.value = null, g.value = void 0, w.value = void 0;
    }
    async function E() {
      try {
        const O = await o();
        _.value = O.huggingface_token || null;
      } catch (O) {
        console.error("Failed to load config:", O);
      }
    }
    function D() {
      E(), C.value && l.value && x();
    }
    function N() {
      _.value = null;
    }
    return et(E), (O, I) => (n(), i("div", Q_, [
      a.value === "search" ? (n(), i("div", X_, [
        t("div", Z_, [
          t("div", ek, [
            S(Rt, {
              modelValue: l.value,
              "onUpdate:modelValue": I[0] || (I[0] = (M) => l.value = M),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Jt(x, ["enter"])
            }, null, 8, ["modelValue"]),
            S(De, {
              variant: "primary",
              onClick: x,
              loading: c.value
            }, {
              default: h(() => [...I[5] || (I[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          S(De, {
            variant: "secondary",
            size: "sm",
            onClick: I[1] || (I[1] = (M) => p.value = !0)
          }, {
            default: h(() => [
              $(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", tk, [
        c.value ? (n(), i("div", sk, " Searching HuggingFace... ")) : u.value ? (n(), i("div", ok, [
          t("p", null, f(u.value), 1),
          C.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: I[2] || (I[2] = (M) => p.value = !0)
          }, {
            default: h(() => [...I[6] || (I[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", nk, [
          (n(!0), i(B, null, we(r.value, (M) => (n(), i("div", {
            key: M.repo_id,
            class: "repo-card",
            onClick: (se) => P(M.repo_id)
          }, [
            t("div", lk, [
              t("span", ik, f(M.repo_id), 1),
              t("div", rk, [
                t("span", ck, [
                  I[7] || (I[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(b(M.downloads)), 1)
                ]),
                t("span", uk, [
                  I[8] || (I[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(b(M.likes)), 1)
                ])
              ])
            ]),
            M.description ? (n(), i("p", dk, f(M.description), 1)) : y("", !0),
            M.tags.length > 0 ? (n(), i("div", fk, [
              (n(!0), i(B, null, we(M.tags.slice(0, 5), (se) => (n(), i("span", {
                key: se,
                class: "tag"
              }, f(se), 1))), 128))
            ])) : y("", !0)
          ], 8, ak))), 128))
        ])) : d.value ? (n(), i("div", mk, " No repositories found ")) : (n(), i("div", vk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), R(A_, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": w.value,
        onBack: T,
        onQueue: I[3] || (I[3] = (M) => O.$emit("queue", M))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (n(), R(J_, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: I[4] || (I[4] = (M) => p.value = !1),
        onSaved: D,
        onCleared: N
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), gk = /* @__PURE__ */ ke(pk, [["__scopeId", "data-v-e13209bf"]]), hk = { class: "civitai-tab" }, yk = /* @__PURE__ */ _e({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", hk, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), wk = /* @__PURE__ */ ke(yk, [["__scopeId", "data-v-44948051"]]), _k = { class: "direct-url-tab" }, kk = { class: "input-group" }, bk = { class: "input-group" }, $k = {
  key: 0,
  class: "error"
}, Ck = { class: "actions" }, xk = /* @__PURE__ */ _e({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = k(""), r = L(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = L(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), a.value = "", l.value = "";
    };
    return (d, m) => (n(), i("div", _k, [
      t("div", kk, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        S(Rt, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", bk, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(Rt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", $k, f(r.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Ck, [
        S(De, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: h(() => [...m[4] || (m[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Sk = /* @__PURE__ */ ke(xk, [["__scopeId", "data-v-01def7aa"]]), Ik = { class: "download-modal" }, Ek = { class: "tab-bar" }, Tk = ["onClick"], Rk = { class: "tab-content" }, Pk = /* @__PURE__ */ _e({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Po(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("huggingface");
    function c(m) {
      a(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function u(m) {
      a(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (m, v) => e.show ? (n(), R(vt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", Ik, [
          t("div", Ek, [
            (n(), i(B, null, we(l, (g) => t("button", {
              key: g.id,
              class: Ee(["tab-btn", { active: r.value === g.id }]),
              onClick: (w) => r.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, Tk)), 64))
          ]),
          t("div", Rk, [
            r.value === "huggingface" ? (n(), R(gk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), R(wk, { key: 1 })) : r.value === "direct" ? (n(), R(Sk, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: d
        }, {
          default: h(() => [...v[0] || (v[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), zr = /* @__PURE__ */ ke(Pk, [["__scopeId", "data-v-90a9f401"]]), Mk = /* @__PURE__ */ _e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ot(), r = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(!1);
    function _() {
      g.value = !1, o("navigate", "model-index");
    }
    const C = L(
      () => r.value.reduce((I, M) => I + (M.size || 0), 0)
    ), b = L(() => {
      if (!v.value.trim()) return r.value;
      const I = v.value.toLowerCase();
      return r.value.filter((M) => M.filename.toLowerCase().includes(I));
    }), x = L(() => {
      if (!v.value.trim()) return c.value;
      const I = v.value.toLowerCase();
      return c.value.filter((M) => M.filename.toLowerCase().includes(I));
    }), P = L(() => {
      const I = {};
      for (const se of b.value) {
        const Y = se.type || "other";
        I[Y] || (I[Y] = []), I[Y].push(se);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(I).sort(([se], [Y]) => {
        const F = M.indexOf(se), z = M.indexOf(Y);
        return F >= 0 && z >= 0 ? F - z : F >= 0 ? -1 : z >= 0 ? 1 : se.localeCompare(Y);
      }).map(([se, Y]) => ({ type: se, models: Y }));
    });
    function T(I) {
      if (!I) return "Unknown";
      const M = I / (1024 * 1024);
      return M >= 1024 ? `${(M / 1024).toFixed(1)} GB` : `${M.toFixed(0)} MB`;
    }
    function E(I) {
      w.value = I.hash || I.filename;
    }
    function D(I) {
      o("navigate", "model-index");
    }
    function N(I) {
      alert(`Download functionality not yet implemented for ${I}`);
    }
    async function O() {
      d.value = !0, m.value = null;
      try {
        const I = await a();
        r.value = I, c.value = [];
        const M = await l();
        u.value = M.environment || "production";
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return et(O), (I, M) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[1] || (M[1] = (se) => g.value = !0)
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (se) => p.value = !0)
              }, {
                default: h(() => [...M[6] || (M[6] = [
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
          S(Mo, {
            modelValue: v.value,
            "onUpdate:modelValue": M[2] || (M[2] = (se) => v.value = se),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), R(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (n(), R(Ms, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            r.value.length ? (n(), R(pn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(r.value.length) + " models • " + f(T(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(B, null, we(P.value, (se) => (n(), R(dt, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(se.models, (Y) => (n(), R(Et, {
                  key: Y.hash || Y.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...M[7] || (M[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(Y.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(T(Y.size)), 1)
                  ]),
                  details: h(() => [
                    S(mt, {
                      label: "Used by:",
                      value: (Y.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(mt, {
                      label: "Path:",
                      value: Y.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => E(Y)
                    }, {
                      default: h(() => [...M[8] || (M[8] = [
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
            x.value.length ? (n(), R(dt, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(x.value, (se) => (n(), R(Et, {
                  key: se.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...M[9] || (M[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(se.filename), 1)
                  ]),
                  subtitle: h(() => [...M[10] || (M[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var Y;
                    return [
                      S(mt, {
                        label: "Required by:",
                        value: ((Y = se.workflow_names) == null ? void 0 : Y.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    S(he, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => N(se.filename)
                    }, {
                      default: h(() => [...M[11] || (M[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(he, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => D(se.filename)
                    }, {
                      default: h(() => [...M[12] || (M[12] = [
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
            !b.value.length && !x.value.length ? (n(), R(is, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(rs, {
        show: g.value,
        title: "About Environment Models",
        onClose: M[3] || (M[3] = (se) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            M[13] || (M[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            M[14] || (M[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          S(he, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...M[15] || (M[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(fl, {
        key: 0,
        identifier: w.value,
        onClose: M[4] || (M[4] = (se) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      S(zr, {
        show: p.value,
        onClose: M[5] || (M[5] = (se) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Dk = /* @__PURE__ */ ke(Mk, [["__scopeId", "data-v-af3ca736"]]), Lk = {
  key: 0,
  class: "indexing-progress"
}, Nk = { class: "progress-info" }, Uk = { class: "progress-label" }, Ak = { class: "progress-count" }, Ok = { class: "progress-bar" }, zk = { class: "modal-content" }, Fk = { class: "modal-header" }, Vk = { class: "modal-body" }, Bk = { class: "input-group" }, Wk = { class: "current-path" }, Gk = { class: "input-group" }, jk = { class: "modal-footer" }, Hk = /* @__PURE__ */ _e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ot(), c = s, u = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), C = k(null), b = k(""), x = k(!1), P = k(!1), T = k(null), E = L(
      () => u.value.reduce((z, Z) => z + (Z.size || 0), 0)
    ), D = L(() => {
      if (!g.value.trim()) return u.value;
      const z = g.value.toLowerCase();
      return u.value.filter((Z) => {
        const q = Z, A = Z.sha256 || q.sha256_hash || "";
        return Z.filename.toLowerCase().includes(z) || A.toLowerCase().includes(z);
      });
    }), N = L(() => {
      const z = {};
      for (const q of D.value) {
        const A = q.type || "other";
        z[A] || (z[A] = []), z[A].push(q);
      }
      const Z = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([q], [A]) => {
        const ee = Z.indexOf(q), W = Z.indexOf(A);
        return ee >= 0 && W >= 0 ? ee - W : ee >= 0 ? -1 : W >= 0 ? 1 : q.localeCompare(A);
      }).map(([q, A]) => ({ type: q, models: A }));
    });
    function O(z) {
      if (!z) return "Unknown";
      const Z = 1024 * 1024 * 1024, q = 1024 * 1024;
      return z >= Z ? `${(z / Z).toFixed(1)} GB` : z >= q ? `${(z / q).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function I(z) {
      p.value = z.hash || z.filename;
    }
    async function M() {
      m.value = !0, v.value = null;
      try {
        const z = await a();
        await Y(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function se() {
      if (b.value.trim()) {
        x.value = !0, v.value = null;
        try {
          const z = await r(b.value.trim());
          C.value = z.path, _.value = !1, b.value = "", await Y(), console.log(`Directory changed: ${z.models_indexed} models indexed`), c("refresh");
        } catch (z) {
          v.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function Y() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function F() {
      try {
        const z = await l();
        C.value = z.path;
      } catch {
      }
    }
    return et(() => {
      Y(), F();
    }), (z, Z) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: Z[2] || (Z[2] = (q) => w.value = !0)
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: M
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: Z[0] || (Z[0] = (q) => _.value = !0)
              }, {
                default: h(() => [...Z[11] || (Z[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: Z[1] || (Z[1] = (q) => P.value = !0)
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
          T.value ? (n(), i("div", Lk, [
            t("div", Nk, [
              t("span", Uk, f(T.value.message), 1),
              t("span", Ak, f(T.value.current) + "/" + f(T.value.total), 1)
            ]),
            t("div", Ok, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          S(Mo, {
            modelValue: g.value,
            "onUpdate:modelValue": Z[3] || (Z[3] = (q) => g.value = q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || T.value ? (n(), R(Ps, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), R(Ms, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            u.value.length ? (n(), R(pn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(O(E.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(B, null, we(N.value, (q) => (n(), R(dt, {
              key: q.type,
              title: q.type.toUpperCase(),
              count: q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(q.models, (A) => (n(), R(Et, {
                  key: A.sha256 || A.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...Z[13] || (Z[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(A.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(O(A.size)), 1)
                  ]),
                  details: h(() => [
                    S(mt, {
                      label: "Hash:",
                      value: A.hash ? A.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => I(A)
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
            D.value.length ? y("", !0) : (n(), R(is, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S(rs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: Z[4] || (Z[4] = (q) => w.value = !1)
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
      p.value ? (n(), R(fl, {
        key: 0,
        identifier: p.value,
        onClose: Z[5] || (Z[5] = (q) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), R(bt, { to: "body" }, [
        _.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: Z[9] || (Z[9] = ft((q) => _.value = !1, ["self"]))
        }, [
          t("div", zk, [
            t("div", Fk, [
              Z[16] || (Z[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: Z[6] || (Z[6] = (q) => _.value = !1)
              }, "✕")
            ]),
            t("div", Vk, [
              t("div", Bk, [
                Z[17] || (Z[17] = t("label", null, "Current Directory", -1)),
                t("code", Wk, f(C.value || "Not set"), 1)
              ]),
              t("div", Gk, [
                Z[18] || (Z[18] = t("label", null, "New Directory Path", -1)),
                S(Rt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": Z[7] || (Z[7] = (q) => b.value = q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              Z[19] || (Z[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", jk, [
              S(De, {
                variant: "secondary",
                onClick: Z[8] || (Z[8] = (q) => _.value = !1)
              }, {
                default: h(() => [...Z[20] || (Z[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(De, {
                variant: "primary",
                disabled: !b.value.trim() || x.value,
                loading: x.value,
                onClick: se
              }, {
                default: h(() => [
                  $(f(x.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      S(zr, {
        show: P.value,
        onClose: Z[10] || (Z[10] = (q) => P.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Kk = /* @__PURE__ */ ke(Hk, [["__scopeId", "data-v-3705114c"]]), qk = { class: "node-details" }, Yk = { class: "status-row" }, Jk = {
  key: 0,
  class: "detail-row"
}, Qk = { class: "value" }, Xk = { class: "detail-row" }, Zk = { class: "value" }, eb = {
  key: 1,
  class: "detail-row"
}, tb = { class: "value mono" }, sb = {
  key: 2,
  class: "detail-row"
}, ob = ["href"], nb = {
  key: 3,
  class: "detail-row"
}, ab = { class: "value mono small" }, lb = { class: "detail-row" }, ib = {
  key: 0,
  class: "value"
}, rb = {
  key: 1,
  class: "workflow-list"
}, cb = /* @__PURE__ */ _e({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = L(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = L(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = L(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), R(vt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => a("close"))
    }, {
      body: h(() => [
        t("div", qk, [
          t("div", Yk, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ee(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", Jk, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Qk, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Xk, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Zk, f(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", eb, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", tb, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", sb, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(f(e.node.repository) + " ", 1),
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
            ], 8, ob)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", nb, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", ab, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", lb, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", ib, " Not used in any workflows ")) : (n(), i("div", rb, [
              (n(!0), i(B, null, we(e.node.used_in_workflows, (m) => (n(), i("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => a("close"))
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
}), ub = /* @__PURE__ */ ke(cb, [["__scopeId", "data-v-b342f626"]]), db = { class: "dialog-message" }, fb = {
  key: 0,
  class: "dialog-details"
}, mb = {
  key: 1,
  class: "dialog-warning"
}, vb = /* @__PURE__ */ _e({
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
    return (s, o) => (n(), R(vt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", db, f(e.message), 1),
        e.details && e.details.length ? (n(), i("div", fb, [
          (n(!0), i(B, null, we(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", mb, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), R(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        S(De, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: h(() => [
            $(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ml = /* @__PURE__ */ ke(vb, [["__scopeId", "data-v-3670b9f5"]]), pb = { class: "mismatch-warning" }, gb = { class: "version-mismatch" }, hb = { class: "version-actual" }, yb = { class: "version-expected" }, wb = { style: { color: "var(--cg-color-warning)" } }, _b = { key: 0 }, kb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, bb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, $b = /* @__PURE__ */ _e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u } = ot(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), C = L(() => {
      if (!g.value.trim()) return d.value.nodes;
      const q = g.value.toLowerCase();
      return d.value.nodes.filter(
        (A) => {
          var ee, W;
          return A.name.toLowerCase().includes(q) || ((ee = A.description) == null ? void 0 : ee.toLowerCase().includes(q)) || ((W = A.repository) == null ? void 0 : W.toLowerCase().includes(q));
        }
      );
    }), b = L(
      () => C.value.filter((q) => q.installed && q.tracked)
    ), x = L(
      () => C.value.filter((q) => !q.installed && q.tracked && !q.issue_type)
    ), P = L(
      () => C.value.filter((q) => q.installed && !q.tracked)
    ), T = L(
      () => C.value.filter((q) => q.issue_type === "version_gated" || q.issue_type === "uninstallable")
    );
    function E(q) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[q] || q;
    }
    const D = L(() => o.versionMismatches.length > 0);
    function N(q) {
      return !q.used_in_workflows || q.used_in_workflows.length === 0 ? "Not used in any workflows" : q.used_in_workflows.length === 1 ? q.used_in_workflows[0] : `${q.used_in_workflows.length} workflows`;
    }
    function O(q) {
      return q.issue_type === "version_gated" ? "Requires newer ComfyUI version" : q.issue_type === "uninstallable" ? "No installable package version" : "Blocked";
    }
    function I(q) {
      return q.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : q.issue_type === "uninstallable" ? "Select a different node package or update environment constraints." : "Manual intervention required.";
    }
    function M(q) {
      p.value = q;
    }
    function se() {
      a("open-node-manager");
    }
    function Y(q) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${q}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const A = await r(q);
            A.status === "success" ? (a("toast", `✓ Node "${q}" tracked as development`, "success"), await Z()) : a("toast", `Failed to track node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            a("toast", `Error tracking node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function F(q) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${q}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const A = await u(q);
            A.status === "success" ? (a("toast", `✓ Node "${q}" removed`, "success"), await Z()) : a("toast", `Failed to remove node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            a("toast", `Error removing node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function z(q) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${q}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const A = await c(q);
            A.status === "success" ? (a("toast", `✓ Node "${q}" installed`, "success"), await Z()) : a("toast", `Failed to install node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            a("toast", `Error installing node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function Z() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (q) {
        v.value = q instanceof Error ? q.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(Z), (q, A) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: A[0] || (A[0] = (ee) => w.value = !0)
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: se
              }, {
                default: h(() => [...A[7] || (A[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Mo, {
            modelValue: g.value,
            "onUpdate:modelValue": A[1] || (A[1] = (ee) => g.value = ee),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (n(), R(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (n(), R(Ms, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            d.value.total_count ? (n(), R(pn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (n(), i(B, { key: 0 }, [
                  $(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.blocked_count ? (n(), i(B, { key: 1 }, [
                  $(" • " + f(d.value.blocked_count) + " blocked", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (n(), i(B, { key: 2 }, [
                  $(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            D.value ? (n(), R(dt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", pb, [
                  A[8] || (A[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(B, null, we(e.versionMismatches, (ee) => (n(), R(Et, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: h(() => [...A[9] || (A[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", gb, [
                      t("span", hb, f(ee.actual), 1),
                      A[10] || (A[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", yb, f(ee.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "warning",
                      size: "sm",
                      onClick: A[2] || (A[2] = (W) => a("repair-environment"))
                    }, {
                      default: h(() => [...A[11] || (A[11] = [
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
            T.value.length ? (n(), R(dt, {
              key: 2,
              title: "BLOCKED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(T.value, (ee) => (n(), R(Et, {
                  key: `blocked-${ee.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...A[12] || (A[12] = [
                    $("⛔", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", wb, f(O(ee)), 1)
                  ]),
                  details: h(() => [
                    S(mt, {
                      label: "Guidance:",
                      value: ee.issue_guidance || I(ee)
                    }, null, 8, ["value"]),
                    S(mt, {
                      label: "Used by:",
                      value: N(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => M(ee)
                    }, {
                      default: h(() => [...A[13] || (A[13] = [
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
            P.value.length ? (n(), R(dt, {
              key: 3,
              title: "UNTRACKED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(P.value, (ee) => (n(), R(Et, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: h(() => [...A[14] || (A[14] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [...A[15] || (A[15] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    S(mt, {
                      label: "Used by:",
                      value: N(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => M(ee)
                    }, {
                      default: h(() => [...A[16] || (A[16] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(he, {
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => Y(ee.name)
                    }, {
                      default: h(() => [...A[17] || (A[17] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(he, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (W) => F(ee.name)
                    }, {
                      default: h(() => [...A[18] || (A[18] = [
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
            b.value.length ? (n(), R(dt, {
              key: 4,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(b.value, (ee) => (n(), R(Et, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(ee.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    ee.version ? (n(), i("span", _b, f(ee.source === "development" ? "" : "v") + f(ee.version), 1)) : (n(), i("span", kb, "version unknown")),
                    t("span", bb, " • " + f(E(ee.source)), 1)
                  ]),
                  details: h(() => [
                    S(mt, {
                      label: "Used by:",
                      value: N(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => M(ee)
                    }, {
                      default: h(() => [...A[19] || (A[19] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(he, {
                      variant: "secondary",
                      size: "xs",
                      onClick: se
                    }, {
                      default: h(() => [...A[20] || (A[20] = [
                        $(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            x.value.length ? (n(), R(dt, {
              key: 5,
              title: "MISSING",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(x.value, (ee) => (n(), R(Et, {
                  key: ee.name,
                  status: "missing"
                }, {
                  icon: h(() => [...A[21] || (A[21] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [...A[22] || (A[22] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    S(mt, {
                      label: "Required by:",
                      value: N(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(he, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => M(ee)
                    }, {
                      default: h(() => [...A[23] || (A[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(he, {
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => z(ee.name)
                    }, {
                      default: h(() => [...A[24] || (A[24] = [
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
            !b.value.length && !x.value.length && !T.value.length && !P.value.length ? (n(), R(is, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(rs, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: A[4] || (A[4] = (ee) => w.value = !1)
      }, {
        content: h(() => [...A[25] || (A[25] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            $(" Node types that cannot be resolved in the current environment"),
            t("br"),
            t("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          S(he, {
            variant: "primary",
            onClick: A[3] || (A[3] = (ee) => w.value = !1)
          }, {
            default: h(() => [...A[26] || (A[26] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), R(ub, {
        key: 0,
        node: p.value,
        onClose: A[5] || (A[5] = (ee) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (n(), R(ml, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: A[6] || (A[6] = (ee) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), Cb = /* @__PURE__ */ ke($b, [["__scopeId", "data-v-e0a41590"]]);
function Fr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const xb = { class: "remote-url-display" }, Sb = ["title"], Ib = ["title"], Eb = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Tb = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Rb = /* @__PURE__ */ _e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), a = L(() => {
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
    return (r, c) => (n(), i("div", xb, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(a.value), 9, Sb),
      t("button", {
        class: Ee(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", Tb, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", Eb, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Ib)
    ]));
  }
}), Pb = /* @__PURE__ */ ke(Rb, [["__scopeId", "data-v-7768a58d"]]), Mb = { class: "remote-title" }, Db = {
  key: 0,
  class: "default-badge"
}, Lb = {
  key: 1,
  class: "sync-badge"
}, Nb = {
  key: 0,
  class: "ahead"
}, Ub = {
  key: 1,
  class: "behind"
}, Ab = {
  key: 1,
  class: "synced"
}, Ob = ["href"], zb = {
  key: 1,
  class: "remote-url-text"
}, Fb = /* @__PURE__ */ _e({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = L(() => s.fetchingRemote === s.remote.name), a = L(() => s.remote.is_default), l = L(() => s.syncStatus && s.syncStatus.behind > 0), r = L(() => s.syncStatus && s.syncStatus.ahead > 0), c = L(() => s.remote.push_url !== s.remote.fetch_url), u = L(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = L(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (n(), R(Et, {
      status: a.value ? "synced" : void 0
    }, no({
      icon: h(() => [
        $(f(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", Mb, [
          t("span", null, f(e.remote.name), 1),
          a.value ? (n(), i("span", Db, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", Lb, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", Nb, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", Ub, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", Ab, "✓ synced"))
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
          onClick: v[0] || (v[0] = ft(() => {
          }, ["stop"]))
        }, f(d.value), 9, Ob)) : (n(), i("span", zb, f(d.value), 1))
      ]),
      actions: h(() => [
        S(he, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (g) => m.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        S(he, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (g) => m.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            $(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        S(he, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (g) => m.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        S(he, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), R(he, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (g) => m.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), R(mt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              S(Pb, {
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
}), Vb = /* @__PURE__ */ ke(Fb, [["__scopeId", "data-v-8310f3a8"]]), Bb = ["for"], Wb = {
  key: 0,
  class: "base-form-field-required"
}, Gb = { class: "base-form-field-input" }, jb = {
  key: 1,
  class: "base-form-field-error"
}, Hb = {
  key: 2,
  class: "base-form-field-hint"
}, Kb = /* @__PURE__ */ _e({
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
    const s = e, o = L(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Ee(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (n(), i("span", Wb, "*")) : y("", !0)
      ], 8, Bb)) : y("", !0),
      t("div", Gb, [
        Je(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", jb, f(e.error), 1)) : e.hint ? (n(), i("span", Hb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ca = /* @__PURE__ */ ke(Kb, [["__scopeId", "data-v-9a1cf296"]]), qb = { class: "remote-form" }, Yb = { class: "form-header" }, Jb = { class: "form-body" }, Qb = {
  key: 0,
  class: "form-error"
}, Xb = { class: "form-actions" }, Zb = /* @__PURE__ */ _e({
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
    pt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = L(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (m) {
          c.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (m, v) => (n(), i("div", qb, [
      t("div", Yb, [
        S(Vt, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Jb, [
        S(Ca, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            S(Rt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        S(Ca, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            S(Rt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(Ca, { label: "Push URL (optional)" }, {
          default: h(() => [
            S(Rt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", Qb, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Xb, [
        S(he, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            $(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        S(he, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (g) => m.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), e2 = /* @__PURE__ */ ke(Zb, [["__scopeId", "data-v-56021b18"]]), t2 = { class: "conflict-summary-box" }, s2 = { class: "summary-header" }, o2 = { class: "summary-text" }, n2 = { key: 0 }, a2 = {
  key: 1,
  class: "all-resolved"
}, l2 = { class: "summary-progress" }, i2 = { class: "progress-bar" }, r2 = { class: "progress-text" }, c2 = /* @__PURE__ */ _e({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = L(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", t2, [
      t("div", s2, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", o2, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", n2, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (n(), i("p", a2, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", l2, [
        t("div", i2, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", r2, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), u2 = /* @__PURE__ */ ke(c2, [["__scopeId", "data-v-4e9e6cc9"]]), d2 = { class: "modal-header" }, f2 = { class: "modal-title" }, m2 = { class: "modal-body" }, v2 = {
  key: 0,
  class: "error-box"
}, p2 = {
  key: 0,
  class: "error-hint"
}, g2 = {
  key: 1,
  class: "loading-state"
}, h2 = { class: "commit-summary" }, y2 = {
  key: 0,
  class: "commits-section"
}, w2 = { class: "commit-list" }, _2 = { class: "commit-hash" }, k2 = { class: "commit-message" }, b2 = { class: "commit-date" }, $2 = {
  key: 1,
  class: "changes-section"
}, C2 = {
  key: 0,
  class: "change-group",
  open: ""
}, x2 = { class: "change-count" }, S2 = { class: "change-list" }, I2 = {
  key: 0,
  class: "conflict-badge"
}, E2 = {
  key: 1,
  class: "change-group"
}, T2 = { class: "change-count" }, R2 = { class: "change-list" }, P2 = {
  key: 2,
  class: "change-group"
}, M2 = { class: "change-count" }, D2 = { class: "change-list" }, L2 = {
  key: 3,
  class: "strategy-section"
}, N2 = { class: "radio-group" }, U2 = { class: "radio-option" }, A2 = { class: "radio-option" }, O2 = { class: "radio-option" }, z2 = {
  key: 4,
  class: "up-to-date"
}, F2 = { class: "modal-actions" }, ii = "comfygit.pullModelStrategy", V2 = /* @__PURE__ */ _e({
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
    const o = e, a = s, l = k(localStorage.getItem(ii) || "skip");
    pt(l, (b) => {
      localStorage.setItem(ii, b);
    });
    const r = L(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = L(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = L(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = L(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = L(() => o.preview && Fr(o.preview) ? o.preview : null), v = L(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = L(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = L(
      () => v.value > 0 && g.value === v.value
    ), p = L(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _(b) {
      if (!m.value) return !1;
      const x = b.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((P) => P.name === x);
    }
    function C(b) {
      const x = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: b, resolutions: x });
    }
    return (b, x) => {
      var P, T;
      return n(), R(bt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (E) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = ft(() => {
            }, ["stop"]))
          }, [
            t("div", d2, [
              t("h3", f2, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (E) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", m2, [
              e.error ? (n(), i("div", v2, [
                x[13] || (x[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  x[12] || (x[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  r.value ? (n(), i("p", p2, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", g2, [...x[14] || (x[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (P = e.preview) != null && P.has_uncommitted_changes ? (n(), i(B, { key: 2 }, [
                x[15] || (x[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                x[16] || (x[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(B, { key: 3 }, [
                t("div", h2, [
                  x[17] || (x[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", y2, [
                  x[18] || (x[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", w2, [
                    (n(!0), i(B, null, we(e.preview.commits, (E) => (n(), i("div", {
                      key: E.hash,
                      class: "commit-item"
                    }, [
                      t("span", _2, f(E.short_hash || E.hash.slice(0, 7)), 1),
                      t("span", k2, f(E.message), 1),
                      t("span", b2, f(E.date_relative || E.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", $2, [
                  x[22] || (x[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", C2, [
                    t("summary", null, [
                      x[19] || (x[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", x2, f(c.value) + " changes", 1)
                    ]),
                    t("div", S2, [
                      (n(!0), i(B, null, we(e.preview.changes.workflows.added, (E) => (n(), i("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128)),
                      (n(!0), i(B, null, we(e.preview.changes.workflows.modified, (E) => (n(), i("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(E) + " ", 1),
                        _(E) ? (n(), i("span", I2, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(B, null, we(e.preview.changes.workflows.deleted, (E) => (n(), i("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", E2, [
                    t("summary", null, [
                      x[20] || (x[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", T2, f(u.value) + " to install", 1)
                    ]),
                    t("div", R2, [
                      (n(!0), i(B, null, we(e.preview.changes.nodes.to_install, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", P2, [
                    t("summary", null, [
                      x[21] || (x[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", M2, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", D2, [
                      (n(!0), i(B, null, we(e.preview.changes.models.referenced, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item"
                      }, f(E), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (n(), R(u2, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", L2, [
                  x[27] || (x[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", N2, [
                    t("label", U2, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [ss, l.value]
                      ]),
                      x[23] || (x[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", A2, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [ss, l.value]
                      ]),
                      x[24] || (x[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", O2, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [ss, l.value]
                      ]),
                      x[25] || (x[25] = t("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", z2, [
                  x[29] || (x[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", F2, [
              S(he, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (E) => b.$emit("close"))
              }, {
                default: h(() => [...x[30] || (x[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(B, { key: 0 }, [
                S(he, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (E) => C(!1))
                }, {
                  default: h(() => [...x[31] || (x[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(he, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (E) => C(!0))
                }, {
                  default: h(() => [...x[32] || (x[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), R(he, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: x[7] || (x[7] = (E) => C(!0))
              }, {
                default: h(() => [...x[33] || (x[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(B, { key: 2 }, [
                m.value && !w.value ? (n(), R(he, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (E) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), R(he, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: x[9] || (x[9] = (E) => C(!1))
                }, {
                  default: h(() => [...x[34] || (x[34] = [
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
}), B2 = /* @__PURE__ */ ke(V2, [["__scopeId", "data-v-1d633bba"]]), W2 = { class: "modal-header" }, G2 = { class: "modal-title" }, j2 = { class: "modal-body" }, H2 = {
  key: 0,
  class: "loading-state"
}, K2 = {
  key: 1,
  class: "warning-box"
}, q2 = {
  key: 0,
  class: "commits-section"
}, Y2 = { class: "commit-list" }, J2 = { class: "commit-hash" }, Q2 = { class: "commit-message" }, X2 = { class: "commit-date" }, Z2 = { class: "force-option" }, e$ = { class: "checkbox-option" }, t$ = { class: "commit-summary" }, s$ = { key: 0 }, o$ = { key: 1 }, n$ = {
  key: 0,
  class: "info-box"
}, a$ = {
  key: 1,
  class: "commits-section"
}, l$ = { class: "commit-list" }, i$ = { class: "commit-hash" }, r$ = { class: "commit-message" }, c$ = { class: "commit-date" }, u$ = {
  key: 2,
  class: "up-to-date"
}, d$ = { class: "modal-actions" }, f$ = /* @__PURE__ */ _e({
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
    const o = s, a = k(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, c) => {
      var u, d, m;
      return n(), R(bt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = ft(() => {
            }, ["stop"]))
          }, [
            t("div", W2, [
              t("h3", G2, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", j2, [
              e.loading ? (n(), i("div", H2, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", K2, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (n(), i(B, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", q2, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Y2, [
                    (n(!0), i(B, null, we(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", J2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Q2, f(v.message), 1),
                      t("span", X2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Z2, [
                  t("label", e$, [
                    Xe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => a.value = v)
                    }, null, 512), [
                      [cn, a.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(B, { key: 3 }, [
                t("div", t$, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", s$, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", o$, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", n$, [...c[15] || (c[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", a$, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", l$, [
                    (n(!0), i(B, null, we(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", i$, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", r$, f(v.message), 1),
                      t("span", c$, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", u$, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", d$, [
              S(he, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => r.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (n(), i(B, { key: 0 }, [
                S(he, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(he, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: h(() => [...c[20] || (c[20] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), R(he, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: h(() => [...c[21] || (c[21] = [
                  $(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), m$ = /* @__PURE__ */ ke(f$, [["__scopeId", "data-v-3c2e35ab"]]), v$ = { class: "resolution-choice-group" }, p$ = ["disabled"], g$ = ["disabled"], h$ = /* @__PURE__ */ _e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", v$, [
      t("button", {
        class: Ee(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, p$),
      t("button", {
        class: Ee(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, g$)
    ]));
  }
}), y$ = /* @__PURE__ */ ke(h$, [["__scopeId", "data-v-985715ed"]]), w$ = { class: "conflict-header" }, _$ = { class: "conflict-info" }, k$ = { class: "workflow-name" }, b$ = { class: "conflict-description" }, $$ = {
  key: 0,
  class: "resolved-badge"
}, C$ = { class: "resolved-text" }, x$ = { class: "conflict-hashes" }, S$ = { class: "hash-item" }, I$ = { class: "hash-item" }, E$ = { class: "conflict-actions" }, T$ = /* @__PURE__ */ _e({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(o.resolution);
    pt(() => o.resolution, (d) => {
      l.value = d;
    }), pt(l, (d) => {
      d && a("resolve", d);
    });
    const r = L(() => l.value !== null), c = L(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = L(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, m) => {
      var v, g;
      return n(), i("div", {
        class: Ee(["conflict-item", { resolved: r.value }])
      }, [
        t("div", w$, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", _$, [
            t("code", k$, f(e.conflict.name) + ".json", 1),
            t("div", b$, f(c.value), 1)
          ]),
          r.value ? (n(), i("div", $$, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", C$, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", x$, [
          t("span", S$, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", I$, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", E$, [
          S(y$, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), R$ = /* @__PURE__ */ ke(T$, [["__scopeId", "data-v-506d3bbf"]]), P$ = { class: "resolution-content" }, M$ = {
  key: 0,
  class: "error-box"
}, D$ = { class: "resolution-header" }, L$ = { class: "header-stats" }, N$ = { class: "stat" }, U$ = { class: "stat-value" }, A$ = { class: "stat resolved" }, O$ = { class: "stat-value" }, z$ = {
  key: 0,
  class: "stat pending"
}, F$ = { class: "stat-value" }, V$ = { class: "conflicts-list" }, B$ = {
  key: 1,
  class: "all-resolved-message"
}, W$ = /* @__PURE__ */ _e({
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
    const o = e, a = s, l = L(() => o.resolutions.size), r = L(() => o.workflowConflicts.length - l.value), c = L(() => l.value === o.workflowConflicts.length), u = L(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const p = o.resolutions.get(w);
      return (p == null ? void 0 : p.resolution) ?? null;
    }
    function m(w, p) {
      a("resolve", w, p);
    }
    function v() {
      a("close");
    }
    function g() {
      a("apply");
    }
    return (w, p) => (n(), R(vt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", P$, [
          e.error ? (n(), i("div", M$, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", D$, [
            t("div", L$, [
              t("div", N$, [
                t("span", U$, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", A$, [
                t("span", O$, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", z$, [
                t("span", F$, f(r.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", V$, [
            (n(!0), i(B, null, we(e.workflowConflicts, (_) => (n(), R(R$, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", B$, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        S(De, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: h(() => [
            $(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), G$ = /* @__PURE__ */ ke(W$, [["__scopeId", "data-v-c58d150d"]]), j$ = { class: "node-conflict-item" }, H$ = { class: "node-header" }, K$ = { class: "node-name" }, q$ = { class: "node-id" }, Y$ = { class: "version-comparison" }, J$ = { class: "version yours" }, Q$ = { class: "version theirs" }, X$ = { class: "chosen-version" }, Z$ = { class: "chosen" }, eC = { class: "chosen-reason" }, tC = { class: "affected-workflows" }, sC = { class: "wf-source" }, oC = { class: "wf-version" }, nC = /* @__PURE__ */ _e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", j$, [
      t("div", H$, [
        t("code", K$, f(e.conflict.node_name), 1),
        t("span", q$, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", Y$, [
        t("div", J$, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", Q$, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", X$, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", Z$, f(e.conflict.chosen_version), 1),
        t("span", eC, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", tC, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(B, null, we(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, f(a.name), 1),
            t("span", sC, "(" + f(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", oC, "needs v" + f(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), aC = /* @__PURE__ */ ke(nC, [["__scopeId", "data-v-8b626725"]]), lC = { class: "validation-content" }, iC = {
  key: 0,
  class: "compatible-message"
}, rC = { class: "conflicts-list" }, cC = {
  key: 2,
  class: "warnings-section"
}, uC = /* @__PURE__ */ _e({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = L(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), R(vt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        t("div", lC, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", iC, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(B, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", rC, [
              (n(!0), i(B, null, we(e.validation.node_conflicts, (u) => (n(), R(aC, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", cC, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(B, null, we(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(De, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(De, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            $(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), dC = /* @__PURE__ */ ke(uC, [["__scopeId", "data-v-fefd26ed"]]), fC = { key: 0 }, mC = /* @__PURE__ */ _e({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = ot(), _ = k([]), C = k(null), b = k({}), x = k(!1), P = k(null), T = k(""), E = k(!1), D = k(null), N = k(!1), O = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = L(() => {
      if (!T.value.trim()) return _.value;
      const xe = T.value.toLowerCase();
      return _.value.filter(
        (Me) => Me.name.toLowerCase().includes(xe) || Me.fetch_url.toLowerCase().includes(xe) || Me.push_url.toLowerCase().includes(xe)
      );
    });
    async function se() {
      x.value = !0, P.value = null;
      try {
        const xe = await a();
        _.value = xe.remotes, C.value = xe.current_branch_tracking || null, await Promise.all(
          xe.remotes.map(async (Me) => {
            const Re = await d(Me.name);
            Re && (b.value[Me.name] = Re);
          })
        );
      } catch (xe) {
        P.value = xe instanceof Error ? xe.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function Y() {
      O.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, N.value = !0;
    }
    function F(xe) {
      const Me = _.value.find((Re) => Re.name === xe);
      Me && (O.value = "edit", I.value = {
        name: Me.name,
        fetchUrl: Me.fetch_url,
        pushUrl: Me.push_url
      }, N.value = !0);
    }
    async function z(xe) {
      try {
        O.value === "add" ? await l(xe.name, xe.fetchUrl) : await c(xe.name, xe.fetchUrl, xe.pushUrl || void 0), N.value = !1, await se();
      } catch (Me) {
        P.value = Me instanceof Error ? Me.message : "Operation failed";
      }
    }
    function Z() {
      N.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function q(xe) {
      D.value = xe;
      try {
        await u(xe);
        const Me = await d(xe);
        Me && (b.value[xe] = Me), o("toast", `✓ Fetched from ${xe}`, "success");
      } catch (Me) {
        o("toast", Me instanceof Error ? Me.message : "Fetch failed", "error");
      } finally {
        D.value = null;
      }
    }
    async function A(xe) {
      if (confirm(`Remove remote "${xe}"?`))
        try {
          await r(xe), await se();
        } catch (Me) {
          P.value = Me instanceof Error ? Me.message : "Failed to remove remote";
        }
    }
    function ee() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const W = k("idle"), ce = L(() => W.value === "pull_preview"), de = L(
      () => W.value === "resolving" || W.value === "validating"
    ), Ne = L(
      () => W.value === "validation_review" || W.value === "executing"
    ), Fe = k(!1), pe = k(null), me = k(!1), oe = k(null), te = k(!1), ue = k(null), ge = k(null), Te = k(/* @__PURE__ */ new Map()), Le = k(null), We = k(null), U = L(() => ue.value && Fr(ue.value) ? ue.value : null);
    async function j(xe) {
      oe.value = xe, W.value = "pull_preview", te.value = !0, ue.value = null, ge.value = null;
      try {
        ue.value = await m(xe);
      } catch (Me) {
        ge.value = Me instanceof Error ? Me.message : "Failed to load pull preview";
      } finally {
        te.value = !1;
      }
    }
    function le() {
      W.value = "idle", ue.value = null, ge.value = null, oe.value = null;
    }
    async function H(xe) {
      if (!oe.value) return;
      W.value = "executing", ge.value = null;
      const Me = oe.value;
      try {
        const Re = await v(Me, xe);
        if (Re.rolled_back) {
          ge.value = `Pull failed and was rolled back: ${Re.error || "Unknown error"}`, W.value = "pull_preview";
          return;
        }
        Pe(), W.value = "idle", o("toast", `✓ Pulled from ${Me}`, "success"), await se();
      } catch (Re) {
        ge.value = Re instanceof Error ? Re.message : "Pull failed", W.value = "pull_preview";
      }
    }
    function G() {
      U.value && (W.value = "resolving", We.value = null);
    }
    function Q(xe, Me) {
      Te.value.set(xe, { name: xe, resolution: Me });
    }
    function ve() {
      W.value = "pull_preview";
    }
    async function ie() {
      W.value = "validating", We.value = null;
      try {
        const xe = Array.from(Te.value.values());
        Le.value = await p(oe.value, xe), W.value = "validation_review";
      } catch (xe) {
        We.value = xe instanceof Error ? xe.message : "Validation failed", W.value = "resolving";
      }
    }
    async function be() {
      W.value = "executing";
      const xe = oe.value;
      try {
        const Me = Array.from(Te.value.values()), Re = await v(xe, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Me
        });
        if (Re.rolled_back) {
          ge.value = `Pull failed and was rolled back: ${Re.error || "Unknown error"}`, W.value = "pull_preview";
          return;
        }
        Pe(), W.value = "idle", o("toast", `✓ Pulled from ${xe}`, "success"), await se();
      } catch (Me) {
        ge.value = Me instanceof Error ? Me.message : "Pull failed", W.value = "validation_review";
      }
    }
    function ae() {
      W.value = "resolving";
    }
    function Ue() {
      Pe(), W.value = "idle";
    }
    function Pe() {
      Te.value.clear(), Le.value = null, We.value = null, ge.value = null, ue.value = null, oe.value = null;
    }
    async function fe(xe) {
      oe.value = xe, Fe.value = !0, te.value = !0, pe.value = null;
      try {
        pe.value = await g(xe);
      } catch (Me) {
        P.value = Me instanceof Error ? Me.message : "Failed to load push preview";
      } finally {
        te.value = !1;
      }
    }
    function V() {
      Fe.value = !1, pe.value = null, oe.value = null;
    }
    async function Ae(xe) {
      if (!oe.value) return;
      me.value = !0;
      const Me = oe.value;
      try {
        await w(Me, xe), V(), o("toast", `✓ Pushed to ${Me}`, "success"), await se();
      } catch (Re) {
        o("toast", Re instanceof Error ? Re.message : "Push failed", "error");
      } finally {
        me.value = !1;
      }
    }
    function Se() {
      const xe = oe.value;
      V(), xe && j(xe);
    }
    return et(se), (xe, Me) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Me[0] || (Me[0] = (Re) => E.value = !0)
          }, {
            actions: h(() => [
              N.value ? y("", !0) : (n(), R(he, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Y
              }, {
                default: h(() => [...Me[3] || (Me[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          N.value ? y("", !0) : (n(), R(Mo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Me[1] || (Me[1] = (Re) => T.value = Re),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          x.value ? (n(), R(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : P.value ? (n(), R(Ms, {
            key: 1,
            message: P.value,
            retry: !0,
            onRetry: se
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            N.value ? (n(), R(e2, {
              key: 0,
              mode: O.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: z,
              onCancel: Z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !N.value ? (n(), R(pn, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (n(), i("span", fC, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            M.value.length && !N.value ? (n(), R(dt, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(M.value, (Re) => (n(), R(Vb, {
                  key: Re.name,
                  remote: Re,
                  "sync-status": b.value[Re.name],
                  "fetching-remote": D.value,
                  onFetch: q,
                  onEdit: F,
                  onRemove: A,
                  onPull: j,
                  onPush: fe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !M.value.length && !N.value ? (n(), R(is, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                S(he, {
                  variant: "primary",
                  onClick: Y
                }, {
                  default: h(() => [...Me[4] || (Me[4] = [
                    $(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(rs, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Me[2] || (Me[2] = (Re) => E.value = !1)
      }, {
        content: h(() => [...Me[5] || (Me[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          S(he, {
            variant: "link",
            onClick: ee
          }, {
            default: h(() => [...Me[6] || (Me[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(B2, {
        show: ce.value,
        "remote-name": oe.value || "",
        preview: ue.value,
        loading: te.value,
        pulling: W.value === "executing",
        error: ge.value,
        "conflict-resolutions": Te.value,
        onClose: le,
        onPull: H,
        onOpenConflictResolution: G
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(m$, {
        show: Fe.value,
        "remote-name": oe.value || "",
        preview: pe.value,
        loading: te.value,
        pushing: me.value,
        onClose: V,
        onPush: Ae,
        onPullFirst: Se
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      de.value && U.value ? (n(), R(G$, {
        key: 0,
        "workflow-conflicts": U.value.workflow_conflicts,
        resolutions: Te.value,
        "operation-type": "pull",
        validating: W.value === "validating",
        error: We.value,
        onClose: ve,
        onResolve: Q,
        onApply: ie
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ne.value && Le.value ? (n(), R(dC, {
        key: 1,
        validation: Le.value,
        "operation-type": "pull",
        executing: W.value === "executing",
        onProceed: be,
        onGoBack: ae,
        onCancel: Ue
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), vC = /* @__PURE__ */ ke(mC, [["__scopeId", "data-v-9ae3b76d"]]), pC = { class: "setting-info" }, gC = { class: "setting-label" }, hC = {
  key: 0,
  class: "required-marker"
}, yC = {
  key: 0,
  class: "setting-description"
}, wC = { class: "setting-control" }, _C = /* @__PURE__ */ _e({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ee(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", pC, [
        t("div", gC, [
          $(f(e.label) + " ", 1),
          e.required ? (n(), i("span", hC, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", yC, f(e.description), 1)) : y("", !0)
      ]),
      t("div", wC, [
        Je(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Ao = /* @__PURE__ */ ke(_C, [["__scopeId", "data-v-cb5d236c"]]), kC = { class: "toggle" }, bC = ["checked", "disabled"], $C = /* @__PURE__ */ _e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", kC, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, bC),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ri = /* @__PURE__ */ ke($C, [["__scopeId", "data-v-71c0f550"]]), CC = { class: "workspace-settings-content" }, xC = { class: "settings-section" }, SC = { class: "path-setting" }, IC = { class: "path-value" }, EC = { class: "path-setting" }, TC = { class: "path-value" }, RC = { class: "settings-section" }, PC = { class: "settings-section" }, MC = { class: "settings-section" }, DC = /* @__PURE__ */ _e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = ot(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(""), C = k(!1), b = k(!1), x = k(!1), P = k(!0);
    function T(Y) {
      return Y.join(" ");
    }
    function E(Y) {
      return Y.trim() ? Y.trim().split(/\s+/) : [];
    }
    const D = L(() => {
      if (!g.value) return !1;
      const Y = C.value, F = b.value, z = _.value !== T(g.value.comfyui_extra_args || []);
      return Y || F || z;
    });
    async function N() {
      u.value = !0, d.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", _.value = T(v.value.comfyui_extra_args || []), C.value = !1, b.value = !1;
        const Y = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        x.value = Y !== "false", P.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (Y) {
        d.value = Y instanceof Error ? Y.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function O() {
      var Y;
      m.value = null;
      try {
        const F = {};
        C.value && (F.civitai_api_key = w.value || null), b.value && (F.huggingface_token = p.value || null), _.value !== T(((Y = g.value) == null ? void 0 : Y.comfyui_extra_args) || []) && (F.comfyui_extra_args = E(_.value)), await c(F, a.workspacePath || void 0), await N(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (F) {
        const z = F instanceof Error ? F.message : "Failed to save settings";
        m.value = { type: "error", message: z }, l("error", z);
      }
    }
    function I() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = g.value.huggingface_token || "", _.value = T(g.value.comfyui_extra_args || []), C.value = !1, b.value = !1, m.value = null);
    }
    function M(Y) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Y)), console.log("[ComfyGit] Auto-refresh setting saved:", Y);
    }
    function se(Y) {
      Y ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Y ? "enabled" : "disabled");
    }
    return s({
      saveSettings: O,
      resetSettings: I,
      hasChanges: D,
      loadSettings: N
    }), et(N), (Y, F) => (n(), i("div", CC, [
      u.value ? (n(), R(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (n(), R(Ms, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: N
      }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
        S(dt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var z, Z;
            return [
              t("div", xC, [
                t("div", SC, [
                  F[7] || (F[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  F[8] || (F[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", IC, f(((z = v.value) == null ? void 0 : z.workspace_path) || "Loading..."), 1)
                ]),
                t("div", EC, [
                  F[9] || (F[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  F[10] || (F[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", TC, f(((Z = v.value) == null ? void 0 : Z.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(dt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", RC, [
              S(Ao, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  S(Qo, {
                    modelValue: w.value,
                    "onUpdate:modelValue": F[0] || (F[0] = (z) => w.value = z),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: F[1] || (F[1] = (z) => C.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Ao, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  S(Qo, {
                    modelValue: p.value,
                    "onUpdate:modelValue": F[2] || (F[2] = (z) => p.value = z),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: F[3] || (F[3] = (z) => b.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        S(dt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", PC, [
              S(Ao, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  S(Qo, {
                    modelValue: _.value,
                    "onUpdate:modelValue": F[4] || (F[4] = (z) => _.value = z),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              F[11] || (F[11] = t("div", { class: "setting-hint" }, [
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
        S(dt, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", MC, [
              S(Ao, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  S(ri, {
                    modelValue: x.value,
                    "onUpdate:modelValue": [
                      F[5] || (F[5] = (z) => x.value = z),
                      M
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Ao, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  S(ri, {
                    modelValue: P.value,
                    "onUpdate:modelValue": [
                      F[6] || (F[6] = (z) => P.value = z),
                      se
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (n(), R(pn, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: Gt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Vr = /* @__PURE__ */ ke(DC, [["__scopeId", "data-v-9c5b427b"]]), LC = /* @__PURE__ */ _e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), R(Nt, null, {
      header: h(() => [
        S(Ut, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              S(he, {
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
              (c = s.value) != null && c.hasChanges ? (n(), R(he, {
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
        S(Vr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), NC = { class: "base-tabs" }, UC = ["disabled", "onClick"], AC = {
  key: 0,
  class: "base-tabs__badge"
}, OC = /* @__PURE__ */ _e({
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
    return (r, c) => (n(), i("div", NC, [
      (n(!0), i(B, null, we(e.tabs, (u) => (n(), i("button", {
        key: u.id,
        class: Ee([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        $(f(u.label) + " ", 1),
        u.badge ? (n(), i("span", AC, f(u.badge), 1)) : y("", !0)
      ], 10, UC))), 128))
    ]));
  }
}), Br = /* @__PURE__ */ ke(OC, [["__scopeId", "data-v-ad5e6cad"]]), zC = { class: "log-viewer-wrapper" }, FC = ["disabled", "title"], VC = /* @__PURE__ */ _e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), a = k("idle"), l = L(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function r() {
      var v;
      await yt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    et(r), pt(() => s.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const m = l.value.map((v) => v.text).join(`
`);
      try {
        await navigator.clipboard.writeText(m), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function u(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function d(m) {
      m.stopPropagation();
    }
    return (m, v) => (n(), i("div", zC, [
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
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, FC),
        (n(!0), i(B, null, we(l.value, (g, w) => (n(), i("div", {
          key: w,
          class: Ee(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Wr = /* @__PURE__ */ ke(VC, [["__scopeId", "data-v-c0cc6d21"]]), BC = /* @__PURE__ */ _e({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ot(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = L(() => c.value === "workspace" ? g.value : w.value);
    async function C() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await a(void 0, 500);
      } catch (P) {
        m.value = P instanceof Error ? P.message : `Failed to load ${c.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function b() {
      try {
        const [P, T] = await Promise.all([
          o(),
          l()
        ]);
        P.exists && (g.value = P.path), T.exists && (w.value = T.path);
      } catch {
      }
    }
    async function x() {
      if (_.value) {
        p.value = !0;
        try {
          await r(_.value);
        } catch (P) {
          console.error("Failed to open log file:", P);
        } finally {
          p.value = !1;
        }
      }
    }
    return pt(c, () => {
      C();
    }), et(() => {
      C(), b();
    }), (P, T) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              S(he, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(he, {
                variant: "secondary",
                size: "sm",
                onClick: C,
                disabled: d.value
              }, {
                default: h(() => [
                  $(f(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Br, {
            modelValue: c.value,
            "onUpdate:modelValue": T[1] || (T[1] = (E) => c.value = E),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), R(Ps, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (n(), R(Ms, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            u.value.length === 0 ? (n(), R(is, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), R(Wr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      S(rs, {
        show: v.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (E) => v.value = !1)
      }, {
        content: h(() => [...T[4] || (T[4] = [
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
          S(he, {
            variant: "primary",
            onClick: T[2] || (T[2] = (E) => v.value = !1)
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
}), WC = /* @__PURE__ */ _e({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ot(), r = k([]), c = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), g = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const C = await o();
          m.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        u.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function p() {
      try {
        const C = await a();
        C.exists && (v.value = C.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        g.value = !0;
        try {
          await l(v.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          g.value = !1;
        }
      }
    }
    return et(() => {
      w(), p();
    }), (C, b) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (x) => d.value = !0)
          }, {
            actions: h(() => [
              S(he, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(he, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: c.value
              }, {
                default: h(() => [
                  $(f(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          c.value ? (n(), R(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), R(Ms, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            r.value.length === 0 ? (n(), R(is, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), R(Wr, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      S(rs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (x) => d.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            b[3] || (b[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, f(m.value), 1),
            b[4] || (b[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          b[5] || (b[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          S(he, {
            variant: "primary",
            onClick: b[1] || (b[1] = (x) => d.value = !1)
          }, {
            default: h(() => [...b[6] || (b[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), GC = { class: "env-title" }, jC = {
  key: 0,
  class: "current-badge"
}, HC = {
  key: 0,
  class: "branch-info"
}, KC = /* @__PURE__ */ _e({
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
    return (s, o) => (n(), R(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, no({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", GC, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", jC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", HC, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        Je(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          S(mt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          S(mt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          S(mt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), R(mt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), qC = /* @__PURE__ */ ke(KC, [["__scopeId", "data-v-9231917a"]]), YC = { class: "env-details" }, JC = { class: "status-row" }, QC = {
  key: 0,
  class: "detail-row"
}, XC = { class: "value mono" }, ZC = {
  key: 1,
  class: "detail-row"
}, ex = { class: "value mono small" }, tx = { class: "collapsible-section" }, sx = { class: "value" }, ox = {
  key: 0,
  class: "collapsible-body"
}, nx = { class: "item-list" }, ax = { class: "item-name" }, lx = { class: "item-name" }, ix = { class: "item-name" }, rx = { class: "item-name" }, cx = {
  key: 0,
  class: "empty-list"
}, ux = { class: "collapsible-section" }, dx = { class: "value" }, fx = {
  key: 0,
  class: "collapsible-body"
}, mx = { class: "item-list" }, vx = { class: "item-name" }, px = {
  key: 0,
  class: "item-meta"
}, gx = {
  key: 0,
  class: "empty-list"
}, hx = { class: "collapsible-section" }, yx = { class: "value" }, wx = {
  key: 0,
  class: "missing-count"
}, _x = {
  key: 0,
  class: "collapsible-body"
}, kx = { class: "item-list" }, bx = { class: "model-row" }, $x = { class: "item-name" }, Cx = { class: "model-meta" }, xx = { class: "item-meta" }, Sx = {
  key: 0,
  class: "item-meta"
}, Ix = {
  key: 0,
  class: "empty-list"
}, Ex = {
  key: 2,
  class: "section-divider"
}, Tx = {
  key: 3,
  class: "detail-row"
}, Rx = { class: "value" }, Px = { class: "footer-actions" }, Mx = /* @__PURE__ */ _e({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = L(() => {
      var m;
      if (!((m = o.detail) != null && m.workflows)) return !0;
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
    return (d, m) => (n(), R(vt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: m[5] || (m[5] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, g, w, p, _, C, b, x, P, T, E, D, N, O;
        return [
          t("div", YC, [
            t("div", JC, [
              m[6] || (m[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Ee(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", QC, [
              m[7] || (m[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", XC, f(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", ZC, [
              m[8] || (m[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", ex, f(e.environment.path), 1)
            ])) : y("", !0),
            m[17] || (m[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", tx, [
              t("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (I) => r("workflows"))
              }, [
                m[9] || (m[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", sx, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (n(), i("span", {
                  key: 0,
                  class: Ee(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", ox, [
                t("div", nx, [
                  (n(!0), i(B, null, we(e.detail.workflows.synced, (I) => (n(), i("div", {
                    key: "synced-" + I,
                    class: "list-item"
                  }, [
                    t("span", ax, f(I), 1),
                    m[10] || (m[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, we(e.detail.workflows.new, (I) => (n(), i("div", {
                    key: "new-" + I,
                    class: "list-item"
                  }, [
                    t("span", lx, f(I), 1),
                    m[11] || (m[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, we(e.detail.workflows.modified, (I) => (n(), i("div", {
                    key: "mod-" + I,
                    class: "list-item"
                  }, [
                    t("span", ix, f(I), 1),
                    m[12] || (m[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, we(e.detail.workflows.deleted, (I) => (n(), i("div", {
                    key: "del-" + I,
                    class: "list-item"
                  }, [
                    t("span", rx, f(I), 1),
                    m[13] || (m[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", cx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", ux, [
              t("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (I) => r("nodes"))
              }, [
                m[14] || (m[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", dx, f(((p = e.detail) == null ? void 0 : p.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Ee(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (n(), i("div", fx, [
                t("div", mx, [
                  (n(!0), i(B, null, we(e.detail.nodes, (I) => (n(), i("div", {
                    key: I.name,
                    class: "list-item"
                  }, [
                    t("span", vx, f(I.name), 1),
                    I.version ? (n(), i("span", px, f(I.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", gx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", hx, [
              t("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (I) => r("models"))
              }, [
                m[15] || (m[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", yx, [
                  $(f(((b = e.detail) == null ? void 0 : b.model_count) ?? e.environment.model_count) + " ", 1),
                  (P = (x = e.detail) == null ? void 0 : x.models) != null && P.missing.length ? (n(), i("span", wx, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (T = e.detail) != null && T.models ? (n(), i("span", {
                  key: 0,
                  class: Ee(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (E = e.detail) != null && E.models && l.value.has("models") ? (n(), i("div", _x, [
                t("div", kx, [
                  (n(!0), i(B, null, we(e.detail.models.missing, (I) => (n(), i("div", {
                    key: I.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", bx, [
                      t("span", $x, f(I.filename), 1),
                      t("span", {
                        class: Ee(["criticality-badge", I.criticality])
                      }, f(I.criticality), 3)
                    ]),
                    t("div", Cx, [
                      t("span", xx, f(I.category), 1),
                      I.workflow_names.length ? (n(), i("span", Sx, " used by: " + f(I.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", Ix, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (n(), i("div", Ex)) : y("", !0),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (n(), i("div", Tx, [
              m[16] || (m[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", Rx, f(u(((O = e.detail) == null ? void 0 : O.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        t("div", Px, [
          e.canDelete ? (n(), R(De, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: m[3] || (m[3] = (v) => a("delete", e.environment.name))
          }, {
            default: h(() => [...m[18] || (m[18] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          m[20] || (m[20] = t("div", { class: "footer-spacer" }, null, -1)),
          S(De, {
            variant: "secondary",
            size: "sm",
            onClick: m[4] || (m[4] = (v) => a("close"))
          }, {
            default: h(() => [...m[19] || (m[19] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Dx = /* @__PURE__ */ ke(Mx, [["__scopeId", "data-v-92e68b76"]]), Gr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], jr = "3.12", vl = [
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
], Hr = "auto", Lx = { class: "progress-bar" }, Nx = /* @__PURE__ */ _e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = L(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", Lx, [
      t("div", {
        class: Ee(["progress-fill", e.variant]),
        style: Gt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ia = /* @__PURE__ */ ke(Nx, [["__scopeId", "data-v-1beb0512"]]), Ux = { class: "task-progress" }, Ax = { class: "progress-info" }, Ox = { class: "progress-percentage" }, zx = { class: "progress-message" }, Fx = {
  key: 0,
  class: "progress-steps"
}, Vx = { class: "step-icon" }, Bx = { class: "step-label" }, Wx = /* @__PURE__ */ _e({
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
    return (l, r) => (n(), i("div", Ux, [
      S(ia, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Ax, [
        t("span", Ox, f(e.progress) + "%", 1),
        t("span", zx, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", Fx, [
        (n(!0), i(B, null, we(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Ee(["step", o(c.id)])
        }, [
          t("span", Vx, f(a(c.id)), 1),
          t("span", Bx, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), jn = /* @__PURE__ */ ke(Wx, [["__scopeId", "data-v-9d1de66c"]]), Gx = {
  key: 0,
  class: "create-env-form"
}, jx = { class: "form-field" }, Hx = { class: "input-wrapper" }, Kx = {
  key: 0,
  class: "validating-indicator"
}, qx = {
  key: 1,
  class: "valid-indicator"
}, Yx = {
  key: 0,
  class: "field-error"
}, Jx = { class: "form-field" }, Qx = ["value"], Xx = { class: "form-field" }, Zx = ["disabled"], e3 = ["value"], t3 = { class: "form-field" }, s3 = ["value"], o3 = { class: "form-field form-field--checkbox" }, n3 = { class: "form-checkbox" }, a3 = {
  key: 1,
  class: "create-env-progress"
}, l3 = { class: "creating-intro" }, i3 = {
  key: 0,
  class: "progress-warning"
}, r3 = {
  key: 1,
  class: "create-error"
}, c3 = { class: "error-message" }, u3 = {
  key: 1,
  class: "footer-status"
}, d3 = 10, f3 = /* @__PURE__ */ _e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ot(), u = k(""), d = k(jr), m = k("latest"), v = k(Hr), g = k(!1), w = k(null), p = k(!1), _ = k(!1);
    let C = null, b = 0;
    const x = L(() => !!u.value.trim() && _.value && !w.value && !p.value && !E.value), P = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = k(!1), E = k(!1), D = k({
      progress: 0,
      message: ""
    });
    let N = null, O = 0;
    const I = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], M = k(null);
    pt(u, (W) => {
      _.value = !1, C && (clearTimeout(C), C = null);
      const ce = W.trim();
      if (!ce) {
        w.value = null, p.value = !1;
        return;
      }
      p.value = !0, C = setTimeout(() => {
        se(ce);
      }, 400);
    });
    async function se(W, ce = !1) {
      const de = W.trim();
      if (!de)
        return _.value = !1, p.value = !1, w.value = ce ? "Environment name is required" : null, !1;
      const Ne = ++b;
      p.value = !0;
      try {
        const Fe = await c(de);
        return Ne !== b ? !1 : (w.value = Fe.valid ? null : Fe.error || "Invalid name", _.value = !!Fe.valid, !!Fe.valid);
      } catch {
        return Ne !== b || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        Ne === b && (p.value = !1);
      }
    }
    async function Y() {
      C && (clearTimeout(C), C = null), await se(u.value, !0);
    }
    function F() {
      E.value || o("close");
    }
    async function z() {
      const W = u.value.trim();
      if (!W) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await se(W, !0)) {
        E.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const de = {
            name: W,
            python_version: d.value,
            comfyui_version: m.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ne = await l(de);
          Ne.status === "started" ? Z() : Ne.status === "error" && (D.value = {
            progress: 0,
            message: Ne.message || "Failed to start creation",
            error: Ne.message
          });
        } catch (de) {
          D.value = {
            progress: 0,
            message: de instanceof Error ? de.message : "Unknown error",
            error: de instanceof Error ? de.message : "Unknown error"
          };
        }
      }
    }
    function Z() {
      N || (O = 0, N = window.setInterval(async () => {
        try {
          const W = await r();
          O = 0, D.value = {
            progress: W.progress ?? 0,
            message: W.message,
            phase: W.phase,
            error: W.error
          }, W.state === "complete" ? (q(), o("created", W.environment_name || u.value.trim(), g.value)) : W.state === "error" ? (q(), D.value.error = W.error || W.message) : W.state === "idle" && E.value && (q(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          O++, O >= d3 && (q(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function q() {
      N && (clearInterval(N), N = null);
    }
    function A() {
      E.value = !1, D.value = { progress: 0, message: "" }, o("close");
    }
    async function ee() {
      T.value = !0;
      try {
        P.value = await a();
      } catch (W) {
        console.error("Failed to load ComfyUI releases:", W);
      } finally {
        T.value = !1;
      }
    }
    return et(async () => {
      var W;
      await yt(), (W = M.value) == null || W.focus(), ee();
    }), Hs(() => {
      q(), C && (clearTimeout(C), C = null);
    }), (W, ce) => (n(), R(vt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !E.value,
      onClose: F
    }, {
      body: h(() => [
        E.value ? (n(), i("div", a3, [
          t("p", l3, [
            ce[12] || (ce[12] = $(" Creating environment ", -1)),
            t("strong", null, f(u.value), 1),
            ce[13] || (ce[13] = $("... ", -1))
          ]),
          S(jn, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? y("", !0) : (n(), i("p", i3, " This may take several minutes. Please wait... ")),
          D.value.error ? (n(), i("div", r3, [
            t("p", c3, f(D.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", Gx, [
          t("div", jx, [
            ce[6] || (ce[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", Hx, [
              Xe(t("input", {
                ref_key: "nameInput",
                ref: M,
                "onUpdate:modelValue": ce[0] || (ce[0] = (de) => u.value = de),
                type: "text",
                class: Ee(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: Jt(z, ["enter"]),
                onBlur: Y
              }, null, 34), [
                [Wt, u.value]
              ]),
              p.value ? (n(), i("span", Kx, "...")) : _.value ? (n(), i("span", qx, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", Yx, f(w.value), 1)) : y("", !0),
            ce[7] || (ce[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", Jx, [
            ce[8] || (ce[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            Xe(t("select", {
              "onUpdate:modelValue": ce[1] || (ce[1] = (de) => d.value = de),
              class: "form-select"
            }, [
              (n(!0), i(B, null, we(He(Gr), (de) => (n(), i("option", {
                key: de,
                value: de
              }, f(de), 9, Qx))), 128))
            ], 512), [
              [hs, d.value]
            ])
          ]),
          t("div", Xx, [
            ce[9] || (ce[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Xe(t("select", {
              "onUpdate:modelValue": ce[2] || (ce[2] = (de) => m.value = de),
              class: "form-select",
              disabled: T.value
            }, [
              (n(!0), i(B, null, we(P.value, (de) => (n(), i("option", {
                key: de.tag_name,
                value: de.tag_name
              }, f(de.name), 9, e3))), 128))
            ], 8, Zx), [
              [hs, m.value]
            ])
          ]),
          t("div", t3, [
            ce[10] || (ce[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Xe(t("select", {
              "onUpdate:modelValue": ce[3] || (ce[3] = (de) => v.value = de),
              class: "form-select"
            }, [
              (n(!0), i(B, null, we(He(vl), (de) => (n(), i("option", {
                key: de,
                value: de
              }, f(de) + f(de === "auto" ? " (detect GPU)" : ""), 9, s3))), 128))
            ], 512), [
              [hs, v.value]
            ])
          ]),
          t("div", o3, [
            t("label", n3, [
              Xe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ce[4] || (ce[4] = (de) => g.value = de)
              }, null, 512), [
                [cn, g.value]
              ]),
              ce[11] || (ce[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        E.value ? (n(), i(B, { key: 1 }, [
          D.value.error ? (n(), R(De, {
            key: 0,
            variant: "secondary",
            onClick: A
          }, {
            default: h(() => [...ce[16] || (ce[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", u3, " Creating environment... "))
        ], 64)) : (n(), i(B, { key: 0 }, [
          S(De, {
            variant: "primary",
            disabled: !x.value,
            onClick: z
          }, {
            default: h(() => [...ce[14] || (ce[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(De, {
            variant: "secondary",
            onClick: ce[5] || (ce[5] = (de) => o("close"))
          }, {
            default: h(() => [...ce[15] || (ce[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), m3 = /* @__PURE__ */ ke(f3, [["__scopeId", "data-v-3faa3d9b"]]), v3 = /* @__PURE__ */ _e({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ot(), c = k([]), u = k(!1), d = k(null), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(null), _ = L(() => {
      if (!m.value.trim()) return c.value;
      const E = m.value.toLowerCase();
      return c.value.filter(
        (D) => {
          var N;
          return D.name.toLowerCase().includes(E) || ((N = D.current_branch) == null ? void 0 : N.toLowerCase().includes(E));
        }
      );
    });
    function C(E, D) {
      g.value = !1, a("created", E, D);
    }
    function b() {
      g.value = !0;
    }
    async function x(E) {
      w.value = E, p.value = null;
      const D = await r(E.name);
      D && (p.value = D);
    }
    function P(E) {
      w.value = null, p.value = null, a("delete", E);
    }
    async function T() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (E) {
        d.value = E instanceof Error ? E.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return et(T), s({
      loadEnvironments: T,
      openCreateModal: b
    }), (E, D) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (N) => v.value = !0)
          }, {
            actions: h(() => [
              S(he, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: h(() => [...D[6] || (D[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              S(he, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: h(() => [...D[7] || (D[7] = [
                  $(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Mo, {
            modelValue: m.value,
            "onUpdate:modelValue": D[1] || (D[1] = (N) => m.value = N),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), R(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), R(Ms, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            _.value.length ? (n(), R(dt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, we(_.value, (N) => (n(), R(qC, {
                  key: N.name,
                  "environment-name": N.name,
                  "is-current": N.is_current,
                  "current-branch": N.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    N.is_current ? y("", !0) : (n(), R(he, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => E.$emit("switch", N.name)
                    }, {
                      default: h(() => [...D[8] || (D[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(he, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => x(N)
                    }, {
                      default: h(() => [...D[9] || (D[9] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            _.value.length ? y("", !0) : (n(), R(is, {
              key: 1,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, no({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  S(he, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: h(() => [...D[10] || (D[10] = [
                      $(" Create Environment ", -1)
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
      S(rs, {
        show: v.value,
        title: "About Environments",
        onClose: D[3] || (D[3] = (N) => v.value = !1)
      }, {
        content: h(() => [...D[11] || (D[11] = [
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
          S(he, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (N) => v.value = !1)
          }, {
            default: h(() => [...D[12] || (D[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(Dx, {
        key: 0,
        environment: w.value,
        detail: p.value,
        "can-delete": c.value.length > 1,
        onClose: D[4] || (D[4] = (N) => {
          w.value = null, p.value = null;
        }),
        onDelete: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      g.value ? (n(), R(m3, {
        key: 1,
        onClose: D[5] || (D[5] = (N) => g.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), p3 = /* @__PURE__ */ ke(v3, [["__scopeId", "data-v-0c0fbd88"]]), g3 = { class: "file-path" }, h3 = { class: "file-path-text" }, y3 = ["title"], w3 = /* @__PURE__ */ _e({
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
    return (l, r) => (n(), i("div", g3, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", h3, f(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, f(o.value ? "✓" : "📋"), 9, y3)) : y("", !0)
    ]));
  }
}), _3 = /* @__PURE__ */ ke(w3, [["__scopeId", "data-v-f0982173"]]), k3 = { class: "base-textarea-wrapper" }, b3 = ["value", "rows", "placeholder", "disabled", "maxlength"], $3 = {
  key: 0,
  class: "base-textarea-count"
}, C3 = /* @__PURE__ */ _e({
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
    return (r, c) => (n(), i("div", k3, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Jt(ft((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Jt(ft((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Jt(l, ["enter"])
        ]
      }, null, 40, b3),
      e.showCharCount && e.maxLength ? (n(), i("div", $3, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Ba = /* @__PURE__ */ ke(C3, [["__scopeId", "data-v-c6d16c93"]]), x3 = ["checked", "disabled"], S3 = { class: "base-checkbox-box" }, I3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, E3 = {
  key: 0,
  class: "base-checkbox-label"
}, T3 = /* @__PURE__ */ _e({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Ee(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, x3),
      t("span", S3, [
        e.modelValue ? (n(), i("svg", I3, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", E3, [
        Je(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Hn = /* @__PURE__ */ ke(T3, [["__scopeId", "data-v-bf17c831"]]), R3 = { class: "export-blocked" }, P3 = { class: "error-header" }, M3 = { class: "error-summary" }, D3 = { class: "error-description" }, L3 = { class: "issues-list" }, N3 = { class: "issue-message" }, U3 = {
  key: 0,
  class: "issue-details"
}, A3 = ["onClick"], O3 = { class: "issue-fix" }, z3 = {
  key: 0,
  class: "commit-section"
}, F3 = {
  key: 0,
  class: "issues-warning"
}, V3 = {
  key: 1,
  class: "commit-error"
}, B3 = /* @__PURE__ */ _e({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ot(), r = k(""), c = k(!1), u = k(!1), d = k(""), m = js({}), v = L(
      () => o.issues.some((b) => b.type === "uncommitted_workflows" || b.type === "uncommitted_git_changes")
    ), g = L(
      () => o.issues.some((b) => b.type === "unresolved_issues")
    ), w = L(
      () => g.value && !u.value
    ), p = L(
      () => v.value && r.value.trim() !== "" && !c.value && !w.value
    );
    function _(b) {
      const x = o.issues[b];
      return m[b] || x.details.length <= 3 ? x.details : x.details.slice(0, 3);
    }
    async function C() {
      var b;
      if (p.value) {
        c.value = !0, d.value = "";
        try {
          const x = await l(r.value.trim(), u.value);
          if (x.status === "success")
            a("committed");
          else if (x.status === "blocked") {
            const P = ((b = x.issues) == null ? void 0 : b.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${P}`;
          } else
            d.value = x.message || "Commit failed";
        } catch (x) {
          d.value = x instanceof Error ? x.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (b, x) => (n(), R(vt, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: x[4] || (x[4] = (P) => b.$emit("close"))
    }, {
      body: h(() => [
        t("div", R3, [
          t("div", P3, [
            x[6] || (x[6] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", M3, [
              x[5] || (x[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", D3, f(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", L3, [
            (n(!0), i(B, null, we(e.issues, (P, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", N3, f(P.message), 1),
              P.details.length ? (n(), i("div", U3, [
                (n(!0), i(B, null, we(_(T), (E, D) => (n(), i("div", {
                  key: D,
                  class: "issue-detail"
                }, f(E), 1))), 128)),
                P.details.length > 3 && !m[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (E) => m[T] = !0
                }, " +" + f(P.details.length - 3) + " more ", 9, A3)) : y("", !0)
              ])) : y("", !0),
              t("div", O3, [
                P.type === "uncommitted_workflows" ? (n(), i(B, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : P.type === "uncommitted_git_changes" ? (n(), i(B, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : P.type === "unresolved_issues" ? (n(), i(B, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", z3, [
            g.value ? (n(), i("div", F3, [
              x[8] || (x[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              S(Hn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[0] || (x[0] = (P) => u.value = P),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...x[7] || (x[7] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            S(Ba, {
              modelValue: r.value,
              "onUpdate:modelValue": x[1] || (x[1] = (P) => r.value = P),
              placeholder: "Describe your changes...",
              disabled: c.value || w.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", V3, f(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        v.value ? (n(), i(B, { key: 0 }, [
          S(De, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (P) => b.$emit("close"))
          }, {
            default: h(() => [...x[9] || (x[9] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(De, {
            variant: u.value ? "danger" : "primary",
            disabled: !p.value,
            loading: c.value,
            onClick: C
          }, {
            default: h(() => [
              $(f(c.value ? "Committing..." : u.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), R(De, {
          key: 1,
          variant: "primary",
          onClick: x[3] || (x[3] = (P) => b.$emit("close"))
        }, {
          default: h(() => [...x[10] || (x[10] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Kr = /* @__PURE__ */ ke(B3, [["__scopeId", "data-v-bd79ba24"]]), W3 = { class: "export-warnings" }, G3 = {
  key: 0,
  class: "success-header"
}, j3 = { class: "warning-header" }, H3 = { class: "warning-summary" }, K3 = { class: "warning-title" }, q3 = { class: "models-section" }, Y3 = { class: "models-list" }, J3 = { class: "model-info" }, Q3 = { class: "model-filename" }, X3 = { class: "model-workflows" }, Z3 = ["onClick"], e5 = /* @__PURE__ */ _e({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(!1), r = k(null), c = L(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, a("revalidate");
    }
    return (d, m) => (n(), i(B, null, [
      S(vt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", W3, [
            e.models.length === 0 ? (n(), i("div", G3, [...m[4] || (m[4] = [
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
              t("div", j3, [
                m[6] || (m[6] = t("span", { class: "warning-icon" }, [
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
                t("div", H3, [
                  t("h3", K3, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", q3, [
                t("div", Y3, [
                  (n(!0), i(B, null, we(c.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", J3, [
                      t("div", Q3, f(v.filename), 1),
                      t("div", X3, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => r.value = v.hash
                    }, " Add Source ", 8, Z3)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (v) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : y("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: h(() => [
          S(De, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          S(De, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => d.$emit("confirm"))
          }, {
            default: h(() => [
              $(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (n(), R(fl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), qr = /* @__PURE__ */ ke(e5, [["__scopeId", "data-v-b698d882"]]), t5 = { class: "export-card" }, s5 = { class: "export-path-row" }, o5 = { class: "export-actions" }, n5 = {
  key: 1,
  class: "export-warning"
}, a5 = /* @__PURE__ */ _e({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = ot(), a = k(""), l = k(!1), r = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = L(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const E = await s();
        m.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? g.value = !0 : await x() : v.value = !0;
      } catch (E) {
        u.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function _() {
      g.value = !1, await x();
    }
    async function C() {
      v.value = !1, l.value = !0;
      try {
        const E = await s();
        m.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? g.value = !0 : await x() : v.value = !0;
      } catch (E) {
        u.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Re-validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function b() {
      try {
        const E = await s();
        m.value = E;
      } catch (E) {
        console.error("Re-validation failed:", E);
      }
    }
    async function x() {
      r.value = !0;
      try {
        const E = await o(a.value || void 0);
        u.value = E;
      } catch (E) {
        u.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Export failed"
        };
      } finally {
        r.value = !1;
      }
    }
    async function P() {
      var E;
      if ((E = u.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (D) {
          console.error("Failed to copy path:", D);
        }
    }
    async function T() {
      var E;
      if ((E = u.value) != null && E.path) {
        c.value = !0;
        try {
          const D = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!D.ok)
            throw new Error(`Download failed: ${D.statusText}`);
          const N = await D.blob(), O = URL.createObjectURL(N), I = u.value.path.split("/").pop() || "environment-export.tar.gz", M = document.createElement("a");
          M.href = O, M.download = I, document.body.appendChild(M), M.click(), document.body.removeChild(M), URL.revokeObjectURL(O);
        } catch (D) {
          console.error("Failed to download:", D), alert(`Download failed: ${D instanceof Error ? D.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (E, D) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (N) => d.value = !0)
          })
        ]),
        content: h(() => [
          S(dt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", t5, [
                D[7] || (D[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", s5, [
                  S(Qo, {
                    modelValue: a.value,
                    "onUpdate:modelValue": D[1] || (D[1] = (N) => a.value = N),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", o5, [
                  S(he, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      D[6] || (D[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      $(" " + f(w.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (n(), R(dt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              S(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, no({
                icon: h(() => [
                  $(f(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    S(mt, { label: "Saved to:" }, {
                      default: h(() => [
                        S(_3, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (n(), R(mt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", n5, [...D[8] || (D[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    S(he, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: T
                    }, {
                      default: h(() => [...D[9] || (D[9] = [
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
                    S(he, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...D[10] || (D[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(he, {
                      variant: "ghost",
                      size: "sm",
                      onClick: D[2] || (D[2] = (N) => u.value = null)
                    }, {
                      default: h(() => [...D[11] || (D[11] = [
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
        _: 1
      }),
      S(rs, {
        show: d.value,
        title: "What Gets Exported",
        onClose: D[3] || (D[3] = (N) => d.value = !1)
      }, {
        content: h(() => [...D[12] || (D[12] = [
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
      v.value && m.value ? (n(), R(Kr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: D[4] || (D[4] = (N) => v.value = !1),
        onCommitted: C
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (n(), R(qr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: D[5] || (D[5] = (N) => g.value = !1),
        onRevalidate: b
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), l5 = /* @__PURE__ */ ke(a5, [["__scopeId", "data-v-ddeffd68"]]), i5 = { class: "file-input-wrapper" }, r5 = ["accept", "multiple", "disabled"], c5 = /* @__PURE__ */ _e({
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
    }), (u, d) => (n(), i("div", i5, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, r5),
      S(he, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          Je(u.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            $(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), u5 = /* @__PURE__ */ ke(c5, [["__scopeId", "data-v-cd192091"]]), d5 = {
  key: 0,
  class: "drop-zone-empty"
}, f5 = { class: "drop-zone-text" }, m5 = { class: "drop-zone-primary" }, v5 = { class: "drop-zone-secondary" }, p5 = { class: "drop-zone-actions" }, g5 = {
  key: 1,
  class: "drop-zone-file"
}, h5 = { class: "file-info" }, y5 = { class: "file-details" }, w5 = { class: "file-name" }, _5 = { class: "file-size" }, k5 = /* @__PURE__ */ _e({
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
    const o = s, a = k(!1), l = k(null), r = k(0), c = L(() => l.value !== null), u = L(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = L(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var x;
      b.stopPropagation(), r.value++, (x = b.dataTransfer) != null && x.types.includes("Files") && (a.value = !0);
    }
    function v(b) {
      b.stopPropagation(), b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function g(b) {
      b.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(b) {
      var P;
      b.stopPropagation(), r.value = 0, a.value = !1;
      const x = (P = b.dataTransfer) == null ? void 0 : P.files;
      x && x.length > 0 && _(x[0]);
    }
    function p(b) {
      b.length > 0 && _(b[0]);
    }
    function _(b) {
      l.value = b, o("fileSelected", b);
    }
    function C() {
      l.value = null, o("clear");
    }
    return (b, x) => (n(), i("div", {
      class: Ee(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: ft(m, ["prevent"]),
      onDragover: ft(v, ["prevent"]),
      onDragleave: ft(g, ["prevent"]),
      onDrop: ft(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", g5, [
        t("div", h5, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", y5, [
            t("div", w5, f(u.value), 1),
            t("div", _5, f(d.value), 1)
          ])
        ]),
        S(he, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...x[2] || (x[2] = [
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
      ])) : (n(), i("div", d5, [
        x[0] || (x[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", f5, [
          t("p", m5, f(e.primaryText), 1),
          t("p", v5, f(e.secondaryText), 1)
        ]),
        t("div", p5, [
          S(u5, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: h(() => [
              $(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), b5 = /* @__PURE__ */ ke(k5, [["__scopeId", "data-v-0f79cb86"]]), $5 = { class: "import-preview" }, C5 = { class: "preview-header" }, x5 = {
  key: 0,
  class: "source-env"
}, S5 = { class: "preview-content" }, I5 = { class: "preview-section" }, E5 = { class: "section-header" }, T5 = { class: "section-info" }, R5 = { class: "section-count" }, P5 = {
  key: 0,
  class: "item-list"
}, M5 = { class: "item-name" }, D5 = {
  key: 0,
  class: "item-more"
}, L5 = { class: "preview-section" }, N5 = { class: "section-header" }, U5 = { class: "section-info" }, A5 = { class: "section-count" }, O5 = {
  key: 0,
  class: "item-list"
}, z5 = { class: "item-details" }, F5 = { class: "item-name" }, V5 = { class: "item-meta" }, B5 = {
  key: 0,
  class: "item-more"
}, W5 = { class: "preview-section" }, G5 = { class: "section-header" }, j5 = { class: "section-info" }, H5 = { class: "section-count" }, K5 = {
  key: 0,
  class: "item-list"
}, q5 = { class: "item-name" }, Y5 = {
  key: 0,
  class: "item-more"
}, J5 = {
  key: 0,
  class: "preview-section"
}, Q5 = { class: "git-info" }, X5 = /* @__PURE__ */ _e({
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
    const s = e, o = L(() => s.workflows.length), a = L(() => s.models.length), l = L(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", $5, [
      t("div", C5, [
        S(Vt, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", x5, [
          u[1] || (u[1] = $(" From: ", -1)),
          S(Va, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", S5, [
        t("div", I5, [
          t("div", E5, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", T5, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", R5, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", P5, [
            (n(!0), i(B, null, we(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", M5, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", D5, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", L5, [
          t("div", N5, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", U5, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", A5, f(a.value) + " file" + f(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", O5, [
            (n(!0), i(B, null, we(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", z5, [
                t("span", F5, f(d.filename), 1),
                t("span", V5, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", B5, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", W5, [
          t("div", G5, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", j5, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", H5, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", K5, [
            (n(!0), i(B, null, we(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", q5, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", Y5, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", J5, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", Q5, [
            e.gitBranch ? (n(), R(mt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                S(Va, null, {
                  default: h(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), R(mt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                S(Lr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), Z5 = /* @__PURE__ */ ke(X5, [["__scopeId", "data-v-182fe113"]]), eS = { class: "import-config" }, tS = { class: "config-container" }, sS = { class: "config-field" }, oS = { class: "input-wrapper" }, nS = ["value"], aS = {
  key: 0,
  class: "validating-indicator"
}, lS = {
  key: 1,
  class: "valid-indicator"
}, iS = {
  key: 0,
  class: "field-error"
}, rS = { class: "config-field" }, cS = { class: "strategy-options" }, uS = ["value", "checked", "onChange"], dS = { class: "strategy-content" }, fS = { class: "strategy-label" }, mS = { class: "strategy-description" }, vS = { class: "config-field switch-field" }, pS = { class: "switch-label" }, gS = ["checked"], hS = { class: "advanced-section" }, yS = { class: "advanced-content" }, wS = { class: "config-field" }, _S = ["value"], kS = ["value"], bS = /* @__PURE__ */ _e({
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
    pt(() => o.nameError, (v) => {
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
    function d(v) {
      const g = v.target.value;
      a("update:name", g), r.value = !1, u && clearTimeout(u), g.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (v, g) => (n(), i("div", eS, [
      S(Vt, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", tS, [
        t("div", sS, [
          S(Dn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", oS, [
            t("input", {
              type: "text",
              class: Ee(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, nS),
            l.value ? (n(), i("span", aS, "...")) : r.value ? (n(), i("span", lS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", iS, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", rS, [
          S(Dn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", cS, [
            (n(), i(B, null, we(c, (w) => t("label", {
              key: w.value,
              class: Ee(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => a("update:modelStrategy", w.value)
              }, null, 40, uS),
              t("div", dS, [
                t("span", fS, f(w.label), 1),
                t("span", mS, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", vS, [
          t("label", pS, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, gS),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", hS, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", yS, [
            t("div", wS, [
              S(Dn, null, {
                default: h(() => [...g[7] || (g[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(B, null, we(He(vl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, kS))), 128))
              ], 40, _S)
            ])
          ])
        ])
      ])
    ]));
  }
}), $S = /* @__PURE__ */ ke(bS, [["__scopeId", "data-v-89ea06a1"]]), CS = { class: "import-flow" }, xS = {
  key: 0,
  class: "import-empty"
}, SS = { class: "git-import-section" }, IS = { class: "git-url-input-row" }, ES = ["disabled"], TS = {
  key: 0,
  class: "git-error"
}, RS = {
  key: 1,
  class: "import-configure"
}, PS = { class: "selected-file-bar" }, MS = {
  key: 0,
  class: "file-bar-content"
}, DS = { class: "file-bar-info" }, LS = { class: "file-bar-name" }, NS = { class: "file-bar-size" }, US = {
  key: 1,
  class: "file-bar-content"
}, AS = { class: "file-bar-info" }, OS = { class: "file-bar-name" }, zS = {
  key: 0,
  class: "preview-loading"
}, FS = { class: "import-actions" }, VS = {
  key: 2,
  class: "import-progress"
}, BS = { class: "creating-intro" }, WS = {
  key: 0,
  class: "progress-warning"
}, GS = {
  key: 1,
  class: "import-error"
}, jS = { class: "error-message" }, HS = {
  key: 3,
  class: "import-complete"
}, KS = { class: "complete-message" }, qS = { class: "complete-title" }, YS = { class: "complete-details" }, JS = { class: "complete-actions" }, QS = /* @__PURE__ */ _e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var me, oe, te, ue;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = ot();
    let g = null;
    const w = k(null), p = k(a.resumeImport ?? !1), _ = k(!1), C = k(!1), b = k(""), x = k(!1), P = k(null), T = k(""), E = k(null), D = k(!1), N = k(null), O = k(null), I = k({
      name: ((me = a.initialProgress) == null ? void 0 : me.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), M = k(null), se = k({
      message: ((oe = a.initialProgress) == null ? void 0 : oe.message) ?? "Preparing import...",
      phase: ((te = a.initialProgress) == null ? void 0 : te.phase) ?? "",
      progress: ((ue = a.initialProgress) == null ? void 0 : ue.progress) ?? 0,
      error: null
    }), Y = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], F = L(() => {
      if (!O.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ge = O.value;
      return {
        sourceEnvironment: ge.comfyui_version ? `ComfyUI ${ge.comfyui_version}` : "Unknown",
        workflows: ge.workflows.map((Te) => Te.name),
        models: ge.models.map((Te) => ({
          filename: Te.filename,
          size: 0,
          type: Te.relative_path.split("/")[0] || "model"
        })),
        nodes: ge.nodes.map((Te) => Te.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), z = L(() => !x.value && !P.value && O.value && I.value.name.length > 0 && !M.value && (w.value || E.value));
    async function Z(ge) {
      w.value = ge, x.value = !0, P.value = null, O.value = null;
      try {
        const Te = await r(ge);
        O.value = Te;
      } catch (Te) {
        P.value = Te instanceof Error ? Te.message : "Failed to analyze file", console.error("Preview error:", Te);
      } finally {
        x.value = !1;
      }
    }
    function q() {
      w.value = null, E.value = null, T.value = "", N.value = null, _.value = !1, C.value = !1, b.value = "", O.value = null, P.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, M.value = null, l("source-cleared");
    }
    function A() {
      Fe(), q(), p.value = !1, x.value = !1, D.value = !1, se.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ee() {
      if (T.value.trim()) {
        D.value = !0, N.value = null;
        try {
          const ge = await c(T.value.trim());
          E.value = T.value.trim(), O.value = ge;
        } catch (ge) {
          N.value = ge instanceof Error ? ge.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
        }
      }
    }
    function W(ge) {
      try {
        const Te = new URL(ge);
        return Te.host + Te.pathname.replace(/\.git$/, "");
      } catch {
        return ge;
      }
    }
    async function ce(ge) {
      if (!ge) {
        M.value = "Environment name is required";
        return;
      }
      try {
        const Te = await u(ge);
        M.value = Te.valid ? null : Te.error || "Invalid name";
      } catch {
        M.value = "Failed to validate name";
      }
    }
    async function de() {
      if (I.value.name && !(!w.value && !E.value)) {
        p.value = !0, _.value = !1, se.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ge;
          if (w.value)
            ge = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (E.value)
            ge = await m(
              E.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ge.status === "started" ? Ne() : (C.value = !1, b.value = ge.message, p.value = !1, _.value = !0);
        } catch (ge) {
          C.value = !1, b.value = ge instanceof Error ? ge.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Ne() {
      if (g) return;
      const ge = async () => {
        try {
          const Le = await v();
          return se.value = {
            message: Le.message,
            phase: Le.phase || "",
            progress: Le.progress ?? (Le.state === "importing" ? 50 : 0),
            error: Le.error || null
          }, Le.state === "complete" ? (Fe(), C.value = !0, b.value = `Environment '${Le.environment_name}' created successfully`, p.value = !1, _.value = !0, Le.environment_name && l("import-complete", Le.environment_name, I.value.switchAfterImport), !1) : Le.state === "error" ? (Fe(), C.value = !1, b.value = Le.error || Le.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Le) {
          return console.error("Failed to poll import progress:", Le), !0;
        }
      };
      await ge() && (g = setInterval(async () => {
        await ge() || Fe();
      }, 2e3));
    }
    function Fe() {
      g && (clearInterval(g), g = null);
    }
    function pe(ge) {
      return ge < 1024 ? `${ge} B` : ge < 1024 * 1024 ? `${(ge / 1024).toFixed(1)} KB` : ge < 1024 * 1024 * 1024 ? `${(ge / (1024 * 1024)).toFixed(1)} MB` : `${(ge / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const ge = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ge.state, ge), ge.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ge.environment_name), p.value = !0, I.value.name = ge.environment_name || I.value.name || "", se.value = {
          progress: ge.progress ?? 0,
          message: ge.message || "Importing...",
          phase: ge.phase || "",
          error: null
        }, Ne());
      } catch (ge) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ge);
      }
    }), s({
      handleReset: A,
      isImporting: p,
      canImport: z
    }), (ge, Te) => {
      var Le;
      return n(), i("div", CS, [
        !w.value && !E.value && !p.value ? (n(), i("div", xS, [
          S(b5, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: Z
          }),
          Te[7] || (Te[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", SS, [
            Te[5] || (Te[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", IS, [
              Xe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Te[0] || (Te[0] = (We) => T.value = We),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Jt(ee, ["enter"]),
                disabled: D.value
              }, null, 40, ES), [
                [Wt, T.value]
              ]),
              S(he, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || D.value,
                onClick: ee
              }, {
                default: h(() => [
                  $(f(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            N.value ? (n(), i("div", TS, f(N.value), 1)) : y("", !0),
            Te[6] || (Te[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !p.value && !_.value ? (n(), i("div", RS, [
          t("div", PS, [
            w.value ? (n(), i("div", MS, [
              Te[8] || (Te[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", DS, [
                t("div", LS, f(w.value.name), 1),
                t("div", NS, f(pe(w.value.size)), 1)
              ])
            ])) : E.value ? (n(), i("div", US, [
              Te[10] || (Te[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", AS, [
                t("div", OS, f(W(E.value)), 1),
                Te[9] || (Te[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            S(he, {
              variant: "ghost",
              size: "sm",
              onClick: q
            }, {
              default: h(() => [...Te[11] || (Te[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (n(), i("div", zS, [...Te[12] || (Te[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : P.value ? (n(), R(es, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [P.value]
          }, null, 8, ["details"])) : O.value ? (n(), R(Z5, {
            key: 2,
            "source-environment": F.value.sourceEnvironment,
            workflows: F.value.workflows,
            models: F.value.models,
            nodes: F.value.nodes,
            "git-branch": F.value.gitBranch,
            "git-commit": F.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          O.value ? (n(), R($S, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": Te[1] || (Te[1] = (We) => I.value.name = We),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": Te[2] || (Te[2] = (We) => I.value.modelStrategy = We),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": Te[3] || (Te[3] = (We) => I.value.torchBackend = We),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": Te[4] || (Te[4] = (We) => I.value.switchAfterImport = We),
            "name-error": M.value,
            onValidateName: ce
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Le = O.value) != null && Le.models_needing_download) ? (n(), R(es, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${O.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", FS, [
            S(he, {
              variant: "secondary",
              size: "md",
              onClick: q
            }, {
              default: h(() => [...Te[13] || (Te[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(he, {
              variant: "primary",
              size: "md",
              disabled: !z.value,
              onClick: de
            }, {
              default: h(() => [...Te[14] || (Te[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (n(), i("div", VS, [
          t("p", BS, [
            Te[15] || (Te[15] = $(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            Te[16] || (Te[16] = $("... ", -1))
          ]),
          S(jn, {
            progress: se.value.progress,
            message: se.value.message,
            "current-phase": se.value.phase,
            variant: se.value.error ? "error" : "default",
            "show-steps": !0,
            steps: Y
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          se.value.error ? y("", !0) : (n(), i("p", WS, " This may take several minutes. Please wait... ")),
          se.value.error ? (n(), i("div", GS, [
            t("p", jS, f(se.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (n(), i("div", HS, [
          t("div", {
            class: Ee(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", KS, [
            t("div", qS, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", YS, f(b.value), 1)
          ]),
          t("div", JS, [
            S(he, {
              variant: "primary",
              size: "md",
              onClick: A
            }, {
              default: h(() => [...Te[17] || (Te[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Yr = /* @__PURE__ */ ke(QS, [["__scopeId", "data-v-72cbc04e"]]), XS = /* @__PURE__ */ _e({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
          })
        ]),
        content: h(() => [
          S(Yr, { onImportComplete: l })
        ]),
        _: 1
      }),
      S(rs, {
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
}), ZS = /* @__PURE__ */ ke(XS, [["__scopeId", "data-v-e13bfe76"]]), xn = wo(), e8 = 5e3, go = k([]), xa = k(!1), Sa = k(null);
let Oo = null;
async function Sn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Jr(e) {
  const s = L(
    () => go.value.filter((p) => p.status === "running")
  ), o = L(
    () => go.value.filter((p) => p.status === "deploying")
  ), a = L(
    () => go.value.filter((p) => p.status === "stopped")
  ), l = L(
    () => s.value.length + o.value.length
  ), r = L(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...go.value].sort(
      (_, C) => (p[_.status] ?? 5) - (p[C.status] ?? 5)
    );
  });
  async function c() {
    xa.value = !0, Sa.value = null;
    try {
      let p;
      if (!xn) {
        const _ = await Sn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      go.value = p.instances;
    } catch (p) {
      Sa.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      xa.value = !1;
    }
  }
  function u(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const C = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${C}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${C}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function d(p) {
    try {
      if (!xn) {
        const _ = u(p, "stop"), C = await Sn(_, { method: "POST" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] stopInstance error:", _), _;
    }
  }
  async function m(p) {
    try {
      if (!xn) {
        const _ = u(p, "start"), C = await Sn(_, { method: "POST" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to start instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] startInstance error:", _), _;
    }
  }
  async function v(p) {
    try {
      if (!xn) {
        const _ = u(p, "terminate"), C = await Sn(_, { method: "DELETE" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function g() {
    Oo || (Oo = window.setInterval(c, e8));
  }
  function w() {
    Oo && (clearInterval(Oo), Oo = null);
  }
  return pt(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: go,
    isLoading: xa,
    error: Sa,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: a,
    liveInstanceCount: l,
    sortedInstances: r,
    // Actions
    refreshInstances: c,
    stopInstance: d,
    startInstance: m,
    terminateInstance: v,
    // Polling
    startPolling: g,
    stopPolling: w
  };
}
const t8 = { class: "instance-header" }, s8 = { class: "provider-badge" }, o8 = { class: "instance-name" }, n8 = {
  key: 0,
  class: "spinner"
}, a8 = { class: "instance-details" }, l8 = {
  key: 0,
  class: "detail"
}, i8 = {
  key: 1,
  class: "detail instance-url"
}, r8 = {
  key: 2,
  class: "detail"
}, c8 = {
  key: 3,
  class: "detail"
}, u8 = {
  key: 4,
  class: "detail total-cost"
}, d8 = {
  key: 0,
  class: "deployment-progress"
}, f8 = { class: "progress-message" }, m8 = { class: "instance-actions" }, v8 = /* @__PURE__ */ _e({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = L(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), a = L(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = L(() => `status-${s.instance.status}`);
    function r() {
      s.instance.comfyui_url && window.open(s.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function c() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(d) {
      const m = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (d, m) => (n(), i("div", {
      class: Ee(["instance-card", l.value])
    }, [
      t("div", t8, [
        t("span", s8, f(o.value), 1),
        t("span", o8, f(e.instance.name), 1),
        t("span", {
          class: Ee(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", n8)) : y("", !0),
          $(" " + f(a.value), 1)
        ], 2)
      ]),
      t("div", a8, [
        e.instance.gpu_type ? (n(), i("span", l8, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", i8, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", r8, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", c8, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", u8, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", d8, [
        t("div", f8, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), R(ia, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", m8, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), R(he, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: r
        }, {
          default: h(() => [...m[3] || (m[3] = [
            $(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), R(he, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: h(() => [...m[4] || (m[4] = [
            $(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (n(), R(he, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: h(() => [...m[5] || (m[5] = [
            $(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (n(), R(he, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: h(() => [...m[6] || (m[6] = [
            $(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        S(he, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => d.$emit("terminate", e.instance))
        }, {
          default: h(() => [...m[7] || (m[7] = [
            $(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), p8 = /* @__PURE__ */ ke(v8, [["__scopeId", "data-v-746c3894"]]), g8 = { class: "instances-tab" }, h8 = { class: "instances-header" }, y8 = {
  key: 0,
  class: "loading-state"
}, w8 = {
  key: 1,
  class: "empty-state"
}, _8 = {
  key: 2,
  class: "instances-list"
}, k8 = /* @__PURE__ */ _e({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = L(() => {
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
    return (a, l) => (n(), i("div", g8, [
      t("div", h8, [
        S(Vt, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(he, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (r) => a.$emit("refresh"))
        }, {
          default: h(() => [...l[5] || (l[5] = [
            $(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (n(), i("div", y8, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", w8, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", _8, [
        (n(!0), i(B, null, we(o.value, (r) => (n(), R(p8, {
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
}), b8 = /* @__PURE__ */ ke(k8, [["__scopeId", "data-v-ba614fc3"]]), $8 = { class: "remote-header" }, C8 = { class: "remote-info" }, x8 = { class: "remote-icon" }, S8 = { class: "remote-name" }, I8 = {
  key: 0,
  class: "default-badge"
}, E8 = {
  key: 1,
  class: "sync-badge"
}, T8 = {
  key: 0,
  class: "ahead"
}, R8 = {
  key: 1,
  class: "behind"
}, P8 = {
  key: 1,
  class: "synced"
}, M8 = ["href"], D8 = {
  key: 1,
  class: "remote-url-text"
}, L8 = { class: "remote-actions" }, N8 = /* @__PURE__ */ _e({
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
    const s = e, o = L(() => s.remote.is_default), a = L(() => {
      const r = s.remote.fetch_url, c = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = L(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, c) => (n(), i("div", {
      class: Ee(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", $8, [
        t("div", C8, [
          t("span", x8, f(o.value ? "🔗" : "🌐"), 1),
          t("span", S8, f(e.remote.name), 1),
          o.value ? (n(), i("span", I8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", E8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", T8, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", R8, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", P8, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = ft(() => {
          }, ["stop"]))
        }, f(l.value), 9, M8)) : (n(), i("span", D8, f(l.value), 1))
      ]),
      t("div", L8, [
        S(he, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => r.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), R(he, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => r.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        S(he, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => r.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            $(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Qr = /* @__PURE__ */ ke(N8, [["__scopeId", "data-v-d687d161"]]), U8 = { class: "runpod-tab" }, A8 = { class: "api-key-card" }, O8 = { class: "api-key-row" }, z8 = { class: "api-key-input-wrapper" }, F8 = ["type", "disabled"], V8 = ["title"], B8 = { class: "status-icon" }, W8 = { class: "status-text" }, G8 = {
  key: 0,
  class: "credit-balance"
}, j8 = { class: "config-card" }, H8 = { class: "config-row" }, K8 = ["disabled"], q8 = {
  key: 0,
  value: ""
}, Y8 = {
  key: 1,
  value: "",
  disabled: ""
}, J8 = ["value", "disabled"], Q8 = { class: "config-row" }, X8 = {
  key: 0,
  class: "loading-inline"
}, Z8 = { class: "no-volumes-state" }, e4 = { class: "no-volumes-text" }, t4 = ["value"], s4 = { class: "config-row" }, o4 = ["disabled"], n4 = {
  key: 0,
  value: ""
}, a4 = {
  key: 1,
  value: ""
}, l4 = {
  key: 2,
  value: ""
}, i4 = ["value"], r4 = { class: "config-row" }, c4 = { class: "radio-group" }, u4 = { class: "radio-option" }, d4 = { class: "radio-label" }, f4 = { class: "radio-option disabled" }, m4 = { class: "radio-label" }, v4 = { class: "config-row" }, p4 = { class: "radio-group" }, g4 = { class: "radio-option" }, h4 = { class: "radio-label" }, y4 = { class: "radio-option disabled" }, w4 = { class: "radio-label" }, _4 = { class: "config-row" }, k4 = {
  key: 0,
  class: "loading-text"
}, b4 = {
  key: 1,
  class: "empty-remotes"
}, $4 = { class: "remotes-list" }, C4 = {
  key: 0,
  class: "sync-warning"
}, x4 = { class: "warning-content" }, S4 = { class: "remotes-footer" }, I4 = { class: "summary-card" }, E4 = {
  key: 0,
  class: "loading-text"
}, T4 = { class: "summary-row" }, R4 = { class: "summary-value" }, P4 = { class: "summary-row" }, M4 = { class: "summary-value" }, D4 = { class: "summary-row" }, L4 = { class: "summary-value" }, N4 = {
  key: 0,
  class: "summary-sub-row"
}, U4 = { class: "summary-sub-label" }, A4 = {
  key: 1,
  class: "summary-sub-row warning"
}, O4 = { class: "summary-sub-label" }, z4 = { class: "summary-row" }, F4 = { class: "summary-value" }, V4 = { class: "summary-row" }, B4 = { class: "summary-value" }, W4 = { class: "deployment-summary" }, G4 = { class: "summary-columns" }, j4 = { class: "summary-column" }, H4 = { class: "pricing-row" }, K4 = { class: "pricing-value" }, q4 = { class: "pricing-row" }, Y4 = { class: "pricing-value" }, J4 = { class: "pricing-row" }, Q4 = { class: "pricing-value" }, X4 = { class: "pricing-row total" }, Z4 = { class: "pricing-value" }, e6 = { class: "summary-column" }, t6 = { class: "spec-row" }, s6 = { class: "spec-row" }, o6 = {
  key: 0,
  class: "spec-row"
}, n6 = {
  key: 1,
  class: "spec-row spot-warning"
}, a6 = {
  key: 4,
  class: "deploy-actions"
}, l6 = { class: "progress-content" }, i6 = { class: "phase-indicator" }, r6 = { key: 0 }, c6 = { key: 1 }, u6 = { key: 2 }, d6 = {
  key: 3,
  class: "spinner"
}, f6 = { class: "phase-text" }, m6 = { class: "phase-name" }, v6 = { class: "phase-detail" }, p6 = {
  key: 0,
  class: "ready-actions"
}, g6 = { class: "console-link" }, h6 = ["href"], y6 = /* @__PURE__ */ _e({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: a,
      testRunPodConnection: l,
      getNetworkVolumes: r,
      getRunPodGpuTypes: c,
      deployToRunPod: u,
      getDeploymentStatus: d,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: g,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: C,
      getDataCenters: b
    } = ot(), x = k(!1), P = k(""), T = k(!1), E = k(!1), D = k(null), N = k(null), O = k(""), I = k(""), M = k(""), se = k("SECURE"), Y = k("ON_DEMAND"), F = k("my-comfyui-deploy"), z = k([]), Z = k({}), q = k(!1), A = k(null), ee = k(null), W = k(null), ce = k([]), de = k(!1), Ne = k([]), Fe = k(!1), pe = k([]), me = k(!1), oe = k(null), te = k(!1), ue = k(!1), ge = k(null), Te = k(!1), Le = k(null), We = k(null), U = k(null), j = k(!1), le = k(null), H = k(!1), G = k(!1), Q = L(() => Ne.value.find((Ie) => Ie.id === I.value) || null), ve = L(() => O.value ? Ne.value.filter((Ie) => Ie.data_center_id === O.value) : Ne.value), ie = L(() => pe.value.filter((Ie) => Ie.available)), be = L(() => A.value && Z.value[A.value] || null), ae = L(() => {
      if (!A.value) return null;
      const Ie = z.value.find((ne) => ne.name === A.value);
      return (Ie == null ? void 0 : Ie.fetch_url) || null;
    }), Ue = L(() => T.value && I.value && M.value && ae.value && !ue.value && !j.value), Pe = (Ie) => {
      const ne = pe.value.find((_t) => _t.id === M.value);
      if (!ne) return "0.00";
      if (Ie === "SECURE") return (ne.securePrice ?? 0).toFixed(2);
      if (Ie === "COMMUNITY") return (ne.communityPrice ?? 0).toFixed(2);
      const Ke = se.value === "SECURE";
      return Ie === "ON_DEMAND" ? Ke ? (ne.securePrice ?? 0).toFixed(2) : (ne.communityPrice ?? 0).toFixed(2) : Ke ? (ne.secureSpotPrice ?? 0).toFixed(2) : (ne.communitySpotPrice ?? 0).toFixed(2);
    }, fe = L(() => {
      const Ie = pe.value.find(($t) => $t.id === M.value), ne = Ne.value.find(($t) => $t.id === I.value);
      if (!Ie) return null;
      const Ke = se.value === "SECURE", _t = Y.value === "SPOT";
      let At;
      _t ? At = Ke ? Ie.secureSpotPrice ?? 0 : Ie.communitySpotPrice ?? 0 : At = Ke ? Ie.securePrice ?? 0 : Ie.communityPrice ?? 0;
      const jt = ne ? ne.size_gb * 14e-5 : 0, _s = 4e-3;
      return {
        gpu: At,
        volume: jt,
        container: _s,
        total: At + jt + _s
      };
    });
    async function V() {
      await ye(), await Promise.all([$e(), Ae()]);
    }
    async function Ae() {
      q.value = !0;
      try {
        const Ie = await w();
        z.value = Ie.remotes, await Promise.all(
          Ie.remotes.map(async (Ke) => {
            const _t = await p(Ke.name);
            _t && (Z.value[Ke.name] = _t);
          })
        );
        const ne = Ie.remotes.find((Ke) => Ke.is_default);
        ne ? A.value = ne.name : Ie.remotes.length > 0 && (A.value = Ie.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        q.value = !1;
      }
    }
    async function Se(Ie) {
      ee.value = Ie;
      try {
        await _(Ie);
        const ne = await p(Ie);
        ne && (Z.value[Ie] = ne), o("toast", `Fetched from ${Ie}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        ee.value = null;
      }
    }
    async function xe(Ie) {
      W.value = Ie;
      try {
        await C(Ie, { force: !1 });
        const ne = await p(Ie);
        ne && (Z.value[Ie] = ne), o("toast", `Pushed to ${Ie}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        W.value = null;
      }
    }
    function Me(Ie) {
      A.value = Ie;
    }
    async function Re() {
      if (P.value) {
        E.value = !0, D.value = null;
        try {
          const Ie = await l(P.value, !0);
          Ie.status === "success" ? (T.value = !0, N.value = Ie.credit_balance ?? null, D.value = { type: "success", message: Ie.message }, await V()) : D.value = { type: "error", message: Ie.message };
        } catch (Ie) {
          D.value = {
            type: "error",
            message: Ie instanceof Error ? Ie.message : "Connection test failed"
          };
        } finally {
          E.value = !1;
        }
      }
    }
    async function Qe() {
      try {
        await v(), P.value = "", T.value = !1, D.value = null, N.value = null, ce.value = [], O.value = "", Ne.value = [], I.value = "", pe.value = [], M.value = "", oe.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function ye() {
      Fe.value = !0, de.value = !0;
      try {
        const Ie = await r();
        Ne.value = Ie.volumes;
        const ne = /* @__PURE__ */ new Map();
        for (const Ke of Ie.volumes)
          Ke.data_center_id && !ne.has(Ke.data_center_id) && ne.set(Ke.data_center_id, {
            id: Ke.data_center_id,
            name: Ke.data_center_name || Ke.data_center_id,
            available: !0
          });
        if (Ie.volumes.length === 0) {
          const Ke = await b();
          ce.value = Ke.data_centers;
        } else
          ce.value = Array.from(ne.values());
        if (Ne.value.length > 0) {
          const Ke = Ne.value[0];
          I.value = Ke.id, Ke.data_center_id && (O.value = Ke.data_center_id, await X(Ke.data_center_id));
        } else ce.value.length > 0 && (O.value = ce.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Fe.value = !1, de.value = !1;
      }
    }
    async function X(Ie) {
      me.value = !0;
      try {
        const ne = await c(Ie);
        pe.value = ne.gpu_types;
        const Ke = pe.value.find((_t) => _t.available);
        Ke ? M.value = Ke.id : M.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        me.value = !1;
      }
    }
    pt(O, async (Ie) => {
      if (!Ie || Fe.value) return;
      const ne = Ne.value.find((Ke) => Ke.id === I.value);
      ne && ne.data_center_id !== Ie && (I.value = ""), await X(Ie);
    }), pt(I, async (Ie) => {
      if (!Ie) {
        pe.value = [], M.value = "";
        return;
      }
      if (Fe.value) return;
      const ne = Ne.value.find((Ke) => Ke.id === Ie);
      ne && ne.data_center_id !== O.value ? O.value = ne.data_center_id : ne && await X(ne.data_center_id);
    });
    async function $e() {
      te.value = !0;
      try {
        oe.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        te.value = !1;
      }
    }
    async function Ve() {
      if (!(!M.value || !I.value)) {
        j.value = !0, ge.value = null;
        try {
          const Ie = await g();
          le.value = Ie, Ie.can_export ? Ie.warnings.models_without_sources.length > 0 ? G.value = !0 : await at() : H.value = !0;
        } catch (Ie) {
          ge.value = {
            status: "error",
            message: Ie instanceof Error ? Ie.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          j.value = !1;
        }
      }
    }
    async function tt() {
      G.value = !1, await at();
    }
    async function wt() {
      try {
        const Ie = await g();
        le.value = Ie;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function at() {
      ue.value = !0;
      try {
        let Ie;
        if (Y.value === "SPOT") {
          const Ke = pe.value.find((_t) => _t.id === M.value);
          Ke && (Ie = se.value === "SECURE" ? Ke.secureSpotPrice : Ke.communitySpotPrice);
        }
        const ne = await u({
          gpu_type_id: M.value,
          pod_name: F.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: se.value,
          pricing_type: Y.value,
          spot_bid: Ie,
          import_source: ae.value
        });
        ge.value = ne, ne.status === "success" && ne.pod_id ? (Le.value = ne.pod_id, Te.value = !0, Ds(ne.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", ne.message, "error");
      } catch (Ie) {
        ge.value = {
          status: "error",
          message: Ie instanceof Error ? Ie.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        ue.value = !1;
      }
    }
    function Ds(Ie) {
      ys(Ie), U.value = window.setInterval(() => ys(Ie), 3e3);
    }
    function Xt() {
      U.value && (clearInterval(U.value), U.value = null);
    }
    async function ys(Ie) {
      try {
        const ne = await d(Ie);
        We.value = ne, (ne.phase === "READY" || ne.phase === "ERROR" || ne.phase === "STOPPED") && (Xt(), ne.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (ne) {
        console.error("Failed to poll deployment status:", ne);
      }
    }
    function ao() {
      Te.value = !1, Xt(), Le.value = null, We.value = null;
    }
    function Do() {
      var Ie;
      (Ie = We.value) != null && Ie.comfyui_url && window.open(We.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Lo(Ie) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[Ie || ""] || "Initializing...";
    }
    function ws(Ie) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[Ie || ""] ?? 10;
    }
    return et(async () => {
      try {
        const Ie = await m(!0);
        Ie.has_key && Ie.key_preview && (P.value = `****${Ie.key_preview}`, Ie.valid ? (T.value = !0, N.value = Ie.credit_balance ?? null, D.value = { type: "success", message: "Connected to RunPod" }, await V()) : Ie.error && (D.value = { type: "error", message: Ie.error }));
      } catch {
      }
    }), Hs(() => {
      Xt();
    }), (Ie, ne) => {
      var Ke, _t, At, jt, _s, $t;
      return n(), i(B, null, [
        t("div", U8, [
          S(dt, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", A8, [
                t("div", O8, [
                  t("div", z8, [
                    Xe(t("input", {
                      "onUpdate:modelValue": ne[0] || (ne[0] = (Be) => P.value = Be),
                      type: x.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, F8), [
                      [aa, P.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: ne[1] || (ne[1] = (Be) => x.value = !x.value),
                      title: x.value ? "Hide key" : "Show key"
                    }, f(x.value ? "👁" : "👁‍🗨"), 9, V8)
                  ]),
                  T.value ? y("", !0) : (n(), R(he, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: E.value,
                    disabled: !P.value || E.value,
                    onClick: Re
                  }, {
                    default: h(() => [...ne[16] || (ne[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (n(), R(he, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Qe
                  }, {
                    default: h(() => [...ne[17] || (ne[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                D.value ? (n(), i("div", {
                  key: 0,
                  class: Ee(["connection-status", D.value.type])
                }, [
                  t("span", B8, f(D.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", W8, f(D.value.message), 1),
                  N.value !== null ? (n(), i("span", G8, " $" + f(N.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                ne[18] || (ne[18] = t("div", { class: "api-key-help" }, [
                  t("span", { class: "help-icon" }, "i"),
                  t("span", { class: "help-text" }, [
                    $(" Get your API key at "),
                    t("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    $(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          T.value ? (n(), R(dt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", j8, [
                t("div", H8, [
                  ne[19] || (ne[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Xe(t("select", {
                    "onUpdate:modelValue": ne[2] || (ne[2] = (Be) => O.value = Be),
                    class: "config-select",
                    disabled: de.value
                  }, [
                    de.value ? (n(), i("option", q8, "Loading...")) : O.value ? y("", !0) : (n(), i("option", Y8, "Select a region")),
                    (n(!0), i(B, null, we(ce.value, (Be) => (n(), i("option", {
                      key: Be.id,
                      value: Be.id,
                      disabled: !Be.available
                    }, f(Be.id) + " (" + f(Be.name) + ")" + f(Be.available ? "" : " [Unavailable]"), 9, J8))), 128))
                  ], 8, K8), [
                    [hs, O.value]
                  ])
                ]),
                t("div", Q8, [
                  ne[24] || (ne[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Fe.value ? (n(), i("div", X8, "Loading volumes...")) : ve.value.length === 0 ? (n(), i(B, { key: 1 }, [
                    t("div", Z8, [
                      ne[20] || (ne[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", e4, "No volumes in " + f(O.value || "this region"), 1)
                    ]),
                    ne[21] || (ne[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    ne[22] || (ne[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(B, { key: 2 }, [
                    Xe(t("select", {
                      "onUpdate:modelValue": ne[3] || (ne[3] = (Be) => I.value = Be),
                      class: "config-select"
                    }, [
                      (n(!0), i(B, null, we(ve.value, (Be) => (n(), i("option", {
                        key: Be.id,
                        value: Be.id
                      }, f(Be.name) + " (" + f(Be.size_gb) + "GB) ", 9, t4))), 128))
                    ], 512), [
                      [hs, I.value]
                    ]),
                    ne[23] || (ne[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", s4, [
                  ne[25] || (ne[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Xe(t("select", {
                    "onUpdate:modelValue": ne[4] || (ne[4] = (Be) => M.value = Be),
                    class: "config-select",
                    disabled: me.value || !I.value
                  }, [
                    I.value ? me.value ? (n(), i("option", a4, "Loading GPUs...")) : ie.value.length === 0 ? (n(), i("option", l4, "No GPUs available in this region")) : y("", !0) : (n(), i("option", n4, "Select a volume first")),
                    (n(!0), i(B, null, we(ie.value, (Be) => (n(), i("option", {
                      key: Be.id,
                      value: Be.id
                    }, f(Be.displayName) + " (" + f(Be.memoryInGb) + "GB) - $" + f(se.value === "SECURE" ? (Be.securePrice ?? 0).toFixed(2) : (Be.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Be.stockStatus ? `[${Be.stockStatus}]` : ""), 9, i4))), 128))
                  ], 8, o4), [
                    [hs, M.value]
                  ])
                ]),
                t("div", r4, [
                  ne[26] || (ne[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", c4, [
                    t("label", u4, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": ne[5] || (ne[5] = (Be) => se.value = Be),
                        value: "SECURE"
                      }, null, 512), [
                        [ss, se.value]
                      ]),
                      t("span", d4, "Secure ($" + f(Pe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", f4, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": ne[6] || (ne[6] = (Be) => se.value = Be),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ss, se.value]
                      ]),
                      t("span", m4, "Community ($" + f(Pe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", v4, [
                  ne[27] || (ne[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", p4, [
                    t("label", g4, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": ne[7] || (ne[7] = (Be) => Y.value = Be),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ss, Y.value]
                      ]),
                      t("span", h4, "On-Demand ($" + f(Pe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", y4, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": ne[8] || (ne[8] = (Be) => Y.value = Be),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ss, Y.value]
                      ]),
                      t("span", w4, "Spot ($" + f(Pe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", _4, [
                  ne[28] || (ne[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Xe(t("input", {
                    "onUpdate:modelValue": ne[9] || (ne[9] = (Be) => F.value = Be),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Wt, F.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), R(dt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              q.value ? (n(), i("div", k4, "Loading remotes...")) : z.value.length === 0 ? (n(), i("div", b4, [
                ne[30] || (ne[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(he, {
                  variant: "primary",
                  size: "xs",
                  onClick: ne[10] || (ne[10] = (Be) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...ne[29] || (ne[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(B, { key: 2 }, [
                t("div", $4, [
                  (n(!0), i(B, null, we(z.value, (Be) => (n(), R(Qr, {
                    key: Be.name,
                    remote: Be,
                    "sync-status": Z.value[Be.name],
                    "is-selected": A.value === Be.name,
                    "is-fetching": ee.value === Be.name,
                    "is-pushing": W.value === Be.name,
                    onFetch: Se,
                    onPush: xe,
                    onSelect: Me
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                be.value && be.value.ahead > 0 ? (n(), i("div", C4, [
                  ne[31] || (ne[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", x4, [
                    t("strong", null, f(be.value.ahead) + " unpushed commit" + f(be.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(A.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(he, {
                    variant: "primary",
                    size: "xs",
                    loading: W.value === A.value,
                    onClick: ne[11] || (ne[11] = (Be) => A.value && xe(A.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", S4, [
                  S(he, {
                    variant: "link",
                    size: "xs",
                    onClick: ne[12] || (ne[12] = (Be) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...ne[32] || (ne[32] = [
                      $(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), R(dt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", I4, [
                te.value ? (n(), i("div", E4, "Loading environment summary...")) : oe.value ? (n(), i(B, { key: 1 }, [
                  t("div", T4, [
                    ne[33] || (ne[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", R4, f(oe.value.comfyui_version), 1)
                  ]),
                  t("div", P4, [
                    ne[34] || (ne[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", M4, f(oe.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", D4, [
                    ne[35] || (ne[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", L4, f(oe.value.model_count) + " models", 1)
                  ]),
                  oe.value.models_with_sources > 0 ? (n(), i("div", N4, [
                    t("span", U4, "└─ " + f(oe.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  oe.value.models_without_sources > 0 ? (n(), i("div", A4, [
                    t("span", O4, "└─ " + f(oe.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", z4, [
                    ne[36] || (ne[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", F4, f(oe.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", V4, [
                    ne[37] || (ne[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", B4, "~" + f(oe.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value && fe.value ? (n(), R(dt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Be, Zt;
              return [
                t("div", W4, [
                  t("div", G4, [
                    t("div", j4, [
                      ne[42] || (ne[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", H4, [
                        ne[38] || (ne[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", K4, "$" + f(fe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", q4, [
                        ne[39] || (ne[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", Y4, "$" + f(fe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", J4, [
                        ne[40] || (ne[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", Q4, "$" + f(fe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      ne[43] || (ne[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", X4, [
                        ne[41] || (ne[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", Z4, "~$" + f(fe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", e6, [
                      ne[45] || (ne[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", t6, [
                        t("span", null, f(((Be = pe.value.find((cs) => cs.id === M.value)) == null ? void 0 : Be.displayName) || "GPU") + " (" + f(((Zt = pe.value.find((cs) => cs.id === M.value)) == null ? void 0 : Zt.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", s6, [
                        t("span", null, "Region: " + f(O.value), 1)
                      ]),
                      Q.value ? (n(), i("div", o6, [
                        t("span", null, "Volume: " + f(Q.value.name), 1)
                      ])) : y("", !0),
                      Y.value === "SPOT" ? (n(), i("div", n6, [...ne[44] || (ne[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (n(), i("div", a6, [
            S(he, {
              variant: "primary",
              size: "md",
              loading: j.value || ue.value,
              disabled: !Ue.value,
              onClick: Ve
            }, {
              default: h(() => [
                ne[46] || (ne[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                $(" " + f(j.value ? "Validating..." : ue.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ge.value ? (n(), R(dt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              S(Et, {
                status: ge.value.status === "success" ? "synced" : "broken"
              }, no({
                icon: h(() => [
                  $(f(ge.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(ge.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(ge.value.message), 1)
                ]),
                actions: h(() => [
                  S(he, {
                    variant: "ghost",
                    size: "xs",
                    onClick: ne[13] || (ne[13] = (Be) => ge.value = null)
                  }, {
                    default: h(() => [...ne[47] || (ne[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ge.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    S(mt, {
                      label: "Pod ID:",
                      value: ge.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        Te.value ? (n(), R(vt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ke = We.value) == null ? void 0 : Ke.phase) === "READY" || ((_t = We.value) == null ? void 0 : _t.phase) === "ERROR" || ((At = We.value) == null ? void 0 : At.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ao
        }, no({
          body: h(() => {
            var Be, Zt, cs, lo, io, ro, Ks, co, uo, fo, mo, vo;
            return [
              t("div", l6, [
                t("div", i6, [
                  t("div", {
                    class: Ee(["phase-icon", (Zt = (Be = We.value) == null ? void 0 : Be.phase) == null ? void 0 : Zt.toLowerCase()])
                  }, [
                    ((cs = We.value) == null ? void 0 : cs.phase) === "READY" ? (n(), i("span", r6, "✓")) : ((lo = We.value) == null ? void 0 : lo.phase) === "ERROR" ? (n(), i("span", c6, "✕")) : ((io = We.value) == null ? void 0 : io.phase) === "STOPPED" ? (n(), i("span", u6, "○")) : (n(), i("span", d6, "⟳"))
                  ], 2),
                  t("div", f6, [
                    t("div", m6, f(Lo((ro = We.value) == null ? void 0 : ro.phase)), 1),
                    t("div", v6, f(((Ks = We.value) == null ? void 0 : Ks.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(ia, {
                  progress: ws((co = We.value) == null ? void 0 : co.phase),
                  variant: ((uo = We.value) == null ? void 0 : uo.phase) === "ERROR" ? "error" : ((fo = We.value) == null ? void 0 : fo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((mo = We.value) == null ? void 0 : mo.phase) === "READY" ? (n(), i("div", p6, [
                  S(he, {
                    variant: "primary",
                    size: "md",
                    onClick: Do
                  }, {
                    default: h(() => [...ne[48] || (ne[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", g6, [
                  (vo = We.value) != null && vo.console_url ? (n(), i("a", {
                    key: 0,
                    href: We.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, h6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((jt = We.value) == null ? void 0 : jt.phase) === "READY" || ((_s = We.value) == null ? void 0 : _s.phase) === "ERROR" || (($t = We.value) == null ? void 0 : $t.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              S(he, {
                variant: "ghost",
                size: "xs",
                onClick: ao
              }, {
                default: h(() => [...ne[49] || (ne[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        H.value && le.value ? (n(), R(Kr, {
          key: 1,
          issues: le.value.blocking_issues,
          onClose: ne[14] || (ne[14] = (Be) => H.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        G.value && le.value ? (n(), R(qr, {
          key: 2,
          models: le.value.warnings.models_without_sources,
          onConfirm: tt,
          onCancel: ne[15] || (ne[15] = (Be) => G.value = !1),
          onRevalidate: wt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), w6 = /* @__PURE__ */ ke(y6, [["__scopeId", "data-v-522cd4d9"]]), _6 = { class: "worker-header" }, k6 = { class: "worker-status" }, b6 = { class: "worker-name" }, $6 = { class: "worker-actions" }, C6 = { class: "worker-details" }, x6 = { class: "detail-item" }, S6 = { class: "detail-value" }, I6 = {
  key: 0,
  class: "detail-item"
}, E6 = { class: "detail-value" }, T6 = {
  key: 1,
  class: "detail-item"
}, R6 = { class: "detail-value mode-badge" }, P6 = {
  key: 0,
  class: "worker-stats"
}, M6 = {
  key: 0,
  class: "stat-item"
}, D6 = { key: 0 }, L6 = {
  key: 1,
  class: "worker-stats offline"
}, N6 = /* @__PURE__ */ _e({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ee(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", _6, [
        t("div", k6, [
          t("span", {
            class: Ee(["status-dot", e.worker.status])
          }, null, 2),
          t("span", b6, f(e.worker.name), 1)
        ]),
        t("div", $6, [
          e.worker.status === "online" ? (n(), R(he, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (a) => s.$emit("deploy", e.worker))
          }, {
            default: h(() => [...o[2] || (o[2] = [
              $(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          S(he, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (a) => s.$emit("remove", e.worker.name))
          }, {
            default: h(() => [...o[3] || (o[3] = [
              $(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", C6, [
        t("span", x6, [
          t("span", S6, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", I6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", E6, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", T6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", R6, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", P6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", M6, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", D6, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", L6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), U6 = /* @__PURE__ */ ke(N6, [["__scopeId", "data-v-b1be7134"]]), A6 = { class: "add-worker-content" }, O6 = { class: "manual-form" }, z6 = { class: "form-row" }, F6 = { class: "form-row-inline" }, V6 = { class: "form-field flex-2" }, B6 = { class: "form-field flex-1" }, W6 = { class: "form-row" }, G6 = { class: "api-key-wrapper" }, j6 = ["type"], H6 = { class: "result-icon" }, K6 = { class: "result-content" }, q6 = { class: "result-message" }, Y6 = {
  key: 0,
  class: "result-detail"
}, J6 = { class: "modal-actions" }, Q6 = /* @__PURE__ */ _e({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ot(), l = js({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = k(!1), c = k(!1), u = k(!1), d = k(null), m = L(() => l.host && l.port && l.apiKey), v = L(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
      if (m.value) {
        c.value = !0, d.value = null;
        try {
          const p = await a({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          p.status === "success" ? (d.value = {
            type: "success",
            message: p.message,
            gpu_info: p.gpu_info
          }, !l.name && p.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : d.value = {
            type: "error",
            message: p.message
          };
        } catch (p) {
          d.value = {
            type: "error",
            message: p instanceof Error ? p.message : "Connection test failed"
          };
        } finally {
          c.value = !1;
        }
      }
    }
    function w() {
      v.value && (u.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (p, _) => (n(), R(vt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", A6, [
          t("div", O6, [
            t("div", z6, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Xe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Wt, l.name]
              ])
            ]),
            t("div", F6, [
              t("div", V6, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Wt, l.host]
                ])
              ]),
              t("div", B6, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (C) => l.port = C),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Wt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", W6, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", G6, [
                Xe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, j6), [
                  [aa, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (C) => r.value = !r.value),
                  type: "button"
                }, f(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              _[10] || (_[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (n(), i("div", {
              key: 0,
              class: Ee(["test-result", d.value.type])
            }, [
              t("span", H6, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", K6, [
                t("span", q6, f(d.value.message), 1),
                d.value.gpu_info ? (n(), i("span", Y6, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", J6, [
          S(he, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: g
          }, {
            default: h(() => [..._[11] || (_[11] = [
              $(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(he, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: w
          }, {
            default: h(() => [..._[12] || (_[12] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), X6 = /* @__PURE__ */ ke(Q6, [["__scopeId", "data-v-07a00732"]]), Z6 = { class: "discovered-content" }, eI = {
  key: 0,
  class: "workers-list"
}, tI = { class: "worker-info" }, sI = { class: "worker-name" }, oI = { class: "worker-address" }, nI = {
  key: 0,
  class: "worker-gpu"
}, aI = {
  key: 1,
  class: "empty-state"
}, lI = {
  key: 2,
  class: "api-key-section"
}, iI = { class: "selected-worker" }, rI = { class: "selected-name" }, cI = { class: "selected-address" }, uI = { class: "form-row" }, dI = { class: "api-key-wrapper" }, fI = ["type"], mI = { class: "result-icon" }, vI = { class: "result-message" }, pI = { class: "modal-actions" }, gI = /* @__PURE__ */ _e({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ot(), l = k(null), r = k(""), c = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, r.value = "", m.value = null, await yt(), (p = d.value) == null || p.focus();
    }
    async function g() {
      if (!(!l.value || !r.value)) {
        u.value = !0, m.value = null;
        try {
          const w = await a({
            host: l.value.host,
            port: l.value.port,
            api_key: r.value
          });
          w.status === "success" ? o("add", {
            name: l.value.name,
            host: l.value.host,
            port: l.value.port,
            api_key: r.value
          }) : m.value = {
            type: "error",
            message: w.message
          };
        } catch (w) {
          m.value = {
            type: "error",
            message: w instanceof Error ? w.message : "Connection failed"
          };
        } finally {
          u.value = !1;
        }
      }
    }
    return (w, p) => (n(), R(vt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", Z6, [
          e.workers.length > 0 ? (n(), i("div", eI, [
            (n(!0), i(B, null, we(e.workers, (_) => (n(), i("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", tI, [
                t("span", sI, f(_.name), 1),
                t("span", oI, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (n(), i("span", nI, f(_.gpu_info), 1)) : y("", !0)
              ]),
              S(he, {
                variant: "primary",
                size: "xs",
                onClick: (C) => v(_)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  $(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", aI, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", lI, [
            t("div", iI, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", rI, f(l.value.name), 1),
              t("span", cI, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", uI, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", dI, [
                Xe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => r.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Jt(g, ["enter"])
                }, null, 40, fI), [
                  [aa, r.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (_) => c.value = !c.value),
                  type: "button"
                }, f(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (n(), i("div", {
              key: 0,
              class: Ee(["test-result", m.value.type])
            }, [
              t("span", mI, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", vI, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", pI, [
          l.value ? (n(), R(he, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (_) => {
              l.value = null, r.value = "", m.value = null;
            })
          }, {
            default: h(() => [...p[9] || (p[9] = [
              $(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (n(), R(he, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !r.value || u.value,
            onClick: g
          }, {
            default: h(() => [...p[10] || (p[10] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), hI = /* @__PURE__ */ ke(gI, [["__scopeId", "data-v-5a3e40a4"]]), yI = { class: "deploy-content" }, wI = { class: "section" }, _I = {
  key: 0,
  class: "loading-text"
}, kI = {
  key: 1,
  class: "empty-remotes"
}, bI = {
  key: 2,
  class: "remotes-list"
}, $I = { class: "section" }, CI = { class: "mode-options" }, xI = { class: "mode-option" }, SI = ["disabled"], II = { class: "mode-option" }, EI = { class: "section" }, TI = {
  key: 0,
  class: "section"
}, RI = { class: "summary-row" }, PI = {
  key: 1,
  class: "sync-warning"
}, MI = { class: "warning-content" }, DI = { class: "modal-actions" }, LI = /* @__PURE__ */ _e({
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
      getDeploySummary: d,
      deployToWorker: m
    } = ot(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), b = k(o.worker.mode || "native"), x = k(""), P = k(null), T = k(!1), E = L(() => p.value && g.value[p.value] || null), D = L(() => {
      if (!p.value) return null;
      const z = v.value.find((Z) => Z.name === p.value);
      return (z == null ? void 0 : z.fetch_url) || null;
    }), N = L(() => D.value && !T.value);
    async function O() {
      w.value = !0;
      try {
        const z = await l();
        v.value = z.remotes, await Promise.all(
          z.remotes.map(async (q) => {
            const A = await r(q.name);
            A && (g.value[q.name] = A);
          })
        );
        const Z = z.remotes.find((q) => q.is_default);
        Z ? p.value = Z.name : z.remotes.length > 0 && (p.value = z.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        P.value = await d();
      } catch {
      }
    }
    async function M(z) {
      _.value = z;
      try {
        await c(z);
        const Z = await r(z);
        Z && (g.value[z] = Z), a("toast", `Fetched from ${z}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function se(z) {
      C.value = z;
      try {
        await u(z, { force: !1 });
        const Z = await r(z);
        Z && (g.value[z] = Z), a("toast", `Pushed to ${z}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function Y(z) {
      p.value = z;
    }
    async function F() {
      if (D.value) {
        T.value = !0;
        try {
          const z = await m(o.worker.name, {
            import_source: D.value,
            mode: b.value,
            name: x.value || void 0
          });
          z.id ? (a("toast", `Deployment started: ${z.name || z.id}`, "success"), a("deployed")) : z.status === "error" ? a("toast", z.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (z) {
          a("toast", z instanceof Error ? z.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return et(() => {
      O(), I();
    }), (z, Z) => (n(), R(vt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: Z[5] || (Z[5] = (q) => z.$emit("close"))
    }, {
      body: h(() => [
        t("div", yI, [
          t("div", wI, [
            Z[7] || (Z[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (n(), i("div", _I, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", kI, [...Z[6] || (Z[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", bI, [
              (n(!0), i(B, null, we(v.value, (q) => (n(), R(Qr, {
                key: q.name,
                remote: q,
                "sync-status": g.value[q.name],
                "is-selected": p.value === q.name,
                "is-fetching": _.value === q.name,
                "is-pushing": C.value === q.name,
                onFetch: M,
                onPush: se,
                onSelect: Y
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", $I, [
            Z[10] || (Z[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", CI, [
              t("label", xI, [
                Xe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": Z[0] || (Z[0] = (q) => b.value = q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, SI), [
                  [ss, b.value]
                ]),
                Z[8] || (Z[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", II, [
                Xe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": Z[1] || (Z[1] = (q) => b.value = q),
                  value: "native"
                }, null, 512), [
                  [ss, b.value]
                ]),
                Z[9] || (Z[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", EI, [
            Z[11] || (Z[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Xe(t("input", {
              "onUpdate:modelValue": Z[2] || (Z[2] = (q) => x.value = q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Wt, x.value]
            ])
          ]),
          P.value ? (n(), i("div", TI, [
            Z[12] || (Z[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", RI, " ComfyUI: " + f(P.value.comfyui_version) + " • " + f(P.value.node_count) + " nodes • " + f(P.value.model_count) + " models • " + f(P.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          E.value && E.value.ahead > 0 ? (n(), i("div", PI, [
            Z[14] || (Z[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", MI, [
              t("strong", null, f(E.value.ahead) + " unpushed commit" + f(E.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(he, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: Z[3] || (Z[3] = (q) => p.value && se(p.value))
            }, {
              default: h(() => [...Z[13] || (Z[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", DI, [
          S(he, {
            variant: "ghost",
            size: "sm",
            onClick: Z[4] || (Z[4] = (q) => z.$emit("close"))
          }, {
            default: h(() => [...Z[15] || (Z[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(he, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !N.value || T.value,
            onClick: F
          }, {
            default: h(() => [...Z[16] || (Z[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), NI = /* @__PURE__ */ ke(LI, [["__scopeId", "data-v-c12720d3"]]), UI = { class: "custom-tab" }, AI = { class: "section-header" }, OI = { class: "section-actions" }, zI = { class: "workers-content" }, FI = {
  key: 0,
  class: "loading-state"
}, VI = {
  key: 1,
  class: "empty-state"
}, BI = {
  key: 2,
  class: "workers-list"
}, WI = { class: "scan-icon" }, GI = { class: "scan-message" }, jI = /* @__PURE__ */ _e({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: c
    } = ot(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), C = k(null);
    async function b() {
      m.value = !0;
      try {
        const O = await a();
        u.value = O.workers;
      } catch (O) {
        o("toast", O instanceof Error ? O.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      v.value = !0, C.value = null;
      try {
        const O = await c(), I = O.discovered.filter(
          (M) => !u.value.some((se) => se.host === M.host && se.port === M.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : O.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (O) {
        o("toast", O instanceof Error ? O.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function P(O) {
      try {
        await l(O), o("toast", `Worker '${O.name}' added`, "success"), w.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function T(O) {
      try {
        await l(O), o("toast", `Worker '${O.name}' added`, "success"), p.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function E(O) {
      g.value = O;
      try {
        await r(O), o("toast", `Worker '${O}' removed`, "success"), await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function D(O) {
      _.value = O;
    }
    function N() {
      _.value = null, o("deployed");
    }
    return et(() => {
      b();
    }), (O, I) => (n(), i("div", UI, [
      t("div", AI, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", OI, [
          S(he, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: x
          }, {
            default: h(() => [...I[6] || (I[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(he, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (M) => w.value = !0)
          }, {
            default: h(() => [...I[7] || (I[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", zI, [
        m.value && u.value.length === 0 ? (n(), i("div", FI, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (n(), i("div", VI, [...I[10] || (I[10] = [
          t("div", { class: "empty-card" }, [
            t("span", { class: "empty-text" }, "No workers registered yet"),
            t("p", { class: "empty-help" }, " To add a custom worker: "),
            t("ol", { class: "setup-steps" }, [
              t("li", null, [
                $("On your GPU machine, run:"),
                t("br"),
                t("code", null, "cg-deploy worker setup"),
                t("br"),
                t("code", null, "cg-deploy worker up --broadcast")
              ]),
              t("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (n(), i("div", BI, [
          (n(!0), i(B, null, we(u.value, (M) => (n(), R(U6, {
            key: M.name,
            worker: M,
            "is-action-loading": g.value === M.name,
            onDeploy: D,
            onRemove: E
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (n(), i("div", {
        key: 0,
        class: Ee(["scan-result", C.value.type])
      }, [
        t("span", WI, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", GI, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (M) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (n(), R(hI, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (M) => p.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (n(), R(X6, {
        key: 2,
        onClose: I[3] || (I[3] = (M) => w.value = !1),
        onAdd: P
      })) : y("", !0),
      _.value ? (n(), R(NI, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (M) => _.value = null),
        onToast: I[5] || (I[5] = (M, se) => o("toast", M, se)),
        onDeployed: N
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), HI = /* @__PURE__ */ ke(jI, [["__scopeId", "data-v-1637dead"]]), Ia = "ComfyGit.Deploy.GitHubPAT";
function Xr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function KI(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function qI() {
  function e() {
    try {
      return localStorage.getItem(Ia);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Ia, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ia);
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
    isRemoteHttps: KI
  };
}
const YI = { class: "settings-content" }, JI = { class: "settings-section" }, QI = {
  key: 0,
  class: "ssh-warning"
}, XI = { class: "form-row" }, ZI = { class: "token-wrapper" }, eE = ["type"], tE = { class: "result-icon" }, sE = { class: "result-message" }, oE = { class: "token-actions" }, nE = /* @__PURE__ */ _e({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = qI(), { getRemotes: u, testGitAuth: d } = ot(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = L(() => c());
    et(async () => {
      var T;
      const P = a();
      P && (m.value = P);
      try {
        const D = (T = (await u()).remotes) == null ? void 0 : T.find((N) => N.name === "origin");
        D && Xr(D.url) && (p.value = !0);
      } catch {
      }
    });
    async function C() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const P = await d(m.value);
          w.value = {
            type: P.status === "success" ? "success" : "error",
            message: P.message
          };
        } catch (P) {
          w.value = {
            type: "error",
            message: P instanceof Error ? P.message : "Connection test failed"
          };
        } finally {
          g.value = !1;
        }
      }
    }
    function b() {
      m.value && (l(m.value), o("saved"), o("close"));
    }
    function x() {
      r(), m.value = "", w.value = null;
    }
    return (P, T) => (n(), R(vt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (E) => P.$emit("close"))
    }, {
      body: h(() => [
        t("div", YI, [
          t("div", JI, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (n(), i("div", QI, [...T[3] || (T[3] = [
              t("span", { class: "warning-icon" }, "!", -1),
              t("div", { class: "warning-content" }, [
                t("strong", null, "SSH remote detected"),
                t("p", null, [
                  $("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  t("code", null, "git@github.com:..."),
                  $(" to "),
                  t("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            t("div", XI, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", ZI, [
                Xe(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (E) => m.value = E),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, eE), [
                  [aa, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (E) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (n(), i("div", {
              key: 1,
              class: Ee(["test-result", w.value.type])
            }, [
              t("span", tE, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", sE, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", oE, [
              S(he, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...T[6] || (T[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (n(), R(he, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: x
              }, {
                default: h(() => [...T[7] || (T[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        S(he, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: b
        }, {
          default: h(() => [...T[10] || (T[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), aE = /* @__PURE__ */ ke(nE, [["__scopeId", "data-v-b21588ad"]]), lE = /* @__PURE__ */ _e({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: a,
      isLoading: l,
      liveInstanceCount: r,
      refreshInstances: c,
      stopInstance: u,
      startInstance: d,
      terminateInstance: m,
      startPolling: v,
      stopPolling: g
    } = Jr(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), b = k(null), x = L(() => [
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
    async function P(O) {
      C.value = O.id;
      try {
        await u(O), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function T(O) {
      C.value = O.id;
      try {
        await d(O), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function E(O) {
      b.value = O;
    }
    async function D() {
      const O = b.value;
      if (O) {
        b.value = null, C.value = O.id;
        try {
          await m(O), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function N() {
      await c(), _.value = "instances";
    }
    return et(() => {
      c(), v();
    }), Hs(() => {
      g();
    }), (O, I) => (n(), i(B, null, [
      S(Nt, null, {
        header: h(() => [
          S(Ut, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (M) => w.value = !0)
          }, {
            actions: h(() => [
              S(he, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (M) => p.value = !0)
              }, {
                default: h(() => [...I[10] || (I[10] = [
                  $(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Br, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (M) => _.value = M),
            tabs: x.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (n(), R(b8, {
            key: 0,
            instances: He(a),
            "is-loading": He(l),
            "action-loading-id": C.value,
            onRefresh: He(c),
            onStop: P,
            onStart: T,
            onTerminate: E
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (n(), R(w6, {
            key: 1,
            onToast: I[3] || (I[3] = (M, se) => o("toast", M, se)),
            onNavigate: I[4] || (I[4] = (M) => o("navigate", M)),
            onDeployed: N
          })) : y("", !0),
          _.value === "custom" ? (n(), R(HI, {
            key: 2,
            onToast: I[5] || (I[5] = (M, se) => o("toast", M, se)),
            onDeployed: N
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (n(), R(ml, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: D,
        onCancel: I[6] || (I[6] = (M) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      S(rs, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (M) => w.value = !1)
      }, {
        content: h(() => [...I[11] || (I[11] = [
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
                  $(" - All committed workflows")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  $(" - Installed automatically")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  $(" - Downloaded from sources (when available)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  $(" - Environment settings")
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
      p.value ? (n(), R(aE, {
        key: 1,
        onClose: I[8] || (I[8] = (M) => p.value = !1),
        onSaved: I[9] || (I[9] = (M) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), iE = /* @__PURE__ */ ke(lE, [["__scopeId", "data-v-d4e32a10"]]), rE = { class: "header-info" }, cE = { class: "commit-hash" }, uE = {
  key: 0,
  class: "commit-refs"
}, dE = { class: "commit-message" }, fE = { class: "commit-date" }, mE = {
  key: 0,
  class: "loading"
}, vE = {
  key: 1,
  class: "changes-section"
}, pE = { class: "stats-row" }, gE = { class: "stat" }, hE = { class: "stat insertions" }, yE = { class: "stat deletions" }, wE = {
  key: 0,
  class: "change-group"
}, _E = {
  key: 1,
  class: "change-group"
}, kE = {
  key: 0,
  class: "version"
}, bE = {
  key: 2,
  class: "change-group"
}, $E = { class: "change-item" }, CE = /* @__PURE__ */ _e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ot(), a = k(null), l = k(!0), r = L(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = L(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return et(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), R(vt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", rE, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", cE, f(((m = a.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = a.value) == null ? void 0 : g.refs) != null && w.length ? (n(), i("span", uE, [
              (n(!0), i(B, null, we(a.value.refs, (p) => (n(), i("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          S(De, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (p) => u.$emit("close"))
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
        var m, v;
        return [
          t("div", dE, f(((m = a.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", fE, f(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", mE, "Loading details...")) : a.value ? (n(), i("div", vE, [
            t("div", pE, [
              t("span", gE, f(a.value.stats.files_changed) + " files", 1),
              t("span", hE, "+" + f(a.value.stats.insertions), 1),
              t("span", yE, "-" + f(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", wE, [
              S(Xo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(B, null, we(a.value.changes.workflows.added, (g) => (n(), i("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (n(!0), i(B, null, we(a.value.changes.workflows.modified, (g) => (n(), i("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (n(!0), i(B, null, we(a.value.changes.workflows.deleted, (g) => (n(), i("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", _E, [
              S(Xo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(B, null, we(a.value.changes.nodes.added, (g) => (n(), i("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (n(), i("span", kE, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(B, null, we(a.value.changes.nodes.removed, (g) => (n(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", bE, [
              S(Xo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", $E, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        S(De, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
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
}), xE = /* @__PURE__ */ ke(CE, [["__scopeId", "data-v-d256ff6d"]]), SE = { class: "popover-header" }, IE = { class: "popover-body" }, EE = {
  key: 0,
  class: "changes-summary"
}, TE = {
  key: 0,
  class: "change-item"
}, RE = {
  key: 1,
  class: "change-item"
}, PE = {
  key: 2,
  class: "change-item"
}, ME = {
  key: 3,
  class: "change-item"
}, DE = {
  key: 4,
  class: "change-item"
}, LE = {
  key: 5,
  class: "change-item"
}, NE = {
  key: 1,
  class: "no-changes"
}, UE = {
  key: 2,
  class: "loading"
}, AE = {
  key: 3,
  class: "issues-error"
}, OE = { class: "error-header" }, zE = { class: "error-title" }, FE = { class: "issues-list" }, VE = { class: "workflow-state" }, BE = { class: "message-section" }, WE = { class: "popover-footer" }, GE = {
  key: 1,
  class: "commit-popover"
}, jE = { class: "popover-header" }, HE = { class: "popover-body" }, KE = {
  key: 0,
  class: "changes-summary"
}, qE = {
  key: 0,
  class: "change-item"
}, YE = {
  key: 1,
  class: "change-item"
}, JE = {
  key: 2,
  class: "change-item"
}, QE = {
  key: 3,
  class: "change-item"
}, XE = {
  key: 4,
  class: "change-item"
}, ZE = {
  key: 5,
  class: "change-item"
}, eT = {
  key: 1,
  class: "no-changes"
}, tT = {
  key: 2,
  class: "loading"
}, sT = {
  key: 3,
  class: "issues-error"
}, oT = { class: "error-header" }, nT = { class: "error-title" }, aT = { class: "issues-list" }, lT = { class: "workflow-state" }, iT = { class: "message-section" }, rT = { class: "popover-footer" }, cT = /* @__PURE__ */ _e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ot(), r = k(""), c = k(!1), u = k(!1), d = L(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = L(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = L(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = L(() => v.value.length > 0), w = L(() => g.value && !u.value);
    async function p() {
      var _, C, b, x;
      if (!(g.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const P = await l(r.value.trim(), u.value);
          if (P.status === "success") {
            const T = `Committed: ${((_ = P.summary) == null ? void 0 : _.new) || 0} new, ${((C = P.summary) == null ? void 0 : C.modified) || 0} modified, ${((b = P.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            a("committed", { success: !0, message: T });
          } else if (P.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (P.status === "blocked") {
            const T = ((x = P.issues) == null ? void 0 : x.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: P.message || "Commit failed" });
        } catch (P) {
          a("committed", { success: !1, message: P instanceof Error ? P.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (n(), R(bt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (b) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = ft(() => {
          }, ["stop"]))
        }, [
          t("div", SE, [
            C[11] || (C[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (b) => a("close"))
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
          t("div", IE, [
            e.status && d.value ? (n(), i("div", EE, [
              e.status.workflows.new.length ? (n(), i("div", TE, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", RE, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", PE, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", ME, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", DE, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (n(), i("div", LE, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", NE, " No changes to commit ")) : (n(), i("div", UE, " Loading... ")),
            g.value ? (n(), i("div", AE, [
              t("div", OE, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", zE, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", FE, [
                (n(!0), i(B, null, we(v.value, (b) => (n(), i("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", VE, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              S(Hn, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = (b) => u.value = b),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", BE, [
              S(Ba, {
                modelValue: r.value,
                "onUpdate:modelValue": C[2] || (C[2] = (b) => r.value = b),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", WE, [
            S(De, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (b) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: h(() => [
                $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", GE, [
      t("div", jE, [
        C[22] || (C[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (b) => a("close"))
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
      t("div", HE, [
        e.status && d.value ? (n(), i("div", KE, [
          e.status.workflows.new.length ? (n(), i("div", qE, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", YE, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", JE, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", QE, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", XE, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (n(), i("div", ZE, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", eT, " No changes to commit ")) : (n(), i("div", tT, " Loading... ")),
        g.value ? (n(), i("div", sT, [
          t("div", oT, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", nT, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", aT, [
            (n(!0), i(B, null, we(v.value, (b) => (n(), i("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", lT, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          S(Hn, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = (b) => u.value = b),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", iT, [
          S(Ba, {
            modelValue: r.value,
            "onUpdate:modelValue": C[8] || (C[8] = (b) => r.value = b),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", rT, [
        S(De, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (b) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(De, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: h(() => [
            $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Zr = /* @__PURE__ */ ke(cT, [["__scopeId", "data-v-5f897631"]]), uT = { class: "modal-header" }, dT = { class: "modal-body" }, fT = { class: "switch-message" }, mT = { class: "switch-details" }, vT = { class: "modal-actions" }, pT = /* @__PURE__ */ _e({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(bt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ft(() => {
          }, ["stop"]))
        }, [
          t("div", uT, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", dT, [
            t("p", fT, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              t("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              t("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", mT, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", vT, [
            S(he, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(he, {
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
}), gT = /* @__PURE__ */ ke(pT, [["__scopeId", "data-v-e9c5253e"]]), hT = {
  key: 0,
  class: "modal-overlay"
}, yT = { class: "modal-content" }, wT = { class: "modal-body" }, _T = { class: "progress-info" }, kT = { class: "progress-percentage" }, bT = { class: "progress-state" }, $T = { class: "switch-steps" }, CT = { class: "step-icon" }, xT = { class: "step-label" }, ST = /* @__PURE__ */ _e({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = L(() => {
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
    }), a = L(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = L(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === s.state);
      return r.map((u, d) => {
        let m = "pending", v = "○";
        return d < c ? (m = "completed", v = "✓") : d === c && (m = "active", v = "⟳"), {
          ...u,
          status: m,
          icon: v
        };
      });
    });
    return (r, c) => (n(), R(bt, { to: "body" }, [
      e.show ? (n(), i("div", hT, [
        t("div", yT, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", wT, [
            S(ia, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", _T, [
              t("div", kT, f(e.progress) + "%", 1),
              t("div", bT, f(o.value), 1)
            ]),
            t("div", $T, [
              (n(!0), i(B, null, we(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Ee(["switch-step", u.status])
              }, [
                t("span", CT, f(u.icon), 1),
                t("span", xT, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), IT = /* @__PURE__ */ ke(ST, [["__scopeId", "data-v-768a5078"]]), ET = { class: "modal-header" }, TT = { class: "modal-body" }, RT = {
  key: 0,
  class: "node-section"
}, PT = { class: "node-list" }, MT = {
  key: 1,
  class: "node-section"
}, DT = { class: "node-list" }, LT = { class: "modal-actions" }, NT = /* @__PURE__ */ _e({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(bt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ft(() => {
          }, ["stop"]))
        }, [
          t("div", ET, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", TT, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", RT, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", PT, [
                (n(!0), i(B, null, we(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + f(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", MT, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", DT, [
                (n(!0), i(B, null, we(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + f(a), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", LT, [
            S(he, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(he, {
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
}), UT = /* @__PURE__ */ ke(NT, [["__scopeId", "data-v-7cad7518"]]), AT = [
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
], OT = "v0.0.22", zT = "Akatz", FT = { class: "social-buttons" }, VT = ["title", "aria-label", "onClick"], BT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, WT = ["d"], GT = ["title", "aria-label", "onClick"], jT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, HT = ["d"], KT = /* @__PURE__ */ _e({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", FT, [
      (n(!0), i(B, null, we(He(AT), (l) => (n(), i(B, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          $(f(l.label) + " ", 1),
          (n(), i("svg", BT, [
            t("path", {
              d: l.iconPath
            }, null, 8, WT)
          ]))
        ], 8, VT)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", jT, [
            t("path", {
              d: l.iconPath
            }, null, 8, HT)
          ]))
        ], 8, GT))
      ], 64))), 128))
    ]));
  }
}), ec = /* @__PURE__ */ ke(KT, [["__scopeId", "data-v-4f846342"]]), qT = { class: "footer-info" }, YT = { class: "version" }, JT = { class: "made-by" }, QT = /* @__PURE__ */ _e({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (n(), i("div", qT, [
      t("span", YT, f(He(OT)), 1),
      t("span", JT, [
        o[0] || (o[0] = $(" made with ", -1)),
        o[1] || (o[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + f(He(zT)), 1)
      ])
    ]));
  }
}), tc = /* @__PURE__ */ ke(QT, [["__scopeId", "data-v-8bc3db0a"]]), XT = /* @__PURE__ */ _e({
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
    return (r, c) => (n(), R(vt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        S(Vr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          S(De, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(De, {
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
}), ZT = /* @__PURE__ */ ke(XT, [["__scopeId", "data-v-fac00ae7"]]), e7 = { class: "header-actions" }, t7 = {
  key: 0,
  class: "wizard-step"
}, s7 = { class: "form-field" }, o7 = ["placeholder"], n7 = {
  key: 0,
  class: "form-error"
}, a7 = { class: "form-field form-field--checkbox" }, l7 = { class: "form-checkbox" }, i7 = {
  key: 0,
  class: "form-field"
}, r7 = ["placeholder"], c7 = {
  key: 0,
  class: "form-info"
}, u7 = {
  key: 1,
  class: "form-suggestion"
}, d7 = {
  key: 2,
  class: "form-error"
}, f7 = {
  key: 3,
  class: "form-info"
}, m7 = {
  key: 1,
  class: "wizard-step"
}, v7 = {
  key: 0,
  class: "progress-check-loading"
}, p7 = {
  key: 0,
  class: "cli-warning"
}, g7 = { class: "cli-warning-header" }, h7 = {
  key: 1,
  class: "env-landing"
}, y7 = { class: "env-list" }, w7 = ["value"], _7 = { class: "env-name" }, k7 = {
  key: 2,
  class: "env-create"
}, b7 = { class: "form-field" }, $7 = { class: "form-field" }, C7 = ["value"], x7 = { class: "form-field" }, S7 = ["disabled"], I7 = ["value"], E7 = { class: "form-field" }, T7 = ["value"], R7 = { class: "form-field form-field--checkbox" }, P7 = { class: "form-checkbox" }, M7 = {
  key: 0,
  class: "form-error"
}, D7 = {
  key: 1,
  class: "env-creating"
}, L7 = { class: "creating-intro" }, N7 = {
  key: 3,
  class: "env-import"
}, U7 = { class: "wizard-footer" }, A7 = { class: "wizard-footer-actions" }, ho = 10, O7 = 600 * 1e3, ci = 1800 * 1e3, z7 = /* @__PURE__ */ _e({
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
      getImportProgress: m,
      getComfyUIReleases: v
    } = ot(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), b = k(!1), x = k(!1), P = k(null), T = k(o.initialStep === 2), E = k(o.defaultPath), D = k(!!o.detectedModelsDir), N = k(o.detectedModelsDir || ""), O = k(null), I = k(null), M = k(null), se = k(null), Y = k("my-new-env"), F = k(jr), z = k("latest"), Z = k(Hr), q = k(!0), A = k(null), ee = k(null), W = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ce = k(!1), de = k(!1), Ne = k(!1), Fe = k({ progress: 0, message: "" }), pe = k({ progress: 0, message: "" }), me = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], oe = k(0), te = k(null), ue = k(0), ge = k(null), Te = L(() => {
      var Se, xe;
      const fe = (Se = E.value) == null ? void 0 : Se.trim(), V = !O.value, Ae = !D.value || !I.value && ((xe = N.value) == null ? void 0 : xe.trim());
      return fe && V && Ae;
    }), Le = L(() => {
      var fe;
      return (fe = Y.value) == null ? void 0 : fe.trim();
    }), We = L(() => !!(g.value === 2 || ee.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), U = L(() => ee.value || o.workspacePath || null);
    async function j() {
      var fe;
      if (O.value = null, !!((fe = E.value) != null && fe.trim()))
        try {
          const V = await c({ path: E.value, type: "workspace" });
          V.valid || (O.value = V.error || "Invalid path");
        } catch (V) {
          O.value = V instanceof Error ? V.message : "Validation failed";
        }
    }
    async function le() {
      var fe;
      if (I.value = null, M.value = null, se.value = null, !!((fe = N.value) != null && fe.trim()))
        try {
          const V = await c({ path: N.value, type: "models" });
          if (V.valid)
            se.value = V.model_count ?? null;
          else if (I.value = V.error || "Invalid path", V.suggestion) {
            M.value = V.suggestion, N.value = V.suggestion, I.value = null;
            const Ae = await c({ path: V.suggestion, type: "models" });
            Ae.valid && (se.value = Ae.model_count ?? null);
          }
        } catch (V) {
          I.value = V instanceof Error ? V.message : "Validation failed";
        }
    }
    async function H() {
      var fe, V, Ae, Se, xe;
      if (O.value = null, I.value = null, await j(), (fe = O.value) != null && fe.includes("already exists")) {
        O.value = null, ee.value = ((V = E.value) == null ? void 0 : V.trim()) || o.defaultPath, g.value = 2, Q();
        return;
      }
      if (!O.value && !(D.value && ((Ae = N.value) != null && Ae.trim()) && (await le(), I.value))) {
        de.value = !0;
        try {
          await l({
            workspace_path: ((Se = E.value) == null ? void 0 : Se.trim()) || o.defaultPath,
            models_directory: D.value && ((xe = N.value) == null ? void 0 : xe.trim()) || null
          }), oe.value = 0, te.value = Date.now();
          const Me = setInterval(async () => {
            var Re;
            if (te.value && Date.now() - te.value > O7) {
              clearInterval(Me), de.value = !1, O.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Qe = await r();
              if (oe.value = 0, Qe.state === "idle" && de.value) {
                clearInterval(Me), de.value = !1, O.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Fe.value = { progress: Qe.progress, message: Qe.message }, Qe.state === "complete" ? (clearInterval(Me), de.value = !1, ee.value = ((Re = E.value) == null ? void 0 : Re.trim()) || o.defaultPath, g.value = 2, Q()) : Qe.state === "error" && (clearInterval(Me), de.value = !1, O.value = Qe.error || "Workspace creation failed");
            } catch (Qe) {
              oe.value++, console.warn(`Polling failure ${oe.value}/${ho}:`, Qe), oe.value >= ho && (clearInterval(Me), de.value = !1, O.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Me) {
          de.value = !1, O.value = Me instanceof Error ? Me.message : "Failed to create workspace";
        }
      }
    }
    async function G() {
      Ne.value = !0, A.value = null;
      try {
        const fe = {
          name: Y.value.trim() || "my-new-env",
          python_version: F.value,
          comfyui_version: z.value,
          torch_backend: Z.value,
          switch_after: q.value,
          workspace_path: ee.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(fe)).status === "started") {
          ue.value = 0, ge.value = Date.now();
          const Ae = setInterval(async () => {
            if (ge.value && Date.now() - ge.value > ci) {
              clearInterval(Ae), Ne.value = !1, A.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Se = await d();
              if (ue.value = 0, Se.state === "idle" && Ne.value) {
                clearInterval(Ae), Ne.value = !1, A.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (pe.value = {
                progress: Se.progress ?? 0,
                message: Se.message,
                phase: Se.phase
              }, Se.state === "complete") {
                clearInterval(Ae), Ne.value = !1;
                const xe = Se.environment_name || fe.name;
                q.value ? a("complete", xe, ee.value) : (p.value = "landing", a("environment-created-no-switch", xe));
              } else Se.state === "error" && (clearInterval(Ae), Ne.value = !1, A.value = Se.error || "Environment creation failed");
            } catch (Se) {
              ue.value++, console.warn(`Polling failure ${ue.value}/${ho}:`, Se), ue.value >= ho && (clearInterval(Ae), Ne.value = !1, A.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        Ne.value = !1, A.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function Q() {
      ce.value = !0;
      try {
        W.value = await v();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        ce.value = !1;
      }
    }
    function ve() {
      w.value && a("switch-environment", w.value, ee.value);
    }
    function ie() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function be(fe, V) {
      C.value = !1, V ? a("complete", fe, ee.value) : (a("environment-created-no-switch", fe), p.value = "landing");
    }
    function ae() {
    }
    et(async () => {
      if (o.detectedModelsDir && (N.value = o.detectedModelsDir), o.workspacePath && (ee.value = o.workspacePath), g.value === 2) {
        Q();
        const fe = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Ue(), clearTimeout(fe), T.value = !1;
      }
    });
    async function Ue() {
      try {
        const fe = await d();
        if (console.log("[ComfyGit] Create progress check:", fe.state, fe), fe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", fe.environment_name), p.value = "create", Ne.value = !0, Y.value = fe.environment_name || "my-new-env", pe.value = {
            progress: fe.progress ?? 0,
            message: fe.message,
            phase: fe.phase
          }, Pe();
          return;
        }
      } catch (fe) {
        console.log("[ComfyGit] Create progress check failed:", fe);
      }
      try {
        const fe = await m();
        console.log("[ComfyGit] Import progress check:", fe.state, fe), fe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", fe.environment_name), P.value = {
          message: fe.message || "Importing...",
          phase: fe.phase || "",
          progress: fe.progress ?? 0,
          environmentName: fe.environment_name || ""
        }, x.value = !0, p.value = "import", C.value = !0);
      } catch (fe) {
        console.log("[ComfyGit] Import progress check failed:", fe);
      }
    }
    async function Pe() {
      ue.value = 0, ge.value = Date.now();
      let fe = null;
      const V = async () => {
        if (ge.value && Date.now() - ge.value > ci)
          return fe && clearInterval(fe), Ne.value = !1, A.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Se = await d();
          if (ue.value = 0, Se.state === "idle" && Ne.value)
            return fe && clearInterval(fe), Ne.value = !1, A.value = "Environment creation was interrupted. Please try again.", !1;
          if (pe.value = {
            progress: Se.progress ?? 0,
            message: Se.message,
            phase: Se.phase
          }, Se.state === "complete") {
            fe && clearInterval(fe), Ne.value = !1;
            const xe = Se.environment_name || Y.value;
            return a("complete", xe, ee.value), !1;
          } else if (Se.state === "error")
            return fe && clearInterval(fe), Ne.value = !1, A.value = Se.error || "Environment creation failed", !1;
          return !0;
        } catch (Se) {
          return ue.value++, console.warn(`Polling failure ${ue.value}/${ho}:`, Se), ue.value >= ho ? (fe && clearInterval(fe), Ne.value = !1, A.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await V() && (fe = setInterval(async () => {
        !await V() && fe && clearInterval(fe);
      }, 2e3));
    }
    return (fe, V) => (n(), i(B, null, [
      S(vt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: V[15] || (V[15] = (Ae) => fe.$emit("close"))
      }, {
        header: h(() => [
          V[20] || (V[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", e7, [
            S(ec),
            V[19] || (V[19] = t("span", { class: "header-divider" }, null, -1)),
            We.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: V[0] || (V[0] = (Ae) => _.value = !0)
            }, [...V[17] || (V[17] = [
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
              onClick: V[1] || (V[1] = (Ae) => fe.$emit("close")),
              title: "Close"
            }, [...V[18] || (V[18] = [
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
          var Ae;
          return [
            g.value === 1 ? (n(), i("div", t7, [
              V[24] || (V[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", s7, [
                V[21] || (V[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": V[2] || (V[2] = (Se) => E.value = Se),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, o7), [
                  [Wt, E.value]
                ]),
                O.value ? (n(), i("p", n7, f(O.value), 1)) : y("", !0)
              ]),
              t("div", a7, [
                t("label", l7, [
                  Xe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": V[3] || (V[3] = (Se) => D.value = Se)
                  }, null, 512), [
                    [cn, D.value]
                  ]),
                  V[22] || (V[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (n(), i("div", i7, [
                V[23] || (V[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": V[4] || (V[4] = (Se) => N.value = Se),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, r7), [
                  [Wt, N.value]
                ]),
                e.detectedModelsDir && !N.value ? (n(), i("p", c7, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                M.value ? (n(), i("p", u7, " Did you mean: " + f(M.value), 1)) : y("", !0),
                I.value ? (n(), i("p", d7, f(I.value), 1)) : y("", !0),
                se.value !== null && !I.value ? (n(), i("p", f7, " Found " + f(se.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              de.value ? (n(), R(jn, {
                key: 1,
                progress: Fe.value.progress,
                message: Fe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (n(), i("div", m7, [
              T.value ? (n(), i("div", v7, [...V[25] || (V[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(B, { key: 1 }, [
                !o.cliInstalled && !b.value ? (n(), i("div", p7, [
                  t("div", g7, [
                    V[27] || (V[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    V[28] || (V[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: V[5] || (V[5] = (Se) => b.value = !0),
                      title: "Dismiss"
                    }, [...V[26] || (V[26] = [
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
                  V[29] || (V[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  V[30] || (V[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (n(), i("div", h7, [
                  V[34] || (V[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: V[6] || (V[6] = (Se) => p.value = "create")
                  }, [...V[31] || (V[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: V[7] || (V[7] = (Se) => {
                      x.value = !1, p.value = "import";
                    })
                  }, [...V[32] || (V[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ae = o.existingEnvironments) != null && Ae.length ? (n(), i(B, { key: 0 }, [
                    V[33] || (V[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", y7, [
                      (n(!0), i(B, null, we(o.existingEnvironments, (Se) => (n(), i("label", {
                        key: Se,
                        class: Ee(["env-option", { selected: w.value === Se }])
                      }, [
                        Xe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Se,
                          "onUpdate:modelValue": V[8] || (V[8] = (xe) => w.value = xe)
                        }, null, 8, w7), [
                          [ss, w.value]
                        ]),
                        t("span", _7, f(Se), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (n(), i("div", k7, [
                  Ne.value ? (n(), i("div", D7, [
                    t("p", L7, [
                      V[41] || (V[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(Y.value), 1),
                      V[42] || (V[42] = $("... ", -1))
                    ]),
                    S(jn, {
                      progress: pe.value.progress,
                      message: pe.value.message,
                      "current-phase": pe.value.phase,
                      "show-steps": !0,
                      steps: me
                    }, null, 8, ["progress", "message", "current-phase"]),
                    V[43] || (V[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(B, { key: 0 }, [
                    V[40] || (V[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", b7, [
                      V[35] || (V[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Xe(t("input", {
                        "onUpdate:modelValue": V[9] || (V[9] = (Se) => Y.value = Se),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Wt, Y.value]
                      ])
                    ]),
                    t("div", $7, [
                      V[36] || (V[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Xe(t("select", {
                        "onUpdate:modelValue": V[10] || (V[10] = (Se) => F.value = Se),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, we(He(Gr), (Se) => (n(), i("option", {
                          key: Se,
                          value: Se
                        }, f(Se), 9, C7))), 128))
                      ], 512), [
                        [hs, F.value]
                      ])
                    ]),
                    t("div", x7, [
                      V[37] || (V[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Xe(t("select", {
                        "onUpdate:modelValue": V[11] || (V[11] = (Se) => z.value = Se),
                        class: "form-select",
                        disabled: ce.value
                      }, [
                        (n(!0), i(B, null, we(W.value, (Se) => (n(), i("option", {
                          key: Se.tag_name,
                          value: Se.tag_name
                        }, f(Se.name), 9, I7))), 128))
                      ], 8, S7), [
                        [hs, z.value]
                      ])
                    ]),
                    t("div", E7, [
                      V[38] || (V[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Xe(t("select", {
                        "onUpdate:modelValue": V[12] || (V[12] = (Se) => Z.value = Se),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, we(He(vl), (Se) => (n(), i("option", {
                          key: Se,
                          value: Se
                        }, f(Se) + f(Se === "auto" ? " (detect GPU)" : ""), 9, T7))), 128))
                      ], 512), [
                        [hs, Z.value]
                      ])
                    ]),
                    t("div", R7, [
                      t("label", P7, [
                        Xe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": V[13] || (V[13] = (Se) => q.value = Se)
                        }, null, 512), [
                          [cn, q.value]
                        ]),
                        V[39] || (V[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    A.value ? (n(), i("div", M7, f(A.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (n(), i("div", N7, [
                  S(Yr, {
                    "workspace-path": ee.value,
                    "resume-import": x.value,
                    "initial-progress": P.value ?? void 0,
                    onImportComplete: be,
                    onImportStarted: V[14] || (V[14] = (Se) => C.value = !0),
                    onSourceCleared: ae
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", U7, [
            S(tc),
            t("div", A7, [
              g.value === 1 ? (n(), R(De, {
                key: 0,
                variant: "primary",
                disabled: !Te.value || de.value,
                onClick: H
              }, {
                default: h(() => [
                  $(f(de.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (n(), i(B, { key: 1 }, [
                !Ne.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !ee.value) ? (n(), R(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: ie
                }, {
                  default: h(() => [...V[44] || (V[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (n(), R(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !Le.value || Ne.value,
                  onClick: G
                }, {
                  default: h(() => [
                    $(f(Ne.value ? "Creating..." : q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (n(), R(De, {
                  key: 2,
                  variant: "primary",
                  onClick: ve
                }, {
                  default: h(() => [
                    $(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (n(), R(ZT, {
        key: 0,
        "workspace-path": U.value,
        onClose: V[16] || (V[16] = (Ae) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), F7 = /* @__PURE__ */ ke(z7, [["__scopeId", "data-v-9a9aadc0"]]), V7 = { class: "update-banner" }, B7 = { class: "update-banner__left" }, W7 = { class: "update-banner__title" }, G7 = {
  key: 0,
  class: "update-banner__summary"
}, j7 = { class: "update-banner__actions" }, H7 = ["disabled"], K7 = ["disabled"], q7 = ["disabled"], Y7 = /* @__PURE__ */ _e({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", V7, [
      t("div", B7, [
        t("div", W7, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", G7, f(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", j7, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, H7),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, K7)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, q7)
      ])
    ]));
  }
}), J7 = /* @__PURE__ */ ke(Y7, [["__scopeId", "data-v-49562c5c"]]), sc = "ComfyGit.UpdateNotice.DismissedVersion";
function Q7() {
  try {
    return localStorage.getItem(sc);
  } catch {
    return null;
  }
}
function X7(e) {
  try {
    localStorage.setItem(sc, e);
  } catch {
  }
}
function Z7(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : Q7() !== e.latest_version;
}
const eR = { class: "comfygit-panel" }, tR = { class: "panel-header" }, sR = { class: "header-left" }, oR = {
  key: 0,
  class: "header-info"
}, nR = { class: "header-actions" }, aR = { class: "env-switcher" }, lR = {
  key: 0,
  class: "header-info"
}, iR = { class: "branch-name" }, rR = { class: "panel-main" }, cR = { class: "sidebar" }, uR = { class: "sidebar-content" }, dR = { class: "sidebar-section" }, fR = { class: "sidebar-section" }, mR = { class: "sidebar-section" }, vR = {
  key: 0,
  class: "sidebar-badge"
}, pR = { class: "sidebar-footer" }, gR = { class: "content-area" }, hR = {
  key: 0,
  class: "error-message"
}, yR = {
  key: 1,
  class: "loading"
}, wR = { class: "dialog-content env-selector-dialog" }, _R = { class: "dialog-header" }, kR = { class: "dialog-body" }, bR = { class: "env-list" }, $R = { class: "env-info" }, CR = { class: "env-name-row" }, xR = { class: "env-indicator" }, SR = { class: "env-name" }, IR = {
  key: 0,
  class: "env-branch"
}, ER = {
  key: 1,
  class: "current-label"
}, TR = { class: "env-stats" }, RR = ["onClick"], PR = { class: "toast-container" }, MR = { class: "toast-message" }, ui = "ComfyGit.LastView", di = "ComfyGit.LastSection", DR = /* @__PURE__ */ _e({
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
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: C,
      repairWorkflowModels: b,
      getSetupStatus: x,
      getUpdateCheck: P,
      updateManager: T
    } = ot(), E = cp(), { liveInstanceCount: D } = Jr({ autoStart: !0 }), N = k(null), O = k([]), I = k([]), M = k([]), se = L(() => M.value.find((re) => re.is_current)), Y = k(null), F = k(!1), z = k(1), Z = L(() => {
      var re;
      return ((re = Y.value) == null ? void 0 : re.state) || "managed";
    }), q = k(!1), A = k(null), ee = k(null), W = k(!1), ce = k(null), de = k(!1), Ne = k(!1), Fe = L(() => !de.value && Z7(ce.value)), pe = k(null), me = k(null), oe = k(null), te = k(!1), ue = k(!1), ge = k(""), Te = k(null), Le = k({ state: "idle", progress: 0, message: "" });
    let We = null, U = null;
    const j = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, le = o.initialView ? j[o.initialView] : null, H = [
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
    ], G = ["this-env", "all-envs", "sharing"];
    function Q() {
      try {
        const re = sessionStorage.getItem(ui), J = sessionStorage.getItem(di);
        if (re && J && H.includes(re) && G.includes(J))
          return { view: re, section: J };
      } catch {
      }
      return null;
    }
    const ve = Q(), ie = k((le == null ? void 0 : le.view) ?? (ve == null ? void 0 : ve.view) ?? "status"), be = k((le == null ? void 0 : le.section) ?? (ve == null ? void 0 : ve.section) ?? "this-env");
    function ae(re, J) {
      ie.value = re, be.value = J;
      try {
        sessionStorage.setItem(ui, re), sessionStorage.setItem(di, J);
      } catch {
      }
    }
    function Ue(re) {
      const ze = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[re];
      ze && ae(ze.view, ze.section);
    }
    function Pe() {
      ae("branches", "this-env");
    }
    function fe() {
      a("close"), setTimeout(() => {
        var J;
        const re = document.querySelectorAll("button.comfyui-button");
        for (const ze of re)
          if (((J = ze.textContent) == null ? void 0 : J.trim()) === "Manager") {
            ze.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const V = k(null), Ae = k(!1), Se = k(!1), xe = k([]);
    let Me = 0;
    function Re(re, J = "info", ze = 3e3) {
      const je = ++Me;
      return xe.value.push({ id: je, message: re, type: J }), ze > 0 && setTimeout(() => {
        xe.value = xe.value.filter((it) => it.id !== je);
      }, ze), je;
    }
    function Qe(re) {
      xe.value = xe.value.filter((J) => J.id !== re);
    }
    function ye(re, J) {
      Re(re, J);
    }
    async function X() {
      ce.value = null, de.value = !1;
      try {
        ce.value = await P();
      } catch {
      }
    }
    function $e() {
      var J;
      const re = (J = ce.value) == null ? void 0 : J.release_url;
      if (re)
        try {
          window.open(re, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Ve() {
      var J;
      const re = (J = ce.value) == null ? void 0 : J.latest_version;
      re && X7(re), de.value = !0;
    }
    async function tt() {
      var J, ze;
      if (Ne.value) return;
      Ne.value = !0;
      const re = Re("Updating comfygit-manager...", "info", 0);
      try {
        const je = await T();
        if (Qe(re), je.status !== "success") {
          if (Re(je.message || "Update failed", "error"), je.manual_instructions) {
            const it = je.manual_instructions.split(`
`).map((K) => K.trim()).filter(Boolean);
            V.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: it,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                V.value = null;
              }
            };
          }
          return;
        }
        if (Re(je.message || "Update complete", "success"), Ve(), je.restart_required) {
          ws();
          try {
            await ((ze = (J = window.app) == null ? void 0 : J.api) == null ? void 0 : ze.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (je) {
        Qe(re);
        const it = je instanceof Error ? je.message : "Update failed";
        Re(it, "error");
      } finally {
        Ne.value = !1;
      }
    }
    const wt = L(() => {
      if (!N.value) return "neutral";
      const re = N.value.workflows, J = re.new.length > 0 || re.modified.length > 0 || re.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    L(() => N.value ? wt.value === "success" ? "All synced" : wt.value === "warning" ? "Uncommitted changes" : wt.value === "error" ? "Not synced" : "" : "");
    async function at() {
      q.value = !0, A.value = null;
      try {
        const [re, J, ze, je] = await Promise.all([
          l(!0),
          r(),
          c(),
          g()
        ]);
        N.value = re, O.value = J.commits, I.value = ze.branches, M.value = je, a("statusUpdate", re), pe.value && await pe.value.loadWorkflows(!0);
      } catch (re) {
        A.value = re instanceof Error ? re.message : "Failed to load status", N.value = null, O.value = [], I.value = [];
      } finally {
        q.value = !1;
      }
    }
    function Ds(re) {
      ee.value = re;
    }
    async function Xt(re) {
      var ze;
      ee.value = null;
      const J = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      V.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${re.short_hash || ((ze = re.hash) == null ? void 0 : ze.slice(0, 7))}?`,
        details: J ? gn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var K;
          V.value = null, ws();
          const je = Re(`Checking out ${re.short_hash || ((K = re.hash) == null ? void 0 : K.slice(0, 7))}...`, "info", 0), it = await u(re.hash, J);
          Qe(je), it.status === "success" ? Re("Restarting ComfyUI...", "success") : Re(it.message || "Checkout failed", "error");
        }
      };
    }
    async function ys(re) {
      const J = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      V.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${re}"?`,
        details: J ? gn() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          V.value = null, ws();
          const ze = Re(`Switching to ${re}...`, "info", 0), je = await m(re, J);
          Qe(ze), je.status === "success" ? Re("Restarting ComfyUI...", "success") : Re(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function ao(re) {
      const J = Re(`Creating branch ${re}...`, "info", 0), ze = await d(re);
      Qe(J), ze.status === "success" ? (Re(`Branch "${re}" created`, "success"), await at()) : Re(ze.message || "Failed to create branch", "error");
    }
    async function Do(re, J = !1) {
      const ze = async (je) => {
        var K;
        const it = Re(`Deleting branch ${re}...`, "info", 0);
        try {
          const Ce = await v(re, je);
          Qe(it), Ce.status === "success" ? (Re(`Branch "${re}" deleted`, "success"), await at()) : (K = Ce.message) != null && K.includes("not fully merged") ? V.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${re}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              V.value = null, await ze(!0);
            }
          } : Re(Ce.message || "Failed to delete branch", "error");
        } catch (Ce) {
          Qe(it);
          const Oe = Ce instanceof Error ? Ce.message : "Failed to delete branch";
          Oe.includes("not fully merged") ? V.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${re}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              V.value = null, await ze(!0);
            }
          } : Re(Oe, "error");
        }
      };
      V.value = {
        title: "Delete Branch",
        message: `Delete branch "${re}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          V.value = null, await ze(J);
        }
      };
    }
    async function Lo(re) {
      ee.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const ze = Re(`Creating branch ${J}...`, "info", 0), je = await d(J, re.hash);
        Qe(ze), je.status === "success" ? (Re(`Branch "${J}" created from ${re.short_hash}`, "success"), await at()) : Re(je.message || "Failed to create branch", "error");
      }
    }
    function ws() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ie() {
      V.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var re;
          V.value = null, ws(), Re("Restarting environment...", "info");
          try {
            (re = window.app) != null && re.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ne() {
      V.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var re;
          V.value = null, Re("Stopping environment...", "info");
          try {
            (re = window.app) != null && re.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Ke(re, J) {
      W.value = !1, ge.value = re, Te.value = J || null, te.value = !0;
    }
    async function _t() {
      te.value = !1, ue.value = !0, ws(), Le.value = {
        progress: 10,
        state: At(10),
        message: jt(10)
      };
      try {
        await w(ge.value, Te.value || void 0), _s(), Be();
      } catch (re) {
        $t(), ue.value = !1, Re(`Failed to initiate switch: ${re instanceof Error ? re.message : "Unknown error"}`, "error"), Le.value = { state: "idle", progress: 0, message: "" }, Te.value = null;
      }
    }
    function At(re) {
      return re >= 100 ? "complete" : re >= 80 ? "validating" : re >= 60 ? "starting" : re >= 30 ? "syncing" : "preparing";
    }
    function jt(re) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[At(re)] || "";
    }
    function _s() {
      if (U) return;
      let re = 10;
      const J = 60, ze = 5e3, je = 100, it = (J - re) / (ze / je);
      U = window.setInterval(() => {
        if (re += it, re >= J && (re = J, $t()), Le.value.progress < J) {
          const K = Math.floor(re);
          Le.value = {
            progress: K,
            state: At(K),
            message: jt(K)
          };
        }
      }, je);
    }
    function $t() {
      U && (clearInterval(U), U = null);
    }
    function Be() {
      We || (We = window.setInterval(async () => {
        try {
          let re = await E.getStatus();
          if ((!re || re.state === "idle") && (re = await p()), !re)
            return;
          const J = re.progress || 0;
          J >= 60 && $t();
          const ze = Math.max(J, Le.value.progress), je = re.state && re.state !== "idle" && re.state !== "unknown", it = je ? re.state : At(ze), K = je && re.message || jt(ze);
          Le.value = {
            state: it,
            progress: ze,
            message: K
          }, re.state === "complete" ? ($t(), Zt(), ue.value = !1, Re(`✓ Switched to ${ge.value}`, "success"), await at(), ge.value = "") : re.state === "rolled_back" ? ($t(), Zt(), ue.value = !1, Re("Switch failed, restored previous environment", "warning"), ge.value = "") : re.state === "critical_failure" && ($t(), Zt(), ue.value = !1, Re(`Critical error during switch: ${re.message}`, "error"), ge.value = "");
        } catch (re) {
          console.error("Failed to poll switch progress:", re);
        }
      }, 1e3));
    }
    function Zt() {
      $t(), We && (clearInterval(We), We = null);
    }
    function cs() {
      var re;
      te.value = !1, ge.value = "", (re = Y.value) != null && re.state && Y.value.state !== "managed" && (z.value = Y.value.state === "no_workspace" ? 1 : 2, F.value = !0);
    }
    async function lo(re) {
      Ae.value = !1, await at(), Re(re.message, re.success ? "success" : "error");
    }
    async function io() {
      Se.value = !1;
      const re = Re("Syncing environment...", "info", 0);
      try {
        const J = await C("skip", !0);
        if (Qe(re), J.status === "success") {
          const ze = [];
          J.nodes_installed.length && ze.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && ze.push(`${J.nodes_removed.length} removed`);
          const je = ze.length ? `: ${ze.join(", ")}` : "";
          Re(`✓ Environment synced${je}`, "success"), await at();
        } else {
          const ze = J.errors.length ? J.errors.join("; ") : J.message;
          Re(`Sync failed: ${ze}`, "error");
        }
      } catch (J) {
        Qe(re), Re(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function ro(re) {
      var J;
      try {
        const ze = await b(re);
        ze.failed.length === 0 ? Re(`✓ Repaired ${ze.success} workflow${ze.success === 1 ? "" : "s"}`, "success") : Re(`Repaired ${ze.success}, failed: ${ze.failed.length}`, "warning"), await at();
      } catch (ze) {
        Re(`Repair failed: ${ze instanceof Error ? ze.message : "Unknown error"}`, "error");
      } finally {
        (J = oe.value) == null || J.resetRepairingState();
      }
    }
    async function Ks() {
      var J, ze;
      const re = Re("Repairing environment...", "info", 0);
      try {
        const je = await C("skip", !0);
        if (Qe(re), je.status === "success") {
          const it = [];
          je.nodes_installed.length && it.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && it.push(`${je.nodes_removed.length} removed`);
          const K = it.length ? `: ${it.join(", ")}` : "";
          Re(`✓ Environment repaired${K}`, "success"), (J = oe.value) == null || J.closeDetailModal(), await at();
        } else {
          const it = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          Re(`Repair failed: ${it}`, "error");
        }
      } catch (je) {
        Qe(re), Re(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (ze = oe.value) == null || ze.resetRepairingEnvironmentState();
      }
    }
    async function co(re, J) {
      Re(`Environment '${re}' created`, "success"), await at(), me.value && await me.value.loadEnvironments(), J && await Ke(re);
    }
    async function uo(re) {
      var J;
      if (((J = se.value) == null ? void 0 : J.name) === re) {
        Re("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      V.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${re}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          V.value = null;
          try {
            const ze = await _(re);
            ze.status === "success" ? (Re(`Environment "${re}" deleted`, "success"), await at(), me.value && await me.value.loadEnvironments()) : Re(ze.message || "Failed to delete environment", "error");
          } catch (ze) {
            Re(`Error deleting environment: ${ze instanceof Error ? ze.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function fo(re, J) {
      F.value = !1;
      try {
        Y.value = await x();
      } catch {
      }
      await Ke(re, J);
    }
    function mo() {
      F.value = !1, a("close");
    }
    async function vo(re, J) {
      await Ke(re, J);
    }
    async function ra(re) {
      await at(), await Ke(re);
    }
    async function ca(re) {
      Y.value = await x(), console.log(`Environment '${re}' created. Available for switching.`);
    }
    function ua() {
      ae("environments", "all-envs"), setTimeout(() => {
        var re;
        (re = me.value) == null || re.openCreateModal();
      }, 100);
    }
    function gn() {
      if (!N.value) return [];
      const re = [], J = N.value.workflows;
      return J.new.length && re.push(`${J.new.length} new workflow(s)`), J.modified.length && re.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && re.push(`${J.deleted.length} deleted workflow(s)`), re;
    }
    return et(async () => {
      try {
        if (Y.value = await x(), Y.value.state === "no_workspace") {
          F.value = !0, z.value = 1;
          return;
        }
        if (Y.value.state === "empty_workspace") {
          F.value = !0, z.value = 2;
          return;
        }
        if (Y.value.state === "unmanaged") {
          F.value = !0, z.value = 2;
          return;
        }
      } catch (re) {
        console.warn("Setup status check failed, proceeding normally:", re);
      }
      await Promise.all([
        at(),
        X()
      ]);
    }), (re, J) => {
      var ze, je, it, K, Ce, Oe, ct, Ct, zt, Ls, Ns, hn, hl;
      return n(), i("div", eR, [
        t("div", tR, [
          t("div", sR, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (n(), i("div", oR)) : y("", !0)
          ]),
          t("div", nR, [
            S(ec),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ee(["icon-btn", { spinning: q.value }]),
              onClick: at,
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
              onClick: J[0] || (J[0] = (qe) => a("close")),
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
        Fe.value && ce.value ? (n(), R(J7, {
          key: 0,
          info: ce.value,
          updating: Ne.value,
          onUpdate: tt,
          onDismiss: Ve,
          onReleaseNotes: $e
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", aR, [
          t("div", { class: "env-switcher-header" }, [
            J[35] || (J[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ie
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ne
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: J[1] || (J[1] = (qe) => ae("environments", "all-envs"))
          }, [
            N.value ? (n(), i("div", lR, [
              t("span", null, f(((ze = se.value) == null ? void 0 : ze.name) || ((je = N.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", iR, "(" + f(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", rR, [
          t("div", cR, [
            t("div", uR, [
              t("div", dR, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "status" && be.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (qe) => ae("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (qe) => ae("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (qe) => ae("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "branches" }]),
                  onClick: J[5] || (J[5] = (qe) => ae("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "history" }]),
                  onClick: J[6] || (J[6] = (qe) => ae("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (qe) => ae("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (qe) => ae("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", fR, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "environments" }]),
                  onClick: J[9] || (J[9] = (qe) => ae("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (qe) => ae("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "settings" }]),
                  onClick: J[11] || (J[11] = (qe) => ae("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (qe) => ae("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", mR, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (qe) => ae("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = $(" DEPLOY ", -1)),
                  He(D) > 0 ? (n(), i("span", vR, f(He(D)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "export" }]),
                  onClick: J[14] || (J[14] = (qe) => ae("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "import" }]),
                  onClick: J[15] || (J[15] = (qe) => ae("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (qe) => ae("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", pR, [
              S(tc)
            ])
          ]),
          t("div", gR, [
            A.value ? (n(), i("div", hR, f(A.value), 1)) : !N.value && ie.value === "status" ? (n(), i("div", yR, " Loading status... ")) : (n(), i(B, { key: 2 }, [
              ie.value === "status" ? (n(), R(gv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: oe,
                status: N.value,
                "setup-state": Z.value,
                onSwitchBranch: Pe,
                onCommitChanges: J[17] || (J[17] = (qe) => Ae.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (qe) => Se.value = !0),
                onViewWorkflows: J[19] || (J[19] = (qe) => ae("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (qe) => ae("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (qe) => ae("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (qe) => ae("nodes", "this-env")),
                onRepairMissingModels: ro,
                onRepairEnvironment: Ks,
                onStartSetup: J[23] || (J[23] = (qe) => F.value = !0),
                onViewEnvironments: J[24] || (J[24] = (qe) => ae("environments", "all-envs")),
                onCreateEnvironment: ua
              }, null, 8, ["status", "setup-state"])) : ie.value === "workflows" ? (n(), R(yw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: pe,
                onRefresh: at
              }, null, 512)) : ie.value === "models-env" ? (n(), R(Dk, {
                key: 2,
                onNavigate: Ue
              })) : ie.value === "branches" ? (n(), R(lp, {
                key: 3,
                branches: I.value,
                current: ((it = N.value) == null ? void 0 : it.branch) || null,
                onSwitch: ys,
                onCreate: ao,
                onDelete: Do
              }, null, 8, ["branches", "current"])) : ie.value === "history" ? (n(), R(rp, {
                key: 4,
                commits: O.value,
                "current-ref": (K = N.value) == null ? void 0 : K.branch,
                onSelect: Ds,
                onCheckout: Xt
              }, null, 8, ["commits", "current-ref"])) : ie.value === "nodes" ? (n(), R(Cb, {
                key: 5,
                "version-mismatches": ((Oe = (Ce = N.value) == null ? void 0 : Ce.comparison) == null ? void 0 : Oe.version_mismatches) || [],
                onOpenNodeManager: fe,
                onRepairEnvironment: Ks,
                onToast: ye
              }, null, 8, ["version-mismatches"])) : ie.value === "debug-env" ? (n(), R(WC, { key: 6 })) : ie.value === "environments" ? (n(), R(p3, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: me,
                onSwitch: Ke,
                onCreated: co,
                onDelete: uo
              }, null, 512)) : ie.value === "model-index" ? (n(), R(Kk, {
                key: 8,
                onRefresh: at
              })) : ie.value === "settings" ? (n(), R(LC, { key: 9 })) : ie.value === "debug-workspace" ? (n(), R(BC, { key: 10 })) : ie.value === "deploy" ? (n(), R(iE, {
                key: 11,
                onToast: ye,
                onNavigate: Ue
              })) : ie.value === "export" ? (n(), R(l5, { key: 12 })) : ie.value === "import" ? (n(), R(ZS, {
                key: 13,
                onImportCompleteSwitch: ra
              })) : ie.value === "remotes" ? (n(), R(vC, {
                key: 14,
                onToast: ye
              })) : y("", !0)
            ], 64))
          ])
        ]),
        ee.value ? (n(), R(xE, {
          key: 1,
          commit: ee.value,
          onClose: J[25] || (J[25] = (qe) => ee.value = null),
          onCheckout: Xt,
          onCreateBranch: Lo
        }, null, 8, ["commit"])) : y("", !0),
        V.value ? (n(), R(ml, {
          key: 2,
          title: V.value.title,
          message: V.value.message,
          details: V.value.details,
          warning: V.value.warning,
          confirmLabel: V.value.confirmLabel,
          cancelLabel: V.value.cancelLabel,
          secondaryLabel: V.value.secondaryLabel,
          secondaryAction: V.value.secondaryAction,
          destructive: V.value.destructive,
          onConfirm: V.value.onConfirm,
          onCancel: J[26] || (J[26] = (qe) => V.value = null),
          onSecondary: V.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        S(gT, {
          show: te.value,
          "from-environment": ((ct = se.value) == null ? void 0 : ct.name) || "unknown",
          "to-environment": ge.value,
          onConfirm: _t,
          onClose: cs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ae.value && N.value ? (n(), R(Zr, {
          key: 3,
          status: N.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (qe) => Ae.value = !1),
          onCommitted: lo
        }, null, 8, ["status"])) : y("", !0),
        Se.value && N.value ? (n(), R(UT, {
          key: 4,
          show: Se.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: io,
          onClose: J[28] || (J[28] = (qe) => Se.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        S(IT, {
          show: ue.value,
          state: Le.value.state,
          progress: Le.value.progress,
          message: Le.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        W.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = ft((qe) => W.value = !1, ["self"]))
        }, [
          t("div", wR, [
            t("div", _R, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (qe) => W.value = !1)
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
            t("div", kR, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", bR, [
                (n(!0), i(B, null, we(M.value, (qe) => (n(), i("div", {
                  key: qe.name,
                  class: Ee(["env-item", { current: qe.is_current }])
                }, [
                  t("div", $R, [
                    t("div", CR, [
                      t("span", xR, f(qe.is_current ? "●" : "○"), 1),
                      t("span", SR, f(qe.name), 1),
                      qe.current_branch ? (n(), i("span", IR, "(" + f(qe.current_branch) + ")", 1)) : y("", !0),
                      qe.is_current ? (n(), i("span", ER, "CURRENT")) : y("", !0)
                    ]),
                    t("div", TR, f(qe.workflow_count) + " workflows • " + f(qe.node_count) + " nodes ", 1)
                  ]),
                  qe.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (GM) => Ke(qe.name)
                  }, " SWITCH ", 8, RR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        F.value ? (n(), R(F7, {
          key: 6,
          "default-path": ((Ct = Y.value) == null ? void 0 : Ct.default_path) || "~/comfygit",
          "detected-models-dir": ((zt = Y.value) == null ? void 0 : zt.detected_models_dir) || null,
          "initial-step": z.value,
          "existing-environments": ((Ls = Y.value) == null ? void 0 : Ls.environments) || [],
          "cli-installed": ((Ns = Y.value) == null ? void 0 : Ns.cli_installed) ?? !0,
          "setup-state": ((hn = Y.value) == null ? void 0 : hn.state) || "no_workspace",
          "workspace-path": ((hl = Y.value) == null ? void 0 : hl.workspace_path) || null,
          onComplete: fo,
          onClose: mo,
          onSwitchEnvironment: vo,
          onEnvironmentCreatedNoSwitch: ca
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", PR, [
          S(Sd, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(B, null, we(xe.value, (qe) => (n(), i("div", {
                key: qe.id,
                class: Ee(["toast", qe.type])
              }, [
                t("span", MR, f(qe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), LR = /* @__PURE__ */ ke(DR, [["__scopeId", "data-v-9c2af32e"]]), NR = { class: "item-header" }, UR = { class: "item-info" }, AR = { class: "filename" }, OR = { class: "metadata" }, zR = { class: "size" }, FR = {
  key: 0,
  class: "type"
}, VR = { class: "item-actions" }, BR = {
  key: 0,
  class: "progress-section"
}, WR = { class: "progress-bar" }, GR = { class: "progress-stats" }, jR = { class: "downloaded" }, HR = { class: "speed" }, KR = {
  key: 0,
  class: "eta"
}, qR = {
  key: 1,
  class: "status-msg paused"
}, YR = {
  key: 2,
  class: "status-msg queued"
}, JR = {
  key: 3,
  class: "status-msg completed"
}, QR = {
  key: 4,
  class: "status-msg failed"
}, XR = {
  key: 0,
  class: "retries"
}, ZR = /* @__PURE__ */ _e({
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
      class: Ee(["download-item", `status-${e.item.status}`])
    }, [
      t("div", NR, [
        t("div", UR, [
          t("div", AR, f(e.item.filename), 1),
          t("div", OR, [
            t("span", zR, f(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", FR, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", VR, [
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
      e.item.status === "downloading" ? (n(), i("div", BR, [
        t("div", WR, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", GR, [
          t("span", jR, f(a(e.item.downloaded)) + " / " + f(a(e.item.size)), 1),
          t("span", HR, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", KR, f(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", qR, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", YR, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", JR, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", QR, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", XR, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ ke(ZR, [["__scopeId", "data-v-2110df65"]]), eP = { class: "queue-title" }, tP = { class: "count" }, sP = { class: "queue-actions" }, oP = { class: "action-label" }, nP = {
  key: 0,
  class: "overall-progress"
}, aP = { class: "progress-bar" }, lP = {
  key: 0,
  class: "current-mini"
}, iP = { class: "filename" }, rP = { class: "speed" }, cP = {
  key: 1,
  class: "queue-content"
}, uP = {
  key: 0,
  class: "section"
}, dP = {
  key: 1,
  class: "section"
}, fP = { class: "section-header" }, mP = { class: "section-label paused" }, vP = { class: "items-list" }, pP = {
  key: 2,
  class: "section"
}, gP = { class: "section-header" }, hP = { class: "section-label" }, yP = { class: "items-list" }, wP = {
  key: 3,
  class: "section"
}, _P = { class: "section-header" }, kP = { class: "section-label" }, bP = { class: "items-list" }, $P = {
  key: 4,
  class: "section"
}, CP = { class: "section-header" }, xP = { class: "section-label failed" }, SP = { class: "items-list" }, IP = /* @__PURE__ */ _e({
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
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = Po(), C = k(!1);
    let b = null;
    pt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (E, D) => {
        b && (clearTimeout(b), b = null);
        const N = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, O = D && (D.active > 0 || D.paused > 0);
        N && O && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = L(() => {
      var N;
      if (s.items.length === 0) return 0;
      const E = l.value.length, D = ((N = o.value) == null ? void 0 : N.progress) || 0;
      return Math.round((E + D / 100) / s.items.length * 100);
    });
    function P(E) {
      m(E);
    }
    function T(E) {
      return E === 0 ? "" : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, D) => (n(), R(bt, { to: "body" }, [
      He(u) ? (n(), i("div", {
        key: 0,
        class: Ee(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (N) => C.value = !C.value)
        }, [
          t("div", eP, [
            D[4] || (D[4] = t("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", tP, "(" + f(He(d)) + "/" + f(He(s).items.length) + ")", 1)
          ]),
          t("div", sP, [
            t("span", oP, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (n(), i("div", cP, [
          He(o) ? (n(), i("div", uP, [
            D[6] || (D[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(zo, {
              item: He(o),
              onCancel: D[1] || (D[1] = (N) => P(He(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          He(c).length > 0 ? (n(), i("div", dP, [
            t("div", fP, [
              t("span", mP, "Paused (" + f(He(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...N) => He(w) && He(w)(...N))
              }, "Resume All")
            ]),
            t("div", vP, [
              (n(!0), i(B, null, we(He(c), (N) => (n(), R(zo, {
                key: N.id,
                item: N,
                onResume: (O) => He(g)(N.id),
                onRemove: (O) => He(p)(N.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          He(a).length > 0 ? (n(), i("div", pP, [
            t("div", gP, [
              t("span", hP, "Queued (" + f(He(a).length) + ")", 1)
            ]),
            t("div", yP, [
              (n(!0), i(B, null, we(He(a), (N) => (n(), R(zo, {
                key: N.id,
                item: N,
                onCancel: (O) => P(N.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          He(l).length > 0 ? (n(), i("div", wP, [
            t("div", _P, [
              t("span", kP, "Completed (" + f(He(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...N) => He(_) && He(_)(...N))
              }, "Clear")
            ]),
            t("div", bP, [
              (n(!0), i(B, null, we(He(l).slice(0, 3), (N) => (n(), R(zo, {
                key: N.id,
                item: N,
                onRemove: (O) => He(p)(N.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          He(r).length > 0 ? (n(), i("div", $P, [
            t("div", CP, [
              t("span", xP, "Failed (" + f(He(r).length) + ")", 1)
            ]),
            t("div", SP, [
              (n(!0), i(B, null, we(He(r), (N) => (n(), R(zo, {
                key: N.id,
                item: N,
                onRetry: (O) => He(v)(N.id),
                onRemove: (O) => He(p)(N.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", nP, [
          t("div", aP, [
            t("div", {
              class: "progress-fill",
              style: Gt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          He(o) ? (n(), i("div", lP, [
            t("span", iP, f(He(o).filename), 1),
            t("span", rP, f(T(He(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), EP = /* @__PURE__ */ ke(IP, [["__scopeId", "data-v-60751cfa"]]), TP = { class: "detail-header" }, RP = { class: "item-count" }, PP = { class: "resource-list" }, MP = { class: "item-info" }, DP = { class: "item-name" }, LP = {
  key: 0,
  class: "item-subtitle"
}, NP = {
  key: 0,
  class: "installing-badge"
}, UP = ["title"], AP = {
  key: 2,
  class: "installed-badge"
}, OP = {
  key: 3,
  class: "queued-badge"
}, zP = {
  key: 1,
  class: "no-action"
}, FP = /* @__PURE__ */ _e({
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
    const o = e, a = s, l = L(() => o.itemType === "model" ? "Download" : "Install"), r = L(() => o.items.filter((p) => p.canAction)), c = L(() => r.value.length > 0 && r.value.every(
      (p) => {
        var _, C;
        return o.queuedItems.has(p.id) || ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = L(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
    function d(p) {
      return o.queuedItems.has(p.id);
    }
    function m(p) {
      return o.installingItem === p.id;
    }
    function v(p) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) ?? !1;
    }
    function g(p) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(p.id)) ?? !1;
    }
    function w(p) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(p.id)) || "Unknown error";
    }
    return (p, _) => (n(), R(vt, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => a("close"))
    }, {
      body: h(() => [
        t("div", TP, [
          t("span", RP, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          r.value.length > 1 ? (n(), R(De, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: c.value,
            onClick: _[0] || (_[0] = (C) => a("bulk-action"))
          }, {
            default: h(() => [
              $(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", PP, [
          (n(!0), i(B, null, we(e.items, (C) => (n(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", MP, [
              t("span", DP, f(C.name), 1),
              C.subtitle ? (n(), i("span", LP, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (n(), i(B, { key: 0 }, [
              m(C) ? (n(), i("span", NP, "Installing...")) : g(C) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, UP)) : v(C) ? (n(), i("span", AP, "Installed")) : d(C) ? (n(), i("span", OP, "Queued")) : (n(), R(De, {
                key: 4,
                size: "sm",
                variant: "secondary",
                onClick: (b) => a("action", C)
              }, {
                default: h(() => [
                  $(f(l.value), 1)
                ]),
                _: 1
              }, 8, ["onClick"]))
            ], 64)) : (n(), i("span", zP, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        S(De, {
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
}), VP = /* @__PURE__ */ ke(FP, [["__scopeId", "data-v-fac0fef0"]]), BP = {
  key: 0,
  class: "loading-state"
}, WP = {
  key: 1,
  class: "analysis-results"
}, GP = {
  key: 0,
  class: "section"
}, jP = { class: "section-header" }, HP = { class: "section-title" }, KP = { class: "item-list" }, qP = { class: "package-info" }, YP = { class: "package-name" }, JP = { class: "node-count" }, QP = {
  key: 1,
  class: "installing-badge"
}, XP = {
  key: 2,
  class: "queued-badge"
}, ZP = ["title"], eM = {
  key: 4,
  class: "installed-badge"
}, tM = {
  key: 1,
  class: "section"
}, sM = { class: "section-header" }, oM = { class: "section-title" }, nM = { class: "item-list" }, aM = { class: "node-type" }, lM = {
  key: 0,
  class: "overflow-note"
}, iM = {
  key: 2,
  class: "section"
}, rM = { class: "section-header" }, cM = { class: "section-title" }, uM = { class: "item-list" }, dM = { class: "node-type" }, fM = { class: "not-found" }, mM = {
  key: 0,
  class: "overflow-note"
}, vM = {
  key: 3,
  class: "section"
}, pM = { class: "section-header" }, gM = { class: "section-title" }, hM = { class: "item-list" }, yM = { class: "node-type" }, wM = { class: "not-found" }, _M = {
  key: 0,
  class: "overflow-note"
}, kM = {
  key: 4,
  class: "section"
}, bM = { class: "section-header" }, $M = { class: "section-title" }, CM = { class: "item-list" }, xM = { class: "model-info" }, SM = { class: "model-name" }, IM = {
  key: 1,
  class: "queued-badge"
}, EM = {
  key: 1,
  class: "no-url"
}, TM = { class: "dont-show-again" }, RM = /* @__PURE__ */ _e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), { addToQueue: C } = Po(), { queueNodeInstall: b } = ot(), x = L(() => P.value.length > 0 || E.value.length > 0 || D.value.length > 0 || N.value.length > 0 || O.value.length > 0), P = L(() => {
      var Q, ve;
      if (!((Q = a.value) != null && Q.nodes)) return [];
      const H = /* @__PURE__ */ new Map(), G = (a.value.nodes.resolved || []).filter((ie) => {
        var be;
        return !ie.is_installed && ((be = ie.package) == null ? void 0 : be.package_id);
      });
      for (const ie of G) {
        const be = ie.package.package_id;
        H.has(be) || H.set(be, {
          package_id: be,
          title: ie.package.title || be,
          node_count: 0,
          node_types: [],
          repository: ie.package.repository || null,
          latest_version: ie.package.latest_version || null
        });
        const ae = H.get(be);
        ae.node_count++, ae.node_types.push(((ve = ie.reference) == null ? void 0 : ve.node_type) || ie.node_type);
      }
      return Array.from(H.values());
    }), T = L(() => P.value.reduce((H, G) => H + G.node_count, 0)), E = L(() => {
      var H;
      return (H = a.value) != null && H.nodes ? (a.value.nodes.unresolved || []).map((G) => {
        var Q;
        return {
          node_type: ((Q = G.reference) == null ? void 0 : Q.node_type) || G.node_type
        };
      }) : [];
    }), D = L(() => {
      var G;
      if (!((G = a.value) != null && G.nodes)) return [];
      const H = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((Q) => {
        var ie;
        const ve = ((ie = Q.reference) == null ? void 0 : ie.node_type) || Q.node_type;
        return {
          node_type: ve,
          guidance: Q.guidance || H[ve] || null
        };
      });
    }), N = L(() => {
      var G;
      if (!((G = a.value) != null && G.nodes)) return [];
      const H = a.value.node_guidance || {};
      return (a.value.nodes.uninstallable || []).map((Q) => {
        var ie, be;
        const ve = ((ie = Q.reference) == null ? void 0 : ie.node_type) || Q.node_type;
        return {
          node_type: ve,
          package_id: ((be = Q.package) == null ? void 0 : be.package_id) || null,
          guidance: Q.guidance || H[ve] || null
        };
      });
    }), O = L(() => {
      var Q;
      if (!((Q = a.value) != null && Q.models)) return [];
      const H = (a.value.models.resolved || []).filter(
        (ve) => ve.match_type === "download_intent" || ve.match_type === "property_download_intent" || ve.match_type === "not_found"
      ).map((ve) => {
        var ie, be, ae, Ue;
        return {
          filename: ((be = (ie = ve.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : be.split("/").pop()) || ((ae = ve.reference) == null ? void 0 : ae.widget_value) || ve.widget_value,
          widget_value: ((Ue = ve.reference) == null ? void 0 : Ue.widget_value) || ve.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ve.download_source || null,
          targetPath: ve.target_path || null,
          canDownload: !!(ve.download_source && ve.target_path)
        };
      }), G = (a.value.models.unresolved || []).map((ve) => {
        var ie, be, ae, Ue;
        return {
          filename: ((be = (ie = ve.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : be.split("/").pop()) || ((ae = ve.reference) == null ? void 0 : ae.widget_value) || ve.widget_value,
          widget_value: ((Ue = ve.reference) == null ? void 0 : Ue.widget_value) || ve.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...H, ...G];
    }), I = L(() => O.value.filter((H) => H.canDownload)), M = L(() => P.value.length >= 5 ? P.value.slice(0, 4) : P.value), se = L(() => O.value.length >= 5 ? O.value.slice(0, 4) : O.value), Y = L(() => P.value.length > 0 && P.value.every(
      (H) => r.value.has(H.package_id) || c.value.has(H.package_id) || u.value.has(H.package_id)
    )), F = L(() => I.value.length > 0 && I.value.every((H) => d.value.has(H.url))), z = L(() => P.value.length > 0 || I.value.length > 0), Z = L(() => {
      const H = P.value.length === 0 || Y.value, G = I.value.length === 0 || F.value;
      return H && G;
    }), q = L(() => w.value === "models" ? `Missing Models (${O.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${T.value})` : ""), A = L(() => w.value === "models" ? O.value.map((H) => ({
      id: H.url || H.widget_value,
      name: H.filename,
      canAction: H.canDownload,
      actionDisabledReason: H.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? P.value.map((H) => ({
      id: H.package_id,
      name: H.title,
      subtitle: `(${H.node_count} ${H.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : []);
    function ee(H) {
      if (w.value === "models") {
        const G = O.value.find((Q) => Q.url === H.id || Q.widget_value === H.id);
        G && de(G);
      } else if (w.value === "packages") {
        const G = P.value.find((Q) => Q.package_id === H.id);
        G && ce(G);
      }
    }
    function W() {
      w.value === "models" ? Fe() : w.value === "packages" && Ne();
    }
    async function ce(H) {
      const G = H.package_id;
      if (!(r.value.has(G) || c.value.has(G) || u.value.has(G))) {
        j(), v.value = G;
        try {
          const { ui_id: Q } = await b({
            id: G,
            version: H.latest_version || "latest",
            selected_version: H.latest_version || "latest",
            repository: H.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          _.value.set(Q, G), c.value.add(G), console.log("[ComfyGit] Registered pending install:", { ui_id: Q, packageId: G, pendingInstalls: Array.from(_.value.entries()) });
        } catch (Q) {
          console.error("[ComfyGit] Failed to queue package install:", Q), u.value.set(G, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function de(H) {
      !H.url || !H.targetPath || d.value.has(H.url) || (C([{
        workflow: "unsaved",
        filename: H.filename,
        url: H.url,
        targetPath: H.targetPath
      }]), d.value.add(H.url));
    }
    async function Ne() {
      for (const H of P.value)
        !r.value.has(H.package_id) && !c.value.has(H.package_id) && !u.value.has(H.package_id) && await ce(H);
    }
    function Fe() {
      const H = I.value.filter(
        (G) => !d.value.has(G.url)
      );
      if (H.length !== 0) {
        C(H.map((G) => ({
          workflow: "unsaved",
          filename: G.filename,
          url: G.url,
          targetPath: G.targetPath
        })));
        for (const G of H)
          d.value.add(G.url);
      }
    }
    function pe() {
      Ne(), Fe();
    }
    function me() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function oe(H) {
      var ie, be;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const G = H == null ? void 0 : H.id;
      if (G && p.value.has(G)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${G} this session`);
        return;
      }
      const Q = window.app, ve = (ie = Q == null ? void 0 : Q.extensionManager) == null ? void 0 : ie.workflow;
      if (ve) {
        let Pe = !1;
        for (let fe = 0; fe < 20; fe++) {
          const V = ve.activeWorkflow;
          if (!V) {
            await new Promise((xe) => setTimeout(xe, 50));
            continue;
          }
          const Ae = (be = V.activeState) == null ? void 0 : be.id;
          if (!(G && Ae === G)) {
            fe < 19 && await new Promise((xe) => setTimeout(xe, 50));
            continue;
          }
          if (Pe = !0, V.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${V.filename}`), G && p.value.add(G);
            return;
          }
          break;
        }
        Pe || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const ae = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: H, name: "unsaved" })
        });
        if (!ae.ok) {
          const Ue = await ae.json();
          throw new Error(Ue.error || "Failed to analyze workflow");
        }
        a.value = await ae.json(), x.value && (l.value = !0, G && p.value.add(G));
      } catch (ae) {
        console.error("[ComfyGit] Failed to analyze workflow:", ae);
      } finally {
        s.value = !1;
      }
    }
    function te() {
      l.value = !1, a.value = null;
    }
    function ue(H) {
      const { workflow: G } = H.detail;
      G && oe(G);
    }
    function ge(H) {
      var ve;
      const G = (ve = H.detail) == null ? void 0 : ve.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: G,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: H.detail
      });
      const Q = _.value.get(G);
      Q ? (v.value = Q, console.log("[ComfyGit] Installing package:", Q)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", G);
    }
    function Te(H) {
      var ie, be, ae, Ue, Pe, fe, V;
      const G = (ie = H.detail) == null ? void 0 : ie.ui_id, Q = (ae = (be = H.detail) == null ? void 0 : be.status) == null ? void 0 : ae.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: G,
        status: Q,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: H.detail
      });
      const ve = _.value.get(G);
      if (ve) {
        if (_.value.delete(G), c.value.delete(ve), v.value === ve && (v.value = null), Q === "success")
          r.value.add(ve), g.value++, console.log("[ComfyGit] Package installed successfully:", ve);
        else {
          const Ae = ((fe = (Pe = (Ue = H.detail) == null ? void 0 : Ue.status) == null ? void 0 : Pe.messages) == null ? void 0 : fe[0]) || ((V = H.detail) == null ? void 0 : V.result) || "Unknown error";
          u.value.set(ve, Ae), console.error("[ComfyGit] Package install failed:", ve, Ae);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", G);
    }
    let Le = null;
    function We() {
      var H;
      return Le || (Le = (H = window.app) == null ? void 0 : H.api), Le;
    }
    let U = !1;
    function j() {
      if (U) return !0;
      const H = We();
      return H ? (H.addEventListener("cm-task-started", ge), H.addEventListener("cm-task-completed", Te), H.addEventListener("comfygit:workflow-changed", le), U = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function le(H) {
      const { change_type: G } = H.detail;
      (G === "created" || G === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", ue);
    }), Hs(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", ue), U) {
        const H = We();
        H && (H.removeEventListener("cm-task-started", ge), H.removeEventListener("cm-task-completed", Te), H.removeEventListener("comfygit:workflow-changed", le)), U = !1;
      }
    }), (H, G) => (n(), i(B, null, [
      l.value ? (n(), R(vt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: te
      }, {
        body: h(() => [
          s.value ? (n(), i("div", BP, [...G[4] || (G[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && x.value ? (n(), i("div", WP, [
            P.value.length > 0 ? (n(), i("div", GP, [
              t("div", jP, [
                t("span", HP, "Missing Custom Nodes (" + f(T.value) + ")", 1),
                P.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Y.value,
                  onClick: Ne
                }, {
                  default: h(() => [
                    $(f(Y.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", KP, [
                (n(!0), i(B, null, we(M.value, (Q) => (n(), i("div", {
                  key: Q.package_id,
                  class: "package-item"
                }, [
                  t("div", qP, [
                    t("span", YP, f(Q.title), 1),
                    t("span", JP, "(" + f(Q.node_count) + " " + f(Q.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(Q.package_id) && !c.value.has(Q.package_id) && !u.value.has(Q.package_id) ? (n(), R(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === Q.package_id,
                    onClick: (ve) => ce(Q)
                  }, {
                    default: h(() => [
                      $(f(v.value === Q.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === Q.package_id ? (n(), i("span", QP, "Installing...")) : c.value.has(Q.package_id) ? (n(), i("span", XP, "Queued")) : u.value.has(Q.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(Q.package_id)
                  }, "Failed ⚠", 8, ZP)) : (n(), i("span", eM, "Installed"))
                ]))), 128)),
                P.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: G[0] || (G[0] = (Q) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(P.value.length) + " packages...", 1),
                  G[5] || (G[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            E.value.length > 0 ? (n(), i("div", tM, [
              t("div", sM, [
                t("span", oM, "Unknown Nodes (" + f(E.value.length) + ")", 1)
              ]),
              t("div", nM, [
                (n(!0), i(B, null, we(E.value.slice(0, 5), (Q) => (n(), i("div", {
                  key: Q.node_type,
                  class: "item"
                }, [
                  t("code", aM, f(Q.node_type), 1),
                  G[6] || (G[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                E.value.length > 5 ? (n(), i("div", lM, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            D.value.length > 0 ? (n(), i("div", iM, [
              t("div", rM, [
                t("span", cM, "Requires Newer ComfyUI (" + f(D.value.length) + ")", 1)
              ]),
              t("div", uM, [
                (n(!0), i(B, null, we(D.value.slice(0, 5), (Q) => (n(), i("div", {
                  key: `vg-${Q.node_type}`,
                  class: "item"
                }, [
                  t("code", dM, f(Q.node_type), 1),
                  t("span", fM, f(Q.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                D.value.length > 5 ? (n(), i("div", mM, " ...and " + f(D.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            N.value.length > 0 ? (n(), i("div", vM, [
              t("div", pM, [
                t("span", gM, "No Installable Package Version (" + f(N.value.length) + ")", 1)
              ]),
              t("div", hM, [
                (n(!0), i(B, null, we(N.value.slice(0, 5), (Q) => (n(), i("div", {
                  key: `un-${Q.node_type}-${Q.package_id || "none"}`,
                  class: "item"
                }, [
                  t("code", yM, f(Q.node_type), 1),
                  t("span", wM, f(Q.guidance || "No compatible package version is available for this environment"), 1)
                ]))), 128)),
                N.value.length > 5 ? (n(), i("div", _M, " ...and " + f(N.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            O.value.length > 0 ? (n(), i("div", kM, [
              t("div", bM, [
                t("span", $M, "Missing Models (" + f(O.value.length) + ")", 1),
                I.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: F.value,
                  onClick: Fe
                }, {
                  default: h(() => [
                    $(f(F.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", CM, [
                (n(!0), i(B, null, we(se.value, (Q) => (n(), i("div", {
                  key: Q.widget_value,
                  class: "model-item"
                }, [
                  t("div", xM, [
                    t("span", SM, f(Q.filename), 1)
                  ]),
                  Q.canDownload ? (n(), i(B, { key: 0 }, [
                    d.value.has(Q.url) ? (n(), i("span", IM, "Queued")) : (n(), R(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ve) => de(Q)
                    }, {
                      default: h(() => [...G[7] || (G[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", EM, "Manual download required"))
                ]))), 128)),
                O.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: G[1] || (G[1] = (Q) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(O.value.length) + " models...", 1),
                  G[8] || (G[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", TM, [
              S(Hn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  G[2] || (G[2] = (Q) => m.value = Q),
                  me
                ]
              }, {
                default: h(() => [...G[9] || (G[9] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          S(De, {
            variant: "secondary",
            onClick: te
          }, {
            default: h(() => [...G[10] || (G[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          z.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            disabled: Z.value,
            onClick: pe
          }, {
            default: h(() => [
              $(f(Z.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), R(VP, {
        key: 1,
        title: q.value,
        items: A.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? r.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: G[3] || (G[3] = (Q) => w.value = null),
        onAction: ee,
        onBulkAction: W
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), PM = /* @__PURE__ */ ke(RM, [["__scopeId", "data-v-61008df9"]]), MM = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', DM = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', LM = {
  comfy: MM,
  phosphor: DM
}, pl = "comfy", oc = "comfygit-theme";
let Qs = null, nc = pl;
function NM() {
  try {
    const e = localStorage.getItem(oc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return pl;
}
function ac(e = pl) {
  Qs && Qs.remove(), Qs = document.createElement("style"), Qs.id = "comfygit-theme-styles", Qs.setAttribute("data-theme", e), Qs.textContent = LM[e], document.head.appendChild(Qs), document.body.setAttribute("data-comfygit-theme", e), nc = e;
  try {
    localStorage.setItem(oc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function UM() {
  return nc;
}
function AM(e) {
  ac(e);
}
function OM(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const gl = document.createElement("link");
gl.rel = "stylesheet";
gl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(gl);
const zM = NM();
ac(zM);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), AM(e);
  },
  getTheme: () => {
    const e = UM();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ts = null, Ft = null, Zo = null, Fo = null, fi = null, Vo = null, mi = null;
const So = k(null);
let un = "no_workspace", lc = !1;
async function Ln() {
  var e;
  if (!((e = Kt) != null && e.api)) return null;
  try {
    const s = await Kt.api.fetchApi("/v2/comfygit/status");
    s.ok && (So.value = await s.json());
  } catch {
  }
}
async function Wa() {
  var e;
  if ((e = Kt) != null && e.api)
    try {
      const s = await Kt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        un = o.state, lc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ga() {
  var s;
  if (un === "managed" || !lc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function FM() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function In(e) {
  ts && ts.remove(), ts = document.createElement("div"), ts.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", ts.appendChild(s), ts.addEventListener("click", (l) => {
    l.target === ts && Ea();
  });
  const o = (l) => {
    l.key === "Escape" && (Ea(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), la({
    render: () => vn(LR, {
      initialView: e,
      onClose: Ea,
      onStatusUpdate: async (l) => {
        So.value = l, en(), await Wa(), ja(), Ga();
      }
    })
  }).mount(s), document.body.appendChild(ts);
}
function Ea() {
  ts && (ts.remove(), ts = null);
}
function vi(e) {
  Bo(), Ft = document.createElement("div"), Ft.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Ft.style.position = "fixed", Ft.style.top = `${s.bottom + 8}px`, Ft.style.right = `${window.innerWidth - s.right}px`, Ft.style.zIndex = "10001";
  const o = (l) => {
    Ft && !Ft.contains(l.target) && l.target !== e && (Bo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Bo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), Zo = la({
    render: () => vn(Zr, {
      status: So.value,
      onClose: Bo,
      onCommitted: (l) => {
        Bo(), VM(l.success, l.message), Ln().then(en);
      }
    })
  }), Zo.mount(Ft), document.body.appendChild(Ft);
}
function Bo() {
  Zo && (Zo.unmount(), Zo = null), Ft && (Ft.remove(), Ft = null);
}
function VM(e, s) {
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
function BM() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", fi = la({
    render: () => vn(EP)
  }), fi.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function WM() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", mi = la({
    render: () => vn(PM)
  }), mi.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Dt = null;
function en() {
  if (!Dt) return;
  const e = Dt.querySelector(".commit-indicator");
  e && (e.style.display = FM() ? "block" : "none");
}
function ja() {
  if (!Dt) return;
  const e = un !== "managed";
  Dt.disabled = e, Dt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => In()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Dt && !Dt.disabled && vi(Dt);
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
    if (un === "managed")
      try {
        await Promise.all([
          Kt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Kt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (un !== "managed") return;
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = In, Dt = document.createElement("button"), Dt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Dt.innerHTML = 'Commit <span class="commit-indicator"></span>', Dt.title = "Quick Commit", Dt.onclick = () => vi(Dt), e.appendChild(s), e.appendChild(Dt), (r = (l = Kt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Kt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), BM(), WM(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      In(u);
    }));
    const { loadPendingDownloads: o } = Po();
    o(), await Promise.all([Ln(), Wa()]), en(), ja(), Ga(), setTimeout(Ga, 100), setInterval(async () => {
      await Promise.all([Ln(), Wa()]), en(), ja();
    }, 3e4);
    const a = Kt.api;
    if (a) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, u = function() {
        const g = document.createElement("div");
        g.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", g.appendChild(w);
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => c(), g.appendChild(p);
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
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => g.remove(), g.appendChild(_), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(g) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
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
        const _ = document.createElement("span");
        _.textContent = "⚠️", _.style.fontSize = "20px", p.appendChild(_);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const b = document.createElement("div");
        b.textContent = "Node installation failed", b.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild(b);
        const x = document.createElement("div");
        x.textContent = "Dependency conflict detected", x.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(x), p.appendChild(C);
        const P = document.createElement("button");
        P.textContent = "View Logs", P.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, P.onmouseover = () => P.style.background = "#c62828", P.onmouseout = () => P.style.background = "#e53935", P.onclick = () => {
          p.remove(), In("debug-env");
        }, p.appendChild(P);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => p.remove(), p.appendChild(T), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && p.remove();
        }, 1e4);
      }, m = function(g) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
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
        const _ = document.createElement("span");
        _.textContent = "✅", _.style.fontSize = "20px", p.appendChild(_);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(b);
        const x = document.createElement("div");
        x.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, x.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(x), p.appendChild(C);
        const P = document.createElement("button");
        P.textContent = "Apply Changes", P.style.cssText = `
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
        `, P.onmouseover = () => P.style.background = "rgba(255,255,255,0.1)", P.onmouseout = () => P.style.background = "transparent", P.onclick = async () => {
          P.disabled = !0, P.textContent = "Restarting...", P.style.opacity = "0.7", b.textContent = "Restarting...", x.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Kt.refreshComboInNodes && (await Kt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", x.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", P.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), _.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", P.style.display = "none";
              }
            };
            a.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), b.textContent = "Restart Failed", b.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", P.textContent = "Try Again", P.disabled = !1, P.style.opacity = "1";
          }
        }, p.appendChild(P);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => p.remove(), p.appendChild(T), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Ln(), en();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (g) => {
        const w = OM(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
