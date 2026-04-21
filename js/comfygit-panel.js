import { app as Xt } from "../../scripts/app.js";
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
const ht = {}, yo = [], bs = () => {
}, Pi = () => !1, Jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Et = Object.assign, rl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Sc = Object.prototype.hasOwnProperty, dt = (e, s) => Sc.call(e, s), Je = Array.isArray, wo = (e) => mn(e) === "[object Map]", To = (e) => mn(e) === "[object Set]", Rl = (e) => mn(e) === "[object Date]", Xe = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", pt = (e) => e !== null && typeof e == "object", Ri = (e) => (pt(e) || Xe(e)) && Xe(e.then) && Xe(e.catch), Ni = Object.prototype.toString, mn = (e) => Ni.call(e), Ic = (e) => mn(e).slice(8, -1), Li = (e) => mn(e) === "[object Object]", cl = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Ec = /-\w/g, ls = Qn(
  (e) => e.replace(Ec, (s) => s.slice(1).toUpperCase())
), Tc = /\B([A-Z])/g, Ys = Qn(
  (e) => e.replace(Tc, "-$1").toLowerCase()
), Yn = Qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sa = Qn(
  (e) => e ? `on${Yn(e)}` : ""
), qs = (e, s) => !Object.is(e, s), En = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, Di = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Xn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Mc = (e) => {
  const s = $t(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let Nl;
const Zn = () => Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Je(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = $t(n) ? Lc(n) : Ft(n);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if ($t(e) || pt(e))
    return e;
}
const Pc = /;(?![^(]*\))/g, Rc = /:([^]+)/, Nc = /\/\*[^]*?\*\//g;
function Lc(e) {
  const s = {};
  return e.replace(Nc, "").split(Pc).forEach((o) => {
    if (o) {
      const n = o.split(Rc);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Ne(e) {
  let s = "";
  if ($t(e))
    s = e;
  else if (Je(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ne(e[o]);
      n && (s += n + " ");
    }
  else if (pt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Dc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Uc = /* @__PURE__ */ ll(Dc);
function Ui(e) {
  return !!e || e === "";
}
function Oc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = io(e[n], s[n]);
  return o;
}
function io(e, s) {
  if (e === s) return !0;
  let o = Rl(e), n = Rl(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ms(e), n = ms(s), o || n)
    return e === s;
  if (o = Je(e), n = Je(s), o || n)
    return o && n ? Oc(e, s) : !1;
  if (o = pt(e), n = pt(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !io(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function ul(e, s) {
  return e.findIndex((o) => io(o, s));
}
const Oi = (e) => !!(e && e.__v_isRef === !0), m = (e) => $t(e) ? e : e == null ? "" : Je(e) || pt(e) && (e.toString === Ni || !Xe(e.toString)) ? Oi(e) ? m(e.value) : JSON.stringify(e, Ai, 2) : String(e), Ai = (e, s) => Oi(s) ? Ai(e, s.value) : wo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], r) => (o[Ia(n, r) + " =>"] = l, o),
    {}
  )
} : To(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Ia(o))
} : ms(s) ? Ia(s) : pt(s) && !Je(s) && !Li(s) ? String(s) : s, Ia = (e, s = "") => {
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
class Ac {
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
      if (!this.detached && this.parent && !s) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function zc() {
  return Jt;
}
let wt;
const Ea = /* @__PURE__ */ new WeakSet();
class zi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ea.has(this) && (Ea.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ll(this), Bi(this);
    const s = wt, o = ds;
    wt = this, ds = !0;
    try {
      return this.fn();
    } finally {
      Wi(this), wt = s, ds = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        fl(s);
      this.deps = this.depsTail = void 0, Ll(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ea.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ba(this) && this.run();
  }
  get dirty() {
    return Ba(this);
  }
}
let Vi = 0, Ko, Jo;
function Fi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Jo, Jo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function dl() {
  Vi++;
}
function ml() {
  if (--Vi > 0)
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
        } catch (n) {
          e || (e = n);
        }
      s = o;
    }
  }
  if (e) throw e;
}
function Bi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Wi(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), fl(n), Vc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function Ba(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Gi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Gi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on) || (e.globalVersion = on, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ba(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = wt, n = ds;
  wt = e, ds = !0;
  try {
    Bi(e);
    const l = e.fn(e._value);
    (s.version === 0 || qs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    wt = o, ds = n, Wi(e), e.flags &= -3;
  }
}
function fl(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      fl(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Vc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let ds = !0;
const ji = [];
function Ds() {
  ji.push(ds), ds = !1;
}
function Us() {
  const e = ji.pop();
  ds = e === void 0 ? !0 : e;
}
function Ll(e) {
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
let on = 0;
class Fc {
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
    if (!wt || !ds || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Fc(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Hi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, on++, this.notify(s);
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
function Hi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        Hi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Wa = /* @__PURE__ */ new WeakMap(), no = Symbol(
  ""
), Ga = Symbol(
  ""
), nn = Symbol(
  ""
);
function Ot(e, s, o) {
  if (ds && wt) {
    let n = Wa.get(e);
    n || Wa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new vl()), l.map = n, l.key = o), l.track();
  }
}
function Ps(e, s, o, n, l, r) {
  const c = Wa.get(e);
  if (!c) {
    on++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (dl(), s === "clear")
    c.forEach(u);
  else {
    const d = Je(e), v = d && cl(o);
    if (d && o === "length") {
      const f = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === nn || !ms(w) && w >= f) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(nn)), s) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(no)), wo(e) && u(c.get(Ga)));
          break;
        case "delete":
          d || (u(c.get(no)), wo(e) && u(c.get(Ga)));
          break;
        case "set":
          wo(e) && u(c.get(no));
          break;
      }
  }
  ml();
}
function vo(e) {
  const s = lt(e);
  return s === e ? s : (Ot(s, "iterate", nn), ns(e) ? s : s.map(fs));
}
function ea(e) {
  return Ot(e = lt(e), "iterate", nn), e;
}
function Ws(e, s) {
  return Os(e) ? ao(e) ? So(fs(s)) : So(s) : fs(s);
}
const Bc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ta(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return vo(this).concat(
      ...e.map((s) => Je(s) ? vo(s) : s)
    );
  },
  entries() {
    return Ta(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
  },
  every(e, s) {
    return Is(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Is(
      this,
      "filter",
      e,
      s,
      (o) => o.map((n) => Ws(this, n)),
      arguments
    );
  },
  find(e, s) {
    return Is(
      this,
      "find",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Is(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Is(
      this,
      "findLast",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Is(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Is(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return Ma(this, "includes", e);
  },
  indexOf(...e) {
    return Ma(this, "indexOf", e);
  },
  join(e) {
    return vo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ma(this, "lastIndexOf", e);
  },
  map(e, s) {
    return Is(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Uo(this, "pop");
  },
  push(...e) {
    return Uo(this, "push", e);
  },
  reduce(e, ...s) {
    return Dl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return Dl(this, "reduceRight", e, s);
  },
  shift() {
    return Uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Is(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Uo(this, "splice", e);
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
    return Uo(this, "unshift", e);
  },
  values() {
    return Ta(this, "values", (e) => Ws(this, e));
  }
};
function Ta(e, s, o) {
  const n = ea(e), l = n[s]();
  return n !== e && !ns(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Wc = Array.prototype;
function Is(e, s, o, n, l, r) {
  const c = ea(e), u = c !== e && !ns(e), d = c[s];
  if (d !== Wc[s]) {
    const g = d.apply(e, r);
    return u ? fs(g) : g;
  }
  let v = o;
  c !== e && (u ? v = function(g, w) {
    return o.call(this, Ws(e, g), w, e);
  } : o.length > 2 && (v = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const f = d.call(c, v, n);
  return u && l ? l(f) : f;
}
function Dl(e, s, o, n) {
  const l = ea(e);
  let r = o;
  return l !== e && (ns(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ws(e, u), d, e);
  }), l[s](r, ...n);
}
function Ma(e, s, o) {
  const n = lt(e);
  Ot(n, "iterate", nn);
  const l = n[s](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = lt(o[0]), n[s](...o)) : l;
}
function Uo(e, s, o = []) {
  Ds(), dl();
  const n = lt(e)[s].apply(e, o);
  return ml(), Us(), n;
}
const Gc = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), qi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function jc(e) {
  ms(e) || (e = String(e));
  const s = lt(this);
  return Ot(s, "has", e), s.hasOwnProperty(e);
}
class Ki {
  constructor(s = !1, o = !1) {
    this._isReadonly = s, this._isShallow = o;
  }
  get(s, o, n) {
    if (o === "__v_skip") return s.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return n === (l ? r ? tu : Xi : r ? Yi : Qi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Je(s);
    if (!l) {
      let d;
      if (c && (d = Bc[o]))
        return d;
      if (o === "hasOwnProperty")
        return jc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Bt(s) ? s : n
    );
    if ((ms(o) ? qi.has(o) : Gc(o)) || (l || Ot(s, "get", o), r))
      return u;
    if (Bt(u)) {
      const d = c && cl(o) ? u : u.value;
      return l && pt(d) ? Un(d) : d;
    }
    return pt(u) ? l ? Un(u) : uo(u) : u;
  }
}
class Ji extends Ki {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let r = s[o];
    const c = Je(s) && cl(o);
    if (!this._isShallow) {
      const v = Os(r);
      if (!ns(n) && !Os(n) && (r = lt(r), n = lt(n)), !c && Bt(r) && !Bt(n))
        return v || (r.value = n), !0;
    }
    const u = c ? Number(o) < s.length : dt(s, o), d = Reflect.set(
      s,
      o,
      n,
      Bt(s) ? s : l
    );
    return s === lt(l) && (u ? qs(n, r) && Ps(s, "set", o, n) : Ps(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = dt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && Ps(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ms(o) || !qi.has(o)) && Ot(s, "has", o), n;
  }
  ownKeys(s) {
    return Ot(
      s,
      "iterate",
      Je(s) ? "length" : no
    ), Reflect.ownKeys(s);
  }
}
class Hc extends Ki {
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
const qc = /* @__PURE__ */ new Ji(), Kc = /* @__PURE__ */ new Hc(), Jc = /* @__PURE__ */ new Ji(!0);
const ja = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function Qc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, r = lt(l), c = wo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...n), f = o ? ja : s ? So : fs;
    return !s && Ot(
      r,
      "iterate",
      d ? Ga : no
    ), {
      // iterator protocol
      next() {
        const { value: g, done: w } = v.next();
        return w ? { value: g, done: w } : {
          value: u ? [f(g[0]), f(g[1])] : f(g),
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
function _n(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yc(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = lt(r), u = lt(l);
      e || (qs(l, u) && Ot(c, "get", l), Ot(c, "get", u));
      const { has: d } = wn(c), v = s ? ja : e ? So : fs;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ot(lt(l), "iterate", no), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = lt(r), u = lt(l);
      return e || (qs(l, u) && Ot(c, "has", l), Ot(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = lt(u), v = s ? ja : e ? So : fs;
      return !e && Ot(d, "iterate", no), u.forEach((f, g) => l.call(r, v(f), v(g), c));
    }
  };
  return Et(
    o,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(l) {
        !s && !ns(l) && !Os(l) && (l = lt(l));
        const r = lt(this);
        return wn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !ns(r) && !Os(r) && (r = lt(r));
        const c = lt(this), { has: u, get: d } = wn(c);
        let v = u.call(c, l);
        v || (l = lt(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? qs(r, f) && Ps(c, "set", l, r) : Ps(c, "add", l, r), this;
      },
      delete(l) {
        const r = lt(this), { has: c, get: u } = wn(r);
        let d = c.call(r, l);
        d || (l = lt(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Ps(r, "delete", l, void 0), v;
      },
      clear() {
        const l = lt(this), r = l.size !== 0, c = l.clear();
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
    o[l] = Qc(l, e, s);
  }), o;
}
function pl(e, s) {
  const o = Yc(e, s);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    dt(o, l) && l in n ? o : n,
    l,
    r
  );
}
const Xc = {
  get: /* @__PURE__ */ pl(!1, !1)
}, Zc = {
  get: /* @__PURE__ */ pl(!1, !0)
}, eu = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const Qi = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap();
function su(e) {
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
function ou(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : su(Ic(e));
}
function uo(e) {
  return Os(e) ? e : gl(
    e,
    !1,
    qc,
    Xc,
    Qi
  );
}
function nu(e) {
  return gl(
    e,
    !1,
    Jc,
    Zc,
    Yi
  );
}
function Un(e) {
  return gl(
    e,
    !0,
    Kc,
    eu,
    Xi
  );
}
function gl(e, s, o, n, l) {
  if (!pt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = ou(e);
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
function ao(e) {
  return Os(e) ? ao(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Os(e) {
  return !!(e && e.__v_isReadonly);
}
function ns(e) {
  return !!(e && e.__v_isShallow);
}
function hl(e) {
  return e ? !!e.__v_raw : !1;
}
function lt(e) {
  const s = e && e.__v_raw;
  return s ? lt(s) : e;
}
function au(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && Di(e, "__v_skip", !0), e;
}
const fs = (e) => pt(e) ? uo(e) : e, So = (e) => pt(e) ? Un(e) : e;
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $(e) {
  return lu(e, !1);
}
function lu(e, s) {
  return Bt(e) ? e : new iu(e, s);
}
class iu {
  constructor(s, o) {
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : lt(s), this._value = o ? s : fs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || ns(s) || Os(s);
    s = n ? s : lt(s), qs(s, o) && (this._rawValue = s, this._value = n ? s : fs(s), this.dep.trigger());
  }
}
function Qe(e) {
  return Bt(e) ? e.value : e;
}
const ru = {
  get: (e, s, o) => s === "__v_raw" ? e : Qe(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return Bt(l) && !Bt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function Zi(e) {
  return ao(e) ? e : new Proxy(e, ru);
}
class cu {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Fi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Gi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function uu(e, s, o = !1) {
  let n, l;
  return Xe(e) ? n = e : (n = e.get, l = e.set), new cu(n, l, o);
}
const kn = {}, On = /* @__PURE__ */ new WeakMap();
let so;
function du(e, s = !1, o = so) {
  if (o) {
    let n = On.get(o);
    n || On.set(o, n = []), n.push(e);
  }
}
function mu(e, s, o = ht) {
  const { immediate: n, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (R) => l ? R : ns(R) || l === !1 || l === 0 ? Rs(R, 1) : Rs(R);
  let f, g, w, y, _ = !1, S = !1;
  if (Bt(e) ? (g = () => e.value, _ = ns(e)) : ao(e) ? (g = () => v(e), _ = !0) : Je(e) ? (S = !0, _ = e.some((R) => ao(R) || ns(R)), g = () => e.map((R) => {
    if (Bt(R))
      return R.value;
    if (ao(R))
      return v(R);
    if (Xe(R))
      return d ? d(R, 2) : R();
  })) : Xe(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Us();
      }
    }
    const R = so;
    so = f;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      so = R;
    }
  } : g = bs, s && l) {
    const R = g, L = l === !0 ? 1 / 0 : l;
    g = () => Rs(R(), L);
  }
  const C = zc(), x = () => {
    f.stop(), C && C.active && rl(C.effects, f);
  };
  if (r && s) {
    const R = s;
    s = (...L) => {
      R(...L), x();
    };
  }
  let B = S ? new Array(e.length).fill(kn) : kn;
  const E = (R) => {
    if (!(!(f.flags & 1) || !f.dirty && !R))
      if (s) {
        const L = f.run();
        if (l || _ || (S ? L.some((V, K) => qs(V, B[K])) : qs(L, B))) {
          w && w();
          const V = so;
          so = f;
          try {
            const K = [
              L,
              // pass undefined as the old value when it's changed for the first time
              B === kn ? void 0 : S && B[0] === kn ? [] : B,
              y
            ];
            B = L, d ? d(s, 3, K) : (
              // @ts-expect-error
              s(...K)
            );
          } finally {
            so = V;
          }
        }
      } else
        f.run();
  };
  return u && u(E), f = new zi(g), f.scheduler = c ? () => c(E, !1) : E, y = (R) => du(R, !1, f), w = f.onStop = () => {
    const R = On.get(f);
    if (R) {
      if (d)
        d(R, 4);
      else
        for (const L of R) L();
      On.delete(f);
    }
  }, s ? n ? E(!0) : B = f.run() : c ? c(E.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function Rs(e, s = 1 / 0, o) {
  if (s <= 0 || !pt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Bt(e))
    Rs(e.value, s, o);
  else if (Je(e))
    for (let n = 0; n < e.length; n++)
      Rs(e[n], s, o);
  else if (To(e) || wo(e))
    e.forEach((n) => {
      Rs(n, s, o);
    });
  else if (Li(e)) {
    for (const n in e)
      Rs(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Rs(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fn(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    ta(l, s, o);
  }
}
function vs(e, s, o, n) {
  if (Xe(e)) {
    const l = fn(e, s, o, n);
    return l && Ri(l) && l.catch((r) => {
      ta(r, s, o);
    }), l;
  }
  if (Je(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(vs(e[r], s, o, n));
    return l;
  }
}
function ta(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || ht;
  if (s) {
    let u = s.parent;
    const d = s.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const f = u.ec;
      if (f) {
        for (let g = 0; g < f.length; g++)
          if (f[g](e, d, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ds(), fn(r, null, 10, [
        e,
        d,
        v
      ]), Us();
      return;
    }
  }
  fu(e, o, l, n, c);
}
function fu(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const qt = [];
let ys = -1;
const _o = [];
let Gs = null, go = 0;
const er = /* @__PURE__ */ Promise.resolve();
let An = null;
function Rt(e) {
  const s = An || er;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function vu(e) {
  let s = ys + 1, o = qt.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = qt[n], r = an(l);
    r < e || r === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function yl(e) {
  if (!(e.flags & 1)) {
    const s = an(e), o = qt[qt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= an(o) ? qt.push(e) : qt.splice(vu(s), 0, e), e.flags |= 1, tr();
  }
}
function tr() {
  An || (An = er.then(or));
}
function pu(e) {
  Je(e) ? _o.push(...e) : Gs && e.id === -1 ? Gs.splice(go + 1, 0, e) : e.flags & 1 || (_o.push(e), e.flags |= 1), tr();
}
function Ul(e, s, o = ys + 1) {
  for (; o < qt.length; o++) {
    const n = qt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      qt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function sr(e) {
  if (_o.length) {
    const s = [...new Set(_o)].sort(
      (o, n) => an(o) - an(n)
    );
    if (_o.length = 0, Gs) {
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
const an = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function or(e) {
  try {
    for (ys = 0; ys < qt.length; ys++) {
      const s = qt[ys];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), fn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ys < qt.length; ys++) {
      const s = qt[ys];
      s && (s.flags &= -2);
    }
    ys = -1, qt.length = 0, sr(), An = null, (qt.length || _o.length) && or();
  }
}
let Dt = null, nr = null;
function zn(e) {
  const s = Dt;
  return Dt = e, nr = e && e.type.__scopeId || null, s;
}
function p(e, s = Dt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Bn(-1);
    const r = zn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      zn(r), n._d && Bn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function St(e, s) {
  if (Dt === null)
    return e;
  const o = ia(Dt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, d = ht] = s[l];
    r && (Xe(r) && (r = {
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
function Xs(e, s, o, n) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[n];
    d && (Ds(), vs(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Us());
  }
}
const ar = Symbol("_vte"), lr = (e) => e.__isTeleport, Qo = (e) => e && (e.disabled || e.disabled === ""), Ol = (e) => e && (e.defer || e.defer === ""), Al = (e) => typeof SVGElement < "u" && e instanceof SVGElement, zl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ha = (e, s) => {
  const o = e && e.to;
  return $t(o) ? s ? s(o) : null : o;
}, ir = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: g,
      pbc: w,
      o: { insert: y, querySelector: _, createText: S, createComment: C }
    } = v, x = Qo(s.props);
    let { shapeFlag: B, children: E, dynamicChildren: R } = s;
    if (e == null) {
      const L = s.el = S(""), V = s.anchor = S("");
      y(L, o, n), y(V, o, n);
      const K = (W, X) => {
        B & 16 && f(
          E,
          W,
          X,
          l,
          r,
          c,
          u,
          d
        );
      }, z = () => {
        const W = s.target = Ha(s.props, _), X = rr(W, s, S, y);
        W && (c !== "svg" && Al(W) ? c = "svg" : c !== "mathml" && zl(W) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(W), x || (K(W, X), Tn(s, !1)));
      };
      x && (K(o, V), Tn(s, !0)), Ol(s.props) ? (s.el.__isMounted = !1, jt(() => {
        z(), delete s.el.__isMounted;
      }, r)) : z();
    } else {
      if (Ol(s.props) && e.el.__isMounted === !1) {
        jt(() => {
          ir.process(
            e,
            s,
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
      s.el = e.el, s.targetStart = e.targetStart;
      const L = s.anchor = e.anchor, V = s.target = e.target, K = s.targetAnchor = e.targetAnchor, z = Qo(e.props), W = z ? o : V, X = z ? L : K;
      if (c === "svg" || Al(V) ? c = "svg" : (c === "mathml" || zl(V)) && (c = "mathml"), R ? (w(
        e.dynamicChildren,
        R,
        W,
        l,
        r,
        c,
        u
      ), $l(e, s, !0)) : d || g(
        e,
        s,
        W,
        X,
        l,
        r,
        c,
        u,
        !1
      ), x)
        z ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : bn(
          s,
          o,
          L,
          v,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const te = s.target = Ha(
          s.props,
          _
        );
        te && bn(
          s,
          te,
          null,
          v,
          0
        );
      } else z && bn(
        s,
        V,
        K,
        v,
        1
      );
      Tn(s, x);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: v,
      targetAnchor: f,
      target: g,
      props: w
    } = e;
    if (g && (l(v), l(f)), r && l(d), c & 16) {
      const y = r || !Qo(w);
      for (let _ = 0; _ < u.length; _++) {
        const S = u[_];
        n(
          S,
          s,
          o,
          y,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: bn,
  hydrate: gu
};
function bn(e, s, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, g = r === 2;
  if (g && n(c, s, o), (!g || Qo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        s,
        o,
        2
      );
  g && n(u, s, o);
}
function gu(e, s, o, n, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, g) {
  function w(S, C, x, B) {
    C.anchor = g(
      c(S),
      C,
      u(S),
      o,
      n,
      l,
      r
    ), C.targetStart = x, C.targetAnchor = B;
  }
  const y = s.target = Ha(
    s.props,
    d
  ), _ = Qo(s.props);
  if (y) {
    const S = y._lpa || y.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          S,
          S && c(S)
        );
      else {
        s.anchor = c(e);
        let C = S;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              s.targetStart = C;
            else if (C.data === "teleport anchor") {
              s.targetAnchor = C, y._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          C = c(C);
        }
        s.targetAnchor || rr(y, s, f, v), g(
          S && c(S),
          s,
          y,
          o,
          n,
          l,
          r
        );
      }
    Tn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const Ut = ir;
function Tn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function rr(e, s, o, n) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[ar] = r, e && (n(l, e), n(r, e)), r;
}
const Ts = Symbol("_leaveCb"), $n = Symbol("_enterCb");
function cr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return nt(() => {
    e.isMounted = !0;
  }), na(() => {
    e.isUnmounting = !0;
  }), e;
}
const ss = [Function, Array], ur = {
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
}, dr = (e) => {
  const s = e.subTree;
  return s.component ? dr(s.component) : s;
}, hu = {
  name: "BaseTransition",
  props: ur,
  setup(e, { slots: s }) {
    const o = xl(), n = cr();
    return () => {
      const l = s.default && wl(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = mr(l), c = lt(e), { mode: u } = c;
      if (n.isLeaving)
        return Pa(r);
      const d = Vl(r);
      if (!d)
        return Pa(r);
      let v = ln(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => v = g
      );
      d.type !== zt && ro(d, v);
      let f = o.subTree && Vl(o.subTree);
      if (f && f.type !== zt && !oo(f, d) && dr(o).type !== zt) {
        let g = ln(
          f,
          c,
          n,
          o
        );
        if (ro(f, g), u === "out-in" && d.type !== zt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, f = void 0;
          }, Pa(r);
        u === "in-out" && d.type !== zt ? g.delayLeave = (w, y, _) => {
          const S = fr(
            n,
            f
          );
          S[String(f.key)] = f, w[Ts] = () => {
            y(), w[Ts] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function mr(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== zt) {
        s = o;
        break;
      }
  }
  return s;
}
const yu = hu;
function fr(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function ln(e, s, o, n, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: y,
    onAfterLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: C,
    onAppear: x,
    onAfterAppear: B,
    onAppearCancelled: E
  } = s, R = String(e.key), L = fr(o, e), V = (W, X) => {
    W && vs(
      W,
      n,
      9,
      X
    );
  }, K = (W, X) => {
    const te = X[1];
    V(W, X), Je(W) ? W.every((re) => re.length <= 1) && te() : W.length <= 1 && te();
  }, z = {
    mode: c,
    persisted: u,
    beforeEnter(W) {
      let X = d;
      if (!o.isMounted)
        if (r)
          X = C || d;
        else
          return;
      W[Ts] && W[Ts](
        !0
        /* cancelled */
      );
      const te = L[R];
      te && oo(e, te) && te.el[Ts] && te.el[Ts](), V(X, [W]);
    },
    enter(W) {
      let X = v, te = f, re = g;
      if (!o.isMounted)
        if (r)
          X = x || v, te = B || f, re = E || g;
        else
          return;
      let he = !1;
      const ne = W[$n] = (Q) => {
        he || (he = !0, Q ? V(re, [W]) : V(te, [W]), z.delayedLeave && z.delayedLeave(), W[$n] = void 0);
      };
      X ? K(X, [W, ne]) : ne();
    },
    leave(W, X) {
      const te = String(e.key);
      if (W[$n] && W[$n](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return X();
      V(w, [W]);
      let re = !1;
      const he = W[Ts] = (ne) => {
        re || (re = !0, X(), ne ? V(S, [W]) : V(_, [W]), W[Ts] = void 0, L[te] === e && delete L[te]);
      };
      L[te] = e, y ? K(y, [W, he]) : he();
    },
    clone(W) {
      const X = ln(
        W,
        s,
        o,
        n,
        l
      );
      return l && l(X), X;
    }
  };
  return z;
}
function Pa(e) {
  if (sa(e))
    return e = Js(e), e.children = null, e;
}
function Vl(e) {
  if (!sa(e))
    return lr(e.type) && e.children ? mr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Xe(o.default))
      return o.default();
  }
}
function ro(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, ro(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function wl(e, s = !1, o) {
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
      wl(c.children, s, u)
    )) : (s || c.type !== zt) && n.push(u != null ? Js(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function _e(e, s) {
  return Xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Et({ name: e.name }, s, { setup: e })
  ) : e;
}
function vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vn = /* @__PURE__ */ new WeakMap();
function Yo(e, s, o, n, l = !1) {
  if (Je(e)) {
    e.forEach(
      (_, S) => Yo(
        _,
        s && (Je(s) ? s[S] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (ko(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Yo(e, s, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? ia(n.component) : n.el, c = l ? null : r, { i: u, r: d } = e, v = s && s.r, f = u.refs === ht ? u.refs = {} : u.refs, g = u.setupState, w = lt(g), y = g === ht ? Pi : (_) => dt(w, _);
  if (v != null && v !== d) {
    if (Fl(s), $t(v))
      f[v] = null, y(v) && (g[v] = null);
    else if (Bt(v)) {
      v.value = null;
      const _ = s;
      _.k && (f[_.k] = null);
    }
  }
  if (Xe(d))
    fn(d, u, 12, [c, f]);
  else {
    const _ = $t(d), S = Bt(d);
    if (_ || S) {
      const C = () => {
        if (e.f) {
          const x = _ ? y(d) ? g[d] : f[d] : d.value;
          if (l)
            Je(x) && rl(x, r);
          else if (Je(x))
            x.includes(r) || x.push(r);
          else if (_)
            f[d] = [r], y(d) && (g[d] = f[d]);
          else {
            const B = [r];
            d.value = B, e.k && (f[e.k] = B);
          }
        } else _ ? (f[d] = c, y(d) && (g[d] = c)) : S && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const x = () => {
          C(), Vn.delete(e);
        };
        x.id = -1, Vn.set(e, x), jt(x, o);
      } else
        Fl(e), C();
    }
  }
}
function Fl(e) {
  const s = Vn.get(e);
  s && (s.flags |= 8, Vn.delete(e));
}
Zn().requestIdleCallback;
Zn().cancelIdleCallback;
const ko = (e) => !!e.type.__asyncLoader, sa = (e) => e.type.__isKeepAlive;
function wu(e, s) {
  pr(e, "a", s);
}
function _u(e, s) {
  pr(e, "da", s);
}
function pr(e, s, o = Vt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (oa(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      sa(l.parent.vnode) && ku(n, s, o, l), l = l.parent;
  }
}
function ku(e, s, o, n) {
  const l = oa(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  Mo(() => {
    rl(n[s], l);
  }, o);
}
function oa(e, s, o = Vt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Ds();
      const u = vn(o), d = vs(s, o, e, c);
      return u(), Us(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (s, o = Vt) => {
  (!un || e === "sp") && oa(e, (...n) => s(...n), o);
}, bu = As("bm"), nt = As("m"), $u = As(
  "bu"
), gr = As("u"), na = As(
  "bum"
), Mo = As("um"), Cu = As(
  "sp"
), xu = As("rtg"), Su = As("rtc");
function Iu(e, s = Vt) {
  oa("ec", e, s);
}
const Eu = "components", hr = Symbol.for("v-ndc");
function _l(e) {
  return $t(e) ? Tu(Eu, e, !1) || e : e || hr;
}
function Tu(e, s, o = !0, n = !1) {
  const l = Dt || Vt;
  if (l) {
    const r = l.type;
    {
      const u = hd(
        r,
        !1
      );
      if (u && (u === s || u === ls(s) || u === Yn(ls(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bl(l[e] || r[e], s) || // global registration
      Bl(l.appContext[e], s)
    );
    return !c && n ? r : c;
  }
}
function Bl(e, s) {
  return e && (e[s] || e[ls(s)] || e[Yn(ls(s))]);
}
function we(e, s, o, n) {
  let l;
  const r = o, c = Je(e);
  if (c || $t(e)) {
    const u = c && ao(e);
    let d = !1, v = !1;
    u && (d = !ns(e), v = Os(e), e = ea(e)), l = new Array(e.length);
    for (let f = 0, g = e.length; f < g; f++)
      l[f] = s(
        d ? v ? So(fs(e[f])) : fs(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (pt(e))
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
function ts(e, s) {
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (Je(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const r = n.fn(...l);
      return r && (r.key = n.key), r;
    } : n.fn);
  }
  return e;
}
function et(e, s, o = {}, n, l) {
  if (Dt.ce || Dt.parent && ko(Dt.parent) && Dt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), N(
      j,
      null,
      [k("slot", o, n && n())],
      v ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), a();
  const c = r && yr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = N(
    j,
    {
      key: (u && !ms(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function yr(e) {
  return e.some((s) => cn(s) ? !(s.type === zt || s.type === j && !yr(s.children)) : !0) ? e : null;
}
const qa = (e) => e ? Or(e) ? ia(e) : qa(e.parent) : null, Xo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Et(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => qa(e.parent),
    $root: (e) => qa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => _r(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Fu.bind(e)
  })
), Ra = (e, s) => e !== ht && !e.__isScriptSetup && dt(e, s), Mu = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (s[0] !== "$") {
      const w = c[s];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[s];
          case 2:
            return l[s];
          case 4:
            return o[s];
          case 3:
            return r[s];
        }
      else {
        if (Ra(n, s))
          return c[s] = 1, n[s];
        if (l !== ht && dt(l, s))
          return c[s] = 2, l[s];
        if (dt(r, s))
          return c[s] = 3, r[s];
        if (o !== ht && dt(o, s))
          return c[s] = 4, o[s];
        Ka && (c[s] = 0);
      }
    }
    const v = Xo[s];
    let f, g;
    if (v)
      return s === "$attrs" && Ot(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = u.__cssModules) && (f = f[s])
    )
      return f;
    if (o !== ht && dt(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, dt(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: r } = e;
    return Ra(l, s) ? (l[s] = o, !0) : n !== ht && dt(n, s) ? (n[s] = o, !0) : dt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== ht && u[0] !== "$" && dt(e, u) || Ra(s, u) || dt(r, u) || dt(n, u) || dt(Xo, u) || dt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : dt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Wl(e) {
  return Je(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Ka = !0;
function Pu(e) {
  const s = _r(e), o = e.proxy, n = e.ctx;
  Ka = !1, s.beforeCreate && Gl(s.beforeCreate, e, "bc");
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
    beforeMount: g,
    mounted: w,
    beforeUpdate: y,
    updated: _,
    activated: S,
    deactivated: C,
    beforeDestroy: x,
    beforeUnmount: B,
    destroyed: E,
    unmounted: R,
    render: L,
    renderTracked: V,
    renderTriggered: K,
    errorCaptured: z,
    serverPrefetch: W,
    // public API
    expose: X,
    inheritAttrs: te,
    // assets
    components: re,
    directives: he,
    filters: ne
  } = s;
  if (v && Ru(v, n, null), c)
    for (const Re in c) {
      const ae = c[Re];
      Xe(ae) && (n[Re] = ae.bind(o));
    }
  if (l) {
    const Re = l.call(o, o);
    pt(Re) && (e.data = uo(Re));
  }
  if (Ka = !0, r)
    for (const Re in r) {
      const ae = r[Re], pe = Xe(ae) ? ae.bind(o, o) : Xe(ae.get) ? ae.get.bind(o, o) : bs, ue = !Xe(ae) && Xe(ae.set) ? ae.set.bind(o) : bs, Oe = A({
        get: pe,
        set: ue
      });
      Object.defineProperty(n, Re, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (ee) => Oe.value = ee
      });
    }
  if (u)
    for (const Re in u)
      wr(u[Re], n, o, Re);
  if (d) {
    const Re = Xe(d) ? d.call(o) : d;
    Reflect.ownKeys(Re).forEach((ae) => {
      Au(ae, Re[ae]);
    });
  }
  f && Gl(f, e, "c");
  function me(Re, ae) {
    Je(ae) ? ae.forEach((pe) => Re(pe.bind(o))) : ae && Re(ae.bind(o));
  }
  if (me(bu, g), me(nt, w), me($u, y), me(gr, _), me(wu, S), me(_u, C), me(Iu, z), me(Su, V), me(xu, K), me(na, B), me(Mo, R), me(Cu, W), Je(X))
    if (X.length) {
      const Re = e.exposed || (e.exposed = {});
      X.forEach((ae) => {
        Object.defineProperty(Re, ae, {
          get: () => o[ae],
          set: (pe) => o[ae] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === bs && (e.render = L), te != null && (e.inheritAttrs = te), re && (e.components = re), he && (e.directives = he), W && vr(e);
}
function Ru(e, s, o = bs) {
  Je(e) && (e = Ja(e));
  for (const n in e) {
    const l = e[n];
    let r;
    pt(l) ? "default" in l ? r = Mn(
      l.from || n,
      l.default,
      !0
    ) : r = Mn(l.from || n) : r = Mn(l), Bt(r) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[n] = r;
  }
}
function Gl(e, s, o) {
  vs(
    Je(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function wr(e, s, o, n) {
  let l = n.includes(".") ? $r(o, n) : () => o[n];
  if ($t(e)) {
    const r = s[e];
    Xe(r) && bt(l, r);
  } else if (Xe(e))
    bt(l, e.bind(o));
  else if (pt(e))
    if (Je(e))
      e.forEach((r) => wr(r, s, o, n));
    else {
      const r = Xe(e.handler) ? e.handler.bind(o) : s[e.handler];
      Xe(r) && bt(l, r, e);
    }
}
function _r(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (v) => Fn(d, v, c, !0)
  ), Fn(d, s, c)), pt(s) && r.set(s, d), d;
}
function Fn(e, s, o, n = !1) {
  const { mixins: l, extends: r } = s;
  r && Fn(e, r, o, !0), l && l.forEach(
    (c) => Fn(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const u = Nu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const Nu = {
  data: jl,
  props: Hl,
  emits: Hl,
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
  watch: Du,
  // provide / inject
  provide: jl,
  inject: Lu
};
function jl(e, s) {
  return s ? e ? function() {
    return Et(
      Xe(e) ? e.call(this, this) : e,
      Xe(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Lu(e, s) {
  return jo(Ja(e), Ja(s));
}
function Ja(e) {
  if (Je(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Gt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function jo(e, s) {
  return e ? Et(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Hl(e, s) {
  return e ? Je(e) && Je(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Et(
    /* @__PURE__ */ Object.create(null),
    Wl(e),
    Wl(s ?? {})
  ) : s;
}
function Du(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Et(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = Gt(e[n], s[n]);
  return o;
}
function kr() {
  return {
    app: null,
    config: {
      isNativeTag: Pi,
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
let Uu = 0;
function Ou(e, s) {
  return function(n, l = null) {
    Xe(n) || (n = Et({}, n)), l != null && !pt(l) && (l = null);
    const r = kr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Uu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: wd,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...g) {
        return c.has(f) || (f && Xe(f.install) ? (c.add(f), f.install(v, ...g)) : Xe(f) && (c.add(f), f(v, ...g))), v;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), v;
      },
      component(f, g) {
        return g ? (r.components[f] = g, v) : r.components[f];
      },
      directive(f, g) {
        return g ? (r.directives[f] = g, v) : r.directives[f];
      },
      mount(f, g, w) {
        if (!d) {
          const y = v._ceVNode || k(n, l);
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, f, w), d = !0, v._container = f, f.__vue_app__ = v, ia(y.component);
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
      provide(f, g) {
        return r.provides[f] = g, v;
      },
      runWithContext(f) {
        const g = bo;
        bo = v;
        try {
          return f();
        } finally {
          bo = g;
        }
      }
    };
    return v;
  };
}
let bo = null;
function Au(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const n = Vt.parent && Vt.parent.provides;
    n === o && (o = Vt.provides = Object.create(n)), o[e] = s;
  }
}
function Mn(e, s, o = !1) {
  const n = xl();
  if (n || bo) {
    let l = bo ? bo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Xe(s) ? s.call(n && n.proxy) : s;
  }
}
const zu = Symbol.for("v-scx"), Vu = () => Mn(zu);
function bt(e, s, o) {
  return br(e, s, o);
}
function br(e, s, o = ht) {
  const { immediate: n, deep: l, flush: r, once: c } = o, u = Et({}, o), d = s && n || !s && r !== "post";
  let v;
  if (un) {
    if (r === "sync") {
      const y = Vu();
      v = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!d) {
      const y = () => {
      };
      return y.stop = bs, y.resume = bs, y.pause = bs, y;
    }
  }
  const f = Vt;
  u.call = (y, _, S) => vs(y, f, _, S);
  let g = !1;
  r === "post" ? u.scheduler = (y) => {
    jt(y, f && f.suspense);
  } : r !== "sync" && (g = !0, u.scheduler = (y, _) => {
    _ ? y() : yl(y);
  }), u.augmentJob = (y) => {
    s && (y.flags |= 4), g && (y.flags |= 2, f && (y.id = f.uid, y.i = f));
  };
  const w = mu(e, s, u);
  return un && (v ? v.push(w) : d && w()), w;
}
function Fu(e, s, o) {
  const n = this.proxy, l = $t(e) ? e.includes(".") ? $r(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Xe(s) ? r = s : (r = s.handler, o = s);
  const c = vn(this), u = br(l, r.bind(n), o);
  return c(), u;
}
function $r(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const Bu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ls(s)}Modifiers`] || e[`${Ys(s)}Modifiers`];
function Wu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ht;
  let l = o;
  const r = s.startsWith("update:"), c = r && Bu(n, s.slice(7));
  c && (c.trim && (l = o.map((f) => $t(f) ? f.trim() : f)), c.number && (l = o.map(Xn)));
  let u, d = n[u = Sa(s)] || // also try camelCase event handler (#2249)
  n[u = Sa(ls(s))];
  !d && r && (d = n[u = Sa(Ys(s))]), d && vs(
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
    e.emitted[u] = !0, vs(
      v,
      e,
      6,
      l
    );
  }
}
const Gu = /* @__PURE__ */ new WeakMap();
function Cr(e, s, o = !1) {
  const n = o ? Gu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!Xe(e)) {
    const d = (v) => {
      const f = Cr(v, s, !0);
      f && (u = !0, Et(c, f));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (pt(e) && n.set(e, null), null) : (Je(r) ? r.forEach((d) => c[d] = null) : Et(c, r), pt(e) && n.set(e, c), c);
}
function aa(e, s) {
  return !e || !Jn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), dt(e, s[0].toLowerCase() + s.slice(1)) || dt(e, Ys(s)) || dt(e, s));
}
function ql(e) {
  const {
    type: s,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: v,
    renderCache: f,
    props: g,
    data: w,
    setupState: y,
    ctx: _,
    inheritAttrs: S
  } = e, C = zn(e);
  let x, B;
  try {
    if (o.shapeFlag & 4) {
      const R = l || n, L = R;
      x = _s(
        v.call(
          L,
          R,
          f,
          g,
          y,
          w,
          _
        )
      ), B = u;
    } else {
      const R = s;
      x = _s(
        R.length > 1 ? R(
          g,
          { attrs: u, slots: c, emit: d }
        ) : R(
          g,
          null
        )
      ), B = s.props ? u : ju(u);
    }
  } catch (R) {
    Zo.length = 0, ta(R, e, 1), x = k(zt);
  }
  let E = x;
  if (B && S !== !1) {
    const R = Object.keys(B), { shapeFlag: L } = E;
    R.length && L & 7 && (r && R.some(il) && (B = Hu(
      B,
      r
    )), E = Js(E, B, !1, !0));
  }
  return o.dirs && (E = Js(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && ro(E, o.transition), x = E, zn(C), x;
}
const ju = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Jn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Hu = (e, s) => {
  const o = {};
  for (const n in e)
    (!il(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function qu(e, s, o) {
  const { props: n, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = s, v = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Kl(n, c, v) : !!c;
    if (d & 8) {
      const f = s.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        const w = f[g];
        if (c[w] !== n[w] && !aa(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Kl(n, c, v) : !0 : !!c;
  return !1;
}
function Kl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (s[r] !== e[r] && !aa(o, r))
      return !0;
  }
  return !1;
}
function Ku({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const xr = {}, Sr = () => Object.create(xr), Ir = (e) => Object.getPrototypeOf(e) === xr;
function Ju(e, s, o, n = !1) {
  const l = {}, r = Sr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Er(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : nu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Qu(e, s, o, n) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = lt(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const f = e.vnode.dynamicProps;
      for (let g = 0; g < f.length; g++) {
        let w = f[g];
        if (aa(e.emitsOptions, w))
          continue;
        const y = s[w];
        if (d)
          if (dt(r, w))
            y !== r[w] && (r[w] = y, v = !0);
          else {
            const _ = ls(w);
            l[_] = Qa(
              d,
              u,
              _,
              y,
              e,
              !1
            );
          }
        else
          y !== r[w] && (r[w] = y, v = !0);
      }
    }
  } else {
    Er(e, s, l, r) && (v = !0);
    let f;
    for (const g in u)
      (!s || // for camelCase
      !dt(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Ys(g)) === g || !dt(s, f))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[g] = Qa(
        d,
        u,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (r !== u)
      for (const g in r)
        (!s || !dt(s, g)) && (delete r[g], v = !0);
  }
  v && Ps(e.attrs, "set", "");
}
function Er(e, s, o, n) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (qo(d))
        continue;
      const v = s[d];
      let f;
      l && dt(l, f = ls(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : aa(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, c = !0);
    }
  if (r) {
    const d = lt(o), v = u || ht;
    for (let f = 0; f < r.length; f++) {
      const g = r[f];
      o[g] = Qa(
        l,
        d,
        g,
        v[g],
        e,
        !dt(v, g)
      );
    }
  }
  return c;
}
function Qa(e, s, o, n, l, r) {
  const c = e[o];
  if (c != null) {
    const u = dt(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Xe(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          n = v[o];
        else {
          const f = vn(l);
          n = v[o] = d.call(
            null,
            s
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
    ] && (n === "" || n === Ys(o)) && (n = !0));
  }
  return n;
}
const Yu = /* @__PURE__ */ new WeakMap();
function Tr(e, s, o = !1) {
  const n = o ? Yu : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!Xe(e)) {
    const f = (g) => {
      d = !0;
      const [w, y] = Tr(g, s, !0);
      Et(c, w), y && u.push(...y);
    };
    !o && s.mixins.length && s.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return pt(e) && n.set(e, yo), yo;
  if (Je(r))
    for (let f = 0; f < r.length; f++) {
      const g = ls(r[f]);
      Jl(g) && (c[g] = ht);
    }
  else if (r)
    for (const f in r) {
      const g = ls(f);
      if (Jl(g)) {
        const w = r[f], y = c[g] = Je(w) || Xe(w) ? { type: w } : Et({}, w), _ = y.type;
        let S = !1, C = !0;
        if (Je(_))
          for (let x = 0; x < _.length; ++x) {
            const B = _[x], E = Xe(B) && B.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && (C = !1);
          }
        else
          S = Xe(_) && _.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = S, y[
          1
          /* shouldCastTrue */
        ] = C, (S || dt(y, "default")) && u.push(g);
      }
    }
  const v = [c, u];
  return pt(e) && n.set(e, v), v;
}
function Jl(e) {
  return e[0] !== "$" && !qo(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => Je(e) ? e.map(_s) : [_s(e)], Xu = (e, s, o) => {
  if (s._n)
    return s;
  const n = p((...l) => bl(s(...l)), o);
  return n._c = !1, n;
}, Mr = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (Xe(r))
      s[l] = Xu(l, r, n);
    else if (r != null) {
      const c = bl(r);
      s[l] = () => c;
    }
  }
}, Pr = (e, s) => {
  const o = bl(s);
  e.slots.default = () => o;
}, Rr = (e, s, o) => {
  for (const n in s)
    (o || !kl(n)) && (e[n] = s[n]);
}, Zu = (e, s, o) => {
  const n = e.slots = Sr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Rr(n, s, o), o && Di(n, "_", l, !0)) : Mr(s, n);
  } else s && Pr(e, s);
}, ed = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, c = ht;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : Rr(l, s, o) : (r = !s.$stable, Mr(s, l)), c = s;
  } else s && (Pr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !kl(u) && c[u] == null && delete l[u];
}, jt = ad;
function td(e) {
  return sd(e);
}
function sd(e, s) {
  const o = Zn();
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
    parentNode: g,
    nextSibling: w,
    setScopeId: y = bs,
    insertStaticContent: _
  } = e, S = (F, Y, ve, Ee = null, $e = null, Se = null, Le = void 0, Ue = null, De = !!Y.dynamicChildren) => {
    if (F === Y)
      return;
    F && !oo(F, Y) && (Ee = T(F), ee(F, $e, Se, !0), F = null), Y.patchFlag === -2 && (De = !1, Y.dynamicChildren = null);
    const { type: Te, ref: Fe, shapeFlag: Me } = Y;
    switch (Te) {
      case la:
        C(F, Y, ve, Ee);
        break;
      case zt:
        x(F, Y, ve, Ee);
        break;
      case La:
        F == null && B(Y, ve, Ee, Le);
        break;
      case j:
        re(
          F,
          Y,
          ve,
          Ee,
          $e,
          Se,
          Le,
          Ue,
          De
        );
        break;
      default:
        Me & 1 ? L(
          F,
          Y,
          ve,
          Ee,
          $e,
          Se,
          Le,
          Ue,
          De
        ) : Me & 6 ? he(
          F,
          Y,
          ve,
          Ee,
          $e,
          Se,
          Le,
          Ue,
          De
        ) : (Me & 64 || Me & 128) && Te.process(
          F,
          Y,
          ve,
          Ee,
          $e,
          Se,
          Le,
          Ue,
          De,
          Ve
        );
    }
    Fe != null && $e ? Yo(Fe, F && F.ref, Se, Y || F, !Y) : Fe == null && F && F.ref != null && Yo(F.ref, null, Se, F, !0);
  }, C = (F, Y, ve, Ee) => {
    if (F == null)
      n(
        Y.el = u(Y.children),
        ve,
        Ee
      );
    else {
      const $e = Y.el = F.el;
      Y.children !== F.children && v($e, Y.children);
    }
  }, x = (F, Y, ve, Ee) => {
    F == null ? n(
      Y.el = d(Y.children || ""),
      ve,
      Ee
    ) : Y.el = F.el;
  }, B = (F, Y, ve, Ee) => {
    [F.el, F.anchor] = _(
      F.children,
      Y,
      ve,
      Ee,
      F.el,
      F.anchor
    );
  }, E = ({ el: F, anchor: Y }, ve, Ee) => {
    let $e;
    for (; F && F !== Y; )
      $e = w(F), n(F, ve, Ee), F = $e;
    n(Y, ve, Ee);
  }, R = ({ el: F, anchor: Y }) => {
    let ve;
    for (; F && F !== Y; )
      ve = w(F), l(F), F = ve;
    l(Y);
  }, L = (F, Y, ve, Ee, $e, Se, Le, Ue, De) => {
    if (Y.type === "svg" ? Le = "svg" : Y.type === "math" && (Le = "mathml"), F == null)
      V(
        Y,
        ve,
        Ee,
        $e,
        Se,
        Le,
        Ue,
        De
      );
    else {
      const Te = F.el && F.el._isVueCE ? F.el : null;
      try {
        Te && Te._beginPatch(), W(
          F,
          Y,
          $e,
          Se,
          Le,
          Ue,
          De
        );
      } finally {
        Te && Te._endPatch();
      }
    }
  }, V = (F, Y, ve, Ee, $e, Se, Le, Ue) => {
    let De, Te;
    const { props: Fe, shapeFlag: Me, transition: ye, dirs: Z } = F;
    if (De = F.el = c(
      F.type,
      Se,
      Fe && Fe.is,
      Fe
    ), Me & 8 ? f(De, F.children) : Me & 16 && z(
      F.children,
      De,
      null,
      Ee,
      $e,
      Na(F, Se),
      Le,
      Ue
    ), Z && Xs(F, null, Ee, "created"), K(De, F, F.scopeId, Le, Ee), Fe) {
      for (const D in Fe)
        D !== "value" && !qo(D) && r(De, D, null, Fe[D], Se, Ee);
      "value" in Fe && r(De, "value", null, Fe.value, Se), (Te = Fe.onVnodeBeforeMount) && ps(Te, Ee, F);
    }
    Z && Xs(F, null, Ee, "beforeMount");
    const Be = od($e, ye);
    Be && ye.beforeEnter(De), n(De, Y, ve), ((Te = Fe && Fe.onVnodeMounted) || Be || Z) && jt(() => {
      Te && ps(Te, Ee, F), Be && ye.enter(De), Z && Xs(F, null, Ee, "mounted");
    }, $e);
  }, K = (F, Y, ve, Ee, $e) => {
    if (ve && y(F, ve), Ee)
      for (let Se = 0; Se < Ee.length; Se++)
        y(F, Ee[Se]);
    if ($e) {
      let Se = $e.subTree;
      if (Y === Se || Lr(Se.type) && (Se.ssContent === Y || Se.ssFallback === Y)) {
        const Le = $e.vnode;
        K(
          F,
          Le,
          Le.scopeId,
          Le.slotScopeIds,
          $e.parent
        );
      }
    }
  }, z = (F, Y, ve, Ee, $e, Se, Le, Ue, De = 0) => {
    for (let Te = De; Te < F.length; Te++) {
      const Fe = F[Te] = Ue ? js(F[Te]) : _s(F[Te]);
      S(
        null,
        Fe,
        Y,
        ve,
        Ee,
        $e,
        Se,
        Le,
        Ue
      );
    }
  }, W = (F, Y, ve, Ee, $e, Se, Le) => {
    const Ue = Y.el = F.el;
    let { patchFlag: De, dynamicChildren: Te, dirs: Fe } = Y;
    De |= F.patchFlag & 16;
    const Me = F.props || ht, ye = Y.props || ht;
    let Z;
    if (ve && Zs(ve, !1), (Z = ye.onVnodeBeforeUpdate) && ps(Z, ve, Y, F), Fe && Xs(Y, F, ve, "beforeUpdate"), ve && Zs(ve, !0), (Me.innerHTML && ye.innerHTML == null || Me.textContent && ye.textContent == null) && f(Ue, ""), Te ? X(
      F.dynamicChildren,
      Te,
      Ue,
      ve,
      Ee,
      Na(Y, $e),
      Se
    ) : Le || ae(
      F,
      Y,
      Ue,
      null,
      ve,
      Ee,
      Na(Y, $e),
      Se,
      !1
    ), De > 0) {
      if (De & 16)
        te(Ue, Me, ye, ve, $e);
      else if (De & 2 && Me.class !== ye.class && r(Ue, "class", null, ye.class, $e), De & 4 && r(Ue, "style", Me.style, ye.style, $e), De & 8) {
        const Be = Y.dynamicProps;
        for (let D = 0; D < Be.length; D++) {
          const O = Be[D], G = Me[O], Ie = ye[O];
          (Ie !== G || O === "value") && r(Ue, O, G, Ie, $e, ve);
        }
      }
      De & 1 && F.children !== Y.children && f(Ue, Y.children);
    } else !Le && Te == null && te(Ue, Me, ye, ve, $e);
    ((Z = ye.onVnodeUpdated) || Fe) && jt(() => {
      Z && ps(Z, ve, Y, F), Fe && Xs(Y, F, ve, "updated");
    }, Ee);
  }, X = (F, Y, ve, Ee, $e, Se, Le) => {
    for (let Ue = 0; Ue < Y.length; Ue++) {
      const De = F[Ue], Te = Y[Ue], Fe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        De.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (De.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !oo(De, Te) || // - In the case of a component, it could contain anything.
        De.shapeFlag & 198) ? g(De.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ve
        )
      );
      S(
        De,
        Te,
        Fe,
        null,
        Ee,
        $e,
        Se,
        Le,
        !0
      );
    }
  }, te = (F, Y, ve, Ee, $e) => {
    if (Y !== ve) {
      if (Y !== ht)
        for (const Se in Y)
          !qo(Se) && !(Se in ve) && r(
            F,
            Se,
            Y[Se],
            null,
            $e,
            Ee
          );
      for (const Se in ve) {
        if (qo(Se)) continue;
        const Le = ve[Se], Ue = Y[Se];
        Le !== Ue && Se !== "value" && r(F, Se, Ue, Le, $e, Ee);
      }
      "value" in ve && r(F, "value", Y.value, ve.value, $e);
    }
  }, re = (F, Y, ve, Ee, $e, Se, Le, Ue, De) => {
    const Te = Y.el = F ? F.el : u(""), Fe = Y.anchor = F ? F.anchor : u("");
    let { patchFlag: Me, dynamicChildren: ye, slotScopeIds: Z } = Y;
    Z && (Ue = Ue ? Ue.concat(Z) : Z), F == null ? (n(Te, ve, Ee), n(Fe, ve, Ee), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      Y.children || [],
      ve,
      Fe,
      $e,
      Se,
      Le,
      Ue,
      De
    )) : Me > 0 && Me & 64 && ye && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    F.dynamicChildren ? (X(
      F.dynamicChildren,
      ye,
      ve,
      $e,
      Se,
      Le,
      Ue
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (Y.key != null || $e && Y === $e.subTree) && $l(
      F,
      Y,
      !0
      /* shallow */
    )) : ae(
      F,
      Y,
      ve,
      Fe,
      $e,
      Se,
      Le,
      Ue,
      De
    );
  }, he = (F, Y, ve, Ee, $e, Se, Le, Ue, De) => {
    Y.slotScopeIds = Ue, F == null ? Y.shapeFlag & 512 ? $e.ctx.activate(
      Y,
      ve,
      Ee,
      Le,
      De
    ) : ne(
      Y,
      ve,
      Ee,
      $e,
      Se,
      Le,
      De
    ) : Q(F, Y, De);
  }, ne = (F, Y, ve, Ee, $e, Se, Le) => {
    const Ue = F.component = md(
      F,
      Ee,
      $e
    );
    if (sa(F) && (Ue.ctx.renderer = Ve), fd(Ue, !1, Le), Ue.asyncDep) {
      if ($e && $e.registerDep(Ue, me, Le), !F.el) {
        const De = Ue.subTree = k(zt);
        x(null, De, Y, ve), F.placeholder = De.el;
      }
    } else
      me(
        Ue,
        F,
        Y,
        ve,
        $e,
        Se,
        Le
      );
  }, Q = (F, Y, ve) => {
    const Ee = Y.component = F.component;
    if (qu(F, Y, ve))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        Re(Ee, Y, ve);
        return;
      } else
        Ee.next = Y, Ee.update();
    else
      Y.el = F.el, Ee.vnode = Y;
  }, me = (F, Y, ve, Ee, $e, Se, Le) => {
    const Ue = () => {
      if (F.isMounted) {
        let { next: Me, bu: ye, u: Z, parent: Be, vnode: D } = F;
        {
          const le = Nr(F);
          if (le) {
            Me && (Me.el = D.el, Re(F, Me, Le)), le.asyncDep.then(() => {
              F.isUnmounted || Ue();
            });
            return;
          }
        }
        let O = Me, G;
        Zs(F, !1), Me ? (Me.el = D.el, Re(F, Me, Le)) : Me = D, ye && En(ye), (G = Me.props && Me.props.onVnodeBeforeUpdate) && ps(G, Be, Me, D), Zs(F, !0);
        const Ie = ql(F), I = F.subTree;
        F.subTree = Ie, S(
          I,
          Ie,
          // parent may have changed if it's in a teleport
          g(I.el),
          // anchor may have changed if it's in a fragment
          T(I),
          F,
          $e,
          Se
        ), Me.el = Ie.el, O === null && Ku(F, Ie.el), Z && jt(Z, $e), (G = Me.props && Me.props.onVnodeUpdated) && jt(
          () => ps(G, Be, Me, D),
          $e
        );
      } else {
        let Me;
        const { el: ye, props: Z } = Y, { bm: Be, m: D, parent: O, root: G, type: Ie } = F, I = ko(Y);
        Zs(F, !1), Be && En(Be), !I && (Me = Z && Z.onVnodeBeforeMount) && ps(Me, O, Y), Zs(F, !0);
        {
          G.ce && // @ts-expect-error _def is private
          G.ce._def.shadowRoot !== !1 && G.ce._injectChildStyle(Ie);
          const le = F.subTree = ql(F);
          S(
            null,
            le,
            ve,
            Ee,
            F,
            $e,
            Se
          ), Y.el = le.el;
        }
        if (D && jt(D, $e), !I && (Me = Z && Z.onVnodeMounted)) {
          const le = Y;
          jt(
            () => ps(Me, O, le),
            $e
          );
        }
        (Y.shapeFlag & 256 || O && ko(O.vnode) && O.vnode.shapeFlag & 256) && F.a && jt(F.a, $e), F.isMounted = !0, Y = ve = Ee = null;
      }
    };
    F.scope.on();
    const De = F.effect = new zi(Ue);
    F.scope.off();
    const Te = F.update = De.run.bind(De), Fe = F.job = De.runIfDirty.bind(De);
    Fe.i = F, Fe.id = F.uid, De.scheduler = () => yl(Fe), Zs(F, !0), Te();
  }, Re = (F, Y, ve) => {
    Y.component = F;
    const Ee = F.vnode.props;
    F.vnode = Y, F.next = null, Qu(F, Y.props, Ee, ve), ed(F, Y.children, ve), Ds(), Ul(F), Us();
  }, ae = (F, Y, ve, Ee, $e, Se, Le, Ue, De = !1) => {
    const Te = F && F.children, Fe = F ? F.shapeFlag : 0, Me = Y.children, { patchFlag: ye, shapeFlag: Z } = Y;
    if (ye > 0) {
      if (ye & 128) {
        ue(
          Te,
          Me,
          ve,
          Ee,
          $e,
          Se,
          Le,
          Ue,
          De
        );
        return;
      } else if (ye & 256) {
        pe(
          Te,
          Me,
          ve,
          Ee,
          $e,
          Se,
          Le,
          Ue,
          De
        );
        return;
      }
    }
    Z & 8 ? (Fe & 16 && J(Te, $e, Se), Me !== Te && f(ve, Me)) : Fe & 16 ? Z & 16 ? ue(
      Te,
      Me,
      ve,
      Ee,
      $e,
      Se,
      Le,
      Ue,
      De
    ) : J(Te, $e, Se, !0) : (Fe & 8 && f(ve, ""), Z & 16 && z(
      Me,
      ve,
      Ee,
      $e,
      Se,
      Le,
      Ue,
      De
    ));
  }, pe = (F, Y, ve, Ee, $e, Se, Le, Ue, De) => {
    F = F || yo, Y = Y || yo;
    const Te = F.length, Fe = Y.length, Me = Math.min(Te, Fe);
    let ye;
    for (ye = 0; ye < Me; ye++) {
      const Z = Y[ye] = De ? js(Y[ye]) : _s(Y[ye]);
      S(
        F[ye],
        Z,
        ve,
        null,
        $e,
        Se,
        Le,
        Ue,
        De
      );
    }
    Te > Fe ? J(
      F,
      $e,
      Se,
      !0,
      !1,
      Me
    ) : z(
      Y,
      ve,
      Ee,
      $e,
      Se,
      Le,
      Ue,
      De,
      Me
    );
  }, ue = (F, Y, ve, Ee, $e, Se, Le, Ue, De) => {
    let Te = 0;
    const Fe = Y.length;
    let Me = F.length - 1, ye = Fe - 1;
    for (; Te <= Me && Te <= ye; ) {
      const Z = F[Te], Be = Y[Te] = De ? js(Y[Te]) : _s(Y[Te]);
      if (oo(Z, Be))
        S(
          Z,
          Be,
          ve,
          null,
          $e,
          Se,
          Le,
          Ue,
          De
        );
      else
        break;
      Te++;
    }
    for (; Te <= Me && Te <= ye; ) {
      const Z = F[Me], Be = Y[ye] = De ? js(Y[ye]) : _s(Y[ye]);
      if (oo(Z, Be))
        S(
          Z,
          Be,
          ve,
          null,
          $e,
          Se,
          Le,
          Ue,
          De
        );
      else
        break;
      Me--, ye--;
    }
    if (Te > Me) {
      if (Te <= ye) {
        const Z = ye + 1, Be = Z < Fe ? Y[Z].el : Ee;
        for (; Te <= ye; )
          S(
            null,
            Y[Te] = De ? js(Y[Te]) : _s(Y[Te]),
            ve,
            Be,
            $e,
            Se,
            Le,
            Ue,
            De
          ), Te++;
      }
    } else if (Te > ye)
      for (; Te <= Me; )
        ee(F[Te], $e, Se, !0), Te++;
    else {
      const Z = Te, Be = Te, D = /* @__PURE__ */ new Map();
      for (Te = Be; Te <= ye; Te++) {
        const ze = Y[Te] = De ? js(Y[Te]) : _s(Y[Te]);
        ze.key != null && D.set(ze.key, Te);
      }
      let O, G = 0;
      const Ie = ye - Be + 1;
      let I = !1, le = 0;
      const ie = new Array(Ie);
      for (Te = 0; Te < Ie; Te++) ie[Te] = 0;
      for (Te = Z; Te <= Me; Te++) {
        const ze = F[Te];
        if (G >= Ie) {
          ee(ze, $e, Se, !0);
          continue;
        }
        let xe;
        if (ze.key != null)
          xe = D.get(ze.key);
        else
          for (O = Be; O <= ye; O++)
            if (ie[O - Be] === 0 && oo(ze, Y[O])) {
              xe = O;
              break;
            }
        xe === void 0 ? ee(ze, $e, Se, !0) : (ie[xe - Be] = Te + 1, xe >= le ? le = xe : I = !0, S(
          ze,
          Y[xe],
          ve,
          null,
          $e,
          Se,
          Le,
          Ue,
          De
        ), G++);
      }
      const Ae = I ? nd(ie) : yo;
      for (O = Ae.length - 1, Te = Ie - 1; Te >= 0; Te--) {
        const ze = Be + Te, xe = Y[ze], qe = Y[ze + 1], Ye = ze + 1 < Fe ? (
          // #13559, fallback to el placeholder for unresolved async component
          qe.el || qe.placeholder
        ) : Ee;
        ie[Te] === 0 ? S(
          null,
          xe,
          ve,
          Ye,
          $e,
          Se,
          Le,
          Ue,
          De
        ) : I && (O < 0 || Te !== Ae[O] ? Oe(xe, ve, Ye, 2) : O--);
      }
    }
  }, Oe = (F, Y, ve, Ee, $e = null) => {
    const { el: Se, type: Le, transition: Ue, children: De, shapeFlag: Te } = F;
    if (Te & 6) {
      Oe(F.component.subTree, Y, ve, Ee);
      return;
    }
    if (Te & 128) {
      F.suspense.move(Y, ve, Ee);
      return;
    }
    if (Te & 64) {
      Le.move(F, Y, ve, Ve);
      return;
    }
    if (Le === j) {
      n(Se, Y, ve);
      for (let Me = 0; Me < De.length; Me++)
        Oe(De[Me], Y, ve, Ee);
      n(F.anchor, Y, ve);
      return;
    }
    if (Le === La) {
      E(F, Y, ve);
      return;
    }
    if (Ee !== 2 && Te & 1 && Ue)
      if (Ee === 0)
        Ue.beforeEnter(Se), n(Se, Y, ve), jt(() => Ue.enter(Se), $e);
      else {
        const { leave: Me, delayLeave: ye, afterLeave: Z } = Ue, Be = () => {
          F.ctx.isUnmounted ? l(Se) : n(Se, Y, ve);
        }, D = () => {
          Se._isLeaving && Se[Ts](
            !0
            /* cancelled */
          ), Me(Se, () => {
            Be(), Z && Z();
          });
        };
        ye ? ye(Se, Be, D) : D();
      }
    else
      n(Se, Y, ve);
  }, ee = (F, Y, ve, Ee = !1, $e = !1) => {
    const {
      type: Se,
      props: Le,
      ref: Ue,
      children: De,
      dynamicChildren: Te,
      shapeFlag: Fe,
      patchFlag: Me,
      dirs: ye,
      cacheIndex: Z
    } = F;
    if (Me === -2 && ($e = !1), Ue != null && (Ds(), Yo(Ue, null, ve, F, !0), Us()), Z != null && (Y.renderCache[Z] = void 0), Fe & 256) {
      Y.ctx.deactivate(F);
      return;
    }
    const Be = Fe & 1 && ye, D = !ko(F);
    let O;
    if (D && (O = Le && Le.onVnodeBeforeUnmount) && ps(O, Y, F), Fe & 6)
      U(F.component, ve, Ee);
    else {
      if (Fe & 128) {
        F.suspense.unmount(ve, Ee);
        return;
      }
      Be && Xs(F, null, Y, "beforeUnmount"), Fe & 64 ? F.type.remove(
        F,
        Y,
        ve,
        Ve,
        Ee
      ) : Te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== j || Me > 0 && Me & 64) ? J(
        Te,
        Y,
        ve,
        !1,
        !0
      ) : (Se === j && Me & 384 || !$e && Fe & 16) && J(De, Y, ve), Ee && se(F);
    }
    (D && (O = Le && Le.onVnodeUnmounted) || Be) && jt(() => {
      O && ps(O, Y, F), Be && Xs(F, null, Y, "unmounted");
    }, ve);
  }, se = (F) => {
    const { type: Y, el: ve, anchor: Ee, transition: $e } = F;
    if (Y === j) {
      P(ve, Ee);
      return;
    }
    if (Y === La) {
      R(F);
      return;
    }
    const Se = () => {
      l(ve), $e && !$e.persisted && $e.afterLeave && $e.afterLeave();
    };
    if (F.shapeFlag & 1 && $e && !$e.persisted) {
      const { leave: Le, delayLeave: Ue } = $e, De = () => Le(ve, Se);
      Ue ? Ue(F.el, Se, De) : De();
    } else
      Se();
  }, P = (F, Y) => {
    let ve;
    for (; F !== Y; )
      ve = w(F), l(F), F = ve;
    l(Y);
  }, U = (F, Y, ve) => {
    const { bum: Ee, scope: $e, job: Se, subTree: Le, um: Ue, m: De, a: Te } = F;
    Ql(De), Ql(Te), Ee && En(Ee), $e.stop(), Se && (Se.flags |= 8, ee(Le, F, Y, ve)), Ue && jt(Ue, Y), jt(() => {
      F.isUnmounted = !0;
    }, Y);
  }, J = (F, Y, ve, Ee = !1, $e = !1, Se = 0) => {
    for (let Le = Se; Le < F.length; Le++)
      ee(F[Le], Y, ve, Ee, $e);
  }, T = (F) => {
    if (F.shapeFlag & 6)
      return T(F.component.subTree);
    if (F.shapeFlag & 128)
      return F.suspense.next();
    const Y = w(F.anchor || F.el), ve = Y && Y[ar];
    return ve ? w(ve) : Y;
  };
  let M = !1;
  const ce = (F, Y, ve) => {
    F == null ? Y._vnode && ee(Y._vnode, null, null, !0) : S(
      Y._vnode || null,
      F,
      Y,
      null,
      null,
      null,
      ve
    ), Y._vnode = F, M || (M = !0, Ul(), sr(), M = !1);
  }, Ve = {
    p: S,
    um: ee,
    m: Oe,
    r: se,
    mt: ne,
    mc: z,
    pc: ae,
    pbc: X,
    n: T,
    o: e
  };
  return {
    render: ce,
    hydrate: void 0,
    createApp: Ou(ce)
  };
}
function Na({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Zs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function od(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function $l(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Je(n) && Je(l))
    for (let r = 0; r < n.length; r++) {
      const c = n[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = js(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && $l(c, u)), u.type === la && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === zt && !u.el && (u.el = c.el);
    }
}
function nd(e) {
  const s = e.slice(), o = [0];
  let n, l, r, c, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        s[n] = l, o.push(n);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (s[n] = o[r - 1]), o[r] = n);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = s[c];
  return o;
}
function Nr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : Nr(s);
}
function Ql(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const Lr = (e) => e.__isSuspense;
function ad(e, s) {
  s && s.pendingBranch ? Je(e) ? s.effects.push(...e) : s.effects.push(e) : pu(e);
}
const j = Symbol.for("v-fgt"), la = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), La = Symbol.for("v-stc"), Zo = [];
let Zt = null;
function a(e = !1) {
  Zo.push(Zt = e ? null : []);
}
function ld() {
  Zo.pop(), Zt = Zo[Zo.length - 1] || null;
}
let rn = 1;
function Bn(e, s = !1) {
  rn += e, e < 0 && Zt && s && (Zt.hasOnce = !0);
}
function Dr(e) {
  return e.dynamicChildren = rn > 0 ? Zt || yo : null, ld(), rn > 0 && Zt && Zt.push(e), e;
}
function i(e, s, o, n, l, r) {
  return Dr(
    t(
      e,
      s,
      o,
      n,
      l,
      r,
      !0
    )
  );
}
function N(e, s, o, n, l) {
  return Dr(
    k(
      e,
      s,
      o,
      n,
      l,
      !0
    )
  );
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function oo(e, s) {
  return e.type === s.type && e.key === s.key;
}
const Ur = ({ key: e }) => e ?? null, Pn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Bt(e) || Xe(e) ? { i: Dt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, r = e === j ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && Ur(s),
    ref: s && Pn(s),
    scopeId: nr,
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
    ctx: Dt
  };
  return u ? (Cl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Zt.push(d), d;
}
const k = id;
function id(e, s = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === hr) && (e = zt), cn(e)) {
    const u = Js(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Cl(u, o), rn > 0 && !r && Zt && (u.shapeFlag & 6 ? Zt[Zt.indexOf(e)] = u : Zt.push(u)), u.patchFlag = -2, u;
  }
  if (yd(e) && (e = e.__vccOpts), s) {
    s = rd(s);
    let { class: u, style: d } = s;
    u && !$t(u) && (s.class = Ne(u)), pt(d) && (hl(d) && !Je(d) && (d = Et({}, d)), s.style = Ft(d));
  }
  const c = $t(e) ? 1 : Lr(e) ? 128 : lr(e) ? 64 : pt(e) ? 4 : Xe(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    n,
    l,
    c,
    r,
    !0
  );
}
function rd(e) {
  return e ? hl(e) || Ir(e) ? Et({}, e) : e : null;
}
function Js(e, s, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = s ? cd(l || {}, s) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Ur(v),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Je(r) ? r.concat(Pn(s)) : [r, Pn(s)] : Pn(s)
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
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Js(e.ssContent),
    ssFallback: e.ssFallback && Js(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && ro(
    f,
    d.clone(f)
  ), f;
}
function b(e = " ", s = 0) {
  return k(la, null, e, s);
}
function h(e = "", s = !1) {
  return s ? (a(), N(zt, null, e)) : k(zt, null, e);
}
function _s(e) {
  return e == null || typeof e == "boolean" ? k(zt) : Je(e) ? k(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cn(e) ? js(e) : k(la, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Js(e);
}
function Cl(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Je(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Cl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Ir(s) ? s._ctx = Dt : l === 3 && Dt && (Dt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Xe(s) ? (s = { default: s, _ctx: Dt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function cd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ne([s.class, n.class]));
      else if (l === "style")
        s.style = Ft([s.style, n.style]);
      else if (Jn(l)) {
        const r = s[l], c = n[l];
        c && r !== c && !(Je(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function ps(e, s, o, n = null) {
  vs(e, s, 7, [
    o,
    n
  ]);
}
const ud = kr();
let dd = 0;
function md(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || ud, r = {
    uid: dd++,
    vnode: e,
    type: n,
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
    scope: new Ac(
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
    propsOptions: Tr(n, l),
    emitsOptions: Cr(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Wu.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const xl = () => Vt || Dt;
let Wn, Ya;
{
  const e = Zn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Wn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Vt = o
  ), Ya = s(
    "__VUE_SSR_SETTERS__",
    (o) => un = o
  );
}
const vn = (e) => {
  const s = Vt;
  return Wn(e), e.scope.on(), () => {
    e.scope.off(), Wn(s);
  };
}, Yl = () => {
  Vt && Vt.scope.off(), Wn(null);
};
function Or(e) {
  return e.vnode.shapeFlag & 4;
}
let un = !1;
function fd(e, s = !1, o = !1) {
  s && Ya(s);
  const { props: n, children: l } = e.vnode, r = Or(e);
  Ju(e, n, r, s), Zu(e, l, o || s);
  const c = r ? vd(e, s) : void 0;
  return s && Ya(!1), c;
}
function vd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mu);
  const { setup: n } = o;
  if (n) {
    Ds();
    const l = e.setupContext = n.length > 1 ? gd(e) : null, r = vn(e), c = fn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ri(c);
    if (Us(), r(), (u || e.sp) && !ko(e) && vr(e), u) {
      if (c.then(Yl, Yl), s)
        return c.then((d) => {
          Xl(e, d);
        }).catch((d) => {
          ta(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Xl(e, c);
  } else
    Ar(e);
}
function Xl(e, s, o) {
  Xe(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : pt(s) && (e.setupState = Zi(s)), Ar(e);
}
function Ar(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || bs);
  {
    const l = vn(e);
    Ds();
    try {
      Pu(e);
    } finally {
      Us(), l();
    }
  }
}
const pd = {
  get(e, s) {
    return Ot(e, "get", ""), e[s];
  }
};
function gd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, pd),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function ia(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zi(au(e.exposed)), {
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
function hd(e, s = !0) {
  return Xe(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function yd(e) {
  return Xe(e) && "__vccOpts" in e;
}
const A = (e, s) => uu(e, s, un);
function Po(e, s, o) {
  try {
    Bn(-1);
    const n = arguments.length;
    return n === 2 ? pt(s) && !Je(s) ? cn(s) ? k(e, null, [s]) : k(e, s) : k(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && cn(o) && (o = [o]), k(e, s, o));
  } finally {
    Bn(1);
  }
}
const wd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xa;
const Zl = typeof window < "u" && window.trustedTypes;
if (Zl)
  try {
    Xa = /* @__PURE__ */ Zl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const zr = Xa ? (e) => Xa.createHTML(e) : (e) => e, _d = "http://www.w3.org/2000/svg", kd = "http://www.w3.org/1998/Math/MathML", Es = typeof document < "u" ? document : null, ei = Es && /* @__PURE__ */ Es.createElement("template"), bd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? Es.createElementNS(_d, e) : s === "mathml" ? Es.createElementNS(kd, e) : o ? Es.createElement(e, { is: o }) : Es.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => Es.createTextNode(e),
  createComment: (e) => Es.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Es.querySelector(e),
  setScopeId(e, s) {
    e.setAttribute(s, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, s, o, n, l, r) {
    const c = o ? o.previousSibling : s.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ei.innerHTML = zr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ei.content;
      if (n === "svg" || n === "mathml") {
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
}, Fs = "transition", Oo = "animation", Io = Symbol("_vtc"), Vr = {
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
}, Fr = /* @__PURE__ */ Et(
  {},
  ur,
  Vr
), $d = (e) => (e.displayName = "Transition", e.props = Fr, e), Cd = /* @__PURE__ */ $d(
  (e, { slots: s }) => Po(yu, Br(e), s)
), eo = (e, s = []) => {
  Je(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, ti = (e) => e ? Je(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Br(e) {
  const s = {};
  for (const re in e)
    re in Vr || (s[re] = e[re]);
  if (e.css === !1)
    return s;
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
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: y = `${o}-leave-to`
  } = e, _ = xd(l), S = _ && _[0], C = _ && _[1], {
    onBeforeEnter: x,
    onEnter: B,
    onEnterCancelled: E,
    onLeave: R,
    onLeaveCancelled: L,
    onBeforeAppear: V = x,
    onAppear: K = B,
    onAppearCancelled: z = E
  } = s, W = (re, he, ne, Q) => {
    re._enterCancelled = Q, Bs(re, he ? f : u), Bs(re, he ? v : c), ne && ne();
  }, X = (re, he) => {
    re._isLeaving = !1, Bs(re, g), Bs(re, y), Bs(re, w), he && he();
  }, te = (re) => (he, ne) => {
    const Q = re ? K : B, me = () => W(he, re, ne);
    eo(Q, [he, me]), si(() => {
      Bs(he, re ? d : r), hs(he, re ? f : u), ti(Q) || oi(he, n, S, me);
    });
  };
  return Et(s, {
    onBeforeEnter(re) {
      eo(x, [re]), hs(re, r), hs(re, c);
    },
    onBeforeAppear(re) {
      eo(V, [re]), hs(re, d), hs(re, v);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(re, he) {
      re._isLeaving = !0;
      const ne = () => X(re, he);
      hs(re, g), re._enterCancelled ? (hs(re, w), Za(re)) : (Za(re), hs(re, w)), si(() => {
        re._isLeaving && (Bs(re, g), hs(re, y), ti(R) || oi(re, n, C, ne));
      }), eo(R, [re, ne]);
    },
    onEnterCancelled(re) {
      W(re, !1, void 0, !0), eo(E, [re]);
    },
    onAppearCancelled(re) {
      W(re, !0, void 0, !0), eo(z, [re]);
    },
    onLeaveCancelled(re) {
      X(re), eo(L, [re]);
    }
  });
}
function xd(e) {
  if (e == null)
    return null;
  if (pt(e))
    return [Da(e.enter), Da(e.leave)];
  {
    const s = Da(e);
    return [s, s];
  }
}
function Da(e) {
  return Mc(e);
}
function hs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Io] || (e[Io] = /* @__PURE__ */ new Set())).add(s);
}
function Bs(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Io];
  o && (o.delete(s), o.size || (e[Io] = void 0));
}
function si(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Sd = 0;
function oi(e, s, o, n) {
  const l = e._endId = ++Sd, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Wr(e, s);
  if (!c)
    return n();
  const v = c + "end";
  let f = 0;
  const g = () => {
    e.removeEventListener(v, w), r();
  }, w = (y) => {
    y.target === e && ++f >= d && g();
  };
  setTimeout(() => {
    f < d && g();
  }, u + 1), e.addEventListener(v, w);
}
function Wr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Fs}Delay`), r = n(`${Fs}Duration`), c = ni(l, r), u = n(`${Oo}Delay`), d = n(`${Oo}Duration`), v = ni(u, d);
  let f = null, g = 0, w = 0;
  s === Fs ? c > 0 && (f = Fs, g = c, w = r.length) : s === Oo ? v > 0 && (f = Oo, g = v, w = d.length) : (g = Math.max(c, v), f = g > 0 ? c > v ? Fs : Oo : null, w = f ? f === Fs ? r.length : d.length : 0);
  const y = f === Fs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Fs}Property`).toString()
  );
  return {
    type: f,
    timeout: g,
    propCount: w,
    hasTransform: y
  };
}
function ni(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => ai(o) + ai(e[n])));
}
function ai(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Za(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Id(e, s, o) {
  const n = e[Io];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const li = Symbol("_vod"), Ed = Symbol("_vsh"), Td = Symbol(""), Md = /(?:^|;)\s*display\s*:/;
function Pd(e, s, o) {
  const n = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if ($t(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Rn(n, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Rn(n, c, "");
    for (const c in o)
      c === "display" && (r = !0), Rn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[Td];
      c && (o += ";" + c), n.cssText = o, r = Md.test(o);
    }
  } else s && e.removeAttribute("style");
  li in e && (e[li] = r ? n.display : "", e[Ed] && (n.display = "none"));
}
const ii = /\s*!important$/;
function Rn(e, s, o) {
  if (Je(o))
    o.forEach((n) => Rn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = Rd(e, s);
    ii.test(o) ? e.setProperty(
      Ys(n),
      o.replace(ii, ""),
      "important"
    ) : e[n] = o;
  }
}
const ri = ["Webkit", "Moz", "ms"], Ua = {};
function Rd(e, s) {
  const o = Ua[s];
  if (o)
    return o;
  let n = ls(s);
  if (n !== "filter" && n in e)
    return Ua[s] = n;
  n = Yn(n);
  for (let l = 0; l < ri.length; l++) {
    const r = ri[l] + n;
    if (r in e)
      return Ua[s] = r;
  }
  return s;
}
const ci = "http://www.w3.org/1999/xlink";
function ui(e, s, o, n, l, r = Uc(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(ci, s.slice(6, s.length)) : e.setAttributeNS(ci, s, o) : o == null || r && !Ui(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : ms(o) ? String(o) : o
  );
}
function di(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? zr(o) : o);
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
    u === "boolean" ? o = Ui(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Ns(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function Nd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const mi = Symbol("_vei");
function Ld(e, s, o, n, l = null) {
  const r = e[mi] || (e[mi] = {}), c = r[s];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Dd(s);
    if (n) {
      const v = r[s] = Ad(
        n,
        l
      );
      Ns(e, u, v, d);
    } else c && (Nd(e, u, c, d), r[s] = void 0);
  }
}
const fi = /(?:Once|Passive|Capture)$/;
function Dd(e) {
  let s;
  if (fi.test(e)) {
    s = {};
    let n;
    for (; n = e.match(fi); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ys(e.slice(2)), s];
}
let Oa = 0;
const Ud = /* @__PURE__ */ Promise.resolve(), Od = () => Oa || (Ud.then(() => Oa = 0), Oa = Date.now());
function Ad(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    vs(
      zd(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Od(), o;
}
function zd(e, s) {
  if (Je(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return s;
}
const vi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vd = (e, s, o, n, l, r) => {
  const c = l === "svg";
  s === "class" ? Id(e, n, c) : s === "style" ? Pd(e, o, n) : Jn(s) ? il(s) || Ld(e, s, o, n, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Fd(e, s, n, c)) ? (di(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && ui(e, s, n, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !$t(n)) ? di(e, ls(s), n, r, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), ui(e, s, n, c));
};
function Fd(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && vi(s) && Xe(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return vi(s) && $t(o) ? !1 : s in e;
}
const Gr = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Gn = Symbol("_moveCb"), pi = Symbol("_enterCb"), Bd = (e) => (delete e.props.mode, e), Wd = /* @__PURE__ */ Bd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Et({}, Fr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = xl(), n = cr();
    let l, r;
    return gr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Kd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(jd), l.forEach(Hd);
      const u = l.filter(qd);
      Za(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        hs(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const g = v[Gn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", g), v[Gn] = null, Bs(v, c));
        };
        v.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = lt(e), u = Br(c);
      let d = c.tag || j;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), ro(
            f,
            ln(
              f,
              u,
              n,
              o
            )
          ), Gr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = s.default ? wl(s.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && ro(
          f,
          ln(f, u, n, o)
        );
      }
      return k(d, null, r);
    };
  }
}), Gd = Wd;
function jd(e) {
  const s = e.el;
  s[Gn] && s[Gn](), s[pi] && s[pi]();
}
function Hd(e) {
  jr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function qd(e) {
  const s = Gr.get(e), o = jr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Kd(e, s, o) {
  const n = e.cloneNode(), l = e[Io];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(n);
  const { hasTransform: c } = Wr(n);
  return r.removeChild(n), c;
}
const Qs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Je(s) ? (o) => En(s, o) : s;
};
function Jd(e) {
  e.target.composing = !0;
}
function gi(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const as = Symbol("_assign");
function hi(e, s, o) {
  return s && (e = e.trim()), o && (e = Xn(e)), e;
}
const $o = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[as] = Qs(l);
    const r = n || l.props && l.props.type === "number";
    Ns(e, s ? "change" : "input", (c) => {
      c.target.composing || e[as](hi(e.value, o, r));
    }), (o || r) && Ns(e, "change", () => {
      e.value = hi(e.value, o, r);
    }), s || (Ns(e, "compositionstart", Jd), Ns(e, "compositionend", gi), Ns(e, "change", gi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, c) {
    if (e[as] = Qs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Xn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, jn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[as] = Qs(o), Ns(e, "change", () => {
      const n = e._modelValue, l = Eo(e), r = e.checked, c = e[as];
      if (Je(n)) {
        const u = ul(n, l), d = u !== -1;
        if (r && !d)
          c(n.concat(l));
        else if (!r && d) {
          const v = [...n];
          v.splice(u, 1), c(v);
        }
      } else if (To(n)) {
        const u = new Set(n);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Hr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: yi,
  beforeUpdate(e, s, o) {
    e[as] = Qs(o), yi(e, s, o);
  }
};
function yi(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Je(s))
    l = ul(s, n.props.value) > -1;
  else if (To(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = io(s, Hr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Nn = {
  created(e, { value: s }, o) {
    e.checked = io(s, o.props.value), e[as] = Qs(o), Ns(e, "change", () => {
      e[as](Eo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[as] = Qs(n), s !== o && (e.checked = io(s, n.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = To(s);
    Ns(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Xn(Eo(c)) : Eo(c)
      );
      e[as](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[as] = Qs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    wi(e, s);
  },
  beforeUpdate(e, s, o) {
    e[as] = Qs(o);
  },
  updated(e, { value: s }) {
    e._assigning || wi(e, s);
  }
};
function wi(e, s) {
  const o = e.multiple, n = Je(s);
  if (!(o && !n && !To(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Eo(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((v) => String(v) === String(u)) : c.selected = ul(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (io(Eo(c), s)) {
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
function Hr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Qd = ["ctrl", "shift", "alt", "meta"], Yd = {
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
  exact: (e, s) => Qd.some((o) => e[`${o}Key`] && !s.includes(o))
}, st = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = Yd[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...r);
  }));
}, Xd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, es = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ys(l.key);
    if (s.some(
      (c) => c === r || Xd[c] === r
    ))
      return e(l);
  }));
}, Zd = /* @__PURE__ */ Et({ patchProp: Vd }, bd);
let _i;
function em() {
  return _i || (_i = td(Zd));
}
const pn = ((...e) => {
  const s = em().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = sm(n);
    if (!l) return;
    const r = s._component;
    !Xe(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, tm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function tm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sm(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const om = { class: "panel-layout" }, nm = {
  key: 0,
  class: "panel-layout-header"
}, am = {
  key: 1,
  class: "panel-layout-search"
}, lm = { class: "panel-layout-content" }, im = {
  key: 2,
  class: "panel-layout-footer"
}, rm = /* @__PURE__ */ _e({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), i("div", om, [
      s.$slots.header ? (a(), i("div", nm, [
        et(s.$slots, "header", {}, void 0)
      ])) : h("", !0),
      s.$slots.search ? (a(), i("div", am, [
        et(s.$slots, "search", {}, void 0)
      ])) : h("", !0),
      t("div", lm, [
        et(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), i("div", im, [
        et(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Ce = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ Ce(rm, [["__scopeId", "data-v-21565df9"]]), cm = {
  key: 0,
  class: "panel-title-prefix"
}, um = {
  key: 1,
  class: "panel-title-prefix-theme"
}, dm = /* @__PURE__ */ _e({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), N(_l(`h${e.level}`), {
      class: Ne(["panel-title", e.variant])
    }, {
      default: p(() => [
        e.showPrefix ? (a(), i("span", cm, m(e.prefix), 1)) : (a(), i("span", um)),
        et(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mm = /* @__PURE__ */ Ce(dm, [["__scopeId", "data-v-c3875efc"]]), fm = ["title"], vm = ["width", "height"], pm = /* @__PURE__ */ _e({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => s.$emit("click"))
    }, [
      (a(), i("svg", {
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
      ])], 8, vm))
    ], 8, fm));
  }
}), qr = /* @__PURE__ */ Ce(pm, [["__scopeId", "data-v-6fc7f16d"]]), gm = { class: "header-left" }, hm = {
  key: 0,
  class: "header-actions"
}, ym = /* @__PURE__ */ _e({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (a(), i("div", {
      class: Ne(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", gm, [
        k(mm, { "show-prefix": e.showPrefix }, {
          default: p(() => [
            b(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), N(qr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : h("", !0)
      ]),
      s.$slots.actions ? (a(), i("div", hm, [
        et(s.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Mt = /* @__PURE__ */ Ce(ym, [["__scopeId", "data-v-55a62cd6"]]), wm = {
  key: 0,
  class: "section-title-count"
}, _m = {
  key: 1,
  class: "section-title-icon"
}, km = /* @__PURE__ */ _e({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), N(_l(`h${e.level}`), {
      class: Ne(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: p(() => [
        et(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", wm, "(" + m(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (a(), i("span", _m, m(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), os = /* @__PURE__ */ Ce(km, [["__scopeId", "data-v-559361eb"]]), bm = { class: "status-grid" }, $m = { class: "status-grid__columns" }, Cm = { class: "status-grid__column" }, xm = { class: "status-grid__title" }, Sm = { class: "status-grid__column status-grid__column--right" }, Im = { class: "status-grid__title" }, Em = {
  key: 0,
  class: "status-grid__footer"
}, Tm = /* @__PURE__ */ _e({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), i("div", bm, [
      t("div", $m, [
        t("div", Cm, [
          t("h4", xm, m(e.leftTitle), 1),
          et(s.$slots, "left", {}, void 0)
        ]),
        t("div", Sm, [
          t("h4", Im, m(e.rightTitle), 1),
          et(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), i("div", Em, [
        et(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Mm = /* @__PURE__ */ Ce(Tm, [["__scopeId", "data-v-73b7ba3f"]]), Pm = {
  key: 0,
  class: "status-item__icon"
}, Rm = {
  key: 1,
  class: "status-item__count"
}, Nm = { class: "status-item__label" }, Lm = /* @__PURE__ */ _e({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = A(() => `status-item--${s.variant}`);
    return (n, l) => (a(), i("div", {
      class: Ne(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", Pm, m(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (a(), i("span", Rm, m(e.count), 1)) : h("", !0),
      t("span", Nm, m(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ Ce(Lm, [["__scopeId", "data-v-6f929183"]]), Dm = { class: "issue-card__header" }, Um = { class: "issue-card__icon" }, Om = { class: "issue-card__title" }, Am = {
  key: 0,
  class: "issue-card__content"
}, zm = {
  key: 0,
  class: "issue-card__description"
}, Vm = {
  key: 1,
  class: "issue-card__items"
}, Fm = {
  key: 2,
  class: "issue-card__actions"
}, Bm = /* @__PURE__ */ _e({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = A(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), i("div", {
      class: Ne(["issue-card", o.value])
    }, [
      t("div", Dm, [
        t("span", Um, m(e.icon), 1),
        t("h4", Om, m(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Am, [
        e.description ? (a(), i("p", zm, m(e.description), 1)) : h("", !0),
        et(n.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (a(), i("div", Vm, [
        (a(!0), i(j, null, we(e.items, (r, c) => (a(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, m(r), 1)
        ]))), 128))
      ])) : h("", !0),
      n.$slots.actions ? (a(), i("div", Fm, [
        et(n.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ Ce(Bm, [["__scopeId", "data-v-df6aa348"]]), Wm = ["type", "disabled"], Gm = {
  key: 0,
  class: "spinner"
}, jm = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ne(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", Gm)) : h("", !0),
      e.loading ? h("", !0) : et(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Wm));
  }
}), be = /* @__PURE__ */ Ce(jm, [["__scopeId", "data-v-772abe47"]]), Hm = { class: "empty-state" }, qm = {
  key: 0,
  class: "empty-icon"
}, Km = { class: "empty-message" }, Jm = /* @__PURE__ */ _e({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), i("div", Hm, [
      e.icon ? (a(), i("div", qm, m(e.icon), 1)) : h("", !0),
      t("p", Km, m(e.message), 1),
      e.actionLabel ? (a(), N(be, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("action"))
      }, {
        default: p(() => [
          b(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Ce(Jm, [["__scopeId", "data-v-4466284f"]]), Qm = /* @__PURE__ */ _e({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), i("span", {
      class: Ne(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      et(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Ln = /* @__PURE__ */ Ce(Qm, [["__scopeId", "data-v-75e9eeb8"]]), Ym = /* @__PURE__ */ _e({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), i("span", {
      class: Ne(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      et(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), el = /* @__PURE__ */ Ce(Ym, [["__scopeId", "data-v-2f186e4c"]]), Xm = { class: "detail-row" }, Zm = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), i("div", Xm, [
      k(Ln, { "min-width": e.labelMinWidth }, {
        default: p(() => [
          b(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), N(el, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: p(() => [
          b(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : et(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ Ce(Zm, [["__scopeId", "data-v-ef15664a"]]), ef = { class: "modal-header" }, tf = { class: "modal-body" }, sf = { class: "status-section" }, of = {
  key: 0,
  class: "status-section"
}, nf = { class: "section-header-row" }, af = {
  key: 0,
  class: "workflow-group"
}, lf = { class: "workflow-group-header" }, rf = { class: "workflow-group-title" }, cf = { class: "workflow-list" }, uf = { class: "workflow-name" }, df = { class: "workflow-issue" }, mf = {
  key: 1,
  class: "workflow-group"
}, ff = { class: "workflow-group-header" }, vf = { class: "workflow-group-title" }, pf = { class: "workflow-list" }, gf = { class: "workflow-name" }, hf = { class: "workflow-issue" }, yf = {
  key: 2,
  class: "workflow-group"
}, wf = { class: "workflow-group-header" }, _f = { class: "workflow-group-title" }, kf = { class: "workflow-list" }, bf = { class: "workflow-name" }, $f = {
  key: 3,
  class: "workflow-group"
}, Cf = { class: "workflow-group-header" }, xf = { class: "workflow-group-title" }, Sf = { class: "workflow-list" }, If = { class: "workflow-name" }, Ef = {
  key: 4,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Nf = {
  key: 5,
  class: "workflow-group"
}, Lf = { class: "workflow-group-title" }, Df = { class: "expand-icon" }, Uf = {
  key: 0,
  class: "workflow-list"
}, Of = { class: "workflow-name" }, Af = {
  key: 1,
  class: "status-section"
}, zf = {
  key: 0,
  class: "change-group"
}, Vf = { class: "change-group-header" }, Ff = { class: "change-group-title" }, Bf = { class: "change-list" }, Wf = { class: "node-name" }, Gf = {
  key: 0,
  class: "dev-badge"
}, jf = {
  key: 1,
  class: "change-group"
}, Hf = { class: "change-group-header" }, qf = { class: "change-group-title" }, Kf = { class: "change-list" }, Jf = { class: "node-name" }, Qf = {
  key: 0,
  class: "dev-badge"
}, Yf = {
  key: 2,
  class: "change-group"
}, Xf = { class: "change-list" }, Zf = { class: "change-item" }, ev = { class: "node-name" }, tv = {
  key: 3,
  class: "change-group"
}, sv = {
  key: 2,
  class: "status-section"
}, ov = { class: "section-header-row" }, nv = {
  key: 0,
  class: "drift-item"
}, av = { class: "drift-list" }, lv = {
  key: 0,
  class: "drift-list-more"
}, iv = {
  key: 1,
  class: "drift-item"
}, rv = { class: "drift-list" }, cv = {
  key: 0,
  class: "drift-list-more"
}, uv = {
  key: 2,
  class: "drift-item"
}, dv = { class: "drift-list" }, mv = { class: "version-actual" }, fv = { class: "version-expected" }, vv = {
  key: 0,
  class: "drift-list-more"
}, pv = {
  key: 3,
  class: "drift-item"
}, gv = { class: "repair-action" }, hv = {
  key: 3,
  class: "status-section"
}, yv = { class: "info-box" }, wv = { class: "drift-list" }, _v = {
  key: 0,
  class: "drift-list-more"
}, kv = {
  key: 4,
  class: "status-section"
}, bv = { class: "warning-box" }, $v = {
  key: 5,
  class: "empty-state-inline"
}, Cv = { class: "modal-actions" }, xv = /* @__PURE__ */ _e({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = $(!1);
    nt(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), bt(() => s.show, (w, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", w);
    }, { immediate: !0 });
    const n = A(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = A(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), r = A(() => {
      var w, y, _;
      return ((_ = (y = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : y.synced) == null ? void 0 : _.filter((S) => {
        var x, B, E;
        const C = (E = (B = (x = s.status) == null ? void 0 : x.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : E.find((R) => R.name === S);
        return !C || C.status !== "broken";
      })) || [];
    }), c = A(() => {
      var w, y, _, S, C;
      return (w = s.status) != null && w.workflows ? (((y = s.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((C = s.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), u = A(() => {
      var y, _, S;
      const w = (y = s.status) == null ? void 0 : y.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = A(() => {
      var w, y, _, S, C, x;
      return !c.value && !u.value && ((y = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : y.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((x = (C = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), v = A(() => {
      var y, _;
      const w = (_ = (y = s.status) == null ? void 0 : y.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function g(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, y) => {
      var _, S, C, x, B, E, R, L, V, K, z, W, X, te, re, he, ne, Q, me, Re, ae, pe;
      return a(), N(Ut, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (ue) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = st(() => {
            }, ["stop"]))
          }, [
            t("div", ef, [
              y[8] || (y[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (ue) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", tf, [
              t("div", sf, [
                k(os, { level: "4" }, {
                  default: p(() => [...y[9] || (y[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), i("div", of, [
                t("div", nf, [
                  k(os, { level: "4" }, {
                    default: p(() => [...y[10] || (y[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (ue) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", af, [
                  t("div", lf, [
                    y[11] || (y[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", rf, "BROKEN (COMMITTED) (" + m(n.value.length) + ")", 1)
                  ]),
                  t("div", cf, [
                    (a(!0), i(j, null, we(n.value, (ue) => (a(), i("div", {
                      key: ue.name,
                      class: "workflow-item"
                    }, [
                      t("span", uf, m(ue.name), 1),
                      t("span", df, m(ue.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (a(), i("div", mf, [
                  t("div", ff, [
                    y[12] || (y[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", vf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  t("div", pf, [
                    (a(!0), i(j, null, we(l.value, (ue) => (a(), i("div", {
                      key: ue.name,
                      class: "workflow-item"
                    }, [
                      t("span", gf, m(ue.name), 1),
                      t("span", hf, m(ue.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), i("div", yf, [
                  t("div", wf, [
                    y[13] || (y[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", _f, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", kf, [
                    (a(!0), i(j, null, we(e.status.workflows.new, (ue) => (a(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", bf, m(ue), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (C = e.status.workflows) == null ? void 0 : C.modified) != null && x.length ? (a(), i("div", $f, [
                  t("div", Cf, [
                    y[14] || (y[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", xf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (a(!0), i(j, null, we(e.status.workflows.modified, (ue) => (a(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", If, m(ue), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (E = (B = e.status.workflows) == null ? void 0 : B.deleted) != null && E.length ? (a(), i("div", Ef, [
                  t("div", Tf, [
                    y[15] || (y[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Mf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Pf, [
                    (a(!0), i(j, null, we(e.status.workflows.deleted, (ue) => (a(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", Rf, m(ue), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (a(), i("div", Nf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (ue) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Lf, "SYNCED (" + m(r.value.length) + ")", 1),
                    t("span", Df, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", Uf, [
                    (a(!0), i(j, null, we(r.value, (ue) => (a(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", Of, m(ue), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              u.value ? (a(), i("div", Af, [
                k(os, { level: "4" }, {
                  default: p(() => [...y[17] || (y[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (L = (R = e.status.git_changes) == null ? void 0 : R.nodes_added) != null && L.length ? (a(), i("div", zf, [
                  t("div", Vf, [
                    y[18] || (y[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Ff, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Bf, [
                    (a(!0), i(j, null, we(e.status.git_changes.nodes_added, (ue) => (a(), i("div", {
                      key: f(ue),
                      class: "change-item"
                    }, [
                      t("span", Wf, m(f(ue)), 1),
                      g(ue) ? (a(), i("span", Gf, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (K = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && K.length ? (a(), i("div", jf, [
                  t("div", Hf, [
                    y[19] || (y[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", qf, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Kf, [
                    (a(!0), i(j, null, we(e.status.git_changes.nodes_removed, (ue) => (a(), i("div", {
                      key: f(ue),
                      class: "change-item"
                    }, [
                      t("span", Jf, m(f(ue)), 1),
                      g(ue) ? (a(), i("span", Qf, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (z = e.status.git_changes) != null && z.workflow_changes ? (a(), i("div", Yf, [
                  y[20] || (y[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Xf, [
                    t("div", Zf, [
                      t("span", ev, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (W = e.status.git_changes) != null && W.has_other_changes ? (a(), i("div", tv, [...y[21] || (y[21] = [
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
              (X = e.status.comparison) != null && X.is_synced ? h("", !0) : (a(), i("div", sv, [
                t("div", ov, [
                  k(os, { level: "4" }, {
                    default: p(() => [...y[22] || (y[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (ue) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (re = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && re.length ? (a(), i("div", nv, [
                  k(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", av, [
                    (a(!0), i(j, null, we(e.status.comparison.missing_nodes.slice(0, 10), (ue) => (a(), i("div", {
                      key: ue,
                      class: "drift-list-item"
                    }, " - " + m(ue), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", lv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ne = (he = e.status.comparison) == null ? void 0 : he.extra_nodes) != null && ne.length ? (a(), i("div", iv, [
                  k(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", rv, [
                    (a(!0), i(j, null, we(e.status.comparison.extra_nodes.slice(0, 10), (ue) => (a(), i("div", {
                      key: ue,
                      class: "drift-list-item"
                    }, " - " + m(ue), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", cv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (me = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && me.length ? (a(), i("div", uv, [
                  k(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", dv, [
                    (a(!0), i(j, null, we(e.status.comparison.version_mismatches.slice(0, 10), (ue) => (a(), i("div", {
                      key: ue.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(m(ue.name) + ": ", 1),
                      t("span", mv, m(ue.actual), 1),
                      y[23] || (y[23] = b(" → ", -1)),
                      t("span", fv, m(ue.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", vv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Re = e.status.comparison) == null ? void 0 : Re.packages_in_sync) === !1 ? (a(), i("div", pv, [
                  k(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                t("div", gv, [
                  k(be, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: y[4] || (y[4] = (ue) => w.$emit("repair"))
                  }, {
                    default: p(() => [...y[24] || (y[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (pe = (ae = e.status.comparison) == null ? void 0 : ae.disabled_nodes) != null && pe.length ? (a(), i("div", hv, [
                k(os, { level: "4" }, {
                  default: p(() => [...y[27] || (y[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", yv, [
                  y[28] || (y[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", wv, [
                  (a(!0), i(j, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (ue) => (a(), i("div", {
                    key: ue,
                    class: "drift-list-item"
                  }, " • " + m(ue), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", _v, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", kv, [
                k(os, { level: "4" }, {
                  default: p(() => [...y[29] || (y[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", bv, [
                  y[30] || (y[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (a(), i("div", $v, [...y[32] || (y[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            t("div", Cv, [
              k(be, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (ue) => w.$emit("close"))
              }, {
                default: p(() => [...y[33] || (y[33] = [
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
}), Sv = /* @__PURE__ */ Ce(xv, [["__scopeId", "data-v-e2b37122"]]), Iv = { class: "health-section-header" }, Ev = { class: "suggestions-content" }, Tv = { class: "suggestions-text" }, Mv = { style: { "margin-top": "var(--cg-space-3)" } }, Pv = {
  key: 1,
  class: "no-issues-text"
}, Rv = /* @__PURE__ */ _e({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = $(!1), r = $(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, f = $(!1), g = $(!1);
    function w() {
      g.value = !0, v("repair-environment");
    }
    function y() {
      g.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const S = A(() => {
      const P = n.status.workflows.analyzed || [], U = P.filter(
        (J) => J.unresolved_models_count > 0 || J.ambiguous_models_count > 0
      );
      return U.length === 0 && n.status.missing_models_count > 0 ? P.filter((J) => J.sync_state === "synced") : U;
    });
    function C() {
      const P = S.value;
      P.length !== 0 && (f.value = !0, v("repair-missing-models", P.map((U) => U.name)));
    }
    function x() {
      f.value = !1;
    }
    s({ resetRepairingState: x, resetRepairingEnvironmentState: y, closeDetailModal: _ });
    const B = A(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), E = A(() => n.status.has_changes), R = A(() => {
      const P = n.status.git_changes;
      return P.nodes_added.length > 0 || P.nodes_removed.length > 0 || P.workflow_changes;
    }), L = A(() => n.status.has_changes || B.value), V = A(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), K = A(() => n.status.git_changes.has_other_changes), z = A(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter((U) => U.status === "broken")) || [];
    }), W = A(() => {
      var P;
      return ((P = n.status.workflows.analyzed) == null ? void 0 : P.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), X = A(() => z.value.length > 0);
    function te(P) {
      const U = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const J of U) {
        const T = P.match(J);
        if (T != null && T[1])
          return T[1];
      }
      return null;
    }
    function re(P) {
      const U = P.map(te).filter((J) => !!J);
      return [...new Set(U)];
    }
    function he(P) {
      if (P.length === 0) return "";
      if (P.length === 1) return ` (>= ${P[0]})`;
      const U = P.slice(0, 2).map((T) => `>= ${T}`).join(", "), J = P.length > 2;
      return ` (${U}${J ? ", ..." : ""})`;
    }
    function ne(P) {
      return P.replace(/uninstallable node mappings?/gi, (U) => U.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q(P) {
      const U = ne(P.issue_summary || "Has issues"), J = /(?:>=|v?\d+\.\d+)/i.test(U), T = re(P.version_gated_guidance || []);
      return (P.nodes_version_gated_count || 0) > 0 && T.length > 0 && !J ? `${P.name} — ${U} (needs ComfyUI ${T.map((M) => `>= ${M}`).join(", ")})` : `${P.name} — ${U}`;
    }
    const me = A(() => z.value.reduce(
      (P, U) => P + (U.nodes_version_gated_count || 0),
      0
    )), Re = A(() => {
      const P = z.value.flatMap(
        (U) => re(U.version_gated_guidance || [])
      );
      return [...new Set(P)];
    }), ae = A(() => z.value.reduce(
      (P, U) => P + (U.nodes_uninstallable_count || 0),
      0
    )), pe = A(() => {
      const P = [];
      return me.value > 0 && P.push(
        `${me.value} require newer ComfyUI${he(Re.value)}`
      ), ae.value > 0 && P.push(`${ae.value} need community packages`), P.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${P.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ue = A(() => X.value || W.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Oe = A(() => {
      const P = [];
      return n.status.workflows.new.length > 0 && P.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && P.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && P.push(`${n.status.workflows.deleted.length} deleted`), P.length > 0 ? `${P.join(", ")} workflow${P.length === 1 && !P[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), ee = A(() => {
      var J, T;
      const P = [], U = n.status.comparison;
      return (J = U.missing_nodes) != null && J.length && P.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (T = U.extra_nodes) != null && T.length && P.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), P.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${P.join(" and ")}.`;
    }), se = A(() => {
      var J, T;
      const P = [], U = n.status.comparison;
      return (J = U.extra_nodes) != null && J.length && (U.extra_nodes.slice(0, 3).forEach((M) => {
        P.push(`Untracked: ${M}`);
      }), U.extra_nodes.length > 3 && P.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (T = U.missing_nodes) != null && T.length && (U.missing_nodes.slice(0, 3).forEach((M) => {
        P.push(`Missing: ${M}`);
      }), U.missing_nodes.length > 3 && P.push(`...and ${U.missing_nodes.length - 3} more missing`)), P;
    });
    return (P, U) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, { title: "STATUS" })
        ]),
        content: p(() => [
          n.setupState === "no_workspace" ? (a(), N(us, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (J) => P.$emit("start-setup"))
              }, {
                default: p(() => [...U[13] || (U[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), N(us, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (J) => P.$emit("view-environments"))
              }, {
                default: p(() => [...U[14] || (U[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), N(us, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (J) => P.$emit("create-environment"))
              }, {
                default: p(() => [...U[15] || (U[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (J) => r.value = !0),
            onMouseleave: U[5] || (U[5] = (J) => r.value = !1)
          }, [
            t("div", Iv, [
              k(os, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: p(() => [...U[16] || (U[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(Cd, { name: "fade" }, {
                default: p(() => [
                  r.value ? (a(), N(be, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: p(() => [...U[17] || (U[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            k(Mm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ts({
              left: p(() => [
                e.status.workflows.new.length ? (a(), N(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (a(), N(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (a(), N(gs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                k(gs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: p(() => [
                e.status.git_changes.nodes_added.length ? (a(), N(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), N(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (a(), N(gs, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                K.value ? (a(), N(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                E.value && !R.value && !K.value ? (a(), N(gs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                E.value ? h("", !0) : (a(), N(gs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              L.value ? {
                name: "footer",
                fn: p(() => [
                  U[19] || (U[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Ev, [
                    t("span", Tv, m(Oe.value), 1),
                    k(be, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (J) => P.$emit("commit-changes"))
                    }, {
                      default: p(() => [...U[18] || (U[18] = [
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
          e.status.is_detached_head ? (a(), N(us, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (J) => P.$emit("create-branch"))
              }, {
                default: p(() => [...U[20] || (U[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", Mv, [
            k(os, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: p(() => [...U[21] || (U[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ue.value ? (a(), i(j, { key: 0 }, [
              z.value.length > 0 ? (a(), N(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${z.value.length} workflow${z.value.length === 1 ? "" : "s"} can't run`,
                description: pe.value,
                items: z.value.map(Q)
              }, {
                actions: p(() => [
                  k(be, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (J) => P.$emit("view-workflows"))
                  }, {
                    default: p(() => [...U[22] || (U[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              W.value.length > 0 ? (a(), N(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${W.value.length} workflow${W.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: W.value.map((J) => `${J.name} — ${J.models_needing_path_sync_count} model path${J.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: p(() => [
                  k(be, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (J) => P.$emit("view-workflows"))
                  }, {
                    default: p(() => [...U[23] || (U[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !X.value ? (a(), N(us, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: p(() => [
                  k(be, {
                    variant: "primary",
                    size: "sm",
                    disabled: f.value,
                    onClick: C
                  }, {
                    default: p(() => [
                      b(m(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(be, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (J) => P.$emit("view-workflows"))
                  }, {
                    default: p(() => [...U[24] || (U[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (a(), N(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: ee.value,
                items: se.value
              }, {
                actions: p(() => [
                  k(be, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: p(() => [...U[25] || (U[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(be, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (J) => P.$emit("view-nodes"))
                  }, {
                    default: p(() => [...U[26] || (U[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), N(us, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: p(() => [
                  k(be, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (J) => P.$emit("view-nodes"))
                  }, {
                    default: p(() => [...U[27] || (U[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : L.value ? (a(), i("span", Pv, "No issues")) : (a(), N(is, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Sv, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: U[12] || (U[12] = (J) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Nv = /* @__PURE__ */ Ce(Rv, [["__scopeId", "data-v-df52ba90"]]), FP = uo({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const BP = [
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
], WP = {
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
}, Lv = [
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
], GP = [
  ...Lv,
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
function Dv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function mt() {
  const e = $(!1), s = $(null);
  async function o(q, ke) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const We = await window.app.api.fetchApi(q, ke);
    if (!We.ok) {
      const cs = await We.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${We.status}`);
    }
    const yt = await We.text();
    if (yt)
      return JSON.parse(yt);
  }
  async function n(q) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(q)}`);
  }
  async function l(q, ke, We) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: q, email: ke, password: We })
    });
  }
  async function r(q, ke, We) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: q, email: ke, password: We })
    });
  }
  async function c(q, ke) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(q)}`, {
      headers: { Authorization: `Bearer ${ke}` }
    });
  }
  async function u(q, ke) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: q, refresh_token: ke || null })
    });
  }
  async function d(q = !1) {
    return o(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function v(q, ke = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: ke })
    });
  }
  async function f(q = 10, ke = 0) {
    return o(`/v2/comfygit/log?limit=${q}&offset=${ke}`);
  }
  async function g(q, ke = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(q)}&limit=${ke}`);
  }
  async function w(q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function y() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function _() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function S(q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q, force: !0 })
    });
  }
  async function C(q) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(q)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function x(q, ke) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(q)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ke, force: !0 })
    });
  }
  async function B() {
    return o("/v2/comfygit/branches");
  }
  async function E(q) {
    return o(`/v2/comfygit/commit/${q}`);
  }
  async function R(q, ke = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: ke })
    });
  }
  async function L(q, ke = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: ke })
    });
  }
  async function V(q, ke = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: ke })
    });
  }
  async function K(q, ke = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ke })
    });
  }
  async function z() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const q = await d();
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
  async function W() {
    return (await z()).environments;
  }
  async function X(q) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(q)}`);
    } catch {
      return null;
    }
  }
  async function te(q, ke) {
    const We = { target_env: q };
    return ke && (We.workspace_path = ke), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(We)
    });
  }
  async function re() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function he(q) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ne() {
    return o("/v2/workspace/environments/create_status");
  }
  async function Q(q = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function me(q) {
    return o(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function Re(q = !1) {
    try {
      return o(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ke = await d(q), We = [];
      return ke.workflows.new.forEach((yt) => {
        We.push({
          name: yt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: yt
        });
      }), ke.workflows.modified.forEach((yt) => {
        We.push({
          name: yt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: yt
        });
      }), ke.workflows.synced.forEach((yt) => {
        We.push({
          name: yt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: yt
        });
      }), We;
    }
  }
  async function ae(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function pe(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/contract`);
  }
  async function ue(q, ke) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function Oe(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/contract`, {
      method: "DELETE"
    });
  }
  async function ee(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function se(q, ke, We) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ke, install_models: We })
    });
  }
  async function P(q, ke, We) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ke, importance: We })
    });
  }
  async function U() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function J() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function T(q) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function M(q) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ce(q, ke) {
    return o(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function Ve(q, ke) {
    return o(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function je(q) {
    return o(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function F(q) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Y() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ve() {
    return o("/v2/workspace/models/directory");
  }
  async function Ee(q) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function $e(q) {
    const ke = new URLSearchParams({ url: q });
    return o(`/v2/workspace/huggingface/repo-info?${ke}`);
  }
  async function Se() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Le(q, ke = 10) {
    const We = new URLSearchParams({ query: q, limit: String(ke) });
    return o(`/v2/workspace/huggingface/search?${We}`);
  }
  async function Ue(q) {
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
  async function De(q, ke) {
    const We = ke ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ke)}` : "/v2/comfygit/config";
    return o(We, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Te(q, ke) {
    try {
      const We = new URLSearchParams();
      return q && We.append("level", q), ke && We.append("lines", ke.toString()), o(`/v2/comfygit/debug/logs?${We}`);
    } catch {
      return [];
    }
  }
  async function Fe(q, ke) {
    try {
      const We = new URLSearchParams();
      return q && We.append("level", q), ke && We.append("lines", ke.toString()), o(`/v2/workspace/debug/logs?${We}`);
    } catch {
      return [];
    }
  }
  async function Me() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ye() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Z() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Be(q, ke) {
    try {
      const We = new URLSearchParams();
      return q && We.append("level", q), ke && We.append("lines", ke.toString()), o(`/v2/workspace/debug/orchestrator-logs?${We}`);
    } catch {
      return [];
    }
  }
  async function D() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function O(q) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function G() {
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
  async function Ie(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function I(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function le(q, ke) {
    var zs, Vs, Lo, Do;
    const We = Dv(), yt = ((Vs = (zs = window.app) == null ? void 0 : zs.api) == null ? void 0 : Vs.clientId) ?? ((Do = (Lo = window.app) == null ? void 0 : Lo.api) == null ? void 0 : Do.initialClientId) ?? "comfygit-panel", Lt = {
      id: q.id,
      version: q.version || q.selected_version || "latest",
      selected_version: q.selected_version || "latest",
      mode: q.mode || "remote",
      channel: q.channel || "default"
    };
    return q.install_source && (Lt.install_source = q.install_source), q.install_source === "git" && q.repository && (Lt.repository = q.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Lt,
        ui_id: We,
        client_id: yt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", We, "for package:", q.id), ke != null && ke.beforeQueueStart && await ke.beforeQueueStart(We), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: We };
  }
  async function ie(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function Ae(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ze() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function xe(q, ke) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: ke })
    });
  }
  async function qe(q) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function Ye(q, ke, We) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ke, push_url: We })
    });
  }
  async function at(q, ke) {
    const We = {};
    return ke && (We["X-Git-Auth-Token"] = ke), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST",
      headers: We
    });
  }
  async function rt(q) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function ut(q = "skip", ke = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: ke
      })
    });
  }
  async function It(q, ke) {
    const We = ke ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return o(We);
  }
  async function Wt(q, ke = {}) {
    const We = { "Content-Type": "application/json" };
    return ke.authToken && (We["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: We,
      body: JSON.stringify({
        model_strategy: ke.modelStrategy || "skip",
        force: ke.force || !1,
        resolutions: ke.resolutions
      })
    });
  }
  async function ct(q, ke) {
    const We = ke ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return o(We);
  }
  async function fe(q, ke = {}) {
    const We = { "Content-Type": "application/json" };
    return ke.authToken && (We["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: We,
      body: JSON.stringify({ force: ke.force || !1 })
    });
  }
  async function H(q, ke) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ke })
    });
  }
  async function ge(q) {
    const ke = {
      success: 0,
      failed: []
    };
    for (const We of q)
      try {
        await ee(We), ke.success++;
      } catch (yt) {
        ke.failed.push({
          name: We,
          error: yt instanceof Error ? yt.message : "Unknown error"
        });
      }
    return ke;
  }
  async function He(q) {
    var yt;
    const ke = new FormData();
    if (ke.append("file", q), !((yt = window.app) != null && yt.api))
      throw new Error("ComfyUI API not available");
    const We = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ke
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!We.ok) {
      const Lt = await We.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${We.status}`);
    }
    return We.json();
  }
  async function ft(q) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function Nt(q, ke, We, yt) {
    var zs;
    const Lt = new FormData();
    if (Lt.append("file", q), Lt.append("name", ke), Lt.append("model_strategy", We), Lt.append("torch_backend", yt), !((zs = window.app) != null && zs.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!cs.ok) {
      const Vs = await cs.json().catch(() => ({}));
      throw new Error(Vs.message || Vs.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function tt() {
    return o("/v2/workspace/import/status");
  }
  async function Pt(q) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function xs(q, ke, We, yt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: ke,
        model_strategy: We,
        torch_backend: yt
      })
    });
  }
  async function Kt() {
    return o("/v2/setup/status");
  }
  async function ra() {
    return o("/v2/comfygit/update-check");
  }
  async function mo() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function fo(q) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ca() {
    return o("/v2/setup/initialize_status");
  }
  async function Ss(q) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function ua() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function No() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function da(q, ke) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: q, save_key: ke })
    });
  }
  async function ma() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function fa(q) {
    const ke = q ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(q)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ke);
  }
  async function va(q) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function hn() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function pa(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ga(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/stop`, {
      method: "POST"
    });
  }
  async function ha(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/start`, {
      method: "POST"
    });
  }
  async function ya(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/status`);
  }
  async function wa(q) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function _a(q = !1) {
    return o(q ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ka() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function ba() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function $a(q) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Ca(q) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function xa(q) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function yn() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function de(q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/info`);
  }
  async function oe(q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances`);
  }
  async function Ge(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function Ke(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(ke)}/start`, {
      method: "POST"
    });
  }
  async function gt(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(ke)}/stop`, {
      method: "POST"
    });
  }
  async function xt(q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(ke)}`, {
      method: "DELETE"
    });
  }
  async function rs(q) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: q })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: d,
    commit: v,
    getHistory: f,
    getBranchHistory: g,
    exportEnv: w,
    validateExport: y,
    validateDeploy: _,
    exportEnvWithForce: S,
    validateEnvironmentExport: C,
    exportEnvironmentWithForce: x,
    // Git Operations
    getBranches: B,
    getCommitDetail: E,
    checkout: R,
    createBranch: L,
    switchBranch: V,
    deleteBranch: K,
    // Environment Management
    listEnvironments: z,
    getEnvironments: W,
    getEnvironmentDetails: X,
    switchEnvironment: te,
    getSwitchProgress: re,
    createEnvironment: he,
    getCreateProgress: ne,
    getComfyUIReleases: Q,
    deleteEnvironment: me,
    // Workflow Management
    getWorkflows: Re,
    getWorkflowDetails: ae,
    getWorkflowContract: pe,
    saveWorkflowContract: ue,
    deleteWorkflowContract: Oe,
    resolveWorkflow: ee,
    installWorkflowDeps: se,
    setModelImportance: P,
    // Model Management
    getEnvironmentModels: U,
    getWorkspaceModels: J,
    getModelDetails: T,
    openFileLocation: M,
    addModelSource: ce,
    removeModelSource: Ve,
    deleteModel: je,
    downloadModel: F,
    scanWorkspaceModels: Y,
    getModelsDirectory: ve,
    setModelsDirectory: Ee,
    getHuggingFaceRepoInfo: $e,
    getModelsSubdirectories: Se,
    searchHuggingFaceRepos: Le,
    // Settings
    getConfig: Ue,
    updateConfig: De,
    // Cloud Auth
    getCloudAuthConfig: n,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    // Debug/Logs
    getEnvironmentLogs: Te,
    getEnvironmentManifest: ye,
    getWorkspaceLogs: Fe,
    getEnvironmentLogPath: Me,
    getWorkspaceLogPath: Z,
    getOrchestratorLogs: Be,
    getOrchestratorLogPath: D,
    openFile: O,
    // Node Management
    getNodes: G,
    trackNodeAsDev: Ie,
    installNode: I,
    queueNodeInstall: le,
    updateNode: ie,
    uninstallNode: Ae,
    // Git Remotes
    getRemotes: ze,
    addRemote: xe,
    removeRemote: qe,
    updateRemoteUrl: Ye,
    fetchRemote: at,
    getRemoteSyncStatus: rt,
    // Push/Pull
    getPullPreview: It,
    pullFromRemote: Wt,
    getPushPreview: ct,
    pushToRemote: fe,
    validateMerge: H,
    // Environment Sync
    syncEnvironmentManually: ut,
    // Workflow Repair
    repairWorkflowModels: ge,
    // Import Operations
    previewTarballImport: He,
    previewGitImport: Pt,
    validateEnvironmentName: ft,
    executeImport: Nt,
    executeGitImport: xs,
    getImportProgress: tt,
    // First-Time Setup
    getSetupStatus: Kt,
    // Manager Update Notice
    getUpdateCheck: ra,
    updateManager: mo,
    initializeWorkspace: fo,
    getInitializeProgress: ca,
    validatePath: Ss,
    // Deploy Operations
    getDeploySummary: ua,
    getDataCenters: No,
    testRunPodConnection: da,
    getNetworkVolumes: ma,
    getRunPodGpuTypes: fa,
    deployToRunPod: va,
    getRunPodPods: hn,
    terminateRunPodPod: pa,
    stopRunPodPod: ga,
    startRunPodPod: ha,
    getDeploymentStatus: ya,
    exportDeployPackage: wa,
    getStoredRunPodKey: _a,
    clearRunPodKey: ka,
    // Custom Worker Operations
    getCustomWorkers: ba,
    addCustomWorker: $a,
    removeCustomWorker: Ca,
    testWorkerConnection: xa,
    scanForWorkers: yn,
    getWorkerSystemInfo: de,
    getWorkerInstances: oe,
    deployToWorker: Ge,
    startWorkerInstance: Ke,
    stopWorkerInstance: gt,
    terminateWorkerInstance: xt,
    // Git Authentication
    testGitAuth: rs
  };
}
async function Cn(e, s) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, s);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Uv() {
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
  async function n() {
    await Cn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const Ov = { class: "base-modal-header" }, Av = {
  key: 0,
  class: "base-modal-title"
}, zv = { class: "base-modal-body" }, Vv = {
  key: 0,
  class: "base-modal-loading"
}, Fv = {
  key: 1,
  class: "base-modal-error"
}, Bv = {
  key: 0,
  class: "base-modal-footer"
}, Wv = /* @__PURE__ */ _e({
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
    const o = e, n = s;
    function l() {
      o.closeOnOverlayClick && n("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && n("close");
    }
    return nt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Mo(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (a(), N(Ut, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ne(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = st(() => {
          }, ["stop"]))
        }, [
          t("div", Ov, [
            et(c.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", Av, m(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (a(), i("button", {
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
            ])])) : h("", !0)
          ]),
          t("div", zv, [
            e.loading ? (a(), i("div", Vv, "Loading...")) : e.error ? (a(), i("div", Fv, m(e.error), 1)) : et(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), i("div", Bv, [
            et(c.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ Ce(Wv, [["__scopeId", "data-v-8dab1081"]]), Gv = ["type", "disabled"], jv = {
  key: 0,
  class: "spinner"
}, Hv = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Ne(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", jv)) : h("", !0),
      et(s.$slots, "default", {}, void 0)
    ], 10, Gv));
  }
}), Pe = /* @__PURE__ */ Ce(Hv, [["__scopeId", "data-v-f3452606"]]), qv = {
  key: 0,
  class: "base-title-count"
}, Kv = /* @__PURE__ */ _e({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), N(_l(`h${e.level}`), {
      class: Ne(["base-title", e.variant])
    }, {
      default: p(() => [
        et(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", qv, "(" + m(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ls = /* @__PURE__ */ Ce(Kv, [["__scopeId", "data-v-5a01561d"]]), Jv = ["value", "disabled"], Qv = {
  key: 0,
  value: "",
  disabled: ""
}, Yv = ["value"], Xv = {
  key: 0,
  class: "base-select-error"
}, Zv = /* @__PURE__ */ _e({
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
    function s(n) {
      return typeof n == "string" ? n : n.value;
    }
    function o(n) {
      return typeof n == "string" ? n : n.label;
    }
    return (n, l) => (a(), i("div", {
      class: Ne(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ne(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => n.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (a(), i("option", Qv, m(e.placeholder), 1)) : h("", !0),
        (a(!0), i(j, null, we(e.options, (r) => (a(), i("option", {
          key: s(r),
          value: s(r)
        }, m(o(r)), 9, Yv))), 128))
      ], 42, Jv),
      e.error ? (a(), i("span", Xv, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), lo = /* @__PURE__ */ Ce(Zv, [["__scopeId", "data-v-4996bfe0"]]), ep = { class: "popover-header" }, tp = { class: "popover-title" }, sp = { class: "popover-content" }, op = {
  key: 0,
  class: "popover-actions"
}, np = /* @__PURE__ */ _e({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), N(Ut, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = st(() => {
          }, ["stop"]))
        }, [
          t("div", ep, [
            t("h4", tp, m(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", sp, [
            et(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), i("div", op, [
            et(s.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), Qt = /* @__PURE__ */ Ce(np, [["__scopeId", "data-v-42815ace"]]), ap = { class: "detail-section" }, lp = {
  key: 0,
  class: "empty-message"
}, ip = { class: "model-header" }, rp = { class: "model-name" }, cp = { class: "model-details" }, up = { class: "model-row" }, dp = { class: "model-row" }, mp = { class: "label" }, fp = {
  key: 0,
  class: "model-row model-row-nodes"
}, vp = { class: "node-list" }, pp = ["onClick"], gp = {
  key: 1,
  class: "model-row"
}, hp = { class: "value" }, yp = {
  key: 2,
  class: "model-row"
}, wp = { class: "value error" }, _p = {
  key: 0,
  class: "model-actions"
}, kp = { class: "detail-section" }, bp = {
  key: 0,
  class: "empty-message"
}, $p = { class: "node-content" }, Cp = { class: "node-main" }, xp = { class: "node-name" }, Sp = { class: "node-badge" }, Ip = {
  key: 0,
  class: "node-version"
}, Ep = ["onClick"], Tp = {
  key: 2,
  class: "node-install-queued"
}, Mp = {
  key: 0,
  class: "node-guidance"
}, Pp = /* @__PURE__ */ _e({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = mt(), d = $(null), v = $(!1), f = $(null), g = $(!1), w = $({}), y = $(!1), _ = $(/* @__PURE__ */ new Set()), S = $(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(ne) {
      switch (ne) {
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
    function B(ne) {
      switch (ne) {
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
    function E(ne) {
      switch (ne) {
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
    function R(ne) {
      switch (ne) {
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
    function L(ne) {
      switch (ne) {
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
    function V(ne) {
      if (!ne.loaded_by || ne.loaded_by.length === 0) return [];
      const Q = ne.hash || ne.filename;
      return _.value.has(Q) ? ne.loaded_by : ne.loaded_by.slice(0, 3);
    }
    function K(ne) {
      return _.value.has(ne);
    }
    function z(ne) {
      _.value.has(ne) ? _.value.delete(ne) : _.value.add(ne), _.value = new Set(_.value);
    }
    async function W() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (ne) {
        f.value = ne instanceof Error ? ne.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function X(ne, Q) {
      w.value[ne] = Q, g.value = !0;
    }
    async function te(ne) {
      try {
        await c(ne);
      } catch (Q) {
        f.value = Q instanceof Error ? Q.message : "Failed to open file location";
      }
    }
    async function re(ne) {
      if (ne.package_id)
        try {
          const Q = ne.latest_version || "latest";
          await u({
            id: ne.package_id,
            version: Q,
            selected_version: Q,
            mode: "remote",
            channel: "default"
          }), S.value.add(ne.package_id);
        } catch (Q) {
          f.value = Q instanceof Error ? Q.message : "Failed to queue node install";
        }
    }
    async function he() {
      if (!g.value) {
        n("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [ne, Q] of Object.entries(w.value))
          await r(o.workflowName, ne, Q);
        n("refresh"), n("close");
      } catch (ne) {
        f.value = ne instanceof Error ? ne.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return nt(W), (ne, Q) => (a(), i(j, null, [
      k(Ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: Q[4] || (Q[4] = (me) => n("close"))
      }, {
        body: p(() => [
          d.value ? (a(), i(j, { key: 0 }, [
            t("section", ap, [
              k(Ls, { variant: "section" }, {
                default: p(() => [
                  b("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", lp, " No models used in this workflow ")) : h("", !0),
              (a(!0), i(j, null, we(d.value.models, (me) => {
                var Re;
                return a(), i("div", {
                  key: me.hash || me.filename,
                  class: "model-card"
                }, [
                  t("div", ip, [
                    Q[6] || (Q[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", rp, m(me.filename), 1)
                  ]),
                  t("div", cp, [
                    t("div", up, [
                      Q[7] || (Q[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ne(["value", x(me.status)])
                      }, m(B(me.status)), 3)
                    ]),
                    t("div", dp, [
                      t("span", mp, [
                        Q[8] || (Q[8] = b(" Importance: ", -1)),
                        k(qr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: Q[0] || (Q[0] = (ae) => y.value = !0)
                        })
                      ]),
                      k(lo, {
                        "model-value": w.value[me.filename] || me.importance,
                        options: C,
                        "onUpdate:modelValue": (ae) => X(me.filename, ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    me.loaded_by && me.loaded_by.length > 0 ? (a(), i("div", fp, [
                      Q[9] || (Q[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", vp, [
                        (a(!0), i(j, null, we(V(me), (ae, pe) => (a(), i("div", {
                          key: `${ae.node_id}-${pe}`,
                          class: "node-reference"
                        }, m(ae.node_type) + " (Node #" + m(ae.node_id) + ") ", 1))), 128)),
                        me.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ae) => z(me.hash || me.filename)
                        }, m(K(me.hash || me.filename) ? "▼ Show less" : `▶ View all (${me.loaded_by.length})`), 9, pp)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    me.size_mb ? (a(), i("div", gp, [
                      Q[10] || (Q[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", hp, m(me.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    me.has_category_mismatch ? (a(), i("div", yp, [
                      Q[13] || (Q[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", wp, [
                        Q[11] || (Q[11] = b(" In ", -1)),
                        t("code", null, m(me.actual_category) + "/", 1),
                        Q[12] || (Q[12] = b(" but loader needs ", -1)),
                        t("code", null, m((Re = me.expected_categories) == null ? void 0 : Re[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  me.status !== "available" ? (a(), i("div", _p, [
                    me.status === "downloadable" ? (a(), N(Pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: Q[1] || (Q[1] = (ae) => n("resolve"))
                    }, {
                      default: p(() => [...Q[14] || (Q[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : me.status === "category_mismatch" && me.file_path ? (a(), N(Pe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => te(me.file_path)
                    }, {
                      default: p(() => [...Q[15] || (Q[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : me.status !== "path_mismatch" ? (a(), N(Pe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (ae) => n("resolve"))
                    }, {
                      default: p(() => [...Q[16] || (Q[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            t("section", kp, [
              k(Ls, { variant: "section" }, {
                default: p(() => [
                  b("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", bp, " No custom nodes used in this workflow ")) : h("", !0),
              (a(!0), i(j, null, we(d.value.nodes, (me, Re) => (a(), i("div", {
                key: `${me.name}-${me.status}-${Re}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Ne(["node-status", E(me.status)])
                }, m(R(me.status)), 3),
                t("div", $p, [
                  t("div", Cp, [
                    t("span", xp, m(me.name), 1),
                    t("span", Sp, m(L(me.status)), 1),
                    me.version ? (a(), i("span", Ip, "v" + m(me.version), 1)) : h("", !0),
                    me.status === "uninstallable" && me.package_id && !S.value.has(me.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ae) => re(me)
                    }, " Install ", 8, Ep)) : me.status === "uninstallable" && me.package_id && S.value.has(me.package_id) ? (a(), i("span", Tp, " Queued ")) : h("", !0)
                  ]),
                  me.guidance ? (a(), i("div", Mp, m(me.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: p(() => [
          k(Pe, {
            variant: "secondary",
            onClick: Q[3] || (Q[3] = (me) => n("close"))
          }, {
            default: p(() => [...Q[17] || (Q[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          g.value ? (a(), N(Pe, {
            key: 0,
            variant: "primary",
            onClick: he
          }, {
            default: p(() => [...Q[18] || (Q[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(Qt, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: Q[5] || (Q[5] = (me) => y.value = !1)
      }, {
        content: p(() => [...Q[19] || (Q[19] = [
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
}), Rp = /* @__PURE__ */ Ce(Pp, [["__scopeId", "data-v-543076d9"]]), Np = ["type", "value", "placeholder", "disabled"], Lp = {
  key: 0,
  class: "base-input-error"
}, Dp = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), i("div", {
      class: Ne(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ne(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = es((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = es((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Np),
      e.error ? (a(), i("span", Lp, m(e.error), 1)) : h("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Ce(Dp, [["__scopeId", "data-v-9ba02cdc"]]), Up = { class: "base-textarea-wrapper" }, Op = ["value", "rows", "placeholder", "disabled", "maxlength"], Ap = {
  key: 0,
  class: "base-textarea-count"
}, zp = /* @__PURE__ */ _e({
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
    const o = e, n = s;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), n("submit"));
    }
    return (r, c) => (a(), i("div", Up, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = es(st((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = es(st((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          es(l, ["enter"])
        ]
      }, null, 40, Op),
      e.showCharCount && e.maxLength ? (a(), i("div", Ap, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Ks = /* @__PURE__ */ Ce(zp, [["__scopeId", "data-v-c6d16c93"]]), Vp = ["for"], Fp = {
  key: 0,
  class: "base-form-field-required"
}, Bp = { class: "base-form-field-input" }, Wp = {
  key: 1,
  class: "base-form-field-error"
}, Gp = {
  key: 2,
  class: "base-form-field-hint"
}, jp = /* @__PURE__ */ _e({
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
    const s = e, o = A(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), i("div", {
      class: Ne(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(m(e.label) + " ", 1),
        e.required ? (a(), i("span", Fp, "*")) : h("", !0)
      ], 8, Vp)) : h("", !0),
      t("div", Bp, [
        et(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", Wp, m(e.error), 1)) : e.hint ? (a(), i("span", Gp, m(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ Ce(jp, [["__scopeId", "data-v-9a1cf296"]]), Hp = { class: "contract-meta" }, qp = { class: "contract-summary" }, Kp = { class: "summary-pill" }, Jp = { class: "summary-pill" }, Qp = { class: "summary-pill" }, Yp = { class: "contract-meta-grid" }, Xp = { class: "contract-layout" }, Zp = { class: "contract-column" }, eg = { class: "section-header" }, tg = {
  key: 0,
  class: "empty-message"
}, sg = ["onClick"], og = { class: "item-card-title" }, ng = { class: "item-card-meta" }, ag = { class: "item-card-summary" }, lg = { key: 0 }, ig = { class: "contract-column" }, rg = { class: "section-header" }, cg = {
  key: 0,
  class: "empty-message"
}, ug = ["onClick"], dg = { class: "item-card-title" }, mg = { class: "item-card-meta" }, fg = { class: "item-card-summary" }, vg = { class: "contract-footer" }, pg = { class: "contract-footer-left" }, gg = { class: "contract-footer-right" }, hg = /* @__PURE__ */ _e({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: c } = mt(), u = $(!1), d = $(!1), v = $(!1), f = $(null), g = $(null), w = $(null), y = $(null), _ = $(null), S = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], C = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], x = A(() => {
      var ee;
      return ((ee = g.value) == null ? void 0 : ee.contract_summary.has_contract) === !0;
    }), B = A(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const ee = w.value.default_contract || "default";
      return w.value.contracts[ee] || (w.value.contracts[ee] = { inputs: [], outputs: [] }), w.value.contracts[ee];
    }), E = A(() => {
      var se;
      const ee = ((se = g.value) == null ? void 0 : se.contract_summary.status) ?? "none";
      return ee === "valid" ? "Valid Contract" : ee === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function R(ee) {
      return ee ? JSON.parse(JSON.stringify(ee)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function L(ee) {
      return ee === "integer" || ee === "number";
    }
    function V(ee) {
      return ee === "enum";
    }
    function K(ee) {
      return ee == null ? "" : String(ee);
    }
    function z(ee) {
      const se = ee.trim();
      if (!se) return;
      const P = Number(se);
      return Number.isFinite(P) ? P : void 0;
    }
    function W(ee) {
      return (ee || []).join(`
`);
    }
    function X(ee) {
      return ee.split(/[\n,]/).map((se) => se.trim()).filter(Boolean);
    }
    function te(ee) {
      return ee == null ? "" : String(ee);
    }
    function re(ee) {
      return typeof ee == "string" ? ee.length > 24 ? `${ee.slice(0, 24)}...` : ee : String(ee);
    }
    function he(ee) {
      if (!w.value) return;
      const se = ee.trim() || "default";
      w.value.default_contract = se, w.value.contracts[se] || (w.value.contracts[se] = { inputs: [], outputs: [] });
    }
    function ne(ee) {
      B.value.inputs.splice(ee, 1), y.value === ee ? y.value = null : y.value != null && y.value > ee && (y.value -= 1);
    }
    function Q(ee) {
      B.value.outputs.splice(ee, 1), _.value === ee ? _.value = null : _.value != null && _.value > ee && (_.value -= 1);
    }
    function me(ee) {
      y.value = y.value === ee ? null : ee;
    }
    function Re(ee) {
      _.value = _.value === ee ? null : ee;
    }
    async function ae() {
      u.value = !0, f.value = null;
      try {
        g.value = await l(o.workflowName), w.value = R(g.value.execution_contract);
      } catch (ee) {
        f.value = ee instanceof Error ? ee.message : "Failed to load workflow contract";
      } finally {
        u.value = !1;
      }
    }
    async function pe() {
      if (w.value) {
        d.value = !0, f.value = null;
        try {
          g.value = await r(o.workflowName, w.value), w.value = R(g.value.execution_contract), n("refresh");
        } catch (ee) {
          f.value = ee instanceof Error ? ee.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function ue() {
      v.value = !0, f.value = null;
      try {
        await c(o.workflowName), await ae(), n("refresh");
      } catch (ee) {
        f.value = ee instanceof Error ? ee.message : "Failed to delete workflow contract";
      } finally {
        v.value = !1;
      }
    }
    function Oe() {
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: o.workflowName }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel")), n("close");
    }
    return nt(ae), (ee, se) => (a(), N(Ct, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: u.value,
      error: f.value || void 0,
      "fixed-height": "",
      onClose: se[5] || (se[5] = (P) => n("close"))
    }, {
      body: p(() => [
        w.value ? (a(), i(j, { key: 0 }, [
          t("section", Hp, [
            t("div", qp, [
              t("span", Kp, m(E.value), 1),
              t("span", Jp, m(B.value.inputs.length) + " input" + m(B.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", Qp, m(B.value.outputs.length) + " output" + m(B.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", Yp, [
              k(vt, { label: "Default Contract" }, {
                default: p(() => [
                  k(it, {
                    "model-value": w.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": he
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              k(vt, { label: "Display Name" }, {
                default: p(() => [
                  k(it, {
                    modelValue: B.value.display_name,
                    "onUpdate:modelValue": se[0] || (se[0] = (P) => B.value.display_name = P),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            k(vt, { label: "Description" }, {
              default: p(() => [
                k(Ks, {
                  modelValue: B.value.description,
                  "onUpdate:modelValue": se[1] || (se[1] = (P) => B.value.description = P),
                  rows: 2,
                  placeholder: "Optional description for this contract"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          t("section", Xp, [
            t("div", Zp, [
              t("div", eg, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...se[6] || (se[6] = [
                    b("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              B.value.inputs.length ? h("", !0) : (a(), i("div", tg, " No inputs configured. ")),
              (a(!0), i(j, null, we(B.value.inputs, (P, U) => (a(), i("div", {
                key: `input-${U}`,
                class: Ne(["item-card", { expanded: y.value === U }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (J) => me(U)
                }, [
                  t("div", null, [
                    t("div", og, m(P.name || `Input ${U + 1}`), 1),
                    t("div", ng, [
                      b(" Node " + m(P.node_id || "?"), 1),
                      P.widget_idx !== void 0 ? (a(), i(j, { key: 0 }, [
                        b(" · Widget " + m(P.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", ag, [
                      t("span", null, m(P.type || "string"), 1),
                      t("span", null, m(P.required ? "required" : "optional"), 1),
                      P.default !== void 0 && P.default !== "" ? (a(), i("span", lg, "default " + m(re(P.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Pe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((J) => ne(U), ["stop"])
                  }, {
                    default: p(() => [...se[7] || (se[7] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, sg),
                y.value === U ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: se[2] || (se[2] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: P.name,
                        "onUpdate:modelValue": (J) => P.name = J,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: P.display_name,
                        "onUpdate:modelValue": (J) => P.display_name = J,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: p(() => [
                      k(lo, {
                        "model-value": P.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (J) => P.type = J
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Required" }, {
                    default: p(() => [
                      k(lo, {
                        "model-value": P.required ? "true" : "false",
                        options: C,
                        "full-width": "",
                        "onUpdate:modelValue": (J) => P.required = J === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, {
                    class: Ne({ "item-grid-full": P.type === "string" || P.type === "enum" }),
                    label: "Default"
                  }, {
                    default: p(() => [
                      P.type === "string" ? (a(), N(Ks, {
                        key: 0,
                        "model-value": te(P.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (J) => P.default = J
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), N(it, {
                        key: 1,
                        modelValue: P.default,
                        "onUpdate:modelValue": (J) => P.default = J,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  L(P.type) ? (a(), N(vt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: p(() => [
                      k(it, {
                        "model-value": K(P.min),
                        "full-width": "",
                        "onUpdate:modelValue": (J) => P.min = z(J)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  L(P.type) ? (a(), N(vt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: p(() => [
                      k(it, {
                        "model-value": K(P.max),
                        "full-width": "",
                        "onUpdate:modelValue": (J) => P.max = z(J)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  V(P.type) ? (a(), N(vt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: p(() => [
                      k(Ks, {
                        "model-value": W(P.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (J) => P.enum_values = X(J)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("div", ig, [
              t("div", rg, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...se[8] || (se[8] = [
                    b("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              B.value.outputs.length ? h("", !0) : (a(), i("div", cg, " No outputs configured. ")),
              (a(!0), i(j, null, we(B.value.outputs, (P, U) => (a(), i("div", {
                key: `output-${U}`,
                class: Ne(["item-card", { expanded: _.value === U }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (J) => Re(U)
                }, [
                  t("div", null, [
                    t("div", dg, m(P.name || `Output ${U + 1}`), 1),
                    t("div", mg, [
                      b(" Node " + m(P.node_id || "?"), 1),
                      P.selector ? (a(), i(j, { key: 0 }, [
                        b(" · " + m(P.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", fg, [
                      t("span", null, m(P.type || "file"), 1)
                    ])
                  ]),
                  k(Pe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((J) => Q(U), ["stop"])
                  }, {
                    default: p(() => [...se[9] || (se[9] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, ug),
                _.value === U ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: se[3] || (se[3] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: P.name,
                        "onUpdate:modelValue": (J) => P.name = J,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: P.display_name,
                        "onUpdate:modelValue": (J) => P.display_name = J,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: p(() => [
                      k(lo, {
                        "model-value": P.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (J) => P.type = J
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ])
        ], 64)) : h("", !0)
      ]),
      footer: p(() => [
        t("div", vg, [
          t("div", pg, [
            k(Pe, {
              variant: "secondary",
              onClick: Oe
            }, {
              default: p(() => [...se[10] || (se[10] = [
                b(" Open I/O Mapping Mode ", -1)
              ])]),
              _: 1
            })
          ]),
          t("div", gg, [
            k(Pe, {
              variant: "secondary",
              onClick: se[4] || (se[4] = (P) => n("close"))
            }, {
              default: p(() => [...se[11] || (se[11] = [
                b(" Close ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "danger",
              disabled: !x.value,
              loading: v.value,
              onClick: ue
            }, {
              default: p(() => [...se[12] || (se[12] = [
                b(" Delete Contract ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            k(Pe, {
              variant: "primary",
              loading: d.value,
              onClick: pe
            }, {
              default: p(() => [...se[13] || (se[13] = [
                b(" Save Contract ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), yg = /* @__PURE__ */ Ce(hg, [["__scopeId", "data-v-143775b1"]]), ot = uo({
  items: [],
  status: "idle"
});
let ws = null;
function Kr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Aa(e) {
  return ot.items.find((s) => s.id === e);
}
async function ho() {
  if (ot.status === "downloading") return;
  const e = ot.items.find((s) => s.status === "queued");
  if (!e) {
    ot.status = "idle";
    return;
  }
  ot.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await wg(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    ot.status = "idle", ho();
  }
}
async function wg(e) {
  return new Promise((s, o) => {
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
    }, 250), g = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const y = JSON.parse(w.data);
        switch (y.type) {
          case "progress":
            e.downloaded = y.downloaded || 0, e.size = y.total || e.size, u = Date.now();
            const _ = u, S = (_ - r) / 1e3, C = e.downloaded - c;
            if (C > 0 && S > 0)
              if (e.speed = C / S, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const x = e.size - e.downloaded;
                e.eta = x / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, g(), l.close(), ws = null, s();
            break;
          case "error":
            d = !0, g(), l.close(), ws = null, o(new Error(y.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      g(), l.close(), ws = null, d || o(new Error("Connection lost"));
    };
  });
}
async function _g() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (ot.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: Kr(),
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
      ot.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Ro() {
  function e(C) {
    for (const x of C) {
      if (ot.items.some(
        (R) => R.url === x.url && R.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const E = {
        id: Kr(),
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
      ot.items.push(E);
    }
    ot.status === "idle" && ho();
  }
  async function s(C) {
    const x = Aa(C);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ws && (ws.close(), ws = null), x.status = "failed", x.error = "Cancelled by user", ot.status = "idle", ho();
      } else if (x.status === "queued") {
        const B = ot.items.findIndex((E) => E.id === C);
        B >= 0 && ot.items.splice(B, 1);
      }
    }
  }
  function o(C) {
    const x = Aa(C);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, ot.status === "idle" && ho());
  }
  function n(C) {
    const x = Aa(C);
    !x || x.status !== "paused" || (x.status = "queued", ot.status === "idle" && ho());
  }
  function l() {
    const C = ot.items.filter((x) => x.status === "paused");
    for (const x of C)
      x.status = "queued";
    ot.status === "idle" && ho();
  }
  function r(C) {
    const x = ot.items.findIndex((B) => B.id === C);
    x >= 0 && ["completed", "failed", "paused"].includes(ot.items[x].status) && ot.items.splice(x, 1);
  }
  function c() {
    ot.items = ot.items.filter((C) => C.status !== "completed");
  }
  function u() {
    ot.items = ot.items.filter((C) => C.status !== "failed");
  }
  const d = A(
    () => ot.items.find((C) => C.status === "downloading")
  ), v = A(
    () => ot.items.filter((C) => C.status === "queued")
  ), f = A(
    () => ot.items.filter((C) => C.status === "completed")
  ), g = A(
    () => ot.items.filter((C) => C.status === "failed")
  ), w = A(
    () => ot.items.filter((C) => C.status === "paused")
  ), y = A(() => ot.items.length > 0), _ = A(
    () => ot.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), S = A(
    () => ot.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Un(ot),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: g,
    pausedItems: w,
    hasItems: y,
    activeCount: _,
    hasPaused: S,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: _g
  };
}
function Jr() {
  const e = $(null), s = $(null), o = $([]), n = $([]), l = $(!1), r = $(null);
  async function c(B, E) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(B, E);
    if (!R.ok) {
      const V = await R.json().catch(() => ({})), K = V.error || V.message || `Request failed: ${R.status}`;
      throw new Error(K);
    }
    return R.json();
  }
  async function u(B) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await c(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), E.nodes.version_gated = E.nodes.version_gated || [], E.nodes.uninstallable = E.nodes.uninstallable || [], E.node_guidance = E.node_guidance || {}, E.package_aliases = E.package_aliases || {}, e.value = E, E;
    } catch (E) {
      const R = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = R, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(B, E, R, L) {
    l.value = !0, r.value = null;
    try {
      let V;
      if (!Ao()) {
        const K = Object.fromEntries(E), z = Object.fromEntries(R), W = L ? Array.from(L) : [];
        V = await c(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: K,
              model_choices: z,
              skipped_packages: W
            })
          }
        );
      }
      return s.value = V, V;
    } catch (V) {
      const K = V instanceof Error ? V.message : "Unknown error occurred";
      throw r.value = K, V;
    } finally {
      l.value = !1;
    }
  }
  async function v(B, E = 10) {
    l.value = !0, r.value = null;
    try {
      let R;
      return Ao() || (R = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: E })
        }
      )), o.value = R.results, R.results;
    } catch (R) {
      const L = R instanceof Error ? R.message : "Unknown error occurred";
      throw r.value = L, R;
    } finally {
      l.value = !1;
    }
  }
  async function f(B, E = 10) {
    l.value = !0, r.value = null;
    try {
      let R;
      return Ao() || (R = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: E })
        }
      )), n.value = R.results, R.results;
    } catch (R) {
      const L = R instanceof Error ? R.message : "Unknown error occurred";
      throw r.value = L, R;
    } finally {
      l.value = !1;
    }
  }
  const g = uo({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function y(B) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await _(B);
    } catch (E) {
      const R = E instanceof Error ? E.message : "Failed to install nodes";
      throw g.installError = R, E;
    }
  }
  async function _(B) {
    var R;
    const E = await c(
      `/v2/comfygit/workflow/${B}/install`,
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
      const L = new Map(((R = E.failed) == null ? void 0 : R.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < g.nodesToInstall.length; V++) {
        const K = g.nodesToInstall[V], z = L.get(K);
        g.nodeInstallProgress.completedNodes.push({
          node_id: K,
          success: !z,
          error: z
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function S(B, E, R) {
    w(), g.phase = "resolving", r.value = null;
    const L = Object.fromEntries(E), V = Object.fromEntries(R);
    try {
      const K = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: L,
          model_choices: V
        })
      });
      if (!K.ok)
        throw new Error(`Request failed: ${K.status}`);
      if (!K.body)
        throw new Error("No response body");
      const z = K.body.getReader(), W = new TextDecoder();
      let X = "";
      for (; ; ) {
        const { done: te, value: re } = await z.read();
        if (te) break;
        X += W.decode(re, { stream: !0 });
        const he = X.split(`

`);
        X = he.pop() || "";
        for (const ne of he) {
          if (!ne.trim()) continue;
          const Q = ne.split(`
`);
          let me = "", Re = "";
          for (const ae of Q)
            ae.startsWith("event: ") ? me = ae.slice(7) : ae.startsWith("data: ") && (Re = ae.slice(6));
          if (Re)
            try {
              const ae = JSON.parse(Re);
              C(me, ae);
            } catch (ae) {
              console.warn("Failed to parse SSE event:", ae);
            }
        }
      }
    } catch (K) {
      const z = K instanceof Error ? K.message : "Unknown error occurred";
      throw r.value = z, g.error = z, g.phase = "error", K;
    }
  }
  function C(B, E) {
    switch (B) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = E.total;
        break;
      case "file_start":
        g.currentFile = E.filename, g.currentFileIndex = E.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = E.downloaded, g.bytesTotal = E.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = E.nodes_to_install || [], E.download_results && (g.completedFiles = E.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = E.message, g.phase = "error", r.value = E.message;
        break;
    }
  }
  function x(B, E) {
    const { addToQueue: R } = Ro(), L = E.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: B,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return L.length > 0 && R(L), L.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: r,
    progress: g,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: S,
    installNodes: y,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: x
  };
}
const kg = { class: "resolution-stepper" }, bg = { class: "stepper-header" }, $g = ["onClick"], Cg = {
  key: 0,
  class: "step-icon"
}, xg = {
  key: 1,
  class: "step-number"
}, Sg = { class: "step-label" }, Ig = {
  key: 0,
  class: "step-connector"
}, Eg = { class: "stepper-content" }, Tg = /* @__PURE__ */ _e({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
        const g = o.stepStats[v];
        return g.total > 0 && g.resolved === g.total;
      }
      return o.completedSteps.includes(v);
    }
    function r(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
        const g = o.stepStats[v];
        return g.resolved > 0 && g.resolved < g.total;
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
    return (v, f) => (a(), i("div", kg, [
      t("div", bg, [
        (a(!0), i(j, null, we(e.steps, (g, w) => (a(), i("div", {
          key: g.id,
          class: Ne(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": r(g.id),
            disabled: u(g.id)
          }]),
          onClick: (y) => d(g.id)
        }, [
          t("div", {
            class: Ne(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), i("span", Cg, "✓")) : (a(), i("span", xg, m(w + 1), 1))
          ], 2),
          t("div", Sg, m(g.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Ig)) : h("", !0)
        ], 10, $g))), 128))
      ]),
      t("div", Eg, [
        et(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Mg = /* @__PURE__ */ Ce(Tg, [["__scopeId", "data-v-2a7b3af8"]]), Pg = /* @__PURE__ */ _e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = A(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = A(() => `confidence-${o.value}`), l = A(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (a(), i("span", {
      class: Ne(["confidence-badge", n.value, e.size])
    }, m(l.value), 3));
  }
}), Hn = /* @__PURE__ */ Ce(Pg, [["__scopeId", "data-v-17ec4b80"]]), Rg = { class: "node-info" }, Ng = { class: "node-info-text" }, Lg = { class: "item-body" }, Dg = {
  key: 0,
  class: "resolved-state"
}, Ug = {
  key: 1,
  class: "multiple-options"
}, Og = {
  key: 0,
  class: "installed-packs-section"
}, Ag = { class: "installed-packs-list" }, zg = ["onClick"], Vg = { class: "installed-pack-name" }, Fg = { class: "installed-pack-source" }, Bg = { class: "options-list" }, Wg = ["onClick"], Gg = ["name", "value", "checked", "onChange"], jg = { class: "option-content" }, Hg = { class: "option-header" }, qg = { class: "option-package-id" }, Kg = {
  key: 0,
  class: "option-title"
}, Jg = { class: "option-meta" }, Qg = {
  key: 0,
  class: "installed-badge"
}, Yg = { class: "action-buttons" }, Xg = {
  key: 2,
  class: "unresolved"
}, Zg = {
  key: 0,
  class: "installed-packs-section"
}, eh = { class: "installed-packs-list" }, th = ["onClick"], sh = { class: "installed-pack-name" }, oh = { class: "installed-pack-source" }, nh = {
  key: 1,
  class: "searching-state"
}, ah = { class: "options-list" }, lh = ["onClick"], ih = ["name", "value"], rh = { class: "option-content" }, ch = { class: "option-header" }, uh = { class: "option-package-id" }, dh = {
  key: 0,
  class: "option-description"
}, mh = { class: "option-meta" }, fh = {
  key: 0,
  class: "installed-badge"
}, vh = {
  key: 3,
  class: "unresolved-message"
}, ph = { class: "action-buttons" }, gh = /* @__PURE__ */ _e({
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
    const o = e, n = s;
    function l(f, g = 80) {
      return f.length <= g ? f : f.slice(0, g - 3) + "...";
    }
    const r = A(() => !!o.choice);
    A(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), A(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
    });
    const c = A(() => o.installedNodePacks || []), u = A(() => {
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
    return (f, g) => (a(), i("div", {
      class: Ne(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Rg, [
        t("span", Ng, [
          g[7] || (g[7] = b("Node type: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Ne(["status-badge", u.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", Lg, [
        r.value ? (a(), i("div", Dg, [
          k(Pe, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (w) => n("clear-choice"))
          }, {
            default: p(() => [...g[8] || (g[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", Ug, [
          c.value.length > 0 ? (a(), i("div", Og, [
            g[9] || (g[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", Ag, [
              (a(!0), i(j, null, we(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                t("span", Vg, m(w.package_id), 1),
                t("span", Fg, m(v(w.source)), 1)
              ], 8, zg))), 128))
            ])
          ])) : h("", !0),
          g[13] || (g[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", Bg, [
            (a(!0), i(j, null, we(e.options, (w, y) => (a(), i("label", {
              key: w.package_id,
              class: Ne(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (_) => d(y)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (_) => d(y)
              }, null, 40, Gg),
              t("div", jg, [
                t("div", Hg, [
                  t("span", qg, m(w.package_id), 1),
                  k(Hn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", Kg, m(w.title), 1)) : h("", !0),
                t("div", Jg, [
                  w.is_installed ? (a(), i("span", Qg, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Wg))), 128))
          ]),
          t("div", Yg, [
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[1] || (g[1] = (w) => n("search"))
            }, {
              default: p(() => [...g[10] || (g[10] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[2] || (g[2] = (w) => n("manual-entry"))
            }, {
              default: p(() => [...g[11] || (g[11] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (w) => n("mark-optional"))
            }, {
              default: p(() => [...g[12] || (g[12] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", Xg, [
          c.value.length > 0 ? (a(), i("div", Zg, [
            g[14] || (g[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", eh, [
              (a(!0), i(j, null, we(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                t("span", sh, m(w.package_id), 1),
                t("span", oh, m(v(w.source)), 1)
              ], 8, th))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (a(), i("div", nh, [...g[15] || (g[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(j, { key: 2 }, [
            g[16] || (g[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", ah, [
              (a(!0), i(j, null, we(e.searchResults.slice(0, 5), (w, y) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, ih),
                t("div", rh, [
                  t("div", ch, [
                    t("span", uh, m(w.package_id), 1),
                    k(Hn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", dh, m(l(w.description)), 1)) : h("", !0),
                  t("div", mh, [
                    w.is_installed ? (a(), i("span", fh, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, lh))), 128))
            ])
          ], 64)) : (a(), i("div", vh, [...g[17] || (g[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", ph, [
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[4] || (g[4] = (w) => n("search"))
            }, {
              default: p(() => {
                var w;
                return [
                  b(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (w) => n("manual-entry"))
            }, {
              default: p(() => [...g[18] || (g[18] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (w) => n("mark-optional"))
            }, {
              default: p(() => [...g[19] || (g[19] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), hh = /* @__PURE__ */ Ce(gh, [["__scopeId", "data-v-fb0bbf03"]]), yh = { class: "item-navigator" }, wh = { class: "nav-item-info" }, _h = ["title"], kh = { class: "nav-controls" }, bh = { class: "nav-arrows" }, $h = ["disabled"], Ch = ["disabled"], xh = { class: "nav-position" }, Sh = /* @__PURE__ */ _e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), i("div", yh, [
      t("div", wh, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, _h)
      ]),
      t("div", kh, [
        t("div", bh, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, $h),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Ch)
        ]),
        t("span", xh, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), Qr = /* @__PURE__ */ Ce(Sh, [["__scopeId", "data-v-74af7920"]]), Ih = { class: "node-resolution-step" }, Eh = {
  key: 0,
  class: "auto-resolved-section"
}, Th = { class: "section-header" }, Mh = { class: "stat-badge" }, Ph = { class: "resolved-packages-list" }, Rh = { class: "package-info" }, Nh = { class: "package-id" }, Lh = { class: "node-count" }, Dh = { class: "package-actions" }, Uh = {
  key: 0,
  class: "status-badge install"
}, Oh = {
  key: 1,
  class: "status-badge skip"
}, Ah = ["onClick"], zh = {
  key: 1,
  class: "section-divider"
}, Vh = { class: "step-header" }, Fh = { class: "stat-badge" }, Bh = {
  key: 1,
  class: "step-body"
}, Wh = {
  key: 3,
  class: "empty-state"
}, Gh = { class: "node-modal-body" }, jh = { class: "node-search-results-container" }, Hh = {
  key: 0,
  class: "node-search-results"
}, qh = ["onClick"], Kh = { class: "node-result-header" }, Jh = { class: "node-result-package-id" }, Qh = {
  key: 0,
  class: "node-result-description"
}, Yh = {
  key: 1,
  class: "node-empty-state"
}, Xh = {
  key: 2,
  class: "node-empty-state"
}, Zh = {
  key: 3,
  class: "node-empty-state"
}, ey = { class: "node-manual-entry-modal" }, ty = { class: "node-modal-body" }, sy = { class: "node-modal-actions" }, oy = /* @__PURE__ */ _e({
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
    const o = e, n = s, { searchNodes: l } = Jr(), r = $(0), c = $(!1), u = $(!1), d = $(""), v = $(""), f = $([]), g = $(!1), w = $(/* @__PURE__ */ new Map()), y = $(/* @__PURE__ */ new Set()), _ = $(!1);
    function S() {
      _.value && pe(), _.value = !1;
    }
    const C = A(() => o.nodes[r.value]), x = A(() => o.nodes.filter((T) => o.nodeChoices.has(T.node_type)).length), B = A(() => C.value ? w.value.get(C.value.node_type) || [] : []), E = A(() => C.value ? y.value.has(C.value.node_type) : !1);
    bt(C, async (T) => {
      var M;
      T && ((M = T.options) != null && M.length || w.value.has(T.node_type) || y.value.has(T.node_type) || o.nodeChoices.has(T.node_type) || await R(T.node_type));
    }, { immediate: !0 });
    async function R(T) {
      y.value.add(T);
      try {
        const M = await l(T, 5);
        w.value.set(T, M);
      } catch {
        w.value.set(T, []);
      } finally {
        y.value.delete(T);
      }
    }
    const L = A(() => o.autoResolvedPackages.filter((T) => !o.skippedPackages.has(T.package_id)).length);
    function V(T) {
      return o.skippedPackages.has(T);
    }
    function K(T) {
      n("package-skip", T);
    }
    const z = A(() => {
      var M;
      if (!C.value) return "not-found";
      const T = o.nodeChoices.get(C.value.node_type);
      if (T)
        switch (T.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (M = C.value.options) != null && M.length ? "ambiguous" : "not-found";
    }), W = A(() => {
      var M;
      if (!C.value) return;
      const T = o.nodeChoices.get(C.value.node_type);
      if (T)
        switch (T.action) {
          case "install":
            return T.package_id ? `→ ${T.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (M = C.value.options) != null && M.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function X(T) {
      T >= 0 && T < o.nodes.length && (r.value = T);
    }
    function te() {
      var T;
      for (let M = r.value + 1; M < o.nodes.length; M++) {
        const ce = o.nodes[M];
        if (!((T = o.nodeChoices) != null && T.has(ce.node_type))) {
          X(M);
          return;
        }
      }
    }
    function re() {
      C.value && (n("mark-optional", C.value.node_type), Rt(() => te()));
    }
    function he() {
      C.value && (n("skip", C.value.node_type), Rt(() => te()));
    }
    function ne(T) {
      C.value && (n("option-selected", C.value.node_type, T), Rt(() => te()));
    }
    function Q() {
      C.value && n("clear-choice", C.value.node_type);
    }
    function me() {
      C.value && (d.value = C.value.node_type, f.value = B.value, c.value = !0, se(d.value));
    }
    function Re() {
      v.value = "", u.value = !0;
    }
    function ae(T) {
      C.value && (n("manual-entry", C.value.node_type, T), Rt(() => te()));
    }
    function pe() {
      c.value = !1, d.value = "", f.value = [];
    }
    function ue() {
      u.value = !1, v.value = "";
    }
    let Oe = null;
    function ee() {
      Oe && clearTimeout(Oe), Oe = setTimeout(() => {
        se(d.value);
      }, 300);
    }
    async function se(T) {
      if (!T.trim()) {
        f.value = [];
        return;
      }
      g.value = !0;
      try {
        f.value = await l(T, 10);
      } catch {
        f.value = [];
      } finally {
        g.value = !1;
      }
    }
    function P(T) {
      C.value && (n("manual-entry", C.value.node_type, T.package_id), pe(), Rt(() => te()));
    }
    function U(T) {
      C.value && (n("manual-entry", C.value.node_type, T.package_id), Rt(() => te()));
    }
    function J() {
      !C.value || !v.value.trim() || (n("manual-entry", C.value.node_type, v.value.trim()), ue(), Rt(() => te()));
    }
    return (T, M) => {
      var ce, Ve;
      return a(), i("div", Ih, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", Eh, [
          t("div", Th, [
            M[6] || (M[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Mh, m(L.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Ph, [
            (a(!0), i(j, null, we(e.autoResolvedPackages, (je) => (a(), i("div", {
              key: je.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Rh, [
                t("code", Nh, m(je.package_id), 1),
                t("span", Lh, m(je.node_types_count) + " node type" + m(je.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Dh, [
                V(je.package_id) ? (a(), i("span", Oh, " SKIPPED ")) : (a(), i("span", Uh, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (F) => K(je.package_id)
                }, m(V(je.package_id) ? "Include" : "Skip"), 9, Ah)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", zh)) : h("", !0),
        e.nodes.length > 0 ? (a(), i(j, { key: 2 }, [
          t("div", Vh, [
            M[7] || (M[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Fh, m(x.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (a(), N(Qr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: M[0] || (M[0] = (je) => X(r.value - 1)),
            onNext: M[1] || (M[1] = (je) => X(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          C.value ? (a(), i("div", Bh, [
            k(hh, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((ce = C.value.options) != null && ce.length),
              options: C.value.options,
              choice: (Ve = e.nodeChoices) == null ? void 0 : Ve.get(C.value.node_type),
              status: z.value,
              "status-label": W.value,
              "search-results": B.value,
              "is-searching": E.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: re,
              onSkip: he,
              onManualEntry: Re,
              onSearch: me,
              onOptionSelected: ne,
              onClearChoice: Q,
              onSearchResultSelected: U,
              onInstalledPackSelected: ae
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", Wh, [...M[8] || (M[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (a(), N(Ut, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: M[4] || (M[4] = st((je) => _.value = !0, ["self"])),
            onMouseup: st(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: M[3] || (M[3] = (je) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                M[9] || (M[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: pe
                }, "✕")
              ]),
              t("div", Gh, [
                k(it, {
                  modelValue: d.value,
                  "onUpdate:modelValue": M[2] || (M[2] = (je) => d.value = je),
                  placeholder: "Search by node type, package name...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                t("div", jh, [
                  f.value.length > 0 ? (a(), i("div", Hh, [
                    (a(!0), i(j, null, we(f.value, (je) => (a(), i("div", {
                      key: je.package_id,
                      class: "node-search-result-item",
                      onClick: (F) => P(je)
                    }, [
                      t("div", Kh, [
                        t("code", Jh, m(je.package_id), 1),
                        je.match_confidence ? (a(), N(Hn, {
                          key: 0,
                          confidence: je.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      je.description ? (a(), i("div", Qh, m(je.description), 1)) : h("", !0)
                    ], 8, qh))), 128))
                  ])) : g.value ? (a(), i("div", Yh, "Searching...")) : d.value ? (a(), i("div", Xh, 'No packages found matching "' + m(d.value) + '"', 1)) : (a(), i("div", Zh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (a(), N(Ut, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: st(ue, ["self"])
          }, [
            t("div", ey, [
              t("div", { class: "node-modal-header" }, [
                M[10] || (M[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              t("div", ty, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": M[5] || (M[5] = (je) => v.value = je),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", sy, [
                  k(Pe, {
                    variant: "secondary",
                    onClick: ue
                  }, {
                    default: p(() => [...M[11] || (M[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Pe, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: J
                  }, {
                    default: p(() => [...M[12] || (M[12] = [
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
}), ny = /* @__PURE__ */ Ce(oy, [["__scopeId", "data-v-94c6a438"]]), ay = { class: "node-info" }, ly = { class: "node-info-text" }, iy = { class: "item-body" }, ry = {
  key: 0,
  class: "resolved-state"
}, cy = {
  key: 1,
  class: "multiple-options"
}, uy = { class: "options-list" }, dy = ["onClick"], my = ["name", "value", "checked", "onChange"], fy = { class: "option-content" }, vy = { class: "option-header" }, py = { class: "option-filename" }, gy = { class: "option-meta" }, hy = { class: "option-size" }, yy = { class: "option-category" }, wy = { class: "option-path" }, _y = { class: "action-buttons" }, ky = {
  key: 2,
  class: "unresolved"
}, by = { class: "action-buttons" }, $y = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = A(() => !!o.choice);
    A(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), A(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = A(() => {
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
      class: Ne(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", ay, [
        t("span", ly, [
          v[7] || (v[7] = b("Used by: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Ne(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", iy, [
        l.value ? (a(), i("div", ry, [
          k(Pe, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => n("clear-choice"))
          }, {
            default: p(() => [...v[8] || (v[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", cy, [
          v[12] || (v[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", uy, [
            (a(!0), i(j, null, we(e.options, (f, g) => (a(), i("label", {
              key: f.model.hash,
              class: Ne(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, my),
              t("div", fy, [
                t("div", vy, [
                  t("span", py, m(f.model.filename), 1),
                  k(Hn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", gy, [
                  t("span", hy, m(u(f.model.size)), 1),
                  t("span", yy, m(f.model.category), 1)
                ]),
                t("div", wy, m(f.model.relative_path), 1)
              ])
            ], 10, dy))), 128))
          ]),
          t("div", _y, [
            k(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => n("search"))
            }, {
              default: p(() => [...v[9] || (v[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => n("download-url"))
            }, {
              default: p(() => [...v[10] || (v[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => n("mark-optional"))
            }, {
              default: p(() => [...v[11] || (v[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", ky, [
          v[16] || (v[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", by, [
            k(Pe, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => n("search"))
            }, {
              default: p(() => [...v[13] || (v[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => n("download-url"))
            }, {
              default: p(() => [...v[14] || (v[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => n("mark-optional"))
            }, {
              default: p(() => [...v[15] || (v[15] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Cy = /* @__PURE__ */ Ce($y, [["__scopeId", "data-v-8a82fefa"]]), xy = { class: "model-resolution-step" }, Sy = { class: "step-header" }, Iy = { class: "step-info" }, Ey = { class: "step-title" }, Ty = { class: "step-description" }, My = { class: "stat-badge" }, Py = {
  key: 1,
  class: "step-body"
}, Ry = {
  key: 2,
  class: "empty-state"
}, Ny = { class: "model-search-modal" }, Ly = { class: "model-modal-body" }, Dy = {
  key: 0,
  class: "model-search-results"
}, Uy = ["onClick"], Oy = { class: "model-result-header" }, Ay = { class: "model-result-filename" }, zy = { class: "model-result-meta" }, Vy = { class: "model-result-category" }, Fy = { class: "model-result-size" }, By = {
  key: 0,
  class: "model-result-path"
}, Wy = {
  key: 1,
  class: "model-no-results"
}, Gy = {
  key: 2,
  class: "model-searching"
}, jy = { class: "model-download-url-modal" }, Hy = { class: "model-modal-body" }, qy = { class: "model-input-group" }, Ky = { class: "model-input-group" }, Jy = { class: "model-modal-actions" }, Qy = /* @__PURE__ */ _e({
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
    function n(ae) {
      var pe;
      return ae && ((pe = o[ae]) == null ? void 0 : pe[0]) || null;
    }
    const l = e, r = s, c = $(0), u = $(!1), d = $(!1), v = $(""), f = $(""), g = $(""), w = $([]), y = $(!1), _ = A(() => l.models[c.value]), S = A(() => l.models.some((ae) => ae.is_download_intent)), C = A(() => l.models.filter(
      (ae) => l.modelChoices.has(ae.filename) || ae.is_download_intent
    ).length), x = A(() => {
      var pe;
      if (!_.value) return "";
      const ae = n((pe = _.value.reference) == null ? void 0 : pe.node_type);
      return ae ? `${ae}/${_.value.filename}` : "";
    }), B = A(() => {
      var pe;
      if (!_.value) return "not-found";
      const ae = l.modelChoices.get(_.value.filename);
      if (ae)
        switch (ae.action) {
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
    }), E = A(() => {
      var pe, ue;
      if (!_.value) return;
      const ae = l.modelChoices.get(_.value.filename);
      if (ae)
        switch (ae.action) {
          case "select":
            return (pe = ae.selected_model) != null && pe.filename ? `→ ${ae.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (ue = _.value.options) != null && ue.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function R(ae) {
      ae >= 0 && ae < l.models.length && (c.value = ae);
    }
    function L() {
      var ae;
      for (let pe = c.value + 1; pe < l.models.length; pe++) {
        const ue = l.models[pe];
        if (!ue.is_download_intent && !((ae = l.modelChoices) != null && ae.has(ue.filename))) {
          R(pe);
          return;
        }
      }
    }
    function V() {
      _.value && (r("mark-optional", _.value.filename), Rt(() => L()));
    }
    function K() {
      _.value && (r("skip", _.value.filename), Rt(() => L()));
    }
    function z(ae) {
      _.value && (r("option-selected", _.value.filename, ae), Rt(() => L()));
    }
    function W() {
      _.value && r("clear-choice", _.value.filename);
    }
    function X() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function te() {
      _.value && (f.value = _.value.download_source || "", g.value = _.value.target_path || x.value, d.value = !0);
    }
    function re() {
      u.value = !1, v.value = "", w.value = [];
    }
    function he() {
      d.value = !1, f.value = "", g.value = "";
    }
    function ne() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function Q(ae) {
      _.value && (re(), Rt(() => L()));
    }
    function me() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), g.value.trim() || void 0), he(), Rt(() => L()));
    }
    function Re(ae) {
      if (!ae) return "Unknown";
      const pe = ae / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(ae / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ae, pe) => {
      var ue, Oe, ee;
      return a(), i("div", xy, [
        t("div", Sy, [
          t("div", Iy, [
            t("h3", Ey, m(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Ty, m(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", My, m(C.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), N(Qr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (se) => R(c.value - 1)),
          onNext: pe[1] || (pe[1] = (se) => R(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        _.value ? (a(), i("div", Py, [
          k(Cy, {
            filename: _.value.filename,
            "node-type": ((ue = _.value.reference) == null ? void 0 : ue.node_type) || "Unknown",
            "has-multiple-options": !!((Oe = _.value.options) != null && Oe.length),
            options: _.value.options,
            choice: (ee = e.modelChoices) == null ? void 0 : ee.get(_.value.filename),
            status: B.value,
            "status-label": E.value,
            onMarkOptional: V,
            onSkip: K,
            onDownloadUrl: te,
            onSearch: X,
            onOptionSelected: z,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", Ry, [...pe[5] || (pe[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), N(Ut, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(re, ["self"])
          }, [
            t("div", Ny, [
              t("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              t("div", Ly, [
                k(it, {
                  modelValue: v.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (se) => v.value = se),
                  placeholder: "Search by filename, category...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", Dy, [
                  (a(!0), i(j, null, we(w.value, (se) => (a(), i("div", {
                    key: se.hash,
                    class: "model-search-result-item",
                    onClick: (P) => Q()
                  }, [
                    t("div", Oy, [
                      t("code", Ay, m(se.filename), 1)
                    ]),
                    t("div", zy, [
                      t("span", Vy, m(se.category), 1),
                      t("span", Fy, m(Re(se.size)), 1)
                    ]),
                    se.relative_path ? (a(), i("div", By, m(se.relative_path), 1)) : h("", !0)
                  ], 8, Uy))), 128))
                ])) : v.value && !y.value ? (a(), i("div", Wy, ' No models found matching "' + m(v.value) + '" ', 1)) : h("", !0),
                y.value ? (a(), i("div", Gy, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (a(), N(Ut, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: st(he, ["self"])
          }, [
            t("div", jy, [
              t("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              t("div", Hy, [
                t("div", qy, [
                  pe[8] || (pe[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(it, {
                    modelValue: f.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (se) => f.value = se),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Ky, [
                  pe[9] || (pe[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(it, {
                    modelValue: g.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (se) => g.value = se),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Jy, [
                  k(Pe, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: p(() => [...pe[10] || (pe[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Pe, {
                    variant: "primary",
                    disabled: !f.value.trim() || !g.value.trim(),
                    onClick: me
                  }, {
                    default: p(() => [...pe[11] || (pe[11] = [
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
}), Yy = /* @__PURE__ */ Ce(Qy, [["__scopeId", "data-v-5c700bfa"]]), Xy = { class: "applying-step" }, Zy = {
  key: 0,
  class: "phase-content"
}, e1 = {
  key: 1,
  class: "phase-content"
}, t1 = { class: "phase-description" }, s1 = { class: "overall-progress" }, o1 = { class: "progress-bar" }, n1 = { class: "progress-label" }, a1 = { class: "install-list" }, l1 = { class: "install-icon" }, i1 = { key: 0 }, r1 = {
  key: 1,
  class: "spinner"
}, c1 = { key: 2 }, u1 = { key: 3 }, d1 = {
  key: 0,
  class: "install-error"
}, m1 = {
  key: 2,
  class: "phase-content"
}, f1 = { class: "phase-header" }, v1 = { class: "phase-title" }, p1 = { class: "completion-summary" }, g1 = {
  key: 0,
  class: "summary-item success"
}, h1 = { class: "summary-text" }, y1 = {
  key: 1,
  class: "summary-item error"
}, w1 = { class: "summary-text" }, _1 = {
  key: 2,
  class: "failed-list"
}, k1 = { class: "failed-node-id" }, b1 = { class: "failed-error" }, $1 = {
  key: 4,
  class: "summary-item success"
}, C1 = {
  key: 5,
  class: "restart-prompt"
}, x1 = {
  key: 3,
  class: "phase-content error"
}, S1 = { class: "error-message" }, I1 = /* @__PURE__ */ _e({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = A(() => {
      var v, f;
      const u = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = A(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = A(() => n.value.length > 0);
    function r(u, d) {
      var f, g;
      const v = (f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, v;
      return (v = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, d) => {
      var v, f, g, w;
      return a(), i("div", Xy, [
        e.progress.phase === "resolving" ? (a(), i("div", Zy, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", e1, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", t1, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", s1, [
            t("div", o1, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", n1, m(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", a1, [
            (a(!0), i(j, null, we(e.progress.nodesToInstall, (y, _) => (a(), i("div", {
              key: y,
              class: Ne(["install-item", r(y, _)])
            }, [
              t("span", l1, [
                r(y, _) === "pending" ? (a(), i("span", i1, "○")) : r(y, _) === "installing" ? (a(), i("span", r1, "◌")) : r(y, _) === "complete" ? (a(), i("span", c1, "✓")) : r(y, _) === "failed" ? (a(), i("span", u1, "✗")) : h("", !0)
              ]),
              t("code", null, m(y), 1),
              c(y) ? (a(), i("span", d1, m(c(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", m1, [
          t("div", f1, [
            t("span", {
              class: Ne(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            t("h3", v1, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", p1, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", g1, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", h1, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", y1, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", w1, m(n.value.length) + " package" + m(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", _1, [
              (a(!0), i(j, null, we(n.value, (y) => (a(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                t("code", k1, m(y.node_id), 1),
                t("span", b1, m(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(n.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (a(), i("div", $1, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", C1, [
              d[7] || (d[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (y) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), i("div", x1, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", S1, m(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), E1 = /* @__PURE__ */ Ce(I1, [["__scopeId", "data-v-5efaae58"]]), T1 = {
  key: 0,
  class: "loading-state"
}, M1 = {
  key: 1,
  class: "wizard-content"
}, P1 = {
  key: 0,
  class: "step-content"
}, R1 = { class: "analysis-summary" }, N1 = { class: "analysis-header" }, L1 = { class: "summary-description" }, D1 = { class: "stats-grid" }, U1 = { class: "stat-card" }, O1 = { class: "stat-items" }, A1 = {
  key: 0,
  class: "stat-item success"
}, z1 = { class: "stat-count" }, V1 = {
  key: 1,
  class: "stat-item info"
}, F1 = { class: "stat-count" }, B1 = {
  key: 2,
  class: "stat-item warning"
}, W1 = { class: "stat-count" }, G1 = {
  key: 3,
  class: "stat-item warning"
}, j1 = { class: "stat-count" }, H1 = {
  key: 4,
  class: "stat-item warning"
}, q1 = { class: "stat-count" }, K1 = {
  key: 5,
  class: "stat-item error"
}, J1 = { class: "stat-count" }, Q1 = { class: "stat-card" }, Y1 = { class: "stat-items" }, X1 = { class: "stat-item success" }, Z1 = { class: "stat-count" }, e0 = {
  key: 0,
  class: "stat-item info"
}, t0 = { class: "stat-count" }, s0 = {
  key: 1,
  class: "stat-item warning"
}, o0 = { class: "stat-count" }, n0 = {
  key: 2,
  class: "stat-item warning"
}, a0 = { class: "stat-count" }, l0 = {
  key: 3,
  class: "stat-item error"
}, i0 = { class: "stat-count" }, r0 = {
  key: 0,
  class: "status-message warning"
}, c0 = { class: "status-text" }, u0 = {
  key: 1,
  class: "status-message warning"
}, d0 = { class: "status-text" }, m0 = {
  key: 2,
  class: "status-message info"
}, f0 = { class: "status-text" }, v0 = {
  key: 3,
  class: "status-message info"
}, p0 = { class: "status-text" }, g0 = {
  key: 4,
  class: "status-message info"
}, h0 = { class: "status-text" }, y0 = {
  key: 5,
  class: "status-message warning"
}, w0 = { class: "status-text" }, _0 = {
  key: 6,
  class: "status-message success"
}, k0 = {
  key: 7,
  class: "category-mismatch-section"
}, b0 = { class: "mismatch-list" }, $0 = { class: "mismatch-path" }, C0 = { class: "mismatch-target" }, x0 = {
  key: 8,
  class: "category-mismatch-section"
}, S0 = { class: "mismatch-list" }, I0 = { class: "mismatch-path" }, E0 = { class: "status-text" }, T0 = {
  key: 1,
  class: "step-content node-step-content"
}, M0 = {
  key: 0,
  class: "community-node-section"
}, P0 = { class: "community-node-header" }, R0 = { class: "community-node-title" }, N0 = { class: "community-node-list" }, L0 = { class: "community-node-info" }, D0 = { class: "community-node-heading" }, U0 = { class: "item-name" }, O0 = { class: "community-node-package" }, A0 = { class: "community-node-meta" }, z0 = { class: "community-node-guidance" }, V0 = { key: 0 }, F0 = { class: "community-choice-status" }, B0 = { class: "community-node-actions" }, W0 = {
  key: 3,
  class: "step-content"
}, G0 = { class: "review-summary" }, j0 = { class: "review-stats" }, H0 = { class: "review-stat" }, q0 = { class: "stat-value" }, K0 = { class: "review-stat" }, J0 = { class: "stat-value" }, Q0 = { class: "review-stat" }, Y0 = { class: "stat-value" }, X0 = { class: "review-stat" }, Z0 = { class: "stat-value" }, ew = {
  key: 0,
  class: "review-section"
}, tw = { class: "section-title" }, sw = { class: "review-items" }, ow = { class: "item-name" }, nw = { class: "item-choice" }, aw = {
  key: 0,
  class: "choice-badge install"
}, lw = {
  key: 1,
  class: "choice-badge skip"
}, iw = {
  key: 1,
  class: "review-section"
}, rw = { class: "section-title" }, cw = { class: "review-items" }, uw = { class: "item-name" }, dw = { class: "item-choice" }, mw = {
  key: 0,
  class: "choice-badge install"
}, fw = {
  key: 1,
  class: "choice-badge optional"
}, vw = {
  key: 2,
  class: "choice-badge skip"
}, pw = {
  key: 2,
  class: "review-section"
}, gw = { class: "section-title" }, hw = { class: "review-items" }, yw = { class: "item-name" }, ww = { class: "item-choice" }, _w = {
  key: 0,
  class: "choice-badge install"
}, kw = {
  key: 1,
  class: "choice-badge optional"
}, bw = {
  key: 2,
  class: "choice-badge skip"
}, $w = {
  key: 1,
  class: "choice-badge pending"
}, Cw = {
  key: 3,
  class: "review-section"
}, xw = { class: "section-title" }, Sw = { class: "review-items download-details" }, Iw = { class: "download-info" }, Ew = { class: "item-name" }, Tw = { class: "download-meta" }, Mw = { class: "download-path" }, Pw = ["title"], Rw = {
  key: 4,
  class: "review-section"
}, Nw = { class: "section-title" }, Lw = { class: "review-items" }, Dw = { class: "item-name" }, Uw = { class: "item-choice" }, Ow = {
  key: 0,
  class: "choice-badge install"
}, Aw = {
  key: 1,
  class: "choice-badge download"
}, zw = {
  key: 2,
  class: "choice-badge optional"
}, Vw = {
  key: 3,
  class: "choice-badge skip"
}, Fw = {
  key: 4,
  class: "choice-badge skip"
}, Bw = {
  key: 1,
  class: "choice-badge download"
}, Ww = {
  key: 2,
  class: "choice-badge pending"
}, Gw = {
  key: 5,
  class: "no-choices"
}, jw = /* @__PURE__ */ _e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = Jr(), { loadPendingDownloads: f } = Ro(), { openFileLocation: g, queueNodeInstall: w, getNodes: y } = mt(), _ = $(null), S = $([]), C = $(!1), x = $(!1), B = $(null), E = $("analysis"), R = $([]), L = $(/* @__PURE__ */ new Map()), V = $(/* @__PURE__ */ new Map()), K = $(/* @__PURE__ */ new Set()), z = A(() => {
      const fe = [
        { id: "analysis", label: "Analysis" }
      ];
      return (ne.value || Re.value || ae.value) && fe.push({ id: "nodes", label: "Nodes" }), Q.value && fe.push({ id: "models", label: "Models" }), fe.push({ id: "review", label: "Review" }), E.value === "applying" && fe.push({ id: "applying", label: "Applying" }), fe;
    }), W = A(() => _.value ? _.value.stats.needs_user_input : !1), X = A(() => _.value ? _.value.nodes.version_gated || [] : []), te = A(() => _.value ? _.value.nodes.uninstallable || [] : []), re = A(() => te.value.filter((fe) => {
      var H;
      return !!((H = fe.package) != null && H.package_id);
    })), he = A(() => X.value.length > 0), ne = A(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), Q = A(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), me = A(() => _.value ? _.value.stats.download_intents > 0 : !1), Re = A(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), ae = A(() => re.value.length > 0), pe = A(() => _.value ? _.value.nodes.resolved.length : 0), ue = A(() => _.value ? _.value.models.resolved.filter((fe) => fe.has_category_mismatch) : []), Oe = A(() => ue.value.length > 0), ee = A(() => ne.value || Re.value || ae.value ? "nodes" : Q.value ? "models" : "review"), se = A(() => {
      if (!_.value) return [];
      const fe = _.value.nodes.resolved.filter((ge) => !ge.is_installed), H = /* @__PURE__ */ new Set();
      return fe.filter((ge) => H.has(ge.package.package_id) ? !1 : (H.add(ge.package.package_id), !0));
    }), P = A(() => {
      if (!_.value) return [];
      const fe = _.value.nodes.resolved.filter((ge) => !ge.is_installed), H = /* @__PURE__ */ new Map();
      for (const ge of fe) {
        const He = H.get(ge.package.package_id);
        He ? He.node_types_count++ : H.set(ge.package.package_id, {
          package_id: ge.package.package_id,
          title: ge.package.title,
          node_types_count: 1
        });
      }
      return Array.from(H.values());
    }), U = A(() => se.value.filter((fe) => !K.value.has(fe.package.package_id))), J = A(() => _.value ? _.value.models.resolved.filter(
      (fe) => fe.match_type === "download_intent" || fe.match_type === "property_download_intent"
    ).map((fe) => ({
      filename: fe.reference.widget_value,
      reference: fe.reference,
      is_download_intent: !0,
      resolved_model: fe.model,
      download_source: fe.download_source,
      target_path: fe.target_path
    })) : []), T = A(() => {
      if (!_.value) return [];
      const fe = _.value.nodes.unresolved.map((ge) => ({
        node_type: ge.reference.node_type,
        reason: ge.reason,
        is_unresolved: !0,
        options: void 0
      })), H = _.value.nodes.ambiguous.map((ge) => ({
        node_type: ge.reference.node_type,
        has_multiple_options: !0,
        options: ge.options.map((He) => ({
          package_id: He.package.package_id,
          title: He.package.title,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          is_installed: He.is_installed
        }))
      }));
      return [...fe, ...H];
    }), M = A(() => {
      if (!_.value) return [];
      const fe = _.value.models.unresolved.map((ge) => ({
        filename: ge.reference.widget_value,
        reference: ge.reference,
        reason: ge.reason,
        is_unresolved: !0,
        options: void 0
      })), H = _.value.models.ambiguous.map((ge) => ({
        filename: ge.reference.widget_value,
        reference: ge.reference,
        has_multiple_options: !0,
        options: ge.options.map((He) => ({
          model: He.model,
          match_confidence: He.match_confidence,
          match_type: He.match_type,
          has_download_source: He.has_download_source
        }))
      }));
      return [...fe, ...H];
    }), ce = A(() => {
      const fe = M.value, H = J.value.map((ge) => ({
        filename: ge.filename,
        reference: ge.reference,
        is_download_intent: !0,
        resolved_model: ge.resolved_model,
        download_source: ge.download_source,
        target_path: ge.target_path,
        options: void 0
      }));
      return [...fe, ...H];
    }), Ve = A(() => J.value.filter((fe) => {
      const H = V.value.get(fe.filename);
      return H ? H.action === "download" : !0;
    }).map((fe) => ({
      filename: fe.filename,
      url: fe.download_source,
      target_path: fe.target_path
    })));
    function je(fe, H = 50) {
      return fe.length <= H ? fe : fe.slice(0, H - 3) + "...";
    }
    const F = A(() => {
      let fe = U.value.length;
      for (const H of L.value.values())
        H.action === "install" && fe++;
      for (const H of V.value.values())
        H.action === "select" && fe++;
      return fe;
    }), Y = A(() => {
      let fe = 0;
      for (const H of V.value.values())
        H.action === "download" && fe++;
      for (const H of J.value)
        V.value.get(H.filename) || fe++;
      return fe;
    }), ve = A(() => {
      let fe = 0;
      for (const H of L.value.values())
        H.action === "optional" && fe++;
      for (const H of V.value.values())
        H.action === "optional" && fe++;
      return fe;
    }), Ee = A(() => {
      let fe = K.value.size;
      for (const H of L.value.values())
        H.action === "skip" && fe++;
      for (const H of V.value.values())
        H.action === "skip" && fe++;
      for (const H of T.value)
        L.value.has(H.node_type) || fe++;
      for (const H of M.value)
        V.value.has(H.filename) || fe++;
      return fe;
    }), $e = A(() => {
      const fe = {};
      if (fe.analysis = { resolved: 1, total: 1 }, ne.value || ae.value) {
        const H = T.value.length, ge = re.value.length, He = T.value.filter(
          (Pt) => L.value.has(Pt.node_type)
        ).length, ft = re.value.filter(
          (Pt) => L.value.has(Pt.reference.node_type)
        ).length, Nt = H + ge, tt = He + ft;
        fe.nodes = { resolved: tt, total: Nt };
      }
      if (Q.value) {
        const H = ce.value.length, ge = ce.value.filter(
          (He) => V.value.has(He.filename) || He.is_download_intent
        ).length;
        fe.models = { resolved: ge, total: H };
      }
      if (fe.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const H = d.totalFiles || 1, ge = d.completedFiles.length;
        fe.applying = { resolved: ge, total: H };
      }
      return fe;
    });
    function Se(fe) {
      E.value = fe;
    }
    function Le() {
      const fe = z.value.findIndex((H) => H.id === E.value);
      fe > 0 && (E.value = z.value[fe - 1].id);
    }
    function Ue() {
      const fe = z.value.findIndex((H) => H.id === E.value);
      fe < z.value.length - 1 && (E.value = z.value[fe + 1].id);
    }
    function De() {
      for (const fe of re.value) {
        const H = fe.reference.node_type;
        L.value.has(H) || le(fe, "registry");
      }
    }
    function Te(fe) {
      switch (fe) {
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
    function Fe(fe) {
      return fe.filter((H) => H.installed && H.tracked).filter((H) => H.name !== "comfygit-manager").map((H) => ({
        package_id: H.registry_id || H.name,
        source: H.source
      })).filter((H, ge, He) => He.findIndex((ft) => ft.package_id === H.package_id) === ge).sort((H, ge) => {
        const He = Te(H.source) - Te(ge.source);
        return He !== 0 ? He : H.package_id.localeCompare(ge.package_id);
      });
    }
    async function Me() {
      C.value = !0, B.value = null;
      try {
        const [fe, H] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        _.value = fe, S.value = Fe(H.nodes), De();
      } catch (fe) {
        B.value = fe instanceof Error ? fe.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ye() {
      R.value.includes("analysis") || R.value.push("analysis"), ne.value || Re.value || ae.value ? E.value = "nodes" : Q.value ? E.value = "models" : E.value = "review";
    }
    function Z(fe) {
      L.value.set(fe, { action: "optional" });
    }
    function Be(fe) {
      L.value.set(fe, { action: "skip" });
    }
    function D(fe, H) {
      var He;
      const ge = T.value.find((ft) => ft.node_type === fe);
      (He = ge == null ? void 0 : ge.options) != null && He[H] && L.value.set(fe, {
        action: "install",
        package_id: ge.options[H].package_id
      });
    }
    function O(fe, H) {
      L.value.set(fe, {
        action: "install",
        package_id: H
      });
    }
    function G(fe) {
      L.value.delete(fe);
    }
    function Ie(fe) {
      return L.value.get(fe);
    }
    function I(fe) {
      const H = Ie(fe);
      return H ? H.action === "optional" ? "Marked optional" : H.action === "skip" ? "Skipped" : H.action === "install" ? H.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function le(fe, H) {
      var ft;
      const ge = (ft = fe.package) == null ? void 0 : ft.package_id;
      if (!ge) return;
      const He = {
        action: "install",
        package_id: ge,
        version: fe.package.latest_version || null,
        install_source: H
      };
      H === "git" && fe.package.repository && (He.repository = fe.package.repository), L.value.set(fe.reference.node_type, He);
    }
    function ie(fe) {
      L.value.set(fe, { action: "optional" });
    }
    function Ae(fe) {
      L.value.set(fe, { action: "skip" });
    }
    function ze(fe) {
      K.value.has(fe) ? K.value.delete(fe) : K.value.add(fe);
    }
    function xe(fe) {
      V.value.set(fe, { action: "optional" });
    }
    function qe(fe) {
      V.value.set(fe, { action: "skip" });
    }
    function Ye(fe, H) {
      var He;
      const ge = M.value.find((ft) => ft.filename === fe);
      (He = ge == null ? void 0 : ge.options) != null && He[H] && V.value.set(fe, {
        action: "select",
        selected_model: ge.options[H].model
      });
    }
    function at(fe, H, ge) {
      V.value.set(fe, {
        action: "download",
        url: H,
        target_path: ge
      });
    }
    function rt(fe) {
      V.value.delete(fe);
    }
    async function ut(fe) {
      try {
        await g(fe);
      } catch (H) {
        B.value = H instanceof Error ? H.message : "Failed to open file location";
      }
    }
    async function It() {
      var fe;
      x.value = !0, B.value = null, v(), d.phase = "resolving", E.value = "applying";
      try {
        const H = await r(o.workflowName, L.value, V.value, K.value);
        H.models_to_download && H.models_to_download.length > 0 && u(o.workflowName, H.models_to_download);
        const ge = re.value.map((tt) => {
          const Pt = Ie(tt.reference.node_type);
          if ((Pt == null ? void 0 : Pt.action) !== "install" || Pt.install_source !== "git")
            return null;
          const xs = Pt.repository || tt.package.repository, Kt = Pt.package_id || tt.package.package_id;
          return !xs || !Kt ? null : {
            id: Kt,
            repository: xs,
            selectedVersion: Pt.version || tt.package.latest_version || "latest"
          };
        }).filter((tt) => !!tt), He = new Set(ge.map((tt) => tt.id)), ft = [
          ...H.nodes_to_install || [],
          ...U.value.map((tt) => tt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ft)].filter((tt) => !He.has(tt)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const tt of ge)
          await w({
            id: tt.id,
            version: tt.selectedVersion,
            selected_version: tt.selectedVersion,
            repository: tt.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await f();
        const Nt = d.installError || ((fe = d.nodeInstallProgress) == null ? void 0 : fe.completedNodes.some((tt) => !tt.success));
        !d.needsRestart && !Nt && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (H) {
        B.value = H instanceof Error ? H.message : "Failed to apply resolution", d.error = B.value, d.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function Wt() {
      n("refresh"), n("restart"), n("close");
    }
    async function ct() {
      var H;
      const fe = ((H = d.nodeInstallProgress) == null ? void 0 : H.completedNodes.filter((ge) => !ge.success).map((ge) => ge.node_id)) || [];
      if (fe.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: fe.length
        }, d.nodesToInstall = fe, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (ge) {
          d.error = ge instanceof Error ? ge.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return nt(Me), (fe, H) => (a(), N(Ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: B.value || void 0,
      "fixed-height": !0,
      onClose: H[1] || (H[1] = (ge) => n("close"))
    }, {
      body: p(() => [
        C.value && !_.value ? (a(), i("div", T1, [...H[2] || (H[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", M1, [
          k(Mg, {
            steps: z.value,
            "current-step": E.value,
            "completed-steps": R.value,
            "step-stats": $e.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (a(), i("div", P1, [
            t("div", R1, [
              t("div", N1, [
                H[3] || (H[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", L1, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", D1, [
                t("div", U1, [
                  H[16] || (H[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", O1, [
                    pe.value > 0 ? (a(), i("div", A1, [
                      H[4] || (H[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", z1, m(pe.value), 1),
                      H[5] || (H[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", V1, [
                      H[6] || (H[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", F1, m(_.value.stats.packages_needing_installation), 1),
                      H[7] || (H[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", B1, [
                      H[8] || (H[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", W1, m(_.value.nodes.ambiguous.length), 1),
                      H[9] || (H[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    X.value.length > 0 ? (a(), i("div", G1, [
                      H[10] || (H[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", j1, m(X.value.length), 1),
                      H[11] || (H[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    te.value.length > 0 ? (a(), i("div", H1, [
                      H[12] || (H[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", q1, m(te.value.length), 1),
                      H[13] || (H[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", K1, [
                      H[14] || (H[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", J1, m(_.value.nodes.unresolved.length), 1),
                      H[15] || (H[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                t("div", Q1, [
                  H[27] || (H[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Y1, [
                    t("div", X1, [
                      H[17] || (H[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Z1, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      H[18] || (H[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", e0, [
                      H[19] || (H[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", t0, m(_.value.stats.download_intents), 1),
                      H[20] || (H[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    Oe.value ? (a(), i("div", s0, [
                      H[21] || (H[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", o0, m(ue.value.length), 1),
                      H[22] || (H[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", n0, [
                      H[23] || (H[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", a0, m(_.value.models.ambiguous.length), 1),
                      H[24] || (H[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", l0, [
                      H[25] || (H[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", i0, m(_.value.models.unresolved.length), 1),
                      H[26] || (H[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              W.value ? (a(), i("div", r0, [
                H[28] || (H[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", c0, m(T.value.length + M.value.length) + " items need your input", 1)
              ])) : he.value ? (a(), i("div", u0, [
                H[29] || (H[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", d0, m(X.value.length) + " node type" + m(X.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : te.value.length > 0 ? (a(), i("div", m0, [
                H[30] || (H[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", f0, m(te.value.length) + " community-mapped node type" + m(te.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Re.value ? (a(), i("div", v0, [
                H[31] || (H[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", p0, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(me.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : me.value ? (a(), i("div", g0, [
                H[32] || (H[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", h0, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Oe.value ? (a(), i("div", y0, [
                H[33] || (H[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", w0, m(ue.value.length) + " model" + m(ue.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", _0, [...H[34] || (H[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Oe.value ? (a(), i("div", k0, [
                H[37] || (H[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", b0, [
                  (a(!0), i(j, null, we(ue.value, (ge) => {
                    var He, ft;
                    return a(), i("div", {
                      key: ge.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", $0, m(ge.actual_category) + "/" + m((He = ge.model) == null ? void 0 : He.filename), 1),
                      H[36] || (H[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", C0, m((ft = ge.expected_categories) == null ? void 0 : ft[0]) + "/", 1),
                      ge.file_path ? (a(), N(Pe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Nt) => ut(ge.file_path)
                      }, {
                        default: p(() => [...H[35] || (H[35] = [
                          b(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              he.value ? (a(), i("div", x0, [
                H[38] || (H[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", S0, [
                  (a(!0), i(j, null, we(X.value, (ge) => {
                    var He;
                    return a(), i("div", {
                      key: `vg-${ge.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", I0, m(ge.reference.node_type), 1),
                      t("span", E0, m(ge.guidance || ((He = _.value.node_guidance) == null ? void 0 : He[ge.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          E.value === "nodes" ? (a(), i("div", T0, [
            k(ny, {
              nodes: T.value,
              "node-choices": L.value,
              "auto-resolved-packages": P.value,
              "skipped-packages": K.value,
              "installed-node-packs": S.value,
              onMarkOptional: Z,
              onSkip: Be,
              onOptionSelected: D,
              onManualEntry: O,
              onClearChoice: G,
              onPackageSkip: ze
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            re.value.length > 0 ? (a(), i("div", M0, [
              t("div", P0, [
                t("h4", R0, "Community-Mapped Packages (" + m(re.value.length) + ")", 1),
                H[39] || (H[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", N0, [
                (a(!0), i(j, null, we(re.value, (ge) => (a(), i("div", {
                  key: `community-${ge.reference.node_type}-${ge.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", L0, [
                    t("div", D0, [
                      t("code", U0, m(ge.reference.node_type), 1),
                      t("span", O0, m(ge.package.title || ge.package.package_id), 1)
                    ]),
                    t("div", A0, m(ge.package.package_id), 1),
                    t("div", z0, [
                      H[40] || (H[40] = b(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ge.guidance ? (a(), i("span", V0, m(ge.guidance), 1)) : h("", !0)
                    ]),
                    t("div", F0, m(I(ge.reference.node_type)), 1)
                  ]),
                  t("div", B0, [
                    k(Pe, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !ge.package.package_id,
                      onClick: (He) => le(ge, "registry")
                    }, {
                      default: p(() => [...H[41] || (H[41] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    ge.package.repository ? (a(), N(Pe, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !ge.package.package_id,
                      onClick: (He) => le(ge, "git")
                    }, {
                      default: p(() => [...H[42] || (H[42] = [
                        b(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    k(Pe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => ie(ge.reference.node_type)
                    }, {
                      default: p(() => [...H[43] || (H[43] = [
                        b(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Pe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Ae(ge.reference.node_type)
                    }, {
                      default: p(() => [...H[44] || (H[44] = [
                        b(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          E.value === "models" ? (a(), N(Yy, {
            key: 2,
            models: ce.value,
            "model-choices": V.value,
            onMarkOptional: xe,
            onSkip: qe,
            onOptionSelected: Ye,
            onDownloadUrl: at,
            onClearChoice: rt
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          E.value === "review" ? (a(), i("div", W0, [
            t("div", G0, [
              H[50] || (H[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", j0, [
                t("div", H0, [
                  t("span", q0, m(F.value), 1),
                  H[45] || (H[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", K0, [
                  t("span", J0, m(Y.value), 1),
                  H[46] || (H[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", Q0, [
                  t("span", Y0, m(ve.value), 1),
                  H[47] || (H[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", X0, [
                  t("span", Z0, m(Ee.value), 1),
                  H[48] || (H[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              P.value.length > 0 ? (a(), i("div", ew, [
                t("h4", tw, "Node Packages (" + m(P.value.length) + ")", 1),
                t("div", sw, [
                  (a(!0), i(j, null, we(P.value, (ge) => (a(), i("div", {
                    key: ge.package_id,
                    class: "review-item"
                  }, [
                    t("code", ow, m(ge.package_id), 1),
                    t("div", nw, [
                      K.value.has(ge.package_id) ? (a(), i("span", lw, "Skipped")) : (a(), i("span", aw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              re.value.length > 0 ? (a(), i("div", iw, [
                t("h4", rw, "Community-Mapped Packages (" + m(re.value.length) + ")", 1),
                t("div", cw, [
                  (a(!0), i(j, null, we(re.value, (ge) => {
                    var He, ft, Nt;
                    return a(), i("div", {
                      key: `review-community-${ge.reference.node_type}-${ge.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", uw, m(ge.reference.node_type), 1),
                      t("div", dw, [
                        ((He = Ie(ge.reference.node_type)) == null ? void 0 : He.action) === "install" ? (a(), i("span", mw, m(((ft = Ie(ge.reference.node_type)) == null ? void 0 : ft.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Nt = Ie(ge.reference.node_type)) == null ? void 0 : Nt.action) === "optional" ? (a(), i("span", fw, " Optional ")) : (a(), i("span", vw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              T.value.length > 0 ? (a(), i("div", pw, [
                t("h4", gw, "Node Choices (" + m(T.value.length) + ")", 1),
                t("div", hw, [
                  (a(!0), i(j, null, we(T.value, (ge) => {
                    var He, ft, Nt, tt;
                    return a(), i("div", {
                      key: ge.node_type,
                      class: "review-item"
                    }, [
                      t("code", yw, m(ge.node_type), 1),
                      t("div", ww, [
                        L.value.has(ge.node_type) ? (a(), i(j, { key: 0 }, [
                          ((He = L.value.get(ge.node_type)) == null ? void 0 : He.action) === "install" ? (a(), i("span", _w, m((ft = L.value.get(ge.node_type)) == null ? void 0 : ft.package_id), 1)) : ((Nt = L.value.get(ge.node_type)) == null ? void 0 : Nt.action) === "optional" ? (a(), i("span", kw, " Optional ")) : ((tt = L.value.get(ge.node_type)) == null ? void 0 : tt.action) === "skip" ? (a(), i("span", bw, " Skip ")) : h("", !0)
                        ], 64)) : (a(), i("span", $w, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ve.value.length > 0 ? (a(), i("div", Cw, [
                t("h4", xw, "Models to Download (" + m(Ve.value.length) + ")", 1),
                t("div", Sw, [
                  (a(!0), i(j, null, we(Ve.value, (ge) => (a(), i("div", {
                    key: ge.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", Iw, [
                      t("code", Ew, m(ge.filename), 1),
                      t("div", Tw, [
                        t("span", Mw, "→ " + m(ge.target_path), 1),
                        ge.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ge.url
                        }, m(je(ge.url)), 9, Pw)) : h("", !0)
                      ])
                    ]),
                    H[49] || (H[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              ce.value.length > 0 ? (a(), i("div", Rw, [
                t("h4", Nw, "Models (" + m(ce.value.length) + ")", 1),
                t("div", Lw, [
                  (a(!0), i(j, null, we(ce.value, (ge) => {
                    var He, ft, Nt, tt, Pt, xs, Kt;
                    return a(), i("div", {
                      key: ge.filename,
                      class: "review-item"
                    }, [
                      t("code", Dw, m(ge.filename), 1),
                      t("div", Uw, [
                        V.value.has(ge.filename) ? (a(), i(j, { key: 0 }, [
                          ((He = V.value.get(ge.filename)) == null ? void 0 : He.action) === "select" ? (a(), i("span", Ow, m((Nt = (ft = V.value.get(ge.filename)) == null ? void 0 : ft.selected_model) == null ? void 0 : Nt.filename), 1)) : ((tt = V.value.get(ge.filename)) == null ? void 0 : tt.action) === "download" ? (a(), i("span", Aw, " Download ")) : ((Pt = V.value.get(ge.filename)) == null ? void 0 : Pt.action) === "optional" ? (a(), i("span", zw, " Optional ")) : ((xs = V.value.get(ge.filename)) == null ? void 0 : xs.action) === "skip" ? (a(), i("span", Vw, " Skip ")) : ((Kt = V.value.get(ge.filename)) == null ? void 0 : Kt.action) === "cancel_download" ? (a(), i("span", Fw, " Cancel Download ")) : h("", !0)
                        ], 64)) : ge.is_download_intent ? (a(), i("span", Bw, " Pending Download ")) : (a(), i("span", Ww, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              se.value.length === 0 && re.value.length === 0 && T.value.length === 0 && ce.value.length === 0 ? (a(), i("div", Gw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          E.value === "applying" ? (a(), N(E1, {
            key: 4,
            progress: Qe(d),
            onRestart: Wt,
            onRetryFailed: ct
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: p(() => [
        E.value !== "analysis" && E.value !== "applying" ? (a(), N(Pe, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: Le
        }, {
          default: p(() => [...H[51] || (H[51] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        H[54] || (H[54] = t("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || Qe(d).phase === "complete" || Qe(d).phase === "error" ? (a(), N(Pe, {
          key: 1,
          variant: "secondary",
          onClick: H[0] || (H[0] = (ge) => n("close"))
        }, {
          default: p(() => [
            b(m(Qe(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        E.value === "analysis" ? (a(), N(Pe, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ye
        }, {
          default: p(() => [
            b(m(ee.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        E.value === "nodes" ? (a(), N(Pe, {
          key: 3,
          variant: "primary",
          onClick: Ue
        }, {
          default: p(() => [
            b(m(Q.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        E.value === "models" ? (a(), N(Pe, {
          key: 4,
          variant: "primary",
          onClick: Ue
        }, {
          default: p(() => [...H[52] || (H[52] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        E.value === "review" ? (a(), N(Pe, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: It
        }, {
          default: p(() => [...H[53] || (H[53] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Hw = /* @__PURE__ */ Ce(jw, [["__scopeId", "data-v-49848358"]]), qw = { class: "search-input-wrapper" }, Kw = ["value", "placeholder"], Jw = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = $(null);
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
    return nt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (a(), i("div", qw, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: es(u, ["escape"])
      }, null, 40, Kw),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), Qw = /* @__PURE__ */ Ce(Jw, [["__scopeId", "data-v-266f857a"]]), Yw = { class: "search-bar" }, Xw = /* @__PURE__ */ _e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), i("div", Yw, [
      k(Qw, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), co = /* @__PURE__ */ Ce(Xw, [["__scopeId", "data-v-3d51bbfd"]]), Zw = { class: "section-group" }, e_ = {
  key: 0,
  class: "section-content"
}, t_ = /* @__PURE__ */ _e({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = $(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), i("section", Zw, [
      k(os, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: p(() => [
          b(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), i("div", e_, [
        et(c.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ Ce(t_, [["__scopeId", "data-v-c48e33ed"]]), s_ = { class: "item-header" }, o_ = {
  key: 0,
  class: "item-icon"
}, n_ = { class: "item-info" }, a_ = {
  key: 0,
  class: "item-title"
}, l_ = {
  key: 1,
  class: "item-subtitle"
}, i_ = {
  key: 0,
  class: "item-details"
}, r_ = {
  key: 1,
  class: "item-actions"
}, c_ = /* @__PURE__ */ _e({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = A(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Ne(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", s_, [
        l.$slots.icon ? (a(), i("span", o_, [
          et(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        t("div", n_, [
          l.$slots.title ? (a(), i("div", a_, [
            et(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (a(), i("div", l_, [
            et(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", i_, [
        et(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (a(), i("div", r_, [
        et(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Ce(c_, [["__scopeId", "data-v-cc435e0e"]]), u_ = { class: "loading-state" }, d_ = { class: "loading-message" }, m_ = /* @__PURE__ */ _e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), i("div", u_, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", d_, m(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ Ce(m_, [["__scopeId", "data-v-ad8436c9"]]), f_ = { class: "error-state" }, v_ = { class: "error-message" }, p_ = /* @__PURE__ */ _e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), i("div", f_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", v_, m(e.message), 1),
      e.retry ? (a(), N(be, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("retry"))
      }, {
        default: p(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ Ce(p_, [["__scopeId", "data-v-5397be48"]]), g_ = /* @__PURE__ */ _e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = mt(), r = $([]), c = $(!1), u = $(null), d = $(""), v = $(!0), f = $(!1), g = $(!1), w = $(!1), y = $(!1), _ = $(null), S = A(
      () => r.value.filter((ee) => ee.status === "broken")
    ), C = A(
      () => r.value.filter((ee) => ee.status === "new")
    ), x = A(
      () => r.value.filter((ee) => ee.status === "modified")
    ), B = A(
      () => r.value.filter((ee) => ee.status === "synced")
    ), E = A(() => {
      if (!d.value.trim()) return r.value;
      const ee = d.value.toLowerCase();
      return r.value.filter((se) => se.name.toLowerCase().includes(ee));
    }), R = A(
      () => S.value.filter(
        (ee) => !d.value.trim() || ee.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), L = A(
      () => C.value.filter(
        (ee) => !d.value.trim() || ee.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = A(
      () => x.value.filter(
        (ee) => !d.value.trim() || ee.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = A(
      () => B.value.filter(
        (ee) => !d.value.trim() || ee.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = A(
      () => f.value ? K.value : K.value.slice(0, 5)
    );
    async function W(ee = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(ee);
      } catch (se) {
        u.value = se instanceof Error ? se.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: W });
    function X(ee) {
      _.value = ee, g.value = !0;
    }
    function te(ee) {
      _.value = ee, w.value = !0;
    }
    function re(ee) {
      _.value = ee, y.value = !0;
    }
    function he(ee) {
      var U;
      const P = (U = ee.detail) == null ? void 0 : U.workflowName;
      P && re(P);
    }
    function ne() {
      n("refresh");
    }
    async function Q() {
      w.value = !1, await W(!0);
    }
    async function me() {
      await W(!0), n("refresh");
    }
    async function Re() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae(ee) {
      return ee.replace(/uninstallable node mappings?/gi, (se) => se.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function pe(ee) {
      if (ee.issue_summary && ee.issue_summary.trim().length > 0)
        return ae(ee.issue_summary);
      const se = [];
      return ee.version_gated_count && ee.version_gated_count > 0 && se.push(`${ee.version_gated_count} node${ee.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), ee.uninstallable_count && ee.uninstallable_count > 0 && se.push(`${ee.uninstallable_count} node${ee.uninstallable_count > 1 ? "s" : ""} need community packages`), ee.missing_nodes > 0 && se.push(`${ee.missing_nodes} missing node${ee.missing_nodes > 1 ? "s" : ""}`), ee.missing_models > 0 && se.push(`${ee.missing_models} missing model${ee.missing_models > 1 ? "s" : ""}`), ee.models_with_category_mismatch && ee.models_with_category_mismatch > 0 && se.push(`${ee.models_with_category_mismatch} model${ee.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), ee.pending_downloads && ee.pending_downloads > 0 && se.push(`${ee.pending_downloads} pending download${ee.pending_downloads > 1 ? "s" : ""}`), se.length > 0 ? se.join(", ") : "Has issues";
    }
    function ue(ee) {
      const se = ee.sync_state === "new" ? "New" : ee.sync_state === "modified" ? "Modified" : ee.sync_state === "synced" ? "Synced" : ee.sync_state, P = Oe(ee);
      return ee.has_path_sync_issues && ee.models_needing_path_sync && ee.models_needing_path_sync > 0 ? `${ee.models_needing_path_sync} model path${ee.models_needing_path_sync > 1 ? "s" : ""} need${ee.models_needing_path_sync === 1 ? "s" : ""} sync · ${P}` : `${se || "Unknown"} · ${P}`;
    }
    function Oe(ee) {
      const se = ee.contract_summary;
      return !se || !se.has_contract ? "No contract" : se.status === "incomplete" ? `${se.input_count} in / ${se.output_count} out · incomplete` : `${se.input_count} in / ${se.output_count} out`;
    }
    return nt(() => {
      W(), window.addEventListener("comfygit:open-workflow-contract", he);
    }), na(() => {
      window.removeEventListener("comfygit:open-workflow-contract", he);
    }), (ee, se) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, { title: "WORKFLOWS" })
        ]),
        search: p(() => [
          k(co, {
            modelValue: d.value,
            "onUpdate:modelValue": se[0] || (se[0] = (P) => d.value = P),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          c.value ? (a(), N($s, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), N(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            R.value.length ? (a(), N(kt, {
              key: 0,
              title: "BROKEN",
              count: R.value.length
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(R.value, (P) => (a(), N(At, {
                  key: P.name,
                  status: "broken"
                }, {
                  icon: p(() => [...se[8] || (se[8] = [
                    b("⚠", -1)
                  ])]),
                  title: p(() => [
                    b(m(P.name), 1)
                  ]),
                  subtitle: p(() => [
                    b(m(pe(P)), 1)
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => te(P.name)
                    }, {
                      default: p(() => [...se[9] || (se[9] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => re(P.name)
                    }, {
                      default: p(() => [...se[10] || (se[10] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => X(P.name)
                    }, {
                      default: p(() => [...se[11] || (se[11] = [
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
            L.value.length ? (a(), N(kt, {
              key: 1,
              title: "NEW",
              count: L.value.length
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(L.value, (P) => (a(), N(At, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: p(() => [
                    b(m(P.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: p(() => [
                    b(m(P.name), 1)
                  ]),
                  subtitle: p(() => [
                    b(m(ue(P)), 1)
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => re(P.name)
                    }, {
                      default: p(() => [...se[12] || (se[12] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => X(P.name)
                    }, {
                      default: p(() => [...se[13] || (se[13] = [
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
            V.value.length ? (a(), N(kt, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(V.value, (P) => (a(), N(At, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: p(() => [...se[14] || (se[14] = [
                    b("⚡", -1)
                  ])]),
                  title: p(() => [
                    b(m(P.name), 1)
                  ]),
                  subtitle: p(() => [
                    b(m(ue(P)), 1)
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => re(P.name)
                    }, {
                      default: p(() => [...se[15] || (se[15] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => X(P.name)
                    }, {
                      default: p(() => [...se[16] || (se[16] = [
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
            K.value.length ? (a(), N(kt, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: se[2] || (se[2] = (P) => v.value = P)
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(z.value, (P) => (a(), N(At, {
                  key: P.name,
                  status: P.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: p(() => [
                    b(m(P.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: p(() => [
                    b(m(P.name), 1)
                  ]),
                  subtitle: p(() => [
                    b(m(ue(P)), 1)
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => re(P.name)
                    }, {
                      default: p(() => [...se[17] || (se[17] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => X(P.name)
                    }, {
                      default: p(() => [...se[18] || (se[18] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && K.value.length > 5 ? (a(), N(be, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: se[1] || (se[1] = (P) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: p(() => [
                    b(" View all " + m(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            E.value.length ? h("", !0) : (a(), N(is, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && _.value ? (a(), N(Rp, {
        key: 0,
        "workflow-name": _.value,
        onClose: se[3] || (se[3] = (P) => g.value = !1),
        onResolve: se[4] || (se[4] = (P) => te(_.value)),
        onRefresh: se[5] || (se[5] = (P) => n("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && _.value ? (a(), N(Hw, {
        key: 1,
        "workflow-name": _.value,
        onClose: Q,
        onInstall: ne,
        onRefresh: se[6] || (se[6] = (P) => n("refresh")),
        onRestart: Re
      }, null, 8, ["workflow-name"])) : h("", !0),
      y.value && _.value ? (a(), N(yg, {
        key: 2,
        "workflow-name": _.value,
        onClose: se[7] || (se[7] = (P) => y.value = !1),
        onRefresh: me
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), h_ = /* @__PURE__ */ Ce(g_, [["__scopeId", "data-v-894ef6ed"]]), y_ = /* @__PURE__ */ _e({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), i("div", {
      class: Ne(["summary-bar", e.variant])
    }, [
      et(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), gn = /* @__PURE__ */ Ce(y_, [["__scopeId", "data-v-ccb7816e"]]), w_ = {
  key: 0,
  class: "model-details"
}, __ = { class: "detail-section" }, k_ = { class: "detail-row" }, b_ = { class: "detail-value mono" }, $_ = { class: "detail-row" }, C_ = { class: "detail-value mono" }, x_ = { class: "detail-row" }, S_ = { class: "detail-value mono" }, I_ = { class: "detail-row" }, E_ = { class: "detail-value" }, T_ = { class: "detail-row" }, M_ = { class: "detail-value" }, P_ = { class: "detail-row" }, R_ = { class: "detail-value" }, N_ = { class: "detail-section" }, L_ = { class: "section-header" }, D_ = {
  key: 0,
  class: "locations-list"
}, U_ = { class: "location-path mono" }, O_ = {
  key: 0,
  class: "location-modified"
}, A_ = ["onClick"], z_ = {
  key: 1,
  class: "empty-state"
}, V_ = { class: "detail-section" }, F_ = { class: "section-header" }, B_ = {
  key: 0,
  class: "sources-list"
}, W_ = { class: "source-type" }, G_ = ["href"], j_ = ["disabled", "onClick"], H_ = {
  key: 1,
  class: "empty-state"
}, q_ = { class: "add-source-form" }, K_ = ["disabled"], J_ = {
  key: 2,
  class: "source-error"
}, Q_ = {
  key: 3,
  class: "source-success"
}, Y_ = /* @__PURE__ */ _e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: r, openFileLocation: c } = mt(), u = $(null), d = $(!0), v = $(null), f = $(""), g = $(!1), w = $(null), y = $(null), _ = $(null), S = $(null);
    let C = null;
    function x(z, W = "success", X = 2e3) {
      C && clearTimeout(C), S.value = { message: z, type: W }, C = setTimeout(() => {
        S.value = null;
      }, X);
    }
    function B(z) {
      if (!z) return "Unknown";
      const W = 1024 * 1024 * 1024, X = 1024 * 1024;
      return z >= W ? `${(z / W).toFixed(1)} GB` : z >= X ? `${(z / X).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function E(z) {
      navigator.clipboard.writeText(z), x("Copied to clipboard!");
    }
    async function R(z) {
      try {
        await c(z), x("Opening file location...");
      } catch {
        x("Failed to open location", "error");
      }
    }
    async function L() {
      if (!(!f.value.trim() || !u.value)) {
        g.value = !0, y.value = null, _.value = null;
        try {
          await l(u.value.hash, f.value.trim()), _.value = "Source added successfully!", f.value = "", await K();
        } catch (z) {
          y.value = z instanceof Error ? z.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function V(z) {
      if (u.value) {
        w.value = z, y.value = null, _.value = null;
        try {
          await r(u.value.hash, z), x("Source removed"), await K();
        } catch (W) {
          y.value = W instanceof Error ? W.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function K() {
      d.value = !0, v.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return nt(K), (z, W) => {
      var X;
      return a(), i(j, null, [
        k(Ct, {
          title: `Model Details: ${((X = u.value) == null ? void 0 : X.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: W[5] || (W[5] = (te) => z.$emit("close"))
        }, {
          body: p(() => {
            var te, re, he, ne;
            return [
              u.value ? (a(), i("div", w_, [
                t("section", __, [
                  t("div", k_, [
                    W[6] || (W[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", b_, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[0] || (W[0] = (Q) => E(u.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", $_, [
                    W[7] || (W[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", C_, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[1] || (W[1] = (Q) => E(u.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", x_, [
                    W[8] || (W[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", S_, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: W[2] || (W[2] = (Q) => E(u.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", I_, [
                    W[9] || (W[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", E_, m(B(u.value.size)), 1)
                  ]),
                  t("div", T_, [
                    W[10] || (W[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", M_, m(u.value.category), 1)
                  ]),
                  t("div", P_, [
                    W[11] || (W[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", R_, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", N_, [
                  t("h4", L_, "Locations (" + m(((te = u.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (re = u.value.locations) != null && re.length ? (a(), i("div", D_, [
                    (a(!0), i(j, null, we(u.value.locations, (Q, me) => (a(), i("div", {
                      key: me,
                      class: "location-item"
                    }, [
                      t("span", U_, m(Q.path), 1),
                      Q.modified ? (a(), i("span", O_, "Modified: " + m(Q.modified), 1)) : h("", !0),
                      Q.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Re) => R(Q.path)
                      }, " Open File Location ", 8, A_)) : h("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", z_, "No locations found"))
                ]),
                t("section", V_, [
                  t("h4", F_, "Download Sources (" + m(((he = u.value.sources) == null ? void 0 : he.length) || 0) + ")", 1),
                  (ne = u.value.sources) != null && ne.length ? (a(), i("div", B_, [
                    (a(!0), i(j, null, we(u.value.sources, (Q, me) => (a(), i("div", {
                      key: me,
                      class: "source-item"
                    }, [
                      t("span", W_, m(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(Q.url), 9, G_),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Q.url,
                        onClick: (Re) => V(Q.url)
                      }, m(w.value === Q.url ? "..." : "×"), 9, j_)
                    ]))), 128))
                  ])) : (a(), i("div", H_, " No download sources configured ")),
                  t("div", q_, [
                    St(t("input", {
                      "onUpdate:modelValue": W[3] || (W[3] = (Q) => f.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [$o, f.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !f.value.trim() || g.value,
                      onClick: L
                    }, m(g.value ? "Adding..." : "Add Source"), 9, K_)
                  ]),
                  y.value ? (a(), i("p", J_, m(y.value), 1)) : h("", !0),
                  _.value ? (a(), i("p", Q_, m(_.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: p(() => [
            t("button", {
              class: "btn-secondary",
              onClick: W[4] || (W[4] = (te) => z.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), N(Ut, { to: "body" }, [
          S.value ? (a(), i("div", {
            key: 0,
            class: Ne(["toast", S.value.type])
          }, m(S.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), Sl = /* @__PURE__ */ Ce(Y_, [["__scopeId", "data-v-f15cbb56"]]), X_ = ["disabled"], Z_ = { class: "dropdown-value" }, ek = ["onClick"], tk = {
  key: 0,
  class: "dropdown-error"
}, sk = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = $(!1), r = $(null), c = $(null), u = $({});
    function d(x) {
      return typeof x == "string" ? x : x.value;
    }
    function v(x) {
      return typeof x == "string" ? x : x.label;
    }
    const f = A(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const x = o.options.find((B) => d(B) === o.modelValue);
      return x ? v(x) : String(o.modelValue);
    });
    function g() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function y(x) {
      n("update:modelValue", d(x)), w();
    }
    function _() {
      if (!r.value) return;
      const x = r.value.getBoundingClientRect(), B = window.innerHeight, E = B - x.bottom, R = x.top, L = Math.min(300, o.options.length * 36 + 8), V = E < L && R > E;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...V ? { bottom: `${B - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    bt(l, async (x) => {
      x && (await Rt(), _());
    });
    function S() {
      l.value && _();
    }
    function C(x) {
      x.key === "Escape" && l.value && w();
    }
    return nt(() => {
      window.addEventListener("scroll", S, !0), window.addEventListener("keydown", C);
    }), Mo(() => {
      window.removeEventListener("scroll", S, !0), window.removeEventListener("keydown", C);
    }), (x, B) => (a(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Ne(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", Z_, m(f.value), 1),
        B[0] || (B[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, X_),
      (a(), N(Ut, { to: "body" }, [
        l.value ? (a(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : h("", !0),
        l.value ? (a(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Ft(u.value)
        }, [
          (a(!0), i(j, null, we(e.options, (E) => (a(), i("div", {
            key: d(E),
            class: Ne(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (R) => y(E)
          }, m(v(E)), 11, ek))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (a(), i("span", tk, m(e.error), 1)) : h("", !0)
    ], 512));
  }
}), ok = /* @__PURE__ */ Ce(sk, [["__scopeId", "data-v-857e085b"]]);
function nk(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function ak(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!nk(o.hostname)) return { kind: "unknown" };
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
function lk(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function ik(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${lk(o)}`;
}
const rk = { class: "hf-file-browser" }, ck = { class: "browser-header" }, uk = { class: "repo-info" }, dk = { class: "repo-id" }, mk = {
  key: 0,
  class: "revision-pill"
}, fk = {
  key: 0,
  class: "loading-state"
}, vk = {
  key: 1,
  class: "error-state"
}, pk = { class: "toolbar" }, gk = { class: "toolbar-actions" }, hk = { class: "file-list-container" }, yk = {
  key: 0,
  class: "file-list-header"
}, wk = ["checked", "indeterminate"], _k = { class: "sort-indicator" }, kk = { class: "sort-indicator" }, bk = {
  key: 1,
  class: "empty-state"
}, $k = {
  key: 2,
  class: "file-list"
}, Ck = ["onClick"], xk = ["checked", "onChange"], Sk = { class: "file-path" }, Ik = { class: "file-size" }, Ek = { class: "destination-section" }, Tk = { class: "destination-row" }, Mk = {
  key: 0,
  class: "path-separator"
}, Pk = { class: "action-bar" }, Rk = { class: "summary-info" }, Nk = { class: "summary-count" }, Lk = { class: "summary-size" }, Dk = /* @__PURE__ */ _e({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = mt(), c = $([]), u = $(/* @__PURE__ */ new Set()), d = $(!1), v = $(null), f = $(""), g = $(!1), w = $("name"), y = $(!0), _ = $(""), S = $(""), C = $(""), x = $([]), B = $(!1);
    let E = !1;
    const R = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, L = A(() => {
      let U = c.value;
      if (o.initialPath) {
        const J = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        U = U.filter((T) => T.path.startsWith(J) || T.path === o.initialPath);
      }
      if (g.value && (U = U.filter((J) => J.is_model_file)), f.value.trim()) {
        const J = f.value.toLowerCase();
        U = U.filter((T) => T.path.toLowerCase().includes(J));
      }
      return U;
    }), V = A(() => {
      const U = [...L.value];
      return U.sort((J, T) => {
        let M;
        return w.value === "name" ? M = J.path.localeCompare(T.path) : M = J.size - T.size, y.value ? M : -M;
      }), U;
    }), K = A(() => L.value.length === 0 ? !1 : L.value.every((U) => u.value.has(U.path))), z = A(() => L.value.some((U) => u.value.has(U.path))), W = A(() => {
      const U = x.value.map((J) => ({
        label: J,
        value: J
      }));
      return U.push({ label: "Custom path...", value: "__custom__" }), U;
    }), X = A(() => _.value === "__custom__" ? C.value.trim().length > 0 : _.value.length > 0), te = A(() => {
      let U = 0;
      for (const J of u.value) {
        const T = c.value.find((M) => M.path === J);
        T && (U += T.size);
      }
      return U;
    });
    function re(U) {
      if (U === 0) return "0 B";
      const J = 1024 * 1024 * 1024, T = 1024 * 1024, M = 1024;
      return U >= J ? `${(U / J).toFixed(2)} GB` : U >= T ? `${(U / T).toFixed(1)} MB` : U >= M ? `${(U / M).toFixed(0)} KB` : `${U} B`;
    }
    function he(U) {
      const J = U.match(R);
      return J ? `${J[1]}${J[4]}` : null;
    }
    function ne(U) {
      const J = new Set(u.value), T = J.has(U.path), M = U.shard_group || he(U.path);
      if (M) {
        const ce = c.value.filter((Ve) => (Ve.shard_group || he(Ve.path)) === M);
        T ? ce.forEach((Ve) => J.delete(Ve.path)) : ce.forEach((Ve) => J.add(Ve.path));
      } else
        T ? J.delete(U.path) : J.add(U.path);
      u.value = J;
    }
    function Q() {
      const U = new Set(u.value);
      for (const J of L.value)
        J.is_model_file && U.add(J.path);
      u.value = U;
    }
    function me() {
      u.value = /* @__PURE__ */ new Set();
    }
    function Re() {
      if (K.value) {
        const U = new Set(u.value);
        for (const J of L.value)
          U.delete(J.path);
        u.value = U;
      } else {
        const U = new Set(u.value);
        for (const J of L.value)
          U.add(J.path);
        u.value = U;
      }
    }
    function ae(U) {
      w.value === U ? y.value = !y.value : (w.value = U, y.value = !0);
    }
    function pe(U) {
      const J = U.split("/");
      return J.length >= 2 ? J[J.length - 2] : null;
    }
    function ue() {
      if (B.value || u.value.size === 0) return;
      const U = /* @__PURE__ */ new Set();
      for (const M of u.value) {
        const ce = pe(M);
        ce && U.add(ce.toLowerCase());
      }
      if (U.size !== 1) return;
      const J = [...U][0], T = x.value.find(
        (M) => M.toLowerCase() === J
      );
      T && T !== _.value && (E = !0, _.value = T, Rt(() => {
        E = !1;
      }));
    }
    function Oe() {
      return _.value === "__custom__" ? C.value.trim() : S.value.trim() ? `${_.value}/${S.value.trim()}` : _.value;
    }
    function ee() {
      if (u.value.size === 0 || !X.value) return;
      const U = Oe(), J = [];
      for (const T of u.value) {
        const M = c.value.find((ce) => ce.path === T);
        M && J.push({
          url: ik(o.repoId, o.revision, M.path),
          destination: U,
          filename: M.path.split("/").pop() || M.path
        });
      }
      n("queue", J);
    }
    async function se() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const U = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, J = await l(U);
          if (c.value = J.files, o.preselectedFile) {
            const T = c.value.find((M) => M.path === o.preselectedFile);
            T && ne(T);
          }
        } catch (U) {
          v.value = U instanceof Error ? U.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function P() {
      try {
        const U = await r();
        x.value = U.directories, U.directories.length > 0 && !_.value && (_.value = U.directories[0]);
      } catch {
        x.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return bt(() => [o.repoId, o.revision], () => {
      o.repoId && se();
    }, { immediate: !1 }), bt(() => o.repoId, () => {
      B.value = !1;
    }), bt(u, () => {
      ue();
    }, { deep: !0 }), bt(x, () => {
      x.value.length > 0 && u.value.size > 0 && ue();
    }), bt(_, (U, J) => {
      E || J === "" || (B.value = !0);
    }), nt(() => {
      se(), P();
    }), (U, J) => (a(), i("div", rk, [
      t("div", ck, [
        t("button", {
          class: "back-btn",
          onClick: J[0] || (J[0] = (T) => U.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", uk, [
          t("span", dk, m(e.repoId), 1),
          e.revision ? (a(), i("span", mk, m(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (a(), i("div", fk, " Loading repository files... ")) : v.value ? (a(), i("div", vk, m(v.value), 1)) : (a(), i(j, { key: 2 }, [
        t("div", pk, [
          k(it, {
            modelValue: f.value,
            "onUpdate:modelValue": J[1] || (J[1] = (T) => f.value = T),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", gk, [
            t("button", {
              class: Ne(["toggle-btn", { active: g.value }]),
              onClick: J[2] || (J[2] = (T) => g.value = !g.value)
            }, m(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: Q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: me
            }, "Clear")
          ])
        ]),
        t("div", hk, [
          L.value.length > 0 ? (a(), i("div", yk, [
            t("input", {
              type: "checkbox",
              checked: K.value,
              indeterminate: z.value && !K.value,
              class: "file-checkbox",
              onChange: Re
            }, null, 40, wk),
            t("span", {
              class: "header-name",
              onClick: J[3] || (J[3] = (T) => ae("name"))
            }, [
              J[9] || (J[9] = b(" Name ", -1)),
              t("span", _k, m(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: J[4] || (J[4] = (T) => ae("size"))
            }, [
              J[10] || (J[10] = b(" Size ", -1)),
              t("span", kk, m(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          L.value.length === 0 ? (a(), i("div", bk, m(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", $k, [
            (a(!0), i(j, null, we(V.value, (T) => (a(), i("div", {
              key: T.path,
              class: Ne(["file-item", { selected: u.value.has(T.path) }]),
              onClick: (M) => ne(T)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(T.path),
                class: "file-checkbox",
                onClick: J[5] || (J[5] = st(() => {
                }, ["stop"])),
                onChange: (M) => ne(T)
              }, null, 40, xk),
              t("span", Sk, m(T.path), 1),
              t("span", Ik, m(re(T.size)), 1)
            ], 10, Ck))), 128))
          ]))
        ]),
        t("div", Ek, [
          J[11] || (J[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Tk, [
            k(ok, {
              modelValue: _.value,
              "onUpdate:modelValue": J[6] || (J[6] = (T) => _.value = T),
              options: W.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), i("span", Mk, "/")) : h("", !0),
            _.value !== "__custom__" ? (a(), N(it, {
              key: 1,
              modelValue: S.value,
              "onUpdate:modelValue": J[7] || (J[7] = (T) => S.value = T),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          _.value === "__custom__" ? (a(), N(it, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": J[8] || (J[8] = (T) => C.value = T),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        t("div", Pk, [
          t("div", Rk, [
            t("span", Nk, m(u.value.size) + " file(s) selected", 1),
            t("span", Lk, m(re(te.value)), 1)
          ]),
          k(Pe, {
            variant: "primary",
            disabled: u.value.size === 0 || !X.value,
            onClick: ee
          }, {
            default: p(() => [...J[12] || (J[12] = [
              b(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Uk = /* @__PURE__ */ Ce(Dk, [["__scopeId", "data-v-183acebc"]]), Ok = { class: "token-config-modal" }, Ak = { class: "provider-info" }, zk = { class: "provider-icon" }, Vk = { class: "provider-name" }, Fk = {
  key: 0,
  class: "current-token"
}, Bk = { class: "mask" }, Wk = { class: "token-input-section" }, Gk = { class: "input-label" }, jk = { class: "help-text" }, Hk = ["href"], qk = { class: "modal-actions" }, Kk = /* @__PURE__ */ _e({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, n = s, { updateConfig: l } = mt(), r = $(""), c = $(!1), u = $(!1), d = A(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = A(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), f = A(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), g = A(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = A(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function y() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const S = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(S), r.value = "", n("saved"), n("close");
        } catch (S) {
          console.error("Failed to save token:", S);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const S = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(S), n("cleared"), n("close");
      } catch (S) {
        console.error("Failed to clear token:", S);
      } finally {
        u.value = !1;
      }
    }
    return (S, C) => (a(), N(Ct, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (x) => S.$emit("close"))
    }, {
      body: p(() => [
        t("div", Ok, [
          t("div", Ak, [
            t("span", zk, m(v.value), 1),
            t("span", Vk, m(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Fk, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", Bk, m(e.currentTokenMask), 1),
            k(Pe, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: p(() => [...C[3] || (C[3] = [
                b(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          t("div", Wk, [
            t("label", Gk, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(it, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (x) => r.value = x),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", jk, [
              t("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, Hk)
            ])
          ])
        ])
      ]),
      footer: p(() => [
        t("div", qk, [
          k(Pe, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (x) => S.$emit("close"))
          }, {
            default: p(() => [...C[5] || (C[5] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Pe, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: y
          }, {
            default: p(() => [...C[6] || (C[6] = [
              b(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), Jk = /* @__PURE__ */ Ce(Kk, [["__scopeId", "data-v-0687d0ce"]]), Qk = { class: "huggingface-tab" }, Yk = {
  key: 0,
  class: "search-section"
}, Xk = { class: "search-header" }, Zk = { class: "search-bar" }, eb = {
  key: 1,
  class: "search-results"
}, tb = {
  key: 0,
  class: "loading-state"
}, sb = {
  key: 1,
  class: "error-state"
}, ob = {
  key: 2,
  class: "results-list"
}, nb = ["onClick"], ab = { class: "repo-header" }, lb = { class: "repo-id" }, ib = { class: "repo-stats" }, rb = {
  class: "stat",
  title: "Downloads"
}, cb = {
  class: "stat",
  title: "Likes"
}, ub = {
  key: 0,
  class: "repo-desc"
}, db = {
  key: 1,
  class: "repo-tags"
}, mb = {
  key: 3,
  class: "empty-state"
}, fb = {
  key: 4,
  class: "hint-state"
}, vb = /* @__PURE__ */ _e({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = mt(), n = $("search"), l = $(""), r = $([]), c = $(!1), u = $(null), d = $(!1), v = $(null), f = $("main"), g = $(), w = $(), y = $(!1), _ = $(null), S = A(() => {
      if (!u.value) return !1;
      const K = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || K.includes("authentication") || K.includes("unauthorized");
    });
    function C(K) {
      return K >= 1e6 ? `${(K / 1e6).toFixed(1)}M` : K >= 1e3 ? `${(K / 1e3).toFixed(1)}K` : String(K);
    }
    async function x() {
      const K = l.value.trim();
      if (!K) return;
      u.value = null;
      const z = ak(K);
      if (z.kind === "file" && z.repoId && z.path) {
        v.value = z.repoId, f.value = z.revision || "main";
        const W = z.path.split("/");
        W.length > 1 ? g.value = W.slice(0, -1).join("/") : g.value = void 0, w.value = z.path, n.value = "browse";
        return;
      }
      if (z.kind === "repo" && z.repoId) {
        v.value = z.repoId, f.value = z.revision || "main", g.value = z.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(K) && !K.includes("://")) {
        v.value = K, f.value = "main", g.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const W = await s(K);
        r.value = W.results, d.value = !0;
      } catch (W) {
        u.value = W instanceof Error ? W.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function B(K) {
      v.value = K, f.value = "main", g.value = void 0, w.value = void 0, n.value = "browse";
    }
    function E() {
      n.value = "search", v.value = null, g.value = void 0, w.value = void 0;
    }
    async function R() {
      try {
        const K = await o();
        _.value = K.huggingface_token || null;
      } catch (K) {
        console.error("Failed to load config:", K);
      }
    }
    function L() {
      R(), S.value && l.value && x();
    }
    function V() {
      _.value = null;
    }
    return nt(R), (K, z) => (a(), i("div", Qk, [
      n.value === "search" ? (a(), i("div", Yk, [
        t("div", Xk, [
          t("div", Zk, [
            k(it, {
              modelValue: l.value,
              "onUpdate:modelValue": z[0] || (z[0] = (W) => l.value = W),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: es(x, ["enter"])
            }, null, 8, ["modelValue"]),
            k(Pe, {
              variant: "primary",
              onClick: x,
              loading: c.value
            }, {
              default: p(() => [...z[5] || (z[5] = [
                b(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(Pe, {
            variant: "secondary",
            size: "sm",
            onClick: z[1] || (z[1] = (W) => y.value = !0)
          }, {
            default: p(() => [
              b(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      n.value === "search" ? (a(), i("div", eb, [
        c.value ? (a(), i("div", tb, " Searching HuggingFace... ")) : u.value ? (a(), i("div", sb, [
          t("p", null, m(u.value), 1),
          S.value ? (a(), N(Pe, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: z[2] || (z[2] = (W) => y.value = !0)
          }, {
            default: p(() => [...z[6] || (z[6] = [
              b(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", ob, [
          (a(!0), i(j, null, we(r.value, (W) => (a(), i("div", {
            key: W.repo_id,
            class: "repo-card",
            onClick: (X) => B(W.repo_id)
          }, [
            t("div", ab, [
              t("span", lb, m(W.repo_id), 1),
              t("div", ib, [
                t("span", rb, [
                  z[7] || (z[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + m(C(W.downloads)), 1)
                ]),
                t("span", cb, [
                  z[8] || (z[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + m(C(W.likes)), 1)
                ])
              ])
            ]),
            W.description ? (a(), i("p", ub, m(W.description), 1)) : h("", !0),
            W.tags.length > 0 ? (a(), i("div", db, [
              (a(!0), i(j, null, we(W.tags.slice(0, 5), (X) => (a(), i("span", {
                key: X,
                class: "tag"
              }, m(X), 1))), 128))
            ])) : h("", !0)
          ], 8, nb))), 128))
        ])) : d.value ? (a(), i("div", mb, " No repositories found ")) : (a(), i("div", fb, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), N(Uk, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": g.value,
        "preselected-file": w.value,
        onBack: E,
        onQueue: z[3] || (z[3] = (W) => K.$emit("queue", W))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (a(), N(Jk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: z[4] || (z[4] = (W) => y.value = !1),
        onSaved: L,
        onCleared: V
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), pb = /* @__PURE__ */ Ce(vb, [["__scopeId", "data-v-e13209bf"]]), gb = { class: "civitai-tab" }, hb = /* @__PURE__ */ _e({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (a(), i("div", gb, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), yb = /* @__PURE__ */ Ce(hb, [["__scopeId", "data-v-44948051"]]), wb = { class: "direct-url-tab" }, _b = { class: "input-group" }, kb = { class: "input-group" }, bb = {
  key: 0,
  class: "error"
}, $b = { class: "actions" }, Cb = /* @__PURE__ */ _e({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, n = $(""), l = $(""), r = A(() => {
      const d = l.value.trim();
      if (!d) return null;
      const v = d.replace(/\\/g, "/").split("/").pop() || "";
      return v.includes(".") && !v.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = A(() => n.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, v) => (a(), i("div", wb, [
      t("div", _b, [
        v[2] || (v[2] = t("label", null, "Download URL", -1)),
        k(it, {
          modelValue: n.value,
          "onUpdate:modelValue": v[0] || (v[0] = (f) => n.value = f),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", kb, [
        v[3] || (v[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        k(it, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (a(), i("p", bb, m(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", $b, [
        k(Pe, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: p(() => [...v[4] || (v[4] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), xb = /* @__PURE__ */ Ce(Cb, [["__scopeId", "data-v-01def7aa"]]), Sb = { class: "download-modal" }, Ib = { class: "tab-bar" }, Eb = ["onClick"], Tb = { class: "tab-content" }, Mb = /* @__PURE__ */ _e({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: n } = Ro(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = $("huggingface");
    function c(v) {
      n(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.destination ? `${f.destination}/${f.filename}` : f.filename
      }))), o("close");
    }
    function u(v) {
      n(v.map((f) => ({
        workflow: "__manual__",
        filename: f.filename,
        url: f.url,
        targetPath: f.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (v, f) => e.show ? (a(), N(Ct, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: p(() => [
        t("div", Sb, [
          t("div", Ib, [
            (a(), i(j, null, we(l, (g) => t("button", {
              key: g.id,
              class: Ne(["tab-btn", { active: r.value === g.id }]),
              onClick: (w) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, Eb)), 64))
          ]),
          t("div", Tb, [
            r.value === "huggingface" ? (a(), N(pb, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (a(), N(yb, { key: 1 })) : r.value === "direct" ? (a(), N(xb, {
              key: 2,
              onQueue: u
            })) : h("", !0)
          ])
        ])
      ]),
      footer: p(() => [
        k(Pe, {
          variant: "secondary",
          onClick: d
        }, {
          default: p(() => [...f[0] || (f[0] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), Yr = /* @__PURE__ */ Ce(Mb, [["__scopeId", "data-v-90a9f401"]]), Pb = /* @__PURE__ */ _e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = mt(), r = $([]), c = $([]), u = $("production"), d = $(!1), v = $(null), f = $(""), g = $(!1), w = $(null), y = $(!1);
    function _() {
      g.value = !1, o("navigate", "model-index");
    }
    const S = A(
      () => r.value.reduce((z, W) => z + (W.size || 0), 0)
    ), C = A(() => {
      if (!f.value.trim()) return r.value;
      const z = f.value.toLowerCase();
      return r.value.filter((W) => W.filename.toLowerCase().includes(z));
    }), x = A(() => {
      if (!f.value.trim()) return c.value;
      const z = f.value.toLowerCase();
      return c.value.filter((W) => W.filename.toLowerCase().includes(z));
    }), B = A(() => {
      const z = {};
      for (const X of C.value) {
        const te = X.type || "other";
        z[te] || (z[te] = []), z[te].push(X);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([X], [te]) => {
        const re = W.indexOf(X), he = W.indexOf(te);
        return re >= 0 && he >= 0 ? re - he : re >= 0 ? -1 : he >= 0 ? 1 : X.localeCompare(te);
      }).map(([X, te]) => ({ type: X, models: te }));
    });
    function E(z) {
      if (!z) return "Unknown";
      const W = z / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function R(z) {
      w.value = z.hash || z.filename;
    }
    function L(z) {
      o("navigate", "model-index");
    }
    function V(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function K() {
      d.value = !0, v.value = null;
      try {
        const z = await n();
        r.value = z, c.value = [];
        const W = await l();
        u.value = W.environment || "production";
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return nt(K), (z, W) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[1] || (W[1] = (X) => g.value = !0)
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (X) => y.value = !0)
              }, {
                default: p(() => [...W[6] || (W[6] = [
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
        search: p(() => [
          k(co, {
            modelValue: f.value,
            "onUpdate:modelValue": W[2] || (W[2] = (X) => f.value = X),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          d.value ? (a(), N($s, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (a(), N(Cs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length ? (a(), N(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                b(" Total: " + m(r.value.length) + " models • " + m(E(S.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(j, null, we(B.value, (X) => (a(), N(kt, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(X.models, (te) => (a(), N(At, {
                  key: te.hash || te.filename,
                  status: "synced"
                }, {
                  icon: p(() => [...W[7] || (W[7] = [
                    b("📦", -1)
                  ])]),
                  title: p(() => [
                    b(m(te.filename), 1)
                  ]),
                  subtitle: p(() => [
                    b(m(E(te.size)), 1)
                  ]),
                  details: p(() => [
                    k(_t, {
                      label: "Used by:",
                      value: (te.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Path:",
                      value: te.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => R(te)
                    }, {
                      default: p(() => [...W[8] || (W[8] = [
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
            x.value.length ? (a(), N(kt, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(x.value, (X) => (a(), N(At, {
                  key: X.filename,
                  status: "broken"
                }, {
                  icon: p(() => [...W[9] || (W[9] = [
                    b("⚠", -1)
                  ])]),
                  title: p(() => [
                    b(m(X.filename), 1)
                  ]),
                  subtitle: p(() => [...W[10] || (W[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: p(() => {
                    var te;
                    return [
                      k(_t, {
                        label: "Required by:",
                        value: ((te = X.workflow_names) == null ? void 0 : te.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: p(() => [
                    k(be, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => V(X.filename)
                    }, {
                      default: p(() => [...W[11] || (W[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => L(X.filename)
                    }, {
                      default: p(() => [...W[12] || (W[12] = [
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
            !C.value.length && !x.value.length ? (a(), N(is, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(Qt, {
        show: g.value,
        title: "About Environment Models",
        onClose: W[3] || (W[3] = (X) => g.value = !1)
      }, {
        content: p(() => [
          t("p", null, [
            W[13] || (W[13] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + m(u.value) + '"', 1),
            W[14] || (W[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: p(() => [
          k(be, {
            variant: "primary",
            onClick: _
          }, {
            default: p(() => [...W[15] || (W[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), N(Sl, {
        key: 0,
        identifier: w.value,
        onClose: W[4] || (W[4] = (X) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      k(Yr, {
        show: y.value,
        onClose: W[5] || (W[5] = (X) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Rb = /* @__PURE__ */ Ce(Pb, [["__scopeId", "data-v-af3ca736"]]), Nb = {
  key: 0,
  class: "indexing-progress"
}, Lb = { class: "progress-info" }, Db = { class: "progress-label" }, Ub = { class: "progress-count" }, Ob = { class: "progress-bar" }, Ab = { class: "modal-content" }, zb = { class: "modal-header" }, Vb = { class: "modal-body" }, Fb = { class: "input-group" }, Bb = { class: "current-path" }, Wb = { class: "input-group" }, Gb = { class: "modal-footer" }, jb = /* @__PURE__ */ _e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = mt(), c = s, u = $([]), d = $(!1), v = $(!1), f = $(null), g = $(""), w = $(!1), y = $(null), _ = $(!1), S = $(null), C = $(""), x = $(!1), B = $(!1), E = $(null), R = A(
      () => u.value.reduce((he, ne) => he + (ne.size || 0), 0)
    ), L = A(() => {
      if (!g.value.trim()) return u.value;
      const he = g.value.toLowerCase();
      return u.value.filter((ne) => {
        const Q = ne, me = ne.sha256 || Q.sha256_hash || "";
        return ne.filename.toLowerCase().includes(he) || me.toLowerCase().includes(he);
      });
    }), V = A(() => {
      const he = {};
      for (const Q of L.value) {
        const me = Q.type || "other";
        he[me] || (he[me] = []), he[me].push(Q);
      }
      const ne = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(he).sort(([Q], [me]) => {
        const Re = ne.indexOf(Q), ae = ne.indexOf(me);
        return Re >= 0 && ae >= 0 ? Re - ae : Re >= 0 ? -1 : ae >= 0 ? 1 : Q.localeCompare(me);
      }).map(([Q, me]) => ({ type: Q, models: me }));
    });
    function K(he) {
      if (!he) return "Unknown";
      const ne = 1024 * 1024 * 1024, Q = 1024 * 1024;
      return he >= ne ? `${(he / ne).toFixed(1)} GB` : he >= Q ? `${(he / Q).toFixed(0)} MB` : `${(he / 1024).toFixed(0)} KB`;
    }
    function z(he) {
      y.value = he.hash || he.filename;
    }
    async function W() {
      v.value = !0, f.value = null;
      try {
        const he = await n();
        await te(), he.changes > 0 && console.log(`Scan complete: ${he.changes} changes detected`);
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function X() {
      if (C.value.trim()) {
        x.value = !0, f.value = null;
        try {
          const he = await r(C.value.trim());
          S.value = he.path, _.value = !1, C.value = "", await te(), console.log(`Directory changed: ${he.models_indexed} models indexed`), c("refresh");
        } catch (he) {
          f.value = he instanceof Error ? he.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function te() {
      d.value = !0, f.value = null;
      try {
        u.value = await o();
      } catch (he) {
        f.value = he instanceof Error ? he.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function re() {
      try {
        const he = await l();
        S.value = he.path;
      } catch {
      }
    }
    return nt(() => {
      te(), re();
    }), (he, ne) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: ne[2] || (ne[2] = (Q) => w.value = !0)
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: W
              }, {
                default: p(() => [
                  b(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: ne[0] || (ne[0] = (Q) => _.value = !0)
              }, {
                default: p(() => [...ne[11] || (ne[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: ne[1] || (ne[1] = (Q) => B.value = !0)
              }, {
                default: p(() => [...ne[12] || (ne[12] = [
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
        search: p(() => [
          E.value ? (a(), i("div", Nb, [
            t("div", Lb, [
              t("span", Db, m(E.value.message), 1),
              t("span", Ub, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            t("div", Ob, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          k(co, {
            modelValue: g.value,
            "onUpdate:modelValue": ne[3] || (ne[3] = (Q) => g.value = Q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          d.value || E.value ? (a(), N($s, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (a(), N(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            u.value.length ? (a(), N(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                b(" Total: " + m(u.value.length) + " models • " + m(K(R.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(j, null, we(V.value, (Q) => (a(), N(kt, {
              key: Q.type,
              title: Q.type.toUpperCase(),
              count: Q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(Q.models, (me) => (a(), N(At, {
                  key: me.sha256 || me.filename,
                  status: "synced"
                }, {
                  icon: p(() => [...ne[13] || (ne[13] = [
                    b("📦", -1)
                  ])]),
                  title: p(() => [
                    b(m(me.filename), 1)
                  ]),
                  subtitle: p(() => [
                    b(m(K(me.size)), 1)
                  ]),
                  details: p(() => [
                    k(_t, {
                      label: "Hash:",
                      value: me.hash ? me.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Re) => z(me)
                    }, {
                      default: p(() => [...ne[14] || (ne[14] = [
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
            L.value.length ? h("", !0) : (a(), N(is, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(Qt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: ne[4] || (ne[4] = (Q) => w.value = !1)
      }, {
        content: p(() => [...ne[15] || (ne[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (a(), N(Sl, {
        key: 0,
        identifier: y.value,
        onClose: ne[5] || (ne[5] = (Q) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (a(), N(Ut, { to: "body" }, [
        _.value ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: ne[9] || (ne[9] = st((Q) => _.value = !1, ["self"]))
        }, [
          t("div", Ab, [
            t("div", zb, [
              ne[16] || (ne[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: ne[6] || (ne[6] = (Q) => _.value = !1)
              }, "✕")
            ]),
            t("div", Vb, [
              t("div", Fb, [
                ne[17] || (ne[17] = t("label", null, "Current Directory", -1)),
                t("code", Bb, m(S.value || "Not set"), 1)
              ]),
              t("div", Wb, [
                ne[18] || (ne[18] = t("label", null, "New Directory Path", -1)),
                k(it, {
                  modelValue: C.value,
                  "onUpdate:modelValue": ne[7] || (ne[7] = (Q) => C.value = Q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              ne[19] || (ne[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Gb, [
              k(Pe, {
                variant: "secondary",
                onClick: ne[8] || (ne[8] = (Q) => _.value = !1)
              }, {
                default: p(() => [...ne[20] || (ne[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(Pe, {
                variant: "primary",
                disabled: !C.value.trim() || x.value,
                loading: x.value,
                onClick: X
              }, {
                default: p(() => [
                  b(m(x.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      k(Yr, {
        show: B.value,
        onClose: ne[10] || (ne[10] = (Q) => B.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Hb = /* @__PURE__ */ Ce(jb, [["__scopeId", "data-v-3705114c"]]), qb = { class: "node-details" }, Kb = { class: "status-row" }, Jb = {
  key: 0,
  class: "detail-row"
}, Qb = { class: "value" }, Yb = { class: "detail-row" }, Xb = { class: "value" }, Zb = {
  key: 1,
  class: "detail-row"
}, e2 = { class: "value mono" }, t2 = {
  key: 2,
  class: "detail-row"
}, s2 = ["href"], o2 = {
  key: 3,
  class: "detail-row"
}, n2 = { class: "value mono small" }, a2 = { class: "detail-row" }, l2 = {
  key: 0,
  class: "value"
}, i2 = {
  key: 1,
  class: "workflow-list"
}, r2 = /* @__PURE__ */ _e({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = A(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = A(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = A(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), N(Ct, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => n("close"))
    }, {
      body: p(() => [
        t("div", qb, [
          t("div", Kb, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ne(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", Jb, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Qb, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : h("", !0),
          t("div", Yb, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Xb, m(c.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", Zb, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", e2, m(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (a(), i("div", t2, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(m(e.node.repository) + " ", 1),
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
            ], 8, s2)
          ])) : h("", !0),
          e.node.download_url ? (a(), i("div", o2, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", n2, m(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", a2, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", l2, " Not used in any workflows ")) : (a(), i("div", i2, [
              (a(!0), i(j, null, we(e.node.used_in_workflows, (v) => (a(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: p(() => [
        k(Pe, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => n("close"))
        }, {
          default: p(() => [...d[11] || (d[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), c2 = /* @__PURE__ */ Ce(r2, [["__scopeId", "data-v-b342f626"]]), u2 = { class: "dialog-message" }, d2 = {
  key: 0,
  class: "dialog-details"
}, m2 = {
  key: 1,
  class: "dialog-warning"
}, f2 = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), N(Ct, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: p(() => [
        t("p", u2, m(e.message), 1),
        e.details && e.details.length ? (a(), i("div", d2, [
          (a(!0), i(j, null, we(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(n), 1))), 128))
        ])) : h("", !0),
        e.warning ? (a(), i("p", m2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + m(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: p(() => [
        k(Pe, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: p(() => [
            b(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), N(Pe, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: p(() => [
            b(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        k(Pe, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
        }, {
          default: p(() => [
            b(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Xr = /* @__PURE__ */ Ce(f2, [["__scopeId", "data-v-3670b9f5"]]), v2 = { class: "mismatch-warning" }, p2 = { class: "version-mismatch" }, g2 = { class: "version-actual" }, h2 = { class: "version-expected" }, y2 = { style: { color: "var(--cg-color-warning)" } }, w2 = { style: { color: "var(--cg-color-warning)" } }, _2 = {
  key: 0,
  class: "community-status-badge"
}, k2 = { key: 0 }, b2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, $2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, C2 = /* @__PURE__ */ _e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u, queueNodeInstall: d } = mt(), v = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), f = $(!1), g = $(null), w = $(""), y = $(!1), _ = $(null), S = $(/* @__PURE__ */ new Set()), C = $(null), x = A(() => {
      if (!w.value.trim()) return v.value.nodes;
      const T = w.value.toLowerCase();
      return v.value.nodes.filter(
        (M) => {
          var ce, Ve;
          return M.name.toLowerCase().includes(T) || ((ce = M.description) == null ? void 0 : ce.toLowerCase().includes(T)) || ((Ve = M.repository) == null ? void 0 : Ve.toLowerCase().includes(T));
        }
      );
    }), B = A(
      () => x.value.filter((T) => T.installed && T.tracked)
    ), E = A(
      () => x.value.filter((T) => !T.installed && T.tracked && !T.issue_type)
    ), R = A(
      () => x.value.filter((T) => T.installed && !T.tracked)
    ), L = A(
      () => x.value.filter((T) => T.issue_type === "version_gated")
    ), V = A(
      () => x.value.filter((T) => T.issue_type === "uninstallable")
    ), K = A(() => L.value.length), z = A(() => V.value.length);
    function W(T) {
      return T.registry_id || T.name;
    }
    function X(T) {
      return S.value.has(W(T));
    }
    async function te(T, M) {
      const ce = T.registry_id;
      if (!ce) {
        n("toast", `Node "${T.name}" has no package id for install`, "warning");
        return;
      }
      if (M === "git" && !T.repository) {
        n("toast", `Node "${T.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ve = {
        id: ce,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      M === "git" && T.repository && (Ve.repository = T.repository, Ve.install_source = "git"), await d(Ve), S.value.add(W(T)), n("toast", `✓ Queued install for "${T.name}"`, "success");
    }
    function re(T) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[T] || T;
    }
    const he = A(() => o.versionMismatches.length > 0);
    function ne(T) {
      return !T.used_in_workflows || T.used_in_workflows.length === 0 ? "Not used in any workflows" : T.used_in_workflows.length === 1 ? T.used_in_workflows[0] : `${T.used_in_workflows.length} workflows`;
    }
    function Q(T) {
      return T.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function me(T) {
      return T.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Re(T) {
      return T.registry_id ? `Community-mapped package: ${T.registry_id}` : "Community-mapped package";
    }
    function ae(T) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function pe(T) {
      _.value = T;
    }
    function ue() {
      n("open-node-manager");
    }
    function Oe(T) {
      C.value = {
        title: "Track as Development Node",
        message: `Track "${T}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const M = await r(T);
            M.status === "success" ? (n("toast", `✓ Node "${T}" tracked as development`, "success"), await J()) : n("toast", `Failed to track node: ${M.message || "Unknown error"}`, "error");
          } catch (M) {
            n("toast", `Error tracking node: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function ee(T) {
      C.value = {
        title: "Remove Untracked Node",
        message: `Remove "${T}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const M = await u(T);
            M.status === "success" ? (n("toast", `✓ Node "${T}" removed`, "success"), await J()) : n("toast", `Failed to remove node: ${M.message || "Unknown error"}`, "error");
          } catch (M) {
            n("toast", `Error removing node: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function se(T) {
      C.value = {
        title: "Install Missing Node",
        message: `Install "${T}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0;
            const M = await c(T);
            M.status === "success" ? (n("toast", `✓ Node "${T}" installed`, "success"), await J()) : n("toast", `Failed to install node: ${M.message || "Unknown error"}`, "error");
          } catch (M) {
            n("toast", `Error installing node: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function P(T) {
      C.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${T.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await te(T, "registry");
          } catch (M) {
            n("toast", `Error queueing install: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    function U(T) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${T.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            f.value = !0, await te(T, "git");
          } catch (M) {
            n("toast", `Error queueing git install: ${M instanceof Error ? M.message : "Unknown error"}`, "error");
          } finally {
            f.value = !1;
          }
        }
      };
    }
    async function J() {
      f.value = !0, g.value = null;
      try {
        v.value = await l();
      } catch (T) {
        g.value = T instanceof Error ? T.message : "Failed to load nodes";
      } finally {
        f.value = !1;
      }
    }
    return nt(J), (T, M) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (ce) => y.value = !0)
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: ue
              }, {
                default: p(() => [...M[7] || (M[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          k(co, {
            modelValue: w.value,
            "onUpdate:modelValue": M[1] || (M[1] = (ce) => w.value = ce),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          f.value ? (a(), N($s, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (a(), N(Cs, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            v.value.total_count ? (a(), N(gn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                b(m(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (a(), i(j, { key: 0 }, [
                  b(" • " + m(v.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                K.value ? (a(), i(j, { key: 1 }, [
                  b(" • " + m(K.value) + " blocked", 1)
                ], 64)) : h("", !0),
                z.value ? (a(), i(j, { key: 2 }, [
                  b(" • " + m(z.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                v.value.untracked_count ? (a(), i(j, { key: 3 }, [
                  b(" • " + m(v.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            he.value ? (a(), N(kt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                t("div", v2, [
                  M[8] || (M[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(j, null, we(e.versionMismatches, (ce) => (a(), N(At, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: p(() => [...M[9] || (M[9] = [
                    b("⚠", -1)
                  ])]),
                  title: p(() => [
                    b(m(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", p2, [
                      t("span", g2, m(ce.actual), 1),
                      M[10] || (M[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", h2, m(ce.expected), 1)
                    ])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "warning",
                      size: "sm",
                      onClick: M[2] || (M[2] = (Ve) => n("repair-environment"))
                    }, {
                      default: p(() => [...M[11] || (M[11] = [
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
            L.value.length ? (a(), N(kt, {
              key: 2,
              title: "BLOCKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(L.value, (ce) => (a(), N(At, {
                  key: `blocked-${ce.name}`,
                  status: "warning"
                }, {
                  icon: p(() => [...M[12] || (M[12] = [
                    b("⛔", -1)
                  ])]),
                  title: p(() => [
                    b(m(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", y2, m(Q(ce)), 1)
                  ]),
                  details: p(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: ce.issue_guidance || me(ce)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: ne(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: p(() => [...M[13] || (M[13] = [
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
            V.value.length ? (a(), N(kt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(V.value, (ce) => (a(), N(At, {
                  key: `community-${ce.name}`,
                  status: "warning"
                }, {
                  icon: p(() => [...M[14] || (M[14] = [
                    b("⚠", -1)
                  ])]),
                  title: p(() => [
                    b(m(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", w2, m(Re(ce)), 1)
                  ]),
                  details: p(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: ce.issue_guidance || ae(ce)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: ne(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: p(() => [...M[15] || (M[15] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    X(ce) ? (a(), i("span", _2, "Queued")) : (a(), i(j, { key: 1 }, [
                      ce.registry_id ? (a(), N(be, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ve) => P(ce)
                      }, {
                        default: p(() => [...M[16] || (M[16] = [
                          b(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      ce.repository ? (a(), N(be, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ve) => U(ce)
                      }, {
                        default: p(() => [...M[17] || (M[17] = [
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
            R.value.length ? (a(), N(kt, {
              key: 4,
              title: "UNTRACKED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(R.value, (ce) => (a(), N(At, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: p(() => [...M[18] || (M[18] = [
                    b("?", -1)
                  ])]),
                  title: p(() => [
                    b(m(ce.name), 1)
                  ]),
                  subtitle: p(() => [...M[19] || (M[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: p(() => [
                    k(_t, {
                      label: "Used by:",
                      value: ne(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: p(() => [...M[20] || (M[20] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => Oe(ce.name)
                    }, {
                      default: p(() => [...M[21] || (M[21] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ve) => ee(ce.name)
                    }, {
                      default: p(() => [...M[22] || (M[22] = [
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
            B.value.length ? (a(), N(kt, {
              key: 5,
              title: "INSTALLED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(B.value, (ce) => (a(), N(At, {
                  key: ce.name,
                  status: "synced"
                }, {
                  icon: p(() => [
                    b(m(ce.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: p(() => [
                    b(m(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    ce.version ? (a(), i("span", k2, m(ce.source === "development" ? "" : "v") + m(ce.version), 1)) : (a(), i("span", b2, "version unknown")),
                    t("span", $2, " • " + m(re(ce.source)), 1)
                  ]),
                  details: p(() => [
                    k(_t, {
                      label: "Used by:",
                      value: ne(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: p(() => [...M[23] || (M[23] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ue
                    }, {
                      default: p(() => [...M[24] || (M[24] = [
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
            E.value.length ? (a(), N(kt, {
              key: 6,
              title: "MISSING",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(E.value, (ce) => (a(), N(At, {
                  key: ce.name,
                  status: "missing"
                }, {
                  icon: p(() => [...M[25] || (M[25] = [
                    b("!", -1)
                  ])]),
                  title: p(() => [
                    b(m(ce.name), 1)
                  ]),
                  subtitle: p(() => [...M[26] || (M[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: p(() => [
                    k(_t, {
                      label: "Required by:",
                      value: ne(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(ce)
                    }, {
                      default: p(() => [...M[27] || (M[27] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => se(ce.name)
                    }, {
                      default: p(() => [...M[28] || (M[28] = [
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
            !B.value.length && !E.value.length && !L.value.length && !V.value.length && !R.value.length ? (a(), N(is, {
              key: 7,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(Qt, {
        show: y.value,
        title: "About Custom Nodes",
        onClose: M[4] || (M[4] = (ce) => y.value = !1)
      }, {
        content: p(() => [...M[29] || (M[29] = [
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
        actions: p(() => [
          k(be, {
            variant: "primary",
            onClick: M[3] || (M[3] = (ce) => y.value = !1)
          }, {
            default: p(() => [...M[30] || (M[30] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), N(c2, {
        key: 0,
        node: _.value,
        onClose: M[5] || (M[5] = (ce) => _.value = null)
      }, null, 8, ["node"])) : h("", !0),
      C.value ? (a(), N(Xr, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: M[6] || (M[6] = (ce) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), x2 = /* @__PURE__ */ Ce(C2, [["__scopeId", "data-v-3ef68ac4"]]), S2 = { class: "setting-info" }, I2 = { class: "setting-label" }, E2 = {
  key: 0,
  class: "required-marker"
}, T2 = {
  key: 0,
  class: "setting-description"
}, M2 = { class: "setting-control" }, P2 = /* @__PURE__ */ _e({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), i("div", {
      class: Ne(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      t("div", S2, [
        t("div", I2, [
          b(m(e.label) + " ", 1),
          e.required ? (a(), i("span", E2, "*")) : h("", !0)
        ]),
        e.description ? (a(), i("div", T2, m(e.description), 1)) : h("", !0)
      ]),
      t("div", M2, [
        et(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Hs = /* @__PURE__ */ Ce(P2, [["__scopeId", "data-v-3e106b1c"]]), R2 = ["type", "value", "placeholder", "disabled"], N2 = /* @__PURE__ */ _e({
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
    const n = e, l = o, r = $(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return nt(() => {
      n.autoFocus && r.value && r.value.focus();
    }), s({
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
      class: Ne(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = es((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = es((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, R2));
  }
}), ks = /* @__PURE__ */ Ce(N2, [["__scopeId", "data-v-0380d08f"]]), L2 = { class: "toggle" }, D2 = ["checked", "disabled"], U2 = /* @__PURE__ */ _e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), i("label", L2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, D2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ki = /* @__PURE__ */ Ce(U2, [["__scopeId", "data-v-71c0f550"]]), za = "ComfyGit.Deploy.GitHubPAT";
function Zr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function O2(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function A2() {
  function e() {
    try {
      return localStorage.getItem(za);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(za, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(za);
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
    setToken: s,
    clearToken: o,
    hasToken: n,
    isRemoteSsh: Zr,
    isRemoteHttps: O2
  };
}
const z2 = { class: "workspace-settings-content" }, V2 = { class: "settings-section" }, F2 = { class: "path-setting" }, B2 = { class: "path-value" }, W2 = { class: "path-setting" }, G2 = { class: "path-value" }, j2 = { class: "settings-section" }, H2 = { class: "token-setting" }, q2 = {
  key: 0,
  class: "token-warning"
}, K2 = { class: "token-actions" }, J2 = { class: "settings-section" }, Q2 = { class: "settings-section" }, Y2 = /* @__PURE__ */ _e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = mt(), { getToken: v, setToken: f, clearToken: g, hasToken: w } = A2(), y = $(!1), _ = $(null), S = $(null), C = $(null), x = $(null), B = $(""), E = $(""), R = $(""), L = $(""), V = $(!1), K = $(!1), z = $(!1), W = $(""), X = $(!1), te = $(!1), re = $(null), he = $(!1), ne = $(!0);
    function Q(J) {
      return J.join(" ");
    }
    function me(J) {
      return J.trim() ? J.trim().split(/\s+/) : [];
    }
    const Re = A(() => {
      if (!x.value) return !1;
      const J = V.value, T = K.value, M = z.value, ce = L.value !== Q(x.value.comfyui_extra_args || []);
      return J || T || M || ce;
    }), ae = A(() => w());
    async function pe() {
      var J;
      y.value = !0, _.value = null;
      try {
        C.value = await r(n.workspacePath || void 0), x.value = { ...C.value }, B.value = C.value.civitai_api_key || "", E.value = C.value.huggingface_token || "", L.value = Q(C.value.comfyui_extra_args || []), R.value = v() || "", W.value = R.value, V.value = !1, K.value = !1, z.value = !1, re.value = null;
        const T = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        he.value = T !== "false", ne.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const ce = (J = (await u()).remotes) == null ? void 0 : J.find((Ve) => Ve.name === "origin");
          X.value = !!(ce && Zr(ce.url));
        } catch {
          X.value = !1;
        }
      } catch (T) {
        _.value = T instanceof Error ? T.message : "Failed to load settings";
      } finally {
        y.value = !1;
      }
    }
    async function ue() {
      var J;
      S.value = null;
      try {
        const T = {};
        V.value && (T.civitai_api_key = B.value || null), K.value && (T.huggingface_token = E.value || null), L.value !== Q(((J = x.value) == null ? void 0 : J.comfyui_extra_args) || []) && (T.comfyui_extra_args = me(L.value)), await c(T, n.workspacePath || void 0), z.value && (R.value ? f(R.value) : g()), await pe(), S.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          S.value = null;
        }, 3e3);
      } catch (T) {
        const M = T instanceof Error ? T.message : "Failed to save settings";
        S.value = { type: "error", message: M }, l("error", M);
      }
    }
    function Oe() {
      x.value && (B.value = x.value.civitai_api_key || "", E.value = x.value.huggingface_token || "", L.value = Q(x.value.comfyui_extra_args || []), R.value = W.value, V.value = !1, K.value = !1, z.value = !1, re.value = null, S.value = null);
    }
    async function ee() {
      if (R.value) {
        te.value = !0, re.value = null;
        try {
          const J = await d(R.value);
          re.value = {
            type: J.status === "success" ? "success" : "error",
            message: J.message
          };
        } catch (J) {
          re.value = {
            type: "error",
            message: J instanceof Error ? J.message : "Connection test failed"
          };
        } finally {
          te.value = !1;
        }
      }
    }
    function se() {
      R.value = "", z.value = !0, re.value = null;
    }
    function P(J) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(J)), console.log("[ComfyGit] Auto-refresh setting saved:", J);
    }
    function U(J) {
      J ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", J ? "enabled" : "disabled");
    }
    return s({
      saveSettings: ue,
      resetSettings: Oe,
      hasChanges: Re,
      loadSettings: pe
    }), nt(pe), (J, T) => (a(), i("div", z2, [
      y.value ? (a(), N($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), N(Cs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: pe
      }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
        k(kt, { title: "WORKSPACE PATHS" }, {
          default: p(() => {
            var M, ce;
            return [
              t("div", V2, [
                t("div", F2, [
                  T[9] || (T[9] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  T[10] || (T[10] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", B2, m(((M = C.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                t("div", W2, [
                  T[11] || (T[11] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  T[12] || (T[12] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", G2, m(((ce = C.value) == null ? void 0 : ce.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(kt, { title: "API CREDENTIALS" }, {
          default: p(() => [
            t("div", j2, [
              k(Hs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: p(() => [
                  k(ks, {
                    modelValue: B.value,
                    "onUpdate:modelValue": T[0] || (T[0] = (M) => B.value = M),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: T[1] || (T[1] = (M) => V.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Hs, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: p(() => [
                  k(ks, {
                    modelValue: E.value,
                    "onUpdate:modelValue": T[2] || (T[2] = (M) => E.value = M),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: T[3] || (T[3] = (M) => K.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Hs, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: p(() => [
                  t("div", H2, [
                    k(ks, {
                      modelValue: R.value,
                      "onUpdate:modelValue": T[4] || (T[4] = (M) => R.value = M),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: T[5] || (T[5] = (M) => z.value = !0)
                    }, null, 8, ["modelValue"]),
                    X.value ? (a(), i("div", q2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    T[15] || (T[15] = t("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    t("div", K2, [
                      k(be, {
                        variant: "ghost",
                        size: "xs",
                        loading: te.value,
                        disabled: !R.value || te.value,
                        onClick: ee
                      }, {
                        default: p(() => [...T[13] || (T[13] = [
                          b(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      ae.value ? (a(), N(be, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: se
                      }, {
                        default: p(() => [...T[14] || (T[14] = [
                          b(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : h("", !0)
                    ]),
                    re.value ? (a(), i("div", {
                      key: 1,
                      class: Ne(["token-test-result", re.value.type])
                    }, m(re.value.message), 3)) : h("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k(kt, { title: "COMFYUI SETTINGS" }, {
          default: p(() => [
            t("div", J2, [
              k(Hs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: p(() => [
                  k(ks, {
                    modelValue: L.value,
                    "onUpdate:modelValue": T[6] || (T[6] = (M) => L.value = M),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              T[16] || (T[16] = t("div", { class: "setting-hint" }, [
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
        k(kt, { title: "UI SETTINGS" }, {
          default: p(() => [
            t("div", Q2, [
              k(Hs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: p(() => [
                  k(ki, {
                    modelValue: he.value,
                    "onUpdate:modelValue": [
                      T[7] || (T[7] = (M) => he.value = M),
                      P
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Hs, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: p(() => [
                  k(ki, {
                    modelValue: ne.value,
                    "onUpdate:modelValue": [
                      T[8] || (T[8] = (M) => ne.value = M),
                      U
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        S.value ? (a(), N(gn, {
          key: 0,
          variant: (S.value.type === "success", "compact")
        }, {
          default: p(() => [
            t("span", {
              style: Ft({ color: S.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(S.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), ec = /* @__PURE__ */ Ce(Y2, [["__scopeId", "data-v-f1bdc574"]]), X2 = /* @__PURE__ */ _e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = $(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), N(Tt, null, {
      header: p(() => [
        k(Mt, { title: "WORKSPACE SETTINGS" }, {
          actions: p(() => {
            var r, c;
            return [
              k(be, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: p(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), N(be, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: p(() => [...l[3] || (l[3] = [
                  b(" Reset ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: p(() => [
        k(ec, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Z2 = { class: "env-title" }, e$ = {
  key: 0,
  class: "current-badge"
}, t$ = {
  key: 0,
  class: "branch-info"
}, s$ = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), N(At, {
      status: e.isCurrent ? "synced" : void 0
    }, ts({
      icon: p(() => [
        b(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: p(() => [
        t("div", Z2, [
          t("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", e$, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: p(() => [
        e.currentBranch ? (a(), i("span", t$, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + m(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: p(() => [
        et(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: p(() => [
          k(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          k(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), N(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), o$ = /* @__PURE__ */ Ce(s$, [["__scopeId", "data-v-9231917a"]]), n$ = { class: "env-details" }, a$ = { class: "status-row" }, l$ = {
  key: 0,
  class: "detail-row"
}, i$ = { class: "value mono" }, r$ = {
  key: 1,
  class: "detail-row"
}, c$ = { class: "value mono small" }, u$ = { class: "collapsible-section" }, d$ = { class: "value" }, m$ = {
  key: 0,
  class: "collapsible-body"
}, f$ = { class: "item-list" }, v$ = { class: "item-name" }, p$ = { class: "item-name" }, g$ = { class: "item-name" }, h$ = { class: "item-name" }, y$ = {
  key: 0,
  class: "empty-list"
}, w$ = { class: "collapsible-section" }, _$ = { class: "value" }, k$ = {
  key: 0,
  class: "collapsible-body"
}, b$ = { class: "item-list" }, $$ = { class: "item-name" }, C$ = {
  key: 0,
  class: "item-meta"
}, x$ = {
  key: 0,
  class: "empty-list"
}, S$ = { class: "collapsible-section" }, I$ = { class: "value" }, E$ = {
  key: 0,
  class: "missing-count"
}, T$ = {
  key: 0,
  class: "collapsible-body"
}, M$ = { class: "item-list" }, P$ = { class: "model-row" }, R$ = { class: "item-name" }, N$ = { class: "model-meta" }, L$ = { class: "item-meta" }, D$ = {
  key: 0,
  class: "item-meta"
}, U$ = {
  key: 0,
  class: "empty-list"
}, O$ = {
  key: 2,
  class: "section-divider"
}, A$ = {
  key: 3,
  class: "detail-row"
}, z$ = { class: "value" }, V$ = { class: "footer-actions" }, F$ = /* @__PURE__ */ _e({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = $(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = A(() => {
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
    return (d, v) => (a(), N(Ct, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => n("close"))
    }, {
      body: p(() => {
        var f, g, w, y, _, S, C, x, B, E, R, L, V, K;
        return [
          t("div", n$, [
            t("div", a$, [
              v[7] || (v[7] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Ne(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", l$, [
              v[8] || (v[8] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", i$, m(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (a(), i("div", r$, [
              v[9] || (v[9] = t("span", { class: "label" }, "Path:", -1)),
              t("span", c$, m(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = t("div", { class: "section-divider" }, null, -1)),
            t("div", u$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (z) => r("workflows"))
              }, [
                v[10] || (v[10] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", d$, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (a(), i("span", {
                  key: 0,
                  class: Ne(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", m$, [
                t("div", f$, [
                  (a(!0), i(j, null, we(e.detail.workflows.synced, (z) => (a(), i("div", {
                    key: "synced-" + z,
                    class: "list-item"
                  }, [
                    t("span", v$, m(z), 1),
                    v[11] || (v[11] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.new, (z) => (a(), i("div", {
                    key: "new-" + z,
                    class: "list-item"
                  }, [
                    t("span", p$, m(z), 1),
                    v[12] || (v[12] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.modified, (z) => (a(), i("div", {
                    key: "mod-" + z,
                    class: "list-item"
                  }, [
                    t("span", g$, m(z), 1),
                    v[13] || (v[13] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.deleted, (z) => (a(), i("div", {
                    key: "del-" + z,
                    class: "list-item"
                  }, [
                    t("span", h$, m(z), 1),
                    v[14] || (v[14] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (a(), i("div", y$, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            t("div", w$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (z) => r("nodes"))
              }, [
                v[15] || (v[15] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", _$, m(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Ne(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (S = e.detail) != null && S.nodes && l.value.has("nodes") ? (a(), i("div", k$, [
                t("div", b$, [
                  (a(!0), i(j, null, we(e.detail.nodes, (z) => (a(), i("div", {
                    key: z.name,
                    class: "list-item"
                  }, [
                    t("span", $$, m(z.name), 1),
                    z.version ? (a(), i("span", C$, m(z.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (a(), i("div", x$, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            t("div", S$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (z) => r("models"))
              }, [
                v[16] || (v[16] = t("span", { class: "label" }, "Models:", -1)),
                t("span", I$, [
                  b(m(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (B = (x = e.detail) == null ? void 0 : x.models) != null && B.missing.length ? (a(), i("span", E$, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (E = e.detail) != null && E.models ? (a(), i("span", {
                  key: 0,
                  class: Ne(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (R = e.detail) != null && R.models && l.value.has("models") ? (a(), i("div", T$, [
                t("div", M$, [
                  (a(!0), i(j, null, we(e.detail.models.missing, (z) => (a(), i("div", {
                    key: z.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", P$, [
                      t("span", R$, m(z.filename), 1),
                      t("span", {
                        class: Ne(["criticality-badge", z.criticality])
                      }, m(z.criticality), 3)
                    ]),
                    t("div", N$, [
                      t("span", L$, m(z.category), 1),
                      z.workflow_names.length ? (a(), i("span", D$, " used by: " + m(z.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (a(), i("div", U$, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (L = e.detail) != null && L.created_at || e.environment.created_at ? (a(), i("div", O$)) : h("", !0),
            (V = e.detail) != null && V.created_at || e.environment.created_at ? (a(), i("div", A$, [
              v[17] || (v[17] = t("span", { class: "label" }, "Created:", -1)),
              t("span", z$, m(u(((K = e.detail) == null ? void 0 : K.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: p(() => [
        t("div", V$, [
          k(Pe, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => n("export", e.environment.name))
          }, {
            default: p(() => [...v[19] || (v[19] = [
              b(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), N(Pe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => n("delete", e.environment.name))
          }, {
            default: p(() => [...v[20] || (v[20] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          v[22] || (v[22] = t("div", { class: "footer-spacer" }, null, -1)),
          k(Pe, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => n("close"))
          }, {
            default: p(() => [...v[21] || (v[21] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), B$ = /* @__PURE__ */ Ce(F$, [["__scopeId", "data-v-750671f5"]]), tc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], sc = "3.12", Il = [
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
], oc = "auto", W$ = { class: "progress-bar" }, G$ = /* @__PURE__ */ _e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = A(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), i("div", W$, [
      t("div", {
        class: Ne(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), nc = /* @__PURE__ */ Ce(G$, [["__scopeId", "data-v-1beb0512"]]), j$ = { class: "task-progress" }, H$ = { class: "progress-info" }, q$ = { class: "progress-percentage" }, K$ = { class: "progress-message" }, J$ = {
  key: 0,
  class: "progress-steps"
}, Q$ = { class: "step-icon" }, Y$ = { class: "step-label" }, X$ = /* @__PURE__ */ _e({
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
    function n(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (a(), i("div", j$, [
      k(nc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", H$, [
        t("span", q$, m(e.progress) + "%", 1),
        t("span", K$, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", J$, [
        (a(!0), i(j, null, we(e.steps, (c) => (a(), i("div", {
          key: c.id,
          class: Ne(["step", o(c.id)])
        }, [
          t("span", Q$, m(n(c.id)), 1),
          t("span", Y$, m(c.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), qn = /* @__PURE__ */ Ce(X$, [["__scopeId", "data-v-9d1de66c"]]), Z$ = {
  key: 0,
  class: "create-env-form"
}, eC = { class: "form-field" }, tC = { class: "input-wrapper" }, sC = {
  key: 0,
  class: "validating-indicator"
}, oC = {
  key: 1,
  class: "valid-indicator"
}, nC = {
  key: 0,
  class: "field-error"
}, aC = { class: "form-field" }, lC = ["value"], iC = { class: "form-field" }, rC = ["disabled"], cC = ["value"], uC = { class: "form-field" }, dC = ["value"], mC = { class: "form-field form-field--checkbox" }, fC = { class: "form-checkbox" }, vC = {
  key: 1,
  class: "create-env-progress"
}, pC = { class: "creating-intro" }, gC = {
  key: 0,
  class: "progress-warning"
}, hC = {
  key: 1,
  class: "create-error"
}, yC = { class: "error-message" }, wC = {
  key: 1,
  class: "footer-status"
}, _C = 10, kC = /* @__PURE__ */ _e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = mt(), u = $(""), d = $(sc), v = $("latest"), f = $(oc), g = $(!1), w = $(null), y = $(!1), _ = $(!1);
    let S = null, C = 0;
    const x = A(() => !!u.value.trim() && _.value && !w.value && !y.value && !R.value), B = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = $(!1), R = $(!1), L = $({
      progress: 0,
      message: ""
    });
    let V = null, K = 0;
    const z = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], W = $(null);
    bt(u, (ae) => {
      _.value = !1, S && (clearTimeout(S), S = null);
      const pe = ae.trim();
      if (!pe) {
        w.value = null, y.value = !1;
        return;
      }
      y.value = !0, S = setTimeout(() => {
        X(pe);
      }, 400);
    });
    async function X(ae, pe = !1) {
      const ue = ae.trim();
      if (!ue)
        return _.value = !1, y.value = !1, w.value = pe ? "Environment name is required" : null, !1;
      const Oe = ++C;
      y.value = !0;
      try {
        const ee = await c(ue);
        return Oe !== C ? !1 : (w.value = ee.valid ? null : ee.error || "Invalid name", _.value = !!ee.valid, !!ee.valid);
      } catch {
        return Oe !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        Oe === C && (y.value = !1);
      }
    }
    async function te() {
      S && (clearTimeout(S), S = null), await X(u.value, !0);
    }
    function re() {
      R.value || o("close");
    }
    async function he() {
      const ae = u.value.trim();
      if (!ae) {
        w.value = "Environment name is required";
        return;
      }
      if (S && (clearTimeout(S), S = null), !!await X(ae, !0)) {
        R.value = !0, L.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ue = {
            name: ae,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Oe = await l(ue);
          Oe.status === "started" ? ne() : Oe.status === "error" && (L.value = {
            progress: 0,
            message: Oe.message || "Failed to start creation",
            error: Oe.message
          });
        } catch (ue) {
          L.value = {
            progress: 0,
            message: ue instanceof Error ? ue.message : "Unknown error",
            error: ue instanceof Error ? ue.message : "Unknown error"
          };
        }
      }
    }
    function ne() {
      V || (K = 0, V = window.setInterval(async () => {
        try {
          const ae = await r();
          K = 0, L.value = {
            progress: ae.progress ?? 0,
            message: ae.message,
            phase: ae.phase,
            error: ae.error
          }, ae.state === "complete" ? (Q(), o("created", ae.environment_name || u.value.trim(), g.value)) : ae.state === "error" ? (Q(), L.value.error = ae.error || ae.message) : ae.state === "idle" && R.value && (Q(), L.value.error = "Creation was interrupted. Please try again.");
        } catch {
          K++, K >= _C && (Q(), L.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Q() {
      V && (clearInterval(V), V = null);
    }
    function me() {
      R.value = !1, L.value = { progress: 0, message: "" }, o("close");
    }
    async function Re() {
      E.value = !0;
      try {
        B.value = await n();
      } catch (ae) {
        console.error("Failed to load ComfyUI releases:", ae);
      } finally {
        E.value = !1;
      }
    }
    return nt(async () => {
      var ae;
      await Rt(), (ae = W.value) == null || ae.focus(), Re();
    }), Mo(() => {
      Q(), S && (clearTimeout(S), S = null);
    }), (ae, pe) => (a(), N(Ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !R.value,
      onClose: re
    }, {
      body: p(() => [
        R.value ? (a(), i("div", vC, [
          t("p", pC, [
            pe[12] || (pe[12] = b(" Creating environment ", -1)),
            t("strong", null, m(u.value), 1),
            pe[13] || (pe[13] = b("... ", -1))
          ]),
          k(qn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: z
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? h("", !0) : (a(), i("p", gC, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), i("div", hC, [
            t("p", yC, m(L.value.error), 1)
          ])) : h("", !0)
        ])) : (a(), i("div", Z$, [
          t("div", eC, [
            pe[6] || (pe[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", tC, [
              St(t("input", {
                ref_key: "nameInput",
                ref: W,
                "onUpdate:modelValue": pe[0] || (pe[0] = (ue) => u.value = ue),
                type: "text",
                class: Ne(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: es(he, ["enter"]),
                onBlur: te
              }, null, 34), [
                [$o, u.value]
              ]),
              y.value ? (a(), i("span", sC, "...")) : _.value ? (a(), i("span", oC, "✓")) : h("", !0)
            ]),
            w.value ? (a(), i("div", nC, m(w.value), 1)) : h("", !0),
            pe[7] || (pe[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", aC, [
            pe[8] || (pe[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[1] || (pe[1] = (ue) => d.value = ue),
              class: "form-select"
            }, [
              (a(!0), i(j, null, we(Qe(tc), (ue) => (a(), i("option", {
                key: ue,
                value: ue
              }, m(ue), 9, lC))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          t("div", iC, [
            pe[9] || (pe[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[2] || (pe[2] = (ue) => v.value = ue),
              class: "form-select",
              disabled: E.value
            }, [
              (a(!0), i(j, null, we(B.value, (ue) => (a(), i("option", {
                key: ue.tag_name,
                value: ue.tag_name
              }, m(ue.name), 9, cC))), 128))
            ], 8, rC), [
              [Co, v.value]
            ])
          ]),
          t("div", uC, [
            pe[10] || (pe[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            St(t("select", {
              "onUpdate:modelValue": pe[3] || (pe[3] = (ue) => f.value = ue),
              class: "form-select"
            }, [
              (a(!0), i(j, null, we(Qe(Il), (ue) => (a(), i("option", {
                key: ue,
                value: ue
              }, m(ue) + m(ue === "auto" ? " (detect GPU)" : ""), 9, dC))), 128))
            ], 512), [
              [Co, f.value]
            ])
          ]),
          t("div", mC, [
            t("label", fC, [
              St(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": pe[4] || (pe[4] = (ue) => g.value = ue)
              }, null, 512), [
                [jn, g.value]
              ]),
              pe[11] || (pe[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: p(() => [
        R.value ? (a(), i(j, { key: 1 }, [
          L.value.error ? (a(), N(Pe, {
            key: 0,
            variant: "secondary",
            onClick: me
          }, {
            default: p(() => [...pe[16] || (pe[16] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", wC, " Creating environment... "))
        ], 64)) : (a(), i(j, { key: 0 }, [
          k(Pe, {
            variant: "primary",
            disabled: !x.value,
            onClick: he
          }, {
            default: p(() => [...pe[14] || (pe[14] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Pe, {
            variant: "secondary",
            onClick: pe[5] || (pe[5] = (ue) => o("close"))
          }, {
            default: p(() => [...pe[15] || (pe[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), bC = /* @__PURE__ */ Ce(kC, [["__scopeId", "data-v-3faa3d9b"]]), $C = /* @__PURE__ */ _e({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = mt(), c = $([]), u = $(!1), d = $(null), v = $(""), f = $(!1), g = $(!1), w = $(null), y = $(null), _ = A(() => {
      if (!v.value.trim()) return c.value;
      const L = v.value.toLowerCase();
      return c.value.filter(
        (V) => {
          var K;
          return V.name.toLowerCase().includes(L) || ((K = V.current_branch) == null ? void 0 : K.toLowerCase().includes(L));
        }
      );
    });
    function S(L, V) {
      g.value = !1, n("created", L, V);
    }
    function C() {
      g.value = !0;
    }
    async function x(L) {
      w.value = L, y.value = null;
      const V = await r(L.name);
      V && (y.value = V);
    }
    function B(L) {
      w.value = null, y.value = null, n("delete", L);
    }
    function E(L) {
      w.value = null, y.value = null, n("export", L);
    }
    async function R() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return nt(R), s({
      loadEnvironments: R,
      openCreateModal: C
    }), (L, V) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (K) => f.value = !0)
          }, {
            actions: p(() => [
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: p(() => [...V[7] || (V[7] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              k(be, {
                variant: "secondary",
                size: "sm",
                onClick: V[0] || (V[0] = (K) => L.$emit("import"))
              }, {
                default: p(() => [...V[8] || (V[8] = [
                  b(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          k(co, {
            modelValue: v.value,
            "onUpdate:modelValue": V[2] || (V[2] = (K) => v.value = K),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          u.value ? (a(), N($s, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), N(Cs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            _.value.length ? (a(), N(kt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(_.value, (K) => (a(), N(o$, {
                  key: K.name,
                  "environment-name": K.name,
                  "is-current": K.is_current,
                  "current-branch": K.current_branch,
                  "show-last-used": !1
                }, {
                  actions: p(() => [
                    K.is_current ? h("", !0) : (a(), N(be, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => L.$emit("switch", K.name)
                    }, {
                      default: p(() => [...V[9] || (V[9] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => x(K)
                    }, {
                      default: p(() => [...V[10] || (V[10] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => L.$emit("export", K.name)
                    }, {
                      default: p(() => [...V[11] || (V[11] = [
                        b(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            _.value.length ? h("", !0) : (a(), N(is, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, ts({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: p(() => [
                  k(be, {
                    variant: "primary",
                    onClick: C
                  }, {
                    default: p(() => [...V[12] || (V[12] = [
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
      k(Qt, {
        show: f.value,
        title: "About Environments",
        onClose: V[4] || (V[4] = (K) => f.value = !1)
      }, {
        content: p(() => [...V[13] || (V[13] = [
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
        actions: p(() => [
          k(be, {
            variant: "secondary",
            onClick: V[3] || (V[3] = (K) => f.value = !1)
          }, {
            default: p(() => [...V[14] || (V[14] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), N(B$, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": c.value.length > 1,
        onClose: V[5] || (V[5] = (K) => {
          w.value = null, y.value = null;
        }),
        onDelete: B,
        onExport: E
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      g.value ? (a(), N(bC, {
        key: 1,
        onClose: V[6] || (V[6] = (K) => g.value = !1),
        onCreated: S
      })) : h("", !0)
    ], 64));
  }
}), CC = /* @__PURE__ */ Ce($C, [["__scopeId", "data-v-92fdb370"]]), xC = { class: "file-path" }, SC = { class: "file-path-text" }, IC = ["title"], EC = /* @__PURE__ */ _e({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = $(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (a(), i("div", xC, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", SC, m(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, m(o.value ? "✓" : "📋"), 9, IC)) : h("", !0)
    ]));
  }
}), TC = /* @__PURE__ */ Ce(EC, [["__scopeId", "data-v-f0982173"]]), MC = ["checked", "disabled"], PC = { class: "base-checkbox-box" }, RC = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, NC = {
  key: 0,
  class: "base-checkbox-label"
}, LC = /* @__PURE__ */ _e({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), i("label", {
      class: Ne(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, MC),
      t("span", PC, [
        e.modelValue ? (a(), i("svg", RC, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      s.$slots.default ? (a(), i("span", NC, [
        et(s.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Kn = /* @__PURE__ */ Ce(LC, [["__scopeId", "data-v-bf17c831"]]), DC = { class: "export-blocked" }, UC = { class: "error-header" }, OC = { class: "error-summary" }, AC = { class: "error-description" }, zC = { class: "issues-list" }, VC = { class: "issue-message" }, FC = {
  key: 0,
  class: "issue-details"
}, BC = ["onClick"], WC = { class: "issue-fix" }, GC = {
  key: 0,
  class: "commit-section"
}, jC = {
  key: 0,
  class: "issues-warning"
}, HC = {
  key: 1,
  class: "commit-error"
}, qC = /* @__PURE__ */ _e({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = mt(), r = $(""), c = $(!1), u = $(!1), d = $(""), v = uo({}), f = A(
      () => o.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), g = A(
      () => o.issues.some((C) => C.type === "unresolved_issues")
    ), w = A(
      () => g.value && !u.value
    ), y = A(
      () => f.value && r.value.trim() !== "" && !c.value && !w.value
    );
    function _(C) {
      const x = o.issues[C];
      return v[C] || x.details.length <= 3 ? x.details : x.details.slice(0, 3);
    }
    async function S() {
      var C;
      if (y.value) {
        c.value = !0, d.value = "";
        try {
          const x = await l(r.value.trim(), u.value);
          if (x.status === "success")
            n("committed");
          else if (x.status === "blocked") {
            const B = ((C = x.issues) == null ? void 0 : C.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${B}`;
          } else
            d.value = x.message || "Commit failed";
        } catch (x) {
          d.value = x instanceof Error ? x.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (C, x) => (a(), N(Ct, {
      title: f.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: x[4] || (x[4] = (B) => C.$emit("close"))
    }, {
      body: p(() => [
        t("div", DC, [
          t("div", UC, [
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
            t("div", OC, [
              x[5] || (x[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", AC, m(f.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", zC, [
            (a(!0), i(j, null, we(e.issues, (B, E) => (a(), i("div", {
              key: E,
              class: "issue-item"
            }, [
              t("div", VC, m(B.message), 1),
              B.details.length ? (a(), i("div", FC, [
                (a(!0), i(j, null, we(_(E), (R, L) => (a(), i("div", {
                  key: L,
                  class: "issue-detail"
                }, m(R), 1))), 128)),
                B.details.length > 3 && !v[E] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (R) => v[E] = !0
                }, " +" + m(B.details.length - 3) + " more ", 9, BC)) : h("", !0)
              ])) : h("", !0),
              t("div", WC, [
                B.type === "uncommitted_workflows" ? (a(), i(j, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : B.type === "uncommitted_git_changes" ? (a(), i(j, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : B.type === "unresolved_issues" ? (a(), i(j, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          f.value ? (a(), i("div", GC, [
            g.value ? (a(), i("div", jC, [
              x[8] || (x[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              k(Kn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[0] || (x[0] = (B) => u.value = B),
                class: "allow-issues-toggle"
              }, {
                default: p(() => [...x[7] || (x[7] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            k(Ks, {
              modelValue: r.value,
              "onUpdate:modelValue": x[1] || (x[1] = (B) => r.value = B),
              placeholder: "Describe your changes...",
              disabled: c.value || w.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", HC, m(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: p(() => [
        f.value ? (a(), i(j, { key: 0 }, [
          k(Pe, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (B) => C.$emit("close"))
          }, {
            default: p(() => [...x[9] || (x[9] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Pe, {
            variant: u.value ? "danger" : "primary",
            disabled: !y.value,
            loading: c.value,
            onClick: S
          }, {
            default: p(() => [
              b(m(c.value ? "Committing..." : u.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (a(), N(Pe, {
          key: 1,
          variant: "primary",
          onClick: x[3] || (x[3] = (B) => C.$emit("close"))
        }, {
          default: p(() => [...x[10] || (x[10] = [
            b(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), KC = /* @__PURE__ */ Ce(qC, [["__scopeId", "data-v-bd79ba24"]]), JC = { class: "export-warnings" }, QC = {
  key: 0,
  class: "success-header"
}, YC = { class: "warning-header" }, XC = { class: "warning-summary" }, ZC = { class: "warning-title" }, ex = { class: "models-section" }, tx = { class: "models-list" }, sx = { class: "model-info" }, ox = { class: "model-filename" }, nx = { class: "model-workflows" }, ax = ["onClick"], lx = /* @__PURE__ */ _e({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = $(!1), r = $(null), c = A(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, n("revalidate");
    }
    return (d, v) => (a(), i(j, null, [
      k(Ct, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (f) => d.$emit("cancel"))
      }, {
        body: p(() => [
          t("div", JC, [
            e.models.length === 0 ? (a(), i("div", QC, [...v[4] || (v[4] = [
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
            ])])) : (a(), i(j, { key: 1 }, [
              t("div", YC, [
                v[6] || (v[6] = t("span", { class: "warning-icon" }, [
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
                t("div", XC, [
                  t("h3", ZC, m(e.models.length) + " model" + m(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", ex, [
                t("div", tx, [
                  (a(!0), i(j, null, we(c.value, (f) => (a(), i("div", {
                    key: f.hash,
                    class: "model-item"
                  }, [
                    t("div", sx, [
                      t("div", ox, m(f.filename), 1),
                      t("div", nx, " Used by: " + m(f.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => r.value = f.hash
                    }, " Add Source ", 8, ax)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (f) => l.value = !0)
                }, " Show " + m(e.models.length - 3) + " more model" + m(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: p(() => [
          k(Pe, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (f) => d.$emit("cancel"))
          }, {
            default: p(() => [...v[7] || (v[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(Pe, {
            variant: "primary",
            onClick: v[2] || (v[2] = (f) => d.$emit("confirm"))
          }, {
            default: p(() => [
              b(m(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (a(), N(Sl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), ix = /* @__PURE__ */ Ce(lx, [["__scopeId", "data-v-b698d882"]]), rx = { class: "export-card" }, cx = { class: "export-path-row" }, ux = { class: "export-actions" }, dx = {
  key: 1,
  class: "export-warning"
}, mx = /* @__PURE__ */ _e({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const s = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = mt(), c = $(""), u = $(!1), d = $(!1), v = $(!1), f = $(null), g = $(!1), w = $(null), y = $(!1), _ = $(!1), S = A(() => {
      var X;
      return ((X = s.environmentName) == null ? void 0 : X.trim()) || null;
    }), C = A(() => S.value ? `EXPORT ENVIRONMENT: ${S.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), x = A(() => S.value ? `Environment '${S.value}' has been exported` : "Your environment has been exported"), B = A(() => u.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function E() {
      u.value = !0, f.value = null;
      try {
        const X = S.value ? await l(S.value) : await o();
        w.value = X, X.can_export ? X.warnings.models_without_sources.length > 0 ? _.value = !0 : await K() : y.value = !0;
      } catch (X) {
        f.value = {
          status: "error",
          message: X instanceof Error ? X.message : "Validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function R() {
      _.value = !1, await K();
    }
    async function L() {
      y.value = !1, u.value = !0;
      try {
        const X = S.value ? await l(S.value) : await o();
        w.value = X, X.can_export ? X.warnings.models_without_sources.length > 0 ? _.value = !0 : await K() : y.value = !0;
      } catch (X) {
        f.value = {
          status: "error",
          message: X instanceof Error ? X.message : "Re-validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function V() {
      try {
        const X = S.value ? await l(S.value) : await o();
        w.value = X;
      } catch (X) {
        console.error("Re-validation failed:", X);
      }
    }
    async function K() {
      d.value = !0;
      try {
        const X = S.value ? await r(S.value, c.value || void 0) : await n(c.value || void 0);
        f.value = X;
      } catch (X) {
        f.value = {
          status: "error",
          message: X instanceof Error ? X.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function z() {
      var X;
      if ((X = f.value) != null && X.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (te) {
          console.error("Failed to copy path:", te);
        }
    }
    async function W() {
      var X;
      if ((X = f.value) != null && X.path) {
        v.value = !0;
        try {
          const te = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!te.ok)
            throw new Error(`Download failed: ${te.statusText}`);
          const re = await te.blob(), he = URL.createObjectURL(re), ne = f.value.path.split("/").pop() || "environment-export.tar.gz", Q = document.createElement("a");
          Q.href = he, Q.download = ne, document.body.appendChild(Q), Q.click(), document.body.removeChild(Q), URL.revokeObjectURL(he);
        } catch (te) {
          console.error("Failed to download:", te), alert(`Download failed: ${te instanceof Error ? te.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (X, te) => (a(), i(j, null, [
      k(Tt, null, ts({
        content: p(() => [
          k(kt, { title: "EXPORT OPTIONS" }, {
            default: p(() => [
              t("div", rx, [
                te[7] || (te[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", cx, [
                  k(ks, {
                    modelValue: c.value,
                    "onUpdate:modelValue": te[1] || (te[1] = (re) => c.value = re),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", ux, [
                  k(be, {
                    variant: "primary",
                    size: "md",
                    loading: u.value || d.value,
                    disabled: u.value || d.value,
                    onClick: E
                  }, {
                    default: p(() => [
                      te[6] || (te[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      b(" " + m(B.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (a(), N(kt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: p(() => [
              k(At, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, ts({
                icon: p(() => [
                  b(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: p(() => [
                  b(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: p(() => [
                  b(m(f.value.status === "success" ? x.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: p(() => [
                    k(_t, { label: "Saved to:" }, {
                      default: p(() => [
                        k(TC, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (a(), N(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (a(), i("div", dx, [...te[8] || (te[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: p(() => [
                    k(be, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: W
                    }, {
                      default: p(() => [...te[9] || (te[9] = [
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
                    k(be, {
                      variant: "secondary",
                      size: "sm",
                      onClick: z
                    }, {
                      default: p(() => [...te[10] || (te[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(be, {
                      variant: "ghost",
                      size: "sm",
                      onClick: te[2] || (te[2] = (re) => f.value = null)
                    }, {
                      default: p(() => [...te[11] || (te[11] = [
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
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: p(() => [
            k(Mt, {
              title: C.value,
              "show-info": !0,
              onInfoClick: te[0] || (te[0] = (re) => g.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      k(Qt, {
        show: g.value,
        title: "What Gets Exported",
        onClose: te[3] || (te[3] = (re) => g.value = !1)
      }, {
        content: p(() => [...te[12] || (te[12] = [
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
      y.value && w.value ? (a(), N(KC, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: te[4] || (te[4] = (re) => y.value = !1),
        onCommitted: L
      }, null, 8, ["issues"])) : h("", !0),
      _.value && w.value ? (a(), N(ix, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: R,
        onCancel: te[5] || (te[5] = (re) => _.value = !1),
        onRevalidate: V
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), fx = /* @__PURE__ */ Ce(mx, [["__scopeId", "data-v-253214a4"]]), vx = { class: "file-input-wrapper" }, px = ["accept", "multiple", "disabled"], gx = /* @__PURE__ */ _e({
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
    const n = o, l = $(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return s({
      triggerInput: r
    }), (u, d) => (a(), i("div", vx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, px),
      k(be, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: p(() => [
          et(u.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            b(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), hx = /* @__PURE__ */ Ce(gx, [["__scopeId", "data-v-cd192091"]]), yx = {
  key: 0,
  class: "drop-zone-empty"
}, wx = { class: "drop-zone-text" }, _x = { class: "drop-zone-primary" }, kx = { class: "drop-zone-secondary" }, bx = { class: "drop-zone-actions" }, $x = {
  key: 1,
  class: "drop-zone-file"
}, Cx = { class: "file-info" }, xx = { class: "file-details" }, Sx = { class: "file-name" }, Ix = { class: "file-size" }, Ex = /* @__PURE__ */ _e({
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
    const o = s, n = $(!1), l = $(null), r = $(0), c = A(() => l.value !== null), u = A(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = A(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var x;
      C.stopPropagation(), r.value++, (x = C.dataTransfer) != null && x.types.includes("Files") && (n.value = !0);
    }
    function f(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function g(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w(C) {
      var B;
      C.stopPropagation(), r.value = 0, n.value = !1;
      const x = (B = C.dataTransfer) == null ? void 0 : B.files;
      x && x.length > 0 && _(x[0]);
    }
    function y(C) {
      C.length > 0 && _(C[0]);
    }
    function _(C) {
      l.value = C, o("fileSelected", C);
    }
    function S() {
      l.value = null, o("clear");
    }
    return (C, x) => (a(), i("div", {
      class: Ne(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: st(v, ["prevent"]),
      onDragover: st(f, ["prevent"]),
      onDragleave: st(g, ["prevent"]),
      onDrop: st(w, ["prevent"])
    }, [
      c.value ? (a(), i("div", $x, [
        t("div", Cx, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", xx, [
            t("div", Sx, m(u.value), 1),
            t("div", Ix, m(d.value), 1)
          ])
        ]),
        k(be, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: p(() => [...x[2] || (x[2] = [
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
      ])) : (a(), i("div", yx, [
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
        t("div", wx, [
          t("p", _x, m(e.primaryText), 1),
          t("p", kx, m(e.secondaryText), 1)
        ]),
        t("div", bx, [
          k(hx, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: p(() => [
              b(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Tx = /* @__PURE__ */ Ce(Ex, [["__scopeId", "data-v-0f79cb86"]]), Mx = { class: "commit-hash" }, Px = /* @__PURE__ */ _e({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = A(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), i("span", Mx, m(o.value), 1));
  }
}), ac = /* @__PURE__ */ Ce(Px, [["__scopeId", "data-v-7c333cc6"]]), Rx = { class: "import-preview" }, Nx = { class: "preview-header" }, Lx = {
  key: 0,
  class: "source-env"
}, Dx = { class: "preview-content" }, Ux = { class: "preview-section" }, Ox = { class: "section-header" }, Ax = { class: "section-info" }, zx = { class: "section-count" }, Vx = {
  key: 0,
  class: "item-list"
}, Fx = { class: "item-name" }, Bx = {
  key: 0,
  class: "item-more"
}, Wx = { class: "preview-section" }, Gx = { class: "section-header" }, jx = { class: "section-info" }, Hx = { class: "section-count" }, qx = {
  key: 0,
  class: "item-list"
}, Kx = { class: "item-details" }, Jx = { class: "item-name" }, Qx = { class: "item-meta" }, Yx = {
  key: 0,
  class: "item-more"
}, Xx = { class: "preview-section" }, Zx = { class: "section-header" }, e3 = { class: "section-info" }, t3 = { class: "section-count" }, s3 = {
  key: 0,
  class: "item-list"
}, o3 = { class: "item-name" }, n3 = {
  key: 0,
  class: "item-more"
}, a3 = {
  key: 0,
  class: "preview-section"
}, l3 = { class: "git-info" }, i3 = /* @__PURE__ */ _e({
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
    const s = e, o = A(() => s.workflows.length), n = A(() => s.models.length), l = A(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), i("div", Rx, [
      t("div", Nx, [
        k(os, null, {
          default: p(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", Lx, [
          u[1] || (u[1] = b(" From: ", -1)),
          k(el, null, {
            default: p(() => [
              b(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      t("div", Dx, [
        t("div", Ux, [
          t("div", Ox, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Ax, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", zx, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", Vx, [
            (a(!0), i(j, null, we(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", Fx, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", Bx, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", Wx, [
          t("div", Gx, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", jx, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Hx, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", qx, [
            (a(!0), i(j, null, we(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Kx, [
                t("span", Jx, m(d.filename), 1),
                t("span", Qx, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", Yx, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", Xx, [
          t("div", Zx, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", e3, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", t3, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", s3, [
            (a(!0), i(j, null, we(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", o3, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", n3, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", a3, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", l3, [
            e.gitBranch ? (a(), N(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: p(() => [
                k(el, null, {
                  default: p(() => [
                    b(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (a(), N(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: p(() => [
                k(ac, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), r3 = /* @__PURE__ */ Ce(i3, [["__scopeId", "data-v-182fe113"]]), c3 = { class: "import-config" }, u3 = { class: "config-container" }, d3 = { class: "config-field" }, m3 = { class: "input-wrapper" }, f3 = ["value"], v3 = {
  key: 0,
  class: "validating-indicator"
}, p3 = {
  key: 1,
  class: "valid-indicator"
}, g3 = {
  key: 0,
  class: "field-error"
}, h3 = { class: "config-field" }, y3 = { class: "strategy-options" }, w3 = ["value", "checked", "onChange"], _3 = { class: "strategy-content" }, k3 = { class: "strategy-label" }, b3 = { class: "strategy-description" }, $3 = { class: "config-field switch-field" }, C3 = { class: "switch-label" }, x3 = ["checked"], S3 = { class: "advanced-section" }, I3 = { class: "advanced-content" }, E3 = { class: "config-field" }, T3 = ["value"], M3 = ["value"], P3 = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = $(!1), r = $(!1);
    bt(() => o.nameError, (f) => {
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
      const g = f.target.value;
      n("update:name", g), r.value = !1, u && clearTimeout(u), g.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (f, g) => (a(), i("div", c3, [
      k(os, null, {
        default: p(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", u3, [
        t("div", d3, [
          k(Ln, { required: "" }, {
            default: p(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", m3, [
            t("input", {
              type: "text",
              class: Ne(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, f3),
            l.value ? (a(), i("span", v3, "...")) : r.value ? (a(), i("span", p3, "✓")) : h("", !0)
          ]),
          e.nameError ? (a(), i("div", g3, m(e.nameError), 1)) : h("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", h3, [
          k(Ln, null, {
            default: p(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", y3, [
            (a(), i(j, null, we(c, (w) => t("label", {
              key: w.value,
              class: Ne(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => n("update:modelStrategy", w.value)
              }, null, 40, w3),
              t("div", _3, [
                t("span", k3, m(w.label), 1),
                t("span", b3, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", $3, [
          t("label", C3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, x3),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", S3, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", I3, [
            t("div", E3, [
              k(Ln, null, {
                default: p(() => [...g[7] || (g[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(j, null, we(Qe(Il), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, M3))), 128))
              ], 40, T3)
            ])
          ])
        ])
      ])
    ]));
  }
}), R3 = /* @__PURE__ */ Ce(P3, [["__scopeId", "data-v-89ea06a1"]]), N3 = { class: "import-flow" }, L3 = {
  key: 0,
  class: "import-empty"
}, D3 = { class: "git-import-section" }, U3 = { class: "git-url-input-row" }, O3 = ["disabled"], A3 = {
  key: 0,
  class: "git-error"
}, z3 = {
  key: 1,
  class: "import-configure"
}, V3 = { class: "selected-file-bar" }, F3 = {
  key: 0,
  class: "file-bar-content"
}, B3 = { class: "file-bar-info" }, W3 = { class: "file-bar-name" }, G3 = { class: "file-bar-size" }, j3 = {
  key: 1,
  class: "file-bar-content"
}, H3 = { class: "file-bar-info" }, q3 = { class: "file-bar-name" }, K3 = {
  key: 0,
  class: "preview-loading"
}, J3 = { class: "import-actions" }, Q3 = {
  key: 2,
  class: "import-progress"
}, Y3 = { class: "creating-intro" }, X3 = {
  key: 0,
  class: "progress-warning"
}, Z3 = {
  key: 1,
  class: "import-error"
}, e8 = { class: "error-message" }, t8 = {
  key: 3,
  class: "import-complete"
}, s8 = { class: "complete-message" }, o8 = { class: "complete-title" }, n8 = { class: "complete-details" }, a8 = { class: "complete-actions" }, l8 = /* @__PURE__ */ _e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var P, U, J, T;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = mt();
    let g = null;
    const w = $(null), y = $(n.resumeImport ?? !1), _ = $(!1), S = $(!1), C = $(""), x = $(!1), B = $(null), E = $(""), R = $(null), L = $(!1), V = $(null), K = $(null), z = $({
      name: ((P = n.initialProgress) == null ? void 0 : P.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), W = $(null), X = $({
      message: ((U = n.initialProgress) == null ? void 0 : U.message) ?? "Preparing import...",
      phase: ((J = n.initialProgress) == null ? void 0 : J.phase) ?? "",
      progress: ((T = n.initialProgress) == null ? void 0 : T.progress) ?? 0,
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
    ], re = A(() => {
      if (!K.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const M = K.value;
      return {
        sourceEnvironment: M.comfyui_version ? `ComfyUI ${M.comfyui_version}` : "Unknown",
        workflows: M.workflows.map((ce) => ce.name),
        models: M.models.map((ce) => ({
          filename: ce.filename,
          size: 0,
          type: ce.relative_path.split("/")[0] || "model"
        })),
        nodes: M.nodes.map((ce) => ce.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), he = A(() => !x.value && !B.value && K.value && z.value.name.length > 0 && !W.value && (w.value || R.value));
    async function ne(M) {
      w.value = M, x.value = !0, B.value = null, K.value = null;
      try {
        const ce = await r(M);
        K.value = ce;
      } catch (ce) {
        B.value = ce instanceof Error ? ce.message : "Failed to analyze file", console.error("Preview error:", ce);
      } finally {
        x.value = !1;
      }
    }
    function Q() {
      w.value = null, R.value = null, E.value = "", V.value = null, _.value = !1, S.value = !1, C.value = "", K.value = null, B.value = null, z.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, W.value = null, l("source-cleared");
    }
    function me() {
      ee(), Q(), y.value = !1, x.value = !1, L.value = !1, X.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Re() {
      if (E.value.trim()) {
        L.value = !0, V.value = null;
        try {
          const M = await c(E.value.trim());
          R.value = E.value.trim(), K.value = M;
        } catch (M) {
          V.value = M instanceof Error ? M.message : "Failed to analyze repository";
        } finally {
          L.value = !1;
        }
      }
    }
    function ae(M) {
      try {
        const ce = new URL(M);
        return ce.host + ce.pathname.replace(/\.git$/, "");
      } catch {
        return M;
      }
    }
    async function pe(M) {
      if (!M) {
        W.value = "Environment name is required";
        return;
      }
      try {
        const ce = await u(M);
        W.value = ce.valid ? null : ce.error || "Invalid name";
      } catch {
        W.value = "Failed to validate name";
      }
    }
    async function ue() {
      if (z.value.name && !(!w.value && !R.value)) {
        y.value = !0, _.value = !1, X.value = { message: `Creating environment '${z.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let M;
          if (w.value)
            M = await d(
              w.value,
              z.value.name,
              z.value.modelStrategy,
              z.value.torchBackend
            );
          else if (R.value)
            M = await v(
              R.value,
              z.value.name,
              z.value.modelStrategy,
              z.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          M.status === "started" ? Oe() : (S.value = !1, C.value = M.message, y.value = !1, _.value = !0);
        } catch (M) {
          S.value = !1, C.value = M instanceof Error ? M.message : "Unknown error occurred during import", y.value = !1, _.value = !0;
        }
      }
    }
    async function Oe() {
      if (g) return;
      const M = async () => {
        try {
          const Ve = await f();
          return X.value = {
            message: Ve.message,
            phase: Ve.phase || "",
            progress: Ve.progress ?? (Ve.state === "importing" ? 50 : 0),
            error: Ve.error || null
          }, Ve.state === "complete" ? (ee(), S.value = !0, C.value = `Environment '${Ve.environment_name}' created successfully`, y.value = !1, _.value = !0, Ve.environment_name && l("import-complete", Ve.environment_name, z.value.switchAfterImport), !1) : Ve.state === "error" ? (ee(), S.value = !1, C.value = Ve.error || Ve.message, y.value = !1, _.value = !0, !1) : !0;
        } catch (Ve) {
          return console.error("Failed to poll import progress:", Ve), !0;
        }
      };
      await M() && (g = setInterval(async () => {
        await M() || ee();
      }, 2e3));
    }
    function ee() {
      g && (clearInterval(g), g = null);
    }
    function se(M) {
      return M < 1024 ? `${M} B` : M < 1024 * 1024 ? `${(M / 1024).toFixed(1)} KB` : M < 1024 * 1024 * 1024 ? `${(M / (1024 * 1024)).toFixed(1)} MB` : `${(M / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return nt(async () => {
      try {
        const M = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", M.state, M), M.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", M.environment_name), y.value = !0, z.value.name = M.environment_name || z.value.name || "", X.value = {
          progress: M.progress ?? 0,
          message: M.message || "Importing...",
          phase: M.phase || "",
          error: null
        }, Oe());
      } catch (M) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", M);
      }
    }), s({
      handleReset: me,
      isImporting: y,
      canImport: he
    }), (M, ce) => {
      var Ve;
      return a(), i("div", N3, [
        !w.value && !R.value && !y.value ? (a(), i("div", L3, [
          k(Tx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ne
          }),
          ce[7] || (ce[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", D3, [
            ce[5] || (ce[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", U3, [
              St(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ce[0] || (ce[0] = (je) => E.value = je),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: es(Re, ["enter"]),
                disabled: L.value
              }, null, 40, O3), [
                [$o, E.value]
              ]),
              k(be, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || L.value,
                onClick: Re
              }, {
                default: p(() => [
                  b(m(L.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (a(), i("div", A3, m(V.value), 1)) : h("", !0),
            ce[6] || (ce[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || R.value) && !y.value && !_.value ? (a(), i("div", z3, [
          t("div", V3, [
            w.value ? (a(), i("div", F3, [
              ce[8] || (ce[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", B3, [
                t("div", W3, m(w.value.name), 1),
                t("div", G3, m(se(w.value.size)), 1)
              ])
            ])) : R.value ? (a(), i("div", j3, [
              ce[10] || (ce[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", H3, [
                t("div", q3, m(ae(R.value)), 1),
                ce[9] || (ce[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            k(be, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: p(() => [...ce[11] || (ce[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (a(), i("div", K3, [...ce[12] || (ce[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : B.value ? (a(), N(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [B.value]
          }, null, 8, ["details"])) : K.value ? (a(), N(r3, {
            key: 2,
            "source-environment": re.value.sourceEnvironment,
            workflows: re.value.workflows,
            models: re.value.models,
            nodes: re.value.nodes,
            "git-branch": re.value.gitBranch,
            "git-commit": re.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          K.value ? (a(), N(R3, {
            key: 3,
            name: z.value.name,
            "onUpdate:name": ce[1] || (ce[1] = (je) => z.value.name = je),
            "model-strategy": z.value.modelStrategy,
            "onUpdate:modelStrategy": ce[2] || (ce[2] = (je) => z.value.modelStrategy = je),
            "torch-backend": z.value.torchBackend,
            "onUpdate:torchBackend": ce[3] || (ce[3] = (je) => z.value.torchBackend = je),
            "switch-after-import": z.value.switchAfterImport,
            "onUpdate:switchAfterImport": ce[4] || (ce[4] = (je) => z.value.switchAfterImport = je),
            "name-error": W.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          z.value.modelStrategy === "skip" && ((Ve = K.value) != null && Ve.models_needing_download) ? (a(), N(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${K.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          t("div", J3, [
            k(be, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: p(() => [...ce[13] || (ce[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(be, {
              variant: "primary",
              size: "md",
              disabled: !he.value,
              onClick: ue
            }, {
              default: p(() => [...ce[14] || (ce[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (a(), i("div", Q3, [
          t("p", Y3, [
            ce[15] || (ce[15] = b(" Importing environment ", -1)),
            t("strong", null, m(z.value.name), 1),
            ce[16] || (ce[16] = b("... ", -1))
          ]),
          k(qn, {
            progress: X.value.progress,
            message: X.value.message,
            "current-phase": X.value.phase,
            variant: X.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          X.value.error ? h("", !0) : (a(), i("p", X3, " This may take several minutes. Please wait... ")),
          X.value.error ? (a(), i("div", Z3, [
            t("p", e8, m(X.value.error), 1)
          ])) : h("", !0)
        ])) : _.value ? (a(), i("div", t8, [
          t("div", {
            class: Ne(["complete-icon", S.value ? "success" : "error"])
          }, m(S.value ? "✓" : "✕"), 3),
          t("div", s8, [
            t("div", o8, m(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", n8, m(C.value), 1)
          ]),
          t("div", a8, [
            k(be, {
              variant: "primary",
              size: "md",
              onClick: me
            }, {
              default: p(() => [...ce[17] || (ce[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), lc = /* @__PURE__ */ Ce(l8, [["__scopeId", "data-v-72cbc04e"]]), i8 = /* @__PURE__ */ _e({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = $(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (a(), i(j, null, [
      k(Tt, null, ts({
        content: p(() => [
          k(lc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: p(() => [
            k(Mt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      k(Qt, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
      }, {
        content: p(() => [...c[2] || (c[2] = [
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
}), r8 = /* @__PURE__ */ Ce(i8, [["__scopeId", "data-v-41b1f298"]]), ic = "ComfyGit.Cloud.Url", rc = "ComfyGit.Cloud.DashboardUrl", tl = "ComfyGit.Cloud.Session", sl = "ComfyGit.Cloud.User";
function cc(e) {
  try {
    const s = localStorage.getItem(e);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}
function uc(e, s = "") {
  try {
    return localStorage.getItem(e) || s;
  } catch {
    return s;
  }
}
const Va = $(uc(ic, "http://127.0.0.1:8012")), Fa = $(uc(rc, "")), xn = $(cc(tl)), zo = $(cc(sl));
function dc() {
  const e = A(() => {
    var c, u;
    return !!((c = xn.value) != null && c.access_token) && !!((u = zo.value) != null && u.id);
  }), s = A(() => {
    var c;
    return ((c = zo.value) == null ? void 0 : c.email) || "Not signed in";
  });
  function o(c) {
    Va.value = c.trim();
    try {
      localStorage.setItem(ic, Va.value);
    } catch (u) {
      console.error("[useCloudAuth] Failed to save cloud URL:", u);
    }
  }
  function n(c) {
    Fa.value = c.trim();
    try {
      localStorage.setItem(rc, Fa.value);
    } catch (u) {
      console.error("[useCloudAuth] Failed to save dashboard URL:", u);
    }
  }
  function l(c, u) {
    xn.value = c, zo.value = u;
    try {
      localStorage.setItem(tl, JSON.stringify(c)), localStorage.setItem(sl, JSON.stringify(u));
    } catch (d) {
      console.error("[useCloudAuth] Failed to save auth state:", d);
    }
  }
  function r() {
    xn.value = null, zo.value = null;
    try {
      localStorage.removeItem(tl), localStorage.removeItem(sl);
    } catch (c) {
      console.error("[useCloudAuth] Failed to clear auth state:", c);
    }
  }
  return {
    cloudUrl: Va,
    dashboardUrl: Fa,
    session: xn,
    user: zo,
    isAuthenticated: e,
    authLabel: s,
    setCloudUrl: o,
    setDashboardUrl: n,
    setAuth: l,
    clearAuth: r
  };
}
const c8 = { class: "account-section" }, u8 = {
  key: 0,
  class: "account-card"
}, d8 = { class: "account-card-header" }, m8 = { class: "account-meta" }, f8 = { class: "row-actions" }, v8 = {
  key: 1,
  class: "account-card"
}, p8 = { class: "auth-form-grid" }, g8 = { class: "field-group full-span" }, h8 = { class: "field-group full-span" }, y8 = { class: "row-actions" }, w8 = { class: "account-section" }, _8 = { class: "stacked-form" }, k8 = { class: "row-actions" }, b8 = { class: "stacked-form" }, $8 = { class: "row-actions" }, C8 = /* @__PURE__ */ _e({
  __name: "AccountSection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, { getCloudAuthConfig: n, loginToCloud: l, signupToCloud: r, getCloudMe: c, logoutFromCloud: u } = mt(), { cloudUrl: d, dashboardUrl: v, session: f, user: g, isAuthenticated: w, authLabel: y, setCloudUrl: _, setDashboardUrl: S, setAuth: C, clearAuth: x } = dc(), B = $(!1), E = $(d.value), R = $(v.value), L = $(""), V = $(""), K = $(!1), z = $(!1), W = $(!1), X = $(!1), te = $(null), re = $(null), he = A(() => w.value ? y.value : "Not signed in");
    function ne() {
      const se = E.value.trim();
      return _(se), E.value = d.value, d.value;
    }
    async function Q() {
      var se;
      if (!(!((se = f.value) != null && se.access_token) || !d.value))
        try {
          const P = await c(d.value, f.value.access_token);
          f.value && C(f.value, P.user);
        } catch (P) {
          x(), re.value = {
            type: "error",
            message: P instanceof Error ? P.message : "Stored cloud session is no longer valid."
          };
        }
    }
    async function me() {
      const se = ne();
      K.value = !0, te.value = null;
      try {
        const P = await n(se);
        te.value = {
          type: "success",
          message: `Connected. Supabase auth is configured for ${P.url}.`
        };
      } catch (P) {
        te.value = {
          type: "error",
          message: P instanceof Error ? P.message : "Failed to connect to cloud."
        };
      } finally {
        K.value = !1;
      }
    }
    function Re() {
      const se = ne();
      te.value = {
        type: "info",
        message: `Cloud URL saved: ${se}`
      };
    }
    function ae() {
      const se = R.value.trim();
      S(se), R.value = v.value, te.value = {
        type: "info",
        message: `Dashboard URL saved: ${v.value || "cleared"}`
      };
    }
    async function pe() {
      const se = ne();
      z.value = !0, re.value = null;
      try {
        const P = await l(se, L.value.trim(), V.value);
        if (!P.session || !P.user)
          throw new Error("Cloud did not return a session.");
        C(P.session, P.user), re.value = { type: "success", message: "Signed in successfully." }, o("toast", "Signed in to ComfyGit Cloud", "success"), V.value = "";
      } catch (P) {
        re.value = {
          type: "error",
          message: P instanceof Error ? P.message : "Failed to sign in."
        };
      } finally {
        z.value = !1;
      }
    }
    async function ue() {
      const se = ne();
      W.value = !0, re.value = null;
      try {
        const P = await r(se, L.value.trim(), V.value);
        if (!P.session || !P.user)
          throw new Error("Cloud did not return a session.");
        C(P.session, P.user), re.value = { type: "success", message: "Account created and signed in." }, o("toast", "ComfyGit Cloud account created", "success"), V.value = "";
      } catch (P) {
        re.value = {
          type: "error",
          message: P instanceof Error ? P.message : "Failed to create account."
        };
      } finally {
        W.value = !1;
      }
    }
    async function Oe() {
      var se;
      X.value = !0;
      try {
        await u(d.value, (se = f.value) == null ? void 0 : se.refresh_token);
      } catch {
      } finally {
        x(), X.value = !1, re.value = { type: "info", message: "Signed out." }, o("toast", "Signed out of ComfyGit Cloud", "info");
      }
    }
    function ee() {
      v.value && window.open(v.value, "_blank", "noopener,noreferrer");
    }
    return nt(() => {
      Q();
    }), (se, P) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, {
            title: "CLOUD ACCOUNT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (U) => B.value = !0)
          }, {
            actions: p(() => [
              t("div", {
                class: Ne(["auth-chip", { authenticated: Qe(w) }])
              }, m(he.value), 3)
            ]),
            _: 1
          })
        ]),
        content: p(() => [
          k(kt, { title: "AUTHENTICATION" }, {
            default: p(() => [
              t("div", c8, [
                Qe(w) && Qe(g) ? (a(), i("div", u8, [
                  t("div", d8, [
                    P[8] || (P[8] = t("div", { class: "account-title" }, "SIGNED IN", -1)),
                    k(be, {
                      variant: "ghost",
                      size: "xs",
                      loading: X.value,
                      onClick: Oe
                    }, {
                      default: p(() => [...P[7] || (P[7] = [
                        b(" Sign Out ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  t("div", m8, [
                    t("div", null, [
                      P[9] || (P[9] = t("span", { class: "meta-label" }, "Email:", -1)),
                      b(" " + m(Qe(g).email || "—"), 1)
                    ]),
                    t("div", null, [
                      P[10] || (P[10] = t("span", { class: "meta-label" }, "User ID:", -1)),
                      b(" " + m(Qe(g).id), 1)
                    ])
                  ]),
                  t("div", f8, [
                    k(be, {
                      variant: "primary",
                      size: "xs",
                      onClick: P[1] || (P[1] = (U) => o("navigate", "publish"))
                    }, {
                      default: p(() => [...P[11] || (P[11] = [
                        b(" Go To Publish ", -1)
                      ])]),
                      _: 1
                    }),
                    k(be, {
                      variant: "ghost",
                      size: "xs",
                      onClick: ee
                    }, {
                      default: p(() => [...P[12] || (P[12] = [
                        b(" Open Dashboard ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])) : (a(), i("div", v8, [
                  P[17] || (P[17] = t("div", { class: "account-title" }, "SIGN IN OR CREATE ACCOUNT", -1)),
                  t("div", p8, [
                    t("div", g8, [
                      P[13] || (P[13] = t("label", { class: "field-label" }, "Email", -1)),
                      k(ks, {
                        modelValue: L.value,
                        "onUpdate:modelValue": P[2] || (P[2] = (U) => L.value = U),
                        type: "email",
                        placeholder: "you@example.com",
                        onKeydown: es(st(pe, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ]),
                    t("div", h8, [
                      P[14] || (P[14] = t("label", { class: "field-label" }, "Password", -1)),
                      k(ks, {
                        modelValue: V.value,
                        "onUpdate:modelValue": P[3] || (P[3] = (U) => V.value = U),
                        type: "password",
                        placeholder: "Enter password",
                        onKeydown: es(st(pe, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onKeydown"])
                    ])
                  ]),
                  t("div", y8, [
                    k(be, {
                      variant: "primary",
                      size: "xs",
                      loading: z.value,
                      onClick: pe
                    }, {
                      default: p(() => [...P[15] || (P[15] = [
                        b(" Sign In ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(be, {
                      variant: "secondary",
                      size: "xs",
                      loading: W.value,
                      onClick: ue
                    }, {
                      default: p(() => [...P[16] || (P[16] = [
                        b(" Create Account ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  re.value ? (a(), i("div", {
                    key: 0,
                    class: Ne(["status-text", re.value.type])
                  }, m(re.value.message), 3)) : h("", !0)
                ]))
              ])
            ]),
            _: 1
          }),
          k(kt, {
            title: "ADVANCED",
            collapsible: "",
            "initially-expanded": !1
          }, {
            default: p(() => [
              t("div", w8, [
                k(Hs, {
                  label: "Cloud API URL",
                  description: "Override the ComfyGit Cloud API base URL for local development or non-default deployments",
                  stacked: ""
                }, {
                  default: p(() => [
                    t("div", _8, [
                      k(ks, {
                        modelValue: E.value,
                        "onUpdate:modelValue": P[4] || (P[4] = (U) => E.value = U),
                        placeholder: "http://127.0.0.1:8012"
                      }, null, 8, ["modelValue"]),
                      t("div", k8, [
                        k(be, {
                          variant: "secondary",
                          size: "xs",
                          onClick: Re
                        }, {
                          default: p(() => [...P[18] || (P[18] = [
                            b(" Save URL ", -1)
                          ])]),
                          _: 1
                        }),
                        k(be, {
                          variant: "ghost",
                          size: "xs",
                          loading: K.value,
                          onClick: me
                        }, {
                          default: p(() => [...P[19] || (P[19] = [
                            b(" Test Connection ", -1)
                          ])]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      te.value ? (a(), i("div", {
                        key: 0,
                        class: Ne(["status-text", te.value.type])
                      }, m(te.value.message), 3)) : h("", !0)
                    ])
                  ]),
                  _: 1
                }),
                k(Hs, {
                  label: "Dashboard URL",
                  description: "Override the cloud dashboard URL used by the Open Dashboard actions",
                  stacked: ""
                }, {
                  default: p(() => [
                    t("div", b8, [
                      k(ks, {
                        modelValue: R.value,
                        "onUpdate:modelValue": P[5] || (P[5] = (U) => R.value = U),
                        placeholder: "http://100.99.14.94:5174"
                      }, null, 8, ["modelValue"]),
                      t("div", $8, [
                        k(be, {
                          variant: "secondary",
                          size: "xs",
                          onClick: ae
                        }, {
                          default: p(() => [...P[20] || (P[20] = [
                            b(" Save URL ", -1)
                          ])]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      k(Qt, {
        show: B.value,
        title: "Cloud Account",
        onClose: P[6] || (P[6] = (U) => B.value = !1)
      }, {
        content: p(() => [...P[21] || (P[21] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page manages the local panel's connection to ComfyGit Cloud."),
            t("p", null, "Use it to configure the cloud URL, sign in or create an account, and inspect the currently linked cloud identity."),
            t("p", null, [
              b("Publishing revisions happens from the separate "),
              t("strong", null, "Publish"),
              b(" page.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), x8 = /* @__PURE__ */ Ce(C8, [["__scopeId", "data-v-6a8d04d9"]]), S8 = { class: "publish-card" }, I8 = { class: "row-actions" }, E8 = { class: "publish-meta" }, T8 = /* @__PURE__ */ _e({
  __name: "PublishSection",
  props: {
    environmentName: {},
    branchName: {}
  },
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { user: n, isAuthenticated: l } = dc(), r = $(!1), c = A(() => {
      var u;
      return ((u = n.value) == null ? void 0 : u.email) || "Not signed in";
    });
    return (u, d) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, {
            title: "PUBLISH REVISION",
            "show-info": !0,
            onInfoClick: d[0] || (d[0] = (v) => r.value = !0)
          }, {
            actions: p(() => [
              t("div", {
                class: Ne(["auth-chip", { authenticated: Qe(l) }])
              }, m(c.value), 3)
            ]),
            _: 1
          })
        ]),
        content: p(() => [
          k(kt, { title: "PUBLISH" }, {
            default: p(() => [
              t("div", S8, [
                Qe(l) ? (a(), i(j, { key: 1 }, [
                  d[8] || (d[8] = t("div", { class: "blocked-title" }, "PUBLICATION FLOW NEXT", -1)),
                  d[9] || (d[9] = t("div", { class: "blocked-copy" }, " The local account bridge is active. Revision packaging and publish submission should be wired here next, using the current environment manifest and workflow contracts. ", -1)),
                  t("div", E8, [
                    t("div", null, [
                      d[6] || (d[6] = t("span", { class: "publish-label" }, "Environment:", -1)),
                      b(" " + m(e.environmentName || "Unknown"), 1)
                    ]),
                    t("div", null, [
                      d[7] || (d[7] = t("span", { class: "publish-label" }, "Branch:", -1)),
                      b(" " + m(e.branchName || "Detached"), 1)
                    ])
                  ])
                ], 64)) : (a(), i(j, { key: 0 }, [
                  d[4] || (d[4] = t("div", { class: "blocked-title" }, "SIGN IN REQUIRED", -1)),
                  d[5] || (d[5] = t("div", { class: "blocked-copy" }, " Publishing revisions is blocked until this local panel is connected to a ComfyGit Cloud account. ", -1)),
                  t("div", I8, [
                    k(be, {
                      variant: "primary",
                      size: "xs",
                      onClick: d[1] || (d[1] = (v) => o("navigate", "account"))
                    }, {
                      default: p(() => [...d[3] || (d[3] = [
                        b(" Sign In ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ], 64))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      k(Qt, {
        show: r.value,
        title: "Publish",
        onClose: d[2] || (d[2] = (v) => r.value = !1)
      }, {
        content: p(() => [...d[10] || (d[10] = [
          t("div", { class: "info-content" }, [
            t("p", null, "This page is the local bridge into ComfyGit Cloud publication."),
            t("p", null, [
              b("Use "),
              t("strong", null, "Account"),
              b(" to sign in. This page should then publish immutable revisions to cloud and show lightweight publication status.")
            ]),
            t("p", null, "Targets, deployments, and runtime management remain cloud-owned.")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), M8 = /* @__PURE__ */ Ce(T8, [["__scopeId", "data-v-6fc0306f"]]), P8 = { class: "base-tabs" }, R8 = ["disabled", "onClick"], N8 = {
  key: 0,
  class: "base-tabs__badge"
}, L8 = /* @__PURE__ */ _e({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || n("update:modelValue", r);
    }
    return (r, c) => (a(), i("div", P8, [
      (a(!0), i(j, null, we(e.tabs, (u) => (a(), i("button", {
        key: u.id,
        class: Ne([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        b(m(u.label) + " ", 1),
        u.badge ? (a(), i("span", N8, m(u.badge), 1)) : h("", !0)
      ], 10, R8))), 128))
    ]));
  }
}), El = /* @__PURE__ */ Ce(L8, [["__scopeId", "data-v-ad5e6cad"]]), D8 = { class: "commit-list" }, U8 = /* @__PURE__ */ _e({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), i("div", D8, [
      et(s.$slots, "default", {}, void 0)
    ]));
  }
}), mc = /* @__PURE__ */ Ce(U8, [["__scopeId", "data-v-8c5ee761"]]), O8 = { class: "commit-message" }, A8 = { class: "commit-date" }, z8 = /* @__PURE__ */ _e({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l() {
      o.clickable && n("click");
    }
    return (r, c) => (a(), i("div", {
      class: Ne(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      k(ac, { hash: e.hash }, null, 8, ["hash"]),
      t("span", O8, m(e.message), 1),
      t("span", A8, m(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = st(() => {
        }, ["stop"]))
      }, [
        et(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), fc = /* @__PURE__ */ Ce(z8, [["__scopeId", "data-v-dd7c621b"]]), V8 = /* @__PURE__ */ _e({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = A(() => `HISTORY (${s.currentRef || "detached"})`);
    return (n, l) => (a(), N(Tt, null, ts({
      content: p(() => [
        e.commits.length === 0 ? (a(), N(is, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), N(mc, { key: 1 }, {
          default: p(() => [
            (a(!0), i(j, null, we(e.commits, (r) => (a(), N(fc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => n.$emit("select", r)
            }, {
              actions: p(() => [
                k(be, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => n.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: p(() => [...l[0] || (l[0] = [
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
        fn: p(() => [
          k(Mt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), F8 = /* @__PURE__ */ Ce(V8, [["__scopeId", "data-v-fa4bf3a1"]]), B8 = { class: "branch-create-form" }, W8 = { class: "form-actions" }, G8 = /* @__PURE__ */ _e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = $(""), l = A(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), i("div", B8, [
      k(ks, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", W8, [
        k(be, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: p(() => [...d[1] || (d[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(be, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: p(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), j8 = /* @__PURE__ */ Ce(G8, [["__scopeId", "data-v-7c500394"]]), H8 = { class: "branch-list-item__indicator" }, q8 = { class: "branch-list-item__name" }, K8 = {
  key: 0,
  class: "branch-list-item__actions"
}, J8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, Q8 = /* @__PURE__ */ _e({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), i("div", {
      class: Ne(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", H8, m(e.isCurrent ? "●" : "○"), 1),
      t("span", q8, m(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), i("div", K8, [
        et(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", J8, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Y8 = /* @__PURE__ */ Ce(Q8, [["__scopeId", "data-v-c6581a24"]]), X8 = { class: "header-info" }, Z8 = { class: "branch-name" }, e5 = {
  key: 0,
  class: "current-badge"
}, t5 = { class: "branch-meta" }, s5 = { key: 0 }, o5 = {
  key: 0,
  class: "meta-note"
}, n5 = {
  key: 0,
  class: "loading"
}, a5 = {
  key: 1,
  class: "empty-state"
}, l5 = /* @__PURE__ */ _e({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = mt(), n = $([]), l = $(!1), r = $(!0);
    return nt(async () => {
      try {
        const c = await o(s.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (a(), N(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: p(() => [
        t("div", X8, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Z8, m(e.branchName), 1),
          e.isCurrent ? (a(), i("span", e5, "CURRENT")) : h("", !0)
        ]),
        k(Pe, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: p(() => [...u[5] || (u[5] = [
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
      body: p(() => [
        t("div", t5, [
          r.value ? (a(), i("span", s5, "Loading...")) : (a(), i(j, { key: 1 }, [
            t("span", null, m(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", o5, "(showing first " + m(n.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", n5, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", a5, " No commits found on this branch ")) : (a(), N(mc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: p(() => [
            (a(!0), i(j, null, we(n.value, (d) => (a(), N(fc, {
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
      footer: p(() => [
        e.isCurrent ? h("", !0) : (a(), N(be, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: p(() => [...u[6] || (u[6] = [
            b(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (a(), N(Pe, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: p(() => [...u[7] || (u[7] = [
            b(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), i5 = /* @__PURE__ */ Ce(l5, [["__scopeId", "data-v-2e5437cc"]]), r5 = {
  key: 2,
  class: "branch-list"
}, c5 = /* @__PURE__ */ _e({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = $(!1), l = $(null);
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
    return (f, g) => (a(), N(Tt, null, ts({
      content: p(() => [
        n.value ? (a(), N(j8, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : h("", !0),
        e.branches.length === 0 ? (a(), N(is, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", r5, [
          (a(!0), i(j, null, we(e.branches, (w) => (a(), N(Y8, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => u(w)
          }, {
            actions: p(() => [
              w.is_current ? h("", !0) : (a(), N(be, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: st((y) => o("switch", w.name), ["stop"])
              }, {
                default: p(() => [...g[3] || (g[3] = [
                  b(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (a(), N(i5, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: g[1] || (g[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: v
        }, null, 8, ["branch-name", "is-current"])) : h("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: p(() => [
          k(Mt, { title: "BRANCHES" }, {
            actions: p(() => [
              n.value ? h("", !0) : (a(), N(be, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: g[0] || (g[0] = (w) => n.value = !0)
              }, {
                default: p(() => [...g[2] || (g[2] = [
                  b(" + Create Branch ", -1)
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
}), u5 = /* @__PURE__ */ Ce(c5, [["__scopeId", "data-v-a3de96cc"]]);
function vc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const d5 = { class: "remote-url-display" }, m5 = ["title"], f5 = ["title"], v5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, p5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, g5 = /* @__PURE__ */ _e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = $(!1), n = A(() => {
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
    return (r, c) => (a(), i("div", d5, [
      t("span", {
        class: "url-text",
        title: e.url
      }, m(n.value), 9, m5),
      t("button", {
        class: Ne(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", p5, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", v5, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, f5)
    ]));
  }
}), h5 = /* @__PURE__ */ Ce(g5, [["__scopeId", "data-v-7768a58d"]]), y5 = { class: "remote-title" }, w5 = {
  key: 0,
  class: "default-badge"
}, _5 = {
  key: 1,
  class: "sync-badge"
}, k5 = {
  key: 0,
  class: "ahead"
}, b5 = {
  key: 1,
  class: "behind"
}, $5 = {
  key: 1,
  class: "synced"
}, C5 = ["href"], x5 = {
  key: 1,
  class: "remote-url-text"
}, S5 = /* @__PURE__ */ _e({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = A(() => s.fetchingRemote === s.remote.name), n = A(() => s.remote.is_default), l = A(() => s.syncStatus && s.syncStatus.behind > 0), r = A(() => s.syncStatus && s.syncStatus.ahead > 0), c = A(() => s.remote.push_url !== s.remote.fetch_url), u = A(() => {
      const v = s.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = A(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (a(), N(At, {
      status: n.value ? "synced" : void 0
    }, ts({
      icon: p(() => [
        b(m(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: p(() => [
        t("div", y5, [
          t("span", null, m(e.remote.name), 1),
          n.value ? (a(), i("span", w5, "DEFAULT")) : h("", !0),
          e.syncStatus ? (a(), i("span", _5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", k5, "↑" + m(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", b5, "↓" + m(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (a(), i("span", $5, "✓ synced"))
          ])) : h("", !0)
        ])
      ]),
      subtitle: p(() => [
        u.value ? (a(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: f[0] || (f[0] = st(() => {
          }, ["stop"]))
        }, m(d.value), 9, C5)) : (a(), i("span", x5, m(d.value), 1))
      ]),
      actions: p(() => [
        k(be, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (g) => v.$emit("fetch", e.remote.name))
        }, {
          default: p(() => [...f[6] || (f[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(be, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (g) => v.$emit("pull", e.remote.name))
        }, {
          default: p(() => [
            b(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(be, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (g) => v.$emit("push", e.remote.name))
        }, {
          default: p(() => [
            b(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(be, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (g) => v.$emit("edit", e.remote.name))
        }, {
          default: p(() => [...f[7] || (f[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? h("", !0) : (a(), N(be, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (g) => v.$emit("remove", e.remote.name))
        }, {
          default: p(() => [...f[8] || (f[8] = [
            b(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: p(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), N(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: p(() => [
              k(h5, {
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
}), I5 = /* @__PURE__ */ Ce(S5, [["__scopeId", "data-v-8310f3a8"]]), E5 = { class: "remote-form" }, T5 = { class: "form-header" }, M5 = { class: "form-body" }, P5 = {
  key: 0,
  class: "form-error"
}, R5 = { class: "form-actions" }, N5 = /* @__PURE__ */ _e({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = $({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = $(!1), c = $(null);
    bt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = A(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (v, f) => (a(), i("div", E5, [
      t("div", T5, [
        k(os, null, {
          default: p(() => [
            b(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", M5, [
        k(vt, {
          label: "Remote Name",
          required: ""
        }, {
          default: p(() => [
            k(it, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(vt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: p(() => [
            k(it, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(vt, { label: "Push URL (optional)" }, {
          default: p(() => [
            k(it, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), i("div", P5, m(c.value), 1)) : h("", !0)
      ]),
      t("div", R5, [
        k(be, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: p(() => [
            b(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(be, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (g) => v.$emit("cancel"))
        }, {
          default: p(() => [...f[4] || (f[4] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), L5 = /* @__PURE__ */ Ce(N5, [["__scopeId", "data-v-56021b18"]]), D5 = { class: "conflict-summary-box" }, U5 = { class: "summary-header" }, O5 = { class: "summary-text" }, A5 = { key: 0 }, z5 = {
  key: 1,
  class: "all-resolved"
}, V5 = { class: "summary-progress" }, F5 = { class: "progress-bar" }, B5 = { class: "progress-text" }, W5 = /* @__PURE__ */ _e({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = A(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (n, l) => (a(), i("div", D5, [
      t("div", U5, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", O5, [
          t("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", A5, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (a(), i("p", z5, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      t("div", V5, [
        t("div", F5, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", B5, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), G5 = /* @__PURE__ */ Ce(W5, [["__scopeId", "data-v-4e9e6cc9"]]), j5 = { class: "modal-header" }, H5 = { class: "modal-title" }, q5 = { class: "modal-body" }, K5 = {
  key: 0,
  class: "error-box"
}, J5 = {
  key: 0,
  class: "error-hint"
}, Q5 = {
  key: 1,
  class: "loading-state"
}, Y5 = { class: "commit-summary" }, X5 = {
  key: 0,
  class: "commits-section"
}, Z5 = { class: "commit-list" }, eS = { class: "commit-hash" }, tS = { class: "commit-message" }, sS = { class: "commit-date" }, oS = {
  key: 1,
  class: "changes-section"
}, nS = {
  key: 0,
  class: "change-group",
  open: ""
}, aS = { class: "change-count" }, lS = { class: "change-list" }, iS = {
  key: 0,
  class: "conflict-badge"
}, rS = {
  key: 1,
  class: "change-group"
}, cS = { class: "change-count" }, uS = { class: "change-list" }, dS = {
  key: 2,
  class: "change-group"
}, mS = { class: "change-count" }, fS = { class: "change-list" }, vS = {
  key: 3,
  class: "strategy-section"
}, pS = { class: "radio-group" }, gS = { class: "radio-option" }, hS = { class: "radio-option" }, yS = { class: "radio-option" }, wS = {
  key: 4,
  class: "up-to-date"
}, _S = { class: "modal-actions" }, bi = "comfygit.pullModelStrategy", kS = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = $(localStorage.getItem(bi) || "skip");
    bt(l, (C) => {
      localStorage.setItem(bi, C);
    });
    const r = A(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = A(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), u = A(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = A(() => {
      var C;
      return c.value > 0 || u.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = A(() => o.preview && vc(o.preview) ? o.preview : null), f = A(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), g = A(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = A(
      () => f.value > 0 && g.value === f.value
    ), y = A(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(C) {
      if (!v.value) return !1;
      const x = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((B) => B.name === x);
    }
    function S(C) {
      const x = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: C, resolutions: x });
    }
    return (C, x) => {
      var B, E;
      return a(), N(Ut, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (R) => C.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = st(() => {
            }, ["stop"]))
          }, [
            t("div", j5, [
              t("h3", H5, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (R) => C.$emit("close"))
              }, "✕")
            ]),
            t("div", q5, [
              e.error ? (a(), i("div", K5, [
                x[13] || (x[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  x[12] || (x[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, m(e.error), 1),
                  r.value ? (a(), i("p", J5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (a(), i("div", Q5, [...x[14] || (x[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (B = e.preview) != null && B.has_uncommitted_changes ? (a(), i(j, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), i(j, { key: 3 }, [
                t("div", Y5, [
                  x[17] || (x[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", X5, [
                  x[18] || (x[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", Z5, [
                    (a(!0), i(j, null, we(e.preview.commits, (R) => (a(), i("div", {
                      key: R.hash,
                      class: "commit-item"
                    }, [
                      t("span", eS, m(R.short_hash || R.hash.slice(0, 7)), 1),
                      t("span", tS, m(R.message), 1),
                      t("span", sS, m(R.date_relative || R.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (a(), i("div", oS, [
                  x[22] || (x[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), i("details", nS, [
                    t("summary", null, [
                      x[19] || (x[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", aS, m(c.value) + " changes", 1)
                    ]),
                    t("div", lS, [
                      (a(!0), i(j, null, we(e.preview.changes.workflows.added, (R) => (a(), i("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + m(R), 1))), 128)),
                      (a(!0), i(j, null, we(e.preview.changes.workflows.modified, (R) => (a(), i("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + m(R) + " ", 1),
                        _(R) ? (a(), i("span", iS, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (a(!0), i(j, null, we(e.preview.changes.workflows.deleted, (R) => (a(), i("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + m(R), 1))), 128))
                    ])
                  ])) : h("", !0),
                  u.value > 0 ? (a(), i("details", rS, [
                    t("summary", null, [
                      x[20] || (x[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", cS, m(u.value) + " to install", 1)
                    ]),
                    t("div", uS, [
                      (a(!0), i(j, null, we(e.preview.changes.nodes.to_install, (R) => (a(), i("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + m(R), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", dS, [
                    t("summary", null, [
                      x[21] || (x[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", mS, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", fS, [
                      (a(!0), i(j, null, we(e.preview.changes.models.referenced, (R) => (a(), i("div", {
                        key: R,
                        class: "change-item"
                      }, m(R), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (a(), N(G5, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", vS, [
                  x[27] || (x[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", pS, [
                    t("label", gS, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (R) => l.value = R),
                        value: "all"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[23] || (x[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", hS, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (R) => l.value = R),
                        value: "required"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[24] || (x[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", yS, [
                      St(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (R) => l.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[25] || (x[25] = t("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", wS, [
                  x[29] || (x[29] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            t("div", _S, [
              k(be, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (R) => C.$emit("close"))
              }, {
                default: p(() => [...x[30] || (x[30] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(j, { key: 0 }, [
                k(be, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (R) => S(!1))
                }, {
                  default: p(() => [...x[31] || (x[31] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(be, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (R) => S(!0))
                }, {
                  default: p(() => [...x[32] || (x[32] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), N(be, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: x[7] || (x[7] = (R) => S(!0))
              }, {
                default: p(() => [...x[33] || (x[33] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(j, { key: 2 }, [
                v.value && !w.value ? (a(), N(be, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (R) => n("openConflictResolution"))
                }, {
                  default: p(() => [
                    b(" Resolve Conflicts (" + m(g.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), N(be, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !y.value,
                  onClick: x[9] || (x[9] = (R) => S(!1))
                }, {
                  default: p(() => [...x[34] || (x[34] = [
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
}), bS = /* @__PURE__ */ Ce(kS, [["__scopeId", "data-v-1d633bba"]]), $S = { class: "modal-header" }, CS = { class: "modal-title" }, xS = { class: "modal-body" }, SS = {
  key: 0,
  class: "loading-state"
}, IS = {
  key: 1,
  class: "warning-box"
}, ES = {
  key: 0,
  class: "commits-section"
}, TS = { class: "commit-list" }, MS = { class: "commit-hash" }, PS = { class: "commit-message" }, RS = { class: "commit-date" }, NS = { class: "force-option" }, LS = { class: "checkbox-option" }, DS = { class: "commit-summary" }, US = { key: 0 }, OS = { key: 1 }, AS = {
  key: 0,
  class: "info-box"
}, zS = {
  key: 1,
  class: "commits-section"
}, VS = { class: "commit-list" }, FS = { class: "commit-hash" }, BS = { class: "commit-message" }, WS = { class: "commit-date" }, GS = {
  key: 2,
  class: "up-to-date"
}, jS = { class: "modal-actions" }, HS = /* @__PURE__ */ _e({
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
    const o = s, n = $(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, c) => {
      var u, d, v;
      return a(), N(Ut, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (f) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = st(() => {
            }, ["stop"]))
          }, [
            t("div", $S, [
              t("h3", CS, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (f) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", xS, [
              e.loading ? (a(), i("div", SS, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), i("div", IS, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), i(j, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), i("div", ES, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", TS, [
                    (a(!0), i(j, null, we(e.preview.commits, (f) => (a(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", MS, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", PS, m(f.message), 1),
                      t("span", RS, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                t("div", NS, [
                  t("label", LS, [
                    St(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (f) => n.value = f)
                    }, null, 512), [
                      [jn, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), i(j, { key: 3 }, [
                t("div", DS, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), i("span", US, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", OS, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), i("div", AS, [...c[15] || (c[15] = [
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
                e.preview.commits_ahead > 0 ? (a(), i("div", zS, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", VS, [
                    (a(!0), i(j, null, we(e.preview.commits, (f) => (a(), i("div", {
                      key: f.hash,
                      class: "commit-item"
                    }, [
                      t("span", FS, m(f.short_hash || f.hash.slice(0, 7)), 1),
                      t("span", BS, m(f.message), 1),
                      t("span", WS, m(f.date_relative || f.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), i("div", GS, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            t("div", jS, [
              k(be, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (f) => r.$emit("close"))
              }, {
                default: p(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (a(), i(j, { key: 0 }, [
                k(be, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (f) => r.$emit("pull-first"))
                }, {
                  default: p(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(be, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (f) => l(!0))
                }, {
                  default: p(() => [...c[20] || (c[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), N(be, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (f) => l(!1))
              }, {
                default: p(() => [...c[21] || (c[21] = [
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
}), qS = /* @__PURE__ */ Ce(HS, [["__scopeId", "data-v-3c2e35ab"]]), KS = { class: "resolution-choice-group" }, JS = ["disabled"], QS = ["disabled"], YS = /* @__PURE__ */ _e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), i("div", KS, [
      t("button", {
        class: Ne(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, JS),
      t("button", {
        class: Ne(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, QS)
    ]));
  }
}), XS = /* @__PURE__ */ Ce(YS, [["__scopeId", "data-v-985715ed"]]), ZS = { class: "conflict-header" }, e4 = { class: "conflict-info" }, t4 = { class: "workflow-name" }, s4 = { class: "conflict-description" }, o4 = {
  key: 0,
  class: "resolved-badge"
}, n4 = { class: "resolved-text" }, a4 = { class: "conflict-hashes" }, l4 = { class: "hash-item" }, i4 = { class: "hash-item" }, r4 = { class: "conflict-actions" }, c4 = /* @__PURE__ */ _e({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = $(o.resolution);
    bt(() => o.resolution, (d) => {
      l.value = d;
    }), bt(l, (d) => {
      d && n("resolve", d);
    });
    const r = A(() => l.value !== null), c = A(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = A(() => {
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
      var f, g;
      return a(), i("div", {
        class: Ne(["conflict-item", { resolved: r.value }])
      }, [
        t("div", ZS, [
          v[2] || (v[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", e4, [
            t("code", t4, m(e.conflict.name) + ".json", 1),
            t("div", s4, m(c.value), 1)
          ]),
          r.value ? (a(), i("div", o4, [
            v[1] || (v[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", n4, m(u.value), 1)
          ])) : h("", !0)
        ]),
        t("div", a4, [
          t("span", l4, [
            v[3] || (v[3] = b("Your: ", -1)),
            t("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", i4, [
            v[4] || (v[4] = b("Theirs: ", -1)),
            t("code", null, m(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", r4, [
          k(XS, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), u4 = /* @__PURE__ */ Ce(c4, [["__scopeId", "data-v-506d3bbf"]]), d4 = { class: "resolution-content" }, m4 = {
  key: 0,
  class: "error-box"
}, f4 = { class: "resolution-header" }, v4 = { class: "header-stats" }, p4 = { class: "stat" }, g4 = { class: "stat-value" }, h4 = { class: "stat resolved" }, y4 = { class: "stat-value" }, w4 = {
  key: 0,
  class: "stat pending"
}, _4 = { class: "stat-value" }, k4 = { class: "conflicts-list" }, b4 = {
  key: 1,
  class: "all-resolved-message"
}, $4 = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = A(() => o.resolutions.size), r = A(() => o.workflowConflicts.length - l.value), c = A(() => l.value === o.workflowConflicts.length), u = A(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const y = o.resolutions.get(w);
      return (y == null ? void 0 : y.resolution) ?? null;
    }
    function v(w, y) {
      n("resolve", w, y);
    }
    function f() {
      n("close");
    }
    function g() {
      n("apply");
    }
    return (w, y) => (a(), N(Ct, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: p(() => [
        t("div", d4, [
          e.error ? (a(), i("div", m4, [
            y[1] || (y[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              y[0] || (y[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, m(e.error), 1)
            ])
          ])) : h("", !0),
          t("div", f4, [
            t("div", v4, [
              t("div", p4, [
                t("span", g4, m(e.workflowConflicts.length), 1),
                y[2] || (y[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", h4, [
                t("span", y4, m(l.value), 1),
                y[3] || (y[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", w4, [
                t("span", _4, m(r.value), 1),
                y[4] || (y[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", k4, [
            (a(!0), i(j, null, we(e.workflowConflicts, (_) => (a(), N(u4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (S) => v(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), i("div", b4, [
            y[6] || (y[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: p(() => [
        k(Pe, {
          variant: "secondary",
          onClick: f
        }, {
          default: p(() => [...y[7] || (y[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Pe, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: p(() => [
            b(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), C4 = /* @__PURE__ */ Ce($4, [["__scopeId", "data-v-c58d150d"]]), x4 = { class: "node-conflict-item" }, S4 = { class: "node-header" }, I4 = { class: "node-name" }, E4 = { class: "node-id" }, T4 = { class: "version-comparison" }, M4 = { class: "version yours" }, P4 = { class: "version theirs" }, R4 = { class: "chosen-version" }, N4 = { class: "chosen" }, L4 = { class: "chosen-reason" }, D4 = { class: "affected-workflows" }, U4 = { class: "wf-source" }, O4 = { class: "wf-version" }, A4 = /* @__PURE__ */ _e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), i("div", x4, [
      t("div", S4, [
        t("code", I4, m(e.conflict.node_name), 1),
        t("span", E4, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      t("div", T4, [
        t("div", M4, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", P4, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      t("div", R4, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", N4, m(e.conflict.chosen_version), 1),
        t("span", L4, m(e.conflict.chosen_reason), 1)
      ]),
      t("details", D4, [
        t("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), i(j, null, we(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            t("code", null, m(n.name), 1),
            t("span", U4, "(" + m(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", O4, "needs v" + m(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), z4 = /* @__PURE__ */ Ce(A4, [["__scopeId", "data-v-8b626725"]]), V4 = { class: "validation-content" }, F4 = {
  key: 0,
  class: "compatible-message"
}, B4 = { class: "conflicts-list" }, W4 = {
  key: 2,
  class: "warnings-section"
}, G4 = /* @__PURE__ */ _e({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = A(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (a(), N(Ct, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: p(() => [
        t("div", V4, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", F4, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(j, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", B4, [
              (a(!0), i(j, null, we(e.validation.node_conflicts, (u) => (a(), N(z4, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", W4, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), i(j, null, we(e.validation.warnings, (u, d) => (a(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: p(() => [
        k(Pe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: p(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Pe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: p(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(Pe, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
        }, {
          default: p(() => [
            b(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), j4 = /* @__PURE__ */ Ce(G4, [["__scopeId", "data-v-fefd26ed"]]), H4 = {
  key: 0,
  class: "embedded-toolbar"
}, q4 = { class: "embedded-toolbar-search" }, K4 = { key: 0 }, J4 = /* @__PURE__ */ _e({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: n,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: f,
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: y
    } = mt(), _ = $([]), S = $(null), C = $({}), x = $(!1), B = $(null), E = $(""), R = $(!1), L = $(null), V = $(!1), K = $("add"), z = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), W = A(() => {
      if (!E.value.trim()) return _.value;
      const O = E.value.toLowerCase();
      return _.value.filter(
        (G) => G.name.toLowerCase().includes(O) || G.fetch_url.toLowerCase().includes(O) || G.push_url.toLowerCase().includes(O)
      );
    });
    async function X() {
      x.value = !0, B.value = null;
      try {
        const O = await n();
        _.value = O.remotes, S.value = O.current_branch_tracking || null, await Promise.all(
          O.remotes.map(async (G) => {
            const Ie = await d(G.name);
            Ie && (C.value[G.name] = Ie);
          })
        );
      } catch (O) {
        B.value = O instanceof Error ? O.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function te() {
      K.value = "add", z.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function re(O) {
      const G = _.value.find((Ie) => Ie.name === O);
      G && (K.value = "edit", z.value = {
        name: G.name,
        fetchUrl: G.fetch_url,
        pushUrl: G.push_url
      }, V.value = !0);
    }
    async function he(O) {
      try {
        K.value === "add" ? await l(O.name, O.fetchUrl) : await c(O.name, O.fetchUrl, O.pushUrl || void 0), V.value = !1, await X();
      } catch (G) {
        B.value = G instanceof Error ? G.message : "Operation failed";
      }
    }
    function ne() {
      V.value = !1, z.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(O) {
      L.value = O;
      try {
        await u(O);
        const G = await d(O);
        G && (C.value[O] = G), o("toast", `✓ Fetched from ${O}`, "success");
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Fetch failed", "error");
      } finally {
        L.value = null;
      }
    }
    async function me(O) {
      if (confirm(`Remove remote "${O}"?`))
        try {
          await r(O), await X();
        } catch (G) {
          B.value = G instanceof Error ? G.message : "Failed to remove remote";
        }
    }
    function Re() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ae = $("idle"), pe = A(() => ae.value === "pull_preview"), ue = A(
      () => ae.value === "resolving" || ae.value === "validating"
    ), Oe = A(
      () => ae.value === "validation_review" || ae.value === "executing"
    ), ee = $(!1), se = $(null), P = $(!1), U = $(null), J = $(!1), T = $(null), M = $(null), ce = $(/* @__PURE__ */ new Map()), Ve = $(null), je = $(null), F = A(() => T.value && vc(T.value) ? T.value : null);
    async function Y(O) {
      U.value = O, ae.value = "pull_preview", J.value = !0, T.value = null, M.value = null;
      try {
        T.value = await v(O);
      } catch (G) {
        M.value = G instanceof Error ? G.message : "Failed to load pull preview";
      } finally {
        J.value = !1;
      }
    }
    function ve() {
      ae.value = "idle", T.value = null, M.value = null, U.value = null;
    }
    async function Ee(O) {
      if (!U.value) return;
      ae.value = "executing", M.value = null;
      const G = U.value;
      try {
        const Ie = await f(G, O);
        if (Ie.rolled_back) {
          M.value = `Pull failed and was rolled back: ${Ie.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Me(), ae.value = "idle", o("toast", `✓ Pulled from ${G}`, "success"), await X();
      } catch (Ie) {
        M.value = Ie instanceof Error ? Ie.message : "Pull failed", ae.value = "pull_preview";
      }
    }
    function $e() {
      F.value && (ae.value = "resolving", je.value = null);
    }
    function Se(O, G) {
      ce.value.set(O, { name: O, resolution: G });
    }
    function Le() {
      ae.value = "pull_preview";
    }
    async function Ue() {
      ae.value = "validating", je.value = null;
      try {
        const O = Array.from(ce.value.values());
        Ve.value = await y(U.value, O), ae.value = "validation_review";
      } catch (O) {
        je.value = O instanceof Error ? O.message : "Validation failed", ae.value = "resolving";
      }
    }
    async function De() {
      ae.value = "executing";
      const O = U.value;
      try {
        const G = Array.from(ce.value.values()), Ie = await f(O, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: G
        });
        if (Ie.rolled_back) {
          M.value = `Pull failed and was rolled back: ${Ie.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Me(), ae.value = "idle", o("toast", `✓ Pulled from ${O}`, "success"), await X();
      } catch (G) {
        M.value = G instanceof Error ? G.message : "Pull failed", ae.value = "validation_review";
      }
    }
    function Te() {
      ae.value = "resolving";
    }
    function Fe() {
      Me(), ae.value = "idle";
    }
    function Me() {
      ce.value.clear(), Ve.value = null, je.value = null, M.value = null, T.value = null, U.value = null;
    }
    async function ye(O) {
      U.value = O, ee.value = !0, J.value = !0, se.value = null;
      try {
        se.value = await g(O);
      } catch (G) {
        B.value = G instanceof Error ? G.message : "Failed to load push preview";
      } finally {
        J.value = !1;
      }
    }
    function Z() {
      ee.value = !1, se.value = null, U.value = null;
    }
    async function Be(O) {
      if (!U.value) return;
      P.value = !0;
      const G = U.value;
      try {
        await w(G, O), Z(), o("toast", `✓ Pushed to ${G}`, "success"), await X();
      } catch (Ie) {
        o("toast", Ie instanceof Error ? Ie.message : "Push failed", "error");
      } finally {
        P.value = !1;
      }
    }
    function D() {
      const O = U.value;
      Z(), O && Y(O);
    }
    return nt(X), (O, G) => (a(), i(j, null, [
      k(Tt, null, ts({
        content: p(() => [
          x.value ? (a(), N($s, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (a(), N(Cs, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            e.embedded && !V.value ? (a(), i("div", H4, [
              t("div", q4, [
                k(co, {
                  modelValue: E.value,
                  "onUpdate:modelValue": G[2] || (G[2] = (Ie) => E.value = Ie),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              k(be, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: p(() => [...G[5] || (G[5] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            V.value ? (a(), N(L5, {
              key: 1,
              mode: K.value,
              "remote-name": z.value.name,
              "fetch-url": z.value.fetchUrl,
              "push-url": z.value.pushUrl,
              onSubmit: he,
              onCancel: ne
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            _.value.length && !V.value ? (a(), N(gn, {
              key: 2,
              variant: "compact"
            }, {
              default: p(() => [
                b(" Total: " + m(_.value.length) + " remote" + m(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), i("span", K4, " • Tracking: " + m(S.value.remote) + "/" + m(S.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            W.value.length && !V.value ? (a(), N(kt, {
              key: 3,
              title: "REMOTES",
              count: W.value.length
            }, {
              default: p(() => [
                (a(!0), i(j, null, we(W.value, (Ie) => (a(), N(I5, {
                  key: Ie.name,
                  remote: Ie,
                  "sync-status": C.value[Ie.name],
                  "fetching-remote": L.value,
                  onFetch: Q,
                  onEdit: re,
                  onRemove: me,
                  onPull: Y,
                  onPush: ye
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !W.value.length && !V.value ? (a(), N(is, {
              key: 4,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: p(() => [
                k(be, {
                  variant: "primary",
                  onClick: te
                }, {
                  default: p(() => [...G[6] || (G[6] = [
                    b(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: p(() => [
            k(Mt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: G[0] || (G[0] = (Ie) => R.value = !0)
            }, {
              actions: p(() => [
                V.value ? h("", !0) : (a(), N(be, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: te
                }, {
                  default: p(() => [...G[4] || (G[4] = [
                    b(" + Add Remote ", -1)
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
          fn: p(() => [
            V.value ? h("", !0) : (a(), N(co, {
              key: 0,
              modelValue: E.value,
              "onUpdate:modelValue": G[1] || (G[1] = (Ie) => E.value = Ie),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      k(Qt, {
        show: R.value,
        title: "About Git Remotes",
        onClose: G[3] || (G[3] = (Ie) => R.value = !1)
      }, {
        content: p(() => [...G[7] || (G[7] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: p(() => [
          k(be, {
            variant: "link",
            onClick: Re
          }, {
            default: p(() => [...G[8] || (G[8] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(bS, {
        show: pe.value,
        "remote-name": U.value || "",
        preview: T.value,
        loading: J.value,
        pulling: ae.value === "executing",
        error: M.value,
        "conflict-resolutions": ce.value,
        onClose: ve,
        onPull: Ee,
        onOpenConflictResolution: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(qS, {
        show: ee.value,
        "remote-name": U.value || "",
        preview: se.value,
        loading: J.value,
        pushing: P.value,
        onClose: Z,
        onPush: Be,
        onPullFirst: D
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ue.value && F.value ? (a(), N(C4, {
        key: 0,
        "workflow-conflicts": F.value.workflow_conflicts,
        resolutions: ce.value,
        "operation-type": "pull",
        validating: ae.value === "validating",
        error: je.value,
        onClose: Le,
        onResolve: Se,
        onApply: Ue
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      Oe.value && Ve.value ? (a(), N(j4, {
        key: 1,
        validation: Ve.value,
        "operation-type": "pull",
        executing: ae.value === "executing",
        onProceed: De,
        onGoBack: Te,
        onCancel: Fe
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), Q4 = /* @__PURE__ */ Ce(J4, [["__scopeId", "data-v-7815d273"]]), Y4 = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = [
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" },
      { id: "remotes", label: "Remotes" }
    ], r = $(o.initialTab ?? "history");
    return bt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (a(), N(Tt, null, {
      header: p(() => [
        k(Mt, { title: "VERSION CONTROL" })
      ]),
      search: p(() => [
        k(El, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: p(() => [
        r.value === "history" ? (a(), N(F8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => n("select", d)),
          onCheckout: u[2] || (u[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), N(u5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => n("switch", d)),
          onCreate: u[4] || (u[4] = (d) => n("create", d)),
          onDelete: u[5] || (u[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), N(Q4, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d) => n("toast", d[0], d[1]))
        }))
      ]),
      _: 1
    }));
  }
});
async function pc(e) {
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
const X4 = { class: "text-viewer-wrapper" }, Z4 = ["disabled", "title"], eI = { class: "text-content" }, tI = /* @__PURE__ */ _e({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const s = e, o = $(null), n = $("idle");
    async function l() {
      if (s.content)
        try {
          await pc(s.content), n.value = "copied", setTimeout(() => {
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
    return (u, d) => (a(), i("div", X4, [
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
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy text"
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, Z4),
        t("pre", eI, m(e.content), 1)
      ], 544)
    ]));
  }
}), sI = /* @__PURE__ */ Ce(tI, [["__scopeId", "data-v-85a537ba"]]), oI = {
  key: 1,
  class: "manifest-viewer-shell"
}, nI = { class: "manifest-path" }, aI = /* @__PURE__ */ _e({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: s } = mt(), o = $(!1), n = $(null), l = $(!1), r = $({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, n.value = null;
      try {
        r.value = await s();
      } catch (u) {
        n.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return nt(c), (u, d) => (a(), i(j, null, [
      k(Tt, null, ts({
        content: p(() => [
          o.value ? (a(), N($s, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), N(Cs, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), N(is, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", oI, [
              k(sI, {
                content: r.value.content
              }, null, 8, ["content"])
            ]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: p(() => [
            k(Mt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: p(() => [
                k(be, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: p(() => [
                    b(m(o.value ? "Loading..." : "Refresh"), 1)
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
      k(Qt, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: p(() => [
          d[3] || (d[3] = t("p", null, [
            b(" This view shows the live "),
            t("strong", null, "pyproject.toml"),
            b(" from the current environment's "),
            t("strong", null, ".cec"),
            b(" directory. ")
          ], -1)),
          d[4] || (d[4] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          t("div", nI, [
            t("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: p(() => [
          k(be, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: p(() => [...d[7] || (d[7] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), lI = /* @__PURE__ */ Ce(aI, [["__scopeId", "data-v-814a8fdd"]]), iI = { class: "log-viewer-wrapper" }, rI = ["disabled", "title"], cI = /* @__PURE__ */ _e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = $(null), n = $("idle"), l = A(() => s.logs.map((v) => ({
      text: s.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Rt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    nt(r), bt(() => s.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await pc(v), n.value = "copied", setTimeout(() => {
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
    return (v, f) => (a(), i("div", iI, [
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
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, rI),
        (a(!0), i(j, null, we(l.value, (g, w) => (a(), i("div", {
          key: w,
          class: Ne(`log-line log-level-${g.level.toLowerCase()}`)
        }, m(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), gc = /* @__PURE__ */ Ce(cI, [["__scopeId", "data-v-5aaf1b88"]]), uI = /* @__PURE__ */ _e({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = mt(), r = $([]), c = $(!1), u = $(null), d = $(!1), v = $("production"), f = $(null), g = $(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const S = await o();
          v.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function y() {
      try {
        const S = await n();
        S.exists && (f.value = S.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        g.value = !0;
        try {
          await l(f.value);
        } catch (S) {
          console.error("Failed to open log file:", S);
        } finally {
          g.value = !1;
        }
      }
    }
    return nt(() => {
      w(), y();
    }), (S, C) => (a(), i(j, null, [
      k(Tt, null, ts({
        content: p(() => [
          c.value ? (a(), N($s, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), N(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length === 0 ? (a(), N(is, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), N(gc, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: p(() => [
            k(Mt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: C[0] || (C[0] = (x) => d.value = !0)
            }, {
              actions: p(() => [
                k(be, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || g.value,
                  title: "Open log file in default editor"
                }, {
                  default: p(() => [
                    b(m(g.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(be, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: p(() => [
                    b(m(c.value ? "Loading..." : "Refresh"), 1)
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
      k(Qt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (x) => d.value = !1)
      }, {
        content: p(() => [
          t("p", null, [
            C[3] || (C[3] = b(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, m(v.value), 1),
            C[4] || (C[4] = b(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
        actions: p(() => [
          k(be, {
            variant: "primary",
            onClick: C[1] || (C[1] = (x) => d.value = !1)
          }, {
            default: p(() => [...C[6] || (C[6] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $i = /* @__PURE__ */ _e({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: r
    } = mt(), c = e, u = $(c.initialTab ?? "workspace"), d = $([]), v = $(!1), f = $(null), g = $(!1), w = $(null), y = $(null), _ = $(!1), S = A(() => u.value === "workspace" ? w.value : y.value);
    async function C() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await n(void 0, 500);
      } catch (E) {
        f.value = E instanceof Error ? E.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function x() {
      try {
        const [E, R] = await Promise.all([
          o(),
          l()
        ]);
        E.exists && (w.value = E.path), R.exists && (y.value = R.path);
      } catch {
      }
    }
    async function B() {
      if (S.value) {
        _.value = !0;
        try {
          await r(S.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          _.value = !1;
        }
      }
    }
    return bt(u, () => {
      C();
    }), bt(() => c.initialTab, (E) => {
      E && (u.value = E);
    }), nt(() => {
      C(), x();
    }), (E, R) => (a(), i(j, null, [
      k(Tt, null, ts({
        content: p(() => [
          v.value ? (a(), N($s, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (a(), N(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            d.value.length === 0 ? (a(), N(is, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (a(), N(gc, {
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
          fn: p(() => [
            k(Mt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: R[0] || (R[0] = (L) => g.value = !0)
            }, {
              actions: p(() => [
                k(be, {
                  variant: "secondary",
                  size: "sm",
                  onClick: B,
                  disabled: !S.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: p(() => [
                    b(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(be, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: v.value
                }, {
                  default: p(() => [
                    b(m(v.value ? "Loading..." : "Refresh"), 1)
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
          fn: p(() => [
            k(El, {
              modelValue: u.value,
              "onUpdate:modelValue": R[1] || (R[1] = (L) => u.value = L),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      k(Qt, {
        show: g.value,
        title: "About Logs",
        onClose: R[3] || (R[3] = (L) => g.value = !1)
      }, {
        content: p(() => [...R[4] || (R[4] = [
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
        actions: p(() => [
          k(be, {
            variant: "primary",
            onClick: R[2] || (R[2] = (L) => g.value = !1)
          }, {
            default: p(() => [...R[5] || (R[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), dI = /* @__PURE__ */ _e({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const s = e, o = [
      { id: "manifest", label: "Manifest" },
      { id: "env", label: "Env Logs" },
      { id: "workspace", label: "Workspace Logs" },
      { id: "orchestrator", label: "Orchestrator Logs" }
    ], n = $(s.initialTab ?? "manifest"), l = $(!1);
    return bt(() => s.initialTab, (r) => {
      r && (n.value = r);
    }), (r, c) => (a(), i(j, null, [
      k(Tt, null, {
        header: p(() => [
          k(Mt, {
            title: "DIAGNOSTICS",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => l.value = !0)
          })
        ]),
        search: p(() => [
          k(El, {
            modelValue: n.value,
            "onUpdate:modelValue": c[1] || (c[1] = (u) => n.value = u),
            tabs: o
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          n.value === "manifest" ? (a(), N(lI, {
            key: 0,
            embedded: ""
          })) : n.value === "env" ? (a(), N(uI, {
            key: 1,
            embedded: ""
          })) : n.value === "workspace" ? (a(), N($i, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), N($i, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 1
      }),
      k(Qt, {
        show: l.value,
        title: "About Diagnostics",
        "max-width": "520px",
        onClose: c[3] || (c[3] = (u) => l.value = !1)
      }, {
        content: p(() => [...c[4] || (c[4] = [
          t("p", null, [
            t("strong", null, "Diagnostics"),
            b(" groups read-only inspection and log surfaces for the current environment and workspace. ")
          ], -1),
          t("p", null, " Use this area when you need to inspect what ComfyGit is tracking or debug environment and supervisor behavior without leaving the panel. ", -1),
          t("p", null, [
            t("strong", null, "Manifest"),
            t("br"),
            b(" Shows the live "),
            t("strong", null, "pyproject.toml"),
            b(" from the current environment's "),
            t("strong", null, ".cec"),
            b(" directory. This is useful for inspecting tracked workflow, model, node, and contract state. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Env Logs"),
            t("br"),
            b(" Shows logs for the currently active environment. Use these when debugging workflow execution, model resolution, node installation, or other environment-local issues. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Workspace Logs"),
            t("br"),
            b(" Shows workspace-wide events that affect more than one environment. ")
          ], -1),
          t("p", null, [
            t("strong", null, "Orchestrator Logs"),
            t("br"),
            b(" Shows supervisor and handoff logs for environment creation, switching, restarts, and other process-management behavior. ")
          ], -1)
        ])]),
        actions: p(() => [
          k(be, {
            variant: "primary",
            size: "sm",
            onClick: c[2] || (c[2] = (u) => l.value = !1)
          }, {
            default: p(() => [...c[5] || (c[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mI = { class: "header-info" }, fI = { class: "commit-hash" }, vI = {
  key: 0,
  class: "commit-refs"
}, pI = { class: "commit-message" }, gI = { class: "commit-date" }, hI = {
  key: 0,
  class: "loading"
}, yI = {
  key: 1,
  class: "changes-section"
}, wI = { class: "stats-row" }, _I = { class: "stat" }, kI = { class: "stat insertions" }, bI = { class: "stat deletions" }, $I = {
  key: 0,
  class: "change-group"
}, CI = {
  key: 1,
  class: "change-group"
}, xI = {
  key: 0,
  class: "version"
}, SI = {
  key: 2,
  class: "change-group"
}, II = { class: "change-item" }, EI = /* @__PURE__ */ _e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = mt(), n = $(null), l = $(!0), r = A(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = A(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return nt(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), N(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: p(() => {
        var v, f, g, w;
        return [
          t("div", mI, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", fI, m(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), i("span", vI, [
              (a(!0), i(j, null, we(n.value.refs, (y) => (a(), i("span", {
                key: y,
                class: "ref-badge"
              }, m(y), 1))), 128))
            ])) : h("", !0)
          ]),
          k(Pe, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (y) => u.$emit("close"))
          }, {
            default: p(() => [...d[5] || (d[5] = [
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
      body: p(() => {
        var v, f;
        return [
          t("div", pI, m(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          t("div", gI, m(((f = n.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", hI, "Loading details...")) : n.value ? (a(), i("div", yI, [
            t("div", wI, [
              t("span", _I, m(n.value.stats.files_changed) + " files", 1),
              t("span", kI, "+" + m(n.value.stats.insertions), 1),
              t("span", bI, "-" + m(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", $I, [
              k(Ls, { variant: "section" }, {
                default: p(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, we(n.value.changes.workflows.added, (g) => (a(), i("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(g), 1)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.workflows.modified, (g) => (a(), i("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, m(g), 1)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.workflows.deleted, (g) => (a(), i("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(g), 1)
              ]))), 128))
            ])) : h("", !0),
            c.value ? (a(), i("div", CI, [
              k(Ls, { variant: "section" }, {
                default: p(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, we(n.value.changes.nodes.added, (g) => (a(), i("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(g.name), 1),
                g.version ? (a(), i("span", xI, "(" + m(g.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.nodes.removed, (g) => (a(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(g.name), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", SI, [
              k(Ls, { variant: "section" }, {
                default: p(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", II, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, m(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: p(() => [
        k(Pe, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: p(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(Pe, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
        }, {
          default: p(() => [...d[16] || (d[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), TI = /* @__PURE__ */ Ce(EI, [["__scopeId", "data-v-d256ff6d"]]), MI = { class: "popover-header" }, PI = { class: "popover-body" }, RI = {
  key: 0,
  class: "changes-summary"
}, NI = {
  key: 0,
  class: "change-item"
}, LI = {
  key: 1,
  class: "change-item"
}, DI = {
  key: 2,
  class: "change-item"
}, UI = {
  key: 3,
  class: "change-item"
}, OI = {
  key: 4,
  class: "change-item"
}, AI = {
  key: 5,
  class: "change-item"
}, zI = {
  key: 1,
  class: "no-changes"
}, VI = {
  key: 2,
  class: "loading"
}, FI = {
  key: 3,
  class: "issues-error"
}, BI = { class: "error-header" }, WI = { class: "error-title" }, GI = { class: "issues-list" }, jI = { class: "workflow-state" }, HI = { class: "message-section" }, qI = { class: "popover-footer" }, KI = {
  key: 1,
  class: "commit-popover"
}, JI = { class: "popover-header" }, QI = { class: "popover-body" }, YI = {
  key: 0,
  class: "changes-summary"
}, XI = {
  key: 0,
  class: "change-item"
}, ZI = {
  key: 1,
  class: "change-item"
}, e6 = {
  key: 2,
  class: "change-item"
}, t6 = {
  key: 3,
  class: "change-item"
}, s6 = {
  key: 4,
  class: "change-item"
}, o6 = {
  key: 5,
  class: "change-item"
}, n6 = {
  key: 1,
  class: "no-changes"
}, a6 = {
  key: 2,
  class: "loading"
}, l6 = {
  key: 3,
  class: "issues-error"
}, i6 = { class: "error-header" }, r6 = { class: "error-title" }, c6 = { class: "issues-list" }, u6 = { class: "workflow-state" }, d6 = { class: "message-section" }, m6 = { class: "popover-footer" }, f6 = /* @__PURE__ */ _e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = mt(), r = $(""), c = $(!1), u = $(!1), d = A(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = A(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), f = A(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), g = A(() => f.value.length > 0), w = A(() => g.value && !u.value);
    async function y() {
      var _, S, C, x;
      if (!(g.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const B = await l(r.value.trim(), u.value);
          if (B.status === "success") {
            const E = `Committed: ${((_ = B.summary) == null ? void 0 : _.new) || 0} new, ${((S = B.summary) == null ? void 0 : S.modified) || 0} modified, ${((C = B.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            n("committed", { success: !0, message: E });
          } else if (B.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (B.status === "blocked") {
            const E = ((x = B.issues) == null ? void 0 : x.map((R) => `${R.name}: ${R.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: B.message || "Commit failed" });
        } catch (B) {
          n("committed", { success: !1, message: B instanceof Error ? B.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, S) => e.asModal ? (a(), N(Ut, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (C) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = st(() => {
          }, ["stop"]))
        }, [
          t("div", MI, [
            S[11] || (S[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = (C) => n("close"))
            }, [...S[10] || (S[10] = [
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
          t("div", PI, [
            e.status && d.value ? (a(), i("div", RI, [
              e.status.workflows.new.length ? (a(), i("div", NI, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (a(), i("div", LI, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", DI, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", UI, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", OI, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (a(), i("div", AI, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", zI, " No changes to commit ")) : (a(), i("div", VI, " Loading... ")),
            g.value ? (a(), i("div", FI, [
              t("div", BI, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", WI, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", GI, [
                (a(!0), i(j, null, we(f.value, (C) => (a(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, m(C.name), 1),
                  t("span", jI, "(" + m(C.sync_state) + ")", 1),
                  b(": " + m(C.issue_summary), 1)
                ]))), 128))
              ]),
              k(Kn, {
                modelValue: u.value,
                "onUpdate:modelValue": S[1] || (S[1] = (C) => u.value = C),
                class: "allow-issues-toggle"
              }, {
                default: p(() => [...S[19] || (S[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            t("div", HI, [
              k(Ks, {
                modelValue: r.value,
                "onUpdate:modelValue": S[2] || (S[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", qI, [
            k(Pe, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (C) => n("close"))
            }, {
              default: p(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Pe, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: y
            }, {
              default: p(() => [
                b(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", KI, [
      t("div", JI, [
        S[22] || (S[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = (C) => n("close"))
        }, [...S[21] || (S[21] = [
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
      t("div", QI, [
        e.status && d.value ? (a(), i("div", YI, [
          e.status.workflows.new.length ? (a(), i("div", XI, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (a(), i("div", ZI, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", e6, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", t6, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", s6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (a(), i("div", o6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", n6, " No changes to commit ")) : (a(), i("div", a6, " Loading... ")),
        g.value ? (a(), i("div", l6, [
          t("div", i6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", r6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", c6, [
            (a(!0), i(j, null, we(f.value, (C) => (a(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, m(C.name), 1),
              t("span", u6, "(" + m(C.sync_state) + ")", 1),
              b(": " + m(C.issue_summary), 1)
            ]))), 128))
          ]),
          k(Kn, {
            modelValue: u.value,
            "onUpdate:modelValue": S[7] || (S[7] = (C) => u.value = C),
            class: "allow-issues-toggle"
          }, {
            default: p(() => [...S[30] || (S[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        t("div", d6, [
          k(Ks, {
            modelValue: r.value,
            "onUpdate:modelValue": S[8] || (S[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", m6, [
        k(Pe, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (C) => n("close"))
        }, {
          default: p(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(Pe, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: y
        }, {
          default: p(() => [
            b(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), hc = /* @__PURE__ */ Ce(f6, [["__scopeId", "data-v-5f897631"]]), v6 = { class: "modal-header" }, p6 = { class: "modal-body" }, g6 = { class: "switch-message" }, h6 = { class: "switch-details" }, y6 = { class: "modal-actions" }, w6 = /* @__PURE__ */ _e({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), N(Ut, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = st(() => {
          }, ["stop"]))
        }, [
          t("div", v6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", p6, [
            t("p", g6, [
              o[6] || (o[6] = b(" Switch from ", -1)),
              t("strong", null, m(e.fromEnvironment), 1),
              o[7] || (o[7] = b(" to ", -1)),
              t("strong", null, m(e.toEnvironment), 1),
              o[8] || (o[8] = b("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", h6, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", y6, [
            k(be, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: p(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(be, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: p(() => [...o[12] || (o[12] = [
                b(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), _6 = /* @__PURE__ */ Ce(w6, [["__scopeId", "data-v-e9c5253e"]]), k6 = {
  key: 0,
  class: "modal-overlay"
}, b6 = { class: "modal-content" }, $6 = { class: "modal-body" }, C6 = { class: "progress-info" }, x6 = { class: "progress-percentage" }, S6 = { class: "progress-state" }, I6 = { class: "switch-steps" }, E6 = { class: "step-icon" }, T6 = { class: "step-label" }, M6 = /* @__PURE__ */ _e({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = A(() => {
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
    }), n = A(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = A(() => {
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
    return (r, c) => (a(), N(Ut, { to: "body" }, [
      e.show ? (a(), i("div", k6, [
        t("div", b6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", $6, [
            k(nc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", C6, [
              t("div", x6, m(e.progress) + "%", 1),
              t("div", S6, m(o.value), 1)
            ]),
            t("div", I6, [
              (a(!0), i(j, null, we(l.value, (u) => (a(), i("div", {
                key: u.state,
                class: Ne(["switch-step", u.status])
              }, [
                t("span", E6, m(u.icon), 1),
                t("span", T6, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), P6 = /* @__PURE__ */ Ce(M6, [["__scopeId", "data-v-768a5078"]]), R6 = { class: "modal-header" }, N6 = { class: "modal-body" }, L6 = {
  key: 0,
  class: "node-section"
}, D6 = { class: "node-list" }, U6 = {
  key: 1,
  class: "node-section"
}, O6 = { class: "node-list" }, A6 = { class: "modal-actions" }, z6 = /* @__PURE__ */ _e({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), N(Ut, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = st(() => {
          }, ["stop"]))
        }, [
          t("div", R6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", N6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", L6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", D6, [
                (a(!0), i(j, null, we(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + m(n), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", U6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", O6, [
                (a(!0), i(j, null, we(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + m(n), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", A6, [
            k(be, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: p(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(be, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: p(() => [...o[11] || (o[11] = [
                b(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), V6 = /* @__PURE__ */ Ce(z6, [["__scopeId", "data-v-7cad7518"]]), F6 = [
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
], Sn = "v0.0.24", B6 = "Akatz", W6 = { class: "social-buttons" }, G6 = ["title", "aria-label", "onClick"], j6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H6 = ["d"], q6 = ["title", "aria-label", "onClick"], K6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, J6 = ["d"], Q6 = /* @__PURE__ */ _e({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", W6, [
      (a(!0), i(j, null, we(Qe(F6), (l) => (a(), i(j, {
        key: l.id
      }, [
        l.label ? (a(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          b(m(l.label) + " ", 1),
          (a(), i("svg", j6, [
            t("path", {
              d: l.iconPath
            }, null, 8, H6)
          ]))
        ], 8, G6)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (a(), i("svg", K6, [
            t("path", {
              d: l.iconPath
            }, null, 8, J6)
          ]))
        ], 8, q6))
      ], 64))), 128))
    ]));
  }
}), yc = /* @__PURE__ */ Ce(Q6, [["__scopeId", "data-v-4f846342"]]), Y6 = { class: "footer-info" }, X6 = ["title"], Z6 = {
  key: 0,
  class: "dev-badge"
}, eE = { class: "made-by" }, tE = /* @__PURE__ */ _e({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = mt(), o = $(null), n = $(null), l = $(null), r = A(() => o.value === "development"), c = A(() => {
      var d;
      if (!r.value) return Sn;
      const u = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Sn} (${u})` : `${Sn} (development)`;
    });
    return nt(async () => {
      try {
        const u = await s();
        o.value = u.manager_source ?? null, n.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (a(), i("div", Y6, [
      t("span", {
        class: "version",
        title: c.value
      }, [
        b(m(Qe(Sn)) + " ", 1),
        r.value ? (a(), i("span", Z6, "dev")) : h("", !0)
      ], 8, X6),
      t("span", eE, [
        d[0] || (d[0] = b(" made with ", -1)),
        d[1] || (d[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        b(" by " + m(Qe(B6)), 1)
      ])
    ]));
  }
}), wc = /* @__PURE__ */ Ce(tE, [["__scopeId", "data-v-4fa265b3"]]), sE = /* @__PURE__ */ _e({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = $(null);
    async function n() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (a(), N(Ct, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: p(() => [
        k(ec, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: p(() => {
        var u;
        return [
          k(Pe, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: p(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Pe, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: p(() => [...c[3] || (c[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), oE = /* @__PURE__ */ Ce(sE, [["__scopeId", "data-v-fac00ae7"]]), nE = { class: "header-actions" }, aE = {
  key: 0,
  class: "wizard-step"
}, lE = { class: "form-field" }, iE = ["placeholder"], rE = {
  key: 0,
  class: "form-error"
}, cE = { class: "form-field form-field--checkbox" }, uE = { class: "form-checkbox" }, dE = {
  key: 0,
  class: "form-field"
}, mE = ["placeholder"], fE = {
  key: 0,
  class: "form-info"
}, vE = {
  key: 1,
  class: "form-suggestion"
}, pE = {
  key: 2,
  class: "form-error"
}, gE = {
  key: 3,
  class: "form-info"
}, hE = {
  key: 1,
  class: "wizard-step"
}, yE = {
  key: 0,
  class: "progress-check-loading"
}, wE = {
  key: 0,
  class: "cli-warning"
}, _E = { class: "cli-warning-header" }, kE = {
  key: 1,
  class: "env-landing"
}, bE = { class: "env-list" }, $E = ["value"], CE = { class: "env-name" }, xE = {
  key: 2,
  class: "env-create"
}, SE = { class: "form-field" }, IE = { class: "form-field" }, EE = ["value"], TE = { class: "form-field" }, ME = ["disabled"], PE = ["value"], RE = { class: "form-field" }, NE = ["value"], LE = { class: "form-field form-field--checkbox" }, DE = { class: "form-checkbox" }, UE = {
  key: 0,
  class: "form-error"
}, OE = {
  key: 1,
  class: "env-creating"
}, AE = { class: "creating-intro" }, zE = {
  key: 3,
  class: "env-import"
}, VE = { class: "wizard-footer" }, FE = { class: "wizard-footer-actions" }, po = 10, BE = 600 * 1e3, Ci = 1800 * 1e3, WE = /* @__PURE__ */ _e({
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
    const o = e, n = s, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = mt(), g = $(o.initialStep || 1), w = $(null), y = $("landing"), _ = $(!1), S = $(!1), C = $(!1), x = $(!1), B = $(null), E = $(o.initialStep === 2), R = $(o.defaultPath), L = $(!!o.detectedModelsDir), V = $(o.detectedModelsDir || ""), K = $(null), z = $(null), W = $(null), X = $(null), te = $("my-new-env"), re = $(sc), he = $("latest"), ne = $(oc), Q = $(!0), me = $(null), Re = $(null), ae = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = $(!1), ue = $(!1), Oe = $(!1), ee = $({ progress: 0, message: "" }), se = $({ progress: 0, message: "" }), P = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], U = $(0), J = $(null), T = $(0), M = $(null), ce = A(() => {
      var D, O;
      const ye = (D = R.value) == null ? void 0 : D.trim(), Z = !K.value, Be = !L.value || !z.value && ((O = V.value) == null ? void 0 : O.trim());
      return ye && Z && Be;
    }), Ve = A(() => {
      var ye;
      return (ye = te.value) == null ? void 0 : ye.trim();
    }), je = A(() => !!(g.value === 2 || Re.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), F = A(() => Re.value || o.workspacePath || null);
    async function Y() {
      var ye;
      if (K.value = null, !!((ye = R.value) != null && ye.trim()))
        try {
          const Z = await c({ path: R.value, type: "workspace" });
          Z.valid || (K.value = Z.error || "Invalid path");
        } catch (Z) {
          K.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function ve() {
      var ye;
      if (z.value = null, W.value = null, X.value = null, !!((ye = V.value) != null && ye.trim()))
        try {
          const Z = await c({ path: V.value, type: "models" });
          if (Z.valid)
            X.value = Z.model_count ?? null;
          else if (z.value = Z.error || "Invalid path", Z.suggestion) {
            W.value = Z.suggestion, V.value = Z.suggestion, z.value = null;
            const Be = await c({ path: Z.suggestion, type: "models" });
            Be.valid && (X.value = Be.model_count ?? null);
          }
        } catch (Z) {
          z.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function Ee() {
      var ye, Z, Be, D, O;
      if (K.value = null, z.value = null, await Y(), (ye = K.value) != null && ye.includes("already exists")) {
        K.value = null, Re.value = ((Z = R.value) == null ? void 0 : Z.trim()) || o.defaultPath, g.value = 2, Se();
        return;
      }
      if (!K.value && !(L.value && ((Be = V.value) != null && Be.trim()) && (await ve(), z.value))) {
        ue.value = !0;
        try {
          await l({
            workspace_path: ((D = R.value) == null ? void 0 : D.trim()) || o.defaultPath,
            models_directory: L.value && ((O = V.value) == null ? void 0 : O.trim()) || null
          }), U.value = 0, J.value = Date.now();
          const G = setInterval(async () => {
            var Ie;
            if (J.value && Date.now() - J.value > BE) {
              clearInterval(G), ue.value = !1, K.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const I = await r();
              if (U.value = 0, I.state === "idle" && ue.value) {
                clearInterval(G), ue.value = !1, K.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ee.value = { progress: I.progress, message: I.message }, I.state === "complete" ? (clearInterval(G), ue.value = !1, Re.value = ((Ie = R.value) == null ? void 0 : Ie.trim()) || o.defaultPath, g.value = 2, Se()) : I.state === "error" && (clearInterval(G), ue.value = !1, K.value = I.error || "Workspace creation failed");
            } catch (I) {
              U.value++, console.warn(`Polling failure ${U.value}/${po}:`, I), U.value >= po && (clearInterval(G), ue.value = !1, K.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (G) {
          ue.value = !1, K.value = G instanceof Error ? G.message : "Failed to create workspace";
        }
      }
    }
    async function $e() {
      Oe.value = !0, me.value = null;
      try {
        const ye = {
          name: te.value.trim() || "my-new-env",
          python_version: re.value,
          comfyui_version: he.value,
          torch_backend: ne.value,
          switch_after: Q.value,
          workspace_path: Re.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ye)).status === "started") {
          T.value = 0, M.value = Date.now();
          const Be = setInterval(async () => {
            if (M.value && Date.now() - M.value > Ci) {
              clearInterval(Be), Oe.value = !1, me.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const D = await d();
              if (T.value = 0, D.state === "idle" && Oe.value) {
                clearInterval(Be), Oe.value = !1, me.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (se.value = {
                progress: D.progress ?? 0,
                message: D.message,
                phase: D.phase
              }, D.state === "complete") {
                clearInterval(Be), Oe.value = !1;
                const O = D.environment_name || ye.name;
                Q.value ? n("complete", O, Re.value) : (y.value = "landing", n("environment-created-no-switch", O));
              } else D.state === "error" && (clearInterval(Be), Oe.value = !1, me.value = D.error || "Environment creation failed");
            } catch (D) {
              T.value++, console.warn(`Polling failure ${T.value}/${po}:`, D), T.value >= po && (clearInterval(Be), Oe.value = !1, me.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ye) {
        Oe.value = !1, me.value = ye instanceof Error ? ye.message : "Unknown error";
      }
    }
    async function Se() {
      pe.value = !0;
      try {
        ae.value = await f();
      } catch (ye) {
        console.error("Failed to load ComfyUI releases:", ye);
      } finally {
        pe.value = !1;
      }
    }
    function Le() {
      w.value && n("switch-environment", w.value, Re.value);
    }
    function Ue() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function De(ye, Z) {
      S.value = !1, Z ? n("complete", ye, Re.value) : (n("environment-created-no-switch", ye), y.value = "landing");
    }
    function Te() {
    }
    nt(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (Re.value = o.workspacePath), g.value === 2) {
        Se();
        const ye = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await Fe(), clearTimeout(ye), E.value = !1;
      }
    });
    async function Fe() {
      try {
        const ye = await d();
        if (console.log("[ComfyGit] Create progress check:", ye.state, ye), ye.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ye.environment_name), y.value = "create", Oe.value = !0, te.value = ye.environment_name || "my-new-env", se.value = {
            progress: ye.progress ?? 0,
            message: ye.message,
            phase: ye.phase
          }, Me();
          return;
        }
      } catch (ye) {
        console.log("[ComfyGit] Create progress check failed:", ye);
      }
      try {
        const ye = await v();
        console.log("[ComfyGit] Import progress check:", ye.state, ye), ye.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ye.environment_name), B.value = {
          message: ye.message || "Importing...",
          phase: ye.phase || "",
          progress: ye.progress ?? 0,
          environmentName: ye.environment_name || ""
        }, x.value = !0, y.value = "import", S.value = !0);
      } catch (ye) {
        console.log("[ComfyGit] Import progress check failed:", ye);
      }
    }
    async function Me() {
      T.value = 0, M.value = Date.now();
      let ye = null;
      const Z = async () => {
        if (M.value && Date.now() - M.value > Ci)
          return ye && clearInterval(ye), Oe.value = !1, me.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const D = await d();
          if (T.value = 0, D.state === "idle" && Oe.value)
            return ye && clearInterval(ye), Oe.value = !1, me.value = "Environment creation was interrupted. Please try again.", !1;
          if (se.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase
          }, D.state === "complete") {
            ye && clearInterval(ye), Oe.value = !1;
            const O = D.environment_name || te.value;
            return n("complete", O, Re.value), !1;
          } else if (D.state === "error")
            return ye && clearInterval(ye), Oe.value = !1, me.value = D.error || "Environment creation failed", !1;
          return !0;
        } catch (D) {
          return T.value++, console.warn(`Polling failure ${T.value}/${po}:`, D), T.value >= po ? (ye && clearInterval(ye), Oe.value = !1, me.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Z() && (ye = setInterval(async () => {
        !await Z() && ye && clearInterval(ye);
      }, 2e3));
    }
    return (ye, Z) => (a(), i(j, null, [
      k(Ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Z[15] || (Z[15] = (Be) => ye.$emit("close"))
      }, {
        header: p(() => [
          Z[20] || (Z[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", nE, [
            k(yc),
            Z[19] || (Z[19] = t("span", { class: "header-divider" }, null, -1)),
            je.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Z[0] || (Z[0] = (Be) => _.value = !0)
            }, [...Z[17] || (Z[17] = [
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
              onClick: Z[1] || (Z[1] = (Be) => ye.$emit("close")),
              title: "Close"
            }, [...Z[18] || (Z[18] = [
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
        body: p(() => {
          var Be;
          return [
            g.value === 1 ? (a(), i("div", aE, [
              Z[24] || (Z[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", lE, [
                Z[21] || (Z[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                St(t("input", {
                  "onUpdate:modelValue": Z[2] || (Z[2] = (D) => R.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, iE), [
                  [$o, R.value]
                ]),
                K.value ? (a(), i("p", rE, m(K.value), 1)) : h("", !0)
              ]),
              t("div", cE, [
                t("label", uE, [
                  St(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Z[3] || (Z[3] = (D) => L.value = D)
                  }, null, 512), [
                    [jn, L.value]
                  ]),
                  Z[22] || (Z[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              L.value ? (a(), i("div", dE, [
                Z[23] || (Z[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                St(t("input", {
                  "onUpdate:modelValue": Z[4] || (Z[4] = (D) => V.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, mE), [
                  [$o, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (a(), i("p", fE, " Detected: " + m(e.detectedModelsDir), 1)) : h("", !0),
                W.value ? (a(), i("p", vE, " Did you mean: " + m(W.value), 1)) : h("", !0),
                z.value ? (a(), i("p", pE, m(z.value), 1)) : h("", !0),
                X.value !== null && !z.value ? (a(), i("p", gE, " Found " + m(X.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              ue.value ? (a(), N(qn, {
                key: 1,
                progress: ee.value.progress,
                message: ee.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            g.value === 2 ? (a(), i("div", hE, [
              E.value ? (a(), i("div", yE, [...Z[25] || (Z[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(j, { key: 1 }, [
                !o.cliInstalled && !C.value ? (a(), i("div", wE, [
                  t("div", _E, [
                    Z[27] || (Z[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Z[28] || (Z[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Z[5] || (Z[5] = (D) => C.value = !0),
                      title: "Dismiss"
                    }, [...Z[26] || (Z[26] = [
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
                  Z[29] || (Z[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Z[30] || (Z[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                y.value === "landing" ? (a(), i("div", kE, [
                  Z[34] || (Z[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Z[6] || (Z[6] = (D) => y.value = "create")
                  }, [...Z[31] || (Z[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: Z[7] || (Z[7] = (D) => {
                      x.value = !1, y.value = "import";
                    })
                  }, [...Z[32] || (Z[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Be = o.existingEnvironments) != null && Be.length ? (a(), i(j, { key: 0 }, [
                    Z[33] || (Z[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", bE, [
                      (a(!0), i(j, null, we(o.existingEnvironments, (D) => (a(), i("label", {
                        key: D,
                        class: Ne(["env-option", { selected: w.value === D }])
                      }, [
                        St(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: D,
                          "onUpdate:modelValue": Z[8] || (Z[8] = (O) => w.value = O)
                        }, null, 8, $E), [
                          [Nn, w.value]
                        ]),
                        t("span", CE, m(D), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (a(), i("div", xE, [
                  Oe.value ? (a(), i("div", OE, [
                    t("p", AE, [
                      Z[41] || (Z[41] = b(" Creating environment ", -1)),
                      t("strong", null, m(te.value), 1),
                      Z[42] || (Z[42] = b("... ", -1))
                    ]),
                    k(qn, {
                      progress: se.value.progress,
                      message: se.value.message,
                      "current-phase": se.value.phase,
                      "show-steps": !0,
                      steps: P
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Z[43] || (Z[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(j, { key: 0 }, [
                    Z[40] || (Z[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", SE, [
                      Z[35] || (Z[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      St(t("input", {
                        "onUpdate:modelValue": Z[9] || (Z[9] = (D) => te.value = D),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [$o, te.value]
                      ])
                    ]),
                    t("div", IE, [
                      Z[36] || (Z[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": Z[10] || (Z[10] = (D) => re.value = D),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, we(Qe(tc), (D) => (a(), i("option", {
                          key: D,
                          value: D
                        }, m(D), 9, EE))), 128))
                      ], 512), [
                        [Co, re.value]
                      ])
                    ]),
                    t("div", TE, [
                      Z[37] || (Z[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": Z[11] || (Z[11] = (D) => he.value = D),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (a(!0), i(j, null, we(ae.value, (D) => (a(), i("option", {
                          key: D.tag_name,
                          value: D.tag_name
                        }, m(D.name), 9, PE))), 128))
                      ], 8, ME), [
                        [Co, he.value]
                      ])
                    ]),
                    t("div", RE, [
                      Z[38] || (Z[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      St(t("select", {
                        "onUpdate:modelValue": Z[12] || (Z[12] = (D) => ne.value = D),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, we(Qe(Il), (D) => (a(), i("option", {
                          key: D,
                          value: D
                        }, m(D) + m(D === "auto" ? " (detect GPU)" : ""), 9, NE))), 128))
                      ], 512), [
                        [Co, ne.value]
                      ])
                    ]),
                    t("div", LE, [
                      t("label", DE, [
                        St(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Z[13] || (Z[13] = (D) => Q.value = D)
                        }, null, 512), [
                          [jn, Q.value]
                        ]),
                        Z[39] || (Z[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    me.value ? (a(), i("div", UE, m(me.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (a(), i("div", zE, [
                  k(lc, {
                    "workspace-path": Re.value,
                    "resume-import": x.value,
                    "initial-progress": B.value ?? void 0,
                    onImportComplete: De,
                    onImportStarted: Z[14] || (Z[14] = (D) => S.value = !0),
                    onSourceCleared: Te
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: p(() => [
          t("div", VE, [
            k(wc),
            t("div", FE, [
              g.value === 1 ? (a(), N(Pe, {
                key: 0,
                variant: "primary",
                disabled: !ce.value || ue.value,
                onClick: Ee
              }, {
                default: p(() => [
                  b(m(ue.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), i(j, { key: 1 }, [
                !Oe.value && !S.value && (y.value !== "landing" || o.setupState === "no_workspace" && !Re.value) ? (a(), N(Pe, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ue
                }, {
                  default: p(() => [...Z[44] || (Z[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (a(), N(Pe, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ve.value || Oe.value,
                  onClick: $e
                }, {
                  default: p(() => [
                    b(m(Oe.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                y.value === "landing" && w.value ? (a(), N(Pe, {
                  key: 2,
                  variant: "primary",
                  onClick: Le
                }, {
                  default: p(() => [
                    b(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), N(oE, {
        key: 0,
        "workspace-path": F.value,
        onClose: Z[16] || (Z[16] = (Be) => _.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), GE = /* @__PURE__ */ Ce(WE, [["__scopeId", "data-v-9a9aadc0"]]), jE = { class: "update-banner" }, HE = { class: "update-banner__left" }, qE = { class: "update-banner__title" }, KE = {
  key: 0,
  class: "update-banner__summary"
}, JE = { class: "update-banner__actions" }, QE = ["disabled"], YE = ["disabled"], XE = ["disabled"], ZE = /* @__PURE__ */ _e({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), i("div", jE, [
      t("div", HE, [
        t("div", qE, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", KE, m(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      t("div", JE, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, QE),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, YE)) : h("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, XE)
      ])
    ]));
  }
}), eT = /* @__PURE__ */ Ce(ZE, [["__scopeId", "data-v-49562c5c"]]), _c = "ComfyGit.UpdateNotice.DismissedVersion";
function tT() {
  try {
    return localStorage.getItem(_c);
  } catch {
    return null;
  }
}
function sT(e) {
  try {
    localStorage.setItem(_c, e);
  } catch {
  }
}
function oT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : tT() !== e.latest_version;
}
const nT = { class: "comfygit-panel" }, aT = { class: "panel-header" }, lT = { class: "header-left" }, iT = {
  key: 0,
  class: "header-info"
}, rT = { class: "header-actions" }, cT = { class: "env-switcher" }, uT = {
  key: 0,
  class: "header-info"
}, dT = { class: "branch-name" }, mT = { class: "panel-main" }, fT = { class: "sidebar" }, vT = { class: "sidebar-content" }, pT = { class: "sidebar-section" }, gT = { class: "sidebar-section" }, hT = { class: "sidebar-section" }, yT = { class: "sidebar-footer" }, wT = { class: "content-area" }, _T = {
  key: 0,
  class: "error-message"
}, kT = {
  key: 1,
  class: "loading"
}, bT = { class: "dialog-content env-selector-dialog" }, $T = { class: "dialog-header" }, CT = { class: "dialog-body" }, xT = { class: "env-list" }, ST = { class: "env-info" }, IT = { class: "env-name-row" }, ET = { class: "env-indicator" }, TT = { class: "env-name" }, MT = {
  key: 0,
  class: "env-branch"
}, PT = {
  key: 1,
  class: "current-label"
}, RT = { class: "env-stats" }, NT = ["onClick"], LT = { class: "toast-container" }, DT = { class: "toast-message" }, xi = "ComfyGit.LastView", Si = "ComfyGit.LastSection", UT = /* @__PURE__ */ _e({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: y,
      deleteEnvironment: _,
      syncEnvironmentManually: S,
      repairWorkflowModels: C,
      getSetupStatus: x,
      getUpdateCheck: B,
      updateManager: E
    } = mt(), R = Uv(), L = $(null), V = $([]), K = $([]), z = $([]), W = A(() => z.value.find((de) => de.is_current)), X = $(null), te = $(!1), re = $(!1), he = $("history"), ne = $("manifest"), Q = $(null), me = $(!1), Re = $(1), ae = A(() => {
      var de;
      return ((de = Q.value) == null ? void 0 : de.state) || "managed";
    }), pe = $(!1), ue = $(null), Oe = $(null), ee = $(!1), se = $(null), P = $(!1), U = $(!1), J = A(() => !P.value && oT(se.value)), T = $(null), M = $(null), ce = $(null), Ve = $(!1), je = $(!1), F = $(""), Y = $(null), ve = $({ state: "idle", progress: 0, message: "" });
    let Ee = null, $e = null;
    const Se = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      account: { view: "account", section: "cloud" },
      publish: { view: "publish", section: "cloud" }
    }, Le = o.initialView ? Se[o.initialView] : null, Ue = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics",
      "account",
      "publish"
    ], De = ["this-env", "version-control", "workspace", "cloud", "diagnostics"];
    function Te() {
      try {
        const de = sessionStorage.getItem(xi), oe = sessionStorage.getItem(Si), Ge = de === "branches" || de === "history" || de === "remotes" ? "version-control" : de === "manifest" || de === "debug-env" || de === "debug-workspace" ? "diagnostics" : de === "deploy" ? "publish" : de, Ke = oe === "all-envs" ? "workspace" : oe === "sharing" ? "cloud" : oe;
        if (de && oe && Ue.includes(Ge) && De.includes(Ke))
          return { view: Ge, section: Ke };
      } catch {
      }
      return null;
    }
    const Fe = Te(), Me = $((Le == null ? void 0 : Le.view) ?? (Fe == null ? void 0 : Fe.view) ?? "status"), ye = $((Le == null ? void 0 : Le.section) ?? (Fe == null ? void 0 : Fe.section) ?? "this-env");
    function Z(de, oe) {
      Me.value = de, ye.value = oe;
      try {
        sessionStorage.setItem(xi, de), sessionStorage.setItem(Si, oe);
      } catch {
      }
    }
    function Be(de) {
      const Ge = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" },
        account: { view: "account", section: "cloud" },
        publish: { view: "publish", section: "cloud" }
      }[de];
      Ge && Z(Ge.view, Ge.section);
    }
    function D(de) {
      he.value = de, Z("version-control", "version-control");
    }
    function O(de) {
      ne.value = de, Z("diagnostics", "diagnostics");
    }
    function G() {
      D("branches");
    }
    function Ie() {
      n("close"), setTimeout(() => {
        var oe;
        const de = document.querySelectorAll("button.comfyui-button");
        for (const Ge of de)
          if (((oe = Ge.textContent) == null ? void 0 : oe.trim()) === "Manager") {
            Ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const I = $(null), le = $(!1), ie = $(!1), Ae = $([]);
    let ze = 0;
    function xe(de, oe = "info", Ge = 3e3) {
      const Ke = ++ze;
      return Ae.value.push({ id: Ke, message: de, type: oe }), Ge > 0 && setTimeout(() => {
        Ae.value = Ae.value.filter((gt) => gt.id !== Ke);
      }, Ge), Ke;
    }
    function qe(de) {
      Ae.value = Ae.value.filter((oe) => oe.id !== de);
    }
    function Ye(de, oe) {
      xe(de, oe);
    }
    async function at() {
      se.value = null, P.value = !1;
      try {
        se.value = await B();
      } catch {
      }
    }
    function rt() {
      var oe;
      const de = (oe = se.value) == null ? void 0 : oe.release_url;
      if (de)
        try {
          window.open(de, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function ut() {
      var oe;
      const de = (oe = se.value) == null ? void 0 : oe.latest_version;
      de && sT(de), P.value = !0;
    }
    async function It() {
      var oe, Ge;
      if (U.value) return;
      U.value = !0;
      const de = xe("Updating comfygit-manager...", "info", 0);
      try {
        const Ke = await E();
        if (qe(de), Ke.status !== "success") {
          if (xe(Ke.message || "Update failed", "error"), Ke.manual_instructions) {
            const gt = Ke.manual_instructions.split(`
`).map((xt) => xt.trim()).filter(Boolean);
            I.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: gt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                I.value = null;
              }
            };
          }
          return;
        }
        if (xe(Ke.message || "Update complete", "success"), ut(), Ke.restart_required) {
          tt();
          try {
            await ((Ge = (oe = window.app) == null ? void 0 : oe.api) == null ? void 0 : Ge.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ke) {
        qe(de);
        const gt = Ke instanceof Error ? Ke.message : "Update failed";
        xe(gt, "error");
      } finally {
        U.value = !1;
      }
    }
    const Wt = A(() => {
      if (!L.value) return "neutral";
      const de = L.value.workflows, oe = de.new.length > 0 || de.modified.length > 0 || de.deleted.length > 0 || L.value.has_changes;
      return L.value.comparison.is_synced ? oe ? "warning" : "success" : "error";
    });
    A(() => L.value ? Wt.value === "success" ? "All synced" : Wt.value === "warning" ? "Uncommitted changes" : Wt.value === "error" ? "Not synced" : "" : "");
    async function ct() {
      pe.value = !0, ue.value = null;
      try {
        const [de, oe, Ge, Ke] = await Promise.all([
          l(!0),
          r(),
          c(),
          g()
        ]);
        L.value = de, V.value = oe.commits, K.value = Ge.branches, z.value = Ke, n("statusUpdate", de), T.value && await T.value.loadWorkflows(!0);
      } catch (de) {
        ue.value = de instanceof Error ? de.message : "Failed to load status", L.value = null, V.value = [], K.value = [];
      } finally {
        pe.value = !1;
      }
    }
    function fe(de) {
      Oe.value = de;
    }
    async function H(de) {
      var Ge;
      Oe.value = null;
      const oe = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      I.value = {
        title: oe ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: oe ? "You have uncommitted changes that will be lost." : `Checkout commit ${de.short_hash || ((Ge = de.hash) == null ? void 0 : Ge.slice(0, 7))}?`,
        details: oe ? yn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: oe ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: oe,
        onConfirm: async () => {
          var xt;
          I.value = null, tt();
          const Ke = xe(`Checking out ${de.short_hash || ((xt = de.hash) == null ? void 0 : xt.slice(0, 7))}...`, "info", 0), gt = await u(de.hash, oe);
          qe(Ke), gt.status === "success" ? xe("Restarting ComfyUI...", "success") : xe(gt.message || "Checkout failed", "error");
        }
      };
    }
    async function ge(de) {
      const oe = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      I.value = {
        title: oe ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: oe ? "You have uncommitted changes." : `Switch to branch "${de}"?`,
        details: oe ? yn() : void 0,
        warning: oe ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: oe ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          I.value = null, tt();
          const Ge = xe(`Switching to ${de}...`, "info", 0), Ke = await v(de, oe);
          qe(Ge), Ke.status === "success" ? xe("Restarting ComfyUI...", "success") : xe(Ke.message || "Branch switch failed", "error");
        }
      };
    }
    async function He(de) {
      const oe = xe(`Creating branch ${de}...`, "info", 0), Ge = await d(de);
      qe(oe), Ge.status === "success" ? (xe(`Branch "${de}" created`, "success"), await ct()) : xe(Ge.message || "Failed to create branch", "error");
    }
    async function ft(de, oe = !1) {
      const Ge = async (Ke) => {
        var xt;
        const gt = xe(`Deleting branch ${de}...`, "info", 0);
        try {
          const rs = await f(de, Ke);
          qe(gt), rs.status === "success" ? (xe(`Branch "${de}" deleted`, "success"), await ct()) : (xt = rs.message) != null && xt.includes("not fully merged") ? I.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${de}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              I.value = null, await Ge(!0);
            }
          } : xe(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          qe(gt);
          const q = rs instanceof Error ? rs.message : "Failed to delete branch";
          q.includes("not fully merged") ? I.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${de}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              I.value = null, await Ge(!0);
            }
          } : xe(q, "error");
        }
      };
      I.value = {
        title: "Delete Branch",
        message: `Delete branch "${de}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          I.value = null, await Ge(oe);
        }
      };
    }
    async function Nt(de) {
      Oe.value = null;
      const oe = prompt("Enter branch name:");
      if (oe) {
        const Ge = xe(`Creating branch ${oe}...`, "info", 0), Ke = await d(oe, de.hash);
        qe(Ge), Ke.status === "success" ? (xe(`Branch "${oe}" created from ${de.short_hash}`, "success"), await ct()) : xe(Ke.message || "Failed to create branch", "error");
      }
    }
    function tt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Pt() {
      I.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var de;
          I.value = null, tt(), xe("Restarting environment...", "info");
          try {
            (de = window.app) != null && de.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function xs() {
      I.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var de;
          I.value = null, xe("Stopping environment...", "info");
          try {
            (de = window.app) != null && de.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Kt(de, oe) {
      ee.value = !1, F.value = de, Y.value = oe || null, Ve.value = !0;
    }
    async function ra() {
      Ve.value = !1, je.value = !0, tt(), ve.value = {
        progress: 10,
        state: mo(10),
        message: fo(10)
      };
      try {
        await w(F.value, Y.value || void 0), ca(), ua();
      } catch (de) {
        Ss(), je.value = !1, xe(`Failed to initiate switch: ${de instanceof Error ? de.message : "Unknown error"}`, "error"), ve.value = { state: "idle", progress: 0, message: "" }, Y.value = null;
      }
    }
    function mo(de) {
      return de >= 100 ? "complete" : de >= 80 ? "validating" : de >= 60 ? "starting" : de >= 30 ? "syncing" : "preparing";
    }
    function fo(de) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[mo(de)] || "";
    }
    function ca() {
      if ($e) return;
      let de = 10;
      const oe = 60, Ge = 5e3, Ke = 100, gt = (oe - de) / (Ge / Ke);
      $e = window.setInterval(() => {
        if (de += gt, de >= oe && (de = oe, Ss()), ve.value.progress < oe) {
          const xt = Math.floor(de);
          ve.value = {
            progress: xt,
            state: mo(xt),
            message: fo(xt)
          };
        }
      }, Ke);
    }
    function Ss() {
      $e && (clearInterval($e), $e = null);
    }
    function ua() {
      Ee || (Ee = window.setInterval(async () => {
        try {
          let de = await R.getStatus();
          if ((!de || de.state === "idle") && (de = await y()), !de)
            return;
          const oe = de.progress || 0;
          oe >= 60 && Ss();
          const Ge = Math.max(oe, ve.value.progress), Ke = de.state && de.state !== "idle" && de.state !== "unknown", gt = Ke ? de.state : mo(Ge), xt = Ke && de.message || fo(Ge);
          ve.value = {
            state: gt,
            progress: Ge,
            message: xt
          }, de.state === "complete" ? (Ss(), No(), je.value = !1, xe(`✓ Switched to ${F.value}`, "success"), await ct(), F.value = "") : de.state === "rolled_back" ? (Ss(), No(), je.value = !1, xe("Switch failed, restored previous environment", "warning"), F.value = "") : de.state === "critical_failure" && (Ss(), No(), je.value = !1, xe(`Critical error during switch: ${de.message}`, "error"), F.value = "");
        } catch (de) {
          console.error("Failed to poll switch progress:", de);
        }
      }, 1e3));
    }
    function No() {
      Ss(), Ee && (clearInterval(Ee), Ee = null);
    }
    function da() {
      var de;
      Ve.value = !1, F.value = "", (de = Q.value) != null && de.state && Q.value.state !== "managed" && (Re.value = Q.value.state === "no_workspace" ? 1 : 2, me.value = !0);
    }
    async function ma(de) {
      le.value = !1, await ct(), xe(de.message, de.success ? "success" : "error");
    }
    async function fa() {
      ie.value = !1;
      const de = xe("Syncing environment...", "info", 0);
      try {
        const oe = await S("skip", !0);
        if (qe(de), oe.status === "success") {
          const Ge = [];
          oe.nodes_installed.length && Ge.push(`${oe.nodes_installed.length} installed`), oe.nodes_removed.length && Ge.push(`${oe.nodes_removed.length} removed`);
          const Ke = Ge.length ? `: ${Ge.join(", ")}` : "";
          xe(`✓ Environment synced${Ke}`, "success"), await ct();
        } else {
          const Ge = oe.errors.length ? oe.errors.join("; ") : oe.message;
          xe(`Sync failed: ${Ge}`, "error");
        }
      } catch (oe) {
        qe(de), xe(`Sync error: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error");
      }
    }
    async function va(de) {
      var oe;
      try {
        const Ge = await C(de);
        Ge.failed.length === 0 ? xe(`✓ Repaired ${Ge.success} workflow${Ge.success === 1 ? "" : "s"}`, "success") : xe(`Repaired ${Ge.success}, failed: ${Ge.failed.length}`, "warning"), await ct();
      } catch (Ge) {
        xe(`Repair failed: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (oe = ce.value) == null || oe.resetRepairingState();
      }
    }
    async function hn() {
      var oe, Ge;
      const de = xe("Repairing environment...", "info", 0);
      try {
        const Ke = await S("skip", !0);
        if (qe(de), Ke.status === "success") {
          const gt = [];
          Ke.nodes_installed.length && gt.push(`${Ke.nodes_installed.length} installed`), Ke.nodes_removed.length && gt.push(`${Ke.nodes_removed.length} removed`);
          const xt = gt.length ? `: ${gt.join(", ")}` : "";
          xe(`✓ Environment repaired${xt}`, "success"), (oe = ce.value) == null || oe.closeDetailModal(), await ct();
        } else {
          const gt = Ke.errors.length ? Ke.errors.join(", ") : Ke.message || "Unknown error";
          xe(`Repair failed: ${gt}`, "error");
        }
      } catch (Ke) {
        qe(de), xe(`Repair error: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (Ge = ce.value) == null || Ge.resetRepairingEnvironmentState();
      }
    }
    async function pa(de, oe) {
      xe(`Environment '${de}' created`, "success"), await ct(), M.value && await M.value.loadEnvironments(), oe && await Kt(de);
    }
    async function ga(de) {
      var oe;
      if (((oe = W.value) == null ? void 0 : oe.name) === de) {
        xe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      I.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${de}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            const Ge = await _(de);
            Ge.status === "success" ? (xe(`Environment "${de}" deleted`, "success"), await ct(), M.value && await M.value.loadEnvironments()) : xe(Ge.message || "Failed to delete environment", "error");
          } catch (Ge) {
            xe(`Error deleting environment: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ha(de, oe) {
      me.value = !1;
      try {
        Q.value = await x();
      } catch {
      }
      await Kt(de, oe);
    }
    function ya() {
      me.value = !1, n("close");
    }
    async function wa(de, oe) {
      await Kt(de, oe);
    }
    async function _a(de) {
      te.value = !1, await ct(), await Kt(de);
    }
    function ka() {
      X.value = null, te.value = !0;
    }
    function ba(de) {
      X.value = de, re.value = !0;
    }
    function $a() {
      re.value = !1, X.value = null;
    }
    async function Ca(de) {
      Q.value = await x(), console.log(`Environment '${de}' created. Available for switching.`);
    }
    function xa() {
      Z("environments", "workspace"), setTimeout(() => {
        var de;
        (de = M.value) == null || de.openCreateModal();
      }, 100);
    }
    function yn() {
      if (!L.value) return [];
      const de = [], oe = L.value.workflows;
      return oe.new.length && de.push(`${oe.new.length} new workflow(s)`), oe.modified.length && de.push(`${oe.modified.length} modified workflow(s)`), oe.deleted.length && de.push(`${oe.deleted.length} deleted workflow(s)`), de;
    }
    return nt(async () => {
      try {
        if (Q.value = await x(), Q.value.state === "no_workspace") {
          me.value = !0, Re.value = 1;
          return;
        }
        if (Q.value.state === "empty_workspace") {
          me.value = !0, Re.value = 2;
          return;
        }
        if (Q.value.state === "unmanaged") {
          me.value = !0, Re.value = 2;
          return;
        }
      } catch (de) {
        console.warn("Setup status check failed, proceeding normally:", de);
      }
      await Promise.all([
        ct(),
        at()
      ]);
    }), (de, oe) => {
      var Ge, Ke, gt, xt, rs, q, ke, We, yt, Lt, cs, zs, Vs, Lo, Do, Pl;
      return a(), i("div", nT, [
        t("div", aT, [
          t("div", lT, [
            oe[28] || (oe[28] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            L.value ? (a(), i("div", iT)) : h("", !0)
          ]),
          t("div", rT, [
            k(yc),
            oe[31] || (oe[31] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ne(["icon-btn", { spinning: pe.value }]),
              onClick: ct,
              title: "Refresh"
            }, [...oe[29] || (oe[29] = [
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
              onClick: oe[0] || (oe[0] = (Ze) => n("close")),
              title: "Close"
            }, [...oe[30] || (oe[30] = [
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
        J.value && se.value ? (a(), N(eT, {
          key: 0,
          info: se.value,
          updating: U.value,
          onUpdate: It,
          onDismiss: ut,
          onReleaseNotes: rt
        }, null, 8, ["info", "updating"])) : h("", !0),
        t("div", cT, [
          t("div", { class: "env-switcher-header" }, [
            oe[32] || (oe[32] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Pt
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: xs
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: oe[1] || (oe[1] = (Ze) => Z("environments", "workspace"))
          }, [
            L.value ? (a(), i("div", uT, [
              t("span", null, m(((Ge = W.value) == null ? void 0 : Ge.name) || ((Ke = L.value) == null ? void 0 : Ke.environment) || "Loading..."), 1),
              t("span", dT, "(" + m(L.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            oe[33] || (oe[33] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", mT, [
          t("div", fT, [
            t("div", vT, [
              t("div", pT, [
                oe[34] || (oe[34] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "status" && ye.value === "this-env" }]),
                  onClick: oe[2] || (oe[2] = (Ze) => Z("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "workflows" }]),
                  onClick: oe[3] || (oe[3] = (Ze) => Z("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "models-env" }]),
                  onClick: oe[4] || (oe[4] = (Ze) => Z("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "nodes" }]),
                  onClick: oe[5] || (oe[5] = (Ze) => Z("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "version-control" }]),
                  onClick: oe[6] || (oe[6] = (Ze) => D("history"))
                }, " VERSION CONTROL ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "diagnostics" }]),
                  onClick: oe[7] || (oe[7] = (Ze) => O("manifest"))
                }, " DIAGNOSTICS ", 2)
              ]),
              oe[37] || (oe[37] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", gT, [
                oe[35] || (oe[35] = t("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "environments" }]),
                  onClick: oe[8] || (oe[8] = (Ze) => Z("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "model-index" }]),
                  onClick: oe[9] || (oe[9] = (Ze) => Z("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "settings" }]),
                  onClick: oe[10] || (oe[10] = (Ze) => Z("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              oe[38] || (oe[38] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", hT, [
                oe[36] || (oe[36] = t("div", { class: "sidebar-section-title" }, "CLOUD", -1)),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "publish" }]),
                  onClick: oe[11] || (oe[11] = (Ze) => Z("publish", "cloud"))
                }, " PUBLISH ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: Me.value === "account" }]),
                  onClick: oe[12] || (oe[12] = (Ze) => Z("account", "cloud"))
                }, " ACCOUNT ", 2)
              ])
            ]),
            t("div", yT, [
              k(wc)
            ])
          ]),
          t("div", wT, [
            ue.value ? (a(), i("div", _T, m(ue.value), 1)) : !L.value && Me.value === "status" ? (a(), i("div", kT, " Loading status... ")) : (a(), i(j, { key: 2 }, [
              Me.value === "status" ? (a(), N(Nv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ce,
                status: L.value,
                "setup-state": ae.value,
                onSwitchBranch: G,
                onCommitChanges: oe[13] || (oe[13] = (Ze) => le.value = !0),
                onSyncEnvironment: oe[14] || (oe[14] = (Ze) => ie.value = !0),
                onViewWorkflows: oe[15] || (oe[15] = (Ze) => Z("workflows", "this-env")),
                onViewHistory: oe[16] || (oe[16] = (Ze) => D("history")),
                onViewDebug: oe[17] || (oe[17] = (Ze) => O("env")),
                onViewNodes: oe[18] || (oe[18] = (Ze) => Z("nodes", "this-env")),
                onRepairMissingModels: va,
                onRepairEnvironment: hn,
                onStartSetup: oe[19] || (oe[19] = (Ze) => me.value = !0),
                onViewEnvironments: oe[20] || (oe[20] = (Ze) => Z("environments", "workspace")),
                onCreateEnvironment: xa
              }, null, 8, ["status", "setup-state"])) : Me.value === "workflows" ? (a(), N(h_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: T,
                onRefresh: ct
              }, null, 512)) : Me.value === "models-env" ? (a(), N(Rb, {
                key: 2,
                onNavigate: Be
              })) : Me.value === "version-control" ? (a(), N(Y4, {
                key: 3,
                commits: V.value,
                "current-ref": (gt = L.value) == null ? void 0 : gt.branch,
                branches: K.value,
                current: ((xt = L.value) == null ? void 0 : xt.branch) || null,
                "initial-tab": he.value,
                onSelect: fe,
                onCheckout: H,
                onSwitch: ge,
                onCreate: He,
                onDelete: ft,
                onToast: Ye
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Me.value === "nodes" ? (a(), N(x2, {
                key: 4,
                "version-mismatches": ((q = (rs = L.value) == null ? void 0 : rs.comparison) == null ? void 0 : q.version_mismatches) || [],
                onOpenNodeManager: Ie,
                onRepairEnvironment: hn,
                onToast: Ye
              }, null, 8, ["version-mismatches"])) : Me.value === "diagnostics" ? (a(), N(dI, {
                key: 5,
                "initial-tab": ne.value
              }, null, 8, ["initial-tab"])) : Me.value === "environments" ? (a(), N(CC, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: M,
                onSwitch: Kt,
                onCreated: pa,
                onDelete: ga,
                onImport: ka,
                onExport: ba
              }, null, 512)) : Me.value === "model-index" ? (a(), N(Hb, {
                key: 7,
                onRefresh: ct
              })) : Me.value === "settings" ? (a(), N(X2, { key: 8 })) : Me.value === "account" ? (a(), N(x8, {
                key: 9,
                onToast: Ye,
                onNavigate: Be
              })) : Me.value === "publish" ? (a(), N(M8, {
                key: 10,
                "environment-name": ((ke = W.value) == null ? void 0 : ke.name) || ((We = L.value) == null ? void 0 : We.environment) || null,
                "branch-name": ((yt = L.value) == null ? void 0 : yt.branch) || null,
                onNavigate: Be
              }, null, 8, ["environment-name", "branch-name"])) : h("", !0)
            ], 64))
          ])
        ]),
        Oe.value ? (a(), N(TI, {
          key: 1,
          commit: Oe.value,
          onClose: oe[21] || (oe[21] = (Ze) => Oe.value = null),
          onCheckout: H,
          onCreateBranch: Nt
        }, null, 8, ["commit"])) : h("", !0),
        I.value ? (a(), N(Xr, {
          key: 2,
          title: I.value.title,
          message: I.value.message,
          details: I.value.details,
          warning: I.value.warning,
          confirmLabel: I.value.confirmLabel,
          cancelLabel: I.value.cancelLabel,
          secondaryLabel: I.value.secondaryLabel,
          secondaryAction: I.value.secondaryAction,
          destructive: I.value.destructive,
          onConfirm: I.value.onConfirm,
          onCancel: oe[22] || (oe[22] = (Ze) => I.value = null),
          onSecondary: I.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        te.value ? (a(), N(Ct, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: oe[23] || (oe[23] = (Ze) => te.value = !1)
        }, {
          body: p(() => [
            k(r8, {
              embedded: "",
              onImportCompleteSwitch: _a
            })
          ]),
          _: 1
        })) : h("", !0),
        re.value ? (a(), N(Ct, {
          key: 4,
          title: X.value ? `EXPORT ENVIRONMENT: ${X.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: $a
        }, {
          body: p(() => [
            k(fx, {
              embedded: "",
              "environment-name": X.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        k(_6, {
          show: Ve.value,
          "from-environment": ((Lt = W.value) == null ? void 0 : Lt.name) || "unknown",
          "to-environment": F.value,
          onConfirm: ra,
          onClose: da
        }, null, 8, ["show", "from-environment", "to-environment"]),
        le.value && L.value ? (a(), N(hc, {
          key: 5,
          status: L.value,
          "as-modal": !0,
          onClose: oe[24] || (oe[24] = (Ze) => le.value = !1),
          onCommitted: ma
        }, null, 8, ["status"])) : h("", !0),
        ie.value && L.value ? (a(), N(V6, {
          key: 6,
          show: ie.value,
          "mismatch-details": {
            missing_nodes: L.value.comparison.missing_nodes,
            extra_nodes: L.value.comparison.extra_nodes
          },
          onConfirm: fa,
          onClose: oe[25] || (oe[25] = (Ze) => ie.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        k(P6, {
          show: je.value,
          state: ve.value.state,
          progress: ve.value.progress,
          message: ve.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ee.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: oe[27] || (oe[27] = st((Ze) => ee.value = !1, ["self"]))
        }, [
          t("div", bT, [
            t("div", $T, [
              oe[40] || (oe[40] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: oe[26] || (oe[26] = (Ze) => ee.value = !1)
              }, [...oe[39] || (oe[39] = [
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
            t("div", CT, [
              oe[41] || (oe[41] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", xT, [
                (a(!0), i(j, null, we(z.value, (Ze) => (a(), i("div", {
                  key: Ze.name,
                  class: Ne(["env-item", { current: Ze.is_current }])
                }, [
                  t("div", ST, [
                    t("div", IT, [
                      t("span", ET, m(Ze.is_current ? "●" : "○"), 1),
                      t("span", TT, m(Ze.name), 1),
                      Ze.current_branch ? (a(), i("span", MT, "(" + m(Ze.current_branch) + ")", 1)) : h("", !0),
                      Ze.is_current ? (a(), i("span", PT, "CURRENT")) : h("", !0)
                    ]),
                    t("div", RT, m(Ze.workflow_count) + " workflows • " + m(Ze.node_count) + " nodes ", 1)
                  ]),
                  Ze.is_current ? h("", !0) : (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (zP) => Kt(Ze.name)
                  }, " SWITCH ", 8, NT))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        me.value ? (a(), N(GE, {
          key: 8,
          "default-path": ((cs = Q.value) == null ? void 0 : cs.default_path) || "~/comfygit",
          "detected-models-dir": ((zs = Q.value) == null ? void 0 : zs.detected_models_dir) || null,
          "initial-step": Re.value,
          "existing-environments": ((Vs = Q.value) == null ? void 0 : Vs.environments) || [],
          "cli-installed": ((Lo = Q.value) == null ? void 0 : Lo.cli_installed) ?? !0,
          "setup-state": ((Do = Q.value) == null ? void 0 : Do.state) || "no_workspace",
          "workspace-path": ((Pl = Q.value) == null ? void 0 : Pl.workspace_path) || null,
          onComplete: ha,
          onClose: ya,
          onSwitchEnvironment: wa,
          onEnvironmentCreatedNoSwitch: Ca
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        t("div", LT, [
          k(Gd, { name: "toast" }, {
            default: p(() => [
              (a(!0), i(j, null, we(Ae.value, (Ze) => (a(), i("div", {
                key: Ze.id,
                class: Ne(["toast", Ze.type])
              }, [
                t("span", DT, m(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), OT = /* @__PURE__ */ Ce(UT, [["__scopeId", "data-v-3bdf9f63"]]), AT = { class: "item-header" }, zT = { class: "item-info" }, VT = { class: "filename" }, FT = { class: "metadata" }, BT = { class: "size" }, WT = {
  key: 0,
  class: "type"
}, GT = { class: "item-actions" }, jT = {
  key: 0,
  class: "progress-section"
}, HT = { class: "progress-bar" }, qT = { class: "progress-stats" }, KT = { class: "downloaded" }, JT = { class: "speed" }, QT = {
  key: 0,
  class: "eta"
}, YT = {
  key: 1,
  class: "status-msg paused"
}, XT = {
  key: 2,
  class: "status-msg queued"
}, ZT = {
  key: 3,
  class: "status-msg completed"
}, e7 = {
  key: 4,
  class: "status-msg failed"
}, t7 = {
  key: 0,
  class: "retries"
}, s7 = /* @__PURE__ */ _e({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
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
      class: Ne(["download-item", `status-${e.item.status}`])
    }, [
      t("div", AT, [
        t("div", zT, [
          t("div", VT, m(e.item.filename), 1),
          t("div", FT, [
            t("span", BT, m(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", WT, m(e.item.type), 1)) : h("", !0)
          ])
        ]),
        t("div", GT, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : h("", !0),
          e.item.status === "paused" ? (a(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : h("", !0),
          e.item.status === "failed" ? (a(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : h("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : h("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), i("div", jT, [
        t("div", HT, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", qT, [
          t("span", KT, m(n(e.item.downloaded)) + " / " + m(n(e.item.size)), 1),
          t("span", JT, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", QT, m(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", YT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", XT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", ZT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", e7, [
        b(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", t7, "(" + m(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Vo = /* @__PURE__ */ Ce(s7, [["__scopeId", "data-v-2110df65"]]), o7 = { class: "queue-title" }, n7 = { class: "count" }, a7 = { class: "queue-actions" }, l7 = { class: "action-label" }, i7 = {
  key: 0,
  class: "overall-progress"
}, r7 = { class: "progress-bar" }, c7 = {
  key: 0,
  class: "current-mini"
}, u7 = { class: "filename" }, d7 = { class: "speed" }, m7 = {
  key: 1,
  class: "queue-content"
}, f7 = {
  key: 0,
  class: "section"
}, v7 = {
  key: 1,
  class: "section"
}, p7 = { class: "section-header" }, g7 = { class: "section-label paused" }, h7 = { class: "items-list" }, y7 = {
  key: 2,
  class: "section"
}, w7 = { class: "section-header" }, _7 = { class: "section-label" }, k7 = { class: "items-list" }, b7 = {
  key: 3,
  class: "section"
}, $7 = { class: "section-header" }, C7 = { class: "section-label" }, x7 = { class: "items-list" }, S7 = {
  key: 4,
  class: "section"
}, I7 = { class: "section-header" }, E7 = { class: "section-label failed" }, T7 = { class: "items-list" }, M7 = /* @__PURE__ */ _e({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: y,
      clearCompleted: _
    } = Ro(), S = $(!1);
    let C = null;
    bt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (R, L) => {
        C && (clearTimeout(C), C = null);
        const V = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, K = L && (L.active > 0 || L.paused > 0);
        V && K && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = A(() => {
      var V;
      if (s.items.length === 0) return 0;
      const R = l.value.length, L = ((V = o.value) == null ? void 0 : V.progress) || 0;
      return Math.round((R + L / 100) / s.items.length * 100);
    });
    function B(R) {
      v(R);
    }
    function E(R) {
      return R === 0 ? "..." : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, L) => (a(), N(Ut, { to: "body" }, [
      Qe(u) ? (a(), i("div", {
        key: 0,
        class: Ne(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: L[0] || (L[0] = (V) => S.value = !S.value)
        }, [
          t("div", o7, [
            L[4] || (L[4] = t("span", { class: "icon" }, "↓", -1)),
            L[5] || (L[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", n7, "(" + m(Qe(d)) + "/" + m(Qe(s).items.length) + ")", 1)
          ]),
          t("div", a7, [
            t("span", l7, m(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), i("div", m7, [
          Qe(o) ? (a(), i("div", f7, [
            L[6] || (L[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            k(Vo, {
              item: Qe(o),
              onCancel: L[1] || (L[1] = (V) => B(Qe(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          Qe(c).length > 0 ? (a(), i("div", v7, [
            t("div", p7, [
              t("span", g7, "Paused (" + m(Qe(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: L[2] || (L[2] = //@ts-ignore
                (...V) => Qe(w) && Qe(w)(...V))
              }, "Resume All")
            ]),
            t("div", h7, [
              (a(!0), i(j, null, we(Qe(c), (V) => (a(), N(Vo, {
                key: V.id,
                item: V,
                onResume: (K) => Qe(g)(V.id),
                onRemove: (K) => Qe(y)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Qe(n).length > 0 ? (a(), i("div", y7, [
            t("div", w7, [
              t("span", _7, "Queued (" + m(Qe(n).length) + ")", 1)
            ]),
            t("div", k7, [
              (a(!0), i(j, null, we(Qe(n), (V) => (a(), N(Vo, {
                key: V.id,
                item: V,
                onCancel: (K) => B(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          Qe(l).length > 0 ? (a(), i("div", b7, [
            t("div", $7, [
              t("span", C7, "Completed (" + m(Qe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: L[3] || (L[3] = //@ts-ignore
                (...V) => Qe(_) && Qe(_)(...V))
              }, "Clear")
            ]),
            t("div", x7, [
              (a(!0), i(j, null, we(Qe(l).slice(0, 3), (V) => (a(), N(Vo, {
                key: V.id,
                item: V,
                onRemove: (K) => Qe(y)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Qe(r).length > 0 ? (a(), i("div", S7, [
            t("div", I7, [
              t("span", E7, "Failed (" + m(Qe(r).length) + ")", 1)
            ]),
            t("div", T7, [
              (a(!0), i(j, null, we(Qe(r), (V) => (a(), N(Vo, {
                key: V.id,
                item: V,
                onRetry: (K) => Qe(f)(V.id),
                onRemove: (K) => Qe(y)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (a(), i("div", i7, [
          t("div", r7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${x.value}%` })
            }, null, 4)
          ]),
          Qe(o) ? (a(), i("div", c7, [
            t("span", u7, m(Qe(o).filename), 1),
            t("span", d7, m(E(Qe(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), P7 = /* @__PURE__ */ Ce(M7, [["__scopeId", "data-v-3a3c9607"]]), R7 = { class: "detail-header" }, N7 = { class: "item-count" }, L7 = { class: "resource-list" }, D7 = { class: "item-info" }, U7 = { class: "item-name" }, O7 = {
  key: 0,
  class: "item-subtitle"
}, A7 = {
  key: 0,
  class: "installing-badge"
}, z7 = ["title"], V7 = {
  key: 2,
  class: "installed-badge"
}, F7 = {
  key: 3,
  class: "queued-badge"
}, B7 = {
  key: 4,
  class: "action-buttons"
}, W7 = {
  key: 1,
  class: "no-action"
}, G7 = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = A(() => o.items.filter((y) => y.canAction)), r = A(() => l.value.length > 0 && l.value.every(
      (y) => {
        var _, S;
        return o.queuedItems.has(y.id) || ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) || ((S = o.failedItems) == null ? void 0 : S.has(y.id));
      }
    )), c = A(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(y) {
      return o.queuedItems.has(y.id);
    }
    function d(y) {
      return o.installingItem === y.id;
    }
    function v(y) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function f(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(y.id)) ?? !1;
    }
    function g(y) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(y.id)) || "Unknown error";
    }
    function w(y) {
      return y.actions && y.actions.length > 0 ? y.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (y, _) => (a(), N(Ct, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (S) => n("close"))
    }, {
      body: p(() => [
        t("div", R7, [
          t("span", N7, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), N(Pe, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (S) => n("bulk-action"))
          }, {
            default: p(() => [
              b(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        t("div", L7, [
          (a(!0), i(j, null, we(e.items, (S) => (a(), i("div", {
            key: S.id,
            class: "resource-item"
          }, [
            t("div", D7, [
              t("span", U7, m(S.name), 1),
              S.subtitle ? (a(), i("span", O7, m(S.subtitle), 1)) : h("", !0)
            ]),
            S.canAction ? (a(), i(j, { key: 0 }, [
              d(S) ? (a(), i("span", A7, "Installing...")) : f(S) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: g(S)
              }, "Failed ⚠", 8, z7)) : v(S) ? (a(), i("span", V7, "Installed")) : u(S) ? (a(), i("span", F7, "Queued")) : (a(), i("div", B7, [
                (a(!0), i(j, null, we(w(S), (C) => (a(), N(Pe, {
                  key: `${S.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (x) => n("action", S, C.key)
                }, {
                  default: p(() => [
                    b(m(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", W7, m(S.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: p(() => [
        k(Pe, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (S) => n("close"))
        }, {
          default: p(() => [..._[3] || (_[3] = [
            b("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), j7 = /* @__PURE__ */ Ce(G7, [["__scopeId", "data-v-ec7e9202"]]), H7 = {
  key: 0,
  class: "loading-state"
}, q7 = {
  key: 1,
  class: "analysis-results"
}, K7 = {
  key: 0,
  class: "section"
}, J7 = { class: "section-header" }, Q7 = { class: "section-title" }, Y7 = { class: "item-list" }, X7 = { class: "package-info" }, Z7 = { class: "package-name" }, eM = { class: "node-count" }, tM = {
  key: 1,
  class: "installing-badge"
}, sM = {
  key: 2,
  class: "queued-badge"
}, oM = ["title"], nM = {
  key: 4,
  class: "installed-badge"
}, aM = {
  key: 1,
  class: "section"
}, lM = { class: "section-header" }, iM = { class: "section-title" }, rM = { class: "item-list" }, cM = { class: "node-type" }, uM = {
  key: 0,
  class: "overflow-note"
}, dM = {
  key: 2,
  class: "section"
}, mM = { class: "section-header" }, fM = { class: "section-title" }, vM = { class: "item-list" }, pM = { class: "node-type" }, gM = { class: "not-found" }, hM = {
  key: 0,
  class: "overflow-note"
}, yM = {
  key: 3,
  class: "section"
}, wM = { class: "section-header" }, _M = { class: "section-title" }, kM = { class: "item-list" }, bM = { class: "package-info community-info" }, $M = { class: "community-title-row" }, CM = { class: "package-name" }, xM = { class: "node-count" }, SM = { class: "community-mapping-note" }, IM = { key: 0 }, EM = {
  key: 0,
  class: "community-actions"
}, TM = {
  key: 1,
  class: "installing-badge"
}, MM = {
  key: 2,
  class: "queued-badge"
}, PM = ["title"], RM = {
  key: 4,
  class: "installed-badge"
}, NM = ["title"], LM = {
  key: 1,
  class: "no-url"
}, DM = {
  key: 4,
  class: "section"
}, UM = { class: "section-header" }, OM = { class: "section-title" }, AM = { class: "item-list" }, zM = { class: "model-info" }, VM = { class: "model-name" }, FM = {
  key: 1,
  class: "queued-badge"
}, BM = {
  key: 1,
  class: "no-url"
}, WM = { class: "dont-show-again" }, GM = 3e4, jM = /* @__PURE__ */ _e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = $(!1), o = $(null), n = $(null), l = $(!1), r = $(/* @__PURE__ */ new Set()), c = $(/* @__PURE__ */ new Set()), u = $(/* @__PURE__ */ new Map()), d = $(/* @__PURE__ */ new Set()), v = $(!1), f = $(null), g = $(0), w = $(null), y = $(/* @__PURE__ */ new Set()), _ = $(/* @__PURE__ */ new Map()), S = $(/* @__PURE__ */ new Map()), { addToQueue: C } = Ro(), { queueNodeInstall: x } = mt(), B = A(() => {
      var I;
      return ((I = n.value) == null ? void 0 : I.package_aliases) || {};
    });
    function E(I) {
      if (!I) return null;
      const le = B.value;
      let ie = I;
      const Ae = /* @__PURE__ */ new Set();
      for (; le[ie] && !Ae.has(ie); )
        Ae.add(ie), ie = le[ie];
      return ie;
    }
    function R(I, le) {
      return I instanceof Error && I.message ? I.message : typeof I == "string" && I.trim().length > 0 ? I : le;
    }
    function L(I) {
      for (const [le, ie] of _.value.entries())
        ie === I && _.value.delete(le);
    }
    function V(I) {
      if (!S.value.has(I)) return;
      const le = S.value.get(I);
      clearTimeout(le), S.value.delete(I);
    }
    function K() {
      for (const I of S.value.values())
        clearTimeout(I);
      S.value = /* @__PURE__ */ new Map();
    }
    function z(I) {
      V(I);
      const le = setTimeout(() => {
        if (S.value.delete(I), !c.value.has(I)) return;
        L(I), c.value.delete(I), f.value === I && (f.value = null), u.value.set(I, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", I);
      }, GM);
      S.value.set(I, le);
    }
    function W(I) {
      const le = `Cannot install "${I.title}" - package_id is missing`;
      u.value.set(I.item_id, le), o.value = le, console.warn("[ComfyGit] Community install requested without package_id:", I);
    }
    const X = A(() => te.value.length > 0 || he.value.length > 0 || ne.value.length > 0 || Q.value.length > 0 || ue.value.length > 0), te = A(() => {
      var ie, Ae;
      if (!((ie = n.value) != null && ie.nodes)) return [];
      const I = /* @__PURE__ */ new Map(), le = (n.value.nodes.resolved || []).filter((ze) => {
        var xe;
        return !ze.is_installed && ((xe = ze.package) == null ? void 0 : xe.package_id);
      });
      for (const ze of le) {
        const xe = E(ze.package.package_id);
        if (!xe) continue;
        I.has(xe) || I.set(xe, {
          package_id: xe,
          title: ze.package.title || xe,
          node_count: 0,
          node_types: [],
          repository: ze.package.repository || null,
          latest_version: ze.package.latest_version || null
        });
        const qe = I.get(xe);
        qe.node_count++, qe.node_types.push(((Ae = ze.reference) == null ? void 0 : Ae.node_type) || ze.node_type);
      }
      return Array.from(I.values());
    }), re = A(() => te.value.reduce((I, le) => I + le.node_count, 0)), he = A(() => {
      var I;
      return (I = n.value) != null && I.nodes ? (n.value.nodes.unresolved || []).map((le) => {
        var ie;
        return {
          node_type: ((ie = le.reference) == null ? void 0 : ie.node_type) || le.node_type
        };
      }) : [];
    }), ne = A(() => {
      var le;
      if (!((le = n.value) != null && le.nodes)) return [];
      const I = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((ie) => {
        var ze;
        const Ae = ((ze = ie.reference) == null ? void 0 : ze.node_type) || ie.node_type;
        return {
          node_type: Ae,
          guidance: ie.guidance || I[Ae] || null
        };
      });
    }), Q = A(() => {
      var ie, Ae, ze, xe, qe, Ye, at, rt;
      if (!((ie = n.value) != null && ie.nodes)) return [];
      const I = n.value.node_guidance || {}, le = /* @__PURE__ */ new Map();
      for (const ut of n.value.nodes.uninstallable || []) {
        const It = ((Ae = ut.reference) == null ? void 0 : Ae.node_type) || ut.node_type, Wt = E(((ze = ut.package) == null ? void 0 : ze.package_id) || null), ct = Wt || `node:${It}`;
        le.has(ct) || le.set(ct, {
          item_id: ct,
          node_type: It,
          title: ((xe = ut.package) == null ? void 0 : xe.title) || Wt || It,
          node_count: 0,
          package_id: Wt,
          repository: ((qe = ut.package) == null ? void 0 : qe.repository) || null,
          latest_version: ((Ye = ut.package) == null ? void 0 : Ye.latest_version) || null,
          guidance: ut.guidance || I[It] || null
        });
        const fe = le.get(ct);
        fe.node_count++, fe.guidance || (fe.guidance = ut.guidance || I[It] || null), !fe.repository && ((at = ut.package) != null && at.repository) && (fe.repository = ut.package.repository), !fe.latest_version && ((rt = ut.package) != null && rt.latest_version) && (fe.latest_version = ut.package.latest_version);
      }
      return Array.from(le.values());
    }), me = A(() => Q.value.filter((I) => !!I.package_id)), Re = A(() => Q.value.length >= 5 ? Q.value.slice(0, 4) : Q.value), ae = A(() => me.value.length > 0 && me.value.every((I) => {
      const le = I.package_id;
      return r.value.has(le) || c.value.has(le) || u.value.has(le);
    }));
    function pe(I) {
      const le = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return I.repository && le.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), le;
    }
    const ue = A(() => {
      var ze;
      if (!((ze = n.value) != null && ze.models)) return [];
      const I = (n.value.models.resolved || []).filter(
        (xe) => xe.match_type === "download_intent" || xe.match_type === "property_download_intent" || xe.match_type === "not_found"
      ).map((xe) => {
        var qe, Ye, at, rt;
        return {
          filename: ((Ye = (qe = xe.reference) == null ? void 0 : qe.widget_value) == null ? void 0 : Ye.split("/").pop()) || ((at = xe.reference) == null ? void 0 : at.widget_value) || xe.widget_value,
          widget_value: ((rt = xe.reference) == null ? void 0 : rt.widget_value) || xe.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: xe.download_source || null,
          targetPath: xe.target_path || null,
          canDownload: !!(xe.download_source && xe.target_path)
        };
      }), le = (n.value.models.unresolved || []).map((xe) => {
        var qe, Ye, at, rt;
        return {
          filename: ((Ye = (qe = xe.reference) == null ? void 0 : qe.widget_value) == null ? void 0 : Ye.split("/").pop()) || ((at = xe.reference) == null ? void 0 : at.widget_value) || xe.widget_value,
          widget_value: ((rt = xe.reference) == null ? void 0 : rt.widget_value) || xe.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ie = /* @__PURE__ */ new Map(), Ae = [];
      for (const xe of I) {
        if (!xe.url) {
          Ae.push(xe);
          continue;
        }
        const qe = `${xe.filename}::${xe.url}`, Ye = ie.get(qe);
        if (!Ye) {
          ie.set(qe, xe);
          continue;
        }
        !Ye.targetPath && xe.targetPath && (Ye.targetPath = xe.targetPath), !Ye.canDownload && xe.canDownload && (Ye.canDownload = xe.canDownload);
      }
      return [...ie.values(), ...Ae, ...le];
    }), Oe = A(() => ue.value.filter((I) => I.canDownload)), ee = A(() => te.value.length >= 5 ? te.value.slice(0, 4) : te.value), se = A(() => ue.value.length >= 5 ? ue.value.slice(0, 4) : ue.value), P = A(() => te.value.length > 0 && te.value.every(
      (I) => r.value.has(I.package_id) || c.value.has(I.package_id) || u.value.has(I.package_id)
    )), U = A(() => Oe.value.length > 0 && Oe.value.every((I) => d.value.has(I.url))), J = A(() => te.value.length > 0 || me.value.length > 0 || Oe.value.length > 0), T = A(() => {
      const I = (te.value.length === 0 || P.value) && (me.value.length === 0 || ae.value), le = Oe.value.length === 0 || U.value;
      return I && le;
    }), M = A(() => w.value === "models" ? `Missing Models (${ue.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${re.value})` : w.value === "community" ? `Community-Mapped Packages (${Q.value.length})` : ""), ce = A(() => w.value === "models" ? ue.value.map((I) => ({
      id: I.url || I.widget_value,
      name: I.filename,
      canAction: I.canDownload,
      actionDisabledReason: I.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? te.value.map((I) => ({
      id: I.package_id,
      name: I.title,
      subtitle: `(${I.node_count} ${I.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? Q.value.map((I) => ({
      id: I.package_id || I.item_id,
      name: I.title,
      subtitle: `(${I.node_count} ${I.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!I.package_id,
      actionDisabledReason: I.package_id ? void 0 : "Manual setup required",
      actions: I.package_id ? pe(I) : []
    })) : []);
    function Ve(I, le) {
      if (w.value === "models") {
        const ie = ue.value.find((Ae) => Ae.url === I.id || Ae.widget_value === I.id);
        ie && Ee(ie);
      } else if (w.value === "packages") {
        const ie = te.value.find((Ae) => Ae.package_id === I.id);
        ie && F(ie);
      } else if (w.value === "community") {
        const ie = Q.value.find((ze) => (ze.package_id || ze.item_id) === I.id);
        if (!ie) return;
        if (!ie.package_id) {
          W({ item_id: ie.item_id, title: ie.title });
          return;
        }
        Y(ie, le === "install_git" ? "git" : "registry");
      }
    }
    function je() {
      w.value === "models" ? Le() : w.value === "packages" ? $e() : w.value === "community" && Se();
    }
    async function F(I) {
      return ve(I.package_id, I.latest_version, "registry");
    }
    async function Y(I, le) {
      return I.package_id ? ve(I.package_id, I.latest_version, le, I.repository) : (W({ item_id: I.item_id, title: I.title }), !1);
    }
    async function ve(I, le, ie, Ae) {
      const ze = E(I) || I, xe = le || "latest";
      if (r.value.has(ze) || c.value.has(ze) || u.value.has(ze))
        return !0;
      G(), f.value = ze;
      let qe = null;
      try {
        const Ye = {
          id: ze,
          version: xe,
          selected_version: xe,
          mode: "remote",
          channel: "default"
        };
        ie === "git" && Ae && (Ye.repository = Ae, Ye.install_source = "git");
        const { ui_id: at } = await x(Ye, {
          beforeQueueStart: (rt) => {
            qe = rt, _.value.set(rt, ze), c.value.add(ze), z(ze), console.log("[ComfyGit] Registered pending install:", {
              ui_id: rt,
              packageId: ze,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return qe || (qe = at, _.value.set(at, ze), c.value.add(ze), z(ze), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: at,
          packageId: ze,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Ye) {
        const at = R(Ye, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Ye), qe && _.value.delete(qe), L(ze), V(ze), c.value.delete(ze), u.value.set(ze, at), !1;
      } finally {
        f.value = null;
      }
    }
    function Ee(I) {
      !I.url || !I.targetPath || d.value.has(I.url) || (C([{
        workflow: "unsaved",
        filename: I.filename,
        url: I.url,
        targetPath: I.targetPath
      }]), d.value.add(I.url));
    }
    async function $e() {
      const I = { attempted: 0, failed: 0 };
      for (const le of te.value)
        !r.value.has(le.package_id) && !c.value.has(le.package_id) && !u.value.has(le.package_id) && (I.attempted++, await F(le) || I.failed++);
      return I;
    }
    async function Se() {
      const I = { attempted: 0, failed: 0 };
      for (const le of me.value) {
        const ie = le.package_id;
        !r.value.has(ie) && !c.value.has(ie) && !u.value.has(ie) && (I.attempted++, await Y(le, "registry") || I.failed++);
      }
      return I;
    }
    function Le() {
      const I = Oe.value.filter(
        (le) => !d.value.has(le.url)
      );
      if (I.length === 0) return 0;
      C(I.map((le) => ({
        workflow: "unsaved",
        filename: le.filename,
        url: le.url,
        targetPath: le.targetPath
      })));
      for (const le of I)
        d.value.add(le.url);
      return I.length;
    }
    async function Ue() {
      const I = await $e(), le = await Se();
      Le();
      const ie = I.attempted + le.attempted, Ae = I.failed + le.failed;
      if (ie > 0 && Ae > 0) {
        const ze = ie - Ae;
        o.value = `${ze} of ${ie} installs queued, ${Ae} failed`;
      }
    }
    function De() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Te(I) {
      var ze, xe;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const le = I == null ? void 0 : I.id;
      if (le && y.value.has(le)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${le} this session`);
        return;
      }
      const ie = window.app, Ae = (ze = ie == null ? void 0 : ie.extensionManager) == null ? void 0 : ze.workflow;
      if (Ae) {
        let at = !1;
        for (let rt = 0; rt < 20; rt++) {
          const ut = Ae.activeWorkflow;
          if (!ut) {
            await new Promise((ct) => setTimeout(ct, 50));
            continue;
          }
          const It = (xe = ut.activeState) == null ? void 0 : xe.id;
          if (!(le && It === le)) {
            rt < 19 && await new Promise((ct) => setTimeout(ct, 50));
            continue;
          }
          if (at = !0, ut.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${ut.filename}`), le && y.value.add(le);
            return;
          }
          break;
        }
        at || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, K(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, g.value = 0;
      try {
        const qe = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: I, name: "unsaved" })
        });
        if (!qe.ok) {
          const Ye = await qe.json();
          throw new Error(Ye.error || "Failed to analyze workflow");
        }
        n.value = await qe.json(), X.value && (l.value = !0, le && y.value.add(le));
      } catch (qe) {
        console.error("[ComfyGit] Failed to analyze workflow:", qe);
      } finally {
        s.value = !1;
      }
    }
    function Fe() {
      K(), l.value = !1, n.value = null;
    }
    function Me(I) {
      const { workflow: le } = I.detail;
      le && Te(le);
    }
    function ye(I) {
      var Ae;
      const le = (Ae = I.detail) == null ? void 0 : Ae.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: le,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: I.detail
      });
      const ie = _.value.get(le);
      ie ? (V(ie), f.value = ie, console.log("[ComfyGit] Installing package:", ie)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", le);
    }
    function Z(I) {
      var ze, xe, qe, Ye, at, rt, ut;
      const le = (ze = I.detail) == null ? void 0 : ze.ui_id, ie = (qe = (xe = I.detail) == null ? void 0 : xe.status) == null ? void 0 : qe.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: le,
        status: ie,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: I.detail
      });
      const Ae = _.value.get(le);
      if (Ae) {
        if (V(Ae), _.value.delete(le), c.value.delete(Ae), f.value === Ae && (f.value = null), ie === "success")
          r.value.add(Ae), g.value++, console.log("[ComfyGit] Package installed successfully:", Ae);
        else {
          const It = ((rt = (at = (Ye = I.detail) == null ? void 0 : Ye.status) == null ? void 0 : at.messages) == null ? void 0 : rt[0]) || ((ut = I.detail) == null ? void 0 : ut.result) || "Unknown error";
          u.value.set(Ae, It), console.error("[ComfyGit] Package install failed:", Ae, It);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", le);
    }
    let Be = null;
    function D() {
      var I;
      return Be || (Be = (I = window.app) == null ? void 0 : I.api), Be;
    }
    let O = !1;
    function G() {
      if (O) return !0;
      const I = D();
      return I ? (I.addEventListener("cm-task-started", ye), I.addEventListener("cm-task-completed", Z), I.addEventListener("comfygit:workflow-changed", Ie), O = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ie(I) {
      const { change_type: le } = I.detail;
      (le === "created" || le === "modified") && l.value && (K(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return nt(() => {
      window.addEventListener("comfygit:workflow-loaded", Me);
    }), Mo(() => {
      if (K(), window.removeEventListener("comfygit:workflow-loaded", Me), O) {
        const I = D();
        I && (I.removeEventListener("cm-task-started", ye), I.removeEventListener("cm-task-completed", Z), I.removeEventListener("comfygit:workflow-changed", Ie)), O = !1;
      }
    }), (I, le) => (a(), i(j, null, [
      l.value ? (a(), N(Ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Fe
      }, {
        body: p(() => [
          s.value ? (a(), i("div", H7, [...le[5] || (le[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && X.value ? (a(), i("div", q7, [
            te.value.length > 0 ? (a(), i("div", K7, [
              t("div", J7, [
                t("span", Q7, "Missing Custom Nodes (" + m(re.value) + ")", 1),
                te.value.length > 1 ? (a(), N(Pe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: P.value,
                  onClick: $e
                }, {
                  default: p(() => [
                    b(m(P.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", Y7, [
                (a(!0), i(j, null, we(ee.value, (ie) => (a(), i("div", {
                  key: ie.package_id,
                  class: "package-item"
                }, [
                  t("div", X7, [
                    t("span", Z7, m(ie.title), 1),
                    t("span", eM, "(" + m(ie.node_count) + " " + m(ie.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ie.package_id) && !c.value.has(ie.package_id) && !u.value.has(ie.package_id) ? (a(), N(Pe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === ie.package_id,
                    onClick: (Ae) => F(ie)
                  }, {
                    default: p(() => [
                      b(m(f.value === ie.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === ie.package_id ? (a(), i("span", tM, "Installing...")) : c.value.has(ie.package_id) ? (a(), i("span", sM, "Queued")) : u.value.has(ie.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ie.package_id)
                  }, "Failed ⚠", 8, oM)) : (a(), i("span", nM, "Installed"))
                ]))), 128)),
                te.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: le[0] || (le[0] = (ie) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + m(te.value.length) + " packages...", 1),
                  le[6] || (le[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            he.value.length > 0 ? (a(), i("div", aM, [
              t("div", lM, [
                t("span", iM, "Unknown Nodes (" + m(he.value.length) + ")", 1)
              ]),
              t("div", rM, [
                (a(!0), i(j, null, we(he.value.slice(0, 5), (ie) => (a(), i("div", {
                  key: ie.node_type,
                  class: "item"
                }, [
                  t("code", cM, m(ie.node_type), 1),
                  le[7] || (le[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                he.value.length > 5 ? (a(), i("div", uM, " ...and " + m(he.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            ne.value.length > 0 ? (a(), i("div", dM, [
              t("div", mM, [
                t("span", fM, "Requires Newer ComfyUI (" + m(ne.value.length) + ")", 1)
              ]),
              t("div", vM, [
                (a(!0), i(j, null, we(ne.value.slice(0, 5), (ie) => (a(), i("div", {
                  key: `vg-${ie.node_type}`,
                  class: "item"
                }, [
                  t("code", pM, m(ie.node_type), 1),
                  t("span", gM, m(ie.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ne.value.length > 5 ? (a(), i("div", hM, " ...and " + m(ne.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            Q.value.length > 0 ? (a(), i("div", yM, [
              t("div", wM, [
                t("span", _M, "Community-Mapped Packages (" + m(Q.value.length) + ")", 1),
                me.value.length > 1 ? (a(), N(Pe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ae.value,
                  onClick: Se
                }, {
                  default: p(() => [
                    b(m(ae.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", kM, [
                (a(!0), i(j, null, we(Re.value, (ie) => (a(), i("div", {
                  key: `community-${ie.item_id}`,
                  class: "package-item"
                }, [
                  t("div", bM, [
                    t("div", $M, [
                      t("span", CM, m(ie.title), 1),
                      t("span", xM, "(" + m(ie.node_count) + " " + m(ie.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", SM, [
                      le[8] || (le[8] = b(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ie.guidance ? (a(), i("span", IM, ". " + m(ie.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  ie.package_id ? (a(), i(j, { key: 0 }, [
                    !r.value.has(ie.package_id) && !c.value.has(ie.package_id) && !u.value.has(ie.package_id) ? (a(), i("div", EM, [
                      k(Pe, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === ie.package_id,
                        onClick: (Ae) => Y(ie, "registry")
                      }, {
                        default: p(() => [
                          b(m(f.value === ie.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ie.repository ? (a(), N(Pe, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === ie.package_id,
                        onClick: (Ae) => Y(ie, "git")
                      }, {
                        default: p(() => [...le[9] || (le[9] = [
                          b(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : f.value === ie.package_id ? (a(), i("span", TM, "Installing...")) : c.value.has(ie.package_id) ? (a(), i("span", MM, "Queued")) : u.value.has(ie.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ie.package_id)
                    }, "Failed ⚠", 8, PM)) : (a(), i("span", RM, "Installed"))
                  ], 64)) : (a(), i(j, { key: 1 }, [
                    u.value.has(ie.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ie.item_id)
                    }, "Failed ⚠", 8, NM)) : (a(), i("span", LM, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                Q.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: le[1] || (le[1] = (ie) => w.value = "community")
                }, [
                  t("span", null, "Show all " + m(Q.value.length) + " packages...", 1),
                  le[10] || (le[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            ue.value.length > 0 ? (a(), i("div", DM, [
              t("div", UM, [
                t("span", OM, "Missing Models (" + m(ue.value.length) + ")", 1),
                Oe.value.length > 1 ? (a(), N(Pe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: U.value,
                  onClick: Le
                }, {
                  default: p(() => [
                    b(m(U.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", AM, [
                (a(!0), i(j, null, we(se.value, (ie) => (a(), i("div", {
                  key: ie.widget_value,
                  class: "model-item"
                }, [
                  t("div", zM, [
                    t("span", VM, m(ie.filename), 1)
                  ]),
                  ie.canDownload ? (a(), i(j, { key: 0 }, [
                    d.value.has(ie.url) ? (a(), i("span", FM, "Queued")) : (a(), N(Pe, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ae) => Ee(ie)
                    }, {
                      default: p(() => [...le[11] || (le[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), i("span", BM, "Manual download required"))
                ]))), 128)),
                ue.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: le[2] || (le[2] = (ie) => w.value = "models")
                }, [
                  t("span", null, "Show all " + m(ue.value.length) + " models...", 1),
                  le[12] || (le[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            t("div", WM, [
              k(Kn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  le[3] || (le[3] = (ie) => v.value = ie),
                  De
                ]
              }, {
                default: p(() => [...le[13] || (le[13] = [
                  b(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: p(() => [
          k(Pe, {
            variant: "secondary",
            onClick: Fe
          }, {
            default: p(() => [...le[14] || (le[14] = [
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          J.value ? (a(), N(Pe, {
            key: 0,
            variant: "primary",
            disabled: T.value,
            onClick: Ue
          }, {
            default: p(() => [
              b(m(T.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      w.value ? (a(), N(j7, {
        key: 1,
        title: M.value,
        items: ce.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: le[4] || (le[4] = (ie) => w.value = null),
        onAction: Ve,
        onBulkAction: je
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), HM = /* @__PURE__ */ Ce(jM, [["__scopeId", "data-v-dfb55c3f"]]), qM = {
  key: 0,
  class: "io-mapping-root"
}, KM = { class: "io-mapping-visual-layer" }, JM = { class: "io-mapping-header" }, QM = { class: "io-mapping-header-main" }, YM = { class: "io-mapping-subtitle" }, XM = {
  key: 0,
  class: "io-mapping-hover-summary"
}, ZM = { class: "io-mapping-header-actions" }, eP = { class: "io-mapping-sidebar" }, tP = { class: "io-mapping-sidebar-scroll" }, sP = {
  key: 0,
  class: "io-state-block"
}, oP = {
  key: 1,
  class: "io-state-block io-state-error"
}, nP = { class: "contract-summary" }, aP = { class: "summary-pill" }, lP = { class: "summary-pill" }, iP = { class: "summary-pill" }, rP = { class: "mapping-section" }, cP = { class: "section-header" }, uP = {
  key: 0,
  class: "empty-message"
}, dP = ["onClick"], mP = { class: "item-card-title" }, fP = { class: "item-card-meta" }, vP = { class: "item-card-summary" }, pP = { key: 0 }, gP = { class: "mapping-section" }, hP = { class: "section-header" }, yP = {
  key: 0,
  class: "empty-message"
}, wP = ["onClick"], _P = { class: "item-card-title" }, kP = { class: "item-card-meta" }, bP = { class: "item-card-summary" }, $P = { class: "io-mapping-footer" }, CP = /* @__PURE__ */ _e({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: n } = mt(), l = $(!1), r = $(""), c = $(!1), u = $(!1), d = $(null), v = $(null), f = $(null), g = $(null), w = $(null), y = $(0), _ = $(null), S = $(null);
    let C = null;
    const x = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], B = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], E = A(() => {
      if (!f.value)
        return { inputs: [], outputs: [] };
      const D = f.value.default_contract || "default";
      return f.value.contracts[D] || (f.value.contracts[D] = { inputs: [], outputs: [] }), f.value.contracts[D];
    }), R = A(() => {
      var O;
      const D = ((O = v.value) == null ? void 0 : O.contract_summary.status) ?? "none";
      return D === "valid" ? "Valid Contract" : D === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function L(D) {
      return D ? JSON.parse(JSON.stringify(D)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function V(D) {
      return D === "integer" || D === "number";
    }
    function K(D) {
      return D === "enum";
    }
    function z(D) {
      return D == null ? "" : String(D);
    }
    function W(D) {
      const O = D.trim();
      if (!O) return;
      const G = Number(O);
      return Number.isFinite(G) ? G : void 0;
    }
    function X(D) {
      return (D || []).join(`
`);
    }
    function te(D) {
      return D.split(/[\n,]/).map((O) => O.trim()).filter(Boolean);
    }
    function re(D) {
      return typeof D == "string" ? D.length > 24 ? `${D.slice(0, 24)}...` : D : String(D);
    }
    function he(D) {
      return D == null ? "" : String(D);
    }
    function ne(D) {
      var G;
      const O = (G = D == null ? void 0 : D.options) == null ? void 0 : G.values;
      return Array.isArray(O) ? O.map((Ie) => String(Ie)).filter(Boolean) : [];
    }
    function Q(D, O) {
      var I;
      const G = (I = D == null ? void 0 : D.options) == null ? void 0 : I[O];
      if (G == null || G === "") return;
      const Ie = Number(G);
      return Number.isFinite(Ie) ? Ie : void 0;
    }
    function me(D, O) {
      return D.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || O;
    }
    function Re(D) {
      const O = String(D ?? "").toLowerCase();
      return O.includes("image") ? "image" : O.includes("video") ? "video" : O.includes("audio") ? "audio" : O.includes("int") ? "integer" : O.includes("float") || O.includes("double") || O.includes("number") ? "number" : O.includes("bool") ? "boolean" : O.includes("combo") || O.includes("enum") ? "enum" : O.includes("string") || O.includes("text") ? "string" : "file";
    }
    function ae(D) {
      E.value.inputs.splice(D, 1), g.value === D && (g.value = null);
    }
    function pe(D) {
      E.value.outputs.splice(D, 1), w.value === D && (w.value = null);
    }
    function ue(D) {
      g.value = g.value === D ? null : D, g.value != null && (w.value = null);
    }
    function Oe(D) {
      w.value = w.value === D ? null : D, w.value != null && (g.value = null);
    }
    function ee(D) {
      const O = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(D)) : String(D);
      return document.querySelector(`[data-node-id="${O}"]`);
    }
    function se(D) {
      return D instanceof Element ? !!D.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function P(D) {
      var Ie, I, le, ie, Ae, ze;
      if (!(D instanceof Element)) return null;
      const O = D.closest("[data-node-id]"), G = O == null ? void 0 : O.getAttribute("data-node-id");
      return G ? ((le = (I = (Ie = s.comfyApp) == null ? void 0 : Ie.graph) == null ? void 0 : I.getNodeById) == null ? void 0 : le.call(I, G)) ?? ((ze = (Ae = (ie = s.comfyApp) == null ? void 0 : ie.rootGraph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : ze.call(Ae, G)) ?? null : null;
    }
    function U(D, O) {
      if (O == null || O < 0) return null;
      const G = ee(D);
      return G ? G.querySelectorAll('[data-testid="node-widget"]')[O] ?? null : null;
    }
    function J(D) {
      return !D || D.width <= 0 || D.height <= 0 ? null : {
        left: `${D.left}px`,
        top: `${D.top}px`,
        width: `${D.width}px`,
        height: `${D.height}px`
      };
    }
    function T(D) {
      const O = ee((D == null ? void 0 : D.id) ?? "");
      if (O) return O.getBoundingClientRect();
      const G = s.comfyApp;
      if (!D || typeof (G == null ? void 0 : G.canvasPosToClientPos) != "function") return null;
      const I = G.canvasPosToClientPos([D.pos[0], D.pos[1] - 32]), le = G.canvasPosToClientPos([D.pos[0] + D.size[0], D.pos[1] + D.size[1]]);
      return !I || !le ? null : new DOMRect(I[0], I[1], le[0] - I[0], le[1] - I[1]);
    }
    function M(D) {
      var Ae, ze, xe, qe, Ye, at, rt;
      const O = U(D.node_id, D.widget_idx);
      if (O) return O.getBoundingClientRect();
      const G = ((xe = (ze = (Ae = s.comfyApp) == null ? void 0 : Ae.graph) == null ? void 0 : ze.getNodeById) == null ? void 0 : xe.call(ze, String(D.node_id))) ?? ((at = (Ye = (qe = s.comfyApp) == null ? void 0 : qe.rootGraph) == null ? void 0 : Ye.getNodeById) == null ? void 0 : at.call(Ye, String(D.node_id)));
      if (!G || typeof D.widget_idx != "number" || !Array.isArray(G.widgets)) return null;
      const Ie = G.widgets[D.widget_idx];
      if (!Ie || typeof ((rt = s.comfyApp) == null ? void 0 : rt.canvasPosToClientPos) != "function") return T(G);
      const I = 10, le = s.comfyApp.canvasPosToClientPos([G.pos[0] + I, G.pos[1] + (Ie.y ?? 0)]), ie = s.comfyApp.canvasPosToClientPos([G.pos[0] + G.size[0] - I, G.pos[1] + (Ie.y ?? 0) + (Ie.computedHeight ?? 24)]);
      return !le || !ie ? T(G) : new DOMRect(le[0], le[1], ie[0] - le[0], ie[1] - le[1]);
    }
    function ce(D) {
      var G, Ie, I, le, ie, Ae;
      const O = ((I = (Ie = (G = s.comfyApp) == null ? void 0 : G.graph) == null ? void 0 : Ie.getNodeById) == null ? void 0 : I.call(Ie, String(D.node_id))) ?? ((Ae = (ie = (le = s.comfyApp) == null ? void 0 : le.rootGraph) == null ? void 0 : ie.getNodeById) == null ? void 0 : Ae.call(ie, String(D.node_id)));
      return T(O);
    }
    const Ve = A(() => (y.value, E.value.inputs.map((D, O) => {
      const G = J(M(D));
      return G ? {
        key: `input-${O}-${D.node_id}-${D.widget_idx ?? "na"}`,
        style: G,
        active: g.value === O
      } : null;
    }).filter((D) => !!D))), je = A(() => (y.value, E.value.outputs.map((D, O) => {
      const G = J(ce(D));
      return G ? {
        key: `output-${O}-${D.node_id}-${D.selector ?? "primary"}`,
        style: G,
        active: w.value === O
      } : null;
    }).filter((D) => !!D)));
    function F(D) {
      var xe, qe, Ye, at, rt, ut, It, Wt, ct, fe;
      if (se(D.target)) return null;
      const O = (xe = s.comfyApp) == null ? void 0 : xe.canvas;
      if (!O) return null;
      const G = (qe = O.convertEventToCanvasOffset) == null ? void 0 : qe.call(O, D);
      if (!G || G.length < 2) return null;
      const [Ie, I] = G, le = O.graph || ((Ye = s.comfyApp) == null ? void 0 : Ye.graph) || ((at = s.comfyApp) == null ? void 0 : at.rootGraph), ie = ((rt = le == null ? void 0 : le.getNodeOnPos) == null ? void 0 : rt.call(le, Ie, I, O.visible_nodes)) || ((ut = O.getNodeOnPos) == null ? void 0 : ut.call(O, Ie, I)) || P(D.target);
      if (!ie) return null;
      const Ae = (It = ie.getWidgetOnPos) == null ? void 0 : It.call(ie, Ie, I, !0);
      if (Ae)
        return { kind: "input", node: ie, widget: Ae, canvasX: Ie, canvasY: I };
      const ze = ((Wt = ie.getOutputOnPos) == null ? void 0 : Wt.call(ie, [Ie, I])) || ((fe = (ct = ie.constructor) == null ? void 0 : ct.nodeData) != null && fe.output_node ? { name: ie.title || ie.type || "output", type: "image" } : null);
      return ze ? { kind: "output", node: ie, output: ze, canvasX: Ie, canvasY: I } : null;
    }
    function Y(D, O) {
      var Ae;
      const G = Array.isArray(D.widgets) ? D.widgets.indexOf(O) : -1, Ie = E.value.inputs.findIndex(
        (ze) => String(ze.node_id) === String(D.id) && ze.widget_idx === G
      );
      if (Ie >= 0) {
        g.value = Ie;
        return;
      }
      const I = typeof ((Ae = O == null ? void 0 : O.options) == null ? void 0 : Ae.property) == "string" ? O.options.property : void 0, le = (O == null ? void 0 : O.name) || I || "input", ie = {
        name: me(String(le), `input_${E.value.inputs.length + 1}`),
        display_name: String((O == null ? void 0 : O.name) || I || `Input ${E.value.inputs.length + 1}`),
        type: Re(O == null ? void 0 : O.type),
        node_id: String(D.id),
        widget_idx: G >= 0 ? G : void 0,
        field_key: I,
        required: !0,
        default: (O == null ? void 0 : O.value) ?? ""
      };
      V(ie.type) && (ie.min = Q(O, "min"), ie.max = Q(O, "max")), K(ie.type) && (ie.enum_values = ne(O)), E.value.inputs.push(ie), g.value = E.value.inputs.length - 1, w.value = null;
    }
    function ve(D, O) {
      const G = Array.isArray(D.outputs) ? D.outputs.indexOf(O) : -1, Ie = G >= 0 ? `slot:${G}` : "primary", I = E.value.outputs.findIndex(
        (ie) => String(ie.node_id) === String(D.id) && (ie.selector || "primary") === Ie
      );
      if (I >= 0) {
        w.value = I;
        return;
      }
      const le = {
        name: me(String((O == null ? void 0 : O.name) || "output"), `output_${E.value.outputs.length + 1}`),
        display_name: String((O == null ? void 0 : O.name) || `Output ${E.value.outputs.length + 1}`),
        type: Re(O == null ? void 0 : O.type),
        node_id: String(D.id),
        selector: Ie
      };
      E.value.outputs.push(le), w.value = E.value.outputs.length - 1, g.value = null;
    }
    function Ee(D) {
      var Ie, I, le;
      if (!l.value) {
        _.value = null, S.value = null;
        return;
      }
      const O = F(D);
      if (!O) {
        _.value = null, S.value = null;
        return;
      }
      if (O.kind === "input") {
        const ie = Array.isArray(O.node.widgets) ? O.node.widgets.indexOf(O.widget) : -1, Ae = J(((Ie = U(O.node.id, ie)) == null ? void 0 : Ie.getBoundingClientRect()) ?? M({
          node_id: String(O.node.id),
          widget_idx: ie >= 0 ? ie : void 0
        }));
        if (!Ae) {
          _.value = null, S.value = null;
          return;
        }
        _.value = {
          kind: "input",
          label: `${((I = O.widget) == null ? void 0 : I.name) || "widget"} · Node ${O.node.id}`
        }, S.value = { kind: "input", style: Ae };
        return;
      }
      const G = J(T(O.node));
      if (!G) {
        _.value = null, S.value = null;
        return;
      }
      _.value = {
        kind: "output",
        label: `${((le = O.output) == null ? void 0 : le.name) || O.node.title || O.node.type || "output"} · Node ${O.node.id}`
      }, S.value = { kind: "output", style: G };
    }
    function $e(D) {
      var Ie, I, le;
      if (!l.value || !f.value || D.button !== 0) return;
      const O = F(D);
      if (!O) return;
      const G = (Ie = s.comfyApp) == null ? void 0 : Ie.canvas;
      if (G) {
        if (O.kind === "input") {
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(G.graph_mouse) && (G.graph_mouse[0] = O.canvasX, G.graph_mouse[1] = O.canvasY), (I = G.selectNode) == null || I.call(G, O.node, !1), Y(O.node, O.widget);
          return;
        }
        D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(G.graph_mouse) && (G.graph_mouse[0] = O.canvasX, G.graph_mouse[1] = O.canvasY), (le = G.selectNode) == null || le.call(G, O.node, !1), ve(O.node, O.output);
      }
    }
    function Se() {
      document.addEventListener("pointerdown", $e, !0), document.addEventListener("pointermove", Ee, !0);
    }
    function Le() {
      document.removeEventListener("pointerdown", $e, !0), document.removeEventListener("pointermove", Ee, !0);
    }
    async function Ue() {
      if (r.value) {
        c.value = !0, d.value = null;
        try {
          v.value = await o(r.value), f.value = L(v.value.execution_contract);
        } catch (D) {
          d.value = D instanceof Error ? D.message : "Failed to load workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    async function De() {
      if (!(!f.value || !r.value)) {
        u.value = !0, d.value = null;
        try {
          v.value = await n(r.value, f.value), f.value = L(v.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: r.value }
          })), Fe({ reopenPanel: !0 });
        } catch (D) {
          d.value = D instanceof Error ? D.message : "Failed to save workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    function Te() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Fe(D) {
      l.value = !1, _.value = null, S.value = null, D != null && D.reopenPanel && Te();
    }
    async function Me(D) {
      var Ie, I;
      const G = (I = (Ie = D.detail) == null ? void 0 : Ie.workflowName) == null ? void 0 : I.trim();
      G && (r.value = G, g.value = null, w.value = null, l.value = !0, await Ue());
    }
    function ye(D) {
      D.key === "Escape" && l.value && Fe({ reopenPanel: !0 });
    }
    function Z() {
      if (C != null) return;
      const D = () => {
        if (y.value += 1, !l.value) {
          C = null;
          return;
        }
        C = window.requestAnimationFrame(D);
      };
      C = window.requestAnimationFrame(D);
    }
    function Be() {
      C != null && (window.cancelAnimationFrame(C), C = null);
    }
    return bt(l, (D) => {
      D ? (Se(), Z()) : (Le(), Be());
    }), nt(() => {
      window.addEventListener("comfygit:open-io-mapping", Me), window.addEventListener("keydown", ye);
    }), na(() => {
      Le(), Be(), window.removeEventListener("comfygit:open-io-mapping", Me), window.removeEventListener("keydown", ye);
    }), (D, O) => l.value ? (a(), i("div", qM, [
      t("div", KM, [
        (a(!0), i(j, null, we(Ve.value, (G) => (a(), i("div", {
          key: G.key,
          class: Ne(["io-highlight", "io-highlight-input", { active: G.active }]),
          style: Ft(G.style)
        }, null, 6))), 128)),
        (a(!0), i(j, null, we(je.value, (G) => (a(), i("div", {
          key: G.key,
          class: Ne(["io-highlight", "io-highlight-output", { active: G.active }]),
          style: Ft(G.style)
        }, null, 6))), 128)),
        S.value ? (a(), i("div", {
          key: 0,
          class: Ne(["io-highlight", S.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(S.value.style)
        }, null, 6)) : h("", !0)
      ]),
      t("div", JM, [
        t("div", QM, [
          O[4] || (O[4] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", YM, m(r.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          _.value ? (a(), i("div", XM, " Hovering " + m(_.value.kind) + ": " + m(_.value.label), 1)) : h("", !0)
        ]),
        t("div", ZM, [
          k(Pe, {
            size: "sm",
            variant: "secondary",
            onClick: O[0] || (O[0] = (G) => Fe({ reopenPanel: !0 }))
          }, {
            default: p(() => [...O[5] || (O[5] = [
              b(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", eP, [
        t("div", tP, [
          c.value ? (a(), i("div", sP, " Loading workflow contract... ")) : d.value ? (a(), i("div", oP, m(d.value), 1)) : f.value ? (a(), i(j, { key: 2 }, [
            t("section", nP, [
              t("span", aP, m(R.value), 1),
              t("span", lP, m(E.value.inputs.length) + " input" + m(E.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", iP, m(E.value.outputs.length) + " output" + m(E.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("section", rP, [
              t("div", cP, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...O[6] || (O[6] = [
                    b("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.inputs.length ? h("", !0) : (a(), i("div", uP, " No inputs configured. ")),
              (a(!0), i(j, null, we(E.value.inputs, (G, Ie) => (a(), i("div", {
                key: `input-${Ie}`,
                class: Ne(["item-card", { selected: g.value === Ie }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (I) => ue(Ie)
                }, [
                  t("div", null, [
                    t("div", mP, m(G.name || `Input ${Ie + 1}`), 1),
                    t("div", fP, [
                      b(" Node " + m(G.node_id || "?"), 1),
                      G.widget_idx !== void 0 ? (a(), i(j, { key: 0 }, [
                        b(" · Widget " + m(G.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", vP, [
                      t("span", null, m(G.type || "string"), 1),
                      t("span", null, m(G.required ? "required" : "optional"), 1),
                      G.default !== void 0 && G.default !== "" ? (a(), i("span", pP, "default " + m(re(G.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Pe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((I) => ae(Ie), ["stop"])
                  }, {
                    default: p(() => [...O[7] || (O[7] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, dP),
                g.value === Ie ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: O[1] || (O[1] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: G.name,
                        "onUpdate:modelValue": (I) => G.name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: G.display_name,
                        "onUpdate:modelValue": (I) => G.display_name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: p(() => [
                      k(lo, {
                        "model-value": G.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (I) => G.type = I
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Required" }, {
                    default: p(() => [
                      k(lo, {
                        "model-value": G.required ? "true" : "false",
                        options: B,
                        "full-width": "",
                        "onUpdate:modelValue": (I) => G.required = I === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, {
                    class: Ne({ "item-grid-full": G.type === "string" || G.type === "enum" }),
                    label: "Default"
                  }, {
                    default: p(() => [
                      G.type === "string" ? (a(), N(Ks, {
                        key: 0,
                        "model-value": he(G.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (I) => G.default = I
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), N(it, {
                        key: 1,
                        modelValue: G.default,
                        "onUpdate:modelValue": (I) => G.default = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  V(G.type) ? (a(), N(vt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: p(() => [
                      k(it, {
                        "model-value": z(G.min),
                        "full-width": "",
                        "onUpdate:modelValue": (I) => G.min = W(I)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  V(G.type) ? (a(), N(vt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: p(() => [
                      k(it, {
                        "model-value": z(G.max),
                        "full-width": "",
                        "onUpdate:modelValue": (I) => G.max = W(I)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  K(G.type) ? (a(), N(vt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: p(() => [
                      k(Ks, {
                        "model-value": X(G.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (I) => G.enum_values = te(I)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            t("section", gP, [
              t("div", hP, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...O[8] || (O[8] = [
                    b("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              E.value.outputs.length ? h("", !0) : (a(), i("div", yP, " No outputs configured. ")),
              (a(!0), i(j, null, we(E.value.outputs, (G, Ie) => (a(), i("div", {
                key: `output-${Ie}`,
                class: Ne(["item-card", { selected: w.value === Ie }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (I) => Oe(Ie)
                }, [
                  t("div", null, [
                    t("div", _P, m(G.name || `Output ${Ie + 1}`), 1),
                    t("div", kP, [
                      b(" Node " + m(G.node_id || "?"), 1),
                      G.selector ? (a(), i(j, { key: 0 }, [
                        b(" · " + m(G.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    t("div", bP, [
                      t("span", null, m(G.type || "file"), 1)
                    ])
                  ]),
                  k(Pe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: st((I) => pe(Ie), ["stop"])
                  }, {
                    default: p(() => [...O[9] || (O[9] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, wP),
                w.value === Ie ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: O[2] || (O[2] = st(() => {
                  }, ["stop"]))
                }, [
                  k(vt, { label: "Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: G.name,
                        "onUpdate:modelValue": (I) => G.name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Display Name" }, {
                    default: p(() => [
                      k(it, {
                        modelValue: G.display_name,
                        "onUpdate:modelValue": (I) => G.display_name = I,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(vt, { label: "Type" }, {
                    default: p(() => [
                      k(lo, {
                        "model-value": G.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (I) => G.type = I
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : h("", !0)
              ], 2))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        t("div", $P, [
          k(Pe, {
            variant: "secondary",
            onClick: O[3] || (O[3] = (G) => Fe({ reopenPanel: !0 }))
          }, {
            default: p(() => [...O[10] || (O[10] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Pe, {
            variant: "primary",
            loading: u.value,
            onClick: De
          }, {
            default: p(() => [...O[11] || (O[11] = [
              b(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : h("", !0);
  }
}), xP = /* @__PURE__ */ Ce(CP, [["__scopeId", "data-v-f48c60c3"]]), SP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', IP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', EP = {
  comfy: SP,
  phosphor: IP
}, Tl = "comfy", kc = "comfygit-theme";
let to = null, bc = Tl;
function TP() {
  try {
    const e = localStorage.getItem(kc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Tl;
}
function $c(e = Tl) {
  to && to.remove(), to = document.createElement("style"), to.id = "comfygit-theme-styles", to.setAttribute("data-theme", e), to.textContent = EP[e], document.head.appendChild(to), document.body.setAttribute("data-comfygit-theme", e), bc = e;
  try {
    localStorage.setItem(kc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function MP() {
  return bc;
}
function PP(e) {
  $c(e);
}
function RP(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ml = document.createElement("link");
Ml.rel = "stylesheet";
Ml.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ml);
const NP = TP();
$c(NP);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), PP(e);
  },
  getTheme: () => {
    const e = MP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ms = null, en = null, Yt = null, tn = null, Fo = null, Ii = null, Bo = null, Ei = null, Wo = null, Ti = null;
const xo = $(null);
let dn = "no_workspace", Cc = !1;
async function Dn() {
  var e;
  if (!((e = Xt) != null && e.api)) return null;
  try {
    const s = await Xt.api.fetchApi("/v2/comfygit/status");
    s.ok && (xo.value = await s.json());
  } catch {
  }
}
async function ol() {
  var e;
  if ((e = Xt) != null && e.api)
    try {
      const s = await Xt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        dn = o.state, Cc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function nl() {
  var s;
  if (dn === "managed" || !Cc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function LP() {
  if (!xo.value) return !1;
  const e = xo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || xo.value.has_changes;
}
function In(e) {
  Ho(), Ms = document.createElement("div"), Ms.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Ms.appendChild(s), Ms.addEventListener("click", (n) => {
    n.target === Ms && Ho();
  });
  const o = (n) => {
    n.key === "Escape" && (Ho(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), en = pn({
    render: () => Po(OT, {
      initialView: e,
      onClose: Ho,
      onStatusUpdate: async (n) => {
        xo.value = n, sn(), await ol(), al(), nl();
      }
    })
  }), en.mount(s), document.body.appendChild(Ms);
}
function Ho() {
  en && (en.unmount(), en = null), Ms && (Ms.remove(), Ms = null);
}
function Mi(e) {
  Go(), Yt = document.createElement("div"), Yt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Yt.style.position = "fixed", Yt.style.top = `${s.bottom + 8}px`, Yt.style.right = `${window.innerWidth - s.right}px`, Yt.style.zIndex = "10001";
  const o = (l) => {
    Yt && !Yt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), tn = pn({
    render: () => Po(hc, {
      status: xo.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), DP(l.success, l.message), Dn().then(sn);
      }
    })
  }), tn.mount(Yt), document.body.appendChild(Yt);
}
function Go() {
  tn && (tn.unmount(), tn = null), Yt && (Yt.remove(), Yt = null);
}
function DP(e, s) {
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
  r.textContent = s, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function UP() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", Ii = pn({
    render: () => Po(P7)
  }), Ii.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function OP() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-missing-resources-root", Ei = pn({
    render: () => Po(HM)
  }), Ei.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function AP() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-io-mapping-root", Ti = pn({
    render: () => Po(xP, {
      comfyApp: Xt
    })
  }), Ti.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Ht = null;
function sn() {
  if (!Ht) return;
  const e = Ht.querySelector(".commit-indicator");
  e && (e.style.display = LP() ? "block" : "none");
}
function al() {
  if (!Ht) return;
  const e = dn !== "managed";
  Ht.disabled = e, Ht.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const xc = document.createElement("style");
xc.textContent = `
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
document.head.appendChild(xc);
Xt.registerExtension({
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
        Ht && !Ht.disabled && Mi(Ht);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = In, Ht = document.createElement("button"), Ht.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ht.innerHTML = 'Commit <span class="commit-indicator"></span>', Ht.title = "Quick Commit", Ht.onclick = () => Mi(Ht), e.appendChild(s), e.appendChild(Ht), (r = (l = Xt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Xt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), UP(), OP(), AP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      In(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ho();
    }));
    const { loadPendingDownloads: o } = Ro();
    o(), await Promise.all([Dn(), ol()]), sn(), al(), nl(), setTimeout(nl, 100), setInterval(async () => {
      await Promise.all([Dn(), ol()]), sn(), al();
    }, 3e4);
    const n = Xt.api;
    if (n) {
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
        const y = document.createElement("button");
        y.textContent = "Refresh", y.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => c(), g.appendChild(y);
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
        const y = document.createElement("div");
        y.id = "comfygit-error-toast", y.style.cssText = `
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
        _.textContent = "⚠️", _.style.fontSize = "20px", y.appendChild(_);
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", S.appendChild(C);
        const x = document.createElement("div");
        x.textContent = "Dependency conflict detected", x.style.cssText = "font-size: 12px; opacity: 0.8;", S.appendChild(x), y.appendChild(S);
        const B = document.createElement("button");
        B.textContent = "View Logs", B.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, B.onmouseover = () => B.style.background = "#c62828", B.onmouseout = () => B.style.background = "#e53935", B.onclick = () => {
          y.remove(), In("debug-env");
        }, y.appendChild(B);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => y.remove(), y.appendChild(E), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && y.remove();
        }, 1e4);
      }, v = function(g) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
        const y = document.createElement("div");
        y.id = "comfygit-restart-toast", y.style.cssText = `
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
        _.textContent = "✅", _.style.fontSize = "20px", y.appendChild(_);
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", S.appendChild(C);
        const x = document.createElement("div");
        x.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, x.style.cssText = "font-size: 12px; opacity: 0.7;", S.appendChild(x), y.appendChild(S);
        const B = document.createElement("button");
        B.textContent = "Apply Changes", B.style.cssText = `
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
        `, B.onmouseover = () => B.style.background = "rgba(255,255,255,0.1)", B.onmouseout = () => B.style.background = "transparent", B.onclick = async () => {
          B.disabled = !0, B.textContent = "Restarting...", B.style.opacity = "0.7", C.textContent = "Restarting...", x.textContent = "Applying changes, please wait...";
          try {
            const R = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Xt.refreshComboInNodes && (await Xt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", x.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", B.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (L) {
                console.error("[ComfyGit] Failed to refresh nodes:", L), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", B.style.display = "none";
              }
            };
            n.addEventListener("reconnected", R, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (R) {
            console.error("[ComfyGit] Failed to restart:", R), C.textContent = "Restart Failed", C.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", B.textContent = "Try Again", B.disabled = !1, B.style.opacity = "1";
          }
        }, y.appendChild(B);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => y.remove(), y.appendChild(E), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: y } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${y}`), await Dn(), sn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = RP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
