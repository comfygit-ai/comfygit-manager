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
}, ti = () => !1, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Oa = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Aa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, jr = Object.prototype.hasOwnProperty, Ze = (e, s) => jr.call(e, s), Ve = Array.isArray, mo = (e) => tn(e) === "[object Map]", bo = (e) => tn(e) === "[object Set]", ll = (e) => tn(e) === "[object Date]", je = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", si = (e) => (tt(e) || je(e)) && je(e.then) && je(e.catch), oi = Object.prototype.toString, tn = (e) => oi.call(e), Hr = (e) => tn(e).slice(8, -1), ni = (e) => tn(e) === "[object Object]", Na = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, No = /* @__PURE__ */ La(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Un = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Kr = /-\w/g, jt = Un(
  (e) => e.replace(Kr, (s) => s.slice(1).toUpperCase())
), qr = /\B([A-Z])/g, Bs = Un(
  (e) => e.replace(qr, "-$1").toLowerCase()
), zn = Un((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qn = Un(
  (e) => e ? `on${zn(e)}` : ""
), Us = (e, s) => !Object.is(e, s), yn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ai = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Fn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Yr = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let il;
const Bn = () => il || (il = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ht(e) {
  if (Ve(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? Zr(n) : Ht(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ct(e) || tt(e))
    return e;
}
const Jr = /;(?![^(]*\))/g, Xr = /:([^]+)/, Qr = /\/\*[^]*?\*\//g;
function Zr(e) {
  const s = {};
  return e.replace(Qr, "").split(Jr).forEach((o) => {
    if (o) {
      const n = o.split(Xr);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Pe(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Ve(e))
    for (let o = 0; o < e.length; o++) {
      const n = Pe(e[o]);
      n && (s += n + " ");
    }
  else if (tt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const ec = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tc = /* @__PURE__ */ La(ec);
function li(e) {
  return !!e || e === "";
}
function sc(e, s) {
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
  if (o = Ve(e), n = Ve(s), o || n)
    return o && n ? sc(e, s) : !1;
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
const ii = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Ve(e) || tt(e) && (e.toString === oi || !je(e.toString)) ? ii(e) ? f(e.value) : JSON.stringify(e, ri, 2) : String(e), ri = (e, s) => ii(s) ? ri(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Zn(n, i) + " =>"] = l, o),
    {}
  )
} : bo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Zn(o))
} : ts(s) ? Zn(s) : tt(s) && !Ve(s) && !ni(s) ? String(s) : s, Zn = (e, s = "") => {
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
class oc {
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
function nc() {
  return Lt;
}
let nt;
const ea = /* @__PURE__ */ new WeakSet();
class ci {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ui(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rl(this), fi(this);
    const s = nt, o = Qt;
    nt = this, Qt = !0;
    try {
      return this.fn();
    } finally {
      mi(this), nt = s, Qt = o, this.flags &= -3;
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
let di = 0, Uo, zo;
function ui(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = zo, zo = e;
    return;
  }
  e.next = Uo, Uo = e;
}
function za() {
  di++;
}
function Fa() {
  if (--di > 0)
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
function fi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function mi(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), Ba(n), ac(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function ha(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (vi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function vi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ha(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = Qt;
  nt = e, Qt = !0;
  try {
    fi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Us(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Qt = n, mi(e), e.flags &= -3;
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
function ac(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Qt = !0;
const pi = [];
function Ss() {
  pi.push(Qt), Qt = !1;
}
function Is() {
  const e = pi.pop();
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
class lc {
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
      o = this.activeLink = new lc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, gi(o);
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
function gi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        gi(n);
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
    const u = Ve(e), m = u && Na(o);
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
const ic = {
  __proto__: null,
  [Symbol.iterator]() {
    return ta(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Ve(s) ? ao(s) : s)
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
const rc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const c = Vn(e), d = c !== e && !Wt(e), u = c[s];
  if (u !== rc[s]) {
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
const cc = /* @__PURE__ */ La("__proto__,__v_isRef,__isVue"), hi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function dc(e) {
  ts(e) || (e = String(e));
  const s = Xe(this);
  return wt(s, "has", e), s.hasOwnProperty(e);
}
class yi {
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
      return n === (l ? i ? _c : ki : i ? bi : _i).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Ve(s);
    if (!l) {
      let u;
      if (c && (u = ic[o]))
        return u;
      if (o === "hasOwnProperty")
        return dc;
    }
    const d = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((ts(o) ? hi.has(o) : cc(o)) || (l || wt(s, "get", o), i))
      return d;
    if ($t(d)) {
      const u = c && Na(o) ? d : d.value;
      return l && tt(u) ? xn(u) : u;
    }
    return tt(d) ? l ? xn(d) : Vs(d) : d;
  }
}
class wi extends yi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Ve(s) && Na(o);
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
    return (!ts(o) || !hi.has(o)) && wt(s, "has", o), n;
  }
  ownKeys(s) {
    return wt(
      s,
      "iterate",
      Ve(s) ? "length" : Qs
    ), Reflect.ownKeys(s);
  }
}
class uc extends yi {
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
const fc = /* @__PURE__ */ new wi(), mc = /* @__PURE__ */ new uc(), vc = /* @__PURE__ */ new wi(!0);
const _a = (e) => e, rn = (e) => Reflect.getPrototypeOf(e);
function pc(e, s, o) {
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
function gc(e, s) {
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
    o[l] = pc(l, e, s);
  }), o;
}
function Wa(e, s) {
  const o = gc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const hc = {
  get: /* @__PURE__ */ Wa(!1, !1)
}, yc = {
  get: /* @__PURE__ */ Wa(!1, !0)
}, wc = {
  get: /* @__PURE__ */ Wa(!0, !1)
};
const _i = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), _c = /* @__PURE__ */ new WeakMap();
function bc(e) {
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
function kc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bc(Hr(e));
}
function Vs(e) {
  return Es(e) ? e : Ga(
    e,
    !1,
    fc,
    hc,
    _i
  );
}
function $c(e) {
  return Ga(
    e,
    !1,
    vc,
    yc,
    bi
  );
}
function xn(e) {
  return Ga(
    e,
    !0,
    mc,
    wc,
    ki
  );
}
function Ga(e, s, o, n, l) {
  if (!tt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = kc(e);
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
function Cc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && ai(e, "__v_skip", !0), e;
}
const ss = (e) => tt(e) ? Vs(e) : e, yo = (e) => tt(e) ? xn(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return xc(e, !1);
}
function xc(e, s) {
  return $t(e) ? e : new Sc(e, s);
}
class Sc {
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
function Ge(e) {
  return $t(e) ? e.value : e;
}
const Ic = {
  get: (e, s, o) => s === "__v_raw" ? e : Ge(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function $i(e) {
  return Zs(e) ? e : new Proxy(e, Ic);
}
class Ec {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ko - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return ui(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return vi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Tc(e, s, o = !1) {
  let n, l;
  return je(e) ? n = e : (n = e.get, l = e.set), new Ec(n, l, o);
}
const dn = {}, Sn = /* @__PURE__ */ new WeakMap();
let Js;
function Pc(e, s = !1, o = Js) {
  if (o) {
    let n = Sn.get(o);
    n || Sn.set(o, n = []), n.push(e);
  }
}
function Rc(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: d, call: u } = o, m = (x) => l ? x : Wt(x) || l === !1 || l === 0 ? Cs(x, 1) : Cs(x);
  let v, g, w, p, _ = !1, S = !1;
  if ($t(e) ? (g = () => e.value, _ = Wt(e)) : Zs(e) ? (g = () => m(e), _ = !0) : Ve(e) ? (S = !0, _ = e.some((x) => Zs(x) || Wt(x)), g = () => e.map((x) => {
    if ($t(x))
      return x.value;
    if (Zs(x))
      return m(x);
    if (je(x))
      return u ? u(x, 2) : x();
  })) : je(e) ? s ? g = u ? () => u(e, 2) : e : g = () => {
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
    const x = g, H = l === !0 ? 1 / 0 : l;
    g = () => Cs(x(), H);
  }
  const $ = nc(), P = () => {
    v.stop(), $ && $.active && Aa($.effects, v);
  };
  if (i && s) {
    const x = s;
    s = (...H) => {
      x(...H), P();
    };
  }
  let D = S ? new Array(e.length).fill(dn) : dn;
  const E = (x) => {
    if (!(!(v.flags & 1) || !v.dirty && !x))
      if (s) {
        const H = v.run();
        if (l || _ || (S ? H.some((V, F) => Us(V, D[F])) : Us(H, D))) {
          w && w();
          const V = Js;
          Js = v;
          try {
            const F = [
              H,
              // pass undefined as the old value when it's changed for the first time
              D === dn ? void 0 : S && D[0] === dn ? [] : D,
              p
            ];
            D = H, u ? u(s, 3, F) : (
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
  return d && d(E), v = new ci(g), v.scheduler = c ? () => c(E, !1) : E, p = (x) => Pc(x, !1, v), w = v.onStop = () => {
    const x = Sn.get(v);
    if (x) {
      if (u)
        u(x, 4);
      else
        for (const H of x) H();
      Sn.delete(v);
    }
  }, s ? n ? E(!0) : D = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    Cs(e.value, s, o);
  else if (Ve(e))
    for (let n = 0; n < e.length; n++)
      Cs(e[n], s, o);
  else if (bo(e) || mo(e))
    e.forEach((n) => {
      Cs(n, s, o);
    });
  else if (ni(e)) {
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
  if (je(e)) {
    const l = sn(e, s, o, n);
    return l && si(l) && l.catch((i) => {
      Wn(i, s, o);
    }), l;
  }
  if (Ve(e)) {
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
  Mc(e, o, l, n, c);
}
function Mc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let ms = -1;
const vo = [];
let As = null, ro = 0;
const Ci = /* @__PURE__ */ Promise.resolve();
let In = null;
function _t(e) {
  const s = In || Ci;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Dc(e) {
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
    !(e.flags & 2) && s >= Yo(o) ? It.push(e) : It.splice(Dc(s), 0, e), e.flags |= 1, xi();
  }
}
function xi() {
  In || (In = Ci.then(Ii));
}
function Lc(e) {
  Ve(e) ? vo.push(...e) : As && e.id === -1 ? As.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), xi();
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
function Si(e) {
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
function Ii(e) {
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
    ms = -1, It.length = 0, Si(), In = null, (It.length || vo.length) && Ii();
  }
}
let ht = null, Ei = null;
function En(e) {
  const s = ht;
  return ht = e, Ei = e && e.type.__scopeId || null, s;
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
function Ye(e, s) {
  if (ht === null)
    return e;
  const o = qn(ht), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, d, u = st] = s[l];
    i && (je(i) && (i = {
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
const Ti = Symbol("_vte"), Pi = (e) => e.__isTeleport, Fo = (e) => e && (e.disabled || e.disabled === ""), ul = (e) => e && (e.defer || e.defer === ""), fl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ml = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ba = (e, s) => {
  const o = e && e.to;
  return ct(o) ? s ? s(o) : null : o;
}, Ri = {
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
      const H = s.el = S(""), V = s.anchor = S("");
      p(H, o, n), p(V, o, n);
      const F = (T, M) => {
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
        const T = s.target = ba(s.props, _), M = Mi(T, s, S, p);
        T && (c !== "svg" && fl(T) ? c = "svg" : c !== "mathml" && ml(T) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), P || (F(T, M), wn(s, !1)));
      };
      P && (F(o, V), wn(s, !0)), ul(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (ul(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Ri.process(
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
      const H = s.anchor = e.anchor, V = s.target = e.target, F = s.targetAnchor = e.targetAnchor, I = Fo(e.props), T = I ? o : V, M = I ? H : F;
      if (c === "svg" || fl(V) ? c = "svg" : (c === "mathml" || ml(V)) && (c = "mathml"), x ? (w(
        e.dynamicChildren,
        x,
        T,
        l,
        i,
        c,
        d
      ), Xa(e, s, !0)) : u || g(
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
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : un(
          s,
          o,
          H,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ne = s.target = ba(
          s.props,
          _
        );
        ne && un(
          s,
          ne,
          null,
          m,
          0
        );
      } else I && un(
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
  hydrate: Oc
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
function Oc(e, s, o, n, l, i, {
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
        s.targetAnchor || Mi(p, s, v, m), g(
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
const yt = Ri;
function wn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Mi(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Ti] = i, e && (n(l, e), n(i, e)), i;
}
const ks = Symbol("_leaveCb"), fn = Symbol("_enterCb");
function Di() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return et(() => {
    e.isMounted = !0;
  }), Bi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ft = [Function, Array], Li = {
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
}, Oi = (e) => {
  const s = e.subTree;
  return s.component ? Oi(s.component) : s;
}, Ac = {
  name: "BaseTransition",
  props: Li,
  setup(e, { slots: s }) {
    const o = Za(), n = Di();
    return () => {
      const l = s.default && Ka(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Ai(l), c = Xe(e), { mode: d } = c;
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
      if (v && v.type !== bt && !Xs(v, u) && Oi(o).type !== bt) {
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
          const S = Ni(
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
function Ai(e) {
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
const Nc = Ac;
function Ni(e, s) {
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
  } = s, x = String(e.key), H = Ni(o, e), V = (T, M) => {
    T && os(
      T,
      n,
      9,
      M
    );
  }, F = (T, M) => {
    const ne = M[1];
    V(T, M), Ve(T) ? T.every((J) => J.length <= 1) && ne() : T.length <= 1 && ne();
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
      const ne = H[x];
      ne && Xs(e, ne) && ne.el[ks] && ne.el[ks](), V(M, [T]);
    },
    enter(T) {
      let M = m, ne = v, J = g;
      if (!o.isMounted)
        if (i)
          M = P || m, ne = D || v, J = E || g;
        else
          return;
      let G = !1;
      const ee = T[fn] = (Q) => {
        G || (G = !0, Q ? V(J, [T]) : V(ne, [T]), I.delayedLeave && I.delayedLeave(), T[fn] = void 0);
      };
      M ? F(M, [T, ee]) : ee();
    },
    leave(T, M) {
      const ne = String(e.key);
      if (T[fn] && T[fn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return M();
      V(w, [T]);
      let J = !1;
      const G = T[ks] = (ee) => {
        J || (J = !0, M(), ee ? V(S, [T]) : V(_, [T]), T[ks] = void 0, H[ne] === e && delete H[ne]);
      };
      H[ne] = e, p ? F(p, [T, G]) : G();
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
function oa(e) {
  if (Gn(e))
    return e = zs(e), e.children = null, e;
}
function vl(e) {
  if (!Gn(e))
    return Pi(e.type) && e.children ? Ai(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && je(o.default))
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
    c.type === W ? (c.patchFlag & 128 && l++, n = n.concat(
      Ka(c.children, s, d)
    )) : (s || c.type !== bt) && n.push(d != null ? zs(c, { key: d }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function pe(e, s) {
  return je(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Ui(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Tn = /* @__PURE__ */ new WeakMap();
function Bo(e, s, o, n, l = !1) {
  if (Ve(e)) {
    e.forEach(
      (_, S) => Bo(
        _,
        s && (Ve(s) ? s[S] : s),
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
  const i = n.shapeFlag & 4 ? qn(n.component) : n.el, c = l ? null : i, { i: d, r: u } = e, m = s && s.r, v = d.refs === st ? d.refs = {} : d.refs, g = d.setupState, w = Xe(g), p = g === st ? ti : (_) => Ze(w, _);
  if (m != null && m !== u) {
    if (pl(s), ct(m))
      v[m] = null, p(m) && (g[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (je(u))
    sn(u, d, 12, [c, v]);
  else {
    const _ = ct(u), S = $t(u);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(u) ? g[u] : v[u] : u.value;
          if (l)
            Ve(P) && Aa(P, i);
          else if (Ve(P))
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
function Uc(e, s) {
  zi(e, "a", s);
}
function zc(e, s) {
  zi(e, "da", s);
}
function zi(e, s, o = kt) {
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
      Gn(l.parent.vnode) && Fc(n, s, o, l), l = l.parent;
  }
}
function Fc(e, s, o, n) {
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
}, Bc = Ts("bm"), et = Ts("m"), Vc = Ts(
  "bu"
), Fi = Ts("u"), Bi = Ts(
  "bum"
), oo = Ts("um"), Wc = Ts(
  "sp"
), Gc = Ts("rtg"), jc = Ts("rtc");
function Hc(e, s = kt) {
  jn("ec", e, s);
}
const Kc = "components", Vi = Symbol.for("v-ndc");
function qa(e) {
  return ct(e) ? qc(Kc, e, !1) || e : e || Vi;
}
function qc(e, s, o = !0, n = !1) {
  const l = ht || kt;
  if (l) {
    const i = l.type;
    {
      const d = Ad(
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
  const i = o, c = Ve(e);
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
    if (Ve(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function qe(e, s, o = {}, n, l) {
  if (ht.ce || ht.parent && po(ht.parent) && ht.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), R(
      W,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Wi(i(o)), d = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, u = R(
    W,
    {
      key: (d && !ts(d) ? d : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), u;
}
function Wi(e) {
  return e.some((s) => Qo(s) ? !(s.type === bt || s.type === W && !Wi(s.children)) : !0) ? e : null;
}
const ka = (e) => e ? rr(e) ? qn(e) : ka(e.parent) : null, Vo = (
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
    $options: (e) => ji(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ha(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _t.bind(e.proxy)),
    $watch: (e) => ld.bind(e)
  })
), na = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Yc = {
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
  return Ve(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let $a = !0;
function Jc(e) {
  const s = ji(e), o = e.proxy, n = e.ctx;
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
    beforeUnmount: D,
    destroyed: E,
    unmounted: x,
    render: H,
    renderTracked: V,
    renderTriggered: F,
    errorCaptured: I,
    serverPrefetch: T,
    // public API
    expose: M,
    inheritAttrs: ne,
    // assets
    components: J,
    directives: G,
    filters: ee
  } = s;
  if (m && Xc(m, n, null), c)
    for (const j in c) {
      const L = c[j];
      je(L) && (n[j] = L.bind(o));
    }
  if (l) {
    const j = l.call(o, o);
    tt(j) && (e.data = Vs(j));
  }
  if ($a = !0, i)
    for (const j in i) {
      const L = i[j], se = je(L) ? L.bind(o, o) : je(L.get) ? L.get.bind(o, o) : gs, de = !je(L) && je(L.set) ? L.set.bind(o) : gs, De = N({
        get: se,
        set: de
      });
      Object.defineProperty(n, j, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (ce) => De.value = ce
      });
    }
  if (d)
    for (const j in d)
      Gi(d[j], n, o, j);
  if (u) {
    const j = je(u) ? u.call(o) : u;
    Reflect.ownKeys(j).forEach((L) => {
      od(L, j[L]);
    });
  }
  v && yl(v, e, "c");
  function A(j, L) {
    Ve(L) ? L.forEach((se) => j(se.bind(o))) : L && j(L.bind(o));
  }
  if (A(Bc, g), A(et, w), A(Vc, p), A(Fi, _), A(Uc, S), A(zc, $), A(Hc, I), A(jc, V), A(Gc, F), A(Bi, D), A(oo, x), A(Wc, T), Ve(M))
    if (M.length) {
      const j = e.exposed || (e.exposed = {});
      M.forEach((L) => {
        Object.defineProperty(j, L, {
          get: () => o[L],
          set: (se) => o[L] = se,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === gs && (e.render = H), ne != null && (e.inheritAttrs = ne), J && (e.components = J), G && (e.directives = G), T && Ui(e);
}
function Xc(e, s, o = gs) {
  Ve(e) && (e = Ca(e));
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
    Ve(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Gi(e, s, o, n) {
  let l = n.includes(".") ? qi(o, n) : () => o[n];
  if (ct(e)) {
    const i = s[e];
    je(i) && Ct(l, i);
  } else if (je(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (Ve(e))
      e.forEach((i) => Gi(i, s, o, n));
    else {
      const i = je(e.handler) ? e.handler.bind(o) : s[e.handler];
      je(i) && Ct(l, i, e);
    }
}
function ji(e) {
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
      const d = Qc[c] || o && o[c];
      e[c] = d ? d(e[c], s[c]) : s[c];
    }
  return e;
}
const Qc = {
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
  watch: ed,
  // provide / inject
  provide: wl,
  inject: Zc
};
function wl(e, s) {
  return s ? e ? function() {
    return pt(
      je(e) ? e.call(this, this) : e,
      je(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Zc(e, s) {
  return Ao(Ca(e), Ca(s));
}
function Ca(e) {
  if (Ve(e)) {
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
  return e ? Ve(e) && Ve(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    hl(e),
    hl(s ?? {})
  ) : s;
}
function ed(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function Hi() {
  return {
    app: null,
    config: {
      isNativeTag: ti,
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
let td = 0;
function sd(e, s) {
  return function(n, l = null) {
    je(n) || (n = pt({}, n)), l != null && !tt(l) && (l = null);
    const i = Hi(), c = /* @__PURE__ */ new WeakSet(), d = [];
    let u = !1;
    const m = i.app = {
      _uid: td++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Ud,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return c.has(v) || (v && je(v.install) ? (c.add(v), v.install(m, ...g)) : je(v) && (c.add(v), v(m, ...g))), m;
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
function od(e, s) {
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
      return o && je(s) ? s.call(n && n.proxy) : s;
  }
}
const nd = Symbol.for("v-scx"), ad = () => _n(nd);
function Ct(e, s, o) {
  return Ki(e, s, o);
}
function Ki(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, d = pt({}, o), u = s && n || !s && i !== "post";
  let m;
  if (Zo) {
    if (i === "sync") {
      const p = ad();
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
  const w = Rc(e, s, d);
  return Zo && (m ? m.push(w) : u && w()), w;
}
function ld(e, s, o) {
  const n = this.proxy, l = ct(e) ? e.includes(".") ? qi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  je(s) ? i = s : (i = s.handler, o = s);
  const c = on(this), d = Ki(l, i.bind(n), o);
  return c(), d;
}
function qi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const id = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${jt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function rd(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && id(n, s.slice(7));
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
const cd = /* @__PURE__ */ new WeakMap();
function Yi(e, s, o = !1) {
  const n = o ? cd : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, d = !1;
  if (!je(e)) {
    const u = (m) => {
      const v = Yi(m, s, !0);
      v && (d = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !d ? (tt(e) && n.set(e, null), null) : (Ve(i) ? i.forEach((u) => c[u] = null) : pt(c, i), tt(e) && n.set(e, c), c);
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
  let P, D;
  try {
    if (o.shapeFlag & 4) {
      const x = l || n, H = x;
      P = ps(
        m.call(
          H,
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
      ), D = s.props ? d : dd(d);
    }
  } catch (x) {
    Wo.length = 0, Wn(x, e, 1), P = C(bt);
  }
  let E = P;
  if (D && S !== !1) {
    const x = Object.keys(D), { shapeFlag: H } = E;
    x.length && H & 7 && (i && x.some(Oa) && (D = ud(
      D,
      i
    )), E = zs(E, D, !1, !0));
  }
  return o.dirs && (E = zs(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && to(E, o.transition), P = E, En($), P;
}
const dd = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Nn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, ud = (e, s) => {
  const o = {};
  for (const n in e)
    (!Oa(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function fd(e, s, o) {
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
function md({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Ji = {}, Xi = () => Object.create(Ji), Qi = (e) => Object.getPrototypeOf(e) === Ji;
function vd(e, s, o, n = !1) {
  const l = {}, i = Xi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zi(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : $c(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function pd(e, s, o, n) {
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
    Zi(e, s, l, i) && (m = !0);
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
function Zi(e, s, o, n) {
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
      if (c.type !== Function && !c.skipFactory && je(u)) {
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
const gd = /* @__PURE__ */ new WeakMap();
function er(e, s, o = !1) {
  const n = o ? gd : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, d = [];
  let u = !1;
  if (!je(e)) {
    const v = (g) => {
      u = !0;
      const [w, p] = er(g, s, !0);
      pt(c, w), p && d.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !u)
    return tt(e) && n.set(e, fo), fo;
  if (Ve(i))
    for (let v = 0; v < i.length; v++) {
      const g = jt(i[v]);
      $l(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = jt(v);
      if ($l(g)) {
        const w = i[v], p = c[g] = Ve(w) || je(w) ? { type: w } : pt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (Ve(_))
          for (let P = 0; P < _.length; ++P) {
            const D = _[P], E = je(D) && D.name;
            if (E === "Boolean") {
              S = !0;
              break;
            } else E === "String" && ($ = !1);
          }
        else
          S = je(_) && _.name === "Boolean";
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
const Ya = (e) => e === "_" || e === "_ctx" || e === "$stable", Ja = (e) => Ve(e) ? e.map(ps) : [ps(e)], hd = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Ja(s(...l)), o);
  return n._c = !1, n;
}, tr = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Ya(l)) continue;
    const i = e[l];
    if (je(i))
      s[l] = hd(l, i, n);
    else if (i != null) {
      const c = Ja(i);
      s[l] = () => c;
    }
  }
}, sr = (e, s) => {
  const o = Ja(s);
  e.slots.default = () => o;
}, or = (e, s, o) => {
  for (const n in s)
    (o || !Ya(n)) && (e[n] = s[n]);
}, yd = (e, s, o) => {
  const n = e.slots = Xi();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (or(n, s, o), o && ai(n, "_", l, !0)) : tr(s, n);
  } else s && sr(e, s);
}, wd = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const d = s._;
    d ? o && d === 1 ? i = !1 : or(l, s, o) : (i = !s.$stable, tr(s, l)), c = s;
  } else s && (sr(e, s), c = { default: 1 });
  if (i)
    for (const d in l)
      !Ya(d) && c[d] == null && delete l[d];
}, St = Cd;
function _d(e) {
  return bd(e);
}
function bd(e, s) {
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
  } = e, S = (O, z, oe, le = null, me = null, ve = null, Se = void 0, Ie = null, ae = !!z.dynamicChildren) => {
    if (O === z)
      return;
    O && !Xs(O, z) && (le = Ce(O), ce(O, me, ve, !0), O = null), z.patchFlag === -2 && (ae = !1, z.dynamicChildren = null);
    const { type: fe, ref: ze, shapeFlag: Te } = z;
    switch (fe) {
      case Kn:
        $(O, z, oe, le);
        break;
      case bt:
        P(O, z, oe, le);
        break;
      case la:
        O == null && D(z, oe, le, Se);
        break;
      case W:
        J(
          O,
          z,
          oe,
          le,
          me,
          ve,
          Se,
          Ie,
          ae
        );
        break;
      default:
        Te & 1 ? H(
          O,
          z,
          oe,
          le,
          me,
          ve,
          Se,
          Ie,
          ae
        ) : Te & 6 ? G(
          O,
          z,
          oe,
          le,
          me,
          ve,
          Se,
          Ie,
          ae
        ) : (Te & 64 || Te & 128) && fe.process(
          O,
          z,
          oe,
          le,
          me,
          ve,
          Se,
          Ie,
          ae,
          Ae
        );
    }
    ze != null && me ? Bo(ze, O && O.ref, ve, z || O, !z) : ze == null && O && O.ref != null && Bo(O.ref, null, ve, O, !0);
  }, $ = (O, z, oe, le) => {
    if (O == null)
      n(
        z.el = d(z.children),
        oe,
        le
      );
    else {
      const me = z.el = O.el;
      z.children !== O.children && m(me, z.children);
    }
  }, P = (O, z, oe, le) => {
    O == null ? n(
      z.el = u(z.children || ""),
      oe,
      le
    ) : z.el = O.el;
  }, D = (O, z, oe, le) => {
    [O.el, O.anchor] = _(
      O.children,
      z,
      oe,
      le,
      O.el,
      O.anchor
    );
  }, E = ({ el: O, anchor: z }, oe, le) => {
    let me;
    for (; O && O !== z; )
      me = w(O), n(O, oe, le), O = me;
    n(z, oe, le);
  }, x = ({ el: O, anchor: z }) => {
    let oe;
    for (; O && O !== z; )
      oe = w(O), l(O), O = oe;
    l(z);
  }, H = (O, z, oe, le, me, ve, Se, Ie, ae) => {
    if (z.type === "svg" ? Se = "svg" : z.type === "math" && (Se = "mathml"), O == null)
      V(
        z,
        oe,
        le,
        me,
        ve,
        Se,
        Ie,
        ae
      );
    else {
      const fe = O.el && O.el._isVueCE ? O.el : null;
      try {
        fe && fe._beginPatch(), T(
          O,
          z,
          me,
          ve,
          Se,
          Ie,
          ae
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, V = (O, z, oe, le, me, ve, Se, Ie) => {
    let ae, fe;
    const { props: ze, shapeFlag: Te, transition: Z, dirs: q } = O;
    if (ae = O.el = c(
      O.type,
      ve,
      ze && ze.is,
      ze
    ), Te & 8 ? v(ae, O.children) : Te & 16 && I(
      O.children,
      ae,
      null,
      le,
      me,
      aa(O, ve),
      Se,
      Ie
    ), q && Hs(O, null, le, "created"), F(ae, O, O.scopeId, Se, le), ze) {
      for (const be in ze)
        be !== "value" && !No(be) && i(ae, be, null, ze[be], ve, le);
      "value" in ze && i(ae, "value", null, ze.value, ve), (fe = ze.onVnodeBeforeMount) && ds(fe, le, O);
    }
    q && Hs(O, null, le, "beforeMount");
    const Ne = kd(me, Z);
    Ne && Z.beforeEnter(ae), n(ae, z, oe), ((fe = ze && ze.onVnodeMounted) || Ne || q) && St(() => {
      fe && ds(fe, le, O), Ne && Z.enter(ae), q && Hs(O, null, le, "mounted");
    }, me);
  }, F = (O, z, oe, le, me) => {
    if (oe && p(O, oe), le)
      for (let ve = 0; ve < le.length; ve++)
        p(O, le[ve]);
    if (me) {
      let ve = me.subTree;
      if (z === ve || ar(ve.type) && (ve.ssContent === z || ve.ssFallback === z)) {
        const Se = me.vnode;
        F(
          O,
          Se,
          Se.scopeId,
          Se.slotScopeIds,
          me.parent
        );
      }
    }
  }, I = (O, z, oe, le, me, ve, Se, Ie, ae = 0) => {
    for (let fe = ae; fe < O.length; fe++) {
      const ze = O[fe] = Ie ? Ns(O[fe]) : ps(O[fe]);
      S(
        null,
        ze,
        z,
        oe,
        le,
        me,
        ve,
        Se,
        Ie
      );
    }
  }, T = (O, z, oe, le, me, ve, Se) => {
    const Ie = z.el = O.el;
    let { patchFlag: ae, dynamicChildren: fe, dirs: ze } = z;
    ae |= O.patchFlag & 16;
    const Te = O.props || st, Z = z.props || st;
    let q;
    if (oe && Ks(oe, !1), (q = Z.onVnodeBeforeUpdate) && ds(q, oe, z, O), ze && Hs(z, O, oe, "beforeUpdate"), oe && Ks(oe, !0), (Te.innerHTML && Z.innerHTML == null || Te.textContent && Z.textContent == null) && v(Ie, ""), fe ? M(
      O.dynamicChildren,
      fe,
      Ie,
      oe,
      le,
      aa(z, me),
      ve
    ) : Se || L(
      O,
      z,
      Ie,
      null,
      oe,
      le,
      aa(z, me),
      ve,
      !1
    ), ae > 0) {
      if (ae & 16)
        ne(Ie, Te, Z, oe, me);
      else if (ae & 2 && Te.class !== Z.class && i(Ie, "class", null, Z.class, me), ae & 4 && i(Ie, "style", Te.style, Z.style, me), ae & 8) {
        const Ne = z.dynamicProps;
        for (let be = 0; be < Ne.length; be++) {
          const _e = Ne[be], B = Te[_e], U = Z[_e];
          (U !== B || _e === "value") && i(Ie, _e, B, U, me, oe);
        }
      }
      ae & 1 && O.children !== z.children && v(Ie, z.children);
    } else !Se && fe == null && ne(Ie, Te, Z, oe, me);
    ((q = Z.onVnodeUpdated) || ze) && St(() => {
      q && ds(q, oe, z, O), ze && Hs(z, O, oe, "updated");
    }, le);
  }, M = (O, z, oe, le, me, ve, Se) => {
    for (let Ie = 0; Ie < z.length; Ie++) {
      const ae = O[Ie], fe = z[Ie], ze = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ae.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ae.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(ae, fe) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? g(ae.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          oe
        )
      );
      S(
        ae,
        fe,
        ze,
        null,
        le,
        me,
        ve,
        Se,
        !0
      );
    }
  }, ne = (O, z, oe, le, me) => {
    if (z !== oe) {
      if (z !== st)
        for (const ve in z)
          !No(ve) && !(ve in oe) && i(
            O,
            ve,
            z[ve],
            null,
            me,
            le
          );
      for (const ve in oe) {
        if (No(ve)) continue;
        const Se = oe[ve], Ie = z[ve];
        Se !== Ie && ve !== "value" && i(O, ve, Ie, Se, me, le);
      }
      "value" in oe && i(O, "value", z.value, oe.value, me);
    }
  }, J = (O, z, oe, le, me, ve, Se, Ie, ae) => {
    const fe = z.el = O ? O.el : d(""), ze = z.anchor = O ? O.anchor : d("");
    let { patchFlag: Te, dynamicChildren: Z, slotScopeIds: q } = z;
    q && (Ie = Ie ? Ie.concat(q) : q), O == null ? (n(fe, oe, le), n(ze, oe, le), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      z.children || [],
      oe,
      ze,
      me,
      ve,
      Se,
      Ie,
      ae
    )) : Te > 0 && Te & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (M(
      O.dynamicChildren,
      Z,
      oe,
      me,
      ve,
      Se,
      Ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (z.key != null || me && z === me.subTree) && Xa(
      O,
      z,
      !0
      /* shallow */
    )) : L(
      O,
      z,
      oe,
      ze,
      me,
      ve,
      Se,
      Ie,
      ae
    );
  }, G = (O, z, oe, le, me, ve, Se, Ie, ae) => {
    z.slotScopeIds = Ie, O == null ? z.shapeFlag & 512 ? me.ctx.activate(
      z,
      oe,
      le,
      Se,
      ae
    ) : ee(
      z,
      oe,
      le,
      me,
      ve,
      Se,
      ae
    ) : Q(O, z, ae);
  }, ee = (O, z, oe, le, me, ve, Se) => {
    const Ie = O.component = Rd(
      O,
      le,
      me
    );
    if (Gn(O) && (Ie.ctx.renderer = Ae), Md(Ie, !1, Se), Ie.asyncDep) {
      if (me && me.registerDep(Ie, A, Se), !O.el) {
        const ae = Ie.subTree = C(bt);
        P(null, ae, z, oe), O.placeholder = ae.el;
      }
    } else
      A(
        Ie,
        O,
        z,
        oe,
        me,
        ve,
        Se
      );
  }, Q = (O, z, oe) => {
    const le = z.component = O.component;
    if (fd(O, z, oe))
      if (le.asyncDep && !le.asyncResolved) {
        j(le, z, oe);
        return;
      } else
        le.next = z, le.update();
    else
      z.el = O.el, le.vnode = z;
  }, A = (O, z, oe, le, me, ve, Se) => {
    const Ie = () => {
      if (O.isMounted) {
        let { next: Te, bu: Z, u: q, parent: Ne, vnode: be } = O;
        {
          const We = nr(O);
          if (We) {
            Te && (Te.el = be.el, j(O, Te, Se)), We.asyncDep.then(() => {
              O.isUnmounted || Ie();
            });
            return;
          }
        }
        let _e = Te, B;
        Ks(O, !1), Te ? (Te.el = be.el, j(O, Te, Se)) : Te = be, Z && yn(Z), (B = Te.props && Te.props.onVnodeBeforeUpdate) && ds(B, Ne, Te, be), Ks(O, !0);
        const U = bl(O), re = O.subTree;
        O.subTree = U, S(
          re,
          U,
          // parent may have changed if it's in a teleport
          g(re.el),
          // anchor may have changed if it's in a fragment
          Ce(re),
          O,
          me,
          ve
        ), Te.el = U.el, _e === null && md(O, U.el), q && St(q, me), (B = Te.props && Te.props.onVnodeUpdated) && St(
          () => ds(B, Ne, Te, be),
          me
        );
      } else {
        let Te;
        const { el: Z, props: q } = z, { bm: Ne, m: be, parent: _e, root: B, type: U } = O, re = po(z);
        Ks(O, !1), Ne && yn(Ne), !re && (Te = q && q.onVnodeBeforeMount) && ds(Te, _e, z), Ks(O, !0);
        {
          B.ce && // @ts-expect-error _def is private
          B.ce._def.shadowRoot !== !1 && B.ce._injectChildStyle(U);
          const We = O.subTree = bl(O);
          S(
            null,
            We,
            oe,
            le,
            O,
            me,
            ve
          ), z.el = We.el;
        }
        if (be && St(be, me), !re && (Te = q && q.onVnodeMounted)) {
          const We = z;
          St(
            () => ds(Te, _e, We),
            me
          );
        }
        (z.shapeFlag & 256 || _e && po(_e.vnode) && _e.vnode.shapeFlag & 256) && O.a && St(O.a, me), O.isMounted = !0, z = oe = le = null;
      }
    };
    O.scope.on();
    const ae = O.effect = new ci(Ie);
    O.scope.off();
    const fe = O.update = ae.run.bind(ae), ze = O.job = ae.runIfDirty.bind(ae);
    ze.i = O, ze.id = O.uid, ae.scheduler = () => Ha(ze), Ks(O, !0), fe();
  }, j = (O, z, oe) => {
    z.component = O;
    const le = O.vnode.props;
    O.vnode = z, O.next = null, pd(O, z.props, le, oe), wd(O, z.children, oe), Ss(), dl(O), Is();
  }, L = (O, z, oe, le, me, ve, Se, Ie, ae = !1) => {
    const fe = O && O.children, ze = O ? O.shapeFlag : 0, Te = z.children, { patchFlag: Z, shapeFlag: q } = z;
    if (Z > 0) {
      if (Z & 128) {
        de(
          fe,
          Te,
          oe,
          le,
          me,
          ve,
          Se,
          Ie,
          ae
        );
        return;
      } else if (Z & 256) {
        se(
          fe,
          Te,
          oe,
          le,
          me,
          ve,
          Se,
          Ie,
          ae
        );
        return;
      }
    }
    q & 8 ? (ze & 16 && xe(fe, me, ve), Te !== fe && v(oe, Te)) : ze & 16 ? q & 16 ? de(
      fe,
      Te,
      oe,
      le,
      me,
      ve,
      Se,
      Ie,
      ae
    ) : xe(fe, me, ve, !0) : (ze & 8 && v(oe, ""), q & 16 && I(
      Te,
      oe,
      le,
      me,
      ve,
      Se,
      Ie,
      ae
    ));
  }, se = (O, z, oe, le, me, ve, Se, Ie, ae) => {
    O = O || fo, z = z || fo;
    const fe = O.length, ze = z.length, Te = Math.min(fe, ze);
    let Z;
    for (Z = 0; Z < Te; Z++) {
      const q = z[Z] = ae ? Ns(z[Z]) : ps(z[Z]);
      S(
        O[Z],
        q,
        oe,
        null,
        me,
        ve,
        Se,
        Ie,
        ae
      );
    }
    fe > ze ? xe(
      O,
      me,
      ve,
      !0,
      !1,
      Te
    ) : I(
      z,
      oe,
      le,
      me,
      ve,
      Se,
      Ie,
      ae,
      Te
    );
  }, de = (O, z, oe, le, me, ve, Se, Ie, ae) => {
    let fe = 0;
    const ze = z.length;
    let Te = O.length - 1, Z = ze - 1;
    for (; fe <= Te && fe <= Z; ) {
      const q = O[fe], Ne = z[fe] = ae ? Ns(z[fe]) : ps(z[fe]);
      if (Xs(q, Ne))
        S(
          q,
          Ne,
          oe,
          null,
          me,
          ve,
          Se,
          Ie,
          ae
        );
      else
        break;
      fe++;
    }
    for (; fe <= Te && fe <= Z; ) {
      const q = O[Te], Ne = z[Z] = ae ? Ns(z[Z]) : ps(z[Z]);
      if (Xs(q, Ne))
        S(
          q,
          Ne,
          oe,
          null,
          me,
          ve,
          Se,
          Ie,
          ae
        );
      else
        break;
      Te--, Z--;
    }
    if (fe > Te) {
      if (fe <= Z) {
        const q = Z + 1, Ne = q < ze ? z[q].el : le;
        for (; fe <= Z; )
          S(
            null,
            z[fe] = ae ? Ns(z[fe]) : ps(z[fe]),
            oe,
            Ne,
            me,
            ve,
            Se,
            Ie,
            ae
          ), fe++;
      }
    } else if (fe > Z)
      for (; fe <= Te; )
        ce(O[fe], me, ve, !0), fe++;
    else {
      const q = fe, Ne = fe, be = /* @__PURE__ */ new Map();
      for (fe = Ne; fe <= Z; fe++) {
        const lt = z[fe] = ae ? Ns(z[fe]) : ps(z[fe]);
        lt.key != null && be.set(lt.key, fe);
      }
      let _e, B = 0;
      const U = Z - Ne + 1;
      let re = !1, We = 0;
      const Qe = new Array(U);
      for (fe = 0; fe < U; fe++) Qe[fe] = 0;
      for (fe = q; fe <= Te; fe++) {
        const lt = O[fe];
        if (B >= U) {
          ce(lt, me, ve, !0);
          continue;
        }
        let dt;
        if (lt.key != null)
          dt = be.get(lt.key);
        else
          for (_e = Ne; _e <= Z; _e++)
            if (Qe[_e - Ne] === 0 && Xs(lt, z[_e])) {
              dt = _e;
              break;
            }
        dt === void 0 ? ce(lt, me, ve, !0) : (Qe[dt - Ne] = fe + 1, dt >= We ? We = dt : re = !0, S(
          lt,
          z[dt],
          oe,
          null,
          me,
          ve,
          Se,
          Ie,
          ae
        ), B++);
      }
      const mt = re ? $d(Qe) : fo;
      for (_e = mt.length - 1, fe = U - 1; fe >= 0; fe--) {
        const lt = Ne + fe, dt = z[lt], Rt = z[lt + 1], zt = lt + 1 < ze ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : le;
        Qe[fe] === 0 ? S(
          null,
          dt,
          oe,
          zt,
          me,
          ve,
          Se,
          Ie,
          ae
        ) : re && (_e < 0 || fe !== mt[_e] ? De(dt, oe, zt, 2) : _e--);
      }
    }
  }, De = (O, z, oe, le, me = null) => {
    const { el: ve, type: Se, transition: Ie, children: ae, shapeFlag: fe } = O;
    if (fe & 6) {
      De(O.component.subTree, z, oe, le);
      return;
    }
    if (fe & 128) {
      O.suspense.move(z, oe, le);
      return;
    }
    if (fe & 64) {
      Se.move(O, z, oe, Ae);
      return;
    }
    if (Se === W) {
      n(ve, z, oe);
      for (let Te = 0; Te < ae.length; Te++)
        De(ae[Te], z, oe, le);
      n(O.anchor, z, oe);
      return;
    }
    if (Se === la) {
      E(O, z, oe);
      return;
    }
    if (le !== 2 && fe & 1 && Ie)
      if (le === 0)
        Ie.beforeEnter(ve), n(ve, z, oe), St(() => Ie.enter(ve), me);
      else {
        const { leave: Te, delayLeave: Z, afterLeave: q } = Ie, Ne = () => {
          O.ctx.isUnmounted ? l(ve) : n(ve, z, oe);
        }, be = () => {
          ve._isLeaving && ve[ks](
            !0
            /* cancelled */
          ), Te(ve, () => {
            Ne(), q && q();
          });
        };
        Z ? Z(ve, Ne, be) : be();
      }
    else
      n(ve, z, oe);
  }, ce = (O, z, oe, le = !1, me = !1) => {
    const {
      type: ve,
      props: Se,
      ref: Ie,
      children: ae,
      dynamicChildren: fe,
      shapeFlag: ze,
      patchFlag: Te,
      dirs: Z,
      cacheIndex: q
    } = O;
    if (Te === -2 && (me = !1), Ie != null && (Ss(), Bo(Ie, null, oe, O, !0), Is()), q != null && (z.renderCache[q] = void 0), ze & 256) {
      z.ctx.deactivate(O);
      return;
    }
    const Ne = ze & 1 && Z, be = !po(O);
    let _e;
    if (be && (_e = Se && Se.onVnodeBeforeUnmount) && ds(_e, z, O), ze & 6)
      Re(O.component, oe, le);
    else {
      if (ze & 128) {
        O.suspense.unmount(oe, le);
        return;
      }
      Ne && Hs(O, null, z, "beforeUnmount"), ze & 64 ? O.type.remove(
        O,
        z,
        oe,
        Ae,
        le
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ve !== W || Te > 0 && Te & 64) ? xe(
        fe,
        z,
        oe,
        !1,
        !0
      ) : (ve === W && Te & 384 || !me && ze & 16) && xe(ae, z, oe), le && ge(O);
    }
    (be && (_e = Se && Se.onVnodeUnmounted) || Ne) && St(() => {
      _e && ds(_e, z, O), Ne && Hs(O, null, z, "unmounted");
    }, oe);
  }, ge = (O) => {
    const { type: z, el: oe, anchor: le, transition: me } = O;
    if (z === W) {
      Ee(oe, le);
      return;
    }
    if (z === la) {
      x(O);
      return;
    }
    const ve = () => {
      l(oe), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if (O.shapeFlag & 1 && me && !me.persisted) {
      const { leave: Se, delayLeave: Ie } = me, ae = () => Se(oe, ve);
      Ie ? Ie(O.el, ve, ae) : ae();
    } else
      ve();
  }, Ee = (O, z) => {
    let oe;
    for (; O !== z; )
      oe = w(O), l(O), O = oe;
    l(z);
  }, Re = (O, z, oe) => {
    const { bum: le, scope: me, job: ve, subTree: Se, um: Ie, m: ae, a: fe } = O;
    Cl(ae), Cl(fe), le && yn(le), me.stop(), ve && (ve.flags |= 8, ce(Se, O, z, oe)), Ie && St(Ie, z), St(() => {
      O.isUnmounted = !0;
    }, z);
  }, xe = (O, z, oe, le = !1, me = !1, ve = 0) => {
    for (let Se = ve; Se < O.length; Se++)
      ce(O[Se], z, oe, le, me);
  }, Ce = (O) => {
    if (O.shapeFlag & 6)
      return Ce(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const z = w(O.anchor || O.el), oe = z && z[Ti];
    return oe ? w(oe) : z;
  };
  let he = !1;
  const ue = (O, z, oe) => {
    O == null ? z._vnode && ce(z._vnode, null, null, !0) : S(
      z._vnode || null,
      O,
      z,
      null,
      null,
      null,
      oe
    ), z._vnode = O, he || (he = !0, dl(), Si(), he = !1);
  }, Ae = {
    p: S,
    um: ce,
    m: De,
    r: ge,
    mt: ee,
    mc: I,
    pc: L,
    pbc: M,
    n: Ce,
    o: e
  };
  return {
    render: ue,
    hydrate: void 0,
    createApp: sd(ue)
  };
}
function aa({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ks({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function kd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function Xa(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Ve(n) && Ve(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let d = l[i];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = l[i] = Ns(l[i]), d.el = c.el), !o && d.patchFlag !== -2 && Xa(c, d)), d.type === Kn && // avoid cached text nodes retaining detached dom nodes
      d.patchFlag !== -1 && (d.el = c.el), d.type === bt && !d.el && (d.el = c.el);
    }
}
function $d(e) {
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
function nr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : nr(s);
}
function Cl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const ar = (e) => e.__isSuspense;
function Cd(e, s) {
  s && s.pendingBranch ? Ve(e) ? s.effects.push(...e) : s.effects.push(e) : Lc(e);
}
const W = Symbol.for("v-fgt"), Kn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), la = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function xd() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Xo = 1;
function Rn(e, s = !1) {
  Xo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function lr(e) {
  return e.dynamicChildren = Xo > 0 ? Nt || fo : null, xd(), Xo > 0 && Nt && Nt.push(e), e;
}
function r(e, s, o, n, l, i) {
  return lr(
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
  return lr(
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
const ir = ({ key: e }) => e ?? null, bn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || $t(e) || je(e) ? { i: ht, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === W ? 0 : 1, c = !1, d = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && ir(s),
    ref: s && bn(s),
    scopeId: Ei,
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
const C = Sd;
function Sd(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Vi) && (e = bt), Qo(e)) {
    const d = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Qa(d, o), Xo > 0 && !i && Nt && (d.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = d : Nt.push(d)), d.patchFlag = -2, d;
  }
  if (Nd(e) && (e = e.__vccOpts), s) {
    s = Id(s);
    let { class: d, style: u } = s;
    d && !ct(d) && (s.class = Pe(d)), tt(u) && (ja(u) && !Ve(u) && (u = pt({}, u)), s.style = Ht(u));
  }
  const c = ct(e) ? 1 : ar(e) ? 128 : Pi(e) ? 64 : tt(e) ? 4 : je(e) ? 2 : 0;
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
function Id(e) {
  return e ? ja(e) || Qi(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: d, transition: u } = e, m = s ? Ed(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && ir(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Ve(i) ? i.concat(bn(s)) : [i, bn(s)] : bn(s)
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
    patchFlag: s && e.type !== W ? c === -1 ? 16 : c | 16 : c,
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
  return s ? (a(), R(bt, null, e)) : C(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? C(bt) : Ve(e) ? C(
    W,
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
  else if (Ve(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Qa(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Qi(s) ? s._ctx = ht : l === 3 && ht && (ht.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else je(s) ? (s = { default: s, _ctx: ht }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Ed(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Pe([s.class, n.class]));
      else if (l === "style")
        s.style = Ht([s.style, n.style]);
      else if (Nn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Ve(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
const Td = Hi();
let Pd = 0;
function Rd(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Td, i = {
    uid: Pd++,
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
    scope: new oc(
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
    propsOptions: er(n, l),
    emitsOptions: Yi(n, l),
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = rd.bind(null, i), e.ce && e.ce(i), i;
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
function rr(e) {
  return e.vnode.shapeFlag & 4;
}
let Zo = !1;
function Md(e, s = !1, o = !1) {
  s && Sa(s);
  const { props: n, children: l } = e.vnode, i = rr(e);
  vd(e, n, i, s), yd(e, l, o || s);
  const c = i ? Dd(e, s) : void 0;
  return s && Sa(!1), c;
}
function Dd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yc);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? Od(e) : null, i = on(e), c = sn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), d = si(c);
    if (Is(), i(), (d || e.sp) && !po(e) && Ui(e), d) {
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
    cr(e);
}
function Sl(e, s, o) {
  je(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = $i(s)), cr(e);
}
function cr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = on(e);
    Ss();
    try {
      Jc(e);
    } finally {
      Is(), l();
    }
  }
}
const Ld = {
  get(e, s) {
    return wt(e, "get", ""), e[s];
  }
};
function Od(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ld),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function qn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($i(Cc(e.exposed)), {
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
function Ad(e, s = !0) {
  return je(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Nd(e) {
  return je(e) && "__vccOpts" in e;
}
const N = (e, s) => Tc(e, s, Zo);
function nn(e, s, o) {
  try {
    Rn(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !Ve(s) ? Qo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Qo(o) && (o = [o]), C(e, s, o));
  } finally {
    Rn(1);
  }
}
const Ud = "3.5.25";
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
const dr = Ia ? (e) => Ia.createHTML(e) : (e) => e, zd = "http://www.w3.org/2000/svg", Fd = "http://www.w3.org/1998/Math/MathML", bs = typeof document < "u" ? document : null, El = bs && /* @__PURE__ */ bs.createElement("template"), Bd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? bs.createElementNS(zd, e) : s === "mathml" ? bs.createElementNS(Fd, e) : o ? bs.createElement(e, { is: o }) : bs.createElement(e);
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
      El.innerHTML = dr(
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
}, Ds = "transition", Po = "animation", wo = Symbol("_vtc"), ur = {
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
}, fr = /* @__PURE__ */ pt(
  {},
  Li,
  ur
), Vd = (e) => (e.displayName = "Transition", e.props = fr, e), Wd = /* @__PURE__ */ Vd(
  (e, { slots: s }) => nn(Nc, mr(e), s)
), qs = (e, s = []) => {
  Ve(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Tl = (e) => e ? Ve(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function mr(e) {
  const s = {};
  for (const J in e)
    J in ur || (s[J] = e[J]);
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
  } = e, _ = Gd(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: D,
    onEnterCancelled: E,
    onLeave: x,
    onLeaveCancelled: H,
    onBeforeAppear: V = P,
    onAppear: F = D,
    onAppearCancelled: I = E
  } = s, T = (J, G, ee, Q) => {
    J._enterCancelled = Q, Ls(J, G ? v : d), Ls(J, G ? m : c), ee && ee();
  }, M = (J, G) => {
    J._isLeaving = !1, Ls(J, g), Ls(J, p), Ls(J, w), G && G();
  }, ne = (J) => (G, ee) => {
    const Q = J ? F : D, A = () => T(G, J, ee);
    qs(Q, [G, A]), Pl(() => {
      Ls(G, J ? u : i), fs(G, J ? v : d), Tl(Q) || Rl(G, n, S, A);
    });
  };
  return pt(s, {
    onBeforeEnter(J) {
      qs(P, [J]), fs(J, i), fs(J, c);
    },
    onBeforeAppear(J) {
      qs(V, [J]), fs(J, u), fs(J, m);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(J, G) {
      J._isLeaving = !0;
      const ee = () => M(J, G);
      fs(J, g), J._enterCancelled ? (fs(J, w), Ea(J)) : (Ea(J), fs(J, w)), Pl(() => {
        J._isLeaving && (Ls(J, g), fs(J, p), Tl(x) || Rl(J, n, $, ee));
      }), qs(x, [J, ee]);
    },
    onEnterCancelled(J) {
      T(J, !1, void 0, !0), qs(E, [J]);
    },
    onAppearCancelled(J) {
      T(J, !0, void 0, !0), qs(I, [J]);
    },
    onLeaveCancelled(J) {
      M(J), qs(H, [J]);
    }
  });
}
function Gd(e) {
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
  return Yr(e);
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
let jd = 0;
function Rl(e, s, o, n) {
  const l = e._endId = ++jd, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: d, propCount: u } = vr(e, s);
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
function vr(e, s) {
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
function Hd(e, s, o) {
  const n = e[wo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ll = Symbol("_vod"), Kd = Symbol("_vsh"), qd = Symbol(""), Yd = /(?:^|;)\s*display\s*:/;
function Jd(e, s, o) {
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
      const c = n[qd];
      c && (o += ";" + c), n.cssText = o, i = Yd.test(o);
    }
  } else s && e.removeAttribute("style");
  Ll in e && (e[Ll] = i ? n.display : "", e[Kd] && (n.display = "none"));
}
const Ol = /\s*!important$/;
function kn(e, s, o) {
  if (Ve(o))
    o.forEach((n) => kn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = Xd(e, s);
    Ol.test(o) ? e.setProperty(
      Bs(n),
      o.replace(Ol, ""),
      "important"
    ) : e[n] = o;
  }
}
const Al = ["Webkit", "Moz", "ms"], ra = {};
function Xd(e, s) {
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
function Ul(e, s, o, n, l, i = tc(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Nl, s.slice(6, s.length)) : e.setAttributeNS(Nl, s, o) : o == null || i && !li(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : ts(o) ? String(o) : o
  );
}
function zl(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? dr(o) : o);
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
    d === "boolean" ? o = li(o) : o == null && d === "string" ? (o = "", c = !0) : d === "number" && (o = 0, c = !0);
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
function Qd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Fl = Symbol("_vei");
function Zd(e, s, o, n, l = null) {
  const i = e[Fl] || (e[Fl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [d, u] = eu(s);
    if (n) {
      const m = i[s] = ou(
        n,
        l
      );
      xs(e, d, m, u);
    } else c && (Qd(e, d, c, u), i[s] = void 0);
  }
}
const Bl = /(?:Once|Passive|Capture)$/;
function eu(e) {
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
const tu = /* @__PURE__ */ Promise.resolve(), su = () => ca || (tu.then(() => ca = 0), ca = Date.now());
function ou(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      nu(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = su(), o;
}
function nu(e, s) {
  if (Ve(s)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, au = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Hd(e, n, c) : s === "style" ? Jd(e, o, n) : Nn(s) ? Oa(s) || Zd(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : lu(e, s, n, c)) ? (zl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Ul(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? zl(e, jt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Ul(e, s, n, c));
};
function lu(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Vl(s) && je(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Vl(s) && ct(o) ? !1 : s in e;
}
const pr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), Dn = Symbol("_moveCb"), Wl = Symbol("_enterCb"), iu = (e) => (delete e.props.mode, e), ru = /* @__PURE__ */ iu({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, fr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Za(), n = Di();
    let l, i;
    return Fi(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!mu(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(du), l.forEach(uu);
      const d = l.filter(fu);
      Ea(o.vnode.el), d.forEach((u) => {
        const m = u.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Dn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Dn] = null, Ls(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), d = mr(c);
      let u = c.tag || W;
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
          ), pr.set(v, {
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
}), cu = ru;
function du(e) {
  const s = e.el;
  s[Dn] && s[Dn](), s[Wl] && s[Wl]();
}
function uu(e) {
  gr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function fu(e) {
  const s = pr.get(e), o = gr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function mu(e, s, o) {
  const n = e.cloneNode(), l = e[wo];
  l && l.forEach((d) => {
    d.split(/\s+/).forEach((u) => u && n.classList.remove(u));
  }), o.split(/\s+/).forEach((d) => d && n.classList.add(d)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = vr(n);
  return i.removeChild(n), c;
}
const Fs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ve(s) ? (o) => yn(s, o) : s;
};
function vu(e) {
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
    }), s || (xs(e, "compositionstart", vu), xs(e, "compositionend", Gl), xs(e, "change", Gl));
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
      if (Ve(n)) {
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
        c(hr(e, i));
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
  if (Ve(s))
    l = Ua(s, n.props.value) > -1;
  else if (bo(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = eo(s, hr(e, !0));
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
  const o = e.multiple, n = Ve(s);
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
function hr(e, s) {
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
function pu(e, s) {
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
  const c = pu(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const gu = ["ctrl", "shift", "alt", "meta"], hu = {
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
  exact: (e, s) => gu.some((o) => e[`${o}Key`] && !s.includes(o))
}, rt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const d = hu[s[c]];
      if (d && d(l, s)) return;
    }
    return e(l, ...i);
  }));
}, yu = {
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
      (c) => c === i || yu[c] === i
    ))
      return e(l);
  }));
}, wu = /* @__PURE__ */ pt({ patchProp: au }, Bd);
let ql;
function _u() {
  return ql || (ql = _d(wu));
}
const Jn = ((...e) => {
  const s = _u().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = ku(n);
    if (!l) return;
    const i = s._component;
    !je(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, bu(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function bu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ku(e) {
  return ct(e) ? document.querySelector(e) : e;
}
const $u = { class: "panel-layout" }, Cu = {
  key: 0,
  class: "panel-layout-header"
}, xu = {
  key: 1,
  class: "panel-layout-search"
}, Su = { class: "panel-layout-content" }, Iu = {
  key: 2,
  class: "panel-layout-footer"
}, Eu = /* @__PURE__ */ pe({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", $u, [
      s.$slots.header ? (a(), r("div", Cu, [
        qe(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", xu, [
        qe(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Su, [
        qe(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Iu, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ye = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ ye(Eu, [["__scopeId", "data-v-21565df9"]]), Tu = {
  key: 0,
  class: "panel-title-prefix"
}, Pu = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ru = /* @__PURE__ */ pe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), R(qa(`h${e.level}`), {
      class: Pe(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Tu, f(e.prefix), 1)) : (a(), r("span", Pu)),
        qe(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Mu = /* @__PURE__ */ ye(Ru, [["__scopeId", "data-v-c3875efc"]]), Du = ["title"], Lu = ["width", "height"], Ou = /* @__PURE__ */ pe({
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
      ])], 8, Lu))
    ], 8, Du));
  }
}), yr = /* @__PURE__ */ ye(Ou, [["__scopeId", "data-v-6fc7f16d"]]), Au = { class: "header-left" }, Nu = {
  key: 0,
  class: "header-actions"
}, Uu = /* @__PURE__ */ pe({
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
      t("div", Au, [
        C(Mu, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(yr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Nu, [
        qe(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ ye(Uu, [["__scopeId", "data-v-55a62cd6"]]), zu = {
  key: 0,
  class: "section-title-count"
}, Fu = {
  key: 1,
  class: "section-title-icon"
}, Bu = /* @__PURE__ */ pe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), R(qa(`h${e.level}`), {
      class: Pe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", zu, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Fu, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ ye(Bu, [["__scopeId", "data-v-559361eb"]]), Vu = { class: "status-grid" }, Wu = { class: "status-grid__columns" }, Gu = { class: "status-grid__column" }, ju = { class: "status-grid__title" }, Hu = { class: "status-grid__column status-grid__column--right" }, Ku = { class: "status-grid__title" }, qu = {
  key: 0,
  class: "status-grid__footer"
}, Yu = /* @__PURE__ */ pe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Vu, [
      t("div", Wu, [
        t("div", Gu, [
          t("h4", ju, f(e.leftTitle), 1),
          qe(s.$slots, "left", {}, void 0)
        ]),
        t("div", Hu, [
          t("h4", Ku, f(e.rightTitle), 1),
          qe(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", qu, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ju = /* @__PURE__ */ ye(Yu, [["__scopeId", "data-v-73b7ba3f"]]), Xu = {
  key: 0,
  class: "status-item__icon"
}, Qu = {
  key: 1,
  class: "status-item__count"
}, Zu = { class: "status-item__label" }, ef = /* @__PURE__ */ pe({
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
      e.icon ? (a(), r("span", Xu, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", Qu, f(e.count), 1)) : y("", !0),
      t("span", Zu, f(e.label), 1)
    ], 2));
  }
}), us = /* @__PURE__ */ ye(ef, [["__scopeId", "data-v-6f929183"]]), tf = { class: "issue-card__header" }, sf = { class: "issue-card__icon" }, of = { class: "issue-card__title" }, nf = {
  key: 0,
  class: "issue-card__content"
}, af = {
  key: 0,
  class: "issue-card__description"
}, lf = {
  key: 1,
  class: "issue-card__items"
}, rf = {
  key: 2,
  class: "issue-card__actions"
}, cf = /* @__PURE__ */ pe({
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
      t("div", tf, [
        t("span", sf, f(e.icon), 1),
        t("h4", of, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", nf, [
        e.description ? (a(), r("p", af, f(e.description), 1)) : y("", !0),
        qe(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", lf, [
        (a(!0), r(W, null, we(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", rf, [
        qe(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ ye(cf, [["__scopeId", "data-v-df6aa348"]]), df = ["type", "disabled"], uf = {
  key: 0,
  class: "spinner"
}, ff = /* @__PURE__ */ pe({
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
      e.loading ? (a(), r("span", uf)) : y("", !0),
      e.loading ? y("", !0) : qe(s.$slots, "default", { key: 1 }, void 0)
    ], 10, df));
  }
}), ie = /* @__PURE__ */ ye(ff, [["__scopeId", "data-v-772abe47"]]), mf = { class: "empty-state" }, vf = {
  key: 0,
  class: "empty-icon"
}, pf = { class: "empty-message" }, gf = /* @__PURE__ */ pe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", mf, [
      e.icon ? (a(), r("div", vf, f(e.icon), 1)) : y("", !0),
      t("p", pf, f(e.message), 1),
      e.actionLabel ? (a(), R(ie, {
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
}), ns = /* @__PURE__ */ ye(gf, [["__scopeId", "data-v-4466284f"]]), hf = /* @__PURE__ */ pe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Pe(["detail-label"]),
      style: Ht({ minWidth: e.minWidth })
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), $n = /* @__PURE__ */ ye(hf, [["__scopeId", "data-v-75e9eeb8"]]), yf = /* @__PURE__ */ pe({
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
      qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ta = /* @__PURE__ */ ye(yf, [["__scopeId", "data-v-2f186e4c"]]), wf = { class: "detail-row" }, _f = /* @__PURE__ */ pe({
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
    return (s, o) => (a(), r("div", wf, [
      C($n, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(Ta, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : qe(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), ut = /* @__PURE__ */ ye(_f, [["__scopeId", "data-v-ef15664a"]]), bf = { class: "modal-header" }, kf = { class: "modal-body" }, $f = { class: "status-section" }, Cf = {
  key: 0,
  class: "status-section"
}, xf = { class: "section-header-row" }, Sf = {
  key: 0,
  class: "workflow-group"
}, If = { class: "workflow-group-header" }, Ef = { class: "workflow-group-title" }, Tf = { class: "workflow-list" }, Pf = { class: "workflow-name" }, Rf = { class: "workflow-issue" }, Mf = {
  key: 1,
  class: "workflow-group"
}, Df = { class: "workflow-group-header" }, Lf = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Af = { class: "workflow-name" }, Nf = { class: "workflow-issue" }, Uf = {
  key: 2,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Ff = { class: "workflow-group-title" }, Bf = { class: "workflow-list" }, Vf = { class: "workflow-name" }, Wf = {
  key: 3,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, qf = {
  key: 4,
  class: "workflow-group"
}, Yf = { class: "workflow-group-header" }, Jf = { class: "workflow-group-title" }, Xf = { class: "workflow-list" }, Qf = { class: "workflow-name" }, Zf = {
  key: 5,
  class: "workflow-group"
}, em = { class: "workflow-group-title" }, tm = { class: "expand-icon" }, sm = {
  key: 0,
  class: "workflow-list"
}, om = { class: "workflow-name" }, nm = {
  key: 1,
  class: "status-section"
}, am = {
  key: 0,
  class: "change-group"
}, lm = { class: "change-group-header" }, im = { class: "change-group-title" }, rm = { class: "change-list" }, cm = { class: "node-name" }, dm = {
  key: 0,
  class: "dev-badge"
}, um = {
  key: 1,
  class: "change-group"
}, fm = { class: "change-group-header" }, mm = { class: "change-group-title" }, vm = { class: "change-list" }, pm = { class: "node-name" }, gm = {
  key: 0,
  class: "dev-badge"
}, hm = {
  key: 2,
  class: "change-group"
}, ym = { class: "change-list" }, wm = { class: "change-item" }, _m = { class: "node-name" }, bm = {
  key: 3,
  class: "change-group"
}, km = {
  key: 2,
  class: "status-section"
}, $m = { class: "section-header-row" }, Cm = {
  key: 0,
  class: "drift-item"
}, xm = { class: "drift-list" }, Sm = {
  key: 0,
  class: "drift-list-more"
}, Im = {
  key: 1,
  class: "drift-item"
}, Em = { class: "drift-list" }, Tm = {
  key: 0,
  class: "drift-list-more"
}, Pm = {
  key: 2,
  class: "drift-item"
}, Rm = { class: "drift-list" }, Mm = { class: "version-actual" }, Dm = { class: "version-expected" }, Lm = {
  key: 0,
  class: "drift-list-more"
}, Om = {
  key: 3,
  class: "drift-item"
}, Am = { class: "repair-action" }, Nm = {
  key: 3,
  class: "status-section"
}, Um = { class: "info-box" }, zm = { class: "drift-list" }, Fm = {
  key: 0,
  class: "drift-list-more"
}, Bm = {
  key: 4,
  class: "status-section"
}, Vm = { class: "warning-box" }, Wm = {
  key: 5,
  class: "empty-state-inline"
}, Gm = { class: "modal-actions" }, jm = /* @__PURE__ */ pe({
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
      var _, S, $, P, D, E, x, H, V, F, I, T, M, ne, J, G, ee, Q, A, j, L, se;
      return a(), R(yt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (de) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", bf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (de) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", kf, [
              t("div", $f, [
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
              c.value ? (a(), r("div", Cf, [
                t("div", xf, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (de) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", Sf, [
                  t("div", If, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Ef, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Tf, [
                    (a(!0), r(W, null, we(n.value, (de) => (a(), r("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      t("span", Pf, f(de.name), 1),
                      t("span", Rf, f(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Mf, [
                  t("div", Df, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Lf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Of, [
                    (a(!0), r(W, null, we(l.value, (de) => (a(), r("div", {
                      key: de.name,
                      class: "workflow-item"
                    }, [
                      t("span", Af, f(de.name), 1),
                      t("span", Nf, f(de.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), r("div", Uf, [
                  t("div", zf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Ff, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Bf, [
                    (a(!0), r(W, null, we(e.status.workflows.new, (de) => (a(), r("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", Vf, f(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", Wf, [
                  t("div", Gf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", jf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Hf, [
                    (a(!0), r(W, null, we(e.status.workflows.modified, (de) => (a(), r("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, f(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (D = e.status.workflows) == null ? void 0 : D.deleted) != null && E.length ? (a(), r("div", qf, [
                  t("div", Yf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Jf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Xf, [
                    (a(!0), r(W, null, we(e.status.workflows.deleted, (de) => (a(), r("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", Qf, f(de), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", Zf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (de) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", em, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", tm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", sm, [
                    (a(!0), r(W, null, we(i.value, (de) => (a(), r("div", {
                      key: de,
                      class: "workflow-item"
                    }, [
                      t("span", om, f(de), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              d.value ? (a(), r("div", nm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (x = e.status.git_changes) == null ? void 0 : x.nodes_added) != null && H.length ? (a(), r("div", am, [
                  t("div", lm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", im, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", rm, [
                    (a(!0), r(W, null, we(e.status.git_changes.nodes_added, (de) => (a(), r("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      t("span", cm, f(v(de)), 1),
                      g(de) ? (a(), r("span", dm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && F.length ? (a(), r("div", um, [
                  t("div", fm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", mm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", vm, [
                    (a(!0), r(W, null, we(e.status.git_changes.nodes_removed, (de) => (a(), r("div", {
                      key: v(de),
                      class: "change-item"
                    }, [
                      t("span", pm, f(v(de)), 1),
                      g(de) ? (a(), r("span", gm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), r("div", hm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", ym, [
                    t("div", wm, [
                      t("span", _m, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), r("div", bm, [...p[21] || (p[21] = [
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
              (M = e.status.comparison) != null && M.is_synced ? y("", !0) : (a(), r("div", km, [
                t("div", $m, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
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
                (J = (ne = e.status.comparison) == null ? void 0 : ne.missing_nodes) != null && J.length ? (a(), r("div", Cm, [
                  C(ut, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", xm, [
                    (a(!0), r(W, null, we(e.status.comparison.missing_nodes.slice(0, 10), (de) => (a(), r("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + f(de), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Sm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (ee = (G = e.status.comparison) == null ? void 0 : G.extra_nodes) != null && ee.length ? (a(), r("div", Im, [
                  C(ut, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Em, [
                    (a(!0), r(W, null, we(e.status.comparison.extra_nodes.slice(0, 10), (de) => (a(), r("div", {
                      key: de,
                      class: "drift-list-item"
                    }, " - " + f(de), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Tm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && A.length ? (a(), r("div", Pm, [
                  C(ut, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Rm, [
                    (a(!0), r(W, null, we(e.status.comparison.version_mismatches.slice(0, 10), (de) => (a(), r("div", {
                      key: de.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(de.name) + ": ", 1),
                      t("span", Mm, f(de.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Dm, f(de.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Lm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((j = e.status.comparison) == null ? void 0 : j.packages_in_sync) === !1 ? (a(), r("div", Om, [
                  C(ut, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Am, [
                  C(ie, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (de) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (se = (L = e.status.comparison) == null ? void 0 : L.disabled_nodes) != null && se.length ? (a(), r("div", Nm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Um, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", zm, [
                  (a(!0), r(W, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (de) => (a(), r("div", {
                    key: de,
                    class: "drift-list-item"
                  }, " • " + f(de), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Fm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Bm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Vm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              u.value ? (a(), r("div", Wm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Gm, [
              C(ie, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (de) => w.$emit("close"))
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
}), Hm = /* @__PURE__ */ ye(jm, [["__scopeId", "data-v-e2b37122"]]), Km = { class: "health-section-header" }, qm = { class: "suggestions-content" }, Ym = { class: "suggestions-text" }, Jm = { style: { "margin-top": "var(--cg-space-3)" } }, Xm = {
  key: 1,
  class: "no-issues-text"
}, Qm = /* @__PURE__ */ pe({
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
        (j) => j.unresolved_models_count > 0 || j.ambiguous_models_count > 0
      );
      return A.length === 0 && n.status.missing_models_count > 0 ? Q.filter((j) => j.sync_state === "synced") : A;
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
    }), H = N(() => n.status.has_changes || D.value), V = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), F = N(() => n.status.git_changes.has_other_changes), I = N(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter((A) => A.status === "broken")) || [];
    }), T = N(() => {
      var Q;
      return ((Q = n.status.workflows.analyzed) == null ? void 0 : Q.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), M = N(() => I.value.length > 0), ne = N(() => M.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), J = N(() => {
      const Q = [];
      return n.status.workflows.new.length > 0 && Q.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Q.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Q.push(`${n.status.workflows.deleted.length} deleted`), Q.length > 0 ? `${Q.join(", ")} workflow${Q.length === 1 && !Q[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), G = N(() => {
      var j, L;
      const Q = [], A = n.status.comparison;
      return (j = A.missing_nodes) != null && j.length && Q.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (L = A.extra_nodes) != null && L.length && Q.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), Q.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Q.join(" and ")}.`;
    }), ee = N(() => {
      var j, L;
      const Q = [], A = n.status.comparison;
      return (j = A.extra_nodes) != null && j.length && (A.extra_nodes.slice(0, 3).forEach((se) => {
        Q.push(`Untracked: ${se}`);
      }), A.extra_nodes.length > 3 && Q.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (L = A.missing_nodes) != null && L.length && (A.missing_nodes.slice(0, 3).forEach((se) => {
        Q.push(`Missing: ${se}`);
      }), A.missing_nodes.length > 3 && Q.push(`...and ${A.missing_nodes.length - 3} more missing`)), Q;
    });
    return (Q, A) => (a(), r(W, null, [
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (j) => Q.$emit("start-setup"))
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (j) => Q.$emit("view-environments"))
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: A[2] || (A[2] = (j) => Q.$emit("create-environment"))
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
            onMouseenter: A[4] || (A[4] = (j) => i.value = !0),
            onMouseleave: A[5] || (A[5] = (j) => i.value = !1)
          }, [
            t("div", Km, [
              C(At, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...A[16] || (A[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Wd, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), R(ie, {
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
            C(Ju, {
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
                F.value ? (a(), R(us, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                E.value && !x.value && !F.value ? (a(), R(us, {
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
              H.value ? {
                name: "footer",
                fn: h(() => [
                  A[19] || (A[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", qm, [
                    t("span", Ym, f(J.value), 1),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (j) => Q.$emit("commit-changes"))
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: A[6] || (A[6] = (j) => Q.$emit("create-branch"))
              }, {
                default: h(() => [...A[20] || (A[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", Jm, [
            C(At, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...A[21] || (A[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ne.value ? (a(), r(W, { key: 0 }, [
              I.value.length > 0 ? (a(), R(Yt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((j) => `${j.name} — ${j.issue_summary}`)
              }, {
                actions: h(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (j) => Q.$emit("view-workflows"))
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
                items: T.value.map((j) => `${j.name} — ${j.models_needing_path_sync_count} model path${j.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (j) => Q.$emit("view-workflows"))
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
                  C(ie, {
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
                  C(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[9] || (A[9] = (j) => Q.$emit("view-workflows"))
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
                items: ee.value
              }, {
                actions: h(() => [
                  C(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...A[25] || (A[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (j) => Q.$emit("view-nodes"))
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
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[11] || (A[11] = (j) => Q.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[27] || (A[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : H.value ? (a(), r("span", Xm, "No issues")) : (a(), R(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Hm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: A[12] || (A[12] = (j) => l.value = !1),
        onNavigateWorkflows: d,
        onNavigateNodes: u,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Zm = /* @__PURE__ */ ye(Qm, [["__scopeId", "data-v-55fcd77f"]]), ev = ["type", "value", "placeholder", "disabled"], tv = /* @__PURE__ */ pe({
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
      class: Pe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        u[0] || (u[0] = Zt((m) => d.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Zt((m) => d.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (m) => d.$emit("focus")),
      onBlur: u[3] || (u[3] = (m) => d.$emit("blur"))
    }, null, 42, ev));
  }
}), Ln = /* @__PURE__ */ ye(tv, [["__scopeId", "data-v-0380d08f"]]), sv = { class: "branch-create-form" }, ov = { class: "form-actions" }, nv = /* @__PURE__ */ pe({
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
    return (d, u) => (a(), r("div", sv, [
      C(Ln, {
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", ov, [
        C(ie, {
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
        C(ie, {
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
}), av = /* @__PURE__ */ ye(nv, [["__scopeId", "data-v-7c500394"]]), lv = { class: "branch-list-item__indicator" }, iv = { class: "branch-list-item__name" }, rv = {
  key: 0,
  class: "branch-list-item__actions"
}, cv = {
  key: 0,
  class: "branch-list-item__current-label"
}, dv = /* @__PURE__ */ pe({
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
      t("span", lv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", iv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", rv, [
        qe(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", cv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), uv = /* @__PURE__ */ ye(dv, [["__scopeId", "data-v-c6581a24"]]), fv = {
  key: 2,
  class: "branch-list"
}, mv = /* @__PURE__ */ pe({
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
            n.value ? y("", !0) : (a(), R(ie, {
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
        n.value ? (a(), R(av, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", fv, [
          (a(!0), r(W, null, we(e.branches, (u) => (a(), R(uv, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: h(() => [
              u.is_current ? y("", !0) : (a(), R(ie, {
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
              u.is_current ? y("", !0) : (a(), R(ie, {
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
}), vv = /* @__PURE__ */ ye(mv, [["__scopeId", "data-v-86784ddd"]]), pv = { class: "commit-list" }, gv = /* @__PURE__ */ pe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", pv, [
      qe(s.$slots, "default", {}, void 0)
    ]));
  }
}), hv = /* @__PURE__ */ ye(gv, [["__scopeId", "data-v-8c5ee761"]]), yv = { class: "commit-hash" }, wv = /* @__PURE__ */ pe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", yv, f(o.value), 1));
  }
}), wr = /* @__PURE__ */ ye(wv, [["__scopeId", "data-v-7c333cc6"]]), _v = { class: "commit-message" }, bv = { class: "commit-date" }, kv = /* @__PURE__ */ pe({
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
      C(wr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", _v, f(e.message), 1),
      t("span", bv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = rt(() => {
        }, ["stop"]))
      }, [
        qe(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), $v = /* @__PURE__ */ ye(kv, [["__scopeId", "data-v-dd7c621b"]]), Cv = /* @__PURE__ */ pe({
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
        })) : (a(), R(hv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(W, null, we(e.commits, (n) => (a(), R($v, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                C(ie, {
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
}), xv = /* @__PURE__ */ ye(Cv, [["__scopeId", "data-v-981c3c64"]]), f7 = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const m7 = [
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
], v7 = {
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
}, Sv = [
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
], p7 = [
  ...Sv,
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
function _r() {
  return typeof crypto < "u" && crypto.randomUUID ? _r() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function at() {
  const e = k(!1), s = k(null);
  async function o(Y, $e) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi(Y, $e);
    if (!Be.ok) {
      const cs = await Be.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Be.status}`);
    }
    const Le = await Be.text();
    if (Le)
      return JSON.parse(Le);
  }
  async function n(Y = !1) {
    return o(Y ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(Y, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Y, allow_issues: $e })
    });
  }
  async function i(Y = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${Y}&offset=${$e}`);
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
  async function w(Y, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Y, force: $e })
    });
  }
  async function p(Y, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, start_point: $e })
    });
  }
  async function _(Y, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Y, force: $e })
    });
  }
  async function S(Y, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Y)}`, {
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
  async function P(Y, $e) {
    const Be = { target_env: Y };
    return $e && (Be.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Be)
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
  async function H(Y = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Y}`);
  }
  async function V(Y) {
    return o(`/v2/workspace/environments/${Y}`, {
      method: "DELETE"
    });
  }
  async function F(Y = !1) {
    try {
      return o(Y ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await n(Y), Be = [];
      return $e.workflows.new.forEach((Le) => {
        Be.push({ name: Le, status: "new", missing_nodes: 0, missing_models: 0, path: Le });
      }), $e.workflows.modified.forEach((Le) => {
        Be.push({ name: Le, status: "modified", missing_nodes: 0, missing_models: 0, path: Le });
      }), $e.workflows.synced.forEach((Le) => {
        Be.push({ name: Le, status: "synced", missing_nodes: 0, missing_models: 0, path: Le });
      }), Be;
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
  async function M(Y, $e, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Be })
    });
  }
  async function ne(Y, $e, Be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Y)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Be })
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
  async function ee(Y) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Y)}`);
  }
  async function Q(Y) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function A(Y, $e) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function j(Y, $e) {
    return o(`/v2/workspace/models/${Y}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function L(Y) {
    return o(`/v2/workspace/models/${Y}`, {
      method: "DELETE"
    });
  }
  async function se(Y) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function de() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function De() {
    return o("/v2/workspace/models/directory");
  }
  async function ce(Y) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function ge(Y) {
    try {
      const $e = Y ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Y)}` : "/v2/comfygit/config";
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
  async function Ee(Y, $e) {
    const Be = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Be, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Re(Y, $e) {
    try {
      const Be = new URLSearchParams();
      return Y && Be.append("level", Y), $e && Be.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function xe(Y, $e) {
    try {
      const Be = new URLSearchParams();
      return Y && Be.append("level", Y), $e && Be.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function Ce() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function he() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ue(Y, $e) {
    try {
      const Be = new URLSearchParams();
      return Y && Be.append("level", Y), $e && Be.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Be}`);
    } catch {
      return [];
    }
  }
  async function Ae() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Me(Y) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Y })
    });
  }
  async function O() {
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
  async function z(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/track-dev`, {
      method: "POST"
    });
  }
  async function oe(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/install`, {
      method: "POST"
    });
  }
  async function le(Y) {
    var Dt, cs, Io, Eo;
    const $e = _r(), Be = ((cs = (Dt = window.app) == null ? void 0 : Dt.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", Le = {
      kind: "install",
      params: {
        id: Y.id,
        version: Y.version || Y.selected_version || "latest",
        selected_version: Y.selected_version || "latest",
        repository: Y.repository || "",
        mode: Y.mode || "remote",
        channel: Y.channel || "default"
      },
      ui_id: $e,
      client_id: Be
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Le)
    }), await o("/v2/manager/queue/start"), { ui_id: $e };
  }
  async function me(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}/update`, {
      method: "POST"
    });
  }
  async function ve(Y) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function Se() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ie(Y, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Y, url: $e })
    });
  }
  async function ae(Y) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function fe(Y, $e, Be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Be })
    });
  }
  async function ze(Y, $e) {
    const Be = {};
    return $e && (Be["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/fetch`, {
      method: "POST",
      headers: Be
    });
  }
  async function Te(Y) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/status`);
    } catch {
      return null;
    }
  }
  async function Z(Y = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Y,
        remove_extra_nodes: $e
      })
    });
  }
  async function q(Y, $e) {
    const Be = $e ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull-preview`;
    return o(Be);
  }
  async function Ne(Y, $e = {}) {
    const Be = { "Content-Type": "application/json" };
    return $e.authToken && (Be["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/pull`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function be(Y, $e) {
    const Be = $e ? `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(Y)}/push-preview`;
    return o(Be);
  }
  async function _e(Y, $e = {}) {
    const Be = { "Content-Type": "application/json" };
    return $e.authToken && (Be["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/push`, {
      method: "POST",
      headers: Be,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function B(Y, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Y)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function U(Y) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Be of Y)
      try {
        await T(Be), $e.success++;
      } catch (Le) {
        $e.failed.push({
          name: Be,
          error: Le instanceof Error ? Le.message : "Unknown error"
        });
      }
    return $e;
  }
  async function re(Y) {
    var Le;
    const $e = new FormData();
    if ($e.append("file", Y), !((Le = window.app) != null && Le.api))
      throw new Error("ComfyUI API not available");
    const Be = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Be.ok) {
      const Dt = await Be.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${Be.status}`);
    }
    return Be.json();
  }
  async function We(Y) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Y)}`
    );
  }
  async function Qe(Y, $e, Be, Le) {
    var Io;
    const Dt = new FormData();
    if (Dt.append("file", Y), Dt.append("name", $e), Dt.append("model_strategy", Be), Dt.append("torch_backend", Le), !((Io = window.app) != null && Io.api))
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
  async function lt(Y) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Y })
    });
  }
  async function dt(Y, $e, Be, Le) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Y,
        name: $e,
        model_strategy: Be,
        torch_backend: Le
      })
    });
  }
  async function Rt() {
    return o("/v2/setup/status");
  }
  async function zt(Y) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Kt() {
    return o("/v2/setup/initialize_status");
  }
  async function Ws(Y) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function Ms() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function no() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Co(Y, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Y, save_key: $e })
    });
  }
  async function xo() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function So(Y) {
    const $e = Y ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Y)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function ke(Y) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function X() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function Ke(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function gt(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/stop`, {
      method: "POST"
    });
  }
  async function qt(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/start`, {
      method: "POST"
    });
  }
  async function ys(Y) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Y)}/status`);
  }
  async function ws(Y) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Y })
    });
  }
  async function ls(Y = !1) {
    return o(Y ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Fe() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function te(Y) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function K(Y) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Y)}`, {
      method: "DELETE"
    });
  }
  async function Ue(Y) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Y)
    });
  }
  async function He() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ot(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/info`);
  }
  async function ft(Y) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`);
  }
  async function Mt(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function rs(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function Gs(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function js(Y, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Y)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function ln(Y) {
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
    getComfyUIReleases: H,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: I,
    resolveWorkflow: T,
    installWorkflowDeps: M,
    setModelImportance: ne,
    // Model Management
    getEnvironmentModels: J,
    getWorkspaceModels: G,
    getModelDetails: ee,
    openFileLocation: Q,
    addModelSource: A,
    removeModelSource: j,
    deleteModel: L,
    downloadModel: se,
    scanWorkspaceModels: de,
    getModelsDirectory: De,
    setModelsDirectory: ce,
    // Settings
    getConfig: ge,
    updateConfig: Ee,
    // Debug/Logs
    getEnvironmentLogs: Re,
    getWorkspaceLogs: xe,
    getEnvironmentLogPath: Ce,
    getWorkspaceLogPath: he,
    getOrchestratorLogs: ue,
    getOrchestratorLogPath: Ae,
    openFile: Me,
    // Node Management
    getNodes: O,
    trackNodeAsDev: z,
    installNode: oe,
    queueNodeInstall: le,
    updateNode: me,
    uninstallNode: ve,
    // Git Remotes
    getRemotes: Se,
    addRemote: Ie,
    removeRemote: ae,
    updateRemoteUrl: fe,
    fetchRemote: ze,
    getRemoteSyncStatus: Te,
    // Push/Pull
    getPullPreview: q,
    pullFromRemote: Ne,
    getPushPreview: be,
    pushToRemote: _e,
    validateMerge: B,
    // Environment Sync
    syncEnvironmentManually: Z,
    // Workflow Repair
    repairWorkflowModels: U,
    // Import Operations
    previewTarballImport: re,
    previewGitImport: lt,
    validateEnvironmentName: We,
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
    getRunPodPods: X,
    terminateRunPodPod: Ke,
    stopRunPodPod: gt,
    startRunPodPod: qt,
    getDeploymentStatus: ys,
    exportDeployPackage: ws,
    getStoredRunPodKey: ls,
    clearRunPodKey: Fe,
    // Custom Worker Operations
    getCustomWorkers: is,
    addCustomWorker: te,
    removeCustomWorker: K,
    testWorkerConnection: Ue,
    scanForWorkers: He,
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
function Iv() {
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
const Ev = { class: "base-modal-header" }, Tv = {
  key: 0,
  class: "base-modal-title"
}, Pv = { class: "base-modal-body" }, Rv = {
  key: 0,
  class: "base-modal-loading"
}, Mv = {
  key: 1,
  class: "base-modal-error"
}, Dv = {
  key: 0,
  class: "base-modal-footer"
}, Lv = /* @__PURE__ */ pe({
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
    }), (c, d) => (a(), R(yt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Pe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: d[1] || (d[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", Ev, [
            qe(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Tv, f(e.title), 1)) : y("", !0)
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
          t("div", Pv, [
            e.loading ? (a(), r("div", Rv, "Loading...")) : e.error ? (a(), r("div", Mv, f(e.error), 1)) : qe(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Dv, [
            qe(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), vt = /* @__PURE__ */ ye(Lv, [["__scopeId", "data-v-8dab1081"]]), Ov = ["type", "disabled"], Av = {
  key: 0,
  class: "spinner"
}, Nv = /* @__PURE__ */ pe({
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
      e.loading ? (a(), r("span", Av)) : y("", !0),
      qe(s.$slots, "default", {}, void 0)
    ], 10, Ov));
  }
}), Oe = /* @__PURE__ */ ye(Nv, [["__scopeId", "data-v-f3452606"]]), Uv = {
  key: 0,
  class: "base-title-count"
}, zv = /* @__PURE__ */ pe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), R(qa(`h${e.level}`), {
      class: Pe(["base-title", e.variant])
    }, {
      default: h(() => [
        qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Uv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ ye(zv, [["__scopeId", "data-v-5a01561d"]]), Fv = ["value", "disabled"], Bv = {
  key: 0,
  value: "",
  disabled: ""
}, Vv = ["value"], Wv = {
  key: 0,
  class: "base-select-error"
}, Gv = /* @__PURE__ */ pe({
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
        e.placeholder ? (a(), r("option", Bv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(W, null, we(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Vv))), 128))
      ], 42, Fv),
      e.error ? (a(), r("span", Wv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), jv = /* @__PURE__ */ ye(Gv, [["__scopeId", "data-v-7436d745"]]), Hv = { class: "popover-header" }, Kv = { class: "popover-title" }, qv = { class: "popover-content" }, Yv = {
  key: 0,
  class: "popover-actions"
}, Jv = /* @__PURE__ */ pe({
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
          onClick: o[1] || (o[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", Hv, [
            t("h4", Kv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", qv, [
            qe(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Yv, [
            qe(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ ye(Jv, [["__scopeId", "data-v-42815ace"]]), Xv = { class: "detail-section" }, Qv = {
  key: 0,
  class: "empty-message"
}, Zv = { class: "model-header" }, ep = { class: "model-name" }, tp = { class: "model-details" }, sp = { class: "model-row" }, op = { class: "model-row" }, np = { class: "label" }, ap = {
  key: 0,
  class: "model-row model-row-nodes"
}, lp = { class: "node-list" }, ip = ["onClick"], rp = {
  key: 1,
  class: "model-row"
}, cp = { class: "value" }, dp = {
  key: 2,
  class: "model-row"
}, up = { class: "value error" }, fp = {
  key: 0,
  class: "model-actions"
}, mp = { class: "detail-section" }, vp = {
  key: 0,
  class: "empty-message"
}, pp = { class: "node-name" }, gp = {
  key: 0,
  class: "node-version"
}, hp = /* @__PURE__ */ pe({
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
    function H(I, T) {
      g.value[I] = T, v.value = !0;
    }
    async function V(I) {
      try {
        await c(I);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function F() {
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
    return et(x), (I, T) => (a(), r(W, null, [
      C(vt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: u.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (M) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), r(W, { key: 0 }, [
            t("section", Xv, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), r("div", Qv, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(W, null, we(d.value.models, (M) => {
                var ne;
                return a(), r("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  t("div", Zv, [
                    T[6] || (T[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", ep, f(M.filename), 1)
                  ]),
                  t("div", tp, [
                    t("div", sp, [
                      T[7] || (T[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Pe(["value", S(M.status)])
                      }, f($(M.status)), 3)
                    ]),
                    t("div", op, [
                      t("span", np, [
                        T[8] || (T[8] = b(" Importance: ", -1)),
                        C(yr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (J) => w.value = !0)
                        })
                      ]),
                      C(jv, {
                        "model-value": g.value[M.filename] || M.importance,
                        options: _,
                        "onUpdate:modelValue": (J) => H(M.filename, J)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (a(), r("div", ap, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", lp, [
                        (a(!0), r(W, null, we(P(M), (J, G) => (a(), r("div", {
                          key: `${J.node_id}-${G}`,
                          class: "node-reference"
                        }, f(J.node_type) + " (Node #" + f(J.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (J) => E(M.hash || M.filename)
                        }, f(D(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, ip)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    M.size_mb ? (a(), r("div", rp, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", cp, f(M.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    M.has_category_mismatch ? (a(), r("div", dp, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", up, [
                        T[11] || (T[11] = b(" In ", -1)),
                        t("code", null, f(M.actual_category) + "/", 1),
                        T[12] || (T[12] = b(" but loader needs ", -1)),
                        t("code", null, f((ne = M.expected_categories) == null ? void 0 : ne[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  M.status !== "available" ? (a(), r("div", fp, [
                    M.status === "downloadable" ? (a(), R(Oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (J) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (a(), R(Oe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => V(M.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (a(), R(Oe, {
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
            t("section", mp, [
              C(Go, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), r("div", vp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(W, null, we(d.value.nodes, (M) => (a(), r("div", {
                key: M.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Pe(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, f(M.status === "installed" ? "✓" : "✕"), 3),
                t("span", pp, f(M.name), 1),
                M.version ? (a(), r("span", gp, "v" + f(M.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(Oe, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (M) => n("close"))
          }, {
            default: h(() => [...T[17] || (T[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), R(Oe, {
            key: 0,
            variant: "primary",
            onClick: F
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
}), yp = /* @__PURE__ */ ye(hp, [["__scopeId", "data-v-668728e6"]]), Je = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function br() {
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
    await wp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Je.status = "idle", uo();
  }
}
async function wp(e) {
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
async function _p() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Je.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: br(),
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
      const E = {
        id: br(),
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
      Je.items.push(E);
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
        const D = Je.items.findIndex((E) => E.id === $);
        D >= 0 && Je.items.splice(D, 1);
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
    const P = Je.items.findIndex((D) => D.id === $);
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
    loadPendingDownloads: _p
  };
}
function kr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(D, E) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(D, E);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), F = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(F);
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
  async function u(D, E, x, H) {
    l.value = !0, i.value = null;
    try {
      let V;
      if (!co()) {
        const F = Object.fromEntries(E), I = Object.fromEntries(x), T = H ? Array.from(H) : [];
        V = await c(
          `/v2/comfygit/workflow/${D}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: I,
              skipped_packages: T
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
      const H = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = H, x;
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
      const H = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = H, x;
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
      const H = new Map(((x = E.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < g.nodesToInstall.length; V++) {
        const F = g.nodesToInstall[V], I = H.get(F);
        g.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function S(D, E, x) {
    w(), g.phase = "resolving", i.value = null;
    const H = Object.fromEntries(E), V = Object.fromEntries(x);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: V
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const I = F.body.getReader(), T = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: ne, value: J } = await I.read();
        if (ne) break;
        M += T.decode(J, { stream: !0 });
        const G = M.split(`

`);
        M = G.pop() || "";
        for (const ee of G) {
          if (!ee.trim()) continue;
          const Q = ee.split(`
`);
          let A = "", j = "";
          for (const L of Q)
            L.startsWith("event: ") ? A = L.slice(7) : L.startsWith("data: ") && (j = L.slice(6));
          if (j)
            try {
              const L = JSON.parse(j);
              $(A, L);
            } catch (L) {
              console.warn("Failed to parse SSE event:", L);
            }
        }
      }
    } catch (F) {
      const I = F instanceof Error ? F.message : "Unknown error occurred";
      throw i.value = I, g.error = I, g.phase = "error", F;
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
    const { addToQueue: x } = ko(), H = E.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: D,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return H.length > 0 && x(H), H.length;
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
const bp = { class: "resolution-stepper" }, kp = { class: "stepper-header" }, $p = ["onClick"], Cp = {
  key: 0,
  class: "step-icon"
}, xp = {
  key: 1,
  class: "step-number"
}, Sp = { class: "step-label" }, Ip = {
  key: 0,
  class: "step-connector"
}, Ep = { class: "stepper-content" }, Tp = /* @__PURE__ */ pe({
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
    return (m, v) => (a(), r("div", bp, [
      t("div", kp, [
        (a(!0), r(W, null, we(e.steps, (g, w) => (a(), r("div", {
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
            l(g.id) ? (a(), r("span", Cp, "✓")) : (a(), r("span", xp, f(w + 1), 1))
          ], 2),
          t("div", Sp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Ip)) : y("", !0)
        ], 10, $p))), 128))
      ]),
      t("div", Ep, [
        qe(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Pp = /* @__PURE__ */ ye(Tp, [["__scopeId", "data-v-2a7b3af8"]]), Rp = /* @__PURE__ */ pe({
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
}), On = /* @__PURE__ */ ye(Rp, [["__scopeId", "data-v-17ec4b80"]]), Mp = { class: "node-info" }, Dp = { class: "node-info-text" }, Lp = { class: "item-body" }, Op = {
  key: 0,
  class: "resolved-state"
}, Ap = {
  key: 1,
  class: "multiple-options"
}, Np = { class: "options-list" }, Up = ["onClick"], zp = ["name", "value", "checked", "onChange"], Fp = { class: "option-content" }, Bp = { class: "option-header" }, Vp = { class: "option-package-id" }, Wp = {
  key: 0,
  class: "option-title"
}, Gp = { class: "option-meta" }, jp = {
  key: 0,
  class: "installed-badge"
}, Hp = { class: "action-buttons" }, Kp = {
  key: 2,
  class: "unresolved"
}, qp = {
  key: 0,
  class: "searching-state"
}, Yp = { class: "options-list" }, Jp = ["onClick"], Xp = ["name", "value"], Qp = { class: "option-content" }, Zp = { class: "option-header" }, eg = { class: "option-package-id" }, tg = {
  key: 0,
  class: "option-description"
}, sg = { class: "option-meta" }, og = {
  key: 0,
  class: "installed-badge"
}, ng = {
  key: 2,
  class: "unresolved-message"
}, ag = { class: "action-buttons" }, lg = /* @__PURE__ */ pe({
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
      t("div", Mp, [
        t("span", Dp, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Pe(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Lp, [
        i.value ? (a(), r("div", Op, [
          C(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Ap, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Np, [
            (a(!0), r(W, null, we(e.options, (v, g) => (a(), r("label", {
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
              }, null, 40, zp),
              t("div", Fp, [
                t("div", Bp, [
                  t("span", Vp, f(v.package_id), 1),
                  C(On, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", Wp, f(v.title), 1)) : y("", !0),
                t("div", Gp, [
                  v.is_installed ? (a(), r("span", jp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Up))), 128))
          ]),
          t("div", Hp, [
            C(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
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
        ])) : (a(), r("div", Kp, [
          e.isSearching ? (a(), r("div", qp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(W, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Yp, [
              (a(!0), r(W, null, we(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Xp),
                t("div", Qp, [
                  t("div", Zp, [
                    t("span", eg, f(v.package_id), 1),
                    C(On, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", tg, f(l(v.description)), 1)) : y("", !0),
                  t("div", sg, [
                    v.is_installed ? (a(), r("span", og, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Jp))), 128))
            ])
          ], 64)) : (a(), r("div", ng, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", ag, [
            C(Oe, {
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
            C(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
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
}), ig = /* @__PURE__ */ ye(lg, [["__scopeId", "data-v-c2997d1d"]]), rg = { class: "item-navigator" }, cg = { class: "nav-item-info" }, dg = ["title"], ug = { class: "nav-controls" }, fg = { class: "nav-arrows" }, mg = ["disabled"], vg = ["disabled"], pg = { class: "nav-position" }, gg = /* @__PURE__ */ pe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", rg, [
      t("div", cg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, dg)
      ]),
      t("div", ug, [
        t("div", fg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, mg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, vg)
        ]),
        t("span", pg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), $r = /* @__PURE__ */ ye(gg, [["__scopeId", "data-v-74af7920"]]), hg = ["type", "value", "placeholder", "disabled"], yg = {
  key: 0,
  class: "base-input-error"
}, wg = /* @__PURE__ */ pe({
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
      }, null, 42, hg),
      e.error ? (a(), r("span", yg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), es = /* @__PURE__ */ ye(wg, [["__scopeId", "data-v-9ba02cdc"]]), _g = { class: "node-resolution-step" }, bg = {
  key: 0,
  class: "auto-resolved-section"
}, kg = { class: "section-header" }, $g = { class: "stat-badge" }, Cg = { class: "resolved-packages-list" }, xg = { class: "package-info" }, Sg = { class: "package-id" }, Ig = { class: "node-count" }, Eg = { class: "package-actions" }, Tg = {
  key: 0,
  class: "status-badge install"
}, Pg = {
  key: 1,
  class: "status-badge skip"
}, Rg = ["onClick"], Mg = {
  key: 1,
  class: "section-divider"
}, Dg = { class: "step-header" }, Lg = { class: "stat-badge" }, Og = {
  key: 1,
  class: "step-body"
}, Ag = {
  key: 3,
  class: "empty-state"
}, Ng = { class: "node-modal-body" }, Ug = { class: "node-search-results-container" }, zg = {
  key: 0,
  class: "node-search-results"
}, Fg = ["onClick"], Bg = { class: "node-result-header" }, Vg = { class: "node-result-package-id" }, Wg = {
  key: 0,
  class: "node-result-description"
}, Gg = {
  key: 1,
  class: "node-empty-state"
}, jg = {
  key: 2,
  class: "node-empty-state"
}, Hg = {
  key: 3,
  class: "node-empty-state"
}, Kg = { class: "node-manual-entry-modal" }, qg = { class: "node-modal-body" }, Yg = { class: "node-modal-actions" }, Jg = /* @__PURE__ */ pe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = kr(), i = k(0), c = k(!1), d = k(!1), u = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && L(), _.value = !1;
    }
    const $ = N(() => o.nodes[i.value]), P = N(() => o.nodes.filter((xe) => o.nodeChoices.has(xe.node_type)).length), D = N(() => $.value ? w.value.get($.value.node_type) || [] : []), E = N(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (xe) => {
      var Ce;
      xe && ((Ce = xe.options) != null && Ce.length || w.value.has(xe.node_type) || p.value.has(xe.node_type) || o.nodeChoices.has(xe.node_type) || await x(xe.node_type));
    }, { immediate: !0 });
    async function x(xe) {
      p.value.add(xe);
      try {
        const Ce = await l(xe, 5);
        w.value.set(xe, Ce);
      } catch {
        w.value.set(xe, []);
      } finally {
        p.value.delete(xe);
      }
    }
    const H = N(() => o.autoResolvedPackages.filter((xe) => !o.skippedPackages.has(xe.package_id)).length);
    function V(xe) {
      return o.skippedPackages.has(xe);
    }
    function F(xe) {
      n("package-skip", xe);
    }
    const I = N(() => {
      var Ce;
      if (!$.value) return "not-found";
      const xe = o.nodeChoices.get($.value.node_type);
      if (xe)
        switch (xe.action) {
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
      const xe = o.nodeChoices.get($.value.node_type);
      if (xe)
        switch (xe.action) {
          case "install":
            return xe.package_id ? `→ ${xe.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Ce = $.value.options) != null && Ce.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function M(xe) {
      xe >= 0 && xe < o.nodes.length && (i.value = xe);
    }
    function ne() {
      var xe;
      for (let Ce = i.value + 1; Ce < o.nodes.length; Ce++) {
        const he = o.nodes[Ce];
        if (!((xe = o.nodeChoices) != null && xe.has(he.node_type))) {
          M(Ce);
          return;
        }
      }
    }
    function J() {
      $.value && (n("mark-optional", $.value.node_type), _t(() => ne()));
    }
    function G() {
      $.value && (n("skip", $.value.node_type), _t(() => ne()));
    }
    function ee(xe) {
      $.value && (n("option-selected", $.value.node_type, xe), _t(() => ne()));
    }
    function Q() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function A() {
      $.value && (u.value = $.value.node_type, v.value = D.value, c.value = !0, ce(u.value));
    }
    function j() {
      m.value = "", d.value = !0;
    }
    function L() {
      c.value = !1, u.value = "", v.value = [];
    }
    function se() {
      d.value = !1, m.value = "";
    }
    let de = null;
    function De() {
      de && clearTimeout(de), de = setTimeout(() => {
        ce(u.value);
      }, 300);
    }
    async function ce(xe) {
      if (!xe.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(xe, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function ge(xe) {
      $.value && (n("manual-entry", $.value.node_type, xe.package_id), L(), _t(() => ne()));
    }
    function Ee(xe) {
      $.value && (n("manual-entry", $.value.node_type, xe.package_id), _t(() => ne()));
    }
    function Re() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), se(), _t(() => ne()));
    }
    return (xe, Ce) => {
      var he, ue;
      return a(), r("div", _g, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", bg, [
          t("div", kg, [
            Ce[6] || (Ce[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", $g, f(H.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Cg, [
            (a(!0), r(W, null, we(e.autoResolvedPackages, (Ae) => (a(), r("div", {
              key: Ae.package_id,
              class: "resolved-package-item"
            }, [
              t("div", xg, [
                t("code", Sg, f(Ae.package_id), 1),
                t("span", Ig, f(Ae.node_types_count) + " node type" + f(Ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Eg, [
                V(Ae.package_id) ? (a(), r("span", Pg, " SKIPPED ")) : (a(), r("span", Tg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Me) => F(Ae.package_id)
                }, f(V(Ae.package_id) ? "Include" : "Skip"), 9, Rg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Mg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(W, { key: 2 }, [
          t("div", Dg, [
            Ce[7] || (Ce[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Lg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R($r, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Ce[0] || (Ce[0] = (Ae) => M(i.value - 1)),
            onNext: Ce[1] || (Ce[1] = (Ae) => M(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Og, [
            C(ig, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((he = $.value.options) != null && he.length),
              options: $.value.options,
              choice: (ue = e.nodeChoices) == null ? void 0 : ue.get($.value.node_type),
              status: I.value,
              "status-label": T.value,
              "search-results": D.value,
              "is-searching": E.value,
              onMarkOptional: J,
              onSkip: G,
              onManualEntry: j,
              onSearch: A,
              onOptionSelected: ee,
              onClearChoice: Q,
              onSearchResultSelected: Ee
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Ag, [...Ce[8] || (Ce[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(yt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Ce[4] || (Ce[4] = rt((Ae) => _.value = !0, ["self"])),
            onMouseup: rt(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Ce[3] || (Ce[3] = (Ae) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Ce[9] || (Ce[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              t("div", Ng, [
                C(es, {
                  modelValue: u.value,
                  "onUpdate:modelValue": Ce[2] || (Ce[2] = (Ae) => u.value = Ae),
                  placeholder: "Search by node type, package name...",
                  onInput: De
                }, null, 8, ["modelValue"]),
                t("div", Ug, [
                  v.value.length > 0 ? (a(), r("div", zg, [
                    (a(!0), r(W, null, we(v.value, (Ae) => (a(), r("div", {
                      key: Ae.package_id,
                      class: "node-search-result-item",
                      onClick: (Me) => ge(Ae)
                    }, [
                      t("div", Bg, [
                        t("code", Vg, f(Ae.package_id), 1),
                        Ae.match_confidence ? (a(), R(On, {
                          key: 0,
                          confidence: Ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Ae.description ? (a(), r("div", Wg, f(Ae.description), 1)) : y("", !0)
                    ], 8, Fg))), 128))
                  ])) : g.value ? (a(), r("div", Gg, "Searching...")) : u.value ? (a(), r("div", jg, 'No packages found matching "' + f(u.value) + '"', 1)) : (a(), r("div", Hg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(yt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: rt(se, ["self"])
          }, [
            t("div", Kg, [
              t("div", { class: "node-modal-header" }, [
                Ce[10] || (Ce[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              t("div", qg, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Ce[5] || (Ce[5] = (Ae) => m.value = Ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Yg, [
                  C(Oe, {
                    variant: "secondary",
                    onClick: se
                  }, {
                    default: h(() => [...Ce[11] || (Ce[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Oe, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Re
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
}), Xg = /* @__PURE__ */ ye(Jg, [["__scopeId", "data-v-6d7f8125"]]), Qg = { class: "node-info" }, Zg = { class: "node-info-text" }, eh = { class: "item-body" }, th = {
  key: 0,
  class: "resolved-state"
}, sh = {
  key: 1,
  class: "multiple-options"
}, oh = { class: "options-list" }, nh = ["onClick"], ah = ["name", "value", "checked", "onChange"], lh = { class: "option-content" }, ih = { class: "option-header" }, rh = { class: "option-filename" }, ch = { class: "option-meta" }, dh = { class: "option-size" }, uh = { class: "option-category" }, fh = { class: "option-path" }, mh = { class: "action-buttons" }, vh = {
  key: 2,
  class: "unresolved"
}, ph = { class: "action-buttons" }, gh = /* @__PURE__ */ pe({
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
      t("div", Qg, [
        t("span", Zg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Pe(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", eh, [
        l.value ? (a(), r("div", th, [
          C(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", sh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", oh, [
            (a(!0), r(W, null, we(e.options, (v, g) => (a(), r("label", {
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
              }, null, 40, ah),
              t("div", lh, [
                t("div", ih, [
                  t("span", rh, f(v.model.filename), 1),
                  C(On, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", ch, [
                  t("span", dh, f(d(v.model.size)), 1),
                  t("span", uh, f(v.model.category), 1)
                ]),
                t("div", fh, f(v.model.relative_path), 1)
              ])
            ], 10, nh))), 128))
          ]),
          t("div", mh, [
            C(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
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
        ])) : (a(), r("div", vh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", ph, [
            C(Oe, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
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
}), hh = /* @__PURE__ */ ye(gh, [["__scopeId", "data-v-8a82fefa"]]), yh = { class: "model-resolution-step" }, wh = { class: "step-header" }, _h = { class: "step-info" }, bh = { class: "step-title" }, kh = { class: "step-description" }, $h = { class: "stat-badge" }, Ch = {
  key: 1,
  class: "step-body"
}, xh = {
  key: 2,
  class: "empty-state"
}, Sh = { class: "model-search-modal" }, Ih = { class: "model-modal-body" }, Eh = {
  key: 0,
  class: "model-search-results"
}, Th = ["onClick"], Ph = { class: "model-result-header" }, Rh = { class: "model-result-filename" }, Mh = { class: "model-result-meta" }, Dh = { class: "model-result-category" }, Lh = { class: "model-result-size" }, Oh = {
  key: 0,
  class: "model-result-path"
}, Ah = {
  key: 1,
  class: "model-no-results"
}, Nh = {
  key: 2,
  class: "model-searching"
}, Uh = { class: "model-download-url-modal" }, zh = { class: "model-modal-body" }, Fh = { class: "model-input-group" }, Bh = { class: "model-input-group" }, Vh = { class: "model-modal-actions" }, Wh = /* @__PURE__ */ pe({
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
      var se;
      return L && ((se = o[L]) == null ? void 0 : se[0]) || null;
    }
    const l = e, i = s, c = k(0), d = k(!1), u = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[c.value]), S = N(() => l.models.some((L) => L.is_download_intent)), $ = N(() => l.models.filter(
      (L) => l.modelChoices.has(L.filename) || L.is_download_intent
    ).length), P = N(() => {
      var se;
      if (!_.value) return "";
      const L = n((se = _.value.reference) == null ? void 0 : se.node_type);
      return L ? `${L}/${_.value.filename}` : "";
    }), D = N(() => {
      var se;
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
      return _.value.is_download_intent ? "download" : (se = _.value.options) != null && se.length ? "ambiguous" : "not-found";
    }), E = N(() => {
      var se, de;
      if (!_.value) return;
      const L = l.modelChoices.get(_.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (se = L.selected_model) != null && se.filename ? `→ ${L.selected_model.filename}` : "Selected";
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
    function x(L) {
      L >= 0 && L < l.models.length && (c.value = L);
    }
    function H() {
      var L;
      for (let se = c.value + 1; se < l.models.length; se++) {
        const de = l.models[se];
        if (!de.is_download_intent && !((L = l.modelChoices) != null && L.has(de.filename))) {
          x(se);
          return;
        }
      }
    }
    function V() {
      _.value && (i("mark-optional", _.value.filename), _t(() => H()));
    }
    function F() {
      _.value && (i("skip", _.value.filename), _t(() => H()));
    }
    function I(L) {
      _.value && (i("option-selected", _.value.filename, L), _t(() => H()));
    }
    function T() {
      _.value && i("clear-choice", _.value.filename);
    }
    function M() {
      _.value && (m.value = _.value.filename, d.value = !0);
    }
    function ne() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, u.value = !0);
    }
    function J() {
      d.value = !1, m.value = "", w.value = [];
    }
    function G() {
      u.value = !1, v.value = "", g.value = "";
    }
    function ee() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function Q(L) {
      _.value && (J(), _t(() => H()));
    }
    function A() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), G(), _t(() => H()));
    }
    function j(L) {
      if (!L) return "Unknown";
      const se = L / (1024 * 1024 * 1024);
      return se >= 1 ? `${se.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, se) => {
      var de, De, ce;
      return a(), r("div", yh, [
        t("div", wh, [
          t("div", _h, [
            t("h3", bh, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", kh, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", $h, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R($r, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: se[0] || (se[0] = (ge) => x(c.value - 1)),
          onNext: se[1] || (se[1] = (ge) => x(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", Ch, [
          C(hh, {
            filename: _.value.filename,
            "node-type": ((de = _.value.reference) == null ? void 0 : de.node_type) || "Unknown",
            "has-multiple-options": !!((De = _.value.options) != null && De.length),
            options: _.value.options,
            choice: (ce = e.modelChoices) == null ? void 0 : ce.get(_.value.filename),
            status: D.value,
            "status-label": E.value,
            onMarkOptional: V,
            onSkip: F,
            onDownloadUrl: ne,
            onSearch: M,
            onOptionSelected: I,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", xh, [...se[5] || (se[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(yt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(J, ["self"])
          }, [
            t("div", Sh, [
              t("div", { class: "model-modal-header" }, [
                se[6] || (se[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              t("div", Ih, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": se[2] || (se[2] = (ge) => m.value = ge),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Eh, [
                  (a(!0), r(W, null, we(w.value, (ge) => (a(), r("div", {
                    key: ge.hash,
                    class: "model-search-result-item",
                    onClick: (Ee) => Q()
                  }, [
                    t("div", Ph, [
                      t("code", Rh, f(ge.filename), 1)
                    ]),
                    t("div", Mh, [
                      t("span", Dh, f(ge.category), 1),
                      t("span", Lh, f(j(ge.size)), 1)
                    ]),
                    ge.relative_path ? (a(), r("div", Oh, f(ge.relative_path), 1)) : y("", !0)
                  ], 8, Th))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Ah, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Nh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(yt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(G, ["self"])
          }, [
            t("div", Uh, [
              t("div", { class: "model-modal-header" }, [
                se[7] || (se[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: G
                }, "✕")
              ]),
              t("div", zh, [
                t("div", Fh, [
                  se[8] || (se[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(es, {
                    modelValue: v.value,
                    "onUpdate:modelValue": se[3] || (se[3] = (ge) => v.value = ge),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Bh, [
                  se[9] || (se[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(es, {
                    modelValue: g.value,
                    "onUpdate:modelValue": se[4] || (se[4] = (ge) => g.value = ge),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Vh, [
                  C(Oe, {
                    variant: "secondary",
                    onClick: G
                  }, {
                    default: h(() => [...se[10] || (se[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Oe, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: A
                  }, {
                    default: h(() => [...se[11] || (se[11] = [
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
}), Gh = /* @__PURE__ */ ye(Wh, [["__scopeId", "data-v-5c700bfa"]]), jh = { class: "applying-step" }, Hh = {
  key: 0,
  class: "phase-content"
}, Kh = {
  key: 1,
  class: "phase-content"
}, qh = { class: "phase-description" }, Yh = { class: "overall-progress" }, Jh = { class: "progress-bar" }, Xh = { class: "progress-label" }, Qh = { class: "install-list" }, Zh = { class: "install-icon" }, ey = { key: 0 }, ty = {
  key: 1,
  class: "spinner"
}, sy = { key: 2 }, oy = { key: 3 }, ny = {
  key: 0,
  class: "install-error"
}, ay = {
  key: 2,
  class: "phase-content"
}, ly = { class: "phase-header" }, iy = { class: "phase-title" }, ry = { class: "completion-summary" }, cy = {
  key: 0,
  class: "summary-item success"
}, dy = { class: "summary-text" }, uy = {
  key: 1,
  class: "summary-item error"
}, fy = { class: "summary-text" }, my = {
  key: 2,
  class: "failed-list"
}, vy = { class: "failed-node-id" }, py = { class: "failed-error" }, gy = {
  key: 4,
  class: "summary-item success"
}, hy = {
  key: 5,
  class: "restart-prompt"
}, yy = {
  key: 3,
  class: "phase-content error"
}, wy = { class: "error-message" }, _y = /* @__PURE__ */ pe({
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
      return a(), r("div", jh, [
        e.progress.phase === "resolving" ? (a(), r("div", Hh, [...u[2] || (u[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", Kh, [
          u[3] || (u[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", qh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Yh, [
            t("div", Jh, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Xh, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Qh, [
            (a(!0), r(W, null, we(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Pe(["install-item", i(p, _)])
            }, [
              t("span", Zh, [
                i(p, _) === "pending" ? (a(), r("span", ey, "○")) : i(p, _) === "installing" ? (a(), r("span", ty, "◌")) : i(p, _) === "complete" ? (a(), r("span", sy, "✓")) : i(p, _) === "failed" ? (a(), r("span", oy, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", ny, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", ay, [
          t("div", ly, [
            t("span", {
              class: Pe(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", iy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", ry, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", cy, [
              u[4] || (u[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", dy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", uy, [
              u[5] || (u[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", fy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", my, [
              (a(!0), r(W, null, we(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", vy, f(p.node_id), 1),
                t("span", py, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: u[0] || (u[0] = (p) => d.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", gy, [...u[6] || (u[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            u[8] || (u[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", hy, [
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
        ])) : e.progress.phase === "error" ? (a(), r("div", yy, [
          u[9] || (u[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", wy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), by = /* @__PURE__ */ ye(_y, [["__scopeId", "data-v-5efaae58"]]), ky = {
  key: 0,
  class: "loading-state"
}, $y = {
  key: 1,
  class: "wizard-content"
}, Cy = {
  key: 0,
  class: "step-content"
}, xy = { class: "analysis-summary" }, Sy = { class: "analysis-header" }, Iy = { class: "summary-description" }, Ey = { class: "stats-grid" }, Ty = { class: "stat-card" }, Py = { class: "stat-items" }, Ry = {
  key: 0,
  class: "stat-item success"
}, My = { class: "stat-count" }, Dy = {
  key: 1,
  class: "stat-item info"
}, Ly = { class: "stat-count" }, Oy = {
  key: 2,
  class: "stat-item warning"
}, Ay = { class: "stat-count" }, Ny = {
  key: 3,
  class: "stat-item error"
}, Uy = { class: "stat-count" }, zy = { class: "stat-card" }, Fy = { class: "stat-items" }, By = { class: "stat-item success" }, Vy = { class: "stat-count" }, Wy = {
  key: 0,
  class: "stat-item info"
}, Gy = { class: "stat-count" }, jy = {
  key: 1,
  class: "stat-item warning"
}, Hy = { class: "stat-count" }, Ky = {
  key: 2,
  class: "stat-item warning"
}, qy = { class: "stat-count" }, Yy = {
  key: 3,
  class: "stat-item error"
}, Jy = { class: "stat-count" }, Xy = {
  key: 0,
  class: "status-message warning"
}, Qy = { class: "status-text" }, Zy = {
  key: 1,
  class: "status-message info"
}, e1 = { class: "status-text" }, t1 = {
  key: 2,
  class: "status-message info"
}, s1 = { class: "status-text" }, o1 = {
  key: 3,
  class: "status-message warning"
}, n1 = { class: "status-text" }, a1 = {
  key: 4,
  class: "status-message success"
}, l1 = {
  key: 5,
  class: "category-mismatch-section"
}, i1 = { class: "mismatch-list" }, r1 = { class: "mismatch-path" }, c1 = { class: "mismatch-target" }, d1 = {
  key: 3,
  class: "step-content"
}, u1 = { class: "review-summary" }, f1 = { class: "review-stats" }, m1 = { class: "review-stat" }, v1 = { class: "stat-value" }, p1 = { class: "review-stat" }, g1 = { class: "stat-value" }, h1 = { class: "review-stat" }, y1 = { class: "stat-value" }, w1 = { class: "review-stat" }, _1 = { class: "stat-value" }, b1 = {
  key: 0,
  class: "review-section"
}, k1 = { class: "section-title" }, $1 = { class: "review-items" }, C1 = { class: "item-name" }, x1 = { class: "item-choice" }, S1 = {
  key: 0,
  class: "choice-badge install"
}, I1 = {
  key: 1,
  class: "choice-badge skip"
}, E1 = {
  key: 1,
  class: "review-section"
}, T1 = { class: "section-title" }, P1 = { class: "review-items" }, R1 = { class: "item-name" }, M1 = { class: "item-choice" }, D1 = {
  key: 0,
  class: "choice-badge install"
}, L1 = {
  key: 1,
  class: "choice-badge optional"
}, O1 = {
  key: 2,
  class: "choice-badge skip"
}, A1 = {
  key: 1,
  class: "choice-badge pending"
}, N1 = {
  key: 2,
  class: "review-section"
}, U1 = { class: "section-title" }, z1 = { class: "review-items download-details" }, F1 = { class: "download-info" }, B1 = { class: "item-name" }, V1 = { class: "download-meta" }, W1 = { class: "download-path" }, G1 = ["title"], j1 = {
  key: 3,
  class: "review-section"
}, H1 = { class: "section-title" }, K1 = { class: "review-items" }, q1 = { class: "item-name" }, Y1 = { class: "item-choice" }, J1 = {
  key: 0,
  class: "choice-badge install"
}, X1 = {
  key: 1,
  class: "choice-badge download"
}, Q1 = {
  key: 2,
  class: "choice-badge optional"
}, Z1 = {
  key: 3,
  class: "choice-badge skip"
}, e0 = {
  key: 4,
  class: "choice-badge skip"
}, t0 = {
  key: 1,
  class: "choice-badge download"
}, s0 = {
  key: 2,
  class: "choice-badge pending"
}, o0 = {
  key: 4,
  class: "no-choices"
}, n0 = /* @__PURE__ */ pe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: d, progress: u, resetProgress: m } = kr(), { loadPendingDownloads: v } = ko(), { openFileLocation: g } = at(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), D = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Set()), H = N(() => {
      const B = [
        { id: "analysis", label: "Analysis" }
      ];
      return (F.value || M.value) && B.push({ id: "nodes", label: "Nodes" }), I.value && B.push({ id: "models", label: "Models" }), B.push({ id: "review", label: "Review" }), $.value === "applying" && B.push({ id: "applying", label: "Applying" }), B;
    }), V = N(() => w.value ? w.value.stats.needs_user_input : !1), F = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = N(() => w.value ? w.value.stats.download_intents > 0 : !1), M = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ne = N(() => w.value ? w.value.nodes.resolved.length : 0), J = N(() => w.value ? w.value.models.resolved.filter((B) => B.has_category_mismatch) : []), G = N(() => J.value.length > 0), ee = N(() => F.value || M.value ? "nodes" : I.value ? "models" : "review"), Q = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((re) => !re.is_installed), U = /* @__PURE__ */ new Set();
      return B.filter((re) => U.has(re.package.package_id) ? !1 : (U.add(re.package.package_id), !0));
    }), A = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((re) => !re.is_installed), U = /* @__PURE__ */ new Map();
      for (const re of B) {
        const We = U.get(re.package.package_id);
        We ? We.node_types_count++ : U.set(re.package.package_id, {
          package_id: re.package.package_id,
          title: re.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), j = N(() => Q.value.filter((B) => !x.value.has(B.package.package_id))), L = N(() => w.value ? w.value.models.resolved.filter(
      (B) => B.match_type === "download_intent" || B.match_type === "property_download_intent"
    ).map((B) => ({
      filename: B.reference.widget_value,
      reference: B.reference,
      is_download_intent: !0,
      resolved_model: B.model,
      download_source: B.download_source,
      target_path: B.target_path
    })) : []), se = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.unresolved.map((re) => ({
        node_type: re.reference.node_type,
        reason: re.reason,
        is_unresolved: !0,
        options: void 0
      })), U = w.value.nodes.ambiguous.map((re) => ({
        node_type: re.reference.node_type,
        has_multiple_options: !0,
        options: re.options.map((We) => ({
          package_id: We.package.package_id,
          title: We.package.title,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          is_installed: We.is_installed
        }))
      }));
      return [...B, ...U];
    }), de = N(() => {
      if (!w.value) return [];
      const B = w.value.models.unresolved.map((re) => ({
        filename: re.reference.widget_value,
        reference: re.reference,
        reason: re.reason,
        is_unresolved: !0,
        options: void 0
      })), U = w.value.models.ambiguous.map((re) => ({
        filename: re.reference.widget_value,
        reference: re.reference,
        has_multiple_options: !0,
        options: re.options.map((We) => ({
          model: We.model,
          match_confidence: We.match_confidence,
          match_type: We.match_type,
          has_download_source: We.has_download_source
        }))
      }));
      return [...B, ...U];
    }), De = N(() => {
      const B = de.value, U = L.value.map((re) => ({
        filename: re.filename,
        reference: re.reference,
        is_download_intent: !0,
        resolved_model: re.resolved_model,
        download_source: re.download_source,
        target_path: re.target_path,
        options: void 0
      }));
      return [...B, ...U];
    }), ce = N(() => L.value.filter((B) => {
      const U = E.value.get(B.filename);
      return U ? U.action === "download" : !0;
    }).map((B) => ({
      filename: B.filename,
      url: B.download_source,
      target_path: B.target_path
    })));
    function ge(B, U = 50) {
      return B.length <= U ? B : B.slice(0, U - 3) + "...";
    }
    const Ee = N(() => {
      let B = j.value.length;
      for (const U of D.value.values())
        U.action === "install" && B++;
      for (const U of E.value.values())
        U.action === "select" && B++;
      return B;
    }), Re = N(() => {
      let B = 0;
      for (const U of E.value.values())
        U.action === "download" && B++;
      for (const U of L.value)
        E.value.get(U.filename) || B++;
      return B;
    }), xe = N(() => {
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
      for (const U of se.value)
        D.value.has(U.node_type) || B++;
      for (const U of de.value)
        E.value.has(U.filename) || B++;
      return B;
    }), he = N(() => {
      const B = {};
      if (B.analysis = { resolved: 1, total: 1 }, F.value) {
        const U = se.value.length, re = se.value.filter(
          (We) => D.value.has(We.node_type)
        ).length;
        B.nodes = { resolved: re, total: U };
      }
      if (I.value) {
        const U = De.value.length, re = De.value.filter(
          (We) => E.value.has(We.filename) || We.is_download_intent
        ).length;
        B.models = { resolved: re, total: U };
      }
      if (B.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const U = u.totalFiles || 1, re = u.completedFiles.length;
        B.applying = { resolved: re, total: U };
      }
      return B;
    });
    function ue(B) {
      $.value = B;
    }
    function Ae() {
      const B = H.value.findIndex((U) => U.id === $.value);
      B > 0 && ($.value = H.value[B - 1].id);
    }
    function Me() {
      const B = H.value.findIndex((U) => U.id === $.value);
      B < H.value.length - 1 && ($.value = H.value[B + 1].id);
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
    function z() {
      P.value.includes("analysis") || P.value.push("analysis"), F.value || M.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function oe(B) {
      D.value.set(B, { action: "optional" });
    }
    function le(B) {
      D.value.set(B, { action: "skip" });
    }
    function me(B, U) {
      var We;
      const re = se.value.find((Qe) => Qe.node_type === B);
      (We = re == null ? void 0 : re.options) != null && We[U] && D.value.set(B, {
        action: "install",
        package_id: re.options[U].package_id
      });
    }
    function ve(B, U) {
      D.value.set(B, {
        action: "install",
        package_id: U
      });
    }
    function Se(B) {
      D.value.delete(B);
    }
    function Ie(B) {
      x.value.has(B) ? x.value.delete(B) : x.value.add(B);
    }
    function ae(B) {
      E.value.set(B, { action: "optional" });
    }
    function fe(B) {
      E.value.set(B, { action: "skip" });
    }
    function ze(B, U) {
      var We;
      const re = de.value.find((Qe) => Qe.filename === B);
      (We = re == null ? void 0 : re.options) != null && We[U] && E.value.set(B, {
        action: "select",
        selected_model: re.options[U].model
      });
    }
    function Te(B, U, re) {
      E.value.set(B, {
        action: "download",
        url: U,
        target_path: re
      });
    }
    function Z(B) {
      E.value.delete(B);
    }
    async function q(B) {
      try {
        await g(B);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function Ne() {
      var B;
      _.value = !0, S.value = null, m(), u.phase = "resolving", $.value = "applying";
      try {
        const U = await i(o.workflowName, D.value, E.value, x.value);
        U.models_to_download && U.models_to_download.length > 0 && d(o.workflowName, U.models_to_download);
        const re = [
          ...U.nodes_to_install || [],
          ...j.value.map((Qe) => Qe.package.package_id)
        ];
        u.nodesToInstall = [...new Set(re)], u.nodesToInstall.length > 0 && await c(o.workflowName), u.phase = "complete", await v();
        const We = u.installError || ((B = u.nodeInstallProgress) == null ? void 0 : B.completedNodes.some((Qe) => !Qe.success));
        !u.needsRestart && !We && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to apply resolution", u.error = S.value, u.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function be() {
      n("refresh"), n("restart"), n("close");
    }
    async function _e() {
      var U;
      const B = ((U = u.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((re) => !re.success).map((re) => re.node_id)) || [];
      if (B.length !== 0) {
        u.phase = "installing", u.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: B.length
        }, u.nodesToInstall = B, u.nodesInstalled = [], u.installError = void 0;
        try {
          await c(o.workflowName), u.phase = "complete";
        } catch (re) {
          u.error = re instanceof Error ? re.message : "Retry failed", u.phase = "error";
        }
      }
    }
    return et(O), (B, U) => (a(), R(vt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (re) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", ky, [...U[2] || (U[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", $y, [
          C(Pp, {
            steps: H.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": he.value,
            onStepChange: ue
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", Cy, [
            t("div", xy, [
              t("div", Sy, [
                U[3] || (U[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Iy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Ey, [
                t("div", Ty, [
                  U[12] || (U[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Py, [
                    ne.value > 0 ? (a(), r("div", Ry, [
                      U[4] || (U[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", My, f(ne.value), 1),
                      U[5] || (U[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Dy, [
                      U[6] || (U[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ly, f(w.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", Oy, [
                      U[8] || (U[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Ay, f(w.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Ny, [
                      U[10] || (U[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Uy, f(w.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", zy, [
                  U[23] || (U[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Fy, [
                    t("div", By, [
                      U[13] || (U[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Vy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      U[14] || (U[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Wy, [
                      U[15] || (U[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Gy, f(w.value.stats.download_intents), 1),
                      U[16] || (U[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    G.value ? (a(), r("div", jy, [
                      U[17] || (U[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Hy, f(J.value.length), 1),
                      U[18] || (U[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Ky, [
                      U[19] || (U[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", qy, f(w.value.models.ambiguous.length), 1),
                      U[20] || (U[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Yy, [
                      U[21] || (U[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Jy, f(w.value.models.unresolved.length), 1),
                      U[22] || (U[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (a(), r("div", Xy, [
                U[24] || (U[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Qy, f(se.value.length + de.value.length) + " items need your input", 1)
              ])) : M.value ? (a(), r("div", Zy, [
                U[25] || (U[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", e1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), r("div", t1, [
                U[26] || (U[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", s1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : G.value ? (a(), r("div", o1, [
                U[27] || (U[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", n1, f(J.value.length) + " model" + f(J.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", a1, [...U[28] || (U[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              G.value ? (a(), r("div", l1, [
                U[31] || (U[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", i1, [
                  (a(!0), r(W, null, we(J.value, (re) => {
                    var We, Qe;
                    return a(), r("div", {
                      key: re.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", r1, f(re.actual_category) + "/" + f((We = re.model) == null ? void 0 : We.filename), 1),
                      U[30] || (U[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", c1, f((Qe = re.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      re.file_path ? (a(), R(Oe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (mt) => q(re.file_path)
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
          $.value === "nodes" ? (a(), R(Xg, {
            key: 1,
            nodes: se.value,
            "node-choices": D.value,
            "auto-resolved-packages": A.value,
            "skipped-packages": x.value,
            onMarkOptional: oe,
            onSkip: le,
            onOptionSelected: me,
            onManualEntry: ve,
            onClearChoice: Se,
            onPackageSkip: Ie
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), R(Gh, {
            key: 2,
            models: De.value,
            "model-choices": E.value,
            onMarkOptional: ae,
            onSkip: fe,
            onOptionSelected: ze,
            onDownloadUrl: Te,
            onClearChoice: Z
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", d1, [
            t("div", u1, [
              U[37] || (U[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", f1, [
                t("div", m1, [
                  t("span", v1, f(Ee.value), 1),
                  U[32] || (U[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", p1, [
                  t("span", g1, f(Re.value), 1),
                  U[33] || (U[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", h1, [
                  t("span", y1, f(xe.value), 1),
                  U[34] || (U[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", w1, [
                  t("span", _1, f(Ce.value), 1),
                  U[35] || (U[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (a(), r("div", b1, [
                t("h4", k1, "Node Packages (" + f(A.value.length) + ")", 1),
                t("div", $1, [
                  (a(!0), r(W, null, we(A.value, (re) => (a(), r("div", {
                    key: re.package_id,
                    class: "review-item"
                  }, [
                    t("code", C1, f(re.package_id), 1),
                    t("div", x1, [
                      x.value.has(re.package_id) ? (a(), r("span", I1, "Skipped")) : (a(), r("span", S1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              se.value.length > 0 ? (a(), r("div", E1, [
                t("h4", T1, "Node Choices (" + f(se.value.length) + ")", 1),
                t("div", P1, [
                  (a(!0), r(W, null, we(se.value, (re) => {
                    var We, Qe, mt, lt;
                    return a(), r("div", {
                      key: re.node_type,
                      class: "review-item"
                    }, [
                      t("code", R1, f(re.node_type), 1),
                      t("div", M1, [
                        D.value.has(re.node_type) ? (a(), r(W, { key: 0 }, [
                          ((We = D.value.get(re.node_type)) == null ? void 0 : We.action) === "install" ? (a(), r("span", D1, f((Qe = D.value.get(re.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((mt = D.value.get(re.node_type)) == null ? void 0 : mt.action) === "optional" ? (a(), r("span", L1, " Optional ")) : ((lt = D.value.get(re.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), r("span", O1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", A1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ce.value.length > 0 ? (a(), r("div", N1, [
                t("h4", U1, "Models to Download (" + f(ce.value.length) + ")", 1),
                t("div", z1, [
                  (a(!0), r(W, null, we(ce.value, (re) => (a(), r("div", {
                    key: re.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", F1, [
                      t("code", B1, f(re.filename), 1),
                      t("div", V1, [
                        t("span", W1, "→ " + f(re.target_path), 1),
                        re.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: re.url
                        }, f(ge(re.url)), 9, G1)) : y("", !0)
                      ])
                    ]),
                    U[36] || (U[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              De.value.length > 0 ? (a(), r("div", j1, [
                t("h4", H1, "Models (" + f(De.value.length) + ")", 1),
                t("div", K1, [
                  (a(!0), r(W, null, we(De.value, (re) => {
                    var We, Qe, mt, lt, dt, Rt, zt;
                    return a(), r("div", {
                      key: re.filename,
                      class: "review-item"
                    }, [
                      t("code", q1, f(re.filename), 1),
                      t("div", Y1, [
                        E.value.has(re.filename) ? (a(), r(W, { key: 0 }, [
                          ((We = E.value.get(re.filename)) == null ? void 0 : We.action) === "select" ? (a(), r("span", J1, f((mt = (Qe = E.value.get(re.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : mt.filename), 1)) : ((lt = E.value.get(re.filename)) == null ? void 0 : lt.action) === "download" ? (a(), r("span", X1, " Download ")) : ((dt = E.value.get(re.filename)) == null ? void 0 : dt.action) === "optional" ? (a(), r("span", Q1, " Optional ")) : ((Rt = E.value.get(re.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), r("span", Z1, " Skip ")) : ((zt = E.value.get(re.filename)) == null ? void 0 : zt.action) === "cancel_download" ? (a(), r("span", e0, " Cancel Download ")) : y("", !0)
                        ], 64)) : re.is_download_intent ? (a(), r("span", t0, " Pending Download ")) : (a(), r("span", s0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Q.value.length === 0 && se.value.length === 0 && De.value.length === 0 ? (a(), r("div", o0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), R(by, {
            key: 4,
            progress: Ge(u),
            onRestart: be,
            onRetryFailed: _e
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), R(Oe, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ae
        }, {
          default: h(() => [...U[38] || (U[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        U[41] || (U[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ge(u).phase === "complete" || Ge(u).phase === "error" ? (a(), R(Oe, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (re) => n("close"))
        }, {
          default: h(() => [
            b(f(Ge(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), R(Oe, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: z
        }, {
          default: h(() => [
            b(f(ee.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), R(Oe, {
          key: 3,
          variant: "primary",
          onClick: Me
        }, {
          default: h(() => [
            b(f(I.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), R(Oe, {
          key: 4,
          variant: "primary",
          onClick: Me
        }, {
          default: h(() => [...U[39] || (U[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), R(Oe, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Ne
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
}), a0 = /* @__PURE__ */ ye(n0, [["__scopeId", "data-v-40d8d5a8"]]), l0 = { class: "search-input-wrapper" }, i0 = ["value", "placeholder"], r0 = /* @__PURE__ */ pe({
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
    }), (u, m) => (a(), r("div", l0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Zt(d, ["escape"])
      }, null, 40, i0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: d,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), c0 = /* @__PURE__ */ ye(r0, [["__scopeId", "data-v-266f857a"]]), d0 = { class: "search-bar" }, u0 = /* @__PURE__ */ pe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", d0, [
      C(c0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ ye(u0, [["__scopeId", "data-v-3d51bbfd"]]), f0 = { class: "section-group" }, m0 = {
  key: 0,
  class: "section-content"
}, v0 = /* @__PURE__ */ pe({
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
    return (c, d) => (a(), r("section", f0, [
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
      !e.collapsible || l.value ? (a(), r("div", m0, [
        qe(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ ye(v0, [["__scopeId", "data-v-c48e33ed"]]), p0 = { class: "item-header" }, g0 = {
  key: 0,
  class: "item-icon"
}, h0 = { class: "item-info" }, y0 = {
  key: 0,
  class: "item-title"
}, w0 = {
  key: 1,
  class: "item-subtitle"
}, _0 = {
  key: 0,
  class: "item-details"
}, b0 = {
  key: 1,
  class: "item-actions"
}, k0 = /* @__PURE__ */ pe({
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
      t("div", p0, [
        l.$slots.icon ? (a(), r("span", g0, [
          qe(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", h0, [
          l.$slots.title ? (a(), r("div", y0, [
            qe(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", w0, [
            qe(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", _0, [
        qe(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", b0, [
        qe(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ ye(k0, [["__scopeId", "data-v-cc435e0e"]]), $0 = { class: "loading-state" }, C0 = { class: "loading-message" }, x0 = /* @__PURE__ */ pe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", $0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", C0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ ye(x0, [["__scopeId", "data-v-ad8436c9"]]), S0 = { class: "error-state" }, I0 = { class: "error-message" }, E0 = /* @__PURE__ */ pe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", S0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", I0, f(e.message), 1),
      e.retry ? (a(), R(ie, {
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
}), Rs = /* @__PURE__ */ ye(E0, [["__scopeId", "data-v-5397be48"]]), T0 = /* @__PURE__ */ pe({
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
    ), D = N(() => {
      if (!u.value.trim()) return i.value;
      const A = u.value.toLowerCase();
      return i.value.filter((j) => j.name.toLowerCase().includes(A));
    }), E = N(
      () => _.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), x = N(
      () => S.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), H = N(
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
    async function I(A = !1) {
      c.value = !0, d.value = null;
      try {
        i.value = await l(A);
      } catch (j) {
        d.value = j instanceof Error ? j.message : "Failed to load workflows";
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
    function ne() {
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
    function ee(A) {
      const j = [];
      return A.missing_nodes > 0 && j.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && j.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && j.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && j.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), j.length > 0 ? j.join(", ") : "Has issues";
    }
    function Q(A) {
      const j = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state;
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync` : j || "Unknown";
    }
    return et(I), (A, j) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          C($o, {
            modelValue: u.value,
            "onUpdate:modelValue": j[0] || (j[0] = (L) => u.value = L),
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
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            E.value.length ? (a(), R(it, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(E.value, (L) => (a(), R(Et, {
                  key: L.name,
                  status: "broken"
                }, {
                  icon: h(() => [...j[7] || (j[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ee(L)), 1)
                  ]),
                  actions: h(() => [
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => M(L.name)
                    }, {
                      default: h(() => [...j[8] || (j[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(L.name)
                    }, {
                      default: h(() => [...j[9] || (j[9] = [
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
            x.value.length ? (a(), R(it, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(x.value, (L) => (a(), R(Et, {
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
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(L.name)
                    }, {
                      default: h(() => [...j[10] || (j[10] = [
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
            H.value.length ? (a(), R(it, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(H.value, (L) => (a(), R(Et, {
                  key: L.name,
                  status: L.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...j[11] || (j[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Q(L)), 1)
                  ]),
                  actions: h(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(L.name)
                    }, {
                      default: h(() => [...j[12] || (j[12] = [
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
            V.value.length ? (a(), R(it, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: j[2] || (j[2] = (L) => m.value = L)
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(F.value, (L) => (a(), R(Et, {
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
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => T(L.name)
                    }, {
                      default: h(() => [...j[13] || (j[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && V.value.length > 5 ? (a(), R(ie, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: j[1] || (j[1] = (L) => v.value = !0),
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
      g.value && p.value ? (a(), R(yp, {
        key: 0,
        "workflow-name": p.value,
        onClose: j[3] || (j[3] = (L) => g.value = !1),
        onResolve: j[4] || (j[4] = (L) => M(p.value)),
        onRefresh: j[5] || (j[5] = (L) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(a0, {
        key: 1,
        "workflow-name": p.value,
        onClose: J,
        onInstall: ne,
        onRefresh: j[6] || (j[6] = (L) => n("refresh")),
        onRestart: G
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), P0 = /* @__PURE__ */ ye(T0, [["__scopeId", "data-v-fa3f076e"]]), R0 = /* @__PURE__ */ pe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Pe(["summary-bar", e.variant])
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ ye(R0, [["__scopeId", "data-v-ccb7816e"]]), M0 = {
  key: 0,
  class: "model-details"
}, D0 = { class: "detail-section" }, L0 = { class: "detail-row" }, O0 = { class: "detail-value mono" }, A0 = { class: "detail-row" }, N0 = { class: "detail-value mono" }, U0 = { class: "detail-row" }, z0 = { class: "detail-value mono" }, F0 = { class: "detail-row" }, B0 = { class: "detail-value" }, V0 = { class: "detail-row" }, W0 = { class: "detail-value" }, G0 = { class: "detail-row" }, j0 = { class: "detail-value" }, H0 = { class: "detail-section" }, K0 = { class: "section-header" }, q0 = {
  key: 0,
  class: "locations-list"
}, Y0 = { class: "location-path mono" }, J0 = {
  key: 0,
  class: "location-modified"
}, X0 = ["onClick"], Q0 = {
  key: 1,
  class: "empty-state"
}, Z0 = { class: "detail-section" }, ew = { class: "section-header" }, tw = {
  key: 0,
  class: "sources-list"
}, sw = { class: "source-type" }, ow = ["href"], nw = ["disabled", "onClick"], aw = {
  key: 1,
  class: "empty-state"
}, lw = { class: "add-source-form" }, iw = ["disabled"], rw = {
  key: 2,
  class: "source-error"
}, cw = {
  key: 3,
  class: "source-success"
}, dw = /* @__PURE__ */ pe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = at(), d = k(null), u = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
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
    async function H() {
      if (!(!v.value.trim() || !d.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(d.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await F();
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
          await i(d.value.hash, I), P("Source removed"), await F();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function F() {
      u.value = !0, m.value = null;
      try {
        d.value = await n(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        u.value = !1;
      }
    }
    return et(F), (I, T) => {
      var M;
      return a(), r(W, null, [
        C(vt, {
          title: `Model Details: ${((M = d.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: u.value,
          error: m.value,
          onClose: T[5] || (T[5] = (ne) => I.$emit("close"))
        }, {
          body: h(() => {
            var ne, J, G, ee;
            return [
              d.value ? (a(), r("div", M0, [
                t("section", D0, [
                  t("div", L0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", O0, f(d.value.hash || "Not computed"), 1),
                    d.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Q) => E(d.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", A0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", N0, f(d.value.blake3 || "Not computed"), 1),
                    d.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Q) => E(d.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", U0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", z0, f(d.value.sha256 || "Not computed"), 1),
                    d.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Q) => E(d.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", F0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", B0, f(D(d.value.size)), 1)
                  ]),
                  t("div", V0, [
                    T[10] || (T[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", W0, f(d.value.category), 1)
                  ]),
                  t("div", G0, [
                    T[11] || (T[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", j0, f(d.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", H0, [
                  t("h4", K0, "Locations (" + f(((ne = d.value.locations) == null ? void 0 : ne.length) || 0) + ")", 1),
                  (J = d.value.locations) != null && J.length ? (a(), r("div", q0, [
                    (a(!0), r(W, null, we(d.value.locations, (Q, A) => (a(), r("div", {
                      key: A,
                      class: "location-item"
                    }, [
                      t("span", Y0, f(Q.path), 1),
                      Q.modified ? (a(), r("span", J0, "Modified: " + f(Q.modified), 1)) : y("", !0),
                      Q.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (j) => x(Q.path)
                      }, " Open File Location ", 8, X0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", Q0, "No locations found"))
                ]),
                t("section", Z0, [
                  t("h4", ew, "Download Sources (" + f(((G = d.value.sources) == null ? void 0 : G.length) || 0) + ")", 1),
                  (ee = d.value.sources) != null && ee.length ? (a(), r("div", tw, [
                    (a(!0), r(W, null, we(d.value.sources, (Q, A) => (a(), r("div", {
                      key: A,
                      class: "source-item"
                    }, [
                      t("span", sw, f(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Q.url), 9, ow),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Q.url,
                        onClick: (j) => V(Q.url)
                      }, f(w.value === Q.url ? "..." : "×"), 9, nw)
                    ]))), 128))
                  ])) : (a(), r("div", aw, " No download sources configured ")),
                  t("div", lw, [
                    Ye(t("input", {
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
                      onClick: H
                    }, f(g.value ? "Adding..." : "Add Source"), 9, iw)
                  ]),
                  p.value ? (a(), r("p", rw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", cw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (ne) => I.$emit("close"))
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
}), el = /* @__PURE__ */ ye(dw, [["__scopeId", "data-v-f15cbb56"]]), uw = /* @__PURE__ */ pe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = at(), i = k([]), c = k([]), d = k("production"), u = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = N(
      () => i.value.reduce((F, I) => F + (I.size || 0), 0)
    ), S = N(() => {
      if (!v.value.trim()) return i.value;
      const F = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(F));
    }), $ = N(() => {
      if (!v.value.trim()) return c.value;
      const F = v.value.toLowerCase();
      return c.value.filter((I) => I.filename.toLowerCase().includes(F));
    }), P = N(() => {
      const F = {};
      for (const T of S.value) {
        const M = T.type || "other";
        F[M] || (F[M] = []), F[M].push(T);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([T], [M]) => {
        const ne = I.indexOf(T), J = I.indexOf(M);
        return ne >= 0 && J >= 0 ? ne - J : ne >= 0 ? -1 : J >= 0 ? 1 : T.localeCompare(M);
      }).map(([T, M]) => ({ type: T, models: M }));
    });
    function D(F) {
      if (!F) return "Unknown";
      const I = F / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function E(F) {
      w.value = F.hash || F.filename;
    }
    function x(F) {
      o("navigate", "model-index");
    }
    function H(F) {
      alert(`Download functionality not yet implemented for ${F}`);
    }
    async function V() {
      u.value = !0, m.value = null;
      try {
        const F = await n();
        i.value = F, c.value = [];
        const I = await l();
        d.value = I.environment || "production";
      } catch (F) {
        m.value = F instanceof Error ? F.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return et(V), (F, I) => (a(), r(W, null, [
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
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            i.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(D(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(W, null, we(P.value, (T) => (a(), R(it, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(T.models, (M) => (a(), R(Et, {
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
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ne) => E(M)
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
            $.value.length ? (a(), R(it, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (a(!0), r(W, null, we($.value, (T) => (a(), R(Et, {
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
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => H(T.filename)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
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
          C(ie, {
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
      w.value ? (a(), R(el, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), fw = /* @__PURE__ */ ye(uw, [["__scopeId", "data-v-cb4f12b3"]]), mw = {
  key: 0,
  class: "indexing-progress"
}, vw = { class: "progress-info" }, pw = { class: "progress-label" }, gw = { class: "progress-count" }, hw = { class: "progress-bar" }, yw = { class: "modal-content" }, ww = { class: "modal-header" }, _w = { class: "modal-body" }, bw = { class: "input-group" }, kw = { class: "current-path" }, $w = { class: "input-group" }, Cw = { class: "modal-footer" }, xw = { class: "modal-content" }, Sw = { class: "modal-header" }, Iw = { class: "modal-body" }, Ew = { class: "input-group" }, Tw = { class: "input-group" }, Pw = { class: "modal-footer" }, Rw = /* @__PURE__ */ pe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = at(), { addToQueue: c } = ko(), d = s, u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), D = k(!1), E = k(!1), x = k(""), H = k(""), V = k(null), F = N(
      () => u.value.reduce((j, L) => j + (L.size || 0), 0)
    ), I = N(() => {
      if (!w.value.trim()) return u.value;
      const j = w.value.toLowerCase();
      return u.value.filter((L) => {
        const se = L, de = L.sha256 || se.sha256_hash || "";
        return L.filename.toLowerCase().includes(j) || de.toLowerCase().includes(j);
      });
    }), T = N(() => {
      const j = {};
      for (const se of I.value) {
        const de = se.type || "other";
        j[de] || (j[de] = []), j[de].push(se);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([se], [de]) => {
        const De = L.indexOf(se), ce = L.indexOf(de);
        return De >= 0 && ce >= 0 ? De - ce : De >= 0 ? -1 : ce >= 0 ? 1 : se.localeCompare(de);
      }).map(([se, de]) => ({ type: se, models: de }));
    });
    function M(j) {
      if (!j) return "Unknown";
      const L = 1024 * 1024 * 1024, se = 1024 * 1024;
      return j >= L ? `${(j / L).toFixed(1)} GB` : j >= se ? `${(j / se).toFixed(0)} MB` : `${(j / 1024).toFixed(0)} KB`;
    }
    function ne(j) {
      _.value = j.hash || j.filename;
    }
    async function J() {
      v.value = !0, g.value = null;
      try {
        const j = await n();
        await Q(), j.changes > 0 && console.log(`Scan complete: ${j.changes} changes detected`);
      } catch (j) {
        g.value = j instanceof Error ? j.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function G() {
      if (P.value.trim()) {
        D.value = !0, g.value = null;
        try {
          const j = await i(P.value.trim());
          $.value = j.path, S.value = !1, P.value = "", await Q(), console.log(`Directory changed: ${j.models_indexed} models indexed`), d("refresh");
        } catch (j) {
          g.value = j instanceof Error ? j.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function ee() {
      if (!x.value.trim() || !H.value.trim()) return;
      const j = H.value.split("/").pop() || "model.safetensors";
      c([{
        workflow: "__manual__",
        filename: j,
        url: x.value.trim(),
        targetPath: H.value.trim()
      }]), x.value = "", H.value = "", E.value = !1;
    }
    async function Q() {
      m.value = !0, g.value = null;
      try {
        u.value = await o();
      } catch (j) {
        g.value = j instanceof Error ? j.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function A() {
      try {
        const j = await l();
        $.value = j.path;
      } catch {
      }
    }
    return et(() => {
      Q(), A();
    }), (j, L) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: L[2] || (L[2] = (se) => p.value = !0)
          }, {
            actions: h(() => [
              C(ie, {
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
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (se) => S.value = !0)
              }, {
                default: h(() => [...L[15] || (L[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: L[1] || (L[1] = (se) => E.value = !0)
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
          V.value ? (a(), r("div", mw, [
            t("div", vw, [
              t("span", pw, f(V.value.message), 1),
              t("span", gw, f(V.value.current) + "/" + f(V.value.total), 1)
            ]),
            t("div", hw, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C($o, {
            modelValue: w.value,
            "onUpdate:modelValue": L[3] || (L[3] = (se) => w.value = se),
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
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            u.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(u.value.length) + " models • " + f(M(F.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(W, null, we(T.value, (se) => (a(), R(it, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(se.models, (de) => (a(), R(Et, {
                  key: de.sha256 || de.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...L[17] || (L[17] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(de.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(M(de.size)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Hash:",
                      value: de.hash ? de.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (De) => ne(de)
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
        onClose: L[4] || (L[4] = (se) => p.value = !1)
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
      _.value ? (a(), R(el, {
        key: 0,
        identifier: _.value,
        onClose: L[5] || (L[5] = (se) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(yt, { to: "body" }, [
        S.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: L[9] || (L[9] = rt((se) => S.value = !1, ["self"]))
        }, [
          t("div", yw, [
            t("div", ww, [
              L[20] || (L[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: L[6] || (L[6] = (se) => S.value = !1)
              }, "✕")
            ]),
            t("div", _w, [
              t("div", bw, [
                L[21] || (L[21] = t("label", null, "Current Directory", -1)),
                t("code", kw, f($.value || "Not set"), 1)
              ]),
              t("div", $w, [
                L[22] || (L[22] = t("label", null, "New Directory Path", -1)),
                C(es, {
                  modelValue: P.value,
                  "onUpdate:modelValue": L[7] || (L[7] = (se) => P.value = se),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              L[23] || (L[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Cw, [
              C(Oe, {
                variant: "secondary",
                onClick: L[8] || (L[8] = (se) => S.value = !1)
              }, {
                default: h(() => [...L[24] || (L[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Oe, {
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
          onClick: L[14] || (L[14] = rt((se) => E.value = !1, ["self"]))
        }, [
          t("div", xw, [
            t("div", Sw, [
              L[25] || (L[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: L[10] || (L[10] = (se) => E.value = !1)
              }, "✕")
            ]),
            t("div", Iw, [
              t("div", Ew, [
                L[26] || (L[26] = t("label", null, "Download URL", -1)),
                C(es, {
                  modelValue: x.value,
                  "onUpdate:modelValue": L[11] || (L[11] = (se) => x.value = se),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Tw, [
                L[27] || (L[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(es, {
                  modelValue: H.value,
                  "onUpdate:modelValue": L[12] || (L[12] = (se) => H.value = se),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              L[28] || (L[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Pw, [
              C(Oe, {
                variant: "secondary",
                onClick: L[13] || (L[13] = (se) => E.value = !1)
              }, {
                default: h(() => [...L[29] || (L[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Oe, {
                variant: "primary",
                disabled: !x.value.trim() || !H.value.trim(),
                onClick: ee
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
}), Mw = /* @__PURE__ */ ye(Rw, [["__scopeId", "data-v-73b78d84"]]), Dw = { class: "node-details" }, Lw = { class: "status-row" }, Ow = {
  key: 0,
  class: "detail-row"
}, Aw = { class: "value" }, Nw = { class: "detail-row" }, Uw = { class: "value" }, zw = {
  key: 1,
  class: "detail-row"
}, Fw = { class: "value mono" }, Bw = {
  key: 2,
  class: "detail-row"
}, Vw = ["href"], Ww = {
  key: 3,
  class: "detail-row"
}, Gw = { class: "value mono small" }, jw = { class: "detail-row" }, Hw = {
  key: 0,
  class: "value"
}, Kw = {
  key: 1,
  class: "workflow-list"
}, qw = /* @__PURE__ */ pe({
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
        t("div", Dw, [
          t("div", Lw, [
            u[2] || (u[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Pe(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Ow, [
            u[3] || (u[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Aw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Nw, [
            u[4] || (u[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Uw, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", zw, [
            u[5] || (u[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Fw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", Bw, [
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
            ], 8, Vw)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", Ww, [
            u[8] || (u[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Gw, f(e.node.download_url), 1)
          ])) : y("", !0),
          u[10] || (u[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", jw, [
            u[9] || (u[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Hw, " Not used in any workflows ")) : (a(), r("div", Kw, [
              (a(!0), r(W, null, we(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        C(Oe, {
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
}), Yw = /* @__PURE__ */ ye(qw, [["__scopeId", "data-v-b342f626"]]), Jw = { class: "dialog-message" }, Xw = {
  key: 0,
  class: "dialog-details"
}, Qw = {
  key: 1,
  class: "dialog-warning"
}, Zw = /* @__PURE__ */ pe({
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
        t("p", Jw, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", Xw, [
          (a(!0), r(W, null, we(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Qw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Oe, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Oe, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Oe, {
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
}), tl = /* @__PURE__ */ ye(Zw, [["__scopeId", "data-v-3670b9f5"]]), e_ = { class: "mismatch-warning" }, t_ = { class: "version-mismatch" }, s_ = { class: "version-actual" }, o_ = { class: "version-expected" }, n_ = { key: 0 }, a_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, l_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, i_ = /* @__PURE__ */ pe({
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
      const J = g.value.toLowerCase();
      return u.value.nodes.filter(
        (G) => {
          var ee, Q;
          return G.name.toLowerCase().includes(J) || ((ee = G.description) == null ? void 0 : ee.toLowerCase().includes(J)) || ((Q = G.repository) == null ? void 0 : Q.toLowerCase().includes(J));
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
    function H(J) {
      return !J.used_in_workflows || J.used_in_workflows.length === 0 ? "Not used in any workflows" : J.used_in_workflows.length === 1 ? J.used_in_workflows[0] : `${J.used_in_workflows.length} workflows`;
    }
    function V(J) {
      p.value = J;
    }
    function F() {
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
            G.status === "success" ? (n("toast", `✓ Node "${J}" tracked as development`, "success"), await ne()) : n("toast", `Failed to track node: ${G.message || "Unknown error"}`, "error");
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
            G.status === "success" ? (n("toast", `✓ Node "${J}" removed`, "success"), await ne()) : n("toast", `Failed to remove node: ${G.message || "Unknown error"}`, "error");
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
            G.status === "success" ? (n("toast", `✓ Node "${J}" installed`, "success"), await ne()) : n("toast", `Failed to install node: ${G.message || "Unknown error"}`, "error");
          } catch (G) {
            n("toast", `Error installing node: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ne() {
      m.value = !0, v.value = null;
      try {
        u.value = await l();
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(ne), (J, G) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (ee) => w.value = !0)
          }, {
            actions: h(() => [
              C(ie, {
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
            "onUpdate:modelValue": G[1] || (G[1] = (ee) => g.value = ee),
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
            onRetry: ne
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            u.value.total_count ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(f(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (a(), r(W, { key: 0 }, [
                  b(" • " + f(u.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                u.value.untracked_count ? (a(), r(W, { key: 1 }, [
                  b(" • " + f(u.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            x.value ? (a(), R(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", e_, [
                  G[8] || (G[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(W, null, we(e.versionMismatches, (ee) => (a(), R(Et, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: h(() => [...G[9] || (G[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", t_, [
                      t("span", s_, f(ee.actual), 1),
                      G[10] || (G[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", o_, f(ee.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    C(ie, {
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
            D.value.length ? (a(), R(it, {
              key: 2,
              title: "UNTRACKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(D.value, (ee) => (a(), R(Et, {
                  key: ee.name,
                  status: "warning"
                }, {
                  icon: h(() => [...G[12] || (G[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [...G[13] || (G[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: H(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => V(ee)
                    }, {
                      default: h(() => [...G[14] || (G[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => I(ee.name)
                    }, {
                      default: h(() => [...G[15] || (G[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Q) => T(ee.name)
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
            $.value.length ? (a(), R(it, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(W, null, we($.value, (ee) => (a(), R(Et, {
                  key: ee.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(ee.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    ee.version ? (a(), r("span", n_, f(ee.source === "development" ? "" : "v") + f(ee.version), 1)) : (a(), r("span", a_, "version unknown")),
                    t("span", l_, " • " + f(E(ee.source)), 1)
                  ]),
                  details: h(() => [
                    C(ut, {
                      label: "Used by:",
                      value: H(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => V(ee)
                    }, {
                      default: h(() => [...G[17] || (G[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
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
            P.value.length ? (a(), R(it, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(P.value, (ee) => (a(), R(Et, {
                  key: ee.name,
                  status: "missing"
                }, {
                  icon: h(() => [...G[19] || (G[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [...G[20] || (G[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    C(ut, {
                      label: "Required by:",
                      value: H(ee)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Q) => V(ee)
                    }, {
                      default: h(() => [...G[21] || (G[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Q) => M(ee.name)
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
        onClose: G[4] || (G[4] = (ee) => w.value = !1)
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
          C(ie, {
            variant: "primary",
            onClick: G[3] || (G[3] = (ee) => w.value = !1)
          }, {
            default: h(() => [...G[24] || (G[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), R(Yw, {
        key: 0,
        node: p.value,
        onClose: G[5] || (G[5] = (ee) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), R(tl, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: G[6] || (G[6] = (ee) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), r_ = /* @__PURE__ */ ye(i_, [["__scopeId", "data-v-1555a802"]]);
function Cr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const c_ = { class: "remote-url-display" }, d_ = ["title"], u_ = ["title"], f_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, m_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, v_ = /* @__PURE__ */ pe({
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
    return (i, c) => (a(), r("div", c_, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, d_),
      t("button", {
        class: Pe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", m_, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", f_, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, u_)
    ]));
  }
}), p_ = /* @__PURE__ */ ye(v_, [["__scopeId", "data-v-7768a58d"]]), g_ = { class: "remote-title" }, h_ = {
  key: 0,
  class: "default-badge"
}, y_ = {
  key: 1,
  class: "sync-badge"
}, w_ = {
  key: 0,
  class: "ahead"
}, __ = {
  key: 1,
  class: "behind"
}, b_ = {
  key: 1,
  class: "synced"
}, k_ = ["href"], $_ = {
  key: 1,
  class: "remote-url-text"
}, C_ = /* @__PURE__ */ pe({
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
        t("div", g_, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", h_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", y_, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(W, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", w_, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", __, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", b_, "✓ synced"))
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
        }, f(u.value), 9, k_)) : (a(), r("span", $_, f(u.value), 1))
      ]),
      actions: h(() => [
        C(ie, {
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
        C(ie, {
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
        C(ie, {
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
        C(ie, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(ie, {
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
              C(p_, {
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
}), x_ = /* @__PURE__ */ ye(C_, [["__scopeId", "data-v-8310f3a8"]]), S_ = ["for"], I_ = {
  key: 0,
  class: "base-form-field-required"
}, E_ = { class: "base-form-field-input" }, T_ = {
  key: 1,
  class: "base-form-field-error"
}, P_ = {
  key: 2,
  class: "base-form-field-hint"
}, R_ = /* @__PURE__ */ pe({
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
        e.required ? (a(), r("span", I_, "*")) : y("", !0)
      ], 8, S_)) : y("", !0),
      t("div", E_, [
        qe(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", T_, f(e.error), 1)) : e.hint ? (a(), r("span", P_, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ua = /* @__PURE__ */ ye(R_, [["__scopeId", "data-v-9a1cf296"]]), M_ = { class: "remote-form" }, D_ = { class: "form-header" }, L_ = { class: "form-body" }, O_ = {
  key: 0,
  class: "form-error"
}, A_ = { class: "form-actions" }, N_ = /* @__PURE__ */ pe({
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
    return (m, v) => (a(), r("div", M_, [
      t("div", D_, [
        C(At, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", L_, [
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
        c.value ? (a(), r("div", O_, f(c.value), 1)) : y("", !0)
      ]),
      t("div", A_, [
        C(ie, {
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
        C(ie, {
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
}), U_ = /* @__PURE__ */ ye(N_, [["__scopeId", "data-v-56021b18"]]), z_ = { class: "conflict-summary-box" }, F_ = { class: "summary-header" }, B_ = { class: "summary-text" }, V_ = { key: 0 }, W_ = {
  key: 1,
  class: "all-resolved"
}, G_ = { class: "summary-progress" }, j_ = { class: "progress-bar" }, H_ = { class: "progress-text" }, K_ = /* @__PURE__ */ pe({
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
    return (n, l) => (a(), r("div", z_, [
      t("div", F_, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", B_, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", V_, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", W_, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", G_, [
        t("div", j_, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", H_, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), q_ = /* @__PURE__ */ ye(K_, [["__scopeId", "data-v-4e9e6cc9"]]), Y_ = { class: "modal-header" }, J_ = { class: "modal-title" }, X_ = { class: "modal-body" }, Q_ = {
  key: 0,
  class: "error-box"
}, Z_ = {
  key: 0,
  class: "error-hint"
}, eb = {
  key: 1,
  class: "loading-state"
}, tb = { class: "commit-summary" }, sb = {
  key: 0,
  class: "changes-section"
}, ob = {
  key: 0,
  class: "change-group",
  open: ""
}, nb = { class: "change-count" }, ab = { class: "change-list" }, lb = {
  key: 0,
  class: "conflict-badge"
}, ib = {
  key: 1,
  class: "change-group"
}, rb = { class: "change-count" }, cb = { class: "change-list" }, db = {
  key: 2,
  class: "change-group"
}, ub = { class: "change-count" }, fb = { class: "change-list" }, mb = {
  key: 2,
  class: "strategy-section"
}, vb = { class: "radio-group" }, pb = { class: "radio-option" }, gb = { class: "radio-option" }, hb = { class: "radio-option" }, yb = {
  key: 3,
  class: "up-to-date"
}, wb = { class: "modal-actions" }, Yl = "comfygit.pullModelStrategy", _b = /* @__PURE__ */ pe({
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
    }), m = N(() => o.preview && Cr(o.preview) ? o.preview : null), v = N(() => {
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
            onClick: P[10] || (P[10] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", Y_, [
              t("h3", J_, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (x) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", X_, [
              e.error ? (a(), r("div", Q_, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", Z_, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", eb, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (D = e.preview) != null && D.has_uncommitted_changes ? (a(), r(W, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), r(W, { key: 3 }, [
                t("div", tb, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                u.value ? (a(), r("div", sb, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", ob, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", nb, f(c.value) + " changes", 1)
                    ]),
                    t("div", ab, [
                      (a(!0), r(W, null, we(e.preview.changes.workflows.added, (x) => (a(), r("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128)),
                      (a(!0), r(W, null, we(e.preview.changes.workflows.modified, (x) => (a(), r("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(x) + " ", 1),
                        _(x) ? (a(), r("span", lb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(W, null, we(e.preview.changes.workflows.deleted, (x) => (a(), r("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  d.value > 0 ? (a(), r("details", ib, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", rb, f(d.value) + " to install", 1)
                    ]),
                    t("div", cb, [
                      (a(!0), r(W, null, we(e.preview.changes.nodes.to_install, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", db, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", ub, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", fb, [
                      (a(!0), r(W, null, we(e.preview.changes.models.referenced, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item"
                      }, f(x), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R(q_, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", mb, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", vb, [
                    t("label", pb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (x) => l.value = x),
                        value: "all"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", gb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (x) => l.value = x),
                        value: "required"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", hb, [
                      Ye(t("input", {
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
                e.preview.commits_behind === 0 ? (a(), r("div", yb, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", wb, [
              C(ie, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (x) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(W, { key: 0 }, [
                C(ie, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (x) => S(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(ie, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (x) => S(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), R(ie, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (x) => S(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(W, { key: 2 }, [
                m.value && !w.value ? (a(), R(ie, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (x) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(ie, {
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
}), bb = /* @__PURE__ */ ye(_b, [["__scopeId", "data-v-300c7b2f"]]), kb = { class: "modal-header" }, $b = { class: "modal-title" }, Cb = { class: "modal-body" }, xb = {
  key: 0,
  class: "loading-state"
}, Sb = {
  key: 1,
  class: "warning-box"
}, Ib = {
  key: 0,
  class: "commits-section"
}, Eb = { class: "commit-list" }, Tb = { class: "commit-hash" }, Pb = { class: "commit-message" }, Rb = { class: "commit-date" }, Mb = { class: "force-option" }, Db = { class: "checkbox-option" }, Lb = { class: "commit-summary" }, Ob = { key: 0 }, Ab = { key: 1 }, Nb = {
  key: 0,
  class: "info-box"
}, Ub = {
  key: 1,
  class: "commits-section"
}, zb = { class: "commit-list" }, Fb = { class: "commit-hash" }, Bb = { class: "commit-message" }, Vb = { class: "commit-date" }, Wb = {
  key: 2,
  class: "up-to-date"
}, Gb = { class: "modal-actions" }, jb = /* @__PURE__ */ pe({
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
            onClick: c[6] || (c[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", kb, [
              t("h3", $b, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", Cb, [
              e.loading ? (a(), r("div", xb, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (d = e.preview) != null && d.has_uncommitted_changes ? (a(), r("div", Sb, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (u = e.preview) != null && u.remote_has_new_commits ? (a(), r(W, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", Ib, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Eb, [
                    (a(!0), r(W, null, we(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Tb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Pb, f(v.message), 1),
                      t("span", Rb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Mb, [
                  t("label", Db, [
                    Ye(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [en, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), r(W, { key: 3 }, [
                t("div", Lb, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Ob, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", Ab, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", Nb, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", Ub, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", zb, [
                    (a(!0), r(W, null, we(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Fb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Bb, f(v.message), 1),
                      t("span", Vb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", Wb, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Gb, [
              C(ie, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(W, { key: 0 }, [
                C(ie, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(ie, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(ie, {
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
}), Hb = /* @__PURE__ */ ye(jb, [["__scopeId", "data-v-ae86b6a7"]]), Kb = { class: "resolution-choice-group" }, qb = ["disabled"], Yb = ["disabled"], Jb = /* @__PURE__ */ pe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", Kb, [
      t("button", {
        class: Pe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, qb),
      t("button", {
        class: Pe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Yb)
    ]));
  }
}), Xb = /* @__PURE__ */ ye(Jb, [["__scopeId", "data-v-985715ed"]]), Qb = { class: "conflict-header" }, Zb = { class: "conflict-info" }, ek = { class: "workflow-name" }, tk = { class: "conflict-description" }, sk = {
  key: 0,
  class: "resolved-badge"
}, ok = { class: "resolved-text" }, nk = { class: "conflict-hashes" }, ak = { class: "hash-item" }, lk = { class: "hash-item" }, ik = { class: "conflict-actions" }, rk = /* @__PURE__ */ pe({
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
        t("div", Qb, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Zb, [
            t("code", ek, f(e.conflict.name) + ".json", 1),
            t("div", tk, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", sk, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", ok, f(d.value), 1)
          ])) : y("", !0)
        ]),
        t("div", nk, [
          t("span", ak, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", lk, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", ik, [
          C(Xb, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), ck = /* @__PURE__ */ ye(rk, [["__scopeId", "data-v-506d3bbf"]]), dk = { class: "resolution-content" }, uk = {
  key: 0,
  class: "error-box"
}, fk = { class: "resolution-header" }, mk = { class: "header-stats" }, vk = { class: "stat" }, pk = { class: "stat-value" }, gk = { class: "stat resolved" }, hk = { class: "stat-value" }, yk = {
  key: 0,
  class: "stat pending"
}, wk = { class: "stat-value" }, _k = { class: "conflicts-list" }, bk = {
  key: 1,
  class: "all-resolved-message"
}, kk = /* @__PURE__ */ pe({
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
        t("div", dk, [
          e.error ? (a(), r("div", uk, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", fk, [
            t("div", mk, [
              t("div", vk, [
                t("span", pk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", gk, [
                t("span", hk, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", yk, [
                t("span", wk, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", _k, [
            (a(!0), r(W, null, we(e.workflowConflicts, (_) => (a(), R(ck, {
              key: _.name,
              conflict: _,
              resolution: u(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", bk, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(d.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Oe, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Oe, {
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
}), $k = /* @__PURE__ */ ye(kk, [["__scopeId", "data-v-c58d150d"]]), Ck = { class: "node-conflict-item" }, xk = { class: "node-header" }, Sk = { class: "node-name" }, Ik = { class: "node-id" }, Ek = { class: "version-comparison" }, Tk = { class: "version yours" }, Pk = { class: "version theirs" }, Rk = { class: "chosen-version" }, Mk = { class: "chosen" }, Dk = { class: "chosen-reason" }, Lk = { class: "affected-workflows" }, Ok = { class: "wf-source" }, Ak = { class: "wf-version" }, Nk = /* @__PURE__ */ pe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Ck, [
      t("div", xk, [
        t("code", Sk, f(e.conflict.node_name), 1),
        t("span", Ik, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", Ek, [
        t("div", Tk, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", Pk, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", Rk, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", Mk, f(e.conflict.chosen_version), 1),
        t("span", Dk, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", Lk, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(W, null, we(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", Ok, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", Ak, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Uk = /* @__PURE__ */ ye(Nk, [["__scopeId", "data-v-8b626725"]]), zk = { class: "validation-content" }, Fk = {
  key: 0,
  class: "compatible-message"
}, Bk = { class: "conflicts-list" }, Vk = {
  key: 2,
  class: "warnings-section"
}, Wk = /* @__PURE__ */ pe({
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
        t("div", zk, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", Fk, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), r(W, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", Bk, [
              (a(!0), r(W, null, we(e.validation.node_conflicts, (d) => (a(), R(Uk, {
                key: d.node_id,
                conflict: d
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", Vk, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(W, null, we(e.validation.warnings, (d, u) => (a(), r("li", { key: u }, f(d), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Oe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (d) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Oe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (d) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Oe, {
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
}), Gk = /* @__PURE__ */ ye(Wk, [["__scopeId", "data-v-fefd26ed"]]), jk = { key: 0 }, Hk = /* @__PURE__ */ pe({
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
    } = at(), _ = k([]), S = k(null), $ = k({}), P = k(!1), D = k(null), E = k(""), x = k(!1), H = k(null), V = k(!1), F = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = N(() => {
      if (!E.value.trim()) return _.value;
      const _e = E.value.toLowerCase();
      return _.value.filter(
        (B) => B.name.toLowerCase().includes(_e) || B.fetch_url.toLowerCase().includes(_e) || B.push_url.toLowerCase().includes(_e)
      );
    });
    async function M() {
      P.value = !0, D.value = null;
      try {
        const _e = await n();
        _.value = _e.remotes, S.value = _e.current_branch_tracking || null, await Promise.all(
          _e.remotes.map(async (B) => {
            const U = await u(B.name);
            U && ($.value[B.name] = U);
          })
        );
      } catch (_e) {
        D.value = _e instanceof Error ? _e.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function ne() {
      F.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function J(_e) {
      const B = _.value.find((U) => U.name === _e);
      B && (F.value = "edit", I.value = {
        name: B.name,
        fetchUrl: B.fetch_url,
        pushUrl: B.push_url
      }, V.value = !0);
    }
    async function G(_e) {
      try {
        F.value === "add" ? await l(_e.name, _e.fetchUrl) : await c(_e.name, _e.fetchUrl, _e.pushUrl || void 0), V.value = !1, await M();
      } catch (B) {
        D.value = B instanceof Error ? B.message : "Operation failed";
      }
    }
    function ee() {
      V.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(_e) {
      H.value = _e;
      try {
        await d(_e);
        const B = await u(_e);
        B && ($.value[_e] = B), o("toast", `✓ Fetched from ${_e}`, "success");
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function A(_e) {
      if (confirm(`Remove remote "${_e}"?`))
        try {
          await i(_e), await M();
        } catch (B) {
          D.value = B instanceof Error ? B.message : "Failed to remove remote";
        }
    }
    function j() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const L = k("idle"), se = N(() => L.value === "pull_preview"), de = N(
      () => L.value === "resolving" || L.value === "validating"
    ), De = N(
      () => L.value === "validation_review" || L.value === "executing"
    ), ce = k(!1), ge = k(null), Ee = k(!1), Re = k(null), xe = k(!1), Ce = k(null), he = k(null), ue = k(/* @__PURE__ */ new Map()), Ae = k(null), Me = k(null), O = N(() => Ce.value && Cr(Ce.value) ? Ce.value : null);
    async function z(_e) {
      Re.value = _e, L.value = "pull_preview", xe.value = !0, Ce.value = null, he.value = null;
      try {
        Ce.value = await m(_e);
      } catch (B) {
        he.value = B instanceof Error ? B.message : "Failed to load pull preview";
      } finally {
        xe.value = !1;
      }
    }
    function oe() {
      L.value = "idle", Ce.value = null, he.value = null, Re.value = null;
    }
    async function le(_e) {
      if (!Re.value) return;
      L.value = "executing", he.value = null;
      const B = Re.value;
      try {
        const U = await v(B, _e);
        if (U.rolled_back) {
          he.value = `Pull failed and was rolled back: ${U.error || "Unknown error"}`, L.value = "pull_preview";
          return;
        }
        Te(), L.value = "idle", o("toast", `✓ Pulled from ${B}`, "success"), await M();
      } catch (U) {
        he.value = U instanceof Error ? U.message : "Pull failed", L.value = "pull_preview";
      }
    }
    function me() {
      O.value && (L.value = "resolving", Me.value = null);
    }
    function ve(_e, B) {
      ue.value.set(_e, { name: _e, resolution: B });
    }
    function Se() {
      L.value = "pull_preview";
    }
    async function Ie() {
      L.value = "validating", Me.value = null;
      try {
        const _e = Array.from(ue.value.values());
        Ae.value = await p(Re.value, _e), L.value = "validation_review";
      } catch (_e) {
        Me.value = _e instanceof Error ? _e.message : "Validation failed", L.value = "resolving";
      }
    }
    async function ae() {
      L.value = "executing";
      const _e = Re.value;
      try {
        const B = Array.from(ue.value.values()), U = await v(_e, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: B
        });
        if (U.rolled_back) {
          he.value = `Pull failed and was rolled back: ${U.error || "Unknown error"}`, L.value = "pull_preview";
          return;
        }
        Te(), L.value = "idle", o("toast", `✓ Pulled from ${_e}`, "success"), await M();
      } catch (B) {
        he.value = B instanceof Error ? B.message : "Pull failed", L.value = "validation_review";
      }
    }
    function fe() {
      L.value = "resolving";
    }
    function ze() {
      Te(), L.value = "idle";
    }
    function Te() {
      ue.value.clear(), Ae.value = null, Me.value = null, he.value = null, Ce.value = null, Re.value = null;
    }
    async function Z(_e) {
      Re.value = _e, ce.value = !0, xe.value = !0, ge.value = null;
      try {
        ge.value = await g(_e);
      } catch (B) {
        D.value = B instanceof Error ? B.message : "Failed to load push preview";
      } finally {
        xe.value = !1;
      }
    }
    function q() {
      ce.value = !1, ge.value = null, Re.value = null;
    }
    async function Ne(_e) {
      if (!Re.value) return;
      Ee.value = !0;
      const B = Re.value;
      try {
        await w(B, _e), q(), o("toast", `✓ Pushed to ${B}`, "success"), await M();
      } catch (U) {
        o("toast", U instanceof Error ? U.message : "Push failed", "error");
      } finally {
        Ee.value = !1;
      }
    }
    function be() {
      const _e = Re.value;
      q(), _e && z(_e);
    }
    return et(M), (_e, B) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (U) => x.value = !0)
          }, {
            actions: h(() => [
              V.value ? y("", !0) : (a(), R(ie, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ne
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
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            V.value ? (a(), R(U_, {
              key: 0,
              mode: F.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: G,
              onCancel: ee
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !V.value ? (a(), R(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), r("span", jk, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !V.value ? (a(), R(it, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(T.value, (U) => (a(), R(x_, {
                  key: U.name,
                  remote: U,
                  "sync-status": $.value[U.name],
                  "fetching-remote": H.value,
                  onFetch: Q,
                  onEdit: J,
                  onRemove: A,
                  onPull: z,
                  onPush: Z
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
                C(ie, {
                  variant: "primary",
                  onClick: ne
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
          C(ie, {
            variant: "link",
            onClick: j
          }, {
            default: h(() => [...B[6] || (B[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(bb, {
        show: se.value,
        "remote-name": Re.value || "",
        preview: Ce.value,
        loading: xe.value,
        pulling: L.value === "executing",
        error: he.value,
        "conflict-resolutions": ue.value,
        onClose: oe,
        onPull: le,
        onOpenConflictResolution: me
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(Hb, {
        show: ce.value,
        "remote-name": Re.value || "",
        preview: ge.value,
        loading: xe.value,
        pushing: Ee.value,
        onClose: q,
        onPush: Ne,
        onPullFirst: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      de.value && O.value ? (a(), R($k, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: ue.value,
        "operation-type": "pull",
        validating: L.value === "validating",
        error: Me.value,
        onClose: Se,
        onResolve: ve,
        onApply: Ie
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      De.value && Ae.value ? (a(), R(Gk, {
        key: 1,
        validation: Ae.value,
        "operation-type": "pull",
        executing: L.value === "executing",
        onProceed: ae,
        onGoBack: fe,
        onCancel: ze
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Kk = /* @__PURE__ */ ye(Hk, [["__scopeId", "data-v-9ae3b76d"]]), qk = { class: "setting-info" }, Yk = { class: "setting-label" }, Jk = {
  key: 0,
  class: "required-marker"
}, Xk = {
  key: 0,
  class: "setting-description"
}, Qk = { class: "setting-control" }, Zk = /* @__PURE__ */ pe({
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
      t("div", qk, [
        t("div", Yk, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), r("span", Jk, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", Xk, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Qk, [
        qe(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), pn = /* @__PURE__ */ ye(Zk, [["__scopeId", "data-v-cb5d236c"]]), e2 = { class: "toggle" }, t2 = ["checked", "disabled"], s2 = /* @__PURE__ */ pe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", e2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, t2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Jl = /* @__PURE__ */ ye(s2, [["__scopeId", "data-v-71c0f550"]]), o2 = { class: "workspace-settings-content" }, n2 = { class: "settings-section" }, a2 = { class: "path-setting" }, l2 = { class: "path-value" }, i2 = { class: "path-setting" }, r2 = { class: "path-value" }, c2 = { class: "settings-section" }, d2 = { class: "settings-section" }, u2 = { class: "settings-section" }, f2 = /* @__PURE__ */ pe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = at(), d = k(!1), u = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), S = k(!0);
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
        const ne = M instanceof Error ? M.message : "Failed to save settings";
        m.value = { type: "error", message: ne }, l("error", ne);
      }
    }
    function H() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function V(I) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(I)), console.log("[ComfyGit] Auto-refresh setting saved:", I);
    }
    function F(I) {
      I ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", I ? "enabled" : "disabled");
    }
    return s({
      saveSettings: x,
      resetSettings: H,
      hasChanges: D,
      loadSettings: E
    }), et(E), (I, T) => (a(), r("div", o2, [
      d.value ? (a(), R(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : u.value ? (a(), R(Rs, {
        key: 1,
        message: u.value,
        retry: !0,
        onRetry: E
      }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
        C(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var M, ne;
            return [
              t("div", n2, [
                t("div", a2, [
                  T[4] || (T[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  T[5] || (T[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", l2, f(((M = v.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                t("div", i2, [
                  T[6] || (T[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  T[7] || (T[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", r2, f(((ne = v.value) == null ? void 0 : ne.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", c2, [
              C(pn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  C(Ln, {
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
        C(it, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", d2, [
              C(pn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  C(Ln, {
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
        C(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", u2, [
              C(pn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(Jl, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      T[2] || (T[2] = (M) => _.value = M),
                      V
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(pn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  C(Jl, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      T[3] || (T[3] = (M) => S.value = M),
                      F
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
}), xr = /* @__PURE__ */ ye(f2, [["__scopeId", "data-v-f28917ec"]]), m2 = /* @__PURE__ */ pe({
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
              C(ie, {
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
              (c = s.value) != null && c.hasChanges ? (a(), R(ie, {
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
        C(xr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), v2 = { class: "base-tabs" }, p2 = ["disabled", "onClick"], g2 = {
  key: 0,
  class: "base-tabs__badge"
}, h2 = /* @__PURE__ */ pe({
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
    return (i, c) => (a(), r("div", v2, [
      (a(!0), r(W, null, we(e.tabs, (d) => (a(), r("button", {
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
        d.badge ? (a(), r("span", g2, f(d.badge), 1)) : y("", !0)
      ], 10, p2))), 128))
    ]));
  }
}), Sr = /* @__PURE__ */ ye(h2, [["__scopeId", "data-v-ad5e6cad"]]), y2 = { class: "log-viewer-wrapper" }, w2 = ["disabled", "title"], _2 = /* @__PURE__ */ pe({
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
    return (m, v) => (a(), r("div", y2, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, w2),
        (a(!0), r(W, null, we(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Pe(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Ir = /* @__PURE__ */ ye(_2, [["__scopeId", "data-v-c0cc6d21"]]), b2 = /* @__PURE__ */ pe({
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
    }), et(() => {
      S(), $();
    }), (D, E) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (x) => v.value = !0)
          }, {
            actions: h(() => [
              C(ie, {
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
              C(ie, {
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
          C(Sr, {
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
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            d.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), R(Ir, {
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
          C(ie, {
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
}), k2 = /* @__PURE__ */ pe({
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
    }), (S, $) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => u.value = !0)
          }, {
            actions: h(() => [
              C(ie, {
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
              C(ie, {
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
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            i.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(Ir, {
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
          C(ie, {
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
}), $2 = { class: "env-title" }, C2 = {
  key: 0,
  class: "current-badge"
}, x2 = {
  key: 0,
  class: "branch-info"
}, S2 = /* @__PURE__ */ pe({
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
        t("div", $2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", C2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", x2, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        qe(s.$slots, "actions", {}, void 0, !0)
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
}), I2 = /* @__PURE__ */ ye(S2, [["__scopeId", "data-v-9231917a"]]), E2 = { class: "env-details" }, T2 = { class: "status-row" }, P2 = {
  key: 0,
  class: "detail-row"
}, R2 = { class: "value mono" }, M2 = {
  key: 1,
  class: "detail-row"
}, D2 = { class: "value mono small" }, L2 = { class: "detail-row" }, O2 = { class: "value" }, A2 = { class: "detail-row" }, N2 = { class: "value" }, U2 = { class: "detail-row" }, z2 = { class: "value" }, F2 = {
  key: 2,
  class: "section-divider"
}, B2 = {
  key: 3,
  class: "detail-row"
}, V2 = { class: "value" }, W2 = {
  key: 4,
  class: "detail-row"
}, G2 = { class: "value" }, j2 = { class: "footer-actions" }, H2 = /* @__PURE__ */ pe({
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
        t("div", E2, [
          t("div", T2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Pe(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", P2, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", R2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", M2, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", D2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", L2, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", O2, f(e.environment.workflow_count), 1)
          ]),
          t("div", A2, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", N2, f(e.environment.node_count), 1)
          ]),
          t("div", U2, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", z2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", F2)) : y("", !0),
          e.environment.created_at ? (a(), r("div", B2, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", V2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", W2, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", G2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", j2, [
          e.canDelete ? (a(), R(Oe, {
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
          C(Oe, {
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
}), K2 = /* @__PURE__ */ ye(H2, [["__scopeId", "data-v-59855453"]]), Er = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Tr = "3.12", sl = [
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
], Pr = "auto", q2 = { class: "progress-bar" }, Y2 = /* @__PURE__ */ pe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", q2, [
      t("div", {
        class: Pe(["progress-fill", e.variant]),
        style: Ht({ width: o.value })
      }, null, 6)
    ]));
  }
}), Xn = /* @__PURE__ */ ye(Y2, [["__scopeId", "data-v-1beb0512"]]), J2 = { class: "task-progress" }, X2 = { class: "progress-info" }, Q2 = { class: "progress-percentage" }, Z2 = { class: "progress-message" }, e$ = {
  key: 0,
  class: "progress-steps"
}, t$ = { class: "step-icon" }, s$ = { class: "step-label" }, o$ = /* @__PURE__ */ pe({
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
    return (l, i) => (a(), r("div", J2, [
      C(Xn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", X2, [
        t("span", Q2, f(e.progress) + "%", 1),
        t("span", Z2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", e$, [
        (a(!0), r(W, null, we(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Pe(["step", o(c.id)])
        }, [
          t("span", t$, f(n(c.id)), 1),
          t("span", s$, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), An = /* @__PURE__ */ ye(o$, [["__scopeId", "data-v-9d1de66c"]]), n$ = {
  key: 0,
  class: "create-env-form"
}, a$ = { class: "form-field" }, l$ = { class: "form-field" }, i$ = ["value"], r$ = { class: "form-field" }, c$ = ["disabled"], d$ = ["value"], u$ = { class: "form-field" }, f$ = ["value"], m$ = { class: "form-field form-field--checkbox" }, v$ = { class: "form-checkbox" }, p$ = {
  key: 1,
  class: "create-env-progress"
}, g$ = { class: "creating-intro" }, h$ = {
  key: 0,
  class: "progress-warning"
}, y$ = {
  key: 1,
  class: "create-error"
}, w$ = { class: "error-message" }, _$ = {
  key: 1,
  class: "footer-status"
}, b$ = 10, k$ = /* @__PURE__ */ pe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = at(), c = k(""), d = k(Tr), u = k("latest"), m = k(Pr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
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
          }, ne = await l(M);
          ne.status === "started" ? H() : ne.status === "error" && (_.value = {
            progress: 0,
            message: ne.message || "Failed to start creation",
            error: ne.message
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
    function H() {
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
          $++, $ >= b$ && (V(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      S && (clearInterval(S), S = null);
    }
    function F() {
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
    return et(async () => {
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
        p.value ? (a(), r("div", p$, [
          t("p", g$, [
            M[11] || (M[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            M[12] || (M[12] = b("... ", -1))
          ]),
          C(An, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", h$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", y$, [
            t("p", w$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", n$, [
          t("div", a$, [
            M[6] || (M[6] = t("label", { class: "form-label" }, "Name", -1)),
            Ye(t("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": M[0] || (M[0] = (ne) => c.value = ne),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Zt(x, ["enter"])
            }, null, 544), [
              [Ut, c.value]
            ])
          ]),
          t("div", l$, [
            M[7] || (M[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (ne) => d.value = ne),
              class: "form-select"
            }, [
              (a(!0), r(W, null, we(Ge(Er), (ne) => (a(), r("option", {
                key: ne,
                value: ne
              }, f(ne), 9, i$))), 128))
            ], 512), [
              [hs, d.value]
            ])
          ]),
          t("div", r$, [
            M[8] || (M[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (ne) => u.value = ne),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(W, null, we(g.value, (ne) => (a(), r("option", {
                key: ne.tag_name,
                value: ne.tag_name
              }, f(ne.name), 9, d$))), 128))
            ], 8, c$), [
              [hs, u.value]
            ])
          ]),
          t("div", u$, [
            M[9] || (M[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": M[3] || (M[3] = (ne) => m.value = ne),
              class: "form-select"
            }, [
              (a(!0), r(W, null, we(Ge(sl), (ne) => (a(), r("option", {
                key: ne,
                value: ne
              }, f(ne) + f(ne === "auto" ? " (detect GPU)" : ""), 9, f$))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", m$, [
            t("label", v$, [
              Ye(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": M[4] || (M[4] = (ne) => v.value = ne)
              }, null, 512), [
                [en, v.value]
              ]),
              M[10] || (M[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(W, { key: 1 }, [
          _.value.error ? (a(), R(Oe, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: h(() => [...M[15] || (M[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", _$, " Creating environment... "))
        ], 64)) : (a(), r(W, { key: 0 }, [
          C(Oe, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: x
          }, {
            default: h(() => [...M[13] || (M[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Oe, {
            variant: "secondary",
            onClick: M[5] || (M[5] = (ne) => o("close"))
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
}), $$ = /* @__PURE__ */ ye(k$, [["__scopeId", "data-v-f37eaa42"]]), C$ = /* @__PURE__ */ pe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!1), v = k(!1), g = k(null), w = N(() => {
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
    return et(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (D, E) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (x) => m.value = !0)
          }, {
            actions: h(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(ie, {
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
          }, null, 8, ["message"])) : (a(), r(W, { key: 2 }, [
            w.value.length ? (a(), R(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(W, null, we(w.value, (x) => (a(), R(I2, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    x.is_current ? y("", !0) : (a(), R(ie, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => D.$emit("switch", x.name)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => S(x)
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
                  C(ie, {
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
          C(ie, {
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
      g.value ? (a(), R(K2, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: E[4] || (E[4] = (x) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), R($$, {
        key: 1,
        onClose: E[5] || (E[5] = (x) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), x$ = /* @__PURE__ */ ye(C$, [["__scopeId", "data-v-f95999f4"]]), S$ = { class: "file-path" }, I$ = { class: "file-path-text" }, E$ = ["title"], T$ = /* @__PURE__ */ pe({
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
    return (l, i) => (a(), r("div", S$, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", I$, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, E$)) : y("", !0)
    ]));
  }
}), P$ = /* @__PURE__ */ ye(T$, [["__scopeId", "data-v-f0982173"]]), R$ = { class: "export-blocked" }, M$ = { class: "issues-list" }, D$ = { class: "issue-message" }, L$ = {
  key: 0,
  class: "issue-details"
}, O$ = ["onClick"], A$ = { class: "issue-fix" }, N$ = /* @__PURE__ */ pe({
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
        t("div", R$, [
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
          t("div", M$, [
            (a(!0), r(W, null, we(e.issues, (c, d) => (a(), r("div", {
              key: d,
              class: "issue-item"
            }, [
              t("div", D$, f(c.message), 1),
              c.details.length ? (a(), r("div", L$, [
                (a(!0), r(W, null, we(n(d), (u, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(u), 1))), 128)),
                c.details.length > 3 && !o[d] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (u) => o[d] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, O$)) : y("", !0)
              ])) : y("", !0),
              t("div", A$, [
                c.type === "uncommitted_workflows" ? (a(), r(W, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(W, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(W, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        C(Oe, {
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
}), Rr = /* @__PURE__ */ ye(N$, [["__scopeId", "data-v-b52f5e32"]]), U$ = { class: "export-warnings" }, z$ = {
  key: 0,
  class: "success-header"
}, F$ = { class: "warning-header" }, B$ = { class: "warning-summary" }, V$ = { class: "warning-title" }, W$ = { class: "models-section" }, G$ = { class: "models-list" }, j$ = { class: "model-info" }, H$ = { class: "model-filename" }, K$ = { class: "model-workflows" }, q$ = ["onClick"], Y$ = /* @__PURE__ */ pe({
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
    return (u, m) => (a(), r(W, null, [
      C(vt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => u.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", U$, [
            e.models.length === 0 ? (a(), r("div", z$, [...m[4] || (m[4] = [
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
            ])])) : (a(), r(W, { key: 1 }, [
              t("div", F$, [
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
                t("div", B$, [
                  t("h3", V$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", W$, [
                t("div", G$, [
                  (a(!0), r(W, null, we(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", j$, [
                      t("div", H$, f(v.filename), 1),
                      t("div", K$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, q$)
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
          C(Oe, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => u.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Oe, {
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
      i.value ? (a(), R(el, {
        key: 0,
        identifier: i.value,
        onClose: d
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Mr = /* @__PURE__ */ ye(Y$, [["__scopeId", "data-v-b698d882"]]), J$ = { class: "export-card" }, X$ = { class: "export-path-row" }, Q$ = { class: "export-actions" }, Z$ = {
  key: 1,
  class: "export-warning"
}, eC = /* @__PURE__ */ pe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = at(), n = k(""), l = k(!1), i = k(!1), c = k(!1), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k(!1), w = N(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
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
          const H = await x.blob(), V = URL.createObjectURL(H), F = d.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = V, I.download = F, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (E, x) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (H) => u.value = !0)
          })
        ]),
        content: h(() => [
          C(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", J$, [
                x[7] || (x[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", X$, [
                  C(Ln, {
                    modelValue: n.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (H) => n.value = H),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Q$, [
                  C(ie, {
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
          d.value ? (a(), R(it, {
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
                        C(P$, {
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
                    d.value.models_without_sources && d.value.models_without_sources > 0 ? (a(), r("div", Z$, [...x[8] || (x[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                d.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    C(ie, {
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
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...x[10] || (x[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(ie, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (H) => d.value = null)
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
        onClose: x[3] || (x[3] = (H) => u.value = !1)
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
      v.value && m.value ? (a(), R(Rr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (H) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), R(Mr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: x[5] || (x[5] = (H) => g.value = !1),
        onRevalidate: S
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), tC = /* @__PURE__ */ ye(eC, [["__scopeId", "data-v-f4d120f2"]]), sC = { class: "file-input-wrapper" }, oC = ["accept", "multiple", "disabled"], nC = /* @__PURE__ */ pe({
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
    }), (d, u) => (a(), r("div", sC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, oC),
      C(ie, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: h(() => [
          qe(d.$slots, "default", {}, () => [
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
}), aC = /* @__PURE__ */ ye(nC, [["__scopeId", "data-v-cd192091"]]), lC = {
  key: 0,
  class: "drop-zone-empty"
}, iC = { class: "drop-zone-text" }, rC = { class: "drop-zone-primary" }, cC = { class: "drop-zone-secondary" }, dC = { class: "drop-zone-actions" }, uC = {
  key: 1,
  class: "drop-zone-file"
}, fC = { class: "file-info" }, mC = { class: "file-details" }, vC = { class: "file-name" }, pC = { class: "file-size" }, gC = /* @__PURE__ */ pe({
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
      onDragenter: rt(m, ["prevent"]),
      onDragover: rt(v, ["prevent"]),
      onDragleave: rt(g, ["prevent"]),
      onDrop: rt(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", uC, [
        t("div", fC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", mC, [
            t("div", vC, f(d.value), 1),
            t("div", pC, f(u.value), 1)
          ])
        ]),
        C(ie, {
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
      ])) : (a(), r("div", lC, [
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
        t("div", iC, [
          t("p", rC, f(e.primaryText), 1),
          t("p", cC, f(e.secondaryText), 1)
        ]),
        t("div", dC, [
          C(aC, {
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
}), hC = /* @__PURE__ */ ye(gC, [["__scopeId", "data-v-0f79cb86"]]), yC = { class: "import-preview" }, wC = { class: "preview-header" }, _C = {
  key: 0,
  class: "source-env"
}, bC = { class: "preview-content" }, kC = { class: "preview-section" }, $C = { class: "section-header" }, CC = { class: "section-info" }, xC = { class: "section-count" }, SC = {
  key: 0,
  class: "item-list"
}, IC = { class: "item-name" }, EC = {
  key: 0,
  class: "item-more"
}, TC = { class: "preview-section" }, PC = { class: "section-header" }, RC = { class: "section-info" }, MC = { class: "section-count" }, DC = {
  key: 0,
  class: "item-list"
}, LC = { class: "item-details" }, OC = { class: "item-name" }, AC = { class: "item-meta" }, NC = {
  key: 0,
  class: "item-more"
}, UC = { class: "preview-section" }, zC = { class: "section-header" }, FC = { class: "section-info" }, BC = { class: "section-count" }, VC = {
  key: 0,
  class: "item-list"
}, WC = { class: "item-name" }, GC = {
  key: 0,
  class: "item-more"
}, jC = {
  key: 0,
  class: "preview-section"
}, HC = { class: "git-info" }, KC = /* @__PURE__ */ pe({
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
    return (c, d) => (a(), r("div", yC, [
      t("div", wC, [
        C(At, null, {
          default: h(() => [...d[0] || (d[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", _C, [
          d[1] || (d[1] = b(" From: ", -1)),
          C(Ta, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", bC, [
        t("div", kC, [
          t("div", $C, [
            d[3] || (d[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", CC, [
              d[2] || (d[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", xC, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", SC, [
            (a(!0), r(W, null, we(e.workflows.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[4] || (d[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", IC, f(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", EC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", TC, [
          t("div", PC, [
            d[6] || (d[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", RC, [
              d[5] || (d[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", MC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", DC, [
            (a(!0), r(W, null, we(e.models.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              d[7] || (d[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", LC, [
                t("span", OC, f(u.filename), 1),
                t("span", AC, f(i(u.size)) + " • " + f(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", NC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", UC, [
          t("div", zC, [
            d[9] || (d[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", FC, [
              d[8] || (d[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", BC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", VC, [
            (a(!0), r(W, null, we(e.nodes.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[10] || (d[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", WC, f(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", GC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", jC, [
          d[11] || (d[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", HC, [
            e.gitBranch ? (a(), R(ut, {
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
            e.gitCommit ? (a(), R(ut, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                C(wr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), qC = /* @__PURE__ */ ye(KC, [["__scopeId", "data-v-182fe113"]]), YC = { class: "import-config" }, JC = { class: "config-container" }, XC = { class: "config-field" }, QC = { class: "input-wrapper" }, ZC = ["value"], ex = {
  key: 0,
  class: "validating-indicator"
}, tx = {
  key: 1,
  class: "valid-indicator"
}, sx = {
  key: 0,
  class: "field-error"
}, ox = { class: "config-field" }, nx = { class: "strategy-options" }, ax = ["value", "checked", "onChange"], lx = { class: "strategy-content" }, ix = { class: "strategy-label" }, rx = { class: "strategy-description" }, cx = { class: "config-field switch-field" }, dx = { class: "switch-label" }, ux = ["checked"], fx = { class: "advanced-section" }, mx = { class: "advanced-content" }, vx = { class: "config-field" }, px = ["value"], gx = ["value"], hx = /* @__PURE__ */ pe({
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
    return (v, g) => (a(), r("div", YC, [
      C(At, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", JC, [
        t("div", XC, [
          C($n, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", QC, [
            t("input", {
              type: "text",
              class: Pe(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: u,
              onBlur: m
            }, null, 42, ZC),
            l.value ? (a(), r("span", ex, "...")) : i.value ? (a(), r("span", tx, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", sx, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", ox, [
          C($n, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", nx, [
            (a(), r(W, null, we(c, (w) => t("label", {
              key: w.value,
              class: Pe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, ax),
              t("div", lx, [
                t("span", ix, f(w.label), 1),
                t("span", rx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", cx, [
          t("label", dx, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, ux),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", fx, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", mx, [
            t("div", vx, [
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
                (a(!0), r(W, null, we(Ge(sl), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, gx))), 128))
              ], 40, px)
            ])
          ])
        ])
      ])
    ]));
  }
}), yx = /* @__PURE__ */ ye(hx, [["__scopeId", "data-v-89ea06a1"]]), wx = { class: "import-flow" }, _x = {
  key: 0,
  class: "import-empty"
}, bx = { class: "git-import-section" }, kx = { class: "git-url-input-row" }, $x = ["disabled"], Cx = {
  key: 0,
  class: "git-error"
}, xx = {
  key: 1,
  class: "import-configure"
}, Sx = { class: "selected-file-bar" }, Ix = {
  key: 0,
  class: "file-bar-content"
}, Ex = { class: "file-bar-info" }, Tx = { class: "file-bar-name" }, Px = { class: "file-bar-size" }, Rx = {
  key: 1,
  class: "file-bar-content"
}, Mx = { class: "file-bar-info" }, Dx = { class: "file-bar-name" }, Lx = {
  key: 0,
  class: "preview-loading"
}, Ox = { class: "import-actions" }, Ax = {
  key: 2,
  class: "import-progress"
}, Nx = { class: "creating-intro" }, Ux = {
  key: 0,
  class: "progress-warning"
}, zx = {
  key: 1,
  class: "import-error"
}, Fx = { class: "error-message" }, Bx = {
  key: 3,
  class: "import-complete"
}, Vx = { class: "complete-message" }, Wx = { class: "complete-title" }, Gx = { class: "complete-details" }, jx = { class: "complete-actions" }, Hx = /* @__PURE__ */ pe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ee, Re, xe, Ce;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: d, executeImport: u, executeGitImport: m, getImportProgress: v } = at();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), D = k(null), E = k(""), x = k(null), H = k(!1), V = k(null), F = k(null), I = k({
      name: ((Ee = n.initialProgress) == null ? void 0 : Ee.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = k(null), M = k({
      message: ((Re = n.initialProgress) == null ? void 0 : Re.message) ?? "Preparing import...",
      phase: ((xe = n.initialProgress) == null ? void 0 : xe.phase) ?? "",
      progress: ((Ce = n.initialProgress) == null ? void 0 : Ce.progress) ?? 0,
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
    ], J = N(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const he = F.value;
      return {
        sourceEnvironment: he.comfyui_version ? `ComfyUI ${he.comfyui_version}` : "Unknown",
        workflows: he.workflows.map((ue) => ue.name),
        models: he.models.map((ue) => ({
          filename: ue.filename,
          size: 0,
          type: ue.relative_path.split("/")[0] || "model"
        })),
        nodes: he.nodes.map((ue) => ue.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), G = N(() => !P.value && !D.value && F.value && I.value.name.length > 0 && !T.value && (w.value || x.value));
    async function ee(he) {
      w.value = he, P.value = !0, D.value = null, F.value = null;
      try {
        const ue = await i(he);
        F.value = ue;
      } catch (ue) {
        D.value = ue instanceof Error ? ue.message : "Failed to analyze file", console.error("Preview error:", ue);
      } finally {
        P.value = !1;
      }
    }
    function Q() {
      w.value = null, x.value = null, E.value = "", V.value = null, _.value = !1, S.value = !1, $.value = "", F.value = null, D.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function A() {
      ce(), Q(), p.value = !1, P.value = !1, H.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function j() {
      if (E.value.trim()) {
        H.value = !0, V.value = null;
        try {
          const he = await c(E.value.trim());
          x.value = E.value.trim(), F.value = he;
        } catch (he) {
          V.value = he instanceof Error ? he.message : "Failed to analyze repository";
        } finally {
          H.value = !1;
        }
      }
    }
    function L(he) {
      try {
        const ue = new URL(he);
        return ue.host + ue.pathname.replace(/\.git$/, "");
      } catch {
        return he;
      }
    }
    async function se(he) {
      if (!he) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const ue = await d(he);
        T.value = ue.valid ? null : ue.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function de() {
      if (I.value.name && !(!w.value && !x.value)) {
        p.value = !0, _.value = !1, M.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let he;
          if (w.value)
            he = await u(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (x.value)
            he = await m(
              x.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          he.status === "started" ? De() : (S.value = !1, $.value = he.message, p.value = !1, _.value = !0);
        } catch (he) {
          S.value = !1, $.value = he instanceof Error ? he.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function De() {
      if (g) return;
      const he = async () => {
        try {
          const Ae = await v();
          return M.value = {
            message: Ae.message,
            phase: Ae.phase || "",
            progress: Ae.progress ?? (Ae.state === "importing" ? 50 : 0),
            error: Ae.error || null
          }, Ae.state === "complete" ? (ce(), S.value = !0, $.value = `Environment '${Ae.environment_name}' created successfully`, p.value = !1, _.value = !0, Ae.environment_name && l("import-complete", Ae.environment_name, I.value.switchAfterImport), !1) : Ae.state === "error" ? (ce(), S.value = !1, $.value = Ae.error || Ae.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Ae) {
          return console.error("Failed to poll import progress:", Ae), !0;
        }
      };
      await he() && (g = setInterval(async () => {
        await he() || ce();
      }, 2e3));
    }
    function ce() {
      g && (clearInterval(g), g = null);
    }
    function ge(he) {
      return he < 1024 ? `${he} B` : he < 1024 * 1024 ? `${(he / 1024).toFixed(1)} KB` : he < 1024 * 1024 * 1024 ? `${(he / (1024 * 1024)).toFixed(1)} MB` : `${(he / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const he = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", he.state, he), he.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", he.environment_name), p.value = !0, I.value.name = he.environment_name || I.value.name || "", M.value = {
          progress: he.progress ?? 0,
          message: he.message || "Importing...",
          phase: he.phase || "",
          error: null
        }, De());
      } catch (he) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", he);
      }
    }), s({
      handleReset: A,
      isImporting: p,
      canImport: G
    }), (he, ue) => {
      var Ae;
      return a(), r("div", wx, [
        !w.value && !x.value && !p.value ? (a(), r("div", _x, [
          C(hC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ee
          }),
          ue[7] || (ue[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", bx, [
            ue[5] || (ue[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", kx, [
              Ye(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ue[0] || (ue[0] = (Me) => E.value = Me),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Zt(j, ["enter"]),
                disabled: H.value
              }, null, 40, $x), [
                [Ut, E.value]
              ]),
              C(ie, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || H.value,
                onClick: j
              }, {
                default: h(() => [
                  b(f(H.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (a(), r("div", Cx, f(V.value), 1)) : y("", !0),
            ue[6] || (ue[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || x.value) && !p.value && !_.value ? (a(), r("div", xx, [
          t("div", Sx, [
            w.value ? (a(), r("div", Ix, [
              ue[8] || (ue[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", Ex, [
                t("div", Tx, f(w.value.name), 1),
                t("div", Px, f(ge(w.value.size)), 1)
              ])
            ])) : x.value ? (a(), r("div", Rx, [
              ue[10] || (ue[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", Mx, [
                t("div", Dx, f(L(x.value)), 1),
                ue[9] || (ue[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(ie, {
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
          P.value ? (a(), r("div", Lx, [...ue[12] || (ue[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : D.value ? (a(), R(Yt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [D.value]
          }, null, 8, ["details"])) : F.value ? (a(), R(qC, {
            key: 2,
            "source-environment": J.value.sourceEnvironment,
            workflows: J.value.workflows,
            models: J.value.models,
            nodes: J.value.nodes,
            "git-branch": J.value.gitBranch,
            "git-commit": J.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (a(), R(yx, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": ue[1] || (ue[1] = (Me) => I.value.name = Me),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": ue[2] || (ue[2] = (Me) => I.value.modelStrategy = Me),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": ue[3] || (ue[3] = (Me) => I.value.torchBackend = Me),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": ue[4] || (ue[4] = (Me) => I.value.switchAfterImport = Me),
            "name-error": T.value,
            onValidateName: se
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Ae = F.value) != null && Ae.models_needing_download) ? (a(), R(Yt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", Ox, [
            C(ie, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: h(() => [...ue[13] || (ue[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
              variant: "primary",
              size: "md",
              disabled: !G.value,
              onClick: de
            }, {
              default: h(() => [...ue[14] || (ue[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", Ax, [
          t("p", Nx, [
            ue[15] || (ue[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            ue[16] || (ue[16] = b("... ", -1))
          ]),
          C(An, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ne
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (a(), r("p", Ux, " This may take several minutes. Please wait... ")),
          M.value.error ? (a(), r("div", zx, [
            t("p", Fx, f(M.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", Bx, [
          t("div", {
            class: Pe(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", Vx, [
            t("div", Wx, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Gx, f($.value), 1)
          ]),
          t("div", jx, [
            C(ie, {
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
}), Dr = /* @__PURE__ */ ye(Hx, [["__scopeId", "data-v-72cbc04e"]]), Kx = /* @__PURE__ */ pe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (d) => n.value = !0)
          })
        ]),
        content: h(() => [
          C(Dr, { onImportComplete: l })
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
}), qx = /* @__PURE__ */ ye(Kx, [["__scopeId", "data-v-e13bfe76"]]), gn = co(), Yx = 5e3, lo = k([]), fa = k(!1), ma = k(null);
let Ro = null;
async function hn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Lr(e) {
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
    Ro || (Ro = window.setInterval(c, Yx));
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
const Jx = { class: "instance-header" }, Xx = { class: "provider-badge" }, Qx = { class: "instance-name" }, Zx = {
  key: 0,
  class: "spinner"
}, e3 = { class: "instance-details" }, t3 = {
  key: 0,
  class: "detail"
}, s3 = {
  key: 1,
  class: "detail instance-url"
}, o3 = {
  key: 2,
  class: "detail"
}, n3 = {
  key: 3,
  class: "detail"
}, a3 = {
  key: 4,
  class: "detail total-cost"
}, l3 = {
  key: 0,
  class: "deployment-progress"
}, i3 = { class: "progress-message" }, r3 = { class: "instance-actions" }, c3 = /* @__PURE__ */ pe({
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
      t("div", Jx, [
        t("span", Xx, f(o.value), 1),
        t("span", Qx, f(e.instance.name), 1),
        t("span", {
          class: Pe(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", Zx)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", e3, [
        e.instance.gpu_type ? (a(), r("span", t3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", s3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", o3, f(d(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", n3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", a3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", l3, [
        t("div", i3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), R(Xn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", r3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), R(ie, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), R(ie, {
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
        e.instance.status === "running" ? (a(), R(ie, {
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
        e.instance.status === "stopped" ? (a(), R(ie, {
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
        C(ie, {
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
}), d3 = /* @__PURE__ */ ye(c3, [["__scopeId", "data-v-746c3894"]]), u3 = { class: "instances-tab" }, f3 = { class: "instances-header" }, m3 = {
  key: 0,
  class: "loading-state"
}, v3 = {
  key: 1,
  class: "empty-state"
}, p3 = {
  key: 2,
  class: "instances-list"
}, g3 = /* @__PURE__ */ pe({
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
    return (n, l) => (a(), r("div", u3, [
      t("div", f3, [
        C(At, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(ie, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", m3, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", v3, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", p3, [
        (a(!0), r(W, null, we(o.value, (i) => (a(), R(d3, {
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
}), h3 = /* @__PURE__ */ ye(g3, [["__scopeId", "data-v-ba614fc3"]]), y3 = { class: "remote-header" }, w3 = { class: "remote-info" }, _3 = { class: "remote-icon" }, b3 = { class: "remote-name" }, k3 = {
  key: 0,
  class: "default-badge"
}, $3 = {
  key: 1,
  class: "sync-badge"
}, C3 = {
  key: 0,
  class: "ahead"
}, x3 = {
  key: 1,
  class: "behind"
}, S3 = {
  key: 1,
  class: "synced"
}, I3 = ["href"], E3 = {
  key: 1,
  class: "remote-url-text"
}, T3 = { class: "remote-actions" }, P3 = /* @__PURE__ */ pe({
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
      t("div", y3, [
        t("div", w3, [
          t("span", _3, f(o.value ? "🔗" : "🌐"), 1),
          t("span", b3, f(e.remote.name), 1),
          o.value ? (a(), r("span", k3, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", $3, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(W, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", C3, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", x3, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", S3, "✓ synced"))
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
        }, f(l.value), 9, I3)) : (a(), r("span", E3, f(l.value), 1))
      ]),
      t("div", T3, [
        C(ie, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), R(ie, {
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
        C(ie, {
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
}), Or = /* @__PURE__ */ ye(P3, [["__scopeId", "data-v-d687d161"]]), R3 = { class: "runpod-tab" }, M3 = { class: "api-key-card" }, D3 = { class: "api-key-row" }, L3 = { class: "api-key-input-wrapper" }, O3 = ["type", "disabled"], A3 = ["title"], N3 = { class: "status-icon" }, U3 = { class: "status-text" }, z3 = {
  key: 0,
  class: "credit-balance"
}, F3 = { class: "config-card" }, B3 = { class: "config-row" }, V3 = ["disabled"], W3 = {
  key: 0,
  value: ""
}, G3 = {
  key: 1,
  value: "",
  disabled: ""
}, j3 = ["value", "disabled"], H3 = { class: "config-row" }, K3 = {
  key: 0,
  class: "loading-inline"
}, q3 = { class: "no-volumes-state" }, Y3 = { class: "no-volumes-text" }, J3 = ["value"], X3 = { class: "config-row" }, Q3 = ["disabled"], Z3 = {
  key: 0,
  value: ""
}, e5 = {
  key: 1,
  value: ""
}, t5 = {
  key: 2,
  value: ""
}, s5 = ["value"], o5 = { class: "config-row" }, n5 = { class: "radio-group" }, a5 = { class: "radio-option" }, l5 = { class: "radio-label" }, i5 = { class: "radio-option disabled" }, r5 = { class: "radio-label" }, c5 = { class: "config-row" }, d5 = { class: "radio-group" }, u5 = { class: "radio-option" }, f5 = { class: "radio-label" }, m5 = { class: "radio-option disabled" }, v5 = { class: "radio-label" }, p5 = { class: "config-row" }, g5 = {
  key: 0,
  class: "loading-text"
}, h5 = {
  key: 1,
  class: "empty-remotes"
}, y5 = { class: "remotes-list" }, w5 = {
  key: 0,
  class: "sync-warning"
}, _5 = { class: "warning-content" }, b5 = { class: "remotes-footer" }, k5 = { class: "summary-card" }, $5 = {
  key: 0,
  class: "loading-text"
}, C5 = { class: "summary-row" }, x5 = { class: "summary-value" }, S5 = { class: "summary-row" }, I5 = { class: "summary-value" }, E5 = { class: "summary-row" }, T5 = { class: "summary-value" }, P5 = {
  key: 0,
  class: "summary-sub-row"
}, R5 = { class: "summary-sub-label" }, M5 = {
  key: 1,
  class: "summary-sub-row warning"
}, D5 = { class: "summary-sub-label" }, L5 = { class: "summary-row" }, O5 = { class: "summary-value" }, A5 = { class: "summary-row" }, N5 = { class: "summary-value" }, U5 = { class: "deployment-summary" }, z5 = { class: "summary-columns" }, F5 = { class: "summary-column" }, B5 = { class: "pricing-row" }, V5 = { class: "pricing-value" }, W5 = { class: "pricing-row" }, G5 = { class: "pricing-value" }, j5 = { class: "pricing-row" }, H5 = { class: "pricing-value" }, K5 = { class: "pricing-row total" }, q5 = { class: "pricing-value" }, Y5 = { class: "summary-column" }, J5 = { class: "spec-row" }, X5 = { class: "spec-row" }, Q5 = {
  key: 0,
  class: "spec-row"
}, Z5 = {
  key: 1,
  class: "spec-row spot-warning"
}, e8 = {
  key: 4,
  class: "deploy-actions"
}, t8 = { class: "progress-content" }, s8 = { class: "phase-indicator" }, o8 = { key: 0 }, n8 = { key: 1 }, a8 = { key: 2 }, l8 = {
  key: 3,
  class: "spinner"
}, i8 = { class: "phase-text" }, r8 = { class: "phase-name" }, c8 = { class: "phase-detail" }, d8 = {
  key: 0,
  class: "ready-actions"
}, u8 = { class: "console-link" }, f8 = ["href"], m8 = /* @__PURE__ */ pe({
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
    } = at(), P = k(!1), D = k(""), E = k(!1), x = k(!1), H = k(null), V = k(null), F = k(""), I = k(""), T = k(""), M = k("SECURE"), ne = k("ON_DEMAND"), J = k("my-comfyui-deploy"), G = k([]), ee = k({}), Q = k(!1), A = k(null), j = k(null), L = k(null), se = k([]), de = k(!1), De = k([]), ce = k(!1), ge = k([]), Ee = k(!1), Re = k(null), xe = k(!1), Ce = k(!1), he = k(null), ue = k(!1), Ae = k(null), Me = k(null), O = k(null), z = k(!1), oe = k(null), le = k(!1), me = k(!1), ve = N(() => De.value.find((ke) => ke.id === I.value) || null), Se = N(() => F.value ? De.value.filter((ke) => ke.data_center_id === F.value) : De.value), Ie = N(() => ge.value.filter((ke) => ke.available)), ae = N(() => A.value && ee.value[A.value] || null), fe = N(() => {
      if (!A.value) return null;
      const ke = G.value.find((X) => X.name === A.value);
      return (ke == null ? void 0 : ke.fetch_url) || null;
    }), ze = N(() => E.value && I.value && T.value && fe.value && !Ce.value && !z.value), Te = (ke) => {
      const X = ge.value.find((gt) => gt.id === T.value);
      if (!X) return "0.00";
      if (ke === "SECURE") return (X.securePrice ?? 0).toFixed(2);
      if (ke === "COMMUNITY") return (X.communityPrice ?? 0).toFixed(2);
      const Ke = M.value === "SECURE";
      return ke === "ON_DEMAND" ? Ke ? (X.securePrice ?? 0).toFixed(2) : (X.communityPrice ?? 0).toFixed(2) : Ke ? (X.secureSpotPrice ?? 0).toFixed(2) : (X.communitySpotPrice ?? 0).toFixed(2);
    }, Z = N(() => {
      const ke = ge.value.find((ls) => ls.id === T.value), X = De.value.find((ls) => ls.id === I.value);
      if (!ke) return null;
      const Ke = M.value === "SECURE", gt = ne.value === "SPOT";
      let qt;
      gt ? qt = Ke ? ke.secureSpotPrice ?? 0 : ke.communitySpotPrice ?? 0 : qt = Ke ? ke.securePrice ?? 0 : ke.communityPrice ?? 0;
      const ys = X ? X.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: qt,
        volume: ys,
        container: ws,
        total: qt + ys + ws
      };
    });
    async function q() {
      await We(), await Promise.all([mt(), Ne()]);
    }
    async function Ne() {
      Q.value = !0;
      try {
        const ke = await w();
        G.value = ke.remotes, await Promise.all(
          ke.remotes.map(async (Ke) => {
            const gt = await p(Ke.name);
            gt && (ee.value[Ke.name] = gt);
          })
        );
        const X = ke.remotes.find((Ke) => Ke.is_default);
        X ? A.value = X.name : ke.remotes.length > 0 && (A.value = ke.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function be(ke) {
      j.value = ke;
      try {
        await _(ke);
        const X = await p(ke);
        X && (ee.value[ke] = X), o("toast", `Fetched from ${ke}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function _e(ke) {
      L.value = ke;
      try {
        await S(ke, { force: !1 });
        const X = await p(ke);
        X && (ee.value[ke] = X), o("toast", `Pushed to ${ke}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        L.value = null;
      }
    }
    function B(ke) {
      A.value = ke;
    }
    async function U() {
      if (D.value) {
        x.value = !0, H.value = null;
        try {
          const ke = await l(D.value, !0);
          ke.status === "success" ? (E.value = !0, V.value = ke.credit_balance ?? null, H.value = { type: "success", message: ke.message }, await q()) : H.value = { type: "error", message: ke.message };
        } catch (ke) {
          H.value = {
            type: "error",
            message: ke instanceof Error ? ke.message : "Connection test failed"
          };
        } finally {
          x.value = !1;
        }
      }
    }
    async function re() {
      try {
        await v(), D.value = "", E.value = !1, H.value = null, V.value = null, se.value = [], F.value = "", De.value = [], I.value = "", ge.value = [], T.value = "", Re.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function We() {
      ce.value = !0, de.value = !0;
      try {
        const ke = await i();
        De.value = ke.volumes;
        const X = /* @__PURE__ */ new Map();
        for (const Ke of ke.volumes)
          Ke.data_center_id && !X.has(Ke.data_center_id) && X.set(Ke.data_center_id, {
            id: Ke.data_center_id,
            name: Ke.data_center_name || Ke.data_center_id,
            available: !0
          });
        if (ke.volumes.length === 0) {
          const Ke = await $();
          se.value = Ke.data_centers;
        } else
          se.value = Array.from(X.values());
        if (De.value.length > 0) {
          const Ke = De.value[0];
          I.value = Ke.id, Ke.data_center_id && (F.value = Ke.data_center_id, await Qe(Ke.data_center_id));
        } else se.value.length > 0 && (F.value = se.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        ce.value = !1, de.value = !1;
      }
    }
    async function Qe(ke) {
      Ee.value = !0;
      try {
        const X = await c(ke);
        ge.value = X.gpu_types;
        const Ke = ge.value.find((gt) => gt.available);
        Ke ? T.value = Ke.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ee.value = !1;
      }
    }
    Ct(F, async (ke) => {
      if (!ke || ce.value) return;
      const X = De.value.find((Ke) => Ke.id === I.value);
      X && X.data_center_id !== ke && (I.value = ""), await Qe(ke);
    }), Ct(I, async (ke) => {
      if (!ke) {
        ge.value = [], T.value = "";
        return;
      }
      if (ce.value) return;
      const X = De.value.find((Ke) => Ke.id === ke);
      X && X.data_center_id !== F.value ? F.value = X.data_center_id : X && await Qe(X.data_center_id);
    });
    async function mt() {
      xe.value = !0;
      try {
        Re.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        xe.value = !1;
      }
    }
    async function lt() {
      if (!(!T.value || !I.value)) {
        z.value = !0, he.value = null;
        try {
          const ke = await g();
          oe.value = ke, ke.can_export ? ke.warnings.models_without_sources.length > 0 ? me.value = !0 : await zt() : le.value = !0;
        } catch (ke) {
          he.value = {
            status: "error",
            message: ke instanceof Error ? ke.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          z.value = !1;
        }
      }
    }
    async function dt() {
      me.value = !1, await zt();
    }
    async function Rt() {
      try {
        const ke = await g();
        oe.value = ke;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function zt() {
      Ce.value = !0;
      try {
        let ke;
        if (ne.value === "SPOT") {
          const Ke = ge.value.find((gt) => gt.id === T.value);
          Ke && (ke = M.value === "SECURE" ? Ke.secureSpotPrice : Ke.communitySpotPrice);
        }
        const X = await d({
          gpu_type_id: T.value,
          pod_name: J.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: M.value,
          pricing_type: ne.value,
          spot_bid: ke,
          import_source: fe.value
        });
        he.value = X, X.status === "success" && X.pod_id ? (Ae.value = X.pod_id, ue.value = !0, Kt(X.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", X.message, "error");
      } catch (ke) {
        he.value = {
          status: "error",
          message: ke instanceof Error ? ke.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ce.value = !1;
      }
    }
    function Kt(ke) {
      Ms(ke), O.value = window.setInterval(() => Ms(ke), 3e3);
    }
    function Ws() {
      O.value && (clearInterval(O.value), O.value = null);
    }
    async function Ms(ke) {
      try {
        const X = await u(ke);
        Me.value = X, (X.phase === "READY" || X.phase === "ERROR" || X.phase === "STOPPED") && (Ws(), X.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (X) {
        console.error("Failed to poll deployment status:", X);
      }
    }
    function no() {
      ue.value = !1, Ws(), Ae.value = null, Me.value = null;
    }
    function Co() {
      var ke;
      (ke = Me.value) != null && ke.comfyui_url && window.open(Me.value.comfyui_url, "_blank", "noopener,noreferrer");
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
        ke.has_key && ke.key_preview && (D.value = `****${ke.key_preview}`, ke.valid ? (E.value = !0, V.value = ke.credit_balance ?? null, H.value = { type: "success", message: "Connected to RunPod" }, await q()) : ke.error && (H.value = { type: "error", message: ke.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), (ke, X) => {
      var Ke, gt, qt, ys, ws, ls;
      return a(), r(W, null, [
        t("div", R3, [
          C(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", M3, [
                t("div", D3, [
                  t("div", L3, [
                    Ye(t("input", {
                      "onUpdate:modelValue": X[0] || (X[0] = (Fe) => D.value = Fe),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, O3), [
                      [Yn, D.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: X[1] || (X[1] = (Fe) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, A3)
                  ]),
                  E.value ? y("", !0) : (a(), R(ie, {
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
                  E.value ? (a(), R(ie, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: re
                  }, {
                    default: h(() => [...X[17] || (X[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                H.value ? (a(), r("div", {
                  key: 0,
                  class: Pe(["connection-status", H.value.type])
                }, [
                  t("span", N3, f(H.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", U3, f(H.value.message), 1),
                  V.value !== null ? (a(), r("span", z3, " $" + f(V.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          E.value ? (a(), R(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", F3, [
                t("div", B3, [
                  X[19] || (X[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": X[2] || (X[2] = (Fe) => F.value = Fe),
                    class: "config-select",
                    disabled: de.value
                  }, [
                    de.value ? (a(), r("option", W3, "Loading...")) : F.value ? y("", !0) : (a(), r("option", G3, "Select a region")),
                    (a(!0), r(W, null, we(se.value, (Fe) => (a(), r("option", {
                      key: Fe.id,
                      value: Fe.id,
                      disabled: !Fe.available
                    }, f(Fe.id) + " (" + f(Fe.name) + ")" + f(Fe.available ? "" : " [Unavailable]"), 9, j3))), 128))
                  ], 8, V3), [
                    [hs, F.value]
                  ])
                ]),
                t("div", H3, [
                  X[24] || (X[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  ce.value ? (a(), r("div", K3, "Loading volumes...")) : Se.value.length === 0 ? (a(), r(W, { key: 1 }, [
                    t("div", q3, [
                      X[20] || (X[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", Y3, "No volumes in " + f(F.value || "this region"), 1)
                    ]),
                    X[21] || (X[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    X[22] || (X[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(W, { key: 2 }, [
                    Ye(t("select", {
                      "onUpdate:modelValue": X[3] || (X[3] = (Fe) => I.value = Fe),
                      class: "config-select"
                    }, [
                      (a(!0), r(W, null, we(Se.value, (Fe) => (a(), r("option", {
                        key: Fe.id,
                        value: Fe.id
                      }, f(Fe.name) + " (" + f(Fe.size_gb) + "GB) ", 9, J3))), 128))
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
                t("div", X3, [
                  X[25] || (X[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": X[4] || (X[4] = (Fe) => T.value = Fe),
                    class: "config-select",
                    disabled: Ee.value || !I.value
                  }, [
                    I.value ? Ee.value ? (a(), r("option", e5, "Loading GPUs...")) : Ie.value.length === 0 ? (a(), r("option", t5, "No GPUs available in this region")) : y("", !0) : (a(), r("option", Z3, "Select a volume first")),
                    (a(!0), r(W, null, we(Ie.value, (Fe) => (a(), r("option", {
                      key: Fe.id,
                      value: Fe.id
                    }, f(Fe.displayName) + " (" + f(Fe.memoryInGb) + "GB) - $" + f(M.value === "SECURE" ? (Fe.securePrice ?? 0).toFixed(2) : (Fe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Fe.stockStatus ? `[${Fe.stockStatus}]` : ""), 9, s5))), 128))
                  ], 8, Q3), [
                    [hs, T.value]
                  ])
                ]),
                t("div", o5, [
                  X[26] || (X[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", n5, [
                    t("label", a5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[5] || (X[5] = (Fe) => M.value = Fe),
                        value: "SECURE"
                      }, null, 512), [
                        [Xt, M.value]
                      ]),
                      t("span", l5, "Secure ($" + f(Te("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", i5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[6] || (X[6] = (Fe) => M.value = Fe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Xt, M.value]
                      ]),
                      t("span", r5, "Community ($" + f(Te("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", c5, [
                  X[27] || (X[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", d5, [
                    t("label", u5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[7] || (X[7] = (Fe) => ne.value = Fe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Xt, ne.value]
                      ]),
                      t("span", f5, "On-Demand ($" + f(Te("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", m5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": X[8] || (X[8] = (Fe) => ne.value = Fe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Xt, ne.value]
                      ]),
                      t("span", v5, "Spot ($" + f(Te("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", p5, [
                  X[28] || (X[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ye(t("input", {
                    "onUpdate:modelValue": X[9] || (X[9] = (Fe) => J.value = Fe),
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
          E.value ? (a(), R(it, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              Q.value ? (a(), r("div", g5, "Loading remotes...")) : G.value.length === 0 ? (a(), r("div", h5, [
                X[30] || (X[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(ie, {
                  variant: "primary",
                  size: "xs",
                  onClick: X[10] || (X[10] = (Fe) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...X[29] || (X[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(W, { key: 2 }, [
                t("div", y5, [
                  (a(!0), r(W, null, we(G.value, (Fe) => (a(), R(Or, {
                    key: Fe.name,
                    remote: Fe,
                    "sync-status": ee.value[Fe.name],
                    "is-selected": A.value === Fe.name,
                    "is-fetching": j.value === Fe.name,
                    "is-pushing": L.value === Fe.name,
                    onFetch: be,
                    onPush: _e,
                    onSelect: B
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ae.value && ae.value.ahead > 0 ? (a(), r("div", w5, [
                  X[31] || (X[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", _5, [
                    t("strong", null, f(ae.value.ahead) + " unpushed commit" + f(ae.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(A.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(ie, {
                    variant: "primary",
                    size: "xs",
                    loading: L.value === A.value,
                    onClick: X[11] || (X[11] = (Fe) => A.value && _e(A.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", b5, [
                  C(ie, {
                    variant: "link",
                    size: "xs",
                    onClick: X[12] || (X[12] = (Fe) => o("navigate", "remotes"))
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
          E.value ? (a(), R(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", k5, [
                xe.value ? (a(), r("div", $5, "Loading environment summary...")) : Re.value ? (a(), r(W, { key: 1 }, [
                  t("div", C5, [
                    X[33] || (X[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", x5, f(Re.value.comfyui_version), 1)
                  ]),
                  t("div", S5, [
                    X[34] || (X[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", I5, f(Re.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", E5, [
                    X[35] || (X[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", T5, f(Re.value.model_count) + " models", 1)
                  ]),
                  Re.value.models_with_sources > 0 ? (a(), r("div", P5, [
                    t("span", R5, "└─ " + f(Re.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  Re.value.models_without_sources > 0 ? (a(), r("div", M5, [
                    t("span", D5, "└─ " + f(Re.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", L5, [
                    X[36] || (X[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", O5, f(Re.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", A5, [
                    X[37] || (X[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", N5, "~" + f(Re.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value && Z.value ? (a(), R(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Fe, is;
              return [
                t("div", U5, [
                  t("div", z5, [
                    t("div", F5, [
                      X[42] || (X[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", B5, [
                        X[38] || (X[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", V5, "$" + f(Z.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", W5, [
                        X[39] || (X[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", G5, "$" + f(Z.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", j5, [
                        X[40] || (X[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", H5, "$" + f(Z.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      X[43] || (X[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", K5, [
                        X[41] || (X[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", q5, "~$" + f(Z.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", Y5, [
                      X[45] || (X[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", J5, [
                        t("span", null, f(((Fe = ge.value.find((te) => te.id === T.value)) == null ? void 0 : Fe.displayName) || "GPU") + " (" + f(((is = ge.value.find((te) => te.id === T.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", X5, [
                        t("span", null, "Region: " + f(F.value), 1)
                      ]),
                      ve.value ? (a(), r("div", Q5, [
                        t("span", null, "Volume: " + f(ve.value.name), 1)
                      ])) : y("", !0),
                      ne.value === "SPOT" ? (a(), r("div", Z5, [...X[44] || (X[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          E.value ? (a(), r("div", e8, [
            C(ie, {
              variant: "primary",
              size: "md",
              loading: z.value || Ce.value,
              disabled: !ze.value,
              onClick: lt
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
                b(" " + f(z.value ? "Validating..." : Ce.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          he.value ? (a(), R(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              C(Et, {
                status: he.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(he.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(he.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(he.value.message), 1)
                ]),
                actions: h(() => [
                  C(ie, {
                    variant: "ghost",
                    size: "xs",
                    onClick: X[13] || (X[13] = (Fe) => he.value = null)
                  }, {
                    default: h(() => [...X[47] || (X[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                he.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    C(ut, {
                      label: "Pod ID:",
                      value: he.value.pod_id
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
          "show-close-button": ((Ke = Me.value) == null ? void 0 : Ke.phase) === "READY" || ((gt = Me.value) == null ? void 0 : gt.phase) === "ERROR" || ((qt = Me.value) == null ? void 0 : qt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var Fe, is, te, K, Ue, He, ot, ft, Mt, rs, Gs, js;
            return [
              t("div", t8, [
                t("div", s8, [
                  t("div", {
                    class: Pe(["phase-icon", (is = (Fe = Me.value) == null ? void 0 : Fe.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((te = Me.value) == null ? void 0 : te.phase) === "READY" ? (a(), r("span", o8, "✓")) : ((K = Me.value) == null ? void 0 : K.phase) === "ERROR" ? (a(), r("span", n8, "✕")) : ((Ue = Me.value) == null ? void 0 : Ue.phase) === "STOPPED" ? (a(), r("span", a8, "○")) : (a(), r("span", l8, "⟳"))
                  ], 2),
                  t("div", i8, [
                    t("div", r8, f(xo((He = Me.value) == null ? void 0 : He.phase)), 1),
                    t("div", c8, f(((ot = Me.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(Xn, {
                  progress: So((ft = Me.value) == null ? void 0 : ft.phase),
                  variant: ((Mt = Me.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((rs = Me.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = Me.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), r("div", d8, [
                  C(ie, {
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
                t("div", u8, [
                  (js = Me.value) != null && js.console_url ? (a(), r("a", {
                    key: 0,
                    href: Me.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, f8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Me.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Me.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Me.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              C(ie, {
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
        le.value && oe.value ? (a(), R(Rr, {
          key: 1,
          issues: oe.value.blocking_issues,
          onClose: X[14] || (X[14] = (Fe) => le.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        me.value && oe.value ? (a(), R(Mr, {
          key: 2,
          models: oe.value.warnings.models_without_sources,
          onConfirm: dt,
          onCancel: X[15] || (X[15] = (Fe) => me.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), v8 = /* @__PURE__ */ ye(m8, [["__scopeId", "data-v-522cd4d9"]]), p8 = { class: "worker-header" }, g8 = { class: "worker-status" }, h8 = { class: "worker-name" }, y8 = { class: "worker-actions" }, w8 = { class: "worker-details" }, _8 = { class: "detail-item" }, b8 = { class: "detail-value" }, k8 = {
  key: 0,
  class: "detail-item"
}, $8 = { class: "detail-value" }, C8 = {
  key: 1,
  class: "detail-item"
}, x8 = { class: "detail-value mode-badge" }, S8 = {
  key: 0,
  class: "worker-stats"
}, I8 = {
  key: 0,
  class: "stat-item"
}, E8 = { key: 0 }, T8 = {
  key: 1,
  class: "worker-stats offline"
}, P8 = /* @__PURE__ */ pe({
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
      t("div", p8, [
        t("div", g8, [
          t("span", {
            class: Pe(["status-dot", e.worker.status])
          }, null, 2),
          t("span", h8, f(e.worker.name), 1)
        ]),
        t("div", y8, [
          e.worker.status === "online" ? (a(), R(ie, {
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
          C(ie, {
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
      t("div", w8, [
        t("span", _8, [
          t("span", b8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", k8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", $8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", C8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", x8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", S8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", I8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", E8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", T8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), R8 = /* @__PURE__ */ ye(P8, [["__scopeId", "data-v-b1be7134"]]), M8 = { class: "add-worker-content" }, D8 = { class: "manual-form" }, L8 = { class: "form-row" }, O8 = { class: "form-row-inline" }, A8 = { class: "form-field flex-2" }, N8 = { class: "form-field flex-1" }, U8 = { class: "form-row" }, z8 = { class: "api-key-wrapper" }, F8 = ["type"], B8 = { class: "result-icon" }, V8 = { class: "result-content" }, W8 = { class: "result-message" }, G8 = {
  key: 0,
  class: "result-detail"
}, j8 = { class: "modal-actions" }, H8 = /* @__PURE__ */ pe({
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
    return (p, _) => (a(), R(vt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", M8, [
          t("div", D8, [
            t("div", L8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Ye(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (S) => l.name = S),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Ut, l.name]
              ])
            ]),
            t("div", O8, [
              t("div", A8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (S) => l.host = S),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Ut, l.host]
                ])
              ]),
              t("div", N8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                Ye(t("input", {
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
            t("div", U8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", z8, [
                Ye(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, F8), [
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
              class: Pe(["test-result", u.value.type])
            }, [
              t("span", B8, f(u.value.type === "success" ? "✓" : "✕"), 1),
              t("div", V8, [
                t("span", W8, f(u.value.message), 1),
                u.value.gpu_info ? (a(), r("span", G8, "GPU: " + f(u.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", j8, [
          C(ie, {
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
          C(ie, {
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
}), K8 = /* @__PURE__ */ ye(H8, [["__scopeId", "data-v-07a00732"]]), q8 = { class: "discovered-content" }, Y8 = {
  key: 0,
  class: "workers-list"
}, J8 = { class: "worker-info" }, X8 = { class: "worker-name" }, Q8 = { class: "worker-address" }, Z8 = {
  key: 0,
  class: "worker-gpu"
}, eS = {
  key: 1,
  class: "empty-state"
}, tS = {
  key: 2,
  class: "api-key-section"
}, sS = { class: "selected-worker" }, oS = { class: "selected-name" }, nS = { class: "selected-address" }, aS = { class: "form-row" }, lS = { class: "api-key-wrapper" }, iS = ["type"], rS = { class: "result-icon" }, cS = { class: "result-message" }, dS = { class: "modal-actions" }, uS = /* @__PURE__ */ pe({
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
    return (w, p) => (a(), R(vt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", q8, [
          e.workers.length > 0 ? (a(), r("div", Y8, [
            (a(!0), r(W, null, we(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", J8, [
                t("span", X8, f(_.name), 1),
                t("span", Q8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", Z8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(ie, {
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
          ])) : (a(), r("div", eS, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", tS, [
            t("div", sS, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", oS, f(l.value.name), 1),
              t("span", nS, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", aS, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", lS, [
                Ye(t("input", {
                  ref_key: "apiKeyInput",
                  ref: u,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Zt(g, ["enter"])
                }, null, 40, iS), [
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
              class: Pe(["test-result", m.value.type])
            }, [
              t("span", rS, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", cS, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", dS, [
          l.value ? (a(), R(ie, {
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
          l.value ? (a(), R(ie, {
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
}), fS = /* @__PURE__ */ ye(uS, [["__scopeId", "data-v-5a3e40a4"]]), mS = { class: "deploy-content" }, vS = { class: "section" }, pS = {
  key: 0,
  class: "loading-text"
}, gS = {
  key: 1,
  class: "empty-remotes"
}, hS = {
  key: 2,
  class: "remotes-list"
}, yS = { class: "section" }, wS = { class: "mode-options" }, _S = { class: "mode-option" }, bS = ["disabled"], kS = { class: "mode-option" }, $S = { class: "section" }, CS = {
  key: 0,
  class: "section"
}, xS = { class: "summary-row" }, SS = {
  key: 1,
  class: "sync-warning"
}, IS = { class: "warning-content" }, ES = { class: "modal-actions" }, TS = /* @__PURE__ */ pe({
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
    } = at(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), D = k(null), E = k(!1), x = N(() => p.value && g.value[p.value] || null), H = N(() => {
      if (!p.value) return null;
      const G = v.value.find((ee) => ee.name === p.value);
      return (G == null ? void 0 : G.fetch_url) || null;
    }), V = N(() => H.value && !E.value);
    async function F() {
      w.value = !0;
      try {
        const G = await l();
        v.value = G.remotes, await Promise.all(
          G.remotes.map(async (Q) => {
            const A = await i(Q.name);
            A && (g.value[Q.name] = A);
          })
        );
        const ee = G.remotes.find((Q) => Q.is_default);
        ee ? p.value = ee.name : G.remotes.length > 0 && (p.value = G.remotes[0].name);
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
        const ee = await i(G);
        ee && (g.value[G] = ee), n("toast", `Fetched from ${G}`, "success");
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
        const ee = await i(G);
        ee && (g.value[G] = ee), n("toast", `Pushed to ${G}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function ne(G) {
      p.value = G;
    }
    async function J() {
      if (H.value) {
        E.value = !0;
        try {
          const G = await m(o.worker.name, {
            import_source: H.value,
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
    return et(() => {
      F(), I();
    }), (G, ee) => (a(), R(vt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: ee[5] || (ee[5] = (Q) => G.$emit("close"))
    }, {
      body: h(() => [
        t("div", mS, [
          t("div", vS, [
            ee[7] || (ee[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", pS, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", gS, [...ee[6] || (ee[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", hS, [
              (a(!0), r(W, null, we(v.value, (Q) => (a(), R(Or, {
                key: Q.name,
                remote: Q,
                "sync-status": g.value[Q.name],
                "is-selected": p.value === Q.name,
                "is-fetching": _.value === Q.name,
                "is-pushing": S.value === Q.name,
                onFetch: T,
                onPush: M,
                onSelect: ne
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", yS, [
            ee[10] || (ee[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", wS, [
              t("label", _S, [
                Ye(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": ee[0] || (ee[0] = (Q) => $.value = Q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, bS), [
                  [Xt, $.value]
                ]),
                ee[8] || (ee[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", kS, [
                Ye(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": ee[1] || (ee[1] = (Q) => $.value = Q),
                  value: "native"
                }, null, 512), [
                  [Xt, $.value]
                ]),
                ee[9] || (ee[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", $S, [
            ee[11] || (ee[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Ye(t("input", {
              "onUpdate:modelValue": ee[2] || (ee[2] = (Q) => P.value = Q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Ut, P.value]
            ])
          ]),
          D.value ? (a(), r("div", CS, [
            ee[12] || (ee[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", xS, " ComfyUI: " + f(D.value.comfyui_version) + " • " + f(D.value.node_count) + " nodes • " + f(D.value.model_count) + " models • " + f(D.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          x.value && x.value.ahead > 0 ? (a(), r("div", SS, [
            ee[14] || (ee[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", IS, [
              t("strong", null, f(x.value.ahead) + " unpushed commit" + f(x.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(ie, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: ee[3] || (ee[3] = (Q) => p.value && M(p.value))
            }, {
              default: h(() => [...ee[13] || (ee[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", ES, [
          C(ie, {
            variant: "ghost",
            size: "sm",
            onClick: ee[4] || (ee[4] = (Q) => G.$emit("close"))
          }, {
            default: h(() => [...ee[15] || (ee[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(ie, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !V.value || E.value,
            onClick: J
          }, {
            default: h(() => [...ee[16] || (ee[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), PS = /* @__PURE__ */ ye(TS, [["__scopeId", "data-v-c12720d3"]]), RS = { class: "custom-tab" }, MS = { class: "section-header" }, DS = { class: "section-actions" }, LS = { class: "workers-content" }, OS = {
  key: 0,
  class: "loading-state"
}, AS = {
  key: 1,
  class: "empty-state"
}, NS = {
  key: 2,
  class: "workers-list"
}, US = { class: "scan-icon" }, zS = { class: "scan-message" }, FS = /* @__PURE__ */ pe({
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
        const F = await c(), I = F.discovered.filter(
          (T) => !d.value.some((M) => M.host === T.host && M.port === T.port)
        );
        u.value = I, I.length > 0 ? p.value = !0 : F.discovered.length > 0 ? S.value = {
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
    async function D(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), w.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function E(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), p.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function x(F) {
      g.value = F;
      try {
        await i(F), o("toast", `Worker '${F}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function H(F) {
      _.value = F;
    }
    function V() {
      _.value = null, o("deployed");
    }
    return et(() => {
      $();
    }), (F, I) => (a(), r("div", RS, [
      t("div", MS, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", DS, [
          C(ie, {
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
          C(ie, {
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
      t("div", LS, [
        m.value && d.value.length === 0 ? (a(), r("div", OS, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : d.value.length === 0 ? (a(), r("div", AS, [...I[10] || (I[10] = [
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
        ])])) : (a(), r("div", NS, [
          (a(!0), r(W, null, we(d.value, (T) => (a(), R(R8, {
            key: T.name,
            worker: T,
            "is-action-loading": g.value === T.name,
            onDeploy: H,
            onRemove: x
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), r("div", {
        key: 0,
        class: Pe(["scan-result", S.value.type])
      }, [
        t("span", US, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", zS, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (T) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), R(fS, {
        key: 1,
        workers: u.value,
        onClose: I[2] || (I[2] = (T) => p.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), R(K8, {
        key: 2,
        onClose: I[3] || (I[3] = (T) => w.value = !1),
        onAdd: D
      })) : y("", !0),
      _.value ? (a(), R(PS, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (T) => _.value = null),
        onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
        onDeployed: V
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), BS = /* @__PURE__ */ ye(FS, [["__scopeId", "data-v-1637dead"]]), va = "ComfyGit.Deploy.GitHubPAT";
function Ar(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function VS(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function WS() {
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
    isRemoteSsh: Ar,
    isRemoteHttps: VS
  };
}
const GS = { class: "settings-content" }, jS = { class: "settings-section" }, HS = {
  key: 0,
  class: "ssh-warning"
}, KS = { class: "form-row" }, qS = { class: "token-wrapper" }, YS = ["type"], JS = { class: "result-icon" }, XS = { class: "result-message" }, QS = { class: "token-actions" }, ZS = /* @__PURE__ */ pe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = WS(), { getRemotes: d, testGitAuth: u } = at(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = N(() => c());
    et(async () => {
      var E;
      const D = n();
      D && (m.value = D);
      try {
        const H = (E = (await d()).remotes) == null ? void 0 : E.find((V) => V.name === "origin");
        H && Ar(H.url) && (p.value = !0);
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
        t("div", GS, [
          t("div", jS, [
            E[8] || (E[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", HS, [...E[3] || (E[3] = [
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
            t("div", KS, [
              E[4] || (E[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", qS, [
                Ye(t("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (x) => m.value = x),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, YS), [
                  [Yn, m.value]
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
              t("span", JS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", XS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", QS, [
              C(ie, {
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
              _.value ? (a(), R(ie, {
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
        C(ie, {
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
}), e4 = /* @__PURE__ */ ye(ZS, [["__scopeId", "data-v-b21588ad"]]), t4 = /* @__PURE__ */ pe({
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
    } = Lr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = N(() => [
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
    async function D(F) {
      S.value = F.id;
      try {
        await d(F), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function E(F) {
      S.value = F.id;
      try {
        await u(F), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function x(F) {
      $.value = F;
    }
    async function H() {
      const F = $.value;
      if (F) {
        $.value = null, S.value = F.id;
        try {
          await m(F), o("toast", "Instance terminated", "success");
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
    return et(() => {
      c(), v();
    }), oo(() => {
      g();
    }), (F, I) => (a(), r(W, null, [
      C(Tt, null, {
        header: h(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              C(ie, {
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
          C(Sr, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (T) => _.value = T),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), R(h3, {
            key: 0,
            instances: Ge(n),
            "is-loading": Ge(l),
            "action-loading-id": S.value,
            onRefresh: Ge(c),
            onStop: D,
            onStart: E,
            onTerminate: x
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), R(v8, {
            key: 1,
            onToast: I[3] || (I[3] = (T, M) => o("toast", T, M)),
            onNavigate: I[4] || (I[4] = (T) => o("navigate", T)),
            onDeployed: V
          })) : y("", !0),
          _.value === "custom" ? (a(), R(BS, {
            key: 2,
            onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
            onDeployed: V
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), R(tl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: H,
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
      p.value ? (a(), R(e4, {
        key: 1,
        onClose: I[8] || (I[8] = (T) => p.value = !1),
        onSaved: I[9] || (I[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), s4 = /* @__PURE__ */ ye(t4, [["__scopeId", "data-v-d4e32a10"]]), o4 = { class: "header-info" }, n4 = { class: "commit-hash" }, a4 = {
  key: 0,
  class: "commit-refs"
}, l4 = { class: "commit-message" }, i4 = { class: "commit-date" }, r4 = {
  key: 0,
  class: "loading"
}, c4 = {
  key: 1,
  class: "changes-section"
}, d4 = { class: "stats-row" }, u4 = { class: "stat" }, f4 = { class: "stat insertions" }, m4 = { class: "stat deletions" }, v4 = {
  key: 0,
  class: "change-group"
}, p4 = {
  key: 1,
  class: "change-group"
}, g4 = {
  key: 0,
  class: "version"
}, h4 = {
  key: 2,
  class: "change-group"
}, y4 = { class: "change-item" }, w4 = /* @__PURE__ */ pe({
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
    }), (d, u) => (a(), R(vt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => d.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", o4, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", n4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", a4, [
              (a(!0), r(W, null, we(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Oe, {
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
          t("div", l4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", i4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", r4, "Loading details...")) : n.value ? (a(), r("div", c4, [
            t("div", d4, [
              t("span", u4, f(n.value.stats.files_changed) + " files", 1),
              t("span", f4, "+" + f(n.value.stats.insertions), 1),
              t("span", m4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", v4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[6] || (u[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(W, null, we(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(W, null, we(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(W, null, we(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", p4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[10] || (u[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(W, null, we(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", g4, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(W, null, we(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", h4, [
              C(Go, { variant: "section" }, {
                default: h(() => [...u[13] || (u[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", y4, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        C(Oe, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => d.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...u[15] || (u[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Oe, {
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
}), _4 = /* @__PURE__ */ ye(w4, [["__scopeId", "data-v-d256ff6d"]]), b4 = { class: "base-textarea-wrapper" }, k4 = ["value", "rows", "placeholder", "disabled", "maxlength"], $4 = {
  key: 0,
  class: "base-textarea-count"
}, C4 = /* @__PURE__ */ pe({
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
    return (i, c) => (a(), r("div", b4, [
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
      }, null, 40, k4),
      e.showCharCount && e.maxLength ? (a(), r("div", $4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Xl = /* @__PURE__ */ ye(C4, [["__scopeId", "data-v-c6d16c93"]]), x4 = ["checked", "disabled"], S4 = { class: "base-checkbox-box" }, I4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, E4 = {
  key: 0,
  class: "base-checkbox-label"
}, T4 = /* @__PURE__ */ pe({
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
      }, null, 40, x4),
      t("span", S4, [
        e.modelValue ? (a(), r("svg", I4, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", E4, [
        qe(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pa = /* @__PURE__ */ ye(T4, [["__scopeId", "data-v-bf17c831"]]), P4 = { class: "popover-header" }, R4 = { class: "popover-body" }, M4 = {
  key: 0,
  class: "changes-summary"
}, D4 = {
  key: 0,
  class: "change-item"
}, L4 = {
  key: 1,
  class: "change-item"
}, O4 = {
  key: 2,
  class: "change-item"
}, A4 = {
  key: 3,
  class: "change-item"
}, N4 = {
  key: 4,
  class: "change-item"
}, U4 = {
  key: 5,
  class: "change-item"
}, z4 = {
  key: 1,
  class: "no-changes"
}, F4 = {
  key: 2,
  class: "loading"
}, B4 = {
  key: 3,
  class: "issues-error"
}, V4 = { class: "error-header" }, W4 = { class: "error-title" }, G4 = { class: "issues-list" }, j4 = { class: "workflow-state" }, H4 = { class: "message-section" }, K4 = { class: "popover-footer" }, q4 = {
  key: 1,
  class: "commit-popover"
}, Y4 = { class: "popover-header" }, J4 = { class: "popover-body" }, X4 = {
  key: 0,
  class: "changes-summary"
}, Q4 = {
  key: 0,
  class: "change-item"
}, Z4 = {
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
}, i6 = { class: "error-header" }, r6 = { class: "error-title" }, c6 = { class: "issues-list" }, d6 = { class: "workflow-state" }, u6 = { class: "message-section" }, f6 = { class: "popover-footer" }, m6 = /* @__PURE__ */ pe({
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
          onClick: S[4] || (S[4] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", P4, [
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
          t("div", R4, [
            e.status && u.value ? (a(), r("div", M4, [
              e.status.workflows.new.length ? (a(), r("div", D4, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", L4, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", O4, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", A4, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", N4, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", U4, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", z4, " No changes to commit ")) : (a(), r("div", F4, " Loading... ")),
            g.value ? (a(), r("div", B4, [
              t("div", V4, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", W4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", G4, [
                (a(!0), r(W, null, we(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", j4, "(" + f($.sync_state) + ")", 1),
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
            t("div", H4, [
              C(Xl, {
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
          t("div", K4, [
            C(Oe, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Oe, {
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
    ])) : (a(), r("div", q4, [
      t("div", Y4, [
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
      t("div", J4, [
        e.status && u.value ? (a(), r("div", X4, [
          e.status.workflows.new.length ? (a(), r("div", Q4, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", Z4, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", e6, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", t6, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", s6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", o6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", n6, " No changes to commit ")) : (a(), r("div", a6, " Loading... ")),
        g.value ? (a(), r("div", l6, [
          t("div", i6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", r6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", c6, [
            (a(!0), r(W, null, we(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", d6, "(" + f($.sync_state) + ")", 1),
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
        t("div", u6, [
          C(Xl, {
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
      t("div", f6, [
        C(Oe, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Oe, {
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
}), Nr = /* @__PURE__ */ ye(m6, [["__scopeId", "data-v-5f897631"]]), v6 = { class: "modal-header" }, p6 = { class: "modal-body" }, g6 = { class: "switch-message" }, h6 = { class: "switch-details" }, y6 = { class: "modal-actions" }, w6 = /* @__PURE__ */ pe({
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
          onClick: o[3] || (o[3] = rt(() => {
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
              t("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = b(" to ", -1)),
              t("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = b("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", h6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", y6, [
            C(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
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
}), _6 = /* @__PURE__ */ ye(w6, [["__scopeId", "data-v-e9c5253e"]]), b6 = {
  key: 0,
  class: "modal-overlay"
}, k6 = { class: "modal-content" }, $6 = { class: "modal-body" }, C6 = { class: "progress-info" }, x6 = { class: "progress-percentage" }, S6 = { class: "progress-state" }, I6 = { class: "switch-steps" }, E6 = { class: "step-icon" }, T6 = { class: "step-label" }, P6 = /* @__PURE__ */ pe({
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
      e.show ? (a(), r("div", b6, [
        t("div", k6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", $6, [
            C(Xn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", C6, [
              t("div", x6, f(e.progress) + "%", 1),
              t("div", S6, f(o.value), 1)
            ]),
            t("div", I6, [
              (a(!0), r(W, null, we(l.value, (d) => (a(), r("div", {
                key: d.state,
                class: Pe(["switch-step", d.status])
              }, [
                t("span", E6, f(d.icon), 1),
                t("span", T6, f(d.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), R6 = /* @__PURE__ */ ye(P6, [["__scopeId", "data-v-768a5078"]]), M6 = { class: "modal-header" }, D6 = { class: "modal-body" }, L6 = {
  key: 0,
  class: "node-section"
}, O6 = { class: "node-list" }, A6 = {
  key: 1,
  class: "node-section"
}, N6 = { class: "node-list" }, U6 = { class: "modal-actions" }, z6 = /* @__PURE__ */ pe({
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
          onClick: o[3] || (o[3] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", M6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", D6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", L6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", O6, [
                (a(!0), r(W, null, we(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", A6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", N6, [
                (a(!0), r(W, null, we(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", U6, [
            C(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
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
}), F6 = /* @__PURE__ */ ye(z6, [["__scopeId", "data-v-7cad7518"]]), B6 = [
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
], V6 = "v0.0.16", W6 = "Akatz", G6 = { class: "social-buttons" }, j6 = ["title", "aria-label", "onClick"], H6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, K6 = ["d"], q6 = ["title", "aria-label", "onClick"], Y6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, J6 = ["d"], X6 = /* @__PURE__ */ pe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", G6, [
      (a(!0), r(W, null, we(Ge(B6), (l) => (a(), r(W, {
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
          (a(), r("svg", H6, [
            t("path", {
              d: l.iconPath
            }, null, 8, K6)
          ]))
        ], 8, j6)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", Y6, [
            t("path", {
              d: l.iconPath
            }, null, 8, J6)
          ]))
        ], 8, q6))
      ], 64))), 128))
    ]));
  }
}), Ur = /* @__PURE__ */ ye(X6, [["__scopeId", "data-v-4f846342"]]), Q6 = { class: "footer-info" }, Z6 = { class: "version" }, eI = { class: "made-by" }, tI = /* @__PURE__ */ pe({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", Q6, [
      t("span", Z6, f(Ge(V6)), 1),
      t("span", eI, [
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
        b(" by " + f(Ge(W6)), 1)
      ])
    ]));
  }
}), zr = /* @__PURE__ */ ye(tI, [["__scopeId", "data-v-8bc3db0a"]]), sI = /* @__PURE__ */ pe({
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
        C(xr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var d;
        return [
          C(Oe, {
            variant: "primary",
            disabled: !((d = o.value) != null && d.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Oe, {
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
}), oI = /* @__PURE__ */ ye(sI, [["__scopeId", "data-v-fac00ae7"]]), nI = { class: "header-actions" }, aI = {
  key: 0,
  class: "wizard-step"
}, lI = { class: "form-field" }, iI = ["placeholder"], rI = {
  key: 0,
  class: "form-error"
}, cI = { class: "form-field form-field--checkbox" }, dI = { class: "form-checkbox" }, uI = {
  key: 0,
  class: "form-field"
}, fI = ["placeholder"], mI = {
  key: 0,
  class: "form-info"
}, vI = {
  key: 1,
  class: "form-suggestion"
}, pI = {
  key: 2,
  class: "form-error"
}, gI = {
  key: 3,
  class: "form-info"
}, hI = {
  key: 1,
  class: "wizard-step"
}, yI = {
  key: 0,
  class: "progress-check-loading"
}, wI = {
  key: 0,
  class: "cli-warning"
}, _I = { class: "cli-warning-header" }, bI = {
  key: 1,
  class: "env-landing"
}, kI = { class: "env-list" }, $I = ["value"], CI = { class: "env-name" }, xI = {
  key: 2,
  class: "env-create"
}, SI = { class: "form-field" }, II = { class: "form-field" }, EI = ["value"], TI = { class: "form-field" }, PI = ["disabled"], RI = ["value"], MI = { class: "form-field" }, DI = ["value"], LI = { class: "form-field form-field--checkbox" }, OI = { class: "form-checkbox" }, AI = {
  key: 0,
  class: "form-error"
}, NI = {
  key: 1,
  class: "env-creating"
}, UI = { class: "creating-intro" }, zI = {
  key: 3,
  class: "env-import"
}, FI = { class: "wizard-footer" }, BI = { class: "wizard-footer-actions" }, io = 10, VI = 600 * 1e3, Ql = 1800 * 1e3, WI = /* @__PURE__ */ pe({
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
    } = at(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), D = k(null), E = k(o.initialStep === 2), x = k(o.defaultPath), H = k(!!o.detectedModelsDir), V = k(o.detectedModelsDir || ""), F = k(null), I = k(null), T = k(null), M = k(null), ne = k("my-new-env"), J = k(Tr), G = k("latest"), ee = k(Pr), Q = k(!0), A = k(null), j = k(null), L = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), se = k(!1), de = k(!1), De = k(!1), ce = k({ progress: 0, message: "" }), ge = k({ progress: 0, message: "" }), Ee = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Re = k(0), xe = k(null), Ce = k(0), he = k(null), ue = N(() => {
      var be, _e;
      const Z = (be = x.value) == null ? void 0 : be.trim(), q = !F.value, Ne = !H.value || !I.value && ((_e = V.value) == null ? void 0 : _e.trim());
      return Z && q && Ne;
    }), Ae = N(() => {
      var Z;
      return (Z = ne.value) == null ? void 0 : Z.trim();
    }), Me = N(() => !!(g.value === 2 || j.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = N(() => j.value || o.workspacePath || null);
    async function z() {
      var Z;
      if (F.value = null, !!((Z = x.value) != null && Z.trim()))
        try {
          const q = await c({ path: x.value, type: "workspace" });
          q.valid || (F.value = q.error || "Invalid path");
        } catch (q) {
          F.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function oe() {
      var Z;
      if (I.value = null, T.value = null, M.value = null, !!((Z = V.value) != null && Z.trim()))
        try {
          const q = await c({ path: V.value, type: "models" });
          if (q.valid)
            M.value = q.model_count ?? null;
          else if (I.value = q.error || "Invalid path", q.suggestion) {
            T.value = q.suggestion, V.value = q.suggestion, I.value = null;
            const Ne = await c({ path: q.suggestion, type: "models" });
            Ne.valid && (M.value = Ne.model_count ?? null);
          }
        } catch (q) {
          I.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function le() {
      var Z, q, Ne, be, _e;
      if (F.value = null, I.value = null, await z(), (Z = F.value) != null && Z.includes("already exists")) {
        F.value = null, j.value = ((q = x.value) == null ? void 0 : q.trim()) || o.defaultPath, g.value = 2, ve();
        return;
      }
      if (!F.value && !(H.value && ((Ne = V.value) != null && Ne.trim()) && (await oe(), I.value))) {
        de.value = !0;
        try {
          await l({
            workspace_path: ((be = x.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: H.value && ((_e = V.value) == null ? void 0 : _e.trim()) || null
          }), Re.value = 0, xe.value = Date.now();
          const B = setInterval(async () => {
            var U;
            if (xe.value && Date.now() - xe.value > VI) {
              clearInterval(B), de.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const re = await i();
              if (Re.value = 0, re.state === "idle" && de.value) {
                clearInterval(B), de.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ce.value = { progress: re.progress, message: re.message }, re.state === "complete" ? (clearInterval(B), de.value = !1, j.value = ((U = x.value) == null ? void 0 : U.trim()) || o.defaultPath, g.value = 2, ve()) : re.state === "error" && (clearInterval(B), de.value = !1, F.value = re.error || "Workspace creation failed");
            } catch (re) {
              Re.value++, console.warn(`Polling failure ${Re.value}/${io}:`, re), Re.value >= io && (clearInterval(B), de.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (B) {
          de.value = !1, F.value = B instanceof Error ? B.message : "Failed to create workspace";
        }
      }
    }
    async function me() {
      De.value = !0, A.value = null;
      try {
        const Z = {
          name: ne.value.trim() || "my-new-env",
          python_version: J.value,
          comfyui_version: G.value,
          torch_backend: ee.value,
          switch_after: Q.value,
          workspace_path: j.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await d(Z)).status === "started") {
          Ce.value = 0, he.value = Date.now();
          const Ne = setInterval(async () => {
            if (he.value && Date.now() - he.value > Ql) {
              clearInterval(Ne), De.value = !1, A.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await u();
              if (Ce.value = 0, be.state === "idle" && De.value) {
                clearInterval(Ne), De.value = !1, A.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ge.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(Ne), De.value = !1;
                const _e = be.environment_name || Z.name;
                Q.value ? n("complete", _e, j.value) : (p.value = "landing", n("environment-created-no-switch", _e));
              } else be.state === "error" && (clearInterval(Ne), De.value = !1, A.value = be.error || "Environment creation failed");
            } catch (be) {
              Ce.value++, console.warn(`Polling failure ${Ce.value}/${io}:`, be), Ce.value >= io && (clearInterval(Ne), De.value = !1, A.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (Z) {
        De.value = !1, A.value = Z instanceof Error ? Z.message : "Unknown error";
      }
    }
    async function ve() {
      se.value = !0;
      try {
        L.value = await v();
      } catch (Z) {
        console.error("Failed to load ComfyUI releases:", Z);
      } finally {
        se.value = !1;
      }
    }
    function Se() {
      w.value && n("switch-environment", w.value, j.value);
    }
    function Ie() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ae(Z, q) {
      S.value = !1, q ? n("complete", Z, j.value) : (n("environment-created-no-switch", Z), p.value = "landing");
    }
    function fe() {
    }
    et(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (j.value = o.workspacePath), g.value === 2) {
        ve();
        const Z = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await ze(), clearTimeout(Z), E.value = !1;
      }
    });
    async function ze() {
      try {
        const Z = await u();
        if (console.log("[ComfyGit] Create progress check:", Z.state, Z), Z.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", Z.environment_name), p.value = "create", De.value = !0, ne.value = Z.environment_name || "my-new-env", ge.value = {
            progress: Z.progress ?? 0,
            message: Z.message,
            phase: Z.phase
          }, Te();
          return;
        }
      } catch (Z) {
        console.log("[ComfyGit] Create progress check failed:", Z);
      }
      try {
        const Z = await m();
        console.log("[ComfyGit] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", Z.environment_name), D.value = {
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          progress: Z.progress ?? 0,
          environmentName: Z.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (Z) {
        console.log("[ComfyGit] Import progress check failed:", Z);
      }
    }
    async function Te() {
      Ce.value = 0, he.value = Date.now();
      let Z = null;
      const q = async () => {
        if (he.value && Date.now() - he.value > Ql)
          return Z && clearInterval(Z), De.value = !1, A.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await u();
          if (Ce.value = 0, be.state === "idle" && De.value)
            return Z && clearInterval(Z), De.value = !1, A.value = "Environment creation was interrupted. Please try again.", !1;
          if (ge.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            Z && clearInterval(Z), De.value = !1;
            const _e = be.environment_name || ne.value;
            return n("complete", _e, j.value), !1;
          } else if (be.state === "error")
            return Z && clearInterval(Z), De.value = !1, A.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return Ce.value++, console.warn(`Polling failure ${Ce.value}/${io}:`, be), Ce.value >= io ? (Z && clearInterval(Z), De.value = !1, A.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (Z = setInterval(async () => {
        !await q() && Z && clearInterval(Z);
      }, 2e3));
    }
    return (Z, q) => (a(), r(W, null, [
      C(vt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[15] || (q[15] = (Ne) => Z.$emit("close"))
      }, {
        header: h(() => [
          q[20] || (q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", nI, [
            C(Ur),
            q[19] || (q[19] = t("span", { class: "header-divider" }, null, -1)),
            Me.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: q[0] || (q[0] = (Ne) => _.value = !0)
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
              onClick: q[1] || (q[1] = (Ne) => Z.$emit("close")),
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
          var Ne;
          return [
            g.value === 1 ? (a(), r("div", aI, [
              q[24] || (q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", lI, [
                q[21] || (q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = (be) => x.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, iI), [
                  [Ut, x.value]
                ]),
                F.value ? (a(), r("p", rI, f(F.value), 1)) : y("", !0)
              ]),
              t("div", cI, [
                t("label", dI, [
                  Ye(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = (be) => H.value = be)
                  }, null, 512), [
                    [en, H.value]
                  ]),
                  q[22] || (q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              H.value ? (a(), r("div", uI, [
                q[23] || (q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = (be) => V.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, fI), [
                  [Ut, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (a(), r("p", mI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), r("p", vI, " Did you mean: " + f(T.value), 1)) : y("", !0),
                I.value ? (a(), r("p", pI, f(I.value), 1)) : y("", !0),
                M.value !== null && !I.value ? (a(), r("p", gI, " Found " + f(M.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              de.value ? (a(), R(An, {
                key: 1,
                progress: ce.value.progress,
                message: ce.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", hI, [
              E.value ? (a(), r("div", yI, [...q[25] || (q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(W, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", wI, [
                  t("div", _I, [
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
                p.value === "landing" ? (a(), r("div", bI, [
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
                  (Ne = o.existingEnvironments) != null && Ne.length ? (a(), r(W, { key: 0 }, [
                    q[33] || (q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", kI, [
                      (a(!0), r(W, null, we(o.existingEnvironments, (be) => (a(), r("label", {
                        key: be,
                        class: Pe(["env-option", { selected: w.value === be }])
                      }, [
                        Ye(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": q[8] || (q[8] = (_e) => w.value = _e)
                        }, null, 8, $I), [
                          [Xt, w.value]
                        ]),
                        t("span", CI, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", xI, [
                  De.value ? (a(), r("div", NI, [
                    t("p", UI, [
                      q[41] || (q[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(ne.value), 1),
                      q[42] || (q[42] = b("... ", -1))
                    ]),
                    C(An, {
                      progress: ge.value.progress,
                      message: ge.value.message,
                      "current-phase": ge.value.phase,
                      "show-steps": !0,
                      steps: Ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[43] || (q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(W, { key: 0 }, [
                    q[40] || (q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", SI, [
                      q[35] || (q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ye(t("input", {
                        "onUpdate:modelValue": q[9] || (q[9] = (be) => ne.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ut, ne.value]
                      ])
                    ]),
                    t("div", II, [
                      q[36] || (q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = (be) => J.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(W, null, we(Ge(Er), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be), 9, EI))), 128))
                      ], 512), [
                        [hs, J.value]
                      ])
                    ]),
                    t("div", TI, [
                      q[37] || (q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = (be) => G.value = be),
                        class: "form-select",
                        disabled: se.value
                      }, [
                        (a(!0), r(W, null, we(L.value, (be) => (a(), r("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, RI))), 128))
                      ], 8, PI), [
                        [hs, G.value]
                      ])
                    ]),
                    t("div", MI, [
                      q[38] || (q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": q[12] || (q[12] = (be) => ee.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), r(W, null, we(Ge(sl), (be) => (a(), r("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, DI))), 128))
                      ], 512), [
                        [hs, ee.value]
                      ])
                    ]),
                    t("div", LI, [
                      t("label", OI, [
                        Ye(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[13] || (q[13] = (be) => Q.value = be)
                        }, null, 512), [
                          [en, Q.value]
                        ]),
                        q[39] || (q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    A.value ? (a(), r("div", AI, f(A.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", zI, [
                  C(Dr, {
                    "workspace-path": j.value,
                    "resume-import": P.value,
                    "initial-progress": D.value ?? void 0,
                    onImportComplete: ae,
                    onImportStarted: q[14] || (q[14] = (be) => S.value = !0),
                    onSourceCleared: fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", FI, [
            C(zr),
            t("div", BI, [
              g.value === 1 ? (a(), R(Oe, {
                key: 0,
                variant: "primary",
                disabled: !ue.value || de.value,
                onClick: le
              }, {
                default: h(() => [
                  b(f(de.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(W, { key: 1 }, [
                !De.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !j.value) ? (a(), R(Oe, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ie
                }, {
                  default: h(() => [...q[44] || (q[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Oe, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ae.value || De.value,
                  onClick: me
                }, {
                  default: h(() => [
                    b(f(De.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), R(Oe, {
                  key: 2,
                  variant: "primary",
                  onClick: Se
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
      _.value ? (a(), R(oI, {
        key: 0,
        "workspace-path": O.value,
        onClose: q[16] || (q[16] = (Ne) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), GI = /* @__PURE__ */ ye(WI, [["__scopeId", "data-v-9a9aadc0"]]), jI = { class: "comfygit-panel" }, HI = { class: "panel-header" }, KI = { class: "header-left" }, qI = {
  key: 0,
  class: "header-info"
}, YI = { class: "header-actions" }, JI = { class: "env-switcher" }, XI = {
  key: 0,
  class: "header-info"
}, QI = { class: "branch-name" }, ZI = { class: "panel-main" }, eE = { class: "sidebar" }, tE = { class: "sidebar-content" }, sE = { class: "sidebar-section" }, oE = { class: "sidebar-section" }, nE = { class: "sidebar-section" }, aE = {
  key: 0,
  class: "sidebar-badge"
}, lE = { class: "sidebar-footer" }, iE = { class: "content-area" }, rE = {
  key: 0,
  class: "error-message"
}, cE = {
  key: 1,
  class: "loading"
}, dE = { class: "dialog-content env-selector-dialog" }, uE = { class: "dialog-header" }, fE = { class: "dialog-body" }, mE = { class: "env-list" }, vE = { class: "env-info" }, pE = { class: "env-name-row" }, gE = { class: "env-indicator" }, hE = { class: "env-name" }, yE = {
  key: 0,
  class: "env-branch"
}, wE = {
  key: 1,
  class: "current-label"
}, _E = { class: "env-stats" }, bE = ["onClick"], kE = { class: "toast-container" }, $E = { class: "toast-message" }, CE = /* @__PURE__ */ pe({
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
    } = at(), D = Iv(), { liveInstanceCount: E } = Lr({ autoStart: !0 }), x = k(null), H = k([]), V = k([]), F = k([]), I = N(() => F.value.find((te) => te.is_current)), T = k(null), M = k(!1), ne = k(1), J = N(() => {
      var te;
      return ((te = T.value) == null ? void 0 : te.state) || "managed";
    }), G = k(!1), ee = k(null), Q = k(null), A = k(!1), j = k(null), L = k(null), se = k(null), de = k(!1), De = k(!1), ce = k(""), ge = k(null), Ee = k({ state: "idle", progress: 0, message: "" });
    let Re = null, xe = null;
    const Ce = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, he = o.initialView ? Ce[o.initialView] : null, ue = k((he == null ? void 0 : he.view) ?? "status"), Ae = k((he == null ? void 0 : he.section) ?? "this-env");
    function Me(te, K) {
      ue.value = te, Ae.value = K;
    }
    function O(te) {
      const Ue = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[te];
      Ue && Me(Ue.view, Ue.section);
    }
    function z() {
      Me("branches", "this-env");
    }
    function oe() {
      n("close"), setTimeout(() => {
        var K;
        const te = document.querySelectorAll("button.comfyui-button");
        for (const Ue of te)
          if (((K = Ue.textContent) == null ? void 0 : K.trim()) === "Manager") {
            Ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const le = k(null), me = k(!1), ve = k(!1), Se = k([]);
    let Ie = 0;
    function ae(te, K = "info", Ue = 3e3) {
      const He = ++Ie;
      return Se.value.push({ id: He, message: te, type: K }), Ue > 0 && setTimeout(() => {
        Se.value = Se.value.filter((ot) => ot.id !== He);
      }, Ue), He;
    }
    function fe(te) {
      Se.value = Se.value.filter((K) => K.id !== te);
    }
    function ze(te, K) {
      ae(te, K);
    }
    const Te = N(() => {
      if (!x.value) return "neutral";
      const te = x.value.workflows, K = te.new.length > 0 || te.modified.length > 0 || te.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? K ? "warning" : "success" : "error";
    });
    N(() => x.value ? Te.value === "success" ? "All synced" : Te.value === "warning" ? "Uncommitted changes" : Te.value === "error" ? "Not synced" : "" : "");
    async function Z() {
      G.value = !0, ee.value = null;
      try {
        const [te, K, Ue, He] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        x.value = te, H.value = K.commits, V.value = Ue.branches, F.value = He, n("statusUpdate", te), j.value && await j.value.loadWorkflows(!0);
      } catch (te) {
        ee.value = te instanceof Error ? te.message : "Failed to load status", x.value = null, H.value = [], V.value = [];
      } finally {
        G.value = !1;
      }
    }
    function q(te) {
      Q.value = te;
    }
    async function Ne(te) {
      var Ue;
      Q.value = null;
      const K = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      le.value = {
        title: K ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: K ? "You have uncommitted changes that will be lost." : `Checkout commit ${te.short_hash || ((Ue = te.hash) == null ? void 0 : Ue.slice(0, 7))}?`,
        details: K ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: K,
        onConfirm: async () => {
          var ft;
          le.value = null, re();
          const He = ae(`Checking out ${te.short_hash || ((ft = te.hash) == null ? void 0 : ft.slice(0, 7))}...`, "info", 0), ot = await d(te.hash, K);
          fe(He), ot.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function be(te) {
      const K = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      le.value = {
        title: K ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: K ? "You have uncommitted changes." : `Switch to branch "${te}"?`,
        details: K ? is() : void 0,
        warning: K ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: K ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          le.value = null, re();
          const Ue = ae(`Switching to ${te}...`, "info", 0), He = await m(te, K);
          fe(Ue), He.status === "success" ? ae("Restarting ComfyUI...", "success") : ae(He.message || "Branch switch failed", "error");
        }
      };
    }
    async function _e(te) {
      const K = ae(`Creating branch ${te}...`, "info", 0), Ue = await u(te);
      fe(K), Ue.status === "success" ? (ae(`Branch "${te}" created`, "success"), await Z()) : ae(Ue.message || "Failed to create branch", "error");
    }
    async function B(te, K = !1) {
      const Ue = async (He) => {
        var ft;
        const ot = ae(`Deleting branch ${te}...`, "info", 0);
        try {
          const Mt = await v(te, He);
          fe(ot), Mt.status === "success" ? (ae(`Branch "${te}" deleted`, "success"), await Z()) : (ft = Mt.message) != null && ft.includes("not fully merged") ? le.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${te}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              le.value = null, await Ue(!0);
            }
          } : ae(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          fe(ot);
          const rs = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? le.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${te}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              le.value = null, await Ue(!0);
            }
          } : ae(rs, "error");
        }
      };
      le.value = {
        title: "Delete Branch",
        message: `Delete branch "${te}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          le.value = null, await Ue(K);
        }
      };
    }
    async function U(te) {
      Q.value = null;
      const K = prompt("Enter branch name:");
      if (K) {
        const Ue = ae(`Creating branch ${K}...`, "info", 0), He = await u(K, te.hash);
        fe(Ue), He.status === "success" ? (ae(`Branch "${K}" created from ${te.short_hash}`, "success"), await Z()) : ae(He.message || "Failed to create branch", "error");
      }
    }
    function re() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function We() {
      le.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var te;
          le.value = null, re(), ae("Restarting environment...", "info");
          try {
            (te = window.app) != null && te.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
      le.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var te;
          le.value = null, ae("Stopping environment...", "info");
          try {
            (te = window.app) != null && te.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function mt(te, K) {
      A.value = !1, ce.value = te, ge.value = K || null, de.value = !0;
    }
    async function lt() {
      de.value = !1, De.value = !0, re(), Ee.value = {
        progress: 10,
        state: dt(10),
        message: Rt(10)
      };
      try {
        await w(ce.value, ge.value || void 0), zt(), Ws();
      } catch (te) {
        Kt(), De.value = !1, ae(`Failed to initiate switch: ${te instanceof Error ? te.message : "Unknown error"}`, "error"), Ee.value = { state: "idle", progress: 0, message: "" }, ge.value = null;
      }
    }
    function dt(te) {
      return te >= 100 ? "complete" : te >= 80 ? "validating" : te >= 60 ? "starting" : te >= 30 ? "syncing" : "preparing";
    }
    function Rt(te) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[dt(te)] || "";
    }
    function zt() {
      if (xe) return;
      let te = 10;
      const K = 60, Ue = 5e3, He = 100, ot = (K - te) / (Ue / He);
      xe = window.setInterval(() => {
        if (te += ot, te >= K && (te = K, Kt()), Ee.value.progress < K) {
          const ft = Math.floor(te);
          Ee.value = {
            progress: ft,
            state: dt(ft),
            message: Rt(ft)
          };
        }
      }, He);
    }
    function Kt() {
      xe && (clearInterval(xe), xe = null);
    }
    function Ws() {
      Re || (Re = window.setInterval(async () => {
        try {
          let te = await D.getStatus();
          if ((!te || te.state === "idle") && (te = await p()), !te)
            return;
          const K = te.progress || 0;
          K >= 60 && Kt();
          const Ue = Math.max(K, Ee.value.progress), He = te.state && te.state !== "idle" && te.state !== "unknown", ot = He ? te.state : dt(Ue), ft = He && te.message || Rt(Ue);
          Ee.value = {
            state: ot,
            progress: Ue,
            message: ft
          }, te.state === "complete" ? (Kt(), Ms(), De.value = !1, ae(`✓ Switched to ${ce.value}`, "success"), await Z(), ce.value = "") : te.state === "rolled_back" ? (Kt(), Ms(), De.value = !1, ae("Switch failed, restored previous environment", "warning"), ce.value = "") : te.state === "critical_failure" && (Kt(), Ms(), De.value = !1, ae(`Critical error during switch: ${te.message}`, "error"), ce.value = "");
        } catch (te) {
          console.error("Failed to poll switch progress:", te);
        }
      }, 1e3));
    }
    function Ms() {
      Kt(), Re && (clearInterval(Re), Re = null);
    }
    function no() {
      var te;
      de.value = !1, ce.value = "", (te = T.value) != null && te.state && T.value.state !== "managed" && (ne.value = T.value.state === "no_workspace" ? 1 : 2, M.value = !0);
    }
    async function Co(te) {
      me.value = !1, await Z(), ae(te.message, te.success ? "success" : "error");
    }
    async function xo() {
      ve.value = !1;
      const te = ae("Syncing environment...", "info", 0);
      try {
        const K = await S("skip", !0);
        if (fe(te), K.status === "success") {
          const Ue = [];
          K.nodes_installed.length && Ue.push(`${K.nodes_installed.length} installed`), K.nodes_removed.length && Ue.push(`${K.nodes_removed.length} removed`);
          const He = Ue.length ? `: ${Ue.join(", ")}` : "";
          ae(`✓ Environment synced${He}`, "success"), await Z();
        } else {
          const Ue = K.errors.length ? K.errors.join("; ") : K.message;
          ae(`Sync failed: ${Ue}`, "error");
        }
      } catch (K) {
        fe(te), ae(`Sync error: ${K instanceof Error ? K.message : "Unknown error"}`, "error");
      }
    }
    async function So(te) {
      var K;
      try {
        const Ue = await $(te);
        Ue.failed.length === 0 ? ae(`✓ Repaired ${Ue.success} workflow${Ue.success === 1 ? "" : "s"}`, "success") : ae(`Repaired ${Ue.success}, failed: ${Ue.failed.length}`, "warning"), await Z();
      } catch (Ue) {
        ae(`Repair failed: ${Ue instanceof Error ? Ue.message : "Unknown error"}`, "error");
      } finally {
        (K = se.value) == null || K.resetRepairingState();
      }
    }
    async function ke() {
      var K, Ue;
      const te = ae("Repairing environment...", "info", 0);
      try {
        const He = await S("skip", !0);
        if (fe(te), He.status === "success") {
          const ot = [];
          He.nodes_installed.length && ot.push(`${He.nodes_installed.length} installed`), He.nodes_removed.length && ot.push(`${He.nodes_removed.length} removed`);
          const ft = ot.length ? `: ${ot.join(", ")}` : "";
          ae(`✓ Environment repaired${ft}`, "success"), (K = se.value) == null || K.closeDetailModal(), await Z();
        } else {
          const ot = He.errors.length ? He.errors.join(", ") : He.message || "Unknown error";
          ae(`Repair failed: ${ot}`, "error");
        }
      } catch (He) {
        fe(te), ae(`Repair error: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
      } finally {
        (Ue = se.value) == null || Ue.resetRepairingEnvironmentState();
      }
    }
    async function X(te, K) {
      ae(`Environment '${te}' created`, "success"), await Z(), L.value && await L.value.loadEnvironments(), K && await mt(te);
    }
    async function Ke(te) {
      var K;
      if (((K = I.value) == null ? void 0 : K.name) === te) {
        ae("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      le.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${te}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          le.value = null;
          try {
            const Ue = await _(te);
            Ue.status === "success" ? (ae(`Environment "${te}" deleted`, "success"), await Z(), L.value && await L.value.loadEnvironments()) : ae(Ue.message || "Failed to delete environment", "error");
          } catch (Ue) {
            ae(`Error deleting environment: ${Ue instanceof Error ? Ue.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function gt(te, K) {
      M.value = !1;
      try {
        T.value = await P();
      } catch {
      }
      await mt(te, K);
    }
    function qt() {
      M.value = !1, n("close");
    }
    async function ys(te, K) {
      await mt(te, K);
    }
    async function ws(te) {
      await Z(), await mt(te);
    }
    async function ls(te) {
      T.value = await P(), console.log(`Environment '${te}' created. Available for switching.`);
    }
    function Fe() {
      Me("environments", "all-envs"), setTimeout(() => {
        var te;
        (te = L.value) == null || te.openCreateModal();
      }, 100);
    }
    function is() {
      if (!x.value) return [];
      const te = [], K = x.value.workflows;
      return K.new.length && te.push(`${K.new.length} new workflow(s)`), K.modified.length && te.push(`${K.modified.length} modified workflow(s)`), K.deleted.length && te.push(`${K.deleted.length} deleted workflow(s)`), te;
    }
    return et(async () => {
      try {
        if (T.value = await P(), T.value.state === "no_workspace") {
          M.value = !0, ne.value = 1;
          return;
        }
        if (T.value.state === "empty_workspace") {
          M.value = !0, ne.value = 2;
          return;
        }
        if (T.value.state === "unmanaged") {
          M.value = !0, ne.value = 2;
          return;
        }
      } catch (te) {
        console.warn("Setup status check failed, proceeding normally:", te);
      }
      await Z();
    }), (te, K) => {
      var Ue, He, ot, ft, Mt, rs, Gs, js, ln, Y, $e, Be;
      return a(), r("div", jI, [
        t("div", HI, [
          t("div", KI, [
            K[31] || (K[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (a(), r("div", qI)) : y("", !0)
          ]),
          t("div", YI, [
            C(Ur),
            K[34] || (K[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Pe(["icon-btn", { spinning: G.value }]),
              onClick: Z,
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
              onClick: K[0] || (K[0] = (Le) => n("close")),
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
        t("div", JI, [
          t("div", { class: "env-switcher-header" }, [
            K[35] || (K[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: We
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
            onClick: K[1] || (K[1] = (Le) => Me("environments", "all-envs"))
          }, [
            x.value ? (a(), r("div", XI, [
              t("span", null, f(((Ue = I.value) == null ? void 0 : Ue.name) || ((He = x.value) == null ? void 0 : He.environment) || "Loading..."), 1),
              t("span", QI, "(" + f(x.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            K[36] || (K[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", ZI, [
          t("div", eE, [
            t("div", tE, [
              t("div", sE, [
                K[37] || (K[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "status" && Ae.value === "this-env" }]),
                  onClick: K[2] || (K[2] = (Le) => Me("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "workflows" }]),
                  onClick: K[3] || (K[3] = (Le) => Me("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "models-env" }]),
                  onClick: K[4] || (K[4] = (Le) => Me("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "branches" }]),
                  onClick: K[5] || (K[5] = (Le) => Me("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "history" }]),
                  onClick: K[6] || (K[6] = (Le) => Me("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "nodes" }]),
                  onClick: K[7] || (K[7] = (Le) => Me("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "debug-env" }]),
                  onClick: K[8] || (K[8] = (Le) => Me("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              K[41] || (K[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", oE, [
                K[38] || (K[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "environments" }]),
                  onClick: K[9] || (K[9] = (Le) => Me("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "model-index" }]),
                  onClick: K[10] || (K[10] = (Le) => Me("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "settings" }]),
                  onClick: K[11] || (K[11] = (Le) => Me("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "debug-workspace" }]),
                  onClick: K[12] || (K[12] = (Le) => Me("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              K[42] || (K[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", nE, [
                K[40] || (K[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "deploy" }]),
                  onClick: K[13] || (K[13] = (Le) => Me("deploy", "sharing"))
                }, [
                  K[39] || (K[39] = b(" DEPLOY ", -1)),
                  Ge(E) > 0 ? (a(), r("span", aE, f(Ge(E)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "export" }]),
                  onClick: K[14] || (K[14] = (Le) => Me("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "import" }]),
                  onClick: K[15] || (K[15] = (Le) => Me("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ue.value === "remotes" }]),
                  onClick: K[16] || (K[16] = (Le) => Me("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", lE, [
              C(zr)
            ])
          ]),
          t("div", iE, [
            ee.value ? (a(), r("div", rE, f(ee.value), 1)) : !x.value && ue.value === "status" ? (a(), r("div", cE, " Loading status... ")) : (a(), r(W, { key: 2 }, [
              ue.value === "status" ? (a(), R(Zm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: se,
                status: x.value,
                "setup-state": J.value,
                onSwitchBranch: z,
                onCommitChanges: K[17] || (K[17] = (Le) => me.value = !0),
                onSyncEnvironment: K[18] || (K[18] = (Le) => ve.value = !0),
                onViewWorkflows: K[19] || (K[19] = (Le) => Me("workflows", "this-env")),
                onViewHistory: K[20] || (K[20] = (Le) => Me("history", "this-env")),
                onViewDebug: K[21] || (K[21] = (Le) => Me("debug-env", "this-env")),
                onViewNodes: K[22] || (K[22] = (Le) => Me("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: ke,
                onStartSetup: K[23] || (K[23] = (Le) => M.value = !0),
                onViewEnvironments: K[24] || (K[24] = (Le) => Me("environments", "all-envs")),
                onCreateEnvironment: Fe
              }, null, 8, ["status", "setup-state"])) : ue.value === "workflows" ? (a(), R(P0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: j,
                onRefresh: Z
              }, null, 512)) : ue.value === "models-env" ? (a(), R(fw, {
                key: 2,
                onNavigate: O
              })) : ue.value === "branches" ? (a(), R(vv, {
                key: 3,
                branches: V.value,
                current: ((ot = x.value) == null ? void 0 : ot.branch) || null,
                onSwitch: be,
                onCreate: _e,
                onDelete: B
              }, null, 8, ["branches", "current"])) : ue.value === "history" ? (a(), R(xv, {
                key: 4,
                commits: H.value,
                onSelect: q,
                onCheckout: Ne
              }, null, 8, ["commits"])) : ue.value === "nodes" ? (a(), R(r_, {
                key: 5,
                "version-mismatches": ((Mt = (ft = x.value) == null ? void 0 : ft.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: oe,
                onRepairEnvironment: ke,
                onToast: ze
              }, null, 8, ["version-mismatches"])) : ue.value === "debug-env" ? (a(), R(k2, { key: 6 })) : ue.value === "environments" ? (a(), R(x$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: mt,
                onCreated: X,
                onDelete: Ke
              }, null, 512)) : ue.value === "model-index" ? (a(), R(Mw, {
                key: 8,
                onRefresh: Z
              })) : ue.value === "settings" ? (a(), R(m2, { key: 9 })) : ue.value === "debug-workspace" ? (a(), R(b2, { key: 10 })) : ue.value === "deploy" ? (a(), R(s4, {
                key: 11,
                onToast: ze,
                onNavigate: O
              })) : ue.value === "export" ? (a(), R(tC, { key: 12 })) : ue.value === "import" ? (a(), R(qx, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : ue.value === "remotes" ? (a(), R(Kk, {
                key: 14,
                onToast: ze
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Q.value ? (a(), R(_4, {
          key: 0,
          commit: Q.value,
          onClose: K[25] || (K[25] = (Le) => Q.value = null),
          onCheckout: Ne,
          onCreateBranch: U
        }, null, 8, ["commit"])) : y("", !0),
        le.value ? (a(), R(tl, {
          key: 1,
          title: le.value.title,
          message: le.value.message,
          details: le.value.details,
          warning: le.value.warning,
          confirmLabel: le.value.confirmLabel,
          cancelLabel: le.value.cancelLabel,
          secondaryLabel: le.value.secondaryLabel,
          secondaryAction: le.value.secondaryAction,
          destructive: le.value.destructive,
          onConfirm: le.value.onConfirm,
          onCancel: K[26] || (K[26] = (Le) => le.value = null),
          onSecondary: le.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(_6, {
          show: de.value,
          "from-environment": ((rs = I.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": ce.value,
          onConfirm: lt,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        me.value && x.value ? (a(), R(Nr, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: K[27] || (K[27] = (Le) => me.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        ve.value && x.value ? (a(), R(F6, {
          key: 3,
          show: ve.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: K[28] || (K[28] = (Le) => ve.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(R6, {
          show: De.value,
          state: Ee.value.state,
          progress: Ee.value.progress,
          message: Ee.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        A.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: K[30] || (K[30] = rt((Le) => A.value = !1, ["self"]))
        }, [
          t("div", dE, [
            t("div", uE, [
              K[44] || (K[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: K[29] || (K[29] = (Le) => A.value = !1)
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
            t("div", fE, [
              K[45] || (K[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", mE, [
                (a(!0), r(W, null, we(F.value, (Le) => (a(), r("div", {
                  key: Le.name,
                  class: Pe(["env-item", { current: Le.is_current }])
                }, [
                  t("div", vE, [
                    t("div", pE, [
                      t("span", gE, f(Le.is_current ? "●" : "○"), 1),
                      t("span", hE, f(Le.name), 1),
                      Le.current_branch ? (a(), r("span", yE, "(" + f(Le.current_branch) + ")", 1)) : y("", !0),
                      Le.is_current ? (a(), r("span", wE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", _E, f(Le.workflow_count) + " workflows • " + f(Le.node_count) + " nodes ", 1)
                  ]),
                  Le.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Dt) => mt(Le.name)
                  }, " SWITCH ", 8, bE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        M.value ? (a(), R(GI, {
          key: 5,
          "default-path": ((Gs = T.value) == null ? void 0 : Gs.default_path) || "~/comfygit",
          "detected-models-dir": ((js = T.value) == null ? void 0 : js.detected_models_dir) || null,
          "initial-step": ne.value,
          "existing-environments": ((ln = T.value) == null ? void 0 : ln.environments) || [],
          "cli-installed": ((Y = T.value) == null ? void 0 : Y.cli_installed) ?? !0,
          "setup-state": (($e = T.value) == null ? void 0 : $e.state) || "no_workspace",
          "workspace-path": ((Be = T.value) == null ? void 0 : Be.workspace_path) || null,
          onComplete: gt,
          onClose: qt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", kE, [
          C(cu, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(W, null, we(Se.value, (Le) => (a(), r("div", {
                key: Le.id,
                class: Pe(["toast", Le.type])
              }, [
                t("span", $E, f(Le.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), xE = /* @__PURE__ */ ye(CE, [["__scopeId", "data-v-037b3ee3"]]), SE = { class: "item-header" }, IE = { class: "item-info" }, EE = { class: "filename" }, TE = { class: "metadata" }, PE = { class: "size" }, RE = {
  key: 0,
  class: "type"
}, ME = { class: "item-actions" }, DE = {
  key: 0,
  class: "progress-section"
}, LE = { class: "progress-bar" }, OE = { class: "progress-stats" }, AE = { class: "downloaded" }, NE = { class: "speed" }, UE = {
  key: 0,
  class: "eta"
}, zE = {
  key: 1,
  class: "status-msg paused"
}, FE = {
  key: 2,
  class: "status-msg queued"
}, BE = {
  key: 3,
  class: "status-msg completed"
}, VE = {
  key: 4,
  class: "status-msg failed"
}, WE = {
  key: 0,
  class: "retries"
}, GE = /* @__PURE__ */ pe({
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
      t("div", SE, [
        t("div", IE, [
          t("div", EE, f(e.item.filename), 1),
          t("div", TE, [
            t("span", PE, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", RE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", ME, [
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
      e.item.status === "downloading" ? (a(), r("div", DE, [
        t("div", LE, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", OE, [
          t("span", AE, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", NE, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", UE, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", zE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", FE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", BE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", VE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", WE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ ye(GE, [["__scopeId", "data-v-2110df65"]]), jE = { class: "queue-title" }, HE = { class: "count" }, KE = { class: "queue-actions" }, qE = { class: "action-label" }, YE = {
  key: 0,
  class: "overall-progress"
}, JE = { class: "progress-bar" }, XE = {
  key: 0,
  class: "current-mini"
}, QE = { class: "filename" }, ZE = { class: "speed" }, eT = {
  key: 1,
  class: "queue-content"
}, tT = {
  key: 0,
  class: "section"
}, sT = {
  key: 1,
  class: "section"
}, oT = { class: "section-header" }, nT = { class: "section-label paused" }, aT = { class: "items-list" }, lT = {
  key: 2,
  class: "section"
}, iT = { class: "section-header" }, rT = { class: "section-label" }, cT = { class: "items-list" }, dT = {
  key: 3,
  class: "section"
}, uT = { class: "section-header" }, fT = { class: "section-label" }, mT = { class: "items-list" }, vT = {
  key: 4,
  class: "section"
}, pT = { class: "section-header" }, gT = { class: "section-label failed" }, hT = { class: "items-list" }, yT = /* @__PURE__ */ pe({
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
      (x, H) => {
        $ && (clearTimeout($), $ = null);
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, F = H && (H.active > 0 || H.paused > 0);
        V && F && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = N(() => {
      var V;
      if (s.items.length === 0) return 0;
      const x = l.value.length, H = ((V = o.value) == null ? void 0 : V.progress) || 0;
      return Math.round((x + H / 100) / s.items.length * 100);
    });
    function D(x) {
      m(x);
    }
    function E(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, H) => (a(), R(yt, { to: "body" }, [
      Ge(d) ? (a(), r("div", {
        key: 0,
        class: Pe(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (V) => S.value = !S.value)
        }, [
          t("div", jE, [
            H[4] || (H[4] = t("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", HE, "(" + f(Ge(u)) + "/" + f(Ge(s).items.length) + ")", 1)
          ]),
          t("div", KE, [
            t("span", qE, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), r("div", eT, [
          Ge(o) ? (a(), r("div", tT, [
            H[6] || (H[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(Mo, {
              item: Ge(o),
              onCancel: H[1] || (H[1] = (V) => D(Ge(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ge(c).length > 0 ? (a(), r("div", sT, [
            t("div", oT, [
              t("span", nT, "Paused (" + f(Ge(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...V) => Ge(w) && Ge(w)(...V))
              }, "Resume All")
            ]),
            t("div", aT, [
              (a(!0), r(W, null, we(Ge(c), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onResume: (F) => Ge(g)(V.id),
                onRemove: (F) => Ge(p)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ge(n).length > 0 ? (a(), r("div", lT, [
            t("div", iT, [
              t("span", rT, "Queued (" + f(Ge(n).length) + ")", 1)
            ]),
            t("div", cT, [
              (a(!0), r(W, null, we(Ge(n), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onCancel: (F) => D(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ge(l).length > 0 ? (a(), r("div", dT, [
            t("div", uT, [
              t("span", fT, "Completed (" + f(Ge(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...V) => Ge(_) && Ge(_)(...V))
              }, "Clear")
            ]),
            t("div", mT, [
              (a(!0), r(W, null, we(Ge(l).slice(0, 3), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onRemove: (F) => Ge(p)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ge(i).length > 0 ? (a(), r("div", vT, [
            t("div", pT, [
              t("span", gT, "Failed (" + f(Ge(i).length) + ")", 1)
            ]),
            t("div", hT, [
              (a(!0), r(W, null, we(Ge(i), (V) => (a(), R(Mo, {
                key: V.id,
                item: V,
                onRetry: (F) => Ge(v)(V.id),
                onRemove: (F) => Ge(p)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", YE, [
          t("div", JE, [
            t("div", {
              class: "progress-fill",
              style: Ht({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Ge(o) ? (a(), r("div", XE, [
            t("span", QE, f(Ge(o).filename), 1),
            t("span", ZE, f(E(Ge(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), wT = /* @__PURE__ */ ye(yT, [["__scopeId", "data-v-60751cfa"]]), _T = {
  key: 0,
  class: "loading-state"
}, bT = {
  key: 1,
  class: "analysis-results"
}, kT = {
  key: 0,
  class: "section"
}, $T = { class: "section-header" }, CT = { class: "section-title" }, xT = { class: "item-list" }, ST = { class: "package-info" }, IT = { class: "package-name" }, ET = { class: "node-count" }, TT = {
  key: 1,
  class: "installing-badge"
}, PT = {
  key: 2,
  class: "queued-badge"
}, RT = ["title"], MT = {
  key: 4,
  class: "installed-badge"
}, DT = {
  key: 0,
  class: "overflow-note"
}, LT = {
  key: 1,
  class: "section"
}, OT = { class: "section-header" }, AT = { class: "section-title" }, NT = { class: "item-list" }, UT = { class: "node-type" }, zT = {
  key: 0,
  class: "overflow-note"
}, FT = {
  key: 2,
  class: "section"
}, BT = { class: "section-header" }, VT = { class: "section-title" }, WT = { class: "item-list" }, GT = { class: "model-info" }, jT = { class: "model-name" }, HT = {
  key: 1,
  class: "queued-badge"
}, KT = {
  key: 1,
  class: "no-url"
}, qT = {
  key: 0,
  class: "overflow-note"
}, YT = { class: "dont-show-again" }, JT = /* @__PURE__ */ pe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), d = k(/* @__PURE__ */ new Map()), u = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(/* @__PURE__ */ new Map()), { addToQueue: p } = ko(), { queueNodeInstall: _ } = at(), S = N(() => $.value.length > 0 || D.value.length > 0 || E.value.length > 0), $ = N(() => {
      var Ee, Re;
      if (!((Ee = n.value) != null && Ee.nodes)) return [];
      const ce = /* @__PURE__ */ new Map(), ge = (n.value.nodes.resolved || []).filter((xe) => {
        var Ce;
        return !xe.is_installed && ((Ce = xe.package) == null ? void 0 : Ce.package_id);
      });
      for (const xe of ge) {
        const Ce = xe.package.package_id;
        ce.has(Ce) || ce.set(Ce, {
          package_id: Ce,
          title: xe.package.title || Ce,
          node_count: 0,
          node_types: [],
          repository: xe.package.repository || null,
          latest_version: xe.package.latest_version || null
        });
        const he = ce.get(Ce);
        he.node_count++, he.node_types.push(((Re = xe.reference) == null ? void 0 : Re.node_type) || xe.node_type);
      }
      return Array.from(ce.values());
    }), P = N(() => $.value.reduce((ce, ge) => ce + ge.node_count, 0)), D = N(() => {
      var ce;
      return (ce = n.value) != null && ce.nodes ? (n.value.nodes.unresolved || []).map((ge) => {
        var Ee;
        return {
          node_type: ((Ee = ge.reference) == null ? void 0 : Ee.node_type) || ge.node_type
        };
      }) : [];
    }), E = N(() => {
      var Ee;
      if (!((Ee = n.value) != null && Ee.models)) return [];
      const ce = (n.value.models.resolved || []).filter(
        (Re) => Re.match_type === "download_intent" || Re.match_type === "property_download_intent" || Re.match_type === "not_found"
      ).map((Re) => {
        var xe, Ce, he, ue;
        return {
          filename: ((Ce = (xe = Re.reference) == null ? void 0 : xe.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((he = Re.reference) == null ? void 0 : he.widget_value) || Re.widget_value,
          widget_value: ((ue = Re.reference) == null ? void 0 : ue.widget_value) || Re.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Re.download_source || null,
          targetPath: Re.target_path || null,
          canDownload: !!(Re.download_source && Re.target_path)
        };
      }), ge = (n.value.models.unresolved || []).map((Re) => {
        var xe, Ce, he, ue;
        return {
          filename: ((Ce = (xe = Re.reference) == null ? void 0 : xe.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((he = Re.reference) == null ? void 0 : he.widget_value) || Re.widget_value,
          widget_value: ((ue = Re.reference) == null ? void 0 : ue.widget_value) || Re.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...ce, ...ge];
    }), x = N(() => E.value.filter((ce) => ce.canDownload)), H = N(() => $.value.length > 0 && $.value.every(
      (ce) => i.value.has(ce.package_id) || c.value.has(ce.package_id) || d.value.has(ce.package_id)
    )), V = N(() => x.value.length > 0 && x.value.every((ce) => u.value.has(ce.url))), F = N(() => $.value.length > 0 || x.value.length > 0), I = N(() => {
      const ce = $.value.length === 0 || H.value, ge = x.value.length === 0 || V.value;
      return ce && ge;
    });
    async function T(ce) {
      const ge = ce.package_id;
      if (!(i.value.has(ge) || c.value.has(ge) || d.value.has(ge))) {
        v.value = ge;
        try {
          const { ui_id: Ee } = await _({
            id: ge,
            version: ce.latest_version || "latest",
            selected_version: ce.latest_version || "latest",
            repository: ce.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          w.value.set(Ee, ge), c.value.add(ge);
        } catch (Ee) {
          console.error("[ComfyGit] Failed to queue package install:", Ee), d.value.set(ge, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function M(ce) {
      !ce.url || !ce.targetPath || u.value.has(ce.url) || (p([{
        workflow: "unsaved",
        filename: ce.filename,
        url: ce.url,
        targetPath: ce.targetPath
      }]), u.value.add(ce.url));
    }
    async function ne() {
      for (const ce of $.value)
        !i.value.has(ce.package_id) && !c.value.has(ce.package_id) && !d.value.has(ce.package_id) && await T(ce);
    }
    function J() {
      const ce = x.value.filter(
        (ge) => !u.value.has(ge.url)
      );
      if (ce.length !== 0) {
        p(ce.map((ge) => ({
          workflow: "unsaved",
          filename: ge.filename,
          url: ge.url,
          targetPath: ge.targetPath
        })));
        for (const ge of ce)
          u.value.add(ge.url);
      }
    }
    function G() {
      ne(), J();
    }
    function ee() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Q(ce) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      try {
        const ge = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ce })
        });
        if (ge.ok) {
          const Ee = await ge.json();
          if (Ee.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${Ee.filename}, skipping popup`);
            return;
          }
        }
      } catch (ge) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", ge);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), d.value = /* @__PURE__ */ new Map(), u.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const ge = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ce, name: "unsaved" })
        });
        if (!ge.ok) {
          const Ee = await ge.json();
          throw new Error(Ee.error || "Failed to analyze workflow");
        }
        n.value = await ge.json(), S.value && (l.value = !0);
      } catch (ge) {
        console.error("[ComfyGit] Failed to analyze workflow:", ge);
      } finally {
        s.value = !1;
      }
    }
    function A() {
      l.value = !1, n.value = null;
    }
    function j(ce) {
      const { workflow: ge } = ce.detail;
      ge && Q(ge);
    }
    function L(ce) {
      var Re;
      const ge = (Re = ce.detail) == null ? void 0 : Re.ui_id, Ee = w.value.get(ge);
      Ee && (v.value = Ee, console.log("[ComfyGit] Installing package:", Ee));
    }
    function se(ce) {
      var xe, Ce, he, ue, Ae, Me, O;
      const ge = (xe = ce.detail) == null ? void 0 : xe.ui_id, Ee = w.value.get(ge), Re = (he = (Ce = ce.detail) == null ? void 0 : Ce.status) == null ? void 0 : he.status_str;
      if (Ee) {
        if (w.value.delete(ge), c.value.delete(Ee), v.value === Ee && (v.value = null), Re === "success")
          i.value.add(Ee), g.value++, console.log("[ComfyGit] Package installed successfully:", Ee);
        else {
          const z = ((Me = (Ae = (ue = ce.detail) == null ? void 0 : ue.status) == null ? void 0 : Ae.messages) == null ? void 0 : Me[0]) || ((O = ce.detail) == null ? void 0 : O.result) || "Unknown error";
          d.value.set(Ee, z), console.error("[ComfyGit] Package install failed:", Ee, z);
        }
        w.value.size === 0 && g.value > 0 && window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        }));
      }
    }
    function de() {
      var ce;
      return (ce = window.app) == null ? void 0 : ce.api;
    }
    function De(ce) {
      const { change_type: ge } = ce.detail;
      (ge === "created" || ge === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", j);
      const ce = de();
      ce && (ce.addEventListener("cm-task-started", L), ce.addEventListener("cm-task-completed", se), ce.addEventListener("comfygit:workflow-changed", De));
    }), oo(() => {
      window.removeEventListener("comfygit:workflow-loaded", j);
      const ce = de();
      ce && (ce.removeEventListener("cm-task-started", L), ce.removeEventListener("cm-task-completed", se), ce.removeEventListener("comfygit:workflow-changed", De));
    }), (ce, ge) => l.value ? (a(), R(vt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: A
    }, {
      body: h(() => [
        s.value ? (a(), r("div", _T, [...ge[1] || (ge[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && S.value ? (a(), r("div", bT, [
          $.value.length > 0 ? (a(), r("div", kT, [
            t("div", $T, [
              t("span", CT, "Missing Custom Nodes (" + f(P.value) + ")", 1),
              $.value.length > 1 ? (a(), R(Oe, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: H.value,
                onClick: ne
              }, {
                default: h(() => [
                  b(f(H.value ? "All Queued" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", xT, [
              (a(!0), r(W, null, we($.value.slice(0, 5), (Ee) => (a(), r("div", {
                key: Ee.package_id,
                class: "package-item"
              }, [
                t("div", ST, [
                  t("span", IT, f(Ee.title), 1),
                  t("span", ET, "(" + f(Ee.node_count) + " " + f(Ee.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                !i.value.has(Ee.package_id) && !c.value.has(Ee.package_id) && !d.value.has(Ee.package_id) ? (a(), R(Oe, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: v.value === Ee.package_id,
                  onClick: (Re) => T(Ee)
                }, {
                  default: h(() => [
                    b(f(v.value === Ee.package_id ? "Queueing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : v.value === Ee.package_id ? (a(), r("span", TT, "Installing...")) : c.value.has(Ee.package_id) ? (a(), r("span", PT, "Queued")) : d.value.has(Ee.package_id) ? (a(), r("span", {
                  key: 3,
                  class: "failed-badge",
                  title: d.value.get(Ee.package_id)
                }, "Failed ⚠", 8, RT)) : (a(), r("span", MT, "Installed"))
              ]))), 128)),
              $.value.length > 5 ? (a(), r("div", DT, " ...and " + f($.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          D.value.length > 0 ? (a(), r("div", LT, [
            t("div", OT, [
              t("span", AT, "Unknown Nodes (" + f(D.value.length) + ")", 1)
            ]),
            t("div", NT, [
              (a(!0), r(W, null, we(D.value.slice(0, 5), (Ee) => (a(), r("div", {
                key: Ee.node_type,
                class: "item"
              }, [
                t("code", UT, f(Ee.node_type), 1),
                ge[2] || (ge[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              D.value.length > 5 ? (a(), r("div", zT, " ...and " + f(D.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          E.value.length > 0 ? (a(), r("div", FT, [
            t("div", BT, [
              t("span", VT, "Missing Models (" + f(E.value.length) + ")", 1),
              x.value.length > 1 ? (a(), R(Oe, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: V.value,
                onClick: J
              }, {
                default: h(() => [
                  b(f(V.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", WT, [
              (a(!0), r(W, null, we(E.value.slice(0, 5), (Ee) => (a(), r("div", {
                key: Ee.widget_value,
                class: "model-item"
              }, [
                t("div", GT, [
                  t("span", jT, f(Ee.filename), 1)
                ]),
                Ee.canDownload ? (a(), r(W, { key: 0 }, [
                  u.value.has(Ee.url) ? (a(), r("span", HT, "Queued")) : (a(), R(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (Re) => M(Ee)
                  }, {
                    default: h(() => [...ge[3] || (ge[3] = [
                      b(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), r("span", KT, "Manual download required"))
              ]))), 128)),
              E.value.length > 5 ? (a(), r("div", qT, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", YT, [
            C(Pa, {
              modelValue: m.value,
              "onUpdate:modelValue": [
                ge[0] || (ge[0] = (Ee) => m.value = Ee),
                ee
              ]
            }, {
              default: h(() => [...ge[4] || (ge[4] = [
                b(" Don't show this popup ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Oe, {
          variant: "secondary",
          onClick: A
        }, {
          default: h(() => [...ge[5] || (ge[5] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        F.value ? (a(), R(Oe, {
          key: 0,
          variant: "primary",
          disabled: I.value,
          onClick: G
        }, {
          default: h(() => [
            b(f(I.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), XT = /* @__PURE__ */ ye(JT, [["__scopeId", "data-v-f881271d"]]), QT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', ZT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', e7 = {
  comfy: QT,
  phosphor: ZT
}, ol = "comfy", Fr = "comfygit-theme";
let Ys = null, Br = ol;
function t7() {
  try {
    const e = localStorage.getItem(Fr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ol;
}
function Vr(e = ol) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = e7[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), Br = e;
  try {
    localStorage.setItem(Fr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function s7() {
  return Br;
}
function o7(e) {
  Vr(e);
}
function n7(e) {
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
const a7 = t7();
Vr(a7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), o7(e);
  },
  getTheme: () => {
    const e = s7();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Jt = null, Ot = null, jo = null, Do = null, Zl = null, Lo = null, ei = null;
const ho = k(null);
let al = "managed", Wr = !1;
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
        al = o.state, Wr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ma() {
  var s;
  if (al === "managed" || !Wr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function l7() {
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
    render: () => nn(xE, {
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
function i7(e) {
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
    render: () => nn(Nr, {
      status: ho.value,
      onClose: Oo,
      onCommitted: (l) => {
        Oo(), r7(l.success, l.message), Cn().then(Ho);
      }
    })
  }), jo.mount(Ot), document.body.appendChild(Ot);
}
function Oo() {
  jo && (jo.unmount(), jo = null), Ot && (Ot.remove(), Ot = null);
}
function r7(e, s) {
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
function c7() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", Zl = Jn({
    render: () => nn(wT)
  }), Zl.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function d7() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", ei = Jn({
    render: () => nn(XT)
  }), ei.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Vt = null;
function Ho() {
  if (!Vt) return;
  const e = Vt.querySelector(".commit-indicator");
  e && (e.style.display = l7() ? "block" : "none");
}
function Da() {
  if (!Vt) return;
  const e = al !== "managed";
  Vt.disabled = e, Vt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Gr = document.createElement("style");
Gr.textContent = `
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
document.head.appendChild(Gr);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = pa, Vt = document.createElement("button"), Vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Vt.innerHTML = 'Commit <span class="commit-indicator"></span>', Vt.title = "Quick Commit", Vt.onclick = () => i7(Vt), e.appendChild(s), e.appendChild(Vt), (i = (l = Bt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Bt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), c7(), d7(), window.addEventListener("comfygit:open-panel", ((c) => {
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
          p.remove(), pa("debug-env");
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
              } catch (H) {
                console.error("[ComfyGit] Failed to refresh nodes:", H), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", D.style.display = "none";
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Cn(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : d()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = n7(g.detail);
        w && u(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
