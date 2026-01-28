import { app as Vt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Na(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const tt = {}, fo = [], gs = () => {
}, ai = () => !1, Fn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), za = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Fa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Jr = Object.prototype.hasOwnProperty, Ze = (e, s) => Jr.call(e, s), Be = Array.isArray, mo = (e) => tn(e) === "[object Map]", ko = (e) => tn(e) === "[object Set]", ul = (e) => tn(e) === "[object Date]", Ge = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", et = (e) => e !== null && typeof e == "object", li = (e) => (et(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), ii = Object.prototype.toString, tn = (e) => ii.call(e), Xr = (e) => tn(e).slice(8, -1), ri = (e) => tn(e) === "[object Object]", Ba = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Uo = /* @__PURE__ */ Na(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Qr = /-\w/g, Ht = Bn(
  (e) => e.replace(Qr, (s) => s.slice(1).toUpperCase())
), Zr = /\B([A-Z])/g, Bs = Bn(
  (e) => e.replace(Zr, "-$1").toLowerCase()
), Vn = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ta = Bn(
  (e) => e ? `on${Vn(e)}` : ""
), Ns = (e, s) => !Object.is(e, s), kn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ci = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Wn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, ec = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let dl;
const Gn = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kt(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? nc(n) : Kt(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ct(e) || et(e))
    return e;
}
const tc = /;(?![^(]*\))/g, sc = /:([^]+)/, oc = /\/\*[^]*?\*\//g;
function nc(e) {
  const s = {};
  return e.replace(oc, "").split(tc).forEach((o) => {
    if (o) {
      const n = o.split(sc);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Te(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Te(e[o]);
      n && (s += n + " ");
    }
  else if (et(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const ac = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", lc = /* @__PURE__ */ Na(ac);
function ui(e) {
  return !!e || e === "";
}
function ic(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = eo(e[n], s[n]);
  return o;
}
function eo(e, s) {
  if (e === s) return !0;
  let o = ul(e), n = ul(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), n = ts(s), o || n)
    return e === s;
  if (o = Be(e), n = Be(s), o || n)
    return o && n ? ic(e, s) : !1;
  if (o = et(e), n = et(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const r in e) {
      const u = e.hasOwnProperty(r), d = s.hasOwnProperty(r);
      if (u && !d || !u && d || !eo(e[r], s[r]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Va(e, s) {
  return e.findIndex((o) => eo(o, s));
}
const di = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Be(e) || et(e) && (e.toString === ii || !Ge(e.toString)) ? di(e) ? f(e.value) : JSON.stringify(e, fi, 2) : String(e), fi = (e, s) => di(s) ? fi(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[sa(n, i) + " =>"] = l, o),
    {}
  )
} : ko(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => sa(o))
} : ts(s) ? sa(s) : et(s) && !Be(s) && !ri(s) ? String(s) : s, sa = (e, s = "") => {
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
class rc {
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
function cc() {
  return Dt;
}
let nt;
const oa = /* @__PURE__ */ new WeakSet();
class mi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && Dt.active && Dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, oa.has(this) && (oa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fl(this), gi(this);
    const s = nt, o = Zt;
    nt = this, Zt = !0;
    try {
      return this.fn();
    } finally {
      hi(this), nt = s, Zt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        ja(s);
      this.deps = this.depsTail = void 0, fl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? oa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _a(this) && this.run();
  }
  get dirty() {
    return _a(this);
  }
}
let vi = 0, No, zo;
function pi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = zo, zo = e;
    return;
  }
  e.next = No, No = e;
}
function Wa() {
  vi++;
}
function Ga() {
  if (--vi > 0)
    return;
  if (zo) {
    let s = zo;
    for (zo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; No; ) {
    let s = No;
    for (No = void 0; s; ) {
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
function gi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function hi(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), ja(n), uc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function _a(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (yi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function yi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_a(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = Zt;
  nt = e, Zt = !0;
  try {
    gi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ns(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Zt = n, hi(e), e.flags &= -3;
  }
}
function ja(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      ja(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function uc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Zt = !0;
const wi = [];
function Ss() {
  wi.push(Zt), Zt = !1;
}
function Is() {
  const e = wi.pop();
  Zt = e === void 0 ? !0 : e;
}
function fl(e) {
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
class dc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ha {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!nt || !Zt || nt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== nt)
      o = this.activeLink = new dc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, _i(o);
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
    Wa();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Ga();
    }
  }
}
function _i(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        _i(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const ka = /* @__PURE__ */ new WeakMap(), Qs = Symbol(
  ""
), ba = Symbol(
  ""
), qo = Symbol(
  ""
);
function _t(e, s, o) {
  if (Zt && nt) {
    let n = ka.get(e);
    n || ka.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Ha()), l.map = n, l.key = o), l.track();
  }
}
function $s(e, s, o, n, l, i) {
  const r = ka.get(e);
  if (!r) {
    Ko++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Wa(), s === "clear")
    r.forEach(u);
  else {
    const d = Be(e), m = d && Ba(o);
    if (d && o === "length") {
      const v = Number(n);
      r.forEach((g, w) => {
        (w === "length" || w === qo || !ts(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || r.has(void 0)) && u(r.get(o)), m && u(r.get(qo)), s) {
        case "add":
          d ? m && u(r.get("length")) : (u(r.get(Qs)), mo(e) && u(r.get(ba)));
          break;
        case "delete":
          d || (u(r.get(Qs)), mo(e) && u(r.get(ba)));
          break;
        case "set":
          mo(e) && u(r.get(Qs));
          break;
      }
  }
  Ga();
}
function ao(e) {
  const s = Je(e);
  return s === e ? s : (_t(s, "iterate", qo), Gt(e) ? s : s.map(ss));
}
function jn(e) {
  return _t(e = Je(e), "iterate", qo), e;
}
function Os(e, s) {
  return Es(e) ? Zs(e) ? yo(ss(s)) : yo(s) : ss(s);
}
const fc = {
  __proto__: null,
  [Symbol.iterator]() {
    return na(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Be(s) ? ao(s) : s)
    );
  },
  entries() {
    return na(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
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
    return aa(this, "includes", e);
  },
  indexOf(...e) {
    return aa(this, "indexOf", e);
  },
  join(e) {
    return ao(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return aa(this, "lastIndexOf", e);
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
    return ml(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return ml(this, "reduceRight", e, s);
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
    return na(this, "values", (e) => Os(this, e));
  }
};
function na(e, s, o) {
  const n = jn(e), l = n[s]();
  return n !== e && !Gt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const mc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const r = jn(e), u = r !== e && !Gt(e), d = r[s];
  if (d !== mc[s]) {
    const g = d.apply(e, i);
    return u ? ss(g) : g;
  }
  let m = o;
  r !== e && (u ? m = function(g, w) {
    return o.call(this, Os(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = d.call(r, m, n);
  return u && l ? l(v) : v;
}
function ml(e, s, o, n) {
  const l = jn(e);
  let i = o;
  return l !== e && (Gt(e) ? o.length > 3 && (i = function(r, u, d) {
    return o.call(this, r, u, d, e);
  }) : i = function(r, u, d) {
    return o.call(this, r, Os(e, u), d, e);
  }), l[s](i, ...n);
}
function aa(e, s, o) {
  const n = Je(e);
  _t(n, "iterate", qo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Ya(o[0]) ? (o[0] = Je(o[0]), n[s](...o)) : l;
}
function To(e, s, o = []) {
  Ss(), Wa();
  const n = Je(e)[s].apply(e, o);
  return Ga(), Is(), n;
}
const vc = /* @__PURE__ */ Na("__proto__,__v_isRef,__isVue"), ki = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function pc(e) {
  ts(e) || (e = String(e));
  const s = Je(this);
  return _t(s, "has", e), s.hasOwnProperty(e);
}
class bi {
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
      return n === (l ? i ? xc : Si : i ? xi : Ci).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const r = Be(s);
    if (!l) {
      let d;
      if (r && (d = fc[o]))
        return d;
      if (o === "hasOwnProperty")
        return pc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ct(s) ? s : n
    );
    if ((ts(o) ? ki.has(o) : vc(o)) || (l || _t(s, "get", o), i))
      return u;
    if (Ct(u)) {
      const d = r && Ba(o) ? u : u.value;
      return l && et(d) ? En(d) : d;
    }
    return et(u) ? l ? En(u) : Vs(u) : u;
  }
}
class $i extends bi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const r = Be(s) && Ba(o);
    if (!this._isShallow) {
      const m = Es(i);
      if (!Gt(n) && !Es(n) && (i = Je(i), n = Je(n)), !r && Ct(i) && !Ct(n))
        return m || (i.value = n), !0;
    }
    const u = r ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
      s,
      o,
      n,
      Ct(s) ? s : l
    );
    return s === Je(l) && (u ? Ns(n, i) && $s(s, "set", o, n) : $s(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && $s(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ts(o) || !ki.has(o)) && _t(s, "has", o), n;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      Be(s) ? "length" : Qs
    ), Reflect.ownKeys(s);
  }
}
class gc extends bi {
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
const hc = /* @__PURE__ */ new $i(), yc = /* @__PURE__ */ new gc(), wc = /* @__PURE__ */ new $i(!0);
const $a = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function _c(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Je(l), r = mo(i), u = e === "entries" || e === Symbol.iterator && r, d = e === "keys" && r, m = l[e](...n), v = o ? $a : s ? yo : ss;
    return !s && _t(
      i,
      "iterate",
      d ? ba : Qs
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
function fn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function kc(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, r = Je(i), u = Je(l);
      e || (Ns(l, u) && _t(r, "get", l), _t(r, "get", u));
      const { has: d } = dn(r), m = s ? $a : e ? yo : ss;
      if (d.call(r, l))
        return m(i.get(l));
      if (d.call(r, u))
        return m(i.get(u));
      i !== r && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Je(l), "iterate", Qs), l.size;
    },
    has(l) {
      const i = this.__v_raw, r = Je(i), u = Je(l);
      return e || (Ns(l, u) && _t(r, "has", l), _t(r, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const r = this, u = r.__v_raw, d = Je(u), m = s ? $a : e ? yo : ss;
      return !e && _t(d, "iterate", Qs), u.forEach((v, g) => l.call(i, m(v), m(g), r));
    }
  };
  return pt(
    o,
    e ? {
      add: fn("add"),
      set: fn("set"),
      delete: fn("delete"),
      clear: fn("clear")
    } : {
      add(l) {
        !s && !Gt(l) && !Es(l) && (l = Je(l));
        const i = Je(this);
        return dn(i).has.call(i, l) || (i.add(l), $s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Gt(i) && !Es(i) && (i = Je(i));
        const r = Je(this), { has: u, get: d } = dn(r);
        let m = u.call(r, l);
        m || (l = Je(l), m = u.call(r, l));
        const v = d.call(r, l);
        return r.set(l, i), m ? Ns(i, v) && $s(r, "set", l, i) : $s(r, "add", l, i), this;
      },
      delete(l) {
        const i = Je(this), { has: r, get: u } = dn(i);
        let d = r.call(i, l);
        d || (l = Je(l), d = r.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && $s(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Je(this), i = l.size !== 0, r = l.clear();
        return i && $s(
          l,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    o[l] = _c(l, e, s);
  }), o;
}
function Ka(e, s) {
  const o = kc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const bc = {
  get: /* @__PURE__ */ Ka(!1, !1)
}, $c = {
  get: /* @__PURE__ */ Ka(!1, !0)
}, Cc = {
  get: /* @__PURE__ */ Ka(!0, !1)
};
const Ci = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakMap();
function Sc(e) {
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
function Ic(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Sc(Xr(e));
}
function Vs(e) {
  return Es(e) ? e : qa(
    e,
    !1,
    hc,
    bc,
    Ci
  );
}
function Ec(e) {
  return qa(
    e,
    !1,
    wc,
    $c,
    xi
  );
}
function En(e) {
  return qa(
    e,
    !0,
    yc,
    Cc,
    Si
  );
}
function qa(e, s, o, n, l) {
  if (!et(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = Ic(e);
  if (i === 0)
    return e;
  const r = l.get(e);
  if (r)
    return r;
  const u = new Proxy(
    e,
    i === 2 ? n : o
  );
  return l.set(e, u), u;
}
function Zs(e) {
  return Es(e) ? Zs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Es(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function Ya(e) {
  return e ? !!e.__v_raw : !1;
}
function Je(e) {
  const s = e && e.__v_raw;
  return s ? Je(s) : e;
}
function Tc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && ci(e, "__v_skip", !0), e;
}
const ss = (e) => et(e) ? Vs(e) : e, yo = (e) => et(e) ? En(e) : e;
function Ct(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Pc(e, !1);
}
function Pc(e, s) {
  return Ct(e) ? e : new Rc(e, s);
}
class Rc {
  constructor(s, o) {
    this.dep = new Ha(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Je(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Gt(s) || Es(s);
    s = n ? s : Je(s), Ns(s, o) && (this._rawValue = s, this._value = n ? s : ss(s), this.dep.trigger());
  }
}
function We(e) {
  return Ct(e) ? e.value : e;
}
const Mc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return Ct(l) && !Ct(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function Ii(e) {
  return Zs(e) ? e : new Proxy(e, Mc);
}
class Dc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Ha(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ko - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return pi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return yi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Lc(e, s, o = !1) {
  let n, l;
  return Ge(e) ? n = e : (n = e.get, l = e.set), new Dc(n, l, o);
}
const mn = {}, Tn = /* @__PURE__ */ new WeakMap();
let Js;
function Oc(e, s = !1, o = Js) {
  if (o) {
    let n = Tn.get(o);
    n || Tn.set(o, n = []), n.push(e);
  }
}
function Ac(e, s, o = tt) {
  const { immediate: n, deep: l, once: i, scheduler: r, augmentJob: u, call: d } = o, m = (C) => l ? C : Gt(C) || l === !1 || l === 0 ? Cs(C, 1) : Cs(C);
  let v, g, w, p, _ = !1, S = !1;
  if (Ct(e) ? (g = () => e.value, _ = Gt(e)) : Zs(e) ? (g = () => m(e), _ = !0) : Be(e) ? (S = !0, _ = e.some((C) => Zs(C) || Gt(C)), g = () => e.map((C) => {
    if (Ct(C))
      return C.value;
    if (Zs(C))
      return m(C);
    if (Ge(C))
      return d ? d(C, 2) : C();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Ss();
      try {
        w();
      } finally {
        Is();
      }
    }
    const C = Js;
    Js = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Js = C;
    }
  } : g = gs, s && l) {
    const C = g, j = l === !0 ? 1 / 0 : l;
    g = () => Cs(C(), j);
  }
  const $ = cc(), P = () => {
    v.stop(), $ && $.active && Fa($.effects, v);
  };
  if (i && s) {
    const C = s;
    s = (...j) => {
      C(...j), P();
    };
  }
  let D = S ? new Array(e.length).fill(mn) : mn;
  const E = (C) => {
    if (!(!(v.flags & 1) || !v.dirty && !C))
      if (s) {
        const j = v.run();
        if (l || _ || (S ? j.some((q, z) => Ns(q, D[z])) : Ns(j, D))) {
          w && w();
          const q = Js;
          Js = v;
          try {
            const z = [
              j,
              // pass undefined as the old value when it's changed for the first time
              D === mn ? void 0 : S && D[0] === mn ? [] : D,
              p
            ];
            D = j, d ? d(s, 3, z) : (
              // @ts-expect-error
              s(...z)
            );
          } finally {
            Js = q;
          }
        }
      } else
        v.run();
  };
  return u && u(E), v = new mi(g), v.scheduler = r ? () => r(E, !1) : E, p = (C) => Oc(C, !1, v), w = v.onStop = () => {
    const C = Tn.get(v);
    if (C) {
      if (d)
        d(C, 4);
      else
        for (const j of C) j();
      Tn.delete(v);
    }
  }, s ? n ? E(!0) : D = v.run() : r ? r(E.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !et(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ct(e))
    Cs(e.value, s, o);
  else if (Be(e))
    for (let n = 0; n < e.length; n++)
      Cs(e[n], s, o);
  else if (ko(e) || mo(e))
    e.forEach((n) => {
      Cs(n, s, o);
    });
  else if (ri(e)) {
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
    Hn(l, s, o);
  }
}
function os(e, s, o, n) {
  if (Ge(e)) {
    const l = sn(e, s, o, n);
    return l && li(l) && l.catch((i) => {
      Hn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(os(e[i], s, o, n));
    return l;
  }
}
function Hn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = s && s.appContext.config || tt;
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
    if (i) {
      Ss(), sn(i, null, 10, [
        e,
        d,
        m
      ]), Is();
      return;
    }
  }
  Uc(e, o, l, n, r);
}
function Uc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let ms = -1;
const vo = [];
let As = null, ro = 0;
const Ei = /* @__PURE__ */ Promise.resolve();
let Pn = null;
function kt(e) {
  const s = Pn || Ei;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Nc(e) {
  let s = ms + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = Yo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Ja(e) {
  if (!(e.flags & 1)) {
    const s = Yo(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Yo(o) ? It.push(e) : It.splice(Nc(s), 0, e), e.flags |= 1, Ti();
  }
}
function Ti() {
  Pn || (Pn = Ei.then(Ri));
}
function zc(e) {
  Be(e) ? vo.push(...e) : As && e.id === -1 ? As.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), Ti();
}
function vl(e, s, o = ms + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Pi(e) {
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
function Ri(e) {
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
    ms = -1, It.length = 0, Pi(), Pn = null, (It.length || vo.length) && Ri();
  }
}
let yt = null, Mi = null;
function Rn(e) {
  const s = yt;
  return yt = e, Mi = e && e.type.__scopeId || null, s;
}
function h(e, s = yt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Ln(-1);
    const i = Rn(s);
    let r;
    try {
      r = e(...l);
    } finally {
      Rn(i), n._d && Ln(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (yt === null)
    return e;
  const o = Xn(yt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, r, u, d = tt] = s[l];
    i && (Ge(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Cs(r), n.push({
      dir: i,
      instance: o,
      value: r,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Hs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let r = 0; r < l.length; r++) {
    const u = l[r];
    i && (u.oldValue = i[r].value);
    let d = u.dir[n];
    d && (Ss(), os(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Is());
  }
}
const Di = Symbol("_vte"), Li = (e) => e.__isTeleport, Fo = (e) => e && (e.disabled || e.disabled === ""), pl = (e) => e && (e.defer || e.defer === ""), gl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, hl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ca = (e, s) => {
  const o = e && e.to;
  return ct(o) ? s ? s(o) : null : o;
}, Oi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, r, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: S, createComment: $ }
    } = m, P = Fo(s.props);
    let { shapeFlag: D, children: E, dynamicChildren: C } = s;
    if (e == null) {
      const j = s.el = S(""), q = s.anchor = S("");
      p(j, o, n), p(q, o, n);
      const z = (T, M) => {
        D & 16 && v(
          E,
          T,
          M,
          l,
          i,
          r,
          u,
          d
        );
      }, I = () => {
        const T = s.target = Ca(s.props, _), M = Ai(T, s, S, p);
        T && (r !== "svg" && gl(T) ? r = "svg" : r !== "mathml" && hl(T) && (r = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(T), P || (z(T, M), bn(s, !1)));
      };
      P && (z(o, q), bn(s, !0)), pl(s.props) ? (s.el.__isMounted = !1, St(() => {
        I(), delete s.el.__isMounted;
      }, i)) : I();
    } else {
      if (pl(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Oi.process(
            e,
            s,
            o,
            n,
            l,
            i,
            r,
            u,
            d,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const j = s.anchor = e.anchor, q = s.target = e.target, z = s.targetAnchor = e.targetAnchor, I = Fo(e.props), T = I ? o : q, M = I ? j : z;
      if (r === "svg" || gl(q) ? r = "svg" : (r === "mathml" || hl(q)) && (r = "mathml"), C ? (w(
        e.dynamicChildren,
        C,
        T,
        l,
        i,
        r,
        u
      ), tl(e, s, !0)) : d || g(
        e,
        s,
        T,
        M,
        l,
        i,
        r,
        u,
        !1
      ), P)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : vn(
          s,
          o,
          j,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const te = s.target = Ca(
          s.props,
          _
        );
        te && vn(
          s,
          te,
          null,
          m,
          0
        );
      } else I && vn(
        s,
        q,
        z,
        m,
        1
      );
      bn(s, P);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: r,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), i && l(d), r & 16) {
      const p = i || !Fo(w);
      for (let _ = 0; _ < u.length; _++) {
        const S = u[_];
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
  move: vn,
  hydrate: Fc
};
function vn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: r, anchor: u, shapeFlag: d, children: m, props: v } = e, g = i === 2;
  if (g && n(r, s, o), (!g || Fo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && n(u, s, o);
}
function Fc(e, s, o, n, l, i, {
  o: { nextSibling: r, parentNode: u, querySelector: d, insert: m, createText: v }
}, g) {
  function w(S, $, P, D) {
    $.anchor = g(
      r(S),
      $,
      u(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = D;
  }
  const p = s.target = Ca(
    s.props,
    d
  ), _ = Fo(s.props);
  if (p) {
    const S = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          S,
          S && r(S)
        );
      else {
        s.anchor = r(e);
        let $ = S;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              s.targetStart = $;
            else if ($.data === "teleport anchor") {
              s.targetAnchor = $, p._lpa = s.targetAnchor && r(s.targetAnchor);
              break;
            }
          }
          $ = r($);
        }
        s.targetAnchor || Ai(p, s, v, m), g(
          S && r(S),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    bn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, r(e));
  return s.anchor && r(s.anchor);
}
const wt = Oi;
function bn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Ai(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Di] = i, e && (n(l, e), n(i, e)), i;
}
const bs = Symbol("_leaveCb"), pn = Symbol("_enterCb");
function Ui() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xe(() => {
    e.isMounted = !0;
  }), ji(() => {
    e.isUnmounting = !0;
  }), e;
}
const Bt = [Function, Array], Ni = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Bt,
  onEnter: Bt,
  onAfterEnter: Bt,
  onEnterCancelled: Bt,
  // leave
  onBeforeLeave: Bt,
  onLeave: Bt,
  onAfterLeave: Bt,
  onLeaveCancelled: Bt,
  // appear
  onBeforeAppear: Bt,
  onAppear: Bt,
  onAfterAppear: Bt,
  onAppearCancelled: Bt
}, zi = (e) => {
  const s = e.subTree;
  return s.component ? zi(s.component) : s;
}, Bc = {
  name: "BaseTransition",
  props: Ni,
  setup(e, { slots: s }) {
    const o = ol(), n = Ui();
    return () => {
      const l = s.default && Xa(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Fi(l), r = Je(e), { mode: u } = r;
      if (n.isLeaving)
        return la(i);
      const d = yl(i);
      if (!d)
        return la(i);
      let m = Jo(
        d,
        r,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== bt && to(d, m);
      let v = o.subTree && yl(o.subTree);
      if (v && v.type !== bt && !Xs(v, d) && zi(o).type !== bt) {
        let g = Jo(
          v,
          r,
          n,
          o
        );
        if (to(v, g), u === "out-in" && d.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, la(i);
        u === "in-out" && d.type !== bt ? g.delayLeave = (w, p, _) => {
          const S = Bi(
            n,
            v
          );
          S[String(v.key)] = v, w[bs] = () => {
            p(), w[bs] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return i;
    };
  }
};
function Fi(e) {
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
const Vc = Bc;
function Bi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function Jo(e, s, o, n, l) {
  const {
    appear: i,
    mode: r,
    persisted: u = !1,
    onBeforeEnter: d,
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
  } = s, C = String(e.key), j = Bi(o, e), q = (T, M) => {
    T && os(
      T,
      n,
      9,
      M
    );
  }, z = (T, M) => {
    const te = M[1];
    q(T, M), Be(T) ? T.every((X) => X.length <= 1) && te() : T.length <= 1 && te();
  }, I = {
    mode: r,
    persisted: u,
    beforeEnter(T) {
      let M = d;
      if (!o.isMounted)
        if (i)
          M = $ || d;
        else
          return;
      T[bs] && T[bs](
        !0
        /* cancelled */
      );
      const te = j[C];
      te && Xs(e, te) && te.el[bs] && te.el[bs](), q(M, [T]);
    },
    enter(T) {
      let M = m, te = v, X = g;
      if (!o.isMounted)
        if (i)
          M = P || m, te = D || v, X = E || g;
        else
          return;
      let H = !1;
      const se = T[pn] = (Z) => {
        H || (H = !0, Z ? q(X, [T]) : q(te, [T]), I.delayedLeave && I.delayedLeave(), T[pn] = void 0);
      };
      M ? z(M, [T, se]) : se();
    },
    leave(T, M) {
      const te = String(e.key);
      if (T[pn] && T[pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return M();
      q(w, [T]);
      let X = !1;
      const H = T[bs] = (se) => {
        X || (X = !0, M(), se ? q(S, [T]) : q(_, [T]), T[bs] = void 0, j[te] === e && delete j[te]);
      };
      j[te] = e, p ? z(p, [T, H]) : H();
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
function la(e) {
  if (Kn(e))
    return e = zs(e), e.children = null, e;
}
function yl(e) {
  if (!Kn(e))
    return Li(e.type) && e.children ? Fi(e.children) : e;
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
function Xa(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const u = o == null ? r.key : String(o) + String(r.key != null ? r.key : i);
    r.type === K ? (r.patchFlag & 128 && l++, n = n.concat(
      Xa(r.children, s, u)
    )) : (s || r.type !== bt) && n.push(u != null ? zs(r, { key: u }) : r);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function _e(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Vi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Mn = /* @__PURE__ */ new WeakMap();
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
  const i = n.shapeFlag & 4 ? Xn(n.component) : n.el, r = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === tt ? u.refs = {} : u.refs, g = u.setupState, w = Je(g), p = g === tt ? ai : (_) => Ze(w, _);
  if (m != null && m !== d) {
    if (wl(s), ct(m))
      v[m] = null, p(m) && (g[m] = null);
    else if (Ct(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Ge(d))
    sn(d, u, 12, [r, v]);
  else {
    const _ = ct(d), S = Ct(d);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Be(P) && Fa(P, i);
          else if (Be(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const D = [i];
            d.value = D, e.k && (v[e.k] = D);
          }
        } else _ ? (v[d] = r, p(d) && (g[d] = r)) : S && (d.value = r, e.k && (v[e.k] = r));
      };
      if (r) {
        const P = () => {
          $(), Mn.delete(e);
        };
        P.id = -1, Mn.set(e, P), St(P, o);
      } else
        wl(e), $();
    }
  }
}
function wl(e) {
  const s = Mn.get(e);
  s && (s.flags |= 8, Mn.delete(e));
}
Gn().requestIdleCallback;
Gn().cancelIdleCallback;
const po = (e) => !!e.type.__asyncLoader, Kn = (e) => e.type.__isKeepAlive;
function Wc(e, s) {
  Wi(e, "a", s);
}
function Gc(e, s) {
  Wi(e, "da", s);
}
function Wi(e, s, o = $t) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (qn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Kn(l.parent.vnode) && jc(n, s, o, l), l = l.parent;
  }
}
function jc(e, s, o, n) {
  const l = qn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  oo(() => {
    Fa(n[s], l);
  }, o);
}
function qn(e, s, o = $t, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...r) => {
      Ss();
      const u = on(o), d = os(s, o, e, r);
      return u(), Is(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ts = (e) => (s, o = $t) => {
  (!Zo || e === "sp") && qn(e, (...n) => s(...n), o);
}, Hc = Ts("bm"), Xe = Ts("m"), Kc = Ts(
  "bu"
), Gi = Ts("u"), ji = Ts(
  "bum"
), oo = Ts("um"), qc = Ts(
  "sp"
), Yc = Ts("rtg"), Jc = Ts("rtc");
function Xc(e, s = $t) {
  qn("ec", e, s);
}
const Qc = "components", Hi = Symbol.for("v-ndc");
function Qa(e) {
  return ct(e) ? Zc(Qc, e, !1) || e : e || Hi;
}
function Zc(e, s, o = !0, n = !1) {
  const l = yt || $t;
  if (l) {
    const i = l.type;
    {
      const u = Bu(
        i,
        !1
      );
      if (u && (u === s || u === Ht(s) || u === Vn(Ht(s))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      _l(l[e] || i[e], s) || // global registration
      _l(l.appContext[e], s)
    );
    return !r && n ? i : r;
  }
}
function _l(e, s) {
  return e && (e[s] || e[Ht(s)] || e[Vn(Ht(s))]);
}
function be(e, s, o, n) {
  let l;
  const i = o, r = Be(e);
  if (r || ct(e)) {
    const u = r && Zs(e);
    let d = !1, m = !1;
    u && (d = !Gt(e), m = Es(e), e = jn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        d ? m ? yo(ss(e[v])) : ss(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, i);
  } else if (et(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => s(u, d, void 0, i)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, m = u.length; d < m; d++) {
        const v = u[d];
        l[d] = s(e[v], v, d, i);
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
  if (yt.ce || yt.parent && po(yt.parent) && yt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), R(
      K,
      null,
      [x("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const r = i && Ki(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, d = R(
    K,
    {
      key: (u && !ts(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!r && n ? "_fb" : "")
    },
    r || (n ? n() : []),
    r && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function Ki(e) {
  return e.some((s) => Qo(s) ? !(s.type === bt || s.type === K && !Ki(s.children)) : !0) ? e : null;
}
const xa = (e) => e ? fr(e) ? Xn(e) : xa(e.parent) : null, Vo = (
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
    $parent: (e) => xa(e.parent),
    $root: (e) => xa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ja(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = kt.bind(e.proxy)),
    $watch: (e) => du.bind(e)
  })
), ia = (e, s) => e !== tt && !e.__isScriptSetup && Ze(e, s), eu = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: r, type: u, appContext: d } = e;
    if (s[0] !== "$") {
      const w = r[s];
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
        if (ia(n, s))
          return r[s] = 1, n[s];
        if (l !== tt && Ze(l, s))
          return r[s] = 2, l[s];
        if (Ze(i, s))
          return r[s] = 3, i[s];
        if (o !== tt && Ze(o, s))
          return r[s] = 4, o[s];
        Sa && (r[s] = 0);
      }
    }
    const m = Vo[s];
    let v, g;
    if (m)
      return s === "$attrs" && _t(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== tt && Ze(o, s))
      return r[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, Ze(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return ia(l, s) ? (l[s] = o, !0) : n !== tt && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: r }
  }, u) {
    let d;
    return !!(o[u] || e !== tt && u[0] !== "$" && Ze(e, u) || ia(s, u) || Ze(i, u) || Ze(n, u) || Ze(Vo, u) || Ze(l.config.globalProperties, u) || (d = r.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function kl(e) {
  return Be(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Sa = !0;
function tu(e) {
  const s = Yi(e), o = e.proxy, n = e.ctx;
  Sa = !1, s.beforeCreate && bl(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
    methods: r,
    watch: u,
    provide: d,
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
    unmounted: C,
    render: j,
    renderTracked: q,
    renderTriggered: z,
    errorCaptured: I,
    serverPrefetch: T,
    // public API
    expose: M,
    inheritAttrs: te,
    // assets
    components: X,
    directives: H,
    filters: se
  } = s;
  if (m && su(m, n, null), r)
    for (const G in r) {
      const O = r[G];
      Ge(O) && (n[G] = O.bind(o));
    }
  if (l) {
    const G = l.call(o, o);
    et(G) && (e.data = Vs(G));
  }
  if (Sa = !0, i)
    for (const G in i) {
      const O = i[G], le = Ge(O) ? O.bind(o, o) : Ge(O.get) ? O.get.bind(o, o) : gs, pe = !Ge(O) && Ge(O.set) ? O.set.bind(o) : gs, Me = U({
        get: le,
        set: pe
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (Ae) => Me.value = Ae
      });
    }
  if (u)
    for (const G in u)
      qi(u[G], n, o, G);
  if (d) {
    const G = Ge(d) ? d.call(o) : d;
    Reflect.ownKeys(G).forEach((O) => {
      ru(O, G[O]);
    });
  }
  v && bl(v, e, "c");
  function N(G, O) {
    Be(O) ? O.forEach((le) => G(le.bind(o))) : O && G(O.bind(o));
  }
  if (N(Hc, g), N(Xe, w), N(Kc, p), N(Gi, _), N(Wc, S), N(Gc, $), N(Xc, I), N(Jc, q), N(Yc, z), N(ji, D), N(oo, C), N(qc, T), Be(M))
    if (M.length) {
      const G = e.exposed || (e.exposed = {});
      M.forEach((O) => {
        Object.defineProperty(G, O, {
          get: () => o[O],
          set: (le) => o[O] = le,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  j && e.render === gs && (e.render = j), te != null && (e.inheritAttrs = te), X && (e.components = X), H && (e.directives = H), T && Vi(e);
}
function su(e, s, o = gs) {
  Be(e) && (e = Ia(e));
  for (const n in e) {
    const l = e[n];
    let i;
    et(l) ? "default" in l ? i = $n(
      l.from || n,
      l.default,
      !0
    ) : i = $n(l.from || n) : i = $n(l), Ct(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : s[n] = i;
  }
}
function bl(e, s, o) {
  os(
    Be(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function qi(e, s, o, n) {
  let l = n.includes(".") ? Qi(o, n) : () => o[n];
  if (ct(e)) {
    const i = s[e];
    Ge(i) && gt(l, i);
  } else if (Ge(e))
    gt(l, e.bind(o));
  else if (et(e))
    if (Be(e))
      e.forEach((i) => qi(i, s, o, n));
    else {
      const i = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(i) && gt(l, i, e);
    }
}
function Yi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => Dn(d, m, r, !0)
  ), Dn(d, s, r)), et(s) && i.set(s, d), d;
}
function Dn(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Dn(e, i, o, !0), l && l.forEach(
    (r) => Dn(e, r, o, !0)
  );
  for (const r in s)
    if (!(n && r === "expose")) {
      const u = ou[r] || o && o[r];
      e[r] = u ? u(e[r], s[r]) : s[r];
    }
  return e;
}
const ou = {
  data: $l,
  props: Cl,
  emits: Cl,
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
  watch: au,
  // provide / inject
  provide: $l,
  inject: nu
};
function $l(e, s) {
  return s ? e ? function() {
    return pt(
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function nu(e, s) {
  return Ao(Ia(e), Ia(s));
}
function Ia(e) {
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
function Cl(e, s) {
  return e ? Be(e) && Be(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    kl(e),
    kl(s ?? {})
  ) : s;
}
function au(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function Ji() {
  return {
    app: null,
    config: {
      isNativeTag: ai,
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
let lu = 0;
function iu(e, s) {
  return function(n, l = null) {
    Ge(n) || (n = pt({}, n)), l != null && !et(l) && (l = null);
    const i = Ji(), r = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: lu++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Wu,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return r.has(v) || (v && Ge(v.install) ? (r.add(v), v.install(m, ...g)) : Ge(v) && (r.add(v), v(m, ...g))), m;
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
        if (!d) {
          const p = m._ceVNode || x(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Xn(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (os(
          u,
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
function ru(e, s) {
  if ($t) {
    let o = $t.provides;
    const n = $t.parent && $t.parent.provides;
    n === o && (o = $t.provides = Object.create(n)), o[e] = s;
  }
}
function $n(e, s, o = !1) {
  const n = ol();
  if (n || go) {
    let l = go ? go._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const cu = Symbol.for("v-scx"), uu = () => $n(cu);
function gt(e, s, o) {
  return Xi(e, s, o);
}
function Xi(e, s, o = tt) {
  const { immediate: n, deep: l, flush: i, once: r } = o, u = pt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (Zo) {
    if (i === "sync") {
      const p = uu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = $t;
  u.call = (p, _, S) => os(p, v, _, S);
  let g = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, u.scheduler = (p, _) => {
    _ ? p() : Ja(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Ac(e, s, u);
  return Zo && (m ? m.push(w) : d && w()), w;
}
function du(e, s, o) {
  const n = this.proxy, l = ct(e) ? e.includes(".") ? Qi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Ge(s) ? i = s : (i = s.handler, o = s);
  const r = on(this), u = Xi(l, i.bind(n), o);
  return r(), u;
}
function Qi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const fu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Ht(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function mu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || tt;
  let l = o;
  const i = s.startsWith("update:"), r = i && fu(n, s.slice(7));
  r && (r.trim && (l = o.map((v) => ct(v) ? v.trim() : v)), r.number && (l = o.map(Wn)));
  let u, d = n[u = ta(s)] || // also try camelCase event handler (#2249)
  n[u = ta(Ht(s))];
  !d && i && (d = n[u = ta(Bs(s))]), d && os(
    d,
    e,
    6,
    l
  );
  const m = n[u + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, os(
      m,
      e,
      6,
      l
    );
  }
}
const vu = /* @__PURE__ */ new WeakMap();
function Zi(e, s, o = !1) {
  const n = o ? vu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let r = {}, u = !1;
  if (!Ge(e)) {
    const d = (m) => {
      const v = Zi(m, s, !0);
      v && (u = !0, pt(r, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (et(e) && n.set(e, null), null) : (Be(i) ? i.forEach((d) => r[d] = null) : pt(r, i), et(e) && n.set(e, r), r);
}
function Yn(e, s) {
  return !e || !Fn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, Bs(s)) || Ze(e, s));
}
function xl(e) {
  const {
    type: s,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
    slots: r,
    attrs: u,
    emit: d,
    render: m,
    renderCache: v,
    props: g,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: S
  } = e, $ = Rn(e);
  let P, D;
  try {
    if (o.shapeFlag & 4) {
      const C = l || n, j = C;
      P = ps(
        m.call(
          j,
          C,
          v,
          g,
          p,
          w,
          _
        )
      ), D = u;
    } else {
      const C = s;
      P = ps(
        C.length > 1 ? C(
          g,
          { attrs: u, slots: r, emit: d }
        ) : C(
          g,
          null
        )
      ), D = s.props ? u : pu(u);
    }
  } catch (C) {
    Wo.length = 0, Hn(C, e, 1), P = x(bt);
  }
  let E = P;
  if (D && S !== !1) {
    const C = Object.keys(D), { shapeFlag: j } = E;
    C.length && j & 7 && (i && C.some(za) && (D = gu(
      D,
      i
    )), E = zs(E, D, !1, !0));
  }
  return o.dirs && (E = zs(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && to(E, o.transition), P = E, Rn($), P;
}
const pu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Fn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, gu = (e, s) => {
  const o = {};
  for (const n in e)
    (!za(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function hu(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: r, children: u, patchFlag: d } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Sl(n, r, m) : !!r;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (r[w] !== n[w] && !Yn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === r ? !1 : n ? r ? Sl(n, r, m) : !0 : !!r;
  return !1;
}
function Sl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !Yn(o, i))
      return !0;
  }
  return !1;
}
function yu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const er = {}, tr = () => Object.create(er), sr = (e) => Object.getPrototypeOf(e) === er;
function wu(e, s, o, n = !1) {
  const l = {}, i = tr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), or(e, s, l, i);
  for (const r in e.propsOptions[0])
    r in l || (l[r] = void 0);
  o ? e.props = n ? l : Ec(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function _u(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, u = Je(l), [d] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const v = e.vnode.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        let w = v[g];
        if (Yn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Ht(w);
            l[_] = Ea(
              d,
              u,
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
    or(e, s, l, i) && (m = !0);
    let v;
    for (const g in u)
      (!s || // for camelCase
      !Ze(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !Ze(s, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Ea(
        d,
        u,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (i !== u)
      for (const g in i)
        (!s || !Ze(s, g)) && (delete i[g], m = !0);
  }
  m && $s(e.attrs, "set", "");
}
function or(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let r = !1, u;
  if (s)
    for (let d in s) {
      if (Uo(d))
        continue;
      const m = s[d];
      let v;
      l && Ze(l, v = Ht(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Yn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, r = !0);
    }
  if (i) {
    const d = Je(o), m = u || tt;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = Ea(
        l,
        d,
        g,
        m[g],
        e,
        !Ze(m, g)
      );
    }
  }
  return r;
}
function Ea(e, s, o, n, l, i) {
  const r = e[o];
  if (r != null) {
    const u = Ze(r, "default");
    if (u && n === void 0) {
      const d = r.default;
      if (r.type !== Function && !r.skipFactory && Ge(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = on(l);
          n = m[o] = d.call(
            null,
            s
          ), v();
        }
      } else
        n = d;
      l.ce && l.ce._setProp(o, n);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : r[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Bs(o)) && (n = !0));
  }
  return n;
}
const ku = /* @__PURE__ */ new WeakMap();
function nr(e, s, o = !1) {
  const n = o ? ku : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, r = {}, u = [];
  let d = !1;
  if (!Ge(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = nr(g, s, !0);
      pt(r, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return et(e) && n.set(e, fo), fo;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = Ht(i[v]);
      Il(g) && (r[g] = tt);
    }
  else if (i)
    for (const v in i) {
      const g = Ht(v);
      if (Il(g)) {
        const w = i[v], p = r[g] = Be(w) || Ge(w) ? { type: w } : pt({}, w), _ = p.type;
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
        ] = $, (S || Ze(p, "default")) && u.push(g);
      }
    }
  const m = [r, u];
  return et(e) && n.set(e, m), m;
}
function Il(e) {
  return e[0] !== "$" && !Uo(e);
}
const Za = (e) => e === "_" || e === "_ctx" || e === "$stable", el = (e) => Be(e) ? e.map(ps) : [ps(e)], bu = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => el(s(...l)), o);
  return n._c = !1, n;
}, ar = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Za(l)) continue;
    const i = e[l];
    if (Ge(i))
      s[l] = bu(l, i, n);
    else if (i != null) {
      const r = el(i);
      s[l] = () => r;
    }
  }
}, lr = (e, s) => {
  const o = el(s);
  e.slots.default = () => o;
}, ir = (e, s, o) => {
  for (const n in s)
    (o || !Za(n)) && (e[n] = s[n]);
}, $u = (e, s, o) => {
  const n = e.slots = tr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (ir(n, s, o), o && ci(n, "_", l, !0)) : ar(s, n);
  } else s && lr(e, s);
}, Cu = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, r = tt;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : ir(l, s, o) : (i = !s.$stable, ar(s, l)), r = s;
  } else s && (lr(e, s), r = { default: 1 });
  if (i)
    for (const u in l)
      !Za(u) && r[u] == null && delete l[u];
}, St = Tu;
function xu(e) {
  return Su(e);
}
function Su(e, s) {
  const o = Gn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: r,
    createText: u,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: g,
    nextSibling: w,
    setScopeId: p = gs,
    insertStaticContent: _
  } = e, S = (L, V, ne, ce = null, ye = null, we = null, Ie = void 0, Ee = null, re = !!V.dynamicChildren) => {
    if (L === V)
      return;
    L && !Xs(L, V) && (ce = ge(L), Ae(L, ye, we, !0), L = null), V.patchFlag === -2 && (re = !1, V.dynamicChildren = null);
    const { type: he, ref: Ne, shapeFlag: Pe } = V;
    switch (he) {
      case Jn:
        $(L, V, ne, ce);
        break;
      case bt:
        P(L, V, ne, ce);
        break;
      case ca:
        L == null && D(V, ne, ce, Ie);
        break;
      case K:
        X(
          L,
          V,
          ne,
          ce,
          ye,
          we,
          Ie,
          Ee,
          re
        );
        break;
      default:
        Pe & 1 ? j(
          L,
          V,
          ne,
          ce,
          ye,
          we,
          Ie,
          Ee,
          re
        ) : Pe & 6 ? H(
          L,
          V,
          ne,
          ce,
          ye,
          we,
          Ie,
          Ee,
          re
        ) : (Pe & 64 || Pe & 128) && he.process(
          L,
          V,
          ne,
          ce,
          ye,
          we,
          Ie,
          Ee,
          re,
          De
        );
    }
    Ne != null && ye ? Bo(Ne, L && L.ref, we, V || L, !V) : Ne == null && L && L.ref != null && Bo(L.ref, null, we, L, !0);
  }, $ = (L, V, ne, ce) => {
    if (L == null)
      n(
        V.el = u(V.children),
        ne,
        ce
      );
    else {
      const ye = V.el = L.el;
      V.children !== L.children && m(ye, V.children);
    }
  }, P = (L, V, ne, ce) => {
    L == null ? n(
      V.el = d(V.children || ""),
      ne,
      ce
    ) : V.el = L.el;
  }, D = (L, V, ne, ce) => {
    [L.el, L.anchor] = _(
      L.children,
      V,
      ne,
      ce,
      L.el,
      L.anchor
    );
  }, E = ({ el: L, anchor: V }, ne, ce) => {
    let ye;
    for (; L && L !== V; )
      ye = w(L), n(L, ne, ce), L = ye;
    n(V, ne, ce);
  }, C = ({ el: L, anchor: V }) => {
    let ne;
    for (; L && L !== V; )
      ne = w(L), l(L), L = ne;
    l(V);
  }, j = (L, V, ne, ce, ye, we, Ie, Ee, re) => {
    if (V.type === "svg" ? Ie = "svg" : V.type === "math" && (Ie = "mathml"), L == null)
      q(
        V,
        ne,
        ce,
        ye,
        we,
        Ie,
        Ee,
        re
      );
    else {
      const he = L.el && L.el._isVueCE ? L.el : null;
      try {
        he && he._beginPatch(), T(
          L,
          V,
          ye,
          we,
          Ie,
          Ee,
          re
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, q = (L, V, ne, ce, ye, we, Ie, Ee) => {
    let re, he;
    const { props: Ne, shapeFlag: Pe, transition: oe, dirs: J } = L;
    if (re = L.el = r(
      L.type,
      we,
      Ne && Ne.is,
      Ne
    ), Pe & 8 ? v(re, L.children) : Pe & 16 && I(
      L.children,
      re,
      null,
      ce,
      ye,
      ra(L, we),
      Ie,
      Ee
    ), J && Hs(L, null, ce, "created"), z(re, L, L.scopeId, Ie, ce), Ne) {
      for (const Ce in Ne)
        Ce !== "value" && !Uo(Ce) && i(re, Ce, null, Ne[Ce], we, ce);
      "value" in Ne && i(re, "value", null, Ne.value, we), (he = Ne.onVnodeBeforeMount) && us(he, ce, L);
    }
    J && Hs(L, null, ce, "beforeMount");
    const Oe = Iu(ye, oe);
    Oe && oe.beforeEnter(re), n(re, V, ne), ((he = Ne && Ne.onVnodeMounted) || Oe || J) && St(() => {
      he && us(he, ce, L), Oe && oe.enter(re), J && Hs(L, null, ce, "mounted");
    }, ye);
  }, z = (L, V, ne, ce, ye) => {
    if (ne && p(L, ne), ce)
      for (let we = 0; we < ce.length; we++)
        p(L, ce[we]);
    if (ye) {
      let we = ye.subTree;
      if (V === we || cr(we.type) && (we.ssContent === V || we.ssFallback === V)) {
        const Ie = ye.vnode;
        z(
          L,
          Ie,
          Ie.scopeId,
          Ie.slotScopeIds,
          ye.parent
        );
      }
    }
  }, I = (L, V, ne, ce, ye, we, Ie, Ee, re = 0) => {
    for (let he = re; he < L.length; he++) {
      const Ne = L[he] = Ee ? Us(L[he]) : ps(L[he]);
      S(
        null,
        Ne,
        V,
        ne,
        ce,
        ye,
        we,
        Ie,
        Ee
      );
    }
  }, T = (L, V, ne, ce, ye, we, Ie) => {
    const Ee = V.el = L.el;
    let { patchFlag: re, dynamicChildren: he, dirs: Ne } = V;
    re |= L.patchFlag & 16;
    const Pe = L.props || tt, oe = V.props || tt;
    let J;
    if (ne && Ks(ne, !1), (J = oe.onVnodeBeforeUpdate) && us(J, ne, V, L), Ne && Hs(V, L, ne, "beforeUpdate"), ne && Ks(ne, !0), (Pe.innerHTML && oe.innerHTML == null || Pe.textContent && oe.textContent == null) && v(Ee, ""), he ? M(
      L.dynamicChildren,
      he,
      Ee,
      ne,
      ce,
      ra(V, ye),
      we
    ) : Ie || O(
      L,
      V,
      Ee,
      null,
      ne,
      ce,
      ra(V, ye),
      we,
      !1
    ), re > 0) {
      if (re & 16)
        te(Ee, Pe, oe, ne, ye);
      else if (re & 2 && Pe.class !== oe.class && i(Ee, "class", null, oe.class, ye), re & 4 && i(Ee, "style", Pe.style, oe.style, ye), re & 8) {
        const Oe = V.dynamicProps;
        for (let Ce = 0; Ce < Oe.length; Ce++) {
          const $e = Oe[Ce], W = Pe[$e], F = oe[$e];
          (F !== W || $e === "value") && i(Ee, $e, W, F, ye, ne);
        }
      }
      re & 1 && L.children !== V.children && v(Ee, V.children);
    } else !Ie && he == null && te(Ee, Pe, oe, ne, ye);
    ((J = oe.onVnodeUpdated) || Ne) && St(() => {
      J && us(J, ne, V, L), Ne && Hs(V, L, ne, "updated");
    }, ce);
  }, M = (L, V, ne, ce, ye, we, Ie) => {
    for (let Ee = 0; Ee < V.length; Ee++) {
      const re = L[Ee], he = V[Ee], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (re.type === K || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(re, he) || // - In the case of a component, it could contain anything.
        re.shapeFlag & 198) ? g(re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ne
        )
      );
      S(
        re,
        he,
        Ne,
        null,
        ce,
        ye,
        we,
        Ie,
        !0
      );
    }
  }, te = (L, V, ne, ce, ye) => {
    if (V !== ne) {
      if (V !== tt)
        for (const we in V)
          !Uo(we) && !(we in ne) && i(
            L,
            we,
            V[we],
            null,
            ye,
            ce
          );
      for (const we in ne) {
        if (Uo(we)) continue;
        const Ie = ne[we], Ee = V[we];
        Ie !== Ee && we !== "value" && i(L, we, Ee, Ie, ye, ce);
      }
      "value" in ne && i(L, "value", V.value, ne.value, ye);
    }
  }, X = (L, V, ne, ce, ye, we, Ie, Ee, re) => {
    const he = V.el = L ? L.el : u(""), Ne = V.anchor = L ? L.anchor : u("");
    let { patchFlag: Pe, dynamicChildren: oe, slotScopeIds: J } = V;
    J && (Ee = Ee ? Ee.concat(J) : J), L == null ? (n(he, ne, ce), n(Ne, ne, ce), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      ne,
      Ne,
      ye,
      we,
      Ie,
      Ee,
      re
    )) : Pe > 0 && Pe & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren ? (M(
      L.dynamicChildren,
      oe,
      ne,
      ye,
      we,
      Ie,
      Ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || ye && V === ye.subTree) && tl(
      L,
      V,
      !0
      /* shallow */
    )) : O(
      L,
      V,
      ne,
      Ne,
      ye,
      we,
      Ie,
      Ee,
      re
    );
  }, H = (L, V, ne, ce, ye, we, Ie, Ee, re) => {
    V.slotScopeIds = Ee, L == null ? V.shapeFlag & 512 ? ye.ctx.activate(
      V,
      ne,
      ce,
      Ie,
      re
    ) : se(
      V,
      ne,
      ce,
      ye,
      we,
      Ie,
      re
    ) : Z(L, V, re);
  }, se = (L, V, ne, ce, ye, we, Ie) => {
    const Ee = L.component = Au(
      L,
      ce,
      ye
    );
    if (Kn(L) && (Ee.ctx.renderer = De), Uu(Ee, !1, Ie), Ee.asyncDep) {
      if (ye && ye.registerDep(Ee, N, Ie), !L.el) {
        const re = Ee.subTree = x(bt);
        P(null, re, V, ne), L.placeholder = re.el;
      }
    } else
      N(
        Ee,
        L,
        V,
        ne,
        ye,
        we,
        Ie
      );
  }, Z = (L, V, ne) => {
    const ce = V.component = L.component;
    if (hu(L, V, ne))
      if (ce.asyncDep && !ce.asyncResolved) {
        G(ce, V, ne);
        return;
      } else
        ce.next = V, ce.update();
    else
      V.el = L.el, ce.vnode = V;
  }, N = (L, V, ne, ce, ye, we, Ie) => {
    const Ee = () => {
      if (L.isMounted) {
        let { next: Pe, bu: oe, u: J, parent: Oe, vnode: Ce } = L;
        {
          const Ve = rr(L);
          if (Ve) {
            Pe && (Pe.el = Ce.el, G(L, Pe, Ie)), Ve.asyncDep.then(() => {
              L.isUnmounted || Ee();
            });
            return;
          }
        }
        let $e = Pe, W;
        Ks(L, !1), Pe ? (Pe.el = Ce.el, G(L, Pe, Ie)) : Pe = Ce, oe && kn(oe), (W = Pe.props && Pe.props.onVnodeBeforeUpdate) && us(W, Oe, Pe, Ce), Ks(L, !0);
        const F = xl(L), me = L.subTree;
        L.subTree = F, S(
          me,
          F,
          // parent may have changed if it's in a teleport
          g(me.el),
          // anchor may have changed if it's in a fragment
          ge(me),
          L,
          ye,
          we
        ), Pe.el = F.el, $e === null && yu(L, F.el), J && St(J, ye), (W = Pe.props && Pe.props.onVnodeUpdated) && St(
          () => us(W, Oe, Pe, Ce),
          ye
        );
      } else {
        let Pe;
        const { el: oe, props: J } = V, { bm: Oe, m: Ce, parent: $e, root: W, type: F } = L, me = po(V);
        Ks(L, !1), Oe && kn(Oe), !me && (Pe = J && J.onVnodeBeforeMount) && us(Pe, $e, V), Ks(L, !0);
        {
          W.ce && // @ts-expect-error _def is private
          W.ce._def.shadowRoot !== !1 && W.ce._injectChildStyle(F);
          const Ve = L.subTree = xl(L);
          S(
            null,
            Ve,
            ne,
            ce,
            L,
            ye,
            we
          ), V.el = Ve.el;
        }
        if (Ce && St(Ce, ye), !me && (Pe = J && J.onVnodeMounted)) {
          const Ve = V;
          St(
            () => us(Pe, $e, Ve),
            ye
          );
        }
        (V.shapeFlag & 256 || $e && po($e.vnode) && $e.vnode.shapeFlag & 256) && L.a && St(L.a, ye), L.isMounted = !0, V = ne = ce = null;
      }
    };
    L.scope.on();
    const re = L.effect = new mi(Ee);
    L.scope.off();
    const he = L.update = re.run.bind(re), Ne = L.job = re.runIfDirty.bind(re);
    Ne.i = L, Ne.id = L.uid, re.scheduler = () => Ja(Ne), Ks(L, !0), he();
  }, G = (L, V, ne) => {
    V.component = L;
    const ce = L.vnode.props;
    L.vnode = V, L.next = null, _u(L, V.props, ce, ne), Cu(L, V.children, ne), Ss(), vl(L), Is();
  }, O = (L, V, ne, ce, ye, we, Ie, Ee, re = !1) => {
    const he = L && L.children, Ne = L ? L.shapeFlag : 0, Pe = V.children, { patchFlag: oe, shapeFlag: J } = V;
    if (oe > 0) {
      if (oe & 128) {
        pe(
          he,
          Pe,
          ne,
          ce,
          ye,
          we,
          Ie,
          Ee,
          re
        );
        return;
      } else if (oe & 256) {
        le(
          he,
          Pe,
          ne,
          ce,
          ye,
          we,
          Ie,
          Ee,
          re
        );
        return;
      }
    }
    J & 8 ? (Ne & 16 && ee(he, ye, we), Pe !== he && v(ne, Pe)) : Ne & 16 ? J & 16 ? pe(
      he,
      Pe,
      ne,
      ce,
      ye,
      we,
      Ie,
      Ee,
      re
    ) : ee(he, ye, we, !0) : (Ne & 8 && v(ne, ""), J & 16 && I(
      Pe,
      ne,
      ce,
      ye,
      we,
      Ie,
      Ee,
      re
    ));
  }, le = (L, V, ne, ce, ye, we, Ie, Ee, re) => {
    L = L || fo, V = V || fo;
    const he = L.length, Ne = V.length, Pe = Math.min(he, Ne);
    let oe;
    for (oe = 0; oe < Pe; oe++) {
      const J = V[oe] = re ? Us(V[oe]) : ps(V[oe]);
      S(
        L[oe],
        J,
        ne,
        null,
        ye,
        we,
        Ie,
        Ee,
        re
      );
    }
    he > Ne ? ee(
      L,
      ye,
      we,
      !0,
      !1,
      Pe
    ) : I(
      V,
      ne,
      ce,
      ye,
      we,
      Ie,
      Ee,
      re,
      Pe
    );
  }, pe = (L, V, ne, ce, ye, we, Ie, Ee, re) => {
    let he = 0;
    const Ne = V.length;
    let Pe = L.length - 1, oe = Ne - 1;
    for (; he <= Pe && he <= oe; ) {
      const J = L[he], Oe = V[he] = re ? Us(V[he]) : ps(V[he]);
      if (Xs(J, Oe))
        S(
          J,
          Oe,
          ne,
          null,
          ye,
          we,
          Ie,
          Ee,
          re
        );
      else
        break;
      he++;
    }
    for (; he <= Pe && he <= oe; ) {
      const J = L[Pe], Oe = V[oe] = re ? Us(V[oe]) : ps(V[oe]);
      if (Xs(J, Oe))
        S(
          J,
          Oe,
          ne,
          null,
          ye,
          we,
          Ie,
          Ee,
          re
        );
      else
        break;
      Pe--, oe--;
    }
    if (he > Pe) {
      if (he <= oe) {
        const J = oe + 1, Oe = J < Ne ? V[J].el : ce;
        for (; he <= oe; )
          S(
            null,
            V[he] = re ? Us(V[he]) : ps(V[he]),
            ne,
            Oe,
            ye,
            we,
            Ie,
            Ee,
            re
          ), he++;
      }
    } else if (he > oe)
      for (; he <= Pe; )
        Ae(L[he], ye, we, !0), he++;
    else {
      const J = he, Oe = he, Ce = /* @__PURE__ */ new Map();
      for (he = Oe; he <= oe; he++) {
        const lt = V[he] = re ? Us(V[he]) : ps(V[he]);
        lt.key != null && Ce.set(lt.key, he);
      }
      let $e, W = 0;
      const F = oe - Oe + 1;
      let me = !1, Ve = 0;
      const Qe = new Array(F);
      for (he = 0; he < F; he++) Qe[he] = 0;
      for (he = J; he <= Pe; he++) {
        const lt = L[he];
        if (W >= F) {
          Ae(lt, ye, we, !0);
          continue;
        }
        let ut;
        if (lt.key != null)
          ut = Ce.get(lt.key);
        else
          for ($e = Oe; $e <= oe; $e++)
            if (Qe[$e - Oe] === 0 && Xs(lt, V[$e])) {
              ut = $e;
              break;
            }
        ut === void 0 ? Ae(lt, ye, we, !0) : (Qe[ut - Oe] = he + 1, ut >= Ve ? Ve = ut : me = !0, S(
          lt,
          V[ut],
          ne,
          null,
          ye,
          we,
          Ie,
          Ee,
          re
        ), W++);
      }
      const vt = me ? Eu(Qe) : fo;
      for ($e = vt.length - 1, he = F - 1; he >= 0; he--) {
        const lt = Oe + he, ut = V[lt], Rt = V[lt + 1], Ft = lt + 1 < Ne ? (
          // #13559, fallback to el placeholder for unresolved async component
          Rt.el || Rt.placeholder
        ) : ce;
        Qe[he] === 0 ? S(
          null,
          ut,
          ne,
          Ft,
          ye,
          we,
          Ie,
          Ee,
          re
        ) : me && ($e < 0 || he !== vt[$e] ? Me(ut, ne, Ft, 2) : $e--);
      }
    }
  }, Me = (L, V, ne, ce, ye = null) => {
    const { el: we, type: Ie, transition: Ee, children: re, shapeFlag: he } = L;
    if (he & 6) {
      Me(L.component.subTree, V, ne, ce);
      return;
    }
    if (he & 128) {
      L.suspense.move(V, ne, ce);
      return;
    }
    if (he & 64) {
      Ie.move(L, V, ne, De);
      return;
    }
    if (Ie === K) {
      n(we, V, ne);
      for (let Pe = 0; Pe < re.length; Pe++)
        Me(re[Pe], V, ne, ce);
      n(L.anchor, V, ne);
      return;
    }
    if (Ie === ca) {
      E(L, V, ne);
      return;
    }
    if (ce !== 2 && he & 1 && Ee)
      if (ce === 0)
        Ee.beforeEnter(we), n(we, V, ne), St(() => Ee.enter(we), ye);
      else {
        const { leave: Pe, delayLeave: oe, afterLeave: J } = Ee, Oe = () => {
          L.ctx.isUnmounted ? l(we) : n(we, V, ne);
        }, Ce = () => {
          we._isLeaving && we[bs](
            !0
            /* cancelled */
          ), Pe(we, () => {
            Oe(), J && J();
          });
        };
        oe ? oe(we, Oe, Ce) : Ce();
      }
    else
      n(we, V, ne);
  }, Ae = (L, V, ne, ce = !1, ye = !1) => {
    const {
      type: we,
      props: Ie,
      ref: Ee,
      children: re,
      dynamicChildren: he,
      shapeFlag: Ne,
      patchFlag: Pe,
      dirs: oe,
      cacheIndex: J
    } = L;
    if (Pe === -2 && (ye = !1), Ee != null && (Ss(), Bo(Ee, null, ne, L, !0), Is()), J != null && (V.renderCache[J] = void 0), Ne & 256) {
      V.ctx.deactivate(L);
      return;
    }
    const Oe = Ne & 1 && oe, Ce = !po(L);
    let $e;
    if (Ce && ($e = Ie && Ie.onVnodeBeforeUnmount) && us($e, V, L), Ne & 6)
      B(L.component, ne, ce);
    else {
      if (Ne & 128) {
        L.suspense.unmount(ne, ce);
        return;
      }
      Oe && Hs(L, null, V, "beforeUnmount"), Ne & 64 ? L.type.remove(
        L,
        V,
        ne,
        De,
        ce
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (we !== K || Pe > 0 && Pe & 64) ? ee(
        he,
        V,
        ne,
        !1,
        !0
      ) : (we === K && Pe & 384 || !ye && Ne & 16) && ee(re, V, ne), ce && ue(L);
    }
    (Ce && ($e = Ie && Ie.onVnodeUnmounted) || Oe) && St(() => {
      $e && us($e, V, L), Oe && Hs(L, null, V, "unmounted");
    }, ne);
  }, ue = (L) => {
    const { type: V, el: ne, anchor: ce, transition: ye } = L;
    if (V === K) {
      ie(ne, ce);
      return;
    }
    if (V === ca) {
      C(L);
      return;
    }
    const we = () => {
      l(ne), ye && !ye.persisted && ye.afterLeave && ye.afterLeave();
    };
    if (L.shapeFlag & 1 && ye && !ye.persisted) {
      const { leave: Ie, delayLeave: Ee } = ye, re = () => Ie(ne, we);
      Ee ? Ee(L.el, we, re) : re();
    } else
      we();
  }, ie = (L, V) => {
    let ne;
    for (; L !== V; )
      ne = w(L), l(L), L = ne;
    l(V);
  }, B = (L, V, ne) => {
    const { bum: ce, scope: ye, job: we, subTree: Ie, um: Ee, m: re, a: he } = L;
    El(re), El(he), ce && kn(ce), ye.stop(), we && (we.flags |= 8, Ae(Ie, L, V, ne)), Ee && St(Ee, V), St(() => {
      L.isUnmounted = !0;
    }, V);
  }, ee = (L, V, ne, ce = !1, ye = !1, we = 0) => {
    for (let Ie = we; Ie < L.length; Ie++)
      Ae(L[Ie], V, ne, ce, ye);
  }, ge = (L) => {
    if (L.shapeFlag & 6)
      return ge(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const V = w(L.anchor || L.el), ne = V && V[Di];
    return ne ? w(ne) : V;
  };
  let ve = !1;
  const fe = (L, V, ne) => {
    L == null ? V._vnode && Ae(V._vnode, null, null, !0) : S(
      V._vnode || null,
      L,
      V,
      null,
      null,
      null,
      ne
    ), V._vnode = L, ve || (ve = !0, vl(), Pi(), ve = !1);
  }, De = {
    p: S,
    um: Ae,
    m: Me,
    r: ue,
    mt: se,
    mc: I,
    pc: O,
    pbc: M,
    n: ge,
    o: e
  };
  return {
    render: fe,
    hydrate: void 0,
    createApp: iu(fe)
  };
}
function ra({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ks({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Iu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function tl(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Be(n) && Be(l))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Us(l[i]), u.el = r.el), !o && u.patchFlag !== -2 && tl(r, u)), u.type === Jn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = r.el), u.type === bt && !u.el && (u.el = r.el);
    }
}
function Eu(e) {
  const s = e.slice(), o = [0];
  let n, l, i, r, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[n] = l, o.push(n);
        continue;
      }
      for (i = 0, r = o.length - 1; i < r; )
        u = i + r >> 1, e[o[u]] < m ? i = u + 1 : r = u;
      m < e[o[i]] && (i > 0 && (s[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, r = o[i - 1]; i-- > 0; )
    o[i] = r, r = s[r];
  return o;
}
function rr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : rr(s);
}
function El(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const cr = (e) => e.__isSuspense;
function Tu(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : zc(e);
}
const K = Symbol.for("v-fgt"), Jn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), ca = Symbol.for("v-stc"), Wo = [];
let Nt = null;
function a(e = !1) {
  Wo.push(Nt = e ? null : []);
}
function Pu() {
  Wo.pop(), Nt = Wo[Wo.length - 1] || null;
}
let Xo = 1;
function Ln(e, s = !1) {
  Xo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function ur(e) {
  return e.dynamicChildren = Xo > 0 ? Nt || fo : null, Pu(), Xo > 0 && Nt && Nt.push(e), e;
}
function c(e, s, o, n, l, i) {
  return ur(
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
  return ur(
    x(
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
const dr = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || Ct(e) || Ge(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === K ? 0 : 1, r = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && dr(s),
    ref: s && Cn(s),
    scopeId: Mi,
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
    ctx: yt
  };
  return u ? (sl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ct(o) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Nt.push(d), d;
}
const x = Ru;
function Ru(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Hi) && (e = bt), Qo(e)) {
    const u = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && sl(u, o), Xo > 0 && !i && Nt && (u.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = u : Nt.push(u)), u.patchFlag = -2, u;
  }
  if (Vu(e) && (e = e.__vccOpts), s) {
    s = Mu(s);
    let { class: u, style: d } = s;
    u && !ct(u) && (s.class = Te(u)), et(d) && (Ya(d) && !Be(d) && (d = pt({}, d)), s.style = Kt(d));
  }
  const r = ct(e) ? 1 : cr(e) ? 128 : Li(e) ? 64 : et(e) ? 4 : Ge(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    n,
    l,
    r,
    i,
    !0
  );
}
function Mu(e) {
  return e ? Ya(e) || sr(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: r, children: u, transition: d } = e, m = s ? Du(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && dr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat(Cn(s)) : [i, Cn(s)] : Cn(s)
    ) : i,
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
    patchFlag: s && e.type !== K ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && zs(e.ssContent),
    ssFallback: e.ssFallback && zs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && to(
    v,
    d.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return x(Jn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), R(bt, null, e)) : x(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? x(bt) : Be(e) ? x(
    K,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qo(e) ? Us(e) : x(Jn, null, String(e));
}
function Us(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zs(e);
}
function sl(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Be(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), sl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !sr(s) ? s._ctx = yt : l === 3 && yt && (yt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Du(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Te([s.class, n.class]));
      else if (l === "style")
        s.style = Kt([s.style, n.style]);
      else if (Fn(l)) {
        const i = s[l], r = n[l];
        r && i !== r && !(Be(i) && i.includes(r)) && (s[l] = i ? [].concat(i, r) : r);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function us(e, s, o, n = null) {
  os(e, s, 7, [
    o,
    n
  ]);
}
const Lu = Ji();
let Ou = 0;
function Au(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Lu, i = {
    uid: Ou++,
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
    scope: new rc(
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
    propsOptions: nr(n, l),
    emitsOptions: Zi(n, l),
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = mu.bind(null, i), e.ce && e.ce(i), i;
}
let $t = null;
const ol = () => $t || yt;
let On, Ta;
{
  const e = Gn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((r) => r(i)) : l[0](i);
    };
  };
  On = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => $t = o
  ), Ta = s(
    "__VUE_SSR_SETTERS__",
    (o) => Zo = o
  );
}
const on = (e) => {
  const s = $t;
  return On(e), e.scope.on(), () => {
    e.scope.off(), On(s);
  };
}, Tl = () => {
  $t && $t.scope.off(), On(null);
};
function fr(e) {
  return e.vnode.shapeFlag & 4;
}
let Zo = !1;
function Uu(e, s = !1, o = !1) {
  s && Ta(s);
  const { props: n, children: l } = e.vnode, i = fr(e);
  wu(e, n, i, s), $u(e, l, o || s);
  const r = i ? Nu(e, s) : void 0;
  return s && Ta(!1), r;
}
function Nu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eu);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? Fu(e) : null, i = on(e), r = sn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = li(r);
    if (Is(), i(), (u || e.sp) && !po(e) && Vi(e), u) {
      if (r.then(Tl, Tl), s)
        return r.then((d) => {
          Pl(e, d);
        }).catch((d) => {
          Hn(d, e, 0);
        });
      e.asyncDep = r;
    } else
      Pl(e, r);
  } else
    mr(e);
}
function Pl(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : et(s) && (e.setupState = Ii(s)), mr(e);
}
function mr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = on(e);
    Ss();
    try {
      tu(e);
    } finally {
      Is(), l();
    }
  }
}
const zu = {
  get(e, s) {
    return _t(e, "get", ""), e[s];
  }
};
function Fu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, zu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Xn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ii(Tc(e.exposed)), {
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
function Bu(e, s = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Vu(e) {
  return Ge(e) && "__vccOpts" in e;
}
const U = (e, s) => Lc(e, s, Zo);
function nn(e, s, o) {
  try {
    Ln(-1);
    const n = arguments.length;
    return n === 2 ? et(s) && !Be(s) ? Qo(s) ? x(e, null, [s]) : x(e, s) : x(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Qo(o) && (o = [o]), x(e, s, o));
  } finally {
    Ln(1);
  }
}
const Wu = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Pa;
const Rl = typeof window < "u" && window.trustedTypes;
if (Rl)
  try {
    Pa = /* @__PURE__ */ Rl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const vr = Pa ? (e) => Pa.createHTML(e) : (e) => e, Gu = "http://www.w3.org/2000/svg", ju = "http://www.w3.org/1998/Math/MathML", ks = typeof document < "u" ? document : null, Ml = ks && /* @__PURE__ */ ks.createElement("template"), Hu = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ks.createElementNS(Gu, e) : s === "mathml" ? ks.createElementNS(ju, e) : o ? ks.createElement(e, { is: o }) : ks.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
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
  insertStaticContent(e, s, o, n, l, i) {
    const r = o ? o.previousSibling : s.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      Ml.innerHTML = vr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Ml.content;
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
      r ? r.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Ds = "transition", Po = "animation", wo = Symbol("_vtc"), pr = {
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
}, gr = /* @__PURE__ */ pt(
  {},
  Ni,
  pr
), Ku = (e) => (e.displayName = "Transition", e.props = gr, e), qu = /* @__PURE__ */ Ku(
  (e, { slots: s }) => nn(Vc, hr(e), s)
), qs = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Dl = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function hr(e) {
  const s = {};
  for (const X in e)
    X in pr || (s[X] = e[X]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: r = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = i,
    appearActiveClass: m = r,
    appearToClass: v = u,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = Yu(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: D,
    onEnterCancelled: E,
    onLeave: C,
    onLeaveCancelled: j,
    onBeforeAppear: q = P,
    onAppear: z = D,
    onAppearCancelled: I = E
  } = s, T = (X, H, se, Z) => {
    X._enterCancelled = Z, Ls(X, H ? v : u), Ls(X, H ? m : r), se && se();
  }, M = (X, H) => {
    X._isLeaving = !1, Ls(X, g), Ls(X, p), Ls(X, w), H && H();
  }, te = (X) => (H, se) => {
    const Z = X ? z : D, N = () => T(H, X, se);
    qs(Z, [H, N]), Ll(() => {
      Ls(H, X ? d : i), fs(H, X ? v : u), Dl(Z) || Ol(H, n, S, N);
    });
  };
  return pt(s, {
    onBeforeEnter(X) {
      qs(P, [X]), fs(X, i), fs(X, r);
    },
    onBeforeAppear(X) {
      qs(q, [X]), fs(X, d), fs(X, m);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(X, H) {
      X._isLeaving = !0;
      const se = () => M(X, H);
      fs(X, g), X._enterCancelled ? (fs(X, w), Ra(X)) : (Ra(X), fs(X, w)), Ll(() => {
        X._isLeaving && (Ls(X, g), fs(X, p), Dl(C) || Ol(X, n, $, se));
      }), qs(C, [X, se]);
    },
    onEnterCancelled(X) {
      T(X, !1, void 0, !0), qs(E, [X]);
    },
    onAppearCancelled(X) {
      T(X, !0, void 0, !0), qs(I, [X]);
    },
    onLeaveCancelled(X) {
      M(X), qs(j, [X]);
    }
  });
}
function Yu(e) {
  if (e == null)
    return null;
  if (et(e))
    return [ua(e.enter), ua(e.leave)];
  {
    const s = ua(e);
    return [s, s];
  }
}
function ua(e) {
  return ec(e);
}
function fs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[wo] || (e[wo] = /* @__PURE__ */ new Set())).add(s);
}
function Ls(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[wo];
  o && (o.delete(s), o.size || (e[wo] = void 0));
}
function Ll(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ju = 0;
function Ol(e, s, o, n) {
  const l = e._endId = ++Ju, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: r, timeout: u, propCount: d } = yr(e, s);
  if (!r)
    return n();
  const m = r + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(m, w), i();
  }, w = (p) => {
    p.target === e && ++v >= d && g();
  };
  setTimeout(() => {
    v < d && g();
  }, u + 1), e.addEventListener(m, w);
}
function yr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ds}Delay`), i = n(`${Ds}Duration`), r = Al(l, i), u = n(`${Po}Delay`), d = n(`${Po}Duration`), m = Al(u, d);
  let v = null, g = 0, w = 0;
  s === Ds ? r > 0 && (v = Ds, g = r, w = i.length) : s === Po ? m > 0 && (v = Po, g = m, w = d.length) : (g = Math.max(r, m), v = g > 0 ? r > m ? Ds : Po : null, w = v ? v === Ds ? i.length : d.length : 0);
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
function Al(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Ul(o) + Ul(e[n])));
}
function Ul(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ra(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Xu(e, s, o) {
  const n = e[wo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Nl = Symbol("_vod"), Qu = Symbol("_vsh"), Zu = Symbol(""), ed = /(?:^|;)\s*display\s*:/;
function td(e, s, o) {
  const n = e.style, l = ct(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ct(s))
        for (const r of s.split(";")) {
          const u = r.slice(0, r.indexOf(":")).trim();
          o[u] == null && xn(n, u, "");
        }
      else
        for (const r in s)
          o[r] == null && xn(n, r, "");
    for (const r in o)
      r === "display" && (i = !0), xn(n, r, o[r]);
  } else if (l) {
    if (s !== o) {
      const r = n[Zu];
      r && (o += ";" + r), n.cssText = o, i = ed.test(o);
    }
  } else s && e.removeAttribute("style");
  Nl in e && (e[Nl] = i ? n.display : "", e[Qu] && (n.display = "none"));
}
const zl = /\s*!important$/;
function xn(e, s, o) {
  if (Be(o))
    o.forEach((n) => xn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = sd(e, s);
    zl.test(o) ? e.setProperty(
      Bs(n),
      o.replace(zl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Fl = ["Webkit", "Moz", "ms"], da = {};
function sd(e, s) {
  const o = da[s];
  if (o)
    return o;
  let n = Ht(s);
  if (n !== "filter" && n in e)
    return da[s] = n;
  n = Vn(n);
  for (let l = 0; l < Fl.length; l++) {
    const i = Fl[l] + n;
    if (i in e)
      return da[s] = i;
  }
  return s;
}
const Bl = "http://www.w3.org/1999/xlink";
function Vl(e, s, o, n, l, i = lc(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Bl, s.slice(6, s.length)) : e.setAttributeNS(Bl, s, o) : o == null || i && !ui(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : ts(o) ? String(o) : o
  );
}
function Wl(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? vr(o) : o);
    return;
  }
  const i = e.tagName;
  if (s === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let r = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = ui(o) : o == null && u === "string" ? (o = "", r = !0) : u === "number" && (o = 0, r = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  r && e.removeAttribute(l || s);
}
function xs(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function od(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Gl = Symbol("_vei");
function nd(e, s, o, n, l = null) {
  const i = e[Gl] || (e[Gl] = {}), r = i[s];
  if (n && r)
    r.value = n;
  else {
    const [u, d] = ad(s);
    if (n) {
      const m = i[s] = rd(
        n,
        l
      );
      xs(e, u, m, d);
    } else r && (od(e, u, r, d), i[s] = void 0);
  }
}
const jl = /(?:Once|Passive|Capture)$/;
function ad(e) {
  let s;
  if (jl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(jl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let fa = 0;
const ld = /* @__PURE__ */ Promise.resolve(), id = () => fa || (ld.then(() => fa = 0), fa = Date.now());
function rd(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      cd(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = id(), o;
}
function cd(e, s) {
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
const Hl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ud = (e, s, o, n, l, i) => {
  const r = l === "svg";
  s === "class" ? Xu(e, n, r) : s === "style" ? td(e, o, n) : Fn(s) ? za(s) || nd(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : dd(e, s, n, r)) ? (Wl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Vl(e, s, n, r, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? Wl(e, Ht(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Vl(e, s, n, r));
};
function dd(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Hl(s) && Ge(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Hl(s) && ct(o) ? !1 : s in e;
}
const wr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), An = Symbol("_moveCb"), Kl = Symbol("_enterCb"), fd = (e) => (delete e.props.mode, e), md = /* @__PURE__ */ fd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, gr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = ol(), n = Ui();
    let l, i;
    return Gi(() => {
      if (!l.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!yd(
        l[0].el,
        o.vnode.el,
        r
      )) {
        l = [];
        return;
      }
      l.forEach(pd), l.forEach(gd);
      const u = l.filter(hd);
      Ra(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, r), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[An] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[An] = null, Ls(m, r));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const r = Je(e), u = hr(r);
      let d = r.tag || K;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), to(
            v,
            Jo(
              v,
              u,
              n,
              o
            )
          ), wr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Xa(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && to(
          v,
          Jo(v, u, n, o)
        );
      }
      return x(d, null, i);
    };
  }
}), vd = md;
function pd(e) {
  const s = e.el;
  s[An] && s[An](), s[Kl] && s[Kl]();
}
function gd(e) {
  _r.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function hd(e) {
  const s = wr.get(e), o = _r.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function yd(e, s, o) {
  const n = e.cloneNode(), l = e[wo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: r } = yr(n);
  return i.removeChild(n), r;
}
const Fs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => kn(s, o) : s;
};
function wd(e) {
  e.target.composing = !0;
}
function ql(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const jt = Symbol("_assign");
function Yl(e, s, o) {
  return s && (e = e.trim()), o && (e = Wn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[jt] = Fs(l);
    const i = n || l.props && l.props.type === "number";
    xs(e, s ? "change" : "input", (r) => {
      r.target.composing || e[jt](Yl(e.value, o, i));
    }), (o || i) && xs(e, "change", () => {
      e.value = Yl(e.value, o, i);
    }), s || (xs(e, "compositionstart", wd), xs(e, "compositionend", ql), xs(e, "change", ql));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, r) {
    if (e[jt] = Fs(r), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Wn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, en = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[jt] = Fs(o), xs(e, "change", () => {
      const n = e._modelValue, l = _o(e), i = e.checked, r = e[jt];
      if (Be(n)) {
        const u = Va(n, l), d = u !== -1;
        if (i && !d)
          r(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), r(m);
        }
      } else if (ko(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), r(u);
      } else
        r(kr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Jl,
  beforeUpdate(e, s, o) {
    e[jt] = Fs(o), Jl(e, s, o);
  }
};
function Jl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Be(s))
    l = Va(s, n.props.value) > -1;
  else if (ko(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = eo(s, kr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Qt = {
  created(e, { value: s }, o) {
    e.checked = eo(s, o.props.value), e[jt] = Fs(o), xs(e, "change", () => {
      e[jt](_o(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[jt] = Fs(n), s !== o && (e.checked = eo(s, n.props.value));
  }
}, hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = ko(s);
    xs(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => o ? Wn(_o(r)) : _o(r)
      );
      e[jt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, kt(() => {
        e._assigning = !1;
      });
    }), e[jt] = Fs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Xl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[jt] = Fs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Xl(e, s);
  }
};
function Xl(e, s) {
  const o = e.multiple, n = Be(s);
  if (!(o && !n && !ko(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const r = e.options[l], u = _o(r);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? r.selected = s.some((m) => String(m) === String(u)) : r.selected = Va(s, u) > -1;
        } else
          r.selected = s.has(u);
      else if (eo(_o(r), s)) {
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
function kr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Qn = {
  created(e, s, o) {
    gn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    gn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    gn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    gn(e, s, o, n, "updated");
  }
};
function _d(e, s) {
  switch (e) {
    case "SELECT":
      return hs;
    case "TEXTAREA":
      return zt;
    default:
      switch (s) {
        case "checkbox":
          return en;
        case "radio":
          return Qt;
        default:
          return zt;
      }
  }
}
function gn(e, s, o, n, l) {
  const r = _d(
    e.tagName,
    o.props && o.props.type
  )[l];
  r && r(e, s, o, n);
}
const kd = ["ctrl", "shift", "alt", "meta"], bd = {
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
  exact: (e, s) => kd.some((o) => e[`${o}Key`] && !s.includes(o))
}, at = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let r = 0; r < s.length; r++) {
      const u = bd[s[r]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, $d = {
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
    const i = Bs(l.key);
    if (s.some(
      (r) => r === i || $d[r] === i
    ))
      return e(l);
  }));
}, Cd = /* @__PURE__ */ pt({ patchProp: ud }, Hu);
let Ql;
function xd() {
  return Ql || (Ql = xu(Cd));
}
const Zn = ((...e) => {
  const s = xd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = Id(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const r = o(l, !1, Sd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), r;
  }, s;
});
function Sd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Id(e) {
  return ct(e) ? document.querySelector(e) : e;
}
const Ed = { class: "panel-layout" }, Td = {
  key: 0,
  class: "panel-layout-header"
}, Pd = {
  key: 1,
  class: "panel-layout-search"
}, Rd = { class: "panel-layout-content" }, Md = {
  key: 2,
  class: "panel-layout-footer"
}, Dd = /* @__PURE__ */ _e({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), c("div", Ed, [
      s.$slots.header ? (a(), c("div", Td, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), c("div", Pd, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Rd, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), c("div", Md, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ke = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ ke(Dd, [["__scopeId", "data-v-21565df9"]]), Ld = {
  key: 0,
  class: "panel-title-prefix"
}, Od = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ad = /* @__PURE__ */ _e({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), R(Qa(`h${e.level}`), {
      class: Te(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), c("span", Ld, f(e.prefix), 1)) : (a(), c("span", Od)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ud = /* @__PURE__ */ ke(Ad, [["__scopeId", "data-v-c3875efc"]]), Nd = ["title"], zd = ["width", "height"], Fd = /* @__PURE__ */ _e({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), c("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => s.$emit("click"))
    }, [
      (a(), c("svg", {
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
      ])], 8, zd))
    ], 8, Nd));
  }
}), br = /* @__PURE__ */ ke(Fd, [["__scopeId", "data-v-6fc7f16d"]]), Bd = { class: "header-left" }, Vd = {
  key: 0,
  class: "header-actions"
}, Wd = /* @__PURE__ */ _e({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Bd, [
        x(Ud, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(br, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), c("div", Vd, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ ke(Wd, [["__scopeId", "data-v-55a62cd6"]]), Gd = {
  key: 0,
  class: "section-title-count"
}, jd = {
  key: 1,
  class: "section-title-icon"
}, Hd = /* @__PURE__ */ _e({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), R(Qa(`h${e.level}`), {
      class: Te(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Gd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), c("span", jd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ut = /* @__PURE__ */ ke(Hd, [["__scopeId", "data-v-559361eb"]]), Kd = { class: "status-grid" }, qd = { class: "status-grid__columns" }, Yd = { class: "status-grid__column" }, Jd = { class: "status-grid__title" }, Xd = { class: "status-grid__column status-grid__column--right" }, Qd = { class: "status-grid__title" }, Zd = {
  key: 0,
  class: "status-grid__footer"
}, ef = /* @__PURE__ */ _e({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", Kd, [
      t("div", qd, [
        t("div", Yd, [
          t("h4", Jd, f(e.leftTitle), 1),
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", Xd, [
          t("h4", Qd, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), c("div", Zd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), tf = /* @__PURE__ */ ke(ef, [["__scopeId", "data-v-73b7ba3f"]]), sf = {
  key: 0,
  class: "status-item__icon"
}, of = {
  key: 1,
  class: "status-item__count"
}, nf = { class: "status-item__label" }, af = /* @__PURE__ */ _e({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = U(() => `status-item--${s.variant}`);
    return (n, l) => (a(), c("div", {
      class: Te(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), c("span", sf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), c("span", of, f(e.count), 1)) : y("", !0),
      t("span", nf, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ ke(af, [["__scopeId", "data-v-6f929183"]]), lf = { class: "issue-card__header" }, rf = { class: "issue-card__icon" }, cf = { class: "issue-card__title" }, uf = {
  key: 0,
  class: "issue-card__content"
}, df = {
  key: 0,
  class: "issue-card__description"
}, ff = {
  key: 1,
  class: "issue-card__items"
}, mf = {
  key: 2,
  class: "issue-card__actions"
}, vf = /* @__PURE__ */ _e({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = U(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), c("div", {
      class: Te(["issue-card", o.value])
    }, [
      t("div", lf, [
        t("span", rf, f(e.icon), 1),
        t("h4", cf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), c("div", uf, [
        e.description ? (a(), c("p", df, f(e.description), 1)) : y("", !0),
        Ke(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), c("div", ff, [
        (a(!0), c(K, null, be(e.items, (i, r) => (a(), c("div", {
          key: r,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), c("div", mf, [
        Ke(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Jt = /* @__PURE__ */ ke(vf, [["__scopeId", "data-v-df6aa348"]]), pf = ["type", "disabled"], gf = {
  key: 0,
  class: "spinner"
}, hf = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Te(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", gf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, pf));
  }
}), de = /* @__PURE__ */ ke(hf, [["__scopeId", "data-v-772abe47"]]), yf = { class: "empty-state" }, wf = {
  key: 0,
  class: "empty-icon"
}, _f = { class: "empty-message" }, kf = /* @__PURE__ */ _e({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), c("div", yf, [
      e.icon ? (a(), c("div", wf, f(e.icon), 1)) : y("", !0),
      t("p", _f, f(e.message), 1),
      e.actionLabel ? (a(), R(de, {
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
}), ns = /* @__PURE__ */ ke(kf, [["__scopeId", "data-v-4466284f"]]), bf = /* @__PURE__ */ _e({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: Te(["detail-label"]),
      style: Kt({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Sn = /* @__PURE__ */ ke(bf, [["__scopeId", "data-v-75e9eeb8"]]), $f = /* @__PURE__ */ _e({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("span", {
      class: Te(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ ke($f, [["__scopeId", "data-v-2f186e4c"]]), Cf = { class: "detail-row" }, xf = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), c("div", Cf, [
      x(Sn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(Ma, {
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
}), dt = /* @__PURE__ */ ke(xf, [["__scopeId", "data-v-ef15664a"]]), Sf = { class: "modal-header" }, If = { class: "modal-body" }, Ef = { class: "status-section" }, Tf = {
  key: 0,
  class: "status-section"
}, Pf = { class: "section-header-row" }, Rf = {
  key: 0,
  class: "workflow-group"
}, Mf = { class: "workflow-group-header" }, Df = { class: "workflow-group-title" }, Lf = { class: "workflow-list" }, Of = { class: "workflow-name" }, Af = { class: "workflow-issue" }, Uf = {
  key: 1,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, zf = { class: "workflow-group-title" }, Ff = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Vf = { class: "workflow-issue" }, Wf = {
  key: 2,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, qf = {
  key: 3,
  class: "workflow-group"
}, Yf = { class: "workflow-group-header" }, Jf = { class: "workflow-group-title" }, Xf = { class: "workflow-list" }, Qf = { class: "workflow-name" }, Zf = {
  key: 4,
  class: "workflow-group"
}, em = { class: "workflow-group-header" }, tm = { class: "workflow-group-title" }, sm = { class: "workflow-list" }, om = { class: "workflow-name" }, nm = {
  key: 5,
  class: "workflow-group"
}, am = { class: "workflow-group-title" }, lm = { class: "expand-icon" }, im = {
  key: 0,
  class: "workflow-list"
}, rm = { class: "workflow-name" }, cm = {
  key: 1,
  class: "status-section"
}, um = {
  key: 0,
  class: "change-group"
}, dm = { class: "change-group-header" }, fm = { class: "change-group-title" }, mm = { class: "change-list" }, vm = { class: "node-name" }, pm = {
  key: 0,
  class: "dev-badge"
}, gm = {
  key: 1,
  class: "change-group"
}, hm = { class: "change-group-header" }, ym = { class: "change-group-title" }, wm = { class: "change-list" }, _m = { class: "node-name" }, km = {
  key: 0,
  class: "dev-badge"
}, bm = {
  key: 2,
  class: "change-group"
}, $m = { class: "change-list" }, Cm = { class: "change-item" }, xm = { class: "node-name" }, Sm = {
  key: 3,
  class: "change-group"
}, Im = {
  key: 2,
  class: "status-section"
}, Em = { class: "section-header-row" }, Tm = {
  key: 0,
  class: "drift-item"
}, Pm = { class: "drift-list" }, Rm = {
  key: 0,
  class: "drift-list-more"
}, Mm = {
  key: 1,
  class: "drift-item"
}, Dm = { class: "drift-list" }, Lm = {
  key: 0,
  class: "drift-list-more"
}, Om = {
  key: 2,
  class: "drift-item"
}, Am = { class: "drift-list" }, Um = { class: "version-actual" }, Nm = { class: "version-expected" }, zm = {
  key: 0,
  class: "drift-list-more"
}, Fm = {
  key: 3,
  class: "drift-item"
}, Bm = { class: "repair-action" }, Vm = {
  key: 3,
  class: "status-section"
}, Wm = { class: "info-box" }, Gm = { class: "drift-list" }, jm = {
  key: 0,
  class: "drift-list-more"
}, Hm = {
  key: 4,
  class: "status-section"
}, Km = { class: "warning-box" }, qm = {
  key: 5,
  class: "empty-state-inline"
}, Ym = { class: "modal-actions" }, Jm = /* @__PURE__ */ _e({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    Xe(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), gt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), i = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((S) => {
        var P, D, E;
        const $ = (E = (D = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : E.find((C) => C.name === S);
        return !$ || $.status !== "broken";
      })) || [];
    }), r = U(() => {
      var w, p, _, S, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = U(() => {
      var p, _, S;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = U(() => {
      var w, p, _, S, $, P;
      return !r.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = U(() => {
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
      var _, S, $, P, D, E, C, j, q, z, I, T, M, te, X, H, se, Z, N, G, O, le;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (pe) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = at(() => {
            }, ["stop"]))
          }, [
            t("div", Sf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (pe) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", If, [
              t("div", Ef, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                x(dt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              r.value ? (a(), c("div", Tf, [
                t("div", Pf, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (pe) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), c("div", Rf, [
                  t("div", Mf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Df, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Lf, [
                    (a(!0), c(K, null, be(n.value, (pe) => (a(), c("div", {
                      key: pe.name,
                      class: "workflow-item"
                    }, [
                      t("span", Of, f(pe.name), 1),
                      t("span", Af, f(pe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), c("div", Uf, [
                  t("div", Nf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", zf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Ff, [
                    (a(!0), c(K, null, be(l.value, (pe) => (a(), c("div", {
                      key: pe.name,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, f(pe.name), 1),
                      t("span", Vf, f(pe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), c("div", Wf, [
                  t("div", Gf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", jf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Hf, [
                    (a(!0), c(K, null, be(e.status.workflows.new, (pe) => (a(), c("div", {
                      key: pe,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, f(pe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), c("div", qf, [
                  t("div", Yf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Jf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Xf, [
                    (a(!0), c(K, null, be(e.status.workflows.modified, (pe) => (a(), c("div", {
                      key: pe,
                      class: "workflow-item"
                    }, [
                      t("span", Qf, f(pe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (D = e.status.workflows) == null ? void 0 : D.deleted) != null && E.length ? (a(), c("div", Zf, [
                  t("div", em, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", tm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", sm, [
                    (a(!0), c(K, null, be(e.status.workflows.deleted, (pe) => (a(), c("div", {
                      key: pe,
                      class: "workflow-item"
                    }, [
                      t("span", om, f(pe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), c("div", nm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (pe) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", am, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", lm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), c("div", im, [
                    (a(!0), c(K, null, be(i.value, (pe) => (a(), c("div", {
                      key: pe,
                      class: "workflow-item"
                    }, [
                      t("span", rm, f(pe), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), c("div", cm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (j = (C = e.status.git_changes) == null ? void 0 : C.nodes_added) != null && j.length ? (a(), c("div", um, [
                  t("div", dm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", fm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", mm, [
                    (a(!0), c(K, null, be(e.status.git_changes.nodes_added, (pe) => (a(), c("div", {
                      key: v(pe),
                      class: "change-item"
                    }, [
                      t("span", vm, f(v(pe)), 1),
                      g(pe) ? (a(), c("span", pm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (z = (q = e.status.git_changes) == null ? void 0 : q.nodes_removed) != null && z.length ? (a(), c("div", gm, [
                  t("div", hm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", ym, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", wm, [
                    (a(!0), c(K, null, be(e.status.git_changes.nodes_removed, (pe) => (a(), c("div", {
                      key: v(pe),
                      class: "change-item"
                    }, [
                      t("span", _m, f(v(pe)), 1),
                      g(pe) ? (a(), c("span", km, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), c("div", bm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", $m, [
                    t("div", Cm, [
                      t("span", xm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.has_other_changes ? (a(), c("div", Sm, [...p[21] || (p[21] = [
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
              (M = e.status.comparison) != null && M.is_synced ? y("", !0) : (a(), c("div", Im, [
                t("div", Em, [
                  x(Ut, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (pe) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (X = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && X.length ? (a(), c("div", Tm, [
                  x(dt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Pm, [
                    (a(!0), c(K, null, be(e.status.comparison.missing_nodes.slice(0, 10), (pe) => (a(), c("div", {
                      key: pe,
                      class: "drift-list-item"
                    }, " - " + f(pe), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), c("div", Rm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (se = (H = e.status.comparison) == null ? void 0 : H.extra_nodes) != null && se.length ? (a(), c("div", Mm, [
                  x(dt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Dm, [
                    (a(!0), c(K, null, be(e.status.comparison.extra_nodes.slice(0, 10), (pe) => (a(), c("div", {
                      key: pe,
                      class: "drift-list-item"
                    }, " - " + f(pe), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), c("div", Lm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (N = (Z = e.status.comparison) == null ? void 0 : Z.version_mismatches) != null && N.length ? (a(), c("div", Om, [
                  x(dt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Am, [
                    (a(!0), c(K, null, be(e.status.comparison.version_mismatches.slice(0, 10), (pe) => (a(), c("div", {
                      key: pe.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(pe.name) + ": ", 1),
                      t("span", Um, f(pe.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Nm, f(pe.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), c("div", zm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((G = e.status.comparison) == null ? void 0 : G.packages_in_sync) === !1 ? (a(), c("div", Fm, [
                  x(dt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Bm, [
                  x(de, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (pe) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (le = (O = e.status.comparison) == null ? void 0 : O.disabled_nodes) != null && le.length ? (a(), c("div", Vm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Wm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Gm, [
                  (a(!0), c(K, null, be(e.status.comparison.disabled_nodes.slice(0, 10), (pe) => (a(), c("div", {
                    key: pe,
                    class: "drift-list-item"
                  }, " • " + f(pe), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), c("div", jm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), c("div", Hm, [
                x(Ut, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Km, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), c("div", qm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Ym, [
              x(de, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (pe) => w.$emit("close"))
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
}), Xm = /* @__PURE__ */ ke(Jm, [["__scopeId", "data-v-e2b37122"]]), Qm = { class: "health-section-header" }, Zm = { class: "suggestions-content" }, ev = { class: "suggestions-text" }, tv = { style: { "margin-top": "var(--cg-space-3)" } }, sv = {
  key: 1,
  class: "no-issues-text"
}, ov = /* @__PURE__ */ _e({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = k(!1), i = k(!1);
    function r() {
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
    const S = U(() => {
      const Z = n.status.workflows.analyzed || [], N = Z.filter(
        (G) => G.unresolved_models_count > 0 || G.ambiguous_models_count > 0
      );
      return N.length === 0 && n.status.missing_models_count > 0 ? Z.filter((G) => G.sync_state === "synced") : N;
    });
    function $() {
      const Z = S.value;
      Z.length !== 0 && (v.value = !0, m("repair-missing-models", Z.map((N) => N.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const D = U(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), E = U(() => n.status.has_changes), C = U(() => {
      const Z = n.status.git_changes;
      return Z.nodes_added.length > 0 || Z.nodes_removed.length > 0 || Z.workflow_changes;
    }), j = U(() => n.status.has_changes || D.value), q = U(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), z = U(() => n.status.git_changes.has_other_changes), I = U(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter((N) => N.status === "broken")) || [];
    }), T = U(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), M = U(() => I.value.length > 0), te = U(() => M.value || T.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), X = U(() => {
      const Z = [];
      return n.status.workflows.new.length > 0 && Z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Z.push(`${n.status.workflows.deleted.length} deleted`), Z.length > 0 ? `${Z.join(", ")} workflow${Z.length === 1 && !Z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), H = U(() => {
      var G, O;
      const Z = [], N = n.status.comparison;
      return (G = N.missing_nodes) != null && G.length && Z.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (O = N.extra_nodes) != null && O.length && Z.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), Z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Z.join(" and ")}.`;
    }), se = U(() => {
      var G, O;
      const Z = [], N = n.status.comparison;
      return (G = N.extra_nodes) != null && G.length && (N.extra_nodes.slice(0, 3).forEach((le) => {
        Z.push(`Untracked: ${le}`);
      }), N.extra_nodes.length > 3 && Z.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (O = N.missing_nodes) != null && O.length && (N.missing_nodes.slice(0, 3).forEach((le) => {
        Z.push(`Missing: ${le}`);
      }), N.missing_nodes.length > 3 && Z.push(`...and ${N.missing_nodes.length - 3} more missing`)), Z;
    });
    return (Z, N) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), R(Jt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (G) => Z.$emit("start-setup"))
              }, {
                default: h(() => [...N[13] || (N[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), R(Jt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (G) => Z.$emit("view-environments"))
              }, {
                default: h(() => [...N[14] || (N[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), R(Jt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (G) => Z.$emit("create-environment"))
              }, {
                default: h(() => [...N[15] || (N[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (G) => i.value = !0),
            onMouseleave: N[5] || (N[5] = (G) => i.value = !1)
          }, [
            t("div", Qm, [
              x(Ut, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...N[16] || (N[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              x(qu, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), R(de, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: r
                  }, {
                    default: h(() => [...N[17] || (N[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            x(tf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, so({
              left: h(() => [
                e.status.workflows.new.length ? (a(), R(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(ds, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                x(ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: D.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(ds, {
                  key: 2,
                  icon: "●",
                  count: q.value,
                  label: q.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                z.value ? (a(), R(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                E.value && !C.value && !z.value ? (a(), R(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                E.value ? y("", !0) : (a(), R(ds, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              j.value ? {
                name: "footer",
                fn: h(() => [
                  N[19] || (N[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", Zm, [
                    t("span", ev, f(X.value), 1),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (G) => Z.$emit("commit-changes"))
                    }, {
                      default: h(() => [...N[18] || (N[18] = [
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
          e.status.is_detached_head ? (a(), R(Jt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (G) => Z.$emit("create-branch"))
              }, {
                default: h(() => [...N[20] || (N[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", tv, [
            x(Ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...N[21] || (N[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            te.value ? (a(), c(K, { key: 0 }, [
              I.value.length > 0 ? (a(), R(Jt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((G) => `${G.name} — ${G.issue_summary}`)
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (G) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...N[22] || (N[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              T.value.length > 0 ? (a(), R(Jt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((G) => `${G.name} — ${G.models_needing_path_sync_count} model path${G.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (G) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...N[23] || (N[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !M.value ? (a(), R(Jt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  x(de, {
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
                  x(de, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (G) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...N[24] || (N[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), R(Jt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: H.value,
                items: se.value
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r
                  }, {
                    default: h(() => [...N[25] || (N[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (G) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...N[26] || (N[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), R(Jt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (G) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...N[27] || (N[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : j.value ? (a(), c("span", sv, "No issues")) : (a(), R(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      x(Xm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: N[12] || (N[12] = (G) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), nv = /* @__PURE__ */ ke(ov, [["__scopeId", "data-v-55fcd77f"]]), av = ["type", "value", "placeholder", "disabled"], lv = /* @__PURE__ */ _e({
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
    function r(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return Xe(() => {
      n.autoFocus && i.value && i.value.focus();
    }), s({
      focus: () => {
        var u;
        return (u = i.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = i.value) == null ? void 0 : u.blur();
      }
    }), (u, d) => (a(), c("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Te(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: r,
      onKeyup: [
        d[0] || (d[0] = es((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = es((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, av));
  }
}), Un = /* @__PURE__ */ ke(lv, [["__scopeId", "data-v-0380d08f"]]), iv = { class: "branch-create-form" }, rv = { class: "form-actions" }, cv = /* @__PURE__ */ _e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = U(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function r() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), c("div", iv, [
      x(Un, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: r
      }, null, 8, ["modelValue"]),
      t("div", rv, [
        x(de, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: h(() => [...d[1] || (d[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        x(de, {
          variant: "secondary",
          size: "sm",
          onClick: r
        }, {
          default: h(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), uv = /* @__PURE__ */ ke(cv, [["__scopeId", "data-v-7c500394"]]), dv = { class: "branch-list-item__indicator" }, fv = { class: "branch-list-item__name" }, mv = {
  key: 0,
  class: "branch-list-item__actions"
}, vv = {
  key: 0,
  class: "branch-list-item__current-label"
}, pv = /* @__PURE__ */ _e({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", dv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", fv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), c("div", mv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), c("span", vv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), gv = /* @__PURE__ */ ke(pv, [["__scopeId", "data-v-c6581a24"]]), hv = {
  key: 2,
  class: "branch-list"
}, yv = /* @__PURE__ */ _e({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(r) {
      o("create", r), i();
    }
    function i() {
      n.value = !1;
    }
    return (r, u) => (a(), R(Tt, null, {
      header: h(() => [
        x(Pt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), R(de, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (d) => n.value = !0)
            }, {
              default: h(() => [...u[1] || (u[1] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), R(uv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), c("div", hv, [
          (a(!0), c(K, null, be(e.branches, (d) => (a(), R(gv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: h(() => [
              d.is_current ? y("", !0) : (a(), R(de, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => r.$emit("delete", d.name)
              }, {
                default: h(() => [...u[2] || (u[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), R(de, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => r.$emit("switch", d.name)
              }, {
                default: h(() => [...u[3] || (u[3] = [
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
}), wv = /* @__PURE__ */ ke(yv, [["__scopeId", "data-v-86784ddd"]]), _v = { class: "commit-list" }, kv = /* @__PURE__ */ _e({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), c("div", _v, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), bv = /* @__PURE__ */ ke(kv, [["__scopeId", "data-v-8c5ee761"]]), $v = { class: "commit-hash" }, Cv = /* @__PURE__ */ _e({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = U(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), c("span", $v, f(o.value), 1));
  }
}), $r = /* @__PURE__ */ ke(Cv, [["__scopeId", "data-v-7c333cc6"]]), xv = { class: "commit-message" }, Sv = { class: "commit-date" }, Iv = /* @__PURE__ */ _e({
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
    return (i, r) => (a(), c("div", {
      class: Te(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      x($r, { hash: e.hash }, null, 8, ["hash"]),
      t("span", xv, f(e.message), 1),
      t("span", Sv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), c("div", {
        key: 0,
        class: "commit-actions",
        onClick: r[0] || (r[0] = at(() => {
        }, ["stop"]))
      }, [
        Ke(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ev = /* @__PURE__ */ ke(Iv, [["__scopeId", "data-v-dd7c621b"]]), Tv = /* @__PURE__ */ _e({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), R(Tt, null, {
      header: h(() => [
        x(Pt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), R(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(bv, { key: 1 }, {
          default: h(() => [
            (a(!0), c(K, null, be(e.commits, (n) => (a(), R(Ev, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                x(de, {
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
}), Pv = /* @__PURE__ */ ke(Tv, [["__scopeId", "data-v-981c3c64"]]), V7 = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const W7 = [
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
], G7 = {
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
}, Rv = [
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
], j7 = [
  ...Rv,
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
function Cr() {
  return typeof crypto < "u" && crypto.randomUUID ? Cr() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function st() {
  const e = k(!1), s = k(null);
  async function o(A, xe) {
    var Ot;
    if (!((Ot = window.app) != null && Ot.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi(A, xe);
    if (!Fe.ok) {
      const cs = await Fe.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Fe.status}`);
    }
    const rt = await Fe.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(A = !1) {
    return o(A ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(A, xe = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: A, allow_issues: xe })
    });
  }
  async function i(A = 10, xe = 0) {
    return o(`/v2/comfygit/log?limit=${A}&offset=${xe}`);
  }
  async function r(A) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function u() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function d() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function m(A) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(A) {
    return o(`/v2/comfygit/commit/${A}`);
  }
  async function w(A, xe = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: A, force: xe })
    });
  }
  async function p(A, xe = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, start_point: xe })
    });
  }
  async function _(A, xe = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: A, force: xe })
    });
  }
  async function S(A, xe = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(A)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: xe })
    });
  }
  async function $() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const A = await n();
        return [{
          name: A.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + A.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: A.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: A.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(A, xe) {
    const Fe = { target_env: A };
    return xe && (Fe.workspace_path = xe), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Fe)
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(A) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function C() {
    return o("/v2/workspace/environments/create_status");
  }
  async function j(A = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${A}`);
  }
  async function q(A) {
    return o(`/v2/workspace/environments/${A}`, {
      method: "DELETE"
    });
  }
  async function z(A = !1) {
    try {
      return o(A ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const xe = await n(A), Fe = [];
      return xe.workflows.new.forEach((rt) => {
        Fe.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), xe.workflows.modified.forEach((rt) => {
        Fe.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), xe.workflows.synced.forEach((rt) => {
        Fe.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), Fe;
    }
  }
  async function I(A) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(A)}/details`);
  }
  async function T(A) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(A)}/resolve`, {
      method: "POST"
    });
  }
  async function M(A, xe, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(A)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: xe, install_models: Fe })
    });
  }
  async function te(A, xe, Fe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(A)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: xe, importance: Fe })
    });
  }
  async function X() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function H() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function se(A) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(A)}`);
  }
  async function Z(A) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function N(A, xe) {
    return o(`/v2/workspace/models/${A}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function G(A, xe) {
    return o(`/v2/workspace/models/${A}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function O(A) {
    return o(`/v2/workspace/models/${A}`, {
      method: "DELETE"
    });
  }
  async function le(A) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function pe() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Me() {
    return o("/v2/workspace/models/directory");
  }
  async function Ae(A) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function ue(A) {
    const xe = new URLSearchParams({ url: A });
    return o(`/v2/workspace/huggingface/repo-info?${xe}`);
  }
  async function ie() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function B(A, xe = 10) {
    const Fe = new URLSearchParams({ query: A, limit: String(xe) });
    return o(`/v2/workspace/huggingface/search?${Fe}`);
  }
  async function ee(A) {
    try {
      const xe = A ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(A)}` : "/v2/comfygit/config";
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
  async function ge(A, xe) {
    const Fe = xe ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(xe)}` : "/v2/comfygit/config";
    return o(Fe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function ve(A, xe) {
    try {
      const Fe = new URLSearchParams();
      return A && Fe.append("level", A), xe && Fe.append("lines", xe.toString()), o(`/v2/comfygit/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function fe(A, xe) {
    try {
      const Fe = new URLSearchParams();
      return A && Fe.append("level", A), xe && Fe.append("lines", xe.toString()), o(`/v2/workspace/debug/logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function De() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Re() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function L(A, xe) {
    try {
      const Fe = new URLSearchParams();
      return A && Fe.append("level", A), xe && Fe.append("lines", xe.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Fe}`);
    } catch {
      return [];
    }
  }
  async function V() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function ne(A) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: A })
    });
  }
  async function ce() {
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
  async function ye(A) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(A)}/track-dev`, {
      method: "POST"
    });
  }
  async function we(A) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(A)}/install`, {
      method: "POST"
    });
  }
  async function Ie(A) {
    var Ot, cs, Io, Eo;
    const xe = Cr(), Fe = ((cs = (Ot = window.app) == null ? void 0 : Ot.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: A.id,
        version: A.version || A.selected_version || "latest",
        selected_version: A.selected_version || "latest",
        repository: A.repository || "",
        mode: A.mode || "remote",
        channel: A.channel || "default"
      },
      ui_id: xe,
      client_id: Fe
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), await o("/v2/manager/queue/start"), { ui_id: xe };
  }
  async function Ee(A) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(A)}/update`, {
      method: "POST"
    });
  }
  async function re(A) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function he() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ne(A, xe) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, url: xe })
    });
  }
  async function Pe(A) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function oe(A, xe, Fe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: xe, push_url: Fe })
    });
  }
  async function J(A, xe) {
    const Fe = {};
    return xe && (Fe["X-Git-Auth-Token"] = xe), o(`/v2/comfygit/remotes/${encodeURIComponent(A)}/fetch`, {
      method: "POST",
      headers: Fe
    });
  }
  async function Oe(A) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(A)}/status`);
    } catch {
      return null;
    }
  }
  async function Ce(A = "skip", xe = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: A,
        remove_extra_nodes: xe
      })
    });
  }
  async function $e(A, xe) {
    const Fe = xe ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/pull-preview`;
    return o(Fe);
  }
  async function W(A, xe = {}) {
    const Fe = { "Content-Type": "application/json" };
    return xe.authToken && (Fe["X-Git-Auth-Token"] = xe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(A)}/pull`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({
        model_strategy: xe.modelStrategy || "skip",
        force: xe.force || !1,
        resolutions: xe.resolutions
      })
    });
  }
  async function F(A, xe) {
    const Fe = xe ? `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(A)}/push-preview`;
    return o(Fe);
  }
  async function me(A, xe = {}) {
    const Fe = { "Content-Type": "application/json" };
    return xe.authToken && (Fe["X-Git-Auth-Token"] = xe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(A)}/push`, {
      method: "POST",
      headers: Fe,
      body: JSON.stringify({ force: xe.force || !1 })
    });
  }
  async function Ve(A, xe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(A)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: xe })
    });
  }
  async function Qe(A) {
    const xe = {
      success: 0,
      failed: []
    };
    for (const Fe of A)
      try {
        await T(Fe), xe.success++;
      } catch (rt) {
        xe.failed.push({
          name: Fe,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return xe;
  }
  async function vt(A) {
    var rt;
    const xe = new FormData();
    if (xe.append("file", A), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const Fe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: xe
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Fe.ok) {
      const Ot = await Fe.json().catch(() => ({}));
      throw new Error(Ot.error || `Preview failed: ${Fe.status}`);
    }
    return Fe.json();
  }
  async function lt(A) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(A)}`
    );
  }
  async function ut(A, xe, Fe, rt) {
    var Io;
    const Ot = new FormData();
    if (Ot.append("file", A), Ot.append("name", xe), Ot.append("model_strategy", Fe), Ot.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ot
    });
    if (!cs.ok) {
      const Eo = await cs.json().catch(() => ({}));
      throw new Error(Eo.message || Eo.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function Rt() {
    return o("/v2/workspace/import/status");
  }
  async function Ft(A) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: A })
    });
  }
  async function qt(A, xe, Fe, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: A,
        name: xe,
        model_strategy: Fe,
        torch_backend: rt
      })
    });
  }
  async function Ws() {
    return o("/v2/setup/status");
  }
  async function Ms(A) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function no() {
    return o("/v2/setup/initialize_status");
  }
  async function Co(A) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function xo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function So() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Se(A, xe) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: A, save_key: xe })
    });
  }
  async function Q() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function He(A) {
    const xe = A ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(A)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(xe);
  }
  async function ht(A) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Yt() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ys(A) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function ws(A) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/stop`, {
      method: "POST"
    });
  }
  async function ls(A) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/start`, {
      method: "POST"
    });
  }
  async function ze(A) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(A)}/status`);
  }
  async function is(A) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function ae(A = !1) {
    return o(A ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Y() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ue() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function je(A) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function ot(A) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function ft(A) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function Mt() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function rs(A) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/info`);
  }
  async function Gs(A) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances`);
  }
  async function js(A, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function ln(A, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(xe)}/start`, {
      method: "POST"
    });
  }
  async function rn(A, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(xe)}/stop`, {
      method: "POST"
    });
  }
  async function cn(A, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(A)}/instances/${encodeURIComponent(xe)}`, {
      method: "DELETE"
    });
  }
  async function un(A) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: A })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: n,
    commit: l,
    getHistory: i,
    exportEnv: r,
    validateExport: u,
    validateDeploy: d,
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
    getCreateProgress: C,
    getComfyUIReleases: j,
    deleteEnvironment: q,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: I,
    resolveWorkflow: T,
    installWorkflowDeps: M,
    setModelImportance: te,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: H,
    getModelDetails: se,
    openFileLocation: Z,
    addModelSource: N,
    removeModelSource: G,
    deleteModel: O,
    downloadModel: le,
    scanWorkspaceModels: pe,
    getModelsDirectory: Me,
    setModelsDirectory: Ae,
    getHuggingFaceRepoInfo: ue,
    getModelsSubdirectories: ie,
    searchHuggingFaceRepos: B,
    // Settings
    getConfig: ee,
    updateConfig: ge,
    // Debug/Logs
    getEnvironmentLogs: ve,
    getWorkspaceLogs: fe,
    getEnvironmentLogPath: De,
    getWorkspaceLogPath: Re,
    getOrchestratorLogs: L,
    getOrchestratorLogPath: V,
    openFile: ne,
    // Node Management
    getNodes: ce,
    trackNodeAsDev: ye,
    installNode: we,
    queueNodeInstall: Ie,
    updateNode: Ee,
    uninstallNode: re,
    // Git Remotes
    getRemotes: he,
    addRemote: Ne,
    removeRemote: Pe,
    updateRemoteUrl: oe,
    fetchRemote: J,
    getRemoteSyncStatus: Oe,
    // Push/Pull
    getPullPreview: $e,
    pullFromRemote: W,
    getPushPreview: F,
    pushToRemote: me,
    validateMerge: Ve,
    // Environment Sync
    syncEnvironmentManually: Ce,
    // Workflow Repair
    repairWorkflowModels: Qe,
    // Import Operations
    previewTarballImport: vt,
    previewGitImport: Ft,
    validateEnvironmentName: lt,
    executeImport: ut,
    executeGitImport: qt,
    getImportProgress: Rt,
    // First-Time Setup
    getSetupStatus: Ws,
    initializeWorkspace: Ms,
    getInitializeProgress: no,
    validatePath: Co,
    // Deploy Operations
    getDeploySummary: xo,
    getDataCenters: So,
    testRunPodConnection: Se,
    getNetworkVolumes: Q,
    getRunPodGpuTypes: He,
    deployToRunPod: ht,
    getRunPodPods: Yt,
    terminateRunPodPod: ys,
    stopRunPodPod: ws,
    startRunPodPod: ls,
    getDeploymentStatus: ze,
    exportDeployPackage: is,
    getStoredRunPodKey: ae,
    clearRunPodKey: Y,
    // Custom Worker Operations
    getCustomWorkers: Ue,
    addCustomWorker: je,
    removeCustomWorker: ot,
    testWorkerConnection: ft,
    scanForWorkers: Mt,
    getWorkerSystemInfo: rs,
    getWorkerInstances: Gs,
    deployToWorker: js,
    startWorkerInstance: ln,
    stopWorkerInstance: rn,
    terminateWorkerInstance: cn,
    // Git Authentication
    testGitAuth: un
  };
}
async function hn(e, s) {
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
function Mv() {
  async function e() {
    try {
      return await hn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await hn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await hn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await hn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const Dv = { class: "base-modal-header" }, Lv = {
  key: 0,
  class: "base-modal-title"
}, Ov = { class: "base-modal-body" }, Av = {
  key: 0,
  class: "base-modal-loading"
}, Uv = {
  key: 1,
  class: "base-modal-error"
}, Nv = {
  key: 0,
  class: "base-modal-footer"
}, zv = /* @__PURE__ */ _e({
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
    function i(r) {
      r.key === "Escape" && o.showCloseButton && n("close");
    }
    return Xe(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), oo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (r, u) => (a(), R(wt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Te(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = at(() => {
          }, ["stop"]))
        }, [
          t("div", Dv, [
            Ke(r.$slots, "header", {}, () => [
              e.title ? (a(), c("h3", Lv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), c("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => r.$emit("close"))
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
          t("div", Ov, [
            e.loading ? (a(), c("div", Av, "Loading...")) : e.error ? (a(), c("div", Uv, f(e.error), 1)) : Ke(r.$slots, "body", { key: 2 }, void 0)
          ]),
          r.$slots.footer ? (a(), c("div", Nv, [
            Ke(r.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), mt = /* @__PURE__ */ ke(zv, [["__scopeId", "data-v-8dab1081"]]), Fv = ["type", "disabled"], Bv = {
  key: 0,
  class: "spinner"
}, Vv = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Te(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", Bv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Fv));
  }
}), Le = /* @__PURE__ */ ke(Vv, [["__scopeId", "data-v-f3452606"]]), Wv = {
  key: 0,
  class: "base-title-count"
}, Gv = /* @__PURE__ */ _e({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), R(Qa(`h${e.level}`), {
      class: Te(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Wv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ ke(Gv, [["__scopeId", "data-v-5a01561d"]]), jv = ["value", "disabled"], Hv = {
  key: 0,
  value: "",
  disabled: ""
}, Kv = ["value"], qv = {
  key: 0,
  class: "base-select-error"
}, Yv = /* @__PURE__ */ _e({
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
    return (n, l) => (a(), c("div", {
      class: Te(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Te(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), c("option", Hv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), c(K, null, be(e.options, (i) => (a(), c("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, Kv))), 128))
      ], 42, jv),
      e.error ? (a(), c("span", qv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), xr = /* @__PURE__ */ ke(Yv, [["__scopeId", "data-v-7436d745"]]), Jv = { class: "popover-header" }, Xv = { class: "popover-title" }, Qv = { class: "popover-content" }, Zv = {
  key: 0,
  class: "popover-actions"
}, ep = /* @__PURE__ */ _e({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Kt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = at(() => {
          }, ["stop"]))
        }, [
          t("div", Jv, [
            t("h4", Xv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Qv, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), c("div", Zv, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ ke(ep, [["__scopeId", "data-v-42815ace"]]), tp = { class: "detail-section" }, sp = {
  key: 0,
  class: "empty-message"
}, op = { class: "model-header" }, np = { class: "model-name" }, ap = { class: "model-details" }, lp = { class: "model-row" }, ip = { class: "model-row" }, rp = { class: "label" }, cp = {
  key: 0,
  class: "model-row model-row-nodes"
}, up = { class: "node-list" }, dp = ["onClick"], fp = {
  key: 1,
  class: "model-row"
}, mp = { class: "value" }, vp = {
  key: 2,
  class: "model-row"
}, pp = { class: "value error" }, gp = {
  key: 0,
  class: "model-actions"
}, hp = { class: "detail-section" }, yp = {
  key: 0,
  class: "empty-message"
}, wp = { class: "node-name" }, _p = {
  key: 0,
  class: "node-version"
}, kp = /* @__PURE__ */ _e({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: r } = st(), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
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
    async function C() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function j(I, T) {
      g.value[I] = T, v.value = !0;
    }
    async function q(I) {
      try {
        await r(I);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function z() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [I, T] of Object.entries(g.value))
          await i(o.workflowName, I, T);
        n("refresh"), n("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Xe(C), (I, T) => (a(), c(K, null, [
      x(mt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: T[4] || (T[4] = (M) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), c(K, { key: 0 }, [
            t("section", tp, [
              x(Go, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), c("div", sp, " No models used in this workflow ")) : y("", !0),
              (a(!0), c(K, null, be(u.value.models, (M) => {
                var te;
                return a(), c("div", {
                  key: M.hash || M.filename,
                  class: "model-card"
                }, [
                  t("div", op, [
                    T[6] || (T[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", np, f(M.filename), 1)
                  ]),
                  t("div", ap, [
                    t("div", lp, [
                      T[7] || (T[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Te(["value", S(M.status)])
                      }, f($(M.status)), 3)
                    ]),
                    t("div", ip, [
                      t("span", rp, [
                        T[8] || (T[8] = b(" Importance: ", -1)),
                        x(br, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (X) => w.value = !0)
                        })
                      ]),
                      x(xr, {
                        "model-value": g.value[M.filename] || M.importance,
                        options: _,
                        "onUpdate:modelValue": (X) => j(M.filename, X)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    M.loaded_by && M.loaded_by.length > 0 ? (a(), c("div", cp, [
                      T[9] || (T[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", up, [
                        (a(!0), c(K, null, be(P(M), (X, H) => (a(), c("div", {
                          key: `${X.node_id}-${H}`,
                          class: "node-reference"
                        }, f(X.node_type) + " (Node #" + f(X.node_id) + ") ", 1))), 128)),
                        M.loaded_by.length > 3 ? (a(), c("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (X) => E(M.hash || M.filename)
                        }, f(D(M.hash || M.filename) ? "▼ Show less" : `▶ View all (${M.loaded_by.length})`), 9, dp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    M.size_mb ? (a(), c("div", fp, [
                      T[10] || (T[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", mp, f(M.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    M.has_category_mismatch ? (a(), c("div", vp, [
                      T[13] || (T[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", pp, [
                        T[11] || (T[11] = b(" In ", -1)),
                        t("code", null, f(M.actual_category) + "/", 1),
                        T[12] || (T[12] = b(" but loader needs ", -1)),
                        t("code", null, f((te = M.expected_categories) == null ? void 0 : te[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  M.status !== "available" ? (a(), c("div", gp, [
                    M.status === "downloadable" ? (a(), R(Le, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (X) => n("resolve"))
                    }, {
                      default: h(() => [...T[14] || (T[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : M.status === "category_mismatch" && M.file_path ? (a(), R(Le, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (X) => q(M.file_path)
                    }, {
                      default: h(() => [...T[15] || (T[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : M.status !== "path_mismatch" ? (a(), R(Le, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (X) => n("resolve"))
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
            t("section", hp, [
              x(Go, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), c("div", yp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), c(K, null, be(u.value.nodes, (M) => (a(), c("div", {
                key: M.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Te(["node-status", M.status === "installed" ? "installed" : "missing"])
                }, f(M.status === "installed" ? "✓" : "✕"), 3),
                t("span", wp, f(M.name), 1),
                M.version ? (a(), c("span", _p, "v" + f(M.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          x(Le, {
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
      x(as, {
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
}), bp = /* @__PURE__ */ ke(kp, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function Sr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ma(e) {
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
    await $p(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", uo();
  }
}
async function $p(e) {
  return new Promise((s, o) => {
    vs && (vs.close(), vs = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    vs = l;
    let i = Date.now(), r = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), g = (v - i) / 1e3;
            if (g > 0.5) {
              const w = e.downloaded - r;
              if (e.speed = w / g, i = v, r = e.downloaded, e.speed > 0 && e.size > 0) {
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
async function Cp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: Sr(),
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
function bo() {
  function e($) {
    for (const P of $) {
      if (Ye.items.some(
        (C) => C.url === P.url && C.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(C.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const E = {
        id: Sr(),
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
    const P = ma($);
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
    const P = ma($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n($) {
    const P = ma($);
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
  function r() {
    Ye.items = Ye.items.filter(($) => $.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter(($) => $.status !== "failed");
  }
  const d = U(
    () => Ye.items.find(($) => $.status === "downloading")
  ), m = U(
    () => Ye.items.filter(($) => $.status === "queued")
  ), v = U(
    () => Ye.items.filter(($) => $.status === "completed")
  ), g = U(
    () => Ye.items.filter(($) => $.status === "failed")
  ), w = U(
    () => Ye.items.filter(($) => $.status === "paused")
  ), p = U(() => Ye.items.length > 0), _ = U(
    () => Ye.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = U(
    () => Ye.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: En(Ye),
    // Computed
    currentDownload: d,
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
    clearCompleted: r,
    clearFailed: u,
    loadPendingDownloads: Cp
  };
}
function Ir() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function r(D, E) {
    var j;
    if (!((j = window.app) != null && j.api))
      throw new Error("ComfyUI API not available");
    const C = await window.app.api.fetchApi(D, E);
    if (!C.ok) {
      const q = await C.json().catch(() => ({})), z = q.error || q.message || `Request failed: ${C.status}`;
      throw new Error(z);
    }
    return C.json();
  }
  async function u(D) {
    l.value = !0, i.value = null;
    try {
      let E;
      return co() || (E = await r(
        `/v2/comfygit/workflow/${D}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = E, E;
    } catch (E) {
      const C = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = C, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(D, E, C, j) {
    l.value = !0, i.value = null;
    try {
      let q;
      if (!co()) {
        const z = Object.fromEntries(E), I = Object.fromEntries(C), T = j ? Array.from(j) : [];
        q = await r(
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
      return s.value = q, q;
    } catch (q) {
      const z = q instanceof Error ? q.message : "Unknown error occurred";
      throw i.value = z, q;
    } finally {
      l.value = !1;
    }
  }
  async function m(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let C;
      return co() || (C = await r(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), o.value = C.results, C.results;
    } catch (C) {
      const j = C instanceof Error ? C.message : "Unknown error occurred";
      throw i.value = j, C;
    } finally {
      l.value = !1;
    }
  }
  async function v(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let C;
      return co() || (C = await r(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), n.value = C.results, C.results;
    } catch (C) {
      const j = C instanceof Error ? C.message : "Unknown error occurred";
      throw i.value = j, C;
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
      const C = E instanceof Error ? E.message : "Failed to install nodes";
      throw g.installError = C, E;
    }
  }
  async function _(D) {
    var C;
    const E = await r(
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
      const j = new Map(((C = E.failed) == null ? void 0 : C.map((q) => [q.node_id, q.error])) || []);
      for (let q = 0; q < g.nodesToInstall.length; q++) {
        const z = g.nodesToInstall[q], I = j.get(z);
        g.nodeInstallProgress.completedNodes.push({
          node_id: z,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function S(D, E, C) {
    w(), g.phase = "resolving", i.value = null;
    const j = Object.fromEntries(E), q = Object.fromEntries(C);
    try {
      const z = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: j,
          model_choices: q
        })
      });
      if (!z.ok)
        throw new Error(`Request failed: ${z.status}`);
      if (!z.body)
        throw new Error("No response body");
      const I = z.body.getReader(), T = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: te, value: X } = await I.read();
        if (te) break;
        M += T.decode(X, { stream: !0 });
        const H = M.split(`

`);
        M = H.pop() || "";
        for (const se of H) {
          if (!se.trim()) continue;
          const Z = se.split(`
`);
          let N = "", G = "";
          for (const O of Z)
            O.startsWith("event: ") ? N = O.slice(7) : O.startsWith("data: ") && (G = O.slice(6));
          if (G)
            try {
              const O = JSON.parse(G);
              $(N, O);
            } catch (O) {
              console.warn("Failed to parse SSE event:", O);
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
    const { addToQueue: C } = bo(), j = E.filter((q) => q.url && q.target_path).map((q) => ({
      workflow: D,
      filename: q.filename,
      url: q.url,
      targetPath: q.target_path,
      size: q.size || 0,
      type: "model"
    }));
    return j.length > 0 && C(j), j.length;
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
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: S,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: P
  };
}
const xp = { class: "resolution-stepper" }, Sp = { class: "stepper-header" }, Ip = ["onClick"], Ep = {
  key: 0,
  class: "step-icon"
}, Tp = {
  key: 1,
  class: "step-number"
}, Pp = { class: "step-label" }, Rp = {
  key: 0,
  class: "step-connector"
}, Mp = { class: "stepper-content" }, Dp = /* @__PURE__ */ _e({
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
    function r(m) {
      return l(m) ? "state-complete" : i(m) ? "state-partial" : "state-pending";
    }
    function u(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), c("div", xp, [
      t("div", Sp, [
        (a(!0), c(K, null, be(e.steps, (g, w) => (a(), c("div", {
          key: g.id,
          class: Te(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Te(["step-indicator", r(g.id)])
          }, [
            l(g.id) ? (a(), c("span", Ep, "✓")) : (a(), c("span", Tp, f(w + 1), 1))
          ], 2),
          t("div", Pp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), c("div", Rp)) : y("", !0)
        ], 10, Ip))), 128))
      ]),
      t("div", Mp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Lp = /* @__PURE__ */ ke(Dp, [["__scopeId", "data-v-2a7b3af8"]]), Op = /* @__PURE__ */ _e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, r) => (a(), c("span", {
      class: Te(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Nn = /* @__PURE__ */ ke(Op, [["__scopeId", "data-v-17ec4b80"]]), Ap = { class: "node-info" }, Up = { class: "node-info-text" }, Np = { class: "item-body" }, zp = {
  key: 0,
  class: "resolved-state"
}, Fp = {
  key: 1,
  class: "multiple-options"
}, Bp = { class: "options-list" }, Vp = ["onClick"], Wp = ["name", "value", "checked", "onChange"], Gp = { class: "option-content" }, jp = { class: "option-header" }, Hp = { class: "option-package-id" }, Kp = {
  key: 0,
  class: "option-title"
}, qp = { class: "option-meta" }, Yp = {
  key: 0,
  class: "installed-badge"
}, Jp = { class: "action-buttons" }, Xp = {
  key: 2,
  class: "unresolved"
}, Qp = {
  key: 0,
  class: "searching-state"
}, Zp = { class: "options-list" }, eg = ["onClick"], tg = ["name", "value"], sg = { class: "option-content" }, og = { class: "option-header" }, ng = { class: "option-package-id" }, ag = {
  key: 0,
  class: "option-description"
}, lg = { class: "option-meta" }, ig = {
  key: 0,
  class: "installed-badge"
}, rg = {
  key: 2,
  class: "unresolved-message"
}, cg = { class: "action-buttons" }, ug = /* @__PURE__ */ _e({
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
    function l(d, m = 80) {
      return d.length <= m ? d : d.slice(0, m - 3) + "...";
    }
    const i = U(() => !!o.choice);
    U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const r = U(() => {
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
      n("option-selected", d);
    }
    return (d, m) => (a(), c("div", {
      class: Te(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Ap, [
        t("span", Up, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Te(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Np, [
        i.value ? (a(), c("div", zp, [
          x(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Fp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Bp, [
            (a(!0), c(K, null, be(e.options, (v, g) => (a(), c("label", {
              key: v.package_id,
              class: Te(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => u(g)
              }, null, 40, Wp),
              t("div", Gp, [
                t("div", jp, [
                  t("span", Hp, f(v.package_id), 1),
                  x(Nn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), c("div", Kp, f(v.title), 1)) : y("", !0),
                t("div", qp, [
                  v.is_installed ? (a(), c("span", Yp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Vp))), 128))
          ]),
          t("div", Jp, [
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
        ])) : (a(), c("div", Xp, [
          e.isSearching ? (a(), c("div", Qp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), c(K, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Zp, [
              (a(!0), c(K, null, be(e.searchResults.slice(0, 5), (v, g) => (a(), c("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, tg),
                t("div", sg, [
                  t("div", og, [
                    t("span", ng, f(v.package_id), 1),
                    x(Nn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), c("div", ag, f(l(v.description)), 1)) : y("", !0),
                  t("div", lg, [
                    v.is_installed ? (a(), c("span", ig, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, eg))), 128))
            ])
          ], 64)) : (a(), c("div", rg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", cg, [
            x(Le, {
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
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
}), dg = /* @__PURE__ */ ke(ug, [["__scopeId", "data-v-c2997d1d"]]), fg = { class: "item-navigator" }, mg = { class: "nav-item-info" }, vg = ["title"], pg = { class: "nav-controls" }, gg = { class: "nav-arrows" }, hg = ["disabled"], yg = ["disabled"], wg = { class: "nav-position" }, _g = /* @__PURE__ */ _e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), c("div", fg, [
      t("div", mg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, vg)
      ]),
      t("div", pg, [
        t("div", gg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, hg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, yg)
        ]),
        t("span", wg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Er = /* @__PURE__ */ ke(_g, [["__scopeId", "data-v-74af7920"]]), kg = ["type", "value", "placeholder", "disabled"], bg = {
  key: 0,
  class: "base-input-error"
}, $g = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), c("div", {
      class: Te(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Te(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = es((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = es((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, kg),
      e.error ? (a(), c("span", bg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ ke($g, [["__scopeId", "data-v-9ba02cdc"]]), Cg = { class: "node-resolution-step" }, xg = {
  key: 0,
  class: "auto-resolved-section"
}, Sg = { class: "section-header" }, Ig = { class: "stat-badge" }, Eg = { class: "resolved-packages-list" }, Tg = { class: "package-info" }, Pg = { class: "package-id" }, Rg = { class: "node-count" }, Mg = { class: "package-actions" }, Dg = {
  key: 0,
  class: "status-badge install"
}, Lg = {
  key: 1,
  class: "status-badge skip"
}, Og = ["onClick"], Ag = {
  key: 1,
  class: "section-divider"
}, Ug = { class: "step-header" }, Ng = { class: "stat-badge" }, zg = {
  key: 1,
  class: "step-body"
}, Fg = {
  key: 3,
  class: "empty-state"
}, Bg = { class: "node-modal-body" }, Vg = { class: "node-search-results-container" }, Wg = {
  key: 0,
  class: "node-search-results"
}, Gg = ["onClick"], jg = { class: "node-result-header" }, Hg = { class: "node-result-package-id" }, Kg = {
  key: 0,
  class: "node-result-description"
}, qg = {
  key: 1,
  class: "node-empty-state"
}, Yg = {
  key: 2,
  class: "node-empty-state"
}, Jg = {
  key: 3,
  class: "node-empty-state"
}, Xg = { class: "node-manual-entry-modal" }, Qg = { class: "node-modal-body" }, Zg = { class: "node-modal-actions" }, eh = /* @__PURE__ */ _e({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = Ir(), i = k(0), r = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && O(), _.value = !1;
    }
    const $ = U(() => o.nodes[i.value]), P = U(() => o.nodes.filter((ee) => o.nodeChoices.has(ee.node_type)).length), D = U(() => $.value ? w.value.get($.value.node_type) || [] : []), E = U(() => $.value ? p.value.has($.value.node_type) : !1);
    gt($, async (ee) => {
      var ge;
      ee && ((ge = ee.options) != null && ge.length || w.value.has(ee.node_type) || p.value.has(ee.node_type) || o.nodeChoices.has(ee.node_type) || await C(ee.node_type));
    }, { immediate: !0 });
    async function C(ee) {
      p.value.add(ee);
      try {
        const ge = await l(ee, 5);
        w.value.set(ee, ge);
      } catch {
        w.value.set(ee, []);
      } finally {
        p.value.delete(ee);
      }
    }
    const j = U(() => o.autoResolvedPackages.filter((ee) => !o.skippedPackages.has(ee.package_id)).length);
    function q(ee) {
      return o.skippedPackages.has(ee);
    }
    function z(ee) {
      n("package-skip", ee);
    }
    const I = U(() => {
      var ge;
      if (!$.value) return "not-found";
      const ee = o.nodeChoices.get($.value.node_type);
      if (ee)
        switch (ee.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ge = $.value.options) != null && ge.length ? "ambiguous" : "not-found";
    }), T = U(() => {
      var ge;
      if (!$.value) return;
      const ee = o.nodeChoices.get($.value.node_type);
      if (ee)
        switch (ee.action) {
          case "install":
            return ee.package_id ? `→ ${ee.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ge = $.value.options) != null && ge.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function M(ee) {
      ee >= 0 && ee < o.nodes.length && (i.value = ee);
    }
    function te() {
      var ee;
      for (let ge = i.value + 1; ge < o.nodes.length; ge++) {
        const ve = o.nodes[ge];
        if (!((ee = o.nodeChoices) != null && ee.has(ve.node_type))) {
          M(ge);
          return;
        }
      }
    }
    function X() {
      $.value && (n("mark-optional", $.value.node_type), kt(() => te()));
    }
    function H() {
      $.value && (n("skip", $.value.node_type), kt(() => te()));
    }
    function se(ee) {
      $.value && (n("option-selected", $.value.node_type, ee), kt(() => te()));
    }
    function Z() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function N() {
      $.value && (d.value = $.value.node_type, v.value = D.value, r.value = !0, Ae(d.value));
    }
    function G() {
      m.value = "", u.value = !0;
    }
    function O() {
      r.value = !1, d.value = "", v.value = [];
    }
    function le() {
      u.value = !1, m.value = "";
    }
    let pe = null;
    function Me() {
      pe && clearTimeout(pe), pe = setTimeout(() => {
        Ae(d.value);
      }, 300);
    }
    async function Ae(ee) {
      if (!ee.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(ee, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function ue(ee) {
      $.value && (n("manual-entry", $.value.node_type, ee.package_id), O(), kt(() => te()));
    }
    function ie(ee) {
      $.value && (n("manual-entry", $.value.node_type, ee.package_id), kt(() => te()));
    }
    function B() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), le(), kt(() => te()));
    }
    return (ee, ge) => {
      var ve, fe;
      return a(), c("div", Cg, [
        e.autoResolvedPackages.length > 0 ? (a(), c("div", xg, [
          t("div", Sg, [
            ge[6] || (ge[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Ig, f(j.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Eg, [
            (a(!0), c(K, null, be(e.autoResolvedPackages, (De) => (a(), c("div", {
              key: De.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Tg, [
                t("code", Pg, f(De.package_id), 1),
                t("span", Rg, f(De.node_types_count) + " node type" + f(De.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Mg, [
                q(De.package_id) ? (a(), c("span", Lg, " SKIPPED ")) : (a(), c("span", Dg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Re) => z(De.package_id)
                }, f(q(De.package_id) ? "Include" : "Skip"), 9, Og)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), c("div", Ag)) : y("", !0),
        e.nodes.length > 0 ? (a(), c(K, { key: 2 }, [
          t("div", Ug, [
            ge[7] || (ge[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Ng, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(Er, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: ge[0] || (ge[0] = (De) => M(i.value - 1)),
            onNext: ge[1] || (ge[1] = (De) => M(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), c("div", zg, [
            x(dg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((ve = $.value.options) != null && ve.length),
              options: $.value.options,
              choice: (fe = e.nodeChoices) == null ? void 0 : fe.get($.value.node_type),
              status: I.value,
              "status-label": T.value,
              "search-results": D.value,
              "is-searching": E.value,
              onMarkOptional: X,
              onSkip: H,
              onManualEntry: G,
              onSearch: N,
              onOptionSelected: se,
              onClearChoice: Z,
              onSearchResultSelected: ie
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), c("div", Fg, [...ge[8] || (ge[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(wt, { to: "body" }, [
          r.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ge[4] || (ge[4] = at((De) => _.value = !0, ["self"])),
            onMouseup: at(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: ge[3] || (ge[3] = (De) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                ge[9] || (ge[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              t("div", Bg, [
                x(Lt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ge[2] || (ge[2] = (De) => d.value = De),
                  placeholder: "Search by node type, package name...",
                  onInput: Me
                }, null, 8, ["modelValue"]),
                t("div", Vg, [
                  v.value.length > 0 ? (a(), c("div", Wg, [
                    (a(!0), c(K, null, be(v.value, (De) => (a(), c("div", {
                      key: De.package_id,
                      class: "node-search-result-item",
                      onClick: (Re) => ue(De)
                    }, [
                      t("div", jg, [
                        t("code", Hg, f(De.package_id), 1),
                        De.match_confidence ? (a(), R(Nn, {
                          key: 0,
                          confidence: De.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      De.description ? (a(), c("div", Kg, f(De.description), 1)) : y("", !0)
                    ], 8, Gg))), 128))
                  ])) : g.value ? (a(), c("div", qg, "Searching...")) : d.value ? (a(), c("div", Yg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), c("div", Jg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: at(le, ["self"])
          }, [
            t("div", Xg, [
              t("div", { class: "node-modal-header" }, [
                ge[10] || (ge[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: le
                }, "✕")
              ]),
              t("div", Qg, [
                x(Lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ge[5] || (ge[5] = (De) => m.value = De),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Zg, [
                  x(Le, {
                    variant: "secondary",
                    onClick: le
                  }, {
                    default: h(() => [...ge[11] || (ge[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Le, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: B
                  }, {
                    default: h(() => [...ge[12] || (ge[12] = [
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
}), th = /* @__PURE__ */ ke(eh, [["__scopeId", "data-v-6d7f8125"]]), sh = { class: "node-info" }, oh = { class: "node-info-text" }, nh = { class: "item-body" }, ah = {
  key: 0,
  class: "resolved-state"
}, lh = {
  key: 1,
  class: "multiple-options"
}, ih = { class: "options-list" }, rh = ["onClick"], ch = ["name", "value", "checked", "onChange"], uh = { class: "option-content" }, dh = { class: "option-header" }, fh = { class: "option-filename" }, mh = { class: "option-meta" }, vh = { class: "option-size" }, ph = { class: "option-category" }, gh = { class: "option-path" }, hh = { class: "action-buttons" }, yh = {
  key: 2,
  class: "unresolved"
}, wh = { class: "action-buttons" }, _h = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = U(() => !!o.choice);
    U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const i = U(() => {
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
    function r(d) {
      n("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (a(), c("div", {
      class: Te(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", sh, [
        t("span", oh, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: Te(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", nh, [
        l.value ? (a(), c("div", ah, [
          x(Le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", lh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", ih, [
            (a(!0), c(K, null, be(e.options, (v, g) => (a(), c("label", {
              key: v.model.hash,
              class: Te(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => r(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => r(g)
              }, null, 40, ch),
              t("div", uh, [
                t("div", dh, [
                  t("span", fh, f(v.model.filename), 1),
                  x(Nn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", mh, [
                  t("span", vh, f(u(v.model.size)), 1),
                  t("span", ph, f(v.model.category), 1)
                ]),
                t("div", gh, f(v.model.relative_path), 1)
              ])
            ], 10, rh))), 128))
          ]),
          t("div", hh, [
            x(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
        ])) : (a(), c("div", yh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", wh, [
            x(Le, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
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
}), kh = /* @__PURE__ */ ke(_h, [["__scopeId", "data-v-8a82fefa"]]), bh = { class: "model-resolution-step" }, $h = { class: "step-header" }, Ch = { class: "step-info" }, xh = { class: "step-title" }, Sh = { class: "step-description" }, Ih = { class: "stat-badge" }, Eh = {
  key: 1,
  class: "step-body"
}, Th = {
  key: 2,
  class: "empty-state"
}, Ph = { class: "model-search-modal" }, Rh = { class: "model-modal-body" }, Mh = {
  key: 0,
  class: "model-search-results"
}, Dh = ["onClick"], Lh = { class: "model-result-header" }, Oh = { class: "model-result-filename" }, Ah = { class: "model-result-meta" }, Uh = { class: "model-result-category" }, Nh = { class: "model-result-size" }, zh = {
  key: 0,
  class: "model-result-path"
}, Fh = {
  key: 1,
  class: "model-no-results"
}, Bh = {
  key: 2,
  class: "model-searching"
}, Vh = { class: "model-download-url-modal" }, Wh = { class: "model-modal-body" }, Gh = { class: "model-input-group" }, jh = { class: "model-input-group" }, Hh = { class: "model-modal-actions" }, Kh = /* @__PURE__ */ _e({
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
      var le;
      return O && ((le = o[O]) == null ? void 0 : le[0]) || null;
    }
    const l = e, i = s, r = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = U(() => l.models[r.value]), S = U(() => l.models.some((O) => O.is_download_intent)), $ = U(() => l.models.filter(
      (O) => l.modelChoices.has(O.filename) || O.is_download_intent
    ).length), P = U(() => {
      var le;
      if (!_.value) return "";
      const O = n((le = _.value.reference) == null ? void 0 : le.node_type);
      return O ? `${O}/${_.value.filename}` : "";
    }), D = U(() => {
      var le;
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
      return _.value.is_download_intent ? "download" : (le = _.value.options) != null && le.length ? "ambiguous" : "not-found";
    }), E = U(() => {
      var le, pe;
      if (!_.value) return;
      const O = l.modelChoices.get(_.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (le = O.selected_model) != null && le.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (pe = _.value.options) != null && pe.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function C(O) {
      O >= 0 && O < l.models.length && (r.value = O);
    }
    function j() {
      var O;
      for (let le = r.value + 1; le < l.models.length; le++) {
        const pe = l.models[le];
        if (!pe.is_download_intent && !((O = l.modelChoices) != null && O.has(pe.filename))) {
          C(le);
          return;
        }
      }
    }
    function q() {
      _.value && (i("mark-optional", _.value.filename), kt(() => j()));
    }
    function z() {
      _.value && (i("skip", _.value.filename), kt(() => j()));
    }
    function I(O) {
      _.value && (i("option-selected", _.value.filename, O), kt(() => j()));
    }
    function T() {
      _.value && i("clear-choice", _.value.filename);
    }
    function M() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function te() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, d.value = !0);
    }
    function X() {
      u.value = !1, m.value = "", w.value = [];
    }
    function H() {
      d.value = !1, v.value = "", g.value = "";
    }
    function se() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function Z(O) {
      _.value && (X(), kt(() => j()));
    }
    function N() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), H(), kt(() => j()));
    }
    function G(O) {
      if (!O) return "Unknown";
      const le = O / (1024 * 1024 * 1024);
      return le >= 1 ? `${le.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, le) => {
      var pe, Me, Ae;
      return a(), c("div", bh, [
        t("div", $h, [
          t("div", Ch, [
            t("h3", xh, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Sh, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Ih, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(Er, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": r.value,
          "total-items": e.models.length,
          onPrev: le[0] || (le[0] = (ue) => C(r.value - 1)),
          onNext: le[1] || (le[1] = (ue) => C(r.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), c("div", Eh, [
          x(kh, {
            filename: _.value.filename,
            "node-type": ((pe = _.value.reference) == null ? void 0 : pe.node_type) || "Unknown",
            "has-multiple-options": !!((Me = _.value.options) != null && Me.length),
            options: _.value.options,
            choice: (Ae = e.modelChoices) == null ? void 0 : Ae.get(_.value.filename),
            status: D.value,
            "status-label": E.value,
            onMarkOptional: q,
            onSkip: z,
            onDownloadUrl: te,
            onSearch: M,
            onOptionSelected: I,
            onClearChoice: T
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), c("div", Th, [...le[5] || (le[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(wt, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: at(X, ["self"])
          }, [
            t("div", Ph, [
              t("div", { class: "model-modal-header" }, [
                le[6] || (le[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              t("div", Rh, [
                x(Lt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": le[2] || (le[2] = (ue) => m.value = ue),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), c("div", Mh, [
                  (a(!0), c(K, null, be(w.value, (ue) => (a(), c("div", {
                    key: ue.hash,
                    class: "model-search-result-item",
                    onClick: (ie) => Z()
                  }, [
                    t("div", Lh, [
                      t("code", Oh, f(ue.filename), 1)
                    ]),
                    t("div", Ah, [
                      t("span", Uh, f(ue.category), 1),
                      t("span", Nh, f(G(ue.size)), 1)
                    ]),
                    ue.relative_path ? (a(), c("div", zh, f(ue.relative_path), 1)) : y("", !0)
                  ], 8, Dh))), 128))
                ])) : m.value && !p.value ? (a(), c("div", Fh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), c("div", Bh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(wt, { to: "body" }, [
          d.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: at(H, ["self"])
          }, [
            t("div", Vh, [
              t("div", { class: "model-modal-header" }, [
                le[7] || (le[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              t("div", Wh, [
                t("div", Gh, [
                  le[8] || (le[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  x(Lt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": le[3] || (le[3] = (ue) => v.value = ue),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", jh, [
                  le[9] || (le[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  x(Lt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": le[4] || (le[4] = (ue) => g.value = ue),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", Hh, [
                  x(Le, {
                    variant: "secondary",
                    onClick: H
                  }, {
                    default: h(() => [...le[10] || (le[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Le, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: N
                  }, {
                    default: h(() => [...le[11] || (le[11] = [
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
}), qh = /* @__PURE__ */ ke(Kh, [["__scopeId", "data-v-5c700bfa"]]), Yh = { class: "applying-step" }, Jh = {
  key: 0,
  class: "phase-content"
}, Xh = {
  key: 1,
  class: "phase-content"
}, Qh = { class: "phase-description" }, Zh = { class: "overall-progress" }, ey = { class: "progress-bar" }, ty = { class: "progress-label" }, sy = { class: "install-list" }, oy = { class: "install-icon" }, ny = { key: 0 }, ay = {
  key: 1,
  class: "spinner"
}, ly = { key: 2 }, iy = { key: 3 }, ry = {
  key: 0,
  class: "install-error"
}, cy = {
  key: 2,
  class: "phase-content"
}, uy = { class: "phase-header" }, dy = { class: "phase-title" }, fy = { class: "completion-summary" }, my = {
  key: 0,
  class: "summary-item success"
}, vy = { class: "summary-text" }, py = {
  key: 1,
  class: "summary-item error"
}, gy = { class: "summary-text" }, hy = {
  key: 2,
  class: "failed-list"
}, yy = { class: "failed-node-id" }, wy = { class: "failed-error" }, _y = {
  key: 4,
  class: "summary-item success"
}, ky = {
  key: 5,
  class: "restart-prompt"
}, by = {
  key: 3,
  class: "phase-content error"
}, $y = { class: "error-message" }, Cy = /* @__PURE__ */ _e({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = U(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = U(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = U(() => n.value.length > 0);
    function i(u, d) {
      var v, g;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === d ? "installing" : "pending";
    }
    function r(u) {
      var d, m;
      return (m = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, g, w;
      return a(), c("div", Yh, [
        e.progress.phase === "resolving" ? (a(), c("div", Jh, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), c("div", Xh, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Qh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Zh, [
            t("div", ey, [
              t("div", {
                class: "progress-fill",
                style: Kt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", ty, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", sy, [
            (a(!0), c(K, null, be(e.progress.nodesToInstall, (p, _) => (a(), c("div", {
              key: p,
              class: Te(["install-item", i(p, _)])
            }, [
              t("span", oy, [
                i(p, _) === "pending" ? (a(), c("span", ny, "○")) : i(p, _) === "installing" ? (a(), c("span", ay, "◌")) : i(p, _) === "complete" ? (a(), c("span", ly, "✓")) : i(p, _) === "failed" ? (a(), c("span", iy, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              r(p) ? (a(), c("span", ry, f(r(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), c("div", cy, [
          t("div", uy, [
            t("span", {
              class: Te(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", dy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", fy, [
            e.progress.nodesInstalled.length > 0 ? (a(), c("div", my, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", vy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", py, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", gy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", hy, [
              (a(!0), c(K, null, be(n.value, (p) => (a(), c("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", yy, f(p.node_id), 1),
                t("span", wy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), c("div", _y, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), c("div", ky, [
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
        ])) : e.progress.phase === "error" ? (a(), c("div", by, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", $y, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), xy = /* @__PURE__ */ ke(Cy, [["__scopeId", "data-v-5efaae58"]]), Sy = {
  key: 0,
  class: "loading-state"
}, Iy = {
  key: 1,
  class: "wizard-content"
}, Ey = {
  key: 0,
  class: "step-content"
}, Ty = { class: "analysis-summary" }, Py = { class: "analysis-header" }, Ry = { class: "summary-description" }, My = { class: "stats-grid" }, Dy = { class: "stat-card" }, Ly = { class: "stat-items" }, Oy = {
  key: 0,
  class: "stat-item success"
}, Ay = { class: "stat-count" }, Uy = {
  key: 1,
  class: "stat-item info"
}, Ny = { class: "stat-count" }, zy = {
  key: 2,
  class: "stat-item warning"
}, Fy = { class: "stat-count" }, By = {
  key: 3,
  class: "stat-item error"
}, Vy = { class: "stat-count" }, Wy = { class: "stat-card" }, Gy = { class: "stat-items" }, jy = { class: "stat-item success" }, Hy = { class: "stat-count" }, Ky = {
  key: 0,
  class: "stat-item info"
}, qy = { class: "stat-count" }, Yy = {
  key: 1,
  class: "stat-item warning"
}, Jy = { class: "stat-count" }, Xy = {
  key: 2,
  class: "stat-item warning"
}, Qy = { class: "stat-count" }, Zy = {
  key: 3,
  class: "stat-item error"
}, e1 = { class: "stat-count" }, t1 = {
  key: 0,
  class: "status-message warning"
}, s1 = { class: "status-text" }, o1 = {
  key: 1,
  class: "status-message info"
}, n1 = { class: "status-text" }, a1 = {
  key: 2,
  class: "status-message info"
}, l1 = { class: "status-text" }, i1 = {
  key: 3,
  class: "status-message warning"
}, r1 = { class: "status-text" }, c1 = {
  key: 4,
  class: "status-message success"
}, u1 = {
  key: 5,
  class: "category-mismatch-section"
}, d1 = { class: "mismatch-list" }, f1 = { class: "mismatch-path" }, m1 = { class: "mismatch-target" }, v1 = {
  key: 3,
  class: "step-content"
}, p1 = { class: "review-summary" }, g1 = { class: "review-stats" }, h1 = { class: "review-stat" }, y1 = { class: "stat-value" }, w1 = { class: "review-stat" }, _1 = { class: "stat-value" }, k1 = { class: "review-stat" }, b1 = { class: "stat-value" }, $1 = { class: "review-stat" }, C1 = { class: "stat-value" }, x1 = {
  key: 0,
  class: "review-section"
}, S1 = { class: "section-title" }, I1 = { class: "review-items" }, E1 = { class: "item-name" }, T1 = { class: "item-choice" }, P1 = {
  key: 0,
  class: "choice-badge install"
}, R1 = {
  key: 1,
  class: "choice-badge skip"
}, M1 = {
  key: 1,
  class: "review-section"
}, D1 = { class: "section-title" }, L1 = { class: "review-items" }, O1 = { class: "item-name" }, A1 = { class: "item-choice" }, U1 = {
  key: 0,
  class: "choice-badge install"
}, N1 = {
  key: 1,
  class: "choice-badge optional"
}, z1 = {
  key: 2,
  class: "choice-badge skip"
}, F1 = {
  key: 1,
  class: "choice-badge pending"
}, B1 = {
  key: 2,
  class: "review-section"
}, V1 = { class: "section-title" }, W1 = { class: "review-items download-details" }, G1 = { class: "download-info" }, j1 = { class: "item-name" }, H1 = { class: "download-meta" }, K1 = { class: "download-path" }, q1 = ["title"], Y1 = {
  key: 3,
  class: "review-section"
}, J1 = { class: "section-title" }, X1 = { class: "review-items" }, Q1 = { class: "item-name" }, Z1 = { class: "item-choice" }, e0 = {
  key: 0,
  class: "choice-badge install"
}, t0 = {
  key: 1,
  class: "choice-badge download"
}, s0 = {
  key: 2,
  class: "choice-badge optional"
}, o0 = {
  key: 3,
  class: "choice-badge skip"
}, n0 = {
  key: 4,
  class: "choice-badge skip"
}, a0 = {
  key: 1,
  class: "choice-badge download"
}, l0 = {
  key: 2,
  class: "choice-badge pending"
}, i0 = {
  key: 4,
  class: "no-choices"
}, r0 = /* @__PURE__ */ _e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: r, queueModelDownloads: u, progress: d, resetProgress: m } = Ir(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = st(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), D = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Set()), j = U(() => {
      const W = [
        { id: "analysis", label: "Analysis" }
      ];
      return (z.value || M.value) && W.push({ id: "nodes", label: "Nodes" }), I.value && W.push({ id: "models", label: "Models" }), W.push({ id: "review", label: "Review" }), $.value === "applying" && W.push({ id: "applying", label: "Applying" }), W;
    }), q = U(() => w.value ? w.value.stats.needs_user_input : !1), z = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), T = U(() => w.value ? w.value.stats.download_intents > 0 : !1), M = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), te = U(() => w.value ? w.value.nodes.resolved.length : 0), X = U(() => w.value ? w.value.models.resolved.filter((W) => W.has_category_mismatch) : []), H = U(() => X.value.length > 0), se = U(() => z.value || M.value ? "nodes" : I.value ? "models" : "review"), Z = U(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((me) => !me.is_installed), F = /* @__PURE__ */ new Set();
      return W.filter((me) => F.has(me.package.package_id) ? !1 : (F.add(me.package.package_id), !0));
    }), N = U(() => {
      if (!w.value) return [];
      const W = w.value.nodes.resolved.filter((me) => !me.is_installed), F = /* @__PURE__ */ new Map();
      for (const me of W) {
        const Ve = F.get(me.package.package_id);
        Ve ? Ve.node_types_count++ : F.set(me.package.package_id, {
          package_id: me.package.package_id,
          title: me.package.title,
          node_types_count: 1
        });
      }
      return Array.from(F.values());
    }), G = U(() => Z.value.filter((W) => !C.value.has(W.package.package_id))), O = U(() => w.value ? w.value.models.resolved.filter(
      (W) => W.match_type === "download_intent" || W.match_type === "property_download_intent"
    ).map((W) => ({
      filename: W.reference.widget_value,
      reference: W.reference,
      is_download_intent: !0,
      resolved_model: W.model,
      download_source: W.download_source,
      target_path: W.target_path
    })) : []), le = U(() => {
      if (!w.value) return [];
      const W = w.value.nodes.unresolved.map((me) => ({
        node_type: me.reference.node_type,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.nodes.ambiguous.map((me) => ({
        node_type: me.reference.node_type,
        has_multiple_options: !0,
        options: me.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...W, ...F];
    }), pe = U(() => {
      if (!w.value) return [];
      const W = w.value.models.unresolved.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), F = w.value.models.ambiguous.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        has_multiple_options: !0,
        options: me.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...W, ...F];
    }), Me = U(() => {
      const W = pe.value, F = O.value.map((me) => ({
        filename: me.filename,
        reference: me.reference,
        is_download_intent: !0,
        resolved_model: me.resolved_model,
        download_source: me.download_source,
        target_path: me.target_path,
        options: void 0
      }));
      return [...W, ...F];
    }), Ae = U(() => O.value.filter((W) => {
      const F = E.value.get(W.filename);
      return F ? F.action === "download" : !0;
    }).map((W) => ({
      filename: W.filename,
      url: W.download_source,
      target_path: W.target_path
    })));
    function ue(W, F = 50) {
      return W.length <= F ? W : W.slice(0, F - 3) + "...";
    }
    const ie = U(() => {
      let W = G.value.length;
      for (const F of D.value.values())
        F.action === "install" && W++;
      for (const F of E.value.values())
        F.action === "select" && W++;
      return W;
    }), B = U(() => {
      let W = 0;
      for (const F of E.value.values())
        F.action === "download" && W++;
      for (const F of O.value)
        E.value.get(F.filename) || W++;
      return W;
    }), ee = U(() => {
      let W = 0;
      for (const F of D.value.values())
        F.action === "optional" && W++;
      for (const F of E.value.values())
        F.action === "optional" && W++;
      return W;
    }), ge = U(() => {
      let W = C.value.size;
      for (const F of D.value.values())
        F.action === "skip" && W++;
      for (const F of E.value.values())
        F.action === "skip" && W++;
      for (const F of le.value)
        D.value.has(F.node_type) || W++;
      for (const F of pe.value)
        E.value.has(F.filename) || W++;
      return W;
    }), ve = U(() => {
      const W = {};
      if (W.analysis = { resolved: 1, total: 1 }, z.value) {
        const F = le.value.length, me = le.value.filter(
          (Ve) => D.value.has(Ve.node_type)
        ).length;
        W.nodes = { resolved: me, total: F };
      }
      if (I.value) {
        const F = Me.value.length, me = Me.value.filter(
          (Ve) => E.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        W.models = { resolved: me, total: F };
      }
      if (W.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const F = d.totalFiles || 1, me = d.completedFiles.length;
        W.applying = { resolved: me, total: F };
      }
      return W;
    });
    function fe(W) {
      $.value = W;
    }
    function De() {
      const W = j.value.findIndex((F) => F.id === $.value);
      W > 0 && ($.value = j.value[W - 1].id);
    }
    function Re() {
      const W = j.value.findIndex((F) => F.id === $.value);
      W < j.value.length - 1 && ($.value = j.value[W + 1].id);
    }
    async function L() {
      p.value = !0, S.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (W) {
        S.value = W instanceof Error ? W.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function V() {
      P.value.includes("analysis") || P.value.push("analysis"), z.value || M.value ? $.value = "nodes" : I.value ? $.value = "models" : $.value = "review";
    }
    function ne(W) {
      D.value.set(W, { action: "optional" });
    }
    function ce(W) {
      D.value.set(W, { action: "skip" });
    }
    function ye(W, F) {
      var Ve;
      const me = le.value.find((Qe) => Qe.node_type === W);
      (Ve = me == null ? void 0 : me.options) != null && Ve[F] && D.value.set(W, {
        action: "install",
        package_id: me.options[F].package_id
      });
    }
    function we(W, F) {
      D.value.set(W, {
        action: "install",
        package_id: F
      });
    }
    function Ie(W) {
      D.value.delete(W);
    }
    function Ee(W) {
      C.value.has(W) ? C.value.delete(W) : C.value.add(W);
    }
    function re(W) {
      E.value.set(W, { action: "optional" });
    }
    function he(W) {
      E.value.set(W, { action: "skip" });
    }
    function Ne(W, F) {
      var Ve;
      const me = pe.value.find((Qe) => Qe.filename === W);
      (Ve = me == null ? void 0 : me.options) != null && Ve[F] && E.value.set(W, {
        action: "select",
        selected_model: me.options[F].model
      });
    }
    function Pe(W, F, me) {
      E.value.set(W, {
        action: "download",
        url: F,
        target_path: me
      });
    }
    function oe(W) {
      E.value.delete(W);
    }
    async function J(W) {
      try {
        await g(W);
      } catch (F) {
        S.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function Oe() {
      var W;
      _.value = !0, S.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const F = await i(o.workflowName, D.value, E.value, C.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const me = [
          ...F.nodes_to_install || [],
          ...G.value.map((Qe) => Qe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(me)], d.nodesToInstall.length > 0 && await r(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((W = d.nodeInstallProgress) == null ? void 0 : W.completedNodes.some((Qe) => !Qe.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (F) {
        S.value = F instanceof Error ? F.message : "Failed to apply resolution", d.error = S.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function Ce() {
      n("refresh"), n("restart"), n("close");
    }
    async function $e() {
      var F;
      const W = ((F = d.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((me) => !me.success).map((me) => me.node_id)) || [];
      if (W.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: W.length
        }, d.nodesToInstall = W, d.nodesInstalled = [], d.installError = void 0;
        try {
          await r(o.workflowName), d.phase = "complete";
        } catch (me) {
          d.error = me instanceof Error ? me.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Xe(L), (W, F) => (a(), R(mt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (me) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), c("div", Sy, [...F[2] || (F[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), c("div", Iy, [
          x(Lp, {
            steps: j.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": ve.value,
            onStepChange: fe
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), c("div", Ey, [
            t("div", Ty, [
              t("div", Py, [
                F[3] || (F[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Ry, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", My, [
                t("div", Dy, [
                  F[12] || (F[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Ly, [
                    te.value > 0 ? (a(), c("div", Oy, [
                      F[4] || (F[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ay, f(te.value), 1),
                      F[5] || (F[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), c("div", Uy, [
                      F[6] || (F[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ny, f(w.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), c("div", zy, [
                      F[8] || (F[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Fy, f(w.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), c("div", By, [
                      F[10] || (F[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Vy, f(w.value.nodes.unresolved.length), 1),
                      F[11] || (F[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Wy, [
                  F[23] || (F[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Gy, [
                    t("div", jy, [
                      F[13] || (F[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Hy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      F[14] || (F[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), c("div", Ky, [
                      F[15] || (F[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", qy, f(w.value.stats.download_intents), 1),
                      F[16] || (F[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    H.value ? (a(), c("div", Yy, [
                      F[17] || (F[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Jy, f(X.value.length), 1),
                      F[18] || (F[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), c("div", Xy, [
                      F[19] || (F[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Qy, f(w.value.models.ambiguous.length), 1),
                      F[20] || (F[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), c("div", Zy, [
                      F[21] || (F[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", e1, f(w.value.models.unresolved.length), 1),
                      F[22] || (F[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              q.value ? (a(), c("div", t1, [
                F[24] || (F[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", s1, f(le.value.length + pe.value.length) + " items need your input", 1)
              ])) : M.value ? (a(), c("div", o1, [
                F[25] || (F[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", n1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(T.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (a(), c("div", a1, [
                F[26] || (F[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", l1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : H.value ? (a(), c("div", i1, [
                F[27] || (F[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", r1, f(X.value.length) + " model" + f(X.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), c("div", c1, [...F[28] || (F[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              H.value ? (a(), c("div", u1, [
                F[31] || (F[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", d1, [
                  (a(!0), c(K, null, be(X.value, (me) => {
                    var Ve, Qe;
                    return a(), c("div", {
                      key: me.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", f1, f(me.actual_category) + "/" + f((Ve = me.model) == null ? void 0 : Ve.filename), 1),
                      F[30] || (F[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", m1, f((Qe = me.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      me.file_path ? (a(), R(Le, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => J(me.file_path)
                      }, {
                        default: h(() => [...F[29] || (F[29] = [
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
          $.value === "nodes" ? (a(), R(th, {
            key: 1,
            nodes: le.value,
            "node-choices": D.value,
            "auto-resolved-packages": N.value,
            "skipped-packages": C.value,
            onMarkOptional: ne,
            onSkip: ce,
            onOptionSelected: ye,
            onManualEntry: we,
            onClearChoice: Ie,
            onPackageSkip: Ee
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), R(qh, {
            key: 2,
            models: Me.value,
            "model-choices": E.value,
            onMarkOptional: re,
            onSkip: he,
            onOptionSelected: Ne,
            onDownloadUrl: Pe,
            onClearChoice: oe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), c("div", v1, [
            t("div", p1, [
              F[37] || (F[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", g1, [
                t("div", h1, [
                  t("span", y1, f(ie.value), 1),
                  F[32] || (F[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", w1, [
                  t("span", _1, f(B.value), 1),
                  F[33] || (F[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", k1, [
                  t("span", b1, f(ee.value), 1),
                  F[34] || (F[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", $1, [
                  t("span", C1, f(ge.value), 1),
                  F[35] || (F[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (a(), c("div", x1, [
                t("h4", S1, "Node Packages (" + f(N.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), c(K, null, be(N.value, (me) => (a(), c("div", {
                    key: me.package_id,
                    class: "review-item"
                  }, [
                    t("code", E1, f(me.package_id), 1),
                    t("div", T1, [
                      C.value.has(me.package_id) ? (a(), c("span", R1, "Skipped")) : (a(), c("span", P1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              le.value.length > 0 ? (a(), c("div", M1, [
                t("h4", D1, "Node Choices (" + f(le.value.length) + ")", 1),
                t("div", L1, [
                  (a(!0), c(K, null, be(le.value, (me) => {
                    var Ve, Qe, vt, lt;
                    return a(), c("div", {
                      key: me.node_type,
                      class: "review-item"
                    }, [
                      t("code", O1, f(me.node_type), 1),
                      t("div", A1, [
                        D.value.has(me.node_type) ? (a(), c(K, { key: 0 }, [
                          ((Ve = D.value.get(me.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), c("span", U1, f((Qe = D.value.get(me.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = D.value.get(me.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), c("span", N1, " Optional ")) : ((lt = D.value.get(me.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), c("span", z1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), c("span", F1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ae.value.length > 0 ? (a(), c("div", B1, [
                t("h4", V1, "Models to Download (" + f(Ae.value.length) + ")", 1),
                t("div", W1, [
                  (a(!0), c(K, null, be(Ae.value, (me) => (a(), c("div", {
                    key: me.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", G1, [
                      t("code", j1, f(me.filename), 1),
                      t("div", H1, [
                        t("span", K1, "→ " + f(me.target_path), 1),
                        me.url ? (a(), c("span", {
                          key: 0,
                          class: "download-url",
                          title: me.url
                        }, f(ue(me.url)), 9, q1)) : y("", !0)
                      ])
                    ]),
                    F[36] || (F[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Me.value.length > 0 ? (a(), c("div", Y1, [
                t("h4", J1, "Models (" + f(Me.value.length) + ")", 1),
                t("div", X1, [
                  (a(!0), c(K, null, be(Me.value, (me) => {
                    var Ve, Qe, vt, lt, ut, Rt, Ft;
                    return a(), c("div", {
                      key: me.filename,
                      class: "review-item"
                    }, [
                      t("code", Q1, f(me.filename), 1),
                      t("div", Z1, [
                        E.value.has(me.filename) ? (a(), c(K, { key: 0 }, [
                          ((Ve = E.value.get(me.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), c("span", e0, f((vt = (Qe = E.value.get(me.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((lt = E.value.get(me.filename)) == null ? void 0 : lt.action) === "download" ? (a(), c("span", t0, " Download ")) : ((ut = E.value.get(me.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), c("span", s0, " Optional ")) : ((Rt = E.value.get(me.filename)) == null ? void 0 : Rt.action) === "skip" ? (a(), c("span", o0, " Skip ")) : ((Ft = E.value.get(me.filename)) == null ? void 0 : Ft.action) === "cancel_download" ? (a(), c("span", n0, " Cancel Download ")) : y("", !0)
                        ], 64)) : me.is_download_intent ? (a(), c("span", a0, " Pending Download ")) : (a(), c("span", l0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Z.value.length === 0 && le.value.length === 0 && Me.value.length === 0 ? (a(), c("div", i0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), R(xy, {
            key: 4,
            progress: We(d),
            onRestart: Ce,
            onRetryFailed: $e
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), R(Le, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: De
        }, {
          default: h(() => [...F[38] || (F[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        F[41] || (F[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (a(), R(Le, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (me) => n("close"))
        }, {
          default: h(() => [
            b(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), R(Le, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: V
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
          default: h(() => [...F[39] || (F[39] = [
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
          default: h(() => [...F[40] || (F[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), c0 = /* @__PURE__ */ ke(r0, [["__scopeId", "data-v-40d8d5a8"]]), u0 = { class: "search-input-wrapper" }, d0 = ["value", "placeholder"], f0 = /* @__PURE__ */ _e({
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
    function r(d) {
      const m = d.target.value;
      o.debounce > 0 ? (clearTimeout(i), i = window.setTimeout(() => {
        n("update:modelValue", m);
      }, o.debounce)) : n("update:modelValue", m);
    }
    function u() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return Xe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), c("div", u0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: r,
        onKeyup: es(u, ["escape"])
      }, null, 40, d0),
      e.clearable && e.modelValue ? (a(), c("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), m0 = /* @__PURE__ */ ke(f0, [["__scopeId", "data-v-266f857a"]]), v0 = { class: "search-bar" }, p0 = /* @__PURE__ */ _e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), c("div", v0, [
      x(m0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ ke(p0, [["__scopeId", "data-v-3d51bbfd"]]), g0 = { class: "section-group" }, h0 = {
  key: 0,
  class: "section-content"
}, y0 = /* @__PURE__ */ _e({
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
    return (r, u) => (a(), c("section", g0, [
      x(Ut, {
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
      !e.collapsible || l.value ? (a(), c("div", h0, [
        Ke(r.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ ke(y0, [["__scopeId", "data-v-c48e33ed"]]), w0 = { class: "item-header" }, _0 = {
  key: 0,
  class: "item-icon"
}, k0 = { class: "item-info" }, b0 = {
  key: 0,
  class: "item-title"
}, $0 = {
  key: 1,
  class: "item-subtitle"
}, C0 = {
  key: 0,
  class: "item-details"
}, x0 = {
  key: 1,
  class: "item-actions"
}, S0 = /* @__PURE__ */ _e({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = U(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), c("div", {
      class: Te(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      t("div", w0, [
        l.$slots.icon ? (a(), c("span", _0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", k0, [
          l.$slots.title ? (a(), c("div", b0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), c("div", $0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), c("div", C0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), c("div", x0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ ke(S0, [["__scopeId", "data-v-cc435e0e"]]), I0 = { class: "loading-state" }, E0 = { class: "loading-message" }, T0 = /* @__PURE__ */ _e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), c("div", I0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", E0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ ke(T0, [["__scopeId", "data-v-ad8436c9"]]), P0 = { class: "error-state" }, R0 = { class: "error-message" }, M0 = /* @__PURE__ */ _e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), c("div", P0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", R0, f(e.message), 1),
      e.retry ? (a(), R(de, {
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
}), Rs = /* @__PURE__ */ ke(M0, [["__scopeId", "data-v-5397be48"]]), D0 = /* @__PURE__ */ _e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = st(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = U(
      () => i.value.filter((N) => N.status === "broken")
    ), S = U(
      () => i.value.filter((N) => N.status === "new")
    ), $ = U(
      () => i.value.filter((N) => N.status === "modified")
    ), P = U(
      () => i.value.filter((N) => N.status === "synced")
    ), D = U(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter((G) => G.name.toLowerCase().includes(N));
    }), E = U(
      () => _.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), C = U(
      () => S.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = U(
      () => $.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = U(
      () => P.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = U(
      () => v.value ? q.value : q.value.slice(0, 5)
    );
    async function I(N = !1) {
      r.value = !0, u.value = null;
      try {
        i.value = await l(N);
      } catch (G) {
        u.value = G instanceof Error ? G.message : "Failed to load workflows";
      } finally {
        r.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function T(N) {
      p.value = N, g.value = !0;
    }
    function M(N) {
      p.value = N, w.value = !0;
    }
    function te() {
      n("refresh");
    }
    async function X() {
      w.value = !1, await I(!0);
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function se(N) {
      const G = [];
      return N.missing_nodes > 0 && G.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && G.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && G.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && G.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), G.length > 0 ? G.join(", ") : "Has issues";
    }
    function Z(N) {
      const G = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : G || "Unknown";
    }
    return Xe(I), (N, G) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          x($o, {
            modelValue: d.value,
            "onUpdate:modelValue": G[0] || (G[0] = (O) => d.value = O),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          r.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), R(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            E.value.length ? (a(), R(it, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(E.value, (O) => (a(), R(Et, {
                  key: O.name,
                  status: "broken"
                }, {
                  icon: h(() => [...G[7] || (G[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(se(O)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => M(O.name)
                    }, {
                      default: h(() => [...G[8] || (G[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => T(O.name)
                    }, {
                      default: h(() => [...G[9] || (G[9] = [
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
            C.value.length ? (a(), R(it, {
              key: 1,
              title: "NEW",
              count: C.value.length
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(C.value, (O) => (a(), R(Et, {
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
                    b(f(Z(O)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => T(O.name)
                    }, {
                      default: h(() => [...G[10] || (G[10] = [
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
            j.value.length ? (a(), R(it, {
              key: 2,
              title: "MODIFIED",
              count: j.value.length
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(j.value, (O) => (a(), R(Et, {
                  key: O.name,
                  status: O.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...G[11] || (G[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(O.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Z(O)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => T(O.name)
                    }, {
                      default: h(() => [...G[12] || (G[12] = [
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
            q.value.length ? (a(), R(it, {
              key: 3,
              title: "SYNCED",
              count: q.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: G[2] || (G[2] = (O) => m.value = O)
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(z.value, (O) => (a(), R(Et, {
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
                    b(f(Z(O)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => T(O.name)
                    }, {
                      default: h(() => [...G[13] || (G[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && q.value.length > 5 ? (a(), R(de, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: G[1] || (G[1] = (O) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(q.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            D.value.length ? y("", !0) : (a(), R(ns, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), R(bp, {
        key: 0,
        "workflow-name": p.value,
        onClose: G[3] || (G[3] = (O) => g.value = !1),
        onResolve: G[4] || (G[4] = (O) => M(p.value)),
        onRefresh: G[5] || (G[5] = (O) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), R(c0, {
        key: 1,
        "workflow-name": p.value,
        onClose: X,
        onInstall: te,
        onRefresh: G[6] || (G[6] = (O) => n("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), L0 = /* @__PURE__ */ ke(D0, [["__scopeId", "data-v-fa3f076e"]]), O0 = /* @__PURE__ */ _e({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ ke(O0, [["__scopeId", "data-v-ccb7816e"]]), A0 = {
  key: 0,
  class: "model-details"
}, U0 = { class: "detail-section" }, N0 = { class: "detail-row" }, z0 = { class: "detail-value mono" }, F0 = { class: "detail-row" }, B0 = { class: "detail-value mono" }, V0 = { class: "detail-row" }, W0 = { class: "detail-value mono" }, G0 = { class: "detail-row" }, j0 = { class: "detail-value" }, H0 = { class: "detail-row" }, K0 = { class: "detail-value" }, q0 = { class: "detail-row" }, Y0 = { class: "detail-value" }, J0 = { class: "detail-section" }, X0 = { class: "section-header" }, Q0 = {
  key: 0,
  class: "locations-list"
}, Z0 = { class: "location-path mono" }, ew = {
  key: 0,
  class: "location-modified"
}, tw = ["onClick"], sw = {
  key: 1,
  class: "empty-state"
}, ow = { class: "detail-section" }, nw = { class: "section-header" }, aw = {
  key: 0,
  class: "sources-list"
}, lw = { class: "source-type" }, iw = ["href"], rw = ["disabled", "onClick"], cw = {
  key: 1,
  class: "empty-state"
}, uw = { class: "add-source-form" }, dw = ["disabled"], fw = {
  key: 2,
  class: "source-error"
}, mw = {
  key: 3,
  class: "source-success"
}, vw = /* @__PURE__ */ _e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: r } = st(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
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
    async function C(I) {
      try {
        await r(I), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function j() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await z();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function q(I) {
      if (u.value) {
        w.value = I, p.value = null, _.value = null;
        try {
          await i(u.value.hash, I), P("Source removed"), await z();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function z() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Xe(z), (I, T) => {
      var M;
      return a(), c(K, null, [
        x(mt, {
          title: `Model Details: ${((M = u.value) == null ? void 0 : M.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: T[5] || (T[5] = (te) => I.$emit("close"))
        }, {
          body: h(() => {
            var te, X, H, se;
            return [
              u.value ? (a(), c("div", A0, [
                t("section", U0, [
                  t("div", N0, [
                    T[6] || (T[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", z0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (Z) => E(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", F0, [
                    T[7] || (T[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", B0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (Z) => E(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", V0, [
                    T[8] || (T[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", W0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (Z) => E(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", G0, [
                    T[9] || (T[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", j0, f(D(u.value.size)), 1)
                  ]),
                  t("div", H0, [
                    T[10] || (T[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", K0, f(u.value.category), 1)
                  ]),
                  t("div", q0, [
                    T[11] || (T[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", Y0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", J0, [
                  t("h4", X0, "Locations (" + f(((te = u.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (X = u.value.locations) != null && X.length ? (a(), c("div", Q0, [
                    (a(!0), c(K, null, be(u.value.locations, (Z, N) => (a(), c("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      t("span", Z0, f(Z.path), 1),
                      Z.modified ? (a(), c("span", ew, "Modified: " + f(Z.modified), 1)) : y("", !0),
                      Z.path ? (a(), c("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (G) => C(Z.path)
                      }, " Open File Location ", 8, tw)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), c("div", sw, "No locations found"))
                ]),
                t("section", ow, [
                  t("h4", nw, "Download Sources (" + f(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (se = u.value.sources) != null && se.length ? (a(), c("div", aw, [
                    (a(!0), c(K, null, be(u.value.sources, (Z, N) => (a(), c("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      t("span", lw, f(Z.type) + ":", 1),
                      t("a", {
                        href: Z.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Z.url), 9, iw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Z.url,
                        onClick: (G) => q(Z.url)
                      }, f(w.value === Z.url ? "..." : "×"), 9, rw)
                    ]))), 128))
                  ])) : (a(), c("div", cw, " No download sources configured ")),
                  t("div", uw, [
                    qe(t("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (Z) => v.value = Z),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: j
                    }, f(g.value ? "Adding..." : "Add Source"), 9, dw)
                  ]),
                  p.value ? (a(), c("p", fw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), c("p", mw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (te) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), R(wt, { to: "body" }, [
          S.value ? (a(), c("div", {
            key: 0,
            class: Te(["toast", S.value.type])
          }, f(S.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), nl = /* @__PURE__ */ ke(vw, [["__scopeId", "data-v-f15cbb56"]]), pw = /* @__PURE__ */ _e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = st(), i = k([]), r = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = U(
      () => i.value.reduce((z, I) => z + (I.size || 0), 0)
    ), S = U(() => {
      if (!v.value.trim()) return i.value;
      const z = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(z));
    }), $ = U(() => {
      if (!v.value.trim()) return r.value;
      const z = v.value.toLowerCase();
      return r.value.filter((I) => I.filename.toLowerCase().includes(z));
    }), P = U(() => {
      const z = {};
      for (const T of S.value) {
        const M = T.type || "other";
        z[M] || (z[M] = []), z[M].push(T);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([T], [M]) => {
        const te = I.indexOf(T), X = I.indexOf(M);
        return te >= 0 && X >= 0 ? te - X : te >= 0 ? -1 : X >= 0 ? 1 : T.localeCompare(M);
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
    function C(z) {
      o("navigate", "model-index");
    }
    function j(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function q() {
      d.value = !0, m.value = null;
      try {
        const z = await n();
        i.value = z, r.value = [];
        const I = await l();
        u.value = I.environment || "production";
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Xe(q), (z, I) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (T) => g.value = !0)
          })
        ]),
        search: h(() => [
          x($o, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => v.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), R(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            i.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(D(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(K, null, be(P.value, (T) => (a(), R(it, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(T.models, (M) => (a(), R(Et, {
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
                    x(dt, {
                      label: "Used by:",
                      value: (M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    x(dt, {
                      label: "Path:",
                      value: M.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (te) => E(M)
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
                (a(!0), c(K, null, be($.value, (T) => (a(), R(Et, {
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
                      x(dt, {
                        label: "Required by:",
                        value: ((M = T.workflow_names) == null ? void 0 : M.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => j(T.filename)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => C(T.filename)
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
      x(as, {
        show: g.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (T) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            I[10] || (I[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            I[11] || (I[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          x(de, {
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
      w.value ? (a(), R(nl, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (T) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), gw = /* @__PURE__ */ ke(pw, [["__scopeId", "data-v-cb4f12b3"]]);
function hw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Da(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!hw(o.hostname)) return { kind: "unknown" };
  const n = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (n[0] === "datasets" || n[0] === "spaces") return { kind: "unknown" };
  if (n.length < 2) return { kind: "unknown" };
  const l = `${n[0]}/${n[1]}`, i = n.slice(2);
  if (i.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const r = i[0];
  if (r === "tree") {
    const u = i[1] || "main";
    return { kind: "repo", repoId: l, revision: u };
  }
  if (r === "resolve") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  if (r === "blob") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function yw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function ww(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${yw(o)}`;
}
const _w = { class: "hf-header" }, kw = { class: "hf-title" }, bw = {
  key: 0,
  class: "revision-pill"
}, $w = { class: "hf-modal-content" }, Cw = { class: "toolbar" }, xw = { class: "toolbar-actions" }, Sw = { class: "file-list-container" }, Iw = {
  key: 0,
  class: "empty-state"
}, Ew = {
  key: 1,
  class: "file-list"
}, Tw = ["onClick"], Pw = ["checked", "onChange"], Rw = { class: "file-path" }, Mw = { class: "file-size" }, Dw = { class: "destination-section" }, Lw = { class: "destination-row" }, Ow = {
  key: 0,
  class: "path-separator"
}, Aw = { class: "summary-bar" }, Uw = { class: "summary-count" }, Nw = { class: "summary-size" }, zw = /* @__PURE__ */ _e({
  __name: "HuggingFaceRepoModal",
  props: {
    show: { type: Boolean },
    url: {}
  },
  emits: ["close", "queue"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = st(), r = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k("main"), w = k(""), p = k(!0), _ = k(""), S = k(""), $ = k(""), P = k([]), D = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, E = U(() => v.value || "Browse HuggingFace Repository"), C = U(() => {
      let G = r.value;
      if (p.value && (G = G.filter((O) => O.is_model_file)), w.value.trim()) {
        const O = w.value.toLowerCase();
        G = G.filter((le) => le.path.toLowerCase().includes(O));
      }
      return G;
    }), j = U(() => {
      const G = P.value.map((O) => ({
        label: O,
        value: O
      }));
      return G.push({ label: "Custom path...", value: "__custom__" }), G;
    }), q = U(() => _.value === "__custom__" ? $.value.trim().length > 0 : _.value.length > 0), z = U(() => {
      let G = 0;
      for (const O of u.value) {
        const le = r.value.find((pe) => pe.path === O);
        le && (G += le.size);
      }
      return G;
    });
    function I(G) {
      if (G === 0) return "0 B";
      const O = 1024 * 1024 * 1024, le = 1024 * 1024, pe = 1024;
      return G >= O ? `${(G / O).toFixed(2)} GB` : G >= le ? `${(G / le).toFixed(1)} MB` : G >= pe ? `${(G / pe).toFixed(0)} KB` : `${G} B`;
    }
    function T(G) {
      const O = G.match(D);
      return O ? `${O[1]}${O[4]}` : null;
    }
    function M(G) {
      const O = new Set(u.value), le = O.has(G.path), pe = G.shard_group || T(G.path);
      if (pe) {
        const Me = r.value.filter((Ae) => (Ae.shard_group || T(Ae.path)) === pe);
        le ? Me.forEach((Ae) => O.delete(Ae.path)) : Me.forEach((Ae) => O.add(Ae.path));
      } else
        le ? O.delete(G.path) : O.add(G.path);
      u.value = O;
    }
    function te() {
      const G = new Set(u.value);
      for (const O of r.value)
        O.is_model_file && G.add(O.path);
      u.value = G;
    }
    function X() {
      u.value = /* @__PURE__ */ new Set();
    }
    function H() {
      return _.value === "__custom__" ? $.value.trim() : S.value.trim() ? `${_.value}/${S.value.trim()}` : _.value;
    }
    function se() {
      if (u.value.size === 0 || !q.value) return;
      const G = H(), O = [];
      for (const le of u.value) {
        const pe = r.value.find((Me) => Me.path === le);
        pe && O.push({
          url: ww(v.value, g.value, pe.path),
          destination: G,
          filename: pe.path.split("/").pop() || pe.path
        });
      }
      n("queue", O);
    }
    async function Z() {
      if (o.url) {
        d.value = !0, m.value = null;
        try {
          const G = Da(o.url);
          if (G.kind === "unknown") {
            m.value = "Invalid HuggingFace URL", d.value = !1;
            return;
          }
          v.value = G.repoId || "", g.value = G.revision || "main";
          const O = await l(o.url);
          r.value = O.files, v.value = O.repo_id, g.value = O.revision, u.value = /* @__PURE__ */ new Set();
        } catch (G) {
          m.value = G instanceof Error ? G.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function N() {
      try {
        const G = await i();
        P.value = G.directories, G.directories.length > 0 && !_.value && (_.value = G.directories[0]);
      } catch {
        P.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return gt(() => o.url, () => {
      o.show && o.url && Z();
    }), gt(() => o.show, (G) => {
      G ? (Z(), N()) : (r.value = [], u.value = /* @__PURE__ */ new Set(), w.value = "", S.value = "", $.value = "");
    }), Xe(() => {
      o.show && (Z(), N());
    }), (G, O) => e.show ? (a(), R(mt, {
      key: 0,
      title: E.value,
      size: "lg",
      loading: d.value,
      error: m.value,
      "fixed-height": "",
      onClose: O[7] || (O[7] = (le) => G.$emit("close"))
    }, {
      header: h(() => [
        t("div", _w, [
          t("span", kw, f(v.value || "HuggingFace Repo"), 1),
          g.value ? (a(), c("span", bw, f(g.value), 1)) : y("", !0)
        ])
      ]),
      body: h(() => [
        t("div", $w, [
          t("div", Cw, [
            x(Lt, {
              modelValue: w.value,
              "onUpdate:modelValue": O[0] || (O[0] = (le) => w.value = le),
              placeholder: "Filter files...",
              type: "search",
              class: "search-input"
            }, null, 8, ["modelValue"]),
            t("div", xw, [
              t("button", {
                class: Te(["toggle-btn", { active: p.value }]),
                onClick: O[1] || (O[1] = (le) => p.value = !p.value)
              }, f(p.value ? "Models Only" : "All Files"), 3),
              t("button", {
                class: "action-btn",
                onClick: te
              }, "Auto-Select Models"),
              t("button", {
                class: "action-btn",
                onClick: X
              }, "Clear")
            ])
          ]),
          t("div", Sw, [
            C.value.length === 0 ? (a(), c("div", Iw, f(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), c("div", Ew, [
              (a(!0), c(K, null, be(C.value, (le) => (a(), c("div", {
                key: le.path,
                class: Te(["file-item", { selected: u.value.has(le.path) }]),
                onClick: (pe) => M(le)
              }, [
                t("input", {
                  type: "checkbox",
                  checked: u.value.has(le.path),
                  class: "file-checkbox",
                  onClick: O[2] || (O[2] = at(() => {
                  }, ["stop"])),
                  onChange: (pe) => M(le)
                }, null, 40, Pw),
                t("span", Rw, f(le.path), 1),
                t("span", Mw, f(I(le.size)), 1)
              ], 10, Tw))), 128))
            ]))
          ]),
          t("div", Dw, [
            O[8] || (O[8] = t("h4", { class: "section-label" }, "Download Destination", -1)),
            t("div", Lw, [
              x(xr, {
                modelValue: _.value,
                "onUpdate:modelValue": O[3] || (O[3] = (le) => _.value = le),
                options: j.value,
                placeholder: "Select directory...",
                class: "dest-select"
              }, null, 8, ["modelValue", "options"]),
              _.value !== "__custom__" ? (a(), c("span", Ow, "/")) : y("", !0),
              _.value !== "__custom__" ? (a(), R(Lt, {
                key: 1,
                modelValue: S.value,
                "onUpdate:modelValue": O[4] || (O[4] = (le) => S.value = le),
                placeholder: "subfolder (optional)",
                class: "dest-subfolder"
              }, null, 8, ["modelValue"])) : y("", !0)
            ]),
            _.value === "__custom__" ? (a(), R(Lt, {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": O[5] || (O[5] = (le) => $.value = le),
              placeholder: "Enter full path relative to models directory...",
              class: "dest-custom",
              "full-width": ""
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          t("div", Aw, [
            t("span", Uw, f(u.value.size) + " file(s) selected", 1),
            t("span", Nw, f(I(z.value)), 1)
          ])
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: O[6] || (O[6] = (le) => G.$emit("close"))
        }, {
          default: h(() => [...O[9] || (O[9] = [
            b("Cancel", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: "primary",
          disabled: u.value.size === 0 || !q.value,
          onClick: se
        }, {
          default: h(() => [...O[10] || (O[10] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"])) : y("", !0);
  }
}), Fw = /* @__PURE__ */ ke(zw, [["__scopeId", "data-v-06804140"]]), Bw = {
  key: 0,
  class: "indexing-progress"
}, Vw = { class: "progress-info" }, Ww = { class: "progress-label" }, Gw = { class: "progress-count" }, jw = { class: "progress-bar" }, Hw = { class: "modal-content" }, Kw = { class: "modal-header" }, qw = { class: "modal-body" }, Yw = { class: "input-group" }, Jw = { class: "current-path" }, Xw = { class: "input-group" }, Qw = { class: "modal-footer" }, Zw = { class: "modal-content" }, e_ = { class: "modal-header" }, t_ = { class: "modal-body" }, s_ = { class: "input-group" }, o_ = {
  key: 0,
  class: "modal-note"
}, n_ = { class: "input-group" }, a_ = {
  key: 0,
  class: "modal-error"
}, l_ = { class: "modal-footer" }, i_ = /* @__PURE__ */ _e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = st(), { addToQueue: r } = bo(), u = s, d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), D = k(!1), E = k(!1), C = k(""), j = k(""), q = k(!1), z = k(""), I = U(() => Da(C.value)), T = U(() => I.value.kind === "repo" && !!I.value.repoId), M = U(() => {
      const ie = j.value.trim();
      if (!ie) return null;
      const B = ie.replace(/\\/g, "/").split("/").pop() || "";
      return B.includes(".") && !B.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), te = k(null), X = U(
      () => d.value.reduce((ie, B) => ie + (B.size || 0), 0)
    ), H = U(() => {
      if (!w.value.trim()) return d.value;
      const ie = w.value.toLowerCase();
      return d.value.filter((B) => {
        const ee = B, ge = B.sha256 || ee.sha256_hash || "";
        return B.filename.toLowerCase().includes(ie) || ge.toLowerCase().includes(ie);
      });
    }), se = U(() => {
      const ie = {};
      for (const ee of H.value) {
        const ge = ee.type || "other";
        ie[ge] || (ie[ge] = []), ie[ge].push(ee);
      }
      const B = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ie).sort(([ee], [ge]) => {
        const ve = B.indexOf(ee), fe = B.indexOf(ge);
        return ve >= 0 && fe >= 0 ? ve - fe : ve >= 0 ? -1 : fe >= 0 ? 1 : ee.localeCompare(ge);
      }).map(([ee, ge]) => ({ type: ee, models: ge }));
    });
    function Z(ie) {
      if (!ie) return "Unknown";
      const B = 1024 * 1024 * 1024, ee = 1024 * 1024;
      return ie >= B ? `${(ie / B).toFixed(1)} GB` : ie >= ee ? `${(ie / ee).toFixed(0)} MB` : `${(ie / 1024).toFixed(0)} KB`;
    }
    function N(ie) {
      _.value = ie.hash || ie.filename;
    }
    async function G() {
      v.value = !0, g.value = null;
      try {
        const ie = await n();
        await Ae(), ie.changes > 0 && console.log(`Scan complete: ${ie.changes} changes detected`);
      } catch (ie) {
        g.value = ie instanceof Error ? ie.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function O() {
      if (P.value.trim()) {
        D.value = !0, g.value = null;
        try {
          const ie = await i(P.value.trim());
          $.value = ie.path, S.value = !1, P.value = "", await Ae(), console.log(`Directory changed: ${ie.models_indexed} models indexed`), u("refresh");
        } catch (ie) {
          g.value = ie instanceof Error ? ie.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function le() {
      if (!C.value.trim()) return;
      if (Da(C.value.trim()).kind === "repo") {
        pe();
        return;
      }
      if (!j.value.trim()) return;
      const B = j.value.split("/").pop() || "model.safetensors";
      r([{
        workflow: "__manual__",
        filename: B,
        url: C.value.trim(),
        targetPath: j.value.trim()
      }]), C.value = "", j.value = "", E.value = !1;
    }
    function pe() {
      z.value = C.value.trim(), q.value = !0, E.value = !1;
    }
    function Me(ie) {
      r(ie.map((B) => ({
        workflow: "__manual__",
        filename: B.filename,
        url: B.url,
        targetPath: B.destination ? `${B.destination}/${B.filename}` : B.filename
      }))), q.value = !1, z.value = "", C.value = "", j.value = "";
    }
    async function Ae() {
      m.value = !0, g.value = null;
      try {
        d.value = await o();
      } catch (ie) {
        g.value = ie instanceof Error ? ie.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function ue() {
      try {
        const ie = await l();
        $.value = ie.path;
      } catch {
      }
    }
    return Xe(() => {
      Ae(), ue();
    }), (ie, B) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: B[2] || (B[2] = (ee) => p.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: G
              }, {
                default: h(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (ee) => S.value = !0)
              }, {
                default: h(() => [...B[16] || (B[16] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: B[1] || (B[1] = (ee) => E.value = !0)
              }, {
                default: h(() => [...B[17] || (B[17] = [
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
          te.value ? (a(), c("div", Bw, [
            t("div", Vw, [
              t("span", Ww, f(te.value.message), 1),
              t("span", Gw, f(te.value.current) + "/" + f(te.value.total), 1)
            ]),
            t("div", jw, [
              t("div", {
                class: "progress-fill",
                style: Kt({ width: `${te.value.current / te.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          x($o, {
            modelValue: w.value,
            "onUpdate:modelValue": B[3] || (B[3] = (ee) => w.value = ee),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || te.value ? (a(), R(Ps, {
            key: 0,
            message: te.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (a(), R(Rs, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: Ae
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            d.value.length ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(d.value.length) + " models • " + f(Z(X.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(K, null, be(se.value, (ee) => (a(), R(it, {
              key: ee.type,
              title: ee.type.toUpperCase(),
              count: ee.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(ee.models, (ge) => (a(), R(Et, {
                  key: ge.sha256 || ge.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...B[18] || (B[18] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(ge.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(Z(ge.size)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Hash:",
                      value: ge.hash ? ge.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ve) => N(ge)
                    }, {
                      default: h(() => [...B[19] || (B[19] = [
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
            H.value.length ? y("", !0) : (a(), R(ns, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: B[4] || (B[4] = (ee) => p.value = !1)
      }, {
        content: h(() => [...B[20] || (B[20] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), R(nl, {
        key: 0,
        identifier: _.value,
        onClose: B[5] || (B[5] = (ee) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), R(wt, { to: "body" }, [
        S.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: B[9] || (B[9] = at((ee) => S.value = !1, ["self"]))
        }, [
          t("div", Hw, [
            t("div", Kw, [
              B[21] || (B[21] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: B[6] || (B[6] = (ee) => S.value = !1)
              }, "✕")
            ]),
            t("div", qw, [
              t("div", Yw, [
                B[22] || (B[22] = t("label", null, "Current Directory", -1)),
                t("code", Jw, f($.value || "Not set"), 1)
              ]),
              t("div", Xw, [
                B[23] || (B[23] = t("label", null, "New Directory Path", -1)),
                x(Lt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": B[7] || (B[7] = (ee) => P.value = ee),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              B[24] || (B[24] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Qw, [
              x(Le, {
                variant: "secondary",
                onClick: B[8] || (B[8] = (ee) => S.value = !1)
              }, {
                default: h(() => [...B[25] || (B[25] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Le, {
                variant: "primary",
                disabled: !P.value.trim() || D.value,
                loading: D.value,
                onClick: O
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
      (a(), R(wt, { to: "body" }, [
        E.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: B[14] || (B[14] = at((ee) => E.value = !1, ["self"]))
        }, [
          t("div", Zw, [
            t("div", e_, [
              B[26] || (B[26] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: B[10] || (B[10] = (ee) => E.value = !1)
              }, "✕")
            ]),
            t("div", t_, [
              t("div", s_, [
                B[27] || (B[27] = t("label", null, "Download URL", -1)),
                x(Lt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": B[11] || (B[11] = (ee) => C.value = ee),
                  placeholder: "https://huggingface.co/user/repo or https://.../resolve/..."
                }, null, 8, ["modelValue"])
              ]),
              T.value ? (a(), c("p", o_, [...B[28] || (B[28] = [
                b(" HuggingFace repository detected. Click ", -1),
                t("strong", null, "Browse Repo Files", -1),
                b(" to pick files. ", -1)
              ])])) : (a(), c(K, { key: 1 }, [
                t("div", n_, [
                  B[29] || (B[29] = t("label", null, "Target Path (relative to models directory)", -1)),
                  x(Lt, {
                    modelValue: j.value,
                    "onUpdate:modelValue": B[12] || (B[12] = (ee) => j.value = ee),
                    placeholder: "e.g. checkpoints/model.safetensors"
                  }, null, 8, ["modelValue"]),
                  M.value ? (a(), c("p", a_, f(M.value), 1)) : y("", !0)
                ]),
                B[30] || (B[30] = t("p", { class: "modal-note" }, "Model will be queued for background download.", -1))
              ], 64))
            ]),
            t("div", l_, [
              x(Le, {
                variant: "secondary",
                onClick: B[13] || (B[13] = (ee) => E.value = !1)
              }, {
                default: h(() => [...B[31] || (B[31] = [
                  b("Cancel", -1)
                ])]),
                _: 1
              }),
              T.value ? (a(), R(Le, {
                key: 0,
                variant: "primary",
                disabled: !C.value.trim(),
                onClick: pe
              }, {
                default: h(() => [...B[32] || (B[32] = [
                  b(" Browse Repo Files ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])) : (a(), R(Le, {
                key: 1,
                variant: "primary",
                disabled: !C.value.trim() || !j.value.trim() || !!M.value,
                onClick: le
              }, {
                default: h(() => [...B[33] || (B[33] = [
                  b(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]))
            ])
          ])
        ])) : y("", !0)
      ])),
      x(Fw, {
        show: q.value,
        url: z.value,
        onClose: B[15] || (B[15] = (ee) => q.value = !1),
        onQueue: Me
      }, null, 8, ["show", "url"])
    ], 64));
  }
}), r_ = /* @__PURE__ */ ke(i_, [["__scopeId", "data-v-7d9c63a7"]]), c_ = { class: "node-details" }, u_ = { class: "status-row" }, d_ = {
  key: 0,
  class: "detail-row"
}, f_ = { class: "value" }, m_ = { class: "detail-row" }, v_ = { class: "value" }, p_ = {
  key: 1,
  class: "detail-row"
}, g_ = { class: "value mono" }, h_ = {
  key: 2,
  class: "detail-row"
}, y_ = ["href"], w_ = {
  key: 3,
  class: "detail-row"
}, __ = { class: "value mono small" }, k_ = { class: "detail-row" }, b_ = {
  key: 0,
  class: "value"
}, $_ = {
  key: 1,
  class: "workflow-list"
}, C_ = /* @__PURE__ */ _e({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), r = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), R(mt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", c_, [
          t("div", u_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), c("div", d_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", f_, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", m_, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", v_, f(r.value), 1)
          ]),
          e.node.registry_id ? (a(), c("div", p_, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", g_, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), c("div", h_, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(f(e.node.repository) + " ", 1),
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
            ], 8, y_)
          ])) : y("", !0),
          e.node.download_url ? (a(), c("div", w_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", __, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", k_, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), c("span", b_, " Not used in any workflows ")) : (a(), c("div", $_, [
              (a(!0), c(K, null, be(e.node.used_in_workflows, (m) => (a(), c("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => n("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), x_ = /* @__PURE__ */ ke(C_, [["__scopeId", "data-v-b342f626"]]), S_ = { class: "dialog-message" }, I_ = {
  key: 0,
  class: "dialog-details"
}, E_ = {
  key: 1,
  class: "dialog-warning"
}, T_ = /* @__PURE__ */ _e({
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
    return (s, o) => (a(), R(mt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", S_, f(e.message), 1),
        e.details && e.details.length ? (a(), c("div", I_, [
          (a(!0), c(K, null, be(e.details, (n, l) => (a(), c("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), c("p", E_, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Le, {
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
        x(Le, {
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
}), al = /* @__PURE__ */ ke(T_, [["__scopeId", "data-v-3670b9f5"]]), P_ = { class: "mismatch-warning" }, R_ = { class: "version-mismatch" }, M_ = { class: "version-actual" }, D_ = { class: "version-expected" }, L_ = { key: 0 }, O_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, A_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, U_ = /* @__PURE__ */ _e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: r, uninstallNode: u } = st(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), S = U(() => {
      if (!g.value.trim()) return d.value.nodes;
      const X = g.value.toLowerCase();
      return d.value.nodes.filter(
        (H) => {
          var se, Z;
          return H.name.toLowerCase().includes(X) || ((se = H.description) == null ? void 0 : se.toLowerCase().includes(X)) || ((Z = H.repository) == null ? void 0 : Z.toLowerCase().includes(X));
        }
      );
    }), $ = U(
      () => S.value.filter((X) => X.installed && X.tracked)
    ), P = U(
      () => S.value.filter((X) => !X.installed && X.tracked)
    ), D = U(
      () => S.value.filter((X) => X.installed && !X.tracked)
    );
    function E(X) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[X] || X;
    }
    const C = U(() => o.versionMismatches.length > 0);
    function j(X) {
      return !X.used_in_workflows || X.used_in_workflows.length === 0 ? "Not used in any workflows" : X.used_in_workflows.length === 1 ? X.used_in_workflows[0] : `${X.used_in_workflows.length} workflows`;
    }
    function q(X) {
      p.value = X;
    }
    function z() {
      n("open-node-manager");
    }
    function I(X) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${X}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await i(X);
            H.status === "success" ? (n("toast", `✓ Node "${X}" tracked as development`, "success"), await te()) : n("toast", `Failed to track node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error tracking node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function T(X) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${X}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await u(X);
            H.status === "success" ? (n("toast", `✓ Node "${X}" removed`, "success"), await te()) : n("toast", `Failed to remove node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error removing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function M(X) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${X}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await r(X);
            H.status === "success" ? (n("toast", `✓ Node "${X}" installed`, "success"), await te()) : n("toast", `Failed to install node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error installing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function te() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Xe(te), (X, H) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (se) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: h(() => [...H[7] || (H[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          x($o, {
            modelValue: g.value,
            "onUpdate:modelValue": H[1] || (H[1] = (se) => g.value = se),
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
            onRetry: te
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            d.value.total_count ? (a(), R(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), c(K, { key: 0 }, [
                  b(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), c(K, { key: 1 }, [
                  b(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            C.value ? (a(), R(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", P_, [
                  H[8] || (H[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), c(K, null, be(e.versionMismatches, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...H[9] || (H[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", R_, [
                      t("span", M_, f(se.actual), 1),
                      H[10] || (H[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", D_, f(se.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "warning",
                      size: "sm",
                      onClick: H[2] || (H[2] = (Z) => n("repair-environment"))
                    }, {
                      default: h(() => [...H[11] || (H[11] = [
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
                (a(!0), c(K, null, be(D.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...H[12] || (H[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...H[13] || (H[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: j(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => q(se)
                    }, {
                      default: h(() => [...H[14] || (H[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => I(se.name)
                    }, {
                      default: h(() => [...H[15] || (H[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Z) => T(se.name)
                    }, {
                      default: h(() => [...H[16] || (H[16] = [
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
                (a(!0), c(K, null, be($.value, (se) => (a(), R(Et, {
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
                    se.version ? (a(), c("span", L_, f(se.source === "development" ? "" : "v") + f(se.version), 1)) : (a(), c("span", O_, "version unknown")),
                    t("span", A_, " • " + f(E(se.source)), 1)
                  ]),
                  details: h(() => [
                    x(dt, {
                      label: "Used by:",
                      value: j(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => q(se)
                    }, {
                      default: h(() => [...H[17] || (H[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: z
                    }, {
                      default: h(() => [...H[18] || (H[18] = [
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
                (a(!0), c(K, null, be(P.value, (se) => (a(), R(Et, {
                  key: se.name,
                  status: "missing"
                }, {
                  icon: h(() => [...H[19] || (H[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...H[20] || (H[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    x(dt, {
                      label: "Required by:",
                      value: j(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => q(se)
                    }, {
                      default: h(() => [...H[21] || (H[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => M(se.name)
                    }, {
                      default: h(() => [...H[22] || (H[22] = [
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
      x(as, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: H[4] || (H[4] = (se) => w.value = !1)
      }, {
        content: h(() => [...H[23] || (H[23] = [
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
          x(de, {
            variant: "primary",
            onClick: H[3] || (H[3] = (se) => w.value = !1)
          }, {
            default: h(() => [...H[24] || (H[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), R(x_, {
        key: 0,
        node: p.value,
        onClose: H[5] || (H[5] = (se) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), R(al, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: H[6] || (H[6] = (se) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), N_ = /* @__PURE__ */ ke(U_, [["__scopeId", "data-v-1555a802"]]);
function Tr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const z_ = { class: "remote-url-display" }, F_ = ["title"], B_ = ["title"], V_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, W_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, G_ = /* @__PURE__ */ _e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = U(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const i = s.url.slice(0, Math.floor(s.maxLength * 0.6)), r = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${i}...${r}`;
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
    return (i, r) => (a(), c("div", z_, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, F_),
      t("button", {
        class: Te(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), c("svg", W_, [...r[1] || (r[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), c("svg", V_, [...r[0] || (r[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, B_)
    ]));
  }
}), j_ = /* @__PURE__ */ ke(G_, [["__scopeId", "data-v-7768a58d"]]), H_ = { class: "remote-title" }, K_ = {
  key: 0,
  class: "default-badge"
}, q_ = {
  key: 1,
  class: "sync-badge"
}, Y_ = {
  key: 0,
  class: "ahead"
}, J_ = {
  key: 1,
  class: "behind"
}, X_ = {
  key: 1,
  class: "synced"
}, Q_ = ["href"], Z_ = {
  key: 1,
  class: "remote-url-text"
}, ek = /* @__PURE__ */ _e({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = U(() => s.fetchingRemote === s.remote.name), n = U(() => s.remote.is_default), l = U(() => s.syncStatus && s.syncStatus.behind > 0), i = U(() => s.syncStatus && s.syncStatus.ahead > 0), r = U(() => s.remote.push_url !== s.remote.fetch_url), u = U(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), R(Et, {
      status: n.value ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", H_, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), c("span", K_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", q_, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(K, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", Y_, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", J_, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", X_, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (a(), c("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = at(() => {
          }, ["stop"]))
        }, f(d.value), 9, Q_)) : (a(), c("span", Z_, f(d.value), 1))
      ]),
      actions: h(() => [
        x(de, {
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
        x(de, {
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
        x(de, {
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
        x(de, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(de, {
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
      r.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(dt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              x(j_, {
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
}), tk = /* @__PURE__ */ ke(ek, [["__scopeId", "data-v-8310f3a8"]]), sk = ["for"], ok = {
  key: 0,
  class: "base-form-field-required"
}, nk = { class: "base-form-field-input" }, ak = {
  key: 1,
  class: "base-form-field-error"
}, lk = {
  key: 2,
  class: "base-form-field-hint"
}, ik = /* @__PURE__ */ _e({
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
    const s = e, o = U(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), c("div", {
      class: Te(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), c("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), c("span", ok, "*")) : y("", !0)
      ], 8, sk)) : y("", !0),
      t("div", nk, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), c("span", ak, f(e.error), 1)) : e.hint ? (a(), c("span", lk, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), va = /* @__PURE__ */ ke(ik, [["__scopeId", "data-v-9a1cf296"]]), rk = { class: "remote-form" }, ck = { class: "form-header" }, uk = { class: "form-body" }, dk = {
  key: 0,
  class: "form-error"
}, fk = { class: "form-actions" }, mk = /* @__PURE__ */ _e({
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
    }), i = k(!1), r = k(null);
    gt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = U(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || i.value)) {
        r.value = null, i.value = !0;
        try {
          n("submit", l.value);
        } catch (m) {
          r.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          i.value = !1;
        }
      }
    }
    return (m, v) => (a(), c("div", rk, [
      t("div", ck, [
        x(Ut, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", uk, [
        x(va, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            x(Lt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        x(va, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            x(Lt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        x(va, { label: "Push URL (optional)" }, {
          default: h(() => [
            x(Lt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        r.value ? (a(), c("div", dk, f(r.value), 1)) : y("", !0)
      ]),
      t("div", fk, [
        x(de, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: h(() => [
            b(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        x(de, {
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
}), vk = /* @__PURE__ */ ke(mk, [["__scopeId", "data-v-56021b18"]]), pk = { class: "conflict-summary-box" }, gk = { class: "summary-header" }, hk = { class: "summary-text" }, yk = { key: 0 }, wk = {
  key: 1,
  class: "all-resolved"
}, _k = { class: "summary-progress" }, kk = { class: "progress-bar" }, bk = { class: "progress-text" }, $k = /* @__PURE__ */ _e({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = U(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (n, l) => (a(), c("div", pk, [
      t("div", gk, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", hk, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), c("p", yk, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), c("p", wk, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", _k, [
        t("div", kk, [
          t("div", {
            class: "progress-fill",
            style: Kt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", bk, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Ck = /* @__PURE__ */ ke($k, [["__scopeId", "data-v-4e9e6cc9"]]), xk = { class: "modal-header" }, Sk = { class: "modal-title" }, Ik = { class: "modal-body" }, Ek = {
  key: 0,
  class: "error-box"
}, Tk = {
  key: 0,
  class: "error-hint"
}, Pk = {
  key: 1,
  class: "loading-state"
}, Rk = { class: "commit-summary" }, Mk = {
  key: 0,
  class: "changes-section"
}, Dk = {
  key: 0,
  class: "change-group",
  open: ""
}, Lk = { class: "change-count" }, Ok = { class: "change-list" }, Ak = {
  key: 0,
  class: "conflict-badge"
}, Uk = {
  key: 1,
  class: "change-group"
}, Nk = { class: "change-count" }, zk = { class: "change-list" }, Fk = {
  key: 2,
  class: "change-group"
}, Bk = { class: "change-count" }, Vk = { class: "change-list" }, Wk = {
  key: 2,
  class: "strategy-section"
}, Gk = { class: "radio-group" }, jk = { class: "radio-option" }, Hk = { class: "radio-option" }, Kk = { class: "radio-option" }, qk = {
  key: 3,
  class: "up-to-date"
}, Yk = { class: "modal-actions" }, Zl = "comfygit.pullModelStrategy", Jk = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = k(localStorage.getItem(Zl) || "skip");
    gt(l, ($) => {
      localStorage.setItem(Zl, $);
    });
    const i = U(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), r = U(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = U(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var $;
      return r.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = U(() => o.preview && Tr(o.preview) ? o.preview : null), v = U(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), g = U(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = U(
      () => v.value > 0 && g.value === v.value
    ), p = U(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
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
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (C) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = at(() => {
            }, ["stop"]))
          }, [
            t("div", xk, [
              t("h3", Sk, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (C) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Ik, [
              e.error ? (a(), c("div", Ek, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), c("p", Tk, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), c("div", Pk, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (D = e.preview) != null && D.has_uncommitted_changes ? (a(), c(K, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), c(K, { key: 3 }, [
                t("div", Rk, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), c("div", Mk, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  r.value > 0 ? (a(), c("details", Dk, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Lk, f(r.value) + " changes", 1)
                    ]),
                    t("div", Ok, [
                      (a(!0), c(K, null, be(e.preview.changes.workflows.added, (C) => (a(), c("div", {
                        key: "a-" + C,
                        class: "change-item add"
                      }, " + " + f(C), 1))), 128)),
                      (a(!0), c(K, null, be(e.preview.changes.workflows.modified, (C) => (a(), c("div", {
                        key: "m-" + C,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(C) + " ", 1),
                        _(C) ? (a(), c("span", Ak, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), c(K, null, be(e.preview.changes.workflows.deleted, (C) => (a(), c("div", {
                        key: "d-" + C,
                        class: "change-item delete"
                      }, " - " + f(C), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), c("details", Uk, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", Nk, f(u.value) + " to install", 1)
                    ]),
                    t("div", zk, [
                      (a(!0), c(K, null, be(e.preview.changes.nodes.to_install, (C) => (a(), c("div", {
                        key: C,
                        class: "change-item add"
                      }, " + " + f(C), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), c("details", Fk, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", Bk, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", Vk, [
                      (a(!0), c(K, null, be(e.preview.changes.models.referenced, (C) => (a(), c("div", {
                        key: C,
                        class: "change-item"
                      }, f(C), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), R(Ck, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), c("div", Wk, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", Gk, [
                    t("label", jk, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (C) => l.value = C),
                        value: "all"
                      }, null, 512), [
                        [Qt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", Hk, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (C) => l.value = C),
                        value: "required"
                      }, null, 512), [
                        [Qt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Kk, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (C) => l.value = C),
                        value: "skip"
                      }, null, 512), [
                        [Qt, l.value]
                      ]),
                      P[24] || (P[24] = t("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), c("div", qk, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Yk, [
              x(de, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (C) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), c(K, { key: 0 }, [
                x(de, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (C) => S(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                x(de, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (C) => S(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), R(de, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (C) => S(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), c(K, { key: 2 }, [
                m.value && !w.value ? (a(), R(de, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (C) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(de, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (C) => S(!1))
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
}), Xk = /* @__PURE__ */ ke(Jk, [["__scopeId", "data-v-300c7b2f"]]), Qk = { class: "modal-header" }, Zk = { class: "modal-title" }, eb = { class: "modal-body" }, tb = {
  key: 0,
  class: "loading-state"
}, sb = {
  key: 1,
  class: "warning-box"
}, ob = {
  key: 0,
  class: "commits-section"
}, nb = { class: "commit-list" }, ab = { class: "commit-hash" }, lb = { class: "commit-message" }, ib = { class: "commit-date" }, rb = { class: "force-option" }, cb = { class: "checkbox-option" }, ub = { class: "commit-summary" }, db = { key: 0 }, fb = { key: 1 }, mb = {
  key: 0,
  class: "info-box"
}, vb = {
  key: 1,
  class: "commits-section"
}, pb = { class: "commit-list" }, gb = { class: "commit-hash" }, hb = { class: "commit-message" }, yb = { class: "commit-date" }, wb = {
  key: 2,
  class: "up-to-date"
}, _b = { class: "modal-actions" }, kb = /* @__PURE__ */ _e({
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
    return (i, r) => {
      var u, d, m;
      return a(), R(wt, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: r[7] || (r[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: r[6] || (r[6] = at(() => {
            }, ["stop"]))
          }, [
            t("div", Qk, [
              t("h3", Zk, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: r[0] || (r[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", eb, [
              e.loading ? (a(), c("div", tb, [...r[8] || (r[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), c("div", sb, [...r[9] || (r[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), c(K, { key: 2 }, [
                r[13] || (r[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), c("div", ob, [
                  r[10] || (r[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", nb, [
                    (a(!0), c(K, null, be(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", ab, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", lb, f(v.message), 1),
                      t("span", ib, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", rb, [
                  t("label", cb, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": r[1] || (r[1] = (v) => n.value = v)
                    }, null, 512), [
                      [en, n.value]
                    ]),
                    r[11] || (r[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  r[12] || (r[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), c(K, { key: 3 }, [
                t("div", ub, [
                  r[14] || (r[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), c("span", db, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), c("span", fb, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), c("div", mb, [...r[15] || (r[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), c("div", vb, [
                  r[16] || (r[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", pb, [
                    (a(!0), c(K, null, be(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", gb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", hb, f(v.message), 1),
                      t("span", yb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), c("div", wb, [
                  r[17] || (r[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", _b, [
              x(de, {
                variant: "secondary",
                onClick: r[2] || (r[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...r[18] || (r[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), c(K, { key: 0 }, [
                x(de, {
                  variant: "secondary",
                  onClick: r[3] || (r[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...r[19] || (r[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                x(de, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: r[4] || (r[4] = (v) => l(!0))
                }, {
                  default: h(() => [...r[20] || (r[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(de, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: r[5] || (r[5] = (v) => l(!1))
              }, {
                default: h(() => [...r[21] || (r[21] = [
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
}), bb = /* @__PURE__ */ ke(kb, [["__scopeId", "data-v-ae86b6a7"]]), $b = { class: "resolution-choice-group" }, Cb = ["disabled"], xb = ["disabled"], Sb = /* @__PURE__ */ _e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("div", $b, [
      t("button", {
        class: Te(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Cb),
      t("button", {
        class: Te(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, xb)
    ]));
  }
}), Ib = /* @__PURE__ */ ke(Sb, [["__scopeId", "data-v-985715ed"]]), Eb = { class: "conflict-header" }, Tb = { class: "conflict-info" }, Pb = { class: "workflow-name" }, Rb = { class: "conflict-description" }, Mb = {
  key: 0,
  class: "resolved-badge"
}, Db = { class: "resolved-text" }, Lb = { class: "conflict-hashes" }, Ob = { class: "hash-item" }, Ab = { class: "hash-item" }, Ub = { class: "conflict-actions" }, Nb = /* @__PURE__ */ _e({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    gt(() => o.resolution, (d) => {
      l.value = d;
    }), gt(l, (d) => {
      d && n("resolve", d);
    });
    const i = U(() => l.value !== null), r = U(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = U(() => {
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
      return a(), c("div", {
        class: Te(["conflict-item", { resolved: i.value }])
      }, [
        t("div", Eb, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Tb, [
            t("code", Pb, f(e.conflict.name) + ".json", 1),
            t("div", Rb, f(r.value), 1)
          ]),
          i.value ? (a(), c("div", Mb, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", Db, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", Lb, [
          t("span", Ob, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", Ab, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", Ub, [
          x(Ib, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), zb = /* @__PURE__ */ ke(Nb, [["__scopeId", "data-v-506d3bbf"]]), Fb = { class: "resolution-content" }, Bb = {
  key: 0,
  class: "error-box"
}, Vb = { class: "resolution-header" }, Wb = { class: "header-stats" }, Gb = { class: "stat" }, jb = { class: "stat-value" }, Hb = { class: "stat resolved" }, Kb = { class: "stat-value" }, qb = {
  key: 0,
  class: "stat pending"
}, Yb = { class: "stat-value" }, Jb = { class: "conflicts-list" }, Xb = {
  key: 1,
  class: "all-resolved-message"
}, Qb = /* @__PURE__ */ _e({
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
    const o = e, n = s, l = U(() => o.resolutions.size), i = U(() => o.workflowConflicts.length - l.value), r = U(() => l.value === o.workflowConflicts.length), u = U(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
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
    return (w, p) => (a(), R(mt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", Fb, [
          e.error ? (a(), c("div", Bb, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", Vb, [
            t("div", Wb, [
              t("div", Gb, [
                t("span", jb, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", Hb, [
                t("span", Kb, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), c("div", qb, [
                t("span", Yb, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", Jb, [
            (a(!0), c(K, null, be(e.workflowConflicts, (_) => (a(), R(zb, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          r.value ? (a(), c("div", Xb, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Le, {
          variant: "primary",
          disabled: !r.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: h(() => [
            b(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Zb = /* @__PURE__ */ ke(Qb, [["__scopeId", "data-v-c58d150d"]]), e2 = { class: "node-conflict-item" }, t2 = { class: "node-header" }, s2 = { class: "node-name" }, o2 = { class: "node-id" }, n2 = { class: "version-comparison" }, a2 = { class: "version yours" }, l2 = { class: "version theirs" }, i2 = { class: "chosen-version" }, r2 = { class: "chosen" }, c2 = { class: "chosen-reason" }, u2 = { class: "affected-workflows" }, d2 = { class: "wf-source" }, f2 = { class: "wf-version" }, m2 = /* @__PURE__ */ _e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), c("div", e2, [
      t("div", t2, [
        t("code", s2, f(e.conflict.node_name), 1),
        t("span", o2, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", n2, [
        t("div", a2, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", l2, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", i2, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", r2, f(e.conflict.chosen_version), 1),
        t("span", c2, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", u2, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), c(K, null, be(e.conflict.affected_workflows, (n) => (a(), c("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", d2, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", f2, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), v2 = /* @__PURE__ */ ke(m2, [["__scopeId", "data-v-8b626725"]]), p2 = { class: "validation-content" }, g2 = {
  key: 0,
  class: "compatible-message"
}, h2 = { class: "conflicts-list" }, y2 = {
  key: 2,
  class: "warnings-section"
}, w2 = /* @__PURE__ */ _e({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = U(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, r) => (a(), R(mt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: r[3] || (r[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", p2, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), c("div", g2, [
            r[5] || (r[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              r[4] || (r[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), c(K, { key: 1 }, [
            r[6] || (r[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", h2, [
              (a(!0), c(K, null, be(e.validation.node_conflicts, (u) => (a(), R(v2, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            r[7] || (r[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), c("div", y2, [
            r[8] || (r[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), c(K, null, be(e.validation.warnings, (u, d) => (a(), c("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...r[9] || (r[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        r[11] || (r[11] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Le, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...r[10] || (r[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: "primary",
          loading: e.executing,
          onClick: r[2] || (r[2] = (u) => n("proceed"))
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
}), _2 = /* @__PURE__ */ ke(w2, [["__scopeId", "data-v-fefd26ed"]]), k2 = { key: 0 }, b2 = /* @__PURE__ */ _e({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: r,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = st(), _ = k([]), S = k(null), $ = k({}), P = k(!1), D = k(null), E = k(""), C = k(!1), j = k(null), q = k(!1), z = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = U(() => {
      if (!E.value.trim()) return _.value;
      const $e = E.value.toLowerCase();
      return _.value.filter(
        (W) => W.name.toLowerCase().includes($e) || W.fetch_url.toLowerCase().includes($e) || W.push_url.toLowerCase().includes($e)
      );
    });
    async function M() {
      P.value = !0, D.value = null;
      try {
        const $e = await n();
        _.value = $e.remotes, S.value = $e.current_branch_tracking || null, await Promise.all(
          $e.remotes.map(async (W) => {
            const F = await d(W.name);
            F && ($.value[W.name] = F);
          })
        );
      } catch ($e) {
        D.value = $e instanceof Error ? $e.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function te() {
      z.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, q.value = !0;
    }
    function X($e) {
      const W = _.value.find((F) => F.name === $e);
      W && (z.value = "edit", I.value = {
        name: W.name,
        fetchUrl: W.fetch_url,
        pushUrl: W.push_url
      }, q.value = !0);
    }
    async function H($e) {
      try {
        z.value === "add" ? await l($e.name, $e.fetchUrl) : await r($e.name, $e.fetchUrl, $e.pushUrl || void 0), q.value = !1, await M();
      } catch (W) {
        D.value = W instanceof Error ? W.message : "Operation failed";
      }
    }
    function se() {
      q.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Z($e) {
      j.value = $e;
      try {
        await u($e);
        const W = await d($e);
        W && ($.value[$e] = W), o("toast", `✓ Fetched from ${$e}`, "success");
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function N($e) {
      if (confirm(`Remove remote "${$e}"?`))
        try {
          await i($e), await M();
        } catch (W) {
          D.value = W instanceof Error ? W.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const O = k("idle"), le = U(() => O.value === "pull_preview"), pe = U(
      () => O.value === "resolving" || O.value === "validating"
    ), Me = U(
      () => O.value === "validation_review" || O.value === "executing"
    ), Ae = k(!1), ue = k(null), ie = k(!1), B = k(null), ee = k(!1), ge = k(null), ve = k(null), fe = k(/* @__PURE__ */ new Map()), De = k(null), Re = k(null), L = U(() => ge.value && Tr(ge.value) ? ge.value : null);
    async function V($e) {
      B.value = $e, O.value = "pull_preview", ee.value = !0, ge.value = null, ve.value = null;
      try {
        ge.value = await m($e);
      } catch (W) {
        ve.value = W instanceof Error ? W.message : "Failed to load pull preview";
      } finally {
        ee.value = !1;
      }
    }
    function ne() {
      O.value = "idle", ge.value = null, ve.value = null, B.value = null;
    }
    async function ce($e) {
      if (!B.value) return;
      O.value = "executing", ve.value = null;
      const W = B.value;
      try {
        const F = await v(W, $e);
        if (F.rolled_back) {
          ve.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, O.value = "pull_preview";
          return;
        }
        Pe(), O.value = "idle", o("toast", `✓ Pulled from ${W}`, "success"), await M();
      } catch (F) {
        ve.value = F instanceof Error ? F.message : "Pull failed", O.value = "pull_preview";
      }
    }
    function ye() {
      L.value && (O.value = "resolving", Re.value = null);
    }
    function we($e, W) {
      fe.value.set($e, { name: $e, resolution: W });
    }
    function Ie() {
      O.value = "pull_preview";
    }
    async function Ee() {
      O.value = "validating", Re.value = null;
      try {
        const $e = Array.from(fe.value.values());
        De.value = await p(B.value, $e), O.value = "validation_review";
      } catch ($e) {
        Re.value = $e instanceof Error ? $e.message : "Validation failed", O.value = "resolving";
      }
    }
    async function re() {
      O.value = "executing";
      const $e = B.value;
      try {
        const W = Array.from(fe.value.values()), F = await v($e, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: W
        });
        if (F.rolled_back) {
          ve.value = `Pull failed and was rolled back: ${F.error || "Unknown error"}`, O.value = "pull_preview";
          return;
        }
        Pe(), O.value = "idle", o("toast", `✓ Pulled from ${$e}`, "success"), await M();
      } catch (W) {
        ve.value = W instanceof Error ? W.message : "Pull failed", O.value = "validation_review";
      }
    }
    function he() {
      O.value = "resolving";
    }
    function Ne() {
      Pe(), O.value = "idle";
    }
    function Pe() {
      fe.value.clear(), De.value = null, Re.value = null, ve.value = null, ge.value = null, B.value = null;
    }
    async function oe($e) {
      B.value = $e, Ae.value = !0, ee.value = !0, ue.value = null;
      try {
        ue.value = await g($e);
      } catch (W) {
        D.value = W instanceof Error ? W.message : "Failed to load push preview";
      } finally {
        ee.value = !1;
      }
    }
    function J() {
      Ae.value = !1, ue.value = null, B.value = null;
    }
    async function Oe($e) {
      if (!B.value) return;
      ie.value = !0;
      const W = B.value;
      try {
        await w(W, $e), J(), o("toast", `✓ Pushed to ${W}`, "success"), await M();
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Push failed", "error");
      } finally {
        ie.value = !1;
      }
    }
    function Ce() {
      const $e = B.value;
      J(), $e && V($e);
    }
    return Xe(M), ($e, W) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (F) => C.value = !0)
          }, {
            actions: h(() => [
              q.value ? y("", !0) : (a(), R(de, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: h(() => [...W[3] || (W[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          q.value ? y("", !0) : (a(), R($o, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": W[1] || (W[1] = (F) => E.value = F),
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
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            q.value ? (a(), R(vk, {
              key: 0,
              mode: z.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: H,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !q.value ? (a(), R(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), c("span", k2, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            T.value.length && !q.value ? (a(), R(it, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(T.value, (F) => (a(), R(tk, {
                  key: F.name,
                  remote: F,
                  "sync-status": $.value[F.name],
                  "fetching-remote": j.value,
                  onFetch: Z,
                  onEdit: X,
                  onRemove: N,
                  onPull: V,
                  onPush: oe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !q.value ? (a(), R(ns, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                x(de, {
                  variant: "primary",
                  onClick: te
                }, {
                  default: h(() => [...W[4] || (W[4] = [
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
      x(as, {
        show: C.value,
        title: "About Git Remotes",
        onClose: W[2] || (W[2] = (F) => C.value = !1)
      }, {
        content: h(() => [...W[5] || (W[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          x(de, {
            variant: "link",
            onClick: G
          }, {
            default: h(() => [...W[6] || (W[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x(Xk, {
        show: le.value,
        "remote-name": B.value || "",
        preview: ge.value,
        loading: ee.value,
        pulling: O.value === "executing",
        error: ve.value,
        "conflict-resolutions": fe.value,
        onClose: ne,
        onPull: ce,
        onOpenConflictResolution: ye
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      x(bb, {
        show: Ae.value,
        "remote-name": B.value || "",
        preview: ue.value,
        loading: ee.value,
        pushing: ie.value,
        onClose: J,
        onPush: Oe,
        onPullFirst: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      pe.value && L.value ? (a(), R(Zb, {
        key: 0,
        "workflow-conflicts": L.value.workflow_conflicts,
        resolutions: fe.value,
        "operation-type": "pull",
        validating: O.value === "validating",
        error: Re.value,
        onClose: Ie,
        onResolve: we,
        onApply: Ee
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Me.value && De.value ? (a(), R(_2, {
        key: 1,
        validation: De.value,
        "operation-type": "pull",
        executing: O.value === "executing",
        onProceed: re,
        onGoBack: he,
        onCancel: Ne
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), $2 = /* @__PURE__ */ ke(b2, [["__scopeId", "data-v-9ae3b76d"]]), C2 = { class: "setting-info" }, x2 = { class: "setting-label" }, S2 = {
  key: 0,
  class: "required-marker"
}, I2 = {
  key: 0,
  class: "setting-description"
}, E2 = { class: "setting-control" }, T2 = /* @__PURE__ */ _e({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", C2, [
        t("div", x2, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), c("span", S2, "*")) : y("", !0)
        ]),
        e.description ? (a(), c("div", I2, f(e.description), 1)) : y("", !0)
      ]),
      t("div", E2, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), yn = /* @__PURE__ */ ke(T2, [["__scopeId", "data-v-cb5d236c"]]), P2 = { class: "toggle" }, R2 = ["checked", "disabled"], M2 = /* @__PURE__ */ _e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", P2, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, R2),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ei = /* @__PURE__ */ ke(M2, [["__scopeId", "data-v-71c0f550"]]), D2 = { class: "workspace-settings-content" }, L2 = { class: "settings-section" }, O2 = { class: "path-setting" }, A2 = { class: "path-value" }, U2 = { class: "path-setting" }, N2 = { class: "path-value" }, z2 = { class: "settings-section" }, F2 = { class: "settings-section" }, B2 = { class: "settings-section" }, V2 = /* @__PURE__ */ _e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: r } = st(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), S = k(!0);
    function $(I) {
      return I.join(" ");
    }
    function P(I) {
      return I.trim() ? I.trim().split(/\s+/) : [];
    }
    const D = U(() => {
      if (!g.value) return !1;
      const I = w.value !== (g.value.civitai_api_key || ""), T = p.value !== $(g.value.comfyui_extra_args || []);
      return I || T;
    });
    async function E() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = $(v.value.comfyui_extra_args || []);
        const I = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = I !== "false", S.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (I) {
        d.value = I instanceof Error ? I.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function C() {
      var I, T;
      m.value = null;
      try {
        const M = {};
        w.value !== (((I = g.value) == null ? void 0 : I.civitai_api_key) || "") && (M.civitai_api_key = w.value || null), p.value !== $(((T = g.value) == null ? void 0 : T.comfyui_extra_args) || []) && (M.comfyui_extra_args = P(p.value)), await r(M, n.workspacePath || void 0), await E(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (M) {
        const te = M instanceof Error ? M.message : "Failed to save settings";
        m.value = { type: "error", message: te }, l("error", te);
      }
    }
    function j() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function q(I) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(I)), console.log("[ComfyGit] Auto-refresh setting saved:", I);
    }
    function z(I) {
      I ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", I ? "enabled" : "disabled");
    }
    return s({
      saveSettings: C,
      resetSettings: j,
      hasChanges: D,
      loadSettings: E
    }), Xe(E), (I, T) => (a(), c("div", D2, [
      u.value ? (a(), R(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), R(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: E
      }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
        x(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var M, te;
            return [
              t("div", L2, [
                t("div", O2, [
                  T[4] || (T[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  T[5] || (T[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", A2, f(((M = v.value) == null ? void 0 : M.workspace_path) || "Loading..."), 1)
                ]),
                t("div", U2, [
                  T[6] || (T[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  T[7] || (T[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", N2, f(((te = v.value) == null ? void 0 : te.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        x(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", z2, [
              x(yn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  x(Un, {
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
        x(it, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", F2, [
              x(yn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  x(Un, {
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
        x(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", B2, [
              x(yn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  x(ei, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      T[2] || (T[2] = (M) => _.value = M),
                      q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              x(yn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  x(ei, {
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
              style: Kt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Pr = /* @__PURE__ */ ke(V2, [["__scopeId", "data-v-f28917ec"]]), W2 = /* @__PURE__ */ _e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Tt, null, {
      header: h(() => [
        x(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, r;
            return [
              x(de, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (r = s.value) != null && r.hasChanges ? (a(), R(de, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
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
        x(Pr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), G2 = { class: "base-tabs" }, j2 = ["disabled", "onClick"], H2 = {
  key: 0,
  class: "base-tabs__badge"
}, K2 = /* @__PURE__ */ _e({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, n = s;
    function l(i) {
      var r;
      (r = o.tabs.find((u) => u.id === i)) != null && r.disabled || n("update:modelValue", i);
    }
    return (i, r) => (a(), c("div", G2, [
      (a(!0), c(K, null, be(e.tabs, (u) => (a(), c("button", {
        key: u.id,
        class: Te([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        b(f(u.label) + " ", 1),
        u.badge ? (a(), c("span", H2, f(u.badge), 1)) : y("", !0)
      ], 10, j2))), 128))
    ]));
  }
}), Rr = /* @__PURE__ */ ke(K2, [["__scopeId", "data-v-ad5e6cad"]]), q2 = { class: "log-viewer-wrapper" }, Y2 = ["disabled", "title"], J2 = /* @__PURE__ */ _e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), n = k("idle"), l = U(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      var v;
      await kt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Xe(i), gt(() => s.logs, i);
    async function r() {
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
    function u(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function d(m) {
      m.stopPropagation();
    }
    return (m, v) => (a(), c("div", q2, [
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
          onClick: r,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, Y2),
        (a(!0), c(K, null, be(l.value, (g, w) => (a(), c("div", {
          key: w,
          class: Te(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Mr = /* @__PURE__ */ ke(J2, [["__scopeId", "data-v-c0cc6d21"]]), X2 = /* @__PURE__ */ _e({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = st(), r = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = U(() => r.value === "workspace" ? g.value : w.value);
    async function S() {
      d.value = !0, m.value = null;
      try {
        r.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (D) {
        m.value = D instanceof Error ? D.message : `Failed to load ${r.value} logs`;
      } finally {
        d.value = !1;
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
    return gt(r, () => {
      S();
    }), Xe(() => {
      S(), $();
    }), (D, E) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (C) => v.value = !0)
          }, {
            actions: h(() => [
              x(de, {
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
              x(de, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: d.value
              }, {
                default: h(() => [
                  b(f(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          x(Rr, {
            modelValue: r.value,
            "onUpdate:modelValue": E[1] || (E[1] = (C) => r.value = C),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), R(Ps, {
            key: 0,
            message: `Loading ${r.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            u.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: `No ${r.value} logs available`
            }, null, 8, ["message"])) : (a(), R(Mr, {
              key: 1,
              logs: u.value,
              "raw-format": r.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: v.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (C) => v.value = !1)
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
          x(de, {
            variant: "primary",
            onClick: E[2] || (E[2] = (C) => v.value = !1)
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
}), Q2 = /* @__PURE__ */ _e({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = st(), i = k([]), r = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), g = k(!1);
    async function w() {
      r.value = !0, u.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const S = await o();
          m.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        r.value = !1;
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
    return Xe(() => {
      w(), p();
    }), (S, $) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: h(() => [
              x(de, {
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
              x(de, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: r.value
              }, {
                default: h(() => [
                  b(f(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          r.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), R(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            i.value.length === 0 ? (a(), R(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(Mr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      x(as, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => d.value = !1)
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
          x(de, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => d.value = !1)
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
    return (s, o) => (a(), R(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, so({
      icon: h(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", Z2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), c("span", e$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), c("span", t$, [
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
          x(dt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          x(dt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          x(dt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), R(dt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), o$ = /* @__PURE__ */ ke(s$, [["__scopeId", "data-v-9231917a"]]), n$ = { class: "env-details" }, a$ = { class: "status-row" }, l$ = {
  key: 0,
  class: "detail-row"
}, i$ = { class: "value mono" }, r$ = {
  key: 1,
  class: "detail-row"
}, c$ = { class: "value mono small" }, u$ = { class: "detail-row" }, d$ = { class: "value" }, f$ = { class: "detail-row" }, m$ = { class: "value" }, v$ = { class: "detail-row" }, p$ = { class: "value" }, g$ = {
  key: 2,
  class: "section-divider"
}, h$ = {
  key: 3,
  class: "detail-row"
}, y$ = { class: "value" }, w$ = {
  key: 4,
  class: "detail-row"
}, _$ = { class: "value" }, k$ = { class: "footer-actions" }, b$ = /* @__PURE__ */ _e({
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
        const i = new Date(l), u = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), d = Math.floor(u / 6e4), m = Math.floor(u / 36e5), v = Math.floor(u / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), R(mt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (r) => o("close"))
    }, {
      body: h(() => [
        t("div", n$, [
          t("div", a$, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), c("div", l$, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", i$, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), c("div", r$, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", c$, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", u$, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", d$, f(e.environment.workflow_count), 1)
          ]),
          t("div", f$, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", m$, f(e.environment.node_count), 1)
          ]),
          t("div", v$, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", p$, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), c("div", g$)) : y("", !0),
          e.environment.created_at ? (a(), c("div", h$, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", y$, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), c("div", w$, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", _$, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", k$, [
          e.canDelete ? (a(), R(Le, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (r) => o("delete", e.environment.name))
          }, {
            default: h(() => [...i[12] || (i[12] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          x(Le, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (r) => o("close"))
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
}), $$ = /* @__PURE__ */ ke(b$, [["__scopeId", "data-v-59855453"]]), Dr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Lr = "3.12", ll = [
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
], Or = "auto", C$ = { class: "progress-bar" }, x$ = /* @__PURE__ */ _e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), c("div", C$, [
      t("div", {
        class: Te(["progress-fill", e.variant]),
        style: Kt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ea = /* @__PURE__ */ ke(x$, [["__scopeId", "data-v-1beb0512"]]), S$ = { class: "task-progress" }, I$ = { class: "progress-info" }, E$ = { class: "progress-percentage" }, T$ = { class: "progress-message" }, P$ = {
  key: 0,
  class: "progress-steps"
}, R$ = { class: "step-icon" }, M$ = { class: "step-label" }, D$ = /* @__PURE__ */ _e({
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
      const i = s.steps.find((r) => r.id === l);
      return i ? s.progress >= i.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const i = o(l);
      return i === "completed" ? "✓" : i === "active" ? "⟳" : "○";
    }
    return (l, i) => (a(), c("div", S$, [
      x(ea, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", I$, [
        t("span", E$, f(e.progress) + "%", 1),
        t("span", T$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), c("div", P$, [
        (a(!0), c(K, null, be(e.steps, (r) => (a(), c("div", {
          key: r.id,
          class: Te(["step", o(r.id)])
        }, [
          t("span", R$, f(n(r.id)), 1),
          t("span", M$, f(r.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), zn = /* @__PURE__ */ ke(D$, [["__scopeId", "data-v-9d1de66c"]]), L$ = {
  key: 0,
  class: "create-env-form"
}, O$ = { class: "form-field" }, A$ = { class: "form-field" }, U$ = ["value"], N$ = { class: "form-field" }, z$ = ["disabled"], F$ = ["value"], B$ = { class: "form-field" }, V$ = ["value"], W$ = { class: "form-field form-field--checkbox" }, G$ = { class: "form-checkbox" }, j$ = {
  key: 1,
  class: "create-env-progress"
}, H$ = { class: "creating-intro" }, K$ = {
  key: 0,
  class: "progress-warning"
}, q$ = {
  key: 1,
  class: "create-error"
}, Y$ = { class: "error-message" }, J$ = {
  key: 1,
  class: "footer-status"
}, X$ = 10, Q$ = /* @__PURE__ */ _e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = st(), r = k(""), u = k(Lr), d = k("latest"), m = k(Or), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
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
    async function C() {
      const T = r.value.trim();
      if (T) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const M = {
            name: T,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, te = await l(M);
          te.status === "started" ? j() : te.status === "error" && (_.value = {
            progress: 0,
            message: te.message || "Failed to start creation",
            error: te.message
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
    function j() {
      S || ($ = 0, S = window.setInterval(async () => {
        try {
          const T = await i();
          $ = 0, _.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (q(), o("created", T.environment_name || r.value.trim(), v.value)) : T.state === "error" ? (q(), _.value.error = T.error || T.message) : T.state === "idle" && p.value && (q(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= X$ && (q(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function q() {
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
    return Xe(async () => {
      var T;
      await kt(), (T = D.value) == null || T.focus(), I();
    }), oo(() => {
      q();
    }), (T, M) => (a(), R(mt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: E
    }, {
      body: h(() => [
        p.value ? (a(), c("div", j$, [
          t("p", H$, [
            M[11] || (M[11] = b(" Creating environment ", -1)),
            t("strong", null, f(r.value), 1),
            M[12] || (M[12] = b("... ", -1))
          ]),
          x(zn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), c("p", K$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), c("div", q$, [
            t("p", Y$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), c("div", L$, [
          t("div", O$, [
            M[6] || (M[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": M[0] || (M[0] = (te) => r.value = te),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: es(C, ["enter"])
            }, null, 544), [
              [zt, r.value]
            ])
          ]),
          t("div", A$, [
            M[7] || (M[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[1] || (M[1] = (te) => u.value = te),
              class: "form-select"
            }, [
              (a(!0), c(K, null, be(We(Dr), (te) => (a(), c("option", {
                key: te,
                value: te
              }, f(te), 9, U$))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", N$, [
            M[8] || (M[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[2] || (M[2] = (te) => d.value = te),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), c(K, null, be(g.value, (te) => (a(), c("option", {
                key: te.tag_name,
                value: te.tag_name
              }, f(te.name), 9, F$))), 128))
            ], 8, z$), [
              [hs, d.value]
            ])
          ]),
          t("div", B$, [
            M[9] || (M[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": M[3] || (M[3] = (te) => m.value = te),
              class: "form-select"
            }, [
              (a(!0), c(K, null, be(We(ll), (te) => (a(), c("option", {
                key: te,
                value: te
              }, f(te) + f(te === "auto" ? " (detect GPU)" : ""), 9, V$))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", W$, [
            t("label", G$, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": M[4] || (M[4] = (te) => v.value = te)
              }, null, 512), [
                [en, v.value]
              ]),
              M[10] || (M[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), c(K, { key: 1 }, [
          _.value.error ? (a(), R(Le, {
            key: 0,
            variant: "secondary",
            onClick: z
          }, {
            default: h(() => [...M[15] || (M[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), c("span", J$, " Creating environment... "))
        ], 64)) : (a(), c(K, { key: 0 }, [
          x(Le, {
            variant: "primary",
            disabled: !r.value.trim(),
            onClick: C
          }, {
            default: h(() => [...M[13] || (M[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Le, {
            variant: "secondary",
            onClick: M[5] || (M[5] = (te) => o("close"))
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
}), Z$ = /* @__PURE__ */ ke(Q$, [["__scopeId", "data-v-f37eaa42"]]), eC = /* @__PURE__ */ _e({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = st(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = U(() => {
      if (!d.value.trim()) return i.value;
      const D = d.value.toLowerCase();
      return i.value.filter(
        (E) => {
          var C;
          return E.name.toLowerCase().includes(D) || ((C = E.current_branch) == null ? void 0 : C.toLowerCase().includes(D));
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
      r.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        r.value = !1;
      }
    }
    return Xe(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (D, E) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (C) => m.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              x(de, {
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
          x($o, {
            modelValue: d.value,
            "onUpdate:modelValue": E[1] || (E[1] = (C) => d.value = C),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          r.value ? (a(), R(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), R(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), c(K, { key: 2 }, [
            w.value.length ? (a(), R(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), c(K, null, be(w.value, (C) => (a(), R(o$, {
                  key: C.name,
                  "environment-name": C.name,
                  "is-current": C.is_current,
                  "current-branch": C.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    C.is_current ? y("", !0) : (a(), R(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => D.$emit("switch", C.name)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => S(C)
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
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, so({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  x(de, {
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
      x(as, {
        show: m.value,
        title: "About Environments",
        onClose: E[3] || (E[3] = (C) => m.value = !1)
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
          x(de, {
            variant: "secondary",
            onClick: E[2] || (E[2] = (C) => m.value = !1)
          }, {
            default: h(() => [...E[12] || (E[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), R($$, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: E[4] || (E[4] = (C) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), R(Z$, {
        key: 1,
        onClose: E[5] || (E[5] = (C) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), tC = /* @__PURE__ */ ke(eC, [["__scopeId", "data-v-f95999f4"]]), sC = { class: "file-path" }, oC = { class: "file-path-text" }, nC = ["title"], aC = /* @__PURE__ */ _e({
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
    return (l, i) => (a(), c("div", sC, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", oC, f(e.path), 1),
      e.copyable ? (a(), c("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, nC)) : y("", !0)
    ]));
  }
}), lC = /* @__PURE__ */ ke(aC, [["__scopeId", "data-v-f0982173"]]), iC = { class: "export-blocked" }, rC = { class: "issues-list" }, cC = { class: "issue-message" }, uC = {
  key: 0,
  class: "issue-details"
}, dC = ["onClick"], fC = { class: "issue-fix" }, mC = /* @__PURE__ */ _e({
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
    return (l, i) => (a(), R(mt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (r) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", iC, [
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
          t("div", rC, [
            (a(!0), c(K, null, be(e.issues, (r, u) => (a(), c("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", cC, f(r.message), 1),
              r.details.length ? (a(), c("div", uC, [
                (a(!0), c(K, null, be(n(u), (d, m) => (a(), c("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                r.details.length > 3 && !o[u] ? (a(), c("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(r.details.length - 3) + " more ", 9, dC)) : y("", !0)
              ])) : y("", !0),
              t("div", fC, [
                r.type === "uncommitted_workflows" ? (a(), c(K, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : r.type === "uncommitted_git_changes" ? (a(), c(K, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : r.type === "unresolved_issues" ? (a(), c(K, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        x(Le, {
          variant: "primary",
          onClick: i[0] || (i[0] = (r) => l.$emit("close"))
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
}), Ar = /* @__PURE__ */ ke(mC, [["__scopeId", "data-v-b52f5e32"]]), vC = { class: "export-warnings" }, pC = {
  key: 0,
  class: "success-header"
}, gC = { class: "warning-header" }, hC = { class: "warning-summary" }, yC = { class: "warning-title" }, wC = { class: "models-section" }, _C = { class: "models-list" }, kC = { class: "model-info" }, bC = { class: "model-filename" }, $C = { class: "model-workflows" }, CC = ["onClick"], xC = /* @__PURE__ */ _e({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), r = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), c(K, null, [
      x(mt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", vC, [
            e.models.length === 0 ? (a(), c("div", pC, [...m[4] || (m[4] = [
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
            ])])) : (a(), c(K, { key: 1 }, [
              t("div", gC, [
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
                t("div", hC, [
                  t("h3", yC, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", wC, [
                t("div", _C, [
                  (a(!0), c(K, null, be(r.value, (v) => (a(), c("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", kC, [
                      t("div", bC, f(v.filename), 1),
                      t("div", $C, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, CC)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (a(), c("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: m[0] || (m[0] = (v) => l.value = !0)
                }, " Show " + f(e.models.length - 3) + " more model" + f(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : y("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: h(() => [
          x(Le, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          x(Le, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => d.$emit("confirm"))
          }, {
            default: h(() => [
              b(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), R(nl, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ur = /* @__PURE__ */ ke(xC, [["__scopeId", "data-v-b698d882"]]), SC = { class: "export-card" }, IC = { class: "export-path-row" }, EC = { class: "export-actions" }, TC = {
  key: 1,
  class: "export-warning"
}, PC = /* @__PURE__ */ _e({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = st(), n = k(""), l = k(!1), i = k(!1), r = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = U(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const E = await s();
        m.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
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
        u.value = E;
      } catch (E) {
        u.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var E;
      if ((E = u.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (C) {
          console.error("Failed to copy path:", C);
        }
    }
    async function D() {
      var E;
      if ((E = u.value) != null && E.path) {
        r.value = !0;
        try {
          const C = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!C.ok)
            throw new Error(`Download failed: ${C.statusText}`);
          const j = await C.blob(), q = URL.createObjectURL(j), z = u.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = q, I.download = z, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(q);
        } catch (C) {
          console.error("Failed to download:", C), alert(`Download failed: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
      }
    }
    return (E, C) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (j) => d.value = !0)
          })
        ]),
        content: h(() => [
          x(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", SC, [
                C[7] || (C[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", IC, [
                  x(Un, {
                    modelValue: n.value,
                    "onUpdate:modelValue": C[1] || (C[1] = (j) => n.value = j),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", EC, [
                  x(de, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      C[6] || (C[6] = t("svg", {
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
          u.value ? (a(), R(it, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              x(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    x(dt, { label: "Saved to:" }, {
                      default: h(() => [
                        x(lC, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), R(dt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), c("div", TC, [...C[8] || (C[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      loading: r.value,
                      onClick: D
                    }, {
                      default: h(() => [...C[9] || (C[9] = [
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
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...C[10] || (C[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    x(de, {
                      variant: "ghost",
                      size: "sm",
                      onClick: C[2] || (C[2] = (j) => u.value = null)
                    }, {
                      default: h(() => [...C[11] || (C[11] = [
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
      x(as, {
        show: d.value,
        title: "What Gets Exported",
        onClose: C[3] || (C[3] = (j) => d.value = !1)
      }, {
        content: h(() => [...C[12] || (C[12] = [
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
      v.value && m.value ? (a(), R(Ar, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: C[4] || (C[4] = (j) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), R(Ur, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: C[5] || (C[5] = (j) => g.value = !1),
        onRevalidate: S
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), RC = /* @__PURE__ */ ke(PC, [["__scopeId", "data-v-f4d120f2"]]), MC = { class: "file-input-wrapper" }, DC = ["accept", "multiple", "disabled"], LC = /* @__PURE__ */ _e({
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
      var u;
      (u = l.value) == null || u.click();
    }
    function r(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return s({
      triggerInput: i
    }), (u, d) => (a(), c("div", MC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: r
      }, null, 40, DC),
      x(de, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
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
            b(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), OC = /* @__PURE__ */ ke(LC, [["__scopeId", "data-v-cd192091"]]), AC = {
  key: 0,
  class: "drop-zone-empty"
}, UC = { class: "drop-zone-text" }, NC = { class: "drop-zone-primary" }, zC = { class: "drop-zone-secondary" }, FC = { class: "drop-zone-actions" }, BC = {
  key: 1,
  class: "drop-zone-file"
}, VC = { class: "file-info" }, WC = { class: "file-details" }, GC = { class: "file-name" }, jC = { class: "file-size" }, HC = /* @__PURE__ */ _e({
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
    const o = s, n = k(!1), l = k(null), i = k(0), r = U(() => l.value !== null), u = U(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = U(() => {
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
    return ($, P) => (a(), c("div", {
      class: Te(["file-drop-zone", { "drop-active": n.value, "has-file": r.value }]),
      onDragenter: at(m, ["prevent"]),
      onDragover: at(v, ["prevent"]),
      onDragleave: at(g, ["prevent"]),
      onDrop: at(w, ["prevent"])
    }, [
      r.value ? (a(), c("div", BC, [
        t("div", VC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", WC, [
            t("div", GC, f(u.value), 1),
            t("div", jC, f(d.value), 1)
          ])
        ]),
        x(de, {
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
      ])) : (a(), c("div", AC, [
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
        t("div", UC, [
          t("p", NC, f(e.primaryText), 1),
          t("p", zC, f(e.secondaryText), 1)
        ]),
        t("div", FC, [
          x(OC, {
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
}), KC = /* @__PURE__ */ ke(HC, [["__scopeId", "data-v-0f79cb86"]]), qC = { class: "import-preview" }, YC = { class: "preview-header" }, JC = {
  key: 0,
  class: "source-env"
}, XC = { class: "preview-content" }, QC = { class: "preview-section" }, ZC = { class: "section-header" }, ex = { class: "section-info" }, tx = { class: "section-count" }, sx = {
  key: 0,
  class: "item-list"
}, ox = { class: "item-name" }, nx = {
  key: 0,
  class: "item-more"
}, ax = { class: "preview-section" }, lx = { class: "section-header" }, ix = { class: "section-info" }, rx = { class: "section-count" }, cx = {
  key: 0,
  class: "item-list"
}, ux = { class: "item-details" }, dx = { class: "item-name" }, fx = { class: "item-meta" }, mx = {
  key: 0,
  class: "item-more"
}, vx = { class: "preview-section" }, px = { class: "section-header" }, gx = { class: "section-info" }, hx = { class: "section-count" }, yx = {
  key: 0,
  class: "item-list"
}, wx = { class: "item-name" }, _x = {
  key: 0,
  class: "item-more"
}, kx = {
  key: 0,
  class: "preview-section"
}, bx = { class: "git-info" }, $x = /* @__PURE__ */ _e({
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
    const s = e, o = U(() => s.workflows.length), n = U(() => s.models.length), l = U(() => s.nodes.length);
    function i(r) {
      return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : r < 1024 * 1024 * 1024 ? `${(r / (1024 * 1024)).toFixed(1)} MB` : `${(r / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (r, u) => (a(), c("div", qC, [
      t("div", YC, [
        x(Ut, null, {
          default: h(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), c("span", JC, [
          u[1] || (u[1] = b(" From: ", -1)),
          x(Ma, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", XC, [
        t("div", QC, [
          t("div", ZC, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", ex, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", tx, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), c("div", sx, [
            (a(!0), c(K, null, be(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", ox, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), c("div", nx, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", ax, [
          t("div", lx, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", ix, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", rx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), c("div", cx, [
            (a(!0), c(K, null, be(e.models.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", ux, [
                t("span", dx, f(d.filename), 1),
                t("span", fx, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), c("div", mx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", vx, [
          t("div", px, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", gx, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", hx, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), c("div", yx, [
            (a(!0), c(K, null, be(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", wx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), c("div", _x, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), c("div", kx, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", bx, [
            e.gitBranch ? (a(), R(dt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                x(Ma, null, {
                  default: h(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), R(dt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                x($r, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), Cx = /* @__PURE__ */ ke($x, [["__scopeId", "data-v-182fe113"]]), xx = { class: "import-config" }, Sx = { class: "config-container" }, Ix = { class: "config-field" }, Ex = { class: "input-wrapper" }, Tx = ["value"], Px = {
  key: 0,
  class: "validating-indicator"
}, Rx = {
  key: 1,
  class: "valid-indicator"
}, Mx = {
  key: 0,
  class: "field-error"
}, Dx = { class: "config-field" }, Lx = { class: "strategy-options" }, Ox = ["value", "checked", "onChange"], Ax = { class: "strategy-content" }, Ux = { class: "strategy-label" }, Nx = { class: "strategy-description" }, zx = { class: "config-field switch-field" }, Fx = { class: "switch-label" }, Bx = ["checked"], Vx = { class: "advanced-section" }, Wx = { class: "advanced-content" }, Gx = { class: "config-field" }, jx = ["value"], Hx = ["value"], Kx = /* @__PURE__ */ _e({
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
    gt(() => o.nameError, (v) => {
      l.value = !1, i.value = !v && o.name.length > 0;
    });
    const r = [
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
      n("update:name", g), i.value = !1, u && clearTimeout(u), g.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), c("div", xx, [
      x(Ut, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", Sx, [
        t("div", Ix, [
          x(Sn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", Ex, [
            t("input", {
              type: "text",
              class: Te(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, Tx),
            l.value ? (a(), c("span", Px, "...")) : i.value ? (a(), c("span", Rx, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), c("div", Mx, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", Dx, [
          x(Sn, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", Lx, [
            (a(), c(K, null, be(r, (w) => t("label", {
              key: w.value,
              class: Te(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, Ox),
              t("div", Ax, [
                t("span", Ux, f(w.label), 1),
                t("span", Nx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", zx, [
          t("label", Fx, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, Bx),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", Vx, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", Wx, [
            t("div", Gx, [
              x(Sn, null, {
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
                (a(!0), c(K, null, be(We(ll), (w) => (a(), c("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, Hx))), 128))
              ], 40, jx)
            ])
          ])
        ])
      ])
    ]));
  }
}), qx = /* @__PURE__ */ ke(Kx, [["__scopeId", "data-v-89ea06a1"]]), Yx = { class: "import-flow" }, Jx = {
  key: 0,
  class: "import-empty"
}, Xx = { class: "git-import-section" }, Qx = { class: "git-url-input-row" }, Zx = ["disabled"], e3 = {
  key: 0,
  class: "git-error"
}, t3 = {
  key: 1,
  class: "import-configure"
}, s3 = { class: "selected-file-bar" }, o3 = {
  key: 0,
  class: "file-bar-content"
}, n3 = { class: "file-bar-info" }, a3 = { class: "file-bar-name" }, l3 = { class: "file-bar-size" }, i3 = {
  key: 1,
  class: "file-bar-content"
}, r3 = { class: "file-bar-info" }, c3 = { class: "file-bar-name" }, u3 = {
  key: 0,
  class: "preview-loading"
}, d3 = { class: "import-actions" }, f3 = {
  key: 2,
  class: "import-progress"
}, m3 = { class: "creating-intro" }, v3 = {
  key: 0,
  class: "progress-warning"
}, p3 = {
  key: 1,
  class: "import-error"
}, g3 = { class: "error-message" }, h3 = {
  key: 3,
  class: "import-complete"
}, y3 = { class: "complete-message" }, w3 = { class: "complete-title" }, _3 = { class: "complete-details" }, k3 = { class: "complete-actions" }, b3 = /* @__PURE__ */ _e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var ie, B, ee, ge;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: r, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = st();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), D = k(null), E = k(""), C = k(null), j = k(!1), q = k(null), z = k(null), I = k({
      name: ((ie = n.initialProgress) == null ? void 0 : ie.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = k(null), M = k({
      message: ((B = n.initialProgress) == null ? void 0 : B.message) ?? "Preparing import...",
      phase: ((ee = n.initialProgress) == null ? void 0 : ee.phase) ?? "",
      progress: ((ge = n.initialProgress) == null ? void 0 : ge.progress) ?? 0,
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
    ], X = U(() => {
      if (!z.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ve = z.value;
      return {
        sourceEnvironment: ve.comfyui_version ? `ComfyUI ${ve.comfyui_version}` : "Unknown",
        workflows: ve.workflows.map((fe) => fe.name),
        models: ve.models.map((fe) => ({
          filename: fe.filename,
          size: 0,
          type: fe.relative_path.split("/")[0] || "model"
        })),
        nodes: ve.nodes.map((fe) => fe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), H = U(() => !P.value && !D.value && z.value && I.value.name.length > 0 && !T.value && (w.value || C.value));
    async function se(ve) {
      w.value = ve, P.value = !0, D.value = null, z.value = null;
      try {
        const fe = await i(ve);
        z.value = fe;
      } catch (fe) {
        D.value = fe instanceof Error ? fe.message : "Failed to analyze file", console.error("Preview error:", fe);
      } finally {
        P.value = !1;
      }
    }
    function Z() {
      w.value = null, C.value = null, E.value = "", q.value = null, _.value = !1, S.value = !1, $.value = "", z.value = null, D.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, l("source-cleared");
    }
    function N() {
      Ae(), Z(), p.value = !1, P.value = !1, j.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function G() {
      if (E.value.trim()) {
        j.value = !0, q.value = null;
        try {
          const ve = await r(E.value.trim());
          C.value = E.value.trim(), z.value = ve;
        } catch (ve) {
          q.value = ve instanceof Error ? ve.message : "Failed to analyze repository";
        } finally {
          j.value = !1;
        }
      }
    }
    function O(ve) {
      try {
        const fe = new URL(ve);
        return fe.host + fe.pathname.replace(/\.git$/, "");
      } catch {
        return ve;
      }
    }
    async function le(ve) {
      if (!ve) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const fe = await u(ve);
        T.value = fe.valid ? null : fe.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function pe() {
      if (I.value.name && !(!w.value && !C.value)) {
        p.value = !0, _.value = !1, M.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ve;
          if (w.value)
            ve = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (C.value)
            ve = await m(
              C.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ve.status === "started" ? Me() : (S.value = !1, $.value = ve.message, p.value = !1, _.value = !0);
        } catch (ve) {
          S.value = !1, $.value = ve instanceof Error ? ve.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Me() {
      if (g) return;
      const ve = async () => {
        try {
          const De = await v();
          return M.value = {
            message: De.message,
            phase: De.phase || "",
            progress: De.progress ?? (De.state === "importing" ? 50 : 0),
            error: De.error || null
          }, De.state === "complete" ? (Ae(), S.value = !0, $.value = `Environment '${De.environment_name}' created successfully`, p.value = !1, _.value = !0, De.environment_name && l("import-complete", De.environment_name, I.value.switchAfterImport), !1) : De.state === "error" ? (Ae(), S.value = !1, $.value = De.error || De.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (De) {
          return console.error("Failed to poll import progress:", De), !0;
        }
      };
      await ve() && (g = setInterval(async () => {
        await ve() || Ae();
      }, 2e3));
    }
    function Ae() {
      g && (clearInterval(g), g = null);
    }
    function ue(ve) {
      return ve < 1024 ? `${ve} B` : ve < 1024 * 1024 ? `${(ve / 1024).toFixed(1)} KB` : ve < 1024 * 1024 * 1024 ? `${(ve / (1024 * 1024)).toFixed(1)} MB` : `${(ve / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Xe(async () => {
      try {
        const ve = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ve.environment_name), p.value = !0, I.value.name = ve.environment_name || I.value.name || "", M.value = {
          progress: ve.progress ?? 0,
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          error: null
        }, Me());
      } catch (ve) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ve);
      }
    }), s({
      handleReset: N,
      isImporting: p,
      canImport: H
    }), (ve, fe) => {
      var De;
      return a(), c("div", Yx, [
        !w.value && !C.value && !p.value ? (a(), c("div", Jx, [
          x(KC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: se
          }),
          fe[7] || (fe[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", Xx, [
            fe[5] || (fe[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", Qx, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": fe[0] || (fe[0] = (Re) => E.value = Re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: es(G, ["enter"]),
                disabled: j.value
              }, null, 40, Zx), [
                [zt, E.value]
              ]),
              x(de, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || j.value,
                onClick: G
              }, {
                default: h(() => [
                  b(f(j.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            q.value ? (a(), c("div", e3, f(q.value), 1)) : y("", !0),
            fe[6] || (fe[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || C.value) && !p.value && !_.value ? (a(), c("div", t3, [
          t("div", s3, [
            w.value ? (a(), c("div", o3, [
              fe[8] || (fe[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", n3, [
                t("div", a3, f(w.value.name), 1),
                t("div", l3, f(ue(w.value.size)), 1)
              ])
            ])) : C.value ? (a(), c("div", i3, [
              fe[10] || (fe[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", r3, [
                t("div", c3, f(O(C.value)), 1),
                fe[9] || (fe[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            x(de, {
              variant: "ghost",
              size: "sm",
              onClick: Z
            }, {
              default: h(() => [...fe[11] || (fe[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), c("div", u3, [...fe[12] || (fe[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : D.value ? (a(), R(Jt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [D.value]
          }, null, 8, ["details"])) : z.value ? (a(), R(Cx, {
            key: 2,
            "source-environment": X.value.sourceEnvironment,
            workflows: X.value.workflows,
            models: X.value.models,
            nodes: X.value.nodes,
            "git-branch": X.value.gitBranch,
            "git-commit": X.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          z.value ? (a(), R(qx, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": fe[1] || (fe[1] = (Re) => I.value.name = Re),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": fe[2] || (fe[2] = (Re) => I.value.modelStrategy = Re),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": fe[3] || (fe[3] = (Re) => I.value.torchBackend = Re),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": fe[4] || (fe[4] = (Re) => I.value.switchAfterImport = Re),
            "name-error": T.value,
            onValidateName: le
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((De = z.value) != null && De.models_needing_download) ? (a(), R(Jt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${z.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", d3, [
            x(de, {
              variant: "secondary",
              size: "md",
              onClick: Z
            }, {
              default: h(() => [...fe[13] || (fe[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(de, {
              variant: "primary",
              size: "md",
              disabled: !H.value,
              onClick: pe
            }, {
              default: h(() => [...fe[14] || (fe[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), c("div", f3, [
          t("p", m3, [
            fe[15] || (fe[15] = b(" Importing environment ", -1)),
            t("strong", null, f(I.value.name), 1),
            fe[16] || (fe[16] = b("... ", -1))
          ]),
          x(zn, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (a(), c("p", v3, " This may take several minutes. Please wait... ")),
          M.value.error ? (a(), c("div", p3, [
            t("p", g3, f(M.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), c("div", h3, [
          t("div", {
            class: Te(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", y3, [
            t("div", w3, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", _3, f($.value), 1)
          ]),
          t("div", k3, [
            x(de, {
              variant: "primary",
              size: "md",
              onClick: N
            }, {
              default: h(() => [...fe[17] || (fe[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Nr = /* @__PURE__ */ ke(b3, [["__scopeId", "data-v-72cbc04e"]]), $3 = /* @__PURE__ */ _e({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, r) {
      r && o("import-complete-switch", i);
    }
    return (i, r) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: r[0] || (r[0] = (u) => n.value = !0)
          })
        ]),
        content: h(() => [
          x(Nr, { onImportComplete: l })
        ]),
        _: 1
      }),
      x(as, {
        show: n.value,
        title: "How Import Works",
        onClose: r[1] || (r[1] = (u) => n.value = !1)
      }, {
        content: h(() => [...r[2] || (r[2] = [
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
}), C3 = /* @__PURE__ */ ke($3, [["__scopeId", "data-v-e13bfe76"]]), wn = co(), x3 = 5e3, lo = k([]), pa = k(!1), ga = k(null);
let Ro = null;
async function _n(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function zr(e) {
  const s = U(
    () => lo.value.filter((p) => p.status === "running")
  ), o = U(
    () => lo.value.filter((p) => p.status === "deploying")
  ), n = U(
    () => lo.value.filter((p) => p.status === "stopped")
  ), l = U(
    () => s.value.length + o.value.length
  ), i = U(() => {
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
  async function r() {
    pa.value = !0, ga.value = null;
    try {
      let p;
      if (!wn) {
        const _ = await _n("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      lo.value = p.instances;
    } catch (p) {
      ga.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      pa.value = !1;
    }
  }
  function u(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const S = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function d(p) {
    try {
      if (!wn) {
        const _ = u(p, "stop"), S = await _n(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] stopInstance error:", _), _;
    }
  }
  async function m(p) {
    try {
      if (!wn) {
        const _ = u(p, "start"), S = await _n(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] startInstance error:", _), _;
    }
  }
  async function v(p) {
    try {
      if (!wn) {
        const _ = u(p, "terminate"), S = await _n(_, { method: "DELETE" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function g() {
    Ro || (Ro = window.setInterval(r, x3));
  }
  function w() {
    Ro && (clearInterval(Ro), Ro = null);
  }
  return gt(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (r(), g()), {
    // State
    instances: lo,
    isLoading: pa,
    error: ga,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
    // Actions
    refreshInstances: r,
    stopInstance: d,
    startInstance: m,
    terminateInstance: v,
    // Polling
    startPolling: g,
    stopPolling: w
  };
}
const S3 = { class: "instance-header" }, I3 = { class: "provider-badge" }, E3 = { class: "instance-name" }, T3 = {
  key: 0,
  class: "spinner"
}, P3 = { class: "instance-details" }, R3 = {
  key: 0,
  class: "detail"
}, M3 = {
  key: 1,
  class: "detail instance-url"
}, D3 = {
  key: 2,
  class: "detail"
}, L3 = {
  key: 3,
  class: "detail"
}, O3 = {
  key: 4,
  class: "detail total-cost"
}, A3 = {
  key: 0,
  class: "deployment-progress"
}, U3 = { class: "progress-message" }, N3 = { class: "instance-actions" }, z3 = /* @__PURE__ */ _e({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = U(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), n = U(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = U(() => `status-${s.instance.status}`);
    function i() {
      s.instance.comfyui_url && window.open(s.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function r() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(d) {
      const m = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (d, m) => (a(), c("div", {
      class: Te(["instance-card", l.value])
    }, [
      t("div", S3, [
        t("span", I3, f(o.value), 1),
        t("span", E3, f(e.instance.name), 1),
        t("span", {
          class: Te(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), c("span", T3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", P3, [
        e.instance.gpu_type ? (a(), c("span", R3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), c("span", M3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), c("span", D3, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), c("span", L3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), c("span", O3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), c("div", A3, [
        t("div", U3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), R(ea, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", N3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), R(de, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), R(de, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: r
        }, {
          default: h(() => [...m[4] || (m[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), R(de, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: h(() => [...m[5] || (m[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), R(de, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: h(() => [...m[6] || (m[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        x(de, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => d.$emit("terminate", e.instance))
        }, {
          default: h(() => [...m[7] || (m[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), F3 = /* @__PURE__ */ ke(z3, [["__scopeId", "data-v-746c3894"]]), B3 = { class: "instances-tab" }, V3 = { class: "instances-header" }, W3 = {
  key: 0,
  class: "loading-state"
}, G3 = {
  key: 1,
  class: "empty-state"
}, j3 = {
  key: 2,
  class: "instances-list"
}, H3 = /* @__PURE__ */ _e({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = U(() => {
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
    return (n, l) => (a(), c("div", B3, [
      t("div", V3, [
        x(Ut, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        x(de, {
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
      e.isLoading && e.instances.length === 0 ? (a(), c("div", W3, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), c("div", G3, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), c("div", j3, [
        (a(!0), c(K, null, be(o.value, (i) => (a(), R(F3, {
          key: i.id,
          instance: i,
          "is-loading": e.actionLoadingId === i.id,
          onStop: l[1] || (l[1] = (r) => n.$emit("stop", r)),
          onStart: l[2] || (l[2] = (r) => n.$emit("start", r)),
          onTerminate: l[3] || (l[3] = (r) => n.$emit("terminate", r))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), K3 = /* @__PURE__ */ ke(H3, [["__scopeId", "data-v-ba614fc3"]]), q3 = { class: "remote-header" }, Y3 = { class: "remote-info" }, J3 = { class: "remote-icon" }, X3 = { class: "remote-name" }, Q3 = {
  key: 0,
  class: "default-badge"
}, Z3 = {
  key: 1,
  class: "sync-badge"
}, e5 = {
  key: 0,
  class: "ahead"
}, t5 = {
  key: 1,
  class: "behind"
}, s5 = {
  key: 1,
  class: "synced"
}, o5 = ["href"], n5 = {
  key: 1,
  class: "remote-url-text"
}, a5 = { class: "remote-actions" }, l5 = /* @__PURE__ */ _e({
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
    const s = e, o = U(() => s.remote.is_default), n = U(() => {
      const i = s.remote.fetch_url, r = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return r ? `https://${r[1]}/${r[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, r) => (a(), c("div", {
      class: Te(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", q3, [
        t("div", Y3, [
          t("span", J3, f(o.value ? "🔗" : "🌐"), 1),
          t("span", X3, f(e.remote.name), 1),
          o.value ? (a(), c("span", Q3, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", Z3, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(K, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", e5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", t5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", s5, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), c("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: r[0] || (r[0] = at(() => {
          }, ["stop"]))
        }, f(l.value), 9, o5)) : (a(), c("span", n5, f(l.value), 1))
      ]),
      t("div", a5, [
        x(de, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: r[1] || (r[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...r[4] || (r[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), R(de, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: r[2] || (r[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        x(de, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: r[3] || (r[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Fr = /* @__PURE__ */ ke(l5, [["__scopeId", "data-v-d687d161"]]), i5 = { class: "runpod-tab" }, r5 = { class: "api-key-card" }, c5 = { class: "api-key-row" }, u5 = { class: "api-key-input-wrapper" }, d5 = ["type", "disabled"], f5 = ["title"], m5 = { class: "status-icon" }, v5 = { class: "status-text" }, p5 = {
  key: 0,
  class: "credit-balance"
}, g5 = { class: "config-card" }, h5 = { class: "config-row" }, y5 = ["disabled"], w5 = {
  key: 0,
  value: ""
}, _5 = {
  key: 1,
  value: "",
  disabled: ""
}, k5 = ["value", "disabled"], b5 = { class: "config-row" }, $5 = {
  key: 0,
  class: "loading-inline"
}, C5 = { class: "no-volumes-state" }, x5 = { class: "no-volumes-text" }, S5 = ["value"], I5 = { class: "config-row" }, E5 = ["disabled"], T5 = {
  key: 0,
  value: ""
}, P5 = {
  key: 1,
  value: ""
}, R5 = {
  key: 2,
  value: ""
}, M5 = ["value"], D5 = { class: "config-row" }, L5 = { class: "radio-group" }, O5 = { class: "radio-option" }, A5 = { class: "radio-label" }, U5 = { class: "radio-option disabled" }, N5 = { class: "radio-label" }, z5 = { class: "config-row" }, F5 = { class: "radio-group" }, B5 = { class: "radio-option" }, V5 = { class: "radio-label" }, W5 = { class: "radio-option disabled" }, G5 = { class: "radio-label" }, j5 = { class: "config-row" }, H5 = {
  key: 0,
  class: "loading-text"
}, K5 = {
  key: 1,
  class: "empty-remotes"
}, q5 = { class: "remotes-list" }, Y5 = {
  key: 0,
  class: "sync-warning"
}, J5 = { class: "warning-content" }, X5 = { class: "remotes-footer" }, Q5 = { class: "summary-card" }, Z5 = {
  key: 0,
  class: "loading-text"
}, eS = { class: "summary-row" }, tS = { class: "summary-value" }, sS = { class: "summary-row" }, oS = { class: "summary-value" }, nS = { class: "summary-row" }, aS = { class: "summary-value" }, lS = {
  key: 0,
  class: "summary-sub-row"
}, iS = { class: "summary-sub-label" }, rS = {
  key: 1,
  class: "summary-sub-row warning"
}, cS = { class: "summary-sub-label" }, uS = { class: "summary-row" }, dS = { class: "summary-value" }, fS = { class: "summary-row" }, mS = { class: "summary-value" }, vS = { class: "deployment-summary" }, pS = { class: "summary-columns" }, gS = { class: "summary-column" }, hS = { class: "pricing-row" }, yS = { class: "pricing-value" }, wS = { class: "pricing-row" }, _S = { class: "pricing-value" }, kS = { class: "pricing-row" }, bS = { class: "pricing-value" }, $S = { class: "pricing-row total" }, CS = { class: "pricing-value" }, xS = { class: "summary-column" }, SS = { class: "spec-row" }, IS = { class: "spec-row" }, ES = {
  key: 0,
  class: "spec-row"
}, TS = {
  key: 1,
  class: "spec-row spot-warning"
}, PS = {
  key: 4,
  class: "deploy-actions"
}, RS = { class: "progress-content" }, MS = { class: "phase-indicator" }, DS = { key: 0 }, LS = { key: 1 }, OS = { key: 2 }, AS = {
  key: 3,
  class: "spinner"
}, US = { class: "phase-text" }, NS = { class: "phase-name" }, zS = { class: "phase-detail" }, FS = {
  key: 0,
  class: "ready-actions"
}, BS = { class: "console-link" }, VS = ["href"], WS = /* @__PURE__ */ _e({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: r,
      deployToRunPod: u,
      getDeploymentStatus: d,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: g,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: S,
      getDataCenters: $
    } = st(), P = k(!1), D = k(""), E = k(!1), C = k(!1), j = k(null), q = k(null), z = k(""), I = k(""), T = k(""), M = k("SECURE"), te = k("ON_DEMAND"), X = k("my-comfyui-deploy"), H = k([]), se = k({}), Z = k(!1), N = k(null), G = k(null), O = k(null), le = k([]), pe = k(!1), Me = k([]), Ae = k(!1), ue = k([]), ie = k(!1), B = k(null), ee = k(!1), ge = k(!1), ve = k(null), fe = k(!1), De = k(null), Re = k(null), L = k(null), V = k(!1), ne = k(null), ce = k(!1), ye = k(!1), we = U(() => Me.value.find((Se) => Se.id === I.value) || null), Ie = U(() => z.value ? Me.value.filter((Se) => Se.data_center_id === z.value) : Me.value), Ee = U(() => ue.value.filter((Se) => Se.available)), re = U(() => N.value && se.value[N.value] || null), he = U(() => {
      if (!N.value) return null;
      const Se = H.value.find((Q) => Q.name === N.value);
      return (Se == null ? void 0 : Se.fetch_url) || null;
    }), Ne = U(() => E.value && I.value && T.value && he.value && !ge.value && !V.value), Pe = (Se) => {
      const Q = ue.value.find((ht) => ht.id === T.value);
      if (!Q) return "0.00";
      if (Se === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (Se === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const He = M.value === "SECURE";
      return Se === "ON_DEMAND" ? He ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : He ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, oe = U(() => {
      const Se = ue.value.find((ls) => ls.id === T.value), Q = Me.value.find((ls) => ls.id === I.value);
      if (!Se) return null;
      const He = M.value === "SECURE", ht = te.value === "SPOT";
      let Yt;
      ht ? Yt = He ? Se.secureSpotPrice ?? 0 : Se.communitySpotPrice ?? 0 : Yt = He ? Se.securePrice ?? 0 : Se.communityPrice ?? 0;
      const ys = Q ? Q.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: Yt,
        volume: ys,
        container: ws,
        total: Yt + ys + ws
      };
    });
    async function J() {
      await Ve(), await Promise.all([vt(), Oe()]);
    }
    async function Oe() {
      Z.value = !0;
      try {
        const Se = await w();
        H.value = Se.remotes, await Promise.all(
          Se.remotes.map(async (He) => {
            const ht = await p(He.name);
            ht && (se.value[He.name] = ht);
          })
        );
        const Q = Se.remotes.find((He) => He.is_default);
        Q ? N.value = Q.name : Se.remotes.length > 0 && (N.value = Se.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Z.value = !1;
      }
    }
    async function Ce(Se) {
      G.value = Se;
      try {
        await _(Se);
        const Q = await p(Se);
        Q && (se.value[Se] = Q), o("toast", `Fetched from ${Se}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        G.value = null;
      }
    }
    async function $e(Se) {
      O.value = Se;
      try {
        await S(Se, { force: !1 });
        const Q = await p(Se);
        Q && (se.value[Se] = Q), o("toast", `Pushed to ${Se}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        O.value = null;
      }
    }
    function W(Se) {
      N.value = Se;
    }
    async function F() {
      if (D.value) {
        C.value = !0, j.value = null;
        try {
          const Se = await l(D.value, !0);
          Se.status === "success" ? (E.value = !0, q.value = Se.credit_balance ?? null, j.value = { type: "success", message: Se.message }, await J()) : j.value = { type: "error", message: Se.message };
        } catch (Se) {
          j.value = {
            type: "error",
            message: Se instanceof Error ? Se.message : "Connection test failed"
          };
        } finally {
          C.value = !1;
        }
      }
    }
    async function me() {
      try {
        await v(), D.value = "", E.value = !1, j.value = null, q.value = null, le.value = [], z.value = "", Me.value = [], I.value = "", ue.value = [], T.value = "", B.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      Ae.value = !0, pe.value = !0;
      try {
        const Se = await i();
        Me.value = Se.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const He of Se.volumes)
          He.data_center_id && !Q.has(He.data_center_id) && Q.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (Se.volumes.length === 0) {
          const He = await $();
          le.value = He.data_centers;
        } else
          le.value = Array.from(Q.values());
        if (Me.value.length > 0) {
          const He = Me.value[0];
          I.value = He.id, He.data_center_id && (z.value = He.data_center_id, await Qe(He.data_center_id));
        } else le.value.length > 0 && (z.value = le.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ae.value = !1, pe.value = !1;
      }
    }
    async function Qe(Se) {
      ie.value = !0;
      try {
        const Q = await r(Se);
        ue.value = Q.gpu_types;
        const He = ue.value.find((ht) => ht.available);
        He ? T.value = He.id : T.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        ie.value = !1;
      }
    }
    gt(z, async (Se) => {
      if (!Se || Ae.value) return;
      const Q = Me.value.find((He) => He.id === I.value);
      Q && Q.data_center_id !== Se && (I.value = ""), await Qe(Se);
    }), gt(I, async (Se) => {
      if (!Se) {
        ue.value = [], T.value = "";
        return;
      }
      if (Ae.value) return;
      const Q = Me.value.find((He) => He.id === Se);
      Q && Q.data_center_id !== z.value ? z.value = Q.data_center_id : Q && await Qe(Q.data_center_id);
    });
    async function vt() {
      ee.value = !0;
      try {
        B.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        ee.value = !1;
      }
    }
    async function lt() {
      if (!(!T.value || !I.value)) {
        V.value = !0, ve.value = null;
        try {
          const Se = await g();
          ne.value = Se, Se.can_export ? Se.warnings.models_without_sources.length > 0 ? ye.value = !0 : await Ft() : ce.value = !0;
        } catch (Se) {
          ve.value = {
            status: "error",
            message: Se instanceof Error ? Se.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          V.value = !1;
        }
      }
    }
    async function ut() {
      ye.value = !1, await Ft();
    }
    async function Rt() {
      try {
        const Se = await g();
        ne.value = Se;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ft() {
      ge.value = !0;
      try {
        let Se;
        if (te.value === "SPOT") {
          const He = ue.value.find((ht) => ht.id === T.value);
          He && (Se = M.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const Q = await u({
          gpu_type_id: T.value,
          pod_name: X.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: M.value,
          pricing_type: te.value,
          spot_bid: Se,
          import_source: he.value
        });
        ve.value = Q, Q.status === "success" && Q.pod_id ? (De.value = Q.pod_id, fe.value = !0, qt(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (Se) {
        ve.value = {
          status: "error",
          message: Se instanceof Error ? Se.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        ge.value = !1;
      }
    }
    function qt(Se) {
      Ms(Se), L.value = window.setInterval(() => Ms(Se), 3e3);
    }
    function Ws() {
      L.value && (clearInterval(L.value), L.value = null);
    }
    async function Ms(Se) {
      try {
        const Q = await d(Se);
        Re.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Ws(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function no() {
      fe.value = !1, Ws(), De.value = null, Re.value = null;
    }
    function Co() {
      var Se;
      (Se = Re.value) != null && Se.comfyui_url && window.open(Re.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function xo(Se) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[Se || ""] || "Initializing...";
    }
    function So(Se) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[Se || ""] ?? 10;
    }
    return Xe(async () => {
      try {
        const Se = await m(!0);
        Se.has_key && Se.key_preview && (D.value = `****${Se.key_preview}`, Se.valid ? (E.value = !0, q.value = Se.credit_balance ?? null, j.value = { type: "success", message: "Connected to RunPod" }, await J()) : Se.error && (j.value = { type: "error", message: Se.error }));
      } catch {
      }
    }), oo(() => {
      Ws();
    }), (Se, Q) => {
      var He, ht, Yt, ys, ws, ls;
      return a(), c(K, null, [
        t("div", i5, [
          x(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", r5, [
                t("div", c5, [
                  t("div", u5, [
                    qe(t("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (ze) => D.value = ze),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, d5), [
                      [Qn, D.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (ze) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, f5)
                  ]),
                  E.value ? y("", !0) : (a(), R(de, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: C.value,
                    disabled: !D.value || C.value,
                    onClick: F
                  }, {
                    default: h(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  E.value ? (a(), R(de, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: me
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                j.value ? (a(), c("div", {
                  key: 0,
                  class: Te(["connection-status", j.value.type])
                }, [
                  t("span", m5, f(j.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", v5, f(j.value.message), 1),
                  q.value !== null ? (a(), c("span", p5, " $" + f(q.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          E.value ? (a(), R(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", g5, [
                t("div", h5, [
                  Q[19] || (Q[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (ze) => z.value = ze),
                    class: "config-select",
                    disabled: pe.value
                  }, [
                    pe.value ? (a(), c("option", w5, "Loading...")) : z.value ? y("", !0) : (a(), c("option", _5, "Select a region")),
                    (a(!0), c(K, null, be(le.value, (ze) => (a(), c("option", {
                      key: ze.id,
                      value: ze.id,
                      disabled: !ze.available
                    }, f(ze.id) + " (" + f(ze.name) + ")" + f(ze.available ? "" : " [Unavailable]"), 9, k5))), 128))
                  ], 8, y5), [
                    [hs, z.value]
                  ])
                ]),
                t("div", b5, [
                  Q[24] || (Q[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ae.value ? (a(), c("div", $5, "Loading volumes...")) : Ie.value.length === 0 ? (a(), c(K, { key: 1 }, [
                    t("div", C5, [
                      Q[20] || (Q[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", x5, "No volumes in " + f(z.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), c(K, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (ze) => I.value = ze),
                      class: "config-select"
                    }, [
                      (a(!0), c(K, null, be(Ie.value, (ze) => (a(), c("option", {
                        key: ze.id,
                        value: ze.id
                      }, f(ze.name) + " (" + f(ze.size_gb) + "GB) ", 9, S5))), 128))
                    ], 512), [
                      [hs, I.value]
                    ]),
                    Q[23] || (Q[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", I5, [
                  Q[25] || (Q[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (ze) => T.value = ze),
                    class: "config-select",
                    disabled: ie.value || !I.value
                  }, [
                    I.value ? ie.value ? (a(), c("option", P5, "Loading GPUs...")) : Ee.value.length === 0 ? (a(), c("option", R5, "No GPUs available in this region")) : y("", !0) : (a(), c("option", T5, "Select a volume first")),
                    (a(!0), c(K, null, be(Ee.value, (ze) => (a(), c("option", {
                      key: ze.id,
                      value: ze.id
                    }, f(ze.displayName) + " (" + f(ze.memoryInGb) + "GB) - $" + f(M.value === "SECURE" ? (ze.securePrice ?? 0).toFixed(2) : (ze.communityPrice ?? 0).toFixed(2)) + "/hr " + f(ze.stockStatus ? `[${ze.stockStatus}]` : ""), 9, M5))), 128))
                  ], 8, E5), [
                    [hs, T.value]
                  ])
                ]),
                t("div", D5, [
                  Q[26] || (Q[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", L5, [
                    t("label", O5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (ze) => M.value = ze),
                        value: "SECURE"
                      }, null, 512), [
                        [Qt, M.value]
                      ]),
                      t("span", A5, "Secure ($" + f(Pe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", U5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (ze) => M.value = ze),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Qt, M.value]
                      ]),
                      t("span", N5, "Community ($" + f(Pe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", z5, [
                  Q[27] || (Q[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", F5, [
                    t("label", B5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (ze) => te.value = ze),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Qt, te.value]
                      ]),
                      t("span", V5, "On-Demand ($" + f(Pe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", W5, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (ze) => te.value = ze),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Qt, te.value]
                      ]),
                      t("span", G5, "Spot ($" + f(Pe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", j5, [
                  Q[28] || (Q[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (ze) => X.value = ze),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [zt, X.value]
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
              Z.value ? (a(), c("div", H5, "Loading remotes...")) : H.value.length === 0 ? (a(), c("div", K5, [
                Q[30] || (Q[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                x(de, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (ze) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), c(K, { key: 2 }, [
                t("div", q5, [
                  (a(!0), c(K, null, be(H.value, (ze) => (a(), R(Fr, {
                    key: ze.name,
                    remote: ze,
                    "sync-status": se.value[ze.name],
                    "is-selected": N.value === ze.name,
                    "is-fetching": G.value === ze.name,
                    "is-pushing": O.value === ze.name,
                    onFetch: Ce,
                    onPush: $e,
                    onSelect: W
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                re.value && re.value.ahead > 0 ? (a(), c("div", Y5, [
                  Q[31] || (Q[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", J5, [
                    t("strong", null, f(re.value.ahead) + " unpushed commit" + f(re.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(N.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  x(de, {
                    variant: "primary",
                    size: "xs",
                    loading: O.value === N.value,
                    onClick: Q[11] || (Q[11] = (ze) => N.value && $e(N.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(N.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", X5, [
                  x(de, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (ze) => o("navigate", "remotes"))
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
          E.value ? (a(), R(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", Q5, [
                ee.value ? (a(), c("div", Z5, "Loading environment summary...")) : B.value ? (a(), c(K, { key: 1 }, [
                  t("div", eS, [
                    Q[33] || (Q[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", tS, f(B.value.comfyui_version), 1)
                  ]),
                  t("div", sS, [
                    Q[34] || (Q[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", oS, f(B.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", nS, [
                    Q[35] || (Q[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", aS, f(B.value.model_count) + " models", 1)
                  ]),
                  B.value.models_with_sources > 0 ? (a(), c("div", lS, [
                    t("span", iS, "└─ " + f(B.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  B.value.models_without_sources > 0 ? (a(), c("div", rS, [
                    t("span", cS, "└─ " + f(B.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", uS, [
                    Q[36] || (Q[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", dS, f(B.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", fS, [
                    Q[37] || (Q[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", mS, "~" + f(B.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value && oe.value ? (a(), R(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var ze, is;
              return [
                t("div", vS, [
                  t("div", pS, [
                    t("div", gS, [
                      Q[42] || (Q[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", hS, [
                        Q[38] || (Q[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", yS, "$" + f(oe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", wS, [
                        Q[39] || (Q[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", _S, "$" + f(oe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", kS, [
                        Q[40] || (Q[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", bS, "$" + f(oe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", $S, [
                        Q[41] || (Q[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", CS, "~$" + f(oe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", xS, [
                      Q[45] || (Q[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", SS, [
                        t("span", null, f(((ze = ue.value.find((ae) => ae.id === T.value)) == null ? void 0 : ze.displayName) || "GPU") + " (" + f(((is = ue.value.find((ae) => ae.id === T.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", IS, [
                        t("span", null, "Region: " + f(z.value), 1)
                      ]),
                      we.value ? (a(), c("div", ES, [
                        t("span", null, "Volume: " + f(we.value.name), 1)
                      ])) : y("", !0),
                      te.value === "SPOT" ? (a(), c("div", TS, [...Q[44] || (Q[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          E.value ? (a(), c("div", PS, [
            x(de, {
              variant: "primary",
              size: "md",
              loading: V.value || ge.value,
              disabled: !Ne.value,
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
                b(" " + f(V.value ? "Validating..." : ge.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ve.value ? (a(), R(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              x(Et, {
                status: ve.value.status === "success" ? "synced" : "broken"
              }, so({
                icon: h(() => [
                  b(f(ve.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(ve.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(ve.value.message), 1)
                ]),
                actions: h(() => [
                  x(de, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (ze) => ve.value = null)
                  }, {
                    default: h(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ve.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    x(dt, {
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
        fe.value ? (a(), R(mt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Re.value) == null ? void 0 : He.phase) === "READY" || ((ht = Re.value) == null ? void 0 : ht.phase) === "ERROR" || ((Yt = Re.value) == null ? void 0 : Yt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, so({
          body: h(() => {
            var ze, is, ae, Y, Ue, je, ot, ft, Mt, rs, Gs, js;
            return [
              t("div", RS, [
                t("div", MS, [
                  t("div", {
                    class: Te(["phase-icon", (is = (ze = Re.value) == null ? void 0 : ze.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ae = Re.value) == null ? void 0 : ae.phase) === "READY" ? (a(), c("span", DS, "✓")) : ((Y = Re.value) == null ? void 0 : Y.phase) === "ERROR" ? (a(), c("span", LS, "✕")) : ((Ue = Re.value) == null ? void 0 : Ue.phase) === "STOPPED" ? (a(), c("span", OS, "○")) : (a(), c("span", AS, "⟳"))
                  ], 2),
                  t("div", US, [
                    t("div", NS, f(xo((je = Re.value) == null ? void 0 : je.phase)), 1),
                    t("div", zS, f(((ot = Re.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                x(ea, {
                  progress: So((ft = Re.value) == null ? void 0 : ft.phase),
                  variant: ((Mt = Re.value) == null ? void 0 : Mt.phase) === "ERROR" ? "error" : ((rs = Re.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Gs = Re.value) == null ? void 0 : Gs.phase) === "READY" ? (a(), c("div", FS, [
                  x(de, {
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
                t("div", BS, [
                  (js = Re.value) != null && js.console_url ? (a(), c("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, VS)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Re.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Re.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Re.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              x(de, {
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
        ce.value && ne.value ? (a(), R(Ar, {
          key: 1,
          issues: ne.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (ze) => ce.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ye.value && ne.value ? (a(), R(Ur, {
          key: 2,
          models: ne.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: Q[15] || (Q[15] = (ze) => ye.value = !1),
          onRevalidate: Rt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), GS = /* @__PURE__ */ ke(WS, [["__scopeId", "data-v-522cd4d9"]]), jS = { class: "worker-header" }, HS = { class: "worker-status" }, KS = { class: "worker-name" }, qS = { class: "worker-actions" }, YS = { class: "worker-details" }, JS = { class: "detail-item" }, XS = { class: "detail-value" }, QS = {
  key: 0,
  class: "detail-item"
}, ZS = { class: "detail-value" }, e8 = {
  key: 1,
  class: "detail-item"
}, t8 = { class: "detail-value mode-badge" }, s8 = {
  key: 0,
  class: "worker-stats"
}, o8 = {
  key: 0,
  class: "stat-item"
}, n8 = { key: 0 }, a8 = {
  key: 1,
  class: "worker-stats offline"
}, l8 = /* @__PURE__ */ _e({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), c("div", {
      class: Te(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", jS, [
        t("div", HS, [
          t("span", {
            class: Te(["status-dot", e.worker.status])
          }, null, 2),
          t("span", KS, f(e.worker.name), 1)
        ]),
        t("div", qS, [
          e.worker.status === "online" ? (a(), R(de, {
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
          x(de, {
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
      t("div", YS, [
        t("span", JS, [
          t("span", XS, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), c("span", QS, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", ZS, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), c("span", e8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", t8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), c("div", s8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), c("span", o8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), c("span", n8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), c("div", a8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), i8 = /* @__PURE__ */ ke(l8, [["__scopeId", "data-v-b1be7134"]]), r8 = { class: "add-worker-content" }, c8 = { class: "manual-form" }, u8 = { class: "form-row" }, d8 = { class: "form-row-inline" }, f8 = { class: "form-field flex-2" }, m8 = { class: "form-field flex-1" }, v8 = { class: "form-row" }, p8 = { class: "api-key-wrapper" }, g8 = ["type"], h8 = { class: "result-icon" }, y8 = { class: "result-content" }, w8 = { class: "result-message" }, _8 = {
  key: 0,
  class: "result-detail"
}, k8 = { class: "modal-actions" }, b8 = /* @__PURE__ */ _e({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = st(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), r = k(!1), u = k(!1), d = k(null), m = U(() => l.host && l.port && l.apiKey), v = U(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
      if (m.value) {
        r.value = !0, d.value = null;
        try {
          const p = await n({
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
          r.value = !1;
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
    return (p, _) => (a(), R(mt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", r8, [
          t("div", c8, [
            t("div", u8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (S) => l.name = S),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", d8, [
              t("div", f8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (S) => l.host = S),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", m8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (S) => l.port = S),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    zt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", v8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", p8, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, g8), [
                  [Qn, l.apiKey]
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
            d.value ? (a(), c("div", {
              key: 0,
              class: Te(["test-result", d.value.type])
            }, [
              t("span", h8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", y8, [
                t("span", w8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), c("span", _8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", k8, [
          x(de, {
            variant: "ghost",
            size: "sm",
            loading: r.value,
            disabled: !m.value || r.value,
            onClick: g
          }, {
            default: h(() => [..._[11] || (_[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          x(de, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
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
}), $8 = /* @__PURE__ */ ke(b8, [["__scopeId", "data-v-07a00732"]]), C8 = { class: "discovered-content" }, x8 = {
  key: 0,
  class: "workers-list"
}, S8 = { class: "worker-info" }, I8 = { class: "worker-name" }, E8 = { class: "worker-address" }, T8 = {
  key: 0,
  class: "worker-gpu"
}, P8 = {
  key: 1,
  class: "empty-state"
}, R8 = {
  key: 2,
  class: "api-key-section"
}, M8 = { class: "selected-worker" }, D8 = { class: "selected-name" }, L8 = { class: "selected-address" }, O8 = { class: "form-row" }, A8 = { class: "api-key-wrapper" }, U8 = ["type"], N8 = { class: "result-icon" }, z8 = { class: "result-message" }, F8 = { class: "modal-actions" }, B8 = /* @__PURE__ */ _e({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = st(), l = k(null), i = k(""), r = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await kt(), (p = d.value) == null || p.focus();
    }
    async function g() {
      if (!(!l.value || !i.value)) {
        u.value = !0, m.value = null;
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
          u.value = !1;
        }
      }
    }
    return (w, p) => (a(), R(mt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", C8, [
          e.workers.length > 0 ? (a(), c("div", x8, [
            (a(!0), c(K, null, be(e.workers, (_) => (a(), c("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", S8, [
                t("span", I8, f(_.name), 1),
                t("span", E8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), c("span", T8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              x(de, {
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
          ])) : (a(), c("div", P8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), c("div", R8, [
            t("div", M8, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", D8, f(l.value.name), 1),
              t("span", L8, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", O8, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", A8, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: es(g, ["enter"])
                }, null, 40, U8), [
                  [Qn, i.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (_) => r.value = !r.value),
                  type: "button"
                }, f(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), c("div", {
              key: 0,
              class: Te(["test-result", m.value.type])
            }, [
              t("span", N8, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", z8, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", F8, [
          l.value ? (a(), R(de, {
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
          l.value ? (a(), R(de, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
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
}), V8 = /* @__PURE__ */ ke(B8, [["__scopeId", "data-v-5a3e40a4"]]), W8 = { class: "deploy-content" }, G8 = { class: "section" }, j8 = {
  key: 0,
  class: "loading-text"
}, H8 = {
  key: 1,
  class: "empty-remotes"
}, K8 = {
  key: 2,
  class: "remotes-list"
}, q8 = { class: "section" }, Y8 = { class: "mode-options" }, J8 = { class: "mode-option" }, X8 = ["disabled"], Q8 = { class: "mode-option" }, Z8 = { class: "section" }, e4 = {
  key: 0,
  class: "section"
}, t4 = { class: "summary-row" }, s4 = {
  key: 1,
  class: "sync-warning"
}, o4 = { class: "warning-content" }, n4 = { class: "modal-actions" }, a4 = /* @__PURE__ */ _e({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getRemotes: l,
      getRemoteSyncStatus: i,
      fetchRemote: r,
      pushToRemote: u,
      getDeploySummary: d,
      deployToWorker: m
    } = st(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), D = k(null), E = k(!1), C = U(() => p.value && g.value[p.value] || null), j = U(() => {
      if (!p.value) return null;
      const H = v.value.find((se) => se.name === p.value);
      return (H == null ? void 0 : H.fetch_url) || null;
    }), q = U(() => j.value && !E.value);
    async function z() {
      w.value = !0;
      try {
        const H = await l();
        v.value = H.remotes, await Promise.all(
          H.remotes.map(async (Z) => {
            const N = await i(Z.name);
            N && (g.value[Z.name] = N);
          })
        );
        const se = H.remotes.find((Z) => Z.is_default);
        se ? p.value = se.name : H.remotes.length > 0 && (p.value = H.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        D.value = await d();
      } catch {
      }
    }
    async function T(H) {
      _.value = H;
      try {
        await r(H);
        const se = await i(H);
        se && (g.value[H] = se), n("toast", `Fetched from ${H}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function M(H) {
      S.value = H;
      try {
        await u(H, { force: !1 });
        const se = await i(H);
        se && (g.value[H] = se), n("toast", `Pushed to ${H}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function te(H) {
      p.value = H;
    }
    async function X() {
      if (j.value) {
        E.value = !0;
        try {
          const H = await m(o.worker.name, {
            import_source: j.value,
            mode: $.value,
            name: P.value || void 0
          });
          H.id ? (n("toast", `Deployment started: ${H.name || H.id}`, "success"), n("deployed")) : H.status === "error" ? n("toast", H.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (H) {
          n("toast", H instanceof Error ? H.message : "Deployment failed", "error");
        } finally {
          E.value = !1;
        }
      }
    }
    return Xe(() => {
      z(), I();
    }), (H, se) => (a(), R(mt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: se[5] || (se[5] = (Z) => H.$emit("close"))
    }, {
      body: h(() => [
        t("div", W8, [
          t("div", G8, [
            se[7] || (se[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), c("div", j8, "Loading remotes...")) : v.value.length === 0 ? (a(), c("div", H8, [...se[6] || (se[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), c("div", K8, [
              (a(!0), c(K, null, be(v.value, (Z) => (a(), R(Fr, {
                key: Z.name,
                remote: Z,
                "sync-status": g.value[Z.name],
                "is-selected": p.value === Z.name,
                "is-fetching": _.value === Z.name,
                "is-pushing": S.value === Z.name,
                onFetch: T,
                onPush: M,
                onSelect: te
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", q8, [
            se[10] || (se[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", Y8, [
              t("label", J8, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[0] || (se[0] = (Z) => $.value = Z),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, X8), [
                  [Qt, $.value]
                ]),
                se[8] || (se[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", Q8, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[1] || (se[1] = (Z) => $.value = Z),
                  value: "native"
                }, null, 512), [
                  [Qt, $.value]
                ]),
                se[9] || (se[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", Z8, [
            se[11] || (se[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": se[2] || (se[2] = (Z) => P.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, P.value]
            ])
          ]),
          D.value ? (a(), c("div", e4, [
            se[12] || (se[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", t4, " ComfyUI: " + f(D.value.comfyui_version) + " • " + f(D.value.node_count) + " nodes • " + f(D.value.model_count) + " models • " + f(D.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          C.value && C.value.ahead > 0 ? (a(), c("div", s4, [
            se[14] || (se[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", o4, [
              t("strong", null, f(C.value.ahead) + " unpushed commit" + f(C.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            x(de, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: se[3] || (se[3] = (Z) => p.value && M(p.value))
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
        t("div", n4, [
          x(de, {
            variant: "ghost",
            size: "sm",
            onClick: se[4] || (se[4] = (Z) => H.$emit("close"))
          }, {
            default: h(() => [...se[15] || (se[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(de, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !q.value || E.value,
            onClick: X
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
}), l4 = /* @__PURE__ */ ke(a4, [["__scopeId", "data-v-c12720d3"]]), i4 = { class: "custom-tab" }, r4 = { class: "section-header" }, c4 = { class: "section-actions" }, u4 = { class: "workers-content" }, d4 = {
  key: 0,
  class: "loading-state"
}, f4 = {
  key: 1,
  class: "empty-state"
}, m4 = {
  key: 2,
  class: "workers-list"
}, v4 = { class: "scan-icon" }, p4 = { class: "scan-message" }, g4 = /* @__PURE__ */ _e({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: r
    } = st(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), S = k(null);
    async function $() {
      m.value = !0;
      try {
        const z = await n();
        u.value = z.workers;
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const z = await r(), I = z.discovered.filter(
          (T) => !u.value.some((M) => M.host === T.host && M.port === T.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : z.discovered.length > 0 ? S.value = {
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
    async function C(z) {
      g.value = z;
      try {
        await i(z), o("toast", `Worker '${z}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function j(z) {
      _.value = z;
    }
    function q() {
      _.value = null, o("deployed");
    }
    return Xe(() => {
      $();
    }), (z, I) => (a(), c("div", i4, [
      t("div", r4, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", c4, [
          x(de, {
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
          x(de, {
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
      t("div", u4, [
        m.value && u.value.length === 0 ? (a(), c("div", d4, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), c("div", f4, [...I[10] || (I[10] = [
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
        ])])) : (a(), c("div", m4, [
          (a(!0), c(K, null, be(u.value, (T) => (a(), R(i8, {
            key: T.name,
            worker: T,
            "is-action-loading": g.value === T.name,
            onDeploy: j,
            onRemove: C
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), c("div", {
        key: 0,
        class: Te(["scan-result", S.value.type])
      }, [
        t("span", v4, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", p4, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (T) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), R(V8, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (T) => p.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), R($8, {
        key: 2,
        onClose: I[3] || (I[3] = (T) => w.value = !1),
        onAdd: D
      })) : y("", !0),
      _.value ? (a(), R(l4, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (T) => _.value = null),
        onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
        onDeployed: q
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), h4 = /* @__PURE__ */ ke(g4, [["__scopeId", "data-v-1637dead"]]), ha = "ComfyGit.Deploy.GitHubPAT";
function Br(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function y4(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function w4() {
  function e() {
    try {
      return localStorage.getItem(ha);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ha, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ha);
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
    isRemoteSsh: Br,
    isRemoteHttps: y4
  };
}
const _4 = { class: "settings-content" }, k4 = { class: "settings-section" }, b4 = {
  key: 0,
  class: "ssh-warning"
}, $4 = { class: "form-row" }, C4 = { class: "token-wrapper" }, x4 = ["type"], S4 = { class: "result-icon" }, I4 = { class: "result-message" }, E4 = { class: "token-actions" }, T4 = /* @__PURE__ */ _e({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: r } = w4(), { getRemotes: u, testGitAuth: d } = st(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = U(() => r());
    Xe(async () => {
      var E;
      const D = n();
      D && (m.value = D);
      try {
        const j = (E = (await u()).remotes) == null ? void 0 : E.find((q) => q.name === "origin");
        j && Br(j.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const D = await d(m.value);
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
    return (D, E) => (a(), R(mt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: E[2] || (E[2] = (C) => D.$emit("close"))
    }, {
      body: h(() => [
        t("div", _4, [
          t("div", k4, [
            E[8] || (E[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), c("div", b4, [...E[3] || (E[3] = [
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
            t("div", $4, [
              E[4] || (E[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", C4, [
                qe(t("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (C) => m.value = C),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, x4), [
                  [Qn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: E[1] || (E[1] = (C) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              E[5] || (E[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), c("div", {
              key: 1,
              class: Te(["test-result", w.value.type])
            }, [
              t("span", S4, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", I4, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", E4, [
              x(de, {
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
              _.value ? (a(), R(de, {
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
        x(de, {
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
}), P4 = /* @__PURE__ */ ke(T4, [["__scopeId", "data-v-b21588ad"]]), R4 = /* @__PURE__ */ _e({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: r,
      stopInstance: u,
      startInstance: d,
      terminateInstance: m,
      startPolling: v,
      stopPolling: g
    } = zr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = U(() => [
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
        await u(z), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function E(z) {
      S.value = z.id;
      try {
        await d(z), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function C(z) {
      $.value = z;
    }
    async function j() {
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
    async function q() {
      await r(), _.value = "instances";
    }
    return Xe(() => {
      r(), v();
    }), oo(() => {
      g();
    }), (z, I) => (a(), c(K, null, [
      x(Tt, null, {
        header: h(() => [
          x(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (T) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
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
          x(Rr, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (T) => _.value = T),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), R(K3, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": S.value,
            onRefresh: We(r),
            onStop: D,
            onStart: E,
            onTerminate: C
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), R(GS, {
            key: 1,
            onToast: I[3] || (I[3] = (T, M) => o("toast", T, M)),
            onNavigate: I[4] || (I[4] = (T) => o("navigate", T)),
            onDeployed: q
          })) : y("", !0),
          _.value === "custom" ? (a(), R(h4, {
            key: 2,
            onToast: I[5] || (I[5] = (T, M) => o("toast", T, M)),
            onDeployed: q
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), R(al, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: j,
        onCancel: I[6] || (I[6] = (T) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      x(as, {
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
      p.value ? (a(), R(P4, {
        key: 1,
        onClose: I[8] || (I[8] = (T) => p.value = !1),
        onSaved: I[9] || (I[9] = (T) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), M4 = /* @__PURE__ */ ke(R4, [["__scopeId", "data-v-d4e32a10"]]), D4 = { class: "header-info" }, L4 = { class: "commit-hash" }, O4 = {
  key: 0,
  class: "commit-refs"
}, A4 = { class: "commit-message" }, U4 = { class: "commit-date" }, N4 = {
  key: 0,
  class: "loading"
}, z4 = {
  key: 1,
  class: "changes-section"
}, F4 = { class: "stats-row" }, B4 = { class: "stat" }, V4 = { class: "stat insertions" }, W4 = { class: "stat deletions" }, G4 = {
  key: 0,
  class: "change-group"
}, j4 = {
  key: 1,
  class: "change-group"
}, H4 = {
  key: 0,
  class: "version"
}, K4 = {
  key: 2,
  class: "change-group"
}, q4 = { class: "change-item" }, Y4 = /* @__PURE__ */ _e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = st(), n = k(null), l = k(!0), i = U(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), r = U(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Xe(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), R(mt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", D4, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", L4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), c("span", O4, [
              (a(!0), c(K, null, be(n.value.refs, (p) => (a(), c("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          x(Le, {
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
          t("div", A4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", U4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), c("div", N4, "Loading details...")) : n.value ? (a(), c("div", z4, [
            t("div", F4, [
              t("span", B4, f(n.value.stats.files_changed) + " files", 1),
              t("span", V4, "+" + f(n.value.stats.insertions), 1),
              t("span", W4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), c("div", G4, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(K, null, be(n.value.changes.workflows.added, (g) => (a(), c("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), c(K, null, be(n.value.changes.workflows.modified, (g) => (a(), c("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), c(K, null, be(n.value.changes.workflows.deleted, (g) => (a(), c("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            r.value ? (a(), c("div", j4, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(K, null, be(n.value.changes.nodes.added, (g) => (a(), c("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), c("span", H4, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), c(K, null, be(n.value.changes.nodes.removed, (g) => (a(), c("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), c("div", K4, [
              x(Go, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", q4, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), J4 = /* @__PURE__ */ ke(Y4, [["__scopeId", "data-v-d256ff6d"]]), X4 = { class: "base-textarea-wrapper" }, Q4 = ["value", "rows", "placeholder", "disabled", "maxlength"], Z4 = {
  key: 0,
  class: "base-textarea-count"
}, e6 = /* @__PURE__ */ _e({
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
    return (i, r) => (a(), c("div", X4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: r[0] || (r[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          r[1] || (r[1] = es(at((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          r[2] || (r[2] = es(at((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          es(l, ["enter"])
        ]
      }, null, 40, Q4),
      e.showCharCount && e.maxLength ? (a(), c("div", Z4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ti = /* @__PURE__ */ ke(e6, [["__scopeId", "data-v-c6d16c93"]]), t6 = ["checked", "disabled"], s6 = { class: "base-checkbox-box" }, o6 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, n6 = {
  key: 0,
  class: "base-checkbox-label"
}, a6 = /* @__PURE__ */ _e({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), c("label", {
      class: Te(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, t6),
      t("span", s6, [
        e.modelValue ? (a(), c("svg", o6, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), c("span", n6, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), La = /* @__PURE__ */ ke(a6, [["__scopeId", "data-v-bf17c831"]]), l6 = { class: "popover-header" }, i6 = { class: "popover-body" }, r6 = {
  key: 0,
  class: "changes-summary"
}, c6 = {
  key: 0,
  class: "change-item"
}, u6 = {
  key: 1,
  class: "change-item"
}, d6 = {
  key: 2,
  class: "change-item"
}, f6 = {
  key: 3,
  class: "change-item"
}, m6 = {
  key: 4,
  class: "change-item"
}, v6 = {
  key: 5,
  class: "change-item"
}, p6 = {
  key: 1,
  class: "no-changes"
}, g6 = {
  key: 2,
  class: "loading"
}, h6 = {
  key: 3,
  class: "issues-error"
}, y6 = { class: "error-header" }, w6 = { class: "error-title" }, _6 = { class: "issues-list" }, k6 = { class: "workflow-state" }, b6 = { class: "message-section" }, $6 = { class: "popover-footer" }, C6 = {
  key: 1,
  class: "commit-popover"
}, x6 = { class: "popover-header" }, S6 = { class: "popover-body" }, I6 = {
  key: 0,
  class: "changes-summary"
}, E6 = {
  key: 0,
  class: "change-item"
}, T6 = {
  key: 1,
  class: "change-item"
}, P6 = {
  key: 2,
  class: "change-item"
}, R6 = {
  key: 3,
  class: "change-item"
}, M6 = {
  key: 4,
  class: "change-item"
}, D6 = {
  key: 5,
  class: "change-item"
}, L6 = {
  key: 1,
  class: "no-changes"
}, O6 = {
  key: 2,
  class: "loading"
}, A6 = {
  key: 3,
  class: "issues-error"
}, U6 = { class: "error-header" }, N6 = { class: "error-title" }, z6 = { class: "issues-list" }, F6 = { class: "workflow-state" }, B6 = { class: "message-section" }, V6 = { class: "popover-footer" }, W6 = /* @__PURE__ */ _e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = st(), i = k(""), r = k(!1), u = k(!1), d = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), v = U(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), g = U(() => v.value.length > 0), w = U(() => g.value && !u.value);
    async function p() {
      var _, S, $, P;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || r.value)) {
        r.value = !0;
        try {
          const D = await l(i.value.trim(), u.value);
          if (D.status === "success") {
            const E = `Committed: ${((_ = D.summary) == null ? void 0 : _.new) || 0} new, ${((S = D.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = D.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: E });
          } else if (D.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (D.status === "blocked") {
            const E = ((P = D.issues) == null ? void 0 : P.map((C) => `${C.name}: ${C.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: D.message || "Commit failed" });
        } catch (D) {
          n("committed", { success: !1, message: D instanceof Error ? D.message : "Commit failed" });
        } finally {
          r.value = !1;
        }
      }
    }
    return (_, S) => e.asModal ? (a(), R(wt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = at(() => {
          }, ["stop"]))
        }, [
          t("div", l6, [
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
          t("div", i6, [
            e.status && d.value ? (a(), c("div", r6, [
              e.status.workflows.new.length ? (a(), c("div", c6, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), c("div", u6, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), c("div", d6, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), c("div", f6, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), c("div", m6, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), c("div", v6, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), c("div", p6, " No changes to commit ")) : (a(), c("div", g6, " Loading... ")),
            g.value ? (a(), c("div", h6, [
              t("div", y6, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", w6, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", _6, [
                (a(!0), c(K, null, be(v.value, ($) => (a(), c("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", k6, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              x(La, {
                modelValue: u.value,
                "onUpdate:modelValue": S[1] || (S[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...S[19] || (S[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", b6, [
              x(ti, {
                modelValue: i.value,
                "onUpdate:modelValue": S[2] || (S[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || r.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", $6, [
            x(Le, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(Le, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || r.value || w.value,
              loading: r.value,
              onClick: p
            }, {
              default: h(() => [
                b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), c("div", C6, [
      t("div", x6, [
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
      t("div", S6, [
        e.status && d.value ? (a(), c("div", I6, [
          e.status.workflows.new.length ? (a(), c("div", E6, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), c("div", T6, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), c("div", P6, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), c("div", R6, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), c("div", M6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), c("div", D6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), c("div", L6, " No changes to commit ")) : (a(), c("div", O6, " Loading... ")),
        g.value ? (a(), c("div", A6, [
          t("div", U6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", N6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", z6, [
            (a(!0), c(K, null, be(v.value, ($) => (a(), c("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", F6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          x(La, {
            modelValue: u.value,
            "onUpdate:modelValue": S[7] || (S[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...S[30] || (S[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", B6, [
          x(ti, {
            modelValue: i.value,
            "onUpdate:modelValue": S[8] || (S[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || r.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", V6, [
        x(Le, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x(Le, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || r.value || w.value,
          loading: r.value,
          onClick: p
        }, {
          default: h(() => [
            b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Vr = /* @__PURE__ */ ke(W6, [["__scopeId", "data-v-5f897631"]]), G6 = { class: "modal-header" }, j6 = { class: "modal-body" }, H6 = { class: "switch-message" }, K6 = { class: "switch-details" }, q6 = { class: "modal-actions" }, Y6 = /* @__PURE__ */ _e({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = at(() => {
          }, ["stop"]))
        }, [
          t("div", G6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", j6, [
            t("p", H6, [
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
            t("p", K6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", q6, [
            x(de, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(de, {
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
}), J6 = /* @__PURE__ */ ke(Y6, [["__scopeId", "data-v-e9c5253e"]]), X6 = {
  key: 0,
  class: "modal-overlay"
}, Q6 = { class: "modal-content" }, Z6 = { class: "modal-body" }, eI = { class: "progress-info" }, tI = { class: "progress-percentage" }, sI = { class: "progress-state" }, oI = { class: "switch-steps" }, nI = { class: "step-icon" }, aI = { class: "step-label" }, lI = /* @__PURE__ */ _e({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = U(() => {
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
    }), n = U(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = U(() => {
      const i = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], r = i.findIndex((u) => u.state === s.state);
      return i.map((u, d) => {
        let m = "pending", v = "○";
        return d < r ? (m = "completed", v = "✓") : d === r && (m = "active", v = "⟳"), {
          ...u,
          status: m,
          icon: v
        };
      });
    });
    return (i, r) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", X6, [
        t("div", Q6, [
          r[1] || (r[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", Z6, [
            x(ea, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", eI, [
              t("div", tI, f(e.progress) + "%", 1),
              t("div", sI, f(o.value), 1)
            ]),
            t("div", oI, [
              (a(!0), c(K, null, be(l.value, (u) => (a(), c("div", {
                key: u.state,
                class: Te(["switch-step", u.status])
              }, [
                t("span", nI, f(u.icon), 1),
                t("span", aI, f(u.label), 1)
              ], 2))), 128))
            ]),
            r[0] || (r[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), iI = /* @__PURE__ */ ke(lI, [["__scopeId", "data-v-768a5078"]]), rI = { class: "modal-header" }, cI = { class: "modal-body" }, uI = {
  key: 0,
  class: "node-section"
}, dI = { class: "node-list" }, fI = {
  key: 1,
  class: "node-section"
}, mI = { class: "node-list" }, vI = { class: "modal-actions" }, pI = /* @__PURE__ */ _e({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), R(wt, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = at(() => {
          }, ["stop"]))
        }, [
          t("div", rI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", cI, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), c("div", uI, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", dI, [
                (a(!0), c(K, null, be(e.mismatchDetails.missing_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), c("div", fI, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", mI, [
                (a(!0), c(K, null, be(e.mismatchDetails.extra_nodes, (n) => (a(), c("div", {
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
          t("div", vI, [
            x(de, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(de, {
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
}), gI = /* @__PURE__ */ ke(pI, [["__scopeId", "data-v-7cad7518"]]), hI = [
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
], yI = "v0.0.16", wI = "Akatz", _I = { class: "social-buttons" }, kI = ["title", "aria-label", "onClick"], bI = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, $I = ["d"], CI = ["title", "aria-label", "onClick"], xI = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, SI = ["d"], II = /* @__PURE__ */ _e({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), c("div", _I, [
      (a(!0), c(K, null, be(We(hI), (l) => (a(), c(K, {
        key: l.id
      }, [
        l.label ? (a(), c("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          b(f(l.label) + " ", 1),
          (a(), c("svg", bI, [
            t("path", {
              d: l.iconPath
            }, null, 8, $I)
          ]))
        ], 8, kI)) : (a(), c("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), c("svg", xI, [
            t("path", {
              d: l.iconPath
            }, null, 8, SI)
          ]))
        ], 8, CI))
      ], 64))), 128))
    ]));
  }
}), Wr = /* @__PURE__ */ ke(II, [["__scopeId", "data-v-4f846342"]]), EI = { class: "footer-info" }, TI = { class: "version" }, PI = { class: "made-by" }, RI = /* @__PURE__ */ _e({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), c("div", EI, [
      t("span", TI, f(We(yI)), 1),
      t("span", PI, [
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
        b(" by " + f(We(wI)), 1)
      ])
    ]));
  }
}), Gr = /* @__PURE__ */ ke(RI, [["__scopeId", "data-v-8bc3db0a"]]), MI = /* @__PURE__ */ _e({
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
    return (i, r) => (a(), R(mt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: r[1] || (r[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        x(Pr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          x(Le, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...r[2] || (r[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Le, {
            variant: "secondary",
            onClick: r[0] || (r[0] = (d) => i.$emit("close"))
          }, {
            default: h(() => [...r[3] || (r[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), DI = /* @__PURE__ */ ke(MI, [["__scopeId", "data-v-fac00ae7"]]), LI = { class: "header-actions" }, OI = {
  key: 0,
  class: "wizard-step"
}, AI = { class: "form-field" }, UI = ["placeholder"], NI = {
  key: 0,
  class: "form-error"
}, zI = { class: "form-field form-field--checkbox" }, FI = { class: "form-checkbox" }, BI = {
  key: 0,
  class: "form-field"
}, VI = ["placeholder"], WI = {
  key: 0,
  class: "form-info"
}, GI = {
  key: 1,
  class: "form-suggestion"
}, jI = {
  key: 2,
  class: "form-error"
}, HI = {
  key: 3,
  class: "form-info"
}, KI = {
  key: 1,
  class: "wizard-step"
}, qI = {
  key: 0,
  class: "progress-check-loading"
}, YI = {
  key: 0,
  class: "cli-warning"
}, JI = { class: "cli-warning-header" }, XI = {
  key: 1,
  class: "env-landing"
}, QI = { class: "env-list" }, ZI = ["value"], eE = { class: "env-name" }, tE = {
  key: 2,
  class: "env-create"
}, sE = { class: "form-field" }, oE = { class: "form-field" }, nE = ["value"], aE = { class: "form-field" }, lE = ["disabled"], iE = ["value"], rE = { class: "form-field" }, cE = ["value"], uE = { class: "form-field form-field--checkbox" }, dE = { class: "form-checkbox" }, fE = {
  key: 0,
  class: "form-error"
}, mE = {
  key: 1,
  class: "env-creating"
}, vE = { class: "creating-intro" }, pE = {
  key: 3,
  class: "env-import"
}, gE = { class: "wizard-footer" }, hE = { class: "wizard-footer-actions" }, io = 10, yE = 600 * 1e3, si = 1800 * 1e3, wE = /* @__PURE__ */ _e({
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
      validatePath: r,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: v
    } = st(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), D = k(null), E = k(o.initialStep === 2), C = k(o.defaultPath), j = k(!!o.detectedModelsDir), q = k(o.detectedModelsDir || ""), z = k(null), I = k(null), T = k(null), M = k(null), te = k("my-new-env"), X = k(Lr), H = k("latest"), se = k(Or), Z = k(!0), N = k(null), G = k(null), O = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), le = k(!1), pe = k(!1), Me = k(!1), Ae = k({ progress: 0, message: "" }), ue = k({ progress: 0, message: "" }), ie = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], B = k(0), ee = k(null), ge = k(0), ve = k(null), fe = U(() => {
      var Ce, $e;
      const oe = (Ce = C.value) == null ? void 0 : Ce.trim(), J = !z.value, Oe = !j.value || !I.value && (($e = q.value) == null ? void 0 : $e.trim());
      return oe && J && Oe;
    }), De = U(() => {
      var oe;
      return (oe = te.value) == null ? void 0 : oe.trim();
    }), Re = U(() => !!(g.value === 2 || G.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), L = U(() => G.value || o.workspacePath || null);
    async function V() {
      var oe;
      if (z.value = null, !!((oe = C.value) != null && oe.trim()))
        try {
          const J = await r({ path: C.value, type: "workspace" });
          J.valid || (z.value = J.error || "Invalid path");
        } catch (J) {
          z.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ne() {
      var oe;
      if (I.value = null, T.value = null, M.value = null, !!((oe = q.value) != null && oe.trim()))
        try {
          const J = await r({ path: q.value, type: "models" });
          if (J.valid)
            M.value = J.model_count ?? null;
          else if (I.value = J.error || "Invalid path", J.suggestion) {
            T.value = J.suggestion, q.value = J.suggestion, I.value = null;
            const Oe = await r({ path: J.suggestion, type: "models" });
            Oe.valid && (M.value = Oe.model_count ?? null);
          }
        } catch (J) {
          I.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ce() {
      var oe, J, Oe, Ce, $e;
      if (z.value = null, I.value = null, await V(), (oe = z.value) != null && oe.includes("already exists")) {
        z.value = null, G.value = ((J = C.value) == null ? void 0 : J.trim()) || o.defaultPath, g.value = 2, we();
        return;
      }
      if (!z.value && !(j.value && ((Oe = q.value) != null && Oe.trim()) && (await ne(), I.value))) {
        pe.value = !0;
        try {
          await l({
            workspace_path: ((Ce = C.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: j.value && (($e = q.value) == null ? void 0 : $e.trim()) || null
          }), B.value = 0, ee.value = Date.now();
          const W = setInterval(async () => {
            var F;
            if (ee.value && Date.now() - ee.value > yE) {
              clearInterval(W), pe.value = !1, z.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const me = await i();
              if (B.value = 0, me.state === "idle" && pe.value) {
                clearInterval(W), pe.value = !1, z.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ae.value = { progress: me.progress, message: me.message }, me.state === "complete" ? (clearInterval(W), pe.value = !1, G.value = ((F = C.value) == null ? void 0 : F.trim()) || o.defaultPath, g.value = 2, we()) : me.state === "error" && (clearInterval(W), pe.value = !1, z.value = me.error || "Workspace creation failed");
            } catch (me) {
              B.value++, console.warn(`Polling failure ${B.value}/${io}:`, me), B.value >= io && (clearInterval(W), pe.value = !1, z.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (W) {
          pe.value = !1, z.value = W instanceof Error ? W.message : "Failed to create workspace";
        }
      }
    }
    async function ye() {
      Me.value = !0, N.value = null;
      try {
        const oe = {
          name: te.value.trim() || "my-new-env",
          python_version: X.value,
          comfyui_version: H.value,
          torch_backend: se.value,
          switch_after: Z.value,
          workspace_path: G.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(oe)).status === "started") {
          ge.value = 0, ve.value = Date.now();
          const Oe = setInterval(async () => {
            if (ve.value && Date.now() - ve.value > si) {
              clearInterval(Oe), Me.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (ge.value = 0, Ce.state === "idle" && Me.value) {
                clearInterval(Oe), Me.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ue.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(Oe), Me.value = !1;
                const $e = Ce.environment_name || oe.name;
                Z.value ? n("complete", $e, G.value) : (p.value = "landing", n("environment-created-no-switch", $e));
              } else Ce.state === "error" && (clearInterval(Oe), Me.value = !1, N.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              ge.value++, console.warn(`Polling failure ${ge.value}/${io}:`, Ce), ge.value >= io && (clearInterval(Oe), Me.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        Me.value = !1, N.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function we() {
      le.value = !0;
      try {
        O.value = await v();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        le.value = !1;
      }
    }
    function Ie() {
      w.value && n("switch-environment", w.value, G.value);
    }
    function Ee() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function re(oe, J) {
      S.value = !1, J ? n("complete", oe, G.value) : (n("environment-created-no-switch", oe), p.value = "landing");
    }
    function he() {
    }
    Xe(async () => {
      if (o.detectedModelsDir && (q.value = o.detectedModelsDir), o.workspacePath && (G.value = o.workspacePath), g.value === 2) {
        we();
        const oe = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await Ne(), clearTimeout(oe), E.value = !1;
      }
    });
    async function Ne() {
      try {
        const oe = await d();
        if (console.log("[ComfyGit] Create progress check:", oe.state, oe), oe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", oe.environment_name), p.value = "create", Me.value = !0, te.value = oe.environment_name || "my-new-env", ue.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase
          }, Pe();
          return;
        }
      } catch (oe) {
        console.log("[ComfyGit] Create progress check failed:", oe);
      }
      try {
        const oe = await m();
        console.log("[ComfyGit] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", oe.environment_name), D.value = {
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          progress: oe.progress ?? 0,
          environmentName: oe.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (oe) {
        console.log("[ComfyGit] Import progress check failed:", oe);
      }
    }
    async function Pe() {
      ge.value = 0, ve.value = Date.now();
      let oe = null;
      const J = async () => {
        if (ve.value && Date.now() - ve.value > si)
          return oe && clearInterval(oe), Me.value = !1, N.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (ge.value = 0, Ce.state === "idle" && Me.value)
            return oe && clearInterval(oe), Me.value = !1, N.value = "Environment creation was interrupted. Please try again.", !1;
          if (ue.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            oe && clearInterval(oe), Me.value = !1;
            const $e = Ce.environment_name || te.value;
            return n("complete", $e, G.value), !1;
          } else if (Ce.state === "error")
            return oe && clearInterval(oe), Me.value = !1, N.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return ge.value++, console.warn(`Polling failure ${ge.value}/${io}:`, Ce), ge.value >= io ? (oe && clearInterval(oe), Me.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (oe = setInterval(async () => {
        !await J() && oe && clearInterval(oe);
      }, 2e3));
    }
    return (oe, J) => (a(), c(K, null, [
      x(mt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (Oe) => oe.$emit("close"))
      }, {
        header: h(() => [
          J[20] || (J[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", LI, [
            x(Wr),
            J[19] || (J[19] = t("span", { class: "header-divider" }, null, -1)),
            Re.value ? (a(), c("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (Oe) => _.value = !0)
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
              onClick: J[1] || (J[1] = (Oe) => oe.$emit("close")),
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
          var Oe;
          return [
            g.value === 1 ? (a(), c("div", OI, [
              J[24] || (J[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", AI, [
                J[21] || (J[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (Ce) => C.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, UI), [
                  [zt, C.value]
                ]),
                z.value ? (a(), c("p", NI, f(z.value), 1)) : y("", !0)
              ]),
              t("div", zI, [
                t("label", FI, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (Ce) => j.value = Ce)
                  }, null, 512), [
                    [en, j.value]
                  ]),
                  J[22] || (J[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              j.value ? (a(), c("div", BI, [
                J[23] || (J[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (Ce) => q.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, VI), [
                  [zt, q.value]
                ]),
                e.detectedModelsDir && !q.value ? (a(), c("p", WI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                T.value ? (a(), c("p", GI, " Did you mean: " + f(T.value), 1)) : y("", !0),
                I.value ? (a(), c("p", jI, f(I.value), 1)) : y("", !0),
                M.value !== null && !I.value ? (a(), c("p", HI, " Found " + f(M.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              pe.value ? (a(), R(zn, {
                key: 1,
                progress: Ae.value.progress,
                message: Ae.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), c("div", KI, [
              E.value ? (a(), c("div", qI, [...J[25] || (J[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), c(K, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), c("div", YI, [
                  t("div", JI, [
                    J[27] || (J[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (Ce) => $.value = !0),
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
                p.value === "landing" ? (a(), c("div", XI, [
                  J[34] || (J[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (Ce) => p.value = "create")
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
                    onClick: J[7] || (J[7] = (Ce) => {
                      P.value = !1, p.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Oe = o.existingEnvironments) != null && Oe.length ? (a(), c(K, { key: 0 }, [
                    J[33] || (J[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", QI, [
                      (a(!0), c(K, null, be(o.existingEnvironments, (Ce) => (a(), c("label", {
                        key: Ce,
                        class: Te(["env-option", { selected: w.value === Ce }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": J[8] || (J[8] = ($e) => w.value = $e)
                        }, null, 8, ZI), [
                          [Qt, w.value]
                        ]),
                        t("span", eE, f(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), c("div", tE, [
                  Me.value ? (a(), c("div", mE, [
                    t("p", vE, [
                      J[41] || (J[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(te.value), 1),
                      J[42] || (J[42] = b("... ", -1))
                    ]),
                    x(zn, {
                      progress: ue.value.progress,
                      message: ue.value.message,
                      "current-phase": ue.value.phase,
                      "show-steps": !0,
                      steps: ie
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), c(K, { key: 0 }, [
                    J[40] || (J[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", sE, [
                      J[35] || (J[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (Ce) => te.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, te.value]
                      ])
                    ]),
                    t("div", oE, [
                      J[36] || (J[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (Ce) => X.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), c(K, null, be(We(Dr), (Ce) => (a(), c("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce), 9, nE))), 128))
                      ], 512), [
                        [hs, X.value]
                      ])
                    ]),
                    t("div", aE, [
                      J[37] || (J[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (Ce) => H.value = Ce),
                        class: "form-select",
                        disabled: le.value
                      }, [
                        (a(!0), c(K, null, be(O.value, (Ce) => (a(), c("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, f(Ce.name), 9, iE))), 128))
                      ], 8, lE), [
                        [hs, H.value]
                      ])
                    ]),
                    t("div", rE, [
                      J[38] || (J[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (Ce) => se.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), c(K, null, be(We(ll), (Ce) => (a(), c("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce) + f(Ce === "auto" ? " (detect GPU)" : ""), 9, cE))), 128))
                      ], 512), [
                        [hs, se.value]
                      ])
                    ]),
                    t("div", uE, [
                      t("label", dE, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (Ce) => Z.value = Ce)
                        }, null, 512), [
                          [en, Z.value]
                        ]),
                        J[39] || (J[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (a(), c("div", fE, f(N.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), c("div", pE, [
                  x(Nr, {
                    "workspace-path": G.value,
                    "resume-import": P.value,
                    "initial-progress": D.value ?? void 0,
                    onImportComplete: re,
                    onImportStarted: J[14] || (J[14] = (Ce) => S.value = !0),
                    onSourceCleared: he
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", gE, [
            x(Gr),
            t("div", hE, [
              g.value === 1 ? (a(), R(Le, {
                key: 0,
                variant: "primary",
                disabled: !fe.value || pe.value,
                onClick: ce
              }, {
                default: h(() => [
                  b(f(pe.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), c(K, { key: 1 }, [
                !Me.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !G.value) ? (a(), R(Le, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ee
                }, {
                  default: h(() => [...J[44] || (J[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), R(Le, {
                  key: 1,
                  variant: "primary",
                  disabled: !De.value || Me.value,
                  onClick: ye
                }, {
                  default: h(() => [
                    b(f(Me.value ? "Creating..." : Z.value ? "Create & Switch" : "Create Environment"), 1)
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
      _.value ? (a(), R(DI, {
        key: 0,
        "workspace-path": L.value,
        onClose: J[16] || (J[16] = (Oe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), _E = /* @__PURE__ */ ke(wE, [["__scopeId", "data-v-9a9aadc0"]]), kE = { class: "comfygit-panel" }, bE = { class: "panel-header" }, $E = { class: "header-left" }, CE = {
  key: 0,
  class: "header-info"
}, xE = { class: "header-actions" }, SE = { class: "env-switcher" }, IE = {
  key: 0,
  class: "header-info"
}, EE = { class: "branch-name" }, TE = { class: "panel-main" }, PE = { class: "sidebar" }, RE = { class: "sidebar-content" }, ME = { class: "sidebar-section" }, DE = { class: "sidebar-section" }, LE = { class: "sidebar-section" }, OE = {
  key: 0,
  class: "sidebar-badge"
}, AE = { class: "sidebar-footer" }, UE = { class: "content-area" }, NE = {
  key: 0,
  class: "error-message"
}, zE = {
  key: 1,
  class: "loading"
}, FE = { class: "dialog-content env-selector-dialog" }, BE = { class: "dialog-header" }, VE = { class: "dialog-body" }, WE = { class: "env-list" }, GE = { class: "env-info" }, jE = { class: "env-name-row" }, HE = { class: "env-indicator" }, KE = { class: "env-name" }, qE = {
  key: 0,
  class: "env-branch"
}, YE = {
  key: 1,
  class: "current-label"
}, JE = { class: "env-stats" }, XE = ["onClick"], QE = { class: "toast-container" }, ZE = { class: "toast-message" }, eT = /* @__PURE__ */ _e({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, n = s, {
      getStatus: l,
      getHistory: i,
      getBranches: r,
      checkout: u,
      createBranch: d,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: S,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = st(), D = Mv(), { liveInstanceCount: E } = zr({ autoStart: !0 }), C = k(null), j = k([]), q = k([]), z = k([]), I = U(() => z.value.find((ae) => ae.is_current)), T = k(null), M = k(!1), te = k(1), X = U(() => {
      var ae;
      return ((ae = T.value) == null ? void 0 : ae.state) || "managed";
    }), H = k(!1), se = k(null), Z = k(null), N = k(!1), G = k(null), O = k(null), le = k(null), pe = k(!1), Me = k(!1), Ae = k(""), ue = k(null), ie = k({ state: "idle", progress: 0, message: "" });
    let B = null, ee = null;
    const ge = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ve = o.initialView ? ge[o.initialView] : null, fe = k((ve == null ? void 0 : ve.view) ?? "status"), De = k((ve == null ? void 0 : ve.section) ?? "this-env");
    function Re(ae, Y) {
      fe.value = ae, De.value = Y;
    }
    function L(ae) {
      const Ue = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ae];
      Ue && Re(Ue.view, Ue.section);
    }
    function V() {
      Re("branches", "this-env");
    }
    function ne() {
      n("close"), setTimeout(() => {
        var Y;
        const ae = document.querySelectorAll("button.comfyui-button");
        for (const Ue of ae)
          if (((Y = Ue.textContent) == null ? void 0 : Y.trim()) === "Manager") {
            Ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ce = k(null), ye = k(!1), we = k(!1), Ie = k([]);
    let Ee = 0;
    function re(ae, Y = "info", Ue = 3e3) {
      const je = ++Ee;
      return Ie.value.push({ id: je, message: ae, type: Y }), Ue > 0 && setTimeout(() => {
        Ie.value = Ie.value.filter((ot) => ot.id !== je);
      }, Ue), je;
    }
    function he(ae) {
      Ie.value = Ie.value.filter((Y) => Y.id !== ae);
    }
    function Ne(ae, Y) {
      re(ae, Y);
    }
    const Pe = U(() => {
      if (!C.value) return "neutral";
      const ae = C.value.workflows, Y = ae.new.length > 0 || ae.modified.length > 0 || ae.deleted.length > 0 || C.value.has_changes;
      return C.value.comparison.is_synced ? Y ? "warning" : "success" : "error";
    });
    U(() => C.value ? Pe.value === "success" ? "All synced" : Pe.value === "warning" ? "Uncommitted changes" : Pe.value === "error" ? "Not synced" : "" : "");
    async function oe() {
      H.value = !0, se.value = null;
      try {
        const [ae, Y, Ue, je] = await Promise.all([
          l(!0),
          i(),
          r(),
          g()
        ]);
        C.value = ae, j.value = Y.commits, q.value = Ue.branches, z.value = je, n("statusUpdate", ae), G.value && await G.value.loadWorkflows(!0);
      } catch (ae) {
        se.value = ae instanceof Error ? ae.message : "Failed to load status", C.value = null, j.value = [], q.value = [];
      } finally {
        H.value = !1;
      }
    }
    function J(ae) {
      Z.value = ae;
    }
    async function Oe(ae) {
      var Ue;
      Z.value = null;
      const Y = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      ce.value = {
        title: Y ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: Y ? "You have uncommitted changes that will be lost." : `Checkout commit ${ae.short_hash || ((Ue = ae.hash) == null ? void 0 : Ue.slice(0, 7))}?`,
        details: Y ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: Y ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: Y,
        onConfirm: async () => {
          var ft;
          ce.value = null, me();
          const je = re(`Checking out ${ae.short_hash || ((ft = ae.hash) == null ? void 0 : ft.slice(0, 7))}...`, "info", 0), ot = await u(ae.hash, Y);
          he(je), ot.status === "success" ? re("Restarting ComfyUI...", "success") : re(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function Ce(ae) {
      const Y = C.value && (C.value.workflows.new.length > 0 || C.value.workflows.modified.length > 0 || C.value.workflows.deleted.length > 0 || C.value.has_changes);
      ce.value = {
        title: Y ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: Y ? "You have uncommitted changes." : `Switch to branch "${ae}"?`,
        details: Y ? is() : void 0,
        warning: Y ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: Y ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null, me();
          const Ue = re(`Switching to ${ae}...`, "info", 0), je = await m(ae, Y);
          he(Ue), je.status === "success" ? re("Restarting ComfyUI...", "success") : re(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function $e(ae) {
      const Y = re(`Creating branch ${ae}...`, "info", 0), Ue = await d(ae);
      he(Y), Ue.status === "success" ? (re(`Branch "${ae}" created`, "success"), await oe()) : re(Ue.message || "Failed to create branch", "error");
    }
    async function W(ae, Y = !1) {
      const Ue = async (je) => {
        var ft;
        const ot = re(`Deleting branch ${ae}...`, "info", 0);
        try {
          const Mt = await v(ae, je);
          he(ot), Mt.status === "success" ? (re(`Branch "${ae}" deleted`, "success"), await oe()) : (ft = Mt.message) != null && ft.includes("not fully merged") ? ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ce.value = null, await Ue(!0);
            }
          } : re(Mt.message || "Failed to delete branch", "error");
        } catch (Mt) {
          he(ot);
          const rs = Mt instanceof Error ? Mt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? ce.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ce.value = null, await Ue(!0);
            }
          } : re(rs, "error");
        }
      };
      ce.value = {
        title: "Delete Branch",
        message: `Delete branch "${ae}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ce.value = null, await Ue(Y);
        }
      };
    }
    async function F(ae) {
      Z.value = null;
      const Y = prompt("Enter branch name:");
      if (Y) {
        const Ue = re(`Creating branch ${Y}...`, "info", 0), je = await d(Y, ae.hash);
        he(Ue), je.status === "success" ? (re(`Branch "${Y}" created from ${ae.short_hash}`, "success"), await oe()) : re(je.message || "Failed to create branch", "error");
      }
    }
    function me() {
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
          var ae;
          ce.value = null, me(), re("Restarting environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/manager/reboot");
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
          var ae;
          ce.value = null, re("Stopping environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(ae, Y) {
      N.value = !1, Ae.value = ae, ue.value = Y || null, pe.value = !0;
    }
    async function lt() {
      pe.value = !1, Me.value = !0, me(), ie.value = {
        progress: 10,
        state: ut(10),
        message: Rt(10)
      };
      try {
        await w(Ae.value, ue.value || void 0), Ft(), Ws();
      } catch (ae) {
        qt(), Me.value = !1, re(`Failed to initiate switch: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error"), ie.value = { state: "idle", progress: 0, message: "" }, ue.value = null;
      }
    }
    function ut(ae) {
      return ae >= 100 ? "complete" : ae >= 80 ? "validating" : ae >= 60 ? "starting" : ae >= 30 ? "syncing" : "preparing";
    }
    function Rt(ae) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ut(ae)] || "";
    }
    function Ft() {
      if (ee) return;
      let ae = 10;
      const Y = 60, Ue = 5e3, je = 100, ot = (Y - ae) / (Ue / je);
      ee = window.setInterval(() => {
        if (ae += ot, ae >= Y && (ae = Y, qt()), ie.value.progress < Y) {
          const ft = Math.floor(ae);
          ie.value = {
            progress: ft,
            state: ut(ft),
            message: Rt(ft)
          };
        }
      }, je);
    }
    function qt() {
      ee && (clearInterval(ee), ee = null);
    }
    function Ws() {
      B || (B = window.setInterval(async () => {
        try {
          let ae = await D.getStatus();
          if ((!ae || ae.state === "idle") && (ae = await p()), !ae)
            return;
          const Y = ae.progress || 0;
          Y >= 60 && qt();
          const Ue = Math.max(Y, ie.value.progress), je = ae.state && ae.state !== "idle" && ae.state !== "unknown", ot = je ? ae.state : ut(Ue), ft = je && ae.message || Rt(Ue);
          ie.value = {
            state: ot,
            progress: Ue,
            message: ft
          }, ae.state === "complete" ? (qt(), Ms(), Me.value = !1, re(`✓ Switched to ${Ae.value}`, "success"), await oe(), Ae.value = "") : ae.state === "rolled_back" ? (qt(), Ms(), Me.value = !1, re("Switch failed, restored previous environment", "warning"), Ae.value = "") : ae.state === "critical_failure" && (qt(), Ms(), Me.value = !1, re(`Critical error during switch: ${ae.message}`, "error"), Ae.value = "");
        } catch (ae) {
          console.error("Failed to poll switch progress:", ae);
        }
      }, 1e3));
    }
    function Ms() {
      qt(), B && (clearInterval(B), B = null);
    }
    function no() {
      var ae;
      pe.value = !1, Ae.value = "", (ae = T.value) != null && ae.state && T.value.state !== "managed" && (te.value = T.value.state === "no_workspace" ? 1 : 2, M.value = !0);
    }
    async function Co(ae) {
      ye.value = !1, await oe(), re(ae.message, ae.success ? "success" : "error");
    }
    async function xo() {
      we.value = !1;
      const ae = re("Syncing environment...", "info", 0);
      try {
        const Y = await S("skip", !0);
        if (he(ae), Y.status === "success") {
          const Ue = [];
          Y.nodes_installed.length && Ue.push(`${Y.nodes_installed.length} installed`), Y.nodes_removed.length && Ue.push(`${Y.nodes_removed.length} removed`);
          const je = Ue.length ? `: ${Ue.join(", ")}` : "";
          re(`✓ Environment synced${je}`, "success"), await oe();
        } else {
          const Ue = Y.errors.length ? Y.errors.join("; ") : Y.message;
          re(`Sync failed: ${Ue}`, "error");
        }
      } catch (Y) {
        he(ae), re(`Sync error: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
      }
    }
    async function So(ae) {
      var Y;
      try {
        const Ue = await $(ae);
        Ue.failed.length === 0 ? re(`✓ Repaired ${Ue.success} workflow${Ue.success === 1 ? "" : "s"}`, "success") : re(`Repaired ${Ue.success}, failed: ${Ue.failed.length}`, "warning"), await oe();
      } catch (Ue) {
        re(`Repair failed: ${Ue instanceof Error ? Ue.message : "Unknown error"}`, "error");
      } finally {
        (Y = le.value) == null || Y.resetRepairingState();
      }
    }
    async function Se() {
      var Y, Ue;
      const ae = re("Repairing environment...", "info", 0);
      try {
        const je = await S("skip", !0);
        if (he(ae), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const ft = ot.length ? `: ${ot.join(", ")}` : "";
          re(`✓ Environment repaired${ft}`, "success"), (Y = le.value) == null || Y.closeDetailModal(), await oe();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          re(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        he(ae), re(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Ue = le.value) == null || Ue.resetRepairingEnvironmentState();
      }
    }
    async function Q(ae, Y) {
      re(`Environment '${ae}' created`, "success"), await oe(), O.value && await O.value.loadEnvironments(), Y && await vt(ae);
    }
    async function He(ae) {
      var Y;
      if (((Y = I.value) == null ? void 0 : Y.name) === ae) {
        re("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ce.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ae}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ce.value = null;
          try {
            const Ue = await _(ae);
            Ue.status === "success" ? (re(`Environment "${ae}" deleted`, "success"), await oe(), O.value && await O.value.loadEnvironments()) : re(Ue.message || "Failed to delete environment", "error");
          } catch (Ue) {
            re(`Error deleting environment: ${Ue instanceof Error ? Ue.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(ae, Y) {
      M.value = !1;
      try {
        T.value = await P();
      } catch {
      }
      await vt(ae, Y);
    }
    function Yt() {
      M.value = !1, n("close");
    }
    async function ys(ae, Y) {
      await vt(ae, Y);
    }
    async function ws(ae) {
      await oe(), await vt(ae);
    }
    async function ls(ae) {
      T.value = await P(), console.log(`Environment '${ae}' created. Available for switching.`);
    }
    function ze() {
      Re("environments", "all-envs"), setTimeout(() => {
        var ae;
        (ae = O.value) == null || ae.openCreateModal();
      }, 100);
    }
    function is() {
      if (!C.value) return [];
      const ae = [], Y = C.value.workflows;
      return Y.new.length && ae.push(`${Y.new.length} new workflow(s)`), Y.modified.length && ae.push(`${Y.modified.length} modified workflow(s)`), Y.deleted.length && ae.push(`${Y.deleted.length} deleted workflow(s)`), ae;
    }
    return Xe(async () => {
      try {
        if (T.value = await P(), T.value.state === "no_workspace") {
          M.value = !0, te.value = 1;
          return;
        }
        if (T.value.state === "empty_workspace") {
          M.value = !0, te.value = 2;
          return;
        }
        if (T.value.state === "unmanaged") {
          M.value = !0, te.value = 2;
          return;
        }
      } catch (ae) {
        console.warn("Setup status check failed, proceeding normally:", ae);
      }
      await oe();
    }), (ae, Y) => {
      var Ue, je, ot, ft, Mt, rs, Gs, js, ln, rn, cn, un;
      return a(), c("div", kE, [
        t("div", bE, [
          t("div", $E, [
            Y[31] || (Y[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            C.value ? (a(), c("div", CE)) : y("", !0)
          ]),
          t("div", xE, [
            x(Wr),
            Y[34] || (Y[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Te(["icon-btn", { spinning: H.value }]),
              onClick: oe,
              title: "Refresh"
            }, [...Y[32] || (Y[32] = [
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
              onClick: Y[0] || (Y[0] = (A) => n("close")),
              title: "Close"
            }, [...Y[33] || (Y[33] = [
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
        t("div", SE, [
          t("div", { class: "env-switcher-header" }, [
            Y[35] || (Y[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: Y[1] || (Y[1] = (A) => Re("environments", "all-envs"))
          }, [
            C.value ? (a(), c("div", IE, [
              t("span", null, f(((Ue = I.value) == null ? void 0 : Ue.name) || ((je = C.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", EE, "(" + f(C.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            Y[36] || (Y[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", TE, [
          t("div", PE, [
            t("div", RE, [
              t("div", ME, [
                Y[37] || (Y[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "status" && De.value === "this-env" }]),
                  onClick: Y[2] || (Y[2] = (A) => Re("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "workflows" }]),
                  onClick: Y[3] || (Y[3] = (A) => Re("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "models-env" }]),
                  onClick: Y[4] || (Y[4] = (A) => Re("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "branches" }]),
                  onClick: Y[5] || (Y[5] = (A) => Re("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "history" }]),
                  onClick: Y[6] || (Y[6] = (A) => Re("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "nodes" }]),
                  onClick: Y[7] || (Y[7] = (A) => Re("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "debug-env" }]),
                  onClick: Y[8] || (Y[8] = (A) => Re("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              Y[41] || (Y[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", DE, [
                Y[38] || (Y[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "environments" }]),
                  onClick: Y[9] || (Y[9] = (A) => Re("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "model-index" }]),
                  onClick: Y[10] || (Y[10] = (A) => Re("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "settings" }]),
                  onClick: Y[11] || (Y[11] = (A) => Re("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "debug-workspace" }]),
                  onClick: Y[12] || (Y[12] = (A) => Re("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              Y[42] || (Y[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", LE, [
                Y[40] || (Y[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "deploy" }]),
                  onClick: Y[13] || (Y[13] = (A) => Re("deploy", "sharing"))
                }, [
                  Y[39] || (Y[39] = b(" DEPLOY ", -1)),
                  We(E) > 0 ? (a(), c("span", OE, f(We(E)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "export" }]),
                  onClick: Y[14] || (Y[14] = (A) => Re("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "import" }]),
                  onClick: Y[15] || (Y[15] = (A) => Re("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: fe.value === "remotes" }]),
                  onClick: Y[16] || (Y[16] = (A) => Re("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", AE, [
              x(Gr)
            ])
          ]),
          t("div", UE, [
            se.value ? (a(), c("div", NE, f(se.value), 1)) : !C.value && fe.value === "status" ? (a(), c("div", zE, " Loading status... ")) : (a(), c(K, { key: 2 }, [
              fe.value === "status" ? (a(), R(nv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: C.value,
                "setup-state": X.value,
                onSwitchBranch: V,
                onCommitChanges: Y[17] || (Y[17] = (A) => ye.value = !0),
                onSyncEnvironment: Y[18] || (Y[18] = (A) => we.value = !0),
                onViewWorkflows: Y[19] || (Y[19] = (A) => Re("workflows", "this-env")),
                onViewHistory: Y[20] || (Y[20] = (A) => Re("history", "this-env")),
                onViewDebug: Y[21] || (Y[21] = (A) => Re("debug-env", "this-env")),
                onViewNodes: Y[22] || (Y[22] = (A) => Re("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: Se,
                onStartSetup: Y[23] || (Y[23] = (A) => M.value = !0),
                onViewEnvironments: Y[24] || (Y[24] = (A) => Re("environments", "all-envs")),
                onCreateEnvironment: ze
              }, null, 8, ["status", "setup-state"])) : fe.value === "workflows" ? (a(), R(L0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: G,
                onRefresh: oe
              }, null, 512)) : fe.value === "models-env" ? (a(), R(gw, {
                key: 2,
                onNavigate: L
              })) : fe.value === "branches" ? (a(), R(wv, {
                key: 3,
                branches: q.value,
                current: ((ot = C.value) == null ? void 0 : ot.branch) || null,
                onSwitch: Ce,
                onCreate: $e,
                onDelete: W
              }, null, 8, ["branches", "current"])) : fe.value === "history" ? (a(), R(Pv, {
                key: 4,
                commits: j.value,
                onSelect: J,
                onCheckout: Oe
              }, null, 8, ["commits"])) : fe.value === "nodes" ? (a(), R(N_, {
                key: 5,
                "version-mismatches": ((Mt = (ft = C.value) == null ? void 0 : ft.comparison) == null ? void 0 : Mt.version_mismatches) || [],
                onOpenNodeManager: ne,
                onRepairEnvironment: Se,
                onToast: Ne
              }, null, 8, ["version-mismatches"])) : fe.value === "debug-env" ? (a(), R(Q2, { key: 6 })) : fe.value === "environments" ? (a(), R(tC, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: O,
                onSwitch: vt,
                onCreated: Q,
                onDelete: He
              }, null, 512)) : fe.value === "model-index" ? (a(), R(r_, {
                key: 8,
                onRefresh: oe
              })) : fe.value === "settings" ? (a(), R(W2, { key: 9 })) : fe.value === "debug-workspace" ? (a(), R(X2, { key: 10 })) : fe.value === "deploy" ? (a(), R(M4, {
                key: 11,
                onToast: Ne,
                onNavigate: L
              })) : fe.value === "export" ? (a(), R(RC, { key: 12 })) : fe.value === "import" ? (a(), R(C3, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : fe.value === "remotes" ? (a(), R($2, {
                key: 14,
                onToast: Ne
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (a(), R(J4, {
          key: 0,
          commit: Z.value,
          onClose: Y[25] || (Y[25] = (A) => Z.value = null),
          onCheckout: Oe,
          onCreateBranch: F
        }, null, 8, ["commit"])) : y("", !0),
        ce.value ? (a(), R(al, {
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
          onCancel: Y[26] || (Y[26] = (A) => ce.value = null),
          onSecondary: ce.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        x(J6, {
          show: pe.value,
          "from-environment": ((rs = I.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": Ae.value,
          onConfirm: lt,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ye.value && C.value ? (a(), R(Vr, {
          key: 2,
          status: C.value,
          "as-modal": !0,
          onClose: Y[27] || (Y[27] = (A) => ye.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        we.value && C.value ? (a(), R(gI, {
          key: 3,
          show: we.value,
          "mismatch-details": {
            missing_nodes: C.value.comparison.missing_nodes,
            extra_nodes: C.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: Y[28] || (Y[28] = (A) => we.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        x(iI, {
          show: Me.value,
          state: ie.value.state,
          progress: ie.value.progress,
          message: ie.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (a(), c("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: Y[30] || (Y[30] = at((A) => N.value = !1, ["self"]))
        }, [
          t("div", FE, [
            t("div", BE, [
              Y[44] || (Y[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: Y[29] || (Y[29] = (A) => N.value = !1)
              }, [...Y[43] || (Y[43] = [
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
            t("div", VE, [
              Y[45] || (Y[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", WE, [
                (a(!0), c(K, null, be(z.value, (A) => (a(), c("div", {
                  key: A.name,
                  class: Te(["env-item", { current: A.is_current }])
                }, [
                  t("div", GE, [
                    t("div", jE, [
                      t("span", HE, f(A.is_current ? "●" : "○"), 1),
                      t("span", KE, f(A.name), 1),
                      A.current_branch ? (a(), c("span", qE, "(" + f(A.current_branch) + ")", 1)) : y("", !0),
                      A.is_current ? (a(), c("span", YE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", JE, f(A.workflow_count) + " workflows • " + f(A.node_count) + " nodes ", 1)
                  ]),
                  A.is_current ? y("", !0) : (a(), c("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (xe) => vt(A.name)
                  }, " SWITCH ", 8, XE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        M.value ? (a(), R(_E, {
          key: 5,
          "default-path": ((Gs = T.value) == null ? void 0 : Gs.default_path) || "~/comfygit",
          "detected-models-dir": ((js = T.value) == null ? void 0 : js.detected_models_dir) || null,
          "initial-step": te.value,
          "existing-environments": ((ln = T.value) == null ? void 0 : ln.environments) || [],
          "cli-installed": ((rn = T.value) == null ? void 0 : rn.cli_installed) ?? !0,
          "setup-state": ((cn = T.value) == null ? void 0 : cn.state) || "no_workspace",
          "workspace-path": ((un = T.value) == null ? void 0 : un.workspace_path) || null,
          onComplete: ht,
          onClose: Yt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", QE, [
          x(vd, { name: "toast" }, {
            default: h(() => [
              (a(!0), c(K, null, be(Ie.value, (A) => (a(), c("div", {
                key: A.id,
                class: Te(["toast", A.type])
              }, [
                t("span", ZE, f(A.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), tT = /* @__PURE__ */ ke(eT, [["__scopeId", "data-v-037b3ee3"]]), sT = { class: "item-header" }, oT = { class: "item-info" }, nT = { class: "filename" }, aT = { class: "metadata" }, lT = { class: "size" }, iT = {
  key: 0,
  class: "type"
}, rT = { class: "item-actions" }, cT = {
  key: 0,
  class: "progress-section"
}, uT = { class: "progress-bar" }, dT = { class: "progress-stats" }, fT = { class: "downloaded" }, mT = { class: "speed" }, vT = {
  key: 0,
  class: "eta"
}, pT = {
  key: 1,
  class: "status-msg paused"
}, gT = {
  key: 2,
  class: "status-msg queued"
}, hT = {
  key: 3,
  class: "status-msg completed"
}, yT = {
  key: 4,
  class: "status-msg failed"
}, wT = {
  key: 0,
  class: "retries"
}, _T = /* @__PURE__ */ _e({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
    function n(r) {
      if (r === 0) return "?";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(r) {
      return r === 0 ? "-" : `${(r / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function i(r) {
      if (r < 60) return `${Math.round(r)}s`;
      const u = Math.floor(r / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (r, u) => (a(), c("div", {
      class: Te(["download-item", `status-${e.item.status}`])
    }, [
      t("div", sT, [
        t("div", oT, [
          t("div", nT, f(e.item.filename), 1),
          t("div", aT, [
            t("span", lT, f(n(e.item.size)), 1),
            e.item.type ? (a(), c("span", iT, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", rT, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), c("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), c("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), c("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), c("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), c("div", cT, [
        t("div", uT, [
          t("div", {
            class: "progress-fill",
            style: Kt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", dT, [
          t("span", fT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", mT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), c("span", vT, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), c("div", pT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), c("div", gT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), c("div", hT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), c("div", yT, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), c("span", wT, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ ke(_T, [["__scopeId", "data-v-2110df65"]]), kT = { class: "queue-title" }, bT = { class: "count" }, $T = { class: "queue-actions" }, CT = { class: "action-label" }, xT = {
  key: 0,
  class: "overall-progress"
}, ST = { class: "progress-bar" }, IT = {
  key: 0,
  class: "current-mini"
}, ET = { class: "filename" }, TT = { class: "speed" }, PT = {
  key: 1,
  class: "queue-content"
}, RT = {
  key: 0,
  class: "section"
}, MT = {
  key: 1,
  class: "section"
}, DT = { class: "section-header" }, LT = { class: "section-label paused" }, OT = { class: "items-list" }, AT = {
  key: 2,
  class: "section"
}, UT = { class: "section-header" }, NT = { class: "section-label" }, zT = { class: "items-list" }, FT = {
  key: 3,
  class: "section"
}, BT = { class: "section-header" }, VT = { class: "section-label" }, WT = { class: "items-list" }, GT = {
  key: 4,
  class: "section"
}, jT = { class: "section-header" }, HT = { class: "section-label failed" }, KT = { class: "items-list" }, qT = /* @__PURE__ */ _e({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: r,
      hasItems: u,
      activeCount: d,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = bo(), S = k(!1);
    let $ = null;
    gt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: r.value.length,
        completed: l.value.length
      }),
      (C, j) => {
        $ && (clearTimeout($), $ = null);
        const q = C.active === 0 && C.failed === 0 && C.paused === 0 && C.completed > 0, z = j && (j.active > 0 || j.paused > 0);
        q && z && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = U(() => {
      var q;
      if (s.items.length === 0) return 0;
      const C = l.value.length, j = ((q = o.value) == null ? void 0 : q.progress) || 0;
      return Math.round((C + j / 100) / s.items.length * 100);
    });
    function D(C) {
      m(C);
    }
    function E(C) {
      return C === 0 ? "" : `${(C / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (C, j) => (a(), R(wt, { to: "body" }, [
      We(u) ? (a(), c("div", {
        key: 0,
        class: Te(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: j[0] || (j[0] = (q) => S.value = !S.value)
        }, [
          t("div", kT, [
            j[4] || (j[4] = t("span", { class: "icon" }, "↓", -1)),
            j[5] || (j[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", bT, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", $T, [
            t("span", CT, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), c("div", PT, [
          We(o) ? (a(), c("div", RT, [
            j[6] || (j[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            x(Mo, {
              item: We(o),
              onCancel: j[1] || (j[1] = (q) => D(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(r).length > 0 ? (a(), c("div", MT, [
            t("div", DT, [
              t("span", LT, "Paused (" + f(We(r).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: j[2] || (j[2] = //@ts-ignore
                (...q) => We(w) && We(w)(...q))
              }, "Resume All")
            ]),
            t("div", OT, [
              (a(!0), c(K, null, be(We(r), (q) => (a(), R(Mo, {
                key: q.id,
                item: q,
                onResume: (z) => We(g)(q.id),
                onRemove: (z) => We(p)(q.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), c("div", AT, [
            t("div", UT, [
              t("span", NT, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", zT, [
              (a(!0), c(K, null, be(We(n), (q) => (a(), R(Mo, {
                key: q.id,
                item: q,
                onCancel: (z) => D(q.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), c("div", FT, [
            t("div", BT, [
              t("span", VT, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: j[3] || (j[3] = //@ts-ignore
                (...q) => We(_) && We(_)(...q))
              }, "Clear")
            ]),
            t("div", WT, [
              (a(!0), c(K, null, be(We(l).slice(0, 3), (q) => (a(), R(Mo, {
                key: q.id,
                item: q,
                onRemove: (z) => We(p)(q.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), c("div", GT, [
            t("div", jT, [
              t("span", HT, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", KT, [
              (a(!0), c(K, null, be(We(i), (q) => (a(), R(Mo, {
                key: q.id,
                item: q,
                onRetry: (z) => We(v)(q.id),
                onRemove: (z) => We(p)(q.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), c("div", xT, [
          t("div", ST, [
            t("div", {
              class: "progress-fill",
              style: Kt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), c("div", IT, [
            t("span", ET, f(We(o).filename), 1),
            t("span", TT, f(E(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), YT = /* @__PURE__ */ ke(qT, [["__scopeId", "data-v-60751cfa"]]), JT = {
  key: 0,
  class: "loading-state"
}, XT = {
  key: 1,
  class: "analysis-results"
}, QT = {
  key: 0,
  class: "section"
}, ZT = { class: "section-header" }, e7 = { class: "section-title" }, t7 = { class: "item-list" }, s7 = { class: "package-info" }, o7 = { class: "package-name" }, n7 = { class: "node-count" }, a7 = {
  key: 1,
  class: "installing-badge"
}, l7 = {
  key: 2,
  class: "queued-badge"
}, i7 = ["title"], r7 = {
  key: 4,
  class: "installed-badge"
}, c7 = {
  key: 0,
  class: "overflow-note"
}, u7 = {
  key: 1,
  class: "section"
}, d7 = { class: "section-header" }, f7 = { class: "section-title" }, m7 = { class: "item-list" }, v7 = { class: "node-type" }, p7 = {
  key: 0,
  class: "overflow-note"
}, g7 = {
  key: 2,
  class: "section"
}, h7 = { class: "section-header" }, y7 = { class: "section-title" }, w7 = { class: "item-list" }, _7 = { class: "model-info" }, k7 = { class: "model-name" }, b7 = {
  key: 1,
  class: "queued-badge"
}, $7 = {
  key: 1,
  class: "no-url"
}, C7 = {
  key: 0,
  class: "overflow-note"
}, x7 = { class: "dont-show-again" }, S7 = /* @__PURE__ */ _e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), r = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(/* @__PURE__ */ new Set()), p = k(/* @__PURE__ */ new Map()), { addToQueue: _ } = bo(), { queueNodeInstall: S } = st(), $ = U(() => P.value.length > 0 || E.value.length > 0 || C.value.length > 0), P = U(() => {
      var B, ee;
      if (!((B = n.value) != null && B.nodes)) return [];
      const ue = /* @__PURE__ */ new Map(), ie = (n.value.nodes.resolved || []).filter((ge) => {
        var ve;
        return !ge.is_installed && ((ve = ge.package) == null ? void 0 : ve.package_id);
      });
      for (const ge of ie) {
        const ve = ge.package.package_id;
        ue.has(ve) || ue.set(ve, {
          package_id: ve,
          title: ge.package.title || ve,
          node_count: 0,
          node_types: [],
          repository: ge.package.repository || null,
          latest_version: ge.package.latest_version || null
        });
        const fe = ue.get(ve);
        fe.node_count++, fe.node_types.push(((ee = ge.reference) == null ? void 0 : ee.node_type) || ge.node_type);
      }
      return Array.from(ue.values());
    }), D = U(() => P.value.reduce((ue, ie) => ue + ie.node_count, 0)), E = U(() => {
      var ue;
      return (ue = n.value) != null && ue.nodes ? (n.value.nodes.unresolved || []).map((ie) => {
        var B;
        return {
          node_type: ((B = ie.reference) == null ? void 0 : B.node_type) || ie.node_type
        };
      }) : [];
    }), C = U(() => {
      var B;
      if (!((B = n.value) != null && B.models)) return [];
      const ue = (n.value.models.resolved || []).filter(
        (ee) => ee.match_type === "download_intent" || ee.match_type === "property_download_intent" || ee.match_type === "not_found"
      ).map((ee) => {
        var ge, ve, fe, De;
        return {
          filename: ((ve = (ge = ee.reference) == null ? void 0 : ge.widget_value) == null ? void 0 : ve.split("/").pop()) || ((fe = ee.reference) == null ? void 0 : fe.widget_value) || ee.widget_value,
          widget_value: ((De = ee.reference) == null ? void 0 : De.widget_value) || ee.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ee.download_source || null,
          targetPath: ee.target_path || null,
          canDownload: !!(ee.download_source && ee.target_path)
        };
      }), ie = (n.value.models.unresolved || []).map((ee) => {
        var ge, ve, fe, De;
        return {
          filename: ((ve = (ge = ee.reference) == null ? void 0 : ge.widget_value) == null ? void 0 : ve.split("/").pop()) || ((fe = ee.reference) == null ? void 0 : fe.widget_value) || ee.widget_value,
          widget_value: ((De = ee.reference) == null ? void 0 : De.widget_value) || ee.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...ue, ...ie];
    }), j = U(() => C.value.filter((ue) => ue.canDownload)), q = U(() => P.value.length > 0 && P.value.every(
      (ue) => i.value.has(ue.package_id) || r.value.has(ue.package_id) || u.value.has(ue.package_id)
    )), z = U(() => j.value.length > 0 && j.value.every((ue) => d.value.has(ue.url))), I = U(() => P.value.length > 0 || j.value.length > 0), T = U(() => {
      const ue = P.value.length === 0 || q.value, ie = j.value.length === 0 || z.value;
      return ue && ie;
    });
    async function M(ue) {
      const ie = ue.package_id;
      if (!(i.value.has(ie) || r.value.has(ie) || u.value.has(ie))) {
        v.value = ie;
        try {
          const { ui_id: B } = await S({
            id: ie,
            version: ue.latest_version || "latest",
            selected_version: ue.latest_version || "latest",
            repository: ue.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          p.value.set(B, ie), r.value.add(ie);
        } catch (B) {
          console.error("[ComfyGit] Failed to queue package install:", B), u.value.set(ie, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function te(ue) {
      !ue.url || !ue.targetPath || d.value.has(ue.url) || (_([{
        workflow: "unsaved",
        filename: ue.filename,
        url: ue.url,
        targetPath: ue.targetPath
      }]), d.value.add(ue.url));
    }
    async function X() {
      for (const ue of P.value)
        !i.value.has(ue.package_id) && !r.value.has(ue.package_id) && !u.value.has(ue.package_id) && await M(ue);
    }
    function H() {
      const ue = j.value.filter(
        (ie) => !d.value.has(ie.url)
      );
      if (ue.length !== 0) {
        _(ue.map((ie) => ({
          workflow: "unsaved",
          filename: ie.filename,
          url: ie.url,
          targetPath: ie.targetPath
        })));
        for (const ie of ue)
          d.value.add(ie.url);
      }
    }
    function se() {
      X(), H();
    }
    function Z() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function N(ue) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ie = ue == null ? void 0 : ue.id;
      if (ie && w.value.has(ie)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ie} this session`);
        return;
      }
      try {
        const B = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ue })
        });
        if (B.ok) {
          const ee = await B.json();
          if (ee.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ee.filename}, skipping popup`), ie && w.value.add(ie);
            return;
          }
        }
      } catch (B) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", B);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), p.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const B = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: ue, name: "unsaved" })
        });
        if (!B.ok) {
          const ee = await B.json();
          throw new Error(ee.error || "Failed to analyze workflow");
        }
        n.value = await B.json(), $.value && (l.value = !0, ie && w.value.add(ie));
      } catch (B) {
        console.error("[ComfyGit] Failed to analyze workflow:", B);
      } finally {
        s.value = !1;
      }
    }
    function G() {
      l.value = !1, n.value = null;
    }
    function O(ue) {
      const { workflow: ie } = ue.detail;
      ie && N(ie);
    }
    function le(ue) {
      var ee;
      const ie = (ee = ue.detail) == null ? void 0 : ee.ui_id, B = p.value.get(ie);
      B && (v.value = B, console.log("[ComfyGit] Installing package:", B));
    }
    function pe(ue) {
      var ge, ve, fe, De, Re, L, V;
      const ie = (ge = ue.detail) == null ? void 0 : ge.ui_id, B = p.value.get(ie), ee = (fe = (ve = ue.detail) == null ? void 0 : ve.status) == null ? void 0 : fe.status_str;
      if (B) {
        if (p.value.delete(ie), r.value.delete(B), v.value === B && (v.value = null), ee === "success")
          i.value.add(B), g.value++, console.log("[ComfyGit] Package installed successfully:", B);
        else {
          const ne = ((L = (Re = (De = ue.detail) == null ? void 0 : De.status) == null ? void 0 : Re.messages) == null ? void 0 : L[0]) || ((V = ue.detail) == null ? void 0 : V.result) || "Unknown error";
          u.value.set(B, ne), console.error("[ComfyGit] Package install failed:", B, ne);
        }
        p.value.size === 0 && g.value > 0 && window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        }));
      }
    }
    function Me() {
      var ue;
      return (ue = window.app) == null ? void 0 : ue.api;
    }
    function Ae(ue) {
      const { change_type: ie } = ue.detail;
      (ie === "created" || ie === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Xe(() => {
      window.addEventListener("comfygit:workflow-loaded", O);
      const ue = Me();
      ue && (ue.addEventListener("cm-task-started", le), ue.addEventListener("cm-task-completed", pe), ue.addEventListener("comfygit:workflow-changed", Ae));
    }), oo(() => {
      window.removeEventListener("comfygit:workflow-loaded", O);
      const ue = Me();
      ue && (ue.removeEventListener("cm-task-started", le), ue.removeEventListener("cm-task-completed", pe), ue.removeEventListener("comfygit:workflow-changed", Ae));
    }), (ue, ie) => l.value ? (a(), R(mt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: G
    }, {
      body: h(() => [
        s.value ? (a(), c("div", JT, [...ie[1] || (ie[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && $.value ? (a(), c("div", XT, [
          P.value.length > 0 ? (a(), c("div", QT, [
            t("div", ZT, [
              t("span", e7, "Missing Custom Nodes (" + f(D.value) + ")", 1),
              P.value.length > 1 ? (a(), R(Le, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: q.value,
                onClick: X
              }, {
                default: h(() => [
                  b(f(q.value ? "All Queued" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", t7, [
              (a(!0), c(K, null, be(P.value.slice(0, 5), (B) => (a(), c("div", {
                key: B.package_id,
                class: "package-item"
              }, [
                t("div", s7, [
                  t("span", o7, f(B.title), 1),
                  t("span", n7, "(" + f(B.node_count) + " " + f(B.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                !i.value.has(B.package_id) && !r.value.has(B.package_id) && !u.value.has(B.package_id) ? (a(), R(Le, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: v.value === B.package_id,
                  onClick: (ee) => M(B)
                }, {
                  default: h(() => [
                    b(f(v.value === B.package_id ? "Queueing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : v.value === B.package_id ? (a(), c("span", a7, "Installing...")) : r.value.has(B.package_id) ? (a(), c("span", l7, "Queued")) : u.value.has(B.package_id) ? (a(), c("span", {
                  key: 3,
                  class: "failed-badge",
                  title: u.value.get(B.package_id)
                }, "Failed ⚠", 8, i7)) : (a(), c("span", r7, "Installed"))
              ]))), 128)),
              P.value.length > 5 ? (a(), c("div", c7, " ...and " + f(P.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          E.value.length > 0 ? (a(), c("div", u7, [
            t("div", d7, [
              t("span", f7, "Unknown Nodes (" + f(E.value.length) + ")", 1)
            ]),
            t("div", m7, [
              (a(!0), c(K, null, be(E.value.slice(0, 5), (B) => (a(), c("div", {
                key: B.node_type,
                class: "item"
              }, [
                t("code", v7, f(B.node_type), 1),
                ie[2] || (ie[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              E.value.length > 5 ? (a(), c("div", p7, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          C.value.length > 0 ? (a(), c("div", g7, [
            t("div", h7, [
              t("span", y7, "Missing Models (" + f(C.value.length) + ")", 1),
              j.value.length > 1 ? (a(), R(Le, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: z.value,
                onClick: H
              }, {
                default: h(() => [
                  b(f(z.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", w7, [
              (a(!0), c(K, null, be(C.value.slice(0, 5), (B) => (a(), c("div", {
                key: B.widget_value,
                class: "model-item"
              }, [
                t("div", _7, [
                  t("span", k7, f(B.filename), 1)
                ]),
                B.canDownload ? (a(), c(K, { key: 0 }, [
                  d.value.has(B.url) ? (a(), c("span", b7, "Queued")) : (a(), R(Le, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (ee) => te(B)
                  }, {
                    default: h(() => [...ie[3] || (ie[3] = [
                      b(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), c("span", $7, "Manual download required"))
              ]))), 128)),
              C.value.length > 5 ? (a(), c("div", C7, " ...and " + f(C.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", x7, [
            x(La, {
              modelValue: m.value,
              "onUpdate:modelValue": [
                ie[0] || (ie[0] = (B) => m.value = B),
                Z
              ]
            }, {
              default: h(() => [...ie[4] || (ie[4] = [
                b(" Don't show this popup ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Le, {
          variant: "secondary",
          onClick: G
        }, {
          default: h(() => [...ie[5] || (ie[5] = [
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
}), I7 = /* @__PURE__ */ ke(S7, [["__scopeId", "data-v-ed99da35"]]), E7 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', T7 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', P7 = {
  comfy: E7,
  phosphor: T7
}, il = "comfy", jr = "comfygit-theme";
let Ys = null, Hr = il;
function R7() {
  try {
    const e = localStorage.getItem(jr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return il;
}
function Kr(e = il) {
  Ys && Ys.remove(), Ys = document.createElement("style"), Ys.id = "comfygit-theme-styles", Ys.setAttribute("data-theme", e), Ys.textContent = P7[e], document.head.appendChild(Ys), document.body.setAttribute("data-comfygit-theme", e), Hr = e;
  try {
    localStorage.setItem(jr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function M7() {
  return Hr;
}
function D7(e) {
  Kr(e);
}
function L7(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const rl = document.createElement("link");
rl.rel = "stylesheet";
rl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(rl);
const O7 = R7();
Kr(O7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), D7(e);
  },
  getTheme: () => {
    const e = M7();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Xt = null, At = null, jo = null, Do = null, oi = null, Lo = null, ni = null;
const ho = k(null);
let cl = "managed", qr = !1;
async function In() {
  var e;
  if (!((e = Vt) != null && e.api)) return null;
  try {
    const s = await Vt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ho.value = await s.json());
  } catch {
  }
}
async function Oa() {
  var e;
  if ((e = Vt) != null && e.api)
    try {
      const s = await Vt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        cl = o.state, qr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Aa() {
  var s;
  if (cl === "managed" || !qr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function A7() {
  if (!ho.value) return !1;
  const e = ho.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ho.value.has_changes;
}
function ya(e) {
  Xt && Xt.remove(), Xt = document.createElement("div"), Xt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Xt.appendChild(s), Xt.addEventListener("click", (l) => {
    l.target === Xt && wa();
  });
  const o = (l) => {
    l.key === "Escape" && (wa(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Zn({
    render: () => nn(tT, {
      initialView: e,
      onClose: wa,
      onStatusUpdate: async (l) => {
        ho.value = l, Ho(), await Oa(), Ua(), Aa();
      }
    })
  }).mount(s), document.body.appendChild(Xt);
}
function wa() {
  Xt && (Xt.remove(), Xt = null);
}
function U7(e) {
  Oo(), At = document.createElement("div"), At.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  At.style.position = "fixed", At.style.top = `${s.bottom + 8}px`, At.style.right = `${window.innerWidth - s.right}px`, At.style.zIndex = "10001";
  const o = (l) => {
    At && !At.contains(l.target) && l.target !== e && (Oo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Oo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), jo = Zn({
    render: () => nn(Vr, {
      status: ho.value,
      onClose: Oo,
      onCommitted: (l) => {
        Oo(), N7(l.success, l.message), In().then(Ho);
      }
    })
  }), jo.mount(At), document.body.appendChild(At);
}
function Oo() {
  jo && (jo.unmount(), jo = null), At && (At.remove(), At = null);
}
function N7(e, s) {
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
function z7() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", oi = Zn({
    render: () => nn(YT)
  }), oi.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function F7() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", ni = Zn({
    render: () => nn(I7)
  }), ni.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Wt = null;
function Ho() {
  if (!Wt) return;
  const e = Wt.querySelector(".commit-indicator");
  e && (e.style.display = A7() ? "block" : "none");
}
function Ua() {
  if (!Wt) return;
  const e = cl !== "managed";
  Wt.disabled = e, Wt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Yr = document.createElement("style");
Yr.textContent = `
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
document.head.appendChild(Yr);
Vt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        Vt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        Vt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = ya, Wt = document.createElement("button"), Wt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Wt.innerHTML = 'Commit <span class="commit-indicator"></span>', Wt.title = "Quick Commit", Wt.onclick = () => U7(Wt), e.appendChild(s), e.appendChild(Wt), (i = (l = Vt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Vt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), z7(), F7(), window.addEventListener("comfygit:open-panel", ((r) => {
      var d;
      const u = (d = r.detail) == null ? void 0 : d.initialView;
      ya(u);
    }));
    const { loadPendingDownloads: o } = bo();
    o(), await Promise.all([In(), Oa()]), Ho(), Ua(), Aa(), setTimeout(Aa, 100), setInterval(async () => {
      await Promise.all([In(), Oa()]), Ho(), Ua();
    }, 3e4);
    const n = Vt.api;
    if (n) {
      let r = function() {
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
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => r(), g.appendChild(p);
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
          p.remove(), ya("debug-env");
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
            const C = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Vt.refreshComboInNodes && (await Vt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", D.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (j) {
                console.error("[ComfyGit] Failed to refresh nodes:", j), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", D.style.display = "none";
              }
            };
            n.addEventListener("reconnected", C, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (C) {
            console.error("[ComfyGit] Failed to restart:", C), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", D.textContent = "Try Again", D.disabled = !1, D.style.opacity = "1";
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await In(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), r()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = L7(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
