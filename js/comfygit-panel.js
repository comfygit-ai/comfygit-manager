import { app as Bt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Aa(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const tt = {}, fo = [], gs = () => {
}, oi = () => !1, zn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Na = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Ua = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Kr = Object.prototype.hasOwnProperty, Qe = (e, s) => Kr.call(e, s), Be = Array.isArray, mo = (e) => tn(e) === "[object Map]", bo = (e) => tn(e) === "[object Set]", rl = (e) => tn(e) === "[object Date]", Ge = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", ni = (e) => (et(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), ai = Object.prototype.toString, tn = (e) => ai.call(e), qr = (e) => tn(e).slice(8, -1), li = (e) => tn(e) === "[object Object]", za = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, No = /* @__PURE__ */ Aa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Yr = /-\w/g, jt = Fn(
  (e) => e.replace(Yr, (s) => s.slice(1).toUpperCase())
), Jr = /\B([A-Z])/g, Bs = Fn(
  (e) => e.replace(Jr, "-$1").toLowerCase()
), Bn = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ea = Fn(
  (e) => e ? `on${Bn(e)}` : ""
), Us = (e, s) => !Object.is(e, s), _n = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ii = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Vn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Xr = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let cl;
const Wn = () => cl || (cl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ht(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? tc(n) : Ht(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ct(e) || et(e))
    return e;
}
const Qr = /;(?![^(]*\))/g, Zr = /:([^]+)/, ec = /\/\*[^]*?\*\//g;
function tc(e) {
  const s = {};
  return e.replace(ec, "").split(Qr).forEach((o) => {
    if (o) {
      const n = o.split(Zr);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Pe(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Pe(e[o]);
      n && (s += n + " ");
    }
  else if (et(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const sc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", oc = /* @__PURE__ */ Aa(sc);
function ri(e) {
  return !!e || e === "";
}
function nc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = eo(e[n], s[n]);
  return o;
}
function eo(e, s) {
  if (e === s) return !0;
  let o = rl(e), n = rl(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), n = ts(s), o || n)
    return e === s;
  if (o = Be(e), n = Be(s), o || n)
    return o && n ? nc(e, s) : !1;
  if (o = et(e), n = et(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const c in e) {
      const d = e.hasOwnProperty(c), u = s.hasOwnProperty(c);
      if (d && !u || !d && u || !eo(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Fa(e, s) {
  return e.findIndex((o) => eo(o, s));
}
const ci = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Be(e) || et(e) && (e.toString === ai || !Ge(e.toString)) ? ci(e) ? f(e.value) : JSON.stringify(e, di, 2) : String(e), di = (e, s) => ci(s) ? di(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[ta(n, i) + " =>"] = l, o),
    {}
  )
} : bo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => ta(o))
} : ts(s) ? ta(s) : et(s) && !Be(s) && !li(s) ? String(s) : s, ta = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ts(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dt;
class ac {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Dt, !s && Dt && (this.index = (Dt.scopes || (Dt.scopes = [])).push(
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
      const o = Dt;
      try {
        return Dt = this, s();
      } finally {
        Dt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Dt, Dt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Dt = this.prevScope, this.prevScope = void 0);
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
function lc() {
  return Dt;
}
let ot;
const sa = /* @__PURE__ */ new WeakSet();
class ui {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && Dt.active && Dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sa.has(this) && (sa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, dl(this), vi(this);
    const s = ot, o = Qt;
    ot = this, Qt = !0;
    try {
      return this.fn();
    } finally {
      pi(this), ot = s, Qt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Wa(s);
      this.deps = this.depsTail = void 0, dl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    wa(this) && this.run();
  }
  get dirty() {
    return wa(this);
  }
}
let fi = 0, Uo, zo;
function mi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = zo, zo = e;
    return;
  }
  e.next = Uo, Uo = e;
}
function Ba() {
  fi++;
}
function Va() {
  if (--fi > 0)
    return;
  if (zo) {
    let s = zo;
    for (zo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Uo; ) {
    let s = Uo;
    for (Uo = void 0; s; ) {
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
function vi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function pi(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), Wa(n), ic(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function wa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (gi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function gi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = ot, n = Qt;
  ot = e, Qt = !0;
  try {
    vi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Us(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    ot = o, Qt = n, pi(e), e.flags &= -3;
  }
}
function Wa(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Wa(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function ic(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Qt = !0;
const hi = [];
function Ss() {
  hi.push(Qt), Qt = !1;
}
function Is() {
  const e = hi.pop();
  Qt = e === void 0 ? !0 : e;
}
function dl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = ot;
    ot = void 0;
    try {
      s();
    } finally {
      ot = o;
    }
  }
}
let Ko = 0;
class rc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ga {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!ot || !Qt || ot === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ot)
      o = this.activeLink = new rc(ot, this), ot.deps ? (o.prevDep = ot.depsTail, ot.depsTail.nextDep = o, ot.depsTail = o) : ot.deps = ot.depsTail = o, yi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = ot.depsTail, o.nextDep = void 0, ot.depsTail.nextDep = o, ot.depsTail = o, ot.deps === o && (ot.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, Ko++, this.notify(s);
  }
  notify(s) {
    Ba();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Va();
    }
  }
}
function yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        yi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const _a = /* @__PURE__ */ new WeakMap(), Qs = Symbol(
  ""
), ba = Symbol(
  ""
), qo = Symbol(
  ""
);
function wt(e, s, o) {
  if (Qt && ot) {
    let n = _a.get(e);
    n || _a.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Ga()), l.map = n, l.key = o), l.track();
  }
}
function $s(e, s, o, n, l, i) {
  const c = _a.get(e);
  if (!c) {
    Ko++;
    return;
  }
  const d = (u) => {
    u && u.trigger();
  };
  if (Ba(), s === "clear")
    c.forEach(d);
  else {
    const u = Be(e), m = u && za(o);
    if (u && o === "length") {
      const v = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === qo || !ts(w) && w >= v) && d(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && d(c.get(o)), m && d(c.get(qo)), s) {
        case "add":
          u ? m && d(c.get("length")) : (d(c.get(Qs)), mo(e) && d(c.get(ba)));
          break;
        case "delete":
          u || (d(c.get(Qs)), mo(e) && d(c.get(ba)));
          break;
        case "set":
          mo(e) && d(c.get(Qs));
          break;
      }
  }
  Va();
}
function ao(e) {
  const s = Je(e);
  return s === e ? s : (wt(s, "iterate", qo), Wt(e) ? s : s.map(ss));
}
function Gn(e) {
  return wt(e = Je(e), "iterate", qo), e;
}
function Os(e, s) {
  return Es(e) ? Zs(e) ? yo(ss(s)) : yo(s) : ss(s);
}
const cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return oa(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Be(s) ? ao(s) : s)
    );
  },
  entries() {
    return oa(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
  },
  every(e, s) {
    return _s(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return _s(
      this,
      "filter",
      e,
      s,
      (o) => o.map((n) => Os(this, n)),
      arguments
    );
  },
  find(e, s) {
    return _s(
      this,
      "find",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return _s(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return _s(
      this,
      "findLast",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return _s(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return _s(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return na(this, "includes", e);
  },
  indexOf(...e) {
    return na(this, "indexOf", e);
  },
  join(e) {
    return ao(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return na(this, "lastIndexOf", e);
  },
  map(e, s) {
    return _s(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return To(this, "pop");
  },
  push(...e) {
    return To(this, "push", e);
  },
  reduce(e, ...s) {
    return ul(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return ul(this, "reduceRight", e, s);
  },
  shift() {
    return To(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return _s(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return To(this, "splice", e);
  },
  toReversed() {
    return ao(this).toReversed();
  },
  toSorted(e) {
    return ao(this).toSorted(e);
  },
  toSpliced(...e) {
    return ao(this).toSpliced(...e);
  },
  unshift(...e) {
    return To(this, "unshift", e);
  },
  values() {
    return oa(this, "values", (e) => Os(this, e));
  }
};
function oa(e, s, o) {
  const n = Gn(e), l = n[s]();
  return n !== e && !Wt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const dc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const c = Gn(e), d = c !== e && !Wt(e), u = c[s];
  if (u !== dc[s]) {
    const g = u.apply(e, i);
    return d ? ss(g) : g;
  }
  let m = o;
  c !== e && (d ? m = function(g, w) {
    return o.call(this, Os(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = u.call(c, m, n);
  return d && l ? l(v) : v;
}
function ul(e, s, o, n) {
  const l = Gn(e);
  let i = o;
  return l !== e && (Wt(e) ? o.length > 3 && (i = function(c, d, u) {
    return o.call(this, c, d, u, e);
  }) : i = function(c, d, u) {
    return o.call(this, c, Os(e, d), u, e);
  }), l[s](i, ...n);
}
function na(e, s, o) {
  const n = Je(e);
  wt(n, "iterate", qo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Ka(o[0]) ? (o[0] = Je(o[0]), n[s](...o)) : l;
}
function To(e, s, o = []) {
  Ss(), Ba();
  const n = Je(e)[s].apply(e, o);
  return Va(), Is(), n;
}
const uc = /* @__PURE__ */ Aa("__proto__,__v_isRef,__isVue"), wi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function fc(e) {
  ts(e) || (e = String(e));
  const s = Je(this);
  return wt(s, "has", e), s.hasOwnProperty(e);
}
class _i {
  constructor(s = !1, o = !1) {
    this._isReadonly = s, this._isShallow = o;
  }
  get(s, o, n) {
    if (o === "__v_skip") return s.__v_skip;
    const l = this._isReadonly, i = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return n === (l ? i ? kc : Ci : i ? $i : ki).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Be(s);
    if (!l) {
      let u;
      if (c && (u = cc[o]))
        return u;
      if (o === "hasOwnProperty")
        return fc;
    }
    const d = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((ts(o) ? wi.has(o) : uc(o)) || (l || wt(s, "get", o), i))
      return d;
    if ($t(d)) {
      const u = c && za(o) ? d : d.value;
      return l && et(u) ? In(u) : u;
    }
    return et(d) ? l ? In(d) : Vs(d) : d;
  }
}
class bi extends _i {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Be(s) && za(o);
    if (!this._isShallow) {
      const m = Es(i);
      if (!Wt(n) && !Es(n) && (i = Je(i), n = Je(n)), !c && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const d = c ? Number(o) < s.length : Qe(s, o), u = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
    );
    return s === Je(l) && (d ? Us(n, i) && $s(s, "set", o, n) : $s(s, "add", o, n)), u;
  }
  deleteProperty(s, o) {
    const n = Qe(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && $s(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ts(o) || !wi.has(o)) && wt(s, "has", o), n;
  }
  ownKeys(s) {
    return wt(
      s,
      "iterate",
      Be(s) ? "length" : Qs
    ), Reflect.ownKeys(s);
  }
}
class mc extends _i {
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
const vc = /* @__PURE__ */ new bi(), pc = /* @__PURE__ */ new mc(), gc = /* @__PURE__ */ new bi(!0);
const ka = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function hc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Je(l), c = mo(i), d = e === "entries" || e === Symbol.iterator && c, u = e === "keys" && c, m = l[e](...n), v = o ? ka : s ? yo : ss;
    return !s && wt(
      i,
      "iterate",
      u ? ba : Qs
    ), {
      // iterator protocol
      next() {
        const { value: g, done: w } = m.next();
        return w ? { value: g, done: w } : {
          value: d ? [v(g[0]), v(g[1])] : v(g),
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
function un(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yc(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, c = Je(i), d = Je(l);
      e || (Us(l, d) && wt(c, "get", l), wt(c, "get", d));
      const { has: u } = dn(c), m = s ? ka : e ? yo : ss;
      if (u.call(c, l))
        return m(i.get(l));
      if (u.call(c, d))
        return m(i.get(d));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && wt(Je(l), "iterate", Qs), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Je(i), d = Je(l);
      return e || (Us(l, d) && wt(c, "has", l), wt(c, "has", d)), l === d ? i.has(l) : i.has(l) || i.has(d);
    },
    forEach(l, i) {
      const c = this, d = c.__v_raw, u = Je(d), m = s ? ka : e ? yo : ss;
      return !e && wt(u, "iterate", Qs), d.forEach((v, g) => l.call(i, m(v), m(g), c));
    }
  };
  return pt(
    o,
    e ? {
      add: un("add"),
      set: un("set"),
      delete: un("delete"),
      clear: un("clear")
    } : {
      add(l) {
        !s && !Wt(l) && !Es(l) && (l = Je(l));
        const i = Je(this);
        return dn(i).has.call(i, l) || (i.add(l), $s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Wt(i) && !Es(i) && (i = Je(i));
        const c = Je(this), { has: d, get: u } = dn(c);
        let m = d.call(c, l);
        m || (l = Je(l), m = d.call(c, l));
        const v = u.call(c, l);
        return c.set(l, i), m ? Us(i, v) && $s(c, "set", l, i) : $s(c, "add", l, i), this;
      },
      delete(l) {
        const i = Je(this), { has: c, get: d } = dn(i);
        let u = c.call(i, l);
        u || (l = Je(l), u = c.call(i, l)), d && d.call(i, l);
        const m = i.delete(l);
        return u && $s(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Je(this), i = l.size !== 0, c = l.clear();
        return i && $s(
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
    o[l] = hc(l, e, s);
  }), o;
}
function ja(e, s) {
  const o = yc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Qe(o, l) && l in n ? o : n,
    l,
    i
  );
}
const wc = {
  get: /* @__PURE__ */ ja(!1, !1)
}, _c = {
  get: /* @__PURE__ */ ja(!1, !0)
}, bc = {
  get: /* @__PURE__ */ ja(!0, !1)
};
const ki = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), kc = /* @__PURE__ */ new WeakMap();
function $c(e) {
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
function Cc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $c(qr(e));
}
function Vs(e) {
  return Es(e) ? e : Ha(
    e,
    !1,
    vc,
    wc,
    ki
  );
}
function xc(e) {
  return Ha(
    e,
    !1,
    gc,
    _c,
    $i
  );
}
function In(e) {
  return Ha(
    e,
    !0,
    pc,
    bc,
    Ci
  );
}
function Ha(e, s, o, n, l) {
  if (!et(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = Cc(e);
  if (i === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const d = new Proxy(
    e,
    i === 2 ? n : o
  );
  return l.set(e, d), d;
}
function Zs(e) {
  return Es(e) ? Zs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Es(e) {
  return !!(e && e.__v_isReadonly);
}
function Wt(e) {
  return !!(e && e.__v_isShallow);
}
function Ka(e) {
  return e ? !!e.__v_raw : !1;
}
function Je(e) {
  const s = e && e.__v_raw;
  return s ? Je(s) : e;
}
function Sc(e) {
  return !Qe(e, "__v_skip") && Object.isExtensible(e) && ii(e, "__v_skip", !0), e;
}
const ss = (e) => et(e) ? Vs(e) : e, yo = (e) => et(e) ? In(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Ic(e, !1);
}
function Ic(e, s) {
  return $t(e) ? e : new Ec(e, s);
}
class Ec {
  constructor(s, o) {
    this.dep = new Ga(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Je(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Wt(s) || Es(s);
    s = n ? s : Je(s), Us(s, o) && (this._rawValue = s, this._value = n ? s : ss(s), this.dep.trigger());
  }
}
function We(e) {
  return $t(e) ? e.value : e;
}
const Tc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function xi(e) {
  return Zs(e) ? e : new Proxy(e, Tc);
}
class Pc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Ga(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ko - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ot !== this)
      return mi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return gi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Rc(e, s, o = !1) {
  let n, l;
  return Ge(e) ? n = e : (n = e.get, l = e.set), new Pc(n, l, o);
}
const fn = {}, En = /* @__PURE__ */ new WeakMap();
let Js;
function Mc(e, s = !1, o = Js) {
  if (o) {
    let n = En.get(o);
    n || En.set(o, n = []), n.push(e);
  }
}
function Dc(e, s, o = tt) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: d, call: u } = o, m = (x) => l ? x : Wt(x) || l === !1 || l === 0 ? Cs(x, 1) : Cs(x);
  let v, g, w, p, _ = !1, S = !1;
  if ($t(e) ? (g = () => e.value, _ = Wt(e)) : Zs(e) ? (g = () => m(e), _ = !0) : Be(e) ? (S = !0, _ = e.some((x) => Zs(x) || Wt(x)), g = () => e.map((x) => {
    if ($t(x))
      return x.value;
    if (Zs(x))
      return m(x);
    if (Ge(x))
      return u ? u(x, 2) : x();
  })) : Ge(e) ? s ? g = u ? () => u(e, 2) : e : g = () => {
    if (w) {
      Ss();
      try {
        w();
      } finally {
        Is();
      }
    }
    const x = Js;
    Js = v;
    try {
      return u ? u(e, 3, [p]) : e(p);
    } finally {
      Js = x;
    }
  } : g = gs, s && l) {
    const x = g, W = l === !0 ? 1 / 0 : l;
    g = () => Cs(x(), W);
  }
  const $ = lc(), P = () => {
    v.stop(), $ && $.active && Ua($.effects, v);
  };
  if (i && s) {
    const x = s;
    s = (...W) => {
      x(...W), P();
    };
  }
  let D = S ? new Array(e.length).fill(fn) : fn;
  const E = (x) => {
    if (!(!(v.flags & 1) || !v.dirty && !x))
      if (s) {
        const W = v.run();
        if (l || _ || (S ? W.some((V, z) => Us(V, D[z])) : Us(W, D))) {
          w && w();
          const V = Js;
          Js = v;
          try {
            const z = [
              W,
              // pass undefined as the old value when it's changed for the first time
              D === fn ? void 0 : S && D[0] === fn ? [] : D,
              p
            ];
            D = W, u ? u(s, 3, z) : (
              // @ts-expect-error
              s(...z)
            );
          } finally {
            Js = V;
          }
        }
      } else
        v.run();
  };
  return d && d(E), v = new ui(g), v.scheduler = c ? () => c(E, !1) : E, p = (x) => Mc(x, !1, v), w = v.onStop = () => {
    const x = En.get(v);
    if (x) {
      if (u)
        u(x, 4);
      else
        for (const W of x) W();
      En.delete(v);
    }
  }, s ? n ? E(!0) : D = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !et(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    Cs(e.value, s, o);
  else if (Be(e))
    for (let n = 0; n < e.length; n++)
      Cs(e[n], s, o);
  else if (bo(e) || mo(e))
    e.forEach((n) => {
      Cs(n, s, o);
    });
  else if (li(e)) {
    for (const n in e)
      Cs(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Cs(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function sn(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    jn(l, s, o);
  }
}
function os(e, s, o, n) {
  if (Ge(e)) {
    const l = sn(e, s, o, n);
    return l && ni(l) && l.catch((i) => {
      jn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(os(e[i], s, o, n));
    return l;
  }
}
function jn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || tt;
  if (s) {
    let d = s.parent;
    const u = s.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; d; ) {
      const v = d.ec;
      if (v) {
        for (let g = 0; g < v.length; g++)
          if (v[g](e, u, m) === !1)
            return;
      }
      d = d.parent;
    }
    if (i) {
      Ss(), sn(i, null, 10, [
        e,
        u,
        m
      ]), Is();
      return;
    }
  }
  Lc(e, o, l, n, c);
}
function Lc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let ms = -1;
const vo = [];
let As = null, ro = 0;
const Si = /* @__PURE__ */ Promise.resolve();
let Tn = null;
function _t(e) {
  const s = Tn || Si;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Oc(e) {
  let s = ms + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = Yo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function qa(e) {
  if (!(e.flags & 1)) {
    const s = Yo(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Yo(o) ? It.push(e) : It.splice(Oc(s), 0, e), e.flags |= 1, Ii();
  }
}
function Ii() {
  Tn || (Tn = Si.then(Ti));
}
function Ac(e) {
  Be(e) ? vo.push(...e) : As && e.id === -1 ? As.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), Ii();
}
function fl(e, s, o = ms + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ei(e) {
  if (vo.length) {
    const s = [...new Set(vo)].sort(
      (o, n) => Yo(o) - Yo(n)
    );
    if (vo.length = 0, As) {
      As.push(...s);
      return;
    }
    for (As = s, ro = 0; ro < As.length; ro++) {
      const o = As[ro];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    As = null, ro = 0;
  }
}
const Yo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ti(e) {
  try {
    for (ms = 0; ms < It.length; ms++) {
      const s = It[ms];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), sn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ms < It.length; ms++) {
      const s = It[ms];
      s && (s.flags &= -2);
    }
    ms = -1, It.length = 0, Ei(), Tn = null, (It.length || vo.length) && Ti();
  }
}
let ht = null, Pi = null;
function Pn(e) {
  const s = ht;
  return ht = e, Pi = e && e.type.__scopeId || null, s;
}
function h(e, s = ht, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Dn(-1);
    const i = Pn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Pn(i), n._d && Dn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (ht === null)
    return e;
  const o = Jn(ht), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, d, u = tt] = s[l];
    i && (Ge(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Cs(c), n.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: d,
      modifiers: u
    }));
  }
  return e;
}
function Hs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const d = l[c];
    i && (d.oldValue = i[c].value);
    let u = d.dir[n];
    u && (Ss(), os(u, o, 8, [
      e.el,
      d,
      e,
      s
    ]), Is());
  }
}
const Ri = Symbol("_vte"), Mi = (e) => e.__isTeleport, Fo = (e) => e && (e.disabled || e.disabled === ""), ml = (e) => e && (e.defer || e.defer === ""), vl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, pl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, $a = (e, s) => {
  const o = e && e.to;
  return ct(o) ? s ? s(o) : null : o;
}, Di = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, d, u, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: S, createComment: $ }
    } = m, P = Fo(s.props);
    let { shapeFlag: D, children: E, dynamicChildren: x } = s;
    if (e == null) {
      const W = s.el = S(""), V = s.anchor = S("");
      p(W, o, n), p(V, o, n);
      const z = (T, M) => {
        D & 16 && v(
          E,
          T,
          M,
          l,
          i,
          c,
          d,
          u
        );
      }, I = () => {
        const T = s.target = $a(s.props, _), M = Li(T, s, S, p);
        T && (c !== "svg" && vl(T) ? c = "svg" : c !== "mathml" && pl(T) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), P || (z(T, M), bn(s, !1)));
      };
      P && (z(o, V), bn(s, !0)), ml(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (ml(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Di.process(
            e,
            s,
            o,
            n,
            l,
            i,
            c,
            d,
            u,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const W = s.anchor = e.anchor, V = s.target = e.target, z = s.targetAnchor = e.targetAnchor, I = Fo(e.props), T = I ? o : V, M = I ? W : z;
      if (c === "svg" || vl(V) ? c = "svg" : (c === "mathml" || pl(V)) && (c = "mathml"), x ? (w(
        e.dynamicChildren,
        x,
        T,
        l,
        i,
        c,
        d
      ), Za(e, s, !0)) : u || g(
        e,
        s,
        T,
        M,
        l,
        i,
        c,
        d,
        !1
      ), P)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : mn(
          s,
          o,
          W,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ae = s.target = $a(
          s.props,
          _
        );
        ae && mn(
          s,
          ae,
          null,
          m,
          0
        );
      } else I && mn(
        s,
        V,
        z,
        m,
        1
      );
      bn(s, P);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: c,
      children: d,
      anchor: u,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), i && l(u), c & 16) {
      const p = i || !Fo(w);
      for (let _ = 0; _ < d.length; _++) {
        const S = d[_];
        n(
          S,
          s,
          o,
          p,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: mn,
  hydrate: Nc
};
function mn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: d, shapeFlag: u, children: m, props: v } = e, g = i === 2;
  if (g && n(c, s, o), (!g || Fo(v)) && u & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && n(d, s, o);
}
function Nc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: d, querySelector: u, insert: m, createText: v }
}, g) {
  function w(S, $, P, D) {
    $.anchor = g(
      c(S),
      $,
      d(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = D;
  }
  const p = s.target = $a(
    s.props,
    u
  ), _ = Fo(s.props);
  if (p) {
    const S = p._lpa || p.firstChild;
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
        let $ = S;
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
        s.targetAnchor || Li(p, s, v, m), g(
          S && c(S),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    bn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const yt = Di;
function bn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Li(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Ri] = i, e && (n(l, e), n(i, e)), i;
}
const ks = Symbol("_leaveCb"), vn = Symbol("_enterCb");
function Oi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ze(() => {
    e.isMounted = !0;
  }), Wi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ft = [Function, Array], Ai = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ft,
  onEnter: Ft,
  onAfterEnter: Ft,
  onEnterCancelled: Ft,
  // leave
  onBeforeLeave: Ft,
  onLeave: Ft,
  onAfterLeave: Ft,
  onLeaveCancelled: Ft,
  // appear
  onBeforeAppear: Ft,
  onAppear: Ft,
  onAfterAppear: Ft,
  onAppearCancelled: Ft
}, Ni = (e) => {
  const s = e.subTree;
  return s.component ? Ni(s.component) : s;
}, Uc = {
  name: "BaseTransition",
  props: Ai,
  setup(e, { slots: s }) {
    const o = tl(), n = Oi();
    return () => {
      const l = s.default && Ya(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Ui(l), c = Je(e), { mode: d } = c;
      if (n.isLeaving)
        return aa(i);
      const u = gl(i);
      if (!u)
        return aa(i);
      let m = Jo(
        u,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      u.type !== bt && to(u, m);
      let v = o.subTree && gl(o.subTree);
      if (v && v.type !== bt && !Xs(v, u) && Ni(o).type !== bt) {
        let g = Jo(
          v,
          c,
          n,
          o
        );
        if (to(v, g), d === "out-in" && u.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, aa(i);
        d === "in-out" && u.type !== bt ? g.delayLeave = (w, p, _) => {
          const S = zi(
            n,
            v
          );
          S[String(v.key)] = v, w[ks] = () => {
            p(), w[ks] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return i;
    };
  }
};
function Ui(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== bt) {
        s = o;
        break;
      }
  }
  return s;
}
const zc = Uc;
function zi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function Jo(e, s, o, n, l) {
  const {
    appear: i,
    mode: c,
    persisted: d = !1,
    onBeforeEnter: u,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: D,
    onAppearCancelled: E
  } = s, x = String(e.key), W = zi(o, e), V = (T, M) => {
    T && os(
      T,
      n,
      9,
      M
    );
  }, z = (T, M) => {
    const ae = M[1];
    V(T, M), Be(T) ? T.every((J) => J.length <= 1) && ae() : T.length <= 1 && ae();
  }, I = {
    mode: c,
    persisted: d,
    beforeEnter(T) {
      let M = u;
      if (!o.isMounted)
        if (i)
          M = $ || u;
        else
          return;
      T[ks] && T[ks](
        !0
        /* cancelled */
      );
      const ae = W[x];
      ae && Xs(e, ae) && ae.el[ks] && ae.el[ks](), V(M, [T]);
    },
    enter(T) {
      let M = m, ae = v, J = g;
      if (!o.isMounted)
        if (i)
          M = P || m, ae = D || v, J = E || g;
        else
          return;
      let G = !1;
      const se = T[vn] = (Q) => {
        G || (G = !0, Q ? V(J, [T]) : V(ae, [T]), I.delayedLeave && I.delayedLeave(), T[vn] = void 0);
      };
      M ? z(M, [T, se]) : se();
    },
    leave(T, M) {
      const ae = String(e.key);
      if (T[vn] && T[vn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return M();
      V(w, [T]);
      let J = !1;
      const G = T[ks] = (se) => {
        J || (J = !0, M(), se ? V(S, [T]) : V(_, [T]), T[ks] = void 0, W[ae] === e && delete W[ae]);
      };
      W[ae] = e, p ? z(p, [T, G]) : G();
    },
    clone(T) {
      const M = Jo(
        T,
        s,
        o,
        n,
        l
      );
      return l && l(M), M;
    }
  };
  return I;
}
function aa(e) {
  if (Hn(e))
    return e = zs(e), e.children = null, e;
}
function gl(e) {
  if (!Hn(e))
    return Mi(e.type) && e.children ? Ui(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Ge(o.default))
      return o.default();
  }
}
function to(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, to(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Ya(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const d = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
      Ya(c.children, s, d)
    )) : (s || c.type !== bt) && n.push(d != null ? zs(c, { key: d }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function he(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Fi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Rn = /* @__PURE__ */ new WeakMap();
function Bo(e, s, o, n, l = !1) {
  if (Be(e)) {
    e.forEach(
      (_, S) => Bo(
        _,
        s && (Be(s) ? s[S] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (po(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Bo(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Jn(n.component) : n.el, c = l ? null : i, { i: d, r: u } = e, m = s && s.r, v = d.refs === tt ? d.refs = {} : d.refs, g = d.setupState, w = Je(g), p = g === tt ? oi : (_) => Qe(w, _);
  if (m != null && m !== u) {
    if (hl(s), ct(m))
      v[m] = null, p(m) && (g[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Ge(u))
    sn(u, d, 12, [c, v]);
  else {
    const _ = ct(u), S = $t(u);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(u) ? g[u] : v[u] : u.value;
          if (l)
            Be(P) && Ua(P, i);
          else if (Be(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[u] = [i], p(u) && (g[u] = v[u]);
          else {
            const D = [i];
            u.value = D, e.k && (v[e.k] = D);
          }
        } else _ ? (v[u] = c, p(u) && (g[u] = c)) : S && (u.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          $(), Rn.delete(e);
        };
        P.id = -1, Rn.set(e, P), St(P, o);
      } else
        hl(e), $();
    }
  }
}
function hl(e) {
  const s = Rn.get(e);
  s && (s.flags |= 8, Rn.delete(e));
}
Wn().requestIdleCallback;
Wn().cancelIdleCallback;
const po = (e) => !!e.type.__asyncLoader, Hn = (e) => e.type.__isKeepAlive;
function Fc(e, s) {
  Bi(e, "a", s);
}
function Bc(e, s) {
  Bi(e, "da", s);
}
function Bi(e, s, o = kt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Kn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Hn(l.parent.vnode) && Vc(n, s, o, l), l = l.parent;
  }
}
function Vc(e, s, o, n) {
  const l = Kn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  oo(() => {
    Ua(n[s], l);
  }, o);
}
function Kn(e, s, o = kt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      Ss();
      const d = on(o), u = os(s, o, e, c);
      return d(), Is(), u;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ts = (e) => (s, o = kt) => {
  (!Zo || e === "sp") && Kn(e, (...n) => s(...n), o);
}, Wc = Ts("bm"), Ze = Ts("m"), Gc = Ts(
  "bu"
), Vi = Ts("u"), Wi = Ts(
  "bum"
), oo = Ts("um"), jc = Ts(
  "sp"
), Hc = Ts("rtg"), Kc = Ts("rtc");
function qc(e, s = kt) {
  Kn("ec", e, s);
}
const Yc = "components", Gi = Symbol.for("v-ndc");
function Ja(e) {
  return ct(e) ? Jc(Yc, e, !1) || e : e || Gi;
}
function Jc(e, s, o = !0, n = !1) {
  const l = ht || kt;
  if (l) {
    const i = l.type;
    {
      const d = Ud(
        i,
        !1
      );
      if (d && (d === s || d === jt(s) || d === Bn(jt(s))))
        return i;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      yl(l[e] || i[e], s) || // global registration
      yl(l.appContext[e], s)
    );
    return !c && n ? i : c;
  }
}
function yl(e, s) {
  return e && (e[s] || e[jt(s)] || e[Bn(jt(s))]);
}
function be(e, s, o, n) {
  let l;
  const i = o, c = Be(e);
  if (c || ct(e)) {
    const d = c && Zs(e);
    let u = !1, m = !1;
    d && (u = !Wt(e), m = Es(e), e = Gn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        u ? m ? yo(ss(e[v])) : ss(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let d = 0; d < e; d++)
      l[d] = s(d + 1, d, void 0, i);
  } else if (et(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (d, u) => s(d, u, void 0, i)
      );
    else {
      const d = Object.keys(e);
      l = new Array(d.length);
      for (let u = 0, m = d.length; u < m; u++) {
        const v = d[u];
        l[u] = s(e[v], v, u, i);
      }
    }
  else
    l = [];
  return l;
}
function so(e, s) {
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (Be(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function Ke(e, s, o = {}, n, l) {
  if (ht.ce || ht.parent && po(ht.parent) && ht.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), R(
      j,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && ji(i(o)), d = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, u = R(
    j,
    {
      key: (d && !ts(d) ? d : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), u;
}
function ji(e) {
  return e.some((s) => Qo(s) ? !(s.type === bt || s.type === j && !ji(s.children)) : !0) ? e : null;
}
const Ca = (e) => e ? dr(e) ? Jn(e) : Ca(e.parent) : null, Vo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ca(e.parent),
    $root: (e) => Ca(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ki(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _t.bind(e.proxy)),
    $watch: (e) => rd.bind(e)
  })
), la = (e, s) => e !== tt && !e.__isScriptSetup && Qe(e, s), Xc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: c, type: d, appContext: u } = e;
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
            return i[s];
        }
      else {
        if (la(n, s))
          return c[s] = 1, n[s];
        if (l !== tt && Qe(l, s))
          return c[s] = 2, l[s];
        if (Qe(i, s))
          return c[s] = 3, i[s];
        if (o !== tt && Qe(o, s))
          return c[s] = 4, o[s];
        xa && (c[s] = 0);
      }
    }
    const m = Vo[s];
    let v, g;
    if (m)
      return s === "$attrs" && wt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = d.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== tt && Qe(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = u.config.globalProperties, Qe(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return la(l, s) ? (l[s] = o, !0) : n !== tt && Qe(n, s) ? (n[s] = o, !0) : Qe(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, d) {
    let u;
    return !!(o[d] || e !== tt && d[0] !== "$" && Qe(e, d) || la(s, d) || Qe(i, d) || Qe(n, d) || Qe(Vo, d) || Qe(l.config.globalProperties, d) || (u = c.__cssModules) && u[d]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Qe(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function wl(e) {
  return Be(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let xa = !0;
function Qc(e) {
  const s = Ki(e), o = e.proxy, n = e.ctx;
  xa = !1, s.beforeCreate && _l(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
    methods: c,
    watch: d,
    provide: u,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: g,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: S,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: D,
    destroyed: E,
    unmounted: x,
    render: W,
    renderTracked: V,
    renderTriggered: z,
    errorCaptured: I,
    serverPrefetch: T,
    // public API
    expose: M,
    inheritAttrs: ae,
    // assets
    components: J,
    directives: G,
    filters: se
  } = s;
  if (m && Zc(m, n, null), c)
    for (const H in c) {
      const L = c[H];
      Ge(L) && (n[H] = L.bind(o));
    }
  if (l) {
    const H = l.call(o, o);
    et(H) && (e.data = Vs(H));
  }
  if (xa = !0, i)
    for (const H in i) {
      const L = i[H], ne = Ge(L) ? L.bind(o, o) : Ge(L.get) ? L.get.bind(o, o) : gs, fe = !Ge(L) && Ge(L.set) ? L.set.bind(o) : gs, De = N({
        get: ne,
        set: fe
      });
      Object.defineProperty(n, H, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (Fe) => De.value = Fe
      });
    }
  if (d)
    for (const H in d)
      Hi(d[H], n, o, H);
  if (u) {
    const H = Ge(u) ? u.call(o) : u;
    Reflect.ownKeys(H).forEach((L) => {
      ad(L, H[L]);
    });
  }
  v && _l(v, e, "c");
  function A(H, L) {
    Be(L) ? L.forEach((ne) => H(ne.bind(o))) : L && H(L.bind(o));
  }
  if (A(Wc, g), A(Ze, w), A(Gc, p), A(Vi, _), A(Fc, S), A(Bc, $), A(qc, I), A(Kc, V), A(Hc, z), A(Wi, D), A(oo, x), A(jc, T), Be(M))
    if (M.length) {
      const H = e.exposed || (e.exposed = {});
      M.forEach((L) => {
        Object.defineProperty(H, L, {
          get: () => o[L],
          set: (ne) => o[L] = ne,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === gs && (e.render = W), ae != null && (e.inheritAttrs = ae), J && (e.components = J), G && (e.directives = G), T && Fi(e);
}
function Zc(e, s, o = gs) {
  Be(e) && (e = Sa(e));
  for (const n in e) {
    const l = e[n];
    let i;
    et(l) ? "default" in l ? i = kn(
      l.from || n,
      l.default,
      !0
    ) : i = kn(l.from || n) : i = kn(l), $t(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : s[n] = i;
  }
}
function _l(e, s, o) {
  os(
    Be(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Hi(e, s, o, n) {
  let l = n.includes(".") ? Ji(o, n) : () => o[n];
  if (ct(e)) {
    const i = s[e];
    Ge(i) && Ct(l, i);
  } else if (Ge(e))
    Ct(l, e.bind(o));
  else if (et(e))
    if (Be(e))
      e.forEach((i) => Hi(i, s, o, n));
    else {
      const i = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(i) && Ct(l, i, e);
    }
}
function Ki(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: c }
  } = e.appContext, d = i.get(s);
  let u;
  return d ? u = d : !l.length && !o && !n ? u = s : (u = {}, l.length && l.forEach(
    (m) => Mn(u, m, c, !0)
  ), Mn(u, s, c)), et(s) && i.set(s, u), u;
}
function Mn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Mn(e, i, o, !0), l && l.forEach(
    (c) => Mn(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const d = ed[c] || o && o[c];
      e[c] = d ? d(e[c], s[c]) : s[c];
    }
  return e;
}
const ed = {
  data: bl,
  props: kl,
  emits: kl,
  // objects
  methods: Ao,
  computed: Ao,
  // lifecycle
  beforeCreate: xt,
  created: xt,
  beforeMount: xt,
  mounted: xt,
  beforeUpdate: xt,
  updated: xt,
  beforeDestroy: xt,
  beforeUnmount: xt,
  destroyed: xt,
  unmounted: xt,
  activated: xt,
  deactivated: xt,
  errorCaptured: xt,
  serverPrefetch: xt,
  // assets
  components: Ao,
  directives: Ao,
  // watch
  watch: sd,
  // provide / inject
  provide: bl,
  inject: td
};
function bl(e, s) {
  return s ? e ? function() {
    return pt(
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function td(e, s) {
  return Ao(Sa(e), Sa(s));
}
function Sa(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function xt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Ao(e, s) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function kl(e, s) {
  return e ? Be(e) && Be(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    wl(e),
    wl(s ?? {})
  ) : s;
}
function sd(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function qi() {
  return {
    app: null,
    config: {
      isNativeTag: oi,
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
let od = 0;
function nd(e, s) {
  return function(n, l = null) {
    Ge(n) || (n = pt({}, n)), l != null && !et(l) && (l = null);
    const i = qi(), c = /* @__PURE__ */ new WeakSet(), d = [];
    let u = !1;
    const m = i.app = {
      _uid: od++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Fd,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return c.has(v) || (v && Ge(v.install) ? (c.add(v), v.install(m, ...g)) : Ge(v) && (c.add(v), v(m, ...g))), m;
      },
      mixin(v) {
        return i.mixins.includes(v) || i.mixins.push(v), m;
      },
      component(v, g) {
        return g ? (i.components[v] = g, m) : i.components[v];
      },
      directive(v, g) {
        return g ? (i.directives[v] = g, m) : i.directives[v];
      },
      mount(v, g, w) {
        if (!u) {
          const p = m._ceVNode || C(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), u = !0, m._container = v, v.__vue_app__ = m, Jn(p.component);
        }
      },
      onUnmount(v) {
        d.push(v);
      },
      unmount() {
        u && (os(
          d,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, g) {
        return i.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = go;
        go = m;
        try {
          return v();
        } finally {
          go = g;
        }
      }
    };
    return m;
  };
}
let go = null;
function ad(e, s) {
  if (kt) {
    let o = kt.provides;
    const n = kt.parent && kt.parent.provides;
    n === o && (o = kt.provides = Object.create(n)), o[e] = s;
  }
}
function kn(e, s, o = !1) {
  const n = tl();
  if (n || go) {
    let l = go ? go._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const ld = Symbol.for("v-scx"), id = () => kn(ld);
function Ct(e, s, o) {
  return Yi(e, s, o);
}
function Yi(e, s, o = tt) {
  const { immediate: n, deep: l, flush: i, once: c } = o, d = pt({}, o), u = s && n || !s && i !== "post";
  let m;
  if (Zo) {
    if (i === "sync") {
      const p = id();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!u) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = kt;
  d.call = (p, _, S) => os(p, v, _, S);
  let g = !1;
  i === "post" ? d.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, d.scheduler = (p, _) => {
    _ ? p() : qa(p);
  }), d.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Dc(e, s, d);
  return Zo && (m ? m.push(w) : u && w()), w;
}
function rd(e, s, o) {
  const n = this.proxy, l = ct(e) ? e.includes(".") ? Ji(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Ge(s) ? i = s : (i = s.handler, o = s);
  const c = on(this), d = Yi(l, i.bind(n), o);
  return c(), d;
}
function Ji(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const cd = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${jt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function dd(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || tt;
  let l = o;
  const i = s.startsWith("update:"), c = i && cd(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => ct(v) ? v.trim() : v)), c.number && (l = o.map(Vn)));
  let d, u = n[d = ea(s)] || // also try camelCase event handler (#2249)
  n[d = ea(jt(s))];
  !u && i && (u = n[d = ea(Bs(s))]), u && os(
    u,
    e,
    6,
    l
  );
  const m = n[d + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, os(
      m,
      e,
      6,
      l
    );
  }
}
const ud = /* @__PURE__ */ new WeakMap();
function Xi(e, s, o = !1) {
  const n = o ? ud : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, d = !1;
  if (!Ge(e)) {
    const u = (m) => {
      const v = Xi(m, s, !0);
      v && (d = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !d ? (et(e) && n.set(e, null), null) : (Be(i) ? i.forEach((u) => c[u] = null) : pt(c, i), et(e) && n.set(e, c), c);
}
function qn(e, s) {
  return !e || !zn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Qe(e, s[0].toLowerCase() + s.slice(1)) || Qe(e, Bs(s)) || Qe(e, s));
}
function $l(e) {
  const {
    type: s,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
    slots: c,
    attrs: d,
    emit: u,
    render: m,
    renderCache: v,
    props: g,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: S
  } = e, $ = Pn(e);
  let P, D;
  try {
    if (o.shapeFlag & 4) {
      const x = l || n, W = x;
      P = ps(
        m.call(
          W,
          x,
          v,
          g,
          p,
          w,
          _
        )
      ), D = d;
    } else {
      const x = s;
      P = ps(
        x.length > 1 ? x(
          g,
          { attrs: d, slots: c, emit: u }
        ) : x(
          g,
          null
        )
      ), D = s.props ? d : fd(d);
    }
  } catch (x) {
    Wo.length = 0, jn(x, e, 1), P = C(bt);
  }
  let E = P;
  if (D && S !== !1) {
    const x = Object.keys(D), { shapeFlag: W } = E;
    x.length && W & 7 && (i && x.some(Na) && (D = md(
      D,
      i
    )), E = zs(E, D, !1, !0));
  }
  return o.dirs && (E = zs(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && to(E, o.transition), P = E, Pn($), P;
}
const fd = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || zn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, md = (e, s) => {
  const o = {};
  for (const n in e)
    (!Na(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function vd(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: c, children: d, patchFlag: u } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? Cl(n, c, m) : !!c;
    if (u & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== n[w] && !qn(m, w))
          return !0;
      }
    }
  } else
    return (l || d) && (!d || !d.$stable) ? !0 : n === c ? !1 : n ? c ? Cl(n, c, m) : !0 : !!c;
  return !1;
}
function Cl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !qn(o, i))
      return !0;
  }
  return !1;
}
function pd({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Qi = {}, Zi = () => Object.create(Qi), er = (e) => Object.getPrototypeOf(e) === Qi;
function gd(e, s, o, n = !1) {
  const l = {}, i = Zi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), tr(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : xc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function hd(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, d = Je(l), [u] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        let w = v[g];
        if (qn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (u)
          if (Qe(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = jt(w);
            l[_] = Ia(
              u,
              d,
              _,
              p,
              e,
              !1
            );
          }
        else
          p !== i[w] && (i[w] = p, m = !0);
      }
    }
  } else {
    tr(e, s, l, i) && (m = !0);
    let v;
    for (const g in d)
      (!s || // for camelCase
      !Qe(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !Qe(s, v))) && (u ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Ia(
        u,
        d,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (i !== d)
      for (const g in i)
        (!s || !Qe(s, g)) && (delete i[g], m = !0);
  }
  m && $s(e.attrs, "set", "");
}
function tr(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let c = !1, d;
  if (s)
    for (let u in s) {
      if (No(u))
        continue;
      const m = s[u];
      let v;
      l && Qe(l, v = jt(u)) ? !i || !i.includes(v) ? o[v] = m : (d || (d = {}))[v] = m : qn(e.emitsOptions, u) || (!(u in n) || m !== n[u]) && (n[u] = m, c = !0);
    }
  if (i) {
    const u = Je(o), m = d || tt;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = Ia(
        l,
        u,
        g,
        m[g],
        e,
        !Qe(m, g)
      );
    }
  }
  return c;
}
function Ia(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const d = Qe(c, "default");
    if (d && n === void 0) {
      const u = c.default;
      if (c.type !== Function && !c.skipFactory && Ge(u)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = on(l);
          n = m[o] = u.call(
            null,
            s
          ), v();
        }
      } else
        n = u;
      l.ce && l.ce._setProp(o, n);
    }
    c[
      0
      /* shouldCast */
    ] && (i && !d ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Bs(o)) && (n = !0));
  }
  return n;
}
const yd = /* @__PURE__ */ new WeakMap();
function sr(e, s, o = !1) {
  const n = o ? yd : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, d = [];
  let u = !1;
  if (!Ge(e)) {
    const v = (g) => {
      u = !0;
      const [w, p] = sr(g, s, !0);
      pt(c, w), p && d.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !u)
    return et(e) && n.set(e, fo), fo;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = jt(i[v]);
      xl(g) && (c[g] = tt);
    }
  else if (i)
    for (const v in i) {
      const g = jt(v);
      if (xl(g)) {
        const w = i[v], p = c[g] = Be(w) || Ge(w) ? { type: w } : pt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (Be(_))
          for (let P = 0; P < _.length; ++P) {
            const D = _[P], E = Ge(D) && D.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && ($ = !1);
          }
        else
          S = Ge(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = $, (S || Qe(p, "default")) && d.push(g);
      }
    }
  const m = [c, d];
  return et(e) && n.set(e, m), m;
}
function xl(e) {
  return e[0] !== "$" && !No(e);
}
const Xa = (e) => e === "_" || e === "_ctx" || e === "$stable", Qa = (e) => Be(e) ? e.map(ps) : [ps(e)], wd = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Qa(s(...l)), o);
  return n._c = !1, n;
}, or = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Xa(l)) continue;
    const i = e[l];
    if (Ge(i))
      s[l] = wd(l, i, n);
    else if (i != null) {
      const c = Qa(i);
      s[l] = () => c;
    }
  }
}, nr = (e, s) => {
  const o = Qa(s);
  e.slots.default = () => o;
}, ar = (e, s, o) => {
  for (const n in s)
    (o || !Xa(n)) && (e[n] = s[n]);
}, _d = (e, s, o) => {
  const n = e.slots = Zi();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (ar(n, s, o), o && ii(n, "_", l, !0)) : or(s, n);
  } else s && nr(e, s);
}, bd = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = tt;
  if (n.shapeFlag & 32) {
    const d = s._;
    d ? o && d === 1 ? i = !1 : ar(l, s, o) : (i = !s.$stable, or(s, l)), c = s;
  } else s && (nr(e, s), c = { default: 1 });
  if (i)
    for (const d in l)
      !Xa(d) && c[d] == null && delete l[d];
}, St = Sd;
function kd(e) {
  return $d(e);
}
function $d(e, s) {
  const o = Wn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: c,
    createText: d,
    createComment: u,
    setText: m,
    setElementText: v,
    parentNode: g,
    nextSibling: w,
    setScopeId: p = gs,
    insertStaticContent: _
  } = e, S = (O, F, te, ie = null, pe = null, ge = null, Ie = void 0, Ee = null, le = !!F.dynamicChildren) => {
    if (O === F)
      return;
    O && !Xs(O, F) && (ie = Ce(O), Fe(O, pe, ge, !0), O = null), F.patchFlag === -2 && (le = !1, F.dynamicChildren = null);
    const { type: ve, ref: Ne, shapeFlag: Te } = F;
    switch (ve) {
      case Yn:
        $(O, F, te, ie);
        break;
      case bt:
        P(O, F, te, ie);
        break;
      case ra:
        O == null && D(F, te, ie, Ie);
        break;
      case j:
        J(
          O,
          F,
          te,
          ie,
          pe,
          ge,
          Ie,
          Ee,
          le
        );
        break;
      default:
        Te & 1 ? W(
          O,
          F,
          te,
          ie,
          pe,
          ge,
          Ie,
          Ee,
          le
        ) : Te & 6 ? G(
          O,
          F,
          te,
          ie,
          pe,
          ge,
          Ie,
          Ee,
          le
        ) : (Te & 64 || Te & 128) && ve.process(
          O,
          F,
          te,
          ie,
          pe,
          ge,
          Ie,
          Ee,
          le,
          Me
        );
    }
    Ne != null && pe ? Bo(Ne, O && O.ref, ge, F || O, !F) : Ne == null && O && O.ref != null && Bo(O.ref, null, ge, O, !0);
  }, $ = (O, F, te, ie) => {
    if (O == null)
      n(
        F.el = d(F.children),
        te,
        ie
      );
    else {
      const pe = F.el = O.el;
      F.children !== O.children && m(pe, F.children);
    }
  }, P = (O, F, te, ie) => {
    O == null ? n(
      F.el = u(F.children || ""),
      te,
      ie
    ) : F.el = O.el;
  }, D = (O, F, te, ie) => {
    [O.el, O.anchor] = _(
      O.children,
      F,
      te,
      ie,
      O.el,
      O.anchor
    );
  }, E = ({ el: O, anchor: F }, te, ie) => {
    let pe;
    for (; O && O !== F; )
      pe = w(O), n(O, te, ie), O = pe;
    n(F, te, ie);
  }, x = ({ el: O, anchor: F }) => {
    let te;
    for (; O && O !== F; )
      te = w(O), l(O), O = te;
    l(F);
  }, W = (O, F, te, ie, pe, ge, Ie, Ee, le) => {
    if (F.type === "svg" ? Ie = "svg" : F.type === "math" && (Ie = "mathml"), O == null)
      V(
        F,
        te,
        ie,
        pe,
        ge,
        Ie,
        Ee,
        le
      );
    else {
      const ve = O.el && O.el._isVueCE ? O.el : null;
      try {
        ve && ve._beginPatch(), T(
          O,
          F,
          pe,
          ge,
          Ie,
          Ee,
          le
        );
      } finally {
        ve && ve._endPatch();
      }
    }
  }, V = (O, F, te, ie, pe, ge, Ie, Ee) => {
    let le, ve;
    const { props: Ne, shapeFlag: Te, transition: ee, dirs: q } = O;
    if (le = O.el = c(
      O.type,
      ge,
      Ne && Ne.is,
      Ne
    ), Te & 8 ? v(le, O.children) : Te & 16 && I(
      O.children,
      le,
      null,
      ie,
      pe,
      ia(O, ge),
      Ie,
      Ee
    ), q && Hs(O, null, ie, "created"), z(le, O, O.scopeId, Ie, ie), Ne) {
      for (const $e in Ne)
        $e !== "value" && !No($e) && i(le, $e, null, Ne[$e], ge, ie);
      "value" in Ne && i(le, "value", null, Ne.value, ge), (ve = Ne.onVnodeBeforeMount) && ds(ve, ie, O);
    }
    q && Hs(O, null, ie, "beforeMount");
    const Oe = Cd(pe, ee);
    Oe && ee.beforeEnter(le), n(le, F, te), ((ve = Ne && Ne.onVnodeMounted) || Oe || q) && St(() => {
      ve && ds(ve, ie, O), Oe && ee.enter(le), q && Hs(O, null, ie, "mounted");
    }, pe);
  }, z = (O, F, te, ie, pe) => {
    if (te && p(O, te), ie)
      for (let ge = 0; ge < ie.length; ge++)
        p(O, ie[ge]);
    if (pe) {
      let ge = pe.subTree;
      if (F === ge || ir(ge.type) && (ge.ssContent === F || ge.ssFallback === F)) {
        const Ie = pe.vnode;
        z(
          O,
          Ie,
          Ie.scopeId,
          Ie.slotScopeIds,
          pe.parent
        );
      }
    }
  }, I = (O, F, te, ie, pe, ge, Ie, Ee, le = 0) => {
    for (let ve = le; ve < O.length; ve++) {
      const Ne = O[ve] = Ee ? Ns(O[ve]) : ps(O[ve]);
      S(
        null,
        Ne,
        F,
        te,
        ie,
        pe,
        ge,
        Ie,
        Ee
      );
    }
  }, T = (O, F, te, ie, pe, ge, Ie) => {
    const Ee = F.el = O.el;
    let { patchFlag: le, dynamicChildren: ve, dirs: Ne } = F;
    le |= O.patchFlag & 16;
    const Te = O.props || tt, ee = F.props || tt;
    let q;
    if (te && Ks(te, !1), (q = ee.onVnodeBeforeUpdate) && ds(q, te, F, O), Ne && Hs(F, O, te, "beforeUpdate"), te && Ks(te, !0), (Te.innerHTML && ee.innerHTML == null || Te.textContent && ee.textContent == null) && v(Ee, ""), ve ? M(
      O.dynamicChildren,
      ve,
      Ee,
      te,
      ie,
      ia(F, pe),
      ge
    ) : Ie || L(
      O,
      F,
      Ee,
      null,
      te,
      ie,
      ia(F, pe),
      ge,
      !1
    ), le > 0) {
      if (le & 16)
        ae(Ee, Te, ee, te, pe);
      else if (le & 2 && Te.class !== ee.class && i(Ee, "class", null, ee.class, pe), le & 4 && i(Ee, "style", Te.style, ee.style, pe), le & 8) {
        const Oe = F.dynamicProps;
        for (let $e = 0; $e < Oe.length; $e++) {
          const ke = Oe[$e], B = Te[ke], U = ee[ke];
          (U !== B || ke === "value") && i(Ee, ke, B, U, pe, te);
        }
      }
      le & 1 && O.children !== F.children && v(Ee, F.children);
    } else !Ie && ve == null && ae(Ee, Te, ee, te, pe);
    ((q = ee.onVnodeUpdated) || Ne) && St(() => {
      q && ds(q, te, F, O), Ne && Hs(F, O, te, "updated");
    }, ie);
  }, M = (O, F, te, ie, pe, ge, Ie) => {
    for (let Ee = 0; Ee < F.length; Ee++) {
      const le = O[Ee], ve = F[Ee], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        le.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (le.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(le, ve) || // - In the case of a component, it could contain anything.
        le.shapeFlag & 198) ? g(le.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      S(
        le,
        ve,
        Ne,
        null,
        ie,
        pe,
        ge,
        Ie,
        !0
      );
    }
  }, ae = (O, F, te, ie, pe) => {
    if (F !== te) {
      if (F !== tt)
        for (const ge in F)
          !No(ge) && !(ge in te) && i(
            O,
            ge,
            F[ge],
            null,
            pe,
            ie
          );
      for (const ge in te) {
        if (No(ge)) continue;
        const Ie = te[ge], Ee = F[ge];
        Ie !== Ee && ge !== "value" && i(O, ge, Ee, Ie, pe, ie);
      }
      "value" in te && i(O, "value", F.value, te.value, pe);
    }
  }, J = (O, F, te, ie, pe, ge, Ie, Ee, le) => {
    const ve = F.el = O ? O.el : d(""), Ne = F.anchor = O ? O.anchor : d("");
    let { patchFlag: Te, dynamicChildren: ee, slotScopeIds: q } = F;
    q && (Ee = Ee ? Ee.concat(q) : q), O == null ? (n(ve, te, ie), n(Ne, te, ie), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      te,
      Ne,
      pe,
      ge,
      Ie,
      Ee,
      le
    )) : Te > 0 && Te & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (M(
      O.dynamicChildren,
      ee,
      te,
      pe,
      ge,
      Ie,
      Ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (F.key != null || pe && F === pe.subTree) && Za(
      O,
      F,
      !0
      /* shallow */
    )) : L(
      O,
      F,
      te,
      Ne,
      pe,
      ge,
      Ie,
      Ee,
      le
    );
  }, G = (O, F, te, ie, pe, ge, Ie, Ee, le) => {
    F.slotScopeIds = Ee, O == null ? F.shapeFlag & 512 ? pe.ctx.activate(
      F,
      te,
      ie,
      Ie,
      le
    ) : se(
      F,
      te,
      ie,
      pe,
      ge,
      Ie,
      le
    ) : Q(O, F, le);
  }, se = (O, F, te, ie, pe, ge, Ie) => {
    const Ee = O.component = Dd(
      O,
      ie,
      pe
    );
    if (Hn(O) && (Ee.ctx.renderer = Me), Ld(Ee, !1, Ie), Ee.asyncDep) {
      if (pe && pe.registerDep(Ee, A, Ie), !O.el) {
        const le = Ee.subTree = C(bt);
        P(null, le, F, te), O.placeholder = le.el;
      }
    } else
      A(
        Ee,
        O,
        F,
        te,
        pe,
        ge,
        Ie
      );
  }, Q = (O, F, te) => {
    const ie = F.component = O.component;
    if (vd(O, F, te))
      if (ie.asyncDep && !ie.asyncResolved) {
        H(ie, F, te);
        return;
      } else
        ie.next = F, ie.update();
    else
      F.el = O.el, ie.vnode = F;
  }, A = (O, F, te, ie, pe, ge, Ie) => {
    const Ee = () => {
      if (O.isMounted) {
        let { next: Te, bu: ee, u: q, parent: Oe, vnode: $e } = O;
        {
          const Ve = lr(O);
          if (Ve) {
            Te && (Te.el = $e.el, H(O, Te, Ie)), Ve.asyncDep.then(() => {
              O.isUnmounted || Ee();
            });
            return;
          }
        }
        let ke = Te, B;
        Ks(O, !1), Te ? (Te.el = $e.el, H(O, Te, Ie)) : Te = $e, ee && _n(ee), (B = Te.props && Te.props.onVnodeBeforeUpdate) && ds(B, Oe, Te, $e), Ks(O, !0);
        const U = $l(O), de = O.subTree;
        O.subTree = U, S(
          de,
          U,
          // parent may have changed if it's in a teleport
          g(de.el),
          // anchor may have changed if it's in a fragment
          Ce(de),
          O,
          pe,
          ge
        ), Te.el = U.el, ke === null && pd(O, U.el), q && St(q, pe), (B = Te.props && Te.props.onVnodeUpdated) && St(
          () => ds(B, Oe, Te, $e),
          pe
        );
      } else {
        let Te;
        const { el: ee, props: q } = F, { bm: Oe, m: $e, parent: ke, root: B, type: U } = O, de = po(F);
        Ks(O, !1), Oe && _n(Oe), !de && (Te = q && q.onVnodeBeforeMount) && ds(Te, ke, F), Ks(O, !0);
        {
          B.ce && // @ts-expect-error _def is private
          B.ce._def.shadowRoot !== !1 && B.ce._injectChildStyle(U);
          const Ve = O.subTree = $l(O);
          S(
            null,
            Ve,
            te,
            ie,
            O,
            pe,
            ge
          ), F.el = Ve.el;
        }
        if ($e && St($e, pe), !de && (Te = q && q.onVnodeMounted)) {
          const Ve = F;
          St(
            () => ds(Te, ke, Ve),
            pe
          );
        }
        (F.shapeFlag & 256 || ke && po(ke.vnode) && ke.vnode.shapeFlag & 256) && O.a && St(O.a, pe), O.isMounted = !0, F = te = ie = null;
      }
    };
    O.scope.on();
    const le = O.effect = new ui(Ee);
    O.scope.off();
    const ve = O.update = le.run.bind(le), Ne = O.job = le.runIfDirty.bind(le);
    Ne.i = O, Ne.id = O.uid, le.scheduler = () => qa(Ne), Ks(O, !0), ve();
  }, H = (O, F, te) => {
    F.component = O;
    const ie = O.vnode.props;
    O.vnode = F, O.next = null, hd(O, F.props, ie, te), bd(O, F.children, te), Ss(), fl(O), Is();
  }, L = (O, F, te, ie, pe, ge, Ie, Ee, le = !1) => {
    const ve = O && O.children, Ne = O ? O.shapeFlag : 0, Te = F.children, { patchFlag: ee, shapeFlag: q } = F;
    if (ee > 0) {
      if (ee & 128) {
        fe(
          ve,
          Te,
          te,
          ie,
          pe,
          ge,
          Ie,
          Ee,
          le
        );
        return;
      } else if (ee & 256) {
        ne(
          ve,
          Te,
          te,
          ie,
          pe,
          ge,
          Ie,
          Ee,
          le
        );
        return;
      }
    }
    q & 8 ? (Ne & 16 && ye(ve, pe, ge), Te !== ve && v(te, Te)) : Ne & 16 ? q & 16 ? fe(
      ve,
      Te,
      te,
      ie,
      pe,
      ge,
      Ie,
      Ee,
      le
    ) : ye(ve, pe, ge, !0) : (Ne & 8 && v(te, ""), q & 16 && I(
      Te,
      te,
      ie,
      pe,
      ge,
      Ie,
      Ee,
      le
    ));
  }, ne = (O, F, te, ie, pe, ge, Ie, Ee, le) => {
    O = O || fo, F = F || fo;
    const ve = O.length, Ne = F.length, Te = Math.min(ve, Ne);
    let ee;
    for (ee = 0; ee < Te; ee++) {
      const q = F[ee] = le ? Ns(F[ee]) : ps(F[ee]);
      S(
        O[ee],
        q,
        te,
        null,
        pe,
        ge,
        Ie,
        Ee,
        le
      );
    }
    ve > Ne ? ye(
      O,
      pe,
      ge,
      !0,
      !1,
      Te
    ) : I(
      F,
      te,
      ie,
      pe,
      ge,
      Ie,
      Ee,
      le,
      Te
    );
  }, fe = (O, F, te, ie, pe, ge, Ie, Ee, le) => {
    let ve = 0;
    const Ne = F.length;
    let Te = O.length - 1, ee = Ne - 1;
    for (; ve <= Te && ve <= ee; ) {
      const q = O[ve], Oe = F[ve] = le ? Ns(F[ve]) : ps(F[ve]);
      if (Xs(q, Oe))
        S(
          q,
          Oe,
          te,
          null,
          pe,
          ge,
          Ie,
          Ee,
          le
        );
      else
        break;
      ve++;
    }
    for (; ve <= Te && ve <= ee; ) {
      const q = O[Te], Oe = F[ee] = le ? Ns(F[ee]) : ps(F[ee]);
      if (Xs(q, Oe))
        S(
          q,
          Oe,
          te,
          null,
          pe,
          ge,
          Ie,
          Ee,
          le
        );
      else
        break;
      Te--, ee--;
    }
    if (ve > Te) {
      if (ve <= ee) {
        const q = ee + 1, Oe = q < Ne ? F[q].el : ie;
        for (; ve <= ee; )
          S(
            null,
            F[ve] = le ? Ns(F[ve]) : ps(F[ve]),
            te,
            Oe,
            pe,
            ge,
            Ie,
            Ee,
            le
          ), ve++;
      }
    } else if (ve > ee)
      for (; ve <= Te; )
        Fe(O[ve], pe, ge, !0), ve++;
    else {
      const q = ve, Oe = ve, $e = /* @__PURE__ */ new Map();
      for (ve = Oe; ve <= ee; ve++) {
        const at = F[ve] = le ? Ns(F[ve]) : ps(F[ve]);
        at.key != null && $e.set(at.key, ve);
      }
      let ke, B = 0;
      const U = ee - Oe + 1;
      let de = !1, Ve = 0;
      const Xe = new Array(U);
      for (ve = 0; ve < U; ve++) Xe[ve] = 0;
      for (ve = q; ve <= Te; ve++) {
        const at = O[ve];
        if (B >= U) {
          Fe(at, pe, ge, !0);
          continue;
        }
        let dt;
        if (at.key != null)
          dt = $e.get(at.key);
        else
          for (ke = Oe; ke <= ee; ke++)
            if (Xe[ke - Oe] === 0 && Xs(at, F[ke])) {
              dt = ke;
              break;
            }
        dt === void 0 ? Fe(at, pe, ge, !0) : (Xe[dt - Oe] = ve + 1, dt >= Ve ? Ve = dt : de = !0, S(
          at,
          F[dt],
          te,
          null,
          pe,
          ge,
          Ie,
          Ee,
          le
        ), B++);
      }
      const mt = de ? xd(Xe) : fo;
      for (ke = mt.length - 1, ve = U - 1; ve >= 0; ve--) {
        const at = Oe + ve, dt = F[at], Rt = F[at + 1], zt = at + 1 < Ne ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : ie;
        Xe[ve] === 0 ? S(
          null,
          dt,
          te,
          zt,
          pe,
          ge,
          Ie,
          Ee,
          le
        ) : de && (ke < 0 || ve !== mt[ke] ? De(dt, te, zt, 2) : ke--);
      }
    }
  }, De = (O, F, te, ie, pe = null) => {
    const { el: ge, type: Ie, transition: Ee, children: le, shapeFlag: ve } = O;
    if (ve & 6) {
      De(O.component.subTree, F, te, ie);
      return;
    }
    if (ve & 128) {
      O.suspense.move(F, te, ie);
      return;
    }
    if (ve & 64) {
      Ie.move(O, F, te, Me);
      return;
    }
    if (Ie === j) {
      n(ge, F, te);
      for (let Te = 0; Te < le.length; Te++)
        De(le[Te], F, te, ie);
      n(O.anchor, F, te);
      return;
    }
    if (Ie === ra) {
      E(O, F, te);
      return;
    }
    if (ie !== 2 && ve & 1 && Ee)
      if (ie === 0)
        Ee.beforeEnter(ge), n(ge, F, te), St(() => Ee.enter(ge), pe);
      else {
        const { leave: Te, delayLeave: ee, afterLeave: q } = Ee, Oe = () => {
          O.ctx.isUnmounted ? l(ge) : n(ge, F, te);
        }, $e = () => {
          ge._isLeaving && ge[ks](
            !0
            /* cancelled */
          ), Te(ge, () => {
            Oe(), q && q();
          });
        };
        ee ? ee(ge, Oe, $e) : $e();
      }
    else
      n(ge, F, te);
  }, Fe = (O, F, te, ie = !1, pe = !1) => {
    const {
      type: ge,
      props: Ie,
      ref: Ee,
      children: le,
      dynamicChildren: ve,
      shapeFlag: Ne,
      patchFlag: Te,
      dirs: ee,
      cacheIndex: q
    } = O;
    if (Te === -2 && (pe = !1), Ee != null && (Ss(), Bo(Ee, null, te, O, !0), Is()), q != null && (F.renderCache[q] = void 0), Ne & 256) {
      F.ctx.deactivate(O);
      return;
    }
    const Oe = Ne & 1 && ee, $e = !po(O);
    let ke;
    if ($e && (ke = Ie && Ie.onVnodeBeforeUnmount) && ds(ke, F, O), Ne & 6)
      _e(O.component, te, ie);
    else {
      if (Ne & 128) {
        O.suspense.unmount(te, ie);
        return;
      }
      Oe && Hs(O, null, F, "beforeUnmount"), Ne & 64 ? O.type.remove(
        O,
        F,
        te,
        Me,
        ie
      ) : ve && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ve.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ge !== j || Te > 0 && Te & 64) ? ye(
        ve,
        F,
        te,
        !1,
        !0
      ) : (ge === j && Te & 384 || !pe && Ne & 16) && ye(le, F, te), ie && ce(O);
    }
    ($e && (ke = Ie && Ie.onVnodeUnmounted) || Oe) && St(() => {
      ke && ds(ke, F, O), Oe && Hs(O, null, F, "unmounted");
    }, te);
  }, ce = (O) => {
    const { type: F, el: te, anchor: ie, transition: pe } = O;
    if (F === j) {
      Se(te, ie);
      return;
    }
    if (F === ra) {
      x(O);
      return;
    }
    const ge = () => {
      l(te), pe && !pe.persisted && pe.afterLeave && pe.afterLeave();
    };
    if (O.shapeFlag & 1 && pe && !pe.persisted) {
      const { leave: Ie, delayLeave: Ee } = pe, le = () => Ie(te, ge);
      Ee ? Ee(O.el, ge, le) : le();
    } else
      ge();
  }, Se = (O, F) => {
    let te;
    for (; O !== F; )
      te = w(O), l(O), O = te;
    l(F);
  }, _e = (O, F, te) => {
    const { bum: ie, scope: pe, job: ge, subTree: Ie, um: Ee, m: le, a: ve } = O;
    Sl(le), Sl(ve), ie && _n(ie), pe.stop(), ge && (ge.flags |= 8, Fe(Ie, O, F, te)), Ee && St(Ee, F), St(() => {
      O.isUnmounted = !0;
    }, F);
  }, ye = (O, F, te, ie = !1, pe = !1, ge = 0) => {
    for (let Ie = ge; Ie < O.length; Ie++)
      Fe(O[Ie], F, te, ie, pe);
  }, Ce = (O) => {
    if (O.shapeFlag & 6)
      return Ce(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const F = w(O.anchor || O.el), te = F && F[Ri];
    return te ? w(te) : F;
  };
  let me = !1;
  const ue = (O, F, te) => {
    O == null ? F._vnode && Fe(F._vnode, null, null, !0) : S(
      F._vnode || null,
      O,
      F,
      null,
      null,
      null,
      te
    ), F._vnode = O, me || (me = !0, fl(), Ei(), me = !1);
  }, Me = {
    p: S,
    um: Fe,
    m: De,
    r: ce,
    mt: se,
    mc: I,
    pc: L,
    pbc: M,
    n: Ce,
    o: e
  };
  return {
    render: ue,
    hydrate: void 0,
    createApp: nd(ue)
  };
}
function ia({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ks({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Cd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Za(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Be(n) && Be(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let d = l[i];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = l[i] = Ns(l[i]), d.el = c.el), !o && d.patchFlag !== -2 && Za(c, d)), d.type === Yn && // avoid cached text nodes retaining detached dom nodes
      d.patchFlag !== -1 && (d.el = c.el), d.type === bt && !d.el && (d.el = c.el);
    }
}
function xd(e) {
  const s = e.slice(), o = [0];
  let n, l, i, c, d;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[n] = l, o.push(n);
        continue;
      }
      for (i = 0, c = o.length - 1; i < c; )
        d = i + c >> 1, e[o[d]] < m ? i = d + 1 : c = d;
      m < e[o[i]] && (i > 0 && (s[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, c = o[i - 1]; i-- > 0; )
    o[i] = c, c = s[c];
  return o;
}
function lr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : lr(s);
}
function Sl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const ir = (e) => e.__isSuspense;
function Sd(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : Ac(e);
}
const j = Symbol.for("v-fgt"), Yn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), ra = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function Id() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Xo = 1;
function Dn(e, s = !1) {
  Xo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function rr(e) {
  return e.dynamicChildren = Xo > 0 ? Nt || fo : null, Id(), Xo > 0 && Nt && Nt.push(e), e;
}
function r(e, s, o, n, l, i) {
  return rr(
    t(
      e,
      s,
      o,
      n,
      l,
      i,
      !0
    )
  );
}
function R(e, s, o, n, l) {
  return rr(
    C(
      e,
      s,
      o,
      n,
      l,
      !0
    )
  );
}
function Qo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const cr = ({ key: e }) => e ?? null, $n = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || $t(e) || Ge(e) ? { i: ht, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === j ? 0 : 1, c = !1, d = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && cr(s),
    ref: s && $n(s),
    scopeId: Pi,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: ht
  };
  return d ? (el(u, o), i & 128 && e.normalize(u)) : o && (u.shapeFlag |= ct(o) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Nt.push(u), u;
}
const C = Ed;
function Ed(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Gi) && (e = bt), Qo(e)) {
    const d = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && el(d, o), Xo > 0 && !i && Nt && (d.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = d : Nt.push(d)), d.patchFlag = -2, d;
  }
  if (zd(e) && (e = e.__vccOpts), s) {
    s = Td(s);
    let { class: d, style: u } = s;
    d && !ct(d) && (s.class = Pe(d)), et(u) && (Ka(u) && !Be(u) && (u = pt({}, u)), s.style = Ht(u));
  }
  const c = ct(e) ? 1 : ir(e) ? 128 : Mi(e) ? 64 : et(e) ? 4 : Ge(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    n,
    l,
    c,
    i,
    !0
  );
}
function Td(e) {
  return e ? Ka(e) || er(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: d, transition: u } = e, m = s ? Pd(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && cr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat($n(s)) : [i, $n(s)] : $n(s)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d,
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
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && zs(e.ssContent),
    ssFallback: e.ssFallback && zs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && to(
    v,
    u.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return C(Yn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), R(bt, null, e)) : C(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? C(bt) : Be(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qo(e) ? Ns(e) : C(Yn, null, String(e));
}
function Ns(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zs(e);
}
function el(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Be(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), el(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !er(s) ? s._ctx = ht : l === 3 && ht && (ht.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: ht }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Pd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Pe([s.class, n.class]));
      else if (l === "style")
        s.style = Ht([s.style, n.style]);
      else if (zn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Be(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function ds(e, s, o, n = null) {
  os(e, s, 7, [
    o,
    n
  ]);
}
const Rd = qi();
let Md = 0;
function Dd(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Rd, i = {
    uid: Md++,
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
    scope: new ac(
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
    propsOptions: sr(n, l),
    emitsOptions: Xi(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: tt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: tt,
    data: tt,
    props: tt,
    attrs: tt,
    slots: tt,
    refs: tt,
    setupState: tt,
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = dd.bind(null, i), e.ce && e.ce(i), i;
}
let kt = null;
const tl = () => kt || ht;
let Ln, Ea;
{
  const e = Wn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  Ln = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => kt = o
  ), Ea = s(
    "__VUE_SSR_SETTERS__",
    (o) => Zo = o
  );
}
const on = (e) => {
  const s = kt;
  return Ln(e), e.scope.on(), () => {
    e.scope.off(), Ln(s);
  };
}, Il = () => {
  kt && kt.scope.off(), Ln(null);
};
function dr(e) {
  return e.vnode.shapeFlag & 4;
}
let Zo = !1;
function Ld(e, s = !1, o = !1) {
  s && Ea(s);
  const { props: n, children: l } = e.vnode, i = dr(e);
  gd(e, n, i, s), _d(e, l, o || s);
  const c = i ? Od(e, s) : void 0;
  return s && Ea(!1), c;
}
function Od(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xc);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? Nd(e) : null, i = on(e), c = sn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), d = ni(c);
    if (Is(), i(), (d || e.sp) && !po(e) && Fi(e), d) {
      if (c.then(Il, Il), s)
        return c.then((u) => {
          El(e, u);
        }).catch((u) => {
          jn(u, e, 0);
        });
      e.asyncDep = c;
    } else
      El(e, c);
  } else
    ur(e);
}
function El(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : et(s) && (e.setupState = xi(s)), ur(e);
}
function ur(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = on(e);
    Ss();
    try {
      Qc(e);
    } finally {
      Is(), l();
    }
  }
}
const Ad = {
  get(e, s) {
    return wt(e, "get", ""), e[s];
  }
};
function Nd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ad),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xi(Sc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Vo)
        return Vo[o](e);
    },
    has(s, o) {
      return o in s || o in Vo;
    }
  })) : e.proxy;
}
function Ud(e, s = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function zd(e) {
  return Ge(e) && "__vccOpts" in e;
}
const N = (e, s) => Rc(e, s, Zo);
function nn(e, s, o) {
  try {
    Dn(-1);
    const n = arguments.length;
    return n === 2 ? et(s) && !Be(s) ? Qo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Qo(o) && (o = [o]), C(e, s, o));
  } finally {
    Dn(1);
  }
}
const Fd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ta;
const Tl = typeof window < "u" && window.trustedTypes;
if (Tl)
  try {
    Ta = /* @__PURE__ */ Tl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const fr = Ta ? (e) => Ta.createHTML(e) : (e) => e, Bd = "http://www.w3.org/2000/svg", Vd = "http://www.w3.org/1998/Math/MathML", bs = typeof document < "u" ? document : null, Pl = bs && /* @__PURE__ */ bs.createElement("template"), Wd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? bs.createElementNS(Bd, e) : s === "mathml" ? bs.createElementNS(Vd, e) : o ? bs.createElement(e, { is: o }) : bs.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
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
  insertStaticContent(e, s, o, n, l, i) {
    const c = o ? o.previousSibling : s.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      Pl.innerHTML = fr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Pl.content;
      if (n === "svg" || n === "mathml") {
        const u = d.firstChild;
        for (; u.firstChild; )
          d.appendChild(u.firstChild);
        d.removeChild(u);
      }
      s.insertBefore(d, o);
    }
    return [
      // first
      c ? c.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Ds = "transition", Po = "animation", wo = Symbol("_vtc"), mr = {
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
}, vr = /* @__PURE__ */ pt(
  {},
  Ai,
  mr
), Gd = (e) => (e.displayName = "Transition", e.props = vr, e), jd = /* @__PURE__ */ Gd(
  (e, { slots: s }) => nn(zc, pr(e), s)
), qs = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Rl = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function pr(e) {
  const s = {};
  for (const J in e)
    J in mr || (s[J] = e[J]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: d = `${o}-enter-to`,
    appearFromClass: u = i,
    appearActiveClass: m = c,
    appearToClass: v = d,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = Hd(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: D,
    onEnterCancelled: E,
    onLeave: x,
    onLeaveCancelled: W,
    onBeforeAppear: V = P,
    onAppear: z = D,
    onAppearCancelled: I = E
  } = s, T = (J, G, se, Q) => {
    J._enterCancelled = Q, Ls(J, G ? v : d), Ls(J, G ? m : c), se && se();
  }, M = (J, G) => {
    J._isLeaving = !1, Ls(J, g), Ls(J, p), Ls(J, w), G && G();
  }, ae = (J) => (G, se) => {
    const Q = J ? z : D, A = () => T(G, J, se);
    qs(Q, [G, A]), Ml(() => {
      Ls(G, J ? u : i), fs(G, J ? v : d), Rl(Q) || Dl(G, n, S, A);
    });
  };
  return pt(s, {
    onBeforeEnter(J) {
      qs(P, [J]), fs(J, i), fs(J, c);
    },
    onBeforeAppear(J) {
      qs(V, [J]), fs(J, u), fs(J, m);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(J, G) {
      J._isLeaving = !0;
      const se = () => M(J, G);
      fs(J, g), J._enterCancelled ? (fs(J, w), Pa(J)) : (Pa(J), fs(J, w)), Ml(() => {
        J._isLeaving && (Ls(J, g), fs(J, p), Rl(x) || Dl(J, n, $, se));
      }), qs(x, [J, se]);
    },
    onEnterCancelled(J) {
      T(J, !1, void 0, !0), qs(E, [J]);
    },
    onAppearCancelled(J) {
      T(J, !0, void 0, !0), qs(I, [J]);
    },
    onLeaveCancelled(J) {
      M(J), qs(W, [J]);
    }
  });
}
function Hd(e) {
  if (e == null)
    return null;
  if (et(e))
    return [ca(e.enter), ca(e.leave)];
  {
    const s = ca(e);
    return [s, s];
  }
}
function ca(e) {
  return Xr(e);
}
function fs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[wo] || (e[wo] = /* @__PURE__ */ new Set())).add(s);
}
function Ls(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[wo];
  o && (o.delete(s), o.size || (e[wo] = void 0));
}
function Ml(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Kd = 0;
function Dl(e, s, o, n) {
  const l = e._endId = ++Kd, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: d, propCount: u } = gr(e, s);
  if (!c)
    return n();
  const m = c + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(m, w), i();
  }, w = (p) => {
    p.target === e && ++v >= u && g();
  };
  setTimeout(() => {
    v < u && g();
  }, d + 1), e.addEventListener(m, w);
}
function gr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ds}Delay`), i = n(`${Ds}Duration`), c = Ll(l, i), d = n(`${Po}Delay`), u = n(`${Po}Duration`), m = Ll(d, u);
  let v = null, g = 0, w = 0;
  s === Ds ? c > 0 && (v = Ds, g = c, w = i.length) : s === Po ? m > 0 && (v = Po, g = m, w = u.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Ds : Po : null, w = v ? v === Ds ? i.length : u.length : 0);
  const p = v === Ds && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ds}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
    propCount: w,
    hasTransform: p
  };
}
function Ll(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Ol(o) + Ol(e[n])));
}
function Ol(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function qd(e, s, o) {
  const n = e[wo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Al = Symbol("_vod"), Yd = Symbol("_vsh"), Jd = Symbol(""), Xd = /(?:^|;)\s*display\s*:/;
function Qd(e, s, o) {
  const n = e.style, l = ct(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ct(s))
        for (const c of s.split(";")) {
          const d = c.slice(0, c.indexOf(":")).trim();
          o[d] == null && Cn(n, d, "");
        }
      else
        for (const c in s)
          o[c] == null && Cn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), Cn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[Jd];
      c && (o += ";" + c), n.cssText = o, i = Xd.test(o);
    }
  } else s && e.removeAttribute("style");
  Al in e && (e[Al] = i ? n.display : "", e[Yd] && (n.display = "none"));
}
const Nl = /\s*!important$/;
function Cn(e, s, o) {
  if (Be(o))
    o.forEach((n) => Cn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = Zd(e, s);
    Nl.test(o) ? e.setProperty(
      Bs(n),
      o.replace(Nl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Ul = ["Webkit", "Moz", "ms"], da = {};
function Zd(e, s) {
  const o = da[s];
  if (o)
    return o;
  let n = jt(s);
  if (n !== "filter" && n in e)
    return da[s] = n;
  n = Bn(n);
  for (let l = 0; l < Ul.length; l++) {
    const i = Ul[l] + n;
    if (i in e)
      return da[s] = i;
  }
  return s;
}
const zl = "http://www.w3.org/1999/xlink";
function Fl(e, s, o, n, l, i = oc(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(zl, s.slice(6, s.length)) : e.setAttributeNS(zl, s, o) : o == null || i && !ri(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : ts(o) ? String(o) : o
  );
}
function Bl(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? fr(o) : o);
    return;
  }
  const i = e.tagName;
  if (s === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const d = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (d !== u || !("_value" in e)) && (e.value = u), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const d = typeof e[s];
    d === "boolean" ? o = ri(o) : o == null && d === "string" ? (o = "", c = !0) : d === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function xs(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function eu(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Vl = Symbol("_vei");
function tu(e, s, o, n, l = null) {
  const i = e[Vl] || (e[Vl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [d, u] = su(s);
    if (n) {
      const m = i[s] = au(
        n,
        l
      );
      xs(e, d, m, u);
    } else c && (eu(e, d, c, u), i[s] = void 0);
  }
}
const Wl = /(?:Once|Passive|Capture)$/;
function su(e) {
  let s;
  if (Wl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(Wl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let ua = 0;
const ou = /* @__PURE__ */ Promise.resolve(), nu = () => ua || (ou.then(() => ua = 0), ua = Date.now());
function au(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      lu(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = nu(), o;
}
function lu(e, s) {
  if (Be(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return s;
}
const Gl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, iu = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? qd(e, n, c) : s === "style" ? Qd(e, o, n) : zn(s) ? Na(s) || tu(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ru(e, s, n, c)) ? (Bl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Fl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? Bl(e, jt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Fl(e, s, n, c));
};
function ru(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Gl(s) && Ge(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Gl(s) && ct(o) ? !1 : s in e;
}
const hr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), On = Symbol("_moveCb"), jl = Symbol("_enterCb"), cu = (e) => (delete e.props.mode, e), du = /* @__PURE__ */ cu({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, vr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = tl(), n = Oi();
    let l, i;
    return Vi(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!pu(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(fu), l.forEach(mu);
      const d = l.filter(vu);
      Pa(o.vnode.el), d.forEach((u) => {
        const m = u.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[On] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[On] = null, Ls(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Je(e), d = pr(c);
      let u = c.tag || j;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), to(
            v,
            Jo(
              v,
              d,
              n,
              o
            )
          ), hr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Ya(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && to(
          v,
          Jo(v, d, n, o)
        );
      }
      return C(u, null, i);
    };
  }
}), uu = du;
function fu(e) {
  const s = e.el;
  s[On] && s[On](), s[jl] && s[jl]();
}
function mu(e) {
  yr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function vu(e) {
  const s = hr.get(e), o = yr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function pu(e, s, o) {
  const n = e.cloneNode(), l = e[wo];
  l && l.forEach((d) => {
    d.split(/\s+/).forEach((u) => u && n.classList.remove(u));
  }), o.split(/\s+/).forEach((d) => d && n.classList.add(d)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = gr(n);
  return i.removeChild(n), c;
}
const Fs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => _n(s, o) : s;
};
function gu(e) {
  e.target.composing = !0;
}
function Hl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Gt = Symbol("_assign");
function Kl(e, s, o) {
  return s && (e = e.trim()), o && (e = Vn(e)), e;
}
const Ut = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Gt] = Fs(l);
    const i = n || l.props && l.props.type === "number";
    xs(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Gt](Kl(e.value, o, i));
    }), (o || i) && xs(e, "change", () => {
      e.value = Kl(e.value, o, i);
    }), s || (xs(e, "compositionstart", gu), xs(e, "compositionend", Hl), xs(e, "change", Hl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[Gt] = Fs(c), e.composing) return;
    const d = (i || e.type === "number") && !/^0\d/.test(e.value) ? Vn(e.value) : e.value, u = s ?? "";
    d !== u && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === u) || (e.value = u));
  }
}, en = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Gt] = Fs(o), xs(e, "change", () => {
      const n = e._modelValue, l = _o(e), i = e.checked, c = e[Gt];
      if (Be(n)) {
        const d = Fa(n, l), u = d !== -1;
        if (i && !u)
          c(n.concat(l));
        else if (!i && u) {
          const m = [...n];
          m.splice(d, 1), c(m);
        }
      } else if (bo(n)) {
        const d = new Set(n);
        i ? d.add(l) : d.delete(l), c(d);
      } else
        c(wr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ql,
  beforeUpdate(e, s, o) {
    e[Gt] = Fs(o), ql(e, s, o);
  }
};
function ql(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Be(s))
    l = Fa(s, n.props.value) > -1;
  else if (bo(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = eo(s, wr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Xt = {
  created(e, { value: s }, o) {
    e.checked = eo(s, o.props.value), e[Gt] = Fs(o), xs(e, "change", () => {
      e[Gt](_o(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Gt] = Fs(n), s !== o && (e.checked = eo(s, n.props.value));
  }
}, hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = bo(s);
    xs(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Vn(_o(c)) : _o(c)
      );
      e[Gt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, _t(() => {
        e._assigning = !1;
      });
    }), e[Gt] = Fs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Yl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Gt] = Fs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Yl(e, s);
  }
};
function Yl(e, s) {
  const o = e.multiple, n = Be(s);
  if (!(o && !n && !bo(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], d = _o(c);
      if (o)
        if (n) {
          const u = typeof d;
          u === "string" || u === "number" ? c.selected = s.some((m) => String(m) === String(d)) : c.selected = Fa(s, d) > -1;
        } else
          c.selected = s.has(d);
      else if (eo(_o(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function _o(e) {
  return "_value" in e ? e._value : e.value;
}
function wr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Xn = {
  created(e, s, o) {
    pn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    pn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    pn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    pn(e, s, o, n, "updated");
  }
};
function hu(e, s) {
  switch (e) {
    case "SELECT":
      return hs;
    case "TEXTAREA":
      return Ut;
    default:
      switch (s) {
        case "checkbox":
          return en;
        case "radio":
          return Xt;
        default:
          return Ut;
      }
  }
}
function pn(e, s, o, n, l) {
  const c = hu(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const yu = ["ctrl", "shift", "alt", "meta"], wu = {
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
  exact: (e, s) => yu.some((o) => e[`${o}Key`] && !s.includes(o))
}, it = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const d = wu[s[c]];
      if (d && d(l, s)) return;
    }
    return e(l, ...i);
  }));
}, _u = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Zt = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = Bs(l.key);
    if (s.some(
      (c) => c === i || _u[c] === i
    ))
      return e(l);
  }));
}, bu = /* @__PURE__ */ pt({ patchProp: iu }, Wd);
let Jl;
function ku() {
  return Jl || (Jl = kd(bu));
}
const Qn = ((...e) => {
  const s = ku().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = Cu(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, $u(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function $u(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Cu(e) {
  return ct(e) ? document.querySelector(e) : e;
}
const xu = { class: "panel-layout" }, Su = {
  key: 0,
  class: "panel-layout-header"
}, Iu = {
  key: 1,
  class: "panel-layout-search"
}, Eu = { class: "panel-layout-content" }, Tu = {
  key: 2,
  class: "panel-layout-footer"
}, Pu = /* @__PURE__ */ he({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", xu, [
      s.$slots.header ? (a(), r("div", Su, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", Iu, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Eu, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Tu, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), we = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ we(Pu, [["__scopeId", "data-v-21565df9"]]), Ru = {
  key: 0,
  class: "panel-title-prefix"
}, Mu = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Du = /* @__PURE__ */ he({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), R(Ja(`h${e.level}`), {
      class: Pe(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Ru, f(e.prefix), 1)) : (a(), r("span", Mu)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Lu = /* @__PURE__ */ we(Du, [["__scopeId", "data-v-c3875efc"]]), Ou = ["title"], Au = ["width", "height"], Nu = /* @__PURE__ */ he({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), r("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => s.$emit("click"))
    }, [
      (a(), r("svg", {
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
      ])], 8, Au))
    ], 8, Ou));
  }
}), _r = /* @__PURE__ */ we(Nu, [["__scopeId", "data-v-6fc7f16d"]]), Uu = { class: "header-left" }, zu = {
  key: 0,
  class: "header-actions"
}, Fu = /* @__PURE__ */ he({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Pe(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Uu, [
        C(Lu, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(_r, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", zu, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ we(Fu, [["__scopeId", "data-v-55a62cd6"]]), Bu = {
  key: 0,
  class: "section-title-count"
}, Vu = {
  key: 1,
  class: "section-title-icon"
}, Wu = /* @__PURE__ */ he({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), R(Ja(`h${e.level}`), {
      class: Pe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Bu, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Vu, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ we(Wu, [["__scopeId", "data-v-559361eb"]]), Gu = { class: "status-grid" }, ju = { class: "status-grid__columns" }, Hu = { class: "status-grid__column" }, Ku = { class: "status-grid__title" }, qu = { class: "status-grid__column status-grid__column--right" }, Yu = { class: "status-grid__title" }, Ju = {
  key: 0,
  class: "status-grid__footer"
}, Xu = /* @__PURE__ */ he({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Gu, [
      t("div", ju, [
        t("div", Hu, [
          t("h4", Ku, f(e.leftTitle), 1),
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", qu, [
          t("h4", Yu, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", Ju, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Qu = /* @__PURE__ */ we(Xu, [["__scopeId", "data-v-73b7ba3f"]]), Zu = {
  key: 0,
  class: "status-item__icon"
}, ef = {
  key: 1,
  class: "status-item__count"
}, tf = { class: "status-item__label" }, sf = /* @__PURE__ */ he({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = N(() => `status-item--${s.variant}`);
    return (n, l) => (a(), r("div", {
      class: Pe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", Zu, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", ef, f(e.count), 1)) : y("", !0),
      t("span", tf, f(e.label), 1)
    ], 2));
  }
}), us = /* @__PURE__ */ we(sf, [["__scopeId", "data-v-6f929183"]]), of = { class: "issue-card__header" }, nf = { class: "issue-card__icon" }, af = { class: "issue-card__title" }, lf = {
  key: 0,
  class: "issue-card__content"
}, rf = {
  key: 0,
  class: "issue-card__description"
}, cf = {
  key: 1,
  class: "issue-card__items"
}, df = {
  key: 2,
  class: "issue-card__actions"
}, uf = /* @__PURE__ */ he({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = N(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), r("div", {
      class: Pe(["issue-card", o.value])
    }, [
      t("div", of, [
        t("span", nf, f(e.icon), 1),
        t("h4", af, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", lf, [
        e.description ? (a(), r("p", rf, f(e.description), 1)) : y("", !0),
        Ke(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", cf, [
        (a(!0), r(j, null, be(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", df, [
        Ke(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ we(uf, [["__scopeId", "data-v-df6aa348"]]), ff = ["type", "disabled"], mf = {
  key: 0,
  class: "spinner"
}, vf = /* @__PURE__ */ he({
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
    return (s, o) => (a(), r("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Pe(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", mf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, ff));
  }
}), re = /* @__PURE__ */ we(vf, [["__scopeId", "data-v-772abe47"]]), pf = { class: "empty-state" }, gf = {
  key: 0,
  class: "empty-icon"
}, hf = { class: "empty-message" }, yf = /* @__PURE__ */ he({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", pf, [
      e.icon ? (a(), r("div", gf, f(e.icon), 1)) : y("", !0),
      t("p", hf, f(e.message), 1),
      e.actionLabel ? (a(), R(re, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("action"))
      }, {
        default: h(() => [
          b(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), ns = /* @__PURE__ */ we(yf, [["__scopeId", "data-v-4466284f"]]), wf = /* @__PURE__ */ he({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Pe(["detail-label"]),
      style: Ht({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), xn = /* @__PURE__ */ we(wf, [["__scopeId", "data-v-75e9eeb8"]]), _f = /* @__PURE__ */ he({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Pe(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ra = /* @__PURE__ */ we(_f, [["__scopeId", "data-v-2f186e4c"]]), bf = { class: "detail-row" }, kf = /* @__PURE__ */ he({
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
    return (s, o) => (a(), r("div", bf, [
      C(xn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(Ra, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ke(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), ut = /* @__PURE__ */ we(kf, [["__scopeId", "data-v-ef15664a"]]), $f = { class: "modal-header" }, Cf = { class: "modal-body" }, xf = { class: "status-section" }, Sf = {
  key: 0,
  class: "status-section"
}, If = { class: "section-header-row" }, Ef = {
  key: 0,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Pf = { class: "workflow-group-title" }, Rf = { class: "workflow-list" }, Mf = { class: "workflow-name" }, Df = { class: "workflow-issue" }, Lf = {
  key: 1,
  class: "workflow-group"
}, Of = { class: "workflow-group-header" }, Af = { class: "workflow-group-title" }, Nf = { class: "workflow-list" }, Uf = { class: "workflow-name" }, zf = { class: "workflow-issue" }, Ff = {
  key: 2,
  class: "workflow-group"
}, Bf = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Wf = { class: "workflow-list" }, Gf = { class: "workflow-name" }, jf = {
  key: 3,
  class: "workflow-group"
}, Hf = { class: "workflow-group-header" }, Kf = { class: "workflow-group-title" }, qf = { class: "workflow-list" }, Yf = { class: "workflow-name" }, Jf = {
  key: 4,
  class: "workflow-group"
}, Xf = { class: "workflow-group-header" }, Qf = { class: "workflow-group-title" }, Zf = { class: "workflow-list" }, em = { class: "workflow-name" }, tm = {
  key: 5,
  class: "workflow-group"
}, sm = { class: "workflow-group-title" }, om = { class: "expand-icon" }, nm = {
  key: 0,
  class: "workflow-list"
}, am = { class: "workflow-name" }, lm = {
  key: 1,
  class: "status-section"
}, im = {
  key: 0,
  class: "change-group"
}, rm = { class: "change-group-header" }, cm = { class: "change-group-title" }, dm = { class: "change-list" }, um = { class: "node-name" }, fm = {
  key: 0,
  class: "dev-badge"
}, mm = {
  key: 1,
  class: "change-group"
}, vm = { class: "change-group-header" }, pm = { class: "change-group-title" }, gm = { class: "change-list" }, hm = { class: "node-name" }, ym = {
  key: 0,
  class: "dev-badge"
}, wm = {
  key: 2,
  class: "change-group"
}, _m = { class: "change-list" }, bm = { class: "change-item" }, km = { class: "node-name" }, $m = {
  key: 3,
  class: "change-group"
}, Cm = {
  key: 2,
  class: "status-section"
}, xm = { class: "section-header-row" }, Sm = {
  key: 0,
  class: "drift-item"
}, Im = { class: "drift-list" }, Em = {
  key: 0,
  class: "drift-list-more"
}, Tm = {
  key: 1,
  class: "drift-item"
}, Pm = { class: "drift-list" }, Rm = {
  key: 0,
  class: "drift-list-more"
}, Mm = {
  key: 2,
  class: "drift-item"
}, Dm = { class: "drift-list" }, Lm = { class: "version-actual" }, Om = { class: "version-expected" }, Am = {
  key: 0,
  class: "drift-list-more"
}, Nm = {
  key: 3,
  class: "drift-item"
}, Um = { class: "repair-action" }, zm = {
  key: 3,
  class: "status-section"
}, Fm = { class: "info-box" }, Bm = { class: "drift-list" }, Vm = {
  key: 0,
  class: "drift-list-more"
}, Wm = {
  key: 4,
  class: "status-section"
}, Gm = { class: "warning-box" }, jm = {
  key: 5,
  class: "empty-state-inline"
}, Hm = { class: "modal-actions" }, Km = /* @__PURE__ */ he({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    Ze(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), Ct(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), i = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((S) => {
        var P, D, E;
        const $ = (E = (D = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : E.find((x) => x.name === S);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = N(() => {
      var w, p, _, S, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), d = N(() => {
      var p, _, S;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), u = N(() => {
      var w, p, _, S, $, P;
      return !c.value && !d.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = N(() => {
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
      var _, S, $, P, D, E, x, W, V, z, I, T, M, ae, J, G, se, Q, A, H, L, ne;
      return a(), R(yt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (fe) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", $f, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (fe) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", Cf, [
              t("div", xf, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(ut, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", Sf, [
                t("div", If, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (fe) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", Ef, [
                  t("div", Tf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Pf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Rf, [
                    (a(!0), r(j, null, be(n.value, (fe) => (a(), r("div", {
                      key: fe.name,
                      class: "workflow-item"
                    }, [
                      t("span", Mf, f(fe.name), 1),
                      t("span", Df, f(fe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Lf, [
                  t("div", Of, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Af, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Nf, [
                    (a(!0), r(j, null, be(l.value, (fe) => (a(), r("div", {
                      key: fe.name,
                      class: "workflow-item"
                    }, [
                      t("span", Uf, f(fe.name), 1),
                      t("span", zf, f(fe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), r("div", Ff, [
                  t("div", Bf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Vf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Wf, [
                    (a(!0), r(j, null, be(e.status.workflows.new, (fe) => (a(), r("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", Gf, f(fe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", jf, [
                  t("div", Hf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Kf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (a(!0), r(j, null, be(e.status.workflows.modified, (fe) => (a(), r("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", Yf, f(fe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (D = e.status.workflows) == null ? void 0 : D.deleted) != null && E.length ? (a(), r("div", Jf, [
                  t("div", Xf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Qf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Zf, [
                    (a(!0), r(j, null, be(e.status.workflows.deleted, (fe) => (a(), r("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(fe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", tm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (fe) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", sm, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", om, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", nm, [
                    (a(!0), r(j, null, be(i.value, (fe) => (a(), r("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", am, f(fe), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              d.value ? (a(), r("div", lm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (x = e.status.git_changes) == null ? void 0 : x.nodes_added) != null && W.length ? (a(), r("div", im, [
                  t("div", rm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", cm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", dm, [
                    (a(!0), r(j, null, be(e.status.git_changes.nodes_added, (fe) => (a(), r("div", {
                      key: v(fe),
                      class: "change-item"
                    }, [
                      t("span", um, f(v(fe)), 1),
                      g(fe) ? (a(), r("span", fm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (z = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && z.length ? (a(), r("div", mm, [
                  t("div", vm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", pm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", gm, [
                    (a(!0), r(j, null, be(e.status.git_changes.nodes_removed, (fe) => (a(), r("div", {
                      key: v(fe),
                      class: "change-item"
                    }, [
                      t("span", hm, f(v(fe)), 1),
                      g(fe) ? (a(), r("span", ym, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), r("div", wm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", _m, [
                    t("div", bm, [
                      t("span", km, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), r("div", $m, [...p[21] || (p[21] = [
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
              (M = e.status.comparison) != null && M.is_synced ? y("", !0) : (a(), r("div", Cm, [
                t("div", xm, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (fe) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (J = (ae = e.status.comparison) == null ? void 0 : ae.missing_nodes) != null && J.length ? (a(), r("div", Sm, [
                  C(ut, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Im, [
                    (a(!0), r(j, null, be(e.status.comparison.missing_nodes.slice(0, 10), (fe) => (a(), r("div", {
                      key: fe,
                      class: "drift-list-item"
                    }, " - " + f(fe), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Em, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (se = (G = e.status.comparison) == null ? void 0 : G.extra_nodes) != null && se.length ? (a(), r("div", Tm, [
                  C(ut, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Pm, [
                    (a(!0), r(j, null, be(e.status.comparison.extra_nodes.slice(0, 10), (fe) => (a(), r("div", {
                      key: fe,
                      class: "drift-list-item"
                    }, " - " + f(fe), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Rm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && A.length ? (a(), r("div", Mm, [
                  C(ut, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Dm, [
                    (a(!0), r(j, null, be(e.status.comparison.version_mismatches.slice(0, 10), (fe) => (a(), r("div", {
                      key: fe.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(fe.name) + ": ", 1),
                      t("span", Lm, f(fe.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Om, f(fe.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Am, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((H = e.status.comparison) == null ? void 0 : H.packages_in_sync) === !1 ? (a(), r("div", Nm, [
                  C(ut, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Um, [
                  C(re, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (fe) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ne = (L = e.status.comparison) == null ? void 0 : L.disabled_nodes) != null && ne.length ? (a(), r("div", zm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Fm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Bm, [
                  (a(!0), r(j, null, be(e.status.comparison.disabled_nodes.slice(0, 10), (fe) => (a(), r("div", {
                    key: fe,
                    class: "drift-list-item"
                  }, " • " + f(fe), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Vm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Wm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Gm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              u.value ? (a(), r("div", jm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Hm, [
              C(re, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (fe) => w.$emit("close"))
              }, {
                default: h(() => [...p[33] || (p[33] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), qm = /* @__PURE__ */ we(Km, [["__scopeId", "data-v-e2b37122"]]), Ym = { class: "health-section-header" }, Jm = { class: "suggestions-content" }, Xm = { class: "suggestions-text" }, Qm = { style: { "margin-top": "var(--cg-space-3)" } }, Zm = {
  key: 1,
  class: "no-issues-text"
}, ev = /* @__PURE__ */ he({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = k(!1), i = k(!1);
    function c() {
      l.value = !0;
    }
    function d() {
      l.value = !1, m("view-workflows");
    }
    function u() {
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
    const S = N(() => {
      const Q = n.status.workflows.analyzed || [], A = Q.filter(
        (H) => H.unresolved_models_count > 0 || H.ambiguous_models_count > 0
      );
      return A.length === 0 && n.status.missing_models_count > 0 ? Q.filter((H) => H.sync_state === "synced") : A;
    });
    function $() {
      const Q = S.value;
      Q.length !== 0 && (v.value = !0, m("repair-missing-models", Q.map((A) => A.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const D = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), E = N(() => n.status.has_changes), x = N(() => {
      const Q = n.status.git_changes;
      return Q.nodes_added.length > 0 || Q.nodes_removed.length > 0 || Q.workflow_changes;
    }), W = N(() => n.status.has_changes || D.value), V = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), z = N(() => n.status.git_changes.has_other_changes), I = N(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter((A) => A.status === "broken")) || [];
    }), T = N(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), M = N(() => I.value.length > 0), ae = N(() => M.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), J = N(() => {
      const Q = [];
      return n.status.workflows.new.length > 0 && Q.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Q.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Q.push(`${n.status.workflows.deleted.length} deleted`), Q.length > 0 ? `${Q.join(", ")} workflow${Q.length === 1 && !Q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), G = N(() => {
      var H, L;
      const Q = [], A = n.status.comparison;
      return (H = A.missing_nodes) != null && H.length && Q.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (L = A.extra_nodes) != null && L.length && Q.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), Q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Q.join(" and ")}.`;
    }), se = N(() => {
      var H, L;
      const Q = [], A = n.status.comparison;
      return (H = A.extra_nodes) != null && H.length && (A.extra_nodes.slice(0, 3).forEach((ne) => {
        Q.push(`Untracked: ${ne}`);
      }), A.extra_nodes.length > 3 && Q.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (L = A.missing_nodes) != null && L.length && (A.missing_nodes.slice(0, 3).forEach((ne) => {
        Q.push(`Missing: ${ne}`);
      }), A.missing_nodes.length > 3 && Q.push(`...and ${A.missing_nodes.length - 3} more missing`)), Q;
    });
    return (Q, A) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "STATUS" })
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
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (H) => Q.$emit("start-setup"))
              }, {
                default: h(() => [...A[13] || (A[13] = [
                  b(" Start Setup ", -1)
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
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (H) => Q.$emit("view-environments"))
              }, {
                default: h(() => [...A[14] || (A[14] = [
                  b(" View Environments ", -1)
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
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[2] || (A[2] = (H) => Q.$emit("create-environment"))
              }, {
                default: h(() => [...A[15] || (A[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: A[4] || (A[4] = (H) => i.value = !0),
            onMouseleave: A[5] || (A[5] = (H) => i.value = !1)
          }, [
            t("div", Ym, [
              C(At, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...A[16] || (A[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(jd, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), R(re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...A[17] || (A[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(Qu, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, so({
              left: h(() => [
                e.status.workflows.new.length ? (a(), R(us, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(us, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(us, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(us, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: D.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(us, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(us, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(us, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                z.value ? (a(), R(us, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                E.value && !x.value && !z.value ? (a(), R(us, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                E.value ? y("", !0) : (a(), R(us, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              W.value ? {
                name: "footer",
                fn: h(() => [
                  A[19] || (A[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Jm, [
                    t("span", Xm, f(J.value), 1),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (H) => Q.$emit("commit-changes"))
                    }, {
                      default: h(() => [...A[18] || (A[18] = [
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
          e.status.is_detached_head ? (a(), R(Yt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[6] || (A[6] = (H) => Q.$emit("create-branch"))
              }, {
                default: h(() => [...A[20] || (A[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", Qm, [
            C(At, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...A[21] || (A[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ae.value ? (a(), r(j, { key: 0 }, [
              I.value.length > 0 ? (a(), R(Yt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((H) => `${H.name} — ${H.issue_summary}`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (H) => Q.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[22] || (A[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), R(Yt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((H) => `${H.name} — ${H.models_needing_path_sync_count} model path${H.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (H) => Q.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[23] || (A[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !M.value ? (a(), R(Yt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: h(() => [
                      b(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[9] || (A[9] = (H) => Q.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[24] || (A[24] = [
                      b(" See Workflows ", -1)
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
                description: G.value,
                items: se.value
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...A[25] || (A[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (H) => Q.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[26] || (A[26] = [
                      b(" See Nodes ", -1)
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
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[11] || (A[11] = (H) => Q.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[27] || (A[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : W.value ? (a(), r("span", Zm, "No issues")) : (a(), R(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(qm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: A[12] || (A[12] = (H) => l.value = !1),
        onNavigateWorkflows: d,
        onNavigateNodes: u,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), tv = /* @__PURE__ */ we(ev, [["__scopeId", "data-v-55fcd77f"]]), sv = ["type", "value", "placeholder", "disabled"], ov = /* @__PURE__ */ he({
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
    const n = e, l = o, i = k(null);
    function c(d) {
      const u = d.target.value;
      l("update:modelValue", u);
    }
    return Ze(() => {
      n.autoFocus && i.value && i.value.focus();
    }), s({
      focus: () => {
        var d;
        return (d = i.value) == null ? void 0 : d.focus();
      },
      blur: () => {
        var d;
        return (d = i.value) == null ? void 0 : d.blur();
      }
    }), (d, u) => (a(), r("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Pe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        u[0] || (u[0] = Zt((m) => d.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Zt((m) => d.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (m) => d.$emit("focus")),
      onBlur: u[3] || (u[3] = (m) => d.$emit("blur"))
    }, null, 42, sv));
  }
}), An = /* @__PURE__ */ we(ov, [["__scopeId", "data-v-0380d08f"]]), nv = { class: "branch-create-form" }, av = { class: "form-actions" }, lv = /* @__PURE__ */ he({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = N(() => {
      const d = n.value.trim();
      return d.length > 0 && !d.startsWith("-") && !d.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(d);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (d, u) => (a(), r("div", nv, [
      C(An, {
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", av, [
        C(re, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: h(() => [...u[1] || (u[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(re, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...u[2] || (u[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), iv = /* @__PURE__ */ we(lv, [["__scopeId", "data-v-7c500394"]]), rv = { class: "branch-list-item__indicator" }, cv = { class: "branch-list-item__name" }, dv = {
  key: 0,
  class: "branch-list-item__actions"
}, uv = {
  key: 0,
  class: "branch-list-item__current-label"
}, fv = /* @__PURE__ */ he({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Pe(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", rv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", cv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", dv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", uv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), mv = /* @__PURE__ */ we(fv, [["__scopeId", "data-v-c6581a24"]]), vv = {
  key: 2,
  class: "branch-list"
}, pv = /* @__PURE__ */ he({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(c) {
      o("create", c), i();
    }
    function i() {
      n.value = !1;
    }
    return (c, d) => (a(), R(Tt, null, {
      header: h(() => [
        C(Pt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), R(re, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: d[0] || (d[0] = (u) => n.value = !0)
            }, {
              default: h(() => [...d[1] || (d[1] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), R(iv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", vv, [
          (a(!0), r(j, null, be(e.branches, (u) => (a(), R(mv, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: h(() => [
              u.is_current ? y("", !0) : (a(), R(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => c.$emit("delete", u.name)
              }, {
                default: h(() => [...d[2] || (d[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              u.is_current ? y("", !0) : (a(), R(re, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => c.$emit("switch", u.name)
              }, {
                default: h(() => [...d[3] || (d[3] = [
                  b(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current"]))), 128))
        ]))
      ]),
      _: 1
    }));
  }
}), gv = /* @__PURE__ */ we(pv, [["__scopeId", "data-v-86784ddd"]]), hv = { class: "commit-list" }, yv = /* @__PURE__ */ he({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", hv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), wv = /* @__PURE__ */ we(yv, [["__scopeId", "data-v-8c5ee761"]]), _v = { class: "commit-hash" }, bv = /* @__PURE__ */ he({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", _v, f(o.value), 1));
  }
}), br = /* @__PURE__ */ we(bv, [["__scopeId", "data-v-7c333cc6"]]), kv = { class: "commit-message" }, $v = { class: "commit-date" }, Cv = /* @__PURE__ */ he({
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
    return (i, c) => (a(), r("div", {
      class: Pe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(br, { hash: e.hash }, null, 8, ["hash"]),
      t("span", kv, f(e.message), 1),
      t("span", $v, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = it(() => {
        }, ["stop"]))
      }, [
        Ke(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), xv = /* @__PURE__ */ we(Cv, [["__scopeId", "data-v-dd7c621b"]]), Sv = /* @__PURE__ */ he({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), R(Tt, null, {
      header: h(() => [
        C(Pt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), R(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(wv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(j, null, be(e.commits, (n) => (a(), R(xv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                C(re, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (l) => s.$emit("checkout", n),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...o[0] || (o[0] = [
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
}), Iv = /* @__PURE__ */ we(Sv, [["__scopeId", "data-v-981c3c64"]]), v7 = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const p7 = [
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
], g7 = {
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
}, Ev = [
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
], h7 = [
  ...Ev,
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
function co() {
  return !1;
}
function kr() {
  return typeof crypto < "u" && crypto.randomUUID ? kr() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function nt() {
  const e = k(!1), s = k(null);
  async function o(Y, Z) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const ze = await window.app.api.fetchApi(Y, Z);
    if (!ze.ok) {
      const cs = await ze.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${ze.status}`);
    }
    const rt = await ze.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(Y = !1) {
    return o(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(Y, Z = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: Z })
    });
  }
  async function i(Y = 10, Z = 0) {
    return o(`/v2/comfygit/log?limit=${Y}&offset=${Z}`);
  }
  async function c(Y) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function d() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function u() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function m(Y) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(Y) {
    return o(`/v2/comfygit/commit/${Y}`);
  }
  async function w(Y, Z = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: Z })
    });
  }
  async function p(Y, Z = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: Z })
    });
  }
  async function _(Y, Z = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: Z })
    });
  }
  async function S(Y, Z = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Y)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Z })
    });
  }
  async function $() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Y = await n();
        return [{
          name: Y.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Y.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Y.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Y.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(Y, Z) {
    const ze = { target_env: Y };
    return Z && (ze.workspace_path = Z), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ze)
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(Y) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function x() {
    return o("/v2/workspace/environments/create_status");
  }
  async function W(Y = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Y}`);
  }
  async function V(Y) {
    return o(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function z(Y = !1) {
    try {
      return o(Y ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Z = await n(Y), ze = [];
      return Z.workflows.new.forEach((rt) => {
        ze.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), Z.workflows.modified.forEach((rt) => {
        ze.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), Z.workflows.synced.forEach((rt) => {
        ze.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), ze;
    }
  }
  async function I(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/details`);
  }
  async function T(Y) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/resolve`, {
      method: "POST"
    });
  }
  async function M(Y, Z, ze) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Z, install_models: ze })
    });
  }
  async function ae(Y, Z, ze) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Z, importance: ze })
    });
  }
  async function J() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function G() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function se(Y) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Y)}`);
  }
  async function Q(Y) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function A(Y, Z) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Z })
    });
  }
  async function H(Y, Z) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Z })
    });
  }
  async function L(Y) {
    return o(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function ne(Y) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function fe() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function De() {
    return o("/v2/workspace/models/directory");
  }
  async function Fe(Y) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function ce(Y) {
    const Z = new URLSearchParams({ url: Y });
    return o(`/v2/workspace/huggingface/repo-info?${Z}`);
  }
  async function Se() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function _e(Y) {
    try {
      const Z = Y ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Y)}` : "/v2/comfygit/config";
      return o(Z);
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
  async function ye(Y, Z) {
    const ze = Z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Z)}` : "/v2/comfygit/config";
    return o(ze, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Ce(Y, Z) {
    try {
      const ze = new URLSearchParams();
      return Y && ze.append("level", Y), Z && ze.append("lines", Z.toString()), o(`/v2/comfygit/debug/logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function me(Y, Z) {
    try {
      const ze = new URLSearchParams();
      return Y && ze.append("level", Y), Z && ze.append("lines", Z.toString()), o(`/v2/workspace/debug/logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function ue() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Me() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Re(Y, Z) {
    try {
      const ze = new URLSearchParams();
      return Y && ze.append("level", Y), Z && ze.append("lines", Z.toString()), o(`/v2/workspace/debug/orchestrator-logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function O() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function F(Y) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function te() {
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
  async function ie(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/track-dev`, {
      method: "POST"
    });
  }
  async function pe(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function ge(Y) {
    var Lt, cs, Io, Eo;
    const Z = kr(), ze = ((cs = (Lt = window.app) == null ? void 0 : Lt.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: Y.id,
        version: Y.version || Y.selected_version || "latest",
        selected_version: Y.selected_version || "latest",
        repository: Y.repository || "",
        mode: Y.mode || "remote",
        channel: Y.channel || "default"
      },
      ui_id: Z,
      client_id: ze
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), await o("/v2/manager/queue/start"), { ui_id: Z };
  }
  async function Ie(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function Ee(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function le() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ve(Y, Z) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: Z })
    });
  }
  async function Ne(Y) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function Te(Y, Z, ze) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Z, push_url: ze })
    });
  }
  async function ee(Y, Z) {
    const ze = {};
    return Z && (ze["X-Git-Auth-Token"] = Z), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST",
      headers: ze
    });
  }
  async function q(Y) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function Oe(Y = "skip", Z = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: Z
      })
    });
  }
  async function $e(Y, Z) {
    const ze = Z ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview?branch=${encodeURIComponent(Z)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview`;
    return o(ze);
  }
  async function ke(Y, Z = {}) {
    const ze = { "Content-Type": "application/json" };
    return Z.authToken && (ze["X-Git-Auth-Token"] = Z.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull`, {
      method: "POST",
      headers: ze,
      body: JSON.stringify({
        model_strategy: Z.modelStrategy || "skip",
        force: Z.force || !1,
        resolutions: Z.resolutions
      })
    });
  }
  async function B(Y, Z) {
    const ze = Z ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview?branch=${encodeURIComponent(Z)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview`;
    return o(ze);
  }
  async function U(Y, Z = {}) {
    const ze = { "Content-Type": "application/json" };
    return Z.authToken && (ze["X-Git-Auth-Token"] = Z.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/push`, {
      method: "POST",
      headers: ze,
      body: JSON.stringify({ force: Z.force || !1 })
    });
  }
  async function de(Y, Z) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Z })
    });
  }
  async function Ve(Y) {
    const Z = {
      success: 0,
      failed: []
    };
    for (const ze of Y)
      try {
        await T(ze), Z.success++;
      } catch (rt) {
        Z.failed.push({
          name: ze,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return Z;
  }
  async function Xe(Y) {
    var rt;
    const Z = new FormData();
    if (Z.append("file", Y), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const ze = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Z
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ze.ok) {
      const Lt = await ze.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${ze.status}`);
    }
    return ze.json();
  }
  async function mt(Y) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Y)}`
    );
  }
  async function at(Y, Z, ze, rt) {
    var Io;
    const Lt = new FormData();
    if (Lt.append("file", Y), Lt.append("name", Z), Lt.append("model_strategy", ze), Lt.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!cs.ok) {
      const Eo = await cs.json().catch(() => ({}));
      throw new Error(Eo.message || Eo.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function dt() {
    return o("/v2/workspace/import/status");
  }
  async function Rt(Y) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Y })
    });
  }
  async function zt(Y, Z, ze, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Y,
        name: Z,
        model_strategy: ze,
        torch_backend: rt
      })
    });
  }
  async function Kt() {
    return o("/v2/setup/status");
  }
  async function Ws(Y) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Ms() {
    return o("/v2/setup/initialize_status");
  }
  async function no(Y) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Co() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function xo() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function So(Y, Z) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Y, save_key: Z })
    });
  }
  async function xe() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function X(Y) {
    const Z = Y ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Y)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Z);
  }
  async function He(Y) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function gt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function qt(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function ys(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/stop`, {
      method: "POST"
    });
  }
  async function ws(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/start`, {
      method: "POST"
    });
  }
  async function ls(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/status`);
  }
  async function Ue(Y) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function is(Y = !1) {
    return o(Y ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function oe() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function K() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ae(Y) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function je(Y) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function st(Y) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function ft() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Mt(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/info`);
  }
  async function rs(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`);
  }
  async function Gs(Y, Z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function js(Y, Z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(Z)}/start`, {
      method: "POST"
    });
  }
  async function ln(Y, Z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(Z)}/stop`, {
      method: "POST"
    });
  }
  async function rn(Y, Z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent(Z)}`, {
      method: "DELETE"
    });
  }
  async function cn(Y) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: Y })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: n,
    commit: l,
    getHistory: i,
    exportEnv: c,
    validateExport: d,
    validateDeploy: u,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: v,
    getCommitDetail: g,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: S,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: D,
    createEnvironment: E,
    getCreateProgress: x,
    getComfyUIReleases: W,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: I,
    resolveWorkflow: T,
    installWorkflowDeps: M,
    setModelImportance: ae,
    // Model Management
    getEnvironmentModels: J,
    getWorkspaceModels: G,
    getModelDetails: se,
    openFileLocation: Q,
    addModelSource: A,
    removeModelSource: H,
    deleteModel: L,
    downloadModel: ne,
    scanWorkspaceModels: fe,
    getModelsDirectory: De,
    setModelsDirectory: Fe,
    getHuggingFaceRepoInfo: ce,
    getModelsSubdirectories: Se,
    // Settings
    getConfig: _e,
    updateConfig: ye,
    // Debug/Logs
    getEnvironmentLogs: Ce,
    getWorkspaceLogs: me,
    getEnvironmentLogPath: ue,
    getWorkspaceLogPath: Me,
    getOrchestratorLogs: Re,
    getOrchestratorLogPath: O,
    openFile: F,
    // Node Management
    getNodes: te,
    trackNodeAsDev: ie,
    installNode: pe,
    queueNodeInstall: ge,
    updateNode: Ie,
    uninstallNode: Ee,
    // Git Remotes
    getRemotes: le,
    addRemote: ve,
    removeRemote: Ne,
    updateRemoteUrl: Te,
    fetchRemote: ee,
    getRemoteSyncStatus: q,
    // Push/Pull
    getPullPreview: $e,
    pullFromRemote: ke,
    getPushPreview: B,
    pushToRemote: U,
    validateMerge: de,
    // Environment Sync
    syncEnvironmentManually: Oe,
    // Workflow Repair
    repairWorkflowModels: Ve,
    // Import Operations
    previewTarballImport: Xe,
    previewGitImport: Rt,
    validateEnvironmentName: mt,
    executeImport: at,
    executeGitImport: zt,
    getImportProgress: dt,
    // First-Time Setup
    getSetupStatus: Kt,
    initializeWorkspace: Ws,
    getInitializeProgress: Ms,
    validatePath: no,
    // Deploy Operations
    getDeploySummary: Co,
    getDataCenters: xo,
    testRunPodConnection: So,
    getNetworkVolumes: xe,
    getRunPodGpuTypes: X,
    deployToRunPod: He,
    getRunPodPods: gt,
    terminateRunPodPod: qt,
    stopRunPodPod: ys,
    startRunPodPod: ws,
    getDeploymentStatus: ls,
    exportDeployPackage: Ue,
    getStoredRunPodKey: is,
    clearRunPodKey: oe,
    // Custom Worker Operations
    getCustomWorkers: K,
    addCustomWorker: Ae,
    removeCustomWorker: je,
    testWorkerConnection: st,
    scanForWorkers: ft,
    getWorkerSystemInfo: Mt,
    getWorkerInstances: rs,
    deployToWorker: Gs,
    startWorkerInstance: js,
    stopWorkerInstance: ln,
    terminateWorkerInstance: rn,
    // Git Authentication
    testGitAuth: cn
  };
}
async function gn(e, s) {
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
function Tv() {
  async function e() {
    try {
      return await gn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await gn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await gn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await gn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const Pv = { class: "base-modal-header" }, Rv = {
  key: 0,
  class: "base-modal-title"
}, Mv = { class: "base-modal-body" }, Dv = {
  key: 0,
  class: "base-modal-loading"
}, Lv = {
  key: 1,
  class: "base-modal-error"
}, Ov = {
  key: 0,
  class: "base-modal-footer"
}, Av = /* @__PURE__ */ he({
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
    function i(c) {
      c.key === "Escape" && o.showCloseButton && n("close");
    }
    return Ze(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), oo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, d) => (a(), R(yt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Pe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: d[1] || (d[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", Pv, [
            Ke(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Rv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), r("button", {
              key: 0,
              class: "base-modal-close",
              onClick: d[0] || (d[0] = (u) => c.$emit("close"))
            }, [...d[2] || (d[2] = [
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
          t("div", Mv, [
            e.loading ? (a(), r("div", Dv, "Loading...")) : e.error ? (a(), r("div", Lv, f(e.error), 1)) : Ke(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Ov, [
            Ke(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), vt = /* @__PURE__ */ we(Av, [["__scopeId", "data-v-8dab1081"]]), Nv = ["type", "disabled"], Uv = {
  key: 0,
  class: "spinner"
}, zv = /* @__PURE__ */ he({
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
    return (s, o) => (a(), r("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Pe(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Uv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Nv));
  }
}), Le = /* @__PURE__ */ we(zv, [["__scopeId", "data-v-f3452606"]]), Fv = {
  key: 0,
  class: "base-title-count"
}, Bv = /* @__PURE__ */ he({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), R(Ja(`h${e.level}`), {
      class: Pe(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Fv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ we(Bv, [["__scopeId", "data-v-5a01561d"]]), Vv = ["value", "disabled"], Wv = {
  key: 0,
  value: "",
  disabled: ""
}, Gv = ["value"], jv = {
  key: 0,
  class: "base-select-error"
}, Hv = /* @__PURE__ */ he({
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
    return (n, l) => (a(), r("div", {
      class: Pe(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Pe(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", Wv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(j, null, be(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Gv))), 128))
      ], 42, Vv),
      e.error ? (a(), r("span", jv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Kv = /* @__PURE__ */ we(Hv, [["__scopeId", "data-v-7436d745"]]), qv = { class: "popover-header" }, Yv = { class: "popover-title" }, Jv = { class: "popover-content" }, Xv = {
  key: 0,
  class: "popover-actions"
}, Qv = /* @__PURE__ */ he({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), R(yt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ht({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", qv, [
            t("h4", Yv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Jv, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Xv, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ we(Qv, [["__scopeId", "data-v-42815ace"]]), Zv = { class: "detail-section" }, ep = {
  key: 0,
  class: "empty-message"
}, tp = { class: "model-header" }, sp = { class: "model-name" }, op = { class: "model-details" }, np = { class: "model-row" }, ap = { class: "model-row" }, lp = { class: "label" }, ip = {
  key: 0,
  class: "model-row model-row-nodes"
}, rp = { class: "node-list" }, cp = ["onClick"], dp = {
  key: 1,
  class: "model-row"
}, up = { class: "value" }, fp = {
  key: 2,
  class: "model-row"
}, mp = { class: "value error" }, vp = {
  key: 0,
  class: "model-actions"
}, pp = { class: "detail-section" }, gp = {
  key: 0,
  class: "empty-message"
}, hp = { class: "node-name" }, yp = {
  key: 0,
  class: "node-version"
}, wp = /* @__PURE__ */ he({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = nt(), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(I) {
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
    function $(I) {
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
    function P(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const T = I.hash || I.filename;
      return p.value.has(T) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function D(I) {
      return p.value.has(I);
    }
    function E(I) {
      p.value.has(I) ? p.value.delete(I) : p.value.add(I), p.value = new Set(p.value);
    }
    async function x() {
      u.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function W(I, T) {
      g.value[I] = T, v.value = !0;
    }
    async function V(I) {
      try {
        await c(I);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function z() {
      if (!v.value) {
        n("close");
        return;
      }
      u.value = !0, m.value = null;
      try {
        for (const [I, T] of Object.entries(g.value))
          await i(o.workflowName, I, T);
        n("refresh"), n("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    return Ze(x), (I, T) => (a(), r(j, null, [
      C(vt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: u.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (M) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), r(j, { key: 0 }, [
            t("section", Zv, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), r("div", ep, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, be(d.value.models, (M) => {
                var ae;
                return a(), r("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  t("div", tp, [
                    T[6] || (T[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", sp, f(M.filename), 1)
                  ]),
                  t("div", op, [
                    t("div", np, [
                      T[7] || (T[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Pe(["value", S(M.status)])
                      }, f($(M.status)), 3)
                    ]),
                    t("div", ap, [
                      t("span", lp, [
                        T[8] || (T[8] = b(" Importance: ", -1)),
                        C(_r, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (J) => w.value = !0)
                        })
                      ]),
                      C(Kv, {
                        "model-value": g.value[M.filename] || M.importance,
                        options: _,
                        "onUpdate:modelValue": (J) => W(M.filename, J)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (a(), r("div", ip, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", rp, [
                        (a(!0), r(j, null, be(P(M), (J, G) => (a(), r("div", {
                          key: `${J.node_id}-${G}`,
                          class: "node-reference"
                        }, f(J.node_type) + " (Node #" + f(J.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (J) => E(M.hash || M.filename)
                        }, f(D(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, cp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    M.size_mb ? (a(), r("div", dp, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", up, f(M.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    M.has_category_mismatch ? (a(), r("div", fp, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", mp, [
                        T[11] || (T[11] = b(" In ", -1)),
                        t("code", null, f(M.actual_category) + "/", 1),
                        T[12] || (T[12] = b(" but loader needs ", -1)),
                        t("code", null, f((ae = M.expected_categories) == null ? void 0 : ae[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  M.status !== "available" ? (a(), r("div", vp, [
                    M.status === "downloadable" ? (a(), R(Le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (J) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (a(), R(Le, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => V(M.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (a(), R(Le, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (J) => n("resolve"))
                    }, {
                      default: h(() => [...T[16] || (T[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", pp, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), r("div", gp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, be(d.value.nodes, (M) => (a(), r("div", {
                key: M.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Pe(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, f(M.status === "installed" ? "✓" : "✕"), 3),
                t("span", hp, f(M.name), 1),
                M.version ? (a(), r("span", yp, "v" + f(M.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(Le, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (M) => n("close"))
          }, {
            default: h(() => [...T[17] || (T[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), R(Le, {
            key: 0,
            variant: "primary",
            onClick: z
          }, {
            default: h(() => [...T[18] || (T[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(as, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: T[5] || (T[5] = (M) => w.value = !1)
      }, {
        content: h(() => [...T[19] || (T[19] = [
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
}), _p = /* @__PURE__ */ we(wp, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function $r() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function fa(e) {
  return Ye.items.find((s) => s.id === e);
}
async function uo() {
  if (Ye.status === "downloading") return;
  const e = Ye.items.find((s) => s.status === "queued");
  if (!e) {
    Ye.status = "idle";
    return;
  }
  Ye.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await bp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", uo();
  }
}
async function bp(e) {
  return new Promise((s, o) => {
    vs && (vs.close(), vs = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    vs = l;
    let i = Date.now(), c = 0, d = !1;
    l.onmessage = (u) => {
      try {
        const m = JSON.parse(u.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), g = (v - i) / 1e3;
            if (g > 0.5) {
              const w = e.downloaded - c;
              if (e.speed = w / g, i = v, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const p = e.size - e.downloaded;
                e.eta = p / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, l.close(), vs = null, s();
            break;
          case "error":
            d = !0, l.close(), vs = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), vs = null, d || o(new Error("Connection lost"));
    };
  });
}
async function kp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: $r(),
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
      Ye.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function ko() {
  function e($) {
    for (const P of $) {
      if (Ye.items.some(
        (x) => x.url === P.url && x.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const E = {
        id: $r(),
        workflow: P.workflow,
        filename: P.filename,
        url: P.url,
        targetPath: P.targetPath,
        size: P.size || 0,
        type: P.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ye.items.push(E);
    }
    Ye.status === "idle" && uo();
  }
  async function s($) {
    const P = fa($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), P.status = "failed", P.error = "Cancelled by user", Ye.status = "idle", uo();
      } else if (P.status === "queued") {
        const D = Ye.items.findIndex((E) => E.id === $);
        D >= 0 && Ye.items.splice(D, 1);
      }
    }
  }
  function o($) {
    const P = fa($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n($) {
    const P = fa($);
    !P || P.status !== "paused" || (P.status = "queued", Ye.status === "idle" && uo());
  }
  function l() {
    const $ = Ye.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Ye.status === "idle" && uo();
  }
  function i($) {
    const P = Ye.items.findIndex((D) => D.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Ye.items[P].status) && Ye.items.splice(P, 1);
  }
  function c() {
    Ye.items = Ye.items.filter(($) => $.status !== "completed");
  }
  function d() {
    Ye.items = Ye.items.filter(($) => $.status !== "failed");
  }
  const u = N(
    () => Ye.items.find(($) => $.status === "downloading")
  ), m = N(
    () => Ye.items.filter(($) => $.status === "queued")
  ), v = N(
    () => Ye.items.filter(($) => $.status === "completed")
  ), g = N(
    () => Ye.items.filter(($) => $.status === "failed")
  ), w = N(
    () => Ye.items.filter(($) => $.status === "paused")
  ), p = N(() => Ye.items.length > 0), _ = N(
    () => Ye.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = N(
    () => Ye.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: In(Ye),
    // Computed
    currentDownload: u,
    queuedItems: m,
    completedItems: v,
    failedItems: g,
    pausedItems: w,
    hasItems: p,
    activeCount: _,
    hasPaused: S,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: c,
    clearFailed: d,
    loadPendingDownloads: kp
  };
}
function Cr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(D, E) {
    var W;
    if (!((W = window.app) != null && W.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(D, E);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), z = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(z);
    }
    return x.json();
  }
  async function d(D) {
    l.value = !0, i.value = null;
    try {
      let E;
      return co() || (E = await c(
        `/v2/comfygit/workflow/${D}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = E, E;
    } catch (E) {
      const x = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = x, E;
    } finally {
      l.value = !1;
    }
  }
  async function u(D, E, x, W) {
    l.value = !0, i.value = null;
    try {
      let V;
      if (!co()) {
        const z = Object.fromEntries(E), I = Object.fromEntries(x), T = W ? Array.from(W) : [];
        V = await c(
          `/v2/comfygit/workflow/${D}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: z,
              model_choices: I,
              skipped_packages: T
            })
          }
        );
      }
      return s.value = V, V;
    } catch (V) {
      const z = V instanceof Error ? V.message : "Unknown error occurred";
      throw i.value = z, V;
    } finally {
      l.value = !1;
    }
  }
  async function m(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return co() || (x = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), o.value = x.results, x.results;
    } catch (x) {
      const W = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = W, x;
    } finally {
      l.value = !1;
    }
  }
  async function v(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return co() || (x = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const W = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = W, x;
    } finally {
      l.value = !1;
    }
  }
  const g = Vs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function p(D) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return co(), await _(D);
    } catch (E) {
      const x = E instanceof Error ? E.message : "Failed to install nodes";
      throw g.installError = x, E;
    }
  }
  async function _(D) {
    var x;
    const E = await c(
      `/v2/comfygit/workflow/${D}/install`,
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
      const W = new Map(((x = E.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < g.nodesToInstall.length; V++) {
        const z = g.nodesToInstall[V], I = W.get(z);
        g.nodeInstallProgress.completedNodes.push({
          node_id: z,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function S(D, E, x) {
    w(), g.phase = "resolving", i.value = null;
    const W = Object.fromEntries(E), V = Object.fromEntries(x);
    try {
      const z = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: W,
          model_choices: V
        })
      });
      if (!z.ok)
        throw new Error(`Request failed: ${z.status}`);
      if (!z.body)
        throw new Error("No response body");
      const I = z.body.getReader(), T = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: ae, value: J } = await I.read();
        if (ae) break;
        M += T.decode(J, { stream: !0 });
        const G = M.split(`

`);
        M = G.pop() || "";
        for (const se of G) {
          if (!se.trim()) continue;
          const Q = se.split(`
`);
          let A = "", H = "";
          for (const L of Q)
            L.startsWith("event: ") ? A = L.slice(7) : L.startsWith("data: ") && (H = L.slice(6));
          if (H)
            try {
              const L = JSON.parse(H);
              $(A, L);
            } catch (L) {
              console.warn("Failed to parse SSE event:", L);
            }
        }
      }
    } catch (z) {
      const I = z instanceof Error ? z.message : "Unknown error occurred";
      throw i.value = I, g.error = I, g.phase = "error", z;
    }
  }
  function $(D, E) {
    switch (D) {
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
        g.error = E.message, g.phase = "error", i.value = E.message;
        break;
    }
  }
  function P(D, E) {
    const { addToQueue: x } = ko(), W = E.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: D,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return W.length > 0 && x(W), W.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: i,
    progress: g,
    // Methods
    analyzeWorkflow: d,
    applyResolution: u,
    applyResolutionWithProgress: S,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: P
  };
}
const $p = { class: "resolution-stepper" }, Cp = { class: "stepper-header" }, xp = ["onClick"], Sp = {
  key: 0,
  class: "step-icon"
}, Ip = {
  key: 1,
  class: "step-number"
}, Ep = { class: "step-label" }, Tp = {
  key: 0,
  class: "step-connector"
}, Pp = { class: "stepper-content" }, Rp = /* @__PURE__ */ he({
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
    function l(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const g = o.stepStats[m];
        return g.total > 0 && g.resolved === g.total;
      }
      return o.completedSteps.includes(m);
    }
    function i(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const g = o.stepStats[m];
        return g.resolved > 0 && g.resolved < g.total;
      }
      return !1;
    }
    function c(m) {
      return l(m) ? "state-complete" : i(m) ? "state-partial" : "state-pending";
    }
    function d(m) {
      return !1;
    }
    function u(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), r("div", $p, [
      t("div", Cp, [
        (a(!0), r(j, null, be(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Pe(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: d(g.id)
          }]),
          onClick: (p) => u(g.id)
        }, [
          t("div", {
            class: Pe(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", Sp, "✓")) : (a(), r("span", Ip, f(w + 1), 1))
          ], 2),
          t("div", Ep, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Tp)) : y("", !0)
        ], 10, xp))), 128))
      ]),
      t("div", Pp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Mp = /* @__PURE__ */ we(Rp, [["__scopeId", "data-v-2a7b3af8"]]), Dp = /* @__PURE__ */ he({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = N(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = N(() => `confidence-${o.value}`), l = N(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Pe(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Nn = /* @__PURE__ */ we(Dp, [["__scopeId", "data-v-17ec4b80"]]), Lp = { class: "node-info" }, Op = { class: "node-info-text" }, Ap = { class: "item-body" }, Np = {
  key: 0,
  class: "resolved-state"
}, Up = {
  key: 1,
  class: "multiple-options"
}, zp = { class: "options-list" }, Fp = ["onClick"], Bp = ["name", "value", "checked", "onChange"], Vp = { class: "option-content" }, Wp = { class: "option-header" }, Gp = { class: "option-package-id" }, jp = {
  key: 0,
  class: "option-title"
}, Hp = { class: "option-meta" }, Kp = {
  key: 0,
  class: "installed-badge"
}, qp = { class: "action-buttons" }, Yp = {
  key: 2,
  class: "unresolved"
}, Jp = {
  key: 0,
  class: "searching-state"
}, Xp = { class: "options-list" }, Qp = ["onClick"], Zp = ["name", "value"], eg = { class: "option-content" }, tg = { class: "option-header" }, sg = { class: "option-package-id" }, og = {
  key: 0,
  class: "option-description"
}, ng = { class: "option-meta" }, ag = {
  key: 0,
  class: "installed-badge"
}, lg = {
  key: 2,
  class: "unresolved-message"
}, ig = { class: "action-buttons" }, rg = /* @__PURE__ */ he({
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
    const o = e, n = s;
    function l(u, m = 80) {
      return u.length <= m ? u : u.slice(0, m - 3) + "...";
    }
    const i = N(() => !!o.choice);
    N(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), N(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.package_id;
    });
    const c = N(() => {
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
    function d(u) {
      n("option-selected", u);
    }
    return (u, m) => (a(), r("div", {
      class: Pe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Lp, [
        t("span", Op, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Pe(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Ap, [
        i.value ? (a(), r("div", Np, [
          C(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Up, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", zp, [
            (a(!0), r(j, null, be(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Pe(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => d(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => d(g)
              }, null, 40, Bp),
              t("div", Vp, [
                t("div", Wp, [
                  t("span", Gp, f(v.package_id), 1),
                  C(Nn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", jp, f(v.title), 1)) : y("", !0),
                t("div", Hp, [
                  v.is_installed ? (a(), r("span", Kp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Fp))), 128))
          ]),
          t("div", qp, [
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), r("div", Yp, [
          e.isSearching ? (a(), r("div", Jp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Xp, [
              (a(!0), r(j, null, be(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Zp),
                t("div", eg, [
                  t("div", tg, [
                    t("span", sg, f(v.package_id), 1),
                    C(Nn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", og, f(l(v.description)), 1)) : y("", !0),
                  t("div", ng, [
                    v.is_installed ? (a(), r("span", ag, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Qp))), 128))
            ])
          ], 64)) : (a(), r("div", lg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", ig, [
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => {
                var v;
                return [
                  b(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[17] || (m[17] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), cg = /* @__PURE__ */ we(rg, [["__scopeId", "data-v-c2997d1d"]]), dg = { class: "item-navigator" }, ug = { class: "nav-item-info" }, fg = ["title"], mg = { class: "nav-controls" }, vg = { class: "nav-arrows" }, pg = ["disabled"], gg = ["disabled"], hg = { class: "nav-position" }, yg = /* @__PURE__ */ he({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", dg, [
      t("div", ug, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, fg)
      ]),
      t("div", mg, [
        t("div", vg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, pg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, gg)
        ]),
        t("span", hg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), xr = /* @__PURE__ */ we(yg, [["__scopeId", "data-v-74af7920"]]), wg = ["type", "value", "placeholder", "disabled"], _g = {
  key: 0,
  class: "base-input-error"
}, bg = /* @__PURE__ */ he({
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
    return (s, o) => (a(), r("div", {
      class: Pe(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Pe(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Zt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Zt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, wg),
      e.error ? (a(), r("span", _g, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), es = /* @__PURE__ */ we(bg, [["__scopeId", "data-v-9ba02cdc"]]), kg = { class: "node-resolution-step" }, $g = {
  key: 0,
  class: "auto-resolved-section"
}, Cg = { class: "section-header" }, xg = { class: "stat-badge" }, Sg = { class: "resolved-packages-list" }, Ig = { class: "package-info" }, Eg = { class: "package-id" }, Tg = { class: "node-count" }, Pg = { class: "package-actions" }, Rg = {
  key: 0,
  class: "status-badge install"
}, Mg = {
  key: 1,
  class: "status-badge skip"
}, Dg = ["onClick"], Lg = {
  key: 1,
  class: "section-divider"
}, Og = { class: "step-header" }, Ag = { class: "stat-badge" }, Ng = {
  key: 1,
  class: "step-body"
}, Ug = {
  key: 3,
  class: "empty-state"
}, zg = { class: "node-modal-body" }, Fg = { class: "node-search-results-container" }, Bg = {
  key: 0,
  class: "node-search-results"
}, Vg = ["onClick"], Wg = { class: "node-result-header" }, Gg = { class: "node-result-package-id" }, jg = {
  key: 0,
  class: "node-result-description"
}, Hg = {
  key: 1,
  class: "node-empty-state"
}, Kg = {
  key: 2,
  class: "node-empty-state"
}, qg = {
  key: 3,
  class: "node-empty-state"
}, Yg = { class: "node-manual-entry-modal" }, Jg = { class: "node-modal-body" }, Xg = { class: "node-modal-actions" }, Qg = /* @__PURE__ */ he({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = Cr(), i = k(0), c = k(!1), d = k(!1), u = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && L(), _.value = !1;
    }
    const $ = N(() => o.nodes[i.value]), P = N(() => o.nodes.filter((ye) => o.nodeChoices.has(ye.node_type)).length), D = N(() => $.value ? w.value.get($.value.node_type) || [] : []), E = N(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (ye) => {
      var Ce;
      ye && ((Ce = ye.options) != null && Ce.length || w.value.has(ye.node_type) || p.value.has(ye.node_type) || o.nodeChoices.has(ye.node_type) || await x(ye.node_type));
    }, { immediate: !0 });
    async function x(ye) {
      p.value.add(ye);
      try {
        const Ce = await l(ye, 5);
        w.value.set(ye, Ce);
      } catch {
        w.value.set(ye, []);
      } finally {
        p.value.delete(ye);
      }
    }
    const W = N(() => o.autoResolvedPackages.filter((ye) => !o.skippedPackages.has(ye.package_id)).length);
    function V(ye) {
      return o.skippedPackages.has(ye);
    }
    function z(ye) {
      n("package-skip", ye);
    }
    const I = N(() => {
      var Ce;
      if (!$.value) return "not-found";
      const ye = o.nodeChoices.get($.value.node_type);
      if (ye)
        switch (ye.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Ce = $.value.options) != null && Ce.length ? "ambiguous" : "not-found";
    }), T = N(() => {
      var Ce;
      if (!$.value) return;
      const ye = o.nodeChoices.get($.value.node_type);
      if (ye)
        switch (ye.action) {
          case "install":
            return ye.package_id ? `→ ${ye.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Ce = $.value.options) != null && Ce.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function M(ye) {
      ye >= 0 && ye < o.nodes.length && (i.value = ye);
    }
    function ae() {
      var ye;
      for (let Ce = i.value + 1; Ce < o.nodes.length; Ce++) {
        const me = o.nodes[Ce];
        if (!((ye = o.nodeChoices) != null && ye.has(me.node_type))) {
          M(Ce);
          return;
        }
      }
    }
    function J() {
      $.value && (n("mark-optional", $.value.node_type), _t(() => ae()));
    }
    function G() {
      $.value && (n("skip", $.value.node_type), _t(() => ae()));
    }
    function se(ye) {
      $.value && (n("option-selected", $.value.node_type, ye), _t(() => ae()));
    }
    function Q() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function A() {
      $.value && (u.value = $.value.node_type, v.value = D.value, c.value = !0, Fe(u.value));
    }
    function H() {
      m.value = "", d.value = !0;
    }
    function L() {
      c.value = !1, u.value = "", v.value = [];
    }
    function ne() {
      d.value = !1, m.value = "";
    }
    let fe = null;
    function De() {
      fe && clearTimeout(fe), fe = setTimeout(() => {
        Fe(u.value);
      }, 300);
    }
    async function Fe(ye) {
      if (!ye.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(ye, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function ce(ye) {
      $.value && (n("manual-entry", $.value.node_type, ye.package_id), L(), _t(() => ae()));
    }
    function Se(ye) {
      $.value && (n("manual-entry", $.value.node_type, ye.package_id), _t(() => ae()));
    }
    function _e() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), ne(), _t(() => ae()));
    }
    return (ye, Ce) => {
      var me, ue;
      return a(), r("div", kg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", $g, [
          t("div", Cg, [
            Ce[6] || (Ce[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", xg, f(W.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Sg, [
            (a(!0), r(j, null, be(e.autoResolvedPackages, (Me) => (a(), r("div", {
              key: Me.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Ig, [
                t("code", Eg, f(Me.package_id), 1),
                t("span", Tg, f(Me.node_types_count) + " node type" + f(Me.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Pg, [
                V(Me.package_id) ? (a(), r("span", Mg, " SKIPPED ")) : (a(), r("span", Rg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Re) => z(Me.package_id)
                }, f(V(Me.package_id) ? "Include" : "Skip"), 9, Dg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Lg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(j, { key: 2 }, [
          t("div", Og, [
            Ce[7] || (Ce[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Ag, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(xr, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Ce[0] || (Ce[0] = (Me) => M(i.value - 1)),
            onNext: Ce[1] || (Ce[1] = (Me) => M(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Ng, [
            C(cg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((me = $.value.options) != null && me.length),
              options: $.value.options,
              choice: (ue = e.nodeChoices) == null ? void 0 : ue.get($.value.node_type),
              status: I.value,
              "status-label": T.value,
              "search-results": D.value,
              "is-searching": E.value,
              onMarkOptional: J,
              onSkip: G,
              onManualEntry: H,
              onSearch: A,
              onOptionSelected: se,
              onClearChoice: Q,
              onSearchResultSelected: Se
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Ug, [...Ce[8] || (Ce[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(yt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Ce[4] || (Ce[4] = it((Me) => _.value = !0, ["self"])),
            onMouseup: it(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Ce[3] || (Ce[3] = (Me) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Ce[9] || (Ce[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              t("div", zg, [
                C(es, {
                  modelValue: u.value,
                  "onUpdate:modelValue": Ce[2] || (Ce[2] = (Me) => u.value = Me),
                  placeholder: "Search by node type, package name...",
                  onInput: De
                }, null, 8, ["modelValue"]),
                t("div", Fg, [
                  v.value.length > 0 ? (a(), r("div", Bg, [
                    (a(!0), r(j, null, be(v.value, (Me) => (a(), r("div", {
                      key: Me.package_id,
                      class: "node-search-result-item",
                      onClick: (Re) => ce(Me)
                    }, [
                      t("div", Wg, [
                        t("code", Gg, f(Me.package_id), 1),
                        Me.match_confidence ? (a(), R(Nn, {
                          key: 0,
                          confidence: Me.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Me.description ? (a(), r("div", jg, f(Me.description), 1)) : y("", !0)
                    ], 8, Vg))), 128))
                  ])) : g.value ? (a(), r("div", Hg, "Searching...")) : u.value ? (a(), r("div", Kg, 'No packages found matching "' + f(u.value) + '"', 1)) : (a(), r("div", qg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(yt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: it(ne, ["self"])
          }, [
            t("div", Yg, [
              t("div", { class: "node-modal-header" }, [
                Ce[10] || (Ce[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ne
                }, "✕")
              ]),
              t("div", Jg, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Ce[5] || (Ce[5] = (Me) => m.value = Me),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Xg, [
                  C(Le, {
                    variant: "secondary",
                    onClick: ne
                  }, {
                    default: h(() => [...Ce[11] || (Ce[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Le, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: _e
                  }, {
                    default: h(() => [...Ce[12] || (Ce[12] = [
                      b(" Add Package ", -1)
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
}), Zg = /* @__PURE__ */ we(Qg, [["__scopeId", "data-v-6d7f8125"]]), eh = { class: "node-info" }, th = { class: "node-info-text" }, sh = { class: "item-body" }, oh = {
  key: 0,
  class: "resolved-state"
}, nh = {
  key: 1,
  class: "multiple-options"
}, ah = { class: "options-list" }, lh = ["onClick"], ih = ["name", "value", "checked", "onChange"], rh = { class: "option-content" }, ch = { class: "option-header" }, dh = { class: "option-filename" }, uh = { class: "option-meta" }, fh = { class: "option-size" }, mh = { class: "option-category" }, vh = { class: "option-path" }, ph = { class: "action-buttons" }, gh = {
  key: 2,
  class: "unresolved"
}, hh = { class: "action-buttons" }, yh = /* @__PURE__ */ he({
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
    const o = e, n = s, l = N(() => !!o.choice);
    N(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), N(() => {
      var u, m;
      return ((m = (u = o.choice) == null ? void 0 : u.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const i = N(() => {
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
    function c(u) {
      n("option-selected", u);
    }
    function d(u) {
      if (!u) return "Unknown";
      const m = u / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (u, m) => (a(), r("div", {
      class: Pe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", eh, [
        t("span", th, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Pe(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", sh, [
        l.value ? (a(), r("div", oh, [
          C(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", nh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", ah, [
            (a(!0), r(j, null, be(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: Pe(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, ih),
              t("div", rh, [
                t("div", ch, [
                  t("span", dh, f(v.model.filename), 1),
                  C(Nn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", uh, [
                  t("span", fh, f(d(v.model.size)), 1),
                  t("span", mh, f(v.model.category), 1)
                ]),
                t("div", vh, f(v.model.relative_path), 1)
              ])
            ], 10, lh))), 128))
          ]),
          t("div", ph, [
            C(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), r("div", gh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", hh, [
            C(Le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[15] || (m[15] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), wh = /* @__PURE__ */ we(yh, [["__scopeId", "data-v-8a82fefa"]]), _h = { class: "model-resolution-step" }, bh = { class: "step-header" }, kh = { class: "step-info" }, $h = { class: "step-title" }, Ch = { class: "step-description" }, xh = { class: "stat-badge" }, Sh = {
  key: 1,
  class: "step-body"
}, Ih = {
  key: 2,
  class: "empty-state"
}, Eh = { class: "model-search-modal" }, Th = { class: "model-modal-body" }, Ph = {
  key: 0,
  class: "model-search-results"
}, Rh = ["onClick"], Mh = { class: "model-result-header" }, Dh = { class: "model-result-filename" }, Lh = { class: "model-result-meta" }, Oh = { class: "model-result-category" }, Ah = { class: "model-result-size" }, Nh = {
  key: 0,
  class: "model-result-path"
}, Uh = {
  key: 1,
  class: "model-no-results"
}, zh = {
  key: 2,
  class: "model-searching"
}, Fh = { class: "model-download-url-modal" }, Bh = { class: "model-modal-body" }, Vh = { class: "model-input-group" }, Wh = { class: "model-input-group" }, Gh = { class: "model-modal-actions" }, jh = /* @__PURE__ */ he({
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
    function n(L) {
      var ne;
      return L && ((ne = o[L]) == null ? void 0 : ne[0]) || null;
    }
    const l = e, i = s, c = k(0), d = k(!1), u = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[c.value]), S = N(() => l.models.some((L) => L.is_download_intent)), $ = N(() => l.models.filter(
      (L) => l.modelChoices.has(L.filename) || L.is_download_intent
    ).length), P = N(() => {
      var ne;
      if (!_.value) return "";
      const L = n((ne = _.value.reference) == null ? void 0 : ne.node_type);
      return L ? `${L}/${_.value.filename}` : "";
    }), D = N(() => {
      var ne;
      if (!_.value) return "not-found";
      const L = l.modelChoices.get(_.value.filename);
      if (L)
        switch (L.action) {
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
      return _.value.is_download_intent ? "download" : (ne = _.value.options) != null && ne.length ? "ambiguous" : "not-found";
    }), E = N(() => {
      var ne, fe;
      if (!_.value) return;
      const L = l.modelChoices.get(_.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (ne = L.selected_model) != null && ne.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (fe = _.value.options) != null && fe.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function x(L) {
      L >= 0 && L < l.models.length && (c.value = L);
    }
    function W() {
      var L;
      for (let ne = c.value + 1; ne < l.models.length; ne++) {
        const fe = l.models[ne];
        if (!fe.is_download_intent && !((L = l.modelChoices) != null && L.has(fe.filename))) {
          x(ne);
          return;
        }
      }
    }
    function V() {
      _.value && (i("mark-optional", _.value.filename), _t(() => W()));
    }
    function z() {
      _.value && (i("skip", _.value.filename), _t(() => W()));
    }
    function I(L) {
      _.value && (i("option-selected", _.value.filename, L), _t(() => W()));
    }
    function T() {
      _.value && i("clear-choice", _.value.filename);
    }
    function M() {
      _.value && (m.value = _.value.filename, d.value = !0);
    }
    function ae() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, u.value = !0);
    }
    function J() {
      d.value = !1, m.value = "", w.value = [];
    }
    function G() {
      u.value = !1, v.value = "", g.value = "";
    }
    function se() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function Q(L) {
      _.value && (J(), _t(() => W()));
    }
    function A() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), G(), _t(() => W()));
    }
    function H(L) {
      if (!L) return "Unknown";
      const ne = L / (1024 * 1024 * 1024);
      return ne >= 1 ? `${ne.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, ne) => {
      var fe, De, Fe;
      return a(), r("div", _h, [
        t("div", bh, [
          t("div", kh, [
            t("h3", $h, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Ch, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", xh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(xr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ne[0] || (ne[0] = (ce) => x(c.value - 1)),
          onNext: ne[1] || (ne[1] = (ce) => x(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", Sh, [
          C(wh, {
            filename: _.value.filename,
            "node-type": ((fe = _.value.reference) == null ? void 0 : fe.node_type) || "Unknown",
            "has-multiple-options": !!((De = _.value.options) != null && De.length),
            options: _.value.options,
            choice: (Fe = e.modelChoices) == null ? void 0 : Fe.get(_.value.filename),
            status: D.value,
            "status-label": E.value,
            onMarkOptional: V,
            onSkip: z,
            onDownloadUrl: ae,
            onSearch: M,
            onOptionSelected: I,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Ih, [...ne[5] || (ne[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(yt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(J, ["self"])
          }, [
            t("div", Eh, [
              t("div", { class: "model-modal-header" }, [
                ne[6] || (ne[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              t("div", Th, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ne[2] || (ne[2] = (ce) => m.value = ce),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Ph, [
                  (a(!0), r(j, null, be(w.value, (ce) => (a(), r("div", {
                    key: ce.hash,
                    class: "model-search-result-item",
                    onClick: (Se) => Q()
                  }, [
                    t("div", Mh, [
                      t("code", Dh, f(ce.filename), 1)
                    ]),
                    t("div", Lh, [
                      t("span", Oh, f(ce.category), 1),
                      t("span", Ah, f(H(ce.size)), 1)
                    ]),
                    ce.relative_path ? (a(), r("div", Nh, f(ce.relative_path), 1)) : y("", !0)
                  ], 8, Rh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Uh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", zh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(yt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(G, ["self"])
          }, [
            t("div", Fh, [
              t("div", { class: "model-modal-header" }, [
                ne[7] || (ne[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: G
                }, "✕")
              ]),
              t("div", Bh, [
                t("div", Vh, [
                  ne[8] || (ne[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(es, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ne[3] || (ne[3] = (ce) => v.value = ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Wh, [
                  ne[9] || (ne[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(es, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ne[4] || (ne[4] = (ce) => g.value = ce),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Gh, [
                  C(Le, {
                    variant: "secondary",
                    onClick: G
                  }, {
                    default: h(() => [...ne[10] || (ne[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Le, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: A
                  }, {
                    default: h(() => [...ne[11] || (ne[11] = [
                      b(" Queue Download ", -1)
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
}), Hh = /* @__PURE__ */ we(jh, [["__scopeId", "data-v-5c700bfa"]]), Kh = { class: "applying-step" }, qh = {
  key: 0,
  class: "phase-content"
}, Yh = {
  key: 1,
  class: "phase-content"
}, Jh = { class: "phase-description" }, Xh = { class: "overall-progress" }, Qh = { class: "progress-bar" }, Zh = { class: "progress-label" }, ey = { class: "install-list" }, ty = { class: "install-icon" }, sy = { key: 0 }, oy = {
  key: 1,
  class: "spinner"
}, ny = { key: 2 }, ay = { key: 3 }, ly = {
  key: 0,
  class: "install-error"
}, iy = {
  key: 2,
  class: "phase-content"
}, ry = { class: "phase-header" }, cy = { class: "phase-title" }, dy = { class: "completion-summary" }, uy = {
  key: 0,
  class: "summary-item success"
}, fy = { class: "summary-text" }, my = {
  key: 1,
  class: "summary-item error"
}, vy = { class: "summary-text" }, py = {
  key: 2,
  class: "failed-list"
}, gy = { class: "failed-node-id" }, hy = { class: "failed-error" }, yy = {
  key: 4,
  class: "summary-item success"
}, wy = {
  key: 5,
  class: "restart-prompt"
}, _y = {
  key: 3,
  class: "phase-content error"
}, by = { class: "error-message" }, ky = /* @__PURE__ */ he({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = N(() => {
      var m, v;
      const d = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!d) return 0;
      const u = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(u / d * 100);
    }), n = N(() => {
      var d;
      return ((d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.filter((u) => !u.success)) || [];
    }), l = N(() => n.value.length > 0);
    function i(d, u) {
      var v, g;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === d);
      return m ? m.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === u ? "installing" : "pending";
    }
    function c(d) {
      var u, m;
      return (m = (u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.find((v) => v.node_id === d)) == null ? void 0 : m.error;
    }
    return (d, u) => {
      var m, v, g, w;
      return a(), r("div", Kh, [
        e.progress.phase === "resolving" ? (a(), r("div", qh, [...u[2] || (u[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", Yh, [
          u[3] || (u[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Jh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Xh, [
            t("div", Qh, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Zh, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", ey, [
            (a(!0), r(j, null, be(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Pe(["install-item", i(p, _)])
            }, [
              t("span", ty, [
                i(p, _) === "pending" ? (a(), r("span", sy, "○")) : i(p, _) === "installing" ? (a(), r("span", oy, "◌")) : i(p, _) === "complete" ? (a(), r("span", ny, "✓")) : i(p, _) === "failed" ? (a(), r("span", ay, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", ly, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", iy, [
          t("div", ry, [
            t("span", {
              class: Pe(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", cy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", dy, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", uy, [
              u[4] || (u[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", fy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", my, [
              u[5] || (u[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", vy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", py, [
              (a(!0), r(j, null, be(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", gy, f(p.node_id), 1),
                t("span", hy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: u[0] || (u[0] = (p) => d.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", yy, [...u[6] || (u[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            u[8] || (u[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", wy, [
              u[7] || (u[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: u[1] || (u[1] = (p) => d.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), r("div", _y, [
          u[9] || (u[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", by, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), $y = /* @__PURE__ */ we(ky, [["__scopeId", "data-v-5efaae58"]]), Cy = {
  key: 0,
  class: "loading-state"
}, xy = {
  key: 1,
  class: "wizard-content"
}, Sy = {
  key: 0,
  class: "step-content"
}, Iy = { class: "analysis-summary" }, Ey = { class: "analysis-header" }, Ty = { class: "summary-description" }, Py = { class: "stats-grid" }, Ry = { class: "stat-card" }, My = { class: "stat-items" }, Dy = {
  key: 0,
  class: "stat-item success"
}, Ly = { class: "stat-count" }, Oy = {
  key: 1,
  class: "stat-item info"
}, Ay = { class: "stat-count" }, Ny = {
  key: 2,
  class: "stat-item warning"
}, Uy = { class: "stat-count" }, zy = {
  key: 3,
  class: "stat-item error"
}, Fy = { class: "stat-count" }, By = { class: "stat-card" }, Vy = { class: "stat-items" }, Wy = { class: "stat-item success" }, Gy = { class: "stat-count" }, jy = {
  key: 0,
  class: "stat-item info"
}, Hy = { class: "stat-count" }, Ky = {
  key: 1,
  class: "stat-item warning"
}, qy = { class: "stat-count" }, Yy = {
  key: 2,
  class: "stat-item warning"
}, Jy = { class: "stat-count" }, Xy = {
  key: 3,
  class: "stat-item error"
}, Qy = { class: "stat-count" }, Zy = {
  key: 0,
  class: "status-message warning"
}, e1 = { class: "status-text" }, t1 = {
  key: 1,
  class: "status-message info"
}, s1 = { class: "status-text" }, o1 = {
  key: 2,
  class: "status-message info"
}, n1 = { class: "status-text" }, a1 = {
  key: 3,
  class: "status-message warning"
}, l1 = { class: "status-text" }, i1 = {
  key: 4,
  class: "status-message success"
}, r1 = {
  key: 5,
  class: "category-mismatch-section"
}, c1 = { class: "mismatch-list" }, d1 = { class: "mismatch-path" }, u1 = { class: "mismatch-target" }, f1 = {
  key: 3,
  class: "step-content"
}, m1 = { class: "review-summary" }, v1 = { class: "review-stats" }, p1 = { class: "review-stat" }, g1 = { class: "stat-value" }, h1 = { class: "review-stat" }, y1 = { class: "stat-value" }, w1 = { class: "review-stat" }, _1 = { class: "stat-value" }, b1 = { class: "review-stat" }, k1 = { class: "stat-value" }, $1 = {
  key: 0,
  class: "review-section"
}, C1 = { class: "section-title" }, x1 = { class: "review-items" }, S1 = { class: "item-name" }, I1 = { class: "item-choice" }, E1 = {
  key: 0,
  class: "choice-badge install"
}, T1 = {
  key: 1,
  class: "choice-badge skip"
}, P1 = {
  key: 1,
  class: "review-section"
}, R1 = { class: "section-title" }, M1 = { class: "review-items" }, D1 = { class: "item-name" }, L1 = { class: "item-choice" }, O1 = {
  key: 0,
  class: "choice-badge install"
}, A1 = {
  key: 1,
  class: "choice-badge optional"
}, N1 = {
  key: 2,
  class: "choice-badge skip"
}, U1 = {
  key: 1,
  class: "choice-badge pending"
}, z1 = {
  key: 2,
  class: "review-section"
}, F1 = { class: "section-title" }, B1 = { class: "review-items download-details" }, V1 = { class: "download-info" }, W1 = { class: "item-name" }, G1 = { class: "download-meta" }, j1 = { class: "download-path" }, H1 = ["title"], K1 = {
  key: 3,
  class: "review-section"
}, q1 = { class: "section-title" }, Y1 = { class: "review-items" }, J1 = { class: "item-name" }, X1 = { class: "item-choice" }, Q1 = {
  key: 0,
  class: "choice-badge install"
}, Z1 = {
  key: 1,
  class: "choice-badge download"
}, e0 = {
  key: 2,
  class: "choice-badge optional"
}, t0 = {
  key: 3,
  class: "choice-badge skip"
}, s0 = {
  key: 4,
  class: "choice-badge skip"
}, o0 = {
  key: 1,
  class: "choice-badge download"
}, n0 = {
  key: 2,
  class: "choice-badge pending"
}, a0 = {
  key: 4,
  class: "no-choices"
}, l0 = /* @__PURE__ */ he({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: d, progress: u, resetProgress: m } = Cr(), { loadPendingDownloads: v } = ko(), { openFileLocation: g } = nt(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), D = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Set()), W = N(() => {
      const B = [
        { id: "analysis", label: "Analysis" }
      ];
      return (z.value || M.value) && B.push({ id: "nodes", label: "Nodes" }), I.value && B.push({ id: "models", label: "Models" }), B.push({ id: "review", label: "Review" }), $.value === "applying" && B.push({ id: "applying", label: "Applying" }), B;
    }), V = N(() => w.value ? w.value.stats.needs_user_input : !1), z = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = N(() => w.value ? w.value.stats.download_intents > 0 : !1), M = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ae = N(() => w.value ? w.value.nodes.resolved.length : 0), J = N(() => w.value ? w.value.models.resolved.filter((B) => B.has_category_mismatch) : []), G = N(() => J.value.length > 0), se = N(() => z.value || M.value ? "nodes" : I.value ? "models" : "review"), Q = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((de) => !de.is_installed), U = /* @__PURE__ */ new Set();
      return B.filter((de) => U.has(de.package.package_id) ? !1 : (U.add(de.package.package_id), !0));
    }), A = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((de) => !de.is_installed), U = /* @__PURE__ */ new Map();
      for (const de of B) {
        const Ve = U.get(de.package.package_id);
        Ve ? Ve.node_types_count++ : U.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), H = N(() => Q.value.filter((B) => !x.value.has(B.package.package_id))), L = N(() => w.value ? w.value.models.resolved.filter(
      (B) => B.match_type === "download_intent" || B.match_type === "property_download_intent"
    ).map((B) => ({
      filename: B.reference.widget_value,
      reference: B.reference,
      is_download_intent: !0,
      resolved_model: B.model,
      download_source: B.download_source,
      target_path: B.target_path
    })) : []), ne = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), U = w.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...B, ...U];
    }), fe = N(() => {
      if (!w.value) return [];
      const B = w.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), U = w.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...B, ...U];
    }), De = N(() => {
      const B = fe.value, U = L.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...B, ...U];
    }), Fe = N(() => L.value.filter((B) => {
      const U = E.value.get(B.filename);
      return U ? U.action === "download" : !0;
    }).map((B) => ({
      filename: B.filename,
      url: B.download_source,
      target_path: B.target_path
    })));
    function ce(B, U = 50) {
      return B.length <= U ? B : B.slice(0, U - 3) + "...";
    }
    const Se = N(() => {
      let B = H.value.length;
      for (const U of D.value.values())
        U.action === "install" && B++;
      for (const U of E.value.values())
        U.action === "select" && B++;
      return B;
    }), _e = N(() => {
      let B = 0;
      for (const U of E.value.values())
        U.action === "download" && B++;
      for (const U of L.value)
        E.value.get(U.filename) || B++;
      return B;
    }), ye = N(() => {
      let B = 0;
      for (const U of D.value.values())
        U.action === "optional" && B++;
      for (const U of E.value.values())
        U.action === "optional" && B++;
      return B;
    }), Ce = N(() => {
      let B = x.value.size;
      for (const U of D.value.values())
        U.action === "skip" && B++;
      for (const U of E.value.values())
        U.action === "skip" && B++;
      for (const U of ne.value)
        D.value.has(U.node_type) || B++;
      for (const U of fe.value)
        E.value.has(U.filename) || B++;
      return B;
    }), me = N(() => {
      const B = {};
      if (B.analysis = { resolved: 1, total: 1 }, z.value) {
        const U = ne.value.length, de = ne.value.filter(
          (Ve) => D.value.has(Ve.node_type)
        ).length;
        B.nodes = { resolved: de, total: U };
      }
      if (I.value) {
        const U = De.value.length, de = De.value.filter(
          (Ve) => E.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        B.models = { resolved: de, total: U };
      }
      if (B.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const U = u.totalFiles || 1, de = u.completedFiles.length;
        B.applying = { resolved: de, total: U };
      }
      return B;
    });
    function ue(B) {
      $.value = B;
    }
    function Me() {
      const B = W.value.findIndex((U) => U.id === $.value);
      B > 0 && ($.value = W.value[B - 1].id);
    }
    function Re() {
      const B = W.value.findIndex((U) => U.id === $.value);
      B < W.value.length - 1 && ($.value = W.value[B + 1].id);
    }
    async function O() {
      p.value = !0, S.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (B) {
        S.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function F() {
      P.value.includes("analysis") || P.value.push("analysis"), z.value || M.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function te(B) {
      D.value.set(B, { action: "optional" });
    }
    function ie(B) {
      D.value.set(B, { action: "skip" });
    }
    function pe(B, U) {
      var Ve;
      const de = ne.value.find((Xe) => Xe.node_type === B);
      (Ve = de == null ? void 0 : de.options) != null && Ve[U] && D.value.set(B, {
        action: "install",
        package_id: de.options[U].package_id
      });
    }
    function ge(B, U) {
      D.value.set(B, {
        action: "install",
        package_id: U
      });
    }
    function Ie(B) {
      D.value.delete(B);
    }
    function Ee(B) {
      x.value.has(B) ? x.value.delete(B) : x.value.add(B);
    }
    function le(B) {
      E.value.set(B, { action: "optional" });
    }
    function ve(B) {
      E.value.set(B, { action: "skip" });
    }
    function Ne(B, U) {
      var Ve;
      const de = fe.value.find((Xe) => Xe.filename === B);
      (Ve = de == null ? void 0 : de.options) != null && Ve[U] && E.value.set(B, {
        action: "select",
        selected_model: de.options[U].model
      });
    }
    function Te(B, U, de) {
      E.value.set(B, {
        action: "download",
        url: U,
        target_path: de
      });
    }
    function ee(B) {
      E.value.delete(B);
    }
    async function q(B) {
      try {
        await g(B);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function Oe() {
      var B;
      _.value = !0, S.value = null, m(), u.phase = "resolving", $.value = "applying";
      try {
        const U = await i(o.workflowName, D.value, E.value, x.value);
        U.models_to_download && U.models_to_download.length > 0 && d(o.workflowName, U.models_to_download);
        const de = [
          ...U.nodes_to_install || [],
          ...H.value.map((Xe) => Xe.package.package_id)
        ];
        u.nodesToInstall = [...new Set(de)], u.nodesToInstall.length > 0 && await c(o.workflowName), u.phase = "complete", await v();
        const Ve = u.installError || ((B = u.nodeInstallProgress) == null ? void 0 : B.completedNodes.some((Xe) => !Xe.success));
        !u.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to apply resolution", u.error = S.value, u.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function $e() {
      n("refresh"), n("restart"), n("close");
    }
    async function ke() {
      var U;
      const B = ((U = u.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (B.length !== 0) {
        u.phase = "installing", u.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: B.length
        }, u.nodesToInstall = B, u.nodesInstalled = [], u.installError = void 0;
        try {
          await c(o.workflowName), u.phase = "complete";
        } catch (de) {
          u.error = de instanceof Error ? de.message : "Retry failed", u.phase = "error";
        }
      }
    }
    return Ze(O), (B, U) => (a(), R(vt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (de) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", Cy, [...U[2] || (U[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", xy, [
          C(Mp, {
            steps: W.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": me.value,
            onStepChange: ue
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", Sy, [
            t("div", Iy, [
              t("div", Ey, [
                U[3] || (U[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Ty, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Py, [
                t("div", Ry, [
                  U[12] || (U[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", My, [
                    ae.value > 0 ? (a(), r("div", Dy, [
                      U[4] || (U[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ly, f(ae.value), 1),
                      U[5] || (U[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Oy, [
                      U[6] || (U[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ay, f(w.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", Ny, [
                      U[8] || (U[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Uy, f(w.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", zy, [
                      U[10] || (U[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Fy, f(w.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", By, [
                  U[23] || (U[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Vy, [
                    t("div", Wy, [
                      U[13] || (U[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Gy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      U[14] || (U[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", jy, [
                      U[15] || (U[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Hy, f(w.value.stats.download_intents), 1),
                      U[16] || (U[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    G.value ? (a(), r("div", Ky, [
                      U[17] || (U[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", qy, f(J.value.length), 1),
                      U[18] || (U[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Yy, [
                      U[19] || (U[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Jy, f(w.value.models.ambiguous.length), 1),
                      U[20] || (U[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Xy, [
                      U[21] || (U[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Qy, f(w.value.models.unresolved.length), 1),
                      U[22] || (U[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (a(), r("div", Zy, [
                U[24] || (U[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", e1, f(ne.value.length + fe.value.length) + " items need your input", 1)
              ])) : M.value ? (a(), r("div", t1, [
                U[25] || (U[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", s1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), r("div", o1, [
                U[26] || (U[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", n1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : G.value ? (a(), r("div", a1, [
                U[27] || (U[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", l1, f(J.value.length) + " model" + f(J.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", i1, [...U[28] || (U[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              G.value ? (a(), r("div", r1, [
                U[31] || (U[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", c1, [
                  (a(!0), r(j, null, be(J.value, (de) => {
                    var Ve, Xe;
                    return a(), r("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", d1, f(de.actual_category) + "/" + f((Ve = de.model) == null ? void 0 : Ve.filename), 1),
                      U[30] || (U[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", u1, f((Xe = de.expected_categories) == null ? void 0 : Xe[0]) + "/", 1),
                      de.file_path ? (a(), R(Le, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (mt) => q(de.file_path)
                      }, {
                        default: h(() => [...U[29] || (U[29] = [
                          b(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "nodes" ? (a(), R(Zg, {
            key: 1,
            nodes: ne.value,
            "node-choices": D.value,
            "auto-resolved-packages": A.value,
            "skipped-packages": x.value,
            onMarkOptional: te,
            onSkip: ie,
            onOptionSelected: pe,
            onManualEntry: ge,
            onClearChoice: Ie,
            onPackageSkip: Ee
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), R(Hh, {
            key: 2,
            models: De.value,
            "model-choices": E.value,
            onMarkOptional: le,
            onSkip: ve,
            onOptionSelected: Ne,
            onDownloadUrl: Te,
            onClearChoice: ee
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", f1, [
            t("div", m1, [
              U[37] || (U[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", v1, [
                t("div", p1, [
                  t("span", g1, f(Se.value), 1),
                  U[32] || (U[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", h1, [
                  t("span", y1, f(_e.value), 1),
                  U[33] || (U[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", w1, [
                  t("span", _1, f(ye.value), 1),
                  U[34] || (U[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", b1, [
                  t("span", k1, f(Ce.value), 1),
                  U[35] || (U[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (a(), r("div", $1, [
                t("h4", C1, "Node Packages (" + f(A.value.length) + ")", 1),
                t("div", x1, [
                  (a(!0), r(j, null, be(A.value, (de) => (a(), r("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    t("code", S1, f(de.package_id), 1),
                    t("div", I1, [
                      x.value.has(de.package_id) ? (a(), r("span", T1, "Skipped")) : (a(), r("span", E1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ne.value.length > 0 ? (a(), r("div", P1, [
                t("h4", R1, "Node Choices (" + f(ne.value.length) + ")", 1),
                t("div", M1, [
                  (a(!0), r(j, null, be(ne.value, (de) => {
                    var Ve, Xe, mt, at;
                    return a(), r("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      t("code", D1, f(de.node_type), 1),
                      t("div", L1, [
                        D.value.has(de.node_type) ? (a(), r(j, { key: 0 }, [
                          ((Ve = D.value.get(de.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", O1, f((Xe = D.value.get(de.node_type)) == null ? void 0 : Xe.package_id), 1)) : ((mt = D.value.get(de.node_type)) == null ? void 0 : mt.action) === "optional" ? (a(), r("span", A1, " Optional ")) : ((at = D.value.get(de.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), r("span", N1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", U1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Fe.value.length > 0 ? (a(), r("div", z1, [
                t("h4", F1, "Models to Download (" + f(Fe.value.length) + ")", 1),
                t("div", B1, [
                  (a(!0), r(j, null, be(Fe.value, (de) => (a(), r("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", V1, [
                      t("code", W1, f(de.filename), 1),
                      t("div", G1, [
                        t("span", j1, "→ " + f(de.target_path), 1),
                        de.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, f(ce(de.url)), 9, H1)) : y("", !0)
                      ])
                    ]),
                    U[36] || (U[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              De.value.length > 0 ? (a(), r("div", K1, [
                t("h4", q1, "Models (" + f(De.value.length) + ")", 1),
                t("div", Y1, [
                  (a(!0), r(j, null, be(De.value, (de) => {
                    var Ve, Xe, mt, at, dt, Rt, zt;
                    return a(), r("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      t("code", J1, f(de.filename), 1),
                      t("div", X1, [
                        E.value.has(de.filename) ? (a(), r(j, { key: 0 }, [
                          ((Ve = E.value.get(de.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", Q1, f((mt = (Xe = E.value.get(de.filename)) == null ? void 0 : Xe.selected_model) == null ? void 0 : mt.filename), 1)) : ((at = E.value.get(de.filename)) == null ? void 0 : at.action) === "download" ? (a(), r("span", Z1, " Download ")) : ((dt = E.value.get(de.filename)) == null ? void 0 : dt.action) === "optional" ? (a(), r("span", e0, " Optional ")) : ((Rt = E.value.get(de.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), r("span", t0, " Skip ")) : ((zt = E.value.get(de.filename)) == null ? void 0 : zt.action) === "cancel_download" ? (a(), r("span", s0, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (a(), r("span", o0, " Pending Download ")) : (a(), r("span", n0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Q.value.length === 0 && ne.value.length === 0 && De.value.length === 0 ? (a(), r("div", a0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), R($y, {
            key: 4,
            progress: We(u),
            onRestart: $e,
            onRetryFailed: ke
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Me
        }, {
          default: h(() => [...U[38] || (U[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        U[41] || (U[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || We(u).phase === "complete" || We(u).phase === "error" ? (a(), R(Le, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (de) => n("close"))
        }, {
          default: h(() => [
            b(f(We(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), R(Le, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: F
        }, {
          default: h(() => [
            b(f(se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), R(Le, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [
            b(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), R(Le, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [...U[39] || (U[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), R(Le, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Oe
        }, {
          default: h(() => [...U[40] || (U[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), i0 = /* @__PURE__ */ we(l0, [["__scopeId", "data-v-40d8d5a8"]]), r0 = { class: "search-input-wrapper" }, c0 = ["value", "placeholder"], d0 = /* @__PURE__ */ he({
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
    const o = e, n = s, l = k(null);
    let i;
    function c(u) {
      const m = u.target.value;
      o.debounce > 0 ? (clearTimeout(i), i = window.setTimeout(() => {
        n("update:modelValue", m);
      }, o.debounce)) : n("update:modelValue", m);
    }
    function d() {
      var u;
      n("update:modelValue", ""), n("clear"), (u = l.value) == null || u.focus();
    }
    return Ze(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (u, m) => (a(), r("div", r0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Zt(d, ["escape"])
      }, null, 40, c0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: d,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), u0 = /* @__PURE__ */ we(d0, [["__scopeId", "data-v-266f857a"]]), f0 = { class: "search-bar" }, m0 = /* @__PURE__ */ he({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", f0, [
      C(u0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ we(m0, [["__scopeId", "data-v-3d51bbfd"]]), v0 = { class: "section-group" }, p0 = {
  key: 0,
  class: "section-content"
}, g0 = /* @__PURE__ */ he({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.initiallyExpanded);
    function i() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, d) => (a(), r("section", v0, [
      C(At, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: h(() => [
          b(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), r("div", p0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ we(g0, [["__scopeId", "data-v-c48e33ed"]]), h0 = { class: "item-header" }, y0 = {
  key: 0,
  class: "item-icon"
}, w0 = { class: "item-info" }, _0 = {
  key: 0,
  class: "item-title"
}, b0 = {
  key: 1,
  class: "item-subtitle"
}, k0 = {
  key: 0,
  class: "item-details"
}, $0 = {
  key: 1,
  class: "item-actions"
}, C0 = /* @__PURE__ */ he({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = N(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), r("div", {
      class: Pe(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", h0, [
        l.$slots.icon ? (a(), r("span", y0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", w0, [
          l.$slots.title ? (a(), r("div", _0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", b0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", k0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", $0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ we(C0, [["__scopeId", "data-v-cc435e0e"]]), x0 = { class: "loading-state" }, S0 = { class: "loading-message" }, I0 = /* @__PURE__ */ he({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", x0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", S0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ we(I0, [["__scopeId", "data-v-ad8436c9"]]), E0 = { class: "error-state" }, T0 = { class: "error-message" }, P0 = /* @__PURE__ */ he({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", E0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", T0, f(e.message), 1),
      e.retry ? (a(), R(re, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Rs = /* @__PURE__ */ we(P0, [["__scopeId", "data-v-5397be48"]]), R0 = /* @__PURE__ */ he({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = nt(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = N(
      () => i.value.filter((A) => A.status === "broken")
    ), S = N(
      () => i.value.filter((A) => A.status === "new")
    ), $ = N(
      () => i.value.filter((A) => A.status === "modified")
    ), P = N(
      () => i.value.filter((A) => A.status === "synced")
    ), D = N(() => {
      if (!u.value.trim()) return i.value;
      const A = u.value.toLowerCase();
      return i.value.filter((H) => H.name.toLowerCase().includes(A));
    }), E = N(
      () => _.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), x = N(
      () => S.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), W = N(
      () => $.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), V = N(
      () => P.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), z = N(
      () => v.value ? V.value : V.value.slice(0, 5)
    );
    async function I(A = !1) {
      c.value = !0, d.value = null;
      try {
        i.value = await l(A);
      } catch (H) {
        d.value = H instanceof Error ? H.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function T(A) {
      p.value = A, g.value = !0;
    }
    function M(A) {
      p.value = A, w.value = !0;
    }
    function ae() {
      n("refresh");
    }
    async function J() {
      w.value = !1, await I(!0);
    }
    async function G() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function se(A) {
      const H = [];
      return A.missing_nodes > 0 && H.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && H.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && H.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && H.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), H.length > 0 ? H.join(", ") : "Has issues";
    }
    function Q(A) {
      const H = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state;
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync` : H || "Unknown";
    }
    return Ze(I), (A, H) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          C($o, {
            modelValue: u.value,
            "onUpdate:modelValue": H[0] || (H[0] = (L) => u.value = L),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : d.value ? (a(), R(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            E.value.length ? (a(), R(lt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(E.value, (L) => (a(), R(Et, {
                  key: L.name,
                  status: "broken"
                }, {
                  icon: h(() => [...H[7] || (H[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(se(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => M(L.name)
                    }, {
                      default: h(() => [...H[8] || (H[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => T(L.name)
                    }, {
                      default: h(() => [...H[9] || (H[9] = [
                        b(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            x.value.length ? (a(), R(lt, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(x.value, (L) => (a(), R(Et, {
                  key: L.name,
                  status: L.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(f(L.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Q(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => T(L.name)
                    }, {
                      default: h(() => [...H[10] || (H[10] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            W.value.length ? (a(), R(lt, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(W.value, (L) => (a(), R(Et, {
                  key: L.name,
                  status: L.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...H[11] || (H[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Q(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => T(L.name)
                    }, {
                      default: h(() => [...H[12] || (H[12] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            V.value.length ? (a(), R(lt, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: H[2] || (H[2] = (L) => m.value = L)
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(z.value, (L) => (a(), R(Et, {
                  key: L.name,
                  status: L.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(f(L.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Q(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => T(L.name)
                    }, {
                      default: h(() => [...H[13] || (H[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && V.value.length > 5 ? (a(), R(re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: H[1] || (H[1] = (L) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            D.value.length ? y("", !0) : (a(), R(ns, {
              key: 4,
              icon: "📭",
              message: u.value ? `No workflows match '${u.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), R(_p, {
        key: 0,
        "workflow-name": p.value,
        onClose: H[3] || (H[3] = (L) => g.value = !1),
        onResolve: H[4] || (H[4] = (L) => M(p.value)),
        onRefresh: H[5] || (H[5] = (L) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(i0, {
        key: 1,
        "workflow-name": p.value,
        onClose: J,
        onInstall: ae,
        onRefresh: H[6] || (H[6] = (L) => n("refresh")),
        onRestart: G
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), M0 = /* @__PURE__ */ we(R0, [["__scopeId", "data-v-fa3f076e"]]), D0 = /* @__PURE__ */ he({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Pe(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ we(D0, [["__scopeId", "data-v-ccb7816e"]]), L0 = {
  key: 0,
  class: "model-details"
}, O0 = { class: "detail-section" }, A0 = { class: "detail-row" }, N0 = { class: "detail-value mono" }, U0 = { class: "detail-row" }, z0 = { class: "detail-value mono" }, F0 = { class: "detail-row" }, B0 = { class: "detail-value mono" }, V0 = { class: "detail-row" }, W0 = { class: "detail-value" }, G0 = { class: "detail-row" }, j0 = { class: "detail-value" }, H0 = { class: "detail-row" }, K0 = { class: "detail-value" }, q0 = { class: "detail-section" }, Y0 = { class: "section-header" }, J0 = {
  key: 0,
  class: "locations-list"
}, X0 = { class: "location-path mono" }, Q0 = {
  key: 0,
  class: "location-modified"
}, Z0 = ["onClick"], ew = {
  key: 1,
  class: "empty-state"
}, tw = { class: "detail-section" }, sw = { class: "section-header" }, ow = {
  key: 0,
  class: "sources-list"
}, nw = { class: "source-type" }, aw = ["href"], lw = ["disabled", "onClick"], iw = {
  key: 1,
  class: "empty-state"
}, rw = { class: "add-source-form" }, cw = ["disabled"], dw = {
  key: 2,
  class: "source-error"
}, uw = {
  key: 3,
  class: "source-success"
}, fw = /* @__PURE__ */ he({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = nt(), d = k(null), u = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
    let $ = null;
    function P(I, T = "success", M = 2e3) {
      $ && clearTimeout($), S.value = { message: I, type: T }, $ = setTimeout(() => {
        S.value = null;
      }, M);
    }
    function D(I) {
      if (!I) return "Unknown";
      const T = 1024 * 1024 * 1024, M = 1024 * 1024;
      return I >= T ? `${(I / T).toFixed(1)} GB` : I >= M ? `${(I / M).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function E(I) {
      navigator.clipboard.writeText(I), P("Copied to clipboard!");
    }
    async function x(I) {
      try {
        await c(I), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!v.value.trim() || !d.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(d.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await z();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function V(I) {
      if (d.value) {
        w.value = I, p.value = null, _.value = null;
        try {
          await i(d.value.hash, I), P("Source removed"), await z();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function z() {
      u.value = !0, m.value = null;
      try {
        d.value = await n(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        u.value = !1;
      }
    }
    return Ze(z), (I, T) => {
      var M;
      return a(), r(j, null, [
        C(vt, {
          title: `Model Details: ${((M = d.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: u.value,
          error: m.value,
          onClose: T[5] || (T[5] = (ae) => I.$emit("close"))
        }, {
          body: h(() => {
            var ae, J, G, se;
            return [
              d.value ? (a(), r("div", L0, [
                t("section", O0, [
                  t("div", A0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", N0, f(d.value.hash || "Not computed"), 1),
                    d.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Q) => E(d.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", U0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", z0, f(d.value.blake3 || "Not computed"), 1),
                    d.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Q) => E(d.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", F0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", B0, f(d.value.sha256 || "Not computed"), 1),
                    d.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Q) => E(d.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", V0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", W0, f(D(d.value.size)), 1)
                  ]),
                  t("div", G0, [
                    T[10] || (T[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", j0, f(d.value.category), 1)
                  ]),
                  t("div", H0, [
                    T[11] || (T[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", K0, f(d.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", q0, [
                  t("h4", Y0, "Locations (" + f(((ae = d.value.locations) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (J = d.value.locations) != null && J.length ? (a(), r("div", J0, [
                    (a(!0), r(j, null, be(d.value.locations, (Q, A) => (a(), r("div", {
                      key: A,
                      class: "location-item"
                    }, [
                      t("span", X0, f(Q.path), 1),
                      Q.modified ? (a(), r("span", Q0, "Modified: " + f(Q.modified), 1)) : y("", !0),
                      Q.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (H) => x(Q.path)
                      }, " Open File Location ", 8, Z0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", ew, "No locations found"))
                ]),
                t("section", tw, [
                  t("h4", sw, "Download Sources (" + f(((G = d.value.sources) == null ? void 0 : G.length) || 0) + ")", 1),
                  (se = d.value.sources) != null && se.length ? (a(), r("div", ow, [
                    (a(!0), r(j, null, be(d.value.sources, (Q, A) => (a(), r("div", {
                      key: A,
                      class: "source-item"
                    }, [
                      t("span", nw, f(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Q.url), 9, aw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Q.url,
                        onClick: (H) => V(Q.url)
                      }, f(w.value === Q.url ? "..." : "×"), 9, lw)
                    ]))), 128))
                  ])) : (a(), r("div", iw, " No download sources configured ")),
                  t("div", rw, [
                    qe(t("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (Q) => v.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Ut, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: W
                    }, f(g.value ? "Adding..." : "Add Source"), 9, cw)
                  ]),
                  p.value ? (a(), r("p", dw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", uw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (ae) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), R(yt, { to: "body" }, [
          S.value ? (a(), r("div", {
            key: 0,
            class: Pe(["toast", S.value.type])
          }, f(S.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), sl = /* @__PURE__ */ we(fw, [["__scopeId", "data-v-f15cbb56"]]), mw = /* @__PURE__ */ he({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = nt(), i = k([]), c = k([]), d = k("production"), u = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = N(
      () => i.value.reduce((z, I) => z + (I.size || 0), 0)
    ), S = N(() => {
      if (!v.value.trim()) return i.value;
      const z = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(z));
    }), $ = N(() => {
      if (!v.value.trim()) return c.value;
      const z = v.value.toLowerCase();
      return c.value.filter((I) => I.filename.toLowerCase().includes(z));
    }), P = N(() => {
      const z = {};
      for (const T of S.value) {
        const M = T.type || "other";
        z[M] || (z[M] = []), z[M].push(T);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([T], [M]) => {
        const ae = I.indexOf(T), J = I.indexOf(M);
        return ae >= 0 && J >= 0 ? ae - J : ae >= 0 ? -1 : J >= 0 ? 1 : T.localeCompare(M);
      }).map(([T, M]) => ({ type: T, models: M }));
    });
    function D(z) {
      if (!z) return "Unknown";
      const I = z / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function E(z) {
      w.value = z.hash || z.filename;
    }
    function x(z) {
      o("navigate", "model-index");
    }
    function W(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function V() {
      u.value = !0, m.value = null;
      try {
        const z = await n();
        i.value = z, c.value = [];
        const I = await l();
        d.value = I.environment || "production";
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return Ze(V), (z, I) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (T) => g.value = !0)
          })
        ]),
        search: h(() => [
          C($o, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => v.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), R(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(D(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, be(P.value, (T) => (a(), R(lt, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(T.models, (M) => (a(), R(Et, {
                  key: M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...I[4] || (I[4] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(M.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(D(M.size)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ut, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => E(M)
                    }, {
                      default: h(() => [...I[5] || (I[5] = [
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
            $.value.length ? (a(), R(lt, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, be($.value, (T) => (a(), R(Et, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...I[6] || (I[6] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(T.filename), 1)
                  ]),
                  subtitle: h(() => [...I[7] || (I[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var M;
                    return [
                      C(ut, {
                        label: "Required by:",
                        value: ((M = T.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => W(T.filename)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => x(T.filename)
                    }, {
                      default: h(() => [...I[9] || (I[9] = [
                        b(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !S.value.length && !$.value.length ? (a(), R(ns, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: g.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (T) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            I[10] || (I[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(d.value) + '"', 1),
            I[11] || (I[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...I[12] || (I[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(sl, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), vw = /* @__PURE__ */ we(mw, [["__scopeId", "data-v-cb4f12b3"]]), pw = {
  key: 0,
  class: "indexing-progress"
}, gw = { class: "progress-info" }, hw = { class: "progress-label" }, yw = { class: "progress-count" }, ww = { class: "progress-bar" }, _w = { class: "modal-content" }, bw = { class: "modal-header" }, kw = { class: "modal-body" }, $w = { class: "input-group" }, Cw = { class: "current-path" }, xw = { class: "input-group" }, Sw = { class: "modal-footer" }, Iw = { class: "modal-content" }, Ew = { class: "modal-header" }, Tw = { class: "modal-body" }, Pw = { class: "input-group" }, Rw = { class: "input-group" }, Mw = { class: "modal-footer" }, Dw = /* @__PURE__ */ he({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = nt(), { addToQueue: c } = ko(), d = s, u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), D = k(!1), E = k(!1), x = k(""), W = k(""), V = k(null), z = N(
      () => u.value.reduce((H, L) => H + (L.size || 0), 0)
    ), I = N(() => {
      if (!w.value.trim()) return u.value;
      const H = w.value.toLowerCase();
      return u.value.filter((L) => {
        const ne = L, fe = L.sha256 || ne.sha256_hash || "";
        return L.filename.toLowerCase().includes(H) || fe.toLowerCase().includes(H);
      });
    }), T = N(() => {
      const H = {};
      for (const ne of I.value) {
        const fe = ne.type || "other";
        H[fe] || (H[fe] = []), H[fe].push(ne);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(H).sort(([ne], [fe]) => {
        const De = L.indexOf(ne), Fe = L.indexOf(fe);
        return De >= 0 && Fe >= 0 ? De - Fe : De >= 0 ? -1 : Fe >= 0 ? 1 : ne.localeCompare(fe);
      }).map(([ne, fe]) => ({ type: ne, models: fe }));
    });
    function M(H) {
      if (!H) return "Unknown";
      const L = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return H >= L ? `${(H / L).toFixed(1)} GB` : H >= ne ? `${(H / ne).toFixed(0)} MB` : `${(H / 1024).toFixed(0)} KB`;
    }
    function ae(H) {
      _.value = H.hash || H.filename;
    }
    async function J() {
      v.value = !0, g.value = null;
      try {
        const H = await n();
        await Q(), H.changes > 0 && console.log(`Scan complete: ${H.changes} changes detected`);
      } catch (H) {
        g.value = H instanceof Error ? H.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function G() {
      if (P.value.trim()) {
        D.value = !0, g.value = null;
        try {
          const H = await i(P.value.trim());
          $.value = H.path, S.value = !1, P.value = "", await Q(), console.log(`Directory changed: ${H.models_indexed} models indexed`), d("refresh");
        } catch (H) {
          g.value = H instanceof Error ? H.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function se() {
      if (!x.value.trim() || !W.value.trim()) return;
      const H = W.value.split("/").pop() || "model.safetensors";
      c([{
        workflow: "__manual__",
        filename: H,
        url: x.value.trim(),
        targetPath: W.value.trim()
      }]), x.value = "", W.value = "", E.value = !1;
    }
    async function Q() {
      m.value = !0, g.value = null;
      try {
        u.value = await o();
      } catch (H) {
        g.value = H instanceof Error ? H.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function A() {
      try {
        const H = await l();
        $.value = H.path;
      } catch {
      }
    }
    return Ze(() => {
      Q(), A();
    }), (H, L) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: L[2] || (L[2] = (ne) => p.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: J
              }, {
                default: h(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (ne) => S.value = !0)
              }, {
                default: h(() => [...L[15] || (L[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: L[1] || (L[1] = (ne) => E.value = !0)
              }, {
                default: h(() => [...L[16] || (L[16] = [
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
        search: h(() => [
          V.value ? (a(), r("div", pw, [
            t("div", gw, [
              t("span", hw, f(V.value.message), 1),
              t("span", yw, f(V.value.current) + "/" + f(V.value.total), 1)
            ]),
            t("div", ww, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C($o, {
            modelValue: w.value,
            "onUpdate:modelValue": L[3] || (L[3] = (ne) => w.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || V.value ? (a(), R(Ps, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (a(), R(Rs, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: Q
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(u.value.length) + " models • " + f(M(z.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, be(T.value, (ne) => (a(), R(lt, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(ne.models, (fe) => (a(), R(Et, {
                  key: fe.sha256 || fe.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...L[17] || (L[17] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(fe.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(M(fe.size)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Hash:",
                      value: fe.hash ? fe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (De) => ae(fe)
                    }, {
                      default: h(() => [...L[18] || (L[18] = [
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
            I.value.length ? y("", !0) : (a(), R(ns, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: L[4] || (L[4] = (ne) => p.value = !1)
      }, {
        content: h(() => [...L[19] || (L[19] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), R(sl, {
        key: 0,
        identifier: _.value,
        onClose: L[5] || (L[5] = (ne) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(yt, { to: "body" }, [
        S.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: L[9] || (L[9] = it((ne) => S.value = !1, ["self"]))
        }, [
          t("div", _w, [
            t("div", bw, [
              L[20] || (L[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: L[6] || (L[6] = (ne) => S.value = !1)
              }, "✕")
            ]),
            t("div", kw, [
              t("div", $w, [
                L[21] || (L[21] = t("label", null, "Current Directory", -1)),
                t("code", Cw, f($.value || "Not set"), 1)
              ]),
              t("div", xw, [
                L[22] || (L[22] = t("label", null, "New Directory Path", -1)),
                C(es, {
                  modelValue: P.value,
                  "onUpdate:modelValue": L[7] || (L[7] = (ne) => P.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              L[23] || (L[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Sw, [
              C(Le, {
                variant: "secondary",
                onClick: L[8] || (L[8] = (ne) => S.value = !1)
              }, {
                default: h(() => [...L[24] || (L[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Le, {
                variant: "primary",
                disabled: !P.value.trim() || D.value,
                loading: D.value,
                onClick: G
              }, {
                default: h(() => [
                  b(f(D.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), R(yt, { to: "body" }, [
        E.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: L[14] || (L[14] = it((ne) => E.value = !1, ["self"]))
        }, [
          t("div", Iw, [
            t("div", Ew, [
              L[25] || (L[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: L[10] || (L[10] = (ne) => E.value = !1)
              }, "✕")
            ]),
            t("div", Tw, [
              t("div", Pw, [
                L[26] || (L[26] = t("label", null, "Download URL", -1)),
                C(es, {
                  modelValue: x.value,
                  "onUpdate:modelValue": L[11] || (L[11] = (ne) => x.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Rw, [
                L[27] || (L[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(es, {
                  modelValue: W.value,
                  "onUpdate:modelValue": L[12] || (L[12] = (ne) => W.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              L[28] || (L[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Mw, [
              C(Le, {
                variant: "secondary",
                onClick: L[13] || (L[13] = (ne) => E.value = !1)
              }, {
                default: h(() => [...L[29] || (L[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Le, {
                variant: "primary",
                disabled: !x.value.trim() || !W.value.trim(),
                onClick: se
              }, {
                default: h(() => [...L[30] || (L[30] = [
                  b(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : y("", !0)
      ]))
    ], 64));
  }
}), Lw = /* @__PURE__ */ we(Dw, [["__scopeId", "data-v-73b78d84"]]), Ow = { class: "node-details" }, Aw = { class: "status-row" }, Nw = {
  key: 0,
  class: "detail-row"
}, Uw = { class: "value" }, zw = { class: "detail-row" }, Fw = { class: "value" }, Bw = {
  key: 1,
  class: "detail-row"
}, Vw = { class: "value mono" }, Ww = {
  key: 2,
  class: "detail-row"
}, Gw = ["href"], jw = {
  key: 3,
  class: "detail-row"
}, Hw = { class: "value mono small" }, Kw = { class: "detail-row" }, qw = {
  key: 0,
  class: "value"
}, Yw = {
  key: 1,
  class: "workflow-list"
}, Jw = /* @__PURE__ */ he({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = N(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (d, u) => (a(), R(vt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: u[1] || (u[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", Ow, [
          t("div", Aw, [
            u[2] || (u[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Pe(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Nw, [
            u[3] || (u[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Uw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", zw, [
            u[4] || (u[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Fw, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", Bw, [
            u[5] || (u[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Vw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", Ww, [
            u[7] || (u[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(f(e.node.repository) + " ", 1),
              u[6] || (u[6] = t("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                t("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Gw)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", jw, [
            u[8] || (u[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Hw, f(e.node.download_url), 1)
          ])) : y("", !0),
          u[10] || (u[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Kw, [
            u[9] || (u[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", qw, " Not used in any workflows ")) : (a(), r("div", Yw, [
              (a(!0), r(j, null, be(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        C(Le, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => n("close"))
        }, {
          default: h(() => [...u[11] || (u[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Xw = /* @__PURE__ */ we(Jw, [["__scopeId", "data-v-b342f626"]]), Qw = { class: "dialog-message" }, Zw = {
  key: 0,
  class: "dialog-details"
}, e_ = {
  key: 1,
  class: "dialog-warning"
}, t_ = /* @__PURE__ */ he({
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
    return (s, o) => (a(), R(vt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", Qw, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", Zw, [
          (a(!0), r(j, null, be(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", e_, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Le, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Le, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
        }, {
          default: h(() => [
            b(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ol = /* @__PURE__ */ we(t_, [["__scopeId", "data-v-3670b9f5"]]), s_ = { class: "mismatch-warning" }, o_ = { class: "version-mismatch" }, n_ = { class: "version-actual" }, a_ = { class: "version-expected" }, l_ = { key: 0 }, i_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, r_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, c_ = /* @__PURE__ */ he({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: d } = nt(), u = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), S = N(() => {
      if (!g.value.trim()) return u.value.nodes;
      const J = g.value.toLowerCase();
      return u.value.nodes.filter(
        (G) => {
          var se, Q;
          return G.name.toLowerCase().includes(J) || ((se = G.description) == null ? void 0 : se.toLowerCase().includes(J)) || ((Q = G.repository) == null ? void 0 : Q.toLowerCase().includes(J));
        }
      );
    }), $ = N(
      () => S.value.filter((J) => J.installed && J.tracked)
    ), P = N(
      () => S.value.filter((J) => !J.installed && J.tracked)
    ), D = N(
      () => S.value.filter((J) => J.installed && !J.tracked)
    );
    function E(J) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[J] || J;
    }
    const x = N(() => o.versionMismatches.length > 0);
    function W(J) {
      return !J.used_in_workflows || J.used_in_workflows.length === 0 ? "Not used in any workflows" : J.used_in_workflows.length === 1 ? J.used_in_workflows[0] : `${J.used_in_workflows.length} workflows`;
    }
    function V(J) {
      p.value = J;
    }
    function z() {
      n("open-node-manager");
    }
    function I(J) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${J}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const G = await i(J);
            G.status === "success" ? (n("toast", `✓ Node "${J}" tracked as development`, "success"), await ae()) : n("toast", `Failed to track node: ${G.message || "Unknown error"}`, "error");
          } catch (G) {
            n("toast", `Error tracking node: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function T(J) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${J}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const G = await d(J);
            G.status === "success" ? (n("toast", `✓ Node "${J}" removed`, "success"), await ae()) : n("toast", `Failed to remove node: ${G.message || "Unknown error"}`, "error");
          } catch (G) {
            n("toast", `Error removing node: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function M(J) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${J}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const G = await c(J);
            G.status === "success" ? (n("toast", `✓ Node "${J}" installed`, "success"), await ae()) : n("toast", `Failed to install node: ${G.message || "Unknown error"}`, "error");
          } catch (G) {
            n("toast", `Error installing node: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ae() {
      m.value = !0, v.value = null;
      try {
        u.value = await l();
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Ze(ae), (J, G) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (se) => w.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: h(() => [...G[7] || (G[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($o, {
            modelValue: g.value,
            "onUpdate:modelValue": G[1] || (G[1] = (se) => g.value = se),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), R(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.total_count ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(f(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (a(), r(j, { key: 0 }, [
                  b(" • " + f(u.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                u.value.untracked_count ? (a(), r(j, { key: 1 }, [
                  b(" • " + f(u.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            x.value ? (a(), R(lt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", s_, [
                  G[8] || (G[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(j, null, be(e.versionMismatches, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...G[9] || (G[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", o_, [
                      t("span", n_, f(se.actual), 1),
                      G[10] || (G[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", a_, f(se.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "warning",
                      size: "sm",
                      onClick: G[2] || (G[2] = (Q) => n("repair-environment"))
                    }, {
                      default: h(() => [...G[11] || (G[11] = [
                        b(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (a(), R(lt, {
              key: 2,
              title: "UNTRACKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(D.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...G[12] || (G[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...G[13] || (G[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: W(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => V(se)
                    }, {
                      default: h(() => [...G[14] || (G[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => I(se.name)
                    }, {
                      default: h(() => [...G[15] || (G[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Q) => T(se.name)
                    }, {
                      default: h(() => [...G[16] || (G[16] = [
                        b(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            $.value.length ? (a(), R(lt, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, be($.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(se.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [
                    se.version ? (a(), r("span", l_, f(se.source === "development" ? "" : "v") + f(se.version), 1)) : (a(), r("span", i_, "version unknown")),
                    t("span", r_, " • " + f(E(se.source)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: W(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => V(se)
                    }, {
                      default: h(() => [...G[17] || (G[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: z
                    }, {
                      default: h(() => [...G[18] || (G[18] = [
                        b(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (a(), R(lt, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(P.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "missing"
                }, {
                  icon: h(() => [...G[19] || (G[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...G[20] || (G[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    C(ut, {
                      label: "Required by:",
                      value: W(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => V(se)
                    }, {
                      default: h(() => [...G[21] || (G[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => M(se.name)
                    }, {
                      default: h(() => [...G[22] || (G[22] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !$.value.length && !P.value.length && !D.value.length ? (a(), R(ns, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: G[4] || (G[4] = (se) => w.value = !1)
      }, {
        content: h(() => [...G[23] || (G[23] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            b(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            b(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Untracked:"),
            b(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: G[3] || (G[3] = (se) => w.value = !1)
          }, {
            default: h(() => [...G[24] || (G[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), R(Xw, {
        key: 0,
        node: p.value,
        onClose: G[5] || (G[5] = (se) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), R(ol, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: G[6] || (G[6] = (se) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), d_ = /* @__PURE__ */ we(c_, [["__scopeId", "data-v-1555a802"]]);
function Sr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const u_ = { class: "remote-url-display" }, f_ = ["title"], m_ = ["title"], v_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, p_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, g_ = /* @__PURE__ */ he({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = N(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const i = s.url.slice(0, Math.floor(s.maxLength * 0.6)), c = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${i}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(s.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (i) {
        console.error("Failed to copy URL:", i);
      }
    }
    return (i, c) => (a(), r("div", u_, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, f_),
      t("button", {
        class: Pe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", p_, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", v_, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, m_)
    ]));
  }
}), h_ = /* @__PURE__ */ we(g_, [["__scopeId", "data-v-7768a58d"]]), y_ = { class: "remote-title" }, w_ = {
  key: 0,
  class: "default-badge"
}, __ = {
  key: 1,
  class: "sync-badge"
}, b_ = {
  key: 0,
  class: "ahead"
}, k_ = {
  key: 1,
  class: "behind"
}, $_ = {
  key: 1,
  class: "synced"
}, C_ = ["href"], x_ = {
  key: 1,
  class: "remote-url-text"
}, S_ = /* @__PURE__ */ he({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = N(() => s.fetchingRemote === s.remote.name), n = N(() => s.remote.is_default), l = N(() => s.syncStatus && s.syncStatus.behind > 0), i = N(() => s.syncStatus && s.syncStatus.ahead > 0), c = N(() => s.remote.push_url !== s.remote.fetch_url), d = N(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), u = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), R(Et, {
      status: n.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", y_, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", w_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", __, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", b_, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", k_, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", $_, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        d.value ? (a(), r("a", {
          key: 0,
          href: d.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = it(() => {
          }, ["stop"]))
        }, f(u.value), 9, C_)) : (a(), r("span", x_, f(u.value), 1))
      ]),
      actions: h(() => [
        C(re, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (g) => m.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(re, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (g) => m.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            b(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(re, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (g) => m.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(re, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(re, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (g) => m.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...v[8] || (v[8] = [
            b(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(ut, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              C(h_, {
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
}), I_ = /* @__PURE__ */ we(S_, [["__scopeId", "data-v-8310f3a8"]]), E_ = ["for"], T_ = {
  key: 0,
  class: "base-form-field-required"
}, P_ = { class: "base-form-field-input" }, R_ = {
  key: 1,
  class: "base-form-field-error"
}, M_ = {
  key: 2,
  class: "base-form-field-hint"
}, D_ = /* @__PURE__ */ he({
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
    const s = e, o = N(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), r("div", {
      class: Pe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), r("span", T_, "*")) : y("", !0)
      ], 8, E_)) : y("", !0),
      t("div", P_, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", R_, f(e.error), 1)) : e.hint ? (a(), r("span", M_, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ma = /* @__PURE__ */ we(D_, [["__scopeId", "data-v-9a1cf296"]]), L_ = { class: "remote-form" }, O_ = { class: "form-header" }, A_ = { class: "form-body" }, N_ = {
  key: 0,
  class: "form-error"
}, U_ = { class: "form-actions" }, z_ = /* @__PURE__ */ he({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), i = k(!1), c = k(null);
    Ct(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const d = N(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!d.value || i.value)) {
        c.value = null, i.value = !0;
        try {
          n("submit", l.value);
        } catch (m) {
          c.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          i.value = !1;
        }
      }
    }
    return (m, v) => (a(), r("div", L_, [
      t("div", O_, [
        C(At, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", A_, [
        C(ma, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            C(es, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(ma, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            C(es, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(ma, { label: "Push URL (optional)" }, {
          default: h(() => [
            C(es, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", N_, f(c.value), 1)) : y("", !0)
      ]),
      t("div", U_, [
        C(re, {
          variant: "primary",
          size: "md",
          disabled: !d.value,
          loading: i.value,
          onClick: u
        }, {
          default: h(() => [
            b(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(re, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (g) => m.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), F_ = /* @__PURE__ */ we(z_, [["__scopeId", "data-v-56021b18"]]), B_ = { class: "conflict-summary-box" }, V_ = { class: "summary-header" }, W_ = { class: "summary-text" }, G_ = { key: 0 }, j_ = {
  key: 1,
  class: "all-resolved"
}, H_ = { class: "summary-progress" }, K_ = { class: "progress-bar" }, q_ = { class: "progress-text" }, Y_ = /* @__PURE__ */ he({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = N(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (n, l) => (a(), r("div", B_, [
      t("div", V_, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", W_, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", G_, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", j_, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", H_, [
        t("div", K_, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", q_, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), J_ = /* @__PURE__ */ we(Y_, [["__scopeId", "data-v-4e9e6cc9"]]), X_ = { class: "modal-header" }, Q_ = { class: "modal-title" }, Z_ = { class: "modal-body" }, eb = {
  key: 0,
  class: "error-box"
}, tb = {
  key: 0,
  class: "error-hint"
}, sb = {
  key: 1,
  class: "loading-state"
}, ob = { class: "commit-summary" }, nb = {
  key: 0,
  class: "changes-section"
}, ab = {
  key: 0,
  class: "change-group",
  open: ""
}, lb = { class: "change-count" }, ib = { class: "change-list" }, rb = {
  key: 0,
  class: "conflict-badge"
}, cb = {
  key: 1,
  class: "change-group"
}, db = { class: "change-count" }, ub = { class: "change-list" }, fb = {
  key: 2,
  class: "change-group"
}, mb = { class: "change-count" }, vb = { class: "change-list" }, pb = {
  key: 2,
  class: "strategy-section"
}, gb = { class: "radio-group" }, hb = { class: "radio-option" }, yb = { class: "radio-option" }, wb = { class: "radio-option" }, _b = {
  key: 3,
  class: "up-to-date"
}, bb = { class: "modal-actions" }, Xl = "comfygit.pullModelStrategy", kb = /* @__PURE__ */ he({
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
    const o = e, n = s, l = k(localStorage.getItem(Xl) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(Xl, $);
    });
    const i = N(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = N(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), d = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), u = N(() => {
      var $;
      return c.value > 0 || d.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = N(() => o.preview && Sr(o.preview) ? o.preview : null), v = N(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), g = N(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = N(
      () => v.value > 0 && g.value === v.value
    ), p = N(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const P = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((D) => D.name === P);
    }
    function S($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var D, E;
      return a(), R(yt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (x) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = it(() => {
            }, ["stop"]))
          }, [
            t("div", X_, [
              t("h3", Q_, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (x) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Z_, [
              e.error ? (a(), r("div", eb, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", tb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", sb, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (D = e.preview) != null && D.has_uncommitted_changes ? (a(), r(j, { key: 2 }, [
                P[15] || (P[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                P[16] || (P[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", ob, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                u.value ? (a(), r("div", nb, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", ab, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", lb, f(c.value) + " changes", 1)
                    ]),
                    t("div", ib, [
                      (a(!0), r(j, null, be(e.preview.changes.workflows.added, (x) => (a(), r("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128)),
                      (a(!0), r(j, null, be(e.preview.changes.workflows.modified, (x) => (a(), r("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(x) + " ", 1),
                        _(x) ? (a(), r("span", rb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(j, null, be(e.preview.changes.workflows.deleted, (x) => (a(), r("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  d.value > 0 ? (a(), r("details", cb, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", db, f(d.value) + " to install", 1)
                    ]),
                    t("div", ub, [
                      (a(!0), r(j, null, be(e.preview.changes.nodes.to_install, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", fb, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", mb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", vb, [
                      (a(!0), r(j, null, be(e.preview.changes.models.referenced, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item"
                      }, f(x), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R(J_, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", pb, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", gb, [
                    t("label", hb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (x) => l.value = x),
                        value: "all"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", yb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (x) => l.value = x),
                        value: "required"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", wb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (x) => l.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[24] || (P[24] = t("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", _b, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", bb, [
              C(re, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (x) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(j, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (x) => S(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (x) => S(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), R(re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (x) => S(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(j, { key: 2 }, [
                m.value && !w.value ? (a(), R(re, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (x) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (x) => S(!1))
                }, {
                  default: h(() => [...P[33] || (P[33] = [
                    b(" Pull Changes ", -1)
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
}), $b = /* @__PURE__ */ we(kb, [["__scopeId", "data-v-300c7b2f"]]), Cb = { class: "modal-header" }, xb = { class: "modal-title" }, Sb = { class: "modal-body" }, Ib = {
  key: 0,
  class: "loading-state"
}, Eb = {
  key: 1,
  class: "warning-box"
}, Tb = {
  key: 0,
  class: "commits-section"
}, Pb = { class: "commit-list" }, Rb = { class: "commit-hash" }, Mb = { class: "commit-message" }, Db = { class: "commit-date" }, Lb = { class: "force-option" }, Ob = { class: "checkbox-option" }, Ab = { class: "commit-summary" }, Nb = { key: 0 }, Ub = { key: 1 }, zb = {
  key: 0,
  class: "info-box"
}, Fb = {
  key: 1,
  class: "commits-section"
}, Bb = { class: "commit-list" }, Vb = { class: "commit-hash" }, Wb = { class: "commit-message" }, Gb = { class: "commit-date" }, jb = {
  key: 2,
  class: "up-to-date"
}, Hb = { class: "modal-actions" }, Kb = /* @__PURE__ */ he({
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
    const o = s, n = k(!1);
    function l(i) {
      o("push", { force: i });
    }
    return (i, c) => {
      var d, u, m;
      return a(), R(yt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", Cb, [
              t("h3", xb, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", Sb, [
              e.loading ? (a(), r("div", Ib, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (d = e.preview) != null && d.has_uncommitted_changes ? (a(), r("div", Eb, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (u = e.preview) != null && u.remote_has_new_commits ? (a(), r(j, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", Tb, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Pb, [
                    (a(!0), r(j, null, be(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Rb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Mb, f(v.message), 1),
                      t("span", Db, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Lb, [
                  t("label", Ob, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [en, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", Ab, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Nb, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", Ub, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", zb, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", Fb, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Bb, [
                    (a(!0), r(j, null, be(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Vb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Wb, f(v.message), 1),
                      t("span", Gb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", jb, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Hb, [
              C(re, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(j, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(re, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: h(() => [...c[20] || (c[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(re, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: h(() => [...c[21] || (c[21] = [
                  b(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), qb = /* @__PURE__ */ we(Kb, [["__scopeId", "data-v-ae86b6a7"]]), Yb = { class: "resolution-choice-group" }, Jb = ["disabled"], Xb = ["disabled"], Qb = /* @__PURE__ */ he({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", Yb, [
      t("button", {
        class: Pe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Jb),
      t("button", {
        class: Pe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Xb)
    ]));
  }
}), Zb = /* @__PURE__ */ we(Qb, [["__scopeId", "data-v-985715ed"]]), ek = { class: "conflict-header" }, tk = { class: "conflict-info" }, sk = { class: "workflow-name" }, ok = { class: "conflict-description" }, nk = {
  key: 0,
  class: "resolved-badge"
}, ak = { class: "resolved-text" }, lk = { class: "conflict-hashes" }, ik = { class: "hash-item" }, rk = { class: "hash-item" }, ck = { class: "conflict-actions" }, dk = /* @__PURE__ */ he({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    Ct(() => o.resolution, (u) => {
      l.value = u;
    }), Ct(l, (u) => {
      u && n("resolve", u);
    });
    const i = N(() => l.value !== null), c = N(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), d = N(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (u, m) => {
      var v, g;
      return a(), r("div", {
        class: Pe(["conflict-item", { resolved: i.value }])
      }, [
        t("div", ek, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", tk, [
            t("code", sk, f(e.conflict.name) + ".json", 1),
            t("div", ok, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", nk, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", ak, f(d.value), 1)
          ])) : y("", !0)
        ]),
        t("div", lk, [
          t("span", ik, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", rk, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", ck, [
          C(Zb, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), uk = /* @__PURE__ */ we(dk, [["__scopeId", "data-v-506d3bbf"]]), fk = { class: "resolution-content" }, mk = {
  key: 0,
  class: "error-box"
}, vk = { class: "resolution-header" }, pk = { class: "header-stats" }, gk = { class: "stat" }, hk = { class: "stat-value" }, yk = { class: "stat resolved" }, wk = { class: "stat-value" }, _k = {
  key: 0,
  class: "stat pending"
}, bk = { class: "stat-value" }, kk = { class: "conflicts-list" }, $k = {
  key: 1,
  class: "all-resolved-message"
}, Ck = /* @__PURE__ */ he({
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
    const o = e, n = s, l = N(() => o.resolutions.size), i = N(() => o.workflowConflicts.length - l.value), c = N(() => l.value === o.workflowConflicts.length), d = N(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function u(w) {
      const p = o.resolutions.get(w);
      return (p == null ? void 0 : p.resolution) ?? null;
    }
    function m(w, p) {
      n("resolve", w, p);
    }
    function v() {
      n("close");
    }
    function g() {
      n("apply");
    }
    return (w, p) => (a(), R(vt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", fk, [
          e.error ? (a(), r("div", mk, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", vk, [
            t("div", pk, [
              t("div", gk, [
                t("span", hk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", yk, [
                t("span", wk, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", _k, [
                t("span", bk, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", kk, [
            (a(!0), r(j, null, be(e.workflowConflicts, (_) => (a(), R(uk, {
              key: _.name,
              conflict: _,
              resolution: u(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", $k, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(d.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Le, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Le, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: h(() => [
            b(f(d.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), xk = /* @__PURE__ */ we(Ck, [["__scopeId", "data-v-c58d150d"]]), Sk = { class: "node-conflict-item" }, Ik = { class: "node-header" }, Ek = { class: "node-name" }, Tk = { class: "node-id" }, Pk = { class: "version-comparison" }, Rk = { class: "version yours" }, Mk = { class: "version theirs" }, Dk = { class: "chosen-version" }, Lk = { class: "chosen" }, Ok = { class: "chosen-reason" }, Ak = { class: "affected-workflows" }, Nk = { class: "wf-source" }, Uk = { class: "wf-version" }, zk = /* @__PURE__ */ he({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Sk, [
      t("div", Ik, [
        t("code", Ek, f(e.conflict.node_name), 1),
        t("span", Tk, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", Pk, [
        t("div", Rk, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", Mk, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", Dk, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", Lk, f(e.conflict.chosen_version), 1),
        t("span", Ok, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", Ak, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(j, null, be(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", Nk, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", Uk, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Fk = /* @__PURE__ */ we(zk, [["__scopeId", "data-v-8b626725"]]), Bk = { class: "validation-content" }, Vk = {
  key: 0,
  class: "compatible-message"
}, Wk = { class: "conflicts-list" }, Gk = {
  key: 2,
  class: "warnings-section"
}, jk = /* @__PURE__ */ he({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), R(vt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (d) => n("cancel"))
    }, {
      body: h(() => [
        t("div", Bk, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", Vk, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), r(j, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", Wk, [
              (a(!0), r(j, null, be(e.validation.node_conflicts, (d) => (a(), R(Fk, {
                key: d.node_id,
                conflict: d
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", Gk, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(j, null, be(e.validation.warnings, (d, u) => (a(), r("li", { key: u }, f(d), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Le, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (d) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Le, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (d) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Le, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (d) => n("proceed"))
        }, {
          default: h(() => [
            b(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Hk = /* @__PURE__ */ we(jk, [["__scopeId", "data-v-fefd26ed"]]), Kk = { key: 0 }, qk = /* @__PURE__ */ he({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: c,
      fetchRemote: d,
      getRemoteSyncStatus: u,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = nt(), _ = k([]), S = k(null), $ = k({}), P = k(!1), D = k(null), E = k(""), x = k(!1), W = k(null), V = k(!1), z = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = N(() => {
      if (!E.value.trim()) return _.value;
      const ke = E.value.toLowerCase();
      return _.value.filter(
        (B) => B.name.toLowerCase().includes(ke) || B.fetch_url.toLowerCase().includes(ke) || B.push_url.toLowerCase().includes(ke)
      );
    });
    async function M() {
      P.value = !0, D.value = null;
      try {
        const ke = await n();
        _.value = ke.remotes, S.value = ke.current_branch_tracking || null, await Promise.all(
          ke.remotes.map(async (B) => {
            const U = await u(B.name);
            U && ($.value[B.name] = U);
          })
        );
      } catch (ke) {
        D.value = ke instanceof Error ? ke.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function ae() {
      z.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function J(ke) {
      const B = _.value.find((U) => U.name === ke);
      B && (z.value = "edit", I.value = {
        name: B.name,
        fetchUrl: B.fetch_url,
        pushUrl: B.push_url
      }, V.value = !0);
    }
    async function G(ke) {
      try {
        z.value === "add" ? await l(ke.name, ke.fetchUrl) : await c(ke.name, ke.fetchUrl, ke.pushUrl || void 0), V.value = !1, await M();
      } catch (B) {
        D.value = B instanceof Error ? B.message : "Operation failed";
      }
    }
    function se() {
      V.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(ke) {
      W.value = ke;
      try {
        await d(ke);
        const B = await u(ke);
        B && ($.value[ke] = B), o("toast", `✓ Fetched from ${ke}`, "success");
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Fetch failed", "error");
      } finally {
        W.value = null;
      }
    }
    async function A(ke) {
      if (confirm(`Remove remote "${ke}"?`))
        try {
          await i(ke), await M();
        } catch (B) {
          D.value = B instanceof Error ? B.message : "Failed to remove remote";
        }
    }
    function H() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const L = k("idle"), ne = N(() => L.value === "pull_preview"), fe = N(
      () => L.value === "resolving" || L.value === "validating"
    ), De = N(
      () => L.value === "validation_review" || L.value === "executing"
    ), Fe = k(!1), ce = k(null), Se = k(!1), _e = k(null), ye = k(!1), Ce = k(null), me = k(null), ue = k(/* @__PURE__ */ new Map()), Me = k(null), Re = k(null), O = N(() => Ce.value && Sr(Ce.value) ? Ce.value : null);
    async function F(ke) {
      _e.value = ke, L.value = "pull_preview", ye.value = !0, Ce.value = null, me.value = null;
      try {
        Ce.value = await m(ke);
      } catch (B) {
        me.value = B instanceof Error ? B.message : "Failed to load pull preview";
      } finally {
        ye.value = !1;
      }
    }
    function te() {
      L.value = "idle", Ce.value = null, me.value = null, _e.value = null;
    }
    async function ie(ke) {
      if (!_e.value) return;
      L.value = "executing", me.value = null;
      const B = _e.value;
      try {
        const U = await v(B, ke);
        if (U.rolled_back) {
          me.value = `Pull failed and was rolled back: ${U.error || "Unknown error"}`, L.value = "pull_preview";
          return;
        }
        Te(), L.value = "idle", o("toast", `✓ Pulled from ${B}`, "success"), await M();
      } catch (U) {
        me.value = U instanceof Error ? U.message : "Pull failed", L.value = "pull_preview";
      }
    }
    function pe() {
      O.value && (L.value = "resolving", Re.value = null);
    }
    function ge(ke, B) {
      ue.value.set(ke, { name: ke, resolution: B });
    }
    function Ie() {
      L.value = "pull_preview";
    }
    async function Ee() {
      L.value = "validating", Re.value = null;
      try {
        const ke = Array.from(ue.value.values());
        Me.value = await p(_e.value, ke), L.value = "validation_review";
      } catch (ke) {
        Re.value = ke instanceof Error ? ke.message : "Validation failed", L.value = "resolving";
      }
    }
    async function le() {
      L.value = "executing";
      const ke = _e.value;
      try {
        const B = Array.from(ue.value.values()), U = await v(ke, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: B
        });
        if (U.rolled_back) {
          me.value = `Pull failed and was rolled back: ${U.error || "Unknown error"}`, L.value = "pull_preview";
          return;
        }
        Te(), L.value = "idle", o("toast", `✓ Pulled from ${ke}`, "success"), await M();
      } catch (B) {
        me.value = B instanceof Error ? B.message : "Pull failed", L.value = "validation_review";
      }
    }
    function ve() {
      L.value = "resolving";
    }
    function Ne() {
      Te(), L.value = "idle";
    }
    function Te() {
      ue.value.clear(), Me.value = null, Re.value = null, me.value = null, Ce.value = null, _e.value = null;
    }
    async function ee(ke) {
      _e.value = ke, Fe.value = !0, ye.value = !0, ce.value = null;
      try {
        ce.value = await g(ke);
      } catch (B) {
        D.value = B instanceof Error ? B.message : "Failed to load push preview";
      } finally {
        ye.value = !1;
      }
    }
    function q() {
      Fe.value = !1, ce.value = null, _e.value = null;
    }
    async function Oe(ke) {
      if (!_e.value) return;
      Se.value = !0;
      const B = _e.value;
      try {
        await w(B, ke), q(), o("toast", `✓ Pushed to ${B}`, "success"), await M();
      } catch (U) {
        o("toast", U instanceof Error ? U.message : "Push failed", "error");
      } finally {
        Se.value = !1;
      }
    }
    function $e() {
      const ke = _e.value;
      q(), ke && F(ke);
    }
    return Ze(M), (ke, B) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (U) => x.value = !0)
          }, {
            actions: h(() => [
              V.value ? y("", !0) : (a(), R(re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ae
              }, {
                default: h(() => [...B[3] || (B[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          V.value ? y("", !0) : (a(), R($o, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": B[1] || (B[1] = (U) => E.value = U),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : D.value ? (a(), R(Rs, {
            key: 1,
            message: D.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            V.value ? (a(), R(F_, {
              key: 0,
              mode: z.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: G,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !V.value ? (a(), R(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), r("span", Kk, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !V.value ? (a(), R(lt, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(T.value, (U) => (a(), R(I_, {
                  key: U.name,
                  remote: U,
                  "sync-status": $.value[U.name],
                  "fetching-remote": W.value,
                  onFetch: Q,
                  onEdit: J,
                  onRemove: A,
                  onPull: F,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !V.value ? (a(), R(ns, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                C(re, {
                  variant: "primary",
                  onClick: ae
                }, {
                  default: h(() => [...B[4] || (B[4] = [
                    b(" Add Your First Remote ", -1)
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
      C(as, {
        show: x.value,
        title: "About Git Remotes",
        onClose: B[2] || (B[2] = (U) => x.value = !1)
      }, {
        content: h(() => [...B[5] || (B[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          C(re, {
            variant: "link",
            onClick: H
          }, {
            default: h(() => [...B[6] || (B[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C($b, {
        show: ne.value,
        "remote-name": _e.value || "",
        preview: Ce.value,
        loading: ye.value,
        pulling: L.value === "executing",
        error: me.value,
        "conflict-resolutions": ue.value,
        onClose: te,
        onPull: ie,
        onOpenConflictResolution: pe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(qb, {
        show: Fe.value,
        "remote-name": _e.value || "",
        preview: ce.value,
        loading: ye.value,
        pushing: Se.value,
        onClose: q,
        onPush: Oe,
        onPullFirst: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      fe.value && O.value ? (a(), R(xk, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: ue.value,
        "operation-type": "pull",
        validating: L.value === "validating",
        error: Re.value,
        onClose: Ie,
        onResolve: ge,
        onApply: Ee
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      De.value && Me.value ? (a(), R(Hk, {
        key: 1,
        validation: Me.value,
        "operation-type": "pull",
        executing: L.value === "executing",
        onProceed: le,
        onGoBack: ve,
        onCancel: Ne
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Yk = /* @__PURE__ */ we(qk, [["__scopeId", "data-v-9ae3b76d"]]), Jk = { class: "setting-info" }, Xk = { class: "setting-label" }, Qk = {
  key: 0,
  class: "required-marker"
}, Zk = {
  key: 0,
  class: "setting-description"
}, e2 = { class: "setting-control" }, t2 = /* @__PURE__ */ he({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Pe(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", Jk, [
        t("div", Xk, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), r("span", Qk, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", Zk, f(e.description), 1)) : y("", !0)
      ]),
      t("div", e2, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), hn = /* @__PURE__ */ we(t2, [["__scopeId", "data-v-cb5d236c"]]), s2 = { class: "toggle" }, o2 = ["checked", "disabled"], n2 = /* @__PURE__ */ he({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", s2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, o2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ql = /* @__PURE__ */ we(n2, [["__scopeId", "data-v-71c0f550"]]), a2 = { class: "workspace-settings-content" }, l2 = { class: "settings-section" }, i2 = { class: "path-setting" }, r2 = { class: "path-value" }, c2 = { class: "path-setting" }, d2 = { class: "path-value" }, u2 = { class: "settings-section" }, f2 = { class: "settings-section" }, m2 = { class: "settings-section" }, v2 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = nt(), d = k(!1), u = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), S = k(!0);
    function $(I) {
      return I.join(" ");
    }
    function P(I) {
      return I.trim() ? I.trim().split(/\s+/) : [];
    }
    const D = N(() => {
      if (!g.value) return !1;
      const I = w.value !== (g.value.civitai_api_key || ""), T = p.value !== $(g.value.comfyui_extra_args || []);
      return I || T;
    });
    async function E() {
      d.value = !0, u.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = $(v.value.comfyui_extra_args || []);
        const I = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = I !== "false", S.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (I) {
        u.value = I instanceof Error ? I.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function x() {
      var I, T;
      m.value = null;
      try {
        const M = {};
        w.value !== (((I = g.value) == null ? void 0 : I.civitai_api_key) || "") && (M.civitai_api_key = w.value || null), p.value !== $(((T = g.value) == null ? void 0 : T.comfyui_extra_args) || []) && (M.comfyui_extra_args = P(p.value)), await c(M, n.workspacePath || void 0), await E(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (M) {
        const ae = M instanceof Error ? M.message : "Failed to save settings";
        m.value = { type: "error", message: ae }, l("error", ae);
      }
    }
    function W() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function V(I) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(I)), console.log("[ComfyGit] Auto-refresh setting saved:", I);
    }
    function z(I) {
      I ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", I ? "enabled" : "disabled");
    }
    return s({
      saveSettings: x,
      resetSettings: W,
      hasChanges: D,
      loadSettings: E
    }), Ze(E), (I, T) => (a(), r("div", a2, [
      d.value ? (a(), R(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : u.value ? (a(), R(Rs, {
        key: 1,
        message: u.value,
        retry: !0,
        onRetry: E
      }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
        C(lt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var M, ae;
            return [
              t("div", l2, [
                t("div", i2, [
                  T[4] || (T[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  T[5] || (T[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", r2, f(((M = v.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                t("div", c2, [
                  T[6] || (T[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  T[7] || (T[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", d2, f(((ae = v.value) == null ? void 0 : ae.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(lt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", u2, [
              C(hn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  C(An, {
                    modelValue: w.value,
                    "onUpdate:modelValue": T[0] || (T[0] = (M) => w.value = M),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C(lt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", f2, [
              C(hn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  C(An, {
                    modelValue: p.value,
                    "onUpdate:modelValue": T[1] || (T[1] = (M) => p.value = M),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              T[8] || (T[8] = t("div", { class: "setting-hint" }, [
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
        C(lt, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", m2, [
              C(hn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(Ql, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      T[2] || (T[2] = (M) => _.value = M),
                      V
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(hn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  C(Ql, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      T[3] || (T[3] = (M) => S.value = M),
                      z
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), R(an, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: Ht({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Ir = /* @__PURE__ */ we(v2, [["__scopeId", "data-v-f28917ec"]]), p2 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Tt, null, {
      header: h(() => [
        C(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (d) => {
                  var u;
                  return (u = s.value) == null ? void 0 : u.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), R(re, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (d) => {
                  var u;
                  return (u = s.value) == null ? void 0 : u.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  b(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        C(Ir, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), g2 = { class: "base-tabs" }, h2 = ["disabled", "onClick"], y2 = {
  key: 0,
  class: "base-tabs__badge"
}, w2 = /* @__PURE__ */ he({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(i) {
      var c;
      (c = o.tabs.find((d) => d.id === i)) != null && c.disabled || n("update:modelValue", i);
    }
    return (i, c) => (a(), r("div", g2, [
      (a(!0), r(j, null, be(e.tabs, (d) => (a(), r("button", {
        key: d.id,
        class: Pe([
          "base-tabs__tab",
          {
            active: e.modelValue === d.id,
            disabled: d.disabled
          }
        ]),
        disabled: d.disabled,
        onClick: (u) => l(d.id)
      }, [
        b(f(d.label) + " ", 1),
        d.badge ? (a(), r("span", y2, f(d.badge), 1)) : y("", !0)
      ], 10, h2))), 128))
    ]));
  }
}), Er = /* @__PURE__ */ we(w2, [["__scopeId", "data-v-ad5e6cad"]]), _2 = { class: "log-viewer-wrapper" }, b2 = ["disabled", "title"], k2 = /* @__PURE__ */ he({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), n = k("idle"), l = N(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      var v;
      await _t();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Ze(i), Ct(() => s.logs, i);
    async function c() {
      if (l.value.length === 0) return;
      const m = l.value.map((v) => v.text).join(`
`);
      try {
        await navigator.clipboard.writeText(m), n.value = "copied", setTimeout(() => {
          n.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function d(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function u(m) {
      m.stopPropagation();
    }
    return (m, v) => (a(), r("div", _2, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: d,
        onCopy: u,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, b2),
        (a(!0), r(j, null, be(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Pe(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Tr = /* @__PURE__ */ we(k2, [["__scopeId", "data-v-c0cc6d21"]]), $2 = /* @__PURE__ */ he({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = nt(), c = k("workspace"), d = k([]), u = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = N(() => c.value === "workspace" ? g.value : w.value);
    async function S() {
      u.value = !0, m.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await n(void 0, 500);
      } catch (D) {
        m.value = D instanceof Error ? D.message : `Failed to load ${c.value} logs`;
      } finally {
        u.value = !1;
      }
    }
    async function $() {
      try {
        const [D, E] = await Promise.all([
          o(),
          l()
        ]);
        D.exists && (g.value = D.path), E.exists && (w.value = E.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (D) {
          console.error("Failed to open log file:", D);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(c, () => {
      S();
    }), Ze(() => {
      S(), $();
    }), (D, E) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (x) => v.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: P,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  b(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: u.value
              }, {
                default: h(() => [
                  b(f(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(Er, {
            modelValue: c.value,
            "onUpdate:modelValue": E[1] || (E[1] = (x) => c.value = x),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), R(Ps, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            d.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), R(Tr, {
              key: 1,
              logs: d.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: v.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (x) => v.value = !1)
      }, {
        content: h(() => [...E[4] || (E[4] = [
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
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: E[2] || (E[2] = (x) => v.value = !1)
          }, {
            default: h(() => [...E[5] || (E[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), C2 = /* @__PURE__ */ he({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = nt(), i = k([]), c = k(!1), d = k(null), u = k(!1), m = k("production"), v = k(null), g = k(!1);
    async function w() {
      c.value = !0, d.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const S = await o();
          m.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        d.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function p() {
      try {
        const S = await n();
        S.exists && (v.value = S.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        g.value = !0;
        try {
          await l(v.value);
        } catch (S) {
          console.error("Failed to open log file:", S);
        } finally {
          g.value = !1;
        }
      }
    }
    return Ze(() => {
      w(), p();
    }), (S, $) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => u.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  b(f(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: c.value
              }, {
                default: h(() => [
                  b(f(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          c.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : d.value ? (a(), R(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(Tr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: u.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => u.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            $[3] || ($[3] = b(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, f(m.value), 1),
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
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => u.value = !1)
          }, {
            default: h(() => [...$[6] || ($[6] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), x2 = { class: "env-title" }, S2 = {
  key: 0,
  class: "current-badge"
}, I2 = {
  key: 0,
  class: "branch-info"
}, E2 = /* @__PURE__ */ he({
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
    return (s, o) => (a(), R(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", x2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", S2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", I2, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
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
          C(ut, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(ut, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(ut, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), R(ut, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), T2 = /* @__PURE__ */ we(E2, [["__scopeId", "data-v-9231917a"]]), P2 = { class: "env-details" }, R2 = { class: "status-row" }, M2 = {
  key: 0,
  class: "detail-row"
}, D2 = { class: "value mono" }, L2 = {
  key: 1,
  class: "detail-row"
}, O2 = { class: "value mono small" }, A2 = { class: "detail-row" }, N2 = { class: "value" }, U2 = { class: "detail-row" }, z2 = { class: "value" }, F2 = { class: "detail-row" }, B2 = { class: "value" }, V2 = {
  key: 2,
  class: "section-divider"
}, W2 = {
  key: 3,
  class: "detail-row"
}, G2 = { class: "value" }, j2 = {
  key: 4,
  class: "detail-row"
}, H2 = { class: "value" }, K2 = { class: "footer-actions" }, q2 = /* @__PURE__ */ he({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = s;
    function n(l) {
      if (!l) return "Unknown";
      try {
        const i = new Date(l), d = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), u = Math.floor(d / 6e4), m = Math.floor(d / 36e5), v = Math.floor(d / 864e5);
        return u < 1 ? "just now" : u < 60 ? `${u} ${u === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), R(vt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", P2, [
          t("div", R2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Pe(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", M2, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", D2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", L2, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", O2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", A2, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", N2, f(e.environment.workflow_count), 1)
          ]),
          t("div", U2, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", z2, f(e.environment.node_count), 1)
          ]),
          t("div", F2, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", B2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", V2)) : y("", !0),
          e.environment.created_at ? (a(), r("div", W2, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", G2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", j2, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", H2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", K2, [
          e.canDelete ? (a(), R(Le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (c) => o("delete", e.environment.name))
          }, {
            default: h(() => [...i[12] || (i[12] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          C(Le, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (c) => o("close"))
          }, {
            default: h(() => [...i[13] || (i[13] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Y2 = /* @__PURE__ */ we(q2, [["__scopeId", "data-v-59855453"]]), Pr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Rr = "3.12", nl = [
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
], Mr = "auto", J2 = { class: "progress-bar" }, X2 = /* @__PURE__ */ he({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", J2, [
      t("div", {
        class: Pe(["progress-fill", e.variant]),
        style: Ht({ width: o.value })
      }, null, 6)
    ]));
  }
}), Zn = /* @__PURE__ */ we(X2, [["__scopeId", "data-v-1beb0512"]]), Q2 = { class: "task-progress" }, Z2 = { class: "progress-info" }, e$ = { class: "progress-percentage" }, t$ = { class: "progress-message" }, s$ = {
  key: 0,
  class: "progress-steps"
}, o$ = { class: "step-icon" }, n$ = { class: "step-label" }, a$ = /* @__PURE__ */ he({
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
      const i = s.steps.find((c) => c.id === l);
      return i ? s.progress >= i.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const i = o(l);
      return i === "completed" ? "✓" : i === "active" ? "⟳" : "○";
    }
    return (l, i) => (a(), r("div", Q2, [
      C(Zn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Z2, [
        t("span", e$, f(e.progress) + "%", 1),
        t("span", t$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", s$, [
        (a(!0), r(j, null, be(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Pe(["step", o(c.id)])
        }, [
          t("span", o$, f(n(c.id)), 1),
          t("span", n$, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Un = /* @__PURE__ */ we(a$, [["__scopeId", "data-v-9d1de66c"]]), l$ = {
  key: 0,
  class: "create-env-form"
}, i$ = { class: "form-field" }, r$ = { class: "form-field" }, c$ = ["value"], d$ = { class: "form-field" }, u$ = ["disabled"], f$ = ["value"], m$ = { class: "form-field" }, v$ = ["value"], p$ = { class: "form-field form-field--checkbox" }, g$ = { class: "form-checkbox" }, h$ = {
  key: 1,
  class: "create-env-progress"
}, y$ = { class: "creating-intro" }, w$ = {
  key: 0,
  class: "progress-warning"
}, _$ = {
  key: 1,
  class: "create-error"
}, b$ = { class: "error-message" }, k$ = {
  key: 1,
  class: "footer-status"
}, $$ = 10, C$ = /* @__PURE__ */ he({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = nt(), c = k(""), d = k(Rr), u = k("latest"), m = k(Mr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let S = null, $ = 0;
    const P = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], D = k(null);
    function E() {
      p.value || o("close");
    }
    async function x() {
      const T = c.value.trim();
      if (T) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const M = {
            name: T,
            python_version: d.value,
            comfyui_version: u.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ae = await l(M);
          ae.status === "started" ? W() : ae.status === "error" && (_.value = {
            progress: 0,
            message: ae.message || "Failed to start creation",
            error: ae.message
          });
        } catch (M) {
          _.value = {
            progress: 0,
            message: M instanceof Error ? M.message : "Unknown error",
            error: M instanceof Error ? M.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      S || ($ = 0, S = window.setInterval(async () => {
        try {
          const T = await i();
          $ = 0, _.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (V(), o("created", T.environment_name || c.value.trim(), v.value)) : T.state === "error" ? (V(), _.value.error = T.error || T.message) : T.state === "idle" && p.value && (V(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= $$ && (V(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      S && (clearInterval(S), S = null);
    }
    function z() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function I() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        w.value = !1;
      }
    }
    return Ze(async () => {
      var T;
      await _t(), (T = D.value) == null || T.focus(), I();
    }), oo(() => {
      V();
    }), (T, M) => (a(), R(vt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: E
    }, {
      body: h(() => [
        p.value ? (a(), r("div", h$, [
          t("p", y$, [
            M[11] || (M[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            M[12] || (M[12] = b("... ", -1))
          ]),
          C(Un, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", w$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", _$, [
            t("p", b$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", l$, [
          t("div", i$, [
            M[6] || (M[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": M[0] || (M[0] = (ae) => c.value = ae),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Zt(x, ["enter"])
            }, null, 544), [
              [Ut, c.value]
            ])
          ]),
          t("div", r$, [
            M[7] || (M[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (ae) => d.value = ae),
              class: "form-select"
            }, [
              (a(!0), r(j, null, be(We(Pr), (ae) => (a(), r("option", {
                key: ae,
                value: ae
              }, f(ae), 9, c$))), 128))
            ], 512), [
              [hs, d.value]
            ])
          ]),
          t("div", d$, [
            M[8] || (M[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (ae) => u.value = ae),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(j, null, be(g.value, (ae) => (a(), r("option", {
                key: ae.tag_name,
                value: ae.tag_name
              }, f(ae.name), 9, f$))), 128))
            ], 8, u$), [
              [hs, u.value]
            ])
          ]),
          t("div", m$, [
            M[9] || (M[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[3] || (M[3] = (ae) => m.value = ae),
              class: "form-select"
            }, [
              (a(!0), r(j, null, be(We(nl), (ae) => (a(), r("option", {
                key: ae,
                value: ae
              }, f(ae) + f(ae === "auto" ? " (detect GPU)" : ""), 9, v$))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", p$, [
            t("label", g$, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": M[4] || (M[4] = (ae) => v.value = ae)
              }, null, 512), [
                [en, v.value]
              ]),
              M[10] || (M[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(j, { key: 1 }, [
          _.value.error ? (a(), R(Le, {
            key: 0,
            variant: "secondary",
            onClick: z
          }, {
            default: h(() => [...M[15] || (M[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", k$, " Creating environment... "))
        ], 64)) : (a(), r(j, { key: 0 }, [
          C(Le, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: x
          }, {
            default: h(() => [...M[13] || (M[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Le, {
            variant: "secondary",
            onClick: M[5] || (M[5] = (ae) => o("close"))
          }, {
            default: h(() => [...M[14] || (M[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), x$ = /* @__PURE__ */ we(C$, [["__scopeId", "data-v-f37eaa42"]]), S$ = /* @__PURE__ */ he({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = nt(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!1), v = k(!1), g = k(null), w = N(() => {
      if (!u.value.trim()) return i.value;
      const D = u.value.toLowerCase();
      return i.value.filter(
        (E) => {
          var x;
          return E.name.toLowerCase().includes(D) || ((x = E.current_branch) == null ? void 0 : x.toLowerCase().includes(D));
        }
      );
    });
    function p(D, E) {
      v.value = !1, n("created", D, E);
    }
    function _() {
      v.value = !0;
    }
    function S(D) {
      g.value = D;
    }
    function $(D) {
      g.value = null, n("delete", D);
    }
    async function P() {
      c.value = !0, d.value = null;
      try {
        i.value = await l();
      } catch (D) {
        d.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Ze(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (D, E) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (x) => m.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: h(() => [...E[7] || (E[7] = [
                  b(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($o, {
            modelValue: u.value,
            "onUpdate:modelValue": E[1] || (E[1] = (x) => u.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), R(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            w.value.length ? (a(), R(lt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, be(w.value, (x) => (a(), R(T2, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    x.is_current ? y("", !0) : (a(), R(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => D.$emit("switch", x.name)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => S(x)
                    }, {
                      default: h(() => [...E[9] || (E[9] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            w.value.length ? y("", !0) : (a(), R(ns, {
              key: 1,
              icon: "🌍",
              message: u.value ? `No environments match '${u.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              u.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  C(re, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: h(() => [...E[10] || (E[10] = [
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
      C(as, {
        show: m.value,
        title: "About Environments",
        onClose: E[3] || (E[3] = (x) => m.value = !1)
      }, {
        content: h(() => [...E[11] || (E[11] = [
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
        actions: h(() => [
          C(re, {
            variant: "secondary",
            onClick: E[2] || (E[2] = (x) => m.value = !1)
          }, {
            default: h(() => [...E[12] || (E[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), R(Y2, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: E[4] || (E[4] = (x) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), R(x$, {
        key: 1,
        onClose: E[5] || (E[5] = (x) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), I$ = /* @__PURE__ */ we(S$, [["__scopeId", "data-v-f95999f4"]]), E$ = { class: "file-path" }, T$ = { class: "file-path-text" }, P$ = ["title"], R$ = /* @__PURE__ */ he({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = k(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, i) => (a(), r("div", E$, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", T$, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, P$)) : y("", !0)
    ]));
  }
}), M$ = /* @__PURE__ */ we(R$, [["__scopeId", "data-v-f0982173"]]), D$ = { class: "export-blocked" }, L$ = { class: "issues-list" }, O$ = { class: "issue-message" }, A$ = {
  key: 0,
  class: "issue-details"
}, N$ = ["onClick"], U$ = { class: "issue-fix" }, z$ = /* @__PURE__ */ he({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const s = e, o = Vs({});
    function n(l) {
      const i = s.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), R(vt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", D$, [
          i[2] || (i[2] = t("div", { class: "error-header" }, [
            t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            t("div", { class: "error-summary" }, [
              t("h3", { class: "error-title" }, "Export blocked"),
              t("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          t("div", L$, [
            (a(!0), r(j, null, be(e.issues, (c, d) => (a(), r("div", {
              key: d,
              class: "issue-item"
            }, [
              t("div", O$, f(c.message), 1),
              c.details.length ? (a(), r("div", A$, [
                (a(!0), r(j, null, be(n(d), (u, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(u), 1))), 128)),
                c.details.length > 3 && !o[d] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (u) => o[d] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, N$)) : y("", !0)
              ])) : y("", !0),
              t("div", U$, [
                c.type === "uncommitted_workflows" ? (a(), r(j, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(j, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(j, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        C(Le, {
          variant: "primary",
          onClick: i[0] || (i[0] = (c) => l.$emit("close"))
        }, {
          default: h(() => [...i[3] || (i[3] = [
            b(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Dr = /* @__PURE__ */ we(z$, [["__scopeId", "data-v-b52f5e32"]]), F$ = { class: "export-warnings" }, B$ = {
  key: 0,
  class: "success-header"
}, V$ = { class: "warning-header" }, W$ = { class: "warning-summary" }, G$ = { class: "warning-title" }, j$ = { class: "models-section" }, H$ = { class: "models-list" }, K$ = { class: "model-info" }, q$ = { class: "model-filename" }, Y$ = { class: "model-workflows" }, J$ = ["onClick"], X$ = /* @__PURE__ */ he({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = N(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function d() {
      i.value = null, n("revalidate");
    }
    return (u, m) => (a(), r(j, null, [
      C(vt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => u.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", F$, [
            e.models.length === 0 ? (a(), r("div", B$, [...m[4] || (m[4] = [
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
            ])])) : (a(), r(j, { key: 1 }, [
              t("div", V$, [
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
                t("div", W$, [
                  t("h3", G$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", j$, [
                t("div", H$, [
                  (a(!0), r(j, null, be(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", K$, [
                      t("div", q$, f(v.filename), 1),
                      t("div", Y$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, J$)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), r("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (v) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : y("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: h(() => [
          C(Le, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => u.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Le, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => u.$emit("confirm"))
          }, {
            default: h(() => [
              b(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), R(sl, {
        key: 0,
        identifier: i.value,
        onClose: d
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Lr = /* @__PURE__ */ we(X$, [["__scopeId", "data-v-b698d882"]]), Q$ = { class: "export-card" }, Z$ = { class: "export-path-row" }, eC = { class: "export-actions" }, tC = {
  key: 1,
  class: "export-warning"
}, sC = /* @__PURE__ */ he({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = nt(), n = k(""), l = k(!1), i = k(!1), c = k(!1), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k(!1), w = N(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, d.value = null;
      try {
        const E = await s();
        m.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
      } catch (E) {
        d.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function _() {
      g.value = !1, await $();
    }
    async function S() {
      try {
        const E = await s();
        m.value = E;
      } catch (E) {
        console.error("Re-validation failed:", E);
      }
    }
    async function $() {
      i.value = !0;
      try {
        const E = await o(n.value || void 0);
        d.value = E;
      } catch (E) {
        d.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var E;
      if ((E = d.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(d.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function D() {
      var E;
      if ((E = d.value) != null && E.path) {
        c.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(d.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const W = await x.blob(), V = URL.createObjectURL(W), z = d.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = V, I.download = z, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (E, x) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (W) => u.value = !0)
          })
        ]),
        content: h(() => [
          C(lt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", Q$, [
                x[7] || (x[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", Z$, [
                  C(An, {
                    modelValue: n.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (W) => n.value = W),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", eC, [
                  C(re, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      x[6] || (x[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      b(" " + f(w.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          d.value ? (a(), R(lt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              C(Et, {
                status: d.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(d.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(d.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(d.value.status === "success" ? "Your environment has been exported" : d.value.message), 1)
                ]),
                _: 2
              }, [
                d.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    C(ut, { label: "Saved to:" }, {
                      default: h(() => [
                        C(M$, {
                          path: d.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    d.value.models_without_sources !== void 0 ? (a(), R(ut, {
                      key: 0,
                      label: "Models without sources:",
                      value: d.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    d.value.models_without_sources && d.value.models_without_sources > 0 ? (a(), r("div", tC, [...x[8] || (x[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                d.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: D
                    }, {
                      default: h(() => [...x[9] || (x[9] = [
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
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...x[10] || (x[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (W) => d.value = null)
                    }, {
                      default: h(() => [...x[11] || (x[11] = [
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
          })) : y("", !0)
        ]),
        _: 1
      }),
      C(as, {
        show: u.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (W) => u.value = !1)
      }, {
        content: h(() => [...x[12] || (x[12] = [
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
      v.value && m.value ? (a(), R(Dr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (W) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), R(Lr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: x[5] || (x[5] = (W) => g.value = !1),
        onRevalidate: S
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), oC = /* @__PURE__ */ we(sC, [["__scopeId", "data-v-f4d120f2"]]), nC = { class: "file-input-wrapper" }, aC = ["accept", "multiple", "disabled"], lC = /* @__PURE__ */ he({
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
    const n = o, l = k(null);
    function i() {
      var d;
      (d = l.value) == null || d.click();
    }
    function c(d) {
      const u = d.target;
      u.files && u.files.length > 0 && (n("change", u.files), u.value = "");
    }
    return s({
      triggerInput: i
    }), (d, u) => (a(), r("div", nC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, aC),
      C(re, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: h(() => [
          Ke(d.$slots, "default", {}, () => [
            u[0] || (u[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            b(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), iC = /* @__PURE__ */ we(lC, [["__scopeId", "data-v-cd192091"]]), rC = {
  key: 0,
  class: "drop-zone-empty"
}, cC = { class: "drop-zone-text" }, dC = { class: "drop-zone-primary" }, uC = { class: "drop-zone-secondary" }, fC = { class: "drop-zone-actions" }, mC = {
  key: 1,
  class: "drop-zone-file"
}, vC = { class: "file-info" }, pC = { class: "file-details" }, gC = { class: "file-name" }, hC = { class: "file-size" }, yC = /* @__PURE__ */ he({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = N(() => l.value !== null), d = N(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), u = N(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m($) {
      var P;
      $.stopPropagation(), i.value++, (P = $.dataTransfer) != null && P.types.includes("Files") && (n.value = !0);
    }
    function v($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function g($) {
      $.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w($) {
      var D;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (D = $.dataTransfer) == null ? void 0 : D.files;
      P && P.length > 0 && _(P[0]);
    }
    function p($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function S() {
      l.value = null, o("clear");
    }
    return ($, P) => (a(), r("div", {
      class: Pe(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: it(m, ["prevent"]),
      onDragover: it(v, ["prevent"]),
      onDragleave: it(g, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", mC, [
        t("div", vC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", pC, [
            t("div", gC, f(d.value), 1),
            t("div", hC, f(u.value), 1)
          ])
        ]),
        C(re, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: h(() => [...P[2] || (P[2] = [
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
      ])) : (a(), r("div", rC, [
        P[0] || (P[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", cC, [
          t("p", dC, f(e.primaryText), 1),
          t("p", uC, f(e.secondaryText), 1)
        ]),
        t("div", fC, [
          C(iC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: h(() => [
              b(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), wC = /* @__PURE__ */ we(yC, [["__scopeId", "data-v-0f79cb86"]]), _C = { class: "import-preview" }, bC = { class: "preview-header" }, kC = {
  key: 0,
  class: "source-env"
}, $C = { class: "preview-content" }, CC = { class: "preview-section" }, xC = { class: "section-header" }, SC = { class: "section-info" }, IC = { class: "section-count" }, EC = {
  key: 0,
  class: "item-list"
}, TC = { class: "item-name" }, PC = {
  key: 0,
  class: "item-more"
}, RC = { class: "preview-section" }, MC = { class: "section-header" }, DC = { class: "section-info" }, LC = { class: "section-count" }, OC = {
  key: 0,
  class: "item-list"
}, AC = { class: "item-details" }, NC = { class: "item-name" }, UC = { class: "item-meta" }, zC = {
  key: 0,
  class: "item-more"
}, FC = { class: "preview-section" }, BC = { class: "section-header" }, VC = { class: "section-info" }, WC = { class: "section-count" }, GC = {
  key: 0,
  class: "item-list"
}, jC = { class: "item-name" }, HC = {
  key: 0,
  class: "item-more"
}, KC = {
  key: 0,
  class: "preview-section"
}, qC = { class: "git-info" }, YC = /* @__PURE__ */ he({
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
    const s = e, o = N(() => s.workflows.length), n = N(() => s.models.length), l = N(() => s.nodes.length);
    function i(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, d) => (a(), r("div", _C, [
      t("div", bC, [
        C(At, null, {
          default: h(() => [...d[0] || (d[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", kC, [
          d[1] || (d[1] = b(" From: ", -1)),
          C(Ra, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", $C, [
        t("div", CC, [
          t("div", xC, [
            d[3] || (d[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", SC, [
              d[2] || (d[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", IC, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", EC, [
            (a(!0), r(j, null, be(e.workflows.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[4] || (d[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", TC, f(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", PC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", RC, [
          t("div", MC, [
            d[6] || (d[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", DC, [
              d[5] || (d[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", LC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", OC, [
            (a(!0), r(j, null, be(e.models.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              d[7] || (d[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", AC, [
                t("span", NC, f(u.filename), 1),
                t("span", UC, f(i(u.size)) + " • " + f(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", zC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", FC, [
          t("div", BC, [
            d[9] || (d[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", VC, [
              d[8] || (d[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", WC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", GC, [
            (a(!0), r(j, null, be(e.nodes.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[10] || (d[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", jC, f(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", HC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", KC, [
          d[11] || (d[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", qC, [
            e.gitBranch ? (a(), R(ut, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                C(Ra, null, {
                  default: h(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), R(ut, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                C(br, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), JC = /* @__PURE__ */ we(YC, [["__scopeId", "data-v-182fe113"]]), XC = { class: "import-config" }, QC = { class: "config-container" }, ZC = { class: "config-field" }, ex = { class: "input-wrapper" }, tx = ["value"], sx = {
  key: 0,
  class: "validating-indicator"
}, ox = {
  key: 1,
  class: "valid-indicator"
}, nx = {
  key: 0,
  class: "field-error"
}, ax = { class: "config-field" }, lx = { class: "strategy-options" }, ix = ["value", "checked", "onChange"], rx = { class: "strategy-content" }, cx = { class: "strategy-label" }, dx = { class: "strategy-description" }, ux = { class: "config-field switch-field" }, fx = { class: "switch-label" }, mx = ["checked"], vx = { class: "advanced-section" }, px = { class: "advanced-content" }, gx = { class: "config-field" }, hx = ["value"], yx = ["value"], wx = /* @__PURE__ */ he({
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
    const o = e, n = s, l = k(!1), i = k(!1);
    Ct(() => o.nameError, (v) => {
      l.value = !1, i.value = !v && o.name.length > 0;
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
    let d = null;
    function u(v) {
      const g = v.target.value;
      n("update:name", g), i.value = !1, d && clearTimeout(d), g.length > 0 ? (l.value = !0, d = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), r("div", XC, [
      C(At, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", QC, [
        t("div", ZC, [
          C(xn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", ex, [
            t("input", {
              type: "text",
              class: Pe(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: u,
              onBlur: m
            }, null, 42, tx),
            l.value ? (a(), r("span", sx, "...")) : i.value ? (a(), r("span", ox, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", nx, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", ax, [
          C(xn, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", lx, [
            (a(), r(j, null, be(c, (w) => t("label", {
              key: w.value,
              class: Pe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, ix),
              t("div", rx, [
                t("span", cx, f(w.label), 1),
                t("span", dx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", ux, [
          t("label", fx, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, mx),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", vx, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", px, [
            t("div", gx, [
              C(xn, null, {
                default: h(() => [...g[7] || (g[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), r(j, null, be(We(nl), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, yx))), 128))
              ], 40, hx)
            ])
          ])
        ])
      ])
    ]));
  }
}), _x = /* @__PURE__ */ we(wx, [["__scopeId", "data-v-89ea06a1"]]), bx = { class: "import-flow" }, kx = {
  key: 0,
  class: "import-empty"
}, $x = { class: "git-import-section" }, Cx = { class: "git-url-input-row" }, xx = ["disabled"], Sx = {
  key: 0,
  class: "git-error"
}, Ix = {
  key: 1,
  class: "import-configure"
}, Ex = { class: "selected-file-bar" }, Tx = {
  key: 0,
  class: "file-bar-content"
}, Px = { class: "file-bar-info" }, Rx = { class: "file-bar-name" }, Mx = { class: "file-bar-size" }, Dx = {
  key: 1,
  class: "file-bar-content"
}, Lx = { class: "file-bar-info" }, Ox = { class: "file-bar-name" }, Ax = {
  key: 0,
  class: "preview-loading"
}, Nx = { class: "import-actions" }, Ux = {
  key: 2,
  class: "import-progress"
}, zx = { class: "creating-intro" }, Fx = {
  key: 0,
  class: "progress-warning"
}, Bx = {
  key: 1,
  class: "import-error"
}, Vx = { class: "error-message" }, Wx = {
  key: 3,
  class: "import-complete"
}, Gx = { class: "complete-message" }, jx = { class: "complete-title" }, Hx = { class: "complete-details" }, Kx = { class: "complete-actions" }, qx = /* @__PURE__ */ he({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Se, _e, ye, Ce;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: d, executeImport: u, executeGitImport: m, getImportProgress: v } = nt();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), D = k(null), E = k(""), x = k(null), W = k(!1), V = k(null), z = k(null), I = k({
      name: ((Se = n.initialProgress) == null ? void 0 : Se.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = k(null), M = k({
      message: ((_e = n.initialProgress) == null ? void 0 : _e.message) ?? "Preparing import...",
      phase: ((ye = n.initialProgress) == null ? void 0 : ye.phase) ?? "",
      progress: ((Ce = n.initialProgress) == null ? void 0 : Ce.progress) ?? 0,
      error: null
    }), ae = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], J = N(() => {
      if (!z.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const me = z.value;
      return {
        sourceEnvironment: me.comfyui_version ? `ComfyUI ${me.comfyui_version}` : "Unknown",
        workflows: me.workflows.map((ue) => ue.name),
        models: me.models.map((ue) => ({
          filename: ue.filename,
          size: 0,
          type: ue.relative_path.split("/")[0] || "model"
        })),
        nodes: me.nodes.map((ue) => ue.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), G = N(() => !P.value && !D.value && z.value && I.value.name.length > 0 && !T.value && (w.value || x.value));
    async function se(me) {
      w.value = me, P.value = !0, D.value = null, z.value = null;
      try {
        const ue = await i(me);
        z.value = ue;
      } catch (ue) {
        D.value = ue instanceof Error ? ue.message : "Failed to analyze file", console.error("Preview error:", ue);
      } finally {
        P.value = !1;
      }
    }
    function Q() {
      w.value = null, x.value = null, E.value = "", V.value = null, _.value = !1, S.value = !1, $.value = "", z.value = null, D.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function A() {
      Fe(), Q(), p.value = !1, P.value = !1, W.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function H() {
      if (E.value.trim()) {
        W.value = !0, V.value = null;
        try {
          const me = await c(E.value.trim());
          x.value = E.value.trim(), z.value = me;
        } catch (me) {
          V.value = me instanceof Error ? me.message : "Failed to analyze repository";
        } finally {
          W.value = !1;
        }
      }
    }
    function L(me) {
      try {
        const ue = new URL(me);
        return ue.host + ue.pathname.replace(/\.git$/, "");
      } catch {
        return me;
      }
    }
    async function ne(me) {
      if (!me) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const ue = await d(me);
        T.value = ue.valid ? null : ue.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function fe() {
      if (I.value.name && !(!w.value && !x.value)) {
        p.value = !0, _.value = !1, M.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let me;
          if (w.value)
            me = await u(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (x.value)
            me = await m(
              x.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          me.status === "started" ? De() : (S.value = !1, $.value = me.message, p.value = !1, _.value = !0);
        } catch (me) {
          S.value = !1, $.value = me instanceof Error ? me.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function De() {
      if (g) return;
      const me = async () => {
        try {
          const Me = await v();
          return M.value = {
            message: Me.message,
            phase: Me.phase || "",
            progress: Me.progress ?? (Me.state === "importing" ? 50 : 0),
            error: Me.error || null
          }, Me.state === "complete" ? (Fe(), S.value = !0, $.value = `Environment '${Me.environment_name}' created successfully`, p.value = !1, _.value = !0, Me.environment_name && l("import-complete", Me.environment_name, I.value.switchAfterImport), !1) : Me.state === "error" ? (Fe(), S.value = !1, $.value = Me.error || Me.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Me) {
          return console.error("Failed to poll import progress:", Me), !0;
        }
      };
      await me() && (g = setInterval(async () => {
        await me() || Fe();
      }, 2e3));
    }
    function Fe() {
      g && (clearInterval(g), g = null);
    }
    function ce(me) {
      return me < 1024 ? `${me} B` : me < 1024 * 1024 ? `${(me / 1024).toFixed(1)} KB` : me < 1024 * 1024 * 1024 ? `${(me / (1024 * 1024)).toFixed(1)} MB` : `${(me / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ze(async () => {
      try {
        const me = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", me.state, me), me.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", me.environment_name), p.value = !0, I.value.name = me.environment_name || I.value.name || "", M.value = {
          progress: me.progress ?? 0,
          message: me.message || "Importing...",
          phase: me.phase || "",
          error: null
        }, De());
      } catch (me) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", me);
      }
    }), s({
      handleReset: A,
      isImporting: p,
      canImport: G
    }), (me, ue) => {
      var Me;
      return a(), r("div", bx, [
        !w.value && !x.value && !p.value ? (a(), r("div", kx, [
          C(wC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: se
          }),
          ue[7] || (ue[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", $x, [
            ue[5] || (ue[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", Cx, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ue[0] || (ue[0] = (Re) => E.value = Re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Zt(H, ["enter"]),
                disabled: W.value
              }, null, 40, xx), [
                [Ut, E.value]
              ]),
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || W.value,
                onClick: H
              }, {
                default: h(() => [
                  b(f(W.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (a(), r("div", Sx, f(V.value), 1)) : y("", !0),
            ue[6] || (ue[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || x.value) && !p.value && !_.value ? (a(), r("div", Ix, [
          t("div", Ex, [
            w.value ? (a(), r("div", Tx, [
              ue[8] || (ue[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", Px, [
                t("div", Rx, f(w.value.name), 1),
                t("div", Mx, f(ce(w.value.size)), 1)
              ])
            ])) : x.value ? (a(), r("div", Dx, [
              ue[10] || (ue[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", Lx, [
                t("div", Ox, f(L(x.value)), 1),
                ue[9] || (ue[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(re, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: h(() => [...ue[11] || (ue[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), r("div", Ax, [...ue[12] || (ue[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : D.value ? (a(), R(Yt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [D.value]
          }, null, 8, ["details"])) : z.value ? (a(), R(JC, {
            key: 2,
            "source-environment": J.value.sourceEnvironment,
            workflows: J.value.workflows,
            models: J.value.models,
            nodes: J.value.nodes,
            "git-branch": J.value.gitBranch,
            "git-commit": J.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          z.value ? (a(), R(_x, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": ue[1] || (ue[1] = (Re) => I.value.name = Re),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": ue[2] || (ue[2] = (Re) => I.value.modelStrategy = Re),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": ue[3] || (ue[3] = (Re) => I.value.torchBackend = Re),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": ue[4] || (ue[4] = (Re) => I.value.switchAfterImport = Re),
            "name-error": T.value,
            onValidateName: ne
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Me = z.value) != null && Me.models_needing_download) ? (a(), R(Yt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${z.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", Nx, [
            C(re, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: h(() => [...ue[13] || (ue[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              size: "md",
              disabled: !G.value,
              onClick: fe
            }, {
              default: h(() => [...ue[14] || (ue[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", Ux, [
          t("p", zx, [
            ue[15] || (ue[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            ue[16] || (ue[16] = b("... ", -1))
          ]),
          C(Un, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ae
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (a(), r("p", Fx, " This may take several minutes. Please wait... ")),
          M.value.error ? (a(), r("div", Bx, [
            t("p", Vx, f(M.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", Wx, [
          t("div", {
            class: Pe(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", Gx, [
            t("div", jx, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Hx, f($.value), 1)
          ]),
          t("div", Kx, [
            C(re, {
              variant: "primary",
              size: "md",
              onClick: A
            }, {
              default: h(() => [...ue[17] || (ue[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Or = /* @__PURE__ */ we(qx, [["__scopeId", "data-v-72cbc04e"]]), Yx = /* @__PURE__ */ he({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (d) => n.value = !0)
          })
        ]),
        content: h(() => [
          C(Or, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(as, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (d) => n.value = !1)
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
}), Jx = /* @__PURE__ */ we(Yx, [["__scopeId", "data-v-e13bfe76"]]), yn = co(), Xx = 5e3, lo = k([]), va = k(!1), pa = k(null);
let Ro = null;
async function wn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Ar(e) {
  const s = N(
    () => lo.value.filter((p) => p.status === "running")
  ), o = N(
    () => lo.value.filter((p) => p.status === "deploying")
  ), n = N(
    () => lo.value.filter((p) => p.status === "stopped")
  ), l = N(
    () => s.value.length + o.value.length
  ), i = N(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...lo.value].sort(
      (_, S) => (p[_.status] ?? 5) - (p[S.status] ?? 5)
    );
  });
  async function c() {
    va.value = !0, pa.value = null;
    try {
      let p;
      if (!yn) {
        const _ = await wn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      lo.value = p.instances;
    } catch (p) {
      pa.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      va.value = !1;
    }
  }
  function d(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const S = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function u(p) {
    try {
      if (!yn) {
        const _ = d(p, "stop"), S = await wn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] stopInstance error:", _), _;
    }
  }
  async function m(p) {
    try {
      if (!yn) {
        const _ = d(p, "start"), S = await wn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] startInstance error:", _), _;
    }
  }
  async function v(p) {
    try {
      if (!yn) {
        const _ = d(p, "terminate"), S = await wn(_, { method: "DELETE" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function g() {
    Ro || (Ro = window.setInterval(c, Xx));
  }
  function w() {
    Ro && (clearInterval(Ro), Ro = null);
  }
  return Ct(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: lo,
    isLoading: va,
    error: pa,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
    // Actions
    refreshInstances: c,
    stopInstance: u,
    startInstance: m,
    terminateInstance: v,
    // Polling
    startPolling: g,
    stopPolling: w
  };
}
const Qx = { class: "instance-header" }, Zx = { class: "provider-badge" }, e3 = { class: "instance-name" }, t3 = {
  key: 0,
  class: "spinner"
}, s3 = { class: "instance-details" }, o3 = {
  key: 0,
  class: "detail"
}, n3 = {
  key: 1,
  class: "detail instance-url"
}, a3 = {
  key: 2,
  class: "detail"
}, l3 = {
  key: 3,
  class: "detail"
}, i3 = {
  key: 4,
  class: "detail total-cost"
}, r3 = {
  key: 0,
  class: "deployment-progress"
}, c3 = { class: "progress-message" }, d3 = { class: "instance-actions" }, u3 = /* @__PURE__ */ he({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = N(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), n = N(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = N(() => `status-${s.instance.status}`);
    function i() {
      s.instance.comfyui_url && window.open(s.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function c() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function d(u) {
      const m = Math.floor(u / 3600), v = Math.floor(u % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (u, m) => (a(), r("div", {
      class: Pe(["instance-card", l.value])
    }, [
      t("div", Qx, [
        t("span", Zx, f(o.value), 1),
        t("span", e3, f(e.instance.name), 1),
        t("span", {
          class: Pe(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", t3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", s3, [
        e.instance.gpu_type ? (a(), r("span", o3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", n3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", a3, f(d(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", l3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", i3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", r3, [
        t("div", c3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), R(Zn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", d3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), R(re, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: h(() => [...m[3] || (m[3] = [
            b(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), R(re, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: h(() => [...m[4] || (m[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), R(re, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => u.$emit("stop", e.instance))
        }, {
          default: h(() => [...m[5] || (m[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), R(re, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => u.$emit("start", e.instance))
        }, {
          default: h(() => [...m[6] || (m[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        C(re, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => u.$emit("terminate", e.instance))
        }, {
          default: h(() => [...m[7] || (m[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), f3 = /* @__PURE__ */ we(u3, [["__scopeId", "data-v-746c3894"]]), m3 = { class: "instances-tab" }, v3 = { class: "instances-header" }, p3 = {
  key: 0,
  class: "loading-state"
}, g3 = {
  key: 1,
  class: "empty-state"
}, h3 = {
  key: 2,
  class: "instances-list"
}, y3 = /* @__PURE__ */ he({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = N(() => {
      const n = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...s.instances].sort(
        (l, i) => (n[l.status] ?? 5) - (n[i.status] ?? 5)
      );
    });
    return (n, l) => (a(), r("div", m3, [
      t("div", v3, [
        C(At, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(re, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: h(() => [...l[5] || (l[5] = [
            b(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), r("div", p3, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", g3, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", h3, [
        (a(!0), r(j, null, be(o.value, (i) => (a(), R(f3, {
          key: i.id,
          instance: i,
          "is-loading": e.actionLoadingId === i.id,
          onStop: l[1] || (l[1] = (c) => n.$emit("stop", c)),
          onStart: l[2] || (l[2] = (c) => n.$emit("start", c)),
          onTerminate: l[3] || (l[3] = (c) => n.$emit("terminate", c))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), w3 = /* @__PURE__ */ we(y3, [["__scopeId", "data-v-ba614fc3"]]), _3 = { class: "remote-header" }, b3 = { class: "remote-info" }, k3 = { class: "remote-icon" }, $3 = { class: "remote-name" }, C3 = {
  key: 0,
  class: "default-badge"
}, x3 = {
  key: 1,
  class: "sync-badge"
}, S3 = {
  key: 0,
  class: "ahead"
}, I3 = {
  key: 1,
  class: "behind"
}, E3 = {
  key: 1,
  class: "synced"
}, T3 = ["href"], P3 = {
  key: 1,
  class: "remote-url-text"
}, R3 = { class: "remote-actions" }, M3 = /* @__PURE__ */ he({
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
    const s = e, o = N(() => s.remote.is_default), n = N(() => {
      const i = s.remote.fetch_url, c = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, c) => (a(), r("div", {
      class: Pe(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", _3, [
        t("div", b3, [
          t("span", k3, f(o.value ? "🔗" : "🌐"), 1),
          t("span", $3, f(e.remote.name), 1),
          o.value ? (a(), r("span", C3, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", x3, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", S3, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", I3, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", E3, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), r("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = it(() => {
          }, ["stop"]))
        }, f(l.value), 9, T3)) : (a(), r("span", P3, f(l.value), 1))
      ]),
      t("div", R3, [
        C(re, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (d) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), R(re, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (d) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(re, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (d) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Nr = /* @__PURE__ */ we(M3, [["__scopeId", "data-v-d687d161"]]), D3 = { class: "runpod-tab" }, L3 = { class: "api-key-card" }, O3 = { class: "api-key-row" }, A3 = { class: "api-key-input-wrapper" }, N3 = ["type", "disabled"], U3 = ["title"], z3 = { class: "status-icon" }, F3 = { class: "status-text" }, B3 = {
  key: 0,
  class: "credit-balance"
}, V3 = { class: "config-card" }, W3 = { class: "config-row" }, G3 = ["disabled"], j3 = {
  key: 0,
  value: ""
}, H3 = {
  key: 1,
  value: "",
  disabled: ""
}, K3 = ["value", "disabled"], q3 = { class: "config-row" }, Y3 = {
  key: 0,
  class: "loading-inline"
}, J3 = { class: "no-volumes-state" }, X3 = { class: "no-volumes-text" }, Q3 = ["value"], Z3 = { class: "config-row" }, e5 = ["disabled"], t5 = {
  key: 0,
  value: ""
}, s5 = {
  key: 1,
  value: ""
}, o5 = {
  key: 2,
  value: ""
}, n5 = ["value"], a5 = { class: "config-row" }, l5 = { class: "radio-group" }, i5 = { class: "radio-option" }, r5 = { class: "radio-label" }, c5 = { class: "radio-option disabled" }, d5 = { class: "radio-label" }, u5 = { class: "config-row" }, f5 = { class: "radio-group" }, m5 = { class: "radio-option" }, v5 = { class: "radio-label" }, p5 = { class: "radio-option disabled" }, g5 = { class: "radio-label" }, h5 = { class: "config-row" }, y5 = {
  key: 0,
  class: "loading-text"
}, w5 = {
  key: 1,
  class: "empty-remotes"
}, _5 = { class: "remotes-list" }, b5 = {
  key: 0,
  class: "sync-warning"
}, k5 = { class: "warning-content" }, $5 = { class: "remotes-footer" }, C5 = { class: "summary-card" }, x5 = {
  key: 0,
  class: "loading-text"
}, S5 = { class: "summary-row" }, I5 = { class: "summary-value" }, E5 = { class: "summary-row" }, T5 = { class: "summary-value" }, P5 = { class: "summary-row" }, R5 = { class: "summary-value" }, M5 = {
  key: 0,
  class: "summary-sub-row"
}, D5 = { class: "summary-sub-label" }, L5 = {
  key: 1,
  class: "summary-sub-row warning"
}, O5 = { class: "summary-sub-label" }, A5 = { class: "summary-row" }, N5 = { class: "summary-value" }, U5 = { class: "summary-row" }, z5 = { class: "summary-value" }, F5 = { class: "deployment-summary" }, B5 = { class: "summary-columns" }, V5 = { class: "summary-column" }, W5 = { class: "pricing-row" }, G5 = { class: "pricing-value" }, j5 = { class: "pricing-row" }, H5 = { class: "pricing-value" }, K5 = { class: "pricing-row" }, q5 = { class: "pricing-value" }, Y5 = { class: "pricing-row total" }, J5 = { class: "pricing-value" }, X5 = { class: "summary-column" }, Q5 = { class: "spec-row" }, Z5 = { class: "spec-row" }, eS = {
  key: 0,
  class: "spec-row"
}, tS = {
  key: 1,
  class: "spec-row spot-warning"
}, sS = {
  key: 4,
  class: "deploy-actions"
}, oS = { class: "progress-content" }, nS = { class: "phase-indicator" }, aS = { key: 0 }, lS = { key: 1 }, iS = { key: 2 }, rS = {
  key: 3,
  class: "spinner"
}, cS = { class: "phase-text" }, dS = { class: "phase-name" }, uS = { class: "phase-detail" }, fS = {
  key: 0,
  class: "ready-actions"
}, mS = { class: "console-link" }, vS = ["href"], pS = /* @__PURE__ */ he({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: c,
      deployToRunPod: d,
      getDeploymentStatus: u,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: g,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: S,
      getDataCenters: $
    } = nt(), P = k(!1), D = k(""), E = k(!1), x = k(!1), W = k(null), V = k(null), z = k(""), I = k(""), T = k(""), M = k("SECURE"), ae = k("ON_DEMAND"), J = k("my-comfyui-deploy"), G = k([]), se = k({}), Q = k(!1), A = k(null), H = k(null), L = k(null), ne = k([]), fe = k(!1), De = k([]), Fe = k(!1), ce = k([]), Se = k(!1), _e = k(null), ye = k(!1), Ce = k(!1), me = k(null), ue = k(!1), Me = k(null), Re = k(null), O = k(null), F = k(!1), te = k(null), ie = k(!1), pe = k(!1), ge = N(() => De.value.find((xe) => xe.id === I.value) || null), Ie = N(() => z.value ? De.value.filter((xe) => xe.data_center_id === z.value) : De.value), Ee = N(() => ce.value.filter((xe) => xe.available)), le = N(() => A.value && se.value[A.value] || null), ve = N(() => {
      if (!A.value) return null;
      const xe = G.value.find((X) => X.name === A.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), Ne = N(() => E.value && I.value && T.value && ve.value && !Ce.value && !F.value), Te = (xe) => {
      const X = ce.value.find((gt) => gt.id === T.value);
      if (!X) return "0.00";
      if (xe === "SECURE") return (X.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (X.communityPrice ?? 0).toFixed(2);
      const He = M.value === "SECURE";
      return xe === "ON_DEMAND" ? He ? (X.securePrice ?? 0).toFixed(2) : (X.communityPrice ?? 0).toFixed(2) : He ? (X.secureSpotPrice ?? 0).toFixed(2) : (X.communitySpotPrice ?? 0).toFixed(2);
    }, ee = N(() => {
      const xe = ce.value.find((ls) => ls.id === T.value), X = De.value.find((ls) => ls.id === I.value);
      if (!xe) return null;
      const He = M.value === "SECURE", gt = ae.value === "SPOT";
      let qt;
      gt ? qt = He ? xe.secureSpotPrice ?? 0 : xe.communitySpotPrice ?? 0 : qt = He ? xe.securePrice ?? 0 : xe.communityPrice ?? 0;
      const ys = X ? X.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: qt,
        volume: ys,
        container: ws,
        total: qt + ys + ws
      };
    });
    async function q() {
      await Ve(), await Promise.all([mt(), Oe()]);
    }
    async function Oe() {
      Q.value = !0;
      try {
        const xe = await w();
        G.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (He) => {
            const gt = await p(He.name);
            gt && (se.value[He.name] = gt);
          })
        );
        const X = xe.remotes.find((He) => He.is_default);
        X ? A.value = X.name : xe.remotes.length > 0 && (A.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function $e(xe) {
      H.value = xe;
      try {
        await _(xe);
        const X = await p(xe);
        X && (se.value[xe] = X), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function ke(xe) {
      L.value = xe;
      try {
        await S(xe, { force: !1 });
        const X = await p(xe);
        X && (se.value[xe] = X), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        L.value = null;
      }
    }
    function B(xe) {
      A.value = xe;
    }
    async function U() {
      if (D.value) {
        x.value = !0, W.value = null;
        try {
          const xe = await l(D.value, !0);
          xe.status === "success" ? (E.value = !0, V.value = xe.credit_balance ?? null, W.value = { type: "success", message: xe.message }, await q()) : W.value = { type: "error", message: xe.message };
        } catch (xe) {
          W.value = {
            type: "error",
            message: xe instanceof Error ? xe.message : "Connection test failed"
          };
        } finally {
          x.value = !1;
        }
      }
    }
    async function de() {
      try {
        await v(), D.value = "", E.value = !1, W.value = null, V.value = null, ne.value = [], z.value = "", De.value = [], I.value = "", ce.value = [], T.value = "", _e.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      Fe.value = !0, fe.value = !0;
      try {
        const xe = await i();
        De.value = xe.volumes;
        const X = /* @__PURE__ */ new Map();
        for (const He of xe.volumes)
          He.data_center_id && !X.has(He.data_center_id) && X.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const He = await $();
          ne.value = He.data_centers;
        } else
          ne.value = Array.from(X.values());
        if (De.value.length > 0) {
          const He = De.value[0];
          I.value = He.id, He.data_center_id && (z.value = He.data_center_id, await Xe(He.data_center_id));
        } else ne.value.length > 0 && (z.value = ne.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Fe.value = !1, fe.value = !1;
      }
    }
    async function Xe(xe) {
      Se.value = !0;
      try {
        const X = await c(xe);
        ce.value = X.gpu_types;
        const He = ce.value.find((gt) => gt.available);
        He ? T.value = He.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Se.value = !1;
      }
    }
    Ct(z, async (xe) => {
      if (!xe || Fe.value) return;
      const X = De.value.find((He) => He.id === I.value);
      X && X.data_center_id !== xe && (I.value = ""), await Xe(xe);
    }), Ct(I, async (xe) => {
      if (!xe) {
        ce.value = [], T.value = "";
        return;
      }
      if (Fe.value) return;
      const X = De.value.find((He) => He.id === xe);
      X && X.data_center_id !== z.value ? z.value = X.data_center_id : X && await Xe(X.data_center_id);
    });
    async function mt() {
      ye.value = !0;
      try {
        _e.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        ye.value = !1;
      }
    }
    async function at() {
      if (!(!T.value || !I.value)) {
        F.value = !0, me.value = null;
        try {
          const xe = await g();
          te.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? pe.value = !0 : await zt() : ie.value = !0;
        } catch (xe) {
          me.value = {
            status: "error",
            message: xe instanceof Error ? xe.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          F.value = !1;
        }
      }
    }
    async function dt() {
      pe.value = !1, await zt();
    }
    async function Rt() {
      try {
        const xe = await g();
        te.value = xe;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function zt() {
      Ce.value = !0;
      try {
        let xe;
        if (ae.value === "SPOT") {
          const He = ce.value.find((gt) => gt.id === T.value);
          He && (xe = M.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const X = await d({
          gpu_type_id: T.value,
          pod_name: J.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: M.value,
          pricing_type: ae.value,
          spot_bid: xe,
          import_source: ve.value
        });
        me.value = X, X.status === "success" && X.pod_id ? (Me.value = X.pod_id, ue.value = !0, Kt(X.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", X.message, "error");
      } catch (xe) {
        me.value = {
          status: "error",
          message: xe instanceof Error ? xe.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ce.value = !1;
      }
    }
    function Kt(xe) {
      Ms(xe), O.value = window.setInterval(() => Ms(xe), 3e3);
    }
    function Ws() {
      O.value && (clearInterval(O.value), O.value = null);
    }
    async function Ms(xe) {
      try {
        const X = await u(xe);
        Re.value = X, (X.phase === "READY" || X.phase === "ERROR" || X.phase === "STOPPED") && (Ws(), X.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (X) {
        console.error("Failed to poll deployment status:", X);
      }
    }
    function no() {
      ue.value = !1, Ws(), Me.value = null, Re.value = null;
    }
    function Co() {
      var xe;
      (xe = Re.value) != null && xe.comfyui_url && window.open(Re.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function xo(xe) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[xe || ""] || "Initializing...";
    }
    function So(xe) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[xe || ""] ?? 10;
    }
    return Ze(async () => {
      try {
        const xe = await m(!0);
        xe.has_key && xe.key_preview && (D.value = `****${xe.key_preview}`, xe.valid ? (E.value = !0, V.value = xe.credit_balance ?? null, W.value = { type: "success", message: "Connected to RunPod" }, await q()) : xe.error && (W.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), (xe, X) => {
      var He, gt, qt, ys, ws, ls;
      return a(), r(j, null, [
        t("div", D3, [
          C(lt, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", L3, [
                t("div", O3, [
                  t("div", A3, [
                    qe(t("input", {
                      "onUpdate:modelValue": X[0] || (X[0] = (Ue) => D.value = Ue),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, N3), [
                      [Xn, D.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: X[1] || (X[1] = (Ue) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, U3)
                  ]),
                  E.value ? y("", !0) : (a(), R(re, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: x.value,
                    disabled: !D.value || x.value,
                    onClick: U
                  }, {
                    default: h(() => [...X[16] || (X[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  E.value ? (a(), R(re, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: de
                  }, {
                    default: h(() => [...X[17] || (X[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                W.value ? (a(), r("div", {
                  key: 0,
                  class: Pe(["connection-status", W.value.type])
                }, [
                  t("span", z3, f(W.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", F3, f(W.value.message), 1),
                  V.value !== null ? (a(), r("span", B3, " $" + f(V.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                X[18] || (X[18] = t("div", { class: "api-key-help" }, [
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
          E.value ? (a(), R(lt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", V3, [
                t("div", W3, [
                  X[19] || (X[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": X[2] || (X[2] = (Ue) => z.value = Ue),
                    class: "config-select",
                    disabled: fe.value
                  }, [
                    fe.value ? (a(), r("option", j3, "Loading...")) : z.value ? y("", !0) : (a(), r("option", H3, "Select a region")),
                    (a(!0), r(j, null, be(ne.value, (Ue) => (a(), r("option", {
                      key: Ue.id,
                      value: Ue.id,
                      disabled: !Ue.available
                    }, f(Ue.id) + " (" + f(Ue.name) + ")" + f(Ue.available ? "" : " [Unavailable]"), 9, K3))), 128))
                  ], 8, G3), [
                    [hs, z.value]
                  ])
                ]),
                t("div", q3, [
                  X[24] || (X[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Fe.value ? (a(), r("div", Y3, "Loading volumes...")) : Ie.value.length === 0 ? (a(), r(j, { key: 1 }, [
                    t("div", J3, [
                      X[20] || (X[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", X3, "No volumes in " + f(z.value || "this region"), 1)
                    ]),
                    X[21] || (X[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    X[22] || (X[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(j, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": X[3] || (X[3] = (Ue) => I.value = Ue),
                      class: "config-select"
                    }, [
                      (a(!0), r(j, null, be(Ie.value, (Ue) => (a(), r("option", {
                        key: Ue.id,
                        value: Ue.id
                      }, f(Ue.name) + " (" + f(Ue.size_gb) + "GB) ", 9, Q3))), 128))
                    ], 512), [
                      [hs, I.value]
                    ]),
                    X[23] || (X[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", Z3, [
                  X[25] || (X[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": X[4] || (X[4] = (Ue) => T.value = Ue),
                    class: "config-select",
                    disabled: Se.value || !I.value
                  }, [
                    I.value ? Se.value ? (a(), r("option", s5, "Loading GPUs...")) : Ee.value.length === 0 ? (a(), r("option", o5, "No GPUs available in this region")) : y("", !0) : (a(), r("option", t5, "Select a volume first")),
                    (a(!0), r(j, null, be(Ee.value, (Ue) => (a(), r("option", {
                      key: Ue.id,
                      value: Ue.id
                    }, f(Ue.displayName) + " (" + f(Ue.memoryInGb) + "GB) - $" + f(M.value === "SECURE" ? (Ue.securePrice ?? 0).toFixed(2) : (Ue.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ue.stockStatus ? `[${Ue.stockStatus}]` : ""), 9, n5))), 128))
                  ], 8, e5), [
                    [hs, T.value]
                  ])
                ]),
                t("div", a5, [
                  X[26] || (X[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", l5, [
                    t("label", i5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[5] || (X[5] = (Ue) => M.value = Ue),
                        value: "SECURE"
                      }, null, 512), [
                        [Xt, M.value]
                      ]),
                      t("span", r5, "Secure ($" + f(Te("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", c5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[6] || (X[6] = (Ue) => M.value = Ue),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Xt, M.value]
                      ]),
                      t("span", d5, "Community ($" + f(Te("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", u5, [
                  X[27] || (X[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", f5, [
                    t("label", m5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[7] || (X[7] = (Ue) => ae.value = Ue),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Xt, ae.value]
                      ]),
                      t("span", v5, "On-Demand ($" + f(Te("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", p5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[8] || (X[8] = (Ue) => ae.value = Ue),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Xt, ae.value]
                      ]),
                      t("span", g5, "Spot ($" + f(Te("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", h5, [
                  X[28] || (X[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": X[9] || (X[9] = (Ue) => J.value = Ue),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Ut, J.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value ? (a(), R(lt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              Q.value ? (a(), r("div", y5, "Loading remotes...")) : G.value.length === 0 ? (a(), r("div", w5, [
                X[30] || (X[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(re, {
                  variant: "primary",
                  size: "xs",
                  onClick: X[10] || (X[10] = (Ue) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...X[29] || (X[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(j, { key: 2 }, [
                t("div", _5, [
                  (a(!0), r(j, null, be(G.value, (Ue) => (a(), R(Nr, {
                    key: Ue.name,
                    remote: Ue,
                    "sync-status": se.value[Ue.name],
                    "is-selected": A.value === Ue.name,
                    "is-fetching": H.value === Ue.name,
                    "is-pushing": L.value === Ue.name,
                    onFetch: $e,
                    onPush: ke,
                    onSelect: B
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                le.value && le.value.ahead > 0 ? (a(), r("div", b5, [
                  X[31] || (X[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", k5, [
                    t("strong", null, f(le.value.ahead) + " unpushed commit" + f(le.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(A.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(re, {
                    variant: "primary",
                    size: "xs",
                    loading: L.value === A.value,
                    onClick: X[11] || (X[11] = (Ue) => A.value && ke(A.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", $5, [
                  C(re, {
                    variant: "link",
                    size: "xs",
                    onClick: X[12] || (X[12] = (Ue) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...X[32] || (X[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          E.value ? (a(), R(lt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", C5, [
                ye.value ? (a(), r("div", x5, "Loading environment summary...")) : _e.value ? (a(), r(j, { key: 1 }, [
                  t("div", S5, [
                    X[33] || (X[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", I5, f(_e.value.comfyui_version), 1)
                  ]),
                  t("div", E5, [
                    X[34] || (X[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", T5, f(_e.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", P5, [
                    X[35] || (X[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", R5, f(_e.value.model_count) + " models", 1)
                  ]),
                  _e.value.models_with_sources > 0 ? (a(), r("div", M5, [
                    t("span", D5, "└─ " + f(_e.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  _e.value.models_without_sources > 0 ? (a(), r("div", L5, [
                    t("span", O5, "└─ " + f(_e.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", A5, [
                    X[36] || (X[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", N5, f(_e.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", U5, [
                    X[37] || (X[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", z5, "~" + f(_e.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value && ee.value ? (a(), R(lt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ue, is;
              return [
                t("div", F5, [
                  t("div", B5, [
                    t("div", V5, [
                      X[42] || (X[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", W5, [
                        X[38] || (X[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", G5, "$" + f(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", j5, [
                        X[39] || (X[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", H5, "$" + f(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", K5, [
                        X[40] || (X[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", q5, "$" + f(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      X[43] || (X[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", Y5, [
                        X[41] || (X[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", J5, "~$" + f(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", X5, [
                      X[45] || (X[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", Q5, [
                        t("span", null, f(((Ue = ce.value.find((oe) => oe.id === T.value)) == null ? void 0 : Ue.displayName) || "GPU") + " (" + f(((is = ce.value.find((oe) => oe.id === T.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Z5, [
                        t("span", null, "Region: " + f(z.value), 1)
                      ]),
                      ge.value ? (a(), r("div", eS, [
                        t("span", null, "Volume: " + f(ge.value.name), 1)
                      ])) : y("", !0),
                      ae.value === "SPOT" ? (a(), r("div", tS, [...X[44] || (X[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          E.value ? (a(), r("div", sS, [
            C(re, {
              variant: "primary",
              size: "md",
              loading: F.value || Ce.value,
              disabled: !Ne.value,
              onClick: at
            }, {
              default: h(() => [
                X[46] || (X[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + f(F.value ? "Validating..." : Ce.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          me.value ? (a(), R(lt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              C(Et, {
                status: me.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(me.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(me.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(me.value.message), 1)
                ]),
                actions: h(() => [
                  C(re, {
                    variant: "ghost",
                    size: "xs",
                    onClick: X[13] || (X[13] = (Ue) => me.value = null)
                  }, {
                    default: h(() => [...X[47] || (X[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                me.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    C(ut, {
                      label: "Pod ID:",
                      value: me.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ue.value ? (a(), R(vt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Re.value) == null ? void 0 : He.phase) === "READY" || ((gt = Re.value) == null ? void 0 : gt.phase) === "ERROR" || ((qt = Re.value) == null ? void 0 : qt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var Ue, is, oe, K, Ae, je, st, ft, Mt, rs, Gs, js;
            return [
              t("div", oS, [
                t("div", nS, [
                  t("div", {
                    class: Pe(["phase-icon", (is = (Ue = Re.value) == null ? void 0 : Ue.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((oe = Re.value) == null ? void 0 : oe.phase) === "READY" ? (a(), r("span", aS, "✓")) : ((K = Re.value) == null ? void 0 : K.phase) === "ERROR" ? (a(), r("span", lS, "✕")) : ((Ae = Re.value) == null ? void 0 : Ae.phase) === "STOPPED" ? (a(), r("span", iS, "○")) : (a(), r("span", rS, "⟳"))
                  ], 2),
                  t("div", cS, [
                    t("div", dS, f(xo((je = Re.value) == null ? void 0 : je.phase)), 1),
                    t("div", uS, f(((st = Re.value) == null ? void 0 : st.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(Zn, {
                  progress: So((ft = Re.value) == null ? void 0 : ft.phase),
                  variant: ((Mt = Re.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((rs = Re.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = Re.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), r("div", fS, [
                  C(re, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...X[48] || (X[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", mS, [
                  (js = Re.value) != null && js.console_url ? (a(), r("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, vS)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Re.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Re.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Re.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: no
              }, {
                default: h(() => [...X[49] || (X[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ie.value && te.value ? (a(), R(Dr, {
          key: 1,
          issues: te.value.blocking_issues,
          onClose: X[14] || (X[14] = (Ue) => ie.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        pe.value && te.value ? (a(), R(Lr, {
          key: 2,
          models: te.value.warnings.models_without_sources,
          onConfirm: dt,
          onCancel: X[15] || (X[15] = (Ue) => pe.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), gS = /* @__PURE__ */ we(pS, [["__scopeId", "data-v-522cd4d9"]]), hS = { class: "worker-header" }, yS = { class: "worker-status" }, wS = { class: "worker-name" }, _S = { class: "worker-actions" }, bS = { class: "worker-details" }, kS = { class: "detail-item" }, $S = { class: "detail-value" }, CS = {
  key: 0,
  class: "detail-item"
}, xS = { class: "detail-value" }, SS = {
  key: 1,
  class: "detail-item"
}, IS = { class: "detail-value mode-badge" }, ES = {
  key: 0,
  class: "worker-stats"
}, TS = {
  key: 0,
  class: "stat-item"
}, PS = { key: 0 }, RS = {
  key: 1,
  class: "worker-stats offline"
}, MS = /* @__PURE__ */ he({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Pe(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", hS, [
        t("div", yS, [
          t("span", {
            class: Pe(["status-dot", e.worker.status])
          }, null, 2),
          t("span", wS, f(e.worker.name), 1)
        ]),
        t("div", _S, [
          e.worker.status === "online" ? (a(), R(re, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => s.$emit("deploy", e.worker))
          }, {
            default: h(() => [...o[2] || (o[2] = [
              b(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => s.$emit("remove", e.worker.name))
          }, {
            default: h(() => [...o[3] || (o[3] = [
              b(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", bS, [
        t("span", kS, [
          t("span", $S, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", CS, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", xS, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", SS, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", IS, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", ES, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", TS, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", PS, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", RS, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), DS = /* @__PURE__ */ we(MS, [["__scopeId", "data-v-b1be7134"]]), LS = { class: "add-worker-content" }, OS = { class: "manual-form" }, AS = { class: "form-row" }, NS = { class: "form-row-inline" }, US = { class: "form-field flex-2" }, zS = { class: "form-field flex-1" }, FS = { class: "form-row" }, BS = { class: "api-key-wrapper" }, VS = ["type"], WS = { class: "result-icon" }, GS = { class: "result-content" }, jS = { class: "result-message" }, HS = {
  key: 0,
  class: "result-detail"
}, KS = { class: "modal-actions" }, qS = /* @__PURE__ */ he({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = nt(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), d = k(!1), u = k(null), m = N(() => l.host && l.port && l.apiKey), v = N(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
      if (m.value) {
        c.value = !0, u.value = null;
        try {
          const p = await n({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          p.status === "success" ? (u.value = {
            type: "success",
            message: p.message,
            gpu_info: p.gpu_info
          }, !l.name && p.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : u.value = {
            type: "error",
            message: p.message
          };
        } catch (p) {
          u.value = {
            type: "error",
            message: p instanceof Error ? p.message : "Connection test failed"
          };
        } finally {
          c.value = !1;
        }
      }
    }
    function w() {
      v.value && (d.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (p, _) => (a(), R(vt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", LS, [
          t("div", OS, [
            t("div", AS, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (S) => l.name = S),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Ut, l.name]
              ])
            ]),
            t("div", NS, [
              t("div", US, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (S) => l.host = S),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Ut, l.host]
                ])
              ]),
              t("div", zS, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (S) => l.port = S),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Ut,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", FS, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", BS, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, VS), [
                  [Xn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (S) => i.value = !i.value),
                  type: "button"
                }, f(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              _[10] || (_[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            u.value ? (a(), r("div", {
              key: 0,
              class: Pe(["test-result", u.value.type])
            }, [
              t("span", WS, f(u.value.type === "success" ? "✓" : "✕"), 1),
              t("div", GS, [
                t("span", jS, f(u.value.message), 1),
                u.value.gpu_info ? (a(), r("span", HS, "GPU: " + f(u.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", KS, [
          C(re, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !m.value || c.value,
            onClick: g
          }, {
            default: h(() => [..._[11] || (_[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "primary",
            size: "sm",
            loading: d.value,
            disabled: !v.value || d.value,
            onClick: w
          }, {
            default: h(() => [..._[12] || (_[12] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), YS = /* @__PURE__ */ we(qS, [["__scopeId", "data-v-07a00732"]]), JS = { class: "discovered-content" }, XS = {
  key: 0,
  class: "workers-list"
}, QS = { class: "worker-info" }, ZS = { class: "worker-name" }, e8 = { class: "worker-address" }, t8 = {
  key: 0,
  class: "worker-gpu"
}, s8 = {
  key: 1,
  class: "empty-state"
}, o8 = {
  key: 2,
  class: "api-key-section"
}, n8 = { class: "selected-worker" }, a8 = { class: "selected-name" }, l8 = { class: "selected-address" }, i8 = { class: "form-row" }, r8 = { class: "api-key-wrapper" }, c8 = ["type"], d8 = { class: "result-icon" }, u8 = { class: "result-message" }, f8 = { class: "modal-actions" }, m8 = /* @__PURE__ */ he({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = nt(), l = k(null), i = k(""), c = k(!1), d = k(!1), u = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await _t(), (p = u.value) == null || p.focus();
    }
    async function g() {
      if (!(!l.value || !i.value)) {
        d.value = !0, m.value = null;
        try {
          const w = await n({
            host: l.value.host,
            port: l.value.port,
            api_key: i.value
          });
          w.status === "success" ? o("add", {
            name: l.value.name,
            host: l.value.host,
            port: l.value.port,
            api_key: i.value
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
          d.value = !1;
        }
      }
    }
    return (w, p) => (a(), R(vt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", JS, [
          e.workers.length > 0 ? (a(), r("div", XS, [
            (a(!0), r(j, null, be(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", QS, [
                t("span", ZS, f(_.name), 1),
                t("span", e8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", t8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(re, {
                variant: "primary",
                size: "xs",
                onClick: (S) => v(_)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", s8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", o8, [
            t("div", n8, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", a8, f(l.value.name), 1),
              t("span", l8, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", i8, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", r8, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: u,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Zt(g, ["enter"])
                }, null, 40, c8), [
                  [Xn, i.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (_) => c.value = !c.value),
                  type: "button"
                }, f(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), r("div", {
              key: 0,
              class: Pe(["test-result", m.value.type])
            }, [
              t("span", d8, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", u8, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", f8, [
          l.value ? (a(), R(re, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (_) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: h(() => [...p[9] || (p[9] = [
              b(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), R(re, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: d.value,
            disabled: !i.value || d.value,
            onClick: g
          }, {
            default: h(() => [...p[10] || (p[10] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), v8 = /* @__PURE__ */ we(m8, [["__scopeId", "data-v-5a3e40a4"]]), p8 = { class: "deploy-content" }, g8 = { class: "section" }, h8 = {
  key: 0,
  class: "loading-text"
}, y8 = {
  key: 1,
  class: "empty-remotes"
}, w8 = {
  key: 2,
  class: "remotes-list"
}, _8 = { class: "section" }, b8 = { class: "mode-options" }, k8 = { class: "mode-option" }, $8 = ["disabled"], C8 = { class: "mode-option" }, x8 = { class: "section" }, S8 = {
  key: 0,
  class: "section"
}, I8 = { class: "summary-row" }, E8 = {
  key: 1,
  class: "sync-warning"
}, T8 = { class: "warning-content" }, P8 = { class: "modal-actions" }, R8 = /* @__PURE__ */ he({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getRemotes: l,
      getRemoteSyncStatus: i,
      fetchRemote: c,
      pushToRemote: d,
      getDeploySummary: u,
      deployToWorker: m
    } = nt(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), D = k(null), E = k(!1), x = N(() => p.value && g.value[p.value] || null), W = N(() => {
      if (!p.value) return null;
      const G = v.value.find((se) => se.name === p.value);
      return (G == null ? void 0 : G.fetch_url) || null;
    }), V = N(() => W.value && !E.value);
    async function z() {
      w.value = !0;
      try {
        const G = await l();
        v.value = G.remotes, await Promise.all(
          G.remotes.map(async (Q) => {
            const A = await i(Q.name);
            A && (g.value[Q.name] = A);
          })
        );
        const se = G.remotes.find((Q) => Q.is_default);
        se ? p.value = se.name : G.remotes.length > 0 && (p.value = G.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        D.value = await u();
      } catch {
      }
    }
    async function T(G) {
      _.value = G;
      try {
        await c(G);
        const se = await i(G);
        se && (g.value[G] = se), n("toast", `Fetched from ${G}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function M(G) {
      S.value = G;
      try {
        await d(G, { force: !1 });
        const se = await i(G);
        se && (g.value[G] = se), n("toast", `Pushed to ${G}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function ae(G) {
      p.value = G;
    }
    async function J() {
      if (W.value) {
        E.value = !0;
        try {
          const G = await m(o.worker.name, {
            import_source: W.value,
            mode: $.value,
            name: P.value || void 0
          });
          G.id ? (n("toast", `Deployment started: ${G.name || G.id}`, "success"), n("deployed")) : G.status === "error" ? n("toast", G.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (G) {
          n("toast", G instanceof Error ? G.message : "Deployment failed", "error");
        } finally {
          E.value = !1;
        }
      }
    }
    return Ze(() => {
      z(), I();
    }), (G, se) => (a(), R(vt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: se[5] || (se[5] = (Q) => G.$emit("close"))
    }, {
      body: h(() => [
        t("div", p8, [
          t("div", g8, [
            se[7] || (se[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", h8, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", y8, [...se[6] || (se[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", w8, [
              (a(!0), r(j, null, be(v.value, (Q) => (a(), R(Nr, {
                key: Q.name,
                remote: Q,
                "sync-status": g.value[Q.name],
                "is-selected": p.value === Q.name,
                "is-fetching": _.value === Q.name,
                "is-pushing": S.value === Q.name,
                onFetch: T,
                onPush: M,
                onSelect: ae
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", _8, [
            se[10] || (se[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", b8, [
              t("label", k8, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[0] || (se[0] = (Q) => $.value = Q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, $8), [
                  [Xt, $.value]
                ]),
                se[8] || (se[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", C8, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[1] || (se[1] = (Q) => $.value = Q),
                  value: "native"
                }, null, 512), [
                  [Xt, $.value]
                ]),
                se[9] || (se[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", x8, [
            se[11] || (se[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": se[2] || (se[2] = (Q) => P.value = Q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Ut, P.value]
            ])
          ]),
          D.value ? (a(), r("div", S8, [
            se[12] || (se[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", I8, " ComfyUI: " + f(D.value.comfyui_version) + " • " + f(D.value.node_count) + " nodes • " + f(D.value.model_count) + " models • " + f(D.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          x.value && x.value.ahead > 0 ? (a(), r("div", E8, [
            se[14] || (se[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", T8, [
              t("strong", null, f(x.value.ahead) + " unpushed commit" + f(x.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(re, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: se[3] || (se[3] = (Q) => p.value && M(p.value))
            }, {
              default: h(() => [...se[13] || (se[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", P8, [
          C(re, {
            variant: "ghost",
            size: "sm",
            onClick: se[4] || (se[4] = (Q) => G.$emit("close"))
          }, {
            default: h(() => [...se[15] || (se[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(re, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !V.value || E.value,
            onClick: J
          }, {
            default: h(() => [...se[16] || (se[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), M8 = /* @__PURE__ */ we(R8, [["__scopeId", "data-v-c12720d3"]]), D8 = { class: "custom-tab" }, L8 = { class: "section-header" }, O8 = { class: "section-actions" }, A8 = { class: "workers-content" }, N8 = {
  key: 0,
  class: "loading-state"
}, U8 = {
  key: 1,
  class: "empty-state"
}, z8 = {
  key: 2,
  class: "workers-list"
}, F8 = { class: "scan-icon" }, B8 = { class: "scan-message" }, V8 = /* @__PURE__ */ he({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = nt(), d = k([]), u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), S = k(null);
    async function $() {
      m.value = !0;
      try {
        const z = await n();
        d.value = z.workers;
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const z = await c(), I = z.discovered.filter(
          (T) => !d.value.some((M) => M.host === T.host && M.port === T.port)
        );
        u.value = I, I.length > 0 ? p.value = !0 : z.discovered.length > 0 ? S.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : S.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function D(z) {
      try {
        await l(z), o("toast", `Worker '${z.name}' added`, "success"), w.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function E(z) {
      try {
        await l(z), o("toast", `Worker '${z.name}' added`, "success"), p.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function x(z) {
      g.value = z;
      try {
        await i(z), o("toast", `Worker '${z}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function W(z) {
      _.value = z;
    }
    function V() {
      _.value = null, o("deployed");
    }
    return Ze(() => {
      $();
    }), (z, I) => (a(), r("div", D8, [
      t("div", L8, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", O8, [
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: h(() => [...I[6] || (I[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (T) => w.value = !0)
          }, {
            default: h(() => [...I[7] || (I[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", A8, [
        m.value && d.value.length === 0 ? (a(), r("div", N8, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : d.value.length === 0 ? (a(), r("div", U8, [...I[10] || (I[10] = [
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
        ])])) : (a(), r("div", z8, [
          (a(!0), r(j, null, be(d.value, (T) => (a(), R(DS, {
            key: T.name,
            worker: T,
            "is-action-loading": g.value === T.name,
            onDeploy: W,
            onRemove: x
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), r("div", {
        key: 0,
        class: Pe(["scan-result", S.value.type])
      }, [
        t("span", F8, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", B8, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (T) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), R(v8, {
        key: 1,
        workers: u.value,
        onClose: I[2] || (I[2] = (T) => p.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), R(YS, {
        key: 2,
        onClose: I[3] || (I[3] = (T) => w.value = !1),
        onAdd: D
      })) : y("", !0),
      _.value ? (a(), R(M8, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (T) => _.value = null),
        onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
        onDeployed: V
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), W8 = /* @__PURE__ */ we(V8, [["__scopeId", "data-v-1637dead"]]), ga = "ComfyGit.Deploy.GitHubPAT";
function Ur(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function G8(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function j8() {
  function e() {
    try {
      return localStorage.getItem(ga);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ga, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ga);
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
    isRemoteSsh: Ur,
    isRemoteHttps: G8
  };
}
const H8 = { class: "settings-content" }, K8 = { class: "settings-section" }, q8 = {
  key: 0,
  class: "ssh-warning"
}, Y8 = { class: "form-row" }, J8 = { class: "token-wrapper" }, X8 = ["type"], Q8 = { class: "result-icon" }, Z8 = { class: "result-message" }, e4 = { class: "token-actions" }, t4 = /* @__PURE__ */ he({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = j8(), { getRemotes: d, testGitAuth: u } = nt(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = N(() => c());
    Ze(async () => {
      var E;
      const D = n();
      D && (m.value = D);
      try {
        const W = (E = (await d()).remotes) == null ? void 0 : E.find((V) => V.name === "origin");
        W && Ur(W.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const D = await u(m.value);
          w.value = {
            type: D.status === "success" ? "success" : "error",
            message: D.message
          };
        } catch (D) {
          w.value = {
            type: "error",
            message: D instanceof Error ? D.message : "Connection test failed"
          };
        } finally {
          g.value = !1;
        }
      }
    }
    function $() {
      m.value && (l(m.value), o("saved"), o("close"));
    }
    function P() {
      i(), m.value = "", w.value = null;
    }
    return (D, E) => (a(), R(vt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: E[2] || (E[2] = (x) => D.$emit("close"))
    }, {
      body: h(() => [
        t("div", H8, [
          t("div", K8, [
            E[8] || (E[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", q8, [...E[3] || (E[3] = [
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
            ])])) : y("", !0),
            t("div", Y8, [
              E[4] || (E[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", J8, [
                qe(t("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (x) => m.value = x),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, X8), [
                  [Xn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: E[1] || (E[1] = (x) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              E[5] || (E[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Pe(["test-result", w.value.type])
            }, [
              t("span", Q8, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", Z8, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", e4, [
              C(re, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: S
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), R(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: h(() => [...E[7] || (E[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        C(re, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: $
        }, {
          default: h(() => [...E[10] || (E[10] = [
            b(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), s4 = /* @__PURE__ */ we(t4, [["__scopeId", "data-v-b21588ad"]]), o4 = /* @__PURE__ */ he({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: c,
      stopInstance: d,
      startInstance: u,
      terminateInstance: m,
      startPolling: v,
      stopPolling: g
    } = Ar(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = N(() => [
      {
        id: "instances",
        label: "Instances",
        badge: i.value > 0 ? String(i.value) : void 0
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
    async function D(z) {
      S.value = z.id;
      try {
        await d(z), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function E(z) {
      S.value = z.id;
      try {
        await u(z), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function x(z) {
      $.value = z;
    }
    async function W() {
      const z = $.value;
      if (z) {
        $.value = null, S.value = z.id;
        try {
          await m(z), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          S.value = null;
        }
      }
    }
    async function V() {
      await c(), _.value = "instances";
    }
    return Ze(() => {
      c(), v();
    }), oo(() => {
      g();
    }), (z, I) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (T) => p.value = !0)
              }, {
                default: h(() => [...I[10] || (I[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(Er, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (T) => _.value = T),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), R(w3, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": S.value,
            onRefresh: We(c),
            onStop: D,
            onStart: E,
            onTerminate: x
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), R(gS, {
            key: 1,
            onToast: I[3] || (I[3] = (T, M) => o("toast", T, M)),
            onNavigate: I[4] || (I[4] = (T) => o("navigate", T)),
            onDeployed: V
          })) : y("", !0),
          _.value === "custom" ? (a(), R(W8, {
            key: 2,
            onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
            onDeployed: V
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), R(ol, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: W,
        onCancel: I[6] || (I[6] = (T) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (T) => w.value = !1)
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
      p.value ? (a(), R(s4, {
        key: 1,
        onClose: I[8] || (I[8] = (T) => p.value = !1),
        onSaved: I[9] || (I[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), n4 = /* @__PURE__ */ we(o4, [["__scopeId", "data-v-d4e32a10"]]), a4 = { class: "header-info" }, l4 = { class: "commit-hash" }, i4 = {
  key: 0,
  class: "commit-refs"
}, r4 = { class: "commit-message" }, c4 = { class: "commit-date" }, d4 = {
  key: 0,
  class: "loading"
}, u4 = {
  key: 1,
  class: "changes-section"
}, f4 = { class: "stats-row" }, m4 = { class: "stat" }, v4 = { class: "stat insertions" }, p4 = { class: "stat deletions" }, g4 = {
  key: 0,
  class: "change-group"
}, h4 = {
  key: 1,
  class: "change-group"
}, y4 = {
  key: 0,
  class: "version"
}, w4 = {
  key: 2,
  class: "change-group"
}, _4 = { class: "change-item" }, b4 = /* @__PURE__ */ he({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = nt(), n = k(null), l = k(!0), i = N(() => {
      if (!n.value) return !1;
      const d = n.value.changes.workflows;
      return d.added.length > 0 || d.modified.length > 0 || d.deleted.length > 0;
    }), c = N(() => {
      if (!n.value) return !1;
      const d = n.value.changes.nodes;
      return d.added.length > 0 || d.removed.length > 0;
    });
    return Ze(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (d, u) => (a(), R(vt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => d.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", a4, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", l4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", i4, [
              (a(!0), r(j, null, be(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Le, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (p) => d.$emit("close"))
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
        ];
      }),
      body: h(() => {
        var m, v;
        return [
          t("div", r4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", c4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", d4, "Loading details...")) : n.value ? (a(), r("div", u4, [
            t("div", f4, [
              t("span", m4, f(n.value.stats.files_changed) + " files", 1),
              t("span", v4, "+" + f(n.value.stats.insertions), 1),
              t("span", p4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", g4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[6] || (u[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, be(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, be(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, be(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", h4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[10] || (u[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, be(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", y4, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(j, null, be(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", w4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[13] || (u[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", _4, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        C(Le, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => d.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...u[15] || (u[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Le, {
          variant: "primary",
          onClick: u[2] || (u[2] = (m) => d.$emit("checkout", e.commit))
        }, {
          default: h(() => [...u[16] || (u[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), k4 = /* @__PURE__ */ we(b4, [["__scopeId", "data-v-d256ff6d"]]), $4 = { class: "base-textarea-wrapper" }, C4 = ["value", "rows", "placeholder", "disabled", "maxlength"], x4 = {
  key: 0,
  class: "base-textarea-count"
}, S4 = /* @__PURE__ */ he({
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
    function l(i) {
      i.shiftKey || i.ctrlKey || i.metaKey || o.submitOnEnter && (i.preventDefault(), n("submit"));
    }
    return (i, c) => (a(), r("div", $4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (d) => i.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          c[1] || (c[1] = Zt(it((d) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Zt(it((d) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Zt(l, ["enter"])
        ]
      }, null, 40, C4),
      e.showCharCount && e.maxLength ? (a(), r("div", x4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Zl = /* @__PURE__ */ we(S4, [["__scopeId", "data-v-c6d16c93"]]), I4 = ["checked", "disabled"], E4 = { class: "base-checkbox-box" }, T4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, P4 = {
  key: 0,
  class: "base-checkbox-label"
}, R4 = /* @__PURE__ */ he({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: Pe(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, I4),
      t("span", E4, [
        e.modelValue ? (a(), r("svg", T4, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", P4, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ we(R4, [["__scopeId", "data-v-bf17c831"]]), M4 = { class: "popover-header" }, D4 = { class: "popover-body" }, L4 = {
  key: 0,
  class: "changes-summary"
}, O4 = {
  key: 0,
  class: "change-item"
}, A4 = {
  key: 1,
  class: "change-item"
}, N4 = {
  key: 2,
  class: "change-item"
}, U4 = {
  key: 3,
  class: "change-item"
}, z4 = {
  key: 4,
  class: "change-item"
}, F4 = {
  key: 5,
  class: "change-item"
}, B4 = {
  key: 1,
  class: "no-changes"
}, V4 = {
  key: 2,
  class: "loading"
}, W4 = {
  key: 3,
  class: "issues-error"
}, G4 = { class: "error-header" }, j4 = { class: "error-title" }, H4 = { class: "issues-list" }, K4 = { class: "workflow-state" }, q4 = { class: "message-section" }, Y4 = { class: "popover-footer" }, J4 = {
  key: 1,
  class: "commit-popover"
}, X4 = { class: "popover-header" }, Q4 = { class: "popover-body" }, Z4 = {
  key: 0,
  class: "changes-summary"
}, e6 = {
  key: 0,
  class: "change-item"
}, t6 = {
  key: 1,
  class: "change-item"
}, s6 = {
  key: 2,
  class: "change-item"
}, o6 = {
  key: 3,
  class: "change-item"
}, n6 = {
  key: 4,
  class: "change-item"
}, a6 = {
  key: 5,
  class: "change-item"
}, l6 = {
  key: 1,
  class: "no-changes"
}, i6 = {
  key: 2,
  class: "loading"
}, r6 = {
  key: 3,
  class: "issues-error"
}, c6 = { class: "error-header" }, d6 = { class: "error-title" }, u6 = { class: "issues-list" }, f6 = { class: "workflow-state" }, m6 = { class: "message-section" }, v6 = { class: "popover-footer" }, p6 = /* @__PURE__ */ he({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = nt(), i = k(""), c = k(!1), d = k(!1), u = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), v = N(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), g = N(() => v.value.length > 0), w = N(() => g.value && !d.value);
    async function p() {
      var _, S, $, P;
      if (!(g.value && !d.value) && !(!u.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const D = await l(i.value.trim(), d.value);
          if (D.status === "success") {
            const E = `Committed: ${((_ = D.summary) == null ? void 0 : _.new) || 0} new, ${((S = D.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = D.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: E });
          } else if (D.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (D.status === "blocked") {
            const E = ((P = D.issues) == null ? void 0 : P.map((x) => `${x.name}: ${x.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: D.message || "Commit failed" });
        } catch (D) {
          n("committed", { success: !1, message: D instanceof Error ? D.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, S) => e.asModal ? (a(), R(yt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = it(() => {
          }, ["stop"]))
        }, [
          t("div", M4, [
            S[11] || (S[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = ($) => n("close"))
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
          t("div", D4, [
            e.status && u.value ? (a(), r("div", L4, [
              e.status.workflows.new.length ? (a(), r("div", O4, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", A4, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", N4, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", U4, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", z4, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", F4, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", B4, " No changes to commit ")) : (a(), r("div", V4, " Loading... ")),
            g.value ? (a(), r("div", W4, [
              t("div", G4, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", j4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", H4, [
                (a(!0), r(j, null, be(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", K4, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Ma, {
                modelValue: d.value,
                "onUpdate:modelValue": S[1] || (S[1] = ($) => d.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...S[19] || (S[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", q4, [
              C(Zl, {
                modelValue: i.value,
                "onUpdate:modelValue": S[2] || (S[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", Y4, [
            C(Le, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Le, {
              variant: d.value ? "danger" : "primary",
              disabled: !u.value || !i.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: h(() => [
                b(f(c.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", J4, [
      t("div", X4, [
        S[22] || (S[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = ($) => n("close"))
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
      t("div", Q4, [
        e.status && u.value ? (a(), r("div", Z4, [
          e.status.workflows.new.length ? (a(), r("div", e6, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", t6, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", s6, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", o6, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", n6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", a6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", l6, " No changes to commit ")) : (a(), r("div", i6, " Loading... ")),
        g.value ? (a(), r("div", r6, [
          t("div", c6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", d6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", u6, [
            (a(!0), r(j, null, be(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", f6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Ma, {
            modelValue: d.value,
            "onUpdate:modelValue": S[7] || (S[7] = ($) => d.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...S[30] || (S[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", m6, [
          C(Zl, {
            modelValue: i.value,
            "onUpdate:modelValue": S[8] || (S[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", v6, [
        C(Le, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Le, {
          variant: d.value ? "danger" : "primary",
          disabled: !u.value || !i.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: h(() => [
            b(f(c.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), zr = /* @__PURE__ */ we(p6, [["__scopeId", "data-v-5f897631"]]), g6 = { class: "modal-header" }, h6 = { class: "modal-body" }, y6 = { class: "switch-message" }, w6 = { class: "switch-details" }, _6 = { class: "modal-actions" }, b6 = /* @__PURE__ */ he({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(yt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", g6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", h6, [
            t("p", y6, [
              o[6] || (o[6] = b(" Switch from ", -1)),
              t("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = b(" to ", -1)),
              t("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = b("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", w6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", _6, [
            C(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: h(() => [...o[12] || (o[12] = [
                b(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), k6 = /* @__PURE__ */ we(b6, [["__scopeId", "data-v-e9c5253e"]]), $6 = {
  key: 0,
  class: "modal-overlay"
}, C6 = { class: "modal-content" }, x6 = { class: "modal-body" }, S6 = { class: "progress-info" }, I6 = { class: "progress-percentage" }, E6 = { class: "progress-state" }, T6 = { class: "switch-steps" }, P6 = { class: "step-icon" }, R6 = { class: "step-label" }, M6 = /* @__PURE__ */ he({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = N(() => {
      const i = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return s.message || i[s.state] || s.state;
    }), n = N(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = N(() => {
      const i = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = i.findIndex((d) => d.state === s.state);
      return i.map((d, u) => {
        let m = "pending", v = "○";
        return u < c ? (m = "completed", v = "✓") : u === c && (m = "active", v = "⟳"), {
          ...d,
          status: m,
          icon: v
        };
      });
    });
    return (i, c) => (a(), R(yt, { to: "body" }, [
      e.show ? (a(), r("div", $6, [
        t("div", C6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", x6, [
            C(Zn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", S6, [
              t("div", I6, f(e.progress) + "%", 1),
              t("div", E6, f(o.value), 1)
            ]),
            t("div", T6, [
              (a(!0), r(j, null, be(l.value, (d) => (a(), r("div", {
                key: d.state,
                class: Pe(["switch-step", d.status])
              }, [
                t("span", P6, f(d.icon), 1),
                t("span", R6, f(d.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), D6 = /* @__PURE__ */ we(M6, [["__scopeId", "data-v-768a5078"]]), L6 = { class: "modal-header" }, O6 = { class: "modal-body" }, A6 = {
  key: 0,
  class: "node-section"
}, N6 = { class: "node-list" }, U6 = {
  key: 1,
  class: "node-section"
}, z6 = { class: "node-list" }, F6 = { class: "modal-actions" }, B6 = /* @__PURE__ */ he({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(yt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", L6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", O6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", A6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", N6, [
                (a(!0), r(j, null, be(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", U6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", z6, [
                (a(!0), r(j, null, be(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", F6, [
            C(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), V6 = /* @__PURE__ */ we(B6, [["__scopeId", "data-v-7cad7518"]]), W6 = [
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
], G6 = "v0.0.16", j6 = "Akatz", H6 = { class: "social-buttons" }, K6 = ["title", "aria-label", "onClick"], q6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Y6 = ["d"], J6 = ["title", "aria-label", "onClick"], X6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q6 = ["d"], Z6 = /* @__PURE__ */ he({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", H6, [
      (a(!0), r(j, null, be(We(W6), (l) => (a(), r(j, {
        key: l.id
      }, [
        l.label ? (a(), r("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          b(f(l.label) + " ", 1),
          (a(), r("svg", q6, [
            t("path", {
              d: l.iconPath
            }, null, 8, Y6)
          ]))
        ], 8, K6)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", X6, [
            t("path", {
              d: l.iconPath
            }, null, 8, Q6)
          ]))
        ], 8, J6))
      ], 64))), 128))
    ]));
  }
}), Fr = /* @__PURE__ */ we(Z6, [["__scopeId", "data-v-4f846342"]]), eI = { class: "footer-info" }, tI = { class: "version" }, sI = { class: "made-by" }, oI = /* @__PURE__ */ he({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", eI, [
      t("span", tI, f(We(G6)), 1),
      t("span", sI, [
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
        b(" by " + f(We(j6)), 1)
      ])
    ]));
  }
}), Br = /* @__PURE__ */ we(oI, [["__scopeId", "data-v-8bc3db0a"]]), nI = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = k(null);
    async function n() {
      var i;
      await ((i = o.value) == null ? void 0 : i.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (i, c) => (a(), R(vt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (d) => i.$emit("close"))
    }, {
      body: h(() => [
        C(Ir, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var d;
        return [
          C(Le, {
            variant: "primary",
            disabled: !((d = o.value) != null && d.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Le, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (u) => i.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), aI = /* @__PURE__ */ we(nI, [["__scopeId", "data-v-fac00ae7"]]), lI = { class: "header-actions" }, iI = {
  key: 0,
  class: "wizard-step"
}, rI = { class: "form-field" }, cI = ["placeholder"], dI = {
  key: 0,
  class: "form-error"
}, uI = { class: "form-field form-field--checkbox" }, fI = { class: "form-checkbox" }, mI = {
  key: 0,
  class: "form-field"
}, vI = ["placeholder"], pI = {
  key: 0,
  class: "form-info"
}, gI = {
  key: 1,
  class: "form-suggestion"
}, hI = {
  key: 2,
  class: "form-error"
}, yI = {
  key: 3,
  class: "form-info"
}, wI = {
  key: 1,
  class: "wizard-step"
}, _I = {
  key: 0,
  class: "progress-check-loading"
}, bI = {
  key: 0,
  class: "cli-warning"
}, kI = { class: "cli-warning-header" }, $I = {
  key: 1,
  class: "env-landing"
}, CI = { class: "env-list" }, xI = ["value"], SI = { class: "env-name" }, II = {
  key: 2,
  class: "env-create"
}, EI = { class: "form-field" }, TI = { class: "form-field" }, PI = ["value"], RI = { class: "form-field" }, MI = ["disabled"], DI = ["value"], LI = { class: "form-field" }, OI = ["value"], AI = { class: "form-field form-field--checkbox" }, NI = { class: "form-checkbox" }, UI = {
  key: 0,
  class: "form-error"
}, zI = {
  key: 1,
  class: "env-creating"
}, FI = { class: "creating-intro" }, BI = {
  key: 3,
  class: "env-import"
}, VI = { class: "wizard-footer" }, WI = { class: "wizard-footer-actions" }, io = 10, GI = 600 * 1e3, ei = 1800 * 1e3, jI = /* @__PURE__ */ he({
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
      getInitializeProgress: i,
      validatePath: c,
      createEnvironment: d,
      getCreateProgress: u,
      getImportProgress: m,
      getComfyUIReleases: v
    } = nt(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), D = k(null), E = k(o.initialStep === 2), x = k(o.defaultPath), W = k(!!o.detectedModelsDir), V = k(o.detectedModelsDir || ""), z = k(null), I = k(null), T = k(null), M = k(null), ae = k("my-new-env"), J = k(Rr), G = k("latest"), se = k(Mr), Q = k(!0), A = k(null), H = k(null), L = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ne = k(!1), fe = k(!1), De = k(!1), Fe = k({ progress: 0, message: "" }), ce = k({ progress: 0, message: "" }), Se = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], _e = k(0), ye = k(null), Ce = k(0), me = k(null), ue = N(() => {
      var $e, ke;
      const ee = ($e = x.value) == null ? void 0 : $e.trim(), q = !z.value, Oe = !W.value || !I.value && ((ke = V.value) == null ? void 0 : ke.trim());
      return ee && q && Oe;
    }), Me = N(() => {
      var ee;
      return (ee = ae.value) == null ? void 0 : ee.trim();
    }), Re = N(() => !!(g.value === 2 || H.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = N(() => H.value || o.workspacePath || null);
    async function F() {
      var ee;
      if (z.value = null, !!((ee = x.value) != null && ee.trim()))
        try {
          const q = await c({ path: x.value, type: "workspace" });
          q.valid || (z.value = q.error || "Invalid path");
        } catch (q) {
          z.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function te() {
      var ee;
      if (I.value = null, T.value = null, M.value = null, !!((ee = V.value) != null && ee.trim()))
        try {
          const q = await c({ path: V.value, type: "models" });
          if (q.valid)
            M.value = q.model_count ?? null;
          else if (I.value = q.error || "Invalid path", q.suggestion) {
            T.value = q.suggestion, V.value = q.suggestion, I.value = null;
            const Oe = await c({ path: q.suggestion, type: "models" });
            Oe.valid && (M.value = Oe.model_count ?? null);
          }
        } catch (q) {
          I.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function ie() {
      var ee, q, Oe, $e, ke;
      if (z.value = null, I.value = null, await F(), (ee = z.value) != null && ee.includes("already exists")) {
        z.value = null, H.value = ((q = x.value) == null ? void 0 : q.trim()) || o.defaultPath, g.value = 2, ge();
        return;
      }
      if (!z.value && !(W.value && ((Oe = V.value) != null && Oe.trim()) && (await te(), I.value))) {
        fe.value = !0;
        try {
          await l({
            workspace_path: (($e = x.value) == null ? void 0 : $e.trim()) || o.defaultPath,
            models_directory: W.value && ((ke = V.value) == null ? void 0 : ke.trim()) || null
          }), _e.value = 0, ye.value = Date.now();
          const B = setInterval(async () => {
            var U;
            if (ye.value && Date.now() - ye.value > GI) {
              clearInterval(B), fe.value = !1, z.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const de = await i();
              if (_e.value = 0, de.state === "idle" && fe.value) {
                clearInterval(B), fe.value = !1, z.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Fe.value = { progress: de.progress, message: de.message }, de.state === "complete" ? (clearInterval(B), fe.value = !1, H.value = ((U = x.value) == null ? void 0 : U.trim()) || o.defaultPath, g.value = 2, ge()) : de.state === "error" && (clearInterval(B), fe.value = !1, z.value = de.error || "Workspace creation failed");
            } catch (de) {
              _e.value++, console.warn(`Polling failure ${_e.value}/${io}:`, de), _e.value >= io && (clearInterval(B), fe.value = !1, z.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (B) {
          fe.value = !1, z.value = B instanceof Error ? B.message : "Failed to create workspace";
        }
      }
    }
    async function pe() {
      De.value = !0, A.value = null;
      try {
        const ee = {
          name: ae.value.trim() || "my-new-env",
          python_version: J.value,
          comfyui_version: G.value,
          torch_backend: se.value,
          switch_after: Q.value,
          workspace_path: H.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await d(ee)).status === "started") {
          Ce.value = 0, me.value = Date.now();
          const Oe = setInterval(async () => {
            if (me.value && Date.now() - me.value > ei) {
              clearInterval(Oe), De.value = !1, A.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const $e = await u();
              if (Ce.value = 0, $e.state === "idle" && De.value) {
                clearInterval(Oe), De.value = !1, A.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ce.value = {
                progress: $e.progress ?? 0,
                message: $e.message,
                phase: $e.phase
              }, $e.state === "complete") {
                clearInterval(Oe), De.value = !1;
                const ke = $e.environment_name || ee.name;
                Q.value ? n("complete", ke, H.value) : (p.value = "landing", n("environment-created-no-switch", ke));
              } else $e.state === "error" && (clearInterval(Oe), De.value = !1, A.value = $e.error || "Environment creation failed");
            } catch ($e) {
              Ce.value++, console.warn(`Polling failure ${Ce.value}/${io}:`, $e), Ce.value >= io && (clearInterval(Oe), De.value = !1, A.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        De.value = !1, A.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function ge() {
      ne.value = !0;
      try {
        L.value = await v();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        ne.value = !1;
      }
    }
    function Ie() {
      w.value && n("switch-environment", w.value, H.value);
    }
    function Ee() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function le(ee, q) {
      S.value = !1, q ? n("complete", ee, H.value) : (n("environment-created-no-switch", ee), p.value = "landing");
    }
    function ve() {
    }
    Ze(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (H.value = o.workspacePath), g.value === 2) {
        ge();
        const ee = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await Ne(), clearTimeout(ee), E.value = !1;
      }
    });
    async function Ne() {
      try {
        const ee = await u();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), p.value = "create", De.value = !0, ae.value = ee.environment_name || "my-new-env", ce.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, Te();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await m();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), D.value = {
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          progress: ee.progress ?? 0,
          environmentName: ee.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function Te() {
      Ce.value = 0, me.value = Date.now();
      let ee = null;
      const q = async () => {
        if (me.value && Date.now() - me.value > ei)
          return ee && clearInterval(ee), De.value = !1, A.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const $e = await u();
          if (Ce.value = 0, $e.state === "idle" && De.value)
            return ee && clearInterval(ee), De.value = !1, A.value = "Environment creation was interrupted. Please try again.", !1;
          if (ce.value = {
            progress: $e.progress ?? 0,
            message: $e.message,
            phase: $e.phase
          }, $e.state === "complete") {
            ee && clearInterval(ee), De.value = !1;
            const ke = $e.environment_name || ae.value;
            return n("complete", ke, H.value), !1;
          } else if ($e.state === "error")
            return ee && clearInterval(ee), De.value = !1, A.value = $e.error || "Environment creation failed", !1;
          return !0;
        } catch ($e) {
          return Ce.value++, console.warn(`Polling failure ${Ce.value}/${io}:`, $e), Ce.value >= io ? (ee && clearInterval(ee), De.value = !1, A.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (ee = setInterval(async () => {
        !await q() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, q) => (a(), r(j, null, [
      C(vt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[15] || (q[15] = (Oe) => ee.$emit("close"))
      }, {
        header: h(() => [
          q[20] || (q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", lI, [
            C(Fr),
            q[19] || (q[19] = t("span", { class: "header-divider" }, null, -1)),
            Re.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: q[0] || (q[0] = (Oe) => _.value = !0)
            }, [...q[17] || (q[17] = [
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
              onClick: q[1] || (q[1] = (Oe) => ee.$emit("close")),
              title: "Close"
            }, [...q[18] || (q[18] = [
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
          var Oe;
          return [
            g.value === 1 ? (a(), r("div", iI, [
              q[24] || (q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", rI, [
                q[21] || (q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = ($e) => x.value = $e),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, cI), [
                  [Ut, x.value]
                ]),
                z.value ? (a(), r("p", dI, f(z.value), 1)) : y("", !0)
              ]),
              t("div", uI, [
                t("label", fI, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = ($e) => W.value = $e)
                  }, null, 512), [
                    [en, W.value]
                  ]),
                  q[22] || (q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              W.value ? (a(), r("div", mI, [
                q[23] || (q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = ($e) => V.value = $e),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, vI), [
                  [Ut, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (a(), r("p", pI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), r("p", gI, " Did you mean: " + f(T.value), 1)) : y("", !0),
                I.value ? (a(), r("p", hI, f(I.value), 1)) : y("", !0),
                M.value !== null && !I.value ? (a(), r("p", yI, " Found " + f(M.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              fe.value ? (a(), R(Un, {
                key: 1,
                progress: Fe.value.progress,
                message: Fe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", wI, [
              E.value ? (a(), r("div", _I, [...q[25] || (q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", bI, [
                  t("div", kI, [
                    q[27] || (q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    q[28] || (q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: q[5] || (q[5] = ($e) => $.value = !0),
                      title: "Dismiss"
                    }, [...q[26] || (q[26] = [
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
                  q[29] || (q[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  q[30] || (q[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), r("div", $I, [
                  q[34] || (q[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: q[6] || (q[6] = ($e) => p.value = "create")
                  }, [...q[31] || (q[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: q[7] || (q[7] = ($e) => {
                      P.value = !1, p.value = "import";
                    })
                  }, [...q[32] || (q[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Oe = o.existingEnvironments) != null && Oe.length ? (a(), r(j, { key: 0 }, [
                    q[33] || (q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", CI, [
                      (a(!0), r(j, null, be(o.existingEnvironments, ($e) => (a(), r("label", {
                        key: $e,
                        class: Pe(["env-option", { selected: w.value === $e }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: $e,
                          "onUpdate:modelValue": q[8] || (q[8] = (ke) => w.value = ke)
                        }, null, 8, xI), [
                          [Xt, w.value]
                        ]),
                        t("span", SI, f($e), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", II, [
                  De.value ? (a(), r("div", zI, [
                    t("p", FI, [
                      q[41] || (q[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(ae.value), 1),
                      q[42] || (q[42] = b("... ", -1))
                    ]),
                    C(Un, {
                      progress: ce.value.progress,
                      message: ce.value.message,
                      "current-phase": ce.value.phase,
                      "show-steps": !0,
                      steps: Se
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[43] || (q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(j, { key: 0 }, [
                    q[40] || (q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", EI, [
                      q[35] || (q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": q[9] || (q[9] = ($e) => ae.value = $e),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ut, ae.value]
                      ])
                    ]),
                    t("div", TI, [
                      q[36] || (q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = ($e) => J.value = $e),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, be(We(Pr), ($e) => (a(), r("option", {
                          key: $e,
                          value: $e
                        }, f($e), 9, PI))), 128))
                      ], 512), [
                        [hs, J.value]
                      ])
                    ]),
                    t("div", RI, [
                      q[37] || (q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = ($e) => G.value = $e),
                        class: "form-select",
                        disabled: ne.value
                      }, [
                        (a(!0), r(j, null, be(L.value, ($e) => (a(), r("option", {
                          key: $e.tag_name,
                          value: $e.tag_name
                        }, f($e.name), 9, DI))), 128))
                      ], 8, MI), [
                        [hs, G.value]
                      ])
                    ]),
                    t("div", LI, [
                      q[38] || (q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[12] || (q[12] = ($e) => se.value = $e),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, be(We(nl), ($e) => (a(), r("option", {
                          key: $e,
                          value: $e
                        }, f($e) + f($e === "auto" ? " (detect GPU)" : ""), 9, OI))), 128))
                      ], 512), [
                        [hs, se.value]
                      ])
                    ]),
                    t("div", AI, [
                      t("label", NI, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[13] || (q[13] = ($e) => Q.value = $e)
                        }, null, 512), [
                          [en, Q.value]
                        ]),
                        q[39] || (q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    A.value ? (a(), r("div", UI, f(A.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", BI, [
                  C(Or, {
                    "workspace-path": H.value,
                    "resume-import": P.value,
                    "initial-progress": D.value ?? void 0,
                    onImportComplete: le,
                    onImportStarted: q[14] || (q[14] = ($e) => S.value = !0),
                    onSourceCleared: ve
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", VI, [
            C(Br),
            t("div", WI, [
              g.value === 1 ? (a(), R(Le, {
                key: 0,
                variant: "primary",
                disabled: !ue.value || fe.value,
                onClick: ie
              }, {
                default: h(() => [
                  b(f(fe.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(j, { key: 1 }, [
                !De.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !H.value) ? (a(), R(Le, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ee
                }, {
                  default: h(() => [...q[44] || (q[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Le, {
                  key: 1,
                  variant: "primary",
                  disabled: !Me.value || De.value,
                  onClick: pe
                }, {
                  default: h(() => [
                    b(f(De.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), R(Le, {
                  key: 2,
                  variant: "primary",
                  onClick: Ie
                }, {
                  default: h(() => [
                    b(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), R(aI, {
        key: 0,
        "workspace-path": O.value,
        onClose: q[16] || (q[16] = (Oe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), HI = /* @__PURE__ */ we(jI, [["__scopeId", "data-v-9a9aadc0"]]), KI = { class: "comfygit-panel" }, qI = { class: "panel-header" }, YI = { class: "header-left" }, JI = {
  key: 0,
  class: "header-info"
}, XI = { class: "header-actions" }, QI = { class: "env-switcher" }, ZI = {
  key: 0,
  class: "header-info"
}, eE = { class: "branch-name" }, tE = { class: "panel-main" }, sE = { class: "sidebar" }, oE = { class: "sidebar-content" }, nE = { class: "sidebar-section" }, aE = { class: "sidebar-section" }, lE = { class: "sidebar-section" }, iE = {
  key: 0,
  class: "sidebar-badge"
}, rE = { class: "sidebar-footer" }, cE = { class: "content-area" }, dE = {
  key: 0,
  class: "error-message"
}, uE = {
  key: 1,
  class: "loading"
}, fE = { class: "dialog-content env-selector-dialog" }, mE = { class: "dialog-header" }, vE = { class: "dialog-body" }, pE = { class: "env-list" }, gE = { class: "env-info" }, hE = { class: "env-name-row" }, yE = { class: "env-indicator" }, wE = { class: "env-name" }, _E = {
  key: 0,
  class: "env-branch"
}, bE = {
  key: 1,
  class: "current-label"
}, kE = { class: "env-stats" }, $E = ["onClick"], CE = { class: "toast-container" }, xE = { class: "toast-message" }, SE = /* @__PURE__ */ he({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getStatus: l,
      getHistory: i,
      getBranches: c,
      checkout: d,
      createBranch: u,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: S,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = nt(), D = Tv(), { liveInstanceCount: E } = Ar({ autoStart: !0 }), x = k(null), W = k([]), V = k([]), z = k([]), I = N(() => z.value.find((oe) => oe.is_current)), T = k(null), M = k(!1), ae = k(1), J = N(() => {
      var oe;
      return ((oe = T.value) == null ? void 0 : oe.state) || "managed";
    }), G = k(!1), se = k(null), Q = k(null), A = k(!1), H = k(null), L = k(null), ne = k(null), fe = k(!1), De = k(!1), Fe = k(""), ce = k(null), Se = k({ state: "idle", progress: 0, message: "" });
    let _e = null, ye = null;
    const Ce = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, me = o.initialView ? Ce[o.initialView] : null, ue = k((me == null ? void 0 : me.view) ?? "status"), Me = k((me == null ? void 0 : me.section) ?? "this-env");
    function Re(oe, K) {
      ue.value = oe, Me.value = K;
    }
    function O(oe) {
      const Ae = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[oe];
      Ae && Re(Ae.view, Ae.section);
    }
    function F() {
      Re("branches", "this-env");
    }
    function te() {
      n("close"), setTimeout(() => {
        var K;
        const oe = document.querySelectorAll("button.comfyui-button");
        for (const Ae of oe)
          if (((K = Ae.textContent) == null ? void 0 : K.trim()) === "Manager") {
            Ae.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ie = k(null), pe = k(!1), ge = k(!1), Ie = k([]);
    let Ee = 0;
    function le(oe, K = "info", Ae = 3e3) {
      const je = ++Ee;
      return Ie.value.push({ id: je, message: oe, type: K }), Ae > 0 && setTimeout(() => {
        Ie.value = Ie.value.filter((st) => st.id !== je);
      }, Ae), je;
    }
    function ve(oe) {
      Ie.value = Ie.value.filter((K) => K.id !== oe);
    }
    function Ne(oe, K) {
      le(oe, K);
    }
    const Te = N(() => {
      if (!x.value) return "neutral";
      const oe = x.value.workflows, K = oe.new.length > 0 || oe.modified.length > 0 || oe.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? K ? "warning" : "success" : "error";
    });
    N(() => x.value ? Te.value === "success" ? "All synced" : Te.value === "warning" ? "Uncommitted changes" : Te.value === "error" ? "Not synced" : "" : "");
    async function ee() {
      G.value = !0, se.value = null;
      try {
        const [oe, K, Ae, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        x.value = oe, W.value = K.commits, V.value = Ae.branches, z.value = je, n("statusUpdate", oe), H.value && await H.value.loadWorkflows(!0);
      } catch (oe) {
        se.value = oe instanceof Error ? oe.message : "Failed to load status", x.value = null, W.value = [], V.value = [];
      } finally {
        G.value = !1;
      }
    }
    function q(oe) {
      Q.value = oe;
    }
    async function Oe(oe) {
      var Ae;
      Q.value = null;
      const K = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ie.value = {
        title: K ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: K ? "You have uncommitted changes that will be lost." : `Checkout commit ${oe.short_hash || ((Ae = oe.hash) == null ? void 0 : Ae.slice(0, 7))}?`,
        details: K ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: K,
        onConfirm: async () => {
          var ft;
          ie.value = null, de();
          const je = le(`Checking out ${oe.short_hash || ((ft = oe.hash) == null ? void 0 : ft.slice(0, 7))}...`, "info", 0), st = await d(oe.hash, K);
          ve(je), st.status === "success" ? le("Restarting ComfyUI...", "success") : le(st.message || "Checkout failed", "error");
        }
      };
    }
    async function $e(oe) {
      const K = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ie.value = {
        title: K ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: K ? "You have uncommitted changes." : `Switch to branch "${oe}"?`,
        details: K ? is() : void 0,
        warning: K ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, de();
          const Ae = le(`Switching to ${oe}...`, "info", 0), je = await m(oe, K);
          ve(Ae), je.status === "success" ? le("Restarting ComfyUI...", "success") : le(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function ke(oe) {
      const K = le(`Creating branch ${oe}...`, "info", 0), Ae = await u(oe);
      ve(K), Ae.status === "success" ? (le(`Branch "${oe}" created`, "success"), await ee()) : le(Ae.message || "Failed to create branch", "error");
    }
    async function B(oe, K = !1) {
      const Ae = async (je) => {
        var ft;
        const st = le(`Deleting branch ${oe}...`, "info", 0);
        try {
          const Mt = await v(oe, je);
          ve(st), Mt.status === "success" ? (le(`Branch "${oe}" deleted`, "success"), await ee()) : (ft = Mt.message) != null && ft.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Ae(!0);
            }
          } : le(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          ve(st);
          const rs = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Ae(!0);
            }
          } : le(rs, "error");
        }
      };
      ie.value = {
        title: "Delete Branch",
        message: `Delete branch "${oe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, await Ae(K);
        }
      };
    }
    async function U(oe) {
      Q.value = null;
      const K = prompt("Enter branch name:");
      if (K) {
        const Ae = le(`Creating branch ${K}...`, "info", 0), je = await u(K, oe.hash);
        ve(Ae), je.status === "success" ? (le(`Branch "${K}" created from ${oe.short_hash}`, "success"), await ee()) : le(je.message || "Failed to create branch", "error");
      }
    }
    function de() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      ie.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          ie.value = null, de(), le("Restarting environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Xe() {
      ie.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          ie.value = null, le("Stopping environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function mt(oe, K) {
      A.value = !1, Fe.value = oe, ce.value = K || null, fe.value = !0;
    }
    async function at() {
      fe.value = !1, De.value = !0, de(), Se.value = {
        progress: 10,
        state: dt(10),
        message: Rt(10)
      };
      try {
        await w(Fe.value, ce.value || void 0), zt(), Ws();
      } catch (oe) {
        Kt(), De.value = !1, le(`Failed to initiate switch: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error"), Se.value = { state: "idle", progress: 0, message: "" }, ce.value = null;
      }
    }
    function dt(oe) {
      return oe >= 100 ? "complete" : oe >= 80 ? "validating" : oe >= 60 ? "starting" : oe >= 30 ? "syncing" : "preparing";
    }
    function Rt(oe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[dt(oe)] || "";
    }
    function zt() {
      if (ye) return;
      let oe = 10;
      const K = 60, Ae = 5e3, je = 100, st = (K - oe) / (Ae / je);
      ye = window.setInterval(() => {
        if (oe += st, oe >= K && (oe = K, Kt()), Se.value.progress < K) {
          const ft = Math.floor(oe);
          Se.value = {
            progress: ft,
            state: dt(ft),
            message: Rt(ft)
          };
        }
      }, je);
    }
    function Kt() {
      ye && (clearInterval(ye), ye = null);
    }
    function Ws() {
      _e || (_e = window.setInterval(async () => {
        try {
          let oe = await D.getStatus();
          if ((!oe || oe.state === "idle") && (oe = await p()), !oe)
            return;
          const K = oe.progress || 0;
          K >= 60 && Kt();
          const Ae = Math.max(K, Se.value.progress), je = oe.state && oe.state !== "idle" && oe.state !== "unknown", st = je ? oe.state : dt(Ae), ft = je && oe.message || Rt(Ae);
          Se.value = {
            state: st,
            progress: Ae,
            message: ft
          }, oe.state === "complete" ? (Kt(), Ms(), De.value = !1, le(`✓ Switched to ${Fe.value}`, "success"), await ee(), Fe.value = "") : oe.state === "rolled_back" ? (Kt(), Ms(), De.value = !1, le("Switch failed, restored previous environment", "warning"), Fe.value = "") : oe.state === "critical_failure" && (Kt(), Ms(), De.value = !1, le(`Critical error during switch: ${oe.message}`, "error"), Fe.value = "");
        } catch (oe) {
          console.error("Failed to poll switch progress:", oe);
        }
      }, 1e3));
    }
    function Ms() {
      Kt(), _e && (clearInterval(_e), _e = null);
    }
    function no() {
      var oe;
      fe.value = !1, Fe.value = "", (oe = T.value) != null && oe.state && T.value.state !== "managed" && (ae.value = T.value.state === "no_workspace" ? 1 : 2, M.value = !0);
    }
    async function Co(oe) {
      pe.value = !1, await ee(), le(oe.message, oe.success ? "success" : "error");
    }
    async function xo() {
      ge.value = !1;
      const oe = le("Syncing environment...", "info", 0);
      try {
        const K = await S("skip", !0);
        if (ve(oe), K.status === "success") {
          const Ae = [];
          K.nodes_installed.length && Ae.push(`${K.nodes_installed.length} installed`), K.nodes_removed.length && Ae.push(`${K.nodes_removed.length} removed`);
          const je = Ae.length ? `: ${Ae.join(", ")}` : "";
          le(`✓ Environment synced${je}`, "success"), await ee();
        } else {
          const Ae = K.errors.length ? K.errors.join("; ") : K.message;
          le(`Sync failed: ${Ae}`, "error");
        }
      } catch (K) {
        ve(oe), le(`Sync error: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
      }
    }
    async function So(oe) {
      var K;
      try {
        const Ae = await $(oe);
        Ae.failed.length === 0 ? le(`✓ Repaired ${Ae.success} workflow${Ae.success === 1 ? "" : "s"}`, "success") : le(`Repaired ${Ae.success}, failed: ${Ae.failed.length}`, "warning"), await ee();
      } catch (Ae) {
        le(`Repair failed: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
      } finally {
        (K = ne.value) == null || K.resetRepairingState();
      }
    }
    async function xe() {
      var K, Ae;
      const oe = le("Repairing environment...", "info", 0);
      try {
        const je = await S("skip", !0);
        if (ve(oe), je.status === "success") {
          const st = [];
          je.nodes_installed.length && st.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && st.push(`${je.nodes_removed.length} removed`);
          const ft = st.length ? `: ${st.join(", ")}` : "";
          le(`✓ Environment repaired${ft}`, "success"), (K = ne.value) == null || K.closeDetailModal(), await ee();
        } else {
          const st = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          le(`Repair failed: ${st}`, "error");
        }
      } catch (je) {
        ve(oe), le(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Ae = ne.value) == null || Ae.resetRepairingEnvironmentState();
      }
    }
    async function X(oe, K) {
      le(`Environment '${oe}' created`, "success"), await ee(), L.value && await L.value.loadEnvironments(), K && await mt(oe);
    }
    async function He(oe) {
      var K;
      if (((K = I.value) == null ? void 0 : K.name) === oe) {
        le("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ie.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${oe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ie.value = null;
          try {
            const Ae = await _(oe);
            Ae.status === "success" ? (le(`Environment "${oe}" deleted`, "success"), await ee(), L.value && await L.value.loadEnvironments()) : le(Ae.message || "Failed to delete environment", "error");
          } catch (Ae) {
            le(`Error deleting environment: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function gt(oe, K) {
      M.value = !1;
      try {
        T.value = await P();
      } catch {
      }
      await mt(oe, K);
    }
    function qt() {
      M.value = !1, n("close");
    }
    async function ys(oe, K) {
      await mt(oe, K);
    }
    async function ws(oe) {
      await ee(), await mt(oe);
    }
    async function ls(oe) {
      T.value = await P(), console.log(`Environment '${oe}' created. Available for switching.`);
    }
    function Ue() {
      Re("environments", "all-envs"), setTimeout(() => {
        var oe;
        (oe = L.value) == null || oe.openCreateModal();
      }, 100);
    }
    function is() {
      if (!x.value) return [];
      const oe = [], K = x.value.workflows;
      return K.new.length && oe.push(`${K.new.length} new workflow(s)`), K.modified.length && oe.push(`${K.modified.length} modified workflow(s)`), K.deleted.length && oe.push(`${K.deleted.length} deleted workflow(s)`), oe;
    }
    return Ze(async () => {
      try {
        if (T.value = await P(), T.value.state === "no_workspace") {
          M.value = !0, ae.value = 1;
          return;
        }
        if (T.value.state === "empty_workspace") {
          M.value = !0, ae.value = 2;
          return;
        }
        if (T.value.state === "unmanaged") {
          M.value = !0, ae.value = 2;
          return;
        }
      } catch (oe) {
        console.warn("Setup status check failed, proceeding normally:", oe);
      }
      await ee();
    }), (oe, K) => {
      var Ae, je, st, ft, Mt, rs, Gs, js, ln, rn, cn, Y;
      return a(), r("div", KI, [
        t("div", qI, [
          t("div", YI, [
            K[31] || (K[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (a(), r("div", JI)) : y("", !0)
          ]),
          t("div", XI, [
            C(Fr),
            K[34] || (K[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Pe(["icon-btn", { spinning: G.value }]),
              onClick: ee,
              title: "Refresh"
            }, [...K[32] || (K[32] = [
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
              onClick: K[0] || (K[0] = (Z) => n("close")),
              title: "Close"
            }, [...K[33] || (K[33] = [
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
        t("div", QI, [
          t("div", { class: "env-switcher-header" }, [
            K[35] || (K[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ve
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Xe
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: K[1] || (K[1] = (Z) => Re("environments", "all-envs"))
          }, [
            x.value ? (a(), r("div", ZI, [
              t("span", null, f(((Ae = I.value) == null ? void 0 : Ae.name) || ((je = x.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", eE, "(" + f(x.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            K[36] || (K[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", tE, [
          t("div", sE, [
            t("div", oE, [
              t("div", nE, [
                K[37] || (K[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "status" && Me.value === "this-env" }]),
                  onClick: K[2] || (K[2] = (Z) => Re("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "workflows" }]),
                  onClick: K[3] || (K[3] = (Z) => Re("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "models-env" }]),
                  onClick: K[4] || (K[4] = (Z) => Re("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "branches" }]),
                  onClick: K[5] || (K[5] = (Z) => Re("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "history" }]),
                  onClick: K[6] || (K[6] = (Z) => Re("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "nodes" }]),
                  onClick: K[7] || (K[7] = (Z) => Re("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "debug-env" }]),
                  onClick: K[8] || (K[8] = (Z) => Re("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              K[41] || (K[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", aE, [
                K[38] || (K[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "environments" }]),
                  onClick: K[9] || (K[9] = (Z) => Re("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "model-index" }]),
                  onClick: K[10] || (K[10] = (Z) => Re("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "settings" }]),
                  onClick: K[11] || (K[11] = (Z) => Re("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "debug-workspace" }]),
                  onClick: K[12] || (K[12] = (Z) => Re("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              K[42] || (K[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", lE, [
                K[40] || (K[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "deploy" }]),
                  onClick: K[13] || (K[13] = (Z) => Re("deploy", "sharing"))
                }, [
                  K[39] || (K[39] = b(" DEPLOY ", -1)),
                  We(E) > 0 ? (a(), r("span", iE, f(We(E)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "export" }]),
                  onClick: K[14] || (K[14] = (Z) => Re("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "import" }]),
                  onClick: K[15] || (K[15] = (Z) => Re("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "remotes" }]),
                  onClick: K[16] || (K[16] = (Z) => Re("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", rE, [
              C(Br)
            ])
          ]),
          t("div", cE, [
            se.value ? (a(), r("div", dE, f(se.value), 1)) : !x.value && ue.value === "status" ? (a(), r("div", uE, " Loading status... ")) : (a(), r(j, { key: 2 }, [
              ue.value === "status" ? (a(), R(tv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ne,
                status: x.value,
                "setup-state": J.value,
                onSwitchBranch: F,
                onCommitChanges: K[17] || (K[17] = (Z) => pe.value = !0),
                onSyncEnvironment: K[18] || (K[18] = (Z) => ge.value = !0),
                onViewWorkflows: K[19] || (K[19] = (Z) => Re("workflows", "this-env")),
                onViewHistory: K[20] || (K[20] = (Z) => Re("history", "this-env")),
                onViewDebug: K[21] || (K[21] = (Z) => Re("debug-env", "this-env")),
                onViewNodes: K[22] || (K[22] = (Z) => Re("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: xe,
                onStartSetup: K[23] || (K[23] = (Z) => M.value = !0),
                onViewEnvironments: K[24] || (K[24] = (Z) => Re("environments", "all-envs")),
                onCreateEnvironment: Ue
              }, null, 8, ["status", "setup-state"])) : ue.value === "workflows" ? (a(), R(M0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: H,
                onRefresh: ee
              }, null, 512)) : ue.value === "models-env" ? (a(), R(vw, {
                key: 2,
                onNavigate: O
              })) : ue.value === "branches" ? (a(), R(gv, {
                key: 3,
                branches: V.value,
                current: ((st = x.value) == null ? void 0 : st.branch) || null,
                onSwitch: $e,
                onCreate: ke,
                onDelete: B
              }, null, 8, ["branches", "current"])) : ue.value === "history" ? (a(), R(Iv, {
                key: 4,
                commits: W.value,
                onSelect: q,
                onCheckout: Oe
              }, null, 8, ["commits"])) : ue.value === "nodes" ? (a(), R(d_, {
                key: 5,
                "version-mismatches": ((Mt = (ft = x.value) == null ? void 0 : ft.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: te,
                onRepairEnvironment: xe,
                onToast: Ne
              }, null, 8, ["version-mismatches"])) : ue.value === "debug-env" ? (a(), R(C2, { key: 6 })) : ue.value === "environments" ? (a(), R(I$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: mt,
                onCreated: X,
                onDelete: He
              }, null, 512)) : ue.value === "model-index" ? (a(), R(Lw, {
                key: 8,
                onRefresh: ee
              })) : ue.value === "settings" ? (a(), R(p2, { key: 9 })) : ue.value === "debug-workspace" ? (a(), R($2, { key: 10 })) : ue.value === "deploy" ? (a(), R(n4, {
                key: 11,
                onToast: Ne,
                onNavigate: O
              })) : ue.value === "export" ? (a(), R(oC, { key: 12 })) : ue.value === "import" ? (a(), R(Jx, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : ue.value === "remotes" ? (a(), R(Yk, {
                key: 14,
                onToast: Ne
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Q.value ? (a(), R(k4, {
          key: 0,
          commit: Q.value,
          onClose: K[25] || (K[25] = (Z) => Q.value = null),
          onCheckout: Oe,
          onCreateBranch: U
        }, null, 8, ["commit"])) : y("", !0),
        ie.value ? (a(), R(ol, {
          key: 1,
          title: ie.value.title,
          message: ie.value.message,
          details: ie.value.details,
          warning: ie.value.warning,
          confirmLabel: ie.value.confirmLabel,
          cancelLabel: ie.value.cancelLabel,
          secondaryLabel: ie.value.secondaryLabel,
          secondaryAction: ie.value.secondaryAction,
          destructive: ie.value.destructive,
          onConfirm: ie.value.onConfirm,
          onCancel: K[26] || (K[26] = (Z) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(k6, {
          show: fe.value,
          "from-environment": ((rs = I.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": Fe.value,
          onConfirm: at,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        pe.value && x.value ? (a(), R(zr, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: K[27] || (K[27] = (Z) => pe.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        ge.value && x.value ? (a(), R(V6, {
          key: 3,
          show: ge.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: K[28] || (K[28] = (Z) => ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(D6, {
          show: De.value,
          state: Se.value.state,
          progress: Se.value.progress,
          message: Se.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        A.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: K[30] || (K[30] = it((Z) => A.value = !1, ["self"]))
        }, [
          t("div", fE, [
            t("div", mE, [
              K[44] || (K[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: K[29] || (K[29] = (Z) => A.value = !1)
              }, [...K[43] || (K[43] = [
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
            t("div", vE, [
              K[45] || (K[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", pE, [
                (a(!0), r(j, null, be(z.value, (Z) => (a(), r("div", {
                  key: Z.name,
                  class: Pe(["env-item", { current: Z.is_current }])
                }, [
                  t("div", gE, [
                    t("div", hE, [
                      t("span", yE, f(Z.is_current ? "●" : "○"), 1),
                      t("span", wE, f(Z.name), 1),
                      Z.current_branch ? (a(), r("span", _E, "(" + f(Z.current_branch) + ")", 1)) : y("", !0),
                      Z.is_current ? (a(), r("span", bE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", kE, f(Z.workflow_count) + " workflows • " + f(Z.node_count) + " nodes ", 1)
                  ]),
                  Z.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ze) => mt(Z.name)
                  }, " SWITCH ", 8, $E))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        M.value ? (a(), R(HI, {
          key: 5,
          "default-path": ((Gs = T.value) == null ? void 0 : Gs.default_path) || "~/comfygit",
          "detected-models-dir": ((js = T.value) == null ? void 0 : js.detected_models_dir) || null,
          "initial-step": ae.value,
          "existing-environments": ((ln = T.value) == null ? void 0 : ln.environments) || [],
          "cli-installed": ((rn = T.value) == null ? void 0 : rn.cli_installed) ?? !0,
          "setup-state": ((cn = T.value) == null ? void 0 : cn.state) || "no_workspace",
          "workspace-path": ((Y = T.value) == null ? void 0 : Y.workspace_path) || null,
          onComplete: gt,
          onClose: qt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", CE, [
          C(uu, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(j, null, be(Ie.value, (Z) => (a(), r("div", {
                key: Z.id,
                class: Pe(["toast", Z.type])
              }, [
                t("span", xE, f(Z.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), IE = /* @__PURE__ */ we(SE, [["__scopeId", "data-v-037b3ee3"]]), EE = { class: "item-header" }, TE = { class: "item-info" }, PE = { class: "filename" }, RE = { class: "metadata" }, ME = { class: "size" }, DE = {
  key: 0,
  class: "type"
}, LE = { class: "item-actions" }, OE = {
  key: 0,
  class: "progress-section"
}, AE = { class: "progress-bar" }, NE = { class: "progress-stats" }, UE = { class: "downloaded" }, zE = { class: "speed" }, FE = {
  key: 0,
  class: "eta"
}, BE = {
  key: 1,
  class: "status-msg paused"
}, VE = {
  key: 2,
  class: "status-msg queued"
}, WE = {
  key: 3,
  class: "status-msg completed"
}, GE = {
  key: 4,
  class: "status-msg failed"
}, jE = {
  key: 0,
  class: "retries"
}, HE = /* @__PURE__ */ he({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
    function n(c) {
      if (c === 0) return "?";
      const d = c / (1024 * 1024 * 1024);
      return d >= 1 ? `${d.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(c) {
      return c === 0 ? "-" : `${(c / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function i(c) {
      if (c < 60) return `${Math.round(c)}s`;
      const d = Math.floor(c / 60);
      return d < 60 ? `${d}m` : `${Math.floor(d / 60)}h ${d % 60}m`;
    }
    return (c, d) => (a(), r("div", {
      class: Pe(["download-item", `status-${e.item.status}`])
    }, [
      t("div", EE, [
        t("div", TE, [
          t("div", PE, f(e.item.filename), 1),
          t("div", RE, [
            t("span", ME, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", DE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", LE, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), r("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: d[0] || (d[0] = (u) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), r("button", {
            key: 1,
            class: "action-icon resume",
            onClick: d[1] || (d[1] = (u) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), r("button", {
            key: 2,
            class: "action-icon retry",
            onClick: d[2] || (d[2] = (u) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), r("button", {
            key: 3,
            class: "action-icon remove",
            onClick: d[3] || (d[3] = (u) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), r("div", OE, [
        t("div", AE, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", NE, [
          t("span", UE, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", zE, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", FE, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", BE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", VE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", WE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", GE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", jE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ we(HE, [["__scopeId", "data-v-2110df65"]]), KE = { class: "queue-title" }, qE = { class: "count" }, YE = { class: "queue-actions" }, JE = { class: "action-label" }, XE = {
  key: 0,
  class: "overall-progress"
}, QE = { class: "progress-bar" }, ZE = {
  key: 0,
  class: "current-mini"
}, eT = { class: "filename" }, tT = { class: "speed" }, sT = {
  key: 1,
  class: "queue-content"
}, oT = {
  key: 0,
  class: "section"
}, nT = {
  key: 1,
  class: "section"
}, aT = { class: "section-header" }, lT = { class: "section-label paused" }, iT = { class: "items-list" }, rT = {
  key: 2,
  class: "section"
}, cT = { class: "section-header" }, dT = { class: "section-label" }, uT = { class: "items-list" }, fT = {
  key: 3,
  class: "section"
}, mT = { class: "section-header" }, vT = { class: "section-label" }, pT = { class: "items-list" }, gT = {
  key: 4,
  class: "section"
}, hT = { class: "section-header" }, yT = { class: "section-label failed" }, wT = { class: "items-list" }, _T = /* @__PURE__ */ he({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: c,
      hasItems: d,
      activeCount: u,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = ko(), S = k(!1);
    let $ = null;
    Ct(
      () => ({
        active: u.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (x, W) => {
        $ && (clearTimeout($), $ = null);
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, z = W && (W.active > 0 || W.paused > 0);
        V && z && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = N(() => {
      var V;
      if (s.items.length === 0) return 0;
      const x = l.value.length, W = ((V = o.value) == null ? void 0 : V.progress) || 0;
      return Math.round((x + W / 100) / s.items.length * 100);
    });
    function D(x) {
      m(x);
    }
    function E(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, W) => (a(), R(yt, { to: "body" }, [
      We(d) ? (a(), r("div", {
        key: 0,
        class: Pe(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (V) => S.value = !S.value)
        }, [
          t("div", KE, [
            W[4] || (W[4] = t("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", qE, "(" + f(We(u)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", YE, [
            t("span", JE, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), r("div", sT, [
          We(o) ? (a(), r("div", oT, [
            W[6] || (W[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(Mo, {
              item: We(o),
              onCancel: W[1] || (W[1] = (V) => D(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", nT, [
            t("div", aT, [
              t("span", lT, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...V) => We(w) && We(w)(...V))
              }, "Resume All")
            ]),
            t("div", iT, [
              (a(!0), r(j, null, be(We(c), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onResume: (z) => We(g)(V.id),
                onRemove: (z) => We(p)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", rT, [
            t("div", cT, [
              t("span", dT, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", uT, [
              (a(!0), r(j, null, be(We(n), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onCancel: (z) => D(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", fT, [
            t("div", mT, [
              t("span", vT, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...V) => We(_) && We(_)(...V))
              }, "Clear")
            ]),
            t("div", pT, [
              (a(!0), r(j, null, be(We(l).slice(0, 3), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onRemove: (z) => We(p)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", gT, [
            t("div", hT, [
              t("span", yT, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", wT, [
              (a(!0), r(j, null, be(We(i), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onRetry: (z) => We(v)(V.id),
                onRemove: (z) => We(p)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", XE, [
          t("div", QE, [
            t("div", {
              class: "progress-fill",
              style: Ht({ width: `${P.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", ZE, [
            t("span", eT, f(We(o).filename), 1),
            t("span", tT, f(E(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), bT = /* @__PURE__ */ we(_T, [["__scopeId", "data-v-60751cfa"]]), kT = {
  key: 0,
  class: "loading-state"
}, $T = {
  key: 1,
  class: "analysis-results"
}, CT = {
  key: 0,
  class: "section"
}, xT = { class: "section-header" }, ST = { class: "section-title" }, IT = { class: "item-list" }, ET = { class: "package-info" }, TT = { class: "package-name" }, PT = { class: "node-count" }, RT = {
  key: 1,
  class: "installing-badge"
}, MT = {
  key: 2,
  class: "queued-badge"
}, DT = ["title"], LT = {
  key: 4,
  class: "installed-badge"
}, OT = {
  key: 0,
  class: "overflow-note"
}, AT = {
  key: 1,
  class: "section"
}, NT = { class: "section-header" }, UT = { class: "section-title" }, zT = { class: "item-list" }, FT = { class: "node-type" }, BT = {
  key: 0,
  class: "overflow-note"
}, VT = {
  key: 2,
  class: "section"
}, WT = { class: "section-header" }, GT = { class: "section-title" }, jT = { class: "item-list" }, HT = { class: "model-info" }, KT = { class: "model-name" }, qT = {
  key: 1,
  class: "queued-badge"
}, YT = {
  key: 1,
  class: "no-url"
}, JT = {
  key: 0,
  class: "overflow-note"
}, XT = { class: "dont-show-again" }, QT = /* @__PURE__ */ he({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), d = k(/* @__PURE__ */ new Map()), u = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(/* @__PURE__ */ new Set()), p = k(/* @__PURE__ */ new Map()), { addToQueue: _ } = ko(), { queueNodeInstall: S } = nt(), $ = N(() => P.value.length > 0 || E.value.length > 0 || x.value.length > 0), P = N(() => {
      var _e, ye;
      if (!((_e = n.value) != null && _e.nodes)) return [];
      const ce = /* @__PURE__ */ new Map(), Se = (n.value.nodes.resolved || []).filter((Ce) => {
        var me;
        return !Ce.is_installed && ((me = Ce.package) == null ? void 0 : me.package_id);
      });
      for (const Ce of Se) {
        const me = Ce.package.package_id;
        ce.has(me) || ce.set(me, {
          package_id: me,
          title: Ce.package.title || me,
          node_count: 0,
          node_types: [],
          repository: Ce.package.repository || null,
          latest_version: Ce.package.latest_version || null
        });
        const ue = ce.get(me);
        ue.node_count++, ue.node_types.push(((ye = Ce.reference) == null ? void 0 : ye.node_type) || Ce.node_type);
      }
      return Array.from(ce.values());
    }), D = N(() => P.value.reduce((ce, Se) => ce + Se.node_count, 0)), E = N(() => {
      var ce;
      return (ce = n.value) != null && ce.nodes ? (n.value.nodes.unresolved || []).map((Se) => {
        var _e;
        return {
          node_type: ((_e = Se.reference) == null ? void 0 : _e.node_type) || Se.node_type
        };
      }) : [];
    }), x = N(() => {
      var _e;
      if (!((_e = n.value) != null && _e.models)) return [];
      const ce = (n.value.models.resolved || []).filter(
        (ye) => ye.match_type === "download_intent" || ye.match_type === "property_download_intent" || ye.match_type === "not_found"
      ).map((ye) => {
        var Ce, me, ue, Me;
        return {
          filename: ((me = (Ce = ye.reference) == null ? void 0 : Ce.widget_value) == null ? void 0 : me.split("/").pop()) || ((ue = ye.reference) == null ? void 0 : ue.widget_value) || ye.widget_value,
          widget_value: ((Me = ye.reference) == null ? void 0 : Me.widget_value) || ye.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ye.download_source || null,
          targetPath: ye.target_path || null,
          canDownload: !!(ye.download_source && ye.target_path)
        };
      }), Se = (n.value.models.unresolved || []).map((ye) => {
        var Ce, me, ue, Me;
        return {
          filename: ((me = (Ce = ye.reference) == null ? void 0 : Ce.widget_value) == null ? void 0 : me.split("/").pop()) || ((ue = ye.reference) == null ? void 0 : ue.widget_value) || ye.widget_value,
          widget_value: ((Me = ye.reference) == null ? void 0 : Me.widget_value) || ye.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...ce, ...Se];
    }), W = N(() => x.value.filter((ce) => ce.canDownload)), V = N(() => P.value.length > 0 && P.value.every(
      (ce) => i.value.has(ce.package_id) || c.value.has(ce.package_id) || d.value.has(ce.package_id)
    )), z = N(() => W.value.length > 0 && W.value.every((ce) => u.value.has(ce.url))), I = N(() => P.value.length > 0 || W.value.length > 0), T = N(() => {
      const ce = P.value.length === 0 || V.value, Se = W.value.length === 0 || z.value;
      return ce && Se;
    });
    async function M(ce) {
      const Se = ce.package_id;
      if (!(i.value.has(Se) || c.value.has(Se) || d.value.has(Se))) {
        v.value = Se;
        try {
          const { ui_id: _e } = await S({
            id: Se,
            version: ce.latest_version || "latest",
            selected_version: ce.latest_version || "latest",
            repository: ce.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          p.value.set(_e, Se), c.value.add(Se);
        } catch (_e) {
          console.error("[ComfyGit] Failed to queue package install:", _e), d.value.set(Se, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function ae(ce) {
      !ce.url || !ce.targetPath || u.value.has(ce.url) || (_([{
        workflow: "unsaved",
        filename: ce.filename,
        url: ce.url,
        targetPath: ce.targetPath
      }]), u.value.add(ce.url));
    }
    async function J() {
      for (const ce of P.value)
        !i.value.has(ce.package_id) && !c.value.has(ce.package_id) && !d.value.has(ce.package_id) && await M(ce);
    }
    function G() {
      const ce = W.value.filter(
        (Se) => !u.value.has(Se.url)
      );
      if (ce.length !== 0) {
        _(ce.map((Se) => ({
          workflow: "unsaved",
          filename: Se.filename,
          url: Se.url,
          targetPath: Se.targetPath
        })));
        for (const Se of ce)
          u.value.add(Se.url);
      }
    }
    function se() {
      J(), G();
    }
    function Q() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function A(ce) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const Se = ce == null ? void 0 : ce.id;
      if (Se && w.value.has(Se)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${Se} this session`);
        return;
      }
      try {
        const _e = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ce })
        });
        if (_e.ok) {
          const ye = await _e.json();
          if (ye.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ye.filename}, skipping popup`), Se && w.value.add(Se);
            return;
          }
        }
      } catch (_e) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", _e);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), d.value = /* @__PURE__ */ new Map(), u.value = /* @__PURE__ */ new Set(), p.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const _e = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ce, name: "unsaved" })
        });
        if (!_e.ok) {
          const ye = await _e.json();
          throw new Error(ye.error || "Failed to analyze workflow");
        }
        n.value = await _e.json(), $.value && (l.value = !0, Se && w.value.add(Se));
      } catch (_e) {
        console.error("[ComfyGit] Failed to analyze workflow:", _e);
      } finally {
        s.value = !1;
      }
    }
    function H() {
      l.value = !1, n.value = null;
    }
    function L(ce) {
      const { workflow: Se } = ce.detail;
      Se && A(Se);
    }
    function ne(ce) {
      var ye;
      const Se = (ye = ce.detail) == null ? void 0 : ye.ui_id, _e = p.value.get(Se);
      _e && (v.value = _e, console.log("[ComfyGit] Installing package:", _e));
    }
    function fe(ce) {
      var Ce, me, ue, Me, Re, O, F;
      const Se = (Ce = ce.detail) == null ? void 0 : Ce.ui_id, _e = p.value.get(Se), ye = (ue = (me = ce.detail) == null ? void 0 : me.status) == null ? void 0 : ue.status_str;
      if (_e) {
        if (p.value.delete(Se), c.value.delete(_e), v.value === _e && (v.value = null), ye === "success")
          i.value.add(_e), g.value++, console.log("[ComfyGit] Package installed successfully:", _e);
        else {
          const te = ((O = (Re = (Me = ce.detail) == null ? void 0 : Me.status) == null ? void 0 : Re.messages) == null ? void 0 : O[0]) || ((F = ce.detail) == null ? void 0 : F.result) || "Unknown error";
          d.value.set(_e, te), console.error("[ComfyGit] Package install failed:", _e, te);
        }
        p.value.size === 0 && g.value > 0 && window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        }));
      }
    }
    function De() {
      var ce;
      return (ce = window.app) == null ? void 0 : ce.api;
    }
    function Fe(ce) {
      const { change_type: Se } = ce.detail;
      (Se === "created" || Se === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Ze(() => {
      window.addEventListener("comfygit:workflow-loaded", L);
      const ce = De();
      ce && (ce.addEventListener("cm-task-started", ne), ce.addEventListener("cm-task-completed", fe), ce.addEventListener("comfygit:workflow-changed", Fe));
    }), oo(() => {
      window.removeEventListener("comfygit:workflow-loaded", L);
      const ce = De();
      ce && (ce.removeEventListener("cm-task-started", ne), ce.removeEventListener("cm-task-completed", fe), ce.removeEventListener("comfygit:workflow-changed", Fe));
    }), (ce, Se) => l.value ? (a(), R(vt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: H
    }, {
      body: h(() => [
        s.value ? (a(), r("div", kT, [...Se[1] || (Se[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && $.value ? (a(), r("div", $T, [
          P.value.length > 0 ? (a(), r("div", CT, [
            t("div", xT, [
              t("span", ST, "Missing Custom Nodes (" + f(D.value) + ")", 1),
              P.value.length > 1 ? (a(), R(Le, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: V.value,
                onClick: J
              }, {
                default: h(() => [
                  b(f(V.value ? "All Queued" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", IT, [
              (a(!0), r(j, null, be(P.value.slice(0, 5), (_e) => (a(), r("div", {
                key: _e.package_id,
                class: "package-item"
              }, [
                t("div", ET, [
                  t("span", TT, f(_e.title), 1),
                  t("span", PT, "(" + f(_e.node_count) + " " + f(_e.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                !i.value.has(_e.package_id) && !c.value.has(_e.package_id) && !d.value.has(_e.package_id) ? (a(), R(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: v.value === _e.package_id,
                  onClick: (ye) => M(_e)
                }, {
                  default: h(() => [
                    b(f(v.value === _e.package_id ? "Queueing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : v.value === _e.package_id ? (a(), r("span", RT, "Installing...")) : c.value.has(_e.package_id) ? (a(), r("span", MT, "Queued")) : d.value.has(_e.package_id) ? (a(), r("span", {
                  key: 3,
                  class: "failed-badge",
                  title: d.value.get(_e.package_id)
                }, "Failed ⚠", 8, DT)) : (a(), r("span", LT, "Installed"))
              ]))), 128)),
              P.value.length > 5 ? (a(), r("div", OT, " ...and " + f(P.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          E.value.length > 0 ? (a(), r("div", AT, [
            t("div", NT, [
              t("span", UT, "Unknown Nodes (" + f(E.value.length) + ")", 1)
            ]),
            t("div", zT, [
              (a(!0), r(j, null, be(E.value.slice(0, 5), (_e) => (a(), r("div", {
                key: _e.node_type,
                class: "item"
              }, [
                t("code", FT, f(_e.node_type), 1),
                Se[2] || (Se[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              E.value.length > 5 ? (a(), r("div", BT, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          x.value.length > 0 ? (a(), r("div", VT, [
            t("div", WT, [
              t("span", GT, "Missing Models (" + f(x.value.length) + ")", 1),
              W.value.length > 1 ? (a(), R(Le, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: z.value,
                onClick: G
              }, {
                default: h(() => [
                  b(f(z.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", jT, [
              (a(!0), r(j, null, be(x.value.slice(0, 5), (_e) => (a(), r("div", {
                key: _e.widget_value,
                class: "model-item"
              }, [
                t("div", HT, [
                  t("span", KT, f(_e.filename), 1)
                ]),
                _e.canDownload ? (a(), r(j, { key: 0 }, [
                  u.value.has(_e.url) ? (a(), r("span", qT, "Queued")) : (a(), R(Le, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (ye) => ae(_e)
                  }, {
                    default: h(() => [...Se[3] || (Se[3] = [
                      b(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), r("span", YT, "Manual download required"))
              ]))), 128)),
              x.value.length > 5 ? (a(), r("div", JT, " ...and " + f(x.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", XT, [
            C(Ma, {
              modelValue: m.value,
              "onUpdate:modelValue": [
                Se[0] || (Se[0] = (_e) => m.value = _e),
                Q
              ]
            }, {
              default: h(() => [...Se[4] || (Se[4] = [
                b(" Don't show this popup ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Le, {
          variant: "secondary",
          onClick: H
        }, {
          default: h(() => [...Se[5] || (Se[5] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        I.value ? (a(), R(Le, {
          key: 0,
          variant: "primary",
          disabled: T.value,
          onClick: se
        }, {
          default: h(() => [
            b(f(T.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), ZT = /* @__PURE__ */ we(QT, [["__scopeId", "data-v-ed99da35"]]), e7 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', t7 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', s7 = {
  comfy: e7,
  phosphor: t7
}, al = "comfy", Vr = "comfygit-theme";
let Ys = null, Wr = al;
function o7() {
  try {
    const e = localStorage.getItem(Vr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return al;
}
function Gr(e = al) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = s7[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), Wr = e;
  try {
    localStorage.setItem(Vr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function n7() {
  return Wr;
}
function a7(e) {
  Gr(e);
}
function l7(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const ll = document.createElement("link");
ll.rel = "stylesheet";
ll.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ll);
const i7 = o7();
Gr(i7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), a7(e);
  },
  getTheme: () => {
    const e = n7();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Jt = null, Ot = null, jo = null, Do = null, ti = null, Lo = null, si = null;
const ho = k(null);
let il = "managed", jr = !1;
async function Sn() {
  var e;
  if (!((e = Bt) != null && e.api)) return null;
  try {
    const s = await Bt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ho.value = await s.json());
  } catch {
  }
}
async function Da() {
  var e;
  if ((e = Bt) != null && e.api)
    try {
      const s = await Bt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        il = o.state, jr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function La() {
  var s;
  if (il === "managed" || !jr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function r7() {
  if (!ho.value) return !1;
  const e = ho.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ho.value.has_changes;
}
function ha(e) {
  Jt && Jt.remove(), Jt = document.createElement("div"), Jt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Jt.appendChild(s), Jt.addEventListener("click", (l) => {
    l.target === Jt && ya();
  });
  const o = (l) => {
    l.key === "Escape" && (ya(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Qn({
    render: () => nn(IE, {
      initialView: e,
      onClose: ya,
      onStatusUpdate: async (l) => {
        ho.value = l, Ho(), await Da(), Oa(), La();
      }
    })
  }).mount(s), document.body.appendChild(Jt);
}
function ya() {
  Jt && (Jt.remove(), Jt = null);
}
function c7(e) {
  Oo(), Ot = document.createElement("div"), Ot.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Ot.style.position = "fixed", Ot.style.top = `${s.bottom + 8}px`, Ot.style.right = `${window.innerWidth - s.right}px`, Ot.style.zIndex = "10001";
  const o = (l) => {
    Ot && !Ot.contains(l.target) && l.target !== e && (Oo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Oo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), jo = Qn({
    render: () => nn(zr, {
      status: ho.value,
      onClose: Oo,
      onCommitted: (l) => {
        Oo(), d7(l.success, l.message), Sn().then(Ho);
      }
    })
  }), jo.mount(Ot), document.body.appendChild(Ot);
}
function Oo() {
  jo && (jo.unmount(), jo = null), Ot && (Ot.remove(), Ot = null);
}
function d7(e, s) {
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
  const i = document.createElement("span");
  i.textContent = s, o.appendChild(i), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function u7() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", ti = Qn({
    render: () => nn(bT)
  }), ti.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function f7() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", si = Qn({
    render: () => nn(ZT)
  }), si.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Vt = null;
function Ho() {
  if (!Vt) return;
  const e = Vt.querySelector(".commit-indicator");
  e && (e.style.display = r7() ? "block" : "none");
}
function Oa() {
  if (!Vt) return;
  const e = il !== "managed";
  Vt.disabled = e, Vt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Hr = document.createElement("style");
Hr.textContent = `
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
document.head.appendChild(Hr);
Bt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        Bt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        Bt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
      ]), console.log("[ComfyGit] Disabled built-in missing nodes/models warnings");
    } catch (n) {
      console.warn("[ComfyGit] Failed to disable built-in warnings:", n);
    }
    window.__comfygit_pending_workflow = {
      graphData: e,
      missingNodeTypes: s,
      timestamp: Date.now()
    }, console.log("[ComfyGit] beforeConfigureGraph: captured workflow data", {
      nodeCount: ((o = e == null ? void 0 : e.nodes) == null ? void 0 : o.length) ?? 0,
      missingNodeTypes: (s == null ? void 0 : s.length) ?? 0
    });
  },
  async afterConfigureGraph(e) {
    const s = window.__comfygit_pending_workflow;
    s && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: {
        workflow: s.graphData,
        missingNodeTypes: e,
        timestamp: s.timestamp
      }
    })), console.log("[ComfyGit] afterConfigureGraph: dispatched workflow-loaded event", {
      missingNodeTypes: (e == null ? void 0 : e.length) ?? 0
    }));
  },
  async setup() {
    var l, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = ha, Vt = document.createElement("button"), Vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Vt.innerHTML = 'Commit <span class="commit-indicator"></span>', Vt.title = "Quick Commit", Vt.onclick = () => c7(Vt), e.appendChild(s), e.appendChild(Vt), (i = (l = Bt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Bt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), u7(), f7(), window.addEventListener("comfygit:open-panel", ((c) => {
      var u;
      const d = (u = c.detail) == null ? void 0 : u.initialView;
      ha(d);
    }));
    const { loadPendingDownloads: o } = ko();
    o(), await Promise.all([Sn(), Da()]), Ho(), Oa(), La(), setTimeout(La, 100), setInterval(async () => {
      await Promise.all([Sn(), Da()]), Ho(), Oa();
    }, 3e4);
    const n = Bt.api;
    if (n) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, d = function() {
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
      }, u = function(g) {
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
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", S.appendChild($);
        const P = document.createElement("div");
        P.textContent = "Dependency conflict detected", P.style.cssText = "font-size: 12px; opacity: 0.8;", S.appendChild(P), p.appendChild(S);
        const D = document.createElement("button");
        D.textContent = "View Logs", D.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, D.onmouseover = () => D.style.background = "#c62828", D.onmouseout = () => D.style.background = "#e53935", D.onclick = () => {
          p.remove(), ha("debug-env");
        }, p.appendChild(D);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => p.remove(), p.appendChild(E), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", S.appendChild($);
        const P = document.createElement("div");
        P.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, P.style.cssText = "font-size: 12px; opacity: 0.7;", S.appendChild(P), p.appendChild(S);
        const D = document.createElement("button");
        D.textContent = "Apply Changes", D.style.cssText = `
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
        `, D.onmouseover = () => D.style.background = "rgba(255,255,255,0.1)", D.onmouseout = () => D.style.background = "transparent", D.onclick = async () => {
          D.disabled = !0, D.textContent = "Restarting...", D.style.opacity = "0.7", $.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const x = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Bt.refreshComboInNodes && (await Bt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", D.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (W) {
                console.error("[ComfyGit] Failed to refresh nodes:", W), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", D.style.display = "none";
              }
            };
            n.addEventListener("reconnected", x, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (x) {
            console.error("[ComfyGit] Failed to restart:", x), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", D.textContent = "Try Again", D.disabled = !1, D.style.opacity = "1";
          }
        }, p.appendChild(D);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => p.remove(), p.appendChild(E), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Sn(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : d()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = l7(g.detail);
        w && u(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
