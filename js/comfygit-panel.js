import { app as Wt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Va(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const nt = {}, po = [], gs = () => {
}, ci = () => !1, jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ba = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Wa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, oc = Object.prototype.hasOwnProperty, tt = (e, s) => oc.call(e, s), Ve = Array.isArray, go = (e) => ln(e) === "[object Map]", Co = (e) => ln(e) === "[object Set]", fl = (e) => ln(e) === "[object Date]", Ge = (e) => typeof e == "function", ut = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", ui = (e) => (ot(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), di = Object.prototype.toString, ln = (e) => di.call(e), nc = (e) => ln(e).slice(8, -1), fi = (e) => ln(e) === "[object Object]", Ga = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fo = /* @__PURE__ */ Va(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, ac = /-\w/g, Kt = Hn(
  (e) => e.replace(ac, (s) => s.slice(1).toUpperCase())
), lc = /\B([A-Z])/g, Bs = Hn(
  (e) => e.replace(lc, "-$1").toLowerCase()
), Kn = Hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), la = Hn(
  (e) => e ? `on${Kn(e)}` : ""
), zs = (e, s) => !Object.is(e, s), Sn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, mi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, qn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, ic = (e) => {
  const s = ut(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ml;
const Yn = () => ml || (ml = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Ve(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = ut(a) ? dc(a) : Ft(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (ut(e) || ot(e))
    return e;
}
const rc = /;(?![^(]*\))/g, cc = /:([^]+)/, uc = /\/\*[^]*?\*\//g;
function dc(e) {
  const s = {};
  return e.replace(uc, "").split(rc).forEach((o) => {
    if (o) {
      const a = o.split(cc);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Se(e) {
  let s = "";
  if (ut(e))
    s = e;
  else if (Ve(e))
    for (let o = 0; o < e.length; o++) {
      const a = Se(e[o]);
      a && (s += a + " ");
    }
  else if (ot(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const fc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mc = /* @__PURE__ */ Va(fc);
function vi(e) {
  return !!e || e === "";
}
function vc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = so(e[a], s[a]);
  return o;
}
function so(e, s) {
  if (e === s) return !0;
  let o = fl(e), a = fl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), a = ts(s), o || a)
    return e === s;
  if (o = Ve(e), a = Ve(s), o || a)
    return o && a ? vc(e, s) : !1;
  if (o = ot(e), a = ot(s), o || a) {
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
function ja(e, s) {
  return e.findIndex((o) => so(o, s));
}
const pi = (e) => !!(e && e.__v_isRef === !0), f = (e) => ut(e) ? e : e == null ? "" : Ve(e) || ot(e) && (e.toString === di || !Ge(e.toString)) ? pi(e) ? f(e.value) : JSON.stringify(e, gi, 2) : String(e), gi = (e, s) => pi(s) ? gi(e, s.value) : go(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[ia(a, r) + " =>"] = l, o),
    {}
  )
} : Co(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => ia(o))
} : ts(s) ? ia(s) : ot(s) && !Ve(s) && !fi(s) ? String(s) : s, ia = (e, s = "") => {
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
let At;
class pc {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = At, !s && At && (this.index = (At.scopes || (At.scopes = [])).push(
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
      const o = At;
      try {
        return At = this, s();
      } finally {
        At = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = At, At = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (At = this.prevScope, this.prevScope = void 0);
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
function gc() {
  return At;
}
let lt;
const ra = /* @__PURE__ */ new WeakSet();
class hi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, At && At.active && At.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ra.has(this) && (ra.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, vl(this), ki(this);
    const s = lt, o = es;
    lt = this, es = !0;
    try {
      return this.fn();
    } finally {
      _i(this), lt = s, es = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        qa(s);
      this.deps = this.depsTail = void 0, vl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ra.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ca(this) && this.run();
  }
  get dirty() {
    return Ca(this);
  }
}
let yi = 0, Vo, Bo;
function wi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Bo, Bo = e;
    return;
  }
  e.next = Vo, Vo = e;
}
function Ha() {
  yi++;
}
function Ka() {
  if (--yi > 0)
    return;
  if (Bo) {
    let s = Bo;
    for (Bo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Vo; ) {
    let s = Vo;
    for (Vo = void 0; s; ) {
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
function ki(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function _i(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), qa(a), hc(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Ca(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (bi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function bi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qo) || (e.globalVersion = Qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ca(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = lt, a = es;
  lt = e, es = !0;
  try {
    ki(e);
    const l = e.fn(e._value);
    (s.version === 0 || zs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    lt = o, es = a, _i(e), e.flags &= -3;
  }
}
function qa(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      qa(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function hc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let es = !0;
const $i = [];
function Es() {
  $i.push(es), es = !1;
}
function Ts() {
  const e = $i.pop();
  es = e === void 0 ? !0 : e;
}
function vl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = lt;
    lt = void 0;
    try {
      s();
    } finally {
      lt = o;
    }
  }
}
let Qo = 0;
class yc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ya {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!lt || !es || lt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== lt)
      o = this.activeLink = new yc(lt, this), lt.deps ? (o.prevDep = lt.depsTail, lt.depsTail.nextDep = o, lt.depsTail = o) : lt.deps = lt.depsTail = o, Ci(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = lt.depsTail, o.nextDep = void 0, lt.depsTail.nextDep = o, lt.depsTail = o, lt.deps === o && (lt.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, Qo++, this.notify(s);
  }
  notify(s) {
    Ha();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Ka();
    }
  }
}
function Ci(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Ci(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const xa = /* @__PURE__ */ new WeakMap(), eo = Symbol(
  ""
), Sa = Symbol(
  ""
), Xo = Symbol(
  ""
);
function _t(e, s, o) {
  if (es && lt) {
    let a = xa.get(e);
    a || xa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new Ya()), l.map = a, l.key = o), l.track();
  }
}
function xs(e, s, o, a, l, r) {
  const c = xa.get(e);
  if (!c) {
    Qo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Ha(), s === "clear")
    c.forEach(u);
  else {
    const d = Ve(e), m = d && Ga(o);
    if (d && o === "length") {
      const v = Number(a);
      c.forEach((g, w) => {
        (w === "length" || w === Xo || !ts(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(Xo)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(eo)), go(e) && u(c.get(Sa)));
          break;
        case "delete":
          d || (u(c.get(eo)), go(e) && u(c.get(Sa)));
          break;
        case "set":
          go(e) && u(c.get(eo));
          break;
      }
  }
  Ka();
}
function ro(e) {
  const s = Xe(e);
  return s === e ? s : (_t(s, "iterate", Xo), Gt(e) ? s : s.map(ss));
}
function Jn(e) {
  return _t(e = Xe(e), "iterate", Xo), e;
}
function Os(e, s) {
  return Rs(e) ? to(e) ? _o(ss(s)) : _o(s) : ss(s);
}
const wc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ca(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ro(this).concat(
      ...e.map((s) => Ve(s) ? ro(s) : s)
    );
  },
  entries() {
    return ca(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
  },
  every(e, s) {
    return bs(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return bs(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Os(this, a)),
      arguments
    );
  },
  find(e, s) {
    return bs(
      this,
      "find",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return bs(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return bs(
      this,
      "findLast",
      e,
      s,
      (o) => Os(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return bs(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return bs(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return ua(this, "includes", e);
  },
  indexOf(...e) {
    return ua(this, "indexOf", e);
  },
  join(e) {
    return ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ua(this, "lastIndexOf", e);
  },
  map(e, s) {
    return bs(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Po(this, "pop");
  },
  push(...e) {
    return Po(this, "push", e);
  },
  reduce(e, ...s) {
    return pl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return pl(this, "reduceRight", e, s);
  },
  shift() {
    return Po(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return bs(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Po(this, "splice", e);
  },
  toReversed() {
    return ro(this).toReversed();
  },
  toSorted(e) {
    return ro(this).toSorted(e);
  },
  toSpliced(...e) {
    return ro(this).toSpliced(...e);
  },
  unshift(...e) {
    return Po(this, "unshift", e);
  },
  values() {
    return ca(this, "values", (e) => Os(this, e));
  }
};
function ca(e, s, o) {
  const a = Jn(e), l = a[s]();
  return a !== e && !Gt(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const kc = Array.prototype;
function bs(e, s, o, a, l, r) {
  const c = Jn(e), u = c !== e && !Gt(e), d = c[s];
  if (d !== kc[s]) {
    const g = d.apply(e, r);
    return u ? ss(g) : g;
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
function pl(e, s, o, a) {
  const l = Jn(e);
  let r = o;
  return l !== e && (Gt(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Os(e, u), d, e);
  }), l[s](r, ...a);
}
function ua(e, s, o) {
  const a = Xe(e);
  _t(a, "iterate", Xo);
  const l = a[s](...o);
  return (l === -1 || l === !1) && Xa(o[0]) ? (o[0] = Xe(o[0]), a[s](...o)) : l;
}
function Po(e, s, o = []) {
  Es(), Ha();
  const a = Xe(e)[s].apply(e, o);
  return Ka(), Ts(), a;
}
const _c = /* @__PURE__ */ Va("__proto__,__v_isRef,__isVue"), xi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function bc(e) {
  ts(e) || (e = String(e));
  const s = Xe(this);
  return _t(s, "has", e), s.hasOwnProperty(e);
}
class Si {
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
      return a === (l ? r ? Mc : Ri : r ? Ti : Ei).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = Ve(s);
    if (!l) {
      let d;
      if (c && (d = wc[o]))
        return d;
      if (o === "hasOwnProperty")
        return bc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ct(s) ? s : a
    );
    if ((ts(o) ? xi.has(o) : _c(o)) || (l || _t(s, "get", o), r))
      return u;
    if (Ct(u)) {
      const d = c && Ga(o) ? u : u.value;
      return l && ot(d) ? Dn(d) : d;
    }
    return ot(u) ? l ? Dn(u) : Ws(u) : u;
  }
}
class Ii extends Si {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Ve(s) && Ga(o);
    if (!this._isShallow) {
      const m = Rs(r);
      if (!Gt(a) && !Rs(a) && (r = Xe(r), a = Xe(a)), !c && Ct(r) && !Ct(a))
        return m || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : tt(s, o), d = Reflect.set(
      s,
      o,
      a,
      Ct(s) ? s : l
    );
    return s === Xe(l) && (u ? zs(a, r) && xs(s, "set", o, a) : xs(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = tt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && xs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!ts(o) || !xi.has(o)) && _t(s, "has", o), a;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      Ve(s) ? "length" : eo
    ), Reflect.ownKeys(s);
  }
}
class $c extends Si {
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
const Cc = /* @__PURE__ */ new Ii(), xc = /* @__PURE__ */ new $c(), Sc = /* @__PURE__ */ new Ii(!0);
const Ia = (e) => e, gn = (e) => Reflect.getPrototypeOf(e);
function Ic(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = Xe(l), c = go(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...a), v = o ? Ia : s ? _o : ss;
    return !s && _t(
      r,
      "iterate",
      d ? Sa : eo
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
function hn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ec(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = Xe(r), u = Xe(l);
      e || (zs(l, u) && _t(c, "get", l), _t(c, "get", u));
      const { has: d } = gn(c), m = s ? Ia : e ? _o : ss;
      if (d.call(c, l))
        return m(r.get(l));
      if (d.call(c, u))
        return m(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Xe(l), "iterate", eo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = Xe(r), u = Xe(l);
      return e || (zs(l, u) && _t(c, "has", l), _t(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = Xe(u), m = s ? Ia : e ? _o : ss;
      return !e && _t(d, "iterate", eo), u.forEach((v, g) => l.call(r, m(v), m(g), c));
    }
  };
  return pt(
    o,
    e ? {
      add: hn("add"),
      set: hn("set"),
      delete: hn("delete"),
      clear: hn("clear")
    } : {
      add(l) {
        !s && !Gt(l) && !Rs(l) && (l = Xe(l));
        const r = Xe(this);
        return gn(r).has.call(r, l) || (r.add(l), xs(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !Gt(r) && !Rs(r) && (r = Xe(r));
        const c = Xe(this), { has: u, get: d } = gn(c);
        let m = u.call(c, l);
        m || (l = Xe(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), m ? zs(r, v) && xs(c, "set", l, r) : xs(c, "add", l, r), this;
      },
      delete(l) {
        const r = Xe(this), { has: c, get: u } = gn(r);
        let d = c.call(r, l);
        d || (l = Xe(l), d = c.call(r, l)), u && u.call(r, l);
        const m = r.delete(l);
        return d && xs(r, "delete", l, void 0), m;
      },
      clear() {
        const l = Xe(this), r = l.size !== 0, c = l.clear();
        return r && xs(
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
    o[l] = Ic(l, e, s);
  }), o;
}
function Ja(e, s) {
  const o = Ec(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    tt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Tc = {
  get: /* @__PURE__ */ Ja(!1, !1)
}, Rc = {
  get: /* @__PURE__ */ Ja(!1, !0)
}, Pc = {
  get: /* @__PURE__ */ Ja(!0, !1)
};
const Ei = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap();
function Dc(e) {
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
function Lc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dc(nc(e));
}
function Ws(e) {
  return Rs(e) ? e : Qa(
    e,
    !1,
    Cc,
    Tc,
    Ei
  );
}
function Ac(e) {
  return Qa(
    e,
    !1,
    Sc,
    Rc,
    Ti
  );
}
function Dn(e) {
  return Qa(
    e,
    !0,
    xc,
    Pc,
    Ri
  );
}
function Qa(e, s, o, a, l) {
  if (!ot(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = Lc(e);
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
  return Rs(e) ? to(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Rs(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function Xa(e) {
  return e ? !!e.__v_raw : !1;
}
function Xe(e) {
  const s = e && e.__v_raw;
  return s ? Xe(s) : e;
}
function Oc(e) {
  return !tt(e, "__v_skip") && Object.isExtensible(e) && mi(e, "__v_skip", !0), e;
}
const ss = (e) => ot(e) ? Ws(e) : e, _o = (e) => ot(e) ? Dn(e) : e;
function Ct(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Nc(e, !1);
}
function Nc(e, s) {
  return Ct(e) ? e : new Uc(e, s);
}
class Uc {
  constructor(s, o) {
    this.dep = new Ya(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Xe(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || Gt(s) || Rs(s);
    s = a ? s : Xe(s), zs(s, o) && (this._rawValue = s, this._value = a ? s : ss(s), this.dep.trigger());
  }
}
function We(e) {
  return Ct(e) ? e.value : e;
}
const zc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Ct(l) && !Ct(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Pi(e) {
  return to(e) ? e : new Proxy(e, zc);
}
class Fc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Ya(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    lt !== this)
      return wi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return bi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Vc(e, s, o = !1) {
  let a, l;
  return Ge(e) ? a = e : (a = e.get, l = e.set), new Fc(a, l, o);
}
const yn = {}, Ln = /* @__PURE__ */ new WeakMap();
let Xs;
function Bc(e, s = !1, o = Xs) {
  if (o) {
    let a = Ln.get(o);
    a || Ln.set(o, a = []), a.push(e);
  }
}
function Wc(e, s, o = nt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, m = (T) => l ? T : Gt(T) || l === !1 || l === 0 ? Ss(T, 1) : Ss(T);
  let v, g, w, p, k = !1, C = !1;
  if (Ct(e) ? (g = () => e.value, k = Gt(e)) : to(e) ? (g = () => m(e), k = !0) : Ve(e) ? (C = !0, k = e.some((T) => to(T) || Gt(T)), g = () => e.map((T) => {
    if (Ct(T))
      return T.value;
    if (to(T))
      return m(T);
    if (Ge(T))
      return d ? d(T, 2) : T();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Es();
      try {
        w();
      } finally {
        Ts();
      }
    }
    const T = Xs;
    Xs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Xs = T;
    }
  } : g = gs, s && l) {
    const T = g, L = l === !0 ? 1 / 0 : l;
    g = () => Ss(T(), L);
  }
  const b = gc(), x = () => {
    v.stop(), b && b.active && Wa(b.effects, v);
  };
  if (r && s) {
    const T = s;
    s = (...L) => {
      T(...L), x();
    };
  }
  let M = C ? new Array(e.length).fill(yn) : yn;
  const P = (T) => {
    if (!(!(v.flags & 1) || !v.dirty && !T))
      if (s) {
        const L = v.run();
        if (l || k || (C ? L.some((V, B) => zs(V, M[B])) : zs(L, M))) {
          w && w();
          const V = Xs;
          Xs = v;
          try {
            const B = [
              L,
              // pass undefined as the old value when it's changed for the first time
              M === yn ? void 0 : C && M[0] === yn ? [] : M,
              p
            ];
            M = L, d ? d(s, 3, B) : (
              // @ts-expect-error
              s(...B)
            );
          } finally {
            Xs = V;
          }
        }
      } else
        v.run();
  };
  return u && u(P), v = new hi(g), v.scheduler = c ? () => c(P, !1) : P, p = (T) => Bc(T, !1, v), w = v.onStop = () => {
    const T = Ln.get(v);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const L of T) L();
      Ln.delete(v);
    }
  }, s ? a ? P(!0) : M = v.run() : c ? c(P.bind(null, !0), !0) : v.run(), x.pause = v.pause.bind(v), x.resume = v.resume.bind(v), x.stop = x, x;
}
function Ss(e, s = 1 / 0, o) {
  if (s <= 0 || !ot(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ct(e))
    Ss(e.value, s, o);
  else if (Ve(e))
    for (let a = 0; a < e.length; a++)
      Ss(e[a], s, o);
  else if (Co(e) || go(e))
    e.forEach((a) => {
      Ss(a, s, o);
    });
  else if (fi(e)) {
    for (const a in e)
      Ss(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ss(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function rn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    Qn(l, s, o);
  }
}
function os(e, s, o, a) {
  if (Ge(e)) {
    const l = rn(e, s, o, a);
    return l && ui(l) && l.catch((r) => {
      Qn(r, s, o);
    }), l;
  }
  if (Ve(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(os(e[r], s, o, a));
    return l;
  }
}
function Qn(e, s, o, a = !0) {
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
      Es(), rn(r, null, 10, [
        e,
        d,
        m
      ]), Ts();
      return;
    }
  }
  Gc(e, o, l, a, c);
}
function Gc(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Rt = [];
let ms = -1;
const ho = [];
let Ns = null, fo = 0;
const Mi = /* @__PURE__ */ Promise.resolve();
let An = null;
function gt(e) {
  const s = An || Mi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function jc(e) {
  let s = ms + 1, o = Rt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Rt[a], r = Zo(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function Za(e) {
  if (!(e.flags & 1)) {
    const s = Zo(e), o = Rt[Rt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Zo(o) ? Rt.push(e) : Rt.splice(jc(s), 0, e), e.flags |= 1, Di();
  }
}
function Di() {
  An || (An = Mi.then(Ai));
}
function Hc(e) {
  Ve(e) ? ho.push(...e) : Ns && e.id === -1 ? Ns.splice(fo + 1, 0, e) : e.flags & 1 || (ho.push(e), e.flags |= 1), Di();
}
function gl(e, s, o = ms + 1) {
  for (; o < Rt.length; o++) {
    const a = Rt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Rt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Li(e) {
  if (ho.length) {
    const s = [...new Set(ho)].sort(
      (o, a) => Zo(o) - Zo(a)
    );
    if (ho.length = 0, Ns) {
      Ns.push(...s);
      return;
    }
    for (Ns = s, fo = 0; fo < Ns.length; fo++) {
      const o = Ns[fo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ns = null, fo = 0;
  }
}
const Zo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ai(e) {
  try {
    for (ms = 0; ms < Rt.length; ms++) {
      const s = Rt[ms];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), rn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ms < Rt.length; ms++) {
      const s = Rt[ms];
      s && (s.flags &= -2);
    }
    ms = -1, Rt.length = 0, Li(), An = null, (Rt.length || ho.length) && Ai();
  }
}
let wt = null, Oi = null;
function On(e) {
  const s = wt;
  return wt = e, Oi = e && e.type.__scopeId || null, s;
}
function h(e, s = wt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && zn(-1);
    const r = On(s);
    let c;
    try {
      c = e(...l);
    } finally {
      On(r), a._d && zn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function qe(e, s) {
  if (wt === null)
    return e;
  const o = sa(wt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, d = nt] = s[l];
    r && (Ge(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ss(c), a.push({
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
    d && (Es(), os(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Ts());
  }
}
const Ni = Symbol("_vte"), Ui = (e) => e.__isTeleport, Wo = (e) => e && (e.disabled || e.disabled === ""), hl = (e) => e && (e.defer || e.defer === ""), yl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ea = (e, s) => {
  const o = e && e.to;
  return ut(o) ? s ? s(o) : null : o;
}, zi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: k, createText: C, createComment: b }
    } = m, x = Wo(s.props);
    let { shapeFlag: M, children: P, dynamicChildren: T } = s;
    if (e == null) {
      const L = s.el = C(""), V = s.anchor = C("");
      p(L, o, a), p(V, o, a);
      const B = (I, A) => {
        M & 16 && v(
          P,
          I,
          A,
          l,
          r,
          c,
          u,
          d
        );
      }, E = () => {
        const I = s.target = Ea(s.props, k), A = Fi(I, s, C, p);
        I && (c !== "svg" && yl(I) ? c = "svg" : c !== "mathml" && wl(I) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), x || (B(I, A), In(s, !1)));
      };
      x && (B(o, V), In(s, !0)), hl(s.props) ? (s.el.__isMounted = !1, Et(() => {
        E(), delete s.el.__isMounted;
      }, r)) : E();
    } else {
      if (hl(s.props) && e.el.__isMounted === !1) {
        Et(() => {
          zi.process(
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
      const L = s.anchor = e.anchor, V = s.target = e.target, B = s.targetAnchor = e.targetAnchor, E = Wo(e.props), I = E ? o : V, A = E ? L : B;
      if (c === "svg" || yl(V) ? c = "svg" : (c === "mathml" || wl(V)) && (c = "mathml"), T ? (w(
        e.dynamicChildren,
        T,
        I,
        l,
        r,
        c,
        u
      ), nl(e, s, !0)) : d || g(
        e,
        s,
        I,
        A,
        l,
        r,
        c,
        u,
        !1
      ), x)
        E ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : wn(
          s,
          o,
          L,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const Z = s.target = Ea(
          s.props,
          k
        );
        Z && wn(
          s,
          Z,
          null,
          m,
          0
        );
      } else E && wn(
        s,
        V,
        B,
        m,
        1
      );
      In(s, x);
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
      const p = r || !Wo(w);
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
  move: wn,
  hydrate: Kc
};
function wn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: m, props: v } = e, g = r === 2;
  if (g && a(c, s, o), (!g || Wo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && a(u, s, o);
}
function Kc(e, s, o, a, l, r, {
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
  const p = s.target = Ea(
    s.props,
    d
  ), k = Wo(s.props);
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
        s.targetAnchor || Fi(p, s, v, m), g(
          C && c(C),
          s,
          p,
          o,
          a,
          l,
          r
        );
      }
    In(s, k);
  } else k && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const kt = zi;
function In(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function Fi(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[Ni] = r, e && (a(l, e), a(r, e)), r;
}
const Cs = Symbol("_leaveCb"), kn = Symbol("_enterCb");
function Vi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qe(() => {
    e.isMounted = !0;
  }), Yi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Bt = [Function, Array], Bi = {
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
}, Wi = (e) => {
  const s = e.subTree;
  return s.component ? Wi(s.component) : s;
}, qc = {
  name: "BaseTransition",
  props: Bi,
  setup(e, { slots: s }) {
    const o = ll(), a = Vi();
    return () => {
      const l = s.default && el(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = Gi(l), c = Xe(e), { mode: u } = c;
      if (a.isLeaving)
        return da(r);
      const d = kl(r);
      if (!d)
        return da(r);
      let m = en(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== bt && oo(d, m);
      let v = o.subTree && kl(o.subTree);
      if (v && v.type !== bt && !Zs(v, d) && Wi(o).type !== bt) {
        let g = en(
          v,
          c,
          a,
          o
        );
        if (oo(v, g), u === "out-in" && d.type !== bt)
          return a.isLeaving = !0, g.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, da(r);
        u === "in-out" && d.type !== bt ? g.delayLeave = (w, p, k) => {
          const C = ji(
            a,
            v
          );
          C[String(v.key)] = v, w[Cs] = () => {
            p(), w[Cs] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            k(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function Gi(e) {
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
const Yc = qc;
function ji(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function en(e, s, o, a, l) {
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
    onAppearCancelled: P
  } = s, T = String(e.key), L = ji(o, e), V = (I, A) => {
    I && os(
      I,
      a,
      9,
      A
    );
  }, B = (I, A) => {
    const Z = A[1];
    V(I, A), Ve(I) ? I.every((W) => W.length <= 1) && Z() : I.length <= 1 && Z();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(I) {
      let A = d;
      if (!o.isMounted)
        if (r)
          A = b || d;
        else
          return;
      I[Cs] && I[Cs](
        !0
        /* cancelled */
      );
      const Z = L[T];
      Z && Zs(e, Z) && Z.el[Cs] && Z.el[Cs](), V(A, [I]);
    },
    enter(I) {
      let A = m, Z = v, W = g;
      if (!o.isMounted)
        if (r)
          A = x || m, Z = M || v, W = P || g;
        else
          return;
      let O = !1;
      const j = I[kn] = (X) => {
        O || (O = !0, X ? V(W, [I]) : V(Z, [I]), E.delayedLeave && E.delayedLeave(), I[kn] = void 0);
      };
      A ? B(A, [I, j]) : j();
    },
    leave(I, A) {
      const Z = String(e.key);
      if (I[kn] && I[kn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return A();
      V(w, [I]);
      let W = !1;
      const O = I[Cs] = (j) => {
        W || (W = !0, A(), j ? V(C, [I]) : V(k, [I]), I[Cs] = void 0, L[Z] === e && delete L[Z]);
      };
      L[Z] = e, p ? B(p, [I, O]) : O();
    },
    clone(I) {
      const A = en(
        I,
        s,
        o,
        a,
        l
      );
      return l && l(A), A;
    }
  };
  return E;
}
function da(e) {
  if (Xn(e))
    return e = Fs(e), e.children = null, e;
}
function kl(e) {
  if (!Xn(e))
    return Ui(e.type) && e.children ? Gi(e.children) : e;
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
function oo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, oo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function el(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === H ? (c.patchFlag & 128 && l++, a = a.concat(
      el(c.children, s, u)
    )) : (s || c.type !== bt) && a.push(u != null ? Fs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function fe(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Hi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Nn = /* @__PURE__ */ new WeakMap();
function Go(e, s, o, a, l = !1) {
  if (Ve(e)) {
    e.forEach(
      (k, C) => Go(
        k,
        s && (Ve(s) ? s[C] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (yo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Go(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? sa(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, m = s && s.r, v = u.refs === nt ? u.refs = {} : u.refs, g = u.setupState, w = Xe(g), p = g === nt ? ci : (k) => tt(w, k);
  if (m != null && m !== d) {
    if (_l(s), ut(m))
      v[m] = null, p(m) && (g[m] = null);
    else if (Ct(m)) {
      m.value = null;
      const k = s;
      k.k && (v[k.k] = null);
    }
  }
  if (Ge(d))
    rn(d, u, 12, [c, v]);
  else {
    const k = ut(d), C = Ct(d);
    if (k || C) {
      const b = () => {
        if (e.f) {
          const x = k ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Ve(x) && Wa(x, r);
          else if (Ve(x))
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
          b(), Nn.delete(e);
        };
        x.id = -1, Nn.set(e, x), Et(x, o);
      } else
        _l(e), b();
    }
  }
}
function _l(e) {
  const s = Nn.get(e);
  s && (s.flags |= 8, Nn.delete(e));
}
Yn().requestIdleCallback;
Yn().cancelIdleCallback;
const yo = (e) => !!e.type.__asyncLoader, Xn = (e) => e.type.__isKeepAlive;
function Jc(e, s) {
  Ki(e, "a", s);
}
function Qc(e, s) {
  Ki(e, "da", s);
}
function Ki(e, s, o = $t) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Zn(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Xn(l.parent.vnode) && Xc(a, s, o, l), l = l.parent;
  }
}
function Xc(e, s, o, a) {
  const l = Zn(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Gs(() => {
    Wa(a[s], l);
  }, o);
}
function Zn(e, s, o = $t, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Es();
      const u = cn(o), d = os(s, o, e, c);
      return u(), Ts(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Ps = (e) => (s, o = $t) => {
  (!on || e === "sp") && Zn(e, (...a) => s(...a), o);
}, Zc = Ps("bm"), Qe = Ps("m"), eu = Ps(
  "bu"
), qi = Ps("u"), Yi = Ps(
  "bum"
), Gs = Ps("um"), tu = Ps(
  "sp"
), su = Ps("rtg"), ou = Ps("rtc");
function nu(e, s = $t) {
  Zn("ec", e, s);
}
const au = "components", Ji = Symbol.for("v-ndc");
function tl(e) {
  return ut(e) ? lu(au, e, !1) || e : e || Ji;
}
function lu(e, s, o = !0, a = !1) {
  const l = wt || $t;
  if (l) {
    const r = l.type;
    {
      const u = qu(
        r,
        !1
      );
      if (u && (u === s || u === Kt(s) || u === Kn(Kt(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      bl(l[e] || r[e], s) || // global registration
      bl(l.appContext[e], s)
    );
    return !c && a ? r : c;
  }
}
function bl(e, s) {
  return e && (e[s] || e[Kt(s)] || e[Kn(Kt(s))]);
}
function ve(e, s, o, a) {
  let l;
  const r = o, c = Ve(e);
  if (c || ut(e)) {
    const u = c && to(e);
    let d = !1, m = !1;
    u && (d = !Gt(e), m = Rs(e), e = Jn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        d ? m ? _o(ss(e[v])) : ss(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (ot(e))
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
    if (Ve(a))
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
  if (wt.ce || wt.parent && yo(wt.parent) && wt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), D(
      H,
      null,
      [S("slot", o, a && a())],
      m ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && Qi(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = D(
    H,
    {
      key: (u && !ts(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Qi(e) {
  return e.some((s) => sn(s) ? !(s.type === bt || s.type === H && !Qi(s.children)) : !0) ? e : null;
}
const Ta = (e) => e ? gr(e) ? sa(e) : Ta(e.parent) : null, jo = (
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
    $parent: (e) => Ta(e.parent),
    $root: (e) => Ta(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Za(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gt.bind(e.proxy)),
    $watch: (e) => yu.bind(e)
  })
), fa = (e, s) => e !== nt && !e.__isScriptSetup && tt(e, s), iu = {
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
        if (fa(a, s))
          return c[s] = 1, a[s];
        if (l !== nt && tt(l, s))
          return c[s] = 2, l[s];
        if (tt(r, s))
          return c[s] = 3, r[s];
        if (o !== nt && tt(o, s))
          return c[s] = 4, o[s];
        Ra && (c[s] = 0);
      }
    }
    const m = jo[s];
    let v, g;
    if (m)
      return s === "$attrs" && _t(e.attrs, "get", ""), m(e);
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
    return fa(l, s) ? (l[s] = o, !0) : a !== nt && tt(a, s) ? (a[s] = o, !0) : tt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== nt && u[0] !== "$" && tt(e, u) || fa(s, u) || tt(r, u) || tt(a, u) || tt(jo, u) || tt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : tt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function $l(e) {
  return Ve(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Ra = !0;
function ru(e) {
  const s = Zi(e), o = e.proxy, a = e.ctx;
  Ra = !1, s.beforeCreate && Cl(s.beforeCreate, e, "bc");
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
    destroyed: P,
    unmounted: T,
    render: L,
    renderTracked: V,
    renderTriggered: B,
    errorCaptured: E,
    serverPrefetch: I,
    // public API
    expose: A,
    inheritAttrs: Z,
    // assets
    components: W,
    directives: O,
    filters: j
  } = s;
  if (m && cu(m, a, null), c)
    for (const ae in c) {
      const ee = c[ae];
      Ge(ee) && (a[ae] = ee.bind(o));
    }
  if (l) {
    const ae = l.call(o, o);
    ot(ae) && (e.data = Ws(ae));
  }
  if (Ra = !0, r)
    for (const ae in r) {
      const ee = r[ae], ke = Ge(ee) ? ee.bind(o, o) : Ge(ee.get) ? ee.get.bind(o, o) : gs, be = !Ge(ee) && Ge(ee.set) ? ee.set.bind(o) : gs, Le = U({
        get: ke,
        set: be
      });
      Object.defineProperty(a, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (ze) => Le.value = ze
      });
    }
  if (u)
    for (const ae in u)
      Xi(u[ae], a, o, ae);
  if (d) {
    const ae = Ge(d) ? d.call(o) : d;
    Reflect.ownKeys(ae).forEach((ee) => {
      pu(ee, ae[ee]);
    });
  }
  v && Cl(v, e, "c");
  function z(ae, ee) {
    Ve(ee) ? ee.forEach((ke) => ae(ke.bind(o))) : ee && ae(ee.bind(o));
  }
  if (z(Zc, g), z(Qe, w), z(eu, p), z(qi, k), z(Jc, C), z(Qc, b), z(nu, E), z(ou, V), z(su, B), z(Yi, M), z(Gs, T), z(tu, I), Ve(A))
    if (A.length) {
      const ae = e.exposed || (e.exposed = {});
      A.forEach((ee) => {
        Object.defineProperty(ae, ee, {
          get: () => o[ee],
          set: (ke) => o[ee] = ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === gs && (e.render = L), Z != null && (e.inheritAttrs = Z), W && (e.components = W), O && (e.directives = O), I && Hi(e);
}
function cu(e, s, o = gs) {
  Ve(e) && (e = Pa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    ot(l) ? "default" in l ? r = En(
      l.from || a,
      l.default,
      !0
    ) : r = En(l.from || a) : r = En(l), Ct(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Cl(e, s, o) {
  os(
    Ve(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Xi(e, s, o, a) {
  let l = a.includes(".") ? sr(o, a) : () => o[a];
  if (ut(e)) {
    const r = s[e];
    Ge(r) && dt(l, r);
  } else if (Ge(e))
    dt(l, e.bind(o));
  else if (ot(e))
    if (Ve(e))
      e.forEach((r) => Xi(r, s, o, a));
    else {
      const r = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(r) && dt(l, r, e);
    }
}
function Zi(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (m) => Un(d, m, c, !0)
  ), Un(d, s, c)), ot(s) && r.set(s, d), d;
}
function Un(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Un(e, r, o, !0), l && l.forEach(
    (c) => Un(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = uu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const uu = {
  data: xl,
  props: Sl,
  emits: Sl,
  // objects
  methods: zo,
  computed: zo,
  // lifecycle
  beforeCreate: It,
  created: It,
  beforeMount: It,
  mounted: It,
  beforeUpdate: It,
  updated: It,
  beforeDestroy: It,
  beforeUnmount: It,
  destroyed: It,
  unmounted: It,
  activated: It,
  deactivated: It,
  errorCaptured: It,
  serverPrefetch: It,
  // assets
  components: zo,
  directives: zo,
  // watch
  watch: fu,
  // provide / inject
  provide: xl,
  inject: du
};
function xl(e, s) {
  return s ? e ? function() {
    return pt(
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function du(e, s) {
  return zo(Pa(e), Pa(s));
}
function Pa(e) {
  if (Ve(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function It(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function zo(e, s) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Sl(e, s) {
  return e ? Ve(e) && Ve(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    $l(e),
    $l(s ?? {})
  ) : s;
}
function fu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = pt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = It(e[a], s[a]);
  return o;
}
function er() {
  return {
    app: null,
    config: {
      isNativeTag: ci,
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
let mu = 0;
function vu(e, s) {
  return function(a, l = null) {
    Ge(a) || (a = pt({}, a)), l != null && !ot(l) && (l = null);
    const r = er(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = r.app = {
      _uid: mu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Ju,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return c.has(v) || (v && Ge(v.install) ? (c.add(v), v.install(m, ...g)) : Ge(v) && (c.add(v), v(m, ...g))), m;
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
          return p.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, sa(p.component);
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
        return r.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = wo;
        wo = m;
        try {
          return v();
        } finally {
          wo = g;
        }
      }
    };
    return m;
  };
}
let wo = null;
function pu(e, s) {
  if ($t) {
    let o = $t.provides;
    const a = $t.parent && $t.parent.provides;
    a === o && (o = $t.provides = Object.create(a)), o[e] = s;
  }
}
function En(e, s, o = !1) {
  const a = ll();
  if (a || wo) {
    let l = wo ? wo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(a && a.proxy) : s;
  }
}
const gu = Symbol.for("v-scx"), hu = () => En(gu);
function dt(e, s, o) {
  return tr(e, s, o);
}
function tr(e, s, o = nt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = pt({}, o), d = s && a || !s && r !== "post";
  let m;
  if (on) {
    if (r === "sync") {
      const p = hu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = $t;
  u.call = (p, k, C) => os(p, v, k, C);
  let g = !1;
  r === "post" ? u.scheduler = (p) => {
    Et(p, v && v.suspense);
  } : r !== "sync" && (g = !0, u.scheduler = (p, k) => {
    k ? p() : Za(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Wc(e, s, u);
  return on && (m ? m.push(w) : d && w()), w;
}
function yu(e, s, o) {
  const a = this.proxy, l = ut(e) ? e.includes(".") ? sr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Ge(s) ? r = s : (r = s.handler, o = s);
  const c = cn(this), u = tr(l, r.bind(a), o);
  return c(), u;
}
function sr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const wu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Kt(s)}Modifiers`] || e[`${Bs(s)}Modifiers`];
function ku(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || nt;
  let l = o;
  const r = s.startsWith("update:"), c = r && wu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => ut(v) ? v.trim() : v)), c.number && (l = o.map(qn)));
  let u, d = a[u = la(s)] || // also try camelCase event handler (#2249)
  a[u = la(Kt(s))];
  !d && r && (d = a[u = la(Bs(s))]), d && os(
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
    e.emitted[u] = !0, os(
      m,
      e,
      6,
      l
    );
  }
}
const _u = /* @__PURE__ */ new WeakMap();
function or(e, s, o = !1) {
  const a = o ? _u : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!Ge(e)) {
    const d = (m) => {
      const v = or(m, s, !0);
      v && (u = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (ot(e) && a.set(e, null), null) : (Ve(r) ? r.forEach((d) => c[d] = null) : pt(c, r), ot(e) && a.set(e, c), c);
}
function ea(e, s) {
  return !e || !jn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), tt(e, s[0].toLowerCase() + s.slice(1)) || tt(e, Bs(s)) || tt(e, s));
}
function Il(e) {
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
  } = e, b = On(e);
  let x, M;
  try {
    if (o.shapeFlag & 4) {
      const T = l || a, L = T;
      x = ps(
        m.call(
          L,
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
      x = ps(
        T.length > 1 ? T(
          g,
          { attrs: u, slots: c, emit: d }
        ) : T(
          g,
          null
        )
      ), M = s.props ? u : bu(u);
    }
  } catch (T) {
    Ho.length = 0, Qn(T, e, 1), x = S(bt);
  }
  let P = x;
  if (M && C !== !1) {
    const T = Object.keys(M), { shapeFlag: L } = P;
    T.length && L & 7 && (r && T.some(Ba) && (M = $u(
      M,
      r
    )), P = Fs(P, M, !1, !0));
  }
  return o.dirs && (P = Fs(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(o.dirs) : o.dirs), o.transition && oo(P, o.transition), x = P, On(b), x;
}
const bu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || jn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, $u = (e, s) => {
  const o = {};
  for (const a in e)
    (!Ba(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Cu(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = s, m = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? El(a, c, m) : !!c;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== a[w] && !ea(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? El(a, c, m) : !0 : !!c;
  return !1;
}
function El(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ea(o, r))
      return !0;
  }
  return !1;
}
function xu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const nr = {}, ar = () => Object.create(nr), lr = (e) => Object.getPrototypeOf(e) === nr;
function Su(e, s, o, a = !1) {
  const l = {}, r = ar();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ir(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : Ac(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Iu(e, s, o, a) {
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
        if (ea(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (tt(r, w))
            p !== r[w] && (r[w] = p, m = !0);
          else {
            const k = Kt(w);
            l[k] = Ma(
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
    ir(e, s, l, r) && (m = !0);
    let v;
    for (const g in u)
      (!s || // for camelCase
      !tt(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !tt(s, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Ma(
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
  m && xs(e.attrs, "set", "");
}
function ir(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Fo(d))
        continue;
      const m = s[d];
      let v;
      l && tt(l, v = Kt(d)) ? !r || !r.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : ea(e.emitsOptions, d) || (!(d in a) || m !== a[d]) && (a[d] = m, c = !0);
    }
  if (r) {
    const d = Xe(o), m = u || nt;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      o[g] = Ma(
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
function Ma(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = tt(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Ge(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          a = m[o];
        else {
          const v = cn(l);
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
const Eu = /* @__PURE__ */ new WeakMap();
function rr(e, s, o = !1) {
  const a = o ? Eu : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!Ge(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = rr(g, s, !0);
      pt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return ot(e) && a.set(e, po), po;
  if (Ve(r))
    for (let v = 0; v < r.length; v++) {
      const g = Kt(r[v]);
      Tl(g) && (c[g] = nt);
    }
  else if (r)
    for (const v in r) {
      const g = Kt(v);
      if (Tl(g)) {
        const w = r[v], p = c[g] = Ve(w) || Ge(w) ? { type: w } : pt({}, w), k = p.type;
        let C = !1, b = !0;
        if (Ve(k))
          for (let x = 0; x < k.length; ++x) {
            const M = k[x], P = Ge(M) && M.name;
            if (P === "Boolean") {
              C = !0;
              break;
            } else P === "String" && (b = !1);
          }
        else
          C = Ge(k) && k.name === "Boolean";
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
  return ot(e) && a.set(e, m), m;
}
function Tl(e) {
  return e[0] !== "$" && !Fo(e);
}
const sl = (e) => e === "_" || e === "_ctx" || e === "$stable", ol = (e) => Ve(e) ? e.map(ps) : [ps(e)], Tu = (e, s, o) => {
  if (s._n)
    return s;
  const a = h((...l) => ol(s(...l)), o);
  return a._c = !1, a;
}, cr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (sl(l)) continue;
    const r = e[l];
    if (Ge(r))
      s[l] = Tu(l, r, a);
    else if (r != null) {
      const c = ol(r);
      s[l] = () => c;
    }
  }
}, ur = (e, s) => {
  const o = ol(s);
  e.slots.default = () => o;
}, dr = (e, s, o) => {
  for (const a in s)
    (o || !sl(a)) && (e[a] = s[a]);
}, Ru = (e, s, o) => {
  const a = e.slots = ar();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (dr(a, s, o), o && mi(a, "_", l, !0)) : cr(s, a);
  } else s && ur(e, s);
}, Pu = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = nt;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : dr(l, s, o) : (r = !s.$stable, cr(s, l)), c = s;
  } else s && (ur(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !sl(u) && c[u] == null && delete l[u];
}, Et = Ou;
function Mu(e) {
  return Du(e);
}
function Du(e, s) {
  const o = Yn();
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
    insertStaticContent: k
  } = e, C = (N, R, F, q = null, ne = null, re = null, $e = void 0, ie = null, we = !!R.dynamicChildren) => {
    if (N === R)
      return;
    N && !Zs(N, R) && (q = ce(N), ze(N, ne, re, !0), N = null), R.patchFlag === -2 && (we = !1, R.dynamicChildren = null);
    const { type: he, ref: Pe, shapeFlag: Ie } = R;
    switch (he) {
      case ta:
        b(N, R, F, q);
        break;
      case bt:
        x(N, R, F, q);
        break;
      case va:
        N == null && M(R, F, q, $e);
        break;
      case H:
        W(
          N,
          R,
          F,
          q,
          ne,
          re,
          $e,
          ie,
          we
        );
        break;
      default:
        Ie & 1 ? L(
          N,
          R,
          F,
          q,
          ne,
          re,
          $e,
          ie,
          we
        ) : Ie & 6 ? O(
          N,
          R,
          F,
          q,
          ne,
          re,
          $e,
          ie,
          we
        ) : (Ie & 64 || Ie & 128) && he.process(
          N,
          R,
          F,
          q,
          ne,
          re,
          $e,
          ie,
          we,
          Re
        );
    }
    Pe != null && ne ? Go(Pe, N && N.ref, re, R || N, !R) : Pe == null && N && N.ref != null && Go(N.ref, null, re, N, !0);
  }, b = (N, R, F, q) => {
    if (N == null)
      a(
        R.el = u(R.children),
        F,
        q
      );
    else {
      const ne = R.el = N.el;
      R.children !== N.children && m(ne, R.children);
    }
  }, x = (N, R, F, q) => {
    N == null ? a(
      R.el = d(R.children || ""),
      F,
      q
    ) : R.el = N.el;
  }, M = (N, R, F, q) => {
    [N.el, N.anchor] = k(
      N.children,
      R,
      F,
      q,
      N.el,
      N.anchor
    );
  }, P = ({ el: N, anchor: R }, F, q) => {
    let ne;
    for (; N && N !== R; )
      ne = w(N), a(N, F, q), N = ne;
    a(R, F, q);
  }, T = ({ el: N, anchor: R }) => {
    let F;
    for (; N && N !== R; )
      F = w(N), l(N), N = F;
    l(R);
  }, L = (N, R, F, q, ne, re, $e, ie, we) => {
    if (R.type === "svg" ? $e = "svg" : R.type === "math" && ($e = "mathml"), N == null)
      V(
        R,
        F,
        q,
        ne,
        re,
        $e,
        ie,
        we
      );
    else {
      const he = N.el && N.el._isVueCE ? N.el : null;
      try {
        he && he._beginPatch(), I(
          N,
          R,
          ne,
          re,
          $e,
          ie,
          we
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, V = (N, R, F, q, ne, re, $e, ie) => {
    let we, he;
    const { props: Pe, shapeFlag: Ie, transition: te, dirs: Y } = N;
    if (we = N.el = c(
      N.type,
      re,
      Pe && Pe.is,
      Pe
    ), Ie & 8 ? v(we, N.children) : Ie & 16 && E(
      N.children,
      we,
      null,
      q,
      ne,
      ma(N, re),
      $e,
      ie
    ), Y && qs(N, null, q, "created"), B(we, N, N.scopeId, $e, q), Pe) {
      for (const Ce in Pe)
        Ce !== "value" && !Fo(Ce) && r(we, Ce, null, Pe[Ce], re, q);
      "value" in Pe && r(we, "value", null, Pe.value, re), (he = Pe.onVnodeBeforeMount) && us(he, q, N);
    }
    Y && qs(N, null, q, "beforeMount");
    const Me = Lu(ne, te);
    Me && te.beforeEnter(we), a(we, R, F), ((he = Pe && Pe.onVnodeMounted) || Me || Y) && Et(() => {
      he && us(he, q, N), Me && te.enter(we), Y && qs(N, null, q, "mounted");
    }, ne);
  }, B = (N, R, F, q, ne) => {
    if (F && p(N, F), q)
      for (let re = 0; re < q.length; re++)
        p(N, q[re]);
    if (ne) {
      let re = ne.subTree;
      if (R === re || mr(re.type) && (re.ssContent === R || re.ssFallback === R)) {
        const $e = ne.vnode;
        B(
          N,
          $e,
          $e.scopeId,
          $e.slotScopeIds,
          ne.parent
        );
      }
    }
  }, E = (N, R, F, q, ne, re, $e, ie, we = 0) => {
    for (let he = we; he < N.length; he++) {
      const Pe = N[he] = ie ? Us(N[he]) : ps(N[he]);
      C(
        null,
        Pe,
        R,
        F,
        q,
        ne,
        re,
        $e,
        ie
      );
    }
  }, I = (N, R, F, q, ne, re, $e) => {
    const ie = R.el = N.el;
    let { patchFlag: we, dynamicChildren: he, dirs: Pe } = R;
    we |= N.patchFlag & 16;
    const Ie = N.props || nt, te = R.props || nt;
    let Y;
    if (F && Ys(F, !1), (Y = te.onVnodeBeforeUpdate) && us(Y, F, R, N), Pe && qs(R, N, F, "beforeUpdate"), F && Ys(F, !0), (Ie.innerHTML && te.innerHTML == null || Ie.textContent && te.textContent == null) && v(ie, ""), he ? A(
      N.dynamicChildren,
      he,
      ie,
      F,
      q,
      ma(R, ne),
      re
    ) : $e || ee(
      N,
      R,
      ie,
      null,
      F,
      q,
      ma(R, ne),
      re,
      !1
    ), we > 0) {
      if (we & 16)
        Z(ie, Ie, te, F, ne);
      else if (we & 2 && Ie.class !== te.class && r(ie, "class", null, te.class, ne), we & 4 && r(ie, "style", Ie.style, te.style, ne), we & 8) {
        const Me = R.dynamicProps;
        for (let Ce = 0; Ce < Me.length; Ce++) {
          const ye = Me[Ce], K = Ie[ye], G = te[ye];
          (G !== K || ye === "value") && r(ie, ye, K, G, ne, F);
        }
      }
      we & 1 && N.children !== R.children && v(ie, R.children);
    } else !$e && he == null && Z(ie, Ie, te, F, ne);
    ((Y = te.onVnodeUpdated) || Pe) && Et(() => {
      Y && us(Y, F, R, N), Pe && qs(R, N, F, "updated");
    }, q);
  }, A = (N, R, F, q, ne, re, $e) => {
    for (let ie = 0; ie < R.length; ie++) {
      const we = N[ie], he = R[ie], Pe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        we.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (we.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zs(we, he) || // - In the case of a component, it could contain anything.
        we.shapeFlag & 198) ? g(we.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      C(
        we,
        he,
        Pe,
        null,
        q,
        ne,
        re,
        $e,
        !0
      );
    }
  }, Z = (N, R, F, q, ne) => {
    if (R !== F) {
      if (R !== nt)
        for (const re in R)
          !Fo(re) && !(re in F) && r(
            N,
            re,
            R[re],
            null,
            ne,
            q
          );
      for (const re in F) {
        if (Fo(re)) continue;
        const $e = F[re], ie = R[re];
        $e !== ie && re !== "value" && r(N, re, ie, $e, ne, q);
      }
      "value" in F && r(N, "value", R.value, F.value, ne);
    }
  }, W = (N, R, F, q, ne, re, $e, ie, we) => {
    const he = R.el = N ? N.el : u(""), Pe = R.anchor = N ? N.anchor : u("");
    let { patchFlag: Ie, dynamicChildren: te, slotScopeIds: Y } = R;
    Y && (ie = ie ? ie.concat(Y) : Y), N == null ? (a(he, F, q), a(Pe, F, q), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      F,
      Pe,
      ne,
      re,
      $e,
      ie,
      we
    )) : Ie > 0 && Ie & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    N.dynamicChildren ? (A(
      N.dynamicChildren,
      te,
      F,
      ne,
      re,
      $e,
      ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || ne && R === ne.subTree) && nl(
      N,
      R,
      !0
      /* shallow */
    )) : ee(
      N,
      R,
      F,
      Pe,
      ne,
      re,
      $e,
      ie,
      we
    );
  }, O = (N, R, F, q, ne, re, $e, ie, we) => {
    R.slotScopeIds = ie, N == null ? R.shapeFlag & 512 ? ne.ctx.activate(
      R,
      F,
      q,
      $e,
      we
    ) : j(
      R,
      F,
      q,
      ne,
      re,
      $e,
      we
    ) : X(N, R, we);
  }, j = (N, R, F, q, ne, re, $e) => {
    const ie = N.component = Wu(
      N,
      q,
      ne
    );
    if (Xn(N) && (ie.ctx.renderer = Re), Gu(ie, !1, $e), ie.asyncDep) {
      if (ne && ne.registerDep(ie, z, $e), !N.el) {
        const we = ie.subTree = S(bt);
        x(null, we, R, F), N.placeholder = we.el;
      }
    } else
      z(
        ie,
        N,
        R,
        F,
        ne,
        re,
        $e
      );
  }, X = (N, R, F) => {
    const q = R.component = N.component;
    if (Cu(N, R, F))
      if (q.asyncDep && !q.asyncResolved) {
        ae(q, R, F);
        return;
      } else
        q.next = R, q.update();
    else
      R.el = N.el, q.vnode = R;
  }, z = (N, R, F, q, ne, re, $e) => {
    const ie = () => {
      if (N.isMounted) {
        let { next: Ie, bu: te, u: Y, parent: Me, vnode: Ce } = N;
        {
          const Be = fr(N);
          if (Be) {
            Ie && (Ie.el = Ce.el, ae(N, Ie, $e)), Be.asyncDep.then(() => {
              N.isUnmounted || ie();
            });
            return;
          }
        }
        let ye = Ie, K;
        Ys(N, !1), Ie ? (Ie.el = Ce.el, ae(N, Ie, $e)) : Ie = Ce, te && Sn(te), (K = Ie.props && Ie.props.onVnodeBeforeUpdate) && us(K, Me, Ie, Ce), Ys(N, !0);
        const G = Il(N), me = N.subTree;
        N.subTree = G, C(
          me,
          G,
          // parent may have changed if it's in a teleport
          g(me.el),
          // anchor may have changed if it's in a fragment
          ce(me),
          N,
          ne,
          re
        ), Ie.el = G.el, ye === null && xu(N, G.el), Y && Et(Y, ne), (K = Ie.props && Ie.props.onVnodeUpdated) && Et(
          () => us(K, Me, Ie, Ce),
          ne
        );
      } else {
        let Ie;
        const { el: te, props: Y } = R, { bm: Me, m: Ce, parent: ye, root: K, type: G } = N, me = yo(R);
        Ys(N, !1), Me && Sn(Me), !me && (Ie = Y && Y.onVnodeBeforeMount) && us(Ie, ye, R), Ys(N, !0);
        {
          K.ce && // @ts-expect-error _def is private
          K.ce._def.shadowRoot !== !1 && K.ce._injectChildStyle(G);
          const Be = N.subTree = Il(N);
          C(
            null,
            Be,
            F,
            q,
            N,
            ne,
            re
          ), R.el = Be.el;
        }
        if (Ce && Et(Ce, ne), !me && (Ie = Y && Y.onVnodeMounted)) {
          const Be = R;
          Et(
            () => us(Ie, ye, Be),
            ne
          );
        }
        (R.shapeFlag & 256 || ye && yo(ye.vnode) && ye.vnode.shapeFlag & 256) && N.a && Et(N.a, ne), N.isMounted = !0, R = F = q = null;
      }
    };
    N.scope.on();
    const we = N.effect = new hi(ie);
    N.scope.off();
    const he = N.update = we.run.bind(we), Pe = N.job = we.runIfDirty.bind(we);
    Pe.i = N, Pe.id = N.uid, we.scheduler = () => Za(Pe), Ys(N, !0), he();
  }, ae = (N, R, F) => {
    R.component = N;
    const q = N.vnode.props;
    N.vnode = R, N.next = null, Iu(N, R.props, q, F), Pu(N, R.children, F), Es(), gl(N), Ts();
  }, ee = (N, R, F, q, ne, re, $e, ie, we = !1) => {
    const he = N && N.children, Pe = N ? N.shapeFlag : 0, Ie = R.children, { patchFlag: te, shapeFlag: Y } = R;
    if (te > 0) {
      if (te & 128) {
        be(
          he,
          Ie,
          F,
          q,
          ne,
          re,
          $e,
          ie,
          we
        );
        return;
      } else if (te & 256) {
        ke(
          he,
          Ie,
          F,
          q,
          ne,
          re,
          $e,
          ie,
          we
        );
        return;
      }
    }
    Y & 8 ? (Pe & 16 && oe(he, ne, re), Ie !== he && v(F, Ie)) : Pe & 16 ? Y & 16 ? be(
      he,
      Ie,
      F,
      q,
      ne,
      re,
      $e,
      ie,
      we
    ) : oe(he, ne, re, !0) : (Pe & 8 && v(F, ""), Y & 16 && E(
      Ie,
      F,
      q,
      ne,
      re,
      $e,
      ie,
      we
    ));
  }, ke = (N, R, F, q, ne, re, $e, ie, we) => {
    N = N || po, R = R || po;
    const he = N.length, Pe = R.length, Ie = Math.min(he, Pe);
    let te;
    for (te = 0; te < Ie; te++) {
      const Y = R[te] = we ? Us(R[te]) : ps(R[te]);
      C(
        N[te],
        Y,
        F,
        null,
        ne,
        re,
        $e,
        ie,
        we
      );
    }
    he > Pe ? oe(
      N,
      ne,
      re,
      !0,
      !1,
      Ie
    ) : E(
      R,
      F,
      q,
      ne,
      re,
      $e,
      ie,
      we,
      Ie
    );
  }, be = (N, R, F, q, ne, re, $e, ie, we) => {
    let he = 0;
    const Pe = R.length;
    let Ie = N.length - 1, te = Pe - 1;
    for (; he <= Ie && he <= te; ) {
      const Y = N[he], Me = R[he] = we ? Us(R[he]) : ps(R[he]);
      if (Zs(Y, Me))
        C(
          Y,
          Me,
          F,
          null,
          ne,
          re,
          $e,
          ie,
          we
        );
      else
        break;
      he++;
    }
    for (; he <= Ie && he <= te; ) {
      const Y = N[Ie], Me = R[te] = we ? Us(R[te]) : ps(R[te]);
      if (Zs(Y, Me))
        C(
          Y,
          Me,
          F,
          null,
          ne,
          re,
          $e,
          ie,
          we
        );
      else
        break;
      Ie--, te--;
    }
    if (he > Ie) {
      if (he <= te) {
        const Y = te + 1, Me = Y < Pe ? R[Y].el : q;
        for (; he <= te; )
          C(
            null,
            R[he] = we ? Us(R[he]) : ps(R[he]),
            F,
            Me,
            ne,
            re,
            $e,
            ie,
            we
          ), he++;
      }
    } else if (he > te)
      for (; he <= Ie; )
        ze(N[he], ne, re, !0), he++;
    else {
      const Y = he, Me = he, Ce = /* @__PURE__ */ new Map();
      for (he = Me; he <= te; he++) {
        const st = R[he] = we ? Us(R[he]) : ps(R[he]);
        st.key != null && Ce.set(st.key, he);
      }
      let ye, K = 0;
      const G = te - Me + 1;
      let me = !1, Be = 0;
      const et = new Array(G);
      for (he = 0; he < G; he++) et[he] = 0;
      for (he = Y; he <= Ie; he++) {
        const st = N[he];
        if (K >= G) {
          ze(st, ne, re, !0);
          continue;
        }
        let vt;
        if (st.key != null)
          vt = Ce.get(st.key);
        else
          for (ye = Me; ye <= te; ye++)
            if (et[ye - Me] === 0 && Zs(st, R[ye])) {
              vt = ye;
              break;
            }
        vt === void 0 ? ze(st, ne, re, !0) : (et[vt - Me] = he + 1, vt >= Be ? Be = vt : me = !0, C(
          st,
          R[vt],
          F,
          null,
          ne,
          re,
          $e,
          ie,
          we
        ), K++);
      }
      const St = me ? Au(et) : po;
      for (ye = St.length - 1, he = G - 1; he >= 0; he--) {
        const st = Me + he, vt = R[st], qt = R[st + 1], ht = st + 1 < Pe ? (
          // #13559, fallback to el placeholder for unresolved async component
          qt.el || qt.placeholder
        ) : q;
        et[he] === 0 ? C(
          null,
          vt,
          F,
          ht,
          ne,
          re,
          $e,
          ie,
          we
        ) : me && (ye < 0 || he !== St[ye] ? Le(vt, F, ht, 2) : ye--);
      }
    }
  }, Le = (N, R, F, q, ne = null) => {
    const { el: re, type: $e, transition: ie, children: we, shapeFlag: he } = N;
    if (he & 6) {
      Le(N.component.subTree, R, F, q);
      return;
    }
    if (he & 128) {
      N.suspense.move(R, F, q);
      return;
    }
    if (he & 64) {
      $e.move(N, R, F, Re);
      return;
    }
    if ($e === H) {
      a(re, R, F);
      for (let Ie = 0; Ie < we.length; Ie++)
        Le(we[Ie], R, F, q);
      a(N.anchor, R, F);
      return;
    }
    if ($e === va) {
      P(N, R, F);
      return;
    }
    if (q !== 2 && he & 1 && ie)
      if (q === 0)
        ie.beforeEnter(re), a(re, R, F), Et(() => ie.enter(re), ne);
      else {
        const { leave: Ie, delayLeave: te, afterLeave: Y } = ie, Me = () => {
          N.ctx.isUnmounted ? l(re) : a(re, R, F);
        }, Ce = () => {
          re._isLeaving && re[Cs](
            !0
            /* cancelled */
          ), Ie(re, () => {
            Me(), Y && Y();
          });
        };
        te ? te(re, Me, Ce) : Ce();
      }
    else
      a(re, R, F);
  }, ze = (N, R, F, q = !1, ne = !1) => {
    const {
      type: re,
      props: $e,
      ref: ie,
      children: we,
      dynamicChildren: he,
      shapeFlag: Pe,
      patchFlag: Ie,
      dirs: te,
      cacheIndex: Y
    } = N;
    if (Ie === -2 && (ne = !1), ie != null && (Es(), Go(ie, null, F, N, !0), Ts()), Y != null && (R.renderCache[Y] = void 0), Pe & 256) {
      R.ctx.deactivate(N);
      return;
    }
    const Me = Pe & 1 && te, Ce = !yo(N);
    let ye;
    if (Ce && (ye = $e && $e.onVnodeBeforeUnmount) && us(ye, R, N), Pe & 6)
      pe(N.component, F, q);
    else {
      if (Pe & 128) {
        N.suspense.unmount(F, q);
        return;
      }
      Me && qs(N, null, R, "beforeUnmount"), Pe & 64 ? N.type.remove(
        N,
        R,
        F,
        Re,
        q
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (re !== H || Ie > 0 && Ie & 64) ? oe(
        he,
        R,
        F,
        !1,
        !0
      ) : (re === H && Ie & 384 || !ne && Pe & 16) && oe(we, R, F), q && Ue(N);
    }
    (Ce && (ye = $e && $e.onVnodeUnmounted) || Me) && Et(() => {
      ye && us(ye, R, N), Me && qs(N, null, R, "unmounted");
    }, F);
  }, Ue = (N) => {
    const { type: R, el: F, anchor: q, transition: ne } = N;
    if (R === H) {
      Ye(F, q);
      return;
    }
    if (R === va) {
      T(N);
      return;
    }
    const re = () => {
      l(F), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (N.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: $e, delayLeave: ie } = ne, we = () => $e(F, re);
      ie ? ie(N.el, re, we) : we();
    } else
      re();
  }, Ye = (N, R) => {
    let F;
    for (; N !== R; )
      F = w(N), l(N), N = F;
    l(R);
  }, pe = (N, R, F) => {
    const { bum: q, scope: ne, job: re, subTree: $e, um: ie, m: we, a: he } = N;
    Rl(we), Rl(he), q && Sn(q), ne.stop(), re && (re.flags |= 8, ze($e, N, R, F)), ie && Et(ie, R), Et(() => {
      N.isUnmounted = !0;
    }, R);
  }, oe = (N, R, F, q = !1, ne = !1, re = 0) => {
    for (let $e = re; $e < N.length; $e++)
      ze(N[$e], R, F, q, ne);
  }, ce = (N) => {
    if (N.shapeFlag & 6)
      return ce(N.component.subTree);
    if (N.shapeFlag & 128)
      return N.suspense.next();
    const R = w(N.anchor || N.el), F = R && R[Ni];
    return F ? w(F) : R;
  };
  let ue = !1;
  const Ee = (N, R, F) => {
    N == null ? R._vnode && ze(R._vnode, null, null, !0) : C(
      R._vnode || null,
      N,
      R,
      null,
      null,
      null,
      F
    ), R._vnode = N, ue || (ue = !0, gl(), Li(), ue = !1);
  }, Re = {
    p: C,
    um: ze,
    m: Le,
    r: Ue,
    mt: j,
    mc: E,
    pc: ee,
    pbc: A,
    n: ce,
    o: e
  };
  return {
    render: Ee,
    hydrate: void 0,
    createApp: vu(Ee)
  };
}
function ma({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Lu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function nl(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Ve(a) && Ve(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Us(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && nl(c, u)), u.type === ta && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === bt && !u.el && (u.el = c.el);
    }
}
function Au(e) {
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
function fr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : fr(s);
}
function Rl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const mr = (e) => e.__isSuspense;
function Ou(e, s) {
  s && s.pendingBranch ? Ve(e) ? s.effects.push(...e) : s.effects.push(e) : Hc(e);
}
const H = Symbol.for("v-fgt"), ta = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), va = Symbol.for("v-stc"), Ho = [];
let Ut = null;
function n(e = !1) {
  Ho.push(Ut = e ? null : []);
}
function Nu() {
  Ho.pop(), Ut = Ho[Ho.length - 1] || null;
}
let tn = 1;
function zn(e, s = !1) {
  tn += e, e < 0 && Ut && s && (Ut.hasOnce = !0);
}
function vr(e) {
  return e.dynamicChildren = tn > 0 ? Ut || po : null, Nu(), tn > 0 && Ut && Ut.push(e), e;
}
function i(e, s, o, a, l, r) {
  return vr(
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
function D(e, s, o, a, l) {
  return vr(
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
function sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const pr = ({ key: e }) => e ?? null, Tn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || Ct(e) || Ge(e) ? { i: wt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === H ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && pr(s),
    ref: s && Tn(s),
    scopeId: Oi,
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
  return u ? (al(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= ut(o) ? 8 : 16), tn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Ut && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Ut.push(d), d;
}
const S = Uu;
function Uu(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === Ji) && (e = bt), sn(e)) {
    const u = Fs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && al(u, o), tn > 0 && !r && Ut && (u.shapeFlag & 6 ? Ut[Ut.indexOf(e)] = u : Ut.push(u)), u.patchFlag = -2, u;
  }
  if (Yu(e) && (e = e.__vccOpts), s) {
    s = zu(s);
    let { class: u, style: d } = s;
    u && !ut(u) && (s.class = Se(u)), ot(d) && (Xa(d) && !Ve(d) && (d = pt({}, d)), s.style = Ft(d));
  }
  const c = ut(e) ? 1 : mr(e) ? 128 : Ui(e) ? 64 : ot(e) ? 4 : Ge(e) ? 2 : 0;
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
function zu(e) {
  return e ? Xa(e) || lr(e) ? pt({}, e) : e : null;
}
function Fs(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, m = s ? Fu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && pr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ve(r) ? r.concat(Tn(s)) : [r, Tn(s)] : Tn(s)
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
  return d && a && oo(
    v,
    d.clone(v)
  ), v;
}
function $(e = " ", s = 0) {
  return S(ta, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), D(bt, null, e)) : S(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? S(bt) : Ve(e) ? S(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : sn(e) ? Us(e) : S(ta, null, String(e));
}
function Us(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fs(e);
}
function al(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Ve(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), al(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !lr(s) ? s._ctx = wt : l === 3 && wt && (wt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: wt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Fu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Se([s.class, a.class]));
      else if (l === "style")
        s.style = Ft([s.style, a.style]);
      else if (jn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Ve(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function us(e, s, o, a = null) {
  os(e, s, 7, [
    o,
    a
  ]);
}
const Vu = er();
let Bu = 0;
function Wu(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || Vu, r = {
    uid: Bu++,
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
    scope: new pc(
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
    propsOptions: rr(a, l),
    emitsOptions: or(a, l),
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = ku.bind(null, r), e.ce && e.ce(r), r;
}
let $t = null;
const ll = () => $t || wt;
let Fn, Da;
{
  const e = Yn(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Fn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => $t = o
  ), Da = s(
    "__VUE_SSR_SETTERS__",
    (o) => on = o
  );
}
const cn = (e) => {
  const s = $t;
  return Fn(e), e.scope.on(), () => {
    e.scope.off(), Fn(s);
  };
}, Pl = () => {
  $t && $t.scope.off(), Fn(null);
};
function gr(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Gu(e, s = !1, o = !1) {
  s && Da(s);
  const { props: a, children: l } = e.vnode, r = gr(e);
  Su(e, a, r, s), Ru(e, l, o || s);
  const c = r ? ju(e, s) : void 0;
  return s && Da(!1), c;
}
function ju(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, iu);
  const { setup: a } = o;
  if (a) {
    Es();
    const l = e.setupContext = a.length > 1 ? Ku(e) : null, r = cn(e), c = rn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = ui(c);
    if (Ts(), r(), (u || e.sp) && !yo(e) && Hi(e), u) {
      if (c.then(Pl, Pl), s)
        return c.then((d) => {
          Ml(e, d);
        }).catch((d) => {
          Qn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Ml(e, c);
  } else
    hr(e);
}
function Ml(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : ot(s) && (e.setupState = Pi(s)), hr(e);
}
function hr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || gs);
  {
    const l = cn(e);
    Es();
    try {
      ru(e);
    } finally {
      Ts(), l();
    }
  }
}
const Hu = {
  get(e, s) {
    return _t(e, "get", ""), e[s];
  }
};
function Ku(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function sa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pi(Oc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in jo)
        return jo[o](e);
    },
    has(s, o) {
      return o in s || o in jo;
    }
  })) : e.proxy;
}
function qu(e, s = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Yu(e) {
  return Ge(e) && "__vccOpts" in e;
}
const U = (e, s) => Vc(e, s, on);
function un(e, s, o) {
  try {
    zn(-1);
    const a = arguments.length;
    return a === 2 ? ot(s) && !Ve(s) ? sn(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && sn(o) && (o = [o]), S(e, s, o));
  } finally {
    zn(1);
  }
}
const Ju = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let La;
const Dl = typeof window < "u" && window.trustedTypes;
if (Dl)
  try {
    La = /* @__PURE__ */ Dl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yr = La ? (e) => La.createHTML(e) : (e) => e, Qu = "http://www.w3.org/2000/svg", Xu = "http://www.w3.org/1998/Math/MathML", $s = typeof document < "u" ? document : null, Ll = $s && /* @__PURE__ */ $s.createElement("template"), Zu = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? $s.createElementNS(Qu, e) : s === "mathml" ? $s.createElementNS(Xu, e) : o ? $s.createElement(e, { is: o }) : $s.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => $s.createTextNode(e),
  createComment: (e) => $s.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $s.querySelector(e),
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
      Ll.innerHTML = yr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Ll.content;
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
}, Ls = "transition", Mo = "animation", bo = Symbol("_vtc"), wr = {
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
}, kr = /* @__PURE__ */ pt(
  {},
  Bi,
  wr
), ed = (e) => (e.displayName = "Transition", e.props = kr, e), td = /* @__PURE__ */ ed(
  (e, { slots: s }) => un(Yc, _r(e), s)
), Js = (e, s = []) => {
  Ve(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Al = (e) => e ? Ve(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function _r(e) {
  const s = {};
  for (const W in e)
    W in wr || (s[W] = e[W]);
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
  } = e, k = sd(l), C = k && k[0], b = k && k[1], {
    onBeforeEnter: x,
    onEnter: M,
    onEnterCancelled: P,
    onLeave: T,
    onLeaveCancelled: L,
    onBeforeAppear: V = x,
    onAppear: B = M,
    onAppearCancelled: E = P
  } = s, I = (W, O, j, X) => {
    W._enterCancelled = X, As(W, O ? v : u), As(W, O ? m : c), j && j();
  }, A = (W, O) => {
    W._isLeaving = !1, As(W, g), As(W, p), As(W, w), O && O();
  }, Z = (W) => (O, j) => {
    const X = W ? B : M, z = () => I(O, W, j);
    Js(X, [O, z]), Ol(() => {
      As(O, W ? d : r), fs(O, W ? v : u), Al(X) || Nl(O, a, C, z);
    });
  };
  return pt(s, {
    onBeforeEnter(W) {
      Js(x, [W]), fs(W, r), fs(W, c);
    },
    onBeforeAppear(W) {
      Js(V, [W]), fs(W, d), fs(W, m);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(W, O) {
      W._isLeaving = !0;
      const j = () => A(W, O);
      fs(W, g), W._enterCancelled ? (fs(W, w), Aa(W)) : (Aa(W), fs(W, w)), Ol(() => {
        W._isLeaving && (As(W, g), fs(W, p), Al(T) || Nl(W, a, b, j));
      }), Js(T, [W, j]);
    },
    onEnterCancelled(W) {
      I(W, !1, void 0, !0), Js(P, [W]);
    },
    onAppearCancelled(W) {
      I(W, !0, void 0, !0), Js(E, [W]);
    },
    onLeaveCancelled(W) {
      A(W), Js(L, [W]);
    }
  });
}
function sd(e) {
  if (e == null)
    return null;
  if (ot(e))
    return [pa(e.enter), pa(e.leave)];
  {
    const s = pa(e);
    return [s, s];
  }
}
function pa(e) {
  return ic(e);
}
function fs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[bo] || (e[bo] = /* @__PURE__ */ new Set())).add(s);
}
function As(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[bo];
  o && (o.delete(s), o.size || (e[bo] = void 0));
}
function Ol(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let od = 0;
function Nl(e, s, o, a) {
  const l = e._endId = ++od, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = br(e, s);
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
function br(e, s) {
  const o = window.getComputedStyle(e), a = (k) => (o[k] || "").split(", "), l = a(`${Ls}Delay`), r = a(`${Ls}Duration`), c = Ul(l, r), u = a(`${Mo}Delay`), d = a(`${Mo}Duration`), m = Ul(u, d);
  let v = null, g = 0, w = 0;
  s === Ls ? c > 0 && (v = Ls, g = c, w = r.length) : s === Mo ? m > 0 && (v = Mo, g = m, w = d.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Ls : Mo : null, w = v ? v === Ls ? r.length : d.length : 0);
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
function Ul(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => zl(o) + zl(e[a])));
}
function zl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Aa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function nd(e, s, o) {
  const a = e[bo];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Fl = Symbol("_vod"), ad = Symbol("_vsh"), ld = Symbol(""), id = /(?:^|;)\s*display\s*:/;
function rd(e, s, o) {
  const a = e.style, l = ut(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (ut(s))
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
      const c = a[ld];
      c && (o += ";" + c), a.cssText = o, r = id.test(o);
    }
  } else s && e.removeAttribute("style");
  Fl in e && (e[Fl] = r ? a.display : "", e[ad] && (a.display = "none"));
}
const Vl = /\s*!important$/;
function Rn(e, s, o) {
  if (Ve(o))
    o.forEach((a) => Rn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = cd(e, s);
    Vl.test(o) ? e.setProperty(
      Bs(a),
      o.replace(Vl, ""),
      "important"
    ) : e[a] = o;
  }
}
const Bl = ["Webkit", "Moz", "ms"], ga = {};
function cd(e, s) {
  const o = ga[s];
  if (o)
    return o;
  let a = Kt(s);
  if (a !== "filter" && a in e)
    return ga[s] = a;
  a = Kn(a);
  for (let l = 0; l < Bl.length; l++) {
    const r = Bl[l] + a;
    if (r in e)
      return ga[s] = r;
  }
  return s;
}
const Wl = "http://www.w3.org/1999/xlink";
function Gl(e, s, o, a, l, r = mc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Wl, s.slice(6, s.length)) : e.setAttributeNS(Wl, s, o) : o == null || r && !vi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : ts(o) ? String(o) : o
  );
}
function jl(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? yr(o) : o);
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
    u === "boolean" ? o = vi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Is(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function ud(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const Hl = Symbol("_vei");
function dd(e, s, o, a, l = null) {
  const r = e[Hl] || (e[Hl] = {}), c = r[s];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = fd(s);
    if (a) {
      const m = r[s] = pd(
        a,
        l
      );
      Is(e, u, m, d);
    } else c && (ud(e, u, c, d), r[s] = void 0);
  }
}
const Kl = /(?:Once|Passive|Capture)$/;
function fd(e) {
  let s;
  if (Kl.test(e)) {
    s = {};
    let a;
    for (; a = e.match(Kl); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let ha = 0;
const md = /* @__PURE__ */ Promise.resolve(), vd = () => ha || (md.then(() => ha = 0), ha = Date.now());
function pd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    os(
      gd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = vd(), o;
}
function gd(e, s) {
  if (Ve(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return s;
}
const ql = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hd = (e, s, o, a, l, r) => {
  const c = l === "svg";
  s === "class" ? nd(e, a, c) : s === "style" ? rd(e, o, a) : jn(s) ? Ba(s) || dd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : yd(e, s, a, c)) ? (jl(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Gl(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ut(a)) ? jl(e, Kt(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), Gl(e, s, a, c));
};
function yd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ql(s) && Ge(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ql(s) && ut(o) ? !1 : s in e;
}
const $r = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), Vn = Symbol("_moveCb"), Yl = Symbol("_enterCb"), wd = (e) => (delete e.props.mode, e), kd = /* @__PURE__ */ wd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, kr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = ll(), a = Vi();
    let l, r;
    return qi(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!xd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(bd), l.forEach($d);
      const u = l.filter(Cd);
      Aa(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Vn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Vn] = null, As(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), u = _r(c);
      let d = c.tag || H;
      if (l = [], r)
        for (let m = 0; m < r.length; m++) {
          const v = r[m];
          v.el && v.el instanceof Element && (l.push(v), oo(
            v,
            en(
              v,
              u,
              a,
              o
            )
          ), $r.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = s.default ? el(s.default()) : [];
      for (let m = 0; m < r.length; m++) {
        const v = r[m];
        v.key != null && oo(
          v,
          en(v, u, a, o)
        );
      }
      return S(d, null, r);
    };
  }
}), _d = kd;
function bd(e) {
  const s = e.el;
  s[Vn] && s[Vn](), s[Yl] && s[Yl]();
}
function $d(e) {
  Cr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Cd(e) {
  const s = $r.get(e), o = Cr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function xd(e, s, o) {
  const a = e.cloneNode(), l = e[bo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = br(a);
  return r.removeChild(a), c;
}
const Vs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ve(s) ? (o) => Sn(s, o) : s;
};
function Sd(e) {
  e.target.composing = !0;
}
function Jl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const jt = Symbol("_assign");
function Ql(e, s, o) {
  return s && (e = e.trim()), o && (e = qn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[jt] = Vs(l);
    const r = a || l.props && l.props.type === "number";
    Is(e, s ? "change" : "input", (c) => {
      c.target.composing || e[jt](Ql(e.value, o, r));
    }), (o || r) && Is(e, "change", () => {
      e.value = Ql(e.value, o, r);
    }), s || (Is(e, "compositionstart", Sd), Is(e, "compositionend", Jl), Is(e, "change", Jl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[jt] = Vs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? qn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, nn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[jt] = Vs(o), Is(e, "change", () => {
      const a = e._modelValue, l = $o(e), r = e.checked, c = e[jt];
      if (Ve(a)) {
        const u = ja(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const m = [...a];
          m.splice(u, 1), c(m);
        }
      } else if (Co(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(xr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Xl,
  beforeUpdate(e, s, o) {
    e[jt] = Vs(o), Xl(e, s, o);
  }
};
function Xl(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Ve(s))
    l = ja(s, a.props.value) > -1;
  else if (Co(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = so(s, xr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Zt = {
  created(e, { value: s }, o) {
    e.checked = so(s, o.props.value), e[jt] = Vs(o), Is(e, "change", () => {
      e[jt]($o(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[jt] = Vs(a), s !== o && (e.checked = so(s, a.props.value));
  }
}, hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Co(s);
    Is(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? qn($o(c)) : $o(c)
      );
      e[jt](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, gt(() => {
        e._assigning = !1;
      });
    }), e[jt] = Vs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Zl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[jt] = Vs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Zl(e, s);
  }
};
function Zl(e, s) {
  const o = e.multiple, a = Ve(s);
  if (!(o && !a && !Co(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = $o(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = ja(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (so($o(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function $o(e) {
  return "_value" in e ? e._value : e.value;
}
function xr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const oa = {
  created(e, s, o) {
    _n(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    _n(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    _n(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    _n(e, s, o, a, "updated");
  }
};
function Id(e, s) {
  switch (e) {
    case "SELECT":
      return hs;
    case "TEXTAREA":
      return zt;
    default:
      switch (s) {
        case "checkbox":
          return nn;
        case "radio":
          return Zt;
        default:
          return zt;
      }
  }
}
function _n(e, s, o, a, l) {
  const c = Id(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, a);
}
const Ed = ["ctrl", "shift", "alt", "meta"], Td = {
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
  exact: (e, s) => Ed.some((o) => e[`${o}Key`] && !s.includes(o))
}, it = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = Td[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...r);
  }));
}, Rd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ht = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Bs(l.key);
    if (s.some(
      (c) => c === r || Rd[c] === r
    ))
      return e(l);
  }));
}, Pd = /* @__PURE__ */ pt({ patchProp: hd }, Zu);
let ei;
function Md() {
  return ei || (ei = Mu(Pd));
}
const na = ((...e) => {
  const s = Md().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = Ld(a);
    if (!l) return;
    const r = s._component;
    !Ge(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Dd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function Dd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ld(e) {
  return ut(e) ? document.querySelector(e) : e;
}
const Ad = { class: "panel-layout" }, Od = {
  key: 0,
  class: "panel-layout-header"
}, Nd = {
  key: 1,
  class: "panel-layout-search"
}, Ud = { class: "panel-layout-content" }, zd = {
  key: 2,
  class: "panel-layout-footer"
}, Fd = /* @__PURE__ */ fe({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Ad, [
      s.$slots.header ? (n(), i("div", Od, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Nd, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Ud, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", zd, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ge = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Mt = /* @__PURE__ */ ge(Fd, [["__scopeId", "data-v-21565df9"]]), Vd = {
  key: 0,
  class: "panel-title-prefix"
}, Bd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Wd = /* @__PURE__ */ fe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), D(tl(`h${e.level}`), {
      class: Se(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", Vd, f(e.prefix), 1)) : (n(), i("span", Bd)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Gd = /* @__PURE__ */ ge(Wd, [["__scopeId", "data-v-c3875efc"]]), jd = ["title"], Hd = ["width", "height"], Kd = /* @__PURE__ */ fe({
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
      ])], 8, Hd))
    ], 8, jd));
  }
}), Sr = /* @__PURE__ */ ge(Kd, [["__scopeId", "data-v-6fc7f16d"]]), qd = { class: "header-left" }, Yd = {
  key: 0,
  class: "header-actions"
}, Jd = /* @__PURE__ */ fe({
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
      t("div", qd, [
        S(Gd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), D(Sr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", Yd, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ ge(Jd, [["__scopeId", "data-v-55a62cd6"]]), Qd = {
  key: 0,
  class: "section-title-count"
}, Xd = {
  key: 1,
  class: "section-title-icon"
}, Zd = /* @__PURE__ */ fe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), D(tl(`h${e.level}`), {
      class: Se(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Qd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", Xd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nt = /* @__PURE__ */ ge(Zd, [["__scopeId", "data-v-559361eb"]]), ef = { class: "status-grid" }, tf = { class: "status-grid__columns" }, sf = { class: "status-grid__column" }, of = { class: "status-grid__title" }, nf = { class: "status-grid__column status-grid__column--right" }, af = { class: "status-grid__title" }, lf = {
  key: 0,
  class: "status-grid__footer"
}, rf = /* @__PURE__ */ fe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", ef, [
      t("div", tf, [
        t("div", sf, [
          t("h4", of, f(e.leftTitle), 1),
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", nf, [
          t("h4", af, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", lf, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), cf = /* @__PURE__ */ ge(rf, [["__scopeId", "data-v-73b7ba3f"]]), uf = {
  key: 0,
  class: "status-item__icon"
}, df = {
  key: 1,
  class: "status-item__count"
}, ff = { class: "status-item__label" }, mf = /* @__PURE__ */ fe({
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
    return (a, l) => (n(), i("div", {
      class: Se(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", uf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", df, f(e.count), 1)) : y("", !0),
      t("span", ff, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ ge(mf, [["__scopeId", "data-v-6f929183"]]), vf = { class: "issue-card__header" }, pf = { class: "issue-card__icon" }, gf = { class: "issue-card__title" }, hf = {
  key: 0,
  class: "issue-card__content"
}, yf = {
  key: 0,
  class: "issue-card__description"
}, wf = {
  key: 1,
  class: "issue-card__items"
}, kf = {
  key: 2,
  class: "issue-card__actions"
}, _f = /* @__PURE__ */ fe({
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
    return (a, l) => (n(), i("div", {
      class: Se(["issue-card", o.value])
    }, [
      t("div", vf, [
        t("span", pf, f(e.icon), 1),
        t("h4", gf, f(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", hf, [
        e.description ? (n(), i("p", yf, f(e.description), 1)) : y("", !0),
        Ke(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", wf, [
        (n(!0), i(H, null, ve(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", kf, [
        Ke(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ ge(_f, [["__scopeId", "data-v-df6aa348"]]), bf = ["type", "disabled"], $f = {
  key: 0,
  class: "spinner"
}, Cf = /* @__PURE__ */ fe({
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
      e.loading ? (n(), i("span", $f)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, bf));
  }
}), de = /* @__PURE__ */ ge(Cf, [["__scopeId", "data-v-772abe47"]]), xf = { class: "empty-state" }, Sf = {
  key: 0,
  class: "empty-icon"
}, If = { class: "empty-message" }, Ef = /* @__PURE__ */ fe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", xf, [
      e.icon ? (n(), i("div", Sf, f(e.icon), 1)) : y("", !0),
      t("p", If, f(e.message), 1),
      e.actionLabel ? (n(), D(de, {
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
}), ns = /* @__PURE__ */ ge(Ef, [["__scopeId", "data-v-4466284f"]]), Tf = /* @__PURE__ */ fe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Se(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Pn = /* @__PURE__ */ ge(Tf, [["__scopeId", "data-v-75e9eeb8"]]), Rf = /* @__PURE__ */ fe({
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
}), Oa = /* @__PURE__ */ ge(Rf, [["__scopeId", "data-v-2f186e4c"]]), Pf = { class: "detail-row" }, Mf = /* @__PURE__ */ fe({
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
    return (s, o) => (n(), i("div", Pf, [
      S(Pn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), D(Oa, {
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
}), ft = /* @__PURE__ */ ge(Mf, [["__scopeId", "data-v-ef15664a"]]), Df = { class: "modal-header" }, Lf = { class: "modal-body" }, Af = { class: "status-section" }, Of = {
  key: 0,
  class: "status-section"
}, Nf = { class: "section-header-row" }, Uf = {
  key: 0,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Ff = { class: "workflow-group-title" }, Vf = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Wf = { class: "workflow-issue" }, Gf = {
  key: 1,
  class: "workflow-group"
}, jf = { class: "workflow-group-header" }, Hf = { class: "workflow-group-title" }, Kf = { class: "workflow-list" }, qf = { class: "workflow-name" }, Yf = { class: "workflow-issue" }, Jf = {
  key: 2,
  class: "workflow-group"
}, Qf = { class: "workflow-group-header" }, Xf = { class: "workflow-group-title" }, Zf = { class: "workflow-list" }, em = { class: "workflow-name" }, tm = {
  key: 3,
  class: "workflow-group"
}, sm = { class: "workflow-group-header" }, om = { class: "workflow-group-title" }, nm = { class: "workflow-list" }, am = { class: "workflow-name" }, lm = {
  key: 4,
  class: "workflow-group"
}, im = { class: "workflow-group-header" }, rm = { class: "workflow-group-title" }, cm = { class: "workflow-list" }, um = { class: "workflow-name" }, dm = {
  key: 5,
  class: "workflow-group"
}, fm = { class: "workflow-group-title" }, mm = { class: "expand-icon" }, vm = {
  key: 0,
  class: "workflow-list"
}, pm = { class: "workflow-name" }, gm = {
  key: 1,
  class: "status-section"
}, hm = {
  key: 0,
  class: "change-group"
}, ym = { class: "change-group-header" }, wm = { class: "change-group-title" }, km = { class: "change-list" }, _m = { class: "node-name" }, bm = {
  key: 0,
  class: "dev-badge"
}, $m = {
  key: 1,
  class: "change-group"
}, Cm = { class: "change-group-header" }, xm = { class: "change-group-title" }, Sm = { class: "change-list" }, Im = { class: "node-name" }, Em = {
  key: 0,
  class: "dev-badge"
}, Tm = {
  key: 2,
  class: "change-group"
}, Rm = { class: "change-list" }, Pm = { class: "change-item" }, Mm = { class: "node-name" }, Dm = {
  key: 3,
  class: "change-group"
}, Lm = {
  key: 2,
  class: "status-section"
}, Am = { class: "section-header-row" }, Om = {
  key: 0,
  class: "drift-item"
}, Nm = { class: "drift-list" }, Um = {
  key: 0,
  class: "drift-list-more"
}, zm = {
  key: 1,
  class: "drift-item"
}, Fm = { class: "drift-list" }, Vm = {
  key: 0,
  class: "drift-list-more"
}, Bm = {
  key: 2,
  class: "drift-item"
}, Wm = { class: "drift-list" }, Gm = { class: "version-actual" }, jm = { class: "version-expected" }, Hm = {
  key: 0,
  class: "drift-list-more"
}, Km = {
  key: 3,
  class: "drift-item"
}, qm = { class: "repair-action" }, Ym = {
  key: 3,
  class: "status-section"
}, Jm = { class: "info-box" }, Qm = { class: "drift-list" }, Xm = {
  key: 0,
  class: "drift-list-more"
}, Zm = {
  key: 4,
  class: "status-section"
}, ev = { class: "warning-box" }, tv = {
  key: 5,
  class: "empty-state-inline"
}, sv = { class: "modal-actions" }, ov = /* @__PURE__ */ fe({
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
    }), dt(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const a = U(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = U(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : k.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = U(() => {
      var w, p, k;
      return ((k = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : k.filter((C) => {
        var x, M, P;
        const b = (P = (M = (x = s.status) == null ? void 0 : x.workflows) == null ? void 0 : M.analyzed) == null ? void 0 : P.find((T) => T.name === C);
        return !b || b.status !== "broken";
      })) || [];
    }), c = U(() => {
      var w, p, k, C, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((k = s.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = U(() => {
      var p, k, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = U(() => {
      var w, p, k, C, b, x;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((k = s.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((x = (b = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), m = U(() => {
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
      var k, C, b, x, M, P, T, L, V, B, E, I, A, Z, W, O, j, X, z, ae, ee, ke;
      return n(), D(kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (be) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", Df, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (be) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", Lf, [
              t("div", Af, [
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
              c.value ? (n(), i("div", Of, [
                t("div", Nf, [
                  S(Nt, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (be) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Uf, [
                  t("div", zf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Ff, "BROKEN (COMMITTED) (" + f(a.value.length) + ")", 1)
                  ]),
                  t("div", Vf, [
                    (n(!0), i(H, null, ve(a.value, (be) => (n(), i("div", {
                      key: be.name,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, f(be.name), 1),
                      t("span", Wf, f(be.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Gf, [
                  t("div", jf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Hf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Kf, [
                    (n(!0), i(H, null, ve(l.value, (be) => (n(), i("div", {
                      key: be.name,
                      class: "workflow-item"
                    }, [
                      t("span", qf, f(be.name), 1),
                      t("span", Yf, f(be.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (k = e.status.workflows) == null ? void 0 : k.new) != null && C.length ? (n(), i("div", Jf, [
                  t("div", Qf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Xf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Zf, [
                    (n(!0), i(H, null, ve(e.status.workflows.new, (be) => (n(), i("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (b = e.status.workflows) == null ? void 0 : b.modified) != null && x.length ? (n(), i("div", tm, [
                  t("div", sm, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", om, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", nm, [
                    (n(!0), i(H, null, ve(e.status.workflows.modified, (be) => (n(), i("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", am, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && P.length ? (n(), i("div", lm, [
                  t("div", im, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", rm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", cm, [
                    (n(!0), i(H, null, ve(e.status.workflows.deleted, (be) => (n(), i("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", um, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", dm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (be) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", fm, "SYNCED (" + f(r.value.length) + ")", 1),
                    t("span", mm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", vm, [
                    (n(!0), i(H, null, ve(r.value, (be) => (n(), i("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", pm, f(be), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", gm, [
                S(Nt, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (L = (T = e.status.git_changes) == null ? void 0 : T.nodes_added) != null && L.length ? (n(), i("div", hm, [
                  t("div", ym, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", wm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", km, [
                    (n(!0), i(H, null, ve(e.status.git_changes.nodes_added, (be) => (n(), i("div", {
                      key: v(be),
                      class: "change-item"
                    }, [
                      t("span", _m, f(v(be)), 1),
                      g(be) ? (n(), i("span", bm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (B = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && B.length ? (n(), i("div", $m, [
                  t("div", Cm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", xm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Sm, [
                    (n(!0), i(H, null, ve(e.status.git_changes.nodes_removed, (be) => (n(), i("div", {
                      key: v(be),
                      class: "change-item"
                    }, [
                      t("span", Im, f(v(be)), 1),
                      g(be) ? (n(), i("span", Em, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (n(), i("div", Tm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Rm, [
                    t("div", Pm, [
                      t("span", Mm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.has_other_changes ? (n(), i("div", Dm, [...p[21] || (p[21] = [
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
              (A = e.status.comparison) != null && A.is_synced ? y("", !0) : (n(), i("div", Lm, [
                t("div", Am, [
                  S(Nt, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (be) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (W = (Z = e.status.comparison) == null ? void 0 : Z.missing_nodes) != null && W.length ? (n(), i("div", Om, [
                  S(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Nm, [
                    (n(!0), i(H, null, ve(e.status.comparison.missing_nodes.slice(0, 10), (be) => (n(), i("div", {
                      key: be,
                      class: "drift-list-item"
                    }, " - " + f(be), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Um, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (j = (O = e.status.comparison) == null ? void 0 : O.extra_nodes) != null && j.length ? (n(), i("div", zm, [
                  S(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Fm, [
                    (n(!0), i(H, null, ve(e.status.comparison.extra_nodes.slice(0, 10), (be) => (n(), i("div", {
                      key: be,
                      class: "drift-list-item"
                    }, " - " + f(be), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Vm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (z = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && z.length ? (n(), i("div", Bm, [
                  S(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Wm, [
                    (n(!0), i(H, null, ve(e.status.comparison.version_mismatches.slice(0, 10), (be) => (n(), i("div", {
                      key: be.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(be.name) + ": ", 1),
                      t("span", Gm, f(be.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", jm, f(be.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Hm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ae = e.status.comparison) == null ? void 0 : ae.packages_in_sync) === !1 ? (n(), i("div", Km, [
                  S(ft, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", qm, [
                  S(de, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (be) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ke = (ee = e.status.comparison) == null ? void 0 : ee.disabled_nodes) != null && ke.length ? (n(), i("div", Ym, [
                S(Nt, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Jm, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Qm, [
                  (n(!0), i(H, null, ve(e.status.comparison.disabled_nodes.slice(0, 10), (be) => (n(), i("div", {
                    key: be,
                    class: "drift-list-item"
                  }, " • " + f(be), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Xm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Zm, [
                S(Nt, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", ev, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (n(), i("div", tv, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", sv, [
              S(de, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (be) => w.$emit("close"))
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
}), nv = /* @__PURE__ */ ge(ov, [["__scopeId", "data-v-e2b37122"]]), av = { class: "health-section-header" }, lv = { class: "suggestions-content" }, iv = { class: "suggestions-text" }, rv = { style: { "margin-top": "var(--cg-space-3)" } }, cv = {
  key: 1,
  class: "no-issues-text"
}, uv = /* @__PURE__ */ fe({
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
    const C = U(() => {
      const X = a.status.workflows.analyzed || [], z = X.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return z.length === 0 && a.status.missing_models_count > 0 ? X.filter((ae) => ae.sync_state === "synced") : z;
    });
    function b() {
      const X = C.value;
      X.length !== 0 && (v.value = !0, m("repair-missing-models", X.map((z) => z.name)));
    }
    function x() {
      v.value = !1;
    }
    s({ resetRepairingState: x, resetRepairingEnvironmentState: p, closeDetailModal: k });
    const M = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), P = U(() => a.status.has_changes), T = U(() => {
      const X = a.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), L = U(() => a.status.has_changes || M.value), V = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), B = U(() => a.status.git_changes.has_other_changes), E = U(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter((z) => z.status === "broken")) || [];
    }), I = U(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter(
        (z) => z.has_path_sync_issues && !z.has_issues
      )) || [];
    }), A = U(() => E.value.length > 0), Z = U(() => A.value || I.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), W = U(() => {
      const X = [];
      return a.status.workflows.new.length > 0 && X.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && X.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && X.push(`${a.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), O = U(() => {
      var ae, ee;
      const X = [], z = a.status.comparison;
      return (ae = z.missing_nodes) != null && ae.length && X.push(`${z.missing_nodes.length} missing node${z.missing_nodes.length === 1 ? "" : "s"}`), (ee = z.extra_nodes) != null && ee.length && X.push(`${z.extra_nodes.length} untracked node${z.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), j = U(() => {
      var ae, ee;
      const X = [], z = a.status.comparison;
      return (ae = z.extra_nodes) != null && ae.length && (z.extra_nodes.slice(0, 3).forEach((ke) => {
        X.push(`Untracked: ${ke}`);
      }), z.extra_nodes.length > 3 && X.push(`...and ${z.extra_nodes.length - 3} more untracked`)), (ee = z.missing_nodes) != null && ee.length && (z.missing_nodes.slice(0, 3).forEach((ke) => {
        X.push(`Missing: ${ke}`);
      }), z.missing_nodes.length > 3 && X.push(`...and ${z.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, z) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), D(Qt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: z[0] || (z[0] = (ae) => X.$emit("start-setup"))
              }, {
                default: h(() => [...z[13] || (z[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), D(Qt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: z[1] || (z[1] = (ae) => X.$emit("view-environments"))
              }, {
                default: h(() => [...z[14] || (z[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), D(Qt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: z[2] || (z[2] = (ae) => X.$emit("create-environment"))
              }, {
                default: h(() => [...z[15] || (z[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: z[4] || (z[4] = (ae) => r.value = !0),
            onMouseleave: z[5] || (z[5] = (ae) => r.value = !1)
          }, [
            t("div", av, [
              S(Nt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...z[16] || (z[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(td, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), D(de, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...z[17] || (z[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            S(cf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, no({
              left: h(() => [
                e.status.workflows.new.length ? (n(), D(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), D(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), D(ds, {
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
                e.status.git_changes.nodes_added.length ? (n(), D(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), D(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), D(ds, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                B.value ? (n(), D(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                P.value && !T.value && !B.value ? (n(), D(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                P.value ? y("", !0) : (n(), D(ds, {
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
                fn: h(() => [
                  z[19] || (z[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", lv, [
                    t("span", iv, f(W.value), 1),
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: z[3] || (z[3] = (ae) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...z[18] || (z[18] = [
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
          e.status.is_detached_head ? (n(), D(Qt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: z[6] || (z[6] = (ae) => X.$emit("create-branch"))
              }, {
                default: h(() => [...z[20] || (z[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", rv, [
            S(Nt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...z[21] || (z[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Z.value ? (n(), i(H, { key: 0 }, [
              E.value.length > 0 ? (n(), D(Qt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: E.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: h(() => [
                  S(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[7] || (z[7] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...z[22] || (z[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              I.value.length > 0 ? (n(), D(Qt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: I.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  S(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[8] || (z[8] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...z[23] || (z[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !A.value ? (n(), D(Qt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  S(de, {
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
                  S(de, {
                    variant: "secondary",
                    size: "sm",
                    onClick: z[9] || (z[9] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...z[24] || (z[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), D(Qt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: O.value,
                items: j.value
              }, {
                actions: h(() => [
                  S(de, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...z[25] || (z[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[10] || (z[10] = (ae) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...z[26] || (z[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), D(Qt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  S(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[11] || (z[11] = (ae) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...z[27] || (z[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : L.value ? (n(), i("span", cv, "No issues")) : (n(), D(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      S(nv, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: z[12] || (z[12] = (ae) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), dv = /* @__PURE__ */ ge(uv, [["__scopeId", "data-v-55fcd77f"]]), fv = ["type", "value", "placeholder", "disabled"], mv = /* @__PURE__ */ fe({
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
        d[0] || (d[0] = Ht((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ht((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, fv));
  }
}), Ko = /* @__PURE__ */ ge(mv, [["__scopeId", "data-v-0380d08f"]]), vv = { class: "branch-create-form" }, pv = { class: "form-actions" }, gv = /* @__PURE__ */ fe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = U(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", vv, [
      S(Ko, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => a.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", pv, [
        S(de, {
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
        S(de, {
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
}), hv = /* @__PURE__ */ ge(gv, [["__scopeId", "data-v-7c500394"]]), yv = { class: "branch-list-item__indicator" }, wv = { class: "branch-list-item__name" }, kv = {
  key: 0,
  class: "branch-list-item__actions"
}, _v = {
  key: 0,
  class: "branch-list-item__current-label"
}, bv = /* @__PURE__ */ fe({
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
      t("span", yv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", wv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", kv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", _v, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), $v = /* @__PURE__ */ ge(bv, [["__scopeId", "data-v-c6581a24"]]), jP = Ws({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const HP = [
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
], KP = {
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
], qP = [
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
function mo() {
  return !1;
}
function Ir() {
  return typeof crypto < "u" && crypto.randomUUID ? Ir() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function Ze() {
  const e = _(!1), s = _(null);
  async function o(Q, _e) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi(Q, _e);
    if (!Oe.ok) {
      const cs = await Oe.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Oe.status}`);
    }
    const De = await Oe.text();
    if (De)
      return JSON.parse(De);
  }
  async function a(Q = !1) {
    return o(Q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(Q, _e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: _e })
    });
  }
  async function r(Q = 10, _e = 0) {
    return o(`/v2/comfygit/log?limit=${Q}&offset=${_e}`);
  }
  async function c(Q, _e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(Q)}&limit=${_e}`);
  }
  async function u(Q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
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
  async function v(Q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q, force: !0 })
    });
  }
  async function g() {
    return o("/v2/comfygit/branches");
  }
  async function w(Q) {
    return o(`/v2/comfygit/commit/${Q}`);
  }
  async function p(Q, _e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Q, force: _e })
    });
  }
  async function k(Q, _e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, start_point: _e })
    });
  }
  async function C(Q, _e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Q, force: _e })
    });
  }
  async function b(Q, _e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: _e })
    });
  }
  async function x() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Q = await a();
        return [{
          name: Q.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + Q.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: Q.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: Q.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function M(Q) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(Q)}`);
    } catch {
      return null;
    }
  }
  async function P(Q, _e) {
    const Oe = { target_env: Q };
    return _e && (Oe.workspace_path = _e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Oe)
    });
  }
  async function T() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function L(Q) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function V() {
    return o("/v2/workspace/environments/create_status");
  }
  async function B(Q = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Q}`);
  }
  async function E(Q) {
    return o(`/v2/workspace/environments/${Q}`, {
      method: "DELETE"
    });
  }
  async function I(Q = !1) {
    try {
      return o(Q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const _e = await a(Q), Oe = [];
      return _e.workflows.new.forEach((De) => {
        Oe.push({ name: De, status: "new", missing_nodes: 0, missing_models: 0, path: De });
      }), _e.workflows.modified.forEach((De) => {
        Oe.push({ name: De, status: "modified", missing_nodes: 0, missing_models: 0, path: De });
      }), _e.workflows.synced.forEach((De) => {
        Oe.push({ name: De, status: "synced", missing_nodes: 0, missing_models: 0, path: De });
      }), Oe;
    }
  }
  async function A(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/details`);
  }
  async function Z(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/resolve`, {
      method: "POST"
    });
  }
  async function W(Q, _e, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: _e, install_models: Oe })
    });
  }
  async function O(Q, _e, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: _e, importance: Oe })
    });
  }
  async function j() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function X() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function z(Q) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Q)}`);
  }
  async function ae(Q) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function ee(Q, _e) {
    return o(`/v2/workspace/models/${Q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function ke(Q, _e) {
    return o(`/v2/workspace/models/${Q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function be(Q) {
    return o(`/v2/workspace/models/${Q}`, {
      method: "DELETE"
    });
  }
  async function Le(Q) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function ze() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ue() {
    return o("/v2/workspace/models/directory");
  }
  async function Ye(Q) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function pe(Q) {
    const _e = new URLSearchParams({ url: Q });
    return o(`/v2/workspace/huggingface/repo-info?${_e}`);
  }
  async function oe() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ce(Q, _e = 10) {
    const Oe = new URLSearchParams({ query: Q, limit: String(_e) });
    return o(`/v2/workspace/huggingface/search?${Oe}`);
  }
  async function ue(Q) {
    try {
      const _e = Q ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Q)}` : "/v2/comfygit/config";
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
  async function Ee(Q, _e) {
    const Oe = _e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(_e)}` : "/v2/comfygit/config";
    return o(Oe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Re(Q, _e) {
    try {
      const Oe = new URLSearchParams();
      return Q && Oe.append("level", Q), _e && Oe.append("lines", _e.toString()), o(`/v2/comfygit/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Fe(Q, _e) {
    try {
      const Oe = new URLSearchParams();
      return Q && Oe.append("level", Q), _e && Oe.append("lines", _e.toString()), o(`/v2/workspace/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function N() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function R() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function F(Q, _e) {
    try {
      const Oe = new URLSearchParams();
      return Q && Oe.append("level", Q), _e && Oe.append("lines", _e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function q() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function ne(Q) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function re() {
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
  async function $e(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/track-dev`, {
      method: "POST"
    });
  }
  async function ie(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/install`, {
      method: "POST"
    });
  }
  async function we(Q) {
    var Lt, cs, To, Ro;
    const _e = Ir(), Oe = ((cs = (Lt = window.app) == null ? void 0 : Lt.api) == null ? void 0 : cs.clientId) ?? ((Ro = (To = window.app) == null ? void 0 : To.api) == null ? void 0 : Ro.initialClientId) ?? "comfygit-panel", De = {
      kind: "install",
      params: {
        id: Q.id,
        version: Q.version || Q.selected_version || "latest",
        selected_version: Q.selected_version || "latest",
        repository: Q.repository || "",
        mode: Q.mode || "remote",
        channel: Q.channel || "default"
      },
      ui_id: _e,
      client_id: Oe
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(De)
    }), console.log("[ComfyGit] Task queued with ui_id:", _e, "for package:", Q.id), o("/v2/manager/queue/start").catch((sc) => {
      console.error("[ComfyGit] Queue start failed:", sc);
    }), { ui_id: _e };
  }
  async function he(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/update`, {
      method: "POST"
    });
  }
  async function Pe(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Ie() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function te(Q, _e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, url: _e })
    });
  }
  async function Y(Q) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Me(Q, _e, Oe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: _e, push_url: Oe })
    });
  }
  async function Ce(Q, _e) {
    const Oe = {};
    return _e && (Oe["X-Git-Auth-Token"] = _e), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/fetch`, {
      method: "POST",
      headers: Oe
    });
  }
  async function ye(Q) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/status`);
    } catch {
      return null;
    }
  }
  async function K(Q = "skip", _e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Q,
        remove_extra_nodes: _e
      })
    });
  }
  async function G(Q, _e) {
    const Oe = _e ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview`;
    return o(Oe);
  }
  async function me(Q, _e = {}) {
    const Oe = { "Content-Type": "application/json" };
    return _e.authToken && (Oe["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({
        model_strategy: _e.modelStrategy || "skip",
        force: _e.force || !1,
        resolutions: _e.resolutions
      })
    });
  }
  async function Be(Q, _e) {
    const Oe = _e ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview`;
    return o(Oe);
  }
  async function et(Q, _e = {}) {
    const Oe = { "Content-Type": "application/json" };
    return _e.authToken && (Oe["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/push`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({ force: _e.force || !1 })
    });
  }
  async function St(Q, _e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: _e })
    });
  }
  async function st(Q) {
    const _e = {
      success: 0,
      failed: []
    };
    for (const Oe of Q)
      try {
        await Z(Oe), _e.success++;
      } catch (De) {
        _e.failed.push({
          name: Oe,
          error: De instanceof Error ? De.message : "Unknown error"
        });
      }
    return _e;
  }
  async function vt(Q) {
    var De;
    const _e = new FormData();
    if (_e.append("file", Q), !((De = window.app) != null && De.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: _e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Oe.ok) {
      const Lt = await Oe.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${Oe.status}`);
    }
    return Oe.json();
  }
  async function qt(Q) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Q)}`
    );
  }
  async function ht(Q, _e, Oe, De) {
    var To;
    const Lt = new FormData();
    if (Lt.append("file", Q), Lt.append("name", _e), Lt.append("model_strategy", Oe), Lt.append("torch_backend", De), !((To = window.app) != null && To.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!cs.ok) {
      const Ro = await cs.json().catch(() => ({}));
      throw new Error(Ro.message || Ro.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function Io() {
    return o("/v2/workspace/import/status");
  }
  async function ls(Q) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Q })
    });
  }
  async function ys(Q, _e, Oe, De) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Q,
        name: _e,
        model_strategy: Oe,
        torch_backend: De
      })
    });
  }
  async function ao() {
    return o("/v2/setup/status");
  }
  async function Yt(Q) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Eo() {
    return o("/v2/setup/initialize_status");
  }
  async function js(Q) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function xe() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function se() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function He(Q, _e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Q, save_key: _e })
    });
  }
  async function yt() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Vt(Q) {
    const _e = Q ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Q)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(_e);
  }
  async function ws(Q) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function ks() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function is(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Ne(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/stop`, {
      method: "POST"
    });
  }
  async function _s(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/start`, {
      method: "POST"
    });
  }
  async function rs(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/status`);
  }
  async function lo(Q) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function io(Q = !1) {
    return o(Q ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Hs() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function le() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function J(Q) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Ae(Q) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function je(Q) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function at() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function mt(Q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/info`);
  }
  async function Jt(Q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances`);
  }
  async function Ks(Q, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function fn(Q, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(_e)}/start`, {
      method: "POST"
    });
  }
  async function mn(Q, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(_e)}/stop`, {
      method: "POST"
    });
  }
  async function vn(Q, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(_e)}`, {
      method: "DELETE"
    });
  }
  async function pn(Q) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: Q })
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
    getEnvironments: x,
    getEnvironmentDetails: M,
    switchEnvironment: P,
    getSwitchProgress: T,
    createEnvironment: L,
    getCreateProgress: V,
    getComfyUIReleases: B,
    deleteEnvironment: E,
    // Workflow Management
    getWorkflows: I,
    getWorkflowDetails: A,
    resolveWorkflow: Z,
    installWorkflowDeps: W,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: j,
    getWorkspaceModels: X,
    getModelDetails: z,
    openFileLocation: ae,
    addModelSource: ee,
    removeModelSource: ke,
    deleteModel: be,
    downloadModel: Le,
    scanWorkspaceModels: ze,
    getModelsDirectory: Ue,
    setModelsDirectory: Ye,
    getHuggingFaceRepoInfo: pe,
    getModelsSubdirectories: oe,
    searchHuggingFaceRepos: ce,
    // Settings
    getConfig: ue,
    updateConfig: Ee,
    // Debug/Logs
    getEnvironmentLogs: Re,
    getWorkspaceLogs: Fe,
    getEnvironmentLogPath: N,
    getWorkspaceLogPath: R,
    getOrchestratorLogs: F,
    getOrchestratorLogPath: q,
    openFile: ne,
    // Node Management
    getNodes: re,
    trackNodeAsDev: $e,
    installNode: ie,
    queueNodeInstall: we,
    updateNode: he,
    uninstallNode: Pe,
    // Git Remotes
    getRemotes: Ie,
    addRemote: te,
    removeRemote: Y,
    updateRemoteUrl: Me,
    fetchRemote: Ce,
    getRemoteSyncStatus: ye,
    // Push/Pull
    getPullPreview: G,
    pullFromRemote: me,
    getPushPreview: Be,
    pushToRemote: et,
    validateMerge: St,
    // Environment Sync
    syncEnvironmentManually: K,
    // Workflow Repair
    repairWorkflowModels: st,
    // Import Operations
    previewTarballImport: vt,
    previewGitImport: ls,
    validateEnvironmentName: qt,
    executeImport: ht,
    executeGitImport: ys,
    getImportProgress: Io,
    // First-Time Setup
    getSetupStatus: ao,
    initializeWorkspace: Yt,
    getInitializeProgress: Eo,
    validatePath: js,
    // Deploy Operations
    getDeploySummary: xe,
    getDataCenters: se,
    testRunPodConnection: He,
    getNetworkVolumes: yt,
    getRunPodGpuTypes: Vt,
    deployToRunPod: ws,
    getRunPodPods: ks,
    terminateRunPodPod: is,
    stopRunPodPod: Ne,
    startRunPodPod: _s,
    getDeploymentStatus: rs,
    exportDeployPackage: lo,
    getStoredRunPodKey: io,
    clearRunPodKey: Hs,
    // Custom Worker Operations
    getCustomWorkers: le,
    addCustomWorker: J,
    removeCustomWorker: Ae,
    testWorkerConnection: je,
    scanForWorkers: at,
    getWorkerSystemInfo: mt,
    getWorkerInstances: Jt,
    deployToWorker: Ks,
    startWorkerInstance: fn,
    stopWorkerInstance: mn,
    terminateWorkerInstance: vn,
    // Git Authentication
    testGitAuth: pn
  };
}
const xv = { class: "base-modal-header" }, Sv = {
  key: 0,
  class: "base-modal-title"
}, Iv = { class: "base-modal-body" }, Ev = {
  key: 0,
  class: "base-modal-loading"
}, Tv = {
  key: 1,
  class: "base-modal-error"
}, Rv = {
  key: 0,
  class: "base-modal-footer"
}, Pv = /* @__PURE__ */ fe({
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
    }), (c, u) => (n(), D(kt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Se(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", xv, [
            Ke(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Sv, f(e.title), 1)) : y("", !0)
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
          t("div", Iv, [
            e.loading ? (n(), i("div", Ev, "Loading...")) : e.error ? (n(), i("div", Tv, f(e.error), 1)) : Ke(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Rv, [
            Ke(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), ct = /* @__PURE__ */ ge(Pv, [["__scopeId", "data-v-8dab1081"]]), Mv = ["type", "disabled"], Dv = {
  key: 0,
  class: "spinner"
}, Lv = /* @__PURE__ */ fe({
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
      e.loading ? (n(), i("span", Dv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Mv));
  }
}), Te = /* @__PURE__ */ ge(Lv, [["__scopeId", "data-v-f3452606"]]), Av = { class: "commit-list" }, Ov = /* @__PURE__ */ fe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", Av, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), Er = /* @__PURE__ */ ge(Ov, [["__scopeId", "data-v-8c5ee761"]]), Nv = { class: "commit-hash" }, Uv = /* @__PURE__ */ fe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = U(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Nv, f(o.value), 1));
  }
}), Tr = /* @__PURE__ */ ge(Uv, [["__scopeId", "data-v-7c333cc6"]]), zv = { class: "commit-message" }, Fv = { class: "commit-date" }, Vv = /* @__PURE__ */ fe({
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
      S(Tr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", zv, f(e.message), 1),
      t("span", Fv, f(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = it(() => {
        }, ["stop"]))
      }, [
        Ke(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rr = /* @__PURE__ */ ge(Vv, [["__scopeId", "data-v-dd7c621b"]]), Bv = { class: "header-info" }, Wv = { class: "branch-name" }, Gv = {
  key: 0,
  class: "current-badge"
}, jv = { class: "branch-meta" }, Hv = { key: 0 }, Kv = {
  key: 0,
  class: "meta-note"
}, qv = {
  key: 0,
  class: "loading"
}, Yv = {
  key: 1,
  class: "empty-state"
}, Jv = /* @__PURE__ */ fe({
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
    }), (c, u) => (n(), D(ct, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        t("div", Bv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Wv, f(e.branchName), 1),
          e.isCurrent ? (n(), i("span", Gv, "CURRENT")) : y("", !0)
        ]),
        S(Te, {
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
        t("div", jv, [
          r.value ? (n(), i("span", Hv, "Loading...")) : (n(), i(H, { key: 1 }, [
            t("span", null, f(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", Kv, "(showing first " + f(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", qv, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", Yv, " No commits found on this branch ")) : (n(), D(Er, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(H, null, ve(a.value, (d) => (n(), D(Rr, {
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
        e.isCurrent ? y("", !0) : (n(), D(de, {
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
        e.isCurrent ? y("", !0) : (n(), D(Te, {
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
}), Qv = /* @__PURE__ */ ge(Jv, [["__scopeId", "data-v-2e5437cc"]]), Xv = {
  key: 2,
  class: "branch-list"
}, Zv = /* @__PURE__ */ fe({
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
    return (v, g) => (n(), D(Mt, null, {
      header: h(() => [
        S(Dt, { title: "BRANCHES" }, {
          actions: h(() => [
            a.value ? y("", !0) : (n(), D(de, {
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
        a.value ? (n(), D(hv, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), D(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", Xv, [
          (n(!0), i(H, null, ve(e.branches, (w) => (n(), D($v, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (n(), D(de, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: it((p) => o("switch", w.name), ["stop"])
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
        l.value ? (n(), D(Qv, {
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
}), ep = /* @__PURE__ */ ge(Zv, [["__scopeId", "data-v-eefdcb00"]]), tp = /* @__PURE__ */ fe({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = U(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), D(Mt, null, {
      header: h(() => [
        S(Dt, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (n(), D(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), D(Er, { key: 1 }, {
          default: h(() => [
            (n(!0), i(H, null, ve(e.commits, (r) => (n(), D(Rr, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                S(de, {
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
}), sp = /* @__PURE__ */ ge(tp, [["__scopeId", "data-v-62a5d9da"]]);
async function bn(e, s) {
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
function op() {
  async function e() {
    try {
      return await bn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await bn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await bn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await bn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const np = {
  key: 0,
  class: "base-title-count"
}, ap = /* @__PURE__ */ fe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), D(tl(`h${e.level}`), {
      class: Se(["base-title", e.variant])
    }, {
      default: h(() => [
        Ke(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", np, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qo = /* @__PURE__ */ ge(ap, [["__scopeId", "data-v-5a01561d"]]), lp = ["value", "disabled"], ip = {
  key: 0,
  value: "",
  disabled: ""
}, rp = ["value"], cp = {
  key: 0,
  class: "base-select-error"
}, up = /* @__PURE__ */ fe({
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
        e.placeholder ? (n(), i("option", ip, f(e.placeholder), 1)) : y("", !0),
        (n(!0), i(H, null, ve(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, f(o(r)), 9, rp))), 128))
      ], 42, lp),
      e.error ? (n(), i("span", cp, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), dp = /* @__PURE__ */ ge(up, [["__scopeId", "data-v-4996bfe0"]]), fp = { class: "popover-header" }, mp = { class: "popover-title" }, vp = { class: "popover-content" }, pp = {
  key: 0,
  class: "popover-actions"
}, gp = /* @__PURE__ */ fe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), D(kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = it(() => {
          }, ["stop"]))
        }, [
          t("div", fp, [
            t("h4", mp, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", vp, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", pp, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ ge(gp, [["__scopeId", "data-v-42815ace"]]), hp = { class: "detail-section" }, yp = {
  key: 0,
  class: "empty-message"
}, wp = { class: "model-header" }, kp = { class: "model-name" }, _p = { class: "model-details" }, bp = { class: "model-row" }, $p = { class: "model-row" }, Cp = { class: "label" }, xp = {
  key: 0,
  class: "model-row model-row-nodes"
}, Sp = { class: "node-list" }, Ip = ["onClick"], Ep = {
  key: 1,
  class: "model-row"
}, Tp = { class: "value" }, Rp = {
  key: 2,
  class: "model-row"
}, Pp = { class: "value error" }, Mp = {
  key: 0,
  class: "model-actions"
}, Dp = { class: "detail-section" }, Lp = {
  key: 0,
  class: "empty-message"
}, Ap = { class: "node-name" }, Op = {
  key: 0,
  class: "node-version"
}, Np = /* @__PURE__ */ fe({
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
    function C(E) {
      switch (E) {
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
    function b(E) {
      switch (E) {
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
    function x(E) {
      if (!E.loaded_by || E.loaded_by.length === 0) return [];
      const I = E.hash || E.filename;
      return p.value.has(I) ? E.loaded_by : E.loaded_by.slice(0, 3);
    }
    function M(E) {
      return p.value.has(E);
    }
    function P(E) {
      p.value.has(E) ? p.value.delete(E) : p.value.add(E), p.value = new Set(p.value);
    }
    async function T() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function L(E, I) {
      g.value[E] = I, v.value = !0;
    }
    async function V(E) {
      try {
        await c(E);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to open file location";
      }
    }
    async function B() {
      if (!v.value) {
        a("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [E, I] of Object.entries(g.value))
          await r(o.workflowName, E, I);
        a("refresh"), a("close");
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Qe(T), (E, I) => (n(), i(H, null, [
      S(ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: I[4] || (I[4] = (A) => a("close"))
      }, {
        body: h(() => [
          u.value ? (n(), i(H, { key: 0 }, [
            t("section", hp, [
              S(qo, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (n(), i("div", yp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, ve(u.value.models, (A) => {
                var Z;
                return n(), i("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  t("div", wp, [
                    I[6] || (I[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", kp, f(A.filename), 1)
                  ]),
                  t("div", _p, [
                    t("div", bp, [
                      I[7] || (I[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Se(["value", C(A.status)])
                      }, f(b(A.status)), 3)
                    ]),
                    t("div", $p, [
                      t("span", Cp, [
                        I[8] || (I[8] = $(" Importance: ", -1)),
                        S(Sr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: I[0] || (I[0] = (W) => w.value = !0)
                        })
                      ]),
                      S(dp, {
                        "model-value": g.value[A.filename] || A.importance,
                        options: k,
                        "onUpdate:modelValue": (W) => L(A.filename, W)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (n(), i("div", xp, [
                      I[9] || (I[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Sp, [
                        (n(!0), i(H, null, ve(x(A), (W, O) => (n(), i("div", {
                          key: `${W.node_id}-${O}`,
                          class: "node-reference"
                        }, f(W.node_type) + " (Node #" + f(W.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (W) => P(A.hash || A.filename)
                        }, f(M(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, Ip)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    A.size_mb ? (n(), i("div", Ep, [
                      I[10] || (I[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Tp, f(A.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    A.has_category_mismatch ? (n(), i("div", Rp, [
                      I[13] || (I[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Pp, [
                        I[11] || (I[11] = $(" In ", -1)),
                        t("code", null, f(A.actual_category) + "/", 1),
                        I[12] || (I[12] = $(" but loader needs ", -1)),
                        t("code", null, f((Z = A.expected_categories) == null ? void 0 : Z[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  A.status !== "available" ? (n(), i("div", Mp, [
                    A.status === "downloadable" ? (n(), D(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: I[1] || (I[1] = (W) => a("resolve"))
                    }, {
                      default: h(() => [...I[14] || (I[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (n(), D(Te, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => V(A.file_path)
                    }, {
                      default: h(() => [...I[15] || (I[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (n(), D(Te, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: I[2] || (I[2] = (W) => a("resolve"))
                    }, {
                      default: h(() => [...I[16] || (I[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", Dp, [
              S(qo, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (n(), i("div", Lp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, ve(u.value.nodes, (A) => (n(), i("div", {
                key: A.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Se(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, f(A.status === "installed" ? "✓" : "✕"), 3),
                t("span", Ap, f(A.name), 1),
                A.version ? (n(), i("span", Op, "v" + f(A.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          S(Te, {
            variant: "secondary",
            onClick: I[3] || (I[3] = (A) => a("close"))
          }, {
            default: h(() => [...I[17] || (I[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (n(), D(Te, {
            key: 0,
            variant: "primary",
            onClick: B
          }, {
            default: h(() => [...I[18] || (I[18] = [
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
        onClose: I[5] || (I[5] = (A) => w.value = !1)
      }, {
        content: h(() => [...I[19] || (I[19] = [
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
}), Up = /* @__PURE__ */ ge(Np, [["__scopeId", "data-v-668728e6"]]), Je = Ws({
  items: [],
  status: "idle"
});
let vs = null;
function Pr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ya(e) {
  return Je.items.find((s) => s.id === e);
}
async function vo() {
  if (Je.status === "downloading") return;
  const e = Je.items.find((s) => s.status === "queued");
  if (!e) {
    Je.status = "idle";
    return;
  }
  Je.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await zp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Je.status = "idle", vo();
  }
}
async function zp(e) {
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
async function Fp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Je.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Pr(),
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
function xo() {
  function e(b) {
    for (const x of b) {
      if (Je.items.some(
        (T) => T.url === x.url && T.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const P = {
        id: Pr(),
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
      Je.items.push(P);
    }
    Je.status === "idle" && vo();
  }
  async function s(b) {
    const x = ya(b);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), x.status = "failed", x.error = "Cancelled by user", Je.status = "idle", vo();
      } else if (x.status === "queued") {
        const M = Je.items.findIndex((P) => P.id === b);
        M >= 0 && Je.items.splice(M, 1);
      }
    }
  }
  function o(b) {
    const x = ya(b);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, Je.status === "idle" && vo());
  }
  function a(b) {
    const x = ya(b);
    !x || x.status !== "paused" || (x.status = "queued", Je.status === "idle" && vo());
  }
  function l() {
    const b = Je.items.filter((x) => x.status === "paused");
    for (const x of b)
      x.status = "queued";
    Je.status === "idle" && vo();
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
  const d = U(
    () => Je.items.find((b) => b.status === "downloading")
  ), m = U(
    () => Je.items.filter((b) => b.status === "queued")
  ), v = U(
    () => Je.items.filter((b) => b.status === "completed")
  ), g = U(
    () => Je.items.filter((b) => b.status === "failed")
  ), w = U(
    () => Je.items.filter((b) => b.status === "paused")
  ), p = U(() => Je.items.length > 0), k = U(
    () => Je.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = U(
    () => Je.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Dn(Je),
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
    loadPendingDownloads: Fp
  };
}
function Mr() {
  const e = _(null), s = _(null), o = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(M, P) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(M, P);
    if (!T.ok) {
      const V = await T.json().catch(() => ({})), B = V.error || V.message || `Request failed: ${T.status}`;
      throw new Error(B);
    }
    return T.json();
  }
  async function u(M) {
    l.value = !0, r.value = null;
    try {
      let P;
      return mo() || (P = await c(
        `/v2/comfygit/workflow/${M}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = P, P;
    } catch (P) {
      const T = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = T, P;
    } finally {
      l.value = !1;
    }
  }
  async function d(M, P, T, L) {
    l.value = !0, r.value = null;
    try {
      let V;
      if (!mo()) {
        const B = Object.fromEntries(P), E = Object.fromEntries(T), I = L ? Array.from(L) : [];
        V = await c(
          `/v2/comfygit/workflow/${M}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: B,
              model_choices: E,
              skipped_packages: I
            })
          }
        );
      }
      return s.value = V, V;
    } catch (V) {
      const B = V instanceof Error ? V.message : "Unknown error occurred";
      throw r.value = B, V;
    } finally {
      l.value = !1;
    }
  }
  async function m(M, P = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return mo() || (T = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: P })
        }
      )), o.value = T.results, T.results;
    } catch (T) {
      const L = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = L, T;
    } finally {
      l.value = !1;
    }
  }
  async function v(M, P = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return mo() || (T = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: M, limit: P })
        }
      )), a.value = T.results, T.results;
    } catch (T) {
      const L = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = L, T;
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
      return mo(), await k(M);
    } catch (P) {
      const T = P instanceof Error ? P.message : "Failed to install nodes";
      throw g.installError = T, P;
    }
  }
  async function k(M) {
    var T;
    const P = await c(
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
      const L = new Map(((T = P.failed) == null ? void 0 : T.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < g.nodesToInstall.length; V++) {
        const B = g.nodesToInstall[V], E = L.get(B);
        g.nodeInstallProgress.completedNodes.push({
          node_id: B,
          success: !E,
          error: E
        });
      }
    }
    return g.nodesInstalled = P.nodes_installed, g.needsRestart = P.nodes_installed.length > 0, P.failed && P.failed.length > 0 && (g.installError = `${P.failed.length} package(s) failed to install`), P;
  }
  async function C(M, P, T) {
    w(), g.phase = "resolving", r.value = null;
    const L = Object.fromEntries(P), V = Object.fromEntries(T);
    try {
      const B = await fetch(`/v2/comfygit/workflow/${M}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: L,
          model_choices: V
        })
      });
      if (!B.ok)
        throw new Error(`Request failed: ${B.status}`);
      if (!B.body)
        throw new Error("No response body");
      const E = B.body.getReader(), I = new TextDecoder();
      let A = "";
      for (; ; ) {
        const { done: Z, value: W } = await E.read();
        if (Z) break;
        A += I.decode(W, { stream: !0 });
        const O = A.split(`

`);
        A = O.pop() || "";
        for (const j of O) {
          if (!j.trim()) continue;
          const X = j.split(`
`);
          let z = "", ae = "";
          for (const ee of X)
            ee.startsWith("event: ") ? z = ee.slice(7) : ee.startsWith("data: ") && (ae = ee.slice(6));
          if (ae)
            try {
              const ee = JSON.parse(ae);
              b(z, ee);
            } catch (ee) {
              console.warn("Failed to parse SSE event:", ee);
            }
        }
      }
    } catch (B) {
      const E = B instanceof Error ? B.message : "Unknown error occurred";
      throw r.value = E, g.error = E, g.phase = "error", B;
    }
  }
  function b(M, P) {
    switch (M) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = P.total;
        break;
      case "file_start":
        g.currentFile = P.filename, g.currentFileIndex = P.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = P.downloaded, g.bytesTotal = P.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: P.filename,
          success: P.success,
          error: P.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = P.nodes_to_install || [], P.download_results && (g.completedFiles = P.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = P.message, g.phase = "error", r.value = P.message;
        break;
    }
  }
  function x(M, P) {
    const { addToQueue: T } = xo(), L = P.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: M,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return L.length > 0 && T(L), L.length;
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
const Vp = { class: "resolution-stepper" }, Bp = { class: "stepper-header" }, Wp = ["onClick"], Gp = {
  key: 0,
  class: "step-icon"
}, jp = {
  key: 1,
  class: "step-number"
}, Hp = { class: "step-label" }, Kp = {
  key: 0,
  class: "step-connector"
}, qp = { class: "stepper-content" }, Yp = /* @__PURE__ */ fe({
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
    return (m, v) => (n(), i("div", Vp, [
      t("div", Bp, [
        (n(!0), i(H, null, ve(e.steps, (g, w) => (n(), i("div", {
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
            l(g.id) ? (n(), i("span", Gp, "✓")) : (n(), i("span", jp, f(w + 1), 1))
          ], 2),
          t("div", Hp, f(g.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Kp)) : y("", !0)
        ], 10, Wp))), 128))
      ]),
      t("div", qp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Jp = /* @__PURE__ */ ge(Yp, [["__scopeId", "data-v-2a7b3af8"]]), Qp = /* @__PURE__ */ fe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Se(["confidence-badge", a.value, e.size])
    }, f(l.value), 3));
  }
}), Bn = /* @__PURE__ */ ge(Qp, [["__scopeId", "data-v-17ec4b80"]]), Xp = { class: "node-info" }, Zp = { class: "node-info-text" }, eg = { class: "item-body" }, tg = {
  key: 0,
  class: "resolved-state"
}, sg = {
  key: 1,
  class: "multiple-options"
}, og = { class: "options-list" }, ng = ["onClick"], ag = ["name", "value", "checked", "onChange"], lg = { class: "option-content" }, ig = { class: "option-header" }, rg = { class: "option-package-id" }, cg = {
  key: 0,
  class: "option-title"
}, ug = { class: "option-meta" }, dg = {
  key: 0,
  class: "installed-badge"
}, fg = { class: "action-buttons" }, mg = {
  key: 2,
  class: "unresolved"
}, vg = {
  key: 0,
  class: "searching-state"
}, pg = { class: "options-list" }, gg = ["onClick"], hg = ["name", "value"], yg = { class: "option-content" }, wg = { class: "option-header" }, kg = { class: "option-package-id" }, _g = {
  key: 0,
  class: "option-description"
}, bg = { class: "option-meta" }, $g = {
  key: 0,
  class: "installed-badge"
}, Cg = {
  key: 2,
  class: "unresolved-message"
}, xg = { class: "action-buttons" }, Sg = /* @__PURE__ */ fe({
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
    const r = U(() => !!o.choice);
    U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.package_id;
    });
    const c = U(() => {
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
      t("div", Xp, [
        t("span", Zp, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Se(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", eg, [
        r.value ? (n(), i("div", tg, [
          S(Te, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", sg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", og, [
            (n(!0), i(H, null, ve(e.options, (v, g) => (n(), i("label", {
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
              }, null, 40, ag),
              t("div", lg, [
                t("div", ig, [
                  t("span", rg, f(v.package_id), 1),
                  S(Bn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (n(), i("div", cg, f(v.title), 1)) : y("", !0),
                t("div", ug, [
                  v.is_installed ? (n(), i("span", dg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, ng))), 128))
          ]),
          t("div", fg, [
            S(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
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
        ])) : (n(), i("div", mg, [
          e.isSearching ? (n(), i("div", vg, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(H, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", pg, [
              (n(!0), i(H, null, ve(e.searchResults.slice(0, 5), (v, g) => (n(), i("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, hg),
                t("div", yg, [
                  t("div", wg, [
                    t("span", kg, f(v.package_id), 1),
                    S(Bn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (n(), i("div", _g, f(l(v.description)), 1)) : y("", !0),
                  t("div", bg, [
                    v.is_installed ? (n(), i("span", $g, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, gg))), 128))
            ])
          ], 64)) : (n(), i("div", Cg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", xg, [
            S(Te, {
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
            S(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
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
}), Ig = /* @__PURE__ */ ge(Sg, [["__scopeId", "data-v-c2997d1d"]]), Eg = { class: "item-navigator" }, Tg = { class: "nav-item-info" }, Rg = ["title"], Pg = { class: "nav-controls" }, Mg = { class: "nav-arrows" }, Dg = ["disabled"], Lg = ["disabled"], Ag = { class: "nav-position" }, Og = /* @__PURE__ */ fe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Eg, [
      t("div", Tg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Rg)
      ]),
      t("div", Pg, [
        t("div", Mg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Dg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Lg)
        ]),
        t("span", Ag, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Dr = /* @__PURE__ */ ge(Og, [["__scopeId", "data-v-74af7920"]]), Ng = ["type", "value", "placeholder", "disabled"], Ug = {
  key: 0,
  class: "base-input-error"
}, zg = /* @__PURE__ */ fe({
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
          o[1] || (o[1] = Ht((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Ht((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ng),
      e.error ? (n(), i("span", Ug, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), xt = /* @__PURE__ */ ge(zg, [["__scopeId", "data-v-9ba02cdc"]]), Fg = { class: "node-resolution-step" }, Vg = {
  key: 0,
  class: "auto-resolved-section"
}, Bg = { class: "section-header" }, Wg = { class: "stat-badge" }, Gg = { class: "resolved-packages-list" }, jg = { class: "package-info" }, Hg = { class: "package-id" }, Kg = { class: "node-count" }, qg = { class: "package-actions" }, Yg = {
  key: 0,
  class: "status-badge install"
}, Jg = {
  key: 1,
  class: "status-badge skip"
}, Qg = ["onClick"], Xg = {
  key: 1,
  class: "section-divider"
}, Zg = { class: "step-header" }, eh = { class: "stat-badge" }, th = {
  key: 1,
  class: "step-body"
}, sh = {
  key: 3,
  class: "empty-state"
}, oh = { class: "node-modal-body" }, nh = { class: "node-search-results-container" }, ah = {
  key: 0,
  class: "node-search-results"
}, lh = ["onClick"], ih = { class: "node-result-header" }, rh = { class: "node-result-package-id" }, ch = {
  key: 0,
  class: "node-result-description"
}, uh = {
  key: 1,
  class: "node-empty-state"
}, dh = {
  key: 2,
  class: "node-empty-state"
}, fh = {
  key: 3,
  class: "node-empty-state"
}, mh = { class: "node-manual-entry-modal" }, vh = { class: "node-modal-body" }, ph = { class: "node-modal-actions" }, gh = /* @__PURE__ */ fe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, a = s, { searchNodes: l } = Mr(), r = _(0), c = _(!1), u = _(!1), d = _(""), m = _(""), v = _([]), g = _(!1), w = _(/* @__PURE__ */ new Map()), p = _(/* @__PURE__ */ new Set()), k = _(!1);
    function C() {
      k.value && ee(), k.value = !1;
    }
    const b = U(() => o.nodes[r.value]), x = U(() => o.nodes.filter((oe) => o.nodeChoices.has(oe.node_type)).length), M = U(() => b.value ? w.value.get(b.value.node_type) || [] : []), P = U(() => b.value ? p.value.has(b.value.node_type) : !1);
    dt(b, async (oe) => {
      var ce;
      oe && ((ce = oe.options) != null && ce.length || w.value.has(oe.node_type) || p.value.has(oe.node_type) || o.nodeChoices.has(oe.node_type) || await T(oe.node_type));
    }, { immediate: !0 });
    async function T(oe) {
      p.value.add(oe);
      try {
        const ce = await l(oe, 5);
        w.value.set(oe, ce);
      } catch {
        w.value.set(oe, []);
      } finally {
        p.value.delete(oe);
      }
    }
    const L = U(() => o.autoResolvedPackages.filter((oe) => !o.skippedPackages.has(oe.package_id)).length);
    function V(oe) {
      return o.skippedPackages.has(oe);
    }
    function B(oe) {
      a("package-skip", oe);
    }
    const E = U(() => {
      var ce;
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
      return (ce = b.value.options) != null && ce.length ? "ambiguous" : "not-found";
    }), I = U(() => {
      var ce;
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
      return (ce = b.value.options) != null && ce.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function A(oe) {
      oe >= 0 && oe < o.nodes.length && (r.value = oe);
    }
    function Z() {
      var oe;
      for (let ce = r.value + 1; ce < o.nodes.length; ce++) {
        const ue = o.nodes[ce];
        if (!((oe = o.nodeChoices) != null && oe.has(ue.node_type))) {
          A(ce);
          return;
        }
      }
    }
    function W() {
      b.value && (a("mark-optional", b.value.node_type), gt(() => Z()));
    }
    function O() {
      b.value && (a("skip", b.value.node_type), gt(() => Z()));
    }
    function j(oe) {
      b.value && (a("option-selected", b.value.node_type, oe), gt(() => Z()));
    }
    function X() {
      b.value && a("clear-choice", b.value.node_type);
    }
    function z() {
      b.value && (d.value = b.value.node_type, v.value = M.value, c.value = !0, ze(d.value));
    }
    function ae() {
      m.value = "", u.value = !0;
    }
    function ee() {
      c.value = !1, d.value = "", v.value = [];
    }
    function ke() {
      u.value = !1, m.value = "";
    }
    let be = null;
    function Le() {
      be && clearTimeout(be), be = setTimeout(() => {
        ze(d.value);
      }, 300);
    }
    async function ze(oe) {
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
    function Ue(oe) {
      b.value && (a("manual-entry", b.value.node_type, oe.package_id), ee(), gt(() => Z()));
    }
    function Ye(oe) {
      b.value && (a("manual-entry", b.value.node_type, oe.package_id), gt(() => Z()));
    }
    function pe() {
      !b.value || !m.value.trim() || (a("manual-entry", b.value.node_type, m.value.trim()), ke(), gt(() => Z()));
    }
    return (oe, ce) => {
      var ue, Ee;
      return n(), i("div", Fg, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Vg, [
          t("div", Bg, [
            ce[6] || (ce[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Wg, f(L.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Gg, [
            (n(!0), i(H, null, ve(e.autoResolvedPackages, (Re) => (n(), i("div", {
              key: Re.package_id,
              class: "resolved-package-item"
            }, [
              t("div", jg, [
                t("code", Hg, f(Re.package_id), 1),
                t("span", Kg, f(Re.node_types_count) + " node type" + f(Re.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", qg, [
                V(Re.package_id) ? (n(), i("span", Jg, " SKIPPED ")) : (n(), i("span", Yg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Fe) => B(Re.package_id)
                }, f(V(Re.package_id) ? "Include" : "Skip"), 9, Qg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", Xg)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(H, { key: 2 }, [
          t("div", Zg, [
            ce[7] || (ce[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", eh, f(x.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (n(), D(Dr, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: ce[0] || (ce[0] = (Re) => A(r.value - 1)),
            onNext: ce[1] || (ce[1] = (Re) => A(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (n(), i("div", th, [
            S(Ig, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ue = b.value.options) != null && ue.length),
              options: b.value.options,
              choice: (Ee = e.nodeChoices) == null ? void 0 : Ee.get(b.value.node_type),
              status: E.value,
              "status-label": I.value,
              "search-results": M.value,
              "is-searching": P.value,
              onMarkOptional: W,
              onSkip: O,
              onManualEntry: ae,
              onSearch: z,
              onOptionSelected: j,
              onClearChoice: X,
              onSearchResultSelected: Ye
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", sh, [...ce[8] || (ce[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), D(kt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ce[4] || (ce[4] = it((Re) => k.value = !0, ["self"])),
            onMouseup: it(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: ce[3] || (ce[3] = (Re) => k.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                ce[9] || (ce[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              t("div", oh, [
                S(xt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ce[2] || (ce[2] = (Re) => d.value = Re),
                  placeholder: "Search by node type, package name...",
                  onInput: Le
                }, null, 8, ["modelValue"]),
                t("div", nh, [
                  v.value.length > 0 ? (n(), i("div", ah, [
                    (n(!0), i(H, null, ve(v.value, (Re) => (n(), i("div", {
                      key: Re.package_id,
                      class: "node-search-result-item",
                      onClick: (Fe) => Ue(Re)
                    }, [
                      t("div", ih, [
                        t("code", rh, f(Re.package_id), 1),
                        Re.match_confidence ? (n(), D(Bn, {
                          key: 0,
                          confidence: Re.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Re.description ? (n(), i("div", ch, f(Re.description), 1)) : y("", !0)
                    ], 8, lh))), 128))
                  ])) : g.value ? (n(), i("div", uh, "Searching...")) : d.value ? (n(), i("div", dh, 'No packages found matching "' + f(d.value) + '"', 1)) : (n(), i("div", fh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), D(kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: it(ke, ["self"])
          }, [
            t("div", mh, [
              t("div", { class: "node-modal-header" }, [
                ce[10] || (ce[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ke
                }, "✕")
              ]),
              t("div", vh, [
                S(xt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ce[5] || (ce[5] = (Re) => m.value = Re),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", ph, [
                  S(Te, {
                    variant: "secondary",
                    onClick: ke
                  }, {
                    default: h(() => [...ce[11] || (ce[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Te, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: pe
                  }, {
                    default: h(() => [...ce[12] || (ce[12] = [
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
}), hh = /* @__PURE__ */ ge(gh, [["__scopeId", "data-v-6d7f8125"]]), yh = { class: "node-info" }, wh = { class: "node-info-text" }, kh = { class: "item-body" }, _h = {
  key: 0,
  class: "resolved-state"
}, bh = {
  key: 1,
  class: "multiple-options"
}, $h = { class: "options-list" }, Ch = ["onClick"], xh = ["name", "value", "checked", "onChange"], Sh = { class: "option-content" }, Ih = { class: "option-header" }, Eh = { class: "option-filename" }, Th = { class: "option-meta" }, Rh = { class: "option-size" }, Ph = { class: "option-category" }, Mh = { class: "option-path" }, Dh = { class: "action-buttons" }, Lh = {
  key: 2,
  class: "unresolved"
}, Ah = { class: "action-buttons" }, Oh = /* @__PURE__ */ fe({
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
    const o = e, a = s, l = U(() => !!o.choice);
    U(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d, m;
      return ((m = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const r = U(() => {
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
      t("div", yh, [
        t("span", wh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Se(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", kh, [
        l.value ? (n(), i("div", _h, [
          S(Te, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", bh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", $h, [
            (n(!0), i(H, null, ve(e.options, (v, g) => (n(), i("label", {
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
              }, null, 40, xh),
              t("div", Sh, [
                t("div", Ih, [
                  t("span", Eh, f(v.model.filename), 1),
                  S(Bn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Th, [
                  t("span", Rh, f(u(v.model.size)), 1),
                  t("span", Ph, f(v.model.category), 1)
                ]),
                t("div", Mh, f(v.model.relative_path), 1)
              ])
            ], 10, Ch))), 128))
          ]),
          t("div", Dh, [
            S(Te, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => a("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
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
        ])) : (n(), i("div", Lh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Ah, [
            S(Te, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => a("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
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
}), Nh = /* @__PURE__ */ ge(Oh, [["__scopeId", "data-v-8a82fefa"]]), Uh = { class: "model-resolution-step" }, zh = { class: "step-header" }, Fh = { class: "step-info" }, Vh = { class: "step-title" }, Bh = { class: "step-description" }, Wh = { class: "stat-badge" }, Gh = {
  key: 1,
  class: "step-body"
}, jh = {
  key: 2,
  class: "empty-state"
}, Hh = { class: "model-search-modal" }, Kh = { class: "model-modal-body" }, qh = {
  key: 0,
  class: "model-search-results"
}, Yh = ["onClick"], Jh = { class: "model-result-header" }, Qh = { class: "model-result-filename" }, Xh = { class: "model-result-meta" }, Zh = { class: "model-result-category" }, ey = { class: "model-result-size" }, ty = {
  key: 0,
  class: "model-result-path"
}, sy = {
  key: 1,
  class: "model-no-results"
}, oy = {
  key: 2,
  class: "model-searching"
}, ny = { class: "model-download-url-modal" }, ay = { class: "model-modal-body" }, ly = { class: "model-input-group" }, iy = { class: "model-input-group" }, ry = { class: "model-modal-actions" }, cy = /* @__PURE__ */ fe({
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
    function a(ee) {
      var ke;
      return ee && ((ke = o[ee]) == null ? void 0 : ke[0]) || null;
    }
    const l = e, r = s, c = _(0), u = _(!1), d = _(!1), m = _(""), v = _(""), g = _(""), w = _([]), p = _(!1), k = U(() => l.models[c.value]), C = U(() => l.models.some((ee) => ee.is_download_intent)), b = U(() => l.models.filter(
      (ee) => l.modelChoices.has(ee.filename) || ee.is_download_intent
    ).length), x = U(() => {
      var ke;
      if (!k.value) return "";
      const ee = a((ke = k.value.reference) == null ? void 0 : ke.node_type);
      return ee ? `${ee}/${k.value.filename}` : "";
    }), M = U(() => {
      var ke;
      if (!k.value) return "not-found";
      const ee = l.modelChoices.get(k.value.filename);
      if (ee)
        switch (ee.action) {
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
      return k.value.is_download_intent ? "download" : (ke = k.value.options) != null && ke.length ? "ambiguous" : "not-found";
    }), P = U(() => {
      var ke, be;
      if (!k.value) return;
      const ee = l.modelChoices.get(k.value.filename);
      if (ee)
        switch (ee.action) {
          case "select":
            return (ke = ee.selected_model) != null && ke.filename ? `→ ${ee.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (be = k.value.options) != null && be.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function T(ee) {
      ee >= 0 && ee < l.models.length && (c.value = ee);
    }
    function L() {
      var ee;
      for (let ke = c.value + 1; ke < l.models.length; ke++) {
        const be = l.models[ke];
        if (!be.is_download_intent && !((ee = l.modelChoices) != null && ee.has(be.filename))) {
          T(ke);
          return;
        }
      }
    }
    function V() {
      k.value && (r("mark-optional", k.value.filename), gt(() => L()));
    }
    function B() {
      k.value && (r("skip", k.value.filename), gt(() => L()));
    }
    function E(ee) {
      k.value && (r("option-selected", k.value.filename, ee), gt(() => L()));
    }
    function I() {
      k.value && r("clear-choice", k.value.filename);
    }
    function A() {
      k.value && (m.value = k.value.filename, u.value = !0);
    }
    function Z() {
      k.value && (v.value = k.value.download_source || "", g.value = k.value.target_path || x.value, d.value = !0);
    }
    function W() {
      u.value = !1, m.value = "", w.value = [];
    }
    function O() {
      d.value = !1, v.value = "", g.value = "";
    }
    function j() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function X(ee) {
      k.value && (W(), gt(() => L()));
    }
    function z() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), g.value.trim() || void 0), O(), gt(() => L()));
    }
    function ae(ee) {
      if (!ee) return "Unknown";
      const ke = ee / (1024 * 1024 * 1024);
      return ke >= 1 ? `${ke.toFixed(2)} GB` : `${(ee / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ee, ke) => {
      var be, Le, ze;
      return n(), i("div", Uh, [
        t("div", zh, [
          t("div", Fh, [
            t("h3", Vh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Bh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Wh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        k.value ? (n(), D(Dr, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ke[0] || (ke[0] = (Ue) => T(c.value - 1)),
          onNext: ke[1] || (ke[1] = (Ue) => T(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (n(), i("div", Gh, [
          S(Nh, {
            filename: k.value.filename,
            "node-type": ((be = k.value.reference) == null ? void 0 : be.node_type) || "Unknown",
            "has-multiple-options": !!((Le = k.value.options) != null && Le.length),
            options: k.value.options,
            choice: (ze = e.modelChoices) == null ? void 0 : ze.get(k.value.filename),
            status: M.value,
            "status-label": P.value,
            onMarkOptional: V,
            onSkip: B,
            onDownloadUrl: Z,
            onSearch: A,
            onOptionSelected: E,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", jh, [...ke[5] || (ke[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), D(kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(W, ["self"])
          }, [
            t("div", Hh, [
              t("div", { class: "model-modal-header" }, [
                ke[6] || (ke[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: W
                }, "✕")
              ]),
              t("div", Kh, [
                S(xt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ke[2] || (ke[2] = (Ue) => m.value = Ue),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", qh, [
                  (n(!0), i(H, null, ve(w.value, (Ue) => (n(), i("div", {
                    key: Ue.hash,
                    class: "model-search-result-item",
                    onClick: (Ye) => X()
                  }, [
                    t("div", Jh, [
                      t("code", Qh, f(Ue.filename), 1)
                    ]),
                    t("div", Xh, [
                      t("span", Zh, f(Ue.category), 1),
                      t("span", ey, f(ae(Ue.size)), 1)
                    ]),
                    Ue.relative_path ? (n(), i("div", ty, f(Ue.relative_path), 1)) : y("", !0)
                  ], 8, Yh))), 128))
                ])) : m.value && !p.value ? (n(), i("div", sy, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (n(), i("div", oy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), D(kt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: it(O, ["self"])
          }, [
            t("div", ny, [
              t("div", { class: "model-modal-header" }, [
                ke[7] || (ke[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              t("div", ay, [
                t("div", ly, [
                  ke[8] || (ke[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(xt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ke[3] || (ke[3] = (Ue) => v.value = Ue),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", iy, [
                  ke[9] || (ke[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(xt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ke[4] || (ke[4] = (Ue) => g.value = Ue),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", ry, [
                  S(Te, {
                    variant: "secondary",
                    onClick: O
                  }, {
                    default: h(() => [...ke[10] || (ke[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Te, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: z
                  }, {
                    default: h(() => [...ke[11] || (ke[11] = [
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
}), uy = /* @__PURE__ */ ge(cy, [["__scopeId", "data-v-5c700bfa"]]), dy = { class: "applying-step" }, fy = {
  key: 0,
  class: "phase-content"
}, my = {
  key: 1,
  class: "phase-content"
}, vy = { class: "phase-description" }, py = { class: "overall-progress" }, gy = { class: "progress-bar" }, hy = { class: "progress-label" }, yy = { class: "install-list" }, wy = { class: "install-icon" }, ky = { key: 0 }, _y = {
  key: 1,
  class: "spinner"
}, by = { key: 2 }, $y = { key: 3 }, Cy = {
  key: 0,
  class: "install-error"
}, xy = {
  key: 2,
  class: "phase-content"
}, Sy = { class: "phase-header" }, Iy = { class: "phase-title" }, Ey = { class: "completion-summary" }, Ty = {
  key: 0,
  class: "summary-item success"
}, Ry = { class: "summary-text" }, Py = {
  key: 1,
  class: "summary-item error"
}, My = { class: "summary-text" }, Dy = {
  key: 2,
  class: "failed-list"
}, Ly = { class: "failed-node-id" }, Ay = { class: "failed-error" }, Oy = {
  key: 4,
  class: "summary-item success"
}, Ny = {
  key: 5,
  class: "restart-prompt"
}, Uy = {
  key: 3,
  class: "phase-content error"
}, zy = { class: "error-message" }, Fy = /* @__PURE__ */ fe({
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
    }), a = U(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = U(() => a.value.length > 0);
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
      return n(), i("div", dy, [
        e.progress.phase === "resolving" ? (n(), i("div", fy, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", my, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", vy, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", py, [
            t("div", gy, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", hy, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", yy, [
            (n(!0), i(H, null, ve(e.progress.nodesToInstall, (p, k) => (n(), i("div", {
              key: p,
              class: Se(["install-item", r(p, k)])
            }, [
              t("span", wy, [
                r(p, k) === "pending" ? (n(), i("span", ky, "○")) : r(p, k) === "installing" ? (n(), i("span", _y, "◌")) : r(p, k) === "complete" ? (n(), i("span", by, "✓")) : r(p, k) === "failed" ? (n(), i("span", $y, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (n(), i("span", Cy, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", xy, [
          t("div", Sy, [
            t("span", {
              class: Se(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", Iy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Ey, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Ty, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", Ry, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Py, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", My, f(a.value.length) + " package" + f(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Dy, [
              (n(!0), i(H, null, ve(a.value, (p) => (n(), i("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", Ly, f(p.node_id), 1),
                t("span", Ay, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", Oy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Ny, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", Uy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", zy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Vy = /* @__PURE__ */ ge(Fy, [["__scopeId", "data-v-5efaae58"]]), By = {
  key: 0,
  class: "loading-state"
}, Wy = {
  key: 1,
  class: "wizard-content"
}, Gy = {
  key: 0,
  class: "step-content"
}, jy = { class: "analysis-summary" }, Hy = { class: "analysis-header" }, Ky = { class: "summary-description" }, qy = { class: "stats-grid" }, Yy = { class: "stat-card" }, Jy = { class: "stat-items" }, Qy = {
  key: 0,
  class: "stat-item success"
}, Xy = { class: "stat-count" }, Zy = {
  key: 1,
  class: "stat-item info"
}, e1 = { class: "stat-count" }, t1 = {
  key: 2,
  class: "stat-item warning"
}, s1 = { class: "stat-count" }, o1 = {
  key: 3,
  class: "stat-item error"
}, n1 = { class: "stat-count" }, a1 = { class: "stat-card" }, l1 = { class: "stat-items" }, i1 = { class: "stat-item success" }, r1 = { class: "stat-count" }, c1 = {
  key: 0,
  class: "stat-item info"
}, u1 = { class: "stat-count" }, d1 = {
  key: 1,
  class: "stat-item warning"
}, f1 = { class: "stat-count" }, m1 = {
  key: 2,
  class: "stat-item warning"
}, v1 = { class: "stat-count" }, p1 = {
  key: 3,
  class: "stat-item error"
}, g1 = { class: "stat-count" }, h1 = {
  key: 0,
  class: "status-message warning"
}, y1 = { class: "status-text" }, w1 = {
  key: 1,
  class: "status-message info"
}, k1 = { class: "status-text" }, _1 = {
  key: 2,
  class: "status-message info"
}, b1 = { class: "status-text" }, $1 = {
  key: 3,
  class: "status-message warning"
}, C1 = { class: "status-text" }, x1 = {
  key: 4,
  class: "status-message success"
}, S1 = {
  key: 5,
  class: "category-mismatch-section"
}, I1 = { class: "mismatch-list" }, E1 = { class: "mismatch-path" }, T1 = { class: "mismatch-target" }, R1 = {
  key: 3,
  class: "step-content"
}, P1 = { class: "review-summary" }, M1 = { class: "review-stats" }, D1 = { class: "review-stat" }, L1 = { class: "stat-value" }, A1 = { class: "review-stat" }, O1 = { class: "stat-value" }, N1 = { class: "review-stat" }, U1 = { class: "stat-value" }, z1 = { class: "review-stat" }, F1 = { class: "stat-value" }, V1 = {
  key: 0,
  class: "review-section"
}, B1 = { class: "section-title" }, W1 = { class: "review-items" }, G1 = { class: "item-name" }, j1 = { class: "item-choice" }, H1 = {
  key: 0,
  class: "choice-badge install"
}, K1 = {
  key: 1,
  class: "choice-badge skip"
}, q1 = {
  key: 1,
  class: "review-section"
}, Y1 = { class: "section-title" }, J1 = { class: "review-items" }, Q1 = { class: "item-name" }, X1 = { class: "item-choice" }, Z1 = {
  key: 0,
  class: "choice-badge install"
}, e0 = {
  key: 1,
  class: "choice-badge optional"
}, t0 = {
  key: 2,
  class: "choice-badge skip"
}, s0 = {
  key: 1,
  class: "choice-badge pending"
}, o0 = {
  key: 2,
  class: "review-section"
}, n0 = { class: "section-title" }, a0 = { class: "review-items download-details" }, l0 = { class: "download-info" }, i0 = { class: "item-name" }, r0 = { class: "download-meta" }, c0 = { class: "download-path" }, u0 = ["title"], d0 = {
  key: 3,
  class: "review-section"
}, f0 = { class: "section-title" }, m0 = { class: "review-items" }, v0 = { class: "item-name" }, p0 = { class: "item-choice" }, g0 = {
  key: 0,
  class: "choice-badge install"
}, h0 = {
  key: 1,
  class: "choice-badge download"
}, y0 = {
  key: 2,
  class: "choice-badge optional"
}, w0 = {
  key: 3,
  class: "choice-badge skip"
}, k0 = {
  key: 4,
  class: "choice-badge skip"
}, _0 = {
  key: 1,
  class: "choice-badge download"
}, b0 = {
  key: 2,
  class: "choice-badge pending"
}, $0 = {
  key: 4,
  class: "no-choices"
}, C0 = /* @__PURE__ */ fe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Mr(), { loadPendingDownloads: v } = xo(), { openFileLocation: g } = Ze(), w = _(null), p = _(!1), k = _(!1), C = _(null), b = _("analysis"), x = _([]), M = _(/* @__PURE__ */ new Map()), P = _(/* @__PURE__ */ new Map()), T = _(/* @__PURE__ */ new Set()), L = U(() => {
      const K = [
        { id: "analysis", label: "Analysis" }
      ];
      return (B.value || A.value) && K.push({ id: "nodes", label: "Nodes" }), E.value && K.push({ id: "models", label: "Models" }), K.push({ id: "review", label: "Review" }), b.value === "applying" && K.push({ id: "applying", label: "Applying" }), K;
    }), V = U(() => w.value ? w.value.stats.needs_user_input : !1), B = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), E = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), I = U(() => w.value ? w.value.stats.download_intents > 0 : !1), A = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), Z = U(() => w.value ? w.value.nodes.resolved.length : 0), W = U(() => w.value ? w.value.models.resolved.filter((K) => K.has_category_mismatch) : []), O = U(() => W.value.length > 0), j = U(() => B.value || A.value ? "nodes" : E.value ? "models" : "review"), X = U(() => {
      if (!w.value) return [];
      const K = w.value.nodes.resolved.filter((me) => !me.is_installed), G = /* @__PURE__ */ new Set();
      return K.filter((me) => G.has(me.package.package_id) ? !1 : (G.add(me.package.package_id), !0));
    }), z = U(() => {
      if (!w.value) return [];
      const K = w.value.nodes.resolved.filter((me) => !me.is_installed), G = /* @__PURE__ */ new Map();
      for (const me of K) {
        const Be = G.get(me.package.package_id);
        Be ? Be.node_types_count++ : G.set(me.package.package_id, {
          package_id: me.package.package_id,
          title: me.package.title,
          node_types_count: 1
        });
      }
      return Array.from(G.values());
    }), ae = U(() => X.value.filter((K) => !T.value.has(K.package.package_id))), ee = U(() => w.value ? w.value.models.resolved.filter(
      (K) => K.match_type === "download_intent" || K.match_type === "property_download_intent"
    ).map((K) => ({
      filename: K.reference.widget_value,
      reference: K.reference,
      is_download_intent: !0,
      resolved_model: K.model,
      download_source: K.download_source,
      target_path: K.target_path
    })) : []), ke = U(() => {
      if (!w.value) return [];
      const K = w.value.nodes.unresolved.map((me) => ({
        node_type: me.reference.node_type,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), G = w.value.nodes.ambiguous.map((me) => ({
        node_type: me.reference.node_type,
        has_multiple_options: !0,
        options: me.options.map((Be) => ({
          package_id: Be.package.package_id,
          title: Be.package.title,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          is_installed: Be.is_installed
        }))
      }));
      return [...K, ...G];
    }), be = U(() => {
      if (!w.value) return [];
      const K = w.value.models.unresolved.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), G = w.value.models.ambiguous.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        has_multiple_options: !0,
        options: me.options.map((Be) => ({
          model: Be.model,
          match_confidence: Be.match_confidence,
          match_type: Be.match_type,
          has_download_source: Be.has_download_source
        }))
      }));
      return [...K, ...G];
    }), Le = U(() => {
      const K = be.value, G = ee.value.map((me) => ({
        filename: me.filename,
        reference: me.reference,
        is_download_intent: !0,
        resolved_model: me.resolved_model,
        download_source: me.download_source,
        target_path: me.target_path,
        options: void 0
      }));
      return [...K, ...G];
    }), ze = U(() => ee.value.filter((K) => {
      const G = P.value.get(K.filename);
      return G ? G.action === "download" : !0;
    }).map((K) => ({
      filename: K.filename,
      url: K.download_source,
      target_path: K.target_path
    })));
    function Ue(K, G = 50) {
      return K.length <= G ? K : K.slice(0, G - 3) + "...";
    }
    const Ye = U(() => {
      let K = ae.value.length;
      for (const G of M.value.values())
        G.action === "install" && K++;
      for (const G of P.value.values())
        G.action === "select" && K++;
      return K;
    }), pe = U(() => {
      let K = 0;
      for (const G of P.value.values())
        G.action === "download" && K++;
      for (const G of ee.value)
        P.value.get(G.filename) || K++;
      return K;
    }), oe = U(() => {
      let K = 0;
      for (const G of M.value.values())
        G.action === "optional" && K++;
      for (const G of P.value.values())
        G.action === "optional" && K++;
      return K;
    }), ce = U(() => {
      let K = T.value.size;
      for (const G of M.value.values())
        G.action === "skip" && K++;
      for (const G of P.value.values())
        G.action === "skip" && K++;
      for (const G of ke.value)
        M.value.has(G.node_type) || K++;
      for (const G of be.value)
        P.value.has(G.filename) || K++;
      return K;
    }), ue = U(() => {
      const K = {};
      if (K.analysis = { resolved: 1, total: 1 }, B.value) {
        const G = ke.value.length, me = ke.value.filter(
          (Be) => M.value.has(Be.node_type)
        ).length;
        K.nodes = { resolved: me, total: G };
      }
      if (E.value) {
        const G = Le.value.length, me = Le.value.filter(
          (Be) => P.value.has(Be.filename) || Be.is_download_intent
        ).length;
        K.models = { resolved: me, total: G };
      }
      if (K.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const G = d.totalFiles || 1, me = d.completedFiles.length;
        K.applying = { resolved: me, total: G };
      }
      return K;
    });
    function Ee(K) {
      b.value = K;
    }
    function Re() {
      const K = L.value.findIndex((G) => G.id === b.value);
      K > 0 && (b.value = L.value[K - 1].id);
    }
    function Fe() {
      const K = L.value.findIndex((G) => G.id === b.value);
      K < L.value.length - 1 && (b.value = L.value[K + 1].id);
    }
    async function N() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (K) {
        C.value = K instanceof Error ? K.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function R() {
      x.value.includes("analysis") || x.value.push("analysis"), B.value || A.value ? b.value = "nodes" : E.value ? b.value = "models" : b.value = "review";
    }
    function F(K) {
      M.value.set(K, { action: "optional" });
    }
    function q(K) {
      M.value.set(K, { action: "skip" });
    }
    function ne(K, G) {
      var Be;
      const me = ke.value.find((et) => et.node_type === K);
      (Be = me == null ? void 0 : me.options) != null && Be[G] && M.value.set(K, {
        action: "install",
        package_id: me.options[G].package_id
      });
    }
    function re(K, G) {
      M.value.set(K, {
        action: "install",
        package_id: G
      });
    }
    function $e(K) {
      M.value.delete(K);
    }
    function ie(K) {
      T.value.has(K) ? T.value.delete(K) : T.value.add(K);
    }
    function we(K) {
      P.value.set(K, { action: "optional" });
    }
    function he(K) {
      P.value.set(K, { action: "skip" });
    }
    function Pe(K, G) {
      var Be;
      const me = be.value.find((et) => et.filename === K);
      (Be = me == null ? void 0 : me.options) != null && Be[G] && P.value.set(K, {
        action: "select",
        selected_model: me.options[G].model
      });
    }
    function Ie(K, G, me) {
      P.value.set(K, {
        action: "download",
        url: G,
        target_path: me
      });
    }
    function te(K) {
      P.value.delete(K);
    }
    async function Y(K) {
      try {
        await g(K);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to open file location";
      }
    }
    async function Me() {
      var K;
      k.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const G = await r(o.workflowName, M.value, P.value, T.value);
        G.models_to_download && G.models_to_download.length > 0 && u(o.workflowName, G.models_to_download);
        const me = [
          ...G.nodes_to_install || [],
          ...ae.value.map((et) => et.package.package_id)
        ];
        d.nodesToInstall = [...new Set(me)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Be = d.installError || ((K = d.nodeInstallProgress) == null ? void 0 : K.completedNodes.some((et) => !et.success));
        !d.needsRestart && !Be && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function Ce() {
      a("refresh"), a("restart"), a("close");
    }
    async function ye() {
      var G;
      const K = ((G = d.nodeInstallProgress) == null ? void 0 : G.completedNodes.filter((me) => !me.success).map((me) => me.node_id)) || [];
      if (K.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: K.length
        }, d.nodesToInstall = K, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (me) {
          d.error = me instanceof Error ? me.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(N), (K, G) => (n(), D(ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: G[1] || (G[1] = (me) => a("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (n(), i("div", By, [...G[2] || (G[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", Wy, [
          S(Jp, {
            steps: L.value,
            "current-step": b.value,
            "completed-steps": x.value,
            "step-stats": ue.value,
            onStepChange: Ee
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (n(), i("div", Gy, [
            t("div", jy, [
              t("div", Hy, [
                G[3] || (G[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Ky, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", qy, [
                t("div", Yy, [
                  G[12] || (G[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Jy, [
                    Z.value > 0 ? (n(), i("div", Qy, [
                      G[4] || (G[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Xy, f(Z.value), 1),
                      G[5] || (G[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", Zy, [
                      G[6] || (G[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", e1, f(w.value.stats.packages_needing_installation), 1),
                      G[7] || (G[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", t1, [
                      G[8] || (G[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", s1, f(w.value.nodes.ambiguous.length), 1),
                      G[9] || (G[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", o1, [
                      G[10] || (G[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", n1, f(w.value.nodes.unresolved.length), 1),
                      G[11] || (G[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", a1, [
                  G[23] || (G[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", l1, [
                    t("div", i1, [
                      G[13] || (G[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", r1, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      G[14] || (G[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", c1, [
                      G[15] || (G[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", u1, f(w.value.stats.download_intents), 1),
                      G[16] || (G[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    O.value ? (n(), i("div", d1, [
                      G[17] || (G[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", f1, f(W.value.length), 1),
                      G[18] || (G[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", m1, [
                      G[19] || (G[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", v1, f(w.value.models.ambiguous.length), 1),
                      G[20] || (G[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", p1, [
                      G[21] || (G[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", g1, f(w.value.models.unresolved.length), 1),
                      G[22] || (G[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (n(), i("div", h1, [
                G[24] || (G[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", y1, f(ke.value.length + be.value.length) + " items need your input", 1)
              ])) : A.value ? (n(), i("div", w1, [
                G[25] || (G[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", k1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(I.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : I.value ? (n(), i("div", _1, [
                G[26] || (G[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", b1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : O.value ? (n(), i("div", $1, [
                G[27] || (G[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", C1, f(W.value.length) + " model" + f(W.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", x1, [...G[28] || (G[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              O.value ? (n(), i("div", S1, [
                G[31] || (G[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", I1, [
                  (n(!0), i(H, null, ve(W.value, (me) => {
                    var Be, et;
                    return n(), i("div", {
                      key: me.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", E1, f(me.actual_category) + "/" + f((Be = me.model) == null ? void 0 : Be.filename), 1),
                      G[30] || (G[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", T1, f((et = me.expected_categories) == null ? void 0 : et[0]) + "/", 1),
                      me.file_path ? (n(), D(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (St) => Y(me.file_path)
                      }, {
                        default: h(() => [...G[29] || (G[29] = [
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
          b.value === "nodes" ? (n(), D(hh, {
            key: 1,
            nodes: ke.value,
            "node-choices": M.value,
            "auto-resolved-packages": z.value,
            "skipped-packages": T.value,
            onMarkOptional: F,
            onSkip: q,
            onOptionSelected: ne,
            onManualEntry: re,
            onClearChoice: $e,
            onPackageSkip: ie
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (n(), D(uy, {
            key: 2,
            models: Le.value,
            "model-choices": P.value,
            onMarkOptional: we,
            onSkip: he,
            onOptionSelected: Pe,
            onDownloadUrl: Ie,
            onClearChoice: te
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (n(), i("div", R1, [
            t("div", P1, [
              G[37] || (G[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", M1, [
                t("div", D1, [
                  t("span", L1, f(Ye.value), 1),
                  G[32] || (G[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", A1, [
                  t("span", O1, f(pe.value), 1),
                  G[33] || (G[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", N1, [
                  t("span", U1, f(oe.value), 1),
                  G[34] || (G[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", z1, [
                  t("span", F1, f(ce.value), 1),
                  G[35] || (G[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              z.value.length > 0 ? (n(), i("div", V1, [
                t("h4", B1, "Node Packages (" + f(z.value.length) + ")", 1),
                t("div", W1, [
                  (n(!0), i(H, null, ve(z.value, (me) => (n(), i("div", {
                    key: me.package_id,
                    class: "review-item"
                  }, [
                    t("code", G1, f(me.package_id), 1),
                    t("div", j1, [
                      T.value.has(me.package_id) ? (n(), i("span", K1, "Skipped")) : (n(), i("span", H1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ke.value.length > 0 ? (n(), i("div", q1, [
                t("h4", Y1, "Node Choices (" + f(ke.value.length) + ")", 1),
                t("div", J1, [
                  (n(!0), i(H, null, ve(ke.value, (me) => {
                    var Be, et, St, st;
                    return n(), i("div", {
                      key: me.node_type,
                      class: "review-item"
                    }, [
                      t("code", Q1, f(me.node_type), 1),
                      t("div", X1, [
                        M.value.has(me.node_type) ? (n(), i(H, { key: 0 }, [
                          ((Be = M.value.get(me.node_type)) == null ? void 0 : Be.action) === "install" ? (n(), i("span", Z1, f((et = M.value.get(me.node_type)) == null ? void 0 : et.package_id), 1)) : ((St = M.value.get(me.node_type)) == null ? void 0 : St.action) === "optional" ? (n(), i("span", e0, " Optional ")) : ((st = M.value.get(me.node_type)) == null ? void 0 : st.action) === "skip" ? (n(), i("span", t0, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", s0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ze.value.length > 0 ? (n(), i("div", o0, [
                t("h4", n0, "Models to Download (" + f(ze.value.length) + ")", 1),
                t("div", a0, [
                  (n(!0), i(H, null, ve(ze.value, (me) => (n(), i("div", {
                    key: me.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", l0, [
                      t("code", i0, f(me.filename), 1),
                      t("div", r0, [
                        t("span", c0, "→ " + f(me.target_path), 1),
                        me.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: me.url
                        }, f(Ue(me.url)), 9, u0)) : y("", !0)
                      ])
                    ]),
                    G[36] || (G[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (n(), i("div", d0, [
                t("h4", f0, "Models (" + f(Le.value.length) + ")", 1),
                t("div", m0, [
                  (n(!0), i(H, null, ve(Le.value, (me) => {
                    var Be, et, St, st, vt, qt, ht;
                    return n(), i("div", {
                      key: me.filename,
                      class: "review-item"
                    }, [
                      t("code", v0, f(me.filename), 1),
                      t("div", p0, [
                        P.value.has(me.filename) ? (n(), i(H, { key: 0 }, [
                          ((Be = P.value.get(me.filename)) == null ? void 0 : Be.action) === "select" ? (n(), i("span", g0, f((St = (et = P.value.get(me.filename)) == null ? void 0 : et.selected_model) == null ? void 0 : St.filename), 1)) : ((st = P.value.get(me.filename)) == null ? void 0 : st.action) === "download" ? (n(), i("span", h0, " Download ")) : ((vt = P.value.get(me.filename)) == null ? void 0 : vt.action) === "optional" ? (n(), i("span", y0, " Optional ")) : ((qt = P.value.get(me.filename)) == null ? void 0 : qt.action) === "skip" ? (n(), i("span", w0, " Skip ")) : ((ht = P.value.get(me.filename)) == null ? void 0 : ht.action) === "cancel_download" ? (n(), i("span", k0, " Cancel Download ")) : y("", !0)
                        ], 64)) : me.is_download_intent ? (n(), i("span", _0, " Pending Download ")) : (n(), i("span", b0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length === 0 && ke.value.length === 0 && Le.value.length === 0 ? (n(), i("div", $0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (n(), D(Vy, {
            key: 4,
            progress: We(d),
            onRestart: Ce,
            onRetryFailed: ye
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (n(), D(Te, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: Re
        }, {
          default: h(() => [...G[38] || (G[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        G[41] || (G[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (n(), D(Te, {
          key: 1,
          variant: "secondary",
          onClick: G[0] || (G[0] = (me) => a("close"))
        }, {
          default: h(() => [
            $(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (n(), D(Te, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: R
        }, {
          default: h(() => [
            $(f(j.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (n(), D(Te, {
          key: 3,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [
            $(f(E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (n(), D(Te, {
          key: 4,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [...G[39] || (G[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (n(), D(Te, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: Me
        }, {
          default: h(() => [...G[40] || (G[40] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), x0 = /* @__PURE__ */ ge(C0, [["__scopeId", "data-v-40d8d5a8"]]), S0 = { class: "search-input-wrapper" }, I0 = ["value", "placeholder"], E0 = /* @__PURE__ */ fe({
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
    }), (d, m) => (n(), i("div", S0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Ht(u, ["escape"])
      }, null, 40, I0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), T0 = /* @__PURE__ */ ge(E0, [["__scopeId", "data-v-266f857a"]]), R0 = { class: "search-bar" }, P0 = /* @__PURE__ */ fe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", R0, [
      S(T0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), So = /* @__PURE__ */ ge(P0, [["__scopeId", "data-v-3d51bbfd"]]), M0 = { class: "section-group" }, D0 = {
  key: 0,
  class: "section-content"
}, L0 = /* @__PURE__ */ fe({
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
    return (c, u) => (n(), i("section", M0, [
      S(Nt, {
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
      !e.collapsible || l.value ? (n(), i("div", D0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), rt = /* @__PURE__ */ ge(L0, [["__scopeId", "data-v-c48e33ed"]]), A0 = { class: "item-header" }, O0 = {
  key: 0,
  class: "item-icon"
}, N0 = { class: "item-info" }, U0 = {
  key: 0,
  class: "item-title"
}, z0 = {
  key: 1,
  class: "item-subtitle"
}, F0 = {
  key: 0,
  class: "item-details"
}, V0 = {
  key: 1,
  class: "item-actions"
}, B0 = /* @__PURE__ */ fe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = U(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Se(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", A0, [
        l.$slots.icon ? (n(), i("span", O0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", N0, [
          l.$slots.title ? (n(), i("div", U0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", z0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", F0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", V0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ ge(B0, [["__scopeId", "data-v-cc435e0e"]]), W0 = { class: "loading-state" }, G0 = { class: "loading-message" }, j0 = /* @__PURE__ */ fe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", W0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", G0, f(e.message), 1)
    ]));
  }
}), Ms = /* @__PURE__ */ ge(j0, [["__scopeId", "data-v-ad8436c9"]]), H0 = { class: "error-state" }, K0 = { class: "error-message" }, q0 = /* @__PURE__ */ fe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", H0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", K0, f(e.message), 1),
      e.retry ? (n(), D(de, {
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
}), Ds = /* @__PURE__ */ ge(q0, [["__scopeId", "data-v-5397be48"]]), Y0 = /* @__PURE__ */ fe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = Ze(), r = _([]), c = _(!1), u = _(null), d = _(""), m = _(!0), v = _(!1), g = _(!1), w = _(!1), p = _(null), k = U(
      () => r.value.filter((z) => z.status === "broken")
    ), C = U(
      () => r.value.filter((z) => z.status === "new")
    ), b = U(
      () => r.value.filter((z) => z.status === "modified")
    ), x = U(
      () => r.value.filter((z) => z.status === "synced")
    ), M = U(() => {
      if (!d.value.trim()) return r.value;
      const z = d.value.toLowerCase();
      return r.value.filter((ae) => ae.name.toLowerCase().includes(z));
    }), P = U(
      () => k.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), T = U(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), L = U(
      () => b.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = U(
      () => x.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = U(
      () => v.value ? V.value : V.value.slice(0, 5)
    );
    async function E(z = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(z);
      } catch (ae) {
        u.value = ae instanceof Error ? ae.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: E });
    function I(z) {
      p.value = z, g.value = !0;
    }
    function A(z) {
      p.value = z, w.value = !0;
    }
    function Z() {
      a("refresh");
    }
    async function W() {
      w.value = !1, await E(!0);
    }
    async function O() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function j(z) {
      const ae = [];
      return z.missing_nodes > 0 && ae.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && ae.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && ae.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && ae.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), ae.length > 0 ? ae.join(", ") : "Has issues";
    }
    function X(z) {
      const ae = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state;
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync` : ae || "Unknown";
    }
    return Qe(E), (z, ae) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          S(So, {
            modelValue: d.value,
            "onUpdate:modelValue": ae[0] || (ae[0] = (ee) => d.value = ee),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), D(Ms, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), D(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            P.value.length ? (n(), D(rt, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(P.value, (ee) => (n(), D(Pt, {
                  key: ee.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ae[7] || (ae[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(j(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ke) => A(ee.name)
                    }, {
                      default: h(() => [...ae[8] || (ae[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ke) => I(ee.name)
                    }, {
                      default: h(() => [...ae[9] || (ae[9] = [
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
            T.value.length ? (n(), D(rt, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(T.value, (ee) => (n(), D(Pt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(ee.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ke) => I(ee.name)
                    }, {
                      default: h(() => [...ae[10] || (ae[10] = [
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
            L.value.length ? (n(), D(rt, {
              key: 2,
              title: "MODIFIED",
              count: L.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(L.value, (ee) => (n(), D(Pt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ae[11] || (ae[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ke) => I(ee.name)
                    }, {
                      default: h(() => [...ae[12] || (ae[12] = [
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
            V.value.length ? (n(), D(rt, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ae[2] || (ae[2] = (ee) => m.value = ee)
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(B.value, (ee) => (n(), D(Pt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(ee.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ke) => I(ee.name)
                    }, {
                      default: h(() => [...ae[13] || (ae[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && V.value.length > 5 ? (n(), D(de, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ae[1] || (ae[1] = (ee) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            M.value.length ? y("", !0) : (n(), D(ns, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (n(), D(Up, {
        key: 0,
        "workflow-name": p.value,
        onClose: ae[3] || (ae[3] = (ee) => g.value = !1),
        onResolve: ae[4] || (ae[4] = (ee) => A(p.value)),
        onRefresh: ae[5] || (ae[5] = (ee) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (n(), D(x0, {
        key: 1,
        "workflow-name": p.value,
        onClose: W,
        onInstall: Z,
        onRefresh: ae[6] || (ae[6] = (ee) => a("refresh")),
        onRestart: O
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), J0 = /* @__PURE__ */ ge(Y0, [["__scopeId", "data-v-fa3f076e"]]), Q0 = /* @__PURE__ */ fe({
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
}), dn = /* @__PURE__ */ ge(Q0, [["__scopeId", "data-v-ccb7816e"]]), X0 = {
  key: 0,
  class: "model-details"
}, Z0 = { class: "detail-section" }, ew = { class: "detail-row" }, tw = { class: "detail-value mono" }, sw = { class: "detail-row" }, ow = { class: "detail-value mono" }, nw = { class: "detail-row" }, aw = { class: "detail-value mono" }, lw = { class: "detail-row" }, iw = { class: "detail-value" }, rw = { class: "detail-row" }, cw = { class: "detail-value" }, uw = { class: "detail-row" }, dw = { class: "detail-value" }, fw = { class: "detail-section" }, mw = { class: "section-header" }, vw = {
  key: 0,
  class: "locations-list"
}, pw = { class: "location-path mono" }, gw = {
  key: 0,
  class: "location-modified"
}, hw = ["onClick"], yw = {
  key: 1,
  class: "empty-state"
}, ww = { class: "detail-section" }, kw = { class: "section-header" }, _w = {
  key: 0,
  class: "sources-list"
}, bw = { class: "source-type" }, $w = ["href"], Cw = ["disabled", "onClick"], xw = {
  key: 1,
  class: "empty-state"
}, Sw = { class: "add-source-form" }, Iw = ["disabled"], Ew = {
  key: 2,
  class: "source-error"
}, Tw = {
  key: 3,
  class: "source-success"
}, Rw = /* @__PURE__ */ fe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = Ze(), u = _(null), d = _(!0), m = _(null), v = _(""), g = _(!1), w = _(null), p = _(null), k = _(null), C = _(null);
    let b = null;
    function x(E, I = "success", A = 2e3) {
      b && clearTimeout(b), C.value = { message: E, type: I }, b = setTimeout(() => {
        C.value = null;
      }, A);
    }
    function M(E) {
      if (!E) return "Unknown";
      const I = 1024 * 1024 * 1024, A = 1024 * 1024;
      return E >= I ? `${(E / I).toFixed(1)} GB` : E >= A ? `${(E / A).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function P(E) {
      navigator.clipboard.writeText(E), x("Copied to clipboard!");
    }
    async function T(E) {
      try {
        await c(E), x("Opening file location...");
      } catch {
        x("Failed to open location", "error");
      }
    }
    async function L() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, k.value = null;
        try {
          await l(u.value.hash, v.value.trim()), k.value = "Source added successfully!", v.value = "", await B();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function V(E) {
      if (u.value) {
        w.value = E, p.value = null, k.value = null;
        try {
          await r(u.value.hash, E), x("Source removed"), await B();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function B() {
      d.value = !0, m.value = null;
      try {
        u.value = await a(o.identifier);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(B), (E, I) => {
      var A;
      return n(), i(H, null, [
        S(ct, {
          title: `Model Details: ${((A = u.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: I[5] || (I[5] = (Z) => E.$emit("close"))
        }, {
          body: h(() => {
            var Z, W, O, j;
            return [
              u.value ? (n(), i("div", X0, [
                t("section", Z0, [
                  t("div", ew, [
                    I[6] || (I[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", tw, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[0] || (I[0] = (X) => P(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", sw, [
                    I[7] || (I[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", ow, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[1] || (I[1] = (X) => P(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", nw, [
                    I[8] || (I[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", aw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[2] || (I[2] = (X) => P(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", lw, [
                    I[9] || (I[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", iw, f(M(u.value.size)), 1)
                  ]),
                  t("div", rw, [
                    I[10] || (I[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", cw, f(u.value.category), 1)
                  ]),
                  t("div", uw, [
                    I[11] || (I[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", dw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", fw, [
                  t("h4", mw, "Locations (" + f(((Z = u.value.locations) == null ? void 0 : Z.length) || 0) + ")", 1),
                  (W = u.value.locations) != null && W.length ? (n(), i("div", vw, [
                    (n(!0), i(H, null, ve(u.value.locations, (X, z) => (n(), i("div", {
                      key: z,
                      class: "location-item"
                    }, [
                      t("span", pw, f(X.path), 1),
                      X.modified ? (n(), i("span", gw, "Modified: " + f(X.modified), 1)) : y("", !0),
                      X.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ae) => T(X.path)
                      }, " Open File Location ", 8, hw)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", yw, "No locations found"))
                ]),
                t("section", ww, [
                  t("h4", kw, "Download Sources (" + f(((O = u.value.sources) == null ? void 0 : O.length) || 0) + ")", 1),
                  (j = u.value.sources) != null && j.length ? (n(), i("div", _w, [
                    (n(!0), i(H, null, ve(u.value.sources, (X, z) => (n(), i("div", {
                      key: z,
                      class: "source-item"
                    }, [
                      t("span", bw, f(X.type) + ":", 1),
                      t("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(X.url), 9, $w),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === X.url,
                        onClick: (ae) => V(X.url)
                      }, f(w.value === X.url ? "..." : "×"), 9, Cw)
                    ]))), 128))
                  ])) : (n(), i("div", xw, " No download sources configured ")),
                  t("div", Sw, [
                    qe(t("input", {
                      "onUpdate:modelValue": I[3] || (I[3] = (X) => v.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: L
                    }, f(g.value ? "Adding..." : "Add Source"), 9, Iw)
                  ]),
                  p.value ? (n(), i("p", Ew, f(p.value), 1)) : y("", !0),
                  k.value ? (n(), i("p", Tw, f(k.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: I[4] || (I[4] = (Z) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), D(kt, { to: "body" }, [
          C.value ? (n(), i("div", {
            key: 0,
            class: Se(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), il = /* @__PURE__ */ ge(Rw, [["__scopeId", "data-v-f15cbb56"]]), Pw = ["disabled"], Mw = { class: "dropdown-value" }, Dw = ["onClick"], Lw = {
  key: 0,
  class: "dropdown-error"
}, Aw = /* @__PURE__ */ fe({
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
    const v = U(() => {
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
      const x = r.value.getBoundingClientRect(), M = window.innerHeight, P = M - x.bottom, T = x.top, L = Math.min(300, o.options.length * 36 + 8), V = P < L && T > P;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...V ? { bottom: `${M - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    dt(l, async (x) => {
      x && (await gt(), k());
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
        t("span", Mw, f(v.value), 1),
        M[0] || (M[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Pw),
      (n(), D(kt, { to: "body" }, [
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
          style: Ft(u.value)
        }, [
          (n(!0), i(H, null, ve(e.options, (P) => (n(), i("div", {
            key: d(P),
            class: Se(["dropdown-option", { selected: d(P) === e.modelValue }]),
            onClick: (T) => p(P)
          }, f(m(P)), 11, Dw))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", Lw, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Ow = /* @__PURE__ */ ge(Aw, [["__scopeId", "data-v-857e085b"]]);
function Nw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Uw(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!Nw(o.hostname)) return { kind: "unknown" };
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
function zw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Fw(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${zw(o)}`;
}
const Vw = { class: "hf-file-browser" }, Bw = { class: "browser-header" }, Ww = { class: "repo-info" }, Gw = { class: "repo-id" }, jw = {
  key: 0,
  class: "revision-pill"
}, Hw = {
  key: 0,
  class: "loading-state"
}, Kw = {
  key: 1,
  class: "error-state"
}, qw = { class: "toolbar" }, Yw = { class: "toolbar-actions" }, Jw = { class: "file-list-container" }, Qw = {
  key: 0,
  class: "file-list-header"
}, Xw = ["checked", "indeterminate"], Zw = { class: "sort-indicator" }, ek = { class: "sort-indicator" }, tk = {
  key: 1,
  class: "empty-state"
}, sk = {
  key: 2,
  class: "file-list"
}, ok = ["onClick"], nk = ["checked", "onChange"], ak = { class: "file-path" }, lk = { class: "file-size" }, ik = { class: "destination-section" }, rk = { class: "destination-row" }, ck = {
  key: 0,
  class: "path-separator"
}, uk = { class: "action-bar" }, dk = { class: "summary-info" }, fk = { class: "summary-count" }, mk = { class: "summary-size" }, vk = /* @__PURE__ */ fe({
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
    let P = !1;
    const T = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, L = U(() => {
      let pe = c.value;
      if (o.initialPath) {
        const oe = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        pe = pe.filter((ce) => ce.path.startsWith(oe) || ce.path === o.initialPath);
      }
      if (g.value && (pe = pe.filter((oe) => oe.is_model_file)), v.value.trim()) {
        const oe = v.value.toLowerCase();
        pe = pe.filter((ce) => ce.path.toLowerCase().includes(oe));
      }
      return pe;
    }), V = U(() => {
      const pe = [...L.value];
      return pe.sort((oe, ce) => {
        let ue;
        return w.value === "name" ? ue = oe.path.localeCompare(ce.path) : ue = oe.size - ce.size, p.value ? ue : -ue;
      }), pe;
    }), B = U(() => L.value.length === 0 ? !1 : L.value.every((pe) => u.value.has(pe.path))), E = U(() => L.value.some((pe) => u.value.has(pe.path))), I = U(() => {
      const pe = x.value.map((oe) => ({
        label: oe,
        value: oe
      }));
      return pe.push({ label: "Custom path...", value: "__custom__" }), pe;
    }), A = U(() => k.value === "__custom__" ? b.value.trim().length > 0 : k.value.length > 0), Z = U(() => {
      let pe = 0;
      for (const oe of u.value) {
        const ce = c.value.find((ue) => ue.path === oe);
        ce && (pe += ce.size);
      }
      return pe;
    });
    function W(pe) {
      if (pe === 0) return "0 B";
      const oe = 1024 * 1024 * 1024, ce = 1024 * 1024, ue = 1024;
      return pe >= oe ? `${(pe / oe).toFixed(2)} GB` : pe >= ce ? `${(pe / ce).toFixed(1)} MB` : pe >= ue ? `${(pe / ue).toFixed(0)} KB` : `${pe} B`;
    }
    function O(pe) {
      const oe = pe.match(T);
      return oe ? `${oe[1]}${oe[4]}` : null;
    }
    function j(pe) {
      const oe = new Set(u.value), ce = oe.has(pe.path), ue = pe.shard_group || O(pe.path);
      if (ue) {
        const Ee = c.value.filter((Re) => (Re.shard_group || O(Re.path)) === ue);
        ce ? Ee.forEach((Re) => oe.delete(Re.path)) : Ee.forEach((Re) => oe.add(Re.path));
      } else
        ce ? oe.delete(pe.path) : oe.add(pe.path);
      u.value = oe;
    }
    function X() {
      const pe = new Set(u.value);
      for (const oe of L.value)
        oe.is_model_file && pe.add(oe.path);
      u.value = pe;
    }
    function z() {
      u.value = /* @__PURE__ */ new Set();
    }
    function ae() {
      if (B.value) {
        const pe = new Set(u.value);
        for (const oe of L.value)
          pe.delete(oe.path);
        u.value = pe;
      } else {
        const pe = new Set(u.value);
        for (const oe of L.value)
          pe.add(oe.path);
        u.value = pe;
      }
    }
    function ee(pe) {
      w.value === pe ? p.value = !p.value : (w.value = pe, p.value = !0);
    }
    function ke(pe) {
      const oe = pe.split("/");
      return oe.length >= 2 ? oe[oe.length - 2] : null;
    }
    function be() {
      if (M.value || u.value.size === 0) return;
      const pe = /* @__PURE__ */ new Set();
      for (const ue of u.value) {
        const Ee = ke(ue);
        Ee && pe.add(Ee.toLowerCase());
      }
      if (pe.size !== 1) return;
      const oe = [...pe][0], ce = x.value.find(
        (ue) => ue.toLowerCase() === oe
      );
      ce && ce !== k.value && (P = !0, k.value = ce, gt(() => {
        P = !1;
      }));
    }
    function Le() {
      return k.value === "__custom__" ? b.value.trim() : C.value.trim() ? `${k.value}/${C.value.trim()}` : k.value;
    }
    function ze() {
      if (u.value.size === 0 || !A.value) return;
      const pe = Le(), oe = [];
      for (const ce of u.value) {
        const ue = c.value.find((Ee) => Ee.path === ce);
        ue && oe.push({
          url: Fw(o.repoId, o.revision, ue.path),
          destination: pe,
          filename: ue.path.split("/").pop() || ue.path
        });
      }
      a("queue", oe);
    }
    async function Ue() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const pe = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, oe = await l(pe);
          if (c.value = oe.files, o.preselectedFile) {
            const ce = c.value.find((ue) => ue.path === o.preselectedFile);
            ce && j(ce);
          }
        } catch (pe) {
          m.value = pe instanceof Error ? pe.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ye() {
      try {
        const pe = await r();
        x.value = pe.directories, pe.directories.length > 0 && !k.value && (k.value = pe.directories[0]);
      } catch {
        x.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], k.value || (k.value = "checkpoints");
      }
    }
    return dt(() => [o.repoId, o.revision], () => {
      o.repoId && Ue();
    }, { immediate: !1 }), dt(() => o.repoId, () => {
      M.value = !1;
    }), dt(u, () => {
      be();
    }, { deep: !0 }), dt(x, () => {
      x.value.length > 0 && u.value.size > 0 && be();
    }), dt(k, (pe, oe) => {
      P || oe === "" || (M.value = !0);
    }), Qe(() => {
      Ue(), Ye();
    }), (pe, oe) => (n(), i("div", Vw, [
      t("div", Bw, [
        t("button", {
          class: "back-btn",
          onClick: oe[0] || (oe[0] = (ce) => pe.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Ww, [
          t("span", Gw, f(e.repoId), 1),
          e.revision ? (n(), i("span", jw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (n(), i("div", Hw, " Loading repository files... ")) : m.value ? (n(), i("div", Kw, f(m.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", qw, [
          S(xt, {
            modelValue: v.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (ce) => v.value = ce),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Yw, [
            t("button", {
              class: Se(["toggle-btn", { active: g.value }]),
              onClick: oe[2] || (oe[2] = (ce) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: z
            }, "Clear")
          ])
        ]),
        t("div", Jw, [
          L.value.length > 0 ? (n(), i("div", Qw, [
            t("input", {
              type: "checkbox",
              checked: B.value,
              indeterminate: E.value && !B.value,
              class: "file-checkbox",
              onChange: ae
            }, null, 40, Xw),
            t("span", {
              class: "header-name",
              onClick: oe[3] || (oe[3] = (ce) => ee("name"))
            }, [
              oe[9] || (oe[9] = $(" Name ", -1)),
              t("span", Zw, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: oe[4] || (oe[4] = (ce) => ee("size"))
            }, [
              oe[10] || (oe[10] = $(" Size ", -1)),
              t("span", ek, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          L.value.length === 0 ? (n(), i("div", tk, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", sk, [
            (n(!0), i(H, null, ve(V.value, (ce) => (n(), i("div", {
              key: ce.path,
              class: Se(["file-item", { selected: u.value.has(ce.path) }]),
              onClick: (ue) => j(ce)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(ce.path),
                class: "file-checkbox",
                onClick: oe[5] || (oe[5] = it(() => {
                }, ["stop"])),
                onChange: (ue) => j(ce)
              }, null, 40, nk),
              t("span", ak, f(ce.path), 1),
              t("span", lk, f(W(ce.size)), 1)
            ], 10, ok))), 128))
          ]))
        ]),
        t("div", ik, [
          oe[11] || (oe[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", rk, [
            S(Ow, {
              modelValue: k.value,
              "onUpdate:modelValue": oe[6] || (oe[6] = (ce) => k.value = ce),
              options: I.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            k.value !== "__custom__" ? (n(), i("span", ck, "/")) : y("", !0),
            k.value !== "__custom__" ? (n(), D(xt, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": oe[7] || (oe[7] = (ce) => C.value = ce),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          k.value === "__custom__" ? (n(), D(xt, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": oe[8] || (oe[8] = (ce) => b.value = ce),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", uk, [
          t("div", dk, [
            t("span", fk, f(u.value.size) + " file(s) selected", 1),
            t("span", mk, f(W(Z.value)), 1)
          ]),
          S(Te, {
            variant: "primary",
            disabled: u.value.size === 0 || !A.value,
            onClick: ze
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
}), pk = /* @__PURE__ */ ge(vk, [["__scopeId", "data-v-183acebc"]]), gk = { class: "token-config-modal" }, hk = { class: "provider-info" }, yk = { class: "provider-icon" }, wk = { class: "provider-name" }, kk = {
  key: 0,
  class: "current-token"
}, _k = { class: "mask" }, bk = { class: "token-input-section" }, $k = { class: "input-label" }, Ck = { class: "help-text" }, xk = ["href"], Sk = { class: "modal-actions" }, Ik = /* @__PURE__ */ fe({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = Ze(), r = _(""), c = _(!1), u = _(!1), d = U(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), m = U(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = U(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), g = U(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = U(
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
    return (C, b) => (n(), D(ct, {
      title: "Configure API Token",
      onClose: b[2] || (b[2] = (x) => C.$emit("close"))
    }, {
      body: h(() => [
        t("div", gk, [
          t("div", hk, [
            t("span", yk, f(m.value), 1),
            t("span", wk, f(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", kk, [
            b[4] || (b[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", _k, f(e.currentTokenMask), 1),
            S(Te, {
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
          t("div", bk, [
            t("label", $k, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            S(xt, {
              modelValue: r.value,
              "onUpdate:modelValue": b[0] || (b[0] = (x) => r.value = x),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", Ck, [
              t("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, xk)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        t("div", Sk, [
          S(Te, {
            variant: "secondary",
            onClick: b[1] || (b[1] = (x) => C.$emit("close"))
          }, {
            default: h(() => [...b[5] || (b[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(Te, {
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
}), Ek = /* @__PURE__ */ ge(Ik, [["__scopeId", "data-v-0687d0ce"]]), Tk = { class: "huggingface-tab" }, Rk = {
  key: 0,
  class: "search-section"
}, Pk = { class: "search-header" }, Mk = { class: "search-bar" }, Dk = {
  key: 1,
  class: "search-results"
}, Lk = {
  key: 0,
  class: "loading-state"
}, Ak = {
  key: 1,
  class: "error-state"
}, Ok = {
  key: 2,
  class: "results-list"
}, Nk = ["onClick"], Uk = { class: "repo-header" }, zk = { class: "repo-id" }, Fk = { class: "repo-stats" }, Vk = {
  class: "stat",
  title: "Downloads"
}, Bk = {
  class: "stat",
  title: "Likes"
}, Wk = {
  key: 0,
  class: "repo-desc"
}, Gk = {
  key: 1,
  class: "repo-tags"
}, jk = {
  key: 3,
  class: "empty-state"
}, Hk = {
  key: 4,
  class: "hint-state"
}, Kk = /* @__PURE__ */ fe({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = Ze(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), m = _(null), v = _("main"), g = _(), w = _(), p = _(!1), k = _(null), C = U(() => {
      if (!u.value) return !1;
      const B = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || B.includes("authentication") || B.includes("unauthorized");
    });
    function b(B) {
      return B >= 1e6 ? `${(B / 1e6).toFixed(1)}M` : B >= 1e3 ? `${(B / 1e3).toFixed(1)}K` : String(B);
    }
    async function x() {
      const B = l.value.trim();
      if (!B) return;
      u.value = null;
      const E = Uw(B);
      if (E.kind === "file" && E.repoId && E.path) {
        m.value = E.repoId, v.value = E.revision || "main";
        const I = E.path.split("/");
        I.length > 1 ? g.value = I.slice(0, -1).join("/") : g.value = void 0, w.value = E.path, a.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        m.value = E.repoId, v.value = E.revision || "main", g.value = E.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(B) && !B.includes("://")) {
        m.value = B, v.value = "main", g.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const I = await s(B);
        r.value = I.results, d.value = !0;
      } catch (I) {
        u.value = I instanceof Error ? I.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function M(B) {
      m.value = B, v.value = "main", g.value = void 0, w.value = void 0, a.value = "browse";
    }
    function P() {
      a.value = "search", m.value = null, g.value = void 0, w.value = void 0;
    }
    async function T() {
      try {
        const B = await o();
        k.value = B.huggingface_token || null;
      } catch (B) {
        console.error("Failed to load config:", B);
      }
    }
    function L() {
      T(), C.value && l.value && x();
    }
    function V() {
      k.value = null;
    }
    return Qe(T), (B, E) => (n(), i("div", Tk, [
      a.value === "search" ? (n(), i("div", Rk, [
        t("div", Pk, [
          t("div", Mk, [
            S(xt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (I) => l.value = I),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Ht(x, ["enter"])
            }, null, 8, ["modelValue"]),
            S(Te, {
              variant: "primary",
              onClick: x,
              loading: c.value
            }, {
              default: h(() => [...E[5] || (E[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          S(Te, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (I) => p.value = !0)
          }, {
            default: h(() => [
              $(f(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", Dk, [
        c.value ? (n(), i("div", Lk, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Ak, [
          t("p", null, f(u.value), 1),
          C.value ? (n(), D(Te, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (I) => p.value = !0)
          }, {
            default: h(() => [...E[6] || (E[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", Ok, [
          (n(!0), i(H, null, ve(r.value, (I) => (n(), i("div", {
            key: I.repo_id,
            class: "repo-card",
            onClick: (A) => M(I.repo_id)
          }, [
            t("div", Uk, [
              t("span", zk, f(I.repo_id), 1),
              t("div", Fk, [
                t("span", Vk, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(b(I.downloads)), 1)
                ]),
                t("span", Bk, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(b(I.likes)), 1)
                ])
              ])
            ]),
            I.description ? (n(), i("p", Wk, f(I.description), 1)) : y("", !0),
            I.tags.length > 0 ? (n(), i("div", Gk, [
              (n(!0), i(H, null, ve(I.tags.slice(0, 5), (A) => (n(), i("span", {
                key: A,
                class: "tag"
              }, f(A), 1))), 128))
            ])) : y("", !0)
          ], 8, Nk))), 128))
        ])) : d.value ? (n(), i("div", jk, " No repositories found ")) : (n(), i("div", Hk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), D(pk, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": w.value,
        onBack: P,
        onQueue: E[3] || (E[3] = (I) => B.$emit("queue", I))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (n(), D(Ek, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        onClose: E[4] || (E[4] = (I) => p.value = !1),
        onSaved: L,
        onCleared: V
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), qk = /* @__PURE__ */ ge(Kk, [["__scopeId", "data-v-e13209bf"]]), Yk = { class: "civitai-tab" }, Jk = /* @__PURE__ */ fe({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Yk, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Qk = /* @__PURE__ */ ge(Jk, [["__scopeId", "data-v-44948051"]]), Xk = { class: "direct-url-tab" }, Zk = { class: "input-group" }, e_ = { class: "input-group" }, t_ = {
  key: 0,
  class: "error"
}, s_ = { class: "actions" }, o_ = /* @__PURE__ */ fe({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = _(""), r = U(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = U(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), a.value = "", l.value = "";
    };
    return (d, m) => (n(), i("div", Xk, [
      t("div", Zk, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        S(xt, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", e_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(xt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", t_, f(r.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", s_, [
        S(Te, {
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
}), n_ = /* @__PURE__ */ ge(o_, [["__scopeId", "data-v-01def7aa"]]), a_ = { class: "download-modal" }, l_ = { class: "tab-bar" }, i_ = ["onClick"], r_ = { class: "tab-content" }, c_ = /* @__PURE__ */ fe({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = xo(), l = [
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
    return (m, v) => e.show ? (n(), D(ct, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", a_, [
          t("div", l_, [
            (n(), i(H, null, ve(l, (g) => t("button", {
              key: g.id,
              class: Se(["tab-btn", { active: r.value === g.id }]),
              onClick: (w) => r.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, i_)), 64))
          ]),
          t("div", r_, [
            r.value === "huggingface" ? (n(), D(qk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), D(Qk, { key: 1 })) : r.value === "direct" ? (n(), D(n_, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        S(Te, {
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
}), Lr = /* @__PURE__ */ ge(c_, [["__scopeId", "data-v-90a9f401"]]), u_ = /* @__PURE__ */ fe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = Ze(), r = _([]), c = _([]), u = _("production"), d = _(!1), m = _(null), v = _(""), g = _(!1), w = _(null), p = _(!1);
    function k() {
      g.value = !1, o("navigate", "model-index");
    }
    const C = U(
      () => r.value.reduce((E, I) => E + (I.size || 0), 0)
    ), b = U(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((I) => I.filename.toLowerCase().includes(E));
    }), x = U(() => {
      if (!v.value.trim()) return c.value;
      const E = v.value.toLowerCase();
      return c.value.filter((I) => I.filename.toLowerCase().includes(E));
    }), M = U(() => {
      const E = {};
      for (const A of b.value) {
        const Z = A.type || "other";
        E[Z] || (E[Z] = []), E[Z].push(A);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([A], [Z]) => {
        const W = I.indexOf(A), O = I.indexOf(Z);
        return W >= 0 && O >= 0 ? W - O : W >= 0 ? -1 : O >= 0 ? 1 : A.localeCompare(Z);
      }).map(([A, Z]) => ({ type: A, models: Z }));
    });
    function P(E) {
      if (!E) return "Unknown";
      const I = E / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function T(E) {
      w.value = E.hash || E.filename;
    }
    function L(E) {
      o("navigate", "model-index");
    }
    function V(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function B() {
      d.value = !0, m.value = null;
      try {
        const E = await a();
        r.value = E, c.value = [];
        const I = await l();
        u.value = I.environment || "production";
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(B), (E, I) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (A) => g.value = !0)
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (A) => p.value = !0)
              }, {
                default: h(() => [...I[6] || (I[6] = [
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
          S(So, {
            modelValue: v.value,
            "onUpdate:modelValue": I[2] || (I[2] = (A) => v.value = A),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), D(Ms, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (n(), D(Ds, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length ? (n(), D(dn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(r.value.length) + " models • " + f(P(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, ve(M.value, (A) => (n(), D(rt, {
              key: A.type,
              title: A.type.toUpperCase(),
              count: A.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(A.models, (Z) => (n(), D(Pt, {
                  key: Z.hash || Z.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...I[7] || (I[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(Z.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(P(Z.size)), 1)
                  ]),
                  details: h(() => [
                    S(ft, {
                      label: "Used by:",
                      value: (Z.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(ft, {
                      label: "Path:",
                      value: Z.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => T(Z)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
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
            x.value.length ? (n(), D(rt, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(x.value, (A) => (n(), D(Pt, {
                  key: A.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...I[9] || (I[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(A.filename), 1)
                  ]),
                  subtitle: h(() => [...I[10] || (I[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var Z;
                    return [
                      S(ft, {
                        label: "Required by:",
                        value: ((Z = A.workflow_names) == null ? void 0 : Z.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => V(A.filename)
                    }, {
                      default: h(() => [...I[11] || (I[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => L(A.filename)
                    }, {
                      default: h(() => [...I[12] || (I[12] = [
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
            !b.value.length && !x.value.length ? (n(), D(ns, {
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
        onClose: I[3] || (I[3] = (A) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            I[13] || (I[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            I[14] || (I[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          S(de, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...I[15] || (I[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), D(il, {
        key: 0,
        identifier: w.value,
        onClose: I[4] || (I[4] = (A) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      S(Lr, {
        show: p.value,
        onClose: I[5] || (I[5] = (A) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), d_ = /* @__PURE__ */ ge(u_, [["__scopeId", "data-v-af3ca736"]]), f_ = {
  key: 0,
  class: "indexing-progress"
}, m_ = { class: "progress-info" }, v_ = { class: "progress-label" }, p_ = { class: "progress-count" }, g_ = { class: "progress-bar" }, h_ = { class: "modal-content" }, y_ = { class: "modal-header" }, w_ = { class: "modal-body" }, k_ = { class: "input-group" }, __ = { class: "current-path" }, b_ = { class: "input-group" }, $_ = { class: "modal-footer" }, C_ = /* @__PURE__ */ fe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = Ze(), c = s, u = _([]), d = _(!1), m = _(!1), v = _(null), g = _(""), w = _(!1), p = _(null), k = _(!1), C = _(null), b = _(""), x = _(!1), M = _(!1), P = _(null), T = U(
      () => u.value.reduce((O, j) => O + (j.size || 0), 0)
    ), L = U(() => {
      if (!g.value.trim()) return u.value;
      const O = g.value.toLowerCase();
      return u.value.filter((j) => {
        const X = j, z = j.sha256 || X.sha256_hash || "";
        return j.filename.toLowerCase().includes(O) || z.toLowerCase().includes(O);
      });
    }), V = U(() => {
      const O = {};
      for (const X of L.value) {
        const z = X.type || "other";
        O[z] || (O[z] = []), O[z].push(X);
      }
      const j = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([X], [z]) => {
        const ae = j.indexOf(X), ee = j.indexOf(z);
        return ae >= 0 && ee >= 0 ? ae - ee : ae >= 0 ? -1 : ee >= 0 ? 1 : X.localeCompare(z);
      }).map(([X, z]) => ({ type: X, models: z }));
    });
    function B(O) {
      if (!O) return "Unknown";
      const j = 1024 * 1024 * 1024, X = 1024 * 1024;
      return O >= j ? `${(O / j).toFixed(1)} GB` : O >= X ? `${(O / X).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function E(O) {
      p.value = O.hash || O.filename;
    }
    async function I() {
      m.value = !0, v.value = null;
      try {
        const O = await a();
        await Z(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function A() {
      if (b.value.trim()) {
        x.value = !0, v.value = null;
        try {
          const O = await r(b.value.trim());
          C.value = O.path, k.value = !1, b.value = "", await Z(), console.log(`Directory changed: ${O.models_indexed} models indexed`), c("refresh");
        } catch (O) {
          v.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function Z() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (O) {
        v.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function W() {
      try {
        const O = await l();
        C.value = O.path;
      } catch {
      }
    }
    return Qe(() => {
      Z(), W();
    }), (O, j) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: j[2] || (j[2] = (X) => w.value = !0)
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: I
              }, {
                default: h(() => [
                  $(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: j[0] || (j[0] = (X) => k.value = !0)
              }, {
                default: h(() => [...j[11] || (j[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: j[1] || (j[1] = (X) => M.value = !0)
              }, {
                default: h(() => [...j[12] || (j[12] = [
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
          P.value ? (n(), i("div", f_, [
            t("div", m_, [
              t("span", v_, f(P.value.message), 1),
              t("span", p_, f(P.value.current) + "/" + f(P.value.total), 1)
            ]),
            t("div", g_, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${P.value.current / P.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          S(So, {
            modelValue: g.value,
            "onUpdate:modelValue": j[3] || (j[3] = (X) => g.value = X),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || P.value ? (n(), D(Ms, {
            key: 0,
            message: P.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), D(Ds, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            u.value.length ? (n(), D(dn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(B(T.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, ve(V.value, (X) => (n(), D(rt, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(X.models, (z) => (n(), D(Pt, {
                  key: z.sha256 || z.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...j[13] || (j[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(z.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(B(z.size)), 1)
                  ]),
                  details: h(() => [
                    S(ft, {
                      label: "Hash:",
                      value: z.hash ? z.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => E(z)
                    }, {
                      default: h(() => [...j[14] || (j[14] = [
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
            L.value.length ? y("", !0) : (n(), D(ns, {
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
        onClose: j[4] || (j[4] = (X) => w.value = !1)
      }, {
        content: h(() => [...j[15] || (j[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), D(il, {
        key: 0,
        identifier: p.value,
        onClose: j[5] || (j[5] = (X) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), D(kt, { to: "body" }, [
        k.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: j[9] || (j[9] = it((X) => k.value = !1, ["self"]))
        }, [
          t("div", h_, [
            t("div", y_, [
              j[16] || (j[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: j[6] || (j[6] = (X) => k.value = !1)
              }, "✕")
            ]),
            t("div", w_, [
              t("div", k_, [
                j[17] || (j[17] = t("label", null, "Current Directory", -1)),
                t("code", __, f(C.value || "Not set"), 1)
              ]),
              t("div", b_, [
                j[18] || (j[18] = t("label", null, "New Directory Path", -1)),
                S(xt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": j[7] || (j[7] = (X) => b.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              j[19] || (j[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", $_, [
              S(Te, {
                variant: "secondary",
                onClick: j[8] || (j[8] = (X) => k.value = !1)
              }, {
                default: h(() => [...j[20] || (j[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(Te, {
                variant: "primary",
                disabled: !b.value.trim() || x.value,
                loading: x.value,
                onClick: A
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
      S(Lr, {
        show: M.value,
        onClose: j[10] || (j[10] = (X) => M.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), x_ = /* @__PURE__ */ ge(C_, [["__scopeId", "data-v-3705114c"]]), S_ = { class: "node-details" }, I_ = { class: "status-row" }, E_ = {
  key: 0,
  class: "detail-row"
}, T_ = { class: "value" }, R_ = { class: "detail-row" }, P_ = { class: "value" }, M_ = {
  key: 1,
  class: "detail-row"
}, D_ = { class: "value mono" }, L_ = {
  key: 2,
  class: "detail-row"
}, A_ = ["href"], O_ = {
  key: 3,
  class: "detail-row"
}, N_ = { class: "value mono small" }, U_ = { class: "detail-row" }, z_ = {
  key: 0,
  class: "value"
}, F_ = {
  key: 1,
  class: "workflow-list"
}, V_ = /* @__PURE__ */ fe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), D(ct, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => a("close"))
    }, {
      body: h(() => [
        t("div", S_, [
          t("div", I_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Se(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", E_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", T_, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", R_, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", P_, f(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", M_, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", D_, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", L_, [
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
            ], 8, A_)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", O_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", N_, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", U_, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", z_, " Not used in any workflows ")) : (n(), i("div", F_, [
              (n(!0), i(H, null, ve(e.node.used_in_workflows, (m) => (n(), i("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        S(Te, {
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
}), B_ = /* @__PURE__ */ ge(V_, [["__scopeId", "data-v-b342f626"]]), W_ = { class: "dialog-message" }, G_ = {
  key: 0,
  class: "dialog-details"
}, j_ = {
  key: 1,
  class: "dialog-warning"
}, H_ = /* @__PURE__ */ fe({
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
    return (s, o) => (n(), D(ct, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", W_, f(e.message), 1),
        e.details && e.details.length ? (n(), i("div", G_, [
          (n(!0), i(H, null, ve(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", j_, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        S(Te, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), D(Te, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        S(Te, {
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
}), rl = /* @__PURE__ */ ge(H_, [["__scopeId", "data-v-3670b9f5"]]), K_ = { class: "mismatch-warning" }, q_ = { class: "version-mismatch" }, Y_ = { class: "version-actual" }, J_ = { class: "version-expected" }, Q_ = { key: 0 }, X_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Z_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, eb = /* @__PURE__ */ fe({
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
    }), m = _(!1), v = _(null), g = _(""), w = _(!1), p = _(null), k = _(null), C = U(() => {
      if (!g.value.trim()) return d.value.nodes;
      const W = g.value.toLowerCase();
      return d.value.nodes.filter(
        (O) => {
          var j, X;
          return O.name.toLowerCase().includes(W) || ((j = O.description) == null ? void 0 : j.toLowerCase().includes(W)) || ((X = O.repository) == null ? void 0 : X.toLowerCase().includes(W));
        }
      );
    }), b = U(
      () => C.value.filter((W) => W.installed && W.tracked)
    ), x = U(
      () => C.value.filter((W) => !W.installed && W.tracked)
    ), M = U(
      () => C.value.filter((W) => W.installed && !W.tracked)
    );
    function P(W) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[W] || W;
    }
    const T = U(() => o.versionMismatches.length > 0);
    function L(W) {
      return !W.used_in_workflows || W.used_in_workflows.length === 0 ? "Not used in any workflows" : W.used_in_workflows.length === 1 ? W.used_in_workflows[0] : `${W.used_in_workflows.length} workflows`;
    }
    function V(W) {
      p.value = W;
    }
    function B() {
      a("open-node-manager");
    }
    function E(W) {
      k.value = {
        title: "Track as Development Node",
        message: `Track "${W}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const O = await r(W);
            O.status === "success" ? (a("toast", `✓ Node "${W}" tracked as development`, "success"), await Z()) : a("toast", `Failed to track node: ${O.message || "Unknown error"}`, "error");
          } catch (O) {
            a("toast", `Error tracking node: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function I(W) {
      k.value = {
        title: "Remove Untracked Node",
        message: `Remove "${W}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const O = await u(W);
            O.status === "success" ? (a("toast", `✓ Node "${W}" removed`, "success"), await Z()) : a("toast", `Failed to remove node: ${O.message || "Unknown error"}`, "error");
          } catch (O) {
            a("toast", `Error removing node: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function A(W) {
      k.value = {
        title: "Install Missing Node",
        message: `Install "${W}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          k.value = null;
          try {
            m.value = !0;
            const O = await c(W);
            O.status === "success" ? (a("toast", `✓ Node "${W}" installed`, "success"), await Z()) : a("toast", `Failed to install node: ${O.message || "Unknown error"}`, "error");
          } catch (O) {
            a("toast", `Error installing node: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
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
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Qe(Z), (W, O) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (j) => w.value = !0)
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: B
              }, {
                default: h(() => [...O[7] || (O[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(So, {
            modelValue: g.value,
            "onUpdate:modelValue": O[1] || (O[1] = (j) => g.value = j),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (n(), D(Ms, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (n(), D(Ds, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            d.value.total_count ? (n(), D(dn, {
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
            T.value ? (n(), D(rt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", K_, [
                  O[8] || (O[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(H, null, ve(e.versionMismatches, (j) => (n(), D(Pt, {
                  key: j.name,
                  status: "warning"
                }, {
                  icon: h(() => [...O[9] || (O[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(j.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", q_, [
                      t("span", Y_, f(j.actual), 1),
                      O[10] || (O[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", J_, f(j.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "warning",
                      size: "sm",
                      onClick: O[2] || (O[2] = (X) => a("repair-environment"))
                    }, {
                      default: h(() => [...O[11] || (O[11] = [
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
            M.value.length ? (n(), D(rt, {
              key: 2,
              title: "UNTRACKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(M.value, (j) => (n(), D(Pt, {
                  key: j.name,
                  status: "warning"
                }, {
                  icon: h(() => [...O[12] || (O[12] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(j.name), 1)
                  ]),
                  subtitle: h(() => [...O[13] || (O[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    S(ft, {
                      label: "Used by:",
                      value: L(j)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => V(j)
                    }, {
                      default: h(() => [...O[14] || (O[14] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => E(j.name)
                    }, {
                      default: h(() => [...O[15] || (O[15] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => I(j.name)
                    }, {
                      default: h(() => [...O[16] || (O[16] = [
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
            b.value.length ? (n(), D(rt, {
              key: 3,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(b.value, (j) => (n(), D(Pt, {
                  key: j.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(j.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(j.name), 1)
                  ]),
                  subtitle: h(() => [
                    j.version ? (n(), i("span", Q_, f(j.source === "development" ? "" : "v") + f(j.version), 1)) : (n(), i("span", X_, "version unknown")),
                    t("span", Z_, " • " + f(P(j.source)), 1)
                  ]),
                  details: h(() => [
                    S(ft, {
                      label: "Used by:",
                      value: L(j)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => V(j)
                    }, {
                      default: h(() => [...O[17] || (O[17] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: B
                    }, {
                      default: h(() => [...O[18] || (O[18] = [
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
            x.value.length ? (n(), D(rt, {
              key: 4,
              title: "MISSING",
              count: x.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(x.value, (j) => (n(), D(Pt, {
                  key: j.name,
                  status: "missing"
                }, {
                  icon: h(() => [...O[19] || (O[19] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(j.name), 1)
                  ]),
                  subtitle: h(() => [...O[20] || (O[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    S(ft, {
                      label: "Required by:",
                      value: L(j)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => V(j)
                    }, {
                      default: h(() => [...O[21] || (O[21] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => A(j.name)
                    }, {
                      default: h(() => [...O[22] || (O[22] = [
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
            !b.value.length && !x.value.length && !M.value.length ? (n(), D(ns, {
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
        onClose: O[4] || (O[4] = (j) => w.value = !1)
      }, {
        content: h(() => [...O[23] || (O[23] = [
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
          S(de, {
            variant: "primary",
            onClick: O[3] || (O[3] = (j) => w.value = !1)
          }, {
            default: h(() => [...O[24] || (O[24] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), D(B_, {
        key: 0,
        node: p.value,
        onClose: O[5] || (O[5] = (j) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      k.value ? (n(), D(rl, {
        key: 1,
        title: k.value.title,
        message: k.value.message,
        warning: k.value.warning,
        "confirm-label": k.value.confirmLabel,
        destructive: k.value.destructive,
        onConfirm: k.value.onConfirm,
        onCancel: O[6] || (O[6] = (j) => k.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), tb = /* @__PURE__ */ ge(eb, [["__scopeId", "data-v-1555a802"]]);
function Ar(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const sb = { class: "remote-url-display" }, ob = ["title"], nb = ["title"], ab = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, lb = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ib = /* @__PURE__ */ fe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = _(!1), a = U(() => {
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
    return (r, c) => (n(), i("div", sb, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(a.value), 9, ob),
      t("button", {
        class: Se(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", lb, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", ab, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, nb)
    ]));
  }
}), rb = /* @__PURE__ */ ge(ib, [["__scopeId", "data-v-7768a58d"]]), cb = { class: "remote-title" }, ub = {
  key: 0,
  class: "default-badge"
}, db = {
  key: 1,
  class: "sync-badge"
}, fb = {
  key: 0,
  class: "ahead"
}, mb = {
  key: 1,
  class: "behind"
}, vb = {
  key: 1,
  class: "synced"
}, pb = ["href"], gb = {
  key: 1,
  class: "remote-url-text"
}, hb = /* @__PURE__ */ fe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = U(() => s.fetchingRemote === s.remote.name), a = U(() => s.remote.is_default), l = U(() => s.syncStatus && s.syncStatus.behind > 0), r = U(() => s.syncStatus && s.syncStatus.ahead > 0), c = U(() => s.remote.push_url !== s.remote.fetch_url), u = U(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (n(), D(Pt, {
      status: a.value ? "synced" : void 0
    }, no({
      icon: h(() => [
        $(f(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", cb, [
          t("span", null, f(e.remote.name), 1),
          a.value ? (n(), i("span", ub, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", db, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", fb, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", mb, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", vb, "✓ synced"))
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
          onClick: v[0] || (v[0] = it(() => {
          }, ["stop"]))
        }, f(d.value), 9, pb)) : (n(), i("span", gb, f(d.value), 1))
      ]),
      actions: h(() => [
        S(de, {
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
        S(de, {
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
        S(de, {
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
        S(de, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), D(de, {
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), D(ft, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              S(rb, {
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
}), yb = /* @__PURE__ */ ge(hb, [["__scopeId", "data-v-8310f3a8"]]), wb = ["for"], kb = {
  key: 0,
  class: "base-form-field-required"
}, _b = { class: "base-form-field-input" }, bb = {
  key: 1,
  class: "base-form-field-error"
}, $b = {
  key: 2,
  class: "base-form-field-hint"
}, Cb = /* @__PURE__ */ fe({
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
    return (a, l) => (n(), i("div", {
      class: Se(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (n(), i("span", kb, "*")) : y("", !0)
      ], 8, wb)) : y("", !0),
      t("div", _b, [
        Ke(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", bb, f(e.error), 1)) : e.hint ? (n(), i("span", $b, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), wa = /* @__PURE__ */ ge(Cb, [["__scopeId", "data-v-9a1cf296"]]), xb = { class: "remote-form" }, Sb = { class: "form-header" }, Ib = { class: "form-body" }, Eb = {
  key: 0,
  class: "form-error"
}, Tb = { class: "form-actions" }, Rb = /* @__PURE__ */ fe({
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
    dt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = U(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (m, v) => (n(), i("div", xb, [
      t("div", Sb, [
        S(Nt, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Ib, [
        S(wa, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            S(xt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        S(wa, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            S(xt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(wa, { label: "Push URL (optional)" }, {
          default: h(() => [
            S(xt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", Eb, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Tb, [
        S(de, {
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
        S(de, {
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
}), Pb = /* @__PURE__ */ ge(Rb, [["__scopeId", "data-v-56021b18"]]), Mb = { class: "conflict-summary-box" }, Db = { class: "summary-header" }, Lb = { class: "summary-text" }, Ab = { key: 0 }, Ob = {
  key: 1,
  class: "all-resolved"
}, Nb = { class: "summary-progress" }, Ub = { class: "progress-bar" }, zb = { class: "progress-text" }, Fb = /* @__PURE__ */ fe({
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
    return (a, l) => (n(), i("div", Mb, [
      t("div", Db, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", Lb, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", Ab, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (n(), i("p", Ob, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", Nb, [
        t("div", Ub, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", zb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Vb = /* @__PURE__ */ ge(Fb, [["__scopeId", "data-v-4e9e6cc9"]]), Bb = { class: "modal-header" }, Wb = { class: "modal-title" }, Gb = { class: "modal-body" }, jb = {
  key: 0,
  class: "error-box"
}, Hb = {
  key: 0,
  class: "error-hint"
}, Kb = {
  key: 1,
  class: "loading-state"
}, qb = { class: "commit-summary" }, Yb = {
  key: 0,
  class: "commits-section"
}, Jb = { class: "commit-list" }, Qb = { class: "commit-hash" }, Xb = { class: "commit-message" }, Zb = { class: "commit-date" }, e2 = {
  key: 1,
  class: "changes-section"
}, t2 = {
  key: 0,
  class: "change-group",
  open: ""
}, s2 = { class: "change-count" }, o2 = { class: "change-list" }, n2 = {
  key: 0,
  class: "conflict-badge"
}, a2 = {
  key: 1,
  class: "change-group"
}, l2 = { class: "change-count" }, i2 = { class: "change-list" }, r2 = {
  key: 2,
  class: "change-group"
}, c2 = { class: "change-count" }, u2 = { class: "change-list" }, d2 = {
  key: 3,
  class: "strategy-section"
}, f2 = { class: "radio-group" }, m2 = { class: "radio-option" }, v2 = { class: "radio-option" }, p2 = { class: "radio-option" }, g2 = {
  key: 4,
  class: "up-to-date"
}, h2 = { class: "modal-actions" }, ti = "comfygit.pullModelStrategy", y2 = /* @__PURE__ */ fe({
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
    const o = e, a = s, l = _(localStorage.getItem(ti) || "skip");
    dt(l, (b) => {
      localStorage.setItem(ti, b);
    });
    const r = U(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = U(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = U(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = U(() => o.preview && Ar(o.preview) ? o.preview : null), v = U(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = U(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = U(
      () => v.value > 0 && g.value === v.value
    ), p = U(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
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
      var M, P;
      return n(), D(kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (T) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = it(() => {
            }, ["stop"]))
          }, [
            t("div", Bb, [
              t("h3", Wb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (T) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", Gb, [
              e.error ? (n(), i("div", jb, [
                x[13] || (x[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  x[12] || (x[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  r.value ? (n(), i("p", Hb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", Kb, [...x[14] || (x[14] = [
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
                t("div", qb, [
                  x[17] || (x[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", Yb, [
                  x[18] || (x[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", Jb, [
                    (n(!0), i(H, null, ve(e.preview.commits, (T) => (n(), i("div", {
                      key: T.hash,
                      class: "commit-item"
                    }, [
                      t("span", Qb, f(T.short_hash || T.hash.slice(0, 7)), 1),
                      t("span", Xb, f(T.message), 1),
                      t("span", Zb, f(T.date_relative || T.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", e2, [
                  x[22] || (x[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", t2, [
                    t("summary", null, [
                      x[19] || (x[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", s2, f(c.value) + " changes", 1)
                    ]),
                    t("div", o2, [
                      (n(!0), i(H, null, ve(e.preview.changes.workflows.added, (T) => (n(), i("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128)),
                      (n(!0), i(H, null, ve(e.preview.changes.workflows.modified, (T) => (n(), i("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(T) + " ", 1),
                        k(T) ? (n(), i("span", n2, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, ve(e.preview.changes.workflows.deleted, (T) => (n(), i("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + f(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", a2, [
                    t("summary", null, [
                      x[20] || (x[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", l2, f(u.value) + " to install", 1)
                    ]),
                    t("div", i2, [
                      (n(!0), i(H, null, ve(e.preview.changes.nodes.to_install, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", r2, [
                    t("summary", null, [
                      x[21] || (x[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", c2, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", u2, [
                      (n(!0), i(H, null, ve(e.preview.changes.models.referenced, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item"
                      }, f(T), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (n(), D(Vb, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", d2, [
                  x[27] || (x[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", f2, [
                    t("label", m2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (T) => l.value = T),
                        value: "all"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      x[23] || (x[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", v2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (T) => l.value = T),
                        value: "required"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      x[24] || (x[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", p2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (T) => l.value = T),
                        value: "skip"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      x[25] || (x[25] = t("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", g2, [
                  x[29] || (x[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", h2, [
              S(de, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (T) => b.$emit("close"))
              }, {
                default: h(() => [...x[30] || (x[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(H, { key: 0 }, [
                S(de, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (T) => C(!1))
                }, {
                  default: h(() => [...x[31] || (x[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(de, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (T) => C(!0))
                }, {
                  default: h(() => [...x[32] || (x[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (P = e.preview) != null && P.has_uncommitted_changes ? (n(), D(de, {
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
                m.value && !w.value ? (n(), D(de, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (T) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), D(de, {
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
}), w2 = /* @__PURE__ */ ge(y2, [["__scopeId", "data-v-1d633bba"]]), k2 = { class: "modal-header" }, _2 = { class: "modal-title" }, b2 = { class: "modal-body" }, $2 = {
  key: 0,
  class: "loading-state"
}, C2 = {
  key: 1,
  class: "warning-box"
}, x2 = {
  key: 0,
  class: "commits-section"
}, S2 = { class: "commit-list" }, I2 = { class: "commit-hash" }, E2 = { class: "commit-message" }, T2 = { class: "commit-date" }, R2 = { class: "force-option" }, P2 = { class: "checkbox-option" }, M2 = { class: "commit-summary" }, D2 = { key: 0 }, L2 = { key: 1 }, A2 = {
  key: 0,
  class: "info-box"
}, O2 = {
  key: 1,
  class: "commits-section"
}, N2 = { class: "commit-list" }, U2 = { class: "commit-hash" }, z2 = { class: "commit-message" }, F2 = { class: "commit-date" }, V2 = {
  key: 2,
  class: "up-to-date"
}, B2 = { class: "modal-actions" }, W2 = /* @__PURE__ */ fe({
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
      return n(), D(kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = it(() => {
            }, ["stop"]))
          }, [
            t("div", k2, [
              t("h3", _2, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", b2, [
              e.loading ? (n(), i("div", $2, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", C2, [...c[9] || (c[9] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", x2, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", S2, [
                    (n(!0), i(H, null, ve(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", I2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", E2, f(v.message), 1),
                      t("span", T2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", R2, [
                  t("label", P2, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => a.value = v)
                    }, null, 512), [
                      [nn, a.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", M2, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", D2, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", L2, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", A2, [...c[15] || (c[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", O2, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", N2, [
                    (n(!0), i(H, null, ve(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", U2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", z2, f(v.message), 1),
                      t("span", F2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", V2, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", B2, [
              S(de, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => r.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (n(), i(H, { key: 0 }, [
                S(de, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(de, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), D(de, {
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
}), G2 = /* @__PURE__ */ ge(W2, [["__scopeId", "data-v-3c2e35ab"]]), j2 = { class: "resolution-choice-group" }, H2 = ["disabled"], K2 = ["disabled"], q2 = /* @__PURE__ */ fe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", j2, [
      t("button", {
        class: Se(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, H2),
      t("button", {
        class: Se(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, K2)
    ]));
  }
}), Y2 = /* @__PURE__ */ ge(q2, [["__scopeId", "data-v-985715ed"]]), J2 = { class: "conflict-header" }, Q2 = { class: "conflict-info" }, X2 = { class: "workflow-name" }, Z2 = { class: "conflict-description" }, e$ = {
  key: 0,
  class: "resolved-badge"
}, t$ = { class: "resolved-text" }, s$ = { class: "conflict-hashes" }, o$ = { class: "hash-item" }, n$ = { class: "hash-item" }, a$ = { class: "conflict-actions" }, l$ = /* @__PURE__ */ fe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(o.resolution);
    dt(() => o.resolution, (d) => {
      l.value = d;
    }), dt(l, (d) => {
      d && a("resolve", d);
    });
    const r = U(() => l.value !== null), c = U(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = U(() => {
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
        t("div", J2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Q2, [
            t("code", X2, f(e.conflict.name) + ".json", 1),
            t("div", Z2, f(c.value), 1)
          ]),
          r.value ? (n(), i("div", e$, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", t$, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", s$, [
          t("span", o$, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", n$, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", a$, [
          S(Y2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), i$ = /* @__PURE__ */ ge(l$, [["__scopeId", "data-v-506d3bbf"]]), r$ = { class: "resolution-content" }, c$ = {
  key: 0,
  class: "error-box"
}, u$ = { class: "resolution-header" }, d$ = { class: "header-stats" }, f$ = { class: "stat" }, m$ = { class: "stat-value" }, v$ = { class: "stat resolved" }, p$ = { class: "stat-value" }, g$ = {
  key: 0,
  class: "stat pending"
}, h$ = { class: "stat-value" }, y$ = { class: "conflicts-list" }, w$ = {
  key: 1,
  class: "all-resolved-message"
}, k$ = /* @__PURE__ */ fe({
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
    const o = e, a = s, l = U(() => o.resolutions.size), r = U(() => o.workflowConflicts.length - l.value), c = U(() => l.value === o.workflowConflicts.length), u = U(
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
    return (w, p) => (n(), D(ct, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", r$, [
          e.error ? (n(), i("div", c$, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", u$, [
            t("div", d$, [
              t("div", f$, [
                t("span", m$, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", v$, [
                t("span", p$, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", g$, [
                t("span", h$, f(r.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", y$, [
            (n(!0), i(H, null, ve(e.workflowConflicts, (k) => (n(), D(i$, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (C) => m(k.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", w$, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(Te, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Te, {
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
}), _$ = /* @__PURE__ */ ge(k$, [["__scopeId", "data-v-c58d150d"]]), b$ = { class: "node-conflict-item" }, $$ = { class: "node-header" }, C$ = { class: "node-name" }, x$ = { class: "node-id" }, S$ = { class: "version-comparison" }, I$ = { class: "version yours" }, E$ = { class: "version theirs" }, T$ = { class: "chosen-version" }, R$ = { class: "chosen" }, P$ = { class: "chosen-reason" }, M$ = { class: "affected-workflows" }, D$ = { class: "wf-source" }, L$ = { class: "wf-version" }, A$ = /* @__PURE__ */ fe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", b$, [
      t("div", $$, [
        t("code", C$, f(e.conflict.node_name), 1),
        t("span", x$, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", S$, [
        t("div", I$, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", E$, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", T$, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", R$, f(e.conflict.chosen_version), 1),
        t("span", P$, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", M$, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(H, null, ve(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, f(a.name), 1),
            t("span", D$, "(" + f(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", L$, "needs v" + f(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), O$ = /* @__PURE__ */ ge(A$, [["__scopeId", "data-v-8b626725"]]), N$ = { class: "validation-content" }, U$ = {
  key: 0,
  class: "compatible-message"
}, z$ = { class: "conflicts-list" }, F$ = {
  key: 2,
  class: "warnings-section"
}, V$ = /* @__PURE__ */ fe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), D(ct, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        t("div", N$, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", U$, [
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
            t("div", z$, [
              (n(!0), i(H, null, ve(e.validation.node_conflicts, (u) => (n(), D(O$, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", F$, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(H, null, ve(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(Te, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Te, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(Te, {
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
}), B$ = /* @__PURE__ */ ge(V$, [["__scopeId", "data-v-fefd26ed"]]), W$ = { key: 0 }, G$ = /* @__PURE__ */ fe({
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
    } = Ze(), k = _([]), C = _(null), b = _({}), x = _(!1), M = _(null), P = _(""), T = _(!1), L = _(null), V = _(!1), B = _("add"), E = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), I = U(() => {
      if (!P.value.trim()) return k.value;
      const ye = P.value.toLowerCase();
      return k.value.filter(
        (K) => K.name.toLowerCase().includes(ye) || K.fetch_url.toLowerCase().includes(ye) || K.push_url.toLowerCase().includes(ye)
      );
    });
    async function A() {
      x.value = !0, M.value = null;
      try {
        const ye = await a();
        k.value = ye.remotes, C.value = ye.current_branch_tracking || null, await Promise.all(
          ye.remotes.map(async (K) => {
            const G = await d(K.name);
            G && (b.value[K.name] = G);
          })
        );
      } catch (ye) {
        M.value = ye instanceof Error ? ye.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function Z() {
      B.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function W(ye) {
      const K = k.value.find((G) => G.name === ye);
      K && (B.value = "edit", E.value = {
        name: K.name,
        fetchUrl: K.fetch_url,
        pushUrl: K.push_url
      }, V.value = !0);
    }
    async function O(ye) {
      try {
        B.value === "add" ? await l(ye.name, ye.fetchUrl) : await c(ye.name, ye.fetchUrl, ye.pushUrl || void 0), V.value = !1, await A();
      } catch (K) {
        M.value = K instanceof Error ? K.message : "Operation failed";
      }
    }
    function j() {
      V.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(ye) {
      L.value = ye;
      try {
        await u(ye);
        const K = await d(ye);
        K && (b.value[ye] = K), o("toast", `✓ Fetched from ${ye}`, "success");
      } catch (K) {
        o("toast", K instanceof Error ? K.message : "Fetch failed", "error");
      } finally {
        L.value = null;
      }
    }
    async function z(ye) {
      if (confirm(`Remove remote "${ye}"?`))
        try {
          await r(ye), await A();
        } catch (K) {
          M.value = K instanceof Error ? K.message : "Failed to remove remote";
        }
    }
    function ae() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ee = _("idle"), ke = U(() => ee.value === "pull_preview"), be = U(
      () => ee.value === "resolving" || ee.value === "validating"
    ), Le = U(
      () => ee.value === "validation_review" || ee.value === "executing"
    ), ze = _(!1), Ue = _(null), Ye = _(!1), pe = _(null), oe = _(!1), ce = _(null), ue = _(null), Ee = _(/* @__PURE__ */ new Map()), Re = _(null), Fe = _(null), N = U(() => ce.value && Ar(ce.value) ? ce.value : null);
    async function R(ye) {
      pe.value = ye, ee.value = "pull_preview", oe.value = !0, ce.value = null, ue.value = null;
      try {
        ce.value = await m(ye);
      } catch (K) {
        ue.value = K instanceof Error ? K.message : "Failed to load pull preview";
      } finally {
        oe.value = !1;
      }
    }
    function F() {
      ee.value = "idle", ce.value = null, ue.value = null, pe.value = null;
    }
    async function q(ye) {
      if (!pe.value) return;
      ee.value = "executing", ue.value = null;
      const K = pe.value;
      try {
        const G = await v(K, ye);
        if (G.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, ee.value = "pull_preview";
          return;
        }
        Ie(), ee.value = "idle", o("toast", `✓ Pulled from ${K}`, "success"), await A();
      } catch (G) {
        ue.value = G instanceof Error ? G.message : "Pull failed", ee.value = "pull_preview";
      }
    }
    function ne() {
      N.value && (ee.value = "resolving", Fe.value = null);
    }
    function re(ye, K) {
      Ee.value.set(ye, { name: ye, resolution: K });
    }
    function $e() {
      ee.value = "pull_preview";
    }
    async function ie() {
      ee.value = "validating", Fe.value = null;
      try {
        const ye = Array.from(Ee.value.values());
        Re.value = await p(pe.value, ye), ee.value = "validation_review";
      } catch (ye) {
        Fe.value = ye instanceof Error ? ye.message : "Validation failed", ee.value = "resolving";
      }
    }
    async function we() {
      ee.value = "executing";
      const ye = pe.value;
      try {
        const K = Array.from(Ee.value.values()), G = await v(ye, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: K
        });
        if (G.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, ee.value = "pull_preview";
          return;
        }
        Ie(), ee.value = "idle", o("toast", `✓ Pulled from ${ye}`, "success"), await A();
      } catch (K) {
        ue.value = K instanceof Error ? K.message : "Pull failed", ee.value = "validation_review";
      }
    }
    function he() {
      ee.value = "resolving";
    }
    function Pe() {
      Ie(), ee.value = "idle";
    }
    function Ie() {
      Ee.value.clear(), Re.value = null, Fe.value = null, ue.value = null, ce.value = null, pe.value = null;
    }
    async function te(ye) {
      pe.value = ye, ze.value = !0, oe.value = !0, Ue.value = null;
      try {
        Ue.value = await g(ye);
      } catch (K) {
        M.value = K instanceof Error ? K.message : "Failed to load push preview";
      } finally {
        oe.value = !1;
      }
    }
    function Y() {
      ze.value = !1, Ue.value = null, pe.value = null;
    }
    async function Me(ye) {
      if (!pe.value) return;
      Ye.value = !0;
      const K = pe.value;
      try {
        await w(K, ye), Y(), o("toast", `✓ Pushed to ${K}`, "success"), await A();
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Push failed", "error");
      } finally {
        Ye.value = !1;
      }
    }
    function Ce() {
      const ye = pe.value;
      Y(), ye && R(ye);
    }
    return Qe(A), (ye, K) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: K[0] || (K[0] = (G) => T.value = !0)
          }, {
            actions: h(() => [
              V.value ? y("", !0) : (n(), D(de, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: h(() => [...K[3] || (K[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          V.value ? y("", !0) : (n(), D(So, {
            key: 0,
            modelValue: P.value,
            "onUpdate:modelValue": K[1] || (K[1] = (G) => P.value = G),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          x.value ? (n(), D(Ms, {
            key: 0,
            message: "Loading remotes..."
          })) : M.value ? (n(), D(Ds, {
            key: 1,
            message: M.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            V.value ? (n(), D(Pb, {
              key: 0,
              mode: B.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: O,
              onCancel: j
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            k.value.length && !V.value ? (n(), D(dn, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(k.value.length) + " remote" + f(k.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (n(), i("span", W$, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            I.value.length && !V.value ? (n(), D(rt, {
              key: 2,
              title: "REMOTES",
              count: I.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(I.value, (G) => (n(), D(yb, {
                  key: G.name,
                  remote: G,
                  "sync-status": b.value[G.name],
                  "fetching-remote": L.value,
                  onFetch: X,
                  onEdit: W,
                  onRemove: z,
                  onPull: R,
                  onPush: te
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !I.value.length && !V.value ? (n(), D(ns, {
              key: 3,
              icon: "🌐",
              message: P.value ? `No remotes match '${P.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                S(de, {
                  variant: "primary",
                  onClick: Z
                }, {
                  default: h(() => [...K[4] || (K[4] = [
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
        show: T.value,
        title: "About Git Remotes",
        onClose: K[2] || (K[2] = (G) => T.value = !1)
      }, {
        content: h(() => [...K[5] || (K[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          S(de, {
            variant: "link",
            onClick: ae
          }, {
            default: h(() => [...K[6] || (K[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(w2, {
        show: ke.value,
        "remote-name": pe.value || "",
        preview: ce.value,
        loading: oe.value,
        pulling: ee.value === "executing",
        error: ue.value,
        "conflict-resolutions": Ee.value,
        onClose: F,
        onPull: q,
        onOpenConflictResolution: ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(G2, {
        show: ze.value,
        "remote-name": pe.value || "",
        preview: Ue.value,
        loading: oe.value,
        pushing: Ye.value,
        onClose: Y,
        onPush: Me,
        onPullFirst: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      be.value && N.value ? (n(), D(_$, {
        key: 0,
        "workflow-conflicts": N.value.workflow_conflicts,
        resolutions: Ee.value,
        "operation-type": "pull",
        validating: ee.value === "validating",
        error: Fe.value,
        onClose: $e,
        onResolve: re,
        onApply: ie
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Le.value && Re.value ? (n(), D(B$, {
        key: 1,
        validation: Re.value,
        "operation-type": "pull",
        executing: ee.value === "executing",
        onProceed: we,
        onGoBack: he,
        onCancel: Pe
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), j$ = /* @__PURE__ */ ge(G$, [["__scopeId", "data-v-9ae3b76d"]]), H$ = { class: "setting-info" }, K$ = { class: "setting-label" }, q$ = {
  key: 0,
  class: "required-marker"
}, Y$ = {
  key: 0,
  class: "setting-description"
}, J$ = { class: "setting-control" }, Q$ = /* @__PURE__ */ fe({
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
      t("div", H$, [
        t("div", K$, [
          $(f(e.label) + " ", 1),
          e.required ? (n(), i("span", q$, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", Y$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", J$, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Do = /* @__PURE__ */ ge(Q$, [["__scopeId", "data-v-cb5d236c"]]), X$ = { class: "toggle" }, Z$ = ["checked", "disabled"], eC = /* @__PURE__ */ fe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", X$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, Z$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), si = /* @__PURE__ */ ge(eC, [["__scopeId", "data-v-71c0f550"]]), tC = { class: "workspace-settings-content" }, sC = { class: "settings-section" }, oC = { class: "path-setting" }, nC = { class: "path-value" }, aC = { class: "path-setting" }, lC = { class: "path-value" }, iC = { class: "settings-section" }, rC = { class: "settings-section" }, cC = { class: "settings-section" }, uC = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = Ze(), u = _(!1), d = _(null), m = _(null), v = _(null), g = _(null), w = _(""), p = _(""), k = _(""), C = _(!1), b = _(!1), x = _(!1), M = _(!0);
    function P(Z) {
      return Z.join(" ");
    }
    function T(Z) {
      return Z.trim() ? Z.trim().split(/\s+/) : [];
    }
    const L = U(() => {
      if (!g.value) return !1;
      const Z = C.value, W = b.value, O = k.value !== P(g.value.comfyui_extra_args || []);
      return Z || W || O;
    });
    async function V() {
      u.value = !0, d.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", k.value = P(v.value.comfyui_extra_args || []), C.value = !1, b.value = !1;
        const Z = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        x.value = Z !== "false", M.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (Z) {
        d.value = Z instanceof Error ? Z.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function B() {
      var Z;
      m.value = null;
      try {
        const W = {};
        C.value && (W.civitai_api_key = w.value || null), b.value && (W.huggingface_token = p.value || null), k.value !== P(((Z = g.value) == null ? void 0 : Z.comfyui_extra_args) || []) && (W.comfyui_extra_args = T(k.value)), await c(W, a.workspacePath || void 0), await V(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (W) {
        const O = W instanceof Error ? W.message : "Failed to save settings";
        m.value = { type: "error", message: O }, l("error", O);
      }
    }
    function E() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = g.value.huggingface_token || "", k.value = P(g.value.comfyui_extra_args || []), C.value = !1, b.value = !1, m.value = null);
    }
    function I(Z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Z)), console.log("[ComfyGit] Auto-refresh setting saved:", Z);
    }
    function A(Z) {
      Z ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Z ? "enabled" : "disabled");
    }
    return s({
      saveSettings: B,
      resetSettings: E,
      hasChanges: L,
      loadSettings: V
    }), Qe(V), (Z, W) => (n(), i("div", tC, [
      u.value ? (n(), D(Ms, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (n(), D(Ds, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: V
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        S(rt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var O, j;
            return [
              t("div", sC, [
                t("div", oC, [
                  W[7] || (W[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  W[8] || (W[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", nC, f(((O = v.value) == null ? void 0 : O.workspace_path) || "Loading..."), 1)
                ]),
                t("div", aC, [
                  W[9] || (W[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  W[10] || (W[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", lC, f(((j = v.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(rt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", iC, [
              S(Do, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  S(Ko, {
                    modelValue: w.value,
                    "onUpdate:modelValue": W[0] || (W[0] = (O) => w.value = O),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: W[1] || (W[1] = (O) => C.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Do, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  S(Ko, {
                    modelValue: p.value,
                    "onUpdate:modelValue": W[2] || (W[2] = (O) => p.value = O),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: W[3] || (W[3] = (O) => b.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        S(rt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", rC, [
              S(Do, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  S(Ko, {
                    modelValue: k.value,
                    "onUpdate:modelValue": W[4] || (W[4] = (O) => k.value = O),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              W[11] || (W[11] = t("div", { class: "setting-hint" }, [
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
        S(rt, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", cC, [
              S(Do, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  S(si, {
                    modelValue: x.value,
                    "onUpdate:modelValue": [
                      W[5] || (W[5] = (O) => x.value = O),
                      I
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(Do, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  S(si, {
                    modelValue: M.value,
                    "onUpdate:modelValue": [
                      W[6] || (W[6] = (O) => M.value = O),
                      A
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (n(), D(dn, {
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
}), Or = /* @__PURE__ */ ge(uC, [["__scopeId", "data-v-9c5b427b"]]), dC = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = _(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), D(Mt, null, {
      header: h(() => [
        S(Dt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              S(de, {
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
              (c = s.value) != null && c.hasChanges ? (n(), D(de, {
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
        S(Or, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), fC = { class: "base-tabs" }, mC = ["disabled", "onClick"], vC = {
  key: 0,
  class: "base-tabs__badge"
}, pC = /* @__PURE__ */ fe({
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
    return (r, c) => (n(), i("div", fC, [
      (n(!0), i(H, null, ve(e.tabs, (u) => (n(), i("button", {
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
        u.badge ? (n(), i("span", vC, f(u.badge), 1)) : y("", !0)
      ], 10, mC))), 128))
    ]));
  }
}), Nr = /* @__PURE__ */ ge(pC, [["__scopeId", "data-v-ad5e6cad"]]), gC = { class: "log-viewer-wrapper" }, hC = ["disabled", "title"], yC = /* @__PURE__ */ fe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = _(null), a = _("idle"), l = U(() => s.logs.map((m) => ({
      text: s.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function r() {
      var v;
      await gt();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Qe(r), dt(() => s.logs, r);
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
    return (m, v) => (n(), i("div", gC, [
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
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, hC),
        (n(!0), i(H, null, ve(l.value, (g, w) => (n(), i("div", {
          key: w,
          class: Se(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Ur = /* @__PURE__ */ ge(yC, [["__scopeId", "data-v-c0cc6d21"]]), wC = /* @__PURE__ */ fe({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = Ze(), c = _("workspace"), u = _([]), d = _(!1), m = _(null), v = _(!1), g = _(null), w = _(null), p = _(!1), k = U(() => c.value === "workspace" ? g.value : w.value);
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
        const [M, P] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (g.value = M.path), P.exists && (w.value = P.path);
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
    return dt(c, () => {
      C();
    }), Qe(() => {
      C(), b();
    }), (M, P) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (T) => v.value = !0)
          }, {
            actions: h(() => [
              S(de, {
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
              S(de, {
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
          S(Nr, {
            modelValue: c.value,
            "onUpdate:modelValue": P[1] || (P[1] = (T) => c.value = T),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), D(Ms, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (n(), D(Ds, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            u.value.length === 0 ? (n(), D(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), D(Ur, {
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
        onClose: P[3] || (P[3] = (T) => v.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
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
          S(de, {
            variant: "primary",
            onClick: P[2] || (P[2] = (T) => v.value = !1)
          }, {
            default: h(() => [...P[5] || (P[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kC = /* @__PURE__ */ fe({
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
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (x) => d.value = !0)
          }, {
            actions: h(() => [
              S(de, {
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
              S(de, {
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
          c.value ? (n(), D(Ms, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), D(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length === 0 ? (n(), D(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), D(Ur, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      S(as, {
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
          S(de, {
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
}), _C = { class: "env-title" }, bC = {
  key: 0,
  class: "current-badge"
}, $C = {
  key: 0,
  class: "branch-info"
}, CC = /* @__PURE__ */ fe({
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
    return (s, o) => (n(), D(Pt, {
      status: e.isCurrent ? "synced" : void 0
    }, no({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", _C, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", bC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", $C, [
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
          e.lastUsed && e.showLastUsed ? (n(), D(ft, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), xC = /* @__PURE__ */ ge(CC, [["__scopeId", "data-v-9231917a"]]), SC = { class: "env-details" }, IC = { class: "status-row" }, EC = {
  key: 0,
  class: "detail-row"
}, TC = { class: "value mono" }, RC = {
  key: 1,
  class: "detail-row"
}, PC = { class: "value mono small" }, MC = { class: "collapsible-section" }, DC = { class: "value" }, LC = {
  key: 0,
  class: "collapsible-body"
}, AC = { class: "item-list" }, OC = { class: "item-name" }, NC = { class: "item-name" }, UC = { class: "item-name" }, zC = { class: "item-name" }, FC = {
  key: 0,
  class: "empty-list"
}, VC = { class: "collapsible-section" }, BC = { class: "value" }, WC = {
  key: 0,
  class: "collapsible-body"
}, GC = { class: "item-list" }, jC = { class: "item-name" }, HC = {
  key: 0,
  class: "item-meta"
}, KC = {
  key: 0,
  class: "empty-list"
}, qC = { class: "collapsible-section" }, YC = { class: "value" }, JC = {
  key: 0,
  class: "missing-count"
}, QC = {
  key: 0,
  class: "collapsible-body"
}, XC = { class: "item-list" }, ZC = { class: "model-row" }, ex = { class: "item-name" }, tx = { class: "model-meta" }, sx = { class: "item-meta" }, ox = {
  key: 0,
  class: "item-meta"
}, nx = {
  key: 0,
  class: "empty-list"
}, ax = {
  key: 2,
  class: "section-divider"
}, lx = {
  key: 3,
  class: "detail-row"
}, ix = { class: "value" }, rx = { class: "footer-actions" }, cx = /* @__PURE__ */ fe({
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
    const c = U(() => {
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
    return (d, m) => (n(), D(ct, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: m[5] || (m[5] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, g, w, p, k, C, b, x, M, P, T, L, V, B;
        return [
          t("div", SC, [
            t("div", IC, [
              m[6] || (m[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Se(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", EC, [
              m[7] || (m[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", TC, f(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", RC, [
              m[8] || (m[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", PC, f(e.environment.path), 1)
            ])) : y("", !0),
            m[17] || (m[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", MC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (E) => r("workflows"))
              }, [
                m[9] || (m[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", DC, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (n(), i("span", {
                  key: 0,
                  class: Se(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", LC, [
                t("div", AC, [
                  (n(!0), i(H, null, ve(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", OC, f(E), 1),
                    m[10] || (m[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ve(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", NC, f(E), 1),
                    m[11] || (m[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ve(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", UC, f(E), 1),
                    m[12] || (m[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ve(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    t("span", zC, f(E), 1),
                    m[13] || (m[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", FC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", VC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (E) => r("nodes"))
              }, [
                m[14] || (m[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", BC, f(((p = e.detail) == null ? void 0 : p.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (n(), i("span", {
                  key: 0,
                  class: Se(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (n(), i("div", WC, [
                t("div", GC, [
                  (n(!0), i(H, null, ve(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    t("span", jC, f(E.name), 1),
                    E.version ? (n(), i("span", HC, f(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", KC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", qC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (E) => r("models"))
              }, [
                m[15] || (m[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", YC, [
                  $(f(((b = e.detail) == null ? void 0 : b.model_count) ?? e.environment.model_count) + " ", 1),
                  (M = (x = e.detail) == null ? void 0 : x.models) != null && M.missing.length ? (n(), i("span", JC, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (P = e.detail) != null && P.models ? (n(), i("span", {
                  key: 0,
                  class: Se(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (T = e.detail) != null && T.models && l.value.has("models") ? (n(), i("div", QC, [
                t("div", XC, [
                  (n(!0), i(H, null, ve(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", ZC, [
                      t("span", ex, f(E.filename), 1),
                      t("span", {
                        class: Se(["criticality-badge", E.criticality])
                      }, f(E.criticality), 3)
                    ]),
                    t("div", tx, [
                      t("span", sx, f(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", ox, " used by: " + f(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", nx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (L = e.detail) != null && L.created_at || e.environment.created_at ? (n(), i("div", ax)) : y("", !0),
            (V = e.detail) != null && V.created_at || e.environment.created_at ? (n(), i("div", lx, [
              m[16] || (m[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", ix, f(u(((B = e.detail) == null ? void 0 : B.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        t("div", rx, [
          e.canDelete ? (n(), D(Te, {
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
          S(Te, {
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
}), ux = /* @__PURE__ */ ge(cx, [["__scopeId", "data-v-92e68b76"]]), zr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Fr = "3.12", cl = [
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
], Vr = "auto", dx = { class: "progress-bar" }, fx = /* @__PURE__ */ fe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", dx, [
      t("div", {
        class: Se(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), aa = /* @__PURE__ */ ge(fx, [["__scopeId", "data-v-1beb0512"]]), mx = { class: "task-progress" }, vx = { class: "progress-info" }, px = { class: "progress-percentage" }, gx = { class: "progress-message" }, hx = {
  key: 0,
  class: "progress-steps"
}, yx = { class: "step-icon" }, wx = { class: "step-label" }, kx = /* @__PURE__ */ fe({
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
    return (l, r) => (n(), i("div", mx, [
      S(aa, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", vx, [
        t("span", px, f(e.progress) + "%", 1),
        t("span", gx, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", hx, [
        (n(!0), i(H, null, ve(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Se(["step", o(c.id)])
        }, [
          t("span", yx, f(a(c.id)), 1),
          t("span", wx, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Wn = /* @__PURE__ */ ge(kx, [["__scopeId", "data-v-9d1de66c"]]), _x = {
  key: 0,
  class: "create-env-form"
}, bx = { class: "form-field" }, $x = { class: "form-field" }, Cx = ["value"], xx = { class: "form-field" }, Sx = ["disabled"], Ix = ["value"], Ex = { class: "form-field" }, Tx = ["value"], Rx = { class: "form-field form-field--checkbox" }, Px = { class: "form-checkbox" }, Mx = {
  key: 1,
  class: "create-env-progress"
}, Dx = { class: "creating-intro" }, Lx = {
  key: 0,
  class: "progress-warning"
}, Ax = {
  key: 1,
  class: "create-error"
}, Ox = { class: "error-message" }, Nx = {
  key: 1,
  class: "footer-status"
}, Ux = 10, zx = /* @__PURE__ */ fe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r } = Ze(), c = _(""), u = _(Fr), d = _("latest"), m = _(Vr), v = _(!1), g = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = _(!1), p = _(!1), k = _({
      progress: 0,
      message: ""
    });
    let C = null, b = 0;
    const x = [
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
    function P() {
      p.value || o("close");
    }
    async function T() {
      const I = c.value.trim();
      if (I) {
        p.value = !0, k.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: I,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Z = await l(A);
          Z.status === "started" ? L() : Z.status === "error" && (k.value = {
            progress: 0,
            message: Z.message || "Failed to start creation",
            error: Z.message
          });
        } catch (A) {
          k.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function L() {
      C || (b = 0, C = window.setInterval(async () => {
        try {
          const I = await r();
          b = 0, k.value = {
            progress: I.progress ?? 0,
            message: I.message,
            phase: I.phase,
            error: I.error
          }, I.state === "complete" ? (V(), o("created", I.environment_name || c.value.trim(), v.value)) : I.state === "error" ? (V(), k.value.error = I.error || I.message) : I.state === "idle" && p.value && (V(), k.value.error = "Creation was interrupted. Please try again.");
        } catch {
          b++, b >= Ux && (V(), k.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      C && (clearInterval(C), C = null);
    }
    function B() {
      p.value = !1, k.value = { progress: 0, message: "" }, o("close");
    }
    async function E() {
      w.value = !0;
      try {
        g.value = await a();
      } catch (I) {
        console.error("Failed to load ComfyUI releases:", I);
      } finally {
        w.value = !1;
      }
    }
    return Qe(async () => {
      var I;
      await gt(), (I = M.value) == null || I.focus(), E();
    }), Gs(() => {
      V();
    }), (I, A) => (n(), D(ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: P
    }, {
      body: h(() => [
        p.value ? (n(), i("div", Mx, [
          t("p", Dx, [
            A[11] || (A[11] = $(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            A[12] || (A[12] = $("... ", -1))
          ]),
          S(Wn, {
            progress: k.value.progress,
            message: k.value.message,
            "current-phase": k.value.phase,
            variant: k.value.error ? "error" : "default",
            "show-steps": !0,
            steps: x
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          k.value.error ? y("", !0) : (n(), i("p", Lx, " This may take several minutes. Please wait... ")),
          k.value.error ? (n(), i("div", Ax, [
            t("p", Ox, f(k.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", _x, [
          t("div", bx, [
            A[6] || (A[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: M,
              "onUpdate:modelValue": A[0] || (A[0] = (Z) => c.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ht(T, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", $x, [
            A[7] || (A[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (Z) => u.value = Z),
              class: "form-select"
            }, [
              (n(!0), i(H, null, ve(We(zr), (Z) => (n(), i("option", {
                key: Z,
                value: Z
              }, f(Z), 9, Cx))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", xx, [
            A[8] || (A[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (Z) => d.value = Z),
              class: "form-select",
              disabled: w.value
            }, [
              (n(!0), i(H, null, ve(g.value, (Z) => (n(), i("option", {
                key: Z.tag_name,
                value: Z.tag_name
              }, f(Z.name), 9, Ix))), 128))
            ], 8, Sx), [
              [hs, d.value]
            ])
          ]),
          t("div", Ex, [
            A[9] || (A[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (Z) => m.value = Z),
              class: "form-select"
            }, [
              (n(!0), i(H, null, ve(We(cl), (Z) => (n(), i("option", {
                key: Z,
                value: Z
              }, f(Z) + f(Z === "auto" ? " (detect GPU)" : ""), 9, Tx))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", Rx, [
            t("label", Px, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (Z) => v.value = Z)
              }, null, 512), [
                [nn, v.value]
              ]),
              A[10] || (A[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (n(), i(H, { key: 1 }, [
          k.value.error ? (n(), D(Te, {
            key: 0,
            variant: "secondary",
            onClick: B
          }, {
            default: h(() => [...A[15] || (A[15] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", Nx, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          S(Te, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: T
          }, {
            default: h(() => [...A[13] || (A[13] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Te, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (Z) => o("close"))
          }, {
            default: h(() => [...A[14] || (A[14] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Fx = /* @__PURE__ */ ge(zx, [["__scopeId", "data-v-f37eaa42"]]), Vx = /* @__PURE__ */ fe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = Ze(), c = _([]), u = _(!1), d = _(null), m = _(""), v = _(!1), g = _(!1), w = _(null), p = _(null), k = U(() => {
      if (!m.value.trim()) return c.value;
      const T = m.value.toLowerCase();
      return c.value.filter(
        (L) => {
          var V;
          return L.name.toLowerCase().includes(T) || ((V = L.current_branch) == null ? void 0 : V.toLowerCase().includes(T));
        }
      );
    });
    function C(T, L) {
      g.value = !1, a("created", T, L);
    }
    function b() {
      g.value = !0;
    }
    async function x(T) {
      w.value = T, p.value = null;
      const L = await r(T.name);
      L && (p.value = L);
    }
    function M(T) {
      w.value = null, p.value = null, a("delete", T);
    }
    async function P() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (T) {
        d.value = T instanceof Error ? T.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Qe(P), s({
      loadEnvironments: P,
      openCreateModal: b
    }), (T, L) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (V) => v.value = !0)
          }, {
            actions: h(() => [
              S(de, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: h(() => [...L[6] || (L[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              S(de, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: h(() => [...L[7] || (L[7] = [
                  $(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(So, {
            modelValue: m.value,
            "onUpdate:modelValue": L[1] || (L[1] = (V) => m.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), D(Ms, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), D(Ds, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            k.value.length ? (n(), D(rt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(k.value, (V) => (n(), D(xC, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    V.is_current ? y("", !0) : (n(), D(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => T.$emit("switch", V.name)
                    }, {
                      default: h(() => [...L[8] || (L[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => x(V)
                    }, {
                      default: h(() => [...L[9] || (L[9] = [
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
            k.value.length ? y("", !0) : (n(), D(ns, {
              key: 1,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, no({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  S(de, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: h(() => [...L[10] || (L[10] = [
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
        show: v.value,
        title: "About Environments",
        onClose: L[3] || (L[3] = (V) => v.value = !1)
      }, {
        content: h(() => [...L[11] || (L[11] = [
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
          S(de, {
            variant: "secondary",
            onClick: L[2] || (L[2] = (V) => v.value = !1)
          }, {
            default: h(() => [...L[12] || (L[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), D(ux, {
        key: 0,
        environment: w.value,
        detail: p.value,
        "can-delete": c.value.length > 1,
        onClose: L[4] || (L[4] = (V) => {
          w.value = null, p.value = null;
        }),
        onDelete: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      g.value ? (n(), D(Fx, {
        key: 1,
        onClose: L[5] || (L[5] = (V) => g.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), Bx = /* @__PURE__ */ ge(Vx, [["__scopeId", "data-v-0c0fbd88"]]), Wx = { class: "file-path" }, Gx = { class: "file-path-text" }, jx = ["title"], Hx = /* @__PURE__ */ fe({
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
    return (l, r) => (n(), i("div", Wx, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", Gx, f(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, f(o.value ? "✓" : "📋"), 9, jx)) : y("", !0)
    ]));
  }
}), Kx = /* @__PURE__ */ ge(Hx, [["__scopeId", "data-v-f0982173"]]), qx = { class: "base-textarea-wrapper" }, Yx = ["value", "rows", "placeholder", "disabled", "maxlength"], Jx = {
  key: 0,
  class: "base-textarea-count"
}, Qx = /* @__PURE__ */ fe({
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
    return (r, c) => (n(), i("div", qx, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Ht(it((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Ht(it((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ht(l, ["enter"])
        ]
      }, null, 40, Yx),
      e.showCharCount && e.maxLength ? (n(), i("div", Jx, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Na = /* @__PURE__ */ ge(Qx, [["__scopeId", "data-v-c6d16c93"]]), Xx = ["checked", "disabled"], Zx = { class: "base-checkbox-box" }, e3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, t3 = {
  key: 0,
  class: "base-checkbox-label"
}, s3 = /* @__PURE__ */ fe({
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
      }, null, 40, Xx),
      t("span", Zx, [
        e.modelValue ? (n(), i("svg", e3, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", t3, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Gn = /* @__PURE__ */ ge(s3, [["__scopeId", "data-v-bf17c831"]]), o3 = { class: "export-blocked" }, n3 = { class: "error-header" }, a3 = { class: "error-summary" }, l3 = { class: "error-description" }, i3 = { class: "issues-list" }, r3 = { class: "issue-message" }, c3 = {
  key: 0,
  class: "issue-details"
}, u3 = ["onClick"], d3 = { class: "issue-fix" }, f3 = {
  key: 0,
  class: "commit-section"
}, m3 = {
  key: 0,
  class: "issues-warning"
}, v3 = {
  key: 1,
  class: "commit-error"
}, p3 = /* @__PURE__ */ fe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = Ze(), r = _(""), c = _(!1), u = _(!1), d = _(""), m = Ws({}), v = U(
      () => o.issues.some((b) => b.type === "uncommitted_workflows" || b.type === "uncommitted_git_changes")
    ), g = U(
      () => o.issues.some((b) => b.type === "unresolved_issues")
    ), w = U(
      () => g.value && !u.value
    ), p = U(
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
            const M = ((b = x.issues) == null ? void 0 : b.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
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
    return (b, x) => (n(), D(ct, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: x[4] || (x[4] = (M) => b.$emit("close"))
    }, {
      body: h(() => [
        t("div", o3, [
          t("div", n3, [
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
            t("div", a3, [
              x[5] || (x[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", l3, f(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", i3, [
            (n(!0), i(H, null, ve(e.issues, (M, P) => (n(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              t("div", r3, f(M.message), 1),
              M.details.length ? (n(), i("div", c3, [
                (n(!0), i(H, null, ve(k(P), (T, L) => (n(), i("div", {
                  key: L,
                  class: "issue-detail"
                }, f(T), 1))), 128)),
                M.details.length > 3 && !m[P] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (T) => m[P] = !0
                }, " +" + f(M.details.length - 3) + " more ", 9, u3)) : y("", !0)
              ])) : y("", !0),
              t("div", d3, [
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
          v.value ? (n(), i("div", f3, [
            g.value ? (n(), i("div", m3, [
              x[8] || (x[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              S(Gn, {
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
            S(Na, {
              modelValue: r.value,
              "onUpdate:modelValue": x[1] || (x[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: c.value || w.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", v3, f(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        v.value ? (n(), i(H, { key: 0 }, [
          S(Te, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (M) => b.$emit("close"))
          }, {
            default: h(() => [...x[9] || (x[9] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(Te, {
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
        ], 64)) : (n(), D(Te, {
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
}), Br = /* @__PURE__ */ ge(p3, [["__scopeId", "data-v-bd79ba24"]]), g3 = { class: "export-warnings" }, h3 = {
  key: 0,
  class: "success-header"
}, y3 = { class: "warning-header" }, w3 = { class: "warning-summary" }, k3 = { class: "warning-title" }, _3 = { class: "models-section" }, b3 = { class: "models-list" }, $3 = { class: "model-info" }, C3 = { class: "model-filename" }, x3 = { class: "model-workflows" }, S3 = ["onClick"], I3 = /* @__PURE__ */ fe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(!1), r = _(null), c = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, a("revalidate");
    }
    return (d, m) => (n(), i(H, null, [
      S(ct, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", g3, [
            e.models.length === 0 ? (n(), i("div", h3, [...m[4] || (m[4] = [
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
              t("div", y3, [
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
                t("div", w3, [
                  t("h3", k3, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", _3, [
                t("div", b3, [
                  (n(!0), i(H, null, ve(c.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", $3, [
                      t("div", C3, f(v.filename), 1),
                      t("div", x3, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => r.value = v.hash
                    }, " Add Source ", 8, S3)
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
          S(Te, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          S(Te, {
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
      r.value ? (n(), D(il, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Wr = /* @__PURE__ */ ge(I3, [["__scopeId", "data-v-b698d882"]]), E3 = { class: "export-card" }, T3 = { class: "export-path-row" }, R3 = { class: "export-actions" }, P3 = {
  key: 1,
  class: "export-warning"
}, M3 = /* @__PURE__ */ fe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = Ze(), a = _(""), l = _(!1), r = _(!1), c = _(!1), u = _(null), d = _(!1), m = _(null), v = _(!1), g = _(!1), w = U(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
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
        } catch (L) {
          console.error("Failed to copy path:", L);
        }
    }
    async function P() {
      var T;
      if ((T = u.value) != null && T.path) {
        c.value = !0;
        try {
          const L = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!L.ok)
            throw new Error(`Download failed: ${L.statusText}`);
          const V = await L.blob(), B = URL.createObjectURL(V), E = u.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = B, I.download = E, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(B);
        } catch (L) {
          console.error("Failed to download:", L), alert(`Download failed: ${L instanceof Error ? L.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (T, L) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (V) => d.value = !0)
          })
        ]),
        content: h(() => [
          S(rt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", E3, [
                L[7] || (L[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", T3, [
                  S(Ko, {
                    modelValue: a.value,
                    "onUpdate:modelValue": L[1] || (L[1] = (V) => a.value = V),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", R3, [
                  S(de, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      L[6] || (L[6] = t("svg", {
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
          u.value ? (n(), D(rt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              S(Pt, {
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
                    S(ft, { label: "Saved to:" }, {
                      default: h(() => [
                        S(Kx, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (n(), D(ft, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", P3, [...L[8] || (L[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: P
                    }, {
                      default: h(() => [...L[9] || (L[9] = [
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
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: M
                    }, {
                      default: h(() => [...L[10] || (L[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(de, {
                      variant: "ghost",
                      size: "sm",
                      onClick: L[2] || (L[2] = (V) => u.value = null)
                    }, {
                      default: h(() => [...L[11] || (L[11] = [
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
        onClose: L[3] || (L[3] = (V) => d.value = !1)
      }, {
        content: h(() => [...L[12] || (L[12] = [
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
      v.value && m.value ? (n(), D(Br, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: L[4] || (L[4] = (V) => v.value = !1),
        onCommitted: C
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (n(), D(Wr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: k,
        onCancel: L[5] || (L[5] = (V) => g.value = !1),
        onRevalidate: b
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), D3 = /* @__PURE__ */ ge(M3, [["__scopeId", "data-v-ddeffd68"]]), L3 = { class: "file-input-wrapper" }, A3 = ["accept", "multiple", "disabled"], O3 = /* @__PURE__ */ fe({
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
    }), (u, d) => (n(), i("div", L3, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, A3),
      S(de, {
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
}), N3 = /* @__PURE__ */ ge(O3, [["__scopeId", "data-v-cd192091"]]), U3 = {
  key: 0,
  class: "drop-zone-empty"
}, z3 = { class: "drop-zone-text" }, F3 = { class: "drop-zone-primary" }, V3 = { class: "drop-zone-secondary" }, B3 = { class: "drop-zone-actions" }, W3 = {
  key: 1,
  class: "drop-zone-file"
}, G3 = { class: "file-info" }, j3 = { class: "file-details" }, H3 = { class: "file-name" }, K3 = { class: "file-size" }, q3 = /* @__PURE__ */ fe({
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
    const o = s, a = _(!1), l = _(null), r = _(0), c = U(() => l.value !== null), u = U(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = U(() => {
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
      onDragenter: it(m, ["prevent"]),
      onDragover: it(v, ["prevent"]),
      onDragleave: it(g, ["prevent"]),
      onDrop: it(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", W3, [
        t("div", G3, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", j3, [
            t("div", H3, f(u.value), 1),
            t("div", K3, f(d.value), 1)
          ])
        ]),
        S(de, {
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
      ])) : (n(), i("div", U3, [
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
        t("div", z3, [
          t("p", F3, f(e.primaryText), 1),
          t("p", V3, f(e.secondaryText), 1)
        ]),
        t("div", B3, [
          S(N3, {
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
}), Y3 = /* @__PURE__ */ ge(q3, [["__scopeId", "data-v-0f79cb86"]]), J3 = { class: "import-preview" }, Q3 = { class: "preview-header" }, X3 = {
  key: 0,
  class: "source-env"
}, Z3 = { class: "preview-content" }, e5 = { class: "preview-section" }, t5 = { class: "section-header" }, s5 = { class: "section-info" }, o5 = { class: "section-count" }, n5 = {
  key: 0,
  class: "item-list"
}, a5 = { class: "item-name" }, l5 = {
  key: 0,
  class: "item-more"
}, i5 = { class: "preview-section" }, r5 = { class: "section-header" }, c5 = { class: "section-info" }, u5 = { class: "section-count" }, d5 = {
  key: 0,
  class: "item-list"
}, f5 = { class: "item-details" }, m5 = { class: "item-name" }, v5 = { class: "item-meta" }, p5 = {
  key: 0,
  class: "item-more"
}, g5 = { class: "preview-section" }, h5 = { class: "section-header" }, y5 = { class: "section-info" }, w5 = { class: "section-count" }, k5 = {
  key: 0,
  class: "item-list"
}, _5 = { class: "item-name" }, b5 = {
  key: 0,
  class: "item-more"
}, $5 = {
  key: 0,
  class: "preview-section"
}, C5 = { class: "git-info" }, x5 = /* @__PURE__ */ fe({
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
    const s = e, o = U(() => s.workflows.length), a = U(() => s.models.length), l = U(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", J3, [
      t("div", Q3, [
        S(Nt, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", X3, [
          u[1] || (u[1] = $(" From: ", -1)),
          S(Oa, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", Z3, [
        t("div", e5, [
          t("div", t5, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", s5, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", o5, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", n5, [
            (n(!0), i(H, null, ve(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", a5, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", l5, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", i5, [
          t("div", r5, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", c5, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", u5, f(a.value) + " file" + f(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", d5, [
            (n(!0), i(H, null, ve(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", f5, [
                t("span", m5, f(d.filename), 1),
                t("span", v5, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", p5, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", g5, [
          t("div", h5, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", y5, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", w5, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", k5, [
            (n(!0), i(H, null, ve(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", _5, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", b5, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", $5, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", C5, [
            e.gitBranch ? (n(), D(ft, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                S(Oa, null, {
                  default: h(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), D(ft, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                S(Tr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), S5 = /* @__PURE__ */ ge(x5, [["__scopeId", "data-v-182fe113"]]), I5 = { class: "import-config" }, E5 = { class: "config-container" }, T5 = { class: "config-field" }, R5 = { class: "input-wrapper" }, P5 = ["value"], M5 = {
  key: 0,
  class: "validating-indicator"
}, D5 = {
  key: 1,
  class: "valid-indicator"
}, L5 = {
  key: 0,
  class: "field-error"
}, A5 = { class: "config-field" }, O5 = { class: "strategy-options" }, N5 = ["value", "checked", "onChange"], U5 = { class: "strategy-content" }, z5 = { class: "strategy-label" }, F5 = { class: "strategy-description" }, V5 = { class: "config-field switch-field" }, B5 = { class: "switch-label" }, W5 = ["checked"], G5 = { class: "advanced-section" }, j5 = { class: "advanced-content" }, H5 = { class: "config-field" }, K5 = ["value"], q5 = ["value"], Y5 = /* @__PURE__ */ fe({
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
    dt(() => o.nameError, (v) => {
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
    return (v, g) => (n(), i("div", I5, [
      S(Nt, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", E5, [
        t("div", T5, [
          S(Pn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", R5, [
            t("input", {
              type: "text",
              class: Se(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, P5),
            l.value ? (n(), i("span", M5, "...")) : r.value ? (n(), i("span", D5, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", L5, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", A5, [
          S(Pn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", O5, [
            (n(), i(H, null, ve(c, (w) => t("label", {
              key: w.value,
              class: Se(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => a("update:modelStrategy", w.value)
              }, null, 40, N5),
              t("div", U5, [
                t("span", z5, f(w.label), 1),
                t("span", F5, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", V5, [
          t("label", B5, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, W5),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", G5, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", j5, [
            t("div", H5, [
              S(Pn, null, {
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
                (n(!0), i(H, null, ve(We(cl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, q5))), 128))
              ], 40, K5)
            ])
          ])
        ])
      ])
    ]));
  }
}), J5 = /* @__PURE__ */ ge(Y5, [["__scopeId", "data-v-89ea06a1"]]), Q5 = { class: "import-flow" }, X5 = {
  key: 0,
  class: "import-empty"
}, Z5 = { class: "git-import-section" }, eS = { class: "git-url-input-row" }, tS = ["disabled"], sS = {
  key: 0,
  class: "git-error"
}, oS = {
  key: 1,
  class: "import-configure"
}, nS = { class: "selected-file-bar" }, aS = {
  key: 0,
  class: "file-bar-content"
}, lS = { class: "file-bar-info" }, iS = { class: "file-bar-name" }, rS = { class: "file-bar-size" }, cS = {
  key: 1,
  class: "file-bar-content"
}, uS = { class: "file-bar-info" }, dS = { class: "file-bar-name" }, fS = {
  key: 0,
  class: "preview-loading"
}, mS = { class: "import-actions" }, vS = {
  key: 2,
  class: "import-progress"
}, pS = { class: "creating-intro" }, gS = {
  key: 0,
  class: "progress-warning"
}, hS = {
  key: 1,
  class: "import-error"
}, yS = { class: "error-message" }, wS = {
  key: 3,
  class: "import-complete"
}, kS = { class: "complete-message" }, _S = { class: "complete-title" }, bS = { class: "complete-details" }, $S = { class: "complete-actions" }, CS = /* @__PURE__ */ fe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ye, pe, oe, ce;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = Ze();
    let g = null;
    const w = _(null), p = _(a.resumeImport ?? !1), k = _(!1), C = _(!1), b = _(""), x = _(!1), M = _(null), P = _(""), T = _(null), L = _(!1), V = _(null), B = _(null), E = _({
      name: ((Ye = a.initialProgress) == null ? void 0 : Ye.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), I = _(null), A = _({
      message: ((pe = a.initialProgress) == null ? void 0 : pe.message) ?? "Preparing import...",
      phase: ((oe = a.initialProgress) == null ? void 0 : oe.phase) ?? "",
      progress: ((ce = a.initialProgress) == null ? void 0 : ce.progress) ?? 0,
      error: null
    }), Z = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], W = U(() => {
      if (!B.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ue = B.value;
      return {
        sourceEnvironment: ue.comfyui_version ? `ComfyUI ${ue.comfyui_version}` : "Unknown",
        workflows: ue.workflows.map((Ee) => Ee.name),
        models: ue.models.map((Ee) => ({
          filename: Ee.filename,
          size: 0,
          type: Ee.relative_path.split("/")[0] || "model"
        })),
        nodes: ue.nodes.map((Ee) => Ee.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), O = U(() => !x.value && !M.value && B.value && E.value.name.length > 0 && !I.value && (w.value || T.value));
    async function j(ue) {
      w.value = ue, x.value = !0, M.value = null, B.value = null;
      try {
        const Ee = await r(ue);
        B.value = Ee;
      } catch (Ee) {
        M.value = Ee instanceof Error ? Ee.message : "Failed to analyze file", console.error("Preview error:", Ee);
      } finally {
        x.value = !1;
      }
    }
    function X() {
      w.value = null, T.value = null, P.value = "", V.value = null, k.value = !1, C.value = !1, b.value = "", B.value = null, M.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, I.value = null, l("source-cleared");
    }
    function z() {
      ze(), X(), p.value = !1, x.value = !1, L.value = !1, A.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ae() {
      if (P.value.trim()) {
        L.value = !0, V.value = null;
        try {
          const ue = await c(P.value.trim());
          T.value = P.value.trim(), B.value = ue;
        } catch (ue) {
          V.value = ue instanceof Error ? ue.message : "Failed to analyze repository";
        } finally {
          L.value = !1;
        }
      }
    }
    function ee(ue) {
      try {
        const Ee = new URL(ue);
        return Ee.host + Ee.pathname.replace(/\.git$/, "");
      } catch {
        return ue;
      }
    }
    async function ke(ue) {
      if (!ue) {
        I.value = "Environment name is required";
        return;
      }
      try {
        const Ee = await u(ue);
        I.value = Ee.valid ? null : Ee.error || "Invalid name";
      } catch {
        I.value = "Failed to validate name";
      }
    }
    async function be() {
      if (E.value.name && !(!w.value && !T.value)) {
        p.value = !0, k.value = !1, A.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ue;
          if (w.value)
            ue = await d(
              w.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (T.value)
            ue = await m(
              T.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ue.status === "started" ? Le() : (C.value = !1, b.value = ue.message, p.value = !1, k.value = !0);
        } catch (ue) {
          C.value = !1, b.value = ue instanceof Error ? ue.message : "Unknown error occurred during import", p.value = !1, k.value = !0;
        }
      }
    }
    async function Le() {
      if (g) return;
      const ue = async () => {
        try {
          const Re = await v();
          return A.value = {
            message: Re.message,
            phase: Re.phase || "",
            progress: Re.progress ?? (Re.state === "importing" ? 50 : 0),
            error: Re.error || null
          }, Re.state === "complete" ? (ze(), C.value = !0, b.value = `Environment '${Re.environment_name}' created successfully`, p.value = !1, k.value = !0, Re.environment_name && l("import-complete", Re.environment_name, E.value.switchAfterImport), !1) : Re.state === "error" ? (ze(), C.value = !1, b.value = Re.error || Re.message, p.value = !1, k.value = !0, !1) : !0;
        } catch (Re) {
          return console.error("Failed to poll import progress:", Re), !0;
        }
      };
      await ue() && (g = setInterval(async () => {
        await ue() || ze();
      }, 2e3));
    }
    function ze() {
      g && (clearInterval(g), g = null);
    }
    function Ue(ue) {
      return ue < 1024 ? `${ue} B` : ue < 1024 * 1024 ? `${(ue / 1024).toFixed(1)} KB` : ue < 1024 * 1024 * 1024 ? `${(ue / (1024 * 1024)).toFixed(1)} MB` : `${(ue / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const ue = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ue.state, ue), ue.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ue.environment_name), p.value = !0, E.value.name = ue.environment_name || E.value.name || "", A.value = {
          progress: ue.progress ?? 0,
          message: ue.message || "Importing...",
          phase: ue.phase || "",
          error: null
        }, Le());
      } catch (ue) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ue);
      }
    }), s({
      handleReset: z,
      isImporting: p,
      canImport: O
    }), (ue, Ee) => {
      var Re;
      return n(), i("div", Q5, [
        !w.value && !T.value && !p.value ? (n(), i("div", X5, [
          S(Y3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: j
          }),
          Ee[7] || (Ee[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", Z5, [
            Ee[5] || (Ee[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", eS, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Ee[0] || (Ee[0] = (Fe) => P.value = Fe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ht(ae, ["enter"]),
                disabled: L.value
              }, null, 40, tS), [
                [zt, P.value]
              ]),
              S(de, {
                variant: "primary",
                size: "sm",
                disabled: !P.value.trim() || L.value,
                onClick: ae
              }, {
                default: h(() => [
                  $(f(L.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (n(), i("div", sS, f(V.value), 1)) : y("", !0),
            Ee[6] || (Ee[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || T.value) && !p.value && !k.value ? (n(), i("div", oS, [
          t("div", nS, [
            w.value ? (n(), i("div", aS, [
              Ee[8] || (Ee[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", lS, [
                t("div", iS, f(w.value.name), 1),
                t("div", rS, f(Ue(w.value.size)), 1)
              ])
            ])) : T.value ? (n(), i("div", cS, [
              Ee[10] || (Ee[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", uS, [
                t("div", dS, f(ee(T.value)), 1),
                Ee[9] || (Ee[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            S(de, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: h(() => [...Ee[11] || (Ee[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (n(), i("div", fS, [...Ee[12] || (Ee[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (n(), D(Qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : B.value ? (n(), D(S5, {
            key: 2,
            "source-environment": W.value.sourceEnvironment,
            workflows: W.value.workflows,
            models: W.value.models,
            nodes: W.value.nodes,
            "git-branch": W.value.gitBranch,
            "git-commit": W.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          B.value ? (n(), D(J5, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": Ee[1] || (Ee[1] = (Fe) => E.value.name = Fe),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": Ee[2] || (Ee[2] = (Fe) => E.value.modelStrategy = Fe),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": Ee[3] || (Ee[3] = (Fe) => E.value.torchBackend = Fe),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": Ee[4] || (Ee[4] = (Fe) => E.value.switchAfterImport = Fe),
            "name-error": I.value,
            onValidateName: ke
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((Re = B.value) != null && Re.models_needing_download) ? (n(), D(Qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", mS, [
            S(de, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: h(() => [...Ee[13] || (Ee[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(de, {
              variant: "primary",
              size: "md",
              disabled: !O.value,
              onClick: be
            }, {
              default: h(() => [...Ee[14] || (Ee[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (n(), i("div", vS, [
          t("p", pS, [
            Ee[15] || (Ee[15] = $(" Importing environment ", -1)),
            t("strong", null, f(E.value.name), 1),
            Ee[16] || (Ee[16] = $("... ", -1))
          ]),
          S(Wn, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: Z
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? y("", !0) : (n(), i("p", gS, " This may take several minutes. Please wait... ")),
          A.value.error ? (n(), i("div", hS, [
            t("p", yS, f(A.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (n(), i("div", wS, [
          t("div", {
            class: Se(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", kS, [
            t("div", _S, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", bS, f(b.value), 1)
          ]),
          t("div", $S, [
            S(de, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: h(() => [...Ee[17] || (Ee[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Gr = /* @__PURE__ */ ge(CS, [["__scopeId", "data-v-72cbc04e"]]), xS = /* @__PURE__ */ fe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = _(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
          })
        ]),
        content: h(() => [
          S(Gr, { onImportComplete: l })
        ]),
        _: 1
      }),
      S(as, {
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
}), SS = /* @__PURE__ */ ge(xS, [["__scopeId", "data-v-e13bfe76"]]), $n = mo(), IS = 5e3, co = _([]), ka = _(!1), _a = _(null);
let Lo = null;
async function Cn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function jr(e) {
  const s = U(
    () => co.value.filter((p) => p.status === "running")
  ), o = U(
    () => co.value.filter((p) => p.status === "deploying")
  ), a = U(
    () => co.value.filter((p) => p.status === "stopped")
  ), l = U(
    () => s.value.length + o.value.length
  ), r = U(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...co.value].sort(
      (k, C) => (p[k.status] ?? 5) - (p[C.status] ?? 5)
    );
  });
  async function c() {
    ka.value = !0, _a.value = null;
    try {
      let p;
      if (!$n) {
        const k = await Cn("/v2/comfygit/deploy/instances");
        if (!k.ok)
          throw new Error(`Failed to fetch instances: ${k.status}`);
        p = await k.json();
      }
      co.value = p.instances;
    } catch (p) {
      _a.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ka.value = !1;
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
      if (!$n) {
        const k = u(p, "stop"), C = await Cn(k, { method: "POST" });
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
      if (!$n) {
        const k = u(p, "start"), C = await Cn(k, { method: "POST" });
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
      if (!$n) {
        const k = u(p, "terminate"), C = await Cn(k, { method: "DELETE" });
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
    Lo || (Lo = window.setInterval(c, IS));
  }
  function w() {
    Lo && (clearInterval(Lo), Lo = null);
  }
  return dt(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: co,
    isLoading: ka,
    error: _a,
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
const ES = { class: "instance-header" }, TS = { class: "provider-badge" }, RS = { class: "instance-name" }, PS = {
  key: 0,
  class: "spinner"
}, MS = { class: "instance-details" }, DS = {
  key: 0,
  class: "detail"
}, LS = {
  key: 1,
  class: "detail instance-url"
}, AS = {
  key: 2,
  class: "detail"
}, OS = {
  key: 3,
  class: "detail"
}, NS = {
  key: 4,
  class: "detail total-cost"
}, US = {
  key: 0,
  class: "deployment-progress"
}, zS = { class: "progress-message" }, FS = { class: "instance-actions" }, VS = /* @__PURE__ */ fe({
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
    }[s.instance.provider] || s.instance.provider), a = U(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = U(() => `status-${s.instance.status}`);
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
      t("div", ES, [
        t("span", TS, f(o.value), 1),
        t("span", RS, f(e.instance.name), 1),
        t("span", {
          class: Se(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", PS)) : y("", !0),
          $(" " + f(a.value), 1)
        ], 2)
      ]),
      t("div", MS, [
        e.instance.gpu_type ? (n(), i("span", DS, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", LS, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", AS, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", OS, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", NS, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", US, [
        t("div", zS, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), D(aa, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", FS, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), D(de, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), D(de, {
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
        e.instance.status === "running" ? (n(), D(de, {
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
        e.instance.status === "stopped" ? (n(), D(de, {
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
        S(de, {
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
}), BS = /* @__PURE__ */ ge(VS, [["__scopeId", "data-v-746c3894"]]), WS = { class: "instances-tab" }, GS = { class: "instances-header" }, jS = {
  key: 0,
  class: "loading-state"
}, HS = {
  key: 1,
  class: "empty-state"
}, KS = {
  key: 2,
  class: "instances-list"
}, qS = /* @__PURE__ */ fe({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = U(() => {
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
    return (a, l) => (n(), i("div", WS, [
      t("div", GS, [
        S(Nt, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(de, {
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
      e.isLoading && e.instances.length === 0 ? (n(), i("div", jS, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", HS, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", KS, [
        (n(!0), i(H, null, ve(o.value, (r) => (n(), D(BS, {
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
}), YS = /* @__PURE__ */ ge(qS, [["__scopeId", "data-v-ba614fc3"]]), JS = { class: "remote-header" }, QS = { class: "remote-info" }, XS = { class: "remote-icon" }, ZS = { class: "remote-name" }, e8 = {
  key: 0,
  class: "default-badge"
}, t8 = {
  key: 1,
  class: "sync-badge"
}, s8 = {
  key: 0,
  class: "ahead"
}, o8 = {
  key: 1,
  class: "behind"
}, n8 = {
  key: 1,
  class: "synced"
}, a8 = ["href"], l8 = {
  key: 1,
  class: "remote-url-text"
}, i8 = { class: "remote-actions" }, r8 = /* @__PURE__ */ fe({
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
    const s = e, o = U(() => s.remote.is_default), a = U(() => {
      const r = s.remote.fetch_url, c = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, c) => (n(), i("div", {
      class: Se(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", JS, [
        t("div", QS, [
          t("span", XS, f(o.value ? "🔗" : "🌐"), 1),
          t("span", ZS, f(e.remote.name), 1),
          o.value ? (n(), i("span", e8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", t8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", s8, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", o8, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", n8, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = it(() => {
          }, ["stop"]))
        }, f(l.value), 9, a8)) : (n(), i("span", l8, f(l.value), 1))
      ]),
      t("div", i8, [
        S(de, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), D(de, {
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
        S(de, {
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
}), Hr = /* @__PURE__ */ ge(r8, [["__scopeId", "data-v-d687d161"]]), c8 = { class: "runpod-tab" }, u8 = { class: "api-key-card" }, d8 = { class: "api-key-row" }, f8 = { class: "api-key-input-wrapper" }, m8 = ["type", "disabled"], v8 = ["title"], p8 = { class: "status-icon" }, g8 = { class: "status-text" }, h8 = {
  key: 0,
  class: "credit-balance"
}, y8 = { class: "config-card" }, w8 = { class: "config-row" }, k8 = ["disabled"], _8 = {
  key: 0,
  value: ""
}, b8 = {
  key: 1,
  value: "",
  disabled: ""
}, $8 = ["value", "disabled"], C8 = { class: "config-row" }, x8 = {
  key: 0,
  class: "loading-inline"
}, S8 = { class: "no-volumes-state" }, I8 = { class: "no-volumes-text" }, E8 = ["value"], T8 = { class: "config-row" }, R8 = ["disabled"], P8 = {
  key: 0,
  value: ""
}, M8 = {
  key: 1,
  value: ""
}, D8 = {
  key: 2,
  value: ""
}, L8 = ["value"], A8 = { class: "config-row" }, O8 = { class: "radio-group" }, N8 = { class: "radio-option" }, U8 = { class: "radio-label" }, z8 = { class: "radio-option disabled" }, F8 = { class: "radio-label" }, V8 = { class: "config-row" }, B8 = { class: "radio-group" }, W8 = { class: "radio-option" }, G8 = { class: "radio-label" }, j8 = { class: "radio-option disabled" }, H8 = { class: "radio-label" }, K8 = { class: "config-row" }, q8 = {
  key: 0,
  class: "loading-text"
}, Y8 = {
  key: 1,
  class: "empty-remotes"
}, J8 = { class: "remotes-list" }, Q8 = {
  key: 0,
  class: "sync-warning"
}, X8 = { class: "warning-content" }, Z8 = { class: "remotes-footer" }, e4 = { class: "summary-card" }, t4 = {
  key: 0,
  class: "loading-text"
}, s4 = { class: "summary-row" }, o4 = { class: "summary-value" }, n4 = { class: "summary-row" }, a4 = { class: "summary-value" }, l4 = { class: "summary-row" }, i4 = { class: "summary-value" }, r4 = {
  key: 0,
  class: "summary-sub-row"
}, c4 = { class: "summary-sub-label" }, u4 = {
  key: 1,
  class: "summary-sub-row warning"
}, d4 = { class: "summary-sub-label" }, f4 = { class: "summary-row" }, m4 = { class: "summary-value" }, v4 = { class: "summary-row" }, p4 = { class: "summary-value" }, g4 = { class: "deployment-summary" }, h4 = { class: "summary-columns" }, y4 = { class: "summary-column" }, w4 = { class: "pricing-row" }, k4 = { class: "pricing-value" }, _4 = { class: "pricing-row" }, b4 = { class: "pricing-value" }, $4 = { class: "pricing-row" }, C4 = { class: "pricing-value" }, x4 = { class: "pricing-row total" }, S4 = { class: "pricing-value" }, I4 = { class: "summary-column" }, E4 = { class: "spec-row" }, T4 = { class: "spec-row" }, R4 = {
  key: 0,
  class: "spec-row"
}, P4 = {
  key: 1,
  class: "spec-row spot-warning"
}, M4 = {
  key: 4,
  class: "deploy-actions"
}, D4 = { class: "progress-content" }, L4 = { class: "phase-indicator" }, A4 = { key: 0 }, O4 = { key: 1 }, N4 = { key: 2 }, U4 = {
  key: 3,
  class: "spinner"
}, z4 = { class: "phase-text" }, F4 = { class: "phase-name" }, V4 = { class: "phase-detail" }, B4 = {
  key: 0,
  class: "ready-actions"
}, W4 = { class: "console-link" }, G4 = ["href"], j4 = /* @__PURE__ */ fe({
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
    } = Ze(), x = _(!1), M = _(""), P = _(!1), T = _(!1), L = _(null), V = _(null), B = _(""), E = _(""), I = _(""), A = _("SECURE"), Z = _("ON_DEMAND"), W = _("my-comfyui-deploy"), O = _([]), j = _({}), X = _(!1), z = _(null), ae = _(null), ee = _(null), ke = _([]), be = _(!1), Le = _([]), ze = _(!1), Ue = _([]), Ye = _(!1), pe = _(null), oe = _(!1), ce = _(!1), ue = _(null), Ee = _(!1), Re = _(null), Fe = _(null), N = _(null), R = _(!1), F = _(null), q = _(!1), ne = _(!1), re = U(() => Le.value.find((xe) => xe.id === E.value) || null), $e = U(() => B.value ? Le.value.filter((xe) => xe.data_center_id === B.value) : Le.value), ie = U(() => Ue.value.filter((xe) => xe.available)), we = U(() => z.value && j.value[z.value] || null), he = U(() => {
      if (!z.value) return null;
      const xe = O.value.find((se) => se.name === z.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), Pe = U(() => P.value && E.value && I.value && he.value && !ce.value && !R.value), Ie = (xe) => {
      const se = Ue.value.find((yt) => yt.id === I.value);
      if (!se) return "0.00";
      if (xe === "SECURE") return (se.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (se.communityPrice ?? 0).toFixed(2);
      const He = A.value === "SECURE";
      return xe === "ON_DEMAND" ? He ? (se.securePrice ?? 0).toFixed(2) : (se.communityPrice ?? 0).toFixed(2) : He ? (se.secureSpotPrice ?? 0).toFixed(2) : (se.communitySpotPrice ?? 0).toFixed(2);
    }, te = U(() => {
      const xe = Ue.value.find((is) => is.id === I.value), se = Le.value.find((is) => is.id === E.value);
      if (!xe) return null;
      const He = A.value === "SECURE", yt = Z.value === "SPOT";
      let Vt;
      yt ? Vt = He ? xe.secureSpotPrice ?? 0 : xe.communitySpotPrice ?? 0 : Vt = He ? xe.securePrice ?? 0 : xe.communityPrice ?? 0;
      const ws = se ? se.size_gb * 14e-5 : 0, ks = 4e-3;
      return {
        gpu: Vt,
        volume: ws,
        container: ks,
        total: Vt + ws + ks
      };
    });
    async function Y() {
      await Be(), await Promise.all([St(), Me()]);
    }
    async function Me() {
      X.value = !0;
      try {
        const xe = await w();
        O.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (He) => {
            const yt = await p(He.name);
            yt && (j.value[He.name] = yt);
          })
        );
        const se = xe.remotes.find((He) => He.is_default);
        se ? z.value = se.name : xe.remotes.length > 0 && (z.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function Ce(xe) {
      ae.value = xe;
      try {
        await k(xe);
        const se = await p(xe);
        se && (j.value[xe] = se), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        ae.value = null;
      }
    }
    async function ye(xe) {
      ee.value = xe;
      try {
        await C(xe, { force: !1 });
        const se = await p(xe);
        se && (j.value[xe] = se), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        ee.value = null;
      }
    }
    function K(xe) {
      z.value = xe;
    }
    async function G() {
      if (M.value) {
        T.value = !0, L.value = null;
        try {
          const xe = await l(M.value, !0);
          xe.status === "success" ? (P.value = !0, V.value = xe.credit_balance ?? null, L.value = { type: "success", message: xe.message }, await Y()) : L.value = { type: "error", message: xe.message };
        } catch (xe) {
          L.value = {
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
        await v(), M.value = "", P.value = !1, L.value = null, V.value = null, ke.value = [], B.value = "", Le.value = [], E.value = "", Ue.value = [], I.value = "", pe.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Be() {
      ze.value = !0, be.value = !0;
      try {
        const xe = await r();
        Le.value = xe.volumes;
        const se = /* @__PURE__ */ new Map();
        for (const He of xe.volumes)
          He.data_center_id && !se.has(He.data_center_id) && se.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const He = await b();
          ke.value = He.data_centers;
        } else
          ke.value = Array.from(se.values());
        if (Le.value.length > 0) {
          const He = Le.value[0];
          E.value = He.id, He.data_center_id && (B.value = He.data_center_id, await et(He.data_center_id));
        } else ke.value.length > 0 && (B.value = ke.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        ze.value = !1, be.value = !1;
      }
    }
    async function et(xe) {
      Ye.value = !0;
      try {
        const se = await c(xe);
        Ue.value = se.gpu_types;
        const He = Ue.value.find((yt) => yt.available);
        He ? I.value = He.id : I.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ye.value = !1;
      }
    }
    dt(B, async (xe) => {
      if (!xe || ze.value) return;
      const se = Le.value.find((He) => He.id === E.value);
      se && se.data_center_id !== xe && (E.value = ""), await et(xe);
    }), dt(E, async (xe) => {
      if (!xe) {
        Ue.value = [], I.value = "";
        return;
      }
      if (ze.value) return;
      const se = Le.value.find((He) => He.id === xe);
      se && se.data_center_id !== B.value ? B.value = se.data_center_id : se && await et(se.data_center_id);
    });
    async function St() {
      oe.value = !0;
      try {
        pe.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        oe.value = !1;
      }
    }
    async function st() {
      if (!(!I.value || !E.value)) {
        R.value = !0, ue.value = null;
        try {
          const xe = await g();
          F.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? ne.value = !0 : await ht() : q.value = !0;
        } catch (xe) {
          ue.value = {
            status: "error",
            message: xe instanceof Error ? xe.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          R.value = !1;
        }
      }
    }
    async function vt() {
      ne.value = !1, await ht();
    }
    async function qt() {
      try {
        const xe = await g();
        F.value = xe;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function ht() {
      ce.value = !0;
      try {
        let xe;
        if (Z.value === "SPOT") {
          const He = Ue.value.find((yt) => yt.id === I.value);
          He && (xe = A.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const se = await u({
          gpu_type_id: I.value,
          pod_name: W.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: A.value,
          pricing_type: Z.value,
          spot_bid: xe,
          import_source: he.value
        });
        ue.value = se, se.status === "success" && se.pod_id ? (Re.value = se.pod_id, Ee.value = !0, Io(se.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", se.message, "error");
      } catch (xe) {
        ue.value = {
          status: "error",
          message: xe instanceof Error ? xe.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        ce.value = !1;
      }
    }
    function Io(xe) {
      ys(xe), N.value = window.setInterval(() => ys(xe), 3e3);
    }
    function ls() {
      N.value && (clearInterval(N.value), N.value = null);
    }
    async function ys(xe) {
      try {
        const se = await d(xe);
        Fe.value = se, (se.phase === "READY" || se.phase === "ERROR" || se.phase === "STOPPED") && (ls(), se.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (se) {
        console.error("Failed to poll deployment status:", se);
      }
    }
    function ao() {
      Ee.value = !1, ls(), Re.value = null, Fe.value = null;
    }
    function Yt() {
      var xe;
      (xe = Fe.value) != null && xe.comfyui_url && window.open(Fe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Eo(xe) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[xe || ""] || "Initializing...";
    }
    function js(xe) {
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
        xe.has_key && xe.key_preview && (M.value = `****${xe.key_preview}`, xe.valid ? (P.value = !0, V.value = xe.credit_balance ?? null, L.value = { type: "success", message: "Connected to RunPod" }, await Y()) : xe.error && (L.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), Gs(() => {
      ls();
    }), (xe, se) => {
      var He, yt, Vt, ws, ks, is;
      return n(), i(H, null, [
        t("div", c8, [
          S(rt, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", u8, [
                t("div", d8, [
                  t("div", f8, [
                    qe(t("input", {
                      "onUpdate:modelValue": se[0] || (se[0] = (Ne) => M.value = Ne),
                      type: x.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: P.value
                    }, null, 8, m8), [
                      [oa, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: se[1] || (se[1] = (Ne) => x.value = !x.value),
                      title: x.value ? "Hide key" : "Show key"
                    }, f(x.value ? "👁" : "👁‍🗨"), 9, v8)
                  ]),
                  P.value ? y("", !0) : (n(), D(de, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: T.value,
                    disabled: !M.value || T.value,
                    onClick: G
                  }, {
                    default: h(() => [...se[16] || (se[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  P.value ? (n(), D(de, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: me
                  }, {
                    default: h(() => [...se[17] || (se[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                L.value ? (n(), i("div", {
                  key: 0,
                  class: Se(["connection-status", L.value.type])
                }, [
                  t("span", p8, f(L.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", g8, f(L.value.message), 1),
                  V.value !== null ? (n(), i("span", h8, " $" + f(V.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                se[18] || (se[18] = t("div", { class: "api-key-help" }, [
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
          P.value ? (n(), D(rt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", y8, [
                t("div", w8, [
                  se[19] || (se[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": se[2] || (se[2] = (Ne) => B.value = Ne),
                    class: "config-select",
                    disabled: be.value
                  }, [
                    be.value ? (n(), i("option", _8, "Loading...")) : B.value ? y("", !0) : (n(), i("option", b8, "Select a region")),
                    (n(!0), i(H, null, ve(ke.value, (Ne) => (n(), i("option", {
                      key: Ne.id,
                      value: Ne.id,
                      disabled: !Ne.available
                    }, f(Ne.id) + " (" + f(Ne.name) + ")" + f(Ne.available ? "" : " [Unavailable]"), 9, $8))), 128))
                  ], 8, k8), [
                    [hs, B.value]
                  ])
                ]),
                t("div", C8, [
                  se[24] || (se[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  ze.value ? (n(), i("div", x8, "Loading volumes...")) : $e.value.length === 0 ? (n(), i(H, { key: 1 }, [
                    t("div", S8, [
                      se[20] || (se[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", I8, "No volumes in " + f(B.value || "this region"), 1)
                    ]),
                    se[21] || (se[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    se[22] || (se[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(H, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": se[3] || (se[3] = (Ne) => E.value = Ne),
                      class: "config-select"
                    }, [
                      (n(!0), i(H, null, ve($e.value, (Ne) => (n(), i("option", {
                        key: Ne.id,
                        value: Ne.id
                      }, f(Ne.name) + " (" + f(Ne.size_gb) + "GB) ", 9, E8))), 128))
                    ], 512), [
                      [hs, E.value]
                    ]),
                    se[23] || (se[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", T8, [
                  se[25] || (se[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": se[4] || (se[4] = (Ne) => I.value = Ne),
                    class: "config-select",
                    disabled: Ye.value || !E.value
                  }, [
                    E.value ? Ye.value ? (n(), i("option", M8, "Loading GPUs...")) : ie.value.length === 0 ? (n(), i("option", D8, "No GPUs available in this region")) : y("", !0) : (n(), i("option", P8, "Select a volume first")),
                    (n(!0), i(H, null, ve(ie.value, (Ne) => (n(), i("option", {
                      key: Ne.id,
                      value: Ne.id
                    }, f(Ne.displayName) + " (" + f(Ne.memoryInGb) + "GB) - $" + f(A.value === "SECURE" ? (Ne.securePrice ?? 0).toFixed(2) : (Ne.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ne.stockStatus ? `[${Ne.stockStatus}]` : ""), 9, L8))), 128))
                  ], 8, R8), [
                    [hs, I.value]
                  ])
                ]),
                t("div", A8, [
                  se[26] || (se[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", O8, [
                    t("label", N8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[5] || (se[5] = (Ne) => A.value = Ne),
                        value: "SECURE"
                      }, null, 512), [
                        [Zt, A.value]
                      ]),
                      t("span", U8, "Secure ($" + f(Ie("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", z8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[6] || (se[6] = (Ne) => A.value = Ne),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Zt, A.value]
                      ]),
                      t("span", F8, "Community ($" + f(Ie("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", V8, [
                  se[27] || (se[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", B8, [
                    t("label", W8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[7] || (se[7] = (Ne) => Z.value = Ne),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Zt, Z.value]
                      ]),
                      t("span", G8, "On-Demand ($" + f(Ie("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", j8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[8] || (se[8] = (Ne) => Z.value = Ne),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Zt, Z.value]
                      ]),
                      t("span", H8, "Spot ($" + f(Ie("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", K8, [
                  se[28] || (se[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": se[9] || (se[9] = (Ne) => W.value = Ne),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [zt, W.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          P.value ? (n(), D(rt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              X.value ? (n(), i("div", q8, "Loading remotes...")) : O.value.length === 0 ? (n(), i("div", Y8, [
                se[30] || (se[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(de, {
                  variant: "primary",
                  size: "xs",
                  onClick: se[10] || (se[10] = (Ne) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...se[29] || (se[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(H, { key: 2 }, [
                t("div", J8, [
                  (n(!0), i(H, null, ve(O.value, (Ne) => (n(), D(Hr, {
                    key: Ne.name,
                    remote: Ne,
                    "sync-status": j.value[Ne.name],
                    "is-selected": z.value === Ne.name,
                    "is-fetching": ae.value === Ne.name,
                    "is-pushing": ee.value === Ne.name,
                    onFetch: Ce,
                    onPush: ye,
                    onSelect: K
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                we.value && we.value.ahead > 0 ? (n(), i("div", Q8, [
                  se[31] || (se[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", X8, [
                    t("strong", null, f(we.value.ahead) + " unpushed commit" + f(we.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(z.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(de, {
                    variant: "primary",
                    size: "xs",
                    loading: ee.value === z.value,
                    onClick: se[11] || (se[11] = (Ne) => z.value && ye(z.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(z.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", Z8, [
                  S(de, {
                    variant: "link",
                    size: "xs",
                    onClick: se[12] || (se[12] = (Ne) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...se[32] || (se[32] = [
                      $(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          P.value ? (n(), D(rt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", e4, [
                oe.value ? (n(), i("div", t4, "Loading environment summary...")) : pe.value ? (n(), i(H, { key: 1 }, [
                  t("div", s4, [
                    se[33] || (se[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", o4, f(pe.value.comfyui_version), 1)
                  ]),
                  t("div", n4, [
                    se[34] || (se[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", a4, f(pe.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", l4, [
                    se[35] || (se[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", i4, f(pe.value.model_count) + " models", 1)
                  ]),
                  pe.value.models_with_sources > 0 ? (n(), i("div", r4, [
                    t("span", c4, "└─ " + f(pe.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  pe.value.models_without_sources > 0 ? (n(), i("div", u4, [
                    t("span", d4, "└─ " + f(pe.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", f4, [
                    se[36] || (se[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", m4, f(pe.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", v4, [
                    se[37] || (se[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", p4, "~" + f(pe.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          P.value && te.value ? (n(), D(rt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ne, _s;
              return [
                t("div", g4, [
                  t("div", h4, [
                    t("div", y4, [
                      se[42] || (se[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", w4, [
                        se[38] || (se[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", k4, "$" + f(te.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", _4, [
                        se[39] || (se[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", b4, "$" + f(te.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", $4, [
                        se[40] || (se[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", C4, "$" + f(te.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      se[43] || (se[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", x4, [
                        se[41] || (se[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", S4, "~$" + f(te.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", I4, [
                      se[45] || (se[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", E4, [
                        t("span", null, f(((Ne = Ue.value.find((rs) => rs.id === I.value)) == null ? void 0 : Ne.displayName) || "GPU") + " (" + f(((_s = Ue.value.find((rs) => rs.id === I.value)) == null ? void 0 : _s.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", T4, [
                        t("span", null, "Region: " + f(B.value), 1)
                      ]),
                      re.value ? (n(), i("div", R4, [
                        t("span", null, "Volume: " + f(re.value.name), 1)
                      ])) : y("", !0),
                      Z.value === "SPOT" ? (n(), i("div", P4, [...se[44] || (se[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          P.value ? (n(), i("div", M4, [
            S(de, {
              variant: "primary",
              size: "md",
              loading: R.value || ce.value,
              disabled: !Pe.value,
              onClick: st
            }, {
              default: h(() => [
                se[46] || (se[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                $(" " + f(R.value ? "Validating..." : ce.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ue.value ? (n(), D(rt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              S(Pt, {
                status: ue.value.status === "success" ? "synced" : "broken"
              }, no({
                icon: h(() => [
                  $(f(ue.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(ue.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(ue.value.message), 1)
                ]),
                actions: h(() => [
                  S(de, {
                    variant: "ghost",
                    size: "xs",
                    onClick: se[13] || (se[13] = (Ne) => ue.value = null)
                  }, {
                    default: h(() => [...se[47] || (se[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ue.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    S(ft, {
                      label: "Pod ID:",
                      value: ue.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        Ee.value ? (n(), D(ct, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Fe.value) == null ? void 0 : He.phase) === "READY" || ((yt = Fe.value) == null ? void 0 : yt.phase) === "ERROR" || ((Vt = Fe.value) == null ? void 0 : Vt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ao
        }, no({
          body: h(() => {
            var Ne, _s, rs, lo, io, Hs, le, J, Ae, je, at, mt;
            return [
              t("div", D4, [
                t("div", L4, [
                  t("div", {
                    class: Se(["phase-icon", (_s = (Ne = Fe.value) == null ? void 0 : Ne.phase) == null ? void 0 : _s.toLowerCase()])
                  }, [
                    ((rs = Fe.value) == null ? void 0 : rs.phase) === "READY" ? (n(), i("span", A4, "✓")) : ((lo = Fe.value) == null ? void 0 : lo.phase) === "ERROR" ? (n(), i("span", O4, "✕")) : ((io = Fe.value) == null ? void 0 : io.phase) === "STOPPED" ? (n(), i("span", N4, "○")) : (n(), i("span", U4, "⟳"))
                  ], 2),
                  t("div", z4, [
                    t("div", F4, f(Eo((Hs = Fe.value) == null ? void 0 : Hs.phase)), 1),
                    t("div", V4, f(((le = Fe.value) == null ? void 0 : le.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(aa, {
                  progress: js((J = Fe.value) == null ? void 0 : J.phase),
                  variant: ((Ae = Fe.value) == null ? void 0 : Ae.phase) === "ERROR" ? "error" : ((je = Fe.value) == null ? void 0 : je.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((at = Fe.value) == null ? void 0 : at.phase) === "READY" ? (n(), i("div", B4, [
                  S(de, {
                    variant: "primary",
                    size: "md",
                    onClick: Yt
                  }, {
                    default: h(() => [...se[48] || (se[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", W4, [
                  (mt = Fe.value) != null && mt.console_url ? (n(), i("a", {
                    key: 0,
                    href: Fe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, G4)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ws = Fe.value) == null ? void 0 : ws.phase) === "READY" || ((ks = Fe.value) == null ? void 0 : ks.phase) === "ERROR" || ((is = Fe.value) == null ? void 0 : is.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              S(de, {
                variant: "ghost",
                size: "xs",
                onClick: ao
              }, {
                default: h(() => [...se[49] || (se[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        q.value && F.value ? (n(), D(Br, {
          key: 1,
          issues: F.value.blocking_issues,
          onClose: se[14] || (se[14] = (Ne) => q.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ne.value && F.value ? (n(), D(Wr, {
          key: 2,
          models: F.value.warnings.models_without_sources,
          onConfirm: vt,
          onCancel: se[15] || (se[15] = (Ne) => ne.value = !1),
          onRevalidate: qt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), H4 = /* @__PURE__ */ ge(j4, [["__scopeId", "data-v-522cd4d9"]]), K4 = { class: "worker-header" }, q4 = { class: "worker-status" }, Y4 = { class: "worker-name" }, J4 = { class: "worker-actions" }, Q4 = { class: "worker-details" }, X4 = { class: "detail-item" }, Z4 = { class: "detail-value" }, e6 = {
  key: 0,
  class: "detail-item"
}, t6 = { class: "detail-value" }, s6 = {
  key: 1,
  class: "detail-item"
}, o6 = { class: "detail-value mode-badge" }, n6 = {
  key: 0,
  class: "worker-stats"
}, a6 = {
  key: 0,
  class: "stat-item"
}, l6 = { key: 0 }, i6 = {
  key: 1,
  class: "worker-stats offline"
}, r6 = /* @__PURE__ */ fe({
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
      t("div", K4, [
        t("div", q4, [
          t("span", {
            class: Se(["status-dot", e.worker.status])
          }, null, 2),
          t("span", Y4, f(e.worker.name), 1)
        ]),
        t("div", J4, [
          e.worker.status === "online" ? (n(), D(de, {
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
          S(de, {
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
      t("div", Q4, [
        t("span", X4, [
          t("span", Z4, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", e6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", t6, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", s6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", o6, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", n6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", a6, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", l6, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", i6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), c6 = /* @__PURE__ */ ge(r6, [["__scopeId", "data-v-b1be7134"]]), u6 = { class: "add-worker-content" }, d6 = { class: "manual-form" }, f6 = { class: "form-row" }, m6 = { class: "form-row-inline" }, v6 = { class: "form-field flex-2" }, p6 = { class: "form-field flex-1" }, g6 = { class: "form-row" }, h6 = { class: "api-key-wrapper" }, y6 = ["type"], w6 = { class: "result-icon" }, k6 = { class: "result-content" }, _6 = { class: "result-message" }, b6 = {
  key: 0,
  class: "result-detail"
}, $6 = { class: "modal-actions" }, C6 = /* @__PURE__ */ fe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = Ze(), l = Ws({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = _(!1), c = _(!1), u = _(!1), d = _(null), m = U(() => l.host && l.port && l.apiKey), v = U(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, k) => (n(), D(ct, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: k[5] || (k[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", u6, [
          t("div", d6, [
            t("div", f6, [
              k[6] || (k[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              qe(t("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", m6, [
              t("div", v6, [
                k[7] || (k[7] = t("label", { class: "form-label" }, "Host", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": k[1] || (k[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", p6, [
                k[8] || (k[8] = t("label", { class: "form-label" }, "Port", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": k[2] || (k[2] = (C) => l.port = C),
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
            t("div", g6, [
              k[9] || (k[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", h6, [
                qe(t("input", {
                  "onUpdate:modelValue": k[3] || (k[3] = (C) => l.apiKey = C),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, y6), [
                  [oa, l.apiKey]
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
              t("span", w6, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", k6, [
                t("span", _6, f(d.value.message), 1),
                d.value.gpu_info ? (n(), i("span", b6, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", $6, [
          S(de, {
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
          S(de, {
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
}), x6 = /* @__PURE__ */ ge(C6, [["__scopeId", "data-v-07a00732"]]), S6 = { class: "discovered-content" }, I6 = {
  key: 0,
  class: "workers-list"
}, E6 = { class: "worker-info" }, T6 = { class: "worker-name" }, R6 = { class: "worker-address" }, P6 = {
  key: 0,
  class: "worker-gpu"
}, M6 = {
  key: 1,
  class: "empty-state"
}, D6 = {
  key: 2,
  class: "api-key-section"
}, L6 = { class: "selected-worker" }, A6 = { class: "selected-name" }, O6 = { class: "selected-address" }, N6 = { class: "form-row" }, U6 = { class: "api-key-wrapper" }, z6 = ["type"], F6 = { class: "result-icon" }, V6 = { class: "result-message" }, B6 = { class: "modal-actions" }, W6 = /* @__PURE__ */ fe({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = Ze(), l = _(null), r = _(""), c = _(!1), u = _(!1), d = _(null), m = _(null);
    async function v(w) {
      var p;
      l.value = w, r.value = "", m.value = null, await gt(), (p = d.value) == null || p.focus();
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
    return (w, p) => (n(), D(ct, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (k) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", S6, [
          e.workers.length > 0 ? (n(), i("div", I6, [
            (n(!0), i(H, null, ve(e.workers, (k) => (n(), i("div", {
              key: `${k.host}:${k.port}`,
              class: "worker-item"
            }, [
              t("div", E6, [
                t("span", T6, f(k.name), 1),
                t("span", R6, f(k.host) + ":" + f(k.port), 1),
                k.gpu_info ? (n(), i("span", P6, f(k.gpu_info), 1)) : y("", !0)
              ]),
              S(de, {
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
          ])) : (n(), i("div", M6, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", D6, [
            t("div", L6, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", A6, f(l.value.name), 1),
              t("span", O6, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", N6, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", U6, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (k) => r.value = k),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Ht(g, ["enter"])
                }, null, 40, z6), [
                  [oa, r.value]
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
              t("span", F6, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", V6, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", B6, [
          l.value ? (n(), D(de, {
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
          l.value ? (n(), D(de, {
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
}), G6 = /* @__PURE__ */ ge(W6, [["__scopeId", "data-v-5a3e40a4"]]), j6 = { class: "deploy-content" }, H6 = { class: "section" }, K6 = {
  key: 0,
  class: "loading-text"
}, q6 = {
  key: 1,
  class: "empty-remotes"
}, Y6 = {
  key: 2,
  class: "remotes-list"
}, J6 = { class: "section" }, Q6 = { class: "mode-options" }, X6 = { class: "mode-option" }, Z6 = ["disabled"], eI = { class: "mode-option" }, tI = { class: "section" }, sI = {
  key: 0,
  class: "section"
}, oI = { class: "summary-row" }, nI = {
  key: 1,
  class: "sync-warning"
}, aI = { class: "warning-content" }, lI = { class: "modal-actions" }, iI = /* @__PURE__ */ fe({
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
    } = Ze(), v = _([]), g = _({}), w = _(!1), p = _(null), k = _(null), C = _(null), b = _(o.worker.mode || "native"), x = _(""), M = _(null), P = _(!1), T = U(() => p.value && g.value[p.value] || null), L = U(() => {
      if (!p.value) return null;
      const O = v.value.find((j) => j.name === p.value);
      return (O == null ? void 0 : O.fetch_url) || null;
    }), V = U(() => L.value && !P.value);
    async function B() {
      w.value = !0;
      try {
        const O = await l();
        v.value = O.remotes, await Promise.all(
          O.remotes.map(async (X) => {
            const z = await r(X.name);
            z && (g.value[X.name] = z);
          })
        );
        const j = O.remotes.find((X) => X.is_default);
        j ? p.value = j.name : O.remotes.length > 0 && (p.value = O.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function E() {
      try {
        M.value = await d();
      } catch {
      }
    }
    async function I(O) {
      k.value = O;
      try {
        await c(O);
        const j = await r(O);
        j && (g.value[O] = j), a("toast", `Fetched from ${O}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        k.value = null;
      }
    }
    async function A(O) {
      C.value = O;
      try {
        await u(O, { force: !1 });
        const j = await r(O);
        j && (g.value[O] = j), a("toast", `Pushed to ${O}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function Z(O) {
      p.value = O;
    }
    async function W() {
      if (L.value) {
        P.value = !0;
        try {
          const O = await m(o.worker.name, {
            import_source: L.value,
            mode: b.value,
            name: x.value || void 0
          });
          O.id ? (a("toast", `Deployment started: ${O.name || O.id}`, "success"), a("deployed")) : O.status === "error" ? a("toast", O.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (O) {
          a("toast", O instanceof Error ? O.message : "Deployment failed", "error");
        } finally {
          P.value = !1;
        }
      }
    }
    return Qe(() => {
      B(), E();
    }), (O, j) => (n(), D(ct, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: j[5] || (j[5] = (X) => O.$emit("close"))
    }, {
      body: h(() => [
        t("div", j6, [
          t("div", H6, [
            j[7] || (j[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (n(), i("div", K6, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", q6, [...j[6] || (j[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", Y6, [
              (n(!0), i(H, null, ve(v.value, (X) => (n(), D(Hr, {
                key: X.name,
                remote: X,
                "sync-status": g.value[X.name],
                "is-selected": p.value === X.name,
                "is-fetching": k.value === X.name,
                "is-pushing": C.value === X.name,
                onFetch: I,
                onPush: A,
                onSelect: Z
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", J6, [
            j[10] || (j[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", Q6, [
              t("label", X6, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": j[0] || (j[0] = (X) => b.value = X),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, Z6), [
                  [Zt, b.value]
                ]),
                j[8] || (j[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", eI, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": j[1] || (j[1] = (X) => b.value = X),
                  value: "native"
                }, null, 512), [
                  [Zt, b.value]
                ]),
                j[9] || (j[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", tI, [
            j[11] || (j[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": j[2] || (j[2] = (X) => x.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, x.value]
            ])
          ]),
          M.value ? (n(), i("div", sI, [
            j[12] || (j[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", oI, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          T.value && T.value.ahead > 0 ? (n(), i("div", nI, [
            j[14] || (j[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", aI, [
              t("strong", null, f(T.value.ahead) + " unpushed commit" + f(T.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(de, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: j[3] || (j[3] = (X) => p.value && A(p.value))
            }, {
              default: h(() => [...j[13] || (j[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", lI, [
          S(de, {
            variant: "ghost",
            size: "sm",
            onClick: j[4] || (j[4] = (X) => O.$emit("close"))
          }, {
            default: h(() => [...j[15] || (j[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(de, {
            variant: "primary",
            size: "sm",
            loading: P.value,
            disabled: !V.value || P.value,
            onClick: W
          }, {
            default: h(() => [...j[16] || (j[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), rI = /* @__PURE__ */ ge(iI, [["__scopeId", "data-v-c12720d3"]]), cI = { class: "custom-tab" }, uI = { class: "section-header" }, dI = { class: "section-actions" }, fI = { class: "workers-content" }, mI = {
  key: 0,
  class: "loading-state"
}, vI = {
  key: 1,
  class: "empty-state"
}, pI = {
  key: 2,
  class: "workers-list"
}, gI = { class: "scan-icon" }, hI = { class: "scan-message" }, yI = /* @__PURE__ */ fe({
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
        const B = await a();
        u.value = B.workers;
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      v.value = !0, C.value = null;
      try {
        const B = await c(), E = B.discovered.filter(
          (I) => !u.value.some((A) => A.host === I.host && A.port === I.port)
        );
        d.value = E, E.length > 0 ? p.value = !0 : B.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function M(B) {
      try {
        await l(B), o("toast", `Worker '${B.name}' added`, "success"), w.value = !1, await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function P(B) {
      try {
        await l(B), o("toast", `Worker '${B.name}' added`, "success"), p.value = !1, await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function T(B) {
      g.value = B;
      try {
        await r(B), o("toast", `Worker '${B}' removed`, "success"), await b();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function L(B) {
      k.value = B;
    }
    function V() {
      k.value = null, o("deployed");
    }
    return Qe(() => {
      b();
    }), (B, E) => (n(), i("div", cI, [
      t("div", uI, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", dI, [
          S(de, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: x
          }, {
            default: h(() => [...E[6] || (E[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(de, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (I) => w.value = !0)
          }, {
            default: h(() => [...E[7] || (E[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", fI, [
        m.value && u.value.length === 0 ? (n(), i("div", mI, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (n(), i("div", vI, [...E[10] || (E[10] = [
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
        ])])) : (n(), i("div", pI, [
          (n(!0), i(H, null, ve(u.value, (I) => (n(), D(c6, {
            key: I.name,
            worker: I,
            "is-action-loading": g.value === I.name,
            onDeploy: L,
            onRemove: T
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (n(), i("div", {
        key: 0,
        class: Se(["scan-result", C.value.type])
      }, [
        t("span", gI, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", hI, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (I) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (n(), D(G6, {
        key: 1,
        workers: d.value,
        onClose: E[2] || (E[2] = (I) => p.value = !1),
        onAdd: P
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (n(), D(x6, {
        key: 2,
        onClose: E[3] || (E[3] = (I) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      k.value ? (n(), D(rI, {
        key: 3,
        worker: k.value,
        onClose: E[4] || (E[4] = (I) => k.value = null),
        onToast: E[5] || (E[5] = (I, A) => o("toast", I, A)),
        onDeployed: V
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), wI = /* @__PURE__ */ ge(yI, [["__scopeId", "data-v-1637dead"]]), ba = "ComfyGit.Deploy.GitHubPAT";
function Kr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function kI(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function _I() {
  function e() {
    try {
      return localStorage.getItem(ba);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ba, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ba);
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
    isRemoteSsh: Kr,
    isRemoteHttps: kI
  };
}
const bI = { class: "settings-content" }, $I = { class: "settings-section" }, CI = {
  key: 0,
  class: "ssh-warning"
}, xI = { class: "form-row" }, SI = { class: "token-wrapper" }, II = ["type"], EI = { class: "result-icon" }, TI = { class: "result-message" }, RI = { class: "token-actions" }, PI = /* @__PURE__ */ fe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = _I(), { getRemotes: u, testGitAuth: d } = Ze(), m = _(""), v = _(!1), g = _(!1), w = _(null), p = _(!1), k = U(() => c());
    Qe(async () => {
      var P;
      const M = a();
      M && (m.value = M);
      try {
        const L = (P = (await u()).remotes) == null ? void 0 : P.find((V) => V.name === "origin");
        L && Kr(L.url) && (p.value = !0);
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
    return (M, P) => (n(), D(ct, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: P[2] || (P[2] = (T) => M.$emit("close"))
    }, {
      body: h(() => [
        t("div", bI, [
          t("div", $I, [
            P[8] || (P[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            P[9] || (P[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (n(), i("div", CI, [...P[3] || (P[3] = [
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
            t("div", xI, [
              P[4] || (P[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", SI, [
                qe(t("input", {
                  "onUpdate:modelValue": P[0] || (P[0] = (T) => m.value = T),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, II), [
                  [oa, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: P[1] || (P[1] = (T) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              P[5] || (P[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (n(), i("div", {
              key: 1,
              class: Se(["test-result", w.value.type])
            }, [
              t("span", EI, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", TI, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", RI, [
              S(de, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...P[6] || (P[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              k.value ? (n(), D(de, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: x
              }, {
                default: h(() => [...P[7] || (P[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        S(de, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: b
        }, {
          default: h(() => [...P[10] || (P[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), MI = /* @__PURE__ */ ge(PI, [["__scopeId", "data-v-b21588ad"]]), DI = /* @__PURE__ */ fe({
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
    } = jr(), w = _(!1), p = _(!1), k = _("instances"), C = _(null), b = _(null), x = U(() => [
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
    async function M(B) {
      C.value = B.id;
      try {
        await u(B), o("toast", "Instance stopped", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function P(B) {
      C.value = B.id;
      try {
        await d(B), o("toast", "Instance starting...", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function T(B) {
      b.value = B;
    }
    async function L() {
      const B = b.value;
      if (B) {
        b.value = null, C.value = B.id;
        try {
          await m(B), o("toast", "Instance terminated", "success");
        } catch (E) {
          o("toast", E instanceof Error ? E.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function V() {
      await c(), k.value = "instances";
    }
    return Qe(() => {
      c(), v();
    }), Gs(() => {
      g();
    }), (B, E) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (I) => w.value = !0)
          }, {
            actions: h(() => [
              S(de, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (I) => p.value = !0)
              }, {
                default: h(() => [...E[10] || (E[10] = [
                  $(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Nr, {
            modelValue: k.value,
            "onUpdate:modelValue": E[2] || (E[2] = (I) => k.value = I),
            tabs: x.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          k.value === "instances" ? (n(), D(YS, {
            key: 0,
            instances: We(a),
            "is-loading": We(l),
            "action-loading-id": C.value,
            onRefresh: We(c),
            onStop: M,
            onStart: P,
            onTerminate: T
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          k.value === "runpod" ? (n(), D(H4, {
            key: 1,
            onToast: E[3] || (E[3] = (I, A) => o("toast", I, A)),
            onNavigate: E[4] || (E[4] = (I) => o("navigate", I)),
            onDeployed: V
          })) : y("", !0),
          k.value === "custom" ? (n(), D(wI, {
            key: 2,
            onToast: E[5] || (E[5] = (I, A) => o("toast", I, A)),
            onDeployed: V
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (n(), D(rl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: L,
        onCancel: E[6] || (E[6] = (I) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      S(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: E[7] || (E[7] = (I) => w.value = !1)
      }, {
        content: h(() => [...E[11] || (E[11] = [
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
      p.value ? (n(), D(MI, {
        key: 1,
        onClose: E[8] || (E[8] = (I) => p.value = !1),
        onSaved: E[9] || (E[9] = (I) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), LI = /* @__PURE__ */ ge(DI, [["__scopeId", "data-v-d4e32a10"]]), AI = { class: "header-info" }, OI = { class: "commit-hash" }, NI = {
  key: 0,
  class: "commit-refs"
}, UI = { class: "commit-message" }, zI = { class: "commit-date" }, FI = {
  key: 0,
  class: "loading"
}, VI = {
  key: 1,
  class: "changes-section"
}, BI = { class: "stats-row" }, WI = { class: "stat" }, GI = { class: "stat insertions" }, jI = { class: "stat deletions" }, HI = {
  key: 0,
  class: "change-group"
}, KI = {
  key: 1,
  class: "change-group"
}, qI = {
  key: 0,
  class: "version"
}, YI = {
  key: 2,
  class: "change-group"
}, JI = { class: "change-item" }, QI = /* @__PURE__ */ fe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = Ze(), a = _(null), l = _(!0), r = U(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = U(() => {
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
    }), (u, d) => (n(), D(ct, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", AI, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", OI, f(((m = a.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = a.value) == null ? void 0 : g.refs) != null && w.length ? (n(), i("span", NI, [
              (n(!0), i(H, null, ve(a.value.refs, (p) => (n(), i("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          S(Te, {
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
          t("div", UI, f(((m = a.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", zI, f(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", FI, "Loading details...")) : a.value ? (n(), i("div", VI, [
            t("div", BI, [
              t("span", WI, f(a.value.stats.files_changed) + " files", 1),
              t("span", GI, "+" + f(a.value.stats.insertions), 1),
              t("span", jI, "-" + f(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", HI, [
              S(qo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, ve(a.value.changes.workflows.added, (g) => (n(), i("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, ve(a.value.changes.workflows.modified, (g) => (n(), i("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, ve(a.value.changes.workflows.deleted, (g) => (n(), i("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", KI, [
              S(qo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, ve(a.value.changes.nodes.added, (g) => (n(), i("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (n(), i("span", qI, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(H, null, ve(a.value.changes.nodes.removed, (g) => (n(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", YI, [
              S(qo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", JI, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        S(Te, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        S(Te, {
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
}), XI = /* @__PURE__ */ ge(QI, [["__scopeId", "data-v-d256ff6d"]]), ZI = { class: "popover-header" }, eE = { class: "popover-body" }, tE = {
  key: 0,
  class: "changes-summary"
}, sE = {
  key: 0,
  class: "change-item"
}, oE = {
  key: 1,
  class: "change-item"
}, nE = {
  key: 2,
  class: "change-item"
}, aE = {
  key: 3,
  class: "change-item"
}, lE = {
  key: 4,
  class: "change-item"
}, iE = {
  key: 5,
  class: "change-item"
}, rE = {
  key: 1,
  class: "no-changes"
}, cE = {
  key: 2,
  class: "loading"
}, uE = {
  key: 3,
  class: "issues-error"
}, dE = { class: "error-header" }, fE = { class: "error-title" }, mE = { class: "issues-list" }, vE = { class: "workflow-state" }, pE = { class: "message-section" }, gE = { class: "popover-footer" }, hE = {
  key: 1,
  class: "commit-popover"
}, yE = { class: "popover-header" }, wE = { class: "popover-body" }, kE = {
  key: 0,
  class: "changes-summary"
}, _E = {
  key: 0,
  class: "change-item"
}, bE = {
  key: 1,
  class: "change-item"
}, $E = {
  key: 2,
  class: "change-item"
}, CE = {
  key: 3,
  class: "change-item"
}, xE = {
  key: 4,
  class: "change-item"
}, SE = {
  key: 5,
  class: "change-item"
}, IE = {
  key: 1,
  class: "no-changes"
}, EE = {
  key: 2,
  class: "loading"
}, TE = {
  key: 3,
  class: "issues-error"
}, RE = { class: "error-header" }, PE = { class: "error-title" }, ME = { class: "issues-list" }, DE = { class: "workflow-state" }, LE = { class: "message-section" }, AE = { class: "popover-footer" }, OE = /* @__PURE__ */ fe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = Ze(), r = _(""), c = _(!1), u = _(!1), d = U(() => {
      if (!o.status) return !1;
      const k = o.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || o.status.has_changes;
    }), m = U(() => {
      if (!o.status) return !1;
      const k = o.status.workflows, C = o.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = U(() => {
      var k;
      return (k = o.status) != null && k.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = U(() => v.value.length > 0), w = U(() => g.value && !u.value);
    async function p() {
      var k, C, b, x;
      if (!(g.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const M = await l(r.value.trim(), u.value);
          if (M.status === "success") {
            const P = `Committed: ${((k = M.summary) == null ? void 0 : k.new) || 0} new, ${((C = M.summary) == null ? void 0 : C.modified) || 0} modified, ${((b = M.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            a("committed", { success: !0, message: P });
          } else if (M.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (M.status === "blocked") {
            const P = ((x = M.issues) == null ? void 0 : x.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${P}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: M.message || "Commit failed" });
        } catch (M) {
          a("committed", { success: !1, message: M instanceof Error ? M.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (k, C) => e.asModal ? (n(), D(kt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (b) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = it(() => {
          }, ["stop"]))
        }, [
          t("div", ZI, [
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
          t("div", eE, [
            e.status && d.value ? (n(), i("div", tE, [
              e.status.workflows.new.length ? (n(), i("div", sE, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", oE, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", nE, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", aE, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", lE, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (n(), i("div", iE, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", rE, " No changes to commit ")) : (n(), i("div", cE, " Loading... ")),
            g.value ? (n(), i("div", uE, [
              t("div", dE, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", fE, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", mE, [
                (n(!0), i(H, null, ve(v.value, (b) => (n(), i("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", vE, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              S(Gn, {
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
            t("div", pE, [
              S(Na, {
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
          t("div", gE, [
            S(Te, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (b) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(Te, {
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
    ])) : (n(), i("div", hE, [
      t("div", yE, [
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
      t("div", wE, [
        e.status && d.value ? (n(), i("div", kE, [
          e.status.workflows.new.length ? (n(), i("div", _E, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", bE, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", $E, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", CE, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", xE, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (n(), i("div", SE, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", IE, " No changes to commit ")) : (n(), i("div", EE, " Loading... ")),
        g.value ? (n(), i("div", TE, [
          t("div", RE, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", PE, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", ME, [
            (n(!0), i(H, null, ve(v.value, (b) => (n(), i("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", DE, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          S(Gn, {
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
        t("div", LE, [
          S(Na, {
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
      t("div", AE, [
        S(Te, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (b) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(Te, {
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
}), qr = /* @__PURE__ */ ge(OE, [["__scopeId", "data-v-5f897631"]]), NE = { class: "modal-header" }, UE = { class: "modal-body" }, zE = { class: "switch-message" }, FE = { class: "switch-details" }, VE = { class: "modal-actions" }, BE = /* @__PURE__ */ fe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", NE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", UE, [
            t("p", zE, [
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
            t("p", FE, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", VE, [
            S(de, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(de, {
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
}), WE = /* @__PURE__ */ ge(BE, [["__scopeId", "data-v-e9c5253e"]]), GE = {
  key: 0,
  class: "modal-overlay"
}, jE = { class: "modal-content" }, HE = { class: "modal-body" }, KE = { class: "progress-info" }, qE = { class: "progress-percentage" }, YE = { class: "progress-state" }, JE = { class: "switch-steps" }, QE = { class: "step-icon" }, XE = { class: "step-label" }, ZE = /* @__PURE__ */ fe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = U(() => {
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
    }), a = U(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = U(() => {
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
    return (r, c) => (n(), D(kt, { to: "body" }, [
      e.show ? (n(), i("div", GE, [
        t("div", jE, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", HE, [
            S(aa, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", KE, [
              t("div", qE, f(e.progress) + "%", 1),
              t("div", YE, f(o.value), 1)
            ]),
            t("div", JE, [
              (n(!0), i(H, null, ve(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Se(["switch-step", u.status])
              }, [
                t("span", QE, f(u.icon), 1),
                t("span", XE, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), eT = /* @__PURE__ */ ge(ZE, [["__scopeId", "data-v-768a5078"]]), tT = { class: "modal-header" }, sT = { class: "modal-body" }, oT = {
  key: 0,
  class: "node-section"
}, nT = { class: "node-list" }, aT = {
  key: 1,
  class: "node-section"
}, lT = { class: "node-list" }, iT = { class: "modal-actions" }, rT = /* @__PURE__ */ fe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = it(() => {
          }, ["stop"]))
        }, [
          t("div", tT, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", sT, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", oT, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", nT, [
                (n(!0), i(H, null, ve(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + f(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", aT, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", lT, [
                (n(!0), i(H, null, ve(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          t("div", iT, [
            S(de, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(de, {
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
}), cT = /* @__PURE__ */ ge(rT, [["__scopeId", "data-v-7cad7518"]]), uT = [
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
], dT = "v0.0.17", fT = "Akatz", mT = { class: "social-buttons" }, vT = ["title", "aria-label", "onClick"], pT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gT = ["d"], hT = ["title", "aria-label", "onClick"], yT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, wT = ["d"], kT = /* @__PURE__ */ fe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", mT, [
      (n(!0), i(H, null, ve(We(uT), (l) => (n(), i(H, {
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
          (n(), i("svg", pT, [
            t("path", {
              d: l.iconPath
            }, null, 8, gT)
          ]))
        ], 8, vT)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", yT, [
            t("path", {
              d: l.iconPath
            }, null, 8, wT)
          ]))
        ], 8, hT))
      ], 64))), 128))
    ]));
  }
}), Yr = /* @__PURE__ */ ge(kT, [["__scopeId", "data-v-4f846342"]]), _T = { class: "footer-info" }, bT = { class: "version" }, $T = { class: "made-by" }, CT = /* @__PURE__ */ fe({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (n(), i("div", _T, [
      t("span", bT, f(We(dT)), 1),
      t("span", $T, [
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
        $(" by " + f(We(fT)), 1)
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ ge(CT, [["__scopeId", "data-v-8bc3db0a"]]), xT = /* @__PURE__ */ fe({
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
    return (r, c) => (n(), D(ct, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        S(Or, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          S(Te, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Te, {
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
}), ST = /* @__PURE__ */ ge(xT, [["__scopeId", "data-v-fac00ae7"]]), IT = { class: "header-actions" }, ET = {
  key: 0,
  class: "wizard-step"
}, TT = { class: "form-field" }, RT = ["placeholder"], PT = {
  key: 0,
  class: "form-error"
}, MT = { class: "form-field form-field--checkbox" }, DT = { class: "form-checkbox" }, LT = {
  key: 0,
  class: "form-field"
}, AT = ["placeholder"], OT = {
  key: 0,
  class: "form-info"
}, NT = {
  key: 1,
  class: "form-suggestion"
}, UT = {
  key: 2,
  class: "form-error"
}, zT = {
  key: 3,
  class: "form-info"
}, FT = {
  key: 1,
  class: "wizard-step"
}, VT = {
  key: 0,
  class: "progress-check-loading"
}, BT = {
  key: 0,
  class: "cli-warning"
}, WT = { class: "cli-warning-header" }, GT = {
  key: 1,
  class: "env-landing"
}, jT = { class: "env-list" }, HT = ["value"], KT = { class: "env-name" }, qT = {
  key: 2,
  class: "env-create"
}, YT = { class: "form-field" }, JT = { class: "form-field" }, QT = ["value"], XT = { class: "form-field" }, ZT = ["disabled"], e7 = ["value"], t7 = { class: "form-field" }, s7 = ["value"], o7 = { class: "form-field form-field--checkbox" }, n7 = { class: "form-checkbox" }, a7 = {
  key: 0,
  class: "form-error"
}, l7 = {
  key: 1,
  class: "env-creating"
}, i7 = { class: "creating-intro" }, r7 = {
  key: 3,
  class: "env-import"
}, c7 = { class: "wizard-footer" }, u7 = { class: "wizard-footer-actions" }, uo = 10, d7 = 600 * 1e3, oi = 1800 * 1e3, f7 = /* @__PURE__ */ fe({
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
    } = Ze(), g = _(o.initialStep || 1), w = _(null), p = _("landing"), k = _(!1), C = _(!1), b = _(!1), x = _(!1), M = _(null), P = _(o.initialStep === 2), T = _(o.defaultPath), L = _(!!o.detectedModelsDir), V = _(o.detectedModelsDir || ""), B = _(null), E = _(null), I = _(null), A = _(null), Z = _("my-new-env"), W = _(Fr), O = _("latest"), j = _(Vr), X = _(!0), z = _(null), ae = _(null), ee = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ke = _(!1), be = _(!1), Le = _(!1), ze = _({ progress: 0, message: "" }), Ue = _({ progress: 0, message: "" }), Ye = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], pe = _(0), oe = _(null), ce = _(0), ue = _(null), Ee = U(() => {
      var Ce, ye;
      const te = (Ce = T.value) == null ? void 0 : Ce.trim(), Y = !B.value, Me = !L.value || !E.value && ((ye = V.value) == null ? void 0 : ye.trim());
      return te && Y && Me;
    }), Re = U(() => {
      var te;
      return (te = Z.value) == null ? void 0 : te.trim();
    }), Fe = U(() => !!(g.value === 2 || ae.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), N = U(() => ae.value || o.workspacePath || null);
    async function R() {
      var te;
      if (B.value = null, !!((te = T.value) != null && te.trim()))
        try {
          const Y = await c({ path: T.value, type: "workspace" });
          Y.valid || (B.value = Y.error || "Invalid path");
        } catch (Y) {
          B.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function F() {
      var te;
      if (E.value = null, I.value = null, A.value = null, !!((te = V.value) != null && te.trim()))
        try {
          const Y = await c({ path: V.value, type: "models" });
          if (Y.valid)
            A.value = Y.model_count ?? null;
          else if (E.value = Y.error || "Invalid path", Y.suggestion) {
            I.value = Y.suggestion, V.value = Y.suggestion, E.value = null;
            const Me = await c({ path: Y.suggestion, type: "models" });
            Me.valid && (A.value = Me.model_count ?? null);
          }
        } catch (Y) {
          E.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function q() {
      var te, Y, Me, Ce, ye;
      if (B.value = null, E.value = null, await R(), (te = B.value) != null && te.includes("already exists")) {
        B.value = null, ae.value = ((Y = T.value) == null ? void 0 : Y.trim()) || o.defaultPath, g.value = 2, re();
        return;
      }
      if (!B.value && !(L.value && ((Me = V.value) != null && Me.trim()) && (await F(), E.value))) {
        be.value = !0;
        try {
          await l({
            workspace_path: ((Ce = T.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: L.value && ((ye = V.value) == null ? void 0 : ye.trim()) || null
          }), pe.value = 0, oe.value = Date.now();
          const K = setInterval(async () => {
            var G;
            if (oe.value && Date.now() - oe.value > d7) {
              clearInterval(K), be.value = !1, B.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const me = await r();
              if (pe.value = 0, me.state === "idle" && be.value) {
                clearInterval(K), be.value = !1, B.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ze.value = { progress: me.progress, message: me.message }, me.state === "complete" ? (clearInterval(K), be.value = !1, ae.value = ((G = T.value) == null ? void 0 : G.trim()) || o.defaultPath, g.value = 2, re()) : me.state === "error" && (clearInterval(K), be.value = !1, B.value = me.error || "Workspace creation failed");
            } catch (me) {
              pe.value++, console.warn(`Polling failure ${pe.value}/${uo}:`, me), pe.value >= uo && (clearInterval(K), be.value = !1, B.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (K) {
          be.value = !1, B.value = K instanceof Error ? K.message : "Failed to create workspace";
        }
      }
    }
    async function ne() {
      Le.value = !0, z.value = null;
      try {
        const te = {
          name: Z.value.trim() || "my-new-env",
          python_version: W.value,
          comfyui_version: O.value,
          torch_backend: j.value,
          switch_after: X.value,
          workspace_path: ae.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(te)).status === "started") {
          ce.value = 0, ue.value = Date.now();
          const Me = setInterval(async () => {
            if (ue.value && Date.now() - ue.value > oi) {
              clearInterval(Me), Le.value = !1, z.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (ce.value = 0, Ce.state === "idle" && Le.value) {
                clearInterval(Me), Le.value = !1, z.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ue.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(Me), Le.value = !1;
                const ye = Ce.environment_name || te.name;
                X.value ? a("complete", ye, ae.value) : (p.value = "landing", a("environment-created-no-switch", ye));
              } else Ce.state === "error" && (clearInterval(Me), Le.value = !1, z.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${uo}:`, Ce), ce.value >= uo && (clearInterval(Me), Le.value = !1, z.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (te) {
        Le.value = !1, z.value = te instanceof Error ? te.message : "Unknown error";
      }
    }
    async function re() {
      ke.value = !0;
      try {
        ee.value = await v();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        ke.value = !1;
      }
    }
    function $e() {
      w.value && a("switch-environment", w.value, ae.value);
    }
    function ie() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function we(te, Y) {
      C.value = !1, Y ? a("complete", te, ae.value) : (a("environment-created-no-switch", te), p.value = "landing");
    }
    function he() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (ae.value = o.workspacePath), g.value === 2) {
        re();
        const te = setTimeout(() => {
          P.value = !1;
        }, 3e3);
        await Pe(), clearTimeout(te), P.value = !1;
      }
    });
    async function Pe() {
      try {
        const te = await d();
        if (console.log("[ComfyGit] Create progress check:", te.state, te), te.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", te.environment_name), p.value = "create", Le.value = !0, Z.value = te.environment_name || "my-new-env", Ue.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase
          }, Ie();
          return;
        }
      } catch (te) {
        console.log("[ComfyGit] Create progress check failed:", te);
      }
      try {
        const te = await m();
        console.log("[ComfyGit] Import progress check:", te.state, te), te.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", te.environment_name), M.value = {
          message: te.message || "Importing...",
          phase: te.phase || "",
          progress: te.progress ?? 0,
          environmentName: te.environment_name || ""
        }, x.value = !0, p.value = "import", C.value = !0);
      } catch (te) {
        console.log("[ComfyGit] Import progress check failed:", te);
      }
    }
    async function Ie() {
      ce.value = 0, ue.value = Date.now();
      let te = null;
      const Y = async () => {
        if (ue.value && Date.now() - ue.value > oi)
          return te && clearInterval(te), Le.value = !1, z.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (ce.value = 0, Ce.state === "idle" && Le.value)
            return te && clearInterval(te), Le.value = !1, z.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ue.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            te && clearInterval(te), Le.value = !1;
            const ye = Ce.environment_name || Z.value;
            return a("complete", ye, ae.value), !1;
          } else if (Ce.state === "error")
            return te && clearInterval(te), Le.value = !1, z.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return ce.value++, console.warn(`Polling failure ${ce.value}/${uo}:`, Ce), ce.value >= uo ? (te && clearInterval(te), Le.value = !1, z.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Y() && (te = setInterval(async () => {
        !await Y() && te && clearInterval(te);
      }, 2e3));
    }
    return (te, Y) => (n(), i(H, null, [
      S(ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Y[15] || (Y[15] = (Me) => te.$emit("close"))
      }, {
        header: h(() => [
          Y[20] || (Y[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", IT, [
            S(Yr),
            Y[19] || (Y[19] = t("span", { class: "header-divider" }, null, -1)),
            Fe.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Y[0] || (Y[0] = (Me) => k.value = !0)
            }, [...Y[17] || (Y[17] = [
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
              onClick: Y[1] || (Y[1] = (Me) => te.$emit("close")),
              title: "Close"
            }, [...Y[18] || (Y[18] = [
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
            g.value === 1 ? (n(), i("div", ET, [
              Y[24] || (Y[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", TT, [
                Y[21] || (Y[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Y[2] || (Y[2] = (Ce) => T.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, RT), [
                  [zt, T.value]
                ]),
                B.value ? (n(), i("p", PT, f(B.value), 1)) : y("", !0)
              ]),
              t("div", MT, [
                t("label", DT, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[3] || (Y[3] = (Ce) => L.value = Ce)
                  }, null, 512), [
                    [nn, L.value]
                  ]),
                  Y[22] || (Y[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              L.value ? (n(), i("div", LT, [
                Y[23] || (Y[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Y[4] || (Y[4] = (Ce) => V.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, AT), [
                  [zt, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (n(), i("p", OT, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                I.value ? (n(), i("p", NT, " Did you mean: " + f(I.value), 1)) : y("", !0),
                E.value ? (n(), i("p", UT, f(E.value), 1)) : y("", !0),
                A.value !== null && !E.value ? (n(), i("p", zT, " Found " + f(A.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              be.value ? (n(), D(Wn, {
                key: 1,
                progress: ze.value.progress,
                message: ze.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (n(), i("div", FT, [
              P.value ? (n(), i("div", VT, [...Y[25] || (Y[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !b.value ? (n(), i("div", BT, [
                  t("div", WT, [
                    Y[27] || (Y[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Y[28] || (Y[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Y[5] || (Y[5] = (Ce) => b.value = !0),
                      title: "Dismiss"
                    }, [...Y[26] || (Y[26] = [
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
                  Y[29] || (Y[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Y[30] || (Y[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (n(), i("div", GT, [
                  Y[34] || (Y[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Y[6] || (Y[6] = (Ce) => p.value = "create")
                  }, [...Y[31] || (Y[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: Y[7] || (Y[7] = (Ce) => {
                      x.value = !1, p.value = "import";
                    })
                  }, [...Y[32] || (Y[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Me = o.existingEnvironments) != null && Me.length ? (n(), i(H, { key: 0 }, [
                    Y[33] || (Y[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", jT, [
                      (n(!0), i(H, null, ve(o.existingEnvironments, (Ce) => (n(), i("label", {
                        key: Ce,
                        class: Se(["env-option", { selected: w.value === Ce }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": Y[8] || (Y[8] = (ye) => w.value = ye)
                        }, null, 8, HT), [
                          [Zt, w.value]
                        ]),
                        t("span", KT, f(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (n(), i("div", qT, [
                  Le.value ? (n(), i("div", l7, [
                    t("p", i7, [
                      Y[41] || (Y[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(Z.value), 1),
                      Y[42] || (Y[42] = $("... ", -1))
                    ]),
                    S(Wn, {
                      progress: Ue.value.progress,
                      message: Ue.value.message,
                      "current-phase": Ue.value.phase,
                      "show-steps": !0,
                      steps: Ye
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Y[43] || (Y[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    Y[40] || (Y[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", YT, [
                      Y[35] || (Y[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": Y[9] || (Y[9] = (Ce) => Z.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, Z.value]
                      ])
                    ]),
                    t("div", JT, [
                      Y[36] || (Y[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[10] || (Y[10] = (Ce) => W.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, ve(We(zr), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce), 9, QT))), 128))
                      ], 512), [
                        [hs, W.value]
                      ])
                    ]),
                    t("div", XT, [
                      Y[37] || (Y[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[11] || (Y[11] = (Ce) => O.value = Ce),
                        class: "form-select",
                        disabled: ke.value
                      }, [
                        (n(!0), i(H, null, ve(ee.value, (Ce) => (n(), i("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, f(Ce.name), 9, e7))), 128))
                      ], 8, ZT), [
                        [hs, O.value]
                      ])
                    ]),
                    t("div", t7, [
                      Y[38] || (Y[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[12] || (Y[12] = (Ce) => j.value = Ce),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, ve(We(cl), (Ce) => (n(), i("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce) + f(Ce === "auto" ? " (detect GPU)" : ""), 9, s7))), 128))
                      ], 512), [
                        [hs, j.value]
                      ])
                    ]),
                    t("div", o7, [
                      t("label", n7, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Y[13] || (Y[13] = (Ce) => X.value = Ce)
                        }, null, 512), [
                          [nn, X.value]
                        ]),
                        Y[39] || (Y[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    z.value ? (n(), i("div", a7, f(z.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (n(), i("div", r7, [
                  S(Gr, {
                    "workspace-path": ae.value,
                    "resume-import": x.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: we,
                    onImportStarted: Y[14] || (Y[14] = (Ce) => C.value = !0),
                    onSourceCleared: he
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", c7, [
            S(Jr),
            t("div", u7, [
              g.value === 1 ? (n(), D(Te, {
                key: 0,
                variant: "primary",
                disabled: !Ee.value || be.value,
                onClick: q
              }, {
                default: h(() => [
                  $(f(be.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (n(), i(H, { key: 1 }, [
                !Le.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !ae.value) ? (n(), D(Te, {
                  key: 0,
                  variant: "secondary",
                  onClick: ie
                }, {
                  default: h(() => [...Y[44] || (Y[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (n(), D(Te, {
                  key: 1,
                  variant: "primary",
                  disabled: !Re.value || Le.value,
                  onClick: ne
                }, {
                  default: h(() => [
                    $(f(Le.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (n(), D(Te, {
                  key: 2,
                  variant: "primary",
                  onClick: $e
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
      k.value ? (n(), D(ST, {
        key: 0,
        "workspace-path": N.value,
        onClose: Y[16] || (Y[16] = (Me) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), m7 = /* @__PURE__ */ ge(f7, [["__scopeId", "data-v-9a9aadc0"]]), v7 = { class: "comfygit-panel" }, p7 = { class: "panel-header" }, g7 = { class: "header-left" }, h7 = {
  key: 0,
  class: "header-info"
}, y7 = { class: "header-actions" }, w7 = { class: "env-switcher" }, k7 = {
  key: 0,
  class: "header-info"
}, _7 = { class: "branch-name" }, b7 = { class: "panel-main" }, $7 = { class: "sidebar" }, C7 = { class: "sidebar-content" }, x7 = { class: "sidebar-section" }, S7 = { class: "sidebar-section" }, I7 = { class: "sidebar-section" }, E7 = {
  key: 0,
  class: "sidebar-badge"
}, T7 = { class: "sidebar-footer" }, R7 = { class: "content-area" }, P7 = {
  key: 0,
  class: "error-message"
}, M7 = {
  key: 1,
  class: "loading"
}, D7 = { class: "dialog-content env-selector-dialog" }, L7 = { class: "dialog-header" }, A7 = { class: "dialog-body" }, O7 = { class: "env-list" }, N7 = { class: "env-info" }, U7 = { class: "env-name-row" }, z7 = { class: "env-indicator" }, F7 = { class: "env-name" }, V7 = {
  key: 0,
  class: "env-branch"
}, B7 = {
  key: 1,
  class: "current-label"
}, W7 = { class: "env-stats" }, G7 = ["onClick"], j7 = { class: "toast-container" }, H7 = { class: "toast-message" }, ni = "ComfyGit.LastView", ai = "ComfyGit.LastSection", K7 = /* @__PURE__ */ fe({
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
      getSetupStatus: x
    } = Ze(), M = op(), { liveInstanceCount: P } = jr({ autoStart: !0 }), T = _(null), L = _([]), V = _([]), B = _([]), E = U(() => B.value.find((le) => le.is_current)), I = _(null), A = _(!1), Z = _(1), W = U(() => {
      var le;
      return ((le = I.value) == null ? void 0 : le.state) || "managed";
    }), O = _(!1), j = _(null), X = _(null), z = _(!1), ae = _(null), ee = _(null), ke = _(null), be = _(!1), Le = _(!1), ze = _(""), Ue = _(null), Ye = _({ state: "idle", progress: 0, message: "" });
    let pe = null, oe = null;
    const ce = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ue = o.initialView ? ce[o.initialView] : null, Ee = [
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
    ], Re = ["this-env", "all-envs", "sharing"];
    function Fe() {
      try {
        const le = sessionStorage.getItem(ni), J = sessionStorage.getItem(ai);
        if (le && J && Ee.includes(le) && Re.includes(J))
          return { view: le, section: J };
      } catch {
      }
      return null;
    }
    const N = Fe(), R = _((ue == null ? void 0 : ue.view) ?? (N == null ? void 0 : N.view) ?? "status"), F = _((ue == null ? void 0 : ue.section) ?? (N == null ? void 0 : N.section) ?? "this-env");
    function q(le, J) {
      R.value = le, F.value = J;
      try {
        sessionStorage.setItem(ni, le), sessionStorage.setItem(ai, J);
      } catch {
      }
    }
    function ne(le) {
      const Ae = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[le];
      Ae && q(Ae.view, Ae.section);
    }
    function re() {
      q("branches", "this-env");
    }
    function $e() {
      a("close"), setTimeout(() => {
        var J;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Ae of le)
          if (((J = Ae.textContent) == null ? void 0 : J.trim()) === "Manager") {
            Ae.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ie = _(null), we = _(!1), he = _(!1), Pe = _([]);
    let Ie = 0;
    function te(le, J = "info", Ae = 3e3) {
      const je = ++Ie;
      return Pe.value.push({ id: je, message: le, type: J }), Ae > 0 && setTimeout(() => {
        Pe.value = Pe.value.filter((at) => at.id !== je);
      }, Ae), je;
    }
    function Y(le) {
      Pe.value = Pe.value.filter((J) => J.id !== le);
    }
    function Me(le, J) {
      te(le, J);
    }
    const Ce = U(() => {
      if (!T.value) return "neutral";
      const le = T.value.workflows, J = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || T.value.has_changes;
      return T.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    U(() => T.value ? Ce.value === "success" ? "All synced" : Ce.value === "warning" ? "Uncommitted changes" : Ce.value === "error" ? "Not synced" : "" : "");
    async function ye() {
      O.value = !0, j.value = null;
      try {
        const [le, J, Ae, je] = await Promise.all([
          l(!0),
          r(),
          c(),
          g()
        ]);
        T.value = le, L.value = J.commits, V.value = Ae.branches, B.value = je, a("statusUpdate", le), ae.value && await ae.value.loadWorkflows(!0);
      } catch (le) {
        j.value = le instanceof Error ? le.message : "Failed to load status", T.value = null, L.value = [], V.value = [];
      } finally {
        O.value = !1;
      }
    }
    function K(le) {
      X.value = le;
    }
    async function G(le) {
      var Ae;
      X.value = null;
      const J = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      ie.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Ae = le.hash) == null ? void 0 : Ae.slice(0, 7))}?`,
        details: J ? Hs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var mt;
          ie.value = null, st();
          const je = te(`Checking out ${le.short_hash || ((mt = le.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), at = await u(le.hash, J);
          Y(je), at.status === "success" ? te("Restarting ComfyUI...", "success") : te(at.message || "Checkout failed", "error");
        }
      };
    }
    async function me(le) {
      const J = T.value && (T.value.workflows.new.length > 0 || T.value.workflows.modified.length > 0 || T.value.workflows.deleted.length > 0 || T.value.has_changes);
      ie.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: J ? Hs() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, st();
          const Ae = te(`Switching to ${le}...`, "info", 0), je = await m(le, J);
          Y(Ae), je.status === "success" ? te("Restarting ComfyUI...", "success") : te(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function Be(le) {
      const J = te(`Creating branch ${le}...`, "info", 0), Ae = await d(le);
      Y(J), Ae.status === "success" ? (te(`Branch "${le}" created`, "success"), await ye()) : te(Ae.message || "Failed to create branch", "error");
    }
    async function et(le, J = !1) {
      const Ae = async (je) => {
        var mt;
        const at = te(`Deleting branch ${le}...`, "info", 0);
        try {
          const Jt = await v(le, je);
          Y(at), Jt.status === "success" ? (te(`Branch "${le}" deleted`, "success"), await ye()) : (mt = Jt.message) != null && mt.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Ae(!0);
            }
          } : te(Jt.message || "Failed to delete branch", "error");
        } catch (Jt) {
          Y(at);
          const Ks = Jt instanceof Error ? Jt.message : "Failed to delete branch";
          Ks.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Ae(!0);
            }
          } : te(Ks, "error");
        }
      };
      ie.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, await Ae(J);
        }
      };
    }
    async function St(le) {
      X.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const Ae = te(`Creating branch ${J}...`, "info", 0), je = await d(J, le.hash);
        Y(Ae), je.status === "success" ? (te(`Branch "${J}" created from ${le.short_hash}`, "success"), await ye()) : te(je.message || "Failed to create branch", "error");
      }
    }
    function st() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function vt() {
      ie.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ie.value = null, st(), te("Restarting environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function qt() {
      ie.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ie.value = null, te("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ht(le, J) {
      z.value = !1, ze.value = le, Ue.value = J || null, be.value = !0;
    }
    async function Io() {
      be.value = !1, Le.value = !0, st(), Ye.value = {
        progress: 10,
        state: ls(10),
        message: ys(10)
      };
      try {
        await w(ze.value, Ue.value || void 0), ao(), Eo();
      } catch (le) {
        Yt(), Le.value = !1, te(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), Ye.value = { state: "idle", progress: 0, message: "" }, Ue.value = null;
      }
    }
    function ls(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function ys(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ls(le)] || "";
    }
    function ao() {
      if (oe) return;
      let le = 10;
      const J = 60, Ae = 5e3, je = 100, at = (J - le) / (Ae / je);
      oe = window.setInterval(() => {
        if (le += at, le >= J && (le = J, Yt()), Ye.value.progress < J) {
          const mt = Math.floor(le);
          Ye.value = {
            progress: mt,
            state: ls(mt),
            message: ys(mt)
          };
        }
      }, je);
    }
    function Yt() {
      oe && (clearInterval(oe), oe = null);
    }
    function Eo() {
      pe || (pe = window.setInterval(async () => {
        try {
          let le = await M.getStatus();
          if ((!le || le.state === "idle") && (le = await p()), !le)
            return;
          const J = le.progress || 0;
          J >= 60 && Yt();
          const Ae = Math.max(J, Ye.value.progress), je = le.state && le.state !== "idle" && le.state !== "unknown", at = je ? le.state : ls(Ae), mt = je && le.message || ys(Ae);
          Ye.value = {
            state: at,
            progress: Ae,
            message: mt
          }, le.state === "complete" ? (Yt(), js(), Le.value = !1, te(`✓ Switched to ${ze.value}`, "success"), await ye(), ze.value = "") : le.state === "rolled_back" ? (Yt(), js(), Le.value = !1, te("Switch failed, restored previous environment", "warning"), ze.value = "") : le.state === "critical_failure" && (Yt(), js(), Le.value = !1, te(`Critical error during switch: ${le.message}`, "error"), ze.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function js() {
      Yt(), pe && (clearInterval(pe), pe = null);
    }
    function xe() {
      var le;
      be.value = !1, ze.value = "", (le = I.value) != null && le.state && I.value.state !== "managed" && (Z.value = I.value.state === "no_workspace" ? 1 : 2, A.value = !0);
    }
    async function se(le) {
      we.value = !1, await ye(), te(le.message, le.success ? "success" : "error");
    }
    async function He() {
      he.value = !1;
      const le = te("Syncing environment...", "info", 0);
      try {
        const J = await C("skip", !0);
        if (Y(le), J.status === "success") {
          const Ae = [];
          J.nodes_installed.length && Ae.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && Ae.push(`${J.nodes_removed.length} removed`);
          const je = Ae.length ? `: ${Ae.join(", ")}` : "";
          te(`✓ Environment synced${je}`, "success"), await ye();
        } else {
          const Ae = J.errors.length ? J.errors.join("; ") : J.message;
          te(`Sync failed: ${Ae}`, "error");
        }
      } catch (J) {
        Y(le), te(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function yt(le) {
      var J;
      try {
        const Ae = await b(le);
        Ae.failed.length === 0 ? te(`✓ Repaired ${Ae.success} workflow${Ae.success === 1 ? "" : "s"}`, "success") : te(`Repaired ${Ae.success}, failed: ${Ae.failed.length}`, "warning"), await ye();
      } catch (Ae) {
        te(`Repair failed: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
      } finally {
        (J = ke.value) == null || J.resetRepairingState();
      }
    }
    async function Vt() {
      var J, Ae;
      const le = te("Repairing environment...", "info", 0);
      try {
        const je = await C("skip", !0);
        if (Y(le), je.status === "success") {
          const at = [];
          je.nodes_installed.length && at.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && at.push(`${je.nodes_removed.length} removed`);
          const mt = at.length ? `: ${at.join(", ")}` : "";
          te(`✓ Environment repaired${mt}`, "success"), (J = ke.value) == null || J.closeDetailModal(), await ye();
        } else {
          const at = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          te(`Repair failed: ${at}`, "error");
        }
      } catch (je) {
        Y(le), te(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Ae = ke.value) == null || Ae.resetRepairingEnvironmentState();
      }
    }
    async function ws(le, J) {
      te(`Environment '${le}' created`, "success"), await ye(), ee.value && await ee.value.loadEnvironments(), J && await ht(le);
    }
    async function ks(le) {
      var J;
      if (((J = E.value) == null ? void 0 : J.name) === le) {
        te("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ie.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ie.value = null;
          try {
            const Ae = await k(le);
            Ae.status === "success" ? (te(`Environment "${le}" deleted`, "success"), await ye(), ee.value && await ee.value.loadEnvironments()) : te(Ae.message || "Failed to delete environment", "error");
          } catch (Ae) {
            te(`Error deleting environment: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function is(le, J) {
      A.value = !1;
      try {
        I.value = await x();
      } catch {
      }
      await ht(le, J);
    }
    function Ne() {
      A.value = !1, a("close");
    }
    async function _s(le, J) {
      await ht(le, J);
    }
    async function rs(le) {
      await ye(), await ht(le);
    }
    async function lo(le) {
      I.value = await x(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function io() {
      q("environments", "all-envs"), setTimeout(() => {
        var le;
        (le = ee.value) == null || le.openCreateModal();
      }, 100);
    }
    function Hs() {
      if (!T.value) return [];
      const le = [], J = T.value.workflows;
      return J.new.length && le.push(`${J.new.length} new workflow(s)`), J.modified.length && le.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && le.push(`${J.deleted.length} deleted workflow(s)`), le;
    }
    return Qe(async () => {
      try {
        if (I.value = await x(), I.value.state === "no_workspace") {
          A.value = !0, Z.value = 1;
          return;
        }
        if (I.value.state === "empty_workspace") {
          A.value = !0, Z.value = 2;
          return;
        }
        if (I.value.state === "unmanaged") {
          A.value = !0, Z.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await ye();
    }), (le, J) => {
      var Ae, je, at, mt, Jt, Ks, fn, mn, vn, pn, Q, _e, Oe;
      return n(), i("div", v7, [
        t("div", p7, [
          t("div", g7, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            T.value ? (n(), i("div", h7)) : y("", !0)
          ]),
          t("div", y7, [
            S(Yr),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Se(["icon-btn", { spinning: O.value }]),
              onClick: ye,
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
              onClick: J[0] || (J[0] = (De) => a("close")),
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
        t("div", w7, [
          t("div", { class: "env-switcher-header" }, [
            J[35] || (J[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: vt
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: qt
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: J[1] || (J[1] = (De) => q("environments", "all-envs"))
          }, [
            T.value ? (n(), i("div", k7, [
              t("span", null, f(((Ae = E.value) == null ? void 0 : Ae.name) || ((je = T.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", _7, "(" + f(T.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", b7, [
          t("div", $7, [
            t("div", C7, [
              t("div", x7, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "status" && F.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (De) => q("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (De) => q("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (De) => q("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "branches" }]),
                  onClick: J[5] || (J[5] = (De) => q("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "history" }]),
                  onClick: J[6] || (J[6] = (De) => q("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (De) => q("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (De) => q("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", S7, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "environments" }]),
                  onClick: J[9] || (J[9] = (De) => q("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (De) => q("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "settings" }]),
                  onClick: J[11] || (J[11] = (De) => q("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (De) => q("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", I7, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (De) => q("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = $(" DEPLOY ", -1)),
                  We(P) > 0 ? (n(), i("span", E7, f(We(P)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "export" }]),
                  onClick: J[14] || (J[14] = (De) => q("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "import" }]),
                  onClick: J[15] || (J[15] = (De) => q("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Se(["sidebar-item", { active: R.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (De) => q("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", T7, [
              S(Jr)
            ])
          ]),
          t("div", R7, [
            j.value ? (n(), i("div", P7, f(j.value), 1)) : !T.value && R.value === "status" ? (n(), i("div", M7, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              R.value === "status" ? (n(), D(dv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ke,
                status: T.value,
                "setup-state": W.value,
                onSwitchBranch: re,
                onCommitChanges: J[17] || (J[17] = (De) => we.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (De) => he.value = !0),
                onViewWorkflows: J[19] || (J[19] = (De) => q("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (De) => q("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (De) => q("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (De) => q("nodes", "this-env")),
                onRepairMissingModels: yt,
                onRepairEnvironment: Vt,
                onStartSetup: J[23] || (J[23] = (De) => A.value = !0),
                onViewEnvironments: J[24] || (J[24] = (De) => q("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : R.value === "workflows" ? (n(), D(J0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ae,
                onRefresh: ye
              }, null, 512)) : R.value === "models-env" ? (n(), D(d_, {
                key: 2,
                onNavigate: ne
              })) : R.value === "branches" ? (n(), D(ep, {
                key: 3,
                branches: V.value,
                current: ((at = T.value) == null ? void 0 : at.branch) || null,
                onSwitch: me,
                onCreate: Be,
                onDelete: et
              }, null, 8, ["branches", "current"])) : R.value === "history" ? (n(), D(sp, {
                key: 4,
                commits: L.value,
                "current-ref": (mt = T.value) == null ? void 0 : mt.branch,
                onSelect: K,
                onCheckout: G
              }, null, 8, ["commits", "current-ref"])) : R.value === "nodes" ? (n(), D(tb, {
                key: 5,
                "version-mismatches": ((Ks = (Jt = T.value) == null ? void 0 : Jt.comparison) == null ? void 0 : Ks.version_mismatches) || [],
                onOpenNodeManager: $e,
                onRepairEnvironment: Vt,
                onToast: Me
              }, null, 8, ["version-mismatches"])) : R.value === "debug-env" ? (n(), D(kC, { key: 6 })) : R.value === "environments" ? (n(), D(Bx, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ee,
                onSwitch: ht,
                onCreated: ws,
                onDelete: ks
              }, null, 512)) : R.value === "model-index" ? (n(), D(x_, {
                key: 8,
                onRefresh: ye
              })) : R.value === "settings" ? (n(), D(dC, { key: 9 })) : R.value === "debug-workspace" ? (n(), D(wC, { key: 10 })) : R.value === "deploy" ? (n(), D(LI, {
                key: 11,
                onToast: Me,
                onNavigate: ne
              })) : R.value === "export" ? (n(), D(D3, { key: 12 })) : R.value === "import" ? (n(), D(SS, {
                key: 13,
                onImportCompleteSwitch: rs
              })) : R.value === "remotes" ? (n(), D(j$, {
                key: 14,
                onToast: Me
              })) : y("", !0)
            ], 64))
          ])
        ]),
        X.value ? (n(), D(XI, {
          key: 0,
          commit: X.value,
          onClose: J[25] || (J[25] = (De) => X.value = null),
          onCheckout: G,
          onCreateBranch: St
        }, null, 8, ["commit"])) : y("", !0),
        ie.value ? (n(), D(rl, {
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
          onCancel: J[26] || (J[26] = (De) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        S(WE, {
          show: be.value,
          "from-environment": ((fn = E.value) == null ? void 0 : fn.name) || "unknown",
          "to-environment": ze.value,
          onConfirm: Io,
          onClose: xe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        we.value && T.value ? (n(), D(qr, {
          key: 2,
          status: T.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (De) => we.value = !1),
          onCommitted: se
        }, null, 8, ["status"])) : y("", !0),
        he.value && T.value ? (n(), D(cT, {
          key: 3,
          show: he.value,
          "mismatch-details": {
            missing_nodes: T.value.comparison.missing_nodes,
            extra_nodes: T.value.comparison.extra_nodes
          },
          onConfirm: He,
          onClose: J[28] || (J[28] = (De) => he.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        S(eT, {
          show: Le.value,
          state: Ye.value.state,
          progress: Ye.value.progress,
          message: Ye.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        z.value ? (n(), i("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = it((De) => z.value = !1, ["self"]))
        }, [
          t("div", D7, [
            t("div", L7, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (De) => z.value = !1)
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
            t("div", A7, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", O7, [
                (n(!0), i(H, null, ve(B.value, (De) => (n(), i("div", {
                  key: De.name,
                  class: Se(["env-item", { current: De.is_current }])
                }, [
                  t("div", N7, [
                    t("div", U7, [
                      t("span", z7, f(De.is_current ? "●" : "○"), 1),
                      t("span", F7, f(De.name), 1),
                      De.current_branch ? (n(), i("span", V7, "(" + f(De.current_branch) + ")", 1)) : y("", !0),
                      De.is_current ? (n(), i("span", B7, "CURRENT")) : y("", !0)
                    ]),
                    t("div", W7, f(De.workflow_count) + " workflows • " + f(De.node_count) + " nodes ", 1)
                  ]),
                  De.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Lt) => ht(De.name)
                  }, " SWITCH ", 8, G7))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        A.value ? (n(), D(m7, {
          key: 5,
          "default-path": ((mn = I.value) == null ? void 0 : mn.default_path) || "~/comfygit",
          "detected-models-dir": ((vn = I.value) == null ? void 0 : vn.detected_models_dir) || null,
          "initial-step": Z.value,
          "existing-environments": ((pn = I.value) == null ? void 0 : pn.environments) || [],
          "cli-installed": ((Q = I.value) == null ? void 0 : Q.cli_installed) ?? !0,
          "setup-state": ((_e = I.value) == null ? void 0 : _e.state) || "no_workspace",
          "workspace-path": ((Oe = I.value) == null ? void 0 : Oe.workspace_path) || null,
          onComplete: is,
          onClose: Ne,
          onSwitchEnvironment: _s,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", j7, [
          S(_d, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(H, null, ve(Pe.value, (De) => (n(), i("div", {
                key: De.id,
                class: Se(["toast", De.type])
              }, [
                t("span", H7, f(De.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), q7 = /* @__PURE__ */ ge(K7, [["__scopeId", "data-v-45a711b4"]]), Y7 = { class: "item-header" }, J7 = { class: "item-info" }, Q7 = { class: "filename" }, X7 = { class: "metadata" }, Z7 = { class: "size" }, eR = {
  key: 0,
  class: "type"
}, tR = { class: "item-actions" }, sR = {
  key: 0,
  class: "progress-section"
}, oR = { class: "progress-bar" }, nR = { class: "progress-stats" }, aR = { class: "downloaded" }, lR = { class: "speed" }, iR = {
  key: 0,
  class: "eta"
}, rR = {
  key: 1,
  class: "status-msg paused"
}, cR = {
  key: 2,
  class: "status-msg queued"
}, uR = {
  key: 3,
  class: "status-msg completed"
}, dR = {
  key: 4,
  class: "status-msg failed"
}, fR = {
  key: 0,
  class: "retries"
}, mR = /* @__PURE__ */ fe({
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
      t("div", Y7, [
        t("div", J7, [
          t("div", Q7, f(e.item.filename), 1),
          t("div", X7, [
            t("span", Z7, f(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", eR, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", tR, [
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
      e.item.status === "downloading" ? (n(), i("div", sR, [
        t("div", oR, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", nR, [
          t("span", aR, f(a(e.item.downloaded)) + " / " + f(a(e.item.size)), 1),
          t("span", lR, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", iR, f(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", rR, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", cR, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", uR, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", dR, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", fR, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ ge(mR, [["__scopeId", "data-v-2110df65"]]), vR = { class: "queue-title" }, pR = { class: "count" }, gR = { class: "queue-actions" }, hR = { class: "action-label" }, yR = {
  key: 0,
  class: "overall-progress"
}, wR = { class: "progress-bar" }, kR = {
  key: 0,
  class: "current-mini"
}, _R = { class: "filename" }, bR = { class: "speed" }, $R = {
  key: 1,
  class: "queue-content"
}, CR = {
  key: 0,
  class: "section"
}, xR = {
  key: 1,
  class: "section"
}, SR = { class: "section-header" }, IR = { class: "section-label paused" }, ER = { class: "items-list" }, TR = {
  key: 2,
  class: "section"
}, RR = { class: "section-header" }, PR = { class: "section-label" }, MR = { class: "items-list" }, DR = {
  key: 3,
  class: "section"
}, LR = { class: "section-header" }, AR = { class: "section-label" }, OR = { class: "items-list" }, NR = {
  key: 4,
  class: "section"
}, UR = { class: "section-header" }, zR = { class: "section-label failed" }, FR = { class: "items-list" }, VR = /* @__PURE__ */ fe({
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
    } = xo(), C = _(!1);
    let b = null;
    dt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (T, L) => {
        b && (clearTimeout(b), b = null);
        const V = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, B = L && (L.active > 0 || L.paused > 0);
        V && B && (b = setTimeout(() => {
          k(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = U(() => {
      var V;
      if (s.items.length === 0) return 0;
      const T = l.value.length, L = ((V = o.value) == null ? void 0 : V.progress) || 0;
      return Math.round((T + L / 100) / s.items.length * 100);
    });
    function M(T) {
      m(T);
    }
    function P(T) {
      return T === 0 ? "" : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, L) => (n(), D(kt, { to: "body" }, [
      We(u) ? (n(), i("div", {
        key: 0,
        class: Se(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: L[0] || (L[0] = (V) => C.value = !C.value)
        }, [
          t("div", vR, [
            L[4] || (L[4] = t("span", { class: "icon" }, "↓", -1)),
            L[5] || (L[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", pR, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", gR, [
            t("span", hR, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (n(), i("div", $R, [
          We(o) ? (n(), i("div", CR, [
            L[6] || (L[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(Ao, {
              item: We(o),
              onCancel: L[1] || (L[1] = (V) => M(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (n(), i("div", xR, [
            t("div", SR, [
              t("span", IR, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: L[2] || (L[2] = //@ts-ignore
                (...V) => We(w) && We(w)(...V))
              }, "Resume All")
            ]),
            t("div", ER, [
              (n(!0), i(H, null, ve(We(c), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onResume: (B) => We(g)(V.id),
                onRemove: (B) => We(p)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(a).length > 0 ? (n(), i("div", TR, [
            t("div", RR, [
              t("span", PR, "Queued (" + f(We(a).length) + ")", 1)
            ]),
            t("div", MR, [
              (n(!0), i(H, null, ve(We(a), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onCancel: (B) => M(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (n(), i("div", DR, [
            t("div", LR, [
              t("span", AR, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: L[3] || (L[3] = //@ts-ignore
                (...V) => We(k) && We(k)(...V))
              }, "Clear")
            ]),
            t("div", OR, [
              (n(!0), i(H, null, ve(We(l).slice(0, 3), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onRemove: (B) => We(p)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(r).length > 0 ? (n(), i("div", NR, [
            t("div", UR, [
              t("span", zR, "Failed (" + f(We(r).length) + ")", 1)
            ]),
            t("div", FR, [
              (n(!0), i(H, null, ve(We(r), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onRetry: (B) => We(v)(V.id),
                onRemove: (B) => We(p)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", yR, [
          t("div", wR, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${x.value}%` })
            }, null, 4)
          ]),
          We(o) ? (n(), i("div", kR, [
            t("span", _R, f(We(o).filename), 1),
            t("span", bR, f(P(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), BR = /* @__PURE__ */ ge(VR, [["__scopeId", "data-v-60751cfa"]]), WR = { class: "detail-header" }, GR = { class: "item-count" }, jR = { class: "resource-list" }, HR = { class: "item-info" }, KR = { class: "item-name" }, qR = {
  key: 0,
  class: "item-subtitle"
}, YR = {
  key: 0,
  class: "installing-badge"
}, JR = ["title"], QR = {
  key: 2,
  class: "installed-badge"
}, XR = {
  key: 3,
  class: "queued-badge"
}, ZR = {
  key: 1,
  class: "no-action"
}, eP = /* @__PURE__ */ fe({
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
    const o = e, a = s, l = U(() => o.itemType === "model" ? "Download" : "Install"), r = U(() => o.items.filter((p) => p.canAction)), c = U(() => r.value.length > 0 && r.value.every(
      (p) => {
        var k, C;
        return o.queuedItems.has(p.id) || ((k = o.installedItems) == null ? void 0 : k.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = U(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
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
    return (p, k) => (n(), D(ct, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = (C) => a("close"))
    }, {
      body: h(() => [
        t("div", WR, [
          t("span", GR, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          r.value.length > 1 ? (n(), D(Te, {
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
        t("div", jR, [
          (n(!0), i(H, null, ve(e.items, (C) => (n(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", HR, [
              t("span", KR, f(C.name), 1),
              C.subtitle ? (n(), i("span", qR, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (n(), i(H, { key: 0 }, [
              m(C) ? (n(), i("span", YR, "Installing...")) : g(C) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, JR)) : v(C) ? (n(), i("span", QR, "Installed")) : d(C) ? (n(), i("span", XR, "Queued")) : (n(), D(Te, {
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
            ], 64)) : (n(), i("span", ZR, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        S(Te, {
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
}), tP = /* @__PURE__ */ ge(eP, [["__scopeId", "data-v-fac0fef0"]]), sP = {
  key: 0,
  class: "loading-state"
}, oP = {
  key: 1,
  class: "analysis-results"
}, nP = {
  key: 0,
  class: "section"
}, aP = { class: "section-header" }, lP = { class: "section-title" }, iP = { class: "item-list" }, rP = { class: "package-info" }, cP = { class: "package-name" }, uP = { class: "node-count" }, dP = {
  key: 1,
  class: "installing-badge"
}, fP = {
  key: 2,
  class: "queued-badge"
}, mP = ["title"], vP = {
  key: 4,
  class: "installed-badge"
}, pP = {
  key: 1,
  class: "section"
}, gP = { class: "section-header" }, hP = { class: "section-title" }, yP = { class: "item-list" }, wP = { class: "node-type" }, kP = {
  key: 0,
  class: "overflow-note"
}, _P = {
  key: 2,
  class: "section"
}, bP = { class: "section-header" }, $P = { class: "section-title" }, CP = { class: "item-list" }, xP = { class: "model-info" }, SP = { class: "model-name" }, IP = {
  key: 1,
  class: "queued-badge"
}, EP = {
  key: 1,
  class: "no-url"
}, TP = { class: "dont-show-again" }, RP = /* @__PURE__ */ fe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = _(!1), o = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Set()), m = _(!1), v = _(null), g = _(0), w = _(null), p = _(/* @__PURE__ */ new Set()), k = _(/* @__PURE__ */ new Map()), { addToQueue: C } = xo(), { queueNodeInstall: b } = Ze(), x = U(() => M.value.length > 0 || T.value.length > 0 || L.value.length > 0), M = U(() => {
      var q, ne;
      if (!((q = a.value) != null && q.nodes)) return [];
      const R = /* @__PURE__ */ new Map(), F = (a.value.nodes.resolved || []).filter((re) => {
        var $e;
        return !re.is_installed && (($e = re.package) == null ? void 0 : $e.package_id);
      });
      for (const re of F) {
        const $e = re.package.package_id;
        R.has($e) || R.set($e, {
          package_id: $e,
          title: re.package.title || $e,
          node_count: 0,
          node_types: [],
          repository: re.package.repository || null,
          latest_version: re.package.latest_version || null
        });
        const ie = R.get($e);
        ie.node_count++, ie.node_types.push(((ne = re.reference) == null ? void 0 : ne.node_type) || re.node_type);
      }
      return Array.from(R.values());
    }), P = U(() => M.value.reduce((R, F) => R + F.node_count, 0)), T = U(() => {
      var R;
      return (R = a.value) != null && R.nodes ? (a.value.nodes.unresolved || []).map((F) => {
        var q;
        return {
          node_type: ((q = F.reference) == null ? void 0 : q.node_type) || F.node_type
        };
      }) : [];
    }), L = U(() => {
      var q;
      if (!((q = a.value) != null && q.models)) return [];
      const R = (a.value.models.resolved || []).filter(
        (ne) => ne.match_type === "download_intent" || ne.match_type === "property_download_intent" || ne.match_type === "not_found"
      ).map((ne) => {
        var re, $e, ie, we;
        return {
          filename: (($e = (re = ne.reference) == null ? void 0 : re.widget_value) == null ? void 0 : $e.split("/").pop()) || ((ie = ne.reference) == null ? void 0 : ie.widget_value) || ne.widget_value,
          widget_value: ((we = ne.reference) == null ? void 0 : we.widget_value) || ne.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ne.download_source || null,
          targetPath: ne.target_path || null,
          canDownload: !!(ne.download_source && ne.target_path)
        };
      }), F = (a.value.models.unresolved || []).map((ne) => {
        var re, $e, ie, we;
        return {
          filename: (($e = (re = ne.reference) == null ? void 0 : re.widget_value) == null ? void 0 : $e.split("/").pop()) || ((ie = ne.reference) == null ? void 0 : ie.widget_value) || ne.widget_value,
          widget_value: ((we = ne.reference) == null ? void 0 : we.widget_value) || ne.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...R, ...F];
    }), V = U(() => L.value.filter((R) => R.canDownload)), B = U(() => M.value.length >= 5 ? M.value.slice(0, 4) : M.value), E = U(() => L.value.length >= 5 ? L.value.slice(0, 4) : L.value), I = U(() => M.value.length > 0 && M.value.every(
      (R) => r.value.has(R.package_id) || c.value.has(R.package_id) || u.value.has(R.package_id)
    )), A = U(() => V.value.length > 0 && V.value.every((R) => d.value.has(R.url))), Z = U(() => M.value.length > 0 || V.value.length > 0), W = U(() => {
      const R = M.value.length === 0 || I.value, F = V.value.length === 0 || A.value;
      return R && F;
    }), O = U(() => w.value === "models" ? `Missing Models (${L.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${P.value})` : ""), j = U(() => w.value === "models" ? L.value.map((R) => ({
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
    function X(R) {
      if (w.value === "models") {
        const F = L.value.find((q) => q.url === R.id || q.widget_value === R.id);
        F && ee(F);
      } else if (w.value === "packages") {
        const F = M.value.find((q) => q.package_id === R.id);
        F && ae(F);
      }
    }
    function z() {
      w.value === "models" ? be() : w.value === "packages" && ke();
    }
    async function ae(R) {
      const F = R.package_id;
      if (!(r.value.has(F) || c.value.has(F) || u.value.has(F))) {
        Fe(), v.value = F;
        try {
          const { ui_id: q } = await b({
            id: F,
            version: R.latest_version || "latest",
            selected_version: R.latest_version || "latest",
            repository: R.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          k.value.set(q, F), c.value.add(F), console.log("[ComfyGit] Registered pending install:", { ui_id: q, packageId: F, pendingInstalls: Array.from(k.value.entries()) });
        } catch (q) {
          console.error("[ComfyGit] Failed to queue package install:", q), u.value.set(F, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function ee(R) {
      !R.url || !R.targetPath || d.value.has(R.url) || (C([{
        workflow: "unsaved",
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath
      }]), d.value.add(R.url));
    }
    async function ke() {
      for (const R of M.value)
        !r.value.has(R.package_id) && !c.value.has(R.package_id) && !u.value.has(R.package_id) && await ae(R);
    }
    function be() {
      const R = V.value.filter(
        (F) => !d.value.has(F.url)
      );
      if (R.length !== 0) {
        C(R.map((F) => ({
          workflow: "unsaved",
          filename: F.filename,
          url: F.url,
          targetPath: F.targetPath
        })));
        for (const F of R)
          d.value.add(F.url);
      }
    }
    function Le() {
      ke(), be();
    }
    function ze() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ue(R) {
      var re, $e;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const F = R == null ? void 0 : R.id;
      if (F && p.value.has(F)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${F} this session`);
        return;
      }
      const q = window.app, ne = (re = q == null ? void 0 : q.extensionManager) == null ? void 0 : re.workflow;
      if (ne) {
        let he = !1;
        for (let Pe = 0; Pe < 20; Pe++) {
          const Ie = ne.activeWorkflow;
          if (!Ie) {
            await new Promise((Me) => setTimeout(Me, 50));
            continue;
          }
          const te = ($e = Ie.activeState) == null ? void 0 : $e.id;
          if (!(F && te === F)) {
            Pe < 19 && await new Promise((Me) => setTimeout(Me, 50));
            continue;
          }
          if (he = !0, Ie.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Ie.filename}`), F && p.value.add(F);
            return;
          }
          break;
        }
        he || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), k.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const ie = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: R, name: "unsaved" })
        });
        if (!ie.ok) {
          const we = await ie.json();
          throw new Error(we.error || "Failed to analyze workflow");
        }
        a.value = await ie.json(), x.value && (l.value = !0, F && p.value.add(F));
      } catch (ie) {
        console.error("[ComfyGit] Failed to analyze workflow:", ie);
      } finally {
        s.value = !1;
      }
    }
    function Ye() {
      l.value = !1, a.value = null;
    }
    function pe(R) {
      const { workflow: F } = R.detail;
      F && Ue(F);
    }
    function oe(R) {
      var ne;
      const F = (ne = R.detail) == null ? void 0 : ne.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: F,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: R.detail
      });
      const q = k.value.get(F);
      q ? (v.value = q, console.log("[ComfyGit] Installing package:", q)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", F);
    }
    function ce(R) {
      var re, $e, ie, we, he, Pe, Ie;
      const F = (re = R.detail) == null ? void 0 : re.ui_id, q = (ie = ($e = R.detail) == null ? void 0 : $e.status) == null ? void 0 : ie.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: F,
        status: q,
        pendingInstalls: Array.from(k.value.entries()),
        eventDetail: R.detail
      });
      const ne = k.value.get(F);
      if (ne) {
        if (k.value.delete(F), c.value.delete(ne), v.value === ne && (v.value = null), q === "success")
          r.value.add(ne), g.value++, console.log("[ComfyGit] Package installed successfully:", ne);
        else {
          const te = ((Pe = (he = (we = R.detail) == null ? void 0 : we.status) == null ? void 0 : he.messages) == null ? void 0 : Pe[0]) || ((Ie = R.detail) == null ? void 0 : Ie.result) || "Unknown error";
          u.value.set(ne, te), console.error("[ComfyGit] Package install failed:", ne, te);
        }
        k.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", F);
    }
    let ue = null;
    function Ee() {
      var R;
      return ue || (ue = (R = window.app) == null ? void 0 : R.api), ue;
    }
    let Re = !1;
    function Fe() {
      if (Re) return !0;
      const R = Ee();
      return R ? (R.addEventListener("cm-task-started", oe), R.addEventListener("cm-task-completed", ce), R.addEventListener("comfygit:workflow-changed", N), Re = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function N(R) {
      const { change_type: F } = R.detail;
      (F === "created" || F === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Qe(() => {
      window.addEventListener("comfygit:workflow-loaded", pe);
    }), Gs(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", pe), Re) {
        const R = Ee();
        R && (R.removeEventListener("cm-task-started", oe), R.removeEventListener("cm-task-completed", ce), R.removeEventListener("comfygit:workflow-changed", N)), Re = !1;
      }
    }), (R, F) => (n(), i(H, null, [
      l.value ? (n(), D(ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ye
      }, {
        body: h(() => [
          s.value ? (n(), i("div", sP, [...F[4] || (F[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && x.value ? (n(), i("div", oP, [
            M.value.length > 0 ? (n(), i("div", nP, [
              t("div", aP, [
                t("span", lP, "Missing Custom Nodes (" + f(P.value) + ")", 1),
                M.value.length > 1 ? (n(), D(Te, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: I.value,
                  onClick: ke
                }, {
                  default: h(() => [
                    $(f(I.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", iP, [
                (n(!0), i(H, null, ve(B.value, (q) => (n(), i("div", {
                  key: q.package_id,
                  class: "package-item"
                }, [
                  t("div", rP, [
                    t("span", cP, f(q.title), 1),
                    t("span", uP, "(" + f(q.node_count) + " " + f(q.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(q.package_id) && !c.value.has(q.package_id) && !u.value.has(q.package_id) ? (n(), D(Te, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === q.package_id,
                    onClick: (ne) => ae(q)
                  }, {
                    default: h(() => [
                      $(f(v.value === q.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === q.package_id ? (n(), i("span", dP, "Installing...")) : c.value.has(q.package_id) ? (n(), i("span", fP, "Queued")) : u.value.has(q.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(q.package_id)
                  }, "Failed ⚠", 8, mP)) : (n(), i("span", vP, "Installed"))
                ]))), 128)),
                M.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: F[0] || (F[0] = (q) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(M.value.length) + " packages...", 1),
                  F[5] || (F[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            T.value.length > 0 ? (n(), i("div", pP, [
              t("div", gP, [
                t("span", hP, "Unknown Nodes (" + f(T.value.length) + ")", 1)
              ]),
              t("div", yP, [
                (n(!0), i(H, null, ve(T.value.slice(0, 5), (q) => (n(), i("div", {
                  key: q.node_type,
                  class: "item"
                }, [
                  t("code", wP, f(q.node_type), 1),
                  F[6] || (F[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                T.value.length > 5 ? (n(), i("div", kP, " ...and " + f(T.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            L.value.length > 0 ? (n(), i("div", _P, [
              t("div", bP, [
                t("span", $P, "Missing Models (" + f(L.value.length) + ")", 1),
                V.value.length > 1 ? (n(), D(Te, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: A.value,
                  onClick: be
                }, {
                  default: h(() => [
                    $(f(A.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", CP, [
                (n(!0), i(H, null, ve(E.value, (q) => (n(), i("div", {
                  key: q.widget_value,
                  class: "model-item"
                }, [
                  t("div", xP, [
                    t("span", SP, f(q.filename), 1)
                  ]),
                  q.canDownload ? (n(), i(H, { key: 0 }, [
                    d.value.has(q.url) ? (n(), i("span", IP, "Queued")) : (n(), D(Te, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ne) => ee(q)
                    }, {
                      default: h(() => [...F[7] || (F[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", EP, "Manual download required"))
                ]))), 128)),
                L.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: F[1] || (F[1] = (q) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(L.value.length) + " models...", 1),
                  F[8] || (F[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", TP, [
              S(Gn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  F[2] || (F[2] = (q) => m.value = q),
                  ze
                ]
              }, {
                default: h(() => [...F[9] || (F[9] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          S(Te, {
            variant: "secondary",
            onClick: Ye
          }, {
            default: h(() => [...F[10] || (F[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          Z.value ? (n(), D(Te, {
            key: 0,
            variant: "primary",
            disabled: W.value,
            onClick: Le
          }, {
            default: h(() => [
              $(f(W.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), D(tP, {
        key: 1,
        title: O.value,
        items: j.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? r.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: F[3] || (F[3] = (q) => w.value = null),
        onAction: X,
        onBulkAction: z
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), PP = /* @__PURE__ */ ge(RP, [["__scopeId", "data-v-512ff6ab"]]), MP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', DP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', LP = {
  comfy: MP,
  phosphor: DP
}, ul = "comfy", Qr = "comfygit-theme";
let Qs = null, Xr = ul;
function AP() {
  try {
    const e = localStorage.getItem(Qr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ul;
}
function Zr(e = ul) {
  Qs && Qs.remove(), Qs = document.createElement("style"), Qs.id = "comfygit-theme-styles", Qs.setAttribute("data-theme", e), Qs.textContent = LP[e], document.head.appendChild(Qs), document.body.setAttribute("data-comfygit-theme", e), Xr = e;
  try {
    localStorage.setItem(Qr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function OP() {
  return Xr;
}
function NP(e) {
  Zr(e);
}
function UP(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const dl = document.createElement("link");
dl.rel = "stylesheet";
dl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(dl);
const zP = AP();
Zr(zP);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), NP(e);
  },
  getTheme: () => {
    const e = OP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Xt = null, Ot = null, Yo = null, Oo = null, li = null, No = null, ii = null;
const ko = _(null);
let an = "no_workspace", ec = !1;
async function Mn() {
  var e;
  if (!((e = Wt) != null && e.api)) return null;
  try {
    const s = await Wt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ko.value = await s.json());
  } catch {
  }
}
async function Ua() {
  var e;
  if ((e = Wt) != null && e.api)
    try {
      const s = await Wt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        an = o.state, ec = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function za() {
  var s;
  if (an === "managed" || !ec) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function FP() {
  if (!ko.value) return !1;
  const e = ko.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ko.value.has_changes;
}
function xn(e) {
  Xt && Xt.remove(), Xt = document.createElement("div"), Xt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Xt.appendChild(s), Xt.addEventListener("click", (l) => {
    l.target === Xt && $a();
  });
  const o = (l) => {
    l.key === "Escape" && ($a(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), na({
    render: () => un(q7, {
      initialView: e,
      onClose: $a,
      onStatusUpdate: async (l) => {
        ko.value = l, Jo(), await Ua(), Fa(), za();
      }
    })
  }).mount(s), document.body.appendChild(Xt);
}
function $a() {
  Xt && (Xt.remove(), Xt = null);
}
function ri(e) {
  Uo(), Ot = document.createElement("div"), Ot.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Ot.style.position = "fixed", Ot.style.top = `${s.bottom + 8}px`, Ot.style.right = `${window.innerWidth - s.right}px`, Ot.style.zIndex = "10001";
  const o = (l) => {
    Ot && !Ot.contains(l.target) && l.target !== e && (Uo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Uo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), Yo = na({
    render: () => un(qr, {
      status: ko.value,
      onClose: Uo,
      onCommitted: (l) => {
        Uo(), VP(l.success, l.message), Mn().then(Jo);
      }
    })
  }), Yo.mount(Ot), document.body.appendChild(Ot);
}
function Uo() {
  Yo && (Yo.unmount(), Yo = null), Ot && (Ot.remove(), Ot = null);
}
function VP(e, s) {
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
function BP() {
  Oo || (Oo = document.createElement("div"), Oo.className = "comfygit-download-queue-root", li = na({
    render: () => un(BR)
  }), li.mount(Oo), document.body.appendChild(Oo), console.log("[ComfyGit] Model download queue mounted"));
}
function WP() {
  No || (No = document.createElement("div"), No.className = "comfygit-missing-resources-root", ii = na({
    render: () => un(PP)
  }), ii.mount(No), document.body.appendChild(No), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Tt = null;
function Jo() {
  if (!Tt) return;
  const e = Tt.querySelector(".commit-indicator");
  e && (e.style.display = FP() ? "block" : "none");
}
function Fa() {
  if (!Tt) return;
  const e = an !== "managed";
  Tt.disabled = e, Tt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const tc = document.createElement("style");
tc.textContent = `
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
document.head.appendChild(tc);
Wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => xn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Tt && !Tt.disabled && ri(Tt);
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
    if (an === "managed")
      try {
        await Promise.all([
          Wt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Wt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (an !== "managed") return;
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = xn, Tt = document.createElement("button"), Tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Tt.innerHTML = 'Commit <span class="commit-indicator"></span>', Tt.title = "Quick Commit", Tt.onclick = () => ri(Tt), e.appendChild(s), e.appendChild(Tt), (r = (l = Wt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Wt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), BP(), WP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      xn(u);
    }));
    const { loadPendingDownloads: o } = xo();
    o(), await Promise.all([Mn(), Ua()]), Jo(), Fa(), za(), setTimeout(za, 100), setInterval(async () => {
      await Promise.all([Mn(), Ua()]), Jo(), Fa();
    }, 3e4);
    const a = Wt.api;
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
          p.remove(), xn("debug-env");
        }, p.appendChild(M);
        const P = document.createElement("button");
        P.textContent = "×", P.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, P.onmouseover = () => P.style.opacity = "1", P.onmouseout = () => P.style.opacity = "0.6", P.onclick = () => p.remove(), p.appendChild(P), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
                Wt.refreshComboInNodes && (await Wt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", x.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", M.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (L) {
                console.error("[ComfyGit] Failed to refresh nodes:", L), k.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", M.style.display = "none";
              }
            };
            a.addEventListener("reconnected", T, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (T) {
            console.error("[ComfyGit] Failed to restart:", T), b.textContent = "Restart Failed", b.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", M.textContent = "Try Again", M.disabled = !1, M.style.opacity = "1";
          }
        }, p.appendChild(M);
        const P = document.createElement("button");
        P.textContent = "×", P.title = "Dismiss (restart later)", P.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, P.onmouseover = () => P.style.opacity = "1", P.onmouseout = () => P.style.opacity = "0.6", P.onclick = () => p.remove(), p.appendChild(P), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: w, workflow_name: p } = g.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Mn(), Jo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (g) => {
        const w = UP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
