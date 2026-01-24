import { app as Bt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function La(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const st = {}, fo = [], gs = () => {
}, ei = () => !1, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Oa = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Aa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Wr = Object.prototype.hasOwnProperty, Ze = (e, s) => Wr.call(e, s), Be = Array.isArray, mo = (e) => tn(e) === "[object Map]", bo = (e) => tn(e) === "[object Set]", ll = (e) => tn(e) === "[object Date]", Ge = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", ti = (e) => (tt(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), si = Object.prototype.toString, tn = (e) => si.call(e), Gr = (e) => tn(e).slice(8, -1), oi = (e) => tn(e) === "[object Object]", Na = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, No = /* @__PURE__ */ La(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Un = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, jr = /-\w/g, jt = Un(
  (e) => e.replace(jr, (s) => s.slice(1).toUpperCase())
), Hr = /\B([A-Z])/g, Bs = Un(
  (e) => e.replace(Hr, "-$1").toLowerCase()
), zn = Un((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qn = Un(
  (e) => e ? `on${zn(e)}` : ""
), Us = (e, s) => !Object.is(e, s), yn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ni = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Fn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Kr = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let il;
const Bn = () => il || (il = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ht(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? Xr(n) : Ht(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ct(e) || tt(e))
    return e;
}
const qr = /;(?![^(]*\))/g, Yr = /:([^]+)/, Jr = /\/\*[^]*?\*\//g;
function Xr(e) {
  const s = {};
  return e.replace(Jr, "").split(qr).forEach((o) => {
    if (o) {
      const n = o.split(Yr);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Ee(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ee(e[o]);
      n && (s += n + " ");
    }
  else if (tt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zr = /* @__PURE__ */ La(Qr);
function ai(e) {
  return !!e || e === "";
}
function ec(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = eo(e[n], s[n]);
  return o;
}
function eo(e, s) {
  if (e === s) return !0;
  let o = ll(e), n = ll(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), n = ts(s), o || n)
    return e === s;
  if (o = Be(e), n = Be(s), o || n)
    return o && n ? ec(e, s) : !1;
  if (o = tt(e), n = tt(s), o || n) {
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
function Ua(e, s) {
  return e.findIndex((o) => eo(o, s));
}
const li = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Be(e) || tt(e) && (e.toString === si || !Ge(e.toString)) ? li(e) ? f(e.value) : JSON.stringify(e, ii, 2) : String(e), ii = (e, s) => li(s) ? ii(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Zn(n, i) + " =>"] = l, o),
    {}
  )
} : bo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Zn(o))
} : ts(s) ? Zn(s) : tt(s) && !Be(s) && !oi(s) ? String(s) : s, Zn = (e, s = "") => {
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
let Lt;
class tc {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Lt, !s && Lt && (this.index = (Lt.scopes || (Lt.scopes = [])).push(
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
      const o = Lt;
      try {
        return Lt = this, s();
      } finally {
        Lt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Lt, Lt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Lt = this.prevScope, this.prevScope = void 0);
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
function sc() {
  return Lt;
}
let nt;
const ea = /* @__PURE__ */ new WeakSet();
class ri {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && Lt.active && Lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ea.has(this) && (ea.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || di(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rl(this), ui(this);
    const s = nt, o = Qt;
    nt = this, Qt = !0;
    try {
      return this.fn();
    } finally {
      fi(this), nt = s, Qt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Ba(s);
      this.deps = this.depsTail = void 0, rl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ea.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ha(this) && this.run();
  }
  get dirty() {
    return ha(this);
  }
}
let ci = 0, Uo, zo;
function di(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = zo, zo = e;
    return;
  }
  e.next = Uo, Uo = e;
}
function za() {
  ci++;
}
function Fa() {
  if (--ci > 0)
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
function ui(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function fi(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), Ba(n), oc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function ha(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (mi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function mi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ha(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = Qt;
  nt = e, Qt = !0;
  try {
    ui(e);
    const l = e.fn(e._value);
    (s.version === 0 || Us(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Qt = n, fi(e), e.flags &= -3;
  }
}
function Ba(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Ba(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function oc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Qt = !0;
const vi = [];
function Ss() {
  vi.push(Qt), Qt = !1;
}
function Is() {
  const e = vi.pop();
  Qt = e === void 0 ? !0 : e;
}
function rl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = nt;
    nt = void 0;
    try {
      s();
    } finally {
      nt = o;
    }
  }
}
let Ko = 0;
class nc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Va {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!nt || !Qt || nt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== nt)
      o = this.activeLink = new nc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, pi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = nt.depsTail, o.nextDep = void 0, nt.depsTail.nextDep = o, nt.depsTail = o, nt.deps === o && (nt.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, Ko++, this.notify(s);
  }
  notify(s) {
    za();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Fa();
    }
  }
}
function pi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        pi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const ya = /* @__PURE__ */ new WeakMap(), Qs = Symbol(
  ""
), wa = Symbol(
  ""
), qo = Symbol(
  ""
);
function wt(e, s, o) {
  if (Qt && nt) {
    let n = ya.get(e);
    n || ya.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Va()), l.map = n, l.key = o), l.track();
  }
}
function $s(e, s, o, n, l, i) {
  const c = ya.get(e);
  if (!c) {
    Ko++;
    return;
  }
  const d = (u) => {
    u && u.trigger();
  };
  if (za(), s === "clear")
    c.forEach(d);
  else {
    const u = Be(e), m = u && Na(o);
    if (u && o === "length") {
      const v = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === qo || !ts(w) && w >= v) && d(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && d(c.get(o)), m && d(c.get(qo)), s) {
        case "add":
          u ? m && d(c.get("length")) : (d(c.get(Qs)), mo(e) && d(c.get(wa)));
          break;
        case "delete":
          u || (d(c.get(Qs)), mo(e) && d(c.get(wa)));
          break;
        case "set":
          mo(e) && d(c.get(Qs));
          break;
      }
  }
  Fa();
}
function ao(e) {
  const s = Xe(e);
  return s === e ? s : (wt(s, "iterate", qo), Wt(e) ? s : s.map(ss));
}
function Vn(e) {
  return wt(e = Xe(e), "iterate", qo), e;
}
function Os(e, s) {
  return Es(e) ? Zs(e) ? yo(ss(s)) : yo(s) : ss(s);
}
const ac = {
  __proto__: null,
  [Symbol.iterator]() {
    return ta(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Be(s) ? ao(s) : s)
    );
  },
  entries() {
    return ta(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
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
    return sa(this, "includes", e);
  },
  indexOf(...e) {
    return sa(this, "indexOf", e);
  },
  join(e) {
    return ao(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return sa(this, "lastIndexOf", e);
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
    return cl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return cl(this, "reduceRight", e, s);
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
    return ta(this, "values", (e) => Os(this, e));
  }
};
function ta(e, s, o) {
  const n = Vn(e), l = n[s]();
  return n !== e && !Wt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const lc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const c = Vn(e), d = c !== e && !Wt(e), u = c[s];
  if (u !== lc[s]) {
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
function cl(e, s, o, n) {
  const l = Vn(e);
  let i = o;
  return l !== e && (Wt(e) ? o.length > 3 && (i = function(c, d, u) {
    return o.call(this, c, d, u, e);
  }) : i = function(c, d, u) {
    return o.call(this, c, Os(e, d), u, e);
  }), l[s](i, ...n);
}
function sa(e, s, o) {
  const n = Xe(e);
  wt(n, "iterate", qo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && ja(o[0]) ? (o[0] = Xe(o[0]), n[s](...o)) : l;
}
function To(e, s, o = []) {
  Ss(), za();
  const n = Xe(e)[s].apply(e, o);
  return Fa(), Is(), n;
}
const ic = /* @__PURE__ */ La("__proto__,__v_isRef,__isVue"), gi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function rc(e) {
  ts(e) || (e = String(e));
  const s = Xe(this);
  return wt(s, "has", e), s.hasOwnProperty(e);
}
class hi {
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
      return n === (l ? i ? yc : bi : i ? _i : wi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Be(s);
    if (!l) {
      let u;
      if (c && (u = ac[o]))
        return u;
      if (o === "hasOwnProperty")
        return rc;
    }
    const d = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((ts(o) ? gi.has(o) : ic(o)) || (l || wt(s, "get", o), i))
      return d;
    if ($t(d)) {
      const u = c && Na(o) ? d : d.value;
      return l && tt(u) ? xn(u) : u;
    }
    return tt(d) ? l ? xn(d) : Vs(d) : d;
  }
}
class yi extends hi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Be(s) && Na(o);
    if (!this._isShallow) {
      const m = Es(i);
      if (!Wt(n) && !Es(n) && (i = Xe(i), n = Xe(n)), !c && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const d = c ? Number(o) < s.length : Ze(s, o), u = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
    );
    return s === Xe(l) && (d ? Us(n, i) && $s(s, "set", o, n) : $s(s, "add", o, n)), u;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && $s(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ts(o) || !gi.has(o)) && wt(s, "has", o), n;
  }
  ownKeys(s) {
    return wt(
      s,
      "iterate",
      Be(s) ? "length" : Qs
    ), Reflect.ownKeys(s);
  }
}
class cc extends hi {
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
const dc = /* @__PURE__ */ new yi(), uc = /* @__PURE__ */ new cc(), fc = /* @__PURE__ */ new yi(!0);
const _a = (e) => e, rn = (e) => Reflect.getPrototypeOf(e);
function mc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Xe(l), c = mo(i), d = e === "entries" || e === Symbol.iterator && c, u = e === "keys" && c, m = l[e](...n), v = o ? _a : s ? yo : ss;
    return !s && wt(
      i,
      "iterate",
      u ? wa : Qs
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
function cn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vc(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, c = Xe(i), d = Xe(l);
      e || (Us(l, d) && wt(c, "get", l), wt(c, "get", d));
      const { has: u } = rn(c), m = s ? _a : e ? yo : ss;
      if (u.call(c, l))
        return m(i.get(l));
      if (u.call(c, d))
        return m(i.get(d));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && wt(Xe(l), "iterate", Qs), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Xe(i), d = Xe(l);
      return e || (Us(l, d) && wt(c, "has", l), wt(c, "has", d)), l === d ? i.has(l) : i.has(l) || i.has(d);
    },
    forEach(l, i) {
      const c = this, d = c.__v_raw, u = Xe(d), m = s ? _a : e ? yo : ss;
      return !e && wt(u, "iterate", Qs), d.forEach((v, g) => l.call(i, m(v), m(g), c));
    }
  };
  return pt(
    o,
    e ? {
      add: cn("add"),
      set: cn("set"),
      delete: cn("delete"),
      clear: cn("clear")
    } : {
      add(l) {
        !s && !Wt(l) && !Es(l) && (l = Xe(l));
        const i = Xe(this);
        return rn(i).has.call(i, l) || (i.add(l), $s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Wt(i) && !Es(i) && (i = Xe(i));
        const c = Xe(this), { has: d, get: u } = rn(c);
        let m = d.call(c, l);
        m || (l = Xe(l), m = d.call(c, l));
        const v = u.call(c, l);
        return c.set(l, i), m ? Us(i, v) && $s(c, "set", l, i) : $s(c, "add", l, i), this;
      },
      delete(l) {
        const i = Xe(this), { has: c, get: d } = rn(i);
        let u = c.call(i, l);
        u || (l = Xe(l), u = c.call(i, l)), d && d.call(i, l);
        const m = i.delete(l);
        return u && $s(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Xe(this), i = l.size !== 0, c = l.clear();
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
    o[l] = mc(l, e, s);
  }), o;
}
function Wa(e, s) {
  const o = vc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const pc = {
  get: /* @__PURE__ */ Wa(!1, !1)
}, gc = {
  get: /* @__PURE__ */ Wa(!1, !0)
}, hc = {
  get: /* @__PURE__ */ Wa(!0, !1)
};
const wi = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), yc = /* @__PURE__ */ new WeakMap();
function wc(e) {
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
function _c(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wc(Gr(e));
}
function Vs(e) {
  return Es(e) ? e : Ga(
    e,
    !1,
    dc,
    pc,
    wi
  );
}
function bc(e) {
  return Ga(
    e,
    !1,
    fc,
    gc,
    _i
  );
}
function xn(e) {
  return Ga(
    e,
    !0,
    uc,
    hc,
    bi
  );
}
function Ga(e, s, o, n, l) {
  if (!tt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = _c(e);
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
function ja(e) {
  return e ? !!e.__v_raw : !1;
}
function Xe(e) {
  const s = e && e.__v_raw;
  return s ? Xe(s) : e;
}
function kc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && ni(e, "__v_skip", !0), e;
}
const ss = (e) => tt(e) ? Vs(e) : e, yo = (e) => tt(e) ? xn(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return $c(e, !1);
}
function $c(e, s) {
  return $t(e) ? e : new Cc(e, s);
}
class Cc {
  constructor(s, o) {
    this.dep = new Va(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Xe(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Wt(s) || Es(s);
    s = n ? s : Xe(s), Us(s, o) && (this._rawValue = s, this._value = n ? s : ss(s), this.dep.trigger());
  }
}
function We(e) {
  return $t(e) ? e.value : e;
}
const xc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function ki(e) {
  return Zs(e) ? e : new Proxy(e, xc);
}
class Sc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ko - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return di(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return mi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Ic(e, s, o = !1) {
  let n, l;
  return Ge(e) ? n = e : (n = e.get, l = e.set), new Sc(n, l, o);
}
const dn = {}, Sn = /* @__PURE__ */ new WeakMap();
let Js;
function Ec(e, s = !1, o = Js) {
  if (o) {
    let n = Sn.get(o);
    n || Sn.set(o, n = []), n.push(e);
  }
}
function Tc(e, s, o = st) {
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
  const $ = sc(), P = () => {
    v.stop(), $ && $.active && Aa($.effects, v);
  };
  if (i && s) {
    const x = s;
    s = (...W) => {
      x(...W), P();
    };
  }
  let L = S ? new Array(e.length).fill(dn) : dn;
  const I = (x) => {
    if (!(!(v.flags & 1) || !v.dirty && !x))
      if (s) {
        const W = v.run();
        if (l || _ || (S ? W.some((V, F) => Us(V, L[F])) : Us(W, L))) {
          w && w();
          const V = Js;
          Js = v;
          try {
            const F = [
              W,
              // pass undefined as the old value when it's changed for the first time
              L === dn ? void 0 : S && L[0] === dn ? [] : L,
              p
            ];
            L = W, u ? u(s, 3, F) : (
              // @ts-expect-error
              s(...F)
            );
          } finally {
            Js = V;
          }
        }
      } else
        v.run();
  };
  return d && d(I), v = new ri(g), v.scheduler = c ? () => c(I, !1) : I, p = (x) => Ec(x, !1, v), w = v.onStop = () => {
    const x = Sn.get(v);
    if (x) {
      if (u)
        u(x, 4);
      else
        for (const W of x) W();
      Sn.delete(v);
    }
  }, s ? n ? I(!0) : L = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
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
  else if (oi(e)) {
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
    Wn(l, s, o);
  }
}
function os(e, s, o, n) {
  if (Ge(e)) {
    const l = sn(e, s, o, n);
    return l && ti(l) && l.catch((i) => {
      Wn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(os(e[i], s, o, n));
    return l;
  }
}
function Wn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || st;
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
  Pc(e, o, l, n, c);
}
function Pc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let ms = -1;
const vo = [];
let As = null, ro = 0;
const $i = /* @__PURE__ */ Promise.resolve();
let In = null;
function _t(e) {
  const s = In || $i;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Rc(e) {
  let s = ms + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = Yo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Ha(e) {
  if (!(e.flags & 1)) {
    const s = Yo(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Yo(o) ? It.push(e) : It.splice(Rc(s), 0, e), e.flags |= 1, Ci();
  }
}
function Ci() {
  In || (In = $i.then(Si));
}
function Mc(e) {
  Be(e) ? vo.push(...e) : As && e.id === -1 ? As.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), Ci();
}
function dl(e, s, o = ms + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function xi(e) {
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
function Si(e) {
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
    ms = -1, It.length = 0, xi(), In = null, (It.length || vo.length) && Si();
  }
}
let ht = null, Ii = null;
function En(e) {
  const s = ht;
  return ht = e, Ii = e && e.type.__scopeId || null, s;
}
function h(e, s = ht, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Rn(-1);
    const i = En(s);
    let c;
    try {
      c = e(...l);
    } finally {
      En(i), n._d && Rn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (ht === null)
    return e;
  const o = qn(ht), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, d, u = st] = s[l];
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
const Ei = Symbol("_vte"), Ti = (e) => e.__isTeleport, Fo = (e) => e && (e.disabled || e.disabled === ""), ul = (e) => e && (e.defer || e.defer === ""), fl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ml = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ba = (e, s) => {
  const o = e && e.to;
  return ct(o) ? s ? s(o) : null : o;
}, Pi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, d, u, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: S, createComment: $ }
    } = m, P = Fo(s.props);
    let { shapeFlag: L, children: I, dynamicChildren: x } = s;
    if (e == null) {
      const W = s.el = S(""), V = s.anchor = S("");
      p(W, o, n), p(V, o, n);
      const F = (E, R) => {
        L & 16 && v(
          I,
          E,
          R,
          l,
          i,
          c,
          d,
          u
        );
      }, T = () => {
        const E = s.target = ba(s.props, _), R = Ri(E, s, S, p);
        E && (c !== "svg" && fl(E) ? c = "svg" : c !== "mathml" && ml(E) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), P || (F(E, R), wn(s, !1)));
      };
      P && (F(o, V), wn(s, !0)), ul(s.props) ? (s.el.__isMounted = !1, St(() => {
        T(), delete s.el.__isMounted;
      }, i)) : T();
    } else {
      if (ul(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Pi.process(
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
      const W = s.anchor = e.anchor, V = s.target = e.target, F = s.targetAnchor = e.targetAnchor, T = Fo(e.props), E = T ? o : V, R = T ? W : F;
      if (c === "svg" || fl(V) ? c = "svg" : (c === "mathml" || ml(V)) && (c = "mathml"), x ? (w(
        e.dynamicChildren,
        x,
        E,
        l,
        i,
        c,
        d
      ), Xa(e, s, !0)) : u || g(
        e,
        s,
        E,
        R,
        l,
        i,
        c,
        d,
        !1
      ), P)
        T ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : un(
          s,
          o,
          W,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ee = s.target = ba(
          s.props,
          _
        );
        ee && un(
          s,
          ee,
          null,
          m,
          0
        );
      } else T && un(
        s,
        V,
        F,
        m,
        1
      );
      wn(s, P);
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
  move: un,
  hydrate: Dc
};
function un(e, s, o, { o: { insert: n }, m: l }, i = 2) {
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
function Dc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: d, querySelector: u, insert: m, createText: v }
}, g) {
  function w(S, $, P, L) {
    $.anchor = g(
      c(S),
      $,
      d(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = L;
  }
  const p = s.target = ba(
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
        s.targetAnchor || Ri(p, s, v, m), g(
          S && c(S),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    wn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const yt = Pi;
function wn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Ri(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Ei] = i, e && (n(l, e), n(i, e)), i;
}
const ks = Symbol("_leaveCb"), fn = Symbol("_enterCb");
function Mi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return et(() => {
    e.isMounted = !0;
  }), Fi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ft = [Function, Array], Di = {
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
}, Li = (e) => {
  const s = e.subTree;
  return s.component ? Li(s.component) : s;
}, Lc = {
  name: "BaseTransition",
  props: Di,
  setup(e, { slots: s }) {
    const o = Za(), n = Mi();
    return () => {
      const l = s.default && Ka(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Oi(l), c = Xe(e), { mode: d } = c;
      if (n.isLeaving)
        return oa(i);
      const u = vl(i);
      if (!u)
        return oa(i);
      let m = Jo(
        u,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      u.type !== bt && to(u, m);
      let v = o.subTree && vl(o.subTree);
      if (v && v.type !== bt && !Xs(v, u) && Li(o).type !== bt) {
        let g = Jo(
          v,
          c,
          n,
          o
        );
        if (to(v, g), d === "out-in" && u.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, oa(i);
        d === "in-out" && u.type !== bt ? g.delayLeave = (w, p, _) => {
          const S = Ai(
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
function Oi(e) {
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
const Oc = Lc;
function Ai(e, s) {
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
    onAfterAppear: L,
    onAppearCancelled: I
  } = s, x = String(e.key), W = Ai(o, e), V = (E, R) => {
    E && os(
      E,
      n,
      9,
      R
    );
  }, F = (E, R) => {
    const ee = R[1];
    V(E, R), Be(E) ? E.every((Y) => Y.length <= 1) && ee() : E.length <= 1 && ee();
  }, T = {
    mode: c,
    persisted: d,
    beforeEnter(E) {
      let R = u;
      if (!o.isMounted)
        if (i)
          R = $ || u;
        else
          return;
      E[ks] && E[ks](
        !0
        /* cancelled */
      );
      const ee = W[x];
      ee && Xs(e, ee) && ee.el[ks] && ee.el[ks](), V(R, [E]);
    },
    enter(E) {
      let R = m, ee = v, Y = g;
      if (!o.isMounted)
        if (i)
          R = P || m, ee = L || v, Y = I || g;
        else
          return;
      let G = !1;
      const ae = E[fn] = (te) => {
        G || (G = !0, te ? V(Y, [E]) : V(ee, [E]), T.delayedLeave && T.delayedLeave(), E[fn] = void 0);
      };
      R ? F(R, [E, ae]) : ae();
    },
    leave(E, R) {
      const ee = String(e.key);
      if (E[fn] && E[fn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return R();
      V(w, [E]);
      let Y = !1;
      const G = E[ks] = (ae) => {
        Y || (Y = !0, R(), ae ? V(S, [E]) : V(_, [E]), E[ks] = void 0, W[ee] === e && delete W[ee]);
      };
      W[ee] = e, p ? F(p, [E, G]) : G();
    },
    clone(E) {
      const R = Jo(
        E,
        s,
        o,
        n,
        l
      );
      return l && l(R), R;
    }
  };
  return T;
}
function oa(e) {
  if (Gn(e))
    return e = zs(e), e.children = null, e;
}
function vl(e) {
  if (!Gn(e))
    return Ti(e.type) && e.children ? Oi(e.children) : e;
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
function Ka(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const d = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
      Ka(c.children, s, d)
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
function Ni(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Tn = /* @__PURE__ */ new WeakMap();
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
  const i = n.shapeFlag & 4 ? qn(n.component) : n.el, c = l ? null : i, { i: d, r: u } = e, m = s && s.r, v = d.refs === st ? d.refs = {} : d.refs, g = d.setupState, w = Xe(g), p = g === st ? ei : (_) => Ze(w, _);
  if (m != null && m !== u) {
    if (pl(s), ct(m))
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
            Be(P) && Aa(P, i);
          else if (Be(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[u] = [i], p(u) && (g[u] = v[u]);
          else {
            const L = [i];
            u.value = L, e.k && (v[e.k] = L);
          }
        } else _ ? (v[u] = c, p(u) && (g[u] = c)) : S && (u.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          $(), Tn.delete(e);
        };
        P.id = -1, Tn.set(e, P), St(P, o);
      } else
        pl(e), $();
    }
  }
}
function pl(e) {
  const s = Tn.get(e);
  s && (s.flags |= 8, Tn.delete(e));
}
Bn().requestIdleCallback;
Bn().cancelIdleCallback;
const po = (e) => !!e.type.__asyncLoader, Gn = (e) => e.type.__isKeepAlive;
function Ac(e, s) {
  Ui(e, "a", s);
}
function Nc(e, s) {
  Ui(e, "da", s);
}
function Ui(e, s, o = kt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (jn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Gn(l.parent.vnode) && Uc(n, s, o, l), l = l.parent;
  }
}
function Uc(e, s, o, n) {
  const l = jn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  oo(() => {
    Aa(n[s], l);
  }, o);
}
function jn(e, s, o = kt, n = !1) {
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
  (!Zo || e === "sp") && jn(e, (...n) => s(...n), o);
}, zc = Ts("bm"), et = Ts("m"), Fc = Ts(
  "bu"
), zi = Ts("u"), Fi = Ts(
  "bum"
), oo = Ts("um"), Bc = Ts(
  "sp"
), Vc = Ts("rtg"), Wc = Ts("rtc");
function Gc(e, s = kt) {
  jn("ec", e, s);
}
const jc = "components", Bi = Symbol.for("v-ndc");
function qa(e) {
  return ct(e) ? Hc(jc, e, !1) || e : e || Bi;
}
function Hc(e, s, o = !0, n = !1) {
  const l = ht || kt;
  if (l) {
    const i = l.type;
    {
      const d = Ld(
        i,
        !1
      );
      if (d && (d === s || d === jt(s) || d === zn(jt(s))))
        return i;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      gl(l[e] || i[e], s) || // global registration
      gl(l.appContext[e], s)
    );
    return !c && n ? i : c;
  }
}
function gl(e, s) {
  return e && (e[s] || e[jt(s)] || e[zn(jt(s))]);
}
function we(e, s, o, n) {
  let l;
  const i = o, c = Be(e);
  if (c || ct(e)) {
    const d = c && Zs(e);
    let u = !1, m = !1;
    d && (u = !Wt(e), m = Es(e), e = Vn(e)), l = new Array(e.length);
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
  } else if (tt(e))
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
    return s !== "default" && (o.name = s), a(), M(
      j,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Vi(i(o)), d = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, u = M(
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
function Vi(e) {
  return e.some((s) => Qo(s) ? !(s.type === bt || s.type === j && !Vi(s.children)) : !0) ? e : null;
}
const ka = (e) => e ? ir(e) ? qn(e) : ka(e.parent) : null, Vo = (
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
    $parent: (e) => ka(e.parent),
    $root: (e) => ka(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Gi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ha(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _t.bind(e.proxy)),
    $watch: (e) => nd.bind(e)
  })
), na = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Kc = {
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
        if (na(n, s))
          return c[s] = 1, n[s];
        if (l !== st && Ze(l, s))
          return c[s] = 2, l[s];
        if (Ze(i, s))
          return c[s] = 3, i[s];
        if (o !== st && Ze(o, s))
          return c[s] = 4, o[s];
        $a && (c[s] = 0);
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
    if (o !== st && Ze(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = u.config.globalProperties, Ze(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return na(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, d) {
    let u;
    return !!(o[d] || e !== st && d[0] !== "$" && Ze(e, d) || na(s, d) || Ze(i, d) || Ze(n, d) || Ze(Vo, d) || Ze(l.config.globalProperties, d) || (u = c.__cssModules) && u[d]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function hl(e) {
  return Be(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let $a = !0;
function qc(e) {
  const s = Gi(e), o = e.proxy, n = e.ctx;
  $a = !1, s.beforeCreate && yl(s.beforeCreate, e, "bc");
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
    beforeUnmount: L,
    destroyed: I,
    unmounted: x,
    render: W,
    renderTracked: V,
    renderTriggered: F,
    errorCaptured: T,
    serverPrefetch: E,
    // public API
    expose: R,
    inheritAttrs: ee,
    // assets
    components: Y,
    directives: G,
    filters: ae
  } = s;
  if (m && Yc(m, n, null), c)
    for (const H in c) {
      const O = c[H];
      Ge(O) && (n[H] = O.bind(o));
    }
  if (l) {
    const H = l.call(o, o);
    tt(H) && (e.data = Vs(H));
  }
  if ($a = !0, i)
    for (const H in i) {
      const O = i[H], re = Ge(O) ? O.bind(o, o) : Ge(O.get) ? O.get.bind(o, o) : gs, me = !Ge(O) && Ge(O.set) ? O.set.bind(o) : gs, Pe = N({
        get: re,
        set: me
      });
      Object.defineProperty(n, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (Ue) => Pe.value = Ue
      });
    }
  if (d)
    for (const H in d)
      Wi(d[H], n, o, H);
  if (u) {
    const H = Ge(u) ? u.call(o) : u;
    Reflect.ownKeys(H).forEach((O) => {
      td(O, H[O]);
    });
  }
  v && yl(v, e, "c");
  function A(H, O) {
    Be(O) ? O.forEach((re) => H(re.bind(o))) : O && H(O.bind(o));
  }
  if (A(zc, g), A(et, w), A(Fc, p), A(zi, _), A(Ac, S), A(Nc, $), A(Gc, T), A(Wc, V), A(Vc, F), A(Fi, L), A(oo, x), A(Bc, E), Be(R))
    if (R.length) {
      const H = e.exposed || (e.exposed = {});
      R.forEach((O) => {
        Object.defineProperty(H, O, {
          get: () => o[O],
          set: (re) => o[O] = re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === gs && (e.render = W), ee != null && (e.inheritAttrs = ee), Y && (e.components = Y), G && (e.directives = G), E && Ni(e);
}
function Yc(e, s, o = gs) {
  Be(e) && (e = Ca(e));
  for (const n in e) {
    const l = e[n];
    let i;
    tt(l) ? "default" in l ? i = _n(
      l.from || n,
      l.default,
      !0
    ) : i = _n(l.from || n) : i = _n(l), $t(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : s[n] = i;
  }
}
function yl(e, s, o) {
  os(
    Be(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Wi(e, s, o, n) {
  let l = n.includes(".") ? Ki(o, n) : () => o[n];
  if (ct(e)) {
    const i = s[e];
    Ge(i) && Ct(l, i);
  } else if (Ge(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (Be(e))
      e.forEach((i) => Wi(i, s, o, n));
    else {
      const i = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(i) && Ct(l, i, e);
    }
}
function Gi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: c }
  } = e.appContext, d = i.get(s);
  let u;
  return d ? u = d : !l.length && !o && !n ? u = s : (u = {}, l.length && l.forEach(
    (m) => Pn(u, m, c, !0)
  ), Pn(u, s, c)), tt(s) && i.set(s, u), u;
}
function Pn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Pn(e, i, o, !0), l && l.forEach(
    (c) => Pn(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const d = Jc[c] || o && o[c];
      e[c] = d ? d(e[c], s[c]) : s[c];
    }
  return e;
}
const Jc = {
  data: wl,
  props: _l,
  emits: _l,
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
  watch: Qc,
  // provide / inject
  provide: wl,
  inject: Xc
};
function wl(e, s) {
  return s ? e ? function() {
    return pt(
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Xc(e, s) {
  return Ao(Ca(e), Ca(s));
}
function Ca(e) {
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
function _l(e, s) {
  return e ? Be(e) && Be(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    hl(e),
    hl(s ?? {})
  ) : s;
}
function Qc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function ji() {
  return {
    app: null,
    config: {
      isNativeTag: ei,
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
let Zc = 0;
function ed(e, s) {
  return function(n, l = null) {
    Ge(n) || (n = pt({}, n)), l != null && !tt(l) && (l = null);
    const i = ji(), c = /* @__PURE__ */ new WeakSet(), d = [];
    let u = !1;
    const m = i.app = {
      _uid: Zc++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Ad,
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
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), u = !0, m._container = v, v.__vue_app__ = m, qn(p.component);
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
function td(e, s) {
  if (kt) {
    let o = kt.provides;
    const n = kt.parent && kt.parent.provides;
    n === o && (o = kt.provides = Object.create(n)), o[e] = s;
  }
}
function _n(e, s, o = !1) {
  const n = Za();
  if (n || go) {
    let l = go ? go._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const sd = Symbol.for("v-scx"), od = () => _n(sd);
function Ct(e, s, o) {
  return Hi(e, s, o);
}
function Hi(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, d = pt({}, o), u = s && n || !s && i !== "post";
  let m;
  if (Zo) {
    if (i === "sync") {
      const p = od();
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
    _ ? p() : Ha(p);
  }), d.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Tc(e, s, d);
  return Zo && (m ? m.push(w) : u && w()), w;
}
function nd(e, s, o) {
  const n = this.proxy, l = ct(e) ? e.includes(".") ? Ki(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Ge(s) ? i = s : (i = s.handler, o = s);
  const c = on(this), d = Hi(l, i.bind(n), o);
  return c(), d;
}
function Ki(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const ad = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${jt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function ld(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && ad(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => ct(v) ? v.trim() : v)), c.number && (l = o.map(Fn)));
  let d, u = n[d = Qn(s)] || // also try camelCase event handler (#2249)
  n[d = Qn(jt(s))];
  !u && i && (u = n[d = Qn(Bs(s))]), u && os(
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
const id = /* @__PURE__ */ new WeakMap();
function qi(e, s, o = !1) {
  const n = o ? id : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, d = !1;
  if (!Ge(e)) {
    const u = (m) => {
      const v = qi(m, s, !0);
      v && (d = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !d ? (tt(e) && n.set(e, null), null) : (Be(i) ? i.forEach((u) => c[u] = null) : pt(c, i), tt(e) && n.set(e, c), c);
}
function Hn(e, s) {
  return !e || !Nn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, Bs(s)) || Ze(e, s));
}
function bl(e) {
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
  } = e, $ = En(e);
  let P, L;
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
      ), L = d;
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
      ), L = s.props ? d : rd(d);
    }
  } catch (x) {
    Wo.length = 0, Wn(x, e, 1), P = C(bt);
  }
  let I = P;
  if (L && S !== !1) {
    const x = Object.keys(L), { shapeFlag: W } = I;
    x.length && W & 7 && (i && x.some(Oa) && (L = cd(
      L,
      i
    )), I = zs(I, L, !1, !0));
  }
  return o.dirs && (I = zs(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && to(I, o.transition), P = I, En($), P;
}
const rd = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Nn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, cd = (e, s) => {
  const o = {};
  for (const n in e)
    (!Oa(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function dd(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: c, children: d, patchFlag: u } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? kl(n, c, m) : !!c;
    if (u & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== n[w] && !Hn(m, w))
          return !0;
      }
    }
  } else
    return (l || d) && (!d || !d.$stable) ? !0 : n === c ? !1 : n ? c ? kl(n, c, m) : !0 : !!c;
  return !1;
}
function kl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !Hn(o, i))
      return !0;
  }
  return !1;
}
function ud({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Yi = {}, Ji = () => Object.create(Yi), Xi = (e) => Object.getPrototypeOf(e) === Yi;
function fd(e, s, o, n = !1) {
  const l = {}, i = Ji();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Qi(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : bc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function md(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, d = Xe(l), [u] = e.propsOptions;
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
        if (Hn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (u)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = jt(w);
            l[_] = xa(
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
    Qi(e, s, l, i) && (m = !0);
    let v;
    for (const g in d)
      (!s || // for camelCase
      !Ze(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !Ze(s, v))) && (u ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = xa(
        u,
        d,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (i !== d)
      for (const g in i)
        (!s || !Ze(s, g)) && (delete i[g], m = !0);
  }
  m && $s(e.attrs, "set", "");
}
function Qi(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let c = !1, d;
  if (s)
    for (let u in s) {
      if (No(u))
        continue;
      const m = s[u];
      let v;
      l && Ze(l, v = jt(u)) ? !i || !i.includes(v) ? o[v] = m : (d || (d = {}))[v] = m : Hn(e.emitsOptions, u) || (!(u in n) || m !== n[u]) && (n[u] = m, c = !0);
    }
  if (i) {
    const u = Xe(o), m = d || st;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = xa(
        l,
        u,
        g,
        m[g],
        e,
        !Ze(m, g)
      );
    }
  }
  return c;
}
function xa(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const d = Ze(c, "default");
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
const vd = /* @__PURE__ */ new WeakMap();
function Zi(e, s, o = !1) {
  const n = o ? vd : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, d = [];
  let u = !1;
  if (!Ge(e)) {
    const v = (g) => {
      u = !0;
      const [w, p] = Zi(g, s, !0);
      pt(c, w), p && d.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !u)
    return tt(e) && n.set(e, fo), fo;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = jt(i[v]);
      $l(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = jt(v);
      if ($l(g)) {
        const w = i[v], p = c[g] = Be(w) || Ge(w) ? { type: w } : pt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (Be(_))
          for (let P = 0; P < _.length; ++P) {
            const L = _[P], I = Ge(L) && L.name;
            if (I === "Boolean") {
              S = !0;
              break;
            } else I === "String" && ($ = !1);
          }
        else
          S = Ge(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = $, (S || Ze(p, "default")) && d.push(g);
      }
    }
  const m = [c, d];
  return tt(e) && n.set(e, m), m;
}
function $l(e) {
  return e[0] !== "$" && !No(e);
}
const Ya = (e) => e === "_" || e === "_ctx" || e === "$stable", Ja = (e) => Be(e) ? e.map(ps) : [ps(e)], pd = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Ja(s(...l)), o);
  return n._c = !1, n;
}, er = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Ya(l)) continue;
    const i = e[l];
    if (Ge(i))
      s[l] = pd(l, i, n);
    else if (i != null) {
      const c = Ja(i);
      s[l] = () => c;
    }
  }
}, tr = (e, s) => {
  const o = Ja(s);
  e.slots.default = () => o;
}, sr = (e, s, o) => {
  for (const n in s)
    (o || !Ya(n)) && (e[n] = s[n]);
}, gd = (e, s, o) => {
  const n = e.slots = Ji();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (sr(n, s, o), o && ni(n, "_", l, !0)) : er(s, n);
  } else s && tr(e, s);
}, hd = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const d = s._;
    d ? o && d === 1 ? i = !1 : sr(l, s, o) : (i = !s.$stable, er(s, l)), c = s;
  } else s && (tr(e, s), c = { default: 1 });
  if (i)
    for (const d in l)
      !Ya(d) && c[d] == null && delete l[d];
}, St = kd;
function yd(e) {
  return wd(e);
}
function wd(e, s) {
  const o = Bn();
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
  } = e, S = (D, U, ne, ce = null, ve = null, pe = null, xe = void 0, Se = null, de = !!U.dynamicChildren) => {
    if (D === U)
      return;
    D && !Xs(D, U) && (ce = se(D), Ue(D, ve, pe, !0), D = null), U.patchFlag === -2 && (de = !1, U.dynamicChildren = null);
    const { type: ge, ref: Oe, shapeFlag: Ie } = U;
    switch (ge) {
      case Kn:
        $(D, U, ne, ce);
        break;
      case bt:
        P(D, U, ne, ce);
        break;
      case la:
        D == null && L(U, ne, ce, xe);
        break;
      case j:
        Y(
          D,
          U,
          ne,
          ce,
          ve,
          pe,
          xe,
          Se,
          de
        );
        break;
      default:
        Ie & 1 ? W(
          D,
          U,
          ne,
          ce,
          ve,
          pe,
          xe,
          Se,
          de
        ) : Ie & 6 ? G(
          D,
          U,
          ne,
          ce,
          ve,
          pe,
          xe,
          Se,
          de
        ) : (Ie & 64 || Ie & 128) && ge.process(
          D,
          U,
          ne,
          ce,
          ve,
          pe,
          xe,
          Se,
          de,
          Te
        );
    }
    Oe != null && ve ? Bo(Oe, D && D.ref, pe, U || D, !U) : Oe == null && D && D.ref != null && Bo(D.ref, null, pe, D, !0);
  }, $ = (D, U, ne, ce) => {
    if (D == null)
      n(
        U.el = d(U.children),
        ne,
        ce
      );
    else {
      const ve = U.el = D.el;
      U.children !== D.children && m(ve, U.children);
    }
  }, P = (D, U, ne, ce) => {
    D == null ? n(
      U.el = u(U.children || ""),
      ne,
      ce
    ) : U.el = D.el;
  }, L = (D, U, ne, ce) => {
    [D.el, D.anchor] = _(
      D.children,
      U,
      ne,
      ce,
      D.el,
      D.anchor
    );
  }, I = ({ el: D, anchor: U }, ne, ce) => {
    let ve;
    for (; D && D !== U; )
      ve = w(D), n(D, ne, ce), D = ve;
    n(U, ne, ce);
  }, x = ({ el: D, anchor: U }) => {
    let ne;
    for (; D && D !== U; )
      ne = w(D), l(D), D = ne;
    l(U);
  }, W = (D, U, ne, ce, ve, pe, xe, Se, de) => {
    if (U.type === "svg" ? xe = "svg" : U.type === "math" && (xe = "mathml"), D == null)
      V(
        U,
        ne,
        ce,
        ve,
        pe,
        xe,
        Se,
        de
      );
    else {
      const ge = D.el && D.el._isVueCE ? D.el : null;
      try {
        ge && ge._beginPatch(), E(
          D,
          U,
          ve,
          pe,
          xe,
          Se,
          de
        );
      } finally {
        ge && ge._endPatch();
      }
    }
  }, V = (D, U, ne, ce, ve, pe, xe, Se) => {
    let de, ge;
    const { props: Oe, shapeFlag: Ie, transition: oe, dirs: q } = D;
    if (de = D.el = c(
      D.type,
      pe,
      Oe && Oe.is,
      Oe
    ), Ie & 8 ? v(de, D.children) : Ie & 16 && T(
      D.children,
      de,
      null,
      ce,
      ve,
      aa(D, pe),
      xe,
      Se
    ), q && Hs(D, null, ce, "created"), F(de, D, D.scopeId, xe, ce), Oe) {
      for (const be in Oe)
        be !== "value" && !No(be) && i(de, be, null, Oe[be], pe, ce);
      "value" in Oe && i(de, "value", null, Oe.value, pe), (ge = Oe.onVnodeBeforeMount) && ds(ge, ce, D);
    }
    q && Hs(D, null, ce, "beforeMount");
    const De = _d(ve, oe);
    De && oe.beforeEnter(de), n(de, U, ne), ((ge = Oe && Oe.onVnodeMounted) || De || q) && St(() => {
      ge && ds(ge, ce, D), De && oe.enter(de), q && Hs(D, null, ce, "mounted");
    }, ve);
  }, F = (D, U, ne, ce, ve) => {
    if (ne && p(D, ne), ce)
      for (let pe = 0; pe < ce.length; pe++)
        p(D, ce[pe]);
    if (ve) {
      let pe = ve.subTree;
      if (U === pe || nr(pe.type) && (pe.ssContent === U || pe.ssFallback === U)) {
        const xe = ve.vnode;
        F(
          D,
          xe,
          xe.scopeId,
          xe.slotScopeIds,
          ve.parent
        );
      }
    }
  }, T = (D, U, ne, ce, ve, pe, xe, Se, de = 0) => {
    for (let ge = de; ge < D.length; ge++) {
      const Oe = D[ge] = Se ? Ns(D[ge]) : ps(D[ge]);
      S(
        null,
        Oe,
        U,
        ne,
        ce,
        ve,
        pe,
        xe,
        Se
      );
    }
  }, E = (D, U, ne, ce, ve, pe, xe) => {
    const Se = U.el = D.el;
    let { patchFlag: de, dynamicChildren: ge, dirs: Oe } = U;
    de |= D.patchFlag & 16;
    const Ie = D.props || st, oe = U.props || st;
    let q;
    if (ne && Ks(ne, !1), (q = oe.onVnodeBeforeUpdate) && ds(q, ne, U, D), Oe && Hs(U, D, ne, "beforeUpdate"), ne && Ks(ne, !0), (Ie.innerHTML && oe.innerHTML == null || Ie.textContent && oe.textContent == null) && v(Se, ""), ge ? R(
      D.dynamicChildren,
      ge,
      Se,
      ne,
      ce,
      aa(U, ve),
      pe
    ) : xe || O(
      D,
      U,
      Se,
      null,
      ne,
      ce,
      aa(U, ve),
      pe,
      !1
    ), de > 0) {
      if (de & 16)
        ee(Se, Ie, oe, ne, ve);
      else if (de & 2 && Ie.class !== oe.class && i(Se, "class", null, oe.class, ve), de & 4 && i(Se, "style", Ie.style, oe.style, ve), de & 8) {
        const De = U.dynamicProps;
        for (let be = 0; be < De.length; be++) {
          const _e = De[be], B = Ie[_e], z = oe[_e];
          (z !== B || _e === "value") && i(Se, _e, B, z, ve, ne);
        }
      }
      de & 1 && D.children !== U.children && v(Se, U.children);
    } else !xe && ge == null && ee(Se, Ie, oe, ne, ve);
    ((q = oe.onVnodeUpdated) || Oe) && St(() => {
      q && ds(q, ne, U, D), Oe && Hs(U, D, ne, "updated");
    }, ce);
  }, R = (D, U, ne, ce, ve, pe, xe) => {
    for (let Se = 0; Se < U.length; Se++) {
      const de = D[Se], ge = U[Se], Oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        de.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (de.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(de, ge) || // - In the case of a component, it could contain anything.
        de.shapeFlag & 198) ? g(de.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ne
        )
      );
      S(
        de,
        ge,
        Oe,
        null,
        ce,
        ve,
        pe,
        xe,
        !0
      );
    }
  }, ee = (D, U, ne, ce, ve) => {
    if (U !== ne) {
      if (U !== st)
        for (const pe in U)
          !No(pe) && !(pe in ne) && i(
            D,
            pe,
            U[pe],
            null,
            ve,
            ce
          );
      for (const pe in ne) {
        if (No(pe)) continue;
        const xe = ne[pe], Se = U[pe];
        xe !== Se && pe !== "value" && i(D, pe, Se, xe, ve, ce);
      }
      "value" in ne && i(D, "value", U.value, ne.value, ve);
    }
  }, Y = (D, U, ne, ce, ve, pe, xe, Se, de) => {
    const ge = U.el = D ? D.el : d(""), Oe = U.anchor = D ? D.anchor : d("");
    let { patchFlag: Ie, dynamicChildren: oe, slotScopeIds: q } = U;
    q && (Se = Se ? Se.concat(q) : q), D == null ? (n(ge, ne, ce), n(Oe, ne, ce), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      ne,
      Oe,
      ve,
      pe,
      xe,
      Se,
      de
    )) : Ie > 0 && Ie & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren ? (R(
      D.dynamicChildren,
      oe,
      ne,
      ve,
      pe,
      xe,
      Se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || ve && U === ve.subTree) && Xa(
      D,
      U,
      !0
      /* shallow */
    )) : O(
      D,
      U,
      ne,
      Oe,
      ve,
      pe,
      xe,
      Se,
      de
    );
  }, G = (D, U, ne, ce, ve, pe, xe, Se, de) => {
    U.slotScopeIds = Se, D == null ? U.shapeFlag & 512 ? ve.ctx.activate(
      U,
      ne,
      ce,
      xe,
      de
    ) : ae(
      U,
      ne,
      ce,
      ve,
      pe,
      xe,
      de
    ) : te(D, U, de);
  }, ae = (D, U, ne, ce, ve, pe, xe) => {
    const Se = D.component = Td(
      D,
      ce,
      ve
    );
    if (Gn(D) && (Se.ctx.renderer = Te), Pd(Se, !1, xe), Se.asyncDep) {
      if (ve && ve.registerDep(Se, A, xe), !D.el) {
        const de = Se.subTree = C(bt);
        P(null, de, U, ne), D.placeholder = de.el;
      }
    } else
      A(
        Se,
        D,
        U,
        ne,
        ve,
        pe,
        xe
      );
  }, te = (D, U, ne) => {
    const ce = U.component = D.component;
    if (dd(D, U, ne))
      if (ce.asyncDep && !ce.asyncResolved) {
        H(ce, U, ne);
        return;
      } else
        ce.next = U, ce.update();
    else
      U.el = D.el, ce.vnode = U;
  }, A = (D, U, ne, ce, ve, pe, xe) => {
    const Se = () => {
      if (D.isMounted) {
        let { next: Ie, bu: oe, u: q, parent: De, vnode: be } = D;
        {
          const Ve = or(D);
          if (Ve) {
            Ie && (Ie.el = be.el, H(D, Ie, xe)), Ve.asyncDep.then(() => {
              D.isUnmounted || Se();
            });
            return;
          }
        }
        let _e = Ie, B;
        Ks(D, !1), Ie ? (Ie.el = be.el, H(D, Ie, xe)) : Ie = be, oe && yn(oe), (B = Ie.props && Ie.props.onVnodeBeforeUpdate) && ds(B, De, Ie, be), Ks(D, !0);
        const z = bl(D), fe = D.subTree;
        D.subTree = z, S(
          fe,
          z,
          // parent may have changed if it's in a teleport
          g(fe.el),
          // anchor may have changed if it's in a fragment
          se(fe),
          D,
          ve,
          pe
        ), Ie.el = z.el, _e === null && ud(D, z.el), q && St(q, ve), (B = Ie.props && Ie.props.onVnodeUpdated) && St(
          () => ds(B, De, Ie, be),
          ve
        );
      } else {
        let Ie;
        const { el: oe, props: q } = U, { bm: De, m: be, parent: _e, root: B, type: z } = D, fe = po(U);
        Ks(D, !1), De && yn(De), !fe && (Ie = q && q.onVnodeBeforeMount) && ds(Ie, _e, U), Ks(D, !0);
        {
          B.ce && // @ts-expect-error _def is private
          B.ce._def.shadowRoot !== !1 && B.ce._injectChildStyle(z);
          const Ve = D.subTree = bl(D);
          S(
            null,
            Ve,
            ne,
            ce,
            D,
            ve,
            pe
          ), U.el = Ve.el;
        }
        if (be && St(be, ve), !fe && (Ie = q && q.onVnodeMounted)) {
          const Ve = U;
          St(
            () => ds(Ie, _e, Ve),
            ve
          );
        }
        (U.shapeFlag & 256 || _e && po(_e.vnode) && _e.vnode.shapeFlag & 256) && D.a && St(D.a, ve), D.isMounted = !0, U = ne = ce = null;
      }
    };
    D.scope.on();
    const de = D.effect = new ri(Se);
    D.scope.off();
    const ge = D.update = de.run.bind(de), Oe = D.job = de.runIfDirty.bind(de);
    Oe.i = D, Oe.id = D.uid, de.scheduler = () => Ha(Oe), Ks(D, !0), ge();
  }, H = (D, U, ne) => {
    U.component = D;
    const ce = D.vnode.props;
    D.vnode = U, D.next = null, md(D, U.props, ce, ne), hd(D, U.children, ne), Ss(), dl(D), Is();
  }, O = (D, U, ne, ce, ve, pe, xe, Se, de = !1) => {
    const ge = D && D.children, Oe = D ? D.shapeFlag : 0, Ie = U.children, { patchFlag: oe, shapeFlag: q } = U;
    if (oe > 0) {
      if (oe & 128) {
        me(
          ge,
          Ie,
          ne,
          ce,
          ve,
          pe,
          xe,
          Se,
          de
        );
        return;
      } else if (oe & 256) {
        re(
          ge,
          Ie,
          ne,
          ce,
          ve,
          pe,
          xe,
          Se,
          de
        );
        return;
      }
    }
    q & 8 ? (Oe & 16 && Z(ge, ve, pe), Ie !== ge && v(ne, Ie)) : Oe & 16 ? q & 16 ? me(
      ge,
      Ie,
      ne,
      ce,
      ve,
      pe,
      xe,
      Se,
      de
    ) : Z(ge, ve, pe, !0) : (Oe & 8 && v(ne, ""), q & 16 && T(
      Ie,
      ne,
      ce,
      ve,
      pe,
      xe,
      Se,
      de
    ));
  }, re = (D, U, ne, ce, ve, pe, xe, Se, de) => {
    D = D || fo, U = U || fo;
    const ge = D.length, Oe = U.length, Ie = Math.min(ge, Oe);
    let oe;
    for (oe = 0; oe < Ie; oe++) {
      const q = U[oe] = de ? Ns(U[oe]) : ps(U[oe]);
      S(
        D[oe],
        q,
        ne,
        null,
        ve,
        pe,
        xe,
        Se,
        de
      );
    }
    ge > Oe ? Z(
      D,
      ve,
      pe,
      !0,
      !1,
      Ie
    ) : T(
      U,
      ne,
      ce,
      ve,
      pe,
      xe,
      Se,
      de,
      Ie
    );
  }, me = (D, U, ne, ce, ve, pe, xe, Se, de) => {
    let ge = 0;
    const Oe = U.length;
    let Ie = D.length - 1, oe = Oe - 1;
    for (; ge <= Ie && ge <= oe; ) {
      const q = D[ge], De = U[ge] = de ? Ns(U[ge]) : ps(U[ge]);
      if (Xs(q, De))
        S(
          q,
          De,
          ne,
          null,
          ve,
          pe,
          xe,
          Se,
          de
        );
      else
        break;
      ge++;
    }
    for (; ge <= Ie && ge <= oe; ) {
      const q = D[Ie], De = U[oe] = de ? Ns(U[oe]) : ps(U[oe]);
      if (Xs(q, De))
        S(
          q,
          De,
          ne,
          null,
          ve,
          pe,
          xe,
          Se,
          de
        );
      else
        break;
      Ie--, oe--;
    }
    if (ge > Ie) {
      if (ge <= oe) {
        const q = oe + 1, De = q < Oe ? U[q].el : ce;
        for (; ge <= oe; )
          S(
            null,
            U[ge] = de ? Ns(U[ge]) : ps(U[ge]),
            ne,
            De,
            ve,
            pe,
            xe,
            Se,
            de
          ), ge++;
      }
    } else if (ge > oe)
      for (; ge <= Ie; )
        Ue(D[ge], ve, pe, !0), ge++;
    else {
      const q = ge, De = ge, be = /* @__PURE__ */ new Map();
      for (ge = De; ge <= oe; ge++) {
        const lt = U[ge] = de ? Ns(U[ge]) : ps(U[ge]);
        lt.key != null && be.set(lt.key, ge);
      }
      let _e, B = 0;
      const z = oe - De + 1;
      let fe = !1, Ve = 0;
      const Qe = new Array(z);
      for (ge = 0; ge < z; ge++) Qe[ge] = 0;
      for (ge = q; ge <= Ie; ge++) {
        const lt = D[ge];
        if (B >= z) {
          Ue(lt, ve, pe, !0);
          continue;
        }
        let dt;
        if (lt.key != null)
          dt = be.get(lt.key);
        else
          for (_e = De; _e <= oe; _e++)
            if (Qe[_e - De] === 0 && Xs(lt, U[_e])) {
              dt = _e;
              break;
            }
        dt === void 0 ? Ue(lt, ve, pe, !0) : (Qe[dt - De] = ge + 1, dt >= Ve ? Ve = dt : fe = !0, S(
          lt,
          U[dt],
          ne,
          null,
          ve,
          pe,
          xe,
          Se,
          de
        ), B++);
      }
      const mt = fe ? bd(Qe) : fo;
      for (_e = mt.length - 1, ge = z - 1; ge >= 0; ge--) {
        const lt = De + ge, dt = U[lt], Rt = U[lt + 1], zt = lt + 1 < Oe ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : ce;
        Qe[ge] === 0 ? S(
          null,
          dt,
          ne,
          zt,
          ve,
          pe,
          xe,
          Se,
          de
        ) : fe && (_e < 0 || ge !== mt[_e] ? Pe(dt, ne, zt, 2) : _e--);
      }
    }
  }, Pe = (D, U, ne, ce, ve = null) => {
    const { el: pe, type: xe, transition: Se, children: de, shapeFlag: ge } = D;
    if (ge & 6) {
      Pe(D.component.subTree, U, ne, ce);
      return;
    }
    if (ge & 128) {
      D.suspense.move(U, ne, ce);
      return;
    }
    if (ge & 64) {
      xe.move(D, U, ne, Te);
      return;
    }
    if (xe === j) {
      n(pe, U, ne);
      for (let Ie = 0; Ie < de.length; Ie++)
        Pe(de[Ie], U, ne, ce);
      n(D.anchor, U, ne);
      return;
    }
    if (xe === la) {
      I(D, U, ne);
      return;
    }
    if (ce !== 2 && ge & 1 && Se)
      if (ce === 0)
        Se.beforeEnter(pe), n(pe, U, ne), St(() => Se.enter(pe), ve);
      else {
        const { leave: Ie, delayLeave: oe, afterLeave: q } = Se, De = () => {
          D.ctx.isUnmounted ? l(pe) : n(pe, U, ne);
        }, be = () => {
          pe._isLeaving && pe[ks](
            !0
            /* cancelled */
          ), Ie(pe, () => {
            De(), q && q();
          });
        };
        oe ? oe(pe, De, be) : be();
      }
    else
      n(pe, U, ne);
  }, Ue = (D, U, ne, ce = !1, ve = !1) => {
    const {
      type: pe,
      props: xe,
      ref: Se,
      children: de,
      dynamicChildren: ge,
      shapeFlag: Oe,
      patchFlag: Ie,
      dirs: oe,
      cacheIndex: q
    } = D;
    if (Ie === -2 && (ve = !1), Se != null && (Ss(), Bo(Se, null, ne, D, !0), Is()), q != null && (U.renderCache[q] = void 0), Oe & 256) {
      U.ctx.deactivate(D);
      return;
    }
    const De = Oe & 1 && oe, be = !po(D);
    let _e;
    if (be && (_e = xe && xe.onVnodeBeforeUnmount) && ds(_e, U, D), Oe & 6)
      Fe(D.component, ne, ce);
    else {
      if (Oe & 128) {
        D.suspense.unmount(ne, ce);
        return;
      }
      De && Hs(D, null, U, "beforeUnmount"), Oe & 64 ? D.type.remove(
        D,
        U,
        ne,
        Te,
        ce
      ) : ge && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ge.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (pe !== j || Ie > 0 && Ie & 64) ? Z(
        ge,
        U,
        ne,
        !1,
        !0
      ) : (pe === j && Ie & 384 || !ve && Oe & 16) && Z(de, U, ne), ce && ze(D);
    }
    (be && (_e = xe && xe.onVnodeUnmounted) || De) && St(() => {
      _e && ds(_e, U, D), De && Hs(D, null, U, "unmounted");
    }, ne);
  }, ze = (D) => {
    const { type: U, el: ne, anchor: ce, transition: ve } = D;
    if (U === j) {
      Ye(ne, ce);
      return;
    }
    if (U === la) {
      x(D);
      return;
    }
    const pe = () => {
      l(ne), ve && !ve.persisted && ve.afterLeave && ve.afterLeave();
    };
    if (D.shapeFlag & 1 && ve && !ve.persisted) {
      const { leave: xe, delayLeave: Se } = ve, de = () => xe(ne, pe);
      Se ? Se(D.el, pe, de) : de();
    } else
      pe();
  }, Ye = (D, U) => {
    let ne;
    for (; D !== U; )
      ne = w(D), l(D), D = ne;
    l(U);
  }, Fe = (D, U, ne) => {
    const { bum: ce, scope: ve, job: pe, subTree: xe, um: Se, m: de, a: ge } = D;
    Cl(de), Cl(ge), ce && yn(ce), ve.stop(), pe && (pe.flags |= 8, Ue(xe, D, U, ne)), Se && St(Se, U), St(() => {
      D.isUnmounted = !0;
    }, U);
  }, Z = (D, U, ne, ce = !1, ve = !1, pe = 0) => {
    for (let xe = pe; xe < D.length; xe++)
      Ue(D[xe], U, ne, ce, ve);
  }, se = (D) => {
    if (D.shapeFlag & 6)
      return se(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const U = w(D.anchor || D.el), ne = U && U[Ei];
    return ne ? w(ne) : U;
  };
  let X = !1;
  const ie = (D, U, ne) => {
    D == null ? U._vnode && Ue(U._vnode, null, null, !0) : S(
      U._vnode || null,
      D,
      U,
      null,
      null,
      null,
      ne
    ), U._vnode = D, X || (X = !0, dl(), xi(), X = !1);
  }, Te = {
    p: S,
    um: Ue,
    m: Pe,
    r: ze,
    mt: ae,
    mc: T,
    pc: O,
    pbc: R,
    n: se,
    o: e
  };
  return {
    render: ie,
    hydrate: void 0,
    createApp: ed(ie)
  };
}
function aa({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ks({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function _d(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Xa(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Be(n) && Be(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let d = l[i];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = l[i] = Ns(l[i]), d.el = c.el), !o && d.patchFlag !== -2 && Xa(c, d)), d.type === Kn && // avoid cached text nodes retaining detached dom nodes
      d.patchFlag !== -1 && (d.el = c.el), d.type === bt && !d.el && (d.el = c.el);
    }
}
function bd(e) {
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
function or(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : or(s);
}
function Cl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const nr = (e) => e.__isSuspense;
function kd(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : Mc(e);
}
const j = Symbol.for("v-fgt"), Kn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), la = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function $d() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Xo = 1;
function Rn(e, s = !1) {
  Xo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function ar(e) {
  return e.dynamicChildren = Xo > 0 ? Nt || fo : null, $d(), Xo > 0 && Nt && Nt.push(e), e;
}
function r(e, s, o, n, l, i) {
  return ar(
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
function M(e, s, o, n, l) {
  return ar(
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
const lr = ({ key: e }) => e ?? null, bn = ({
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
    key: s && lr(s),
    ref: s && bn(s),
    scopeId: Ii,
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
  return d ? (Qa(u, o), i & 128 && e.normalize(u)) : o && (u.shapeFlag |= ct(o) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Nt.push(u), u;
}
const C = Cd;
function Cd(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Bi) && (e = bt), Qo(e)) {
    const d = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Qa(d, o), Xo > 0 && !i && Nt && (d.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = d : Nt.push(d)), d.patchFlag = -2, d;
  }
  if (Od(e) && (e = e.__vccOpts), s) {
    s = xd(s);
    let { class: d, style: u } = s;
    d && !ct(d) && (s.class = Ee(d)), tt(u) && (ja(u) && !Be(u) && (u = pt({}, u)), s.style = Ht(u));
  }
  const c = ct(e) ? 1 : nr(e) ? 128 : Ti(e) ? 64 : tt(e) ? 4 : Ge(e) ? 2 : 0;
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
function xd(e) {
  return e ? ja(e) || Xi(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: d, transition: u } = e, m = s ? Sd(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && lr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat(bn(s)) : [i, bn(s)] : bn(s)
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
  return C(Kn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), M(bt, null, e)) : C(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? C(bt) : Be(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qo(e) ? Ns(e) : C(Kn, null, String(e));
}
function Ns(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zs(e);
}
function Qa(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Be(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Qa(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Xi(s) ? s._ctx = ht : l === 3 && ht && (ht.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: ht }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Sd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ee([s.class, n.class]));
      else if (l === "style")
        s.style = Ht([s.style, n.style]);
      else if (Nn(l)) {
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
const Id = ji();
let Ed = 0;
function Td(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Id, i = {
    uid: Ed++,
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
    scope: new tc(
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
    propsOptions: Zi(n, l),
    emitsOptions: qi(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: st,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: st,
    data: st,
    props: st,
    attrs: st,
    slots: st,
    refs: st,
    setupState: st,
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = ld.bind(null, i), e.ce && e.ce(i), i;
}
let kt = null;
const Za = () => kt || ht;
let Mn, Sa;
{
  const e = Bn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  Mn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => kt = o
  ), Sa = s(
    "__VUE_SSR_SETTERS__",
    (o) => Zo = o
  );
}
const on = (e) => {
  const s = kt;
  return Mn(e), e.scope.on(), () => {
    e.scope.off(), Mn(s);
  };
}, xl = () => {
  kt && kt.scope.off(), Mn(null);
};
function ir(e) {
  return e.vnode.shapeFlag & 4;
}
let Zo = !1;
function Pd(e, s = !1, o = !1) {
  s && Sa(s);
  const { props: n, children: l } = e.vnode, i = ir(e);
  fd(e, n, i, s), gd(e, l, o || s);
  const c = i ? Rd(e, s) : void 0;
  return s && Sa(!1), c;
}
function Rd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Kc);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? Dd(e) : null, i = on(e), c = sn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), d = ti(c);
    if (Is(), i(), (d || e.sp) && !po(e) && Ni(e), d) {
      if (c.then(xl, xl), s)
        return c.then((u) => {
          Sl(e, u);
        }).catch((u) => {
          Wn(u, e, 0);
        });
      e.asyncDep = c;
    } else
      Sl(e, c);
  } else
    rr(e);
}
function Sl(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = ki(s)), rr(e);
}
function rr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = on(e);
    Ss();
    try {
      qc(e);
    } finally {
      Is(), l();
    }
  }
}
const Md = {
  get(e, s) {
    return wt(e, "get", ""), e[s];
  }
};
function Dd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Md),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function qn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ki(kc(e.exposed)), {
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
function Ld(e, s = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Od(e) {
  return Ge(e) && "__vccOpts" in e;
}
const N = (e, s) => Ic(e, s, Zo);
function nn(e, s, o) {
  try {
    Rn(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !Be(s) ? Qo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Qo(o) && (o = [o]), C(e, s, o));
  } finally {
    Rn(1);
  }
}
const Ad = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ia;
const Il = typeof window < "u" && window.trustedTypes;
if (Il)
  try {
    Ia = /* @__PURE__ */ Il.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const cr = Ia ? (e) => Ia.createHTML(e) : (e) => e, Nd = "http://www.w3.org/2000/svg", Ud = "http://www.w3.org/1998/Math/MathML", bs = typeof document < "u" ? document : null, El = bs && /* @__PURE__ */ bs.createElement("template"), zd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? bs.createElementNS(Nd, e) : s === "mathml" ? bs.createElementNS(Ud, e) : o ? bs.createElement(e, { is: o }) : bs.createElement(e);
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
      El.innerHTML = cr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const d = El.content;
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
}, Ds = "transition", Po = "animation", wo = Symbol("_vtc"), dr = {
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
}, ur = /* @__PURE__ */ pt(
  {},
  Di,
  dr
), Fd = (e) => (e.displayName = "Transition", e.props = ur, e), Bd = /* @__PURE__ */ Fd(
  (e, { slots: s }) => nn(Oc, fr(e), s)
), qs = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Tl = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function fr(e) {
  const s = {};
  for (const Y in e)
    Y in dr || (s[Y] = e[Y]);
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
  } = e, _ = Vd(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: L,
    onEnterCancelled: I,
    onLeave: x,
    onLeaveCancelled: W,
    onBeforeAppear: V = P,
    onAppear: F = L,
    onAppearCancelled: T = I
  } = s, E = (Y, G, ae, te) => {
    Y._enterCancelled = te, Ls(Y, G ? v : d), Ls(Y, G ? m : c), ae && ae();
  }, R = (Y, G) => {
    Y._isLeaving = !1, Ls(Y, g), Ls(Y, p), Ls(Y, w), G && G();
  }, ee = (Y) => (G, ae) => {
    const te = Y ? F : L, A = () => E(G, Y, ae);
    qs(te, [G, A]), Pl(() => {
      Ls(G, Y ? u : i), fs(G, Y ? v : d), Tl(te) || Rl(G, n, S, A);
    });
  };
  return pt(s, {
    onBeforeEnter(Y) {
      qs(P, [Y]), fs(Y, i), fs(Y, c);
    },
    onBeforeAppear(Y) {
      qs(V, [Y]), fs(Y, u), fs(Y, m);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(Y, G) {
      Y._isLeaving = !0;
      const ae = () => R(Y, G);
      fs(Y, g), Y._enterCancelled ? (fs(Y, w), Ea(Y)) : (Ea(Y), fs(Y, w)), Pl(() => {
        Y._isLeaving && (Ls(Y, g), fs(Y, p), Tl(x) || Rl(Y, n, $, ae));
      }), qs(x, [Y, ae]);
    },
    onEnterCancelled(Y) {
      E(Y, !1, void 0, !0), qs(I, [Y]);
    },
    onAppearCancelled(Y) {
      E(Y, !0, void 0, !0), qs(T, [Y]);
    },
    onLeaveCancelled(Y) {
      R(Y), qs(W, [Y]);
    }
  });
}
function Vd(e) {
  if (e == null)
    return null;
  if (tt(e))
    return [ia(e.enter), ia(e.leave)];
  {
    const s = ia(e);
    return [s, s];
  }
}
function ia(e) {
  return Kr(e);
}
function fs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[wo] || (e[wo] = /* @__PURE__ */ new Set())).add(s);
}
function Ls(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[wo];
  o && (o.delete(s), o.size || (e[wo] = void 0));
}
function Pl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wd = 0;
function Rl(e, s, o, n) {
  const l = e._endId = ++Wd, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: d, propCount: u } = mr(e, s);
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
function mr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ds}Delay`), i = n(`${Ds}Duration`), c = Ml(l, i), d = n(`${Po}Delay`), u = n(`${Po}Duration`), m = Ml(d, u);
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
function Ml(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Dl(o) + Dl(e[n])));
}
function Dl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ea(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Gd(e, s, o) {
  const n = e[wo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ll = Symbol("_vod"), jd = Symbol("_vsh"), Hd = Symbol(""), Kd = /(?:^|;)\s*display\s*:/;
function qd(e, s, o) {
  const n = e.style, l = ct(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ct(s))
        for (const c of s.split(";")) {
          const d = c.slice(0, c.indexOf(":")).trim();
          o[d] == null && kn(n, d, "");
        }
      else
        for (const c in s)
          o[c] == null && kn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), kn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[Hd];
      c && (o += ";" + c), n.cssText = o, i = Kd.test(o);
    }
  } else s && e.removeAttribute("style");
  Ll in e && (e[Ll] = i ? n.display : "", e[jd] && (n.display = "none"));
}
const Ol = /\s*!important$/;
function kn(e, s, o) {
  if (Be(o))
    o.forEach((n) => kn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = Yd(e, s);
    Ol.test(o) ? e.setProperty(
      Bs(n),
      o.replace(Ol, ""),
      "important"
    ) : e[n] = o;
  }
}
const Al = ["Webkit", "Moz", "ms"], ra = {};
function Yd(e, s) {
  const o = ra[s];
  if (o)
    return o;
  let n = jt(s);
  if (n !== "filter" && n in e)
    return ra[s] = n;
  n = zn(n);
  for (let l = 0; l < Al.length; l++) {
    const i = Al[l] + n;
    if (i in e)
      return ra[s] = i;
  }
  return s;
}
const Nl = "http://www.w3.org/1999/xlink";
function Ul(e, s, o, n, l, i = Zr(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Nl, s.slice(6, s.length)) : e.setAttributeNS(Nl, s, o) : o == null || i && !ai(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : ts(o) ? String(o) : o
  );
}
function zl(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? cr(o) : o);
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
    d === "boolean" ? o = ai(o) : o == null && d === "string" ? (o = "", c = !0) : d === "number" && (o = 0, c = !0);
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
function Jd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Fl = Symbol("_vei");
function Xd(e, s, o, n, l = null) {
  const i = e[Fl] || (e[Fl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [d, u] = Qd(s);
    if (n) {
      const m = i[s] = tu(
        n,
        l
      );
      xs(e, d, m, u);
    } else c && (Jd(e, d, c, u), i[s] = void 0);
  }
}
const Bl = /(?:Once|Passive|Capture)$/;
function Qd(e) {
  let s;
  if (Bl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(Bl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let ca = 0;
const Zd = /* @__PURE__ */ Promise.resolve(), eu = () => ca || (Zd.then(() => ca = 0), ca = Date.now());
function tu(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      su(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = eu(), o;
}
function su(e, s) {
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
const Vl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ou = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Gd(e, n, c) : s === "style" ? qd(e, o, n) : Nn(s) ? Oa(s) || Xd(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : nu(e, s, n, c)) ? (zl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Ul(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? zl(e, jt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Ul(e, s, n, c));
};
function nu(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Vl(s) && Ge(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Vl(s) && ct(o) ? !1 : s in e;
}
const vr = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Dn = Symbol("_moveCb"), Wl = Symbol("_enterCb"), au = (e) => (delete e.props.mode, e), lu = /* @__PURE__ */ au({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, ur, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Za(), n = Mi();
    let l, i;
    return zi(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!uu(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(ru), l.forEach(cu);
      const d = l.filter(du);
      Ea(o.vnode.el), d.forEach((u) => {
        const m = u.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Dn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Dn] = null, Ls(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), d = fr(c);
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
          ), vr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Ka(s.default()) : [];
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
}), iu = lu;
function ru(e) {
  const s = e.el;
  s[Dn] && s[Dn](), s[Wl] && s[Wl]();
}
function cu(e) {
  pr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function du(e) {
  const s = vr.get(e), o = pr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function uu(e, s, o) {
  const n = e.cloneNode(), l = e[wo];
  l && l.forEach((d) => {
    d.split(/\s+/).forEach((u) => u && n.classList.remove(u));
  }), o.split(/\s+/).forEach((d) => d && n.classList.add(d)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = mr(n);
  return i.removeChild(n), c;
}
const Fs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => yn(s, o) : s;
};
function fu(e) {
  e.target.composing = !0;
}
function Gl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Gt = Symbol("_assign");
function jl(e, s, o) {
  return s && (e = e.trim()), o && (e = Fn(e)), e;
}
const Ut = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Gt] = Fs(l);
    const i = n || l.props && l.props.type === "number";
    xs(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Gt](jl(e.value, o, i));
    }), (o || i) && xs(e, "change", () => {
      e.value = jl(e.value, o, i);
    }), s || (xs(e, "compositionstart", fu), xs(e, "compositionend", Gl), xs(e, "change", Gl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[Gt] = Fs(c), e.composing) return;
    const d = (i || e.type === "number") && !/^0\d/.test(e.value) ? Fn(e.value) : e.value, u = s ?? "";
    d !== u && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === u) || (e.value = u));
  }
}, en = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Gt] = Fs(o), xs(e, "change", () => {
      const n = e._modelValue, l = _o(e), i = e.checked, c = e[Gt];
      if (Be(n)) {
        const d = Ua(n, l), u = d !== -1;
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
        c(gr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Hl,
  beforeUpdate(e, s, o) {
    e[Gt] = Fs(o), Hl(e, s, o);
  }
};
function Hl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Be(s))
    l = Ua(s, n.props.value) > -1;
  else if (bo(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = eo(s, gr(e, !0));
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
        (c) => o ? Fn(_o(c)) : _o(c)
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
    Kl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Gt] = Fs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Kl(e, s);
  }
};
function Kl(e, s) {
  const o = e.multiple, n = Be(s);
  if (!(o && !n && !bo(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], d = _o(c);
      if (o)
        if (n) {
          const u = typeof d;
          u === "string" || u === "number" ? c.selected = s.some((m) => String(m) === String(d)) : c.selected = Ua(s, d) > -1;
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
function gr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Yn = {
  created(e, s, o) {
    mn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    mn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    mn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    mn(e, s, o, n, "updated");
  }
};
function mu(e, s) {
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
function mn(e, s, o, n, l) {
  const c = mu(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const vu = ["ctrl", "shift", "alt", "meta"], pu = {
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
  exact: (e, s) => vu.some((o) => e[`${o}Key`] && !s.includes(o))
}, rt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const d = pu[s[c]];
      if (d && d(l, s)) return;
    }
    return e(l, ...i);
  }));
}, gu = {
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
      (c) => c === i || gu[c] === i
    ))
      return e(l);
  }));
}, hu = /* @__PURE__ */ pt({ patchProp: ou }, zd);
let ql;
function yu() {
  return ql || (ql = yd(hu));
}
const Jn = ((...e) => {
  const s = yu().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = _u(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, wu(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function wu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _u(e) {
  return ct(e) ? document.querySelector(e) : e;
}
const bu = { class: "panel-layout" }, ku = {
  key: 0,
  class: "panel-layout-header"
}, $u = {
  key: 1,
  class: "panel-layout-search"
}, Cu = { class: "panel-layout-content" }, xu = {
  key: 2,
  class: "panel-layout-footer"
}, Su = /* @__PURE__ */ he({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", bu, [
      s.$slots.header ? (a(), r("div", ku, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", $u, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Cu, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", xu, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ye = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ ye(Su, [["__scopeId", "data-v-21565df9"]]), Iu = {
  key: 0,
  class: "panel-title-prefix"
}, Eu = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Tu = /* @__PURE__ */ he({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), M(qa(`h${e.level}`), {
      class: Ee(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Iu, f(e.prefix), 1)) : (a(), r("span", Eu)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Pu = /* @__PURE__ */ ye(Tu, [["__scopeId", "data-v-c3875efc"]]), Ru = ["title"], Mu = ["width", "height"], Du = /* @__PURE__ */ he({
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
      ])], 8, Mu))
    ], 8, Ru));
  }
}), hr = /* @__PURE__ */ ye(Du, [["__scopeId", "data-v-6fc7f16d"]]), Lu = { class: "header-left" }, Ou = {
  key: 0,
  class: "header-actions"
}, Au = /* @__PURE__ */ he({
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
      class: Ee(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Lu, [
        C(Pu, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), M(hr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Ou, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ ye(Au, [["__scopeId", "data-v-55a62cd6"]]), Nu = {
  key: 0,
  class: "section-title-count"
}, Uu = {
  key: 1,
  class: "section-title-icon"
}, zu = /* @__PURE__ */ he({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), M(qa(`h${e.level}`), {
      class: Ee(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Nu, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Uu, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ ye(zu, [["__scopeId", "data-v-559361eb"]]), Fu = { class: "status-grid" }, Bu = { class: "status-grid__columns" }, Vu = { class: "status-grid__column" }, Wu = { class: "status-grid__title" }, Gu = { class: "status-grid__column status-grid__column--right" }, ju = { class: "status-grid__title" }, Hu = {
  key: 0,
  class: "status-grid__footer"
}, Ku = /* @__PURE__ */ he({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Fu, [
      t("div", Bu, [
        t("div", Vu, [
          t("h4", Wu, f(e.leftTitle), 1),
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", Gu, [
          t("h4", ju, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", Hu, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), qu = /* @__PURE__ */ ye(Ku, [["__scopeId", "data-v-73b7ba3f"]]), Yu = {
  key: 0,
  class: "status-item__icon"
}, Ju = {
  key: 1,
  class: "status-item__count"
}, Xu = { class: "status-item__label" }, Qu = /* @__PURE__ */ he({
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
      class: Ee(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", Yu, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", Ju, f(e.count), 1)) : y("", !0),
      t("span", Xu, f(e.label), 1)
    ], 2));
  }
}), us = /* @__PURE__ */ ye(Qu, [["__scopeId", "data-v-6f929183"]]), Zu = { class: "issue-card__header" }, ef = { class: "issue-card__icon" }, tf = { class: "issue-card__title" }, sf = {
  key: 0,
  class: "issue-card__content"
}, of = {
  key: 0,
  class: "issue-card__description"
}, nf = {
  key: 1,
  class: "issue-card__items"
}, af = {
  key: 2,
  class: "issue-card__actions"
}, lf = /* @__PURE__ */ he({
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
      class: Ee(["issue-card", o.value])
    }, [
      t("div", Zu, [
        t("span", ef, f(e.icon), 1),
        t("h4", tf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", sf, [
        e.description ? (a(), r("p", of, f(e.description), 1)) : y("", !0),
        Ke(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", nf, [
        (a(!0), r(j, null, we(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", af, [
        Ke(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ ye(lf, [["__scopeId", "data-v-df6aa348"]]), rf = ["type", "disabled"], cf = {
  key: 0,
  class: "spinner"
}, df = /* @__PURE__ */ he({
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
      class: Ee(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", cf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, rf));
  }
}), ue = /* @__PURE__ */ ye(df, [["__scopeId", "data-v-772abe47"]]), uf = { class: "empty-state" }, ff = {
  key: 0,
  class: "empty-icon"
}, mf = { class: "empty-message" }, vf = /* @__PURE__ */ he({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", uf, [
      e.icon ? (a(), r("div", ff, f(e.icon), 1)) : y("", !0),
      t("p", mf, f(e.message), 1),
      e.actionLabel ? (a(), M(ue, {
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
}), ns = /* @__PURE__ */ ye(vf, [["__scopeId", "data-v-4466284f"]]), pf = /* @__PURE__ */ he({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ee(["detail-label"]),
      style: Ht({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), $n = /* @__PURE__ */ ye(pf, [["__scopeId", "data-v-75e9eeb8"]]), gf = /* @__PURE__ */ he({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ee(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ta = /* @__PURE__ */ ye(gf, [["__scopeId", "data-v-2f186e4c"]]), hf = { class: "detail-row" }, yf = /* @__PURE__ */ he({
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
    return (s, o) => (a(), r("div", hf, [
      C($n, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M(Ta, {
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
}), ut = /* @__PURE__ */ ye(yf, [["__scopeId", "data-v-ef15664a"]]), wf = { class: "modal-header" }, _f = { class: "modal-body" }, bf = { class: "status-section" }, kf = {
  key: 0,
  class: "status-section"
}, $f = { class: "section-header-row" }, Cf = {
  key: 0,
  class: "workflow-group"
}, xf = { class: "workflow-group-header" }, Sf = { class: "workflow-group-title" }, If = { class: "workflow-list" }, Ef = { class: "workflow-name" }, Tf = { class: "workflow-issue" }, Pf = {
  key: 1,
  class: "workflow-group"
}, Rf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Df = { class: "workflow-list" }, Lf = { class: "workflow-name" }, Of = { class: "workflow-issue" }, Af = {
  key: 2,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, Uf = { class: "workflow-group-title" }, zf = { class: "workflow-list" }, Ff = { class: "workflow-name" }, Bf = {
  key: 3,
  class: "workflow-group"
}, Vf = { class: "workflow-group-header" }, Wf = { class: "workflow-group-title" }, Gf = { class: "workflow-list" }, jf = { class: "workflow-name" }, Hf = {
  key: 4,
  class: "workflow-group"
}, Kf = { class: "workflow-group-header" }, qf = { class: "workflow-group-title" }, Yf = { class: "workflow-list" }, Jf = { class: "workflow-name" }, Xf = {
  key: 5,
  class: "workflow-group"
}, Qf = { class: "workflow-group-title" }, Zf = { class: "expand-icon" }, em = {
  key: 0,
  class: "workflow-list"
}, tm = { class: "workflow-name" }, sm = {
  key: 1,
  class: "status-section"
}, om = {
  key: 0,
  class: "change-group"
}, nm = { class: "change-group-header" }, am = { class: "change-group-title" }, lm = { class: "change-list" }, im = { class: "node-name" }, rm = {
  key: 0,
  class: "dev-badge"
}, cm = {
  key: 1,
  class: "change-group"
}, dm = { class: "change-group-header" }, um = { class: "change-group-title" }, fm = { class: "change-list" }, mm = { class: "node-name" }, vm = {
  key: 0,
  class: "dev-badge"
}, pm = {
  key: 2,
  class: "change-group"
}, gm = { class: "change-list" }, hm = { class: "change-item" }, ym = { class: "node-name" }, wm = {
  key: 3,
  class: "change-group"
}, _m = {
  key: 2,
  class: "status-section"
}, bm = { class: "section-header-row" }, km = {
  key: 0,
  class: "drift-item"
}, $m = { class: "drift-list" }, Cm = {
  key: 0,
  class: "drift-list-more"
}, xm = {
  key: 1,
  class: "drift-item"
}, Sm = { class: "drift-list" }, Im = {
  key: 0,
  class: "drift-list-more"
}, Em = {
  key: 2,
  class: "drift-item"
}, Tm = { class: "drift-list" }, Pm = { class: "version-actual" }, Rm = { class: "version-expected" }, Mm = {
  key: 0,
  class: "drift-list-more"
}, Dm = {
  key: 3,
  class: "drift-item"
}, Lm = { class: "repair-action" }, Om = {
  key: 3,
  class: "status-section"
}, Am = { class: "info-box" }, Nm = { class: "drift-list" }, Um = {
  key: 0,
  class: "drift-list-more"
}, zm = {
  key: 4,
  class: "status-section"
}, Fm = { class: "warning-box" }, Bm = {
  key: 5,
  class: "empty-state-inline"
}, Vm = { class: "modal-actions" }, Wm = /* @__PURE__ */ he({
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
        var P, L, I;
        const $ = (I = (L = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : L.analyzed) == null ? void 0 : I.find((x) => x.name === S);
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
      var _, S, $, P, L, I, x, W, V, F, T, E, R, ee, Y, G, ae, te, A, H, O, re;
      return a(), M(yt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (me) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", wf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (me) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", _f, [
              t("div", bf, [
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
              c.value ? (a(), r("div", kf, [
                t("div", $f, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (me) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", Cf, [
                  t("div", xf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Sf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", If, [
                    (a(!0), r(j, null, we(n.value, (me) => (a(), r("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", Ef, f(me.name), 1),
                      t("span", Tf, f(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Pf, [
                  t("div", Rf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Mf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Df, [
                    (a(!0), r(j, null, we(l.value, (me) => (a(), r("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      t("span", Lf, f(me.name), 1),
                      t("span", Of, f(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), r("div", Af, [
                  t("div", Nf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Uf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", zf, [
                    (a(!0), r(j, null, we(e.status.workflows.new, (me) => (a(), r("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Ff, f(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", Bf, [
                  t("div", Vf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Wf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Gf, [
                    (a(!0), r(j, null, we(e.status.workflows.modified, (me) => (a(), r("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", jf, f(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (L = e.status.workflows) == null ? void 0 : L.deleted) != null && I.length ? (a(), r("div", Hf, [
                  t("div", Kf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", qf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Yf, [
                    (a(!0), r(j, null, we(e.status.workflows.deleted, (me) => (a(), r("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", Jf, f(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", Xf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (me) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Qf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Zf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", em, [
                    (a(!0), r(j, null, we(i.value, (me) => (a(), r("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      t("span", tm, f(me), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              d.value ? (a(), r("div", sm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (x = e.status.git_changes) == null ? void 0 : x.nodes_added) != null && W.length ? (a(), r("div", om, [
                  t("div", nm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", am, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", lm, [
                    (a(!0), r(j, null, we(e.status.git_changes.nodes_added, (me) => (a(), r("div", {
                      key: v(me),
                      class: "change-item"
                    }, [
                      t("span", im, f(v(me)), 1),
                      g(me) ? (a(), r("span", rm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && F.length ? (a(), r("div", cm, [
                  t("div", dm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", um, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", fm, [
                    (a(!0), r(j, null, we(e.status.git_changes.nodes_removed, (me) => (a(), r("div", {
                      key: v(me),
                      class: "change-item"
                    }, [
                      t("span", mm, f(v(me)), 1),
                      g(me) ? (a(), r("span", vm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.workflow_changes ? (a(), r("div", pm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", gm, [
                    t("div", hm, [
                      t("span", ym, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.has_other_changes ? (a(), r("div", wm, [...p[21] || (p[21] = [
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
              (R = e.status.comparison) != null && R.is_synced ? y("", !0) : (a(), r("div", _m, [
                t("div", bm, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (me) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Y = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && Y.length ? (a(), r("div", km, [
                  C(ut, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", $m, [
                    (a(!0), r(j, null, we(e.status.comparison.missing_nodes.slice(0, 10), (me) => (a(), r("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + f(me), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Cm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (ae = (G = e.status.comparison) == null ? void 0 : G.extra_nodes) != null && ae.length ? (a(), r("div", xm, [
                  C(ut, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Sm, [
                    (a(!0), r(j, null, we(e.status.comparison.extra_nodes.slice(0, 10), (me) => (a(), r("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + f(me), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Im, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (te = e.status.comparison) == null ? void 0 : te.version_mismatches) != null && A.length ? (a(), r("div", Em, [
                  C(ut, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Tm, [
                    (a(!0), r(j, null, we(e.status.comparison.version_mismatches.slice(0, 10), (me) => (a(), r("div", {
                      key: me.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(me.name) + ": ", 1),
                      t("span", Pm, f(me.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Rm, f(me.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Mm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((H = e.status.comparison) == null ? void 0 : H.packages_in_sync) === !1 ? (a(), r("div", Dm, [
                  C(ut, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Lm, [
                  C(ue, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (me) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (re = (O = e.status.comparison) == null ? void 0 : O.disabled_nodes) != null && re.length ? (a(), r("div", Om, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Am, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Nm, [
                  (a(!0), r(j, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (me) => (a(), r("div", {
                    key: me,
                    class: "drift-list-item"
                  }, " • " + f(me), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Um, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", zm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Fm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              u.value ? (a(), r("div", Bm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Vm, [
              C(ue, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (me) => w.$emit("close"))
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
}), Gm = /* @__PURE__ */ ye(Wm, [["__scopeId", "data-v-e2b37122"]]), jm = { class: "health-section-header" }, Hm = { class: "suggestions-content" }, Km = { class: "suggestions-text" }, qm = { style: { "margin-top": "var(--cg-space-3)" } }, Ym = {
  key: 1,
  class: "no-issues-text"
}, Jm = /* @__PURE__ */ he({
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
      const te = n.status.workflows.analyzed || [], A = te.filter(
        (H) => H.unresolved_models_count > 0 || H.ambiguous_models_count > 0
      );
      return A.length === 0 && n.status.missing_models_count > 0 ? te.filter((H) => H.sync_state === "synced") : A;
    });
    function $() {
      const te = S.value;
      te.length !== 0 && (v.value = !0, m("repair-missing-models", te.map((A) => A.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const L = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), I = N(() => n.status.has_changes), x = N(() => {
      const te = n.status.git_changes;
      return te.nodes_added.length > 0 || te.nodes_removed.length > 0 || te.workflow_changes;
    }), W = N(() => n.status.has_changes || L.value), V = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), F = N(() => n.status.git_changes.has_other_changes), T = N(() => {
      var te;
      return ((te = n.status.workflows.analyzed) == null ? void 0 : te.filter((A) => A.status === "broken")) || [];
    }), E = N(() => {
      var te;
      return ((te = n.status.workflows.analyzed) == null ? void 0 : te.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), R = N(() => T.value.length > 0), ee = N(() => R.value || E.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = N(() => {
      const te = [];
      return n.status.workflows.new.length > 0 && te.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && te.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && te.push(`${n.status.workflows.deleted.length} deleted`), te.length > 0 ? `${te.join(", ")} workflow${te.length === 1 && !te[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), G = N(() => {
      var H, O;
      const te = [], A = n.status.comparison;
      return (H = A.missing_nodes) != null && H.length && te.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (O = A.extra_nodes) != null && O.length && te.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), te.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${te.join(" and ")}.`;
    }), ae = N(() => {
      var H, O;
      const te = [], A = n.status.comparison;
      return (H = A.extra_nodes) != null && H.length && (A.extra_nodes.slice(0, 3).forEach((re) => {
        te.push(`Untracked: ${re}`);
      }), A.extra_nodes.length > 3 && te.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (O = A.missing_nodes) != null && O.length && (A.missing_nodes.slice(0, 3).forEach((re) => {
        te.push(`Missing: ${re}`);
      }), A.missing_nodes.length > 3 && te.push(`...and ${A.missing_nodes.length - 3} more missing`)), te;
    });
    return (te, A) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), M(Yt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (H) => te.$emit("start-setup"))
              }, {
                default: h(() => [...A[13] || (A[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), M(Yt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (H) => te.$emit("view-environments"))
              }, {
                default: h(() => [...A[14] || (A[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), M(Yt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[2] || (A[2] = (H) => te.$emit("create-environment"))
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
            t("div", jm, [
              C(At, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...A[16] || (A[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Bd, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), M(ue, {
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
            C(qu, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, so({
              left: h(() => [
                e.status.workflows.new.length ? (a(), M(us, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(us, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(us, {
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
                  separator: L.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), M(us, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(us, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(us, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                F.value ? (a(), M(us, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !x.value && !F.value ? (a(), M(us, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (a(), M(us, {
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
                  t("div", Hm, [
                    t("span", Km, f(Y.value), 1),
                    C(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (H) => te.$emit("commit-changes"))
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
          e.status.is_detached_head ? (a(), M(Yt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: A[6] || (A[6] = (H) => te.$emit("create-branch"))
              }, {
                default: h(() => [...A[20] || (A[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", qm, [
            C(At, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...A[21] || (A[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ee.value ? (a(), r(j, { key: 0 }, [
              T.value.length > 0 ? (a(), M(Yt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((H) => `${H.name} — ${H.issue_summary}`)
              }, {
                actions: h(() => [
                  C(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (H) => te.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[22] || (A[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              E.value.length > 0 ? (a(), M(Yt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((H) => `${H.name} — ${H.models_needing_path_sync_count} model path${H.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (H) => te.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[23] || (A[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !R.value ? (a(), M(Yt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  C(ue, {
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
                  C(ue, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[9] || (A[9] = (H) => te.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[24] || (A[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), M(Yt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: G.value,
                items: ae.value
              }, {
                actions: h(() => [
                  C(ue, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...A[25] || (A[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (H) => te.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[26] || (A[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), M(Yt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  C(ue, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[11] || (A[11] = (H) => te.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[27] || (A[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : W.value ? (a(), r("span", Ym, "No issues")) : (a(), M(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Gm, {
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
}), Xm = /* @__PURE__ */ ye(Jm, [["__scopeId", "data-v-55fcd77f"]]), Qm = ["type", "value", "placeholder", "disabled"], Zm = /* @__PURE__ */ he({
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
    return et(() => {
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
      class: Ee(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        u[0] || (u[0] = Zt((m) => d.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Zt((m) => d.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (m) => d.$emit("focus")),
      onBlur: u[3] || (u[3] = (m) => d.$emit("blur"))
    }, null, 42, Qm));
  }
}), Ln = /* @__PURE__ */ ye(Zm, [["__scopeId", "data-v-0380d08f"]]), ev = { class: "branch-create-form" }, tv = { class: "form-actions" }, sv = /* @__PURE__ */ he({
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
    return (d, u) => (a(), r("div", ev, [
      C(Ln, {
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", tv, [
        C(ue, {
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
        C(ue, {
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
}), ov = /* @__PURE__ */ ye(sv, [["__scopeId", "data-v-7c500394"]]), nv = { class: "branch-list-item__indicator" }, av = { class: "branch-list-item__name" }, lv = {
  key: 0,
  class: "branch-list-item__actions"
}, iv = {
  key: 0,
  class: "branch-list-item__current-label"
}, rv = /* @__PURE__ */ he({
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
      class: Ee(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", nv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", av, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", lv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", iv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), cv = /* @__PURE__ */ ye(rv, [["__scopeId", "data-v-c6581a24"]]), dv = {
  key: 2,
  class: "branch-list"
}, uv = /* @__PURE__ */ he({
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
    return (c, d) => (a(), M(Tt, null, {
      header: h(() => [
        C(Pt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), M(ue, {
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
        n.value ? (a(), M(ov, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", dv, [
          (a(!0), r(j, null, we(e.branches, (u) => (a(), M(cv, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: h(() => [
              u.is_current ? y("", !0) : (a(), M(ue, {
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
              u.is_current ? y("", !0) : (a(), M(ue, {
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
}), fv = /* @__PURE__ */ ye(uv, [["__scopeId", "data-v-86784ddd"]]), mv = { class: "commit-list" }, vv = /* @__PURE__ */ he({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", mv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), pv = /* @__PURE__ */ ye(vv, [["__scopeId", "data-v-8c5ee761"]]), gv = { class: "commit-hash" }, hv = /* @__PURE__ */ he({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", gv, f(o.value), 1));
  }
}), yr = /* @__PURE__ */ ye(hv, [["__scopeId", "data-v-7c333cc6"]]), yv = { class: "commit-message" }, wv = { class: "commit-date" }, _v = /* @__PURE__ */ he({
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
      class: Ee(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(yr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", yv, f(e.message), 1),
      t("span", wv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = rt(() => {
        }, ["stop"]))
      }, [
        Ke(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), bv = /* @__PURE__ */ ye(_v, [["__scopeId", "data-v-dd7c621b"]]), kv = /* @__PURE__ */ he({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), M(Tt, null, {
      header: h(() => [
        C(Pt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), M(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(pv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(j, null, we(e.commits, (n) => (a(), M(bv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                C(ue, {
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
}), $v = /* @__PURE__ */ ye(kv, [["__scopeId", "data-v-981c3c64"]]), u7 = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const f7 = [
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
], m7 = {
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
}, Cv = [
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
], v7 = [
  ...Cv,
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
function at() {
  const e = k(!1), s = k(null);
  async function o(J, $e) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const Ne = await window.app.api.fetchApi(J, $e);
    if (!Ne.ok) {
      const cs = await Ne.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Ne.status}`);
    }
    const Me = await Ne.text();
    if (Me)
      return JSON.parse(Me);
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: $e })
    });
  }
  async function i(J = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${$e}`);
  }
  async function c(J) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
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
  async function m(J) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(J) {
    return o(`/v2/comfygit/commit/${J}`);
  }
  async function w(J, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: $e })
    });
  }
  async function p(J, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: $e })
    });
  }
  async function _(J, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: $e })
    });
  }
  async function S(J, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function $() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const J = await n();
        return [{
          name: J.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + J.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: J.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: J.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(J, $e) {
    const Ne = { target_env: J };
    return $e && (Ne.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ne)
    });
  }
  async function L() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function I(J) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function x() {
    return o("/v2/workspace/environments/create_status");
  }
  async function W(J = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function V(J) {
    return o(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function F(J = !1) {
    try {
      return o(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await n(J), Ne = [];
      return $e.workflows.new.forEach((Me) => {
        Ne.push({ name: Me, status: "new", missing_nodes: 0, missing_models: 0, path: Me });
      }), $e.workflows.modified.forEach((Me) => {
        Ne.push({ name: Me, status: "modified", missing_nodes: 0, missing_models: 0, path: Me });
      }), $e.workflows.synced.forEach((Me) => {
        Ne.push({ name: Me, status: "synced", missing_nodes: 0, missing_models: 0, path: Me });
      }), Ne;
    }
  }
  async function T(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/details`);
  }
  async function E(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/resolve`, {
      method: "POST"
    });
  }
  async function R(J, $e, Ne) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Ne })
    });
  }
  async function ee(J, $e, Ne) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Ne })
    });
  }
  async function Y() {
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
  async function ae(J) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function te(J) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function A(J, $e) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function H(J, $e) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function O(J) {
    return o(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function re(J) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function me() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Pe() {
    return o("/v2/workspace/models/directory");
  }
  async function Ue(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function ze(J) {
    try {
      const $e = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
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
  async function Ye(J, $e) {
    const Ne = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Ne, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Fe(J, $e) {
    try {
      const Ne = new URLSearchParams();
      return J && Ne.append("level", J), $e && Ne.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function Z(J, $e) {
    try {
      const Ne = new URLSearchParams();
      return J && Ne.append("level", J), $e && Ne.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function se() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function X() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ie(J, $e) {
    try {
      const Ne = new URLSearchParams();
      return J && Ne.append("level", J), $e && Ne.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ne}`);
    } catch {
      return [];
    }
  }
  async function Te() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Ce(J) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
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
  async function U(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function ne(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function ce(J) {
    var Dt, cs, Io, Eo;
    const $e = crypto.randomUUID(), Ne = ((cs = (Dt = window.app) == null ? void 0 : Dt.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", Me = {
      kind: "install",
      params: {
        id: J.id,
        version: J.version || J.selected_version || "latest",
        selected_version: J.selected_version || "latest",
        repository: J.repository || "",
        mode: J.mode || "remote",
        channel: J.channel || "default"
      },
      ui_id: $e,
      client_id: Ne
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Me)
    }), await o("/v2/manager/queue/start"), { ui_id: $e };
  }
  async function ve(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function pe(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function xe() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Se(J, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: $e })
    });
  }
  async function de(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ge(J, $e, Ne) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Ne })
    });
  }
  async function Oe(J, $e) {
    const Ne = {};
    return $e && (Ne["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST",
      headers: Ne
    });
  }
  async function Ie(J) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function oe(J = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: $e
      })
    });
  }
  async function q(J, $e) {
    const Ne = $e ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Ne);
  }
  async function De(J, $e = {}) {
    const Ne = { "Content-Type": "application/json" };
    return $e.authToken && (Ne["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Ne,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function be(J, $e) {
    const Ne = $e ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Ne);
  }
  async function _e(J, $e = {}) {
    const Ne = { "Content-Type": "application/json" };
    return $e.authToken && (Ne["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Ne,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function B(J, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function z(J) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Ne of J)
      try {
        await E(Ne), $e.success++;
      } catch (Me) {
        $e.failed.push({
          name: Ne,
          error: Me instanceof Error ? Me.message : "Unknown error"
        });
      }
    return $e;
  }
  async function fe(J) {
    var Me;
    const $e = new FormData();
    if ($e.append("file", J), !((Me = window.app) != null && Me.api))
      throw new Error("ComfyUI API not available");
    const Ne = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ne.ok) {
      const Dt = await Ne.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${Ne.status}`);
    }
    return Ne.json();
  }
  async function Ve(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function Qe(J, $e, Ne, Me) {
    var Io;
    const Dt = new FormData();
    if (Dt.append("file", J), Dt.append("name", $e), Dt.append("model_strategy", Ne), Dt.append("torch_backend", Me), !((Io = window.app) != null && Io.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Dt
    });
    if (!cs.ok) {
      const Eo = await cs.json().catch(() => ({}));
      throw new Error(Eo.message || Eo.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function mt() {
    return o("/v2/workspace/import/status");
  }
  async function lt(J) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: J })
    });
  }
  async function dt(J, $e, Ne, Me) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: $e,
        model_strategy: Ne,
        torch_backend: Me
      })
    });
  }
  async function Rt() {
    return o("/v2/setup/status");
  }
  async function zt(J) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Kt() {
    return o("/v2/setup/initialize_status");
  }
  async function Ws(J) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Ms() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function no() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Co(J, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: $e })
    });
  }
  async function xo() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function So(J) {
    const $e = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function ke(J) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Q() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function He(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function gt(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/stop`, {
      method: "POST"
    });
  }
  async function qt(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/start`, {
      method: "POST"
    });
  }
  async function ys(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/status`);
  }
  async function ws(J) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function ls(J = !1) {
    return o(J ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ae() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function le(J) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function K(J) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function Le(J) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function je() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ot(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/info`);
  }
  async function ft(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`);
  }
  async function Mt(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function rs(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function Gs(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function js(J, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function ln(J) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: J })
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
    getSwitchProgress: L,
    createEnvironment: I,
    getCreateProgress: x,
    getComfyUIReleases: W,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: T,
    resolveWorkflow: E,
    installWorkflowDeps: R,
    setModelImportance: ee,
    // Model Management
    getEnvironmentModels: Y,
    getWorkspaceModels: G,
    getModelDetails: ae,
    openFileLocation: te,
    addModelSource: A,
    removeModelSource: H,
    deleteModel: O,
    downloadModel: re,
    scanWorkspaceModels: me,
    getModelsDirectory: Pe,
    setModelsDirectory: Ue,
    // Settings
    getConfig: ze,
    updateConfig: Ye,
    // Debug/Logs
    getEnvironmentLogs: Fe,
    getWorkspaceLogs: Z,
    getEnvironmentLogPath: se,
    getWorkspaceLogPath: X,
    getOrchestratorLogs: ie,
    getOrchestratorLogPath: Te,
    openFile: Ce,
    // Node Management
    getNodes: D,
    trackNodeAsDev: U,
    installNode: ne,
    queueNodeInstall: ce,
    updateNode: ve,
    uninstallNode: pe,
    // Git Remotes
    getRemotes: xe,
    addRemote: Se,
    removeRemote: de,
    updateRemoteUrl: ge,
    fetchRemote: Oe,
    getRemoteSyncStatus: Ie,
    // Push/Pull
    getPullPreview: q,
    pullFromRemote: De,
    getPushPreview: be,
    pushToRemote: _e,
    validateMerge: B,
    // Environment Sync
    syncEnvironmentManually: oe,
    // Workflow Repair
    repairWorkflowModels: z,
    // Import Operations
    previewTarballImport: fe,
    previewGitImport: lt,
    validateEnvironmentName: Ve,
    executeImport: Qe,
    executeGitImport: dt,
    getImportProgress: mt,
    // First-Time Setup
    getSetupStatus: Rt,
    initializeWorkspace: zt,
    getInitializeProgress: Kt,
    validatePath: Ws,
    // Deploy Operations
    getDeploySummary: Ms,
    getDataCenters: no,
    testRunPodConnection: Co,
    getNetworkVolumes: xo,
    getRunPodGpuTypes: So,
    deployToRunPod: ke,
    getRunPodPods: Q,
    terminateRunPodPod: He,
    stopRunPodPod: gt,
    startRunPodPod: qt,
    getDeploymentStatus: ys,
    exportDeployPackage: ws,
    getStoredRunPodKey: ls,
    clearRunPodKey: Ae,
    // Custom Worker Operations
    getCustomWorkers: is,
    addCustomWorker: le,
    removeCustomWorker: K,
    testWorkerConnection: Le,
    scanForWorkers: je,
    getWorkerSystemInfo: ot,
    getWorkerInstances: ft,
    deployToWorker: Mt,
    startWorkerInstance: rs,
    stopWorkerInstance: Gs,
    terminateWorkerInstance: js,
    // Git Authentication
    testGitAuth: ln
  };
}
async function vn(e, s) {
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
function xv() {
  async function e() {
    try {
      return await vn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await vn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await vn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await vn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const Sv = { class: "base-modal-header" }, Iv = {
  key: 0,
  class: "base-modal-title"
}, Ev = { class: "base-modal-body" }, Tv = {
  key: 0,
  class: "base-modal-loading"
}, Pv = {
  key: 1,
  class: "base-modal-error"
}, Rv = {
  key: 0,
  class: "base-modal-footer"
}, Mv = /* @__PURE__ */ he({
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
    return et(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), oo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, d) => (a(), M(yt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ee(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: d[1] || (d[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", Sv, [
            Ke(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Iv, f(e.title), 1)) : y("", !0)
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
          t("div", Ev, [
            e.loading ? (a(), r("div", Tv, "Loading...")) : e.error ? (a(), r("div", Pv, f(e.error), 1)) : Ke(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Rv, [
            Ke(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), vt = /* @__PURE__ */ ye(Mv, [["__scopeId", "data-v-8dab1081"]]), Dv = ["type", "disabled"], Lv = {
  key: 0,
  class: "spinner"
}, Ov = /* @__PURE__ */ he({
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
      class: Ee(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Lv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Dv));
  }
}), Re = /* @__PURE__ */ ye(Ov, [["__scopeId", "data-v-f3452606"]]), Av = {
  key: 0,
  class: "base-title-count"
}, Nv = /* @__PURE__ */ he({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), M(qa(`h${e.level}`), {
      class: Ee(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Av, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ ye(Nv, [["__scopeId", "data-v-5a01561d"]]), Uv = ["value", "disabled"], zv = {
  key: 0,
  value: "",
  disabled: ""
}, Fv = ["value"], Bv = {
  key: 0,
  class: "base-select-error"
}, Vv = /* @__PURE__ */ he({
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
      class: Ee(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ee(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", zv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(j, null, we(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Fv))), 128))
      ], 42, Uv),
      e.error ? (a(), r("span", Bv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Wv = /* @__PURE__ */ ye(Vv, [["__scopeId", "data-v-7436d745"]]), Gv = { class: "popover-header" }, jv = { class: "popover-title" }, Hv = { class: "popover-content" }, Kv = {
  key: 0,
  class: "popover-actions"
}, qv = /* @__PURE__ */ he({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ht({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", Gv, [
            t("h4", jv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Hv, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Kv, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ ye(qv, [["__scopeId", "data-v-42815ace"]]), Yv = { class: "detail-section" }, Jv = {
  key: 0,
  class: "empty-message"
}, Xv = { class: "model-header" }, Qv = { class: "model-name" }, Zv = { class: "model-details" }, ep = { class: "model-row" }, tp = { class: "model-row" }, sp = { class: "label" }, op = {
  key: 0,
  class: "model-row model-row-nodes"
}, np = { class: "node-list" }, ap = ["onClick"], lp = {
  key: 1,
  class: "model-row"
}, ip = { class: "value" }, rp = {
  key: 2,
  class: "model-row"
}, cp = { class: "value error" }, dp = {
  key: 0,
  class: "model-actions"
}, up = { class: "detail-section" }, fp = {
  key: 0,
  class: "empty-message"
}, mp = { class: "node-name" }, vp = {
  key: 0,
  class: "node-version"
}, pp = /* @__PURE__ */ he({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = at(), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(T) {
      switch (T) {
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
    function $(T) {
      switch (T) {
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
    function P(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const E = T.hash || T.filename;
      return p.value.has(E) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function L(T) {
      return p.value.has(T);
    }
    function I(T) {
      p.value.has(T) ? p.value.delete(T) : p.value.add(T), p.value = new Set(p.value);
    }
    async function x() {
      u.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function W(T, E) {
      g.value[T] = E, v.value = !0;
    }
    async function V(T) {
      try {
        await c(T);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function F() {
      if (!v.value) {
        n("close");
        return;
      }
      u.value = !0, m.value = null;
      try {
        for (const [T, E] of Object.entries(g.value))
          await i(o.workflowName, T, E);
        n("refresh"), n("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    return et(x), (T, E) => (a(), r(j, null, [
      C(vt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: u.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (R) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), r(j, { key: 0 }, [
            t("section", Yv, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), r("div", Jv, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, we(d.value.models, (R) => {
                var ee;
                return a(), r("div", {
                  key: R.hash || R.filename,
                  class: "model-card"
                }, [
                  t("div", Xv, [
                    E[6] || (E[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Qv, f(R.filename), 1)
                  ]),
                  t("div", Zv, [
                    t("div", ep, [
                      E[7] || (E[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ee(["value", S(R.status)])
                      }, f($(R.status)), 3)
                    ]),
                    t("div", tp, [
                      t("span", sp, [
                        E[8] || (E[8] = b(" Importance: ", -1)),
                        C(hr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (Y) => w.value = !0)
                        })
                      ]),
                      C(Wv, {
                        "model-value": g.value[R.filename] || R.importance,
                        options: _,
                        "onUpdate:modelValue": (Y) => W(R.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    R.loaded_by && R.loaded_by.length > 0 ? (a(), r("div", op, [
                      E[9] || (E[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", np, [
                        (a(!0), r(j, null, we(P(R), (Y, G) => (a(), r("div", {
                          key: `${Y.node_id}-${G}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        R.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => I(R.hash || R.filename)
                        }, f(L(R.hash || R.filename) ? "▼ Show less" : `▶ View all (${R.loaded_by.length})`), 9, ap)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    R.size_mb ? (a(), r("div", lp, [
                      E[10] || (E[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", ip, f(R.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    R.has_category_mismatch ? (a(), r("div", rp, [
                      E[13] || (E[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", cp, [
                        E[11] || (E[11] = b(" In ", -1)),
                        t("code", null, f(R.actual_category) + "/", 1),
                        E[12] || (E[12] = b(" but loader needs ", -1)),
                        t("code", null, f((ee = R.expected_categories) == null ? void 0 : ee[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  R.status !== "available" ? (a(), r("div", dp, [
                    R.status === "downloadable" ? (a(), M(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...E[14] || (E[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : R.status === "category_mismatch" && R.file_path ? (a(), M(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => V(R.file_path)
                    }, {
                      default: h(() => [...E[15] || (E[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : R.status !== "path_mismatch" ? (a(), M(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: E[2] || (E[2] = (Y) => n("resolve"))
                    }, {
                      default: h(() => [...E[16] || (E[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", up, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), r("div", fp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, we(d.value.nodes, (R) => (a(), r("div", {
                key: R.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ee(["node-status", R.status === "installed" ? "installed" : "missing"])
                }, f(R.status === "installed" ? "✓" : "✕"), 3),
                t("span", mp, f(R.name), 1),
                R.version ? (a(), r("span", vp, "v" + f(R.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(Re, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (R) => n("close"))
          }, {
            default: h(() => [...E[17] || (E[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Re, {
            key: 0,
            variant: "primary",
            onClick: F
          }, {
            default: h(() => [...E[18] || (E[18] = [
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
        onClose: E[5] || (E[5] = (R) => w.value = !1)
      }, {
        content: h(() => [...E[19] || (E[19] = [
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
}), gp = /* @__PURE__ */ ye(pp, [["__scopeId", "data-v-668728e6"]]), Je = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function wr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function da(e) {
  return Je.items.find((s) => s.id === e);
}
async function uo() {
  if (Je.status === "downloading") return;
  const e = Je.items.find((s) => s.status === "queued");
  if (!e) {
    Je.status = "idle";
    return;
  }
  Je.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await hp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Je.status = "idle", uo();
  }
}
async function hp(e) {
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
async function yp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Je.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: wr(),
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
      Je.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function ko() {
  function e($) {
    for (const P of $) {
      if (Je.items.some(
        (x) => x.url === P.url && x.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const I = {
        id: wr(),
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
      Je.items.push(I);
    }
    Je.status === "idle" && uo();
  }
  async function s($) {
    const P = da($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), P.status = "failed", P.error = "Cancelled by user", Je.status = "idle", uo();
      } else if (P.status === "queued") {
        const L = Je.items.findIndex((I) => I.id === $);
        L >= 0 && Je.items.splice(L, 1);
      }
    }
  }
  function o($) {
    const P = da($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Je.status === "idle" && uo());
  }
  function n($) {
    const P = da($);
    !P || P.status !== "paused" || (P.status = "queued", Je.status === "idle" && uo());
  }
  function l() {
    const $ = Je.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Je.status === "idle" && uo();
  }
  function i($) {
    const P = Je.items.findIndex((L) => L.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Je.items[P].status) && Je.items.splice(P, 1);
  }
  function c() {
    Je.items = Je.items.filter(($) => $.status !== "completed");
  }
  function d() {
    Je.items = Je.items.filter(($) => $.status !== "failed");
  }
  const u = N(
    () => Je.items.find(($) => $.status === "downloading")
  ), m = N(
    () => Je.items.filter(($) => $.status === "queued")
  ), v = N(
    () => Je.items.filter(($) => $.status === "completed")
  ), g = N(
    () => Je.items.filter(($) => $.status === "failed")
  ), w = N(
    () => Je.items.filter(($) => $.status === "paused")
  ), p = N(() => Je.items.length > 0), _ = N(
    () => Je.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = N(
    () => Je.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: xn(Je),
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
    loadPendingDownloads: yp
  };
}
function _r() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(L, I) {
    var W;
    if (!((W = window.app) != null && W.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(L, I);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), F = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(F);
    }
    return x.json();
  }
  async function d(L) {
    l.value = !0, i.value = null;
    try {
      let I;
      return co() || (I = await c(
        `/v2/comfygit/workflow/${L}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = I, I;
    } catch (I) {
      const x = I instanceof Error ? I.message : "Unknown error occurred";
      throw i.value = x, I;
    } finally {
      l.value = !1;
    }
  }
  async function u(L, I, x, W) {
    l.value = !0, i.value = null;
    try {
      let V;
      if (!co()) {
        const F = Object.fromEntries(I), T = Object.fromEntries(x), E = W ? Array.from(W) : [];
        V = await c(
          `/v2/comfygit/workflow/${L}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: T,
              skipped_packages: E
            })
          }
        );
      }
      return s.value = V, V;
    } catch (V) {
      const F = V instanceof Error ? V.message : "Unknown error occurred";
      throw i.value = F, V;
    } finally {
      l.value = !1;
    }
  }
  async function m(L, I = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return co() || (x = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
        }
      )), o.value = x.results, x.results;
    } catch (x) {
      const W = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = W, x;
    } finally {
      l.value = !1;
    }
  }
  async function v(L, I = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return co() || (x = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: L, limit: I })
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
  async function p(L) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return co(), await _(L);
    } catch (I) {
      const x = I instanceof Error ? I.message : "Failed to install nodes";
      throw g.installError = x, I;
    }
  }
  async function _(L) {
    var x;
    const I = await c(
      `/v2/comfygit/workflow/${L}/install`,
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
      const W = new Map(((x = I.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < g.nodesToInstall.length; V++) {
        const F = g.nodesToInstall[V], T = W.get(F);
        g.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !T,
          error: T
        });
      }
    }
    return g.nodesInstalled = I.nodes_installed, g.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (g.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function S(L, I, x) {
    w(), g.phase = "resolving", i.value = null;
    const W = Object.fromEntries(I), V = Object.fromEntries(x);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${L}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: W,
          model_choices: V
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const T = F.body.getReader(), E = new TextDecoder();
      let R = "";
      for (; ; ) {
        const { done: ee, value: Y } = await T.read();
        if (ee) break;
        R += E.decode(Y, { stream: !0 });
        const G = R.split(`

`);
        R = G.pop() || "";
        for (const ae of G) {
          if (!ae.trim()) continue;
          const te = ae.split(`
`);
          let A = "", H = "";
          for (const O of te)
            O.startsWith("event: ") ? A = O.slice(7) : O.startsWith("data: ") && (H = O.slice(6));
          if (H)
            try {
              const O = JSON.parse(H);
              $(A, O);
            } catch (O) {
              console.warn("Failed to parse SSE event:", O);
            }
        }
      }
    } catch (F) {
      const T = F instanceof Error ? F.message : "Unknown error occurred";
      throw i.value = T, g.error = T, g.phase = "error", F;
    }
  }
  function $(L, I) {
    switch (L) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = I.total;
        break;
      case "file_start":
        g.currentFile = I.filename, g.currentFileIndex = I.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = I.downloaded, g.bytesTotal = I.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: I.filename,
          success: I.success,
          error: I.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = I.nodes_to_install || [], I.download_results && (g.completedFiles = I.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = I.message, g.phase = "error", i.value = I.message;
        break;
    }
  }
  function P(L, I) {
    const { addToQueue: x } = ko(), W = I.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: L,
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
const wp = { class: "resolution-stepper" }, _p = { class: "stepper-header" }, bp = ["onClick"], kp = {
  key: 0,
  class: "step-icon"
}, $p = {
  key: 1,
  class: "step-number"
}, Cp = { class: "step-label" }, xp = {
  key: 0,
  class: "step-connector"
}, Sp = { class: "stepper-content" }, Ip = /* @__PURE__ */ he({
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
    return (m, v) => (a(), r("div", wp, [
      t("div", _p, [
        (a(!0), r(j, null, we(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Ee(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: d(g.id)
          }]),
          onClick: (p) => u(g.id)
        }, [
          t("div", {
            class: Ee(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", kp, "✓")) : (a(), r("span", $p, f(w + 1), 1))
          ], 2),
          t("div", Cp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", xp)) : y("", !0)
        ], 10, bp))), 128))
      ]),
      t("div", Sp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Ep = /* @__PURE__ */ ye(Ip, [["__scopeId", "data-v-2a7b3af8"]]), Tp = /* @__PURE__ */ he({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = N(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = N(() => `confidence-${o.value}`), l = N(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Ee(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), On = /* @__PURE__ */ ye(Tp, [["__scopeId", "data-v-17ec4b80"]]), Pp = { class: "node-info" }, Rp = { class: "node-info-text" }, Mp = { class: "item-body" }, Dp = {
  key: 0,
  class: "resolved-state"
}, Lp = {
  key: 1,
  class: "multiple-options"
}, Op = { class: "options-list" }, Ap = ["onClick"], Np = ["name", "value", "checked", "onChange"], Up = { class: "option-content" }, zp = { class: "option-header" }, Fp = { class: "option-package-id" }, Bp = {
  key: 0,
  class: "option-title"
}, Vp = { class: "option-meta" }, Wp = {
  key: 0,
  class: "installed-badge"
}, Gp = { class: "action-buttons" }, jp = {
  key: 2,
  class: "unresolved"
}, Hp = {
  key: 0,
  class: "searching-state"
}, Kp = { class: "options-list" }, qp = ["onClick"], Yp = ["name", "value"], Jp = { class: "option-content" }, Xp = { class: "option-header" }, Qp = { class: "option-package-id" }, Zp = {
  key: 0,
  class: "option-description"
}, eg = { class: "option-meta" }, tg = {
  key: 0,
  class: "installed-badge"
}, sg = {
  key: 2,
  class: "unresolved-message"
}, og = { class: "action-buttons" }, ng = /* @__PURE__ */ he({
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
      class: Ee(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Pp, [
        t("span", Rp, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ee(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Mp, [
        i.value ? (a(), r("div", Dp, [
          C(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Lp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Op, [
            (a(!0), r(j, null, we(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Ee(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => d(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => d(g)
              }, null, 40, Np),
              t("div", Up, [
                t("div", zp, [
                  t("span", Fp, f(v.package_id), 1),
                  C(On, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", Bp, f(v.title), 1)) : y("", !0),
                t("div", Vp, [
                  v.is_installed ? (a(), r("span", Wp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Ap))), 128))
          ]),
          t("div", Gp, [
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
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
        ])) : (a(), r("div", jp, [
          e.isSearching ? (a(), r("div", Hp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Kp, [
              (a(!0), r(j, null, we(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Yp),
                t("div", Jp, [
                  t("div", Xp, [
                    t("span", Qp, f(v.package_id), 1),
                    C(On, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", Zp, f(l(v.description)), 1)) : y("", !0),
                  t("div", eg, [
                    v.is_installed ? (a(), r("span", tg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, qp))), 128))
            ])
          ], 64)) : (a(), r("div", sg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", og, [
            C(Re, {
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
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
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
}), ag = /* @__PURE__ */ ye(ng, [["__scopeId", "data-v-c2997d1d"]]), lg = { class: "item-navigator" }, ig = { class: "nav-item-info" }, rg = ["title"], cg = { class: "nav-controls" }, dg = { class: "nav-arrows" }, ug = ["disabled"], fg = ["disabled"], mg = { class: "nav-position" }, vg = /* @__PURE__ */ he({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", lg, [
      t("div", ig, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, rg)
      ]),
      t("div", cg, [
        t("div", dg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, ug),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, fg)
        ]),
        t("span", mg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), br = /* @__PURE__ */ ye(vg, [["__scopeId", "data-v-74af7920"]]), pg = ["type", "value", "placeholder", "disabled"], gg = {
  key: 0,
  class: "base-input-error"
}, hg = /* @__PURE__ */ he({
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
      class: Ee(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ee(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Zt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Zt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, pg),
      e.error ? (a(), r("span", gg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), es = /* @__PURE__ */ ye(hg, [["__scopeId", "data-v-9ba02cdc"]]), yg = { class: "node-resolution-step" }, wg = {
  key: 0,
  class: "auto-resolved-section"
}, _g = { class: "section-header" }, bg = { class: "stat-badge" }, kg = { class: "resolved-packages-list" }, $g = { class: "package-info" }, Cg = { class: "package-id" }, xg = { class: "node-count" }, Sg = { class: "package-actions" }, Ig = {
  key: 0,
  class: "status-badge install"
}, Eg = {
  key: 1,
  class: "status-badge skip"
}, Tg = ["onClick"], Pg = {
  key: 1,
  class: "section-divider"
}, Rg = { class: "step-header" }, Mg = { class: "stat-badge" }, Dg = {
  key: 1,
  class: "step-body"
}, Lg = {
  key: 3,
  class: "empty-state"
}, Og = { class: "node-modal-body" }, Ag = { class: "node-search-results-container" }, Ng = {
  key: 0,
  class: "node-search-results"
}, Ug = ["onClick"], zg = { class: "node-result-header" }, Fg = { class: "node-result-package-id" }, Bg = {
  key: 0,
  class: "node-result-description"
}, Vg = {
  key: 1,
  class: "node-empty-state"
}, Wg = {
  key: 2,
  class: "node-empty-state"
}, Gg = {
  key: 3,
  class: "node-empty-state"
}, jg = { class: "node-manual-entry-modal" }, Hg = { class: "node-modal-body" }, Kg = { class: "node-modal-actions" }, qg = /* @__PURE__ */ he({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = _r(), i = k(0), c = k(!1), d = k(!1), u = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && O(), _.value = !1;
    }
    const $ = N(() => o.nodes[i.value]), P = N(() => o.nodes.filter((Z) => o.nodeChoices.has(Z.node_type)).length), L = N(() => $.value ? w.value.get($.value.node_type) || [] : []), I = N(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (Z) => {
      var se;
      Z && ((se = Z.options) != null && se.length || w.value.has(Z.node_type) || p.value.has(Z.node_type) || o.nodeChoices.has(Z.node_type) || await x(Z.node_type));
    }, { immediate: !0 });
    async function x(Z) {
      p.value.add(Z);
      try {
        const se = await l(Z, 5);
        w.value.set(Z, se);
      } catch {
        w.value.set(Z, []);
      } finally {
        p.value.delete(Z);
      }
    }
    const W = N(() => o.autoResolvedPackages.filter((Z) => !o.skippedPackages.has(Z.package_id)).length);
    function V(Z) {
      return o.skippedPackages.has(Z);
    }
    function F(Z) {
      n("package-skip", Z);
    }
    const T = N(() => {
      var se;
      if (!$.value) return "not-found";
      const Z = o.nodeChoices.get($.value.node_type);
      if (Z)
        switch (Z.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (se = $.value.options) != null && se.length ? "ambiguous" : "not-found";
    }), E = N(() => {
      var se;
      if (!$.value) return;
      const Z = o.nodeChoices.get($.value.node_type);
      if (Z)
        switch (Z.action) {
          case "install":
            return Z.package_id ? `→ ${Z.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (se = $.value.options) != null && se.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function R(Z) {
      Z >= 0 && Z < o.nodes.length && (i.value = Z);
    }
    function ee() {
      var Z;
      for (let se = i.value + 1; se < o.nodes.length; se++) {
        const X = o.nodes[se];
        if (!((Z = o.nodeChoices) != null && Z.has(X.node_type))) {
          R(se);
          return;
        }
      }
    }
    function Y() {
      $.value && (n("mark-optional", $.value.node_type), _t(() => ee()));
    }
    function G() {
      $.value && (n("skip", $.value.node_type), _t(() => ee()));
    }
    function ae(Z) {
      $.value && (n("option-selected", $.value.node_type, Z), _t(() => ee()));
    }
    function te() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function A() {
      $.value && (u.value = $.value.node_type, v.value = L.value, c.value = !0, Ue(u.value));
    }
    function H() {
      m.value = "", d.value = !0;
    }
    function O() {
      c.value = !1, u.value = "", v.value = [];
    }
    function re() {
      d.value = !1, m.value = "";
    }
    let me = null;
    function Pe() {
      me && clearTimeout(me), me = setTimeout(() => {
        Ue(u.value);
      }, 300);
    }
    async function Ue(Z) {
      if (!Z.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(Z, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function ze(Z) {
      $.value && (n("manual-entry", $.value.node_type, Z.package_id), O(), _t(() => ee()));
    }
    function Ye(Z) {
      $.value && (n("manual-entry", $.value.node_type, Z.package_id), _t(() => ee()));
    }
    function Fe() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), re(), _t(() => ee()));
    }
    return (Z, se) => {
      var X, ie;
      return a(), r("div", yg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", wg, [
          t("div", _g, [
            se[6] || (se[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", bg, f(W.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", kg, [
            (a(!0), r(j, null, we(e.autoResolvedPackages, (Te) => (a(), r("div", {
              key: Te.package_id,
              class: "resolved-package-item"
            }, [
              t("div", $g, [
                t("code", Cg, f(Te.package_id), 1),
                t("span", xg, f(Te.node_types_count) + " node type" + f(Te.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Sg, [
                V(Te.package_id) ? (a(), r("span", Eg, " SKIPPED ")) : (a(), r("span", Ig, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ce) => F(Te.package_id)
                }, f(V(Te.package_id) ? "Include" : "Skip"), 9, Tg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Pg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(j, { key: 2 }, [
          t("div", Rg, [
            se[7] || (se[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Mg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), M(br, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: se[0] || (se[0] = (Te) => R(i.value - 1)),
            onNext: se[1] || (se[1] = (Te) => R(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Dg, [
            C(ag, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((X = $.value.options) != null && X.length),
              options: $.value.options,
              choice: (ie = e.nodeChoices) == null ? void 0 : ie.get($.value.node_type),
              status: T.value,
              "status-label": E.value,
              "search-results": L.value,
              "is-searching": I.value,
              onMarkOptional: Y,
              onSkip: G,
              onManualEntry: H,
              onSearch: A,
              onOptionSelected: ae,
              onClearChoice: te,
              onSearchResultSelected: Ye
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Lg, [...se[8] || (se[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), M(yt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: se[4] || (se[4] = rt((Te) => _.value = !0, ["self"])),
            onMouseup: rt(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: se[3] || (se[3] = (Te) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                se[9] || (se[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              t("div", Og, [
                C(es, {
                  modelValue: u.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (Te) => u.value = Te),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                t("div", Ag, [
                  v.value.length > 0 ? (a(), r("div", Ng, [
                    (a(!0), r(j, null, we(v.value, (Te) => (a(), r("div", {
                      key: Te.package_id,
                      class: "node-search-result-item",
                      onClick: (Ce) => ze(Te)
                    }, [
                      t("div", zg, [
                        t("code", Fg, f(Te.package_id), 1),
                        Te.match_confidence ? (a(), M(On, {
                          key: 0,
                          confidence: Te.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Te.description ? (a(), r("div", Bg, f(Te.description), 1)) : y("", !0)
                    ], 8, Ug))), 128))
                  ])) : g.value ? (a(), r("div", Vg, "Searching...")) : u.value ? (a(), r("div", Wg, 'No packages found matching "' + f(u.value) + '"', 1)) : (a(), r("div", Gg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), M(yt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: rt(re, ["self"])
          }, [
            t("div", jg, [
              t("div", { class: "node-modal-header" }, [
                se[10] || (se[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              t("div", Hg, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": se[5] || (se[5] = (Te) => m.value = Te),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Kg, [
                  C(Re, {
                    variant: "secondary",
                    onClick: re
                  }, {
                    default: h(() => [...se[11] || (se[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Re, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Fe
                  }, {
                    default: h(() => [...se[12] || (se[12] = [
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
}), Yg = /* @__PURE__ */ ye(qg, [["__scopeId", "data-v-6d7f8125"]]), Jg = { class: "node-info" }, Xg = { class: "node-info-text" }, Qg = { class: "item-body" }, Zg = {
  key: 0,
  class: "resolved-state"
}, eh = {
  key: 1,
  class: "multiple-options"
}, th = { class: "options-list" }, sh = ["onClick"], oh = ["name", "value", "checked", "onChange"], nh = { class: "option-content" }, ah = { class: "option-header" }, lh = { class: "option-filename" }, ih = { class: "option-meta" }, rh = { class: "option-size" }, ch = { class: "option-category" }, dh = { class: "option-path" }, uh = { class: "action-buttons" }, fh = {
  key: 2,
  class: "unresolved"
}, mh = { class: "action-buttons" }, vh = /* @__PURE__ */ he({
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
      class: Ee(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Jg, [
        t("span", Xg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ee(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Qg, [
        l.value ? (a(), r("div", Zg, [
          C(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", eh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", th, [
            (a(!0), r(j, null, we(e.options, (v, g) => (a(), r("label", {
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
              }, null, 40, oh),
              t("div", nh, [
                t("div", ah, [
                  t("span", lh, f(v.model.filename), 1),
                  C(On, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", ih, [
                  t("span", rh, f(d(v.model.size)), 1),
                  t("span", ch, f(v.model.category), 1)
                ]),
                t("div", dh, f(v.model.relative_path), 1)
              ])
            ], 10, sh))), 128))
          ]),
          t("div", uh, [
            C(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
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
        ])) : (a(), r("div", fh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", mh, [
            C(Re, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
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
}), ph = /* @__PURE__ */ ye(vh, [["__scopeId", "data-v-8a82fefa"]]), gh = { class: "model-resolution-step" }, hh = { class: "step-header" }, yh = { class: "step-info" }, wh = { class: "step-title" }, _h = { class: "step-description" }, bh = { class: "stat-badge" }, kh = {
  key: 1,
  class: "step-body"
}, $h = {
  key: 2,
  class: "empty-state"
}, Ch = { class: "model-search-modal" }, xh = { class: "model-modal-body" }, Sh = {
  key: 0,
  class: "model-search-results"
}, Ih = ["onClick"], Eh = { class: "model-result-header" }, Th = { class: "model-result-filename" }, Ph = { class: "model-result-meta" }, Rh = { class: "model-result-category" }, Mh = { class: "model-result-size" }, Dh = {
  key: 0,
  class: "model-result-path"
}, Lh = {
  key: 1,
  class: "model-no-results"
}, Oh = {
  key: 2,
  class: "model-searching"
}, Ah = { class: "model-download-url-modal" }, Nh = { class: "model-modal-body" }, Uh = { class: "model-input-group" }, zh = { class: "model-input-group" }, Fh = { class: "model-modal-actions" }, Bh = /* @__PURE__ */ he({
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
    function n(O) {
      var re;
      return O && ((re = o[O]) == null ? void 0 : re[0]) || null;
    }
    const l = e, i = s, c = k(0), d = k(!1), u = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[c.value]), S = N(() => l.models.some((O) => O.is_download_intent)), $ = N(() => l.models.filter(
      (O) => l.modelChoices.has(O.filename) || O.is_download_intent
    ).length), P = N(() => {
      var re;
      if (!_.value) return "";
      const O = n((re = _.value.reference) == null ? void 0 : re.node_type);
      return O ? `${O}/${_.value.filename}` : "";
    }), L = N(() => {
      var re;
      if (!_.value) return "not-found";
      const O = l.modelChoices.get(_.value.filename);
      if (O)
        switch (O.action) {
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
      return _.value.is_download_intent ? "download" : (re = _.value.options) != null && re.length ? "ambiguous" : "not-found";
    }), I = N(() => {
      var re, me;
      if (!_.value) return;
      const O = l.modelChoices.get(_.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (re = O.selected_model) != null && re.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (me = _.value.options) != null && me.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function x(O) {
      O >= 0 && O < l.models.length && (c.value = O);
    }
    function W() {
      var O;
      for (let re = c.value + 1; re < l.models.length; re++) {
        const me = l.models[re];
        if (!me.is_download_intent && !((O = l.modelChoices) != null && O.has(me.filename))) {
          x(re);
          return;
        }
      }
    }
    function V() {
      _.value && (i("mark-optional", _.value.filename), _t(() => W()));
    }
    function F() {
      _.value && (i("skip", _.value.filename), _t(() => W()));
    }
    function T(O) {
      _.value && (i("option-selected", _.value.filename, O), _t(() => W()));
    }
    function E() {
      _.value && i("clear-choice", _.value.filename);
    }
    function R() {
      _.value && (m.value = _.value.filename, d.value = !0);
    }
    function ee() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, u.value = !0);
    }
    function Y() {
      d.value = !1, m.value = "", w.value = [];
    }
    function G() {
      u.value = !1, v.value = "", g.value = "";
    }
    function ae() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function te(O) {
      _.value && (Y(), _t(() => W()));
    }
    function A() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), G(), _t(() => W()));
    }
    function H(O) {
      if (!O) return "Unknown";
      const re = O / (1024 * 1024 * 1024);
      return re >= 1 ? `${re.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, re) => {
      var me, Pe, Ue;
      return a(), r("div", gh, [
        t("div", hh, [
          t("div", yh, [
            t("h3", wh, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", _h, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", bh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), M(br, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: re[0] || (re[0] = (ze) => x(c.value - 1)),
          onNext: re[1] || (re[1] = (ze) => x(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", kh, [
          C(ph, {
            filename: _.value.filename,
            "node-type": ((me = _.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((Pe = _.value.options) != null && Pe.length),
            options: _.value.options,
            choice: (Ue = e.modelChoices) == null ? void 0 : Ue.get(_.value.filename),
            status: L.value,
            "status-label": I.value,
            onMarkOptional: V,
            onSkip: F,
            onDownloadUrl: ee,
            onSearch: R,
            onOptionSelected: T,
            onClearChoice: E
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", $h, [...re[5] || (re[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(yt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(Y, ["self"])
          }, [
            t("div", Ch, [
              t("div", { class: "model-modal-header" }, [
                re[6] || (re[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", xh, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": re[2] || (re[2] = (ze) => m.value = ze),
                  placeholder: "Search by filename, category...",
                  onInput: ae
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Sh, [
                  (a(!0), r(j, null, we(w.value, (ze) => (a(), r("div", {
                    key: ze.hash,
                    class: "model-search-result-item",
                    onClick: (Ye) => te()
                  }, [
                    t("div", Eh, [
                      t("code", Th, f(ze.filename), 1)
                    ]),
                    t("div", Ph, [
                      t("span", Rh, f(ze.category), 1),
                      t("span", Mh, f(H(ze.size)), 1)
                    ]),
                    ze.relative_path ? (a(), r("div", Dh, f(ze.relative_path), 1)) : y("", !0)
                  ], 8, Ih))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Lh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Oh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), M(yt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(G, ["self"])
          }, [
            t("div", Ah, [
              t("div", { class: "model-modal-header" }, [
                re[7] || (re[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: G
                }, "✕")
              ]),
              t("div", Nh, [
                t("div", Uh, [
                  re[8] || (re[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(es, {
                    modelValue: v.value,
                    "onUpdate:modelValue": re[3] || (re[3] = (ze) => v.value = ze),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", zh, [
                  re[9] || (re[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(es, {
                    modelValue: g.value,
                    "onUpdate:modelValue": re[4] || (re[4] = (ze) => g.value = ze),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Fh, [
                  C(Re, {
                    variant: "secondary",
                    onClick: G
                  }, {
                    default: h(() => [...re[10] || (re[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: A
                  }, {
                    default: h(() => [...re[11] || (re[11] = [
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
}), Vh = /* @__PURE__ */ ye(Bh, [["__scopeId", "data-v-5c700bfa"]]), Wh = { class: "applying-step" }, Gh = {
  key: 0,
  class: "phase-content"
}, jh = {
  key: 1,
  class: "phase-content"
}, Hh = { class: "phase-description" }, Kh = { class: "overall-progress" }, qh = { class: "progress-bar" }, Yh = { class: "progress-label" }, Jh = { class: "install-list" }, Xh = { class: "install-icon" }, Qh = { key: 0 }, Zh = {
  key: 1,
  class: "spinner"
}, ey = { key: 2 }, ty = { key: 3 }, sy = {
  key: 0,
  class: "install-error"
}, oy = {
  key: 2,
  class: "phase-content"
}, ny = { class: "phase-header" }, ay = { class: "phase-title" }, ly = { class: "completion-summary" }, iy = {
  key: 0,
  class: "summary-item success"
}, ry = { class: "summary-text" }, cy = {
  key: 1,
  class: "summary-item error"
}, dy = { class: "summary-text" }, uy = {
  key: 2,
  class: "failed-list"
}, fy = { class: "failed-node-id" }, my = { class: "failed-error" }, vy = {
  key: 4,
  class: "summary-item success"
}, py = {
  key: 5,
  class: "restart-prompt"
}, gy = {
  key: 3,
  class: "phase-content error"
}, hy = { class: "error-message" }, yy = /* @__PURE__ */ he({
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
      return a(), r("div", Wh, [
        e.progress.phase === "resolving" ? (a(), r("div", Gh, [...u[2] || (u[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", jh, [
          u[3] || (u[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Hh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Kh, [
            t("div", qh, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Yh, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Jh, [
            (a(!0), r(j, null, we(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Ee(["install-item", i(p, _)])
            }, [
              t("span", Xh, [
                i(p, _) === "pending" ? (a(), r("span", Qh, "○")) : i(p, _) === "installing" ? (a(), r("span", Zh, "◌")) : i(p, _) === "complete" ? (a(), r("span", ey, "✓")) : i(p, _) === "failed" ? (a(), r("span", ty, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", sy, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", oy, [
          t("div", ny, [
            t("span", {
              class: Ee(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", ay, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", ly, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", iy, [
              u[4] || (u[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", ry, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", cy, [
              u[5] || (u[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", dy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", uy, [
              (a(!0), r(j, null, we(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", fy, f(p.node_id), 1),
                t("span", my, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: u[0] || (u[0] = (p) => d.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", vy, [...u[6] || (u[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            u[8] || (u[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", py, [
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
        ])) : e.progress.phase === "error" ? (a(), r("div", gy, [
          u[9] || (u[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", hy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), wy = /* @__PURE__ */ ye(yy, [["__scopeId", "data-v-5efaae58"]]), _y = {
  key: 0,
  class: "loading-state"
}, by = {
  key: 1,
  class: "wizard-content"
}, ky = {
  key: 0,
  class: "step-content"
}, $y = { class: "analysis-summary" }, Cy = { class: "analysis-header" }, xy = { class: "summary-description" }, Sy = { class: "stats-grid" }, Iy = { class: "stat-card" }, Ey = { class: "stat-items" }, Ty = {
  key: 0,
  class: "stat-item success"
}, Py = { class: "stat-count" }, Ry = {
  key: 1,
  class: "stat-item info"
}, My = { class: "stat-count" }, Dy = {
  key: 2,
  class: "stat-item warning"
}, Ly = { class: "stat-count" }, Oy = {
  key: 3,
  class: "stat-item error"
}, Ay = { class: "stat-count" }, Ny = { class: "stat-card" }, Uy = { class: "stat-items" }, zy = { class: "stat-item success" }, Fy = { class: "stat-count" }, By = {
  key: 0,
  class: "stat-item info"
}, Vy = { class: "stat-count" }, Wy = {
  key: 1,
  class: "stat-item warning"
}, Gy = { class: "stat-count" }, jy = {
  key: 2,
  class: "stat-item warning"
}, Hy = { class: "stat-count" }, Ky = {
  key: 3,
  class: "stat-item error"
}, qy = { class: "stat-count" }, Yy = {
  key: 0,
  class: "status-message warning"
}, Jy = { class: "status-text" }, Xy = {
  key: 1,
  class: "status-message info"
}, Qy = { class: "status-text" }, Zy = {
  key: 2,
  class: "status-message info"
}, e1 = { class: "status-text" }, t1 = {
  key: 3,
  class: "status-message warning"
}, s1 = { class: "status-text" }, o1 = {
  key: 4,
  class: "status-message success"
}, n1 = {
  key: 5,
  class: "category-mismatch-section"
}, a1 = { class: "mismatch-list" }, l1 = { class: "mismatch-path" }, i1 = { class: "mismatch-target" }, r1 = {
  key: 3,
  class: "step-content"
}, c1 = { class: "review-summary" }, d1 = { class: "review-stats" }, u1 = { class: "review-stat" }, f1 = { class: "stat-value" }, m1 = { class: "review-stat" }, v1 = { class: "stat-value" }, p1 = { class: "review-stat" }, g1 = { class: "stat-value" }, h1 = { class: "review-stat" }, y1 = { class: "stat-value" }, w1 = {
  key: 0,
  class: "review-section"
}, _1 = { class: "section-title" }, b1 = { class: "review-items" }, k1 = { class: "item-name" }, $1 = { class: "item-choice" }, C1 = {
  key: 0,
  class: "choice-badge install"
}, x1 = {
  key: 1,
  class: "choice-badge skip"
}, S1 = {
  key: 1,
  class: "review-section"
}, I1 = { class: "section-title" }, E1 = { class: "review-items" }, T1 = { class: "item-name" }, P1 = { class: "item-choice" }, R1 = {
  key: 0,
  class: "choice-badge install"
}, M1 = {
  key: 1,
  class: "choice-badge optional"
}, D1 = {
  key: 2,
  class: "choice-badge skip"
}, L1 = {
  key: 1,
  class: "choice-badge pending"
}, O1 = {
  key: 2,
  class: "review-section"
}, A1 = { class: "section-title" }, N1 = { class: "review-items download-details" }, U1 = { class: "download-info" }, z1 = { class: "item-name" }, F1 = { class: "download-meta" }, B1 = { class: "download-path" }, V1 = ["title"], W1 = {
  key: 3,
  class: "review-section"
}, G1 = { class: "section-title" }, j1 = { class: "review-items" }, H1 = { class: "item-name" }, K1 = { class: "item-choice" }, q1 = {
  key: 0,
  class: "choice-badge install"
}, Y1 = {
  key: 1,
  class: "choice-badge download"
}, J1 = {
  key: 2,
  class: "choice-badge optional"
}, X1 = {
  key: 3,
  class: "choice-badge skip"
}, Q1 = {
  key: 4,
  class: "choice-badge skip"
}, Z1 = {
  key: 1,
  class: "choice-badge download"
}, e0 = {
  key: 2,
  class: "choice-badge pending"
}, t0 = {
  key: 4,
  class: "no-choices"
}, s0 = /* @__PURE__ */ he({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: d, progress: u, resetProgress: m } = _r(), { loadPendingDownloads: v } = ko(), { openFileLocation: g } = at(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), L = k(/* @__PURE__ */ new Map()), I = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Set()), W = N(() => {
      const B = [
        { id: "analysis", label: "Analysis" }
      ];
      return (F.value || R.value) && B.push({ id: "nodes", label: "Nodes" }), T.value && B.push({ id: "models", label: "Models" }), B.push({ id: "review", label: "Review" }), $.value === "applying" && B.push({ id: "applying", label: "Applying" }), B;
    }), V = N(() => w.value ? w.value.stats.needs_user_input : !1), F = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), T = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = N(() => w.value ? w.value.stats.download_intents > 0 : !1), R = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ee = N(() => w.value ? w.value.nodes.resolved.length : 0), Y = N(() => w.value ? w.value.models.resolved.filter((B) => B.has_category_mismatch) : []), G = N(() => Y.value.length > 0), ae = N(() => F.value || R.value ? "nodes" : T.value ? "models" : "review"), te = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((fe) => !fe.is_installed), z = /* @__PURE__ */ new Set();
      return B.filter((fe) => z.has(fe.package.package_id) ? !1 : (z.add(fe.package.package_id), !0));
    }), A = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((fe) => !fe.is_installed), z = /* @__PURE__ */ new Map();
      for (const fe of B) {
        const Ve = z.get(fe.package.package_id);
        Ve ? Ve.node_types_count++ : z.set(fe.package.package_id, {
          package_id: fe.package.package_id,
          title: fe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(z.values());
    }), H = N(() => te.value.filter((B) => !x.value.has(B.package.package_id))), O = N(() => w.value ? w.value.models.resolved.filter(
      (B) => B.match_type === "download_intent" || B.match_type === "property_download_intent"
    ).map((B) => ({
      filename: B.reference.widget_value,
      reference: B.reference,
      is_download_intent: !0,
      resolved_model: B.model,
      download_source: B.download_source,
      target_path: B.target_path
    })) : []), re = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.unresolved.map((fe) => ({
        node_type: fe.reference.node_type,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.nodes.ambiguous.map((fe) => ({
        node_type: fe.reference.node_type,
        has_multiple_options: !0,
        options: fe.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...B, ...z];
    }), me = N(() => {
      if (!w.value) return [];
      const B = w.value.models.unresolved.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), z = w.value.models.ambiguous.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        has_multiple_options: !0,
        options: fe.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...B, ...z];
    }), Pe = N(() => {
      const B = me.value, z = O.value.map((fe) => ({
        filename: fe.filename,
        reference: fe.reference,
        is_download_intent: !0,
        resolved_model: fe.resolved_model,
        download_source: fe.download_source,
        target_path: fe.target_path,
        options: void 0
      }));
      return [...B, ...z];
    }), Ue = N(() => O.value.filter((B) => {
      const z = I.value.get(B.filename);
      return z ? z.action === "download" : !0;
    }).map((B) => ({
      filename: B.filename,
      url: B.download_source,
      target_path: B.target_path
    })));
    function ze(B, z = 50) {
      return B.length <= z ? B : B.slice(0, z - 3) + "...";
    }
    const Ye = N(() => {
      let B = H.value.length;
      for (const z of L.value.values())
        z.action === "install" && B++;
      for (const z of I.value.values())
        z.action === "select" && B++;
      return B;
    }), Fe = N(() => {
      let B = 0;
      for (const z of I.value.values())
        z.action === "download" && B++;
      for (const z of O.value)
        I.value.get(z.filename) || B++;
      return B;
    }), Z = N(() => {
      let B = 0;
      for (const z of L.value.values())
        z.action === "optional" && B++;
      for (const z of I.value.values())
        z.action === "optional" && B++;
      return B;
    }), se = N(() => {
      let B = x.value.size;
      for (const z of L.value.values())
        z.action === "skip" && B++;
      for (const z of I.value.values())
        z.action === "skip" && B++;
      for (const z of re.value)
        L.value.has(z.node_type) || B++;
      for (const z of me.value)
        I.value.has(z.filename) || B++;
      return B;
    }), X = N(() => {
      const B = {};
      if (B.analysis = { resolved: 1, total: 1 }, F.value) {
        const z = re.value.length, fe = re.value.filter(
          (Ve) => L.value.has(Ve.node_type)
        ).length;
        B.nodes = { resolved: fe, total: z };
      }
      if (T.value) {
        const z = Pe.value.length, fe = Pe.value.filter(
          (Ve) => I.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        B.models = { resolved: fe, total: z };
      }
      if (B.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const z = u.totalFiles || 1, fe = u.completedFiles.length;
        B.applying = { resolved: fe, total: z };
      }
      return B;
    });
    function ie(B) {
      $.value = B;
    }
    function Te() {
      const B = W.value.findIndex((z) => z.id === $.value);
      B > 0 && ($.value = W.value[B - 1].id);
    }
    function Ce() {
      const B = W.value.findIndex((z) => z.id === $.value);
      B < W.value.length - 1 && ($.value = W.value[B + 1].id);
    }
    async function D() {
      p.value = !0, S.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (B) {
        S.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function U() {
      P.value.includes("analysis") || P.value.push("analysis"), F.value || R.value ? $.value = "nodes" : T.value ? $.value = "models" : $.value = "review";
    }
    function ne(B) {
      L.value.set(B, { action: "optional" });
    }
    function ce(B) {
      L.value.set(B, { action: "skip" });
    }
    function ve(B, z) {
      var Ve;
      const fe = re.value.find((Qe) => Qe.node_type === B);
      (Ve = fe == null ? void 0 : fe.options) != null && Ve[z] && L.value.set(B, {
        action: "install",
        package_id: fe.options[z].package_id
      });
    }
    function pe(B, z) {
      L.value.set(B, {
        action: "install",
        package_id: z
      });
    }
    function xe(B) {
      L.value.delete(B);
    }
    function Se(B) {
      x.value.has(B) ? x.value.delete(B) : x.value.add(B);
    }
    function de(B) {
      I.value.set(B, { action: "optional" });
    }
    function ge(B) {
      I.value.set(B, { action: "skip" });
    }
    function Oe(B, z) {
      var Ve;
      const fe = me.value.find((Qe) => Qe.filename === B);
      (Ve = fe == null ? void 0 : fe.options) != null && Ve[z] && I.value.set(B, {
        action: "select",
        selected_model: fe.options[z].model
      });
    }
    function Ie(B, z, fe) {
      I.value.set(B, {
        action: "download",
        url: z,
        target_path: fe
      });
    }
    function oe(B) {
      I.value.delete(B);
    }
    async function q(B) {
      try {
        await g(B);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to open file location";
      }
    }
    async function De() {
      var B;
      _.value = !0, S.value = null, m(), u.phase = "resolving", $.value = "applying";
      try {
        const z = await i(o.workflowName, L.value, I.value, x.value);
        z.models_to_download && z.models_to_download.length > 0 && d(o.workflowName, z.models_to_download);
        const fe = [
          ...z.nodes_to_install || [],
          ...H.value.map((Qe) => Qe.package.package_id)
        ];
        u.nodesToInstall = [...new Set(fe)], u.nodesToInstall.length > 0 && await c(o.workflowName), u.phase = "complete", await v();
        const Ve = u.installError || ((B = u.nodeInstallProgress) == null ? void 0 : B.completedNodes.some((Qe) => !Qe.success));
        !u.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (z) {
        S.value = z instanceof Error ? z.message : "Failed to apply resolution", u.error = S.value, u.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function be() {
      n("refresh"), n("restart"), n("close");
    }
    async function _e() {
      var z;
      const B = ((z = u.nodeInstallProgress) == null ? void 0 : z.completedNodes.filter((fe) => !fe.success).map((fe) => fe.node_id)) || [];
      if (B.length !== 0) {
        u.phase = "installing", u.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: B.length
        }, u.nodesToInstall = B, u.nodesInstalled = [], u.installError = void 0;
        try {
          await c(o.workflowName), u.phase = "complete";
        } catch (fe) {
          u.error = fe instanceof Error ? fe.message : "Retry failed", u.phase = "error";
        }
      }
    }
    return et(D), (B, z) => (a(), M(vt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: z[1] || (z[1] = (fe) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", _y, [...z[2] || (z[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", by, [
          C(Ep, {
            steps: W.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": X.value,
            onStepChange: ie
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", ky, [
            t("div", $y, [
              t("div", Cy, [
                z[3] || (z[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", xy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Sy, [
                t("div", Iy, [
                  z[12] || (z[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Ey, [
                    ee.value > 0 ? (a(), r("div", Ty, [
                      z[4] || (z[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Py, f(ee.value), 1),
                      z[5] || (z[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Ry, [
                      z[6] || (z[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", My, f(w.value.stats.packages_needing_installation), 1),
                      z[7] || (z[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", Dy, [
                      z[8] || (z[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Ly, f(w.value.nodes.ambiguous.length), 1),
                      z[9] || (z[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Oy, [
                      z[10] || (z[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Ay, f(w.value.nodes.unresolved.length), 1),
                      z[11] || (z[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Ny, [
                  z[23] || (z[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Uy, [
                    t("div", zy, [
                      z[13] || (z[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Fy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      z[14] || (z[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", By, [
                      z[15] || (z[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Vy, f(w.value.stats.download_intents), 1),
                      z[16] || (z[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    G.value ? (a(), r("div", Wy, [
                      z[17] || (z[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Gy, f(Y.value.length), 1),
                      z[18] || (z[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", jy, [
                      z[19] || (z[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Hy, f(w.value.models.ambiguous.length), 1),
                      z[20] || (z[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Ky, [
                      z[21] || (z[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", qy, f(w.value.models.unresolved.length), 1),
                      z[22] || (z[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (a(), r("div", Yy, [
                z[24] || (z[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Jy, f(re.value.length + me.value.length) + " items need your input", 1)
              ])) : R.value ? (a(), r("div", Xy, [
                z[25] || (z[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Qy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (a(), r("div", Zy, [
                z[26] || (z[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", e1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : G.value ? (a(), r("div", t1, [
                z[27] || (z[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", s1, f(Y.value.length) + " model" + f(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", o1, [...z[28] || (z[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              G.value ? (a(), r("div", n1, [
                z[31] || (z[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", a1, [
                  (a(!0), r(j, null, we(Y.value, (fe) => {
                    var Ve, Qe;
                    return a(), r("div", {
                      key: fe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", l1, f(fe.actual_category) + "/" + f((Ve = fe.model) == null ? void 0 : Ve.filename), 1),
                      z[30] || (z[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", i1, f((Qe = fe.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      fe.file_path ? (a(), M(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (mt) => q(fe.file_path)
                      }, {
                        default: h(() => [...z[29] || (z[29] = [
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
          $.value === "nodes" ? (a(), M(Yg, {
            key: 1,
            nodes: re.value,
            "node-choices": L.value,
            "auto-resolved-packages": A.value,
            "skipped-packages": x.value,
            onMarkOptional: ne,
            onSkip: ce,
            onOptionSelected: ve,
            onManualEntry: pe,
            onClearChoice: xe,
            onPackageSkip: Se
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), M(Vh, {
            key: 2,
            models: Pe.value,
            "model-choices": I.value,
            onMarkOptional: de,
            onSkip: ge,
            onOptionSelected: Oe,
            onDownloadUrl: Ie,
            onClearChoice: oe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", r1, [
            t("div", c1, [
              z[37] || (z[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", d1, [
                t("div", u1, [
                  t("span", f1, f(Ye.value), 1),
                  z[32] || (z[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", m1, [
                  t("span", v1, f(Fe.value), 1),
                  z[33] || (z[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", p1, [
                  t("span", g1, f(Z.value), 1),
                  z[34] || (z[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", h1, [
                  t("span", y1, f(se.value), 1),
                  z[35] || (z[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (a(), r("div", w1, [
                t("h4", _1, "Node Packages (" + f(A.value.length) + ")", 1),
                t("div", b1, [
                  (a(!0), r(j, null, we(A.value, (fe) => (a(), r("div", {
                    key: fe.package_id,
                    class: "review-item"
                  }, [
                    t("code", k1, f(fe.package_id), 1),
                    t("div", $1, [
                      x.value.has(fe.package_id) ? (a(), r("span", x1, "Skipped")) : (a(), r("span", C1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              re.value.length > 0 ? (a(), r("div", S1, [
                t("h4", I1, "Node Choices (" + f(re.value.length) + ")", 1),
                t("div", E1, [
                  (a(!0), r(j, null, we(re.value, (fe) => {
                    var Ve, Qe, mt, lt;
                    return a(), r("div", {
                      key: fe.node_type,
                      class: "review-item"
                    }, [
                      t("code", T1, f(fe.node_type), 1),
                      t("div", P1, [
                        L.value.has(fe.node_type) ? (a(), r(j, { key: 0 }, [
                          ((Ve = L.value.get(fe.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", R1, f((Qe = L.value.get(fe.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((mt = L.value.get(fe.node_type)) == null ? void 0 : mt.action) === "optional" ? (a(), r("span", M1, " Optional ")) : ((lt = L.value.get(fe.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), r("span", D1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", L1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ue.value.length > 0 ? (a(), r("div", O1, [
                t("h4", A1, "Models to Download (" + f(Ue.value.length) + ")", 1),
                t("div", N1, [
                  (a(!0), r(j, null, we(Ue.value, (fe) => (a(), r("div", {
                    key: fe.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", U1, [
                      t("code", z1, f(fe.filename), 1),
                      t("div", F1, [
                        t("span", B1, "→ " + f(fe.target_path), 1),
                        fe.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: fe.url
                        }, f(ze(fe.url)), 9, V1)) : y("", !0)
                      ])
                    ]),
                    z[36] || (z[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Pe.value.length > 0 ? (a(), r("div", W1, [
                t("h4", G1, "Models (" + f(Pe.value.length) + ")", 1),
                t("div", j1, [
                  (a(!0), r(j, null, we(Pe.value, (fe) => {
                    var Ve, Qe, mt, lt, dt, Rt, zt;
                    return a(), r("div", {
                      key: fe.filename,
                      class: "review-item"
                    }, [
                      t("code", H1, f(fe.filename), 1),
                      t("div", K1, [
                        I.value.has(fe.filename) ? (a(), r(j, { key: 0 }, [
                          ((Ve = I.value.get(fe.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", q1, f((mt = (Qe = I.value.get(fe.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : mt.filename), 1)) : ((lt = I.value.get(fe.filename)) == null ? void 0 : lt.action) === "download" ? (a(), r("span", Y1, " Download ")) : ((dt = I.value.get(fe.filename)) == null ? void 0 : dt.action) === "optional" ? (a(), r("span", J1, " Optional ")) : ((Rt = I.value.get(fe.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), r("span", X1, " Skip ")) : ((zt = I.value.get(fe.filename)) == null ? void 0 : zt.action) === "cancel_download" ? (a(), r("span", Q1, " Cancel Download ")) : y("", !0)
                        ], 64)) : fe.is_download_intent ? (a(), r("span", Z1, " Pending Download ")) : (a(), r("span", e0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length === 0 && re.value.length === 0 && Pe.value.length === 0 ? (a(), r("div", t0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), M(wy, {
            key: 4,
            progress: We(u),
            onRestart: be,
            onRetryFailed: _e
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), M(Re, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Te
        }, {
          default: h(() => [...z[38] || (z[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        z[41] || (z[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || We(u).phase === "complete" || We(u).phase === "error" ? (a(), M(Re, {
          key: 1,
          variant: "secondary",
          onClick: z[0] || (z[0] = (fe) => n("close"))
        }, {
          default: h(() => [
            b(f(We(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), M(Re, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: U
        }, {
          default: h(() => [
            b(f(ae.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), M(Re, {
          key: 3,
          variant: "primary",
          onClick: Ce
        }, {
          default: h(() => [
            b(f(T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), M(Re, {
          key: 4,
          variant: "primary",
          onClick: Ce
        }, {
          default: h(() => [...z[39] || (z[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), M(Re, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: De
        }, {
          default: h(() => [...z[40] || (z[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), o0 = /* @__PURE__ */ ye(s0, [["__scopeId", "data-v-40d8d5a8"]]), n0 = { class: "search-input-wrapper" }, a0 = ["value", "placeholder"], l0 = /* @__PURE__ */ he({
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
    return et(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (u, m) => (a(), r("div", n0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Zt(d, ["escape"])
      }, null, 40, a0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: d,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), i0 = /* @__PURE__ */ ye(l0, [["__scopeId", "data-v-266f857a"]]), r0 = { class: "search-bar" }, c0 = /* @__PURE__ */ he({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", r0, [
      C(i0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ ye(c0, [["__scopeId", "data-v-3d51bbfd"]]), d0 = { class: "section-group" }, u0 = {
  key: 0,
  class: "section-content"
}, f0 = /* @__PURE__ */ he({
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
    return (c, d) => (a(), r("section", d0, [
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
      !e.collapsible || l.value ? (a(), r("div", u0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ ye(f0, [["__scopeId", "data-v-c48e33ed"]]), m0 = { class: "item-header" }, v0 = {
  key: 0,
  class: "item-icon"
}, p0 = { class: "item-info" }, g0 = {
  key: 0,
  class: "item-title"
}, h0 = {
  key: 1,
  class: "item-subtitle"
}, y0 = {
  key: 0,
  class: "item-details"
}, w0 = {
  key: 1,
  class: "item-actions"
}, _0 = /* @__PURE__ */ he({
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
      class: Ee(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", m0, [
        l.$slots.icon ? (a(), r("span", v0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", p0, [
          l.$slots.title ? (a(), r("div", g0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", h0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", y0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", w0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ ye(_0, [["__scopeId", "data-v-cc435e0e"]]), b0 = { class: "loading-state" }, k0 = { class: "loading-message" }, $0 = /* @__PURE__ */ he({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", b0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", k0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ ye($0, [["__scopeId", "data-v-ad8436c9"]]), C0 = { class: "error-state" }, x0 = { class: "error-message" }, S0 = /* @__PURE__ */ he({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", C0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", x0, f(e.message), 1),
      e.retry ? (a(), M(ue, {
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
}), Rs = /* @__PURE__ */ ye(S0, [["__scopeId", "data-v-5397be48"]]), I0 = /* @__PURE__ */ he({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = N(
      () => i.value.filter((A) => A.status === "broken")
    ), S = N(
      () => i.value.filter((A) => A.status === "new")
    ), $ = N(
      () => i.value.filter((A) => A.status === "modified")
    ), P = N(
      () => i.value.filter((A) => A.status === "synced")
    ), L = N(() => {
      if (!u.value.trim()) return i.value;
      const A = u.value.toLowerCase();
      return i.value.filter((H) => H.name.toLowerCase().includes(A));
    }), I = N(
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
    ), F = N(
      () => v.value ? V.value : V.value.slice(0, 5)
    );
    async function T(A = !1) {
      c.value = !0, d.value = null;
      try {
        i.value = await l(A);
      } catch (H) {
        d.value = H instanceof Error ? H.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: T });
    function E(A) {
      p.value = A, g.value = !0;
    }
    function R(A) {
      p.value = A, w.value = !0;
    }
    function ee() {
      n("refresh");
    }
    async function Y() {
      w.value = !1, await T(!0);
    }
    async function G() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae(A) {
      const H = [];
      return A.missing_nodes > 0 && H.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && H.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && H.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && H.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), H.length > 0 ? H.join(", ") : "Has issues";
    }
    function te(A) {
      const H = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state;
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync` : H || "Unknown";
    }
    return et(T), (A, H) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          C($o, {
            modelValue: u.value,
            "onUpdate:modelValue": H[0] || (H[0] = (O) => u.value = O),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), M(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : d.value ? (a(), M(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            I.value.length ? (a(), M(it, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(I.value, (O) => (a(), M(Et, {
                  key: O.name,
                  status: "broken"
                }, {
                  icon: h(() => [...H[7] || (H[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ae(O)), 1)
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (re) => R(O.name)
                    }, {
                      default: h(() => [...H[8] || (H[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => E(O.name)
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
            x.value.length ? (a(), M(it, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(x.value, (O) => (a(), M(Et, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(f(O.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(te(O)), 1)
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => E(O.name)
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
            W.value.length ? (a(), M(it, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(W.value, (O) => (a(), M(Et, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...H[11] || (H[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(te(O)), 1)
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => E(O.name)
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
            V.value.length ? (a(), M(it, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: H[2] || (H[2] = (O) => m.value = O)
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(F.value, (O) => (a(), M(Et, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(f(O.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(te(O)), 1)
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (re) => E(O.name)
                    }, {
                      default: h(() => [...H[13] || (H[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && V.value.length > 5 ? (a(), M(ue, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: H[1] || (H[1] = (O) => v.value = !0),
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
            L.value.length ? y("", !0) : (a(), M(ns, {
              key: 4,
              icon: "📭",
              message: u.value ? `No workflows match '${u.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), M(gp, {
        key: 0,
        "workflow-name": p.value,
        onClose: H[3] || (H[3] = (O) => g.value = !1),
        onResolve: H[4] || (H[4] = (O) => R(p.value)),
        onRefresh: H[5] || (H[5] = (O) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), M(o0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: ee,
        onRefresh: H[6] || (H[6] = (O) => n("refresh")),
        onRestart: G
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), E0 = /* @__PURE__ */ ye(I0, [["__scopeId", "data-v-fa3f076e"]]), T0 = /* @__PURE__ */ he({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ee(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ ye(T0, [["__scopeId", "data-v-ccb7816e"]]), P0 = {
  key: 0,
  class: "model-details"
}, R0 = { class: "detail-section" }, M0 = { class: "detail-row" }, D0 = { class: "detail-value mono" }, L0 = { class: "detail-row" }, O0 = { class: "detail-value mono" }, A0 = { class: "detail-row" }, N0 = { class: "detail-value mono" }, U0 = { class: "detail-row" }, z0 = { class: "detail-value" }, F0 = { class: "detail-row" }, B0 = { class: "detail-value" }, V0 = { class: "detail-row" }, W0 = { class: "detail-value" }, G0 = { class: "detail-section" }, j0 = { class: "section-header" }, H0 = {
  key: 0,
  class: "locations-list"
}, K0 = { class: "location-path mono" }, q0 = {
  key: 0,
  class: "location-modified"
}, Y0 = ["onClick"], J0 = {
  key: 1,
  class: "empty-state"
}, X0 = { class: "detail-section" }, Q0 = { class: "section-header" }, Z0 = {
  key: 0,
  class: "sources-list"
}, ew = { class: "source-type" }, tw = ["href"], sw = ["disabled", "onClick"], ow = {
  key: 1,
  class: "empty-state"
}, nw = { class: "add-source-form" }, aw = ["disabled"], lw = {
  key: 2,
  class: "source-error"
}, iw = {
  key: 3,
  class: "source-success"
}, rw = /* @__PURE__ */ he({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = at(), d = k(null), u = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
    let $ = null;
    function P(T, E = "success", R = 2e3) {
      $ && clearTimeout($), S.value = { message: T, type: E }, $ = setTimeout(() => {
        S.value = null;
      }, R);
    }
    function L(T) {
      if (!T) return "Unknown";
      const E = 1024 * 1024 * 1024, R = 1024 * 1024;
      return T >= E ? `${(T / E).toFixed(1)} GB` : T >= R ? `${(T / R).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function I(T) {
      navigator.clipboard.writeText(T), P("Copied to clipboard!");
    }
    async function x(T) {
      try {
        await c(T), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!v.value.trim() || !d.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(d.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await F();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function V(T) {
      if (d.value) {
        w.value = T, p.value = null, _.value = null;
        try {
          await i(d.value.hash, T), P("Source removed"), await F();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function F() {
      u.value = !0, m.value = null;
      try {
        d.value = await n(o.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        u.value = !1;
      }
    }
    return et(F), (T, E) => {
      var R;
      return a(), r(j, null, [
        C(vt, {
          title: `Model Details: ${((R = d.value) == null ? void 0 : R.filename) || "Loading..."}`,
          size: "lg",
          loading: u.value,
          error: m.value,
          onClose: E[5] || (E[5] = (ee) => T.$emit("close"))
        }, {
          body: h(() => {
            var ee, Y, G, ae;
            return [
              d.value ? (a(), r("div", P0, [
                t("section", R0, [
                  t("div", M0, [
                    E[6] || (E[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", D0, f(d.value.hash || "Not computed"), 1),
                    d.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (te) => I(d.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", L0, [
                    E[7] || (E[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", O0, f(d.value.blake3 || "Not computed"), 1),
                    d.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (te) => I(d.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", A0, [
                    E[8] || (E[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", N0, f(d.value.sha256 || "Not computed"), 1),
                    d.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (te) => I(d.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", U0, [
                    E[9] || (E[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", z0, f(L(d.value.size)), 1)
                  ]),
                  t("div", F0, [
                    E[10] || (E[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", B0, f(d.value.category), 1)
                  ]),
                  t("div", V0, [
                    E[11] || (E[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", W0, f(d.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", G0, [
                  t("h4", j0, "Locations (" + f(((ee = d.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (Y = d.value.locations) != null && Y.length ? (a(), r("div", H0, [
                    (a(!0), r(j, null, we(d.value.locations, (te, A) => (a(), r("div", {
                      key: A,
                      class: "location-item"
                    }, [
                      t("span", K0, f(te.path), 1),
                      te.modified ? (a(), r("span", q0, "Modified: " + f(te.modified), 1)) : y("", !0),
                      te.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (H) => x(te.path)
                      }, " Open File Location ", 8, Y0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", J0, "No locations found"))
                ]),
                t("section", X0, [
                  t("h4", Q0, "Download Sources (" + f(((G = d.value.sources) == null ? void 0 : G.length) || 0) + ")", 1),
                  (ae = d.value.sources) != null && ae.length ? (a(), r("div", Z0, [
                    (a(!0), r(j, null, we(d.value.sources, (te, A) => (a(), r("div", {
                      key: A,
                      class: "source-item"
                    }, [
                      t("span", ew, f(te.type) + ":", 1),
                      t("a", {
                        href: te.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(te.url), 9, tw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === te.url,
                        onClick: (H) => V(te.url)
                      }, f(w.value === te.url ? "..." : "×"), 9, sw)
                    ]))), 128))
                  ])) : (a(), r("div", ow, " No download sources configured ")),
                  t("div", nw, [
                    qe(t("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (te) => v.value = te),
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
                    }, f(g.value ? "Adding..." : "Add Source"), 9, aw)
                  ]),
                  p.value ? (a(), r("p", lw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", iw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (ee) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), M(yt, { to: "body" }, [
          S.value ? (a(), r("div", {
            key: 0,
            class: Ee(["toast", S.value.type])
          }, f(S.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), el = /* @__PURE__ */ ye(rw, [["__scopeId", "data-v-f15cbb56"]]), cw = /* @__PURE__ */ he({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = at(), i = k([]), c = k([]), d = k("production"), u = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = N(
      () => i.value.reduce((F, T) => F + (T.size || 0), 0)
    ), S = N(() => {
      if (!v.value.trim()) return i.value;
      const F = v.value.toLowerCase();
      return i.value.filter((T) => T.filename.toLowerCase().includes(F));
    }), $ = N(() => {
      if (!v.value.trim()) return c.value;
      const F = v.value.toLowerCase();
      return c.value.filter((T) => T.filename.toLowerCase().includes(F));
    }), P = N(() => {
      const F = {};
      for (const E of S.value) {
        const R = E.type || "other";
        F[R] || (F[R] = []), F[R].push(E);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([E], [R]) => {
        const ee = T.indexOf(E), Y = T.indexOf(R);
        return ee >= 0 && Y >= 0 ? ee - Y : ee >= 0 ? -1 : Y >= 0 ? 1 : E.localeCompare(R);
      }).map(([E, R]) => ({ type: E, models: R }));
    });
    function L(F) {
      if (!F) return "Unknown";
      const T = F / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function I(F) {
      w.value = F.hash || F.filename;
    }
    function x(F) {
      o("navigate", "model-index");
    }
    function W(F) {
      alert(`Download functionality not yet implemented for ${F}`);
    }
    async function V() {
      u.value = !0, m.value = null;
      try {
        const F = await n();
        i.value = F, c.value = [];
        const T = await l();
        d.value = T.environment || "production";
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return et(V), (F, T) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (E) => g.value = !0)
          })
        ]),
        search: h(() => [
          C($o, {
            modelValue: v.value,
            "onUpdate:modelValue": T[1] || (T[1] = (E) => v.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), M(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), M(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length ? (a(), M(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(L(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, we(P.value, (E) => (a(), M(it, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(E.models, (R) => (a(), M(Et, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...T[4] || (T[4] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(R.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(L(R.size)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ut, {
                      label: "Path:",
                      value: R.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => I(R)
                    }, {
                      default: h(() => [...T[5] || (T[5] = [
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
            $.value.length ? (a(), M(it, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, we($.value, (E) => (a(), M(Et, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...T[6] || (T[6] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(E.filename), 1)
                  ]),
                  subtitle: h(() => [...T[7] || (T[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var R;
                    return [
                      C(ut, {
                        label: "Required by:",
                        value: ((R = E.workflow_names) == null ? void 0 : R.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    C(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => W(E.filename)
                    }, {
                      default: h(() => [...T[8] || (T[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => x(E.filename)
                    }, {
                      default: h(() => [...T[9] || (T[9] = [
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
            !S.value.length && !$.value.length ? (a(), M(ns, {
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
        onClose: T[2] || (T[2] = (E) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            T[10] || (T[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(d.value) + '"', 1),
            T[11] || (T[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          C(ue, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...T[12] || (T[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), M(el, {
        key: 0,
        identifier: w.value,
        onClose: T[3] || (T[3] = (E) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), dw = /* @__PURE__ */ ye(cw, [["__scopeId", "data-v-cb4f12b3"]]), uw = {
  key: 0,
  class: "indexing-progress"
}, fw = { class: "progress-info" }, mw = { class: "progress-label" }, vw = { class: "progress-count" }, pw = { class: "progress-bar" }, gw = { class: "modal-content" }, hw = { class: "modal-header" }, yw = { class: "modal-body" }, ww = { class: "input-group" }, _w = { class: "current-path" }, bw = { class: "input-group" }, kw = { class: "modal-footer" }, $w = { class: "modal-content" }, Cw = { class: "modal-header" }, xw = { class: "modal-body" }, Sw = { class: "input-group" }, Iw = { class: "input-group" }, Ew = { class: "modal-footer" }, Tw = /* @__PURE__ */ he({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = at(), { addToQueue: c } = ko(), d = s, u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), L = k(!1), I = k(!1), x = k(""), W = k(""), V = k(null), F = N(
      () => u.value.reduce((H, O) => H + (O.size || 0), 0)
    ), T = N(() => {
      if (!w.value.trim()) return u.value;
      const H = w.value.toLowerCase();
      return u.value.filter((O) => {
        const re = O, me = O.sha256 || re.sha256_hash || "";
        return O.filename.toLowerCase().includes(H) || me.toLowerCase().includes(H);
      });
    }), E = N(() => {
      const H = {};
      for (const re of T.value) {
        const me = re.type || "other";
        H[me] || (H[me] = []), H[me].push(re);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(H).sort(([re], [me]) => {
        const Pe = O.indexOf(re), Ue = O.indexOf(me);
        return Pe >= 0 && Ue >= 0 ? Pe - Ue : Pe >= 0 ? -1 : Ue >= 0 ? 1 : re.localeCompare(me);
      }).map(([re, me]) => ({ type: re, models: me }));
    });
    function R(H) {
      if (!H) return "Unknown";
      const O = 1024 * 1024 * 1024, re = 1024 * 1024;
      return H >= O ? `${(H / O).toFixed(1)} GB` : H >= re ? `${(H / re).toFixed(0)} MB` : `${(H / 1024).toFixed(0)} KB`;
    }
    function ee(H) {
      _.value = H.hash || H.filename;
    }
    async function Y() {
      v.value = !0, g.value = null;
      try {
        const H = await n();
        await te(), H.changes > 0 && console.log(`Scan complete: ${H.changes} changes detected`);
      } catch (H) {
        g.value = H instanceof Error ? H.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function G() {
      if (P.value.trim()) {
        L.value = !0, g.value = null;
        try {
          const H = await i(P.value.trim());
          $.value = H.path, S.value = !1, P.value = "", await te(), console.log(`Directory changed: ${H.models_indexed} models indexed`), d("refresh");
        } catch (H) {
          g.value = H instanceof Error ? H.message : "Failed to change directory";
        } finally {
          L.value = !1;
        }
      }
    }
    function ae() {
      if (!x.value.trim() || !W.value.trim()) return;
      const H = W.value.split("/").pop() || "model.safetensors";
      c([{
        workflow: "__manual__",
        filename: H,
        url: x.value.trim(),
        targetPath: W.value.trim()
      }]), x.value = "", W.value = "", I.value = !1;
    }
    async function te() {
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
    return et(() => {
      te(), A();
    }), (H, O) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[2] || (O[2] = (re) => p.value = !0)
          }, {
            actions: h(() => [
              C(ue, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: Y
              }, {
                default: h(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (re) => S.value = !0)
              }, {
                default: h(() => [...O[15] || (O[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (re) => I.value = !0)
              }, {
                default: h(() => [...O[16] || (O[16] = [
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
          V.value ? (a(), r("div", uw, [
            t("div", fw, [
              t("span", mw, f(V.value.message), 1),
              t("span", vw, f(V.value.current) + "/" + f(V.value.total), 1)
            ]),
            t("div", pw, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C($o, {
            modelValue: w.value,
            "onUpdate:modelValue": O[3] || (O[3] = (re) => w.value = re),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || V.value ? (a(), M(Ps, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (a(), M(Rs, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length ? (a(), M(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(u.value.length) + " models • " + f(R(F.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, we(E.value, (re) => (a(), M(it, {
              key: re.type,
              title: re.type.toUpperCase(),
              count: re.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(re.models, (me) => (a(), M(Et, {
                  key: me.sha256 || me.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...O[17] || (O[17] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(me.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(R(me.size)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Hash:",
                      value: me.hash ? me.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Pe) => ee(me)
                    }, {
                      default: h(() => [...O[18] || (O[18] = [
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
            T.value.length ? y("", !0) : (a(), M(ns, {
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
        onClose: O[4] || (O[4] = (re) => p.value = !1)
      }, {
        content: h(() => [...O[19] || (O[19] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), M(el, {
        key: 0,
        identifier: _.value,
        onClose: O[5] || (O[5] = (re) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(yt, { to: "body" }, [
        S.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[9] || (O[9] = rt((re) => S.value = !1, ["self"]))
        }, [
          t("div", gw, [
            t("div", hw, [
              O[20] || (O[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: O[6] || (O[6] = (re) => S.value = !1)
              }, "✕")
            ]),
            t("div", yw, [
              t("div", ww, [
                O[21] || (O[21] = t("label", null, "Current Directory", -1)),
                t("code", _w, f($.value || "Not set"), 1)
              ]),
              t("div", bw, [
                O[22] || (O[22] = t("label", null, "New Directory Path", -1)),
                C(es, {
                  modelValue: P.value,
                  "onUpdate:modelValue": O[7] || (O[7] = (re) => P.value = re),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              O[23] || (O[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", kw, [
              C(Re, {
                variant: "secondary",
                onClick: O[8] || (O[8] = (re) => S.value = !1)
              }, {
                default: h(() => [...O[24] || (O[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Re, {
                variant: "primary",
                disabled: !P.value.trim() || L.value,
                loading: L.value,
                onClick: G
              }, {
                default: h(() => [
                  b(f(L.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), M(yt, { to: "body" }, [
        I.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[14] || (O[14] = rt((re) => I.value = !1, ["self"]))
        }, [
          t("div", $w, [
            t("div", Cw, [
              O[25] || (O[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: O[10] || (O[10] = (re) => I.value = !1)
              }, "✕")
            ]),
            t("div", xw, [
              t("div", Sw, [
                O[26] || (O[26] = t("label", null, "Download URL", -1)),
                C(es, {
                  modelValue: x.value,
                  "onUpdate:modelValue": O[11] || (O[11] = (re) => x.value = re),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Iw, [
                O[27] || (O[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(es, {
                  modelValue: W.value,
                  "onUpdate:modelValue": O[12] || (O[12] = (re) => W.value = re),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              O[28] || (O[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Ew, [
              C(Re, {
                variant: "secondary",
                onClick: O[13] || (O[13] = (re) => I.value = !1)
              }, {
                default: h(() => [...O[29] || (O[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Re, {
                variant: "primary",
                disabled: !x.value.trim() || !W.value.trim(),
                onClick: ae
              }, {
                default: h(() => [...O[30] || (O[30] = [
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
}), Pw = /* @__PURE__ */ ye(Tw, [["__scopeId", "data-v-73b78d84"]]), Rw = { class: "node-details" }, Mw = { class: "status-row" }, Dw = {
  key: 0,
  class: "detail-row"
}, Lw = { class: "value" }, Ow = { class: "detail-row" }, Aw = { class: "value" }, Nw = {
  key: 1,
  class: "detail-row"
}, Uw = { class: "value mono" }, zw = {
  key: 2,
  class: "detail-row"
}, Fw = ["href"], Bw = {
  key: 3,
  class: "detail-row"
}, Vw = { class: "value mono small" }, Ww = { class: "detail-row" }, Gw = {
  key: 0,
  class: "value"
}, jw = {
  key: 1,
  class: "workflow-list"
}, Hw = /* @__PURE__ */ he({
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
    return (d, u) => (a(), M(vt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: u[1] || (u[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", Rw, [
          t("div", Mw, [
            u[2] || (u[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ee(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Dw, [
            u[3] || (u[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Lw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Ow, [
            u[4] || (u[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Aw, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", Nw, [
            u[5] || (u[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Uw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", zw, [
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
            ], 8, Fw)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", Bw, [
            u[8] || (u[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Vw, f(e.node.download_url), 1)
          ])) : y("", !0),
          u[10] || (u[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Ww, [
            u[9] || (u[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Gw, " Not used in any workflows ")) : (a(), r("div", jw, [
              (a(!0), r(j, null, we(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        C(Re, {
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
}), Kw = /* @__PURE__ */ ye(Hw, [["__scopeId", "data-v-b342f626"]]), qw = { class: "dialog-message" }, Yw = {
  key: 0,
  class: "dialog-details"
}, Jw = {
  key: 1,
  class: "dialog-warning"
}, Xw = /* @__PURE__ */ he({
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
    return (s, o) => (a(), M(vt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", qw, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", Yw, [
          (a(!0), r(j, null, we(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Jw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Re, {
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
}), tl = /* @__PURE__ */ ye(Xw, [["__scopeId", "data-v-3670b9f5"]]), Qw = { class: "mismatch-warning" }, Zw = { class: "version-mismatch" }, e_ = { class: "version-actual" }, t_ = { class: "version-expected" }, s_ = { key: 0 }, o_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, n_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, a_ = /* @__PURE__ */ he({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: d } = at(), u = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), S = N(() => {
      if (!g.value.trim()) return u.value.nodes;
      const Y = g.value.toLowerCase();
      return u.value.nodes.filter(
        (G) => {
          var ae, te;
          return G.name.toLowerCase().includes(Y) || ((ae = G.description) == null ? void 0 : ae.toLowerCase().includes(Y)) || ((te = G.repository) == null ? void 0 : te.toLowerCase().includes(Y));
        }
      );
    }), $ = N(
      () => S.value.filter((Y) => Y.installed && Y.tracked)
    ), P = N(
      () => S.value.filter((Y) => !Y.installed && Y.tracked)
    ), L = N(
      () => S.value.filter((Y) => Y.installed && !Y.tracked)
    );
    function I(Y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Y] || Y;
    }
    const x = N(() => o.versionMismatches.length > 0);
    function W(Y) {
      return !Y.used_in_workflows || Y.used_in_workflows.length === 0 ? "Not used in any workflows" : Y.used_in_workflows.length === 1 ? Y.used_in_workflows[0] : `${Y.used_in_workflows.length} workflows`;
    }
    function V(Y) {
      p.value = Y;
    }
    function F() {
      n("open-node-manager");
    }
    function T(Y) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${Y}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const G = await i(Y);
            G.status === "success" ? (n("toast", `✓ Node "${Y}" tracked as development`, "success"), await ee()) : n("toast", `Failed to track node: ${G.message || "Unknown error"}`, "error");
          } catch (G) {
            n("toast", `Error tracking node: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function E(Y) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Y}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const G = await d(Y);
            G.status === "success" ? (n("toast", `✓ Node "${Y}" removed`, "success"), await ee()) : n("toast", `Failed to remove node: ${G.message || "Unknown error"}`, "error");
          } catch (G) {
            n("toast", `Error removing node: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function R(Y) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${Y}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const G = await c(Y);
            G.status === "success" ? (n("toast", `✓ Node "${Y}" installed`, "success"), await ee()) : n("toast", `Failed to install node: ${G.message || "Unknown error"}`, "error");
          } catch (G) {
            n("toast", `Error installing node: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ee() {
      m.value = !0, v.value = null;
      try {
        u.value = await l();
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(ee), (Y, G) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (ae) => w.value = !0)
          }, {
            actions: h(() => [
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: F
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
            "onUpdate:modelValue": G[1] || (G[1] = (ae) => g.value = ae),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), M(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.total_count ? (a(), M(an, {
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
            x.value ? (a(), M(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Qw, [
                  G[8] || (G[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(j, null, we(e.versionMismatches, (ae) => (a(), M(Et, {
                  key: ae.name,
                  status: "warning"
                }, {
                  icon: h(() => [...G[9] || (G[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", Zw, [
                      t("span", e_, f(ae.actual), 1),
                      G[10] || (G[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", t_, f(ae.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "warning",
                      size: "sm",
                      onClick: G[2] || (G[2] = (te) => n("repair-environment"))
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
            L.value.length ? (a(), M(it, {
              key: 2,
              title: "UNTRACKED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(L.value, (ae) => (a(), M(Et, {
                  key: ae.name,
                  status: "warning"
                }, {
                  icon: h(() => [...G[12] || (G[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(ae.name), 1)
                  ]),
                  subtitle: h(() => [...G[13] || (G[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: W(ae)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (te) => V(ae)
                    }, {
                      default: h(() => [...G[14] || (G[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => T(ae.name)
                    }, {
                      default: h(() => [...G[15] || (G[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ue, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (te) => E(ae.name)
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
            $.value.length ? (a(), M(it, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, we($.value, (ae) => (a(), M(Et, {
                  key: ae.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(ae.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    ae.version ? (a(), r("span", s_, f(ae.source === "development" ? "" : "v") + f(ae.version), 1)) : (a(), r("span", o_, "version unknown")),
                    t("span", n_, " • " + f(I(ae.source)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: W(ae)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (te) => V(ae)
                    }, {
                      default: h(() => [...G[17] || (G[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: F
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
            P.value.length ? (a(), M(it, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(P.value, (ae) => (a(), M(Et, {
                  key: ae.name,
                  status: "missing"
                }, {
                  icon: h(() => [...G[19] || (G[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(ae.name), 1)
                  ]),
                  subtitle: h(() => [...G[20] || (G[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    C(ut, {
                      label: "Required by:",
                      value: W(ae)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ue, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (te) => V(ae)
                    }, {
                      default: h(() => [...G[21] || (G[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ue, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => R(ae.name)
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
            !$.value.length && !P.value.length && !L.value.length ? (a(), M(ns, {
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
        onClose: G[4] || (G[4] = (ae) => w.value = !1)
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
          C(ue, {
            variant: "primary",
            onClick: G[3] || (G[3] = (ae) => w.value = !1)
          }, {
            default: h(() => [...G[24] || (G[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(Kw, {
        key: 0,
        node: p.value,
        onClose: G[5] || (G[5] = (ae) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), M(tl, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: G[6] || (G[6] = (ae) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), l_ = /* @__PURE__ */ ye(a_, [["__scopeId", "data-v-1555a802"]]);
function kr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const i_ = { class: "remote-url-display" }, r_ = ["title"], c_ = ["title"], d_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, u_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, f_ = /* @__PURE__ */ he({
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
    return (i, c) => (a(), r("div", i_, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, r_),
      t("button", {
        class: Ee(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", u_, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", d_, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, c_)
    ]));
  }
}), m_ = /* @__PURE__ */ ye(f_, [["__scopeId", "data-v-7768a58d"]]), v_ = { class: "remote-title" }, p_ = {
  key: 0,
  class: "default-badge"
}, g_ = {
  key: 1,
  class: "sync-badge"
}, h_ = {
  key: 0,
  class: "ahead"
}, y_ = {
  key: 1,
  class: "behind"
}, w_ = {
  key: 1,
  class: "synced"
}, __ = ["href"], b_ = {
  key: 1,
  class: "remote-url-text"
}, k_ = /* @__PURE__ */ he({
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
    return (m, v) => (a(), M(Et, {
      status: n.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", v_, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", p_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", g_, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", h_, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", y_, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", w_, "✓ synced"))
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
          onClick: v[0] || (v[0] = rt(() => {
          }, ["stop"]))
        }, f(u.value), 9, __)) : (a(), r("span", b_, f(u.value), 1))
      ]),
      actions: h(() => [
        C(ue, {
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
        C(ue, {
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
        C(ue, {
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
        C(ue, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), M(ue, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(ut, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              C(m_, {
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
}), $_ = /* @__PURE__ */ ye(k_, [["__scopeId", "data-v-8310f3a8"]]), C_ = ["for"], x_ = {
  key: 0,
  class: "base-form-field-required"
}, S_ = { class: "base-form-field-input" }, I_ = {
  key: 1,
  class: "base-form-field-error"
}, E_ = {
  key: 2,
  class: "base-form-field-hint"
}, T_ = /* @__PURE__ */ he({
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
      class: Ee(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), r("span", x_, "*")) : y("", !0)
      ], 8, C_)) : y("", !0),
      t("div", S_, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", I_, f(e.error), 1)) : e.hint ? (a(), r("span", E_, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ua = /* @__PURE__ */ ye(T_, [["__scopeId", "data-v-9a1cf296"]]), P_ = { class: "remote-form" }, R_ = { class: "form-header" }, M_ = { class: "form-body" }, D_ = {
  key: 0,
  class: "form-error"
}, L_ = { class: "form-actions" }, O_ = /* @__PURE__ */ he({
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
    return (m, v) => (a(), r("div", P_, [
      t("div", R_, [
        C(At, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", M_, [
        C(ua, {
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
        C(ua, {
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
        C(ua, { label: "Push URL (optional)" }, {
          default: h(() => [
            C(es, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", D_, f(c.value), 1)) : y("", !0)
      ]),
      t("div", L_, [
        C(ue, {
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
        C(ue, {
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
}), A_ = /* @__PURE__ */ ye(O_, [["__scopeId", "data-v-56021b18"]]), N_ = { class: "conflict-summary-box" }, U_ = { class: "summary-header" }, z_ = { class: "summary-text" }, F_ = { key: 0 }, B_ = {
  key: 1,
  class: "all-resolved"
}, V_ = { class: "summary-progress" }, W_ = { class: "progress-bar" }, G_ = { class: "progress-text" }, j_ = /* @__PURE__ */ he({
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
    return (n, l) => (a(), r("div", N_, [
      t("div", U_, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", z_, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", F_, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", B_, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", V_, [
        t("div", W_, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", G_, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), H_ = /* @__PURE__ */ ye(j_, [["__scopeId", "data-v-4e9e6cc9"]]), K_ = { class: "modal-header" }, q_ = { class: "modal-title" }, Y_ = { class: "modal-body" }, J_ = {
  key: 0,
  class: "error-box"
}, X_ = {
  key: 0,
  class: "error-hint"
}, Q_ = {
  key: 1,
  class: "loading-state"
}, Z_ = { class: "commit-summary" }, eb = {
  key: 0,
  class: "changes-section"
}, tb = {
  key: 0,
  class: "change-group",
  open: ""
}, sb = { class: "change-count" }, ob = { class: "change-list" }, nb = {
  key: 0,
  class: "conflict-badge"
}, ab = {
  key: 1,
  class: "change-group"
}, lb = { class: "change-count" }, ib = { class: "change-list" }, rb = {
  key: 2,
  class: "change-group"
}, cb = { class: "change-count" }, db = { class: "change-list" }, ub = {
  key: 2,
  class: "strategy-section"
}, fb = { class: "radio-group" }, mb = { class: "radio-option" }, vb = { class: "radio-option" }, pb = { class: "radio-option" }, gb = {
  key: 3,
  class: "up-to-date"
}, hb = { class: "modal-actions" }, Yl = "comfygit.pullModelStrategy", yb = /* @__PURE__ */ he({
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
    const o = e, n = s, l = k(localStorage.getItem(Yl) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(Yl, $);
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
    }), m = N(() => o.preview && kr(o.preview) ? o.preview : null), v = N(() => {
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
      return m.value.workflow_conflicts.some((L) => L.name === P);
    }
    function S($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var L, I;
      return a(), M(yt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (x) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", K_, [
              t("h3", q_, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (x) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Y_, [
              e.error ? (a(), r("div", J_, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", X_, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", Q_, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (L = e.preview) != null && L.has_uncommitted_changes ? (a(), r(j, { key: 2 }, [
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
                t("div", Z_, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                u.value ? (a(), r("div", eb, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", tb, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", sb, f(c.value) + " changes", 1)
                    ]),
                    t("div", ob, [
                      (a(!0), r(j, null, we(e.preview.changes.workflows.added, (x) => (a(), r("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128)),
                      (a(!0), r(j, null, we(e.preview.changes.workflows.modified, (x) => (a(), r("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(x) + " ", 1),
                        _(x) ? (a(), r("span", nb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(j, null, we(e.preview.changes.workflows.deleted, (x) => (a(), r("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  d.value > 0 ? (a(), r("details", ab, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", lb, f(d.value) + " to install", 1)
                    ]),
                    t("div", ib, [
                      (a(!0), r(j, null, we(e.preview.changes.nodes.to_install, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", rb, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", cb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", db, [
                      (a(!0), r(j, null, we(e.preview.changes.models.referenced, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item"
                      }, f(x), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), M(H_, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", ub, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", fb, [
                    t("label", mb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (x) => l.value = x),
                        value: "all"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", vb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (x) => l.value = x),
                        value: "required"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", pb, [
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
                e.preview.commits_behind === 0 ? (a(), r("div", gb, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", hb, [
              C(ue, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (x) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(j, { key: 0 }, [
                C(ue, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (x) => S(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(ue, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (x) => S(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), M(ue, {
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
                m.value && !w.value ? (a(), M(ue, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (x) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(ue, {
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
}), wb = /* @__PURE__ */ ye(yb, [["__scopeId", "data-v-300c7b2f"]]), _b = { class: "modal-header" }, bb = { class: "modal-title" }, kb = { class: "modal-body" }, $b = {
  key: 0,
  class: "loading-state"
}, Cb = {
  key: 1,
  class: "warning-box"
}, xb = {
  key: 0,
  class: "commits-section"
}, Sb = { class: "commit-list" }, Ib = { class: "commit-hash" }, Eb = { class: "commit-message" }, Tb = { class: "commit-date" }, Pb = { class: "force-option" }, Rb = { class: "checkbox-option" }, Mb = { class: "commit-summary" }, Db = { key: 0 }, Lb = { key: 1 }, Ob = {
  key: 0,
  class: "info-box"
}, Ab = {
  key: 1,
  class: "commits-section"
}, Nb = { class: "commit-list" }, Ub = { class: "commit-hash" }, zb = { class: "commit-message" }, Fb = { class: "commit-date" }, Bb = {
  key: 2,
  class: "up-to-date"
}, Vb = { class: "modal-actions" }, Wb = /* @__PURE__ */ he({
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
      return a(), M(yt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", _b, [
              t("h3", bb, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", kb, [
              e.loading ? (a(), r("div", $b, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (d = e.preview) != null && d.has_uncommitted_changes ? (a(), r("div", Cb, [...c[9] || (c[9] = [
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
                e.preview.commits_ahead > 0 ? (a(), r("div", xb, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Sb, [
                    (a(!0), r(j, null, we(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Ib, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Eb, f(v.message), 1),
                      t("span", Tb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Pb, [
                  t("label", Rb, [
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
                t("div", Mb, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Db, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", Lb, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", Ob, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", Ab, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Nb, [
                    (a(!0), r(j, null, we(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Ub, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", zb, f(v.message), 1),
                      t("span", Fb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", Bb, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Vb, [
              C(ue, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(j, { key: 0 }, [
                C(ue, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(ue, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(ue, {
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
}), Gb = /* @__PURE__ */ ye(Wb, [["__scopeId", "data-v-ae86b6a7"]]), jb = { class: "resolution-choice-group" }, Hb = ["disabled"], Kb = ["disabled"], qb = /* @__PURE__ */ he({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", jb, [
      t("button", {
        class: Ee(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Hb),
      t("button", {
        class: Ee(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Kb)
    ]));
  }
}), Yb = /* @__PURE__ */ ye(qb, [["__scopeId", "data-v-985715ed"]]), Jb = { class: "conflict-header" }, Xb = { class: "conflict-info" }, Qb = { class: "workflow-name" }, Zb = { class: "conflict-description" }, ek = {
  key: 0,
  class: "resolved-badge"
}, tk = { class: "resolved-text" }, sk = { class: "conflict-hashes" }, ok = { class: "hash-item" }, nk = { class: "hash-item" }, ak = { class: "conflict-actions" }, lk = /* @__PURE__ */ he({
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
        class: Ee(["conflict-item", { resolved: i.value }])
      }, [
        t("div", Jb, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Xb, [
            t("code", Qb, f(e.conflict.name) + ".json", 1),
            t("div", Zb, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", ek, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", tk, f(d.value), 1)
          ])) : y("", !0)
        ]),
        t("div", sk, [
          t("span", ok, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", nk, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", ak, [
          C(Yb, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), ik = /* @__PURE__ */ ye(lk, [["__scopeId", "data-v-506d3bbf"]]), rk = { class: "resolution-content" }, ck = {
  key: 0,
  class: "error-box"
}, dk = { class: "resolution-header" }, uk = { class: "header-stats" }, fk = { class: "stat" }, mk = { class: "stat-value" }, vk = { class: "stat resolved" }, pk = { class: "stat-value" }, gk = {
  key: 0,
  class: "stat pending"
}, hk = { class: "stat-value" }, yk = { class: "conflicts-list" }, wk = {
  key: 1,
  class: "all-resolved-message"
}, _k = /* @__PURE__ */ he({
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
    return (w, p) => (a(), M(vt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", rk, [
          e.error ? (a(), r("div", ck, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", dk, [
            t("div", uk, [
              t("div", fk, [
                t("span", mk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", vk, [
                t("span", pk, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", gk, [
                t("span", hk, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", yk, [
            (a(!0), r(j, null, we(e.workflowConflicts, (_) => (a(), M(ik, {
              key: _.name,
              conflict: _,
              resolution: u(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", wk, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(d.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Re, {
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
}), bk = /* @__PURE__ */ ye(_k, [["__scopeId", "data-v-c58d150d"]]), kk = { class: "node-conflict-item" }, $k = { class: "node-header" }, Ck = { class: "node-name" }, xk = { class: "node-id" }, Sk = { class: "version-comparison" }, Ik = { class: "version yours" }, Ek = { class: "version theirs" }, Tk = { class: "chosen-version" }, Pk = { class: "chosen" }, Rk = { class: "chosen-reason" }, Mk = { class: "affected-workflows" }, Dk = { class: "wf-source" }, Lk = { class: "wf-version" }, Ok = /* @__PURE__ */ he({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", kk, [
      t("div", $k, [
        t("code", Ck, f(e.conflict.node_name), 1),
        t("span", xk, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", Sk, [
        t("div", Ik, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", Ek, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", Tk, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", Pk, f(e.conflict.chosen_version), 1),
        t("span", Rk, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", Mk, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(j, null, we(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", Dk, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", Lk, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ak = /* @__PURE__ */ ye(Ok, [["__scopeId", "data-v-8b626725"]]), Nk = { class: "validation-content" }, Uk = {
  key: 0,
  class: "compatible-message"
}, zk = { class: "conflicts-list" }, Fk = {
  key: 2,
  class: "warnings-section"
}, Bk = /* @__PURE__ */ he({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), M(vt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (d) => n("cancel"))
    }, {
      body: h(() => [
        t("div", Nk, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", Uk, [
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
            t("div", zk, [
              (a(!0), r(j, null, we(e.validation.node_conflicts, (d) => (a(), M(Ak, {
                key: d.node_id,
                conflict: d
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", Fk, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(j, null, we(e.validation.warnings, (d, u) => (a(), r("li", { key: u }, f(d), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (d) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Re, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (d) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
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
}), Vk = /* @__PURE__ */ ye(Bk, [["__scopeId", "data-v-fefd26ed"]]), Wk = { key: 0 }, Gk = /* @__PURE__ */ he({
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
    } = at(), _ = k([]), S = k(null), $ = k({}), P = k(!1), L = k(null), I = k(""), x = k(!1), W = k(null), V = k(!1), F = k("add"), T = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = N(() => {
      if (!I.value.trim()) return _.value;
      const _e = I.value.toLowerCase();
      return _.value.filter(
        (B) => B.name.toLowerCase().includes(_e) || B.fetch_url.toLowerCase().includes(_e) || B.push_url.toLowerCase().includes(_e)
      );
    });
    async function R() {
      P.value = !0, L.value = null;
      try {
        const _e = await n();
        _.value = _e.remotes, S.value = _e.current_branch_tracking || null, await Promise.all(
          _e.remotes.map(async (B) => {
            const z = await u(B.name);
            z && ($.value[B.name] = z);
          })
        );
      } catch (_e) {
        L.value = _e instanceof Error ? _e.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function ee() {
      F.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function Y(_e) {
      const B = _.value.find((z) => z.name === _e);
      B && (F.value = "edit", T.value = {
        name: B.name,
        fetchUrl: B.fetch_url,
        pushUrl: B.push_url
      }, V.value = !0);
    }
    async function G(_e) {
      try {
        F.value === "add" ? await l(_e.name, _e.fetchUrl) : await c(_e.name, _e.fetchUrl, _e.pushUrl || void 0), V.value = !1, await R();
      } catch (B) {
        L.value = B instanceof Error ? B.message : "Operation failed";
      }
    }
    function ae() {
      V.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function te(_e) {
      W.value = _e;
      try {
        await d(_e);
        const B = await u(_e);
        B && ($.value[_e] = B), o("toast", `✓ Fetched from ${_e}`, "success");
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Fetch failed", "error");
      } finally {
        W.value = null;
      }
    }
    async function A(_e) {
      if (confirm(`Remove remote "${_e}"?`))
        try {
          await i(_e), await R();
        } catch (B) {
          L.value = B instanceof Error ? B.message : "Failed to remove remote";
        }
    }
    function H() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const O = k("idle"), re = N(() => O.value === "pull_preview"), me = N(
      () => O.value === "resolving" || O.value === "validating"
    ), Pe = N(
      () => O.value === "validation_review" || O.value === "executing"
    ), Ue = k(!1), ze = k(null), Ye = k(!1), Fe = k(null), Z = k(!1), se = k(null), X = k(null), ie = k(/* @__PURE__ */ new Map()), Te = k(null), Ce = k(null), D = N(() => se.value && kr(se.value) ? se.value : null);
    async function U(_e) {
      Fe.value = _e, O.value = "pull_preview", Z.value = !0, se.value = null, X.value = null;
      try {
        se.value = await m(_e);
      } catch (B) {
        X.value = B instanceof Error ? B.message : "Failed to load pull preview";
      } finally {
        Z.value = !1;
      }
    }
    function ne() {
      O.value = "idle", se.value = null, X.value = null, Fe.value = null;
    }
    async function ce(_e) {
      if (!Fe.value) return;
      O.value = "executing", X.value = null;
      const B = Fe.value;
      try {
        const z = await v(B, _e);
        if (z.rolled_back) {
          X.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, O.value = "pull_preview";
          return;
        }
        Ie(), O.value = "idle", o("toast", `✓ Pulled from ${B}`, "success"), await R();
      } catch (z) {
        X.value = z instanceof Error ? z.message : "Pull failed", O.value = "pull_preview";
      }
    }
    function ve() {
      D.value && (O.value = "resolving", Ce.value = null);
    }
    function pe(_e, B) {
      ie.value.set(_e, { name: _e, resolution: B });
    }
    function xe() {
      O.value = "pull_preview";
    }
    async function Se() {
      O.value = "validating", Ce.value = null;
      try {
        const _e = Array.from(ie.value.values());
        Te.value = await p(Fe.value, _e), O.value = "validation_review";
      } catch (_e) {
        Ce.value = _e instanceof Error ? _e.message : "Validation failed", O.value = "resolving";
      }
    }
    async function de() {
      O.value = "executing";
      const _e = Fe.value;
      try {
        const B = Array.from(ie.value.values()), z = await v(_e, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: B
        });
        if (z.rolled_back) {
          X.value = `Pull failed and was rolled back: ${z.error || "Unknown error"}`, O.value = "pull_preview";
          return;
        }
        Ie(), O.value = "idle", o("toast", `✓ Pulled from ${_e}`, "success"), await R();
      } catch (B) {
        X.value = B instanceof Error ? B.message : "Pull failed", O.value = "validation_review";
      }
    }
    function ge() {
      O.value = "resolving";
    }
    function Oe() {
      Ie(), O.value = "idle";
    }
    function Ie() {
      ie.value.clear(), Te.value = null, Ce.value = null, X.value = null, se.value = null, Fe.value = null;
    }
    async function oe(_e) {
      Fe.value = _e, Ue.value = !0, Z.value = !0, ze.value = null;
      try {
        ze.value = await g(_e);
      } catch (B) {
        L.value = B instanceof Error ? B.message : "Failed to load push preview";
      } finally {
        Z.value = !1;
      }
    }
    function q() {
      Ue.value = !1, ze.value = null, Fe.value = null;
    }
    async function De(_e) {
      if (!Fe.value) return;
      Ye.value = !0;
      const B = Fe.value;
      try {
        await w(B, _e), q(), o("toast", `✓ Pushed to ${B}`, "success"), await R();
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Push failed", "error");
      } finally {
        Ye.value = !1;
      }
    }
    function be() {
      const _e = Fe.value;
      q(), _e && U(_e);
    }
    return et(R), (_e, B) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (z) => x.value = !0)
          }, {
            actions: h(() => [
              V.value ? y("", !0) : (a(), M(ue, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ee
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
          V.value ? y("", !0) : (a(), M($o, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": B[1] || (B[1] = (z) => I.value = z),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), M(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : L.value ? (a(), M(Rs, {
            key: 1,
            message: L.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            V.value ? (a(), M(A_, {
              key: 0,
              mode: F.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: G,
              onCancel: ae
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !V.value ? (a(), M(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), r("span", Wk, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !V.value ? (a(), M(it, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(E.value, (z) => (a(), M($_, {
                  key: z.name,
                  remote: z,
                  "sync-status": $.value[z.name],
                  "fetching-remote": W.value,
                  onFetch: te,
                  onEdit: Y,
                  onRemove: A,
                  onPull: U,
                  onPush: oe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !E.value.length && !V.value ? (a(), M(ns, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                C(ue, {
                  variant: "primary",
                  onClick: ee
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
        onClose: B[2] || (B[2] = (z) => x.value = !1)
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
          C(ue, {
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
      C(wb, {
        show: re.value,
        "remote-name": Fe.value || "",
        preview: se.value,
        loading: Z.value,
        pulling: O.value === "executing",
        error: X.value,
        "conflict-resolutions": ie.value,
        onClose: ne,
        onPull: ce,
        onOpenConflictResolution: ve
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(Gb, {
        show: Ue.value,
        "remote-name": Fe.value || "",
        preview: ze.value,
        loading: Z.value,
        pushing: Ye.value,
        onClose: q,
        onPush: De,
        onPullFirst: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      me.value && D.value ? (a(), M(bk, {
        key: 0,
        "workflow-conflicts": D.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: O.value === "validating",
        error: Ce.value,
        onClose: xe,
        onResolve: pe,
        onApply: Se
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Pe.value && Te.value ? (a(), M(Vk, {
        key: 1,
        validation: Te.value,
        "operation-type": "pull",
        executing: O.value === "executing",
        onProceed: de,
        onGoBack: ge,
        onCancel: Oe
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), jk = /* @__PURE__ */ ye(Gk, [["__scopeId", "data-v-9ae3b76d"]]), Hk = { class: "setting-info" }, Kk = { class: "setting-label" }, qk = {
  key: 0,
  class: "required-marker"
}, Yk = {
  key: 0,
  class: "setting-description"
}, Jk = { class: "setting-control" }, Xk = /* @__PURE__ */ he({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ee(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", Hk, [
        t("div", Kk, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), r("span", qk, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", Yk, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Jk, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), pn = /* @__PURE__ */ ye(Xk, [["__scopeId", "data-v-cb5d236c"]]), Qk = { class: "toggle" }, Zk = ["checked", "disabled"], e2 = /* @__PURE__ */ he({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", Qk, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Zk),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), t2 = /* @__PURE__ */ ye(e2, [["__scopeId", "data-v-71c0f550"]]), s2 = { class: "workspace-settings-content" }, o2 = { class: "settings-section" }, n2 = { class: "path-setting" }, a2 = { class: "path-value" }, l2 = { class: "path-setting" }, i2 = { class: "path-value" }, r2 = { class: "settings-section" }, c2 = { class: "settings-section" }, d2 = { class: "settings-section" }, u2 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = at(), d = k(!1), u = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), S = k(0);
    function $(E) {
      return E.join(" ");
    }
    function P(E) {
      return E.trim() ? E.trim().split(/\s+/) : [];
    }
    const L = N(() => {
      if (!g.value) return !1;
      const E = w.value !== (g.value.civitai_api_key || ""), R = p.value !== $(g.value.comfyui_extra_args || []);
      return E || R;
    });
    async function I() {
      d.value = !0, u.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = $(v.value.comfyui_extra_args || []);
        const E = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = E !== "false", S.value = F();
      } catch (E) {
        u.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function x() {
      var E, R;
      m.value = null;
      try {
        const ee = {};
        w.value !== (((E = g.value) == null ? void 0 : E.civitai_api_key) || "") && (ee.civitai_api_key = w.value || null), p.value !== $(((R = g.value) == null ? void 0 : R.comfyui_extra_args) || []) && (ee.comfyui_extra_args = P(p.value)), await c(ee, n.workspacePath || void 0), await I(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (ee) {
        const Y = ee instanceof Error ? ee.message : "Failed to save settings";
        m.value = { type: "error", message: Y }, l("error", Y);
      }
    }
    function W() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function V(E) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(E)), console.log("[ComfyGit] Auto-refresh setting saved:", E);
    }
    function F() {
      let E = 0;
      for (let R = 0; R < localStorage.length; R++) {
        const ee = localStorage.key(R);
        ee != null && ee.startsWith("comfygit:popup-dismissed:") && E++;
      }
      return E;
    }
    function T() {
      const E = [];
      for (let R = 0; R < localStorage.length; R++) {
        const ee = localStorage.key(R);
        ee != null && ee.startsWith("comfygit:popup-dismissed:") && E.push(ee);
      }
      E.forEach((R) => localStorage.removeItem(R)), S.value = 0, console.log(`[ComfyGit] Reset ${E.length} dismissed popup(s)`);
    }
    return s({
      saveSettings: x,
      resetSettings: W,
      hasChanges: L,
      loadSettings: I
    }), et(I), (E, R) => (a(), r("div", s2, [
      d.value ? (a(), M(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : u.value ? (a(), M(Rs, {
        key: 1,
        message: u.value,
        retry: !0,
        onRetry: I
      }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
        C(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var ee, Y;
            return [
              t("div", o2, [
                t("div", n2, [
                  R[3] || (R[3] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  R[4] || (R[4] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", a2, f(((ee = v.value) == null ? void 0 : ee.workspace_path) || "Loading..."), 1)
                ]),
                t("div", l2, [
                  R[5] || (R[5] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  R[6] || (R[6] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", i2, f(((Y = v.value) == null ? void 0 : Y.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", r2, [
              C(pn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  C(Ln, {
                    modelValue: w.value,
                    "onUpdate:modelValue": R[0] || (R[0] = (ee) => w.value = ee),
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
        C(it, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", c2, [
              C(pn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  C(Ln, {
                    modelValue: p.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (ee) => p.value = ee),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              R[7] || (R[7] = t("div", { class: "setting-hint" }, [
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
        C(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", d2, [
              C(pn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(t2, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      R[2] || (R[2] = (ee) => _.value = ee),
                      V
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(pn, {
                label: "Dismissed Dependency Popups",
                description: "Reset the 'don't show again' state for missing dependency popups when loading workflows."
              }, {
                default: h(() => [
                  C(Re, {
                    variant: "secondary",
                    size: "sm",
                    disabled: S.value === 0,
                    onClick: T
                  }, {
                    default: h(() => [
                      b(f(S.value > 0 ? `Reset (${S.value})` : "None Dismissed"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), M(an, {
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
}), $r = /* @__PURE__ */ ye(u2, [["__scopeId", "data-v-cba07f84"]]), f2 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Tt, null, {
      header: h(() => [
        C(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              C(ue, {
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
              (c = s.value) != null && c.hasChanges ? (a(), M(ue, {
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
        C($r, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), m2 = { class: "base-tabs" }, v2 = ["disabled", "onClick"], p2 = {
  key: 0,
  class: "base-tabs__badge"
}, g2 = /* @__PURE__ */ he({
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
    return (i, c) => (a(), r("div", m2, [
      (a(!0), r(j, null, we(e.tabs, (d) => (a(), r("button", {
        key: d.id,
        class: Ee([
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
        d.badge ? (a(), r("span", p2, f(d.badge), 1)) : y("", !0)
      ], 10, v2))), 128))
    ]));
  }
}), Cr = /* @__PURE__ */ ye(g2, [["__scopeId", "data-v-ad5e6cad"]]), h2 = { class: "log-viewer-wrapper" }, y2 = ["disabled", "title"], w2 = /* @__PURE__ */ he({
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
    et(i), Ct(() => s.logs, i);
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
    return (m, v) => (a(), r("div", h2, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, y2),
        (a(!0), r(j, null, we(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Ee(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), xr = /* @__PURE__ */ ye(w2, [["__scopeId", "data-v-c0cc6d21"]]), _2 = /* @__PURE__ */ he({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = at(), c = k("workspace"), d = k([]), u = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = N(() => c.value === "workspace" ? g.value : w.value);
    async function S() {
      u.value = !0, m.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await n(void 0, 500);
      } catch (L) {
        m.value = L instanceof Error ? L.message : `Failed to load ${c.value} logs`;
      } finally {
        u.value = !1;
      }
    }
    async function $() {
      try {
        const [L, I] = await Promise.all([
          o(),
          l()
        ]);
        L.exists && (g.value = L.path), I.exists && (w.value = I.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (L) {
          console.error("Failed to open log file:", L);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(c, () => {
      S();
    }), et(() => {
      S(), $();
    }), (L, I) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (x) => v.value = !0)
          }, {
            actions: h(() => [
              C(ue, {
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
              C(ue, {
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
          C(Cr, {
            modelValue: c.value,
            "onUpdate:modelValue": I[1] || (I[1] = (x) => c.value = x),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), M(Ps, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), M(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            d.value.length === 0 ? (a(), M(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), M(xr, {
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
        onClose: I[3] || (I[3] = (x) => v.value = !1)
      }, {
        content: h(() => [...I[4] || (I[4] = [
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
          C(ue, {
            variant: "primary",
            onClick: I[2] || (I[2] = (x) => v.value = !1)
          }, {
            default: h(() => [...I[5] || (I[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), b2 = /* @__PURE__ */ he({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(!1), m = k("production"), v = k(null), g = k(!1);
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
    return et(() => {
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
              C(ue, {
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
              C(ue, {
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
          c.value ? (a(), M(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : d.value ? (a(), M(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length === 0 ? (a(), M(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), M(xr, {
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
          C(ue, {
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
}), k2 = { class: "env-title" }, $2 = {
  key: 0,
  class: "current-badge"
}, C2 = {
  key: 0,
  class: "branch-info"
}, x2 = /* @__PURE__ */ he({
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
    return (s, o) => (a(), M(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", k2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", $2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", C2, [
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
          e.lastUsed && e.showLastUsed ? (a(), M(ut, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), S2 = /* @__PURE__ */ ye(x2, [["__scopeId", "data-v-9231917a"]]), I2 = { class: "env-details" }, E2 = { class: "status-row" }, T2 = {
  key: 0,
  class: "detail-row"
}, P2 = { class: "value mono" }, R2 = {
  key: 1,
  class: "detail-row"
}, M2 = { class: "value mono small" }, D2 = { class: "detail-row" }, L2 = { class: "value" }, O2 = { class: "detail-row" }, A2 = { class: "value" }, N2 = { class: "detail-row" }, U2 = { class: "value" }, z2 = {
  key: 2,
  class: "section-divider"
}, F2 = {
  key: 3,
  class: "detail-row"
}, B2 = { class: "value" }, V2 = {
  key: 4,
  class: "detail-row"
}, W2 = { class: "value" }, G2 = { class: "footer-actions" }, j2 = /* @__PURE__ */ he({
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
    return (l, i) => (a(), M(vt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", I2, [
          t("div", E2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ee(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", T2, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", P2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", R2, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", M2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", D2, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", L2, f(e.environment.workflow_count), 1)
          ]),
          t("div", O2, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", A2, f(e.environment.node_count), 1)
          ]),
          t("div", N2, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", U2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", z2)) : y("", !0),
          e.environment.created_at ? (a(), r("div", F2, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", B2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", V2, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", W2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", G2, [
          e.canDelete ? (a(), M(Re, {
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
          C(Re, {
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
}), H2 = /* @__PURE__ */ ye(j2, [["__scopeId", "data-v-59855453"]]), Sr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ir = "3.12", sl = [
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
], Er = "auto", K2 = { class: "progress-bar" }, q2 = /* @__PURE__ */ he({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", K2, [
      t("div", {
        class: Ee(["progress-fill", e.variant]),
        style: Ht({ width: o.value })
      }, null, 6)
    ]));
  }
}), Xn = /* @__PURE__ */ ye(q2, [["__scopeId", "data-v-1beb0512"]]), Y2 = { class: "task-progress" }, J2 = { class: "progress-info" }, X2 = { class: "progress-percentage" }, Q2 = { class: "progress-message" }, Z2 = {
  key: 0,
  class: "progress-steps"
}, e$ = { class: "step-icon" }, t$ = { class: "step-label" }, s$ = /* @__PURE__ */ he({
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
    return (l, i) => (a(), r("div", Y2, [
      C(Xn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", J2, [
        t("span", X2, f(e.progress) + "%", 1),
        t("span", Q2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", Z2, [
        (a(!0), r(j, null, we(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Ee(["step", o(c.id)])
        }, [
          t("span", e$, f(n(c.id)), 1),
          t("span", t$, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), An = /* @__PURE__ */ ye(s$, [["__scopeId", "data-v-9d1de66c"]]), o$ = {
  key: 0,
  class: "create-env-form"
}, n$ = { class: "form-field" }, a$ = { class: "form-field" }, l$ = ["value"], i$ = { class: "form-field" }, r$ = ["disabled"], c$ = ["value"], d$ = { class: "form-field" }, u$ = ["value"], f$ = { class: "form-field form-field--checkbox" }, m$ = { class: "form-checkbox" }, v$ = {
  key: 1,
  class: "create-env-progress"
}, p$ = { class: "creating-intro" }, g$ = {
  key: 0,
  class: "progress-warning"
}, h$ = {
  key: 1,
  class: "create-error"
}, y$ = { class: "error-message" }, w$ = {
  key: 1,
  class: "footer-status"
}, _$ = 10, b$ = /* @__PURE__ */ he({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = at(), c = k(""), d = k(Ir), u = k("latest"), m = k(Er), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
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
    ], L = k(null);
    function I() {
      p.value || o("close");
    }
    async function x() {
      const E = c.value.trim();
      if (E) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const R = {
            name: E,
            python_version: d.value,
            comfyui_version: u.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ee = await l(R);
          ee.status === "started" ? W() : ee.status === "error" && (_.value = {
            progress: 0,
            message: ee.message || "Failed to start creation",
            error: ee.message
          });
        } catch (R) {
          _.value = {
            progress: 0,
            message: R instanceof Error ? R.message : "Unknown error",
            error: R instanceof Error ? R.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      S || ($ = 0, S = window.setInterval(async () => {
        try {
          const E = await i();
          $ = 0, _.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase,
            error: E.error
          }, E.state === "complete" ? (V(), o("created", E.environment_name || c.value.trim(), v.value)) : E.state === "error" ? (V(), _.value.error = E.error || E.message) : E.state === "idle" && p.value && (V(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= _$ && (V(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      S && (clearInterval(S), S = null);
    }
    function F() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function T() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (E) {
        console.error("Failed to load ComfyUI releases:", E);
      } finally {
        w.value = !1;
      }
    }
    return et(async () => {
      var E;
      await _t(), (E = L.value) == null || E.focus(), T();
    }), oo(() => {
      V();
    }), (E, R) => (a(), M(vt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: I
    }, {
      body: h(() => [
        p.value ? (a(), r("div", v$, [
          t("p", p$, [
            R[11] || (R[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            R[12] || (R[12] = b("... ", -1))
          ]),
          C(An, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", g$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", h$, [
            t("p", y$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", o$, [
          t("div", n$, [
            R[6] || (R[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: L,
              "onUpdate:modelValue": R[0] || (R[0] = (ee) => c.value = ee),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Zt(x, ["enter"])
            }, null, 544), [
              [Ut, c.value]
            ])
          ]),
          t("div", a$, [
            R[7] || (R[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": R[1] || (R[1] = (ee) => d.value = ee),
              class: "form-select"
            }, [
              (a(!0), r(j, null, we(We(Sr), (ee) => (a(), r("option", {
                key: ee,
                value: ee
              }, f(ee), 9, l$))), 128))
            ], 512), [
              [hs, d.value]
            ])
          ]),
          t("div", i$, [
            R[8] || (R[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": R[2] || (R[2] = (ee) => u.value = ee),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(j, null, we(g.value, (ee) => (a(), r("option", {
                key: ee.tag_name,
                value: ee.tag_name
              }, f(ee.name), 9, c$))), 128))
            ], 8, r$), [
              [hs, u.value]
            ])
          ]),
          t("div", d$, [
            R[9] || (R[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": R[3] || (R[3] = (ee) => m.value = ee),
              class: "form-select"
            }, [
              (a(!0), r(j, null, we(We(sl), (ee) => (a(), r("option", {
                key: ee,
                value: ee
              }, f(ee) + f(ee === "auto" ? " (detect GPU)" : ""), 9, u$))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", f$, [
            t("label", m$, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": R[4] || (R[4] = (ee) => v.value = ee)
              }, null, 512), [
                [en, v.value]
              ]),
              R[10] || (R[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(j, { key: 1 }, [
          _.value.error ? (a(), M(Re, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: h(() => [...R[15] || (R[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", w$, " Creating environment... "))
        ], 64)) : (a(), r(j, { key: 0 }, [
          C(Re, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: x
          }, {
            default: h(() => [...R[13] || (R[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Re, {
            variant: "secondary",
            onClick: R[5] || (R[5] = (ee) => o("close"))
          }, {
            default: h(() => [...R[14] || (R[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), k$ = /* @__PURE__ */ ye(b$, [["__scopeId", "data-v-f37eaa42"]]), $$ = /* @__PURE__ */ he({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!1), v = k(!1), g = k(null), w = N(() => {
      if (!u.value.trim()) return i.value;
      const L = u.value.toLowerCase();
      return i.value.filter(
        (I) => {
          var x;
          return I.name.toLowerCase().includes(L) || ((x = I.current_branch) == null ? void 0 : x.toLowerCase().includes(L));
        }
      );
    });
    function p(L, I) {
      v.value = !1, n("created", L, I);
    }
    function _() {
      v.value = !0;
    }
    function S(L) {
      g.value = L;
    }
    function $(L) {
      g.value = null, n("delete", L);
    }
    async function P() {
      c.value = !0, d.value = null;
      try {
        i.value = await l();
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return et(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (L, I) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (x) => m.value = !0)
          }, {
            actions: h(() => [
              C(ue, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(ue, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: h(() => [...I[7] || (I[7] = [
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
            "onUpdate:modelValue": I[1] || (I[1] = (x) => u.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), M(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), M(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            w.value.length ? (a(), M(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, we(w.value, (x) => (a(), M(S2, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    x.is_current ? y("", !0) : (a(), M(ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => L.$emit("switch", x.name)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => S(x)
                    }, {
                      default: h(() => [...I[9] || (I[9] = [
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
            w.value.length ? y("", !0) : (a(), M(ns, {
              key: 1,
              icon: "🌍",
              message: u.value ? `No environments match '${u.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              u.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  C(ue, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: h(() => [...I[10] || (I[10] = [
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
        onClose: I[3] || (I[3] = (x) => m.value = !1)
      }, {
        content: h(() => [...I[11] || (I[11] = [
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
          C(ue, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (x) => m.value = !1)
          }, {
            default: h(() => [...I[12] || (I[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), M(H2, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: I[4] || (I[4] = (x) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(k$, {
        key: 1,
        onClose: I[5] || (I[5] = (x) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), C$ = /* @__PURE__ */ ye($$, [["__scopeId", "data-v-f95999f4"]]), x$ = { class: "file-path" }, S$ = { class: "file-path-text" }, I$ = ["title"], E$ = /* @__PURE__ */ he({
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
    return (l, i) => (a(), r("div", x$, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", S$, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, I$)) : y("", !0)
    ]));
  }
}), T$ = /* @__PURE__ */ ye(E$, [["__scopeId", "data-v-f0982173"]]), P$ = { class: "export-blocked" }, R$ = { class: "issues-list" }, M$ = { class: "issue-message" }, D$ = {
  key: 0,
  class: "issue-details"
}, L$ = ["onClick"], O$ = { class: "issue-fix" }, A$ = /* @__PURE__ */ he({
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
    return (l, i) => (a(), M(vt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", P$, [
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
          t("div", R$, [
            (a(!0), r(j, null, we(e.issues, (c, d) => (a(), r("div", {
              key: d,
              class: "issue-item"
            }, [
              t("div", M$, f(c.message), 1),
              c.details.length ? (a(), r("div", D$, [
                (a(!0), r(j, null, we(n(d), (u, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(u), 1))), 128)),
                c.details.length > 3 && !o[d] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (u) => o[d] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, L$)) : y("", !0)
              ])) : y("", !0),
              t("div", O$, [
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
        C(Re, {
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
}), Tr = /* @__PURE__ */ ye(A$, [["__scopeId", "data-v-b52f5e32"]]), N$ = { class: "export-warnings" }, U$ = {
  key: 0,
  class: "success-header"
}, z$ = { class: "warning-header" }, F$ = { class: "warning-summary" }, B$ = { class: "warning-title" }, V$ = { class: "models-section" }, W$ = { class: "models-list" }, G$ = { class: "model-info" }, j$ = { class: "model-filename" }, H$ = { class: "model-workflows" }, K$ = ["onClick"], q$ = /* @__PURE__ */ he({
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
          t("div", N$, [
            e.models.length === 0 ? (a(), r("div", U$, [...m[4] || (m[4] = [
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
              t("div", z$, [
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
                t("div", F$, [
                  t("h3", B$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", V$, [
                t("div", W$, [
                  (a(!0), r(j, null, we(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", G$, [
                      t("div", j$, f(v.filename), 1),
                      t("div", H$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, K$)
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
          C(Re, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => u.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Re, {
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
      i.value ? (a(), M(el, {
        key: 0,
        identifier: i.value,
        onClose: d
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Pr = /* @__PURE__ */ ye(q$, [["__scopeId", "data-v-b698d882"]]), Y$ = { class: "export-card" }, J$ = { class: "export-path-row" }, X$ = { class: "export-actions" }, Q$ = {
  key: 1,
  class: "export-warning"
}, Z$ = /* @__PURE__ */ he({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = at(), n = k(""), l = k(!1), i = k(!1), c = k(!1), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k(!1), w = N(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, d.value = null;
      try {
        const I = await s();
        m.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
      } catch (I) {
        d.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
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
        const I = await s();
        m.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function $() {
      i.value = !0;
      try {
        const I = await o(n.value || void 0);
        d.value = I;
      } catch (I) {
        d.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var I;
      if ((I = d.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(d.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function L() {
      var I;
      if ((I = d.value) != null && I.path) {
        c.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(d.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const W = await x.blob(), V = URL.createObjectURL(W), F = d.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = V, T.download = F, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, x) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (W) => u.value = !0)
          })
        ]),
        content: h(() => [
          C(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", Y$, [
                x[7] || (x[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", J$, [
                  C(Ln, {
                    modelValue: n.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (W) => n.value = W),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", X$, [
                  C(ue, {
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
          d.value ? (a(), M(it, {
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
                        C(T$, {
                          path: d.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    d.value.models_without_sources !== void 0 ? (a(), M(ut, {
                      key: 0,
                      label: "Models without sources:",
                      value: d.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    d.value.models_without_sources && d.value.models_without_sources > 0 ? (a(), r("div", Q$, [...x[8] || (x[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                d.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    C(ue, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: L
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
                    C(ue, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...x[10] || (x[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(ue, {
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
      v.value && m.value ? (a(), M(Tr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (W) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), M(Pr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: x[5] || (x[5] = (W) => g.value = !1),
        onRevalidate: S
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), eC = /* @__PURE__ */ ye(Z$, [["__scopeId", "data-v-f4d120f2"]]), tC = { class: "file-input-wrapper" }, sC = ["accept", "multiple", "disabled"], oC = /* @__PURE__ */ he({
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
    }), (d, u) => (a(), r("div", tC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, sC),
      C(ue, {
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
}), nC = /* @__PURE__ */ ye(oC, [["__scopeId", "data-v-cd192091"]]), aC = {
  key: 0,
  class: "drop-zone-empty"
}, lC = { class: "drop-zone-text" }, iC = { class: "drop-zone-primary" }, rC = { class: "drop-zone-secondary" }, cC = { class: "drop-zone-actions" }, dC = {
  key: 1,
  class: "drop-zone-file"
}, uC = { class: "file-info" }, fC = { class: "file-details" }, mC = { class: "file-name" }, vC = { class: "file-size" }, pC = /* @__PURE__ */ he({
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
      var L;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (L = $.dataTransfer) == null ? void 0 : L.files;
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
      class: Ee(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: rt(m, ["prevent"]),
      onDragover: rt(v, ["prevent"]),
      onDragleave: rt(g, ["prevent"]),
      onDrop: rt(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", dC, [
        t("div", uC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", fC, [
            t("div", mC, f(d.value), 1),
            t("div", vC, f(u.value), 1)
          ])
        ]),
        C(ue, {
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
      ])) : (a(), r("div", aC, [
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
        t("div", lC, [
          t("p", iC, f(e.primaryText), 1),
          t("p", rC, f(e.secondaryText), 1)
        ]),
        t("div", cC, [
          C(nC, {
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
}), gC = /* @__PURE__ */ ye(pC, [["__scopeId", "data-v-0f79cb86"]]), hC = { class: "import-preview" }, yC = { class: "preview-header" }, wC = {
  key: 0,
  class: "source-env"
}, _C = { class: "preview-content" }, bC = { class: "preview-section" }, kC = { class: "section-header" }, $C = { class: "section-info" }, CC = { class: "section-count" }, xC = {
  key: 0,
  class: "item-list"
}, SC = { class: "item-name" }, IC = {
  key: 0,
  class: "item-more"
}, EC = { class: "preview-section" }, TC = { class: "section-header" }, PC = { class: "section-info" }, RC = { class: "section-count" }, MC = {
  key: 0,
  class: "item-list"
}, DC = { class: "item-details" }, LC = { class: "item-name" }, OC = { class: "item-meta" }, AC = {
  key: 0,
  class: "item-more"
}, NC = { class: "preview-section" }, UC = { class: "section-header" }, zC = { class: "section-info" }, FC = { class: "section-count" }, BC = {
  key: 0,
  class: "item-list"
}, VC = { class: "item-name" }, WC = {
  key: 0,
  class: "item-more"
}, GC = {
  key: 0,
  class: "preview-section"
}, jC = { class: "git-info" }, HC = /* @__PURE__ */ he({
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
    return (c, d) => (a(), r("div", hC, [
      t("div", yC, [
        C(At, null, {
          default: h(() => [...d[0] || (d[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", wC, [
          d[1] || (d[1] = b(" From: ", -1)),
          C(Ta, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", _C, [
        t("div", bC, [
          t("div", kC, [
            d[3] || (d[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", $C, [
              d[2] || (d[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", CC, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", xC, [
            (a(!0), r(j, null, we(e.workflows.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[4] || (d[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", SC, f(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", IC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", EC, [
          t("div", TC, [
            d[6] || (d[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", PC, [
              d[5] || (d[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", RC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", MC, [
            (a(!0), r(j, null, we(e.models.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              d[7] || (d[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", DC, [
                t("span", LC, f(u.filename), 1),
                t("span", OC, f(i(u.size)) + " • " + f(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", AC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", NC, [
          t("div", UC, [
            d[9] || (d[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", zC, [
              d[8] || (d[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", FC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", BC, [
            (a(!0), r(j, null, we(e.nodes.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[10] || (d[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", VC, f(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", WC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", GC, [
          d[11] || (d[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", jC, [
            e.gitBranch ? (a(), M(ut, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                C(Ta, null, {
                  default: h(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), M(ut, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                C(yr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), KC = /* @__PURE__ */ ye(HC, [["__scopeId", "data-v-182fe113"]]), qC = { class: "import-config" }, YC = { class: "config-container" }, JC = { class: "config-field" }, XC = { class: "input-wrapper" }, QC = ["value"], ZC = {
  key: 0,
  class: "validating-indicator"
}, ex = {
  key: 1,
  class: "valid-indicator"
}, tx = {
  key: 0,
  class: "field-error"
}, sx = { class: "config-field" }, ox = { class: "strategy-options" }, nx = ["value", "checked", "onChange"], ax = { class: "strategy-content" }, lx = { class: "strategy-label" }, ix = { class: "strategy-description" }, rx = { class: "config-field switch-field" }, cx = { class: "switch-label" }, dx = ["checked"], ux = { class: "advanced-section" }, fx = { class: "advanced-content" }, mx = { class: "config-field" }, vx = ["value"], px = ["value"], gx = /* @__PURE__ */ he({
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
    return (v, g) => (a(), r("div", qC, [
      C(At, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", YC, [
        t("div", JC, [
          C($n, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", XC, [
            t("input", {
              type: "text",
              class: Ee(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: u,
              onBlur: m
            }, null, 42, QC),
            l.value ? (a(), r("span", ZC, "...")) : i.value ? (a(), r("span", ex, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", tx, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", sx, [
          C($n, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", ox, [
            (a(), r(j, null, we(c, (w) => t("label", {
              key: w.value,
              class: Ee(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, nx),
              t("div", ax, [
                t("span", lx, f(w.label), 1),
                t("span", ix, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", rx, [
          t("label", cx, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, dx),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", ux, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", fx, [
            t("div", mx, [
              C($n, null, {
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
                (a(!0), r(j, null, we(We(sl), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, px))), 128))
              ], 40, vx)
            ])
          ])
        ])
      ])
    ]));
  }
}), hx = /* @__PURE__ */ ye(gx, [["__scopeId", "data-v-89ea06a1"]]), yx = { class: "import-flow" }, wx = {
  key: 0,
  class: "import-empty"
}, _x = { class: "git-import-section" }, bx = { class: "git-url-input-row" }, kx = ["disabled"], $x = {
  key: 0,
  class: "git-error"
}, Cx = {
  key: 1,
  class: "import-configure"
}, xx = { class: "selected-file-bar" }, Sx = {
  key: 0,
  class: "file-bar-content"
}, Ix = { class: "file-bar-info" }, Ex = { class: "file-bar-name" }, Tx = { class: "file-bar-size" }, Px = {
  key: 1,
  class: "file-bar-content"
}, Rx = { class: "file-bar-info" }, Mx = { class: "file-bar-name" }, Dx = {
  key: 0,
  class: "preview-loading"
}, Lx = { class: "import-actions" }, Ox = {
  key: 2,
  class: "import-progress"
}, Ax = { class: "creating-intro" }, Nx = {
  key: 0,
  class: "progress-warning"
}, Ux = {
  key: 1,
  class: "import-error"
}, zx = { class: "error-message" }, Fx = {
  key: 3,
  class: "import-complete"
}, Bx = { class: "complete-message" }, Vx = { class: "complete-title" }, Wx = { class: "complete-details" }, Gx = { class: "complete-actions" }, jx = /* @__PURE__ */ he({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ye, Fe, Z, se;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: d, executeImport: u, executeGitImport: m, getImportProgress: v } = at();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), L = k(null), I = k(""), x = k(null), W = k(!1), V = k(null), F = k(null), T = k({
      name: ((Ye = n.initialProgress) == null ? void 0 : Ye.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = k(null), R = k({
      message: ((Fe = n.initialProgress) == null ? void 0 : Fe.message) ?? "Preparing import...",
      phase: ((Z = n.initialProgress) == null ? void 0 : Z.phase) ?? "",
      progress: ((se = n.initialProgress) == null ? void 0 : se.progress) ?? 0,
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
    ], Y = N(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const X = F.value;
      return {
        sourceEnvironment: X.comfyui_version ? `ComfyUI ${X.comfyui_version}` : "Unknown",
        workflows: X.workflows.map((ie) => ie.name),
        models: X.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: X.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), G = N(() => !P.value && !L.value && F.value && T.value.name.length > 0 && !E.value && (w.value || x.value));
    async function ae(X) {
      w.value = X, P.value = !0, L.value = null, F.value = null;
      try {
        const ie = await i(X);
        F.value = ie;
      } catch (ie) {
        L.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        P.value = !1;
      }
    }
    function te() {
      w.value = null, x.value = null, I.value = "", V.value = null, _.value = !1, S.value = !1, $.value = "", F.value = null, L.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function A() {
      Ue(), te(), p.value = !1, P.value = !1, W.value = !1, R.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function H() {
      if (I.value.trim()) {
        W.value = !0, V.value = null;
        try {
          const X = await c(I.value.trim());
          x.value = I.value.trim(), F.value = X;
        } catch (X) {
          V.value = X instanceof Error ? X.message : "Failed to analyze repository";
        } finally {
          W.value = !1;
        }
      }
    }
    function O(X) {
      try {
        const ie = new URL(X);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return X;
      }
    }
    async function re(X) {
      if (!X) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const ie = await d(X);
        E.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function me() {
      if (T.value.name && !(!w.value && !x.value)) {
        p.value = !0, _.value = !1, R.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let X;
          if (w.value)
            X = await u(
              w.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (x.value)
            X = await m(
              x.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          X.status === "started" ? Pe() : (S.value = !1, $.value = X.message, p.value = !1, _.value = !0);
        } catch (X) {
          S.value = !1, $.value = X instanceof Error ? X.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Pe() {
      if (g) return;
      const X = async () => {
        try {
          const Te = await v();
          return R.value = {
            message: Te.message,
            phase: Te.phase || "",
            progress: Te.progress ?? (Te.state === "importing" ? 50 : 0),
            error: Te.error || null
          }, Te.state === "complete" ? (Ue(), S.value = !0, $.value = `Environment '${Te.environment_name}' created successfully`, p.value = !1, _.value = !0, Te.environment_name && l("import-complete", Te.environment_name, T.value.switchAfterImport), !1) : Te.state === "error" ? (Ue(), S.value = !1, $.value = Te.error || Te.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Te) {
          return console.error("Failed to poll import progress:", Te), !0;
        }
      };
      await X() && (g = setInterval(async () => {
        await X() || Ue();
      }, 2e3));
    }
    function Ue() {
      g && (clearInterval(g), g = null);
    }
    function ze(X) {
      return X < 1024 ? `${X} B` : X < 1024 * 1024 ? `${(X / 1024).toFixed(1)} KB` : X < 1024 * 1024 * 1024 ? `${(X / (1024 * 1024)).toFixed(1)} MB` : `${(X / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const X = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", X.state, X), X.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", X.environment_name), p.value = !0, T.value.name = X.environment_name || T.value.name || "", R.value = {
          progress: X.progress ?? 0,
          message: X.message || "Importing...",
          phase: X.phase || "",
          error: null
        }, Pe());
      } catch (X) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", X);
      }
    }), s({
      handleReset: A,
      isImporting: p,
      canImport: G
    }), (X, ie) => {
      var Te;
      return a(), r("div", yx, [
        !w.value && !x.value && !p.value ? (a(), r("div", wx, [
          C(gC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ae
          }),
          ie[7] || (ie[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", _x, [
            ie[5] || (ie[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", bx, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Ce) => I.value = Ce),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Zt(H, ["enter"]),
                disabled: W.value
              }, null, 40, kx), [
                [Ut, I.value]
              ]),
              C(ue, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || W.value,
                onClick: H
              }, {
                default: h(() => [
                  b(f(W.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (a(), r("div", $x, f(V.value), 1)) : y("", !0),
            ie[6] || (ie[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || x.value) && !p.value && !_.value ? (a(), r("div", Cx, [
          t("div", xx, [
            w.value ? (a(), r("div", Sx, [
              ie[8] || (ie[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", Ix, [
                t("div", Ex, f(w.value.name), 1),
                t("div", Tx, f(ze(w.value.size)), 1)
              ])
            ])) : x.value ? (a(), r("div", Px, [
              ie[10] || (ie[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", Rx, [
                t("div", Mx, f(O(x.value)), 1),
                ie[9] || (ie[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(ue, {
              variant: "ghost",
              size: "sm",
              onClick: te
            }, {
              default: h(() => [...ie[11] || (ie[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), r("div", Dx, [...ie[12] || (ie[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : L.value ? (a(), M(Yt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [L.value]
          }, null, 8, ["details"])) : F.value ? (a(), M(KC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (a(), M(hx, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Ce) => T.value.name = Ce),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Ce) => T.value.modelStrategy = Ce),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Ce) => T.value.torchBackend = Ce),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Ce) => T.value.switchAfterImport = Ce),
            "name-error": E.value,
            onValidateName: re
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          T.value.modelStrategy === "skip" && ((Te = F.value) != null && Te.models_needing_download) ? (a(), M(Yt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", Lx, [
            C(ue, {
              variant: "secondary",
              size: "md",
              onClick: te
            }, {
              default: h(() => [...ie[13] || (ie[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ue, {
              variant: "primary",
              size: "md",
              disabled: !G.value,
              onClick: me
            }, {
              default: h(() => [...ie[14] || (ie[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", Ox, [
          t("p", Ax, [
            ie[15] || (ie[15] = b(" Importing environment ", -1)),
            t("strong", null, f(T.value.name), 1),
            ie[16] || (ie[16] = b("... ", -1))
          ]),
          C(An, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? y("", !0) : (a(), r("p", Nx, " This may take several minutes. Please wait... ")),
          R.value.error ? (a(), r("div", Ux, [
            t("p", zx, f(R.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", Fx, [
          t("div", {
            class: Ee(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", Bx, [
            t("div", Vx, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Wx, f($.value), 1)
          ]),
          t("div", Gx, [
            C(ue, {
              variant: "primary",
              size: "md",
              onClick: A
            }, {
              default: h(() => [...ie[17] || (ie[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Rr = /* @__PURE__ */ ye(jx, [["__scopeId", "data-v-72cbc04e"]]), Hx = /* @__PURE__ */ he({
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
          C(Rr, { onImportComplete: l })
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
}), Kx = /* @__PURE__ */ ye(Hx, [["__scopeId", "data-v-e13bfe76"]]), gn = co(), qx = 5e3, lo = k([]), fa = k(!1), ma = k(null);
let Ro = null;
async function hn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Mr(e) {
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
    fa.value = !0, ma.value = null;
    try {
      let p;
      if (!gn) {
        const _ = await hn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      lo.value = p.instances;
    } catch (p) {
      ma.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      fa.value = !1;
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
      if (!gn) {
        const _ = d(p, "stop"), S = await hn(_, { method: "POST" });
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
      if (!gn) {
        const _ = d(p, "start"), S = await hn(_, { method: "POST" });
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
      if (!gn) {
        const _ = d(p, "terminate"), S = await hn(_, { method: "DELETE" });
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
    Ro || (Ro = window.setInterval(c, qx));
  }
  function w() {
    Ro && (clearInterval(Ro), Ro = null);
  }
  return Ct(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: lo,
    isLoading: fa,
    error: ma,
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
const Yx = { class: "instance-header" }, Jx = { class: "provider-badge" }, Xx = { class: "instance-name" }, Qx = {
  key: 0,
  class: "spinner"
}, Zx = { class: "instance-details" }, e3 = {
  key: 0,
  class: "detail"
}, t3 = {
  key: 1,
  class: "detail instance-url"
}, s3 = {
  key: 2,
  class: "detail"
}, o3 = {
  key: 3,
  class: "detail"
}, n3 = {
  key: 4,
  class: "detail total-cost"
}, a3 = {
  key: 0,
  class: "deployment-progress"
}, l3 = { class: "progress-message" }, i3 = { class: "instance-actions" }, r3 = /* @__PURE__ */ he({
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
      class: Ee(["instance-card", l.value])
    }, [
      t("div", Yx, [
        t("span", Jx, f(o.value), 1),
        t("span", Xx, f(e.instance.name), 1),
        t("span", {
          class: Ee(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", Qx)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", Zx, [
        e.instance.gpu_type ? (a(), r("span", e3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", t3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", s3, f(d(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", o3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", n3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", a3, [
        t("div", l3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), M(Xn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", i3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(ue, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(ue, {
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
        e.instance.status === "running" ? (a(), M(ue, {
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
        e.instance.status === "stopped" ? (a(), M(ue, {
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
        C(ue, {
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
}), c3 = /* @__PURE__ */ ye(r3, [["__scopeId", "data-v-746c3894"]]), d3 = { class: "instances-tab" }, u3 = { class: "instances-header" }, f3 = {
  key: 0,
  class: "loading-state"
}, m3 = {
  key: 1,
  class: "empty-state"
}, v3 = {
  key: 2,
  class: "instances-list"
}, p3 = /* @__PURE__ */ he({
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
    return (n, l) => (a(), r("div", d3, [
      t("div", u3, [
        C(At, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(ue, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", f3, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", m3, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", v3, [
        (a(!0), r(j, null, we(o.value, (i) => (a(), M(c3, {
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
}), g3 = /* @__PURE__ */ ye(p3, [["__scopeId", "data-v-ba614fc3"]]), h3 = { class: "remote-header" }, y3 = { class: "remote-info" }, w3 = { class: "remote-icon" }, _3 = { class: "remote-name" }, b3 = {
  key: 0,
  class: "default-badge"
}, k3 = {
  key: 1,
  class: "sync-badge"
}, $3 = {
  key: 0,
  class: "ahead"
}, C3 = {
  key: 1,
  class: "behind"
}, x3 = {
  key: 1,
  class: "synced"
}, S3 = ["href"], I3 = {
  key: 1,
  class: "remote-url-text"
}, E3 = { class: "remote-actions" }, T3 = /* @__PURE__ */ he({
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
      class: Ee(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", h3, [
        t("div", y3, [
          t("span", w3, f(o.value ? "🔗" : "🌐"), 1),
          t("span", _3, f(e.remote.name), 1),
          o.value ? (a(), r("span", b3, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", k3, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", $3, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", C3, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", x3, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), r("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = rt(() => {
          }, ["stop"]))
        }, f(l.value), 9, S3)) : (a(), r("span", I3, f(l.value), 1))
      ]),
      t("div", E3, [
        C(ue, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(ue, {
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
        C(ue, {
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
}), Dr = /* @__PURE__ */ ye(T3, [["__scopeId", "data-v-d687d161"]]), P3 = { class: "runpod-tab" }, R3 = { class: "api-key-card" }, M3 = { class: "api-key-row" }, D3 = { class: "api-key-input-wrapper" }, L3 = ["type", "disabled"], O3 = ["title"], A3 = { class: "status-icon" }, N3 = { class: "status-text" }, U3 = {
  key: 0,
  class: "credit-balance"
}, z3 = { class: "config-card" }, F3 = { class: "config-row" }, B3 = ["disabled"], V3 = {
  key: 0,
  value: ""
}, W3 = {
  key: 1,
  value: "",
  disabled: ""
}, G3 = ["value", "disabled"], j3 = { class: "config-row" }, H3 = {
  key: 0,
  class: "loading-inline"
}, K3 = { class: "no-volumes-state" }, q3 = { class: "no-volumes-text" }, Y3 = ["value"], J3 = { class: "config-row" }, X3 = ["disabled"], Q3 = {
  key: 0,
  value: ""
}, Z3 = {
  key: 1,
  value: ""
}, e5 = {
  key: 2,
  value: ""
}, t5 = ["value"], s5 = { class: "config-row" }, o5 = { class: "radio-group" }, n5 = { class: "radio-option" }, a5 = { class: "radio-label" }, l5 = { class: "radio-option disabled" }, i5 = { class: "radio-label" }, r5 = { class: "config-row" }, c5 = { class: "radio-group" }, d5 = { class: "radio-option" }, u5 = { class: "radio-label" }, f5 = { class: "radio-option disabled" }, m5 = { class: "radio-label" }, v5 = { class: "config-row" }, p5 = {
  key: 0,
  class: "loading-text"
}, g5 = {
  key: 1,
  class: "empty-remotes"
}, h5 = { class: "remotes-list" }, y5 = {
  key: 0,
  class: "sync-warning"
}, w5 = { class: "warning-content" }, _5 = { class: "remotes-footer" }, b5 = { class: "summary-card" }, k5 = {
  key: 0,
  class: "loading-text"
}, $5 = { class: "summary-row" }, C5 = { class: "summary-value" }, x5 = { class: "summary-row" }, S5 = { class: "summary-value" }, I5 = { class: "summary-row" }, E5 = { class: "summary-value" }, T5 = {
  key: 0,
  class: "summary-sub-row"
}, P5 = { class: "summary-sub-label" }, R5 = {
  key: 1,
  class: "summary-sub-row warning"
}, M5 = { class: "summary-sub-label" }, D5 = { class: "summary-row" }, L5 = { class: "summary-value" }, O5 = { class: "summary-row" }, A5 = { class: "summary-value" }, N5 = { class: "deployment-summary" }, U5 = { class: "summary-columns" }, z5 = { class: "summary-column" }, F5 = { class: "pricing-row" }, B5 = { class: "pricing-value" }, V5 = { class: "pricing-row" }, W5 = { class: "pricing-value" }, G5 = { class: "pricing-row" }, j5 = { class: "pricing-value" }, H5 = { class: "pricing-row total" }, K5 = { class: "pricing-value" }, q5 = { class: "summary-column" }, Y5 = { class: "spec-row" }, J5 = { class: "spec-row" }, X5 = {
  key: 0,
  class: "spec-row"
}, Q5 = {
  key: 1,
  class: "spec-row spot-warning"
}, Z5 = {
  key: 4,
  class: "deploy-actions"
}, e8 = { class: "progress-content" }, t8 = { class: "phase-indicator" }, s8 = { key: 0 }, o8 = { key: 1 }, n8 = { key: 2 }, a8 = {
  key: 3,
  class: "spinner"
}, l8 = { class: "phase-text" }, i8 = { class: "phase-name" }, r8 = { class: "phase-detail" }, c8 = {
  key: 0,
  class: "ready-actions"
}, d8 = { class: "console-link" }, u8 = ["href"], f8 = /* @__PURE__ */ he({
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
    } = at(), P = k(!1), L = k(""), I = k(!1), x = k(!1), W = k(null), V = k(null), F = k(""), T = k(""), E = k(""), R = k("SECURE"), ee = k("ON_DEMAND"), Y = k("my-comfyui-deploy"), G = k([]), ae = k({}), te = k(!1), A = k(null), H = k(null), O = k(null), re = k([]), me = k(!1), Pe = k([]), Ue = k(!1), ze = k([]), Ye = k(!1), Fe = k(null), Z = k(!1), se = k(!1), X = k(null), ie = k(!1), Te = k(null), Ce = k(null), D = k(null), U = k(!1), ne = k(null), ce = k(!1), ve = k(!1), pe = N(() => Pe.value.find((ke) => ke.id === T.value) || null), xe = N(() => F.value ? Pe.value.filter((ke) => ke.data_center_id === F.value) : Pe.value), Se = N(() => ze.value.filter((ke) => ke.available)), de = N(() => A.value && ae.value[A.value] || null), ge = N(() => {
      if (!A.value) return null;
      const ke = G.value.find((Q) => Q.name === A.value);
      return (ke == null ? void 0 : ke.fetch_url) || null;
    }), Oe = N(() => I.value && T.value && E.value && ge.value && !se.value && !U.value), Ie = (ke) => {
      const Q = ze.value.find((gt) => gt.id === E.value);
      if (!Q) return "0.00";
      if (ke === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (ke === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const He = R.value === "SECURE";
      return ke === "ON_DEMAND" ? He ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : He ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, oe = N(() => {
      const ke = ze.value.find((ls) => ls.id === E.value), Q = Pe.value.find((ls) => ls.id === T.value);
      if (!ke) return null;
      const He = R.value === "SECURE", gt = ee.value === "SPOT";
      let qt;
      gt ? qt = He ? ke.secureSpotPrice ?? 0 : ke.communitySpotPrice ?? 0 : qt = He ? ke.securePrice ?? 0 : ke.communityPrice ?? 0;
      const ys = Q ? Q.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: qt,
        volume: ys,
        container: ws,
        total: qt + ys + ws
      };
    });
    async function q() {
      await Ve(), await Promise.all([mt(), De()]);
    }
    async function De() {
      te.value = !0;
      try {
        const ke = await w();
        G.value = ke.remotes, await Promise.all(
          ke.remotes.map(async (He) => {
            const gt = await p(He.name);
            gt && (ae.value[He.name] = gt);
          })
        );
        const Q = ke.remotes.find((He) => He.is_default);
        Q ? A.value = Q.name : ke.remotes.length > 0 && (A.value = ke.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        te.value = !1;
      }
    }
    async function be(ke) {
      H.value = ke;
      try {
        await _(ke);
        const Q = await p(ke);
        Q && (ae.value[ke] = Q), o("toast", `Fetched from ${ke}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function _e(ke) {
      O.value = ke;
      try {
        await S(ke, { force: !1 });
        const Q = await p(ke);
        Q && (ae.value[ke] = Q), o("toast", `Pushed to ${ke}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        O.value = null;
      }
    }
    function B(ke) {
      A.value = ke;
    }
    async function z() {
      if (L.value) {
        x.value = !0, W.value = null;
        try {
          const ke = await l(L.value, !0);
          ke.status === "success" ? (I.value = !0, V.value = ke.credit_balance ?? null, W.value = { type: "success", message: ke.message }, await q()) : W.value = { type: "error", message: ke.message };
        } catch (ke) {
          W.value = {
            type: "error",
            message: ke instanceof Error ? ke.message : "Connection test failed"
          };
        } finally {
          x.value = !1;
        }
      }
    }
    async function fe() {
      try {
        await v(), L.value = "", I.value = !1, W.value = null, V.value = null, re.value = [], F.value = "", Pe.value = [], T.value = "", ze.value = [], E.value = "", Fe.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      Ue.value = !0, me.value = !0;
      try {
        const ke = await i();
        Pe.value = ke.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const He of ke.volumes)
          He.data_center_id && !Q.has(He.data_center_id) && Q.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (ke.volumes.length === 0) {
          const He = await $();
          re.value = He.data_centers;
        } else
          re.value = Array.from(Q.values());
        if (Pe.value.length > 0) {
          const He = Pe.value[0];
          T.value = He.id, He.data_center_id && (F.value = He.data_center_id, await Qe(He.data_center_id));
        } else re.value.length > 0 && (F.value = re.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ue.value = !1, me.value = !1;
      }
    }
    async function Qe(ke) {
      Ye.value = !0;
      try {
        const Q = await c(ke);
        ze.value = Q.gpu_types;
        const He = ze.value.find((gt) => gt.available);
        He ? E.value = He.id : E.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ye.value = !1;
      }
    }
    Ct(F, async (ke) => {
      if (!ke || Ue.value) return;
      const Q = Pe.value.find((He) => He.id === T.value);
      Q && Q.data_center_id !== ke && (T.value = ""), await Qe(ke);
    }), Ct(T, async (ke) => {
      if (!ke) {
        ze.value = [], E.value = "";
        return;
      }
      if (Ue.value) return;
      const Q = Pe.value.find((He) => He.id === ke);
      Q && Q.data_center_id !== F.value ? F.value = Q.data_center_id : Q && await Qe(Q.data_center_id);
    });
    async function mt() {
      Z.value = !0;
      try {
        Fe.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Z.value = !1;
      }
    }
    async function lt() {
      if (!(!E.value || !T.value)) {
        U.value = !0, X.value = null;
        try {
          const ke = await g();
          ne.value = ke, ke.can_export ? ke.warnings.models_without_sources.length > 0 ? ve.value = !0 : await zt() : ce.value = !0;
        } catch (ke) {
          X.value = {
            status: "error",
            message: ke instanceof Error ? ke.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          U.value = !1;
        }
      }
    }
    async function dt() {
      ve.value = !1, await zt();
    }
    async function Rt() {
      try {
        const ke = await g();
        ne.value = ke;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function zt() {
      se.value = !0;
      try {
        let ke;
        if (ee.value === "SPOT") {
          const He = ze.value.find((gt) => gt.id === E.value);
          He && (ke = R.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const Q = await d({
          gpu_type_id: E.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: T.value,
          cloud_type: R.value,
          pricing_type: ee.value,
          spot_bid: ke,
          import_source: ge.value
        });
        X.value = Q, Q.status === "success" && Q.pod_id ? (Te.value = Q.pod_id, ie.value = !0, Kt(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (ke) {
        X.value = {
          status: "error",
          message: ke instanceof Error ? ke.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        se.value = !1;
      }
    }
    function Kt(ke) {
      Ms(ke), D.value = window.setInterval(() => Ms(ke), 3e3);
    }
    function Ws() {
      D.value && (clearInterval(D.value), D.value = null);
    }
    async function Ms(ke) {
      try {
        const Q = await u(ke);
        Ce.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Ws(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function no() {
      ie.value = !1, Ws(), Te.value = null, Ce.value = null;
    }
    function Co() {
      var ke;
      (ke = Ce.value) != null && ke.comfyui_url && window.open(Ce.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function xo(ke) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[ke || ""] || "Initializing...";
    }
    function So(ke) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[ke || ""] ?? 10;
    }
    return et(async () => {
      try {
        const ke = await m(!0);
        ke.has_key && ke.key_preview && (L.value = `****${ke.key_preview}`, ke.valid ? (I.value = !0, V.value = ke.credit_balance ?? null, W.value = { type: "success", message: "Connected to RunPod" }, await q()) : ke.error && (W.value = { type: "error", message: ke.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), (ke, Q) => {
      var He, gt, qt, ys, ws, ls;
      return a(), r(j, null, [
        t("div", P3, [
          C(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", R3, [
                t("div", M3, [
                  t("div", D3, [
                    qe(t("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (Ae) => L.value = Ae),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, L3), [
                      [Yn, L.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (Ae) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, O3)
                  ]),
                  I.value ? y("", !0) : (a(), M(ue, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: x.value,
                    disabled: !L.value || x.value,
                    onClick: z
                  }, {
                    default: h(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (a(), M(ue, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: fe
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                W.value ? (a(), r("div", {
                  key: 0,
                  class: Ee(["connection-status", W.value.type])
                }, [
                  t("span", A3, f(W.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", N3, f(W.value.message), 1),
                  V.value !== null ? (a(), r("span", U3, " $" + f(V.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                Q[18] || (Q[18] = t("div", { class: "api-key-help" }, [
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
          I.value ? (a(), M(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", z3, [
                t("div", F3, [
                  Q[19] || (Q[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Ae) => F.value = Ae),
                    class: "config-select",
                    disabled: me.value
                  }, [
                    me.value ? (a(), r("option", V3, "Loading...")) : F.value ? y("", !0) : (a(), r("option", W3, "Select a region")),
                    (a(!0), r(j, null, we(re.value, (Ae) => (a(), r("option", {
                      key: Ae.id,
                      value: Ae.id,
                      disabled: !Ae.available
                    }, f(Ae.id) + " (" + f(Ae.name) + ")" + f(Ae.available ? "" : " [Unavailable]"), 9, G3))), 128))
                  ], 8, B3), [
                    [hs, F.value]
                  ])
                ]),
                t("div", j3, [
                  Q[24] || (Q[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ue.value ? (a(), r("div", H3, "Loading volumes...")) : xe.value.length === 0 ? (a(), r(j, { key: 1 }, [
                    t("div", K3, [
                      Q[20] || (Q[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", q3, "No volumes in " + f(F.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(j, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (Ae) => T.value = Ae),
                      class: "config-select"
                    }, [
                      (a(!0), r(j, null, we(xe.value, (Ae) => (a(), r("option", {
                        key: Ae.id,
                        value: Ae.id
                      }, f(Ae.name) + " (" + f(Ae.size_gb) + "GB) ", 9, Y3))), 128))
                    ], 512), [
                      [hs, T.value]
                    ]),
                    Q[23] || (Q[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", J3, [
                  Q[25] || (Q[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (Ae) => E.value = Ae),
                    class: "config-select",
                    disabled: Ye.value || !T.value
                  }, [
                    T.value ? Ye.value ? (a(), r("option", Z3, "Loading GPUs...")) : Se.value.length === 0 ? (a(), r("option", e5, "No GPUs available in this region")) : y("", !0) : (a(), r("option", Q3, "Select a volume first")),
                    (a(!0), r(j, null, we(Se.value, (Ae) => (a(), r("option", {
                      key: Ae.id,
                      value: Ae.id
                    }, f(Ae.displayName) + " (" + f(Ae.memoryInGb) + "GB) - $" + f(R.value === "SECURE" ? (Ae.securePrice ?? 0).toFixed(2) : (Ae.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ae.stockStatus ? `[${Ae.stockStatus}]` : ""), 9, t5))), 128))
                  ], 8, X3), [
                    [hs, E.value]
                  ])
                ]),
                t("div", s5, [
                  Q[26] || (Q[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", o5, [
                    t("label", n5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (Ae) => R.value = Ae),
                        value: "SECURE"
                      }, null, 512), [
                        [Xt, R.value]
                      ]),
                      t("span", a5, "Secure ($" + f(Ie("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", l5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (Ae) => R.value = Ae),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Xt, R.value]
                      ]),
                      t("span", i5, "Community ($" + f(Ie("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", r5, [
                  Q[27] || (Q[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", c5, [
                    t("label", d5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (Ae) => ee.value = Ae),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Xt, ee.value]
                      ]),
                      t("span", u5, "On-Demand ($" + f(Ie("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", f5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (Ae) => ee.value = Ae),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Xt, ee.value]
                      ]),
                      t("span", m5, "Spot ($" + f(Ie("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", v5, [
                  Q[28] || (Q[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (Ae) => Y.value = Ae),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Ut, Y.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (a(), M(it, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              te.value ? (a(), r("div", p5, "Loading remotes...")) : G.value.length === 0 ? (a(), r("div", g5, [
                Q[30] || (Q[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(ue, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (Ae) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(j, { key: 2 }, [
                t("div", h5, [
                  (a(!0), r(j, null, we(G.value, (Ae) => (a(), M(Dr, {
                    key: Ae.name,
                    remote: Ae,
                    "sync-status": ae.value[Ae.name],
                    "is-selected": A.value === Ae.name,
                    "is-fetching": H.value === Ae.name,
                    "is-pushing": O.value === Ae.name,
                    onFetch: be,
                    onPush: _e,
                    onSelect: B
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                de.value && de.value.ahead > 0 ? (a(), r("div", y5, [
                  Q[31] || (Q[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", w5, [
                    t("strong", null, f(de.value.ahead) + " unpushed commit" + f(de.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(A.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(ue, {
                    variant: "primary",
                    size: "xs",
                    loading: O.value === A.value,
                    onClick: Q[11] || (Q[11] = (Ae) => A.value && _e(A.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", _5, [
                  C(ue, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (Ae) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...Q[32] || (Q[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (a(), M(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", b5, [
                Z.value ? (a(), r("div", k5, "Loading environment summary...")) : Fe.value ? (a(), r(j, { key: 1 }, [
                  t("div", $5, [
                    Q[33] || (Q[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", C5, f(Fe.value.comfyui_version), 1)
                  ]),
                  t("div", x5, [
                    Q[34] || (Q[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", S5, f(Fe.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", I5, [
                    Q[35] || (Q[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", E5, f(Fe.value.model_count) + " models", 1)
                  ]),
                  Fe.value.models_with_sources > 0 ? (a(), r("div", T5, [
                    t("span", P5, "└─ " + f(Fe.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  Fe.value.models_without_sources > 0 ? (a(), r("div", R5, [
                    t("span", M5, "└─ " + f(Fe.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", D5, [
                    Q[36] || (Q[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", L5, f(Fe.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", O5, [
                    Q[37] || (Q[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", A5, "~" + f(Fe.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && oe.value ? (a(), M(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ae, is;
              return [
                t("div", N5, [
                  t("div", U5, [
                    t("div", z5, [
                      Q[42] || (Q[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", F5, [
                        Q[38] || (Q[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", B5, "$" + f(oe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", V5, [
                        Q[39] || (Q[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", W5, "$" + f(oe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", G5, [
                        Q[40] || (Q[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", j5, "$" + f(oe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", H5, [
                        Q[41] || (Q[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", K5, "~$" + f(oe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", q5, [
                      Q[45] || (Q[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", Y5, [
                        t("span", null, f(((Ae = ze.value.find((le) => le.id === E.value)) == null ? void 0 : Ae.displayName) || "GPU") + " (" + f(((is = ze.value.find((le) => le.id === E.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", J5, [
                        t("span", null, "Region: " + f(F.value), 1)
                      ]),
                      pe.value ? (a(), r("div", X5, [
                        t("span", null, "Volume: " + f(pe.value.name), 1)
                      ])) : y("", !0),
                      ee.value === "SPOT" ? (a(), r("div", Q5, [...Q[44] || (Q[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (a(), r("div", Z5, [
            C(ue, {
              variant: "primary",
              size: "md",
              loading: U.value || se.value,
              disabled: !Oe.value,
              onClick: lt
            }, {
              default: h(() => [
                Q[46] || (Q[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + f(U.value ? "Validating..." : se.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          X.value ? (a(), M(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              C(Et, {
                status: X.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(X.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(X.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(X.value.message), 1)
                ]),
                actions: h(() => [
                  C(ue, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (Ae) => X.value = null)
                  }, {
                    default: h(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                X.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    C(ut, {
                      label: "Pod ID:",
                      value: X.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ie.value ? (a(), M(vt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Ce.value) == null ? void 0 : He.phase) === "READY" || ((gt = Ce.value) == null ? void 0 : gt.phase) === "ERROR" || ((qt = Ce.value) == null ? void 0 : qt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var Ae, is, le, K, Le, je, ot, ft, Mt, rs, Gs, js;
            return [
              t("div", e8, [
                t("div", t8, [
                  t("div", {
                    class: Ee(["phase-icon", (is = (Ae = Ce.value) == null ? void 0 : Ae.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((le = Ce.value) == null ? void 0 : le.phase) === "READY" ? (a(), r("span", s8, "✓")) : ((K = Ce.value) == null ? void 0 : K.phase) === "ERROR" ? (a(), r("span", o8, "✕")) : ((Le = Ce.value) == null ? void 0 : Le.phase) === "STOPPED" ? (a(), r("span", n8, "○")) : (a(), r("span", a8, "⟳"))
                  ], 2),
                  t("div", l8, [
                    t("div", i8, f(xo((je = Ce.value) == null ? void 0 : je.phase)), 1),
                    t("div", r8, f(((ot = Ce.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(Xn, {
                  progress: So((ft = Ce.value) == null ? void 0 : ft.phase),
                  variant: ((Mt = Ce.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((rs = Ce.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = Ce.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), r("div", c8, [
                  C(ue, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...Q[48] || (Q[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", d8, [
                  (js = Ce.value) != null && js.console_url ? (a(), r("a", {
                    key: 0,
                    href: Ce.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, u8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Ce.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Ce.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Ce.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              C(ue, {
                variant: "ghost",
                size: "xs",
                onClick: no
              }, {
                default: h(() => [...Q[49] || (Q[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ce.value && ne.value ? (a(), M(Tr, {
          key: 1,
          issues: ne.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (Ae) => ce.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ve.value && ne.value ? (a(), M(Pr, {
          key: 2,
          models: ne.value.warnings.models_without_sources,
          onConfirm: dt,
          onCancel: Q[15] || (Q[15] = (Ae) => ve.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), m8 = /* @__PURE__ */ ye(f8, [["__scopeId", "data-v-522cd4d9"]]), v8 = { class: "worker-header" }, p8 = { class: "worker-status" }, g8 = { class: "worker-name" }, h8 = { class: "worker-actions" }, y8 = { class: "worker-details" }, w8 = { class: "detail-item" }, _8 = { class: "detail-value" }, b8 = {
  key: 0,
  class: "detail-item"
}, k8 = { class: "detail-value" }, $8 = {
  key: 1,
  class: "detail-item"
}, C8 = { class: "detail-value mode-badge" }, x8 = {
  key: 0,
  class: "worker-stats"
}, S8 = {
  key: 0,
  class: "stat-item"
}, I8 = { key: 0 }, E8 = {
  key: 1,
  class: "worker-stats offline"
}, T8 = /* @__PURE__ */ he({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ee(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", v8, [
        t("div", p8, [
          t("span", {
            class: Ee(["status-dot", e.worker.status])
          }, null, 2),
          t("span", g8, f(e.worker.name), 1)
        ]),
        t("div", h8, [
          e.worker.status === "online" ? (a(), M(ue, {
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
          C(ue, {
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
      t("div", y8, [
        t("span", w8, [
          t("span", _8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", b8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", k8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", $8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", C8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", x8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", S8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", I8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", E8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), P8 = /* @__PURE__ */ ye(T8, [["__scopeId", "data-v-b1be7134"]]), R8 = { class: "add-worker-content" }, M8 = { class: "manual-form" }, D8 = { class: "form-row" }, L8 = { class: "form-row-inline" }, O8 = { class: "form-field flex-2" }, A8 = { class: "form-field flex-1" }, N8 = { class: "form-row" }, U8 = { class: "api-key-wrapper" }, z8 = ["type"], F8 = { class: "result-icon" }, B8 = { class: "result-content" }, V8 = { class: "result-message" }, W8 = {
  key: 0,
  class: "result-detail"
}, G8 = { class: "modal-actions" }, j8 = /* @__PURE__ */ he({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = Vs({
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
    return (p, _) => (a(), M(vt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", R8, [
          t("div", M8, [
            t("div", D8, [
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
            t("div", L8, [
              t("div", O8, [
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
              t("div", A8, [
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
            t("div", N8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", U8, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, z8), [
                  [Yn, l.apiKey]
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
              class: Ee(["test-result", u.value.type])
            }, [
              t("span", F8, f(u.value.type === "success" ? "✓" : "✕"), 1),
              t("div", B8, [
                t("span", V8, f(u.value.message), 1),
                u.value.gpu_info ? (a(), r("span", W8, "GPU: " + f(u.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", G8, [
          C(ue, {
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
          C(ue, {
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
}), H8 = /* @__PURE__ */ ye(j8, [["__scopeId", "data-v-07a00732"]]), K8 = { class: "discovered-content" }, q8 = {
  key: 0,
  class: "workers-list"
}, Y8 = { class: "worker-info" }, J8 = { class: "worker-name" }, X8 = { class: "worker-address" }, Q8 = {
  key: 0,
  class: "worker-gpu"
}, Z8 = {
  key: 1,
  class: "empty-state"
}, eS = {
  key: 2,
  class: "api-key-section"
}, tS = { class: "selected-worker" }, sS = { class: "selected-name" }, oS = { class: "selected-address" }, nS = { class: "form-row" }, aS = { class: "api-key-wrapper" }, lS = ["type"], iS = { class: "result-icon" }, rS = { class: "result-message" }, cS = { class: "modal-actions" }, dS = /* @__PURE__ */ he({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = k(null), i = k(""), c = k(!1), d = k(!1), u = k(null), m = k(null);
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
    return (w, p) => (a(), M(vt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", K8, [
          e.workers.length > 0 ? (a(), r("div", q8, [
            (a(!0), r(j, null, we(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", Y8, [
                t("span", J8, f(_.name), 1),
                t("span", X8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", Q8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(ue, {
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
          ])) : (a(), r("div", Z8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", eS, [
            t("div", tS, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", sS, f(l.value.name), 1),
              t("span", oS, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", nS, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", aS, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: u,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Zt(g, ["enter"])
                }, null, 40, lS), [
                  [Yn, i.value]
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
              class: Ee(["test-result", m.value.type])
            }, [
              t("span", iS, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", rS, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", cS, [
          l.value ? (a(), M(ue, {
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
          l.value ? (a(), M(ue, {
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
}), uS = /* @__PURE__ */ ye(dS, [["__scopeId", "data-v-5a3e40a4"]]), fS = { class: "deploy-content" }, mS = { class: "section" }, vS = {
  key: 0,
  class: "loading-text"
}, pS = {
  key: 1,
  class: "empty-remotes"
}, gS = {
  key: 2,
  class: "remotes-list"
}, hS = { class: "section" }, yS = { class: "mode-options" }, wS = { class: "mode-option" }, _S = ["disabled"], bS = { class: "mode-option" }, kS = { class: "section" }, $S = {
  key: 0,
  class: "section"
}, CS = { class: "summary-row" }, xS = {
  key: 1,
  class: "sync-warning"
}, SS = { class: "warning-content" }, IS = { class: "modal-actions" }, ES = /* @__PURE__ */ he({
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
    } = at(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), L = k(null), I = k(!1), x = N(() => p.value && g.value[p.value] || null), W = N(() => {
      if (!p.value) return null;
      const G = v.value.find((ae) => ae.name === p.value);
      return (G == null ? void 0 : G.fetch_url) || null;
    }), V = N(() => W.value && !I.value);
    async function F() {
      w.value = !0;
      try {
        const G = await l();
        v.value = G.remotes, await Promise.all(
          G.remotes.map(async (te) => {
            const A = await i(te.name);
            A && (g.value[te.name] = A);
          })
        );
        const ae = G.remotes.find((te) => te.is_default);
        ae ? p.value = ae.name : G.remotes.length > 0 && (p.value = G.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function T() {
      try {
        L.value = await u();
      } catch {
      }
    }
    async function E(G) {
      _.value = G;
      try {
        await c(G);
        const ae = await i(G);
        ae && (g.value[G] = ae), n("toast", `Fetched from ${G}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function R(G) {
      S.value = G;
      try {
        await d(G, { force: !1 });
        const ae = await i(G);
        ae && (g.value[G] = ae), n("toast", `Pushed to ${G}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function ee(G) {
      p.value = G;
    }
    async function Y() {
      if (W.value) {
        I.value = !0;
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
          I.value = !1;
        }
      }
    }
    return et(() => {
      F(), T();
    }), (G, ae) => (a(), M(vt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: ae[5] || (ae[5] = (te) => G.$emit("close"))
    }, {
      body: h(() => [
        t("div", fS, [
          t("div", mS, [
            ae[7] || (ae[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", vS, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", pS, [...ae[6] || (ae[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", gS, [
              (a(!0), r(j, null, we(v.value, (te) => (a(), M(Dr, {
                key: te.name,
                remote: te,
                "sync-status": g.value[te.name],
                "is-selected": p.value === te.name,
                "is-fetching": _.value === te.name,
                "is-pushing": S.value === te.name,
                onFetch: E,
                onPush: R,
                onSelect: ee
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", hS, [
            ae[10] || (ae[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", yS, [
              t("label", wS, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": ae[0] || (ae[0] = (te) => $.value = te),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, _S), [
                  [Xt, $.value]
                ]),
                ae[8] || (ae[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", bS, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": ae[1] || (ae[1] = (te) => $.value = te),
                  value: "native"
                }, null, 512), [
                  [Xt, $.value]
                ]),
                ae[9] || (ae[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", kS, [
            ae[11] || (ae[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": ae[2] || (ae[2] = (te) => P.value = te),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Ut, P.value]
            ])
          ]),
          L.value ? (a(), r("div", $S, [
            ae[12] || (ae[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", CS, " ComfyUI: " + f(L.value.comfyui_version) + " • " + f(L.value.node_count) + " nodes • " + f(L.value.model_count) + " models • " + f(L.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          x.value && x.value.ahead > 0 ? (a(), r("div", xS, [
            ae[14] || (ae[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", SS, [
              t("strong", null, f(x.value.ahead) + " unpushed commit" + f(x.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(ue, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: ae[3] || (ae[3] = (te) => p.value && R(p.value))
            }, {
              default: h(() => [...ae[13] || (ae[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", IS, [
          C(ue, {
            variant: "ghost",
            size: "sm",
            onClick: ae[4] || (ae[4] = (te) => G.$emit("close"))
          }, {
            default: h(() => [...ae[15] || (ae[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(ue, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !V.value || I.value,
            onClick: Y
          }, {
            default: h(() => [...ae[16] || (ae[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), TS = /* @__PURE__ */ ye(ES, [["__scopeId", "data-v-c12720d3"]]), PS = { class: "custom-tab" }, RS = { class: "section-header" }, MS = { class: "section-actions" }, DS = { class: "workers-content" }, LS = {
  key: 0,
  class: "loading-state"
}, OS = {
  key: 1,
  class: "empty-state"
}, AS = {
  key: 2,
  class: "workers-list"
}, NS = { class: "scan-icon" }, US = { class: "scan-message" }, zS = /* @__PURE__ */ he({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = at(), d = k([]), u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), S = k(null);
    async function $() {
      m.value = !0;
      try {
        const F = await n();
        d.value = F.workers;
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const F = await c(), T = F.discovered.filter(
          (E) => !d.value.some((R) => R.host === E.host && R.port === E.port)
        );
        u.value = T, T.length > 0 ? p.value = !0 : F.discovered.length > 0 ? S.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : S.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function L(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), w.value = !1, await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function I(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), p.value = !1, await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function x(F) {
      g.value = F;
      try {
        await i(F), o("toast", `Worker '${F}' removed`, "success"), await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function W(F) {
      _.value = F;
    }
    function V() {
      _.value = null, o("deployed");
    }
    return et(() => {
      $();
    }), (F, T) => (a(), r("div", PS, [
      t("div", RS, [
        T[8] || (T[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", MS, [
          C(ue, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: h(() => [...T[6] || (T[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(ue, {
            variant: "secondary",
            size: "xs",
            onClick: T[0] || (T[0] = (E) => w.value = !0)
          }, {
            default: h(() => [...T[7] || (T[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", DS, [
        m.value && d.value.length === 0 ? (a(), r("div", LS, [...T[9] || (T[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : d.value.length === 0 ? (a(), r("div", OS, [...T[10] || (T[10] = [
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
        ])])) : (a(), r("div", AS, [
          (a(!0), r(j, null, we(d.value, (E) => (a(), M(P8, {
            key: E.name,
            worker: E,
            "is-action-loading": g.value === E.name,
            onDeploy: W,
            onRemove: x
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), r("div", {
        key: 0,
        class: Ee(["scan-result", S.value.type])
      }, [
        t("span", NS, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", US, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: T[1] || (T[1] = (E) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), M(uS, {
        key: 1,
        workers: u.value,
        onClose: T[2] || (T[2] = (E) => p.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(H8, {
        key: 2,
        onClose: T[3] || (T[3] = (E) => w.value = !1),
        onAdd: L
      })) : y("", !0),
      _.value ? (a(), M(TS, {
        key: 3,
        worker: _.value,
        onClose: T[4] || (T[4] = (E) => _.value = null),
        onToast: T[5] || (T[5] = (E, R) => o("toast", E, R)),
        onDeployed: V
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), FS = /* @__PURE__ */ ye(zS, [["__scopeId", "data-v-1637dead"]]), va = "ComfyGit.Deploy.GitHubPAT";
function Lr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function BS(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function VS() {
  function e() {
    try {
      return localStorage.getItem(va);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(va, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(va);
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
    isRemoteSsh: Lr,
    isRemoteHttps: BS
  };
}
const WS = { class: "settings-content" }, GS = { class: "settings-section" }, jS = {
  key: 0,
  class: "ssh-warning"
}, HS = { class: "form-row" }, KS = { class: "token-wrapper" }, qS = ["type"], YS = { class: "result-icon" }, JS = { class: "result-message" }, XS = { class: "token-actions" }, QS = /* @__PURE__ */ he({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = VS(), { getRemotes: d, testGitAuth: u } = at(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = N(() => c());
    et(async () => {
      var I;
      const L = n();
      L && (m.value = L);
      try {
        const W = (I = (await d()).remotes) == null ? void 0 : I.find((V) => V.name === "origin");
        W && Lr(W.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const L = await u(m.value);
          w.value = {
            type: L.status === "success" ? "success" : "error",
            message: L.message
          };
        } catch (L) {
          w.value = {
            type: "error",
            message: L instanceof Error ? L.message : "Connection test failed"
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
    return (L, I) => (a(), M(vt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (x) => L.$emit("close"))
    }, {
      body: h(() => [
        t("div", WS, [
          t("div", GS, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", jS, [...I[3] || (I[3] = [
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
            t("div", HS, [
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", KS, [
                qe(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (x) => m.value = x),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, qS), [
                  [Yn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: I[1] || (I[1] = (x) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              I[5] || (I[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Ee(["test-result", w.value.type])
            }, [
              t("span", YS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", JS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", XS, [
              C(ue, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: S
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), M(ue, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: h(() => [...I[7] || (I[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        C(ue, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: $
        }, {
          default: h(() => [...I[10] || (I[10] = [
            b(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), ZS = /* @__PURE__ */ ye(QS, [["__scopeId", "data-v-b21588ad"]]), e4 = /* @__PURE__ */ he({
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
    } = Mr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = N(() => [
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
    async function L(F) {
      S.value = F.id;
      try {
        await d(F), o("toast", "Instance stopped", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function I(F) {
      S.value = F.id;
      try {
        await u(F), o("toast", "Instance starting...", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function x(F) {
      $.value = F;
    }
    async function W() {
      const F = $.value;
      if (F) {
        $.value = null, S.value = F.id;
        try {
          await m(F), o("toast", "Instance terminated", "success");
        } catch (T) {
          o("toast", T instanceof Error ? T.message : "Failed to terminate instance", "error");
        } finally {
          S.value = null;
        }
      }
    }
    async function V() {
      await c(), _.value = "instances";
    }
    return et(() => {
      c(), v();
    }), oo(() => {
      g();
    }), (F, T) => (a(), r(j, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: T[1] || (T[1] = (E) => w.value = !0)
          }, {
            actions: h(() => [
              C(ue, {
                variant: "ghost",
                size: "xs",
                onClick: T[0] || (T[0] = (E) => p.value = !0)
              }, {
                default: h(() => [...T[10] || (T[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(Cr, {
            modelValue: _.value,
            "onUpdate:modelValue": T[2] || (T[2] = (E) => _.value = E),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), M(g3, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": S.value,
            onRefresh: We(c),
            onStop: L,
            onStart: I,
            onTerminate: x
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), M(m8, {
            key: 1,
            onToast: T[3] || (T[3] = (E, R) => o("toast", E, R)),
            onNavigate: T[4] || (T[4] = (E) => o("navigate", E)),
            onDeployed: V
          })) : y("", !0),
          _.value === "custom" ? (a(), M(FS, {
            key: 2,
            onToast: T[5] || (T[5] = (E, R) => o("toast", E, R)),
            onDeployed: V
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), M(tl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: W,
        onCancel: T[6] || (T[6] = (E) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: T[7] || (T[7] = (E) => w.value = !1)
      }, {
        content: h(() => [...T[11] || (T[11] = [
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
      p.value ? (a(), M(ZS, {
        key: 1,
        onClose: T[8] || (T[8] = (E) => p.value = !1),
        onSaved: T[9] || (T[9] = (E) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), t4 = /* @__PURE__ */ ye(e4, [["__scopeId", "data-v-d4e32a10"]]), s4 = { class: "header-info" }, o4 = { class: "commit-hash" }, n4 = {
  key: 0,
  class: "commit-refs"
}, a4 = { class: "commit-message" }, l4 = { class: "commit-date" }, i4 = {
  key: 0,
  class: "loading"
}, r4 = {
  key: 1,
  class: "changes-section"
}, c4 = { class: "stats-row" }, d4 = { class: "stat" }, u4 = { class: "stat insertions" }, f4 = { class: "stat deletions" }, m4 = {
  key: 0,
  class: "change-group"
}, v4 = {
  key: 1,
  class: "change-group"
}, p4 = {
  key: 0,
  class: "version"
}, g4 = {
  key: 2,
  class: "change-group"
}, h4 = { class: "change-item" }, y4 = /* @__PURE__ */ he({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = at(), n = k(null), l = k(!0), i = N(() => {
      if (!n.value) return !1;
      const d = n.value.changes.workflows;
      return d.added.length > 0 || d.modified.length > 0 || d.deleted.length > 0;
    }), c = N(() => {
      if (!n.value) return !1;
      const d = n.value.changes.nodes;
      return d.added.length > 0 || d.removed.length > 0;
    });
    return et(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (d, u) => (a(), M(vt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => d.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", s4, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", o4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", n4, [
              (a(!0), r(j, null, we(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Re, {
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
          t("div", a4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", l4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", i4, "Loading details...")) : n.value ? (a(), r("div", r4, [
            t("div", c4, [
              t("span", d4, f(n.value.stats.files_changed) + " files", 1),
              t("span", u4, "+" + f(n.value.stats.insertions), 1),
              t("span", f4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", m4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[6] || (u[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, we(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, we(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, we(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", v4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[10] || (u[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, we(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", p4, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(j, null, we(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", g4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[13] || (u[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", h4, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => d.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...u[15] || (u[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
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
}), w4 = /* @__PURE__ */ ye(y4, [["__scopeId", "data-v-d256ff6d"]]), _4 = { class: "base-textarea-wrapper" }, b4 = ["value", "rows", "placeholder", "disabled", "maxlength"], k4 = {
  key: 0,
  class: "base-textarea-count"
}, $4 = /* @__PURE__ */ he({
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
    return (i, c) => (a(), r("div", _4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (d) => i.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          c[1] || (c[1] = Zt(rt((d) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Zt(rt((d) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Zt(l, ["enter"])
        ]
      }, null, 40, b4),
      e.showCharCount && e.maxLength ? (a(), r("div", k4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Jl = /* @__PURE__ */ ye($4, [["__scopeId", "data-v-c6d16c93"]]), C4 = ["checked", "disabled"], x4 = { class: "base-checkbox-box" }, S4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, I4 = {
  key: 0,
  class: "base-checkbox-label"
}, E4 = /* @__PURE__ */ he({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: Ee(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, C4),
      t("span", x4, [
        e.modelValue ? (a(), r("svg", S4, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", I4, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pa = /* @__PURE__ */ ye(E4, [["__scopeId", "data-v-bf17c831"]]), T4 = { class: "popover-header" }, P4 = { class: "popover-body" }, R4 = {
  key: 0,
  class: "changes-summary"
}, M4 = {
  key: 0,
  class: "change-item"
}, D4 = {
  key: 1,
  class: "change-item"
}, L4 = {
  key: 2,
  class: "change-item"
}, O4 = {
  key: 3,
  class: "change-item"
}, A4 = {
  key: 4,
  class: "change-item"
}, N4 = {
  key: 5,
  class: "change-item"
}, U4 = {
  key: 1,
  class: "no-changes"
}, z4 = {
  key: 2,
  class: "loading"
}, F4 = {
  key: 3,
  class: "issues-error"
}, B4 = { class: "error-header" }, V4 = { class: "error-title" }, W4 = { class: "issues-list" }, G4 = { class: "workflow-state" }, j4 = { class: "message-section" }, H4 = { class: "popover-footer" }, K4 = {
  key: 1,
  class: "commit-popover"
}, q4 = { class: "popover-header" }, Y4 = { class: "popover-body" }, J4 = {
  key: 0,
  class: "changes-summary"
}, X4 = {
  key: 0,
  class: "change-item"
}, Q4 = {
  key: 1,
  class: "change-item"
}, Z4 = {
  key: 2,
  class: "change-item"
}, e6 = {
  key: 3,
  class: "change-item"
}, t6 = {
  key: 4,
  class: "change-item"
}, s6 = {
  key: 5,
  class: "change-item"
}, o6 = {
  key: 1,
  class: "no-changes"
}, n6 = {
  key: 2,
  class: "loading"
}, a6 = {
  key: 3,
  class: "issues-error"
}, l6 = { class: "error-header" }, i6 = { class: "error-title" }, r6 = { class: "issues-list" }, c6 = { class: "workflow-state" }, d6 = { class: "message-section" }, u6 = { class: "popover-footer" }, f6 = /* @__PURE__ */ he({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = at(), i = k(""), c = k(!1), d = k(!1), u = N(() => {
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
          const L = await l(i.value.trim(), d.value);
          if (L.status === "success") {
            const I = `Committed: ${((_ = L.summary) == null ? void 0 : _.new) || 0} new, ${((S = L.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = L.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: I });
          } else if (L.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (L.status === "blocked") {
            const I = ((P = L.issues) == null ? void 0 : P.map((x) => `${x.name}: ${x.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: L.message || "Commit failed" });
        } catch (L) {
          n("committed", { success: !1, message: L instanceof Error ? L.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, S) => e.asModal ? (a(), M(yt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", T4, [
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
          t("div", P4, [
            e.status && u.value ? (a(), r("div", R4, [
              e.status.workflows.new.length ? (a(), r("div", M4, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", D4, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", L4, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", O4, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", A4, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", N4, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", U4, " No changes to commit ")) : (a(), r("div", z4, " Loading... ")),
            g.value ? (a(), r("div", F4, [
              t("div", B4, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", V4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", W4, [
                (a(!0), r(j, null, we(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", G4, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Pa, {
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
            t("div", j4, [
              C(Jl, {
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
          t("div", H4, [
            C(Re, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Re, {
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
    ])) : (a(), r("div", K4, [
      t("div", q4, [
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
      t("div", Y4, [
        e.status && u.value ? (a(), r("div", J4, [
          e.status.workflows.new.length ? (a(), r("div", X4, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", Q4, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", Z4, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", e6, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", t6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", s6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", o6, " No changes to commit ")) : (a(), r("div", n6, " Loading... ")),
        g.value ? (a(), r("div", a6, [
          t("div", l6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", i6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", r6, [
            (a(!0), r(j, null, we(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", c6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Pa, {
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
        t("div", d6, [
          C(Jl, {
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
      t("div", u6, [
        C(Re, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Re, {
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
}), Or = /* @__PURE__ */ ye(f6, [["__scopeId", "data-v-5f897631"]]), m6 = { class: "modal-header" }, v6 = { class: "modal-body" }, p6 = { class: "switch-message" }, g6 = { class: "switch-details" }, h6 = { class: "modal-actions" }, y6 = /* @__PURE__ */ he({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", m6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", v6, [
            t("p", p6, [
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
            t("p", g6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", h6, [
            C(ue, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ue, {
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
}), w6 = /* @__PURE__ */ ye(y6, [["__scopeId", "data-v-e9c5253e"]]), _6 = {
  key: 0,
  class: "modal-overlay"
}, b6 = { class: "modal-content" }, k6 = { class: "modal-body" }, $6 = { class: "progress-info" }, C6 = { class: "progress-percentage" }, x6 = { class: "progress-state" }, S6 = { class: "switch-steps" }, I6 = { class: "step-icon" }, E6 = { class: "step-label" }, T6 = /* @__PURE__ */ he({
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
    return (i, c) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), r("div", _6, [
        t("div", b6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", k6, [
            C(Xn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", $6, [
              t("div", C6, f(e.progress) + "%", 1),
              t("div", x6, f(o.value), 1)
            ]),
            t("div", S6, [
              (a(!0), r(j, null, we(l.value, (d) => (a(), r("div", {
                key: d.state,
                class: Ee(["switch-step", d.status])
              }, [
                t("span", I6, f(d.icon), 1),
                t("span", E6, f(d.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), P6 = /* @__PURE__ */ ye(T6, [["__scopeId", "data-v-768a5078"]]), R6 = { class: "modal-header" }, M6 = { class: "modal-body" }, D6 = {
  key: 0,
  class: "node-section"
}, L6 = { class: "node-list" }, O6 = {
  key: 1,
  class: "node-section"
}, A6 = { class: "node-list" }, N6 = { class: "modal-actions" }, U6 = /* @__PURE__ */ he({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(yt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", R6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", M6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", D6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", L6, [
                (a(!0), r(j, null, we(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", O6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", A6, [
                (a(!0), r(j, null, we(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", N6, [
            C(ue, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ue, {
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
}), z6 = /* @__PURE__ */ ye(U6, [["__scopeId", "data-v-7cad7518"]]), F6 = [
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
], B6 = "v0.0.16", V6 = "Akatz", W6 = { class: "social-buttons" }, G6 = ["title", "aria-label", "onClick"], j6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H6 = ["d"], K6 = ["title", "aria-label", "onClick"], q6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Y6 = ["d"], J6 = /* @__PURE__ */ he({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", W6, [
      (a(!0), r(j, null, we(We(F6), (l) => (a(), r(j, {
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
          (a(), r("svg", j6, [
            t("path", {
              d: l.iconPath
            }, null, 8, H6)
          ]))
        ], 8, G6)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", q6, [
            t("path", {
              d: l.iconPath
            }, null, 8, Y6)
          ]))
        ], 8, K6))
      ], 64))), 128))
    ]));
  }
}), Ar = /* @__PURE__ */ ye(J6, [["__scopeId", "data-v-4f846342"]]), X6 = { class: "footer-info" }, Q6 = { class: "version" }, Z6 = { class: "made-by" }, eI = /* @__PURE__ */ he({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", X6, [
      t("span", Q6, f(We(B6)), 1),
      t("span", Z6, [
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
        b(" by " + f(We(V6)), 1)
      ])
    ]));
  }
}), Nr = /* @__PURE__ */ ye(eI, [["__scopeId", "data-v-8bc3db0a"]]), tI = /* @__PURE__ */ he({
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
    return (i, c) => (a(), M(vt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (d) => i.$emit("close"))
    }, {
      body: h(() => [
        C($r, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var d;
        return [
          C(Re, {
            variant: "primary",
            disabled: !((d = o.value) != null && d.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Re, {
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
}), sI = /* @__PURE__ */ ye(tI, [["__scopeId", "data-v-fac00ae7"]]), oI = { class: "header-actions" }, nI = {
  key: 0,
  class: "wizard-step"
}, aI = { class: "form-field" }, lI = ["placeholder"], iI = {
  key: 0,
  class: "form-error"
}, rI = { class: "form-field form-field--checkbox" }, cI = { class: "form-checkbox" }, dI = {
  key: 0,
  class: "form-field"
}, uI = ["placeholder"], fI = {
  key: 0,
  class: "form-info"
}, mI = {
  key: 1,
  class: "form-suggestion"
}, vI = {
  key: 2,
  class: "form-error"
}, pI = {
  key: 3,
  class: "form-info"
}, gI = {
  key: 1,
  class: "wizard-step"
}, hI = {
  key: 0,
  class: "progress-check-loading"
}, yI = {
  key: 0,
  class: "cli-warning"
}, wI = { class: "cli-warning-header" }, _I = {
  key: 1,
  class: "env-landing"
}, bI = { class: "env-list" }, kI = ["value"], $I = { class: "env-name" }, CI = {
  key: 2,
  class: "env-create"
}, xI = { class: "form-field" }, SI = { class: "form-field" }, II = ["value"], EI = { class: "form-field" }, TI = ["disabled"], PI = ["value"], RI = { class: "form-field" }, MI = ["value"], DI = { class: "form-field form-field--checkbox" }, LI = { class: "form-checkbox" }, OI = {
  key: 0,
  class: "form-error"
}, AI = {
  key: 1,
  class: "env-creating"
}, NI = { class: "creating-intro" }, UI = {
  key: 3,
  class: "env-import"
}, zI = { class: "wizard-footer" }, FI = { class: "wizard-footer-actions" }, io = 10, BI = 600 * 1e3, Xl = 1800 * 1e3, VI = /* @__PURE__ */ he({
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
    } = at(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), L = k(null), I = k(o.initialStep === 2), x = k(o.defaultPath), W = k(!!o.detectedModelsDir), V = k(o.detectedModelsDir || ""), F = k(null), T = k(null), E = k(null), R = k(null), ee = k("my-new-env"), Y = k(Ir), G = k("latest"), ae = k(Er), te = k(!0), A = k(null), H = k(null), O = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), re = k(!1), me = k(!1), Pe = k(!1), Ue = k({ progress: 0, message: "" }), ze = k({ progress: 0, message: "" }), Ye = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Fe = k(0), Z = k(null), se = k(0), X = k(null), ie = N(() => {
      var be, _e;
      const oe = (be = x.value) == null ? void 0 : be.trim(), q = !F.value, De = !W.value || !T.value && ((_e = V.value) == null ? void 0 : _e.trim());
      return oe && q && De;
    }), Te = N(() => {
      var oe;
      return (oe = ee.value) == null ? void 0 : oe.trim();
    }), Ce = N(() => !!(g.value === 2 || H.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), D = N(() => H.value || o.workspacePath || null);
    async function U() {
      var oe;
      if (F.value = null, !!((oe = x.value) != null && oe.trim()))
        try {
          const q = await c({ path: x.value, type: "workspace" });
          q.valid || (F.value = q.error || "Invalid path");
        } catch (q) {
          F.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function ne() {
      var oe;
      if (T.value = null, E.value = null, R.value = null, !!((oe = V.value) != null && oe.trim()))
        try {
          const q = await c({ path: V.value, type: "models" });
          if (q.valid)
            R.value = q.model_count ?? null;
          else if (T.value = q.error || "Invalid path", q.suggestion) {
            E.value = q.suggestion, V.value = q.suggestion, T.value = null;
            const De = await c({ path: q.suggestion, type: "models" });
            De.valid && (R.value = De.model_count ?? null);
          }
        } catch (q) {
          T.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function ce() {
      var oe, q, De, be, _e;
      if (F.value = null, T.value = null, await U(), (oe = F.value) != null && oe.includes("already exists")) {
        F.value = null, H.value = ((q = x.value) == null ? void 0 : q.trim()) || o.defaultPath, g.value = 2, pe();
        return;
      }
      if (!F.value && !(W.value && ((De = V.value) != null && De.trim()) && (await ne(), T.value))) {
        me.value = !0;
        try {
          await l({
            workspace_path: ((be = x.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: W.value && ((_e = V.value) == null ? void 0 : _e.trim()) || null
          }), Fe.value = 0, Z.value = Date.now();
          const B = setInterval(async () => {
            var z;
            if (Z.value && Date.now() - Z.value > BI) {
              clearInterval(B), me.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const fe = await i();
              if (Fe.value = 0, fe.state === "idle" && me.value) {
                clearInterval(B), me.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ue.value = { progress: fe.progress, message: fe.message }, fe.state === "complete" ? (clearInterval(B), me.value = !1, H.value = ((z = x.value) == null ? void 0 : z.trim()) || o.defaultPath, g.value = 2, pe()) : fe.state === "error" && (clearInterval(B), me.value = !1, F.value = fe.error || "Workspace creation failed");
            } catch (fe) {
              Fe.value++, console.warn(`Polling failure ${Fe.value}/${io}:`, fe), Fe.value >= io && (clearInterval(B), me.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (B) {
          me.value = !1, F.value = B instanceof Error ? B.message : "Failed to create workspace";
        }
      }
    }
    async function ve() {
      Pe.value = !0, A.value = null;
      try {
        const oe = {
          name: ee.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: G.value,
          torch_backend: ae.value,
          switch_after: te.value,
          workspace_path: H.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await d(oe)).status === "started") {
          se.value = 0, X.value = Date.now();
          const De = setInterval(async () => {
            if (X.value && Date.now() - X.value > Xl) {
              clearInterval(De), Pe.value = !1, A.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await u();
              if (se.value = 0, be.state === "idle" && Pe.value) {
                clearInterval(De), Pe.value = !1, A.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ze.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(De), Pe.value = !1;
                const _e = be.environment_name || oe.name;
                te.value ? n("complete", _e, H.value) : (p.value = "landing", n("environment-created-no-switch", _e));
              } else be.state === "error" && (clearInterval(De), Pe.value = !1, A.value = be.error || "Environment creation failed");
            } catch (be) {
              se.value++, console.warn(`Polling failure ${se.value}/${io}:`, be), se.value >= io && (clearInterval(De), Pe.value = !1, A.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        Pe.value = !1, A.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function pe() {
      re.value = !0;
      try {
        O.value = await v();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        re.value = !1;
      }
    }
    function xe() {
      w.value && n("switch-environment", w.value, H.value);
    }
    function Se() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function de(oe, q) {
      S.value = !1, q ? n("complete", oe, H.value) : (n("environment-created-no-switch", oe), p.value = "landing");
    }
    function ge() {
    }
    et(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (H.value = o.workspacePath), g.value === 2) {
        pe();
        const oe = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Oe(), clearTimeout(oe), I.value = !1;
      }
    });
    async function Oe() {
      try {
        const oe = await u();
        if (console.log("[ComfyGit] Create progress check:", oe.state, oe), oe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", oe.environment_name), p.value = "create", Pe.value = !0, ee.value = oe.environment_name || "my-new-env", ze.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase
          }, Ie();
          return;
        }
      } catch (oe) {
        console.log("[ComfyGit] Create progress check failed:", oe);
      }
      try {
        const oe = await m();
        console.log("[ComfyGit] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", oe.environment_name), L.value = {
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          progress: oe.progress ?? 0,
          environmentName: oe.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (oe) {
        console.log("[ComfyGit] Import progress check failed:", oe);
      }
    }
    async function Ie() {
      se.value = 0, X.value = Date.now();
      let oe = null;
      const q = async () => {
        if (X.value && Date.now() - X.value > Xl)
          return oe && clearInterval(oe), Pe.value = !1, A.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await u();
          if (se.value = 0, be.state === "idle" && Pe.value)
            return oe && clearInterval(oe), Pe.value = !1, A.value = "Environment creation was interrupted. Please try again.", !1;
          if (ze.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            oe && clearInterval(oe), Pe.value = !1;
            const _e = be.environment_name || ee.value;
            return n("complete", _e, H.value), !1;
          } else if (be.state === "error")
            return oe && clearInterval(oe), Pe.value = !1, A.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return se.value++, console.warn(`Polling failure ${se.value}/${io}:`, be), se.value >= io ? (oe && clearInterval(oe), Pe.value = !1, A.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (oe = setInterval(async () => {
        !await q() && oe && clearInterval(oe);
      }, 2e3));
    }
    return (oe, q) => (a(), r(j, null, [
      C(vt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[15] || (q[15] = (De) => oe.$emit("close"))
      }, {
        header: h(() => [
          q[20] || (q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", oI, [
            C(Ar),
            q[19] || (q[19] = t("span", { class: "header-divider" }, null, -1)),
            Ce.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: q[0] || (q[0] = (De) => _.value = !0)
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
              onClick: q[1] || (q[1] = (De) => oe.$emit("close")),
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
          var De;
          return [
            g.value === 1 ? (a(), r("div", nI, [
              q[24] || (q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", aI, [
                q[21] || (q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = (be) => x.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, lI), [
                  [Ut, x.value]
                ]),
                F.value ? (a(), r("p", iI, f(F.value), 1)) : y("", !0)
              ]),
              t("div", rI, [
                t("label", cI, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = (be) => W.value = be)
                  }, null, 512), [
                    [en, W.value]
                  ]),
                  q[22] || (q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              W.value ? (a(), r("div", dI, [
                q[23] || (q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = (be) => V.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, uI), [
                  [Ut, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (a(), r("p", fI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (a(), r("p", mI, " Did you mean: " + f(E.value), 1)) : y("", !0),
                T.value ? (a(), r("p", vI, f(T.value), 1)) : y("", !0),
                R.value !== null && !T.value ? (a(), r("p", pI, " Found " + f(R.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              me.value ? (a(), M(An, {
                key: 1,
                progress: Ue.value.progress,
                message: Ue.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", gI, [
              I.value ? (a(), r("div", hI, [...q[25] || (q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", yI, [
                  t("div", wI, [
                    q[27] || (q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    q[28] || (q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: q[5] || (q[5] = (be) => $.value = !0),
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
                p.value === "landing" ? (a(), r("div", _I, [
                  q[34] || (q[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: q[6] || (q[6] = (be) => p.value = "create")
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
                    onClick: q[7] || (q[7] = (be) => {
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
                  (De = o.existingEnvironments) != null && De.length ? (a(), r(j, { key: 0 }, [
                    q[33] || (q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", bI, [
                      (a(!0), r(j, null, we(o.existingEnvironments, (be) => (a(), r("label", {
                        key: be,
                        class: Ee(["env-option", { selected: w.value === be }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": q[8] || (q[8] = (_e) => w.value = _e)
                        }, null, 8, kI), [
                          [Xt, w.value]
                        ]),
                        t("span", $I, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", CI, [
                  Pe.value ? (a(), r("div", AI, [
                    t("p", NI, [
                      q[41] || (q[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(ee.value), 1),
                      q[42] || (q[42] = b("... ", -1))
                    ]),
                    C(An, {
                      progress: ze.value.progress,
                      message: ze.value.message,
                      "current-phase": ze.value.phase,
                      "show-steps": !0,
                      steps: Ye
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[43] || (q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(j, { key: 0 }, [
                    q[40] || (q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", xI, [
                      q[35] || (q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": q[9] || (q[9] = (be) => ee.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ut, ee.value]
                      ])
                    ]),
                    t("div", SI, [
                      q[36] || (q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = (be) => Y.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, we(We(Sr), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be), 9, II))), 128))
                      ], 512), [
                        [hs, Y.value]
                      ])
                    ]),
                    t("div", EI, [
                      q[37] || (q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = (be) => G.value = be),
                        class: "form-select",
                        disabled: re.value
                      }, [
                        (a(!0), r(j, null, we(O.value, (be) => (a(), r("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, PI))), 128))
                      ], 8, TI), [
                        [hs, G.value]
                      ])
                    ]),
                    t("div", RI, [
                      q[38] || (q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[12] || (q[12] = (be) => ae.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, we(We(sl), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, MI))), 128))
                      ], 512), [
                        [hs, ae.value]
                      ])
                    ]),
                    t("div", DI, [
                      t("label", LI, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[13] || (q[13] = (be) => te.value = be)
                        }, null, 512), [
                          [en, te.value]
                        ]),
                        q[39] || (q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    A.value ? (a(), r("div", OI, f(A.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", UI, [
                  C(Rr, {
                    "workspace-path": H.value,
                    "resume-import": P.value,
                    "initial-progress": L.value ?? void 0,
                    onImportComplete: de,
                    onImportStarted: q[14] || (q[14] = (be) => S.value = !0),
                    onSourceCleared: ge
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", zI, [
            C(Nr),
            t("div", FI, [
              g.value === 1 ? (a(), M(Re, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || me.value,
                onClick: ce
              }, {
                default: h(() => [
                  b(f(me.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(j, { key: 1 }, [
                !Pe.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !H.value) ? (a(), M(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: Se
                }, {
                  default: h(() => [...q[44] || (q[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), M(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Te.value || Pe.value,
                  onClick: ve
                }, {
                  default: h(() => [
                    b(f(Pe.value ? "Creating..." : te.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), M(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: xe
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
      _.value ? (a(), M(sI, {
        key: 0,
        "workspace-path": D.value,
        onClose: q[16] || (q[16] = (De) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), WI = /* @__PURE__ */ ye(VI, [["__scopeId", "data-v-9a9aadc0"]]), GI = { class: "comfygit-panel" }, jI = { class: "panel-header" }, HI = { class: "header-left" }, KI = {
  key: 0,
  class: "header-info"
}, qI = { class: "header-actions" }, YI = { class: "env-switcher" }, JI = {
  key: 0,
  class: "header-info"
}, XI = { class: "branch-name" }, QI = { class: "panel-main" }, ZI = { class: "sidebar" }, eE = { class: "sidebar-content" }, tE = { class: "sidebar-section" }, sE = { class: "sidebar-section" }, oE = { class: "sidebar-section" }, nE = {
  key: 0,
  class: "sidebar-badge"
}, aE = { class: "sidebar-footer" }, lE = { class: "content-area" }, iE = {
  key: 0,
  class: "error-message"
}, rE = {
  key: 1,
  class: "loading"
}, cE = { class: "dialog-content env-selector-dialog" }, dE = { class: "dialog-header" }, uE = { class: "dialog-body" }, fE = { class: "env-list" }, mE = { class: "env-info" }, vE = { class: "env-name-row" }, pE = { class: "env-indicator" }, gE = { class: "env-name" }, hE = {
  key: 0,
  class: "env-branch"
}, yE = {
  key: 1,
  class: "current-label"
}, wE = { class: "env-stats" }, _E = ["onClick"], bE = { class: "toast-container" }, kE = { class: "toast-message" }, $E = /* @__PURE__ */ he({
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
    } = at(), L = xv(), { liveInstanceCount: I } = Mr({ autoStart: !0 }), x = k(null), W = k([]), V = k([]), F = k([]), T = N(() => F.value.find((le) => le.is_current)), E = k(null), R = k(!1), ee = k(1), Y = N(() => {
      var le;
      return ((le = E.value) == null ? void 0 : le.state) || "managed";
    }), G = k(!1), ae = k(null), te = k(null), A = k(!1), H = k(null), O = k(null), re = k(null), me = k(!1), Pe = k(!1), Ue = k(""), ze = k(null), Ye = k({ state: "idle", progress: 0, message: "" });
    let Fe = null, Z = null;
    const se = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, X = o.initialView ? se[o.initialView] : null, ie = k((X == null ? void 0 : X.view) ?? "status"), Te = k((X == null ? void 0 : X.section) ?? "this-env");
    function Ce(le, K) {
      ie.value = le, Te.value = K;
    }
    function D(le) {
      const Le = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[le];
      Le && Ce(Le.view, Le.section);
    }
    function U() {
      Ce("branches", "this-env");
    }
    function ne() {
      n("close"), setTimeout(() => {
        var K;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Le of le)
          if (((K = Le.textContent) == null ? void 0 : K.trim()) === "Manager") {
            Le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ce = k(null), ve = k(!1), pe = k(!1), xe = k([]);
    let Se = 0;
    function de(le, K = "info", Le = 3e3) {
      const je = ++Se;
      return xe.value.push({ id: je, message: le, type: K }), Le > 0 && setTimeout(() => {
        xe.value = xe.value.filter((ot) => ot.id !== je);
      }, Le), je;
    }
    function ge(le) {
      xe.value = xe.value.filter((K) => K.id !== le);
    }
    function Oe(le, K) {
      de(le, K);
    }
    const Ie = N(() => {
      if (!x.value) return "neutral";
      const le = x.value.workflows, K = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? K ? "warning" : "success" : "error";
    });
    N(() => x.value ? Ie.value === "success" ? "All synced" : Ie.value === "warning" ? "Uncommitted changes" : Ie.value === "error" ? "Not synced" : "" : "");
    async function oe() {
      G.value = !0, ae.value = null;
      try {
        const [le, K, Le, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        x.value = le, W.value = K.commits, V.value = Le.branches, F.value = je, n("statusUpdate", le), H.value && await H.value.loadWorkflows(!0);
      } catch (le) {
        ae.value = le instanceof Error ? le.message : "Failed to load status", x.value = null, W.value = [], V.value = [];
      } finally {
        G.value = !1;
      }
    }
    function q(le) {
      te.value = le;
    }
    async function De(le) {
      var Le;
      te.value = null;
      const K = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ce.value = {
        title: K ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: K ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Le = le.hash) == null ? void 0 : Le.slice(0, 7))}?`,
        details: K ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: K,
        onConfirm: async () => {
          var ft;
          ce.value = null, fe();
          const je = de(`Checking out ${le.short_hash || ((ft = le.hash) == null ? void 0 : ft.slice(0, 7))}...`, "info", 0), ot = await d(le.hash, K);
          ge(je), ot.status === "success" ? de("Restarting ComfyUI...", "success") : de(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function be(le) {
      const K = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ce.value = {
        title: K ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: K ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: K ? is() : void 0,
        warning: K ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null, fe();
          const Le = de(`Switching to ${le}...`, "info", 0), je = await m(le, K);
          ge(Le), je.status === "success" ? de("Restarting ComfyUI...", "success") : de(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function _e(le) {
      const K = de(`Creating branch ${le}...`, "info", 0), Le = await u(le);
      ge(K), Le.status === "success" ? (de(`Branch "${le}" created`, "success"), await oe()) : de(Le.message || "Failed to create branch", "error");
    }
    async function B(le, K = !1) {
      const Le = async (je) => {
        var ft;
        const ot = de(`Deleting branch ${le}...`, "info", 0);
        try {
          const Mt = await v(le, je);
          ge(ot), Mt.status === "success" ? (de(`Branch "${le}" deleted`, "success"), await oe()) : (ft = Mt.message) != null && ft.includes("not fully merged") ? ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ce.value = null, await Le(!0);
            }
          } : de(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          ge(ot);
          const rs = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ce.value = null, await Le(!0);
            }
          } : de(rs, "error");
        }
      };
      ce.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null, await Le(K);
        }
      };
    }
    async function z(le) {
      te.value = null;
      const K = prompt("Enter branch name:");
      if (K) {
        const Le = de(`Creating branch ${K}...`, "info", 0), je = await u(K, le.hash);
        ge(Le), je.status === "success" ? (de(`Branch "${K}" created from ${le.short_hash}`, "success"), await oe()) : de(je.message || "Failed to create branch", "error");
      }
    }
    function fe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      ce.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ce.value = null, fe(), de("Restarting environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
      ce.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ce.value = null, de("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function mt(le, K) {
      A.value = !1, Ue.value = le, ze.value = K || null, me.value = !0;
    }
    async function lt() {
      me.value = !1, Pe.value = !0, fe(), Ye.value = {
        progress: 10,
        state: dt(10),
        message: Rt(10)
      };
      try {
        await w(Ue.value, ze.value || void 0), zt(), Ws();
      } catch (le) {
        Kt(), Pe.value = !1, de(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), Ye.value = { state: "idle", progress: 0, message: "" }, ze.value = null;
      }
    }
    function dt(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function Rt(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[dt(le)] || "";
    }
    function zt() {
      if (Z) return;
      let le = 10;
      const K = 60, Le = 5e3, je = 100, ot = (K - le) / (Le / je);
      Z = window.setInterval(() => {
        if (le += ot, le >= K && (le = K, Kt()), Ye.value.progress < K) {
          const ft = Math.floor(le);
          Ye.value = {
            progress: ft,
            state: dt(ft),
            message: Rt(ft)
          };
        }
      }, je);
    }
    function Kt() {
      Z && (clearInterval(Z), Z = null);
    }
    function Ws() {
      Fe || (Fe = window.setInterval(async () => {
        try {
          let le = await L.getStatus();
          if ((!le || le.state === "idle") && (le = await p()), !le)
            return;
          const K = le.progress || 0;
          K >= 60 && Kt();
          const Le = Math.max(K, Ye.value.progress), je = le.state && le.state !== "idle" && le.state !== "unknown", ot = je ? le.state : dt(Le), ft = je && le.message || Rt(Le);
          Ye.value = {
            state: ot,
            progress: Le,
            message: ft
          }, le.state === "complete" ? (Kt(), Ms(), Pe.value = !1, de(`✓ Switched to ${Ue.value}`, "success"), await oe(), Ue.value = "") : le.state === "rolled_back" ? (Kt(), Ms(), Pe.value = !1, de("Switch failed, restored previous environment", "warning"), Ue.value = "") : le.state === "critical_failure" && (Kt(), Ms(), Pe.value = !1, de(`Critical error during switch: ${le.message}`, "error"), Ue.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function Ms() {
      Kt(), Fe && (clearInterval(Fe), Fe = null);
    }
    function no() {
      var le;
      me.value = !1, Ue.value = "", (le = E.value) != null && le.state && E.value.state !== "managed" && (ee.value = E.value.state === "no_workspace" ? 1 : 2, R.value = !0);
    }
    async function Co(le) {
      ve.value = !1, await oe(), de(le.message, le.success ? "success" : "error");
    }
    async function xo() {
      pe.value = !1;
      const le = de("Syncing environment...", "info", 0);
      try {
        const K = await S("skip", !0);
        if (ge(le), K.status === "success") {
          const Le = [];
          K.nodes_installed.length && Le.push(`${K.nodes_installed.length} installed`), K.nodes_removed.length && Le.push(`${K.nodes_removed.length} removed`);
          const je = Le.length ? `: ${Le.join(", ")}` : "";
          de(`✓ Environment synced${je}`, "success"), await oe();
        } else {
          const Le = K.errors.length ? K.errors.join("; ") : K.message;
          de(`Sync failed: ${Le}`, "error");
        }
      } catch (K) {
        ge(le), de(`Sync error: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
      }
    }
    async function So(le) {
      var K;
      try {
        const Le = await $(le);
        Le.failed.length === 0 ? de(`✓ Repaired ${Le.success} workflow${Le.success === 1 ? "" : "s"}`, "success") : de(`Repaired ${Le.success}, failed: ${Le.failed.length}`, "warning"), await oe();
      } catch (Le) {
        de(`Repair failed: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
      } finally {
        (K = re.value) == null || K.resetRepairingState();
      }
    }
    async function ke() {
      var K, Le;
      const le = de("Repairing environment...", "info", 0);
      try {
        const je = await S("skip", !0);
        if (ge(le), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const ft = ot.length ? `: ${ot.join(", ")}` : "";
          de(`✓ Environment repaired${ft}`, "success"), (K = re.value) == null || K.closeDetailModal(), await oe();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          de(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        ge(le), de(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Le = re.value) == null || Le.resetRepairingEnvironmentState();
      }
    }
    async function Q(le, K) {
      de(`Environment '${le}' created`, "success"), await oe(), O.value && await O.value.loadEnvironments(), K && await mt(le);
    }
    async function He(le) {
      var K;
      if (((K = T.value) == null ? void 0 : K.name) === le) {
        de("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ce.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ce.value = null;
          try {
            const Le = await _(le);
            Le.status === "success" ? (de(`Environment "${le}" deleted`, "success"), await oe(), O.value && await O.value.loadEnvironments()) : de(Le.message || "Failed to delete environment", "error");
          } catch (Le) {
            de(`Error deleting environment: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function gt(le, K) {
      R.value = !1;
      try {
        E.value = await P();
      } catch {
      }
      await mt(le, K);
    }
    function qt() {
      R.value = !1, n("close");
    }
    async function ys(le, K) {
      await mt(le, K);
    }
    async function ws(le) {
      await oe(), await mt(le);
    }
    async function ls(le) {
      E.value = await P(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function Ae() {
      Ce("environments", "all-envs"), setTimeout(() => {
        var le;
        (le = O.value) == null || le.openCreateModal();
      }, 100);
    }
    function is() {
      if (!x.value) return [];
      const le = [], K = x.value.workflows;
      return K.new.length && le.push(`${K.new.length} new workflow(s)`), K.modified.length && le.push(`${K.modified.length} modified workflow(s)`), K.deleted.length && le.push(`${K.deleted.length} deleted workflow(s)`), le;
    }
    return et(async () => {
      try {
        if (E.value = await P(), E.value.state === "no_workspace") {
          R.value = !0, ee.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          R.value = !0, ee.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          R.value = !0, ee.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await oe();
    }), (le, K) => {
      var Le, je, ot, ft, Mt, rs, Gs, js, ln, J, $e, Ne;
      return a(), r("div", GI, [
        t("div", jI, [
          t("div", HI, [
            K[31] || (K[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (a(), r("div", KI)) : y("", !0)
          ]),
          t("div", qI, [
            C(Ar),
            K[34] || (K[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ee(["icon-btn", { spinning: G.value }]),
              onClick: oe,
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
              onClick: K[0] || (K[0] = (Me) => n("close")),
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
        t("div", YI, [
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
                onClick: Qe
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: K[1] || (K[1] = (Me) => Ce("environments", "all-envs"))
          }, [
            x.value ? (a(), r("div", JI, [
              t("span", null, f(((Le = T.value) == null ? void 0 : Le.name) || ((je = x.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", XI, "(" + f(x.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            K[36] || (K[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", QI, [
          t("div", ZI, [
            t("div", eE, [
              t("div", tE, [
                K[37] || (K[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "status" && Te.value === "this-env" }]),
                  onClick: K[2] || (K[2] = (Me) => Ce("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "workflows" }]),
                  onClick: K[3] || (K[3] = (Me) => Ce("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "models-env" }]),
                  onClick: K[4] || (K[4] = (Me) => Ce("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "branches" }]),
                  onClick: K[5] || (K[5] = (Me) => Ce("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "history" }]),
                  onClick: K[6] || (K[6] = (Me) => Ce("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "nodes" }]),
                  onClick: K[7] || (K[7] = (Me) => Ce("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-env" }]),
                  onClick: K[8] || (K[8] = (Me) => Ce("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              K[41] || (K[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", sE, [
                K[38] || (K[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "environments" }]),
                  onClick: K[9] || (K[9] = (Me) => Ce("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "model-index" }]),
                  onClick: K[10] || (K[10] = (Me) => Ce("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "settings" }]),
                  onClick: K[11] || (K[11] = (Me) => Ce("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "debug-workspace" }]),
                  onClick: K[12] || (K[12] = (Me) => Ce("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              K[42] || (K[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", oE, [
                K[40] || (K[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "deploy" }]),
                  onClick: K[13] || (K[13] = (Me) => Ce("deploy", "sharing"))
                }, [
                  K[39] || (K[39] = b(" DEPLOY ", -1)),
                  We(I) > 0 ? (a(), r("span", nE, f(We(I)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "export" }]),
                  onClick: K[14] || (K[14] = (Me) => Ce("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "import" }]),
                  onClick: K[15] || (K[15] = (Me) => Ce("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: ie.value === "remotes" }]),
                  onClick: K[16] || (K[16] = (Me) => Ce("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", aE, [
              C(Nr)
            ])
          ]),
          t("div", lE, [
            ae.value ? (a(), r("div", iE, f(ae.value), 1)) : !x.value && ie.value === "status" ? (a(), r("div", rE, " Loading status... ")) : (a(), r(j, { key: 2 }, [
              ie.value === "status" ? (a(), M(Xm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: re,
                status: x.value,
                "setup-state": Y.value,
                onSwitchBranch: U,
                onCommitChanges: K[17] || (K[17] = (Me) => ve.value = !0),
                onSyncEnvironment: K[18] || (K[18] = (Me) => pe.value = !0),
                onViewWorkflows: K[19] || (K[19] = (Me) => Ce("workflows", "this-env")),
                onViewHistory: K[20] || (K[20] = (Me) => Ce("history", "this-env")),
                onViewDebug: K[21] || (K[21] = (Me) => Ce("debug-env", "this-env")),
                onViewNodes: K[22] || (K[22] = (Me) => Ce("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: ke,
                onStartSetup: K[23] || (K[23] = (Me) => R.value = !0),
                onViewEnvironments: K[24] || (K[24] = (Me) => Ce("environments", "all-envs")),
                onCreateEnvironment: Ae
              }, null, 8, ["status", "setup-state"])) : ie.value === "workflows" ? (a(), M(E0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: H,
                onRefresh: oe
              }, null, 512)) : ie.value === "models-env" ? (a(), M(dw, {
                key: 2,
                onNavigate: D
              })) : ie.value === "branches" ? (a(), M(fv, {
                key: 3,
                branches: V.value,
                current: ((ot = x.value) == null ? void 0 : ot.branch) || null,
                onSwitch: be,
                onCreate: _e,
                onDelete: B
              }, null, 8, ["branches", "current"])) : ie.value === "history" ? (a(), M($v, {
                key: 4,
                commits: W.value,
                onSelect: q,
                onCheckout: De
              }, null, 8, ["commits"])) : ie.value === "nodes" ? (a(), M(l_, {
                key: 5,
                "version-mismatches": ((Mt = (ft = x.value) == null ? void 0 : ft.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: ne,
                onRepairEnvironment: ke,
                onToast: Oe
              }, null, 8, ["version-mismatches"])) : ie.value === "debug-env" ? (a(), M(b2, { key: 6 })) : ie.value === "environments" ? (a(), M(C$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: O,
                onSwitch: mt,
                onCreated: Q,
                onDelete: He
              }, null, 512)) : ie.value === "model-index" ? (a(), M(Pw, {
                key: 8,
                onRefresh: oe
              })) : ie.value === "settings" ? (a(), M(f2, { key: 9 })) : ie.value === "debug-workspace" ? (a(), M(_2, { key: 10 })) : ie.value === "deploy" ? (a(), M(t4, {
                key: 11,
                onToast: Oe,
                onNavigate: D
              })) : ie.value === "export" ? (a(), M(eC, { key: 12 })) : ie.value === "import" ? (a(), M(Kx, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : ie.value === "remotes" ? (a(), M(jk, {
                key: 14,
                onToast: Oe
              })) : y("", !0)
            ], 64))
          ])
        ]),
        te.value ? (a(), M(w4, {
          key: 0,
          commit: te.value,
          onClose: K[25] || (K[25] = (Me) => te.value = null),
          onCheckout: De,
          onCreateBranch: z
        }, null, 8, ["commit"])) : y("", !0),
        ce.value ? (a(), M(tl, {
          key: 1,
          title: ce.value.title,
          message: ce.value.message,
          details: ce.value.details,
          warning: ce.value.warning,
          confirmLabel: ce.value.confirmLabel,
          cancelLabel: ce.value.cancelLabel,
          secondaryLabel: ce.value.secondaryLabel,
          secondaryAction: ce.value.secondaryAction,
          destructive: ce.value.destructive,
          onConfirm: ce.value.onConfirm,
          onCancel: K[26] || (K[26] = (Me) => ce.value = null),
          onSecondary: ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(w6, {
          show: me.value,
          "from-environment": ((rs = T.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": Ue.value,
          onConfirm: lt,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ve.value && x.value ? (a(), M(Or, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: K[27] || (K[27] = (Me) => ve.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        pe.value && x.value ? (a(), M(z6, {
          key: 3,
          show: pe.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: K[28] || (K[28] = (Me) => pe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(P6, {
          show: Pe.value,
          state: Ye.value.state,
          progress: Ye.value.progress,
          message: Ye.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        A.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: K[30] || (K[30] = rt((Me) => A.value = !1, ["self"]))
        }, [
          t("div", cE, [
            t("div", dE, [
              K[44] || (K[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: K[29] || (K[29] = (Me) => A.value = !1)
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
            t("div", uE, [
              K[45] || (K[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", fE, [
                (a(!0), r(j, null, we(F.value, (Me) => (a(), r("div", {
                  key: Me.name,
                  class: Ee(["env-item", { current: Me.is_current }])
                }, [
                  t("div", mE, [
                    t("div", vE, [
                      t("span", pE, f(Me.is_current ? "●" : "○"), 1),
                      t("span", gE, f(Me.name), 1),
                      Me.current_branch ? (a(), r("span", hE, "(" + f(Me.current_branch) + ")", 1)) : y("", !0),
                      Me.is_current ? (a(), r("span", yE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", wE, f(Me.workflow_count) + " workflows • " + f(Me.node_count) + " nodes ", 1)
                  ]),
                  Me.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Dt) => mt(Me.name)
                  }, " SWITCH ", 8, _E))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        R.value ? (a(), M(WI, {
          key: 5,
          "default-path": ((Gs = E.value) == null ? void 0 : Gs.default_path) || "~/comfygit",
          "detected-models-dir": ((js = E.value) == null ? void 0 : js.detected_models_dir) || null,
          "initial-step": ee.value,
          "existing-environments": ((ln = E.value) == null ? void 0 : ln.environments) || [],
          "cli-installed": ((J = E.value) == null ? void 0 : J.cli_installed) ?? !0,
          "setup-state": (($e = E.value) == null ? void 0 : $e.state) || "no_workspace",
          "workspace-path": ((Ne = E.value) == null ? void 0 : Ne.workspace_path) || null,
          onComplete: gt,
          onClose: qt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", bE, [
          C(iu, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(j, null, we(xe.value, (Me) => (a(), r("div", {
                key: Me.id,
                class: Ee(["toast", Me.type])
              }, [
                t("span", kE, f(Me.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), CE = /* @__PURE__ */ ye($E, [["__scopeId", "data-v-037b3ee3"]]), xE = { class: "item-header" }, SE = { class: "item-info" }, IE = { class: "filename" }, EE = { class: "metadata" }, TE = { class: "size" }, PE = {
  key: 0,
  class: "type"
}, RE = { class: "item-actions" }, ME = {
  key: 0,
  class: "progress-section"
}, DE = { class: "progress-bar" }, LE = { class: "progress-stats" }, OE = { class: "downloaded" }, AE = { class: "speed" }, NE = {
  key: 0,
  class: "eta"
}, UE = {
  key: 1,
  class: "status-msg paused"
}, zE = {
  key: 2,
  class: "status-msg queued"
}, FE = {
  key: 3,
  class: "status-msg completed"
}, BE = {
  key: 4,
  class: "status-msg failed"
}, VE = {
  key: 0,
  class: "retries"
}, WE = /* @__PURE__ */ he({
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
      class: Ee(["download-item", `status-${e.item.status}`])
    }, [
      t("div", xE, [
        t("div", SE, [
          t("div", IE, f(e.item.filename), 1),
          t("div", EE, [
            t("span", TE, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", PE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", RE, [
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
      e.item.status === "downloading" ? (a(), r("div", ME, [
        t("div", DE, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", LE, [
          t("span", OE, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", AE, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", NE, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", UE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", zE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", FE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", BE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", VE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ ye(WE, [["__scopeId", "data-v-2110df65"]]), GE = { class: "queue-title" }, jE = { class: "count" }, HE = { class: "queue-actions" }, KE = { class: "action-label" }, qE = {
  key: 0,
  class: "overall-progress"
}, YE = { class: "progress-bar" }, JE = {
  key: 0,
  class: "current-mini"
}, XE = { class: "filename" }, QE = { class: "speed" }, ZE = {
  key: 1,
  class: "queue-content"
}, eT = {
  key: 0,
  class: "section"
}, tT = {
  key: 1,
  class: "section"
}, sT = { class: "section-header" }, oT = { class: "section-label paused" }, nT = { class: "items-list" }, aT = {
  key: 2,
  class: "section"
}, lT = { class: "section-header" }, iT = { class: "section-label" }, rT = { class: "items-list" }, cT = {
  key: 3,
  class: "section"
}, dT = { class: "section-header" }, uT = { class: "section-label" }, fT = { class: "items-list" }, mT = {
  key: 4,
  class: "section"
}, vT = { class: "section-header" }, pT = { class: "section-label failed" }, gT = { class: "items-list" }, hT = /* @__PURE__ */ he({
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
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, F = W && (W.active > 0 || W.paused > 0);
        V && F && ($ = setTimeout(() => {
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
    function L(x) {
      m(x);
    }
    function I(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, W) => (a(), M(yt, { to: "body" }, [
      We(d) ? (a(), r("div", {
        key: 0,
        class: Ee(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (V) => S.value = !S.value)
        }, [
          t("div", GE, [
            W[4] || (W[4] = t("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", jE, "(" + f(We(u)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", HE, [
            t("span", KE, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), r("div", ZE, [
          We(o) ? (a(), r("div", eT, [
            W[6] || (W[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(Mo, {
              item: We(o),
              onCancel: W[1] || (W[1] = (V) => L(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", tT, [
            t("div", sT, [
              t("span", oT, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...V) => We(w) && We(w)(...V))
              }, "Resume All")
            ]),
            t("div", nT, [
              (a(!0), r(j, null, we(We(c), (V) => (a(), M(Mo, {
                key: V.id,
                item: V,
                onResume: (F) => We(g)(V.id),
                onRemove: (F) => We(p)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", aT, [
            t("div", lT, [
              t("span", iT, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", rT, [
              (a(!0), r(j, null, we(We(n), (V) => (a(), M(Mo, {
                key: V.id,
                item: V,
                onCancel: (F) => L(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", cT, [
            t("div", dT, [
              t("span", uT, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...V) => We(_) && We(_)(...V))
              }, "Clear")
            ]),
            t("div", fT, [
              (a(!0), r(j, null, we(We(l).slice(0, 3), (V) => (a(), M(Mo, {
                key: V.id,
                item: V,
                onRemove: (F) => We(p)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", mT, [
            t("div", vT, [
              t("span", pT, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", gT, [
              (a(!0), r(j, null, we(We(i), (V) => (a(), M(Mo, {
                key: V.id,
                item: V,
                onRetry: (F) => We(v)(V.id),
                onRemove: (F) => We(p)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", qE, [
          t("div", YE, [
            t("div", {
              class: "progress-fill",
              style: Ht({ width: `${P.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", JE, [
            t("span", XE, f(We(o).filename), 1),
            t("span", QE, f(I(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), yT = /* @__PURE__ */ ye(hT, [["__scopeId", "data-v-60751cfa"]]), wT = {
  key: 0,
  class: "loading-state"
}, _T = {
  key: 1,
  class: "analysis-results"
}, bT = {
  key: 0,
  class: "section"
}, kT = { class: "section-header" }, $T = { class: "section-title" }, CT = { class: "item-list" }, xT = { class: "package-info" }, ST = { class: "package-name" }, IT = { class: "node-count" }, ET = {
  key: 1,
  class: "installing-badge"
}, TT = {
  key: 2,
  class: "queued-badge"
}, PT = ["title"], RT = {
  key: 4,
  class: "installed-badge"
}, MT = {
  key: 0,
  class: "overflow-note"
}, DT = {
  key: 1,
  class: "section"
}, LT = { class: "section-header" }, OT = { class: "section-title" }, AT = { class: "item-list" }, NT = { class: "node-type" }, UT = {
  key: 0,
  class: "overflow-note"
}, zT = {
  key: 2,
  class: "section"
}, FT = { class: "section-header" }, BT = { class: "section-title" }, VT = { class: "item-list" }, WT = { class: "model-info" }, GT = { class: "model-name" }, jT = {
  key: 1,
  class: "queued-badge"
}, HT = {
  key: 1,
  class: "no-url"
}, KT = {
  key: 0,
  class: "overflow-note"
}, qT = { class: "dont-show-again" }, YT = /* @__PURE__ */ he({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), d = k(/* @__PURE__ */ new Map()), u = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(null), w = k(0), p = k(/* @__PURE__ */ new Map()), { addToQueue: _ } = ko(), { queueNodeInstall: S } = at(), $ = N(() => P.value.length > 0 || I.value.length > 0 || x.value.length > 0), P = N(() => {
      var X, ie;
      if (!((X = n.value) != null && X.nodes)) return [];
      const Z = /* @__PURE__ */ new Map(), se = (n.value.nodes.resolved || []).filter((Te) => {
        var Ce;
        return !Te.is_installed && ((Ce = Te.package) == null ? void 0 : Ce.package_id);
      });
      for (const Te of se) {
        const Ce = Te.package.package_id;
        Z.has(Ce) || Z.set(Ce, {
          package_id: Ce,
          title: Te.package.title || Ce,
          node_count: 0,
          node_types: [],
          repository: Te.package.repository || null,
          latest_version: Te.package.latest_version || null
        });
        const D = Z.get(Ce);
        D.node_count++, D.node_types.push(((ie = Te.reference) == null ? void 0 : ie.node_type) || Te.node_type);
      }
      return Array.from(Z.values());
    }), L = N(() => P.value.reduce((Z, se) => Z + se.node_count, 0)), I = N(() => {
      var Z;
      return (Z = n.value) != null && Z.nodes ? (n.value.nodes.unresolved || []).map((se) => {
        var X;
        return {
          node_type: ((X = se.reference) == null ? void 0 : X.node_type) || se.node_type
        };
      }) : [];
    }), x = N(() => {
      var X;
      if (!((X = n.value) != null && X.models)) return [];
      const Z = (n.value.models.resolved || []).filter(
        (ie) => ie.match_type === "download_intent" || ie.match_type === "property_download_intent" || ie.match_type === "not_found"
      ).map((ie) => {
        var Te, Ce, D, U;
        return {
          filename: ((Ce = (Te = ie.reference) == null ? void 0 : Te.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((D = ie.reference) == null ? void 0 : D.widget_value) || ie.widget_value,
          widget_value: ((U = ie.reference) == null ? void 0 : U.widget_value) || ie.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ie.download_source || null,
          targetPath: ie.target_path || null,
          canDownload: !!(ie.download_source && ie.target_path)
        };
      }), se = (n.value.models.unresolved || []).map((ie) => {
        var Te, Ce, D, U;
        return {
          filename: ((Ce = (Te = ie.reference) == null ? void 0 : Te.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((D = ie.reference) == null ? void 0 : D.widget_value) || ie.widget_value,
          widget_value: ((U = ie.reference) == null ? void 0 : U.widget_value) || ie.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...Z, ...se];
    }), W = N(() => x.value.filter((Z) => Z.canDownload)), V = N(() => P.value.length > 0 && P.value.every(
      (Z) => i.value.has(Z.package_id) || c.value.has(Z.package_id) || d.value.has(Z.package_id)
    )), F = N(() => W.value.length > 0 && W.value.every((Z) => u.value.has(Z.url))), T = N(() => P.value.length > 0 || W.value.length > 0), E = N(() => {
      const Z = P.value.length === 0 || V.value, se = W.value.length === 0 || F.value;
      return Z && se;
    });
    async function R(Z) {
      const se = Z.package_id;
      if (!(i.value.has(se) || c.value.has(se) || d.value.has(se))) {
        v.value = se;
        try {
          const { ui_id: X } = await S({
            id: se,
            version: Z.latest_version || "latest",
            selected_version: Z.latest_version || "latest",
            repository: Z.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          p.value.set(X, se), c.value.add(se);
        } catch (X) {
          console.error("[ComfyGit] Failed to queue package install:", X), d.value.set(se, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function ee(Z) {
      !Z.url || !Z.targetPath || u.value.has(Z.url) || (_([{
        workflow: "unsaved",
        filename: Z.filename,
        url: Z.url,
        targetPath: Z.targetPath
      }]), u.value.add(Z.url));
    }
    async function Y() {
      for (const Z of P.value)
        !i.value.has(Z.package_id) && !c.value.has(Z.package_id) && !d.value.has(Z.package_id) && await R(Z);
    }
    function G() {
      const Z = W.value.filter(
        (se) => !u.value.has(se.url)
      );
      if (Z.length !== 0) {
        _(Z.map((se) => ({
          workflow: "unsaved",
          filename: se.filename,
          url: se.url,
          targetPath: se.targetPath
        })));
        for (const se of Z)
          u.value.add(se.url);
      }
    }
    function ae() {
      Y(), G();
    }
    function te(Z) {
      let se = 5381;
      for (let X = 0; X < Z.length; X++)
        se = (se << 5) + se ^ Z.charCodeAt(X);
      return Math.abs(se).toString(16).padStart(8, "0");
    }
    function A(Z) {
      const se = ((Z == null ? void 0 : Z.nodes) || []).map((X) => `${X.id}:${X.type}`).sort().join(",");
      return te(se);
    }
    function H(Z) {
      const se = A(Z);
      return localStorage.getItem("comfygit:popup-dismissed:" + se) !== "true";
    }
    function O() {
      g.value && (m.value ? localStorage.setItem("comfygit:popup-dismissed:" + g.value, "true") : localStorage.removeItem("comfygit:popup-dismissed:" + g.value));
    }
    async function re(Z) {
      if (H(Z)) {
        s.value = !0, o.value = null, g.value = A(Z), i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), d.value = /* @__PURE__ */ new Map(), u.value = /* @__PURE__ */ new Set(), p.value = /* @__PURE__ */ new Map(), m.value = !1, w.value = 0;
        try {
          const se = await fetch("/v2/comfygit/workflow/analyze-json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ workflow: Z, name: "unsaved" })
          });
          if (!se.ok) {
            const X = await se.json();
            throw new Error(X.error || "Failed to analyze workflow");
          }
          n.value = await se.json(), $.value && (l.value = !0);
        } catch (se) {
          console.error("[ComfyGit] Failed to analyze workflow:", se);
        } finally {
          s.value = !1;
        }
      }
    }
    function me() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), Pe();
    }
    function Pe() {
      l.value = !1, n.value = null, g.value = null;
    }
    function Ue(Z) {
      const { workflow: se } = Z.detail;
      se && re(se);
    }
    function ze(Z) {
      var ie;
      const se = (ie = Z.detail) == null ? void 0 : ie.ui_id, X = p.value.get(se);
      X && (v.value = X, console.log("[ComfyGit] Installing package:", X));
    }
    function Ye(Z) {
      var Te, Ce, D, U, ne, ce, ve;
      const se = (Te = Z.detail) == null ? void 0 : Te.ui_id, X = p.value.get(se), ie = (D = (Ce = Z.detail) == null ? void 0 : Ce.status) == null ? void 0 : D.status_str;
      if (X) {
        if (p.value.delete(se), c.value.delete(X), v.value === X && (v.value = null), ie === "success")
          i.value.add(X), w.value++, console.log("[ComfyGit] Package installed successfully:", X);
        else {
          const pe = ((ce = (ne = (U = Z.detail) == null ? void 0 : U.status) == null ? void 0 : ne.messages) == null ? void 0 : ce[0]) || ((ve = Z.detail) == null ? void 0 : ve.result) || "Unknown error";
          d.value.set(X, pe), console.error("[ComfyGit] Package install failed:", X, pe);
        }
        p.value.size === 0 && w.value > 0 && window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        }));
      }
    }
    function Fe() {
      var Z;
      return (Z = window.app) == null ? void 0 : Z.api;
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", Ue);
      const Z = Fe();
      Z && (Z.addEventListener("cm-task-started", ze), Z.addEventListener("cm-task-completed", Ye));
    }), oo(() => {
      window.removeEventListener("comfygit:workflow-loaded", Ue);
      const Z = Fe();
      Z && (Z.removeEventListener("cm-task-started", ze), Z.removeEventListener("cm-task-completed", Ye));
    }), (Z, se) => l.value ? (a(), M(vt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: Pe
    }, {
      body: h(() => [
        s.value ? (a(), r("div", wT, [...se[1] || (se[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && $.value ? (a(), r("div", _T, [
          P.value.length > 0 ? (a(), r("div", bT, [
            t("div", kT, [
              t("span", $T, "Missing Custom Nodes (" + f(L.value) + ")", 1),
              P.value.length > 1 ? (a(), M(Re, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: V.value,
                onClick: Y
              }, {
                default: h(() => [
                  b(f(V.value ? "All Queued" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", CT, [
              (a(!0), r(j, null, we(P.value.slice(0, 5), (X) => (a(), r("div", {
                key: X.package_id,
                class: "package-item"
              }, [
                t("div", xT, [
                  t("span", ST, f(X.title), 1),
                  t("span", IT, "(" + f(X.node_count) + " " + f(X.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                !i.value.has(X.package_id) && !c.value.has(X.package_id) && !d.value.has(X.package_id) ? (a(), M(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: v.value === X.package_id,
                  onClick: (ie) => R(X)
                }, {
                  default: h(() => [
                    b(f(v.value === X.package_id ? "Queueing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : v.value === X.package_id ? (a(), r("span", ET, "Installing...")) : c.value.has(X.package_id) ? (a(), r("span", TT, "Queued")) : d.value.has(X.package_id) ? (a(), r("span", {
                  key: 3,
                  class: "failed-badge",
                  title: d.value.get(X.package_id)
                }, "Failed ⚠", 8, PT)) : (a(), r("span", RT, "Installed"))
              ]))), 128)),
              P.value.length > 5 ? (a(), r("div", MT, " ...and " + f(P.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          I.value.length > 0 ? (a(), r("div", DT, [
            t("div", LT, [
              t("span", OT, "Unknown Nodes (" + f(I.value.length) + ")", 1)
            ]),
            t("div", AT, [
              (a(!0), r(j, null, we(I.value.slice(0, 5), (X) => (a(), r("div", {
                key: X.node_type,
                class: "item"
              }, [
                t("code", NT, f(X.node_type), 1),
                se[2] || (se[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              I.value.length > 5 ? (a(), r("div", UT, " ...and " + f(I.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          x.value.length > 0 ? (a(), r("div", zT, [
            t("div", FT, [
              t("span", BT, "Missing Models (" + f(x.value.length) + ")", 1),
              W.value.length > 1 ? (a(), M(Re, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: F.value,
                onClick: G
              }, {
                default: h(() => [
                  b(f(F.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", VT, [
              (a(!0), r(j, null, we(x.value.slice(0, 5), (X) => (a(), r("div", {
                key: X.widget_value,
                class: "model-item"
              }, [
                t("div", WT, [
                  t("span", GT, f(X.filename), 1)
                ]),
                X.canDownload ? (a(), r(j, { key: 0 }, [
                  u.value.has(X.url) ? (a(), r("span", jT, "Queued")) : (a(), M(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (ie) => ee(X)
                  }, {
                    default: h(() => [...se[3] || (se[3] = [
                      b(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), r("span", HT, "Manual download required"))
              ]))), 128)),
              x.value.length > 5 ? (a(), r("div", KT, " ...and " + f(x.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", qT, [
            C(Pa, {
              modelValue: m.value,
              "onUpdate:modelValue": [
                se[0] || (se[0] = (X) => m.value = X),
                O
              ]
            }, {
              default: h(() => [...se[4] || (se[4] = [
                b(" Don't show again for this workflow ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Re, {
          variant: "secondary",
          onClick: Pe
        }, {
          default: h(() => [...se[5] || (se[5] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        T.value ? (a(), M(Re, {
          key: 0,
          variant: "primary",
          disabled: E.value,
          onClick: ae
        }, {
          default: h(() => [
            b(f(E.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : (a(), M(Re, {
          key: 1,
          variant: "primary",
          onClick: me
        }, {
          default: h(() => [...se[6] || (se[6] = [
            b("Open ComfyGit Panel", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), JT = /* @__PURE__ */ ye(YT, [["__scopeId", "data-v-a95f2d19"]]), XT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', QT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', ZT = {
  comfy: XT,
  phosphor: QT
}, ol = "comfy", Ur = "comfygit-theme";
let Ys = null, zr = ol;
function e7() {
  try {
    const e = localStorage.getItem(Ur);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ol;
}
function Fr(e = ol) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = ZT[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), zr = e;
  try {
    localStorage.setItem(Ur, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function t7() {
  return zr;
}
function s7(e) {
  Fr(e);
}
function o7(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const nl = document.createElement("link");
nl.rel = "stylesheet";
nl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(nl);
const n7 = e7();
Fr(n7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), s7(e);
  },
  getTheme: () => {
    const e = t7();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Jt = null, Ot = null, jo = null, Do = null, Ql = null, Lo = null, Zl = null;
const ho = k(null);
let al = "managed", Br = !1;
async function Cn() {
  var e;
  if (!((e = Bt) != null && e.api)) return null;
  try {
    const s = await Bt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ho.value = await s.json());
  } catch {
  }
}
async function Ra() {
  var e;
  if ((e = Bt) != null && e.api)
    try {
      const s = await Bt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        al = o.state, Br = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ma() {
  var s;
  if (al === "managed" || !Br) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function a7() {
  if (!ho.value) return !1;
  const e = ho.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ho.value.has_changes;
}
function pa(e) {
  Jt && Jt.remove(), Jt = document.createElement("div"), Jt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Jt.appendChild(s), Jt.addEventListener("click", (l) => {
    l.target === Jt && ga();
  });
  const o = (l) => {
    l.key === "Escape" && (ga(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Jn({
    render: () => nn(CE, {
      initialView: e,
      onClose: ga,
      onStatusUpdate: async (l) => {
        ho.value = l, Ho(), await Ra(), Da(), Ma();
      }
    })
  }).mount(s), document.body.appendChild(Jt);
}
function ga() {
  Jt && (Jt.remove(), Jt = null);
}
function l7(e) {
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
  document.addEventListener("keydown", n), jo = Jn({
    render: () => nn(Or, {
      status: ho.value,
      onClose: Oo,
      onCommitted: (l) => {
        Oo(), i7(l.success, l.message), Cn().then(Ho);
      }
    })
  }), jo.mount(Ot), document.body.appendChild(Ot);
}
function Oo() {
  jo && (jo.unmount(), jo = null), Ot && (Ot.remove(), Ot = null);
}
function i7(e, s) {
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
function r7() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", Ql = Jn({
    render: () => nn(yT)
  }), Ql.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function c7() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", Zl = Jn({
    render: () => nn(JT)
  }), Zl.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Vt = null;
function Ho() {
  if (!Vt) return;
  const e = Vt.querySelector(".commit-indicator");
  e && (e.style.display = a7() ? "block" : "none");
}
function Da() {
  if (!Vt) return;
  const e = al !== "managed";
  Vt.disabled = e, Vt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Vr = document.createElement("style");
Vr.textContent = `
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
document.head.appendChild(Vr);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = pa, Vt = document.createElement("button"), Vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Vt.innerHTML = 'Commit <span class="commit-indicator"></span>', Vt.title = "Quick Commit", Vt.onclick = () => l7(Vt), e.appendChild(s), e.appendChild(Vt), (i = (l = Bt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Bt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), r7(), c7(), window.addEventListener("comfygit:open-panel", ((c) => {
      var u;
      const d = (u = c.detail) == null ? void 0 : u.initialView;
      pa(d);
    }));
    const { loadPendingDownloads: o } = ko();
    o(), await Promise.all([Cn(), Ra()]), Ho(), Da(), Ma(), setTimeout(Ma, 100), setInterval(async () => {
      await Promise.all([Cn(), Ra()]), Ho(), Da();
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
        const L = document.createElement("button");
        L.textContent = "View Logs", L.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, L.onmouseover = () => L.style.background = "#c62828", L.onmouseout = () => L.style.background = "#e53935", L.onclick = () => {
          p.remove(), pa("debug-env");
        }, p.appendChild(L);
        const I = document.createElement("button");
        I.textContent = "×", I.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => p.remove(), p.appendChild(I), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const L = document.createElement("button");
        L.textContent = "Apply Changes", L.style.cssText = `
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
        `, L.onmouseover = () => L.style.background = "rgba(255,255,255,0.1)", L.onmouseout = () => L.style.background = "transparent", L.onclick = async () => {
          L.disabled = !0, L.textContent = "Restarting...", L.style.opacity = "0.7", $.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const x = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Bt.refreshComboInNodes && (await Bt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", L.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (W) {
                console.error("[ComfyGit] Failed to refresh nodes:", W), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", L.style.display = "none";
              }
            };
            n.addEventListener("reconnected", x, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (x) {
            console.error("[ComfyGit] Failed to restart:", x), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", L.textContent = "Try Again", L.disabled = !1, L.style.opacity = "1";
          }
        }, p.appendChild(L);
        const I = document.createElement("button");
        I.textContent = "×", I.title = "Dismiss (restart later)", I.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => p.remove(), p.appendChild(I), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Cn(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : d()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = o7(g.detail);
        w && u(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
