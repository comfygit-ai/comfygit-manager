import { app as Xt } from "../../scripts/app.js";
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
const mt = {}, $o = [], ks = () => {
}, pi = () => !1, qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qa = (e) => e.startsWith("onUpdate:"), xt = Object.assign, Ya = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, rc = Object.prototype.hasOwnProperty, it = (e, s) => rc.call(e, s), He = Array.isArray, Co = (e) => mn(e) === "[object Map]", Mo = (e) => mn(e) === "[object Set]", yl = (e) => mn(e) === "[object Date]", Je = (e) => typeof e == "function", bt = (e) => typeof e == "string", rs = (e) => typeof e == "symbol", ut = (e) => e !== null && typeof e == "object", gi = (e) => (ut(e) || Je(e)) && Je(e.then) && Je(e.catch), hi = Object.prototype.toString, mn = (e) => hi.call(e), cc = (e) => mn(e).slice(8, -1), yi = (e) => mn(e) === "[object Object]", Ja = (e) => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jo = /* @__PURE__ */ Ka(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, uc = /-\w/g, ss = Yn(
  (e) => e.replace(uc, (s) => s.slice(1).toUpperCase())
), dc = /\B([A-Z])/g, Hs = Yn(
  (e) => e.replace(dc, "-$1").toLowerCase()
), Jn = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ma = Yn(
  (e) => e ? `on${Jn(e)}` : ""
), Ws = (e, s) => !Object.is(e, s), Tn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, wi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Qn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, mc = (e) => {
  const s = bt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let wl;
const Xn = () => wl || (wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Yt(e) {
  if (He(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = bt(a) ? gc(a) : Yt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (bt(e) || ut(e))
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
  if (bt(e))
    s = e;
  else if (He(e))
    for (let o = 0; o < e.length; o++) {
      const a = Re(e[o]);
      a && (s += a + " ");
    }
  else if (ut(e))
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
  if (o = rs(e), a = rs(s), o || a)
    return e === s;
  if (o = He(e), a = He(s), o || a)
    return o && a ? wc(e, s) : !1;
  if (o = ut(e), a = ut(s), o || a) {
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
function Qa(e, s) {
  return e.findIndex((o) => ao(o, s));
}
const ki = (e) => !!(e && e.__v_isRef === !0), d = (e) => bt(e) ? e : e == null ? "" : He(e) || ut(e) && (e.toString === hi || !Je(e.toString)) ? ki(e) ? d(e.value) : JSON.stringify(e, bi, 2) : String(e), bi = (e, s) => ki(s) ? bi(e, s.value) : Co(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[fa(a, r) + " =>"] = l, o),
    {}
  )
} : Mo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => fa(o))
} : rs(s) ? fa(s) : ut(s) && !He(s) && !yi(s) ? String(s) : s, fa = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    rs(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wt;
class _c {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Wt, !s && Wt && (this.index = (Wt.scopes || (Wt.scopes = [])).push(
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
      const o = Wt;
      try {
        return Wt = this, s();
      } finally {
        Wt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Wt, Wt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Wt = this.prevScope, this.prevScope = void 0);
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
  return Wt;
}
let vt;
const va = /* @__PURE__ */ new WeakSet();
class $i {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Wt && Wt.active && Wt.effects.push(this);
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
    const s = vt, o = is;
    vt = this, is = !0;
    try {
      return this.fn();
    } finally {
      Ii(this), vt = s, is = o, this.flags &= -3;
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
let Ci = 0, Ho, Ko;
function xi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Ko, Ko = e;
    return;
  }
  e.next = Ho, Ho = e;
}
function Xa() {
  Ci++;
}
function Za() {
  if (--Ci > 0)
    return;
  if (Ko) {
    let s = Ko;
    for (Ko = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Ho; ) {
    let s = Ho;
    for (Ho = void 0; s; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === sn) || (e.globalVersion = sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Pa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = vt, a = is;
  vt = e, is = !0;
  try {
    Si(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ws(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    vt = o, is = a, Ii(e), e.flags &= -3;
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
let is = !0;
const Ti = [];
function Ps() {
  Ti.push(is), is = !1;
}
function Rs() {
  const e = Ti.pop();
  is = e === void 0 ? !0 : e;
}
function _l(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = vt;
    vt = void 0;
    try {
      s();
    } finally {
      vt = o;
    }
  }
}
let sn = 0;
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
    if (!vt || !is || vt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== vt)
      o = this.activeLink = new $c(vt, this), vt.deps ? (o.prevDep = vt.depsTail, vt.depsTail.nextDep = o, vt.depsTail = o) : vt.deps = vt.depsTail = o, Pi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = vt.depsTail, o.nextDep = void 0, vt.depsTail.nextDep = o, vt.depsTail = o, vt.deps === o && (vt.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, sn++, this.notify(s);
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
), on = Symbol(
  ""
);
function Rt(e, s, o) {
  if (is && vt) {
    let a = Ra.get(e);
    a || Ra.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new tl()), l.map = a, l.key = o), l.track();
  }
}
function Is(e, s, o, a, l, r) {
  const c = Ra.get(e);
  if (!c) {
    sn++;
    return;
  }
  const u = (m) => {
    m && m.trigger();
  };
  if (Xa(), s === "clear")
    c.forEach(u);
  else {
    const m = He(e), f = m && Ja(o);
    if (m && o === "length") {
      const v = Number(a);
      c.forEach((y, k) => {
        (k === "length" || k === on || !rs(k) && k >= v) && u(y);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), f && u(c.get(on)), s) {
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
  const s = nt(e);
  return s === e ? s : (Rt(s, "iterate", on), Zt(e) ? s : s.map(cs));
}
function Zn(e) {
  return Rt(e = nt(e), "iterate", on), e;
}
function Fs(e, s) {
  return Ms(e) ? no(e) ? To(cs(s)) : To(s) : cs(s);
}
const Cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return pa(this, Symbol.iterator, (e) => Fs(this, e));
  },
  concat(...e) {
    return ho(this).concat(
      ...e.map((s) => He(s) ? ho(s) : s)
    );
  },
  entries() {
    return pa(this, "entries", (e) => (e[1] = Fs(this, e[1]), e));
  },
  every(e, s) {
    return Cs(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Cs(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Fs(this, a)),
      arguments
    );
  },
  find(e, s) {
    return Cs(
      this,
      "find",
      e,
      s,
      (o) => Fs(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Cs(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Cs(
      this,
      "findLast",
      e,
      s,
      (o) => Fs(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Cs(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Cs(this, "forEach", e, s, void 0, arguments);
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
    return Cs(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Uo(this, "pop");
  },
  push(...e) {
    return Uo(this, "push", e);
  },
  reduce(e, ...s) {
    return kl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return kl(this, "reduceRight", e, s);
  },
  shift() {
    return Uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Cs(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Uo(this, "splice", e);
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
    return Uo(this, "unshift", e);
  },
  values() {
    return pa(this, "values", (e) => Fs(this, e));
  }
};
function pa(e, s, o) {
  const a = Zn(e), l = a[s]();
  return a !== e && !Zt(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const xc = Array.prototype;
function Cs(e, s, o, a, l, r) {
  const c = Zn(e), u = c !== e && !Zt(e), m = c[s];
  if (m !== xc[s]) {
    const y = m.apply(e, r);
    return u ? cs(y) : y;
  }
  let f = o;
  c !== e && (u ? f = function(y, k) {
    return o.call(this, Fs(e, y), k, e);
  } : o.length > 2 && (f = function(y, k) {
    return o.call(this, y, k, e);
  }));
  const v = m.call(c, f, a);
  return u && l ? l(v) : v;
}
function kl(e, s, o, a) {
  const l = Zn(e);
  let r = o;
  return l !== e && (Zt(e) ? o.length > 3 && (r = function(c, u, m) {
    return o.call(this, c, u, m, e);
  }) : r = function(c, u, m) {
    return o.call(this, c, Fs(e, u), m, e);
  }), l[s](r, ...a);
}
function ga(e, s, o) {
  const a = nt(e);
  Rt(a, "iterate", on);
  const l = a[s](...o);
  return (l === -1 || l === !1) && nl(o[0]) ? (o[0] = nt(o[0]), a[s](...o)) : l;
}
function Uo(e, s, o = []) {
  Ps(), Xa();
  const a = nt(e)[s].apply(e, o);
  return Za(), Rs(), a;
}
const Sc = /* @__PURE__ */ Ka("__proto__,__v_isRef,__isVue"), Ri = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(rs)
);
function Ic(e) {
  rs(e) || (e = String(e));
  const s = nt(this);
  return Rt(s, "has", e), s.hasOwnProperty(e);
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
    const c = He(s);
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
      Lt(s) ? s : a
    );
    if ((rs(o) ? Ri.has(o) : Sc(o)) || (l || Rt(s, "get", o), r))
      return u;
    if (Lt(u)) {
      const m = c && Ja(o) ? u : u.value;
      return l && ut(m) ? Un(m) : m;
    }
    return ut(u) ? l ? Un(u) : Ks(u) : u;
  }
}
class Di extends Mi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = He(s) && Ja(o);
    if (!this._isShallow) {
      const f = Ms(r);
      if (!Zt(a) && !Ms(a) && (r = nt(r), a = nt(a)), !c && Lt(r) && !Lt(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : it(s, o), m = Reflect.set(
      s,
      o,
      a,
      Lt(s) ? s : l
    );
    return s === nt(l) && (u ? Ws(a, r) && Is(s, "set", o, a) : Is(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = it(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Is(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!rs(o) || !Ri.has(o)) && Rt(s, "has", o), a;
  }
  ownKeys(s) {
    return Rt(
      s,
      "iterate",
      He(s) ? "length" : oo
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
    const l = this.__v_raw, r = nt(l), c = Co(r), u = e === "entries" || e === Symbol.iterator && c, m = e === "keys" && c, f = l[e](...a), v = o ? Da : s ? To : cs;
    return !s && Rt(
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
      const r = this.__v_raw, c = nt(r), u = nt(l);
      e || (Ws(l, u) && Rt(c, "get", l), Rt(c, "get", u));
      const { has: m } = wn(c), f = s ? Da : e ? To : cs;
      if (m.call(c, l))
        return f(r.get(l));
      if (m.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Rt(nt(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = nt(r), u = nt(l);
      return e || (Ws(l, u) && Rt(c, "has", l), Rt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, m = nt(u), f = s ? Da : e ? To : cs;
      return !e && Rt(m, "iterate", oo), u.forEach((v, y) => l.call(r, f(v), f(y), c));
    }
  };
  return xt(
    o,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(l) {
        !s && !Zt(l) && !Ms(l) && (l = nt(l));
        const r = nt(this);
        return wn(r).has.call(r, l) || (r.add(l), Is(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !Zt(r) && !Ms(r) && (r = nt(r));
        const c = nt(this), { has: u, get: m } = wn(c);
        let f = u.call(c, l);
        f || (l = nt(l), f = u.call(c, l));
        const v = m.call(c, l);
        return c.set(l, r), f ? Ws(r, v) && Is(c, "set", l, r) : Is(c, "add", l, r), this;
      },
      delete(l) {
        const r = nt(this), { has: c, get: u } = wn(r);
        let m = c.call(r, l);
        m || (l = nt(l), m = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return m && Is(r, "delete", l, void 0), f;
      },
      clear() {
        const l = nt(this), r = l.size !== 0, c = l.clear();
        return r && Is(
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
    it(o, l) && l in a ? o : a,
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
function Ks(e) {
  return Ms(e) ? e : ol(
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
  if (!ut(e) || e.__v_raw && !(s && e.__v_isReactive))
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
  return Ms(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ms(e) {
  return !!(e && e.__v_isReadonly);
}
function Zt(e) {
  return !!(e && e.__v_isShallow);
}
function nl(e) {
  return e ? !!e.__v_raw : !1;
}
function nt(e) {
  const s = e && e.__v_raw;
  return s ? nt(s) : e;
}
function Vc(e) {
  return !it(e, "__v_skip") && Object.isExtensible(e) && wi(e, "__v_skip", !0), e;
}
const cs = (e) => ut(e) ? Ks(e) : e, To = (e) => ut(e) ? Un(e) : e;
function Lt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Bc(e, !1);
}
function Bc(e, s) {
  return Lt(e) ? e : new Wc(e, s);
}
class Wc {
  constructor(s, o) {
    this.dep = new tl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : nt(s), this._value = o ? s : cs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || Zt(s) || Ms(s);
    s = a ? s : nt(s), Ws(s, o) && (this._rawValue = s, this._value = a ? s : cs(s), this.dep.trigger());
  }
}
function qe(e) {
  return Lt(e) ? e.value : e;
}
const Gc = {
  get: (e, s, o) => s === "__v_raw" ? e : qe(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Lt(l) && !Lt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Ai(e) {
  return no(e) ? e : new Proxy(e, Gc);
}
class jc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new tl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    vt !== this)
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
  return Je(e) ? a = e : (a = e.get, l = e.set), new jc(a, l, o);
}
const kn = {}, An = /* @__PURE__ */ new WeakMap();
let to;
function Kc(e, s = !1, o = to) {
  if (o) {
    let a = An.get(o);
    a || An.set(o, a = []), a.push(e);
  }
}
function qc(e, s, o = mt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: m } = o, f = (I) => l ? I : Zt(I) || l === !1 || l === 0 ? Es(I, 1) : Es(I);
  let v, y, k, p, w = !1, x = !1;
  if (Lt(e) ? (y = () => e.value, w = Zt(e)) : no(e) ? (y = () => f(e), w = !0) : He(e) ? (x = !0, w = e.some((I) => no(I) || Zt(I)), y = () => e.map((I) => {
    if (Lt(I))
      return I.value;
    if (no(I))
      return f(I);
    if (Je(I))
      return m ? m(I, 2) : I();
  })) : Je(e) ? s ? y = m ? () => m(e, 2) : e : y = () => {
    if (k) {
      Ps();
      try {
        k();
      } finally {
        Rs();
      }
    }
    const I = to;
    to = v;
    try {
      return m ? m(e, 3, [p]) : e(p);
    } finally {
      to = I;
    }
  } : y = ks, s && l) {
    const I = y, D = l === !0 ? 1 / 0 : l;
    y = () => Es(I(), D);
  }
  const $ = kc(), C = () => {
    v.stop(), $ && $.active && Ya($.effects, v);
  };
  if (r && s) {
    const I = s;
    s = (...D) => {
      I(...D), C();
    };
  }
  let A = x ? new Array(e.length).fill(kn) : kn;
  const T = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (s) {
        const D = v.run();
        if (l || w || (x ? D.some((U, W) => Ws(U, A[W])) : Ws(D, A))) {
          k && k();
          const U = to;
          to = v;
          try {
            const W = [
              D,
              // pass undefined as the old value when it's changed for the first time
              A === kn ? void 0 : x && A[0] === kn ? [] : A,
              p
            ];
            A = D, m ? m(s, 3, W) : (
              // @ts-expect-error
              s(...W)
            );
          } finally {
            to = U;
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
        for (const D of I) D();
      An.delete(v);
    }
  }, s ? a ? T(!0) : A = v.run() : c ? c(T.bind(null, !0), !0) : v.run(), C.pause = v.pause.bind(v), C.resume = v.resume.bind(v), C.stop = C, C;
}
function Es(e, s = 1 / 0, o) {
  if (s <= 0 || !ut(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Lt(e))
    Es(e.value, s, o);
  else if (He(e))
    for (let a = 0; a < e.length; a++)
      Es(e[a], s, o);
  else if (Mo(e) || Co(e))
    e.forEach((a) => {
      Es(a, s, o);
    });
  else if (yi(e)) {
    for (const a in e)
      Es(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Es(e[a], s, o);
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
    ea(l, s, o);
  }
}
function us(e, s, o, a) {
  if (Je(e)) {
    const l = fn(e, s, o, a);
    return l && gi(l) && l.catch((r) => {
      ea(r, s, o);
    }), l;
  }
  if (He(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(us(e[r], s, o, a));
    return l;
  }
}
function ea(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || mt;
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
      Ps(), fn(r, null, 10, [
        e,
        m,
        f
      ]), Rs();
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
const zt = [];
let ys = -1;
const xo = [];
let Vs = null, _o = 0;
const Oi = /* @__PURE__ */ Promise.resolve();
let On = null;
function St(e) {
  const s = On || Oi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Jc(e) {
  let s = ys + 1, o = zt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = zt[a], r = nn(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function al(e) {
  if (!(e.flags & 1)) {
    const s = nn(e), o = zt[zt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= nn(o) ? zt.push(e) : zt.splice(Jc(s), 0, e), e.flags |= 1, zi();
  }
}
function zi() {
  On || (On = Oi.then(Vi));
}
function Qc(e) {
  He(e) ? xo.push(...e) : Vs && e.id === -1 ? Vs.splice(_o + 1, 0, e) : e.flags & 1 || (xo.push(e), e.flags |= 1), zi();
}
function bl(e, s, o = ys + 1) {
  for (; o < zt.length; o++) {
    const a = zt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      zt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Fi(e) {
  if (xo.length) {
    const s = [...new Set(xo)].sort(
      (o, a) => nn(o) - nn(a)
    );
    if (xo.length = 0, Vs) {
      Vs.push(...s);
      return;
    }
    for (Vs = s, _o = 0; _o < Vs.length; _o++) {
      const o = Vs[_o];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Vs = null, _o = 0;
  }
}
const nn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Vi(e) {
  try {
    for (ys = 0; ys < zt.length; ys++) {
      const s = zt[ys];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), fn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ys < zt.length; ys++) {
      const s = zt[ys];
      s && (s.flags &= -2);
    }
    ys = -1, zt.length = 0, Fi(), On = null, (zt.length || xo.length) && Vi();
  }
}
let Et = null, Bi = null;
function zn(e) {
  const s = Et;
  return Et = e, Bi = e && e.type.__scopeId || null, s;
}
function g(e, s = Et, o) {
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
function Xe(e, s) {
  if (Et === null)
    return e;
  const o = aa(Et), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, m = mt] = s[l];
    r && (Je(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Es(c), a.push({
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
function Qs(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let m = u.dir[a];
    m && (Ps(), us(m, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Rs());
  }
}
const Wi = Symbol("_vte"), Gi = (e) => e.__isTeleport, qo = (e) => e && (e.disabled || e.disabled === ""), $l = (e) => e && (e.defer || e.defer === ""), Cl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, La = (e, s) => {
  const o = e && e.to;
  return bt(o) ? s ? s(o) : null : o;
}, ji = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, m, f) {
    const {
      mc: v,
      pc: y,
      pbc: k,
      o: { insert: p, querySelector: w, createText: x, createComment: $ }
    } = f, C = qo(s.props);
    let { shapeFlag: A, children: T, dynamicChildren: I } = s;
    if (e == null) {
      const D = s.el = x(""), U = s.anchor = x("");
      p(D, o, a), p(U, o, a);
      const W = (M, te) => {
        A & 16 && v(
          T,
          M,
          te,
          l,
          r,
          c,
          u,
          m
        );
      }, E = () => {
        const M = s.target = La(s.props, w), te = Hi(M, s, x, p);
        M && (c !== "svg" && Cl(M) ? c = "svg" : c !== "mathml" && xl(M) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(M), C || (W(M, te), Pn(s, !1)));
      };
      C && (W(o, U), Pn(s, !0)), $l(s.props) ? (s.el.__isMounted = !1, At(() => {
        E(), delete s.el.__isMounted;
      }, r)) : E();
    } else {
      if ($l(s.props) && e.el.__isMounted === !1) {
        At(() => {
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
      const D = s.anchor = e.anchor, U = s.target = e.target, W = s.targetAnchor = e.targetAnchor, E = qo(e.props), M = E ? o : U, te = E ? D : W;
      if (c === "svg" || Cl(U) ? c = "svg" : (c === "mathml" || xl(U)) && (c = "mathml"), I ? (k(
        e.dynamicChildren,
        I,
        M,
        l,
        r,
        c,
        u
      ), ul(e, s, !0)) : m || y(
        e,
        s,
        M,
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
          D,
          f,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const le = s.target = La(
          s.props,
          w
        );
        le && bn(
          s,
          le,
          null,
          f,
          0
        );
      } else E && bn(
        s,
        U,
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
      const p = r || !qo(k);
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
  if (y && a(c, s, o), (!y || qo(v)) && m & 16)
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
  function k(x, $, C, A) {
    $.anchor = y(
      c(x),
      $,
      u(x),
      o,
      a,
      l,
      r
    ), $.targetStart = C, $.targetAnchor = A;
  }
  const p = s.target = La(
    s.props,
    m
  ), w = qo(s.props);
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
const Tt = ji;
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
const Ss = Symbol("_leaveCb"), $n = Symbol("_enterCb");
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
const Qt = [Function, Array], qi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Qt,
  onEnter: Qt,
  onAfterEnter: Qt,
  onEnterCancelled: Qt,
  // leave
  onBeforeLeave: Qt,
  onLeave: Qt,
  onAfterLeave: Qt,
  onLeaveCancelled: Qt,
  // appear
  onBeforeAppear: Qt,
  onAppear: Qt,
  onAfterAppear: Qt,
  onAppearCancelled: Qt
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
      const r = Ji(l), c = nt(e), { mode: u } = c;
      if (a.isLeaving)
        return ha(r);
      const m = Sl(r);
      if (!m)
        return ha(r);
      let f = an(
        m,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (y) => f = y
      );
      m.type !== Mt && lo(m, f);
      let v = o.subTree && Sl(o.subTree);
      if (v && v.type !== Mt && !so(v, m) && Yi(o).type !== Mt) {
        let y = an(
          v,
          c,
          a,
          o
        );
        if (lo(v, y), u === "out-in" && m.type !== Mt)
          return a.isLeaving = !0, y.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete y.afterLeave, v = void 0;
          }, ha(r);
        u === "in-out" && m.type !== Mt ? y.delayLeave = (k, p, w) => {
          const x = Qi(
            a,
            v
          );
          x[String(v.key)] = v, k[Ss] = () => {
            p(), k[Ss] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            w(), delete f.delayedLeave, v = void 0;
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
      if (o.type !== Mt) {
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
function an(e, s, o, a, l) {
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
    onAfterAppear: A,
    onAppearCancelled: T
  } = s, I = String(e.key), D = Qi(o, e), U = (M, te) => {
    M && us(
      M,
      a,
      9,
      te
    );
  }, W = (M, te) => {
    const le = te[1];
    U(M, te), He(M) ? M.every((oe) => oe.length <= 1) && le() : M.length <= 1 && le();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(M) {
      let te = m;
      if (!o.isMounted)
        if (r)
          te = $ || m;
        else
          return;
      M[Ss] && M[Ss](
        !0
        /* cancelled */
      );
      const le = D[I];
      le && so(e, le) && le.el[Ss] && le.el[Ss](), U(te, [M]);
    },
    enter(M) {
      let te = f, le = v, oe = y;
      if (!o.isMounted)
        if (r)
          te = C || f, le = A || v, oe = T || y;
        else
          return;
      let J = !1;
      const G = M[$n] = (X) => {
        J || (J = !0, X ? U(oe, [M]) : U(le, [M]), E.delayedLeave && E.delayedLeave(), M[$n] = void 0);
      };
      te ? W(te, [M, G]) : G();
    },
    leave(M, te) {
      const le = String(e.key);
      if (M[$n] && M[$n](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return te();
      U(k, [M]);
      let oe = !1;
      const J = M[Ss] = (G) => {
        oe || (oe = !0, te(), G ? U(x, [M]) : U(w, [M]), M[Ss] = void 0, D[le] === e && delete D[le]);
      };
      D[le] = e, p ? W(p, [M, J]) : J();
    },
    clone(M) {
      const te = an(
        M,
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
    return e = Gs(e), e.children = null, e;
}
function Sl(e) {
  if (!ta(e))
    return Gi(e.type) && e.children ? Ji(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Je(o.default))
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
    c.type === j ? (c.patchFlag & 128 && l++, a = a.concat(
      ll(c.children, s, u)
    )) : (s || c.type !== Mt) && a.push(u != null ? Gs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function we(e, s) {
  return Je(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    xt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Xi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Fn = /* @__PURE__ */ new WeakMap();
function Yo(e, s, o, a, l = !1) {
  if (He(e)) {
    e.forEach(
      (w, x) => Yo(
        w,
        s && (He(s) ? s[x] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (So(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Yo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? aa(a.component) : a.el, c = l ? null : r, { i: u, r: m } = e, f = s && s.r, v = u.refs === mt ? u.refs = {} : u.refs, y = u.setupState, k = nt(y), p = y === mt ? pi : (w) => it(k, w);
  if (f != null && f !== m) {
    if (Il(s), bt(f))
      v[f] = null, p(f) && (y[f] = null);
    else if (Lt(f)) {
      f.value = null;
      const w = s;
      w.k && (v[w.k] = null);
    }
  }
  if (Je(m))
    fn(m, u, 12, [c, v]);
  else {
    const w = bt(m), x = Lt(m);
    if (w || x) {
      const $ = () => {
        if (e.f) {
          const C = w ? p(m) ? y[m] : v[m] : m.value;
          if (l)
            He(C) && Ya(C, r);
          else if (He(C))
            C.includes(r) || C.push(r);
          else if (w)
            v[m] = [r], p(m) && (y[m] = v[m]);
          else {
            const A = [r];
            m.value = A, e.k && (v[e.k] = A);
          }
        } else w ? (v[m] = c, p(m) && (y[m] = c)) : x && (m.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const C = () => {
          $(), Fn.delete(e);
        };
        C.id = -1, Fn.set(e, C), At(C, o);
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
function Zi(e, s, o = Dt) {
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
  qs(() => {
    Ya(a[s], l);
  }, o);
}
function sa(e, s, o = Dt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Ps();
      const u = vn(o), m = us(s, o, e, c);
      return u(), Rs(), m;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Ds = (e) => (s, o = Dt) => {
  (!cn || e === "sp") && sa(e, (...a) => s(...a), o);
}, nu = Ds("bm"), et = Ds("m"), au = Ds(
  "bu"
), er = Ds("u"), tr = Ds(
  "bum"
), qs = Ds("um"), lu = Ds(
  "sp"
), iu = Ds("rtg"), ru = Ds("rtc");
function cu(e, s = Dt) {
  sa("ec", e, s);
}
const uu = "components", sr = Symbol.for("v-ndc");
function il(e) {
  return bt(e) ? du(uu, e, !1) || e : e || sr;
}
function du(e, s, o = !0, a = !1) {
  const l = Et || Dt;
  if (l) {
    const r = l.type;
    {
      const u = Zu(
        r,
        !1
      );
      if (u && (u === s || u === ss(s) || u === Jn(ss(s))))
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
  return e && (e[s] || e[ss(s)] || e[Jn(ss(s))]);
}
function he(e, s, o, a) {
  let l;
  const r = o, c = He(e);
  if (c || bt(e)) {
    const u = c && no(e);
    let m = !1, f = !1;
    u && (m = !Zt(e), f = Ms(e), e = Zn(e)), l = new Array(e.length);
    for (let v = 0, y = e.length; v < y; v++)
      l[v] = s(
        m ? f ? To(cs(e[v])) : cs(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (ut(e))
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
    if (He(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function Qe(e, s, o = {}, a, l) {
  if (Et.ce || Et.parent && So(Et.parent) && Et.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), R(
      j,
      null,
      [S("slot", o, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && or(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, m = R(
    j,
    {
      key: (u && !rs(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), m;
}
function or(e) {
  return e.some((s) => rn(s) ? !(s.type === Mt || s.type === j && !or(s.children)) : !0) ? e : null;
}
const Na = (e) => e ? br(e) ? aa(e) : Na(e.parent) : null, Jo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xt(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = St.bind(e.proxy)),
    $watch: (e) => $u.bind(e)
  })
), ya = (e, s) => e !== mt && !e.__isScriptSetup && it(e, s), mu = {
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
        if (l !== mt && it(l, s))
          return c[s] = 2, l[s];
        if (it(r, s))
          return c[s] = 3, r[s];
        if (o !== mt && it(o, s))
          return c[s] = 4, o[s];
        Ua && (c[s] = 0);
      }
    }
    const f = Jo[s];
    let v, y;
    if (f)
      return s === "$attrs" && Rt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== mt && it(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      y = m.config.globalProperties, it(y, s)
    )
      return y[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return ya(l, s) ? (l[s] = o, !0) : a !== mt && it(a, s) ? (a[s] = o, !0) : it(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let m;
    return !!(o[u] || e !== mt && u[0] !== "$" && it(e, u) || ya(s, u) || it(r, u) || it(a, u) || it(Jo, u) || it(l.config.globalProperties, u) || (m = c.__cssModules) && m[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : it(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Tl(e) {
  return He(e) ? e.reduce(
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
    beforeUnmount: A,
    destroyed: T,
    unmounted: I,
    render: D,
    renderTracked: U,
    renderTriggered: W,
    errorCaptured: E,
    serverPrefetch: M,
    // public API
    expose: te,
    inheritAttrs: le,
    // assets
    components: oe,
    directives: J,
    filters: G
  } = s;
  if (f && vu(f, a, null), c)
    for (const re in c) {
      const B = c[re];
      Je(B) && (a[re] = B.bind(o));
    }
  if (l) {
    const re = l.call(o, o);
    ut(re) && (e.data = Ks(re));
  }
  if (Ua = !0, r)
    for (const re in r) {
      const B = r[re], ee = Je(B) ? B.bind(o, o) : Je(B.get) ? B.get.bind(o, o) : ks, me = !Je(B) && Je(B.set) ? B.set.bind(o) : ks, Ne = L({
        get: ee,
        set: me
      });
      Object.defineProperty(a, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (We) => Ne.value = We
      });
    }
  if (u)
    for (const re in u)
      nr(u[re], a, o, re);
  if (m) {
    const re = Je(m) ? m.call(o) : m;
    Reflect.ownKeys(re).forEach((B) => {
      _u(B, re[B]);
    });
  }
  v && Pl(v, e, "c");
  function ae(re, B) {
    He(B) ? B.forEach((ee) => re(ee.bind(o))) : B && re(B.bind(o));
  }
  if (ae(nu, y), ae(et, k), ae(au, p), ae(er, w), ae(tu, x), ae(su, $), ae(cu, E), ae(ru, U), ae(iu, W), ae(tr, A), ae(qs, I), ae(lu, M), He(te))
    if (te.length) {
      const re = e.exposed || (e.exposed = {});
      te.forEach((B) => {
        Object.defineProperty(re, B, {
          get: () => o[B],
          set: (ee) => o[B] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === ks && (e.render = D), le != null && (e.inheritAttrs = le), oe && (e.components = oe), J && (e.directives = J), M && Xi(e);
}
function vu(e, s, o = ks) {
  He(e) && (e = Aa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    ut(l) ? "default" in l ? r = Rn(
      l.from || a,
      l.default,
      !0
    ) : r = Rn(l.from || a) : r = Rn(l), Lt(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Pl(e, s, o) {
  us(
    He(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function nr(e, s, o, a) {
  let l = a.includes(".") ? rr(o, a) : () => o[a];
  if (bt(e)) {
    const r = s[e];
    Je(r) && kt(l, r);
  } else if (Je(e))
    kt(l, e.bind(o));
  else if (ut(e))
    if (He(e))
      e.forEach((r) => nr(r, s, o, a));
    else {
      const r = Je(e.handler) ? e.handler.bind(o) : s[e.handler];
      Je(r) && kt(l, r, e);
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
  ), Vn(m, s, c)), ut(s) && r.set(s, m), m;
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
  methods: Go,
  computed: Go,
  // lifecycle
  beforeCreate: Ut,
  created: Ut,
  beforeMount: Ut,
  mounted: Ut,
  beforeUpdate: Ut,
  updated: Ut,
  beforeDestroy: Ut,
  beforeUnmount: Ut,
  destroyed: Ut,
  unmounted: Ut,
  activated: Ut,
  deactivated: Ut,
  errorCaptured: Ut,
  serverPrefetch: Ut,
  // assets
  components: Go,
  directives: Go,
  // watch
  watch: hu,
  // provide / inject
  provide: Rl,
  inject: gu
};
function Rl(e, s) {
  return s ? e ? function() {
    return xt(
      Je(e) ? e.call(this, this) : e,
      Je(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function gu(e, s) {
  return Go(Aa(e), Aa(s));
}
function Aa(e) {
  if (He(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Ut(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Go(e, s) {
  return e ? xt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Ml(e, s) {
  return e ? He(e) && He(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : xt(
    /* @__PURE__ */ Object.create(null),
    Tl(e),
    Tl(s ?? {})
  ) : s;
}
function hu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = xt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Ut(e[a], s[a]);
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
    Je(a) || (a = xt({}, a)), l != null && !ut(l) && (l = null);
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
        return c.has(v) || (v && Je(v.install) ? (c.add(v), v.install(f, ...y)) : Je(v) && (c.add(v), v(f, ...y))), f;
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
        m && (us(
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
  if (Dt) {
    let o = Dt.provides;
    const a = Dt.parent && Dt.parent.provides;
    a === o && (o = Dt.provides = Object.create(a)), o[e] = s;
  }
}
function Rn(e, s, o = !1) {
  const a = ml();
  if (a || Io) {
    let l = Io ? Io._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Je(s) ? s.call(a && a.proxy) : s;
  }
}
const ku = Symbol.for("v-scx"), bu = () => Rn(ku);
function kt(e, s, o) {
  return ir(e, s, o);
}
function ir(e, s, o = mt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = xt({}, o), m = s && a || !s && r !== "post";
  let f;
  if (cn) {
    if (r === "sync") {
      const p = bu();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!m) {
      const p = () => {
      };
      return p.stop = ks, p.resume = ks, p.pause = ks, p;
    }
  }
  const v = Dt;
  u.call = (p, w, x) => us(p, v, w, x);
  let y = !1;
  r === "post" ? u.scheduler = (p) => {
    At(p, v && v.suspense);
  } : r !== "sync" && (y = !0, u.scheduler = (p, w) => {
    w ? p() : al(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), y && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const k = qc(e, s, u);
  return cn && (f ? f.push(k) : m && k()), k;
}
function $u(e, s, o) {
  const a = this.proxy, l = bt(e) ? e.includes(".") ? rr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Je(s) ? r = s : (r = s.handler, o = s);
  const c = vn(this), u = ir(l, r.bind(a), o);
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
const Cu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ss(s)}Modifiers`] || e[`${Hs(s)}Modifiers`];
function xu(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || mt;
  let l = o;
  const r = s.startsWith("update:"), c = r && Cu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => bt(v) ? v.trim() : v)), c.number && (l = o.map(Qn)));
  let u, m = a[u = ma(s)] || // also try camelCase event handler (#2249)
  a[u = ma(ss(s))];
  !m && r && (m = a[u = ma(Hs(s))]), m && us(
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
    e.emitted[u] = !0, us(
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
  if (!Je(e)) {
    const m = (f) => {
      const v = cr(f, s, !0);
      v && (u = !0, xt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !u ? (ut(e) && a.set(e, null), null) : (He(r) ? r.forEach((m) => c[m] = null) : xt(c, r), ut(e) && a.set(e, c), c);
}
function oa(e, s) {
  return !e || !qn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), it(e, s[0].toLowerCase() + s.slice(1)) || it(e, Hs(s)) || it(e, s));
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
  let C, A;
  try {
    if (o.shapeFlag & 4) {
      const I = l || a, D = I;
      C = _s(
        f.call(
          D,
          I,
          v,
          y,
          p,
          k,
          w
        )
      ), A = u;
    } else {
      const I = s;
      C = _s(
        I.length > 1 ? I(
          y,
          { attrs: u, slots: c, emit: m }
        ) : I(
          y,
          null
        )
      ), A = s.props ? u : Iu(u);
    }
  } catch (I) {
    Qo.length = 0, ea(I, e, 1), C = S(Mt);
  }
  let T = C;
  if (A && x !== !1) {
    const I = Object.keys(A), { shapeFlag: D } = T;
    I.length && D & 7 && (r && I.some(qa) && (A = Eu(
      A,
      r
    )), T = Gs(T, A, !1, !0));
  }
  return o.dirs && (T = Gs(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && lo(T, o.transition), C = T, zn($), C;
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
  } = e, u = nt(l), [m] = e.propsOptions;
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
          if (it(r, k))
            p !== r[k] && (r[k] = p, f = !0);
          else {
            const w = ss(k);
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
      !it(s, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Hs(y)) === y || !it(s, v))) && (m ? o && // for camelCase
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
        (!s || !it(s, y)) && (delete r[y], f = !0);
  }
  f && Is(e.attrs, "set", "");
}
function fr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let m in s) {
      if (jo(m))
        continue;
      const f = s[m];
      let v;
      l && it(l, v = ss(m)) ? !r || !r.includes(v) ? o[v] = f : (u || (u = {}))[v] = f : oa(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, c = !0);
    }
  if (r) {
    const m = nt(o), f = u || mt;
    for (let v = 0; v < r.length; v++) {
      const y = r[v];
      o[y] = Oa(
        l,
        m,
        y,
        f[y],
        e,
        !it(f, y)
      );
    }
  }
  return c;
}
function Oa(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = it(c, "default");
    if (u && a === void 0) {
      const m = c.default;
      if (c.type !== Function && !c.skipFactory && Je(m)) {
        const { propsDefaults: f } = l;
        if (o in f)
          a = f[o];
        else {
          const v = vn(l);
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
    ] && (a === "" || a === Hs(o)) && (a = !0));
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
  if (!Je(e)) {
    const v = (y) => {
      m = !0;
      const [k, p] = vr(y, s, !0);
      xt(c, k), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !m)
    return ut(e) && a.set(e, $o), $o;
  if (He(r))
    for (let v = 0; v < r.length; v++) {
      const y = ss(r[v]);
      Nl(y) && (c[y] = mt);
    }
  else if (r)
    for (const v in r) {
      const y = ss(v);
      if (Nl(y)) {
        const k = r[v], p = c[y] = He(k) || Je(k) ? { type: k } : xt({}, k), w = p.type;
        let x = !1, $ = !0;
        if (He(w))
          for (let C = 0; C < w.length; ++C) {
            const A = w[C], T = Je(A) && A.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          x = Je(w) && w.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = x, p[
          1
          /* shouldCastTrue */
        ] = $, (x || it(p, "default")) && u.push(y);
      }
    }
  const f = [c, u];
  return ut(e) && a.set(e, f), f;
}
function Nl(e) {
  return e[0] !== "$" && !jo(e);
}
const rl = (e) => e === "_" || e === "_ctx" || e === "$stable", cl = (e) => He(e) ? e.map(_s) : [_s(e)], Lu = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => cl(s(...l)), o);
  return a._c = !1, a;
}, pr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (rl(l)) continue;
    const r = e[l];
    if (Je(r))
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
  let r = !0, c = mt;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : hr(l, s, o) : (r = !s.$stable, pr(s, l)), c = s;
  } else s && (gr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !rl(u) && c[u] == null && delete l[u];
}, At = Vu;
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
    setScopeId: p = ks,
    insertStaticContent: w
  } = e, x = (O, Y, de, Ee = null, be = null, $e = null, Me = void 0, ye = null, Pe = !!Y.dynamicChildren) => {
    if (O === Y)
      return;
    O && !so(O, Y) && (Ee = V(O), We(O, be, $e, !0), O = null), Y.patchFlag === -2 && (Pe = !1, Y.dynamicChildren = null);
    const { type: fe, ref: Ae, shapeFlag: Le } = Y;
    switch (fe) {
      case na:
        $(O, Y, de, Ee);
        break;
      case Mt:
        C(O, Y, de, Ee);
        break;
      case _a:
        O == null && A(Y, de, Ee, Me);
        break;
      case j:
        oe(
          O,
          Y,
          de,
          Ee,
          be,
          $e,
          Me,
          ye,
          Pe
        );
        break;
      default:
        Le & 1 ? D(
          O,
          Y,
          de,
          Ee,
          be,
          $e,
          Me,
          ye,
          Pe
        ) : Le & 6 ? J(
          O,
          Y,
          de,
          Ee,
          be,
          $e,
          Me,
          ye,
          Pe
        ) : (Le & 64 || Le & 128) && fe.process(
          O,
          Y,
          de,
          Ee,
          be,
          $e,
          Me,
          ye,
          Pe,
          Te
        );
    }
    Ae != null && be ? Yo(Ae, O && O.ref, $e, Y || O, !Y) : Ae == null && O && O.ref != null && Yo(O.ref, null, $e, O, !0);
  }, $ = (O, Y, de, Ee) => {
    if (O == null)
      a(
        Y.el = u(Y.children),
        de,
        Ee
      );
    else {
      const be = Y.el = O.el;
      Y.children !== O.children && f(be, Y.children);
    }
  }, C = (O, Y, de, Ee) => {
    O == null ? a(
      Y.el = m(Y.children || ""),
      de,
      Ee
    ) : Y.el = O.el;
  }, A = (O, Y, de, Ee) => {
    [O.el, O.anchor] = w(
      O.children,
      Y,
      de,
      Ee,
      O.el,
      O.anchor
    );
  }, T = ({ el: O, anchor: Y }, de, Ee) => {
    let be;
    for (; O && O !== Y; )
      be = k(O), a(O, de, Ee), O = be;
    a(Y, de, Ee);
  }, I = ({ el: O, anchor: Y }) => {
    let de;
    for (; O && O !== Y; )
      de = k(O), l(O), O = de;
    l(Y);
  }, D = (O, Y, de, Ee, be, $e, Me, ye, Pe) => {
    if (Y.type === "svg" ? Me = "svg" : Y.type === "math" && (Me = "mathml"), O == null)
      U(
        Y,
        de,
        Ee,
        be,
        $e,
        Me,
        ye,
        Pe
      );
    else {
      const fe = O.el && O.el._isVueCE ? O.el : null;
      try {
        fe && fe._beginPatch(), M(
          O,
          Y,
          be,
          $e,
          Me,
          ye,
          Pe
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, U = (O, Y, de, Ee, be, $e, Me, ye) => {
    let Pe, fe;
    const { props: Ae, shapeFlag: Le, transition: N, dirs: P } = O;
    if (Pe = O.el = c(
      O.type,
      $e,
      Ae && Ae.is,
      Ae
    ), Le & 8 ? v(Pe, O.children) : Le & 16 && E(
      O.children,
      Pe,
      null,
      Ee,
      be,
      wa(O, $e),
      Me,
      ye
    ), P && Qs(O, null, Ee, "created"), W(Pe, O, O.scopeId, Me, Ee), Ae) {
      for (const ne in Ae)
        ne !== "value" && !jo(ne) && r(Pe, ne, null, Ae[ne], $e, Ee);
      "value" in Ae && r(Pe, "value", null, Ae.value, $e), (fe = Ae.onVnodeBeforeMount) && ps(fe, Ee, O);
    }
    P && Qs(O, null, Ee, "beforeMount");
    const se = zu(be, N);
    se && N.beforeEnter(Pe), a(Pe, Y, de), ((fe = Ae && Ae.onVnodeMounted) || se || P) && At(() => {
      fe && ps(fe, Ee, O), se && N.enter(Pe), P && Qs(O, null, Ee, "mounted");
    }, be);
  }, W = (O, Y, de, Ee, be) => {
    if (de && p(O, de), Ee)
      for (let $e = 0; $e < Ee.length; $e++)
        p(O, Ee[$e]);
    if (be) {
      let $e = be.subTree;
      if (Y === $e || wr($e.type) && ($e.ssContent === Y || $e.ssFallback === Y)) {
        const Me = be.vnode;
        W(
          O,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          be.parent
        );
      }
    }
  }, E = (O, Y, de, Ee, be, $e, Me, ye, Pe = 0) => {
    for (let fe = Pe; fe < O.length; fe++) {
      const Ae = O[fe] = ye ? Bs(O[fe]) : _s(O[fe]);
      x(
        null,
        Ae,
        Y,
        de,
        Ee,
        be,
        $e,
        Me,
        ye
      );
    }
  }, M = (O, Y, de, Ee, be, $e, Me) => {
    const ye = Y.el = O.el;
    let { patchFlag: Pe, dynamicChildren: fe, dirs: Ae } = Y;
    Pe |= O.patchFlag & 16;
    const Le = O.props || mt, N = Y.props || mt;
    let P;
    if (de && Xs(de, !1), (P = N.onVnodeBeforeUpdate) && ps(P, de, Y, O), Ae && Qs(Y, O, de, "beforeUpdate"), de && Xs(de, !0), (Le.innerHTML && N.innerHTML == null || Le.textContent && N.textContent == null) && v(ye, ""), fe ? te(
      O.dynamicChildren,
      fe,
      ye,
      de,
      Ee,
      wa(Y, be),
      $e
    ) : Me || B(
      O,
      Y,
      ye,
      null,
      de,
      Ee,
      wa(Y, be),
      $e,
      !1
    ), Pe > 0) {
      if (Pe & 16)
        le(ye, Le, N, de, be);
      else if (Pe & 2 && Le.class !== N.class && r(ye, "class", null, N.class, be), Pe & 4 && r(ye, "style", Le.style, N.style, be), Pe & 8) {
        const se = Y.dynamicProps;
        for (let ne = 0; ne < se.length; ne++) {
          const ce = se[ne], Ce = Le[ce], ke = N[ce];
          (ke !== Ce || ce === "value") && r(ye, ce, Ce, ke, be, de);
        }
      }
      Pe & 1 && O.children !== Y.children && v(ye, Y.children);
    } else !Me && fe == null && le(ye, Le, N, de, be);
    ((P = N.onVnodeUpdated) || Ae) && At(() => {
      P && ps(P, de, Y, O), Ae && Qs(Y, O, de, "updated");
    }, Ee);
  }, te = (O, Y, de, Ee, be, $e, Me) => {
    for (let ye = 0; ye < Y.length; ye++) {
      const Pe = O[ye], fe = Y[ye], Ae = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Pe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Pe.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(Pe, fe) || // - In the case of a component, it could contain anything.
        Pe.shapeFlag & 198) ? y(Pe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          de
        )
      );
      x(
        Pe,
        fe,
        Ae,
        null,
        Ee,
        be,
        $e,
        Me,
        !0
      );
    }
  }, le = (O, Y, de, Ee, be) => {
    if (Y !== de) {
      if (Y !== mt)
        for (const $e in Y)
          !jo($e) && !($e in de) && r(
            O,
            $e,
            Y[$e],
            null,
            be,
            Ee
          );
      for (const $e in de) {
        if (jo($e)) continue;
        const Me = de[$e], ye = Y[$e];
        Me !== ye && $e !== "value" && r(O, $e, ye, Me, be, Ee);
      }
      "value" in de && r(O, "value", Y.value, de.value, be);
    }
  }, oe = (O, Y, de, Ee, be, $e, Me, ye, Pe) => {
    const fe = Y.el = O ? O.el : u(""), Ae = Y.anchor = O ? O.anchor : u("");
    let { patchFlag: Le, dynamicChildren: N, slotScopeIds: P } = Y;
    P && (ye = ye ? ye.concat(P) : P), O == null ? (a(fe, de, Ee), a(Ae, de, Ee), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      Y.children || [],
      de,
      Ae,
      be,
      $e,
      Me,
      ye,
      Pe
    )) : Le > 0 && Le & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (te(
      O.dynamicChildren,
      N,
      de,
      be,
      $e,
      Me,
      ye
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (Y.key != null || be && Y === be.subTree) && ul(
      O,
      Y,
      !0
      /* shallow */
    )) : B(
      O,
      Y,
      de,
      Ae,
      be,
      $e,
      Me,
      ye,
      Pe
    );
  }, J = (O, Y, de, Ee, be, $e, Me, ye, Pe) => {
    Y.slotScopeIds = ye, O == null ? Y.shapeFlag & 512 ? be.ctx.activate(
      Y,
      de,
      Ee,
      Me,
      Pe
    ) : G(
      Y,
      de,
      Ee,
      be,
      $e,
      Me,
      Pe
    ) : X(O, Y, Pe);
  }, G = (O, Y, de, Ee, be, $e, Me) => {
    const ye = O.component = qu(
      O,
      Ee,
      be
    );
    if (ta(O) && (ye.ctx.renderer = Te), Yu(ye, !1, Me), ye.asyncDep) {
      if (be && be.registerDep(ye, ae, Me), !O.el) {
        const Pe = ye.subTree = S(Mt);
        C(null, Pe, Y, de), O.placeholder = Pe.el;
      }
    } else
      ae(
        ye,
        O,
        Y,
        de,
        be,
        $e,
        Me
      );
  }, X = (O, Y, de) => {
    const Ee = Y.component = O.component;
    if (Tu(O, Y, de))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        re(Ee, Y, de);
        return;
      } else
        Ee.next = Y, Ee.update();
    else
      Y.el = O.el, Ee.vnode = Y;
  }, ae = (O, Y, de, Ee, be, $e, Me) => {
    const ye = () => {
      if (O.isMounted) {
        let { next: Le, bu: N, u: P, parent: se, vnode: ne } = O;
        {
          const rt = yr(O);
          if (rt) {
            Le && (Le.el = ne.el, re(O, Le, Me)), rt.asyncDep.then(() => {
              O.isUnmounted || ye();
            });
            return;
          }
        }
        let ce = Le, Ce;
        Xs(O, !1), Le ? (Le.el = ne.el, re(O, Le, Me)) : Le = ne, N && Tn(N), (Ce = Le.props && Le.props.onVnodeBeforeUpdate) && ps(Ce, se, Le, ne), Xs(O, !0);
        const ke = Dl(O), Ge = O.subTree;
        O.subTree = ke, x(
          Ge,
          ke,
          // parent may have changed if it's in a teleport
          y(Ge.el),
          // anchor may have changed if it's in a fragment
          V(Ge),
          O,
          be,
          $e
        ), Le.el = ke.el, ce === null && Pu(O, ke.el), P && At(P, be), (Ce = Le.props && Le.props.onVnodeUpdated) && At(
          () => ps(Ce, se, Le, ne),
          be
        );
      } else {
        let Le;
        const { el: N, props: P } = Y, { bm: se, m: ne, parent: ce, root: Ce, type: ke } = O, Ge = So(Y);
        Xs(O, !1), se && Tn(se), !Ge && (Le = P && P.onVnodeBeforeMount) && ps(Le, ce, Y), Xs(O, !0);
        {
          Ce.ce && // @ts-expect-error _def is private
          Ce.ce._def.shadowRoot !== !1 && Ce.ce._injectChildStyle(ke);
          const rt = O.subTree = Dl(O);
          x(
            null,
            rt,
            de,
            Ee,
            O,
            be,
            $e
          ), Y.el = rt.el;
        }
        if (ne && At(ne, be), !Ge && (Le = P && P.onVnodeMounted)) {
          const rt = Y;
          At(
            () => ps(Le, ce, rt),
            be
          );
        }
        (Y.shapeFlag & 256 || ce && So(ce.vnode) && ce.vnode.shapeFlag & 256) && O.a && At(O.a, be), O.isMounted = !0, Y = de = Ee = null;
      }
    };
    O.scope.on();
    const Pe = O.effect = new $i(ye);
    O.scope.off();
    const fe = O.update = Pe.run.bind(Pe), Ae = O.job = Pe.runIfDirty.bind(Pe);
    Ae.i = O, Ae.id = O.uid, Pe.scheduler = () => al(Ae), Xs(O, !0), fe();
  }, re = (O, Y, de) => {
    Y.component = O;
    const Ee = O.vnode.props;
    O.vnode = Y, O.next = null, Mu(O, Y.props, Ee, de), Uu(O, Y.children, de), Ps(), bl(O), Rs();
  }, B = (O, Y, de, Ee, be, $e, Me, ye, Pe = !1) => {
    const fe = O && O.children, Ae = O ? O.shapeFlag : 0, Le = Y.children, { patchFlag: N, shapeFlag: P } = Y;
    if (N > 0) {
      if (N & 128) {
        me(
          fe,
          Le,
          de,
          Ee,
          be,
          $e,
          Me,
          ye,
          Pe
        );
        return;
      } else if (N & 256) {
        ee(
          fe,
          Le,
          de,
          Ee,
          be,
          $e,
          Me,
          ye,
          Pe
        );
        return;
      }
    }
    P & 8 ? (Ae & 16 && q(fe, be, $e), Le !== fe && v(de, Le)) : Ae & 16 ? P & 16 ? me(
      fe,
      Le,
      de,
      Ee,
      be,
      $e,
      Me,
      ye,
      Pe
    ) : q(fe, be, $e, !0) : (Ae & 8 && v(de, ""), P & 16 && E(
      Le,
      de,
      Ee,
      be,
      $e,
      Me,
      ye,
      Pe
    ));
  }, ee = (O, Y, de, Ee, be, $e, Me, ye, Pe) => {
    O = O || $o, Y = Y || $o;
    const fe = O.length, Ae = Y.length, Le = Math.min(fe, Ae);
    let N;
    for (N = 0; N < Le; N++) {
      const P = Y[N] = Pe ? Bs(Y[N]) : _s(Y[N]);
      x(
        O[N],
        P,
        de,
        null,
        be,
        $e,
        Me,
        ye,
        Pe
      );
    }
    fe > Ae ? q(
      O,
      be,
      $e,
      !0,
      !1,
      Le
    ) : E(
      Y,
      de,
      Ee,
      be,
      $e,
      Me,
      ye,
      Pe,
      Le
    );
  }, me = (O, Y, de, Ee, be, $e, Me, ye, Pe) => {
    let fe = 0;
    const Ae = Y.length;
    let Le = O.length - 1, N = Ae - 1;
    for (; fe <= Le && fe <= N; ) {
      const P = O[fe], se = Y[fe] = Pe ? Bs(Y[fe]) : _s(Y[fe]);
      if (so(P, se))
        x(
          P,
          se,
          de,
          null,
          be,
          $e,
          Me,
          ye,
          Pe
        );
      else
        break;
      fe++;
    }
    for (; fe <= Le && fe <= N; ) {
      const P = O[Le], se = Y[N] = Pe ? Bs(Y[N]) : _s(Y[N]);
      if (so(P, se))
        x(
          P,
          se,
          de,
          null,
          be,
          $e,
          Me,
          ye,
          Pe
        );
      else
        break;
      Le--, N--;
    }
    if (fe > Le) {
      if (fe <= N) {
        const P = N + 1, se = P < Ae ? Y[P].el : Ee;
        for (; fe <= N; )
          x(
            null,
            Y[fe] = Pe ? Bs(Y[fe]) : _s(Y[fe]),
            de,
            se,
            be,
            $e,
            Me,
            ye,
            Pe
          ), fe++;
      }
    } else if (fe > N)
      for (; fe <= Le; )
        We(O[fe], be, $e, !0), fe++;
    else {
      const P = fe, se = fe, ne = /* @__PURE__ */ new Map();
      for (fe = se; fe <= N; fe++) {
        const tt = Y[fe] = Pe ? Bs(Y[fe]) : _s(Y[fe]);
        tt.key != null && ne.set(tt.key, fe);
      }
      let ce, Ce = 0;
      const ke = N - se + 1;
      let Ge = !1, rt = 0;
      const ht = new Array(ke);
      for (fe = 0; fe < ke; fe++) ht[fe] = 0;
      for (fe = P; fe <= Le; fe++) {
        const tt = O[fe];
        if (Ce >= ke) {
          We(tt, be, $e, !0);
          continue;
        }
        let wt;
        if (tt.key != null)
          wt = ne.get(tt.key);
        else
          for (ce = se; ce <= N; ce++)
            if (ht[ce - se] === 0 && so(tt, Y[ce])) {
              wt = ce;
              break;
            }
        wt === void 0 ? We(tt, be, $e, !0) : (ht[wt - se] = fe + 1, wt >= rt ? rt = wt : Ge = !0, x(
          tt,
          Y[wt],
          de,
          null,
          be,
          $e,
          Me,
          ye,
          Pe
        ), Ce++);
      }
      const at = Ge ? Fu(ht) : $o;
      for (ce = at.length - 1, fe = ke - 1; fe >= 0; fe--) {
        const tt = se + fe, wt = Y[tt], $t = Y[tt + 1], st = tt + 1 < Ae ? (
          // #13559, fallback to el placeholder for unresolved async component
          $t.el || $t.placeholder
        ) : Ee;
        ht[fe] === 0 ? x(
          null,
          wt,
          de,
          st,
          be,
          $e,
          Me,
          ye,
          Pe
        ) : Ge && (ce < 0 || fe !== at[ce] ? Ne(wt, de, st, 2) : ce--);
      }
    }
  }, Ne = (O, Y, de, Ee, be = null) => {
    const { el: $e, type: Me, transition: ye, children: Pe, shapeFlag: fe } = O;
    if (fe & 6) {
      Ne(O.component.subTree, Y, de, Ee);
      return;
    }
    if (fe & 128) {
      O.suspense.move(Y, de, Ee);
      return;
    }
    if (fe & 64) {
      Me.move(O, Y, de, Te);
      return;
    }
    if (Me === j) {
      a($e, Y, de);
      for (let Le = 0; Le < Pe.length; Le++)
        Ne(Pe[Le], Y, de, Ee);
      a(O.anchor, Y, de);
      return;
    }
    if (Me === _a) {
      T(O, Y, de);
      return;
    }
    if (Ee !== 2 && fe & 1 && ye)
      if (Ee === 0)
        ye.beforeEnter($e), a($e, Y, de), At(() => ye.enter($e), be);
      else {
        const { leave: Le, delayLeave: N, afterLeave: P } = ye, se = () => {
          O.ctx.isUnmounted ? l($e) : a($e, Y, de);
        }, ne = () => {
          $e._isLeaving && $e[Ss](
            !0
            /* cancelled */
          ), Le($e, () => {
            se(), P && P();
          });
        };
        N ? N($e, se, ne) : ne();
      }
    else
      a($e, Y, de);
  }, We = (O, Y, de, Ee = !1, be = !1) => {
    const {
      type: $e,
      props: Me,
      ref: ye,
      children: Pe,
      dynamicChildren: fe,
      shapeFlag: Ae,
      patchFlag: Le,
      dirs: N,
      cacheIndex: P
    } = O;
    if (Le === -2 && (be = !1), ye != null && (Ps(), Yo(ye, null, de, O, !0), Rs()), P != null && (Y.renderCache[P] = void 0), Ae & 256) {
      Y.ctx.deactivate(O);
      return;
    }
    const se = Ae & 1 && N, ne = !So(O);
    let ce;
    if (ne && (ce = Me && Me.onVnodeBeforeUnmount) && ps(ce, Y, O), Ae & 6)
      z(O.component, de, Ee);
    else {
      if (Ae & 128) {
        O.suspense.unmount(de, Ee);
        return;
      }
      se && Qs(O, null, Y, "beforeUnmount"), Ae & 64 ? O.type.remove(
        O,
        Y,
        de,
        Te,
        Ee
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== j || Le > 0 && Le & 64) ? q(
        fe,
        Y,
        de,
        !1,
        !0
      ) : ($e === j && Le & 384 || !be && Ae & 16) && q(Pe, Y, de), Ee && ze(O);
    }
    (ne && (ce = Me && Me.onVnodeUnmounted) || se) && At(() => {
      ce && ps(ce, Y, O), se && Qs(O, null, Y, "unmounted");
    }, de);
  }, ze = (O) => {
    const { type: Y, el: de, anchor: Ee, transition: be } = O;
    if (Y === j) {
      Ie(de, Ee);
      return;
    }
    if (Y === _a) {
      I(O);
      return;
    }
    const $e = () => {
      l(de), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if (O.shapeFlag & 1 && be && !be.persisted) {
      const { leave: Me, delayLeave: ye } = be, Pe = () => Me(de, $e);
      ye ? ye(O.el, $e, Pe) : Pe();
    } else
      $e();
  }, Ie = (O, Y) => {
    let de;
    for (; O !== Y; )
      de = k(O), l(O), O = de;
    l(Y);
  }, z = (O, Y, de) => {
    const { bum: Ee, scope: be, job: $e, subTree: Me, um: ye, m: Pe, a: fe } = O;
    Ul(Pe), Ul(fe), Ee && Tn(Ee), be.stop(), $e && ($e.flags |= 8, We(Me, O, Y, de)), ye && At(ye, Y), At(() => {
      O.isUnmounted = !0;
    }, Y);
  }, q = (O, Y, de, Ee = !1, be = !1, $e = 0) => {
    for (let Me = $e; Me < O.length; Me++)
      We(O[Me], Y, de, Ee, be);
  }, V = (O) => {
    if (O.shapeFlag & 6)
      return V(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const Y = k(O.anchor || O.el), de = Y && Y[Wi];
    return de ? k(de) : Y;
  };
  let F = !1;
  const ie = (O, Y, de) => {
    O == null ? Y._vnode && We(Y._vnode, null, null, !0) : x(
      Y._vnode || null,
      O,
      Y,
      null,
      null,
      null,
      de
    ), Y._vnode = O, F || (F = !0, bl(), Fi(), F = !1);
  }, Te = {
    p: x,
    um: We,
    m: Ne,
    r: ze,
    mt: G,
    mc: E,
    pc: B,
    pbc: te,
    n: V,
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
  if (He(a) && He(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Bs(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && ul(c, u)), u.type === na && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Mt && !u.el && (u.el = c.el);
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
  s && s.pendingBranch ? He(e) ? s.effects.push(...e) : s.effects.push(e) : Qc(e);
}
const j = Symbol.for("v-fgt"), na = Symbol.for("v-txt"), Mt = Symbol.for("v-cmt"), _a = Symbol.for("v-stc"), Qo = [];
let Kt = null;
function n(e = !1) {
  Qo.push(Kt = e ? null : []);
}
function Bu() {
  Qo.pop(), Kt = Qo[Qo.length - 1] || null;
}
let ln = 1;
function Bn(e, s = !1) {
  ln += e, e < 0 && Kt && s && (Kt.hasOnce = !0);
}
function _r(e) {
  return e.dynamicChildren = ln > 0 ? Kt || $o : null, Bu(), ln > 0 && Kt && Kt.push(e), e;
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
function rn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, s) {
  return e.type === s.type && e.key === s.key;
}
const kr = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? bt(e) || Lt(e) || Je(e) ? { i: Et, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === j ? 0 : 1, c = !1, u = !1) {
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
    ctx: Et
  };
  return u ? (dl(m, o), r & 128 && e.normalize(m)) : o && (m.shapeFlag |= bt(o) ? 8 : 16), ln > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Kt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && Kt.push(m), m;
}
const S = Wu;
function Wu(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === sr) && (e = Mt), rn(e)) {
    const u = Gs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && dl(u, o), ln > 0 && !r && Kt && (u.shapeFlag & 6 ? Kt[Kt.indexOf(e)] = u : Kt.push(u)), u.patchFlag = -2, u;
  }
  if (ed(e) && (e = e.__vccOpts), s) {
    s = Gu(s);
    let { class: u, style: m } = s;
    u && !bt(u) && (s.class = Re(u)), ut(m) && (nl(m) && !He(m) && (m = xt({}, m)), s.style = Yt(m));
  }
  const c = bt(e) ? 1 : wr(e) ? 128 : Gi(e) ? 64 : ut(e) ? 4 : Je(e) ? 2 : 0;
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
  return e ? nl(e) || mr(e) ? xt({}, e) : e : null;
}
function Gs(e, s, o = !1, a = !1) {
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
      o && r ? He(r) ? r.concat(Mn(s)) : [r, Mn(s)] : Mn(s)
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
    patchFlag: s && e.type !== j ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && Gs(e.ssContent),
    ssFallback: e.ssFallback && Gs(e.ssFallback),
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
  return s ? (n(), R(Mt, null, e)) : S(Mt, null, e);
}
function _s(e) {
  return e == null || typeof e == "boolean" ? S(Mt) : He(e) ? S(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : rn(e) ? Bs(e) : S(na, null, String(e));
}
function Bs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gs(e);
}
function dl(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (He(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), dl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !mr(s) ? s._ctx = Et : l === 3 && Et && (Et.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Je(s) ? (s = { default: s, _ctx: Et }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [b(s)]) : o = 8);
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
        s.style = Yt([s.style, a.style]);
      else if (qn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(He(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function ps(e, s, o, a = null) {
  us(e, s, 7, [
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
    propsDefaults: mt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: mt,
    data: mt,
    props: mt,
    attrs: mt,
    slots: mt,
    refs: mt,
    setupState: mt,
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
let Dt = null;
const ml = () => Dt || Et;
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
    (o) => Dt = o
  ), za = s(
    "__VUE_SSR_SETTERS__",
    (o) => cn = o
  );
}
const vn = (e) => {
  const s = Dt;
  return Wn(e), e.scope.on(), () => {
    e.scope.off(), Wn(s);
  };
}, Al = () => {
  Dt && Dt.scope.off(), Wn(null);
};
function br(e) {
  return e.vnode.shapeFlag & 4;
}
let cn = !1;
function Yu(e, s = !1, o = !1) {
  s && za(s);
  const { props: a, children: l } = e.vnode, r = br(e);
  Ru(e, a, r, s), Nu(e, l, o || s);
  const c = r ? Ju(e, s) : void 0;
  return s && za(!1), c;
}
function Ju(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mu);
  const { setup: a } = o;
  if (a) {
    Ps();
    const l = e.setupContext = a.length > 1 ? Xu(e) : null, r = vn(e), c = fn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = gi(c);
    if (Rs(), r(), (u || e.sp) && !So(e) && Xi(e), u) {
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
  Je(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : ut(s) && (e.setupState = Ai(s)), $r(e);
}
function $r(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || ks);
  {
    const l = vn(e);
    Ps();
    try {
      fu(e);
    } finally {
      Rs(), l();
    }
  }
}
const Qu = {
  get(e, s) {
    return Rt(e, "get", ""), e[s];
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
  return Je(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function ed(e) {
  return Je(e) && "__vccOpts" in e;
}
const L = (e, s) => Hc(e, s, cn);
function pn(e, s, o) {
  try {
    Bn(-1);
    const a = arguments.length;
    return a === 2 ? ut(s) && !He(s) ? rn(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && rn(o) && (o = [o]), S(e, s, o));
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
const Cr = Fa ? (e) => Fa.createHTML(e) : (e) => e, sd = "http://www.w3.org/2000/svg", od = "http://www.w3.org/1998/Math/MathML", xs = typeof document < "u" ? document : null, Fl = xs && /* @__PURE__ */ xs.createElement("template"), nd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? xs.createElementNS(sd, e) : s === "mathml" ? xs.createElementNS(od, e) : o ? xs.createElement(e, { is: o }) : xs.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => xs.createTextNode(e),
  createComment: (e) => xs.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => xs.querySelector(e),
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
}, Os = "transition", Ao = "animation", Po = Symbol("_vtc"), xr = {
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
}, Sr = /* @__PURE__ */ xt(
  {},
  qi,
  xr
), ad = (e) => (e.displayName = "Transition", e.props = Sr, e), ld = /* @__PURE__ */ ad(
  (e, { slots: s }) => pn(eu, Ir(e), s)
), Zs = (e, s = []) => {
  He(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Vl = (e) => e ? He(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
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
    onEnter: A,
    onEnterCancelled: T,
    onLeave: I,
    onLeaveCancelled: D,
    onBeforeAppear: U = C,
    onAppear: W = A,
    onAppearCancelled: E = T
  } = s, M = (oe, J, G, X) => {
    oe._enterCancelled = X, zs(oe, J ? v : u), zs(oe, J ? f : c), G && G();
  }, te = (oe, J) => {
    oe._isLeaving = !1, zs(oe, y), zs(oe, p), zs(oe, k), J && J();
  }, le = (oe) => (J, G) => {
    const X = oe ? W : A, ae = () => M(J, oe, G);
    Zs(X, [J, ae]), Bl(() => {
      zs(J, oe ? m : r), hs(J, oe ? v : u), Vl(X) || Wl(J, a, x, ae);
    });
  };
  return xt(s, {
    onBeforeEnter(oe) {
      Zs(C, [oe]), hs(oe, r), hs(oe, c);
    },
    onBeforeAppear(oe) {
      Zs(U, [oe]), hs(oe, m), hs(oe, f);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(oe, J) {
      oe._isLeaving = !0;
      const G = () => te(oe, J);
      hs(oe, y), oe._enterCancelled ? (hs(oe, k), Va(oe)) : (Va(oe), hs(oe, k)), Bl(() => {
        oe._isLeaving && (zs(oe, y), hs(oe, p), Vl(I) || Wl(oe, a, $, G));
      }), Zs(I, [oe, G]);
    },
    onEnterCancelled(oe) {
      M(oe, !1, void 0, !0), Zs(T, [oe]);
    },
    onAppearCancelled(oe) {
      M(oe, !0, void 0, !0), Zs(E, [oe]);
    },
    onLeaveCancelled(oe) {
      te(oe), Zs(D, [oe]);
    }
  });
}
function id(e) {
  if (e == null)
    return null;
  if (ut(e))
    return [ka(e.enter), ka(e.leave)];
  {
    const s = ka(e);
    return [s, s];
  }
}
function ka(e) {
  return mc(e);
}
function hs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Po] || (e[Po] = /* @__PURE__ */ new Set())).add(s);
}
function zs(e, s) {
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
  const o = window.getComputedStyle(e), a = (w) => (o[w] || "").split(", "), l = a(`${Os}Delay`), r = a(`${Os}Duration`), c = Gl(l, r), u = a(`${Ao}Delay`), m = a(`${Ao}Duration`), f = Gl(u, m);
  let v = null, y = 0, k = 0;
  s === Os ? c > 0 && (v = Os, y = c, k = r.length) : s === Ao ? f > 0 && (v = Ao, y = f, k = m.length) : (y = Math.max(c, f), v = y > 0 ? c > f ? Os : Ao : null, k = v ? v === Os ? r.length : m.length : 0);
  const p = v === Os && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Os}Property`).toString()
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
  const a = e.style, l = bt(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (bt(s))
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
  if (He(o))
    o.forEach((a) => Dn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = vd(e, s);
    Kl.test(o) ? e.setProperty(
      Hs(a),
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
  let a = ss(s);
  if (a !== "filter" && a in e)
    return ba[s] = a;
  a = Jn(a);
  for (let l = 0; l < ql.length; l++) {
    const r = ql[l] + a;
    if (r in e)
      return ba[s] = r;
  }
  return s;
}
const Yl = "http://www.w3.org/1999/xlink";
function Jl(e, s, o, a, l, r = yc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Yl, s.slice(6, s.length)) : e.setAttributeNS(Yl, s, o) : o == null || r && !_i(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : rs(o) ? String(o) : o
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
function Ts(e, s, o, a) {
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
      Ts(e, u, f, m);
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
  return [e[2] === ":" ? e.slice(3) : Hs(e.slice(2)), s];
}
let $a = 0;
const yd = /* @__PURE__ */ Promise.resolve(), wd = () => $a || (yd.then(() => $a = 0), $a = Date.now());
function _d(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    us(
      kd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = wd(), o;
}
function kd(e, s) {
  if (He(s)) {
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
  s === "class" ? cd(e, a, c) : s === "style" ? fd(e, o, a) : qn(s) ? qa(s) || gd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : $d(e, s, a, c)) ? (Ql(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Jl(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !bt(a)) ? Ql(e, ss(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), Jl(e, s, a, c));
};
function $d(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ei(s) && Je(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ei(s) && bt(o) ? !1 : s in e;
}
const Tr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Gn = Symbol("_moveCb"), ti = Symbol("_enterCb"), Cd = (e) => (delete e.props.mode, e), xd = /* @__PURE__ */ Cd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ xt({}, Sr, {
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
        hs(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const y = f[Gn] = (k) => {
          k && k.target !== f || (!k || k.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", y), f[Gn] = null, zs(f, c));
        };
        f.addEventListener("transitionend", y);
      }), l = [];
    }), () => {
      const c = nt(e), u = Ir(c);
      let m = c.tag || j;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), lo(
            v,
            an(
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
          an(v, u, a, o)
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
const js = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return He(s) ? (o) => Tn(s, o) : s;
};
function Rd(e) {
  e.target.composing = !0;
}
function si(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const es = Symbol("_assign");
function oi(e, s, o) {
  return s && (e = e.trim()), o && (e = Qn(e)), e;
}
const qt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[es] = js(l);
    const r = a || l.props && l.props.type === "number";
    Ts(e, s ? "change" : "input", (c) => {
      c.target.composing || e[es](oi(e.value, o, r));
    }), (o || r) && Ts(e, "change", () => {
      e.value = oi(e.value, o, r);
    }), s || (Ts(e, "compositionstart", Rd), Ts(e, "compositionend", si), Ts(e, "change", si));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[es] = js(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Qn(e.value) : e.value, m = s ?? "";
    u !== m && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === m) || (e.value = m));
  }
}, un = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[es] = js(o), Ts(e, "change", () => {
      const a = e._modelValue, l = Ro(e), r = e.checked, c = e[es];
      if (He(a)) {
        const u = Qa(a, l), m = u !== -1;
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
    e[es] = js(o), ni(e, s, o);
  }
};
function ni(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (He(s))
    l = Qa(s, a.props.value) > -1;
  else if (Mo(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = ao(s, Rr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const ls = {
  created(e, { value: s }, o) {
    e.checked = ao(s, o.props.value), e[es] = js(o), Ts(e, "change", () => {
      e[es](Ro(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[es] = js(a), s !== o && (e.checked = ao(s, a.props.value));
  }
}, bs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Mo(s);
    Ts(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Qn(Ro(c)) : Ro(c)
      );
      e[es](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, St(() => {
        e._assigning = !1;
      });
    }), e[es] = js(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    ai(e, s);
  },
  beforeUpdate(e, s, o) {
    e[es] = js(o);
  },
  updated(e, { value: s }) {
    e._assigning || ai(e, s);
  }
};
function ai(e, s) {
  const o = e.multiple, a = He(s);
  if (!(o && !a && !Mo(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Ro(c);
      if (o)
        if (a) {
          const m = typeof u;
          m === "string" || m === "number" ? c.selected = s.some((f) => String(f) === String(u)) : c.selected = Qa(s, u) > -1;
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
      return bs;
    case "TEXTAREA":
      return qt;
    default:
      switch (s) {
        case "checkbox":
          return un;
        case "radio":
          return ls;
        default:
          return qt;
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
}, gt = (e, s) => {
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
}, ts = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Hs(l.key);
    if (s.some(
      (c) => c === r || Nd[c] === r
    ))
      return e(l);
  }));
}, Ud = /* @__PURE__ */ xt({ patchProp: bd }, nd);
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
    !Je(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
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
  return bt(e) ? document.querySelector(e) : e;
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
}, jd = /* @__PURE__ */ we({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Fd, [
      s.$slots.header ? (n(), i("div", Vd, [
        Qe(s.$slots, "header", {}, void 0)
      ])) : h("", !0),
      s.$slots.search ? (n(), i("div", Bd, [
        Qe(s.$slots, "search", {}, void 0)
      ])) : h("", !0),
      t("div", Wd, [
        Qe(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", Gd, [
        Qe(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), _e = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Ft = /* @__PURE__ */ _e(jd, [["__scopeId", "data-v-21565df9"]]), Hd = {
  key: 0,
  class: "panel-title-prefix"
}, Kd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, qd = /* @__PURE__ */ we({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), R(il(`h${e.level}`), {
      class: Re(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", Hd, d(e.prefix), 1)) : (n(), i("span", Kd)),
        Qe(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Yd = /* @__PURE__ */ _e(qd, [["__scopeId", "data-v-c3875efc"]]), Jd = ["title"], Qd = ["width", "height"], Xd = /* @__PURE__ */ we({
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
}), Mr = /* @__PURE__ */ _e(Xd, [["__scopeId", "data-v-6fc7f16d"]]), Zd = { class: "header-left" }, em = {
  key: 0,
  class: "header-actions"
}, tm = /* @__PURE__ */ we({
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
        e.showInfo ? (n(), R(Mr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : h("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", em, [
        Qe(s.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ _e(tm, [["__scopeId", "data-v-55a62cd6"]]), sm = {
  key: 0,
  class: "section-title-count"
}, om = {
  key: 1,
  class: "section-title-icon"
}, nm = /* @__PURE__ */ we({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), R(il(`h${e.level}`), {
      class: Re(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        Qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", sm, "(" + d(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (n(), i("span", om, d(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ht = /* @__PURE__ */ _e(nm, [["__scopeId", "data-v-559361eb"]]), am = { class: "status-grid" }, lm = { class: "status-grid__columns" }, im = { class: "status-grid__column" }, rm = { class: "status-grid__title" }, cm = { class: "status-grid__column status-grid__column--right" }, um = { class: "status-grid__title" }, dm = {
  key: 0,
  class: "status-grid__footer"
}, mm = /* @__PURE__ */ we({
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
          Qe(s.$slots, "left", {}, void 0)
        ]),
        t("div", cm, [
          t("h4", um, d(e.rightTitle), 1),
          Qe(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", dm, [
        Qe(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), fm = /* @__PURE__ */ _e(mm, [["__scopeId", "data-v-73b7ba3f"]]), vm = {
  key: 0,
  class: "status-item__icon"
}, pm = {
  key: 1,
  class: "status-item__count"
}, gm = { class: "status-item__label" }, hm = /* @__PURE__ */ we({
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
      class: Re(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", vm, d(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (n(), i("span", pm, d(e.count), 1)) : h("", !0),
      t("span", gm, d(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ _e(hm, [["__scopeId", "data-v-6f929183"]]), ym = { class: "issue-card__header" }, wm = { class: "issue-card__icon" }, _m = { class: "issue-card__title" }, km = {
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
}, xm = /* @__PURE__ */ we({
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
      class: Re(["issue-card", o.value])
    }, [
      t("div", ym, [
        t("span", wm, d(e.icon), 1),
        t("h4", _m, d(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", km, [
        e.description ? (n(), i("p", bm, d(e.description), 1)) : h("", !0),
        Qe(a.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (n(), i("div", $m, [
        (n(!0), i(j, null, he(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(r), 1)
        ]))), 128))
      ])) : h("", !0),
      a.$slots.actions ? (n(), i("div", Cm, [
        Qe(a.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ _e(xm, [["__scopeId", "data-v-df6aa348"]]), Sm = ["type", "disabled"], Im = {
  key: 0,
  class: "spinner"
}, Em = /* @__PURE__ */ we({
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
      e.loading ? h("", !0) : Qe(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Sm));
  }
}), ge = /* @__PURE__ */ _e(Em, [["__scopeId", "data-v-772abe47"]]), Tm = { class: "empty-state" }, Pm = {
  key: 0,
  class: "empty-icon"
}, Rm = { class: "empty-message" }, Mm = /* @__PURE__ */ we({
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
      e.actionLabel ? (n(), R(ge, {
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
}), ds = /* @__PURE__ */ _e(Mm, [["__scopeId", "data-v-4466284f"]]), Dm = /* @__PURE__ */ we({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Re(["detail-label"]),
      style: Yt({ minWidth: e.minWidth })
    }, [
      Qe(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Ln = /* @__PURE__ */ _e(Dm, [["__scopeId", "data-v-75e9eeb8"]]), Lm = /* @__PURE__ */ we({
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
      Qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ba = /* @__PURE__ */ _e(Lm, [["__scopeId", "data-v-2f186e4c"]]), Nm = { class: "detail-row" }, Um = /* @__PURE__ */ we({
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
      e.value ? (n(), R(Ba, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          b(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Qe(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), pt = /* @__PURE__ */ _e(Um, [["__scopeId", "data-v-ef15664a"]]), Am = { class: "modal-header" }, Om = { class: "modal-body" }, zm = { class: "status-section" }, Fm = {
  key: 0,
  class: "status-section"
}, Vm = { class: "section-header-row" }, Bm = {
  key: 0,
  class: "workflow-group"
}, Wm = { class: "workflow-group-header" }, Gm = { class: "workflow-group-title" }, jm = { class: "workflow-list" }, Hm = { class: "workflow-name" }, Km = { class: "workflow-issue" }, qm = {
  key: 1,
  class: "workflow-group"
}, Ym = { class: "workflow-group-header" }, Jm = { class: "workflow-group-title" }, Qm = { class: "workflow-list" }, Xm = { class: "workflow-name" }, Zm = { class: "workflow-issue" }, ef = {
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
}, qf = { class: "drift-list" }, Yf = { class: "version-actual" }, Jf = { class: "version-expected" }, Qf = {
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
}, iv = { class: "modal-actions" }, rv = /* @__PURE__ */ we({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = _(!1);
    et(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), kt(() => s.show, (k, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", k);
    }, { immediate: !0 });
    const a = L(() => {
      var k, p, w;
      return ((w = (p = (k = s.status) == null ? void 0 : k.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = L(() => {
      var k, p, w;
      return ((w = (p = (k = s.status) == null ? void 0 : k.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = L(() => {
      var k, p, w;
      return ((w = (p = (k = s.status) == null ? void 0 : k.workflows) == null ? void 0 : p.synced) == null ? void 0 : w.filter((x) => {
        var C, A, T;
        const $ = (T = (A = (C = s.status) == null ? void 0 : C.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : T.find((I) => I.name === x);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = L(() => {
      var k, p, w, x, $;
      return (k = s.status) != null && k.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((w = s.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = L(() => {
      var p, w, x;
      const k = (p = s.status) == null ? void 0 : p.git_changes;
      return k ? (((w = k.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((x = k.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), m = L(() => {
      var k, p, w, x, $, C;
      return !c.value && !u.value && ((p = (k = s.status) == null ? void 0 : k.comparison) == null ? void 0 : p.is_synced) && (((w = s.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((C = ($ = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), f = L(() => {
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
      var w, x, $, C, A, T, I, D, U, W, E, M, te, le, oe, J, G, X, ae, re, B, ee;
      return n(), R(Tt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (me) => k.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = gt(() => {
            }, ["stop"]))
          }, [
            t("div", Am, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (me) => k.$emit("close"))
              }, "✕")
            ]),
            t("div", Om, [
              t("div", zm, [
                S(Ht, { level: "4" }, {
                  default: g(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                S(pt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", Fm, [
                t("div", Vm, [
                  S(Ht, { level: "4" }, {
                    default: g(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (me) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Bm, [
                  t("div", Wm, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Gm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", jm, [
                    (n(!0), i(j, null, he(a.value, (me) => (n(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", Hm, d(me.name), 1),
                      t("span", Km, d(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (n(), i("div", qm, [
                  t("div", Ym, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Jm, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", Qm, [
                    (n(!0), i(j, null, he(l.value, (me) => (n(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", Xm, d(me.name), 1),
                      t("span", Zm, d(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (w = e.status.workflows) == null ? void 0 : w.new) != null && x.length ? (n(), i("div", ef, [
                  t("div", tf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", sf, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", of, [
                    (n(!0), i(j, null, he(e.status.workflows.new, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", nf, d(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (C = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (n(), i("div", af, [
                  t("div", lf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", rf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", cf, [
                    (n(!0), i(j, null, he(e.status.workflows.modified, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", uf, d(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (T = (A = e.status.workflows) == null ? void 0 : A.deleted) != null && T.length ? (n(), i("div", df, [
                  t("div", mf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", ff, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", vf, [
                    (n(!0), i(j, null, he(e.status.workflows.deleted, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", pf, d(me), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (n(), i("div", gf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (me) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", hf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", yf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", wf, [
                    (n(!0), i(j, null, he(r.value, (me) => (n(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", _f, d(me), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              u.value ? (n(), i("div", kf, [
                S(Ht, { level: "4" }, {
                  default: g(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (I = e.status.git_changes) == null ? void 0 : I.nodes_added) != null && D.length ? (n(), i("div", bf, [
                  t("div", $f, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Cf, "NODES ADDED (" + d(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", xf, [
                    (n(!0), i(j, null, he(e.status.git_changes.nodes_added, (me) => (n(), i("div", {
                      key: v(me),
                      class: "change-item"
                    }, [
                      t("span", Sf, d(v(me)), 1),
                      y(me) ? (n(), i("span", If, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (W = (U = e.status.git_changes) == null ? void 0 : U.nodes_removed) != null && W.length ? (n(), i("div", Ef, [
                  t("div", Tf, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Pf, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Rf, [
                    (n(!0), i(j, null, he(e.status.git_changes.nodes_removed, (me) => (n(), i("div", {
                      key: v(me),
                      class: "change-item"
                    }, [
                      t("span", Mf, d(v(me)), 1),
                      y(me) ? (n(), i("span", Df, "dev")) : h("", !0)
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
                (M = e.status.git_changes) != null && M.has_other_changes ? (n(), i("div", Of, [...p[21] || (p[21] = [
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
                  S(Ht, { level: "4" }, {
                    default: g(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (me) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (oe = (le = e.status.comparison) == null ? void 0 : le.missing_nodes) != null && oe.length ? (n(), i("div", Vf, [
                  S(pt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Bf, [
                    (n(!0), i(j, null, he(e.status.comparison.missing_nodes.slice(0, 10), (me) => (n(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + d(me), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Wf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (G = (J = e.status.comparison) == null ? void 0 : J.extra_nodes) != null && G.length ? (n(), i("div", Gf, [
                  S(pt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", jf, [
                    (n(!0), i(j, null, he(e.status.comparison.extra_nodes.slice(0, 10), (me) => (n(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + d(me), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Hf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ae = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && ae.length ? (n(), i("div", Kf, [
                  S(pt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", qf, [
                    (n(!0), i(j, null, he(e.status.comparison.version_mismatches.slice(0, 10), (me) => (n(), i("div", {
                      key: me.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(d(me.name) + ": ", 1),
                      t("span", Yf, d(me.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Jf, d(me.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Qf, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((re = e.status.comparison) == null ? void 0 : re.packages_in_sync) === !1 ? (n(), i("div", Xf, [
                  S(pt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                t("div", Zf, [
                  S(ge, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (me) => k.$emit("repair"))
                  }, {
                    default: g(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ee = (B = e.status.comparison) == null ? void 0 : B.disabled_nodes) != null && ee.length ? (n(), i("div", ev, [
                S(Ht, { level: "4" }, {
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
                  (n(!0), i(j, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (me) => (n(), i("div", {
                    key: me,
                    class: "drift-list-item"
                  }, " • " + d(me), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", ov, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", nv, [
                S(Ht, { level: "4" }, {
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
              S(ge, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (me) => k.$emit("close"))
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
}, pv = /* @__PURE__ */ we({
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
    const x = L(() => {
      const Ie = a.status.workflows.analyzed || [], z = Ie.filter(
        (q) => q.unresolved_models_count > 0 || q.ambiguous_models_count > 0
      );
      return z.length === 0 && a.status.missing_models_count > 0 ? Ie.filter((q) => q.sync_state === "synced") : z;
    });
    function $() {
      const Ie = x.value;
      Ie.length !== 0 && (v.value = !0, f("repair-missing-models", Ie.map((z) => z.name)));
    }
    function C() {
      v.value = !1;
    }
    s({ resetRepairingState: C, resetRepairingEnvironmentState: p, closeDetailModal: w });
    const A = L(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), T = L(() => a.status.has_changes), I = L(() => {
      const Ie = a.status.git_changes;
      return Ie.nodes_added.length > 0 || Ie.nodes_removed.length > 0 || Ie.workflow_changes;
    }), D = L(() => a.status.has_changes || A.value), U = L(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), W = L(() => a.status.git_changes.has_other_changes), E = L(() => {
      var Ie;
      return ((Ie = a.status.workflows.analyzed) == null ? void 0 : Ie.filter((z) => z.status === "broken")) || [];
    }), M = L(() => {
      var Ie;
      return ((Ie = a.status.workflows.analyzed) == null ? void 0 : Ie.filter(
        (z) => z.has_path_sync_issues && !z.has_issues
      )) || [];
    }), te = L(() => E.value.length > 0);
    function le(Ie) {
      const z = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const q of z) {
        const V = Ie.match(q);
        if (V != null && V[1])
          return V[1];
      }
      return null;
    }
    function oe(Ie) {
      const z = Ie.map(le).filter((q) => !!q);
      return [...new Set(z)];
    }
    function J(Ie) {
      if (Ie.length === 0) return "";
      if (Ie.length === 1) return ` (>= ${Ie[0]})`;
      const z = Ie.slice(0, 2).map((V) => `>= ${V}`).join(", "), q = Ie.length > 2;
      return ` (${z}${q ? ", ..." : ""})`;
    }
    function G(Ie) {
      return Ie.replace(/uninstallable node mappings?/gi, (z) => z.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function X(Ie) {
      const z = G(Ie.issue_summary || "Has issues"), q = /(?:>=|v?\d+\.\d+)/i.test(z), V = oe(Ie.version_gated_guidance || []);
      return (Ie.nodes_version_gated_count || 0) > 0 && V.length > 0 && !q ? `${Ie.name} — ${z} (needs ComfyUI ${V.map((F) => `>= ${F}`).join(", ")})` : `${Ie.name} — ${z}`;
    }
    const ae = L(() => E.value.reduce(
      (Ie, z) => Ie + (z.nodes_version_gated_count || 0),
      0
    )), re = L(() => {
      const Ie = E.value.flatMap(
        (z) => oe(z.version_gated_guidance || [])
      );
      return [...new Set(Ie)];
    }), B = L(() => E.value.reduce(
      (Ie, z) => Ie + (z.nodes_uninstallable_count || 0),
      0
    )), ee = L(() => {
      const Ie = [];
      return ae.value > 0 && Ie.push(
        `${ae.value} require newer ComfyUI${J(re.value)}`
      ), B.value > 0 && Ie.push(`${B.value} need community packages`), Ie.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Ie.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), me = L(() => te.value || M.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ne = L(() => {
      const Ie = [];
      return a.status.workflows.new.length > 0 && Ie.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && Ie.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && Ie.push(`${a.status.workflows.deleted.length} deleted`), Ie.length > 0 ? `${Ie.join(", ")} workflow${Ie.length === 1 && !Ie[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), We = L(() => {
      var q, V;
      const Ie = [], z = a.status.comparison;
      return (q = z.missing_nodes) != null && q.length && Ie.push(`${z.missing_nodes.length} missing node${z.missing_nodes.length === 1 ? "" : "s"}`), (V = z.extra_nodes) != null && V.length && Ie.push(`${z.extra_nodes.length} untracked node${z.extra_nodes.length === 1 ? "" : "s"}`), Ie.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Ie.join(" and ")}.`;
    }), ze = L(() => {
      var q, V;
      const Ie = [], z = a.status.comparison;
      return (q = z.extra_nodes) != null && q.length && (z.extra_nodes.slice(0, 3).forEach((F) => {
        Ie.push(`Untracked: ${F}`);
      }), z.extra_nodes.length > 3 && Ie.push(`...and ${z.extra_nodes.length - 3} more untracked`)), (V = z.missing_nodes) != null && V.length && (z.missing_nodes.slice(0, 3).forEach((F) => {
        Ie.push(`Missing: ${F}`);
      }), z.missing_nodes.length > 3 && Ie.push(`...and ${z.missing_nodes.length - 3} more missing`)), Ie;
    });
    return (Ie, z) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), R(ns, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: z[0] || (z[0] = (q) => Ie.$emit("start-setup"))
              }, {
                default: g(() => [...z[13] || (z[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), R(ns, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: z[1] || (z[1] = (q) => Ie.$emit("view-environments"))
              }, {
                default: g(() => [...z[14] || (z[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), R(ns, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: z[2] || (z[2] = (q) => Ie.$emit("create-environment"))
              }, {
                default: g(() => [...z[15] || (z[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: z[4] || (z[4] = (q) => r.value = !0),
            onMouseleave: z[5] || (z[5] = (q) => r.value = !1)
          }, [
            t("div", uv, [
              S(Ht, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...z[16] || (z[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(ld, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), R(ge, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...z[17] || (z[17] = [
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
                e.status.workflows.new.length ? (n(), R(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (n(), R(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (n(), R(gs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                S(gs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), R(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), R(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (n(), R(gs, {
                  key: 2,
                  icon: "●",
                  count: U.value,
                  label: U.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                W.value ? (n(), R(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                T.value && !I.value && !W.value ? (n(), R(gs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                T.value ? h("", !0) : (n(), R(gs, {
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
                fn: g(() => [
                  z[19] || (z[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", dv, [
                    t("span", mv, d(Ne.value), 1),
                    S(ge, {
                      variant: "primary",
                      size: "sm",
                      onClick: z[3] || (z[3] = (q) => Ie.$emit("commit-changes"))
                    }, {
                      default: g(() => [...z[18] || (z[18] = [
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
          e.status.is_detached_head ? (n(), R(ns, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: z[6] || (z[6] = (q) => Ie.$emit("create-branch"))
              }, {
                default: g(() => [...z[20] || (z[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", fv, [
            S(Ht, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...z[21] || (z[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            me.value ? (n(), i(j, { key: 0 }, [
              E.value.length > 0 ? (n(), R(ns, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ee.value,
                items: E.value.map(X)
              }, {
                actions: g(() => [
                  S(ge, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[7] || (z[7] = (q) => Ie.$emit("view-workflows"))
                  }, {
                    default: g(() => [...z[22] || (z[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              M.value.length > 0 ? (n(), R(ns, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: M.value.map((q) => `${q.name} — ${q.models_needing_path_sync_count} model path${q.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  S(ge, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[8] || (z[8] = (q) => Ie.$emit("view-workflows"))
                  }, {
                    default: g(() => [...z[23] || (z[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !te.value ? (n(), R(ns, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  S(ge, {
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
                  S(ge, {
                    variant: "secondary",
                    size: "sm",
                    onClick: z[9] || (z[9] = (q) => Ie.$emit("view-workflows"))
                  }, {
                    default: g(() => [...z[24] || (z[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (n(), R(ns, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: We.value,
                items: ze.value
              }, {
                actions: g(() => [
                  S(ge, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...z[25] || (z[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(ge, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[10] || (z[10] = (q) => Ie.$emit("view-nodes"))
                  }, {
                    default: g(() => [...z[26] || (z[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), R(ns, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  S(ge, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[11] || (z[11] = (q) => Ie.$emit("view-nodes"))
                  }, {
                    default: g(() => [...z[27] || (z[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : D.value ? (n(), i("span", vv, "No issues")) : (n(), R(ds, {
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
        onClose: z[12] || (z[12] = (q) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: m,
        onRepair: k
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), gv = /* @__PURE__ */ _e(pv, [["__scopeId", "data-v-df52ba90"]]), hv = ["type", "value", "placeholder", "disabled"], yv = /* @__PURE__ */ we({
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
        m[0] || (m[0] = ts((f) => u.$emit("enter"), ["enter"])),
        m[1] || (m[1] = ts((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => u.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => u.$emit("blur"))
    }, null, 42, hv));
  }
}), Xo = /* @__PURE__ */ _e(yv, [["__scopeId", "data-v-0380d08f"]]), wv = { class: "branch-create-form" }, _v = { class: "form-actions" }, kv = /* @__PURE__ */ we({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = L(() => {
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
      S(Xo, {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", _v, [
        S(ge, {
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
        S(ge, {
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
}, Iv = /* @__PURE__ */ we({
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
        Qe(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Sv, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Ev = /* @__PURE__ */ _e(Iv, [["__scopeId", "data-v-c6581a24"]]), ED = Ks({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const TD = [
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
], PD = {
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
], RD = [
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
function lt() {
  const e = _(!1), s = _(null);
  async function o(K, xe) {
    var Bt;
    if (!((Bt = window.app) != null && Bt.api))
      throw new Error("ComfyUI API not available");
    const Ue = await window.app.api.fetchApi(K, xe);
    if (!Ue.ok) {
      const Gt = await Ue.json().catch(() => ({}));
      throw new Error(Gt.error || Gt.message || `Request failed: ${Ue.status}`);
    }
    const ct = await Ue.text();
    if (ct)
      return JSON.parse(ct);
  }
  async function a(K = !1) {
    return o(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(K, xe = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: xe })
    });
  }
  async function r(K = 10, xe = 0) {
    return o(`/v2/comfygit/log?limit=${K}&offset=${xe}`);
  }
  async function c(K, xe = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(K)}&limit=${xe}`);
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
  async function p(K, xe = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: xe })
    });
  }
  async function w(K, xe = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: xe })
    });
  }
  async function x(K, xe = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: xe })
    });
  }
  async function $(K, xe = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(K)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: xe })
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
  async function A() {
    return (await C()).environments;
  }
  async function T(K) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(K)}`);
    } catch {
      return null;
    }
  }
  async function I(K, xe) {
    const Ue = { target_env: K };
    return xe && (Ue.workspace_path = xe), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ue)
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function U(K) {
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
  async function M(K) {
    return o(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function te(K = !1) {
    try {
      return o(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const xe = await a(K), Ue = [];
      return xe.workflows.new.forEach((ct) => {
        Ue.push({
          name: ct,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), xe.workflows.modified.forEach((ct) => {
        Ue.push({
          name: ct,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), xe.workflows.synced.forEach((ct) => {
        Ue.push({
          name: ct,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ct
        });
      }), Ue;
    }
  }
  async function le(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function oe(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function J(K, xe, Ue) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: xe, install_models: Ue })
    });
  }
  async function G(K, xe, Ue) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: xe, importance: Ue })
    });
  }
  async function X() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ae() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function re(K) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function B(K) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function ee(K, xe) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function me(K, xe) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function Ne(K) {
    return o(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function We(K) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ze() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ie() {
    return o("/v2/workspace/models/directory");
  }
  async function z(K) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function q(K) {
    const xe = new URLSearchParams({ url: K });
    return o(`/v2/workspace/huggingface/repo-info?${xe}`);
  }
  async function V() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function F(K, xe = 10) {
    const Ue = new URLSearchParams({ query: K, limit: String(xe) });
    return o(`/v2/workspace/huggingface/search?${Ue}`);
  }
  async function ie(K) {
    try {
      const xe = K ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(K)}` : "/v2/comfygit/config";
      return o(xe);
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
  async function Te(K, xe) {
    const Ue = xe ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(xe)}` : "/v2/comfygit/config";
    return o(Ue, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Be(K, xe) {
    try {
      const Ue = new URLSearchParams();
      return K && Ue.append("level", K), xe && Ue.append("lines", xe.toString()), o(`/v2/comfygit/debug/logs?${Ue}`);
    } catch {
      return [];
    }
  }
  async function O(K, xe) {
    try {
      const Ue = new URLSearchParams();
      return K && Ue.append("level", K), xe && Ue.append("lines", xe.toString()), o(`/v2/workspace/debug/logs?${Ue}`);
    } catch {
      return [];
    }
  }
  async function Y() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function de() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Ee(K, xe) {
    try {
      const Ue = new URLSearchParams();
      return K && Ue.append("level", K), xe && Ue.append("lines", xe.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ue}`);
    } catch {
      return [];
    }
  }
  async function be() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function $e(K) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function Me() {
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
  async function ye(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function Pe(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function fe(K) {
    var Gt, Us, As, No;
    const xe = Pv(), Ue = ((Us = (Gt = window.app) == null ? void 0 : Gt.api) == null ? void 0 : Us.clientId) ?? ((No = (As = window.app) == null ? void 0 : As.api) == null ? void 0 : No.initialClientId) ?? "comfygit-panel", ct = {
      id: K.id,
      version: K.version || K.selected_version || "latest",
      selected_version: K.selected_version || "latest",
      mode: K.mode || "remote",
      channel: K.channel || "default"
    };
    return K.install_source && (ct.install_source = K.install_source), K.install_source === "git" && K.repository && (ct.repository = K.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: ct,
        ui_id: xe,
        client_id: Ue
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", xe, "for package:", K.id), o("/v2/manager/queue/start").catch((yn) => {
      console.error("[ComfyGit] Queue start failed:", yn);
    }), { ui_id: xe };
  }
  async function Ae(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function Le(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function N() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function P(K, xe) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: xe })
    });
  }
  async function se(K) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ne(K, xe, Ue) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: xe, push_url: Ue })
    });
  }
  async function ce(K, xe) {
    const Ue = {};
    return xe && (Ue["X-Git-Auth-Token"] = xe), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST",
      headers: Ue
    });
  }
  async function Ce(K) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function ke(K = "skip", xe = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: xe
      })
    });
  }
  async function Ge(K, xe) {
    const Ue = xe ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview`;
    return o(Ue);
  }
  async function rt(K, xe = {}) {
    const Ue = { "Content-Type": "application/json" };
    return xe.authToken && (Ue["X-Git-Auth-Token"] = xe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/pull`, {
      method: "POST",
      headers: Ue,
      body: JSON.stringify({
        model_strategy: xe.modelStrategy || "skip",
        force: xe.force || !1,
        resolutions: xe.resolutions
      })
    });
  }
  async function ht(K, xe) {
    const Ue = xe ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview`;
    return o(Ue);
  }
  async function at(K, xe = {}) {
    const Ue = { "Content-Type": "application/json" };
    return xe.authToken && (Ue["X-Git-Auth-Token"] = xe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/push`, {
      method: "POST",
      headers: Ue,
      body: JSON.stringify({ force: xe.force || !1 })
    });
  }
  async function tt(K, xe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: xe })
    });
  }
  async function wt(K) {
    const xe = {
      success: 0,
      failed: []
    };
    for (const Ue of K)
      try {
        await oe(Ue), xe.success++;
      } catch (ct) {
        xe.failed.push({
          name: Ue,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return xe;
  }
  async function $t(K) {
    var ct;
    const xe = new FormData();
    if (xe.append("file", K), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const Ue = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: xe
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ue.ok) {
      const Bt = await Ue.json().catch(() => ({}));
      throw new Error(Bt.error || `Preview failed: ${Ue.status}`);
    }
    return Ue.json();
  }
  async function st(K) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(K)}`
    );
  }
  async function Ys(K, xe, Ue, ct) {
    var Us;
    const Bt = new FormData();
    if (Bt.append("file", K), Bt.append("name", xe), Bt.append("model_strategy", Ue), Bt.append("torch_backend", ct), !((Us = window.app) != null && Us.api))
      throw new Error("ComfyUI API not available");
    const Gt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Bt
    });
    if (!Gt.ok) {
      const As = await Gt.json().catch(() => ({}));
      throw new Error(As.message || As.error || `Import failed: ${Gt.status}`);
    }
    return Gt.json();
  }
  async function fs() {
    return o("/v2/workspace/import/status");
  }
  async function pe(K) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: K })
    });
  }
  async function H(K, xe, Ue, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: K,
        name: xe,
        model_strategy: Ue,
        torch_backend: ct
      })
    });
  }
  async function ve() {
    return o("/v2/setup/status");
  }
  async function je() {
    return o("/v2/comfygit/update-check");
  }
  async function ot() {
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
  async function Fe(K) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function _t() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Ct() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Jt(K, xe) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: K, save_key: xe })
    });
  }
  async function $s() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Pt(K) {
    const xe = K ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(K)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(xe);
  }
  async function Ve(K) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function os() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function vs(K) {
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
  async function Js(K) {
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
  async function hn(K) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`);
  }
  async function ue(K, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function Q(K, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent(xe)}/start`, {
      method: "POST"
    });
  }
  async function Oe(K, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent(xe)}/stop`, {
      method: "POST"
    });
  }
  async function Ke(K, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent(xe)}`, {
      method: "DELETE"
    });
  }
  async function dt(K) {
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
    getEnvironments: A,
    getEnvironmentDetails: T,
    switchEnvironment: I,
    getSwitchProgress: D,
    createEnvironment: U,
    getCreateProgress: W,
    getComfyUIReleases: E,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: te,
    getWorkflowDetails: le,
    resolveWorkflow: oe,
    installWorkflowDeps: J,
    setModelImportance: G,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: ae,
    getModelDetails: re,
    openFileLocation: B,
    addModelSource: ee,
    removeModelSource: me,
    deleteModel: Ne,
    downloadModel: We,
    scanWorkspaceModels: ze,
    getModelsDirectory: Ie,
    setModelsDirectory: z,
    getHuggingFaceRepoInfo: q,
    getModelsSubdirectories: V,
    searchHuggingFaceRepos: F,
    // Settings
    getConfig: ie,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Be,
    getWorkspaceLogs: O,
    getEnvironmentLogPath: Y,
    getWorkspaceLogPath: de,
    getOrchestratorLogs: Ee,
    getOrchestratorLogPath: be,
    openFile: $e,
    // Node Management
    getNodes: Me,
    trackNodeAsDev: ye,
    installNode: Pe,
    queueNodeInstall: fe,
    updateNode: Ae,
    uninstallNode: Le,
    // Git Remotes
    getRemotes: N,
    addRemote: P,
    removeRemote: se,
    updateRemoteUrl: ne,
    fetchRemote: ce,
    getRemoteSyncStatus: Ce,
    // Push/Pull
    getPullPreview: Ge,
    pullFromRemote: rt,
    getPushPreview: ht,
    pushToRemote: at,
    validateMerge: tt,
    // Environment Sync
    syncEnvironmentManually: ke,
    // Workflow Repair
    repairWorkflowModels: wt,
    // Import Operations
    previewTarballImport: $t,
    previewGitImport: pe,
    validateEnvironmentName: st,
    executeImport: Ys,
    executeGitImport: H,
    getImportProgress: fs,
    // First-Time Setup
    getSetupStatus: ve,
    // Manager Update Notice
    getUpdateCheck: je,
    updateManager: ot,
    initializeWorkspace: Se,
    getInitializeProgress: Z,
    validatePath: Fe,
    // Deploy Operations
    getDeploySummary: _t,
    getDataCenters: Ct,
    testRunPodConnection: Jt,
    getNetworkVolumes: $s,
    getRunPodGpuTypes: Pt,
    deployToRunPod: Ve,
    getRunPodPods: os,
    terminateRunPodPod: vs,
    stopRunPodPod: ro,
    startRunPodPod: co,
    getDeploymentStatus: uo,
    exportDeployPackage: Js,
    getStoredRunPodKey: mo,
    clearRunPodKey: fo,
    // Custom Worker Operations
    getCustomWorkers: vo,
    addCustomWorker: po,
    removeCustomWorker: go,
    testWorkerConnection: ca,
    scanForWorkers: ua,
    getWorkerSystemInfo: da,
    getWorkerInstances: hn,
    deployToWorker: ue,
    startWorkerInstance: Q,
    stopWorkerInstance: Oe,
    terminateWorkerInstance: Ke,
    // Git Authentication
    testGitAuth: dt
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
}, Av = /* @__PURE__ */ we({
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
    }), qs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), R(Tt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Re(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = gt(() => {
          }, ["stop"]))
        }, [
          t("div", Rv, [
            Qe(c.$slots, "header", {}, () => [
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
            e.loading ? (n(), i("div", Lv, "Loading...")) : e.error ? (n(), i("div", Nv, d(e.error), 1)) : Qe(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Uv, [
            Qe(c.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), yt = /* @__PURE__ */ _e(Av, [["__scopeId", "data-v-8dab1081"]]), Ov = ["type", "disabled"], zv = {
  key: 0,
  class: "spinner"
}, Fv = /* @__PURE__ */ we({
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
      Qe(s.$slots, "default", {}, void 0)
    ], 10, Ov));
  }
}), De = /* @__PURE__ */ _e(Fv, [["__scopeId", "data-v-f3452606"]]), Vv = { class: "commit-list" }, Bv = /* @__PURE__ */ we({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", Vv, [
      Qe(s.$slots, "default", {}, void 0)
    ]));
  }
}), Dr = /* @__PURE__ */ _e(Bv, [["__scopeId", "data-v-8c5ee761"]]), Wv = { class: "commit-hash" }, Gv = /* @__PURE__ */ we({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = L(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Wv, d(o.value), 1));
  }
}), Lr = /* @__PURE__ */ _e(Gv, [["__scopeId", "data-v-7c333cc6"]]), jv = { class: "commit-message" }, Hv = { class: "commit-date" }, Kv = /* @__PURE__ */ we({
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
        onClick: c[0] || (c[0] = gt(() => {
        }, ["stop"]))
      }, [
        Qe(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Nr = /* @__PURE__ */ _e(Kv, [["__scopeId", "data-v-dd7c621b"]]), qv = { class: "header-info" }, Yv = { class: "branch-name" }, Jv = {
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
}, sp = /* @__PURE__ */ we({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = lt(), a = _([]), l = _(!1), r = _(!0);
    return et(async () => {
      try {
        const c = await o(s.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), R(yt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => c.$emit("close"))
    }, {
      header: g(() => [
        t("div", qv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Yv, d(e.branchName), 1),
          e.isCurrent ? (n(), i("span", Jv, "CURRENT")) : h("", !0)
        ]),
        S(De, {
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
        t("div", Qv, [
          r.value ? (n(), i("span", Xv, "Loading...")) : (n(), i(j, { key: 1 }, [
            t("span", null, d(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", Zv, "(showing first " + d(a.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", ep, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", tp, " No commits found on this branch ")) : (n(), R(Dr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(j, null, he(a.value, (m) => (n(), R(Nr, {
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
        e.isCurrent ? h("", !0) : (n(), R(ge, {
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
        e.isCurrent ? h("", !0) : (n(), R(De, {
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
}, ap = /* @__PURE__ */ we({
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
    return (v, y) => (n(), R(Ft, null, {
      header: g(() => [
        S(Vt, { title: "BRANCHES" }, {
          actions: g(() => [
            a.value ? h("", !0) : (n(), R(ge, {
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
        a.value ? (n(), R(bv, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : h("", !0),
        e.branches.length === 0 ? (n(), R(ds, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", np, [
          (n(!0), i(j, null, he(e.branches, (k) => (n(), R(Ev, {
            key: k.name,
            "branch-name": k.name,
            "is-current": k.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(k)
          }, {
            actions: g(() => [
              k.is_current ? h("", !0) : (n(), R(ge, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: gt((p) => o("switch", k.name), ["stop"])
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
        l.value ? (n(), R(op, {
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
}), lp = /* @__PURE__ */ _e(ap, [["__scopeId", "data-v-eefdcb00"]]), ip = /* @__PURE__ */ we({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = L(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), R(Ft, null, {
      header: g(() => [
        S(Vt, { title: o.value }, null, 8, ["title"])
      ]),
      content: g(() => [
        e.commits.length === 0 ? (n(), R(ds, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), R(Dr, { key: 1 }, {
          default: g(() => [
            (n(!0), i(j, null, he(e.commits, (r) => (n(), R(Nr, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: g(() => [
                S(ge, {
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
}, dp = /* @__PURE__ */ we({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), R(il(`h${e.level}`), {
      class: Re(["base-title", e.variant])
    }, {
      default: g(() => [
        Qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", up, "(" + d(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Zo = /* @__PURE__ */ _e(dp, [["__scopeId", "data-v-5a01561d"]]), mp = ["value", "disabled"], fp = {
  key: 0,
  value: "",
  disabled: ""
}, vp = ["value"], pp = {
  key: 0,
  class: "base-select-error"
}, gp = /* @__PURE__ */ we({
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
        (n(!0), i(j, null, he(e.options, (r) => (n(), i("option", {
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
}, bp = /* @__PURE__ */ we({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), R(Tt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Yt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = gt(() => {
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
            Qe(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", kp, [
            Qe(s.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), ms = /* @__PURE__ */ _e(bp, [["__scopeId", "data-v-42815ace"]]), $p = { class: "detail-section" }, Cp = {
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
}, Yp = /* @__PURE__ */ we({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = lt(), m = _(null), f = _(!1), v = _(null), y = _(!1), k = _({}), p = _(!1), w = _(/* @__PURE__ */ new Set()), x = _(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(G) {
      switch (G) {
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
    function A(G) {
      switch (G) {
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
    function T(G) {
      switch (G) {
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
    function I(G) {
      switch (G) {
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
    function D(G) {
      switch (G) {
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
    function U(G) {
      if (!G.loaded_by || G.loaded_by.length === 0) return [];
      const X = G.hash || G.filename;
      return w.value.has(X) ? G.loaded_by : G.loaded_by.slice(0, 3);
    }
    function W(G) {
      return w.value.has(G);
    }
    function E(G) {
      w.value.has(G) ? w.value.delete(G) : w.value.add(G), w.value = new Set(w.value);
    }
    async function M() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function te(G, X) {
      k.value[G] = X, y.value = !0;
    }
    async function le(G) {
      try {
        await c(G);
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to open file location";
      }
    }
    async function oe(G) {
      if (G.package_id)
        try {
          const X = G.latest_version || "latest";
          await u({
            id: G.package_id,
            version: X,
            selected_version: X,
            mode: "remote",
            channel: "default"
          }), x.value.add(G.package_id);
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to queue node install";
        }
    }
    async function J() {
      if (!y.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [G, X] of Object.entries(k.value))
          await r(o.workflowName, G, X);
        a("refresh"), a("close");
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return et(M), (G, X) => (n(), i(j, null, [
      S(yt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: X[4] || (X[4] = (ae) => a("close"))
      }, {
        body: g(() => [
          m.value ? (n(), i(j, { key: 0 }, [
            t("section", $p, [
              S(Zo, { variant: "section" }, {
                default: g(() => [
                  b("MODELS USED (" + d(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (n(), i("div", Cp, " No models used in this workflow ")) : h("", !0),
              (n(!0), i(j, null, he(m.value.models, (ae) => {
                var re;
                return n(), i("div", {
                  key: ae.hash || ae.filename,
                  class: "model-card"
                }, [
                  t("div", xp, [
                    X[6] || (X[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Sp, d(ae.filename), 1)
                  ]),
                  t("div", Ip, [
                    t("div", Ep, [
                      X[7] || (X[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Re(["value", C(ae.status)])
                      }, d(A(ae.status)), 3)
                    ]),
                    t("div", Tp, [
                      t("span", Pp, [
                        X[8] || (X[8] = b(" Importance: ", -1)),
                        S(Mr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: X[0] || (X[0] = (B) => p.value = !0)
                        })
                      ]),
                      S(hp, {
                        "model-value": k.value[ae.filename] || ae.importance,
                        options: $,
                        "onUpdate:modelValue": (B) => te(ae.filename, B)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    ae.loaded_by && ae.loaded_by.length > 0 ? (n(), i("div", Rp, [
                      X[9] || (X[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Mp, [
                        (n(!0), i(j, null, he(U(ae), (B, ee) => (n(), i("div", {
                          key: `${B.node_id}-${ee}`,
                          class: "node-reference"
                        }, d(B.node_type) + " (Node #" + d(B.node_id) + ") ", 1))), 128)),
                        ae.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (B) => E(ae.hash || ae.filename)
                        }, d(W(ae.hash || ae.filename) ? "▼ Show less" : `▶ View all (${ae.loaded_by.length})`), 9, Dp)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    ae.size_mb ? (n(), i("div", Lp, [
                      X[10] || (X[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Np, d(ae.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    ae.has_category_mismatch ? (n(), i("div", Up, [
                      X[13] || (X[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Ap, [
                        X[11] || (X[11] = b(" In ", -1)),
                        t("code", null, d(ae.actual_category) + "/", 1),
                        X[12] || (X[12] = b(" but loader needs ", -1)),
                        t("code", null, d((re = ae.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  ae.status !== "available" ? (n(), i("div", Op, [
                    ae.status === "downloadable" ? (n(), R(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: X[1] || (X[1] = (B) => a("resolve"))
                    }, {
                      default: g(() => [...X[14] || (X[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : ae.status === "category_mismatch" && ae.file_path ? (n(), R(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => le(ae.file_path)
                    }, {
                      default: g(() => [...X[15] || (X[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : ae.status !== "path_mismatch" ? (n(), R(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: X[2] || (X[2] = (B) => a("resolve"))
                    }, {
                      default: g(() => [...X[16] || (X[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            t("section", zp, [
              S(Zo, { variant: "section" }, {
                default: g(() => [
                  b("NODES USED (" + d(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (n(), i("div", Fp, " No custom nodes used in this workflow ")) : h("", !0),
              (n(!0), i(j, null, he(m.value.nodes, (ae, re) => (n(), i("div", {
                key: `${ae.name}-${ae.status}-${re}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Re(["node-status", T(ae.status)])
                }, d(I(ae.status)), 3),
                t("div", Vp, [
                  t("div", Bp, [
                    t("span", Wp, d(ae.name), 1),
                    t("span", Gp, d(D(ae.status)), 1),
                    ae.version ? (n(), i("span", jp, "v" + d(ae.version), 1)) : h("", !0),
                    ae.status === "uninstallable" && ae.package_id && !x.value.has(ae.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (B) => oe(ae)
                    }, " Install ", 8, Hp)) : ae.status === "uninstallable" && ae.package_id && x.value.has(ae.package_id) ? (n(), i("span", Kp, " Queued ")) : h("", !0)
                  ]),
                  ae.guidance ? (n(), i("div", qp, d(ae.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          S(De, {
            variant: "secondary",
            onClick: X[3] || (X[3] = (ae) => a("close"))
          }, {
            default: g(() => [...X[17] || (X[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            onClick: J
          }, {
            default: g(() => [...X[18] || (X[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      S(ms, {
        show: p.value,
        title: "Model Importance Levels",
        onClose: X[5] || (X[5] = (ae) => p.value = !1)
      }, {
        content: g(() => [...X[19] || (X[19] = [
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
}), Jp = /* @__PURE__ */ _e(Yp, [["__scopeId", "data-v-543076d9"]]), Ze = Ks({
  items: [],
  status: "idle"
});
let ws = null;
function Ur() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ca(e) {
  return Ze.items.find((s) => s.id === e);
}
async function bo() {
  if (Ze.status === "downloading") return;
  const e = Ze.items.find((s) => s.status === "queued");
  if (!e) {
    Ze.status = "idle";
    return;
  }
  Ze.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Qp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ze.status = "idle", bo();
  }
}
async function Qp(e) {
  return new Promise((s, o) => {
    ws && (ws.close(), ws = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ws = l;
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
            u = !0, l.close(), ws = null, s();
            break;
          case "error":
            u = !0, l.close(), ws = null, o(new Error(f.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), ws = null, u || o(new Error("Connection lost"));
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
function Do() {
  function e($) {
    for (const C of $) {
      if (Ze.items.some(
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
      Ze.items.push(T);
    }
    Ze.status === "idle" && bo();
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
        ws && (ws.close(), ws = null), C.status = "failed", C.error = "Cancelled by user", Ze.status = "idle", bo();
      } else if (C.status === "queued") {
        const A = Ze.items.findIndex((T) => T.id === $);
        A >= 0 && Ze.items.splice(A, 1);
      }
    }
  }
  function o($) {
    const C = Ca($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Ze.status === "idle" && bo());
  }
  function a($) {
    const C = Ca($);
    !C || C.status !== "paused" || (C.status = "queued", Ze.status === "idle" && bo());
  }
  function l() {
    const $ = Ze.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Ze.status === "idle" && bo();
  }
  function r($) {
    const C = Ze.items.findIndex((A) => A.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Ze.items[C].status) && Ze.items.splice(C, 1);
  }
  function c() {
    Ze.items = Ze.items.filter(($) => $.status !== "completed");
  }
  function u() {
    Ze.items = Ze.items.filter(($) => $.status !== "failed");
  }
  const m = L(
    () => Ze.items.find(($) => $.status === "downloading")
  ), f = L(
    () => Ze.items.filter(($) => $.status === "queued")
  ), v = L(
    () => Ze.items.filter(($) => $.status === "completed")
  ), y = L(
    () => Ze.items.filter(($) => $.status === "failed")
  ), k = L(
    () => Ze.items.filter(($) => $.status === "paused")
  ), p = L(() => Ze.items.length > 0), w = L(
    () => Ze.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), x = L(
    () => Ze.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Un(Ze),
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
  async function c(A, T) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(A, T);
    if (!I.ok) {
      const U = await I.json().catch(() => ({})), W = U.error || U.message || `Request failed: ${I.status}`;
      throw new Error(W);
    }
    return I.json();
  }
  async function u(A) {
    l.value = !0, r.value = null;
    try {
      let T;
      return ko() || (T = await c(
        `/v2/comfygit/workflow/${A}/analyze`,
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
  async function m(A, T, I, D) {
    l.value = !0, r.value = null;
    try {
      let U;
      if (!ko()) {
        const W = Object.fromEntries(T), E = Object.fromEntries(I), M = D ? Array.from(D) : [];
        U = await c(
          `/v2/comfygit/workflow/${A}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: E,
              skipped_packages: M
            })
          }
        );
      }
      return s.value = U, U;
    } catch (U) {
      const W = U instanceof Error ? U.message : "Unknown error occurred";
      throw r.value = W, U;
    } finally {
      l.value = !1;
    }
  }
  async function f(A, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return ko() || (I = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: T })
        }
      )), o.value = I.results, I.results;
    } catch (I) {
      const D = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = D, I;
    } finally {
      l.value = !1;
    }
  }
  async function v(A, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return ko() || (I = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: T })
        }
      )), a.value = I.results, I.results;
    } catch (I) {
      const D = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = D, I;
    } finally {
      l.value = !1;
    }
  }
  const y = Ks({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function p(A) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return ko(), await w(A);
    } catch (T) {
      const I = T instanceof Error ? T.message : "Failed to install nodes";
      throw y.installError = I, T;
    }
  }
  async function w(A) {
    var I;
    const T = await c(
      `/v2/comfygit/workflow/${A}/install`,
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
      const D = new Map(((I = T.failed) == null ? void 0 : I.map((U) => [U.node_id, U.error])) || []);
      for (let U = 0; U < y.nodesToInstall.length; U++) {
        const W = y.nodesToInstall[U], E = D.get(W);
        y.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !E,
          error: E
        });
      }
    }
    return y.nodesInstalled = T.nodes_installed, y.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (y.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function x(A, T, I) {
    k(), y.phase = "resolving", r.value = null;
    const D = Object.fromEntries(T), U = Object.fromEntries(I);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${A}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: U
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const E = W.body.getReader(), M = new TextDecoder();
      let te = "";
      for (; ; ) {
        const { done: le, value: oe } = await E.read();
        if (le) break;
        te += M.decode(oe, { stream: !0 });
        const J = te.split(`

`);
        te = J.pop() || "";
        for (const G of J) {
          if (!G.trim()) continue;
          const X = G.split(`
`);
          let ae = "", re = "";
          for (const B of X)
            B.startsWith("event: ") ? ae = B.slice(7) : B.startsWith("data: ") && (re = B.slice(6));
          if (re)
            try {
              const B = JSON.parse(re);
              $(ae, B);
            } catch (B) {
              console.warn("Failed to parse SSE event:", B);
            }
        }
      }
    } catch (W) {
      const E = W instanceof Error ? W.message : "Unknown error occurred";
      throw r.value = E, y.error = E, y.phase = "error", W;
    }
  }
  function $(A, T) {
    switch (A) {
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
  function C(A, T) {
    const { addToQueue: I } = Do(), D = T.filter((U) => U.url && U.target_path).map((U) => ({
      workflow: A,
      filename: U.filename,
      url: U.url,
      targetPath: U.target_path,
      size: U.size || 0,
      type: "model"
    }));
    return D.length > 0 && I(D), D.length;
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
}, lg = { class: "stepper-content" }, ig = /* @__PURE__ */ we({
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
        (n(!0), i(j, null, he(e.steps, (y, k) => (n(), i("div", {
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
        Qe(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), rg = /* @__PURE__ */ _e(ig, [["__scopeId", "data-v-2a7b3af8"]]), cg = /* @__PURE__ */ we({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = L(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = L(() => `confidence-${o.value}`), l = L(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
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
}, Ag = { class: "action-buttons" }, Og = /* @__PURE__ */ we({
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
    const r = L(() => !!o.choice);
    L(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), L(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.package_id;
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
          S(De, {
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
            (n(!0), i(j, null, he(e.options, (v, y) => (n(), i("label", {
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
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: g(() => [...f[9] || (f[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("manual-entry"))
            }, {
              default: g(() => [...f[10] || (f[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(De, {
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
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(j, { key: 1 }, [
            f[14] || (f[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Ig, [
              (n(!0), i(j, null, he(e.searchResults.slice(0, 5), (v, y) => (n(), i("label", {
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
            S(De, {
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
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("manual-entry"))
            }, {
              default: g(() => [...f[16] || (f[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(De, {
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
}), zg = /* @__PURE__ */ _e(Og, [["__scopeId", "data-v-c2997d1d"]]), Fg = { class: "item-navigator" }, Vg = { class: "nav-item-info" }, Bg = ["title"], Wg = { class: "nav-controls" }, Gg = { class: "nav-arrows" }, jg = ["disabled"], Hg = ["disabled"], Kg = { class: "nav-position" }, qg = /* @__PURE__ */ we({
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
}), Or = /* @__PURE__ */ _e(qg, [["__scopeId", "data-v-74af7920"]]), Yg = ["type", "value", "placeholder", "disabled"], Jg = {
  key: 0,
  class: "base-input-error"
}, Qg = /* @__PURE__ */ we({
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
          o[1] || (o[1] = ts((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ts((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Yg),
      e.error ? (n(), i("span", Jg, d(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ _e(Qg, [["__scopeId", "data-v-9ba02cdc"]]), Xg = { class: "node-resolution-step" }, Zg = {
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
}, xh = { class: "node-manual-entry-modal" }, Sh = { class: "node-modal-body" }, Ih = { class: "node-modal-actions" }, Eh = /* @__PURE__ */ we({
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
      w.value && B(), w.value = !1;
    }
    const $ = L(() => o.nodes[r.value]), C = L(() => o.nodes.filter((q) => o.nodeChoices.has(q.node_type)).length), A = L(() => $.value ? k.value.get($.value.node_type) || [] : []), T = L(() => $.value ? p.value.has($.value.node_type) : !1);
    kt($, async (q) => {
      var V;
      q && ((V = q.options) != null && V.length || k.value.has(q.node_type) || p.value.has(q.node_type) || o.nodeChoices.has(q.node_type) || await I(q.node_type));
    }, { immediate: !0 });
    async function I(q) {
      p.value.add(q);
      try {
        const V = await l(q, 5);
        k.value.set(q, V);
      } catch {
        k.value.set(q, []);
      } finally {
        p.value.delete(q);
      }
    }
    const D = L(() => o.autoResolvedPackages.filter((q) => !o.skippedPackages.has(q.package_id)).length);
    function U(q) {
      return o.skippedPackages.has(q);
    }
    function W(q) {
      a("package-skip", q);
    }
    const E = L(() => {
      var V;
      if (!$.value) return "not-found";
      const q = o.nodeChoices.get($.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (V = $.value.options) != null && V.length ? "ambiguous" : "not-found";
    }), M = L(() => {
      var V;
      if (!$.value) return;
      const q = o.nodeChoices.get($.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return q.package_id ? `→ ${q.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (V = $.value.options) != null && V.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function te(q) {
      q >= 0 && q < o.nodes.length && (r.value = q);
    }
    function le() {
      var q;
      for (let V = r.value + 1; V < o.nodes.length; V++) {
        const F = o.nodes[V];
        if (!((q = o.nodeChoices) != null && q.has(F.node_type))) {
          te(V);
          return;
        }
      }
    }
    function oe() {
      $.value && (a("mark-optional", $.value.node_type), St(() => le()));
    }
    function J() {
      $.value && (a("skip", $.value.node_type), St(() => le()));
    }
    function G(q) {
      $.value && (a("option-selected", $.value.node_type, q), St(() => le()));
    }
    function X() {
      $.value && a("clear-choice", $.value.node_type);
    }
    function ae() {
      $.value && (m.value = $.value.node_type, v.value = A.value, c.value = !0, We(m.value));
    }
    function re() {
      f.value = "", u.value = !0;
    }
    function B() {
      c.value = !1, m.value = "", v.value = [];
    }
    function ee() {
      u.value = !1, f.value = "";
    }
    let me = null;
    function Ne() {
      me && clearTimeout(me), me = setTimeout(() => {
        We(m.value);
      }, 300);
    }
    async function We(q) {
      if (!q.trim()) {
        v.value = [];
        return;
      }
      y.value = !0;
      try {
        v.value = await l(q, 10);
      } catch {
        v.value = [];
      } finally {
        y.value = !1;
      }
    }
    function ze(q) {
      $.value && (a("manual-entry", $.value.node_type, q.package_id), B(), St(() => le()));
    }
    function Ie(q) {
      $.value && (a("manual-entry", $.value.node_type, q.package_id), St(() => le()));
    }
    function z() {
      !$.value || !f.value.trim() || (a("manual-entry", $.value.node_type, f.value.trim()), ee(), St(() => le()));
    }
    return (q, V) => {
      var F, ie;
      return n(), i("div", Xg, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Zg, [
          t("div", eh, [
            V[6] || (V[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", th, d(D.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", sh, [
            (n(!0), i(j, null, he(e.autoResolvedPackages, (Te) => (n(), i("div", {
              key: Te.package_id,
              class: "resolved-package-item"
            }, [
              t("div", oh, [
                t("code", nh, d(Te.package_id), 1),
                t("span", ah, d(Te.node_types_count) + " node type" + d(Te.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", lh, [
                U(Te.package_id) ? (n(), i("span", rh, " SKIPPED ")) : (n(), i("span", ih, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Be) => W(Te.package_id)
                }, d(U(Te.package_id) ? "Include" : "Skip"), 9, ch)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", uh)) : h("", !0),
        e.nodes.length > 0 ? (n(), i(j, { key: 2 }, [
          t("div", dh, [
            V[7] || (V[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", mh, d(C.value) + "/" + d(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (n(), R(Or, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: V[0] || (V[0] = (Te) => te(r.value - 1)),
            onNext: V[1] || (V[1] = (Te) => te(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          $.value ? (n(), i("div", fh, [
            S(zg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((F = $.value.options) != null && F.length),
              options: $.value.options,
              choice: (ie = e.nodeChoices) == null ? void 0 : ie.get($.value.node_type),
              status: E.value,
              "status-label": M.value,
              "search-results": A.value,
              "is-searching": T.value,
              onMarkOptional: oe,
              onSkip: J,
              onManualEntry: re,
              onSearch: ae,
              onOptionSelected: G,
              onClearChoice: X,
              onSearchResultSelected: Ie
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", vh, [...V[8] || (V[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (n(), R(Tt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: V[4] || (V[4] = gt((Te) => w.value = !0, ["self"])),
            onMouseup: gt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: V[3] || (V[3] = (Te) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                V[9] || (V[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              t("div", ph, [
                S(Nt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": V[2] || (V[2] = (Te) => m.value = Te),
                  placeholder: "Search by node type, package name...",
                  onInput: Ne
                }, null, 8, ["modelValue"]),
                t("div", gh, [
                  v.value.length > 0 ? (n(), i("div", hh, [
                    (n(!0), i(j, null, he(v.value, (Te) => (n(), i("div", {
                      key: Te.package_id,
                      class: "node-search-result-item",
                      onClick: (Be) => ze(Te)
                    }, [
                      t("div", wh, [
                        t("code", _h, d(Te.package_id), 1),
                        Te.match_confidence ? (n(), R(jn, {
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
        (n(), R(Tt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: gt(ee, ["self"])
          }, [
            t("div", xh, [
              t("div", { class: "node-modal-header" }, [
                V[10] || (V[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              t("div", Sh, [
                S(Nt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": V[5] || (V[5] = (Te) => f.value = Te),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Ih, [
                  S(De, {
                    variant: "secondary",
                    onClick: ee
                  }, {
                    default: g(() => [...V[11] || (V[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(De, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: z
                  }, {
                    default: g(() => [...V[12] || (V[12] = [
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
}, Kh = { class: "action-buttons" }, qh = /* @__PURE__ */ we({
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
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), L(() => {
      var m, f;
      return ((f = (m = o.choice) == null ? void 0 : m.selected_model) == null ? void 0 : f.filename) || "selected";
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
          S(De, {
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
            (n(!0), i(j, null, he(e.options, (v, y) => (n(), i("label", {
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
            S(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: g(() => [...f[9] || (f[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[10] || (f[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(De, {
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
            S(De, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: g(() => [...f[13] || (f[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[14] || (f[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(De, {
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
}), Yh = /* @__PURE__ */ _e(qh, [["__scopeId", "data-v-8a82fefa"]]), Jh = { class: "model-resolution-step" }, Qh = { class: "step-header" }, Xh = { class: "step-info" }, Zh = { class: "step-title" }, ey = { class: "step-description" }, ty = { class: "stat-badge" }, sy = {
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
}, gy = { class: "model-download-url-modal" }, hy = { class: "model-modal-body" }, yy = { class: "model-input-group" }, wy = { class: "model-input-group" }, _y = { class: "model-modal-actions" }, ky = /* @__PURE__ */ we({
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
    function a(B) {
      var ee;
      return B && ((ee = o[B]) == null ? void 0 : ee[0]) || null;
    }
    const l = e, r = s, c = _(0), u = _(!1), m = _(!1), f = _(""), v = _(""), y = _(""), k = _([]), p = _(!1), w = L(() => l.models[c.value]), x = L(() => l.models.some((B) => B.is_download_intent)), $ = L(() => l.models.filter(
      (B) => l.modelChoices.has(B.filename) || B.is_download_intent
    ).length), C = L(() => {
      var ee;
      if (!w.value) return "";
      const B = a((ee = w.value.reference) == null ? void 0 : ee.node_type);
      return B ? `${B}/${w.value.filename}` : "";
    }), A = L(() => {
      var ee;
      if (!w.value) return "not-found";
      const B = l.modelChoices.get(w.value.filename);
      if (B)
        switch (B.action) {
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
    }), T = L(() => {
      var ee, me;
      if (!w.value) return;
      const B = l.modelChoices.get(w.value.filename);
      if (B)
        switch (B.action) {
          case "select":
            return (ee = B.selected_model) != null && ee.filename ? `→ ${B.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (me = w.value.options) != null && me.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function I(B) {
      B >= 0 && B < l.models.length && (c.value = B);
    }
    function D() {
      var B;
      for (let ee = c.value + 1; ee < l.models.length; ee++) {
        const me = l.models[ee];
        if (!me.is_download_intent && !((B = l.modelChoices) != null && B.has(me.filename))) {
          I(ee);
          return;
        }
      }
    }
    function U() {
      w.value && (r("mark-optional", w.value.filename), St(() => D()));
    }
    function W() {
      w.value && (r("skip", w.value.filename), St(() => D()));
    }
    function E(B) {
      w.value && (r("option-selected", w.value.filename, B), St(() => D()));
    }
    function M() {
      w.value && r("clear-choice", w.value.filename);
    }
    function te() {
      w.value && (f.value = w.value.filename, u.value = !0);
    }
    function le() {
      w.value && (v.value = w.value.download_source || "", y.value = w.value.target_path || C.value, m.value = !0);
    }
    function oe() {
      u.value = !1, f.value = "", k.value = [];
    }
    function J() {
      m.value = !1, v.value = "", y.value = "";
    }
    function G() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function X(B) {
      w.value && (oe(), St(() => D()));
    }
    function ae() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), y.value.trim() || void 0), J(), St(() => D()));
    }
    function re(B) {
      if (!B) return "Unknown";
      const ee = B / (1024 * 1024 * 1024);
      return ee >= 1 ? `${ee.toFixed(2)} GB` : `${(B / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (B, ee) => {
      var me, Ne, We;
      return n(), i("div", Jh, [
        t("div", Qh, [
          t("div", Xh, [
            t("h3", Zh, d(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", ey, d(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", ty, d($.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), R(Or, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ee[0] || (ee[0] = (ze) => I(c.value - 1)),
          onNext: ee[1] || (ee[1] = (ze) => I(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        w.value ? (n(), i("div", sy, [
          S(Yh, {
            filename: w.value.filename,
            "node-type": ((me = w.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((Ne = w.value.options) != null && Ne.length),
            options: w.value.options,
            choice: (We = e.modelChoices) == null ? void 0 : We.get(w.value.filename),
            status: A.value,
            "status-label": T.value,
            onMarkOptional: U,
            onSkip: W,
            onDownloadUrl: le,
            onSearch: te,
            onOptionSelected: E,
            onClearChoice: M
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", oy, [...ee[5] || (ee[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), R(Tt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(oe, ["self"])
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
                S(Nt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ee[2] || (ee[2] = (ze) => f.value = ze),
                  placeholder: "Search by filename, category...",
                  onInput: G
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (n(), i("div", ly, [
                  (n(!0), i(j, null, he(k.value, (ze) => (n(), i("div", {
                    key: ze.hash,
                    class: "model-search-result-item",
                    onClick: (Ie) => X()
                  }, [
                    t("div", ry, [
                      t("code", cy, d(ze.filename), 1)
                    ]),
                    t("div", uy, [
                      t("span", dy, d(ze.category), 1),
                      t("span", my, d(re(ze.size)), 1)
                    ]),
                    ze.relative_path ? (n(), i("div", fy, d(ze.relative_path), 1)) : h("", !0)
                  ], 8, iy))), 128))
                ])) : f.value && !p.value ? (n(), i("div", vy, ' No models found matching "' + d(f.value) + '" ', 1)) : h("", !0),
                p.value ? (n(), i("div", py, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (n(), R(Tt, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(J, ["self"])
          }, [
            t("div", gy, [
              t("div", { class: "model-modal-header" }, [
                ee[7] || (ee[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              t("div", hy, [
                t("div", yy, [
                  ee[8] || (ee[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(Nt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ee[3] || (ee[3] = (ze) => v.value = ze),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", wy, [
                  ee[9] || (ee[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(Nt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": ee[4] || (ee[4] = (ze) => y.value = ze),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", _y, [
                  S(De, {
                    variant: "secondary",
                    onClick: J
                  }, {
                    default: g(() => [...ee[10] || (ee[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(De, {
                    variant: "primary",
                    disabled: !v.value.trim() || !y.value.trim(),
                    onClick: ae
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
}, Jy = {
  key: 3,
  class: "phase-content error"
}, Qy = { class: "error-message" }, Xy = /* @__PURE__ */ we({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = L(() => {
      var f, v;
      const u = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const m = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(m / u * 100);
    }), a = L(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((m) => !m.success)) || [];
    }), l = L(() => a.value.length > 0);
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
                style: Yt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Ty, d(((y = e.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + d(((k = e.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Py, [
            (n(!0), i(j, null, he(e.progress.nodesToInstall, (p, w) => (n(), i("div", {
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
              (n(!0), i(j, null, he(a.value, (p) => (n(), i("div", {
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
        ])) : e.progress.phase === "error" ? (n(), i("div", Jy, [
          m[9] || (m[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", Qy, d(e.progress.error), 1)
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
}, K1 = { class: "mismatch-list" }, q1 = { class: "mismatch-path" }, Y1 = { class: "mismatch-target" }, J1 = {
  key: 8,
  class: "category-mismatch-section"
}, Q1 = { class: "mismatch-list" }, X1 = { class: "mismatch-path" }, Z1 = { class: "status-text" }, e0 = {
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
}, J0 = { class: "section-title" }, Q0 = { class: "review-items download-details" }, X0 = { class: "download-info" }, Z0 = { class: "item-name" }, ew = { class: "download-meta" }, tw = { class: "download-path" }, sw = ["title"], ow = {
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
}, gw = /* @__PURE__ */ we({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: m, resetProgress: f } = Ar(), { loadPendingDownloads: v } = Do(), { openFileLocation: y, queueNodeInstall: k } = lt(), p = _(null), w = _(!1), x = _(!1), $ = _(null), C = _("analysis"), A = _([]), T = _(/* @__PURE__ */ new Map()), I = _(/* @__PURE__ */ new Map()), D = _(/* @__PURE__ */ new Set()), U = L(() => {
      const pe = [
        { id: "analysis", label: "Analysis" }
      ];
      return (oe.value || X.value || ae.value) && pe.push({ id: "nodes", label: "Nodes" }), J.value && pe.push({ id: "models", label: "Models" }), pe.push({ id: "review", label: "Review" }), C.value === "applying" && pe.push({ id: "applying", label: "Applying" }), pe;
    }), W = L(() => p.value ? p.value.stats.needs_user_input : !1), E = L(() => p.value ? p.value.nodes.version_gated || [] : []), M = L(() => p.value ? p.value.nodes.uninstallable || [] : []), te = L(() => M.value.filter((pe) => {
      var H;
      return !!((H = pe.package) != null && H.package_id);
    })), le = L(() => E.value.length > 0), oe = L(() => p.value ? p.value.nodes.unresolved.length > 0 || p.value.nodes.ambiguous.length > 0 : !1), J = L(() => p.value ? p.value.models.unresolved.length > 0 || p.value.models.ambiguous.length > 0 : !1), G = L(() => p.value ? p.value.stats.download_intents > 0 : !1), X = L(() => p.value ? p.value.stats.nodes_needing_installation > 0 : !1), ae = L(() => te.value.length > 0), re = L(() => p.value ? p.value.nodes.resolved.length : 0), B = L(() => p.value ? p.value.models.resolved.filter((pe) => pe.has_category_mismatch) : []), ee = L(() => B.value.length > 0), me = L(() => oe.value || X.value || ae.value ? "nodes" : J.value ? "models" : "review"), Ne = L(() => {
      if (!p.value) return [];
      const pe = p.value.nodes.resolved.filter((ve) => !ve.is_installed), H = /* @__PURE__ */ new Set();
      return pe.filter((ve) => H.has(ve.package.package_id) ? !1 : (H.add(ve.package.package_id), !0));
    }), We = L(() => {
      if (!p.value) return [];
      const pe = p.value.nodes.resolved.filter((ve) => !ve.is_installed), H = /* @__PURE__ */ new Map();
      for (const ve of pe) {
        const je = H.get(ve.package.package_id);
        je ? je.node_types_count++ : H.set(ve.package.package_id, {
          package_id: ve.package.package_id,
          title: ve.package.title,
          node_types_count: 1
        });
      }
      return Array.from(H.values());
    }), ze = L(() => Ne.value.filter((pe) => !D.value.has(pe.package.package_id))), Ie = L(() => p.value ? p.value.models.resolved.filter(
      (pe) => pe.match_type === "download_intent" || pe.match_type === "property_download_intent"
    ).map((pe) => ({
      filename: pe.reference.widget_value,
      reference: pe.reference,
      is_download_intent: !0,
      resolved_model: pe.model,
      download_source: pe.download_source,
      target_path: pe.target_path
    })) : []), z = L(() => {
      if (!p.value) return [];
      const pe = p.value.nodes.unresolved.map((ve) => ({
        node_type: ve.reference.node_type,
        reason: ve.reason,
        is_unresolved: !0,
        options: void 0
      })), H = p.value.nodes.ambiguous.map((ve) => ({
        node_type: ve.reference.node_type,
        has_multiple_options: !0,
        options: ve.options.map((je) => ({
          package_id: je.package.package_id,
          title: je.package.title,
          match_confidence: je.match_confidence,
          match_type: je.match_type,
          is_installed: je.is_installed
        }))
      }));
      return [...pe, ...H];
    }), q = L(() => {
      if (!p.value) return [];
      const pe = p.value.models.unresolved.map((ve) => ({
        filename: ve.reference.widget_value,
        reference: ve.reference,
        reason: ve.reason,
        is_unresolved: !0,
        options: void 0
      })), H = p.value.models.ambiguous.map((ve) => ({
        filename: ve.reference.widget_value,
        reference: ve.reference,
        has_multiple_options: !0,
        options: ve.options.map((je) => ({
          model: je.model,
          match_confidence: je.match_confidence,
          match_type: je.match_type,
          has_download_source: je.has_download_source
        }))
      }));
      return [...pe, ...H];
    }), V = L(() => {
      const pe = q.value, H = Ie.value.map((ve) => ({
        filename: ve.filename,
        reference: ve.reference,
        is_download_intent: !0,
        resolved_model: ve.resolved_model,
        download_source: ve.download_source,
        target_path: ve.target_path,
        options: void 0
      }));
      return [...pe, ...H];
    }), F = L(() => Ie.value.filter((pe) => {
      const H = I.value.get(pe.filename);
      return H ? H.action === "download" : !0;
    }).map((pe) => ({
      filename: pe.filename,
      url: pe.download_source,
      target_path: pe.target_path
    })));
    function ie(pe, H = 50) {
      return pe.length <= H ? pe : pe.slice(0, H - 3) + "...";
    }
    const Te = L(() => {
      let pe = ze.value.length;
      for (const H of T.value.values())
        H.action === "install" && pe++;
      for (const H of I.value.values())
        H.action === "select" && pe++;
      return pe;
    }), Be = L(() => {
      let pe = 0;
      for (const H of I.value.values())
        H.action === "download" && pe++;
      for (const H of Ie.value)
        I.value.get(H.filename) || pe++;
      return pe;
    }), O = L(() => {
      let pe = 0;
      for (const H of T.value.values())
        H.action === "optional" && pe++;
      for (const H of I.value.values())
        H.action === "optional" && pe++;
      return pe;
    }), Y = L(() => {
      let pe = D.value.size;
      for (const H of T.value.values())
        H.action === "skip" && pe++;
      for (const H of I.value.values())
        H.action === "skip" && pe++;
      for (const H of z.value)
        T.value.has(H.node_type) || pe++;
      for (const H of q.value)
        I.value.has(H.filename) || pe++;
      return pe;
    }), de = L(() => {
      const pe = {};
      if (pe.analysis = { resolved: 1, total: 1 }, oe.value || ae.value) {
        const H = z.value.length, ve = te.value.length, je = z.value.filter(
          (Fe) => T.value.has(Fe.node_type)
        ).length, ot = te.value.filter(
          (Fe) => T.value.has(Fe.reference.node_type)
        ).length, Se = H + ve, Z = je + ot;
        pe.nodes = { resolved: Z, total: Se };
      }
      if (J.value) {
        const H = V.value.length, ve = V.value.filter(
          (je) => I.value.has(je.filename) || je.is_download_intent
        ).length;
        pe.models = { resolved: ve, total: H };
      }
      if (pe.review = { resolved: 1, total: 1 }, C.value === "applying") {
        const H = m.totalFiles || 1, ve = m.completedFiles.length;
        pe.applying = { resolved: ve, total: H };
      }
      return pe;
    });
    function Ee(pe) {
      C.value = pe;
    }
    function be() {
      const pe = U.value.findIndex((H) => H.id === C.value);
      pe > 0 && (C.value = U.value[pe - 1].id);
    }
    function $e() {
      const pe = U.value.findIndex((H) => H.id === C.value);
      pe < U.value.length - 1 && (C.value = U.value[pe + 1].id);
    }
    function Me() {
      for (const pe of te.value) {
        const H = pe.reference.node_type;
        T.value.has(H) || ce(pe, "registry");
      }
    }
    async function ye() {
      w.value = !0, $.value = null;
      try {
        p.value = await l(o.workflowName), Me();
      } catch (pe) {
        $.value = pe instanceof Error ? pe.message : "Failed to analyze workflow";
      } finally {
        w.value = !1;
      }
    }
    function Pe() {
      A.value.includes("analysis") || A.value.push("analysis"), oe.value || X.value || ae.value ? C.value = "nodes" : J.value ? C.value = "models" : C.value = "review";
    }
    function fe(pe) {
      T.value.set(pe, { action: "optional" });
    }
    function Ae(pe) {
      T.value.set(pe, { action: "skip" });
    }
    function Le(pe, H) {
      var je;
      const ve = z.value.find((ot) => ot.node_type === pe);
      (je = ve == null ? void 0 : ve.options) != null && je[H] && T.value.set(pe, {
        action: "install",
        package_id: ve.options[H].package_id
      });
    }
    function N(pe, H) {
      T.value.set(pe, {
        action: "install",
        package_id: H
      });
    }
    function P(pe) {
      T.value.delete(pe);
    }
    function se(pe) {
      return T.value.get(pe);
    }
    function ne(pe) {
      const H = se(pe);
      return H ? H.action === "optional" ? "Marked optional" : H.action === "skip" ? "Skipped" : H.action === "install" ? H.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ce(pe, H) {
      var ot;
      const ve = (ot = pe.package) == null ? void 0 : ot.package_id;
      if (!ve) return;
      const je = {
        action: "install",
        package_id: ve,
        version: pe.package.latest_version || null,
        install_source: H
      };
      H === "git" && pe.package.repository && (je.repository = pe.package.repository), T.value.set(pe.reference.node_type, je);
    }
    function Ce(pe) {
      T.value.set(pe, { action: "optional" });
    }
    function ke(pe) {
      T.value.set(pe, { action: "skip" });
    }
    function Ge(pe) {
      D.value.has(pe) ? D.value.delete(pe) : D.value.add(pe);
    }
    function rt(pe) {
      I.value.set(pe, { action: "optional" });
    }
    function ht(pe) {
      I.value.set(pe, { action: "skip" });
    }
    function at(pe, H) {
      var je;
      const ve = q.value.find((ot) => ot.filename === pe);
      (je = ve == null ? void 0 : ve.options) != null && je[H] && I.value.set(pe, {
        action: "select",
        selected_model: ve.options[H].model
      });
    }
    function tt(pe, H, ve) {
      I.value.set(pe, {
        action: "download",
        url: H,
        target_path: ve
      });
    }
    function wt(pe) {
      I.value.delete(pe);
    }
    async function $t(pe) {
      try {
        await y(pe);
      } catch (H) {
        $.value = H instanceof Error ? H.message : "Failed to open file location";
      }
    }
    async function st() {
      var pe;
      x.value = !0, $.value = null, f(), m.phase = "resolving", C.value = "applying";
      try {
        const H = await r(o.workflowName, T.value, I.value, D.value);
        H.models_to_download && H.models_to_download.length > 0 && u(o.workflowName, H.models_to_download);
        const ve = te.value.map((Z) => {
          const Fe = se(Z.reference.node_type);
          if ((Fe == null ? void 0 : Fe.action) !== "install" || Fe.install_source !== "git")
            return null;
          const _t = Fe.repository || Z.package.repository, Ct = Fe.package_id || Z.package.package_id;
          return !_t || !Ct ? null : {
            id: Ct,
            repository: _t,
            selectedVersion: Fe.version || Z.package.latest_version || "latest"
          };
        }).filter((Z) => !!Z), je = new Set(ve.map((Z) => Z.id)), ot = [
          ...H.nodes_to_install || [],
          ...ze.value.map((Z) => Z.package.package_id)
        ];
        m.nodesToInstall = [...new Set(ot)].filter((Z) => !je.has(Z)), m.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const Z of ve)
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
        const Se = m.installError || ((pe = m.nodeInstallProgress) == null ? void 0 : pe.completedNodes.some((Z) => !Z.success));
        !m.needsRestart && !Se && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (H) {
        $.value = H instanceof Error ? H.message : "Failed to apply resolution", m.error = $.value, m.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function Ys() {
      a("refresh"), a("restart"), a("close");
    }
    async function fs() {
      var H;
      const pe = ((H = m.nodeInstallProgress) == null ? void 0 : H.completedNodes.filter((ve) => !ve.success).map((ve) => ve.node_id)) || [];
      if (pe.length !== 0) {
        m.phase = "installing", m.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: pe.length
        }, m.nodesToInstall = pe, m.nodesInstalled = [], m.installError = void 0;
        try {
          await c(o.workflowName), m.phase = "complete";
        } catch (ve) {
          m.error = ve instanceof Error ? ve.message : "Retry failed", m.phase = "error";
        }
      }
    }
    return et(ye), (pe, H) => (n(), R(yt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: w.value,
      error: $.value || void 0,
      "fixed-height": !0,
      onClose: H[1] || (H[1] = (ve) => a("close"))
    }, {
      body: g(() => [
        w.value && !p.value ? (n(), i("div", e1, [...H[2] || (H[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : p.value ? (n(), i("div", t1, [
          S(rg, {
            steps: U.value,
            "current-step": C.value,
            "completed-steps": A.value,
            "step-stats": de.value,
            onStepChange: Ee
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          C.value === "analysis" ? (n(), i("div", s1, [
            t("div", o1, [
              t("div", n1, [
                H[3] || (H[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", a1, " Found " + d(p.value.stats.total_nodes) + " nodes and " + d(p.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", l1, [
                t("div", i1, [
                  H[16] || (H[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", r1, [
                    re.value > 0 ? (n(), i("div", c1, [
                      H[4] || (H[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", u1, d(re.value), 1),
                      H[5] || (H[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    p.value.stats.packages_needing_installation > 0 ? (n(), i("div", d1, [
                      H[6] || (H[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", m1, d(p.value.stats.packages_needing_installation), 1),
                      H[7] || (H[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    p.value.nodes.ambiguous.length > 0 ? (n(), i("div", f1, [
                      H[8] || (H[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", v1, d(p.value.nodes.ambiguous.length), 1),
                      H[9] || (H[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    E.value.length > 0 ? (n(), i("div", p1, [
                      H[10] || (H[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", g1, d(E.value.length), 1),
                      H[11] || (H[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    M.value.length > 0 ? (n(), i("div", h1, [
                      H[12] || (H[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", y1, d(M.value.length), 1),
                      H[13] || (H[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    p.value.nodes.unresolved.length > 0 ? (n(), i("div", w1, [
                      H[14] || (H[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", _1, d(p.value.nodes.unresolved.length), 1),
                      H[15] || (H[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                t("div", k1, [
                  H[27] || (H[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", b1, [
                    t("div", $1, [
                      H[17] || (H[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", C1, d(p.value.models.resolved.length - p.value.stats.download_intents - p.value.stats.models_with_category_mismatch), 1),
                      H[18] || (H[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    p.value.stats.download_intents > 0 ? (n(), i("div", x1, [
                      H[19] || (H[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", S1, d(p.value.stats.download_intents), 1),
                      H[20] || (H[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    ee.value ? (n(), i("div", I1, [
                      H[21] || (H[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", E1, d(B.value.length), 1),
                      H[22] || (H[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    p.value.models.ambiguous.length > 0 ? (n(), i("div", T1, [
                      H[23] || (H[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", P1, d(p.value.models.ambiguous.length), 1),
                      H[24] || (H[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    p.value.models.unresolved.length > 0 ? (n(), i("div", R1, [
                      H[25] || (H[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", M1, d(p.value.models.unresolved.length), 1),
                      H[26] || (H[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              W.value ? (n(), i("div", D1, [
                H[28] || (H[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", L1, d(z.value.length + q.value.length) + " items need your input", 1)
              ])) : le.value ? (n(), i("div", N1, [
                H[29] || (H[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", U1, d(E.value.length) + " node type" + d(E.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : M.value.length > 0 ? (n(), i("div", A1, [
                H[30] || (H[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", O1, d(M.value.length) + " community-mapped node type" + d(M.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : X.value ? (n(), i("div", z1, [
                H[31] || (H[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", F1, d(p.value.stats.packages_needing_installation) + " package" + d(p.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(p.value.stats.nodes_needing_installation) + " node type" + d(p.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(G.value ? `, ${p.value.stats.download_intents} model${p.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : G.value ? (n(), i("div", V1, [
                H[32] || (H[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", B1, d(p.value.stats.download_intents) + " model" + d(p.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ee.value ? (n(), i("div", W1, [
                H[33] || (H[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", G1, d(B.value.length) + " model" + d(B.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", j1, [...H[34] || (H[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ee.value ? (n(), i("div", H1, [
                H[37] || (H[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", K1, [
                  (n(!0), i(j, null, he(B.value, (ve) => {
                    var je, ot;
                    return n(), i("div", {
                      key: ve.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", q1, d(ve.actual_category) + "/" + d((je = ve.model) == null ? void 0 : je.filename), 1),
                      H[36] || (H[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", Y1, d((ot = ve.expected_categories) == null ? void 0 : ot[0]) + "/", 1),
                      ve.file_path ? (n(), R(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Se) => $t(ve.file_path)
                      }, {
                        default: g(() => [...H[35] || (H[35] = [
                          b(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              le.value ? (n(), i("div", J1, [
                H[38] || (H[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", Q1, [
                  (n(!0), i(j, null, he(E.value, (ve) => {
                    var je;
                    return n(), i("div", {
                      key: `vg-${ve.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", X1, d(ve.reference.node_type), 1),
                      t("span", Z1, d(ve.guidance || ((je = p.value.node_guidance) == null ? void 0 : je[ve.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          C.value === "nodes" ? (n(), i("div", e0, [
            S(Th, {
              nodes: z.value,
              "node-choices": T.value,
              "auto-resolved-packages": We.value,
              "skipped-packages": D.value,
              onMarkOptional: fe,
              onSkip: Ae,
              onOptionSelected: Le,
              onManualEntry: N,
              onClearChoice: P,
              onPackageSkip: Ge
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"]),
            te.value.length > 0 ? (n(), i("div", t0, [
              t("div", s0, [
                t("h4", o0, "Community-Mapped Packages (" + d(te.value.length) + ")", 1),
                H[39] || (H[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", n0, [
                (n(!0), i(j, null, he(te.value, (ve) => (n(), i("div", {
                  key: `community-${ve.reference.node_type}-${ve.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", a0, [
                    t("div", l0, [
                      t("code", i0, d(ve.reference.node_type), 1),
                      t("span", r0, d(ve.package.title || ve.package.package_id), 1)
                    ]),
                    t("div", c0, d(ve.package.package_id), 1),
                    t("div", u0, [
                      H[40] || (H[40] = b(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ve.guidance ? (n(), i("span", d0, d(ve.guidance), 1)) : h("", !0)
                    ]),
                    t("div", m0, d(ne(ve.reference.node_type)), 1)
                  ]),
                  t("div", f0, [
                    S(De, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !ve.package.package_id,
                      onClick: (je) => ce(ve, "registry")
                    }, {
                      default: g(() => [...H[41] || (H[41] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    ve.package.repository ? (n(), R(De, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !ve.package.package_id,
                      onClick: (je) => ce(ve, "git")
                    }, {
                      default: g(() => [...H[42] || (H[42] = [
                        b(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    S(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (je) => Ce(ve.reference.node_type)
                    }, {
                      default: g(() => [...H[43] || (H[43] = [
                        b(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (je) => ke(ve.reference.node_type)
                    }, {
                      default: g(() => [...H[44] || (H[44] = [
                        b(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          C.value === "models" ? (n(), R(by, {
            key: 2,
            models: V.value,
            "model-choices": I.value,
            onMarkOptional: rt,
            onSkip: ht,
            onOptionSelected: at,
            onDownloadUrl: tt,
            onClearChoice: wt
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          C.value === "review" ? (n(), i("div", v0, [
            t("div", p0, [
              H[50] || (H[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", g0, [
                t("div", h0, [
                  t("span", y0, d(Te.value), 1),
                  H[45] || (H[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", w0, [
                  t("span", _0, d(Be.value), 1),
                  H[46] || (H[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", k0, [
                  t("span", b0, d(O.value), 1),
                  H[47] || (H[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", $0, [
                  t("span", C0, d(Y.value), 1),
                  H[48] || (H[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              We.value.length > 0 ? (n(), i("div", x0, [
                t("h4", S0, "Node Packages (" + d(We.value.length) + ")", 1),
                t("div", I0, [
                  (n(!0), i(j, null, he(We.value, (ve) => (n(), i("div", {
                    key: ve.package_id,
                    class: "review-item"
                  }, [
                    t("code", E0, d(ve.package_id), 1),
                    t("div", T0, [
                      D.value.has(ve.package_id) ? (n(), i("span", R0, "Skipped")) : (n(), i("span", P0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              te.value.length > 0 ? (n(), i("div", M0, [
                t("h4", D0, "Community-Mapped Packages (" + d(te.value.length) + ")", 1),
                t("div", L0, [
                  (n(!0), i(j, null, he(te.value, (ve) => {
                    var je, ot, Se;
                    return n(), i("div", {
                      key: `review-community-${ve.reference.node_type}-${ve.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", N0, d(ve.reference.node_type), 1),
                      t("div", U0, [
                        ((je = se(ve.reference.node_type)) == null ? void 0 : je.action) === "install" ? (n(), i("span", A0, d(((ot = se(ve.reference.node_type)) == null ? void 0 : ot.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Se = se(ve.reference.node_type)) == null ? void 0 : Se.action) === "optional" ? (n(), i("span", O0, " Optional ")) : (n(), i("span", z0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              z.value.length > 0 ? (n(), i("div", F0, [
                t("h4", V0, "Node Choices (" + d(z.value.length) + ")", 1),
                t("div", B0, [
                  (n(!0), i(j, null, he(z.value, (ve) => {
                    var je, ot, Se, Z;
                    return n(), i("div", {
                      key: ve.node_type,
                      class: "review-item"
                    }, [
                      t("code", W0, d(ve.node_type), 1),
                      t("div", G0, [
                        T.value.has(ve.node_type) ? (n(), i(j, { key: 0 }, [
                          ((je = T.value.get(ve.node_type)) == null ? void 0 : je.action) === "install" ? (n(), i("span", j0, d((ot = T.value.get(ve.node_type)) == null ? void 0 : ot.package_id), 1)) : ((Se = T.value.get(ve.node_type)) == null ? void 0 : Se.action) === "optional" ? (n(), i("span", H0, " Optional ")) : ((Z = T.value.get(ve.node_type)) == null ? void 0 : Z.action) === "skip" ? (n(), i("span", K0, " Skip ")) : h("", !0)
                        ], 64)) : (n(), i("span", q0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              F.value.length > 0 ? (n(), i("div", Y0, [
                t("h4", J0, "Models to Download (" + d(F.value.length) + ")", 1),
                t("div", Q0, [
                  (n(!0), i(j, null, he(F.value, (ve) => (n(), i("div", {
                    key: ve.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", X0, [
                      t("code", Z0, d(ve.filename), 1),
                      t("div", ew, [
                        t("span", tw, "→ " + d(ve.target_path), 1),
                        ve.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ve.url
                        }, d(ie(ve.url)), 9, sw)) : h("", !0)
                      ])
                    ]),
                    H[49] || (H[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              V.value.length > 0 ? (n(), i("div", ow, [
                t("h4", nw, "Models (" + d(V.value.length) + ")", 1),
                t("div", aw, [
                  (n(!0), i(j, null, he(V.value, (ve) => {
                    var je, ot, Se, Z, Fe, _t, Ct;
                    return n(), i("div", {
                      key: ve.filename,
                      class: "review-item"
                    }, [
                      t("code", lw, d(ve.filename), 1),
                      t("div", iw, [
                        I.value.has(ve.filename) ? (n(), i(j, { key: 0 }, [
                          ((je = I.value.get(ve.filename)) == null ? void 0 : je.action) === "select" ? (n(), i("span", rw, d((Se = (ot = I.value.get(ve.filename)) == null ? void 0 : ot.selected_model) == null ? void 0 : Se.filename), 1)) : ((Z = I.value.get(ve.filename)) == null ? void 0 : Z.action) === "download" ? (n(), i("span", cw, " Download ")) : ((Fe = I.value.get(ve.filename)) == null ? void 0 : Fe.action) === "optional" ? (n(), i("span", uw, " Optional ")) : ((_t = I.value.get(ve.filename)) == null ? void 0 : _t.action) === "skip" ? (n(), i("span", dw, " Skip ")) : ((Ct = I.value.get(ve.filename)) == null ? void 0 : Ct.action) === "cancel_download" ? (n(), i("span", mw, " Cancel Download ")) : h("", !0)
                        ], 64)) : ve.is_download_intent ? (n(), i("span", fw, " Pending Download ")) : (n(), i("span", vw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ne.value.length === 0 && te.value.length === 0 && z.value.length === 0 && V.value.length === 0 ? (n(), i("div", pw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          C.value === "applying" ? (n(), R(Zy, {
            key: 4,
            progress: qe(m),
            onRestart: Ys,
            onRetryFailed: fs
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        C.value !== "analysis" && C.value !== "applying" ? (n(), R(De, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: be
        }, {
          default: g(() => [...H[51] || (H[51] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        H[54] || (H[54] = t("div", { class: "footer-spacer" }, null, -1)),
        C.value !== "applying" || qe(m).phase === "complete" || qe(m).phase === "error" ? (n(), R(De, {
          key: 1,
          variant: "secondary",
          onClick: H[0] || (H[0] = (ve) => a("close"))
        }, {
          default: g(() => [
            b(d(qe(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        C.value === "analysis" ? (n(), R(De, {
          key: 2,
          variant: "primary",
          disabled: w.value,
          onClick: Pe
        }, {
          default: g(() => [
            b(d(me.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        C.value === "nodes" ? (n(), R(De, {
          key: 3,
          variant: "primary",
          onClick: $e
        }, {
          default: g(() => [
            b(d(J.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        C.value === "models" ? (n(), R(De, {
          key: 4,
          variant: "primary",
          onClick: $e
        }, {
          default: g(() => [...H[52] || (H[52] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        C.value === "review" ? (n(), R(De, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: st
        }, {
          default: g(() => [...H[53] || (H[53] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), hw = /* @__PURE__ */ _e(gw, [["__scopeId", "data-v-939d49cc"]]), yw = { class: "search-input-wrapper" }, ww = ["value", "placeholder"], _w = /* @__PURE__ */ we({
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
    return et(() => {
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
        onKeyup: ts(u, ["escape"])
      }, null, 40, ww),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), kw = /* @__PURE__ */ _e(_w, [["__scopeId", "data-v-266f857a"]]), bw = { class: "search-bar" }, $w = /* @__PURE__ */ we({
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
}, Sw = /* @__PURE__ */ we({
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
      S(Ht, {
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
        Qe(c.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), ft = /* @__PURE__ */ _e(Sw, [["__scopeId", "data-v-c48e33ed"]]), Iw = { class: "item-header" }, Ew = {
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
}, Lw = /* @__PURE__ */ we({
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
      class: Re(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", Iw, [
        l.$slots.icon ? (n(), i("span", Ew, [
          Qe(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        t("div", Tw, [
          l.$slots.title ? (n(), i("div", Pw, [
            Qe(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (n(), i("div", Rw, [
            Qe(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", Mw, [
        Qe(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (n(), i("div", Dw, [
        Qe(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ _e(Lw, [["__scopeId", "data-v-cc435e0e"]]), Nw = { class: "loading-state" }, Uw = { class: "loading-message" }, Aw = /* @__PURE__ */ we({
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
}), Ls = /* @__PURE__ */ _e(Aw, [["__scopeId", "data-v-ad8436c9"]]), Ow = { class: "error-state" }, zw = { class: "error-message" }, Fw = /* @__PURE__ */ we({
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
      e.retry ? (n(), R(ge, {
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
}), Ns = /* @__PURE__ */ _e(Fw, [["__scopeId", "data-v-5397be48"]]), Vw = /* @__PURE__ */ we({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = lt(), r = _([]), c = _(!1), u = _(null), m = _(""), f = _(!0), v = _(!1), y = _(!1), k = _(!1), p = _(null), w = L(
      () => r.value.filter((re) => re.status === "broken")
    ), x = L(
      () => r.value.filter((re) => re.status === "new")
    ), $ = L(
      () => r.value.filter((re) => re.status === "modified")
    ), C = L(
      () => r.value.filter((re) => re.status === "synced")
    ), A = L(() => {
      if (!m.value.trim()) return r.value;
      const re = m.value.toLowerCase();
      return r.value.filter((B) => B.name.toLowerCase().includes(re));
    }), T = L(
      () => w.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), I = L(
      () => x.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), D = L(
      () => $.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), U = L(
      () => C.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), W = L(
      () => v.value ? U.value : U.value.slice(0, 5)
    );
    async function E(re = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(re);
      } catch (B) {
        u.value = B instanceof Error ? B.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: E });
    function M(re) {
      p.value = re, y.value = !0;
    }
    function te(re) {
      p.value = re, k.value = !0;
    }
    function le() {
      a("refresh");
    }
    async function oe() {
      k.value = !1, await E(!0);
    }
    async function J() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function G(re) {
      return re.replace(/uninstallable node mappings?/gi, (B) => B.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function X(re) {
      if (re.issue_summary && re.issue_summary.trim().length > 0)
        return G(re.issue_summary);
      const B = [];
      return re.version_gated_count && re.version_gated_count > 0 && B.push(`${re.version_gated_count} node${re.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), re.uninstallable_count && re.uninstallable_count > 0 && B.push(`${re.uninstallable_count} node${re.uninstallable_count > 1 ? "s" : ""} need community packages`), re.missing_nodes > 0 && B.push(`${re.missing_nodes} missing node${re.missing_nodes > 1 ? "s" : ""}`), re.missing_models > 0 && B.push(`${re.missing_models} missing model${re.missing_models > 1 ? "s" : ""}`), re.models_with_category_mismatch && re.models_with_category_mismatch > 0 && B.push(`${re.models_with_category_mismatch} model${re.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), re.pending_downloads && re.pending_downloads > 0 && B.push(`${re.pending_downloads} pending download${re.pending_downloads > 1 ? "s" : ""}`), B.length > 0 ? B.join(", ") : "Has issues";
    }
    function ae(re) {
      const B = re.sync_state === "new" ? "New" : re.sync_state === "modified" ? "Modified" : re.sync_state === "synced" ? "Synced" : re.sync_state;
      return re.has_path_sync_issues && re.models_needing_path_sync && re.models_needing_path_sync > 0 ? `${re.models_needing_path_sync} model path${re.models_needing_path_sync > 1 ? "s" : ""} need${re.models_needing_path_sync === 1 ? "s" : ""} sync` : B || "Unknown";
    }
    return et(E), (re, B) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          S(Lo, {
            modelValue: m.value,
            "onUpdate:modelValue": B[0] || (B[0] = (ee) => m.value = ee),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), R(Ls, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), R(Ns, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            T.value.length ? (n(), R(ft, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(T.value, (ee) => (n(), R(It, {
                  key: ee.name,
                  status: "broken"
                }, {
                  icon: g(() => [...B[7] || (B[7] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(X(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "primary",
                      size: "sm",
                      onClick: (me) => te(ee.name)
                    }, {
                      default: g(() => [...B[8] || (B[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ge, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(ee.name)
                    }, {
                      default: g(() => [...B[9] || (B[9] = [
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
            I.value.length ? (n(), R(ft, {
              key: 1,
              title: "NEW",
              count: I.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(I.value, (ee) => (n(), R(It, {
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
                    b(d(ae(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(ee.name)
                    }, {
                      default: g(() => [...B[10] || (B[10] = [
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
            D.value.length ? (n(), R(ft, {
              key: 2,
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(D.value, (ee) => (n(), R(It, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...B[11] || (B[11] = [
                    b("⚡", -1)
                  ])]),
                  title: g(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ae(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(ee.name)
                    }, {
                      default: g(() => [...B[12] || (B[12] = [
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
            U.value.length ? (n(), R(ft, {
              key: 3,
              title: "SYNCED",
              count: U.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: B[2] || (B[2] = (ee) => f.value = ee)
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(W.value, (ee) => (n(), R(It, {
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
                    b(d(ae(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => M(ee.name)
                    }, {
                      default: g(() => [...B[13] || (B[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && U.value.length > 5 ? (n(), R(ge, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: B[1] || (B[1] = (ee) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    b(" View all " + d(U.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            A.value.length ? h("", !0) : (n(), R(ds, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && p.value ? (n(), R(Jp, {
        key: 0,
        "workflow-name": p.value,
        onClose: B[3] || (B[3] = (ee) => y.value = !1),
        onResolve: B[4] || (B[4] = (ee) => te(p.value)),
        onRefresh: B[5] || (B[5] = (ee) => a("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      k.value && p.value ? (n(), R(hw, {
        key: 1,
        "workflow-name": p.value,
        onClose: oe,
        onInstall: le,
        onRefresh: B[6] || (B[6] = (ee) => a("refresh")),
        onRestart: J
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), Bw = /* @__PURE__ */ _e(Vw, [["__scopeId", "data-v-06d0e772"]]), Ww = /* @__PURE__ */ we({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["summary-bar", e.variant])
    }, [
      Qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), gn = /* @__PURE__ */ _e(Ww, [["__scopeId", "data-v-ccb7816e"]]), Gw = {
  key: 0,
  class: "model-details"
}, jw = { class: "detail-section" }, Hw = { class: "detail-row" }, Kw = { class: "detail-value mono" }, qw = { class: "detail-row" }, Yw = { class: "detail-value mono" }, Jw = { class: "detail-row" }, Qw = { class: "detail-value mono" }, Xw = { class: "detail-row" }, Zw = { class: "detail-value" }, e_ = { class: "detail-row" }, t_ = { class: "detail-value" }, s_ = { class: "detail-row" }, o_ = { class: "detail-value" }, n_ = { class: "detail-section" }, a_ = { class: "section-header" }, l_ = {
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
}, b_ = /* @__PURE__ */ we({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = lt(), u = _(null), m = _(!0), f = _(null), v = _(""), y = _(!1), k = _(null), p = _(null), w = _(null), x = _(null);
    let $ = null;
    function C(E, M = "success", te = 2e3) {
      $ && clearTimeout($), x.value = { message: E, type: M }, $ = setTimeout(() => {
        x.value = null;
      }, te);
    }
    function A(E) {
      if (!E) return "Unknown";
      const M = 1024 * 1024 * 1024, te = 1024 * 1024;
      return E >= M ? `${(E / M).toFixed(1)} GB` : E >= te ? `${(E / te).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
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
    async function D() {
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
    async function U(E) {
      if (u.value) {
        k.value = E, p.value = null, w.value = null;
        try {
          await r(u.value.hash, E), C("Source removed"), await W();
        } catch (M) {
          p.value = M instanceof Error ? M.message : "Failed to remove source";
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
    return et(W), (E, M) => {
      var te;
      return n(), i(j, null, [
        S(yt, {
          title: `Model Details: ${((te = u.value) == null ? void 0 : te.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: M[5] || (M[5] = (le) => E.$emit("close"))
        }, {
          body: g(() => {
            var le, oe, J, G;
            return [
              u.value ? (n(), i("div", Gw, [
                t("section", jw, [
                  t("div", Hw, [
                    M[6] || (M[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", Kw, d(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (X) => T(u.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", qw, [
                    M[7] || (M[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", Yw, d(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (X) => T(u.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", Jw, [
                    M[8] || (M[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", Qw, d(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (X) => T(u.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", Xw, [
                    M[9] || (M[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", Zw, d(A(u.value.size)), 1)
                  ]),
                  t("div", e_, [
                    M[10] || (M[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", t_, d(u.value.category), 1)
                  ]),
                  t("div", s_, [
                    M[11] || (M[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", o_, d(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", n_, [
                  t("h4", a_, "Locations (" + d(((le = u.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (oe = u.value.locations) != null && oe.length ? (n(), i("div", l_, [
                    (n(!0), i(j, null, he(u.value.locations, (X, ae) => (n(), i("div", {
                      key: ae,
                      class: "location-item"
                    }, [
                      t("span", i_, d(X.path), 1),
                      X.modified ? (n(), i("span", r_, "Modified: " + d(X.modified), 1)) : h("", !0),
                      X.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (re) => I(X.path)
                      }, " Open File Location ", 8, c_)) : h("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", u_, "No locations found"))
                ]),
                t("section", d_, [
                  t("h4", m_, "Download Sources (" + d(((J = u.value.sources) == null ? void 0 : J.length) || 0) + ")", 1),
                  (G = u.value.sources) != null && G.length ? (n(), i("div", f_, [
                    (n(!0), i(j, null, he(u.value.sources, (X, ae) => (n(), i("div", {
                      key: ae,
                      class: "source-item"
                    }, [
                      t("span", v_, d(X.type) + ":", 1),
                      t("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(X.url), 9, p_),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: k.value === X.url,
                        onClick: (re) => U(X.url)
                      }, d(k.value === X.url ? "..." : "×"), 9, g_)
                    ]))), 128))
                  ])) : (n(), i("div", h_, " No download sources configured ")),
                  t("div", y_, [
                    Xe(t("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (X) => v.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [qt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || y.value,
                      onClick: D
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
              onClick: M[4] || (M[4] = (le) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), R(Tt, { to: "body" }, [
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
}, I_ = /* @__PURE__ */ we({
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
    const v = L(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const C = o.options.find((A) => m(A) === o.modelValue);
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
      const C = r.value.getBoundingClientRect(), A = window.innerHeight, T = A - C.bottom, I = C.top, D = Math.min(300, o.options.length * 36 + 8), U = T < D && I > T;
      u.value = {
        position: "fixed",
        left: `${C.left}px`,
        width: `${C.width}px`,
        maxHeight: "300px",
        ...U ? { bottom: `${A - C.top + 4}px` } : { top: `${C.bottom + 4}px` }
      };
    }
    kt(l, async (C) => {
      C && (await St(), w());
    });
    function x() {
      l.value && w();
    }
    function $(C) {
      C.key === "Escape" && l.value && k();
    }
    return et(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", $);
    }), qs(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", $);
    }), (C, A) => (n(), i("div", {
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
        A[0] || (A[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, $_),
      (n(), R(Tt, { to: "body" }, [
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
          style: Yt(u.value)
        }, [
          (n(!0), i(j, null, he(e.options, (T) => (n(), i("div", {
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
}, Y_ = ["onClick"], J_ = ["checked", "onChange"], Q_ = { class: "file-path" }, X_ = { class: "file-size" }, Z_ = { class: "destination-section" }, ek = { class: "destination-row" }, tk = {
  key: 0,
  class: "path-separator"
}, sk = { class: "action-bar" }, ok = { class: "summary-info" }, nk = { class: "summary-count" }, ak = { class: "summary-size" }, lk = /* @__PURE__ */ we({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = lt(), c = _([]), u = _(/* @__PURE__ */ new Set()), m = _(!1), f = _(null), v = _(""), y = _(!1), k = _("name"), p = _(!0), w = _(""), x = _(""), $ = _(""), C = _([]), A = _(!1);
    let T = !1;
    const I = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, D = L(() => {
      let z = c.value;
      if (o.initialPath) {
        const q = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        z = z.filter((V) => V.path.startsWith(q) || V.path === o.initialPath);
      }
      if (y.value && (z = z.filter((q) => q.is_model_file)), v.value.trim()) {
        const q = v.value.toLowerCase();
        z = z.filter((V) => V.path.toLowerCase().includes(q));
      }
      return z;
    }), U = L(() => {
      const z = [...D.value];
      return z.sort((q, V) => {
        let F;
        return k.value === "name" ? F = q.path.localeCompare(V.path) : F = q.size - V.size, p.value ? F : -F;
      }), z;
    }), W = L(() => D.value.length === 0 ? !1 : D.value.every((z) => u.value.has(z.path))), E = L(() => D.value.some((z) => u.value.has(z.path))), M = L(() => {
      const z = C.value.map((q) => ({
        label: q,
        value: q
      }));
      return z.push({ label: "Custom path...", value: "__custom__" }), z;
    }), te = L(() => w.value === "__custom__" ? $.value.trim().length > 0 : w.value.length > 0), le = L(() => {
      let z = 0;
      for (const q of u.value) {
        const V = c.value.find((F) => F.path === q);
        V && (z += V.size);
      }
      return z;
    });
    function oe(z) {
      if (z === 0) return "0 B";
      const q = 1024 * 1024 * 1024, V = 1024 * 1024, F = 1024;
      return z >= q ? `${(z / q).toFixed(2)} GB` : z >= V ? `${(z / V).toFixed(1)} MB` : z >= F ? `${(z / F).toFixed(0)} KB` : `${z} B`;
    }
    function J(z) {
      const q = z.match(I);
      return q ? `${q[1]}${q[4]}` : null;
    }
    function G(z) {
      const q = new Set(u.value), V = q.has(z.path), F = z.shard_group || J(z.path);
      if (F) {
        const ie = c.value.filter((Te) => (Te.shard_group || J(Te.path)) === F);
        V ? ie.forEach((Te) => q.delete(Te.path)) : ie.forEach((Te) => q.add(Te.path));
      } else
        V ? q.delete(z.path) : q.add(z.path);
      u.value = q;
    }
    function X() {
      const z = new Set(u.value);
      for (const q of D.value)
        q.is_model_file && z.add(q.path);
      u.value = z;
    }
    function ae() {
      u.value = /* @__PURE__ */ new Set();
    }
    function re() {
      if (W.value) {
        const z = new Set(u.value);
        for (const q of D.value)
          z.delete(q.path);
        u.value = z;
      } else {
        const z = new Set(u.value);
        for (const q of D.value)
          z.add(q.path);
        u.value = z;
      }
    }
    function B(z) {
      k.value === z ? p.value = !p.value : (k.value = z, p.value = !0);
    }
    function ee(z) {
      const q = z.split("/");
      return q.length >= 2 ? q[q.length - 2] : null;
    }
    function me() {
      if (A.value || u.value.size === 0) return;
      const z = /* @__PURE__ */ new Set();
      for (const F of u.value) {
        const ie = ee(F);
        ie && z.add(ie.toLowerCase());
      }
      if (z.size !== 1) return;
      const q = [...z][0], V = C.value.find(
        (F) => F.toLowerCase() === q
      );
      V && V !== w.value && (T = !0, w.value = V, St(() => {
        T = !1;
      }));
    }
    function Ne() {
      return w.value === "__custom__" ? $.value.trim() : x.value.trim() ? `${w.value}/${x.value.trim()}` : w.value;
    }
    function We() {
      if (u.value.size === 0 || !te.value) return;
      const z = Ne(), q = [];
      for (const V of u.value) {
        const F = c.value.find((ie) => ie.path === V);
        F && q.push({
          url: M_(o.repoId, o.revision, F.path),
          destination: z,
          filename: F.path.split("/").pop() || F.path
        });
      }
      a("queue", q);
    }
    async function ze() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const z = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, q = await l(z);
          if (c.value = q.files, o.preselectedFile) {
            const V = c.value.find((F) => F.path === o.preselectedFile);
            V && G(V);
          }
        } catch (z) {
          f.value = z instanceof Error ? z.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function Ie() {
      try {
        const z = await r();
        C.value = z.directories, z.directories.length > 0 && !w.value && (w.value = z.directories[0]);
      } catch {
        C.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && ze();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      A.value = !1;
    }), kt(u, () => {
      me();
    }, { deep: !0 }), kt(C, () => {
      C.value.length > 0 && u.value.size > 0 && me();
    }), kt(w, (z, q) => {
      T || q === "" || (A.value = !0);
    }), et(() => {
      ze(), Ie();
    }), (z, q) => (n(), i("div", D_, [
      t("div", L_, [
        t("button", {
          class: "back-btn",
          onClick: q[0] || (q[0] = (V) => z.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", N_, [
          t("span", U_, d(e.repoId), 1),
          e.revision ? (n(), i("span", A_, d(e.revision), 1)) : h("", !0)
        ])
      ]),
      m.value ? (n(), i("div", O_, " Loading repository files... ")) : f.value ? (n(), i("div", z_, d(f.value), 1)) : (n(), i(j, { key: 2 }, [
        t("div", F_, [
          S(Nt, {
            modelValue: v.value,
            "onUpdate:modelValue": q[1] || (q[1] = (V) => v.value = V),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", V_, [
            t("button", {
              class: Re(["toggle-btn", { active: y.value }]),
              onClick: q[2] || (q[2] = (V) => y.value = !y.value)
            }, d(y.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: ae
            }, "Clear")
          ])
        ]),
        t("div", B_, [
          D.value.length > 0 ? (n(), i("div", W_, [
            t("input", {
              type: "checkbox",
              checked: W.value,
              indeterminate: E.value && !W.value,
              class: "file-checkbox",
              onChange: re
            }, null, 40, G_),
            t("span", {
              class: "header-name",
              onClick: q[3] || (q[3] = (V) => B("name"))
            }, [
              q[9] || (q[9] = b(" Name ", -1)),
              t("span", j_, d(k.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: q[4] || (q[4] = (V) => B("size"))
            }, [
              q[10] || (q[10] = b(" Size ", -1)),
              t("span", H_, d(k.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          D.value.length === 0 ? (n(), i("div", K_, d(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", q_, [
            (n(!0), i(j, null, he(U.value, (V) => (n(), i("div", {
              key: V.path,
              class: Re(["file-item", { selected: u.value.has(V.path) }]),
              onClick: (F) => G(V)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(V.path),
                class: "file-checkbox",
                onClick: q[5] || (q[5] = gt(() => {
                }, ["stop"])),
                onChange: (F) => G(V)
              }, null, 40, J_),
              t("span", Q_, d(V.path), 1),
              t("span", X_, d(oe(V.size)), 1)
            ], 10, Y_))), 128))
          ]))
        ]),
        t("div", Z_, [
          q[11] || (q[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", ek, [
            S(E_, {
              modelValue: w.value,
              "onUpdate:modelValue": q[6] || (q[6] = (V) => w.value = V),
              options: M.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", tk, "/")) : h("", !0),
            w.value !== "__custom__" ? (n(), R(Nt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": q[7] || (q[7] = (V) => x.value = V),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          w.value === "__custom__" ? (n(), R(Nt, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": q[8] || (q[8] = (V) => $.value = V),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        t("div", sk, [
          t("div", ok, [
            t("span", nk, d(u.value.size) + " file(s) selected", 1),
            t("span", ak, d(oe(le.value)), 1)
          ]),
          S(De, {
            variant: "primary",
            disabled: u.value.size === 0 || !te.value,
            onClick: We
          }, {
            default: g(() => [...q[12] || (q[12] = [
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
}, fk = { class: "mask" }, vk = { class: "token-input-section" }, pk = { class: "input-label" }, gk = { class: "help-text" }, hk = ["href"], yk = { class: "modal-actions" }, wk = /* @__PURE__ */ we({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = lt(), r = _(""), c = _(!1), u = _(!1), m = L(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = L(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = L(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), y = L(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), k = L(
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
    return (x, $) => (n(), R(yt, {
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
            S(De, {
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
            S(Nt, {
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
          S(De, {
            variant: "secondary",
            onClick: $[1] || ($[1] = (C) => x.$emit("close"))
          }, {
            default: g(() => [...$[5] || ($[5] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(De, {
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
}, zk = /* @__PURE__ */ we({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = lt(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), m = _(!1), f = _(null), v = _("main"), y = _(), k = _(), p = _(!1), w = _(null), x = L(() => {
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
        const M = E.path.split("/");
        M.length > 1 ? y.value = M.slice(0, -1).join("/") : y.value = void 0, k.value = E.path, a.value = "browse";
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
        const M = await s(W);
        r.value = M.results, m.value = !0;
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function A(W) {
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
    function D() {
      I(), x.value && l.value && C();
    }
    function U() {
      w.value = null;
    }
    return et(I), (W, E) => (n(), i("div", kk, [
      a.value === "search" ? (n(), i("div", bk, [
        t("div", $k, [
          t("div", Ck, [
            S(Nt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (M) => l.value = M),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ts(C, ["enter"])
            }, null, 8, ["modelValue"]),
            S(De, {
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
          S(De, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (M) => p.value = !0)
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
          x.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (M) => p.value = !0)
          }, {
            default: g(() => [...E[6] || (E[6] = [
              b(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", Ek, [
          (n(!0), i(j, null, he(r.value, (M) => (n(), i("div", {
            key: M.repo_id,
            class: "repo-card",
            onClick: (te) => A(M.repo_id)
          }, [
            t("div", Pk, [
              t("span", Rk, d(M.repo_id), 1),
              t("div", Mk, [
                t("span", Dk, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + d($(M.downloads)), 1)
                ]),
                t("span", Lk, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + d($(M.likes)), 1)
                ])
              ])
            ]),
            M.description ? (n(), i("p", Nk, d(M.description), 1)) : h("", !0),
            M.tags.length > 0 ? (n(), i("div", Uk, [
              (n(!0), i(j, null, he(M.tags.slice(0, 5), (te) => (n(), i("span", {
                key: te,
                class: "tag"
              }, d(te), 1))), 128))
            ])) : h("", !0)
          ], 8, Tk))), 128))
        ])) : m.value ? (n(), i("div", Ak, " No repositories found ")) : (n(), i("div", Ok, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), R(ik, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": y.value,
        "preselected-file": k.value,
        onBack: T,
        onQueue: E[3] || (E[3] = (M) => W.$emit("queue", M))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (n(), R(_k, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: E[4] || (E[4] = (M) => p.value = !1),
        onSaved: D,
        onCleared: U
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Fk = /* @__PURE__ */ _e(zk, [["__scopeId", "data-v-e13209bf"]]), Vk = { class: "civitai-tab" }, Bk = /* @__PURE__ */ we({
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
}, qk = { class: "actions" }, Yk = /* @__PURE__ */ we({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = _(""), r = L(() => {
      const m = l.value.trim();
      if (!m) return null;
      const f = m.replace(/\\/g, "/").split("/").pop() || "";
      return f.includes(".") && !f.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = L(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
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
        S(Nt, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Hk, [
        f[3] || (f[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(Nt, {
          modelValue: l.value,
          "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Kk, d(r.value), 1)) : h("", !0)
      ]),
      f[5] || (f[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", qk, [
        S(De, {
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
}), Jk = /* @__PURE__ */ _e(Yk, [["__scopeId", "data-v-01def7aa"]]), Qk = { class: "download-modal" }, Xk = { class: "tab-bar" }, Zk = ["onClick"], eb = { class: "tab-content" }, tb = /* @__PURE__ */ we({
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
    return (f, v) => e.show ? (n(), R(yt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: m
    }, {
      body: g(() => [
        t("div", Qk, [
          t("div", Xk, [
            (n(), i(j, null, he(l, (y) => t("button", {
              key: y.id,
              class: Re(["tab-btn", { active: r.value === y.id }]),
              onClick: (k) => r.value = y.id
            }, d(y.icon) + " " + d(y.label), 11, Zk)), 64))
          ]),
          t("div", eb, [
            r.value === "huggingface" ? (n(), R(Fk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), R(Wk, { key: 1 })) : r.value === "direct" ? (n(), R(Jk, {
              key: 2,
              onQueue: u
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        S(De, {
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
}), zr = /* @__PURE__ */ _e(tb, [["__scopeId", "data-v-90a9f401"]]), sb = /* @__PURE__ */ we({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = lt(), r = _([]), c = _([]), u = _("production"), m = _(!1), f = _(null), v = _(""), y = _(!1), k = _(null), p = _(!1);
    function w() {
      y.value = !1, o("navigate", "model-index");
    }
    const x = L(
      () => r.value.reduce((E, M) => E + (M.size || 0), 0)
    ), $ = L(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((M) => M.filename.toLowerCase().includes(E));
    }), C = L(() => {
      if (!v.value.trim()) return c.value;
      const E = v.value.toLowerCase();
      return c.value.filter((M) => M.filename.toLowerCase().includes(E));
    }), A = L(() => {
      const E = {};
      for (const te of $.value) {
        const le = te.type || "other";
        E[le] || (E[le] = []), E[le].push(te);
      }
      const M = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([te], [le]) => {
        const oe = M.indexOf(te), J = M.indexOf(le);
        return oe >= 0 && J >= 0 ? oe - J : oe >= 0 ? -1 : J >= 0 ? 1 : te.localeCompare(le);
      }).map(([te, le]) => ({ type: te, models: le }));
    });
    function T(E) {
      if (!E) return "Unknown";
      const M = E / (1024 * 1024);
      return M >= 1024 ? `${(M / 1024).toFixed(1)} GB` : `${M.toFixed(0)} MB`;
    }
    function I(E) {
      k.value = E.hash || E.filename;
    }
    function D(E) {
      o("navigate", "model-index");
    }
    function U(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function W() {
      m.value = !0, f.value = null;
      try {
        const E = await a();
        r.value = E, c.value = [];
        const M = await l();
        u.value = M.environment || "production";
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return et(W), (E, M) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[1] || (M[1] = (te) => y.value = !0)
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (te) => p.value = !0)
              }, {
                default: g(() => [...M[6] || (M[6] = [
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
            "onUpdate:modelValue": M[2] || (M[2] = (te) => v.value = te),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), R(Ls, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), R(Ns, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length ? (n(), R(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(r.value.length) + " models • " + d(T(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(j, null, he(A.value, (te) => (n(), R(ft, {
              key: te.type,
              title: te.type.toUpperCase(),
              count: te.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(te.models, (le) => (n(), R(It, {
                  key: le.hash || le.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...M[7] || (M[7] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(le.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(T(le.size)), 1)
                  ]),
                  details: g(() => [
                    S(pt, {
                      label: "Used by:",
                      value: (le.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(pt, {
                      label: "Path:",
                      value: le.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (oe) => I(le)
                    }, {
                      default: g(() => [...M[8] || (M[8] = [
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
            C.value.length ? (n(), R(ft, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(C.value, (te) => (n(), R(It, {
                  key: te.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...M[9] || (M[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(te.filename), 1)
                  ]),
                  subtitle: g(() => [...M[10] || (M[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var le;
                    return [
                      S(pt, {
                        label: "Required by:",
                        value: ((le = te.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    S(ge, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => U(te.filename)
                    }, {
                      default: g(() => [...M[11] || (M[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ge, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => D(te.filename)
                    }, {
                      default: g(() => [...M[12] || (M[12] = [
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
            !$.value.length && !C.value.length ? (n(), R(ds, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(ms, {
        show: y.value,
        title: "About Environment Models",
        onClose: M[3] || (M[3] = (te) => y.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            M[13] || (M[13] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(u.value) + '"', 1),
            M[14] || (M[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          S(ge, {
            variant: "primary",
            onClick: w
          }, {
            default: g(() => [...M[15] || (M[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (n(), R(fl, {
        key: 0,
        identifier: k.value,
        onClose: M[4] || (M[4] = (te) => k.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      S(zr, {
        show: p.value,
        onClose: M[5] || (M[5] = (te) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), ob = /* @__PURE__ */ _e(sb, [["__scopeId", "data-v-af3ca736"]]), nb = {
  key: 0,
  class: "indexing-progress"
}, ab = { class: "progress-info" }, lb = { class: "progress-label" }, ib = { class: "progress-count" }, rb = { class: "progress-bar" }, cb = { class: "modal-content" }, ub = { class: "modal-header" }, db = { class: "modal-body" }, mb = { class: "input-group" }, fb = { class: "current-path" }, vb = { class: "input-group" }, pb = { class: "modal-footer" }, gb = /* @__PURE__ */ we({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = lt(), c = s, u = _([]), m = _(!1), f = _(!1), v = _(null), y = _(""), k = _(!1), p = _(null), w = _(!1), x = _(null), $ = _(""), C = _(!1), A = _(!1), T = _(null), I = L(
      () => u.value.reduce((J, G) => J + (G.size || 0), 0)
    ), D = L(() => {
      if (!y.value.trim()) return u.value;
      const J = y.value.toLowerCase();
      return u.value.filter((G) => {
        const X = G, ae = G.sha256 || X.sha256_hash || "";
        return G.filename.toLowerCase().includes(J) || ae.toLowerCase().includes(J);
      });
    }), U = L(() => {
      const J = {};
      for (const X of D.value) {
        const ae = X.type || "other";
        J[ae] || (J[ae] = []), J[ae].push(X);
      }
      const G = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(J).sort(([X], [ae]) => {
        const re = G.indexOf(X), B = G.indexOf(ae);
        return re >= 0 && B >= 0 ? re - B : re >= 0 ? -1 : B >= 0 ? 1 : X.localeCompare(ae);
      }).map(([X, ae]) => ({ type: X, models: ae }));
    });
    function W(J) {
      if (!J) return "Unknown";
      const G = 1024 * 1024 * 1024, X = 1024 * 1024;
      return J >= G ? `${(J / G).toFixed(1)} GB` : J >= X ? `${(J / X).toFixed(0)} MB` : `${(J / 1024).toFixed(0)} KB`;
    }
    function E(J) {
      p.value = J.hash || J.filename;
    }
    async function M() {
      f.value = !0, v.value = null;
      try {
        const J = await a();
        await le(), J.changes > 0 && console.log(`Scan complete: ${J.changes} changes detected`);
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function te() {
      if ($.value.trim()) {
        C.value = !0, v.value = null;
        try {
          const J = await r($.value.trim());
          x.value = J.path, w.value = !1, $.value = "", await le(), console.log(`Directory changed: ${J.models_indexed} models indexed`), c("refresh");
        } catch (J) {
          v.value = J instanceof Error ? J.message : "Failed to change directory";
        } finally {
          C.value = !1;
        }
      }
    }
    async function le() {
      m.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function oe() {
      try {
        const J = await l();
        x.value = J.path;
      } catch {
      }
    }
    return et(() => {
      le(), oe();
    }), (J, G) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: G[2] || (G[2] = (X) => k.value = !0)
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: M
              }, {
                default: g(() => [
                  b(d(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (X) => w.value = !0)
              }, {
                default: g(() => [...G[11] || (G[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (X) => A.value = !0)
              }, {
                default: g(() => [...G[12] || (G[12] = [
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
                style: Yt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          S(Lo, {
            modelValue: y.value,
            "onUpdate:modelValue": G[3] || (G[3] = (X) => y.value = X),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || T.value ? (n(), R(Ls, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), R(Ns, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length ? (n(), R(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(u.value.length) + " models • " + d(W(I.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(j, null, he(U.value, (X) => (n(), R(ft, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(X.models, (ae) => (n(), R(It, {
                  key: ae.sha256 || ae.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...G[13] || (G[13] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(ae.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(W(ae.size)), 1)
                  ]),
                  details: g(() => [
                    S(pt, {
                      label: "Hash:",
                      value: ae.hash ? ae.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => E(ae)
                    }, {
                      default: g(() => [...G[14] || (G[14] = [
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
            D.value.length ? h("", !0) : (n(), R(ds, {
              key: 1,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S(ms, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: G[4] || (G[4] = (X) => k.value = !1)
      }, {
        content: g(() => [...G[15] || (G[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), R(fl, {
        key: 0,
        identifier: p.value,
        onClose: G[5] || (G[5] = (X) => p.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (n(), R(Tt, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: G[9] || (G[9] = gt((X) => w.value = !1, ["self"]))
        }, [
          t("div", cb, [
            t("div", ub, [
              G[16] || (G[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: G[6] || (G[6] = (X) => w.value = !1)
              }, "✕")
            ]),
            t("div", db, [
              t("div", mb, [
                G[17] || (G[17] = t("label", null, "Current Directory", -1)),
                t("code", fb, d(x.value || "Not set"), 1)
              ]),
              t("div", vb, [
                G[18] || (G[18] = t("label", null, "New Directory Path", -1)),
                S(Nt, {
                  modelValue: $.value,
                  "onUpdate:modelValue": G[7] || (G[7] = (X) => $.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              G[19] || (G[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", pb, [
              S(De, {
                variant: "secondary",
                onClick: G[8] || (G[8] = (X) => w.value = !1)
              }, {
                default: g(() => [...G[20] || (G[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(De, {
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
        show: A.value,
        onClose: G[10] || (G[10] = (X) => A.value = !1)
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
}, Db = /* @__PURE__ */ we({
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
    return (u, m) => (n(), R(yt, {
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
              (n(!0), i(j, null, he(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        S(De, {
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
}, Ob = /* @__PURE__ */ we({
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
    return (s, o) => (n(), R(yt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", Nb, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", Ub, [
          (n(!0), i(j, null, he(e.details, (a, l) => (n(), i("div", {
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
        S(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            b(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), R(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            b(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        S(De, {
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
}, qb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Yb = /* @__PURE__ */ we({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u, queueNodeInstall: m } = lt(), f = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = _(!1), y = _(null), k = _(""), p = _(!1), w = _(null), x = _(/* @__PURE__ */ new Set()), $ = _(null), C = L(() => {
      if (!k.value.trim()) return f.value.nodes;
      const V = k.value.toLowerCase();
      return f.value.nodes.filter(
        (F) => {
          var ie, Te;
          return F.name.toLowerCase().includes(V) || ((ie = F.description) == null ? void 0 : ie.toLowerCase().includes(V)) || ((Te = F.repository) == null ? void 0 : Te.toLowerCase().includes(V));
        }
      );
    }), A = L(
      () => C.value.filter((V) => V.installed && V.tracked)
    ), T = L(
      () => C.value.filter((V) => !V.installed && V.tracked && !V.issue_type)
    ), I = L(
      () => C.value.filter((V) => V.installed && !V.tracked)
    ), D = L(
      () => C.value.filter((V) => V.issue_type === "version_gated")
    ), U = L(
      () => C.value.filter((V) => V.issue_type === "uninstallable")
    ), W = L(() => D.value.length), E = L(() => U.value.length);
    function M(V) {
      return V.registry_id || V.name;
    }
    function te(V) {
      return x.value.has(M(V));
    }
    async function le(V, F) {
      const ie = V.registry_id;
      if (!ie) {
        a("toast", `Node "${V.name}" has no package id for install`, "warning");
        return;
      }
      if (F === "git" && !V.repository) {
        a("toast", `Node "${V.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Te = {
        id: ie,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      F === "git" && V.repository && (Te.repository = V.repository, Te.install_source = "git"), await m(Te), x.value.add(M(V)), a("toast", `✓ Queued install for "${V.name}"`, "success");
    }
    function oe(V) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[V] || V;
    }
    const J = L(() => o.versionMismatches.length > 0);
    function G(V) {
      return !V.used_in_workflows || V.used_in_workflows.length === 0 ? "Not used in any workflows" : V.used_in_workflows.length === 1 ? V.used_in_workflows[0] : `${V.used_in_workflows.length} workflows`;
    }
    function X(V) {
      return V.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ae(V) {
      return V.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function re(V) {
      return V.registry_id ? `Community-mapped package: ${V.registry_id}` : "Community-mapped package";
    }
    function B(V) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ee(V) {
      w.value = V;
    }
    function me() {
      a("open-node-manager");
    }
    function Ne(V) {
      $.value = {
        title: "Track as Development Node",
        message: `Track "${V}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const F = await r(V);
            F.status === "success" ? (a("toast", `✓ Node "${V}" tracked as development`, "success"), await q()) : a("toast", `Failed to track node: ${F.message || "Unknown error"}`, "error");
          } catch (F) {
            a("toast", `Error tracking node: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function We(V) {
      $.value = {
        title: "Remove Untracked Node",
        message: `Remove "${V}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const F = await u(V);
            F.status === "success" ? (a("toast", `✓ Node "${V}" removed`, "success"), await q()) : a("toast", `Failed to remove node: ${F.message || "Unknown error"}`, "error");
          } catch (F) {
            a("toast", `Error removing node: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ze(V) {
      $.value = {
        title: "Install Missing Node",
        message: `Install "${V}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const F = await c(V);
            F.status === "success" ? (a("toast", `✓ Node "${V}" installed`, "success"), await q()) : a("toast", `Failed to install node: ${F.message || "Unknown error"}`, "error");
          } catch (F) {
            a("toast", `Error installing node: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function Ie(V) {
      $.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${V.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0, await le(V, "registry");
          } catch (F) {
            a("toast", `Error queueing install: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function z(V) {
      $.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${V.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0, await le(V, "git");
          } catch (F) {
            a("toast", `Error queueing git install: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function q() {
      v.value = !0, y.value = null;
      try {
        f.value = await l();
      } catch (V) {
        y.value = V instanceof Error ? V.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return et(q), (V, F) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: F[0] || (F[0] = (ie) => p.value = !0)
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: me
              }, {
                default: g(() => [...F[7] || (F[7] = [
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
            "onUpdate:modelValue": F[1] || (F[1] = (ie) => k.value = ie),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          v.value ? (n(), R(Ls, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (n(), R(Ns, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            f.value.total_count ? (n(), R(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(d(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (n(), i(j, { key: 0 }, [
                  b(" • " + d(f.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                W.value ? (n(), i(j, { key: 1 }, [
                  b(" • " + d(W.value) + " blocked", 1)
                ], 64)) : h("", !0),
                E.value ? (n(), i(j, { key: 2 }, [
                  b(" • " + d(E.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                f.value.untracked_count ? (n(), i(j, { key: 3 }, [
                  b(" • " + d(f.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            J.value ? (n(), R(ft, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", zb, [
                  F[8] || (F[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(j, null, he(e.versionMismatches, (ie) => (n(), R(It, {
                  key: ie.name,
                  status: "warning"
                }, {
                  icon: g(() => [...F[9] || (F[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Fb, [
                      t("span", Vb, d(ie.actual), 1),
                      F[10] || (F[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Bb, d(ie.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "warning",
                      size: "sm",
                      onClick: F[2] || (F[2] = (Te) => a("repair-environment"))
                    }, {
                      default: g(() => [...F[11] || (F[11] = [
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
            D.value.length ? (n(), R(ft, {
              key: 2,
              title: "BLOCKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(D.value, (ie) => (n(), R(It, {
                  key: `blocked-${ie.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...F[12] || (F[12] = [
                    b("⛔", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Wb, d(X(ie)), 1)
                  ]),
                  details: g(() => [
                    S(pt, {
                      label: "Guidance:",
                      value: ie.issue_guidance || ae(ie)
                    }, null, 8, ["value"]),
                    S(pt, {
                      label: "Used by:",
                      value: G(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...F[13] || (F[13] = [
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
            U.value.length ? (n(), R(ft, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(U.value, (ie) => (n(), R(It, {
                  key: `community-${ie.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...F[14] || (F[14] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Gb, d(re(ie)), 1)
                  ]),
                  details: g(() => [
                    S(pt, {
                      label: "Guidance:",
                      value: ie.issue_guidance || B(ie)
                    }, null, 8, ["value"]),
                    S(pt, {
                      label: "Used by:",
                      value: G(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...F[15] || (F[15] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    te(ie) ? (n(), i("span", jb, "Queued")) : (n(), i(j, { key: 1 }, [
                      ie.registry_id ? (n(), R(ge, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Te) => Ie(ie)
                      }, {
                        default: g(() => [...F[16] || (F[16] = [
                          b(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      ie.repository ? (n(), R(ge, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Te) => z(ie)
                      }, {
                        default: g(() => [...F[17] || (F[17] = [
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
            I.value.length ? (n(), R(ft, {
              key: 4,
              title: "UNTRACKED",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(I.value, (ie) => (n(), R(It, {
                  key: ie.name,
                  status: "warning"
                }, {
                  icon: g(() => [...F[18] || (F[18] = [
                    b("?", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [...F[19] || (F[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    S(pt, {
                      label: "Used by:",
                      value: G(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...F[20] || (F[20] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ge, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Te) => Ne(ie.name)
                    }, {
                      default: g(() => [...F[21] || (F[21] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ge, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Te) => We(ie.name)
                    }, {
                      default: g(() => [...F[22] || (F[22] = [
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
            A.value.length ? (n(), R(ft, {
              key: 5,
              title: "INSTALLED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(A.value, (ie) => (n(), R(It, {
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
                    S(pt, {
                      label: "Used by:",
                      value: G(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...F[23] || (F[23] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: me
                    }, {
                      default: g(() => [...F[24] || (F[24] = [
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
            T.value.length ? (n(), R(ft, {
              key: 6,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(T.value, (ie) => (n(), R(It, {
                  key: ie.name,
                  status: "missing"
                }, {
                  icon: g(() => [...F[25] || (F[25] = [
                    b("!", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [...F[26] || (F[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    S(pt, {
                      label: "Required by:",
                      value: G(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(ge, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...F[27] || (F[27] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ge, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Te) => ze(ie.name)
                    }, {
                      default: g(() => [...F[28] || (F[28] = [
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
            !A.value.length && !T.value.length && !D.value.length && !U.value.length && !I.value.length ? (n(), R(ds, {
              key: 7,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(ms, {
        show: p.value,
        title: "About Custom Nodes",
        onClose: F[4] || (F[4] = (ie) => p.value = !1)
      }, {
        content: g(() => [...F[29] || (F[29] = [
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
          S(ge, {
            variant: "primary",
            onClick: F[3] || (F[3] = (ie) => p.value = !1)
          }, {
            default: g(() => [...F[30] || (F[30] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(Lb, {
        key: 0,
        node: w.value,
        onClose: F[5] || (F[5] = (ie) => w.value = null)
      }, null, 8, ["node"])) : h("", !0),
      $.value ? (n(), R(vl, {
        key: 1,
        title: $.value.title,
        message: $.value.message,
        warning: $.value.warning,
        "confirm-label": $.value.confirmLabel,
        destructive: $.value.destructive,
        onConfirm: $.value.onConfirm,
        onCancel: F[6] || (F[6] = (ie) => $.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), Jb = /* @__PURE__ */ _e(Yb, [["__scopeId", "data-v-3ef68ac4"]]);
function Fr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Qb = { class: "remote-url-display" }, Xb = ["title"], Zb = ["title"], e2 = {
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
}, s2 = /* @__PURE__ */ we({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = _(!1), a = L(() => {
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
    return (r, c) => (n(), i("div", Qb, [
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
}, m2 = /* @__PURE__ */ we({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = L(() => s.fetchingRemote === s.remote.name), a = L(() => s.remote.is_default), l = L(() => s.syncStatus && s.syncStatus.behind > 0), r = L(() => s.syncStatus && s.syncStatus.ahead > 0), c = L(() => s.remote.push_url !== s.remote.fetch_url), u = L(() => {
      const f = s.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), m = L(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (n(), R(It, {
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
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
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
          onClick: v[0] || (v[0] = gt(() => {
          }, ["stop"]))
        }, d(m.value), 9, u2)) : (n(), i("span", d2, d(m.value), 1))
      ]),
      actions: g(() => [
        S(ge, {
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
        S(ge, {
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
        S(ge, {
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
        S(ge, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (y) => f.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? h("", !0) : (n(), R(ge, {
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), R(pt, {
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
}, w2 = /* @__PURE__ */ we({
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
        Qe(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", h2, d(e.error), 1)) : e.hint ? (n(), i("span", y2, d(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), xa = /* @__PURE__ */ _e(w2, [["__scopeId", "data-v-9a1cf296"]]), _2 = { class: "remote-form" }, k2 = { class: "form-header" }, b2 = { class: "form-body" }, $2 = {
  key: 0,
  class: "form-error"
}, C2 = { class: "form-actions" }, x2 = /* @__PURE__ */ we({
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
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = L(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
        S(Ht, null, {
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
            S(Nt, {
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
            S(Nt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (y) => l.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(xa, { label: "Push URL (optional)" }, {
          default: g(() => [
            S(Nt, {
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
        S(ge, {
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
        S(ge, {
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
}, M2 = { class: "summary-progress" }, D2 = { class: "progress-bar" }, L2 = { class: "progress-text" }, N2 = /* @__PURE__ */ we({
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
            style: Yt({ width: o.value + "%" })
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
}, J2 = {
  key: 0,
  class: "change-group",
  open: ""
}, Q2 = { class: "change-count" }, X2 = { class: "change-list" }, Z2 = {
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
}, m$ = { class: "modal-actions" }, ii = "comfygit.pullModelStrategy", f$ = /* @__PURE__ */ we({
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
    kt(l, ($) => {
      localStorage.setItem(ii, $);
    });
    const r = L(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = L(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = L(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), m = L(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), f = L(() => o.preview && Fr(o.preview) ? o.preview : null), v = L(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), y = L(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), k = L(
      () => v.value > 0 && y.value === v.value
    ), p = L(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !k.value));
    function w($) {
      if (!f.value) return !1;
      const C = $.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((A) => A.name === C);
    }
    function x($) {
      const C = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var A, T;
      return n(), R(Tt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (I) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = gt(() => {
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
              ])])) : (A = e.preview) != null && A.has_uncommitted_changes ? (n(), i(j, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
                t("div", W2, [
                  C[17] || (C[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", G2, [
                  C[18] || (C[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", j2, [
                    (n(!0), i(j, null, he(e.preview.commits, (I) => (n(), i("div", {
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
                  c.value > 0 ? (n(), i("details", J2, [
                    t("summary", null, [
                      C[19] || (C[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Q2, d(c.value) + " changes", 1)
                    ]),
                    t("div", X2, [
                      (n(!0), i(j, null, he(e.preview.changes.workflows.added, (I) => (n(), i("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + d(I), 1))), 128)),
                      (n(!0), i(j, null, he(e.preview.changes.workflows.modified, (I) => (n(), i("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + d(I) + " ", 1),
                        w(I) ? (n(), i("span", Z2, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (n(!0), i(j, null, he(e.preview.changes.workflows.deleted, (I) => (n(), i("div", {
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
                      (n(!0), i(j, null, he(e.preview.changes.nodes.to_install, (I) => (n(), i("div", {
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
                      (n(!0), i(j, null, he(e.preview.changes.models.referenced, (I) => (n(), i("div", {
                        key: I,
                        class: "change-item"
                      }, d(I), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                f.value ? (n(), R(U2, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": y.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", l$, [
                  C[27] || (C[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", i$, [
                    t("label", r$, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (I) => l.value = I),
                        value: "all"
                      }, null, 512), [
                        [ls, l.value]
                      ]),
                      C[23] || (C[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", c$, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (I) => l.value = I),
                        value: "required"
                      }, null, 512), [
                        [ls, l.value]
                      ]),
                      C[24] || (C[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", u$, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (I) => l.value = I),
                        value: "skip"
                      }, null, 512), [
                        [ls, l.value]
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
              S(ge, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (I) => $.$emit("close"))
              }, {
                default: g(() => [...C[30] || (C[30] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(j, { key: 0 }, [
                S(ge, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: C[5] || (C[5] = (I) => x(!1))
                }, {
                  default: g(() => [...C[31] || (C[31] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(ge, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: C[6] || (C[6] = (I) => x(!0))
                }, {
                  default: g(() => [...C[32] || (C[32] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), R(ge, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (I) => x(!0))
              }, {
                default: g(() => [...C[33] || (C[33] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(j, { key: 2 }, [
                f.value && !k.value ? (n(), R(ge, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (I) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    b(" Resolve Conflicts (" + d(y.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), R(ge, {
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
}, A$ = { class: "modal-actions" }, O$ = /* @__PURE__ */ we({
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
      return n(), R(Tt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = gt(() => {
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
              ])])) : (m = e.preview) != null && m.remote_has_new_commits ? (n(), i(j, { key: 2 }, [
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
                    (n(!0), i(j, null, he(e.preview.commits, (v) => (n(), i("div", {
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
                    Xe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => a.value = v)
                    }, null, 512), [
                      [un, a.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
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
                    (n(!0), i(j, null, he(e.preview.commits, (v) => (n(), i("div", {
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
              S(ge, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => r.$emit("close"))
              }, {
                default: g(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (n(), i(j, { key: 0 }, [
                S(ge, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(ge, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), R(ge, {
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
}), z$ = /* @__PURE__ */ _e(O$, [["__scopeId", "data-v-3c2e35ab"]]), F$ = { class: "resolution-choice-group" }, V$ = ["disabled"], B$ = ["disabled"], W$ = /* @__PURE__ */ we({
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
}, J$ = { class: "resolved-text" }, Q$ = { class: "conflict-hashes" }, X$ = { class: "hash-item" }, Z$ = { class: "hash-item" }, eC = { class: "conflict-actions" }, tC = /* @__PURE__ */ we({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(o.resolution);
    kt(() => o.resolution, (m) => {
      l.value = m;
    }), kt(l, (m) => {
      m && a("resolve", m);
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
            t("span", J$, d(u.value), 1)
          ])) : h("", !0)
        ]),
        t("div", Q$, [
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
}, pC = /* @__PURE__ */ we({
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
    return (k, p) => (n(), R(yt, {
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
            (n(!0), i(j, null, he(e.workflowConflicts, (w) => (n(), R(sC, {
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
        S(De, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        S(De, {
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
}), gC = /* @__PURE__ */ _e(pC, [["__scopeId", "data-v-c58d150d"]]), hC = { class: "node-conflict-item" }, yC = { class: "node-header" }, wC = { class: "node-name" }, _C = { class: "node-id" }, kC = { class: "version-comparison" }, bC = { class: "version yours" }, $C = { class: "version theirs" }, CC = { class: "chosen-version" }, xC = { class: "chosen" }, SC = { class: "chosen-reason" }, IC = { class: "affected-workflows" }, EC = { class: "wf-source" }, TC = { class: "wf-version" }, PC = /* @__PURE__ */ we({
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
          (n(!0), i(j, null, he(e.conflict.affected_workflows, (a) => (n(), i("li", {
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
}, UC = /* @__PURE__ */ we({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = L(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), R(yt, {
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
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(j, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", LC, [
              (n(!0), i(j, null, he(e.validation.node_conflicts, (u) => (n(), R(RC, {
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
              (n(!0), i(j, null, he(e.validation.warnings, (u, m) => (n(), i("li", { key: m }, d(u), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        S(De, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(De, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(De, {
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
}), AC = /* @__PURE__ */ _e(UC, [["__scopeId", "data-v-fefd26ed"]]), OC = { key: 0 }, zC = /* @__PURE__ */ we({
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
    } = lt(), w = _([]), x = _(null), $ = _({}), C = _(!1), A = _(null), T = _(""), I = _(!1), D = _(null), U = _(!1), W = _("add"), E = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = L(() => {
      if (!T.value.trim()) return w.value;
      const ce = T.value.toLowerCase();
      return w.value.filter(
        (Ce) => Ce.name.toLowerCase().includes(ce) || Ce.fetch_url.toLowerCase().includes(ce) || Ce.push_url.toLowerCase().includes(ce)
      );
    });
    async function te() {
      C.value = !0, A.value = null;
      try {
        const ce = await a();
        w.value = ce.remotes, x.value = ce.current_branch_tracking || null, await Promise.all(
          ce.remotes.map(async (Ce) => {
            const ke = await m(Ce.name);
            ke && ($.value[Ce.name] = ke);
          })
        );
      } catch (ce) {
        A.value = ce instanceof Error ? ce.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function le() {
      W.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, U.value = !0;
    }
    function oe(ce) {
      const Ce = w.value.find((ke) => ke.name === ce);
      Ce && (W.value = "edit", E.value = {
        name: Ce.name,
        fetchUrl: Ce.fetch_url,
        pushUrl: Ce.push_url
      }, U.value = !0);
    }
    async function J(ce) {
      try {
        W.value === "add" ? await l(ce.name, ce.fetchUrl) : await c(ce.name, ce.fetchUrl, ce.pushUrl || void 0), U.value = !1, await te();
      } catch (Ce) {
        A.value = Ce instanceof Error ? Ce.message : "Operation failed";
      }
    }
    function G() {
      U.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(ce) {
      D.value = ce;
      try {
        await u(ce);
        const Ce = await m(ce);
        Ce && ($.value[ce] = Ce), o("toast", `✓ Fetched from ${ce}`, "success");
      } catch (Ce) {
        o("toast", Ce instanceof Error ? Ce.message : "Fetch failed", "error");
      } finally {
        D.value = null;
      }
    }
    async function ae(ce) {
      if (confirm(`Remove remote "${ce}"?`))
        try {
          await r(ce), await te();
        } catch (Ce) {
          A.value = Ce instanceof Error ? Ce.message : "Failed to remove remote";
        }
    }
    function re() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const B = _("idle"), ee = L(() => B.value === "pull_preview"), me = L(
      () => B.value === "resolving" || B.value === "validating"
    ), Ne = L(
      () => B.value === "validation_review" || B.value === "executing"
    ), We = _(!1), ze = _(null), Ie = _(!1), z = _(null), q = _(!1), V = _(null), F = _(null), ie = _(/* @__PURE__ */ new Map()), Te = _(null), Be = _(null), O = L(() => V.value && Fr(V.value) ? V.value : null);
    async function Y(ce) {
      z.value = ce, B.value = "pull_preview", q.value = !0, V.value = null, F.value = null;
      try {
        V.value = await f(ce);
      } catch (Ce) {
        F.value = Ce instanceof Error ? Ce.message : "Failed to load pull preview";
      } finally {
        q.value = !1;
      }
    }
    function de() {
      B.value = "idle", V.value = null, F.value = null, z.value = null;
    }
    async function Ee(ce) {
      if (!z.value) return;
      B.value = "executing", F.value = null;
      const Ce = z.value;
      try {
        const ke = await v(Ce, ce);
        if (ke.rolled_back) {
          F.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, B.value = "pull_preview";
          return;
        }
        Le(), B.value = "idle", o("toast", `✓ Pulled from ${Ce}`, "success"), await te();
      } catch (ke) {
        F.value = ke instanceof Error ? ke.message : "Pull failed", B.value = "pull_preview";
      }
    }
    function be() {
      O.value && (B.value = "resolving", Be.value = null);
    }
    function $e(ce, Ce) {
      ie.value.set(ce, { name: ce, resolution: Ce });
    }
    function Me() {
      B.value = "pull_preview";
    }
    async function ye() {
      B.value = "validating", Be.value = null;
      try {
        const ce = Array.from(ie.value.values());
        Te.value = await p(z.value, ce), B.value = "validation_review";
      } catch (ce) {
        Be.value = ce instanceof Error ? ce.message : "Validation failed", B.value = "resolving";
      }
    }
    async function Pe() {
      B.value = "executing";
      const ce = z.value;
      try {
        const Ce = Array.from(ie.value.values()), ke = await v(ce, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ce
        });
        if (ke.rolled_back) {
          F.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, B.value = "pull_preview";
          return;
        }
        Le(), B.value = "idle", o("toast", `✓ Pulled from ${ce}`, "success"), await te();
      } catch (Ce) {
        F.value = Ce instanceof Error ? Ce.message : "Pull failed", B.value = "validation_review";
      }
    }
    function fe() {
      B.value = "resolving";
    }
    function Ae() {
      Le(), B.value = "idle";
    }
    function Le() {
      ie.value.clear(), Te.value = null, Be.value = null, F.value = null, V.value = null, z.value = null;
    }
    async function N(ce) {
      z.value = ce, We.value = !0, q.value = !0, ze.value = null;
      try {
        ze.value = await y(ce);
      } catch (Ce) {
        A.value = Ce instanceof Error ? Ce.message : "Failed to load push preview";
      } finally {
        q.value = !1;
      }
    }
    function P() {
      We.value = !1, ze.value = null, z.value = null;
    }
    async function se(ce) {
      if (!z.value) return;
      Ie.value = !0;
      const Ce = z.value;
      try {
        await k(Ce, ce), P(), o("toast", `✓ Pushed to ${Ce}`, "success"), await te();
      } catch (ke) {
        o("toast", ke instanceof Error ? ke.message : "Push failed", "error");
      } finally {
        Ie.value = !1;
      }
    }
    function ne() {
      const ce = z.value;
      P(), ce && Y(ce);
    }
    return et(te), (ce, Ce) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Ce[0] || (Ce[0] = (ke) => I.value = !0)
          }, {
            actions: g(() => [
              U.value ? h("", !0) : (n(), R(ge, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: g(() => [...Ce[3] || (Ce[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          U.value ? h("", !0) : (n(), R(Lo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Ce[1] || (Ce[1] = (ke) => T.value = ke),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          C.value ? (n(), R(Ls, {
            key: 0,
            message: "Loading remotes..."
          })) : A.value ? (n(), R(Ns, {
            key: 1,
            message: A.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            U.value ? (n(), R(S2, {
              key: 0,
              mode: W.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: J,
              onCancel: G
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            w.value.length && !U.value ? (n(), R(gn, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", OC, " • Tracking: " + d(x.value.remote) + "/" + d(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            M.value.length && !U.value ? (n(), R(ft, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(M.value, (ke) => (n(), R(f2, {
                  key: ke.name,
                  remote: ke,
                  "sync-status": $.value[ke.name],
                  "fetching-remote": D.value,
                  onFetch: X,
                  onEdit: oe,
                  onRemove: ae,
                  onPull: Y,
                  onPush: N
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !M.value.length && !U.value ? (n(), R(ds, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                S(ge, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: g(() => [...Ce[4] || (Ce[4] = [
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
      S(ms, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Ce[2] || (Ce[2] = (ke) => I.value = !1)
      }, {
        content: g(() => [...Ce[5] || (Ce[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          S(ge, {
            variant: "link",
            onClick: re
          }, {
            default: g(() => [...Ce[6] || (Ce[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(v$, {
        show: ee.value,
        "remote-name": z.value || "",
        preview: V.value,
        loading: q.value,
        pulling: B.value === "executing",
        error: F.value,
        "conflict-resolutions": ie.value,
        onClose: de,
        onPull: Ee,
        onOpenConflictResolution: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(z$, {
        show: We.value,
        "remote-name": z.value || "",
        preview: ze.value,
        loading: q.value,
        pushing: Ie.value,
        onClose: P,
        onPush: se,
        onPullFirst: ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      me.value && O.value ? (n(), R(gC, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: B.value === "validating",
        error: Be.value,
        onClose: Me,
        onResolve: $e,
        onApply: ye
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      Ne.value && Te.value ? (n(), R(AC, {
        key: 1,
        validation: Te.value,
        "operation-type": "pull",
        executing: B.value === "executing",
        onProceed: Pe,
        onGoBack: fe,
        onCancel: Ae
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), FC = /* @__PURE__ */ _e(zC, [["__scopeId", "data-v-9ae3b76d"]]), VC = { class: "setting-info" }, BC = { class: "setting-label" }, WC = {
  key: 0,
  class: "required-marker"
}, GC = {
  key: 0,
  class: "setting-description"
}, jC = { class: "setting-control" }, HC = /* @__PURE__ */ we({
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
        Qe(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Oo = /* @__PURE__ */ _e(HC, [["__scopeId", "data-v-cb5d236c"]]), KC = { class: "toggle" }, qC = ["checked", "disabled"], YC = /* @__PURE__ */ we({
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
}), ri = /* @__PURE__ */ _e(YC, [["__scopeId", "data-v-71c0f550"]]), JC = { class: "workspace-settings-content" }, QC = { class: "settings-section" }, XC = { class: "path-setting" }, ZC = { class: "path-value" }, e3 = { class: "path-setting" }, t3 = { class: "path-value" }, s3 = { class: "settings-section" }, o3 = { class: "settings-section" }, n3 = { class: "settings-section" }, a3 = /* @__PURE__ */ we({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = lt(), u = _(!1), m = _(null), f = _(null), v = _(null), y = _(null), k = _(""), p = _(""), w = _(""), x = _(!1), $ = _(!1), C = _(!1), A = _(!0);
    function T(le) {
      return le.join(" ");
    }
    function I(le) {
      return le.trim() ? le.trim().split(/\s+/) : [];
    }
    const D = L(() => {
      if (!y.value) return !1;
      const le = x.value, oe = $.value, J = w.value !== T(y.value.comfyui_extra_args || []);
      return le || oe || J;
    });
    async function U() {
      u.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), y.value = { ...v.value }, k.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", w.value = T(v.value.comfyui_extra_args || []), x.value = !1, $.value = !1;
        const le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        C.value = le !== "false", A.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (le) {
        m.value = le instanceof Error ? le.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function W() {
      var le;
      f.value = null;
      try {
        const oe = {};
        x.value && (oe.civitai_api_key = k.value || null), $.value && (oe.huggingface_token = p.value || null), w.value !== T(((le = y.value) == null ? void 0 : le.comfyui_extra_args) || []) && (oe.comfyui_extra_args = I(w.value)), await c(oe, a.workspacePath || void 0), await U(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (oe) {
        const J = oe instanceof Error ? oe.message : "Failed to save settings";
        f.value = { type: "error", message: J }, l("error", J);
      }
    }
    function E() {
      y.value && (k.value = y.value.civitai_api_key || "", p.value = y.value.huggingface_token || "", w.value = T(y.value.comfyui_extra_args || []), x.value = !1, $.value = !1, f.value = null);
    }
    function M(le) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(le)), console.log("[ComfyGit] Auto-refresh setting saved:", le);
    }
    function te(le) {
      le ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", le ? "enabled" : "disabled");
    }
    return s({
      saveSettings: W,
      resetSettings: E,
      hasChanges: D,
      loadSettings: U
    }), et(U), (le, oe) => (n(), i("div", JC, [
      u.value ? (n(), R(Ls, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), R(Ns, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: U
      }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
        S(ft, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var J, G;
            return [
              t("div", QC, [
                t("div", XC, [
                  oe[7] || (oe[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  oe[8] || (oe[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", ZC, d(((J = v.value) == null ? void 0 : J.workspace_path) || "Loading..."), 1)
                ]),
                t("div", e3, [
                  oe[9] || (oe[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  oe[10] || (oe[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", t3, d(((G = v.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(ft, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", s3, [
              S(Oo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  S(Xo, {
                    modelValue: k.value,
                    "onUpdate:modelValue": oe[0] || (oe[0] = (J) => k.value = J),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: oe[1] || (oe[1] = (J) => x.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Oo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  S(Xo, {
                    modelValue: p.value,
                    "onUpdate:modelValue": oe[2] || (oe[2] = (J) => p.value = J),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: oe[3] || (oe[3] = (J) => $.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        S(ft, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", o3, [
              S(Oo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  S(Xo, {
                    modelValue: w.value,
                    "onUpdate:modelValue": oe[4] || (oe[4] = (J) => w.value = J),
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
        S(ft, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", n3, [
              S(Oo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  S(ri, {
                    modelValue: C.value,
                    "onUpdate:modelValue": [
                      oe[5] || (oe[5] = (J) => C.value = J),
                      M
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Oo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  S(ri, {
                    modelValue: A.value,
                    "onUpdate:modelValue": [
                      oe[6] || (oe[6] = (J) => A.value = J),
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
        f.value ? (n(), R(gn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Yt({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, d(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), Vr = /* @__PURE__ */ _e(a3, [["__scopeId", "data-v-9c5b427b"]]), l3 = /* @__PURE__ */ we({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = _(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), R(Ft, null, {
      header: g(() => [
        S(Vt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, c;
            return [
              S(ge, {
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
              (c = s.value) != null && c.hasChanges ? (n(), R(ge, {
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
}, u3 = /* @__PURE__ */ we({
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
      (n(!0), i(j, null, he(e.tabs, (u) => (n(), i("button", {
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
}), Br = /* @__PURE__ */ _e(u3, [["__scopeId", "data-v-ad5e6cad"]]), d3 = { class: "log-viewer-wrapper" }, m3 = ["disabled", "title"], f3 = /* @__PURE__ */ we({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = _(null), a = _("idle"), l = L(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await St();
      const f = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    et(r), kt(() => s.logs, r);
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
        (n(!0), i(j, null, he(l.value, (y, k) => (n(), i("div", {
          key: k,
          class: Re(`log-line log-level-${y.level.toLowerCase()}`)
        }, d(y.text), 3))), 128))
      ], 544)
    ]));
  }
}), Wr = /* @__PURE__ */ _e(f3, [["__scopeId", "data-v-c0cc6d21"]]), v3 = /* @__PURE__ */ we({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = lt(), c = _("workspace"), u = _([]), m = _(!1), f = _(null), v = _(!1), y = _(null), k = _(null), p = _(!1), w = L(() => c.value === "workspace" ? y.value : k.value);
    async function x() {
      m.value = !0, f.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await a(void 0, 500);
      } catch (A) {
        f.value = A instanceof Error ? A.message : `Failed to load ${c.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function $() {
      try {
        const [A, T] = await Promise.all([
          o(),
          l()
        ]);
        A.exists && (y.value = A.path), T.exists && (k.value = T.path);
      } catch {
      }
    }
    async function C() {
      if (w.value) {
        p.value = !0;
        try {
          await r(w.value);
        } catch (A) {
          console.error("Failed to open log file:", A);
        } finally {
          p.value = !1;
        }
      }
    }
    return kt(c, () => {
      x();
    }), et(() => {
      x(), $();
    }), (A, T) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (I) => v.value = !0)
          }, {
            actions: g(() => [
              S(ge, {
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
              S(ge, {
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
          m.value ? (n(), R(Ls, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), R(Ns, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length === 0 ? (n(), R(ds, {
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
      S(ms, {
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
          S(ge, {
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
}), p3 = /* @__PURE__ */ we({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = lt(), r = _([]), c = _(!1), u = _(null), m = _(!1), f = _("production"), v = _(null), y = _(!1);
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
    return et(() => {
      k(), p();
    }), (x, $) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: g(() => [
              S(ge, {
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
              S(ge, {
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
          c.value ? (n(), R(Ls, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), R(Ns, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length === 0 ? (n(), R(ds, {
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
      S(ms, {
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
          S(ge, {
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
}, w3 = /* @__PURE__ */ we({
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
    return (s, o) => (n(), R(It, {
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
        Qe(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          S(pt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          S(pt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          S(pt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), R(pt, {
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
}, K3 = { class: "item-list" }, q3 = { class: "model-row" }, Y3 = { class: "item-name" }, J3 = { class: "model-meta" }, Q3 = { class: "item-meta" }, X3 = {
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
}, sx = { class: "value" }, ox = { class: "footer-actions" }, nx = /* @__PURE__ */ we({
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
    const c = L(() => {
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
    return (m, f) => (n(), R(yt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[5] || (f[5] = (v) => a("close"))
    }, {
      body: g(() => {
        var v, y, k, p, w, x, $, C, A, T, I, D, U, W;
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
                  (n(!0), i(j, null, he(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", R3, d(E), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", M3, d(E), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", D3, d(E), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, he(e.detail.workflows.deleted, (E) => (n(), i("div", {
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
                  (n(!0), i(j, null, he(e.detail.nodes, (E) => (n(), i("div", {
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
                  (A = (C = e.detail) == null ? void 0 : C.models) != null && A.missing.length ? (n(), i("span", j3, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (T = e.detail) != null && T.models ? (n(), i("span", {
                  key: 0,
                  class: Re(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (I = e.detail) != null && I.models && l.value.has("models") ? (n(), i("div", H3, [
                t("div", K3, [
                  (n(!0), i(j, null, he(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", q3, [
                      t("span", Y3, d(E.filename), 1),
                      t("span", {
                        class: Re(["criticality-badge", E.criticality])
                      }, d(E.criticality), 3)
                    ]),
                    t("div", J3, [
                      t("span", Q3, d(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", X3, " used by: " + d(E.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (n(), i("div", Z3, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (n(), i("div", ex)) : h("", !0),
            (U = e.detail) != null && U.created_at || e.environment.created_at ? (n(), i("div", tx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", sx, d(u(((W = e.detail) == null ? void 0 : W.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", ox, [
          e.canDelete ? (n(), R(De, {
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
          S(De, {
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
], Hr = "auto", lx = { class: "progress-bar" }, ix = /* @__PURE__ */ we({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = L(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", lx, [
      t("div", {
        class: Re(["progress-fill", e.variant]),
        style: Yt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ra = /* @__PURE__ */ _e(ix, [["__scopeId", "data-v-1beb0512"]]), rx = { class: "task-progress" }, cx = { class: "progress-info" }, ux = { class: "progress-percentage" }, dx = { class: "progress-message" }, mx = {
  key: 0,
  class: "progress-steps"
}, fx = { class: "step-icon" }, vx = { class: "step-label" }, px = /* @__PURE__ */ we({
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
        (n(!0), i(j, null, he(e.steps, (c) => (n(), i("div", {
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
}, Ax = 10, Ox = /* @__PURE__ */ we({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = lt(), u = _(""), m = _(jr), f = _("latest"), v = _(Hr), y = _(!1), k = _(null), p = _(!1), w = _(!1);
    let x = null, $ = 0;
    const C = L(() => !!u.value.trim() && w.value && !k.value && !p.value && !I.value), A = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = _(!1), I = _(!1), D = _({
      progress: 0,
      message: ""
    });
    let U = null, W = 0;
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
    ], M = _(null);
    kt(u, (B) => {
      w.value = !1, x && (clearTimeout(x), x = null);
      const ee = B.trim();
      if (!ee) {
        k.value = null, p.value = !1;
        return;
      }
      p.value = !0, x = setTimeout(() => {
        te(ee);
      }, 400);
    });
    async function te(B, ee = !1) {
      const me = B.trim();
      if (!me)
        return w.value = !1, p.value = !1, k.value = ee ? "Environment name is required" : null, !1;
      const Ne = ++$;
      p.value = !0;
      try {
        const We = await c(me);
        return Ne !== $ ? !1 : (k.value = We.valid ? null : We.error || "Invalid name", w.value = !!We.valid, !!We.valid);
      } catch {
        return Ne !== $ || (k.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        Ne === $ && (p.value = !1);
      }
    }
    async function le() {
      x && (clearTimeout(x), x = null), await te(u.value, !0);
    }
    function oe() {
      I.value || o("close");
    }
    async function J() {
      const B = u.value.trim();
      if (!B) {
        k.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await te(B, !0)) {
        I.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const me = {
            name: B,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ne = await l(me);
          Ne.status === "started" ? G() : Ne.status === "error" && (D.value = {
            progress: 0,
            message: Ne.message || "Failed to start creation",
            error: Ne.message
          });
        } catch (me) {
          D.value = {
            progress: 0,
            message: me instanceof Error ? me.message : "Unknown error",
            error: me instanceof Error ? me.message : "Unknown error"
          };
        }
      }
    }
    function G() {
      U || (W = 0, U = window.setInterval(async () => {
        try {
          const B = await r();
          W = 0, D.value = {
            progress: B.progress ?? 0,
            message: B.message,
            phase: B.phase,
            error: B.error
          }, B.state === "complete" ? (X(), o("created", B.environment_name || u.value.trim(), y.value)) : B.state === "error" ? (X(), D.value.error = B.error || B.message) : B.state === "idle" && I.value && (X(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          W++, W >= Ax && (X(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function X() {
      U && (clearInterval(U), U = null);
    }
    function ae() {
      I.value = !1, D.value = { progress: 0, message: "" }, o("close");
    }
    async function re() {
      T.value = !0;
      try {
        A.value = await a();
      } catch (B) {
        console.error("Failed to load ComfyUI releases:", B);
      } finally {
        T.value = !1;
      }
    }
    return et(async () => {
      var B;
      await St(), (B = M.value) == null || B.focus(), re();
    }), qs(() => {
      X(), x && (clearTimeout(x), x = null);
    }), (B, ee) => (n(), R(yt, {
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
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? h("", !0) : (n(), i("p", Dx, " This may take several minutes. Please wait... ")),
          D.value.error ? (n(), i("div", Lx, [
            t("p", Nx, d(D.value.error), 1)
          ])) : h("", !0)
        ])) : (n(), i("div", gx, [
          t("div", hx, [
            ee[6] || (ee[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", yx, [
              Xe(t("input", {
                ref_key: "nameInput",
                ref: M,
                "onUpdate:modelValue": ee[0] || (ee[0] = (me) => u.value = me),
                type: "text",
                class: Re(["form-input", { error: !!k.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: ts(J, ["enter"]),
                onBlur: le
              }, null, 34), [
                [qt, u.value]
              ]),
              p.value ? (n(), i("span", wx, "...")) : w.value ? (n(), i("span", _x, "✓")) : h("", !0)
            ]),
            k.value ? (n(), i("div", kx, d(k.value), 1)) : h("", !0),
            ee[7] || (ee[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", bx, [
            ee[8] || (ee[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            Xe(t("select", {
              "onUpdate:modelValue": ee[1] || (ee[1] = (me) => m.value = me),
              class: "form-select"
            }, [
              (n(!0), i(j, null, he(qe(Gr), (me) => (n(), i("option", {
                key: me,
                value: me
              }, d(me), 9, $x))), 128))
            ], 512), [
              [bs, m.value]
            ])
          ]),
          t("div", Cx, [
            ee[9] || (ee[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Xe(t("select", {
              "onUpdate:modelValue": ee[2] || (ee[2] = (me) => f.value = me),
              class: "form-select",
              disabled: T.value
            }, [
              (n(!0), i(j, null, he(A.value, (me) => (n(), i("option", {
                key: me.tag_name,
                value: me.tag_name
              }, d(me.name), 9, Sx))), 128))
            ], 8, xx), [
              [bs, f.value]
            ])
          ]),
          t("div", Ix, [
            ee[10] || (ee[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Xe(t("select", {
              "onUpdate:modelValue": ee[3] || (ee[3] = (me) => v.value = me),
              class: "form-select"
            }, [
              (n(!0), i(j, null, he(qe(pl), (me) => (n(), i("option", {
                key: me,
                value: me
              }, d(me) + d(me === "auto" ? " (detect GPU)" : ""), 9, Ex))), 128))
            ], 512), [
              [bs, v.value]
            ])
          ]),
          t("div", Tx, [
            t("label", Px, [
              Xe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ee[4] || (ee[4] = (me) => y.value = me)
              }, null, 512), [
                [un, y.value]
              ]),
              ee[11] || (ee[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        I.value ? (n(), i(j, { key: 1 }, [
          D.value.error ? (n(), R(De, {
            key: 0,
            variant: "secondary",
            onClick: ae
          }, {
            default: g(() => [...ee[16] || (ee[16] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", Ux, " Creating environment... "))
        ], 64)) : (n(), i(j, { key: 0 }, [
          S(De, {
            variant: "primary",
            disabled: !C.value,
            onClick: J
          }, {
            default: g(() => [...ee[14] || (ee[14] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(De, {
            variant: "secondary",
            onClick: ee[5] || (ee[5] = (me) => o("close"))
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
}), zx = /* @__PURE__ */ _e(Ox, [["__scopeId", "data-v-3faa3d9b"]]), Fx = /* @__PURE__ */ we({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = lt(), c = _([]), u = _(!1), m = _(null), f = _(""), v = _(!1), y = _(!1), k = _(null), p = _(null), w = L(() => {
      if (!f.value.trim()) return c.value;
      const I = f.value.toLowerCase();
      return c.value.filter(
        (D) => {
          var U;
          return D.name.toLowerCase().includes(I) || ((U = D.current_branch) == null ? void 0 : U.toLowerCase().includes(I));
        }
      );
    });
    function x(I, D) {
      y.value = !1, a("created", I, D);
    }
    function $() {
      y.value = !0;
    }
    async function C(I) {
      k.value = I, p.value = null;
      const D = await r(I.name);
      D && (p.value = D);
    }
    function A(I) {
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
    return et(T), s({
      loadEnvironments: T,
      openCreateModal: $
    }), (I, D) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (U) => v.value = !0)
          }, {
            actions: g(() => [
              S(ge, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: g(() => [...D[6] || (D[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              S(ge, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: g(() => [...D[7] || (D[7] = [
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
            "onUpdate:modelValue": D[1] || (D[1] = (U) => f.value = U),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), R(Ls, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), R(Ns, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            w.value.length ? (n(), R(ft, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, he(w.value, (U) => (n(), R(_3, {
                  key: U.name,
                  "environment-name": U.name,
                  "is-current": U.is_current,
                  "current-branch": U.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    U.is_current ? h("", !0) : (n(), R(ge, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => I.$emit("switch", U.name)
                    }, {
                      default: g(() => [...D[8] || (D[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(ge, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => C(U)
                    }, {
                      default: g(() => [...D[9] || (D[9] = [
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
            w.value.length ? h("", !0) : (n(), R(ds, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, io({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  S(ge, {
                    variant: "primary",
                    onClick: $
                  }, {
                    default: g(() => [...D[10] || (D[10] = [
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
      S(ms, {
        show: v.value,
        title: "About Environments",
        onClose: D[3] || (D[3] = (U) => v.value = !1)
      }, {
        content: g(() => [...D[11] || (D[11] = [
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
          S(ge, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (U) => v.value = !1)
          }, {
            default: g(() => [...D[12] || (D[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (n(), R(ax, {
        key: 0,
        environment: k.value,
        detail: p.value,
        "can-delete": c.value.length > 1,
        onClose: D[4] || (D[4] = (U) => {
          k.value = null, p.value = null;
        }),
        onDelete: A
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      y.value ? (n(), R(zx, {
        key: 1,
        onClose: D[5] || (D[5] = (U) => y.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), Vx = /* @__PURE__ */ _e(Fx, [["__scopeId", "data-v-0c0fbd88"]]), Bx = { class: "file-path" }, Wx = { class: "file-path-text" }, Gx = ["title"], jx = /* @__PURE__ */ we({
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
}, Jx = /* @__PURE__ */ we({
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
          c[1] || (c[1] = ts(gt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ts(gt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ts(l, ["enter"])
        ]
      }, null, 40, qx),
      e.showCharCount && e.maxLength ? (n(), i("div", Yx, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Wa = /* @__PURE__ */ _e(Jx, [["__scopeId", "data-v-c6d16c93"]]), Qx = ["checked", "disabled"], Xx = { class: "base-checkbox-box" }, Zx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, e5 = {
  key: 0,
  class: "base-checkbox-label"
}, t5 = /* @__PURE__ */ we({
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
      }, null, 40, Qx),
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
        Qe(s.$slots, "default", {}, void 0)
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
}, v5 = /* @__PURE__ */ we({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = lt(), r = _(""), c = _(!1), u = _(!1), m = _(""), f = Ks({}), v = L(
      () => o.issues.some(($) => $.type === "uncommitted_workflows" || $.type === "uncommitted_git_changes")
    ), y = L(
      () => o.issues.some(($) => $.type === "unresolved_issues")
    ), k = L(
      () => y.value && !u.value
    ), p = L(
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
            const A = (($ = C.issues) == null ? void 0 : $.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${A}`;
          } else
            m.value = C.message || "Commit failed";
        } catch (C) {
          m.value = C instanceof Error ? C.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return ($, C) => (n(), R(yt, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: C[4] || (C[4] = (A) => $.$emit("close"))
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
            (n(!0), i(j, null, he(e.issues, (A, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", i5, d(A.message), 1),
              A.details.length ? (n(), i("div", r5, [
                (n(!0), i(j, null, he(w(T), (I, D) => (n(), i("div", {
                  key: D,
                  class: "issue-detail"
                }, d(I), 1))), 128)),
                A.details.length > 3 && !f[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (I) => f[T] = !0
                }, " +" + d(A.details.length - 3) + " more ", 9, c5)) : h("", !0)
              ])) : h("", !0),
              t("div", u5, [
                A.type === "uncommitted_workflows" ? (n(), i(j, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : A.type === "uncommitted_git_changes" ? (n(), i(j, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : A.type === "unresolved_issues" ? (n(), i(j, { key: 2 }, [
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
                "onUpdate:modelValue": C[0] || (C[0] = (A) => u.value = A),
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
              "onUpdate:modelValue": C[1] || (C[1] = (A) => r.value = A),
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
        v.value ? (n(), i(j, { key: 0 }, [
          S(De, {
            variant: "secondary",
            onClick: C[2] || (C[2] = (A) => $.$emit("close"))
          }, {
            default: g(() => [...C[9] || (C[9] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(De, {
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
        ], 64)) : (n(), R(De, {
          key: 1,
          variant: "primary",
          onClick: C[3] || (C[3] = (A) => $.$emit("close"))
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
}, h5 = { class: "warning-header" }, y5 = { class: "warning-summary" }, w5 = { class: "warning-title" }, _5 = { class: "models-section" }, k5 = { class: "models-list" }, b5 = { class: "model-info" }, $5 = { class: "model-filename" }, C5 = { class: "model-workflows" }, x5 = ["onClick"], S5 = /* @__PURE__ */ we({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(!1), r = _(null), c = L(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, a("revalidate");
    }
    return (m, f) => (n(), i(j, null, [
      S(yt, {
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
            ])])) : (n(), i(j, { key: 1 }, [
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
                  (n(!0), i(j, null, he(c.value, (v) => (n(), i("div", {
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
          S(De, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: g(() => [...f[7] || (f[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          S(De, {
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
      r.value ? (n(), R(fl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), qr = /* @__PURE__ */ _e(S5, [["__scopeId", "data-v-b698d882"]]), I5 = { class: "export-card" }, E5 = { class: "export-path-row" }, T5 = { class: "export-actions" }, P5 = {
  key: 1,
  class: "export-warning"
}, R5 = /* @__PURE__ */ we({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = lt(), a = _(""), l = _(!1), r = _(!1), c = _(!1), u = _(null), m = _(!1), f = _(null), v = _(!1), y = _(!1), k = L(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
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
    async function A() {
      var I;
      if ((I = u.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (D) {
          console.error("Failed to copy path:", D);
        }
    }
    async function T() {
      var I;
      if ((I = u.value) != null && I.path) {
        c.value = !0;
        try {
          const D = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!D.ok)
            throw new Error(`Download failed: ${D.statusText}`);
          const U = await D.blob(), W = URL.createObjectURL(U), E = u.value.path.split("/").pop() || "environment-export.tar.gz", M = document.createElement("a");
          M.href = W, M.download = E, document.body.appendChild(M), M.click(), document.body.removeChild(M), URL.revokeObjectURL(W);
        } catch (D) {
          console.error("Failed to download:", D), alert(`Download failed: ${D instanceof Error ? D.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, D) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (U) => m.value = !0)
          })
        ]),
        content: g(() => [
          S(ft, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", I5, [
                D[7] || (D[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", E5, [
                  S(Xo, {
                    modelValue: a.value,
                    "onUpdate:modelValue": D[1] || (D[1] = (U) => a.value = U),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", T5, [
                  S(ge, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: p
                  }, {
                    default: g(() => [
                      D[6] || (D[6] = t("svg", {
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
          u.value ? (n(), R(ft, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              S(It, {
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
                    S(pt, { label: "Saved to:" }, {
                      default: g(() => [
                        S(Hx, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (n(), R(pt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", P5, [...D[8] || (D[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    S(ge, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: T
                    }, {
                      default: g(() => [...D[9] || (D[9] = [
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
                    S(ge, {
                      variant: "secondary",
                      size: "sm",
                      onClick: A
                    }, {
                      default: g(() => [...D[10] || (D[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(ge, {
                      variant: "ghost",
                      size: "sm",
                      onClick: D[2] || (D[2] = (U) => u.value = null)
                    }, {
                      default: g(() => [...D[11] || (D[11] = [
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
      S(ms, {
        show: m.value,
        title: "What Gets Exported",
        onClose: D[3] || (D[3] = (U) => m.value = !1)
      }, {
        content: g(() => [...D[12] || (D[12] = [
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
      v.value && f.value ? (n(), R(Kr, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: D[4] || (D[4] = (U) => v.value = !1),
        onCommitted: x
      }, null, 8, ["issues"])) : h("", !0),
      y.value && f.value ? (n(), R(qr, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: D[5] || (D[5] = (U) => y.value = !1),
        onRevalidate: $
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), M5 = /* @__PURE__ */ _e(R5, [["__scopeId", "data-v-ddeffd68"]]), D5 = { class: "file-input-wrapper" }, L5 = ["accept", "multiple", "disabled"], N5 = /* @__PURE__ */ we({
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
      S(ge, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          Qe(u.$slots, "default", {}, () => [
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
}, W5 = { class: "file-info" }, G5 = { class: "file-details" }, j5 = { class: "file-name" }, H5 = { class: "file-size" }, K5 = /* @__PURE__ */ we({
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
    const o = s, a = _(!1), l = _(null), r = _(0), c = L(() => l.value !== null), u = L(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), m = L(() => {
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
      var A;
      $.stopPropagation(), r.value = 0, a.value = !1;
      const C = (A = $.dataTransfer) == null ? void 0 : A.files;
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
      onDragenter: gt(f, ["prevent"]),
      onDragover: gt(v, ["prevent"]),
      onDragleave: gt(y, ["prevent"]),
      onDrop: gt(k, ["prevent"])
    }, [
      c.value ? (n(), i("div", B5, [
        t("div", W5, [
          C[1] || (C[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", G5, [
            t("div", j5, d(u.value), 1),
            t("div", H5, d(m.value), 1)
          ])
        ]),
        S(ge, {
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
}), q5 = /* @__PURE__ */ _e(K5, [["__scopeId", "data-v-0f79cb86"]]), Y5 = { class: "import-preview" }, J5 = { class: "preview-header" }, Q5 = {
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
}, $S = { class: "git-info" }, CS = /* @__PURE__ */ we({
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
    return (c, u) => (n(), i("div", Y5, [
      t("div", J5, [
        S(Ht, null, {
          default: g(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", Q5, [
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
            (n(!0), i(j, null, he(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
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
            (n(!0), i(j, null, he(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
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
            (n(!0), i(j, null, he(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
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
            e.gitBranch ? (n(), R(pt, {
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
            e.gitCommit ? (n(), R(pt, {
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
}, LS = { class: "config-field" }, NS = { class: "strategy-options" }, US = ["value", "checked", "onChange"], AS = { class: "strategy-content" }, OS = { class: "strategy-label" }, zS = { class: "strategy-description" }, FS = { class: "config-field switch-field" }, VS = { class: "switch-label" }, BS = ["checked"], WS = { class: "advanced-section" }, GS = { class: "advanced-content" }, jS = { class: "config-field" }, HS = ["value"], KS = ["value"], qS = /* @__PURE__ */ we({
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
    kt(() => o.nameError, (v) => {
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
      S(Ht, null, {
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
            (n(), i(j, null, he(c, (k) => t("label", {
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
                (n(!0), i(j, null, he(qe(pl), (k) => (n(), i("option", {
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
}), YS = /* @__PURE__ */ _e(qS, [["__scopeId", "data-v-89ea06a1"]]), JS = { class: "import-flow" }, QS = {
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
}, w8 = { class: "complete-message" }, _8 = { class: "complete-title" }, k8 = { class: "complete-details" }, b8 = { class: "complete-actions" }, $8 = /* @__PURE__ */ we({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ie, z, q, V;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: m, executeGitImport: f, getImportProgress: v } = lt();
    let y = null;
    const k = _(null), p = _(a.resumeImport ?? !1), w = _(!1), x = _(!1), $ = _(""), C = _(!1), A = _(null), T = _(""), I = _(null), D = _(!1), U = _(null), W = _(null), E = _({
      name: ((Ie = a.initialProgress) == null ? void 0 : Ie.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), M = _(null), te = _({
      message: ((z = a.initialProgress) == null ? void 0 : z.message) ?? "Preparing import...",
      phase: ((q = a.initialProgress) == null ? void 0 : q.phase) ?? "",
      progress: ((V = a.initialProgress) == null ? void 0 : V.progress) ?? 0,
      error: null
    }), le = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], oe = L(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const F = W.value;
      return {
        sourceEnvironment: F.comfyui_version ? `ComfyUI ${F.comfyui_version}` : "Unknown",
        workflows: F.workflows.map((ie) => ie.name),
        models: F.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: F.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), J = L(() => !C.value && !A.value && W.value && E.value.name.length > 0 && !M.value && (k.value || I.value));
    async function G(F) {
      k.value = F, C.value = !0, A.value = null, W.value = null;
      try {
        const ie = await r(F);
        W.value = ie;
      } catch (ie) {
        A.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        C.value = !1;
      }
    }
    function X() {
      k.value = null, I.value = null, T.value = "", U.value = null, w.value = !1, x.value = !1, $.value = "", W.value = null, A.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, M.value = null, l("source-cleared");
    }
    function ae() {
      We(), X(), p.value = !1, C.value = !1, D.value = !1, te.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function re() {
      if (T.value.trim()) {
        D.value = !0, U.value = null;
        try {
          const F = await c(T.value.trim());
          I.value = T.value.trim(), W.value = F;
        } catch (F) {
          U.value = F instanceof Error ? F.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
        }
      }
    }
    function B(F) {
      try {
        const ie = new URL(F);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return F;
      }
    }
    async function ee(F) {
      if (!F) {
        M.value = "Environment name is required";
        return;
      }
      try {
        const ie = await u(F);
        M.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        M.value = "Failed to validate name";
      }
    }
    async function me() {
      if (E.value.name && !(!k.value && !I.value)) {
        p.value = !0, w.value = !1, te.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let F;
          if (k.value)
            F = await m(
              k.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (I.value)
            F = await f(
              I.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          F.status === "started" ? Ne() : (x.value = !1, $.value = F.message, p.value = !1, w.value = !0);
        } catch (F) {
          x.value = !1, $.value = F instanceof Error ? F.message : "Unknown error occurred during import", p.value = !1, w.value = !0;
        }
      }
    }
    async function Ne() {
      if (y) return;
      const F = async () => {
        try {
          const Te = await v();
          return te.value = {
            message: Te.message,
            phase: Te.phase || "",
            progress: Te.progress ?? (Te.state === "importing" ? 50 : 0),
            error: Te.error || null
          }, Te.state === "complete" ? (We(), x.value = !0, $.value = `Environment '${Te.environment_name}' created successfully`, p.value = !1, w.value = !0, Te.environment_name && l("import-complete", Te.environment_name, E.value.switchAfterImport), !1) : Te.state === "error" ? (We(), x.value = !1, $.value = Te.error || Te.message, p.value = !1, w.value = !0, !1) : !0;
        } catch (Te) {
          return console.error("Failed to poll import progress:", Te), !0;
        }
      };
      await F() && (y = setInterval(async () => {
        await F() || We();
      }, 2e3));
    }
    function We() {
      y && (clearInterval(y), y = null);
    }
    function ze(F) {
      return F < 1024 ? `${F} B` : F < 1024 * 1024 ? `${(F / 1024).toFixed(1)} KB` : F < 1024 * 1024 * 1024 ? `${(F / (1024 * 1024)).toFixed(1)} MB` : `${(F / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const F = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", F.state, F), F.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", F.environment_name), p.value = !0, E.value.name = F.environment_name || E.value.name || "", te.value = {
          progress: F.progress ?? 0,
          message: F.message || "Importing...",
          phase: F.phase || "",
          error: null
        }, Ne());
      } catch (F) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", F);
      }
    }), s({
      handleReset: ae,
      isImporting: p,
      canImport: J
    }), (F, ie) => {
      var Te;
      return n(), i("div", JS, [
        !k.value && !I.value && !p.value ? (n(), i("div", QS, [
          S(q5, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: G
          }),
          ie[7] || (ie[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", XS, [
            ie[5] || (ie[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", ZS, [
              Xe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Be) => T.value = Be),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ts(re, ["enter"]),
                disabled: D.value
              }, null, 40, e8), [
                [qt, T.value]
              ]),
              S(ge, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || D.value,
                onClick: re
              }, {
                default: g(() => [
                  b(d(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            U.value ? (n(), i("div", t8, d(U.value), 1)) : h("", !0),
            ie[6] || (ie[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (k.value || I.value) && !p.value && !w.value ? (n(), i("div", s8, [
          t("div", o8, [
            k.value ? (n(), i("div", n8, [
              ie[8] || (ie[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", a8, [
                t("div", l8, d(k.value.name), 1),
                t("div", i8, d(ze(k.value.size)), 1)
              ])
            ])) : I.value ? (n(), i("div", r8, [
              ie[10] || (ie[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", c8, [
                t("div", u8, d(B(I.value)), 1),
                ie[9] || (ie[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            S(ge, {
              variant: "ghost",
              size: "sm",
              onClick: X
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
          ])])) : A.value ? (n(), R(ns, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [A.value]
          }, null, 8, ["details"])) : W.value ? (n(), R(xS, {
            key: 2,
            "source-environment": oe.value.sourceEnvironment,
            workflows: oe.value.workflows,
            models: oe.value.models,
            nodes: oe.value.nodes,
            "git-branch": oe.value.gitBranch,
            "git-commit": oe.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          W.value ? (n(), R(YS, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Be) => E.value.name = Be),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Be) => E.value.modelStrategy = Be),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Be) => E.value.torchBackend = Be),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Be) => E.value.switchAfterImport = Be),
            "name-error": M.value,
            onValidateName: ee
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          E.value.modelStrategy === "skip" && ((Te = W.value) != null && Te.models_needing_download) ? (n(), R(ns, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          t("div", m8, [
            S(ge, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: g(() => [...ie[13] || (ie[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ge, {
              variant: "primary",
              size: "md",
              disabled: !J.value,
              onClick: me
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
            steps: le
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
            S(ge, {
              variant: "primary",
              size: "md",
              onClick: ae
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
}), Yr = /* @__PURE__ */ _e($8, [["__scopeId", "data-v-72cbc04e"]]), C8 = /* @__PURE__ */ we({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = _(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
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
      S(ms, {
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
let zo = null;
async function In(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Jr(e) {
  const s = L(
    () => yo.value.filter((p) => p.status === "running")
  ), o = L(
    () => yo.value.filter((p) => p.status === "deploying")
  ), a = L(
    () => yo.value.filter((p) => p.status === "stopped")
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
    zo || (zo = window.setInterval(c, S8));
  }
  function k() {
    zo && (clearInterval(zo), zo = null);
  }
  return kt(o, (p) => {
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
}, O8 = { class: "progress-message" }, z8 = { class: "instance-actions" }, F8 = /* @__PURE__ */ we({
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
        e.instance.deployment_progress ? (n(), R(ra, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : h("", !0)
      ])) : h("", !0),
      t("div", z8, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), R(ge, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), R(ge, {
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
        e.instance.status === "running" ? (n(), R(ge, {
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
        e.instance.status === "stopped" ? (n(), R(ge, {
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
        S(ge, {
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
}, K8 = /* @__PURE__ */ we({
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
    return (a, l) => (n(), i("div", B8, [
      t("div", W8, [
        S(Ht, null, {
          default: g(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(ge, {
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
        (n(!0), i(j, null, he(o.value, (r) => (n(), R(V8, {
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
}), q8 = /* @__PURE__ */ _e(K8, [["__scopeId", "data-v-ba614fc3"]]), Y8 = { class: "remote-header" }, J8 = { class: "remote-info" }, Q8 = { class: "remote-icon" }, X8 = { class: "remote-name" }, Z8 = {
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
}, l4 = { class: "remote-actions" }, i4 = /* @__PURE__ */ we({
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
      class: Re(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", Y8, [
        t("div", J8, [
          t("span", Q8, d(o.value ? "🔗" : "🌐"), 1),
          t("span", X8, d(e.remote.name), 1),
          o.value ? (n(), i("span", Z8, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", e4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
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
          onClick: c[0] || (c[0] = gt(() => {
          }, ["stop"]))
        }, d(l.value), 9, n4)) : (n(), i("span", a4, d(l.value), 1))
      ]),
      t("div", l4, [
        S(ge, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), R(ge, {
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
        S(ge, {
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
}), Qr = /* @__PURE__ */ _e(i4, [["__scopeId", "data-v-d687d161"]]), r4 = { class: "runpod-tab" }, c4 = { class: "api-key-card" }, u4 = { class: "api-key-row" }, d4 = { class: "api-key-input-wrapper" }, m4 = ["type", "disabled"], f4 = ["title"], v4 = { class: "status-icon" }, p4 = { class: "status-text" }, g4 = {
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
}, Y4 = { class: "remotes-list" }, J4 = {
  key: 0,
  class: "sync-warning"
}, Q4 = { class: "warning-content" }, X4 = { class: "remotes-footer" }, Z4 = { class: "summary-card" }, eI = {
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
}, BI = { class: "console-link" }, WI = ["href"], GI = /* @__PURE__ */ we({
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
    } = lt(), C = _(!1), A = _(""), T = _(!1), I = _(!1), D = _(null), U = _(null), W = _(""), E = _(""), M = _(""), te = _("SECURE"), le = _("ON_DEMAND"), oe = _("my-comfyui-deploy"), J = _([]), G = _({}), X = _(!1), ae = _(null), re = _(null), B = _(null), ee = _([]), me = _(!1), Ne = _([]), We = _(!1), ze = _([]), Ie = _(!1), z = _(null), q = _(!1), V = _(!1), F = _(null), ie = _(!1), Te = _(null), Be = _(null), O = _(null), Y = _(!1), de = _(null), Ee = _(!1), be = _(!1), $e = L(() => Ne.value.find((Se) => Se.id === E.value) || null), Me = L(() => W.value ? Ne.value.filter((Se) => Se.data_center_id === W.value) : Ne.value), ye = L(() => ze.value.filter((Se) => Se.available)), Pe = L(() => ae.value && G.value[ae.value] || null), fe = L(() => {
      if (!ae.value) return null;
      const Se = J.value.find((Z) => Z.name === ae.value);
      return (Se == null ? void 0 : Se.fetch_url) || null;
    }), Ae = L(() => T.value && E.value && M.value && fe.value && !V.value && !Y.value), Le = (Se) => {
      const Z = ze.value.find((_t) => _t.id === M.value);
      if (!Z) return "0.00";
      if (Se === "SECURE") return (Z.securePrice ?? 0).toFixed(2);
      if (Se === "COMMUNITY") return (Z.communityPrice ?? 0).toFixed(2);
      const Fe = te.value === "SECURE";
      return Se === "ON_DEMAND" ? Fe ? (Z.securePrice ?? 0).toFixed(2) : (Z.communityPrice ?? 0).toFixed(2) : Fe ? (Z.secureSpotPrice ?? 0).toFixed(2) : (Z.communitySpotPrice ?? 0).toFixed(2);
    }, N = L(() => {
      const Se = ze.value.find((Pt) => Pt.id === M.value), Z = Ne.value.find((Pt) => Pt.id === E.value);
      if (!Se) return null;
      const Fe = te.value === "SECURE", _t = le.value === "SPOT";
      let Ct;
      _t ? Ct = Fe ? Se.secureSpotPrice ?? 0 : Se.communitySpotPrice ?? 0 : Ct = Fe ? Se.securePrice ?? 0 : Se.communityPrice ?? 0;
      const Jt = Z ? Z.size_gb * 14e-5 : 0, $s = 4e-3;
      return {
        gpu: Ct,
        volume: Jt,
        container: $s,
        total: Ct + Jt + $s
      };
    });
    async function P() {
      await rt(), await Promise.all([at(), se()]);
    }
    async function se() {
      X.value = !0;
      try {
        const Se = await k();
        J.value = Se.remotes, await Promise.all(
          Se.remotes.map(async (Fe) => {
            const _t = await p(Fe.name);
            _t && (G.value[Fe.name] = _t);
          })
        );
        const Z = Se.remotes.find((Fe) => Fe.is_default);
        Z ? ae.value = Z.name : Se.remotes.length > 0 && (ae.value = Se.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function ne(Se) {
      re.value = Se;
      try {
        await w(Se);
        const Z = await p(Se);
        Z && (G.value[Se] = Z), o("toast", `Fetched from ${Se}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        re.value = null;
      }
    }
    async function ce(Se) {
      B.value = Se;
      try {
        await x(Se, { force: !1 });
        const Z = await p(Se);
        Z && (G.value[Se] = Z), o("toast", `Pushed to ${Se}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        B.value = null;
      }
    }
    function Ce(Se) {
      ae.value = Se;
    }
    async function ke() {
      if (A.value) {
        I.value = !0, D.value = null;
        try {
          const Se = await l(A.value, !0);
          Se.status === "success" ? (T.value = !0, U.value = Se.credit_balance ?? null, D.value = { type: "success", message: Se.message }, await P()) : D.value = { type: "error", message: Se.message };
        } catch (Se) {
          D.value = {
            type: "error",
            message: Se instanceof Error ? Se.message : "Connection test failed"
          };
        } finally {
          I.value = !1;
        }
      }
    }
    async function Ge() {
      try {
        await v(), A.value = "", T.value = !1, D.value = null, U.value = null, ee.value = [], W.value = "", Ne.value = [], E.value = "", ze.value = [], M.value = "", z.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function rt() {
      We.value = !0, me.value = !0;
      try {
        const Se = await r();
        Ne.value = Se.volumes;
        const Z = /* @__PURE__ */ new Map();
        for (const Fe of Se.volumes)
          Fe.data_center_id && !Z.has(Fe.data_center_id) && Z.set(Fe.data_center_id, {
            id: Fe.data_center_id,
            name: Fe.data_center_name || Fe.data_center_id,
            available: !0
          });
        if (Se.volumes.length === 0) {
          const Fe = await $();
          ee.value = Fe.data_centers;
        } else
          ee.value = Array.from(Z.values());
        if (Ne.value.length > 0) {
          const Fe = Ne.value[0];
          E.value = Fe.id, Fe.data_center_id && (W.value = Fe.data_center_id, await ht(Fe.data_center_id));
        } else ee.value.length > 0 && (W.value = ee.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        We.value = !1, me.value = !1;
      }
    }
    async function ht(Se) {
      Ie.value = !0;
      try {
        const Z = await c(Se);
        ze.value = Z.gpu_types;
        const Fe = ze.value.find((_t) => _t.available);
        Fe ? M.value = Fe.id : M.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ie.value = !1;
      }
    }
    kt(W, async (Se) => {
      if (!Se || We.value) return;
      const Z = Ne.value.find((Fe) => Fe.id === E.value);
      Z && Z.data_center_id !== Se && (E.value = ""), await ht(Se);
    }), kt(E, async (Se) => {
      if (!Se) {
        ze.value = [], M.value = "";
        return;
      }
      if (We.value) return;
      const Z = Ne.value.find((Fe) => Fe.id === Se);
      Z && Z.data_center_id !== W.value ? W.value = Z.data_center_id : Z && await ht(Z.data_center_id);
    });
    async function at() {
      q.value = !0;
      try {
        z.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        q.value = !1;
      }
    }
    async function tt() {
      if (!(!M.value || !E.value)) {
        Y.value = !0, F.value = null;
        try {
          const Se = await y();
          de.value = Se, Se.can_export ? Se.warnings.models_without_sources.length > 0 ? be.value = !0 : await st() : Ee.value = !0;
        } catch (Se) {
          F.value = {
            status: "error",
            message: Se instanceof Error ? Se.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          Y.value = !1;
        }
      }
    }
    async function wt() {
      be.value = !1, await st();
    }
    async function $t() {
      try {
        const Se = await y();
        de.value = Se;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function st() {
      V.value = !0;
      try {
        let Se;
        if (le.value === "SPOT") {
          const Fe = ze.value.find((_t) => _t.id === M.value);
          Fe && (Se = te.value === "SECURE" ? Fe.secureSpotPrice : Fe.communitySpotPrice);
        }
        const Z = await u({
          gpu_type_id: M.value,
          pod_name: oe.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: te.value,
          pricing_type: le.value,
          spot_bid: Se,
          import_source: fe.value
        });
        F.value = Z, Z.status === "success" && Z.pod_id ? (Te.value = Z.pod_id, ie.value = !0, Ys(Z.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Z.message, "error");
      } catch (Se) {
        F.value = {
          status: "error",
          message: Se instanceof Error ? Se.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        V.value = !1;
      }
    }
    function Ys(Se) {
      pe(Se), O.value = window.setInterval(() => pe(Se), 3e3);
    }
    function fs() {
      O.value && (clearInterval(O.value), O.value = null);
    }
    async function pe(Se) {
      try {
        const Z = await m(Se);
        Be.value = Z, (Z.phase === "READY" || Z.phase === "ERROR" || Z.phase === "STOPPED") && (fs(), Z.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Z) {
        console.error("Failed to poll deployment status:", Z);
      }
    }
    function H() {
      ie.value = !1, fs(), Te.value = null, Be.value = null;
    }
    function ve() {
      var Se;
      (Se = Be.value) != null && Se.comfyui_url && window.open(Be.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function je(Se) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[Se || ""] || "Initializing...";
    }
    function ot(Se) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[Se || ""] ?? 10;
    }
    return et(async () => {
      try {
        const Se = await f(!0);
        Se.has_key && Se.key_preview && (A.value = `****${Se.key_preview}`, Se.valid ? (T.value = !0, U.value = Se.credit_balance ?? null, D.value = { type: "success", message: "Connected to RunPod" }, await P()) : Se.error && (D.value = { type: "error", message: Se.error }));
      } catch {
      }
    }), qs(() => {
      fs();
    }), (Se, Z) => {
      var Fe, _t, Ct, Jt, $s, Pt;
      return n(), i(j, null, [
        t("div", r4, [
          S(ft, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", c4, [
                t("div", u4, [
                  t("div", d4, [
                    Xe(t("input", {
                      "onUpdate:modelValue": Z[0] || (Z[0] = (Ve) => A.value = Ve),
                      type: C.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, m4), [
                      [la, A.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Z[1] || (Z[1] = (Ve) => C.value = !C.value),
                      title: C.value ? "Hide key" : "Show key"
                    }, d(C.value ? "👁" : "👁‍🗨"), 9, f4)
                  ]),
                  T.value ? h("", !0) : (n(), R(ge, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: I.value,
                    disabled: !A.value || I.value,
                    onClick: ke
                  }, {
                    default: g(() => [...Z[16] || (Z[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (n(), R(ge, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Ge
                  }, {
                    default: g(() => [...Z[17] || (Z[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                D.value ? (n(), i("div", {
                  key: 0,
                  class: Re(["connection-status", D.value.type])
                }, [
                  t("span", v4, d(D.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", p4, d(D.value.message), 1),
                  U.value !== null ? (n(), i("span", g4, " $" + d(U.value.toFixed(2)) + " credit ", 1)) : h("", !0)
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
          T.value ? (n(), R(ft, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", h4, [
                t("div", y4, [
                  Z[19] || (Z[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Xe(t("select", {
                    "onUpdate:modelValue": Z[2] || (Z[2] = (Ve) => W.value = Ve),
                    class: "config-select",
                    disabled: me.value
                  }, [
                    me.value ? (n(), i("option", _4, "Loading...")) : W.value ? h("", !0) : (n(), i("option", k4, "Select a region")),
                    (n(!0), i(j, null, he(ee.value, (Ve) => (n(), i("option", {
                      key: Ve.id,
                      value: Ve.id,
                      disabled: !Ve.available
                    }, d(Ve.id) + " (" + d(Ve.name) + ")" + d(Ve.available ? "" : " [Unavailable]"), 9, b4))), 128))
                  ], 8, w4), [
                    [bs, W.value]
                  ])
                ]),
                t("div", $4, [
                  Z[24] || (Z[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  We.value ? (n(), i("div", C4, "Loading volumes...")) : Me.value.length === 0 ? (n(), i(j, { key: 1 }, [
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
                  ], 64)) : (n(), i(j, { key: 2 }, [
                    Xe(t("select", {
                      "onUpdate:modelValue": Z[3] || (Z[3] = (Ve) => E.value = Ve),
                      class: "config-select"
                    }, [
                      (n(!0), i(j, null, he(Me.value, (Ve) => (n(), i("option", {
                        key: Ve.id,
                        value: Ve.id
                      }, d(Ve.name) + " (" + d(Ve.size_gb) + "GB) ", 9, I4))), 128))
                    ], 512), [
                      [bs, E.value]
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
                  Xe(t("select", {
                    "onUpdate:modelValue": Z[4] || (Z[4] = (Ve) => M.value = Ve),
                    class: "config-select",
                    disabled: Ie.value || !E.value
                  }, [
                    E.value ? Ie.value ? (n(), i("option", R4, "Loading GPUs...")) : ye.value.length === 0 ? (n(), i("option", M4, "No GPUs available in this region")) : h("", !0) : (n(), i("option", P4, "Select a volume first")),
                    (n(!0), i(j, null, he(ye.value, (Ve) => (n(), i("option", {
                      key: Ve.id,
                      value: Ve.id
                    }, d(Ve.displayName) + " (" + d(Ve.memoryInGb) + "GB) - $" + d(te.value === "SECURE" ? (Ve.securePrice ?? 0).toFixed(2) : (Ve.communityPrice ?? 0).toFixed(2)) + "/hr " + d(Ve.stockStatus ? `[${Ve.stockStatus}]` : ""), 9, D4))), 128))
                  ], 8, T4), [
                    [bs, M.value]
                  ])
                ]),
                t("div", L4, [
                  Z[26] || (Z[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", N4, [
                    t("label", U4, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[5] || (Z[5] = (Ve) => te.value = Ve),
                        value: "SECURE"
                      }, null, 512), [
                        [ls, te.value]
                      ]),
                      t("span", A4, "Secure ($" + d(Le("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", O4, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[6] || (Z[6] = (Ve) => te.value = Ve),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ls, te.value]
                      ]),
                      t("span", z4, "Community ($" + d(Le("COMMUNITY")) + "/hr)", 1)
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
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[7] || (Z[7] = (Ve) => le.value = Ve),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ls, le.value]
                      ]),
                      t("span", W4, "On-Demand ($" + d(Le("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", G4, [
                      Xe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[8] || (Z[8] = (Ve) => le.value = Ve),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ls, le.value]
                      ]),
                      t("span", j4, "Spot ($" + d(Le("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", H4, [
                  Z[28] || (Z[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Xe(t("input", {
                    "onUpdate:modelValue": Z[9] || (Z[9] = (Ve) => oe.value = Ve),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [qt, oe.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : h("", !0),
          T.value ? (n(), R(ft, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              X.value ? (n(), i("div", K4, "Loading remotes...")) : J.value.length === 0 ? (n(), i("div", q4, [
                Z[30] || (Z[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(ge, {
                  variant: "primary",
                  size: "xs",
                  onClick: Z[10] || (Z[10] = (Ve) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...Z[29] || (Z[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(j, { key: 2 }, [
                t("div", Y4, [
                  (n(!0), i(j, null, he(J.value, (Ve) => (n(), R(Qr, {
                    key: Ve.name,
                    remote: Ve,
                    "sync-status": G.value[Ve.name],
                    "is-selected": ae.value === Ve.name,
                    "is-fetching": re.value === Ve.name,
                    "is-pushing": B.value === Ve.name,
                    onFetch: ne,
                    onPush: ce,
                    onSelect: Ce
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                Pe.value && Pe.value.ahead > 0 ? (n(), i("div", J4, [
                  Z[31] || (Z[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", Q4, [
                    t("strong", null, d(Pe.value.ahead) + " unpushed commit" + d(Pe.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(ae.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(ge, {
                    variant: "primary",
                    size: "xs",
                    loading: B.value === ae.value,
                    onClick: Z[11] || (Z[11] = (Ve) => ae.value && ce(ae.value))
                  }, {
                    default: g(() => [
                      b(" Push to " + d(ae.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : h("", !0),
                t("div", X4, [
                  S(ge, {
                    variant: "link",
                    size: "xs",
                    onClick: Z[12] || (Z[12] = (Ve) => o("navigate", "remotes"))
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
          T.value ? (n(), R(ft, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", Z4, [
                q.value ? (n(), i("div", eI, "Loading environment summary...")) : z.value ? (n(), i(j, { key: 1 }, [
                  t("div", tI, [
                    Z[33] || (Z[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", sI, d(z.value.comfyui_version), 1)
                  ]),
                  t("div", oI, [
                    Z[34] || (Z[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", nI, d(z.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", aI, [
                    Z[35] || (Z[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", lI, d(z.value.model_count) + " models", 1)
                  ]),
                  z.value.models_with_sources > 0 ? (n(), i("div", iI, [
                    t("span", rI, "└─ " + d(z.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : h("", !0),
                  z.value.models_without_sources > 0 ? (n(), i("div", cI, [
                    t("span", uI, "└─ " + d(z.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : h("", !0),
                  t("div", dI, [
                    Z[36] || (Z[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", mI, d(z.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", fI, [
                    Z[37] || (Z[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", vI, "~" + d(z.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : h("", !0)
              ])
            ]),
            _: 1
          })) : h("", !0),
          T.value && N.value ? (n(), R(ft, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var Ve, os;
              return [
                t("div", pI, [
                  t("div", gI, [
                    t("div", hI, [
                      Z[42] || (Z[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", yI, [
                        Z[38] || (Z[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", wI, "$" + d(N.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", _I, [
                        Z[39] || (Z[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", kI, "$" + d(N.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", bI, [
                        Z[40] || (Z[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", $I, "$" + d(N.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Z[43] || (Z[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", CI, [
                        Z[41] || (Z[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", xI, "~$" + d(N.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", SI, [
                      Z[45] || (Z[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", II, [
                        t("span", null, d(((Ve = ze.value.find((vs) => vs.id === M.value)) == null ? void 0 : Ve.displayName) || "GPU") + " (" + d(((os = ze.value.find((vs) => vs.id === M.value)) == null ? void 0 : os.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", EI, [
                        t("span", null, "Region: " + d(W.value), 1)
                      ]),
                      $e.value ? (n(), i("div", TI, [
                        t("span", null, "Volume: " + d($e.value.name), 1)
                      ])) : h("", !0),
                      le.value === "SPOT" ? (n(), i("div", PI, [...Z[44] || (Z[44] = [
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
            S(ge, {
              variant: "primary",
              size: "md",
              loading: Y.value || V.value,
              disabled: !Ae.value,
              onClick: tt
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
                b(" " + d(Y.value ? "Validating..." : V.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : h("", !0),
          F.value ? (n(), R(ft, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              S(It, {
                status: F.value.status === "success" ? "synced" : "broken"
              }, io({
                icon: g(() => [
                  b(d(F.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(d(F.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(d(F.value.message), 1)
                ]),
                actions: g(() => [
                  S(ge, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Z[13] || (Z[13] = (Ve) => F.value = null)
                  }, {
                    default: g(() => [...Z[47] || (Z[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                F.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    S(pt, {
                      label: "Pod ID:",
                      value: F.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : h("", !0)
        ]),
        ie.value ? (n(), R(yt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Fe = Be.value) == null ? void 0 : Fe.phase) === "READY" || ((_t = Be.value) == null ? void 0 : _t.phase) === "ERROR" || ((Ct = Be.value) == null ? void 0 : Ct.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: H
        }, io({
          body: g(() => {
            var Ve, os, vs, ro, co, uo, Js, mo, fo, vo, po, go;
            return [
              t("div", MI, [
                t("div", DI, [
                  t("div", {
                    class: Re(["phase-icon", (os = (Ve = Be.value) == null ? void 0 : Ve.phase) == null ? void 0 : os.toLowerCase()])
                  }, [
                    ((vs = Be.value) == null ? void 0 : vs.phase) === "READY" ? (n(), i("span", LI, "✓")) : ((ro = Be.value) == null ? void 0 : ro.phase) === "ERROR" ? (n(), i("span", NI, "✕")) : ((co = Be.value) == null ? void 0 : co.phase) === "STOPPED" ? (n(), i("span", UI, "○")) : (n(), i("span", AI, "⟳"))
                  ], 2),
                  t("div", OI, [
                    t("div", zI, d(je((uo = Be.value) == null ? void 0 : uo.phase)), 1),
                    t("div", FI, d(((Js = Be.value) == null ? void 0 : Js.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(ra, {
                  progress: ot((mo = Be.value) == null ? void 0 : mo.phase),
                  variant: ((fo = Be.value) == null ? void 0 : fo.phase) === "ERROR" ? "error" : ((vo = Be.value) == null ? void 0 : vo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((po = Be.value) == null ? void 0 : po.phase) === "READY" ? (n(), i("div", VI, [
                  S(ge, {
                    variant: "primary",
                    size: "md",
                    onClick: ve
                  }, {
                    default: g(() => [...Z[48] || (Z[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : h("", !0),
                t("div", BI, [
                  (go = Be.value) != null && go.console_url ? (n(), i("a", {
                    key: 0,
                    href: Be.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, WI)) : h("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Jt = Be.value) == null ? void 0 : Jt.phase) === "READY" || (($s = Be.value) == null ? void 0 : $s.phase) === "ERROR" || ((Pt = Be.value) == null ? void 0 : Pt.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              S(ge, {
                variant: "ghost",
                size: "xs",
                onClick: H
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
        Ee.value && de.value ? (n(), R(Kr, {
          key: 1,
          issues: de.value.blocking_issues,
          onClose: Z[14] || (Z[14] = (Ve) => Ee.value = !1)
        }, null, 8, ["issues"])) : h("", !0),
        be.value && de.value ? (n(), R(qr, {
          key: 2,
          models: de.value.warnings.models_without_sources,
          onConfirm: wt,
          onCancel: Z[15] || (Z[15] = (Ve) => be.value = !1),
          onRevalidate: $t
        }, null, 8, ["models"])) : h("", !0)
      ], 64);
    };
  }
}), jI = /* @__PURE__ */ _e(GI, [["__scopeId", "data-v-522cd4d9"]]), HI = { class: "worker-header" }, KI = { class: "worker-status" }, qI = { class: "worker-name" }, YI = { class: "worker-actions" }, JI = { class: "worker-details" }, QI = { class: "detail-item" }, XI = { class: "detail-value" }, ZI = {
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
}, i6 = /* @__PURE__ */ we({
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
          e.worker.status === "online" ? (n(), R(ge, {
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
          S(ge, {
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
      t("div", JI, [
        t("span", QI, [
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
}, b6 = { class: "modal-actions" }, $6 = /* @__PURE__ */ we({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = lt(), l = Ks({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = _(!1), c = _(!1), u = _(!1), m = _(null), f = L(() => l.host && l.port && l.apiKey), v = L(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, w) => (n(), R(yt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: w[5] || (w[5] = (x) => p.$emit("close"))
    }, {
      body: g(() => [
        t("div", c6, [
          t("div", u6, [
            t("div", d6, [
              w[6] || (w[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Xe(t("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [qt, l.name]
              ])
            ]),
            t("div", m6, [
              t("div", f6, [
                w[7] || (w[7] = t("label", { class: "form-label" }, "Host", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": w[1] || (w[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [qt, l.host]
                ])
              ]),
              t("div", v6, [
                w[8] || (w[8] = t("label", { class: "form-label" }, "Port", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": w[2] || (w[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    qt,
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
                Xe(t("input", {
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
          S(ge, {
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
          S(ge, {
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
}, D6 = { class: "selected-worker" }, L6 = { class: "selected-name" }, N6 = { class: "selected-address" }, U6 = { class: "form-row" }, A6 = { class: "api-key-wrapper" }, O6 = ["type"], z6 = { class: "result-icon" }, F6 = { class: "result-message" }, V6 = { class: "modal-actions" }, B6 = /* @__PURE__ */ we({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = lt(), l = _(null), r = _(""), c = _(!1), u = _(!1), m = _(null), f = _(null);
    async function v(k) {
      var p;
      l.value = k, r.value = "", f.value = null, await St(), (p = m.value) == null || p.focus();
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
    return (k, p) => (n(), R(yt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (w) => k.$emit("close"))
    }, {
      body: g(() => [
        t("div", x6, [
          e.workers.length > 0 ? (n(), i("div", S6, [
            (n(!0), i(j, null, he(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", I6, [
                t("span", E6, d(w.name), 1),
                t("span", T6, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", P6, d(w.gpu_info), 1)) : h("", !0)
              ]),
              S(ge, {
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
                Xe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: m,
                  "onUpdate:modelValue": p[0] || (p[0] = (w) => r.value = w),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: ts(y, ["enter"])
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
          l.value ? (n(), R(ge, {
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
          l.value ? (n(), R(ge, {
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
}, Y6 = { class: "section" }, J6 = { class: "mode-options" }, Q6 = { class: "mode-option" }, X6 = ["disabled"], Z6 = { class: "mode-option" }, eE = { class: "section" }, tE = {
  key: 0,
  class: "section"
}, sE = { class: "summary-row" }, oE = {
  key: 1,
  class: "sync-warning"
}, nE = { class: "warning-content" }, aE = { class: "modal-actions" }, lE = /* @__PURE__ */ we({
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
    } = lt(), v = _([]), y = _({}), k = _(!1), p = _(null), w = _(null), x = _(null), $ = _(o.worker.mode || "native"), C = _(""), A = _(null), T = _(!1), I = L(() => p.value && y.value[p.value] || null), D = L(() => {
      if (!p.value) return null;
      const J = v.value.find((G) => G.name === p.value);
      return (J == null ? void 0 : J.fetch_url) || null;
    }), U = L(() => D.value && !T.value);
    async function W() {
      k.value = !0;
      try {
        const J = await l();
        v.value = J.remotes, await Promise.all(
          J.remotes.map(async (X) => {
            const ae = await r(X.name);
            ae && (y.value[X.name] = ae);
          })
        );
        const G = J.remotes.find((X) => X.is_default);
        G ? p.value = G.name : J.remotes.length > 0 && (p.value = J.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        k.value = !1;
      }
    }
    async function E() {
      try {
        A.value = await m();
      } catch {
      }
    }
    async function M(J) {
      w.value = J;
      try {
        await c(J);
        const G = await r(J);
        G && (y.value[J] = G), a("toast", `Fetched from ${J}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function te(J) {
      x.value = J;
      try {
        await u(J, { force: !1 });
        const G = await r(J);
        G && (y.value[J] = G), a("toast", `Pushed to ${J}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function le(J) {
      p.value = J;
    }
    async function oe() {
      if (D.value) {
        T.value = !0;
        try {
          const J = await f(o.worker.name, {
            import_source: D.value,
            mode: $.value,
            name: C.value || void 0
          });
          J.id ? (a("toast", `Deployment started: ${J.name || J.id}`, "success"), a("deployed")) : J.status === "error" ? a("toast", J.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (J) {
          a("toast", J instanceof Error ? J.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return et(() => {
      W(), E();
    }), (J, G) => (n(), R(yt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: G[5] || (G[5] = (X) => J.$emit("close"))
    }, {
      body: g(() => [
        t("div", G6, [
          t("div", j6, [
            G[7] || (G[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            k.value ? (n(), i("div", H6, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", K6, [...G[6] || (G[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", q6, [
              (n(!0), i(j, null, he(v.value, (X) => (n(), R(Qr, {
                key: X.name,
                remote: X,
                "sync-status": y.value[X.name],
                "is-selected": p.value === X.name,
                "is-fetching": w.value === X.name,
                "is-pushing": x.value === X.name,
                onFetch: M,
                onPush: te,
                onSelect: le
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", Y6, [
            G[10] || (G[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", J6, [
              t("label", Q6, [
                Xe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": G[0] || (G[0] = (X) => $.value = X),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, X6), [
                  [ls, $.value]
                ]),
                G[8] || (G[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", Z6, [
                Xe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": G[1] || (G[1] = (X) => $.value = X),
                  value: "native"
                }, null, 512), [
                  [ls, $.value]
                ]),
                G[9] || (G[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", eE, [
            G[11] || (G[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Xe(t("input", {
              "onUpdate:modelValue": G[2] || (G[2] = (X) => C.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [qt, C.value]
            ])
          ]),
          A.value ? (n(), i("div", tE, [
            G[12] || (G[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", sE, " ComfyUI: " + d(A.value.comfyui_version) + " • " + d(A.value.node_count) + " nodes • " + d(A.value.model_count) + " models • " + d(A.value.workflow_count) + " workflows ", 1)
          ])) : h("", !0),
          I.value && I.value.ahead > 0 ? (n(), i("div", oE, [
            G[14] || (G[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", nE, [
              t("strong", null, d(I.value.ahead) + " unpushed commit" + d(I.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(ge, {
              variant: "primary",
              size: "xs",
              loading: x.value === p.value,
              onClick: G[3] || (G[3] = (X) => p.value && te(p.value))
            }, {
              default: g(() => [...G[13] || (G[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", aE, [
          S(ge, {
            variant: "ghost",
            size: "sm",
            onClick: G[4] || (G[4] = (X) => J.$emit("close"))
          }, {
            default: g(() => [...G[15] || (G[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(ge, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !U.value || T.value,
            onClick: oe
          }, {
            default: g(() => [...G[16] || (G[16] = [
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
}, pE = { class: "scan-icon" }, gE = { class: "scan-message" }, hE = /* @__PURE__ */ we({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: c
    } = lt(), u = _([]), m = _([]), f = _(!1), v = _(!1), y = _(null), k = _(!1), p = _(!1), w = _(null), x = _(null);
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
          (M) => !u.value.some((te) => te.host === M.host && te.port === M.port)
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
    async function A(W) {
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
    function D(W) {
      w.value = W;
    }
    function U() {
      w.value = null, o("deployed");
    }
    return et(() => {
      $();
    }), (W, E) => (n(), i("div", rE, [
      t("div", cE, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", uE, [
          S(ge, {
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
          S(ge, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (M) => k.value = !0)
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
          (n(!0), i(j, null, he(u.value, (M) => (n(), R(r6, {
            key: M.name,
            worker: M,
            "is-action-loading": y.value === M.name,
            onDeploy: D,
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
          onClick: E[1] || (E[1] = (M) => x.value = null)
        }, "×")
      ], 2)) : h("", !0),
      p.value ? (n(), R(W6, {
        key: 1,
        workers: m.value,
        onClose: E[2] || (E[2] = (M) => p.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : h("", !0),
      k.value ? (n(), R(C6, {
        key: 2,
        onClose: E[3] || (E[3] = (M) => k.value = !1),
        onAdd: A
      })) : h("", !0),
      w.value ? (n(), R(iE, {
        key: 3,
        worker: w.value,
        onClose: E[4] || (E[4] = (M) => w.value = null),
        onToast: E[5] || (E[5] = (M, te) => o("toast", M, te)),
        onDeployed: U
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
}, CE = { class: "form-row" }, xE = { class: "token-wrapper" }, SE = ["type"], IE = { class: "result-icon" }, EE = { class: "result-message" }, TE = { class: "token-actions" }, PE = /* @__PURE__ */ we({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = _E(), { getRemotes: u, testGitAuth: m } = lt(), f = _(""), v = _(!1), y = _(!1), k = _(null), p = _(!1), w = L(() => c());
    et(async () => {
      var T;
      const A = a();
      A && (f.value = A);
      try {
        const D = (T = (await u()).remotes) == null ? void 0 : T.find((U) => U.name === "origin");
        D && Xr(D.url) && (p.value = !0);
      } catch {
      }
    });
    async function x() {
      if (f.value) {
        y.value = !0, k.value = null;
        try {
          const A = await m(f.value);
          k.value = {
            type: A.status === "success" ? "success" : "error",
            message: A.message
          };
        } catch (A) {
          k.value = {
            type: "error",
            message: A instanceof Error ? A.message : "Connection test failed"
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
    return (A, T) => (n(), R(yt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (I) => A.$emit("close"))
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
                Xe(t("input", {
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
              S(ge, {
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
              w.value ? (n(), R(ge, {
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
        S(ge, {
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
}), RE = /* @__PURE__ */ _e(PE, [["__scopeId", "data-v-b21588ad"]]), ME = /* @__PURE__ */ we({
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
    } = Jr(), k = _(!1), p = _(!1), w = _("instances"), x = _(null), $ = _(null), C = L(() => [
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
    async function A(W) {
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
    async function D() {
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
    async function U() {
      await c(), w.value = "instances";
    }
    return et(() => {
      c(), v();
    }), qs(() => {
      y();
    }), (W, E) => (n(), i(j, null, [
      S(Ft, null, {
        header: g(() => [
          S(Vt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (M) => k.value = !0)
          }, {
            actions: g(() => [
              S(ge, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (M) => p.value = !0)
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
            "onUpdate:modelValue": E[2] || (E[2] = (M) => w.value = M),
            tabs: C.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          w.value === "instances" ? (n(), R(q8, {
            key: 0,
            instances: qe(a),
            "is-loading": qe(l),
            "action-loading-id": x.value,
            onRefresh: qe(c),
            onStop: A,
            onStart: T,
            onTerminate: I
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : h("", !0),
          w.value === "runpod" ? (n(), R(jI, {
            key: 1,
            onToast: E[3] || (E[3] = (M, te) => o("toast", M, te)),
            onNavigate: E[4] || (E[4] = (M) => o("navigate", M)),
            onDeployed: U
          })) : h("", !0),
          w.value === "custom" ? (n(), R(yE, {
            key: 2,
            onToast: E[5] || (E[5] = (M, te) => o("toast", M, te)),
            onDeployed: U
          })) : h("", !0)
        ]),
        _: 1
      }),
      $.value ? (n(), R(vl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: D,
        onCancel: E[6] || (E[6] = (M) => $.value = null)
      }, null, 8, ["message"])) : h("", !0),
      S(ms, {
        show: k.value,
        title: "Deploy to Cloud",
        onClose: E[7] || (E[7] = (M) => k.value = !1)
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
      p.value ? (n(), R(RE, {
        key: 1,
        onClose: E[8] || (E[8] = (M) => p.value = !1),
        onSaved: E[9] || (E[9] = (M) => o("toast", "GitHub token saved", "success"))
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
}, YE = { class: "change-item" }, JE = /* @__PURE__ */ we({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = lt(), a = _(null), l = _(!0), r = L(() => {
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
    }), (u, m) => (n(), R(yt, {
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
              (n(!0), i(j, null, he(a.value.refs, (p) => (n(), i("span", {
                key: p,
                class: "ref-badge"
              }, d(p), 1))), 128))
            ])) : h("", !0)
          ]),
          S(De, {
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
              S(Zo, { variant: "section" }, {
                default: g(() => [...m[6] || (m[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, he(a.value.changes.workflows.added, (y) => (n(), i("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                m[7] || (m[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(y), 1)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.workflows.modified, (y) => (n(), i("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(y), 1)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.workflows.deleted, (y) => (n(), i("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(y), 1)
              ]))), 128))
            ])) : h("", !0),
            c.value ? (n(), i("div", HE, [
              S(Zo, { variant: "section" }, {
                default: g(() => [...m[10] || (m[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, he(a.value.changes.nodes.added, (y) => (n(), i("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(y.name), 1),
                y.version ? (n(), i("span", KE, "(" + d(y.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (n(!0), i(j, null, he(a.value.changes.nodes.removed, (y) => (n(), i("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(y.name), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", qE, [
              S(Zo, { variant: "section" }, {
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
        S(De, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...m[15] || (m[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        S(De, {
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
}), QE = /* @__PURE__ */ _e(JE, [["__scopeId", "data-v-d256ff6d"]]), XE = { class: "popover-header" }, ZE = { class: "popover-body" }, eT = {
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
}, TT = { class: "error-header" }, PT = { class: "error-title" }, RT = { class: "issues-list" }, MT = { class: "workflow-state" }, DT = { class: "message-section" }, LT = { class: "popover-footer" }, NT = /* @__PURE__ */ we({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = lt(), r = _(""), c = _(!1), u = _(!1), m = L(() => {
      if (!o.status) return !1;
      const w = o.status.workflows;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || o.status.has_changes;
    }), f = L(() => {
      if (!o.status) return !1;
      const w = o.status.workflows, x = o.status.git_changes;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = L(() => {
      var w;
      return (w = o.status) != null && w.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), y = L(() => v.value.length > 0), k = L(() => y.value && !u.value);
    async function p() {
      var w, x, $, C;
      if (!(y.value && !u.value) && !(!m.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const A = await l(r.value.trim(), u.value);
          if (A.status === "success") {
            const T = `Committed: ${((w = A.summary) == null ? void 0 : w.new) || 0} new, ${((x = A.summary) == null ? void 0 : x.modified) || 0} modified, ${(($ = A.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            a("committed", { success: !0, message: T });
          } else if (A.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (A.status === "blocked") {
            const T = ((C = A.issues) == null ? void 0 : C.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: A.message || "Commit failed" });
        } catch (A) {
          a("committed", { success: !1, message: A instanceof Error ? A.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (w, x) => e.asModal ? (n(), R(Tt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = ($) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = gt(() => {
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
                (n(!0), i(j, null, he(v.value, ($) => (n(), i("div", {
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
            S(De, {
              variant: "secondary",
              onClick: x[3] || (x[3] = ($) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(De, {
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
            (n(!0), i(j, null, he(v.value, ($) => (n(), i("div", {
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
        S(De, {
          variant: "secondary",
          onClick: x[9] || (x[9] = ($) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(De, {
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
}), Zr = /* @__PURE__ */ _e(NT, [["__scopeId", "data-v-5f897631"]]), UT = { class: "modal-header" }, AT = { class: "modal-body" }, OT = { class: "switch-message" }, zT = { class: "switch-details" }, FT = { class: "modal-actions" }, VT = /* @__PURE__ */ we({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(Tt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = gt(() => {
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
            S(ge, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ge, {
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
}, GT = { class: "modal-content" }, jT = { class: "modal-body" }, HT = { class: "progress-info" }, KT = { class: "progress-percentage" }, qT = { class: "progress-state" }, YT = { class: "switch-steps" }, JT = { class: "step-icon" }, QT = { class: "step-label" }, XT = /* @__PURE__ */ we({
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
      return r.map((u, m) => {
        let f = "pending", v = "○";
        return m < c ? (f = "completed", v = "✓") : m === c && (f = "active", v = "⟳"), {
          ...u,
          status: f,
          icon: v
        };
      });
    });
    return (r, c) => (n(), R(Tt, { to: "body" }, [
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
              (n(!0), i(j, null, he(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Re(["switch-step", u.status])
              }, [
                t("span", JT, d(u.icon), 1),
                t("span", QT, d(u.label), 1)
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
}, a7 = { class: "node-list" }, l7 = { class: "modal-actions" }, i7 = /* @__PURE__ */ we({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(Tt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = gt(() => {
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
                (n(!0), i(j, null, he(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", n7, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", a7, [
                (n(!0), i(j, null, he(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
            S(ge, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ge, {
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
], u7 = "v0.0.22", d7 = "Akatz", m7 = { class: "social-buttons" }, f7 = ["title", "aria-label", "onClick"], v7 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, p7 = ["d"], g7 = ["title", "aria-label", "onClick"], h7 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, y7 = ["d"], w7 = /* @__PURE__ */ we({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", m7, [
      (n(!0), i(j, null, he(qe(c7), (l) => (n(), i(j, {
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
}), ec = /* @__PURE__ */ _e(w7, [["__scopeId", "data-v-4f846342"]]), _7 = { class: "footer-info" }, k7 = { class: "version" }, b7 = { class: "made-by" }, $7 = /* @__PURE__ */ we({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (n(), i("div", _7, [
      t("span", k7, d(qe(u7)), 1),
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
        b(" by " + d(qe(d7)), 1)
      ])
    ]));
  }
}), tc = /* @__PURE__ */ _e($7, [["__scopeId", "data-v-8bc3db0a"]]), C7 = /* @__PURE__ */ we({
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
    return (r, c) => (n(), R(yt, {
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
          S(De, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: g(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(De, {
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
}, q7 = { class: "form-field" }, Y7 = { class: "form-field" }, J7 = ["value"], Q7 = { class: "form-field" }, X7 = ["disabled"], Z7 = ["value"], eP = { class: "form-field" }, tP = ["value"], sP = { class: "form-field form-field--checkbox" }, oP = { class: "form-checkbox" }, nP = {
  key: 0,
  class: "form-error"
}, aP = {
  key: 1,
  class: "env-creating"
}, lP = { class: "creating-intro" }, iP = {
  key: 3,
  class: "env-import"
}, rP = { class: "wizard-footer" }, cP = { class: "wizard-footer-actions" }, wo = 10, uP = 600 * 1e3, ci = 1800 * 1e3, dP = /* @__PURE__ */ we({
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
    } = lt(), y = _(o.initialStep || 1), k = _(null), p = _("landing"), w = _(!1), x = _(!1), $ = _(!1), C = _(!1), A = _(null), T = _(o.initialStep === 2), I = _(o.defaultPath), D = _(!!o.detectedModelsDir), U = _(o.detectedModelsDir || ""), W = _(null), E = _(null), M = _(null), te = _(null), le = _("my-new-env"), oe = _(jr), J = _("latest"), G = _(Hr), X = _(!0), ae = _(null), re = _(null), B = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ee = _(!1), me = _(!1), Ne = _(!1), We = _({ progress: 0, message: "" }), ze = _({ progress: 0, message: "" }), Ie = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], z = _(0), q = _(null), V = _(0), F = _(null), ie = L(() => {
      var ne, ce;
      const N = (ne = I.value) == null ? void 0 : ne.trim(), P = !W.value, se = !D.value || !E.value && ((ce = U.value) == null ? void 0 : ce.trim());
      return N && P && se;
    }), Te = L(() => {
      var N;
      return (N = le.value) == null ? void 0 : N.trim();
    }), Be = L(() => !!(y.value === 2 || re.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = L(() => re.value || o.workspacePath || null);
    async function Y() {
      var N;
      if (W.value = null, !!((N = I.value) != null && N.trim()))
        try {
          const P = await c({ path: I.value, type: "workspace" });
          P.valid || (W.value = P.error || "Invalid path");
        } catch (P) {
          W.value = P instanceof Error ? P.message : "Validation failed";
        }
    }
    async function de() {
      var N;
      if (E.value = null, M.value = null, te.value = null, !!((N = U.value) != null && N.trim()))
        try {
          const P = await c({ path: U.value, type: "models" });
          if (P.valid)
            te.value = P.model_count ?? null;
          else if (E.value = P.error || "Invalid path", P.suggestion) {
            M.value = P.suggestion, U.value = P.suggestion, E.value = null;
            const se = await c({ path: P.suggestion, type: "models" });
            se.valid && (te.value = se.model_count ?? null);
          }
        } catch (P) {
          E.value = P instanceof Error ? P.message : "Validation failed";
        }
    }
    async function Ee() {
      var N, P, se, ne, ce;
      if (W.value = null, E.value = null, await Y(), (N = W.value) != null && N.includes("already exists")) {
        W.value = null, re.value = ((P = I.value) == null ? void 0 : P.trim()) || o.defaultPath, y.value = 2, $e();
        return;
      }
      if (!W.value && !(D.value && ((se = U.value) != null && se.trim()) && (await de(), E.value))) {
        me.value = !0;
        try {
          await l({
            workspace_path: ((ne = I.value) == null ? void 0 : ne.trim()) || o.defaultPath,
            models_directory: D.value && ((ce = U.value) == null ? void 0 : ce.trim()) || null
          }), z.value = 0, q.value = Date.now();
          const Ce = setInterval(async () => {
            var ke;
            if (q.value && Date.now() - q.value > uP) {
              clearInterval(Ce), me.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ge = await r();
              if (z.value = 0, Ge.state === "idle" && me.value) {
                clearInterval(Ce), me.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              We.value = { progress: Ge.progress, message: Ge.message }, Ge.state === "complete" ? (clearInterval(Ce), me.value = !1, re.value = ((ke = I.value) == null ? void 0 : ke.trim()) || o.defaultPath, y.value = 2, $e()) : Ge.state === "error" && (clearInterval(Ce), me.value = !1, W.value = Ge.error || "Workspace creation failed");
            } catch (Ge) {
              z.value++, console.warn(`Polling failure ${z.value}/${wo}:`, Ge), z.value >= wo && (clearInterval(Ce), me.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ce) {
          me.value = !1, W.value = Ce instanceof Error ? Ce.message : "Failed to create workspace";
        }
      }
    }
    async function be() {
      Ne.value = !0, ae.value = null;
      try {
        const N = {
          name: le.value.trim() || "my-new-env",
          python_version: oe.value,
          comfyui_version: J.value,
          torch_backend: G.value,
          switch_after: X.value,
          workspace_path: re.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(N)).status === "started") {
          V.value = 0, F.value = Date.now();
          const se = setInterval(async () => {
            if (F.value && Date.now() - F.value > ci) {
              clearInterval(se), Ne.value = !1, ae.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const ne = await m();
              if (V.value = 0, ne.state === "idle" && Ne.value) {
                clearInterval(se), Ne.value = !1, ae.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ze.value = {
                progress: ne.progress ?? 0,
                message: ne.message,
                phase: ne.phase
              }, ne.state === "complete") {
                clearInterval(se), Ne.value = !1;
                const ce = ne.environment_name || N.name;
                X.value ? a("complete", ce, re.value) : (p.value = "landing", a("environment-created-no-switch", ce));
              } else ne.state === "error" && (clearInterval(se), Ne.value = !1, ae.value = ne.error || "Environment creation failed");
            } catch (ne) {
              V.value++, console.warn(`Polling failure ${V.value}/${wo}:`, ne), V.value >= wo && (clearInterval(se), Ne.value = !1, ae.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (N) {
        Ne.value = !1, ae.value = N instanceof Error ? N.message : "Unknown error";
      }
    }
    async function $e() {
      ee.value = !0;
      try {
        B.value = await v();
      } catch (N) {
        console.error("Failed to load ComfyUI releases:", N);
      } finally {
        ee.value = !1;
      }
    }
    function Me() {
      k.value && a("switch-environment", k.value, re.value);
    }
    function ye() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : y.value === 2 && o.setupState === "no_workspace" && (y.value = 1);
    }
    function Pe(N, P) {
      x.value = !1, P ? a("complete", N, re.value) : (a("environment-created-no-switch", N), p.value = "landing");
    }
    function fe() {
    }
    et(async () => {
      if (o.detectedModelsDir && (U.value = o.detectedModelsDir), o.workspacePath && (re.value = o.workspacePath), y.value === 2) {
        $e();
        const N = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Ae(), clearTimeout(N), T.value = !1;
      }
    });
    async function Ae() {
      try {
        const N = await m();
        if (console.log("[ComfyGit] Create progress check:", N.state, N), N.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", N.environment_name), p.value = "create", Ne.value = !0, le.value = N.environment_name || "my-new-env", ze.value = {
            progress: N.progress ?? 0,
            message: N.message,
            phase: N.phase
          }, Le();
          return;
        }
      } catch (N) {
        console.log("[ComfyGit] Create progress check failed:", N);
      }
      try {
        const N = await f();
        console.log("[ComfyGit] Import progress check:", N.state, N), N.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", N.environment_name), A.value = {
          message: N.message || "Importing...",
          phase: N.phase || "",
          progress: N.progress ?? 0,
          environmentName: N.environment_name || ""
        }, C.value = !0, p.value = "import", x.value = !0);
      } catch (N) {
        console.log("[ComfyGit] Import progress check failed:", N);
      }
    }
    async function Le() {
      V.value = 0, F.value = Date.now();
      let N = null;
      const P = async () => {
        if (F.value && Date.now() - F.value > ci)
          return N && clearInterval(N), Ne.value = !1, ae.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const ne = await m();
          if (V.value = 0, ne.state === "idle" && Ne.value)
            return N && clearInterval(N), Ne.value = !1, ae.value = "Environment creation was interrupted. Please try again.", !1;
          if (ze.value = {
            progress: ne.progress ?? 0,
            message: ne.message,
            phase: ne.phase
          }, ne.state === "complete") {
            N && clearInterval(N), Ne.value = !1;
            const ce = ne.environment_name || le.value;
            return a("complete", ce, re.value), !1;
          } else if (ne.state === "error")
            return N && clearInterval(N), Ne.value = !1, ae.value = ne.error || "Environment creation failed", !1;
          return !0;
        } catch (ne) {
          return V.value++, console.warn(`Polling failure ${V.value}/${wo}:`, ne), V.value >= wo ? (N && clearInterval(N), Ne.value = !1, ae.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await P() && (N = setInterval(async () => {
        !await P() && N && clearInterval(N);
      }, 2e3));
    }
    return (N, P) => (n(), i(j, null, [
      S(yt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: P[15] || (P[15] = (se) => N.$emit("close"))
      }, {
        header: g(() => [
          P[20] || (P[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", S7, [
            S(ec),
            P[19] || (P[19] = t("span", { class: "header-divider" }, null, -1)),
            Be.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: P[0] || (P[0] = (se) => w.value = !0)
            }, [...P[17] || (P[17] = [
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
              onClick: P[1] || (P[1] = (se) => N.$emit("close")),
              title: "Close"
            }, [...P[18] || (P[18] = [
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
          var se;
          return [
            y.value === 1 ? (n(), i("div", I7, [
              P[24] || (P[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", E7, [
                P[21] || (P[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": P[2] || (P[2] = (ne) => I.value = ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, T7), [
                  [qt, I.value]
                ]),
                W.value ? (n(), i("p", P7, d(W.value), 1)) : h("", !0)
              ]),
              t("div", R7, [
                t("label", M7, [
                  Xe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": P[3] || (P[3] = (ne) => D.value = ne)
                  }, null, 512), [
                    [un, D.value]
                  ]),
                  P[22] || (P[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (n(), i("div", D7, [
                P[23] || (P[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Xe(t("input", {
                  "onUpdate:modelValue": P[4] || (P[4] = (ne) => U.value = ne),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, L7), [
                  [qt, U.value]
                ]),
                e.detectedModelsDir && !U.value ? (n(), i("p", N7, " Detected: " + d(e.detectedModelsDir), 1)) : h("", !0),
                M.value ? (n(), i("p", U7, " Did you mean: " + d(M.value), 1)) : h("", !0),
                E.value ? (n(), i("p", A7, d(E.value), 1)) : h("", !0),
                te.value !== null && !E.value ? (n(), i("p", O7, " Found " + d(te.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              me.value ? (n(), R(Hn, {
                key: 1,
                progress: We.value.progress,
                message: We.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            y.value === 2 ? (n(), i("div", z7, [
              T.value ? (n(), i("div", F7, [...P[25] || (P[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (n(), i("div", V7, [
                  t("div", B7, [
                    P[27] || (P[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    P[28] || (P[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: P[5] || (P[5] = (ne) => $.value = !0),
                      title: "Dismiss"
                    }, [...P[26] || (P[26] = [
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
                  P[29] || (P[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  P[30] || (P[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                p.value === "landing" ? (n(), i("div", W7, [
                  P[34] || (P[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: P[6] || (P[6] = (ne) => p.value = "create")
                  }, [...P[31] || (P[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: P[7] || (P[7] = (ne) => {
                      C.value = !1, p.value = "import";
                    })
                  }, [...P[32] || (P[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (se = o.existingEnvironments) != null && se.length ? (n(), i(j, { key: 0 }, [
                    P[33] || (P[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", G7, [
                      (n(!0), i(j, null, he(o.existingEnvironments, (ne) => (n(), i("label", {
                        key: ne,
                        class: Re(["env-option", { selected: k.value === ne }])
                      }, [
                        Xe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: ne,
                          "onUpdate:modelValue": P[8] || (P[8] = (ce) => k.value = ce)
                        }, null, 8, j7), [
                          [ls, k.value]
                        ]),
                        t("span", H7, d(ne), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : p.value === "create" ? (n(), i("div", K7, [
                  Ne.value ? (n(), i("div", aP, [
                    t("p", lP, [
                      P[41] || (P[41] = b(" Creating environment ", -1)),
                      t("strong", null, d(le.value), 1),
                      P[42] || (P[42] = b("... ", -1))
                    ]),
                    S(Hn, {
                      progress: ze.value.progress,
                      message: ze.value.message,
                      "current-phase": ze.value.phase,
                      "show-steps": !0,
                      steps: Ie
                    }, null, 8, ["progress", "message", "current-phase"]),
                    P[43] || (P[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(j, { key: 0 }, [
                    P[40] || (P[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", q7, [
                      P[35] || (P[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Xe(t("input", {
                        "onUpdate:modelValue": P[9] || (P[9] = (ne) => le.value = ne),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [qt, le.value]
                      ])
                    ]),
                    t("div", Y7, [
                      P[36] || (P[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Xe(t("select", {
                        "onUpdate:modelValue": P[10] || (P[10] = (ne) => oe.value = ne),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, he(qe(Gr), (ne) => (n(), i("option", {
                          key: ne,
                          value: ne
                        }, d(ne), 9, J7))), 128))
                      ], 512), [
                        [bs, oe.value]
                      ])
                    ]),
                    t("div", Q7, [
                      P[37] || (P[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Xe(t("select", {
                        "onUpdate:modelValue": P[11] || (P[11] = (ne) => J.value = ne),
                        class: "form-select",
                        disabled: ee.value
                      }, [
                        (n(!0), i(j, null, he(B.value, (ne) => (n(), i("option", {
                          key: ne.tag_name,
                          value: ne.tag_name
                        }, d(ne.name), 9, Z7))), 128))
                      ], 8, X7), [
                        [bs, J.value]
                      ])
                    ]),
                    t("div", eP, [
                      P[38] || (P[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Xe(t("select", {
                        "onUpdate:modelValue": P[12] || (P[12] = (ne) => G.value = ne),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, he(qe(pl), (ne) => (n(), i("option", {
                          key: ne,
                          value: ne
                        }, d(ne) + d(ne === "auto" ? " (detect GPU)" : ""), 9, tP))), 128))
                      ], 512), [
                        [bs, G.value]
                      ])
                    ]),
                    t("div", sP, [
                      t("label", oP, [
                        Xe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": P[13] || (P[13] = (ne) => X.value = ne)
                        }, null, 512), [
                          [un, X.value]
                        ]),
                        P[39] || (P[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    ae.value ? (n(), i("div", nP, d(ae.value), 1)) : h("", !0)
                  ], 64))
                ])) : p.value === "import" ? (n(), i("div", iP, [
                  S(Yr, {
                    "workspace-path": re.value,
                    "resume-import": C.value,
                    "initial-progress": A.value ?? void 0,
                    onImportComplete: Pe,
                    onImportStarted: P[14] || (P[14] = (ne) => x.value = !0),
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
              y.value === 1 ? (n(), R(De, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || me.value,
                onClick: Ee
              }, {
                default: g(() => [
                  b(d(me.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y.value === 2 ? (n(), i(j, { key: 1 }, [
                !Ne.value && !x.value && (p.value !== "landing" || o.setupState === "no_workspace" && !re.value) ? (n(), R(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: ye
                }, {
                  default: g(() => [...P[44] || (P[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                p.value === "create" ? (n(), R(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !Te.value || Ne.value,
                  onClick: be
                }, {
                  default: g(() => [
                    b(d(Ne.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                p.value === "landing" && k.value ? (n(), R(De, {
                  key: 2,
                  variant: "primary",
                  onClick: Me
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
      w.value ? (n(), R(x7, {
        key: 0,
        "workspace-path": O.value,
        onClose: P[16] || (P[16] = (se) => w.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), mP = /* @__PURE__ */ _e(dP, [["__scopeId", "data-v-9a9aadc0"]]), fP = { class: "update-banner" }, vP = { class: "update-banner__left" }, pP = { class: "update-banner__title" }, gP = {
  key: 0,
  class: "update-banner__summary"
}, hP = { class: "update-banner__actions" }, yP = ["disabled"], wP = ["disabled"], _P = ["disabled"], kP = /* @__PURE__ */ we({
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
}, jP = { class: "dialog-content env-selector-dialog" }, HP = { class: "dialog-header" }, KP = { class: "dialog-body" }, qP = { class: "env-list" }, YP = { class: "env-info" }, JP = { class: "env-name-row" }, QP = { class: "env-indicator" }, XP = { class: "env-name" }, ZP = {
  key: 0,
  class: "env-branch"
}, eR = {
  key: 1,
  class: "current-label"
}, tR = { class: "env-stats" }, sR = ["onClick"], oR = { class: "toast-container" }, nR = { class: "toast-message" }, ui = "ComfyGit.LastView", di = "ComfyGit.LastSection", aR = /* @__PURE__ */ we({
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
      getUpdateCheck: A,
      updateManager: T
    } = lt(), I = cp(), { liveInstanceCount: D } = Jr({ autoStart: !0 }), U = _(null), W = _([]), E = _([]), M = _([]), te = L(() => M.value.find((ue) => ue.is_current)), le = _(null), oe = _(!1), J = _(1), G = L(() => {
      var ue;
      return ((ue = le.value) == null ? void 0 : ue.state) || "managed";
    }), X = _(!1), ae = _(null), re = _(null), B = _(!1), ee = _(null), me = _(!1), Ne = _(!1), We = L(() => !me.value && xP(ee.value)), ze = _(null), Ie = _(null), z = _(null), q = _(!1), V = _(!1), F = _(""), ie = _(null), Te = _({ state: "idle", progress: 0, message: "" });
    let Be = null, O = null;
    const Y = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, de = o.initialView ? Y[o.initialView] : null, Ee = [
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
    ], be = ["this-env", "all-envs", "sharing"];
    function $e() {
      try {
        const ue = sessionStorage.getItem(ui), Q = sessionStorage.getItem(di);
        if (ue && Q && Ee.includes(ue) && be.includes(Q))
          return { view: ue, section: Q };
      } catch {
      }
      return null;
    }
    const Me = $e(), ye = _((de == null ? void 0 : de.view) ?? (Me == null ? void 0 : Me.view) ?? "status"), Pe = _((de == null ? void 0 : de.section) ?? (Me == null ? void 0 : Me.section) ?? "this-env");
    function fe(ue, Q) {
      ye.value = ue, Pe.value = Q;
      try {
        sessionStorage.setItem(ui, ue), sessionStorage.setItem(di, Q);
      } catch {
      }
    }
    function Ae(ue) {
      const Oe = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ue];
      Oe && fe(Oe.view, Oe.section);
    }
    function Le() {
      fe("branches", "this-env");
    }
    function N() {
      a("close"), setTimeout(() => {
        var Q;
        const ue = document.querySelectorAll("button.comfyui-button");
        for (const Oe of ue)
          if (((Q = Oe.textContent) == null ? void 0 : Q.trim()) === "Manager") {
            Oe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const P = _(null), se = _(!1), ne = _(!1), ce = _([]);
    let Ce = 0;
    function ke(ue, Q = "info", Oe = 3e3) {
      const Ke = ++Ce;
      return ce.value.push({ id: Ke, message: ue, type: Q }), Oe > 0 && setTimeout(() => {
        ce.value = ce.value.filter((dt) => dt.id !== Ke);
      }, Oe), Ke;
    }
    function Ge(ue) {
      ce.value = ce.value.filter((Q) => Q.id !== ue);
    }
    function rt(ue, Q) {
      ke(ue, Q);
    }
    async function ht() {
      ee.value = null, me.value = !1;
      try {
        ee.value = await A();
      } catch {
      }
    }
    function at() {
      var Q;
      const ue = (Q = ee.value) == null ? void 0 : Q.release_url;
      if (ue)
        try {
          window.open(ue, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function tt() {
      var Q;
      const ue = (Q = ee.value) == null ? void 0 : Q.latest_version;
      ue && CP(ue), me.value = !0;
    }
    async function wt() {
      var Q, Oe;
      if (Ne.value) return;
      Ne.value = !0;
      const ue = ke("Updating comfygit-manager...", "info", 0);
      try {
        const Ke = await T();
        if (Ge(ue), Ke.status !== "success") {
          if (ke(Ke.message || "Update failed", "error"), Ke.manual_instructions) {
            const dt = Ke.manual_instructions.split(`
`).map((K) => K.trim()).filter(Boolean);
            P.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: dt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                P.value = null;
              }
            };
          }
          return;
        }
        if (ke(Ke.message || "Update complete", "success"), tt(), Ke.restart_required) {
          ot();
          try {
            await ((Oe = (Q = window.app) == null ? void 0 : Q.api) == null ? void 0 : Oe.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ke) {
        Ge(ue);
        const dt = Ke instanceof Error ? Ke.message : "Update failed";
        ke(dt, "error");
      } finally {
        Ne.value = !1;
      }
    }
    const $t = L(() => {
      if (!U.value) return "neutral";
      const ue = U.value.workflows, Q = ue.new.length > 0 || ue.modified.length > 0 || ue.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? Q ? "warning" : "success" : "error";
    });
    L(() => U.value ? $t.value === "success" ? "All synced" : $t.value === "warning" ? "Uncommitted changes" : $t.value === "error" ? "Not synced" : "" : "");
    async function st() {
      X.value = !0, ae.value = null;
      try {
        const [ue, Q, Oe, Ke] = await Promise.all([
          l(!0),
          r(),
          c(),
          y()
        ]);
        U.value = ue, W.value = Q.commits, E.value = Oe.branches, M.value = Ke, a("statusUpdate", ue), ze.value && await ze.value.loadWorkflows(!0);
      } catch (ue) {
        ae.value = ue instanceof Error ? ue.message : "Failed to load status", U.value = null, W.value = [], E.value = [];
      } finally {
        X.value = !1;
      }
    }
    function Ys(ue) {
      re.value = ue;
    }
    async function fs(ue) {
      var Oe;
      re.value = null;
      const Q = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      P.value = {
        title: Q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: Q ? "You have uncommitted changes that will be lost." : `Checkout commit ${ue.short_hash || ((Oe = ue.hash) == null ? void 0 : Oe.slice(0, 7))}?`,
        details: Q ? hn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: Q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: Q,
        onConfirm: async () => {
          var K;
          P.value = null, ot();
          const Ke = ke(`Checking out ${ue.short_hash || ((K = ue.hash) == null ? void 0 : K.slice(0, 7))}...`, "info", 0), dt = await u(ue.hash, Q);
          Ge(Ke), dt.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(dt.message || "Checkout failed", "error");
        }
      };
    }
    async function pe(ue) {
      const Q = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      P.value = {
        title: Q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: Q ? "You have uncommitted changes." : `Switch to branch "${ue}"?`,
        details: Q ? hn() : void 0,
        warning: Q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: Q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          P.value = null, ot();
          const Oe = ke(`Switching to ${ue}...`, "info", 0), Ke = await f(ue, Q);
          Ge(Oe), Ke.status === "success" ? ke("Restarting ComfyUI...", "success") : ke(Ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function H(ue) {
      const Q = ke(`Creating branch ${ue}...`, "info", 0), Oe = await m(ue);
      Ge(Q), Oe.status === "success" ? (ke(`Branch "${ue}" created`, "success"), await st()) : ke(Oe.message || "Failed to create branch", "error");
    }
    async function ve(ue, Q = !1) {
      const Oe = async (Ke) => {
        var K;
        const dt = ke(`Deleting branch ${ue}...`, "info", 0);
        try {
          const xe = await v(ue, Ke);
          Ge(dt), xe.status === "success" ? (ke(`Branch "${ue}" deleted`, "success"), await st()) : (K = xe.message) != null && K.includes("not fully merged") ? P.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ue}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              P.value = null, await Oe(!0);
            }
          } : ke(xe.message || "Failed to delete branch", "error");
        } catch (xe) {
          Ge(dt);
          const Ue = xe instanceof Error ? xe.message : "Failed to delete branch";
          Ue.includes("not fully merged") ? P.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ue}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              P.value = null, await Oe(!0);
            }
          } : ke(Ue, "error");
        }
      };
      P.value = {
        title: "Delete Branch",
        message: `Delete branch "${ue}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          P.value = null, await Oe(Q);
        }
      };
    }
    async function je(ue) {
      re.value = null;
      const Q = prompt("Enter branch name:");
      if (Q) {
        const Oe = ke(`Creating branch ${Q}...`, "info", 0), Ke = await m(Q, ue.hash);
        Ge(Oe), Ke.status === "success" ? (ke(`Branch "${Q}" created from ${ue.short_hash}`, "success"), await st()) : ke(Ke.message || "Failed to create branch", "error");
      }
    }
    function ot() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Se() {
      P.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ue;
          P.value = null, ot(), ke("Restarting environment...", "info");
          try {
            (ue = window.app) != null && ue.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Z() {
      P.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ue;
          P.value = null, ke("Stopping environment...", "info");
          try {
            (ue = window.app) != null && ue.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Fe(ue, Q) {
      B.value = !1, F.value = ue, ie.value = Q || null, q.value = !0;
    }
    async function _t() {
      q.value = !1, V.value = !0, ot(), Te.value = {
        progress: 10,
        state: Ct(10),
        message: Jt(10)
      };
      try {
        await k(F.value, ie.value || void 0), $s(), Ve();
      } catch (ue) {
        Pt(), V.value = !1, ke(`Failed to initiate switch: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, ie.value = null;
      }
    }
    function Ct(ue) {
      return ue >= 100 ? "complete" : ue >= 80 ? "validating" : ue >= 60 ? "starting" : ue >= 30 ? "syncing" : "preparing";
    }
    function Jt(ue) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ct(ue)] || "";
    }
    function $s() {
      if (O) return;
      let ue = 10;
      const Q = 60, Oe = 5e3, Ke = 100, dt = (Q - ue) / (Oe / Ke);
      O = window.setInterval(() => {
        if (ue += dt, ue >= Q && (ue = Q, Pt()), Te.value.progress < Q) {
          const K = Math.floor(ue);
          Te.value = {
            progress: K,
            state: Ct(K),
            message: Jt(K)
          };
        }
      }, Ke);
    }
    function Pt() {
      O && (clearInterval(O), O = null);
    }
    function Ve() {
      Be || (Be = window.setInterval(async () => {
        try {
          let ue = await I.getStatus();
          if ((!ue || ue.state === "idle") && (ue = await p()), !ue)
            return;
          const Q = ue.progress || 0;
          Q >= 60 && Pt();
          const Oe = Math.max(Q, Te.value.progress), Ke = ue.state && ue.state !== "idle" && ue.state !== "unknown", dt = Ke ? ue.state : Ct(Oe), K = Ke && ue.message || Jt(Oe);
          Te.value = {
            state: dt,
            progress: Oe,
            message: K
          }, ue.state === "complete" ? (Pt(), os(), V.value = !1, ke(`✓ Switched to ${F.value}`, "success"), await st(), F.value = "") : ue.state === "rolled_back" ? (Pt(), os(), V.value = !1, ke("Switch failed, restored previous environment", "warning"), F.value = "") : ue.state === "critical_failure" && (Pt(), os(), V.value = !1, ke(`Critical error during switch: ${ue.message}`, "error"), F.value = "");
        } catch (ue) {
          console.error("Failed to poll switch progress:", ue);
        }
      }, 1e3));
    }
    function os() {
      Pt(), Be && (clearInterval(Be), Be = null);
    }
    function vs() {
      var ue;
      q.value = !1, F.value = "", (ue = le.value) != null && ue.state && le.value.state !== "managed" && (J.value = le.value.state === "no_workspace" ? 1 : 2, oe.value = !0);
    }
    async function ro(ue) {
      se.value = !1, await st(), ke(ue.message, ue.success ? "success" : "error");
    }
    async function co() {
      ne.value = !1;
      const ue = ke("Syncing environment...", "info", 0);
      try {
        const Q = await x("skip", !0);
        if (Ge(ue), Q.status === "success") {
          const Oe = [];
          Q.nodes_installed.length && Oe.push(`${Q.nodes_installed.length} installed`), Q.nodes_removed.length && Oe.push(`${Q.nodes_removed.length} removed`);
          const Ke = Oe.length ? `: ${Oe.join(", ")}` : "";
          ke(`✓ Environment synced${Ke}`, "success"), await st();
        } else {
          const Oe = Q.errors.length ? Q.errors.join("; ") : Q.message;
          ke(`Sync failed: ${Oe}`, "error");
        }
      } catch (Q) {
        Ge(ue), ke(`Sync error: ${Q instanceof Error ? Q.message : "Unknown error"}`, "error");
      }
    }
    async function uo(ue) {
      var Q;
      try {
        const Oe = await $(ue);
        Oe.failed.length === 0 ? ke(`✓ Repaired ${Oe.success} workflow${Oe.success === 1 ? "" : "s"}`, "success") : ke(`Repaired ${Oe.success}, failed: ${Oe.failed.length}`, "warning"), await st();
      } catch (Oe) {
        ke(`Repair failed: ${Oe instanceof Error ? Oe.message : "Unknown error"}`, "error");
      } finally {
        (Q = z.value) == null || Q.resetRepairingState();
      }
    }
    async function Js() {
      var Q, Oe;
      const ue = ke("Repairing environment...", "info", 0);
      try {
        const Ke = await x("skip", !0);
        if (Ge(ue), Ke.status === "success") {
          const dt = [];
          Ke.nodes_installed.length && dt.push(`${Ke.nodes_installed.length} installed`), Ke.nodes_removed.length && dt.push(`${Ke.nodes_removed.length} removed`);
          const K = dt.length ? `: ${dt.join(", ")}` : "";
          ke(`✓ Environment repaired${K}`, "success"), (Q = z.value) == null || Q.closeDetailModal(), await st();
        } else {
          const dt = Ke.errors.length ? Ke.errors.join(", ") : Ke.message || "Unknown error";
          ke(`Repair failed: ${dt}`, "error");
        }
      } catch (Ke) {
        Ge(ue), ke(`Repair error: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (Oe = z.value) == null || Oe.resetRepairingEnvironmentState();
      }
    }
    async function mo(ue, Q) {
      ke(`Environment '${ue}' created`, "success"), await st(), Ie.value && await Ie.value.loadEnvironments(), Q && await Fe(ue);
    }
    async function fo(ue) {
      var Q;
      if (((Q = te.value) == null ? void 0 : Q.name) === ue) {
        ke("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      P.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ue}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          P.value = null;
          try {
            const Oe = await w(ue);
            Oe.status === "success" ? (ke(`Environment "${ue}" deleted`, "success"), await st(), Ie.value && await Ie.value.loadEnvironments()) : ke(Oe.message || "Failed to delete environment", "error");
          } catch (Oe) {
            ke(`Error deleting environment: ${Oe instanceof Error ? Oe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function vo(ue, Q) {
      oe.value = !1;
      try {
        le.value = await C();
      } catch {
      }
      await Fe(ue, Q);
    }
    function po() {
      oe.value = !1, a("close");
    }
    async function go(ue, Q) {
      await Fe(ue, Q);
    }
    async function ca(ue) {
      await st(), await Fe(ue);
    }
    async function ua(ue) {
      le.value = await C(), console.log(`Environment '${ue}' created. Available for switching.`);
    }
    function da() {
      fe("environments", "all-envs"), setTimeout(() => {
        var ue;
        (ue = Ie.value) == null || ue.openCreateModal();
      }, 100);
    }
    function hn() {
      if (!U.value) return [];
      const ue = [], Q = U.value.workflows;
      return Q.new.length && ue.push(`${Q.new.length} new workflow(s)`), Q.modified.length && ue.push(`${Q.modified.length} modified workflow(s)`), Q.deleted.length && ue.push(`${Q.deleted.length} deleted workflow(s)`), ue;
    }
    return et(async () => {
      try {
        if (le.value = await C(), le.value.state === "no_workspace") {
          oe.value = !0, J.value = 1;
          return;
        }
        if (le.value.state === "empty_workspace") {
          oe.value = !0, J.value = 2;
          return;
        }
        if (le.value.state === "unmanaged") {
          oe.value = !0, J.value = 2;
          return;
        }
      } catch (ue) {
        console.warn("Setup status check failed, proceeding normally:", ue);
      }
      await Promise.all([
        st(),
        ht()
      ]);
    }), (ue, Q) => {
      var Oe, Ke, dt, K, xe, Ue, ct, Bt, Gt, Us, As, No, yn;
      return n(), i("div", SP, [
        t("div", IP, [
          t("div", EP, [
            Q[31] || (Q[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (n(), i("div", TP)) : h("", !0)
          ]),
          t("div", PP, [
            S(ec),
            Q[34] || (Q[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Re(["icon-btn", { spinning: X.value }]),
              onClick: st,
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
              onClick: Q[0] || (Q[0] = (Ye) => a("close")),
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
        We.value && ee.value ? (n(), R(bP, {
          key: 0,
          info: ee.value,
          updating: Ne.value,
          onUpdate: wt,
          onDismiss: tt,
          onReleaseNotes: at
        }, null, 8, ["info", "updating"])) : h("", !0),
        t("div", RP, [
          t("div", { class: "env-switcher-header" }, [
            Q[35] || (Q[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: Q[1] || (Q[1] = (Ye) => fe("environments", "all-envs"))
          }, [
            U.value ? (n(), i("div", MP, [
              t("span", null, d(((Oe = te.value) == null ? void 0 : Oe.name) || ((Ke = U.value) == null ? void 0 : Ke.environment) || "Loading..."), 1),
              t("span", DP, "(" + d(U.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            Q[36] || (Q[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", LP, [
          t("div", NP, [
            t("div", UP, [
              t("div", AP, [
                Q[37] || (Q[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "status" && Pe.value === "this-env" }]),
                  onClick: Q[2] || (Q[2] = (Ye) => fe("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "workflows" }]),
                  onClick: Q[3] || (Q[3] = (Ye) => fe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "models-env" }]),
                  onClick: Q[4] || (Q[4] = (Ye) => fe("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "branches" }]),
                  onClick: Q[5] || (Q[5] = (Ye) => fe("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "history" }]),
                  onClick: Q[6] || (Q[6] = (Ye) => fe("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "nodes" }]),
                  onClick: Q[7] || (Q[7] = (Ye) => fe("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "debug-env" }]),
                  onClick: Q[8] || (Q[8] = (Ye) => fe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              Q[41] || (Q[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", OP, [
                Q[38] || (Q[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "environments" }]),
                  onClick: Q[9] || (Q[9] = (Ye) => fe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "model-index" }]),
                  onClick: Q[10] || (Q[10] = (Ye) => fe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "settings" }]),
                  onClick: Q[11] || (Q[11] = (Ye) => fe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "debug-workspace" }]),
                  onClick: Q[12] || (Q[12] = (Ye) => fe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              Q[42] || (Q[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", zP, [
                Q[40] || (Q[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "deploy" }]),
                  onClick: Q[13] || (Q[13] = (Ye) => fe("deploy", "sharing"))
                }, [
                  Q[39] || (Q[39] = b(" DEPLOY ", -1)),
                  qe(D) > 0 ? (n(), i("span", FP, d(qe(D)), 1)) : h("", !0)
                ], 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "export" }]),
                  onClick: Q[14] || (Q[14] = (Ye) => fe("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "import" }]),
                  onClick: Q[15] || (Q[15] = (Ye) => fe("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "remotes" }]),
                  onClick: Q[16] || (Q[16] = (Ye) => fe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", VP, [
              S(tc)
            ])
          ]),
          t("div", BP, [
            ae.value ? (n(), i("div", WP, d(ae.value), 1)) : !U.value && ye.value === "status" ? (n(), i("div", GP, " Loading status... ")) : (n(), i(j, { key: 2 }, [
              ye.value === "status" ? (n(), R(gv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: z,
                status: U.value,
                "setup-state": G.value,
                onSwitchBranch: Le,
                onCommitChanges: Q[17] || (Q[17] = (Ye) => se.value = !0),
                onSyncEnvironment: Q[18] || (Q[18] = (Ye) => ne.value = !0),
                onViewWorkflows: Q[19] || (Q[19] = (Ye) => fe("workflows", "this-env")),
                onViewHistory: Q[20] || (Q[20] = (Ye) => fe("history", "this-env")),
                onViewDebug: Q[21] || (Q[21] = (Ye) => fe("debug-env", "this-env")),
                onViewNodes: Q[22] || (Q[22] = (Ye) => fe("nodes", "this-env")),
                onRepairMissingModels: uo,
                onRepairEnvironment: Js,
                onStartSetup: Q[23] || (Q[23] = (Ye) => oe.value = !0),
                onViewEnvironments: Q[24] || (Q[24] = (Ye) => fe("environments", "all-envs")),
                onCreateEnvironment: da
              }, null, 8, ["status", "setup-state"])) : ye.value === "workflows" ? (n(), R(Bw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ze,
                onRefresh: st
              }, null, 512)) : ye.value === "models-env" ? (n(), R(ob, {
                key: 2,
                onNavigate: Ae
              })) : ye.value === "branches" ? (n(), R(lp, {
                key: 3,
                branches: E.value,
                current: ((dt = U.value) == null ? void 0 : dt.branch) || null,
                onSwitch: pe,
                onCreate: H,
                onDelete: ve
              }, null, 8, ["branches", "current"])) : ye.value === "history" ? (n(), R(rp, {
                key: 4,
                commits: W.value,
                "current-ref": (K = U.value) == null ? void 0 : K.branch,
                onSelect: Ys,
                onCheckout: fs
              }, null, 8, ["commits", "current-ref"])) : ye.value === "nodes" ? (n(), R(Jb, {
                key: 5,
                "version-mismatches": ((Ue = (xe = U.value) == null ? void 0 : xe.comparison) == null ? void 0 : Ue.version_mismatches) || [],
                onOpenNodeManager: N,
                onRepairEnvironment: Js,
                onToast: rt
              }, null, 8, ["version-mismatches"])) : ye.value === "debug-env" ? (n(), R(p3, { key: 6 })) : ye.value === "environments" ? (n(), R(Vx, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Ie,
                onSwitch: Fe,
                onCreated: mo,
                onDelete: fo
              }, null, 512)) : ye.value === "model-index" ? (n(), R(hb, {
                key: 8,
                onRefresh: st
              })) : ye.value === "settings" ? (n(), R(l3, { key: 9 })) : ye.value === "debug-workspace" ? (n(), R(v3, { key: 10 })) : ye.value === "deploy" ? (n(), R(DE, {
                key: 11,
                onToast: rt,
                onNavigate: Ae
              })) : ye.value === "export" ? (n(), R(M5, { key: 12 })) : ye.value === "import" ? (n(), R(x8, {
                key: 13,
                onImportCompleteSwitch: ca
              })) : ye.value === "remotes" ? (n(), R(FC, {
                key: 14,
                onToast: rt
              })) : h("", !0)
            ], 64))
          ])
        ]),
        re.value ? (n(), R(QE, {
          key: 1,
          commit: re.value,
          onClose: Q[25] || (Q[25] = (Ye) => re.value = null),
          onCheckout: fs,
          onCreateBranch: je
        }, null, 8, ["commit"])) : h("", !0),
        P.value ? (n(), R(vl, {
          key: 2,
          title: P.value.title,
          message: P.value.message,
          details: P.value.details,
          warning: P.value.warning,
          confirmLabel: P.value.confirmLabel,
          cancelLabel: P.value.cancelLabel,
          secondaryLabel: P.value.secondaryLabel,
          secondaryAction: P.value.secondaryAction,
          destructive: P.value.destructive,
          onConfirm: P.value.onConfirm,
          onCancel: Q[26] || (Q[26] = (Ye) => P.value = null),
          onSecondary: P.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        S(BT, {
          show: q.value,
          "from-environment": ((ct = te.value) == null ? void 0 : ct.name) || "unknown",
          "to-environment": F.value,
          onConfirm: _t,
          onClose: vs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        se.value && U.value ? (n(), R(Zr, {
          key: 3,
          status: U.value,
          "as-modal": !0,
          onClose: Q[27] || (Q[27] = (Ye) => se.value = !1),
          onCommitted: ro
        }, null, 8, ["status"])) : h("", !0),
        ne.value && U.value ? (n(), R(r7, {
          key: 4,
          show: ne.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: co,
          onClose: Q[28] || (Q[28] = (Ye) => ne.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        S(ZT, {
          show: V.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        B.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: Q[30] || (Q[30] = gt((Ye) => B.value = !1, ["self"]))
        }, [
          t("div", jP, [
            t("div", HP, [
              Q[44] || (Q[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: Q[29] || (Q[29] = (Ye) => B.value = !1)
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
            t("div", KP, [
              Q[45] || (Q[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", qP, [
                (n(!0), i(j, null, he(M.value, (Ye) => (n(), i("div", {
                  key: Ye.name,
                  class: Re(["env-item", { current: Ye.is_current }])
                }, [
                  t("div", YP, [
                    t("div", JP, [
                      t("span", QP, d(Ye.is_current ? "●" : "○"), 1),
                      t("span", XP, d(Ye.name), 1),
                      Ye.current_branch ? (n(), i("span", ZP, "(" + d(Ye.current_branch) + ")", 1)) : h("", !0),
                      Ye.is_current ? (n(), i("span", eR, "CURRENT")) : h("", !0)
                    ]),
                    t("div", tR, d(Ye.workflow_count) + " workflows • " + d(Ye.node_count) + " nodes ", 1)
                  ]),
                  Ye.is_current ? h("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (SD) => Fe(Ye.name)
                  }, " SWITCH ", 8, sR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        oe.value ? (n(), R(mP, {
          key: 6,
          "default-path": ((Bt = le.value) == null ? void 0 : Bt.default_path) || "~/comfygit",
          "detected-models-dir": ((Gt = le.value) == null ? void 0 : Gt.detected_models_dir) || null,
          "initial-step": J.value,
          "existing-environments": ((Us = le.value) == null ? void 0 : Us.environments) || [],
          "cli-installed": ((As = le.value) == null ? void 0 : As.cli_installed) ?? !0,
          "setup-state": ((No = le.value) == null ? void 0 : No.state) || "no_workspace",
          "workspace-path": ((yn = le.value) == null ? void 0 : yn.workspace_path) || null,
          onComplete: vo,
          onClose: po,
          onSwitchEnvironment: go,
          onEnvironmentCreatedNoSwitch: ua
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        t("div", oR, [
          S(Sd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(j, null, he(ce.value, (Ye) => (n(), i("div", {
                key: Ye.id,
                class: Re(["toast", Ye.type])
              }, [
                t("span", nR, d(Ye.message), 1)
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
}, xR = /* @__PURE__ */ we({
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
            style: Yt({ width: `${e.item.progress}%` })
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
}), Fo = /* @__PURE__ */ _e(xR, [["__scopeId", "data-v-2110df65"]]), SR = { class: "queue-title" }, IR = { class: "count" }, ER = { class: "queue-actions" }, TR = { class: "action-label" }, PR = {
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
}, JR = { class: "section-header" }, QR = { class: "section-label failed" }, XR = { class: "items-list" }, ZR = /* @__PURE__ */ we({
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
    kt(
      () => ({
        active: m.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (I, D) => {
        $ && (clearTimeout($), $ = null);
        const U = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, W = D && (D.active > 0 || D.paused > 0);
        U && W && ($ = setTimeout(() => {
          w(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = L(() => {
      var U;
      if (s.items.length === 0) return 0;
      const I = l.value.length, D = ((U = o.value) == null ? void 0 : U.progress) || 0;
      return Math.round((I + D / 100) / s.items.length * 100);
    });
    function A(I) {
      f(I);
    }
    function T(I) {
      return I === 0 ? "" : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, D) => (n(), R(Tt, { to: "body" }, [
      qe(u) ? (n(), i("div", {
        key: 0,
        class: Re(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (U) => x.value = !x.value)
        }, [
          t("div", SR, [
            D[4] || (D[4] = t("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", IR, "(" + d(qe(m)) + "/" + d(qe(s).items.length) + ")", 1)
          ]),
          t("div", ER, [
            t("span", TR, d(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", NR, [
          qe(o) ? (n(), i("div", UR, [
            D[6] || (D[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(Fo, {
              item: qe(o),
              onCancel: D[1] || (D[1] = (U) => A(qe(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          qe(c).length > 0 ? (n(), i("div", AR, [
            t("div", OR, [
              t("span", zR, "Paused (" + d(qe(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...U) => qe(k) && qe(k)(...U))
              }, "Resume All")
            ]),
            t("div", FR, [
              (n(!0), i(j, null, he(qe(c), (U) => (n(), R(Fo, {
                key: U.id,
                item: U,
                onResume: (W) => qe(y)(U.id),
                onRemove: (W) => qe(p)(U.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          qe(a).length > 0 ? (n(), i("div", VR, [
            t("div", BR, [
              t("span", WR, "Queued (" + d(qe(a).length) + ")", 1)
            ]),
            t("div", GR, [
              (n(!0), i(j, null, he(qe(a), (U) => (n(), R(Fo, {
                key: U.id,
                item: U,
                onCancel: (W) => A(U.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          qe(l).length > 0 ? (n(), i("div", jR, [
            t("div", HR, [
              t("span", KR, "Completed (" + d(qe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...U) => qe(w) && qe(w)(...U))
              }, "Clear")
            ]),
            t("div", qR, [
              (n(!0), i(j, null, he(qe(l).slice(0, 3), (U) => (n(), R(Fo, {
                key: U.id,
                item: U,
                onRemove: (W) => qe(p)(U.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          qe(r).length > 0 ? (n(), i("div", YR, [
            t("div", JR, [
              t("span", QR, "Failed (" + d(qe(r).length) + ")", 1)
            ]),
            t("div", XR, [
              (n(!0), i(j, null, he(qe(r), (U) => (n(), R(Fo, {
                key: U.id,
                item: U,
                onRetry: (W) => qe(v)(U.id),
                onRemove: (W) => qe(p)(U.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (n(), i("div", PR, [
          t("div", RR, [
            t("div", {
              class: "progress-fill",
              style: Yt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          qe(o) ? (n(), i("div", MR, [
            t("span", DR, d(qe(o).filename), 1),
            t("span", LR, d(T(qe(o).speed)), 1)
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
}, fM = /* @__PURE__ */ we({
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
    const o = e, a = s, l = L(() => o.items.filter((p) => p.canAction)), r = L(() => l.value.length > 0 && l.value.every(
      (p) => {
        var w, x;
        return o.queuedItems.has(p.id) || ((w = o.installedItems) == null ? void 0 : w.has(p.id)) || ((x = o.failedItems) == null ? void 0 : x.has(p.id));
      }
    )), c = L(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
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
    return (p, w) => (n(), R(yt, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", tM, [
          t("span", sM, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), R(De, {
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
          (n(!0), i(j, null, he(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", nM, [
              t("span", aM, d(x.name), 1),
              x.subtitle ? (n(), i("span", lM, d(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (n(), i(j, { key: 0 }, [
              m(x) ? (n(), i("span", iM, "Installing...")) : v(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: y(x)
              }, "Failed ⚠", 8, rM)) : f(x) ? (n(), i("span", cM, "Installed")) : u(x) ? (n(), i("span", uM, "Queued")) : (n(), i("div", dM, [
                (n(!0), i(j, null, he(k(x), ($) => (n(), R(De, {
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
        S(De, {
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
}, BM = { class: "section-header" }, WM = { class: "section-title" }, GM = { class: "item-list" }, jM = { class: "package-info community-info" }, HM = { class: "community-title-row" }, KM = { class: "package-name" }, qM = { class: "node-count" }, YM = { class: "community-mapping-note" }, JM = { key: 0 }, QM = {
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
}, sD = {
  key: 1,
  class: "no-url"
}, oD = {
  key: 4,
  class: "section"
}, nD = { class: "section-header" }, aD = { class: "section-title" }, lD = { class: "item-list" }, iD = { class: "model-info" }, rD = { class: "model-name" }, cD = {
  key: 1,
  class: "queued-badge"
}, uD = {
  key: 1,
  class: "no-url"
}, dD = { class: "dont-show-again" }, mD = /* @__PURE__ */ we({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = _(!1), o = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), m = _(/* @__PURE__ */ new Set()), f = _(!1), v = _(null), y = _(0), k = _(null), p = _(/* @__PURE__ */ new Set()), w = _(/* @__PURE__ */ new Map()), { addToQueue: x } = Do(), { queueNodeInstall: $ } = lt(), C = L(() => {
      var N;
      return ((N = a.value) == null ? void 0 : N.package_aliases) || {};
    });
    function A(N) {
      if (!N) return null;
      const P = C.value;
      let se = N;
      const ne = /* @__PURE__ */ new Set();
      for (; P[se] && !ne.has(se); )
        ne.add(se), se = P[se];
      return se;
    }
    const T = L(() => I.value.length > 0 || U.value.length > 0 || W.value.length > 0 || E.value.length > 0 || J.value.length > 0), I = L(() => {
      var se, ne;
      if (!((se = a.value) != null && se.nodes)) return [];
      const N = /* @__PURE__ */ new Map(), P = (a.value.nodes.resolved || []).filter((ce) => {
        var Ce;
        return !ce.is_installed && ((Ce = ce.package) == null ? void 0 : Ce.package_id);
      });
      for (const ce of P) {
        const Ce = A(ce.package.package_id);
        if (!Ce) continue;
        N.has(Ce) || N.set(Ce, {
          package_id: Ce,
          title: ce.package.title || Ce,
          node_count: 0,
          node_types: [],
          repository: ce.package.repository || null,
          latest_version: ce.package.latest_version || null
        });
        const ke = N.get(Ce);
        ke.node_count++, ke.node_types.push(((ne = ce.reference) == null ? void 0 : ne.node_type) || ce.node_type);
      }
      return Array.from(N.values());
    }), D = L(() => I.value.reduce((N, P) => N + P.node_count, 0)), U = L(() => {
      var N;
      return (N = a.value) != null && N.nodes ? (a.value.nodes.unresolved || []).map((P) => {
        var se;
        return {
          node_type: ((se = P.reference) == null ? void 0 : se.node_type) || P.node_type
        };
      }) : [];
    }), W = L(() => {
      var P;
      if (!((P = a.value) != null && P.nodes)) return [];
      const N = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((se) => {
        var ce;
        const ne = ((ce = se.reference) == null ? void 0 : ce.node_type) || se.node_type;
        return {
          node_type: ne,
          guidance: se.guidance || N[ne] || null
        };
      });
    }), E = L(() => {
      var se, ne, ce, Ce, ke, Ge, rt, ht;
      if (!((se = a.value) != null && se.nodes)) return [];
      const N = a.value.node_guidance || {}, P = /* @__PURE__ */ new Map();
      for (const at of a.value.nodes.uninstallable || []) {
        const tt = ((ne = at.reference) == null ? void 0 : ne.node_type) || at.node_type, wt = A(((ce = at.package) == null ? void 0 : ce.package_id) || null), $t = wt || `node:${tt}`;
        P.has($t) || P.set($t, {
          item_id: $t,
          node_type: tt,
          title: ((Ce = at.package) == null ? void 0 : Ce.title) || wt || tt,
          node_count: 0,
          package_id: wt,
          repository: ((ke = at.package) == null ? void 0 : ke.repository) || null,
          latest_version: ((Ge = at.package) == null ? void 0 : Ge.latest_version) || null,
          guidance: at.guidance || N[tt] || null
        });
        const st = P.get($t);
        st.node_count++, st.guidance || (st.guidance = at.guidance || N[tt] || null), !st.repository && ((rt = at.package) != null && rt.repository) && (st.repository = at.package.repository), !st.latest_version && ((ht = at.package) != null && ht.latest_version) && (st.latest_version = at.package.latest_version);
      }
      return Array.from(P.values());
    }), M = L(() => E.value.filter((N) => !!N.package_id)), te = L(() => E.value.length >= 5 ? E.value.slice(0, 4) : E.value), le = L(() => M.value.length > 0 && M.value.every((N) => {
      const P = N.package_id;
      return r.value.has(P) || c.value.has(P) || u.value.has(P);
    }));
    function oe(N) {
      const P = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return N.repository && P.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), P;
    }
    const J = L(() => {
      var se;
      if (!((se = a.value) != null && se.models)) return [];
      const N = (a.value.models.resolved || []).filter(
        (ne) => ne.match_type === "download_intent" || ne.match_type === "property_download_intent" || ne.match_type === "not_found"
      ).map((ne) => {
        var ce, Ce, ke, Ge;
        return {
          filename: ((Ce = (ce = ne.reference) == null ? void 0 : ce.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((ke = ne.reference) == null ? void 0 : ke.widget_value) || ne.widget_value,
          widget_value: ((Ge = ne.reference) == null ? void 0 : Ge.widget_value) || ne.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ne.download_source || null,
          targetPath: ne.target_path || null,
          canDownload: !!(ne.download_source && ne.target_path)
        };
      }), P = (a.value.models.unresolved || []).map((ne) => {
        var ce, Ce, ke, Ge;
        return {
          filename: ((Ce = (ce = ne.reference) == null ? void 0 : ce.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((ke = ne.reference) == null ? void 0 : ke.widget_value) || ne.widget_value,
          widget_value: ((Ge = ne.reference) == null ? void 0 : Ge.widget_value) || ne.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...N, ...P];
    }), G = L(() => J.value.filter((N) => N.canDownload)), X = L(() => I.value.length >= 5 ? I.value.slice(0, 4) : I.value), ae = L(() => J.value.length >= 5 ? J.value.slice(0, 4) : J.value), re = L(() => I.value.length > 0 && I.value.every(
      (N) => r.value.has(N.package_id) || c.value.has(N.package_id) || u.value.has(N.package_id)
    )), B = L(() => G.value.length > 0 && G.value.every((N) => m.value.has(N.url))), ee = L(() => I.value.length > 0 || M.value.length > 0 || G.value.length > 0), me = L(() => {
      const N = (I.value.length === 0 || re.value) && (M.value.length === 0 || le.value), P = G.value.length === 0 || B.value;
      return N && P;
    }), Ne = L(() => k.value === "models" ? `Missing Models (${J.value.length})` : k.value === "packages" ? `Missing Custom Nodes (${D.value})` : k.value === "community" ? `Community-Mapped Packages (${E.value.length})` : ""), We = L(() => k.value === "models" ? J.value.map((N) => ({
      id: N.url || N.widget_value,
      name: N.filename,
      canAction: N.canDownload,
      actionDisabledReason: N.canDownload ? void 0 : "Manual download required"
    })) : k.value === "packages" ? I.value.map((N) => ({
      id: N.package_id,
      name: N.title,
      subtitle: `(${N.node_count} ${N.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : k.value === "community" ? E.value.map((N) => ({
      id: N.package_id || N.item_id,
      name: N.title,
      subtitle: `(${N.node_count} ${N.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!N.package_id,
      actionDisabledReason: N.package_id ? void 0 : "Manual setup required",
      actions: N.package_id ? oe(N) : []
    })) : []);
    function ze(N, P) {
      if (k.value === "models") {
        const se = J.value.find((ne) => ne.url === N.id || ne.widget_value === N.id);
        se && F(se);
      } else if (k.value === "packages") {
        const se = I.value.find((ne) => ne.package_id === N.id);
        se && z(se);
      } else if (k.value === "community") {
        const se = E.value.find((ce) => (ce.package_id || ce.item_id) === N.id);
        if (!se || !se.package_id) return;
        q(se, P === "install_git" ? "git" : "registry");
      }
    }
    function Ie() {
      k.value === "models" ? Be() : k.value === "packages" ? ie() : k.value === "community" && Te();
    }
    async function z(N) {
      await V(N.package_id, N.latest_version, "registry");
    }
    async function q(N, P) {
      N.package_id && await V(N.package_id, N.latest_version, P, N.repository);
    }
    async function V(N, P, se, ne) {
      const ce = A(N) || N, Ce = P || "latest";
      if (!(r.value.has(ce) || c.value.has(ce) || u.value.has(ce))) {
        Ae(), v.value = ce;
        try {
          const ke = {
            id: ce,
            version: Ce,
            selected_version: Ce,
            mode: "remote",
            channel: "default"
          };
          se === "git" && ne && (ke.repository = ne, ke.install_source = "git");
          const { ui_id: Ge } = await $(ke);
          w.value.set(Ge, ce), c.value.add(ce), console.log("[ComfyGit] Registered pending install:", { ui_id: Ge, packageId: ce, pendingInstalls: Array.from(w.value.entries()) });
        } catch (ke) {
          console.error("[ComfyGit] Failed to queue package install:", ke), u.value.set(ce, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function F(N) {
      !N.url || !N.targetPath || m.value.has(N.url) || (x([{
        workflow: "unsaved",
        filename: N.filename,
        url: N.url,
        targetPath: N.targetPath
      }]), m.value.add(N.url));
    }
    async function ie() {
      for (const N of I.value)
        !r.value.has(N.package_id) && !c.value.has(N.package_id) && !u.value.has(N.package_id) && await z(N);
    }
    async function Te() {
      for (const N of M.value) {
        const P = N.package_id;
        !r.value.has(P) && !c.value.has(P) && !u.value.has(P) && await q(N, "registry");
      }
    }
    function Be() {
      const N = G.value.filter(
        (P) => !m.value.has(P.url)
      );
      if (N.length !== 0) {
        x(N.map((P) => ({
          workflow: "unsaved",
          filename: P.filename,
          url: P.url,
          targetPath: P.targetPath
        })));
        for (const P of N)
          m.value.add(P.url);
      }
    }
    function O() {
      ie(), Te(), Be();
    }
    function Y() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function de(N) {
      var ce, Ce;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const P = N == null ? void 0 : N.id;
      if (P && p.value.has(P)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${P} this session`);
        return;
      }
      const se = window.app, ne = (ce = se == null ? void 0 : se.extensionManager) == null ? void 0 : ce.workflow;
      if (ne) {
        let rt = !1;
        for (let ht = 0; ht < 20; ht++) {
          const at = ne.activeWorkflow;
          if (!at) {
            await new Promise(($t) => setTimeout($t, 50));
            continue;
          }
          const tt = (Ce = at.activeState) == null ? void 0 : Ce.id;
          if (!(P && tt === P)) {
            ht < 19 && await new Promise(($t) => setTimeout($t, 50));
            continue;
          }
          if (rt = !0, at.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${at.filename}`), P && p.value.add(P);
            return;
          }
          break;
        }
        rt || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, y.value = 0;
      try {
        const ke = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: N, name: "unsaved" })
        });
        if (!ke.ok) {
          const Ge = await ke.json();
          throw new Error(Ge.error || "Failed to analyze workflow");
        }
        a.value = await ke.json(), T.value && (l.value = !0, P && p.value.add(P));
      } catch (ke) {
        console.error("[ComfyGit] Failed to analyze workflow:", ke);
      } finally {
        s.value = !1;
      }
    }
    function Ee() {
      l.value = !1, a.value = null;
    }
    function be(N) {
      const { workflow: P } = N.detail;
      P && de(P);
    }
    function $e(N) {
      var ne;
      const P = (ne = N.detail) == null ? void 0 : ne.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: P,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: N.detail
      });
      const se = w.value.get(P);
      se ? (v.value = se, console.log("[ComfyGit] Installing package:", se)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", P);
    }
    function Me(N) {
      var ce, Ce, ke, Ge, rt, ht, at;
      const P = (ce = N.detail) == null ? void 0 : ce.ui_id, se = (ke = (Ce = N.detail) == null ? void 0 : Ce.status) == null ? void 0 : ke.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: P,
        status: se,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: N.detail
      });
      const ne = w.value.get(P);
      if (ne) {
        if (w.value.delete(P), c.value.delete(ne), v.value === ne && (v.value = null), se === "success")
          r.value.add(ne), y.value++, console.log("[ComfyGit] Package installed successfully:", ne);
        else {
          const tt = ((ht = (rt = (Ge = N.detail) == null ? void 0 : Ge.status) == null ? void 0 : rt.messages) == null ? void 0 : ht[0]) || ((at = N.detail) == null ? void 0 : at.result) || "Unknown error";
          u.value.set(ne, tt), console.error("[ComfyGit] Package install failed:", ne, tt);
        }
        w.value.size === 0 && y.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", y.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: y.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", P);
    }
    let ye = null;
    function Pe() {
      var N;
      return ye || (ye = (N = window.app) == null ? void 0 : N.api), ye;
    }
    let fe = !1;
    function Ae() {
      if (fe) return !0;
      const N = Pe();
      return N ? (N.addEventListener("cm-task-started", $e), N.addEventListener("cm-task-completed", Me), N.addEventListener("comfygit:workflow-changed", Le), fe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Le(N) {
      const { change_type: P } = N.detail;
      (P === "created" || P === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", be);
    }), qs(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", be), fe) {
        const N = Pe();
        N && (N.removeEventListener("cm-task-started", $e), N.removeEventListener("cm-task-completed", Me), N.removeEventListener("comfygit:workflow-changed", Le)), fe = !1;
      }
    }), (N, P) => (n(), i(j, null, [
      l.value ? (n(), R(yt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ee
      }, {
        body: g(() => [
          s.value ? (n(), i("div", pM, [...P[5] || (P[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && T.value ? (n(), i("div", gM, [
            I.value.length > 0 ? (n(), i("div", hM, [
              t("div", yM, [
                t("span", wM, "Missing Custom Nodes (" + d(D.value) + ")", 1),
                I.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: re.value,
                  onClick: ie
                }, {
                  default: g(() => [
                    b(d(re.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", _M, [
                (n(!0), i(j, null, he(X.value, (se) => (n(), i("div", {
                  key: se.package_id,
                  class: "package-item"
                }, [
                  t("div", kM, [
                    t("span", bM, d(se.title), 1),
                    t("span", $M, "(" + d(se.node_count) + " " + d(se.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(se.package_id) && !c.value.has(se.package_id) && !u.value.has(se.package_id) ? (n(), R(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === se.package_id,
                    onClick: (ne) => z(se)
                  }, {
                    default: g(() => [
                      b(d(v.value === se.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === se.package_id ? (n(), i("span", CM, "Installing...")) : c.value.has(se.package_id) ? (n(), i("span", xM, "Queued")) : u.value.has(se.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(se.package_id)
                  }, "Failed ⚠", 8, SM)) : (n(), i("span", IM, "Installed"))
                ]))), 128)),
                I.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: P[0] || (P[0] = (se) => k.value = "packages")
                }, [
                  t("span", null, "Show all " + d(I.value.length) + " packages...", 1),
                  P[6] || (P[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            U.value.length > 0 ? (n(), i("div", EM, [
              t("div", TM, [
                t("span", PM, "Unknown Nodes (" + d(U.value.length) + ")", 1)
              ]),
              t("div", RM, [
                (n(!0), i(j, null, he(U.value.slice(0, 5), (se) => (n(), i("div", {
                  key: se.node_type,
                  class: "item"
                }, [
                  t("code", MM, d(se.node_type), 1),
                  P[7] || (P[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                U.value.length > 5 ? (n(), i("div", DM, " ...and " + d(U.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            W.value.length > 0 ? (n(), i("div", LM, [
              t("div", NM, [
                t("span", UM, "Requires Newer ComfyUI (" + d(W.value.length) + ")", 1)
              ]),
              t("div", AM, [
                (n(!0), i(j, null, he(W.value.slice(0, 5), (se) => (n(), i("div", {
                  key: `vg-${se.node_type}`,
                  class: "item"
                }, [
                  t("code", OM, d(se.node_type), 1),
                  t("span", zM, d(se.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                W.value.length > 5 ? (n(), i("div", FM, " ...and " + d(W.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            E.value.length > 0 ? (n(), i("div", VM, [
              t("div", BM, [
                t("span", WM, "Community-Mapped Packages (" + d(E.value.length) + ")", 1),
                M.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: le.value,
                  onClick: Te
                }, {
                  default: g(() => [
                    b(d(le.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", GM, [
                (n(!0), i(j, null, he(te.value, (se) => (n(), i("div", {
                  key: `community-${se.item_id}`,
                  class: "package-item"
                }, [
                  t("div", jM, [
                    t("div", HM, [
                      t("span", KM, d(se.title), 1),
                      t("span", qM, "(" + d(se.node_count) + " " + d(se.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", YM, [
                      P[8] || (P[8] = b(" Found via community mapping — registry metadata may be incomplete", -1)),
                      se.guidance ? (n(), i("span", JM, ". " + d(se.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  se.package_id ? (n(), i(j, { key: 0 }, [
                    !r.value.has(se.package_id) && !c.value.has(se.package_id) && !u.value.has(se.package_id) ? (n(), i("div", QM, [
                      S(De, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === se.package_id,
                        onClick: (ne) => q(se, "registry")
                      }, {
                        default: g(() => [
                          b(d(v.value === se.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      se.repository ? (n(), R(De, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === se.package_id,
                        onClick: (ne) => q(se, "git")
                      }, {
                        default: g(() => [...P[9] || (P[9] = [
                          b(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : v.value === se.package_id ? (n(), i("span", XM, "Installing...")) : c.value.has(se.package_id) ? (n(), i("span", ZM, "Queued")) : u.value.has(se.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(se.package_id)
                    }, "Failed ⚠", 8, eD)) : (n(), i("span", tD, "Installed"))
                  ], 64)) : (n(), i("span", sD, "Manual setup required"))
                ]))), 128)),
                E.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: P[1] || (P[1] = (se) => k.value = "community")
                }, [
                  t("span", null, "Show all " + d(E.value.length) + " packages...", 1),
                  P[10] || (P[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            J.value.length > 0 ? (n(), i("div", oD, [
              t("div", nD, [
                t("span", aD, "Missing Models (" + d(J.value.length) + ")", 1),
                G.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: B.value,
                  onClick: Be
                }, {
                  default: g(() => [
                    b(d(B.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", lD, [
                (n(!0), i(j, null, he(ae.value, (se) => (n(), i("div", {
                  key: se.widget_value,
                  class: "model-item"
                }, [
                  t("div", iD, [
                    t("span", rD, d(se.filename), 1)
                  ]),
                  se.canDownload ? (n(), i(j, { key: 0 }, [
                    m.value.has(se.url) ? (n(), i("span", cD, "Queued")) : (n(), R(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ne) => F(se)
                    }, {
                      default: g(() => [...P[11] || (P[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", uD, "Manual download required"))
                ]))), 128)),
                J.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: P[2] || (P[2] = (se) => k.value = "models")
                }, [
                  t("span", null, "Show all " + d(J.value.length) + " models...", 1),
                  P[12] || (P[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            t("div", dD, [
              S(Kn, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  P[3] || (P[3] = (se) => f.value = se),
                  Y
                ]
              }, {
                default: g(() => [...P[13] || (P[13] = [
                  b(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          S(De, {
            variant: "secondary",
            onClick: Ee
          }, {
            default: g(() => [...P[14] || (P[14] = [
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          ee.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            disabled: me.value,
            onClick: O
          }, {
            default: g(() => [
              b(d(me.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      k.value ? (n(), R(vM, {
        key: 1,
        title: Ne.value,
        items: We.value,
        "item-type": k.value,
        "queued-items": k.value === "models" ? m.value : c.value,
        "installed-items": k.value === "models" ? void 0 : r.value,
        "failed-items": k.value === "models" ? void 0 : u.value,
        "installing-item": k.value === "models" ? void 0 : v.value,
        onClose: P[4] || (P[4] = (se) => k.value = null),
        onAction: ze,
        onBulkAction: Ie
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), fD = /* @__PURE__ */ _e(mD, [["__scopeId", "data-v-a6bdd8c7"]]), vD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', pD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', gD = {
  comfy: vD,
  phosphor: pD
}, gl = "comfy", oc = "comfygit-theme";
let eo = null, nc = gl;
function hD() {
  try {
    const e = localStorage.getItem(oc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return gl;
}
function ac(e = gl) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = gD[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), nc = e;
  try {
    localStorage.setItem(oc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function yD() {
  return nc;
}
function wD(e) {
  ac(e);
}
function _D(e) {
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
const kD = hD();
ac(kD);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), wD(e);
  },
  getTheme: () => {
    const e = yD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let as = null, jt = null, en = null, Vo = null, mi = null, Bo = null, fi = null;
const Eo = _(null);
let dn = "no_workspace", lc = !1;
async function Nn() {
  var e;
  if (!((e = Xt) != null && e.api)) return null;
  try {
    const s = await Xt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Eo.value = await s.json());
  } catch {
  }
}
async function Ga() {
  var e;
  if ((e = Xt) != null && e.api)
    try {
      const s = await Xt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        dn = o.state, lc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ja() {
  var s;
  if (dn === "managed" || !lc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function bD() {
  if (!Eo.value) return !1;
  const e = Eo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Eo.value.has_changes;
}
function En(e) {
  as && as.remove(), as = document.createElement("div"), as.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", as.appendChild(s), as.addEventListener("click", (l) => {
    l.target === as && Ta();
  });
  const o = (l) => {
    l.key === "Escape" && (Ta(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), ia({
    render: () => pn(lR, {
      initialView: e,
      onClose: Ta,
      onStatusUpdate: async (l) => {
        Eo.value = l, tn(), await Ga(), Ha(), ja();
      }
    })
  }).mount(s), document.body.appendChild(as);
}
function Ta() {
  as && (as.remove(), as = null);
}
function vi(e) {
  Wo(), jt = document.createElement("div"), jt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  jt.style.position = "fixed", jt.style.top = `${s.bottom + 8}px`, jt.style.right = `${window.innerWidth - s.right}px`, jt.style.zIndex = "10001";
  const o = (l) => {
    jt && !jt.contains(l.target) && l.target !== e && (Wo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Wo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), en = ia({
    render: () => pn(Zr, {
      status: Eo.value,
      onClose: Wo,
      onCommitted: (l) => {
        Wo(), $D(l.success, l.message), Nn().then(tn);
      }
    })
  }), en.mount(jt), document.body.appendChild(jt);
}
function Wo() {
  en && (en.unmount(), en = null), jt && (jt.remove(), jt = null);
}
function $D(e, s) {
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
function CD() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-download-queue-root", mi = ia({
    render: () => pn(eM)
  }), mi.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Model download queue mounted"));
}
function xD() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-missing-resources-root", fi = ia({
    render: () => pn(fD)
  }), fi.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Ot = null;
function tn() {
  if (!Ot) return;
  const e = Ot.querySelector(".commit-indicator");
  e && (e.style.display = bD() ? "block" : "none");
}
function Ha() {
  if (!Ot) return;
  const e = dn !== "managed";
  Ot.disabled = e, Ot.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Xt.registerExtension({
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
        Ot && !Ot.disabled && vi(Ot);
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
    if (dn === "managed")
      try {
        await Promise.all([
          Xt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Xt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (dn !== "managed") return;
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = En, Ot = document.createElement("button"), Ot.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ot.innerHTML = 'Commit <span class="commit-indicator"></span>', Ot.title = "Quick Commit", Ot.onclick = () => vi(Ot), e.appendChild(s), e.appendChild(Ot), (r = (l = Xt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Xt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), CD(), xD(), window.addEventListener("comfygit:open-panel", ((c) => {
      var m;
      const u = (m = c.detail) == null ? void 0 : m.initialView;
      En(u);
    }));
    const { loadPendingDownloads: o } = Do();
    o(), await Promise.all([Nn(), Ga()]), tn(), Ha(), ja(), setTimeout(ja, 100), setInterval(async () => {
      await Promise.all([Nn(), Ga()]), tn(), Ha();
    }, 3e4);
    const a = Xt.api;
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
        const A = document.createElement("button");
        A.textContent = "View Logs", A.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, A.onmouseover = () => A.style.background = "#c62828", A.onmouseout = () => A.style.background = "#e53935", A.onclick = () => {
          p.remove(), En("debug-env");
        }, p.appendChild(A);
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
        const A = document.createElement("button");
        A.textContent = "Apply Changes", A.style.cssText = `
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
        `, A.onmouseover = () => A.style.background = "rgba(255,255,255,0.1)", A.onmouseout = () => A.style.background = "transparent", A.onclick = async () => {
          A.disabled = !0, A.textContent = "Restarting...", A.style.opacity = "0.7", $.textContent = "Restarting...", C.textContent = "Applying changes, please wait...";
          try {
            const I = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Xt.refreshComboInNodes && (await Xt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", C.textContent = `${y} package${y > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", A.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), w.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", C.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", A.style.display = "none";
              }
            };
            a.addEventListener("reconnected", I, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (I) {
            console.error("[ComfyGit] Failed to restart:", I), $.textContent = "Restart Failed", $.style.color = "#e53935", C.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", A.textContent = "Try Again", A.disabled = !1, A.style.opacity = "1";
          }
        }, p.appendChild(A);
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
        console.log(`[ComfyGit] Workflow ${k}: ${p}`), await Nn(), tn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (y) => {
        const k = y.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (y) => {
        const k = _D(y.detail);
        k && m(k);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (y) => {
        const k = y, { count: p = 1 } = k.detail || {};
        f(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
