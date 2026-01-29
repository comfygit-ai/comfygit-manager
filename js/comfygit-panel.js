import { app as Wt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ua(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const st = {}, fo = [], gs = () => {
}, ai = () => !1, Bn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), za = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Fa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Xr = Object.prototype.hasOwnProperty, Ze = (e, s) => Xr.call(e, s), Be = Array.isArray, mo = (e) => tn(e) === "[object Map]", ko = (e) => tn(e) === "[object Set]", ul = (e) => tn(e) === "[object Date]", Ge = (e) => typeof e == "function", ct = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", li = (e) => (tt(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), ii = Object.prototype.toString, tn = (e) => ii.call(e), Zr = (e) => tn(e).slice(8, -1), ri = (e) => tn(e) === "[object Object]", Ba = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, No = /* @__PURE__ */ Ua(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, ec = /-\w/g, qt = Vn(
  (e) => e.replace(ec, (s) => s.slice(1).toUpperCase())
), tc = /\B([A-Z])/g, Bs = Vn(
  (e) => e.replace(tc, "-$1").toLowerCase()
), Wn = Vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), sa = Vn(
  (e) => e ? `on${Wn(e)}` : ""
), Us = (e, s) => !Object.is(e, s), bn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, ci = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Gn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, sc = (e) => {
  const s = ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let dl;
const jn = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ct(n) ? lc(n) : Ft(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ct(e) || tt(e))
    return e;
}
const oc = /;(?![^(]*\))/g, nc = /:([^]+)/, ac = /\/\*[^]*?\*\//g;
function lc(e) {
  const s = {};
  return e.replace(ac, "").split(oc).forEach((o) => {
    if (o) {
      const n = o.split(nc);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Ie(e) {
  let s = "";
  if (ct(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ie(e[o]);
      n && (s += n + " ");
    }
  else if (tt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const ic = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rc = /* @__PURE__ */ Ua(ic);
function ui(e) {
  return !!e || e === "";
}
function cc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = to(e[n], s[n]);
  return o;
}
function to(e, s) {
  if (e === s) return !0;
  let o = ul(e), n = ul(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), n = ts(s), o || n)
    return e === s;
  if (o = Be(e), n = Be(s), o || n)
    return o && n ? cc(e, s) : !1;
  if (o = tt(e), n = tt(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !to(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Va(e, s) {
  return e.findIndex((o) => to(o, s));
}
const di = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Be(e) || tt(e) && (e.toString === ii || !Ge(e.toString)) ? di(e) ? f(e.value) : JSON.stringify(e, fi, 2) : String(e), fi = (e, s) => di(s) ? fi(e, s.value) : mo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[oa(n, i) + " =>"] = l, o),
    {}
  )
} : ko(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => oa(o))
} : ts(s) ? oa(s) : tt(s) && !Be(s) && !ri(s) ? String(s) : s, oa = (e, s = "") => {
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
class uc {
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
function dc() {
  return Lt;
}
let nt;
const na = /* @__PURE__ */ new WeakSet();
class mi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && Lt.active && Lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, na.has(this) && (na.delete(this), this.trigger()));
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
    const s = nt, o = es;
    nt = this, es = !0;
    try {
      return this.fn();
    } finally {
      hi(this), nt = s, es = o, this.flags &= -3;
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
    this.flags & 64 ? na.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ka(this) && this.run();
  }
  get dirty() {
    return ka(this);
  }
}
let vi = 0, Uo, zo;
function pi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = zo, zo = e;
    return;
  }
  e.next = Uo, Uo = e;
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
function gi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function hi(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), ja(n), fc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function ka(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (yi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function yi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ko) || (e.globalVersion = Ko, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ka(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = es;
  nt = e, es = !0;
  try {
    gi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Us(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, es = n, hi(e), e.flags &= -3;
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
function fc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let es = !0;
const wi = [];
function Ss() {
  wi.push(es), es = !1;
}
function Is() {
  const e = wi.pop();
  es = e === void 0 ? !0 : e;
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
class mc {
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
    if (!nt || !es || nt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== nt)
      o = this.activeLink = new mc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, _i(o);
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
const ba = /* @__PURE__ */ new WeakMap(), Zs = Symbol(
  ""
), $a = Symbol(
  ""
), qo = Symbol(
  ""
);
function kt(e, s, o) {
  if (es && nt) {
    let n = ba.get(e);
    n || ba.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Ha()), l.map = n, l.key = o), l.track();
  }
}
function $s(e, s, o, n, l, i) {
  const c = ba.get(e);
  if (!c) {
    Ko++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Wa(), s === "clear")
    c.forEach(u);
  else {
    const d = Be(e), m = d && Ba(o);
    if (d && o === "length") {
      const v = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === qo || !ts(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(qo)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(Zs)), mo(e) && u(c.get($a)));
          break;
        case "delete":
          d || (u(c.get(Zs)), mo(e) && u(c.get($a)));
          break;
        case "set":
          mo(e) && u(c.get(Zs));
          break;
      }
  }
  Ga();
}
function ao(e) {
  const s = Qe(e);
  return s === e ? s : (kt(s, "iterate", qo), jt(e) ? s : s.map(ss));
}
function Hn(e) {
  return kt(e = Qe(e), "iterate", qo), e;
}
function As(e, s) {
  return Es(e) ? eo(e) ? yo(ss(s)) : yo(s) : ss(s);
}
const vc = {
  __proto__: null,
  [Symbol.iterator]() {
    return aa(this, Symbol.iterator, (e) => As(this, e));
  },
  concat(...e) {
    return ao(this).concat(
      ...e.map((s) => Be(s) ? ao(s) : s)
    );
  },
  entries() {
    return aa(this, "entries", (e) => (e[1] = As(this, e[1]), e));
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
      (o) => o.map((n) => As(this, n)),
      arguments
    );
  },
  find(e, s) {
    return _s(
      this,
      "find",
      e,
      s,
      (o) => As(this, o),
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
      (o) => As(this, o),
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
    return la(this, "includes", e);
  },
  indexOf(...e) {
    return la(this, "indexOf", e);
  },
  join(e) {
    return ao(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return la(this, "lastIndexOf", e);
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
    return aa(this, "values", (e) => As(this, e));
  }
};
function aa(e, s, o) {
  const n = Hn(e), l = n[s]();
  return n !== e && !jt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const pc = Array.prototype;
function _s(e, s, o, n, l, i) {
  const c = Hn(e), u = c !== e && !jt(e), d = c[s];
  if (d !== pc[s]) {
    const g = d.apply(e, i);
    return u ? ss(g) : g;
  }
  let m = o;
  c !== e && (u ? m = function(g, w) {
    return o.call(this, As(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = d.call(c, m, n);
  return u && l ? l(v) : v;
}
function ml(e, s, o, n) {
  const l = Hn(e);
  let i = o;
  return l !== e && (jt(e) ? o.length > 3 && (i = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : i = function(c, u, d) {
    return o.call(this, c, As(e, u), d, e);
  }), l[s](i, ...n);
}
function la(e, s, o) {
  const n = Qe(e);
  kt(n, "iterate", qo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Ya(o[0]) ? (o[0] = Qe(o[0]), n[s](...o)) : l;
}
function To(e, s, o = []) {
  Ss(), Wa();
  const n = Qe(e)[s].apply(e, o);
  return Ga(), Is(), n;
}
const gc = /* @__PURE__ */ Ua("__proto__,__v_isRef,__isVue"), ki = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function hc(e) {
  ts(e) || (e = String(e));
  const s = Qe(this);
  return kt(s, "has", e), s.hasOwnProperty(e);
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
      return n === (l ? i ? Ic : Si : i ? xi : Ci).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Be(s);
    if (!l) {
      let d;
      if (c && (d = vc[o]))
        return d;
      if (o === "hasOwnProperty")
        return hc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ct(s) ? s : n
    );
    if ((ts(o) ? ki.has(o) : gc(o)) || (l || kt(s, "get", o), i))
      return u;
    if (Ct(u)) {
      const d = c && Ba(o) ? u : u.value;
      return l && tt(d) ? Tn(d) : d;
    }
    return tt(u) ? l ? Tn(u) : Vs(u) : u;
  }
}
class $i extends bi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Be(s) && Ba(o);
    if (!this._isShallow) {
      const m = Es(i);
      if (!jt(n) && !Es(n) && (i = Qe(i), n = Qe(n)), !c && Ct(i) && !Ct(n))
        return m || (i.value = n), !0;
    }
    const u = c ? Number(o) < s.length : Ze(s, o), d = Reflect.set(
      s,
      o,
      n,
      Ct(s) ? s : l
    );
    return s === Qe(l) && (u ? Us(n, i) && $s(s, "set", o, n) : $s(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && $s(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ts(o) || !ki.has(o)) && kt(s, "has", o), n;
  }
  ownKeys(s) {
    return kt(
      s,
      "iterate",
      Be(s) ? "length" : Zs
    ), Reflect.ownKeys(s);
  }
}
class yc extends bi {
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
const wc = /* @__PURE__ */ new $i(), _c = /* @__PURE__ */ new yc(), kc = /* @__PURE__ */ new $i(!0);
const Ca = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function bc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Qe(l), c = mo(i), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...n), v = o ? Ca : s ? yo : ss;
    return !s && kt(
      i,
      "iterate",
      d ? $a : Zs
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
function mn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $c(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, c = Qe(i), u = Qe(l);
      e || (Us(l, u) && kt(c, "get", l), kt(c, "get", u));
      const { has: d } = fn(c), m = s ? Ca : e ? yo : ss;
      if (d.call(c, l))
        return m(i.get(l));
      if (d.call(c, u))
        return m(i.get(u));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && kt(Qe(l), "iterate", Zs), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Qe(i), u = Qe(l);
      return e || (Us(l, u) && kt(c, "has", l), kt(c, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const c = this, u = c.__v_raw, d = Qe(u), m = s ? Ca : e ? yo : ss;
      return !e && kt(d, "iterate", Zs), u.forEach((v, g) => l.call(i, m(v), m(g), c));
    }
  };
  return pt(
    o,
    e ? {
      add: mn("add"),
      set: mn("set"),
      delete: mn("delete"),
      clear: mn("clear")
    } : {
      add(l) {
        !s && !jt(l) && !Es(l) && (l = Qe(l));
        const i = Qe(this);
        return fn(i).has.call(i, l) || (i.add(l), $s(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !jt(i) && !Es(i) && (i = Qe(i));
        const c = Qe(this), { has: u, get: d } = fn(c);
        let m = u.call(c, l);
        m || (l = Qe(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, i), m ? Us(i, v) && $s(c, "set", l, i) : $s(c, "add", l, i), this;
      },
      delete(l) {
        const i = Qe(this), { has: c, get: u } = fn(i);
        let d = c.call(i, l);
        d || (l = Qe(l), d = c.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && $s(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Qe(this), i = l.size !== 0, c = l.clear();
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
    o[l] = bc(l, e, s);
  }), o;
}
function Ka(e, s) {
  const o = $c(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const Cc = {
  get: /* @__PURE__ */ Ka(!1, !1)
}, xc = {
  get: /* @__PURE__ */ Ka(!1, !0)
}, Sc = {
  get: /* @__PURE__ */ Ka(!0, !1)
};
const Ci = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), Ic = /* @__PURE__ */ new WeakMap();
function Ec(e) {
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
function Tc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ec(Zr(e));
}
function Vs(e) {
  return Es(e) ? e : qa(
    e,
    !1,
    wc,
    Cc,
    Ci
  );
}
function Pc(e) {
  return qa(
    e,
    !1,
    kc,
    xc,
    xi
  );
}
function Tn(e) {
  return qa(
    e,
    !0,
    _c,
    Sc,
    Si
  );
}
function qa(e, s, o, n, l) {
  if (!tt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = Tc(e);
  if (i === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    i === 2 ? n : o
  );
  return l.set(e, u), u;
}
function eo(e) {
  return Es(e) ? eo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Es(e) {
  return !!(e && e.__v_isReadonly);
}
function jt(e) {
  return !!(e && e.__v_isShallow);
}
function Ya(e) {
  return e ? !!e.__v_raw : !1;
}
function Qe(e) {
  const s = e && e.__v_raw;
  return s ? Qe(s) : e;
}
function Rc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && ci(e, "__v_skip", !0), e;
}
const ss = (e) => tt(e) ? Vs(e) : e, yo = (e) => tt(e) ? Tn(e) : e;
function Ct(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Mc(e, !1);
}
function Mc(e, s) {
  return Ct(e) ? e : new Dc(e, s);
}
class Dc {
  constructor(s, o) {
    this.dep = new Ha(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Qe(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || jt(s) || Es(s);
    s = n ? s : Qe(s), Us(s, o) && (this._rawValue = s, this._value = n ? s : ss(s), this.dep.trigger());
  }
}
function We(e) {
  return Ct(e) ? e.value : e;
}
const Lc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return Ct(l) && !Ct(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function Ii(e) {
  return eo(e) ? e : new Proxy(e, Lc);
}
class Ac {
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
function Oc(e, s, o = !1) {
  let n, l;
  return Ge(e) ? n = e : (n = e.get, l = e.set), new Ac(n, l, o);
}
const vn = {}, Pn = /* @__PURE__ */ new WeakMap();
let Qs;
function Nc(e, s = !1, o = Qs) {
  if (o) {
    let n = Pn.get(o);
    n || Pn.set(o, n = []), n.push(e);
  }
}
function Uc(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (E) => l ? E : jt(E) || l === !1 || l === 0 ? Cs(E, 1) : Cs(E);
  let v, g, w, p, _ = !1, C = !1;
  if (Ct(e) ? (g = () => e.value, _ = jt(e)) : eo(e) ? (g = () => m(e), _ = !0) : Be(e) ? (C = !0, _ = e.some((E) => eo(E) || jt(E)), g = () => e.map((E) => {
    if (Ct(E))
      return E.value;
    if (eo(E))
      return m(E);
    if (Ge(E))
      return d ? d(E, 2) : E();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Ss();
      try {
        w();
      } finally {
        Is();
      }
    }
    const E = Qs;
    Qs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Qs = E;
    }
  } : g = gs, s && l) {
    const E = g, K = l === !0 ? 1 / 0 : l;
    g = () => Cs(E(), K);
  }
  const b = dc(), I = () => {
    v.stop(), b && b.active && Fa(b.effects, v);
  };
  if (i && s) {
    const E = s;
    s = (...K) => {
      E(...K), I();
    };
  }
  let M = C ? new Array(e.length).fill(vn) : vn;
  const x = (E) => {
    if (!(!(v.flags & 1) || !v.dirty && !E))
      if (s) {
        const K = v.run();
        if (l || _ || (C ? K.some((q, V) => Us(q, M[V])) : Us(K, M))) {
          w && w();
          const q = Qs;
          Qs = v;
          try {
            const V = [
              K,
              // pass undefined as the old value when it's changed for the first time
              M === vn ? void 0 : C && M[0] === vn ? [] : M,
              p
            ];
            M = K, d ? d(s, 3, V) : (
              // @ts-expect-error
              s(...V)
            );
          } finally {
            Qs = q;
          }
        }
      } else
        v.run();
  };
  return u && u(x), v = new mi(g), v.scheduler = c ? () => c(x, !1) : x, p = (E) => Nc(E, !1, v), w = v.onStop = () => {
    const E = Pn.get(v);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const K of E) K();
      Pn.delete(v);
    }
  }, s ? n ? x(!0) : M = v.run() : c ? c(x.bind(null, !0), !0) : v.run(), I.pause = v.pause.bind(v), I.resume = v.resume.bind(v), I.stop = I, I;
}
function Cs(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
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
    Kn(l, s, o);
  }
}
function os(e, s, o, n) {
  if (Ge(e)) {
    const l = sn(e, s, o, n);
    return l && li(l) && l.catch((i) => {
      Kn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(os(e[i], s, o, n));
    return l;
  }
}
function Kn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || st;
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
  zc(e, o, l, n, c);
}
function zc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let ms = -1;
const vo = [];
let Os = null, ro = 0;
const Ei = /* @__PURE__ */ Promise.resolve();
let Rn = null;
function yt(e) {
  const s = Rn || Ei;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Fc(e) {
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
    !(e.flags & 2) && s >= Yo(o) ? It.push(e) : It.splice(Fc(s), 0, e), e.flags |= 1, Ti();
  }
}
function Ti() {
  Rn || (Rn = Ei.then(Ri));
}
function Bc(e) {
  Be(e) ? vo.push(...e) : Os && e.id === -1 ? Os.splice(ro + 1, 0, e) : e.flags & 1 || (vo.push(e), e.flags |= 1), Ti();
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
    if (vo.length = 0, Os) {
      Os.push(...s);
      return;
    }
    for (Os = s, ro = 0; ro < Os.length; ro++) {
      const o = Os[ro];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Os = null, ro = 0;
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
    ms = -1, It.length = 0, Pi(), Rn = null, (It.length || vo.length) && Ri();
  }
}
let wt = null, Mi = null;
function Mn(e) {
  const s = wt;
  return wt = e, Mi = e && e.type.__scopeId || null, s;
}
function h(e, s = wt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && An(-1);
    const i = Mn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Mn(i), n._d && An(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (wt === null)
    return e;
  const o = Xn(wt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, u, d = st] = s[l];
    i && (Ge(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Cs(c), n.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Ks(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    i && (u.oldValue = i[c].value);
    let d = u.dir[n];
    d && (Ss(), os(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Is());
  }
}
const Di = Symbol("_vte"), Li = (e) => e.__isTeleport, Fo = (e) => e && (e.disabled || e.disabled === ""), pl = (e) => e && (e.defer || e.defer === ""), gl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, hl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xa = (e, s) => {
  const o = e && e.to;
  return ct(o) ? s ? s(o) : null : o;
}, Ai = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: C, createComment: b }
    } = m, I = Fo(s.props);
    let { shapeFlag: M, children: x, dynamicChildren: E } = s;
    if (e == null) {
      const K = s.el = C(""), q = s.anchor = C("");
      p(K, o, n), p(q, o, n);
      const V = (P, L) => {
        M & 16 && v(
          x,
          P,
          L,
          l,
          i,
          c,
          u,
          d
        );
      }, T = () => {
        const P = s.target = xa(s.props, _), L = Oi(P, s, C, p);
        P && (c !== "svg" && gl(P) ? c = "svg" : c !== "mathml" && hl(P) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), I || (V(P, L), $n(s, !1)));
      };
      I && (V(o, q), $n(s, !0)), pl(s.props) ? (s.el.__isMounted = !1, St(() => {
        T(), delete s.el.__isMounted;
      }, i)) : T();
    } else {
      if (pl(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Ai.process(
            e,
            s,
            o,
            n,
            l,
            i,
            c,
            u,
            d,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const K = s.anchor = e.anchor, q = s.target = e.target, V = s.targetAnchor = e.targetAnchor, T = Fo(e.props), P = T ? o : q, L = T ? K : V;
      if (c === "svg" || gl(q) ? c = "svg" : (c === "mathml" || hl(q)) && (c = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        P,
        l,
        i,
        c,
        u
      ), tl(e, s, !0)) : d || g(
        e,
        s,
        P,
        L,
        l,
        i,
        c,
        u,
        !1
      ), I)
        T ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : pn(
          s,
          o,
          K,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ae = s.target = xa(
          s.props,
          _
        );
        ae && pn(
          s,
          ae,
          null,
          m,
          0
        );
      } else T && pn(
        s,
        q,
        V,
        m,
        1
      );
      $n(s, I);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), i && l(d), c & 16) {
      const p = i || !Fo(w);
      for (let _ = 0; _ < u.length; _++) {
        const C = u[_];
        n(
          C,
          s,
          o,
          p,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: pn,
  hydrate: Vc
};
function pn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: m, props: v } = e, g = i === 2;
  if (g && n(c, s, o), (!g || Fo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && n(u, s, o);
}
function Vc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: m, createText: v }
}, g) {
  function w(C, b, I, M) {
    b.anchor = g(
      c(C),
      b,
      u(C),
      o,
      n,
      l,
      i
    ), b.targetStart = I, b.targetAnchor = M;
  }
  const p = s.target = xa(
    s.props,
    d
  ), _ = Fo(s.props);
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
        s.targetAnchor || Oi(p, s, v, m), g(
          C && c(C),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    $n(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const _t = Ai;
function $n(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Oi(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Di] = i, e && (n(l, e), n(i, e)), i;
}
const bs = Symbol("_leaveCb"), gn = Symbol("_enterCb");
function Ni() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Je(() => {
    e.isMounted = !0;
  }), ji(() => {
    e.isUnmounting = !0;
  }), e;
}
const Vt = [Function, Array], Ui = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Vt,
  onEnter: Vt,
  onAfterEnter: Vt,
  onEnterCancelled: Vt,
  // leave
  onBeforeLeave: Vt,
  onLeave: Vt,
  onAfterLeave: Vt,
  onLeaveCancelled: Vt,
  // appear
  onBeforeAppear: Vt,
  onAppear: Vt,
  onAfterAppear: Vt,
  onAppearCancelled: Vt
}, zi = (e) => {
  const s = e.subTree;
  return s.component ? zi(s.component) : s;
}, Wc = {
  name: "BaseTransition",
  props: Ui,
  setup(e, { slots: s }) {
    const o = ol(), n = Ni();
    return () => {
      const l = s.default && Qa(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Fi(l), c = Qe(e), { mode: u } = c;
      if (n.isLeaving)
        return ia(i);
      const d = yl(i);
      if (!d)
        return ia(i);
      let m = Jo(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== bt && so(d, m);
      let v = o.subTree && yl(o.subTree);
      if (v && v.type !== bt && !Xs(v, d) && zi(o).type !== bt) {
        let g = Jo(
          v,
          c,
          n,
          o
        );
        if (so(v, g), u === "out-in" && d.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, ia(i);
        u === "in-out" && d.type !== bt ? g.delayLeave = (w, p, _) => {
          const C = Bi(
            n,
            v
          );
          C[String(v.key)] = v, w[bs] = () => {
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
const Gc = Wc;
function Bi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function Jo(e, s, o, n, l) {
  const {
    appear: i,
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
    onAppear: I,
    onAfterAppear: M,
    onAppearCancelled: x
  } = s, E = String(e.key), K = Bi(o, e), q = (P, L) => {
    P && os(
      P,
      n,
      9,
      L
    );
  }, V = (P, L) => {
    const ae = L[1];
    q(P, L), Be(P) ? P.every((Z) => Z.length <= 1) && ae() : P.length <= 1 && ae();
  }, T = {
    mode: c,
    persisted: u,
    beforeEnter(P) {
      let L = d;
      if (!o.isMounted)
        if (i)
          L = b || d;
        else
          return;
      P[bs] && P[bs](
        !0
        /* cancelled */
      );
      const ae = K[E];
      ae && Xs(e, ae) && ae.el[bs] && ae.el[bs](), q(L, [P]);
    },
    enter(P) {
      let L = m, ae = v, Z = g;
      if (!o.isMounted)
        if (i)
          L = I || m, ae = M || v, Z = x || g;
        else
          return;
      let F = !1;
      const G = P[gn] = (J) => {
        F || (F = !0, J ? q(Z, [P]) : q(ae, [P]), T.delayedLeave && T.delayedLeave(), P[gn] = void 0);
      };
      L ? V(L, [P, G]) : G();
    },
    leave(P, L) {
      const ae = String(e.key);
      if (P[gn] && P[gn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return L();
      q(w, [P]);
      let Z = !1;
      const F = P[bs] = (G) => {
        Z || (Z = !0, L(), G ? q(C, [P]) : q(_, [P]), P[bs] = void 0, K[ae] === e && delete K[ae]);
      };
      K[ae] = e, p ? V(p, [P, F]) : F();
    },
    clone(P) {
      const L = Jo(
        P,
        s,
        o,
        n,
        l
      );
      return l && l(L), L;
    }
  };
  return T;
}
function ia(e) {
  if (qn(e))
    return e = zs(e), e.children = null, e;
}
function yl(e) {
  if (!qn(e))
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
function so(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, so(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Qa(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === H ? (c.patchFlag & 128 && l++, n = n.concat(
      Qa(c.children, s, u)
    )) : (s || c.type !== bt) && n.push(u != null ? zs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function de(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Vi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Dn = /* @__PURE__ */ new WeakMap();
function Bo(e, s, o, n, l = !1) {
  if (Be(e)) {
    e.forEach(
      (_, C) => Bo(
        _,
        s && (Be(s) ? s[C] : s),
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
  const i = n.shapeFlag & 4 ? Xn(n.component) : n.el, c = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === st ? u.refs = {} : u.refs, g = u.setupState, w = Qe(g), p = g === st ? ai : (_) => Ze(w, _);
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
    sn(d, u, 12, [c, v]);
  else {
    const _ = ct(d), C = Ct(d);
    if (_ || C) {
      const b = () => {
        if (e.f) {
          const I = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Be(I) && Fa(I, i);
          else if (Be(I))
            I.includes(i) || I.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const M = [i];
            d.value = M, e.k && (v[e.k] = M);
          }
        } else _ ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const I = () => {
          b(), Dn.delete(e);
        };
        I.id = -1, Dn.set(e, I), St(I, o);
      } else
        wl(e), b();
    }
  }
}
function wl(e) {
  const s = Dn.get(e);
  s && (s.flags |= 8, Dn.delete(e));
}
jn().requestIdleCallback;
jn().cancelIdleCallback;
const po = (e) => !!e.type.__asyncLoader, qn = (e) => e.type.__isKeepAlive;
function jc(e, s) {
  Wi(e, "a", s);
}
function Hc(e, s) {
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
  if (Yn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      qn(l.parent.vnode) && Kc(n, s, o, l), l = l.parent;
  }
}
function Kc(e, s, o, n) {
  const l = Yn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  Ws(() => {
    Fa(n[s], l);
  }, o);
}
function Yn(e, s, o = $t, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      Ss();
      const u = on(o), d = os(s, o, e, c);
      return u(), Is(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ts = (e) => (s, o = $t) => {
  (!Zo || e === "sp") && Yn(e, (...n) => s(...n), o);
}, qc = Ts("bm"), Je = Ts("m"), Yc = Ts(
  "bu"
), Gi = Ts("u"), ji = Ts(
  "bum"
), Ws = Ts("um"), Jc = Ts(
  "sp"
), Qc = Ts("rtg"), Xc = Ts("rtc");
function Zc(e, s = $t) {
  Yn("ec", e, s);
}
const eu = "components", Hi = Symbol.for("v-ndc");
function Xa(e) {
  return ct(e) ? tu(eu, e, !1) || e : e || Hi;
}
function tu(e, s, o = !0, n = !1) {
  const l = wt || $t;
  if (l) {
    const i = l.type;
    {
      const u = Wu(
        i,
        !1
      );
      if (u && (u === s || u === qt(s) || u === Wn(qt(s))))
        return i;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      _l(l[e] || i[e], s) || // global registration
      _l(l.appContext[e], s)
    );
    return !c && n ? i : c;
  }
}
function _l(e, s) {
  return e && (e[s] || e[qt(s)] || e[Wn(qt(s))]);
}
function pe(e, s, o, n) {
  let l;
  const i = o, c = Be(e);
  if (c || ct(e)) {
    const u = c && eo(e);
    let d = !1, m = !1;
    u && (d = !jt(e), m = Es(e), e = Hn(e)), l = new Array(e.length);
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
  } else if (tt(e))
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
function oo(e, s) {
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
  if (wt.ce || wt.parent && po(wt.parent) && wt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), D(
      H,
      null,
      [S("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Ki(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = D(
    H,
    {
      key: (u && !ts(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function Ki(e) {
  return e.some((s) => Xo(s) ? !(s.type === bt || s.type === H && !Ki(s.children)) : !0) ? e : null;
}
const Sa = (e) => e ? fr(e) ? Xn(e) : Sa(e.parent) : null, Vo = (
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
    $parent: (e) => Sa(e.parent),
    $root: (e) => Sa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ja(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = yt.bind(e.proxy)),
    $watch: (e) => mu.bind(e)
  })
), ra = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), su = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: c, type: u, appContext: d } = e;
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
        if (ra(n, s))
          return c[s] = 1, n[s];
        if (l !== st && Ze(l, s))
          return c[s] = 2, l[s];
        if (Ze(i, s))
          return c[s] = 3, i[s];
        if (o !== st && Ze(o, s))
          return c[s] = 4, o[s];
        Ia && (c[s] = 0);
      }
    }
    const m = Vo[s];
    let v, g;
    if (m)
      return s === "$attrs" && kt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== st && Ze(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, Ze(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return ra(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== st && u[0] !== "$" && Ze(e, u) || ra(s, u) || Ze(i, u) || Ze(n, u) || Ze(Vo, u) || Ze(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
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
let Ia = !0;
function ou(e) {
  const s = Yi(e), o = e.proxy, n = e.ctx;
  Ia = !1, s.beforeCreate && bl(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
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
    beforeDestroy: I,
    beforeUnmount: M,
    destroyed: x,
    unmounted: E,
    render: K,
    renderTracked: q,
    renderTriggered: V,
    errorCaptured: T,
    serverPrefetch: P,
    // public API
    expose: L,
    inheritAttrs: ae,
    // assets
    components: Z,
    directives: F,
    filters: G
  } = s;
  if (m && nu(m, n, null), c)
    for (const se in c) {
      const X = c[se];
      Ge(X) && (n[se] = X.bind(o));
    }
  if (l) {
    const se = l.call(o, o);
    tt(se) && (e.data = Vs(se));
  }
  if (Ia = !0, i)
    for (const se in i) {
      const X = i[se], he = Ge(X) ? X.bind(o, o) : Ge(X.get) ? X.get.bind(o, o) : gs, we = !Ge(X) && Ge(X.set) ? X.set.bind(o) : gs, re = N({
        get: he,
        set: we
      });
      Object.defineProperty(n, se, {
        enumerable: !0,
        configurable: !0,
        get: () => re.value,
        set: (ve) => re.value = ve
      });
    }
  if (u)
    for (const se in u)
      qi(u[se], n, o, se);
  if (d) {
    const se = Ge(d) ? d.call(o) : d;
    Reflect.ownKeys(se).forEach((X) => {
      uu(X, se[X]);
    });
  }
  v && bl(v, e, "c");
  function O(se, X) {
    Be(X) ? X.forEach((he) => se(he.bind(o))) : X && se(X.bind(o));
  }
  if (O(qc, g), O(Je, w), O(Yc, p), O(Gi, _), O(jc, C), O(Hc, b), O(Zc, T), O(Xc, q), O(Qc, V), O(ji, M), O(Ws, E), O(Jc, P), Be(L))
    if (L.length) {
      const se = e.exposed || (e.exposed = {});
      L.forEach((X) => {
        Object.defineProperty(se, X, {
          get: () => o[X],
          set: (he) => o[X] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === gs && (e.render = K), ae != null && (e.inheritAttrs = ae), Z && (e.components = Z), F && (e.directives = F), P && Vi(e);
}
function nu(e, s, o = gs) {
  Be(e) && (e = Ea(e));
  for (const n in e) {
    const l = e[n];
    let i;
    tt(l) ? "default" in l ? i = Cn(
      l.from || n,
      l.default,
      !0
    ) : i = Cn(l.from || n) : i = Cn(l), Ct(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
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
  let l = n.includes(".") ? Xi(o, n) : () => o[n];
  if (ct(e)) {
    const i = s[e];
    Ge(i) && gt(l, i);
  } else if (Ge(e))
    gt(l, e.bind(o));
  else if (tt(e))
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
    config: { optionMergeStrategies: c }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => Ln(d, m, c, !0)
  ), Ln(d, s, c)), tt(s) && i.set(s, d), d;
}
function Ln(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && Ln(e, i, o, !0), l && l.forEach(
    (c) => Ln(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const u = au[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const au = {
  data: $l,
  props: Cl,
  emits: Cl,
  // objects
  methods: Oo,
  computed: Oo,
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
  components: Oo,
  directives: Oo,
  // watch
  watch: iu,
  // provide / inject
  provide: $l,
  inject: lu
};
function $l(e, s) {
  return s ? e ? function() {
    return pt(
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function lu(e, s) {
  return Oo(Ea(e), Ea(s));
}
function Ea(e) {
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
function Oo(e, s) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Cl(e, s) {
  return e ? Be(e) && Be(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    kl(e),
    kl(s ?? {})
  ) : s;
}
function iu(e, s) {
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
let ru = 0;
function cu(e, s) {
  return function(n, l = null) {
    Ge(n) || (n = pt({}, n)), l != null && !tt(l) && (l = null);
    const i = Ji(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: ru++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: ju,
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
        if (!d) {
          const p = m._ceVNode || S(n, l);
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
function uu(e, s) {
  if ($t) {
    let o = $t.provides;
    const n = $t.parent && $t.parent.provides;
    n === o && (o = $t.provides = Object.create(n)), o[e] = s;
  }
}
function Cn(e, s, o = !1) {
  const n = ol();
  if (n || go) {
    let l = go ? go._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const du = Symbol.for("v-scx"), fu = () => Cn(du);
function gt(e, s, o) {
  return Qi(e, s, o);
}
function Qi(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, u = pt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (Zo) {
    if (i === "sync") {
      const p = fu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = $t;
  u.call = (p, _, C) => os(p, v, _, C);
  let g = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, u.scheduler = (p, _) => {
    _ ? p() : Ja(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Uc(e, s, u);
  return Zo && (m ? m.push(w) : d && w()), w;
}
function mu(e, s, o) {
  const n = this.proxy, l = ct(e) ? e.includes(".") ? Xi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Ge(s) ? i = s : (i = s.handler, o = s);
  const c = on(this), u = Qi(l, i.bind(n), o);
  return c(), u;
}
function Xi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const vu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${qt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function pu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && vu(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => ct(v) ? v.trim() : v)), c.number && (l = o.map(Gn)));
  let u, d = n[u = sa(s)] || // also try camelCase event handler (#2249)
  n[u = sa(qt(s))];
  !d && i && (d = n[u = sa(Bs(s))]), d && os(
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
const gu = /* @__PURE__ */ new WeakMap();
function Zi(e, s, o = !1) {
  const n = o ? gu : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, u = !1;
  if (!Ge(e)) {
    const d = (m) => {
      const v = Zi(m, s, !0);
      v && (u = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (tt(e) && n.set(e, null), null) : (Be(i) ? i.forEach((d) => c[d] = null) : pt(c, i), tt(e) && n.set(e, c), c);
}
function Jn(e, s) {
  return !e || !Bn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, Bs(s)) || Ze(e, s));
}
function xl(e) {
  const {
    type: s,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
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
  } = e, b = Mn(e);
  let I, M;
  try {
    if (o.shapeFlag & 4) {
      const E = l || n, K = E;
      I = ps(
        m.call(
          K,
          E,
          v,
          g,
          p,
          w,
          _
        )
      ), M = u;
    } else {
      const E = s;
      I = ps(
        E.length > 1 ? E(
          g,
          { attrs: u, slots: c, emit: d }
        ) : E(
          g,
          null
        )
      ), M = s.props ? u : hu(u);
    }
  } catch (E) {
    Wo.length = 0, Kn(E, e, 1), I = S(bt);
  }
  let x = I;
  if (M && C !== !1) {
    const E = Object.keys(M), { shapeFlag: K } = x;
    E.length && K & 7 && (i && E.some(za) && (M = yu(
      M,
      i
    )), x = zs(x, M, !1, !0));
  }
  return o.dirs && (x = zs(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(o.dirs) : o.dirs), o.transition && so(x, o.transition), I = x, Mn(b), I;
}
const hu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Bn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, yu = (e, s) => {
  const o = {};
  for (const n in e)
    (!za(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function wu(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: c, children: u, patchFlag: d } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Sl(n, c, m) : !!c;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== n[w] && !Jn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Sl(n, c, m) : !0 : !!c;
  return !1;
}
function Sl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !Jn(o, i))
      return !0;
  }
  return !1;
}
function _u({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const er = {}, tr = () => Object.create(er), sr = (e) => Object.getPrototypeOf(e) === er;
function ku(e, s, o, n = !1) {
  const l = {}, i = tr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), or(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : Pc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function bu(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, u = Qe(l), [d] = e.propsOptions;
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
        if (Jn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = qt(w);
            l[_] = Ta(
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
      o[v] !== void 0) && (l[g] = Ta(
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
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (No(d))
        continue;
      const m = s[d];
      let v;
      l && Ze(l, v = qt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Jn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, c = !0);
    }
  if (i) {
    const d = Qe(o), m = u || st;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = Ta(
        l,
        d,
        g,
        m[g],
        e,
        !Ze(m, g)
      );
    }
  }
  return c;
}
function Ta(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const u = Ze(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Ge(d)) {
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
    c[
      0
      /* shouldCast */
    ] && (i && !u ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Bs(o)) && (n = !0));
  }
  return n;
}
const $u = /* @__PURE__ */ new WeakMap();
function nr(e, s, o = !1) {
  const n = o ? $u : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, u = [];
  let d = !1;
  if (!Ge(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = nr(g, s, !0);
      pt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return tt(e) && n.set(e, fo), fo;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = qt(i[v]);
      Il(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = qt(v);
      if (Il(g)) {
        const w = i[v], p = c[g] = Be(w) || Ge(w) ? { type: w } : pt({}, w), _ = p.type;
        let C = !1, b = !0;
        if (Be(_))
          for (let I = 0; I < _.length; ++I) {
            const M = _[I], x = Ge(M) && M.name;
            if (x === "Boolean") {
              C = !0;
              break;
            } else x === "String" && (b = !1);
          }
        else
          C = Ge(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = b, (C || Ze(p, "default")) && u.push(g);
      }
    }
  const m = [c, u];
  return tt(e) && n.set(e, m), m;
}
function Il(e) {
  return e[0] !== "$" && !No(e);
}
const Za = (e) => e === "_" || e === "_ctx" || e === "$stable", el = (e) => Be(e) ? e.map(ps) : [ps(e)], Cu = (e, s, o) => {
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
      s[l] = Cu(l, i, n);
    else if (i != null) {
      const c = el(i);
      s[l] = () => c;
    }
  }
}, lr = (e, s) => {
  const o = el(s);
  e.slots.default = () => o;
}, ir = (e, s, o) => {
  for (const n in s)
    (o || !Za(n)) && (e[n] = s[n]);
}, xu = (e, s, o) => {
  const n = e.slots = tr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (ir(n, s, o), o && ci(n, "_", l, !0)) : ar(s, n);
  } else s && lr(e, s);
}, Su = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : ir(l, s, o) : (i = !s.$stable, ar(s, l)), c = s;
  } else s && (lr(e, s), c = { default: 1 });
  if (i)
    for (const u in l)
      !Za(u) && c[u] == null && delete l[u];
}, St = Ru;
function Iu(e) {
  return Eu(e);
}
function Eu(e, s) {
  const o = jn();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: c,
    createText: u,
    createComment: d,
    setText: m,
    setElementText: v,
    parentNode: g,
    nextSibling: w,
    setScopeId: p = gs,
    insertStaticContent: _
  } = e, C = (A, R, z, W = null, ee = null, ie = null, ye = void 0, $e = null, ne = !!R.dynamicChildren) => {
    if (A === R)
      return;
    A && !Xs(A, R) && (W = Pe(A), ve(A, ee, ie, !0), A = null), R.patchFlag === -2 && (ne = !1, R.dynamicChildren = null);
    const { type: fe, ref: Le, shapeFlag: Ee } = R;
    switch (fe) {
      case Qn:
        b(A, R, z, W);
        break;
      case bt:
        I(A, R, z, W);
        break;
      case ua:
        A == null && M(R, z, W, ye);
        break;
      case H:
        Z(
          A,
          R,
          z,
          W,
          ee,
          ie,
          ye,
          $e,
          ne
        );
        break;
      default:
        Ee & 1 ? K(
          A,
          R,
          z,
          W,
          ee,
          ie,
          ye,
          $e,
          ne
        ) : Ee & 6 ? F(
          A,
          R,
          z,
          W,
          ee,
          ie,
          ye,
          $e,
          ne
        ) : (Ee & 64 || Ee & 128) && fe.process(
          A,
          R,
          z,
          W,
          ee,
          ie,
          ye,
          $e,
          ne,
          De
        );
    }
    Le != null && ee ? Bo(Le, A && A.ref, ie, R || A, !R) : Le == null && A && A.ref != null && Bo(A.ref, null, ie, A, !0);
  }, b = (A, R, z, W) => {
    if (A == null)
      n(
        R.el = u(R.children),
        z,
        W
      );
    else {
      const ee = R.el = A.el;
      R.children !== A.children && m(ee, R.children);
    }
  }, I = (A, R, z, W) => {
    A == null ? n(
      R.el = d(R.children || ""),
      z,
      W
    ) : R.el = A.el;
  }, M = (A, R, z, W) => {
    [A.el, A.anchor] = _(
      A.children,
      R,
      z,
      W,
      A.el,
      A.anchor
    );
  }, x = ({ el: A, anchor: R }, z, W) => {
    let ee;
    for (; A && A !== R; )
      ee = w(A), n(A, z, W), A = ee;
    n(R, z, W);
  }, E = ({ el: A, anchor: R }) => {
    let z;
    for (; A && A !== R; )
      z = w(A), l(A), A = z;
    l(R);
  }, K = (A, R, z, W, ee, ie, ye, $e, ne) => {
    if (R.type === "svg" ? ye = "svg" : R.type === "math" && (ye = "mathml"), A == null)
      q(
        R,
        z,
        W,
        ee,
        ie,
        ye,
        $e,
        ne
      );
    else {
      const fe = A.el && A.el._isVueCE ? A.el : null;
      try {
        fe && fe._beginPatch(), P(
          A,
          R,
          ee,
          ie,
          ye,
          $e,
          ne
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, q = (A, R, z, W, ee, ie, ye, $e) => {
    let ne, fe;
    const { props: Le, shapeFlag: Ee, transition: oe, dirs: Q } = A;
    if (ne = A.el = c(
      A.type,
      ie,
      Le && Le.is,
      Le
    ), Ee & 8 ? v(ne, A.children) : Ee & 16 && T(
      A.children,
      ne,
      null,
      W,
      ee,
      ca(A, ie),
      ye,
      $e
    ), Q && Ks(A, null, W, "created"), V(ne, A, A.scopeId, ye, W), Le) {
      for (const Ce in Le)
        Ce !== "value" && !No(Ce) && i(ne, Ce, null, Le[Ce], ie, W);
      "value" in Le && i(ne, "value", null, Le.value, ie), (fe = Le.onVnodeBeforeMount) && us(fe, W, A);
    }
    Q && Ks(A, null, W, "beforeMount");
    const Ae = Tu(ee, oe);
    Ae && oe.beforeEnter(ne), n(ne, R, z), ((fe = Le && Le.onVnodeMounted) || Ae || Q) && St(() => {
      fe && us(fe, W, A), Ae && oe.enter(ne), Q && Ks(A, null, W, "mounted");
    }, ee);
  }, V = (A, R, z, W, ee) => {
    if (z && p(A, z), W)
      for (let ie = 0; ie < W.length; ie++)
        p(A, W[ie]);
    if (ee) {
      let ie = ee.subTree;
      if (R === ie || cr(ie.type) && (ie.ssContent === R || ie.ssFallback === R)) {
        const ye = ee.vnode;
        V(
          A,
          ye,
          ye.scopeId,
          ye.slotScopeIds,
          ee.parent
        );
      }
    }
  }, T = (A, R, z, W, ee, ie, ye, $e, ne = 0) => {
    for (let fe = ne; fe < A.length; fe++) {
      const Le = A[fe] = $e ? Ns(A[fe]) : ps(A[fe]);
      C(
        null,
        Le,
        R,
        z,
        W,
        ee,
        ie,
        ye,
        $e
      );
    }
  }, P = (A, R, z, W, ee, ie, ye) => {
    const $e = R.el = A.el;
    let { patchFlag: ne, dynamicChildren: fe, dirs: Le } = R;
    ne |= A.patchFlag & 16;
    const Ee = A.props || st, oe = R.props || st;
    let Q;
    if (z && qs(z, !1), (Q = oe.onVnodeBeforeUpdate) && us(Q, z, R, A), Le && Ks(R, A, z, "beforeUpdate"), z && qs(z, !0), (Ee.innerHTML && oe.innerHTML == null || Ee.textContent && oe.textContent == null) && v($e, ""), fe ? L(
      A.dynamicChildren,
      fe,
      $e,
      z,
      W,
      ca(R, ee),
      ie
    ) : ye || X(
      A,
      R,
      $e,
      null,
      z,
      W,
      ca(R, ee),
      ie,
      !1
    ), ne > 0) {
      if (ne & 16)
        ae($e, Ee, oe, z, ee);
      else if (ne & 2 && Ee.class !== oe.class && i($e, "class", null, oe.class, ee), ne & 4 && i($e, "style", Ee.style, oe.style, ee), ne & 8) {
        const Ae = R.dynamicProps;
        for (let Ce = 0; Ce < Ae.length; Ce++) {
          const be = Ae[Ce], j = Ee[be], B = oe[be];
          (B !== j || be === "value") && i($e, be, j, B, ee, z);
        }
      }
      ne & 1 && A.children !== R.children && v($e, R.children);
    } else !ye && fe == null && ae($e, Ee, oe, z, ee);
    ((Q = oe.onVnodeUpdated) || Le) && St(() => {
      Q && us(Q, z, R, A), Le && Ks(R, A, z, "updated");
    }, W);
  }, L = (A, R, z, W, ee, ie, ye) => {
    for (let $e = 0; $e < R.length; $e++) {
      const ne = A[$e], fe = R[$e], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xs(ne, fe) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? g(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      C(
        ne,
        fe,
        Le,
        null,
        W,
        ee,
        ie,
        ye,
        !0
      );
    }
  }, ae = (A, R, z, W, ee) => {
    if (R !== z) {
      if (R !== st)
        for (const ie in R)
          !No(ie) && !(ie in z) && i(
            A,
            ie,
            R[ie],
            null,
            ee,
            W
          );
      for (const ie in z) {
        if (No(ie)) continue;
        const ye = z[ie], $e = R[ie];
        ye !== $e && ie !== "value" && i(A, ie, $e, ye, ee, W);
      }
      "value" in z && i(A, "value", R.value, z.value, ee);
    }
  }, Z = (A, R, z, W, ee, ie, ye, $e, ne) => {
    const fe = R.el = A ? A.el : u(""), Le = R.anchor = A ? A.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: oe, slotScopeIds: Q } = R;
    Q && ($e = $e ? $e.concat(Q) : Q), A == null ? (n(fe, z, W), n(Le, z, W), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      z,
      Le,
      ee,
      ie,
      ye,
      $e,
      ne
    )) : Ee > 0 && Ee & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (L(
      A.dynamicChildren,
      oe,
      z,
      ee,
      ie,
      ye,
      $e
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || ee && R === ee.subTree) && tl(
      A,
      R,
      !0
      /* shallow */
    )) : X(
      A,
      R,
      z,
      Le,
      ee,
      ie,
      ye,
      $e,
      ne
    );
  }, F = (A, R, z, W, ee, ie, ye, $e, ne) => {
    R.slotScopeIds = $e, A == null ? R.shapeFlag & 512 ? ee.ctx.activate(
      R,
      z,
      W,
      ye,
      ne
    ) : G(
      R,
      z,
      W,
      ee,
      ie,
      ye,
      ne
    ) : J(A, R, ne);
  }, G = (A, R, z, W, ee, ie, ye) => {
    const $e = A.component = Uu(
      A,
      W,
      ee
    );
    if (qn(A) && ($e.ctx.renderer = De), zu($e, !1, ye), $e.asyncDep) {
      if (ee && ee.registerDep($e, O, ye), !A.el) {
        const ne = $e.subTree = S(bt);
        I(null, ne, R, z), A.placeholder = ne.el;
      }
    } else
      O(
        $e,
        A,
        R,
        z,
        ee,
        ie,
        ye
      );
  }, J = (A, R, z) => {
    const W = R.component = A.component;
    if (wu(A, R, z))
      if (W.asyncDep && !W.asyncResolved) {
        se(W, R, z);
        return;
      } else
        W.next = R, W.update();
    else
      R.el = A.el, W.vnode = R;
  }, O = (A, R, z, W, ee, ie, ye) => {
    const $e = () => {
      if (A.isMounted) {
        let { next: Ee, bu: oe, u: Q, parent: Ae, vnode: Ce } = A;
        {
          const Ve = rr(A);
          if (Ve) {
            Ee && (Ee.el = Ce.el, se(A, Ee, ye)), Ve.asyncDep.then(() => {
              A.isUnmounted || $e();
            });
            return;
          }
        }
        let be = Ee, j;
        qs(A, !1), Ee ? (Ee.el = Ce.el, se(A, Ee, ye)) : Ee = Ce, oe && bn(oe), (j = Ee.props && Ee.props.onVnodeBeforeUpdate) && us(j, Ae, Ee, Ce), qs(A, !0);
        const B = xl(A), ue = A.subTree;
        A.subTree = B, C(
          ue,
          B,
          // parent may have changed if it's in a teleport
          g(ue.el),
          // anchor may have changed if it's in a fragment
          Pe(ue),
          A,
          ee,
          ie
        ), Ee.el = B.el, be === null && _u(A, B.el), Q && St(Q, ee), (j = Ee.props && Ee.props.onVnodeUpdated) && St(
          () => us(j, Ae, Ee, Ce),
          ee
        );
      } else {
        let Ee;
        const { el: oe, props: Q } = R, { bm: Ae, m: Ce, parent: be, root: j, type: B } = A, ue = po(R);
        qs(A, !1), Ae && bn(Ae), !ue && (Ee = Q && Q.onVnodeBeforeMount) && us(Ee, be, R), qs(A, !0);
        {
          j.ce && // @ts-expect-error _def is private
          j.ce._def.shadowRoot !== !1 && j.ce._injectChildStyle(B);
          const Ve = A.subTree = xl(A);
          C(
            null,
            Ve,
            z,
            W,
            A,
            ee,
            ie
          ), R.el = Ve.el;
        }
        if (Ce && St(Ce, ee), !ue && (Ee = Q && Q.onVnodeMounted)) {
          const Ve = R;
          St(
            () => us(Ee, be, Ve),
            ee
          );
        }
        (R.shapeFlag & 256 || be && po(be.vnode) && be.vnode.shapeFlag & 256) && A.a && St(A.a, ee), A.isMounted = !0, R = z = W = null;
      }
    };
    A.scope.on();
    const ne = A.effect = new mi($e);
    A.scope.off();
    const fe = A.update = ne.run.bind(ne), Le = A.job = ne.runIfDirty.bind(ne);
    Le.i = A, Le.id = A.uid, ne.scheduler = () => Ja(Le), qs(A, !0), fe();
  }, se = (A, R, z) => {
    R.component = A;
    const W = A.vnode.props;
    A.vnode = R, A.next = null, bu(A, R.props, W, z), Su(A, R.children, z), Ss(), vl(A), Is();
  }, X = (A, R, z, W, ee, ie, ye, $e, ne = !1) => {
    const fe = A && A.children, Le = A ? A.shapeFlag : 0, Ee = R.children, { patchFlag: oe, shapeFlag: Q } = R;
    if (oe > 0) {
      if (oe & 128) {
        we(
          fe,
          Ee,
          z,
          W,
          ee,
          ie,
          ye,
          $e,
          ne
        );
        return;
      } else if (oe & 256) {
        he(
          fe,
          Ee,
          z,
          W,
          ee,
          ie,
          ye,
          $e,
          ne
        );
        return;
      }
    }
    Q & 8 ? (Le & 16 && Te(fe, ee, ie), Ee !== fe && v(z, Ee)) : Le & 16 ? Q & 16 ? we(
      fe,
      Ee,
      z,
      W,
      ee,
      ie,
      ye,
      $e,
      ne
    ) : Te(fe, ee, ie, !0) : (Le & 8 && v(z, ""), Q & 16 && T(
      Ee,
      z,
      W,
      ee,
      ie,
      ye,
      $e,
      ne
    ));
  }, he = (A, R, z, W, ee, ie, ye, $e, ne) => {
    A = A || fo, R = R || fo;
    const fe = A.length, Le = R.length, Ee = Math.min(fe, Le);
    let oe;
    for (oe = 0; oe < Ee; oe++) {
      const Q = R[oe] = ne ? Ns(R[oe]) : ps(R[oe]);
      C(
        A[oe],
        Q,
        z,
        null,
        ee,
        ie,
        ye,
        $e,
        ne
      );
    }
    fe > Le ? Te(
      A,
      ee,
      ie,
      !0,
      !1,
      Ee
    ) : T(
      R,
      z,
      W,
      ee,
      ie,
      ye,
      $e,
      ne,
      Ee
    );
  }, we = (A, R, z, W, ee, ie, ye, $e, ne) => {
    let fe = 0;
    const Le = R.length;
    let Ee = A.length - 1, oe = Le - 1;
    for (; fe <= Ee && fe <= oe; ) {
      const Q = A[fe], Ae = R[fe] = ne ? Ns(R[fe]) : ps(R[fe]);
      if (Xs(Q, Ae))
        C(
          Q,
          Ae,
          z,
          null,
          ee,
          ie,
          ye,
          $e,
          ne
        );
      else
        break;
      fe++;
    }
    for (; fe <= Ee && fe <= oe; ) {
      const Q = A[Ee], Ae = R[oe] = ne ? Ns(R[oe]) : ps(R[oe]);
      if (Xs(Q, Ae))
        C(
          Q,
          Ae,
          z,
          null,
          ee,
          ie,
          ye,
          $e,
          ne
        );
      else
        break;
      Ee--, oe--;
    }
    if (fe > Ee) {
      if (fe <= oe) {
        const Q = oe + 1, Ae = Q < Le ? R[Q].el : W;
        for (; fe <= oe; )
          C(
            null,
            R[fe] = ne ? Ns(R[fe]) : ps(R[fe]),
            z,
            Ae,
            ee,
            ie,
            ye,
            $e,
            ne
          ), fe++;
      }
    } else if (fe > oe)
      for (; fe <= Ee; )
        ve(A[fe], ee, ie, !0), fe++;
    else {
      const Q = fe, Ae = fe, Ce = /* @__PURE__ */ new Map();
      for (fe = Ae; fe <= oe; fe++) {
        const lt = R[fe] = ne ? Ns(R[fe]) : ps(R[fe]);
        lt.key != null && Ce.set(lt.key, fe);
      }
      let be, j = 0;
      const B = oe - Ae + 1;
      let ue = !1, Ve = 0;
      const Xe = new Array(B);
      for (fe = 0; fe < B; fe++) Xe[fe] = 0;
      for (fe = Q; fe <= Ee; fe++) {
        const lt = A[fe];
        if (j >= B) {
          ve(lt, ee, ie, !0);
          continue;
        }
        let dt;
        if (lt.key != null)
          dt = Ce.get(lt.key);
        else
          for (be = Ae; be <= oe; be++)
            if (Xe[be - Ae] === 0 && Xs(lt, R[be])) {
              dt = be;
              break;
            }
        dt === void 0 ? ve(lt, ee, ie, !0) : (Xe[dt - Ae] = fe + 1, dt >= Ve ? Ve = dt : ue = !0, C(
          lt,
          R[dt],
          z,
          null,
          ee,
          ie,
          ye,
          $e,
          ne
        ), j++);
      }
      const vt = ue ? Pu(Xe) : fo;
      for (be = vt.length - 1, fe = B - 1; fe >= 0; fe--) {
        const lt = Ae + fe, dt = R[lt], Mt = R[lt + 1], Bt = lt + 1 < Le ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mt.el || Mt.placeholder
        ) : W;
        Xe[fe] === 0 ? C(
          null,
          dt,
          z,
          Bt,
          ee,
          ie,
          ye,
          $e,
          ne
        ) : ue && (be < 0 || fe !== vt[be] ? re(dt, z, Bt, 2) : be--);
      }
    }
  }, re = (A, R, z, W, ee = null) => {
    const { el: ie, type: ye, transition: $e, children: ne, shapeFlag: fe } = A;
    if (fe & 6) {
      re(A.component.subTree, R, z, W);
      return;
    }
    if (fe & 128) {
      A.suspense.move(R, z, W);
      return;
    }
    if (fe & 64) {
      ye.move(A, R, z, De);
      return;
    }
    if (ye === H) {
      n(ie, R, z);
      for (let Ee = 0; Ee < ne.length; Ee++)
        re(ne[Ee], R, z, W);
      n(A.anchor, R, z);
      return;
    }
    if (ye === ua) {
      x(A, R, z);
      return;
    }
    if (W !== 2 && fe & 1 && $e)
      if (W === 0)
        $e.beforeEnter(ie), n(ie, R, z), St(() => $e.enter(ie), ee);
      else {
        const { leave: Ee, delayLeave: oe, afterLeave: Q } = $e, Ae = () => {
          A.ctx.isUnmounted ? l(ie) : n(ie, R, z);
        }, Ce = () => {
          ie._isLeaving && ie[bs](
            !0
            /* cancelled */
          ), Ee(ie, () => {
            Ae(), Q && Q();
          });
        };
        oe ? oe(ie, Ae, Ce) : Ce();
      }
    else
      n(ie, R, z);
  }, ve = (A, R, z, W = !1, ee = !1) => {
    const {
      type: ie,
      props: ye,
      ref: $e,
      children: ne,
      dynamicChildren: fe,
      shapeFlag: Le,
      patchFlag: Ee,
      dirs: oe,
      cacheIndex: Q
    } = A;
    if (Ee === -2 && (ee = !1), $e != null && (Ss(), Bo($e, null, z, A, !0), Is()), Q != null && (R.renderCache[Q] = void 0), Le & 256) {
      R.ctx.deactivate(A);
      return;
    }
    const Ae = Le & 1 && oe, Ce = !po(A);
    let be;
    if (Ce && (be = ye && ye.onVnodeBeforeUnmount) && us(be, R, A), Le & 6)
      ze(A.component, z, W);
    else {
      if (Le & 128) {
        A.suspense.unmount(z, W);
        return;
      }
      Ae && Ks(A, null, R, "beforeUnmount"), Le & 64 ? A.type.remove(
        A,
        R,
        z,
        De,
        W
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ie !== H || Ee > 0 && Ee & 64) ? Te(
        fe,
        R,
        z,
        !1,
        !0
      ) : (ie === H && Ee & 384 || !ee && Le & 16) && Te(ne, R, z), W && Se(A);
    }
    (Ce && (be = ye && ye.onVnodeUnmounted) || Ae) && St(() => {
      be && us(be, R, A), Ae && Ks(A, null, R, "unmounted");
    }, z);
  }, Se = (A) => {
    const { type: R, el: z, anchor: W, transition: ee } = A;
    if (R === H) {
      Fe(z, W);
      return;
    }
    if (R === ua) {
      E(A);
      return;
    }
    const ie = () => {
      l(z), ee && !ee.persisted && ee.afterLeave && ee.afterLeave();
    };
    if (A.shapeFlag & 1 && ee && !ee.persisted) {
      const { leave: ye, delayLeave: $e } = ee, ne = () => ye(z, ie);
      $e ? $e(A.el, ie, ne) : ne();
    } else
      ie();
  }, Fe = (A, R) => {
    let z;
    for (; A !== R; )
      z = w(A), l(A), A = z;
    l(R);
  }, ze = (A, R, z) => {
    const { bum: W, scope: ee, job: ie, subTree: ye, um: $e, m: ne, a: fe } = A;
    El(ne), El(fe), W && bn(W), ee.stop(), ie && (ie.flags |= 8, ve(ye, A, R, z)), $e && St($e, R), St(() => {
      A.isUnmounted = !0;
    }, R);
  }, Te = (A, R, z, W = !1, ee = !1, ie = 0) => {
    for (let ye = ie; ye < A.length; ye++)
      ve(A[ye], R, z, W, ee);
  }, Pe = (A) => {
    if (A.shapeFlag & 6)
      return Pe(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const R = w(A.anchor || A.el), z = R && R[Di];
    return z ? w(z) : R;
  };
  let ke = !1;
  const ge = (A, R, z) => {
    A == null ? R._vnode && ve(R._vnode, null, null, !0) : C(
      R._vnode || null,
      A,
      R,
      null,
      null,
      null,
      z
    ), R._vnode = A, ke || (ke = !0, vl(), Pi(), ke = !1);
  }, De = {
    p: C,
    um: ve,
    m: re,
    r: Se,
    mt: G,
    mc: T,
    pc: X,
    pbc: L,
    n: Pe,
    o: e
  };
  return {
    render: ge,
    hydrate: void 0,
    createApp: cu(ge)
  };
}
function ca({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function qs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Tu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function tl(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Be(n) && Be(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Ns(l[i]), u.el = c.el), !o && u.patchFlag !== -2 && tl(c, u)), u.type === Qn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === bt && !u.el && (u.el = c.el);
    }
}
function Pu(e) {
  const s = e.slice(), o = [0];
  let n, l, i, c, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[n] = l, o.push(n);
        continue;
      }
      for (i = 0, c = o.length - 1; i < c; )
        u = i + c >> 1, e[o[u]] < m ? i = u + 1 : c = u;
      m < e[o[i]] && (i > 0 && (s[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, c = o[i - 1]; i-- > 0; )
    o[i] = c, c = s[c];
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
function Ru(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : Bc(e);
}
const H = Symbol.for("v-fgt"), Qn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), ua = Symbol.for("v-stc"), Wo = [];
let Ut = null;
function a(e = !1) {
  Wo.push(Ut = e ? null : []);
}
function Mu() {
  Wo.pop(), Ut = Wo[Wo.length - 1] || null;
}
let Qo = 1;
function An(e, s = !1) {
  Qo += e, e < 0 && Ut && s && (Ut.hasOnce = !0);
}
function ur(e) {
  return e.dynamicChildren = Qo > 0 ? Ut || fo : null, Mu(), Qo > 0 && Ut && Ut.push(e), e;
}
function r(e, s, o, n, l, i) {
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
function D(e, s, o, n, l) {
  return ur(
    S(
      e,
      s,
      o,
      n,
      l,
      !0
    )
  );
}
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const dr = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || Ct(e) || Ge(e) ? { i: wt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === H ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && dr(s),
    ref: s && xn(s),
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
    ctx: wt
  };
  return u ? (sl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ct(o) ? 8 : 16), Qo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Ut && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Ut.push(d), d;
}
const S = Du;
function Du(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Hi) && (e = bt), Xo(e)) {
    const u = zs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && sl(u, o), Qo > 0 && !i && Ut && (u.shapeFlag & 6 ? Ut[Ut.indexOf(e)] = u : Ut.push(u)), u.patchFlag = -2, u;
  }
  if (Gu(e) && (e = e.__vccOpts), s) {
    s = Lu(s);
    let { class: u, style: d } = s;
    u && !ct(u) && (s.class = Ie(u)), tt(d) && (Ya(d) && !Be(d) && (d = pt({}, d)), s.style = Ft(d));
  }
  const c = ct(e) ? 1 : cr(e) ? 128 : Li(e) ? 64 : tt(e) ? 4 : Ge(e) ? 2 : 0;
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
function Lu(e) {
  return e ? Ya(e) || sr(e) ? pt({}, e) : e : null;
}
function zs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: u, transition: d } = e, m = s ? Au(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && dr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat(xn(s)) : [i, xn(s)] : xn(s)
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
    ssContent: e.ssContent && zs(e.ssContent),
    ssFallback: e.ssFallback && zs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && so(
    v,
    d.clone(v)
  ), v;
}
function $(e = " ", s = 0) {
  return S(Qn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), D(bt, null, e)) : S(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? S(bt) : Be(e) ? S(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xo(e) ? Ns(e) : S(Qn, null, String(e));
}
function Ns(e) {
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
      !l && !sr(s) ? s._ctx = wt : l === 3 && wt && (wt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: wt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Au(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ie([s.class, n.class]));
      else if (l === "style")
        s.style = Ft([s.style, n.style]);
      else if (Bn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Be(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
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
const Ou = Ji();
let Nu = 0;
function Uu(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Ou, i = {
    uid: Nu++,
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
    scope: new uc(
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = pu.bind(null, i), e.ce && e.ce(i), i;
}
let $t = null;
const ol = () => $t || wt;
let On, Pa;
{
  const e = jn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  On = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => $t = o
  ), Pa = s(
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
function zu(e, s = !1, o = !1) {
  s && Pa(s);
  const { props: n, children: l } = e.vnode, i = fr(e);
  ku(e, n, i, s), xu(e, l, o || s);
  const c = i ? Fu(e, s) : void 0;
  return s && Pa(!1), c;
}
function Fu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, su);
  const { setup: n } = o;
  if (n) {
    Ss();
    const l = e.setupContext = n.length > 1 ? Vu(e) : null, i = on(e), c = sn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = li(c);
    if (Is(), i(), (u || e.sp) && !po(e) && Vi(e), u) {
      if (c.then(Tl, Tl), s)
        return c.then((d) => {
          Pl(e, d);
        }).catch((d) => {
          Kn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Pl(e, c);
  } else
    mr(e);
}
function Pl(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = Ii(s)), mr(e);
}
function mr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = on(e);
    Ss();
    try {
      ou(e);
    } finally {
      Is(), l();
    }
  }
}
const Bu = {
  get(e, s) {
    return kt(e, "get", ""), e[s];
  }
};
function Vu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Xn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ii(Rc(e.exposed)), {
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
function Wu(e, s = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Gu(e) {
  return Ge(e) && "__vccOpts" in e;
}
const N = (e, s) => Oc(e, s, Zo);
function nn(e, s, o) {
  try {
    An(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !Be(s) ? Xo(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Xo(o) && (o = [o]), S(e, s, o));
  } finally {
    An(1);
  }
}
const ju = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ra;
const Rl = typeof window < "u" && window.trustedTypes;
if (Rl)
  try {
    Ra = /* @__PURE__ */ Rl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const vr = Ra ? (e) => Ra.createHTML(e) : (e) => e, Hu = "http://www.w3.org/2000/svg", Ku = "http://www.w3.org/1998/Math/MathML", ks = typeof document < "u" ? document : null, Ml = ks && /* @__PURE__ */ ks.createElement("template"), qu = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? ks.createElementNS(Hu, e) : s === "mathml" ? ks.createElementNS(Ku, e) : o ? ks.createElement(e, { is: o }) : ks.createElement(e);
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
    const c = o ? o.previousSibling : s.lastChild;
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
      c ? c.nextSibling : s.firstChild,
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
  Ui,
  pr
), Yu = (e) => (e.displayName = "Transition", e.props = gr, e), Ju = /* @__PURE__ */ Yu(
  (e, { slots: s }) => nn(Gc, hr(e), s)
), Ys = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Dl = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function hr(e) {
  const s = {};
  for (const Z in e)
    Z in pr || (s[Z] = e[Z]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = i,
    appearActiveClass: m = c,
    appearToClass: v = u,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = Qu(l), C = _ && _[0], b = _ && _[1], {
    onBeforeEnter: I,
    onEnter: M,
    onEnterCancelled: x,
    onLeave: E,
    onLeaveCancelled: K,
    onBeforeAppear: q = I,
    onAppear: V = M,
    onAppearCancelled: T = x
  } = s, P = (Z, F, G, J) => {
    Z._enterCancelled = J, Ls(Z, F ? v : u), Ls(Z, F ? m : c), G && G();
  }, L = (Z, F) => {
    Z._isLeaving = !1, Ls(Z, g), Ls(Z, p), Ls(Z, w), F && F();
  }, ae = (Z) => (F, G) => {
    const J = Z ? V : M, O = () => P(F, Z, G);
    Ys(J, [F, O]), Ll(() => {
      Ls(F, Z ? d : i), fs(F, Z ? v : u), Dl(J) || Al(F, n, C, O);
    });
  };
  return pt(s, {
    onBeforeEnter(Z) {
      Ys(I, [Z]), fs(Z, i), fs(Z, c);
    },
    onBeforeAppear(Z) {
      Ys(q, [Z]), fs(Z, d), fs(Z, m);
    },
    onEnter: ae(!1),
    onAppear: ae(!0),
    onLeave(Z, F) {
      Z._isLeaving = !0;
      const G = () => L(Z, F);
      fs(Z, g), Z._enterCancelled ? (fs(Z, w), Ma(Z)) : (Ma(Z), fs(Z, w)), Ll(() => {
        Z._isLeaving && (Ls(Z, g), fs(Z, p), Dl(E) || Al(Z, n, b, G));
      }), Ys(E, [Z, G]);
    },
    onEnterCancelled(Z) {
      P(Z, !1, void 0, !0), Ys(x, [Z]);
    },
    onAppearCancelled(Z) {
      P(Z, !0, void 0, !0), Ys(T, [Z]);
    },
    onLeaveCancelled(Z) {
      L(Z), Ys(K, [Z]);
    }
  });
}
function Qu(e) {
  if (e == null)
    return null;
  if (tt(e))
    return [da(e.enter), da(e.leave)];
  {
    const s = da(e);
    return [s, s];
  }
}
function da(e) {
  return sc(e);
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
let Xu = 0;
function Al(e, s, o, n) {
  const l = e._endId = ++Xu, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: u, propCount: d } = yr(e, s);
  if (!c)
    return n();
  const m = c + "end";
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
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ds}Delay`), i = n(`${Ds}Duration`), c = Ol(l, i), u = n(`${Po}Delay`), d = n(`${Po}Duration`), m = Ol(u, d);
  let v = null, g = 0, w = 0;
  s === Ds ? c > 0 && (v = Ds, g = c, w = i.length) : s === Po ? m > 0 && (v = Po, g = m, w = d.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Ds : Po : null, w = v ? v === Ds ? i.length : d.length : 0);
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
function Ol(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Nl(o) + Nl(e[n])));
}
function Nl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ma(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Zu(e, s, o) {
  const n = e[wo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ul = Symbol("_vod"), ed = Symbol("_vsh"), td = Symbol(""), sd = /(?:^|;)\s*display\s*:/;
function od(e, s, o) {
  const n = e.style, l = ct(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ct(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Sn(n, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Sn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), Sn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[td];
      c && (o += ";" + c), n.cssText = o, i = sd.test(o);
    }
  } else s && e.removeAttribute("style");
  Ul in e && (e[Ul] = i ? n.display : "", e[ed] && (n.display = "none"));
}
const zl = /\s*!important$/;
function Sn(e, s, o) {
  if (Be(o))
    o.forEach((n) => Sn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = nd(e, s);
    zl.test(o) ? e.setProperty(
      Bs(n),
      o.replace(zl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Fl = ["Webkit", "Moz", "ms"], fa = {};
function nd(e, s) {
  const o = fa[s];
  if (o)
    return o;
  let n = qt(s);
  if (n !== "filter" && n in e)
    return fa[s] = n;
  n = Wn(n);
  for (let l = 0; l < Fl.length; l++) {
    const i = Fl[l] + n;
    if (i in e)
      return fa[s] = i;
  }
  return s;
}
const Bl = "http://www.w3.org/1999/xlink";
function Vl(e, s, o, n, l, i = rc(s)) {
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
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = ui(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
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
function ad(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Gl = Symbol("_vei");
function ld(e, s, o, n, l = null) {
  const i = e[Gl] || (e[Gl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = id(s);
    if (n) {
      const m = i[s] = ud(
        n,
        l
      );
      xs(e, u, m, d);
    } else c && (ad(e, u, c, d), i[s] = void 0);
  }
}
const jl = /(?:Once|Passive|Capture)$/;
function id(e) {
  let s;
  if (jl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(jl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let ma = 0;
const rd = /* @__PURE__ */ Promise.resolve(), cd = () => ma || (rd.then(() => ma = 0), ma = Date.now());
function ud(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      dd(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = cd(), o;
}
function dd(e, s) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fd = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Zu(e, n, c) : s === "style" ? od(e, o, n) : Bn(s) ? za(s) || ld(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : md(e, s, n, c)) ? (Wl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Vl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ct(n)) ? Wl(e, qt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Vl(e, s, n, c));
};
function md(e, s, o, n) {
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
const wr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Nn = Symbol("_moveCb"), Kl = Symbol("_enterCb"), vd = (e) => (delete e.props.mode, e), pd = /* @__PURE__ */ vd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, gr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = ol(), n = Ni();
    let l, i;
    return Gi(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!_d(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(hd), l.forEach(yd);
      const u = l.filter(wd);
      Ma(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Nn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Nn] = null, Ls(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Qe(e), u = hr(c);
      let d = c.tag || H;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), so(
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
      i = s.default ? Qa(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && so(
          v,
          Jo(v, u, n, o)
        );
      }
      return S(d, null, i);
    };
  }
}), gd = pd;
function hd(e) {
  const s = e.el;
  s[Nn] && s[Nn](), s[Kl] && s[Kl]();
}
function yd(e) {
  _r.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function wd(e) {
  const s = wr.get(e), o = _r.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function _d(e, s, o) {
  const n = e.cloneNode(), l = e[wo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = yr(n);
  return i.removeChild(n), c;
}
const Fs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => bn(s, o) : s;
};
function kd(e) {
  e.target.composing = !0;
}
function ql(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Ht = Symbol("_assign");
function Yl(e, s, o) {
  return s && (e = e.trim()), o && (e = Gn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Ht] = Fs(l);
    const i = n || l.props && l.props.type === "number";
    xs(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Ht](Yl(e.value, o, i));
    }), (o || i) && xs(e, "change", () => {
      e.value = Yl(e.value, o, i);
    }), s || (xs(e, "compositionstart", kd), xs(e, "compositionend", ql), xs(e, "change", ql));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[Ht] = Fs(c), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Gn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, en = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Ht] = Fs(o), xs(e, "change", () => {
      const n = e._modelValue, l = _o(e), i = e.checked, c = e[Ht];
      if (Be(n)) {
        const u = Va(n, l), d = u !== -1;
        if (i && !d)
          c(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), c(m);
        }
      } else if (ko(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), c(u);
      } else
        c(kr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Jl,
  beforeUpdate(e, s, o) {
    e[Ht] = Fs(o), Jl(e, s, o);
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
    l = to(s, kr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Zt = {
  created(e, { value: s }, o) {
    e.checked = to(s, o.props.value), e[Ht] = Fs(o), xs(e, "change", () => {
      e[Ht](_o(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Ht] = Fs(n), s !== o && (e.checked = to(s, n.props.value));
  }
}, hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = ko(s);
    xs(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Gn(_o(c)) : _o(c)
      );
      e[Ht](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, yt(() => {
        e._assigning = !1;
      });
    }), e[Ht] = Fs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Ql(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Ht] = Fs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Ql(e, s);
  }
};
function Ql(e, s) {
  const o = e.multiple, n = Be(s);
  if (!(o && !n && !ko(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], u = _o(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = Va(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (to(_o(c), s)) {
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
const Zn = {
  created(e, s, o) {
    hn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    hn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    hn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    hn(e, s, o, n, "updated");
  }
};
function bd(e, s) {
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
          return Zt;
        default:
          return zt;
      }
  }
}
function hn(e, s, o, n, l) {
  const c = bd(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const $d = ["ctrl", "shift", "alt", "meta"], Cd = {
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
  exact: (e, s) => $d.some((o) => e[`${o}Key`] && !s.includes(o))
}, at = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const u = Cd[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, xd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Kt = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = Bs(l.key);
    if (s.some(
      (c) => c === i || xd[c] === i
    ))
      return e(l);
  }));
}, Sd = /* @__PURE__ */ pt({ patchProp: fd }, qu);
let Xl;
function Id() {
  return Xl || (Xl = Iu(Sd));
}
const ea = ((...e) => {
  const s = Id().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = Td(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Ed(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function Ed(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Td(e) {
  return ct(e) ? document.querySelector(e) : e;
}
const Pd = { class: "panel-layout" }, Rd = {
  key: 0,
  class: "panel-layout-header"
}, Md = {
  key: 1,
  class: "panel-layout-search"
}, Dd = { class: "panel-layout-content" }, Ld = {
  key: 2,
  class: "panel-layout-footer"
}, Ad = /* @__PURE__ */ de({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", Pd, [
      s.$slots.header ? (a(), r("div", Rd, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", Md, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Dd, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Ld, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), me = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Pt = /* @__PURE__ */ me(Ad, [["__scopeId", "data-v-21565df9"]]), Od = {
  key: 0,
  class: "panel-title-prefix"
}, Nd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ud = /* @__PURE__ */ de({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), D(Xa(`h${e.level}`), {
      class: Ie(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Od, f(e.prefix), 1)) : (a(), r("span", Nd)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), zd = /* @__PURE__ */ me(Ud, [["__scopeId", "data-v-c3875efc"]]), Fd = ["title"], Bd = ["width", "height"], Vd = /* @__PURE__ */ de({
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
      ])], 8, Bd))
    ], 8, Fd));
  }
}), br = /* @__PURE__ */ me(Vd, [["__scopeId", "data-v-6fc7f16d"]]), Wd = { class: "header-left" }, Gd = {
  key: 0,
  class: "header-actions"
}, jd = /* @__PURE__ */ de({
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
      class: Ie(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Wd, [
        S(zd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), D(br, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Gd, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ me(jd, [["__scopeId", "data-v-55a62cd6"]]), Hd = {
  key: 0,
  class: "section-title-count"
}, Kd = {
  key: 1,
  class: "section-title-icon"
}, qd = /* @__PURE__ */ de({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), D(Xa(`h${e.level}`), {
      class: Ie(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Hd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Kd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nt = /* @__PURE__ */ me(qd, [["__scopeId", "data-v-559361eb"]]), Yd = { class: "status-grid" }, Jd = { class: "status-grid__columns" }, Qd = { class: "status-grid__column" }, Xd = { class: "status-grid__title" }, Zd = { class: "status-grid__column status-grid__column--right" }, ef = { class: "status-grid__title" }, tf = {
  key: 0,
  class: "status-grid__footer"
}, sf = /* @__PURE__ */ de({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Yd, [
      t("div", Jd, [
        t("div", Qd, [
          t("h4", Xd, f(e.leftTitle), 1),
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", Zd, [
          t("h4", ef, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", tf, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), of = /* @__PURE__ */ me(sf, [["__scopeId", "data-v-73b7ba3f"]]), nf = {
  key: 0,
  class: "status-item__icon"
}, af = {
  key: 1,
  class: "status-item__count"
}, lf = { class: "status-item__label" }, rf = /* @__PURE__ */ de({
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
      class: Ie(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", nf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", af, f(e.count), 1)) : y("", !0),
      t("span", lf, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ me(rf, [["__scopeId", "data-v-6f929183"]]), cf = { class: "issue-card__header" }, uf = { class: "issue-card__icon" }, df = { class: "issue-card__title" }, ff = {
  key: 0,
  class: "issue-card__content"
}, mf = {
  key: 0,
  class: "issue-card__description"
}, vf = {
  key: 1,
  class: "issue-card__items"
}, pf = {
  key: 2,
  class: "issue-card__actions"
}, gf = /* @__PURE__ */ de({
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
      class: Ie(["issue-card", o.value])
    }, [
      t("div", cf, [
        t("span", uf, f(e.icon), 1),
        t("h4", df, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", ff, [
        e.description ? (a(), r("p", mf, f(e.description), 1)) : y("", !0),
        Ke(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", vf, [
        (a(!0), r(H, null, pe(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", pf, [
        Ke(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ me(gf, [["__scopeId", "data-v-df6aa348"]]), hf = ["type", "disabled"], yf = {
  key: 0,
  class: "spinner"
}, wf = /* @__PURE__ */ de({
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
      class: Ie(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", yf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, hf));
  }
}), ce = /* @__PURE__ */ me(wf, [["__scopeId", "data-v-772abe47"]]), _f = { class: "empty-state" }, kf = {
  key: 0,
  class: "empty-icon"
}, bf = { class: "empty-message" }, $f = /* @__PURE__ */ de({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", _f, [
      e.icon ? (a(), r("div", kf, f(e.icon), 1)) : y("", !0),
      t("p", bf, f(e.message), 1),
      e.actionLabel ? (a(), D(ce, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("action"))
      }, {
        default: h(() => [
          $(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), ns = /* @__PURE__ */ me($f, [["__scopeId", "data-v-4466284f"]]), Cf = /* @__PURE__ */ de({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ie(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), In = /* @__PURE__ */ me(Cf, [["__scopeId", "data-v-75e9eeb8"]]), xf = /* @__PURE__ */ de({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ie(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Da = /* @__PURE__ */ me(xf, [["__scopeId", "data-v-2f186e4c"]]), Sf = { class: "detail-row" }, If = /* @__PURE__ */ de({
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
    return (s, o) => (a(), r("div", Sf, [
      S(In, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), D(Da, {
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
}), ft = /* @__PURE__ */ me(If, [["__scopeId", "data-v-ef15664a"]]), Ef = { class: "modal-header" }, Tf = { class: "modal-body" }, Pf = { class: "status-section" }, Rf = {
  key: 0,
  class: "status-section"
}, Mf = { class: "section-header-row" }, Df = {
  key: 0,
  class: "workflow-group"
}, Lf = { class: "workflow-group-header" }, Af = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Nf = { class: "workflow-name" }, Uf = { class: "workflow-issue" }, zf = {
  key: 1,
  class: "workflow-group"
}, Ff = { class: "workflow-group-header" }, Bf = { class: "workflow-group-title" }, Vf = { class: "workflow-list" }, Wf = { class: "workflow-name" }, Gf = { class: "workflow-issue" }, jf = {
  key: 2,
  class: "workflow-group"
}, Hf = { class: "workflow-group-header" }, Kf = { class: "workflow-group-title" }, qf = { class: "workflow-list" }, Yf = { class: "workflow-name" }, Jf = {
  key: 3,
  class: "workflow-group"
}, Qf = { class: "workflow-group-header" }, Xf = { class: "workflow-group-title" }, Zf = { class: "workflow-list" }, em = { class: "workflow-name" }, tm = {
  key: 4,
  class: "workflow-group"
}, sm = { class: "workflow-group-header" }, om = { class: "workflow-group-title" }, nm = { class: "workflow-list" }, am = { class: "workflow-name" }, lm = {
  key: 5,
  class: "workflow-group"
}, im = { class: "workflow-group-title" }, rm = { class: "expand-icon" }, cm = {
  key: 0,
  class: "workflow-list"
}, um = { class: "workflow-name" }, dm = {
  key: 1,
  class: "status-section"
}, fm = {
  key: 0,
  class: "change-group"
}, mm = { class: "change-group-header" }, vm = { class: "change-group-title" }, pm = { class: "change-list" }, gm = { class: "node-name" }, hm = {
  key: 0,
  class: "dev-badge"
}, ym = {
  key: 1,
  class: "change-group"
}, wm = { class: "change-group-header" }, _m = { class: "change-group-title" }, km = { class: "change-list" }, bm = { class: "node-name" }, $m = {
  key: 0,
  class: "dev-badge"
}, Cm = {
  key: 2,
  class: "change-group"
}, xm = { class: "change-list" }, Sm = { class: "change-item" }, Im = { class: "node-name" }, Em = {
  key: 3,
  class: "change-group"
}, Tm = {
  key: 2,
  class: "status-section"
}, Pm = { class: "section-header-row" }, Rm = {
  key: 0,
  class: "drift-item"
}, Mm = { class: "drift-list" }, Dm = {
  key: 0,
  class: "drift-list-more"
}, Lm = {
  key: 1,
  class: "drift-item"
}, Am = { class: "drift-list" }, Om = {
  key: 0,
  class: "drift-list-more"
}, Nm = {
  key: 2,
  class: "drift-item"
}, Um = { class: "drift-list" }, zm = { class: "version-actual" }, Fm = { class: "version-expected" }, Bm = {
  key: 0,
  class: "drift-list-more"
}, Vm = {
  key: 3,
  class: "drift-item"
}, Wm = { class: "repair-action" }, Gm = {
  key: 3,
  class: "status-section"
}, jm = { class: "info-box" }, Hm = { class: "drift-list" }, Km = {
  key: 0,
  class: "drift-list-more"
}, qm = {
  key: 4,
  class: "status-section"
}, Ym = { class: "warning-box" }, Jm = {
  key: 5,
  class: "empty-state-inline"
}, Qm = { class: "modal-actions" }, Xm = /* @__PURE__ */ de({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    Je(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), gt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), i = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((C) => {
        var I, M, x;
        const b = (x = (M = (I = s.status) == null ? void 0 : I.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : x.find((E) => E.name === C);
        return !b || b.status !== "broken";
      })) || [];
    }), c = N(() => {
      var w, p, _, C, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = N(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = N(() => {
      var w, p, _, C, b, I;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((I = (b = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : I.length) ?? 0) === 0;
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
      var _, C, b, I, M, x, E, K, q, V, T, P, L, ae, Z, F, G, J, O, se, X, he;
      return a(), D(_t, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (we) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = at(() => {
            }, ["stop"]))
          }, [
            t("div", Ef, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (we) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", Tf, [
              t("div", Pf, [
                S(Nt, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                S(ft, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", Rf, [
                t("div", Mf, [
                  S(Nt, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (we) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", Df, [
                  t("div", Lf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Af, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Of, [
                    (a(!0), r(H, null, pe(n.value, (we) => (a(), r("div", {
                      key: we.name,
                      class: "workflow-item"
                    }, [
                      t("span", Nf, f(we.name), 1),
                      t("span", Uf, f(we.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", zf, [
                  t("div", Ff, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Bf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Vf, [
                    (a(!0), r(H, null, pe(l.value, (we) => (a(), r("div", {
                      key: we.name,
                      class: "workflow-item"
                    }, [
                      t("span", Wf, f(we.name), 1),
                      t("span", Gf, f(we.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), r("div", jf, [
                  t("div", Hf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Kf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (a(!0), r(H, null, pe(e.status.workflows.new, (we) => (a(), r("div", {
                      key: we,
                      class: "workflow-item"
                    }, [
                      t("span", Yf, f(we), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (b = e.status.workflows) == null ? void 0 : b.modified) != null && I.length ? (a(), r("div", Jf, [
                  t("div", Qf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Xf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Zf, [
                    (a(!0), r(H, null, pe(e.status.workflows.modified, (we) => (a(), r("div", {
                      key: we,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(we), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && x.length ? (a(), r("div", tm, [
                  t("div", sm, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", om, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", nm, [
                    (a(!0), r(H, null, pe(e.status.workflows.deleted, (we) => (a(), r("div", {
                      key: we,
                      class: "workflow-item"
                    }, [
                      t("span", am, f(we), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", lm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (we) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", im, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", rm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", cm, [
                    (a(!0), r(H, null, pe(i.value, (we) => (a(), r("div", {
                      key: we,
                      class: "workflow-item"
                    }, [
                      t("span", um, f(we), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), r("div", dm, [
                S(Nt, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && K.length ? (a(), r("div", fm, [
                  t("div", mm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", vm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", pm, [
                    (a(!0), r(H, null, pe(e.status.git_changes.nodes_added, (we) => (a(), r("div", {
                      key: v(we),
                      class: "change-item"
                    }, [
                      t("span", gm, f(v(we)), 1),
                      g(we) ? (a(), r("span", hm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (V = (q = e.status.git_changes) == null ? void 0 : q.nodes_removed) != null && V.length ? (a(), r("div", ym, [
                  t("div", wm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", _m, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", km, [
                    (a(!0), r(H, null, pe(e.status.git_changes.nodes_removed, (we) => (a(), r("div", {
                      key: v(we),
                      class: "change-item"
                    }, [
                      t("span", bm, f(v(we)), 1),
                      g(we) ? (a(), r("span", $m, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.workflow_changes ? (a(), r("div", Cm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", xm, [
                    t("div", Sm, [
                      t("span", Im, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (P = e.status.git_changes) != null && P.has_other_changes ? (a(), r("div", Em, [...p[21] || (p[21] = [
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
              (L = e.status.comparison) != null && L.is_synced ? y("", !0) : (a(), r("div", Tm, [
                t("div", Pm, [
                  S(Nt, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (we) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Z = (ae = e.status.comparison) == null ? void 0 : ae.missing_nodes) != null && Z.length ? (a(), r("div", Rm, [
                  S(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Mm, [
                    (a(!0), r(H, null, pe(e.status.comparison.missing_nodes.slice(0, 10), (we) => (a(), r("div", {
                      key: we,
                      class: "drift-list-item"
                    }, " - " + f(we), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Dm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (G = (F = e.status.comparison) == null ? void 0 : F.extra_nodes) != null && G.length ? (a(), r("div", Lm, [
                  S(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Am, [
                    (a(!0), r(H, null, pe(e.status.comparison.extra_nodes.slice(0, 10), (we) => (a(), r("div", {
                      key: we,
                      class: "drift-list-item"
                    }, " - " + f(we), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Om, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (O = (J = e.status.comparison) == null ? void 0 : J.version_mismatches) != null && O.length ? (a(), r("div", Nm, [
                  S(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Um, [
                    (a(!0), r(H, null, pe(e.status.comparison.version_mismatches.slice(0, 10), (we) => (a(), r("div", {
                      key: we.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(we.name) + ": ", 1),
                      t("span", zm, f(we.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", Fm, f(we.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Bm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((se = e.status.comparison) == null ? void 0 : se.packages_in_sync) === !1 ? (a(), r("div", Vm, [
                  S(ft, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Wm, [
                  S(ce, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (we) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (he = (X = e.status.comparison) == null ? void 0 : X.disabled_nodes) != null && he.length ? (a(), r("div", Gm, [
                S(Nt, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", jm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Hm, [
                  (a(!0), r(H, null, pe(e.status.comparison.disabled_nodes.slice(0, 10), (we) => (a(), r("div", {
                    key: we,
                    class: "drift-list-item"
                  }, " • " + f(we), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Km, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", qm, [
                S(Nt, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Ym, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), r("div", Jm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Qm, [
              S(ce, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (we) => w.$emit("close"))
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
}), Zm = /* @__PURE__ */ me(Xm, [["__scopeId", "data-v-e2b37122"]]), ev = { class: "health-section-header" }, tv = { class: "suggestions-content" }, sv = { class: "suggestions-text" }, ov = { style: { "margin-top": "var(--cg-space-3)" } }, nv = {
  key: 1,
  class: "no-issues-text"
}, av = /* @__PURE__ */ de({
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
    const C = N(() => {
      const J = n.status.workflows.analyzed || [], O = J.filter(
        (se) => se.unresolved_models_count > 0 || se.ambiguous_models_count > 0
      );
      return O.length === 0 && n.status.missing_models_count > 0 ? J.filter((se) => se.sync_state === "synced") : O;
    });
    function b() {
      const J = C.value;
      J.length !== 0 && (v.value = !0, m("repair-missing-models", J.map((O) => O.name)));
    }
    function I() {
      v.value = !1;
    }
    s({ resetRepairingState: I, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const M = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), x = N(() => n.status.has_changes), E = N(() => {
      const J = n.status.git_changes;
      return J.nodes_added.length > 0 || J.nodes_removed.length > 0 || J.workflow_changes;
    }), K = N(() => n.status.has_changes || M.value), q = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), V = N(() => n.status.git_changes.has_other_changes), T = N(() => {
      var J;
      return ((J = n.status.workflows.analyzed) == null ? void 0 : J.filter((O) => O.status === "broken")) || [];
    }), P = N(() => {
      var J;
      return ((J = n.status.workflows.analyzed) == null ? void 0 : J.filter(
        (O) => O.has_path_sync_issues && !O.has_issues
      )) || [];
    }), L = N(() => T.value.length > 0), ae = N(() => L.value || P.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Z = N(() => {
      const J = [];
      return n.status.workflows.new.length > 0 && J.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && J.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && J.push(`${n.status.workflows.deleted.length} deleted`), J.length > 0 ? `${J.join(", ")} workflow${J.length === 1 && !J[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), F = N(() => {
      var se, X;
      const J = [], O = n.status.comparison;
      return (se = O.missing_nodes) != null && se.length && J.push(`${O.missing_nodes.length} missing node${O.missing_nodes.length === 1 ? "" : "s"}`), (X = O.extra_nodes) != null && X.length && J.push(`${O.extra_nodes.length} untracked node${O.extra_nodes.length === 1 ? "" : "s"}`), J.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${J.join(" and ")}.`;
    }), G = N(() => {
      var se, X;
      const J = [], O = n.status.comparison;
      return (se = O.extra_nodes) != null && se.length && (O.extra_nodes.slice(0, 3).forEach((he) => {
        J.push(`Untracked: ${he}`);
      }), O.extra_nodes.length > 3 && J.push(`...and ${O.extra_nodes.length - 3} more untracked`)), (X = O.missing_nodes) != null && X.length && (O.missing_nodes.slice(0, 3).forEach((he) => {
        J.push(`Missing: ${he}`);
      }), O.missing_nodes.length > 3 && J.push(`...and ${O.missing_nodes.length - 3} more missing`)), J;
    });
    return (J, O) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), D(Qt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (se) => J.$emit("start-setup"))
              }, {
                default: h(() => [...O[13] || (O[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), D(Qt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (se) => J.$emit("view-environments"))
              }, {
                default: h(() => [...O[14] || (O[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), D(Qt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: O[2] || (O[2] = (se) => J.$emit("create-environment"))
              }, {
                default: h(() => [...O[15] || (O[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: O[4] || (O[4] = (se) => i.value = !0),
            onMouseleave: O[5] || (O[5] = (se) => i.value = !1)
          }, [
            t("div", ev, [
              S(Nt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...O[16] || (O[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(Ju, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), D(ce, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...O[17] || (O[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            S(of, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, oo({
              left: h(() => [
                e.status.workflows.new.length ? (a(), D(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), D(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), D(ds, {
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
                  separator: M.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), D(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), D(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), D(ds, {
                  key: 2,
                  icon: "●",
                  count: q.value,
                  label: q.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                V.value ? (a(), D(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                x.value && !E.value && !V.value ? (a(), D(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                x.value ? y("", !0) : (a(), D(ds, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              K.value ? {
                name: "footer",
                fn: h(() => [
                  O[19] || (O[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", tv, [
                    t("span", sv, f(Z.value), 1),
                    S(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: O[3] || (O[3] = (se) => J.$emit("commit-changes"))
                    }, {
                      default: h(() => [...O[18] || (O[18] = [
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
          e.status.is_detached_head ? (a(), D(Qt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: O[6] || (O[6] = (se) => J.$emit("create-branch"))
              }, {
                default: h(() => [...O[20] || (O[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", ov, [
            S(Nt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...O[21] || (O[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ae.value ? (a(), r(H, { key: 0 }, [
              T.value.length > 0 ? (a(), D(Qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((se) => `${se.name} — ${se.issue_summary}`)
              }, {
                actions: h(() => [
                  S(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[7] || (O[7] = (se) => J.$emit("view-workflows"))
                  }, {
                    default: h(() => [...O[22] || (O[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              P.value.length > 0 ? (a(), D(Qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: P.value.map((se) => `${se.name} — ${se.models_needing_path_sync_count} model path${se.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  S(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[8] || (O[8] = (se) => J.$emit("view-workflows"))
                  }, {
                    default: h(() => [...O[23] || (O[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !L.value ? (a(), D(Qt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  S(ce, {
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
                  S(ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: O[9] || (O[9] = (se) => J.$emit("view-workflows"))
                  }, {
                    default: h(() => [...O[24] || (O[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), D(Qt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: F.value,
                items: G.value
              }, {
                actions: h(() => [
                  S(ce, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...O[25] || (O[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[10] || (O[10] = (se) => J.$emit("view-nodes"))
                  }, {
                    default: h(() => [...O[26] || (O[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), D(Qt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  S(ce, {
                    variant: "primary",
                    size: "sm",
                    onClick: O[11] || (O[11] = (se) => J.$emit("view-nodes"))
                  }, {
                    default: h(() => [...O[27] || (O[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : K.value ? (a(), r("span", nv, "No issues")) : (a(), D(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      S(Zm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: O[12] || (O[12] = (se) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), lv = /* @__PURE__ */ me(av, [["__scopeId", "data-v-55fcd77f"]]), iv = ["type", "value", "placeholder", "disabled"], rv = /* @__PURE__ */ de({
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
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return Je(() => {
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
    }), (u, d) => (a(), r("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Ie(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Kt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Kt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, iv));
  }
}), Un = /* @__PURE__ */ me(rv, [["__scopeId", "data-v-0380d08f"]]), cv = { class: "branch-create-form" }, uv = { class: "form-actions" }, dv = /* @__PURE__ */ de({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = N(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), r("div", cv, [
      S(Un, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", uv, [
        S(ce, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: h(() => [...d[1] || (d[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        S(ce, {
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
}), fv = /* @__PURE__ */ me(dv, [["__scopeId", "data-v-7c500394"]]), mv = { class: "branch-list-item__indicator" }, vv = { class: "branch-list-item__name" }, pv = {
  key: 0,
  class: "branch-list-item__actions"
}, gv = {
  key: 0,
  class: "branch-list-item__current-label"
}, hv = /* @__PURE__ */ de({
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
      class: Ie(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", mv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", vv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", pv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", gv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), yv = /* @__PURE__ */ me(hv, [["__scopeId", "data-v-c6581a24"]]), XP = Vs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const ZP = [
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
], eR = {
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
}, wv = [
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
], tR = [
  ...wv,
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
function $r() {
  return typeof crypto < "u" && crypto.randomUUID ? $r() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function et() {
  const e = k(!1), s = k(null);
  async function o(U, _e) {
    var At;
    if (!((At = window.app) != null && At.api))
      throw new Error("ComfyUI API not available");
    const Ue = await window.app.api.fetchApi(U, _e);
    if (!Ue.ok) {
      const cs = await Ue.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Ue.status}`);
    }
    const rt = await Ue.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function n(U = !1) {
    return o(U ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(U, _e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: U, allow_issues: _e })
    });
  }
  async function i(U = 10, _e = 0) {
    return o(`/v2/comfygit/log?limit=${U}&offset=${_e}`);
  }
  async function c(U, _e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(U)}&limit=${_e}`);
  }
  async function u(U) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: U })
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
  async function v(U) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: U, force: !0 })
    });
  }
  async function g() {
    return o("/v2/comfygit/branches");
  }
  async function w(U) {
    return o(`/v2/comfygit/commit/${U}`);
  }
  async function p(U, _e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: U, force: _e })
    });
  }
  async function _(U, _e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: U, start_point: _e })
    });
  }
  async function C(U, _e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: U, force: _e })
    });
  }
  async function b(U, _e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(U)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: _e })
    });
  }
  async function I() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const U = await n();
        return [{
          name: U.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + U.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: U.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: U.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function M(U, _e) {
    const Ue = { target_env: U };
    return _e && (Ue.workspace_path = _e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ue)
    });
  }
  async function x() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(U) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function K() {
    return o("/v2/workspace/environments/create_status");
  }
  async function q(U = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${U}`);
  }
  async function V(U) {
    return o(`/v2/workspace/environments/${U}`, {
      method: "DELETE"
    });
  }
  async function T(U = !1) {
    try {
      return o(U ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const _e = await n(U), Ue = [];
      return _e.workflows.new.forEach((rt) => {
        Ue.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), _e.workflows.modified.forEach((rt) => {
        Ue.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), _e.workflows.synced.forEach((rt) => {
        Ue.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), Ue;
    }
  }
  async function P(U) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(U)}/details`);
  }
  async function L(U) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(U)}/resolve`, {
      method: "POST"
    });
  }
  async function ae(U, _e, Ue) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(U)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: _e, install_models: Ue })
    });
  }
  async function Z(U, _e, Ue) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(U)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: _e, importance: Ue })
    });
  }
  async function F() {
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
  async function J(U) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(U)}`);
  }
  async function O(U) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: U })
    });
  }
  async function se(U, _e) {
    return o(`/v2/workspace/models/${U}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function X(U, _e) {
    return o(`/v2/workspace/models/${U}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function he(U) {
    return o(`/v2/workspace/models/${U}`, {
      method: "DELETE"
    });
  }
  async function we(U) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function re() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ve() {
    return o("/v2/workspace/models/directory");
  }
  async function Se(U) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: U })
    });
  }
  async function Fe(U) {
    const _e = new URLSearchParams({ url: U });
    return o(`/v2/workspace/huggingface/repo-info?${_e}`);
  }
  async function ze() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Te(U, _e = 10) {
    const Ue = new URLSearchParams({ query: U, limit: String(_e) });
    return o(`/v2/workspace/huggingface/search?${Ue}`);
  }
  async function Pe(U) {
    try {
      const _e = U ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(U)}` : "/v2/comfygit/config";
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
  async function ke(U, _e) {
    const Ue = _e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(_e)}` : "/v2/comfygit/config";
    return o(Ue, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function ge(U, _e) {
    try {
      const Ue = new URLSearchParams();
      return U && Ue.append("level", U), _e && Ue.append("lines", _e.toString()), o(`/v2/comfygit/debug/logs?${Ue}`);
    } catch {
      return [];
    }
  }
  async function De(U, _e) {
    try {
      const Ue = new URLSearchParams();
      return U && Ue.append("level", U), _e && Ue.append("lines", _e.toString()), o(`/v2/workspace/debug/logs?${Ue}`);
    } catch {
      return [];
    }
  }
  async function Me() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function A() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function R(U, _e) {
    try {
      const Ue = new URLSearchParams();
      return U && Ue.append("level", U), _e && Ue.append("lines", _e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ue}`);
    } catch {
      return [];
    }
  }
  async function z() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function W(U) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: U })
    });
  }
  async function ee() {
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
  async function ie(U) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(U)}/track-dev`, {
      method: "POST"
    });
  }
  async function ye(U) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(U)}/install`, {
      method: "POST"
    });
  }
  async function $e(U) {
    var At, cs, Io, Eo;
    const _e = $r(), Ue = ((cs = (At = window.app) == null ? void 0 : At.api) == null ? void 0 : cs.clientId) ?? ((Eo = (Io = window.app) == null ? void 0 : Io.api) == null ? void 0 : Eo.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: U.id,
        version: U.version || U.selected_version || "latest",
        selected_version: U.selected_version || "latest",
        repository: U.repository || "",
        mode: U.mode || "remote",
        channel: U.channel || "default"
      },
      ui_id: _e,
      client_id: Ue
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), console.log("[ComfyGit] Task queued with ui_id:", _e, "for package:", U.id), o("/v2/manager/queue/start").catch((Qr) => {
      console.error("[ComfyGit] Queue start failed:", Qr);
    }), { ui_id: _e };
  }
  async function ne(U) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(U)}/update`, {
      method: "POST"
    });
  }
  async function fe(U) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(U)}`, {
      method: "DELETE"
    });
  }
  async function Le() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ee(U, _e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: U, url: _e })
    });
  }
  async function oe(U) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(U)}`, {
      method: "DELETE"
    });
  }
  async function Q(U, _e, Ue) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(U)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: _e, push_url: Ue })
    });
  }
  async function Ae(U, _e) {
    const Ue = {};
    return _e && (Ue["X-Git-Auth-Token"] = _e), o(`/v2/comfygit/remotes/${encodeURIComponent(U)}/fetch`, {
      method: "POST",
      headers: Ue
    });
  }
  async function Ce(U) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(U)}/status`);
    } catch {
      return null;
    }
  }
  async function be(U = "skip", _e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: U,
        remove_extra_nodes: _e
      })
    });
  }
  async function j(U, _e) {
    const Ue = _e ? `/v2/comfygit/remotes/${encodeURIComponent(U)}/pull-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(U)}/pull-preview`;
    return o(Ue);
  }
  async function B(U, _e = {}) {
    const Ue = { "Content-Type": "application/json" };
    return _e.authToken && (Ue["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(U)}/pull`, {
      method: "POST",
      headers: Ue,
      body: JSON.stringify({
        model_strategy: _e.modelStrategy || "skip",
        force: _e.force || !1,
        resolutions: _e.resolutions
      })
    });
  }
  async function ue(U, _e) {
    const Ue = _e ? `/v2/comfygit/remotes/${encodeURIComponent(U)}/push-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(U)}/push-preview`;
    return o(Ue);
  }
  async function Ve(U, _e = {}) {
    const Ue = { "Content-Type": "application/json" };
    return _e.authToken && (Ue["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(U)}/push`, {
      method: "POST",
      headers: Ue,
      body: JSON.stringify({ force: _e.force || !1 })
    });
  }
  async function Xe(U, _e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(U)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: _e })
    });
  }
  async function vt(U) {
    const _e = {
      success: 0,
      failed: []
    };
    for (const Ue of U)
      try {
        await L(Ue), _e.success++;
      } catch (rt) {
        _e.failed.push({
          name: Ue,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return _e;
  }
  async function lt(U) {
    var rt;
    const _e = new FormData();
    if (_e.append("file", U), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const Ue = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: _e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ue.ok) {
      const At = await Ue.json().catch(() => ({}));
      throw new Error(At.error || `Preview failed: ${Ue.status}`);
    }
    return Ue.json();
  }
  async function dt(U) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(U)}`
    );
  }
  async function Mt(U, _e, Ue, rt) {
    var Io;
    const At = new FormData();
    if (At.append("file", U), At.append("name", _e), At.append("model_strategy", Ue), At.append("torch_backend", rt), !((Io = window.app) != null && Io.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: At
    });
    if (!cs.ok) {
      const Eo = await cs.json().catch(() => ({}));
      throw new Error(Eo.message || Eo.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function Bt() {
    return o("/v2/workspace/import/status");
  }
  async function Yt(U) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: U })
    });
  }
  async function Gs(U, _e, Ue, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: U,
        name: _e,
        model_strategy: Ue,
        torch_backend: rt
      })
    });
  }
  async function Ms() {
    return o("/v2/setup/status");
  }
  async function no(U) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function Co() {
    return o("/v2/setup/initialize_status");
  }
  async function xo(U) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function So() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function xe() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function te(U, _e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: U, save_key: _e })
    });
  }
  async function He() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ht(U) {
    const _e = U ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(U)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(_e);
  }
  async function Jt(U) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function ys() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ws(U) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(U)}`, {
      method: "DELETE"
    });
  }
  async function ls(U) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(U)}/stop`, {
      method: "POST"
    });
  }
  async function Ne(U) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(U)}/start`, {
      method: "POST"
    });
  }
  async function is(U) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(U)}/status`);
  }
  async function le(U) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: U })
    });
  }
  async function Y(U = !1) {
    return o(U ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Oe() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function je() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ot(U) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function mt(U) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(U)}`, {
      method: "DELETE"
    });
  }
  async function Dt(U) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(U)
    });
  }
  async function rs() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function js(U) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(U)}/info`);
  }
  async function Hs(U) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(U)}/instances`);
  }
  async function ln(U, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(U)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function rn(U, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(U)}/instances/${encodeURIComponent(_e)}/start`, {
      method: "POST"
    });
  }
  async function cn(U, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(U)}/instances/${encodeURIComponent(_e)}/stop`, {
      method: "POST"
    });
  }
  async function un(U, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(U)}/instances/${encodeURIComponent(_e)}`, {
      method: "DELETE"
    });
  }
  async function dn(U) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: U })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: n,
    commit: l,
    getHistory: i,
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
    getEnvironments: I,
    switchEnvironment: M,
    getSwitchProgress: x,
    createEnvironment: E,
    getCreateProgress: K,
    getComfyUIReleases: q,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: T,
    getWorkflowDetails: P,
    resolveWorkflow: L,
    installWorkflowDeps: ae,
    setModelImportance: Z,
    // Model Management
    getEnvironmentModels: F,
    getWorkspaceModels: G,
    getModelDetails: J,
    openFileLocation: O,
    addModelSource: se,
    removeModelSource: X,
    deleteModel: he,
    downloadModel: we,
    scanWorkspaceModels: re,
    getModelsDirectory: ve,
    setModelsDirectory: Se,
    getHuggingFaceRepoInfo: Fe,
    getModelsSubdirectories: ze,
    searchHuggingFaceRepos: Te,
    // Settings
    getConfig: Pe,
    updateConfig: ke,
    // Debug/Logs
    getEnvironmentLogs: ge,
    getWorkspaceLogs: De,
    getEnvironmentLogPath: Me,
    getWorkspaceLogPath: A,
    getOrchestratorLogs: R,
    getOrchestratorLogPath: z,
    openFile: W,
    // Node Management
    getNodes: ee,
    trackNodeAsDev: ie,
    installNode: ye,
    queueNodeInstall: $e,
    updateNode: ne,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: Le,
    addRemote: Ee,
    removeRemote: oe,
    updateRemoteUrl: Q,
    fetchRemote: Ae,
    getRemoteSyncStatus: Ce,
    // Push/Pull
    getPullPreview: j,
    pullFromRemote: B,
    getPushPreview: ue,
    pushToRemote: Ve,
    validateMerge: Xe,
    // Environment Sync
    syncEnvironmentManually: be,
    // Workflow Repair
    repairWorkflowModels: vt,
    // Import Operations
    previewTarballImport: lt,
    previewGitImport: Yt,
    validateEnvironmentName: dt,
    executeImport: Mt,
    executeGitImport: Gs,
    getImportProgress: Bt,
    // First-Time Setup
    getSetupStatus: Ms,
    initializeWorkspace: no,
    getInitializeProgress: Co,
    validatePath: xo,
    // Deploy Operations
    getDeploySummary: So,
    getDataCenters: xe,
    testRunPodConnection: te,
    getNetworkVolumes: He,
    getRunPodGpuTypes: ht,
    deployToRunPod: Jt,
    getRunPodPods: ys,
    terminateRunPodPod: ws,
    stopRunPodPod: ls,
    startRunPodPod: Ne,
    getDeploymentStatus: is,
    exportDeployPackage: le,
    getStoredRunPodKey: Y,
    clearRunPodKey: Oe,
    // Custom Worker Operations
    getCustomWorkers: je,
    addCustomWorker: ot,
    removeCustomWorker: mt,
    testWorkerConnection: Dt,
    scanForWorkers: rs,
    getWorkerSystemInfo: js,
    getWorkerInstances: Hs,
    deployToWorker: ln,
    startWorkerInstance: rn,
    stopWorkerInstance: cn,
    terminateWorkerInstance: un,
    // Git Authentication
    testGitAuth: dn
  };
}
const _v = { class: "base-modal-header" }, kv = {
  key: 0,
  class: "base-modal-title"
}, bv = { class: "base-modal-body" }, $v = {
  key: 0,
  class: "base-modal-loading"
}, Cv = {
  key: 1,
  class: "base-modal-error"
}, xv = {
  key: 0,
  class: "base-modal-footer"
}, Sv = /* @__PURE__ */ de({
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
    return Je(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), Ws(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, u) => (a(), D(_t, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ie(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = at(() => {
          }, ["stop"]))
        }, [
          t("div", _v, [
            Ke(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", kv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), r("button", {
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
          t("div", bv, [
            e.loading ? (a(), r("div", $v, "Loading...")) : e.error ? (a(), r("div", Cv, f(e.error), 1)) : Ke(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", xv, [
            Ke(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), ut = /* @__PURE__ */ me(Sv, [["__scopeId", "data-v-8dab1081"]]), Iv = ["type", "disabled"], Ev = {
  key: 0,
  class: "spinner"
}, Tv = /* @__PURE__ */ de({
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
      class: Ie(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Ev)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Iv));
  }
}), Re = /* @__PURE__ */ me(Tv, [["__scopeId", "data-v-f3452606"]]), Pv = { class: "commit-list" }, Rv = /* @__PURE__ */ de({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", Pv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), Cr = /* @__PURE__ */ me(Rv, [["__scopeId", "data-v-8c5ee761"]]), Mv = { class: "commit-hash" }, Dv = /* @__PURE__ */ de({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", Mv, f(o.value), 1));
  }
}), xr = /* @__PURE__ */ me(Dv, [["__scopeId", "data-v-7c333cc6"]]), Lv = { class: "commit-message" }, Av = { class: "commit-date" }, Ov = /* @__PURE__ */ de({
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
      class: Ie(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      S(xr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Lv, f(e.message), 1),
      t("span", Av, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = at(() => {
        }, ["stop"]))
      }, [
        Ke(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Sr = /* @__PURE__ */ me(Ov, [["__scopeId", "data-v-dd7c621b"]]), Nv = { class: "header-info" }, Uv = { class: "branch-name" }, zv = {
  key: 0,
  class: "current-badge"
}, Fv = { class: "branch-meta" }, Bv = { key: 0 }, Vv = {
  key: 0,
  class: "meta-note"
}, Wv = {
  key: 0,
  class: "loading"
}, Gv = {
  key: 1,
  class: "empty-state"
}, jv = /* @__PURE__ */ de({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = et(), n = k([]), l = k(!1), i = k(!0);
    return Je(async () => {
      try {
        const c = await o(s.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        i.value = !1;
      }
    }), (c, u) => (a(), D(ut, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        t("div", Nv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Uv, f(e.branchName), 1),
          e.isCurrent ? (a(), r("span", zv, "CURRENT")) : y("", !0)
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
        t("div", Fv, [
          i.value ? (a(), r("span", Bv, "Loading...")) : (a(), r(H, { key: 1 }, [
            t("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), r("span", Vv, "(showing first " + f(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        i.value ? (a(), r("div", Wv, "Loading commit history...")) : n.value.length === 0 ? (a(), r("div", Gv, " No commits found on this branch ")) : (a(), D(Cr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), r(H, null, pe(n.value, (d) => (a(), D(Sr, {
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
        e.isCurrent ? y("", !0) : (a(), D(ce, {
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
        e.isCurrent ? y("", !0) : (a(), D(Re, {
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
}), Hv = /* @__PURE__ */ me(jv, [["__scopeId", "data-v-2e5437cc"]]), Kv = {
  key: 2,
  class: "branch-list"
}, qv = /* @__PURE__ */ de({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1), l = k(null);
    function i(v) {
      o("create", v), c();
    }
    function c() {
      n.value = !1;
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
    return (v, g) => (a(), D(Pt, null, {
      header: h(() => [
        S(Rt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), D(ce, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: g[0] || (g[0] = (w) => n.value = !0)
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
        n.value ? (a(), D(fv, {
          key: 0,
          onCreate: i,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (a(), D(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", Kv, [
          (a(!0), r(H, null, pe(e.branches, (w) => (a(), D(yv, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), D(ce, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: at((p) => o("switch", w.name), ["stop"])
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
        l.value ? (a(), D(Hv, {
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
}), Yv = /* @__PURE__ */ me(qv, [["__scopeId", "data-v-eefdcb00"]]), Jv = /* @__PURE__ */ de({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = N(() => `HISTORY (${s.currentRef || "detached"})`);
    return (n, l) => (a(), D(Pt, null, {
      header: h(() => [
        S(Rt, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), D(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), D(Cr, { key: 1 }, {
          default: h(() => [
            (a(!0), r(H, null, pe(e.commits, (i) => (a(), D(Sr, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (c) => n.$emit("select", i)
            }, {
              actions: h(() => [
                S(ce, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => n.$emit("checkout", i),
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
}), Qv = /* @__PURE__ */ me(Jv, [["__scopeId", "data-v-62a5d9da"]]);
async function yn(e, s) {
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
function Xv() {
  async function e() {
    try {
      return await yn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await yn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await yn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await yn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const Zv = {
  key: 0,
  class: "base-title-count"
}, ep = /* @__PURE__ */ de({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), D(Xa(`h${e.level}`), {
      class: Ie(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Zv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Go = /* @__PURE__ */ me(ep, [["__scopeId", "data-v-5a01561d"]]), tp = ["value", "disabled"], sp = {
  key: 0,
  value: "",
  disabled: ""
}, op = ["value"], np = {
  key: 0,
  class: "base-select-error"
}, ap = /* @__PURE__ */ de({
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
      class: Ie(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ie(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", sp, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(H, null, pe(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, op))), 128))
      ], 42, tp),
      e.error ? (a(), r("span", np, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), lp = /* @__PURE__ */ me(ap, [["__scopeId", "data-v-4996bfe0"]]), ip = { class: "popover-header" }, rp = { class: "popover-title" }, cp = { class: "popover-content" }, up = {
  key: 0,
  class: "popover-actions"
}, dp = /* @__PURE__ */ de({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), D(_t, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = at(() => {
          }, ["stop"]))
        }, [
          t("div", ip, [
            t("h4", rp, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", cp, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", up, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ me(dp, [["__scopeId", "data-v-42815ace"]]), fp = { class: "detail-section" }, mp = {
  key: 0,
  class: "empty-message"
}, vp = { class: "model-header" }, pp = { class: "model-name" }, gp = { class: "model-details" }, hp = { class: "model-row" }, yp = { class: "model-row" }, wp = { class: "label" }, _p = {
  key: 0,
  class: "model-row model-row-nodes"
}, kp = { class: "node-list" }, bp = ["onClick"], $p = {
  key: 1,
  class: "model-row"
}, Cp = { class: "value" }, xp = {
  key: 2,
  class: "model-row"
}, Sp = { class: "value error" }, Ip = {
  key: 0,
  class: "model-actions"
}, Ep = { class: "detail-section" }, Tp = {
  key: 0,
  class: "empty-message"
}, Pp = { class: "node-name" }, Rp = {
  key: 0,
  class: "node-version"
}, Mp = /* @__PURE__ */ de({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = et(), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(T) {
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
    function b(T) {
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
    function I(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const P = T.hash || T.filename;
      return p.value.has(P) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function M(T) {
      return p.value.has(T);
    }
    function x(T) {
      p.value.has(T) ? p.value.delete(T) : p.value.add(T), p.value = new Set(p.value);
    }
    async function E() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function K(T, P) {
      g.value[T] = P, v.value = !0;
    }
    async function q(T) {
      try {
        await c(T);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function V() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [T, P] of Object.entries(g.value))
          await i(o.workflowName, T, P);
        n("refresh"), n("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Je(E), (T, P) => (a(), r(H, null, [
      S(ut, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: P[4] || (P[4] = (L) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), r(H, { key: 0 }, [
            t("section", fp, [
              S(Go, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", mp, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(H, null, pe(u.value.models, (L) => {
                var ae;
                return a(), r("div", {
                  key: L.hash || L.filename,
                  class: "model-card"
                }, [
                  t("div", vp, [
                    P[6] || (P[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", pp, f(L.filename), 1)
                  ]),
                  t("div", gp, [
                    t("div", hp, [
                      P[7] || (P[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ie(["value", C(L.status)])
                      }, f(b(L.status)), 3)
                    ]),
                    t("div", yp, [
                      t("span", wp, [
                        P[8] || (P[8] = $(" Importance: ", -1)),
                        S(br, {
                          size: 14,
                          title: "About importance levels",
                          onClick: P[0] || (P[0] = (Z) => w.value = !0)
                        })
                      ]),
                      S(lp, {
                        "model-value": g.value[L.filename] || L.importance,
                        options: _,
                        "onUpdate:modelValue": (Z) => K(L.filename, Z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    L.loaded_by && L.loaded_by.length > 0 ? (a(), r("div", _p, [
                      P[9] || (P[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", kp, [
                        (a(!0), r(H, null, pe(I(L), (Z, F) => (a(), r("div", {
                          key: `${Z.node_id}-${F}`,
                          class: "node-reference"
                        }, f(Z.node_type) + " (Node #" + f(Z.node_id) + ") ", 1))), 128)),
                        L.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Z) => x(L.hash || L.filename)
                        }, f(M(L.hash || L.filename) ? "▼ Show less" : `▶ View all (${L.loaded_by.length})`), 9, bp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    L.size_mb ? (a(), r("div", $p, [
                      P[10] || (P[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Cp, f(L.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    L.has_category_mismatch ? (a(), r("div", xp, [
                      P[13] || (P[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Sp, [
                        P[11] || (P[11] = $(" In ", -1)),
                        t("code", null, f(L.actual_category) + "/", 1),
                        P[12] || (P[12] = $(" but loader needs ", -1)),
                        t("code", null, f((ae = L.expected_categories) == null ? void 0 : ae[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  L.status !== "available" ? (a(), r("div", Ip, [
                    L.status === "downloadable" ? (a(), D(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: P[1] || (P[1] = (Z) => n("resolve"))
                    }, {
                      default: h(() => [...P[14] || (P[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : L.status === "category_mismatch" && L.file_path ? (a(), D(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => q(L.file_path)
                    }, {
                      default: h(() => [...P[15] || (P[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : L.status !== "path_mismatch" ? (a(), D(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: P[2] || (P[2] = (Z) => n("resolve"))
                    }, {
                      default: h(() => [...P[16] || (P[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", Ep, [
              S(Go, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", Tp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(H, null, pe(u.value.nodes, (L) => (a(), r("div", {
                key: L.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ie(["node-status", L.status === "installed" ? "installed" : "missing"])
                }, f(L.status === "installed" ? "✓" : "✕"), 3),
                t("span", Pp, f(L.name), 1),
                L.version ? (a(), r("span", Rp, "v" + f(L.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          S(Re, {
            variant: "secondary",
            onClick: P[3] || (P[3] = (L) => n("close"))
          }, {
            default: h(() => [...P[17] || (P[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), D(Re, {
            key: 0,
            variant: "primary",
            onClick: V
          }, {
            default: h(() => [...P[18] || (P[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      S(as, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: P[5] || (P[5] = (L) => w.value = !1)
      }, {
        content: h(() => [...P[19] || (P[19] = [
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
}), Dp = /* @__PURE__ */ me(Mp, [["__scopeId", "data-v-668728e6"]]), Ye = Vs({
  items: [],
  status: "idle"
});
let vs = null;
function Ir() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function va(e) {
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
    await Lp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", uo();
  }
}
async function Lp(e) {
  return new Promise((s, o) => {
    vs && (vs.close(), vs = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    vs = l;
    let i = Date.now(), c = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
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
async function Ap() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: Ir(),
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
  function e(b) {
    for (const I of b) {
      if (Ye.items.some(
        (E) => E.url === I.url && E.targetPath === I.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${I.filename}`);
        continue;
      }
      const x = {
        id: Ir(),
        workflow: I.workflow,
        filename: I.filename,
        url: I.url,
        targetPath: I.targetPath,
        size: I.size || 0,
        type: I.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Ye.items.push(x);
    }
    Ye.status === "idle" && uo();
  }
  async function s(b) {
    const I = va(b);
    if (I) {
      if (I.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(I.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), I.status = "failed", I.error = "Cancelled by user", Ye.status = "idle", uo();
      } else if (I.status === "queued") {
        const M = Ye.items.findIndex((x) => x.id === b);
        M >= 0 && Ye.items.splice(M, 1);
      }
    }
  }
  function o(b) {
    const I = va(b);
    !I || I.status !== "failed" || (I.status = "queued", I.error = void 0, I.progress = 0, I.downloaded = 0, Ye.status === "idle" && uo());
  }
  function n(b) {
    const I = va(b);
    !I || I.status !== "paused" || (I.status = "queued", Ye.status === "idle" && uo());
  }
  function l() {
    const b = Ye.items.filter((I) => I.status === "paused");
    for (const I of b)
      I.status = "queued";
    Ye.status === "idle" && uo();
  }
  function i(b) {
    const I = Ye.items.findIndex((M) => M.id === b);
    I >= 0 && ["completed", "failed", "paused"].includes(Ye.items[I].status) && Ye.items.splice(I, 1);
  }
  function c() {
    Ye.items = Ye.items.filter((b) => b.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter((b) => b.status !== "failed");
  }
  const d = N(
    () => Ye.items.find((b) => b.status === "downloading")
  ), m = N(
    () => Ye.items.filter((b) => b.status === "queued")
  ), v = N(
    () => Ye.items.filter((b) => b.status === "completed")
  ), g = N(
    () => Ye.items.filter((b) => b.status === "failed")
  ), w = N(
    () => Ye.items.filter((b) => b.status === "paused")
  ), p = N(() => Ye.items.length > 0), _ = N(
    () => Ye.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = N(
    () => Ye.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Tn(Ye),
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
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Ap
  };
}
function Er() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(M, x) {
    var K;
    if (!((K = window.app) != null && K.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(M, x);
    if (!E.ok) {
      const q = await E.json().catch(() => ({})), V = q.error || q.message || `Request failed: ${E.status}`;
      throw new Error(V);
    }
    return E.json();
  }
  async function u(M) {
    l.value = !0, i.value = null;
    try {
      let x;
      return co() || (x = await c(
        `/v2/comfygit/workflow/${M}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = x, x;
    } catch (x) {
      const E = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = E, x;
    } finally {
      l.value = !1;
    }
  }
  async function d(M, x, E, K) {
    l.value = !0, i.value = null;
    try {
      let q;
      if (!co()) {
        const V = Object.fromEntries(x), T = Object.fromEntries(E), P = K ? Array.from(K) : [];
        q = await c(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: V,
              model_choices: T,
              skipped_packages: P
            })
          }
        );
      }
      return s.value = q, q;
    } catch (q) {
      const V = q instanceof Error ? q.message : "Unknown error occurred";
      throw i.value = V, q;
    } finally {
      l.value = !1;
    }
  }
  async function m(M, x = 10) {
    l.value = !0, i.value = null;
    try {
      let E;
      return co() || (E = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: x })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const K = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = K, E;
    } finally {
      l.value = !1;
    }
  }
  async function v(M, x = 10) {
    l.value = !0, i.value = null;
    try {
      let E;
      return co() || (E = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: x })
        }
      )), n.value = E.results, E.results;
    } catch (E) {
      const K = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = K, E;
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
  async function p(M) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return co(), await _(M);
    } catch (x) {
      const E = x instanceof Error ? x.message : "Failed to install nodes";
      throw g.installError = E, x;
    }
  }
  async function _(M) {
    var E;
    const x = await c(
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
      const K = new Map(((E = x.failed) == null ? void 0 : E.map((q) => [q.node_id, q.error])) || []);
      for (let q = 0; q < g.nodesToInstall.length; q++) {
        const V = g.nodesToInstall[q], T = K.get(V);
        g.nodeInstallProgress.completedNodes.push({
          node_id: V,
          success: !T,
          error: T
        });
      }
    }
    return g.nodesInstalled = x.nodes_installed, g.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (g.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function C(M, x, E) {
    w(), g.phase = "resolving", i.value = null;
    const K = Object.fromEntries(x), q = Object.fromEntries(E);
    try {
      const V = await fetch(`/v2/comfygit/workflow/${M}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: K,
          model_choices: q
        })
      });
      if (!V.ok)
        throw new Error(`Request failed: ${V.status}`);
      if (!V.body)
        throw new Error("No response body");
      const T = V.body.getReader(), P = new TextDecoder();
      let L = "";
      for (; ; ) {
        const { done: ae, value: Z } = await T.read();
        if (ae) break;
        L += P.decode(Z, { stream: !0 });
        const F = L.split(`

`);
        L = F.pop() || "";
        for (const G of F) {
          if (!G.trim()) continue;
          const J = G.split(`
`);
          let O = "", se = "";
          for (const X of J)
            X.startsWith("event: ") ? O = X.slice(7) : X.startsWith("data: ") && (se = X.slice(6));
          if (se)
            try {
              const X = JSON.parse(se);
              b(O, X);
            } catch (X) {
              console.warn("Failed to parse SSE event:", X);
            }
        }
      }
    } catch (V) {
      const T = V instanceof Error ? V.message : "Unknown error occurred";
      throw i.value = T, g.error = T, g.phase = "error", V;
    }
  }
  function b(M, x) {
    switch (M) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = x.total;
        break;
      case "file_start":
        g.currentFile = x.filename, g.currentFileIndex = x.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = x.downloaded, g.bytesTotal = x.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = x.nodes_to_install || [], x.download_results && (g.completedFiles = x.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = x.message, g.phase = "error", i.value = x.message;
        break;
    }
  }
  function I(M, x) {
    const { addToQueue: E } = bo(), K = x.filter((q) => q.url && q.target_path).map((q) => ({
      workflow: M,
      filename: q.filename,
      url: q.url,
      targetPath: q.target_path,
      size: q.size || 0,
      type: "model"
    }));
    return K.length > 0 && E(K), K.length;
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
    applyResolutionWithProgress: C,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: I
  };
}
const Op = { class: "resolution-stepper" }, Np = { class: "stepper-header" }, Up = ["onClick"], zp = {
  key: 0,
  class: "step-icon"
}, Fp = {
  key: 1,
  class: "step-number"
}, Bp = { class: "step-label" }, Vp = {
  key: 0,
  class: "step-connector"
}, Wp = { class: "stepper-content" }, Gp = /* @__PURE__ */ de({
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
    function u(m) {
      return !1;
    }
    function d(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), r("div", Op, [
      t("div", Np, [
        (a(!0), r(H, null, pe(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Ie(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Ie(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", zp, "✓")) : (a(), r("span", Fp, f(w + 1), 1))
          ], 2),
          t("div", Bp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Vp)) : y("", !0)
        ], 10, Up))), 128))
      ]),
      t("div", Wp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), jp = /* @__PURE__ */ me(Gp, [["__scopeId", "data-v-2a7b3af8"]]), Hp = /* @__PURE__ */ de({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = N(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = N(() => `confidence-${o.value}`), l = N(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Ie(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), zn = /* @__PURE__ */ me(Hp, [["__scopeId", "data-v-17ec4b80"]]), Kp = { class: "node-info" }, qp = { class: "node-info-text" }, Yp = { class: "item-body" }, Jp = {
  key: 0,
  class: "resolved-state"
}, Qp = {
  key: 1,
  class: "multiple-options"
}, Xp = { class: "options-list" }, Zp = ["onClick"], eg = ["name", "value", "checked", "onChange"], tg = { class: "option-content" }, sg = { class: "option-header" }, og = { class: "option-package-id" }, ng = {
  key: 0,
  class: "option-title"
}, ag = { class: "option-meta" }, lg = {
  key: 0,
  class: "installed-badge"
}, ig = { class: "action-buttons" }, rg = {
  key: 2,
  class: "unresolved"
}, cg = {
  key: 0,
  class: "searching-state"
}, ug = { class: "options-list" }, dg = ["onClick"], fg = ["name", "value"], mg = { class: "option-content" }, vg = { class: "option-header" }, pg = { class: "option-package-id" }, gg = {
  key: 0,
  class: "option-description"
}, hg = { class: "option-meta" }, yg = {
  key: 0,
  class: "installed-badge"
}, wg = {
  key: 2,
  class: "unresolved-message"
}, _g = { class: "action-buttons" }, kg = /* @__PURE__ */ de({
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
    const i = N(() => !!o.choice);
    N(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), N(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
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
    function u(d) {
      n("option-selected", d);
    }
    return (d, m) => (a(), r("div", {
      class: Ie(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Kp, [
        t("span", qp, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Yp, [
        i.value ? (a(), r("div", Jp, [
          S(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Qp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Xp, [
            (a(!0), r(H, null, pe(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Ie(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => u(g)
              }, null, 40, eg),
              t("div", tg, [
                t("div", sg, [
                  t("span", og, f(v.package_id), 1),
                  S(zn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", ng, f(v.title), 1)) : y("", !0),
                t("div", ag, [
                  v.is_installed ? (a(), r("span", lg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Zp))), 128))
          ]),
          t("div", ig, [
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), r("div", rg, [
          e.isSearching ? (a(), r("div", cg, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(H, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", ug, [
              (a(!0), r(H, null, pe(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, fg),
                t("div", mg, [
                  t("div", vg, [
                    t("span", pg, f(v.package_id), 1),
                    S(zn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", gg, f(l(v.description)), 1)) : y("", !0),
                  t("div", hg, [
                    v.is_installed ? (a(), r("span", yg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, dg))), 128))
            ])
          ], 64)) : (a(), r("div", wg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", _g, [
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
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
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
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
}), bg = /* @__PURE__ */ me(kg, [["__scopeId", "data-v-c2997d1d"]]), $g = { class: "item-navigator" }, Cg = { class: "nav-item-info" }, xg = ["title"], Sg = { class: "nav-controls" }, Ig = { class: "nav-arrows" }, Eg = ["disabled"], Tg = ["disabled"], Pg = { class: "nav-position" }, Rg = /* @__PURE__ */ de({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", $g, [
      t("div", Cg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, xg)
      ]),
      t("div", Sg, [
        t("div", Ig, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Eg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, Tg)
        ]),
        t("span", Pg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Tr = /* @__PURE__ */ me(Rg, [["__scopeId", "data-v-74af7920"]]), Mg = ["type", "value", "placeholder", "disabled"], Dg = {
  key: 0,
  class: "base-input-error"
}, Lg = /* @__PURE__ */ de({
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
      class: Ie(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ie(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Kt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Kt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Mg),
      e.error ? (a(), r("span", Dg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ me(Lg, [["__scopeId", "data-v-9ba02cdc"]]), Ag = { class: "node-resolution-step" }, Og = {
  key: 0,
  class: "auto-resolved-section"
}, Ng = { class: "section-header" }, Ug = { class: "stat-badge" }, zg = { class: "resolved-packages-list" }, Fg = { class: "package-info" }, Bg = { class: "package-id" }, Vg = { class: "node-count" }, Wg = { class: "package-actions" }, Gg = {
  key: 0,
  class: "status-badge install"
}, jg = {
  key: 1,
  class: "status-badge skip"
}, Hg = ["onClick"], Kg = {
  key: 1,
  class: "section-divider"
}, qg = { class: "step-header" }, Yg = { class: "stat-badge" }, Jg = {
  key: 1,
  class: "step-body"
}, Qg = {
  key: 3,
  class: "empty-state"
}, Xg = { class: "node-modal-body" }, Zg = { class: "node-search-results-container" }, eh = {
  key: 0,
  class: "node-search-results"
}, th = ["onClick"], sh = { class: "node-result-header" }, oh = { class: "node-result-package-id" }, nh = {
  key: 0,
  class: "node-result-description"
}, ah = {
  key: 1,
  class: "node-empty-state"
}, lh = {
  key: 2,
  class: "node-empty-state"
}, ih = {
  key: 3,
  class: "node-empty-state"
}, rh = { class: "node-manual-entry-modal" }, ch = { class: "node-modal-body" }, uh = { class: "node-modal-actions" }, dh = /* @__PURE__ */ de({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = Er(), i = k(0), c = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && X(), _.value = !1;
    }
    const b = N(() => o.nodes[i.value]), I = N(() => o.nodes.filter((Te) => o.nodeChoices.has(Te.node_type)).length), M = N(() => b.value ? w.value.get(b.value.node_type) || [] : []), x = N(() => b.value ? p.value.has(b.value.node_type) : !1);
    gt(b, async (Te) => {
      var Pe;
      Te && ((Pe = Te.options) != null && Pe.length || w.value.has(Te.node_type) || p.value.has(Te.node_type) || o.nodeChoices.has(Te.node_type) || await E(Te.node_type));
    }, { immediate: !0 });
    async function E(Te) {
      p.value.add(Te);
      try {
        const Pe = await l(Te, 5);
        w.value.set(Te, Pe);
      } catch {
        w.value.set(Te, []);
      } finally {
        p.value.delete(Te);
      }
    }
    const K = N(() => o.autoResolvedPackages.filter((Te) => !o.skippedPackages.has(Te.package_id)).length);
    function q(Te) {
      return o.skippedPackages.has(Te);
    }
    function V(Te) {
      n("package-skip", Te);
    }
    const T = N(() => {
      var Pe;
      if (!b.value) return "not-found";
      const Te = o.nodeChoices.get(b.value.node_type);
      if (Te)
        switch (Te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Pe = b.value.options) != null && Pe.length ? "ambiguous" : "not-found";
    }), P = N(() => {
      var Pe;
      if (!b.value) return;
      const Te = o.nodeChoices.get(b.value.node_type);
      if (Te)
        switch (Te.action) {
          case "install":
            return Te.package_id ? `→ ${Te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Pe = b.value.options) != null && Pe.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function L(Te) {
      Te >= 0 && Te < o.nodes.length && (i.value = Te);
    }
    function ae() {
      var Te;
      for (let Pe = i.value + 1; Pe < o.nodes.length; Pe++) {
        const ke = o.nodes[Pe];
        if (!((Te = o.nodeChoices) != null && Te.has(ke.node_type))) {
          L(Pe);
          return;
        }
      }
    }
    function Z() {
      b.value && (n("mark-optional", b.value.node_type), yt(() => ae()));
    }
    function F() {
      b.value && (n("skip", b.value.node_type), yt(() => ae()));
    }
    function G(Te) {
      b.value && (n("option-selected", b.value.node_type, Te), yt(() => ae()));
    }
    function J() {
      b.value && n("clear-choice", b.value.node_type);
    }
    function O() {
      b.value && (d.value = b.value.node_type, v.value = M.value, c.value = !0, ve(d.value));
    }
    function se() {
      m.value = "", u.value = !0;
    }
    function X() {
      c.value = !1, d.value = "", v.value = [];
    }
    function he() {
      u.value = !1, m.value = "";
    }
    let we = null;
    function re() {
      we && clearTimeout(we), we = setTimeout(() => {
        ve(d.value);
      }, 300);
    }
    async function ve(Te) {
      if (!Te.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(Te, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function Se(Te) {
      b.value && (n("manual-entry", b.value.node_type, Te.package_id), X(), yt(() => ae()));
    }
    function Fe(Te) {
      b.value && (n("manual-entry", b.value.node_type, Te.package_id), yt(() => ae()));
    }
    function ze() {
      !b.value || !m.value.trim() || (n("manual-entry", b.value.node_type, m.value.trim()), he(), yt(() => ae()));
    }
    return (Te, Pe) => {
      var ke, ge;
      return a(), r("div", Ag, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", Og, [
          t("div", Ng, [
            Pe[6] || (Pe[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Ug, f(K.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", zg, [
            (a(!0), r(H, null, pe(e.autoResolvedPackages, (De) => (a(), r("div", {
              key: De.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Fg, [
                t("code", Bg, f(De.package_id), 1),
                t("span", Vg, f(De.node_types_count) + " node type" + f(De.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Wg, [
                q(De.package_id) ? (a(), r("span", jg, " SKIPPED ")) : (a(), r("span", Gg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Me) => V(De.package_id)
                }, f(q(De.package_id) ? "Include" : "Skip"), 9, Hg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Kg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(H, { key: 2 }, [
          t("div", qg, [
            Pe[7] || (Pe[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Yg, f(I.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (a(), D(Tr, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Pe[0] || (Pe[0] = (De) => L(i.value - 1)),
            onNext: Pe[1] || (Pe[1] = (De) => L(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (a(), r("div", Jg, [
            S(bg, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ke = b.value.options) != null && ke.length),
              options: b.value.options,
              choice: (ge = e.nodeChoices) == null ? void 0 : ge.get(b.value.node_type),
              status: T.value,
              "status-label": P.value,
              "search-results": M.value,
              "is-searching": x.value,
              onMarkOptional: Z,
              onSkip: F,
              onManualEntry: se,
              onSearch: O,
              onOptionSelected: G,
              onClearChoice: J,
              onSearchResultSelected: Fe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Qg, [...Pe[8] || (Pe[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), D(_t, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Pe[4] || (Pe[4] = at((De) => _.value = !0, ["self"])),
            onMouseup: at(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Pe[3] || (Pe[3] = (De) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Pe[9] || (Pe[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              t("div", Xg, [
                S(Tt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Pe[2] || (Pe[2] = (De) => d.value = De),
                  placeholder: "Search by node type, package name...",
                  onInput: re
                }, null, 8, ["modelValue"]),
                t("div", Zg, [
                  v.value.length > 0 ? (a(), r("div", eh, [
                    (a(!0), r(H, null, pe(v.value, (De) => (a(), r("div", {
                      key: De.package_id,
                      class: "node-search-result-item",
                      onClick: (Me) => Se(De)
                    }, [
                      t("div", sh, [
                        t("code", oh, f(De.package_id), 1),
                        De.match_confidence ? (a(), D(zn, {
                          key: 0,
                          confidence: De.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      De.description ? (a(), r("div", nh, f(De.description), 1)) : y("", !0)
                    ], 8, th))), 128))
                  ])) : g.value ? (a(), r("div", ah, "Searching...")) : d.value ? (a(), r("div", lh, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), r("div", ih, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), D(_t, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: at(he, ["self"])
          }, [
            t("div", rh, [
              t("div", { class: "node-modal-header" }, [
                Pe[10] || (Pe[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              t("div", ch, [
                S(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Pe[5] || (Pe[5] = (De) => m.value = De),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", uh, [
                  S(Re, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: h(() => [...Pe[11] || (Pe[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Re, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: ze
                  }, {
                    default: h(() => [...Pe[12] || (Pe[12] = [
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
}), fh = /* @__PURE__ */ me(dh, [["__scopeId", "data-v-6d7f8125"]]), mh = { class: "node-info" }, vh = { class: "node-info-text" }, ph = { class: "item-body" }, gh = {
  key: 0,
  class: "resolved-state"
}, hh = {
  key: 1,
  class: "multiple-options"
}, yh = { class: "options-list" }, wh = ["onClick"], _h = ["name", "value", "checked", "onChange"], kh = { class: "option-content" }, bh = { class: "option-header" }, $h = { class: "option-filename" }, Ch = { class: "option-meta" }, xh = { class: "option-size" }, Sh = { class: "option-category" }, Ih = { class: "option-path" }, Eh = { class: "action-buttons" }, Th = {
  key: 2,
  class: "unresolved"
}, Ph = { class: "action-buttons" }, Rh = /* @__PURE__ */ de({
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
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), N(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
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
    function c(d) {
      n("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (a(), r("div", {
      class: Ie(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", mh, [
        t("span", vh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", ph, [
        l.value ? (a(), r("div", gh, [
          S(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", hh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", yh, [
            (a(!0), r(H, null, pe(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: Ie(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, _h),
              t("div", kh, [
                t("div", bh, [
                  t("span", $h, f(v.model.filename), 1),
                  S(zn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Ch, [
                  t("span", xh, f(u(v.model.size)), 1),
                  t("span", Sh, f(v.model.category), 1)
                ]),
                t("div", Ih, f(v.model.relative_path), 1)
              ])
            ], 10, wh))), 128))
          ]),
          t("div", Eh, [
            S(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: h(() => [...m[11] || (m[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), r("div", Th, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Ph, [
            S(Re, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
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
}), Mh = /* @__PURE__ */ me(Rh, [["__scopeId", "data-v-8a82fefa"]]), Dh = { class: "model-resolution-step" }, Lh = { class: "step-header" }, Ah = { class: "step-info" }, Oh = { class: "step-title" }, Nh = { class: "step-description" }, Uh = { class: "stat-badge" }, zh = {
  key: 1,
  class: "step-body"
}, Fh = {
  key: 2,
  class: "empty-state"
}, Bh = { class: "model-search-modal" }, Vh = { class: "model-modal-body" }, Wh = {
  key: 0,
  class: "model-search-results"
}, Gh = ["onClick"], jh = { class: "model-result-header" }, Hh = { class: "model-result-filename" }, Kh = { class: "model-result-meta" }, qh = { class: "model-result-category" }, Yh = { class: "model-result-size" }, Jh = {
  key: 0,
  class: "model-result-path"
}, Qh = {
  key: 1,
  class: "model-no-results"
}, Xh = {
  key: 2,
  class: "model-searching"
}, Zh = { class: "model-download-url-modal" }, ey = { class: "model-modal-body" }, ty = { class: "model-input-group" }, sy = { class: "model-input-group" }, oy = { class: "model-modal-actions" }, ny = /* @__PURE__ */ de({
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
    function n(X) {
      var he;
      return X && ((he = o[X]) == null ? void 0 : he[0]) || null;
    }
    const l = e, i = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[c.value]), C = N(() => l.models.some((X) => X.is_download_intent)), b = N(() => l.models.filter(
      (X) => l.modelChoices.has(X.filename) || X.is_download_intent
    ).length), I = N(() => {
      var he;
      if (!_.value) return "";
      const X = n((he = _.value.reference) == null ? void 0 : he.node_type);
      return X ? `${X}/${_.value.filename}` : "";
    }), M = N(() => {
      var he;
      if (!_.value) return "not-found";
      const X = l.modelChoices.get(_.value.filename);
      if (X)
        switch (X.action) {
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
      return _.value.is_download_intent ? "download" : (he = _.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), x = N(() => {
      var he, we;
      if (!_.value) return;
      const X = l.modelChoices.get(_.value.filename);
      if (X)
        switch (X.action) {
          case "select":
            return (he = X.selected_model) != null && he.filename ? `→ ${X.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (we = _.value.options) != null && we.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function E(X) {
      X >= 0 && X < l.models.length && (c.value = X);
    }
    function K() {
      var X;
      for (let he = c.value + 1; he < l.models.length; he++) {
        const we = l.models[he];
        if (!we.is_download_intent && !((X = l.modelChoices) != null && X.has(we.filename))) {
          E(he);
          return;
        }
      }
    }
    function q() {
      _.value && (i("mark-optional", _.value.filename), yt(() => K()));
    }
    function V() {
      _.value && (i("skip", _.value.filename), yt(() => K()));
    }
    function T(X) {
      _.value && (i("option-selected", _.value.filename, X), yt(() => K()));
    }
    function P() {
      _.value && i("clear-choice", _.value.filename);
    }
    function L() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function ae() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || I.value, d.value = !0);
    }
    function Z() {
      u.value = !1, m.value = "", w.value = [];
    }
    function F() {
      d.value = !1, v.value = "", g.value = "";
    }
    function G() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function J(X) {
      _.value && (Z(), yt(() => K()));
    }
    function O() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), F(), yt(() => K()));
    }
    function se(X) {
      if (!X) return "Unknown";
      const he = X / (1024 * 1024 * 1024);
      return he >= 1 ? `${he.toFixed(2)} GB` : `${(X / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (X, he) => {
      var we, re, ve;
      return a(), r("div", Dh, [
        t("div", Lh, [
          t("div", Ah, [
            t("h3", Oh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Nh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Uh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), D(Tr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: he[0] || (he[0] = (Se) => E(c.value - 1)),
          onNext: he[1] || (he[1] = (Se) => E(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", zh, [
          S(Mh, {
            filename: _.value.filename,
            "node-type": ((we = _.value.reference) == null ? void 0 : we.node_type) || "Unknown",
            "has-multiple-options": !!((re = _.value.options) != null && re.length),
            options: _.value.options,
            choice: (ve = e.modelChoices) == null ? void 0 : ve.get(_.value.filename),
            status: M.value,
            "status-label": x.value,
            onMarkOptional: q,
            onSkip: V,
            onDownloadUrl: ae,
            onSearch: L,
            onOptionSelected: T,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Fh, [...he[5] || (he[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), D(_t, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: at(Z, ["self"])
          }, [
            t("div", Bh, [
              t("div", { class: "model-modal-header" }, [
                he[6] || (he[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", Vh, [
                S(Tt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (Se) => m.value = Se),
                  placeholder: "Search by filename, category...",
                  onInput: G
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Wh, [
                  (a(!0), r(H, null, pe(w.value, (Se) => (a(), r("div", {
                    key: Se.hash,
                    class: "model-search-result-item",
                    onClick: (Fe) => J()
                  }, [
                    t("div", jh, [
                      t("code", Hh, f(Se.filename), 1)
                    ]),
                    t("div", Kh, [
                      t("span", qh, f(Se.category), 1),
                      t("span", Yh, f(se(Se.size)), 1)
                    ]),
                    Se.relative_path ? (a(), r("div", Jh, f(Se.relative_path), 1)) : y("", !0)
                  ], 8, Gh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Qh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Xh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), D(_t, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: at(F, ["self"])
          }, [
            t("div", Zh, [
              t("div", { class: "model-modal-header" }, [
                he[7] || (he[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              t("div", ey, [
                t("div", ty, [
                  he[8] || (he[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(Tt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": he[3] || (he[3] = (Se) => v.value = Se),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", sy, [
                  he[9] || (he[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(Tt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": he[4] || (he[4] = (Se) => g.value = Se),
                    placeholder: I.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", oy, [
                  S(Re, {
                    variant: "secondary",
                    onClick: F
                  }, {
                    default: h(() => [...he[10] || (he[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: O
                  }, {
                    default: h(() => [...he[11] || (he[11] = [
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
}), ay = /* @__PURE__ */ me(ny, [["__scopeId", "data-v-5c700bfa"]]), ly = { class: "applying-step" }, iy = {
  key: 0,
  class: "phase-content"
}, ry = {
  key: 1,
  class: "phase-content"
}, cy = { class: "phase-description" }, uy = { class: "overall-progress" }, dy = { class: "progress-bar" }, fy = { class: "progress-label" }, my = { class: "install-list" }, vy = { class: "install-icon" }, py = { key: 0 }, gy = {
  key: 1,
  class: "spinner"
}, hy = { key: 2 }, yy = { key: 3 }, wy = {
  key: 0,
  class: "install-error"
}, _y = {
  key: 2,
  class: "phase-content"
}, ky = { class: "phase-header" }, by = { class: "phase-title" }, $y = { class: "completion-summary" }, Cy = {
  key: 0,
  class: "summary-item success"
}, xy = { class: "summary-text" }, Sy = {
  key: 1,
  class: "summary-item error"
}, Iy = { class: "summary-text" }, Ey = {
  key: 2,
  class: "failed-list"
}, Ty = { class: "failed-node-id" }, Py = { class: "failed-error" }, Ry = {
  key: 4,
  class: "summary-item success"
}, My = {
  key: 5,
  class: "restart-prompt"
}, Dy = {
  key: 3,
  class: "phase-content error"
}, Ly = { class: "error-message" }, Ay = /* @__PURE__ */ de({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = N(() => {
      var m, v;
      const u = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = N(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = N(() => n.value.length > 0);
    function i(u, d) {
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
      return a(), r("div", ly, [
        e.progress.phase === "resolving" ? (a(), r("div", iy, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", ry, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", cy, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", uy, [
            t("div", dy, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", fy, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", my, [
            (a(!0), r(H, null, pe(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Ie(["install-item", i(p, _)])
            }, [
              t("span", vy, [
                i(p, _) === "pending" ? (a(), r("span", py, "○")) : i(p, _) === "installing" ? (a(), r("span", gy, "◌")) : i(p, _) === "complete" ? (a(), r("span", hy, "✓")) : i(p, _) === "failed" ? (a(), r("span", yy, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", wy, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", _y, [
          t("div", ky, [
            t("span", {
              class: Ie(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", by, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", $y, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", Cy, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", xy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", Sy, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", Iy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", Ey, [
              (a(!0), r(H, null, pe(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", Ty, f(p.node_id), 1),
                t("span", Py, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", Ry, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", My, [
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
        ])) : e.progress.phase === "error" ? (a(), r("div", Dy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", Ly, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Oy = /* @__PURE__ */ me(Ay, [["__scopeId", "data-v-5efaae58"]]), Ny = {
  key: 0,
  class: "loading-state"
}, Uy = {
  key: 1,
  class: "wizard-content"
}, zy = {
  key: 0,
  class: "step-content"
}, Fy = { class: "analysis-summary" }, By = { class: "analysis-header" }, Vy = { class: "summary-description" }, Wy = { class: "stats-grid" }, Gy = { class: "stat-card" }, jy = { class: "stat-items" }, Hy = {
  key: 0,
  class: "stat-item success"
}, Ky = { class: "stat-count" }, qy = {
  key: 1,
  class: "stat-item info"
}, Yy = { class: "stat-count" }, Jy = {
  key: 2,
  class: "stat-item warning"
}, Qy = { class: "stat-count" }, Xy = {
  key: 3,
  class: "stat-item error"
}, Zy = { class: "stat-count" }, e1 = { class: "stat-card" }, t1 = { class: "stat-items" }, s1 = { class: "stat-item success" }, o1 = { class: "stat-count" }, n1 = {
  key: 0,
  class: "stat-item info"
}, a1 = { class: "stat-count" }, l1 = {
  key: 1,
  class: "stat-item warning"
}, i1 = { class: "stat-count" }, r1 = {
  key: 2,
  class: "stat-item warning"
}, c1 = { class: "stat-count" }, u1 = {
  key: 3,
  class: "stat-item error"
}, d1 = { class: "stat-count" }, f1 = {
  key: 0,
  class: "status-message warning"
}, m1 = { class: "status-text" }, v1 = {
  key: 1,
  class: "status-message info"
}, p1 = { class: "status-text" }, g1 = {
  key: 2,
  class: "status-message info"
}, h1 = { class: "status-text" }, y1 = {
  key: 3,
  class: "status-message warning"
}, w1 = { class: "status-text" }, _1 = {
  key: 4,
  class: "status-message success"
}, k1 = {
  key: 5,
  class: "category-mismatch-section"
}, b1 = { class: "mismatch-list" }, $1 = { class: "mismatch-path" }, C1 = { class: "mismatch-target" }, x1 = {
  key: 3,
  class: "step-content"
}, S1 = { class: "review-summary" }, I1 = { class: "review-stats" }, E1 = { class: "review-stat" }, T1 = { class: "stat-value" }, P1 = { class: "review-stat" }, R1 = { class: "stat-value" }, M1 = { class: "review-stat" }, D1 = { class: "stat-value" }, L1 = { class: "review-stat" }, A1 = { class: "stat-value" }, O1 = {
  key: 0,
  class: "review-section"
}, N1 = { class: "section-title" }, U1 = { class: "review-items" }, z1 = { class: "item-name" }, F1 = { class: "item-choice" }, B1 = {
  key: 0,
  class: "choice-badge install"
}, V1 = {
  key: 1,
  class: "choice-badge skip"
}, W1 = {
  key: 1,
  class: "review-section"
}, G1 = { class: "section-title" }, j1 = { class: "review-items" }, H1 = { class: "item-name" }, K1 = { class: "item-choice" }, q1 = {
  key: 0,
  class: "choice-badge install"
}, Y1 = {
  key: 1,
  class: "choice-badge optional"
}, J1 = {
  key: 2,
  class: "choice-badge skip"
}, Q1 = {
  key: 1,
  class: "choice-badge pending"
}, X1 = {
  key: 2,
  class: "review-section"
}, Z1 = { class: "section-title" }, e0 = { class: "review-items download-details" }, t0 = { class: "download-info" }, s0 = { class: "item-name" }, o0 = { class: "download-meta" }, n0 = { class: "download-path" }, a0 = ["title"], l0 = {
  key: 3,
  class: "review-section"
}, i0 = { class: "section-title" }, r0 = { class: "review-items" }, c0 = { class: "item-name" }, u0 = { class: "item-choice" }, d0 = {
  key: 0,
  class: "choice-badge install"
}, f0 = {
  key: 1,
  class: "choice-badge download"
}, m0 = {
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
  key: 4,
  class: "no-choices"
}, w0 = /* @__PURE__ */ de({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Er(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = et(), w = k(null), p = k(!1), _ = k(!1), C = k(null), b = k("analysis"), I = k([]), M = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Set()), K = N(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (V.value || L.value) && j.push({ id: "nodes", label: "Nodes" }), T.value && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), b.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), q = N(() => w.value ? w.value.stats.needs_user_input : !1), V = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), T = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), P = N(() => w.value ? w.value.stats.download_intents > 0 : !1), L = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ae = N(() => w.value ? w.value.nodes.resolved.length : 0), Z = N(() => w.value ? w.value.models.resolved.filter((j) => j.has_category_mismatch) : []), F = N(() => Z.value.length > 0), G = N(() => V.value || L.value ? "nodes" : T.value ? "models" : "review"), J = N(() => {
      if (!w.value) return [];
      const j = w.value.nodes.resolved.filter((ue) => !ue.is_installed), B = /* @__PURE__ */ new Set();
      return j.filter((ue) => B.has(ue.package.package_id) ? !1 : (B.add(ue.package.package_id), !0));
    }), O = N(() => {
      if (!w.value) return [];
      const j = w.value.nodes.resolved.filter((ue) => !ue.is_installed), B = /* @__PURE__ */ new Map();
      for (const ue of j) {
        const Ve = B.get(ue.package.package_id);
        Ve ? Ve.node_types_count++ : B.set(ue.package.package_id, {
          package_id: ue.package.package_id,
          title: ue.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), se = N(() => J.value.filter((j) => !E.value.has(j.package.package_id))), X = N(() => w.value ? w.value.models.resolved.filter(
      (j) => j.match_type === "download_intent" || j.match_type === "property_download_intent"
    ).map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), he = N(() => {
      if (!w.value) return [];
      const j = w.value.nodes.unresolved.map((ue) => ({
        node_type: ue.reference.node_type,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), B = w.value.nodes.ambiguous.map((ue) => ({
        node_type: ue.reference.node_type,
        has_multiple_options: !0,
        options: ue.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...j, ...B];
    }), we = N(() => {
      if (!w.value) return [];
      const j = w.value.models.unresolved.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        reason: ue.reason,
        is_unresolved: !0,
        options: void 0
      })), B = w.value.models.ambiguous.map((ue) => ({
        filename: ue.reference.widget_value,
        reference: ue.reference,
        has_multiple_options: !0,
        options: ue.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...j, ...B];
    }), re = N(() => {
      const j = we.value, B = X.value.map((ue) => ({
        filename: ue.filename,
        reference: ue.reference,
        is_download_intent: !0,
        resolved_model: ue.resolved_model,
        download_source: ue.download_source,
        target_path: ue.target_path,
        options: void 0
      }));
      return [...j, ...B];
    }), ve = N(() => X.value.filter((j) => {
      const B = x.value.get(j.filename);
      return B ? B.action === "download" : !0;
    }).map((j) => ({
      filename: j.filename,
      url: j.download_source,
      target_path: j.target_path
    })));
    function Se(j, B = 50) {
      return j.length <= B ? j : j.slice(0, B - 3) + "...";
    }
    const Fe = N(() => {
      let j = se.value.length;
      for (const B of M.value.values())
        B.action === "install" && j++;
      for (const B of x.value.values())
        B.action === "select" && j++;
      return j;
    }), ze = N(() => {
      let j = 0;
      for (const B of x.value.values())
        B.action === "download" && j++;
      for (const B of X.value)
        x.value.get(B.filename) || j++;
      return j;
    }), Te = N(() => {
      let j = 0;
      for (const B of M.value.values())
        B.action === "optional" && j++;
      for (const B of x.value.values())
        B.action === "optional" && j++;
      return j;
    }), Pe = N(() => {
      let j = E.value.size;
      for (const B of M.value.values())
        B.action === "skip" && j++;
      for (const B of x.value.values())
        B.action === "skip" && j++;
      for (const B of he.value)
        M.value.has(B.node_type) || j++;
      for (const B of we.value)
        x.value.has(B.filename) || j++;
      return j;
    }), ke = N(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, V.value) {
        const B = he.value.length, ue = he.value.filter(
          (Ve) => M.value.has(Ve.node_type)
        ).length;
        j.nodes = { resolved: ue, total: B };
      }
      if (T.value) {
        const B = re.value.length, ue = re.value.filter(
          (Ve) => x.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        j.models = { resolved: ue, total: B };
      }
      if (j.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const B = d.totalFiles || 1, ue = d.completedFiles.length;
        j.applying = { resolved: ue, total: B };
      }
      return j;
    });
    function ge(j) {
      b.value = j;
    }
    function De() {
      const j = K.value.findIndex((B) => B.id === b.value);
      j > 0 && (b.value = K.value[j - 1].id);
    }
    function Me() {
      const j = K.value.findIndex((B) => B.id === b.value);
      j < K.value.length - 1 && (b.value = K.value[j + 1].id);
    }
    async function A() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (j) {
        C.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function R() {
      I.value.includes("analysis") || I.value.push("analysis"), V.value || L.value ? b.value = "nodes" : T.value ? b.value = "models" : b.value = "review";
    }
    function z(j) {
      M.value.set(j, { action: "optional" });
    }
    function W(j) {
      M.value.set(j, { action: "skip" });
    }
    function ee(j, B) {
      var Ve;
      const ue = he.value.find((Xe) => Xe.node_type === j);
      (Ve = ue == null ? void 0 : ue.options) != null && Ve[B] && M.value.set(j, {
        action: "install",
        package_id: ue.options[B].package_id
      });
    }
    function ie(j, B) {
      M.value.set(j, {
        action: "install",
        package_id: B
      });
    }
    function ye(j) {
      M.value.delete(j);
    }
    function $e(j) {
      E.value.has(j) ? E.value.delete(j) : E.value.add(j);
    }
    function ne(j) {
      x.value.set(j, { action: "optional" });
    }
    function fe(j) {
      x.value.set(j, { action: "skip" });
    }
    function Le(j, B) {
      var Ve;
      const ue = we.value.find((Xe) => Xe.filename === j);
      (Ve = ue == null ? void 0 : ue.options) != null && Ve[B] && x.value.set(j, {
        action: "select",
        selected_model: ue.options[B].model
      });
    }
    function Ee(j, B, ue) {
      x.value.set(j, {
        action: "download",
        url: B,
        target_path: ue
      });
    }
    function oe(j) {
      x.value.delete(j);
    }
    async function Q(j) {
      try {
        await g(j);
      } catch (B) {
        C.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function Ae() {
      var j;
      _.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const B = await i(o.workflowName, M.value, x.value, E.value);
        B.models_to_download && B.models_to_download.length > 0 && u(o.workflowName, B.models_to_download);
        const ue = [
          ...B.nodes_to_install || [],
          ...se.value.map((Xe) => Xe.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ue)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((j = d.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Xe) => !Xe.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (B) {
        C.value = B instanceof Error ? B.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function Ce() {
      n("refresh"), n("restart"), n("close");
    }
    async function be() {
      var B;
      const j = ((B = d.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((ue) => !ue.success).map((ue) => ue.node_id)) || [];
      if (j.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, d.nodesToInstall = j, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (ue) {
          d.error = ue instanceof Error ? ue.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Je(A), (j, B) => (a(), D(ut, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (ue) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", Ny, [...B[2] || (B[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", Uy, [
          S(jp, {
            steps: K.value,
            "current-step": b.value,
            "completed-steps": I.value,
            "step-stats": ke.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (a(), r("div", zy, [
            t("div", Fy, [
              t("div", By, [
                B[3] || (B[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Vy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Wy, [
                t("div", Gy, [
                  B[12] || (B[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", jy, [
                    ae.value > 0 ? (a(), r("div", Hy, [
                      B[4] || (B[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ky, f(ae.value), 1),
                      B[5] || (B[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", qy, [
                      B[6] || (B[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Yy, f(w.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", Jy, [
                      B[8] || (B[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Qy, f(w.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Xy, [
                      B[10] || (B[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Zy, f(w.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", e1, [
                  B[23] || (B[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", t1, [
                    t("div", s1, [
                      B[13] || (B[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", o1, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", n1, [
                      B[15] || (B[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", a1, f(w.value.stats.download_intents), 1),
                      B[16] || (B[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    F.value ? (a(), r("div", l1, [
                      B[17] || (B[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", i1, f(Z.value.length), 1),
                      B[18] || (B[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", r1, [
                      B[19] || (B[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", c1, f(w.value.models.ambiguous.length), 1),
                      B[20] || (B[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", u1, [
                      B[21] || (B[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", d1, f(w.value.models.unresolved.length), 1),
                      B[22] || (B[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              q.value ? (a(), r("div", f1, [
                B[24] || (B[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", m1, f(he.value.length + we.value.length) + " items need your input", 1)
              ])) : L.value ? (a(), r("div", v1, [
                B[25] || (B[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", p1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(P.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : P.value ? (a(), r("div", g1, [
                B[26] || (B[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", h1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : F.value ? (a(), r("div", y1, [
                B[27] || (B[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", w1, f(Z.value.length) + " model" + f(Z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", _1, [...B[28] || (B[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              F.value ? (a(), r("div", k1, [
                B[31] || (B[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", b1, [
                  (a(!0), r(H, null, pe(Z.value, (ue) => {
                    var Ve, Xe;
                    return a(), r("div", {
                      key: ue.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", $1, f(ue.actual_category) + "/" + f((Ve = ue.model) == null ? void 0 : Ve.filename), 1),
                      B[30] || (B[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", C1, f((Xe = ue.expected_categories) == null ? void 0 : Xe[0]) + "/", 1),
                      ue.file_path ? (a(), D(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => Q(ue.file_path)
                      }, {
                        default: h(() => [...B[29] || (B[29] = [
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
          b.value === "nodes" ? (a(), D(fh, {
            key: 1,
            nodes: he.value,
            "node-choices": M.value,
            "auto-resolved-packages": O.value,
            "skipped-packages": E.value,
            onMarkOptional: z,
            onSkip: W,
            onOptionSelected: ee,
            onManualEntry: ie,
            onClearChoice: ye,
            onPackageSkip: $e
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (a(), D(ay, {
            key: 2,
            models: re.value,
            "model-choices": x.value,
            onMarkOptional: ne,
            onSkip: fe,
            onOptionSelected: Le,
            onDownloadUrl: Ee,
            onClearChoice: oe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (a(), r("div", x1, [
            t("div", S1, [
              B[37] || (B[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", I1, [
                t("div", E1, [
                  t("span", T1, f(Fe.value), 1),
                  B[32] || (B[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", P1, [
                  t("span", R1, f(ze.value), 1),
                  B[33] || (B[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", M1, [
                  t("span", D1, f(Te.value), 1),
                  B[34] || (B[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", L1, [
                  t("span", A1, f(Pe.value), 1),
                  B[35] || (B[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              O.value.length > 0 ? (a(), r("div", O1, [
                t("h4", N1, "Node Packages (" + f(O.value.length) + ")", 1),
                t("div", U1, [
                  (a(!0), r(H, null, pe(O.value, (ue) => (a(), r("div", {
                    key: ue.package_id,
                    class: "review-item"
                  }, [
                    t("code", z1, f(ue.package_id), 1),
                    t("div", F1, [
                      E.value.has(ue.package_id) ? (a(), r("span", V1, "Skipped")) : (a(), r("span", B1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              he.value.length > 0 ? (a(), r("div", W1, [
                t("h4", G1, "Node Choices (" + f(he.value.length) + ")", 1),
                t("div", j1, [
                  (a(!0), r(H, null, pe(he.value, (ue) => {
                    var Ve, Xe, vt, lt;
                    return a(), r("div", {
                      key: ue.node_type,
                      class: "review-item"
                    }, [
                      t("code", H1, f(ue.node_type), 1),
                      t("div", K1, [
                        M.value.has(ue.node_type) ? (a(), r(H, { key: 0 }, [
                          ((Ve = M.value.get(ue.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", q1, f((Xe = M.value.get(ue.node_type)) == null ? void 0 : Xe.package_id), 1)) : ((vt = M.value.get(ue.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", Y1, " Optional ")) : ((lt = M.value.get(ue.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), r("span", J1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", Q1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length > 0 ? (a(), r("div", X1, [
                t("h4", Z1, "Models to Download (" + f(ve.value.length) + ")", 1),
                t("div", e0, [
                  (a(!0), r(H, null, pe(ve.value, (ue) => (a(), r("div", {
                    key: ue.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", t0, [
                      t("code", s0, f(ue.filename), 1),
                      t("div", o0, [
                        t("span", n0, "→ " + f(ue.target_path), 1),
                        ue.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: ue.url
                        }, f(Se(ue.url)), 9, a0)) : y("", !0)
                      ])
                    ]),
                    B[36] || (B[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              re.value.length > 0 ? (a(), r("div", l0, [
                t("h4", i0, "Models (" + f(re.value.length) + ")", 1),
                t("div", r0, [
                  (a(!0), r(H, null, pe(re.value, (ue) => {
                    var Ve, Xe, vt, lt, dt, Mt, Bt;
                    return a(), r("div", {
                      key: ue.filename,
                      class: "review-item"
                    }, [
                      t("code", c0, f(ue.filename), 1),
                      t("div", u0, [
                        x.value.has(ue.filename) ? (a(), r(H, { key: 0 }, [
                          ((Ve = x.value.get(ue.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", d0, f((vt = (Xe = x.value.get(ue.filename)) == null ? void 0 : Xe.selected_model) == null ? void 0 : vt.filename), 1)) : ((lt = x.value.get(ue.filename)) == null ? void 0 : lt.action) === "download" ? (a(), r("span", f0, " Download ")) : ((dt = x.value.get(ue.filename)) == null ? void 0 : dt.action) === "optional" ? (a(), r("span", m0, " Optional ")) : ((Mt = x.value.get(ue.filename)) == null ? void 0 : Mt.action) === "skip" ? (a(), r("span", v0, " Skip ")) : ((Bt = x.value.get(ue.filename)) == null ? void 0 : Bt.action) === "cancel_download" ? (a(), r("span", p0, " Cancel Download ")) : y("", !0)
                        ], 64)) : ue.is_download_intent ? (a(), r("span", g0, " Pending Download ")) : (a(), r("span", h0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              J.value.length === 0 && he.value.length === 0 && re.value.length === 0 ? (a(), r("div", y0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (a(), D(Oy, {
            key: 4,
            progress: We(d),
            onRestart: Ce,
            onRetryFailed: be
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (a(), D(Re, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: De
        }, {
          default: h(() => [...B[38] || (B[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        B[41] || (B[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (a(), D(Re, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (ue) => n("close"))
        }, {
          default: h(() => [
            $(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (a(), D(Re, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: R
        }, {
          default: h(() => [
            $(f(G.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (a(), D(Re, {
          key: 3,
          variant: "primary",
          onClick: Me
        }, {
          default: h(() => [
            $(f(T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (a(), D(Re, {
          key: 4,
          variant: "primary",
          onClick: Me
        }, {
          default: h(() => [...B[39] || (B[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (a(), D(Re, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Ae
        }, {
          default: h(() => [...B[40] || (B[40] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), _0 = /* @__PURE__ */ me(w0, [["__scopeId", "data-v-40d8d5a8"]]), k0 = { class: "search-input-wrapper" }, b0 = ["value", "placeholder"], $0 = /* @__PURE__ */ de({
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
    function c(d) {
      const m = d.target.value;
      o.debounce > 0 ? (clearTimeout(i), i = window.setTimeout(() => {
        n("update:modelValue", m);
      }, o.debounce)) : n("update:modelValue", m);
    }
    function u() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return Je(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), r("div", k0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Kt(u, ["escape"])
      }, null, 40, b0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), C0 = /* @__PURE__ */ me($0, [["__scopeId", "data-v-266f857a"]]), x0 = { class: "search-bar" }, S0 = /* @__PURE__ */ de({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", x0, [
      S(C0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), $o = /* @__PURE__ */ me(S0, [["__scopeId", "data-v-3d51bbfd"]]), I0 = { class: "section-group" }, E0 = {
  key: 0,
  class: "section-content"
}, T0 = /* @__PURE__ */ de({
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
    return (c, u) => (a(), r("section", I0, [
      S(Nt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: h(() => [
          $(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), r("div", E0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ me(T0, [["__scopeId", "data-v-c48e33ed"]]), P0 = { class: "item-header" }, R0 = {
  key: 0,
  class: "item-icon"
}, M0 = { class: "item-info" }, D0 = {
  key: 0,
  class: "item-title"
}, L0 = {
  key: 1,
  class: "item-subtitle"
}, A0 = {
  key: 0,
  class: "item-details"
}, O0 = {
  key: 1,
  class: "item-actions"
}, N0 = /* @__PURE__ */ de({
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
      class: Ie(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", P0, [
        l.$slots.icon ? (a(), r("span", R0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", M0, [
          l.$slots.title ? (a(), r("div", D0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", L0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", A0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", O0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ me(N0, [["__scopeId", "data-v-cc435e0e"]]), U0 = { class: "loading-state" }, z0 = { class: "loading-message" }, F0 = /* @__PURE__ */ de({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", U0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", z0, f(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ me(F0, [["__scopeId", "data-v-ad8436c9"]]), B0 = { class: "error-state" }, V0 = { class: "error-message" }, W0 = /* @__PURE__ */ de({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", B0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", V0, f(e.message), 1),
      e.retry ? (a(), D(ce, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => s.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Rs = /* @__PURE__ */ me(W0, [["__scopeId", "data-v-5397be48"]]), G0 = /* @__PURE__ */ de({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = et(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = N(
      () => i.value.filter((O) => O.status === "broken")
    ), C = N(
      () => i.value.filter((O) => O.status === "new")
    ), b = N(
      () => i.value.filter((O) => O.status === "modified")
    ), I = N(
      () => i.value.filter((O) => O.status === "synced")
    ), M = N(() => {
      if (!d.value.trim()) return i.value;
      const O = d.value.toLowerCase();
      return i.value.filter((se) => se.name.toLowerCase().includes(O));
    }), x = N(
      () => _.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = N(
      () => C.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = N(
      () => b.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = N(
      () => I.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = N(
      () => v.value ? q.value : q.value.slice(0, 5)
    );
    async function T(O = !1) {
      c.value = !0, u.value = null;
      try {
        i.value = await l(O);
      } catch (se) {
        u.value = se instanceof Error ? se.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: T });
    function P(O) {
      p.value = O, g.value = !0;
    }
    function L(O) {
      p.value = O, w.value = !0;
    }
    function ae() {
      n("refresh");
    }
    async function Z() {
      w.value = !1, await T(!0);
    }
    async function F() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function G(O) {
      const se = [];
      return O.missing_nodes > 0 && se.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && se.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && se.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && se.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), se.length > 0 ? se.join(", ") : "Has issues";
    }
    function J(O) {
      const se = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state;
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync` : se || "Unknown";
    }
    return Je(T), (O, se) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          S($o, {
            modelValue: d.value,
            "onUpdate:modelValue": se[0] || (se[0] = (X) => d.value = X),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), D(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            x.value.length ? (a(), D(it, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(x.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: "broken"
                }, {
                  icon: h(() => [...se[7] || (se[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(G(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (he) => L(X.name)
                    }, {
                      default: h(() => [...se[8] || (se[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => P(X.name)
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
            E.value.length ? (a(), D(it, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(E.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: X.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(X.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(J(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => P(X.name)
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
            K.value.length ? (a(), D(it, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(K.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: X.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...se[11] || (se[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(J(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => P(X.name)
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
            q.value.length ? (a(), D(it, {
              key: 3,
              title: "SYNCED",
              count: q.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: se[2] || (se[2] = (X) => m.value = X)
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(V.value, (X) => (a(), D(Et, {
                  key: X.name,
                  status: X.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(X.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(X.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(J(X)), 1)
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (he) => P(X.name)
                    }, {
                      default: h(() => [...se[13] || (se[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && q.value.length > 5 ? (a(), D(ce, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: se[1] || (se[1] = (X) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(q.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            M.value.length ? y("", !0) : (a(), D(ns, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), D(Dp, {
        key: 0,
        "workflow-name": p.value,
        onClose: se[3] || (se[3] = (X) => g.value = !1),
        onResolve: se[4] || (se[4] = (X) => L(p.value)),
        onRefresh: se[5] || (se[5] = (X) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), D(_0, {
        key: 1,
        "workflow-name": p.value,
        onClose: Z,
        onInstall: ae,
        onRefresh: se[6] || (se[6] = (X) => n("refresh")),
        onRestart: F
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), j0 = /* @__PURE__ */ me(G0, [["__scopeId", "data-v-fa3f076e"]]), H0 = /* @__PURE__ */ de({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ie(["summary-bar", e.variant])
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), an = /* @__PURE__ */ me(H0, [["__scopeId", "data-v-ccb7816e"]]), K0 = {
  key: 0,
  class: "model-details"
}, q0 = { class: "detail-section" }, Y0 = { class: "detail-row" }, J0 = { class: "detail-value mono" }, Q0 = { class: "detail-row" }, X0 = { class: "detail-value mono" }, Z0 = { class: "detail-row" }, ew = { class: "detail-value mono" }, tw = { class: "detail-row" }, sw = { class: "detail-value" }, ow = { class: "detail-row" }, nw = { class: "detail-value" }, aw = { class: "detail-row" }, lw = { class: "detail-value" }, iw = { class: "detail-section" }, rw = { class: "section-header" }, cw = {
  key: 0,
  class: "locations-list"
}, uw = { class: "location-path mono" }, dw = {
  key: 0,
  class: "location-modified"
}, fw = ["onClick"], mw = {
  key: 1,
  class: "empty-state"
}, vw = { class: "detail-section" }, pw = { class: "section-header" }, gw = {
  key: 0,
  class: "sources-list"
}, hw = { class: "source-type" }, yw = ["href"], ww = ["disabled", "onClick"], _w = {
  key: 1,
  class: "empty-state"
}, kw = { class: "add-source-form" }, bw = ["disabled"], $w = {
  key: 2,
  class: "source-error"
}, Cw = {
  key: 3,
  class: "source-success"
}, xw = /* @__PURE__ */ de({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = et(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let b = null;
    function I(T, P = "success", L = 2e3) {
      b && clearTimeout(b), C.value = { message: T, type: P }, b = setTimeout(() => {
        C.value = null;
      }, L);
    }
    function M(T) {
      if (!T) return "Unknown";
      const P = 1024 * 1024 * 1024, L = 1024 * 1024;
      return T >= P ? `${(T / P).toFixed(1)} GB` : T >= L ? `${(T / L).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function x(T) {
      navigator.clipboard.writeText(T), I("Copied to clipboard!");
    }
    async function E(T) {
      try {
        await c(T), I("Opening file location...");
      } catch {
        I("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await V();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function q(T) {
      if (u.value) {
        w.value = T, p.value = null, _.value = null;
        try {
          await i(u.value.hash, T), I("Source removed"), await V();
        } catch (P) {
          p.value = P instanceof Error ? P.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function V() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Je(V), (T, P) => {
      var L;
      return a(), r(H, null, [
        S(ut, {
          title: `Model Details: ${((L = u.value) == null ? void 0 : L.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: P[5] || (P[5] = (ae) => T.$emit("close"))
        }, {
          body: h(() => {
            var ae, Z, F, G;
            return [
              u.value ? (a(), r("div", K0, [
                t("section", q0, [
                  t("div", Y0, [
                    P[6] || (P[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", J0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[0] || (P[0] = (J) => x(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", Q0, [
                    P[7] || (P[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", X0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[1] || (P[1] = (J) => x(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", Z0, [
                    P[8] || (P[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", ew, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[2] || (P[2] = (J) => x(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", tw, [
                    P[9] || (P[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", sw, f(M(u.value.size)), 1)
                  ]),
                  t("div", ow, [
                    P[10] || (P[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", nw, f(u.value.category), 1)
                  ]),
                  t("div", aw, [
                    P[11] || (P[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", lw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", iw, [
                  t("h4", rw, "Locations (" + f(((ae = u.value.locations) == null ? void 0 : ae.length) || 0) + ")", 1),
                  (Z = u.value.locations) != null && Z.length ? (a(), r("div", cw, [
                    (a(!0), r(H, null, pe(u.value.locations, (J, O) => (a(), r("div", {
                      key: O,
                      class: "location-item"
                    }, [
                      t("span", uw, f(J.path), 1),
                      J.modified ? (a(), r("span", dw, "Modified: " + f(J.modified), 1)) : y("", !0),
                      J.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (se) => E(J.path)
                      }, " Open File Location ", 8, fw)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", mw, "No locations found"))
                ]),
                t("section", vw, [
                  t("h4", pw, "Download Sources (" + f(((F = u.value.sources) == null ? void 0 : F.length) || 0) + ")", 1),
                  (G = u.value.sources) != null && G.length ? (a(), r("div", gw, [
                    (a(!0), r(H, null, pe(u.value.sources, (J, O) => (a(), r("div", {
                      key: O,
                      class: "source-item"
                    }, [
                      t("span", hw, f(J.type) + ":", 1),
                      t("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(J.url), 9, yw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === J.url,
                        onClick: (se) => q(J.url)
                      }, f(w.value === J.url ? "..." : "×"), 9, ww)
                    ]))), 128))
                  ])) : (a(), r("div", _w, " No download sources configured ")),
                  t("div", kw, [
                    qe(t("input", {
                      "onUpdate:modelValue": P[3] || (P[3] = (J) => v.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: K
                    }, f(g.value ? "Adding..." : "Add Source"), 9, bw)
                  ]),
                  p.value ? (a(), r("p", $w, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", Cw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: P[4] || (P[4] = (ae) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), D(_t, { to: "body" }, [
          C.value ? (a(), r("div", {
            key: 0,
            class: Ie(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), nl = /* @__PURE__ */ me(xw, [["__scopeId", "data-v-f15cbb56"]]), Sw = /* @__PURE__ */ de({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = et(), i = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = N(
      () => i.value.reduce((V, T) => V + (T.size || 0), 0)
    ), C = N(() => {
      if (!v.value.trim()) return i.value;
      const V = v.value.toLowerCase();
      return i.value.filter((T) => T.filename.toLowerCase().includes(V));
    }), b = N(() => {
      if (!v.value.trim()) return c.value;
      const V = v.value.toLowerCase();
      return c.value.filter((T) => T.filename.toLowerCase().includes(V));
    }), I = N(() => {
      const V = {};
      for (const P of C.value) {
        const L = P.type || "other";
        V[L] || (V[L] = []), V[L].push(P);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(V).sort(([P], [L]) => {
        const ae = T.indexOf(P), Z = T.indexOf(L);
        return ae >= 0 && Z >= 0 ? ae - Z : ae >= 0 ? -1 : Z >= 0 ? 1 : P.localeCompare(L);
      }).map(([P, L]) => ({ type: P, models: L }));
    });
    function M(V) {
      if (!V) return "Unknown";
      const T = V / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function x(V) {
      w.value = V.hash || V.filename;
    }
    function E(V) {
      o("navigate", "model-index");
    }
    function K(V) {
      alert(`Download functionality not yet implemented for ${V}`);
    }
    async function q() {
      d.value = !0, m.value = null;
      try {
        const V = await n();
        i.value = V, c.value = [];
        const T = await l();
        u.value = T.environment || "production";
      } catch (V) {
        m.value = V instanceof Error ? V.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Je(q), (V, T) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (P) => g.value = !0)
          })
        ]),
        search: h(() => [
          S($o, {
            modelValue: v.value,
            "onUpdate:modelValue": T[1] || (T[1] = (P) => v.value = P),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), D(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            i.value.length ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(i.value.length) + " models • " + f(M(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(H, null, pe(I.value, (P) => (a(), D(it, {
              key: P.type,
              title: P.type.toUpperCase(),
              count: P.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(P.models, (L) => (a(), D(Et, {
                  key: L.hash || L.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...T[4] || (T[4] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(L.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(M(L.size)), 1)
                  ]),
                  details: h(() => [
                    S(ft, {
                      label: "Used by:",
                      value: (L.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(ft, {
                      label: "Path:",
                      value: L.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => x(L)
                    }, {
                      default: h(() => [...T[5] || (T[5] = [
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
            b.value.length ? (a(), D(it, {
              key: 1,
              title: "MISSING",
              count: b.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(b.value, (P) => (a(), D(Et, {
                  key: P.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...T[6] || (T[6] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(P.filename), 1)
                  ]),
                  subtitle: h(() => [...T[7] || (T[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var L;
                    return [
                      S(ft, {
                        label: "Required by:",
                        value: ((L = P.workflow_names) == null ? void 0 : L.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    S(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (L) => K(P.filename)
                    }, {
                      default: h(() => [...T[8] || (T[8] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (L) => E(P.filename)
                    }, {
                      default: h(() => [...T[9] || (T[9] = [
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
            !C.value.length && !b.value.length ? (a(), D(ns, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: g.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (P) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            T[10] || (T[10] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            T[11] || (T[11] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          S(ce, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...T[12] || (T[12] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), D(nl, {
        key: 0,
        identifier: w.value,
        onClose: T[3] || (T[3] = (P) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Iw = /* @__PURE__ */ me(Sw, [["__scopeId", "data-v-cb4f12b3"]]), Ew = ["disabled"], Tw = { class: "dropdown-value" }, Pw = ["onClick"], Rw = {
  key: 0,
  class: "dropdown-error"
}, Mw = /* @__PURE__ */ de({
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
    const o = e, n = s, l = k(!1), i = k(null), c = k(null), u = k({});
    function d(I) {
      return typeof I == "string" ? I : I.value;
    }
    function m(I) {
      return typeof I == "string" ? I : I.label;
    }
    const v = N(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const I = o.options.find((M) => d(M) === o.modelValue);
      return I ? m(I) : String(o.modelValue);
    });
    function g() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function p(I) {
      n("update:modelValue", d(I)), w();
    }
    function _() {
      if (!i.value) return;
      const I = i.value.getBoundingClientRect(), M = window.innerHeight, x = M - I.bottom, E = I.top, K = Math.min(300, o.options.length * 36 + 8), q = x < K && E > x;
      u.value = {
        position: "fixed",
        left: `${I.left}px`,
        width: `${I.width}px`,
        maxHeight: "300px",
        ...q ? { bottom: `${M - I.top + 4}px` } : { top: `${I.bottom + 4}px` }
      };
    }
    gt(l, async (I) => {
      I && (await yt(), _());
    });
    function C() {
      l.value && _();
    }
    function b(I) {
      I.key === "Escape" && l.value && w();
    }
    return Je(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", b);
    }), Ws(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", b);
    }), (I, M) => (a(), r("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: i
    }, [
      t("button", {
        type: "button",
        class: Ie(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", Tw, f(v.value), 1),
        M[0] || (M[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Ew),
      (a(), D(_t, { to: "body" }, [
        l.value ? (a(), r("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (a(), r("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Ft(u.value)
        }, [
          (a(!0), r(H, null, pe(e.options, (x) => (a(), r("div", {
            key: d(x),
            class: Ie(["dropdown-option", { selected: d(x) === e.modelValue }]),
            onClick: (E) => p(x)
          }, f(m(x)), 11, Pw))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), r("span", Rw, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Dw = /* @__PURE__ */ me(Mw, [["__scopeId", "data-v-857e085b"]]);
function Lw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Aw(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!Lw(o.hostname)) return { kind: "unknown" };
  const n = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (n[0] === "datasets" || n[0] === "spaces") return { kind: "unknown" };
  if (n.length < 2) return { kind: "unknown" };
  const l = `${n[0]}/${n[1]}`, i = n.slice(2);
  if (i.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const c = i[0];
  if (c === "tree") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: u, path: d || void 0 };
  }
  if (c === "resolve") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  if (c === "blob") {
    const u = i[1] || "main", d = i.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function Ow(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Nw(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${Ow(o)}`;
}
const Uw = { class: "hf-file-browser" }, zw = { class: "browser-header" }, Fw = { class: "repo-info" }, Bw = { class: "repo-id" }, Vw = {
  key: 0,
  class: "revision-pill"
}, Ww = {
  key: 0,
  class: "loading-state"
}, Gw = {
  key: 1,
  class: "error-state"
}, jw = { class: "toolbar" }, Hw = { class: "toolbar-actions" }, Kw = { class: "file-list-container" }, qw = {
  key: 0,
  class: "file-list-header"
}, Yw = ["checked", "indeterminate"], Jw = { class: "sort-indicator" }, Qw = { class: "sort-indicator" }, Xw = {
  key: 1,
  class: "empty-state"
}, Zw = {
  key: 2,
  class: "file-list"
}, e_ = ["onClick"], t_ = ["checked", "onChange"], s_ = { class: "file-path" }, o_ = { class: "file-size" }, n_ = { class: "destination-section" }, a_ = { class: "destination-row" }, l_ = {
  key: 0,
  class: "path-separator"
}, i_ = { class: "action-bar" }, r_ = { class: "summary-info" }, c_ = { class: "summary-count" }, u_ = { class: "summary-size" }, d_ = /* @__PURE__ */ de({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = et(), c = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k("name"), p = k(!0), _ = k(""), C = k(""), b = k(""), I = k([]), M = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, x = N(() => {
      let re = c.value;
      if (o.initialPath) {
        const ve = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        re = re.filter((Se) => Se.path.startsWith(ve) || Se.path === o.initialPath);
      }
      if (g.value && (re = re.filter((ve) => ve.is_model_file)), v.value.trim()) {
        const ve = v.value.toLowerCase();
        re = re.filter((Se) => Se.path.toLowerCase().includes(ve));
      }
      return re;
    }), E = N(() => {
      const re = [...x.value];
      return re.sort((ve, Se) => {
        let Fe;
        return w.value === "name" ? Fe = ve.path.localeCompare(Se.path) : Fe = ve.size - Se.size, p.value ? Fe : -Fe;
      }), re;
    }), K = N(() => x.value.length === 0 ? !1 : x.value.every((re) => u.value.has(re.path))), q = N(() => x.value.some((re) => u.value.has(re.path))), V = N(() => {
      const re = I.value.map((ve) => ({
        label: ve,
        value: ve
      }));
      return re.push({ label: "Custom path...", value: "__custom__" }), re;
    }), T = N(() => _.value === "__custom__" ? b.value.trim().length > 0 : _.value.length > 0), P = N(() => {
      let re = 0;
      for (const ve of u.value) {
        const Se = c.value.find((Fe) => Fe.path === ve);
        Se && (re += Se.size);
      }
      return re;
    });
    function L(re) {
      if (re === 0) return "0 B";
      const ve = 1024 * 1024 * 1024, Se = 1024 * 1024, Fe = 1024;
      return re >= ve ? `${(re / ve).toFixed(2)} GB` : re >= Se ? `${(re / Se).toFixed(1)} MB` : re >= Fe ? `${(re / Fe).toFixed(0)} KB` : `${re} B`;
    }
    function ae(re) {
      const ve = re.match(M);
      return ve ? `${ve[1]}${ve[4]}` : null;
    }
    function Z(re) {
      const ve = new Set(u.value), Se = ve.has(re.path), Fe = re.shard_group || ae(re.path);
      if (Fe) {
        const ze = c.value.filter((Te) => (Te.shard_group || ae(Te.path)) === Fe);
        Se ? ze.forEach((Te) => ve.delete(Te.path)) : ze.forEach((Te) => ve.add(Te.path));
      } else
        Se ? ve.delete(re.path) : ve.add(re.path);
      u.value = ve;
    }
    function F() {
      const re = new Set(u.value);
      for (const ve of x.value)
        ve.is_model_file && re.add(ve.path);
      u.value = re;
    }
    function G() {
      u.value = /* @__PURE__ */ new Set();
    }
    function J() {
      if (K.value) {
        const re = new Set(u.value);
        for (const ve of x.value)
          re.delete(ve.path);
        u.value = re;
      } else {
        const re = new Set(u.value);
        for (const ve of x.value)
          re.add(ve.path);
        u.value = re;
      }
    }
    function O(re) {
      w.value === re ? p.value = !p.value : (w.value = re, p.value = !0);
    }
    function se() {
      return _.value === "__custom__" ? b.value.trim() : C.value.trim() ? `${_.value}/${C.value.trim()}` : _.value;
    }
    function X() {
      if (u.value.size === 0 || !T.value) return;
      const re = se(), ve = [];
      for (const Se of u.value) {
        const Fe = c.value.find((ze) => ze.path === Se);
        Fe && ve.push({
          url: Nw(o.repoId, o.revision, Fe.path),
          destination: re,
          filename: Fe.path.split("/").pop() || Fe.path
        });
      }
      n("queue", ve);
    }
    async function he() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const re = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ve = await l(re);
          if (c.value = ve.files, o.preselectedFile) {
            const Se = c.value.find((Fe) => Fe.path === o.preselectedFile);
            Se && Z(Se);
          }
        } catch (re) {
          m.value = re instanceof Error ? re.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function we() {
      try {
        const re = await i();
        I.value = re.directories, re.directories.length > 0 && !_.value && (_.value = re.directories[0]);
      } catch {
        I.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return gt(() => [o.repoId, o.revision], () => {
      o.repoId && he();
    }, { immediate: !1 }), Je(() => {
      he(), we();
    }), (re, ve) => (a(), r("div", Uw, [
      t("div", zw, [
        t("button", {
          class: "back-btn",
          onClick: ve[0] || (ve[0] = (Se) => re.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Fw, [
          t("span", Bw, f(e.repoId), 1),
          e.revision ? (a(), r("span", Vw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), r("div", Ww, " Loading repository files... ")) : m.value ? (a(), r("div", Gw, f(m.value), 1)) : (a(), r(H, { key: 2 }, [
        t("div", jw, [
          S(Tt, {
            modelValue: v.value,
            "onUpdate:modelValue": ve[1] || (ve[1] = (Se) => v.value = Se),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Hw, [
            t("button", {
              class: Ie(["toggle-btn", { active: g.value }]),
              onClick: ve[2] || (ve[2] = (Se) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: F
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: G
            }, "Clear")
          ])
        ]),
        t("div", Kw, [
          x.value.length > 0 ? (a(), r("div", qw, [
            t("input", {
              type: "checkbox",
              checked: K.value,
              indeterminate: q.value && !K.value,
              class: "file-checkbox",
              onChange: J
            }, null, 40, Yw),
            t("span", {
              class: "header-name",
              onClick: ve[3] || (ve[3] = (Se) => O("name"))
            }, [
              ve[9] || (ve[9] = $(" Name ", -1)),
              t("span", Jw, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: ve[4] || (ve[4] = (Se) => O("size"))
            }, [
              ve[10] || (ve[10] = $(" Size ", -1)),
              t("span", Qw, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          x.value.length === 0 ? (a(), r("div", Xw, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), r("div", Zw, [
            (a(!0), r(H, null, pe(E.value, (Se) => (a(), r("div", {
              key: Se.path,
              class: Ie(["file-item", { selected: u.value.has(Se.path) }]),
              onClick: (Fe) => Z(Se)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(Se.path),
                class: "file-checkbox",
                onClick: ve[5] || (ve[5] = at(() => {
                }, ["stop"])),
                onChange: (Fe) => Z(Se)
              }, null, 40, t_),
              t("span", s_, f(Se.path), 1),
              t("span", o_, f(L(Se.size)), 1)
            ], 10, e_))), 128))
          ]))
        ]),
        t("div", n_, [
          ve[11] || (ve[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", a_, [
            S(Dw, {
              modelValue: _.value,
              "onUpdate:modelValue": ve[6] || (ve[6] = (Se) => _.value = Se),
              options: V.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), r("span", l_, "/")) : y("", !0),
            _.value !== "__custom__" ? (a(), D(Tt, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": ve[7] || (ve[7] = (Se) => C.value = Se),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          _.value === "__custom__" ? (a(), D(Tt, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": ve[8] || (ve[8] = (Se) => b.value = Se),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", i_, [
          t("div", r_, [
            t("span", c_, f(u.value.size) + " file(s) selected", 1),
            t("span", u_, f(L(P.value)), 1)
          ]),
          S(Re, {
            variant: "primary",
            disabled: u.value.size === 0 || !T.value,
            onClick: X
          }, {
            default: h(() => [...ve[12] || (ve[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), f_ = /* @__PURE__ */ me(d_, [["__scopeId", "data-v-f00ee703"]]), m_ = { class: "huggingface-tab" }, v_ = {
  key: 0,
  class: "search-section"
}, p_ = { class: "search-bar" }, g_ = {
  key: 1,
  class: "search-results"
}, h_ = {
  key: 0,
  class: "loading-state"
}, y_ = {
  key: 1,
  class: "error-state"
}, w_ = {
  key: 2,
  class: "results-list"
}, __ = ["onClick"], k_ = { class: "repo-header" }, b_ = { class: "repo-id" }, $_ = { class: "repo-stats" }, C_ = {
  class: "stat",
  title: "Downloads"
}, x_ = {
  class: "stat",
  title: "Likes"
}, S_ = {
  key: 0,
  class: "repo-desc"
}, I_ = {
  key: 1,
  class: "repo-tags"
}, E_ = {
  key: 3,
  class: "empty-state"
}, T_ = {
  key: 4,
  class: "hint-state"
}, P_ = /* @__PURE__ */ de({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s } = et(), o = k("search"), n = k(""), l = k([]), i = k(!1), c = k(null), u = k(!1), d = k(null), m = k("main"), v = k(), g = k();
    function w(b) {
      return b >= 1e6 ? `${(b / 1e6).toFixed(1)}M` : b >= 1e3 ? `${(b / 1e3).toFixed(1)}K` : String(b);
    }
    async function p() {
      const b = n.value.trim();
      if (!b) return;
      c.value = null;
      const I = Aw(b);
      if (I.kind === "file" && I.repoId && I.path) {
        d.value = I.repoId, m.value = I.revision || "main";
        const M = I.path.split("/");
        M.length > 1 ? v.value = M.slice(0, -1).join("/") : v.value = void 0, g.value = I.path, o.value = "browse";
        return;
      }
      if (I.kind === "repo" && I.repoId) {
        d.value = I.repoId, m.value = I.revision || "main", v.value = I.path, g.value = void 0, o.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(b) && !b.includes("://")) {
        d.value = b, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
        return;
      }
      i.value = !0;
      try {
        const M = await s(b);
        l.value = M.results, u.value = !0;
      } catch (M) {
        c.value = M instanceof Error ? M.message : "Search failed";
      } finally {
        i.value = !1;
      }
    }
    function _(b) {
      d.value = b, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
    }
    function C() {
      o.value = "search", d.value = null, v.value = void 0, g.value = void 0;
    }
    return (b, I) => (a(), r("div", m_, [
      o.value === "search" ? (a(), r("div", v_, [
        t("div", p_, [
          S(Tt, {
            modelValue: n.value,
            "onUpdate:modelValue": I[0] || (I[0] = (M) => n.value = M),
            placeholder: "Search repos, paste URL, or enter user/repo...",
            onKeydown: Kt(p, ["enter"])
          }, null, 8, ["modelValue"]),
          S(Re, {
            variant: "primary",
            onClick: p,
            loading: i.value
          }, {
            default: h(() => [...I[2] || (I[2] = [
              $(" Search ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])) : y("", !0),
      o.value === "search" ? (a(), r("div", g_, [
        i.value ? (a(), r("div", h_, " Searching HuggingFace... ")) : c.value ? (a(), r("div", y_, f(c.value), 1)) : l.value.length > 0 ? (a(), r("div", w_, [
          (a(!0), r(H, null, pe(l.value, (M) => (a(), r("div", {
            key: M.repo_id,
            class: "repo-card",
            onClick: (x) => _(M.repo_id)
          }, [
            t("div", k_, [
              t("span", b_, f(M.repo_id), 1),
              t("div", $_, [
                t("span", C_, [
                  I[3] || (I[3] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(w(M.downloads)), 1)
                ]),
                t("span", x_, [
                  I[4] || (I[4] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(w(M.likes)), 1)
                ])
              ])
            ]),
            M.description ? (a(), r("p", S_, f(M.description), 1)) : y("", !0),
            M.tags.length > 0 ? (a(), r("div", I_, [
              (a(!0), r(H, null, pe(M.tags.slice(0, 5), (x) => (a(), r("span", {
                key: x,
                class: "tag"
              }, f(x), 1))), 128))
            ])) : y("", !0)
          ], 8, __))), 128))
        ])) : u.value ? (a(), r("div", E_, " No repositories found ")) : (a(), r("div", T_, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), D(f_, {
        key: 2,
        "repo-id": d.value,
        revision: m.value,
        "initial-path": v.value,
        "preselected-file": g.value,
        onBack: C,
        onQueue: I[1] || (I[1] = (M) => b.$emit("queue", M))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"]))
    ]));
  }
}), R_ = /* @__PURE__ */ me(P_, [["__scopeId", "data-v-d7828203"]]), M_ = { class: "civitai-tab" }, D_ = /* @__PURE__ */ de({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (a(), r("div", M_, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), L_ = /* @__PURE__ */ me(D_, [["__scopeId", "data-v-44948051"]]), A_ = { class: "direct-url-tab" }, O_ = { class: "input-group" }, N_ = { class: "input-group" }, U_ = {
  key: 0,
  class: "error"
}, z_ = { class: "actions" }, F_ = /* @__PURE__ */ de({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = k(""), i = N(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = N(() => n.value.trim() !== "" && l.value.trim() !== "" && !i.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, m) => (a(), r("div", A_, [
      t("div", O_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        S(Tt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", N_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(Tt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        i.value ? (a(), r("p", U_, f(i.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", z_, [
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
}), B_ = /* @__PURE__ */ me(F_, [["__scopeId", "data-v-01def7aa"]]), V_ = { class: "download-modal" }, W_ = { class: "tab-bar" }, G_ = ["onClick"], j_ = { class: "tab-content" }, H_ = /* @__PURE__ */ de({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: n } = bo(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], i = k("huggingface");
    function c(m) {
      n(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function u(m) {
      n(m.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.targetPath
      }))), o("close");
    }
    function d() {
      o("close");
    }
    return (m, v) => e.show ? (a(), D(ut, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", V_, [
          t("div", W_, [
            (a(), r(H, null, pe(l, (g) => t("button", {
              key: g.id,
              class: Ie(["tab-btn", { active: i.value === g.id }]),
              onClick: (w) => i.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, G_)), 64))
          ]),
          t("div", j_, [
            i.value === "huggingface" ? (a(), D(R_, {
              key: 0,
              onQueue: c
            })) : i.value === "civitai" ? (a(), D(L_, { key: 1 })) : i.value === "direct" ? (a(), D(B_, {
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
}), K_ = /* @__PURE__ */ me(H_, [["__scopeId", "data-v-90a9f401"]]), q_ = {
  key: 0,
  class: "indexing-progress"
}, Y_ = { class: "progress-info" }, J_ = { class: "progress-label" }, Q_ = { class: "progress-count" }, X_ = { class: "progress-bar" }, Z_ = { class: "modal-content" }, ek = { class: "modal-header" }, tk = { class: "modal-body" }, sk = { class: "input-group" }, ok = { class: "current-path" }, nk = { class: "input-group" }, ak = { class: "modal-footer" }, lk = /* @__PURE__ */ de({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = et(), c = s, u = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), C = k(null), b = k(""), I = k(!1), M = k(!1), x = k(null), E = N(
      () => u.value.reduce((F, G) => F + (G.size || 0), 0)
    ), K = N(() => {
      if (!g.value.trim()) return u.value;
      const F = g.value.toLowerCase();
      return u.value.filter((G) => {
        const J = G, O = G.sha256 || J.sha256_hash || "";
        return G.filename.toLowerCase().includes(F) || O.toLowerCase().includes(F);
      });
    }), q = N(() => {
      const F = {};
      for (const J of K.value) {
        const O = J.type || "other";
        F[O] || (F[O] = []), F[O].push(J);
      }
      const G = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(F).sort(([J], [O]) => {
        const se = G.indexOf(J), X = G.indexOf(O);
        return se >= 0 && X >= 0 ? se - X : se >= 0 ? -1 : X >= 0 ? 1 : J.localeCompare(O);
      }).map(([J, O]) => ({ type: J, models: O }));
    });
    function V(F) {
      if (!F) return "Unknown";
      const G = 1024 * 1024 * 1024, J = 1024 * 1024;
      return F >= G ? `${(F / G).toFixed(1)} GB` : F >= J ? `${(F / J).toFixed(0)} MB` : `${(F / 1024).toFixed(0)} KB`;
    }
    function T(F) {
      p.value = F.hash || F.filename;
    }
    async function P() {
      m.value = !0, v.value = null;
      try {
        const F = await n();
        await ae(), F.changes > 0 && console.log(`Scan complete: ${F.changes} changes detected`);
      } catch (F) {
        v.value = F instanceof Error ? F.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function L() {
      if (b.value.trim()) {
        I.value = !0, v.value = null;
        try {
          const F = await i(b.value.trim());
          C.value = F.path, _.value = !1, b.value = "", await ae(), console.log(`Directory changed: ${F.models_indexed} models indexed`), c("refresh");
        } catch (F) {
          v.value = F instanceof Error ? F.message : "Failed to change directory";
        } finally {
          I.value = !1;
        }
      }
    }
    async function ae() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (F) {
        v.value = F instanceof Error ? F.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Z() {
      try {
        const F = await l();
        C.value = F.path;
      } catch {
      }
    }
    return Je(() => {
      ae(), Z();
    }), (F, G) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: G[2] || (G[2] = (J) => w.value = !0)
          }, {
            actions: h(() => [
              S(ce, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: P
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (J) => _.value = !0)
              }, {
                default: h(() => [...G[11] || (G[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (J) => M.value = !0)
              }, {
                default: h(() => [...G[12] || (G[12] = [
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
          x.value ? (a(), r("div", q_, [
            t("div", Y_, [
              t("span", J_, f(x.value.message), 1),
              t("span", Q_, f(x.value.current) + "/" + f(x.value.total), 1)
            ]),
            t("div", X_, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${x.value.current / x.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          S($o, {
            modelValue: g.value,
            "onUpdate:modelValue": G[3] || (G[3] = (J) => g.value = J),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || x.value ? (a(), D(Ps, {
            key: 0,
            message: x.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (a(), D(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            u.value.length ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(V(E.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(H, null, pe(q.value, (J) => (a(), D(it, {
              key: J.type,
              title: J.type.toUpperCase(),
              count: J.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(J.models, (O) => (a(), D(Et, {
                  key: O.sha256 || O.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...G[13] || (G[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(O.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(V(O.size)), 1)
                  ]),
                  details: h(() => [
                    S(ft, {
                      label: "Hash:",
                      value: O.hash ? O.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => T(O)
                    }, {
                      default: h(() => [...G[14] || (G[14] = [
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
            K.value.length ? y("", !0) : (a(), D(ns, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: G[4] || (G[4] = (J) => w.value = !1)
      }, {
        content: h(() => [...G[15] || (G[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(nl, {
        key: 0,
        identifier: p.value,
        onClose: G[5] || (G[5] = (J) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), D(_t, { to: "body" }, [
        _.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: G[9] || (G[9] = at((J) => _.value = !1, ["self"]))
        }, [
          t("div", Z_, [
            t("div", ek, [
              G[16] || (G[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: G[6] || (G[6] = (J) => _.value = !1)
              }, "✕")
            ]),
            t("div", tk, [
              t("div", sk, [
                G[17] || (G[17] = t("label", null, "Current Directory", -1)),
                t("code", ok, f(C.value || "Not set"), 1)
              ]),
              t("div", nk, [
                G[18] || (G[18] = t("label", null, "New Directory Path", -1)),
                S(Tt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": G[7] || (G[7] = (J) => b.value = J),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              G[19] || (G[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", ak, [
              S(Re, {
                variant: "secondary",
                onClick: G[8] || (G[8] = (J) => _.value = !1)
              }, {
                default: h(() => [...G[20] || (G[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(Re, {
                variant: "primary",
                disabled: !b.value.trim() || I.value,
                loading: I.value,
                onClick: L
              }, {
                default: h(() => [
                  $(f(I.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      S(K_, {
        show: M.value,
        onClose: G[10] || (G[10] = (J) => M.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), ik = /* @__PURE__ */ me(lk, [["__scopeId", "data-v-3705114c"]]), rk = { class: "node-details" }, ck = { class: "status-row" }, uk = {
  key: 0,
  class: "detail-row"
}, dk = { class: "value" }, fk = { class: "detail-row" }, mk = { class: "value" }, vk = {
  key: 1,
  class: "detail-row"
}, pk = { class: "value mono" }, gk = {
  key: 2,
  class: "detail-row"
}, hk = ["href"], yk = {
  key: 3,
  class: "detail-row"
}, wk = { class: "value mono small" }, _k = { class: "detail-row" }, kk = {
  key: 0,
  class: "value"
}, bk = {
  key: 1,
  class: "workflow-list"
}, $k = /* @__PURE__ */ de({
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
    return (u, d) => (a(), D(ut, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", rk, [
          t("div", ck, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", uk, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", dk, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", fk, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", mk, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", vk, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", pk, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", gk, [
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
            ], 8, hk)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", yk, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", wk, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", _k, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", kk, " Not used in any workflows ")) : (a(), r("div", bk, [
              (a(!0), r(H, null, pe(e.node.used_in_workflows, (m) => (a(), r("span", {
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
          onClick: d[0] || (d[0] = (m) => n("close"))
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
}), Ck = /* @__PURE__ */ me($k, [["__scopeId", "data-v-b342f626"]]), xk = { class: "dialog-message" }, Sk = {
  key: 0,
  class: "dialog-details"
}, Ik = {
  key: 1,
  class: "dialog-warning"
}, Ek = /* @__PURE__ */ de({
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
    return (s, o) => (a(), D(ut, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", xk, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", Sk, [
          (a(!0), r(H, null, pe(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Ik, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), D(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        S(Re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
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
}), al = /* @__PURE__ */ me(Ek, [["__scopeId", "data-v-3670b9f5"]]), Tk = { class: "mismatch-warning" }, Pk = { class: "version-mismatch" }, Rk = { class: "version-actual" }, Mk = { class: "version-expected" }, Dk = { key: 0 }, Lk = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Ak = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Ok = /* @__PURE__ */ de({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: u } = et(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), C = N(() => {
      if (!g.value.trim()) return d.value.nodes;
      const Z = g.value.toLowerCase();
      return d.value.nodes.filter(
        (F) => {
          var G, J;
          return F.name.toLowerCase().includes(Z) || ((G = F.description) == null ? void 0 : G.toLowerCase().includes(Z)) || ((J = F.repository) == null ? void 0 : J.toLowerCase().includes(Z));
        }
      );
    }), b = N(
      () => C.value.filter((Z) => Z.installed && Z.tracked)
    ), I = N(
      () => C.value.filter((Z) => !Z.installed && Z.tracked)
    ), M = N(
      () => C.value.filter((Z) => Z.installed && !Z.tracked)
    );
    function x(Z) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Z] || Z;
    }
    const E = N(() => o.versionMismatches.length > 0);
    function K(Z) {
      return !Z.used_in_workflows || Z.used_in_workflows.length === 0 ? "Not used in any workflows" : Z.used_in_workflows.length === 1 ? Z.used_in_workflows[0] : `${Z.used_in_workflows.length} workflows`;
    }
    function q(Z) {
      p.value = Z;
    }
    function V() {
      n("open-node-manager");
    }
    function T(Z) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${Z}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const F = await i(Z);
            F.status === "success" ? (n("toast", `✓ Node "${Z}" tracked as development`, "success"), await ae()) : n("toast", `Failed to track node: ${F.message || "Unknown error"}`, "error");
          } catch (F) {
            n("toast", `Error tracking node: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function P(Z) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Z}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const F = await u(Z);
            F.status === "success" ? (n("toast", `✓ Node "${Z}" removed`, "success"), await ae()) : n("toast", `Failed to remove node: ${F.message || "Unknown error"}`, "error");
          } catch (F) {
            n("toast", `Error removing node: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function L(Z) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${Z}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const F = await c(Z);
            F.status === "success" ? (n("toast", `✓ Node "${Z}" installed`, "success"), await ae()) : n("toast", `Failed to install node: ${F.message || "Unknown error"}`, "error");
          } catch (F) {
            n("toast", `Error installing node: ${F instanceof Error ? F.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function ae() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (Z) {
        v.value = Z instanceof Error ? Z.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Je(ae), (Z, F) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: F[0] || (F[0] = (G) => w.value = !0)
          }, {
            actions: h(() => [
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: h(() => [...F[7] || (F[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S($o, {
            modelValue: g.value,
            "onUpdate:modelValue": F[1] || (F[1] = (G) => g.value = G),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), D(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            d.value.total_count ? (a(), D(an, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(H, { key: 0 }, [
                  $(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(H, { key: 1 }, [
                  $(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value ? (a(), D(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Tk, [
                  F[8] || (F[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(H, null, pe(e.versionMismatches, (G) => (a(), D(Et, {
                  key: G.name,
                  status: "warning"
                }, {
                  icon: h(() => [...F[9] || (F[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(G.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", Pk, [
                      t("span", Rk, f(G.actual), 1),
                      F[10] || (F[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Mk, f(G.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "warning",
                      size: "sm",
                      onClick: F[2] || (F[2] = (J) => n("repair-environment"))
                    }, {
                      default: h(() => [...F[11] || (F[11] = [
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
            M.value.length ? (a(), D(it, {
              key: 2,
              title: "UNTRACKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(M.value, (G) => (a(), D(Et, {
                  key: G.name,
                  status: "warning"
                }, {
                  icon: h(() => [...F[12] || (F[12] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(G.name), 1)
                  ]),
                  subtitle: h(() => [...F[13] || (F[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    S(ft, {
                      label: "Used by:",
                      value: K(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => q(G)
                    }, {
                      default: h(() => [...F[14] || (F[14] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => T(G.name)
                    }, {
                      default: h(() => [...F[15] || (F[15] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ce, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => P(G.name)
                    }, {
                      default: h(() => [...F[16] || (F[16] = [
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
            b.value.length ? (a(), D(it, {
              key: 3,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(b.value, (G) => (a(), D(Et, {
                  key: G.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(G.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(G.name), 1)
                  ]),
                  subtitle: h(() => [
                    G.version ? (a(), r("span", Dk, f(G.source === "development" ? "" : "v") + f(G.version), 1)) : (a(), r("span", Lk, "version unknown")),
                    t("span", Ak, " • " + f(x(G.source)), 1)
                  ]),
                  details: h(() => [
                    S(ft, {
                      label: "Used by:",
                      value: K(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => q(G)
                    }, {
                      default: h(() => [...F[17] || (F[17] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: V
                    }, {
                      default: h(() => [...F[18] || (F[18] = [
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
            I.value.length ? (a(), D(it, {
              key: 4,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(I.value, (G) => (a(), D(Et, {
                  key: G.name,
                  status: "missing"
                }, {
                  icon: h(() => [...F[19] || (F[19] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(G.name), 1)
                  ]),
                  subtitle: h(() => [...F[20] || (F[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    S(ft, {
                      label: "Required by:",
                      value: K(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ce, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => q(G)
                    }, {
                      default: h(() => [...F[21] || (F[21] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ce, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => L(G.name)
                    }, {
                      default: h(() => [...F[22] || (F[22] = [
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
            !b.value.length && !I.value.length && !M.value.length ? (a(), D(ns, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: F[4] || (F[4] = (G) => w.value = !1)
      }, {
        content: h(() => [...F[23] || (F[23] = [
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
          S(ce, {
            variant: "primary",
            onClick: F[3] || (F[3] = (G) => w.value = !1)
          }, {
            default: h(() => [...F[24] || (F[24] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(Ck, {
        key: 0,
        node: p.value,
        onClose: F[5] || (F[5] = (G) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), D(al, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: F[6] || (F[6] = (G) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), Nk = /* @__PURE__ */ me(Ok, [["__scopeId", "data-v-1555a802"]]);
function Pr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Uk = { class: "remote-url-display" }, zk = ["title"], Fk = ["title"], Bk = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Vk = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Wk = /* @__PURE__ */ de({
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
    return (i, c) => (a(), r("div", Uk, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, zk),
      t("button", {
        class: Ie(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", Vk, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", Bk, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Fk)
    ]));
  }
}), Gk = /* @__PURE__ */ me(Wk, [["__scopeId", "data-v-7768a58d"]]), jk = { class: "remote-title" }, Hk = {
  key: 0,
  class: "default-badge"
}, Kk = {
  key: 1,
  class: "sync-badge"
}, qk = {
  key: 0,
  class: "ahead"
}, Yk = {
  key: 1,
  class: "behind"
}, Jk = {
  key: 1,
  class: "synced"
}, Qk = ["href"], Xk = {
  key: 1,
  class: "remote-url-text"
}, Zk = /* @__PURE__ */ de({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = N(() => s.fetchingRemote === s.remote.name), n = N(() => s.remote.is_default), l = N(() => s.syncStatus && s.syncStatus.behind > 0), i = N(() => s.syncStatus && s.syncStatus.ahead > 0), c = N(() => s.remote.push_url !== s.remote.fetch_url), u = N(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), D(Et, {
      status: n.value ? "synced" : void 0
    }, oo({
      icon: h(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", jk, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", Hk, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", Kk, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", qk, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", Yk, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", Jk, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (a(), r("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = at(() => {
          }, ["stop"]))
        }, f(d.value), 9, Qk)) : (a(), r("span", Xk, f(d.value), 1))
      ]),
      actions: h(() => [
        S(ce, {
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
        S(ce, {
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
        S(ce, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (g) => m.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        S(ce, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), D(ce, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), D(ft, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              S(Gk, {
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
}), eb = /* @__PURE__ */ me(Zk, [["__scopeId", "data-v-8310f3a8"]]), tb = ["for"], sb = {
  key: 0,
  class: "base-form-field-required"
}, ob = { class: "base-form-field-input" }, nb = {
  key: 1,
  class: "base-form-field-error"
}, ab = {
  key: 2,
  class: "base-form-field-hint"
}, lb = /* @__PURE__ */ de({
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
      class: Ie(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), r("span", sb, "*")) : y("", !0)
      ], 8, tb)) : y("", !0),
      t("div", ob, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", nb, f(e.error), 1)) : e.hint ? (a(), r("span", ab, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), pa = /* @__PURE__ */ me(lb, [["__scopeId", "data-v-9a1cf296"]]), ib = { class: "remote-form" }, rb = { class: "form-header" }, cb = { class: "form-body" }, ub = {
  key: 0,
  class: "form-error"
}, db = { class: "form-actions" }, fb = /* @__PURE__ */ de({
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
    gt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = N(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || i.value)) {
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
    return (m, v) => (a(), r("div", ib, [
      t("div", rb, [
        S(Nt, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", cb, [
        S(pa, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            S(Tt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        S(pa, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            S(Tt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(pa, { label: "Push URL (optional)" }, {
          default: h(() => [
            S(Tt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", ub, f(c.value), 1)) : y("", !0)
      ]),
      t("div", db, [
        S(ce, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: h(() => [
            $(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        S(ce, {
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
}), mb = /* @__PURE__ */ me(fb, [["__scopeId", "data-v-56021b18"]]), vb = { class: "conflict-summary-box" }, pb = { class: "summary-header" }, gb = { class: "summary-text" }, hb = { key: 0 }, yb = {
  key: 1,
  class: "all-resolved"
}, wb = { class: "summary-progress" }, _b = { class: "progress-bar" }, kb = { class: "progress-text" }, bb = /* @__PURE__ */ de({
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
    return (n, l) => (a(), r("div", vb, [
      t("div", pb, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", gb, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", hb, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", yb, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", wb, [
        t("div", _b, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", kb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), $b = /* @__PURE__ */ me(bb, [["__scopeId", "data-v-4e9e6cc9"]]), Cb = { class: "modal-header" }, xb = { class: "modal-title" }, Sb = { class: "modal-body" }, Ib = {
  key: 0,
  class: "error-box"
}, Eb = {
  key: 0,
  class: "error-hint"
}, Tb = {
  key: 1,
  class: "loading-state"
}, Pb = { class: "commit-summary" }, Rb = {
  key: 0,
  class: "changes-section"
}, Mb = {
  key: 0,
  class: "change-group",
  open: ""
}, Db = { class: "change-count" }, Lb = { class: "change-list" }, Ab = {
  key: 0,
  class: "conflict-badge"
}, Ob = {
  key: 1,
  class: "change-group"
}, Nb = { class: "change-count" }, Ub = { class: "change-list" }, zb = {
  key: 2,
  class: "change-group"
}, Fb = { class: "change-count" }, Bb = { class: "change-list" }, Vb = {
  key: 2,
  class: "strategy-section"
}, Wb = { class: "radio-group" }, Gb = { class: "radio-option" }, jb = { class: "radio-option" }, Hb = { class: "radio-option" }, Kb = {
  key: 3,
  class: "up-to-date"
}, qb = { class: "modal-actions" }, Zl = "comfygit.pullModelStrategy", Yb = /* @__PURE__ */ de({
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
    gt(l, (b) => {
      localStorage.setItem(Zl, b);
    });
    const i = N(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = N(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = N(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = N(() => o.preview && Pr(o.preview) ? o.preview : null), v = N(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = N(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = N(
      () => v.value > 0 && g.value === v.value
    ), p = N(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _(b) {
      if (!m.value) return !1;
      const I = b.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((M) => M.name === I);
    }
    function C(b) {
      const I = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: b, resolutions: I });
    }
    return (b, I) => {
      var M, x;
      return a(), D(_t, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[11] || (I[11] = (E) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: I[10] || (I[10] = at(() => {
            }, ["stop"]))
          }, [
            t("div", Cb, [
              t("h3", xb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: I[0] || (I[0] = (E) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", Sb, [
              e.error ? (a(), r("div", Ib, [
                I[13] || (I[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  I[12] || (I[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", Eb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", Tb, [...I[14] || (I[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), r(H, { key: 2 }, [
                I[15] || (I[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                I[16] || (I[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), r(H, { key: 3 }, [
                t("div", Pb, [
                  I[17] || (I[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", Rb, [
                  I[21] || (I[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", Mb, [
                    t("summary", null, [
                      I[18] || (I[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Db, f(c.value) + " changes", 1)
                    ]),
                    t("div", Lb, [
                      (a(!0), r(H, null, pe(e.preview.changes.workflows.added, (E) => (a(), r("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128)),
                      (a(!0), r(H, null, pe(e.preview.changes.workflows.modified, (E) => (a(), r("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(E) + " ", 1),
                        _(E) ? (a(), r("span", Ab, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(H, null, pe(e.preview.changes.workflows.deleted, (E) => (a(), r("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", Ob, [
                    t("summary", null, [
                      I[19] || (I[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", Nb, f(u.value) + " to install", 1)
                    ]),
                    t("div", Ub, [
                      (a(!0), r(H, null, pe(e.preview.changes.nodes.to_install, (E) => (a(), r("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", zb, [
                    t("summary", null, [
                      I[20] || (I[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", Fb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", Bb, [
                      (a(!0), r(H, null, pe(e.preview.changes.models.referenced, (E) => (a(), r("div", {
                        key: E,
                        class: "change-item"
                      }, f(E), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), D($b, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", Vb, [
                  I[26] || (I[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", Wb, [
                    t("label", Gb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[1] || (I[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      I[22] || (I[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", jb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[2] || (I[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      I[23] || (I[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Hb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": I[3] || (I[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      I[24] || (I[24] = t("span", null, "Skip model downloads", -1)),
                      I[25] || (I[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  I[27] || (I[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", Kb, [
                  I[28] || (I[28] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", qb, [
              S(ce, {
                variant: "secondary",
                onClick: I[4] || (I[4] = (E) => b.$emit("close"))
              }, {
                default: h(() => [...I[29] || (I[29] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(H, { key: 0 }, [
                S(ce, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: I[5] || (I[5] = (E) => C(!1))
                }, {
                  default: h(() => [...I[30] || (I[30] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(ce, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: I[6] || (I[6] = (E) => C(!0))
                }, {
                  default: h(() => [...I[31] || (I[31] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = e.preview) != null && x.has_uncommitted_changes ? (a(), D(ce, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: I[7] || (I[7] = (E) => C(!0))
              }, {
                default: h(() => [...I[32] || (I[32] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(H, { key: 2 }, [
                m.value && !w.value ? (a(), D(ce, {
                  key: 0,
                  variant: "primary",
                  onClick: I[8] || (I[8] = (E) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), D(ce, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: I[9] || (I[9] = (E) => C(!1))
                }, {
                  default: h(() => [...I[33] || (I[33] = [
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
}), Jb = /* @__PURE__ */ me(Yb, [["__scopeId", "data-v-300c7b2f"]]), Qb = { class: "modal-header" }, Xb = { class: "modal-title" }, Zb = { class: "modal-body" }, e2 = {
  key: 0,
  class: "loading-state"
}, t2 = {
  key: 1,
  class: "warning-box"
}, s2 = {
  key: 0,
  class: "commits-section"
}, o2 = { class: "commit-list" }, n2 = { class: "commit-hash" }, a2 = { class: "commit-message" }, l2 = { class: "commit-date" }, i2 = { class: "force-option" }, r2 = { class: "checkbox-option" }, c2 = { class: "commit-summary" }, u2 = { key: 0 }, d2 = { key: 1 }, f2 = {
  key: 0,
  class: "info-box"
}, m2 = {
  key: 1,
  class: "commits-section"
}, v2 = { class: "commit-list" }, p2 = { class: "commit-hash" }, g2 = { class: "commit-message" }, h2 = { class: "commit-date" }, y2 = {
  key: 2,
  class: "up-to-date"
}, w2 = { class: "modal-actions" }, _2 = /* @__PURE__ */ de({
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
      var u, d, m;
      return a(), D(_t, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = at(() => {
            }, ["stop"]))
          }, [
            t("div", Qb, [
              t("h3", Xb, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", Zb, [
              e.loading ? (a(), r("div", e2, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), r("div", t2, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), r(H, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", s2, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", o2, [
                    (a(!0), r(H, null, pe(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", n2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", a2, f(v.message), 1),
                      t("span", l2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", i2, [
                  t("label", r2, [
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
              ], 64)) : e.preview ? (a(), r(H, { key: 3 }, [
                t("div", c2, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", u2, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", d2, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", f2, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", m2, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", v2, [
                    (a(!0), r(H, null, pe(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", p2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", g2, f(v.message), 1),
                      t("span", h2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", y2, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", w2, [
              S(ce, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(H, { key: 0 }, [
                S(ce, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(ce, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: h(() => [...c[20] || (c[20] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), D(ce, {
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
}), k2 = /* @__PURE__ */ me(_2, [["__scopeId", "data-v-ae86b6a7"]]), b2 = { class: "resolution-choice-group" }, $2 = ["disabled"], C2 = ["disabled"], x2 = /* @__PURE__ */ de({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", b2, [
      t("button", {
        class: Ie(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, $2),
      t("button", {
        class: Ie(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, C2)
    ]));
  }
}), S2 = /* @__PURE__ */ me(x2, [["__scopeId", "data-v-985715ed"]]), I2 = { class: "conflict-header" }, E2 = { class: "conflict-info" }, T2 = { class: "workflow-name" }, P2 = { class: "conflict-description" }, R2 = {
  key: 0,
  class: "resolved-badge"
}, M2 = { class: "resolved-text" }, D2 = { class: "conflict-hashes" }, L2 = { class: "hash-item" }, A2 = { class: "hash-item" }, O2 = { class: "conflict-actions" }, N2 = /* @__PURE__ */ de({
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
    const i = N(() => l.value !== null), c = N(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = N(() => {
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
      return a(), r("div", {
        class: Ie(["conflict-item", { resolved: i.value }])
      }, [
        t("div", I2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", E2, [
            t("code", T2, f(e.conflict.name) + ".json", 1),
            t("div", P2, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", R2, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", M2, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", D2, [
          t("span", L2, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", A2, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", O2, [
          S(S2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), U2 = /* @__PURE__ */ me(N2, [["__scopeId", "data-v-506d3bbf"]]), z2 = { class: "resolution-content" }, F2 = {
  key: 0,
  class: "error-box"
}, B2 = { class: "resolution-header" }, V2 = { class: "header-stats" }, W2 = { class: "stat" }, G2 = { class: "stat-value" }, j2 = { class: "stat resolved" }, H2 = { class: "stat-value" }, K2 = {
  key: 0,
  class: "stat pending"
}, q2 = { class: "stat-value" }, Y2 = { class: "conflicts-list" }, J2 = {
  key: 1,
  class: "all-resolved-message"
}, Q2 = /* @__PURE__ */ de({
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
    const o = e, n = s, l = N(() => o.resolutions.size), i = N(() => o.workflowConflicts.length - l.value), c = N(() => l.value === o.workflowConflicts.length), u = N(
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
    return (w, p) => (a(), D(ut, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", z2, [
          e.error ? (a(), r("div", F2, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", B2, [
            t("div", V2, [
              t("div", W2, [
                t("span", G2, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", j2, [
                t("span", H2, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", K2, [
                t("span", q2, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", Y2, [
            (a(!0), r(H, null, pe(e.workflowConflicts, (_) => (a(), D(U2, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", J2, [
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
}), X2 = /* @__PURE__ */ me(Q2, [["__scopeId", "data-v-c58d150d"]]), Z2 = { class: "node-conflict-item" }, e$ = { class: "node-header" }, t$ = { class: "node-name" }, s$ = { class: "node-id" }, o$ = { class: "version-comparison" }, n$ = { class: "version yours" }, a$ = { class: "version theirs" }, l$ = { class: "chosen-version" }, i$ = { class: "chosen" }, r$ = { class: "chosen-reason" }, c$ = { class: "affected-workflows" }, u$ = { class: "wf-source" }, d$ = { class: "wf-version" }, f$ = /* @__PURE__ */ de({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Z2, [
      t("div", e$, [
        t("code", t$, f(e.conflict.node_name), 1),
        t("span", s$, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", o$, [
        t("div", n$, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", a$, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", l$, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", i$, f(e.conflict.chosen_version), 1),
        t("span", r$, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", c$, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(H, null, pe(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", u$, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", d$, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), m$ = /* @__PURE__ */ me(f$, [["__scopeId", "data-v-8b626725"]]), v$ = { class: "validation-content" }, p$ = {
  key: 0,
  class: "compatible-message"
}, g$ = { class: "conflicts-list" }, h$ = {
  key: 2,
  class: "warnings-section"
}, y$ = /* @__PURE__ */ de({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), D(ut, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", v$, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", p$, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), r(H, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", g$, [
              (a(!0), r(H, null, pe(e.validation.node_conflicts, (u) => (a(), D(m$, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", h$, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(H, null, pe(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Re, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(Re, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
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
}), w$ = /* @__PURE__ */ me(y$, [["__scopeId", "data-v-fefd26ed"]]), _$ = { key: 0 }, k$ = /* @__PURE__ */ de({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = et(), _ = k([]), C = k(null), b = k({}), I = k(!1), M = k(null), x = k(""), E = k(!1), K = k(null), q = k(!1), V = k("add"), T = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = N(() => {
      if (!x.value.trim()) return _.value;
      const be = x.value.toLowerCase();
      return _.value.filter(
        (j) => j.name.toLowerCase().includes(be) || j.fetch_url.toLowerCase().includes(be) || j.push_url.toLowerCase().includes(be)
      );
    });
    async function L() {
      I.value = !0, M.value = null;
      try {
        const be = await n();
        _.value = be.remotes, C.value = be.current_branch_tracking || null, await Promise.all(
          be.remotes.map(async (j) => {
            const B = await d(j.name);
            B && (b.value[j.name] = B);
          })
        );
      } catch (be) {
        M.value = be instanceof Error ? be.message : "Failed to load remotes";
      } finally {
        I.value = !1;
      }
    }
    function ae() {
      V.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, q.value = !0;
    }
    function Z(be) {
      const j = _.value.find((B) => B.name === be);
      j && (V.value = "edit", T.value = {
        name: j.name,
        fetchUrl: j.fetch_url,
        pushUrl: j.push_url
      }, q.value = !0);
    }
    async function F(be) {
      try {
        V.value === "add" ? await l(be.name, be.fetchUrl) : await c(be.name, be.fetchUrl, be.pushUrl || void 0), q.value = !1, await L();
      } catch (j) {
        M.value = j instanceof Error ? j.message : "Operation failed";
      }
    }
    function G() {
      q.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(be) {
      K.value = be;
      try {
        await u(be);
        const j = await d(be);
        j && (b.value[be] = j), o("toast", `✓ Fetched from ${be}`, "success");
      } catch (j) {
        o("toast", j instanceof Error ? j.message : "Fetch failed", "error");
      } finally {
        K.value = null;
      }
    }
    async function O(be) {
      if (confirm(`Remove remote "${be}"?`))
        try {
          await i(be), await L();
        } catch (j) {
          M.value = j instanceof Error ? j.message : "Failed to remove remote";
        }
    }
    function se() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const X = k("idle"), he = N(() => X.value === "pull_preview"), we = N(
      () => X.value === "resolving" || X.value === "validating"
    ), re = N(
      () => X.value === "validation_review" || X.value === "executing"
    ), ve = k(!1), Se = k(null), Fe = k(!1), ze = k(null), Te = k(!1), Pe = k(null), ke = k(null), ge = k(/* @__PURE__ */ new Map()), De = k(null), Me = k(null), A = N(() => Pe.value && Pr(Pe.value) ? Pe.value : null);
    async function R(be) {
      ze.value = be, X.value = "pull_preview", Te.value = !0, Pe.value = null, ke.value = null;
      try {
        Pe.value = await m(be);
      } catch (j) {
        ke.value = j instanceof Error ? j.message : "Failed to load pull preview";
      } finally {
        Te.value = !1;
      }
    }
    function z() {
      X.value = "idle", Pe.value = null, ke.value = null, ze.value = null;
    }
    async function W(be) {
      if (!ze.value) return;
      X.value = "executing", ke.value = null;
      const j = ze.value;
      try {
        const B = await v(j, be);
        if (B.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${B.error || "Unknown error"}`, X.value = "pull_preview";
          return;
        }
        Ee(), X.value = "idle", o("toast", `✓ Pulled from ${j}`, "success"), await L();
      } catch (B) {
        ke.value = B instanceof Error ? B.message : "Pull failed", X.value = "pull_preview";
      }
    }
    function ee() {
      A.value && (X.value = "resolving", Me.value = null);
    }
    function ie(be, j) {
      ge.value.set(be, { name: be, resolution: j });
    }
    function ye() {
      X.value = "pull_preview";
    }
    async function $e() {
      X.value = "validating", Me.value = null;
      try {
        const be = Array.from(ge.value.values());
        De.value = await p(ze.value, be), X.value = "validation_review";
      } catch (be) {
        Me.value = be instanceof Error ? be.message : "Validation failed", X.value = "resolving";
      }
    }
    async function ne() {
      X.value = "executing";
      const be = ze.value;
      try {
        const j = Array.from(ge.value.values()), B = await v(be, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: j
        });
        if (B.rolled_back) {
          ke.value = `Pull failed and was rolled back: ${B.error || "Unknown error"}`, X.value = "pull_preview";
          return;
        }
        Ee(), X.value = "idle", o("toast", `✓ Pulled from ${be}`, "success"), await L();
      } catch (j) {
        ke.value = j instanceof Error ? j.message : "Pull failed", X.value = "validation_review";
      }
    }
    function fe() {
      X.value = "resolving";
    }
    function Le() {
      Ee(), X.value = "idle";
    }
    function Ee() {
      ge.value.clear(), De.value = null, Me.value = null, ke.value = null, Pe.value = null, ze.value = null;
    }
    async function oe(be) {
      ze.value = be, ve.value = !0, Te.value = !0, Se.value = null;
      try {
        Se.value = await g(be);
      } catch (j) {
        M.value = j instanceof Error ? j.message : "Failed to load push preview";
      } finally {
        Te.value = !1;
      }
    }
    function Q() {
      ve.value = !1, Se.value = null, ze.value = null;
    }
    async function Ae(be) {
      if (!ze.value) return;
      Fe.value = !0;
      const j = ze.value;
      try {
        await w(j, be), Q(), o("toast", `✓ Pushed to ${j}`, "success"), await L();
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Push failed", "error");
      } finally {
        Fe.value = !1;
      }
    }
    function Ce() {
      const be = ze.value;
      Q(), be && R(be);
    }
    return Je(L), (be, j) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (B) => E.value = !0)
          }, {
            actions: h(() => [
              q.value ? y("", !0) : (a(), D(ce, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ae
              }, {
                default: h(() => [...j[3] || (j[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          q.value ? y("", !0) : (a(), D($o, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": j[1] || (j[1] = (B) => x.value = B),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          I.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : M.value ? (a(), D(Rs, {
            key: 1,
            message: M.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            q.value ? (a(), D(mb, {
              key: 0,
              mode: V.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: F,
              onCancel: G
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !q.value ? (a(), D(an, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (a(), r("span", _$, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            P.value.length && !q.value ? (a(), D(it, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(P.value, (B) => (a(), D(eb, {
                  key: B.name,
                  remote: B,
                  "sync-status": b.value[B.name],
                  "fetching-remote": K.value,
                  onFetch: J,
                  onEdit: Z,
                  onRemove: O,
                  onPull: R,
                  onPush: oe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !P.value.length && !q.value ? (a(), D(ns, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                S(ce, {
                  variant: "primary",
                  onClick: ae
                }, {
                  default: h(() => [...j[4] || (j[4] = [
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
      S(as, {
        show: E.value,
        title: "About Git Remotes",
        onClose: j[2] || (j[2] = (B) => E.value = !1)
      }, {
        content: h(() => [...j[5] || (j[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          S(ce, {
            variant: "link",
            onClick: se
          }, {
            default: h(() => [...j[6] || (j[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(Jb, {
        show: he.value,
        "remote-name": ze.value || "",
        preview: Pe.value,
        loading: Te.value,
        pulling: X.value === "executing",
        error: ke.value,
        "conflict-resolutions": ge.value,
        onClose: z,
        onPull: W,
        onOpenConflictResolution: ee
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(k2, {
        show: ve.value,
        "remote-name": ze.value || "",
        preview: Se.value,
        loading: Te.value,
        pushing: Fe.value,
        onClose: Q,
        onPush: Ae,
        onPullFirst: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      we.value && A.value ? (a(), D(X2, {
        key: 0,
        "workflow-conflicts": A.value.workflow_conflicts,
        resolutions: ge.value,
        "operation-type": "pull",
        validating: X.value === "validating",
        error: Me.value,
        onClose: ye,
        onResolve: ie,
        onApply: $e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      re.value && De.value ? (a(), D(w$, {
        key: 1,
        validation: De.value,
        "operation-type": "pull",
        executing: X.value === "executing",
        onProceed: ne,
        onGoBack: fe,
        onCancel: Le
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), b$ = /* @__PURE__ */ me(k$, [["__scopeId", "data-v-9ae3b76d"]]), $$ = { class: "setting-info" }, C$ = { class: "setting-label" }, x$ = {
  key: 0,
  class: "required-marker"
}, S$ = {
  key: 0,
  class: "setting-description"
}, I$ = { class: "setting-control" }, E$ = /* @__PURE__ */ de({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ie(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", $$, [
        t("div", C$, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), r("span", x$, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", S$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", I$, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), wn = /* @__PURE__ */ me(E$, [["__scopeId", "data-v-cb5d236c"]]), T$ = { class: "toggle" }, P$ = ["checked", "disabled"], R$ = /* @__PURE__ */ de({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", T$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, P$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ei = /* @__PURE__ */ me(R$, [["__scopeId", "data-v-71c0f550"]]), M$ = { class: "workspace-settings-content" }, D$ = { class: "settings-section" }, L$ = { class: "path-setting" }, A$ = { class: "path-value" }, O$ = { class: "path-setting" }, N$ = { class: "path-value" }, U$ = { class: "settings-section" }, z$ = { class: "settings-section" }, F$ = { class: "settings-section" }, B$ = /* @__PURE__ */ de({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = et(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), C = k(!0);
    function b(T) {
      return T.join(" ");
    }
    function I(T) {
      return T.trim() ? T.trim().split(/\s+/) : [];
    }
    const M = N(() => {
      if (!g.value) return !1;
      const T = w.value !== (g.value.civitai_api_key || ""), P = p.value !== b(g.value.comfyui_extra_args || []);
      return T || P;
    });
    async function x() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = b(v.value.comfyui_extra_args || []);
        const T = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = T !== "false", C.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (T) {
        d.value = T instanceof Error ? T.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function E() {
      var T, P;
      m.value = null;
      try {
        const L = {};
        w.value !== (((T = g.value) == null ? void 0 : T.civitai_api_key) || "") && (L.civitai_api_key = w.value || null), p.value !== b(((P = g.value) == null ? void 0 : P.comfyui_extra_args) || []) && (L.comfyui_extra_args = I(p.value)), await c(L, n.workspacePath || void 0), await x(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (L) {
        const ae = L instanceof Error ? L.message : "Failed to save settings";
        m.value = { type: "error", message: ae }, l("error", ae);
      }
    }
    function K() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = b(g.value.comfyui_extra_args || []), m.value = null);
    }
    function q(T) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(T)), console.log("[ComfyGit] Auto-refresh setting saved:", T);
    }
    function V(T) {
      T ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", T ? "enabled" : "disabled");
    }
    return s({
      saveSettings: E,
      resetSettings: K,
      hasChanges: M,
      loadSettings: x
    }), Je(x), (T, P) => (a(), r("div", M$, [
      u.value ? (a(), D(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), D(Rs, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: x
      }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
        S(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var L, ae;
            return [
              t("div", D$, [
                t("div", L$, [
                  P[4] || (P[4] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  P[5] || (P[5] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", A$, f(((L = v.value) == null ? void 0 : L.workspace_path) || "Loading..."), 1)
                ]),
                t("div", O$, [
                  P[6] || (P[6] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  P[7] || (P[7] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", N$, f(((ae = v.value) == null ? void 0 : ae.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", U$, [
              S(wn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  S(Un, {
                    modelValue: w.value,
                    "onUpdate:modelValue": P[0] || (P[0] = (L) => w.value = L),
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
        S(it, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", z$, [
              S(wn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  S(Un, {
                    modelValue: p.value,
                    "onUpdate:modelValue": P[1] || (P[1] = (L) => p.value = L),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              P[8] || (P[8] = t("div", { class: "setting-hint" }, [
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
        S(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", F$, [
              S(wn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  S(ei, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      P[2] || (P[2] = (L) => _.value = L),
                      q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(wn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  S(ei, {
                    modelValue: C.value,
                    "onUpdate:modelValue": [
                      P[3] || (P[3] = (L) => C.value = L),
                      V
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), D(an, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: Ft({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Rr = /* @__PURE__ */ me(B$, [["__scopeId", "data-v-f28917ec"]]), V$ = /* @__PURE__ */ de({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), D(Pt, null, {
      header: h(() => [
        S(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              S(ce, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
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
              (c = s.value) != null && c.hasChanges ? (a(), D(ce, {
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
        S(Rr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), W$ = { class: "base-tabs" }, G$ = ["disabled", "onClick"], j$ = {
  key: 0,
  class: "base-tabs__badge"
}, H$ = /* @__PURE__ */ de({
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
      (c = o.tabs.find((u) => u.id === i)) != null && c.disabled || n("update:modelValue", i);
    }
    return (i, c) => (a(), r("div", W$, [
      (a(!0), r(H, null, pe(e.tabs, (u) => (a(), r("button", {
        key: u.id,
        class: Ie([
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
        u.badge ? (a(), r("span", j$, f(u.badge), 1)) : y("", !0)
      ], 10, G$))), 128))
    ]));
  }
}), Mr = /* @__PURE__ */ me(H$, [["__scopeId", "data-v-ad5e6cad"]]), K$ = { class: "log-viewer-wrapper" }, q$ = ["disabled", "title"], Y$ = /* @__PURE__ */ de({
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
      await yt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Je(i), gt(() => s.logs, i);
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
    function u(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function d(m) {
      m.stopPropagation();
    }
    return (m, v) => (a(), r("div", K$, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, q$),
        (a(!0), r(H, null, pe(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Ie(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Dr = /* @__PURE__ */ me(Y$, [["__scopeId", "data-v-c0cc6d21"]]), J$ = /* @__PURE__ */ de({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = et(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = N(() => c.value === "workspace" ? g.value : w.value);
    async function C() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (M) {
        m.value = M instanceof Error ? M.message : `Failed to load ${c.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function b() {
      try {
        const [M, x] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (g.value = M.path), x.exists && (w.value = x.path);
      } catch {
      }
    }
    async function I() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          p.value = !1;
        }
      }
    }
    return gt(c, () => {
      C();
    }), Je(() => {
      C(), b();
    }), (M, x) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              S(ce, {
                variant: "secondary",
                size: "sm",
                onClick: I,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ce, {
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
          S(Mr, {
            modelValue: c.value,
            "onUpdate:modelValue": x[1] || (x[1] = (E) => c.value = E),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), D(Ps, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), D(Rs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            u.value.length === 0 ? (a(), D(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), D(Dr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: v.value,
        title: "About Logs",
        onClose: x[3] || (x[3] = (E) => v.value = !1)
      }, {
        content: h(() => [...x[4] || (x[4] = [
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
          S(ce, {
            variant: "primary",
            onClick: x[2] || (x[2] = (E) => v.value = !1)
          }, {
            default: h(() => [...x[5] || (x[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Q$ = /* @__PURE__ */ de({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = et(), i = k([]), c = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), g = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        i.value = await s(void 0, 500);
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
        const C = await n();
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
    return Je(() => {
      w(), p();
    }), (C, b) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (I) => d.value = !0)
          }, {
            actions: h(() => [
              S(ce, {
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
              S(ce, {
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
          c.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), D(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            i.value.length === 0 ? (a(), D(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), D(Dr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
        show: d.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (I) => d.value = !1)
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
          S(ce, {
            variant: "primary",
            onClick: b[1] || (b[1] = (I) => d.value = !1)
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
}), X$ = { class: "env-title" }, Z$ = {
  key: 0,
  class: "current-badge"
}, eC = {
  key: 0,
  class: "branch-info"
}, tC = /* @__PURE__ */ de({
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
    return (s, o) => (a(), D(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, oo({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", X$, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", Z$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", eC, [
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
          S(ft, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          S(ft, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          S(ft, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), D(ft, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), sC = /* @__PURE__ */ me(tC, [["__scopeId", "data-v-9231917a"]]), oC = { class: "env-details" }, nC = { class: "status-row" }, aC = {
  key: 0,
  class: "detail-row"
}, lC = { class: "value mono" }, iC = {
  key: 1,
  class: "detail-row"
}, rC = { class: "value mono small" }, cC = { class: "detail-row" }, uC = { class: "value" }, dC = { class: "detail-row" }, fC = { class: "value" }, mC = { class: "detail-row" }, vC = { class: "value" }, pC = {
  key: 2,
  class: "section-divider"
}, gC = {
  key: 3,
  class: "detail-row"
}, hC = { class: "value" }, yC = {
  key: 4,
  class: "detail-row"
}, wC = { class: "value" }, _C = { class: "footer-actions" }, kC = /* @__PURE__ */ de({
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
    return (l, i) => (a(), D(ut, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", oC, [
          t("div", nC, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", aC, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", lC, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", iC, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", rC, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", cC, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", uC, f(e.environment.workflow_count), 1)
          ]),
          t("div", dC, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", fC, f(e.environment.node_count), 1)
          ]),
          t("div", mC, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", vC, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", pC)) : y("", !0),
          e.environment.created_at ? (a(), r("div", gC, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", hC, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", yC, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", wC, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", _C, [
          e.canDelete ? (a(), D(Re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (c) => o("delete", e.environment.name))
          }, {
            default: h(() => [...i[12] || (i[12] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = t("div", { class: "footer-spacer" }, null, -1)),
          S(Re, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (c) => o("close"))
          }, {
            default: h(() => [...i[13] || (i[13] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), bC = /* @__PURE__ */ me(kC, [["__scopeId", "data-v-59855453"]]), Lr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ar = "3.12", ll = [
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
], Or = "auto", $C = { class: "progress-bar" }, CC = /* @__PURE__ */ de({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", $C, [
      t("div", {
        class: Ie(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), ta = /* @__PURE__ */ me(CC, [["__scopeId", "data-v-1beb0512"]]), xC = { class: "task-progress" }, SC = { class: "progress-info" }, IC = { class: "progress-percentage" }, EC = { class: "progress-message" }, TC = {
  key: 0,
  class: "progress-steps"
}, PC = { class: "step-icon" }, RC = { class: "step-label" }, MC = /* @__PURE__ */ de({
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
    return (l, i) => (a(), r("div", xC, [
      S(ta, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", SC, [
        t("span", IC, f(e.progress) + "%", 1),
        t("span", EC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", TC, [
        (a(!0), r(H, null, pe(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Ie(["step", o(c.id)])
        }, [
          t("span", PC, f(n(c.id)), 1),
          t("span", RC, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Fn = /* @__PURE__ */ me(MC, [["__scopeId", "data-v-9d1de66c"]]), DC = {
  key: 0,
  class: "create-env-form"
}, LC = { class: "form-field" }, AC = { class: "form-field" }, OC = ["value"], NC = { class: "form-field" }, UC = ["disabled"], zC = ["value"], FC = { class: "form-field" }, BC = ["value"], VC = { class: "form-field form-field--checkbox" }, WC = { class: "form-checkbox" }, GC = {
  key: 1,
  class: "create-env-progress"
}, jC = { class: "creating-intro" }, HC = {
  key: 0,
  class: "progress-warning"
}, KC = {
  key: 1,
  class: "create-error"
}, qC = { class: "error-message" }, YC = {
  key: 1,
  class: "footer-status"
}, JC = 10, QC = /* @__PURE__ */ de({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = et(), c = k(""), u = k(Ar), d = k("latest"), m = k(Or), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let C = null, b = 0;
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
    function x() {
      p.value || o("close");
    }
    async function E() {
      const P = c.value.trim();
      if (P) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const L = {
            name: P,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ae = await l(L);
          ae.status === "started" ? K() : ae.status === "error" && (_.value = {
            progress: 0,
            message: ae.message || "Failed to start creation",
            error: ae.message
          });
        } catch (L) {
          _.value = {
            progress: 0,
            message: L instanceof Error ? L.message : "Unknown error",
            error: L instanceof Error ? L.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      C || (b = 0, C = window.setInterval(async () => {
        try {
          const P = await i();
          b = 0, _.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase,
            error: P.error
          }, P.state === "complete" ? (q(), o("created", P.environment_name || c.value.trim(), v.value)) : P.state === "error" ? (q(), _.value.error = P.error || P.message) : P.state === "idle" && p.value && (q(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          b++, b >= JC && (q(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function q() {
      C && (clearInterval(C), C = null);
    }
    function V() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function T() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (P) {
        console.error("Failed to load ComfyUI releases:", P);
      } finally {
        w.value = !1;
      }
    }
    return Je(async () => {
      var P;
      await yt(), (P = M.value) == null || P.focus(), T();
    }), Ws(() => {
      q();
    }), (P, L) => (a(), D(ut, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: x
    }, {
      body: h(() => [
        p.value ? (a(), r("div", GC, [
          t("p", jC, [
            L[11] || (L[11] = $(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            L[12] || (L[12] = $("... ", -1))
          ]),
          S(Fn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", HC, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", KC, [
            t("p", qC, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", DC, [
          t("div", LC, [
            L[6] || (L[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: M,
              "onUpdate:modelValue": L[0] || (L[0] = (ae) => c.value = ae),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Kt(E, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", AC, [
            L[7] || (L[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[1] || (L[1] = (ae) => u.value = ae),
              class: "form-select"
            }, [
              (a(!0), r(H, null, pe(We(Lr), (ae) => (a(), r("option", {
                key: ae,
                value: ae
              }, f(ae), 9, OC))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", NC, [
            L[8] || (L[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[2] || (L[2] = (ae) => d.value = ae),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(H, null, pe(g.value, (ae) => (a(), r("option", {
                key: ae.tag_name,
                value: ae.tag_name
              }, f(ae.name), 9, zC))), 128))
            ], 8, UC), [
              [hs, d.value]
            ])
          ]),
          t("div", FC, [
            L[9] || (L[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[3] || (L[3] = (ae) => m.value = ae),
              class: "form-select"
            }, [
              (a(!0), r(H, null, pe(We(ll), (ae) => (a(), r("option", {
                key: ae,
                value: ae
              }, f(ae) + f(ae === "auto" ? " (detect GPU)" : ""), 9, BC))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", VC, [
            t("label", WC, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": L[4] || (L[4] = (ae) => v.value = ae)
              }, null, 512), [
                [en, v.value]
              ]),
              L[10] || (L[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(H, { key: 1 }, [
          _.value.error ? (a(), D(Re, {
            key: 0,
            variant: "secondary",
            onClick: V
          }, {
            default: h(() => [...L[15] || (L[15] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", YC, " Creating environment... "))
        ], 64)) : (a(), r(H, { key: 0 }, [
          S(Re, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: E
          }, {
            default: h(() => [...L[13] || (L[13] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Re, {
            variant: "secondary",
            onClick: L[5] || (L[5] = (ae) => o("close"))
          }, {
            default: h(() => [...L[14] || (L[14] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), XC = /* @__PURE__ */ me(QC, [["__scopeId", "data-v-f37eaa42"]]), ZC = /* @__PURE__ */ de({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = et(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = N(() => {
      if (!d.value.trim()) return i.value;
      const M = d.value.toLowerCase();
      return i.value.filter(
        (x) => {
          var E;
          return x.name.toLowerCase().includes(M) || ((E = x.current_branch) == null ? void 0 : E.toLowerCase().includes(M));
        }
      );
    });
    function p(M, x) {
      v.value = !1, n("created", M, x);
    }
    function _() {
      v.value = !0;
    }
    function C(M) {
      g.value = M;
    }
    function b(M) {
      g.value = null, n("delete", M);
    }
    async function I() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Je(I), s({
      loadEnvironments: I,
      openCreateModal: _
    }), (M, x) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (E) => m.value = !0)
          }, {
            actions: h(() => [
              S(ce, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...x[6] || (x[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              S(ce, {
                variant: "secondary",
                size: "sm",
                onClick: I
              }, {
                default: h(() => [...x[7] || (x[7] = [
                  $(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S($o, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (E) => d.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), D(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), D(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            w.value.length ? (a(), D(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, pe(w.value, (E) => (a(), D(sC, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    E.is_current ? y("", !0) : (a(), D(ce, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => M.$emit("switch", E.name)
                    }, {
                      default: h(() => [...x[8] || (x[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => C(E)
                    }, {
                      default: h(() => [...x[9] || (x[9] = [
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
            w.value.length ? y("", !0) : (a(), D(ns, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, oo({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  S(ce, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: h(() => [...x[10] || (x[10] = [
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
      S(as, {
        show: m.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (E) => m.value = !1)
      }, {
        content: h(() => [...x[11] || (x[11] = [
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
          S(ce, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (E) => m.value = !1)
          }, {
            default: h(() => [...x[12] || (x[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), D(bC, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: x[4] || (x[4] = (E) => g.value = null),
        onDelete: b
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), D(XC, {
        key: 1,
        onClose: x[5] || (x[5] = (E) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), ex = /* @__PURE__ */ me(ZC, [["__scopeId", "data-v-f95999f4"]]), tx = { class: "file-path" }, sx = { class: "file-path-text" }, ox = ["title"], nx = /* @__PURE__ */ de({
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
    return (l, i) => (a(), r("div", tx, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", sx, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, ox)) : y("", !0)
    ]));
  }
}), ax = /* @__PURE__ */ me(nx, [["__scopeId", "data-v-f0982173"]]), lx = { class: "export-blocked" }, ix = { class: "issues-list" }, rx = { class: "issue-message" }, cx = {
  key: 0,
  class: "issue-details"
}, ux = ["onClick"], dx = { class: "issue-fix" }, fx = /* @__PURE__ */ de({
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
    return (l, i) => (a(), D(ut, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", lx, [
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
          t("div", ix, [
            (a(!0), r(H, null, pe(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", rx, f(c.message), 1),
              c.details.length ? (a(), r("div", cx, [
                (a(!0), r(H, null, pe(n(u), (d, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                c.details.length > 3 && !o[u] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, ux)) : y("", !0)
              ])) : y("", !0),
              t("div", dx, [
                c.type === "uncommitted_workflows" ? (a(), r(H, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(H, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(H, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        S(Re, {
          variant: "primary",
          onClick: i[0] || (i[0] = (c) => l.$emit("close"))
        }, {
          default: h(() => [...i[3] || (i[3] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Nr = /* @__PURE__ */ me(fx, [["__scopeId", "data-v-b52f5e32"]]), mx = { class: "export-warnings" }, vx = {
  key: 0,
  class: "success-header"
}, px = { class: "warning-header" }, gx = { class: "warning-summary" }, hx = { class: "warning-title" }, yx = { class: "models-section" }, wx = { class: "models-list" }, _x = { class: "model-info" }, kx = { class: "model-filename" }, bx = { class: "model-workflows" }, $x = ["onClick"], Cx = /* @__PURE__ */ de({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = N(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(H, null, [
      S(ut, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", mx, [
            e.models.length === 0 ? (a(), r("div", vx, [...m[4] || (m[4] = [
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
            ])])) : (a(), r(H, { key: 1 }, [
              t("div", px, [
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
                t("div", gx, [
                  t("h3", hx, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", yx, [
                t("div", wx, [
                  (a(!0), r(H, null, pe(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", _x, [
                      t("div", kx, f(v.filename), 1),
                      t("div", bx, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, $x)
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
      i.value ? (a(), D(nl, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ur = /* @__PURE__ */ me(Cx, [["__scopeId", "data-v-b698d882"]]), xx = { class: "export-card" }, Sx = { class: "export-path-row" }, Ix = { class: "export-actions" }, Ex = {
  key: 1,
  class: "export-warning"
}, Tx = /* @__PURE__ */ de({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = et(), n = k(""), l = k(!1), i = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = N(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const x = await s();
        m.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? g.value = !0 : await b() : v.value = !0;
      } catch (x) {
        u.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function _() {
      g.value = !1, await b();
    }
    async function C() {
      try {
        const x = await s();
        m.value = x;
      } catch (x) {
        console.error("Re-validation failed:", x);
      }
    }
    async function b() {
      i.value = !0;
      try {
        const x = await o(n.value || void 0);
        u.value = x;
      } catch (x) {
        u.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function I() {
      var x;
      if ((x = u.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (E) {
          console.error("Failed to copy path:", E);
        }
    }
    async function M() {
      var x;
      if ((x = u.value) != null && x.path) {
        c.value = !0;
        try {
          const E = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!E.ok)
            throw new Error(`Download failed: ${E.statusText}`);
          const K = await E.blob(), q = URL.createObjectURL(K), V = u.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = q, T.download = V, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(q);
        } catch (E) {
          console.error("Failed to download:", E), alert(`Download failed: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (x, E) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (K) => d.value = !0)
          })
        ]),
        content: h(() => [
          S(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", xx, [
                E[7] || (E[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", Sx, [
                  S(Un, {
                    modelValue: n.value,
                    "onUpdate:modelValue": E[1] || (E[1] = (K) => n.value = K),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Ix, [
                  S(ce, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      E[6] || (E[6] = t("svg", {
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
          u.value ? (a(), D(it, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              S(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, oo({
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
                    S(ft, { label: "Saved to:" }, {
                      default: h(() => [
                        S(ax, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), D(ft, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), r("div", Ex, [...E[8] || (E[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    S(ce, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: M
                    }, {
                      default: h(() => [...E[9] || (E[9] = [
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
                    S(ce, {
                      variant: "secondary",
                      size: "sm",
                      onClick: I
                    }, {
                      default: h(() => [...E[10] || (E[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(ce, {
                      variant: "ghost",
                      size: "sm",
                      onClick: E[2] || (E[2] = (K) => u.value = null)
                    }, {
                      default: h(() => [...E[11] || (E[11] = [
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
      S(as, {
        show: d.value,
        title: "What Gets Exported",
        onClose: E[3] || (E[3] = (K) => d.value = !1)
      }, {
        content: h(() => [...E[12] || (E[12] = [
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
      v.value && m.value ? (a(), D(Nr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: E[4] || (E[4] = (K) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), D(Ur, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: E[5] || (E[5] = (K) => g.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), Px = /* @__PURE__ */ me(Tx, [["__scopeId", "data-v-f4d120f2"]]), Rx = { class: "file-input-wrapper" }, Mx = ["accept", "multiple", "disabled"], Dx = /* @__PURE__ */ de({
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
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return s({
      triggerInput: i
    }), (u, d) => (a(), r("div", Rx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, Mx),
      S(ce, {
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
            $(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Lx = /* @__PURE__ */ me(Dx, [["__scopeId", "data-v-cd192091"]]), Ax = {
  key: 0,
  class: "drop-zone-empty"
}, Ox = { class: "drop-zone-text" }, Nx = { class: "drop-zone-primary" }, Ux = { class: "drop-zone-secondary" }, zx = { class: "drop-zone-actions" }, Fx = {
  key: 1,
  class: "drop-zone-file"
}, Bx = { class: "file-info" }, Vx = { class: "file-details" }, Wx = { class: "file-name" }, Gx = { class: "file-size" }, jx = /* @__PURE__ */ de({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = N(() => l.value !== null), u = N(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = N(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var I;
      b.stopPropagation(), i.value++, (I = b.dataTransfer) != null && I.types.includes("Files") && (n.value = !0);
    }
    function v(b) {
      b.stopPropagation(), b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function g(b) {
      b.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w(b) {
      var M;
      b.stopPropagation(), i.value = 0, n.value = !1;
      const I = (M = b.dataTransfer) == null ? void 0 : M.files;
      I && I.length > 0 && _(I[0]);
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
    return (b, I) => (a(), r("div", {
      class: Ie(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: at(m, ["prevent"]),
      onDragover: at(v, ["prevent"]),
      onDragleave: at(g, ["prevent"]),
      onDrop: at(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", Fx, [
        t("div", Bx, [
          I[1] || (I[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", Vx, [
            t("div", Wx, f(u.value), 1),
            t("div", Gx, f(d.value), 1)
          ])
        ]),
        S(ce, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...I[2] || (I[2] = [
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
      ])) : (a(), r("div", Ax, [
        I[0] || (I[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", Ox, [
          t("p", Nx, f(e.primaryText), 1),
          t("p", Ux, f(e.secondaryText), 1)
        ]),
        t("div", zx, [
          S(Lx, {
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
}), Hx = /* @__PURE__ */ me(jx, [["__scopeId", "data-v-0f79cb86"]]), Kx = { class: "import-preview" }, qx = { class: "preview-header" }, Yx = {
  key: 0,
  class: "source-env"
}, Jx = { class: "preview-content" }, Qx = { class: "preview-section" }, Xx = { class: "section-header" }, Zx = { class: "section-info" }, e3 = { class: "section-count" }, t3 = {
  key: 0,
  class: "item-list"
}, s3 = { class: "item-name" }, o3 = {
  key: 0,
  class: "item-more"
}, n3 = { class: "preview-section" }, a3 = { class: "section-header" }, l3 = { class: "section-info" }, i3 = { class: "section-count" }, r3 = {
  key: 0,
  class: "item-list"
}, c3 = { class: "item-details" }, u3 = { class: "item-name" }, d3 = { class: "item-meta" }, f3 = {
  key: 0,
  class: "item-more"
}, m3 = { class: "preview-section" }, v3 = { class: "section-header" }, p3 = { class: "section-info" }, g3 = { class: "section-count" }, h3 = {
  key: 0,
  class: "item-list"
}, y3 = { class: "item-name" }, w3 = {
  key: 0,
  class: "item-more"
}, _3 = {
  key: 0,
  class: "preview-section"
}, k3 = { class: "git-info" }, b3 = /* @__PURE__ */ de({
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
    return (c, u) => (a(), r("div", Kx, [
      t("div", qx, [
        S(Nt, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", Yx, [
          u[1] || (u[1] = $(" From: ", -1)),
          S(Da, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", Jx, [
        t("div", Qx, [
          t("div", Xx, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Zx, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", e3, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", t3, [
            (a(!0), r(H, null, pe(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", s3, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", o3, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", n3, [
          t("div", a3, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", l3, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", i3, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", r3, [
            (a(!0), r(H, null, pe(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", c3, [
                t("span", u3, f(d.filename), 1),
                t("span", d3, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", f3, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", m3, [
          t("div", v3, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", p3, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", g3, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", h3, [
            (a(!0), r(H, null, pe(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", y3, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", w3, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", _3, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", k3, [
            e.gitBranch ? (a(), D(ft, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                S(Da, null, {
                  default: h(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), D(ft, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                S(xr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), $3 = /* @__PURE__ */ me(b3, [["__scopeId", "data-v-182fe113"]]), C3 = { class: "import-config" }, x3 = { class: "config-container" }, S3 = { class: "config-field" }, I3 = { class: "input-wrapper" }, E3 = ["value"], T3 = {
  key: 0,
  class: "validating-indicator"
}, P3 = {
  key: 1,
  class: "valid-indicator"
}, R3 = {
  key: 0,
  class: "field-error"
}, M3 = { class: "config-field" }, D3 = { class: "strategy-options" }, L3 = ["value", "checked", "onChange"], A3 = { class: "strategy-content" }, O3 = { class: "strategy-label" }, N3 = { class: "strategy-description" }, U3 = { class: "config-field switch-field" }, z3 = { class: "switch-label" }, F3 = ["checked"], B3 = { class: "advanced-section" }, V3 = { class: "advanced-content" }, W3 = { class: "config-field" }, G3 = ["value"], j3 = ["value"], H3 = /* @__PURE__ */ de({
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
      n("update:name", g), i.value = !1, u && clearTimeout(u), g.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), r("div", C3, [
      S(Nt, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", x3, [
        t("div", S3, [
          S(In, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", I3, [
            t("input", {
              type: "text",
              class: Ie(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, E3),
            l.value ? (a(), r("span", T3, "...")) : i.value ? (a(), r("span", P3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", R3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", M3, [
          S(In, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", D3, [
            (a(), r(H, null, pe(c, (w) => t("label", {
              key: w.value,
              class: Ie(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, L3),
              t("div", A3, [
                t("span", O3, f(w.label), 1),
                t("span", N3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", U3, [
          t("label", z3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, F3),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", B3, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", V3, [
            t("div", W3, [
              S(In, null, {
                default: h(() => [...g[7] || (g[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), r(H, null, pe(We(ll), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, j3))), 128))
              ], 40, G3)
            ])
          ])
        ])
      ])
    ]));
  }
}), K3 = /* @__PURE__ */ me(H3, [["__scopeId", "data-v-89ea06a1"]]), q3 = { class: "import-flow" }, Y3 = {
  key: 0,
  class: "import-empty"
}, J3 = { class: "git-import-section" }, Q3 = { class: "git-url-input-row" }, X3 = ["disabled"], Z3 = {
  key: 0,
  class: "git-error"
}, e5 = {
  key: 1,
  class: "import-configure"
}, t5 = { class: "selected-file-bar" }, s5 = {
  key: 0,
  class: "file-bar-content"
}, o5 = { class: "file-bar-info" }, n5 = { class: "file-bar-name" }, a5 = { class: "file-bar-size" }, l5 = {
  key: 1,
  class: "file-bar-content"
}, i5 = { class: "file-bar-info" }, r5 = { class: "file-bar-name" }, c5 = {
  key: 0,
  class: "preview-loading"
}, u5 = { class: "import-actions" }, d5 = {
  key: 2,
  class: "import-progress"
}, f5 = { class: "creating-intro" }, m5 = {
  key: 0,
  class: "progress-warning"
}, v5 = {
  key: 1,
  class: "import-error"
}, p5 = { class: "error-message" }, g5 = {
  key: 3,
  class: "import-complete"
}, h5 = { class: "complete-message" }, y5 = { class: "complete-title" }, w5 = { class: "complete-details" }, _5 = { class: "complete-actions" }, k5 = /* @__PURE__ */ de({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Fe, ze, Te, Pe;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = et();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), b = k(""), I = k(!1), M = k(null), x = k(""), E = k(null), K = k(!1), q = k(null), V = k(null), T = k({
      name: ((Fe = n.initialProgress) == null ? void 0 : Fe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), P = k(null), L = k({
      message: ((ze = n.initialProgress) == null ? void 0 : ze.message) ?? "Preparing import...",
      phase: ((Te = n.initialProgress) == null ? void 0 : Te.phase) ?? "",
      progress: ((Pe = n.initialProgress) == null ? void 0 : Pe.progress) ?? 0,
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
    ], Z = N(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ke = V.value;
      return {
        sourceEnvironment: ke.comfyui_version ? `ComfyUI ${ke.comfyui_version}` : "Unknown",
        workflows: ke.workflows.map((ge) => ge.name),
        models: ke.models.map((ge) => ({
          filename: ge.filename,
          size: 0,
          type: ge.relative_path.split("/")[0] || "model"
        })),
        nodes: ke.nodes.map((ge) => ge.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), F = N(() => !I.value && !M.value && V.value && T.value.name.length > 0 && !P.value && (w.value || E.value));
    async function G(ke) {
      w.value = ke, I.value = !0, M.value = null, V.value = null;
      try {
        const ge = await i(ke);
        V.value = ge;
      } catch (ge) {
        M.value = ge instanceof Error ? ge.message : "Failed to analyze file", console.error("Preview error:", ge);
      } finally {
        I.value = !1;
      }
    }
    function J() {
      w.value = null, E.value = null, x.value = "", q.value = null, _.value = !1, C.value = !1, b.value = "", V.value = null, M.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, P.value = null, l("source-cleared");
    }
    function O() {
      ve(), J(), p.value = !1, I.value = !1, K.value = !1, L.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function se() {
      if (x.value.trim()) {
        K.value = !0, q.value = null;
        try {
          const ke = await c(x.value.trim());
          E.value = x.value.trim(), V.value = ke;
        } catch (ke) {
          q.value = ke instanceof Error ? ke.message : "Failed to analyze repository";
        } finally {
          K.value = !1;
        }
      }
    }
    function X(ke) {
      try {
        const ge = new URL(ke);
        return ge.host + ge.pathname.replace(/\.git$/, "");
      } catch {
        return ke;
      }
    }
    async function he(ke) {
      if (!ke) {
        P.value = "Environment name is required";
        return;
      }
      try {
        const ge = await u(ke);
        P.value = ge.valid ? null : ge.error || "Invalid name";
      } catch {
        P.value = "Failed to validate name";
      }
    }
    async function we() {
      if (T.value.name && !(!w.value && !E.value)) {
        p.value = !0, _.value = !1, L.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ke;
          if (w.value)
            ke = await d(
              w.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (E.value)
            ke = await m(
              E.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ke.status === "started" ? re() : (C.value = !1, b.value = ke.message, p.value = !1, _.value = !0);
        } catch (ke) {
          C.value = !1, b.value = ke instanceof Error ? ke.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function re() {
      if (g) return;
      const ke = async () => {
        try {
          const De = await v();
          return L.value = {
            message: De.message,
            phase: De.phase || "",
            progress: De.progress ?? (De.state === "importing" ? 50 : 0),
            error: De.error || null
          }, De.state === "complete" ? (ve(), C.value = !0, b.value = `Environment '${De.environment_name}' created successfully`, p.value = !1, _.value = !0, De.environment_name && l("import-complete", De.environment_name, T.value.switchAfterImport), !1) : De.state === "error" ? (ve(), C.value = !1, b.value = De.error || De.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (De) {
          return console.error("Failed to poll import progress:", De), !0;
        }
      };
      await ke() && (g = setInterval(async () => {
        await ke() || ve();
      }, 2e3));
    }
    function ve() {
      g && (clearInterval(g), g = null);
    }
    function Se(ke) {
      return ke < 1024 ? `${ke} B` : ke < 1024 * 1024 ? `${(ke / 1024).toFixed(1)} KB` : ke < 1024 * 1024 * 1024 ? `${(ke / (1024 * 1024)).toFixed(1)} MB` : `${(ke / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Je(async () => {
      try {
        const ke = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ke.state, ke), ke.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ke.environment_name), p.value = !0, T.value.name = ke.environment_name || T.value.name || "", L.value = {
          progress: ke.progress ?? 0,
          message: ke.message || "Importing...",
          phase: ke.phase || "",
          error: null
        }, re());
      } catch (ke) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ke);
      }
    }), s({
      handleReset: O,
      isImporting: p,
      canImport: F
    }), (ke, ge) => {
      var De;
      return a(), r("div", q3, [
        !w.value && !E.value && !p.value ? (a(), r("div", Y3, [
          S(Hx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: G
          }),
          ge[7] || (ge[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", J3, [
            ge[5] || (ge[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", Q3, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ge[0] || (ge[0] = (Me) => x.value = Me),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Kt(se, ["enter"]),
                disabled: K.value
              }, null, 40, X3), [
                [zt, x.value]
              ]),
              S(ce, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || K.value,
                onClick: se
              }, {
                default: h(() => [
                  $(f(K.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            q.value ? (a(), r("div", Z3, f(q.value), 1)) : y("", !0),
            ge[6] || (ge[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !p.value && !_.value ? (a(), r("div", e5, [
          t("div", t5, [
            w.value ? (a(), r("div", s5, [
              ge[8] || (ge[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", o5, [
                t("div", n5, f(w.value.name), 1),
                t("div", a5, f(Se(w.value.size)), 1)
              ])
            ])) : E.value ? (a(), r("div", l5, [
              ge[10] || (ge[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", i5, [
                t("div", r5, f(X(E.value)), 1),
                ge[9] || (ge[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            S(ce, {
              variant: "ghost",
              size: "sm",
              onClick: J
            }, {
              default: h(() => [...ge[11] || (ge[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          I.value ? (a(), r("div", c5, [...ge[12] || (ge[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (a(), D(Qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : V.value ? (a(), D($3, {
            key: 2,
            "source-environment": Z.value.sourceEnvironment,
            workflows: Z.value.workflows,
            models: Z.value.models,
            nodes: Z.value.nodes,
            "git-branch": Z.value.gitBranch,
            "git-commit": Z.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          V.value ? (a(), D(K3, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": ge[1] || (ge[1] = (Me) => T.value.name = Me),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": ge[2] || (ge[2] = (Me) => T.value.modelStrategy = Me),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": ge[3] || (ge[3] = (Me) => T.value.torchBackend = Me),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": ge[4] || (ge[4] = (Me) => T.value.switchAfterImport = Me),
            "name-error": P.value,
            onValidateName: he
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          T.value.modelStrategy === "skip" && ((De = V.value) != null && De.models_needing_download) ? (a(), D(Qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", u5, [
            S(ce, {
              variant: "secondary",
              size: "md",
              onClick: J
            }, {
              default: h(() => [...ge[13] || (ge[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ce, {
              variant: "primary",
              size: "md",
              disabled: !F.value,
              onClick: we
            }, {
              default: h(() => [...ge[14] || (ge[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", d5, [
          t("p", f5, [
            ge[15] || (ge[15] = $(" Importing environment ", -1)),
            t("strong", null, f(T.value.name), 1),
            ge[16] || (ge[16] = $("... ", -1))
          ]),
          S(Fn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ae
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? y("", !0) : (a(), r("p", m5, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), r("div", v5, [
            t("p", p5, f(L.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", g5, [
          t("div", {
            class: Ie(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", h5, [
            t("div", y5, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", w5, f(b.value), 1)
          ]),
          t("div", _5, [
            S(ce, {
              variant: "primary",
              size: "md",
              onClick: O
            }, {
              default: h(() => [...ge[17] || (ge[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), zr = /* @__PURE__ */ me(k5, [["__scopeId", "data-v-72cbc04e"]]), b5 = /* @__PURE__ */ de({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
          })
        ]),
        content: h(() => [
          S(zr, { onImportComplete: l })
        ]),
        _: 1
      }),
      S(as, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
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
}), $5 = /* @__PURE__ */ me(b5, [["__scopeId", "data-v-e13bfe76"]]), _n = co(), C5 = 5e3, lo = k([]), ga = k(!1), ha = k(null);
let Ro = null;
async function kn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Fr(e) {
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
      (_, C) => (p[_.status] ?? 5) - (p[C.status] ?? 5)
    );
  });
  async function c() {
    ga.value = !0, ha.value = null;
    try {
      let p;
      if (!_n) {
        const _ = await kn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      lo.value = p.instances;
    } catch (p) {
      ha.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ga.value = !1;
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
      if (!_n) {
        const _ = u(p, "stop"), C = await kn(_, { method: "POST" });
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
      if (!_n) {
        const _ = u(p, "start"), C = await kn(_, { method: "POST" });
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
      if (!_n) {
        const _ = u(p, "terminate"), C = await kn(_, { method: "DELETE" });
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
    Ro || (Ro = window.setInterval(c, C5));
  }
  function w() {
    Ro && (clearInterval(Ro), Ro = null);
  }
  return gt(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: lo,
    isLoading: ga,
    error: ha,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
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
const x5 = { class: "instance-header" }, S5 = { class: "provider-badge" }, I5 = { class: "instance-name" }, E5 = {
  key: 0,
  class: "spinner"
}, T5 = { class: "instance-details" }, P5 = {
  key: 0,
  class: "detail"
}, R5 = {
  key: 1,
  class: "detail instance-url"
}, M5 = {
  key: 2,
  class: "detail"
}, D5 = {
  key: 3,
  class: "detail"
}, L5 = {
  key: 4,
  class: "detail total-cost"
}, A5 = {
  key: 0,
  class: "deployment-progress"
}, O5 = { class: "progress-message" }, N5 = { class: "instance-actions" }, U5 = /* @__PURE__ */ de({
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
    function u(d) {
      const m = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (d, m) => (a(), r("div", {
      class: Ie(["instance-card", l.value])
    }, [
      t("div", x5, [
        t("span", S5, f(o.value), 1),
        t("span", I5, f(e.instance.name), 1),
        t("span", {
          class: Ie(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", E5)) : y("", !0),
          $(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", T5, [
        e.instance.gpu_type ? (a(), r("span", P5, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", R5, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", M5, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", D5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", L5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", A5, [
        t("div", O5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), D(ta, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", N5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), D(ce, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: h(() => [...m[3] || (m[3] = [
            $(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), D(ce, {
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
        e.instance.status === "running" ? (a(), D(ce, {
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
        e.instance.status === "stopped" ? (a(), D(ce, {
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
        S(ce, {
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
}), z5 = /* @__PURE__ */ me(U5, [["__scopeId", "data-v-746c3894"]]), F5 = { class: "instances-tab" }, B5 = { class: "instances-header" }, V5 = {
  key: 0,
  class: "loading-state"
}, W5 = {
  key: 1,
  class: "empty-state"
}, G5 = {
  key: 2,
  class: "instances-list"
}, j5 = /* @__PURE__ */ de({
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
    return (n, l) => (a(), r("div", F5, [
      t("div", B5, [
        S(Nt, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(ce, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: h(() => [...l[5] || (l[5] = [
            $(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), r("div", V5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", W5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", G5, [
        (a(!0), r(H, null, pe(o.value, (i) => (a(), D(z5, {
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
}), H5 = /* @__PURE__ */ me(j5, [["__scopeId", "data-v-ba614fc3"]]), K5 = { class: "remote-header" }, q5 = { class: "remote-info" }, Y5 = { class: "remote-icon" }, J5 = { class: "remote-name" }, Q5 = {
  key: 0,
  class: "default-badge"
}, X5 = {
  key: 1,
  class: "sync-badge"
}, Z5 = {
  key: 0,
  class: "ahead"
}, eS = {
  key: 1,
  class: "behind"
}, tS = {
  key: 1,
  class: "synced"
}, sS = ["href"], oS = {
  key: 1,
  class: "remote-url-text"
}, nS = { class: "remote-actions" }, aS = /* @__PURE__ */ de({
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
      class: Ie(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", K5, [
        t("div", q5, [
          t("span", Y5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", J5, f(e.remote.name), 1),
          o.value ? (a(), r("span", Q5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", X5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", Z5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", eS, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", tS, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), r("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = at(() => {
          }, ["stop"]))
        }, f(l.value), 9, sS)) : (a(), r("span", oS, f(l.value), 1))
      ]),
      t("div", nS, [
        S(ce, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), D(ce, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            $(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        S(ce, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            $(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Br = /* @__PURE__ */ me(aS, [["__scopeId", "data-v-d687d161"]]), lS = { class: "runpod-tab" }, iS = { class: "api-key-card" }, rS = { class: "api-key-row" }, cS = { class: "api-key-input-wrapper" }, uS = ["type", "disabled"], dS = ["title"], fS = { class: "status-icon" }, mS = { class: "status-text" }, vS = {
  key: 0,
  class: "credit-balance"
}, pS = { class: "config-card" }, gS = { class: "config-row" }, hS = ["disabled"], yS = {
  key: 0,
  value: ""
}, wS = {
  key: 1,
  value: "",
  disabled: ""
}, _S = ["value", "disabled"], kS = { class: "config-row" }, bS = {
  key: 0,
  class: "loading-inline"
}, $S = { class: "no-volumes-state" }, CS = { class: "no-volumes-text" }, xS = ["value"], SS = { class: "config-row" }, IS = ["disabled"], ES = {
  key: 0,
  value: ""
}, TS = {
  key: 1,
  value: ""
}, PS = {
  key: 2,
  value: ""
}, RS = ["value"], MS = { class: "config-row" }, DS = { class: "radio-group" }, LS = { class: "radio-option" }, AS = { class: "radio-label" }, OS = { class: "radio-option disabled" }, NS = { class: "radio-label" }, US = { class: "config-row" }, zS = { class: "radio-group" }, FS = { class: "radio-option" }, BS = { class: "radio-label" }, VS = { class: "radio-option disabled" }, WS = { class: "radio-label" }, GS = { class: "config-row" }, jS = {
  key: 0,
  class: "loading-text"
}, HS = {
  key: 1,
  class: "empty-remotes"
}, KS = { class: "remotes-list" }, qS = {
  key: 0,
  class: "sync-warning"
}, YS = { class: "warning-content" }, JS = { class: "remotes-footer" }, QS = { class: "summary-card" }, XS = {
  key: 0,
  class: "loading-text"
}, ZS = { class: "summary-row" }, e8 = { class: "summary-value" }, t8 = { class: "summary-row" }, s8 = { class: "summary-value" }, o8 = { class: "summary-row" }, n8 = { class: "summary-value" }, a8 = {
  key: 0,
  class: "summary-sub-row"
}, l8 = { class: "summary-sub-label" }, i8 = {
  key: 1,
  class: "summary-sub-row warning"
}, r8 = { class: "summary-sub-label" }, c8 = { class: "summary-row" }, u8 = { class: "summary-value" }, d8 = { class: "summary-row" }, f8 = { class: "summary-value" }, m8 = { class: "deployment-summary" }, v8 = { class: "summary-columns" }, p8 = { class: "summary-column" }, g8 = { class: "pricing-row" }, h8 = { class: "pricing-value" }, y8 = { class: "pricing-row" }, w8 = { class: "pricing-value" }, _8 = { class: "pricing-row" }, k8 = { class: "pricing-value" }, b8 = { class: "pricing-row total" }, $8 = { class: "pricing-value" }, C8 = { class: "summary-column" }, x8 = { class: "spec-row" }, S8 = { class: "spec-row" }, I8 = {
  key: 0,
  class: "spec-row"
}, E8 = {
  key: 1,
  class: "spec-row spot-warning"
}, T8 = {
  key: 4,
  class: "deploy-actions"
}, P8 = { class: "progress-content" }, R8 = { class: "phase-indicator" }, M8 = { key: 0 }, D8 = { key: 1 }, L8 = { key: 2 }, A8 = {
  key: 3,
  class: "spinner"
}, O8 = { class: "phase-text" }, N8 = { class: "phase-name" }, U8 = { class: "phase-detail" }, z8 = {
  key: 0,
  class: "ready-actions"
}, F8 = { class: "console-link" }, B8 = ["href"], V8 = /* @__PURE__ */ de({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
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
    } = et(), I = k(!1), M = k(""), x = k(!1), E = k(!1), K = k(null), q = k(null), V = k(""), T = k(""), P = k(""), L = k("SECURE"), ae = k("ON_DEMAND"), Z = k("my-comfyui-deploy"), F = k([]), G = k({}), J = k(!1), O = k(null), se = k(null), X = k(null), he = k([]), we = k(!1), re = k([]), ve = k(!1), Se = k([]), Fe = k(!1), ze = k(null), Te = k(!1), Pe = k(!1), ke = k(null), ge = k(!1), De = k(null), Me = k(null), A = k(null), R = k(!1), z = k(null), W = k(!1), ee = k(!1), ie = N(() => re.value.find((xe) => xe.id === T.value) || null), ye = N(() => V.value ? re.value.filter((xe) => xe.data_center_id === V.value) : re.value), $e = N(() => Se.value.filter((xe) => xe.available)), ne = N(() => O.value && G.value[O.value] || null), fe = N(() => {
      if (!O.value) return null;
      const xe = F.value.find((te) => te.name === O.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), Le = N(() => x.value && T.value && P.value && fe.value && !Pe.value && !R.value), Ee = (xe) => {
      const te = Se.value.find((ht) => ht.id === P.value);
      if (!te) return "0.00";
      if (xe === "SECURE") return (te.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (te.communityPrice ?? 0).toFixed(2);
      const He = L.value === "SECURE";
      return xe === "ON_DEMAND" ? He ? (te.securePrice ?? 0).toFixed(2) : (te.communityPrice ?? 0).toFixed(2) : He ? (te.secureSpotPrice ?? 0).toFixed(2) : (te.communitySpotPrice ?? 0).toFixed(2);
    }, oe = N(() => {
      const xe = Se.value.find((ls) => ls.id === P.value), te = re.value.find((ls) => ls.id === T.value);
      if (!xe) return null;
      const He = L.value === "SECURE", ht = ae.value === "SPOT";
      let Jt;
      ht ? Jt = He ? xe.secureSpotPrice ?? 0 : xe.communitySpotPrice ?? 0 : Jt = He ? xe.securePrice ?? 0 : xe.communityPrice ?? 0;
      const ys = te ? te.size_gb * 14e-5 : 0, ws = 4e-3;
      return {
        gpu: Jt,
        volume: ys,
        container: ws,
        total: Jt + ys + ws
      };
    });
    async function Q() {
      await Ve(), await Promise.all([vt(), Ae()]);
    }
    async function Ae() {
      J.value = !0;
      try {
        const xe = await w();
        F.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (He) => {
            const ht = await p(He.name);
            ht && (G.value[He.name] = ht);
          })
        );
        const te = xe.remotes.find((He) => He.is_default);
        te ? O.value = te.name : xe.remotes.length > 0 && (O.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        J.value = !1;
      }
    }
    async function Ce(xe) {
      se.value = xe;
      try {
        await _(xe);
        const te = await p(xe);
        te && (G.value[xe] = te), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        se.value = null;
      }
    }
    async function be(xe) {
      X.value = xe;
      try {
        await C(xe, { force: !1 });
        const te = await p(xe);
        te && (G.value[xe] = te), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        X.value = null;
      }
    }
    function j(xe) {
      O.value = xe;
    }
    async function B() {
      if (M.value) {
        E.value = !0, K.value = null;
        try {
          const xe = await l(M.value, !0);
          xe.status === "success" ? (x.value = !0, q.value = xe.credit_balance ?? null, K.value = { type: "success", message: xe.message }, await Q()) : K.value = { type: "error", message: xe.message };
        } catch (xe) {
          K.value = {
            type: "error",
            message: xe instanceof Error ? xe.message : "Connection test failed"
          };
        } finally {
          E.value = !1;
        }
      }
    }
    async function ue() {
      try {
        await v(), M.value = "", x.value = !1, K.value = null, q.value = null, he.value = [], V.value = "", re.value = [], T.value = "", Se.value = [], P.value = "", ze.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      ve.value = !0, we.value = !0;
      try {
        const xe = await i();
        re.value = xe.volumes;
        const te = /* @__PURE__ */ new Map();
        for (const He of xe.volumes)
          He.data_center_id && !te.has(He.data_center_id) && te.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const He = await b();
          he.value = He.data_centers;
        } else
          he.value = Array.from(te.values());
        if (re.value.length > 0) {
          const He = re.value[0];
          T.value = He.id, He.data_center_id && (V.value = He.data_center_id, await Xe(He.data_center_id));
        } else he.value.length > 0 && (V.value = he.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        ve.value = !1, we.value = !1;
      }
    }
    async function Xe(xe) {
      Fe.value = !0;
      try {
        const te = await c(xe);
        Se.value = te.gpu_types;
        const He = Se.value.find((ht) => ht.available);
        He ? P.value = He.id : P.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Fe.value = !1;
      }
    }
    gt(V, async (xe) => {
      if (!xe || ve.value) return;
      const te = re.value.find((He) => He.id === T.value);
      te && te.data_center_id !== xe && (T.value = ""), await Xe(xe);
    }), gt(T, async (xe) => {
      if (!xe) {
        Se.value = [], P.value = "";
        return;
      }
      if (ve.value) return;
      const te = re.value.find((He) => He.id === xe);
      te && te.data_center_id !== V.value ? V.value = te.data_center_id : te && await Xe(te.data_center_id);
    });
    async function vt() {
      Te.value = !0;
      try {
        ze.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Te.value = !1;
      }
    }
    async function lt() {
      if (!(!P.value || !T.value)) {
        R.value = !0, ke.value = null;
        try {
          const xe = await g();
          z.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? ee.value = !0 : await Bt() : W.value = !0;
        } catch (xe) {
          ke.value = {
            status: "error",
            message: xe instanceof Error ? xe.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          R.value = !1;
        }
      }
    }
    async function dt() {
      ee.value = !1, await Bt();
    }
    async function Mt() {
      try {
        const xe = await g();
        z.value = xe;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Bt() {
      Pe.value = !0;
      try {
        let xe;
        if (ae.value === "SPOT") {
          const He = Se.value.find((ht) => ht.id === P.value);
          He && (xe = L.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const te = await u({
          gpu_type_id: P.value,
          pod_name: Z.value || "my-comfyui-deploy",
          network_volume_id: T.value,
          cloud_type: L.value,
          pricing_type: ae.value,
          spot_bid: xe,
          import_source: fe.value
        });
        ke.value = te, te.status === "success" && te.pod_id ? (De.value = te.pod_id, ge.value = !0, Yt(te.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", te.message, "error");
      } catch (xe) {
        ke.value = {
          status: "error",
          message: xe instanceof Error ? xe.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Pe.value = !1;
      }
    }
    function Yt(xe) {
      Ms(xe), A.value = window.setInterval(() => Ms(xe), 3e3);
    }
    function Gs() {
      A.value && (clearInterval(A.value), A.value = null);
    }
    async function Ms(xe) {
      try {
        const te = await d(xe);
        Me.value = te, (te.phase === "READY" || te.phase === "ERROR" || te.phase === "STOPPED") && (Gs(), te.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (te) {
        console.error("Failed to poll deployment status:", te);
      }
    }
    function no() {
      ge.value = !1, Gs(), De.value = null, Me.value = null;
    }
    function Co() {
      var xe;
      (xe = Me.value) != null && xe.comfyui_url && window.open(Me.value.comfyui_url, "_blank", "noopener,noreferrer");
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
    return Je(async () => {
      try {
        const xe = await m(!0);
        xe.has_key && xe.key_preview && (M.value = `****${xe.key_preview}`, xe.valid ? (x.value = !0, q.value = xe.credit_balance ?? null, K.value = { type: "success", message: "Connected to RunPod" }, await Q()) : xe.error && (K.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), Ws(() => {
      Gs();
    }), (xe, te) => {
      var He, ht, Jt, ys, ws, ls;
      return a(), r(H, null, [
        t("div", lS, [
          S(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", iS, [
                t("div", rS, [
                  t("div", cS, [
                    qe(t("input", {
                      "onUpdate:modelValue": te[0] || (te[0] = (Ne) => M.value = Ne),
                      type: I.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: x.value
                    }, null, 8, uS), [
                      [Zn, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: te[1] || (te[1] = (Ne) => I.value = !I.value),
                      title: I.value ? "Hide key" : "Show key"
                    }, f(I.value ? "👁" : "👁‍🗨"), 9, dS)
                  ]),
                  x.value ? y("", !0) : (a(), D(ce, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: E.value,
                    disabled: !M.value || E.value,
                    onClick: B
                  }, {
                    default: h(() => [...te[16] || (te[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  x.value ? (a(), D(ce, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ue
                  }, {
                    default: h(() => [...te[17] || (te[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                K.value ? (a(), r("div", {
                  key: 0,
                  class: Ie(["connection-status", K.value.type])
                }, [
                  t("span", fS, f(K.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", mS, f(K.value.message), 1),
                  q.value !== null ? (a(), r("span", vS, " $" + f(q.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          x.value ? (a(), D(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", pS, [
                t("div", gS, [
                  te[19] || (te[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": te[2] || (te[2] = (Ne) => V.value = Ne),
                    class: "config-select",
                    disabled: we.value
                  }, [
                    we.value ? (a(), r("option", yS, "Loading...")) : V.value ? y("", !0) : (a(), r("option", wS, "Select a region")),
                    (a(!0), r(H, null, pe(he.value, (Ne) => (a(), r("option", {
                      key: Ne.id,
                      value: Ne.id,
                      disabled: !Ne.available
                    }, f(Ne.id) + " (" + f(Ne.name) + ")" + f(Ne.available ? "" : " [Unavailable]"), 9, _S))), 128))
                  ], 8, hS), [
                    [hs, V.value]
                  ])
                ]),
                t("div", kS, [
                  te[24] || (te[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  ve.value ? (a(), r("div", bS, "Loading volumes...")) : ye.value.length === 0 ? (a(), r(H, { key: 1 }, [
                    t("div", $S, [
                      te[20] || (te[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", CS, "No volumes in " + f(V.value || "this region"), 1)
                    ]),
                    te[21] || (te[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    te[22] || (te[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(H, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": te[3] || (te[3] = (Ne) => T.value = Ne),
                      class: "config-select"
                    }, [
                      (a(!0), r(H, null, pe(ye.value, (Ne) => (a(), r("option", {
                        key: Ne.id,
                        value: Ne.id
                      }, f(Ne.name) + " (" + f(Ne.size_gb) + "GB) ", 9, xS))), 128))
                    ], 512), [
                      [hs, T.value]
                    ]),
                    te[23] || (te[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", SS, [
                  te[25] || (te[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": te[4] || (te[4] = (Ne) => P.value = Ne),
                    class: "config-select",
                    disabled: Fe.value || !T.value
                  }, [
                    T.value ? Fe.value ? (a(), r("option", TS, "Loading GPUs...")) : $e.value.length === 0 ? (a(), r("option", PS, "No GPUs available in this region")) : y("", !0) : (a(), r("option", ES, "Select a volume first")),
                    (a(!0), r(H, null, pe($e.value, (Ne) => (a(), r("option", {
                      key: Ne.id,
                      value: Ne.id
                    }, f(Ne.displayName) + " (" + f(Ne.memoryInGb) + "GB) - $" + f(L.value === "SECURE" ? (Ne.securePrice ?? 0).toFixed(2) : (Ne.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ne.stockStatus ? `[${Ne.stockStatus}]` : ""), 9, RS))), 128))
                  ], 8, IS), [
                    [hs, P.value]
                  ])
                ]),
                t("div", MS, [
                  te[26] || (te[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", DS, [
                    t("label", LS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[5] || (te[5] = (Ne) => L.value = Ne),
                        value: "SECURE"
                      }, null, 512), [
                        [Zt, L.value]
                      ]),
                      t("span", AS, "Secure ($" + f(Ee("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", OS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[6] || (te[6] = (Ne) => L.value = Ne),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Zt, L.value]
                      ]),
                      t("span", NS, "Community ($" + f(Ee("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", US, [
                  te[27] || (te[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", zS, [
                    t("label", FS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[7] || (te[7] = (Ne) => ae.value = Ne),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Zt, ae.value]
                      ]),
                      t("span", BS, "On-Demand ($" + f(Ee("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", VS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": te[8] || (te[8] = (Ne) => ae.value = Ne),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Zt, ae.value]
                      ]),
                      t("span", WS, "Spot ($" + f(Ee("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", GS, [
                  te[28] || (te[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": te[9] || (te[9] = (Ne) => Z.value = Ne),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [zt, Z.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          x.value ? (a(), D(it, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              J.value ? (a(), r("div", jS, "Loading remotes...")) : F.value.length === 0 ? (a(), r("div", HS, [
                te[30] || (te[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(ce, {
                  variant: "primary",
                  size: "xs",
                  onClick: te[10] || (te[10] = (Ne) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...te[29] || (te[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(H, { key: 2 }, [
                t("div", KS, [
                  (a(!0), r(H, null, pe(F.value, (Ne) => (a(), D(Br, {
                    key: Ne.name,
                    remote: Ne,
                    "sync-status": G.value[Ne.name],
                    "is-selected": O.value === Ne.name,
                    "is-fetching": se.value === Ne.name,
                    "is-pushing": X.value === Ne.name,
                    onFetch: Ce,
                    onPush: be,
                    onSelect: j
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ne.value && ne.value.ahead > 0 ? (a(), r("div", qS, [
                  te[31] || (te[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", YS, [
                    t("strong", null, f(ne.value.ahead) + " unpushed commit" + f(ne.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(O.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(ce, {
                    variant: "primary",
                    size: "xs",
                    loading: X.value === O.value,
                    onClick: te[11] || (te[11] = (Ne) => O.value && be(O.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(O.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", JS, [
                  S(ce, {
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
          x.value ? (a(), D(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", QS, [
                Te.value ? (a(), r("div", XS, "Loading environment summary...")) : ze.value ? (a(), r(H, { key: 1 }, [
                  t("div", ZS, [
                    te[33] || (te[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", e8, f(ze.value.comfyui_version), 1)
                  ]),
                  t("div", t8, [
                    te[34] || (te[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", s8, f(ze.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", o8, [
                    te[35] || (te[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", n8, f(ze.value.model_count) + " models", 1)
                  ]),
                  ze.value.models_with_sources > 0 ? (a(), r("div", a8, [
                    t("span", l8, "└─ " + f(ze.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  ze.value.models_without_sources > 0 ? (a(), r("div", i8, [
                    t("span", r8, "└─ " + f(ze.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", c8, [
                    te[36] || (te[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", u8, f(ze.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", d8, [
                    te[37] || (te[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", f8, "~" + f(ze.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          x.value && oe.value ? (a(), D(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ne, is;
              return [
                t("div", m8, [
                  t("div", v8, [
                    t("div", p8, [
                      te[42] || (te[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", g8, [
                        te[38] || (te[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", h8, "$" + f(oe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", y8, [
                        te[39] || (te[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", w8, "$" + f(oe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", _8, [
                        te[40] || (te[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", k8, "$" + f(oe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      te[43] || (te[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", b8, [
                        te[41] || (te[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", $8, "~$" + f(oe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", C8, [
                      te[45] || (te[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", x8, [
                        t("span", null, f(((Ne = Se.value.find((le) => le.id === P.value)) == null ? void 0 : Ne.displayName) || "GPU") + " (" + f(((is = Se.value.find((le) => le.id === P.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", S8, [
                        t("span", null, "Region: " + f(V.value), 1)
                      ]),
                      ie.value ? (a(), r("div", I8, [
                        t("span", null, "Volume: " + f(ie.value.name), 1)
                      ])) : y("", !0),
                      ae.value === "SPOT" ? (a(), r("div", E8, [...te[44] || (te[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          x.value ? (a(), r("div", T8, [
            S(ce, {
              variant: "primary",
              size: "md",
              loading: R.value || Pe.value,
              disabled: !Le.value,
              onClick: lt
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
                $(" " + f(R.value ? "Validating..." : Pe.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ke.value ? (a(), D(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              S(Et, {
                status: ke.value.status === "success" ? "synced" : "broken"
              }, oo({
                icon: h(() => [
                  $(f(ke.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(ke.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(ke.value.message), 1)
                ]),
                actions: h(() => [
                  S(ce, {
                    variant: "ghost",
                    size: "xs",
                    onClick: te[13] || (te[13] = (Ne) => ke.value = null)
                  }, {
                    default: h(() => [...te[47] || (te[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ke.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    S(ft, {
                      label: "Pod ID:",
                      value: ke.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ge.value ? (a(), D(ut, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Me.value) == null ? void 0 : He.phase) === "READY" || ((ht = Me.value) == null ? void 0 : ht.phase) === "ERROR" || ((Jt = Me.value) == null ? void 0 : Jt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: no
        }, oo({
          body: h(() => {
            var Ne, is, le, Y, Oe, je, ot, mt, Dt, rs, js, Hs;
            return [
              t("div", P8, [
                t("div", R8, [
                  t("div", {
                    class: Ie(["phase-icon", (is = (Ne = Me.value) == null ? void 0 : Ne.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((le = Me.value) == null ? void 0 : le.phase) === "READY" ? (a(), r("span", M8, "✓")) : ((Y = Me.value) == null ? void 0 : Y.phase) === "ERROR" ? (a(), r("span", D8, "✕")) : ((Oe = Me.value) == null ? void 0 : Oe.phase) === "STOPPED" ? (a(), r("span", L8, "○")) : (a(), r("span", A8, "⟳"))
                  ], 2),
                  t("div", O8, [
                    t("div", N8, f(xo((je = Me.value) == null ? void 0 : je.phase)), 1),
                    t("div", U8, f(((ot = Me.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(ta, {
                  progress: So((mt = Me.value) == null ? void 0 : mt.phase),
                  variant: ((Dt = Me.value) == null ? void 0 : Dt.phase) === "ERROR" ? "error" : ((rs = Me.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((js = Me.value) == null ? void 0 : js.phase) === "READY" ? (a(), r("div", z8, [
                  S(ce, {
                    variant: "primary",
                    size: "md",
                    onClick: Co
                  }, {
                    default: h(() => [...te[48] || (te[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", F8, [
                  (Hs = Me.value) != null && Hs.console_url ? (a(), r("a", {
                    key: 0,
                    href: Me.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, B8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ys = Me.value) == null ? void 0 : ys.phase) === "READY" || ((ws = Me.value) == null ? void 0 : ws.phase) === "ERROR" || ((ls = Me.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              S(ce, {
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
        W.value && z.value ? (a(), D(Nr, {
          key: 1,
          issues: z.value.blocking_issues,
          onClose: te[14] || (te[14] = (Ne) => W.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ee.value && z.value ? (a(), D(Ur, {
          key: 2,
          models: z.value.warnings.models_without_sources,
          onConfirm: dt,
          onCancel: te[15] || (te[15] = (Ne) => ee.value = !1),
          onRevalidate: Mt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), W8 = /* @__PURE__ */ me(V8, [["__scopeId", "data-v-522cd4d9"]]), G8 = { class: "worker-header" }, j8 = { class: "worker-status" }, H8 = { class: "worker-name" }, K8 = { class: "worker-actions" }, q8 = { class: "worker-details" }, Y8 = { class: "detail-item" }, J8 = { class: "detail-value" }, Q8 = {
  key: 0,
  class: "detail-item"
}, X8 = { class: "detail-value" }, Z8 = {
  key: 1,
  class: "detail-item"
}, e4 = { class: "detail-value mode-badge" }, t4 = {
  key: 0,
  class: "worker-stats"
}, s4 = {
  key: 0,
  class: "stat-item"
}, o4 = { key: 0 }, n4 = {
  key: 1,
  class: "worker-stats offline"
}, a4 = /* @__PURE__ */ de({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Ie(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", G8, [
        t("div", j8, [
          t("span", {
            class: Ie(["status-dot", e.worker.status])
          }, null, 2),
          t("span", H8, f(e.worker.name), 1)
        ]),
        t("div", K8, [
          e.worker.status === "online" ? (a(), D(ce, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => s.$emit("deploy", e.worker))
          }, {
            default: h(() => [...o[2] || (o[2] = [
              $(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          S(ce, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => s.$emit("remove", e.worker.name))
          }, {
            default: h(() => [...o[3] || (o[3] = [
              $(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", q8, [
        t("span", Y8, [
          t("span", J8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", Q8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", X8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", Z8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", e4, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", t4, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", s4, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", o4, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", n4, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), l4 = /* @__PURE__ */ me(a4, [["__scopeId", "data-v-b1be7134"]]), i4 = { class: "add-worker-content" }, r4 = { class: "manual-form" }, c4 = { class: "form-row" }, u4 = { class: "form-row-inline" }, d4 = { class: "form-field flex-2" }, f4 = { class: "form-field flex-1" }, m4 = { class: "form-row" }, v4 = { class: "api-key-wrapper" }, p4 = ["type"], g4 = { class: "result-icon" }, h4 = { class: "result-content" }, y4 = { class: "result-message" }, w4 = {
  key: 0,
  class: "result-detail"
}, _4 = { class: "modal-actions" }, k4 = /* @__PURE__ */ de({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = et(), l = Vs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), u = k(!1), d = k(null), m = N(() => l.host && l.port && l.apiKey), v = N(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
      if (m.value) {
        c.value = !0, d.value = null;
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
    return (p, _) => (a(), D(ut, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", i4, [
          t("div", r4, [
            t("div", c4, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", u4, [
              t("div", d4, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", f4, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (C) => l.port = C),
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
            t("div", m4, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", v4, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, p4), [
                  [Zn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (C) => i.value = !i.value),
                  type: "button"
                }, f(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              _[10] || (_[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), r("div", {
              key: 0,
              class: Ie(["test-result", d.value.type])
            }, [
              t("span", g4, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", h4, [
                t("span", y4, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", w4, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", _4, [
          S(ce, {
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
          S(ce, {
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
}), b4 = /* @__PURE__ */ me(k4, [["__scopeId", "data-v-07a00732"]]), $4 = { class: "discovered-content" }, C4 = {
  key: 0,
  class: "workers-list"
}, x4 = { class: "worker-info" }, S4 = { class: "worker-name" }, I4 = { class: "worker-address" }, E4 = {
  key: 0,
  class: "worker-gpu"
}, T4 = {
  key: 1,
  class: "empty-state"
}, P4 = {
  key: 2,
  class: "api-key-section"
}, R4 = { class: "selected-worker" }, M4 = { class: "selected-name" }, D4 = { class: "selected-address" }, L4 = { class: "form-row" }, A4 = { class: "api-key-wrapper" }, O4 = ["type"], N4 = { class: "result-icon" }, U4 = { class: "result-message" }, z4 = { class: "modal-actions" }, F4 = /* @__PURE__ */ de({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = et(), l = k(null), i = k(""), c = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await yt(), (p = d.value) == null || p.focus();
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
    return (w, p) => (a(), D(ut, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", $4, [
          e.workers.length > 0 ? (a(), r("div", C4, [
            (a(!0), r(H, null, pe(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", x4, [
                t("span", S4, f(_.name), 1),
                t("span", I4, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", E4, f(_.gpu_info), 1)) : y("", !0)
              ]),
              S(ce, {
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
          ])) : (a(), r("div", T4, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", P4, [
            t("div", R4, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", M4, f(l.value.name), 1),
              t("span", D4, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", L4, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", A4, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Kt(g, ["enter"])
                }, null, 40, O4), [
                  [Zn, i.value]
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
            m.value ? (a(), r("div", {
              key: 0,
              class: Ie(["test-result", m.value.type])
            }, [
              t("span", N4, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", U4, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", z4, [
          l.value ? (a(), D(ce, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (_) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: h(() => [...p[9] || (p[9] = [
              $(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), D(ce, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
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
}), B4 = /* @__PURE__ */ me(F4, [["__scopeId", "data-v-5a3e40a4"]]), V4 = { class: "deploy-content" }, W4 = { class: "section" }, G4 = {
  key: 0,
  class: "loading-text"
}, j4 = {
  key: 1,
  class: "empty-remotes"
}, H4 = {
  key: 2,
  class: "remotes-list"
}, K4 = { class: "section" }, q4 = { class: "mode-options" }, Y4 = { class: "mode-option" }, J4 = ["disabled"], Q4 = { class: "mode-option" }, X4 = { class: "section" }, Z4 = {
  key: 0,
  class: "section"
}, e6 = { class: "summary-row" }, t6 = {
  key: 1,
  class: "sync-warning"
}, s6 = { class: "warning-content" }, o6 = { class: "modal-actions" }, n6 = /* @__PURE__ */ de({
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
      pushToRemote: u,
      getDeploySummary: d,
      deployToWorker: m
    } = et(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), b = k(o.worker.mode || "native"), I = k(""), M = k(null), x = k(!1), E = N(() => p.value && g.value[p.value] || null), K = N(() => {
      if (!p.value) return null;
      const F = v.value.find((G) => G.name === p.value);
      return (F == null ? void 0 : F.fetch_url) || null;
    }), q = N(() => K.value && !x.value);
    async function V() {
      w.value = !0;
      try {
        const F = await l();
        v.value = F.remotes, await Promise.all(
          F.remotes.map(async (J) => {
            const O = await i(J.name);
            O && (g.value[J.name] = O);
          })
        );
        const G = F.remotes.find((J) => J.is_default);
        G ? p.value = G.name : F.remotes.length > 0 && (p.value = F.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function T() {
      try {
        M.value = await d();
      } catch {
      }
    }
    async function P(F) {
      _.value = F;
      try {
        await c(F);
        const G = await i(F);
        G && (g.value[F] = G), n("toast", `Fetched from ${F}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function L(F) {
      C.value = F;
      try {
        await u(F, { force: !1 });
        const G = await i(F);
        G && (g.value[F] = G), n("toast", `Pushed to ${F}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function ae(F) {
      p.value = F;
    }
    async function Z() {
      if (K.value) {
        x.value = !0;
        try {
          const F = await m(o.worker.name, {
            import_source: K.value,
            mode: b.value,
            name: I.value || void 0
          });
          F.id ? (n("toast", `Deployment started: ${F.name || F.id}`, "success"), n("deployed")) : F.status === "error" ? n("toast", F.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (F) {
          n("toast", F instanceof Error ? F.message : "Deployment failed", "error");
        } finally {
          x.value = !1;
        }
      }
    }
    return Je(() => {
      V(), T();
    }), (F, G) => (a(), D(ut, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: G[5] || (G[5] = (J) => F.$emit("close"))
    }, {
      body: h(() => [
        t("div", V4, [
          t("div", W4, [
            G[7] || (G[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", G4, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", j4, [...G[6] || (G[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", H4, [
              (a(!0), r(H, null, pe(v.value, (J) => (a(), D(Br, {
                key: J.name,
                remote: J,
                "sync-status": g.value[J.name],
                "is-selected": p.value === J.name,
                "is-fetching": _.value === J.name,
                "is-pushing": C.value === J.name,
                onFetch: P,
                onPush: L,
                onSelect: ae
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", K4, [
            G[10] || (G[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", q4, [
              t("label", Y4, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": G[0] || (G[0] = (J) => b.value = J),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, J4), [
                  [Zt, b.value]
                ]),
                G[8] || (G[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", Q4, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": G[1] || (G[1] = (J) => b.value = J),
                  value: "native"
                }, null, 512), [
                  [Zt, b.value]
                ]),
                G[9] || (G[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", X4, [
            G[11] || (G[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": G[2] || (G[2] = (J) => I.value = J),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, I.value]
            ])
          ]),
          M.value ? (a(), r("div", Z4, [
            G[12] || (G[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", e6, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          E.value && E.value.ahead > 0 ? (a(), r("div", t6, [
            G[14] || (G[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", s6, [
              t("strong", null, f(E.value.ahead) + " unpushed commit" + f(E.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(ce, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: G[3] || (G[3] = (J) => p.value && L(p.value))
            }, {
              default: h(() => [...G[13] || (G[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", o6, [
          S(ce, {
            variant: "ghost",
            size: "sm",
            onClick: G[4] || (G[4] = (J) => F.$emit("close"))
          }, {
            default: h(() => [...G[15] || (G[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(ce, {
            variant: "primary",
            size: "sm",
            loading: x.value,
            disabled: !q.value || x.value,
            onClick: Z
          }, {
            default: h(() => [...G[16] || (G[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), a6 = /* @__PURE__ */ me(n6, [["__scopeId", "data-v-c12720d3"]]), l6 = { class: "custom-tab" }, i6 = { class: "section-header" }, r6 = { class: "section-actions" }, c6 = { class: "workers-content" }, u6 = {
  key: 0,
  class: "loading-state"
}, d6 = {
  key: 1,
  class: "empty-state"
}, f6 = {
  key: 2,
  class: "workers-list"
}, m6 = { class: "scan-icon" }, v6 = { class: "scan-message" }, p6 = /* @__PURE__ */ de({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = et(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), C = k(null);
    async function b() {
      m.value = !0;
      try {
        const V = await n();
        u.value = V.workers;
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function I() {
      v.value = !0, C.value = null;
      try {
        const V = await c(), T = V.discovered.filter(
          (P) => !u.value.some((L) => L.host === P.host && L.port === P.port)
        );
        d.value = T, T.length > 0 ? p.value = !0 : V.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function M(V) {
      try {
        await l(V), o("toast", `Worker '${V.name}' added`, "success"), w.value = !1, await b();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function x(V) {
      try {
        await l(V), o("toast", `Worker '${V.name}' added`, "success"), p.value = !1, await b();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function E(V) {
      g.value = V;
      try {
        await i(V), o("toast", `Worker '${V}' removed`, "success"), await b();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function K(V) {
      _.value = V;
    }
    function q() {
      _.value = null, o("deployed");
    }
    return Je(() => {
      b();
    }), (V, T) => (a(), r("div", l6, [
      t("div", i6, [
        T[8] || (T[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", r6, [
          S(ce, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: I
          }, {
            default: h(() => [...T[6] || (T[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(ce, {
            variant: "secondary",
            size: "xs",
            onClick: T[0] || (T[0] = (P) => w.value = !0)
          }, {
            default: h(() => [...T[7] || (T[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", c6, [
        m.value && u.value.length === 0 ? (a(), r("div", u6, [...T[9] || (T[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", d6, [...T[10] || (T[10] = [
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
        ])])) : (a(), r("div", f6, [
          (a(!0), r(H, null, pe(u.value, (P) => (a(), D(l4, {
            key: P.name,
            worker: P,
            "is-action-loading": g.value === P.name,
            onDeploy: K,
            onRemove: E
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (a(), r("div", {
        key: 0,
        class: Ie(["scan-result", C.value.type])
      }, [
        t("span", m6, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", v6, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: T[1] || (T[1] = (P) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), D(B4, {
        key: 1,
        workers: d.value,
        onClose: T[2] || (T[2] = (P) => p.value = !1),
        onAdd: x
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), D(b4, {
        key: 2,
        onClose: T[3] || (T[3] = (P) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      _.value ? (a(), D(a6, {
        key: 3,
        worker: _.value,
        onClose: T[4] || (T[4] = (P) => _.value = null),
        onToast: T[5] || (T[5] = (P, L) => o("toast", P, L)),
        onDeployed: q
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), g6 = /* @__PURE__ */ me(p6, [["__scopeId", "data-v-1637dead"]]), ya = "ComfyGit.Deploy.GitHubPAT";
function Vr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function h6(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function y6() {
  function e() {
    try {
      return localStorage.getItem(ya);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ya, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ya);
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
    isRemoteSsh: Vr,
    isRemoteHttps: h6
  };
}
const w6 = { class: "settings-content" }, _6 = { class: "settings-section" }, k6 = {
  key: 0,
  class: "ssh-warning"
}, b6 = { class: "form-row" }, $6 = { class: "token-wrapper" }, C6 = ["type"], x6 = { class: "result-icon" }, S6 = { class: "result-message" }, I6 = { class: "token-actions" }, E6 = /* @__PURE__ */ de({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = y6(), { getRemotes: u, testGitAuth: d } = et(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = N(() => c());
    Je(async () => {
      var x;
      const M = n();
      M && (m.value = M);
      try {
        const K = (x = (await u()).remotes) == null ? void 0 : x.find((q) => q.name === "origin");
        K && Vr(K.url) && (p.value = !0);
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
    function I() {
      i(), m.value = "", w.value = null;
    }
    return (M, x) => (a(), D(ut, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: x[2] || (x[2] = (E) => M.$emit("close"))
    }, {
      body: h(() => [
        t("div", w6, [
          t("div", _6, [
            x[8] || (x[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            x[9] || (x[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", k6, [...x[3] || (x[3] = [
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
            t("div", b6, [
              x[4] || (x[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", $6, [
                qe(t("input", {
                  "onUpdate:modelValue": x[0] || (x[0] = (E) => m.value = E),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, C6), [
                  [Zn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: x[1] || (x[1] = (E) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              x[5] || (x[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Ie(["test-result", w.value.type])
            }, [
              t("span", x6, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", S6, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", I6, [
              S(ce, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...x[6] || (x[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), D(ce, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: I
              }, {
                default: h(() => [...x[7] || (x[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        S(ce, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: b
        }, {
          default: h(() => [...x[10] || (x[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), T6 = /* @__PURE__ */ me(E6, [["__scopeId", "data-v-b21588ad"]]), P6 = /* @__PURE__ */ de({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: c,
      stopInstance: u,
      startInstance: d,
      terminateInstance: m,
      startPolling: v,
      stopPolling: g
    } = Fr(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), b = k(null), I = N(() => [
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
    async function M(V) {
      C.value = V.id;
      try {
        await u(V), o("toast", "Instance stopped", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function x(V) {
      C.value = V.id;
      try {
        await d(V), o("toast", "Instance starting...", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function E(V) {
      b.value = V;
    }
    async function K() {
      const V = b.value;
      if (V) {
        b.value = null, C.value = V.id;
        try {
          await m(V), o("toast", "Instance terminated", "success");
        } catch (T) {
          o("toast", T instanceof Error ? T.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function q() {
      await c(), _.value = "instances";
    }
    return Je(() => {
      c(), v();
    }), Ws(() => {
      g();
    }), (V, T) => (a(), r(H, null, [
      S(Pt, null, {
        header: h(() => [
          S(Rt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: T[1] || (T[1] = (P) => w.value = !0)
          }, {
            actions: h(() => [
              S(ce, {
                variant: "ghost",
                size: "xs",
                onClick: T[0] || (T[0] = (P) => p.value = !0)
              }, {
                default: h(() => [...T[10] || (T[10] = [
                  $(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Mr, {
            modelValue: _.value,
            "onUpdate:modelValue": T[2] || (T[2] = (P) => _.value = P),
            tabs: I.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), D(H5, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": C.value,
            onRefresh: We(c),
            onStop: M,
            onStart: x,
            onTerminate: E
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), D(W8, {
            key: 1,
            onToast: T[3] || (T[3] = (P, L) => o("toast", P, L)),
            onNavigate: T[4] || (T[4] = (P) => o("navigate", P)),
            onDeployed: q
          })) : y("", !0),
          _.value === "custom" ? (a(), D(g6, {
            key: 2,
            onToast: T[5] || (T[5] = (P, L) => o("toast", P, L)),
            onDeployed: q
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (a(), D(al, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: K,
        onCancel: T[6] || (T[6] = (P) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      S(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: T[7] || (T[7] = (P) => w.value = !1)
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
      p.value ? (a(), D(T6, {
        key: 1,
        onClose: T[8] || (T[8] = (P) => p.value = !1),
        onSaved: T[9] || (T[9] = (P) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), R6 = /* @__PURE__ */ me(P6, [["__scopeId", "data-v-d4e32a10"]]), M6 = { class: "header-info" }, D6 = { class: "commit-hash" }, L6 = {
  key: 0,
  class: "commit-refs"
}, A6 = { class: "commit-message" }, O6 = { class: "commit-date" }, N6 = {
  key: 0,
  class: "loading"
}, U6 = {
  key: 1,
  class: "changes-section"
}, z6 = { class: "stats-row" }, F6 = { class: "stat" }, B6 = { class: "stat insertions" }, V6 = { class: "stat deletions" }, W6 = {
  key: 0,
  class: "change-group"
}, G6 = {
  key: 1,
  class: "change-group"
}, j6 = {
  key: 0,
  class: "version"
}, H6 = {
  key: 2,
  class: "change-group"
}, K6 = { class: "change-item" }, q6 = /* @__PURE__ */ de({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = et(), n = k(null), l = k(!0), i = N(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = N(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Je(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), D(ut, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", M6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", D6, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", L6, [
              (a(!0), r(H, null, pe(n.value.refs, (p) => (a(), r("span", {
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
          t("div", A6, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", O6, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", N6, "Loading details...")) : n.value ? (a(), r("div", U6, [
            t("div", z6, [
              t("span", F6, f(n.value.stats.files_changed) + " files", 1),
              t("span", B6, "+" + f(n.value.stats.insertions), 1),
              t("span", V6, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", W6, [
              S(Go, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(H, null, pe(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(H, null, pe(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(H, null, pe(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", G6, [
              S(Go, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(H, null, pe(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", j6, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(H, null, pe(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", H6, [
              S(Go, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", K6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
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
}), Y6 = /* @__PURE__ */ me(q6, [["__scopeId", "data-v-d256ff6d"]]), J6 = { class: "base-textarea-wrapper" }, Q6 = ["value", "rows", "placeholder", "disabled", "maxlength"], X6 = {
  key: 0,
  class: "base-textarea-count"
}, Z6 = /* @__PURE__ */ de({
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
    return (i, c) => (a(), r("div", J6, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Kt(at((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Kt(at((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Kt(l, ["enter"])
        ]
      }, null, 40, Q6),
      e.showCharCount && e.maxLength ? (a(), r("div", X6, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ti = /* @__PURE__ */ me(Z6, [["__scopeId", "data-v-c6d16c93"]]), eI = ["checked", "disabled"], tI = { class: "base-checkbox-box" }, sI = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, oI = {
  key: 0,
  class: "base-checkbox-label"
}, nI = /* @__PURE__ */ de({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: Ie(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, eI),
      t("span", tI, [
        e.modelValue ? (a(), r("svg", sI, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", oI, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), La = /* @__PURE__ */ me(nI, [["__scopeId", "data-v-bf17c831"]]), aI = { class: "popover-header" }, lI = { class: "popover-body" }, iI = {
  key: 0,
  class: "changes-summary"
}, rI = {
  key: 0,
  class: "change-item"
}, cI = {
  key: 1,
  class: "change-item"
}, uI = {
  key: 2,
  class: "change-item"
}, dI = {
  key: 3,
  class: "change-item"
}, fI = {
  key: 4,
  class: "change-item"
}, mI = {
  key: 5,
  class: "change-item"
}, vI = {
  key: 1,
  class: "no-changes"
}, pI = {
  key: 2,
  class: "loading"
}, gI = {
  key: 3,
  class: "issues-error"
}, hI = { class: "error-header" }, yI = { class: "error-title" }, wI = { class: "issues-list" }, _I = { class: "workflow-state" }, kI = { class: "message-section" }, bI = { class: "popover-footer" }, $I = {
  key: 1,
  class: "commit-popover"
}, CI = { class: "popover-header" }, xI = { class: "popover-body" }, SI = {
  key: 0,
  class: "changes-summary"
}, II = {
  key: 0,
  class: "change-item"
}, EI = {
  key: 1,
  class: "change-item"
}, TI = {
  key: 2,
  class: "change-item"
}, PI = {
  key: 3,
  class: "change-item"
}, RI = {
  key: 4,
  class: "change-item"
}, MI = {
  key: 5,
  class: "change-item"
}, DI = {
  key: 1,
  class: "no-changes"
}, LI = {
  key: 2,
  class: "loading"
}, AI = {
  key: 3,
  class: "issues-error"
}, OI = { class: "error-header" }, NI = { class: "error-title" }, UI = { class: "issues-list" }, zI = { class: "workflow-state" }, FI = { class: "message-section" }, BI = { class: "popover-footer" }, VI = /* @__PURE__ */ de({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = et(), i = k(""), c = k(!1), u = k(!1), d = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = N(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = N(() => v.value.length > 0), w = N(() => g.value && !u.value);
    async function p() {
      var _, C, b, I;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const M = await l(i.value.trim(), u.value);
          if (M.status === "success") {
            const x = `Committed: ${((_ = M.summary) == null ? void 0 : _.new) || 0} new, ${((C = M.summary) == null ? void 0 : C.modified) || 0} modified, ${((b = M.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            n("committed", { success: !0, message: x });
          } else if (M.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (M.status === "blocked") {
            const x = ((I = M.issues) == null ? void 0 : I.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${x}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: M.message || "Commit failed" });
        } catch (M) {
          n("committed", { success: !1, message: M instanceof Error ? M.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (a(), D(_t, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (b) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = at(() => {
          }, ["stop"]))
        }, [
          t("div", aI, [
            C[11] || (C[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (b) => n("close"))
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
          t("div", lI, [
            e.status && d.value ? (a(), r("div", iI, [
              e.status.workflows.new.length ? (a(), r("div", rI, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", cI, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", uI, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", dI, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", fI, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", mI, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", vI, " No changes to commit ")) : (a(), r("div", pI, " Loading... ")),
            g.value ? (a(), r("div", gI, [
              t("div", hI, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", yI, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", wI, [
                (a(!0), r(H, null, pe(v.value, (b) => (a(), r("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", _I, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              S(La, {
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
            t("div", kI, [
              S(ti, {
                modelValue: i.value,
                "onUpdate:modelValue": C[2] || (C[2] = (b) => i.value = b),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", bI, [
            S(Re, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (b) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(Re, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || c.value || w.value,
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
    ])) : (a(), r("div", $I, [
      t("div", CI, [
        C[22] || (C[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (b) => n("close"))
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
      t("div", xI, [
        e.status && d.value ? (a(), r("div", SI, [
          e.status.workflows.new.length ? (a(), r("div", II, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", EI, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", TI, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", PI, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", RI, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", MI, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", DI, " No changes to commit ")) : (a(), r("div", LI, " Loading... ")),
        g.value ? (a(), r("div", AI, [
          t("div", OI, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", NI, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", UI, [
            (a(!0), r(H, null, pe(v.value, (b) => (a(), r("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", zI, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          S(La, {
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
        t("div", FI, [
          S(ti, {
            modelValue: i.value,
            "onUpdate:modelValue": C[8] || (C[8] = (b) => i.value = b),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", BI, [
        S(Re, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (b) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(Re, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || c.value || w.value,
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
}), Wr = /* @__PURE__ */ me(VI, [["__scopeId", "data-v-5f897631"]]), WI = { class: "modal-header" }, GI = { class: "modal-body" }, jI = { class: "switch-message" }, HI = { class: "switch-details" }, KI = { class: "modal-actions" }, qI = /* @__PURE__ */ de({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(_t, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = at(() => {
          }, ["stop"]))
        }, [
          t("div", WI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", GI, [
            t("p", jI, [
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
            t("p", HI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", KI, [
            S(ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ce, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
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
}), YI = /* @__PURE__ */ me(qI, [["__scopeId", "data-v-e9c5253e"]]), JI = {
  key: 0,
  class: "modal-overlay"
}, QI = { class: "modal-content" }, XI = { class: "modal-body" }, ZI = { class: "progress-info" }, eE = { class: "progress-percentage" }, tE = { class: "progress-state" }, sE = { class: "switch-steps" }, oE = { class: "step-icon" }, nE = { class: "step-label" }, aE = /* @__PURE__ */ de({
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
      ], c = i.findIndex((u) => u.state === s.state);
      return i.map((u, d) => {
        let m = "pending", v = "○";
        return d < c ? (m = "completed", v = "✓") : d === c && (m = "active", v = "⟳"), {
          ...u,
          status: m,
          icon: v
        };
      });
    });
    return (i, c) => (a(), D(_t, { to: "body" }, [
      e.show ? (a(), r("div", JI, [
        t("div", QI, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", XI, [
            S(ta, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", ZI, [
              t("div", eE, f(e.progress) + "%", 1),
              t("div", tE, f(o.value), 1)
            ]),
            t("div", sE, [
              (a(!0), r(H, null, pe(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Ie(["switch-step", u.status])
              }, [
                t("span", oE, f(u.icon), 1),
                t("span", nE, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), lE = /* @__PURE__ */ me(aE, [["__scopeId", "data-v-768a5078"]]), iE = { class: "modal-header" }, rE = { class: "modal-body" }, cE = {
  key: 0,
  class: "node-section"
}, uE = { class: "node-list" }, dE = {
  key: 1,
  class: "node-section"
}, fE = { class: "node-list" }, mE = { class: "modal-actions" }, vE = /* @__PURE__ */ de({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(_t, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = at(() => {
          }, ["stop"]))
        }, [
          t("div", iE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", rE, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", cE, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", uE, [
                (a(!0), r(H, null, pe(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", dE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", fE, [
                (a(!0), r(H, null, pe(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", mE, [
            S(ce, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ce, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => s.$emit("confirm"))
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
}), pE = /* @__PURE__ */ me(vE, [["__scopeId", "data-v-7cad7518"]]), gE = [
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
], hE = "v0.0.17", yE = "Akatz", wE = { class: "social-buttons" }, _E = ["title", "aria-label", "onClick"], kE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, bE = ["d"], $E = ["title", "aria-label", "onClick"], CE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, xE = ["d"], SE = /* @__PURE__ */ de({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", wE, [
      (a(!0), r(H, null, pe(We(gE), (l) => (a(), r(H, {
        key: l.id
      }, [
        l.label ? (a(), r("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          $(f(l.label) + " ", 1),
          (a(), r("svg", kE, [
            t("path", {
              d: l.iconPath
            }, null, 8, bE)
          ]))
        ], 8, _E)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", CE, [
            t("path", {
              d: l.iconPath
            }, null, 8, xE)
          ]))
        ], 8, $E))
      ], 64))), 128))
    ]));
  }
}), Gr = /* @__PURE__ */ me(SE, [["__scopeId", "data-v-4f846342"]]), IE = { class: "footer-info" }, EE = { class: "version" }, TE = { class: "made-by" }, PE = /* @__PURE__ */ de({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", IE, [
      t("span", EE, f(We(hE)), 1),
      t("span", TE, [
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
        $(" by " + f(We(yE)), 1)
      ])
    ]));
  }
}), jr = /* @__PURE__ */ me(PE, [["__scopeId", "data-v-8bc3db0a"]]), RE = /* @__PURE__ */ de({
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
    return (i, c) => (a(), D(ut, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        S(Rr, {
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
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Re, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => i.$emit("close"))
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
}), ME = /* @__PURE__ */ me(RE, [["__scopeId", "data-v-fac00ae7"]]), DE = { class: "header-actions" }, LE = {
  key: 0,
  class: "wizard-step"
}, AE = { class: "form-field" }, OE = ["placeholder"], NE = {
  key: 0,
  class: "form-error"
}, UE = { class: "form-field form-field--checkbox" }, zE = { class: "form-checkbox" }, FE = {
  key: 0,
  class: "form-field"
}, BE = ["placeholder"], VE = {
  key: 0,
  class: "form-info"
}, WE = {
  key: 1,
  class: "form-suggestion"
}, GE = {
  key: 2,
  class: "form-error"
}, jE = {
  key: 3,
  class: "form-info"
}, HE = {
  key: 1,
  class: "wizard-step"
}, KE = {
  key: 0,
  class: "progress-check-loading"
}, qE = {
  key: 0,
  class: "cli-warning"
}, YE = { class: "cli-warning-header" }, JE = {
  key: 1,
  class: "env-landing"
}, QE = { class: "env-list" }, XE = ["value"], ZE = { class: "env-name" }, eT = {
  key: 2,
  class: "env-create"
}, tT = { class: "form-field" }, sT = { class: "form-field" }, oT = ["value"], nT = { class: "form-field" }, aT = ["disabled"], lT = ["value"], iT = { class: "form-field" }, rT = ["value"], cT = { class: "form-field form-field--checkbox" }, uT = { class: "form-checkbox" }, dT = {
  key: 0,
  class: "form-error"
}, fT = {
  key: 1,
  class: "env-creating"
}, mT = { class: "creating-intro" }, vT = {
  key: 3,
  class: "env-import"
}, pT = { class: "wizard-footer" }, gT = { class: "wizard-footer-actions" }, io = 10, hT = 600 * 1e3, si = 1800 * 1e3, yT = /* @__PURE__ */ de({
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
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: v
    } = et(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), b = k(!1), I = k(!1), M = k(null), x = k(o.initialStep === 2), E = k(o.defaultPath), K = k(!!o.detectedModelsDir), q = k(o.detectedModelsDir || ""), V = k(null), T = k(null), P = k(null), L = k(null), ae = k("my-new-env"), Z = k(Ar), F = k("latest"), G = k(Or), J = k(!0), O = k(null), se = k(null), X = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), he = k(!1), we = k(!1), re = k(!1), ve = k({ progress: 0, message: "" }), Se = k({ progress: 0, message: "" }), Fe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ze = k(0), Te = k(null), Pe = k(0), ke = k(null), ge = N(() => {
      var Ce, be;
      const oe = (Ce = E.value) == null ? void 0 : Ce.trim(), Q = !V.value, Ae = !K.value || !T.value && ((be = q.value) == null ? void 0 : be.trim());
      return oe && Q && Ae;
    }), De = N(() => {
      var oe;
      return (oe = ae.value) == null ? void 0 : oe.trim();
    }), Me = N(() => !!(g.value === 2 || se.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), A = N(() => se.value || o.workspacePath || null);
    async function R() {
      var oe;
      if (V.value = null, !!((oe = E.value) != null && oe.trim()))
        try {
          const Q = await c({ path: E.value, type: "workspace" });
          Q.valid || (V.value = Q.error || "Invalid path");
        } catch (Q) {
          V.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function z() {
      var oe;
      if (T.value = null, P.value = null, L.value = null, !!((oe = q.value) != null && oe.trim()))
        try {
          const Q = await c({ path: q.value, type: "models" });
          if (Q.valid)
            L.value = Q.model_count ?? null;
          else if (T.value = Q.error || "Invalid path", Q.suggestion) {
            P.value = Q.suggestion, q.value = Q.suggestion, T.value = null;
            const Ae = await c({ path: Q.suggestion, type: "models" });
            Ae.valid && (L.value = Ae.model_count ?? null);
          }
        } catch (Q) {
          T.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function W() {
      var oe, Q, Ae, Ce, be;
      if (V.value = null, T.value = null, await R(), (oe = V.value) != null && oe.includes("already exists")) {
        V.value = null, se.value = ((Q = E.value) == null ? void 0 : Q.trim()) || o.defaultPath, g.value = 2, ie();
        return;
      }
      if (!V.value && !(K.value && ((Ae = q.value) != null && Ae.trim()) && (await z(), T.value))) {
        we.value = !0;
        try {
          await l({
            workspace_path: ((Ce = E.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: K.value && ((be = q.value) == null ? void 0 : be.trim()) || null
          }), ze.value = 0, Te.value = Date.now();
          const j = setInterval(async () => {
            var B;
            if (Te.value && Date.now() - Te.value > hT) {
              clearInterval(j), we.value = !1, V.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ue = await i();
              if (ze.value = 0, ue.state === "idle" && we.value) {
                clearInterval(j), we.value = !1, V.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ve.value = { progress: ue.progress, message: ue.message }, ue.state === "complete" ? (clearInterval(j), we.value = !1, se.value = ((B = E.value) == null ? void 0 : B.trim()) || o.defaultPath, g.value = 2, ie()) : ue.state === "error" && (clearInterval(j), we.value = !1, V.value = ue.error || "Workspace creation failed");
            } catch (ue) {
              ze.value++, console.warn(`Polling failure ${ze.value}/${io}:`, ue), ze.value >= io && (clearInterval(j), we.value = !1, V.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (j) {
          we.value = !1, V.value = j instanceof Error ? j.message : "Failed to create workspace";
        }
      }
    }
    async function ee() {
      re.value = !0, O.value = null;
      try {
        const oe = {
          name: ae.value.trim() || "my-new-env",
          python_version: Z.value,
          comfyui_version: F.value,
          torch_backend: G.value,
          switch_after: J.value,
          workspace_path: se.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(oe)).status === "started") {
          Pe.value = 0, ke.value = Date.now();
          const Ae = setInterval(async () => {
            if (ke.value && Date.now() - ke.value > si) {
              clearInterval(Ae), re.value = !1, O.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (Pe.value = 0, Ce.state === "idle" && re.value) {
                clearInterval(Ae), re.value = !1, O.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Se.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(Ae), re.value = !1;
                const be = Ce.environment_name || oe.name;
                J.value ? n("complete", be, se.value) : (p.value = "landing", n("environment-created-no-switch", be));
              } else Ce.state === "error" && (clearInterval(Ae), re.value = !1, O.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              Pe.value++, console.warn(`Polling failure ${Pe.value}/${io}:`, Ce), Pe.value >= io && (clearInterval(Ae), re.value = !1, O.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        re.value = !1, O.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function ie() {
      he.value = !0;
      try {
        X.value = await v();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        he.value = !1;
      }
    }
    function ye() {
      w.value && n("switch-environment", w.value, se.value);
    }
    function $e() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function ne(oe, Q) {
      C.value = !1, Q ? n("complete", oe, se.value) : (n("environment-created-no-switch", oe), p.value = "landing");
    }
    function fe() {
    }
    Je(async () => {
      if (o.detectedModelsDir && (q.value = o.detectedModelsDir), o.workspacePath && (se.value = o.workspacePath), g.value === 2) {
        ie();
        const oe = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await Le(), clearTimeout(oe), x.value = !1;
      }
    });
    async function Le() {
      try {
        const oe = await d();
        if (console.log("[ComfyGit] Create progress check:", oe.state, oe), oe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", oe.environment_name), p.value = "create", re.value = !0, ae.value = oe.environment_name || "my-new-env", Se.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase
          }, Ee();
          return;
        }
      } catch (oe) {
        console.log("[ComfyGit] Create progress check failed:", oe);
      }
      try {
        const oe = await m();
        console.log("[ComfyGit] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", oe.environment_name), M.value = {
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          progress: oe.progress ?? 0,
          environmentName: oe.environment_name || ""
        }, I.value = !0, p.value = "import", C.value = !0);
      } catch (oe) {
        console.log("[ComfyGit] Import progress check failed:", oe);
      }
    }
    async function Ee() {
      Pe.value = 0, ke.value = Date.now();
      let oe = null;
      const Q = async () => {
        if (ke.value && Date.now() - ke.value > si)
          return oe && clearInterval(oe), re.value = !1, O.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (Pe.value = 0, Ce.state === "idle" && re.value)
            return oe && clearInterval(oe), re.value = !1, O.value = "Environment creation was interrupted. Please try again.", !1;
          if (Se.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            oe && clearInterval(oe), re.value = !1;
            const be = Ce.environment_name || ae.value;
            return n("complete", be, se.value), !1;
          } else if (Ce.state === "error")
            return oe && clearInterval(oe), re.value = !1, O.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return Pe.value++, console.warn(`Polling failure ${Pe.value}/${io}:`, Ce), Pe.value >= io ? (oe && clearInterval(oe), re.value = !1, O.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (oe = setInterval(async () => {
        !await Q() && oe && clearInterval(oe);
      }, 2e3));
    }
    return (oe, Q) => (a(), r(H, null, [
      S(ut, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (Ae) => oe.$emit("close"))
      }, {
        header: h(() => [
          Q[20] || (Q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", DE, [
            S(Gr),
            Q[19] || (Q[19] = t("span", { class: "header-divider" }, null, -1)),
            Me.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (Ae) => _.value = !0)
            }, [...Q[17] || (Q[17] = [
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
              onClick: Q[1] || (Q[1] = (Ae) => oe.$emit("close")),
              title: "Close"
            }, [...Q[18] || (Q[18] = [
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
            g.value === 1 ? (a(), r("div", LE, [
              Q[24] || (Q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", AE, [
                Q[21] || (Q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (Ce) => E.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, OE), [
                  [zt, E.value]
                ]),
                V.value ? (a(), r("p", NE, f(V.value), 1)) : y("", !0)
              ]),
              t("div", UE, [
                t("label", zE, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (Ce) => K.value = Ce)
                  }, null, 512), [
                    [en, K.value]
                  ]),
                  Q[22] || (Q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              K.value ? (a(), r("div", FE, [
                Q[23] || (Q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (Ce) => q.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, BE), [
                  [zt, q.value]
                ]),
                e.detectedModelsDir && !q.value ? (a(), r("p", VE, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                P.value ? (a(), r("p", WE, " Did you mean: " + f(P.value), 1)) : y("", !0),
                T.value ? (a(), r("p", GE, f(T.value), 1)) : y("", !0),
                L.value !== null && !T.value ? (a(), r("p", jE, " Found " + f(L.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              we.value ? (a(), D(Fn, {
                key: 1,
                progress: ve.value.progress,
                message: ve.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", HE, [
              x.value ? (a(), r("div", KE, [...Q[25] || (Q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(H, { key: 1 }, [
                !o.cliInstalled && !b.value ? (a(), r("div", qE, [
                  t("div", YE, [
                    Q[27] || (Q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (Ce) => b.value = !0),
                      title: "Dismiss"
                    }, [...Q[26] || (Q[26] = [
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
                  Q[29] || (Q[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Q[30] || (Q[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), r("div", JE, [
                  Q[34] || (Q[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (Ce) => p.value = "create")
                  }, [...Q[31] || (Q[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: Q[7] || (Q[7] = (Ce) => {
                      I.value = !1, p.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ae = o.existingEnvironments) != null && Ae.length ? (a(), r(H, { key: 0 }, [
                    Q[33] || (Q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", QE, [
                      (a(!0), r(H, null, pe(o.existingEnvironments, (Ce) => (a(), r("label", {
                        key: Ce,
                        class: Ie(["env-option", { selected: w.value === Ce }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (be) => w.value = be)
                        }, null, 8, XE), [
                          [Zt, w.value]
                        ]),
                        t("span", ZE, f(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", eT, [
                  re.value ? (a(), r("div", fT, [
                    t("p", mT, [
                      Q[41] || (Q[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(ae.value), 1),
                      Q[42] || (Q[42] = $("... ", -1))
                    ]),
                    S(Fn, {
                      progress: Se.value.progress,
                      message: Se.value.message,
                      "current-phase": Se.value.phase,
                      "show-steps": !0,
                      steps: Fe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(H, { key: 0 }, [
                    Q[40] || (Q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", tT, [
                      Q[35] || (Q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (Ce) => ae.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, ae.value]
                      ])
                    ]),
                    t("div", sT, [
                      Q[36] || (Q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (Ce) => Z.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), r(H, null, pe(We(Lr), (Ce) => (a(), r("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce), 9, oT))), 128))
                      ], 512), [
                        [hs, Z.value]
                      ])
                    ]),
                    t("div", nT, [
                      Q[37] || (Q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (Ce) => F.value = Ce),
                        class: "form-select",
                        disabled: he.value
                      }, [
                        (a(!0), r(H, null, pe(X.value, (Ce) => (a(), r("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, f(Ce.name), 9, lT))), 128))
                      ], 8, aT), [
                        [hs, F.value]
                      ])
                    ]),
                    t("div", iT, [
                      Q[38] || (Q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (Ce) => G.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), r(H, null, pe(We(ll), (Ce) => (a(), r("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce) + f(Ce === "auto" ? " (detect GPU)" : ""), 9, rT))), 128))
                      ], 512), [
                        [hs, G.value]
                      ])
                    ]),
                    t("div", cT, [
                      t("label", uT, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (Ce) => J.value = Ce)
                        }, null, 512), [
                          [en, J.value]
                        ]),
                        Q[39] || (Q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    O.value ? (a(), r("div", dT, f(O.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", vT, [
                  S(zr, {
                    "workspace-path": se.value,
                    "resume-import": I.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: ne,
                    onImportStarted: Q[14] || (Q[14] = (Ce) => C.value = !0),
                    onSourceCleared: fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", pT, [
            S(jr),
            t("div", gT, [
              g.value === 1 ? (a(), D(Re, {
                key: 0,
                variant: "primary",
                disabled: !ge.value || we.value,
                onClick: W
              }, {
                default: h(() => [
                  $(f(we.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(H, { key: 1 }, [
                !re.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !se.value) ? (a(), D(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: $e
                }, {
                  default: h(() => [...Q[44] || (Q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), D(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !De.value || re.value,
                  onClick: ee
                }, {
                  default: h(() => [
                    $(f(re.value ? "Creating..." : J.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), D(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: ye
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
      _.value ? (a(), D(ME, {
        key: 0,
        "workspace-path": A.value,
        onClose: Q[16] || (Q[16] = (Ae) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), wT = /* @__PURE__ */ me(yT, [["__scopeId", "data-v-9a9aadc0"]]), _T = { class: "comfygit-panel" }, kT = { class: "panel-header" }, bT = { class: "header-left" }, $T = {
  key: 0,
  class: "header-info"
}, CT = { class: "header-actions" }, xT = { class: "env-switcher" }, ST = {
  key: 0,
  class: "header-info"
}, IT = { class: "branch-name" }, ET = { class: "panel-main" }, TT = { class: "sidebar" }, PT = { class: "sidebar-content" }, RT = { class: "sidebar-section" }, MT = { class: "sidebar-section" }, DT = { class: "sidebar-section" }, LT = {
  key: 0,
  class: "sidebar-badge"
}, AT = { class: "sidebar-footer" }, OT = { class: "content-area" }, NT = {
  key: 0,
  class: "error-message"
}, UT = {
  key: 1,
  class: "loading"
}, zT = { class: "dialog-content env-selector-dialog" }, FT = { class: "dialog-header" }, BT = { class: "dialog-body" }, VT = { class: "env-list" }, WT = { class: "env-info" }, GT = { class: "env-name-row" }, jT = { class: "env-indicator" }, HT = { class: "env-name" }, KT = {
  key: 0,
  class: "env-branch"
}, qT = {
  key: 1,
  class: "current-label"
}, YT = { class: "env-stats" }, JT = ["onClick"], QT = { class: "toast-container" }, XT = { class: "toast-message" }, ZT = /* @__PURE__ */ de({
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
      getSetupStatus: I
    } = et(), M = Xv(), { liveInstanceCount: x } = Fr({ autoStart: !0 }), E = k(null), K = k([]), q = k([]), V = k([]), T = N(() => V.value.find((le) => le.is_current)), P = k(null), L = k(!1), ae = k(1), Z = N(() => {
      var le;
      return ((le = P.value) == null ? void 0 : le.state) || "managed";
    }), F = k(!1), G = k(null), J = k(null), O = k(!1), se = k(null), X = k(null), he = k(null), we = k(!1), re = k(!1), ve = k(""), Se = k(null), Fe = k({ state: "idle", progress: 0, message: "" });
    let ze = null, Te = null;
    const Pe = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ke = o.initialView ? Pe[o.initialView] : null, ge = k((ke == null ? void 0 : ke.view) ?? "status"), De = k((ke == null ? void 0 : ke.section) ?? "this-env");
    function Me(le, Y) {
      ge.value = le, De.value = Y;
    }
    function A(le) {
      const Oe = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[le];
      Oe && Me(Oe.view, Oe.section);
    }
    function R() {
      Me("branches", "this-env");
    }
    function z() {
      n("close"), setTimeout(() => {
        var Y;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Oe of le)
          if (((Y = Oe.textContent) == null ? void 0 : Y.trim()) === "Manager") {
            Oe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const W = k(null), ee = k(!1), ie = k(!1), ye = k([]);
    let $e = 0;
    function ne(le, Y = "info", Oe = 3e3) {
      const je = ++$e;
      return ye.value.push({ id: je, message: le, type: Y }), Oe > 0 && setTimeout(() => {
        ye.value = ye.value.filter((ot) => ot.id !== je);
      }, Oe), je;
    }
    function fe(le) {
      ye.value = ye.value.filter((Y) => Y.id !== le);
    }
    function Le(le, Y) {
      ne(le, Y);
    }
    const Ee = N(() => {
      if (!E.value) return "neutral";
      const le = E.value.workflows, Y = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? Y ? "warning" : "success" : "error";
    });
    N(() => E.value ? Ee.value === "success" ? "All synced" : Ee.value === "warning" ? "Uncommitted changes" : Ee.value === "error" ? "Not synced" : "" : "");
    async function oe() {
      F.value = !0, G.value = null;
      try {
        const [le, Y, Oe, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        E.value = le, K.value = Y.commits, q.value = Oe.branches, V.value = je, n("statusUpdate", le), se.value && await se.value.loadWorkflows(!0);
      } catch (le) {
        G.value = le instanceof Error ? le.message : "Failed to load status", E.value = null, K.value = [], q.value = [];
      } finally {
        F.value = !1;
      }
    }
    function Q(le) {
      J.value = le;
    }
    async function Ae(le) {
      var Oe;
      J.value = null;
      const Y = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      W.value = {
        title: Y ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: Y ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Oe = le.hash) == null ? void 0 : Oe.slice(0, 7))}?`,
        details: Y ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: Y ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: Y,
        onConfirm: async () => {
          var mt;
          W.value = null, ue();
          const je = ne(`Checking out ${le.short_hash || ((mt = le.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await u(le.hash, Y);
          fe(je), ot.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function Ce(le) {
      const Y = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      W.value = {
        title: Y ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: Y ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: Y ? is() : void 0,
        warning: Y ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: Y ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          W.value = null, ue();
          const Oe = ne(`Switching to ${le}...`, "info", 0), je = await m(le, Y);
          fe(Oe), je.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function be(le) {
      const Y = ne(`Creating branch ${le}...`, "info", 0), Oe = await d(le);
      fe(Y), Oe.status === "success" ? (ne(`Branch "${le}" created`, "success"), await oe()) : ne(Oe.message || "Failed to create branch", "error");
    }
    async function j(le, Y = !1) {
      const Oe = async (je) => {
        var mt;
        const ot = ne(`Deleting branch ${le}...`, "info", 0);
        try {
          const Dt = await v(le, je);
          fe(ot), Dt.status === "success" ? (ne(`Branch "${le}" deleted`, "success"), await oe()) : (mt = Dt.message) != null && mt.includes("not fully merged") ? W.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              W.value = null, await Oe(!0);
            }
          } : ne(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          fe(ot);
          const rs = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? W.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              W.value = null, await Oe(!0);
            }
          } : ne(rs, "error");
        }
      };
      W.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          W.value = null, await Oe(Y);
        }
      };
    }
    async function B(le) {
      J.value = null;
      const Y = prompt("Enter branch name:");
      if (Y) {
        const Oe = ne(`Creating branch ${Y}...`, "info", 0), je = await d(Y, le.hash);
        fe(Oe), je.status === "success" ? (ne(`Branch "${Y}" created from ${le.short_hash}`, "success"), await oe()) : ne(je.message || "Failed to create branch", "error");
      }
    }
    function ue() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      W.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          W.value = null, ue(), ne("Restarting environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Xe() {
      W.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          W.value = null, ne("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(le, Y) {
      O.value = !1, ve.value = le, Se.value = Y || null, we.value = !0;
    }
    async function lt() {
      we.value = !1, re.value = !0, ue(), Fe.value = {
        progress: 10,
        state: dt(10),
        message: Mt(10)
      };
      try {
        await w(ve.value, Se.value || void 0), Bt(), Gs();
      } catch (le) {
        Yt(), re.value = !1, ne(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), Fe.value = { state: "idle", progress: 0, message: "" }, Se.value = null;
      }
    }
    function dt(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function Mt(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[dt(le)] || "";
    }
    function Bt() {
      if (Te) return;
      let le = 10;
      const Y = 60, Oe = 5e3, je = 100, ot = (Y - le) / (Oe / je);
      Te = window.setInterval(() => {
        if (le += ot, le >= Y && (le = Y, Yt()), Fe.value.progress < Y) {
          const mt = Math.floor(le);
          Fe.value = {
            progress: mt,
            state: dt(mt),
            message: Mt(mt)
          };
        }
      }, je);
    }
    function Yt() {
      Te && (clearInterval(Te), Te = null);
    }
    function Gs() {
      ze || (ze = window.setInterval(async () => {
        try {
          let le = await M.getStatus();
          if ((!le || le.state === "idle") && (le = await p()), !le)
            return;
          const Y = le.progress || 0;
          Y >= 60 && Yt();
          const Oe = Math.max(Y, Fe.value.progress), je = le.state && le.state !== "idle" && le.state !== "unknown", ot = je ? le.state : dt(Oe), mt = je && le.message || Mt(Oe);
          Fe.value = {
            state: ot,
            progress: Oe,
            message: mt
          }, le.state === "complete" ? (Yt(), Ms(), re.value = !1, ne(`✓ Switched to ${ve.value}`, "success"), await oe(), ve.value = "") : le.state === "rolled_back" ? (Yt(), Ms(), re.value = !1, ne("Switch failed, restored previous environment", "warning"), ve.value = "") : le.state === "critical_failure" && (Yt(), Ms(), re.value = !1, ne(`Critical error during switch: ${le.message}`, "error"), ve.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function Ms() {
      Yt(), ze && (clearInterval(ze), ze = null);
    }
    function no() {
      var le;
      we.value = !1, ve.value = "", (le = P.value) != null && le.state && P.value.state !== "managed" && (ae.value = P.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function Co(le) {
      ee.value = !1, await oe(), ne(le.message, le.success ? "success" : "error");
    }
    async function xo() {
      ie.value = !1;
      const le = ne("Syncing environment...", "info", 0);
      try {
        const Y = await C("skip", !0);
        if (fe(le), Y.status === "success") {
          const Oe = [];
          Y.nodes_installed.length && Oe.push(`${Y.nodes_installed.length} installed`), Y.nodes_removed.length && Oe.push(`${Y.nodes_removed.length} removed`);
          const je = Oe.length ? `: ${Oe.join(", ")}` : "";
          ne(`✓ Environment synced${je}`, "success"), await oe();
        } else {
          const Oe = Y.errors.length ? Y.errors.join("; ") : Y.message;
          ne(`Sync failed: ${Oe}`, "error");
        }
      } catch (Y) {
        fe(le), ne(`Sync error: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
      }
    }
    async function So(le) {
      var Y;
      try {
        const Oe = await b(le);
        Oe.failed.length === 0 ? ne(`✓ Repaired ${Oe.success} workflow${Oe.success === 1 ? "" : "s"}`, "success") : ne(`Repaired ${Oe.success}, failed: ${Oe.failed.length}`, "warning"), await oe();
      } catch (Oe) {
        ne(`Repair failed: ${Oe instanceof Error ? Oe.message : "Unknown error"}`, "error");
      } finally {
        (Y = he.value) == null || Y.resetRepairingState();
      }
    }
    async function xe() {
      var Y, Oe;
      const le = ne("Repairing environment...", "info", 0);
      try {
        const je = await C("skip", !0);
        if (fe(le), je.status === "success") {
          const ot = [];
          je.nodes_installed.length && ot.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && ot.push(`${je.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          ne(`✓ Environment repaired${mt}`, "success"), (Y = he.value) == null || Y.closeDetailModal(), await oe();
        } else {
          const ot = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          ne(`Repair failed: ${ot}`, "error");
        }
      } catch (je) {
        fe(le), ne(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Oe = he.value) == null || Oe.resetRepairingEnvironmentState();
      }
    }
    async function te(le, Y) {
      ne(`Environment '${le}' created`, "success"), await oe(), X.value && await X.value.loadEnvironments(), Y && await vt(le);
    }
    async function He(le) {
      var Y;
      if (((Y = T.value) == null ? void 0 : Y.name) === le) {
        ne("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      W.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          W.value = null;
          try {
            const Oe = await _(le);
            Oe.status === "success" ? (ne(`Environment "${le}" deleted`, "success"), await oe(), X.value && await X.value.loadEnvironments()) : ne(Oe.message || "Failed to delete environment", "error");
          } catch (Oe) {
            ne(`Error deleting environment: ${Oe instanceof Error ? Oe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(le, Y) {
      L.value = !1;
      try {
        P.value = await I();
      } catch {
      }
      await vt(le, Y);
    }
    function Jt() {
      L.value = !1, n("close");
    }
    async function ys(le, Y) {
      await vt(le, Y);
    }
    async function ws(le) {
      await oe(), await vt(le);
    }
    async function ls(le) {
      P.value = await I(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function Ne() {
      Me("environments", "all-envs"), setTimeout(() => {
        var le;
        (le = X.value) == null || le.openCreateModal();
      }, 100);
    }
    function is() {
      if (!E.value) return [];
      const le = [], Y = E.value.workflows;
      return Y.new.length && le.push(`${Y.new.length} new workflow(s)`), Y.modified.length && le.push(`${Y.modified.length} modified workflow(s)`), Y.deleted.length && le.push(`${Y.deleted.length} deleted workflow(s)`), le;
    }
    return Je(async () => {
      try {
        if (P.value = await I(), P.value.state === "no_workspace") {
          L.value = !0, ae.value = 1;
          return;
        }
        if (P.value.state === "empty_workspace") {
          L.value = !0, ae.value = 2;
          return;
        }
        if (P.value.state === "unmanaged") {
          L.value = !0, ae.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await oe();
    }), (le, Y) => {
      var Oe, je, ot, mt, Dt, rs, js, Hs, ln, rn, cn, un, dn;
      return a(), r("div", _T, [
        t("div", kT, [
          t("div", bT, [
            Y[31] || (Y[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (a(), r("div", $T)) : y("", !0)
          ]),
          t("div", CT, [
            S(Gr),
            Y[34] || (Y[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ie(["icon-btn", { spinning: F.value }]),
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
              onClick: Y[0] || (Y[0] = (U) => n("close")),
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
        t("div", xT, [
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
                onClick: Xe
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: Y[1] || (Y[1] = (U) => Me("environments", "all-envs"))
          }, [
            E.value ? (a(), r("div", ST, [
              t("span", null, f(((Oe = T.value) == null ? void 0 : Oe.name) || ((je = E.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", IT, "(" + f(E.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            Y[36] || (Y[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", ET, [
          t("div", TT, [
            t("div", PT, [
              t("div", RT, [
                Y[37] || (Y[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "status" && De.value === "this-env" }]),
                  onClick: Y[2] || (Y[2] = (U) => Me("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "workflows" }]),
                  onClick: Y[3] || (Y[3] = (U) => Me("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "models-env" }]),
                  onClick: Y[4] || (Y[4] = (U) => Me("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "branches" }]),
                  onClick: Y[5] || (Y[5] = (U) => Me("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "history" }]),
                  onClick: Y[6] || (Y[6] = (U) => Me("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "nodes" }]),
                  onClick: Y[7] || (Y[7] = (U) => Me("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "debug-env" }]),
                  onClick: Y[8] || (Y[8] = (U) => Me("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              Y[41] || (Y[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", MT, [
                Y[38] || (Y[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "environments" }]),
                  onClick: Y[9] || (Y[9] = (U) => Me("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "model-index" }]),
                  onClick: Y[10] || (Y[10] = (U) => Me("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "settings" }]),
                  onClick: Y[11] || (Y[11] = (U) => Me("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "debug-workspace" }]),
                  onClick: Y[12] || (Y[12] = (U) => Me("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              Y[42] || (Y[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", DT, [
                Y[40] || (Y[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "deploy" }]),
                  onClick: Y[13] || (Y[13] = (U) => Me("deploy", "sharing"))
                }, [
                  Y[39] || (Y[39] = $(" DEPLOY ", -1)),
                  We(x) > 0 ? (a(), r("span", LT, f(We(x)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "export" }]),
                  onClick: Y[14] || (Y[14] = (U) => Me("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "import" }]),
                  onClick: Y[15] || (Y[15] = (U) => Me("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: ge.value === "remotes" }]),
                  onClick: Y[16] || (Y[16] = (U) => Me("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", AT, [
              S(jr)
            ])
          ]),
          t("div", OT, [
            G.value ? (a(), r("div", NT, f(G.value), 1)) : !E.value && ge.value === "status" ? (a(), r("div", UT, " Loading status... ")) : (a(), r(H, { key: 2 }, [
              ge.value === "status" ? (a(), D(lv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: he,
                status: E.value,
                "setup-state": Z.value,
                onSwitchBranch: R,
                onCommitChanges: Y[17] || (Y[17] = (U) => ee.value = !0),
                onSyncEnvironment: Y[18] || (Y[18] = (U) => ie.value = !0),
                onViewWorkflows: Y[19] || (Y[19] = (U) => Me("workflows", "this-env")),
                onViewHistory: Y[20] || (Y[20] = (U) => Me("history", "this-env")),
                onViewDebug: Y[21] || (Y[21] = (U) => Me("debug-env", "this-env")),
                onViewNodes: Y[22] || (Y[22] = (U) => Me("nodes", "this-env")),
                onRepairMissingModels: So,
                onRepairEnvironment: xe,
                onStartSetup: Y[23] || (Y[23] = (U) => L.value = !0),
                onViewEnvironments: Y[24] || (Y[24] = (U) => Me("environments", "all-envs")),
                onCreateEnvironment: Ne
              }, null, 8, ["status", "setup-state"])) : ge.value === "workflows" ? (a(), D(j0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: se,
                onRefresh: oe
              }, null, 512)) : ge.value === "models-env" ? (a(), D(Iw, {
                key: 2,
                onNavigate: A
              })) : ge.value === "branches" ? (a(), D(Yv, {
                key: 3,
                branches: q.value,
                current: ((ot = E.value) == null ? void 0 : ot.branch) || null,
                onSwitch: Ce,
                onCreate: be,
                onDelete: j
              }, null, 8, ["branches", "current"])) : ge.value === "history" ? (a(), D(Qv, {
                key: 4,
                commits: K.value,
                "current-ref": (mt = E.value) == null ? void 0 : mt.branch,
                onSelect: Q,
                onCheckout: Ae
              }, null, 8, ["commits", "current-ref"])) : ge.value === "nodes" ? (a(), D(Nk, {
                key: 5,
                "version-mismatches": ((rs = (Dt = E.value) == null ? void 0 : Dt.comparison) == null ? void 0 : rs.version_mismatches) || [],
                onOpenNodeManager: z,
                onRepairEnvironment: xe,
                onToast: Le
              }, null, 8, ["version-mismatches"])) : ge.value === "debug-env" ? (a(), D(Q$, { key: 6 })) : ge.value === "environments" ? (a(), D(ex, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: X,
                onSwitch: vt,
                onCreated: te,
                onDelete: He
              }, null, 512)) : ge.value === "model-index" ? (a(), D(ik, {
                key: 8,
                onRefresh: oe
              })) : ge.value === "settings" ? (a(), D(V$, { key: 9 })) : ge.value === "debug-workspace" ? (a(), D(J$, { key: 10 })) : ge.value === "deploy" ? (a(), D(R6, {
                key: 11,
                onToast: Le,
                onNavigate: A
              })) : ge.value === "export" ? (a(), D(Px, { key: 12 })) : ge.value === "import" ? (a(), D($5, {
                key: 13,
                onImportCompleteSwitch: ws
              })) : ge.value === "remotes" ? (a(), D(b$, {
                key: 14,
                onToast: Le
              })) : y("", !0)
            ], 64))
          ])
        ]),
        J.value ? (a(), D(Y6, {
          key: 0,
          commit: J.value,
          onClose: Y[25] || (Y[25] = (U) => J.value = null),
          onCheckout: Ae,
          onCreateBranch: B
        }, null, 8, ["commit"])) : y("", !0),
        W.value ? (a(), D(al, {
          key: 1,
          title: W.value.title,
          message: W.value.message,
          details: W.value.details,
          warning: W.value.warning,
          confirmLabel: W.value.confirmLabel,
          cancelLabel: W.value.cancelLabel,
          secondaryLabel: W.value.secondaryLabel,
          secondaryAction: W.value.secondaryAction,
          destructive: W.value.destructive,
          onConfirm: W.value.onConfirm,
          onCancel: Y[26] || (Y[26] = (U) => W.value = null),
          onSecondary: W.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        S(YI, {
          show: we.value,
          "from-environment": ((js = T.value) == null ? void 0 : js.name) || "unknown",
          "to-environment": ve.value,
          onConfirm: lt,
          onClose: no
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ee.value && E.value ? (a(), D(Wr, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: Y[27] || (Y[27] = (U) => ee.value = !1),
          onCommitted: Co
        }, null, 8, ["status"])) : y("", !0),
        ie.value && E.value ? (a(), D(pE, {
          key: 3,
          show: ie.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: xo,
          onClose: Y[28] || (Y[28] = (U) => ie.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        S(lE, {
          show: re.value,
          state: Fe.value.state,
          progress: Fe.value.progress,
          message: Fe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        O.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: Y[30] || (Y[30] = at((U) => O.value = !1, ["self"]))
        }, [
          t("div", zT, [
            t("div", FT, [
              Y[44] || (Y[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: Y[29] || (Y[29] = (U) => O.value = !1)
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
            t("div", BT, [
              Y[45] || (Y[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", VT, [
                (a(!0), r(H, null, pe(V.value, (U) => (a(), r("div", {
                  key: U.name,
                  class: Ie(["env-item", { current: U.is_current }])
                }, [
                  t("div", WT, [
                    t("div", GT, [
                      t("span", jT, f(U.is_current ? "●" : "○"), 1),
                      t("span", HT, f(U.name), 1),
                      U.current_branch ? (a(), r("span", KT, "(" + f(U.current_branch) + ")", 1)) : y("", !0),
                      U.is_current ? (a(), r("span", qT, "CURRENT")) : y("", !0)
                    ]),
                    t("div", YT, f(U.workflow_count) + " workflows • " + f(U.node_count) + " nodes ", 1)
                  ]),
                  U.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (_e) => vt(U.name)
                  }, " SWITCH ", 8, JT))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        L.value ? (a(), D(wT, {
          key: 5,
          "default-path": ((Hs = P.value) == null ? void 0 : Hs.default_path) || "~/comfygit",
          "detected-models-dir": ((ln = P.value) == null ? void 0 : ln.detected_models_dir) || null,
          "initial-step": ae.value,
          "existing-environments": ((rn = P.value) == null ? void 0 : rn.environments) || [],
          "cli-installed": ((cn = P.value) == null ? void 0 : cn.cli_installed) ?? !0,
          "setup-state": ((un = P.value) == null ? void 0 : un.state) || "no_workspace",
          "workspace-path": ((dn = P.value) == null ? void 0 : dn.workspace_path) || null,
          onComplete: ht,
          onClose: Jt,
          onSwitchEnvironment: ys,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", QT, [
          S(gd, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(H, null, pe(ye.value, (U) => (a(), r("div", {
                key: U.id,
                class: Ie(["toast", U.type])
              }, [
                t("span", XT, f(U.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), e7 = /* @__PURE__ */ me(ZT, [["__scopeId", "data-v-74541ece"]]), t7 = { class: "item-header" }, s7 = { class: "item-info" }, o7 = { class: "filename" }, n7 = { class: "metadata" }, a7 = { class: "size" }, l7 = {
  key: 0,
  class: "type"
}, i7 = { class: "item-actions" }, r7 = {
  key: 0,
  class: "progress-section"
}, c7 = { class: "progress-bar" }, u7 = { class: "progress-stats" }, d7 = { class: "downloaded" }, f7 = { class: "speed" }, m7 = {
  key: 0,
  class: "eta"
}, v7 = {
  key: 1,
  class: "status-msg paused"
}, p7 = {
  key: 2,
  class: "status-msg queued"
}, g7 = {
  key: 3,
  class: "status-msg completed"
}, h7 = {
  key: 4,
  class: "status-msg failed"
}, y7 = {
  key: 0,
  class: "retries"
}, w7 = /* @__PURE__ */ de({
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
    function i(c) {
      if (c < 60) return `${Math.round(c)}s`;
      const u = Math.floor(c / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (c, u) => (a(), r("div", {
      class: Ie(["download-item", `status-${e.item.status}`])
    }, [
      t("div", t7, [
        t("div", s7, [
          t("div", o7, f(e.item.filename), 1),
          t("div", n7, [
            t("span", a7, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", l7, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", i7, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), r("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), r("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), r("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), r("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), r("div", r7, [
        t("div", c7, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", u7, [
          t("span", d7, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", f7, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", m7, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", v7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", p7, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", g7, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", h7, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", y7, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mo = /* @__PURE__ */ me(w7, [["__scopeId", "data-v-2110df65"]]), _7 = { class: "queue-title" }, k7 = { class: "count" }, b7 = { class: "queue-actions" }, $7 = { class: "action-label" }, C7 = {
  key: 0,
  class: "overall-progress"
}, x7 = { class: "progress-bar" }, S7 = {
  key: 0,
  class: "current-mini"
}, I7 = { class: "filename" }, E7 = { class: "speed" }, T7 = {
  key: 1,
  class: "queue-content"
}, P7 = {
  key: 0,
  class: "section"
}, R7 = {
  key: 1,
  class: "section"
}, M7 = { class: "section-header" }, D7 = { class: "section-label paused" }, L7 = { class: "items-list" }, A7 = {
  key: 2,
  class: "section"
}, O7 = { class: "section-header" }, N7 = { class: "section-label" }, U7 = { class: "items-list" }, z7 = {
  key: 3,
  class: "section"
}, F7 = { class: "section-header" }, B7 = { class: "section-label" }, V7 = { class: "items-list" }, W7 = {
  key: 4,
  class: "section"
}, G7 = { class: "section-header" }, j7 = { class: "section-label failed" }, H7 = { class: "items-list" }, K7 = /* @__PURE__ */ de({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = bo(), C = k(!1);
    let b = null;
    gt(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (E, K) => {
        b && (clearTimeout(b), b = null);
        const q = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, V = K && (K.active > 0 || K.paused > 0);
        q && V && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const I = N(() => {
      var q;
      if (s.items.length === 0) return 0;
      const E = l.value.length, K = ((q = o.value) == null ? void 0 : q.progress) || 0;
      return Math.round((E + K / 100) / s.items.length * 100);
    });
    function M(E) {
      m(E);
    }
    function x(E) {
      return E === 0 ? "" : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, K) => (a(), D(_t, { to: "body" }, [
      We(u) ? (a(), r("div", {
        key: 0,
        class: Ie(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (q) => C.value = !C.value)
        }, [
          t("div", _7, [
            K[4] || (K[4] = t("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", k7, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", b7, [
            t("span", $7, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), r("div", T7, [
          We(o) ? (a(), r("div", P7, [
            K[6] || (K[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(Mo, {
              item: We(o),
              onCancel: K[1] || (K[1] = (q) => M(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", R7, [
            t("div", M7, [
              t("span", D7, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...q) => We(w) && We(w)(...q))
              }, "Resume All")
            ]),
            t("div", L7, [
              (a(!0), r(H, null, pe(We(c), (q) => (a(), D(Mo, {
                key: q.id,
                item: q,
                onResume: (V) => We(g)(q.id),
                onRemove: (V) => We(p)(q.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", A7, [
            t("div", O7, [
              t("span", N7, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", U7, [
              (a(!0), r(H, null, pe(We(n), (q) => (a(), D(Mo, {
                key: q.id,
                item: q,
                onCancel: (V) => M(q.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", z7, [
            t("div", F7, [
              t("span", B7, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...q) => We(_) && We(_)(...q))
              }, "Clear")
            ]),
            t("div", V7, [
              (a(!0), r(H, null, pe(We(l).slice(0, 3), (q) => (a(), D(Mo, {
                key: q.id,
                item: q,
                onRemove: (V) => We(p)(q.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", W7, [
            t("div", G7, [
              t("span", j7, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", H7, [
              (a(!0), r(H, null, pe(We(i), (q) => (a(), D(Mo, {
                key: q.id,
                item: q,
                onRetry: (V) => We(v)(q.id),
                onRemove: (V) => We(p)(q.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", C7, [
          t("div", x7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${I.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", S7, [
            t("span", I7, f(We(o).filename), 1),
            t("span", E7, f(x(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), q7 = /* @__PURE__ */ me(K7, [["__scopeId", "data-v-60751cfa"]]), Y7 = { class: "detail-header" }, J7 = { class: "item-count" }, Q7 = { class: "resource-list" }, X7 = { class: "item-info" }, Z7 = { class: "item-name" }, eP = {
  key: 0,
  class: "item-subtitle"
}, tP = {
  key: 0,
  class: "installing-badge"
}, sP = ["title"], oP = {
  key: 2,
  class: "installed-badge"
}, nP = {
  key: 3,
  class: "queued-badge"
}, aP = {
  key: 1,
  class: "no-action"
}, lP = /* @__PURE__ */ de({
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
    const o = e, n = s, l = N(() => o.itemType === "model" ? "Download" : "Install"), i = N(() => o.items.filter((p) => p.canAction)), c = N(() => i.value.length > 0 && i.value.every(
      (p) => {
        var _, C;
        return o.queuedItems.has(p.id) || ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = N(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
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
    return (p, _) => (a(), D(ut, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => n("close"))
    }, {
      body: h(() => [
        t("div", Y7, [
          t("span", J7, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          i.value.length > 1 ? (a(), D(Re, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: c.value,
            onClick: _[0] || (_[0] = (C) => n("bulk-action"))
          }, {
            default: h(() => [
              $(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", Q7, [
          (a(!0), r(H, null, pe(e.items, (C) => (a(), r("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", X7, [
              t("span", Z7, f(C.name), 1),
              C.subtitle ? (a(), r("span", eP, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), r(H, { key: 0 }, [
              m(C) ? (a(), r("span", tP, "Installing...")) : g(C) ? (a(), r("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, sP)) : v(C) ? (a(), r("span", oP, "Installed")) : d(C) ? (a(), r("span", nP, "Queued")) : (a(), D(Re, {
                key: 4,
                size: "sm",
                variant: "secondary",
                onClick: (b) => n("action", C)
              }, {
                default: h(() => [
                  $(f(l.value), 1)
                ]),
                _: 1
              }, 8, ["onClick"]))
            ], 64)) : (a(), r("span", aP, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        S(Re, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => n("close"))
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
}), iP = /* @__PURE__ */ me(lP, [["__scopeId", "data-v-fac0fef0"]]), rP = {
  key: 0,
  class: "loading-state"
}, cP = {
  key: 1,
  class: "analysis-results"
}, uP = {
  key: 0,
  class: "section"
}, dP = { class: "section-header" }, fP = { class: "section-title" }, mP = { class: "item-list" }, vP = { class: "package-info" }, pP = { class: "package-name" }, gP = { class: "node-count" }, hP = {
  key: 1,
  class: "installing-badge"
}, yP = {
  key: 2,
  class: "queued-badge"
}, wP = ["title"], _P = {
  key: 4,
  class: "installed-badge"
}, kP = {
  key: 1,
  class: "section"
}, bP = { class: "section-header" }, $P = { class: "section-title" }, CP = { class: "item-list" }, xP = { class: "node-type" }, SP = {
  key: 0,
  class: "overflow-note"
}, IP = {
  key: 2,
  class: "section"
}, EP = { class: "section-header" }, TP = { class: "section-title" }, PP = { class: "item-list" }, RP = { class: "model-info" }, MP = { class: "model-name" }, DP = {
  key: 1,
  class: "queued-badge"
}, LP = {
  key: 1,
  class: "no-url"
}, AP = { class: "dont-show-again" }, OP = /* @__PURE__ */ de({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), { addToQueue: C } = bo(), { queueNodeInstall: b } = et(), I = N(() => M.value.length > 0 || E.value.length > 0 || K.value.length > 0), M = N(() => {
      var W, ee;
      if (!((W = n.value) != null && W.nodes)) return [];
      const R = /* @__PURE__ */ new Map(), z = (n.value.nodes.resolved || []).filter((ie) => {
        var ye;
        return !ie.is_installed && ((ye = ie.package) == null ? void 0 : ye.package_id);
      });
      for (const ie of z) {
        const ye = ie.package.package_id;
        R.has(ye) || R.set(ye, {
          package_id: ye,
          title: ie.package.title || ye,
          node_count: 0,
          node_types: [],
          repository: ie.package.repository || null,
          latest_version: ie.package.latest_version || null
        });
        const $e = R.get(ye);
        $e.node_count++, $e.node_types.push(((ee = ie.reference) == null ? void 0 : ee.node_type) || ie.node_type);
      }
      return Array.from(R.values());
    }), x = N(() => M.value.reduce((R, z) => R + z.node_count, 0)), E = N(() => {
      var R;
      return (R = n.value) != null && R.nodes ? (n.value.nodes.unresolved || []).map((z) => {
        var W;
        return {
          node_type: ((W = z.reference) == null ? void 0 : W.node_type) || z.node_type
        };
      }) : [];
    }), K = N(() => {
      var W;
      if (!((W = n.value) != null && W.models)) return [];
      const R = (n.value.models.resolved || []).filter(
        (ee) => ee.match_type === "download_intent" || ee.match_type === "property_download_intent" || ee.match_type === "not_found"
      ).map((ee) => {
        var ie, ye, $e, ne;
        return {
          filename: ((ye = (ie = ee.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : ye.split("/").pop()) || (($e = ee.reference) == null ? void 0 : $e.widget_value) || ee.widget_value,
          widget_value: ((ne = ee.reference) == null ? void 0 : ne.widget_value) || ee.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ee.download_source || null,
          targetPath: ee.target_path || null,
          canDownload: !!(ee.download_source && ee.target_path)
        };
      }), z = (n.value.models.unresolved || []).map((ee) => {
        var ie, ye, $e, ne;
        return {
          filename: ((ye = (ie = ee.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : ye.split("/").pop()) || (($e = ee.reference) == null ? void 0 : $e.widget_value) || ee.widget_value,
          widget_value: ((ne = ee.reference) == null ? void 0 : ne.widget_value) || ee.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...R, ...z];
    }), q = N(() => K.value.filter((R) => R.canDownload)), V = N(() => M.value.length >= 5 ? M.value.slice(0, 4) : M.value), T = N(() => K.value.length >= 5 ? K.value.slice(0, 4) : K.value), P = N(() => M.value.length > 0 && M.value.every(
      (R) => i.value.has(R.package_id) || c.value.has(R.package_id) || u.value.has(R.package_id)
    )), L = N(() => q.value.length > 0 && q.value.every((R) => d.value.has(R.url))), ae = N(() => M.value.length > 0 || q.value.length > 0), Z = N(() => {
      const R = M.value.length === 0 || P.value, z = q.value.length === 0 || L.value;
      return R && z;
    }), F = N(() => w.value === "models" ? `Missing Models (${K.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${x.value})` : ""), G = N(() => w.value === "models" ? K.value.map((R) => ({
      id: R.url || R.widget_value,
      name: R.filename,
      canAction: R.canDownload,
      actionDisabledReason: R.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? M.value.map((R) => ({
      id: R.package_id,
      name: R.title,
      subtitle: `(${R.node_count} ${R.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : []);
    function J(R) {
      if (w.value === "models") {
        const z = K.value.find((W) => W.url === R.id || W.widget_value === R.id);
        z && X(z);
      } else if (w.value === "packages") {
        const z = M.value.find((W) => W.package_id === R.id);
        z && se(z);
      }
    }
    function O() {
      w.value === "models" ? we() : w.value === "packages" && he();
    }
    async function se(R) {
      const z = R.package_id;
      if (!(i.value.has(z) || c.value.has(z) || u.value.has(z))) {
        Me(), v.value = z;
        try {
          const { ui_id: W } = await b({
            id: z,
            version: R.latest_version || "latest",
            selected_version: R.latest_version || "latest",
            repository: R.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          _.value.set(W, z), c.value.add(z), console.log("[ComfyGit] Registered pending install:", { ui_id: W, packageId: z, pendingInstalls: Array.from(_.value.entries()) });
        } catch (W) {
          console.error("[ComfyGit] Failed to queue package install:", W), u.value.set(z, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function X(R) {
      !R.url || !R.targetPath || d.value.has(R.url) || (C([{
        workflow: "unsaved",
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath
      }]), d.value.add(R.url));
    }
    async function he() {
      for (const R of M.value)
        !i.value.has(R.package_id) && !c.value.has(R.package_id) && !u.value.has(R.package_id) && await se(R);
    }
    function we() {
      const R = q.value.filter(
        (z) => !d.value.has(z.url)
      );
      if (R.length !== 0) {
        C(R.map((z) => ({
          workflow: "unsaved",
          filename: z.filename,
          url: z.url,
          targetPath: z.targetPath
        })));
        for (const z of R)
          d.value.add(z.url);
      }
    }
    function re() {
      he(), we();
    }
    function ve() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Se(R) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const z = R == null ? void 0 : R.id;
      if (z && p.value.has(z)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${z} this session`);
        return;
      }
      try {
        const W = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: R })
        });
        if (W.ok) {
          const ee = await W.json();
          if (ee.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ee.filename}, skipping popup`), z && p.value.add(z);
            return;
          }
        }
      } catch (W) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", W);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const W = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: R, name: "unsaved" })
        });
        if (!W.ok) {
          const ee = await W.json();
          throw new Error(ee.error || "Failed to analyze workflow");
        }
        n.value = await W.json(), I.value && (l.value = !0, z && p.value.add(z));
      } catch (W) {
        console.error("[ComfyGit] Failed to analyze workflow:", W);
      } finally {
        s.value = !1;
      }
    }
    function Fe() {
      l.value = !1, n.value = null;
    }
    function ze(R) {
      const { workflow: z } = R.detail;
      z && Se(z);
    }
    function Te(R) {
      var ee;
      const z = (ee = R.detail) == null ? void 0 : ee.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: z,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const W = _.value.get(z);
      W ? (v.value = W, console.log("[ComfyGit] Installing package:", W)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", z);
    }
    function Pe(R) {
      var ie, ye, $e, ne, fe, Le, Ee;
      const z = (ie = R.detail) == null ? void 0 : ie.ui_id, W = ($e = (ye = R.detail) == null ? void 0 : ye.status) == null ? void 0 : $e.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: z,
        status: W,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const ee = _.value.get(z);
      if (ee) {
        if (_.value.delete(z), c.value.delete(ee), v.value === ee && (v.value = null), W === "success")
          i.value.add(ee), g.value++, console.log("[ComfyGit] Package installed successfully:", ee);
        else {
          const oe = ((Le = (fe = (ne = R.detail) == null ? void 0 : ne.status) == null ? void 0 : fe.messages) == null ? void 0 : Le[0]) || ((Ee = R.detail) == null ? void 0 : Ee.result) || "Unknown error";
          u.value.set(ee, oe), console.error("[ComfyGit] Package install failed:", ee, oe);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", z);
    }
    let ke = null;
    function ge() {
      var R;
      return ke || (ke = (R = window.app) == null ? void 0 : R.api), ke;
    }
    let De = !1;
    function Me() {
      if (De) return !0;
      const R = ge();
      return R ? (R.addEventListener("cm-task-started", Te), R.addEventListener("cm-task-completed", Pe), R.addEventListener("comfygit:workflow-changed", A), De = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function A(R) {
      const { change_type: z } = R.detail;
      (z === "created" || z === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Je(() => {
      window.addEventListener("comfygit:workflow-loaded", ze);
    }), Ws(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", ze), De) {
        const R = ge();
        R && (R.removeEventListener("cm-task-started", Te), R.removeEventListener("cm-task-completed", Pe), R.removeEventListener("comfygit:workflow-changed", A)), De = !1;
      }
    }), (R, z) => (a(), r(H, null, [
      l.value ? (a(), D(ut, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Fe
      }, {
        body: h(() => [
          s.value ? (a(), r("div", rP, [...z[4] || (z[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && I.value ? (a(), r("div", cP, [
            M.value.length > 0 ? (a(), r("div", uP, [
              t("div", dP, [
                t("span", fP, "Missing Custom Nodes (" + f(x.value) + ")", 1),
                M.value.length > 1 ? (a(), D(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: P.value,
                  onClick: he
                }, {
                  default: h(() => [
                    $(f(P.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", mP, [
                (a(!0), r(H, null, pe(V.value, (W) => (a(), r("div", {
                  key: W.package_id,
                  class: "package-item"
                }, [
                  t("div", vP, [
                    t("span", pP, f(W.title), 1),
                    t("span", gP, "(" + f(W.node_count) + " " + f(W.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !i.value.has(W.package_id) && !c.value.has(W.package_id) && !u.value.has(W.package_id) ? (a(), D(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === W.package_id,
                    onClick: (ee) => se(W)
                  }, {
                    default: h(() => [
                      $(f(v.value === W.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === W.package_id ? (a(), r("span", hP, "Installing...")) : c.value.has(W.package_id) ? (a(), r("span", yP, "Queued")) : u.value.has(W.package_id) ? (a(), r("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(W.package_id)
                  }, "Failed ⚠", 8, wP)) : (a(), r("span", _P, "Installed"))
                ]))), 128)),
                M.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: z[0] || (z[0] = (W) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(M.value.length) + " packages...", 1),
                  z[5] || (z[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            E.value.length > 0 ? (a(), r("div", kP, [
              t("div", bP, [
                t("span", $P, "Unknown Nodes (" + f(E.value.length) + ")", 1)
              ]),
              t("div", CP, [
                (a(!0), r(H, null, pe(E.value.slice(0, 5), (W) => (a(), r("div", {
                  key: W.node_type,
                  class: "item"
                }, [
                  t("code", xP, f(W.node_type), 1),
                  z[6] || (z[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                E.value.length > 5 ? (a(), r("div", SP, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            K.value.length > 0 ? (a(), r("div", IP, [
              t("div", EP, [
                t("span", TP, "Missing Models (" + f(K.value.length) + ")", 1),
                q.value.length > 1 ? (a(), D(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: L.value,
                  onClick: we
                }, {
                  default: h(() => [
                    $(f(L.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", PP, [
                (a(!0), r(H, null, pe(T.value, (W) => (a(), r("div", {
                  key: W.widget_value,
                  class: "model-item"
                }, [
                  t("div", RP, [
                    t("span", MP, f(W.filename), 1)
                  ]),
                  W.canDownload ? (a(), r(H, { key: 0 }, [
                    d.value.has(W.url) ? (a(), r("span", DP, "Queued")) : (a(), D(Re, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ee) => X(W)
                    }, {
                      default: h(() => [...z[7] || (z[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), r("span", LP, "Manual download required"))
                ]))), 128)),
                K.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: z[1] || (z[1] = (W) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(K.value.length) + " models...", 1),
                  z[8] || (z[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", AP, [
              S(La, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  z[2] || (z[2] = (W) => m.value = W),
                  ve
                ]
              }, {
                default: h(() => [...z[9] || (z[9] = [
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
            onClick: Fe
          }, {
            default: h(() => [...z[10] || (z[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          ae.value ? (a(), D(Re, {
            key: 0,
            variant: "primary",
            disabled: Z.value,
            onClick: re
          }, {
            default: h(() => [
              $(f(Z.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), D(iP, {
        key: 1,
        title: F.value,
        items: G.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? i.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: z[3] || (z[3] = (W) => w.value = null),
        onAction: J,
        onBulkAction: O
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), NP = /* @__PURE__ */ me(OP, [["__scopeId", "data-v-dd1934b2"]]), UP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', zP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', FP = {
  comfy: UP,
  phosphor: zP
}, il = "comfy", Hr = "comfygit-theme";
let Js = null, Kr = il;
function BP() {
  try {
    const e = localStorage.getItem(Hr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return il;
}
function qr(e = il) {
  Js && Js.remove(), Js = document.createElement("style"), Js.id = "comfygit-theme-styles", Js.setAttribute("data-theme", e), Js.textContent = FP[e], document.head.appendChild(Js), document.body.setAttribute("data-comfygit-theme", e), Kr = e;
  try {
    localStorage.setItem(Hr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function VP() {
  return Kr;
}
function WP(e) {
  qr(e);
}
function GP(e) {
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
const jP = BP();
qr(jP);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), WP(e);
  },
  getTheme: () => {
    const e = VP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Xt = null, Ot = null, jo = null, Do = null, oi = null, Lo = null, ni = null;
const ho = k(null);
let cl = "managed", Yr = !1;
async function En() {
  var e;
  if (!((e = Wt) != null && e.api)) return null;
  try {
    const s = await Wt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ho.value = await s.json());
  } catch {
  }
}
async function Aa() {
  var e;
  if ((e = Wt) != null && e.api)
    try {
      const s = await Wt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        cl = o.state, Yr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Oa() {
  var s;
  if (cl === "managed" || !Yr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function HP() {
  if (!ho.value) return !1;
  const e = ho.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ho.value.has_changes;
}
function wa(e) {
  Xt && Xt.remove(), Xt = document.createElement("div"), Xt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Xt.appendChild(s), Xt.addEventListener("click", (l) => {
    l.target === Xt && _a();
  });
  const o = (l) => {
    l.key === "Escape" && (_a(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), ea({
    render: () => nn(e7, {
      initialView: e,
      onClose: _a,
      onStatusUpdate: async (l) => {
        ho.value = l, Ho(), await Aa(), Na(), Oa();
      }
    })
  }).mount(s), document.body.appendChild(Xt);
}
function _a() {
  Xt && (Xt.remove(), Xt = null);
}
function KP(e) {
  Ao(), Ot = document.createElement("div"), Ot.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Ot.style.position = "fixed", Ot.style.top = `${s.bottom + 8}px`, Ot.style.right = `${window.innerWidth - s.right}px`, Ot.style.zIndex = "10001";
  const o = (l) => {
    Ot && !Ot.contains(l.target) && l.target !== e && (Ao(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Ao(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), jo = ea({
    render: () => nn(Wr, {
      status: ho.value,
      onClose: Ao,
      onCommitted: (l) => {
        Ao(), qP(l.success, l.message), En().then(Ho);
      }
    })
  }), jo.mount(Ot), document.body.appendChild(Ot);
}
function Ao() {
  jo && (jo.unmount(), jo = null), Ot && (Ot.remove(), Ot = null);
}
function qP(e, s) {
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
function YP() {
  Do || (Do = document.createElement("div"), Do.className = "comfygit-download-queue-root", oi = ea({
    render: () => nn(q7)
  }), oi.mount(Do), document.body.appendChild(Do), console.log("[ComfyGit] Model download queue mounted"));
}
function JP() {
  Lo || (Lo = document.createElement("div"), Lo.className = "comfygit-missing-resources-root", ni = ea({
    render: () => nn(NP)
  }), ni.mount(Lo), document.body.appendChild(Lo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Gt = null;
function Ho() {
  if (!Gt) return;
  const e = Gt.querySelector(".commit-indicator");
  e && (e.style.display = HP() ? "block" : "none");
}
function Na() {
  if (!Gt) return;
  const e = cl !== "managed";
  Gt.disabled = e, Gt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Jr = document.createElement("style");
Jr.textContent = `
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
document.head.appendChild(Jr);
Wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        Wt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        Wt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = wa, Gt = document.createElement("button"), Gt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Gt.innerHTML = 'Commit <span class="commit-indicator"></span>', Gt.title = "Quick Commit", Gt.onclick = () => KP(Gt), e.appendChild(s), e.appendChild(Gt), (i = (l = Wt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Wt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), YP(), JP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      wa(u);
    }));
    const { loadPendingDownloads: o } = bo();
    o(), await Promise.all([En(), Aa()]), Ho(), Na(), Oa(), setTimeout(Oa, 100), setInterval(async () => {
      await Promise.all([En(), Aa()]), Ho(), Na();
    }, 3e4);
    const n = Wt.api;
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
        const I = document.createElement("div");
        I.textContent = "Dependency conflict detected", I.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(I), p.appendChild(C);
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
          p.remove(), wa("debug-env");
        }, p.appendChild(M);
        const x = document.createElement("button");
        x.textContent = "×", x.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, x.onmouseover = () => x.style.opacity = "1", x.onmouseout = () => x.style.opacity = "0.6", x.onclick = () => p.remove(), p.appendChild(x), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const I = document.createElement("div");
        I.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, I.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(I), p.appendChild(C);
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
          M.disabled = !0, M.textContent = "Restarting...", M.style.opacity = "0.7", b.textContent = "Restarting...", I.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Wt.refreshComboInNodes && (await Wt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", I.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", M.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (K) {
                console.error("[ComfyGit] Failed to refresh nodes:", K), _.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", I.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", M.style.display = "none";
              }
            };
            n.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), b.textContent = "Restart Failed", b.style.color = "#e53935", I.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", M.textContent = "Try Again", M.disabled = !1, M.style.opacity = "1";
          }
        }, p.appendChild(M);
        const x = document.createElement("button");
        x.textContent = "×", x.title = "Dismiss (restart later)", x.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, x.onmouseover = () => x.style.opacity = "1", x.onmouseout = () => x.style.opacity = "0.6", x.onclick = () => p.remove(), p.appendChild(x), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await En(), Ho();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = GP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
