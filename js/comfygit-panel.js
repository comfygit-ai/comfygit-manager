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
const nt = {}, ko = [], ps = () => {
}, pi = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ka = (e) => e.startsWith("onUpdate:"), gt = Object.assign, qa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, rc = Object.prototype.hasOwnProperty, tt = (e, s) => rc.call(e, s), Fe = Array.isArray, _o = (e) => dn(e) === "[object Map]", To = (e) => dn(e) === "[object Set]", yl = (e) => dn(e) === "[object Date]", He = (e) => typeof e == "function", mt = (e) => typeof e == "string", os = (e) => typeof e == "symbol", st = (e) => e !== null && typeof e == "object", gi = (e) => (st(e) || He(e)) && He(e.then) && He(e.catch), hi = Object.prototype.toString, dn = (e) => hi.call(e), cc = (e) => dn(e).slice(8, -1), yi = (e) => dn(e) === "[object Object]", Ya = (e) => mt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Go = /* @__PURE__ */ Ha(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, uc = /-\w/g, Qt = qn(
  (e) => e.replace(uc, (s) => s.slice(1).toUpperCase())
), dc = /\B([A-Z])/g, Bs = qn(
  (e) => e.replace(dc, "-$1").toLowerCase()
), Yn = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), da = qn(
  (e) => e ? `on${Yn(e)}` : ""
), zs = (e, s) => !Object.is(e, s), En = (e, ...s) => {
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
  const s = mt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let wl;
const Qn = () => wl || (wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gt(e) {
  if (Fe(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = mt(a) ? gc(a) : Gt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (mt(e) || st(e))
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
function Se(e) {
  let s = "";
  if (mt(e))
    s = e;
  else if (Fe(e))
    for (let o = 0; o < e.length; o++) {
      const a = Se(e[o]);
      a && (s += a + " ");
    }
  else if (st(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yc = /* @__PURE__ */ Ha(hc);
function ki(e) {
  return !!e || e === "";
}
function wc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = eo(e[a], s[a]);
  return o;
}
function eo(e, s) {
  if (e === s) return !0;
  let o = yl(e), a = yl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = os(e), a = os(s), o || a)
    return e === s;
  if (o = Fe(e), a = Fe(s), o || a)
    return o && a ? wc(e, s) : !1;
  if (o = st(e), a = st(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !eo(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Ja(e, s) {
  return e.findIndex((o) => eo(o, s));
}
const _i = (e) => !!(e && e.__v_isRef === !0), f = (e) => mt(e) ? e : e == null ? "" : Fe(e) || st(e) && (e.toString === hi || !He(e.toString)) ? _i(e) ? f(e.value) : JSON.stringify(e, bi, 2) : String(e), bi = (e, s) => _i(s) ? bi(e, s.value) : _o(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[fa(a, r) + " =>"] = l, o),
    {}
  )
} : To(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => fa(o))
} : os(s) ? fa(s) : st(s) && !Fe(s) && !yi(s) ? String(s) : s, fa = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    os(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ot;
class kc {
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
function _c() {
  return Ot;
}
let rt;
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
    this.flags |= 2, kl(this), Si(this);
    const s = rt, o = ss;
    rt = this, ss = !0;
    try {
      return this.fn();
    } finally {
      Ii(this), rt = s, ss = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Za(s);
      this.deps = this.depsTail = void 0, kl(this), this.onStop && this.onStop(), this.flags &= -2;
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
  const s = e.dep, o = rt, a = ss;
  rt = e, ss = !0;
  try {
    Si(e);
    const l = e.fn(e._value);
    (s.version === 0 || zs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    rt = o, ss = a, Ii(e), e.flags &= -3;
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
let ss = !0;
const Ti = [];
function xs() {
  Ti.push(ss), ss = !1;
}
function Ss() {
  const e = Ti.pop();
  ss = e === void 0 ? !0 : e;
}
function kl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = rt;
    rt = void 0;
    try {
      s();
    } finally {
      rt = o;
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
    if (!rt || !ss || rt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== rt)
      o = this.activeLink = new $c(rt, this), rt.deps ? (o.prevDep = rt.depsTail, rt.depsTail.nextDep = o, rt.depsTail = o) : rt.deps = rt.depsTail = o, Ri(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = rt.depsTail, o.nextDep = void 0, rt.depsTail.nextDep = o, rt.depsTail = o, rt.deps === o && (rt.deps = a);
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
const Ra = /* @__PURE__ */ new WeakMap(), Xs = Symbol(
  ""
), Pa = Symbol(
  ""
), sn = Symbol(
  ""
);
function $t(e, s, o) {
  if (ss && rt) {
    let a = Ra.get(e);
    a || Ra.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new el()), l.map = a, l.key = o), l.track();
  }
}
function bs(e, s, o, a, l, r) {
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
    const d = Fe(e), m = d && Ya(o);
    if (d && o === "length") {
      const v = Number(a);
      c.forEach((g, w) => {
        (w === "length" || w === sn || !os(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(sn)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(Xs)), _o(e) && u(c.get(Pa)));
          break;
        case "delete":
          d || (u(c.get(Xs)), _o(e) && u(c.get(Pa)));
          break;
        case "set":
          _o(e) && u(c.get(Xs));
          break;
      }
  }
  Xa();
}
function vo(e) {
  const s = Xe(e);
  return s === e ? s : ($t(s, "iterate", sn), qt(e) ? s : s.map(ns));
}
function Xn(e) {
  return $t(e = Xe(e), "iterate", sn), e;
}
function Ns(e, s) {
  return Is(e) ? Zs(e) ? So(ns(s)) : So(s) : ns(s);
}
const Cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return va(this, Symbol.iterator, (e) => Ns(this, e));
  },
  concat(...e) {
    return vo(this).concat(
      ...e.map((s) => Fe(s) ? vo(s) : s)
    );
  },
  entries() {
    return va(this, "entries", (e) => (e[1] = Ns(this, e[1]), e));
  },
  every(e, s) {
    return ws(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return ws(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Ns(this, a)),
      arguments
    );
  },
  find(e, s) {
    return ws(
      this,
      "find",
      e,
      s,
      (o) => Ns(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return ws(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return ws(
      this,
      "findLast",
      e,
      s,
      (o) => Ns(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return ws(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return ws(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return pa(this, "includes", e);
  },
  indexOf(...e) {
    return pa(this, "indexOf", e);
  },
  join(e) {
    return vo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return pa(this, "lastIndexOf", e);
  },
  map(e, s) {
    return ws(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Ao(this, "pop");
  },
  push(...e) {
    return Ao(this, "push", e);
  },
  reduce(e, ...s) {
    return _l(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return _l(this, "reduceRight", e, s);
  },
  shift() {
    return Ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return ws(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Ao(this, "splice", e);
  },
  toReversed() {
    return vo(this).toReversed();
  },
  toSorted(e) {
    return vo(this).toSorted(e);
  },
  toSpliced(...e) {
    return vo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ao(this, "unshift", e);
  },
  values() {
    return va(this, "values", (e) => Ns(this, e));
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
function ws(e, s, o, a, l, r) {
  const c = Xn(e), u = c !== e && !qt(e), d = c[s];
  if (d !== xc[s]) {
    const g = d.apply(e, r);
    return u ? ns(g) : g;
  }
  let m = o;
  c !== e && (u ? m = function(g, w) {
    return o.call(this, Ns(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = d.call(c, m, a);
  return u && l ? l(v) : v;
}
function _l(e, s, o, a) {
  const l = Xn(e);
  let r = o;
  return l !== e && (qt(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ns(e, u), d, e);
  }), l[s](r, ...a);
}
function pa(e, s, o) {
  const a = Xe(e);
  $t(a, "iterate", sn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && ol(o[0]) ? (o[0] = Xe(o[0]), a[s](...o)) : l;
}
function Ao(e, s, o = []) {
  xs(), Qa();
  const a = Xe(e)[s].apply(e, o);
  return Xa(), Ss(), a;
}
const Sc = /* @__PURE__ */ Ha("__proto__,__v_isRef,__isVue"), Pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(os)
);
function Ic(e) {
  os(e) || (e = String(e));
  const s = Xe(this);
  return $t(s, "has", e), s.hasOwnProperty(e);
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
      return a === (l ? r ? Oc : Ni : r ? Ai : Li).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = Fe(s);
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
      St(s) ? s : a
    );
    if ((os(o) ? Pi.has(o) : Sc(o)) || (l || $t(s, "get", o), r))
      return u;
    if (St(u)) {
      const d = c && Ya(o) ? u : u.value;
      return l && st(d) ? An(d) : d;
    }
    return st(u) ? l ? An(u) : Ws(u) : u;
  }
}
class Di extends Mi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Fe(s) && Ya(o);
    if (!this._isShallow) {
      const m = Is(r);
      if (!qt(a) && !Is(a) && (r = Xe(r), a = Xe(a)), !c && St(r) && !St(a))
        return m || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : tt(s, o), d = Reflect.set(
      s,
      o,
      a,
      St(s) ? s : l
    );
    return s === Xe(l) && (u ? zs(a, r) && bs(s, "set", o, a) : bs(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = tt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && bs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!os(o) || !Pi.has(o)) && $t(s, "has", o), a;
  }
  ownKeys(s) {
    return $t(
      s,
      "iterate",
      Fe(s) ? "length" : Xs
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
    const l = this.__v_raw, r = Xe(l), c = _o(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...a), v = o ? Ma : s ? So : ns;
    return !s && $t(
      r,
      "iterate",
      d ? Pa : Xs
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
      const r = this.__v_raw, c = Xe(r), u = Xe(l);
      e || (zs(l, u) && $t(c, "get", l), $t(c, "get", u));
      const { has: d } = yn(c), m = s ? Ma : e ? So : ns;
      if (d.call(c, l))
        return m(r.get(l));
      if (d.call(c, u))
        return m(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && $t(Xe(l), "iterate", Xs), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = Xe(r), u = Xe(l);
      return e || (zs(l, u) && $t(c, "has", l), $t(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = Xe(u), m = s ? Ma : e ? So : ns;
      return !e && $t(d, "iterate", Xs), u.forEach((v, g) => l.call(r, m(v), m(g), c));
    }
  };
  return gt(
    o,
    e ? {
      add: wn("add"),
      set: wn("set"),
      delete: wn("delete"),
      clear: wn("clear")
    } : {
      add(l) {
        !s && !qt(l) && !Is(l) && (l = Xe(l));
        const r = Xe(this);
        return yn(r).has.call(r, l) || (r.add(l), bs(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !qt(r) && !Is(r) && (r = Xe(r));
        const c = Xe(this), { has: u, get: d } = yn(c);
        let m = u.call(c, l);
        m || (l = Xe(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), m ? zs(r, v) && bs(c, "set", l, r) : bs(c, "add", l, r), this;
      },
      delete(l) {
        const r = Xe(this), { has: c, get: u } = yn(r);
        let d = c.call(r, l);
        d || (l = Xe(l), d = c.call(r, l)), u && u.call(r, l);
        const m = r.delete(l);
        return d && bs(r, "delete", l, void 0), m;
      },
      clear() {
        const l = Xe(this), r = l.size !== 0, c = l.clear();
        return r && bs(
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
    tt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Lc = {
  get: /* @__PURE__ */ tl(!1, !1)
}, Ac = {
  get: /* @__PURE__ */ tl(!1, !0)
}, Nc = {
  get: /* @__PURE__ */ tl(!0, !1)
};
const Li = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap();
function Uc(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Uc(cc(e));
}
function Ws(e) {
  return Is(e) ? e : sl(
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
    Ac,
    Ai
  );
}
function An(e) {
  return sl(
    e,
    !0,
    Rc,
    Nc,
    Ni
  );
}
function sl(e, s, o, a, l) {
  if (!st(e) || e.__v_raw && !(s && e.__v_isReactive))
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
function Zs(e) {
  return Is(e) ? Zs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Is(e) {
  return !!(e && e.__v_isReadonly);
}
function qt(e) {
  return !!(e && e.__v_isShallow);
}
function ol(e) {
  return e ? !!e.__v_raw : !1;
}
function Xe(e) {
  const s = e && e.__v_raw;
  return s ? Xe(s) : e;
}
function Vc(e) {
  return !tt(e, "__v_skip") && Object.isExtensible(e) && wi(e, "__v_skip", !0), e;
}
const ns = (e) => st(e) ? Ws(e) : e, So = (e) => st(e) ? An(e) : e;
function St(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Bc(e, !1);
}
function Bc(e, s) {
  return St(e) ? e : new Wc(e, s);
}
class Wc {
  constructor(s, o) {
    this.dep = new el(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Xe(s), this._value = o ? s : ns(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || qt(s) || Is(s);
    s = a ? s : Xe(s), zs(s, o) && (this._rawValue = s, this._value = a ? s : ns(s), this.dep.trigger());
  }
}
function We(e) {
  return St(e) ? e.value : e;
}
const Gc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return St(l) && !St(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Oi(e) {
  return Zs(e) ? e : new Proxy(e, Gc);
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
    rt !== this)
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
  return He(e) ? a = e : (a = e.get, l = e.set), new jc(a, l, o);
}
const kn = {}, Nn = /* @__PURE__ */ new WeakMap();
let Js;
function Kc(e, s = !1, o = Js) {
  if (o) {
    let a = Nn.get(o);
    a || Nn.set(o, a = []), a.push(e);
  }
}
function qc(e, s, o = nt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, m = (T) => l ? T : qt(T) || l === !1 || l === 0 ? $s(T, 1) : $s(T);
  let v, g, w, p, k = !1, C = !1;
  if (St(e) ? (g = () => e.value, k = qt(e)) : Zs(e) ? (g = () => m(e), k = !0) : Fe(e) ? (C = !0, k = e.some((T) => Zs(T) || qt(T)), g = () => e.map((T) => {
    if (St(T))
      return T.value;
    if (Zs(T))
      return m(T);
    if (He(T))
      return d ? d(T, 2) : T();
  })) : He(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      xs();
      try {
        w();
      } finally {
        Ss();
      }
    }
    const T = Js;
    Js = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Js = T;
    }
  } : g = ps, s && l) {
    const T = g, D = l === !0 ? 1 / 0 : l;
    g = () => $s(T(), D);
  }
  const b = _c(), x = () => {
    v.stop(), b && b.active && qa(b.effects, v);
  };
  if (r && s) {
    const T = s;
    s = (...D) => {
      T(...D), x();
    };
  }
  let M = C ? new Array(e.length).fill(kn) : kn;
  const R = (T) => {
    if (!(!(v.flags & 1) || !v.dirty && !T))
      if (s) {
        const D = v.run();
        if (l || k || (C ? D.some((O, W) => zs(O, M[W])) : zs(D, M))) {
          w && w();
          const O = Js;
          Js = v;
          try {
            const W = [
              D,
              // pass undefined as the old value when it's changed for the first time
              M === kn ? void 0 : C && M[0] === kn ? [] : M,
              p
            ];
            M = D, d ? d(s, 3, W) : (
              // @ts-expect-error
              s(...W)
            );
          } finally {
            Js = O;
          }
        }
      } else
        v.run();
  };
  return u && u(R), v = new $i(g), v.scheduler = c ? () => c(R, !1) : R, p = (T) => Kc(T, !1, v), w = v.onStop = () => {
    const T = Nn.get(v);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const D of T) D();
      Nn.delete(v);
    }
  }, s ? a ? R(!0) : M = v.run() : c ? c(R.bind(null, !0), !0) : v.run(), x.pause = v.pause.bind(v), x.resume = v.resume.bind(v), x.stop = x, x;
}
function $s(e, s = 1 / 0, o) {
  if (s <= 0 || !st(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, St(e))
    $s(e.value, s, o);
  else if (Fe(e))
    for (let a = 0; a < e.length; a++)
      $s(e[a], s, o);
  else if (To(e) || _o(e))
    e.forEach((a) => {
      $s(a, s, o);
    });
  else if (yi(e)) {
    for (const a in e)
      $s(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && $s(e[a], s, o);
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
function as(e, s, o, a) {
  if (He(e)) {
    const l = fn(e, s, o, a);
    return l && gi(l) && l.catch((r) => {
      Zn(r, s, o);
    }), l;
  }
  if (Fe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(as(e[r], s, o, a));
    return l;
  }
}
function Zn(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || nt;
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
      xs(), fn(r, null, 10, [
        e,
        d,
        m
      ]), Ss();
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
const Mt = [];
let fs = -1;
const bo = [];
let Os = null, ho = 0;
const Ui = /* @__PURE__ */ Promise.resolve();
let On = null;
function ht(e) {
  const s = On || Ui;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Jc(e) {
  let s = fs + 1, o = Mt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Mt[a], r = on(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function nl(e) {
  if (!(e.flags & 1)) {
    const s = on(e), o = Mt[Mt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= on(o) ? Mt.push(e) : Mt.splice(Jc(s), 0, e), e.flags |= 1, zi();
  }
}
function zi() {
  On || (On = Ui.then(Vi));
}
function Qc(e) {
  Fe(e) ? bo.push(...e) : Os && e.id === -1 ? Os.splice(ho + 1, 0, e) : e.flags & 1 || (bo.push(e), e.flags |= 1), zi();
}
function bl(e, s, o = fs + 1) {
  for (; o < Mt.length; o++) {
    const a = Mt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Mt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Fi(e) {
  if (bo.length) {
    const s = [...new Set(bo)].sort(
      (o, a) => on(o) - on(a)
    );
    if (bo.length = 0, Os) {
      Os.push(...s);
      return;
    }
    for (Os = s, ho = 0; ho < Os.length; ho++) {
      const o = Os[ho];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Os = null, ho = 0;
  }
}
const on = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Vi(e) {
  try {
    for (fs = 0; fs < Mt.length; fs++) {
      const s = Mt[fs];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), fn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; fs < Mt.length; fs++) {
      const s = Mt[fs];
      s && (s.flags &= -2);
    }
    fs = -1, Mt.length = 0, Fi(), On = null, (Mt.length || bo.length) && Vi();
  }
}
let wt = null, Bi = null;
function Un(e) {
  const s = wt;
  return wt = e, Bi = e && e.type.__scopeId || null, s;
}
function h(e, s = wt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Vn(-1);
    const r = Un(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Un(r), a._d && Vn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function qe(e, s) {
  if (wt === null)
    return e;
  const o = na(wt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, d = nt] = s[l];
    r && (He(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && $s(c), a.push({
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
function Hs(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (xs(), as(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Ss());
  }
}
const Wi = Symbol("_vte"), Gi = (e) => e.__isTeleport, Ko = (e) => e && (e.disabled || e.disabled === ""), $l = (e) => e && (e.defer || e.defer === ""), Cl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Da = (e, s) => {
  const o = e && e.to;
  return mt(o) ? s ? s(o) : null : o;
}, ji = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: k, createText: C, createComment: b }
    } = m, x = Ko(s.props);
    let { shapeFlag: M, children: R, dynamicChildren: T } = s;
    if (e == null) {
      const D = s.el = C(""), O = s.anchor = C("");
      p(D, o, a), p(O, o, a);
      const W = (E, j) => {
        M & 16 && v(
          R,
          E,
          j,
          l,
          r,
          c,
          u,
          d
        );
      }, I = () => {
        const E = s.target = Da(s.props, k), j = Hi(E, s, C, p);
        E && (c !== "svg" && Cl(E) ? c = "svg" : c !== "mathml" && xl(E) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), x || (W(E, j), Tn(s, !1)));
      };
      x && (W(o, O), Tn(s, !0)), $l(s.props) ? (s.el.__isMounted = !1, Rt(() => {
        I(), delete s.el.__isMounted;
      }, r)) : I();
    } else {
      if ($l(s.props) && e.el.__isMounted === !1) {
        Rt(() => {
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
      const D = s.anchor = e.anchor, O = s.target = e.target, W = s.targetAnchor = e.targetAnchor, I = Ko(e.props), E = I ? o : O, j = I ? D : W;
      if (c === "svg" || Cl(O) ? c = "svg" : (c === "mathml" || xl(O)) && (c = "mathml"), T ? (w(
        e.dynamicChildren,
        T,
        E,
        l,
        r,
        c,
        u
      ), cl(e, s, !0)) : d || g(
        e,
        s,
        E,
        j,
        l,
        r,
        c,
        u,
        !1
      ), x)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : _n(
          s,
          o,
          D,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ee = s.target = Da(
          s.props,
          k
        );
        ee && _n(
          s,
          ee,
          null,
          m,
          0
        );
      } else I && _n(
        s,
        O,
        W,
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
      for (let k = 0; k < u.length; k++) {
        const C = u[k];
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
  move: _n,
  hydrate: Xc
};
function _n(e, s, o, { o: { insert: a }, m: l }, r = 2) {
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
  function w(C, b, x, M) {
    b.anchor = g(
      c(C),
      b,
      u(C),
      o,
      a,
      l,
      r
    ), b.targetStart = x, b.targetAnchor = M;
  }
  const p = s.target = Da(
    s.props,
    d
  ), k = Ko(s.props);
  if (p) {
    const C = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (k)
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
    Tn(s, k);
  } else k && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const kt = ji;
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
const _s = Symbol("_leaveCb"), bn = Symbol("_enterCb");
function Ki() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qe(() => {
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
      const r = Ji(l), c = Xe(e), { mode: u } = c;
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
      d.type !== Ct && to(d, m);
      let v = o.subTree && Sl(o.subTree);
      if (v && v.type !== Ct && !Qs(v, d) && Yi(o).type !== Ct) {
        let g = nn(
          v,
          c,
          a,
          o
        );
        if (to(v, g), u === "out-in" && d.type !== Ct)
          return a.isLeaving = !0, g.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, ga(r);
        u === "in-out" && d.type !== Ct ? g.delayLeave = (w, p, k) => {
          const C = Qi(
            a,
            v
          );
          C[String(v.key)] = v, w[_s] = () => {
            p(), w[_s] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            k(), delete m.delayedLeave, v = void 0;
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
      if (o.type !== Ct) {
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
    onAfterLeave: k,
    onLeaveCancelled: C,
    onBeforeAppear: b,
    onAppear: x,
    onAfterAppear: M,
    onAppearCancelled: R
  } = s, T = String(e.key), D = Qi(o, e), O = (E, j) => {
    E && as(
      E,
      a,
      9,
      j
    );
  }, W = (E, j) => {
    const ee = j[1];
    O(E, j), Fe(E) ? E.every((B) => B.length <= 1) && ee() : E.length <= 1 && ee();
  }, I = {
    mode: c,
    persisted: u,
    beforeEnter(E) {
      let j = d;
      if (!o.isMounted)
        if (r)
          j = b || d;
        else
          return;
      E[_s] && E[_s](
        !0
        /* cancelled */
      );
      const ee = D[T];
      ee && Qs(e, ee) && ee.el[_s] && ee.el[_s](), O(j, [E]);
    },
    enter(E) {
      let j = m, ee = v, B = g;
      if (!o.isMounted)
        if (r)
          j = x || m, ee = M || v, B = R || g;
        else
          return;
      let A = !1;
      const K = E[bn] = (X) => {
        A || (A = !0, X ? O(B, [E]) : O(ee, [E]), I.delayedLeave && I.delayedLeave(), E[bn] = void 0);
      };
      j ? W(j, [E, K]) : K();
    },
    leave(E, j) {
      const ee = String(e.key);
      if (E[bn] && E[bn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return j();
      O(w, [E]);
      let B = !1;
      const A = E[_s] = (K) => {
        B || (B = !0, j(), K ? O(C, [E]) : O(k, [E]), E[_s] = void 0, D[ee] === e && delete D[ee]);
      };
      D[ee] = e, p ? W(p, [E, A]) : A();
    },
    clone(E) {
      const j = nn(
        E,
        s,
        o,
        a,
        l
      );
      return l && l(j), j;
    }
  };
  return I;
}
function ga(e) {
  if (ea(e))
    return e = Fs(e), e.children = null, e;
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
    if (s & 32 && He(o.default))
      return o.default();
  }
}
function to(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, to(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function al(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === H ? (c.patchFlag & 128 && l++, a = a.concat(
      al(c.children, s, u)
    )) : (s || c.type !== Ct) && a.push(u != null ? Fs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function ge(e, s) {
  return He(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    gt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Xi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zn = /* @__PURE__ */ new WeakMap();
function qo(e, s, o, a, l = !1) {
  if (Fe(e)) {
    e.forEach(
      (k, C) => qo(
        k,
        s && (Fe(s) ? s[C] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if ($o(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && qo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? na(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, m = s && s.r, v = u.refs === nt ? u.refs = {} : u.refs, g = u.setupState, w = Xe(g), p = g === nt ? pi : (k) => tt(w, k);
  if (m != null && m !== d) {
    if (Il(s), mt(m))
      v[m] = null, p(m) && (g[m] = null);
    else if (St(m)) {
      m.value = null;
      const k = s;
      k.k && (v[k.k] = null);
    }
  }
  if (He(d))
    fn(d, u, 12, [c, v]);
  else {
    const k = mt(d), C = St(d);
    if (k || C) {
      const b = () => {
        if (e.f) {
          const x = k ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Fe(x) && qa(x, r);
          else if (Fe(x))
            x.includes(r) || x.push(r);
          else if (k)
            v[d] = [r], p(d) && (g[d] = v[d]);
          else {
            const M = [r];
            d.value = M, e.k && (v[e.k] = M);
          }
        } else k ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const x = () => {
          b(), zn.delete(e);
        };
        x.id = -1, zn.set(e, x), Rt(x, o);
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
const $o = (e) => !!e.type.__asyncLoader, ea = (e) => e.type.__isKeepAlive;
function tu(e, s) {
  Zi(e, "a", s);
}
function su(e, s) {
  Zi(e, "da", s);
}
function Zi(e, s, o = xt) {
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
  Gs(() => {
    qa(a[s], l);
  }, o);
}
function ta(e, s, o = xt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      xs();
      const u = mn(o), d = as(s, o, e, c);
      return u(), Ss(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Es = (e) => (s, o = xt) => {
  (!rn || e === "sp") && ta(e, (...a) => s(...a), o);
}, nu = Es("bm"), Qe = Es("m"), au = Es(
  "bu"
), er = Es("u"), tr = Es(
  "bum"
), Gs = Es("um"), lu = Es(
  "sp"
), iu = Es("rtg"), ru = Es("rtc");
function cu(e, s = xt) {
  ta("ec", e, s);
}
const uu = "components", sr = Symbol.for("v-ndc");
function ll(e) {
  return mt(e) ? du(uu, e, !1) || e : e || sr;
}
function du(e, s, o = !0, a = !1) {
  const l = wt || xt;
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
function he(e, s, o, a) {
  let l;
  const r = o, c = Fe(e);
  if (c || mt(e)) {
    const u = c && Zs(e);
    let d = !1, m = !1;
    u && (d = !qt(e), m = Is(e), e = Xn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        d ? m ? So(ns(e[v])) : ns(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (st(e))
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
function so(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Fe(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function Ke(e, s, o = {}, a, l) {
  if (wt.ce || wt.parent && $o(wt.parent) && wt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), L(
      H,
      null,
      [S("slot", o, a && a())],
      m ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && or(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = L(
    H,
    {
      key: (u && !os(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function or(e) {
  return e.some((s) => ln(s) ? !(s.type === Ct || s.type === H && !or(s.children)) : !0) ? e : null;
}
const La = (e) => e ? br(e) ? na(e) : La(e.parent) : null, Yo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ gt(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = ht.bind(e.proxy)),
    $watch: (e) => $u.bind(e)
  })
), ha = (e, s) => e !== nt && !e.__isScriptSetup && tt(e, s), fu = {
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
        if (l !== nt && tt(l, s))
          return c[s] = 2, l[s];
        if (tt(r, s))
          return c[s] = 3, r[s];
        if (o !== nt && tt(o, s))
          return c[s] = 4, o[s];
        Aa && (c[s] = 0);
      }
    }
    const m = Yo[s];
    let v, g;
    if (m)
      return s === "$attrs" && $t(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== nt && tt(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, tt(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return ha(l, s) ? (l[s] = o, !0) : a !== nt && tt(a, s) ? (a[s] = o, !0) : tt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== nt && u[0] !== "$" && tt(e, u) || ha(s, u) || tt(r, u) || tt(a, u) || tt(Yo, u) || tt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : tt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Tl(e) {
  return Fe(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Aa = !0;
function mu(e) {
  const s = ar(e), o = e.proxy, a = e.ctx;
  Aa = !1, s.beforeCreate && Rl(s.beforeCreate, e, "bc");
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
    updated: k,
    activated: C,
    deactivated: b,
    beforeDestroy: x,
    beforeUnmount: M,
    destroyed: R,
    unmounted: T,
    render: D,
    renderTracked: O,
    renderTriggered: W,
    errorCaptured: I,
    serverPrefetch: E,
    // public API
    expose: j,
    inheritAttrs: ee,
    // assets
    components: B,
    directives: A,
    filters: K
  } = s;
  if (m && vu(m, a, null), c)
    for (const se in c) {
      const Y = c[se];
      He(Y) && (a[se] = Y.bind(o));
    }
  if (l) {
    const se = l.call(o, o);
    st(se) && (e.data = Ws(se));
  }
  if (Aa = !0, r)
    for (const se in r) {
      const Y = r[se], ae = He(Y) ? Y.bind(o, o) : He(Y.get) ? Y.get.bind(o, o) : ps, re = !He(Y) && He(Y.set) ? Y.set.bind(o) : ps, Pe = z({
        get: ae,
        set: re
      });
      Object.defineProperty(a, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (Ve) => Pe.value = Ve
      });
    }
  if (u)
    for (const se in u)
      nr(u[se], a, o, se);
  if (d) {
    const se = He(d) ? d.call(o) : d;
    Reflect.ownKeys(se).forEach((Y) => {
      ku(Y, se[Y]);
    });
  }
  v && Rl(v, e, "c");
  function F(se, Y) {
    Fe(Y) ? Y.forEach((ae) => se(ae.bind(o))) : Y && se(Y.bind(o));
  }
  if (F(nu, g), F(Qe, w), F(au, p), F(er, k), F(tu, C), F(su, b), F(cu, I), F(ru, O), F(iu, W), F(tr, M), F(Gs, T), F(lu, E), Fe(j))
    if (j.length) {
      const se = e.exposed || (e.exposed = {});
      j.forEach((Y) => {
        Object.defineProperty(se, Y, {
          get: () => o[Y],
          set: (ae) => o[Y] = ae,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === ps && (e.render = D), ee != null && (e.inheritAttrs = ee), B && (e.components = B), A && (e.directives = A), E && Xi(e);
}
function vu(e, s, o = ps) {
  Fe(e) && (e = Na(e));
  for (const a in e) {
    const l = e[a];
    let r;
    st(l) ? "default" in l ? r = Rn(
      l.from || a,
      l.default,
      !0
    ) : r = Rn(l.from || a) : r = Rn(l), St(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Rl(e, s, o) {
  as(
    Fe(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function nr(e, s, o, a) {
  let l = a.includes(".") ? rr(o, a) : () => o[a];
  if (mt(e)) {
    const r = s[e];
    He(r) && ft(l, r);
  } else if (He(e))
    ft(l, e.bind(o));
  else if (st(e))
    if (Fe(e))
      e.forEach((r) => nr(r, s, o, a));
    else {
      const r = He(e.handler) ? e.handler.bind(o) : s[e.handler];
      He(r) && ft(l, r, e);
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
  ), Fn(d, s, c)), st(s) && r.set(s, d), d;
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
  beforeCreate: Tt,
  created: Tt,
  beforeMount: Tt,
  mounted: Tt,
  beforeUpdate: Tt,
  updated: Tt,
  beforeDestroy: Tt,
  beforeUnmount: Tt,
  destroyed: Tt,
  unmounted: Tt,
  activated: Tt,
  deactivated: Tt,
  errorCaptured: Tt,
  serverPrefetch: Tt,
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
    return gt(
      He(e) ? e.call(this, this) : e,
      He(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function gu(e, s) {
  return Wo(Na(e), Na(s));
}
function Na(e) {
  if (Fe(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Tt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Wo(e, s) {
  return e ? gt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Ml(e, s) {
  return e ? Fe(e) && Fe(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : gt(
    /* @__PURE__ */ Object.create(null),
    Tl(e),
    Tl(s ?? {})
  ) : s;
}
function hu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = gt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Tt(e[a], s[a]);
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
    He(a) || (a = gt({}, a)), l != null && !st(l) && (l = null);
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
        return c.has(v) || (v && He(v.install) ? (c.add(v), v.install(m, ...g)) : He(v) && (c.add(v), v(m, ...g))), m;
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
        d && (as(
          u,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, g) {
        return r.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = Co;
        Co = m;
        try {
          return v();
        } finally {
          Co = g;
        }
      }
    };
    return m;
  };
}
let Co = null;
function ku(e, s) {
  if (xt) {
    let o = xt.provides;
    const a = xt.parent && xt.parent.provides;
    a === o && (o = xt.provides = Object.create(a)), o[e] = s;
  }
}
function Rn(e, s, o = !1) {
  const a = dl();
  if (a || Co) {
    let l = Co ? Co._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && He(s) ? s.call(a && a.proxy) : s;
  }
}
const _u = Symbol.for("v-scx"), bu = () => Rn(_u);
function ft(e, s, o) {
  return ir(e, s, o);
}
function ir(e, s, o = nt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = gt({}, o), d = s && a || !s && r !== "post";
  let m;
  if (rn) {
    if (r === "sync") {
      const p = bu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = ps, p.resume = ps, p.pause = ps, p;
    }
  }
  const v = xt;
  u.call = (p, k, C) => as(p, v, k, C);
  let g = !1;
  r === "post" ? u.scheduler = (p) => {
    Rt(p, v && v.suspense);
  } : r !== "sync" && (g = !0, u.scheduler = (p, k) => {
    k ? p() : nl(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = qc(e, s, u);
  return rn && (m ? m.push(w) : d && w()), w;
}
function $u(e, s, o) {
  const a = this.proxy, l = mt(e) ? e.includes(".") ? rr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  He(s) ? r = s : (r = s.handler, o = s);
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
const Cu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Qt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function xu(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || nt;
  let l = o;
  const r = s.startsWith("update:"), c = r && Cu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => mt(v) ? v.trim() : v)), c.number && (l = o.map(Jn)));
  let u, d = a[u = da(s)] || // also try camelCase event handler (#2249)
  a[u = da(Qt(s))];
  !d && r && (d = a[u = da(Bs(s))]), d && as(
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
    e.emitted[u] = !0, as(
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
  if (!He(e)) {
    const d = (m) => {
      const v = cr(m, s, !0);
      v && (u = !0, gt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (st(e) && a.set(e, null), null) : (Fe(r) ? r.forEach((d) => c[d] = null) : gt(c, r), st(e) && a.set(e, c), c);
}
function sa(e, s) {
  return !e || !Kn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), tt(e, s[0].toLowerCase() + s.slice(1)) || tt(e, Bs(s)) || tt(e, s));
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
    ctx: k,
    inheritAttrs: C
  } = e, b = Un(e);
  let x, M;
  try {
    if (o.shapeFlag & 4) {
      const T = l || a, D = T;
      x = vs(
        m.call(
          D,
          T,
          v,
          g,
          p,
          w,
          k
        )
      ), M = u;
    } else {
      const T = s;
      x = vs(
        T.length > 1 ? T(
          g,
          { attrs: u, slots: c, emit: d }
        ) : T(
          g,
          null
        )
      ), M = s.props ? u : Iu(u);
    }
  } catch (T) {
    Jo.length = 0, Zn(T, e, 1), x = S(Ct);
  }
  let R = x;
  if (M && C !== !1) {
    const T = Object.keys(M), { shapeFlag: D } = R;
    T.length && D & 7 && (r && T.some(Ka) && (M = Eu(
      M,
      r
    )), R = Fs(R, M, !1, !0));
  }
  return o.dirs && (R = Fs(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(o.dirs) : o.dirs), o.transition && to(R, o.transition), x = R, Un(b), x;
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
  } = e, u = Xe(l), [d] = e.propsOptions;
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
          if (tt(r, w))
            p !== r[w] && (r[w] = p, m = !0);
          else {
            const k = Qt(w);
            l[k] = Oa(
              d,
              u,
              k,
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
      !tt(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !tt(s, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Oa(
        d,
        u,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (r !== u)
      for (const g in r)
        (!s || !tt(s, g)) && (delete r[g], m = !0);
  }
  m && bs(e.attrs, "set", "");
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
      l && tt(l, v = Qt(d)) ? !r || !r.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : sa(e.emitsOptions, d) || (!(d in a) || m !== a[d]) && (a[d] = m, c = !0);
    }
  if (r) {
    const d = Xe(o), m = u || nt;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      o[g] = Oa(
        l,
        d,
        g,
        m[g],
        e,
        !tt(m, g)
      );
    }
  }
  return c;
}
function Oa(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = tt(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && He(d)) {
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
    ] && (a === "" || a === Bs(o)) && (a = !0));
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
  if (!He(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = vr(g, s, !0);
      gt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return st(e) && a.set(e, ko), ko;
  if (Fe(r))
    for (let v = 0; v < r.length; v++) {
      const g = Qt(r[v]);
      Al(g) && (c[g] = nt);
    }
  else if (r)
    for (const v in r) {
      const g = Qt(v);
      if (Al(g)) {
        const w = r[v], p = c[g] = Fe(w) || He(w) ? { type: w } : gt({}, w), k = p.type;
        let C = !1, b = !0;
        if (Fe(k))
          for (let x = 0; x < k.length; ++x) {
            const M = k[x], R = He(M) && M.name;
            if (R === "Boolean") {
              C = !0;
              break;
            } else R === "String" && (b = !1);
          }
        else
          C = He(k) && k.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = b, (C || tt(p, "default")) && u.push(g);
      }
    }
  const m = [c, u];
  return st(e) && a.set(e, m), m;
}
function Al(e) {
  return e[0] !== "$" && !Go(e);
}
const il = (e) => e === "_" || e === "_ctx" || e === "$stable", rl = (e) => Fe(e) ? e.map(vs) : [vs(e)], Lu = (e, s, o) => {
  if (s._n)
    return s;
  const a = h((...l) => rl(s(...l)), o);
  return a._c = !1, a;
}, pr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (il(l)) continue;
    const r = e[l];
    if (He(r))
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
}, Au = (e, s, o) => {
  const a = e.slots = dr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (hr(a, s, o), o && wi(a, "_", l, !0)) : pr(s, a);
  } else s && gr(e, s);
}, Nu = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = nt;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : hr(l, s, o) : (r = !s.$stable, pr(s, l)), c = s;
  } else s && (gr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !il(u) && c[u] == null && delete l[u];
}, Rt = Vu;
function Ou(e) {
  return Uu(e);
}
function Uu(e, s) {
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
    setScopeId: p = ps,
    insertStaticContent: k
  } = e, C = (U, P, V, Z = null, ne = null, fe = null, _e = void 0, ie = null, be = !!P.dynamicChildren) => {
    if (U === P)
      return;
    U && !Qs(U, P) && (Z = de(U), Ve(U, ne, fe, !0), U = null), P.patchFlag === -2 && (be = !1, P.dynamicChildren = null);
    const { type: ce, ref: De, shapeFlag: Ee } = P;
    switch (ce) {
      case oa:
        b(U, P, V, Z);
        break;
      case Ct:
        x(U, P, V, Z);
        break;
      case wa:
        U == null && M(P, V, Z, _e);
        break;
      case H:
        B(
          U,
          P,
          V,
          Z,
          ne,
          fe,
          _e,
          ie,
          be
        );
        break;
      default:
        Ee & 1 ? D(
          U,
          P,
          V,
          Z,
          ne,
          fe,
          _e,
          ie,
          be
        ) : Ee & 6 ? A(
          U,
          P,
          V,
          Z,
          ne,
          fe,
          _e,
          ie,
          be
        ) : (Ee & 64 || Ee & 128) && ce.process(
          U,
          P,
          V,
          Z,
          ne,
          fe,
          _e,
          ie,
          be,
          Te
        );
    }
    De != null && ne ? qo(De, U && U.ref, fe, P || U, !P) : De == null && U && U.ref != null && qo(U.ref, null, fe, U, !0);
  }, b = (U, P, V, Z) => {
    if (U == null)
      a(
        P.el = u(P.children),
        V,
        Z
      );
    else {
      const ne = P.el = U.el;
      P.children !== U.children && m(ne, P.children);
    }
  }, x = (U, P, V, Z) => {
    U == null ? a(
      P.el = d(P.children || ""),
      V,
      Z
    ) : P.el = U.el;
  }, M = (U, P, V, Z) => {
    [U.el, U.anchor] = k(
      U.children,
      P,
      V,
      Z,
      U.el,
      U.anchor
    );
  }, R = ({ el: U, anchor: P }, V, Z) => {
    let ne;
    for (; U && U !== P; )
      ne = w(U), a(U, V, Z), U = ne;
    a(P, V, Z);
  }, T = ({ el: U, anchor: P }) => {
    let V;
    for (; U && U !== P; )
      V = w(U), l(U), U = V;
    l(P);
  }, D = (U, P, V, Z, ne, fe, _e, ie, be) => {
    if (P.type === "svg" ? _e = "svg" : P.type === "math" && (_e = "mathml"), U == null)
      O(
        P,
        V,
        Z,
        ne,
        fe,
        _e,
        ie,
        be
      );
    else {
      const ce = U.el && U.el._isVueCE ? U.el : null;
      try {
        ce && ce._beginPatch(), E(
          U,
          P,
          ne,
          fe,
          _e,
          ie,
          be
        );
      } finally {
        ce && ce._endPatch();
      }
    }
  }, O = (U, P, V, Z, ne, fe, _e, ie) => {
    let be, ce;
    const { props: De, shapeFlag: Ee, transition: ue, dirs: G } = U;
    if (be = U.el = c(
      U.type,
      fe,
      De && De.is,
      De
    ), Ee & 8 ? v(be, U.children) : Ee & 16 && I(
      U.children,
      be,
      null,
      Z,
      ne,
      ya(U, fe),
      _e,
      ie
    ), G && Hs(U, null, Z, "created"), W(be, U, U.scopeId, _e, Z), De) {
      for (const Ce in De)
        Ce !== "value" && !Go(Ce) && r(be, Ce, null, De[Ce], fe, Z);
      "value" in De && r(be, "value", null, De.value, fe), (ce = De.onVnodeBeforeMount) && cs(ce, Z, U);
    }
    G && Hs(U, null, Z, "beforeMount");
    const Me = zu(ne, ue);
    Me && ue.beforeEnter(be), a(be, P, V), ((ce = De && De.onVnodeMounted) || Me || G) && Rt(() => {
      ce && cs(ce, Z, U), Me && ue.enter(be), G && Hs(U, null, Z, "mounted");
    }, ne);
  }, W = (U, P, V, Z, ne) => {
    if (V && p(U, V), Z)
      for (let fe = 0; fe < Z.length; fe++)
        p(U, Z[fe]);
    if (ne) {
      let fe = ne.subTree;
      if (P === fe || wr(fe.type) && (fe.ssContent === P || fe.ssFallback === P)) {
        const _e = ne.vnode;
        W(
          U,
          _e,
          _e.scopeId,
          _e.slotScopeIds,
          ne.parent
        );
      }
    }
  }, I = (U, P, V, Z, ne, fe, _e, ie, be = 0) => {
    for (let ce = be; ce < U.length; ce++) {
      const De = U[ce] = ie ? Us(U[ce]) : vs(U[ce]);
      C(
        null,
        De,
        P,
        V,
        Z,
        ne,
        fe,
        _e,
        ie
      );
    }
  }, E = (U, P, V, Z, ne, fe, _e) => {
    const ie = P.el = U.el;
    let { patchFlag: be, dynamicChildren: ce, dirs: De } = P;
    be |= U.patchFlag & 16;
    const Ee = U.props || nt, ue = P.props || nt;
    let G;
    if (V && Ks(V, !1), (G = ue.onVnodeBeforeUpdate) && cs(G, V, P, U), De && Hs(P, U, V, "beforeUpdate"), V && Ks(V, !0), (Ee.innerHTML && ue.innerHTML == null || Ee.textContent && ue.textContent == null) && v(ie, ""), ce ? j(
      U.dynamicChildren,
      ce,
      ie,
      V,
      Z,
      ya(P, ne),
      fe
    ) : _e || Y(
      U,
      P,
      ie,
      null,
      V,
      Z,
      ya(P, ne),
      fe,
      !1
    ), be > 0) {
      if (be & 16)
        ee(ie, Ee, ue, V, ne);
      else if (be & 2 && Ee.class !== ue.class && r(ie, "class", null, ue.class, ne), be & 4 && r(ie, "style", Ee.style, ue.style, ne), be & 8) {
        const Me = P.dynamicProps;
        for (let Ce = 0; Ce < Me.length; Ce++) {
          const $e = Me[Ce], J = Ee[$e], N = ue[$e];
          (N !== J || $e === "value") && r(ie, $e, J, N, ne, V);
        }
      }
      be & 1 && U.children !== P.children && v(ie, P.children);
    } else !_e && ce == null && ee(ie, Ee, ue, V, ne);
    ((G = ue.onVnodeUpdated) || De) && Rt(() => {
      G && cs(G, V, P, U), De && Hs(P, U, V, "updated");
    }, Z);
  }, j = (U, P, V, Z, ne, fe, _e) => {
    for (let ie = 0; ie < P.length; ie++) {
      const be = U[ie], ce = P[ie], De = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        be.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (be.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qs(be, ce) || // - In the case of a component, it could contain anything.
        be.shapeFlag & 198) ? g(be.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      C(
        be,
        ce,
        De,
        null,
        Z,
        ne,
        fe,
        _e,
        !0
      );
    }
  }, ee = (U, P, V, Z, ne) => {
    if (P !== V) {
      if (P !== nt)
        for (const fe in P)
          !Go(fe) && !(fe in V) && r(
            U,
            fe,
            P[fe],
            null,
            ne,
            Z
          );
      for (const fe in V) {
        if (Go(fe)) continue;
        const _e = V[fe], ie = P[fe];
        _e !== ie && fe !== "value" && r(U, fe, ie, _e, ne, Z);
      }
      "value" in V && r(U, "value", P.value, V.value, ne);
    }
  }, B = (U, P, V, Z, ne, fe, _e, ie, be) => {
    const ce = P.el = U ? U.el : u(""), De = P.anchor = U ? U.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: ue, slotScopeIds: G } = P;
    G && (ie = ie ? ie.concat(G) : G), U == null ? (a(ce, V, Z), a(De, V, Z), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      P.children || [],
      V,
      De,
      ne,
      fe,
      _e,
      ie,
      be
    )) : Ee > 0 && Ee & 64 && ue && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    U.dynamicChildren ? (j(
      U.dynamicChildren,
      ue,
      V,
      ne,
      fe,
      _e,
      ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (P.key != null || ne && P === ne.subTree) && cl(
      U,
      P,
      !0
      /* shallow */
    )) : Y(
      U,
      P,
      V,
      De,
      ne,
      fe,
      _e,
      ie,
      be
    );
  }, A = (U, P, V, Z, ne, fe, _e, ie, be) => {
    P.slotScopeIds = ie, U == null ? P.shapeFlag & 512 ? ne.ctx.activate(
      P,
      V,
      Z,
      _e,
      be
    ) : K(
      P,
      V,
      Z,
      ne,
      fe,
      _e,
      be
    ) : X(U, P, be);
  }, K = (U, P, V, Z, ne, fe, _e) => {
    const ie = U.component = qu(
      U,
      Z,
      ne
    );
    if (ea(U) && (ie.ctx.renderer = Te), Yu(ie, !1, _e), ie.asyncDep) {
      if (ne && ne.registerDep(ie, F, _e), !U.el) {
        const be = ie.subTree = S(Ct);
        x(null, be, P, V), U.placeholder = be.el;
      }
    } else
      F(
        ie,
        U,
        P,
        V,
        ne,
        fe,
        _e
      );
  }, X = (U, P, V) => {
    const Z = P.component = U.component;
    if (Tu(U, P, V))
      if (Z.asyncDep && !Z.asyncResolved) {
        se(Z, P, V);
        return;
      } else
        Z.next = P, Z.update();
    else
      P.el = U.el, Z.vnode = P;
  }, F = (U, P, V, Z, ne, fe, _e) => {
    const ie = () => {
      if (U.isMounted) {
        let { next: Ee, bu: ue, u: G, parent: Me, vnode: Ce } = U;
        {
          const ze = yr(U);
          if (ze) {
            Ee && (Ee.el = Ce.el, se(U, Ee, _e)), ze.asyncDep.then(() => {
              U.isUnmounted || ie();
            });
            return;
          }
        }
        let $e = Ee, J;
        Ks(U, !1), Ee ? (Ee.el = Ce.el, se(U, Ee, _e)) : Ee = Ce, ue && En(ue), (J = Ee.props && Ee.props.onVnodeBeforeUpdate) && cs(J, Me, Ee, Ce), Ks(U, !0);
        const N = Dl(U), me = U.subTree;
        U.subTree = N, C(
          me,
          N,
          // parent may have changed if it's in a teleport
          g(me.el),
          // anchor may have changed if it's in a fragment
          de(me),
          U,
          ne,
          fe
        ), Ee.el = N.el, $e === null && Ru(U, N.el), G && Rt(G, ne), (J = Ee.props && Ee.props.onVnodeUpdated) && Rt(
          () => cs(J, Me, Ee, Ce),
          ne
        );
      } else {
        let Ee;
        const { el: ue, props: G } = P, { bm: Me, m: Ce, parent: $e, root: J, type: N } = U, me = $o(P);
        Ks(U, !1), Me && En(Me), !me && (Ee = G && G.onVnodeBeforeMount) && cs(Ee, $e, P), Ks(U, !0);
        {
          J.ce && // @ts-expect-error _def is private
          J.ce._def.shadowRoot !== !1 && J.ce._injectChildStyle(N);
          const ze = U.subTree = Dl(U);
          C(
            null,
            ze,
            V,
            Z,
            U,
            ne,
            fe
          ), P.el = ze.el;
        }
        if (Ce && Rt(Ce, ne), !me && (Ee = G && G.onVnodeMounted)) {
          const ze = P;
          Rt(
            () => cs(Ee, $e, ze),
            ne
          );
        }
        (P.shapeFlag & 256 || $e && $o($e.vnode) && $e.vnode.shapeFlag & 256) && U.a && Rt(U.a, ne), U.isMounted = !0, P = V = Z = null;
      }
    };
    U.scope.on();
    const be = U.effect = new $i(ie);
    U.scope.off();
    const ce = U.update = be.run.bind(be), De = U.job = be.runIfDirty.bind(be);
    De.i = U, De.id = U.uid, be.scheduler = () => nl(De), Ks(U, !0), ce();
  }, se = (U, P, V) => {
    P.component = U;
    const Z = U.vnode.props;
    U.vnode = P, U.next = null, Mu(U, P.props, Z, V), Nu(U, P.children, V), xs(), bl(U), Ss();
  }, Y = (U, P, V, Z, ne, fe, _e, ie, be = !1) => {
    const ce = U && U.children, De = U ? U.shapeFlag : 0, Ee = P.children, { patchFlag: ue, shapeFlag: G } = P;
    if (ue > 0) {
      if (ue & 128) {
        re(
          ce,
          Ee,
          V,
          Z,
          ne,
          fe,
          _e,
          ie,
          be
        );
        return;
      } else if (ue & 256) {
        ae(
          ce,
          Ee,
          V,
          Z,
          ne,
          fe,
          _e,
          ie,
          be
        );
        return;
      }
    }
    G & 8 ? (De & 16 && oe(ce, ne, fe), Ee !== ce && v(V, Ee)) : De & 16 ? G & 16 ? re(
      ce,
      Ee,
      V,
      Z,
      ne,
      fe,
      _e,
      ie,
      be
    ) : oe(ce, ne, fe, !0) : (De & 8 && v(V, ""), G & 16 && I(
      Ee,
      V,
      Z,
      ne,
      fe,
      _e,
      ie,
      be
    ));
  }, ae = (U, P, V, Z, ne, fe, _e, ie, be) => {
    U = U || ko, P = P || ko;
    const ce = U.length, De = P.length, Ee = Math.min(ce, De);
    let ue;
    for (ue = 0; ue < Ee; ue++) {
      const G = P[ue] = be ? Us(P[ue]) : vs(P[ue]);
      C(
        U[ue],
        G,
        V,
        null,
        ne,
        fe,
        _e,
        ie,
        be
      );
    }
    ce > De ? oe(
      U,
      ne,
      fe,
      !0,
      !1,
      Ee
    ) : I(
      P,
      V,
      Z,
      ne,
      fe,
      _e,
      ie,
      be,
      Ee
    );
  }, re = (U, P, V, Z, ne, fe, _e, ie, be) => {
    let ce = 0;
    const De = P.length;
    let Ee = U.length - 1, ue = De - 1;
    for (; ce <= Ee && ce <= ue; ) {
      const G = U[ce], Me = P[ce] = be ? Us(P[ce]) : vs(P[ce]);
      if (Qs(G, Me))
        C(
          G,
          Me,
          V,
          null,
          ne,
          fe,
          _e,
          ie,
          be
        );
      else
        break;
      ce++;
    }
    for (; ce <= Ee && ce <= ue; ) {
      const G = U[Ee], Me = P[ue] = be ? Us(P[ue]) : vs(P[ue]);
      if (Qs(G, Me))
        C(
          G,
          Me,
          V,
          null,
          ne,
          fe,
          _e,
          ie,
          be
        );
      else
        break;
      Ee--, ue--;
    }
    if (ce > Ee) {
      if (ce <= ue) {
        const G = ue + 1, Me = G < De ? P[G].el : Z;
        for (; ce <= ue; )
          C(
            null,
            P[ce] = be ? Us(P[ce]) : vs(P[ce]),
            V,
            Me,
            ne,
            fe,
            _e,
            ie,
            be
          ), ce++;
      }
    } else if (ce > ue)
      for (; ce <= Ee; )
        Ve(U[ce], ne, fe, !0), ce++;
    else {
      const G = ce, Me = ce, Ce = /* @__PURE__ */ new Map();
      for (ce = Me; ce <= ue; ce++) {
        const at = P[ce] = be ? Us(P[ce]) : vs(P[ce]);
        at.key != null && Ce.set(at.key, ce);
      }
      let $e, J = 0;
      const N = ue - Me + 1;
      let me = !1, ze = 0;
      const et = new Array(N);
      for (ce = 0; ce < N; ce++) et[ce] = 0;
      for (ce = G; ce <= Ee; ce++) {
        const at = U[ce];
        if (J >= N) {
          Ve(at, ne, fe, !0);
          continue;
        }
        let pt;
        if (at.key != null)
          pt = Ce.get(at.key);
        else
          for ($e = Me; $e <= ue; $e++)
            if (et[$e - Me] === 0 && Qs(at, P[$e])) {
              pt = $e;
              break;
            }
        pt === void 0 ? Ve(at, ne, fe, !0) : (et[pt - Me] = ce + 1, pt >= ze ? ze = pt : me = !0, C(
          at,
          P[pt],
          V,
          null,
          ne,
          fe,
          _e,
          ie,
          be
        ), J++);
      }
      const Et = me ? Fu(et) : ko;
      for ($e = Et.length - 1, ce = N - 1; ce >= 0; ce--) {
        const at = Me + ce, pt = P[at], Ut = P[at + 1], lt = at + 1 < De ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ut.el || Ut.placeholder
        ) : Z;
        et[ce] === 0 ? C(
          null,
          pt,
          V,
          lt,
          ne,
          fe,
          _e,
          ie,
          be
        ) : me && ($e < 0 || ce !== Et[$e] ? Pe(pt, V, lt, 2) : $e--);
      }
    }
  }, Pe = (U, P, V, Z, ne = null) => {
    const { el: fe, type: _e, transition: ie, children: be, shapeFlag: ce } = U;
    if (ce & 6) {
      Pe(U.component.subTree, P, V, Z);
      return;
    }
    if (ce & 128) {
      U.suspense.move(P, V, Z);
      return;
    }
    if (ce & 64) {
      _e.move(U, P, V, Te);
      return;
    }
    if (_e === H) {
      a(fe, P, V);
      for (let Ee = 0; Ee < be.length; Ee++)
        Pe(be[Ee], P, V, Z);
      a(U.anchor, P, V);
      return;
    }
    if (_e === wa) {
      R(U, P, V);
      return;
    }
    if (Z !== 2 && ce & 1 && ie)
      if (Z === 0)
        ie.beforeEnter(fe), a(fe, P, V), Rt(() => ie.enter(fe), ne);
      else {
        const { leave: Ee, delayLeave: ue, afterLeave: G } = ie, Me = () => {
          U.ctx.isUnmounted ? l(fe) : a(fe, P, V);
        }, Ce = () => {
          fe._isLeaving && fe[_s](
            !0
            /* cancelled */
          ), Ee(fe, () => {
            Me(), G && G();
          });
        };
        ue ? ue(fe, Me, Ce) : Ce();
      }
    else
      a(fe, P, V);
  }, Ve = (U, P, V, Z = !1, ne = !1) => {
    const {
      type: fe,
      props: _e,
      ref: ie,
      children: be,
      dynamicChildren: ce,
      shapeFlag: De,
      patchFlag: Ee,
      dirs: ue,
      cacheIndex: G
    } = U;
    if (Ee === -2 && (ne = !1), ie != null && (xs(), qo(ie, null, V, U, !0), Ss()), G != null && (P.renderCache[G] = void 0), De & 256) {
      P.ctx.deactivate(U);
      return;
    }
    const Me = De & 1 && ue, Ce = !$o(U);
    let $e;
    if (Ce && ($e = _e && _e.onVnodeBeforeUnmount) && cs($e, P, U), De & 6)
      we(U.component, V, Z);
    else {
      if (De & 128) {
        U.suspense.unmount(V, Z);
        return;
      }
      Me && Hs(U, null, P, "beforeUnmount"), De & 64 ? U.type.remove(
        U,
        P,
        V,
        Te,
        Z
      ) : ce && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ce.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (fe !== H || Ee > 0 && Ee & 64) ? oe(
        ce,
        P,
        V,
        !1,
        !0
      ) : (fe === H && Ee & 384 || !ne && De & 16) && oe(be, P, V), Z && Oe(U);
    }
    (Ce && ($e = _e && _e.onVnodeUnmounted) || Me) && Rt(() => {
      $e && cs($e, P, U), Me && Hs(U, null, P, "unmounted");
    }, V);
  }, Oe = (U) => {
    const { type: P, el: V, anchor: Z, transition: ne } = U;
    if (P === H) {
      Ye(V, Z);
      return;
    }
    if (P === wa) {
      T(U);
      return;
    }
    const fe = () => {
      l(V), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (U.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: _e, delayLeave: ie } = ne, be = () => _e(V, fe);
      ie ? ie(U.el, fe, be) : be();
    } else
      fe();
  }, Ye = (U, P) => {
    let V;
    for (; U !== P; )
      V = w(U), l(U), U = V;
    l(P);
  }, we = (U, P, V) => {
    const { bum: Z, scope: ne, job: fe, subTree: _e, um: ie, m: be, a: ce } = U;
    Nl(be), Nl(ce), Z && En(Z), ne.stop(), fe && (fe.flags |= 8, Ve(_e, U, P, V)), ie && Rt(ie, P), Rt(() => {
      U.isUnmounted = !0;
    }, P);
  }, oe = (U, P, V, Z = !1, ne = !1, fe = 0) => {
    for (let _e = fe; _e < U.length; _e++)
      Ve(U[_e], P, V, Z, ne);
  }, de = (U) => {
    if (U.shapeFlag & 6)
      return de(U.component.subTree);
    if (U.shapeFlag & 128)
      return U.suspense.next();
    const P = w(U.anchor || U.el), V = P && P[Wi];
    return V ? w(V) : P;
  };
  let ve = !1;
  const Ie = (U, P, V) => {
    U == null ? P._vnode && Ve(P._vnode, null, null, !0) : C(
      P._vnode || null,
      U,
      P,
      null,
      null,
      null,
      V
    ), P._vnode = U, ve || (ve = !0, bl(), Fi(), ve = !1);
  }, Te = {
    p: C,
    um: Ve,
    m: Pe,
    r: Oe,
    mt: K,
    mc: I,
    pc: Y,
    pbc: j,
    n: de,
    o: e
  };
  return {
    render: Ie,
    hydrate: void 0,
    createApp: wu(Ie)
  };
}
function ya({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ks({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function zu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function cl(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Fe(a) && Fe(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Us(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && cl(c, u)), u.type === oa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Ct && !u.el && (u.el = c.el);
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
function Nl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const wr = (e) => e.__isSuspense;
function Vu(e, s) {
  s && s.pendingBranch ? Fe(e) ? s.effects.push(...e) : s.effects.push(e) : Qc(e);
}
const H = Symbol.for("v-fgt"), oa = Symbol.for("v-txt"), Ct = Symbol.for("v-cmt"), wa = Symbol.for("v-stc"), Jo = [];
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
function kr(e) {
  return e.dynamicChildren = an > 0 ? Bt || ko : null, Bu(), an > 0 && Bt && Bt.push(e), e;
}
function i(e, s, o, a, l, r) {
  return kr(
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
function L(e, s, o, a, l) {
  return kr(
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
function Qs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const _r = ({ key: e }) => e ?? null, Pn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? mt(e) || St(e) || He(e) ? { i: wt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === H ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && _r(s),
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
    ctx: wt
  };
  return u ? (ul(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= mt(o) ? 8 : 16), an > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === sr) && (e = Ct), ln(e)) {
    const u = Fs(
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
    u && !mt(u) && (s.class = Se(u)), st(d) && (ol(d) && !Fe(d) && (d = gt({}, d)), s.style = Gt(d));
  }
  const c = mt(e) ? 1 : wr(e) ? 128 : Gi(e) ? 64 : st(e) ? 4 : He(e) ? 2 : 0;
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
  return e ? ol(e) || fr(e) ? gt({}, e) : e : null;
}
function Fs(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, m = s ? ju(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && _r(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Fe(r) ? r.concat(Pn(s)) : [r, Pn(s)] : Pn(s)
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
    patchFlag: s && e.type !== H ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && Fs(e.ssContent),
    ssFallback: e.ssFallback && Fs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && to(
    v,
    d.clone(v)
  ), v;
}
function $(e = " ", s = 0) {
  return S(oa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), L(Ct, null, e)) : S(Ct, null, e);
}
function vs(e) {
  return e == null || typeof e == "boolean" ? S(Ct) : Fe(e) ? S(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? Us(e) : S(oa, null, String(e));
}
function Us(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fs(e);
}
function ul(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Fe(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), ul(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !fr(s) ? s._ctx = wt : l === 3 && wt && (wt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else He(s) ? (s = { default: s, _ctx: wt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function ju(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Se([s.class, a.class]));
      else if (l === "style")
        s.style = Gt([s.style, a.style]);
      else if (Kn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Fe(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function cs(e, s, o, a = null) {
  as(e, s, 7, [
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
    scope: new kc(
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
    propsDefaults: nt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: nt,
    data: nt,
    props: nt,
    attrs: nt,
    slots: nt,
    refs: nt,
    setupState: nt,
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
let xt = null;
const dl = () => xt || wt;
let Bn, Ua;
{
  const e = Qn(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Bn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => xt = o
  ), Ua = s(
    "__VUE_SSR_SETTERS__",
    (o) => rn = o
  );
}
const mn = (e) => {
  const s = xt;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(s);
  };
}, Ol = () => {
  xt && xt.scope.off(), Bn(null);
};
function br(e) {
  return e.vnode.shapeFlag & 4;
}
let rn = !1;
function Yu(e, s = !1, o = !1) {
  s && Ua(s);
  const { props: a, children: l } = e.vnode, r = br(e);
  Pu(e, a, r, s), Au(e, l, o || s);
  const c = r ? Ju(e, s) : void 0;
  return s && Ua(!1), c;
}
function Ju(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fu);
  const { setup: a } = o;
  if (a) {
    xs();
    const l = e.setupContext = a.length > 1 ? Xu(e) : null, r = mn(e), c = fn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = gi(c);
    if (Ss(), r(), (u || e.sp) && !$o(e) && Xi(e), u) {
      if (c.then(Ol, Ol), s)
        return c.then((d) => {
          Ul(e, d);
        }).catch((d) => {
          Zn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Ul(e, c);
  } else
    $r(e);
}
function Ul(e, s, o) {
  He(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : st(s) && (e.setupState = Oi(s)), $r(e);
}
function $r(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || ps);
  {
    const l = mn(e);
    xs();
    try {
      mu(e);
    } finally {
      Ss(), l();
    }
  }
}
const Qu = {
  get(e, s) {
    return $t(e, "get", ""), e[s];
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Oi(Vc(e.exposed)), {
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
  return He(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function ed(e) {
  return He(e) && "__vccOpts" in e;
}
const z = (e, s) => Hc(e, s, rn);
function vn(e, s, o) {
  try {
    Vn(-1);
    const a = arguments.length;
    return a === 2 ? st(s) && !Fe(s) ? ln(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && ln(o) && (o = [o]), S(e, s, o));
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
const Cr = za ? (e) => za.createHTML(e) : (e) => e, sd = "http://www.w3.org/2000/svg", od = "http://www.w3.org/1998/Math/MathML", ks = typeof document < "u" ? document : null, Fl = ks && /* @__PURE__ */ ks.createElement("template"), nd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? ks.createElementNS(sd, e) : s === "mathml" ? ks.createElementNS(od, e) : o ? ks.createElement(e, { is: o }) : ks.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => ks.createTextNode(e),
  createComment: (e) => ks.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ks.querySelector(e),
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
}, Ls = "transition", No = "animation", Io = Symbol("_vtc"), xr = {
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
}, Sr = /* @__PURE__ */ gt(
  {},
  qi,
  xr
), ad = (e) => (e.displayName = "Transition", e.props = Sr, e), ld = /* @__PURE__ */ ad(
  (e, { slots: s }) => vn(eu, Ir(e), s)
), qs = (e, s = []) => {
  Fe(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Vl = (e) => e ? Fe(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Ir(e) {
  const s = {};
  for (const B in e)
    B in xr || (s[B] = e[B]);
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
  } = e, k = id(l), C = k && k[0], b = k && k[1], {
    onBeforeEnter: x,
    onEnter: M,
    onEnterCancelled: R,
    onLeave: T,
    onLeaveCancelled: D,
    onBeforeAppear: O = x,
    onAppear: W = M,
    onAppearCancelled: I = R
  } = s, E = (B, A, K, X) => {
    B._enterCancelled = X, As(B, A ? v : u), As(B, A ? m : c), K && K();
  }, j = (B, A) => {
    B._isLeaving = !1, As(B, g), As(B, p), As(B, w), A && A();
  }, ee = (B) => (A, K) => {
    const X = B ? W : M, F = () => E(A, B, K);
    qs(X, [A, F]), Bl(() => {
      As(A, B ? d : r), ds(A, B ? v : u), Vl(X) || Wl(A, a, C, F);
    });
  };
  return gt(s, {
    onBeforeEnter(B) {
      qs(x, [B]), ds(B, r), ds(B, c);
    },
    onBeforeAppear(B) {
      qs(O, [B]), ds(B, d), ds(B, m);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(B, A) {
      B._isLeaving = !0;
      const K = () => j(B, A);
      ds(B, g), B._enterCancelled ? (ds(B, w), Fa(B)) : (Fa(B), ds(B, w)), Bl(() => {
        B._isLeaving && (As(B, g), ds(B, p), Vl(T) || Wl(B, a, b, K));
      }), qs(T, [B, K]);
    },
    onEnterCancelled(B) {
      E(B, !1, void 0, !0), qs(R, [B]);
    },
    onAppearCancelled(B) {
      E(B, !0, void 0, !0), qs(I, [B]);
    },
    onLeaveCancelled(B) {
      j(B), qs(D, [B]);
    }
  });
}
function id(e) {
  if (e == null)
    return null;
  if (st(e))
    return [ka(e.enter), ka(e.leave)];
  {
    const s = ka(e);
    return [s, s];
  }
}
function ka(e) {
  return fc(e);
}
function ds(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Io] || (e[Io] = /* @__PURE__ */ new Set())).add(s);
}
function As(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Io];
  o && (o.delete(s), o.size || (e[Io] = void 0));
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
  const o = window.getComputedStyle(e), a = (k) => (o[k] || "").split(", "), l = a(`${Ls}Delay`), r = a(`${Ls}Duration`), c = Gl(l, r), u = a(`${No}Delay`), d = a(`${No}Duration`), m = Gl(u, d);
  let v = null, g = 0, w = 0;
  s === Ls ? c > 0 && (v = Ls, g = c, w = r.length) : s === No ? m > 0 && (v = No, g = m, w = d.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Ls : No : null, w = v ? v === Ls ? r.length : d.length : 0);
  const p = v === Ls && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Ls}Property`).toString()
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
  const a = e[Io];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Hl = Symbol("_vod"), ud = Symbol("_vsh"), dd = Symbol(""), fd = /(?:^|;)\s*display\s*:/;
function md(e, s, o) {
  const a = e.style, l = mt(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (mt(s))
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
  if (Fe(o))
    o.forEach((a) => Mn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = vd(e, s);
    Kl.test(o) ? e.setProperty(
      Bs(a),
      o.replace(Kl, ""),
      "important"
    ) : e[a] = o;
  }
}
const ql = ["Webkit", "Moz", "ms"], _a = {};
function vd(e, s) {
  const o = _a[s];
  if (o)
    return o;
  let a = Qt(s);
  if (a !== "filter" && a in e)
    return _a[s] = a;
  a = Yn(a);
  for (let l = 0; l < ql.length; l++) {
    const r = ql[l] + a;
    if (r in e)
      return _a[s] = r;
  }
  return s;
}
const Yl = "http://www.w3.org/1999/xlink";
function Jl(e, s, o, a, l, r = yc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Yl, s.slice(6, s.length)) : e.setAttributeNS(Yl, s, o) : o == null || r && !ki(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : os(o) ? String(o) : o
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
    u === "boolean" ? o = ki(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Cs(e, s, o, a) {
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
      const m = r[s] = kd(
        a,
        l
      );
      Cs(e, u, m, d);
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
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let ba = 0;
const yd = /* @__PURE__ */ Promise.resolve(), wd = () => ba || (yd.then(() => ba = 0), ba = Date.now());
function kd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    as(
      _d(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = wd(), o;
}
function _d(e, s) {
  if (Fe(s)) {
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
  s === "class" ? cd(e, a, c) : s === "style" ? md(e, o, a) : Kn(s) ? Ka(s) || gd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : $d(e, s, a, c)) ? (Ql(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Jl(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !mt(a)) ? Ql(e, Qt(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), Jl(e, s, a, c));
};
function $d(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ei(s) && He(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ei(s) && mt(o) ? !1 : s in e;
}
const Tr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Wn = Symbol("_moveCb"), ti = Symbol("_enterCb"), Cd = (e) => (delete e.props.mode, e), xd = /* @__PURE__ */ Cd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ gt({}, Sr, {
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
        ds(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Wn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Wn] = null, As(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), u = Ir(c);
      let d = c.tag || H;
      if (l = [], r)
        for (let m = 0; m < r.length; m++) {
          const v = r[m];
          v.el && v.el instanceof Element && (l.push(v), to(
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
        v.key != null && to(
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
  const a = e.cloneNode(), l = e[Io];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Er(a);
  return r.removeChild(a), c;
}
const Vs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Fe(s) ? (o) => En(s, o) : s;
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
    e[Yt] = Vs(l);
    const r = a || l.props && l.props.type === "number";
    Cs(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Yt](oi(e.value, o, r));
    }), (o || r) && Cs(e, "change", () => {
      e.value = oi(e.value, o, r);
    }), s || (Cs(e, "compositionstart", Pd), Cs(e, "compositionend", si), Cs(e, "change", si));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[Yt] = Vs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Jn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, cn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Yt] = Vs(o), Cs(e, "change", () => {
      const a = e._modelValue, l = Eo(e), r = e.checked, c = e[Yt];
      if (Fe(a)) {
        const u = Ja(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const m = [...a];
          m.splice(u, 1), c(m);
        }
      } else if (To(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Pr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ni,
  beforeUpdate(e, s, o) {
    e[Yt] = Vs(o), ni(e, s, o);
  }
};
function ni(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Fe(s))
    l = Ja(s, a.props.value) > -1;
  else if (To(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = eo(s, Pr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const ts = {
  created(e, { value: s }, o) {
    e.checked = eo(s, o.props.value), e[Yt] = Vs(o), Cs(e, "change", () => {
      e[Yt](Eo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[Yt] = Vs(a), s !== o && (e.checked = eo(s, a.props.value));
  }
}, gs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = To(s);
    Cs(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Jn(Eo(c)) : Eo(c)
      );
      e[Yt](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, ht(() => {
        e._assigning = !1;
      });
    }), e[Yt] = Vs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    ai(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Yt] = Vs(o);
  },
  updated(e, { value: s }) {
    e._assigning || ai(e, s);
  }
};
function ai(e, s) {
  const o = e.multiple, a = Fe(s);
  if (!(o && !a && !To(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Eo(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = Ja(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (eo(Eo(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Eo(e) {
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
      return gs;
    case "TEXTAREA":
      return Wt;
    default:
      switch (s) {
        case "checkbox":
          return cn;
        case "radio":
          return ts;
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
}, ct = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = Ld[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...r);
  }));
}, Ad = {
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
    const r = Bs(l.key);
    if (s.some(
      (c) => c === r || Ad[c] === r
    ))
      return e(l);
  }));
}, Nd = /* @__PURE__ */ gt({ patchProp: bd }, nd);
let li;
function Od() {
  return li || (li = Ou(Nd));
}
const la = ((...e) => {
  const s = Od().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = zd(a);
    if (!l) return;
    const r = s._component;
    !He(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Ud(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function Ud(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function zd(e) {
  return mt(e) ? document.querySelector(e) : e;
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
}, jd = /* @__PURE__ */ ge({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Fd, [
      s.$slots.header ? (n(), i("div", Vd, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Bd, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Wd, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", Gd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ye = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Lt = /* @__PURE__ */ ye(jd, [["__scopeId", "data-v-21565df9"]]), Hd = {
  key: 0,
  class: "panel-title-prefix"
}, Kd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, qd = /* @__PURE__ */ ge({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), L(ll(`h${e.level}`), {
      class: Se(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", Hd, f(e.prefix), 1)) : (n(), i("span", Kd)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Yd = /* @__PURE__ */ ye(qd, [["__scopeId", "data-v-c3875efc"]]), Jd = ["title"], Qd = ["width", "height"], Xd = /* @__PURE__ */ ge({
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
}), Mr = /* @__PURE__ */ ye(Xd, [["__scopeId", "data-v-6fc7f16d"]]), Zd = { class: "header-left" }, ef = {
  key: 0,
  class: "header-actions"
}, tf = /* @__PURE__ */ ge({
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
      class: Se(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Zd, [
        S(Yd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(Mr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", ef, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ ye(tf, [["__scopeId", "data-v-55a62cd6"]]), sf = {
  key: 0,
  class: "section-title-count"
}, of = {
  key: 1,
  class: "section-title-icon"
}, nf = /* @__PURE__ */ ge({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), L(ll(`h${e.level}`), {
      class: Se(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", sf, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", of, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vt = /* @__PURE__ */ ye(nf, [["__scopeId", "data-v-559361eb"]]), af = { class: "status-grid" }, lf = { class: "status-grid__columns" }, rf = { class: "status-grid__column" }, cf = { class: "status-grid__title" }, uf = { class: "status-grid__column status-grid__column--right" }, df = { class: "status-grid__title" }, ff = {
  key: 0,
  class: "status-grid__footer"
}, mf = /* @__PURE__ */ ge({
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
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", uf, [
          t("h4", df, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", ff, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), vf = /* @__PURE__ */ ye(mf, [["__scopeId", "data-v-73b7ba3f"]]), pf = {
  key: 0,
  class: "status-item__icon"
}, gf = {
  key: 1,
  class: "status-item__count"
}, hf = { class: "status-item__label" }, yf = /* @__PURE__ */ ge({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = z(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Se(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", pf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", gf, f(e.count), 1)) : y("", !0),
      t("span", hf, f(e.label), 1)
    ], 2));
  }
}), us = /* @__PURE__ */ ye(yf, [["__scopeId", "data-v-6f929183"]]), wf = { class: "issue-card__header" }, kf = { class: "issue-card__icon" }, _f = { class: "issue-card__title" }, bf = {
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
}, Sf = /* @__PURE__ */ ge({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = z(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Se(["issue-card", o.value])
    }, [
      t("div", wf, [
        t("span", kf, f(e.icon), 1),
        t("h4", _f, f(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", bf, [
        e.description ? (n(), i("p", $f, f(e.description), 1)) : y("", !0),
        Ke(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Cf, [
        (n(!0), i(H, null, he(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", xf, [
        Ke(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Zt = /* @__PURE__ */ ye(Sf, [["__scopeId", "data-v-df6aa348"]]), If = ["type", "disabled"], Ef = {
  key: 0,
  class: "spinner"
}, Tf = /* @__PURE__ */ ge({
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
      class: Se(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Ef)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, If));
  }
}), pe = /* @__PURE__ */ ye(Tf, [["__scopeId", "data-v-772abe47"]]), Rf = { class: "empty-state" }, Pf = {
  key: 0,
  class: "empty-icon"
}, Mf = { class: "empty-message" }, Df = /* @__PURE__ */ ge({
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
      e.actionLabel ? (n(), L(pe, {
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
}), ls = /* @__PURE__ */ ye(Df, [["__scopeId", "data-v-4466284f"]]), Lf = /* @__PURE__ */ ge({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Se(["detail-label"]),
      style: Gt({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Dn = /* @__PURE__ */ ye(Lf, [["__scopeId", "data-v-75e9eeb8"]]), Af = /* @__PURE__ */ ge({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Se(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Va = /* @__PURE__ */ ye(Af, [["__scopeId", "data-v-2f186e4c"]]), Nf = { class: "detail-row" }, Of = /* @__PURE__ */ ge({
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
    return (s, o) => (n(), i("div", Nf, [
      S(Dn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), L(Va, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ke(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), vt = /* @__PURE__ */ ye(Of, [["__scopeId", "data-v-ef15664a"]]), Uf = { class: "modal-header" }, zf = { class: "modal-body" }, Ff = { class: "status-section" }, Vf = {
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
}, km = { class: "workflow-name" }, _m = {
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
}, Am = { class: "change-list" }, Nm = { class: "change-item" }, Om = { class: "node-name" }, Um = {
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
}, iv = { class: "modal-actions" }, rv = /* @__PURE__ */ ge({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = _(!1);
    Qe(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), ft(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const a = z(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = z(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = z(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : k.filter((C) => {
        var x, M, R;
        const b = (R = (M = (x = s.status) == null ? void 0 : x.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : R.find((T) => T.name === C);
        return !b || b.status !== "broken";
      })) || [];
    }), c = z(() => {
      var w, p, k, C, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((k = s.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = z(() => {
      var p, k, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = z(() => {
      var w, p, k, C, b, x;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((k = s.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((x = (b = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), m = z(() => {
      var p, k;
      const w = (k = (p = s.status) == null ? void 0 : p.git_changes) == null ? void 0 : k.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function g(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var k, C, b, x, M, R, T, D, O, W, I, E, j, ee, B, A, K, X, F, se, Y, ae;
      return n(), L(kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (re) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = ct(() => {
            }, ["stop"]))
          }, [
            t("div", Uf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (re) => w.$emit("close"))
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
                S(vt, {
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
                    onClick: p[1] || (p[1] = (re) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Wf, [
                  t("div", Gf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", jf, "BROKEN (COMMITTED) (" + f(a.value.length) + ")", 1)
                  ]),
                  t("div", Hf, [
                    (n(!0), i(H, null, he(a.value, (re) => (n(), i("div", {
                      key: re.name,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, f(re.name), 1),
                      t("span", qf, f(re.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Yf, [
                  t("div", Jf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Qf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Xf, [
                    (n(!0), i(H, null, he(l.value, (re) => (n(), i("div", {
                      key: re.name,
                      class: "workflow-item"
                    }, [
                      t("span", Zf, f(re.name), 1),
                      t("span", em, f(re.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (k = e.status.workflows) == null ? void 0 : k.new) != null && C.length ? (n(), i("div", tm, [
                  t("div", sm, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", om, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", nm, [
                    (n(!0), i(H, null, he(e.status.workflows.new, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", am, f(re), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (b = e.status.workflows) == null ? void 0 : b.modified) != null && x.length ? (n(), i("div", lm, [
                  t("div", im, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", rm, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", cm, [
                    (n(!0), i(H, null, he(e.status.workflows.modified, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", um, f(re), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (R = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && R.length ? (n(), i("div", dm, [
                  t("div", fm, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", mm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", vm, [
                    (n(!0), i(H, null, he(e.status.workflows.deleted, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", pm, f(re), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", gm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (re) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", hm, "SYNCED (" + f(r.value.length) + ")", 1),
                    t("span", ym, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", wm, [
                    (n(!0), i(H, null, he(r.value, (re) => (n(), i("div", {
                      key: re,
                      class: "workflow-item"
                    }, [
                      t("span", km, f(re), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", _m, [
                S(Vt, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (T = e.status.git_changes) == null ? void 0 : T.nodes_added) != null && D.length ? (n(), i("div", bm, [
                  t("div", $m, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Cm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", xm, [
                    (n(!0), i(H, null, he(e.status.git_changes.nodes_added, (re) => (n(), i("div", {
                      key: v(re),
                      class: "change-item"
                    }, [
                      t("span", Sm, f(v(re)), 1),
                      g(re) ? (n(), i("span", Im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (W = (O = e.status.git_changes) == null ? void 0 : O.nodes_removed) != null && W.length ? (n(), i("div", Em, [
                  t("div", Tm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Rm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Pm, [
                    (n(!0), i(H, null, he(e.status.git_changes.nodes_removed, (re) => (n(), i("div", {
                      key: v(re),
                      class: "change-item"
                    }, [
                      t("span", Mm, f(v(re)), 1),
                      g(re) ? (n(), i("span", Dm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (n(), i("div", Lm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Am, [
                    t("div", Nm, [
                      t("span", Om, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.has_other_changes ? (n(), i("div", Um, [...p[21] || (p[21] = [
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
              (j = e.status.comparison) != null && j.is_synced ? y("", !0) : (n(), i("div", zm, [
                t("div", Fm, [
                  S(Vt, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (re) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (B = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && B.length ? (n(), i("div", Vm, [
                  S(vt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Bm, [
                    (n(!0), i(H, null, he(e.status.comparison.missing_nodes.slice(0, 10), (re) => (n(), i("div", {
                      key: re,
                      class: "drift-list-item"
                    }, " - " + f(re), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Wm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (K = (A = e.status.comparison) == null ? void 0 : A.extra_nodes) != null && K.length ? (n(), i("div", Gm, [
                  S(vt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", jm, [
                    (n(!0), i(H, null, he(e.status.comparison.extra_nodes.slice(0, 10), (re) => (n(), i("div", {
                      key: re,
                      class: "drift-list-item"
                    }, " - " + f(re), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Hm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (F = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && F.length ? (n(), i("div", Km, [
                  S(vt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", qm, [
                    (n(!0), i(H, null, he(e.status.comparison.version_mismatches.slice(0, 10), (re) => (n(), i("div", {
                      key: re.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(re.name) + ": ", 1),
                      t("span", Ym, f(re.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", Jm, f(re.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Qm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((se = e.status.comparison) == null ? void 0 : se.packages_in_sync) === !1 ? (n(), i("div", Xm, [
                  S(vt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Zm, [
                  S(pe, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (re) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ae = (Y = e.status.comparison) == null ? void 0 : Y.disabled_nodes) != null && ae.length ? (n(), i("div", ev, [
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
                  (n(!0), i(H, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (re) => (n(), i("div", {
                    key: re,
                    class: "drift-list-item"
                  }, " • " + f(re), 1))), 128)),
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
              S(pe, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (re) => w.$emit("close"))
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
}), cv = /* @__PURE__ */ ye(rv, [["__scopeId", "data-v-e2b37122"]]), uv = { class: "health-section-header" }, dv = { class: "suggestions-content" }, fv = { class: "suggestions-text" }, mv = { style: { "margin-top": "var(--cg-space-3)" } }, vv = {
  key: 1,
  class: "no-issues-text"
}, pv = /* @__PURE__ */ ge({
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
      l.value = !1, m("view-workflows");
    }
    function d() {
      l.value = !1, m("view-nodes");
    }
    const m = o, v = _(!1), g = _(!1);
    function w() {
      g.value = !0, m("repair-environment");
    }
    function p() {
      g.value = !1;
    }
    function k() {
      l.value = !1;
    }
    const C = z(() => {
      const X = a.status.workflows.analyzed || [], F = X.filter(
        (se) => se.unresolved_models_count > 0 || se.ambiguous_models_count > 0
      );
      return F.length === 0 && a.status.missing_models_count > 0 ? X.filter((se) => se.sync_state === "synced") : F;
    });
    function b() {
      const X = C.value;
      X.length !== 0 && (v.value = !0, m("repair-missing-models", X.map((F) => F.name)));
    }
    function x() {
      v.value = !1;
    }
    s({ resetRepairingState: x, resetRepairingEnvironmentState: p, closeDetailModal: k });
    const M = z(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), R = z(() => a.status.has_changes), T = z(() => {
      const X = a.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), D = z(() => a.status.has_changes || M.value), O = z(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), W = z(() => a.status.git_changes.has_other_changes), I = z(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter((F) => F.status === "broken")) || [];
    }), E = z(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter(
        (F) => F.has_path_sync_issues && !F.has_issues
      )) || [];
    }), j = z(() => I.value.length > 0), ee = z(() => j.value || E.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), B = z(() => {
      const X = [];
      return a.status.workflows.new.length > 0 && X.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && X.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && X.push(`${a.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), A = z(() => {
      var se, Y;
      const X = [], F = a.status.comparison;
      return (se = F.missing_nodes) != null && se.length && X.push(`${F.missing_nodes.length} missing node${F.missing_nodes.length === 1 ? "" : "s"}`), (Y = F.extra_nodes) != null && Y.length && X.push(`${F.extra_nodes.length} untracked node${F.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), K = z(() => {
      var se, Y;
      const X = [], F = a.status.comparison;
      return (se = F.extra_nodes) != null && se.length && (F.extra_nodes.slice(0, 3).forEach((ae) => {
        X.push(`Untracked: ${ae}`);
      }), F.extra_nodes.length > 3 && X.push(`...and ${F.extra_nodes.length - 3} more untracked`)), (Y = F.missing_nodes) != null && Y.length && (F.missing_nodes.slice(0, 3).forEach((ae) => {
        X.push(`Missing: ${ae}`);
      }), F.missing_nodes.length > 3 && X.push(`...and ${F.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, F) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), L(Zt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: F[0] || (F[0] = (se) => X.$emit("start-setup"))
              }, {
                default: h(() => [...F[13] || (F[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(Zt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: F[1] || (F[1] = (se) => X.$emit("view-environments"))
              }, {
                default: h(() => [...F[14] || (F[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(Zt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: F[2] || (F[2] = (se) => X.$emit("create-environment"))
              }, {
                default: h(() => [...F[15] || (F[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: F[4] || (F[4] = (se) => r.value = !0),
            onMouseleave: F[5] || (F[5] = (se) => r.value = !1)
          }, [
            t("div", uv, [
              S(Vt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...F[16] || (F[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(ld, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), L(pe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...F[17] || (F[17] = [
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
            }, so({
              left: h(() => [
                e.status.workflows.new.length ? (n(), L(us, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), L(us, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), L(us, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                S(us, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: M.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), L(us, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L(us, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), L(us, {
                  key: 2,
                  icon: "●",
                  count: O.value,
                  label: O.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                W.value ? (n(), L(us, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                R.value && !T.value && !W.value ? (n(), L(us, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                R.value ? y("", !0) : (n(), L(us, {
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
                  F[19] || (F[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", dv, [
                    t("span", fv, f(B.value), 1),
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: F[3] || (F[3] = (se) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...F[18] || (F[18] = [
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
          e.status.is_detached_head ? (n(), L(Zt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: F[6] || (F[6] = (se) => X.$emit("create-branch"))
              }, {
                default: h(() => [...F[20] || (F[20] = [
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
              default: h(() => [...F[21] || (F[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ee.value ? (n(), i(H, { key: 0 }, [
              I.value.length > 0 ? (n(), L(Zt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((se) => `${se.name} — ${se.issue_summary}`)
              }, {
                actions: h(() => [
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[7] || (F[7] = (se) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...F[22] || (F[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              E.value.length > 0 ? (n(), L(Zt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((se) => `${se.name} — ${se.models_needing_path_sync_count} model path${se.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[8] || (F[8] = (se) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...F[23] || (F[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !j.value ? (n(), L(Zt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  S(pe, {
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
                  S(pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: F[9] || (F[9] = (se) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...F[24] || (F[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), L(Zt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: A.value,
                items: K.value
              }, {
                actions: h(() => [
                  S(pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...F[25] || (F[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[10] || (F[10] = (se) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...F[26] || (F[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(Zt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: F[11] || (F[11] = (se) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...F[27] || (F[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : D.value ? (n(), i("span", vv, "No issues")) : (n(), L(ls, {
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
        onClose: F[12] || (F[12] = (se) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), gv = /* @__PURE__ */ ye(pv, [["__scopeId", "data-v-55fcd77f"]]), hv = ["type", "value", "placeholder", "disabled"], yv = /* @__PURE__ */ ge({
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
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return Qe(() => {
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
      class: Se(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Jt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Jt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, hv));
  }
}), Qo = /* @__PURE__ */ ye(yv, [["__scopeId", "data-v-0380d08f"]]), wv = { class: "branch-create-form" }, kv = { class: "form-actions" }, _v = /* @__PURE__ */ ge({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = z(() => {
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
      t("div", kv, [
        S(pe, {
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
        S(pe, {
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
}), bv = /* @__PURE__ */ ye(_v, [["__scopeId", "data-v-7c500394"]]), $v = { class: "branch-list-item__indicator" }, Cv = { class: "branch-list-item__name" }, xv = {
  key: 0,
  class: "branch-list-item__actions"
}, Sv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Iv = /* @__PURE__ */ ge({
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
      class: Se(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", $v, f(e.isCurrent ? "●" : "○"), 1),
      t("span", Cv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", xv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Sv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ev = /* @__PURE__ */ ye(Iv, [["__scopeId", "data-v-c6581a24"]]), pM = Ws({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const gM = [
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
], hM = {
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
], yM = [
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
function yo() {
  return !1;
}
function Rv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function Ze() {
  const e = _(!1), s = _(null);
  async function o(q, ke) {
    var bt;
    if (!((bt = window.app) != null && bt.api))
      throw new Error("ComfyUI API not available");
    const Le = await window.app.api.fetchApi(q, ke);
    if (!Le.ok) {
      const zt = await Le.json().catch(() => ({}));
      throw new Error(zt.error || zt.message || `Request failed: ${Le.status}`);
    }
    const it = await Le.text();
    if (it)
      return JSON.parse(it);
  }
  async function a(q = !1) {
    return o(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(q, ke = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ke })
    });
  }
  async function r(q = 10, ke = 0) {
    return o(`/v2/comfygit/log?limit=${q}&offset=${ke}`);
  }
  async function c(q, ke = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(q)}&limit=${ke}`);
  }
  async function u(q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
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
  async function v(q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q, force: !0 })
    });
  }
  async function g() {
    return o("/v2/comfygit/branches");
  }
  async function w(q) {
    return o(`/v2/comfygit/commit/${q}`);
  }
  async function p(q, ke = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ke })
    });
  }
  async function k(q, ke = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ke })
    });
  }
  async function C(q, ke = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ke })
    });
  }
  async function b(q, ke = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ke })
    });
  }
  async function x() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const q = await a();
        return {
          environments: [{
            name: q.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + q.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: q.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: q.branch
          }],
          current: q.environment,
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
  async function M() {
    return (await x()).environments;
  }
  async function R(q) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(q)}`);
    } catch {
      return null;
    }
  }
  async function T(q, ke) {
    const Le = { target_env: q };
    return ke && (Le.workspace_path = ke), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Le)
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function O(q) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function W() {
    return o("/v2/workspace/environments/create_status");
  }
  async function I(q = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function E(q) {
    return o(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function j(q = !1) {
    try {
      return o(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ke = await a(q), Le = [];
      return ke.workflows.new.forEach((it) => {
        Le.push({ name: it, status: "new", missing_nodes: 0, missing_models: 0, path: it });
      }), ke.workflows.modified.forEach((it) => {
        Le.push({ name: it, status: "modified", missing_nodes: 0, missing_models: 0, path: it });
      }), ke.workflows.synced.forEach((it) => {
        Le.push({ name: it, status: "synced", missing_nodes: 0, missing_models: 0, path: it });
      }), Le;
    }
  }
  async function ee(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function B(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function A(q, ke, Le) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ke, install_models: Le })
    });
  }
  async function K(q, ke, Le) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ke, importance: Le })
    });
  }
  async function X() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function F() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function se(q) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function Y(q) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ae(q, ke) {
    return o(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function re(q, ke) {
    return o(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function Pe(q) {
    return o(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function Ve(q) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Oe() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ye() {
    return o("/v2/workspace/models/directory");
  }
  async function we(q) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function oe(q) {
    const ke = new URLSearchParams({ url: q });
    return o(`/v2/workspace/huggingface/repo-info?${ke}`);
  }
  async function de() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ve(q, ke = 10) {
    const Le = new URLSearchParams({ query: q, limit: String(ke) });
    return o(`/v2/workspace/huggingface/search?${Le}`);
  }
  async function Ie(q) {
    try {
      const ke = q ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(q)}` : "/v2/comfygit/config";
      return o(ke);
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
  async function Te(q, ke) {
    const Le = ke ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ke)}` : "/v2/comfygit/config";
    return o(Le, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Ue(q, ke) {
    try {
      const Le = new URLSearchParams();
      return q && Le.append("level", q), ke && Le.append("lines", ke.toString()), o(`/v2/comfygit/debug/logs?${Le}`);
    } catch {
      return [];
    }
  }
  async function U(q, ke) {
    try {
      const Le = new URLSearchParams();
      return q && Le.append("level", q), ke && Le.append("lines", ke.toString()), o(`/v2/workspace/debug/logs?${Le}`);
    } catch {
      return [];
    }
  }
  async function P() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function V() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Z(q, ke) {
    try {
      const Le = new URLSearchParams();
      return q && Le.append("level", q), ke && Le.append("lines", ke.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Le}`);
    } catch {
      return [];
    }
  }
  async function ne() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function fe(q) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function _e() {
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
  async function ie(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function be(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function ce(q) {
    var bt, zt, Ms, Ds;
    const ke = Rv(), Le = ((zt = (bt = window.app) == null ? void 0 : bt.api) == null ? void 0 : zt.clientId) ?? ((Ds = (Ms = window.app) == null ? void 0 : Ms.api) == null ? void 0 : Ds.initialClientId) ?? "comfygit-panel", it = {
      kind: "install",
      params: {
        id: q.id,
        version: q.version || q.selected_version || "latest",
        selected_version: q.selected_version || "latest",
        repository: q.repository || "",
        mode: q.mode || "remote",
        channel: q.channel || "default"
      },
      ui_id: ke,
      client_id: Le
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(it)
    }), console.log("[ComfyGit] Task queued with ui_id:", ke, "for package:", q.id), o("/v2/manager/queue/start").catch((hn) => {
      console.error("[ComfyGit] Queue start failed:", hn);
    }), { ui_id: ke };
  }
  async function De(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function Ee(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ue() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function G(q, ke) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: ke })
    });
  }
  async function Me(q) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Ce(q, ke, Le) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ke, push_url: Le })
    });
  }
  async function $e(q, ke) {
    const Le = {};
    return ke && (Le["X-Git-Auth-Token"] = ke), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST",
      headers: Le
    });
  }
  async function J(q) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function N(q = "skip", ke = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ke
      })
    });
  }
  async function me(q, ke) {
    const Le = ke ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return o(Le);
  }
  async function ze(q, ke = {}) {
    const Le = { "Content-Type": "application/json" };
    return ke.authToken && (Le["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: Le,
      body: JSON.stringify({
        model_strategy: ke.modelStrategy || "skip",
        force: ke.force || !1,
        resolutions: ke.resolutions
      })
    });
  }
  async function et(q, ke) {
    const Le = ke ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return o(Le);
  }
  async function Et(q, ke = {}) {
    const Le = { "Content-Type": "application/json" };
    return ke.authToken && (Le["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: Le,
      body: JSON.stringify({ force: ke.force || !1 })
    });
  }
  async function at(q, ke) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ke })
    });
  }
  async function pt(q) {
    const ke = {
      success: 0,
      failed: []
    };
    for (const Le of q)
      try {
        await B(Le), ke.success++;
      } catch (it) {
        ke.failed.push({
          name: Le,
          error: it instanceof Error ? it.message : "Unknown error"
        });
      }
    return ke;
  }
  async function Ut(q) {
    var it;
    const ke = new FormData();
    if (ke.append("file", q), !((it = window.app) != null && it.api))
      throw new Error("ComfyUI API not available");
    const Le = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ke
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Le.ok) {
      const bt = await Le.json().catch(() => ({}));
      throw new Error(bt.error || `Preview failed: ${Le.status}`);
    }
    return Le.json();
  }
  async function lt(q) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function Mo(q, ke, Le, it) {
    var Ms;
    const bt = new FormData();
    if (bt.append("file", q), bt.append("name", ke), bt.append("model_strategy", Le), bt.append("torch_backend", it), !((Ms = window.app) != null && Ms.api))
      throw new Error("ComfyUI API not available");
    const zt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: bt
    });
    if (!zt.ok) {
      const Ds = await zt.json().catch(() => ({}));
      throw new Error(Ds.message || Ds.error || `Import failed: ${zt.status}`);
    }
    return zt.json();
  }
  async function Ps() {
    return o("/v2/workspace/import/status");
  }
  async function oo(q) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function no(q, ke, Le, it) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: ke,
        model_strategy: Le,
        torch_backend: it
      })
    });
  }
  async function Do() {
    return o("/v2/setup/status");
  }
  async function Lo() {
    return o("/v2/comfygit/update-check");
  }
  async function hs() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function xe(q) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function te() {
    return o("/v2/setup/initialize_status");
  }
  async function Ge(q) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function yt() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Nt() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function jt(q, ke) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: q, save_key: ke })
    });
  }
  async function ys() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function _t(q) {
    const ke = q ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(q)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ke);
  }
  async function Ne(q) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Xt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function rs(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ao(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/stop`, {
      method: "POST"
    });
  }
  async function lo(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/start`, {
      method: "POST"
    });
  }
  async function io(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/status`);
  }
  async function js(q) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function ro(q = !1) {
    return o(q ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function co() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function uo() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function fo(q) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function mo(q) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ra(q) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ca() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ua(q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/info`);
  }
  async function gn(q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances`);
  }
  async function le(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function Q(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(ke)}/start`, {
      method: "POST"
    });
  }
  async function Ae(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(ke)}/stop`, {
      method: "POST"
    });
  }
  async function Be(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(ke)}`, {
      method: "DELETE"
    });
  }
  async function ot(q) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: q })
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
    createBranch: k,
    switchBranch: C,
    deleteBranch: b,
    // Environment Management
    listEnvironments: x,
    getEnvironments: M,
    getEnvironmentDetails: R,
    switchEnvironment: T,
    getSwitchProgress: D,
    createEnvironment: O,
    getCreateProgress: W,
    getComfyUIReleases: I,
    deleteEnvironment: E,
    // Workflow Management
    getWorkflows: j,
    getWorkflowDetails: ee,
    resolveWorkflow: B,
    installWorkflowDeps: A,
    setModelImportance: K,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: F,
    getModelDetails: se,
    openFileLocation: Y,
    addModelSource: ae,
    removeModelSource: re,
    deleteModel: Pe,
    downloadModel: Ve,
    scanWorkspaceModels: Oe,
    getModelsDirectory: Ye,
    setModelsDirectory: we,
    getHuggingFaceRepoInfo: oe,
    getModelsSubdirectories: de,
    searchHuggingFaceRepos: ve,
    // Settings
    getConfig: Ie,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Ue,
    getWorkspaceLogs: U,
    getEnvironmentLogPath: P,
    getWorkspaceLogPath: V,
    getOrchestratorLogs: Z,
    getOrchestratorLogPath: ne,
    openFile: fe,
    // Node Management
    getNodes: _e,
    trackNodeAsDev: ie,
    installNode: be,
    queueNodeInstall: ce,
    updateNode: De,
    uninstallNode: Ee,
    // Git Remotes
    getRemotes: ue,
    addRemote: G,
    removeRemote: Me,
    updateRemoteUrl: Ce,
    fetchRemote: $e,
    getRemoteSyncStatus: J,
    // Push/Pull
    getPullPreview: me,
    pullFromRemote: ze,
    getPushPreview: et,
    pushToRemote: Et,
    validateMerge: at,
    // Environment Sync
    syncEnvironmentManually: N,
    // Workflow Repair
    repairWorkflowModels: pt,
    // Import Operations
    previewTarballImport: Ut,
    previewGitImport: oo,
    validateEnvironmentName: lt,
    executeImport: Mo,
    executeGitImport: no,
    getImportProgress: Ps,
    // First-Time Setup
    getSetupStatus: Do,
    // Manager Update Notice
    getUpdateCheck: Lo,
    updateManager: hs,
    initializeWorkspace: xe,
    getInitializeProgress: te,
    validatePath: Ge,
    // Deploy Operations
    getDeploySummary: yt,
    getDataCenters: Nt,
    testRunPodConnection: jt,
    getNetworkVolumes: ys,
    getRunPodGpuTypes: _t,
    deployToRunPod: Ne,
    getRunPodPods: Xt,
    terminateRunPodPod: rs,
    stopRunPodPod: ao,
    startRunPodPod: lo,
    getDeploymentStatus: io,
    exportDeployPackage: js,
    getStoredRunPodKey: ro,
    clearRunPodKey: co,
    // Custom Worker Operations
    getCustomWorkers: uo,
    addCustomWorker: fo,
    removeCustomWorker: mo,
    testWorkerConnection: ra,
    scanForWorkers: ca,
    getWorkerSystemInfo: ua,
    getWorkerInstances: gn,
    deployToWorker: le,
    startWorkerInstance: Q,
    stopWorkerInstance: Ae,
    terminateWorkerInstance: Be,
    // Git Authentication
    testGitAuth: ot
  };
}
const Pv = { class: "base-modal-header" }, Mv = {
  key: 0,
  class: "base-modal-title"
}, Dv = { class: "base-modal-body" }, Lv = {
  key: 0,
  class: "base-modal-loading"
}, Av = {
  key: 1,
  class: "base-modal-error"
}, Nv = {
  key: 0,
  class: "base-modal-footer"
}, Ov = /* @__PURE__ */ ge({
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
    return Qe(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Gs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), L(kt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Se(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = ct(() => {
          }, ["stop"]))
        }, [
          t("div", Pv, [
            Ke(c.$slots, "header", {}, () => [
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
            e.loading ? (n(), i("div", Lv, "Loading...")) : e.error ? (n(), i("div", Av, f(e.error), 1)) : Ke(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Nv, [
            Ke(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ ye(Ov, [["__scopeId", "data-v-8dab1081"]]), Uv = ["type", "disabled"], zv = {
  key: 0,
  class: "spinner"
}, Fv = /* @__PURE__ */ ge({
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
      class: Se(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", zv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Uv));
  }
}), Re = /* @__PURE__ */ ye(Fv, [["__scopeId", "data-v-f3452606"]]), Vv = { class: "commit-list" }, Bv = /* @__PURE__ */ ge({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", Vv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), Dr = /* @__PURE__ */ ye(Bv, [["__scopeId", "data-v-8c5ee761"]]), Wv = { class: "commit-hash" }, Gv = /* @__PURE__ */ ge({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = z(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Wv, f(o.value), 1));
  }
}), Lr = /* @__PURE__ */ ye(Gv, [["__scopeId", "data-v-7c333cc6"]]), jv = { class: "commit-message" }, Hv = { class: "commit-date" }, Kv = /* @__PURE__ */ ge({
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
      class: Se(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      S(Lr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", jv, f(e.message), 1),
      t("span", Hv, f(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = ct(() => {
        }, ["stop"]))
      }, [
        Ke(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ar = /* @__PURE__ */ ye(Kv, [["__scopeId", "data-v-dd7c621b"]]), qv = { class: "header-info" }, Yv = { class: "branch-name" }, Jv = {
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
}, sp = /* @__PURE__ */ ge({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = Ze(), a = _([]), l = _(!1), r = _(!0);
    return Qe(async () => {
      try {
        const c = await o(s.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), L(dt, {
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
        S(Re, {
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
          r.value ? (n(), i("span", Xv, "Loading...")) : (n(), i(H, { key: 1 }, [
            t("span", null, f(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", Zv, "(showing first " + f(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", ep, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", tp, " No commits found on this branch ")) : (n(), L(Dr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(H, null, he(a.value, (d) => (n(), L(Ar, {
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
        e.isCurrent ? y("", !0) : (n(), L(pe, {
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
        e.isCurrent ? y("", !0) : (n(), L(Re, {
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
}), op = /* @__PURE__ */ ye(sp, [["__scopeId", "data-v-2e5437cc"]]), np = {
  key: 2,
  class: "branch-list"
}, ap = /* @__PURE__ */ ge({
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
    function d(v) {
      l.value = null, o("delete", v);
    }
    function m(v) {
      l.value = null, o("switch", v);
    }
    return (v, g) => (n(), L(Lt, null, {
      header: h(() => [
        S(At, { title: "BRANCHES" }, {
          actions: h(() => [
            a.value ? y("", !0) : (n(), L(pe, {
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
        a.value ? (n(), L(bv, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), L(ls, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", np, [
          (n(!0), i(H, null, he(e.branches, (w) => (n(), L(Ev, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (n(), L(pe, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: ct((p) => o("switch", w.name), ["stop"])
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
        l.value ? (n(), L(op, {
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
}), lp = /* @__PURE__ */ ye(ap, [["__scopeId", "data-v-eefdcb00"]]), ip = /* @__PURE__ */ ge({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = z(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), L(Lt, null, {
      header: h(() => [
        S(At, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (n(), L(ls, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L(Dr, { key: 1 }, {
          default: h(() => [
            (n(!0), i(H, null, he(e.commits, (r) => (n(), L(Ar, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                S(pe, {
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
}), rp = /* @__PURE__ */ ye(ip, [["__scopeId", "data-v-62a5d9da"]]);
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
}, dp = /* @__PURE__ */ ge({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), L(ll(`h${e.level}`), {
      class: Se(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", up, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Xo = /* @__PURE__ */ ye(dp, [["__scopeId", "data-v-5a01561d"]]), fp = ["value", "disabled"], mp = {
  key: 0,
  value: "",
  disabled: ""
}, vp = ["value"], pp = {
  key: 0,
  class: "base-select-error"
}, gp = /* @__PURE__ */ ge({
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
      class: Se(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Se(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", mp, f(e.placeholder), 1)) : y("", !0),
        (n(!0), i(H, null, he(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, f(o(r)), 9, vp))), 128))
      ], 42, fp),
      e.error ? (n(), i("span", pp, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), hp = /* @__PURE__ */ ye(gp, [["__scopeId", "data-v-4996bfe0"]]), yp = { class: "popover-header" }, wp = { class: "popover-title" }, kp = { class: "popover-content" }, _p = {
  key: 0,
  class: "popover-actions"
}, bp = /* @__PURE__ */ ge({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), L(kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Gt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = ct(() => {
          }, ["stop"]))
        }, [
          t("div", yp, [
            t("h4", wp, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", kp, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", _p, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), is = /* @__PURE__ */ ye(bp, [["__scopeId", "data-v-42815ace"]]), $p = { class: "detail-section" }, Cp = {
  key: 0,
  class: "empty-message"
}, xp = { class: "model-header" }, Sp = { class: "model-name" }, Ip = { class: "model-details" }, Ep = { class: "model-row" }, Tp = { class: "model-row" }, Rp = { class: "label" }, Pp = {
  key: 0,
  class: "model-row model-row-nodes"
}, Mp = { class: "node-list" }, Dp = ["onClick"], Lp = {
  key: 1,
  class: "model-row"
}, Ap = { class: "value" }, Np = {
  key: 2,
  class: "model-row"
}, Op = { class: "value error" }, Up = {
  key: 0,
  class: "model-actions"
}, zp = { class: "detail-section" }, Fp = {
  key: 0,
  class: "empty-message"
}, Vp = { class: "node-name" }, Bp = {
  key: 0,
  class: "node-version"
}, Wp = /* @__PURE__ */ ge({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c } = Ze(), u = _(null), d = _(!1), m = _(null), v = _(!1), g = _({}), w = _(!1), p = _(/* @__PURE__ */ new Set()), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(I) {
      switch (I) {
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
    function b(I) {
      switch (I) {
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
    function x(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const E = I.hash || I.filename;
      return p.value.has(E) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function M(I) {
      return p.value.has(I);
    }
    function R(I) {
      p.value.has(I) ? p.value.delete(I) : p.value.add(I), p.value = new Set(p.value);
    }
    async function T() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function D(I, E) {
      g.value[I] = E, v.value = !0;
    }
    async function O(I) {
      try {
        await c(I);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function W() {
      if (!v.value) {
        a("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [I, E] of Object.entries(g.value))
          await r(o.workflowName, I, E);
        a("refresh"), a("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Qe(T), (I, E) => (n(), i(H, null, [
      S(dt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (j) => a("close"))
      }, {
        body: h(() => [
          u.value ? (n(), i(H, { key: 0 }, [
            t("section", $p, [
              S(Xo, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (n(), i("div", Cp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, he(u.value.models, (j) => {
                var ee;
                return n(), i("div", {
                  key: j.hash || j.filename,
                  class: "model-card"
                }, [
                  t("div", xp, [
                    E[6] || (E[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Sp, f(j.filename), 1)
                  ]),
                  t("div", Ip, [
                    t("div", Ep, [
                      E[7] || (E[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Se(["value", C(j.status)])
                      }, f(b(j.status)), 3)
                    ]),
                    t("div", Tp, [
                      t("span", Rp, [
                        E[8] || (E[8] = $(" Importance: ", -1)),
                        S(Mr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (B) => w.value = !0)
                        })
                      ]),
                      S(hp, {
                        "model-value": g.value[j.filename] || j.importance,
                        options: k,
                        "onUpdate:modelValue": (B) => D(j.filename, B)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    j.loaded_by && j.loaded_by.length > 0 ? (n(), i("div", Pp, [
                      E[9] || (E[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Mp, [
                        (n(!0), i(H, null, he(x(j), (B, A) => (n(), i("div", {
                          key: `${B.node_id}-${A}`,
                          class: "node-reference"
                        }, f(B.node_type) + " (Node #" + f(B.node_id) + ") ", 1))), 128)),
                        j.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (B) => R(j.hash || j.filename)
                        }, f(M(j.hash || j.filename) ? "▼ Show less" : `▶ View all (${j.loaded_by.length})`), 9, Dp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    j.size_mb ? (n(), i("div", Lp, [
                      E[10] || (E[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Ap, f(j.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    j.has_category_mismatch ? (n(), i("div", Np, [
                      E[13] || (E[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Op, [
                        E[11] || (E[11] = $(" In ", -1)),
                        t("code", null, f(j.actual_category) + "/", 1),
                        E[12] || (E[12] = $(" but loader needs ", -1)),
                        t("code", null, f((ee = j.expected_categories) == null ? void 0 : ee[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  j.status !== "available" ? (n(), i("div", Up, [
                    j.status === "downloadable" ? (n(), L(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (B) => a("resolve"))
                    }, {
                      default: h(() => [...E[14] || (E[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : j.status === "category_mismatch" && j.file_path ? (n(), L(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => O(j.file_path)
                    }, {
                      default: h(() => [...E[15] || (E[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : j.status !== "path_mismatch" ? (n(), L(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: E[2] || (E[2] = (B) => a("resolve"))
                    }, {
                      default: h(() => [...E[16] || (E[16] = [
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
              (n(!0), i(H, null, he(u.value.nodes, (j) => (n(), i("div", {
                key: j.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Se(["node-status", j.status === "installed" ? "installed" : "missing"])
                }, f(j.status === "installed" ? "✓" : "✕"), 3),
                t("span", Vp, f(j.name), 1),
                j.version ? (n(), i("span", Bp, "v" + f(j.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          S(Re, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (j) => a("close"))
          }, {
            default: h(() => [...E[17] || (E[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            onClick: W
          }, {
            default: h(() => [...E[18] || (E[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      S(is, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: E[5] || (E[5] = (j) => w.value = !1)
      }, {
        content: h(() => [...E[19] || (E[19] = [
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
}), Gp = /* @__PURE__ */ ye(Wp, [["__scopeId", "data-v-668728e6"]]), Je = Ws({
  items: [],
  status: "idle"
});
let ms = null;
function Nr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function $a(e) {
  return Je.items.find((s) => s.id === e);
}
async function wo() {
  if (Je.status === "downloading") return;
  const e = Je.items.find((s) => s.status === "queued");
  if (!e) {
    Je.status = "idle";
    return;
  }
  Je.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await jp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Je.status = "idle", wo();
  }
}
async function jp(e) {
  return new Promise((s, o) => {
    ms && (ms.close(), ms = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ms = l;
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
            u = !0, l.close(), ms = null, s();
            break;
          case "error":
            u = !0, l.close(), ms = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), ms = null, u || o(new Error("Connection lost"));
    };
  });
}
async function Hp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Je.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Nr(),
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
      Je.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Ro() {
  function e(b) {
    for (const x of b) {
      if (Je.items.some(
        (T) => T.url === x.url && T.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const R = {
        id: Nr(),
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
      Je.items.push(R);
    }
    Je.status === "idle" && wo();
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
        ms && (ms.close(), ms = null), x.status = "failed", x.error = "Cancelled by user", Je.status = "idle", wo();
      } else if (x.status === "queued") {
        const M = Je.items.findIndex((R) => R.id === b);
        M >= 0 && Je.items.splice(M, 1);
      }
    }
  }
  function o(b) {
    const x = $a(b);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, Je.status === "idle" && wo());
  }
  function a(b) {
    const x = $a(b);
    !x || x.status !== "paused" || (x.status = "queued", Je.status === "idle" && wo());
  }
  function l() {
    const b = Je.items.filter((x) => x.status === "paused");
    for (const x of b)
      x.status = "queued";
    Je.status === "idle" && wo();
  }
  function r(b) {
    const x = Je.items.findIndex((M) => M.id === b);
    x >= 0 && ["completed", "failed", "paused"].includes(Je.items[x].status) && Je.items.splice(x, 1);
  }
  function c() {
    Je.items = Je.items.filter((b) => b.status !== "completed");
  }
  function u() {
    Je.items = Je.items.filter((b) => b.status !== "failed");
  }
  const d = z(
    () => Je.items.find((b) => b.status === "downloading")
  ), m = z(
    () => Je.items.filter((b) => b.status === "queued")
  ), v = z(
    () => Je.items.filter((b) => b.status === "completed")
  ), g = z(
    () => Je.items.filter((b) => b.status === "failed")
  ), w = z(
    () => Je.items.filter((b) => b.status === "paused")
  ), p = z(() => Je.items.length > 0), k = z(
    () => Je.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = z(
    () => Je.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: An(Je),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: g,
    pausedItems: w,
    hasItems: p,
    activeCount: k,
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
    loadPendingDownloads: Hp
  };
}
function Or() {
  const e = _(null), s = _(null), o = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(M, R) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(M, R);
    if (!T.ok) {
      const O = await T.json().catch(() => ({})), W = O.error || O.message || `Request failed: ${T.status}`;
      throw new Error(W);
    }
    return T.json();
  }
  async function u(M) {
    l.value = !0, r.value = null;
    try {
      let R;
      return yo() || (R = await c(
        `/v2/comfygit/workflow/${M}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = R, R;
    } catch (R) {
      const T = R instanceof Error ? R.message : "Unknown error occurred";
      throw r.value = T, R;
    } finally {
      l.value = !1;
    }
  }
  async function d(M, R, T, D) {
    l.value = !0, r.value = null;
    try {
      let O;
      if (!yo()) {
        const W = Object.fromEntries(R), I = Object.fromEntries(T), E = D ? Array.from(D) : [];
        O = await c(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: I,
              skipped_packages: E
            })
          }
        );
      }
      return s.value = O, O;
    } catch (O) {
      const W = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = W, O;
    } finally {
      l.value = !1;
    }
  }
  async function m(M, R = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return yo() || (T = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: R })
        }
      )), o.value = T.results, T.results;
    } catch (T) {
      const D = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = D, T;
    } finally {
      l.value = !1;
    }
  }
  async function v(M, R = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return yo() || (T = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: R })
        }
      )), a.value = T.results, T.results;
    } catch (T) {
      const D = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = D, T;
    } finally {
      l.value = !1;
    }
  }
  const g = Ws({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function p(M) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return yo(), await k(M);
    } catch (R) {
      const T = R instanceof Error ? R.message : "Failed to install nodes";
      throw g.installError = T, R;
    }
  }
  async function k(M) {
    var T;
    const R = await c(
      `/v2/comfygit/workflow/${M}/install`,
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
      const D = new Map(((T = R.failed) == null ? void 0 : T.map((O) => [O.node_id, O.error])) || []);
      for (let O = 0; O < g.nodesToInstall.length; O++) {
        const W = g.nodesToInstall[O], I = D.get(W);
        g.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = R.nodes_installed, g.needsRestart = R.nodes_installed.length > 0, R.failed && R.failed.length > 0 && (g.installError = `${R.failed.length} package(s) failed to install`), R;
  }
  async function C(M, R, T) {
    w(), g.phase = "resolving", r.value = null;
    const D = Object.fromEntries(R), O = Object.fromEntries(T);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${M}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: O
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const I = W.body.getReader(), E = new TextDecoder();
      let j = "";
      for (; ; ) {
        const { done: ee, value: B } = await I.read();
        if (ee) break;
        j += E.decode(B, { stream: !0 });
        const A = j.split(`

`);
        j = A.pop() || "";
        for (const K of A) {
          if (!K.trim()) continue;
          const X = K.split(`
`);
          let F = "", se = "";
          for (const Y of X)
            Y.startsWith("event: ") ? F = Y.slice(7) : Y.startsWith("data: ") && (se = Y.slice(6));
          if (se)
            try {
              const Y = JSON.parse(se);
              b(F, Y);
            } catch (Y) {
              console.warn("Failed to parse SSE event:", Y);
            }
        }
      }
    } catch (W) {
      const I = W instanceof Error ? W.message : "Unknown error occurred";
      throw r.value = I, g.error = I, g.phase = "error", W;
    }
  }
  function b(M, R) {
    switch (M) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = R.total;
        break;
      case "file_start":
        g.currentFile = R.filename, g.currentFileIndex = R.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = R.downloaded, g.bytesTotal = R.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: R.filename,
          success: R.success,
          error: R.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = R.nodes_to_install || [], R.download_results && (g.completedFiles = R.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = R.message, g.phase = "error", r.value = R.message;
        break;
    }
  }
  function x(M, R) {
    const { addToQueue: T } = Ro(), D = R.filter((O) => O.url && O.target_path).map((O) => ({
      workflow: M,
      filename: O.filename,
      url: O.url,
      targetPath: O.target_path,
      size: O.size || 0,
      type: "model"
    }));
    return D.length > 0 && T(D), D.length;
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
const Kp = { class: "resolution-stepper" }, qp = { class: "stepper-header" }, Yp = ["onClick"], Jp = {
  key: 0,
  class: "step-icon"
}, Qp = {
  key: 1,
  class: "step-number"
}, Xp = { class: "step-label" }, Zp = {
  key: 0,
  class: "step-connector"
}, eg = { class: "stepper-content" }, tg = /* @__PURE__ */ ge({
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
    return (m, v) => (n(), i("div", Kp, [
      t("div", qp, [
        (n(!0), i(H, null, he(e.steps, (g, w) => (n(), i("div", {
          key: g.id,
          class: Se(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": r(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Se(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (n(), i("span", Jp, "✓")) : (n(), i("span", Qp, f(w + 1), 1))
          ], 2),
          t("div", Xp, f(g.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Zp)) : y("", !0)
        ], 10, Yp))), 128))
      ]),
      t("div", eg, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), sg = /* @__PURE__ */ ye(tg, [["__scopeId", "data-v-2a7b3af8"]]), og = /* @__PURE__ */ ge({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = z(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = z(() => `confidence-${o.value}`), l = z(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Se(["confidence-badge", a.value, e.size])
    }, f(l.value), 3));
  }
}), Gn = /* @__PURE__ */ ye(og, [["__scopeId", "data-v-17ec4b80"]]), ng = { class: "node-info" }, ag = { class: "node-info-text" }, lg = { class: "item-body" }, ig = {
  key: 0,
  class: "resolved-state"
}, rg = {
  key: 1,
  class: "multiple-options"
}, cg = { class: "options-list" }, ug = ["onClick"], dg = ["name", "value", "checked", "onChange"], fg = { class: "option-content" }, mg = { class: "option-header" }, vg = { class: "option-package-id" }, pg = {
  key: 0,
  class: "option-title"
}, gg = { class: "option-meta" }, hg = {
  key: 0,
  class: "installed-badge"
}, yg = { class: "action-buttons" }, wg = {
  key: 2,
  class: "unresolved"
}, kg = {
  key: 0,
  class: "searching-state"
}, _g = { class: "options-list" }, bg = ["onClick"], $g = ["name", "value"], Cg = { class: "option-content" }, xg = { class: "option-header" }, Sg = { class: "option-package-id" }, Ig = {
  key: 0,
  class: "option-description"
}, Eg = { class: "option-meta" }, Tg = {
  key: 0,
  class: "installed-badge"
}, Rg = {
  key: 2,
  class: "unresolved-message"
}, Pg = { class: "action-buttons" }, Mg = /* @__PURE__ */ ge({
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
    const r = z(() => !!o.choice);
    z(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const c = z(() => {
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
      class: Se(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", ng, [
        t("span", ag, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Se(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", lg, [
        r.value ? (n(), i("div", ig, [
          S(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", rg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", cg, [
            (n(!0), i(H, null, he(e.options, (v, g) => (n(), i("label", {
              key: v.package_id,
              class: Se(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => u(g)
              }, null, 40, dg),
              t("div", fg, [
                t("div", mg, [
                  t("span", vg, f(v.package_id), 1),
                  S(Gn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (n(), i("div", pg, f(v.title), 1)) : y("", !0),
                t("div", gg, [
                  v.is_installed ? (n(), i("span", hg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, ug))), 128))
          ]),
          t("div", yg, [
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
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
        ])) : (n(), i("div", wg, [
          e.isSearching ? (n(), i("div", kg, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(H, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", _g, [
              (n(!0), i(H, null, he(e.searchResults.slice(0, 5), (v, g) => (n(), i("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, $g),
                t("div", Cg, [
                  t("div", xg, [
                    t("span", Sg, f(v.package_id), 1),
                    S(Gn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (n(), i("div", Ig, f(l(v.description)), 1)) : y("", !0),
                  t("div", Eg, [
                    v.is_installed ? (n(), i("span", Tg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, bg))), 128))
            ])
          ], 64)) : (n(), i("div", Rg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Pg, [
            S(Re, {
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
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
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
}), Dg = /* @__PURE__ */ ye(Mg, [["__scopeId", "data-v-c2997d1d"]]), Lg = { class: "item-navigator" }, Ag = { class: "nav-item-info" }, Ng = ["title"], Og = { class: "nav-controls" }, Ug = { class: "nav-arrows" }, zg = ["disabled"], Fg = ["disabled"], Vg = { class: "nav-position" }, Bg = /* @__PURE__ */ ge({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Lg, [
      t("div", Ag, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Ng)
      ]),
      t("div", Og, [
        t("div", Ug, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, zg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Fg)
        ]),
        t("span", Vg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Ur = /* @__PURE__ */ ye(Bg, [["__scopeId", "data-v-74af7920"]]), Wg = ["type", "value", "placeholder", "disabled"], Gg = {
  key: 0,
  class: "base-input-error"
}, jg = /* @__PURE__ */ ge({
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
      class: Se(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Se(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = Jt((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Jt((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Wg),
      e.error ? (n(), i("span", Gg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ ye(jg, [["__scopeId", "data-v-9ba02cdc"]]), Hg = { class: "node-resolution-step" }, Kg = {
  key: 0,
  class: "auto-resolved-section"
}, qg = { class: "section-header" }, Yg = { class: "stat-badge" }, Jg = { class: "resolved-packages-list" }, Qg = { class: "package-info" }, Xg = { class: "package-id" }, Zg = { class: "node-count" }, eh = { class: "package-actions" }, th = {
  key: 0,
  class: "status-badge install"
}, sh = {
  key: 1,
  class: "status-badge skip"
}, oh = ["onClick"], nh = {
  key: 1,
  class: "section-divider"
}, ah = { class: "step-header" }, lh = { class: "stat-badge" }, ih = {
  key: 1,
  class: "step-body"
}, rh = {
  key: 3,
  class: "empty-state"
}, ch = { class: "node-modal-body" }, uh = { class: "node-search-results-container" }, dh = {
  key: 0,
  class: "node-search-results"
}, fh = ["onClick"], mh = { class: "node-result-header" }, vh = { class: "node-result-package-id" }, ph = {
  key: 0,
  class: "node-result-description"
}, gh = {
  key: 1,
  class: "node-empty-state"
}, hh = {
  key: 2,
  class: "node-empty-state"
}, yh = {
  key: 3,
  class: "node-empty-state"
}, wh = { class: "node-manual-entry-modal" }, kh = { class: "node-modal-body" }, _h = { class: "node-modal-actions" }, bh = /* @__PURE__ */ ge({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, a = s, { searchNodes: l } = Or(), r = _(0), c = _(!1), u = _(!1), d = _(""), m = _(""), v = _([]), g = _(!1), w = _(/* @__PURE__ */ new Map()), p = _(/* @__PURE__ */ new Set()), k = _(!1);
    function C() {
      k.value && Y(), k.value = !1;
    }
    const b = z(() => o.nodes[r.value]), x = z(() => o.nodes.filter((oe) => o.nodeChoices.has(oe.node_type)).length), M = z(() => b.value ? w.value.get(b.value.node_type) || [] : []), R = z(() => b.value ? p.value.has(b.value.node_type) : !1);
    ft(b, async (oe) => {
      var de;
      oe && ((de = oe.options) != null && de.length || w.value.has(oe.node_type) || p.value.has(oe.node_type) || o.nodeChoices.has(oe.node_type) || await T(oe.node_type));
    }, { immediate: !0 });
    async function T(oe) {
      p.value.add(oe);
      try {
        const de = await l(oe, 5);
        w.value.set(oe, de);
      } catch {
        w.value.set(oe, []);
      } finally {
        p.value.delete(oe);
      }
    }
    const D = z(() => o.autoResolvedPackages.filter((oe) => !o.skippedPackages.has(oe.package_id)).length);
    function O(oe) {
      return o.skippedPackages.has(oe);
    }
    function W(oe) {
      a("package-skip", oe);
    }
    const I = z(() => {
      var de;
      if (!b.value) return "not-found";
      const oe = o.nodeChoices.get(b.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (de = b.value.options) != null && de.length ? "ambiguous" : "not-found";
    }), E = z(() => {
      var de;
      if (!b.value) return;
      const oe = o.nodeChoices.get(b.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return oe.package_id ? `→ ${oe.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (de = b.value.options) != null && de.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function j(oe) {
      oe >= 0 && oe < o.nodes.length && (r.value = oe);
    }
    function ee() {
      var oe;
      for (let de = r.value + 1; de < o.nodes.length; de++) {
        const ve = o.nodes[de];
        if (!((oe = o.nodeChoices) != null && oe.has(ve.node_type))) {
          j(de);
          return;
        }
      }
    }
    function B() {
      b.value && (a("mark-optional", b.value.node_type), ht(() => ee()));
    }
    function A() {
      b.value && (a("skip", b.value.node_type), ht(() => ee()));
    }
    function K(oe) {
      b.value && (a("option-selected", b.value.node_type, oe), ht(() => ee()));
    }
    function X() {
      b.value && a("clear-choice", b.value.node_type);
    }
    function F() {
      b.value && (d.value = b.value.node_type, v.value = M.value, c.value = !0, Ve(d.value));
    }
    function se() {
      m.value = "", u.value = !0;
    }
    function Y() {
      c.value = !1, d.value = "", v.value = [];
    }
    function ae() {
      u.value = !1, m.value = "";
    }
    let re = null;
    function Pe() {
      re && clearTimeout(re), re = setTimeout(() => {
        Ve(d.value);
      }, 300);
    }
    async function Ve(oe) {
      if (!oe.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(oe, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function Oe(oe) {
      b.value && (a("manual-entry", b.value.node_type, oe.package_id), Y(), ht(() => ee()));
    }
    function Ye(oe) {
      b.value && (a("manual-entry", b.value.node_type, oe.package_id), ht(() => ee()));
    }
    function we() {
      !b.value || !m.value.trim() || (a("manual-entry", b.value.node_type, m.value.trim()), ae(), ht(() => ee()));
    }
    return (oe, de) => {
      var ve, Ie;
      return n(), i("div", Hg, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Kg, [
          t("div", qg, [
            de[6] || (de[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Yg, f(D.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Jg, [
            (n(!0), i(H, null, he(e.autoResolvedPackages, (Te) => (n(), i("div", {
              key: Te.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Qg, [
                t("code", Xg, f(Te.package_id), 1),
                t("span", Zg, f(Te.node_types_count) + " node type" + f(Te.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", eh, [
                O(Te.package_id) ? (n(), i("span", sh, " SKIPPED ")) : (n(), i("span", th, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ue) => W(Te.package_id)
                }, f(O(Te.package_id) ? "Include" : "Skip"), 9, oh)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", nh)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(H, { key: 2 }, [
          t("div", ah, [
            de[7] || (de[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", lh, f(x.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (n(), L(Ur, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: de[0] || (de[0] = (Te) => j(r.value - 1)),
            onNext: de[1] || (de[1] = (Te) => j(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (n(), i("div", ih, [
            S(Dg, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ve = b.value.options) != null && ve.length),
              options: b.value.options,
              choice: (Ie = e.nodeChoices) == null ? void 0 : Ie.get(b.value.node_type),
              status: I.value,
              "status-label": E.value,
              "search-results": M.value,
              "is-searching": R.value,
              onMarkOptional: B,
              onSkip: A,
              onManualEntry: se,
              onSearch: F,
              onOptionSelected: K,
              onClearChoice: X,
              onSearchResultSelected: Ye
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", rh, [...de[8] || (de[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), L(kt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: de[4] || (de[4] = ct((Te) => k.value = !0, ["self"])),
            onMouseup: ct(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: de[3] || (de[3] = (Te) => k.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                de[9] || (de[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", ch, [
                S(It, {
                  modelValue: d.value,
                  "onUpdate:modelValue": de[2] || (de[2] = (Te) => d.value = Te),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                t("div", uh, [
                  v.value.length > 0 ? (n(), i("div", dh, [
                    (n(!0), i(H, null, he(v.value, (Te) => (n(), i("div", {
                      key: Te.package_id,
                      class: "node-search-result-item",
                      onClick: (Ue) => Oe(Te)
                    }, [
                      t("div", mh, [
                        t("code", vh, f(Te.package_id), 1),
                        Te.match_confidence ? (n(), L(Gn, {
                          key: 0,
                          confidence: Te.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Te.description ? (n(), i("div", ph, f(Te.description), 1)) : y("", !0)
                    ], 8, fh))), 128))
                  ])) : g.value ? (n(), i("div", gh, "Searching...")) : d.value ? (n(), i("div", hh, 'No packages found matching "' + f(d.value) + '"', 1)) : (n(), i("div", yh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), L(kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ct(ae, ["self"])
          }, [
            t("div", wh, [
              t("div", { class: "node-modal-header" }, [
                de[10] || (de[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ae
                }, "✕")
              ]),
              t("div", kh, [
                S(It, {
                  modelValue: m.value,
                  "onUpdate:modelValue": de[5] || (de[5] = (Te) => m.value = Te),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", _h, [
                  S(Re, {
                    variant: "secondary",
                    onClick: ae
                  }, {
                    default: h(() => [...de[11] || (de[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Re, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: we
                  }, {
                    default: h(() => [...de[12] || (de[12] = [
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
}), $h = /* @__PURE__ */ ye(bh, [["__scopeId", "data-v-6d7f8125"]]), Ch = { class: "node-info" }, xh = { class: "node-info-text" }, Sh = { class: "item-body" }, Ih = {
  key: 0,
  class: "resolved-state"
}, Eh = {
  key: 1,
  class: "multiple-options"
}, Th = { class: "options-list" }, Rh = ["onClick"], Ph = ["name", "value", "checked", "onChange"], Mh = { class: "option-content" }, Dh = { class: "option-header" }, Lh = { class: "option-filename" }, Ah = { class: "option-meta" }, Nh = { class: "option-size" }, Oh = { class: "option-category" }, Uh = { class: "option-path" }, zh = { class: "action-buttons" }, Fh = {
  key: 2,
  class: "unresolved"
}, Vh = { class: "action-buttons" }, Bh = /* @__PURE__ */ ge({
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
    const o = e, a = s, l = z(() => !!o.choice);
    z(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), z(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const r = z(() => {
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
      class: Se(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Ch, [
        t("span", xh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Se(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Sh, [
        l.value ? (n(), i("div", Ih, [
          S(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Eh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Th, [
            (n(!0), i(H, null, he(e.options, (v, g) => (n(), i("label", {
              key: v.model.hash,
              class: Se(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, Ph),
              t("div", Mh, [
                t("div", Dh, [
                  t("span", Lh, f(v.model.filename), 1),
                  S(Gn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Ah, [
                  t("span", Nh, f(u(v.model.size)), 1),
                  t("span", Oh, f(v.model.category), 1)
                ]),
                t("div", Uh, f(v.model.relative_path), 1)
              ])
            ], 10, Rh))), 128))
          ]),
          t("div", zh, [
            S(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
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
        ])) : (n(), i("div", Fh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Vh, [
            S(Re, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => a("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
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
}), Wh = /* @__PURE__ */ ye(Bh, [["__scopeId", "data-v-8a82fefa"]]), Gh = { class: "model-resolution-step" }, jh = { class: "step-header" }, Hh = { class: "step-info" }, Kh = { class: "step-title" }, qh = { class: "step-description" }, Yh = { class: "stat-badge" }, Jh = {
  key: 1,
  class: "step-body"
}, Qh = {
  key: 2,
  class: "empty-state"
}, Xh = { class: "model-search-modal" }, Zh = { class: "model-modal-body" }, ey = {
  key: 0,
  class: "model-search-results"
}, ty = ["onClick"], sy = { class: "model-result-header" }, oy = { class: "model-result-filename" }, ny = { class: "model-result-meta" }, ay = { class: "model-result-category" }, ly = { class: "model-result-size" }, iy = {
  key: 0,
  class: "model-result-path"
}, ry = {
  key: 1,
  class: "model-no-results"
}, cy = {
  key: 2,
  class: "model-searching"
}, uy = { class: "model-download-url-modal" }, dy = { class: "model-modal-body" }, fy = { class: "model-input-group" }, my = { class: "model-input-group" }, vy = { class: "model-modal-actions" }, py = /* @__PURE__ */ ge({
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
    function a(Y) {
      var ae;
      return Y && ((ae = o[Y]) == null ? void 0 : ae[0]) || null;
    }
    const l = e, r = s, c = _(0), u = _(!1), d = _(!1), m = _(""), v = _(""), g = _(""), w = _([]), p = _(!1), k = z(() => l.models[c.value]), C = z(() => l.models.some((Y) => Y.is_download_intent)), b = z(() => l.models.filter(
      (Y) => l.modelChoices.has(Y.filename) || Y.is_download_intent
    ).length), x = z(() => {
      var ae;
      if (!k.value) return "";
      const Y = a((ae = k.value.reference) == null ? void 0 : ae.node_type);
      return Y ? `${Y}/${k.value.filename}` : "";
    }), M = z(() => {
      var ae;
      if (!k.value) return "not-found";
      const Y = l.modelChoices.get(k.value.filename);
      if (Y)
        switch (Y.action) {
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
      return k.value.is_download_intent ? "download" : (ae = k.value.options) != null && ae.length ? "ambiguous" : "not-found";
    }), R = z(() => {
      var ae, re;
      if (!k.value) return;
      const Y = l.modelChoices.get(k.value.filename);
      if (Y)
        switch (Y.action) {
          case "select":
            return (ae = Y.selected_model) != null && ae.filename ? `→ ${Y.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (re = k.value.options) != null && re.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function T(Y) {
      Y >= 0 && Y < l.models.length && (c.value = Y);
    }
    function D() {
      var Y;
      for (let ae = c.value + 1; ae < l.models.length; ae++) {
        const re = l.models[ae];
        if (!re.is_download_intent && !((Y = l.modelChoices) != null && Y.has(re.filename))) {
          T(ae);
          return;
        }
      }
    }
    function O() {
      k.value && (r("mark-optional", k.value.filename), ht(() => D()));
    }
    function W() {
      k.value && (r("skip", k.value.filename), ht(() => D()));
    }
    function I(Y) {
      k.value && (r("option-selected", k.value.filename, Y), ht(() => D()));
    }
    function E() {
      k.value && r("clear-choice", k.value.filename);
    }
    function j() {
      k.value && (m.value = k.value.filename, u.value = !0);
    }
    function ee() {
      k.value && (v.value = k.value.download_source || "", g.value = k.value.target_path || x.value, d.value = !0);
    }
    function B() {
      u.value = !1, m.value = "", w.value = [];
    }
    function A() {
      d.value = !1, v.value = "", g.value = "";
    }
    function K() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function X(Y) {
      k.value && (B(), ht(() => D()));
    }
    function F() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), g.value.trim() || void 0), A(), ht(() => D()));
    }
    function se(Y) {
      if (!Y) return "Unknown";
      const ae = Y / (1024 * 1024 * 1024);
      return ae >= 1 ? `${ae.toFixed(2)} GB` : `${(Y / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Y, ae) => {
      var re, Pe, Ve;
      return n(), i("div", Gh, [
        t("div", jh, [
          t("div", Hh, [
            t("h3", Kh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", qh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Yh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        k.value ? (n(), L(Ur, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ae[0] || (ae[0] = (Oe) => T(c.value - 1)),
          onNext: ae[1] || (ae[1] = (Oe) => T(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (n(), i("div", Jh, [
          S(Wh, {
            filename: k.value.filename,
            "node-type": ((re = k.value.reference) == null ? void 0 : re.node_type) || "Unknown",
            "has-multiple-options": !!((Pe = k.value.options) != null && Pe.length),
            options: k.value.options,
            choice: (Ve = e.modelChoices) == null ? void 0 : Ve.get(k.value.filename),
            status: M.value,
            "status-label": R.value,
            onMarkOptional: O,
            onSkip: W,
            onDownloadUrl: ee,
            onSearch: j,
            onOptionSelected: I,
            onClearChoice: E
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Qh, [...ae[5] || (ae[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ct(B, ["self"])
          }, [
            t("div", Xh, [
              t("div", { class: "model-modal-header" }, [
                ae[6] || (ae[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              t("div", Zh, [
                S(It, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ae[2] || (ae[2] = (Oe) => m.value = Oe),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", ey, [
                  (n(!0), i(H, null, he(w.value, (Oe) => (n(), i("div", {
                    key: Oe.hash,
                    class: "model-search-result-item",
                    onClick: (Ye) => X()
                  }, [
                    t("div", sy, [
                      t("code", oy, f(Oe.filename), 1)
                    ]),
                    t("div", ny, [
                      t("span", ay, f(Oe.category), 1),
                      t("span", ly, f(se(Oe.size)), 1)
                    ]),
                    Oe.relative_path ? (n(), i("div", iy, f(Oe.relative_path), 1)) : y("", !0)
                  ], 8, ty))), 128))
                ])) : m.value && !p.value ? (n(), i("div", ry, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (n(), i("div", cy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), L(kt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ct(A, ["self"])
          }, [
            t("div", uy, [
              t("div", { class: "model-modal-header" }, [
                ae[7] || (ae[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              t("div", dy, [
                t("div", fy, [
                  ae[8] || (ae[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(It, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ae[3] || (ae[3] = (Oe) => v.value = Oe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", my, [
                  ae[9] || (ae[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(It, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ae[4] || (ae[4] = (Oe) => g.value = Oe),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", vy, [
                  S(Re, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: h(() => [...ae[10] || (ae[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: F
                  }, {
                    default: h(() => [...ae[11] || (ae[11] = [
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
}), gy = /* @__PURE__ */ ye(py, [["__scopeId", "data-v-5c700bfa"]]), hy = { class: "applying-step" }, yy = {
  key: 0,
  class: "phase-content"
}, wy = {
  key: 1,
  class: "phase-content"
}, ky = { class: "phase-description" }, _y = { class: "overall-progress" }, by = { class: "progress-bar" }, $y = { class: "progress-label" }, Cy = { class: "install-list" }, xy = { class: "install-icon" }, Sy = { key: 0 }, Iy = {
  key: 1,
  class: "spinner"
}, Ey = { key: 2 }, Ty = { key: 3 }, Ry = {
  key: 0,
  class: "install-error"
}, Py = {
  key: 2,
  class: "phase-content"
}, My = { class: "phase-header" }, Dy = { class: "phase-title" }, Ly = { class: "completion-summary" }, Ay = {
  key: 0,
  class: "summary-item success"
}, Ny = { class: "summary-text" }, Oy = {
  key: 1,
  class: "summary-item error"
}, Uy = { class: "summary-text" }, zy = {
  key: 2,
  class: "failed-list"
}, Fy = { class: "failed-node-id" }, Vy = { class: "failed-error" }, By = {
  key: 4,
  class: "summary-item success"
}, Wy = {
  key: 5,
  class: "restart-prompt"
}, Gy = {
  key: 3,
  class: "phase-content error"
}, jy = { class: "error-message" }, Hy = /* @__PURE__ */ ge({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = z(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), a = z(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = z(() => a.value.length > 0);
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
      return n(), i("div", hy, [
        e.progress.phase === "resolving" ? (n(), i("div", yy, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", wy, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", ky, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", _y, [
            t("div", by, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", $y, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Cy, [
            (n(!0), i(H, null, he(e.progress.nodesToInstall, (p, k) => (n(), i("div", {
              key: p,
              class: Se(["install-item", r(p, k)])
            }, [
              t("span", xy, [
                r(p, k) === "pending" ? (n(), i("span", Sy, "○")) : r(p, k) === "installing" ? (n(), i("span", Iy, "◌")) : r(p, k) === "complete" ? (n(), i("span", Ey, "✓")) : r(p, k) === "failed" ? (n(), i("span", Ty, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (n(), i("span", Ry, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Py, [
          t("div", My, [
            t("span", {
              class: Se(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", Dy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Ly, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Ay, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", Ny, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Oy, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", Uy, f(a.value.length) + " package" + f(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", zy, [
              (n(!0), i(H, null, he(a.value, (p) => (n(), i("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", Fy, f(p.node_id), 1),
                t("span", Vy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", By, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Wy, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", Gy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", jy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Ky = /* @__PURE__ */ ye(Hy, [["__scopeId", "data-v-5efaae58"]]), qy = {
  key: 0,
  class: "loading-state"
}, Yy = {
  key: 1,
  class: "wizard-content"
}, Jy = {
  key: 0,
  class: "step-content"
}, Qy = { class: "analysis-summary" }, Xy = { class: "analysis-header" }, Zy = { class: "summary-description" }, e1 = { class: "stats-grid" }, t1 = { class: "stat-card" }, s1 = { class: "stat-items" }, o1 = {
  key: 0,
  class: "stat-item success"
}, n1 = { class: "stat-count" }, a1 = {
  key: 1,
  class: "stat-item info"
}, l1 = { class: "stat-count" }, i1 = {
  key: 2,
  class: "stat-item warning"
}, r1 = { class: "stat-count" }, c1 = {
  key: 3,
  class: "stat-item error"
}, u1 = { class: "stat-count" }, d1 = { class: "stat-card" }, f1 = { class: "stat-items" }, m1 = { class: "stat-item success" }, v1 = { class: "stat-count" }, p1 = {
  key: 0,
  class: "stat-item info"
}, g1 = { class: "stat-count" }, h1 = {
  key: 1,
  class: "stat-item warning"
}, y1 = { class: "stat-count" }, w1 = {
  key: 2,
  class: "stat-item warning"
}, k1 = { class: "stat-count" }, _1 = {
  key: 3,
  class: "stat-item error"
}, b1 = { class: "stat-count" }, $1 = {
  key: 0,
  class: "status-message warning"
}, C1 = { class: "status-text" }, x1 = {
  key: 1,
  class: "status-message info"
}, S1 = { class: "status-text" }, I1 = {
  key: 2,
  class: "status-message info"
}, E1 = { class: "status-text" }, T1 = {
  key: 3,
  class: "status-message warning"
}, R1 = { class: "status-text" }, P1 = {
  key: 4,
  class: "status-message success"
}, M1 = {
  key: 5,
  class: "category-mismatch-section"
}, D1 = { class: "mismatch-list" }, L1 = { class: "mismatch-path" }, A1 = { class: "mismatch-target" }, N1 = {
  key: 3,
  class: "step-content"
}, O1 = { class: "review-summary" }, U1 = { class: "review-stats" }, z1 = { class: "review-stat" }, F1 = { class: "stat-value" }, V1 = { class: "review-stat" }, B1 = { class: "stat-value" }, W1 = { class: "review-stat" }, G1 = { class: "stat-value" }, j1 = { class: "review-stat" }, H1 = { class: "stat-value" }, K1 = {
  key: 0,
  class: "review-section"
}, q1 = { class: "section-title" }, Y1 = { class: "review-items" }, J1 = { class: "item-name" }, Q1 = { class: "item-choice" }, X1 = {
  key: 0,
  class: "choice-badge install"
}, Z1 = {
  key: 1,
  class: "choice-badge skip"
}, e0 = {
  key: 1,
  class: "review-section"
}, t0 = { class: "section-title" }, s0 = { class: "review-items" }, o0 = { class: "item-name" }, n0 = { class: "item-choice" }, a0 = {
  key: 0,
  class: "choice-badge install"
}, l0 = {
  key: 1,
  class: "choice-badge optional"
}, i0 = {
  key: 2,
  class: "choice-badge skip"
}, r0 = {
  key: 1,
  class: "choice-badge pending"
}, c0 = {
  key: 2,
  class: "review-section"
}, u0 = { class: "section-title" }, d0 = { class: "review-items download-details" }, f0 = { class: "download-info" }, m0 = { class: "item-name" }, v0 = { class: "download-meta" }, p0 = { class: "download-path" }, g0 = ["title"], h0 = {
  key: 3,
  class: "review-section"
}, y0 = { class: "section-title" }, w0 = { class: "review-items" }, k0 = { class: "item-name" }, _0 = { class: "item-choice" }, b0 = {
  key: 0,
  class: "choice-badge install"
}, $0 = {
  key: 1,
  class: "choice-badge download"
}, C0 = {
  key: 2,
  class: "choice-badge optional"
}, x0 = {
  key: 3,
  class: "choice-badge skip"
}, S0 = {
  key: 4,
  class: "choice-badge skip"
}, I0 = {
  key: 1,
  class: "choice-badge download"
}, E0 = {
  key: 2,
  class: "choice-badge pending"
}, T0 = {
  key: 4,
  class: "no-choices"
}, R0 = /* @__PURE__ */ ge({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Or(), { loadPendingDownloads: v } = Ro(), { openFileLocation: g } = Ze(), w = _(null), p = _(!1), k = _(!1), C = _(null), b = _("analysis"), x = _([]), M = _(/* @__PURE__ */ new Map()), R = _(/* @__PURE__ */ new Map()), T = _(/* @__PURE__ */ new Set()), D = z(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || j.value) && J.push({ id: "nodes", label: "Nodes" }), I.value && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), b.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), O = z(() => w.value ? w.value.stats.needs_user_input : !1), W = z(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = z(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = z(() => w.value ? w.value.stats.download_intents > 0 : !1), j = z(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ee = z(() => w.value ? w.value.nodes.resolved.length : 0), B = z(() => w.value ? w.value.models.resolved.filter((J) => J.has_category_mismatch) : []), A = z(() => B.value.length > 0), K = z(() => W.value || j.value ? "nodes" : I.value ? "models" : "review"), X = z(() => {
      if (!w.value) return [];
      const J = w.value.nodes.resolved.filter((me) => !me.is_installed), N = /* @__PURE__ */ new Set();
      return J.filter((me) => N.has(me.package.package_id) ? !1 : (N.add(me.package.package_id), !0));
    }), F = z(() => {
      if (!w.value) return [];
      const J = w.value.nodes.resolved.filter((me) => !me.is_installed), N = /* @__PURE__ */ new Map();
      for (const me of J) {
        const ze = N.get(me.package.package_id);
        ze ? ze.node_types_count++ : N.set(me.package.package_id, {
          package_id: me.package.package_id,
          title: me.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), se = z(() => X.value.filter((J) => !T.value.has(J.package.package_id))), Y = z(() => w.value ? w.value.models.resolved.filter(
      (J) => J.match_type === "download_intent" || J.match_type === "property_download_intent"
    ).map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), ae = z(() => {
      if (!w.value) return [];
      const J = w.value.nodes.unresolved.map((me) => ({
        node_type: me.reference.node_type,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), N = w.value.nodes.ambiguous.map((me) => ({
        node_type: me.reference.node_type,
        has_multiple_options: !0,
        options: me.options.map((ze) => ({
          package_id: ze.package.package_id,
          title: ze.package.title,
          match_confidence: ze.match_confidence,
          match_type: ze.match_type,
          is_installed: ze.is_installed
        }))
      }));
      return [...J, ...N];
    }), re = z(() => {
      if (!w.value) return [];
      const J = w.value.models.unresolved.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), N = w.value.models.ambiguous.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        has_multiple_options: !0,
        options: me.options.map((ze) => ({
          model: ze.model,
          match_confidence: ze.match_confidence,
          match_type: ze.match_type,
          has_download_source: ze.has_download_source
        }))
      }));
      return [...J, ...N];
    }), Pe = z(() => {
      const J = re.value, N = Y.value.map((me) => ({
        filename: me.filename,
        reference: me.reference,
        is_download_intent: !0,
        resolved_model: me.resolved_model,
        download_source: me.download_source,
        target_path: me.target_path,
        options: void 0
      }));
      return [...J, ...N];
    }), Ve = z(() => Y.value.filter((J) => {
      const N = R.value.get(J.filename);
      return N ? N.action === "download" : !0;
    }).map((J) => ({
      filename: J.filename,
      url: J.download_source,
      target_path: J.target_path
    })));
    function Oe(J, N = 50) {
      return J.length <= N ? J : J.slice(0, N - 3) + "...";
    }
    const Ye = z(() => {
      let J = se.value.length;
      for (const N of M.value.values())
        N.action === "install" && J++;
      for (const N of R.value.values())
        N.action === "select" && J++;
      return J;
    }), we = z(() => {
      let J = 0;
      for (const N of R.value.values())
        N.action === "download" && J++;
      for (const N of Y.value)
        R.value.get(N.filename) || J++;
      return J;
    }), oe = z(() => {
      let J = 0;
      for (const N of M.value.values())
        N.action === "optional" && J++;
      for (const N of R.value.values())
        N.action === "optional" && J++;
      return J;
    }), de = z(() => {
      let J = T.value.size;
      for (const N of M.value.values())
        N.action === "skip" && J++;
      for (const N of R.value.values())
        N.action === "skip" && J++;
      for (const N of ae.value)
        M.value.has(N.node_type) || J++;
      for (const N of re.value)
        R.value.has(N.filename) || J++;
      return J;
    }), ve = z(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, W.value) {
        const N = ae.value.length, me = ae.value.filter(
          (ze) => M.value.has(ze.node_type)
        ).length;
        J.nodes = { resolved: me, total: N };
      }
      if (I.value) {
        const N = Pe.value.length, me = Pe.value.filter(
          (ze) => R.value.has(ze.filename) || ze.is_download_intent
        ).length;
        J.models = { resolved: me, total: N };
      }
      if (J.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const N = d.totalFiles || 1, me = d.completedFiles.length;
        J.applying = { resolved: me, total: N };
      }
      return J;
    });
    function Ie(J) {
      b.value = J;
    }
    function Te() {
      const J = D.value.findIndex((N) => N.id === b.value);
      J > 0 && (b.value = D.value[J - 1].id);
    }
    function Ue() {
      const J = D.value.findIndex((N) => N.id === b.value);
      J < D.value.length - 1 && (b.value = D.value[J + 1].id);
    }
    async function U() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (J) {
        C.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function P() {
      x.value.includes("analysis") || x.value.push("analysis"), W.value || j.value ? b.value = "nodes" : I.value ? b.value = "models" : b.value = "review";
    }
    function V(J) {
      M.value.set(J, { action: "optional" });
    }
    function Z(J) {
      M.value.set(J, { action: "skip" });
    }
    function ne(J, N) {
      var ze;
      const me = ae.value.find((et) => et.node_type === J);
      (ze = me == null ? void 0 : me.options) != null && ze[N] && M.value.set(J, {
        action: "install",
        package_id: me.options[N].package_id
      });
    }
    function fe(J, N) {
      M.value.set(J, {
        action: "install",
        package_id: N
      });
    }
    function _e(J) {
      M.value.delete(J);
    }
    function ie(J) {
      T.value.has(J) ? T.value.delete(J) : T.value.add(J);
    }
    function be(J) {
      R.value.set(J, { action: "optional" });
    }
    function ce(J) {
      R.value.set(J, { action: "skip" });
    }
    function De(J, N) {
      var ze;
      const me = re.value.find((et) => et.filename === J);
      (ze = me == null ? void 0 : me.options) != null && ze[N] && R.value.set(J, {
        action: "select",
        selected_model: me.options[N].model
      });
    }
    function Ee(J, N, me) {
      R.value.set(J, {
        action: "download",
        url: N,
        target_path: me
      });
    }
    function ue(J) {
      R.value.delete(J);
    }
    async function G(J) {
      try {
        await g(J);
      } catch (N) {
        C.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function Me() {
      var J;
      k.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const N = await r(o.workflowName, M.value, R.value, T.value);
        N.models_to_download && N.models_to_download.length > 0 && u(o.workflowName, N.models_to_download);
        const me = [
          ...N.nodes_to_install || [],
          ...se.value.map((et) => et.package.package_id)
        ];
        d.nodesToInstall = [...new Set(me)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const ze = d.installError || ((J = d.nodeInstallProgress) == null ? void 0 : J.completedNodes.some((et) => !et.success));
        !d.needsRestart && !ze && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (N) {
        C.value = N instanceof Error ? N.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function Ce() {
      a("refresh"), a("restart"), a("close");
    }
    async function $e() {
      var N;
      const J = ((N = d.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((me) => !me.success).map((me) => me.node_id)) || [];
      if (J.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: J.length
        }, d.nodesToInstall = J, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (me) {
          d.error = me instanceof Error ? me.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(U), (J, N) => (n(), L(dt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (me) => a("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (n(), i("div", qy, [...N[2] || (N[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", Yy, [
          S(sg, {
            steps: D.value,
            "current-step": b.value,
            "completed-steps": x.value,
            "step-stats": ve.value,
            onStepChange: Ie
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (n(), i("div", Jy, [
            t("div", Qy, [
              t("div", Xy, [
                N[3] || (N[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Zy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", e1, [
                t("div", t1, [
                  N[12] || (N[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", s1, [
                    ee.value > 0 ? (n(), i("div", o1, [
                      N[4] || (N[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", n1, f(ee.value), 1),
                      N[5] || (N[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", a1, [
                      N[6] || (N[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", l1, f(w.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", i1, [
                      N[8] || (N[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", r1, f(w.value.nodes.ambiguous.length), 1),
                      N[9] || (N[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", c1, [
                      N[10] || (N[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", u1, f(w.value.nodes.unresolved.length), 1),
                      N[11] || (N[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", d1, [
                  N[23] || (N[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", f1, [
                    t("div", m1, [
                      N[13] || (N[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", v1, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      N[14] || (N[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", p1, [
                      N[15] || (N[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", g1, f(w.value.stats.download_intents), 1),
                      N[16] || (N[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    A.value ? (n(), i("div", h1, [
                      N[17] || (N[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", y1, f(B.value.length), 1),
                      N[18] || (N[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", w1, [
                      N[19] || (N[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", k1, f(w.value.models.ambiguous.length), 1),
                      N[20] || (N[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", _1, [
                      N[21] || (N[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", b1, f(w.value.models.unresolved.length), 1),
                      N[22] || (N[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              O.value ? (n(), i("div", $1, [
                N[24] || (N[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", C1, f(ae.value.length + re.value.length) + " items need your input", 1)
              ])) : j.value ? (n(), i("div", x1, [
                N[25] || (N[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", S1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (n(), i("div", I1, [
                N[26] || (N[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", E1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : A.value ? (n(), i("div", T1, [
                N[27] || (N[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", R1, f(B.value.length) + " model" + f(B.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", P1, [...N[28] || (N[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              A.value ? (n(), i("div", M1, [
                N[31] || (N[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", D1, [
                  (n(!0), i(H, null, he(B.value, (me) => {
                    var ze, et;
                    return n(), i("div", {
                      key: me.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", L1, f(me.actual_category) + "/" + f((ze = me.model) == null ? void 0 : ze.filename), 1),
                      N[30] || (N[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", A1, f((et = me.expected_categories) == null ? void 0 : et[0]) + "/", 1),
                      me.file_path ? (n(), L(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Et) => G(me.file_path)
                      }, {
                        default: h(() => [...N[29] || (N[29] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "nodes" ? (n(), L($h, {
            key: 1,
            nodes: ae.value,
            "node-choices": M.value,
            "auto-resolved-packages": F.value,
            "skipped-packages": T.value,
            onMarkOptional: V,
            onSkip: Z,
            onOptionSelected: ne,
            onManualEntry: fe,
            onClearChoice: _e,
            onPackageSkip: ie
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (n(), L(gy, {
            key: 2,
            models: Pe.value,
            "model-choices": R.value,
            onMarkOptional: be,
            onSkip: ce,
            onOptionSelected: De,
            onDownloadUrl: Ee,
            onClearChoice: ue
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (n(), i("div", N1, [
            t("div", O1, [
              N[37] || (N[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", U1, [
                t("div", z1, [
                  t("span", F1, f(Ye.value), 1),
                  N[32] || (N[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", V1, [
                  t("span", B1, f(we.value), 1),
                  N[33] || (N[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", W1, [
                  t("span", G1, f(oe.value), 1),
                  N[34] || (N[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", j1, [
                  t("span", H1, f(de.value), 1),
                  N[35] || (N[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              F.value.length > 0 ? (n(), i("div", K1, [
                t("h4", q1, "Node Packages (" + f(F.value.length) + ")", 1),
                t("div", Y1, [
                  (n(!0), i(H, null, he(F.value, (me) => (n(), i("div", {
                    key: me.package_id,
                    class: "review-item"
                  }, [
                    t("code", J1, f(me.package_id), 1),
                    t("div", Q1, [
                      T.value.has(me.package_id) ? (n(), i("span", Z1, "Skipped")) : (n(), i("span", X1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ae.value.length > 0 ? (n(), i("div", e0, [
                t("h4", t0, "Node Choices (" + f(ae.value.length) + ")", 1),
                t("div", s0, [
                  (n(!0), i(H, null, he(ae.value, (me) => {
                    var ze, et, Et, at;
                    return n(), i("div", {
                      key: me.node_type,
                      class: "review-item"
                    }, [
                      t("code", o0, f(me.node_type), 1),
                      t("div", n0, [
                        M.value.has(me.node_type) ? (n(), i(H, { key: 0 }, [
                          ((ze = M.value.get(me.node_type)) == null ? void 0 : ze.action) === "install" ? (n(), i("span", a0, f((et = M.value.get(me.node_type)) == null ? void 0 : et.package_id), 1)) : ((Et = M.value.get(me.node_type)) == null ? void 0 : Et.action) === "optional" ? (n(), i("span", l0, " Optional ")) : ((at = M.value.get(me.node_type)) == null ? void 0 : at.action) === "skip" ? (n(), i("span", i0, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", r0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ve.value.length > 0 ? (n(), i("div", c0, [
                t("h4", u0, "Models to Download (" + f(Ve.value.length) + ")", 1),
                t("div", d0, [
                  (n(!0), i(H, null, he(Ve.value, (me) => (n(), i("div", {
                    key: me.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", f0, [
                      t("code", m0, f(me.filename), 1),
                      t("div", v0, [
                        t("span", p0, "→ " + f(me.target_path), 1),
                        me.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: me.url
                        }, f(Oe(me.url)), 9, g0)) : y("", !0)
                      ])
                    ]),
                    N[36] || (N[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Pe.value.length > 0 ? (n(), i("div", h0, [
                t("h4", y0, "Models (" + f(Pe.value.length) + ")", 1),
                t("div", w0, [
                  (n(!0), i(H, null, he(Pe.value, (me) => {
                    var ze, et, Et, at, pt, Ut, lt;
                    return n(), i("div", {
                      key: me.filename,
                      class: "review-item"
                    }, [
                      t("code", k0, f(me.filename), 1),
                      t("div", _0, [
                        R.value.has(me.filename) ? (n(), i(H, { key: 0 }, [
                          ((ze = R.value.get(me.filename)) == null ? void 0 : ze.action) === "select" ? (n(), i("span", b0, f((Et = (et = R.value.get(me.filename)) == null ? void 0 : et.selected_model) == null ? void 0 : Et.filename), 1)) : ((at = R.value.get(me.filename)) == null ? void 0 : at.action) === "download" ? (n(), i("span", $0, " Download ")) : ((pt = R.value.get(me.filename)) == null ? void 0 : pt.action) === "optional" ? (n(), i("span", C0, " Optional ")) : ((Ut = R.value.get(me.filename)) == null ? void 0 : Ut.action) === "skip" ? (n(), i("span", x0, " Skip ")) : ((lt = R.value.get(me.filename)) == null ? void 0 : lt.action) === "cancel_download" ? (n(), i("span", S0, " Cancel Download ")) : y("", !0)
                        ], 64)) : me.is_download_intent ? (n(), i("span", I0, " Pending Download ")) : (n(), i("span", E0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length === 0 && ae.value.length === 0 && Pe.value.length === 0 ? (n(), i("div", T0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (n(), L(Ky, {
            key: 4,
            progress: We(d),
            onRestart: Ce,
            onRetryFailed: $e
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (n(), L(Re, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: Te
        }, {
          default: h(() => [...N[38] || (N[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        N[41] || (N[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (n(), L(Re, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (me) => a("close"))
        }, {
          default: h(() => [
            $(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (n(), L(Re, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: P
        }, {
          default: h(() => [
            $(f(K.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (n(), L(Re, {
          key: 3,
          variant: "primary",
          onClick: Ue
        }, {
          default: h(() => [
            $(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (n(), L(Re, {
          key: 4,
          variant: "primary",
          onClick: Ue
        }, {
          default: h(() => [...N[39] || (N[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (n(), L(Re, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: Me
        }, {
          default: h(() => [...N[40] || (N[40] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), P0 = /* @__PURE__ */ ye(R0, [["__scopeId", "data-v-40d8d5a8"]]), M0 = { class: "search-input-wrapper" }, D0 = ["value", "placeholder"], L0 = /* @__PURE__ */ ge({
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
    return Qe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (n(), i("div", M0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Jt(u, ["escape"])
      }, null, 40, D0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), A0 = /* @__PURE__ */ ye(L0, [["__scopeId", "data-v-266f857a"]]), N0 = { class: "search-bar" }, O0 = /* @__PURE__ */ ge({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", N0, [
      S(A0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Po = /* @__PURE__ */ ye(O0, [["__scopeId", "data-v-3d51bbfd"]]), U0 = { class: "section-group" }, z0 = {
  key: 0,
  class: "section-content"
}, F0 = /* @__PURE__ */ ge({
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
    return (c, u) => (n(), i("section", U0, [
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
      !e.collapsible || l.value ? (n(), i("div", z0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ut = /* @__PURE__ */ ye(F0, [["__scopeId", "data-v-c48e33ed"]]), V0 = { class: "item-header" }, B0 = {
  key: 0,
  class: "item-icon"
}, W0 = { class: "item-info" }, G0 = {
  key: 0,
  class: "item-title"
}, j0 = {
  key: 1,
  class: "item-subtitle"
}, H0 = {
  key: 0,
  class: "item-details"
}, K0 = {
  key: 1,
  class: "item-actions"
}, q0 = /* @__PURE__ */ ge({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = z(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Se(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", V0, [
        l.$slots.icon ? (n(), i("span", B0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", W0, [
          l.$slots.title ? (n(), i("div", G0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", j0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", H0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", K0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ ye(q0, [["__scopeId", "data-v-cc435e0e"]]), Y0 = { class: "loading-state" }, J0 = { class: "loading-message" }, Q0 = /* @__PURE__ */ ge({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", Y0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", J0, f(e.message), 1)
    ]));
  }
}), Ts = /* @__PURE__ */ ye(Q0, [["__scopeId", "data-v-ad8436c9"]]), X0 = { class: "error-state" }, Z0 = { class: "error-message" }, ew = /* @__PURE__ */ ge({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", X0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Z0, f(e.message), 1),
      e.retry ? (n(), L(pe, {
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
}), Rs = /* @__PURE__ */ ye(ew, [["__scopeId", "data-v-5397be48"]]), tw = /* @__PURE__ */ ge({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = Ze(), r = _([]), c = _(!1), u = _(null), d = _(""), m = _(!0), v = _(!1), g = _(!1), w = _(!1), p = _(null), k = z(
      () => r.value.filter((F) => F.status === "broken")
    ), C = z(
      () => r.value.filter((F) => F.status === "new")
    ), b = z(
      () => r.value.filter((F) => F.status === "modified")
    ), x = z(
      () => r.value.filter((F) => F.status === "synced")
    ), M = z(() => {
      if (!d.value.trim()) return r.value;
      const F = d.value.toLowerCase();
      return r.value.filter((se) => se.name.toLowerCase().includes(F));
    }), R = z(
      () => k.value.filter(
        (F) => !d.value.trim() || F.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), T = z(
      () => C.value.filter(
        (F) => !d.value.trim() || F.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = z(
      () => b.value.filter(
        (F) => !d.value.trim() || F.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = z(
      () => x.value.filter(
        (F) => !d.value.trim() || F.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), W = z(
      () => v.value ? O.value : O.value.slice(0, 5)
    );
    async function I(F = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(F);
      } catch (se) {
        u.value = se instanceof Error ? se.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function E(F) {
      p.value = F, g.value = !0;
    }
    function j(F) {
      p.value = F, w.value = !0;
    }
    function ee() {
      a("refresh");
    }
    async function B() {
      w.value = !1, await I(!0);
    }
    async function A() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function K(F) {
      const se = [];
      return F.missing_nodes > 0 && se.push(`${F.missing_nodes} missing node${F.missing_nodes > 1 ? "s" : ""}`), F.missing_models > 0 && se.push(`${F.missing_models} missing model${F.missing_models > 1 ? "s" : ""}`), F.models_with_category_mismatch && F.models_with_category_mismatch > 0 && se.push(`${F.models_with_category_mismatch} model${F.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), F.pending_downloads && F.pending_downloads > 0 && se.push(`${F.pending_downloads} pending download${F.pending_downloads > 1 ? "s" : ""}`), se.length > 0 ? se.join(", ") : "Has issues";
    }
    function X(F) {
      const se = F.sync_state === "new" ? "New" : F.sync_state === "modified" ? "Modified" : F.sync_state === "synced" ? "Synced" : F.sync_state;
      return F.has_path_sync_issues && F.models_needing_path_sync && F.models_needing_path_sync > 0 ? `${F.models_needing_path_sync} model path${F.models_needing_path_sync > 1 ? "s" : ""} need${F.models_needing_path_sync === 1 ? "s" : ""} sync` : se || "Unknown";
    }
    return Qe(I), (F, se) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          S(Po, {
            modelValue: d.value,
            "onUpdate:modelValue": se[0] || (se[0] = (Y) => d.value = Y),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), L(Ts, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            R.value.length ? (n(), L(ut, {
              key: 0,
              title: "BROKEN",
              count: R.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(R.value, (Y) => (n(), L(Dt, {
                  key: Y.name,
                  status: "broken"
                }, {
                  icon: h(() => [...se[7] || (se[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(K(Y)), 1)
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => j(Y.name)
                    }, {
                      default: h(() => [...se[8] || (se[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(Y.name)
                    }, {
                      default: h(() => [...se[9] || (se[9] = [
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
            T.value.length ? (n(), L(ut, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(T.value, (Y) => (n(), L(Dt, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(Y.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(Y)), 1)
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(Y.name)
                    }, {
                      default: h(() => [...se[10] || (se[10] = [
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
            D.value.length ? (n(), L(ut, {
              key: 2,
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(D.value, (Y) => (n(), L(Dt, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...se[11] || (se[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(Y)), 1)
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(Y.name)
                    }, {
                      default: h(() => [...se[12] || (se[12] = [
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
            O.value.length ? (n(), L(ut, {
              key: 3,
              title: "SYNCED",
              count: O.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: se[2] || (se[2] = (Y) => m.value = Y)
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(W.value, (Y) => (n(), L(Dt, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(Y.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(Y.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(Y)), 1)
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => E(Y.name)
                    }, {
                      default: h(() => [...se[13] || (se[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && O.value.length > 5 ? (n(), L(pe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: se[1] || (se[1] = (Y) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(O.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            M.value.length ? y("", !0) : (n(), L(ls, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (n(), L(Gp, {
        key: 0,
        "workflow-name": p.value,
        onClose: se[3] || (se[3] = (Y) => g.value = !1),
        onResolve: se[4] || (se[4] = (Y) => j(p.value)),
        onRefresh: se[5] || (se[5] = (Y) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (n(), L(P0, {
        key: 1,
        "workflow-name": p.value,
        onClose: B,
        onInstall: ee,
        onRefresh: se[6] || (se[6] = (Y) => a("refresh")),
        onRestart: A
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), sw = /* @__PURE__ */ ye(tw, [["__scopeId", "data-v-fa3f076e"]]), ow = /* @__PURE__ */ ge({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Se(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), pn = /* @__PURE__ */ ye(ow, [["__scopeId", "data-v-ccb7816e"]]), nw = {
  key: 0,
  class: "model-details"
}, aw = { class: "detail-section" }, lw = { class: "detail-row" }, iw = { class: "detail-value mono" }, rw = { class: "detail-row" }, cw = { class: "detail-value mono" }, uw = { class: "detail-row" }, dw = { class: "detail-value mono" }, fw = { class: "detail-row" }, mw = { class: "detail-value" }, vw = { class: "detail-row" }, pw = { class: "detail-value" }, gw = { class: "detail-row" }, hw = { class: "detail-value" }, yw = { class: "detail-section" }, ww = { class: "section-header" }, kw = {
  key: 0,
  class: "locations-list"
}, _w = { class: "location-path mono" }, bw = {
  key: 0,
  class: "location-modified"
}, $w = ["onClick"], Cw = {
  key: 1,
  class: "empty-state"
}, xw = { class: "detail-section" }, Sw = { class: "section-header" }, Iw = {
  key: 0,
  class: "sources-list"
}, Ew = { class: "source-type" }, Tw = ["href"], Rw = ["disabled", "onClick"], Pw = {
  key: 1,
  class: "empty-state"
}, Mw = { class: "add-source-form" }, Dw = ["disabled"], Lw = {
  key: 2,
  class: "source-error"
}, Aw = {
  key: 3,
  class: "source-success"
}, Nw = /* @__PURE__ */ ge({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = Ze(), u = _(null), d = _(!0), m = _(null), v = _(""), g = _(!1), w = _(null), p = _(null), k = _(null), C = _(null);
    let b = null;
    function x(I, E = "success", j = 2e3) {
      b && clearTimeout(b), C.value = { message: I, type: E }, b = setTimeout(() => {
        C.value = null;
      }, j);
    }
    function M(I) {
      if (!I) return "Unknown";
      const E = 1024 * 1024 * 1024, j = 1024 * 1024;
      return I >= E ? `${(I / E).toFixed(1)} GB` : I >= j ? `${(I / j).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function R(I) {
      navigator.clipboard.writeText(I), x("Copied to clipboard!");
    }
    async function T(I) {
      try {
        await c(I), x("Opening file location...");
      } catch {
        x("Failed to open location", "error");
      }
    }
    async function D() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, k.value = null;
        try {
          await l(u.value.hash, v.value.trim()), k.value = "Source added successfully!", v.value = "", await W();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function O(I) {
      if (u.value) {
        w.value = I, p.value = null, k.value = null;
        try {
          await r(u.value.hash, I), x("Source removed"), await W();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function W() {
      d.value = !0, m.value = null;
      try {
        u.value = await a(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(W), (I, E) => {
      var j;
      return n(), i(H, null, [
        S(dt, {
          title: `Model Details: ${((j = u.value) == null ? void 0 : j.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: E[5] || (E[5] = (ee) => I.$emit("close"))
        }, {
          body: h(() => {
            var ee, B, A, K;
            return [
              u.value ? (n(), i("div", nw, [
                t("section", aw, [
                  t("div", lw, [
                    E[6] || (E[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", iw, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (X) => R(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", rw, [
                    E[7] || (E[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", cw, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (X) => R(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", uw, [
                    E[8] || (E[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", dw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (X) => R(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", fw, [
                    E[9] || (E[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", mw, f(M(u.value.size)), 1)
                  ]),
                  t("div", vw, [
                    E[10] || (E[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", pw, f(u.value.category), 1)
                  ]),
                  t("div", gw, [
                    E[11] || (E[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", hw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", yw, [
                  t("h4", ww, "Locations (" + f(((ee = u.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (B = u.value.locations) != null && B.length ? (n(), i("div", kw, [
                    (n(!0), i(H, null, he(u.value.locations, (X, F) => (n(), i("div", {
                      key: F,
                      class: "location-item"
                    }, [
                      t("span", _w, f(X.path), 1),
                      X.modified ? (n(), i("span", bw, "Modified: " + f(X.modified), 1)) : y("", !0),
                      X.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (se) => T(X.path)
                      }, " Open File Location ", 8, $w)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", Cw, "No locations found"))
                ]),
                t("section", xw, [
                  t("h4", Sw, "Download Sources (" + f(((A = u.value.sources) == null ? void 0 : A.length) || 0) + ")", 1),
                  (K = u.value.sources) != null && K.length ? (n(), i("div", Iw, [
                    (n(!0), i(H, null, he(u.value.sources, (X, F) => (n(), i("div", {
                      key: F,
                      class: "source-item"
                    }, [
                      t("span", Ew, f(X.type) + ":", 1),
                      t("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(X.url), 9, Tw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === X.url,
                        onClick: (se) => O(X.url)
                      }, f(w.value === X.url ? "..." : "×"), 9, Rw)
                    ]))), 128))
                  ])) : (n(), i("div", Pw, " No download sources configured ")),
                  t("div", Mw, [
                    qe(t("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (X) => v.value = X),
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
                    }, f(g.value ? "Adding..." : "Add Source"), 9, Dw)
                  ]),
                  p.value ? (n(), i("p", Lw, f(p.value), 1)) : y("", !0),
                  k.value ? (n(), i("p", Aw, f(k.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (ee) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), L(kt, { to: "body" }, [
          C.value ? (n(), i("div", {
            key: 0,
            class: Se(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), fl = /* @__PURE__ */ ye(Nw, [["__scopeId", "data-v-f15cbb56"]]), Ow = ["disabled"], Uw = { class: "dropdown-value" }, zw = ["onClick"], Fw = {
  key: 0,
  class: "dropdown-error"
}, Vw = /* @__PURE__ */ ge({
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
    function d(x) {
      return typeof x == "string" ? x : x.value;
    }
    function m(x) {
      return typeof x == "string" ? x : x.label;
    }
    const v = z(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const x = o.options.find((M) => d(M) === o.modelValue);
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
    function k() {
      if (!r.value) return;
      const x = r.value.getBoundingClientRect(), M = window.innerHeight, R = M - x.bottom, T = x.top, D = Math.min(300, o.options.length * 36 + 8), O = R < D && T > R;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...O ? { bottom: `${M - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    ft(l, async (x) => {
      x && (await ht(), k());
    });
    function C() {
      l.value && k();
    }
    function b(x) {
      x.key === "Escape" && l.value && w();
    }
    return Qe(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", b);
    }), Gs(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", b);
    }), (x, M) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Se(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", Uw, f(v.value), 1),
        M[0] || (M[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Ow),
      (n(), L(kt, { to: "body" }, [
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
          (n(!0), i(H, null, he(e.options, (R) => (n(), i("div", {
            key: d(R),
            class: Se(["dropdown-option", { selected: d(R) === e.modelValue }]),
            onClick: (T) => p(R)
          }, f(m(R)), 11, zw))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", Fw, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Bw = /* @__PURE__ */ ye(Vw, [["__scopeId", "data-v-857e085b"]]);
function Ww(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Gw(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!Ww(o.hostname)) return { kind: "unknown" };
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
function jw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Hw(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${jw(o)}`;
}
const Kw = { class: "hf-file-browser" }, qw = { class: "browser-header" }, Yw = { class: "repo-info" }, Jw = { class: "repo-id" }, Qw = {
  key: 0,
  class: "revision-pill"
}, Xw = {
  key: 0,
  class: "loading-state"
}, Zw = {
  key: 1,
  class: "error-state"
}, ek = { class: "toolbar" }, tk = { class: "toolbar-actions" }, sk = { class: "file-list-container" }, ok = {
  key: 0,
  class: "file-list-header"
}, nk = ["checked", "indeterminate"], ak = { class: "sort-indicator" }, lk = { class: "sort-indicator" }, ik = {
  key: 1,
  class: "empty-state"
}, rk = {
  key: 2,
  class: "file-list"
}, ck = ["onClick"], uk = ["checked", "onChange"], dk = { class: "file-path" }, fk = { class: "file-size" }, mk = { class: "destination-section" }, vk = { class: "destination-row" }, pk = {
  key: 0,
  class: "path-separator"
}, gk = { class: "action-bar" }, hk = { class: "summary-info" }, yk = { class: "summary-count" }, wk = { class: "summary-size" }, kk = /* @__PURE__ */ ge({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = Ze(), c = _([]), u = _(/* @__PURE__ */ new Set()), d = _(!1), m = _(null), v = _(""), g = _(!1), w = _("name"), p = _(!0), k = _(""), C = _(""), b = _(""), x = _([]), M = _(!1);
    let R = !1;
    const T = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, D = z(() => {
      let we = c.value;
      if (o.initialPath) {
        const oe = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        we = we.filter((de) => de.path.startsWith(oe) || de.path === o.initialPath);
      }
      if (g.value && (we = we.filter((oe) => oe.is_model_file)), v.value.trim()) {
        const oe = v.value.toLowerCase();
        we = we.filter((de) => de.path.toLowerCase().includes(oe));
      }
      return we;
    }), O = z(() => {
      const we = [...D.value];
      return we.sort((oe, de) => {
        let ve;
        return w.value === "name" ? ve = oe.path.localeCompare(de.path) : ve = oe.size - de.size, p.value ? ve : -ve;
      }), we;
    }), W = z(() => D.value.length === 0 ? !1 : D.value.every((we) => u.value.has(we.path))), I = z(() => D.value.some((we) => u.value.has(we.path))), E = z(() => {
      const we = x.value.map((oe) => ({
        label: oe,
        value: oe
      }));
      return we.push({ label: "Custom path...", value: "__custom__" }), we;
    }), j = z(() => k.value === "__custom__" ? b.value.trim().length > 0 : k.value.length > 0), ee = z(() => {
      let we = 0;
      for (const oe of u.value) {
        const de = c.value.find((ve) => ve.path === oe);
        de && (we += de.size);
      }
      return we;
    });
    function B(we) {
      if (we === 0) return "0 B";
      const oe = 1024 * 1024 * 1024, de = 1024 * 1024, ve = 1024;
      return we >= oe ? `${(we / oe).toFixed(2)} GB` : we >= de ? `${(we / de).toFixed(1)} MB` : we >= ve ? `${(we / ve).toFixed(0)} KB` : `${we} B`;
    }
    function A(we) {
      const oe = we.match(T);
      return oe ? `${oe[1]}${oe[4]}` : null;
    }
    function K(we) {
      const oe = new Set(u.value), de = oe.has(we.path), ve = we.shard_group || A(we.path);
      if (ve) {
        const Ie = c.value.filter((Te) => (Te.shard_group || A(Te.path)) === ve);
        de ? Ie.forEach((Te) => oe.delete(Te.path)) : Ie.forEach((Te) => oe.add(Te.path));
      } else
        de ? oe.delete(we.path) : oe.add(we.path);
      u.value = oe;
    }
    function X() {
      const we = new Set(u.value);
      for (const oe of D.value)
        oe.is_model_file && we.add(oe.path);
      u.value = we;
    }
    function F() {
      u.value = /* @__PURE__ */ new Set();
    }
    function se() {
      if (W.value) {
        const we = new Set(u.value);
        for (const oe of D.value)
          we.delete(oe.path);
        u.value = we;
      } else {
        const we = new Set(u.value);
        for (const oe of D.value)
          we.add(oe.path);
        u.value = we;
      }
    }
    function Y(we) {
      w.value === we ? p.value = !p.value : (w.value = we, p.value = !0);
    }
    function ae(we) {
      const oe = we.split("/");
      return oe.length >= 2 ? oe[oe.length - 2] : null;
    }
    function re() {
      if (M.value || u.value.size === 0) return;
      const we = /* @__PURE__ */ new Set();
      for (const ve of u.value) {
        const Ie = ae(ve);
        Ie && we.add(Ie.toLowerCase());
      }
      if (we.size !== 1) return;
      const oe = [...we][0], de = x.value.find(
        (ve) => ve.toLowerCase() === oe
      );
      de && de !== k.value && (R = !0, k.value = de, ht(() => {
        R = !1;
      }));
    }
    function Pe() {
      return k.value === "__custom__" ? b.value.trim() : C.value.trim() ? `${k.value}/${C.value.trim()}` : k.value;
    }
    function Ve() {
      if (u.value.size === 0 || !j.value) return;
      const we = Pe(), oe = [];
      for (const de of u.value) {
        const ve = c.value.find((Ie) => Ie.path === de);
        ve && oe.push({
          url: Hw(o.repoId, o.revision, ve.path),
          destination: we,
          filename: ve.path.split("/").pop() || ve.path
        });
      }
      a("queue", oe);
    }
    async function Oe() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const we = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, oe = await l(we);
          if (c.value = oe.files, o.preselectedFile) {
            const de = c.value.find((ve) => ve.path === o.preselectedFile);
            de && K(de);
          }
        } catch (we) {
          m.value = we instanceof Error ? we.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ye() {
      try {
        const we = await r();
        x.value = we.directories, we.directories.length > 0 && !k.value && (k.value = we.directories[0]);
      } catch {
        x.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], k.value || (k.value = "checkpoints");
      }
    }
    return ft(() => [o.repoId, o.revision], () => {
      o.repoId && Oe();
    }, { immediate: !1 }), ft(() => o.repoId, () => {
      M.value = !1;
    }), ft(u, () => {
      re();
    }, { deep: !0 }), ft(x, () => {
      x.value.length > 0 && u.value.size > 0 && re();
    }), ft(k, (we, oe) => {
      R || oe === "" || (M.value = !0);
    }), Qe(() => {
      Oe(), Ye();
    }), (we, oe) => (n(), i("div", Kw, [
      t("div", qw, [
        t("button", {
          class: "back-btn",
          onClick: oe[0] || (oe[0] = (de) => we.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Yw, [
          t("span", Jw, f(e.repoId), 1),
          e.revision ? (n(), i("span", Qw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (n(), i("div", Xw, " Loading repository files... ")) : m.value ? (n(), i("div", Zw, f(m.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", ek, [
          S(It, {
            modelValue: v.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (de) => v.value = de),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", tk, [
            t("button", {
              class: Se(["toggle-btn", { active: g.value }]),
              onClick: oe[2] || (oe[2] = (de) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: F
            }, "Clear")
          ])
        ]),
        t("div", sk, [
          D.value.length > 0 ? (n(), i("div", ok, [
            t("input", {
              type: "checkbox",
              checked: W.value,
              indeterminate: I.value && !W.value,
              class: "file-checkbox",
              onChange: se
            }, null, 40, nk),
            t("span", {
              class: "header-name",
              onClick: oe[3] || (oe[3] = (de) => Y("name"))
            }, [
              oe[9] || (oe[9] = $(" Name ", -1)),
              t("span", ak, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: oe[4] || (oe[4] = (de) => Y("size"))
            }, [
              oe[10] || (oe[10] = $(" Size ", -1)),
              t("span", lk, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          D.value.length === 0 ? (n(), i("div", ik, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", rk, [
            (n(!0), i(H, null, he(O.value, (de) => (n(), i("div", {
              key: de.path,
              class: Se(["file-item", { selected: u.value.has(de.path) }]),
              onClick: (ve) => K(de)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(de.path),
                class: "file-checkbox",
                onClick: oe[5] || (oe[5] = ct(() => {
                }, ["stop"])),
                onChange: (ve) => K(de)
              }, null, 40, uk),
              t("span", dk, f(de.path), 1),
              t("span", fk, f(B(de.size)), 1)
            ], 10, ck))), 128))
          ]))
        ]),
        t("div", mk, [
          oe[11] || (oe[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", vk, [
            S(Bw, {
              modelValue: k.value,
              "onUpdate:modelValue": oe[6] || (oe[6] = (de) => k.value = de),
              options: E.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            k.value !== "__custom__" ? (n(), i("span", pk, "/")) : y("", !0),
            k.value !== "__custom__" ? (n(), L(It, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": oe[7] || (oe[7] = (de) => C.value = de),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          k.value === "__custom__" ? (n(), L(It, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": oe[8] || (oe[8] = (de) => b.value = de),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", gk, [
          t("div", hk, [
            t("span", yk, f(u.value.size) + " file(s) selected", 1),
            t("span", wk, f(B(ee.value)), 1)
          ]),
          S(Re, {
            variant: "primary",
            disabled: u.value.size === 0 || !j.value,
            onClick: Ve
          }, {
            default: h(() => [...oe[12] || (oe[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), _k = /* @__PURE__ */ ye(kk, [["__scopeId", "data-v-183acebc"]]), bk = { class: "token-config-modal" }, $k = { class: "provider-info" }, Ck = { class: "provider-icon" }, xk = { class: "provider-name" }, Sk = {
  key: 0,
  class: "current-token"
}, Ik = { class: "mask" }, Ek = { class: "token-input-section" }, Tk = { class: "input-label" }, Rk = { class: "help-text" }, Pk = ["href"], Mk = { class: "modal-actions" }, Dk = /* @__PURE__ */ ge({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = Ze(), r = _(""), c = _(!1), u = _(!1), d = z(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), m = z(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = z(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), g = z(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = z(
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
    async function k() {
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
    return (C, b) => (n(), L(dt, {
      title: "Configure API Token",
      onClose: b[2] || (b[2] = (x) => C.$emit("close"))
    }, {
      body: h(() => [
        t("div", bk, [
          t("div", $k, [
            t("span", Ck, f(m.value), 1),
            t("span", xk, f(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", Sk, [
            b[4] || (b[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", Ik, f(e.currentTokenMask), 1),
            S(Re, {
              variant: "danger",
              size: "sm",
              onClick: k,
              loading: u.value
            }, {
              default: h(() => [...b[3] || (b[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", Ek, [
            t("label", Tk, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            S(It, {
              modelValue: r.value,
              "onUpdate:modelValue": b[0] || (b[0] = (x) => r.value = x),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", Rk, [
              t("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, Pk)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        t("div", Mk, [
          S(Re, {
            variant: "secondary",
            onClick: b[1] || (b[1] = (x) => C.$emit("close"))
          }, {
            default: h(() => [...b[5] || (b[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(Re, {
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
}), Lk = /* @__PURE__ */ ye(Dk, [["__scopeId", "data-v-0687d0ce"]]), Ak = { class: "huggingface-tab" }, Nk = {
  key: 0,
  class: "search-section"
}, Ok = { class: "search-header" }, Uk = { class: "search-bar" }, zk = {
  key: 1,
  class: "search-results"
}, Fk = {
  key: 0,
  class: "loading-state"
}, Vk = {
  key: 1,
  class: "error-state"
}, Bk = {
  key: 2,
  class: "results-list"
}, Wk = ["onClick"], Gk = { class: "repo-header" }, jk = { class: "repo-id" }, Hk = { class: "repo-stats" }, Kk = {
  class: "stat",
  title: "Downloads"
}, qk = {
  class: "stat",
  title: "Likes"
}, Yk = {
  key: 0,
  class: "repo-desc"
}, Jk = {
  key: 1,
  class: "repo-tags"
}, Qk = {
  key: 3,
  class: "empty-state"
}, Xk = {
  key: 4,
  class: "hint-state"
}, Zk = /* @__PURE__ */ ge({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = Ze(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), m = _(null), v = _("main"), g = _(), w = _(), p = _(!1), k = _(null), C = z(() => {
      if (!u.value) return !1;
      const W = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || W.includes("authentication") || W.includes("unauthorized");
    });
    function b(W) {
      return W >= 1e6 ? `${(W / 1e6).toFixed(1)}M` : W >= 1e3 ? `${(W / 1e3).toFixed(1)}K` : String(W);
    }
    async function x() {
      const W = l.value.trim();
      if (!W) return;
      u.value = null;
      const I = Gw(W);
      if (I.kind === "file" && I.repoId && I.path) {
        m.value = I.repoId, v.value = I.revision || "main";
        const E = I.path.split("/");
        E.length > 1 ? g.value = E.slice(0, -1).join("/") : g.value = void 0, w.value = I.path, a.value = "browse";
        return;
      }
      if (I.kind === "repo" && I.repoId) {
        m.value = I.repoId, v.value = I.revision || "main", g.value = I.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(W) && !W.includes("://")) {
        m.value = W, v.value = "main", g.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const E = await s(W);
        r.value = E.results, d.value = !0;
      } catch (E) {
        u.value = E instanceof Error ? E.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function M(W) {
      m.value = W, v.value = "main", g.value = void 0, w.value = void 0, a.value = "browse";
    }
    function R() {
      a.value = "search", m.value = null, g.value = void 0, w.value = void 0;
    }
    async function T() {
      try {
        const W = await o();
        k.value = W.huggingface_token || null;
      } catch (W) {
        console.error("Failed to load config:", W);
      }
    }
    function D() {
      T(), C.value && l.value && x();
    }
    function O() {
      k.value = null;
    }
    return Qe(T), (W, I) => (n(), i("div", Ak, [
      a.value === "search" ? (n(), i("div", Nk, [
        t("div", Ok, [
          t("div", Uk, [
            S(It, {
              modelValue: l.value,
              "onUpdate:modelValue": I[0] || (I[0] = (E) => l.value = E),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Jt(x, ["enter"])
            }, null, 8, ["modelValue"]),
            S(Re, {
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
          S(Re, {
            variant: "secondary",
            size: "sm",
            onClick: I[1] || (I[1] = (E) => p.value = !0)
          }, {
            default: h(() => [
              $(f(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", zk, [
        c.value ? (n(), i("div", Fk, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Vk, [
          t("p", null, f(u.value), 1),
          C.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: I[2] || (I[2] = (E) => p.value = !0)
          }, {
            default: h(() => [...I[6] || (I[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", Bk, [
          (n(!0), i(H, null, he(r.value, (E) => (n(), i("div", {
            key: E.repo_id,
            class: "repo-card",
            onClick: (j) => M(E.repo_id)
          }, [
            t("div", Gk, [
              t("span", jk, f(E.repo_id), 1),
              t("div", Hk, [
                t("span", Kk, [
                  I[7] || (I[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(b(E.downloads)), 1)
                ]),
                t("span", qk, [
                  I[8] || (I[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(b(E.likes)), 1)
                ])
              ])
            ]),
            E.description ? (n(), i("p", Yk, f(E.description), 1)) : y("", !0),
            E.tags.length > 0 ? (n(), i("div", Jk, [
              (n(!0), i(H, null, he(E.tags.slice(0, 5), (j) => (n(), i("span", {
                key: j,
                class: "tag"
              }, f(j), 1))), 128))
            ])) : y("", !0)
          ], 8, Wk))), 128))
        ])) : d.value ? (n(), i("div", Qk, " No repositories found ")) : (n(), i("div", Xk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(_k, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": w.value,
        onBack: R,
        onQueue: I[3] || (I[3] = (E) => W.$emit("queue", E))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (n(), L(Lk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        onClose: I[4] || (I[4] = (E) => p.value = !1),
        onSaved: D,
        onCleared: O
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), e_ = /* @__PURE__ */ ye(Zk, [["__scopeId", "data-v-e13209bf"]]), t_ = { class: "civitai-tab" }, s_ = /* @__PURE__ */ ge({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", t_, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), o_ = /* @__PURE__ */ ye(s_, [["__scopeId", "data-v-44948051"]]), n_ = { class: "direct-url-tab" }, a_ = { class: "input-group" }, l_ = { class: "input-group" }, i_ = {
  key: 0,
  class: "error"
}, r_ = { class: "actions" }, c_ = /* @__PURE__ */ ge({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = _(""), r = z(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = z(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), a.value = "", l.value = "";
    };
    return (d, m) => (n(), i("div", n_, [
      t("div", a_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        S(It, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", l_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(It, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", i_, f(r.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", r_, [
        S(Re, {
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
}), u_ = /* @__PURE__ */ ye(c_, [["__scopeId", "data-v-01def7aa"]]), d_ = { class: "download-modal" }, f_ = { class: "tab-bar" }, m_ = ["onClick"], v_ = { class: "tab-content" }, p_ = /* @__PURE__ */ ge({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Ro(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = _("huggingface");
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
    return (m, v) => e.show ? (n(), L(dt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", d_, [
          t("div", f_, [
            (n(), i(H, null, he(l, (g) => t("button", {
              key: g.id,
              class: Se(["tab-btn", { active: r.value === g.id }]),
              onClick: (w) => r.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, m_)), 64))
          ]),
          t("div", v_, [
            r.value === "huggingface" ? (n(), L(e_, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), L(o_, { key: 1 })) : r.value === "direct" ? (n(), L(u_, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        S(Re, {
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
}), zr = /* @__PURE__ */ ye(p_, [["__scopeId", "data-v-90a9f401"]]), g_ = /* @__PURE__ */ ge({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = Ze(), r = _([]), c = _([]), u = _("production"), d = _(!1), m = _(null), v = _(""), g = _(!1), w = _(null), p = _(!1);
    function k() {
      g.value = !1, o("navigate", "model-index");
    }
    const C = z(
      () => r.value.reduce((I, E) => I + (E.size || 0), 0)
    ), b = z(() => {
      if (!v.value.trim()) return r.value;
      const I = v.value.toLowerCase();
      return r.value.filter((E) => E.filename.toLowerCase().includes(I));
    }), x = z(() => {
      if (!v.value.trim()) return c.value;
      const I = v.value.toLowerCase();
      return c.value.filter((E) => E.filename.toLowerCase().includes(I));
    }), M = z(() => {
      const I = {};
      for (const j of b.value) {
        const ee = j.type || "other";
        I[ee] || (I[ee] = []), I[ee].push(j);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(I).sort(([j], [ee]) => {
        const B = E.indexOf(j), A = E.indexOf(ee);
        return B >= 0 && A >= 0 ? B - A : B >= 0 ? -1 : A >= 0 ? 1 : j.localeCompare(ee);
      }).map(([j, ee]) => ({ type: j, models: ee }));
    });
    function R(I) {
      if (!I) return "Unknown";
      const E = I / (1024 * 1024);
      return E >= 1024 ? `${(E / 1024).toFixed(1)} GB` : `${E.toFixed(0)} MB`;
    }
    function T(I) {
      w.value = I.hash || I.filename;
    }
    function D(I) {
      o("navigate", "model-index");
    }
    function O(I) {
      alert(`Download functionality not yet implemented for ${I}`);
    }
    async function W() {
      d.value = !0, m.value = null;
      try {
        const I = await a();
        r.value = I, c.value = [];
        const E = await l();
        u.value = E.environment || "production";
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(W), (I, E) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (j) => g.value = !0)
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (j) => p.value = !0)
              }, {
                default: h(() => [...E[6] || (E[6] = [
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
          S(Po, {
            modelValue: v.value,
            "onUpdate:modelValue": E[2] || (E[2] = (j) => v.value = j),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), L(Ts, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (n(), L(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length ? (n(), L(pn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(r.value.length) + " models • " + f(R(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, he(M.value, (j) => (n(), L(ut, {
              key: j.type,
              title: j.type.toUpperCase(),
              count: j.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(j.models, (ee) => (n(), L(Dt, {
                  key: ee.hash || ee.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...E[7] || (E[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(R(ee.size)), 1)
                  ]),
                  details: h(() => [
                    S(vt, {
                      label: "Used by:",
                      value: (ee.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(vt, {
                      label: "Path:",
                      value: ee.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => T(ee)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
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
            x.value.length ? (n(), L(ut, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(x.value, (j) => (n(), L(Dt, {
                  key: j.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...E[9] || (E[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(j.filename), 1)
                  ]),
                  subtitle: h(() => [...E[10] || (E[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ee;
                    return [
                      S(vt, {
                        label: "Required by:",
                        value: ((ee = j.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => O(j.filename)
                    }, {
                      default: h(() => [...E[11] || (E[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => D(j.filename)
                    }, {
                      default: h(() => [...E[12] || (E[12] = [
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
            !b.value.length && !x.value.length ? (n(), L(ls, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(is, {
        show: g.value,
        title: "About Environment Models",
        onClose: E[3] || (E[3] = (j) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            E[13] || (E[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            E[14] || (E[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          S(pe, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...E[15] || (E[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(fl, {
        key: 0,
        identifier: w.value,
        onClose: E[4] || (E[4] = (j) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      S(zr, {
        show: p.value,
        onClose: E[5] || (E[5] = (j) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), h_ = /* @__PURE__ */ ye(g_, [["__scopeId", "data-v-af3ca736"]]), y_ = {
  key: 0,
  class: "indexing-progress"
}, w_ = { class: "progress-info" }, k_ = { class: "progress-label" }, __ = { class: "progress-count" }, b_ = { class: "progress-bar" }, $_ = { class: "modal-content" }, C_ = { class: "modal-header" }, x_ = { class: "modal-body" }, S_ = { class: "input-group" }, I_ = { class: "current-path" }, E_ = { class: "input-group" }, T_ = { class: "modal-footer" }, R_ = /* @__PURE__ */ ge({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = Ze(), c = s, u = _([]), d = _(!1), m = _(!1), v = _(null), g = _(""), w = _(!1), p = _(null), k = _(!1), C = _(null), b = _(""), x = _(!1), M = _(!1), R = _(null), T = z(
      () => u.value.reduce((A, K) => A + (K.size || 0), 0)
    ), D = z(() => {
      if (!g.value.trim()) return u.value;
      const A = g.value.toLowerCase();
      return u.value.filter((K) => {
        const X = K, F = K.sha256 || X.sha256_hash || "";
        return K.filename.toLowerCase().includes(A) || F.toLowerCase().includes(A);
      });
    }), O = z(() => {
      const A = {};
      for (const X of D.value) {
        const F = X.type || "other";
        A[F] || (A[F] = []), A[F].push(X);
      }
      const K = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([X], [F]) => {
        const se = K.indexOf(X), Y = K.indexOf(F);
        return se >= 0 && Y >= 0 ? se - Y : se >= 0 ? -1 : Y >= 0 ? 1 : X.localeCompare(F);
      }).map(([X, F]) => ({ type: X, models: F }));
    });
    function W(A) {
      if (!A) return "Unknown";
      const K = 1024 * 1024 * 1024, X = 1024 * 1024;
      return A >= K ? `${(A / K).toFixed(1)} GB` : A >= X ? `${(A / X).toFixed(0)} MB` : `${(A / 1024).toFixed(0)} KB`;
    }
    function I(A) {
      p.value = A.hash || A.filename;
    }
    async function E() {
      m.value = !0, v.value = null;
      try {
        const A = await a();
        await ee(), A.changes > 0 && console.log(`Scan complete: ${A.changes} changes detected`);
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function j() {
      if (b.value.trim()) {
        x.value = !0, v.value = null;
        try {
          const A = await r(b.value.trim());
          C.value = A.path, k.value = !1, b.value = "", await ee(), console.log(`Directory changed: ${A.models_indexed} models indexed`), c("refresh");
        } catch (A) {
          v.value = A instanceof Error ? A.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function ee() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function B() {
      try {
        const A = await l();
        C.value = A.path;
      } catch {
      }
    }
    return Qe(() => {
      ee(), B();
    }), (A, K) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: K[2] || (K[2] = (X) => w.value = !0)
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: E
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: K[0] || (K[0] = (X) => k.value = !0)
              }, {
                default: h(() => [...K[11] || (K[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: K[1] || (K[1] = (X) => M.value = !0)
              }, {
                default: h(() => [...K[12] || (K[12] = [
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
          R.value ? (n(), i("div", y_, [
            t("div", w_, [
              t("span", k_, f(R.value.message), 1),
              t("span", __, f(R.value.current) + "/" + f(R.value.total), 1)
            ]),
            t("div", b_, [
              t("div", {
                class: "progress-fill",
                style: Gt({ width: `${R.value.current / R.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          S(Po, {
            modelValue: g.value,
            "onUpdate:modelValue": K[3] || (K[3] = (X) => g.value = X),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || R.value ? (n(), L(Ts, {
            key: 0,
            message: R.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), L(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            u.value.length ? (n(), L(pn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(W(T.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, he(O.value, (X) => (n(), L(ut, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(X.models, (F) => (n(), L(Dt, {
                  key: F.sha256 || F.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...K[13] || (K[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(F.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(W(F.size)), 1)
                  ]),
                  details: h(() => [
                    S(vt, {
                      label: "Hash:",
                      value: F.hash ? F.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => I(F)
                    }, {
                      default: h(() => [...K[14] || (K[14] = [
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
            D.value.length ? y("", !0) : (n(), L(ls, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S(is, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: K[4] || (K[4] = (X) => w.value = !1)
      }, {
        content: h(() => [...K[15] || (K[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), L(fl, {
        key: 0,
        identifier: p.value,
        onClose: K[5] || (K[5] = (X) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), L(kt, { to: "body" }, [
        k.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: K[9] || (K[9] = ct((X) => k.value = !1, ["self"]))
        }, [
          t("div", $_, [
            t("div", C_, [
              K[16] || (K[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: K[6] || (K[6] = (X) => k.value = !1)
              }, "✕")
            ]),
            t("div", x_, [
              t("div", S_, [
                K[17] || (K[17] = t("label", null, "Current Directory", -1)),
                t("code", I_, f(C.value || "Not set"), 1)
              ]),
              t("div", E_, [
                K[18] || (K[18] = t("label", null, "New Directory Path", -1)),
                S(It, {
                  modelValue: b.value,
                  "onUpdate:modelValue": K[7] || (K[7] = (X) => b.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              K[19] || (K[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", T_, [
              S(Re, {
                variant: "secondary",
                onClick: K[8] || (K[8] = (X) => k.value = !1)
              }, {
                default: h(() => [...K[20] || (K[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(Re, {
                variant: "primary",
                disabled: !b.value.trim() || x.value,
                loading: x.value,
                onClick: j
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
        show: M.value,
        onClose: K[10] || (K[10] = (X) => M.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), P_ = /* @__PURE__ */ ye(R_, [["__scopeId", "data-v-3705114c"]]), M_ = { class: "node-details" }, D_ = { class: "status-row" }, L_ = {
  key: 0,
  class: "detail-row"
}, A_ = { class: "value" }, N_ = { class: "detail-row" }, O_ = { class: "value" }, U_ = {
  key: 1,
  class: "detail-row"
}, z_ = { class: "value mono" }, F_ = {
  key: 2,
  class: "detail-row"
}, V_ = ["href"], B_ = {
  key: 3,
  class: "detail-row"
}, W_ = { class: "value mono small" }, G_ = { class: "detail-row" }, j_ = {
  key: 0,
  class: "value"
}, H_ = {
  key: 1,
  class: "workflow-list"
}, K_ = /* @__PURE__ */ ge({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = z(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = z(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = z(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), L(dt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => a("close"))
    }, {
      body: h(() => [
        t("div", M_, [
          t("div", D_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", L_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", A_, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", N_, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", O_, f(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", U_, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", z_, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", F_, [
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
            ], 8, V_)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", B_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", W_, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", G_, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", j_, " Not used in any workflows ")) : (n(), i("div", H_, [
              (n(!0), i(H, null, he(e.node.used_in_workflows, (m) => (n(), i("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        S(Re, {
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
}), q_ = /* @__PURE__ */ ye(K_, [["__scopeId", "data-v-b342f626"]]), Y_ = { class: "dialog-message" }, J_ = {
  key: 0,
  class: "dialog-details"
}, Q_ = {
  key: 1,
  class: "dialog-warning"
}, X_ = /* @__PURE__ */ ge({
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
    return (s, o) => (n(), L(dt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", Y_, f(e.message), 1),
        e.details && e.details.length ? (n(), i("div", J_, [
          (n(!0), i(H, null, he(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", Q_, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), L(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        S(Re, {
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
}), ml = /* @__PURE__ */ ye(X_, [["__scopeId", "data-v-3670b9f5"]]), Z_ = { class: "mismatch-warning" }, eb = { class: "version-mismatch" }, tb = { class: "version-actual" }, sb = { class: "version-expected" }, ob = { key: 0 }, nb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, ab = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, lb = /* @__PURE__ */ ge({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u } = Ze(), d = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = _(!1), v = _(null), g = _(""), w = _(!1), p = _(null), k = _(null), C = z(() => {
      if (!g.value.trim()) return d.value.nodes;
      const B = g.value.toLowerCase();
      return d.value.nodes.filter(
        (A) => {
          var K, X;
          return A.name.toLowerCase().includes(B) || ((K = A.description) == null ? void 0 : K.toLowerCase().includes(B)) || ((X = A.repository) == null ? void 0 : X.toLowerCase().includes(B));
        }
      );
    }), b = z(
      () => C.value.filter((B) => B.installed && B.tracked)
    ), x = z(
      () => C.value.filter((B) => !B.installed && B.tracked)
    ), M = z(
      () => C.value.filter((B) => B.installed && !B.tracked)
    );
    function R(B) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[B] || B;
    }
    const T = z(() => o.versionMismatches.length > 0);
    function D(B) {
      return !B.used_in_workflows || B.used_in_workflows.length === 0 ? "Not used in any workflows" : B.used_in_workflows.length === 1 ? B.used_in_workflows[0] : `${B.used_in_workflows.length} workflows`;
    }
    function O(B) {
      p.value = B;
    }
    function W() {
      a("open-node-manager");
    }
    function I(B) {
      k.value = {
        title: "Track as Development Node",
        message: `Track "${B}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const A = await r(B);
            A.status === "success" ? (a("toast", `✓ Node "${B}" tracked as development`, "success"), await ee()) : a("toast", `Failed to track node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            a("toast", `Error tracking node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function E(B) {
      k.value = {
        title: "Remove Untracked Node",
        message: `Remove "${B}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const A = await u(B);
            A.status === "success" ? (a("toast", `✓ Node "${B}" removed`, "success"), await ee()) : a("toast", `Failed to remove node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            a("toast", `Error removing node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function j(B) {
      k.value = {
        title: "Install Missing Node",
        message: `Install "${B}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const A = await c(B);
            A.status === "success" ? (a("toast", `✓ Node "${B}" installed`, "success"), await ee()) : a("toast", `Failed to install node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            a("toast", `Error installing node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ee() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Qe(ee), (B, A) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: A[0] || (A[0] = (K) => w.value = !0)
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: W
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
          S(Po, {
            modelValue: g.value,
            "onUpdate:modelValue": A[1] || (A[1] = (K) => g.value = K),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (n(), L(Ts, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (n(), L(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            d.value.total_count ? (n(), L(pn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (n(), i(H, { key: 0 }, [
                  $(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (n(), i(H, { key: 1 }, [
                  $(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value ? (n(), L(ut, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Z_, [
                  A[8] || (A[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(H, null, he(e.versionMismatches, (K) => (n(), L(Dt, {
                  key: K.name,
                  status: "warning"
                }, {
                  icon: h(() => [...A[9] || (A[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(K.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", eb, [
                      t("span", tb, f(K.actual), 1),
                      A[10] || (A[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", sb, f(K.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "warning",
                      size: "sm",
                      onClick: A[2] || (A[2] = (X) => a("repair-environment"))
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
            M.value.length ? (n(), L(ut, {
              key: 2,
              title: "UNTRACKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(M.value, (K) => (n(), L(Dt, {
                  key: K.name,
                  status: "warning"
                }, {
                  icon: h(() => [...A[12] || (A[12] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(K.name), 1)
                  ]),
                  subtitle: h(() => [...A[13] || (A[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    S(vt, {
                      label: "Used by:",
                      value: D(K)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => O(K)
                    }, {
                      default: h(() => [...A[14] || (A[14] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => I(K.name)
                    }, {
                      default: h(() => [...A[15] || (A[15] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => E(K.name)
                    }, {
                      default: h(() => [...A[16] || (A[16] = [
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
            b.value.length ? (n(), L(ut, {
              key: 3,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(b.value, (K) => (n(), L(Dt, {
                  key: K.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(K.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(K.name), 1)
                  ]),
                  subtitle: h(() => [
                    K.version ? (n(), i("span", ob, f(K.source === "development" ? "" : "v") + f(K.version), 1)) : (n(), i("span", nb, "version unknown")),
                    t("span", ab, " • " + f(R(K.source)), 1)
                  ]),
                  details: h(() => [
                    S(vt, {
                      label: "Used by:",
                      value: D(K)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => O(K)
                    }, {
                      default: h(() => [...A[17] || (A[17] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: W
                    }, {
                      default: h(() => [...A[18] || (A[18] = [
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
            x.value.length ? (n(), L(ut, {
              key: 4,
              title: "MISSING",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(x.value, (K) => (n(), L(Dt, {
                  key: K.name,
                  status: "missing"
                }, {
                  icon: h(() => [...A[19] || (A[19] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(K.name), 1)
                  ]),
                  subtitle: h(() => [...A[20] || (A[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    S(vt, {
                      label: "Required by:",
                      value: D(K)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => O(K)
                    }, {
                      default: h(() => [...A[21] || (A[21] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => j(K.name)
                    }, {
                      default: h(() => [...A[22] || (A[22] = [
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
            !b.value.length && !x.value.length && !M.value.length ? (n(), L(ls, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(is, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: A[4] || (A[4] = (K) => w.value = !1)
      }, {
        content: h(() => [...A[23] || (A[23] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          S(pe, {
            variant: "primary",
            onClick: A[3] || (A[3] = (K) => w.value = !1)
          }, {
            default: h(() => [...A[24] || (A[24] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), L(q_, {
        key: 0,
        node: p.value,
        onClose: A[5] || (A[5] = (K) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      k.value ? (n(), L(ml, {
        key: 1,
        title: k.value.title,
        message: k.value.message,
        warning: k.value.warning,
        "confirm-label": k.value.confirmLabel,
        destructive: k.value.destructive,
        onConfirm: k.value.onConfirm,
        onCancel: A[6] || (A[6] = (K) => k.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), ib = /* @__PURE__ */ ye(lb, [["__scopeId", "data-v-1555a802"]]);
function Fr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const rb = { class: "remote-url-display" }, cb = ["title"], ub = ["title"], db = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, fb = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, mb = /* @__PURE__ */ ge({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = _(!1), a = z(() => {
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
    return (r, c) => (n(), i("div", rb, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(a.value), 9, cb),
      t("button", {
        class: Se(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", fb, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", db, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, ub)
    ]));
  }
}), vb = /* @__PURE__ */ ye(mb, [["__scopeId", "data-v-7768a58d"]]), pb = { class: "remote-title" }, gb = {
  key: 0,
  class: "default-badge"
}, hb = {
  key: 1,
  class: "sync-badge"
}, yb = {
  key: 0,
  class: "ahead"
}, wb = {
  key: 1,
  class: "behind"
}, kb = {
  key: 1,
  class: "synced"
}, _b = ["href"], bb = {
  key: 1,
  class: "remote-url-text"
}, $b = /* @__PURE__ */ ge({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = z(() => s.fetchingRemote === s.remote.name), a = z(() => s.remote.is_default), l = z(() => s.syncStatus && s.syncStatus.behind > 0), r = z(() => s.syncStatus && s.syncStatus.ahead > 0), c = z(() => s.remote.push_url !== s.remote.fetch_url), u = z(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = z(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (n(), L(Dt, {
      status: a.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        $(f(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", pb, [
          t("span", null, f(e.remote.name), 1),
          a.value ? (n(), i("span", gb, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", hb, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", yb, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", wb, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", kb, "✓ synced"))
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
          onClick: v[0] || (v[0] = ct(() => {
          }, ["stop"]))
        }, f(d.value), 9, _b)) : (n(), i("span", bb, f(d.value), 1))
      ]),
      actions: h(() => [
        S(pe, {
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
        S(pe, {
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
        S(pe, {
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
        S(pe, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), L(pe, {
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), L(vt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              S(vb, {
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
}), Cb = /* @__PURE__ */ ye($b, [["__scopeId", "data-v-8310f3a8"]]), xb = ["for"], Sb = {
  key: 0,
  class: "base-form-field-required"
}, Ib = { class: "base-form-field-input" }, Eb = {
  key: 1,
  class: "base-form-field-error"
}, Tb = {
  key: 2,
  class: "base-form-field-hint"
}, Rb = /* @__PURE__ */ ge({
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
    const s = e, o = z(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Se(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (n(), i("span", Sb, "*")) : y("", !0)
      ], 8, xb)) : y("", !0),
      t("div", Ib, [
        Ke(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", Eb, f(e.error), 1)) : e.hint ? (n(), i("span", Tb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ca = /* @__PURE__ */ ye(Rb, [["__scopeId", "data-v-9a1cf296"]]), Pb = { class: "remote-form" }, Mb = { class: "form-header" }, Db = { class: "form-body" }, Lb = {
  key: 0,
  class: "form-error"
}, Ab = { class: "form-actions" }, Nb = /* @__PURE__ */ ge({
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
    ft(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = z(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (m, v) => (n(), i("div", Pb, [
      t("div", Mb, [
        S(Vt, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Db, [
        S(Ca, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            S(It, {
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
            S(It, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(Ca, { label: "Push URL (optional)" }, {
          default: h(() => [
            S(It, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", Lb, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Ab, [
        S(pe, {
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
        S(pe, {
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
}), Ob = /* @__PURE__ */ ye(Nb, [["__scopeId", "data-v-56021b18"]]), Ub = { class: "conflict-summary-box" }, zb = { class: "summary-header" }, Fb = { class: "summary-text" }, Vb = { key: 0 }, Bb = {
  key: 1,
  class: "all-resolved"
}, Wb = { class: "summary-progress" }, Gb = { class: "progress-bar" }, jb = { class: "progress-text" }, Hb = /* @__PURE__ */ ge({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = z(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", Ub, [
      t("div", zb, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", Fb, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", Vb, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (n(), i("p", Bb, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", Wb, [
        t("div", Gb, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", jb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Kb = /* @__PURE__ */ ye(Hb, [["__scopeId", "data-v-4e9e6cc9"]]), qb = { class: "modal-header" }, Yb = { class: "modal-title" }, Jb = { class: "modal-body" }, Qb = {
  key: 0,
  class: "error-box"
}, Xb = {
  key: 0,
  class: "error-hint"
}, Zb = {
  key: 1,
  class: "loading-state"
}, e2 = { class: "commit-summary" }, t2 = {
  key: 0,
  class: "commits-section"
}, s2 = { class: "commit-list" }, o2 = { class: "commit-hash" }, n2 = { class: "commit-message" }, a2 = { class: "commit-date" }, l2 = {
  key: 1,
  class: "changes-section"
}, i2 = {
  key: 0,
  class: "change-group",
  open: ""
}, r2 = { class: "change-count" }, c2 = { class: "change-list" }, u2 = {
  key: 0,
  class: "conflict-badge"
}, d2 = {
  key: 1,
  class: "change-group"
}, f2 = { class: "change-count" }, m2 = { class: "change-list" }, v2 = {
  key: 2,
  class: "change-group"
}, p2 = { class: "change-count" }, g2 = { class: "change-list" }, h2 = {
  key: 3,
  class: "strategy-section"
}, y2 = { class: "radio-group" }, w2 = { class: "radio-option" }, k2 = { class: "radio-option" }, _2 = { class: "radio-option" }, b2 = {
  key: 4,
  class: "up-to-date"
}, $2 = { class: "modal-actions" }, ii = "comfygit.pullModelStrategy", C2 = /* @__PURE__ */ ge({
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
    ft(l, (b) => {
      localStorage.setItem(ii, b);
    });
    const r = z(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = z(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = z(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = z(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = z(() => o.preview && Fr(o.preview) ? o.preview : null), v = z(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = z(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = z(
      () => v.value > 0 && g.value === v.value
    ), p = z(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function k(b) {
      if (!m.value) return !1;
      const x = b.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((M) => M.name === x);
    }
    function C(b) {
      const x = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: b, resolutions: x });
    }
    return (b, x) => {
      var M, R;
      return n(), L(kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (T) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = ct(() => {
            }, ["stop"]))
          }, [
            t("div", qb, [
              t("h3", Yb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (T) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", Jb, [
              e.error ? (n(), i("div", Qb, [
                x[13] || (x[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  x[12] || (x[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  r.value ? (n(), i("p", Xb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", Zb, [...x[14] || (x[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (M = e.preview) != null && M.has_uncommitted_changes ? (n(), i(H, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", e2, [
                  x[17] || (x[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", t2, [
                  x[18] || (x[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", s2, [
                    (n(!0), i(H, null, he(e.preview.commits, (T) => (n(), i("div", {
                      key: T.hash,
                      class: "commit-item"
                    }, [
                      t("span", o2, f(T.short_hash || T.hash.slice(0, 7)), 1),
                      t("span", n2, f(T.message), 1),
                      t("span", a2, f(T.date_relative || T.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", l2, [
                  x[22] || (x[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", i2, [
                    t("summary", null, [
                      x[19] || (x[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", r2, f(c.value) + " changes", 1)
                    ]),
                    t("div", c2, [
                      (n(!0), i(H, null, he(e.preview.changes.workflows.added, (T) => (n(), i("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128)),
                      (n(!0), i(H, null, he(e.preview.changes.workflows.modified, (T) => (n(), i("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(T) + " ", 1),
                        k(T) ? (n(), i("span", u2, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, he(e.preview.changes.workflows.deleted, (T) => (n(), i("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + f(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", d2, [
                    t("summary", null, [
                      x[20] || (x[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", f2, f(u.value) + " to install", 1)
                    ]),
                    t("div", m2, [
                      (n(!0), i(H, null, he(e.preview.changes.nodes.to_install, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", v2, [
                    t("summary", null, [
                      x[21] || (x[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", p2, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", g2, [
                      (n(!0), i(H, null, he(e.preview.changes.models.referenced, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item"
                      }, f(T), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (n(), L(Kb, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", h2, [
                  x[27] || (x[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", y2, [
                    t("label", w2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (T) => l.value = T),
                        value: "all"
                      }, null, 512), [
                        [ts, l.value]
                      ]),
                      x[23] || (x[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", k2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (T) => l.value = T),
                        value: "required"
                      }, null, 512), [
                        [ts, l.value]
                      ]),
                      x[24] || (x[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", _2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (T) => l.value = T),
                        value: "skip"
                      }, null, 512), [
                        [ts, l.value]
                      ]),
                      x[25] || (x[25] = t("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", b2, [
                  x[29] || (x[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", $2, [
              S(pe, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (T) => b.$emit("close"))
              }, {
                default: h(() => [...x[30] || (x[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(H, { key: 0 }, [
                S(pe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (T) => C(!1))
                }, {
                  default: h(() => [...x[31] || (x[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(pe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (T) => C(!0))
                }, {
                  default: h(() => [...x[32] || (x[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (R = e.preview) != null && R.has_uncommitted_changes ? (n(), L(pe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: x[7] || (x[7] = (T) => C(!0))
              }, {
                default: h(() => [...x[33] || (x[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(H, { key: 2 }, [
                m.value && !w.value ? (n(), L(pe, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (T) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(pe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: x[9] || (x[9] = (T) => C(!1))
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
}), x2 = /* @__PURE__ */ ye(C2, [["__scopeId", "data-v-1d633bba"]]), S2 = { class: "modal-header" }, I2 = { class: "modal-title" }, E2 = { class: "modal-body" }, T2 = {
  key: 0,
  class: "loading-state"
}, R2 = {
  key: 1,
  class: "warning-box"
}, P2 = {
  key: 0,
  class: "commits-section"
}, M2 = { class: "commit-list" }, D2 = { class: "commit-hash" }, L2 = { class: "commit-message" }, A2 = { class: "commit-date" }, N2 = { class: "force-option" }, O2 = { class: "checkbox-option" }, U2 = { class: "commit-summary" }, z2 = { key: 0 }, F2 = { key: 1 }, V2 = {
  key: 0,
  class: "info-box"
}, B2 = {
  key: 1,
  class: "commits-section"
}, W2 = { class: "commit-list" }, G2 = { class: "commit-hash" }, j2 = { class: "commit-message" }, H2 = { class: "commit-date" }, K2 = {
  key: 2,
  class: "up-to-date"
}, q2 = { class: "modal-actions" }, Y2 = /* @__PURE__ */ ge({
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
      var u, d, m;
      return n(), L(kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = ct(() => {
            }, ["stop"]))
          }, [
            t("div", S2, [
              t("h3", I2, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", E2, [
              e.loading ? (n(), i("div", T2, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", R2, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (n(), i(H, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", P2, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", M2, [
                    (n(!0), i(H, null, he(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", D2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", L2, f(v.message), 1),
                      t("span", A2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", N2, [
                  t("label", O2, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => a.value = v)
                    }, null, 512), [
                      [cn, a.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", U2, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", z2, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", F2, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", V2, [...c[15] || (c[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", B2, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", W2, [
                    (n(!0), i(H, null, he(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", G2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", j2, f(v.message), 1),
                      t("span", H2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", K2, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", q2, [
              S(pe, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => r.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (n(), i(H, { key: 0 }, [
                S(pe, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(pe, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(pe, {
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
}), J2 = /* @__PURE__ */ ye(Y2, [["__scopeId", "data-v-3c2e35ab"]]), Q2 = { class: "resolution-choice-group" }, X2 = ["disabled"], Z2 = ["disabled"], e$ = /* @__PURE__ */ ge({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", Q2, [
      t("button", {
        class: Se(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, X2),
      t("button", {
        class: Se(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Z2)
    ]));
  }
}), t$ = /* @__PURE__ */ ye(e$, [["__scopeId", "data-v-985715ed"]]), s$ = { class: "conflict-header" }, o$ = { class: "conflict-info" }, n$ = { class: "workflow-name" }, a$ = { class: "conflict-description" }, l$ = {
  key: 0,
  class: "resolved-badge"
}, i$ = { class: "resolved-text" }, r$ = { class: "conflict-hashes" }, c$ = { class: "hash-item" }, u$ = { class: "hash-item" }, d$ = { class: "conflict-actions" }, f$ = /* @__PURE__ */ ge({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(o.resolution);
    ft(() => o.resolution, (d) => {
      l.value = d;
    }), ft(l, (d) => {
      d && a("resolve", d);
    });
    const r = z(() => l.value !== null), c = z(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = z(() => {
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
        class: Se(["conflict-item", { resolved: r.value }])
      }, [
        t("div", s$, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", o$, [
            t("code", n$, f(e.conflict.name) + ".json", 1),
            t("div", a$, f(c.value), 1)
          ]),
          r.value ? (n(), i("div", l$, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", i$, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", r$, [
          t("span", c$, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", u$, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", d$, [
          S(t$, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), m$ = /* @__PURE__ */ ye(f$, [["__scopeId", "data-v-506d3bbf"]]), v$ = { class: "resolution-content" }, p$ = {
  key: 0,
  class: "error-box"
}, g$ = { class: "resolution-header" }, h$ = { class: "header-stats" }, y$ = { class: "stat" }, w$ = { class: "stat-value" }, k$ = { class: "stat resolved" }, _$ = { class: "stat-value" }, b$ = {
  key: 0,
  class: "stat pending"
}, $$ = { class: "stat-value" }, C$ = { class: "conflicts-list" }, x$ = {
  key: 1,
  class: "all-resolved-message"
}, S$ = /* @__PURE__ */ ge({
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
    const o = e, a = s, l = z(() => o.resolutions.size), r = z(() => o.workflowConflicts.length - l.value), c = z(() => l.value === o.workflowConflicts.length), u = z(
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
    return (w, p) => (n(), L(dt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", v$, [
          e.error ? (n(), i("div", p$, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", g$, [
            t("div", h$, [
              t("div", y$, [
                t("span", w$, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", k$, [
                t("span", _$, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", b$, [
                t("span", $$, f(r.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", C$, [
            (n(!0), i(H, null, he(e.workflowConflicts, (k) => (n(), L(m$, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (C) => m(k.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", x$, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Re, {
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
}), I$ = /* @__PURE__ */ ye(S$, [["__scopeId", "data-v-c58d150d"]]), E$ = { class: "node-conflict-item" }, T$ = { class: "node-header" }, R$ = { class: "node-name" }, P$ = { class: "node-id" }, M$ = { class: "version-comparison" }, D$ = { class: "version yours" }, L$ = { class: "version theirs" }, A$ = { class: "chosen-version" }, N$ = { class: "chosen" }, O$ = { class: "chosen-reason" }, U$ = { class: "affected-workflows" }, z$ = { class: "wf-source" }, F$ = { class: "wf-version" }, V$ = /* @__PURE__ */ ge({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", E$, [
      t("div", T$, [
        t("code", R$, f(e.conflict.node_name), 1),
        t("span", P$, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", M$, [
        t("div", D$, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", L$, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", A$, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", N$, f(e.conflict.chosen_version), 1),
        t("span", O$, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", U$, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(H, null, he(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, f(a.name), 1),
            t("span", z$, "(" + f(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", F$, "needs v" + f(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), B$ = /* @__PURE__ */ ye(V$, [["__scopeId", "data-v-8b626725"]]), W$ = { class: "validation-content" }, G$ = {
  key: 0,
  class: "compatible-message"
}, j$ = { class: "conflicts-list" }, H$ = {
  key: 2,
  class: "warnings-section"
}, K$ = /* @__PURE__ */ ge({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = z(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), L(dt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        t("div", W$, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", G$, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(H, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", j$, [
              (n(!0), i(H, null, he(e.validation.node_conflicts, (u) => (n(), L(B$, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", H$, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(H, null, he(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Re, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(Re, {
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
}), q$ = /* @__PURE__ */ ye(K$, [["__scopeId", "data-v-fefd26ed"]]), Y$ = { key: 0 }, J$ = /* @__PURE__ */ ge({
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
    } = Ze(), k = _([]), C = _(null), b = _({}), x = _(!1), M = _(null), R = _(""), T = _(!1), D = _(null), O = _(!1), W = _("add"), I = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = z(() => {
      if (!R.value.trim()) return k.value;
      const $e = R.value.toLowerCase();
      return k.value.filter(
        (J) => J.name.toLowerCase().includes($e) || J.fetch_url.toLowerCase().includes($e) || J.push_url.toLowerCase().includes($e)
      );
    });
    async function j() {
      x.value = !0, M.value = null;
      try {
        const $e = await a();
        k.value = $e.remotes, C.value = $e.current_branch_tracking || null, await Promise.all(
          $e.remotes.map(async (J) => {
            const N = await d(J.name);
            N && (b.value[J.name] = N);
          })
        );
      } catch ($e) {
        M.value = $e instanceof Error ? $e.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function ee() {
      W.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function B($e) {
      const J = k.value.find((N) => N.name === $e);
      J && (W.value = "edit", I.value = {
        name: J.name,
        fetchUrl: J.fetch_url,
        pushUrl: J.push_url
      }, O.value = !0);
    }
    async function A($e) {
      try {
        W.value === "add" ? await l($e.name, $e.fetchUrl) : await c($e.name, $e.fetchUrl, $e.pushUrl || void 0), O.value = !1, await j();
      } catch (J) {
        M.value = J instanceof Error ? J.message : "Operation failed";
      }
    }
    function K() {
      O.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X($e) {
      D.value = $e;
      try {
        await u($e);
        const J = await d($e);
        J && (b.value[$e] = J), o("toast", `✓ Fetched from ${$e}`, "success");
      } catch (J) {
        o("toast", J instanceof Error ? J.message : "Fetch failed", "error");
      } finally {
        D.value = null;
      }
    }
    async function F($e) {
      if (confirm(`Remove remote "${$e}"?`))
        try {
          await r($e), await j();
        } catch (J) {
          M.value = J instanceof Error ? J.message : "Failed to remove remote";
        }
    }
    function se() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Y = _("idle"), ae = z(() => Y.value === "pull_preview"), re = z(
      () => Y.value === "resolving" || Y.value === "validating"
    ), Pe = z(
      () => Y.value === "validation_review" || Y.value === "executing"
    ), Ve = _(!1), Oe = _(null), Ye = _(!1), we = _(null), oe = _(!1), de = _(null), ve = _(null), Ie = _(/* @__PURE__ */ new Map()), Te = _(null), Ue = _(null), U = z(() => de.value && Fr(de.value) ? de.value : null);
    async function P($e) {
      we.value = $e, Y.value = "pull_preview", oe.value = !0, de.value = null, ve.value = null;
      try {
        de.value = await m($e);
      } catch (J) {
        ve.value = J instanceof Error ? J.message : "Failed to load pull preview";
      } finally {
        oe.value = !1;
      }
    }
    function V() {
      Y.value = "idle", de.value = null, ve.value = null, we.value = null;
    }
    async function Z($e) {
      if (!we.value) return;
      Y.value = "executing", ve.value = null;
      const J = we.value;
      try {
        const N = await v(J, $e);
        if (N.rolled_back) {
          ve.value = `Pull failed and was rolled back: ${N.error || "Unknown error"}`, Y.value = "pull_preview";
          return;
        }
        Ee(), Y.value = "idle", o("toast", `✓ Pulled from ${J}`, "success"), await j();
      } catch (N) {
        ve.value = N instanceof Error ? N.message : "Pull failed", Y.value = "pull_preview";
      }
    }
    function ne() {
      U.value && (Y.value = "resolving", Ue.value = null);
    }
    function fe($e, J) {
      Ie.value.set($e, { name: $e, resolution: J });
    }
    function _e() {
      Y.value = "pull_preview";
    }
    async function ie() {
      Y.value = "validating", Ue.value = null;
      try {
        const $e = Array.from(Ie.value.values());
        Te.value = await p(we.value, $e), Y.value = "validation_review";
      } catch ($e) {
        Ue.value = $e instanceof Error ? $e.message : "Validation failed", Y.value = "resolving";
      }
    }
    async function be() {
      Y.value = "executing";
      const $e = we.value;
      try {
        const J = Array.from(Ie.value.values()), N = await v($e, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: J
        });
        if (N.rolled_back) {
          ve.value = `Pull failed and was rolled back: ${N.error || "Unknown error"}`, Y.value = "pull_preview";
          return;
        }
        Ee(), Y.value = "idle", o("toast", `✓ Pulled from ${$e}`, "success"), await j();
      } catch (J) {
        ve.value = J instanceof Error ? J.message : "Pull failed", Y.value = "validation_review";
      }
    }
    function ce() {
      Y.value = "resolving";
    }
    function De() {
      Ee(), Y.value = "idle";
    }
    function Ee() {
      Ie.value.clear(), Te.value = null, Ue.value = null, ve.value = null, de.value = null, we.value = null;
    }
    async function ue($e) {
      we.value = $e, Ve.value = !0, oe.value = !0, Oe.value = null;
      try {
        Oe.value = await g($e);
      } catch (J) {
        M.value = J instanceof Error ? J.message : "Failed to load push preview";
      } finally {
        oe.value = !1;
      }
    }
    function G() {
      Ve.value = !1, Oe.value = null, we.value = null;
    }
    async function Me($e) {
      if (!we.value) return;
      Ye.value = !0;
      const J = we.value;
      try {
        await w(J, $e), G(), o("toast", `✓ Pushed to ${J}`, "success"), await j();
      } catch (N) {
        o("toast", N instanceof Error ? N.message : "Push failed", "error");
      } finally {
        Ye.value = !1;
      }
    }
    function Ce() {
      const $e = we.value;
      G(), $e && P($e);
    }
    return Qe(j), ($e, J) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: J[0] || (J[0] = (N) => T.value = !0)
          }, {
            actions: h(() => [
              O.value ? y("", !0) : (n(), L(pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: h(() => [...J[3] || (J[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          O.value ? y("", !0) : (n(), L(Po, {
            key: 0,
            modelValue: R.value,
            "onUpdate:modelValue": J[1] || (J[1] = (N) => R.value = N),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          x.value ? (n(), L(Ts, {
            key: 0,
            message: "Loading remotes..."
          })) : M.value ? (n(), L(Rs, {
            key: 1,
            message: M.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            O.value ? (n(), L(Ob, {
              key: 0,
              mode: W.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: A,
              onCancel: K
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            k.value.length && !O.value ? (n(), L(pn, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(k.value.length) + " remote" + f(k.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (n(), i("span", Y$, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !O.value ? (n(), L(ut, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(E.value, (N) => (n(), L(Cb, {
                  key: N.name,
                  remote: N,
                  "sync-status": b.value[N.name],
                  "fetching-remote": D.value,
                  onFetch: X,
                  onEdit: B,
                  onRemove: F,
                  onPull: P,
                  onPush: ue
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !E.value.length && !O.value ? (n(), L(ls, {
              key: 3,
              icon: "🌐",
              message: R.value ? `No remotes match '${R.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                S(pe, {
                  variant: "primary",
                  onClick: ee
                }, {
                  default: h(() => [...J[4] || (J[4] = [
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
      S(is, {
        show: T.value,
        title: "About Git Remotes",
        onClose: J[2] || (J[2] = (N) => T.value = !1)
      }, {
        content: h(() => [...J[5] || (J[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          S(pe, {
            variant: "link",
            onClick: se
          }, {
            default: h(() => [...J[6] || (J[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(x2, {
        show: ae.value,
        "remote-name": we.value || "",
        preview: de.value,
        loading: oe.value,
        pulling: Y.value === "executing",
        error: ve.value,
        "conflict-resolutions": Ie.value,
        onClose: V,
        onPull: Z,
        onOpenConflictResolution: ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(J2, {
        show: Ve.value,
        "remote-name": we.value || "",
        preview: Oe.value,
        loading: oe.value,
        pushing: Ye.value,
        onClose: G,
        onPush: Me,
        onPullFirst: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      re.value && U.value ? (n(), L(I$, {
        key: 0,
        "workflow-conflicts": U.value.workflow_conflicts,
        resolutions: Ie.value,
        "operation-type": "pull",
        validating: Y.value === "validating",
        error: Ue.value,
        onClose: _e,
        onResolve: fe,
        onApply: ie
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Pe.value && Te.value ? (n(), L(q$, {
        key: 1,
        validation: Te.value,
        "operation-type": "pull",
        executing: Y.value === "executing",
        onProceed: be,
        onGoBack: ce,
        onCancel: De
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Q$ = /* @__PURE__ */ ye(J$, [["__scopeId", "data-v-9ae3b76d"]]), X$ = { class: "setting-info" }, Z$ = { class: "setting-label" }, eC = {
  key: 0,
  class: "required-marker"
}, tC = {
  key: 0,
  class: "setting-description"
}, sC = { class: "setting-control" }, oC = /* @__PURE__ */ ge({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Se(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", X$, [
        t("div", Z$, [
          $(f(e.label) + " ", 1),
          e.required ? (n(), i("span", eC, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", tC, f(e.description), 1)) : y("", !0)
      ]),
      t("div", sC, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Oo = /* @__PURE__ */ ye(oC, [["__scopeId", "data-v-cb5d236c"]]), nC = { class: "toggle" }, aC = ["checked", "disabled"], lC = /* @__PURE__ */ ge({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", nC, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, aC),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ri = /* @__PURE__ */ ye(lC, [["__scopeId", "data-v-71c0f550"]]), iC = { class: "workspace-settings-content" }, rC = { class: "settings-section" }, cC = { class: "path-setting" }, uC = { class: "path-value" }, dC = { class: "path-setting" }, fC = { class: "path-value" }, mC = { class: "settings-section" }, vC = { class: "settings-section" }, pC = { class: "settings-section" }, gC = /* @__PURE__ */ ge({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = Ze(), u = _(!1), d = _(null), m = _(null), v = _(null), g = _(null), w = _(""), p = _(""), k = _(""), C = _(!1), b = _(!1), x = _(!1), M = _(!0);
    function R(ee) {
      return ee.join(" ");
    }
    function T(ee) {
      return ee.trim() ? ee.trim().split(/\s+/) : [];
    }
    const D = z(() => {
      if (!g.value) return !1;
      const ee = C.value, B = b.value, A = k.value !== R(g.value.comfyui_extra_args || []);
      return ee || B || A;
    });
    async function O() {
      u.value = !0, d.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", k.value = R(v.value.comfyui_extra_args || []), C.value = !1, b.value = !1;
        const ee = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        x.value = ee !== "false", M.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function W() {
      var ee;
      m.value = null;
      try {
        const B = {};
        C.value && (B.civitai_api_key = w.value || null), b.value && (B.huggingface_token = p.value || null), k.value !== R(((ee = g.value) == null ? void 0 : ee.comfyui_extra_args) || []) && (B.comfyui_extra_args = T(k.value)), await c(B, a.workspacePath || void 0), await O(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (B) {
        const A = B instanceof Error ? B.message : "Failed to save settings";
        m.value = { type: "error", message: A }, l("error", A);
      }
    }
    function I() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = g.value.huggingface_token || "", k.value = R(g.value.comfyui_extra_args || []), C.value = !1, b.value = !1, m.value = null);
    }
    function E(ee) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ee)), console.log("[ComfyGit] Auto-refresh setting saved:", ee);
    }
    function j(ee) {
      ee ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ee ? "enabled" : "disabled");
    }
    return s({
      saveSettings: W,
      resetSettings: I,
      hasChanges: D,
      loadSettings: O
    }), Qe(O), (ee, B) => (n(), i("div", iC, [
      u.value ? (n(), L(Ts, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (n(), L(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: O
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        S(ut, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var A, K;
            return [
              t("div", rC, [
                t("div", cC, [
                  B[7] || (B[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  B[8] || (B[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", uC, f(((A = v.value) == null ? void 0 : A.workspace_path) || "Loading..."), 1)
                ]),
                t("div", dC, [
                  B[9] || (B[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  B[10] || (B[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", fC, f(((K = v.value) == null ? void 0 : K.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(ut, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", mC, [
              S(Oo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  S(Qo, {
                    modelValue: w.value,
                    "onUpdate:modelValue": B[0] || (B[0] = (A) => w.value = A),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: B[1] || (B[1] = (A) => C.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Oo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  S(Qo, {
                    modelValue: p.value,
                    "onUpdate:modelValue": B[2] || (B[2] = (A) => p.value = A),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: B[3] || (B[3] = (A) => b.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        S(ut, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", vC, [
              S(Oo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  S(Qo, {
                    modelValue: k.value,
                    "onUpdate:modelValue": B[4] || (B[4] = (A) => k.value = A),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              B[11] || (B[11] = t("div", { class: "setting-hint" }, [
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
        S(ut, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", pC, [
              S(Oo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  S(ri, {
                    modelValue: x.value,
                    "onUpdate:modelValue": [
                      B[5] || (B[5] = (A) => x.value = A),
                      E
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Oo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  S(ri, {
                    modelValue: M.value,
                    "onUpdate:modelValue": [
                      B[6] || (B[6] = (A) => M.value = A),
                      j
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (n(), L(pn, {
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
}), Vr = /* @__PURE__ */ ye(gC, [["__scopeId", "data-v-9c5b427b"]]), hC = /* @__PURE__ */ ge({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = _(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), L(Lt, null, {
      header: h(() => [
        S(At, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              S(pe, {
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
              (c = s.value) != null && c.hasChanges ? (n(), L(pe, {
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
}), yC = { class: "base-tabs" }, wC = ["disabled", "onClick"], kC = {
  key: 0,
  class: "base-tabs__badge"
}, _C = /* @__PURE__ */ ge({
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
    return (r, c) => (n(), i("div", yC, [
      (n(!0), i(H, null, he(e.tabs, (u) => (n(), i("button", {
        key: u.id,
        class: Se([
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
        u.badge ? (n(), i("span", kC, f(u.badge), 1)) : y("", !0)
      ], 10, wC))), 128))
    ]));
  }
}), Br = /* @__PURE__ */ ye(_C, [["__scopeId", "data-v-ad5e6cad"]]), bC = { class: "log-viewer-wrapper" }, $C = ["disabled", "title"], CC = /* @__PURE__ */ ge({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = _(null), a = _("idle"), l = z(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function r() {
      var v;
      await ht();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Qe(r), ft(() => s.logs, r);
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
    return (m, v) => (n(), i("div", bC, [
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
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, $C),
        (n(!0), i(H, null, he(l.value, (g, w) => (n(), i("div", {
          key: w,
          class: Se(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Wr = /* @__PURE__ */ ye(CC, [["__scopeId", "data-v-c0cc6d21"]]), xC = /* @__PURE__ */ ge({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = Ze(), c = _("workspace"), u = _([]), d = _(!1), m = _(null), v = _(!1), g = _(null), w = _(null), p = _(!1), k = z(() => c.value === "workspace" ? g.value : w.value);
    async function C() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await a(void 0, 500);
      } catch (M) {
        m.value = M instanceof Error ? M.message : `Failed to load ${c.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function b() {
      try {
        const [M, R] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (g.value = M.path), R.exists && (w.value = R.path);
      } catch {
      }
    }
    async function x() {
      if (k.value) {
        p.value = !0;
        try {
          await r(k.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          p.value = !1;
        }
      }
    }
    return ft(c, () => {
      C();
    }), Qe(() => {
      C(), b();
    }), (M, R) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (T) => v.value = !0)
          }, {
            actions: h(() => [
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: !k.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(pe, {
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
            "onUpdate:modelValue": R[1] || (R[1] = (T) => c.value = T),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), L(Ts, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (n(), L(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            u.value.length === 0 ? (n(), L(ls, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), L(Wr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      S(is, {
        show: v.value,
        title: "About Logs",
        onClose: R[3] || (R[3] = (T) => v.value = !1)
      }, {
        content: h(() => [...R[4] || (R[4] = [
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
          S(pe, {
            variant: "primary",
            onClick: R[2] || (R[2] = (T) => v.value = !1)
          }, {
            default: h(() => [...R[5] || (R[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), SC = /* @__PURE__ */ ge({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = Ze(), r = _([]), c = _(!1), u = _(null), d = _(!1), m = _("production"), v = _(null), g = _(!1);
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
    async function k() {
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
    return Qe(() => {
      w(), p();
    }), (C, b) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (x) => d.value = !0)
          }, {
            actions: h(() => [
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(pe, {
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
          c.value ? (n(), L(Ts, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length === 0 ? (n(), L(ls, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), L(Wr, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      S(is, {
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
          S(pe, {
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
}), IC = { class: "env-title" }, EC = {
  key: 0,
  class: "current-badge"
}, TC = {
  key: 0,
  class: "branch-info"
}, RC = /* @__PURE__ */ ge({
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
    return (s, o) => (n(), L(Dt, {
      status: e.isCurrent ? "synced" : void 0
    }, so({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", IC, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", EC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", TC, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        Ke(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          S(vt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          S(vt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          S(vt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), L(vt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), PC = /* @__PURE__ */ ye(RC, [["__scopeId", "data-v-9231917a"]]), MC = { class: "env-details" }, DC = { class: "status-row" }, LC = {
  key: 0,
  class: "detail-row"
}, AC = { class: "value mono" }, NC = {
  key: 1,
  class: "detail-row"
}, OC = { class: "value mono small" }, UC = { class: "collapsible-section" }, zC = { class: "value" }, FC = {
  key: 0,
  class: "collapsible-body"
}, VC = { class: "item-list" }, BC = { class: "item-name" }, WC = { class: "item-name" }, GC = { class: "item-name" }, jC = { class: "item-name" }, HC = {
  key: 0,
  class: "empty-list"
}, KC = { class: "collapsible-section" }, qC = { class: "value" }, YC = {
  key: 0,
  class: "collapsible-body"
}, JC = { class: "item-list" }, QC = { class: "item-name" }, XC = {
  key: 0,
  class: "item-meta"
}, ZC = {
  key: 0,
  class: "empty-list"
}, ex = { class: "collapsible-section" }, tx = { class: "value" }, sx = {
  key: 0,
  class: "missing-count"
}, ox = {
  key: 0,
  class: "collapsible-body"
}, nx = { class: "item-list" }, ax = { class: "model-row" }, lx = { class: "item-name" }, ix = { class: "model-meta" }, rx = { class: "item-meta" }, cx = {
  key: 0,
  class: "item-meta"
}, ux = {
  key: 0,
  class: "empty-list"
}, dx = {
  key: 2,
  class: "section-divider"
}, fx = {
  key: 3,
  class: "detail-row"
}, mx = { class: "value" }, vx = { class: "footer-actions" }, px = /* @__PURE__ */ ge({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = z(() => {
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
    return (d, m) => (n(), L(dt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: m[5] || (m[5] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, g, w, p, k, C, b, x, M, R, T, D, O, W;
        return [
          t("div", MC, [
            t("div", DC, [
              m[6] || (m[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Se(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", LC, [
              m[7] || (m[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", AC, f(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", NC, [
              m[8] || (m[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", OC, f(e.environment.path), 1)
            ])) : y("", !0),
            m[17] || (m[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", UC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (I) => r("workflows"))
              }, [
                m[9] || (m[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", zC, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (n(), i("span", {
                  key: 0,
                  class: Se(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", FC, [
                t("div", VC, [
                  (n(!0), i(H, null, he(e.detail.workflows.synced, (I) => (n(), i("div", {
                    key: "synced-" + I,
                    class: "list-item"
                  }, [
                    t("span", BC, f(I), 1),
                    m[10] || (m[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, he(e.detail.workflows.new, (I) => (n(), i("div", {
                    key: "new-" + I,
                    class: "list-item"
                  }, [
                    t("span", WC, f(I), 1),
                    m[11] || (m[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, he(e.detail.workflows.modified, (I) => (n(), i("div", {
                    key: "mod-" + I,
                    class: "list-item"
                  }, [
                    t("span", GC, f(I), 1),
                    m[12] || (m[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, he(e.detail.workflows.deleted, (I) => (n(), i("div", {
                    key: "del-" + I,
                    class: "list-item"
                  }, [
                    t("span", jC, f(I), 1),
                    m[13] || (m[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", HC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", KC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (I) => r("nodes"))
              }, [
                m[14] || (m[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", qC, f(((p = e.detail) == null ? void 0 : p.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (n(), i("span", {
                  key: 0,
                  class: Se(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (n(), i("div", YC, [
                t("div", JC, [
                  (n(!0), i(H, null, he(e.detail.nodes, (I) => (n(), i("div", {
                    key: I.name,
                    class: "list-item"
                  }, [
                    t("span", QC, f(I.name), 1),
                    I.version ? (n(), i("span", XC, f(I.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", ZC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", ex, [
              t("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (I) => r("models"))
              }, [
                m[15] || (m[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", tx, [
                  $(f(((b = e.detail) == null ? void 0 : b.model_count) ?? e.environment.model_count) + " ", 1),
                  (M = (x = e.detail) == null ? void 0 : x.models) != null && M.missing.length ? (n(), i("span", sx, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (R = e.detail) != null && R.models ? (n(), i("span", {
                  key: 0,
                  class: Se(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (T = e.detail) != null && T.models && l.value.has("models") ? (n(), i("div", ox, [
                t("div", nx, [
                  (n(!0), i(H, null, he(e.detail.models.missing, (I) => (n(), i("div", {
                    key: I.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", ax, [
                      t("span", lx, f(I.filename), 1),
                      t("span", {
                        class: Se(["criticality-badge", I.criticality])
                      }, f(I.criticality), 3)
                    ]),
                    t("div", ix, [
                      t("span", rx, f(I.category), 1),
                      I.workflow_names.length ? (n(), i("span", cx, " used by: " + f(I.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", ux, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (n(), i("div", dx)) : y("", !0),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (n(), i("div", fx, [
              m[16] || (m[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", mx, f(u(((W = e.detail) == null ? void 0 : W.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        t("div", vx, [
          e.canDelete ? (n(), L(Re, {
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
          S(Re, {
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
}), gx = /* @__PURE__ */ ye(px, [["__scopeId", "data-v-92e68b76"]]), Gr = [
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
], Hr = "auto", hx = { class: "progress-bar" }, yx = /* @__PURE__ */ ge({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = z(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", hx, [
      t("div", {
        class: Se(["progress-fill", e.variant]),
        style: Gt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ia = /* @__PURE__ */ ye(yx, [["__scopeId", "data-v-1beb0512"]]), wx = { class: "task-progress" }, kx = { class: "progress-info" }, _x = { class: "progress-percentage" }, bx = { class: "progress-message" }, $x = {
  key: 0,
  class: "progress-steps"
}, Cx = { class: "step-icon" }, xx = { class: "step-label" }, Sx = /* @__PURE__ */ ge({
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
    return (l, r) => (n(), i("div", wx, [
      S(ia, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", kx, [
        t("span", _x, f(e.progress) + "%", 1),
        t("span", bx, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", $x, [
        (n(!0), i(H, null, he(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Se(["step", o(c.id)])
        }, [
          t("span", Cx, f(a(c.id)), 1),
          t("span", xx, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), jn = /* @__PURE__ */ ye(Sx, [["__scopeId", "data-v-9d1de66c"]]), Ix = {
  key: 0,
  class: "create-env-form"
}, Ex = { class: "form-field" }, Tx = { class: "input-wrapper" }, Rx = {
  key: 0,
  class: "validating-indicator"
}, Px = {
  key: 1,
  class: "valid-indicator"
}, Mx = {
  key: 0,
  class: "field-error"
}, Dx = { class: "form-field" }, Lx = ["value"], Ax = { class: "form-field" }, Nx = ["disabled"], Ox = ["value"], Ux = { class: "form-field" }, zx = ["value"], Fx = { class: "form-field form-field--checkbox" }, Vx = { class: "form-checkbox" }, Bx = {
  key: 1,
  class: "create-env-progress"
}, Wx = { class: "creating-intro" }, Gx = {
  key: 0,
  class: "progress-warning"
}, jx = {
  key: 1,
  class: "create-error"
}, Hx = { class: "error-message" }, Kx = {
  key: 1,
  class: "footer-status"
}, qx = 10, Yx = /* @__PURE__ */ ge({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = Ze(), u = _(""), d = _(jr), m = _("latest"), v = _(Hr), g = _(!1), w = _(null), p = _(!1), k = _(!1);
    let C = null, b = 0;
    const x = z(() => !!u.value.trim() && k.value && !w.value && !p.value && !T.value), M = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), R = _(!1), T = _(!1), D = _({
      progress: 0,
      message: ""
    });
    let O = null, W = 0;
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
    ], E = _(null);
    ft(u, (Y) => {
      k.value = !1, C && (clearTimeout(C), C = null);
      const ae = Y.trim();
      if (!ae) {
        w.value = null, p.value = !1;
        return;
      }
      p.value = !0, C = setTimeout(() => {
        j(ae);
      }, 400);
    });
    async function j(Y, ae = !1) {
      const re = Y.trim();
      if (!re)
        return k.value = !1, p.value = !1, w.value = ae ? "Environment name is required" : null, !1;
      const Pe = ++b;
      p.value = !0;
      try {
        const Ve = await c(re);
        return Pe !== b ? !1 : (w.value = Ve.valid ? null : Ve.error || "Invalid name", k.value = !!Ve.valid, !!Ve.valid);
      } catch {
        return Pe !== b || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        Pe === b && (p.value = !1);
      }
    }
    async function ee() {
      C && (clearTimeout(C), C = null), await j(u.value, !0);
    }
    function B() {
      T.value || o("close");
    }
    async function A() {
      const Y = u.value.trim();
      if (!Y) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await j(Y, !0)) {
        T.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const re = {
            name: Y,
            python_version: d.value,
            comfyui_version: m.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Pe = await l(re);
          Pe.status === "started" ? K() : Pe.status === "error" && (D.value = {
            progress: 0,
            message: Pe.message || "Failed to start creation",
            error: Pe.message
          });
        } catch (re) {
          D.value = {
            progress: 0,
            message: re instanceof Error ? re.message : "Unknown error",
            error: re instanceof Error ? re.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      O || (W = 0, O = window.setInterval(async () => {
        try {
          const Y = await r();
          W = 0, D.value = {
            progress: Y.progress ?? 0,
            message: Y.message,
            phase: Y.phase,
            error: Y.error
          }, Y.state === "complete" ? (X(), o("created", Y.environment_name || u.value.trim(), g.value)) : Y.state === "error" ? (X(), D.value.error = Y.error || Y.message) : Y.state === "idle" && T.value && (X(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          W++, W >= qx && (X(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function X() {
      O && (clearInterval(O), O = null);
    }
    function F() {
      T.value = !1, D.value = { progress: 0, message: "" }, o("close");
    }
    async function se() {
      R.value = !0;
      try {
        M.value = await a();
      } catch (Y) {
        console.error("Failed to load ComfyUI releases:", Y);
      } finally {
        R.value = !1;
      }
    }
    return Qe(async () => {
      var Y;
      await ht(), (Y = E.value) == null || Y.focus(), se();
    }), Gs(() => {
      X(), C && (clearTimeout(C), C = null);
    }), (Y, ae) => (n(), L(dt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !T.value,
      onClose: B
    }, {
      body: h(() => [
        T.value ? (n(), i("div", Bx, [
          t("p", Wx, [
            ae[12] || (ae[12] = $(" Creating environment ", -1)),
            t("strong", null, f(u.value), 1),
            ae[13] || (ae[13] = $("... ", -1))
          ]),
          S(jn, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? y("", !0) : (n(), i("p", Gx, " This may take several minutes. Please wait... ")),
          D.value.error ? (n(), i("div", jx, [
            t("p", Hx, f(D.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", Ix, [
          t("div", Ex, [
            ae[6] || (ae[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", Tx, [
              qe(t("input", {
                ref_key: "nameInput",
                ref: E,
                "onUpdate:modelValue": ae[0] || (ae[0] = (re) => u.value = re),
                type: "text",
                class: Se(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: Jt(A, ["enter"]),
                onBlur: ee
              }, null, 34), [
                [Wt, u.value]
              ]),
              p.value ? (n(), i("span", Rx, "...")) : k.value ? (n(), i("span", Px, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", Mx, f(w.value), 1)) : y("", !0),
            ae[7] || (ae[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", Dx, [
            ae[8] || (ae[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": ae[1] || (ae[1] = (re) => d.value = re),
              class: "form-select"
            }, [
              (n(!0), i(H, null, he(We(Gr), (re) => (n(), i("option", {
                key: re,
                value: re
              }, f(re), 9, Lx))), 128))
            ], 512), [
              [gs, d.value]
            ])
          ]),
          t("div", Ax, [
            ae[9] || (ae[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": ae[2] || (ae[2] = (re) => m.value = re),
              class: "form-select",
              disabled: R.value
            }, [
              (n(!0), i(H, null, he(M.value, (re) => (n(), i("option", {
                key: re.tag_name,
                value: re.tag_name
              }, f(re.name), 9, Ox))), 128))
            ], 8, Nx), [
              [gs, m.value]
            ])
          ]),
          t("div", Ux, [
            ae[10] || (ae[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": ae[3] || (ae[3] = (re) => v.value = re),
              class: "form-select"
            }, [
              (n(!0), i(H, null, he(We(vl), (re) => (n(), i("option", {
                key: re,
                value: re
              }, f(re) + f(re === "auto" ? " (detect GPU)" : ""), 9, zx))), 128))
            ], 512), [
              [gs, v.value]
            ])
          ]),
          t("div", Fx, [
            t("label", Vx, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ae[4] || (ae[4] = (re) => g.value = re)
              }, null, 512), [
                [cn, g.value]
              ]),
              ae[11] || (ae[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        T.value ? (n(), i(H, { key: 1 }, [
          D.value.error ? (n(), L(Re, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: h(() => [...ae[16] || (ae[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", Kx, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          S(Re, {
            variant: "primary",
            disabled: !x.value,
            onClick: A
          }, {
            default: h(() => [...ae[14] || (ae[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Re, {
            variant: "secondary",
            onClick: ae[5] || (ae[5] = (re) => o("close"))
          }, {
            default: h(() => [...ae[15] || (ae[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Jx = /* @__PURE__ */ ye(Yx, [["__scopeId", "data-v-3faa3d9b"]]), Qx = /* @__PURE__ */ ge({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = Ze(), c = _([]), u = _(!1), d = _(null), m = _(""), v = _(!1), g = _(!1), w = _(null), p = _(null), k = z(() => {
      if (!m.value.trim()) return c.value;
      const T = m.value.toLowerCase();
      return c.value.filter(
        (D) => {
          var O;
          return D.name.toLowerCase().includes(T) || ((O = D.current_branch) == null ? void 0 : O.toLowerCase().includes(T));
        }
      );
    });
    function C(T, D) {
      g.value = !1, a("created", T, D);
    }
    function b() {
      g.value = !0;
    }
    async function x(T) {
      w.value = T, p.value = null;
      const D = await r(T.name);
      D && (p.value = D);
    }
    function M(T) {
      w.value = null, p.value = null, a("delete", T);
    }
    async function R() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (T) {
        d.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Qe(R), s({
      loadEnvironments: R,
      openCreateModal: b
    }), (T, D) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (O) => v.value = !0)
          }, {
            actions: h(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: h(() => [...D[6] || (D[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: R
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
          S(Po, {
            modelValue: m.value,
            "onUpdate:modelValue": D[1] || (D[1] = (O) => m.value = O),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), L(Ts, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            k.value.length ? (n(), L(ut, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, he(k.value, (O) => (n(), L(PC, {
                  key: O.name,
                  "environment-name": O.name,
                  "is-current": O.is_current,
                  "current-branch": O.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    O.is_current ? y("", !0) : (n(), L(pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => T.$emit("switch", O.name)
                    }, {
                      default: h(() => [...D[8] || (D[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => x(O)
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
            k.value.length ? y("", !0) : (n(), L(ls, {
              key: 1,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  S(pe, {
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
      S(is, {
        show: v.value,
        title: "About Environments",
        onClose: D[3] || (D[3] = (O) => v.value = !1)
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
          S(pe, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (O) => v.value = !1)
          }, {
            default: h(() => [...D[12] || (D[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(gx, {
        key: 0,
        environment: w.value,
        detail: p.value,
        "can-delete": c.value.length > 1,
        onClose: D[4] || (D[4] = (O) => {
          w.value = null, p.value = null;
        }),
        onDelete: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      g.value ? (n(), L(Jx, {
        key: 1,
        onClose: D[5] || (D[5] = (O) => g.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), Xx = /* @__PURE__ */ ye(Qx, [["__scopeId", "data-v-0c0fbd88"]]), Zx = { class: "file-path" }, e3 = { class: "file-path-text" }, t3 = ["title"], s3 = /* @__PURE__ */ ge({
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
    return (l, r) => (n(), i("div", Zx, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", e3, f(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, f(o.value ? "✓" : "📋"), 9, t3)) : y("", !0)
    ]));
  }
}), o3 = /* @__PURE__ */ ye(s3, [["__scopeId", "data-v-f0982173"]]), n3 = { class: "base-textarea-wrapper" }, a3 = ["value", "rows", "placeholder", "disabled", "maxlength"], l3 = {
  key: 0,
  class: "base-textarea-count"
}, i3 = /* @__PURE__ */ ge({
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
    return (r, c) => (n(), i("div", n3, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Jt(ct((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Jt(ct((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Jt(l, ["enter"])
        ]
      }, null, 40, a3),
      e.showCharCount && e.maxLength ? (n(), i("div", l3, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Ba = /* @__PURE__ */ ye(i3, [["__scopeId", "data-v-c6d16c93"]]), r3 = ["checked", "disabled"], c3 = { class: "base-checkbox-box" }, u3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, d3 = {
  key: 0,
  class: "base-checkbox-label"
}, f3 = /* @__PURE__ */ ge({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Se(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, r3),
      t("span", c3, [
        e.modelValue ? (n(), i("svg", u3, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", d3, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Hn = /* @__PURE__ */ ye(f3, [["__scopeId", "data-v-bf17c831"]]), m3 = { class: "export-blocked" }, v3 = { class: "error-header" }, p3 = { class: "error-summary" }, g3 = { class: "error-description" }, h3 = { class: "issues-list" }, y3 = { class: "issue-message" }, w3 = {
  key: 0,
  class: "issue-details"
}, k3 = ["onClick"], _3 = { class: "issue-fix" }, b3 = {
  key: 0,
  class: "commit-section"
}, $3 = {
  key: 0,
  class: "issues-warning"
}, C3 = {
  key: 1,
  class: "commit-error"
}, x3 = /* @__PURE__ */ ge({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = Ze(), r = _(""), c = _(!1), u = _(!1), d = _(""), m = Ws({}), v = z(
      () => o.issues.some((b) => b.type === "uncommitted_workflows" || b.type === "uncommitted_git_changes")
    ), g = z(
      () => o.issues.some((b) => b.type === "unresolved_issues")
    ), w = z(
      () => g.value && !u.value
    ), p = z(
      () => v.value && r.value.trim() !== "" && !c.value && !w.value
    );
    function k(b) {
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
            const M = ((b = x.issues) == null ? void 0 : b.map((R) => `${R.name}: ${R.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${M}`;
          } else
            d.value = x.message || "Commit failed";
        } catch (x) {
          d.value = x instanceof Error ? x.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (b, x) => (n(), L(dt, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: x[4] || (x[4] = (M) => b.$emit("close"))
    }, {
      body: h(() => [
        t("div", m3, [
          t("div", v3, [
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
            t("div", p3, [
              x[5] || (x[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", g3, f(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", h3, [
            (n(!0), i(H, null, he(e.issues, (M, R) => (n(), i("div", {
              key: R,
              class: "issue-item"
            }, [
              t("div", y3, f(M.message), 1),
              M.details.length ? (n(), i("div", w3, [
                (n(!0), i(H, null, he(k(R), (T, D) => (n(), i("div", {
                  key: D,
                  class: "issue-detail"
                }, f(T), 1))), 128)),
                M.details.length > 3 && !m[R] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (T) => m[R] = !0
                }, " +" + f(M.details.length - 3) + " more ", 9, k3)) : y("", !0)
              ])) : y("", !0),
              t("div", _3, [
                M.type === "uncommitted_workflows" ? (n(), i(H, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : M.type === "uncommitted_git_changes" ? (n(), i(H, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : M.type === "unresolved_issues" ? (n(), i(H, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", b3, [
            g.value ? (n(), i("div", $3, [
              x[8] || (x[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              S(Hn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[0] || (x[0] = (M) => u.value = M),
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
              "onUpdate:modelValue": x[1] || (x[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: c.value || w.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", C3, f(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        v.value ? (n(), i(H, { key: 0 }, [
          S(Re, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (M) => b.$emit("close"))
          }, {
            default: h(() => [...x[9] || (x[9] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(Re, {
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
        ], 64)) : (n(), L(Re, {
          key: 1,
          variant: "primary",
          onClick: x[3] || (x[3] = (M) => b.$emit("close"))
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
}), Kr = /* @__PURE__ */ ye(x3, [["__scopeId", "data-v-bd79ba24"]]), S3 = { class: "export-warnings" }, I3 = {
  key: 0,
  class: "success-header"
}, E3 = { class: "warning-header" }, T3 = { class: "warning-summary" }, R3 = { class: "warning-title" }, P3 = { class: "models-section" }, M3 = { class: "models-list" }, D3 = { class: "model-info" }, L3 = { class: "model-filename" }, A3 = { class: "model-workflows" }, N3 = ["onClick"], O3 = /* @__PURE__ */ ge({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(!1), r = _(null), c = z(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, a("revalidate");
    }
    return (d, m) => (n(), i(H, null, [
      S(dt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", S3, [
            e.models.length === 0 ? (n(), i("div", I3, [...m[4] || (m[4] = [
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
            ])])) : (n(), i(H, { key: 1 }, [
              t("div", E3, [
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
                t("div", T3, [
                  t("h3", R3, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", P3, [
                t("div", M3, [
                  (n(!0), i(H, null, he(c.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", D3, [
                      t("div", L3, f(v.filename), 1),
                      t("div", A3, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => r.value = v.hash
                    }, " Add Source ", 8, N3)
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
          S(Re, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          S(Re, {
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
      r.value ? (n(), L(fl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), qr = /* @__PURE__ */ ye(O3, [["__scopeId", "data-v-b698d882"]]), U3 = { class: "export-card" }, z3 = { class: "export-path-row" }, F3 = { class: "export-actions" }, V3 = {
  key: 1,
  class: "export-warning"
}, B3 = /* @__PURE__ */ ge({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = Ze(), a = _(""), l = _(!1), r = _(!1), c = _(!1), u = _(null), d = _(!1), m = _(null), v = _(!1), g = _(!1), w = z(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const T = await s();
        m.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? g.value = !0 : await x() : v.value = !0;
      } catch (T) {
        u.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function k() {
      g.value = !1, await x();
    }
    async function C() {
      v.value = !1, l.value = !0;
      try {
        const T = await s();
        m.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? g.value = !0 : await x() : v.value = !0;
      } catch (T) {
        u.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Re-validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function b() {
      try {
        const T = await s();
        m.value = T;
      } catch (T) {
        console.error("Re-validation failed:", T);
      }
    }
    async function x() {
      r.value = !0;
      try {
        const T = await o(a.value || void 0);
        u.value = T;
      } catch (T) {
        u.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Export failed"
        };
      } finally {
        r.value = !1;
      }
    }
    async function M() {
      var T;
      if ((T = u.value) != null && T.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (D) {
          console.error("Failed to copy path:", D);
        }
    }
    async function R() {
      var T;
      if ((T = u.value) != null && T.path) {
        c.value = !0;
        try {
          const D = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!D.ok)
            throw new Error(`Download failed: ${D.statusText}`);
          const O = await D.blob(), W = URL.createObjectURL(O), I = u.value.path.split("/").pop() || "environment-export.tar.gz", E = document.createElement("a");
          E.href = W, E.download = I, document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(W);
        } catch (D) {
          console.error("Failed to download:", D), alert(`Download failed: ${D instanceof Error ? D.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (T, D) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (O) => d.value = !0)
          })
        ]),
        content: h(() => [
          S(ut, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", U3, [
                D[7] || (D[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", z3, [
                  S(Qo, {
                    modelValue: a.value,
                    "onUpdate:modelValue": D[1] || (D[1] = (O) => a.value = O),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", F3, [
                  S(pe, {
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
          u.value ? (n(), L(ut, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              S(Dt, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, so({
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
                    S(vt, { label: "Saved to:" }, {
                      default: h(() => [
                        S(o3, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (n(), L(vt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", V3, [...D[8] || (D[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: R
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
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: M
                    }, {
                      default: h(() => [...D[10] || (D[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(pe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: D[2] || (D[2] = (O) => u.value = null)
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
      S(is, {
        show: d.value,
        title: "What Gets Exported",
        onClose: D[3] || (D[3] = (O) => d.value = !1)
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
      v.value && m.value ? (n(), L(Kr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: D[4] || (D[4] = (O) => v.value = !1),
        onCommitted: C
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (n(), L(qr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: k,
        onCancel: D[5] || (D[5] = (O) => g.value = !1),
        onRevalidate: b
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), W3 = /* @__PURE__ */ ye(B3, [["__scopeId", "data-v-ddeffd68"]]), G3 = { class: "file-input-wrapper" }, j3 = ["accept", "multiple", "disabled"], H3 = /* @__PURE__ */ ge({
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
      const d = u.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return s({
      triggerInput: r
    }), (u, d) => (n(), i("div", G3, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, j3),
      S(pe, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          Ke(u.$slots, "default", {}, () => [
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
}), K3 = /* @__PURE__ */ ye(H3, [["__scopeId", "data-v-cd192091"]]), q3 = {
  key: 0,
  class: "drop-zone-empty"
}, Y3 = { class: "drop-zone-text" }, J3 = { class: "drop-zone-primary" }, Q3 = { class: "drop-zone-secondary" }, X3 = { class: "drop-zone-actions" }, Z3 = {
  key: 1,
  class: "drop-zone-file"
}, e5 = { class: "file-info" }, t5 = { class: "file-details" }, s5 = { class: "file-name" }, o5 = { class: "file-size" }, n5 = /* @__PURE__ */ ge({
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
    const o = s, a = _(!1), l = _(null), r = _(0), c = z(() => l.value !== null), u = z(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = z(() => {
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
      var M;
      b.stopPropagation(), r.value = 0, a.value = !1;
      const x = (M = b.dataTransfer) == null ? void 0 : M.files;
      x && x.length > 0 && k(x[0]);
    }
    function p(b) {
      b.length > 0 && k(b[0]);
    }
    function k(b) {
      l.value = b, o("fileSelected", b);
    }
    function C() {
      l.value = null, o("clear");
    }
    return (b, x) => (n(), i("div", {
      class: Se(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: ct(m, ["prevent"]),
      onDragover: ct(v, ["prevent"]),
      onDragleave: ct(g, ["prevent"]),
      onDrop: ct(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", Z3, [
        t("div", e5, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", t5, [
            t("div", s5, f(u.value), 1),
            t("div", o5, f(d.value), 1)
          ])
        ]),
        S(pe, {
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
      ])) : (n(), i("div", q3, [
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
        t("div", Y3, [
          t("p", J3, f(e.primaryText), 1),
          t("p", Q3, f(e.secondaryText), 1)
        ]),
        t("div", X3, [
          S(K3, {
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
}), a5 = /* @__PURE__ */ ye(n5, [["__scopeId", "data-v-0f79cb86"]]), l5 = { class: "import-preview" }, i5 = { class: "preview-header" }, r5 = {
  key: 0,
  class: "source-env"
}, c5 = { class: "preview-content" }, u5 = { class: "preview-section" }, d5 = { class: "section-header" }, f5 = { class: "section-info" }, m5 = { class: "section-count" }, v5 = {
  key: 0,
  class: "item-list"
}, p5 = { class: "item-name" }, g5 = {
  key: 0,
  class: "item-more"
}, h5 = { class: "preview-section" }, y5 = { class: "section-header" }, w5 = { class: "section-info" }, k5 = { class: "section-count" }, _5 = {
  key: 0,
  class: "item-list"
}, b5 = { class: "item-details" }, $5 = { class: "item-name" }, C5 = { class: "item-meta" }, x5 = {
  key: 0,
  class: "item-more"
}, S5 = { class: "preview-section" }, I5 = { class: "section-header" }, E5 = { class: "section-info" }, T5 = { class: "section-count" }, R5 = {
  key: 0,
  class: "item-list"
}, P5 = { class: "item-name" }, M5 = {
  key: 0,
  class: "item-more"
}, D5 = {
  key: 0,
  class: "preview-section"
}, L5 = { class: "git-info" }, A5 = /* @__PURE__ */ ge({
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
    const s = e, o = z(() => s.workflows.length), a = z(() => s.models.length), l = z(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", l5, [
      t("div", i5, [
        S(Vt, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", r5, [
          u[1] || (u[1] = $(" From: ", -1)),
          S(Va, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", c5, [
        t("div", u5, [
          t("div", d5, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", f5, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", m5, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", v5, [
            (n(!0), i(H, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", p5, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", g5, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", h5, [
          t("div", y5, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", w5, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", k5, f(a.value) + " file" + f(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", _5, [
            (n(!0), i(H, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", b5, [
                t("span", $5, f(d.filename), 1),
                t("span", C5, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", x5, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", S5, [
          t("div", I5, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", E5, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", T5, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", R5, [
            (n(!0), i(H, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", P5, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", M5, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", D5, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", L5, [
            e.gitBranch ? (n(), L(vt, {
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
            e.gitCommit ? (n(), L(vt, {
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
}), N5 = /* @__PURE__ */ ye(A5, [["__scopeId", "data-v-182fe113"]]), O5 = { class: "import-config" }, U5 = { class: "config-container" }, z5 = { class: "config-field" }, F5 = { class: "input-wrapper" }, V5 = ["value"], B5 = {
  key: 0,
  class: "validating-indicator"
}, W5 = {
  key: 1,
  class: "valid-indicator"
}, G5 = {
  key: 0,
  class: "field-error"
}, j5 = { class: "config-field" }, H5 = { class: "strategy-options" }, K5 = ["value", "checked", "onChange"], q5 = { class: "strategy-content" }, Y5 = { class: "strategy-label" }, J5 = { class: "strategy-description" }, Q5 = { class: "config-field switch-field" }, X5 = { class: "switch-label" }, Z5 = ["checked"], eS = { class: "advanced-section" }, tS = { class: "advanced-content" }, sS = { class: "config-field" }, oS = ["value"], nS = ["value"], aS = /* @__PURE__ */ ge({
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
    ft(() => o.nameError, (v) => {
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
    return (v, g) => (n(), i("div", O5, [
      S(Vt, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", U5, [
        t("div", z5, [
          S(Dn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", F5, [
            t("input", {
              type: "text",
              class: Se(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, V5),
            l.value ? (n(), i("span", B5, "...")) : r.value ? (n(), i("span", W5, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", G5, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", j5, [
          S(Dn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", H5, [
            (n(), i(H, null, he(c, (w) => t("label", {
              key: w.value,
              class: Se(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => a("update:modelStrategy", w.value)
              }, null, 40, K5),
              t("div", q5, [
                t("span", Y5, f(w.label), 1),
                t("span", J5, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", Q5, [
          t("label", X5, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, Z5),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", eS, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", tS, [
            t("div", sS, [
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
                (n(!0), i(H, null, he(We(vl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, nS))), 128))
              ], 40, oS)
            ])
          ])
        ])
      ])
    ]));
  }
}), lS = /* @__PURE__ */ ye(aS, [["__scopeId", "data-v-89ea06a1"]]), iS = { class: "import-flow" }, rS = {
  key: 0,
  class: "import-empty"
}, cS = { class: "git-import-section" }, uS = { class: "git-url-input-row" }, dS = ["disabled"], fS = {
  key: 0,
  class: "git-error"
}, mS = {
  key: 1,
  class: "import-configure"
}, vS = { class: "selected-file-bar" }, pS = {
  key: 0,
  class: "file-bar-content"
}, gS = { class: "file-bar-info" }, hS = { class: "file-bar-name" }, yS = { class: "file-bar-size" }, wS = {
  key: 1,
  class: "file-bar-content"
}, kS = { class: "file-bar-info" }, _S = { class: "file-bar-name" }, bS = {
  key: 0,
  class: "preview-loading"
}, $S = { class: "import-actions" }, CS = {
  key: 2,
  class: "import-progress"
}, xS = { class: "creating-intro" }, SS = {
  key: 0,
  class: "progress-warning"
}, IS = {
  key: 1,
  class: "import-error"
}, ES = { class: "error-message" }, TS = {
  key: 3,
  class: "import-complete"
}, RS = { class: "complete-message" }, PS = { class: "complete-title" }, MS = { class: "complete-details" }, DS = { class: "complete-actions" }, LS = /* @__PURE__ */ ge({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ye, we, oe, de;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = Ze();
    let g = null;
    const w = _(null), p = _(a.resumeImport ?? !1), k = _(!1), C = _(!1), b = _(""), x = _(!1), M = _(null), R = _(""), T = _(null), D = _(!1), O = _(null), W = _(null), I = _({
      name: ((Ye = a.initialProgress) == null ? void 0 : Ye.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = _(null), j = _({
      message: ((we = a.initialProgress) == null ? void 0 : we.message) ?? "Preparing import...",
      phase: ((oe = a.initialProgress) == null ? void 0 : oe.phase) ?? "",
      progress: ((de = a.initialProgress) == null ? void 0 : de.progress) ?? 0,
      error: null
    }), ee = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], B = z(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ve = W.value;
      return {
        sourceEnvironment: ve.comfyui_version ? `ComfyUI ${ve.comfyui_version}` : "Unknown",
        workflows: ve.workflows.map((Ie) => Ie.name),
        models: ve.models.map((Ie) => ({
          filename: Ie.filename,
          size: 0,
          type: Ie.relative_path.split("/")[0] || "model"
        })),
        nodes: ve.nodes.map((Ie) => Ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), A = z(() => !x.value && !M.value && W.value && I.value.name.length > 0 && !E.value && (w.value || T.value));
    async function K(ve) {
      w.value = ve, x.value = !0, M.value = null, W.value = null;
      try {
        const Ie = await r(ve);
        W.value = Ie;
      } catch (Ie) {
        M.value = Ie instanceof Error ? Ie.message : "Failed to analyze file", console.error("Preview error:", Ie);
      } finally {
        x.value = !1;
      }
    }
    function X() {
      w.value = null, T.value = null, R.value = "", O.value = null, k.value = !1, C.value = !1, b.value = "", W.value = null, M.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function F() {
      Ve(), X(), p.value = !1, x.value = !1, D.value = !1, j.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function se() {
      if (R.value.trim()) {
        D.value = !0, O.value = null;
        try {
          const ve = await c(R.value.trim());
          T.value = R.value.trim(), W.value = ve;
        } catch (ve) {
          O.value = ve instanceof Error ? ve.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
        }
      }
    }
    function Y(ve) {
      try {
        const Ie = new URL(ve);
        return Ie.host + Ie.pathname.replace(/\.git$/, "");
      } catch {
        return ve;
      }
    }
    async function ae(ve) {
      if (!ve) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const Ie = await u(ve);
        E.value = Ie.valid ? null : Ie.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function re() {
      if (I.value.name && !(!w.value && !T.value)) {
        p.value = !0, k.value = !1, j.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ve;
          if (w.value)
            ve = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (T.value)
            ve = await m(
              T.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ve.status === "started" ? Pe() : (C.value = !1, b.value = ve.message, p.value = !1, k.value = !0);
        } catch (ve) {
          C.value = !1, b.value = ve instanceof Error ? ve.message : "Unknown error occurred during import", p.value = !1, k.value = !0;
        }
      }
    }
    async function Pe() {
      if (g) return;
      const ve = async () => {
        try {
          const Te = await v();
          return j.value = {
            message: Te.message,
            phase: Te.phase || "",
            progress: Te.progress ?? (Te.state === "importing" ? 50 : 0),
            error: Te.error || null
          }, Te.state === "complete" ? (Ve(), C.value = !0, b.value = `Environment '${Te.environment_name}' created successfully`, p.value = !1, k.value = !0, Te.environment_name && l("import-complete", Te.environment_name, I.value.switchAfterImport), !1) : Te.state === "error" ? (Ve(), C.value = !1, b.value = Te.error || Te.message, p.value = !1, k.value = !0, !1) : !0;
        } catch (Te) {
          return console.error("Failed to poll import progress:", Te), !0;
        }
      };
      await ve() && (g = setInterval(async () => {
        await ve() || Ve();
      }, 2e3));
    }
    function Ve() {
      g && (clearInterval(g), g = null);
    }
    function Oe(ve) {
      return ve < 1024 ? `${ve} B` : ve < 1024 * 1024 ? `${(ve / 1024).toFixed(1)} KB` : ve < 1024 * 1024 * 1024 ? `${(ve / (1024 * 1024)).toFixed(1)} MB` : `${(ve / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const ve = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ve.environment_name), p.value = !0, I.value.name = ve.environment_name || I.value.name || "", j.value = {
          progress: ve.progress ?? 0,
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          error: null
        }, Pe());
      } catch (ve) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ve);
      }
    }), s({
      handleReset: F,
      isImporting: p,
      canImport: A
    }), (ve, Ie) => {
      var Te;
      return n(), i("div", iS, [
        !w.value && !T.value && !p.value ? (n(), i("div", rS, [
          S(a5, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: K
          }),
          Ie[7] || (Ie[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", cS, [
            Ie[5] || (Ie[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", uS, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Ie[0] || (Ie[0] = (Ue) => R.value = Ue),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Jt(se, ["enter"]),
                disabled: D.value
              }, null, 40, dS), [
                [Wt, R.value]
              ]),
              S(pe, {
                variant: "primary",
                size: "sm",
                disabled: !R.value.trim() || D.value,
                onClick: se
              }, {
                default: h(() => [
                  $(f(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            O.value ? (n(), i("div", fS, f(O.value), 1)) : y("", !0),
            Ie[6] || (Ie[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || T.value) && !p.value && !k.value ? (n(), i("div", mS, [
          t("div", vS, [
            w.value ? (n(), i("div", pS, [
              Ie[8] || (Ie[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", gS, [
                t("div", hS, f(w.value.name), 1),
                t("div", yS, f(Oe(w.value.size)), 1)
              ])
            ])) : T.value ? (n(), i("div", wS, [
              Ie[10] || (Ie[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", kS, [
                t("div", _S, f(Y(T.value)), 1),
                Ie[9] || (Ie[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            S(pe, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: h(() => [...Ie[11] || (Ie[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (n(), i("div", bS, [...Ie[12] || (Ie[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (n(), L(Zt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : W.value ? (n(), L(N5, {
            key: 2,
            "source-environment": B.value.sourceEnvironment,
            workflows: B.value.workflows,
            models: B.value.models,
            nodes: B.value.nodes,
            "git-branch": B.value.gitBranch,
            "git-commit": B.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          W.value ? (n(), L(lS, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": Ie[1] || (Ie[1] = (Ue) => I.value.name = Ue),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": Ie[2] || (Ie[2] = (Ue) => I.value.modelStrategy = Ue),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": Ie[3] || (Ie[3] = (Ue) => I.value.torchBackend = Ue),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": Ie[4] || (Ie[4] = (Ue) => I.value.switchAfterImport = Ue),
            "name-error": E.value,
            onValidateName: ae
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Te = W.value) != null && Te.models_needing_download) ? (n(), L(Zt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", $S, [
            S(pe, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: h(() => [...Ie[13] || (Ie[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(pe, {
              variant: "primary",
              size: "md",
              disabled: !A.value,
              onClick: re
            }, {
              default: h(() => [...Ie[14] || (Ie[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (n(), i("div", CS, [
          t("p", xS, [
            Ie[15] || (Ie[15] = $(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            Ie[16] || (Ie[16] = $("... ", -1))
          ]),
          S(jn, {
            progress: j.value.progress,
            message: j.value.message,
            "current-phase": j.value.phase,
            variant: j.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          j.value.error ? y("", !0) : (n(), i("p", SS, " This may take several minutes. Please wait... ")),
          j.value.error ? (n(), i("div", IS, [
            t("p", ES, f(j.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (n(), i("div", TS, [
          t("div", {
            class: Se(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", RS, [
            t("div", PS, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", MS, f(b.value), 1)
          ]),
          t("div", DS, [
            S(pe, {
              variant: "primary",
              size: "md",
              onClick: F
            }, {
              default: h(() => [...Ie[17] || (Ie[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Yr = /* @__PURE__ */ ye(LS, [["__scopeId", "data-v-72cbc04e"]]), AS = /* @__PURE__ */ ge({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = _(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
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
      S(is, {
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
}), NS = /* @__PURE__ */ ye(AS, [["__scopeId", "data-v-e13bfe76"]]), xn = yo(), OS = 5e3, po = _([]), xa = _(!1), Sa = _(null);
let Uo = null;
async function Sn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Jr(e) {
  const s = z(
    () => po.value.filter((p) => p.status === "running")
  ), o = z(
    () => po.value.filter((p) => p.status === "deploying")
  ), a = z(
    () => po.value.filter((p) => p.status === "stopped")
  ), l = z(
    () => s.value.length + o.value.length
  ), r = z(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...po.value].sort(
      (k, C) => (p[k.status] ?? 5) - (p[C.status] ?? 5)
    );
  });
  async function c() {
    xa.value = !0, Sa.value = null;
    try {
      let p;
      if (!xn) {
        const k = await Sn("/v2/comfygit/deploy/instances");
        if (!k.ok)
          throw new Error(`Failed to fetch instances: ${k.status}`);
        p = await k.json();
      }
      po.value = p.instances;
    } catch (p) {
      Sa.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      xa.value = !1;
    }
  }
  function u(p, k) {
    if (p.provider === "custom" && p.worker_name) {
      const C = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return k === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${C}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${C}/${k}`;
    }
    return k === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${k}`;
  }
  async function d(p) {
    try {
      if (!xn) {
        const k = u(p, "stop"), C = await Sn(k, { method: "POST" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] stopInstance error:", k), k;
    }
  }
  async function m(p) {
    try {
      if (!xn) {
        const k = u(p, "start"), C = await Sn(k, { method: "POST" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to start instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] startInstance error:", k), k;
    }
  }
  async function v(p) {
    try {
      if (!xn) {
        const k = u(p, "terminate"), C = await Sn(k, { method: "DELETE" });
        if (!C.ok) {
          const b = await C.json();
          throw new Error(b.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (k) {
      throw console.error("[useDeployInstances] terminateInstance error:", k), k;
    }
  }
  function g() {
    Uo || (Uo = window.setInterval(c, OS));
  }
  function w() {
    Uo && (clearInterval(Uo), Uo = null);
  }
  return ft(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: po,
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
const US = { class: "instance-header" }, zS = { class: "provider-badge" }, FS = { class: "instance-name" }, VS = {
  key: 0,
  class: "spinner"
}, BS = { class: "instance-details" }, WS = {
  key: 0,
  class: "detail"
}, GS = {
  key: 1,
  class: "detail instance-url"
}, jS = {
  key: 2,
  class: "detail"
}, HS = {
  key: 3,
  class: "detail"
}, KS = {
  key: 4,
  class: "detail total-cost"
}, qS = {
  key: 0,
  class: "deployment-progress"
}, YS = { class: "progress-message" }, JS = { class: "instance-actions" }, QS = /* @__PURE__ */ ge({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = z(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), a = z(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = z(() => `status-${s.instance.status}`);
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
      class: Se(["instance-card", l.value])
    }, [
      t("div", US, [
        t("span", zS, f(o.value), 1),
        t("span", FS, f(e.instance.name), 1),
        t("span", {
          class: Se(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", VS)) : y("", !0),
          $(" " + f(a.value), 1)
        ], 2)
      ]),
      t("div", BS, [
        e.instance.gpu_type ? (n(), i("span", WS, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", GS, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", jS, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", HS, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", KS, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", qS, [
        t("div", YS, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), L(ia, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", JS, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), L(pe, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), L(pe, {
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
        e.instance.status === "running" ? (n(), L(pe, {
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
        e.instance.status === "stopped" ? (n(), L(pe, {
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
        S(pe, {
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
}), XS = /* @__PURE__ */ ye(QS, [["__scopeId", "data-v-746c3894"]]), ZS = { class: "instances-tab" }, e8 = { class: "instances-header" }, t8 = {
  key: 0,
  class: "loading-state"
}, s8 = {
  key: 1,
  class: "empty-state"
}, o8 = {
  key: 2,
  class: "instances-list"
}, n8 = /* @__PURE__ */ ge({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = z(() => {
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
    return (a, l) => (n(), i("div", ZS, [
      t("div", e8, [
        S(Vt, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(pe, {
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
      e.isLoading && e.instances.length === 0 ? (n(), i("div", t8, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", s8, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", o8, [
        (n(!0), i(H, null, he(o.value, (r) => (n(), L(XS, {
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
}), a8 = /* @__PURE__ */ ye(n8, [["__scopeId", "data-v-ba614fc3"]]), l8 = { class: "remote-header" }, i8 = { class: "remote-info" }, r8 = { class: "remote-icon" }, c8 = { class: "remote-name" }, u8 = {
  key: 0,
  class: "default-badge"
}, d8 = {
  key: 1,
  class: "sync-badge"
}, f8 = {
  key: 0,
  class: "ahead"
}, m8 = {
  key: 1,
  class: "behind"
}, v8 = {
  key: 1,
  class: "synced"
}, p8 = ["href"], g8 = {
  key: 1,
  class: "remote-url-text"
}, h8 = { class: "remote-actions" }, y8 = /* @__PURE__ */ ge({
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
    const s = e, o = z(() => s.remote.is_default), a = z(() => {
      const r = s.remote.fetch_url, c = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = z(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, c) => (n(), i("div", {
      class: Se(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", l8, [
        t("div", i8, [
          t("span", r8, f(o.value ? "🔗" : "🌐"), 1),
          t("span", c8, f(e.remote.name), 1),
          o.value ? (n(), i("span", u8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", d8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", f8, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", m8, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", v8, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = ct(() => {
          }, ["stop"]))
        }, f(l.value), 9, p8)) : (n(), i("span", g8, f(l.value), 1))
      ]),
      t("div", h8, [
        S(pe, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), L(pe, {
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
        S(pe, {
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
}), Qr = /* @__PURE__ */ ye(y8, [["__scopeId", "data-v-d687d161"]]), w8 = { class: "runpod-tab" }, k8 = { class: "api-key-card" }, _8 = { class: "api-key-row" }, b8 = { class: "api-key-input-wrapper" }, $8 = ["type", "disabled"], C8 = ["title"], x8 = { class: "status-icon" }, S8 = { class: "status-text" }, I8 = {
  key: 0,
  class: "credit-balance"
}, E8 = { class: "config-card" }, T8 = { class: "config-row" }, R8 = ["disabled"], P8 = {
  key: 0,
  value: ""
}, M8 = {
  key: 1,
  value: "",
  disabled: ""
}, D8 = ["value", "disabled"], L8 = { class: "config-row" }, A8 = {
  key: 0,
  class: "loading-inline"
}, N8 = { class: "no-volumes-state" }, O8 = { class: "no-volumes-text" }, U8 = ["value"], z8 = { class: "config-row" }, F8 = ["disabled"], V8 = {
  key: 0,
  value: ""
}, B8 = {
  key: 1,
  value: ""
}, W8 = {
  key: 2,
  value: ""
}, G8 = ["value"], j8 = { class: "config-row" }, H8 = { class: "radio-group" }, K8 = { class: "radio-option" }, q8 = { class: "radio-label" }, Y8 = { class: "radio-option disabled" }, J8 = { class: "radio-label" }, Q8 = { class: "config-row" }, X8 = { class: "radio-group" }, Z8 = { class: "radio-option" }, e4 = { class: "radio-label" }, t4 = { class: "radio-option disabled" }, s4 = { class: "radio-label" }, o4 = { class: "config-row" }, n4 = {
  key: 0,
  class: "loading-text"
}, a4 = {
  key: 1,
  class: "empty-remotes"
}, l4 = { class: "remotes-list" }, i4 = {
  key: 0,
  class: "sync-warning"
}, r4 = { class: "warning-content" }, c4 = { class: "remotes-footer" }, u4 = { class: "summary-card" }, d4 = {
  key: 0,
  class: "loading-text"
}, f4 = { class: "summary-row" }, m4 = { class: "summary-value" }, v4 = { class: "summary-row" }, p4 = { class: "summary-value" }, g4 = { class: "summary-row" }, h4 = { class: "summary-value" }, y4 = {
  key: 0,
  class: "summary-sub-row"
}, w4 = { class: "summary-sub-label" }, k4 = {
  key: 1,
  class: "summary-sub-row warning"
}, _4 = { class: "summary-sub-label" }, b4 = { class: "summary-row" }, $4 = { class: "summary-value" }, C4 = { class: "summary-row" }, x4 = { class: "summary-value" }, S4 = { class: "deployment-summary" }, I4 = { class: "summary-columns" }, E4 = { class: "summary-column" }, T4 = { class: "pricing-row" }, R4 = { class: "pricing-value" }, P4 = { class: "pricing-row" }, M4 = { class: "pricing-value" }, D4 = { class: "pricing-row" }, L4 = { class: "pricing-value" }, A4 = { class: "pricing-row total" }, N4 = { class: "pricing-value" }, O4 = { class: "summary-column" }, U4 = { class: "spec-row" }, z4 = { class: "spec-row" }, F4 = {
  key: 0,
  class: "spec-row"
}, V4 = {
  key: 1,
  class: "spec-row spot-warning"
}, B4 = {
  key: 4,
  class: "deploy-actions"
}, W4 = { class: "progress-content" }, G4 = { class: "phase-indicator" }, j4 = { key: 0 }, H4 = { key: 1 }, K4 = { key: 2 }, q4 = {
  key: 3,
  class: "spinner"
}, Y4 = { class: "phase-text" }, J4 = { class: "phase-name" }, Q4 = { class: "phase-detail" }, X4 = {
  key: 0,
  class: "ready-actions"
}, Z4 = { class: "console-link" }, e6 = ["href"], t6 = /* @__PURE__ */ ge({
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
      fetchRemote: k,
      pushToRemote: C,
      getDataCenters: b
    } = Ze(), x = _(!1), M = _(""), R = _(!1), T = _(!1), D = _(null), O = _(null), W = _(""), I = _(""), E = _(""), j = _("SECURE"), ee = _("ON_DEMAND"), B = _("my-comfyui-deploy"), A = _([]), K = _({}), X = _(!1), F = _(null), se = _(null), Y = _(null), ae = _([]), re = _(!1), Pe = _([]), Ve = _(!1), Oe = _([]), Ye = _(!1), we = _(null), oe = _(!1), de = _(!1), ve = _(null), Ie = _(!1), Te = _(null), Ue = _(null), U = _(null), P = _(!1), V = _(null), Z = _(!1), ne = _(!1), fe = z(() => Pe.value.find((xe) => xe.id === I.value) || null), _e = z(() => W.value ? Pe.value.filter((xe) => xe.data_center_id === W.value) : Pe.value), ie = z(() => Oe.value.filter((xe) => xe.available)), be = z(() => F.value && K.value[F.value] || null), ce = z(() => {
      if (!F.value) return null;
      const xe = A.value.find((te) => te.name === F.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), De = z(() => R.value && I.value && E.value && ce.value && !de.value && !P.value), Ee = (xe) => {
      const te = Oe.value.find((yt) => yt.id === E.value);
      if (!te) return "0.00";
      if (xe === "SECURE") return (te.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (te.communityPrice ?? 0).toFixed(2);
      const Ge = j.value === "SECURE";
      return xe === "ON_DEMAND" ? Ge ? (te.securePrice ?? 0).toFixed(2) : (te.communityPrice ?? 0).toFixed(2) : Ge ? (te.secureSpotPrice ?? 0).toFixed(2) : (te.communitySpotPrice ?? 0).toFixed(2);
    }, ue = z(() => {
      const xe = Oe.value.find((_t) => _t.id === E.value), te = Pe.value.find((_t) => _t.id === I.value);
      if (!xe) return null;
      const Ge = j.value === "SECURE", yt = ee.value === "SPOT";
      let Nt;
      yt ? Nt = Ge ? xe.secureSpotPrice ?? 0 : xe.communitySpotPrice ?? 0 : Nt = Ge ? xe.securePrice ?? 0 : xe.communityPrice ?? 0;
      const jt = te ? te.size_gb * 14e-5 : 0, ys = 4e-3;
      return {
        gpu: Nt,
        volume: jt,
        container: ys,
        total: Nt + jt + ys
      };
    });
    async function G() {
      await ze(), await Promise.all([Et(), Me()]);
    }
    async function Me() {
      X.value = !0;
      try {
        const xe = await w();
        A.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (Ge) => {
            const yt = await p(Ge.name);
            yt && (K.value[Ge.name] = yt);
          })
        );
        const te = xe.remotes.find((Ge) => Ge.is_default);
        te ? F.value = te.name : xe.remotes.length > 0 && (F.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function Ce(xe) {
      se.value = xe;
      try {
        await k(xe);
        const te = await p(xe);
        te && (K.value[xe] = te), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        se.value = null;
      }
    }
    async function $e(xe) {
      Y.value = xe;
      try {
        await C(xe, { force: !1 });
        const te = await p(xe);
        te && (K.value[xe] = te), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        Y.value = null;
      }
    }
    function J(xe) {
      F.value = xe;
    }
    async function N() {
      if (M.value) {
        T.value = !0, D.value = null;
        try {
          const xe = await l(M.value, !0);
          xe.status === "success" ? (R.value = !0, O.value = xe.credit_balance ?? null, D.value = { type: "success", message: xe.message }, await G()) : D.value = { type: "error", message: xe.message };
        } catch (xe) {
          D.value = {
            type: "error",
            message: xe instanceof Error ? xe.message : "Connection test failed"
          };
        } finally {
          T.value = !1;
        }
      }
    }
    async function me() {
      try {
        await v(), M.value = "", R.value = !1, D.value = null, O.value = null, ae.value = [], W.value = "", Pe.value = [], I.value = "", Oe.value = [], E.value = "", we.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function ze() {
      Ve.value = !0, re.value = !0;
      try {
        const xe = await r();
        Pe.value = xe.volumes;
        const te = /* @__PURE__ */ new Map();
        for (const Ge of xe.volumes)
          Ge.data_center_id && !te.has(Ge.data_center_id) && te.set(Ge.data_center_id, {
            id: Ge.data_center_id,
            name: Ge.data_center_name || Ge.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const Ge = await b();
          ae.value = Ge.data_centers;
        } else
          ae.value = Array.from(te.values());
        if (Pe.value.length > 0) {
          const Ge = Pe.value[0];
          I.value = Ge.id, Ge.data_center_id && (W.value = Ge.data_center_id, await et(Ge.data_center_id));
        } else ae.value.length > 0 && (W.value = ae.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ve.value = !1, re.value = !1;
      }
    }
    async function et(xe) {
      Ye.value = !0;
      try {
        const te = await c(xe);
        Oe.value = te.gpu_types;
        const Ge = Oe.value.find((yt) => yt.available);
        Ge ? E.value = Ge.id : E.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ye.value = !1;
      }
    }
    ft(W, async (xe) => {
      if (!xe || Ve.value) return;
      const te = Pe.value.find((Ge) => Ge.id === I.value);
      te && te.data_center_id !== xe && (I.value = ""), await et(xe);
    }), ft(I, async (xe) => {
      if (!xe) {
        Oe.value = [], E.value = "";
        return;
      }
      if (Ve.value) return;
      const te = Pe.value.find((Ge) => Ge.id === xe);
      te && te.data_center_id !== W.value ? W.value = te.data_center_id : te && await et(te.data_center_id);
    });
    async function Et() {
      oe.value = !0;
      try {
        we.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        oe.value = !1;
      }
    }
    async function at() {
      if (!(!E.value || !I.value)) {
        P.value = !0, ve.value = null;
        try {
          const xe = await g();
          V.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? ne.value = !0 : await lt() : Z.value = !0;
        } catch (xe) {
          ve.value = {
            status: "error",
            message: xe instanceof Error ? xe.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          P.value = !1;
        }
      }
    }
    async function pt() {
      ne.value = !1, await lt();
    }
    async function Ut() {
      try {
        const xe = await g();
        V.value = xe;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function lt() {
      de.value = !0;
      try {
        let xe;
        if (ee.value === "SPOT") {
          const Ge = Oe.value.find((yt) => yt.id === E.value);
          Ge && (xe = j.value === "SECURE" ? Ge.secureSpotPrice : Ge.communitySpotPrice);
        }
        const te = await u({
          gpu_type_id: E.value,
          pod_name: B.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: j.value,
          pricing_type: ee.value,
          spot_bid: xe,
          import_source: ce.value
        });
        ve.value = te, te.status === "success" && te.pod_id ? (Te.value = te.pod_id, Ie.value = !0, Mo(te.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", te.message, "error");
      } catch (xe) {
        ve.value = {
          status: "error",
          message: xe instanceof Error ? xe.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        de.value = !1;
      }
    }
    function Mo(xe) {
      oo(xe), U.value = window.setInterval(() => oo(xe), 3e3);
    }
    function Ps() {
      U.value && (clearInterval(U.value), U.value = null);
    }
    async function oo(xe) {
      try {
        const te = await d(xe);
        Ue.value = te, (te.phase === "READY" || te.phase === "ERROR" || te.phase === "STOPPED") && (Ps(), te.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (te) {
        console.error("Failed to poll deployment status:", te);
      }
    }
    function no() {
      Ie.value = !1, Ps(), Te.value = null, Ue.value = null;
    }
    function Do() {
      var xe;
      (xe = Ue.value) != null && xe.comfyui_url && window.open(Ue.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Lo(xe) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[xe || ""] || "Initializing...";
    }
    function hs(xe) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[xe || ""] ?? 10;
    }
    return Qe(async () => {
      try {
        const xe = await m(!0);
        xe.has_key && xe.key_preview && (M.value = `****${xe.key_preview}`, xe.valid ? (R.value = !0, O.value = xe.credit_balance ?? null, D.value = { type: "success", message: "Connected to RunPod" }, await G()) : xe.error && (D.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), Gs(() => {
      Ps();
    }), (xe, te) => {
      var Ge, yt, Nt, jt, ys, _t;
      return n(), i(H, null, [
        t("div", w8, [
          S(ut, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", k8, [
                t("div", _8, [
                  t("div", b8, [
                    qe(t("input", {
                      "onUpdate:modelValue": te[0] || (te[0] = (Ne) => M.value = Ne),
                      type: x.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: R.value
                    }, null, 8, $8), [
                      [aa, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: te[1] || (te[1] = (Ne) => x.value = !x.value),
                      title: x.value ? "Hide key" : "Show key"
                    }, f(x.value ? "👁" : "👁‍🗨"), 9, C8)
                  ]),
                  R.value ? y("", !0) : (n(), L(pe, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: T.value,
                    disabled: !M.value || T.value,
                    onClick: N
                  }, {
                    default: h(() => [...te[16] || (te[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  R.value ? (n(), L(pe, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: me
                  }, {
                    default: h(() => [...te[17] || (te[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                D.value ? (n(), i("div", {
                  key: 0,
                  class: Se(["connection-status", D.value.type])
                }, [
                  t("span", x8, f(D.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", S8, f(D.value.message), 1),
                  O.value !== null ? (n(), i("span", I8, " $" + f(O.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                te[18] || (te[18] = t("div", { class: "api-key-help" }, [
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
          R.value ? (n(), L(ut, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", E8, [
                t("div", T8, [
                  te[19] || (te[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": te[2] || (te[2] = (Ne) => W.value = Ne),
                    class: "config-select",
                    disabled: re.value
                  }, [
                    re.value ? (n(), i("option", P8, "Loading...")) : W.value ? y("", !0) : (n(), i("option", M8, "Select a region")),
                    (n(!0), i(H, null, he(ae.value, (Ne) => (n(), i("option", {
                      key: Ne.id,
                      value: Ne.id,
                      disabled: !Ne.available
                    }, f(Ne.id) + " (" + f(Ne.name) + ")" + f(Ne.available ? "" : " [Unavailable]"), 9, D8))), 128))
                  ], 8, R8), [
                    [gs, W.value]
                  ])
                ]),
                t("div", L8, [
                  te[24] || (te[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ve.value ? (n(), i("div", A8, "Loading volumes...")) : _e.value.length === 0 ? (n(), i(H, { key: 1 }, [
                    t("div", N8, [
                      te[20] || (te[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", O8, "No volumes in " + f(W.value || "this region"), 1)
                    ]),
                    te[21] || (te[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    te[22] || (te[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(H, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": te[3] || (te[3] = (Ne) => I.value = Ne),
                      class: "config-select"
                    }, [
                      (n(!0), i(H, null, he(_e.value, (Ne) => (n(), i("option", {
                        key: Ne.id,
                        value: Ne.id
                      }, f(Ne.name) + " (" + f(Ne.size_gb) + "GB) ", 9, U8))), 128))
                    ], 512), [
                      [gs, I.value]
                    ]),
                    te[23] || (te[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", z8, [
                  te[25] || (te[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": te[4] || (te[4] = (Ne) => E.value = Ne),
                    class: "config-select",
                    disabled: Ye.value || !I.value
                  }, [
                    I.value ? Ye.value ? (n(), i("option", B8, "Loading GPUs...")) : ie.value.length === 0 ? (n(), i("option", W8, "No GPUs available in this region")) : y("", !0) : (n(), i("option", V8, "Select a volume first")),
                    (n(!0), i(H, null, he(ie.value, (Ne) => (n(), i("option", {
                      key: Ne.id,
                      value: Ne.id
                    }, f(Ne.displayName) + " (" + f(Ne.memoryInGb) + "GB) - $" + f(j.value === "SECURE" ? (Ne.securePrice ?? 0).toFixed(2) : (Ne.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ne.stockStatus ? `[${Ne.stockStatus}]` : ""), 9, G8))), 128))
                  ], 8, F8), [
                    [gs, E.value]
                  ])
                ]),
                t("div", j8, [
                  te[26] || (te[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", H8, [
                    t("label", K8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[5] || (te[5] = (Ne) => j.value = Ne),
                        value: "SECURE"
                      }, null, 512), [
                        [ts, j.value]
                      ]),
                      t("span", q8, "Secure ($" + f(Ee("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", Y8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[6] || (te[6] = (Ne) => j.value = Ne),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ts, j.value]
                      ]),
                      t("span", J8, "Community ($" + f(Ee("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", Q8, [
                  te[27] || (te[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", X8, [
                    t("label", Z8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[7] || (te[7] = (Ne) => ee.value = Ne),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ts, ee.value]
                      ]),
                      t("span", e4, "On-Demand ($" + f(Ee("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", t4, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[8] || (te[8] = (Ne) => ee.value = Ne),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ts, ee.value]
                      ]),
                      t("span", s4, "Spot ($" + f(Ee("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", o4, [
                  te[28] || (te[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": te[9] || (te[9] = (Ne) => B.value = Ne),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Wt, B.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          R.value ? (n(), L(ut, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              X.value ? (n(), i("div", n4, "Loading remotes...")) : A.value.length === 0 ? (n(), i("div", a4, [
                te[30] || (te[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(pe, {
                  variant: "primary",
                  size: "xs",
                  onClick: te[10] || (te[10] = (Ne) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...te[29] || (te[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(H, { key: 2 }, [
                t("div", l4, [
                  (n(!0), i(H, null, he(A.value, (Ne) => (n(), L(Qr, {
                    key: Ne.name,
                    remote: Ne,
                    "sync-status": K.value[Ne.name],
                    "is-selected": F.value === Ne.name,
                    "is-fetching": se.value === Ne.name,
                    "is-pushing": Y.value === Ne.name,
                    onFetch: Ce,
                    onPush: $e,
                    onSelect: J
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                be.value && be.value.ahead > 0 ? (n(), i("div", i4, [
                  te[31] || (te[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", r4, [
                    t("strong", null, f(be.value.ahead) + " unpushed commit" + f(be.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(F.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(pe, {
                    variant: "primary",
                    size: "xs",
                    loading: Y.value === F.value,
                    onClick: te[11] || (te[11] = (Ne) => F.value && $e(F.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(F.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", c4, [
                  S(pe, {
                    variant: "link",
                    size: "xs",
                    onClick: te[12] || (te[12] = (Ne) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...te[32] || (te[32] = [
                      $(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          R.value ? (n(), L(ut, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", u4, [
                oe.value ? (n(), i("div", d4, "Loading environment summary...")) : we.value ? (n(), i(H, { key: 1 }, [
                  t("div", f4, [
                    te[33] || (te[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", m4, f(we.value.comfyui_version), 1)
                  ]),
                  t("div", v4, [
                    te[34] || (te[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", p4, f(we.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", g4, [
                    te[35] || (te[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", h4, f(we.value.model_count) + " models", 1)
                  ]),
                  we.value.models_with_sources > 0 ? (n(), i("div", y4, [
                    t("span", w4, "└─ " + f(we.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  we.value.models_without_sources > 0 ? (n(), i("div", k4, [
                    t("span", _4, "└─ " + f(we.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", b4, [
                    te[36] || (te[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", $4, f(we.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", C4, [
                    te[37] || (te[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", x4, "~" + f(we.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          R.value && ue.value ? (n(), L(ut, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ne, Xt;
              return [
                t("div", S4, [
                  t("div", I4, [
                    t("div", E4, [
                      te[42] || (te[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", T4, [
                        te[38] || (te[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", R4, "$" + f(ue.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", P4, [
                        te[39] || (te[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", M4, "$" + f(ue.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", D4, [
                        te[40] || (te[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", L4, "$" + f(ue.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      te[43] || (te[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", A4, [
                        te[41] || (te[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", N4, "~$" + f(ue.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", O4, [
                      te[45] || (te[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", U4, [
                        t("span", null, f(((Ne = Oe.value.find((rs) => rs.id === E.value)) == null ? void 0 : Ne.displayName) || "GPU") + " (" + f(((Xt = Oe.value.find((rs) => rs.id === E.value)) == null ? void 0 : Xt.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", z4, [
                        t("span", null, "Region: " + f(W.value), 1)
                      ]),
                      fe.value ? (n(), i("div", F4, [
                        t("span", null, "Volume: " + f(fe.value.name), 1)
                      ])) : y("", !0),
                      ee.value === "SPOT" ? (n(), i("div", V4, [...te[44] || (te[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          R.value ? (n(), i("div", B4, [
            S(pe, {
              variant: "primary",
              size: "md",
              loading: P.value || de.value,
              disabled: !De.value,
              onClick: at
            }, {
              default: h(() => [
                te[46] || (te[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                $(" " + f(P.value ? "Validating..." : de.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ve.value ? (n(), L(ut, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              S(Dt, {
                status: ve.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  $(f(ve.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(ve.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(ve.value.message), 1)
                ]),
                actions: h(() => [
                  S(pe, {
                    variant: "ghost",
                    size: "xs",
                    onClick: te[13] || (te[13] = (Ne) => ve.value = null)
                  }, {
                    default: h(() => [...te[47] || (te[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ve.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    S(vt, {
                      label: "Pod ID:",
                      value: ve.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        Ie.value ? (n(), L(dt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ge = Ue.value) == null ? void 0 : Ge.phase) === "READY" || ((yt = Ue.value) == null ? void 0 : yt.phase) === "ERROR" || ((Nt = Ue.value) == null ? void 0 : Nt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var Ne, Xt, rs, ao, lo, io, js, ro, co, uo, fo, mo;
            return [
              t("div", W4, [
                t("div", G4, [
                  t("div", {
                    class: Se(["phase-icon", (Xt = (Ne = Ue.value) == null ? void 0 : Ne.phase) == null ? void 0 : Xt.toLowerCase()])
                  }, [
                    ((rs = Ue.value) == null ? void 0 : rs.phase) === "READY" ? (n(), i("span", j4, "✓")) : ((ao = Ue.value) == null ? void 0 : ao.phase) === "ERROR" ? (n(), i("span", H4, "✕")) : ((lo = Ue.value) == null ? void 0 : lo.phase) === "STOPPED" ? (n(), i("span", K4, "○")) : (n(), i("span", q4, "⟳"))
                  ], 2),
                  t("div", Y4, [
                    t("div", J4, f(Lo((io = Ue.value) == null ? void 0 : io.phase)), 1),
                    t("div", Q4, f(((js = Ue.value) == null ? void 0 : js.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(ia, {
                  progress: hs((ro = Ue.value) == null ? void 0 : ro.phase),
                  variant: ((co = Ue.value) == null ? void 0 : co.phase) === "ERROR" ? "error" : ((uo = Ue.value) == null ? void 0 : uo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((fo = Ue.value) == null ? void 0 : fo.phase) === "READY" ? (n(), i("div", X4, [
                  S(pe, {
                    variant: "primary",
                    size: "md",
                    onClick: Do
                  }, {
                    default: h(() => [...te[48] || (te[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", Z4, [
                  (mo = Ue.value) != null && mo.console_url ? (n(), i("a", {
                    key: 0,
                    href: Ue.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, e6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((jt = Ue.value) == null ? void 0 : jt.phase) === "READY" || ((ys = Ue.value) == null ? void 0 : ys.phase) === "ERROR" || ((_t = Ue.value) == null ? void 0 : _t.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              S(pe, {
                variant: "ghost",
                size: "xs",
                onClick: no
              }, {
                default: h(() => [...te[49] || (te[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        Z.value && V.value ? (n(), L(Kr, {
          key: 1,
          issues: V.value.blocking_issues,
          onClose: te[14] || (te[14] = (Ne) => Z.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ne.value && V.value ? (n(), L(qr, {
          key: 2,
          models: V.value.warnings.models_without_sources,
          onConfirm: pt,
          onCancel: te[15] || (te[15] = (Ne) => ne.value = !1),
          onRevalidate: Ut
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), s6 = /* @__PURE__ */ ye(t6, [["__scopeId", "data-v-522cd4d9"]]), o6 = { class: "worker-header" }, n6 = { class: "worker-status" }, a6 = { class: "worker-name" }, l6 = { class: "worker-actions" }, i6 = { class: "worker-details" }, r6 = { class: "detail-item" }, c6 = { class: "detail-value" }, u6 = {
  key: 0,
  class: "detail-item"
}, d6 = { class: "detail-value" }, f6 = {
  key: 1,
  class: "detail-item"
}, m6 = { class: "detail-value mode-badge" }, v6 = {
  key: 0,
  class: "worker-stats"
}, p6 = {
  key: 0,
  class: "stat-item"
}, g6 = { key: 0 }, h6 = {
  key: 1,
  class: "worker-stats offline"
}, y6 = /* @__PURE__ */ ge({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Se(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", o6, [
        t("div", n6, [
          t("span", {
            class: Se(["status-dot", e.worker.status])
          }, null, 2),
          t("span", a6, f(e.worker.name), 1)
        ]),
        t("div", l6, [
          e.worker.status === "online" ? (n(), L(pe, {
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
          S(pe, {
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
      t("div", i6, [
        t("span", r6, [
          t("span", c6, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", u6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", d6, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", f6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", m6, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", v6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", p6, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", g6, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", h6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), w6 = /* @__PURE__ */ ye(y6, [["__scopeId", "data-v-b1be7134"]]), k6 = { class: "add-worker-content" }, _6 = { class: "manual-form" }, b6 = { class: "form-row" }, $6 = { class: "form-row-inline" }, C6 = { class: "form-field flex-2" }, x6 = { class: "form-field flex-1" }, S6 = { class: "form-row" }, I6 = { class: "api-key-wrapper" }, E6 = ["type"], T6 = { class: "result-icon" }, R6 = { class: "result-content" }, P6 = { class: "result-message" }, M6 = {
  key: 0,
  class: "result-detail"
}, D6 = { class: "modal-actions" }, L6 = /* @__PURE__ */ ge({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = Ze(), l = Ws({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = _(!1), c = _(!1), u = _(!1), d = _(null), m = z(() => l.host && l.port && l.apiKey), v = z(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, k) => (n(), L(dt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: k[5] || (k[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", k6, [
          t("div", _6, [
            t("div", b6, [
              k[6] || (k[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Wt, l.name]
              ])
            ]),
            t("div", $6, [
              t("div", C6, [
                k[7] || (k[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": k[1] || (k[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Wt, l.host]
                ])
              ]),
              t("div", x6, [
                k[8] || (k[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": k[2] || (k[2] = (C) => l.port = C),
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
            t("div", S6, [
              k[9] || (k[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", I6, [
                qe(t("input", {
                  "onUpdate:modelValue": k[3] || (k[3] = (C) => l.apiKey = C),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, E6), [
                  [aa, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: k[4] || (k[4] = (C) => r.value = !r.value),
                  type: "button"
                }, f(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              k[10] || (k[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (n(), i("div", {
              key: 0,
              class: Se(["test-result", d.value.type])
            }, [
              t("span", T6, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", R6, [
                t("span", P6, f(d.value.message), 1),
                d.value.gpu_info ? (n(), i("span", M6, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", D6, [
          S(pe, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: g
          }, {
            default: h(() => [...k[11] || (k[11] = [
              $(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(pe, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: w
          }, {
            default: h(() => [...k[12] || (k[12] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), A6 = /* @__PURE__ */ ye(L6, [["__scopeId", "data-v-07a00732"]]), N6 = { class: "discovered-content" }, O6 = {
  key: 0,
  class: "workers-list"
}, U6 = { class: "worker-info" }, z6 = { class: "worker-name" }, F6 = { class: "worker-address" }, V6 = {
  key: 0,
  class: "worker-gpu"
}, B6 = {
  key: 1,
  class: "empty-state"
}, W6 = {
  key: 2,
  class: "api-key-section"
}, G6 = { class: "selected-worker" }, j6 = { class: "selected-name" }, H6 = { class: "selected-address" }, K6 = { class: "form-row" }, q6 = { class: "api-key-wrapper" }, Y6 = ["type"], J6 = { class: "result-icon" }, Q6 = { class: "result-message" }, X6 = { class: "modal-actions" }, Z6 = /* @__PURE__ */ ge({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = Ze(), l = _(null), r = _(""), c = _(!1), u = _(!1), d = _(null), m = _(null);
    async function v(w) {
      var p;
      l.value = w, r.value = "", m.value = null, await ht(), (p = d.value) == null || p.focus();
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
    return (w, p) => (n(), L(dt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (k) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", N6, [
          e.workers.length > 0 ? (n(), i("div", O6, [
            (n(!0), i(H, null, he(e.workers, (k) => (n(), i("div", {
              key: `${k.host}:${k.port}`,
              class: "worker-item"
            }, [
              t("div", U6, [
                t("span", z6, f(k.name), 1),
                t("span", F6, f(k.host) + ":" + f(k.port), 1),
                k.gpu_info ? (n(), i("span", V6, f(k.gpu_info), 1)) : y("", !0)
              ]),
              S(pe, {
                variant: "primary",
                size: "xs",
                onClick: (C) => v(k)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  $(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", B6, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", W6, [
            t("div", G6, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", j6, f(l.value.name), 1),
              t("span", H6, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", K6, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", q6, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (k) => r.value = k),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Jt(g, ["enter"])
                }, null, 40, Y6), [
                  [aa, r.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (k) => c.value = !c.value),
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
              class: Se(["test-result", m.value.type])
            }, [
              t("span", J6, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", Q6, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", X6, [
          l.value ? (n(), L(pe, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (k) => {
              l.value = null, r.value = "", m.value = null;
            })
          }, {
            default: h(() => [...p[9] || (p[9] = [
              $(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (n(), L(pe, {
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
}), eI = /* @__PURE__ */ ye(Z6, [["__scopeId", "data-v-5a3e40a4"]]), tI = { class: "deploy-content" }, sI = { class: "section" }, oI = {
  key: 0,
  class: "loading-text"
}, nI = {
  key: 1,
  class: "empty-remotes"
}, aI = {
  key: 2,
  class: "remotes-list"
}, lI = { class: "section" }, iI = { class: "mode-options" }, rI = { class: "mode-option" }, cI = ["disabled"], uI = { class: "mode-option" }, dI = { class: "section" }, fI = {
  key: 0,
  class: "section"
}, mI = { class: "summary-row" }, vI = {
  key: 1,
  class: "sync-warning"
}, pI = { class: "warning-content" }, gI = { class: "modal-actions" }, hI = /* @__PURE__ */ ge({
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
    } = Ze(), v = _([]), g = _({}), w = _(!1), p = _(null), k = _(null), C = _(null), b = _(o.worker.mode || "native"), x = _(""), M = _(null), R = _(!1), T = z(() => p.value && g.value[p.value] || null), D = z(() => {
      if (!p.value) return null;
      const A = v.value.find((K) => K.name === p.value);
      return (A == null ? void 0 : A.fetch_url) || null;
    }), O = z(() => D.value && !R.value);
    async function W() {
      w.value = !0;
      try {
        const A = await l();
        v.value = A.remotes, await Promise.all(
          A.remotes.map(async (X) => {
            const F = await r(X.name);
            F && (g.value[X.name] = F);
          })
        );
        const K = A.remotes.find((X) => X.is_default);
        K ? p.value = K.name : A.remotes.length > 0 && (p.value = A.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        M.value = await d();
      } catch {
      }
    }
    async function E(A) {
      k.value = A;
      try {
        await c(A);
        const K = await r(A);
        K && (g.value[A] = K), a("toast", `Fetched from ${A}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        k.value = null;
      }
    }
    async function j(A) {
      C.value = A;
      try {
        await u(A, { force: !1 });
        const K = await r(A);
        K && (g.value[A] = K), a("toast", `Pushed to ${A}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function ee(A) {
      p.value = A;
    }
    async function B() {
      if (D.value) {
        R.value = !0;
        try {
          const A = await m(o.worker.name, {
            import_source: D.value,
            mode: b.value,
            name: x.value || void 0
          });
          A.id ? (a("toast", `Deployment started: ${A.name || A.id}`, "success"), a("deployed")) : A.status === "error" ? a("toast", A.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (A) {
          a("toast", A instanceof Error ? A.message : "Deployment failed", "error");
        } finally {
          R.value = !1;
        }
      }
    }
    return Qe(() => {
      W(), I();
    }), (A, K) => (n(), L(dt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: K[5] || (K[5] = (X) => A.$emit("close"))
    }, {
      body: h(() => [
        t("div", tI, [
          t("div", sI, [
            K[7] || (K[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (n(), i("div", oI, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", nI, [...K[6] || (K[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", aI, [
              (n(!0), i(H, null, he(v.value, (X) => (n(), L(Qr, {
                key: X.name,
                remote: X,
                "sync-status": g.value[X.name],
                "is-selected": p.value === X.name,
                "is-fetching": k.value === X.name,
                "is-pushing": C.value === X.name,
                onFetch: E,
                onPush: j,
                onSelect: ee
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", lI, [
            K[10] || (K[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", iI, [
              t("label", rI, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": K[0] || (K[0] = (X) => b.value = X),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, cI), [
                  [ts, b.value]
                ]),
                K[8] || (K[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", uI, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": K[1] || (K[1] = (X) => b.value = X),
                  value: "native"
                }, null, 512), [
                  [ts, b.value]
                ]),
                K[9] || (K[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", dI, [
            K[11] || (K[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": K[2] || (K[2] = (X) => x.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Wt, x.value]
            ])
          ]),
          M.value ? (n(), i("div", fI, [
            K[12] || (K[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", mI, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          T.value && T.value.ahead > 0 ? (n(), i("div", vI, [
            K[14] || (K[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", pI, [
              t("strong", null, f(T.value.ahead) + " unpushed commit" + f(T.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(pe, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: K[3] || (K[3] = (X) => p.value && j(p.value))
            }, {
              default: h(() => [...K[13] || (K[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", gI, [
          S(pe, {
            variant: "ghost",
            size: "sm",
            onClick: K[4] || (K[4] = (X) => A.$emit("close"))
          }, {
            default: h(() => [...K[15] || (K[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(pe, {
            variant: "primary",
            size: "sm",
            loading: R.value,
            disabled: !O.value || R.value,
            onClick: B
          }, {
            default: h(() => [...K[16] || (K[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yI = /* @__PURE__ */ ye(hI, [["__scopeId", "data-v-c12720d3"]]), wI = { class: "custom-tab" }, kI = { class: "section-header" }, _I = { class: "section-actions" }, bI = { class: "workers-content" }, $I = {
  key: 0,
  class: "loading-state"
}, CI = {
  key: 1,
  class: "empty-state"
}, xI = {
  key: 2,
  class: "workers-list"
}, SI = { class: "scan-icon" }, II = { class: "scan-message" }, EI = /* @__PURE__ */ ge({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: c
    } = Ze(), u = _([]), d = _([]), m = _(!1), v = _(!1), g = _(null), w = _(!1), p = _(!1), k = _(null), C = _(null);
    async function b() {
      m.value = !0;
      try {
        const W = await a();
        u.value = W.workers;
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      v.value = !0, C.value = null;
      try {
        const W = await c(), I = W.discovered.filter(
          (E) => !u.value.some((j) => j.host === E.host && j.port === E.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : W.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function M(W) {
      try {
        await l(W), o("toast", `Worker '${W.name}' added`, "success"), w.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function R(W) {
      try {
        await l(W), o("toast", `Worker '${W.name}' added`, "success"), p.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function T(W) {
      g.value = W;
      try {
        await r(W), o("toast", `Worker '${W}' removed`, "success"), await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function D(W) {
      k.value = W;
    }
    function O() {
      k.value = null, o("deployed");
    }
    return Qe(() => {
      b();
    }), (W, I) => (n(), i("div", wI, [
      t("div", kI, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", _I, [
          S(pe, {
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
          S(pe, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (E) => w.value = !0)
          }, {
            default: h(() => [...I[7] || (I[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", bI, [
        m.value && u.value.length === 0 ? (n(), i("div", $I, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (n(), i("div", CI, [...I[10] || (I[10] = [
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
        ])])) : (n(), i("div", xI, [
          (n(!0), i(H, null, he(u.value, (E) => (n(), L(w6, {
            key: E.name,
            worker: E,
            "is-action-loading": g.value === E.name,
            onDeploy: D,
            onRemove: T
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (n(), i("div", {
        key: 0,
        class: Se(["scan-result", C.value.type])
      }, [
        t("span", SI, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", II, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (E) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (n(), L(eI, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (E) => p.value = !1),
        onAdd: R
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (n(), L(A6, {
        key: 2,
        onClose: I[3] || (I[3] = (E) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      k.value ? (n(), L(yI, {
        key: 3,
        worker: k.value,
        onClose: I[4] || (I[4] = (E) => k.value = null),
        onToast: I[5] || (I[5] = (E, j) => o("toast", E, j)),
        onDeployed: O
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), TI = /* @__PURE__ */ ye(EI, [["__scopeId", "data-v-1637dead"]]), Ia = "ComfyGit.Deploy.GitHubPAT";
function Xr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function RI(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function PI() {
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
    isRemoteHttps: RI
  };
}
const MI = { class: "settings-content" }, DI = { class: "settings-section" }, LI = {
  key: 0,
  class: "ssh-warning"
}, AI = { class: "form-row" }, NI = { class: "token-wrapper" }, OI = ["type"], UI = { class: "result-icon" }, zI = { class: "result-message" }, FI = { class: "token-actions" }, VI = /* @__PURE__ */ ge({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = PI(), { getRemotes: u, testGitAuth: d } = Ze(), m = _(""), v = _(!1), g = _(!1), w = _(null), p = _(!1), k = z(() => c());
    Qe(async () => {
      var R;
      const M = a();
      M && (m.value = M);
      try {
        const D = (R = (await u()).remotes) == null ? void 0 : R.find((O) => O.name === "origin");
        D && Xr(D.url) && (p.value = !0);
      } catch {
      }
    });
    async function C() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const M = await d(m.value);
          w.value = {
            type: M.status === "success" ? "success" : "error",
            message: M.message
          };
        } catch (M) {
          w.value = {
            type: "error",
            message: M instanceof Error ? M.message : "Connection test failed"
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
    return (M, R) => (n(), L(dt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: R[2] || (R[2] = (T) => M.$emit("close"))
    }, {
      body: h(() => [
        t("div", MI, [
          t("div", DI, [
            R[8] || (R[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            R[9] || (R[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (n(), i("div", LI, [...R[3] || (R[3] = [
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
            t("div", AI, [
              R[4] || (R[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", NI, [
                qe(t("input", {
                  "onUpdate:modelValue": R[0] || (R[0] = (T) => m.value = T),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, OI), [
                  [aa, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: R[1] || (R[1] = (T) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              R[5] || (R[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (n(), i("div", {
              key: 1,
              class: Se(["test-result", w.value.type])
            }, [
              t("span", UI, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", zI, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", FI, [
              S(pe, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...R[6] || (R[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              k.value ? (n(), L(pe, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: x
              }, {
                default: h(() => [...R[7] || (R[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        S(pe, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: b
        }, {
          default: h(() => [...R[10] || (R[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), BI = /* @__PURE__ */ ye(VI, [["__scopeId", "data-v-b21588ad"]]), WI = /* @__PURE__ */ ge({
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
    } = Jr(), w = _(!1), p = _(!1), k = _("instances"), C = _(null), b = _(null), x = z(() => [
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
    async function M(W) {
      C.value = W.id;
      try {
        await u(W), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function R(W) {
      C.value = W.id;
      try {
        await d(W), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function T(W) {
      b.value = W;
    }
    async function D() {
      const W = b.value;
      if (W) {
        b.value = null, C.value = W.id;
        try {
          await m(W), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function O() {
      await c(), k.value = "instances";
    }
    return Qe(() => {
      c(), v();
    }), Gs(() => {
      g();
    }), (W, I) => (n(), i(H, null, [
      S(Lt, null, {
        header: h(() => [
          S(At, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (E) => w.value = !0)
          }, {
            actions: h(() => [
              S(pe, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (E) => p.value = !0)
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
            modelValue: k.value,
            "onUpdate:modelValue": I[2] || (I[2] = (E) => k.value = E),
            tabs: x.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          k.value === "instances" ? (n(), L(a8, {
            key: 0,
            instances: We(a),
            "is-loading": We(l),
            "action-loading-id": C.value,
            onRefresh: We(c),
            onStop: M,
            onStart: R,
            onTerminate: T
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          k.value === "runpod" ? (n(), L(s6, {
            key: 1,
            onToast: I[3] || (I[3] = (E, j) => o("toast", E, j)),
            onNavigate: I[4] || (I[4] = (E) => o("navigate", E)),
            onDeployed: O
          })) : y("", !0),
          k.value === "custom" ? (n(), L(TI, {
            key: 2,
            onToast: I[5] || (I[5] = (E, j) => o("toast", E, j)),
            onDeployed: O
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (n(), L(ml, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: D,
        onCancel: I[6] || (I[6] = (E) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      S(is, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (E) => w.value = !1)
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
      p.value ? (n(), L(BI, {
        key: 1,
        onClose: I[8] || (I[8] = (E) => p.value = !1),
        onSaved: I[9] || (I[9] = (E) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), GI = /* @__PURE__ */ ye(WI, [["__scopeId", "data-v-d4e32a10"]]), jI = { class: "header-info" }, HI = { class: "commit-hash" }, KI = {
  key: 0,
  class: "commit-refs"
}, qI = { class: "commit-message" }, YI = { class: "commit-date" }, JI = {
  key: 0,
  class: "loading"
}, QI = {
  key: 1,
  class: "changes-section"
}, XI = { class: "stats-row" }, ZI = { class: "stat" }, eE = { class: "stat insertions" }, tE = { class: "stat deletions" }, sE = {
  key: 0,
  class: "change-group"
}, oE = {
  key: 1,
  class: "change-group"
}, nE = {
  key: 0,
  class: "version"
}, aE = {
  key: 2,
  class: "change-group"
}, lE = { class: "change-item" }, iE = /* @__PURE__ */ ge({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = Ze(), a = _(null), l = _(!0), r = z(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = z(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Qe(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), L(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", jI, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", HI, f(((m = a.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = a.value) == null ? void 0 : g.refs) != null && w.length ? (n(), i("span", KI, [
              (n(!0), i(H, null, he(a.value.refs, (p) => (n(), i("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          S(Re, {
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
          t("div", qI, f(((m = a.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", YI, f(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", JI, "Loading details...")) : a.value ? (n(), i("div", QI, [
            t("div", XI, [
              t("span", ZI, f(a.value.stats.files_changed) + " files", 1),
              t("span", eE, "+" + f(a.value.stats.insertions), 1),
              t("span", tE, "-" + f(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", sE, [
              S(Xo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, he(a.value.changes.workflows.added, (g) => (n(), i("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, he(a.value.changes.workflows.modified, (g) => (n(), i("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, he(a.value.changes.workflows.deleted, (g) => (n(), i("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", oE, [
              S(Xo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, he(a.value.changes.nodes.added, (g) => (n(), i("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (n(), i("span", nE, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(H, null, he(a.value.changes.nodes.removed, (g) => (n(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", aE, [
              S(Xo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", lE, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        S(Re, {
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
}), rE = /* @__PURE__ */ ye(iE, [["__scopeId", "data-v-d256ff6d"]]), cE = { class: "popover-header" }, uE = { class: "popover-body" }, dE = {
  key: 0,
  class: "changes-summary"
}, fE = {
  key: 0,
  class: "change-item"
}, mE = {
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
}, kE = {
  key: 3,
  class: "issues-error"
}, _E = { class: "error-header" }, bE = { class: "error-title" }, $E = { class: "issues-list" }, CE = { class: "workflow-state" }, xE = { class: "message-section" }, SE = { class: "popover-footer" }, IE = {
  key: 1,
  class: "commit-popover"
}, EE = { class: "popover-header" }, TE = { class: "popover-body" }, RE = {
  key: 0,
  class: "changes-summary"
}, PE = {
  key: 0,
  class: "change-item"
}, ME = {
  key: 1,
  class: "change-item"
}, DE = {
  key: 2,
  class: "change-item"
}, LE = {
  key: 3,
  class: "change-item"
}, AE = {
  key: 4,
  class: "change-item"
}, NE = {
  key: 5,
  class: "change-item"
}, OE = {
  key: 1,
  class: "no-changes"
}, UE = {
  key: 2,
  class: "loading"
}, zE = {
  key: 3,
  class: "issues-error"
}, FE = { class: "error-header" }, VE = { class: "error-title" }, BE = { class: "issues-list" }, WE = { class: "workflow-state" }, GE = { class: "message-section" }, jE = { class: "popover-footer" }, HE = /* @__PURE__ */ ge({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = Ze(), r = _(""), c = _(!1), u = _(!1), d = z(() => {
      if (!o.status) return !1;
      const k = o.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || o.status.has_changes;
    }), m = z(() => {
      if (!o.status) return !1;
      const k = o.status.workflows, C = o.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = z(() => {
      var k;
      return (k = o.status) != null && k.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = z(() => v.value.length > 0), w = z(() => g.value && !u.value);
    async function p() {
      var k, C, b, x;
      if (!(g.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const M = await l(r.value.trim(), u.value);
          if (M.status === "success") {
            const R = `Committed: ${((k = M.summary) == null ? void 0 : k.new) || 0} new, ${((C = M.summary) == null ? void 0 : C.modified) || 0} modified, ${((b = M.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            a("committed", { success: !0, message: R });
          } else if (M.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (M.status === "blocked") {
            const R = ((x = M.issues) == null ? void 0 : x.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${R}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: M.message || "Commit failed" });
        } catch (M) {
          a("committed", { success: !1, message: M instanceof Error ? M.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (k, C) => e.asModal ? (n(), L(kt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (b) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = ct(() => {
          }, ["stop"]))
        }, [
          t("div", cE, [
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
          t("div", uE, [
            e.status && d.value ? (n(), i("div", dE, [
              e.status.workflows.new.length ? (n(), i("div", fE, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", mE, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", vE, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", pE, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", gE, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (n(), i("div", hE, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", yE, " No changes to commit ")) : (n(), i("div", wE, " Loading... ")),
            g.value ? (n(), i("div", kE, [
              t("div", _E, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", bE, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", $E, [
                (n(!0), i(H, null, he(v.value, (b) => (n(), i("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", CE, "(" + f(b.sync_state) + ")", 1),
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
            t("div", xE, [
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
          t("div", SE, [
            S(Re, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (b) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
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
    ])) : (n(), i("div", IE, [
      t("div", EE, [
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
      t("div", TE, [
        e.status && d.value ? (n(), i("div", RE, [
          e.status.workflows.new.length ? (n(), i("div", PE, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", ME, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", DE, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", LE, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", AE, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (n(), i("div", NE, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", OE, " No changes to commit ")) : (n(), i("div", UE, " Loading... ")),
        g.value ? (n(), i("div", zE, [
          t("div", FE, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", VE, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", BE, [
            (n(!0), i(H, null, he(v.value, (b) => (n(), i("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", WE, "(" + f(b.sync_state) + ")", 1),
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
        t("div", GE, [
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
      t("div", jE, [
        S(Re, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (b) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(Re, {
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
}), Zr = /* @__PURE__ */ ye(HE, [["__scopeId", "data-v-5f897631"]]), KE = { class: "modal-header" }, qE = { class: "modal-body" }, YE = { class: "switch-message" }, JE = { class: "switch-details" }, QE = { class: "modal-actions" }, XE = /* @__PURE__ */ ge({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), L(kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ct(() => {
          }, ["stop"]))
        }, [
          t("div", KE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", qE, [
            t("p", YE, [
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
            t("p", JE, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", QE, [
            S(pe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(pe, {
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
}), ZE = /* @__PURE__ */ ye(XE, [["__scopeId", "data-v-e9c5253e"]]), eT = {
  key: 0,
  class: "modal-overlay"
}, tT = { class: "modal-content" }, sT = { class: "modal-body" }, oT = { class: "progress-info" }, nT = { class: "progress-percentage" }, aT = { class: "progress-state" }, lT = { class: "switch-steps" }, iT = { class: "step-icon" }, rT = { class: "step-label" }, cT = /* @__PURE__ */ ge({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = z(() => {
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
    }), a = z(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = z(() => {
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
    return (r, c) => (n(), L(kt, { to: "body" }, [
      e.show ? (n(), i("div", eT, [
        t("div", tT, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", sT, [
            S(ia, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", oT, [
              t("div", nT, f(e.progress) + "%", 1),
              t("div", aT, f(o.value), 1)
            ]),
            t("div", lT, [
              (n(!0), i(H, null, he(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Se(["switch-step", u.status])
              }, [
                t("span", iT, f(u.icon), 1),
                t("span", rT, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), uT = /* @__PURE__ */ ye(cT, [["__scopeId", "data-v-768a5078"]]), dT = { class: "modal-header" }, fT = { class: "modal-body" }, mT = {
  key: 0,
  class: "node-section"
}, vT = { class: "node-list" }, pT = {
  key: 1,
  class: "node-section"
}, gT = { class: "node-list" }, hT = { class: "modal-actions" }, yT = /* @__PURE__ */ ge({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), L(kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ct(() => {
          }, ["stop"]))
        }, [
          t("div", dT, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", fT, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", mT, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", vT, [
                (n(!0), i(H, null, he(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + f(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", pT, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", gT, [
                (n(!0), i(H, null, he(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          t("div", hT, [
            S(pe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(pe, {
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
}), wT = /* @__PURE__ */ ye(yT, [["__scopeId", "data-v-7cad7518"]]), kT = [
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
], _T = "v0.0.22", bT = "Akatz", $T = { class: "social-buttons" }, CT = ["title", "aria-label", "onClick"], xT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ST = ["d"], IT = ["title", "aria-label", "onClick"], ET = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, TT = ["d"], RT = /* @__PURE__ */ ge({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", $T, [
      (n(!0), i(H, null, he(We(kT), (l) => (n(), i(H, {
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
          (n(), i("svg", xT, [
            t("path", {
              d: l.iconPath
            }, null, 8, ST)
          ]))
        ], 8, CT)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", ET, [
            t("path", {
              d: l.iconPath
            }, null, 8, TT)
          ]))
        ], 8, IT))
      ], 64))), 128))
    ]));
  }
}), ec = /* @__PURE__ */ ye(RT, [["__scopeId", "data-v-4f846342"]]), PT = { class: "footer-info" }, MT = { class: "version" }, DT = { class: "made-by" }, LT = /* @__PURE__ */ ge({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (n(), i("div", PT, [
      t("span", MT, f(We(_T)), 1),
      t("span", DT, [
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
        $(" by " + f(We(bT)), 1)
      ])
    ]));
  }
}), tc = /* @__PURE__ */ ye(LT, [["__scopeId", "data-v-8bc3db0a"]]), AT = /* @__PURE__ */ ge({
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
    return (r, c) => (n(), L(dt, {
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
          S(Re, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Re, {
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
}), NT = /* @__PURE__ */ ye(AT, [["__scopeId", "data-v-fac00ae7"]]), OT = { class: "header-actions" }, UT = {
  key: 0,
  class: "wizard-step"
}, zT = { class: "form-field" }, FT = ["placeholder"], VT = {
  key: 0,
  class: "form-error"
}, BT = { class: "form-field form-field--checkbox" }, WT = { class: "form-checkbox" }, GT = {
  key: 0,
  class: "form-field"
}, jT = ["placeholder"], HT = {
  key: 0,
  class: "form-info"
}, KT = {
  key: 1,
  class: "form-suggestion"
}, qT = {
  key: 2,
  class: "form-error"
}, YT = {
  key: 3,
  class: "form-info"
}, JT = {
  key: 1,
  class: "wizard-step"
}, QT = {
  key: 0,
  class: "progress-check-loading"
}, XT = {
  key: 0,
  class: "cli-warning"
}, ZT = { class: "cli-warning-header" }, e7 = {
  key: 1,
  class: "env-landing"
}, t7 = { class: "env-list" }, s7 = ["value"], o7 = { class: "env-name" }, n7 = {
  key: 2,
  class: "env-create"
}, a7 = { class: "form-field" }, l7 = { class: "form-field" }, i7 = ["value"], r7 = { class: "form-field" }, c7 = ["disabled"], u7 = ["value"], d7 = { class: "form-field" }, f7 = ["value"], m7 = { class: "form-field form-field--checkbox" }, v7 = { class: "form-checkbox" }, p7 = {
  key: 0,
  class: "form-error"
}, g7 = {
  key: 1,
  class: "env-creating"
}, h7 = { class: "creating-intro" }, y7 = {
  key: 3,
  class: "env-import"
}, w7 = { class: "wizard-footer" }, k7 = { class: "wizard-footer-actions" }, go = 10, _7 = 600 * 1e3, ci = 1800 * 1e3, b7 = /* @__PURE__ */ ge({
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
    } = Ze(), g = _(o.initialStep || 1), w = _(null), p = _("landing"), k = _(!1), C = _(!1), b = _(!1), x = _(!1), M = _(null), R = _(o.initialStep === 2), T = _(o.defaultPath), D = _(!!o.detectedModelsDir), O = _(o.detectedModelsDir || ""), W = _(null), I = _(null), E = _(null), j = _(null), ee = _("my-new-env"), B = _(jr), A = _("latest"), K = _(Hr), X = _(!0), F = _(null), se = _(null), Y = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ae = _(!1), re = _(!1), Pe = _(!1), Ve = _({ progress: 0, message: "" }), Oe = _({ progress: 0, message: "" }), Ye = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], we = _(0), oe = _(null), de = _(0), ve = _(null), Ie = z(() => {
      var Ce, $e;
      const ue = (Ce = T.value) == null ? void 0 : Ce.trim(), G = !W.value, Me = !D.value || !I.value && (($e = O.value) == null ? void 0 : $e.trim());
      return ue && G && Me;
    }), Te = z(() => {
      var ue;
      return (ue = ee.value) == null ? void 0 : ue.trim();
    }), Ue = z(() => !!(g.value === 2 || se.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), U = z(() => se.value || o.workspacePath || null);
    async function P() {
      var ue;
      if (W.value = null, !!((ue = T.value) != null && ue.trim()))
        try {
          const G = await c({ path: T.value, type: "workspace" });
          G.valid || (W.value = G.error || "Invalid path");
        } catch (G) {
          W.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function V() {
      var ue;
      if (I.value = null, E.value = null, j.value = null, !!((ue = O.value) != null && ue.trim()))
        try {
          const G = await c({ path: O.value, type: "models" });
          if (G.valid)
            j.value = G.model_count ?? null;
          else if (I.value = G.error || "Invalid path", G.suggestion) {
            E.value = G.suggestion, O.value = G.suggestion, I.value = null;
            const Me = await c({ path: G.suggestion, type: "models" });
            Me.valid && (j.value = Me.model_count ?? null);
          }
        } catch (G) {
          I.value = G instanceof Error ? G.message : "Validation failed";
        }
    }
    async function Z() {
      var ue, G, Me, Ce, $e;
      if (W.value = null, I.value = null, await P(), (ue = W.value) != null && ue.includes("already exists")) {
        W.value = null, se.value = ((G = T.value) == null ? void 0 : G.trim()) || o.defaultPath, g.value = 2, fe();
        return;
      }
      if (!W.value && !(D.value && ((Me = O.value) != null && Me.trim()) && (await V(), I.value))) {
        re.value = !0;
        try {
          await l({
            workspace_path: ((Ce = T.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: D.value && (($e = O.value) == null ? void 0 : $e.trim()) || null
          }), we.value = 0, oe.value = Date.now();
          const J = setInterval(async () => {
            var N;
            if (oe.value && Date.now() - oe.value > _7) {
              clearInterval(J), re.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const me = await r();
              if (we.value = 0, me.state === "idle" && re.value) {
                clearInterval(J), re.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ve.value = { progress: me.progress, message: me.message }, me.state === "complete" ? (clearInterval(J), re.value = !1, se.value = ((N = T.value) == null ? void 0 : N.trim()) || o.defaultPath, g.value = 2, fe()) : me.state === "error" && (clearInterval(J), re.value = !1, W.value = me.error || "Workspace creation failed");
            } catch (me) {
              we.value++, console.warn(`Polling failure ${we.value}/${go}:`, me), we.value >= go && (clearInterval(J), re.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (J) {
          re.value = !1, W.value = J instanceof Error ? J.message : "Failed to create workspace";
        }
      }
    }
    async function ne() {
      Pe.value = !0, F.value = null;
      try {
        const ue = {
          name: ee.value.trim() || "my-new-env",
          python_version: B.value,
          comfyui_version: A.value,
          torch_backend: K.value,
          switch_after: X.value,
          workspace_path: se.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ue)).status === "started") {
          de.value = 0, ve.value = Date.now();
          const Me = setInterval(async () => {
            if (ve.value && Date.now() - ve.value > ci) {
              clearInterval(Me), Pe.value = !1, F.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (de.value = 0, Ce.state === "idle" && Pe.value) {
                clearInterval(Me), Pe.value = !1, F.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Oe.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(Me), Pe.value = !1;
                const $e = Ce.environment_name || ue.name;
                X.value ? a("complete", $e, se.value) : (p.value = "landing", a("environment-created-no-switch", $e));
              } else Ce.state === "error" && (clearInterval(Me), Pe.value = !1, F.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              de.value++, console.warn(`Polling failure ${de.value}/${go}:`, Ce), de.value >= go && (clearInterval(Me), Pe.value = !1, F.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ue) {
        Pe.value = !1, F.value = ue instanceof Error ? ue.message : "Unknown error";
      }
    }
    async function fe() {
      ae.value = !0;
      try {
        Y.value = await v();
      } catch (ue) {
        console.error("Failed to load ComfyUI releases:", ue);
      } finally {
        ae.value = !1;
      }
    }
    function _e() {
      w.value && a("switch-environment", w.value, se.value);
    }
    function ie() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function be(ue, G) {
      C.value = !1, G ? a("complete", ue, se.value) : (a("environment-created-no-switch", ue), p.value = "landing");
    }
    function ce() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (O.value = o.detectedModelsDir), o.workspacePath && (se.value = o.workspacePath), g.value === 2) {
        fe();
        const ue = setTimeout(() => {
          R.value = !1;
        }, 3e3);
        await De(), clearTimeout(ue), R.value = !1;
      }
    });
    async function De() {
      try {
        const ue = await d();
        if (console.log("[ComfyGit] Create progress check:", ue.state, ue), ue.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ue.environment_name), p.value = "create", Pe.value = !0, ee.value = ue.environment_name || "my-new-env", Oe.value = {
            progress: ue.progress ?? 0,
            message: ue.message,
            phase: ue.phase
          }, Ee();
          return;
        }
      } catch (ue) {
        console.log("[ComfyGit] Create progress check failed:", ue);
      }
      try {
        const ue = await m();
        console.log("[ComfyGit] Import progress check:", ue.state, ue), ue.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ue.environment_name), M.value = {
          message: ue.message || "Importing...",
          phase: ue.phase || "",
          progress: ue.progress ?? 0,
          environmentName: ue.environment_name || ""
        }, x.value = !0, p.value = "import", C.value = !0);
      } catch (ue) {
        console.log("[ComfyGit] Import progress check failed:", ue);
      }
    }
    async function Ee() {
      de.value = 0, ve.value = Date.now();
      let ue = null;
      const G = async () => {
        if (ve.value && Date.now() - ve.value > ci)
          return ue && clearInterval(ue), Pe.value = !1, F.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (de.value = 0, Ce.state === "idle" && Pe.value)
            return ue && clearInterval(ue), Pe.value = !1, F.value = "Environment creation was interrupted. Please try again.", !1;
          if (Oe.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            ue && clearInterval(ue), Pe.value = !1;
            const $e = Ce.environment_name || ee.value;
            return a("complete", $e, se.value), !1;
          } else if (Ce.state === "error")
            return ue && clearInterval(ue), Pe.value = !1, F.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return de.value++, console.warn(`Polling failure ${de.value}/${go}:`, Ce), de.value >= go ? (ue && clearInterval(ue), Pe.value = !1, F.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await G() && (ue = setInterval(async () => {
        !await G() && ue && clearInterval(ue);
      }, 2e3));
    }
    return (ue, G) => (n(), i(H, null, [
      S(dt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: G[15] || (G[15] = (Me) => ue.$emit("close"))
      }, {
        header: h(() => [
          G[20] || (G[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", OT, [
            S(ec),
            G[19] || (G[19] = t("span", { class: "header-divider" }, null, -1)),
            Ue.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: G[0] || (G[0] = (Me) => k.value = !0)
            }, [...G[17] || (G[17] = [
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
              onClick: G[1] || (G[1] = (Me) => ue.$emit("close")),
              title: "Close"
            }, [...G[18] || (G[18] = [
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
          var Me;
          return [
            g.value === 1 ? (n(), i("div", UT, [
              G[24] || (G[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", zT, [
                G[21] || (G[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": G[2] || (G[2] = (Ce) => T.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, FT), [
                  [Wt, T.value]
                ]),
                W.value ? (n(), i("p", VT, f(W.value), 1)) : y("", !0)
              ]),
              t("div", BT, [
                t("label", WT, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": G[3] || (G[3] = (Ce) => D.value = Ce)
                  }, null, 512), [
                    [cn, D.value]
                  ]),
                  G[22] || (G[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (n(), i("div", GT, [
                G[23] || (G[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": G[4] || (G[4] = (Ce) => O.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, jT), [
                  [Wt, O.value]
                ]),
                e.detectedModelsDir && !O.value ? (n(), i("p", HT, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (n(), i("p", KT, " Did you mean: " + f(E.value), 1)) : y("", !0),
                I.value ? (n(), i("p", qT, f(I.value), 1)) : y("", !0),
                j.value !== null && !I.value ? (n(), i("p", YT, " Found " + f(j.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              re.value ? (n(), L(jn, {
                key: 1,
                progress: Ve.value.progress,
                message: Ve.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (n(), i("div", JT, [
              R.value ? (n(), i("div", QT, [...G[25] || (G[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !b.value ? (n(), i("div", XT, [
                  t("div", ZT, [
                    G[27] || (G[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    G[28] || (G[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: G[5] || (G[5] = (Ce) => b.value = !0),
                      title: "Dismiss"
                    }, [...G[26] || (G[26] = [
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
                  G[29] || (G[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  G[30] || (G[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (n(), i("div", e7, [
                  G[34] || (G[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: G[6] || (G[6] = (Ce) => p.value = "create")
                  }, [...G[31] || (G[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: G[7] || (G[7] = (Ce) => {
                      x.value = !1, p.value = "import";
                    })
                  }, [...G[32] || (G[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Me = o.existingEnvironments) != null && Me.length ? (n(), i(H, { key: 0 }, [
                    G[33] || (G[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", t7, [
                      (n(!0), i(H, null, he(o.existingEnvironments, (Ce) => (n(), i("label", {
                        key: Ce,
                        class: Se(["env-option", { selected: w.value === Ce }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": G[8] || (G[8] = ($e) => w.value = $e)
                        }, null, 8, s7), [
                          [ts, w.value]
                        ]),
                        t("span", o7, f(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (n(), i("div", n7, [
                  Pe.value ? (n(), i("div", g7, [
                    t("p", h7, [
                      G[41] || (G[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(ee.value), 1),
                      G[42] || (G[42] = $("... ", -1))
                    ]),
                    S(jn, {
                      progress: Oe.value.progress,
                      message: Oe.value.message,
                      "current-phase": Oe.value.phase,
                      "show-steps": !0,
                      steps: Ye
                    }, null, 8, ["progress", "message", "current-phase"]),
                    G[43] || (G[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    G[40] || (G[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", a7, [
                      G[35] || (G[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": G[9] || (G[9] = (Ce) => ee.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Wt, ee.value]
                      ])
                    ]),
                    t("div", l7, [
                      G[36] || (G[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": G[10] || (G[10] = (Ce) => B.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, he(We(Gr), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce), 9, i7))), 128))
                      ], 512), [
                        [gs, B.value]
                      ])
                    ]),
                    t("div", r7, [
                      G[37] || (G[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": G[11] || (G[11] = (Ce) => A.value = Ce),
                        class: "form-select",
                        disabled: ae.value
                      }, [
                        (n(!0), i(H, null, he(Y.value, (Ce) => (n(), i("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, f(Ce.name), 9, u7))), 128))
                      ], 8, c7), [
                        [gs, A.value]
                      ])
                    ]),
                    t("div", d7, [
                      G[38] || (G[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": G[12] || (G[12] = (Ce) => K.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, he(We(vl), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce) + f(Ce === "auto" ? " (detect GPU)" : ""), 9, f7))), 128))
                      ], 512), [
                        [gs, K.value]
                      ])
                    ]),
                    t("div", m7, [
                      t("label", v7, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": G[13] || (G[13] = (Ce) => X.value = Ce)
                        }, null, 512), [
                          [cn, X.value]
                        ]),
                        G[39] || (G[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    F.value ? (n(), i("div", p7, f(F.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (n(), i("div", y7, [
                  S(Yr, {
                    "workspace-path": se.value,
                    "resume-import": x.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: be,
                    onImportStarted: G[14] || (G[14] = (Ce) => C.value = !0),
                    onSourceCleared: ce
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", w7, [
            S(tc),
            t("div", k7, [
              g.value === 1 ? (n(), L(Re, {
                key: 0,
                variant: "primary",
                disabled: !Ie.value || re.value,
                onClick: Z
              }, {
                default: h(() => [
                  $(f(re.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (n(), i(H, { key: 1 }, [
                !Pe.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !se.value) ? (n(), L(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: ie
                }, {
                  default: h(() => [...G[44] || (G[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (n(), L(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Te.value || Pe.value,
                  onClick: ne
                }, {
                  default: h(() => [
                    $(f(Pe.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (n(), L(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: _e
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
      k.value ? (n(), L(NT, {
        key: 0,
        "workspace-path": U.value,
        onClose: G[16] || (G[16] = (Me) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), $7 = /* @__PURE__ */ ye(b7, [["__scopeId", "data-v-9a9aadc0"]]), C7 = { class: "update-banner" }, x7 = { class: "update-banner__left" }, S7 = { class: "update-banner__title" }, I7 = {
  key: 0,
  class: "update-banner__summary"
}, E7 = { class: "update-banner__actions" }, T7 = ["disabled"], R7 = ["disabled"], P7 = ["disabled"], M7 = /* @__PURE__ */ ge({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", C7, [
      t("div", x7, [
        t("div", S7, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", I7, f(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", E7, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, T7),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, R7)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, P7)
      ])
    ]));
  }
}), D7 = /* @__PURE__ */ ye(M7, [["__scopeId", "data-v-49562c5c"]]), sc = "ComfyGit.UpdateNotice.DismissedVersion";
function L7() {
  try {
    return localStorage.getItem(sc);
  } catch {
    return null;
  }
}
function A7(e) {
  try {
    localStorage.setItem(sc, e);
  } catch {
  }
}
function N7(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : L7() !== e.latest_version;
}
const O7 = { class: "comfygit-panel" }, U7 = { class: "panel-header" }, z7 = { class: "header-left" }, F7 = {
  key: 0,
  class: "header-info"
}, V7 = { class: "header-actions" }, B7 = { class: "env-switcher" }, W7 = {
  key: 0,
  class: "header-info"
}, G7 = { class: "branch-name" }, j7 = { class: "panel-main" }, H7 = { class: "sidebar" }, K7 = { class: "sidebar-content" }, q7 = { class: "sidebar-section" }, Y7 = { class: "sidebar-section" }, J7 = { class: "sidebar-section" }, Q7 = {
  key: 0,
  class: "sidebar-badge"
}, X7 = { class: "sidebar-footer" }, Z7 = { class: "content-area" }, eR = {
  key: 0,
  class: "error-message"
}, tR = {
  key: 1,
  class: "loading"
}, sR = { class: "dialog-content env-selector-dialog" }, oR = { class: "dialog-header" }, nR = { class: "dialog-body" }, aR = { class: "env-list" }, lR = { class: "env-info" }, iR = { class: "env-name-row" }, rR = { class: "env-indicator" }, cR = { class: "env-name" }, uR = {
  key: 0,
  class: "env-branch"
}, dR = {
  key: 1,
  class: "current-label"
}, fR = { class: "env-stats" }, mR = ["onClick"], vR = { class: "toast-container" }, pR = { class: "toast-message" }, ui = "ComfyGit.LastView", di = "ComfyGit.LastSection", gR = /* @__PURE__ */ ge({
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
      deleteEnvironment: k,
      syncEnvironmentManually: C,
      repairWorkflowModels: b,
      getSetupStatus: x,
      getUpdateCheck: M,
      updateManager: R
    } = Ze(), T = cp(), { liveInstanceCount: D } = Jr({ autoStart: !0 }), O = _(null), W = _([]), I = _([]), E = _([]), j = z(() => E.value.find((le) => le.is_current)), ee = _(null), B = _(!1), A = _(1), K = z(() => {
      var le;
      return ((le = ee.value) == null ? void 0 : le.state) || "managed";
    }), X = _(!1), F = _(null), se = _(null), Y = _(!1), ae = _(null), re = _(!1), Pe = _(!1), Ve = z(() => !re.value && N7(ae.value)), Oe = _(null), Ye = _(null), we = _(null), oe = _(!1), de = _(!1), ve = _(""), Ie = _(null), Te = _({ state: "idle", progress: 0, message: "" });
    let Ue = null, U = null;
    const P = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, V = o.initialView ? P[o.initialView] : null, Z = [
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
    ], ne = ["this-env", "all-envs", "sharing"];
    function fe() {
      try {
        const le = sessionStorage.getItem(ui), Q = sessionStorage.getItem(di);
        if (le && Q && Z.includes(le) && ne.includes(Q))
          return { view: le, section: Q };
      } catch {
      }
      return null;
    }
    const _e = fe(), ie = _((V == null ? void 0 : V.view) ?? (_e == null ? void 0 : _e.view) ?? "status"), be = _((V == null ? void 0 : V.section) ?? (_e == null ? void 0 : _e.section) ?? "this-env");
    function ce(le, Q) {
      ie.value = le, be.value = Q;
      try {
        sessionStorage.setItem(ui, le), sessionStorage.setItem(di, Q);
      } catch {
      }
    }
    function De(le) {
      const Ae = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[le];
      Ae && ce(Ae.view, Ae.section);
    }
    function Ee() {
      ce("branches", "this-env");
    }
    function ue() {
      a("close"), setTimeout(() => {
        var Q;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Ae of le)
          if (((Q = Ae.textContent) == null ? void 0 : Q.trim()) === "Manager") {
            Ae.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const G = _(null), Me = _(!1), Ce = _(!1), $e = _([]);
    let J = 0;
    function N(le, Q = "info", Ae = 3e3) {
      const Be = ++J;
      return $e.value.push({ id: Be, message: le, type: Q }), Ae > 0 && setTimeout(() => {
        $e.value = $e.value.filter((ot) => ot.id !== Be);
      }, Ae), Be;
    }
    function me(le) {
      $e.value = $e.value.filter((Q) => Q.id !== le);
    }
    function ze(le, Q) {
      N(le, Q);
    }
    async function et() {
      ae.value = null, re.value = !1;
      try {
        ae.value = await M();
      } catch {
      }
    }
    function Et() {
      var Q;
      const le = (Q = ae.value) == null ? void 0 : Q.release_url;
      if (le)
        try {
          window.open(le, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function at() {
      var Q;
      const le = (Q = ae.value) == null ? void 0 : Q.latest_version;
      le && A7(le), re.value = !0;
    }
    async function pt() {
      var Q, Ae;
      if (Pe.value) return;
      Pe.value = !0;
      const le = N("Updating comfygit-manager...", "info", 0);
      try {
        const Be = await R();
        if (me(le), Be.status !== "success") {
          if (N(Be.message || "Update failed", "error"), Be.manual_instructions) {
            const ot = Be.manual_instructions.split(`
`).map((q) => q.trim()).filter(Boolean);
            G.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: ot,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                G.value = null;
              }
            };
          }
          return;
        }
        if (N(Be.message || "Update complete", "success"), at(), Be.restart_required) {
          hs();
          try {
            await ((Ae = (Q = window.app) == null ? void 0 : Q.api) == null ? void 0 : Ae.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Be) {
        me(le);
        const ot = Be instanceof Error ? Be.message : "Update failed";
        N(ot, "error");
      } finally {
        Pe.value = !1;
      }
    }
    const Ut = z(() => {
      if (!O.value) return "neutral";
      const le = O.value.workflows, Q = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || O.value.has_changes;
      return O.value.comparison.is_synced ? Q ? "warning" : "success" : "error";
    });
    z(() => O.value ? Ut.value === "success" ? "All synced" : Ut.value === "warning" ? "Uncommitted changes" : Ut.value === "error" ? "Not synced" : "" : "");
    async function lt() {
      X.value = !0, F.value = null;
      try {
        const [le, Q, Ae, Be] = await Promise.all([
          l(!0),
          r(),
          c(),
          g()
        ]);
        O.value = le, W.value = Q.commits, I.value = Ae.branches, E.value = Be, a("statusUpdate", le), Oe.value && await Oe.value.loadWorkflows(!0);
      } catch (le) {
        F.value = le instanceof Error ? le.message : "Failed to load status", O.value = null, W.value = [], I.value = [];
      } finally {
        X.value = !1;
      }
    }
    function Mo(le) {
      se.value = le;
    }
    async function Ps(le) {
      var Ae;
      se.value = null;
      const Q = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      G.value = {
        title: Q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: Q ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Ae = le.hash) == null ? void 0 : Ae.slice(0, 7))}?`,
        details: Q ? gn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: Q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: Q,
        onConfirm: async () => {
          var q;
          G.value = null, hs();
          const Be = N(`Checking out ${le.short_hash || ((q = le.hash) == null ? void 0 : q.slice(0, 7))}...`, "info", 0), ot = await u(le.hash, Q);
          me(Be), ot.status === "success" ? N("Restarting ComfyUI...", "success") : N(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function oo(le) {
      const Q = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      G.value = {
        title: Q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: Q ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: Q ? gn() : void 0,
        warning: Q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: Q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, hs();
          const Ae = N(`Switching to ${le}...`, "info", 0), Be = await m(le, Q);
          me(Ae), Be.status === "success" ? N("Restarting ComfyUI...", "success") : N(Be.message || "Branch switch failed", "error");
        }
      };
    }
    async function no(le) {
      const Q = N(`Creating branch ${le}...`, "info", 0), Ae = await d(le);
      me(Q), Ae.status === "success" ? (N(`Branch "${le}" created`, "success"), await lt()) : N(Ae.message || "Failed to create branch", "error");
    }
    async function Do(le, Q = !1) {
      const Ae = async (Be) => {
        var q;
        const ot = N(`Deleting branch ${le}...`, "info", 0);
        try {
          const ke = await v(le, Be);
          me(ot), ke.status === "success" ? (N(`Branch "${le}" deleted`, "success"), await lt()) : (q = ke.message) != null && q.includes("not fully merged") ? G.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              G.value = null, await Ae(!0);
            }
          } : N(ke.message || "Failed to delete branch", "error");
        } catch (ke) {
          me(ot);
          const Le = ke instanceof Error ? ke.message : "Failed to delete branch";
          Le.includes("not fully merged") ? G.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              G.value = null, await Ae(!0);
            }
          } : N(Le, "error");
        }
      };
      G.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          G.value = null, await Ae(Q);
        }
      };
    }
    async function Lo(le) {
      se.value = null;
      const Q = prompt("Enter branch name:");
      if (Q) {
        const Ae = N(`Creating branch ${Q}...`, "info", 0), Be = await d(Q, le.hash);
        me(Ae), Be.status === "success" ? (N(`Branch "${Q}" created from ${le.short_hash}`, "success"), await lt()) : N(Be.message || "Failed to create branch", "error");
      }
    }
    function hs() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function xe() {
      G.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          G.value = null, hs(), N("Restarting environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function te() {
      G.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          G.value = null, N("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Ge(le, Q) {
      Y.value = !1, ve.value = le, Ie.value = Q || null, oe.value = !0;
    }
    async function yt() {
      oe.value = !1, de.value = !0, hs(), Te.value = {
        progress: 10,
        state: Nt(10),
        message: jt(10)
      };
      try {
        await w(ve.value, Ie.value || void 0), ys(), Ne();
      } catch (le) {
        _t(), de.value = !1, N(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, Ie.value = null;
      }
    }
    function Nt(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function jt(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Nt(le)] || "";
    }
    function ys() {
      if (U) return;
      let le = 10;
      const Q = 60, Ae = 5e3, Be = 100, ot = (Q - le) / (Ae / Be);
      U = window.setInterval(() => {
        if (le += ot, le >= Q && (le = Q, _t()), Te.value.progress < Q) {
          const q = Math.floor(le);
          Te.value = {
            progress: q,
            state: Nt(q),
            message: jt(q)
          };
        }
      }, Be);
    }
    function _t() {
      U && (clearInterval(U), U = null);
    }
    function Ne() {
      Ue || (Ue = window.setInterval(async () => {
        try {
          let le = await T.getStatus();
          if ((!le || le.state === "idle") && (le = await p()), !le)
            return;
          const Q = le.progress || 0;
          Q >= 60 && _t();
          const Ae = Math.max(Q, Te.value.progress), Be = le.state && le.state !== "idle" && le.state !== "unknown", ot = Be ? le.state : Nt(Ae), q = Be && le.message || jt(Ae);
          Te.value = {
            state: ot,
            progress: Ae,
            message: q
          }, le.state === "complete" ? (_t(), Xt(), de.value = !1, N(`✓ Switched to ${ve.value}`, "success"), await lt(), ve.value = "") : le.state === "rolled_back" ? (_t(), Xt(), de.value = !1, N("Switch failed, restored previous environment", "warning"), ve.value = "") : le.state === "critical_failure" && (_t(), Xt(), de.value = !1, N(`Critical error during switch: ${le.message}`, "error"), ve.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function Xt() {
      _t(), Ue && (clearInterval(Ue), Ue = null);
    }
    function rs() {
      var le;
      oe.value = !1, ve.value = "", (le = ee.value) != null && le.state && ee.value.state !== "managed" && (A.value = ee.value.state === "no_workspace" ? 1 : 2, B.value = !0);
    }
    async function ao(le) {
      Me.value = !1, await lt(), N(le.message, le.success ? "success" : "error");
    }
    async function lo() {
      Ce.value = !1;
      const le = N("Syncing environment...", "info", 0);
      try {
        const Q = await C("skip", !0);
        if (me(le), Q.status === "success") {
          const Ae = [];
          Q.nodes_installed.length && Ae.push(`${Q.nodes_installed.length} installed`), Q.nodes_removed.length && Ae.push(`${Q.nodes_removed.length} removed`);
          const Be = Ae.length ? `: ${Ae.join(", ")}` : "";
          N(`✓ Environment synced${Be}`, "success"), await lt();
        } else {
          const Ae = Q.errors.length ? Q.errors.join("; ") : Q.message;
          N(`Sync failed: ${Ae}`, "error");
        }
      } catch (Q) {
        me(le), N(`Sync error: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
      }
    }
    async function io(le) {
      var Q;
      try {
        const Ae = await b(le);
        Ae.failed.length === 0 ? N(`✓ Repaired ${Ae.success} workflow${Ae.success === 1 ? "" : "s"}`, "success") : N(`Repaired ${Ae.success}, failed: ${Ae.failed.length}`, "warning"), await lt();
      } catch (Ae) {
        N(`Repair failed: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
      } finally {
        (Q = we.value) == null || Q.resetRepairingState();
      }
    }
    async function js() {
      var Q, Ae;
      const le = N("Repairing environment...", "info", 0);
      try {
        const Be = await C("skip", !0);
        if (me(le), Be.status === "success") {
          const ot = [];
          Be.nodes_installed.length && ot.push(`${Be.nodes_installed.length} installed`), Be.nodes_removed.length && ot.push(`${Be.nodes_removed.length} removed`);
          const q = ot.length ? `: ${ot.join(", ")}` : "";
          N(`✓ Environment repaired${q}`, "success"), (Q = we.value) == null || Q.closeDetailModal(), await lt();
        } else {
          const ot = Be.errors.length ? Be.errors.join(", ") : Be.message || "Unknown error";
          N(`Repair failed: ${ot}`, "error");
        }
      } catch (Be) {
        me(le), N(`Repair error: ${Be instanceof Error ? Be.message : "Unknown error"}`, "error");
      } finally {
        (Ae = we.value) == null || Ae.resetRepairingEnvironmentState();
      }
    }
    async function ro(le, Q) {
      N(`Environment '${le}' created`, "success"), await lt(), Ye.value && await Ye.value.loadEnvironments(), Q && await Ge(le);
    }
    async function co(le) {
      var Q;
      if (((Q = j.value) == null ? void 0 : Q.name) === le) {
        N("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      G.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          G.value = null;
          try {
            const Ae = await k(le);
            Ae.status === "success" ? (N(`Environment "${le}" deleted`, "success"), await lt(), Ye.value && await Ye.value.loadEnvironments()) : N(Ae.message || "Failed to delete environment", "error");
          } catch (Ae) {
            N(`Error deleting environment: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function uo(le, Q) {
      B.value = !1;
      try {
        ee.value = await x();
      } catch {
      }
      await Ge(le, Q);
    }
    function fo() {
      B.value = !1, a("close");
    }
    async function mo(le, Q) {
      await Ge(le, Q);
    }
    async function ra(le) {
      await lt(), await Ge(le);
    }
    async function ca(le) {
      ee.value = await x(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function ua() {
      ce("environments", "all-envs"), setTimeout(() => {
        var le;
        (le = Ye.value) == null || le.openCreateModal();
      }, 100);
    }
    function gn() {
      if (!O.value) return [];
      const le = [], Q = O.value.workflows;
      return Q.new.length && le.push(`${Q.new.length} new workflow(s)`), Q.modified.length && le.push(`${Q.modified.length} modified workflow(s)`), Q.deleted.length && le.push(`${Q.deleted.length} deleted workflow(s)`), le;
    }
    return Qe(async () => {
      try {
        if (ee.value = await x(), ee.value.state === "no_workspace") {
          B.value = !0, A.value = 1;
          return;
        }
        if (ee.value.state === "empty_workspace") {
          B.value = !0, A.value = 2;
          return;
        }
        if (ee.value.state === "unmanaged") {
          B.value = !0, A.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await Promise.all([
        lt(),
        et()
      ]);
    }), (le, Q) => {
      var Ae, Be, ot, q, ke, Le, it, bt, zt, Ms, Ds, hn, hl;
      return n(), i("div", O7, [
        t("div", U7, [
          t("div", z7, [
            Q[31] || (Q[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            O.value ? (n(), i("div", F7)) : y("", !0)
          ]),
          t("div", V7, [
            S(ec),
            Q[34] || (Q[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Se(["icon-btn", { spinning: X.value }]),
              onClick: lt,
              title: "Refresh"
            }, [...Q[32] || (Q[32] = [
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
              onClick: Q[0] || (Q[0] = (je) => a("close")),
              title: "Close"
            }, [...Q[33] || (Q[33] = [
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
        Ve.value && ae.value ? (n(), L(D7, {
          key: 0,
          info: ae.value,
          updating: Pe.value,
          onUpdate: pt,
          onDismiss: at,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", B7, [
          t("div", { class: "env-switcher-header" }, [
            Q[35] || (Q[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: xe
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: te
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: Q[1] || (Q[1] = (je) => ce("environments", "all-envs"))
          }, [
            O.value ? (n(), i("div", W7, [
              t("span", null, f(((Ae = j.value) == null ? void 0 : Ae.name) || ((Be = O.value) == null ? void 0 : Be.environment) || "Loading..."), 1),
              t("span", G7, "(" + f(O.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            Q[36] || (Q[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", j7, [
          t("div", H7, [
            t("div", K7, [
              t("div", q7, [
                Q[37] || (Q[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "status" && be.value === "this-env" }]),
                  onClick: Q[2] || (Q[2] = (je) => ce("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "workflows" }]),
                  onClick: Q[3] || (Q[3] = (je) => ce("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "models-env" }]),
                  onClick: Q[4] || (Q[4] = (je) => ce("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "branches" }]),
                  onClick: Q[5] || (Q[5] = (je) => ce("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "history" }]),
                  onClick: Q[6] || (Q[6] = (je) => ce("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "nodes" }]),
                  onClick: Q[7] || (Q[7] = (je) => ce("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "debug-env" }]),
                  onClick: Q[8] || (Q[8] = (je) => ce("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              Q[41] || (Q[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", Y7, [
                Q[38] || (Q[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "environments" }]),
                  onClick: Q[9] || (Q[9] = (je) => ce("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "model-index" }]),
                  onClick: Q[10] || (Q[10] = (je) => ce("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "settings" }]),
                  onClick: Q[11] || (Q[11] = (je) => ce("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "debug-workspace" }]),
                  onClick: Q[12] || (Q[12] = (je) => ce("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              Q[42] || (Q[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", J7, [
                Q[40] || (Q[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "deploy" }]),
                  onClick: Q[13] || (Q[13] = (je) => ce("deploy", "sharing"))
                }, [
                  Q[39] || (Q[39] = $(" DEPLOY ", -1)),
                  We(D) > 0 ? (n(), i("span", Q7, f(We(D)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "export" }]),
                  onClick: Q[14] || (Q[14] = (je) => ce("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "import" }]),
                  onClick: Q[15] || (Q[15] = (je) => ce("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: ie.value === "remotes" }]),
                  onClick: Q[16] || (Q[16] = (je) => ce("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", X7, [
              S(tc)
            ])
          ]),
          t("div", Z7, [
            F.value ? (n(), i("div", eR, f(F.value), 1)) : !O.value && ie.value === "status" ? (n(), i("div", tR, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              ie.value === "status" ? (n(), L(gv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: we,
                status: O.value,
                "setup-state": K.value,
                onSwitchBranch: Ee,
                onCommitChanges: Q[17] || (Q[17] = (je) => Me.value = !0),
                onSyncEnvironment: Q[18] || (Q[18] = (je) => Ce.value = !0),
                onViewWorkflows: Q[19] || (Q[19] = (je) => ce("workflows", "this-env")),
                onViewHistory: Q[20] || (Q[20] = (je) => ce("history", "this-env")),
                onViewDebug: Q[21] || (Q[21] = (je) => ce("debug-env", "this-env")),
                onViewNodes: Q[22] || (Q[22] = (je) => ce("nodes", "this-env")),
                onRepairMissingModels: io,
                onRepairEnvironment: js,
                onStartSetup: Q[23] || (Q[23] = (je) => B.value = !0),
                onViewEnvironments: Q[24] || (Q[24] = (je) => ce("environments", "all-envs")),
                onCreateEnvironment: ua
              }, null, 8, ["status", "setup-state"])) : ie.value === "workflows" ? (n(), L(sw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Oe,
                onRefresh: lt
              }, null, 512)) : ie.value === "models-env" ? (n(), L(h_, {
                key: 2,
                onNavigate: De
              })) : ie.value === "branches" ? (n(), L(lp, {
                key: 3,
                branches: I.value,
                current: ((ot = O.value) == null ? void 0 : ot.branch) || null,
                onSwitch: oo,
                onCreate: no,
                onDelete: Do
              }, null, 8, ["branches", "current"])) : ie.value === "history" ? (n(), L(rp, {
                key: 4,
                commits: W.value,
                "current-ref": (q = O.value) == null ? void 0 : q.branch,
                onSelect: Mo,
                onCheckout: Ps
              }, null, 8, ["commits", "current-ref"])) : ie.value === "nodes" ? (n(), L(ib, {
                key: 5,
                "version-mismatches": ((Le = (ke = O.value) == null ? void 0 : ke.comparison) == null ? void 0 : Le.version_mismatches) || [],
                onOpenNodeManager: ue,
                onRepairEnvironment: js,
                onToast: ze
              }, null, 8, ["version-mismatches"])) : ie.value === "debug-env" ? (n(), L(SC, { key: 6 })) : ie.value === "environments" ? (n(), L(Xx, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Ye,
                onSwitch: Ge,
                onCreated: ro,
                onDelete: co
              }, null, 512)) : ie.value === "model-index" ? (n(), L(P_, {
                key: 8,
                onRefresh: lt
              })) : ie.value === "settings" ? (n(), L(hC, { key: 9 })) : ie.value === "debug-workspace" ? (n(), L(xC, { key: 10 })) : ie.value === "deploy" ? (n(), L(GI, {
                key: 11,
                onToast: ze,
                onNavigate: De
              })) : ie.value === "export" ? (n(), L(W3, { key: 12 })) : ie.value === "import" ? (n(), L(NS, {
                key: 13,
                onImportCompleteSwitch: ra
              })) : ie.value === "remotes" ? (n(), L(Q$, {
                key: 14,
                onToast: ze
              })) : y("", !0)
            ], 64))
          ])
        ]),
        se.value ? (n(), L(rE, {
          key: 1,
          commit: se.value,
          onClose: Q[25] || (Q[25] = (je) => se.value = null),
          onCheckout: Ps,
          onCreateBranch: Lo
        }, null, 8, ["commit"])) : y("", !0),
        G.value ? (n(), L(ml, {
          key: 2,
          title: G.value.title,
          message: G.value.message,
          details: G.value.details,
          warning: G.value.warning,
          confirmLabel: G.value.confirmLabel,
          cancelLabel: G.value.cancelLabel,
          secondaryLabel: G.value.secondaryLabel,
          secondaryAction: G.value.secondaryAction,
          destructive: G.value.destructive,
          onConfirm: G.value.onConfirm,
          onCancel: Q[26] || (Q[26] = (je) => G.value = null),
          onSecondary: G.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        S(ZE, {
          show: oe.value,
          "from-environment": ((it = j.value) == null ? void 0 : it.name) || "unknown",
          "to-environment": ve.value,
          onConfirm: yt,
          onClose: rs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Me.value && O.value ? (n(), L(Zr, {
          key: 3,
          status: O.value,
          "as-modal": !0,
          onClose: Q[27] || (Q[27] = (je) => Me.value = !1),
          onCommitted: ao
        }, null, 8, ["status"])) : y("", !0),
        Ce.value && O.value ? (n(), L(wT, {
          key: 4,
          show: Ce.value,
          "mismatch-details": {
            missing_nodes: O.value.comparison.missing_nodes,
            extra_nodes: O.value.comparison.extra_nodes
          },
          onConfirm: lo,
          onClose: Q[28] || (Q[28] = (je) => Ce.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        S(uT, {
          show: de.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Y.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: Q[30] || (Q[30] = ct((je) => Y.value = !1, ["self"]))
        }, [
          t("div", sR, [
            t("div", oR, [
              Q[44] || (Q[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: Q[29] || (Q[29] = (je) => Y.value = !1)
              }, [...Q[43] || (Q[43] = [
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
            t("div", nR, [
              Q[45] || (Q[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", aR, [
                (n(!0), i(H, null, he(E.value, (je) => (n(), i("div", {
                  key: je.name,
                  class: Se(["env-item", { current: je.is_current }])
                }, [
                  t("div", lR, [
                    t("div", iR, [
                      t("span", rR, f(je.is_current ? "●" : "○"), 1),
                      t("span", cR, f(je.name), 1),
                      je.current_branch ? (n(), i("span", uR, "(" + f(je.current_branch) + ")", 1)) : y("", !0),
                      je.is_current ? (n(), i("span", dR, "CURRENT")) : y("", !0)
                    ]),
                    t("div", fR, f(je.workflow_count) + " workflows • " + f(je.node_count) + " nodes ", 1)
                  ]),
                  je.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (mM) => Ge(je.name)
                  }, " SWITCH ", 8, mR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        B.value ? (n(), L($7, {
          key: 6,
          "default-path": ((bt = ee.value) == null ? void 0 : bt.default_path) || "~/comfygit",
          "detected-models-dir": ((zt = ee.value) == null ? void 0 : zt.detected_models_dir) || null,
          "initial-step": A.value,
          "existing-environments": ((Ms = ee.value) == null ? void 0 : Ms.environments) || [],
          "cli-installed": ((Ds = ee.value) == null ? void 0 : Ds.cli_installed) ?? !0,
          "setup-state": ((hn = ee.value) == null ? void 0 : hn.state) || "no_workspace",
          "workspace-path": ((hl = ee.value) == null ? void 0 : hl.workspace_path) || null,
          onComplete: uo,
          onClose: fo,
          onSwitchEnvironment: mo,
          onEnvironmentCreatedNoSwitch: ca
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", vR, [
          S(Sd, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(H, null, he($e.value, (je) => (n(), i("div", {
                key: je.id,
                class: Se(["toast", je.type])
              }, [
                t("span", pR, f(je.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), hR = /* @__PURE__ */ ye(gR, [["__scopeId", "data-v-9c2af32e"]]), yR = { class: "item-header" }, wR = { class: "item-info" }, kR = { class: "filename" }, _R = { class: "metadata" }, bR = { class: "size" }, $R = {
  key: 0,
  class: "type"
}, CR = { class: "item-actions" }, xR = {
  key: 0,
  class: "progress-section"
}, SR = { class: "progress-bar" }, IR = { class: "progress-stats" }, ER = { class: "downloaded" }, TR = { class: "speed" }, RR = {
  key: 0,
  class: "eta"
}, PR = {
  key: 1,
  class: "status-msg paused"
}, MR = {
  key: 2,
  class: "status-msg queued"
}, DR = {
  key: 3,
  class: "status-msg completed"
}, LR = {
  key: 4,
  class: "status-msg failed"
}, AR = {
  key: 0,
  class: "retries"
}, NR = /* @__PURE__ */ ge({
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
      class: Se(["download-item", `status-${e.item.status}`])
    }, [
      t("div", yR, [
        t("div", wR, [
          t("div", kR, f(e.item.filename), 1),
          t("div", _R, [
            t("span", bR, f(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", $R, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", CR, [
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
      e.item.status === "downloading" ? (n(), i("div", xR, [
        t("div", SR, [
          t("div", {
            class: "progress-fill",
            style: Gt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", IR, [
          t("span", ER, f(a(e.item.downloaded)) + " / " + f(a(e.item.size)), 1),
          t("span", TR, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", RR, f(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", PR, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", MR, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", DR, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", LR, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", AR, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ ye(NR, [["__scopeId", "data-v-2110df65"]]), OR = { class: "queue-title" }, UR = { class: "count" }, zR = { class: "queue-actions" }, FR = { class: "action-label" }, VR = {
  key: 0,
  class: "overall-progress"
}, BR = { class: "progress-bar" }, WR = {
  key: 0,
  class: "current-mini"
}, GR = { class: "filename" }, jR = { class: "speed" }, HR = {
  key: 1,
  class: "queue-content"
}, KR = {
  key: 0,
  class: "section"
}, qR = {
  key: 1,
  class: "section"
}, YR = { class: "section-header" }, JR = { class: "section-label paused" }, QR = { class: "items-list" }, XR = {
  key: 2,
  class: "section"
}, ZR = { class: "section-header" }, eP = { class: "section-label" }, tP = { class: "items-list" }, sP = {
  key: 3,
  class: "section"
}, oP = { class: "section-header" }, nP = { class: "section-label" }, aP = { class: "items-list" }, lP = {
  key: 4,
  class: "section"
}, iP = { class: "section-header" }, rP = { class: "section-label failed" }, cP = { class: "items-list" }, uP = /* @__PURE__ */ ge({
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
      clearCompleted: k
    } = Ro(), C = _(!1);
    let b = null;
    ft(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (T, D) => {
        b && (clearTimeout(b), b = null);
        const O = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, W = D && (D.active > 0 || D.paused > 0);
        O && W && (b = setTimeout(() => {
          k(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = z(() => {
      var O;
      if (s.items.length === 0) return 0;
      const T = l.value.length, D = ((O = o.value) == null ? void 0 : O.progress) || 0;
      return Math.round((T + D / 100) / s.items.length * 100);
    });
    function M(T) {
      m(T);
    }
    function R(T) {
      return T === 0 ? "" : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, D) => (n(), L(kt, { to: "body" }, [
      We(u) ? (n(), i("div", {
        key: 0,
        class: Se(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (O) => C.value = !C.value)
        }, [
          t("div", OR, [
            D[4] || (D[4] = t("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", UR, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", zR, [
            t("span", FR, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (n(), i("div", HR, [
          We(o) ? (n(), i("div", KR, [
            D[6] || (D[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(zo, {
              item: We(o),
              onCancel: D[1] || (D[1] = (O) => M(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (n(), i("div", qR, [
            t("div", YR, [
              t("span", JR, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...O) => We(w) && We(w)(...O))
              }, "Resume All")
            ]),
            t("div", QR, [
              (n(!0), i(H, null, he(We(c), (O) => (n(), L(zo, {
                key: O.id,
                item: O,
                onResume: (W) => We(g)(O.id),
                onRemove: (W) => We(p)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(a).length > 0 ? (n(), i("div", XR, [
            t("div", ZR, [
              t("span", eP, "Queued (" + f(We(a).length) + ")", 1)
            ]),
            t("div", tP, [
              (n(!0), i(H, null, he(We(a), (O) => (n(), L(zo, {
                key: O.id,
                item: O,
                onCancel: (W) => M(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (n(), i("div", sP, [
            t("div", oP, [
              t("span", nP, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...O) => We(k) && We(k)(...O))
              }, "Clear")
            ]),
            t("div", aP, [
              (n(!0), i(H, null, he(We(l).slice(0, 3), (O) => (n(), L(zo, {
                key: O.id,
                item: O,
                onRemove: (W) => We(p)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(r).length > 0 ? (n(), i("div", lP, [
            t("div", iP, [
              t("span", rP, "Failed (" + f(We(r).length) + ")", 1)
            ]),
            t("div", cP, [
              (n(!0), i(H, null, he(We(r), (O) => (n(), L(zo, {
                key: O.id,
                item: O,
                onRetry: (W) => We(v)(O.id),
                onRemove: (W) => We(p)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", VR, [
          t("div", BR, [
            t("div", {
              class: "progress-fill",
              style: Gt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          We(o) ? (n(), i("div", WR, [
            t("span", GR, f(We(o).filename), 1),
            t("span", jR, f(R(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), dP = /* @__PURE__ */ ye(uP, [["__scopeId", "data-v-60751cfa"]]), fP = { class: "detail-header" }, mP = { class: "item-count" }, vP = { class: "resource-list" }, pP = { class: "item-info" }, gP = { class: "item-name" }, hP = {
  key: 0,
  class: "item-subtitle"
}, yP = {
  key: 0,
  class: "installing-badge"
}, wP = ["title"], kP = {
  key: 2,
  class: "installed-badge"
}, _P = {
  key: 3,
  class: "queued-badge"
}, bP = {
  key: 1,
  class: "no-action"
}, $P = /* @__PURE__ */ ge({
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
    const o = e, a = s, l = z(() => o.itemType === "model" ? "Download" : "Install"), r = z(() => o.items.filter((p) => p.canAction)), c = z(() => r.value.length > 0 && r.value.every(
      (p) => {
        var k, C;
        return o.queuedItems.has(p.id) || ((k = o.installedItems) == null ? void 0 : k.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = z(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
    function d(p) {
      return o.queuedItems.has(p.id);
    }
    function m(p) {
      return o.installingItem === p.id;
    }
    function v(p) {
      var k;
      return ((k = o.installedItems) == null ? void 0 : k.has(p.id)) ?? !1;
    }
    function g(p) {
      var k;
      return ((k = o.failedItems) == null ? void 0 : k.has(p.id)) ?? !1;
    }
    function w(p) {
      var k;
      return ((k = o.failedItems) == null ? void 0 : k.get(p.id)) || "Unknown error";
    }
    return (p, k) => (n(), L(dt, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = (C) => a("close"))
    }, {
      body: h(() => [
        t("div", fP, [
          t("span", mP, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          r.value.length > 1 ? (n(), L(Re, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: c.value,
            onClick: k[0] || (k[0] = (C) => a("bulk-action"))
          }, {
            default: h(() => [
              $(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", vP, [
          (n(!0), i(H, null, he(e.items, (C) => (n(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", pP, [
              t("span", gP, f(C.name), 1),
              C.subtitle ? (n(), i("span", hP, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (n(), i(H, { key: 0 }, [
              m(C) ? (n(), i("span", yP, "Installing...")) : g(C) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, wP)) : v(C) ? (n(), i("span", kP, "Installed")) : d(C) ? (n(), i("span", _P, "Queued")) : (n(), L(Re, {
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
            ], 64)) : (n(), i("span", bP, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: k[1] || (k[1] = (C) => a("close"))
        }, {
          default: h(() => [...k[3] || (k[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), CP = /* @__PURE__ */ ye($P, [["__scopeId", "data-v-fac0fef0"]]), xP = {
  key: 0,
  class: "loading-state"
}, SP = {
  key: 1,
  class: "analysis-results"
}, IP = {
  key: 0,
  class: "section"
}, EP = { class: "section-header" }, TP = { class: "section-title" }, RP = { class: "item-list" }, PP = { class: "package-info" }, MP = { class: "package-name" }, DP = { class: "node-count" }, LP = {
  key: 1,
  class: "installing-badge"
}, AP = {
  key: 2,
  class: "queued-badge"
}, NP = ["title"], OP = {
  key: 4,
  class: "installed-badge"
}, UP = {
  key: 1,
  class: "section"
}, zP = { class: "section-header" }, FP = { class: "section-title" }, VP = { class: "item-list" }, BP = { class: "node-type" }, WP = {
  key: 0,
  class: "overflow-note"
}, GP = {
  key: 2,
  class: "section"
}, jP = { class: "section-header" }, HP = { class: "section-title" }, KP = { class: "item-list" }, qP = { class: "model-info" }, YP = { class: "model-name" }, JP = {
  key: 1,
  class: "queued-badge"
}, QP = {
  key: 1,
  class: "no-url"
}, XP = { class: "dont-show-again" }, ZP = /* @__PURE__ */ ge({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = _(!1), o = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Set()), m = _(!1), v = _(null), g = _(0), w = _(null), p = _(/* @__PURE__ */ new Set()), k = _(/* @__PURE__ */ new Map()), { addToQueue: C } = Ro(), { queueNodeInstall: b } = Ze(), x = z(() => M.value.length > 0 || T.value.length > 0 || D.value.length > 0), M = z(() => {
      var Z, ne;
      if (!((Z = a.value) != null && Z.nodes)) return [];
      const P = /* @__PURE__ */ new Map(), V = (a.value.nodes.resolved || []).filter((fe) => {
        var _e;
        return !fe.is_installed && ((_e = fe.package) == null ? void 0 : _e.package_id);
      });
      for (const fe of V) {
        const _e = fe.package.package_id;
        P.has(_e) || P.set(_e, {
          package_id: _e,
          title: fe.package.title || _e,
          node_count: 0,
          node_types: [],
          repository: fe.package.repository || null,
          latest_version: fe.package.latest_version || null
        });
        const ie = P.get(_e);
        ie.node_count++, ie.node_types.push(((ne = fe.reference) == null ? void 0 : ne.node_type) || fe.node_type);
      }
      return Array.from(P.values());
    }), R = z(() => M.value.reduce((P, V) => P + V.node_count, 0)), T = z(() => {
      var P;
      return (P = a.value) != null && P.nodes ? (a.value.nodes.unresolved || []).map((V) => {
        var Z;
        return {
          node_type: ((Z = V.reference) == null ? void 0 : Z.node_type) || V.node_type
        };
      }) : [];
    }), D = z(() => {
      var Z;
      if (!((Z = a.value) != null && Z.models)) return [];
      const P = (a.value.models.resolved || []).filter(
        (ne) => ne.match_type === "download_intent" || ne.match_type === "property_download_intent" || ne.match_type === "not_found"
      ).map((ne) => {
        var fe, _e, ie, be;
        return {
          filename: ((_e = (fe = ne.reference) == null ? void 0 : fe.widget_value) == null ? void 0 : _e.split("/").pop()) || ((ie = ne.reference) == null ? void 0 : ie.widget_value) || ne.widget_value,
          widget_value: ((be = ne.reference) == null ? void 0 : be.widget_value) || ne.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ne.download_source || null,
          targetPath: ne.target_path || null,
          canDownload: !!(ne.download_source && ne.target_path)
        };
      }), V = (a.value.models.unresolved || []).map((ne) => {
        var fe, _e, ie, be;
        return {
          filename: ((_e = (fe = ne.reference) == null ? void 0 : fe.widget_value) == null ? void 0 : _e.split("/").pop()) || ((ie = ne.reference) == null ? void 0 : ie.widget_value) || ne.widget_value,
          widget_value: ((be = ne.reference) == null ? void 0 : be.widget_value) || ne.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...P, ...V];
    }), O = z(() => D.value.filter((P) => P.canDownload)), W = z(() => M.value.length >= 5 ? M.value.slice(0, 4) : M.value), I = z(() => D.value.length >= 5 ? D.value.slice(0, 4) : D.value), E = z(() => M.value.length > 0 && M.value.every(
      (P) => r.value.has(P.package_id) || c.value.has(P.package_id) || u.value.has(P.package_id)
    )), j = z(() => O.value.length > 0 && O.value.every((P) => d.value.has(P.url))), ee = z(() => M.value.length > 0 || O.value.length > 0), B = z(() => {
      const P = M.value.length === 0 || E.value, V = O.value.length === 0 || j.value;
      return P && V;
    }), A = z(() => w.value === "models" ? `Missing Models (${D.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${R.value})` : ""), K = z(() => w.value === "models" ? D.value.map((P) => ({
      id: P.url || P.widget_value,
      name: P.filename,
      canAction: P.canDownload,
      actionDisabledReason: P.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? M.value.map((P) => ({
      id: P.package_id,
      name: P.title,
      subtitle: `(${P.node_count} ${P.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : []);
    function X(P) {
      if (w.value === "models") {
        const V = D.value.find((Z) => Z.url === P.id || Z.widget_value === P.id);
        V && Y(V);
      } else if (w.value === "packages") {
        const V = M.value.find((Z) => Z.package_id === P.id);
        V && se(V);
      }
    }
    function F() {
      w.value === "models" ? re() : w.value === "packages" && ae();
    }
    async function se(P) {
      const V = P.package_id;
      if (!(r.value.has(V) || c.value.has(V) || u.value.has(V))) {
        Ue(), v.value = V;
        try {
          const { ui_id: Z } = await b({
            id: V,
            version: P.latest_version || "latest",
            selected_version: P.latest_version || "latest",
            repository: P.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          k.value.set(Z, V), c.value.add(V), console.log("[ComfyGit] Registered pending install:", { ui_id: Z, packageId: V, pendingInstalls: Array.from(k.value.entries()) });
        } catch (Z) {
          console.error("[ComfyGit] Failed to queue package install:", Z), u.value.set(V, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function Y(P) {
      !P.url || !P.targetPath || d.value.has(P.url) || (C([{
        workflow: "unsaved",
        filename: P.filename,
        url: P.url,
        targetPath: P.targetPath
      }]), d.value.add(P.url));
    }
    async function ae() {
      for (const P of M.value)
        !r.value.has(P.package_id) && !c.value.has(P.package_id) && !u.value.has(P.package_id) && await se(P);
    }
    function re() {
      const P = O.value.filter(
        (V) => !d.value.has(V.url)
      );
      if (P.length !== 0) {
        C(P.map((V) => ({
          workflow: "unsaved",
          filename: V.filename,
          url: V.url,
          targetPath: V.targetPath
        })));
        for (const V of P)
          d.value.add(V.url);
      }
    }
    function Pe() {
      ae(), re();
    }
    function Ve() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Oe(P) {
      var fe, _e;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const V = P == null ? void 0 : P.id;
      if (V && p.value.has(V)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${V} this session`);
        return;
      }
      const Z = window.app, ne = (fe = Z == null ? void 0 : Z.extensionManager) == null ? void 0 : fe.workflow;
      if (ne) {
        let ce = !1;
        for (let De = 0; De < 20; De++) {
          const Ee = ne.activeWorkflow;
          if (!Ee) {
            await new Promise((Me) => setTimeout(Me, 50));
            continue;
          }
          const ue = (_e = Ee.activeState) == null ? void 0 : _e.id;
          if (!(V && ue === V)) {
            De < 19 && await new Promise((Me) => setTimeout(Me, 50));
            continue;
          }
          if (ce = !0, Ee.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Ee.filename}`), V && p.value.add(V);
            return;
          }
          break;
        }
        ce || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), k.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const ie = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: P, name: "unsaved" })
        });
        if (!ie.ok) {
          const be = await ie.json();
          throw new Error(be.error || "Failed to analyze workflow");
        }
        a.value = await ie.json(), x.value && (l.value = !0, V && p.value.add(V));
      } catch (ie) {
        console.error("[ComfyGit] Failed to analyze workflow:", ie);
      } finally {
        s.value = !1;
      }
    }
    function Ye() {
      l.value = !1, a.value = null;
    }
    function we(P) {
      const { workflow: V } = P.detail;
      V && Oe(V);
    }
    function oe(P) {
      var ne;
      const V = (ne = P.detail) == null ? void 0 : ne.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: V,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: P.detail
      });
      const Z = k.value.get(V);
      Z ? (v.value = Z, console.log("[ComfyGit] Installing package:", Z)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", V);
    }
    function de(P) {
      var fe, _e, ie, be, ce, De, Ee;
      const V = (fe = P.detail) == null ? void 0 : fe.ui_id, Z = (ie = (_e = P.detail) == null ? void 0 : _e.status) == null ? void 0 : ie.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: V,
        status: Z,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: P.detail
      });
      const ne = k.value.get(V);
      if (ne) {
        if (k.value.delete(V), c.value.delete(ne), v.value === ne && (v.value = null), Z === "success")
          r.value.add(ne), g.value++, console.log("[ComfyGit] Package installed successfully:", ne);
        else {
          const ue = ((De = (ce = (be = P.detail) == null ? void 0 : be.status) == null ? void 0 : ce.messages) == null ? void 0 : De[0]) || ((Ee = P.detail) == null ? void 0 : Ee.result) || "Unknown error";
          u.value.set(ne, ue), console.error("[ComfyGit] Package install failed:", ne, ue);
        }
        k.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", V);
    }
    let ve = null;
    function Ie() {
      var P;
      return ve || (ve = (P = window.app) == null ? void 0 : P.api), ve;
    }
    let Te = !1;
    function Ue() {
      if (Te) return !0;
      const P = Ie();
      return P ? (P.addEventListener("cm-task-started", oe), P.addEventListener("cm-task-completed", de), P.addEventListener("comfygit:workflow-changed", U), Te = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function U(P) {
      const { change_type: V } = P.detail;
      (V === "created" || V === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Qe(() => {
      window.addEventListener("comfygit:workflow-loaded", we);
    }), Gs(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", we), Te) {
        const P = Ie();
        P && (P.removeEventListener("cm-task-started", oe), P.removeEventListener("cm-task-completed", de), P.removeEventListener("comfygit:workflow-changed", U)), Te = !1;
      }
    }), (P, V) => (n(), i(H, null, [
      l.value ? (n(), L(dt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ye
      }, {
        body: h(() => [
          s.value ? (n(), i("div", xP, [...V[4] || (V[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && x.value ? (n(), i("div", SP, [
            M.value.length > 0 ? (n(), i("div", IP, [
              t("div", EP, [
                t("span", TP, "Missing Custom Nodes (" + f(R.value) + ")", 1),
                M.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: E.value,
                  onClick: ae
                }, {
                  default: h(() => [
                    $(f(E.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", RP, [
                (n(!0), i(H, null, he(W.value, (Z) => (n(), i("div", {
                  key: Z.package_id,
                  class: "package-item"
                }, [
                  t("div", PP, [
                    t("span", MP, f(Z.title), 1),
                    t("span", DP, "(" + f(Z.node_count) + " " + f(Z.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(Z.package_id) && !c.value.has(Z.package_id) && !u.value.has(Z.package_id) ? (n(), L(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === Z.package_id,
                    onClick: (ne) => se(Z)
                  }, {
                    default: h(() => [
                      $(f(v.value === Z.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === Z.package_id ? (n(), i("span", LP, "Installing...")) : c.value.has(Z.package_id) ? (n(), i("span", AP, "Queued")) : u.value.has(Z.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(Z.package_id)
                  }, "Failed ⚠", 8, NP)) : (n(), i("span", OP, "Installed"))
                ]))), 128)),
                M.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: V[0] || (V[0] = (Z) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(M.value.length) + " packages...", 1),
                  V[5] || (V[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            T.value.length > 0 ? (n(), i("div", UP, [
              t("div", zP, [
                t("span", FP, "Unknown Nodes (" + f(T.value.length) + ")", 1)
              ]),
              t("div", VP, [
                (n(!0), i(H, null, he(T.value.slice(0, 5), (Z) => (n(), i("div", {
                  key: Z.node_type,
                  class: "item"
                }, [
                  t("code", BP, f(Z.node_type), 1),
                  V[6] || (V[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                T.value.length > 5 ? (n(), i("div", WP, " ...and " + f(T.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            D.value.length > 0 ? (n(), i("div", GP, [
              t("div", jP, [
                t("span", HP, "Missing Models (" + f(D.value.length) + ")", 1),
                O.value.length > 1 ? (n(), L(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: j.value,
                  onClick: re
                }, {
                  default: h(() => [
                    $(f(j.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", KP, [
                (n(!0), i(H, null, he(I.value, (Z) => (n(), i("div", {
                  key: Z.widget_value,
                  class: "model-item"
                }, [
                  t("div", qP, [
                    t("span", YP, f(Z.filename), 1)
                  ]),
                  Z.canDownload ? (n(), i(H, { key: 0 }, [
                    d.value.has(Z.url) ? (n(), i("span", JP, "Queued")) : (n(), L(Re, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ne) => Y(Z)
                    }, {
                      default: h(() => [...V[7] || (V[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", QP, "Manual download required"))
                ]))), 128)),
                D.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: V[1] || (V[1] = (Z) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(D.value.length) + " models...", 1),
                  V[8] || (V[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", XP, [
              S(Hn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  V[2] || (V[2] = (Z) => m.value = Z),
                  Ve
                ]
              }, {
                default: h(() => [...V[9] || (V[9] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          S(Re, {
            variant: "secondary",
            onClick: Ye
          }, {
            default: h(() => [...V[10] || (V[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          ee.value ? (n(), L(Re, {
            key: 0,
            variant: "primary",
            disabled: B.value,
            onClick: Pe
          }, {
            default: h(() => [
              $(f(B.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), L(CP, {
        key: 1,
        title: A.value,
        items: K.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? r.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: V[3] || (V[3] = (Z) => w.value = null),
        onAction: X,
        onBulkAction: F
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), eM = /* @__PURE__ */ ye(ZP, [["__scopeId", "data-v-512ff6ab"]]), tM = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', sM = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', oM = {
  comfy: tM,
  phosphor: sM
}, pl = "comfy", oc = "comfygit-theme";
let Ys = null, nc = pl;
function nM() {
  try {
    const e = localStorage.getItem(oc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return pl;
}
function ac(e = pl) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = oM[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), nc = e;
  try {
    localStorage.setItem(oc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function aM() {
  return nc;
}
function lM(e) {
  ac(e);
}
function iM(e) {
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
const rM = nM();
ac(rM);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), lM(e);
  },
  getTheme: () => {
    const e = aM();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let es = null, Ft = null, Zo = null, Fo = null, fi = null, Vo = null, mi = null;
const xo = _(null);
let un = "no_workspace", lc = !1;
async function Ln() {
  var e;
  if (!((e = Kt) != null && e.api)) return null;
  try {
    const s = await Kt.api.fetchApi("/v2/comfygit/status");
    s.ok && (xo.value = await s.json());
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
function cM() {
  if (!xo.value) return !1;
  const e = xo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || xo.value.has_changes;
}
function In(e) {
  es && es.remove(), es = document.createElement("div"), es.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", es.appendChild(s), es.addEventListener("click", (l) => {
    l.target === es && Ea();
  });
  const o = (l) => {
    l.key === "Escape" && (Ea(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), la({
    render: () => vn(hR, {
      initialView: e,
      onClose: Ea,
      onStatusUpdate: async (l) => {
        xo.value = l, en(), await Wa(), ja(), Ga();
      }
    })
  }).mount(s), document.body.appendChild(es);
}
function Ea() {
  es && (es.remove(), es = null);
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
      status: xo.value,
      onClose: Bo,
      onCommitted: (l) => {
        Bo(), uM(l.success, l.message), Ln().then(en);
      }
    })
  }), Zo.mount(Ft), document.body.appendChild(Ft);
}
function Bo() {
  Zo && (Zo.unmount(), Zo = null), Ft && (Ft.remove(), Ft = null);
}
function uM(e, s) {
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
function dM() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", fi = la({
    render: () => vn(dP)
  }), fi.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function fM() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", mi = la({
    render: () => vn(eM)
  }), mi.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Pt = null;
function en() {
  if (!Pt) return;
  const e = Pt.querySelector(".commit-indicator");
  e && (e.style.display = cM() ? "block" : "none");
}
function ja() {
  if (!Pt) return;
  const e = un !== "managed";
  Pt.disabled = e, Pt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
        Pt && !Pt.disabled && vi(Pt);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = In, Pt = document.createElement("button"), Pt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Pt.innerHTML = 'Commit <span class="commit-indicator"></span>', Pt.title = "Quick Commit", Pt.onclick = () => vi(Pt), e.appendChild(s), e.appendChild(Pt), (r = (l = Kt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Kt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), dM(), fM(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      In(u);
    }));
    const { loadPendingDownloads: o } = Ro();
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
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => g.remove(), g.appendChild(k), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
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
        const k = document.createElement("span");
        k.textContent = "⚠️", k.style.fontSize = "20px", p.appendChild(k);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const b = document.createElement("div");
        b.textContent = "Node installation failed", b.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild(b);
        const x = document.createElement("div");
        x.textContent = "Dependency conflict detected", x.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(x), p.appendChild(C);
        const M = document.createElement("button");
        M.textContent = "View Logs", M.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, M.onmouseover = () => M.style.background = "#c62828", M.onmouseout = () => M.style.background = "#e53935", M.onclick = () => {
          p.remove(), In("debug-env");
        }, p.appendChild(M);
        const R = document.createElement("button");
        R.textContent = "×", R.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, R.onmouseover = () => R.style.opacity = "1", R.onmouseout = () => R.style.opacity = "0.6", R.onclick = () => p.remove(), p.appendChild(R), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const k = document.createElement("span");
        k.textContent = "✅", k.style.fontSize = "20px", p.appendChild(k);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(b);
        const x = document.createElement("div");
        x.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, x.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(x), p.appendChild(C);
        const M = document.createElement("button");
        M.textContent = "Apply Changes", M.style.cssText = `
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
        `, M.onmouseover = () => M.style.background = "rgba(255,255,255,0.1)", M.onmouseout = () => M.style.background = "transparent", M.onclick = async () => {
          M.disabled = !0, M.textContent = "Restarting...", M.style.opacity = "0.7", b.textContent = "Restarting...", x.textContent = "Applying changes, please wait...";
          try {
            const T = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Kt.refreshComboInNodes && (await Kt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", x.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", M.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), k.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", M.style.display = "none";
              }
            };
            a.addEventListener("reconnected", T, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (T) {
            console.error("[ComfyGit] Failed to restart:", T), b.textContent = "Restart Failed", b.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", M.textContent = "Try Again", M.disabled = !1, M.style.opacity = "1";
          }
        }, p.appendChild(M);
        const R = document.createElement("button");
        R.textContent = "×", R.title = "Dismiss (restart later)", R.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, R.onmouseover = () => R.style.opacity = "1", R.onmouseout = () => R.style.opacity = "0.6", R.onclick = () => p.remove(), p.appendChild(R), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
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
        const w = iM(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
