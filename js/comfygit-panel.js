import { app as Wt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ba(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const ot = {}, po = [], gs = () => {
}, ui = () => !1, Hn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wa = (e) => e.startsWith("onUpdate:"), pt = Object.assign, Ga = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, oc = Object.prototype.hasOwnProperty, et = (e, s) => oc.call(e, s), Fe = Array.isArray, go = (e) => ln(e) === "[object Map]", Co = (e) => ln(e) === "[object Set]", ml = (e) => ln(e) === "[object Date]", We = (e) => typeof e == "function", ut = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", st = (e) => e !== null && typeof e == "object", di = (e) => (st(e) || We(e)) && We(e.then) && We(e.catch), fi = Object.prototype.toString, ln = (e) => fi.call(e), nc = (e) => ln(e).slice(8, -1), mi = (e) => ln(e) === "[object Object]", ja = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fo = /* @__PURE__ */ Ba(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, ac = /-\w/g, Kt = Kn(
  (e) => e.replace(ac, (s) => s.slice(1).toUpperCase())
), lc = /\B([A-Z])/g, Bs = Kn(
  (e) => e.replace(lc, "-$1").toLowerCase()
), qn = Kn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ia = Kn(
  (e) => e ? `on${qn(e)}` : ""
), zs = (e, s) => !Object.is(e, s), In = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, vi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Yn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, ic = (e) => {
  const s = ut(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let vl;
const Jn = () => vl || (vl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Fe(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = ut(a) ? dc(a) : Ft(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (ut(e) || st(e))
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
function Ie(e) {
  let s = "";
  if (ut(e))
    s = e;
  else if (Fe(e))
    for (let o = 0; o < e.length; o++) {
      const a = Ie(e[o]);
      a && (s += a + " ");
    }
  else if (st(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const fc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mc = /* @__PURE__ */ Ba(fc);
function pi(e) {
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
  let o = ml(e), a = ml(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), a = ts(s), o || a)
    return e === s;
  if (o = Fe(e), a = Fe(s), o || a)
    return o && a ? vc(e, s) : !1;
  if (o = st(e), a = st(s), o || a) {
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
function Ha(e, s) {
  return e.findIndex((o) => so(o, s));
}
const gi = (e) => !!(e && e.__v_isRef === !0), f = (e) => ut(e) ? e : e == null ? "" : Fe(e) || st(e) && (e.toString === fi || !We(e.toString)) ? gi(e) ? f(e.value) : JSON.stringify(e, hi, 2) : String(e), hi = (e, s) => gi(s) ? hi(e, s.value) : go(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[ra(a, r) + " =>"] = l, o),
    {}
  )
} : Co(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => ra(o))
} : ts(s) ? ra(s) : st(s) && !Fe(s) && !mi(s) ? String(s) : s, ra = (e, s = "") => {
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
class pc {
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
  return Lt;
}
let at;
const ca = /* @__PURE__ */ new WeakSet();
class yi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && Lt.active && Lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ca.has(this) && (ca.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ki(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, pl(this), _i(this);
    const s = at, o = es;
    at = this, es = !0;
    try {
      return this.fn();
    } finally {
      bi(this), at = s, es = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Ya(s);
      this.deps = this.depsTail = void 0, pl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ca.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xa(this) && this.run();
  }
  get dirty() {
    return xa(this);
  }
}
let wi = 0, Vo, Bo;
function ki(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Bo, Bo = e;
    return;
  }
  e.next = Vo, Vo = e;
}
function Ka() {
  wi++;
}
function qa() {
  if (--wi > 0)
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
function _i(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function bi(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), Ya(a), hc(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function xa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && ($i(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function $i(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qo) || (e.globalVersion = Qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = at, a = es;
  at = e, es = !0;
  try {
    _i(e);
    const l = e.fn(e._value);
    (s.version === 0 || zs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    at = o, es = a, bi(e), e.flags &= -3;
  }
}
function Ya(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      Ya(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function hc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let es = !0;
const Ci = [];
function Es() {
  Ci.push(es), es = !1;
}
function Ts() {
  const e = Ci.pop();
  es = e === void 0 ? !0 : e;
}
function pl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = at;
    at = void 0;
    try {
      s();
    } finally {
      at = o;
    }
  }
}
let Qo = 0;
class yc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ja {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!at || !es || at === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== at)
      o = this.activeLink = new yc(at, this), at.deps ? (o.prevDep = at.depsTail, at.depsTail.nextDep = o, at.depsTail = o) : at.deps = at.depsTail = o, xi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = at.depsTail, o.nextDep = void 0, at.depsTail.nextDep = o, at.depsTail = o, at.deps === o && (at.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, Qo++, this.notify(s);
  }
  notify(s) {
    Ka();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      qa();
    }
  }
}
function xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        xi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Sa = /* @__PURE__ */ new WeakMap(), eo = Symbol(
  ""
), Ia = Symbol(
  ""
), Xo = Symbol(
  ""
);
function _t(e, s, o) {
  if (es && at) {
    let a = Sa.get(e);
    a || Sa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new Ja()), l.map = a, l.key = o), l.track();
  }
}
function xs(e, s, o, a, l, r) {
  const c = Sa.get(e);
  if (!c) {
    Qo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Ka(), s === "clear")
    c.forEach(u);
  else {
    const d = Fe(e), m = d && ja(o);
    if (d && o === "length") {
      const v = Number(a);
      c.forEach((g, w) => {
        (w === "length" || w === Xo || !ts(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(Xo)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(eo)), go(e) && u(c.get(Ia)));
          break;
        case "delete":
          d || (u(c.get(eo)), go(e) && u(c.get(Ia)));
          break;
        case "set":
          go(e) && u(c.get(eo));
          break;
      }
  }
  qa();
}
function ro(e) {
  const s = Qe(e);
  return s === e ? s : (_t(s, "iterate", Xo), Gt(e) ? s : s.map(ss));
}
function Qn(e) {
  return _t(e = Qe(e), "iterate", Xo), e;
}
function Os(e, s) {
  return Rs(e) ? to(e) ? _o(ss(s)) : _o(s) : ss(s);
}
const wc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ua(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ro(this).concat(
      ...e.map((s) => Fe(s) ? ro(s) : s)
    );
  },
  entries() {
    return ua(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
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
    return da(this, "includes", e);
  },
  indexOf(...e) {
    return da(this, "indexOf", e);
  },
  join(e) {
    return ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return da(this, "lastIndexOf", e);
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
    return gl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return gl(this, "reduceRight", e, s);
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
    return ua(this, "values", (e) => Os(this, e));
  }
};
function ua(e, s, o) {
  const a = Qn(e), l = a[s]();
  return a !== e && !Gt(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const kc = Array.prototype;
function bs(e, s, o, a, l, r) {
  const c = Qn(e), u = c !== e && !Gt(e), d = c[s];
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
function gl(e, s, o, a) {
  const l = Qn(e);
  let r = o;
  return l !== e && (Gt(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Os(e, u), d, e);
  }), l[s](r, ...a);
}
function da(e, s, o) {
  const a = Qe(e);
  _t(a, "iterate", Xo);
  const l = a[s](...o);
  return (l === -1 || l === !1) && Za(o[0]) ? (o[0] = Qe(o[0]), a[s](...o)) : l;
}
function Po(e, s, o = []) {
  Es(), Ka();
  const a = Qe(e)[s].apply(e, o);
  return qa(), Ts(), a;
}
const _c = /* @__PURE__ */ Ba("__proto__,__v_isRef,__isVue"), Si = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function bc(e) {
  ts(e) || (e = String(e));
  const s = Qe(this);
  return _t(s, "has", e), s.hasOwnProperty(e);
}
class Ii {
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
      return a === (l ? r ? Mc : Pi : r ? Ri : Ti).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = Fe(s);
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
    if ((ts(o) ? Si.has(o) : _c(o)) || (l || _t(s, "get", o), r))
      return u;
    if (Ct(u)) {
      const d = c && ja(o) ? u : u.value;
      return l && st(d) ? Ln(d) : d;
    }
    return st(u) ? l ? Ln(u) : Ws(u) : u;
  }
}
class Ei extends Ii {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Fe(s) && ja(o);
    if (!this._isShallow) {
      const m = Rs(r);
      if (!Gt(a) && !Rs(a) && (r = Qe(r), a = Qe(a)), !c && Ct(r) && !Ct(a))
        return m || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : et(s, o), d = Reflect.set(
      s,
      o,
      a,
      Ct(s) ? s : l
    );
    return s === Qe(l) && (u ? zs(a, r) && xs(s, "set", o, a) : xs(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = et(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && xs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!ts(o) || !Si.has(o)) && _t(s, "has", o), a;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      Fe(s) ? "length" : eo
    ), Reflect.ownKeys(s);
  }
}
class $c extends Ii {
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
const Cc = /* @__PURE__ */ new Ei(), xc = /* @__PURE__ */ new $c(), Sc = /* @__PURE__ */ new Ei(!0);
const Ea = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
function Ic(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = Qe(l), c = go(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...a), v = o ? Ea : s ? _o : ss;
    return !s && _t(
      r,
      "iterate",
      d ? Ia : eo
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
function yn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ec(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = Qe(r), u = Qe(l);
      e || (zs(l, u) && _t(c, "get", l), _t(c, "get", u));
      const { has: d } = hn(c), m = s ? Ea : e ? _o : ss;
      if (d.call(c, l))
        return m(r.get(l));
      if (d.call(c, u))
        return m(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Qe(l), "iterate", eo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = Qe(r), u = Qe(l);
      return e || (zs(l, u) && _t(c, "has", l), _t(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = Qe(u), m = s ? Ea : e ? _o : ss;
      return !e && _t(d, "iterate", eo), u.forEach((v, g) => l.call(r, m(v), m(g), c));
    }
  };
  return pt(
    o,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(l) {
        !s && !Gt(l) && !Rs(l) && (l = Qe(l));
        const r = Qe(this);
        return hn(r).has.call(r, l) || (r.add(l), xs(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !Gt(r) && !Rs(r) && (r = Qe(r));
        const c = Qe(this), { has: u, get: d } = hn(c);
        let m = u.call(c, l);
        m || (l = Qe(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, r), m ? zs(r, v) && xs(c, "set", l, r) : xs(c, "add", l, r), this;
      },
      delete(l) {
        const r = Qe(this), { has: c, get: u } = hn(r);
        let d = c.call(r, l);
        d || (l = Qe(l), d = c.call(r, l)), u && u.call(r, l);
        const m = r.delete(l);
        return d && xs(r, "delete", l, void 0), m;
      },
      clear() {
        const l = Qe(this), r = l.size !== 0, c = l.clear();
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
function Qa(e, s) {
  const o = Ec(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    et(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Tc = {
  get: /* @__PURE__ */ Qa(!1, !1)
}, Rc = {
  get: /* @__PURE__ */ Qa(!1, !0)
}, Pc = {
  get: /* @__PURE__ */ Qa(!0, !1)
};
const Ti = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap(), Mc = /* @__PURE__ */ new WeakMap();
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
  return Rs(e) ? e : Xa(
    e,
    !1,
    Cc,
    Tc,
    Ti
  );
}
function Ac(e) {
  return Xa(
    e,
    !1,
    Sc,
    Rc,
    Ri
  );
}
function Ln(e) {
  return Xa(
    e,
    !0,
    xc,
    Pc,
    Pi
  );
}
function Xa(e, s, o, a, l) {
  if (!st(e) || e.__v_raw && !(s && e.__v_isReactive))
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
function Za(e) {
  return e ? !!e.__v_raw : !1;
}
function Qe(e) {
  const s = e && e.__v_raw;
  return s ? Qe(s) : e;
}
function Oc(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && vi(e, "__v_skip", !0), e;
}
const ss = (e) => st(e) ? Ws(e) : e, _o = (e) => st(e) ? Ln(e) : e;
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
    this.dep = new Ja(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Qe(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || Gt(s) || Rs(s);
    s = a ? s : Qe(s), zs(s, o) && (this._rawValue = s, this._value = a ? s : ss(s), this.dep.trigger());
  }
}
function Be(e) {
  return Ct(e) ? e.value : e;
}
const zc = {
  get: (e, s, o) => s === "__v_raw" ? e : Be(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Ct(l) && !Ct(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Mi(e) {
  return to(e) ? e : new Proxy(e, zc);
}
class Fc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Ja(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    at !== this)
      return ki(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return $i(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Vc(e, s, o = !1) {
  let a, l;
  return We(e) ? a = e : (a = e.get, l = e.set), new Fc(a, l, o);
}
const wn = {}, An = /* @__PURE__ */ new WeakMap();
let Xs;
function Bc(e, s = !1, o = Xs) {
  if (o) {
    let a = An.get(o);
    a || An.set(o, a = []), a.push(e);
  }
}
function Wc(e, s, o = ot) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, m = (T) => l ? T : Gt(T) || l === !1 || l === 0 ? Ss(T, 1) : Ss(T);
  let v, g, w, p, k = !1, C = !1;
  if (Ct(e) ? (g = () => e.value, k = Gt(e)) : to(e) ? (g = () => m(e), k = !0) : Fe(e) ? (C = !0, k = e.some((T) => to(T) || Gt(T)), g = () => e.map((T) => {
    if (Ct(T))
      return T.value;
    if (to(T))
      return m(T);
    if (We(T))
      return d ? d(T, 2) : T();
  })) : We(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
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
    v.stop(), b && b.active && Ga(b.effects, v);
  };
  if (r && s) {
    const T = s;
    s = (...L) => {
      T(...L), x();
    };
  }
  let M = C ? new Array(e.length).fill(wn) : wn;
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
              M === wn ? void 0 : C && M[0] === wn ? [] : M,
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
  return u && u(P), v = new yi(g), v.scheduler = c ? () => c(P, !1) : P, p = (T) => Bc(T, !1, v), w = v.onStop = () => {
    const T = An.get(v);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const L of T) L();
      An.delete(v);
    }
  }, s ? a ? P(!0) : M = v.run() : c ? c(P.bind(null, !0), !0) : v.run(), x.pause = v.pause.bind(v), x.resume = v.resume.bind(v), x.stop = x, x;
}
function Ss(e, s = 1 / 0, o) {
  if (s <= 0 || !st(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ct(e))
    Ss(e.value, s, o);
  else if (Fe(e))
    for (let a = 0; a < e.length; a++)
      Ss(e[a], s, o);
  else if (Co(e) || go(e))
    e.forEach((a) => {
      Ss(a, s, o);
    });
  else if (mi(e)) {
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
    Xn(l, s, o);
  }
}
function os(e, s, o, a) {
  if (We(e)) {
    const l = rn(e, s, o, a);
    return l && di(l) && l.catch((r) => {
      Xn(r, s, o);
    }), l;
  }
  if (Fe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(os(e[r], s, o, a));
    return l;
  }
}
function Xn(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || ot;
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
const Di = /* @__PURE__ */ Promise.resolve();
let On = null;
function gt(e) {
  const s = On || Di;
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
function el(e) {
  if (!(e.flags & 1)) {
    const s = Zo(e), o = Rt[Rt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Zo(o) ? Rt.push(e) : Rt.splice(jc(s), 0, e), e.flags |= 1, Li();
  }
}
function Li() {
  On || (On = Di.then(Oi));
}
function Hc(e) {
  Fe(e) ? ho.push(...e) : Ns && e.id === -1 ? Ns.splice(fo + 1, 0, e) : e.flags & 1 || (ho.push(e), e.flags |= 1), Li();
}
function hl(e, s, o = ms + 1) {
  for (; o < Rt.length; o++) {
    const a = Rt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Rt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Ai(e) {
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
function Oi(e) {
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
    ms = -1, Rt.length = 0, Ai(), On = null, (Rt.length || ho.length) && Oi();
  }
}
let wt = null, Ni = null;
function Nn(e) {
  const s = wt;
  return wt = e, Ni = e && e.type.__scopeId || null, s;
}
function h(e, s = wt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Fn(-1);
    const r = Nn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Nn(r), a._d && Fn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Ke(e, s) {
  if (wt === null)
    return e;
  const o = oa(wt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, d = ot] = s[l];
    r && (We(r) && (r = {
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
const Ui = Symbol("_vte"), zi = (e) => e.__isTeleport, Wo = (e) => e && (e.disabled || e.disabled === ""), yl = (e) => e && (e.defer || e.defer === ""), wl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, kl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ta = (e, s) => {
  const o = e && e.to;
  return ut(o) ? s ? s(o) : null : o;
}, Fi = {
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
        const I = s.target = Ta(s.props, k), A = Vi(I, s, C, p);
        I && (c !== "svg" && wl(I) ? c = "svg" : c !== "mathml" && kl(I) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), x || (B(I, A), En(s, !1)));
      };
      x && (B(o, V), En(s, !0)), yl(s.props) ? (s.el.__isMounted = !1, Et(() => {
        E(), delete s.el.__isMounted;
      }, r)) : E();
    } else {
      if (yl(s.props) && e.el.__isMounted === !1) {
        Et(() => {
          Fi.process(
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
      if (c === "svg" || wl(V) ? c = "svg" : (c === "mathml" || kl(V)) && (c = "mathml"), T ? (w(
        e.dynamicChildren,
        T,
        I,
        l,
        r,
        c,
        u
      ), al(e, s, !0)) : d || g(
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
        E ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : kn(
          s,
          o,
          L,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const te = s.target = Ta(
          s.props,
          k
        );
        te && kn(
          s,
          te,
          null,
          m,
          0
        );
      } else E && kn(
        s,
        V,
        B,
        m,
        1
      );
      En(s, x);
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
  move: kn,
  hydrate: Kc
};
function kn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
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
  const p = s.target = Ta(
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
        s.targetAnchor || Vi(p, s, v, m), g(
          C && c(C),
          s,
          p,
          o,
          a,
          l,
          r
        );
      }
    En(s, k);
  } else k && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const kt = Fi;
function En(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function Vi(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[Ui] = r, e && (a(l, e), a(r, e)), r;
}
const Cs = Symbol("_leaveCb"), _n = Symbol("_enterCb");
function Bi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Je(() => {
    e.isMounted = !0;
  }), Ji(() => {
    e.isUnmounting = !0;
  }), e;
}
const Bt = [Function, Array], Wi = {
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
}, Gi = (e) => {
  const s = e.subTree;
  return s.component ? Gi(s.component) : s;
}, qc = {
  name: "BaseTransition",
  props: Wi,
  setup(e, { slots: s }) {
    const o = il(), a = Bi();
    return () => {
      const l = s.default && tl(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = ji(l), c = Qe(e), { mode: u } = c;
      if (a.isLeaving)
        return fa(r);
      const d = _l(r);
      if (!d)
        return fa(r);
      let m = en(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== bt && oo(d, m);
      let v = o.subTree && _l(o.subTree);
      if (v && v.type !== bt && !Zs(v, d) && Gi(o).type !== bt) {
        let g = en(
          v,
          c,
          a,
          o
        );
        if (oo(v, g), u === "out-in" && d.type !== bt)
          return a.isLeaving = !0, g.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, fa(r);
        u === "in-out" && d.type !== bt ? g.delayLeave = (w, p, k) => {
          const C = Hi(
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
function ji(e) {
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
function Hi(e, s) {
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
  } = s, T = String(e.key), L = Hi(o, e), V = (I, A) => {
    I && os(
      I,
      a,
      9,
      A
    );
  }, B = (I, A) => {
    const te = A[1];
    V(I, A), Fe(I) ? I.every((W) => W.length <= 1) && te() : I.length <= 1 && te();
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
      const te = L[T];
      te && Zs(e, te) && te.el[Cs] && te.el[Cs](), V(A, [I]);
    },
    enter(I) {
      let A = m, te = v, W = g;
      if (!o.isMounted)
        if (r)
          A = x || m, te = M || v, W = P || g;
        else
          return;
      let O = !1;
      const j = I[_n] = (X) => {
        O || (O = !0, X ? V(W, [I]) : V(te, [I]), E.delayedLeave && E.delayedLeave(), I[_n] = void 0);
      };
      A ? B(A, [I, j]) : j();
    },
    leave(I, A) {
      const te = String(e.key);
      if (I[_n] && I[_n](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return A();
      V(w, [I]);
      let W = !1;
      const O = I[Cs] = (j) => {
        W || (W = !0, A(), j ? V(C, [I]) : V(k, [I]), I[Cs] = void 0, L[te] === e && delete L[te]);
      };
      L[te] = e, p ? B(p, [I, O]) : O();
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
function fa(e) {
  if (Zn(e))
    return e = Fs(e), e.children = null, e;
}
function _l(e) {
  if (!Zn(e))
    return zi(e.type) && e.children ? ji(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && We(o.default))
      return o.default();
  }
}
function oo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, oo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function tl(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === H ? (c.patchFlag & 128 && l++, a = a.concat(
      tl(c.children, s, u)
    )) : (s || c.type !== bt) && a.push(u != null ? Fs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function fe(e, s) {
  return We(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Ki(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Un = /* @__PURE__ */ new WeakMap();
function Go(e, s, o, a, l = !1) {
  if (Fe(e)) {
    e.forEach(
      (k, C) => Go(
        k,
        s && (Fe(s) ? s[C] : s),
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
  const r = a.shapeFlag & 4 ? oa(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, m = s && s.r, v = u.refs === ot ? u.refs = {} : u.refs, g = u.setupState, w = Qe(g), p = g === ot ? ui : (k) => et(w, k);
  if (m != null && m !== d) {
    if (bl(s), ut(m))
      v[m] = null, p(m) && (g[m] = null);
    else if (Ct(m)) {
      m.value = null;
      const k = s;
      k.k && (v[k.k] = null);
    }
  }
  if (We(d))
    rn(d, u, 12, [c, v]);
  else {
    const k = ut(d), C = Ct(d);
    if (k || C) {
      const b = () => {
        if (e.f) {
          const x = k ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Fe(x) && Ga(x, r);
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
          b(), Un.delete(e);
        };
        x.id = -1, Un.set(e, x), Et(x, o);
      } else
        bl(e), b();
    }
  }
}
function bl(e) {
  const s = Un.get(e);
  s && (s.flags |= 8, Un.delete(e));
}
Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const yo = (e) => !!e.type.__asyncLoader, Zn = (e) => e.type.__isKeepAlive;
function Jc(e, s) {
  qi(e, "a", s);
}
function Qc(e, s) {
  qi(e, "da", s);
}
function qi(e, s, o = $t) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ea(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Zn(l.parent.vnode) && Xc(a, s, o, l), l = l.parent;
  }
}
function Xc(e, s, o, a) {
  const l = ea(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Gs(() => {
    Ga(a[s], l);
  }, o);
}
function ea(e, s, o = $t, a = !1) {
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
  (!on || e === "sp") && ea(e, (...a) => s(...a), o);
}, Zc = Ps("bm"), Je = Ps("m"), eu = Ps(
  "bu"
), Yi = Ps("u"), Ji = Ps(
  "bum"
), Gs = Ps("um"), tu = Ps(
  "sp"
), su = Ps("rtg"), ou = Ps("rtc");
function nu(e, s = $t) {
  ea("ec", e, s);
}
const au = "components", Qi = Symbol.for("v-ndc");
function sl(e) {
  return ut(e) ? lu(au, e, !1) || e : e || Qi;
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
      if (u && (u === s || u === Kt(s) || u === qn(Kt(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      $l(l[e] || r[e], s) || // global registration
      $l(l.appContext[e], s)
    );
    return !c && a ? r : c;
  }
}
function $l(e, s) {
  return e && (e[s] || e[Kt(s)] || e[qn(Kt(s))]);
}
function ve(e, s, o, a) {
  let l;
  const r = o, c = Fe(e);
  if (c || ut(e)) {
    const u = c && to(e);
    let d = !1, m = !1;
    u && (d = !Gt(e), m = Rs(e), e = Qn(e)), l = new Array(e.length);
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
function no(e, s) {
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
function He(e, s, o = {}, a, l) {
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
  const c = r && Xi(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
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
function Xi(e) {
  return e.some((s) => sn(s) ? !(s.type === bt || s.type === H && !Xi(s.children)) : !0) ? e : null;
}
const Ra = (e) => e ? hr(e) ? oa(e) : Ra(e.parent) : null, jo = (
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
    $parent: (e) => Ra(e.parent),
    $root: (e) => Ra(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => er(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      el(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gt.bind(e.proxy)),
    $watch: (e) => yu.bind(e)
  })
), ma = (e, s) => e !== ot && !e.__isScriptSetup && et(e, s), iu = {
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
        if (ma(a, s))
          return c[s] = 1, a[s];
        if (l !== ot && et(l, s))
          return c[s] = 2, l[s];
        if (et(r, s))
          return c[s] = 3, r[s];
        if (o !== ot && et(o, s))
          return c[s] = 4, o[s];
        Pa && (c[s] = 0);
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
    if (o !== ot && et(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, et(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return ma(l, s) ? (l[s] = o, !0) : a !== ot && et(a, s) ? (a[s] = o, !0) : et(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== ot && u[0] !== "$" && et(e, u) || ma(s, u) || et(r, u) || et(a, u) || et(jo, u) || et(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : et(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Cl(e) {
  return Fe(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Pa = !0;
function ru(e) {
  const s = er(e), o = e.proxy, a = e.ctx;
  Pa = !1, s.beforeCreate && xl(s.beforeCreate, e, "bc");
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
    inheritAttrs: te,
    // assets
    components: W,
    directives: O,
    filters: j
  } = s;
  if (m && cu(m, a, null), c)
    for (const ae in c) {
      const Z = c[ae];
      We(Z) && (a[ae] = Z.bind(o));
    }
  if (l) {
    const ae = l.call(o, o);
    st(ae) && (e.data = Ws(ae));
  }
  if (Pa = !0, r)
    for (const ae in r) {
      const Z = r[ae], _e = We(Z) ? Z.bind(o, o) : We(Z.get) ? Z.get.bind(o, o) : gs, $e = !We(Z) && We(Z.set) ? Z.set.bind(o) : gs, Le = U({
        get: _e,
        set: $e
      });
      Object.defineProperty(a, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Ue) => Le.value = Ue
      });
    }
  if (u)
    for (const ae in u)
      Zi(u[ae], a, o, ae);
  if (d) {
    const ae = We(d) ? d.call(o) : d;
    Reflect.ownKeys(ae).forEach((Z) => {
      pu(Z, ae[Z]);
    });
  }
  v && xl(v, e, "c");
  function z(ae, Z) {
    Fe(Z) ? Z.forEach((_e) => ae(_e.bind(o))) : Z && ae(Z.bind(o));
  }
  if (z(Zc, g), z(Je, w), z(eu, p), z(Yi, k), z(Jc, C), z(Qc, b), z(nu, E), z(ou, V), z(su, B), z(Ji, M), z(Gs, T), z(tu, I), Fe(A))
    if (A.length) {
      const ae = e.exposed || (e.exposed = {});
      A.forEach((Z) => {
        Object.defineProperty(ae, Z, {
          get: () => o[Z],
          set: (_e) => o[Z] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === gs && (e.render = L), te != null && (e.inheritAttrs = te), W && (e.components = W), O && (e.directives = O), I && Ki(e);
}
function cu(e, s, o = gs) {
  Fe(e) && (e = Ma(e));
  for (const a in e) {
    const l = e[a];
    let r;
    st(l) ? "default" in l ? r = Tn(
      l.from || a,
      l.default,
      !0
    ) : r = Tn(l.from || a) : r = Tn(l), Ct(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function xl(e, s, o) {
  os(
    Fe(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Zi(e, s, o, a) {
  let l = a.includes(".") ? or(o, a) : () => o[a];
  if (ut(e)) {
    const r = s[e];
    We(r) && dt(l, r);
  } else if (We(e))
    dt(l, e.bind(o));
  else if (st(e))
    if (Fe(e))
      e.forEach((r) => Zi(r, s, o, a));
    else {
      const r = We(e.handler) ? e.handler.bind(o) : s[e.handler];
      We(r) && dt(l, r, e);
    }
}
function er(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (m) => zn(d, m, c, !0)
  ), zn(d, s, c)), st(s) && r.set(s, d), d;
}
function zn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && zn(e, r, o, !0), l && l.forEach(
    (c) => zn(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = uu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const uu = {
  data: Sl,
  props: Il,
  emits: Il,
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
  provide: Sl,
  inject: du
};
function Sl(e, s) {
  return s ? e ? function() {
    return pt(
      We(e) ? e.call(this, this) : e,
      We(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function du(e, s) {
  return zo(Ma(e), Ma(s));
}
function Ma(e) {
  if (Fe(e)) {
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
function Il(e, s) {
  return e ? Fe(e) && Fe(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : pt(
    /* @__PURE__ */ Object.create(null),
    Cl(e),
    Cl(s ?? {})
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
function tr() {
  return {
    app: null,
    config: {
      isNativeTag: ui,
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
    We(a) || (a = pt({}, a)), l != null && !st(l) && (l = null);
    const r = tr(), c = /* @__PURE__ */ new WeakSet(), u = [];
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
        return c.has(v) || (v && We(v.install) ? (c.add(v), v.install(m, ...g)) : We(v) && (c.add(v), v(m, ...g))), m;
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
          return p.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, oa(p.component);
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
function Tn(e, s, o = !1) {
  const a = il();
  if (a || wo) {
    let l = wo ? wo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && We(s) ? s.call(a && a.proxy) : s;
  }
}
const gu = Symbol.for("v-scx"), hu = () => Tn(gu);
function dt(e, s, o) {
  return sr(e, s, o);
}
function sr(e, s, o = ot) {
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
    k ? p() : el(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Wc(e, s, u);
  return on && (m ? m.push(w) : d && w()), w;
}
function yu(e, s, o) {
  const a = this.proxy, l = ut(e) ? e.includes(".") ? or(a, e) : () => a[e] : e.bind(a, a);
  let r;
  We(s) ? r = s : (r = s.handler, o = s);
  const c = cn(this), u = sr(l, r.bind(a), o);
  return c(), u;
}
function or(e, s) {
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
  const a = e.vnode.props || ot;
  let l = o;
  const r = s.startsWith("update:"), c = r && wu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => ut(v) ? v.trim() : v)), c.number && (l = o.map(Yn)));
  let u, d = a[u = ia(s)] || // also try camelCase event handler (#2249)
  a[u = ia(Kt(s))];
  !d && r && (d = a[u = ia(Bs(s))]), d && os(
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
function nr(e, s, o = !1) {
  const a = o ? _u : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!We(e)) {
    const d = (m) => {
      const v = nr(m, s, !0);
      v && (u = !0, pt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (st(e) && a.set(e, null), null) : (Fe(r) ? r.forEach((d) => c[d] = null) : pt(c, r), st(e) && a.set(e, c), c);
}
function ta(e, s) {
  return !e || !Hn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), et(e, s[0].toLowerCase() + s.slice(1)) || et(e, Bs(s)) || et(e, s));
}
function El(e) {
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
  } = e, b = Nn(e);
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
    Ho.length = 0, Xn(T, e, 1), x = S(bt);
  }
  let P = x;
  if (M && C !== !1) {
    const T = Object.keys(M), { shapeFlag: L } = P;
    T.length && L & 7 && (r && T.some(Wa) && (M = $u(
      M,
      r
    )), P = Fs(P, M, !1, !0));
  }
  return o.dirs && (P = Fs(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(o.dirs) : o.dirs), o.transition && oo(P, o.transition), x = P, Nn(b), x;
}
const bu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Hn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, $u = (e, s) => {
  const o = {};
  for (const a in e)
    (!Wa(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
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
      return a ? Tl(a, c, m) : !!c;
    if (d & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== a[w] && !ta(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Tl(a, c, m) : !0 : !!c;
  return !1;
}
function Tl(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ta(o, r))
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
const ar = {}, lr = () => Object.create(ar), ir = (e) => Object.getPrototypeOf(e) === ar;
function Su(e, s, o, a = !1) {
  const l = {}, r = lr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rr(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : Ac(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Iu(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = Qe(l), [d] = e.propsOptions;
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
        if (ta(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (et(r, w))
            p !== r[w] && (r[w] = p, m = !0);
          else {
            const k = Kt(w);
            l[k] = Da(
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
    rr(e, s, l, r) && (m = !0);
    let v;
    for (const g in u)
      (!s || // for camelCase
      !et(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Bs(g)) === g || !et(s, v))) && (d ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = Da(
        d,
        u,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (r !== u)
      for (const g in r)
        (!s || !et(s, g)) && (delete r[g], m = !0);
  }
  m && xs(e.attrs, "set", "");
}
function rr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Fo(d))
        continue;
      const m = s[d];
      let v;
      l && et(l, v = Kt(d)) ? !r || !r.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : ta(e.emitsOptions, d) || (!(d in a) || m !== a[d]) && (a[d] = m, c = !0);
    }
  if (r) {
    const d = Qe(o), m = u || ot;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      o[g] = Da(
        l,
        d,
        g,
        m[g],
        e,
        !et(m, g)
      );
    }
  }
  return c;
}
function Da(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = et(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && We(d)) {
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
function cr(e, s, o = !1) {
  const a = o ? Eu : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!We(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = cr(g, s, !0);
      pt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !d)
    return st(e) && a.set(e, po), po;
  if (Fe(r))
    for (let v = 0; v < r.length; v++) {
      const g = Kt(r[v]);
      Rl(g) && (c[g] = ot);
    }
  else if (r)
    for (const v in r) {
      const g = Kt(v);
      if (Rl(g)) {
        const w = r[v], p = c[g] = Fe(w) || We(w) ? { type: w } : pt({}, w), k = p.type;
        let C = !1, b = !0;
        if (Fe(k))
          for (let x = 0; x < k.length; ++x) {
            const M = k[x], P = We(M) && M.name;
            if (P === "Boolean") {
              C = !0;
              break;
            } else P === "String" && (b = !1);
          }
        else
          C = We(k) && k.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = b, (C || et(p, "default")) && u.push(g);
      }
    }
  const m = [c, u];
  return st(e) && a.set(e, m), m;
}
function Rl(e) {
  return e[0] !== "$" && !Fo(e);
}
const ol = (e) => e === "_" || e === "_ctx" || e === "$stable", nl = (e) => Fe(e) ? e.map(ps) : [ps(e)], Tu = (e, s, o) => {
  if (s._n)
    return s;
  const a = h((...l) => nl(s(...l)), o);
  return a._c = !1, a;
}, ur = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (ol(l)) continue;
    const r = e[l];
    if (We(r))
      s[l] = Tu(l, r, a);
    else if (r != null) {
      const c = nl(r);
      s[l] = () => c;
    }
  }
}, dr = (e, s) => {
  const o = nl(s);
  e.slots.default = () => o;
}, fr = (e, s, o) => {
  for (const a in s)
    (o || !ol(a)) && (e[a] = s[a]);
}, Ru = (e, s, o) => {
  const a = e.slots = lr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (fr(a, s, o), o && vi(a, "_", l, !0)) : ur(s, a);
  } else s && dr(e, s);
}, Pu = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = ot;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : fr(l, s, o) : (r = !s.$stable, ur(s, l)), c = s;
  } else s && (dr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !ol(u) && c[u] == null && delete l[u];
}, Et = Ou;
function Mu(e) {
  return Du(e);
}
function Du(e, s) {
  const o = Jn();
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
  } = e, C = (N, R, F, q = null, ne = null, re = null, Ce = void 0, ie = null, we = !!R.dynamicChildren) => {
    if (N === R)
      return;
    N && !Zs(N, R) && (q = ce(N), Ue(N, ne, re, !0), N = null), R.patchFlag === -2 && (we = !1, R.dynamicChildren = null);
    const { type: he, ref: Me, shapeFlag: Ee } = R;
    switch (he) {
      case sa:
        b(N, R, F, q);
        break;
      case bt:
        x(N, R, F, q);
        break;
      case pa:
        N == null && M(R, F, q, Ce);
        break;
      case H:
        W(
          N,
          R,
          F,
          q,
          ne,
          re,
          Ce,
          ie,
          we
        );
        break;
      default:
        Ee & 1 ? L(
          N,
          R,
          F,
          q,
          ne,
          re,
          Ce,
          ie,
          we
        ) : Ee & 6 ? O(
          N,
          R,
          F,
          q,
          ne,
          re,
          Ce,
          ie,
          we
        ) : (Ee & 64 || Ee & 128) && he.process(
          N,
          R,
          F,
          q,
          ne,
          re,
          Ce,
          ie,
          we,
          Pe
        );
    }
    Me != null && ne ? Go(Me, N && N.ref, re, R || N, !R) : Me == null && N && N.ref != null && Go(N.ref, null, re, N, !0);
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
  }, L = (N, R, F, q, ne, re, Ce, ie, we) => {
    if (R.type === "svg" ? Ce = "svg" : R.type === "math" && (Ce = "mathml"), N == null)
      V(
        R,
        F,
        q,
        ne,
        re,
        Ce,
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
          Ce,
          ie,
          we
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, V = (N, R, F, q, ne, re, Ce, ie) => {
    let we, he;
    const { props: Me, shapeFlag: Ee, transition: ee, dirs: Y } = N;
    if (we = N.el = c(
      N.type,
      re,
      Me && Me.is,
      Me
    ), Ee & 8 ? v(we, N.children) : Ee & 16 && E(
      N.children,
      we,
      null,
      q,
      ne,
      va(N, re),
      Ce,
      ie
    ), Y && qs(N, null, q, "created"), B(we, N, N.scopeId, Ce, q), Me) {
      for (const xe in Me)
        xe !== "value" && !Fo(xe) && r(we, xe, null, Me[xe], re, q);
      "value" in Me && r(we, "value", null, Me.value, re), (he = Me.onVnodeBeforeMount) && us(he, q, N);
    }
    Y && qs(N, null, q, "beforeMount");
    const De = Lu(ne, ee);
    De && ee.beforeEnter(we), a(we, R, F), ((he = Me && Me.onVnodeMounted) || De || Y) && Et(() => {
      he && us(he, q, N), De && ee.enter(we), Y && qs(N, null, q, "mounted");
    }, ne);
  }, B = (N, R, F, q, ne) => {
    if (F && p(N, F), q)
      for (let re = 0; re < q.length; re++)
        p(N, q[re]);
    if (ne) {
      let re = ne.subTree;
      if (R === re || vr(re.type) && (re.ssContent === R || re.ssFallback === R)) {
        const Ce = ne.vnode;
        B(
          N,
          Ce,
          Ce.scopeId,
          Ce.slotScopeIds,
          ne.parent
        );
      }
    }
  }, E = (N, R, F, q, ne, re, Ce, ie, we = 0) => {
    for (let he = we; he < N.length; he++) {
      const Me = N[he] = ie ? Us(N[he]) : ps(N[he]);
      C(
        null,
        Me,
        R,
        F,
        q,
        ne,
        re,
        Ce,
        ie
      );
    }
  }, I = (N, R, F, q, ne, re, Ce) => {
    const ie = R.el = N.el;
    let { patchFlag: we, dynamicChildren: he, dirs: Me } = R;
    we |= N.patchFlag & 16;
    const Ee = N.props || ot, ee = R.props || ot;
    let Y;
    if (F && Ys(F, !1), (Y = ee.onVnodeBeforeUpdate) && us(Y, F, R, N), Me && qs(R, N, F, "beforeUpdate"), F && Ys(F, !0), (Ee.innerHTML && ee.innerHTML == null || Ee.textContent && ee.textContent == null) && v(ie, ""), he ? A(
      N.dynamicChildren,
      he,
      ie,
      F,
      q,
      va(R, ne),
      re
    ) : Ce || Z(
      N,
      R,
      ie,
      null,
      F,
      q,
      va(R, ne),
      re,
      !1
    ), we > 0) {
      if (we & 16)
        te(ie, Ee, ee, F, ne);
      else if (we & 2 && Ee.class !== ee.class && r(ie, "class", null, ee.class, ne), we & 4 && r(ie, "style", Ee.style, ee.style, ne), we & 8) {
        const De = R.dynamicProps;
        for (let xe = 0; xe < De.length; xe++) {
          const ye = De[xe], K = Ee[ye], G = ee[ye];
          (G !== K || ye === "value") && r(ie, ye, K, G, ne, F);
        }
      }
      we & 1 && N.children !== R.children && v(ie, R.children);
    } else !Ce && he == null && te(ie, Ee, ee, F, ne);
    ((Y = ee.onVnodeUpdated) || Me) && Et(() => {
      Y && us(Y, F, R, N), Me && qs(R, N, F, "updated");
    }, q);
  }, A = (N, R, F, q, ne, re, Ce) => {
    for (let ie = 0; ie < R.length; ie++) {
      const we = N[ie], he = R[ie], Me = (
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
        Me,
        null,
        q,
        ne,
        re,
        Ce,
        !0
      );
    }
  }, te = (N, R, F, q, ne) => {
    if (R !== F) {
      if (R !== ot)
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
        const Ce = F[re], ie = R[re];
        Ce !== ie && re !== "value" && r(N, re, ie, Ce, ne, q);
      }
      "value" in F && r(N, "value", R.value, F.value, ne);
    }
  }, W = (N, R, F, q, ne, re, Ce, ie, we) => {
    const he = R.el = N ? N.el : u(""), Me = R.anchor = N ? N.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: ee, slotScopeIds: Y } = R;
    Y && (ie = ie ? ie.concat(Y) : Y), N == null ? (a(he, F, q), a(Me, F, q), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      F,
      Me,
      ne,
      re,
      Ce,
      ie,
      we
    )) : Ee > 0 && Ee & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    N.dynamicChildren ? (A(
      N.dynamicChildren,
      ee,
      F,
      ne,
      re,
      Ce,
      ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || ne && R === ne.subTree) && al(
      N,
      R,
      !0
      /* shallow */
    )) : Z(
      N,
      R,
      F,
      Me,
      ne,
      re,
      Ce,
      ie,
      we
    );
  }, O = (N, R, F, q, ne, re, Ce, ie, we) => {
    R.slotScopeIds = ie, N == null ? R.shapeFlag & 512 ? ne.ctx.activate(
      R,
      F,
      q,
      Ce,
      we
    ) : j(
      R,
      F,
      q,
      ne,
      re,
      Ce,
      we
    ) : X(N, R, we);
  }, j = (N, R, F, q, ne, re, Ce) => {
    const ie = N.component = Wu(
      N,
      q,
      ne
    );
    if (Zn(N) && (ie.ctx.renderer = Pe), Gu(ie, !1, Ce), ie.asyncDep) {
      if (ne && ne.registerDep(ie, z, Ce), !N.el) {
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
        Ce
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
  }, z = (N, R, F, q, ne, re, Ce) => {
    const ie = () => {
      if (N.isMounted) {
        let { next: Ee, bu: ee, u: Y, parent: De, vnode: xe } = N;
        {
          const Ve = mr(N);
          if (Ve) {
            Ee && (Ee.el = xe.el, ae(N, Ee, Ce)), Ve.asyncDep.then(() => {
              N.isUnmounted || ie();
            });
            return;
          }
        }
        let ye = Ee, K;
        Ys(N, !1), Ee ? (Ee.el = xe.el, ae(N, Ee, Ce)) : Ee = xe, ee && In(ee), (K = Ee.props && Ee.props.onVnodeBeforeUpdate) && us(K, De, Ee, xe), Ys(N, !0);
        const G = El(N), me = N.subTree;
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
        ), Ee.el = G.el, ye === null && xu(N, G.el), Y && Et(Y, ne), (K = Ee.props && Ee.props.onVnodeUpdated) && Et(
          () => us(K, De, Ee, xe),
          ne
        );
      } else {
        let Ee;
        const { el: ee, props: Y } = R, { bm: De, m: xe, parent: ye, root: K, type: G } = N, me = yo(R);
        Ys(N, !1), De && In(De), !me && (Ee = Y && Y.onVnodeBeforeMount) && us(Ee, ye, R), Ys(N, !0);
        {
          K.ce && // @ts-expect-error _def is private
          K.ce._def.shadowRoot !== !1 && K.ce._injectChildStyle(G);
          const Ve = N.subTree = El(N);
          C(
            null,
            Ve,
            F,
            q,
            N,
            ne,
            re
          ), R.el = Ve.el;
        }
        if (xe && Et(xe, ne), !me && (Ee = Y && Y.onVnodeMounted)) {
          const Ve = R;
          Et(
            () => us(Ee, ye, Ve),
            ne
          );
        }
        (R.shapeFlag & 256 || ye && yo(ye.vnode) && ye.vnode.shapeFlag & 256) && N.a && Et(N.a, ne), N.isMounted = !0, R = F = q = null;
      }
    };
    N.scope.on();
    const we = N.effect = new yi(ie);
    N.scope.off();
    const he = N.update = we.run.bind(we), Me = N.job = we.runIfDirty.bind(we);
    Me.i = N, Me.id = N.uid, we.scheduler = () => el(Me), Ys(N, !0), he();
  }, ae = (N, R, F) => {
    R.component = N;
    const q = N.vnode.props;
    N.vnode = R, N.next = null, Iu(N, R.props, q, F), Pu(N, R.children, F), Es(), hl(N), Ts();
  }, Z = (N, R, F, q, ne, re, Ce, ie, we = !1) => {
    const he = N && N.children, Me = N ? N.shapeFlag : 0, Ee = R.children, { patchFlag: ee, shapeFlag: Y } = R;
    if (ee > 0) {
      if (ee & 128) {
        $e(
          he,
          Ee,
          F,
          q,
          ne,
          re,
          Ce,
          ie,
          we
        );
        return;
      } else if (ee & 256) {
        _e(
          he,
          Ee,
          F,
          q,
          ne,
          re,
          Ce,
          ie,
          we
        );
        return;
      }
    }
    Y & 8 ? (Me & 16 && oe(he, ne, re), Ee !== he && v(F, Ee)) : Me & 16 ? Y & 16 ? $e(
      he,
      Ee,
      F,
      q,
      ne,
      re,
      Ce,
      ie,
      we
    ) : oe(he, ne, re, !0) : (Me & 8 && v(F, ""), Y & 16 && E(
      Ee,
      F,
      q,
      ne,
      re,
      Ce,
      ie,
      we
    ));
  }, _e = (N, R, F, q, ne, re, Ce, ie, we) => {
    N = N || po, R = R || po;
    const he = N.length, Me = R.length, Ee = Math.min(he, Me);
    let ee;
    for (ee = 0; ee < Ee; ee++) {
      const Y = R[ee] = we ? Us(R[ee]) : ps(R[ee]);
      C(
        N[ee],
        Y,
        F,
        null,
        ne,
        re,
        Ce,
        ie,
        we
      );
    }
    he > Me ? oe(
      N,
      ne,
      re,
      !0,
      !1,
      Ee
    ) : E(
      R,
      F,
      q,
      ne,
      re,
      Ce,
      ie,
      we,
      Ee
    );
  }, $e = (N, R, F, q, ne, re, Ce, ie, we) => {
    let he = 0;
    const Me = R.length;
    let Ee = N.length - 1, ee = Me - 1;
    for (; he <= Ee && he <= ee; ) {
      const Y = N[he], De = R[he] = we ? Us(R[he]) : ps(R[he]);
      if (Zs(Y, De))
        C(
          Y,
          De,
          F,
          null,
          ne,
          re,
          Ce,
          ie,
          we
        );
      else
        break;
      he++;
    }
    for (; he <= Ee && he <= ee; ) {
      const Y = N[Ee], De = R[ee] = we ? Us(R[ee]) : ps(R[ee]);
      if (Zs(Y, De))
        C(
          Y,
          De,
          F,
          null,
          ne,
          re,
          Ce,
          ie,
          we
        );
      else
        break;
      Ee--, ee--;
    }
    if (he > Ee) {
      if (he <= ee) {
        const Y = ee + 1, De = Y < Me ? R[Y].el : q;
        for (; he <= ee; )
          C(
            null,
            R[he] = we ? Us(R[he]) : ps(R[he]),
            F,
            De,
            ne,
            re,
            Ce,
            ie,
            we
          ), he++;
      }
    } else if (he > ee)
      for (; he <= Ee; )
        Ue(N[he], ne, re, !0), he++;
    else {
      const Y = he, De = he, xe = /* @__PURE__ */ new Map();
      for (he = De; he <= ee; he++) {
        const tt = R[he] = we ? Us(R[he]) : ps(R[he]);
        tt.key != null && xe.set(tt.key, he);
      }
      let ye, K = 0;
      const G = ee - De + 1;
      let me = !1, Ve = 0;
      const Ze = new Array(G);
      for (he = 0; he < G; he++) Ze[he] = 0;
      for (he = Y; he <= Ee; he++) {
        const tt = N[he];
        if (K >= G) {
          Ue(tt, ne, re, !0);
          continue;
        }
        let vt;
        if (tt.key != null)
          vt = xe.get(tt.key);
        else
          for (ye = De; ye <= ee; ye++)
            if (Ze[ye - De] === 0 && Zs(tt, R[ye])) {
              vt = ye;
              break;
            }
        vt === void 0 ? Ue(tt, ne, re, !0) : (Ze[vt - De] = he + 1, vt >= Ve ? Ve = vt : me = !0, C(
          tt,
          R[vt],
          F,
          null,
          ne,
          re,
          Ce,
          ie,
          we
        ), K++);
      }
      const St = me ? Au(Ze) : po;
      for (ye = St.length - 1, he = G - 1; he >= 0; he--) {
        const tt = De + he, vt = R[tt], qt = R[tt + 1], ht = tt + 1 < Me ? (
          // #13559, fallback to el placeholder for unresolved async component
          qt.el || qt.placeholder
        ) : q;
        Ze[he] === 0 ? C(
          null,
          vt,
          F,
          ht,
          ne,
          re,
          Ce,
          ie,
          we
        ) : me && (ye < 0 || he !== St[ye] ? Le(vt, F, ht, 2) : ye--);
      }
    }
  }, Le = (N, R, F, q, ne = null) => {
    const { el: re, type: Ce, transition: ie, children: we, shapeFlag: he } = N;
    if (he & 6) {
      Le(N.component.subTree, R, F, q);
      return;
    }
    if (he & 128) {
      N.suspense.move(R, F, q);
      return;
    }
    if (he & 64) {
      Ce.move(N, R, F, Pe);
      return;
    }
    if (Ce === H) {
      a(re, R, F);
      for (let Ee = 0; Ee < we.length; Ee++)
        Le(we[Ee], R, F, q);
      a(N.anchor, R, F);
      return;
    }
    if (Ce === pa) {
      P(N, R, F);
      return;
    }
    if (q !== 2 && he & 1 && ie)
      if (q === 0)
        ie.beforeEnter(re), a(re, R, F), Et(() => ie.enter(re), ne);
      else {
        const { leave: Ee, delayLeave: ee, afterLeave: Y } = ie, De = () => {
          N.ctx.isUnmounted ? l(re) : a(re, R, F);
        }, xe = () => {
          re._isLeaving && re[Cs](
            !0
            /* cancelled */
          ), Ee(re, () => {
            De(), Y && Y();
          });
        };
        ee ? ee(re, De, xe) : xe();
      }
    else
      a(re, R, F);
  }, Ue = (N, R, F, q = !1, ne = !1) => {
    const {
      type: re,
      props: Ce,
      ref: ie,
      children: we,
      dynamicChildren: he,
      shapeFlag: Me,
      patchFlag: Ee,
      dirs: ee,
      cacheIndex: Y
    } = N;
    if (Ee === -2 && (ne = !1), ie != null && (Es(), Go(ie, null, F, N, !0), Ts()), Y != null && (R.renderCache[Y] = void 0), Me & 256) {
      R.ctx.deactivate(N);
      return;
    }
    const De = Me & 1 && ee, xe = !yo(N);
    let ye;
    if (xe && (ye = Ce && Ce.onVnodeBeforeUnmount) && us(ye, R, N), Me & 6)
      pe(N.component, F, q);
    else {
      if (Me & 128) {
        N.suspense.unmount(F, q);
        return;
      }
      De && qs(N, null, R, "beforeUnmount"), Me & 64 ? N.type.remove(
        N,
        R,
        F,
        Pe,
        q
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (re !== H || Ee > 0 && Ee & 64) ? oe(
        he,
        R,
        F,
        !1,
        !0
      ) : (re === H && Ee & 384 || !ne && Me & 16) && oe(we, R, F), q && Ne(N);
    }
    (xe && (ye = Ce && Ce.onVnodeUnmounted) || De) && Et(() => {
      ye && us(ye, R, N), De && qs(N, null, R, "unmounted");
    }, F);
  }, Ne = (N) => {
    const { type: R, el: F, anchor: q, transition: ne } = N;
    if (R === H) {
      qe(F, q);
      return;
    }
    if (R === pa) {
      T(N);
      return;
    }
    const re = () => {
      l(F), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (N.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: Ce, delayLeave: ie } = ne, we = () => Ce(F, re);
      ie ? ie(N.el, re, we) : we();
    } else
      re();
  }, qe = (N, R) => {
    let F;
    for (; N !== R; )
      F = w(N), l(N), N = F;
    l(R);
  }, pe = (N, R, F) => {
    const { bum: q, scope: ne, job: re, subTree: Ce, um: ie, m: we, a: he } = N;
    Pl(we), Pl(he), q && In(q), ne.stop(), re && (re.flags |= 8, Ue(Ce, N, R, F)), ie && Et(ie, R), Et(() => {
      N.isUnmounted = !0;
    }, R);
  }, oe = (N, R, F, q = !1, ne = !1, re = 0) => {
    for (let Ce = re; Ce < N.length; Ce++)
      Ue(N[Ce], R, F, q, ne);
  }, ce = (N) => {
    if (N.shapeFlag & 6)
      return ce(N.component.subTree);
    if (N.shapeFlag & 128)
      return N.suspense.next();
    const R = w(N.anchor || N.el), F = R && R[Ui];
    return F ? w(F) : R;
  };
  let ue = !1;
  const Te = (N, R, F) => {
    N == null ? R._vnode && Ue(R._vnode, null, null, !0) : C(
      R._vnode || null,
      N,
      R,
      null,
      null,
      null,
      F
    ), R._vnode = N, ue || (ue = !0, hl(), Ai(), ue = !1);
  }, Pe = {
    p: C,
    um: Ue,
    m: Le,
    r: Ne,
    mt: j,
    mc: E,
    pc: Z,
    pbc: A,
    n: ce,
    o: e
  };
  return {
    render: Te,
    hydrate: void 0,
    createApp: vu(Te)
  };
}
function va({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Lu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function al(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Fe(a) && Fe(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Us(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && al(c, u)), u.type === sa && // avoid cached text nodes retaining detached dom nodes
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
function mr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : mr(s);
}
function Pl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const vr = (e) => e.__isSuspense;
function Ou(e, s) {
  s && s.pendingBranch ? Fe(e) ? s.effects.push(...e) : s.effects.push(e) : Hc(e);
}
const H = Symbol.for("v-fgt"), sa = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), pa = Symbol.for("v-stc"), Ho = [];
let Ut = null;
function n(e = !1) {
  Ho.push(Ut = e ? null : []);
}
function Nu() {
  Ho.pop(), Ut = Ho[Ho.length - 1] || null;
}
let tn = 1;
function Fn(e, s = !1) {
  tn += e, e < 0 && Ut && s && (Ut.hasOnce = !0);
}
function pr(e) {
  return e.dynamicChildren = tn > 0 ? Ut || po : null, Nu(), tn > 0 && Ut && Ut.push(e), e;
}
function i(e, s, o, a, l, r) {
  return pr(
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
  return pr(
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
const gr = ({ key: e }) => e ?? null, Rn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || Ct(e) || We(e) ? { i: wt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === H ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && gr(s),
    ref: s && Rn(s),
    scopeId: Ni,
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
  return u ? (ll(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= ut(o) ? 8 : 16), tn > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === Qi) && (e = bt), sn(e)) {
    const u = Fs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && ll(u, o), tn > 0 && !r && Ut && (u.shapeFlag & 6 ? Ut[Ut.indexOf(e)] = u : Ut.push(u)), u.patchFlag = -2, u;
  }
  if (Yu(e) && (e = e.__vccOpts), s) {
    s = zu(s);
    let { class: u, style: d } = s;
    u && !ut(u) && (s.class = Ie(u)), st(d) && (Za(d) && !Fe(d) && (d = pt({}, d)), s.style = Ft(d));
  }
  const c = ut(e) ? 1 : vr(e) ? 128 : zi(e) ? 64 : st(e) ? 4 : We(e) ? 2 : 0;
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
  return e ? Za(e) || ir(e) ? pt({}, e) : e : null;
}
function Fs(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, m = s ? Fu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && gr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Fe(r) ? r.concat(Rn(s)) : [r, Rn(s)] : Rn(s)
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
  return S(sa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), D(bt, null, e)) : S(bt, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? S(bt) : Fe(e) ? S(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : sn(e) ? Us(e) : S(sa, null, String(e));
}
function Us(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fs(e);
}
function ll(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Fe(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), ll(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !ir(s) ? s._ctx = wt : l === 3 && wt && (wt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else We(s) ? (s = { default: s, _ctx: wt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Fu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Ie([s.class, a.class]));
      else if (l === "style")
        s.style = Ft([s.style, a.style]);
      else if (Hn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Fe(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
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
const Vu = tr();
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
    propsOptions: cr(a, l),
    emitsOptions: nr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ot,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: ot,
    data: ot,
    props: ot,
    attrs: ot,
    slots: ot,
    refs: ot,
    setupState: ot,
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
const il = () => $t || wt;
let Vn, La;
{
  const e = Jn(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Vn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => $t = o
  ), La = s(
    "__VUE_SSR_SETTERS__",
    (o) => on = o
  );
}
const cn = (e) => {
  const s = $t;
  return Vn(e), e.scope.on(), () => {
    e.scope.off(), Vn(s);
  };
}, Ml = () => {
  $t && $t.scope.off(), Vn(null);
};
function hr(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Gu(e, s = !1, o = !1) {
  s && La(s);
  const { props: a, children: l } = e.vnode, r = hr(e);
  Su(e, a, r, s), Ru(e, l, o || s);
  const c = r ? ju(e, s) : void 0;
  return s && La(!1), c;
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
    ), u = di(c);
    if (Ts(), r(), (u || e.sp) && !yo(e) && Ki(e), u) {
      if (c.then(Ml, Ml), s)
        return c.then((d) => {
          Dl(e, d);
        }).catch((d) => {
          Xn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Dl(e, c);
  } else
    yr(e);
}
function Dl(e, s, o) {
  We(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : st(s) && (e.setupState = Mi(s)), yr(e);
}
function yr(e, s, o) {
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
function oa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mi(Oc(e.exposed)), {
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
  return We(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Yu(e) {
  return We(e) && "__vccOpts" in e;
}
const U = (e, s) => Vc(e, s, on);
function un(e, s, o) {
  try {
    Fn(-1);
    const a = arguments.length;
    return a === 2 ? st(s) && !Fe(s) ? sn(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && sn(o) && (o = [o]), S(e, s, o));
  } finally {
    Fn(1);
  }
}
const Ju = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Aa;
const Ll = typeof window < "u" && window.trustedTypes;
if (Ll)
  try {
    Aa = /* @__PURE__ */ Ll.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wr = Aa ? (e) => Aa.createHTML(e) : (e) => e, Qu = "http://www.w3.org/2000/svg", Xu = "http://www.w3.org/1998/Math/MathML", $s = typeof document < "u" ? document : null, Al = $s && /* @__PURE__ */ $s.createElement("template"), Zu = {
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
      Al.innerHTML = wr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Al.content;
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
}, Ls = "transition", Mo = "animation", bo = Symbol("_vtc"), kr = {
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
}, _r = /* @__PURE__ */ pt(
  {},
  Wi,
  kr
), ed = (e) => (e.displayName = "Transition", e.props = _r, e), td = /* @__PURE__ */ ed(
  (e, { slots: s }) => un(Yc, br(e), s)
), Js = (e, s = []) => {
  Fe(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Ol = (e) => e ? Fe(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function br(e) {
  const s = {};
  for (const W in e)
    W in kr || (s[W] = e[W]);
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
  }, te = (W) => (O, j) => {
    const X = W ? B : M, z = () => I(O, W, j);
    Js(X, [O, z]), Nl(() => {
      As(O, W ? d : r), fs(O, W ? v : u), Ol(X) || Ul(O, a, C, z);
    });
  };
  return pt(s, {
    onBeforeEnter(W) {
      Js(x, [W]), fs(W, r), fs(W, c);
    },
    onBeforeAppear(W) {
      Js(V, [W]), fs(W, d), fs(W, m);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(W, O) {
      W._isLeaving = !0;
      const j = () => A(W, O);
      fs(W, g), W._enterCancelled ? (fs(W, w), Oa(W)) : (Oa(W), fs(W, w)), Nl(() => {
        W._isLeaving && (As(W, g), fs(W, p), Ol(T) || Ul(W, a, b, j));
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
  if (st(e))
    return [ga(e.enter), ga(e.leave)];
  {
    const s = ga(e);
    return [s, s];
  }
}
function ga(e) {
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
function Nl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let od = 0;
function Ul(e, s, o, a) {
  const l = e._endId = ++od, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = $r(e, s);
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
function $r(e, s) {
  const o = window.getComputedStyle(e), a = (k) => (o[k] || "").split(", "), l = a(`${Ls}Delay`), r = a(`${Ls}Duration`), c = zl(l, r), u = a(`${Mo}Delay`), d = a(`${Mo}Duration`), m = zl(u, d);
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
function zl(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => Fl(o) + Fl(e[a])));
}
function Fl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Oa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function nd(e, s, o) {
  const a = e[bo];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Vl = Symbol("_vod"), ad = Symbol("_vsh"), ld = Symbol(""), id = /(?:^|;)\s*display\s*:/;
function rd(e, s, o) {
  const a = e.style, l = ut(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (ut(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Pn(a, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Pn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Pn(a, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = a[ld];
      c && (o += ";" + c), a.cssText = o, r = id.test(o);
    }
  } else s && e.removeAttribute("style");
  Vl in e && (e[Vl] = r ? a.display : "", e[ad] && (a.display = "none"));
}
const Bl = /\s*!important$/;
function Pn(e, s, o) {
  if (Fe(o))
    o.forEach((a) => Pn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = cd(e, s);
    Bl.test(o) ? e.setProperty(
      Bs(a),
      o.replace(Bl, ""),
      "important"
    ) : e[a] = o;
  }
}
const Wl = ["Webkit", "Moz", "ms"], ha = {};
function cd(e, s) {
  const o = ha[s];
  if (o)
    return o;
  let a = Kt(s);
  if (a !== "filter" && a in e)
    return ha[s] = a;
  a = qn(a);
  for (let l = 0; l < Wl.length; l++) {
    const r = Wl[l] + a;
    if (r in e)
      return ha[s] = r;
  }
  return s;
}
const Gl = "http://www.w3.org/1999/xlink";
function jl(e, s, o, a, l, r = mc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Gl, s.slice(6, s.length)) : e.setAttributeNS(Gl, s, o) : o == null || r && !pi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : ts(o) ? String(o) : o
  );
}
function Hl(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? wr(o) : o);
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
    u === "boolean" ? o = pi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
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
const Kl = Symbol("_vei");
function dd(e, s, o, a, l = null) {
  const r = e[Kl] || (e[Kl] = {}), c = r[s];
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
const ql = /(?:Once|Passive|Capture)$/;
function fd(e) {
  let s;
  if (ql.test(e)) {
    s = {};
    let a;
    for (; a = e.match(ql); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bs(e.slice(2)), s];
}
let ya = 0;
const md = /* @__PURE__ */ Promise.resolve(), vd = () => ya || (md.then(() => ya = 0), ya = Date.now());
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
const Yl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hd = (e, s, o, a, l, r) => {
  const c = l === "svg";
  s === "class" ? nd(e, a, c) : s === "style" ? rd(e, o, a) : Hn(s) ? Wa(s) || dd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : yd(e, s, a, c)) ? (Hl(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && jl(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ut(a)) ? Hl(e, Kt(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), jl(e, s, a, c));
};
function yd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Yl(s) && We(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Yl(s) && ut(o) ? !1 : s in e;
}
const Cr = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Bn = Symbol("_moveCb"), Jl = Symbol("_enterCb"), wd = (e) => (delete e.props.mode, e), kd = /* @__PURE__ */ wd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ pt({}, _r, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = il(), a = Bi();
    let l, r;
    return Yi(() => {
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
      Oa(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Bn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Bn] = null, As(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Qe(e), u = br(c);
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
          ), Cr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = s.default ? tl(s.default()) : [];
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
  s[Bn] && s[Bn](), s[Jl] && s[Jl]();
}
function $d(e) {
  xr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Cd(e) {
  const s = Cr.get(e), o = xr.get(e), a = s.left - o.left, l = s.top - o.top;
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
  const { hasTransform: c } = $r(a);
  return r.removeChild(a), c;
}
const Vs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Fe(s) ? (o) => In(s, o) : s;
};
function Sd(e) {
  e.target.composing = !0;
}
function Ql(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const jt = Symbol("_assign");
function Xl(e, s, o) {
  return s && (e = e.trim()), o && (e = Yn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[jt] = Vs(l);
    const r = a || l.props && l.props.type === "number";
    Is(e, s ? "change" : "input", (c) => {
      c.target.composing || e[jt](Xl(e.value, o, r));
    }), (o || r) && Is(e, "change", () => {
      e.value = Xl(e.value, o, r);
    }), s || (Is(e, "compositionstart", Sd), Is(e, "compositionend", Ql), Is(e, "change", Ql));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[jt] = Vs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, nn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[jt] = Vs(o), Is(e, "change", () => {
      const a = e._modelValue, l = $o(e), r = e.checked, c = e[jt];
      if (Fe(a)) {
        const u = Ha(a, l), d = u !== -1;
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
        c(Sr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Zl,
  beforeUpdate(e, s, o) {
    e[jt] = Vs(o), Zl(e, s, o);
  }
};
function Zl(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Fe(s))
    l = Ha(s, a.props.value) > -1;
  else if (Co(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = so(s, Sr(e, !0));
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
        (c) => o ? Yn($o(c)) : $o(c)
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
    ei(e, s);
  },
  beforeUpdate(e, s, o) {
    e[jt] = Vs(o);
  },
  updated(e, { value: s }) {
    e._assigning || ei(e, s);
  }
};
function ei(e, s) {
  const o = e.multiple, a = Fe(s);
  if (!(o && !a && !Co(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = $o(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = Ha(s, u) > -1;
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
function Sr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const na = {
  created(e, s, o) {
    bn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    bn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    bn(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    bn(e, s, o, a, "updated");
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
function bn(e, s, o, a, l) {
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
}, lt = (e, s) => {
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
let ti;
function Md() {
  return ti || (ti = Mu(Pd));
}
const aa = ((...e) => {
  const s = Md().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = Ld(a);
    if (!l) return;
    const r = s._component;
    !We(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
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
        He(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Nd, [
        He(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Ud, [
        He(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", zd, [
        He(s.$slots, "footer", {}, void 0)
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
    return (s, o) => (n(), D(sl(`h${e.level}`), {
      class: Ie(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", Vd, f(e.prefix), 1)) : (n(), i("span", Bd)),
        He(s.$slots, "default", {}, void 0, !0)
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
}), Ir = /* @__PURE__ */ ge(Kd, [["__scopeId", "data-v-6fc7f16d"]]), qd = { class: "header-left" }, Yd = {
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
      class: Ie(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", qd, [
        S(Gd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), D(Ir, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", Yd, [
        He(s.$slots, "actions", {}, void 0)
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
    return (s, o) => (n(), D(sl(`h${e.level}`), {
      class: Ie(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        He(s.$slots, "default", {}, void 0, !0),
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
          He(s.$slots, "left", {}, void 0)
        ]),
        t("div", nf, [
          t("h4", af, f(e.rightTitle), 1),
          He(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", lf, [
        He(s.$slots, "footer", {}, void 0)
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
      class: Ie(["status-item", o.value, { "is-separator": e.separator }])
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
      class: Ie(["issue-card", o.value])
    }, [
      t("div", vf, [
        t("span", pf, f(e.icon), 1),
        t("h4", gf, f(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", hf, [
        e.description ? (n(), i("p", yf, f(e.description), 1)) : y("", !0),
        He(a.$slots, "default", {}, void 0)
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
        He(a.$slots, "actions", {}, void 0)
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
      class: Ie(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", $f)) : y("", !0),
      e.loading ? y("", !0) : He(s.$slots, "default", { key: 1 }, void 0)
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
      class: Ie(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Mn = /* @__PURE__ */ ge(Tf, [["__scopeId", "data-v-75e9eeb8"]]), Rf = /* @__PURE__ */ fe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Ie(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Na = /* @__PURE__ */ ge(Rf, [["__scopeId", "data-v-2f186e4c"]]), Pf = { class: "detail-row" }, Mf = /* @__PURE__ */ fe({
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
      S(Mn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), D(Na, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : He(s.$slots, "value", { key: 1 }, void 0)
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
    Je(() => {
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
      var k, C, b, x, M, P, T, L, V, B, E, I, A, te, W, O, j, X, z, ae, Z, _e;
      return n(), D(kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = ($e) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = lt(() => {
            }, ["stop"]))
          }, [
            t("div", Df, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = ($e) => w.$emit("close"))
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
                    onClick: p[1] || (p[1] = ($e) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Uf, [
                  t("div", zf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Ff, "BROKEN (COMMITTED) (" + f(a.value.length) + ")", 1)
                  ]),
                  t("div", Vf, [
                    (n(!0), i(H, null, ve(a.value, ($e) => (n(), i("div", {
                      key: $e.name,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, f($e.name), 1),
                      t("span", Wf, f($e.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Gf, [
                  t("div", jf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Hf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Kf, [
                    (n(!0), i(H, null, ve(l.value, ($e) => (n(), i("div", {
                      key: $e.name,
                      class: "workflow-item"
                    }, [
                      t("span", qf, f($e.name), 1),
                      t("span", Yf, f($e.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (k = e.status.workflows) == null ? void 0 : k.new) != null && C.length ? (n(), i("div", Jf, [
                  t("div", Qf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Xf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Zf, [
                    (n(!0), i(H, null, ve(e.status.workflows.new, ($e) => (n(), i("div", {
                      key: $e,
                      class: "workflow-item"
                    }, [
                      t("span", em, f($e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (b = e.status.workflows) == null ? void 0 : b.modified) != null && x.length ? (n(), i("div", tm, [
                  t("div", sm, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", om, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", nm, [
                    (n(!0), i(H, null, ve(e.status.workflows.modified, ($e) => (n(), i("div", {
                      key: $e,
                      class: "workflow-item"
                    }, [
                      t("span", am, f($e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = (M = e.status.workflows) == null ? void 0 : M.deleted) != null && P.length ? (n(), i("div", lm, [
                  t("div", im, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", rm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", cm, [
                    (n(!0), i(H, null, ve(e.status.workflows.deleted, ($e) => (n(), i("div", {
                      key: $e,
                      class: "workflow-item"
                    }, [
                      t("span", um, f($e), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", dm, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = ($e) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", fm, "SYNCED (" + f(r.value.length) + ")", 1),
                    t("span", mm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", vm, [
                    (n(!0), i(H, null, ve(r.value, ($e) => (n(), i("div", {
                      key: $e,
                      class: "workflow-item"
                    }, [
                      t("span", pm, f($e), 1)
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
                    (n(!0), i(H, null, ve(e.status.git_changes.nodes_added, ($e) => (n(), i("div", {
                      key: v($e),
                      class: "change-item"
                    }, [
                      t("span", _m, f(v($e)), 1),
                      g($e) ? (n(), i("span", bm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (B = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && B.length ? (n(), i("div", $m, [
                  t("div", Cm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", xm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Sm, [
                    (n(!0), i(H, null, ve(e.status.git_changes.nodes_removed, ($e) => (n(), i("div", {
                      key: v($e),
                      class: "change-item"
                    }, [
                      t("span", Im, f(v($e)), 1),
                      g($e) ? (n(), i("span", Em, "dev")) : y("", !0)
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
                    onClick: p[3] || (p[3] = ($e) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (W = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && W.length ? (n(), i("div", Om, [
                  S(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Nm, [
                    (n(!0), i(H, null, ve(e.status.comparison.missing_nodes.slice(0, 10), ($e) => (n(), i("div", {
                      key: $e,
                      class: "drift-list-item"
                    }, " - " + f($e), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Um, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (j = (O = e.status.comparison) == null ? void 0 : O.extra_nodes) != null && j.length ? (n(), i("div", zm, [
                  S(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Fm, [
                    (n(!0), i(H, null, ve(e.status.comparison.extra_nodes.slice(0, 10), ($e) => (n(), i("div", {
                      key: $e,
                      class: "drift-list-item"
                    }, " - " + f($e), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Vm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (z = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && z.length ? (n(), i("div", Bm, [
                  S(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Wm, [
                    (n(!0), i(H, null, ve(e.status.comparison.version_mismatches.slice(0, 10), ($e) => (n(), i("div", {
                      key: $e.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f($e.name) + ": ", 1),
                      t("span", Gm, f($e.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", jm, f($e.expected), 1)
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
                    onClick: p[4] || (p[4] = ($e) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (_e = (Z = e.status.comparison) == null ? void 0 : Z.disabled_nodes) != null && _e.length ? (n(), i("div", Ym, [
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
                  (n(!0), i(H, null, ve(e.status.comparison.disabled_nodes.slice(0, 10), ($e) => (n(), i("div", {
                    key: $e,
                    class: "drift-list-item"
                  }, " • " + f($e), 1))), 128)),
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
                onClick: p[5] || (p[5] = ($e) => w.$emit("close"))
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
    }), A = U(() => E.value.length > 0), te = U(() => A.value || I.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), W = U(() => {
      const X = [];
      return a.status.workflows.new.length > 0 && X.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && X.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && X.push(`${a.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), O = U(() => {
      var ae, Z;
      const X = [], z = a.status.comparison;
      return (ae = z.missing_nodes) != null && ae.length && X.push(`${z.missing_nodes.length} missing node${z.missing_nodes.length === 1 ? "" : "s"}`), (Z = z.extra_nodes) != null && Z.length && X.push(`${z.extra_nodes.length} untracked node${z.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), j = U(() => {
      var ae, Z;
      const X = [], z = a.status.comparison;
      return (ae = z.extra_nodes) != null && ae.length && (z.extra_nodes.slice(0, 3).forEach((_e) => {
        X.push(`Untracked: ${_e}`);
      }), z.extra_nodes.length > 3 && X.push(`...and ${z.extra_nodes.length - 3} more untracked`)), (Z = z.missing_nodes) != null && Z.length && (z.missing_nodes.slice(0, 3).forEach((_e) => {
        X.push(`Missing: ${_e}`);
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
            te.value ? (n(), i(H, { key: 0 }, [
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
    return Je(() => {
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
      class: Ie(["text-input", { error: e.hasError, monospace: e.monospace }]),
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
      class: Ie(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", yv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", wv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", kv, [
        He(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", _v, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), $v = /* @__PURE__ */ ge(bv, [["__scopeId", "data-v-c6581a24"]]), HP = Ws({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const KP = [
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
], qP = {
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
], YP = [
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
function xv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function Xe() {
  const e = _(!1), s = _(null);
  async function o(Q, ke) {
    var At;
    if (!((At = window.app) != null && At.api))
      throw new Error("ComfyUI API not available");
    const be = await window.app.api.fetchApi(Q, ke);
    if (!be.ok) {
      const cs = await be.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${be.status}`);
    }
    const rt = await be.text();
    if (rt)
      return JSON.parse(rt);
  }
  async function a(Q = !1) {
    return o(Q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(Q, ke = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: ke })
    });
  }
  async function r(Q = 10, ke = 0) {
    return o(`/v2/comfygit/log?limit=${Q}&offset=${ke}`);
  }
  async function c(Q, ke = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(Q)}&limit=${ke}`);
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
  async function p(Q, ke = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Q, force: ke })
    });
  }
  async function k(Q, ke = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, start_point: ke })
    });
  }
  async function C(Q, ke = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Q, force: ke })
    });
  }
  async function b(Q, ke = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Q)}`, {
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
        const Q = await a();
        return {
          environments: [{
            name: Q.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + Q.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: Q.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: Q.branch
          }],
          current: Q.environment,
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
  async function P(Q) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(Q)}`);
    } catch {
      return null;
    }
  }
  async function T(Q, ke) {
    const be = { target_env: Q };
    return ke && (be.workspace_path = ke), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function L() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function V(Q) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function B() {
    return o("/v2/workspace/environments/create_status");
  }
  async function E(Q = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Q}`);
  }
  async function I(Q) {
    return o(`/v2/workspace/environments/${Q}`, {
      method: "DELETE"
    });
  }
  async function A(Q = !1) {
    try {
      return o(Q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ke = await a(Q), be = [];
      return ke.workflows.new.forEach((rt) => {
        be.push({ name: rt, status: "new", missing_nodes: 0, missing_models: 0, path: rt });
      }), ke.workflows.modified.forEach((rt) => {
        be.push({ name: rt, status: "modified", missing_nodes: 0, missing_models: 0, path: rt });
      }), ke.workflows.synced.forEach((rt) => {
        be.push({ name: rt, status: "synced", missing_nodes: 0, missing_models: 0, path: rt });
      }), be;
    }
  }
  async function te(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/details`);
  }
  async function W(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/resolve`, {
      method: "POST"
    });
  }
  async function O(Q, ke, be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ke, install_models: be })
    });
  }
  async function j(Q, ke, be) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ke, importance: be })
    });
  }
  async function X() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function z() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ae(Q) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Q)}`);
  }
  async function Z(Q) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function _e(Q, ke) {
    return o(`/v2/workspace/models/${Q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function $e(Q, ke) {
    return o(`/v2/workspace/models/${Q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function Le(Q) {
    return o(`/v2/workspace/models/${Q}`, {
      method: "DELETE"
    });
  }
  async function Ue(Q) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Ne() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function qe() {
    return o("/v2/workspace/models/directory");
  }
  async function pe(Q) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function oe(Q) {
    const ke = new URLSearchParams({ url: Q });
    return o(`/v2/workspace/huggingface/repo-info?${ke}`);
  }
  async function ce() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ue(Q, ke = 10) {
    const be = new URLSearchParams({ query: Q, limit: String(ke) });
    return o(`/v2/workspace/huggingface/search?${be}`);
  }
  async function Te(Q) {
    try {
      const ke = Q ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Q)}` : "/v2/comfygit/config";
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
  async function Pe(Q, ke) {
    const be = ke ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ke)}` : "/v2/comfygit/config";
    return o(be, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function ze(Q, ke) {
    try {
      const be = new URLSearchParams();
      return Q && be.append("level", Q), ke && be.append("lines", ke.toString()), o(`/v2/comfygit/debug/logs?${be}`);
    } catch {
      return [];
    }
  }
  async function N(Q, ke) {
    try {
      const be = new URLSearchParams();
      return Q && be.append("level", Q), ke && be.append("lines", ke.toString()), o(`/v2/workspace/debug/logs?${be}`);
    } catch {
      return [];
    }
  }
  async function R() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function F() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function q(Q, ke) {
    try {
      const be = new URLSearchParams();
      return Q && be.append("level", Q), ke && be.append("lines", ke.toString()), o(`/v2/workspace/debug/orchestrator-logs?${be}`);
    } catch {
      return [];
    }
  }
  async function ne() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function re(Q) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function Ce() {
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
  async function ie(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/track-dev`, {
      method: "POST"
    });
  }
  async function we(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/install`, {
      method: "POST"
    });
  }
  async function he(Q) {
    var At, cs, To, Ro;
    const ke = xv(), be = ((cs = (At = window.app) == null ? void 0 : At.api) == null ? void 0 : cs.clientId) ?? ((Ro = (To = window.app) == null ? void 0 : To.api) == null ? void 0 : Ro.initialClientId) ?? "comfygit-panel", rt = {
      kind: "install",
      params: {
        id: Q.id,
        version: Q.version || Q.selected_version || "latest",
        selected_version: Q.selected_version || "latest",
        repository: Q.repository || "",
        mode: Q.mode || "remote",
        channel: Q.channel || "default"
      },
      ui_id: ke,
      client_id: be
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rt)
    }), console.log("[ComfyGit] Task queued with ui_id:", ke, "for package:", Q.id), o("/v2/manager/queue/start").catch((sc) => {
      console.error("[ComfyGit] Queue start failed:", sc);
    }), { ui_id: ke };
  }
  async function Me(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/update`, {
      method: "POST"
    });
  }
  async function Ee(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function ee() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Y(Q, ke) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, url: ke })
    });
  }
  async function De(Q) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function xe(Q, ke, be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ke, push_url: be })
    });
  }
  async function ye(Q, ke) {
    const be = {};
    return ke && (be["X-Git-Auth-Token"] = ke), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/fetch`, {
      method: "POST",
      headers: be
    });
  }
  async function K(Q) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/status`);
    } catch {
      return null;
    }
  }
  async function G(Q = "skip", ke = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Q,
        remove_extra_nodes: ke
      })
    });
  }
  async function me(Q, ke) {
    const be = ke ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview`;
    return o(be);
  }
  async function Ve(Q, ke = {}) {
    const be = { "Content-Type": "application/json" };
    return ke.authToken && (be["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull`, {
      method: "POST",
      headers: be,
      body: JSON.stringify({
        model_strategy: ke.modelStrategy || "skip",
        force: ke.force || !1,
        resolutions: ke.resolutions
      })
    });
  }
  async function Ze(Q, ke) {
    const be = ke ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview`;
    return o(be);
  }
  async function St(Q, ke = {}) {
    const be = { "Content-Type": "application/json" };
    return ke.authToken && (be["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/push`, {
      method: "POST",
      headers: be,
      body: JSON.stringify({ force: ke.force || !1 })
    });
  }
  async function tt(Q, ke) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ke })
    });
  }
  async function vt(Q) {
    const ke = {
      success: 0,
      failed: []
    };
    for (const be of Q)
      try {
        await W(be), ke.success++;
      } catch (rt) {
        ke.failed.push({
          name: be,
          error: rt instanceof Error ? rt.message : "Unknown error"
        });
      }
    return ke;
  }
  async function qt(Q) {
    var rt;
    const ke = new FormData();
    if (ke.append("file", Q), !((rt = window.app) != null && rt.api))
      throw new Error("ComfyUI API not available");
    const be = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ke
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!be.ok) {
      const At = await be.json().catch(() => ({}));
      throw new Error(At.error || `Preview failed: ${be.status}`);
    }
    return be.json();
  }
  async function ht(Q) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Q)}`
    );
  }
  async function Io(Q, ke, be, rt) {
    var To;
    const At = new FormData();
    if (At.append("file", Q), At.append("name", ke), At.append("model_strategy", be), At.append("torch_backend", rt), !((To = window.app) != null && To.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: At
    });
    if (!cs.ok) {
      const Ro = await cs.json().catch(() => ({}));
      throw new Error(Ro.message || Ro.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function ls() {
    return o("/v2/workspace/import/status");
  }
  async function ys(Q) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Q })
    });
  }
  async function ao(Q, ke, be, rt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Q,
        name: ke,
        model_strategy: be,
        torch_backend: rt
      })
    });
  }
  async function Yt() {
    return o("/v2/setup/status");
  }
  async function Eo(Q) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function js() {
    return o("/v2/setup/initialize_status");
  }
  async function Se(Q) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function se() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function je() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function yt(Q, ke) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Q, save_key: ke })
    });
  }
  async function Vt() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ws(Q) {
    const ke = Q ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Q)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ke);
  }
  async function ks(Q) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function Oe(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function _s(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/stop`, {
      method: "POST"
    });
  }
  async function rs(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/start`, {
      method: "POST"
    });
  }
  async function lo(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/status`);
  }
  async function io(Q) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function Hs(Q = !1) {
    return o(Q ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function le() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function J() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ae(Q) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Ge(Q) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function nt(Q) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function mt() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Jt(Q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/info`);
  }
  async function Ks(Q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances`);
  }
  async function fn(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function mn(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(ke)}/start`, {
      method: "POST"
    });
  }
  async function vn(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(ke)}/stop`, {
      method: "POST"
    });
  }
  async function pn(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(ke)}`, {
      method: "DELETE"
    });
  }
  async function gn(Q) {
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
    listEnvironments: x,
    getEnvironments: M,
    getEnvironmentDetails: P,
    switchEnvironment: T,
    getSwitchProgress: L,
    createEnvironment: V,
    getCreateProgress: B,
    getComfyUIReleases: E,
    deleteEnvironment: I,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: te,
    resolveWorkflow: W,
    installWorkflowDeps: O,
    setModelImportance: j,
    // Model Management
    getEnvironmentModels: X,
    getWorkspaceModels: z,
    getModelDetails: ae,
    openFileLocation: Z,
    addModelSource: _e,
    removeModelSource: $e,
    deleteModel: Le,
    downloadModel: Ue,
    scanWorkspaceModels: Ne,
    getModelsDirectory: qe,
    setModelsDirectory: pe,
    getHuggingFaceRepoInfo: oe,
    getModelsSubdirectories: ce,
    searchHuggingFaceRepos: ue,
    // Settings
    getConfig: Te,
    updateConfig: Pe,
    // Debug/Logs
    getEnvironmentLogs: ze,
    getWorkspaceLogs: N,
    getEnvironmentLogPath: R,
    getWorkspaceLogPath: F,
    getOrchestratorLogs: q,
    getOrchestratorLogPath: ne,
    openFile: re,
    // Node Management
    getNodes: Ce,
    trackNodeAsDev: ie,
    installNode: we,
    queueNodeInstall: he,
    updateNode: Me,
    uninstallNode: Ee,
    // Git Remotes
    getRemotes: ee,
    addRemote: Y,
    removeRemote: De,
    updateRemoteUrl: xe,
    fetchRemote: ye,
    getRemoteSyncStatus: K,
    // Push/Pull
    getPullPreview: me,
    pullFromRemote: Ve,
    getPushPreview: Ze,
    pushToRemote: St,
    validateMerge: tt,
    // Environment Sync
    syncEnvironmentManually: G,
    // Workflow Repair
    repairWorkflowModels: vt,
    // Import Operations
    previewTarballImport: qt,
    previewGitImport: ys,
    validateEnvironmentName: ht,
    executeImport: Io,
    executeGitImport: ao,
    getImportProgress: ls,
    // First-Time Setup
    getSetupStatus: Yt,
    initializeWorkspace: Eo,
    getInitializeProgress: js,
    validatePath: Se,
    // Deploy Operations
    getDeploySummary: se,
    getDataCenters: je,
    testRunPodConnection: yt,
    getNetworkVolumes: Vt,
    getRunPodGpuTypes: ws,
    deployToRunPod: ks,
    getRunPodPods: is,
    terminateRunPodPod: Oe,
    stopRunPodPod: _s,
    startRunPodPod: rs,
    getDeploymentStatus: lo,
    exportDeployPackage: io,
    getStoredRunPodKey: Hs,
    clearRunPodKey: le,
    // Custom Worker Operations
    getCustomWorkers: J,
    addCustomWorker: Ae,
    removeCustomWorker: Ge,
    testWorkerConnection: nt,
    scanForWorkers: mt,
    getWorkerSystemInfo: Jt,
    getWorkerInstances: Ks,
    deployToWorker: fn,
    startWorkerInstance: mn,
    stopWorkerInstance: vn,
    terminateWorkerInstance: pn,
    // Git Authentication
    testGitAuth: gn
  };
}
const Sv = { class: "base-modal-header" }, Iv = {
  key: 0,
  class: "base-modal-title"
}, Ev = { class: "base-modal-body" }, Tv = {
  key: 0,
  class: "base-modal-loading"
}, Rv = {
  key: 1,
  class: "base-modal-error"
}, Pv = {
  key: 0,
  class: "base-modal-footer"
}, Mv = /* @__PURE__ */ fe({
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
    return Je(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Gs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), D(kt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ie(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = lt(() => {
          }, ["stop"]))
        }, [
          t("div", Sv, [
            He(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Iv, f(e.title), 1)) : y("", !0)
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
          t("div", Ev, [
            e.loading ? (n(), i("div", Tv, "Loading...")) : e.error ? (n(), i("div", Rv, f(e.error), 1)) : He(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Pv, [
            He(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), ct = /* @__PURE__ */ ge(Mv, [["__scopeId", "data-v-8dab1081"]]), Dv = ["type", "disabled"], Lv = {
  key: 0,
  class: "spinner"
}, Av = /* @__PURE__ */ fe({
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
      class: Ie(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Lv)) : y("", !0),
      He(s.$slots, "default", {}, void 0)
    ], 10, Dv));
  }
}), Re = /* @__PURE__ */ ge(Av, [["__scopeId", "data-v-f3452606"]]), Ov = { class: "commit-list" }, Nv = /* @__PURE__ */ fe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", Ov, [
      He(s.$slots, "default", {}, void 0)
    ]));
  }
}), Er = /* @__PURE__ */ ge(Nv, [["__scopeId", "data-v-8c5ee761"]]), Uv = { class: "commit-hash" }, zv = /* @__PURE__ */ fe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = U(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Uv, f(o.value), 1));
  }
}), Tr = /* @__PURE__ */ ge(zv, [["__scopeId", "data-v-7c333cc6"]]), Fv = { class: "commit-message" }, Vv = { class: "commit-date" }, Bv = /* @__PURE__ */ fe({
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
      class: Ie(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      S(Tr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Fv, f(e.message), 1),
      t("span", Vv, f(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = lt(() => {
        }, ["stop"]))
      }, [
        He(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rr = /* @__PURE__ */ ge(Bv, [["__scopeId", "data-v-dd7c621b"]]), Wv = { class: "header-info" }, Gv = { class: "branch-name" }, jv = {
  key: 0,
  class: "current-badge"
}, Hv = { class: "branch-meta" }, Kv = { key: 0 }, qv = {
  key: 0,
  class: "meta-note"
}, Yv = {
  key: 0,
  class: "loading"
}, Jv = {
  key: 1,
  class: "empty-state"
}, Qv = /* @__PURE__ */ fe({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = Xe(), a = _([]), l = _(!1), r = _(!0);
    return Je(async () => {
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
        t("div", Wv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Gv, f(e.branchName), 1),
          e.isCurrent ? (n(), i("span", jv, "CURRENT")) : y("", !0)
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
        t("div", Hv, [
          r.value ? (n(), i("span", Kv, "Loading...")) : (n(), i(H, { key: 1 }, [
            t("span", null, f(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", qv, "(showing first " + f(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", Yv, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", Jv, " No commits found on this branch ")) : (n(), D(Er, {
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
        e.isCurrent ? y("", !0) : (n(), D(Re, {
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
}), Xv = /* @__PURE__ */ ge(Qv, [["__scopeId", "data-v-2e5437cc"]]), Zv = {
  key: 2,
  class: "branch-list"
}, ep = /* @__PURE__ */ fe({
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
        })) : (n(), i("div", Zv, [
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
                onClick: lt((p) => o("switch", w.name), ["stop"])
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
        l.value ? (n(), D(Xv, {
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
}), tp = /* @__PURE__ */ ge(ep, [["__scopeId", "data-v-eefdcb00"]]), sp = /* @__PURE__ */ fe({
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
}), op = /* @__PURE__ */ ge(sp, [["__scopeId", "data-v-62a5d9da"]]);
async function $n(e, s) {
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
function np() {
  async function e() {
    try {
      return await $n("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await $n("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await $n("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await $n("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const ap = {
  key: 0,
  class: "base-title-count"
}, lp = /* @__PURE__ */ fe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), D(sl(`h${e.level}`), {
      class: Ie(["base-title", e.variant])
    }, {
      default: h(() => [
        He(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", ap, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qo = /* @__PURE__ */ ge(lp, [["__scopeId", "data-v-5a01561d"]]), ip = ["value", "disabled"], rp = {
  key: 0,
  value: "",
  disabled: ""
}, cp = ["value"], up = {
  key: 0,
  class: "base-select-error"
}, dp = /* @__PURE__ */ fe({
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
      class: Ie(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ie(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", rp, f(e.placeholder), 1)) : y("", !0),
        (n(!0), i(H, null, ve(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, f(o(r)), 9, cp))), 128))
      ], 42, ip),
      e.error ? (n(), i("span", up, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), fp = /* @__PURE__ */ ge(dp, [["__scopeId", "data-v-4996bfe0"]]), mp = { class: "popover-header" }, vp = { class: "popover-title" }, pp = { class: "popover-content" }, gp = {
  key: 0,
  class: "popover-actions"
}, hp = /* @__PURE__ */ fe({
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
          onClick: o[1] || (o[1] = lt(() => {
          }, ["stop"]))
        }, [
          t("div", mp, [
            t("h4", vp, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", pp, [
            He(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", gp, [
            He(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ ge(hp, [["__scopeId", "data-v-42815ace"]]), yp = { class: "detail-section" }, wp = {
  key: 0,
  class: "empty-message"
}, kp = { class: "model-header" }, _p = { class: "model-name" }, bp = { class: "model-details" }, $p = { class: "model-row" }, Cp = { class: "model-row" }, xp = { class: "label" }, Sp = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ip = { class: "node-list" }, Ep = ["onClick"], Tp = {
  key: 1,
  class: "model-row"
}, Rp = { class: "value" }, Pp = {
  key: 2,
  class: "model-row"
}, Mp = { class: "value error" }, Dp = {
  key: 0,
  class: "model-actions"
}, Lp = { class: "detail-section" }, Ap = {
  key: 0,
  class: "empty-message"
}, Op = { class: "node-name" }, Np = {
  key: 0,
  class: "node-version"
}, Up = /* @__PURE__ */ fe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c } = Xe(), u = _(null), d = _(!1), m = _(null), v = _(!1), g = _({}), w = _(!1), p = _(/* @__PURE__ */ new Set()), k = [
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
    return Je(T), (E, I) => (n(), i(H, null, [
      S(ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: I[4] || (I[4] = (A) => a("close"))
      }, {
        body: h(() => [
          u.value ? (n(), i(H, { key: 0 }, [
            t("section", yp, [
              S(qo, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (n(), i("div", wp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, ve(u.value.models, (A) => {
                var te;
                return n(), i("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  t("div", kp, [
                    I[6] || (I[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", _p, f(A.filename), 1)
                  ]),
                  t("div", bp, [
                    t("div", $p, [
                      I[7] || (I[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ie(["value", C(A.status)])
                      }, f(b(A.status)), 3)
                    ]),
                    t("div", Cp, [
                      t("span", xp, [
                        I[8] || (I[8] = $(" Importance: ", -1)),
                        S(Ir, {
                          size: 14,
                          title: "About importance levels",
                          onClick: I[0] || (I[0] = (W) => w.value = !0)
                        })
                      ]),
                      S(fp, {
                        "model-value": g.value[A.filename] || A.importance,
                        options: k,
                        "onUpdate:modelValue": (W) => L(A.filename, W)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (n(), i("div", Sp, [
                      I[9] || (I[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Ip, [
                        (n(!0), i(H, null, ve(x(A), (W, O) => (n(), i("div", {
                          key: `${W.node_id}-${O}`,
                          class: "node-reference"
                        }, f(W.node_type) + " (Node #" + f(W.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (W) => P(A.hash || A.filename)
                        }, f(M(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, Ep)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    A.size_mb ? (n(), i("div", Tp, [
                      I[10] || (I[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Rp, f(A.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    A.has_category_mismatch ? (n(), i("div", Pp, [
                      I[13] || (I[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Mp, [
                        I[11] || (I[11] = $(" In ", -1)),
                        t("code", null, f(A.actual_category) + "/", 1),
                        I[12] || (I[12] = $(" but loader needs ", -1)),
                        t("code", null, f((te = A.expected_categories) == null ? void 0 : te[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  A.status !== "available" ? (n(), i("div", Dp, [
                    A.status === "downloadable" ? (n(), D(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: I[1] || (I[1] = (W) => a("resolve"))
                    }, {
                      default: h(() => [...I[14] || (I[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (n(), D(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => V(A.file_path)
                    }, {
                      default: h(() => [...I[15] || (I[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (n(), D(Re, {
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
            t("section", Lp, [
              S(qo, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (n(), i("div", Ap, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, ve(u.value.nodes, (A) => (n(), i("div", {
                key: A.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ie(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, f(A.status === "installed" ? "✓" : "✕"), 3),
                t("span", Op, f(A.name), 1),
                A.version ? (n(), i("span", Np, "v" + f(A.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          S(Re, {
            variant: "secondary",
            onClick: I[3] || (I[3] = (A) => a("close"))
          }, {
            default: h(() => [...I[17] || (I[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (n(), D(Re, {
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
}), zp = /* @__PURE__ */ ge(Up, [["__scopeId", "data-v-668728e6"]]), Ye = Ws({
  items: [],
  status: "idle"
});
let vs = null;
function Pr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function wa(e) {
  return Ye.items.find((s) => s.id === e);
}
async function vo() {
  if (Ye.status === "downloading") return;
  const e = Ye.items.find((s) => s.status === "queued");
  if (!e) {
    Ye.status = "idle";
    return;
  }
  Ye.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Fp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Ye.status = "idle", vo();
  }
}
async function Fp(e) {
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
async function Vp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Ye.items.some((l) => l.url === o.url && l.filename === o.filename))
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
      Ye.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function xo() {
  function e(b) {
    for (const x of b) {
      if (Ye.items.some(
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
      Ye.items.push(P);
    }
    Ye.status === "idle" && vo();
  }
  async function s(b) {
    const x = wa(b);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), x.status = "failed", x.error = "Cancelled by user", Ye.status = "idle", vo();
      } else if (x.status === "queued") {
        const M = Ye.items.findIndex((P) => P.id === b);
        M >= 0 && Ye.items.splice(M, 1);
      }
    }
  }
  function o(b) {
    const x = wa(b);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, Ye.status === "idle" && vo());
  }
  function a(b) {
    const x = wa(b);
    !x || x.status !== "paused" || (x.status = "queued", Ye.status === "idle" && vo());
  }
  function l() {
    const b = Ye.items.filter((x) => x.status === "paused");
    for (const x of b)
      x.status = "queued";
    Ye.status === "idle" && vo();
  }
  function r(b) {
    const x = Ye.items.findIndex((M) => M.id === b);
    x >= 0 && ["completed", "failed", "paused"].includes(Ye.items[x].status) && Ye.items.splice(x, 1);
  }
  function c() {
    Ye.items = Ye.items.filter((b) => b.status !== "completed");
  }
  function u() {
    Ye.items = Ye.items.filter((b) => b.status !== "failed");
  }
  const d = U(
    () => Ye.items.find((b) => b.status === "downloading")
  ), m = U(
    () => Ye.items.filter((b) => b.status === "queued")
  ), v = U(
    () => Ye.items.filter((b) => b.status === "completed")
  ), g = U(
    () => Ye.items.filter((b) => b.status === "failed")
  ), w = U(
    () => Ye.items.filter((b) => b.status === "paused")
  ), p = U(() => Ye.items.length > 0), k = U(
    () => Ye.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = U(
    () => Ye.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Ln(Ye),
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
    loadPendingDownloads: Vp
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
        const { done: te, value: W } = await E.read();
        if (te) break;
        A += I.decode(W, { stream: !0 });
        const O = A.split(`

`);
        A = O.pop() || "";
        for (const j of O) {
          if (!j.trim()) continue;
          const X = j.split(`
`);
          let z = "", ae = "";
          for (const Z of X)
            Z.startsWith("event: ") ? z = Z.slice(7) : Z.startsWith("data: ") && (ae = Z.slice(6));
          if (ae)
            try {
              const Z = JSON.parse(ae);
              b(z, Z);
            } catch (Z) {
              console.warn("Failed to parse SSE event:", Z);
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
const Bp = { class: "resolution-stepper" }, Wp = { class: "stepper-header" }, Gp = ["onClick"], jp = {
  key: 0,
  class: "step-icon"
}, Hp = {
  key: 1,
  class: "step-number"
}, Kp = { class: "step-label" }, qp = {
  key: 0,
  class: "step-connector"
}, Yp = { class: "stepper-content" }, Jp = /* @__PURE__ */ fe({
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
    return (m, v) => (n(), i("div", Bp, [
      t("div", Wp, [
        (n(!0), i(H, null, ve(e.steps, (g, w) => (n(), i("div", {
          key: g.id,
          class: Ie(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": r(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Ie(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (n(), i("span", jp, "✓")) : (n(), i("span", Hp, f(w + 1), 1))
          ], 2),
          t("div", Kp, f(g.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", qp)) : y("", !0)
        ], 10, Gp))), 128))
      ]),
      t("div", Yp, [
        He(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Qp = /* @__PURE__ */ ge(Jp, [["__scopeId", "data-v-2a7b3af8"]]), Xp = /* @__PURE__ */ fe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Ie(["confidence-badge", a.value, e.size])
    }, f(l.value), 3));
  }
}), Wn = /* @__PURE__ */ ge(Xp, [["__scopeId", "data-v-17ec4b80"]]), Zp = { class: "node-info" }, eg = { class: "node-info-text" }, tg = { class: "item-body" }, sg = {
  key: 0,
  class: "resolved-state"
}, og = {
  key: 1,
  class: "multiple-options"
}, ng = { class: "options-list" }, ag = ["onClick"], lg = ["name", "value", "checked", "onChange"], ig = { class: "option-content" }, rg = { class: "option-header" }, cg = { class: "option-package-id" }, ug = {
  key: 0,
  class: "option-title"
}, dg = { class: "option-meta" }, fg = {
  key: 0,
  class: "installed-badge"
}, mg = { class: "action-buttons" }, vg = {
  key: 2,
  class: "unresolved"
}, pg = {
  key: 0,
  class: "searching-state"
}, gg = { class: "options-list" }, hg = ["onClick"], yg = ["name", "value"], wg = { class: "option-content" }, kg = { class: "option-header" }, _g = { class: "option-package-id" }, bg = {
  key: 0,
  class: "option-description"
}, $g = { class: "option-meta" }, Cg = {
  key: 0,
  class: "installed-badge"
}, xg = {
  key: 2,
  class: "unresolved-message"
}, Sg = { class: "action-buttons" }, Ig = /* @__PURE__ */ fe({
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
      class: Ie(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Zp, [
        t("span", eg, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ie(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", tg, [
        r.value ? (n(), i("div", sg, [
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
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", og, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", ng, [
            (n(!0), i(H, null, ve(e.options, (v, g) => (n(), i("label", {
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
              }, null, 40, lg),
              t("div", ig, [
                t("div", rg, [
                  t("span", cg, f(v.package_id), 1),
                  S(Wn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (n(), i("div", ug, f(v.title), 1)) : y("", !0),
                t("div", dg, [
                  v.is_installed ? (n(), i("span", fg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, ag))), 128))
          ]),
          t("div", mg, [
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
        ])) : (n(), i("div", vg, [
          e.isSearching ? (n(), i("div", pg, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(H, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", gg, [
              (n(!0), i(H, null, ve(e.searchResults.slice(0, 5), (v, g) => (n(), i("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, yg),
                t("div", wg, [
                  t("div", kg, [
                    t("span", _g, f(v.package_id), 1),
                    S(Wn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (n(), i("div", bg, f(l(v.description)), 1)) : y("", !0),
                  t("div", $g, [
                    v.is_installed ? (n(), i("span", Cg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, hg))), 128))
            ])
          ], 64)) : (n(), i("div", xg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Sg, [
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
}), Eg = /* @__PURE__ */ ge(Ig, [["__scopeId", "data-v-c2997d1d"]]), Tg = { class: "item-navigator" }, Rg = { class: "nav-item-info" }, Pg = ["title"], Mg = { class: "nav-controls" }, Dg = { class: "nav-arrows" }, Lg = ["disabled"], Ag = ["disabled"], Og = { class: "nav-position" }, Ng = /* @__PURE__ */ fe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Tg, [
      t("div", Rg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Pg)
      ]),
      t("div", Mg, [
        t("div", Dg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Lg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Ag)
        ]),
        t("span", Og, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Dr = /* @__PURE__ */ ge(Ng, [["__scopeId", "data-v-74af7920"]]), Ug = ["type", "value", "placeholder", "disabled"], zg = {
  key: 0,
  class: "base-input-error"
}, Fg = /* @__PURE__ */ fe({
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
      class: Ie(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ie(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = Ht((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Ht((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ug),
      e.error ? (n(), i("span", zg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), xt = /* @__PURE__ */ ge(Fg, [["__scopeId", "data-v-9ba02cdc"]]), Vg = { class: "node-resolution-step" }, Bg = {
  key: 0,
  class: "auto-resolved-section"
}, Wg = { class: "section-header" }, Gg = { class: "stat-badge" }, jg = { class: "resolved-packages-list" }, Hg = { class: "package-info" }, Kg = { class: "package-id" }, qg = { class: "node-count" }, Yg = { class: "package-actions" }, Jg = {
  key: 0,
  class: "status-badge install"
}, Qg = {
  key: 1,
  class: "status-badge skip"
}, Xg = ["onClick"], Zg = {
  key: 1,
  class: "section-divider"
}, eh = { class: "step-header" }, th = { class: "stat-badge" }, sh = {
  key: 1,
  class: "step-body"
}, oh = {
  key: 3,
  class: "empty-state"
}, nh = { class: "node-modal-body" }, ah = { class: "node-search-results-container" }, lh = {
  key: 0,
  class: "node-search-results"
}, ih = ["onClick"], rh = { class: "node-result-header" }, ch = { class: "node-result-package-id" }, uh = {
  key: 0,
  class: "node-result-description"
}, dh = {
  key: 1,
  class: "node-empty-state"
}, fh = {
  key: 2,
  class: "node-empty-state"
}, mh = {
  key: 3,
  class: "node-empty-state"
}, vh = { class: "node-manual-entry-modal" }, ph = { class: "node-modal-body" }, gh = { class: "node-modal-actions" }, hh = /* @__PURE__ */ fe({
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
      k.value && Z(), k.value = !1;
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
    function te() {
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
      b.value && (a("mark-optional", b.value.node_type), gt(() => te()));
    }
    function O() {
      b.value && (a("skip", b.value.node_type), gt(() => te()));
    }
    function j(oe) {
      b.value && (a("option-selected", b.value.node_type, oe), gt(() => te()));
    }
    function X() {
      b.value && a("clear-choice", b.value.node_type);
    }
    function z() {
      b.value && (d.value = b.value.node_type, v.value = M.value, c.value = !0, Ue(d.value));
    }
    function ae() {
      m.value = "", u.value = !0;
    }
    function Z() {
      c.value = !1, d.value = "", v.value = [];
    }
    function _e() {
      u.value = !1, m.value = "";
    }
    let $e = null;
    function Le() {
      $e && clearTimeout($e), $e = setTimeout(() => {
        Ue(d.value);
      }, 300);
    }
    async function Ue(oe) {
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
    function Ne(oe) {
      b.value && (a("manual-entry", b.value.node_type, oe.package_id), Z(), gt(() => te()));
    }
    function qe(oe) {
      b.value && (a("manual-entry", b.value.node_type, oe.package_id), gt(() => te()));
    }
    function pe() {
      !b.value || !m.value.trim() || (a("manual-entry", b.value.node_type, m.value.trim()), _e(), gt(() => te()));
    }
    return (oe, ce) => {
      var ue, Te;
      return n(), i("div", Vg, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Bg, [
          t("div", Wg, [
            ce[6] || (ce[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Gg, f(L.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", jg, [
            (n(!0), i(H, null, ve(e.autoResolvedPackages, (Pe) => (n(), i("div", {
              key: Pe.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Hg, [
                t("code", Kg, f(Pe.package_id), 1),
                t("span", qg, f(Pe.node_types_count) + " node type" + f(Pe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Yg, [
                V(Pe.package_id) ? (n(), i("span", Qg, " SKIPPED ")) : (n(), i("span", Jg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => B(Pe.package_id)
                }, f(V(Pe.package_id) ? "Include" : "Skip"), 9, Xg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", Zg)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(H, { key: 2 }, [
          t("div", eh, [
            ce[7] || (ce[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", th, f(x.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (n(), D(Dr, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: ce[0] || (ce[0] = (Pe) => A(r.value - 1)),
            onNext: ce[1] || (ce[1] = (Pe) => A(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (n(), i("div", sh, [
            S(Eg, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ue = b.value.options) != null && ue.length),
              options: b.value.options,
              choice: (Te = e.nodeChoices) == null ? void 0 : Te.get(b.value.node_type),
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
              onSearchResultSelected: qe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", oh, [...ce[8] || (ce[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), D(kt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ce[4] || (ce[4] = lt((Pe) => k.value = !0, ["self"])),
            onMouseup: lt(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: ce[3] || (ce[3] = (Pe) => k.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                ce[9] || (ce[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", nh, [
                S(xt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ce[2] || (ce[2] = (Pe) => d.value = Pe),
                  placeholder: "Search by node type, package name...",
                  onInput: Le
                }, null, 8, ["modelValue"]),
                t("div", ah, [
                  v.value.length > 0 ? (n(), i("div", lh, [
                    (n(!0), i(H, null, ve(v.value, (Pe) => (n(), i("div", {
                      key: Pe.package_id,
                      class: "node-search-result-item",
                      onClick: (ze) => Ne(Pe)
                    }, [
                      t("div", rh, [
                        t("code", ch, f(Pe.package_id), 1),
                        Pe.match_confidence ? (n(), D(Wn, {
                          key: 0,
                          confidence: Pe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Pe.description ? (n(), i("div", uh, f(Pe.description), 1)) : y("", !0)
                    ], 8, ih))), 128))
                  ])) : g.value ? (n(), i("div", dh, "Searching...")) : d.value ? (n(), i("div", fh, 'No packages found matching "' + f(d.value) + '"', 1)) : (n(), i("div", mh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), D(kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: lt(_e, ["self"])
          }, [
            t("div", vh, [
              t("div", { class: "node-modal-header" }, [
                ce[10] || (ce[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: _e
                }, "✕")
              ]),
              t("div", ph, [
                S(xt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ce[5] || (ce[5] = (Pe) => m.value = Pe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", gh, [
                  S(Re, {
                    variant: "secondary",
                    onClick: _e
                  }, {
                    default: h(() => [...ce[11] || (ce[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Re, {
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
}), yh = /* @__PURE__ */ ge(hh, [["__scopeId", "data-v-6d7f8125"]]), wh = { class: "node-info" }, kh = { class: "node-info-text" }, _h = { class: "item-body" }, bh = {
  key: 0,
  class: "resolved-state"
}, $h = {
  key: 1,
  class: "multiple-options"
}, Ch = { class: "options-list" }, xh = ["onClick"], Sh = ["name", "value", "checked", "onChange"], Ih = { class: "option-content" }, Eh = { class: "option-header" }, Th = { class: "option-filename" }, Rh = { class: "option-meta" }, Ph = { class: "option-size" }, Mh = { class: "option-category" }, Dh = { class: "option-path" }, Lh = { class: "action-buttons" }, Ah = {
  key: 2,
  class: "unresolved"
}, Oh = { class: "action-buttons" }, Nh = /* @__PURE__ */ fe({
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
      class: Ie(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", wh, [
        t("span", kh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ie(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", _h, [
        l.value ? (n(), i("div", bh, [
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
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", $h, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Ch, [
            (n(!0), i(H, null, ve(e.options, (v, g) => (n(), i("label", {
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
              }, null, 40, Sh),
              t("div", Ih, [
                t("div", Eh, [
                  t("span", Th, f(v.model.filename), 1),
                  S(Wn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Rh, [
                  t("span", Ph, f(u(v.model.size)), 1),
                  t("span", Mh, f(v.model.category), 1)
                ]),
                t("div", Dh, f(v.model.relative_path), 1)
              ])
            ], 10, xh))), 128))
          ]),
          t("div", Lh, [
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
        ])) : (n(), i("div", Ah, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Oh, [
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
}), Uh = /* @__PURE__ */ ge(Nh, [["__scopeId", "data-v-8a82fefa"]]), zh = { class: "model-resolution-step" }, Fh = { class: "step-header" }, Vh = { class: "step-info" }, Bh = { class: "step-title" }, Wh = { class: "step-description" }, Gh = { class: "stat-badge" }, jh = {
  key: 1,
  class: "step-body"
}, Hh = {
  key: 2,
  class: "empty-state"
}, Kh = { class: "model-search-modal" }, qh = { class: "model-modal-body" }, Yh = {
  key: 0,
  class: "model-search-results"
}, Jh = ["onClick"], Qh = { class: "model-result-header" }, Xh = { class: "model-result-filename" }, Zh = { class: "model-result-meta" }, ey = { class: "model-result-category" }, ty = { class: "model-result-size" }, sy = {
  key: 0,
  class: "model-result-path"
}, oy = {
  key: 1,
  class: "model-no-results"
}, ny = {
  key: 2,
  class: "model-searching"
}, ay = { class: "model-download-url-modal" }, ly = { class: "model-modal-body" }, iy = { class: "model-input-group" }, ry = { class: "model-input-group" }, cy = { class: "model-modal-actions" }, uy = /* @__PURE__ */ fe({
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
    function a(Z) {
      var _e;
      return Z && ((_e = o[Z]) == null ? void 0 : _e[0]) || null;
    }
    const l = e, r = s, c = _(0), u = _(!1), d = _(!1), m = _(""), v = _(""), g = _(""), w = _([]), p = _(!1), k = U(() => l.models[c.value]), C = U(() => l.models.some((Z) => Z.is_download_intent)), b = U(() => l.models.filter(
      (Z) => l.modelChoices.has(Z.filename) || Z.is_download_intent
    ).length), x = U(() => {
      var _e;
      if (!k.value) return "";
      const Z = a((_e = k.value.reference) == null ? void 0 : _e.node_type);
      return Z ? `${Z}/${k.value.filename}` : "";
    }), M = U(() => {
      var _e;
      if (!k.value) return "not-found";
      const Z = l.modelChoices.get(k.value.filename);
      if (Z)
        switch (Z.action) {
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
      return k.value.is_download_intent ? "download" : (_e = k.value.options) != null && _e.length ? "ambiguous" : "not-found";
    }), P = U(() => {
      var _e, $e;
      if (!k.value) return;
      const Z = l.modelChoices.get(k.value.filename);
      if (Z)
        switch (Z.action) {
          case "select":
            return (_e = Z.selected_model) != null && _e.filename ? `→ ${Z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : ($e = k.value.options) != null && $e.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function T(Z) {
      Z >= 0 && Z < l.models.length && (c.value = Z);
    }
    function L() {
      var Z;
      for (let _e = c.value + 1; _e < l.models.length; _e++) {
        const $e = l.models[_e];
        if (!$e.is_download_intent && !((Z = l.modelChoices) != null && Z.has($e.filename))) {
          T(_e);
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
    function E(Z) {
      k.value && (r("option-selected", k.value.filename, Z), gt(() => L()));
    }
    function I() {
      k.value && r("clear-choice", k.value.filename);
    }
    function A() {
      k.value && (m.value = k.value.filename, u.value = !0);
    }
    function te() {
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
    function X(Z) {
      k.value && (W(), gt(() => L()));
    }
    function z() {
      !k.value || !v.value.trim() || (r("download-url", k.value.filename, v.value.trim(), g.value.trim() || void 0), O(), gt(() => L()));
    }
    function ae(Z) {
      if (!Z) return "Unknown";
      const _e = Z / (1024 * 1024 * 1024);
      return _e >= 1 ? `${_e.toFixed(2)} GB` : `${(Z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Z, _e) => {
      var $e, Le, Ue;
      return n(), i("div", zh, [
        t("div", Fh, [
          t("div", Vh, [
            t("h3", Bh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Wh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Gh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        k.value ? (n(), D(Dr, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: _e[0] || (_e[0] = (Ne) => T(c.value - 1)),
          onNext: _e[1] || (_e[1] = (Ne) => T(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (n(), i("div", jh, [
          S(Uh, {
            filename: k.value.filename,
            "node-type": (($e = k.value.reference) == null ? void 0 : $e.node_type) || "Unknown",
            "has-multiple-options": !!((Le = k.value.options) != null && Le.length),
            options: k.value.options,
            choice: (Ue = e.modelChoices) == null ? void 0 : Ue.get(k.value.filename),
            status: M.value,
            "status-label": P.value,
            onMarkOptional: V,
            onSkip: B,
            onDownloadUrl: te,
            onSearch: A,
            onOptionSelected: E,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Hh, [..._e[5] || (_e[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), D(kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: lt(W, ["self"])
          }, [
            t("div", Kh, [
              t("div", { class: "model-modal-header" }, [
                _e[6] || (_e[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: W
                }, "✕")
              ]),
              t("div", qh, [
                S(xt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": _e[2] || (_e[2] = (Ne) => m.value = Ne),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", Yh, [
                  (n(!0), i(H, null, ve(w.value, (Ne) => (n(), i("div", {
                    key: Ne.hash,
                    class: "model-search-result-item",
                    onClick: (qe) => X()
                  }, [
                    t("div", Qh, [
                      t("code", Xh, f(Ne.filename), 1)
                    ]),
                    t("div", Zh, [
                      t("span", ey, f(Ne.category), 1),
                      t("span", ty, f(ae(Ne.size)), 1)
                    ]),
                    Ne.relative_path ? (n(), i("div", sy, f(Ne.relative_path), 1)) : y("", !0)
                  ], 8, Jh))), 128))
                ])) : m.value && !p.value ? (n(), i("div", oy, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (n(), i("div", ny, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), D(kt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: lt(O, ["self"])
          }, [
            t("div", ay, [
              t("div", { class: "model-modal-header" }, [
                _e[7] || (_e[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              t("div", ly, [
                t("div", iy, [
                  _e[8] || (_e[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(xt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": _e[3] || (_e[3] = (Ne) => v.value = Ne),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", ry, [
                  _e[9] || (_e[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(xt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": _e[4] || (_e[4] = (Ne) => g.value = Ne),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", cy, [
                  S(Re, {
                    variant: "secondary",
                    onClick: O
                  }, {
                    default: h(() => [..._e[10] || (_e[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: z
                  }, {
                    default: h(() => [..._e[11] || (_e[11] = [
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
}), dy = /* @__PURE__ */ ge(uy, [["__scopeId", "data-v-5c700bfa"]]), fy = { class: "applying-step" }, my = {
  key: 0,
  class: "phase-content"
}, vy = {
  key: 1,
  class: "phase-content"
}, py = { class: "phase-description" }, gy = { class: "overall-progress" }, hy = { class: "progress-bar" }, yy = { class: "progress-label" }, wy = { class: "install-list" }, ky = { class: "install-icon" }, _y = { key: 0 }, by = {
  key: 1,
  class: "spinner"
}, $y = { key: 2 }, Cy = { key: 3 }, xy = {
  key: 0,
  class: "install-error"
}, Sy = {
  key: 2,
  class: "phase-content"
}, Iy = { class: "phase-header" }, Ey = { class: "phase-title" }, Ty = { class: "completion-summary" }, Ry = {
  key: 0,
  class: "summary-item success"
}, Py = { class: "summary-text" }, My = {
  key: 1,
  class: "summary-item error"
}, Dy = { class: "summary-text" }, Ly = {
  key: 2,
  class: "failed-list"
}, Ay = { class: "failed-node-id" }, Oy = { class: "failed-error" }, Ny = {
  key: 4,
  class: "summary-item success"
}, Uy = {
  key: 5,
  class: "restart-prompt"
}, zy = {
  key: 3,
  class: "phase-content error"
}, Fy = { class: "error-message" }, Vy = /* @__PURE__ */ fe({
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
      return n(), i("div", fy, [
        e.progress.phase === "resolving" ? (n(), i("div", my, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", vy, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", py, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", gy, [
            t("div", hy, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", yy, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", wy, [
            (n(!0), i(H, null, ve(e.progress.nodesToInstall, (p, k) => (n(), i("div", {
              key: p,
              class: Ie(["install-item", r(p, k)])
            }, [
              t("span", ky, [
                r(p, k) === "pending" ? (n(), i("span", _y, "○")) : r(p, k) === "installing" ? (n(), i("span", by, "◌")) : r(p, k) === "complete" ? (n(), i("span", $y, "✓")) : r(p, k) === "failed" ? (n(), i("span", Cy, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (n(), i("span", xy, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Sy, [
          t("div", Iy, [
            t("span", {
              class: Ie(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", Ey, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Ty, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Ry, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", Py, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", My, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", Dy, f(a.value.length) + " package" + f(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Ly, [
              (n(!0), i(H, null, ve(a.value, (p) => (n(), i("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", Ay, f(p.node_id), 1),
                t("span", Oy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", Ny, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Uy, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", zy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", Fy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), By = /* @__PURE__ */ ge(Vy, [["__scopeId", "data-v-5efaae58"]]), Wy = {
  key: 0,
  class: "loading-state"
}, Gy = {
  key: 1,
  class: "wizard-content"
}, jy = {
  key: 0,
  class: "step-content"
}, Hy = { class: "analysis-summary" }, Ky = { class: "analysis-header" }, qy = { class: "summary-description" }, Yy = { class: "stats-grid" }, Jy = { class: "stat-card" }, Qy = { class: "stat-items" }, Xy = {
  key: 0,
  class: "stat-item success"
}, Zy = { class: "stat-count" }, e1 = {
  key: 1,
  class: "stat-item info"
}, t1 = { class: "stat-count" }, s1 = {
  key: 2,
  class: "stat-item warning"
}, o1 = { class: "stat-count" }, n1 = {
  key: 3,
  class: "stat-item error"
}, a1 = { class: "stat-count" }, l1 = { class: "stat-card" }, i1 = { class: "stat-items" }, r1 = { class: "stat-item success" }, c1 = { class: "stat-count" }, u1 = {
  key: 0,
  class: "stat-item info"
}, d1 = { class: "stat-count" }, f1 = {
  key: 1,
  class: "stat-item warning"
}, m1 = { class: "stat-count" }, v1 = {
  key: 2,
  class: "stat-item warning"
}, p1 = { class: "stat-count" }, g1 = {
  key: 3,
  class: "stat-item error"
}, h1 = { class: "stat-count" }, y1 = {
  key: 0,
  class: "status-message warning"
}, w1 = { class: "status-text" }, k1 = {
  key: 1,
  class: "status-message info"
}, _1 = { class: "status-text" }, b1 = {
  key: 2,
  class: "status-message info"
}, $1 = { class: "status-text" }, C1 = {
  key: 3,
  class: "status-message warning"
}, x1 = { class: "status-text" }, S1 = {
  key: 4,
  class: "status-message success"
}, I1 = {
  key: 5,
  class: "category-mismatch-section"
}, E1 = { class: "mismatch-list" }, T1 = { class: "mismatch-path" }, R1 = { class: "mismatch-target" }, P1 = {
  key: 3,
  class: "step-content"
}, M1 = { class: "review-summary" }, D1 = { class: "review-stats" }, L1 = { class: "review-stat" }, A1 = { class: "stat-value" }, O1 = { class: "review-stat" }, N1 = { class: "stat-value" }, U1 = { class: "review-stat" }, z1 = { class: "stat-value" }, F1 = { class: "review-stat" }, V1 = { class: "stat-value" }, B1 = {
  key: 0,
  class: "review-section"
}, W1 = { class: "section-title" }, G1 = { class: "review-items" }, j1 = { class: "item-name" }, H1 = { class: "item-choice" }, K1 = {
  key: 0,
  class: "choice-badge install"
}, q1 = {
  key: 1,
  class: "choice-badge skip"
}, Y1 = {
  key: 1,
  class: "review-section"
}, J1 = { class: "section-title" }, Q1 = { class: "review-items" }, X1 = { class: "item-name" }, Z1 = { class: "item-choice" }, e0 = {
  key: 0,
  class: "choice-badge install"
}, t0 = {
  key: 1,
  class: "choice-badge optional"
}, s0 = {
  key: 2,
  class: "choice-badge skip"
}, o0 = {
  key: 1,
  class: "choice-badge pending"
}, n0 = {
  key: 2,
  class: "review-section"
}, a0 = { class: "section-title" }, l0 = { class: "review-items download-details" }, i0 = { class: "download-info" }, r0 = { class: "item-name" }, c0 = { class: "download-meta" }, u0 = { class: "download-path" }, d0 = ["title"], f0 = {
  key: 3,
  class: "review-section"
}, m0 = { class: "section-title" }, v0 = { class: "review-items" }, p0 = { class: "item-name" }, g0 = { class: "item-choice" }, h0 = {
  key: 0,
  class: "choice-badge install"
}, y0 = {
  key: 1,
  class: "choice-badge download"
}, w0 = {
  key: 2,
  class: "choice-badge optional"
}, k0 = {
  key: 3,
  class: "choice-badge skip"
}, _0 = {
  key: 4,
  class: "choice-badge skip"
}, b0 = {
  key: 1,
  class: "choice-badge download"
}, $0 = {
  key: 2,
  class: "choice-badge pending"
}, C0 = {
  key: 4,
  class: "no-choices"
}, x0 = /* @__PURE__ */ fe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Mr(), { loadPendingDownloads: v } = xo(), { openFileLocation: g } = Xe(), w = _(null), p = _(!1), k = _(!1), C = _(null), b = _("analysis"), x = _([]), M = _(/* @__PURE__ */ new Map()), P = _(/* @__PURE__ */ new Map()), T = _(/* @__PURE__ */ new Set()), L = U(() => {
      const K = [
        { id: "analysis", label: "Analysis" }
      ];
      return (B.value || A.value) && K.push({ id: "nodes", label: "Nodes" }), E.value && K.push({ id: "models", label: "Models" }), K.push({ id: "review", label: "Review" }), b.value === "applying" && K.push({ id: "applying", label: "Applying" }), K;
    }), V = U(() => w.value ? w.value.stats.needs_user_input : !1), B = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), E = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), I = U(() => w.value ? w.value.stats.download_intents > 0 : !1), A = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), te = U(() => w.value ? w.value.nodes.resolved.length : 0), W = U(() => w.value ? w.value.models.resolved.filter((K) => K.has_category_mismatch) : []), O = U(() => W.value.length > 0), j = U(() => B.value || A.value ? "nodes" : E.value ? "models" : "review"), X = U(() => {
      if (!w.value) return [];
      const K = w.value.nodes.resolved.filter((me) => !me.is_installed), G = /* @__PURE__ */ new Set();
      return K.filter((me) => G.has(me.package.package_id) ? !1 : (G.add(me.package.package_id), !0));
    }), z = U(() => {
      if (!w.value) return [];
      const K = w.value.nodes.resolved.filter((me) => !me.is_installed), G = /* @__PURE__ */ new Map();
      for (const me of K) {
        const Ve = G.get(me.package.package_id);
        Ve ? Ve.node_types_count++ : G.set(me.package.package_id, {
          package_id: me.package.package_id,
          title: me.package.title,
          node_types_count: 1
        });
      }
      return Array.from(G.values());
    }), ae = U(() => X.value.filter((K) => !T.value.has(K.package.package_id))), Z = U(() => w.value ? w.value.models.resolved.filter(
      (K) => K.match_type === "download_intent" || K.match_type === "property_download_intent"
    ).map((K) => ({
      filename: K.reference.widget_value,
      reference: K.reference,
      is_download_intent: !0,
      resolved_model: K.model,
      download_source: K.download_source,
      target_path: K.target_path
    })) : []), _e = U(() => {
      if (!w.value) return [];
      const K = w.value.nodes.unresolved.map((me) => ({
        node_type: me.reference.node_type,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), G = w.value.nodes.ambiguous.map((me) => ({
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
      return [...K, ...G];
    }), $e = U(() => {
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
        options: me.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...K, ...G];
    }), Le = U(() => {
      const K = $e.value, G = Z.value.map((me) => ({
        filename: me.filename,
        reference: me.reference,
        is_download_intent: !0,
        resolved_model: me.resolved_model,
        download_source: me.download_source,
        target_path: me.target_path,
        options: void 0
      }));
      return [...K, ...G];
    }), Ue = U(() => Z.value.filter((K) => {
      const G = P.value.get(K.filename);
      return G ? G.action === "download" : !0;
    }).map((K) => ({
      filename: K.filename,
      url: K.download_source,
      target_path: K.target_path
    })));
    function Ne(K, G = 50) {
      return K.length <= G ? K : K.slice(0, G - 3) + "...";
    }
    const qe = U(() => {
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
      for (const G of Z.value)
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
      for (const G of _e.value)
        M.value.has(G.node_type) || K++;
      for (const G of $e.value)
        P.value.has(G.filename) || K++;
      return K;
    }), ue = U(() => {
      const K = {};
      if (K.analysis = { resolved: 1, total: 1 }, B.value) {
        const G = _e.value.length, me = _e.value.filter(
          (Ve) => M.value.has(Ve.node_type)
        ).length;
        K.nodes = { resolved: me, total: G };
      }
      if (E.value) {
        const G = Le.value.length, me = Le.value.filter(
          (Ve) => P.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        K.models = { resolved: me, total: G };
      }
      if (K.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const G = d.totalFiles || 1, me = d.completedFiles.length;
        K.applying = { resolved: me, total: G };
      }
      return K;
    });
    function Te(K) {
      b.value = K;
    }
    function Pe() {
      const K = L.value.findIndex((G) => G.id === b.value);
      K > 0 && (b.value = L.value[K - 1].id);
    }
    function ze() {
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
      var Ve;
      const me = _e.value.find((Ze) => Ze.node_type === K);
      (Ve = me == null ? void 0 : me.options) != null && Ve[G] && M.value.set(K, {
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
    function Ce(K) {
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
    function Me(K, G) {
      var Ve;
      const me = $e.value.find((Ze) => Ze.filename === K);
      (Ve = me == null ? void 0 : me.options) != null && Ve[G] && P.value.set(K, {
        action: "select",
        selected_model: me.options[G].model
      });
    }
    function Ee(K, G, me) {
      P.value.set(K, {
        action: "download",
        url: G,
        target_path: me
      });
    }
    function ee(K) {
      P.value.delete(K);
    }
    async function Y(K) {
      try {
        await g(K);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to open file location";
      }
    }
    async function De() {
      var K;
      k.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const G = await r(o.workflowName, M.value, P.value, T.value);
        G.models_to_download && G.models_to_download.length > 0 && u(o.workflowName, G.models_to_download);
        const me = [
          ...G.nodes_to_install || [],
          ...ae.value.map((Ze) => Ze.package.package_id)
        ];
        d.nodesToInstall = [...new Set(me)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((K = d.nodeInstallProgress) == null ? void 0 : K.completedNodes.some((Ze) => !Ze.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        k.value = !1;
      }
    }
    function xe() {
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
    return Je(N), (K, G) => (n(), D(ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: G[1] || (G[1] = (me) => a("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (n(), i("div", Wy, [...G[2] || (G[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", Gy, [
          S(Qp, {
            steps: L.value,
            "current-step": b.value,
            "completed-steps": x.value,
            "step-stats": ue.value,
            onStepChange: Te
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (n(), i("div", jy, [
            t("div", Hy, [
              t("div", Ky, [
                G[3] || (G[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", qy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Yy, [
                t("div", Jy, [
                  G[12] || (G[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Qy, [
                    te.value > 0 ? (n(), i("div", Xy, [
                      G[4] || (G[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Zy, f(te.value), 1),
                      G[5] || (G[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", e1, [
                      G[6] || (G[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", t1, f(w.value.stats.packages_needing_installation), 1),
                      G[7] || (G[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", s1, [
                      G[8] || (G[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", o1, f(w.value.nodes.ambiguous.length), 1),
                      G[9] || (G[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", n1, [
                      G[10] || (G[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", a1, f(w.value.nodes.unresolved.length), 1),
                      G[11] || (G[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", l1, [
                  G[23] || (G[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", i1, [
                    t("div", r1, [
                      G[13] || (G[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", c1, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      G[14] || (G[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", u1, [
                      G[15] || (G[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", d1, f(w.value.stats.download_intents), 1),
                      G[16] || (G[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    O.value ? (n(), i("div", f1, [
                      G[17] || (G[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", m1, f(W.value.length), 1),
                      G[18] || (G[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", v1, [
                      G[19] || (G[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", p1, f(w.value.models.ambiguous.length), 1),
                      G[20] || (G[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", g1, [
                      G[21] || (G[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", h1, f(w.value.models.unresolved.length), 1),
                      G[22] || (G[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (n(), i("div", y1, [
                G[24] || (G[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", w1, f(_e.value.length + $e.value.length) + " items need your input", 1)
              ])) : A.value ? (n(), i("div", k1, [
                G[25] || (G[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", _1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(I.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : I.value ? (n(), i("div", b1, [
                G[26] || (G[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", $1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : O.value ? (n(), i("div", C1, [
                G[27] || (G[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", x1, f(W.value.length) + " model" + f(W.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", S1, [...G[28] || (G[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              O.value ? (n(), i("div", I1, [
                G[31] || (G[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", E1, [
                  (n(!0), i(H, null, ve(W.value, (me) => {
                    var Ve, Ze;
                    return n(), i("div", {
                      key: me.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", T1, f(me.actual_category) + "/" + f((Ve = me.model) == null ? void 0 : Ve.filename), 1),
                      G[30] || (G[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", R1, f((Ze = me.expected_categories) == null ? void 0 : Ze[0]) + "/", 1),
                      me.file_path ? (n(), D(Re, {
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
          b.value === "nodes" ? (n(), D(yh, {
            key: 1,
            nodes: _e.value,
            "node-choices": M.value,
            "auto-resolved-packages": z.value,
            "skipped-packages": T.value,
            onMarkOptional: F,
            onSkip: q,
            onOptionSelected: ne,
            onManualEntry: re,
            onClearChoice: Ce,
            onPackageSkip: ie
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (n(), D(dy, {
            key: 2,
            models: Le.value,
            "model-choices": P.value,
            onMarkOptional: we,
            onSkip: he,
            onOptionSelected: Me,
            onDownloadUrl: Ee,
            onClearChoice: ee
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (n(), i("div", P1, [
            t("div", M1, [
              G[37] || (G[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", D1, [
                t("div", L1, [
                  t("span", A1, f(qe.value), 1),
                  G[32] || (G[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", O1, [
                  t("span", N1, f(pe.value), 1),
                  G[33] || (G[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", U1, [
                  t("span", z1, f(oe.value), 1),
                  G[34] || (G[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", F1, [
                  t("span", V1, f(ce.value), 1),
                  G[35] || (G[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              z.value.length > 0 ? (n(), i("div", B1, [
                t("h4", W1, "Node Packages (" + f(z.value.length) + ")", 1),
                t("div", G1, [
                  (n(!0), i(H, null, ve(z.value, (me) => (n(), i("div", {
                    key: me.package_id,
                    class: "review-item"
                  }, [
                    t("code", j1, f(me.package_id), 1),
                    t("div", H1, [
                      T.value.has(me.package_id) ? (n(), i("span", q1, "Skipped")) : (n(), i("span", K1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              _e.value.length > 0 ? (n(), i("div", Y1, [
                t("h4", J1, "Node Choices (" + f(_e.value.length) + ")", 1),
                t("div", Q1, [
                  (n(!0), i(H, null, ve(_e.value, (me) => {
                    var Ve, Ze, St, tt;
                    return n(), i("div", {
                      key: me.node_type,
                      class: "review-item"
                    }, [
                      t("code", X1, f(me.node_type), 1),
                      t("div", Z1, [
                        M.value.has(me.node_type) ? (n(), i(H, { key: 0 }, [
                          ((Ve = M.value.get(me.node_type)) == null ? void 0 : Ve.action) === "install" ? (n(), i("span", e0, f((Ze = M.value.get(me.node_type)) == null ? void 0 : Ze.package_id), 1)) : ((St = M.value.get(me.node_type)) == null ? void 0 : St.action) === "optional" ? (n(), i("span", t0, " Optional ")) : ((tt = M.value.get(me.node_type)) == null ? void 0 : tt.action) === "skip" ? (n(), i("span", s0, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", o0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ue.value.length > 0 ? (n(), i("div", n0, [
                t("h4", a0, "Models to Download (" + f(Ue.value.length) + ")", 1),
                t("div", l0, [
                  (n(!0), i(H, null, ve(Ue.value, (me) => (n(), i("div", {
                    key: me.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", i0, [
                      t("code", r0, f(me.filename), 1),
                      t("div", c0, [
                        t("span", u0, "→ " + f(me.target_path), 1),
                        me.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: me.url
                        }, f(Ne(me.url)), 9, d0)) : y("", !0)
                      ])
                    ]),
                    G[36] || (G[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Le.value.length > 0 ? (n(), i("div", f0, [
                t("h4", m0, "Models (" + f(Le.value.length) + ")", 1),
                t("div", v0, [
                  (n(!0), i(H, null, ve(Le.value, (me) => {
                    var Ve, Ze, St, tt, vt, qt, ht;
                    return n(), i("div", {
                      key: me.filename,
                      class: "review-item"
                    }, [
                      t("code", p0, f(me.filename), 1),
                      t("div", g0, [
                        P.value.has(me.filename) ? (n(), i(H, { key: 0 }, [
                          ((Ve = P.value.get(me.filename)) == null ? void 0 : Ve.action) === "select" ? (n(), i("span", h0, f((St = (Ze = P.value.get(me.filename)) == null ? void 0 : Ze.selected_model) == null ? void 0 : St.filename), 1)) : ((tt = P.value.get(me.filename)) == null ? void 0 : tt.action) === "download" ? (n(), i("span", y0, " Download ")) : ((vt = P.value.get(me.filename)) == null ? void 0 : vt.action) === "optional" ? (n(), i("span", w0, " Optional ")) : ((qt = P.value.get(me.filename)) == null ? void 0 : qt.action) === "skip" ? (n(), i("span", k0, " Skip ")) : ((ht = P.value.get(me.filename)) == null ? void 0 : ht.action) === "cancel_download" ? (n(), i("span", _0, " Cancel Download ")) : y("", !0)
                        ], 64)) : me.is_download_intent ? (n(), i("span", b0, " Pending Download ")) : (n(), i("span", $0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length === 0 && _e.value.length === 0 && Le.value.length === 0 ? (n(), i("div", C0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (n(), D(By, {
            key: 4,
            progress: Be(d),
            onRestart: xe,
            onRetryFailed: ye
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (n(), D(Re, {
          key: 0,
          variant: "secondary",
          disabled: k.value,
          onClick: Pe
        }, {
          default: h(() => [...G[38] || (G[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        G[41] || (G[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || Be(d).phase === "complete" || Be(d).phase === "error" ? (n(), D(Re, {
          key: 1,
          variant: "secondary",
          onClick: G[0] || (G[0] = (me) => a("close"))
        }, {
          default: h(() => [
            $(f(Be(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (n(), D(Re, {
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
        b.value === "nodes" ? (n(), D(Re, {
          key: 3,
          variant: "primary",
          onClick: ze
        }, {
          default: h(() => [
            $(f(E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (n(), D(Re, {
          key: 4,
          variant: "primary",
          onClick: ze
        }, {
          default: h(() => [...G[39] || (G[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (n(), D(Re, {
          key: 5,
          variant: "primary",
          disabled: k.value,
          loading: k.value,
          onClick: De
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
}), S0 = /* @__PURE__ */ ge(x0, [["__scopeId", "data-v-40d8d5a8"]]), I0 = { class: "search-input-wrapper" }, E0 = ["value", "placeholder"], T0 = /* @__PURE__ */ fe({
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
    return Je(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (n(), i("div", I0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Ht(u, ["escape"])
      }, null, 40, E0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), R0 = /* @__PURE__ */ ge(T0, [["__scopeId", "data-v-266f857a"]]), P0 = { class: "search-bar" }, M0 = /* @__PURE__ */ fe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", P0, [
      S(R0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), So = /* @__PURE__ */ ge(M0, [["__scopeId", "data-v-3d51bbfd"]]), D0 = { class: "section-group" }, L0 = {
  key: 0,
  class: "section-content"
}, A0 = /* @__PURE__ */ fe({
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
    return (c, u) => (n(), i("section", D0, [
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
      !e.collapsible || l.value ? (n(), i("div", L0, [
        He(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ ge(A0, [["__scopeId", "data-v-c48e33ed"]]), O0 = { class: "item-header" }, N0 = {
  key: 0,
  class: "item-icon"
}, U0 = { class: "item-info" }, z0 = {
  key: 0,
  class: "item-title"
}, F0 = {
  key: 1,
  class: "item-subtitle"
}, V0 = {
  key: 0,
  class: "item-details"
}, B0 = {
  key: 1,
  class: "item-actions"
}, W0 = /* @__PURE__ */ fe({
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
      class: Ie(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", O0, [
        l.$slots.icon ? (n(), i("span", N0, [
          He(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", U0, [
          l.$slots.title ? (n(), i("div", z0, [
            He(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", F0, [
            He(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", V0, [
        He(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", B0, [
        He(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ ge(W0, [["__scopeId", "data-v-cc435e0e"]]), G0 = { class: "loading-state" }, j0 = { class: "loading-message" }, H0 = /* @__PURE__ */ fe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", G0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", j0, f(e.message), 1)
    ]));
  }
}), Ms = /* @__PURE__ */ ge(H0, [["__scopeId", "data-v-ad8436c9"]]), K0 = { class: "error-state" }, q0 = { class: "error-message" }, Y0 = /* @__PURE__ */ fe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", K0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", q0, f(e.message), 1),
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
}), Ds = /* @__PURE__ */ ge(Y0, [["__scopeId", "data-v-5397be48"]]), J0 = /* @__PURE__ */ fe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = Xe(), r = _([]), c = _(!1), u = _(null), d = _(""), m = _(!0), v = _(!1), g = _(!1), w = _(!1), p = _(null), k = U(
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
    function te() {
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
    return Je(E), (z, ae) => (n(), i(H, null, [
      S(Mt, null, {
        header: h(() => [
          S(Dt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          S(So, {
            modelValue: d.value,
            "onUpdate:modelValue": ae[0] || (ae[0] = (Z) => d.value = Z),
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
            P.value.length ? (n(), D(it, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(P.value, (Z) => (n(), D(Pt, {
                  key: Z.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ae[7] || (ae[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(j(Z)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (_e) => A(Z.name)
                    }, {
                      default: h(() => [...ae[8] || (ae[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => I(Z.name)
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
            T.value.length ? (n(), D(it, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(T.value, (Z) => (n(), D(Pt, {
                  key: Z.name,
                  status: Z.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(f(Z.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(Z)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => I(Z.name)
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
            L.value.length ? (n(), D(it, {
              key: 2,
              title: "MODIFIED",
              count: L.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(L.value, (Z) => (n(), D(Pt, {
                  key: Z.name,
                  status: Z.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ae[11] || (ae[11] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(Z)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => I(Z.name)
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
            V.value.length ? (n(), D(it, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ae[2] || (ae[2] = (Z) => m.value = Z)
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(B.value, (Z) => (n(), D(Pt, {
                  key: Z.name,
                  status: Z.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(f(Z.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(X(Z)), 1)
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => I(Z.name)
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
                  onClick: ae[1] || (ae[1] = (Z) => v.value = !0),
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
      g.value && p.value ? (n(), D(zp, {
        key: 0,
        "workflow-name": p.value,
        onClose: ae[3] || (ae[3] = (Z) => g.value = !1),
        onResolve: ae[4] || (ae[4] = (Z) => A(p.value)),
        onRefresh: ae[5] || (ae[5] = (Z) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (n(), D(S0, {
        key: 1,
        "workflow-name": p.value,
        onClose: W,
        onInstall: te,
        onRefresh: ae[6] || (ae[6] = (Z) => a("refresh")),
        onRestart: O
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Q0 = /* @__PURE__ */ ge(J0, [["__scopeId", "data-v-fa3f076e"]]), X0 = /* @__PURE__ */ fe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ie(["summary-bar", e.variant])
    }, [
      He(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), dn = /* @__PURE__ */ ge(X0, [["__scopeId", "data-v-ccb7816e"]]), Z0 = {
  key: 0,
  class: "model-details"
}, ew = { class: "detail-section" }, tw = { class: "detail-row" }, sw = { class: "detail-value mono" }, ow = { class: "detail-row" }, nw = { class: "detail-value mono" }, aw = { class: "detail-row" }, lw = { class: "detail-value mono" }, iw = { class: "detail-row" }, rw = { class: "detail-value" }, cw = { class: "detail-row" }, uw = { class: "detail-value" }, dw = { class: "detail-row" }, fw = { class: "detail-value" }, mw = { class: "detail-section" }, vw = { class: "section-header" }, pw = {
  key: 0,
  class: "locations-list"
}, gw = { class: "location-path mono" }, hw = {
  key: 0,
  class: "location-modified"
}, yw = ["onClick"], ww = {
  key: 1,
  class: "empty-state"
}, kw = { class: "detail-section" }, _w = { class: "section-header" }, bw = {
  key: 0,
  class: "sources-list"
}, $w = { class: "source-type" }, Cw = ["href"], xw = ["disabled", "onClick"], Sw = {
  key: 1,
  class: "empty-state"
}, Iw = { class: "add-source-form" }, Ew = ["disabled"], Tw = {
  key: 2,
  class: "source-error"
}, Rw = {
  key: 3,
  class: "source-success"
}, Pw = /* @__PURE__ */ fe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = Xe(), u = _(null), d = _(!0), m = _(null), v = _(""), g = _(!1), w = _(null), p = _(null), k = _(null), C = _(null);
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
    return Je(B), (E, I) => {
      var A;
      return n(), i(H, null, [
        S(ct, {
          title: `Model Details: ${((A = u.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: I[5] || (I[5] = (te) => E.$emit("close"))
        }, {
          body: h(() => {
            var te, W, O, j;
            return [
              u.value ? (n(), i("div", Z0, [
                t("section", ew, [
                  t("div", tw, [
                    I[6] || (I[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", sw, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[0] || (I[0] = (X) => P(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", ow, [
                    I[7] || (I[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", nw, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[1] || (I[1] = (X) => P(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", aw, [
                    I[8] || (I[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", lw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: I[2] || (I[2] = (X) => P(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", iw, [
                    I[9] || (I[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", rw, f(M(u.value.size)), 1)
                  ]),
                  t("div", cw, [
                    I[10] || (I[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", uw, f(u.value.category), 1)
                  ]),
                  t("div", dw, [
                    I[11] || (I[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", fw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", mw, [
                  t("h4", vw, "Locations (" + f(((te = u.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (W = u.value.locations) != null && W.length ? (n(), i("div", pw, [
                    (n(!0), i(H, null, ve(u.value.locations, (X, z) => (n(), i("div", {
                      key: z,
                      class: "location-item"
                    }, [
                      t("span", gw, f(X.path), 1),
                      X.modified ? (n(), i("span", hw, "Modified: " + f(X.modified), 1)) : y("", !0),
                      X.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ae) => T(X.path)
                      }, " Open File Location ", 8, yw)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", ww, "No locations found"))
                ]),
                t("section", kw, [
                  t("h4", _w, "Download Sources (" + f(((O = u.value.sources) == null ? void 0 : O.length) || 0) + ")", 1),
                  (j = u.value.sources) != null && j.length ? (n(), i("div", bw, [
                    (n(!0), i(H, null, ve(u.value.sources, (X, z) => (n(), i("div", {
                      key: z,
                      class: "source-item"
                    }, [
                      t("span", $w, f(X.type) + ":", 1),
                      t("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(X.url), 9, Cw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === X.url,
                        onClick: (ae) => V(X.url)
                      }, f(w.value === X.url ? "..." : "×"), 9, xw)
                    ]))), 128))
                  ])) : (n(), i("div", Sw, " No download sources configured ")),
                  t("div", Iw, [
                    Ke(t("input", {
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
                    }, f(g.value ? "Adding..." : "Add Source"), 9, Ew)
                  ]),
                  p.value ? (n(), i("p", Tw, f(p.value), 1)) : y("", !0),
                  k.value ? (n(), i("p", Rw, f(k.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: I[4] || (I[4] = (te) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), D(kt, { to: "body" }, [
          C.value ? (n(), i("div", {
            key: 0,
            class: Ie(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), rl = /* @__PURE__ */ ge(Pw, [["__scopeId", "data-v-f15cbb56"]]), Mw = ["disabled"], Dw = { class: "dropdown-value" }, Lw = ["onClick"], Aw = {
  key: 0,
  class: "dropdown-error"
}, Ow = /* @__PURE__ */ fe({
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
    return Je(() => {
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
        class: Ie(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", Dw, f(v.value), 1),
        M[0] || (M[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Mw),
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
            class: Ie(["dropdown-option", { selected: d(P) === e.modelValue }]),
            onClick: (T) => p(P)
          }, f(m(P)), 11, Lw))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", Aw, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Nw = /* @__PURE__ */ ge(Ow, [["__scopeId", "data-v-857e085b"]]);
function Uw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function zw(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!Uw(o.hostname)) return { kind: "unknown" };
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
function Fw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Vw(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${Fw(o)}`;
}
const Bw = { class: "hf-file-browser" }, Ww = { class: "browser-header" }, Gw = { class: "repo-info" }, jw = { class: "repo-id" }, Hw = {
  key: 0,
  class: "revision-pill"
}, Kw = {
  key: 0,
  class: "loading-state"
}, qw = {
  key: 1,
  class: "error-state"
}, Yw = { class: "toolbar" }, Jw = { class: "toolbar-actions" }, Qw = { class: "file-list-container" }, Xw = {
  key: 0,
  class: "file-list-header"
}, Zw = ["checked", "indeterminate"], ek = { class: "sort-indicator" }, tk = { class: "sort-indicator" }, sk = {
  key: 1,
  class: "empty-state"
}, ok = {
  key: 2,
  class: "file-list"
}, nk = ["onClick"], ak = ["checked", "onChange"], lk = { class: "file-path" }, ik = { class: "file-size" }, rk = { class: "destination-section" }, ck = { class: "destination-row" }, uk = {
  key: 0,
  class: "path-separator"
}, dk = { class: "action-bar" }, fk = { class: "summary-info" }, mk = { class: "summary-count" }, vk = { class: "summary-size" }, pk = /* @__PURE__ */ fe({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = Xe(), c = _([]), u = _(/* @__PURE__ */ new Set()), d = _(!1), m = _(null), v = _(""), g = _(!1), w = _("name"), p = _(!0), k = _(""), C = _(""), b = _(""), x = _([]), M = _(!1);
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
    }), A = U(() => k.value === "__custom__" ? b.value.trim().length > 0 : k.value.length > 0), te = U(() => {
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
        const Te = c.value.filter((Pe) => (Pe.shard_group || O(Pe.path)) === ue);
        ce ? Te.forEach((Pe) => oe.delete(Pe.path)) : Te.forEach((Pe) => oe.add(Pe.path));
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
    function Z(pe) {
      w.value === pe ? p.value = !p.value : (w.value = pe, p.value = !0);
    }
    function _e(pe) {
      const oe = pe.split("/");
      return oe.length >= 2 ? oe[oe.length - 2] : null;
    }
    function $e() {
      if (M.value || u.value.size === 0) return;
      const pe = /* @__PURE__ */ new Set();
      for (const ue of u.value) {
        const Te = _e(ue);
        Te && pe.add(Te.toLowerCase());
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
    function Ue() {
      if (u.value.size === 0 || !A.value) return;
      const pe = Le(), oe = [];
      for (const ce of u.value) {
        const ue = c.value.find((Te) => Te.path === ce);
        ue && oe.push({
          url: Vw(o.repoId, o.revision, ue.path),
          destination: pe,
          filename: ue.path.split("/").pop() || ue.path
        });
      }
      a("queue", oe);
    }
    async function Ne() {
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
    async function qe() {
      try {
        const pe = await r();
        x.value = pe.directories, pe.directories.length > 0 && !k.value && (k.value = pe.directories[0]);
      } catch {
        x.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], k.value || (k.value = "checkpoints");
      }
    }
    return dt(() => [o.repoId, o.revision], () => {
      o.repoId && Ne();
    }, { immediate: !1 }), dt(() => o.repoId, () => {
      M.value = !1;
    }), dt(u, () => {
      $e();
    }, { deep: !0 }), dt(x, () => {
      x.value.length > 0 && u.value.size > 0 && $e();
    }), dt(k, (pe, oe) => {
      P || oe === "" || (M.value = !0);
    }), Je(() => {
      Ne(), qe();
    }), (pe, oe) => (n(), i("div", Bw, [
      t("div", Ww, [
        t("button", {
          class: "back-btn",
          onClick: oe[0] || (oe[0] = (ce) => pe.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Gw, [
          t("span", jw, f(e.repoId), 1),
          e.revision ? (n(), i("span", Hw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (n(), i("div", Kw, " Loading repository files... ")) : m.value ? (n(), i("div", qw, f(m.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", Yw, [
          S(xt, {
            modelValue: v.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (ce) => v.value = ce),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Jw, [
            t("button", {
              class: Ie(["toggle-btn", { active: g.value }]),
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
        t("div", Qw, [
          L.value.length > 0 ? (n(), i("div", Xw, [
            t("input", {
              type: "checkbox",
              checked: B.value,
              indeterminate: E.value && !B.value,
              class: "file-checkbox",
              onChange: ae
            }, null, 40, Zw),
            t("span", {
              class: "header-name",
              onClick: oe[3] || (oe[3] = (ce) => Z("name"))
            }, [
              oe[9] || (oe[9] = $(" Name ", -1)),
              t("span", ek, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: oe[4] || (oe[4] = (ce) => Z("size"))
            }, [
              oe[10] || (oe[10] = $(" Size ", -1)),
              t("span", tk, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          L.value.length === 0 ? (n(), i("div", sk, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", ok, [
            (n(!0), i(H, null, ve(V.value, (ce) => (n(), i("div", {
              key: ce.path,
              class: Ie(["file-item", { selected: u.value.has(ce.path) }]),
              onClick: (ue) => j(ce)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(ce.path),
                class: "file-checkbox",
                onClick: oe[5] || (oe[5] = lt(() => {
                }, ["stop"])),
                onChange: (ue) => j(ce)
              }, null, 40, ak),
              t("span", lk, f(ce.path), 1),
              t("span", ik, f(W(ce.size)), 1)
            ], 10, nk))), 128))
          ]))
        ]),
        t("div", rk, [
          oe[11] || (oe[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", ck, [
            S(Nw, {
              modelValue: k.value,
              "onUpdate:modelValue": oe[6] || (oe[6] = (ce) => k.value = ce),
              options: I.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            k.value !== "__custom__" ? (n(), i("span", uk, "/")) : y("", !0),
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
        t("div", dk, [
          t("div", fk, [
            t("span", mk, f(u.value.size) + " file(s) selected", 1),
            t("span", vk, f(W(te.value)), 1)
          ]),
          S(Re, {
            variant: "primary",
            disabled: u.value.size === 0 || !A.value,
            onClick: Ue
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
}), gk = /* @__PURE__ */ ge(pk, [["__scopeId", "data-v-183acebc"]]), hk = { class: "token-config-modal" }, yk = { class: "provider-info" }, wk = { class: "provider-icon" }, kk = { class: "provider-name" }, _k = {
  key: 0,
  class: "current-token"
}, bk = { class: "mask" }, $k = { class: "token-input-section" }, Ck = { class: "input-label" }, xk = { class: "help-text" }, Sk = ["href"], Ik = { class: "modal-actions" }, Ek = /* @__PURE__ */ fe({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = Xe(), r = _(""), c = _(!1), u = _(!1), d = U(
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
        t("div", hk, [
          t("div", yk, [
            t("span", wk, f(m.value), 1),
            t("span", kk, f(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", _k, [
            b[4] || (b[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", bk, f(e.currentTokenMask), 1),
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
          t("div", $k, [
            t("label", Ck, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            S(xt, {
              modelValue: r.value,
              "onUpdate:modelValue": b[0] || (b[0] = (x) => r.value = x),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", xk, [
              t("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, Sk)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        t("div", Ik, [
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
}), Tk = /* @__PURE__ */ ge(Ek, [["__scopeId", "data-v-0687d0ce"]]), Rk = { class: "huggingface-tab" }, Pk = {
  key: 0,
  class: "search-section"
}, Mk = { class: "search-header" }, Dk = { class: "search-bar" }, Lk = {
  key: 1,
  class: "search-results"
}, Ak = {
  key: 0,
  class: "loading-state"
}, Ok = {
  key: 1,
  class: "error-state"
}, Nk = {
  key: 2,
  class: "results-list"
}, Uk = ["onClick"], zk = { class: "repo-header" }, Fk = { class: "repo-id" }, Vk = { class: "repo-stats" }, Bk = {
  class: "stat",
  title: "Downloads"
}, Wk = {
  class: "stat",
  title: "Likes"
}, Gk = {
  key: 0,
  class: "repo-desc"
}, jk = {
  key: 1,
  class: "repo-tags"
}, Hk = {
  key: 3,
  class: "empty-state"
}, Kk = {
  key: 4,
  class: "hint-state"
}, qk = /* @__PURE__ */ fe({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = Xe(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), m = _(null), v = _("main"), g = _(), w = _(), p = _(!1), k = _(null), C = U(() => {
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
      const E = zw(B);
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
    return Je(T), (B, E) => (n(), i("div", Rk, [
      a.value === "search" ? (n(), i("div", Pk, [
        t("div", Mk, [
          t("div", Dk, [
            S(xt, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (I) => l.value = I),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Ht(x, ["enter"])
            }, null, 8, ["modelValue"]),
            S(Re, {
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
          S(Re, {
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
      a.value === "search" ? (n(), i("div", Lk, [
        c.value ? (n(), i("div", Ak, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Ok, [
          t("p", null, f(u.value), 1),
          C.value ? (n(), D(Re, {
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
        ])) : r.value.length > 0 ? (n(), i("div", Nk, [
          (n(!0), i(H, null, ve(r.value, (I) => (n(), i("div", {
            key: I.repo_id,
            class: "repo-card",
            onClick: (A) => M(I.repo_id)
          }, [
            t("div", zk, [
              t("span", Fk, f(I.repo_id), 1),
              t("div", Vk, [
                t("span", Bk, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(b(I.downloads)), 1)
                ]),
                t("span", Wk, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(b(I.likes)), 1)
                ])
              ])
            ]),
            I.description ? (n(), i("p", Gk, f(I.description), 1)) : y("", !0),
            I.tags.length > 0 ? (n(), i("div", jk, [
              (n(!0), i(H, null, ve(I.tags.slice(0, 5), (A) => (n(), i("span", {
                key: A,
                class: "tag"
              }, f(A), 1))), 128))
            ])) : y("", !0)
          ], 8, Uk))), 128))
        ])) : d.value ? (n(), i("div", Hk, " No repositories found ")) : (n(), i("div", Kk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), D(gk, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": w.value,
        onBack: P,
        onQueue: E[3] || (E[3] = (I) => B.$emit("queue", I))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (n(), D(Tk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        onClose: E[4] || (E[4] = (I) => p.value = !1),
        onSaved: L,
        onCleared: V
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Yk = /* @__PURE__ */ ge(qk, [["__scopeId", "data-v-e13209bf"]]), Jk = { class: "civitai-tab" }, Qk = /* @__PURE__ */ fe({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Jk, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Xk = /* @__PURE__ */ ge(Qk, [["__scopeId", "data-v-44948051"]]), Zk = { class: "direct-url-tab" }, e_ = { class: "input-group" }, t_ = { class: "input-group" }, s_ = {
  key: 0,
  class: "error"
}, o_ = { class: "actions" }, n_ = /* @__PURE__ */ fe({
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
    return (d, m) => (n(), i("div", Zk, [
      t("div", e_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        S(xt, {
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", t_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(xt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", s_, f(r.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", o_, [
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
}), a_ = /* @__PURE__ */ ge(n_, [["__scopeId", "data-v-01def7aa"]]), l_ = { class: "download-modal" }, i_ = { class: "tab-bar" }, r_ = ["onClick"], c_ = { class: "tab-content" }, u_ = /* @__PURE__ */ fe({
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
        t("div", l_, [
          t("div", i_, [
            (n(), i(H, null, ve(l, (g) => t("button", {
              key: g.id,
              class: Ie(["tab-btn", { active: r.value === g.id }]),
              onClick: (w) => r.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, r_)), 64))
          ]),
          t("div", c_, [
            r.value === "huggingface" ? (n(), D(Yk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), D(Xk, { key: 1 })) : r.value === "direct" ? (n(), D(a_, {
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
}), Lr = /* @__PURE__ */ ge(u_, [["__scopeId", "data-v-90a9f401"]]), d_ = /* @__PURE__ */ fe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = Xe(), r = _([]), c = _([]), u = _("production"), d = _(!1), m = _(null), v = _(""), g = _(!1), w = _(null), p = _(!1);
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
        const te = A.type || "other";
        E[te] || (E[te] = []), E[te].push(A);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([A], [te]) => {
        const W = I.indexOf(A), O = I.indexOf(te);
        return W >= 0 && O >= 0 ? W - O : W >= 0 ? -1 : O >= 0 ? 1 : A.localeCompare(te);
      }).map(([A, te]) => ({ type: A, models: te }));
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
    return Je(B), (E, I) => (n(), i(H, null, [
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
            (n(!0), i(H, null, ve(M.value, (A) => (n(), D(it, {
              key: A.type,
              title: A.type.toUpperCase(),
              count: A.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(A.models, (te) => (n(), D(Pt, {
                  key: te.hash || te.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...I[7] || (I[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(te.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(P(te.size)), 1)
                  ]),
                  details: h(() => [
                    S(ft, {
                      label: "Used by:",
                      value: (te.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(ft, {
                      label: "Path:",
                      value: te.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (W) => T(te)
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
            x.value.length ? (n(), D(it, {
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
                    var te;
                    return [
                      S(ft, {
                        label: "Required by:",
                        value: ((te = A.workflow_names) == null ? void 0 : te.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    S(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => V(A.filename)
                    }, {
                      default: h(() => [...I[11] || (I[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => L(A.filename)
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
      w.value ? (n(), D(rl, {
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
}), f_ = /* @__PURE__ */ ge(d_, [["__scopeId", "data-v-af3ca736"]]), m_ = {
  key: 0,
  class: "indexing-progress"
}, v_ = { class: "progress-info" }, p_ = { class: "progress-label" }, g_ = { class: "progress-count" }, h_ = { class: "progress-bar" }, y_ = { class: "modal-content" }, w_ = { class: "modal-header" }, k_ = { class: "modal-body" }, __ = { class: "input-group" }, b_ = { class: "current-path" }, $_ = { class: "input-group" }, C_ = { class: "modal-footer" }, x_ = /* @__PURE__ */ fe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = Xe(), c = s, u = _([]), d = _(!1), m = _(!1), v = _(null), g = _(""), w = _(!1), p = _(null), k = _(!1), C = _(null), b = _(""), x = _(!1), M = _(!1), P = _(null), T = U(
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
        const ae = j.indexOf(X), Z = j.indexOf(z);
        return ae >= 0 && Z >= 0 ? ae - Z : ae >= 0 ? -1 : Z >= 0 ? 1 : X.localeCompare(z);
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
        await te(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
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
          C.value = O.path, k.value = !1, b.value = "", await te(), console.log(`Directory changed: ${O.models_indexed} models indexed`), c("refresh");
        } catch (O) {
          v.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function te() {
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
    return Je(() => {
      te(), W();
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
          P.value ? (n(), i("div", m_, [
            t("div", v_, [
              t("span", p_, f(P.value.message), 1),
              t("span", g_, f(P.value.current) + "/" + f(P.value.total), 1)
            ]),
            t("div", h_, [
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
            onRetry: te
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
            (n(!0), i(H, null, ve(V.value, (X) => (n(), D(it, {
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
      p.value ? (n(), D(rl, {
        key: 0,
        identifier: p.value,
        onClose: j[5] || (j[5] = (X) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), D(kt, { to: "body" }, [
        k.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: j[9] || (j[9] = lt((X) => k.value = !1, ["self"]))
        }, [
          t("div", y_, [
            t("div", w_, [
              j[16] || (j[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: j[6] || (j[6] = (X) => k.value = !1)
              }, "✕")
            ]),
            t("div", k_, [
              t("div", __, [
                j[17] || (j[17] = t("label", null, "Current Directory", -1)),
                t("code", b_, f(C.value || "Not set"), 1)
              ]),
              t("div", $_, [
                j[18] || (j[18] = t("label", null, "New Directory Path", -1)),
                S(xt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": j[7] || (j[7] = (X) => b.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              j[19] || (j[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", C_, [
              S(Re, {
                variant: "secondary",
                onClick: j[8] || (j[8] = (X) => k.value = !1)
              }, {
                default: h(() => [...j[20] || (j[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(Re, {
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
}), S_ = /* @__PURE__ */ ge(x_, [["__scopeId", "data-v-3705114c"]]), I_ = { class: "node-details" }, E_ = { class: "status-row" }, T_ = {
  key: 0,
  class: "detail-row"
}, R_ = { class: "value" }, P_ = { class: "detail-row" }, M_ = { class: "value" }, D_ = {
  key: 1,
  class: "detail-row"
}, L_ = { class: "value mono" }, A_ = {
  key: 2,
  class: "detail-row"
}, O_ = ["href"], N_ = {
  key: 3,
  class: "detail-row"
}, U_ = { class: "value mono small" }, z_ = { class: "detail-row" }, F_ = {
  key: 0,
  class: "value"
}, V_ = {
  key: 1,
  class: "workflow-list"
}, B_ = /* @__PURE__ */ fe({
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
        t("div", I_, [
          t("div", E_, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", T_, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", R_, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", P_, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", M_, f(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", D_, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", L_, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", A_, [
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
            ], 8, O_)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", N_, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", U_, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", z_, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", F_, " Not used in any workflows ")) : (n(), i("div", V_, [
              (n(!0), i(H, null, ve(e.node.used_in_workflows, (m) => (n(), i("span", {
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
}), W_ = /* @__PURE__ */ ge(B_, [["__scopeId", "data-v-b342f626"]]), G_ = { class: "dialog-message" }, j_ = {
  key: 0,
  class: "dialog-details"
}, H_ = {
  key: 1,
  class: "dialog-warning"
}, K_ = /* @__PURE__ */ fe({
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
        t("p", G_, f(e.message), 1),
        e.details && e.details.length ? (n(), i("div", j_, [
          (n(!0), i(H, null, ve(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", H_, [
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
        e.secondaryAction ? (n(), D(Re, {
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
}), cl = /* @__PURE__ */ ge(K_, [["__scopeId", "data-v-3670b9f5"]]), q_ = { class: "mismatch-warning" }, Y_ = { class: "version-mismatch" }, J_ = { class: "version-actual" }, Q_ = { class: "version-expected" }, X_ = { key: 0 }, Z_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, eb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, tb = /* @__PURE__ */ fe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u } = Xe(), d = _({
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
            O.status === "success" ? (a("toast", `✓ Node "${W}" tracked as development`, "success"), await te()) : a("toast", `Failed to track node: ${O.message || "Unknown error"}`, "error");
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
            O.status === "success" ? (a("toast", `✓ Node "${W}" removed`, "success"), await te()) : a("toast", `Failed to remove node: ${O.message || "Unknown error"}`, "error");
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
            O.status === "success" ? (a("toast", `✓ Node "${W}" installed`, "success"), await te()) : a("toast", `Failed to install node: ${O.message || "Unknown error"}`, "error");
          } catch (O) {
            a("toast", `Error installing node: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
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
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Je(te), (W, O) => (n(), i(H, null, [
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
            onRetry: te
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
            T.value ? (n(), D(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", q_, [
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
                    t("span", Y_, [
                      t("span", J_, f(j.actual), 1),
                      O[10] || (O[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Q_, f(j.expected), 1)
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
            M.value.length ? (n(), D(it, {
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
            b.value.length ? (n(), D(it, {
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
                    j.version ? (n(), i("span", X_, f(j.source === "development" ? "" : "v") + f(j.version), 1)) : (n(), i("span", Z_, "version unknown")),
                    t("span", eb, " • " + f(P(j.source)), 1)
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
            x.value.length ? (n(), D(it, {
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
      p.value ? (n(), D(W_, {
        key: 0,
        node: p.value,
        onClose: O[5] || (O[5] = (j) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      k.value ? (n(), D(cl, {
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
}), sb = /* @__PURE__ */ ge(tb, [["__scopeId", "data-v-1555a802"]]);
function Ar(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const ob = { class: "remote-url-display" }, nb = ["title"], ab = ["title"], lb = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ib = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, rb = /* @__PURE__ */ fe({
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
    return (r, c) => (n(), i("div", ob, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(a.value), 9, nb),
      t("button", {
        class: Ie(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", ib, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", lb, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, ab)
    ]));
  }
}), cb = /* @__PURE__ */ ge(rb, [["__scopeId", "data-v-7768a58d"]]), ub = { class: "remote-title" }, db = {
  key: 0,
  class: "default-badge"
}, fb = {
  key: 1,
  class: "sync-badge"
}, mb = {
  key: 0,
  class: "ahead"
}, vb = {
  key: 1,
  class: "behind"
}, pb = {
  key: 1,
  class: "synced"
}, gb = ["href"], hb = {
  key: 1,
  class: "remote-url-text"
}, yb = /* @__PURE__ */ fe({
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
        t("div", ub, [
          t("span", null, f(e.remote.name), 1),
          a.value ? (n(), i("span", db, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", fb, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", mb, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", vb, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", pb, "✓ synced"))
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
          onClick: v[0] || (v[0] = lt(() => {
          }, ["stop"]))
        }, f(d.value), 9, gb)) : (n(), i("span", hb, f(d.value), 1))
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
              S(cb, {
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
}), wb = /* @__PURE__ */ ge(yb, [["__scopeId", "data-v-8310f3a8"]]), kb = ["for"], _b = {
  key: 0,
  class: "base-form-field-required"
}, bb = { class: "base-form-field-input" }, $b = {
  key: 1,
  class: "base-form-field-error"
}, Cb = {
  key: 2,
  class: "base-form-field-hint"
}, xb = /* @__PURE__ */ fe({
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
      class: Ie(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (n(), i("span", _b, "*")) : y("", !0)
      ], 8, kb)) : y("", !0),
      t("div", bb, [
        He(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", $b, f(e.error), 1)) : e.hint ? (n(), i("span", Cb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ka = /* @__PURE__ */ ge(xb, [["__scopeId", "data-v-9a1cf296"]]), Sb = { class: "remote-form" }, Ib = { class: "form-header" }, Eb = { class: "form-body" }, Tb = {
  key: 0,
  class: "form-error"
}, Rb = { class: "form-actions" }, Pb = /* @__PURE__ */ fe({
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
    return (m, v) => (n(), i("div", Sb, [
      t("div", Ib, [
        S(Nt, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Eb, [
        S(ka, {
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
        S(ka, {
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
        S(ka, { label: "Push URL (optional)" }, {
          default: h(() => [
            S(xt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", Tb, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Rb, [
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
}), Mb = /* @__PURE__ */ ge(Pb, [["__scopeId", "data-v-56021b18"]]), Db = { class: "conflict-summary-box" }, Lb = { class: "summary-header" }, Ab = { class: "summary-text" }, Ob = { key: 0 }, Nb = {
  key: 1,
  class: "all-resolved"
}, Ub = { class: "summary-progress" }, zb = { class: "progress-bar" }, Fb = { class: "progress-text" }, Vb = /* @__PURE__ */ fe({
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
    return (a, l) => (n(), i("div", Db, [
      t("div", Lb, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", Ab, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", Ob, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (n(), i("p", Nb, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", Ub, [
        t("div", zb, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", Fb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Bb = /* @__PURE__ */ ge(Vb, [["__scopeId", "data-v-4e9e6cc9"]]), Wb = { class: "modal-header" }, Gb = { class: "modal-title" }, jb = { class: "modal-body" }, Hb = {
  key: 0,
  class: "error-box"
}, Kb = {
  key: 0,
  class: "error-hint"
}, qb = {
  key: 1,
  class: "loading-state"
}, Yb = { class: "commit-summary" }, Jb = {
  key: 0,
  class: "commits-section"
}, Qb = { class: "commit-list" }, Xb = { class: "commit-hash" }, Zb = { class: "commit-message" }, e2 = { class: "commit-date" }, t2 = {
  key: 1,
  class: "changes-section"
}, s2 = {
  key: 0,
  class: "change-group",
  open: ""
}, o2 = { class: "change-count" }, n2 = { class: "change-list" }, a2 = {
  key: 0,
  class: "conflict-badge"
}, l2 = {
  key: 1,
  class: "change-group"
}, i2 = { class: "change-count" }, r2 = { class: "change-list" }, c2 = {
  key: 2,
  class: "change-group"
}, u2 = { class: "change-count" }, d2 = { class: "change-list" }, f2 = {
  key: 3,
  class: "strategy-section"
}, m2 = { class: "radio-group" }, v2 = { class: "radio-option" }, p2 = { class: "radio-option" }, g2 = { class: "radio-option" }, h2 = {
  key: 4,
  class: "up-to-date"
}, y2 = { class: "modal-actions" }, si = "comfygit.pullModelStrategy", w2 = /* @__PURE__ */ fe({
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
    const o = e, a = s, l = _(localStorage.getItem(si) || "skip");
    dt(l, (b) => {
      localStorage.setItem(si, b);
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
            onClick: x[10] || (x[10] = lt(() => {
            }, ["stop"]))
          }, [
            t("div", Wb, [
              t("h3", Gb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (T) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", jb, [
              e.error ? (n(), i("div", Hb, [
                x[13] || (x[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  x[12] || (x[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  r.value ? (n(), i("p", Kb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", qb, [...x[14] || (x[14] = [
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
                t("div", Yb, [
                  x[17] || (x[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", Jb, [
                  x[18] || (x[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", Qb, [
                    (n(!0), i(H, null, ve(e.preview.commits, (T) => (n(), i("div", {
                      key: T.hash,
                      class: "commit-item"
                    }, [
                      t("span", Xb, f(T.short_hash || T.hash.slice(0, 7)), 1),
                      t("span", Zb, f(T.message), 1),
                      t("span", e2, f(T.date_relative || T.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", t2, [
                  x[22] || (x[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", s2, [
                    t("summary", null, [
                      x[19] || (x[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", o2, f(c.value) + " changes", 1)
                    ]),
                    t("div", n2, [
                      (n(!0), i(H, null, ve(e.preview.changes.workflows.added, (T) => (n(), i("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128)),
                      (n(!0), i(H, null, ve(e.preview.changes.workflows.modified, (T) => (n(), i("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(T) + " ", 1),
                        k(T) ? (n(), i("span", a2, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, ve(e.preview.changes.workflows.deleted, (T) => (n(), i("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + f(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", l2, [
                    t("summary", null, [
                      x[20] || (x[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", i2, f(u.value) + " to install", 1)
                    ]),
                    t("div", r2, [
                      (n(!0), i(H, null, ve(e.preview.changes.nodes.to_install, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", c2, [
                    t("summary", null, [
                      x[21] || (x[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", u2, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", d2, [
                      (n(!0), i(H, null, ve(e.preview.changes.models.referenced, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item"
                      }, f(T), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (n(), D(Bb, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", f2, [
                  x[27] || (x[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", m2, [
                    t("label", v2, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (T) => l.value = T),
                        value: "all"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      x[23] || (x[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", p2, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (T) => l.value = T),
                        value: "required"
                      }, null, 512), [
                        [Zt, l.value]
                      ]),
                      x[24] || (x[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", g2, [
                      Ke(t("input", {
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
                e.preview.commits_behind === 0 ? (n(), i("div", h2, [
                  x[29] || (x[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", y2, [
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
}), k2 = /* @__PURE__ */ ge(w2, [["__scopeId", "data-v-1d633bba"]]), _2 = { class: "modal-header" }, b2 = { class: "modal-title" }, $2 = { class: "modal-body" }, C2 = {
  key: 0,
  class: "loading-state"
}, x2 = {
  key: 1,
  class: "warning-box"
}, S2 = {
  key: 0,
  class: "commits-section"
}, I2 = { class: "commit-list" }, E2 = { class: "commit-hash" }, T2 = { class: "commit-message" }, R2 = { class: "commit-date" }, P2 = { class: "force-option" }, M2 = { class: "checkbox-option" }, D2 = { class: "commit-summary" }, L2 = { key: 0 }, A2 = { key: 1 }, O2 = {
  key: 0,
  class: "info-box"
}, N2 = {
  key: 1,
  class: "commits-section"
}, U2 = { class: "commit-list" }, z2 = { class: "commit-hash" }, F2 = { class: "commit-message" }, V2 = { class: "commit-date" }, B2 = {
  key: 2,
  class: "up-to-date"
}, W2 = { class: "modal-actions" }, G2 = /* @__PURE__ */ fe({
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
            onClick: c[6] || (c[6] = lt(() => {
            }, ["stop"]))
          }, [
            t("div", _2, [
              t("h3", b2, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", $2, [
              e.loading ? (n(), i("div", C2, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", x2, [...c[9] || (c[9] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", S2, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", I2, [
                    (n(!0), i(H, null, ve(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", E2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", T2, f(v.message), 1),
                      t("span", R2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", P2, [
                  t("label", M2, [
                    Ke(t("input", {
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
                t("div", D2, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", L2, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", A2, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", O2, [...c[15] || (c[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", N2, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", U2, [
                    (n(!0), i(H, null, ve(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", z2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", F2, f(v.message), 1),
                      t("span", V2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", B2, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", W2, [
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
}), j2 = /* @__PURE__ */ ge(G2, [["__scopeId", "data-v-3c2e35ab"]]), H2 = { class: "resolution-choice-group" }, K2 = ["disabled"], q2 = ["disabled"], Y2 = /* @__PURE__ */ fe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", H2, [
      t("button", {
        class: Ie(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, K2),
      t("button", {
        class: Ie(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, q2)
    ]));
  }
}), J2 = /* @__PURE__ */ ge(Y2, [["__scopeId", "data-v-985715ed"]]), Q2 = { class: "conflict-header" }, X2 = { class: "conflict-info" }, Z2 = { class: "workflow-name" }, e$ = { class: "conflict-description" }, t$ = {
  key: 0,
  class: "resolved-badge"
}, s$ = { class: "resolved-text" }, o$ = { class: "conflict-hashes" }, n$ = { class: "hash-item" }, a$ = { class: "hash-item" }, l$ = { class: "conflict-actions" }, i$ = /* @__PURE__ */ fe({
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
        class: Ie(["conflict-item", { resolved: r.value }])
      }, [
        t("div", Q2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", X2, [
            t("code", Z2, f(e.conflict.name) + ".json", 1),
            t("div", e$, f(c.value), 1)
          ]),
          r.value ? (n(), i("div", t$, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", s$, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", o$, [
          t("span", n$, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", a$, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", l$, [
          S(J2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), r$ = /* @__PURE__ */ ge(i$, [["__scopeId", "data-v-506d3bbf"]]), c$ = { class: "resolution-content" }, u$ = {
  key: 0,
  class: "error-box"
}, d$ = { class: "resolution-header" }, f$ = { class: "header-stats" }, m$ = { class: "stat" }, v$ = { class: "stat-value" }, p$ = { class: "stat resolved" }, g$ = { class: "stat-value" }, h$ = {
  key: 0,
  class: "stat pending"
}, y$ = { class: "stat-value" }, w$ = { class: "conflicts-list" }, k$ = {
  key: 1,
  class: "all-resolved-message"
}, _$ = /* @__PURE__ */ fe({
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
        t("div", c$, [
          e.error ? (n(), i("div", u$, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", d$, [
            t("div", f$, [
              t("div", m$, [
                t("span", v$, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", p$, [
                t("span", g$, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", h$, [
                t("span", y$, f(r.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", w$, [
            (n(!0), i(H, null, ve(e.workflowConflicts, (k) => (n(), D(r$, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: (C) => m(k.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", k$, [
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
}), b$ = /* @__PURE__ */ ge(_$, [["__scopeId", "data-v-c58d150d"]]), $$ = { class: "node-conflict-item" }, C$ = { class: "node-header" }, x$ = { class: "node-name" }, S$ = { class: "node-id" }, I$ = { class: "version-comparison" }, E$ = { class: "version yours" }, T$ = { class: "version theirs" }, R$ = { class: "chosen-version" }, P$ = { class: "chosen" }, M$ = { class: "chosen-reason" }, D$ = { class: "affected-workflows" }, L$ = { class: "wf-source" }, A$ = { class: "wf-version" }, O$ = /* @__PURE__ */ fe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", $$, [
      t("div", C$, [
        t("code", x$, f(e.conflict.node_name), 1),
        t("span", S$, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", I$, [
        t("div", E$, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", T$, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", R$, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", P$, f(e.conflict.chosen_version), 1),
        t("span", M$, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", D$, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(H, null, ve(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, f(a.name), 1),
            t("span", L$, "(" + f(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", A$, "needs v" + f(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), N$ = /* @__PURE__ */ ge(O$, [["__scopeId", "data-v-8b626725"]]), U$ = { class: "validation-content" }, z$ = {
  key: 0,
  class: "compatible-message"
}, F$ = { class: "conflicts-list" }, V$ = {
  key: 2,
  class: "warnings-section"
}, B$ = /* @__PURE__ */ fe({
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
        t("div", U$, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", z$, [
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
            t("div", F$, [
              (n(!0), i(H, null, ve(e.validation.node_conflicts, (u) => (n(), D(N$, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", V$, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(H, null, ve(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, f(u), 1))), 128))
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
}), W$ = /* @__PURE__ */ ge(B$, [["__scopeId", "data-v-fefd26ed"]]), G$ = { key: 0 }, j$ = /* @__PURE__ */ fe({
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
    } = Xe(), k = _([]), C = _(null), b = _({}), x = _(!1), M = _(null), P = _(""), T = _(!1), L = _(null), V = _(!1), B = _("add"), E = _({
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
    function te() {
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
    const Z = _("idle"), _e = U(() => Z.value === "pull_preview"), $e = U(
      () => Z.value === "resolving" || Z.value === "validating"
    ), Le = U(
      () => Z.value === "validation_review" || Z.value === "executing"
    ), Ue = _(!1), Ne = _(null), qe = _(!1), pe = _(null), oe = _(!1), ce = _(null), ue = _(null), Te = _(/* @__PURE__ */ new Map()), Pe = _(null), ze = _(null), N = U(() => ce.value && Ar(ce.value) ? ce.value : null);
    async function R(ye) {
      pe.value = ye, Z.value = "pull_preview", oe.value = !0, ce.value = null, ue.value = null;
      try {
        ce.value = await m(ye);
      } catch (K) {
        ue.value = K instanceof Error ? K.message : "Failed to load pull preview";
      } finally {
        oe.value = !1;
      }
    }
    function F() {
      Z.value = "idle", ce.value = null, ue.value = null, pe.value = null;
    }
    async function q(ye) {
      if (!pe.value) return;
      Z.value = "executing", ue.value = null;
      const K = pe.value;
      try {
        const G = await v(K, ye);
        if (G.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        Ee(), Z.value = "idle", o("toast", `✓ Pulled from ${K}`, "success"), await A();
      } catch (G) {
        ue.value = G instanceof Error ? G.message : "Pull failed", Z.value = "pull_preview";
      }
    }
    function ne() {
      N.value && (Z.value = "resolving", ze.value = null);
    }
    function re(ye, K) {
      Te.value.set(ye, { name: ye, resolution: K });
    }
    function Ce() {
      Z.value = "pull_preview";
    }
    async function ie() {
      Z.value = "validating", ze.value = null;
      try {
        const ye = Array.from(Te.value.values());
        Pe.value = await p(pe.value, ye), Z.value = "validation_review";
      } catch (ye) {
        ze.value = ye instanceof Error ? ye.message : "Validation failed", Z.value = "resolving";
      }
    }
    async function we() {
      Z.value = "executing";
      const ye = pe.value;
      try {
        const K = Array.from(Te.value.values()), G = await v(ye, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: K
        });
        if (G.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        Ee(), Z.value = "idle", o("toast", `✓ Pulled from ${ye}`, "success"), await A();
      } catch (K) {
        ue.value = K instanceof Error ? K.message : "Pull failed", Z.value = "validation_review";
      }
    }
    function he() {
      Z.value = "resolving";
    }
    function Me() {
      Ee(), Z.value = "idle";
    }
    function Ee() {
      Te.value.clear(), Pe.value = null, ze.value = null, ue.value = null, ce.value = null, pe.value = null;
    }
    async function ee(ye) {
      pe.value = ye, Ue.value = !0, oe.value = !0, Ne.value = null;
      try {
        Ne.value = await g(ye);
      } catch (K) {
        M.value = K instanceof Error ? K.message : "Failed to load push preview";
      } finally {
        oe.value = !1;
      }
    }
    function Y() {
      Ue.value = !1, Ne.value = null, pe.value = null;
    }
    async function De(ye) {
      if (!pe.value) return;
      qe.value = !0;
      const K = pe.value;
      try {
        await w(K, ye), Y(), o("toast", `✓ Pushed to ${K}`, "success"), await A();
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Push failed", "error");
      } finally {
        qe.value = !1;
      }
    }
    function xe() {
      const ye = pe.value;
      Y(), ye && R(ye);
    }
    return Je(A), (ye, K) => (n(), i(H, null, [
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
                onClick: te
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
            V.value ? (n(), D(Mb, {
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
                C.value ? (n(), i("span", G$, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            I.value.length && !V.value ? (n(), D(it, {
              key: 2,
              title: "REMOTES",
              count: I.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(I.value, (G) => (n(), D(wb, {
                  key: G.name,
                  remote: G,
                  "sync-status": b.value[G.name],
                  "fetching-remote": L.value,
                  onFetch: X,
                  onEdit: W,
                  onRemove: z,
                  onPull: R,
                  onPush: ee
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
                  onClick: te
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
      S(k2, {
        show: _e.value,
        "remote-name": pe.value || "",
        preview: ce.value,
        loading: oe.value,
        pulling: Z.value === "executing",
        error: ue.value,
        "conflict-resolutions": Te.value,
        onClose: F,
        onPull: q,
        onOpenConflictResolution: ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(j2, {
        show: Ue.value,
        "remote-name": pe.value || "",
        preview: Ne.value,
        loading: oe.value,
        pushing: qe.value,
        onClose: Y,
        onPush: De,
        onPullFirst: xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      $e.value && N.value ? (n(), D(b$, {
        key: 0,
        "workflow-conflicts": N.value.workflow_conflicts,
        resolutions: Te.value,
        "operation-type": "pull",
        validating: Z.value === "validating",
        error: ze.value,
        onClose: Ce,
        onResolve: re,
        onApply: ie
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Le.value && Pe.value ? (n(), D(W$, {
        key: 1,
        validation: Pe.value,
        "operation-type": "pull",
        executing: Z.value === "executing",
        onProceed: we,
        onGoBack: he,
        onCancel: Me
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), H$ = /* @__PURE__ */ ge(j$, [["__scopeId", "data-v-9ae3b76d"]]), K$ = { class: "setting-info" }, q$ = { class: "setting-label" }, Y$ = {
  key: 0,
  class: "required-marker"
}, J$ = {
  key: 0,
  class: "setting-description"
}, Q$ = { class: "setting-control" }, X$ = /* @__PURE__ */ fe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ie(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", K$, [
        t("div", q$, [
          $(f(e.label) + " ", 1),
          e.required ? (n(), i("span", Y$, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", J$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Q$, [
        He(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Do = /* @__PURE__ */ ge(X$, [["__scopeId", "data-v-cb5d236c"]]), Z$ = { class: "toggle" }, eC = ["checked", "disabled"], tC = /* @__PURE__ */ fe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", Z$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, eC),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), oi = /* @__PURE__ */ ge(tC, [["__scopeId", "data-v-71c0f550"]]), sC = { class: "workspace-settings-content" }, oC = { class: "settings-section" }, nC = { class: "path-setting" }, aC = { class: "path-value" }, lC = { class: "path-setting" }, iC = { class: "path-value" }, rC = { class: "settings-section" }, cC = { class: "settings-section" }, uC = { class: "settings-section" }, dC = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = Xe(), u = _(!1), d = _(null), m = _(null), v = _(null), g = _(null), w = _(""), p = _(""), k = _(""), C = _(!1), b = _(!1), x = _(!1), M = _(!0);
    function P(te) {
      return te.join(" ");
    }
    function T(te) {
      return te.trim() ? te.trim().split(/\s+/) : [];
    }
    const L = U(() => {
      if (!g.value) return !1;
      const te = C.value, W = b.value, O = k.value !== P(g.value.comfyui_extra_args || []);
      return te || W || O;
    });
    async function V() {
      u.value = !0, d.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", k.value = P(v.value.comfyui_extra_args || []), C.value = !1, b.value = !1;
        const te = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        x.value = te !== "false", M.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (te) {
        d.value = te instanceof Error ? te.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function B() {
      var te;
      m.value = null;
      try {
        const W = {};
        C.value && (W.civitai_api_key = w.value || null), b.value && (W.huggingface_token = p.value || null), k.value !== P(((te = g.value) == null ? void 0 : te.comfyui_extra_args) || []) && (W.comfyui_extra_args = T(k.value)), await c(W, a.workspacePath || void 0), await V(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
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
    function I(te) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(te)), console.log("[ComfyGit] Auto-refresh setting saved:", te);
    }
    function A(te) {
      te ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", te ? "enabled" : "disabled");
    }
    return s({
      saveSettings: B,
      resetSettings: E,
      hasChanges: L,
      loadSettings: V
    }), Je(V), (te, W) => (n(), i("div", sC, [
      u.value ? (n(), D(Ms, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (n(), D(Ds, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: V
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        S(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var O, j;
            return [
              t("div", oC, [
                t("div", nC, [
                  W[7] || (W[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  W[8] || (W[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", aC, f(((O = v.value) == null ? void 0 : O.workspace_path) || "Loading..."), 1)
                ]),
                t("div", lC, [
                  W[9] || (W[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  W[10] || (W[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", iC, f(((j = v.value) == null ? void 0 : j.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", rC, [
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
        S(it, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", cC, [
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
        S(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", uC, [
              S(Do, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  S(oi, {
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
                  S(oi, {
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
}), Or = /* @__PURE__ */ ge(dC, [["__scopeId", "data-v-9c5b427b"]]), fC = /* @__PURE__ */ fe({
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
}), mC = { class: "base-tabs" }, vC = ["disabled", "onClick"], pC = {
  key: 0,
  class: "base-tabs__badge"
}, gC = /* @__PURE__ */ fe({
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
    return (r, c) => (n(), i("div", mC, [
      (n(!0), i(H, null, ve(e.tabs, (u) => (n(), i("button", {
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
        u.badge ? (n(), i("span", pC, f(u.badge), 1)) : y("", !0)
      ], 10, vC))), 128))
    ]));
  }
}), Nr = /* @__PURE__ */ ge(gC, [["__scopeId", "data-v-ad5e6cad"]]), hC = { class: "log-viewer-wrapper" }, yC = ["disabled", "title"], wC = /* @__PURE__ */ fe({
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
    Je(r), dt(() => s.logs, r);
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
    return (m, v) => (n(), i("div", hC, [
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
        }, f(a.value === "copied" ? "Copied!" : "Copy"), 9, yC),
        (n(!0), i(H, null, ve(l.value, (g, w) => (n(), i("div", {
          key: w,
          class: Ie(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Ur = /* @__PURE__ */ ge(wC, [["__scopeId", "data-v-c0cc6d21"]]), kC = /* @__PURE__ */ fe({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = Xe(), c = _("workspace"), u = _([]), d = _(!1), m = _(null), v = _(!1), g = _(null), w = _(null), p = _(!1), k = U(() => c.value === "workspace" ? g.value : w.value);
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
    }), Je(() => {
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
}), _C = /* @__PURE__ */ fe({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = Xe(), r = _([]), c = _(!1), u = _(null), d = _(!1), m = _("production"), v = _(null), g = _(!1);
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
    return Je(() => {
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
}), bC = { class: "env-title" }, $C = {
  key: 0,
  class: "current-badge"
}, CC = {
  key: 0,
  class: "branch-info"
}, xC = /* @__PURE__ */ fe({
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
        t("div", bC, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", $C, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", CC, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        He(s.$slots, "actions", {}, void 0, !0)
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
}), SC = /* @__PURE__ */ ge(xC, [["__scopeId", "data-v-9231917a"]]), IC = { class: "env-details" }, EC = { class: "status-row" }, TC = {
  key: 0,
  class: "detail-row"
}, RC = { class: "value mono" }, PC = {
  key: 1,
  class: "detail-row"
}, MC = { class: "value mono small" }, DC = { class: "collapsible-section" }, LC = { class: "value" }, AC = {
  key: 0,
  class: "collapsible-body"
}, OC = { class: "item-list" }, NC = { class: "item-name" }, UC = { class: "item-name" }, zC = { class: "item-name" }, FC = { class: "item-name" }, VC = {
  key: 0,
  class: "empty-list"
}, BC = { class: "collapsible-section" }, WC = { class: "value" }, GC = {
  key: 0,
  class: "collapsible-body"
}, jC = { class: "item-list" }, HC = { class: "item-name" }, KC = {
  key: 0,
  class: "item-meta"
}, qC = {
  key: 0,
  class: "empty-list"
}, YC = { class: "collapsible-section" }, JC = { class: "value" }, QC = {
  key: 0,
  class: "missing-count"
}, XC = {
  key: 0,
  class: "collapsible-body"
}, ZC = { class: "item-list" }, ex = { class: "model-row" }, tx = { class: "item-name" }, sx = { class: "model-meta" }, ox = { class: "item-meta" }, nx = {
  key: 0,
  class: "item-meta"
}, ax = {
  key: 0,
  class: "empty-list"
}, lx = {
  key: 2,
  class: "section-divider"
}, ix = {
  key: 3,
  class: "detail-row"
}, rx = { class: "value" }, cx = { class: "footer-actions" }, ux = /* @__PURE__ */ fe({
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
          t("div", IC, [
            t("div", EC, [
              m[6] || (m[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Ie(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", TC, [
              m[7] || (m[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", RC, f(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", PC, [
              m[8] || (m[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", MC, f(e.environment.path), 1)
            ])) : y("", !0),
            m[17] || (m[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", DC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[0] || (m[0] = (E) => r("workflows"))
              }, [
                m[9] || (m[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", LC, f(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (n(), i("span", {
                  key: 0,
                  class: Ie(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", AC, [
                t("div", OC, [
                  (n(!0), i(H, null, ve(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", NC, f(E), 1),
                    m[10] || (m[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ve(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", UC, f(E), 1),
                    m[11] || (m[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ve(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", zC, f(E), 1),
                    m[12] || (m[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ve(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    t("span", FC, f(E), 1),
                    m[13] || (m[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", VC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", BC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[1] || (m[1] = (E) => r("nodes"))
              }, [
                m[14] || (m[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", WC, f(((p = e.detail) == null ? void 0 : p.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (n(), i("span", {
                  key: 0,
                  class: Ie(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (n(), i("div", GC, [
                t("div", jC, [
                  (n(!0), i(H, null, ve(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    t("span", HC, f(E.name), 1),
                    E.version ? (n(), i("span", KC, f(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", qC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", YC, [
              t("div", {
                class: "collapsible-header",
                onClick: m[2] || (m[2] = (E) => r("models"))
              }, [
                m[15] || (m[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", JC, [
                  $(f(((b = e.detail) == null ? void 0 : b.model_count) ?? e.environment.model_count) + " ", 1),
                  (M = (x = e.detail) == null ? void 0 : x.models) != null && M.missing.length ? (n(), i("span", QC, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (P = e.detail) != null && P.models ? (n(), i("span", {
                  key: 0,
                  class: Ie(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (T = e.detail) != null && T.models && l.value.has("models") ? (n(), i("div", XC, [
                t("div", ZC, [
                  (n(!0), i(H, null, ve(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", ex, [
                      t("span", tx, f(E.filename), 1),
                      t("span", {
                        class: Ie(["criticality-badge", E.criticality])
                      }, f(E.criticality), 3)
                    ]),
                    t("div", sx, [
                      t("span", ox, f(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", nx, " used by: " + f(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", ax, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (L = e.detail) != null && L.created_at || e.environment.created_at ? (n(), i("div", lx)) : y("", !0),
            (V = e.detail) != null && V.created_at || e.environment.created_at ? (n(), i("div", ix, [
              m[16] || (m[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", rx, f(u(((B = e.detail) == null ? void 0 : B.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        t("div", cx, [
          e.canDelete ? (n(), D(Re, {
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
}), dx = /* @__PURE__ */ ge(ux, [["__scopeId", "data-v-92e68b76"]]), zr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Fr = "3.12", ul = [
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
], Vr = "auto", fx = { class: "progress-bar" }, mx = /* @__PURE__ */ fe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", fx, [
      t("div", {
        class: Ie(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), la = /* @__PURE__ */ ge(mx, [["__scopeId", "data-v-1beb0512"]]), vx = { class: "task-progress" }, px = { class: "progress-info" }, gx = { class: "progress-percentage" }, hx = { class: "progress-message" }, yx = {
  key: 0,
  class: "progress-steps"
}, wx = { class: "step-icon" }, kx = { class: "step-label" }, _x = /* @__PURE__ */ fe({
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
    return (l, r) => (n(), i("div", vx, [
      S(la, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", px, [
        t("span", gx, f(e.progress) + "%", 1),
        t("span", hx, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", yx, [
        (n(!0), i(H, null, ve(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Ie(["step", o(c.id)])
        }, [
          t("span", wx, f(a(c.id)), 1),
          t("span", kx, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Gn = /* @__PURE__ */ ge(_x, [["__scopeId", "data-v-9d1de66c"]]), bx = {
  key: 0,
  class: "create-env-form"
}, $x = { class: "form-field" }, Cx = { class: "form-field" }, xx = ["value"], Sx = { class: "form-field" }, Ix = ["disabled"], Ex = ["value"], Tx = { class: "form-field" }, Rx = ["value"], Px = { class: "form-field form-field--checkbox" }, Mx = { class: "form-checkbox" }, Dx = {
  key: 1,
  class: "create-env-progress"
}, Lx = { class: "creating-intro" }, Ax = {
  key: 0,
  class: "progress-warning"
}, Ox = {
  key: 1,
  class: "create-error"
}, Nx = { class: "error-message" }, Ux = {
  key: 1,
  class: "footer-status"
}, zx = 10, Fx = /* @__PURE__ */ fe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r } = Xe(), c = _(""), u = _(Fr), d = _("latest"), m = _(Vr), v = _(!1), g = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = _(!1), p = _(!1), k = _({
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
          }, te = await l(A);
          te.status === "started" ? L() : te.status === "error" && (k.value = {
            progress: 0,
            message: te.message || "Failed to start creation",
            error: te.message
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
          b++, b >= zx && (V(), k.value.error = "Lost connection to server.");
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
    return Je(async () => {
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
        p.value ? (n(), i("div", Dx, [
          t("p", Lx, [
            A[11] || (A[11] = $(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            A[12] || (A[12] = $("... ", -1))
          ]),
          S(Gn, {
            progress: k.value.progress,
            message: k.value.message,
            "current-phase": k.value.phase,
            variant: k.value.error ? "error" : "default",
            "show-steps": !0,
            steps: x
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          k.value.error ? y("", !0) : (n(), i("p", Ax, " This may take several minutes. Please wait... ")),
          k.value.error ? (n(), i("div", Ox, [
            t("p", Nx, f(k.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", bx, [
          t("div", $x, [
            A[6] || (A[6] = t("label", { class: "form-label" }, "Name", -1)),
            Ke(t("input", {
              ref_key: "nameInput",
              ref: M,
              "onUpdate:modelValue": A[0] || (A[0] = (te) => c.value = te),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ht(T, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", Cx, [
            A[7] || (A[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (te) => u.value = te),
              class: "form-select"
            }, [
              (n(!0), i(H, null, ve(Be(zr), (te) => (n(), i("option", {
                key: te,
                value: te
              }, f(te), 9, xx))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", Sx, [
            A[8] || (A[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (te) => d.value = te),
              class: "form-select",
              disabled: w.value
            }, [
              (n(!0), i(H, null, ve(g.value, (te) => (n(), i("option", {
                key: te.tag_name,
                value: te.tag_name
              }, f(te.name), 9, Ex))), 128))
            ], 8, Ix), [
              [hs, d.value]
            ])
          ]),
          t("div", Tx, [
            A[9] || (A[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ke(t("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (te) => m.value = te),
              class: "form-select"
            }, [
              (n(!0), i(H, null, ve(Be(ul), (te) => (n(), i("option", {
                key: te,
                value: te
              }, f(te) + f(te === "auto" ? " (detect GPU)" : ""), 9, Rx))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", Px, [
            t("label", Mx, [
              Ke(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (te) => v.value = te)
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
          k.value.error ? (n(), D(Re, {
            key: 0,
            variant: "secondary",
            onClick: B
          }, {
            default: h(() => [...A[15] || (A[15] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", Ux, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          S(Re, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: T
          }, {
            default: h(() => [...A[13] || (A[13] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Re, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (te) => o("close"))
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
}), Vx = /* @__PURE__ */ ge(Fx, [["__scopeId", "data-v-f37eaa42"]]), Bx = /* @__PURE__ */ fe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = Xe(), c = _([]), u = _(!1), d = _(null), m = _(""), v = _(!1), g = _(!1), w = _(null), p = _(null), k = U(() => {
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
    return Je(P), s({
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
            k.value.length ? (n(), D(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: k.value.length
            }, {
              default: h(() => [
                (n(!0), i(H, null, ve(k.value, (V) => (n(), D(SC, {
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
      w.value ? (n(), D(dx, {
        key: 0,
        environment: w.value,
        detail: p.value,
        "can-delete": c.value.length > 1,
        onClose: L[4] || (L[4] = (V) => {
          w.value = null, p.value = null;
        }),
        onDelete: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      g.value ? (n(), D(Vx, {
        key: 1,
        onClose: L[5] || (L[5] = (V) => g.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), Wx = /* @__PURE__ */ ge(Bx, [["__scopeId", "data-v-0c0fbd88"]]), Gx = { class: "file-path" }, jx = { class: "file-path-text" }, Hx = ["title"], Kx = /* @__PURE__ */ fe({
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
    return (l, r) => (n(), i("div", Gx, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", jx, f(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, f(o.value ? "✓" : "📋"), 9, Hx)) : y("", !0)
    ]));
  }
}), qx = /* @__PURE__ */ ge(Kx, [["__scopeId", "data-v-f0982173"]]), Yx = { class: "base-textarea-wrapper" }, Jx = ["value", "rows", "placeholder", "disabled", "maxlength"], Qx = {
  key: 0,
  class: "base-textarea-count"
}, Xx = /* @__PURE__ */ fe({
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
    return (r, c) => (n(), i("div", Yx, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Ht(lt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Ht(lt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ht(l, ["enter"])
        ]
      }, null, 40, Jx),
      e.showCharCount && e.maxLength ? (n(), i("div", Qx, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Ua = /* @__PURE__ */ ge(Xx, [["__scopeId", "data-v-c6d16c93"]]), Zx = ["checked", "disabled"], e3 = { class: "base-checkbox-box" }, t3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, s3 = {
  key: 0,
  class: "base-checkbox-label"
}, o3 = /* @__PURE__ */ fe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Ie(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, Zx),
      t("span", e3, [
        e.modelValue ? (n(), i("svg", t3, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", s3, [
        He(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), jn = /* @__PURE__ */ ge(o3, [["__scopeId", "data-v-bf17c831"]]), n3 = { class: "export-blocked" }, a3 = { class: "error-header" }, l3 = { class: "error-summary" }, i3 = { class: "error-description" }, r3 = { class: "issues-list" }, c3 = { class: "issue-message" }, u3 = {
  key: 0,
  class: "issue-details"
}, d3 = ["onClick"], f3 = { class: "issue-fix" }, m3 = {
  key: 0,
  class: "commit-section"
}, v3 = {
  key: 0,
  class: "issues-warning"
}, p3 = {
  key: 1,
  class: "commit-error"
}, g3 = /* @__PURE__ */ fe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = Xe(), r = _(""), c = _(!1), u = _(!1), d = _(""), m = Ws({}), v = U(
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
        t("div", n3, [
          t("div", a3, [
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
            t("div", l3, [
              x[5] || (x[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", i3, f(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", r3, [
            (n(!0), i(H, null, ve(e.issues, (M, P) => (n(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              t("div", c3, f(M.message), 1),
              M.details.length ? (n(), i("div", u3, [
                (n(!0), i(H, null, ve(k(P), (T, L) => (n(), i("div", {
                  key: L,
                  class: "issue-detail"
                }, f(T), 1))), 128)),
                M.details.length > 3 && !m[P] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (T) => m[P] = !0
                }, " +" + f(M.details.length - 3) + " more ", 9, d3)) : y("", !0)
              ])) : y("", !0),
              t("div", f3, [
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
          v.value ? (n(), i("div", m3, [
            g.value ? (n(), i("div", v3, [
              x[8] || (x[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              S(jn, {
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
            S(Ua, {
              modelValue: r.value,
              "onUpdate:modelValue": x[1] || (x[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: c.value || w.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", p3, f(d.value), 1)) : y("", !0)
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
        ], 64)) : (n(), D(Re, {
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
}), Br = /* @__PURE__ */ ge(g3, [["__scopeId", "data-v-bd79ba24"]]), h3 = { class: "export-warnings" }, y3 = {
  key: 0,
  class: "success-header"
}, w3 = { class: "warning-header" }, k3 = { class: "warning-summary" }, _3 = { class: "warning-title" }, b3 = { class: "models-section" }, $3 = { class: "models-list" }, C3 = { class: "model-info" }, x3 = { class: "model-filename" }, S3 = { class: "model-workflows" }, I3 = ["onClick"], E3 = /* @__PURE__ */ fe({
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
          t("div", h3, [
            e.models.length === 0 ? (n(), i("div", y3, [...m[4] || (m[4] = [
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
              t("div", w3, [
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
                t("div", k3, [
                  t("h3", _3, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", b3, [
                t("div", $3, [
                  (n(!0), i(H, null, ve(c.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", C3, [
                      t("div", x3, f(v.filename), 1),
                      t("div", S3, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => r.value = v.hash
                    }, " Add Source ", 8, I3)
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
      r.value ? (n(), D(rl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Wr = /* @__PURE__ */ ge(E3, [["__scopeId", "data-v-b698d882"]]), T3 = { class: "export-card" }, R3 = { class: "export-path-row" }, P3 = { class: "export-actions" }, M3 = {
  key: 1,
  class: "export-warning"
}, D3 = /* @__PURE__ */ fe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = Xe(), a = _(""), l = _(!1), r = _(!1), c = _(!1), u = _(null), d = _(!1), m = _(null), v = _(!1), g = _(!1), w = U(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
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
          S(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", T3, [
                L[7] || (L[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", R3, [
                  S(Ko, {
                    modelValue: a.value,
                    "onUpdate:modelValue": L[1] || (L[1] = (V) => a.value = V),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", P3, [
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
          u.value ? (n(), D(it, {
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
                        S(qx, {
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
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", M3, [...L[8] || (L[8] = [
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
}), L3 = /* @__PURE__ */ ge(D3, [["__scopeId", "data-v-ddeffd68"]]), A3 = { class: "file-input-wrapper" }, O3 = ["accept", "multiple", "disabled"], N3 = /* @__PURE__ */ fe({
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
    }), (u, d) => (n(), i("div", A3, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, O3),
      S(de, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          He(u.$slots, "default", {}, () => [
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
}), U3 = /* @__PURE__ */ ge(N3, [["__scopeId", "data-v-cd192091"]]), z3 = {
  key: 0,
  class: "drop-zone-empty"
}, F3 = { class: "drop-zone-text" }, V3 = { class: "drop-zone-primary" }, B3 = { class: "drop-zone-secondary" }, W3 = { class: "drop-zone-actions" }, G3 = {
  key: 1,
  class: "drop-zone-file"
}, j3 = { class: "file-info" }, H3 = { class: "file-details" }, K3 = { class: "file-name" }, q3 = { class: "file-size" }, Y3 = /* @__PURE__ */ fe({
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
      class: Ie(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: lt(m, ["prevent"]),
      onDragover: lt(v, ["prevent"]),
      onDragleave: lt(g, ["prevent"]),
      onDrop: lt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", G3, [
        t("div", j3, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", H3, [
            t("div", K3, f(u.value), 1),
            t("div", q3, f(d.value), 1)
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
      ])) : (n(), i("div", z3, [
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
        t("div", F3, [
          t("p", V3, f(e.primaryText), 1),
          t("p", B3, f(e.secondaryText), 1)
        ]),
        t("div", W3, [
          S(U3, {
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
}), J3 = /* @__PURE__ */ ge(Y3, [["__scopeId", "data-v-0f79cb86"]]), Q3 = { class: "import-preview" }, X3 = { class: "preview-header" }, Z3 = {
  key: 0,
  class: "source-env"
}, e5 = { class: "preview-content" }, t5 = { class: "preview-section" }, s5 = { class: "section-header" }, o5 = { class: "section-info" }, n5 = { class: "section-count" }, a5 = {
  key: 0,
  class: "item-list"
}, l5 = { class: "item-name" }, i5 = {
  key: 0,
  class: "item-more"
}, r5 = { class: "preview-section" }, c5 = { class: "section-header" }, u5 = { class: "section-info" }, d5 = { class: "section-count" }, f5 = {
  key: 0,
  class: "item-list"
}, m5 = { class: "item-details" }, v5 = { class: "item-name" }, p5 = { class: "item-meta" }, g5 = {
  key: 0,
  class: "item-more"
}, h5 = { class: "preview-section" }, y5 = { class: "section-header" }, w5 = { class: "section-info" }, k5 = { class: "section-count" }, _5 = {
  key: 0,
  class: "item-list"
}, b5 = { class: "item-name" }, $5 = {
  key: 0,
  class: "item-more"
}, C5 = {
  key: 0,
  class: "preview-section"
}, x5 = { class: "git-info" }, S5 = /* @__PURE__ */ fe({
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
    return (c, u) => (n(), i("div", Q3, [
      t("div", X3, [
        S(Nt, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", Z3, [
          u[1] || (u[1] = $(" From: ", -1)),
          S(Na, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", e5, [
        t("div", t5, [
          t("div", s5, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", o5, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", n5, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", a5, [
            (n(!0), i(H, null, ve(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", l5, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", i5, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", r5, [
          t("div", c5, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", u5, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", d5, f(a.value) + " file" + f(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", f5, [
            (n(!0), i(H, null, ve(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", m5, [
                t("span", v5, f(d.filename), 1),
                t("span", p5, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", g5, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", h5, [
          t("div", y5, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", w5, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", k5, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", _5, [
            (n(!0), i(H, null, ve(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", b5, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", $5, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", C5, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", x5, [
            e.gitBranch ? (n(), D(ft, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                S(Na, null, {
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
}), I5 = /* @__PURE__ */ ge(S5, [["__scopeId", "data-v-182fe113"]]), E5 = { class: "import-config" }, T5 = { class: "config-container" }, R5 = { class: "config-field" }, P5 = { class: "input-wrapper" }, M5 = ["value"], D5 = {
  key: 0,
  class: "validating-indicator"
}, L5 = {
  key: 1,
  class: "valid-indicator"
}, A5 = {
  key: 0,
  class: "field-error"
}, O5 = { class: "config-field" }, N5 = { class: "strategy-options" }, U5 = ["value", "checked", "onChange"], z5 = { class: "strategy-content" }, F5 = { class: "strategy-label" }, V5 = { class: "strategy-description" }, B5 = { class: "config-field switch-field" }, W5 = { class: "switch-label" }, G5 = ["checked"], j5 = { class: "advanced-section" }, H5 = { class: "advanced-content" }, K5 = { class: "config-field" }, q5 = ["value"], Y5 = ["value"], J5 = /* @__PURE__ */ fe({
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
    return (v, g) => (n(), i("div", E5, [
      S(Nt, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", T5, [
        t("div", R5, [
          S(Mn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", P5, [
            t("input", {
              type: "text",
              class: Ie(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, M5),
            l.value ? (n(), i("span", D5, "...")) : r.value ? (n(), i("span", L5, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", A5, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", O5, [
          S(Mn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", N5, [
            (n(), i(H, null, ve(c, (w) => t("label", {
              key: w.value,
              class: Ie(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => a("update:modelStrategy", w.value)
              }, null, 40, U5),
              t("div", z5, [
                t("span", F5, f(w.label), 1),
                t("span", V5, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", B5, [
          t("label", W5, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, G5),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", j5, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", H5, [
            t("div", K5, [
              S(Mn, null, {
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
                (n(!0), i(H, null, ve(Be(ul), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, Y5))), 128))
              ], 40, q5)
            ])
          ])
        ])
      ])
    ]));
  }
}), Q5 = /* @__PURE__ */ ge(J5, [["__scopeId", "data-v-89ea06a1"]]), X5 = { class: "import-flow" }, Z5 = {
  key: 0,
  class: "import-empty"
}, eS = { class: "git-import-section" }, tS = { class: "git-url-input-row" }, sS = ["disabled"], oS = {
  key: 0,
  class: "git-error"
}, nS = {
  key: 1,
  class: "import-configure"
}, aS = { class: "selected-file-bar" }, lS = {
  key: 0,
  class: "file-bar-content"
}, iS = { class: "file-bar-info" }, rS = { class: "file-bar-name" }, cS = { class: "file-bar-size" }, uS = {
  key: 1,
  class: "file-bar-content"
}, dS = { class: "file-bar-info" }, fS = { class: "file-bar-name" }, mS = {
  key: 0,
  class: "preview-loading"
}, vS = { class: "import-actions" }, pS = {
  key: 2,
  class: "import-progress"
}, gS = { class: "creating-intro" }, hS = {
  key: 0,
  class: "progress-warning"
}, yS = {
  key: 1,
  class: "import-error"
}, wS = { class: "error-message" }, kS = {
  key: 3,
  class: "import-complete"
}, _S = { class: "complete-message" }, bS = { class: "complete-title" }, $S = { class: "complete-details" }, CS = { class: "complete-actions" }, xS = /* @__PURE__ */ fe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var qe, pe, oe, ce;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = Xe();
    let g = null;
    const w = _(null), p = _(a.resumeImport ?? !1), k = _(!1), C = _(!1), b = _(""), x = _(!1), M = _(null), P = _(""), T = _(null), L = _(!1), V = _(null), B = _(null), E = _({
      name: ((qe = a.initialProgress) == null ? void 0 : qe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), I = _(null), A = _({
      message: ((pe = a.initialProgress) == null ? void 0 : pe.message) ?? "Preparing import...",
      phase: ((oe = a.initialProgress) == null ? void 0 : oe.phase) ?? "",
      progress: ((ce = a.initialProgress) == null ? void 0 : ce.progress) ?? 0,
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
        workflows: ue.workflows.map((Te) => Te.name),
        models: ue.models.map((Te) => ({
          filename: Te.filename,
          size: 0,
          type: Te.relative_path.split("/")[0] || "model"
        })),
        nodes: ue.nodes.map((Te) => Te.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), O = U(() => !x.value && !M.value && B.value && E.value.name.length > 0 && !I.value && (w.value || T.value));
    async function j(ue) {
      w.value = ue, x.value = !0, M.value = null, B.value = null;
      try {
        const Te = await r(ue);
        B.value = Te;
      } catch (Te) {
        M.value = Te instanceof Error ? Te.message : "Failed to analyze file", console.error("Preview error:", Te);
      } finally {
        x.value = !1;
      }
    }
    function X() {
      w.value = null, T.value = null, P.value = "", V.value = null, k.value = !1, C.value = !1, b.value = "", B.value = null, M.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, I.value = null, l("source-cleared");
    }
    function z() {
      Ue(), X(), p.value = !1, x.value = !1, L.value = !1, A.value = {
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
    function Z(ue) {
      try {
        const Te = new URL(ue);
        return Te.host + Te.pathname.replace(/\.git$/, "");
      } catch {
        return ue;
      }
    }
    async function _e(ue) {
      if (!ue) {
        I.value = "Environment name is required";
        return;
      }
      try {
        const Te = await u(ue);
        I.value = Te.valid ? null : Te.error || "Invalid name";
      } catch {
        I.value = "Failed to validate name";
      }
    }
    async function $e() {
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
          const Pe = await v();
          return A.value = {
            message: Pe.message,
            phase: Pe.phase || "",
            progress: Pe.progress ?? (Pe.state === "importing" ? 50 : 0),
            error: Pe.error || null
          }, Pe.state === "complete" ? (Ue(), C.value = !0, b.value = `Environment '${Pe.environment_name}' created successfully`, p.value = !1, k.value = !0, Pe.environment_name && l("import-complete", Pe.environment_name, E.value.switchAfterImport), !1) : Pe.state === "error" ? (Ue(), C.value = !1, b.value = Pe.error || Pe.message, p.value = !1, k.value = !0, !1) : !0;
        } catch (Pe) {
          return console.error("Failed to poll import progress:", Pe), !0;
        }
      };
      await ue() && (g = setInterval(async () => {
        await ue() || Ue();
      }, 2e3));
    }
    function Ue() {
      g && (clearInterval(g), g = null);
    }
    function Ne(ue) {
      return ue < 1024 ? `${ue} B` : ue < 1024 * 1024 ? `${(ue / 1024).toFixed(1)} KB` : ue < 1024 * 1024 * 1024 ? `${(ue / (1024 * 1024)).toFixed(1)} MB` : `${(ue / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Je(async () => {
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
    }), (ue, Te) => {
      var Pe;
      return n(), i("div", X5, [
        !w.value && !T.value && !p.value ? (n(), i("div", Z5, [
          S(J3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: j
          }),
          Te[7] || (Te[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", eS, [
            Te[5] || (Te[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", tS, [
              Ke(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Te[0] || (Te[0] = (ze) => P.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ht(ae, ["enter"]),
                disabled: L.value
              }, null, 40, sS), [
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
            V.value ? (n(), i("div", oS, f(V.value), 1)) : y("", !0),
            Te[6] || (Te[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || T.value) && !p.value && !k.value ? (n(), i("div", nS, [
          t("div", aS, [
            w.value ? (n(), i("div", lS, [
              Te[8] || (Te[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", iS, [
                t("div", rS, f(w.value.name), 1),
                t("div", cS, f(Ne(w.value.size)), 1)
              ])
            ])) : T.value ? (n(), i("div", uS, [
              Te[10] || (Te[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", dS, [
                t("div", fS, f(Z(T.value)), 1),
                Te[9] || (Te[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            S(de, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: h(() => [...Te[11] || (Te[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (n(), i("div", mS, [...Te[12] || (Te[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : M.value ? (n(), D(Qt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [M.value]
          }, null, 8, ["details"])) : B.value ? (n(), D(I5, {
            key: 2,
            "source-environment": W.value.sourceEnvironment,
            workflows: W.value.workflows,
            models: W.value.models,
            nodes: W.value.nodes,
            "git-branch": W.value.gitBranch,
            "git-commit": W.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          B.value ? (n(), D(Q5, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": Te[1] || (Te[1] = (ze) => E.value.name = ze),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": Te[2] || (Te[2] = (ze) => E.value.modelStrategy = ze),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": Te[3] || (Te[3] = (ze) => E.value.torchBackend = ze),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": Te[4] || (Te[4] = (ze) => E.value.switchAfterImport = ze),
            "name-error": I.value,
            onValidateName: _e
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((Pe = B.value) != null && Pe.models_needing_download) ? (n(), D(Qt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", vS, [
            S(de, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: h(() => [...Te[13] || (Te[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(de, {
              variant: "primary",
              size: "md",
              disabled: !O.value,
              onClick: $e
            }, {
              default: h(() => [...Te[14] || (Te[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (n(), i("div", pS, [
          t("p", gS, [
            Te[15] || (Te[15] = $(" Importing environment ", -1)),
            t("strong", null, f(E.value.name), 1),
            Te[16] || (Te[16] = $("... ", -1))
          ]),
          S(Gn, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? y("", !0) : (n(), i("p", hS, " This may take several minutes. Please wait... ")),
          A.value.error ? (n(), i("div", yS, [
            t("p", wS, f(A.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (n(), i("div", kS, [
          t("div", {
            class: Ie(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", _S, [
            t("div", bS, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", $S, f(b.value), 1)
          ]),
          t("div", CS, [
            S(de, {
              variant: "primary",
              size: "md",
              onClick: z
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
}), Gr = /* @__PURE__ */ ge(xS, [["__scopeId", "data-v-72cbc04e"]]), SS = /* @__PURE__ */ fe({
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
}), IS = /* @__PURE__ */ ge(SS, [["__scopeId", "data-v-e13bfe76"]]), Cn = mo(), ES = 5e3, co = _([]), _a = _(!1), ba = _(null);
let Lo = null;
async function xn(e, s) {
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
    _a.value = !0, ba.value = null;
    try {
      let p;
      if (!Cn) {
        const k = await xn("/v2/comfygit/deploy/instances");
        if (!k.ok)
          throw new Error(`Failed to fetch instances: ${k.status}`);
        p = await k.json();
      }
      co.value = p.instances;
    } catch (p) {
      ba.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      _a.value = !1;
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
      if (!Cn) {
        const k = u(p, "stop"), C = await xn(k, { method: "POST" });
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
      if (!Cn) {
        const k = u(p, "start"), C = await xn(k, { method: "POST" });
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
      if (!Cn) {
        const k = u(p, "terminate"), C = await xn(k, { method: "DELETE" });
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
    Lo || (Lo = window.setInterval(c, ES));
  }
  function w() {
    Lo && (clearInterval(Lo), Lo = null);
  }
  return dt(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: co,
    isLoading: _a,
    error: ba,
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
const TS = { class: "instance-header" }, RS = { class: "provider-badge" }, PS = { class: "instance-name" }, MS = {
  key: 0,
  class: "spinner"
}, DS = { class: "instance-details" }, LS = {
  key: 0,
  class: "detail"
}, AS = {
  key: 1,
  class: "detail instance-url"
}, OS = {
  key: 2,
  class: "detail"
}, NS = {
  key: 3,
  class: "detail"
}, US = {
  key: 4,
  class: "detail total-cost"
}, zS = {
  key: 0,
  class: "deployment-progress"
}, FS = { class: "progress-message" }, VS = { class: "instance-actions" }, BS = /* @__PURE__ */ fe({
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
      class: Ie(["instance-card", l.value])
    }, [
      t("div", TS, [
        t("span", RS, f(o.value), 1),
        t("span", PS, f(e.instance.name), 1),
        t("span", {
          class: Ie(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", MS)) : y("", !0),
          $(" " + f(a.value), 1)
        ], 2)
      ]),
      t("div", DS, [
        e.instance.gpu_type ? (n(), i("span", LS, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", AS, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", OS, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", NS, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", US, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", zS, [
        t("div", FS, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), D(la, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", VS, [
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
}), WS = /* @__PURE__ */ ge(BS, [["__scopeId", "data-v-746c3894"]]), GS = { class: "instances-tab" }, jS = { class: "instances-header" }, HS = {
  key: 0,
  class: "loading-state"
}, KS = {
  key: 1,
  class: "empty-state"
}, qS = {
  key: 2,
  class: "instances-list"
}, YS = /* @__PURE__ */ fe({
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
    return (a, l) => (n(), i("div", GS, [
      t("div", jS, [
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
      e.isLoading && e.instances.length === 0 ? (n(), i("div", HS, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", KS, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", qS, [
        (n(!0), i(H, null, ve(o.value, (r) => (n(), D(WS, {
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
}), JS = /* @__PURE__ */ ge(YS, [["__scopeId", "data-v-ba614fc3"]]), QS = { class: "remote-header" }, XS = { class: "remote-info" }, ZS = { class: "remote-icon" }, e8 = { class: "remote-name" }, t8 = {
  key: 0,
  class: "default-badge"
}, s8 = {
  key: 1,
  class: "sync-badge"
}, o8 = {
  key: 0,
  class: "ahead"
}, n8 = {
  key: 1,
  class: "behind"
}, a8 = {
  key: 1,
  class: "synced"
}, l8 = ["href"], i8 = {
  key: 1,
  class: "remote-url-text"
}, r8 = { class: "remote-actions" }, c8 = /* @__PURE__ */ fe({
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
      class: Ie(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", QS, [
        t("div", XS, [
          t("span", ZS, f(o.value ? "🔗" : "🌐"), 1),
          t("span", e8, f(e.remote.name), 1),
          o.value ? (n(), i("span", t8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", s8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", o8, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", n8, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", a8, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = lt(() => {
          }, ["stop"]))
        }, f(l.value), 9, l8)) : (n(), i("span", i8, f(l.value), 1))
      ]),
      t("div", r8, [
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
}), Hr = /* @__PURE__ */ ge(c8, [["__scopeId", "data-v-d687d161"]]), u8 = { class: "runpod-tab" }, d8 = { class: "api-key-card" }, f8 = { class: "api-key-row" }, m8 = { class: "api-key-input-wrapper" }, v8 = ["type", "disabled"], p8 = ["title"], g8 = { class: "status-icon" }, h8 = { class: "status-text" }, y8 = {
  key: 0,
  class: "credit-balance"
}, w8 = { class: "config-card" }, k8 = { class: "config-row" }, _8 = ["disabled"], b8 = {
  key: 0,
  value: ""
}, $8 = {
  key: 1,
  value: "",
  disabled: ""
}, C8 = ["value", "disabled"], x8 = { class: "config-row" }, S8 = {
  key: 0,
  class: "loading-inline"
}, I8 = { class: "no-volumes-state" }, E8 = { class: "no-volumes-text" }, T8 = ["value"], R8 = { class: "config-row" }, P8 = ["disabled"], M8 = {
  key: 0,
  value: ""
}, D8 = {
  key: 1,
  value: ""
}, L8 = {
  key: 2,
  value: ""
}, A8 = ["value"], O8 = { class: "config-row" }, N8 = { class: "radio-group" }, U8 = { class: "radio-option" }, z8 = { class: "radio-label" }, F8 = { class: "radio-option disabled" }, V8 = { class: "radio-label" }, B8 = { class: "config-row" }, W8 = { class: "radio-group" }, G8 = { class: "radio-option" }, j8 = { class: "radio-label" }, H8 = { class: "radio-option disabled" }, K8 = { class: "radio-label" }, q8 = { class: "config-row" }, Y8 = {
  key: 0,
  class: "loading-text"
}, J8 = {
  key: 1,
  class: "empty-remotes"
}, Q8 = { class: "remotes-list" }, X8 = {
  key: 0,
  class: "sync-warning"
}, Z8 = { class: "warning-content" }, e4 = { class: "remotes-footer" }, t4 = { class: "summary-card" }, s4 = {
  key: 0,
  class: "loading-text"
}, o4 = { class: "summary-row" }, n4 = { class: "summary-value" }, a4 = { class: "summary-row" }, l4 = { class: "summary-value" }, i4 = { class: "summary-row" }, r4 = { class: "summary-value" }, c4 = {
  key: 0,
  class: "summary-sub-row"
}, u4 = { class: "summary-sub-label" }, d4 = {
  key: 1,
  class: "summary-sub-row warning"
}, f4 = { class: "summary-sub-label" }, m4 = { class: "summary-row" }, v4 = { class: "summary-value" }, p4 = { class: "summary-row" }, g4 = { class: "summary-value" }, h4 = { class: "deployment-summary" }, y4 = { class: "summary-columns" }, w4 = { class: "summary-column" }, k4 = { class: "pricing-row" }, _4 = { class: "pricing-value" }, b4 = { class: "pricing-row" }, $4 = { class: "pricing-value" }, C4 = { class: "pricing-row" }, x4 = { class: "pricing-value" }, S4 = { class: "pricing-row total" }, I4 = { class: "pricing-value" }, E4 = { class: "summary-column" }, T4 = { class: "spec-row" }, R4 = { class: "spec-row" }, P4 = {
  key: 0,
  class: "spec-row"
}, M4 = {
  key: 1,
  class: "spec-row spot-warning"
}, D4 = {
  key: 4,
  class: "deploy-actions"
}, L4 = { class: "progress-content" }, A4 = { class: "phase-indicator" }, O4 = { key: 0 }, N4 = { key: 1 }, U4 = { key: 2 }, z4 = {
  key: 3,
  class: "spinner"
}, F4 = { class: "phase-text" }, V4 = { class: "phase-name" }, B4 = { class: "phase-detail" }, W4 = {
  key: 0,
  class: "ready-actions"
}, G4 = { class: "console-link" }, j4 = ["href"], H4 = /* @__PURE__ */ fe({
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
    } = Xe(), x = _(!1), M = _(""), P = _(!1), T = _(!1), L = _(null), V = _(null), B = _(""), E = _(""), I = _(""), A = _("SECURE"), te = _("ON_DEMAND"), W = _("my-comfyui-deploy"), O = _([]), j = _({}), X = _(!1), z = _(null), ae = _(null), Z = _(null), _e = _([]), $e = _(!1), Le = _([]), Ue = _(!1), Ne = _([]), qe = _(!1), pe = _(null), oe = _(!1), ce = _(!1), ue = _(null), Te = _(!1), Pe = _(null), ze = _(null), N = _(null), R = _(!1), F = _(null), q = _(!1), ne = _(!1), re = U(() => Le.value.find((Se) => Se.id === E.value) || null), Ce = U(() => B.value ? Le.value.filter((Se) => Se.data_center_id === B.value) : Le.value), ie = U(() => Ne.value.filter((Se) => Se.available)), we = U(() => z.value && j.value[z.value] || null), he = U(() => {
      if (!z.value) return null;
      const Se = O.value.find((se) => se.name === z.value);
      return (Se == null ? void 0 : Se.fetch_url) || null;
    }), Me = U(() => P.value && E.value && I.value && he.value && !ce.value && !R.value), Ee = (Se) => {
      const se = Ne.value.find((yt) => yt.id === I.value);
      if (!se) return "0.00";
      if (Se === "SECURE") return (se.securePrice ?? 0).toFixed(2);
      if (Se === "COMMUNITY") return (se.communityPrice ?? 0).toFixed(2);
      const je = A.value === "SECURE";
      return Se === "ON_DEMAND" ? je ? (se.securePrice ?? 0).toFixed(2) : (se.communityPrice ?? 0).toFixed(2) : je ? (se.secureSpotPrice ?? 0).toFixed(2) : (se.communitySpotPrice ?? 0).toFixed(2);
    }, ee = U(() => {
      const Se = Ne.value.find((is) => is.id === I.value), se = Le.value.find((is) => is.id === E.value);
      if (!Se) return null;
      const je = A.value === "SECURE", yt = te.value === "SPOT";
      let Vt;
      yt ? Vt = je ? Se.secureSpotPrice ?? 0 : Se.communitySpotPrice ?? 0 : Vt = je ? Se.securePrice ?? 0 : Se.communityPrice ?? 0;
      const ws = se ? se.size_gb * 14e-5 : 0, ks = 4e-3;
      return {
        gpu: Vt,
        volume: ws,
        container: ks,
        total: Vt + ws + ks
      };
    });
    async function Y() {
      await Ve(), await Promise.all([St(), De()]);
    }
    async function De() {
      X.value = !0;
      try {
        const Se = await w();
        O.value = Se.remotes, await Promise.all(
          Se.remotes.map(async (je) => {
            const yt = await p(je.name);
            yt && (j.value[je.name] = yt);
          })
        );
        const se = Se.remotes.find((je) => je.is_default);
        se ? z.value = se.name : Se.remotes.length > 0 && (z.value = Se.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function xe(Se) {
      ae.value = Se;
      try {
        await k(Se);
        const se = await p(Se);
        se && (j.value[Se] = se), o("toast", `Fetched from ${Se}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        ae.value = null;
      }
    }
    async function ye(Se) {
      Z.value = Se;
      try {
        await C(Se, { force: !1 });
        const se = await p(Se);
        se && (j.value[Se] = se), o("toast", `Pushed to ${Se}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        Z.value = null;
      }
    }
    function K(Se) {
      z.value = Se;
    }
    async function G() {
      if (M.value) {
        T.value = !0, L.value = null;
        try {
          const Se = await l(M.value, !0);
          Se.status === "success" ? (P.value = !0, V.value = Se.credit_balance ?? null, L.value = { type: "success", message: Se.message }, await Y()) : L.value = { type: "error", message: Se.message };
        } catch (Se) {
          L.value = {
            type: "error",
            message: Se instanceof Error ? Se.message : "Connection test failed"
          };
        } finally {
          T.value = !1;
        }
      }
    }
    async function me() {
      try {
        await v(), M.value = "", P.value = !1, L.value = null, V.value = null, _e.value = [], B.value = "", Le.value = [], E.value = "", Ne.value = [], I.value = "", pe.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      Ue.value = !0, $e.value = !0;
      try {
        const Se = await r();
        Le.value = Se.volumes;
        const se = /* @__PURE__ */ new Map();
        for (const je of Se.volumes)
          je.data_center_id && !se.has(je.data_center_id) && se.set(je.data_center_id, {
            id: je.data_center_id,
            name: je.data_center_name || je.data_center_id,
            available: !0
          });
        if (Se.volumes.length === 0) {
          const je = await b();
          _e.value = je.data_centers;
        } else
          _e.value = Array.from(se.values());
        if (Le.value.length > 0) {
          const je = Le.value[0];
          E.value = je.id, je.data_center_id && (B.value = je.data_center_id, await Ze(je.data_center_id));
        } else _e.value.length > 0 && (B.value = _e.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ue.value = !1, $e.value = !1;
      }
    }
    async function Ze(Se) {
      qe.value = !0;
      try {
        const se = await c(Se);
        Ne.value = se.gpu_types;
        const je = Ne.value.find((yt) => yt.available);
        je ? I.value = je.id : I.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        qe.value = !1;
      }
    }
    dt(B, async (Se) => {
      if (!Se || Ue.value) return;
      const se = Le.value.find((je) => je.id === E.value);
      se && se.data_center_id !== Se && (E.value = ""), await Ze(Se);
    }), dt(E, async (Se) => {
      if (!Se) {
        Ne.value = [], I.value = "";
        return;
      }
      if (Ue.value) return;
      const se = Le.value.find((je) => je.id === Se);
      se && se.data_center_id !== B.value ? B.value = se.data_center_id : se && await Ze(se.data_center_id);
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
    async function tt() {
      if (!(!I.value || !E.value)) {
        R.value = !0, ue.value = null;
        try {
          const Se = await g();
          F.value = Se, Se.can_export ? Se.warnings.models_without_sources.length > 0 ? ne.value = !0 : await ht() : q.value = !0;
        } catch (Se) {
          ue.value = {
            status: "error",
            message: Se instanceof Error ? Se.message : "Validation failed"
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
        const Se = await g();
        F.value = Se;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function ht() {
      ce.value = !0;
      try {
        let Se;
        if (te.value === "SPOT") {
          const je = Ne.value.find((yt) => yt.id === I.value);
          je && (Se = A.value === "SECURE" ? je.secureSpotPrice : je.communitySpotPrice);
        }
        const se = await u({
          gpu_type_id: I.value,
          pod_name: W.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: A.value,
          pricing_type: te.value,
          spot_bid: Se,
          import_source: he.value
        });
        ue.value = se, se.status === "success" && se.pod_id ? (Pe.value = se.pod_id, Te.value = !0, Io(se.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", se.message, "error");
      } catch (Se) {
        ue.value = {
          status: "error",
          message: Se instanceof Error ? Se.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        ce.value = !1;
      }
    }
    function Io(Se) {
      ys(Se), N.value = window.setInterval(() => ys(Se), 3e3);
    }
    function ls() {
      N.value && (clearInterval(N.value), N.value = null);
    }
    async function ys(Se) {
      try {
        const se = await d(Se);
        ze.value = se, (se.phase === "READY" || se.phase === "ERROR" || se.phase === "STOPPED") && (ls(), se.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (se) {
        console.error("Failed to poll deployment status:", se);
      }
    }
    function ao() {
      Te.value = !1, ls(), Pe.value = null, ze.value = null;
    }
    function Yt() {
      var Se;
      (Se = ze.value) != null && Se.comfyui_url && window.open(ze.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Eo(Se) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[Se || ""] || "Initializing...";
    }
    function js(Se) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[Se || ""] ?? 10;
    }
    return Je(async () => {
      try {
        const Se = await m(!0);
        Se.has_key && Se.key_preview && (M.value = `****${Se.key_preview}`, Se.valid ? (P.value = !0, V.value = Se.credit_balance ?? null, L.value = { type: "success", message: "Connected to RunPod" }, await Y()) : Se.error && (L.value = { type: "error", message: Se.error }));
      } catch {
      }
    }), Gs(() => {
      ls();
    }), (Se, se) => {
      var je, yt, Vt, ws, ks, is;
      return n(), i(H, null, [
        t("div", u8, [
          S(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", d8, [
                t("div", f8, [
                  t("div", m8, [
                    Ke(t("input", {
                      "onUpdate:modelValue": se[0] || (se[0] = (Oe) => M.value = Oe),
                      type: x.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: P.value
                    }, null, 8, v8), [
                      [na, M.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: se[1] || (se[1] = (Oe) => x.value = !x.value),
                      title: x.value ? "Hide key" : "Show key"
                    }, f(x.value ? "👁" : "👁‍🗨"), 9, p8)
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
                  class: Ie(["connection-status", L.value.type])
                }, [
                  t("span", g8, f(L.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", h8, f(L.value.message), 1),
                  V.value !== null ? (n(), i("span", y8, " $" + f(V.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          P.value ? (n(), D(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", w8, [
                t("div", k8, [
                  se[19] || (se[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ke(t("select", {
                    "onUpdate:modelValue": se[2] || (se[2] = (Oe) => B.value = Oe),
                    class: "config-select",
                    disabled: $e.value
                  }, [
                    $e.value ? (n(), i("option", b8, "Loading...")) : B.value ? y("", !0) : (n(), i("option", $8, "Select a region")),
                    (n(!0), i(H, null, ve(_e.value, (Oe) => (n(), i("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, C8))), 128))
                  ], 8, _8), [
                    [hs, B.value]
                  ])
                ]),
                t("div", x8, [
                  se[24] || (se[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ue.value ? (n(), i("div", S8, "Loading volumes...")) : Ce.value.length === 0 ? (n(), i(H, { key: 1 }, [
                    t("div", I8, [
                      se[20] || (se[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", E8, "No volumes in " + f(B.value || "this region"), 1)
                    ]),
                    se[21] || (se[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    se[22] || (se[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(H, { key: 2 }, [
                    Ke(t("select", {
                      "onUpdate:modelValue": se[3] || (se[3] = (Oe) => E.value = Oe),
                      class: "config-select"
                    }, [
                      (n(!0), i(H, null, ve(Ce.value, (Oe) => (n(), i("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, T8))), 128))
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
                t("div", R8, [
                  se[25] || (se[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Ke(t("select", {
                    "onUpdate:modelValue": se[4] || (se[4] = (Oe) => I.value = Oe),
                    class: "config-select",
                    disabled: qe.value || !E.value
                  }, [
                    E.value ? qe.value ? (n(), i("option", D8, "Loading GPUs...")) : ie.value.length === 0 ? (n(), i("option", L8, "No GPUs available in this region")) : y("", !0) : (n(), i("option", M8, "Select a volume first")),
                    (n(!0), i(H, null, ve(ie.value, (Oe) => (n(), i("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(A.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, A8))), 128))
                  ], 8, P8), [
                    [hs, I.value]
                  ])
                ]),
                t("div", O8, [
                  se[26] || (se[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", N8, [
                    t("label", U8, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[5] || (se[5] = (Oe) => A.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [Zt, A.value]
                      ]),
                      t("span", z8, "Secure ($" + f(Ee("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", F8, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[6] || (se[6] = (Oe) => A.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Zt, A.value]
                      ]),
                      t("span", V8, "Community ($" + f(Ee("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", B8, [
                  se[27] || (se[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", W8, [
                    t("label", G8, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[7] || (se[7] = (Oe) => te.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Zt, te.value]
                      ]),
                      t("span", j8, "On-Demand ($" + f(Ee("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", H8, [
                      Ke(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[8] || (se[8] = (Oe) => te.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Zt, te.value]
                      ]),
                      t("span", K8, "Spot ($" + f(Ee("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", q8, [
                  se[28] || (se[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ke(t("input", {
                    "onUpdate:modelValue": se[9] || (se[9] = (Oe) => W.value = Oe),
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
          P.value ? (n(), D(it, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              X.value ? (n(), i("div", Y8, "Loading remotes...")) : O.value.length === 0 ? (n(), i("div", J8, [
                se[30] || (se[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(de, {
                  variant: "primary",
                  size: "xs",
                  onClick: se[10] || (se[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...se[29] || (se[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(H, { key: 2 }, [
                t("div", Q8, [
                  (n(!0), i(H, null, ve(O.value, (Oe) => (n(), D(Hr, {
                    key: Oe.name,
                    remote: Oe,
                    "sync-status": j.value[Oe.name],
                    "is-selected": z.value === Oe.name,
                    "is-fetching": ae.value === Oe.name,
                    "is-pushing": Z.value === Oe.name,
                    onFetch: xe,
                    onPush: ye,
                    onSelect: K
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                we.value && we.value.ahead > 0 ? (n(), i("div", X8, [
                  se[31] || (se[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", Z8, [
                    t("strong", null, f(we.value.ahead) + " unpushed commit" + f(we.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(z.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(de, {
                    variant: "primary",
                    size: "xs",
                    loading: Z.value === z.value,
                    onClick: se[11] || (se[11] = (Oe) => z.value && ye(z.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(z.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", e4, [
                  S(de, {
                    variant: "link",
                    size: "xs",
                    onClick: se[12] || (se[12] = (Oe) => o("navigate", "remotes"))
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
          P.value ? (n(), D(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", t4, [
                oe.value ? (n(), i("div", s4, "Loading environment summary...")) : pe.value ? (n(), i(H, { key: 1 }, [
                  t("div", o4, [
                    se[33] || (se[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", n4, f(pe.value.comfyui_version), 1)
                  ]),
                  t("div", a4, [
                    se[34] || (se[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", l4, f(pe.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", i4, [
                    se[35] || (se[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", r4, f(pe.value.model_count) + " models", 1)
                  ]),
                  pe.value.models_with_sources > 0 ? (n(), i("div", c4, [
                    t("span", u4, "└─ " + f(pe.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  pe.value.models_without_sources > 0 ? (n(), i("div", d4, [
                    t("span", f4, "└─ " + f(pe.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", m4, [
                    se[36] || (se[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", v4, f(pe.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", p4, [
                    se[37] || (se[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", g4, "~" + f(pe.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          P.value && ee.value ? (n(), D(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Oe, _s;
              return [
                t("div", h4, [
                  t("div", y4, [
                    t("div", w4, [
                      se[42] || (se[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", k4, [
                        se[38] || (se[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", _4, "$" + f(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", b4, [
                        se[39] || (se[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", $4, "$" + f(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", C4, [
                        se[40] || (se[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", x4, "$" + f(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      se[43] || (se[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", S4, [
                        se[41] || (se[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", I4, "~$" + f(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", E4, [
                      se[45] || (se[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", T4, [
                        t("span", null, f(((Oe = Ne.value.find((rs) => rs.id === I.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((_s = Ne.value.find((rs) => rs.id === I.value)) == null ? void 0 : _s.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", R4, [
                        t("span", null, "Region: " + f(B.value), 1)
                      ]),
                      re.value ? (n(), i("div", P4, [
                        t("span", null, "Volume: " + f(re.value.name), 1)
                      ])) : y("", !0),
                      te.value === "SPOT" ? (n(), i("div", M4, [...se[44] || (se[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          P.value ? (n(), i("div", D4, [
            S(de, {
              variant: "primary",
              size: "md",
              loading: R.value || ce.value,
              disabled: !Me.value,
              onClick: tt
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
          ue.value ? (n(), D(it, {
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
                    onClick: se[13] || (se[13] = (Oe) => ue.value = null)
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
        Te.value ? (n(), D(ct, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((je = ze.value) == null ? void 0 : je.phase) === "READY" || ((yt = ze.value) == null ? void 0 : yt.phase) === "ERROR" || ((Vt = ze.value) == null ? void 0 : Vt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ao
        }, no({
          body: h(() => {
            var Oe, _s, rs, lo, io, Hs, le, J, Ae, Ge, nt, mt;
            return [
              t("div", L4, [
                t("div", A4, [
                  t("div", {
                    class: Ie(["phase-icon", (_s = (Oe = ze.value) == null ? void 0 : Oe.phase) == null ? void 0 : _s.toLowerCase()])
                  }, [
                    ((rs = ze.value) == null ? void 0 : rs.phase) === "READY" ? (n(), i("span", O4, "✓")) : ((lo = ze.value) == null ? void 0 : lo.phase) === "ERROR" ? (n(), i("span", N4, "✕")) : ((io = ze.value) == null ? void 0 : io.phase) === "STOPPED" ? (n(), i("span", U4, "○")) : (n(), i("span", z4, "⟳"))
                  ], 2),
                  t("div", F4, [
                    t("div", V4, f(Eo((Hs = ze.value) == null ? void 0 : Hs.phase)), 1),
                    t("div", B4, f(((le = ze.value) == null ? void 0 : le.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(la, {
                  progress: js((J = ze.value) == null ? void 0 : J.phase),
                  variant: ((Ae = ze.value) == null ? void 0 : Ae.phase) === "ERROR" ? "error" : ((Ge = ze.value) == null ? void 0 : Ge.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((nt = ze.value) == null ? void 0 : nt.phase) === "READY" ? (n(), i("div", W4, [
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
                t("div", G4, [
                  (mt = ze.value) != null && mt.console_url ? (n(), i("a", {
                    key: 0,
                    href: ze.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, j4)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ws = ze.value) == null ? void 0 : ws.phase) === "READY" || ((ks = ze.value) == null ? void 0 : ks.phase) === "ERROR" || ((is = ze.value) == null ? void 0 : is.phase) === "STOPPED" ? {
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
          onClose: se[14] || (se[14] = (Oe) => q.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ne.value && F.value ? (n(), D(Wr, {
          key: 2,
          models: F.value.warnings.models_without_sources,
          onConfirm: vt,
          onCancel: se[15] || (se[15] = (Oe) => ne.value = !1),
          onRevalidate: qt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), K4 = /* @__PURE__ */ ge(H4, [["__scopeId", "data-v-522cd4d9"]]), q4 = { class: "worker-header" }, Y4 = { class: "worker-status" }, J4 = { class: "worker-name" }, Q4 = { class: "worker-actions" }, X4 = { class: "worker-details" }, Z4 = { class: "detail-item" }, e6 = { class: "detail-value" }, t6 = {
  key: 0,
  class: "detail-item"
}, s6 = { class: "detail-value" }, o6 = {
  key: 1,
  class: "detail-item"
}, n6 = { class: "detail-value mode-badge" }, a6 = {
  key: 0,
  class: "worker-stats"
}, l6 = {
  key: 0,
  class: "stat-item"
}, i6 = { key: 0 }, r6 = {
  key: 1,
  class: "worker-stats offline"
}, c6 = /* @__PURE__ */ fe({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ie(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", q4, [
        t("div", Y4, [
          t("span", {
            class: Ie(["status-dot", e.worker.status])
          }, null, 2),
          t("span", J4, f(e.worker.name), 1)
        ]),
        t("div", Q4, [
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
      t("div", X4, [
        t("span", Z4, [
          t("span", e6, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", t6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", s6, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", o6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", n6, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", a6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", l6, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", i6, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", r6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), u6 = /* @__PURE__ */ ge(c6, [["__scopeId", "data-v-b1be7134"]]), d6 = { class: "add-worker-content" }, f6 = { class: "manual-form" }, m6 = { class: "form-row" }, v6 = { class: "form-row-inline" }, p6 = { class: "form-field flex-2" }, g6 = { class: "form-field flex-1" }, h6 = { class: "form-row" }, y6 = { class: "api-key-wrapper" }, w6 = ["type"], k6 = { class: "result-icon" }, _6 = { class: "result-content" }, b6 = { class: "result-message" }, $6 = {
  key: 0,
  class: "result-detail"
}, C6 = { class: "modal-actions" }, x6 = /* @__PURE__ */ fe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = Xe(), l = Ws({
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
        t("div", d6, [
          t("div", f6, [
            t("div", m6, [
              k[6] || (k[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Ke(t("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [zt, l.name]
              ])
            ]),
            t("div", v6, [
              t("div", p6, [
                k[7] || (k[7] = t("label", { class: "form-label" }, "Host", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": k[1] || (k[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [zt, l.host]
                ])
              ]),
              t("div", g6, [
                k[8] || (k[8] = t("label", { class: "form-label" }, "Port", -1)),
                Ke(t("input", {
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
            t("div", h6, [
              k[9] || (k[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", y6, [
                Ke(t("input", {
                  "onUpdate:modelValue": k[3] || (k[3] = (C) => l.apiKey = C),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, w6), [
                  [na, l.apiKey]
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
              class: Ie(["test-result", d.value.type])
            }, [
              t("span", k6, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", _6, [
                t("span", b6, f(d.value.message), 1),
                d.value.gpu_info ? (n(), i("span", $6, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", C6, [
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
}), S6 = /* @__PURE__ */ ge(x6, [["__scopeId", "data-v-07a00732"]]), I6 = { class: "discovered-content" }, E6 = {
  key: 0,
  class: "workers-list"
}, T6 = { class: "worker-info" }, R6 = { class: "worker-name" }, P6 = { class: "worker-address" }, M6 = {
  key: 0,
  class: "worker-gpu"
}, D6 = {
  key: 1,
  class: "empty-state"
}, L6 = {
  key: 2,
  class: "api-key-section"
}, A6 = { class: "selected-worker" }, O6 = { class: "selected-name" }, N6 = { class: "selected-address" }, U6 = { class: "form-row" }, z6 = { class: "api-key-wrapper" }, F6 = ["type"], V6 = { class: "result-icon" }, B6 = { class: "result-message" }, W6 = { class: "modal-actions" }, G6 = /* @__PURE__ */ fe({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = Xe(), l = _(null), r = _(""), c = _(!1), u = _(!1), d = _(null), m = _(null);
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
        t("div", I6, [
          e.workers.length > 0 ? (n(), i("div", E6, [
            (n(!0), i(H, null, ve(e.workers, (k) => (n(), i("div", {
              key: `${k.host}:${k.port}`,
              class: "worker-item"
            }, [
              t("div", T6, [
                t("span", R6, f(k.name), 1),
                t("span", P6, f(k.host) + ":" + f(k.port), 1),
                k.gpu_info ? (n(), i("span", M6, f(k.gpu_info), 1)) : y("", !0)
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
          ])) : (n(), i("div", D6, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", L6, [
            t("div", A6, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", O6, f(l.value.name), 1),
              t("span", N6, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", U6, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", z6, [
                Ke(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (k) => r.value = k),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Ht(g, ["enter"])
                }, null, 40, F6), [
                  [na, r.value]
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
              class: Ie(["test-result", m.value.type])
            }, [
              t("span", V6, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", B6, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", W6, [
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
}), j6 = /* @__PURE__ */ ge(G6, [["__scopeId", "data-v-5a3e40a4"]]), H6 = { class: "deploy-content" }, K6 = { class: "section" }, q6 = {
  key: 0,
  class: "loading-text"
}, Y6 = {
  key: 1,
  class: "empty-remotes"
}, J6 = {
  key: 2,
  class: "remotes-list"
}, Q6 = { class: "section" }, X6 = { class: "mode-options" }, Z6 = { class: "mode-option" }, eI = ["disabled"], tI = { class: "mode-option" }, sI = { class: "section" }, oI = {
  key: 0,
  class: "section"
}, nI = { class: "summary-row" }, aI = {
  key: 1,
  class: "sync-warning"
}, lI = { class: "warning-content" }, iI = { class: "modal-actions" }, rI = /* @__PURE__ */ fe({
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
    } = Xe(), v = _([]), g = _({}), w = _(!1), p = _(null), k = _(null), C = _(null), b = _(o.worker.mode || "native"), x = _(""), M = _(null), P = _(!1), T = U(() => p.value && g.value[p.value] || null), L = U(() => {
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
    function te(O) {
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
    return Je(() => {
      B(), E();
    }), (O, j) => (n(), D(ct, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: j[5] || (j[5] = (X) => O.$emit("close"))
    }, {
      body: h(() => [
        t("div", H6, [
          t("div", K6, [
            j[7] || (j[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (n(), i("div", q6, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", Y6, [...j[6] || (j[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", J6, [
              (n(!0), i(H, null, ve(v.value, (X) => (n(), D(Hr, {
                key: X.name,
                remote: X,
                "sync-status": g.value[X.name],
                "is-selected": p.value === X.name,
                "is-fetching": k.value === X.name,
                "is-pushing": C.value === X.name,
                onFetch: I,
                onPush: A,
                onSelect: te
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", Q6, [
            j[10] || (j[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", X6, [
              t("label", Z6, [
                Ke(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": j[0] || (j[0] = (X) => b.value = X),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, eI), [
                  [Zt, b.value]
                ]),
                j[8] || (j[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", tI, [
                Ke(t("input", {
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
          t("div", sI, [
            j[11] || (j[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Ke(t("input", {
              "onUpdate:modelValue": j[2] || (j[2] = (X) => x.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, x.value]
            ])
          ]),
          M.value ? (n(), i("div", oI, [
            j[12] || (j[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", nI, " ComfyUI: " + f(M.value.comfyui_version) + " • " + f(M.value.node_count) + " nodes • " + f(M.value.model_count) + " models • " + f(M.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          T.value && T.value.ahead > 0 ? (n(), i("div", aI, [
            j[14] || (j[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", lI, [
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
        t("div", iI, [
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
}), cI = /* @__PURE__ */ ge(rI, [["__scopeId", "data-v-c12720d3"]]), uI = { class: "custom-tab" }, dI = { class: "section-header" }, fI = { class: "section-actions" }, mI = { class: "workers-content" }, vI = {
  key: 0,
  class: "loading-state"
}, pI = {
  key: 1,
  class: "empty-state"
}, gI = {
  key: 2,
  class: "workers-list"
}, hI = { class: "scan-icon" }, yI = { class: "scan-message" }, wI = /* @__PURE__ */ fe({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: c
    } = Xe(), u = _([]), d = _([]), m = _(!1), v = _(!1), g = _(null), w = _(!1), p = _(!1), k = _(null), C = _(null);
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
    return Je(() => {
      b();
    }), (B, E) => (n(), i("div", uI, [
      t("div", dI, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", fI, [
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
      t("div", mI, [
        m.value && u.value.length === 0 ? (n(), i("div", vI, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (n(), i("div", pI, [...E[10] || (E[10] = [
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
        ])])) : (n(), i("div", gI, [
          (n(!0), i(H, null, ve(u.value, (I) => (n(), D(u6, {
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
        class: Ie(["scan-result", C.value.type])
      }, [
        t("span", hI, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", yI, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (I) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (n(), D(j6, {
        key: 1,
        workers: d.value,
        onClose: E[2] || (E[2] = (I) => p.value = !1),
        onAdd: P
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (n(), D(S6, {
        key: 2,
        onClose: E[3] || (E[3] = (I) => w.value = !1),
        onAdd: M
      })) : y("", !0),
      k.value ? (n(), D(cI, {
        key: 3,
        worker: k.value,
        onClose: E[4] || (E[4] = (I) => k.value = null),
        onToast: E[5] || (E[5] = (I, A) => o("toast", I, A)),
        onDeployed: V
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), kI = /* @__PURE__ */ ge(wI, [["__scopeId", "data-v-1637dead"]]), $a = "ComfyGit.Deploy.GitHubPAT";
function Kr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function _I(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function bI() {
  function e() {
    try {
      return localStorage.getItem($a);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem($a, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem($a);
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
    isRemoteHttps: _I
  };
}
const $I = { class: "settings-content" }, CI = { class: "settings-section" }, xI = {
  key: 0,
  class: "ssh-warning"
}, SI = { class: "form-row" }, II = { class: "token-wrapper" }, EI = ["type"], TI = { class: "result-icon" }, RI = { class: "result-message" }, PI = { class: "token-actions" }, MI = /* @__PURE__ */ fe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = bI(), { getRemotes: u, testGitAuth: d } = Xe(), m = _(""), v = _(!1), g = _(!1), w = _(null), p = _(!1), k = U(() => c());
    Je(async () => {
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
        t("div", $I, [
          t("div", CI, [
            P[8] || (P[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            P[9] || (P[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (n(), i("div", xI, [...P[3] || (P[3] = [
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
            t("div", SI, [
              P[4] || (P[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", II, [
                Ke(t("input", {
                  "onUpdate:modelValue": P[0] || (P[0] = (T) => m.value = T),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, EI), [
                  [na, m.value]
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
              class: Ie(["test-result", w.value.type])
            }, [
              t("span", TI, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", RI, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", PI, [
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
}), DI = /* @__PURE__ */ ge(MI, [["__scopeId", "data-v-b21588ad"]]), LI = /* @__PURE__ */ fe({
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
    return Je(() => {
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
          k.value === "instances" ? (n(), D(JS, {
            key: 0,
            instances: Be(a),
            "is-loading": Be(l),
            "action-loading-id": C.value,
            onRefresh: Be(c),
            onStop: M,
            onStart: P,
            onTerminate: T
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          k.value === "runpod" ? (n(), D(K4, {
            key: 1,
            onToast: E[3] || (E[3] = (I, A) => o("toast", I, A)),
            onNavigate: E[4] || (E[4] = (I) => o("navigate", I)),
            onDeployed: V
          })) : y("", !0),
          k.value === "custom" ? (n(), D(kI, {
            key: 2,
            onToast: E[5] || (E[5] = (I, A) => o("toast", I, A)),
            onDeployed: V
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (n(), D(cl, {
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
      p.value ? (n(), D(DI, {
        key: 1,
        onClose: E[8] || (E[8] = (I) => p.value = !1),
        onSaved: E[9] || (E[9] = (I) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), AI = /* @__PURE__ */ ge(LI, [["__scopeId", "data-v-d4e32a10"]]), OI = { class: "header-info" }, NI = { class: "commit-hash" }, UI = {
  key: 0,
  class: "commit-refs"
}, zI = { class: "commit-message" }, FI = { class: "commit-date" }, VI = {
  key: 0,
  class: "loading"
}, BI = {
  key: 1,
  class: "changes-section"
}, WI = { class: "stats-row" }, GI = { class: "stat" }, jI = { class: "stat insertions" }, HI = { class: "stat deletions" }, KI = {
  key: 0,
  class: "change-group"
}, qI = {
  key: 1,
  class: "change-group"
}, YI = {
  key: 0,
  class: "version"
}, JI = {
  key: 2,
  class: "change-group"
}, QI = { class: "change-item" }, XI = /* @__PURE__ */ fe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = Xe(), a = _(null), l = _(!0), r = U(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = U(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Je(async () => {
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
          t("div", OI, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", NI, f(((m = a.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = a.value) == null ? void 0 : g.refs) != null && w.length ? (n(), i("span", UI, [
              (n(!0), i(H, null, ve(a.value.refs, (p) => (n(), i("span", {
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
          t("div", zI, f(((m = a.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", FI, f(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", VI, "Loading details...")) : a.value ? (n(), i("div", BI, [
            t("div", WI, [
              t("span", GI, f(a.value.stats.files_changed) + " files", 1),
              t("span", jI, "+" + f(a.value.stats.insertions), 1),
              t("span", HI, "-" + f(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", KI, [
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
            c.value ? (n(), i("div", qI, [
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
                g.version ? (n(), i("span", YI, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(H, null, ve(a.value.changes.nodes.removed, (g) => (n(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", JI, [
              S(qo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", QI, [
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
}), ZI = /* @__PURE__ */ ge(XI, [["__scopeId", "data-v-d256ff6d"]]), eE = { class: "popover-header" }, tE = { class: "popover-body" }, sE = {
  key: 0,
  class: "changes-summary"
}, oE = {
  key: 0,
  class: "change-item"
}, nE = {
  key: 1,
  class: "change-item"
}, aE = {
  key: 2,
  class: "change-item"
}, lE = {
  key: 3,
  class: "change-item"
}, iE = {
  key: 4,
  class: "change-item"
}, rE = {
  key: 5,
  class: "change-item"
}, cE = {
  key: 1,
  class: "no-changes"
}, uE = {
  key: 2,
  class: "loading"
}, dE = {
  key: 3,
  class: "issues-error"
}, fE = { class: "error-header" }, mE = { class: "error-title" }, vE = { class: "issues-list" }, pE = { class: "workflow-state" }, gE = { class: "message-section" }, hE = { class: "popover-footer" }, yE = {
  key: 1,
  class: "commit-popover"
}, wE = { class: "popover-header" }, kE = { class: "popover-body" }, _E = {
  key: 0,
  class: "changes-summary"
}, bE = {
  key: 0,
  class: "change-item"
}, $E = {
  key: 1,
  class: "change-item"
}, CE = {
  key: 2,
  class: "change-item"
}, xE = {
  key: 3,
  class: "change-item"
}, SE = {
  key: 4,
  class: "change-item"
}, IE = {
  key: 5,
  class: "change-item"
}, EE = {
  key: 1,
  class: "no-changes"
}, TE = {
  key: 2,
  class: "loading"
}, RE = {
  key: 3,
  class: "issues-error"
}, PE = { class: "error-header" }, ME = { class: "error-title" }, DE = { class: "issues-list" }, LE = { class: "workflow-state" }, AE = { class: "message-section" }, OE = { class: "popover-footer" }, NE = /* @__PURE__ */ fe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = Xe(), r = _(""), c = _(!1), u = _(!1), d = U(() => {
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
          onClick: C[4] || (C[4] = lt(() => {
          }, ["stop"]))
        }, [
          t("div", eE, [
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
          t("div", tE, [
            e.status && d.value ? (n(), i("div", sE, [
              e.status.workflows.new.length ? (n(), i("div", oE, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", nE, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", aE, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", lE, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", iE, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (n(), i("div", rE, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", cE, " No changes to commit ")) : (n(), i("div", uE, " Loading... ")),
            g.value ? (n(), i("div", dE, [
              t("div", fE, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", mE, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", vE, [
                (n(!0), i(H, null, ve(v.value, (b) => (n(), i("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", pE, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              S(jn, {
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
            t("div", gE, [
              S(Ua, {
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
          t("div", hE, [
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
    ])) : (n(), i("div", yE, [
      t("div", wE, [
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
      t("div", kE, [
        e.status && d.value ? (n(), i("div", _E, [
          e.status.workflows.new.length ? (n(), i("div", bE, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", $E, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", CE, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", xE, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", SE, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (n(), i("div", IE, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", EE, " No changes to commit ")) : (n(), i("div", TE, " Loading... ")),
        g.value ? (n(), i("div", RE, [
          t("div", PE, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", ME, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", DE, [
            (n(!0), i(H, null, ve(v.value, (b) => (n(), i("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", LE, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          S(jn, {
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
        t("div", AE, [
          S(Ua, {
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
      t("div", OE, [
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
}), qr = /* @__PURE__ */ ge(NE, [["__scopeId", "data-v-5f897631"]]), UE = { class: "modal-header" }, zE = { class: "modal-body" }, FE = { class: "switch-message" }, VE = { class: "switch-details" }, BE = { class: "modal-actions" }, WE = /* @__PURE__ */ fe({
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
          onClick: o[3] || (o[3] = lt(() => {
          }, ["stop"]))
        }, [
          t("div", UE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", zE, [
            t("p", FE, [
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
            t("p", VE, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", BE, [
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
}), GE = /* @__PURE__ */ ge(WE, [["__scopeId", "data-v-e9c5253e"]]), jE = {
  key: 0,
  class: "modal-overlay"
}, HE = { class: "modal-content" }, KE = { class: "modal-body" }, qE = { class: "progress-info" }, YE = { class: "progress-percentage" }, JE = { class: "progress-state" }, QE = { class: "switch-steps" }, XE = { class: "step-icon" }, ZE = { class: "step-label" }, eT = /* @__PURE__ */ fe({
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
      e.show ? (n(), i("div", jE, [
        t("div", HE, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", KE, [
            S(la, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", qE, [
              t("div", YE, f(e.progress) + "%", 1),
              t("div", JE, f(o.value), 1)
            ]),
            t("div", QE, [
              (n(!0), i(H, null, ve(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Ie(["switch-step", u.status])
              }, [
                t("span", XE, f(u.icon), 1),
                t("span", ZE, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), tT = /* @__PURE__ */ ge(eT, [["__scopeId", "data-v-768a5078"]]), sT = { class: "modal-header" }, oT = { class: "modal-body" }, nT = {
  key: 0,
  class: "node-section"
}, aT = { class: "node-list" }, lT = {
  key: 1,
  class: "node-section"
}, iT = { class: "node-list" }, rT = { class: "modal-actions" }, cT = /* @__PURE__ */ fe({
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
          onClick: o[3] || (o[3] = lt(() => {
          }, ["stop"]))
        }, [
          t("div", sT, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", oT, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", nT, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", aT, [
                (n(!0), i(H, null, ve(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + f(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", lT, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", iT, [
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
          t("div", rT, [
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
}), uT = /* @__PURE__ */ ge(cT, [["__scopeId", "data-v-7cad7518"]]), dT = [
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
], fT = "v0.0.19", mT = "Akatz", vT = { class: "social-buttons" }, pT = ["title", "aria-label", "onClick"], gT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, hT = ["d"], yT = ["title", "aria-label", "onClick"], wT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, kT = ["d"], _T = /* @__PURE__ */ fe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", vT, [
      (n(!0), i(H, null, ve(Be(dT), (l) => (n(), i(H, {
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
          (n(), i("svg", gT, [
            t("path", {
              d: l.iconPath
            }, null, 8, hT)
          ]))
        ], 8, pT)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", wT, [
            t("path", {
              d: l.iconPath
            }, null, 8, kT)
          ]))
        ], 8, yT))
      ], 64))), 128))
    ]));
  }
}), Yr = /* @__PURE__ */ ge(_T, [["__scopeId", "data-v-4f846342"]]), bT = { class: "footer-info" }, $T = { class: "version" }, CT = { class: "made-by" }, xT = /* @__PURE__ */ fe({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (n(), i("div", bT, [
      t("span", $T, f(Be(fT)), 1),
      t("span", CT, [
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
        $(" by " + f(Be(mT)), 1)
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ ge(xT, [["__scopeId", "data-v-8bc3db0a"]]), ST = /* @__PURE__ */ fe({
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
}), IT = /* @__PURE__ */ ge(ST, [["__scopeId", "data-v-fac00ae7"]]), ET = { class: "header-actions" }, TT = {
  key: 0,
  class: "wizard-step"
}, RT = { class: "form-field" }, PT = ["placeholder"], MT = {
  key: 0,
  class: "form-error"
}, DT = { class: "form-field form-field--checkbox" }, LT = { class: "form-checkbox" }, AT = {
  key: 0,
  class: "form-field"
}, OT = ["placeholder"], NT = {
  key: 0,
  class: "form-info"
}, UT = {
  key: 1,
  class: "form-suggestion"
}, zT = {
  key: 2,
  class: "form-error"
}, FT = {
  key: 3,
  class: "form-info"
}, VT = {
  key: 1,
  class: "wizard-step"
}, BT = {
  key: 0,
  class: "progress-check-loading"
}, WT = {
  key: 0,
  class: "cli-warning"
}, GT = { class: "cli-warning-header" }, jT = {
  key: 1,
  class: "env-landing"
}, HT = { class: "env-list" }, KT = ["value"], qT = { class: "env-name" }, YT = {
  key: 2,
  class: "env-create"
}, JT = { class: "form-field" }, QT = { class: "form-field" }, XT = ["value"], ZT = { class: "form-field" }, e7 = ["disabled"], t7 = ["value"], s7 = { class: "form-field" }, o7 = ["value"], n7 = { class: "form-field form-field--checkbox" }, a7 = { class: "form-checkbox" }, l7 = {
  key: 0,
  class: "form-error"
}, i7 = {
  key: 1,
  class: "env-creating"
}, r7 = { class: "creating-intro" }, c7 = {
  key: 3,
  class: "env-import"
}, u7 = { class: "wizard-footer" }, d7 = { class: "wizard-footer-actions" }, uo = 10, f7 = 600 * 1e3, ni = 1800 * 1e3, m7 = /* @__PURE__ */ fe({
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
    } = Xe(), g = _(o.initialStep || 1), w = _(null), p = _("landing"), k = _(!1), C = _(!1), b = _(!1), x = _(!1), M = _(null), P = _(o.initialStep === 2), T = _(o.defaultPath), L = _(!!o.detectedModelsDir), V = _(o.detectedModelsDir || ""), B = _(null), E = _(null), I = _(null), A = _(null), te = _("my-new-env"), W = _(Fr), O = _("latest"), j = _(Vr), X = _(!0), z = _(null), ae = _(null), Z = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), _e = _(!1), $e = _(!1), Le = _(!1), Ue = _({ progress: 0, message: "" }), Ne = _({ progress: 0, message: "" }), qe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], pe = _(0), oe = _(null), ce = _(0), ue = _(null), Te = U(() => {
      var xe, ye;
      const ee = (xe = T.value) == null ? void 0 : xe.trim(), Y = !B.value, De = !L.value || !E.value && ((ye = V.value) == null ? void 0 : ye.trim());
      return ee && Y && De;
    }), Pe = U(() => {
      var ee;
      return (ee = te.value) == null ? void 0 : ee.trim();
    }), ze = U(() => !!(g.value === 2 || ae.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), N = U(() => ae.value || o.workspacePath || null);
    async function R() {
      var ee;
      if (B.value = null, !!((ee = T.value) != null && ee.trim()))
        try {
          const Y = await c({ path: T.value, type: "workspace" });
          Y.valid || (B.value = Y.error || "Invalid path");
        } catch (Y) {
          B.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function F() {
      var ee;
      if (E.value = null, I.value = null, A.value = null, !!((ee = V.value) != null && ee.trim()))
        try {
          const Y = await c({ path: V.value, type: "models" });
          if (Y.valid)
            A.value = Y.model_count ?? null;
          else if (E.value = Y.error || "Invalid path", Y.suggestion) {
            I.value = Y.suggestion, V.value = Y.suggestion, E.value = null;
            const De = await c({ path: Y.suggestion, type: "models" });
            De.valid && (A.value = De.model_count ?? null);
          }
        } catch (Y) {
          E.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function q() {
      var ee, Y, De, xe, ye;
      if (B.value = null, E.value = null, await R(), (ee = B.value) != null && ee.includes("already exists")) {
        B.value = null, ae.value = ((Y = T.value) == null ? void 0 : Y.trim()) || o.defaultPath, g.value = 2, re();
        return;
      }
      if (!B.value && !(L.value && ((De = V.value) != null && De.trim()) && (await F(), E.value))) {
        $e.value = !0;
        try {
          await l({
            workspace_path: ((xe = T.value) == null ? void 0 : xe.trim()) || o.defaultPath,
            models_directory: L.value && ((ye = V.value) == null ? void 0 : ye.trim()) || null
          }), pe.value = 0, oe.value = Date.now();
          const K = setInterval(async () => {
            var G;
            if (oe.value && Date.now() - oe.value > f7) {
              clearInterval(K), $e.value = !1, B.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const me = await r();
              if (pe.value = 0, me.state === "idle" && $e.value) {
                clearInterval(K), $e.value = !1, B.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ue.value = { progress: me.progress, message: me.message }, me.state === "complete" ? (clearInterval(K), $e.value = !1, ae.value = ((G = T.value) == null ? void 0 : G.trim()) || o.defaultPath, g.value = 2, re()) : me.state === "error" && (clearInterval(K), $e.value = !1, B.value = me.error || "Workspace creation failed");
            } catch (me) {
              pe.value++, console.warn(`Polling failure ${pe.value}/${uo}:`, me), pe.value >= uo && (clearInterval(K), $e.value = !1, B.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (K) {
          $e.value = !1, B.value = K instanceof Error ? K.message : "Failed to create workspace";
        }
      }
    }
    async function ne() {
      Le.value = !0, z.value = null;
      try {
        const ee = {
          name: te.value.trim() || "my-new-env",
          python_version: W.value,
          comfyui_version: O.value,
          torch_backend: j.value,
          switch_after: X.value,
          workspace_path: ae.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ee)).status === "started") {
          ce.value = 0, ue.value = Date.now();
          const De = setInterval(async () => {
            if (ue.value && Date.now() - ue.value > ni) {
              clearInterval(De), Le.value = !1, z.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const xe = await d();
              if (ce.value = 0, xe.state === "idle" && Le.value) {
                clearInterval(De), Le.value = !1, z.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ne.value = {
                progress: xe.progress ?? 0,
                message: xe.message,
                phase: xe.phase
              }, xe.state === "complete") {
                clearInterval(De), Le.value = !1;
                const ye = xe.environment_name || ee.name;
                X.value ? a("complete", ye, ae.value) : (p.value = "landing", a("environment-created-no-switch", ye));
              } else xe.state === "error" && (clearInterval(De), Le.value = !1, z.value = xe.error || "Environment creation failed");
            } catch (xe) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${uo}:`, xe), ce.value >= uo && (clearInterval(De), Le.value = !1, z.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        Le.value = !1, z.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function re() {
      _e.value = !0;
      try {
        Z.value = await v();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        _e.value = !1;
      }
    }
    function Ce() {
      w.value && a("switch-environment", w.value, ae.value);
    }
    function ie() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function we(ee, Y) {
      C.value = !1, Y ? a("complete", ee, ae.value) : (a("environment-created-no-switch", ee), p.value = "landing");
    }
    function he() {
    }
    Je(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (ae.value = o.workspacePath), g.value === 2) {
        re();
        const ee = setTimeout(() => {
          P.value = !1;
        }, 3e3);
        await Me(), clearTimeout(ee), P.value = !1;
      }
    });
    async function Me() {
      try {
        const ee = await d();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), p.value = "create", Le.value = !0, te.value = ee.environment_name || "my-new-env", Ne.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, Ee();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await m();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), M.value = {
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          progress: ee.progress ?? 0,
          environmentName: ee.environment_name || ""
        }, x.value = !0, p.value = "import", C.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function Ee() {
      ce.value = 0, ue.value = Date.now();
      let ee = null;
      const Y = async () => {
        if (ue.value && Date.now() - ue.value > ni)
          return ee && clearInterval(ee), Le.value = !1, z.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const xe = await d();
          if (ce.value = 0, xe.state === "idle" && Le.value)
            return ee && clearInterval(ee), Le.value = !1, z.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ne.value = {
            progress: xe.progress ?? 0,
            message: xe.message,
            phase: xe.phase
          }, xe.state === "complete") {
            ee && clearInterval(ee), Le.value = !1;
            const ye = xe.environment_name || te.value;
            return a("complete", ye, ae.value), !1;
          } else if (xe.state === "error")
            return ee && clearInterval(ee), Le.value = !1, z.value = xe.error || "Environment creation failed", !1;
          return !0;
        } catch (xe) {
          return ce.value++, console.warn(`Polling failure ${ce.value}/${uo}:`, xe), ce.value >= uo ? (ee && clearInterval(ee), Le.value = !1, z.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Y() && (ee = setInterval(async () => {
        !await Y() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, Y) => (n(), i(H, null, [
      S(ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Y[15] || (Y[15] = (De) => ee.$emit("close"))
      }, {
        header: h(() => [
          Y[20] || (Y[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", ET, [
            S(Yr),
            Y[19] || (Y[19] = t("span", { class: "header-divider" }, null, -1)),
            ze.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Y[0] || (Y[0] = (De) => k.value = !0)
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
              onClick: Y[1] || (Y[1] = (De) => ee.$emit("close")),
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
          var De;
          return [
            g.value === 1 ? (n(), i("div", TT, [
              Y[24] || (Y[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", RT, [
                Y[21] || (Y[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": Y[2] || (Y[2] = (xe) => T.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, PT), [
                  [zt, T.value]
                ]),
                B.value ? (n(), i("p", MT, f(B.value), 1)) : y("", !0)
              ]),
              t("div", DT, [
                t("label", LT, [
                  Ke(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[3] || (Y[3] = (xe) => L.value = xe)
                  }, null, 512), [
                    [nn, L.value]
                  ]),
                  Y[22] || (Y[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              L.value ? (n(), i("div", AT, [
                Y[23] || (Y[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ke(t("input", {
                  "onUpdate:modelValue": Y[4] || (Y[4] = (xe) => V.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, OT), [
                  [zt, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (n(), i("p", NT, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                I.value ? (n(), i("p", UT, " Did you mean: " + f(I.value), 1)) : y("", !0),
                E.value ? (n(), i("p", zT, f(E.value), 1)) : y("", !0),
                A.value !== null && !E.value ? (n(), i("p", FT, " Found " + f(A.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              $e.value ? (n(), D(Gn, {
                key: 1,
                progress: Ue.value.progress,
                message: Ue.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (n(), i("div", VT, [
              P.value ? (n(), i("div", BT, [...Y[25] || (Y[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !b.value ? (n(), i("div", WT, [
                  t("div", GT, [
                    Y[27] || (Y[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Y[28] || (Y[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Y[5] || (Y[5] = (xe) => b.value = !0),
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
                p.value === "landing" ? (n(), i("div", jT, [
                  Y[34] || (Y[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Y[6] || (Y[6] = (xe) => p.value = "create")
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
                    onClick: Y[7] || (Y[7] = (xe) => {
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
                  (De = o.existingEnvironments) != null && De.length ? (n(), i(H, { key: 0 }, [
                    Y[33] || (Y[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", HT, [
                      (n(!0), i(H, null, ve(o.existingEnvironments, (xe) => (n(), i("label", {
                        key: xe,
                        class: Ie(["env-option", { selected: w.value === xe }])
                      }, [
                        Ke(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: xe,
                          "onUpdate:modelValue": Y[8] || (Y[8] = (ye) => w.value = ye)
                        }, null, 8, KT), [
                          [Zt, w.value]
                        ]),
                        t("span", qT, f(xe), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (n(), i("div", YT, [
                  Le.value ? (n(), i("div", i7, [
                    t("p", r7, [
                      Y[41] || (Y[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(te.value), 1),
                      Y[42] || (Y[42] = $("... ", -1))
                    ]),
                    S(Gn, {
                      progress: Ne.value.progress,
                      message: Ne.value.message,
                      "current-phase": Ne.value.phase,
                      "show-steps": !0,
                      steps: qe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Y[43] || (Y[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    Y[40] || (Y[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", JT, [
                      Y[35] || (Y[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ke(t("input", {
                        "onUpdate:modelValue": Y[9] || (Y[9] = (xe) => te.value = xe),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, te.value]
                      ])
                    ]),
                    t("div", QT, [
                      Y[36] || (Y[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": Y[10] || (Y[10] = (xe) => W.value = xe),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, ve(Be(zr), (xe) => (n(), i("option", {
                          key: xe,
                          value: xe
                        }, f(xe), 9, XT))), 128))
                      ], 512), [
                        [hs, W.value]
                      ])
                    ]),
                    t("div", ZT, [
                      Y[37] || (Y[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": Y[11] || (Y[11] = (xe) => O.value = xe),
                        class: "form-select",
                        disabled: _e.value
                      }, [
                        (n(!0), i(H, null, ve(Z.value, (xe) => (n(), i("option", {
                          key: xe.tag_name,
                          value: xe.tag_name
                        }, f(xe.name), 9, t7))), 128))
                      ], 8, e7), [
                        [hs, O.value]
                      ])
                    ]),
                    t("div", s7, [
                      Y[38] || (Y[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ke(t("select", {
                        "onUpdate:modelValue": Y[12] || (Y[12] = (xe) => j.value = xe),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, ve(Be(ul), (xe) => (n(), i("option", {
                          key: xe,
                          value: xe
                        }, f(xe) + f(xe === "auto" ? " (detect GPU)" : ""), 9, o7))), 128))
                      ], 512), [
                        [hs, j.value]
                      ])
                    ]),
                    t("div", n7, [
                      t("label", a7, [
                        Ke(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Y[13] || (Y[13] = (xe) => X.value = xe)
                        }, null, 512), [
                          [nn, X.value]
                        ]),
                        Y[39] || (Y[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    z.value ? (n(), i("div", l7, f(z.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (n(), i("div", c7, [
                  S(Gr, {
                    "workspace-path": ae.value,
                    "resume-import": x.value,
                    "initial-progress": M.value ?? void 0,
                    onImportComplete: we,
                    onImportStarted: Y[14] || (Y[14] = (xe) => C.value = !0),
                    onSourceCleared: he
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", u7, [
            S(Jr),
            t("div", d7, [
              g.value === 1 ? (n(), D(Re, {
                key: 0,
                variant: "primary",
                disabled: !Te.value || $e.value,
                onClick: q
              }, {
                default: h(() => [
                  $(f($e.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (n(), i(H, { key: 1 }, [
                !Le.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !ae.value) ? (n(), D(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: ie
                }, {
                  default: h(() => [...Y[44] || (Y[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (n(), D(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !Pe.value || Le.value,
                  onClick: ne
                }, {
                  default: h(() => [
                    $(f(Le.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (n(), D(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: Ce
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
      k.value ? (n(), D(IT, {
        key: 0,
        "workspace-path": N.value,
        onClose: Y[16] || (Y[16] = (De) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), v7 = /* @__PURE__ */ ge(m7, [["__scopeId", "data-v-9a9aadc0"]]), p7 = { class: "comfygit-panel" }, g7 = { class: "panel-header" }, h7 = { class: "header-left" }, y7 = {
  key: 0,
  class: "header-info"
}, w7 = { class: "header-actions" }, k7 = { class: "env-switcher" }, _7 = {
  key: 0,
  class: "header-info"
}, b7 = { class: "branch-name" }, $7 = { class: "panel-main" }, C7 = { class: "sidebar" }, x7 = { class: "sidebar-content" }, S7 = { class: "sidebar-section" }, I7 = { class: "sidebar-section" }, E7 = { class: "sidebar-section" }, T7 = {
  key: 0,
  class: "sidebar-badge"
}, R7 = { class: "sidebar-footer" }, P7 = { class: "content-area" }, M7 = {
  key: 0,
  class: "error-message"
}, D7 = {
  key: 1,
  class: "loading"
}, L7 = { class: "dialog-content env-selector-dialog" }, A7 = { class: "dialog-header" }, O7 = { class: "dialog-body" }, N7 = { class: "env-list" }, U7 = { class: "env-info" }, z7 = { class: "env-name-row" }, F7 = { class: "env-indicator" }, V7 = { class: "env-name" }, B7 = {
  key: 0,
  class: "env-branch"
}, W7 = {
  key: 1,
  class: "current-label"
}, G7 = { class: "env-stats" }, j7 = ["onClick"], H7 = { class: "toast-container" }, K7 = { class: "toast-message" }, ai = "ComfyGit.LastView", li = "ComfyGit.LastSection", q7 = /* @__PURE__ */ fe({
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
    } = Xe(), M = np(), { liveInstanceCount: P } = jr({ autoStart: !0 }), T = _(null), L = _([]), V = _([]), B = _([]), E = U(() => B.value.find((le) => le.is_current)), I = _(null), A = _(!1), te = _(1), W = U(() => {
      var le;
      return ((le = I.value) == null ? void 0 : le.state) || "managed";
    }), O = _(!1), j = _(null), X = _(null), z = _(!1), ae = _(null), Z = _(null), _e = _(null), $e = _(!1), Le = _(!1), Ue = _(""), Ne = _(null), qe = _({ state: "idle", progress: 0, message: "" });
    let pe = null, oe = null;
    const ce = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ue = o.initialView ? ce[o.initialView] : null, Te = [
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
    ], Pe = ["this-env", "all-envs", "sharing"];
    function ze() {
      try {
        const le = sessionStorage.getItem(ai), J = sessionStorage.getItem(li);
        if (le && J && Te.includes(le) && Pe.includes(J))
          return { view: le, section: J };
      } catch {
      }
      return null;
    }
    const N = ze(), R = _((ue == null ? void 0 : ue.view) ?? (N == null ? void 0 : N.view) ?? "status"), F = _((ue == null ? void 0 : ue.section) ?? (N == null ? void 0 : N.section) ?? "this-env");
    function q(le, J) {
      R.value = le, F.value = J;
      try {
        sessionStorage.setItem(ai, le), sessionStorage.setItem(li, J);
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
    function Ce() {
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
    const ie = _(null), we = _(!1), he = _(!1), Me = _([]);
    let Ee = 0;
    function ee(le, J = "info", Ae = 3e3) {
      const Ge = ++Ee;
      return Me.value.push({ id: Ge, message: le, type: J }), Ae > 0 && setTimeout(() => {
        Me.value = Me.value.filter((nt) => nt.id !== Ge);
      }, Ae), Ge;
    }
    function Y(le) {
      Me.value = Me.value.filter((J) => J.id !== le);
    }
    function De(le, J) {
      ee(le, J);
    }
    const xe = U(() => {
      if (!T.value) return "neutral";
      const le = T.value.workflows, J = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || T.value.has_changes;
      return T.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    U(() => T.value ? xe.value === "success" ? "All synced" : xe.value === "warning" ? "Uncommitted changes" : xe.value === "error" ? "Not synced" : "" : "");
    async function ye() {
      O.value = !0, j.value = null;
      try {
        const [le, J, Ae, Ge] = await Promise.all([
          l(!0),
          r(),
          c(),
          g()
        ]);
        T.value = le, L.value = J.commits, V.value = Ae.branches, B.value = Ge, a("statusUpdate", le), ae.value && await ae.value.loadWorkflows(!0);
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
          ie.value = null, tt();
          const Ge = ee(`Checking out ${le.short_hash || ((mt = le.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), nt = await u(le.hash, J);
          Y(Ge), nt.status === "success" ? ee("Restarting ComfyUI...", "success") : ee(nt.message || "Checkout failed", "error");
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
          ie.value = null, tt();
          const Ae = ee(`Switching to ${le}...`, "info", 0), Ge = await m(le, J);
          Y(Ae), Ge.status === "success" ? ee("Restarting ComfyUI...", "success") : ee(Ge.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ve(le) {
      const J = ee(`Creating branch ${le}...`, "info", 0), Ae = await d(le);
      Y(J), Ae.status === "success" ? (ee(`Branch "${le}" created`, "success"), await ye()) : ee(Ae.message || "Failed to create branch", "error");
    }
    async function Ze(le, J = !1) {
      const Ae = async (Ge) => {
        var mt;
        const nt = ee(`Deleting branch ${le}...`, "info", 0);
        try {
          const Jt = await v(le, Ge);
          Y(nt), Jt.status === "success" ? (ee(`Branch "${le}" deleted`, "success"), await ye()) : (mt = Jt.message) != null && mt.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Ae(!0);
            }
          } : ee(Jt.message || "Failed to delete branch", "error");
        } catch (Jt) {
          Y(nt);
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
          } : ee(Ks, "error");
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
        const Ae = ee(`Creating branch ${J}...`, "info", 0), Ge = await d(J, le.hash);
        Y(Ae), Ge.status === "success" ? (ee(`Branch "${J}" created from ${le.short_hash}`, "success"), await ye()) : ee(Ge.message || "Failed to create branch", "error");
      }
    }
    function tt() {
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
          ie.value = null, tt(), ee("Restarting environment...", "info");
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
          ie.value = null, ee("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ht(le, J) {
      z.value = !1, Ue.value = le, Ne.value = J || null, $e.value = !0;
    }
    async function Io() {
      $e.value = !1, Le.value = !0, tt(), qe.value = {
        progress: 10,
        state: ls(10),
        message: ys(10)
      };
      try {
        await w(Ue.value, Ne.value || void 0), ao(), Eo();
      } catch (le) {
        Yt(), Le.value = !1, ee(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), qe.value = { state: "idle", progress: 0, message: "" }, Ne.value = null;
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
      const J = 60, Ae = 5e3, Ge = 100, nt = (J - le) / (Ae / Ge);
      oe = window.setInterval(() => {
        if (le += nt, le >= J && (le = J, Yt()), qe.value.progress < J) {
          const mt = Math.floor(le);
          qe.value = {
            progress: mt,
            state: ls(mt),
            message: ys(mt)
          };
        }
      }, Ge);
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
          const Ae = Math.max(J, qe.value.progress), Ge = le.state && le.state !== "idle" && le.state !== "unknown", nt = Ge ? le.state : ls(Ae), mt = Ge && le.message || ys(Ae);
          qe.value = {
            state: nt,
            progress: Ae,
            message: mt
          }, le.state === "complete" ? (Yt(), js(), Le.value = !1, ee(`✓ Switched to ${Ue.value}`, "success"), await ye(), Ue.value = "") : le.state === "rolled_back" ? (Yt(), js(), Le.value = !1, ee("Switch failed, restored previous environment", "warning"), Ue.value = "") : le.state === "critical_failure" && (Yt(), js(), Le.value = !1, ee(`Critical error during switch: ${le.message}`, "error"), Ue.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function js() {
      Yt(), pe && (clearInterval(pe), pe = null);
    }
    function Se() {
      var le;
      $e.value = !1, Ue.value = "", (le = I.value) != null && le.state && I.value.state !== "managed" && (te.value = I.value.state === "no_workspace" ? 1 : 2, A.value = !0);
    }
    async function se(le) {
      we.value = !1, await ye(), ee(le.message, le.success ? "success" : "error");
    }
    async function je() {
      he.value = !1;
      const le = ee("Syncing environment...", "info", 0);
      try {
        const J = await C("skip", !0);
        if (Y(le), J.status === "success") {
          const Ae = [];
          J.nodes_installed.length && Ae.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && Ae.push(`${J.nodes_removed.length} removed`);
          const Ge = Ae.length ? `: ${Ae.join(", ")}` : "";
          ee(`✓ Environment synced${Ge}`, "success"), await ye();
        } else {
          const Ae = J.errors.length ? J.errors.join("; ") : J.message;
          ee(`Sync failed: ${Ae}`, "error");
        }
      } catch (J) {
        Y(le), ee(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function yt(le) {
      var J;
      try {
        const Ae = await b(le);
        Ae.failed.length === 0 ? ee(`✓ Repaired ${Ae.success} workflow${Ae.success === 1 ? "" : "s"}`, "success") : ee(`Repaired ${Ae.success}, failed: ${Ae.failed.length}`, "warning"), await ye();
      } catch (Ae) {
        ee(`Repair failed: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
      } finally {
        (J = _e.value) == null || J.resetRepairingState();
      }
    }
    async function Vt() {
      var J, Ae;
      const le = ee("Repairing environment...", "info", 0);
      try {
        const Ge = await C("skip", !0);
        if (Y(le), Ge.status === "success") {
          const nt = [];
          Ge.nodes_installed.length && nt.push(`${Ge.nodes_installed.length} installed`), Ge.nodes_removed.length && nt.push(`${Ge.nodes_removed.length} removed`);
          const mt = nt.length ? `: ${nt.join(", ")}` : "";
          ee(`✓ Environment repaired${mt}`, "success"), (J = _e.value) == null || J.closeDetailModal(), await ye();
        } else {
          const nt = Ge.errors.length ? Ge.errors.join(", ") : Ge.message || "Unknown error";
          ee(`Repair failed: ${nt}`, "error");
        }
      } catch (Ge) {
        Y(le), ee(`Repair error: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (Ae = _e.value) == null || Ae.resetRepairingEnvironmentState();
      }
    }
    async function ws(le, J) {
      ee(`Environment '${le}' created`, "success"), await ye(), Z.value && await Z.value.loadEnvironments(), J && await ht(le);
    }
    async function ks(le) {
      var J;
      if (((J = E.value) == null ? void 0 : J.name) === le) {
        ee("Cannot delete the currently active environment. Switch to another environment first.", "error");
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
            Ae.status === "success" ? (ee(`Environment "${le}" deleted`, "success"), await ye(), Z.value && await Z.value.loadEnvironments()) : ee(Ae.message || "Failed to delete environment", "error");
          } catch (Ae) {
            ee(`Error deleting environment: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
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
    function Oe() {
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
        (le = Z.value) == null || le.openCreateModal();
      }, 100);
    }
    function Hs() {
      if (!T.value) return [];
      const le = [], J = T.value.workflows;
      return J.new.length && le.push(`${J.new.length} new workflow(s)`), J.modified.length && le.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && le.push(`${J.deleted.length} deleted workflow(s)`), le;
    }
    return Je(async () => {
      try {
        if (I.value = await x(), I.value.state === "no_workspace") {
          A.value = !0, te.value = 1;
          return;
        }
        if (I.value.state === "empty_workspace") {
          A.value = !0, te.value = 2;
          return;
        }
        if (I.value.state === "unmanaged") {
          A.value = !0, te.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await ye();
    }), (le, J) => {
      var Ae, Ge, nt, mt, Jt, Ks, fn, mn, vn, pn, gn, Q, ke;
      return n(), i("div", p7, [
        t("div", g7, [
          t("div", h7, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            T.value ? (n(), i("div", y7)) : y("", !0)
          ]),
          t("div", w7, [
            S(Yr),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ie(["icon-btn", { spinning: O.value }]),
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
              onClick: J[0] || (J[0] = (be) => a("close")),
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
        t("div", k7, [
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
            onClick: J[1] || (J[1] = (be) => q("environments", "all-envs"))
          }, [
            T.value ? (n(), i("div", _7, [
              t("span", null, f(((Ae = E.value) == null ? void 0 : Ae.name) || ((Ge = T.value) == null ? void 0 : Ge.environment) || "Loading..."), 1),
              t("span", b7, "(" + f(T.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", $7, [
          t("div", C7, [
            t("div", x7, [
              t("div", S7, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "status" && F.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (be) => q("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (be) => q("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (be) => q("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "branches" }]),
                  onClick: J[5] || (J[5] = (be) => q("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "history" }]),
                  onClick: J[6] || (J[6] = (be) => q("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (be) => q("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (be) => q("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", I7, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "environments" }]),
                  onClick: J[9] || (J[9] = (be) => q("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (be) => q("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "settings" }]),
                  onClick: J[11] || (J[11] = (be) => q("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (be) => q("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", E7, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (be) => q("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = $(" DEPLOY ", -1)),
                  Be(P) > 0 ? (n(), i("span", T7, f(Be(P)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "export" }]),
                  onClick: J[14] || (J[14] = (be) => q("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "import" }]),
                  onClick: J[15] || (J[15] = (be) => q("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: R.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (be) => q("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", R7, [
              S(Jr)
            ])
          ]),
          t("div", P7, [
            j.value ? (n(), i("div", M7, f(j.value), 1)) : !T.value && R.value === "status" ? (n(), i("div", D7, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              R.value === "status" ? (n(), D(dv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: _e,
                status: T.value,
                "setup-state": W.value,
                onSwitchBranch: re,
                onCommitChanges: J[17] || (J[17] = (be) => we.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (be) => he.value = !0),
                onViewWorkflows: J[19] || (J[19] = (be) => q("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (be) => q("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (be) => q("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (be) => q("nodes", "this-env")),
                onRepairMissingModels: yt,
                onRepairEnvironment: Vt,
                onStartSetup: J[23] || (J[23] = (be) => A.value = !0),
                onViewEnvironments: J[24] || (J[24] = (be) => q("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : R.value === "workflows" ? (n(), D(Q0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ae,
                onRefresh: ye
              }, null, 512)) : R.value === "models-env" ? (n(), D(f_, {
                key: 2,
                onNavigate: ne
              })) : R.value === "branches" ? (n(), D(tp, {
                key: 3,
                branches: V.value,
                current: ((nt = T.value) == null ? void 0 : nt.branch) || null,
                onSwitch: me,
                onCreate: Ve,
                onDelete: Ze
              }, null, 8, ["branches", "current"])) : R.value === "history" ? (n(), D(op, {
                key: 4,
                commits: L.value,
                "current-ref": (mt = T.value) == null ? void 0 : mt.branch,
                onSelect: K,
                onCheckout: G
              }, null, 8, ["commits", "current-ref"])) : R.value === "nodes" ? (n(), D(sb, {
                key: 5,
                "version-mismatches": ((Ks = (Jt = T.value) == null ? void 0 : Jt.comparison) == null ? void 0 : Ks.version_mismatches) || [],
                onOpenNodeManager: Ce,
                onRepairEnvironment: Vt,
                onToast: De
              }, null, 8, ["version-mismatches"])) : R.value === "debug-env" ? (n(), D(_C, { key: 6 })) : R.value === "environments" ? (n(), D(Wx, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Z,
                onSwitch: ht,
                onCreated: ws,
                onDelete: ks
              }, null, 512)) : R.value === "model-index" ? (n(), D(S_, {
                key: 8,
                onRefresh: ye
              })) : R.value === "settings" ? (n(), D(fC, { key: 9 })) : R.value === "debug-workspace" ? (n(), D(kC, { key: 10 })) : R.value === "deploy" ? (n(), D(AI, {
                key: 11,
                onToast: De,
                onNavigate: ne
              })) : R.value === "export" ? (n(), D(L3, { key: 12 })) : R.value === "import" ? (n(), D(IS, {
                key: 13,
                onImportCompleteSwitch: rs
              })) : R.value === "remotes" ? (n(), D(H$, {
                key: 14,
                onToast: De
              })) : y("", !0)
            ], 64))
          ])
        ]),
        X.value ? (n(), D(ZI, {
          key: 0,
          commit: X.value,
          onClose: J[25] || (J[25] = (be) => X.value = null),
          onCheckout: G,
          onCreateBranch: St
        }, null, 8, ["commit"])) : y("", !0),
        ie.value ? (n(), D(cl, {
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
          onCancel: J[26] || (J[26] = (be) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        S(GE, {
          show: $e.value,
          "from-environment": ((fn = E.value) == null ? void 0 : fn.name) || "unknown",
          "to-environment": Ue.value,
          onConfirm: Io,
          onClose: Se
        }, null, 8, ["show", "from-environment", "to-environment"]),
        we.value && T.value ? (n(), D(qr, {
          key: 2,
          status: T.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (be) => we.value = !1),
          onCommitted: se
        }, null, 8, ["status"])) : y("", !0),
        he.value && T.value ? (n(), D(uT, {
          key: 3,
          show: he.value,
          "mismatch-details": {
            missing_nodes: T.value.comparison.missing_nodes,
            extra_nodes: T.value.comparison.extra_nodes
          },
          onConfirm: je,
          onClose: J[28] || (J[28] = (be) => he.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        S(tT, {
          show: Le.value,
          state: qe.value.state,
          progress: qe.value.progress,
          message: qe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        z.value ? (n(), i("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = lt((be) => z.value = !1, ["self"]))
        }, [
          t("div", L7, [
            t("div", A7, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (be) => z.value = !1)
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
            t("div", O7, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", N7, [
                (n(!0), i(H, null, ve(B.value, (be) => (n(), i("div", {
                  key: be.name,
                  class: Ie(["env-item", { current: be.is_current }])
                }, [
                  t("div", U7, [
                    t("div", z7, [
                      t("span", F7, f(be.is_current ? "●" : "○"), 1),
                      t("span", V7, f(be.name), 1),
                      be.current_branch ? (n(), i("span", B7, "(" + f(be.current_branch) + ")", 1)) : y("", !0),
                      be.is_current ? (n(), i("span", W7, "CURRENT")) : y("", !0)
                    ]),
                    t("div", G7, f(be.workflow_count) + " workflows • " + f(be.node_count) + " nodes ", 1)
                  ]),
                  be.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (rt) => ht(be.name)
                  }, " SWITCH ", 8, j7))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        A.value ? (n(), D(v7, {
          key: 5,
          "default-path": ((mn = I.value) == null ? void 0 : mn.default_path) || "~/comfygit",
          "detected-models-dir": ((vn = I.value) == null ? void 0 : vn.detected_models_dir) || null,
          "initial-step": te.value,
          "existing-environments": ((pn = I.value) == null ? void 0 : pn.environments) || [],
          "cli-installed": ((gn = I.value) == null ? void 0 : gn.cli_installed) ?? !0,
          "setup-state": ((Q = I.value) == null ? void 0 : Q.state) || "no_workspace",
          "workspace-path": ((ke = I.value) == null ? void 0 : ke.workspace_path) || null,
          onComplete: is,
          onClose: Oe,
          onSwitchEnvironment: _s,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", H7, [
          S(_d, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(H, null, ve(Me.value, (be) => (n(), i("div", {
                key: be.id,
                class: Ie(["toast", be.type])
              }, [
                t("span", K7, f(be.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Y7 = /* @__PURE__ */ ge(q7, [["__scopeId", "data-v-45a711b4"]]), J7 = { class: "item-header" }, Q7 = { class: "item-info" }, X7 = { class: "filename" }, Z7 = { class: "metadata" }, eR = { class: "size" }, tR = {
  key: 0,
  class: "type"
}, sR = { class: "item-actions" }, oR = {
  key: 0,
  class: "progress-section"
}, nR = { class: "progress-bar" }, aR = { class: "progress-stats" }, lR = { class: "downloaded" }, iR = { class: "speed" }, rR = {
  key: 0,
  class: "eta"
}, cR = {
  key: 1,
  class: "status-msg paused"
}, uR = {
  key: 2,
  class: "status-msg queued"
}, dR = {
  key: 3,
  class: "status-msg completed"
}, fR = {
  key: 4,
  class: "status-msg failed"
}, mR = {
  key: 0,
  class: "retries"
}, vR = /* @__PURE__ */ fe({
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
      class: Ie(["download-item", `status-${e.item.status}`])
    }, [
      t("div", J7, [
        t("div", Q7, [
          t("div", X7, f(e.item.filename), 1),
          t("div", Z7, [
            t("span", eR, f(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", tR, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", sR, [
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
      e.item.status === "downloading" ? (n(), i("div", oR, [
        t("div", nR, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", aR, [
          t("span", lR, f(a(e.item.downloaded)) + " / " + f(a(e.item.size)), 1),
          t("span", iR, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", rR, f(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", cR, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", uR, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", dR, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", fR, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", mR, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ ge(vR, [["__scopeId", "data-v-2110df65"]]), pR = { class: "queue-title" }, gR = { class: "count" }, hR = { class: "queue-actions" }, yR = { class: "action-label" }, wR = {
  key: 0,
  class: "overall-progress"
}, kR = { class: "progress-bar" }, _R = {
  key: 0,
  class: "current-mini"
}, bR = { class: "filename" }, $R = { class: "speed" }, CR = {
  key: 1,
  class: "queue-content"
}, xR = {
  key: 0,
  class: "section"
}, SR = {
  key: 1,
  class: "section"
}, IR = { class: "section-header" }, ER = { class: "section-label paused" }, TR = { class: "items-list" }, RR = {
  key: 2,
  class: "section"
}, PR = { class: "section-header" }, MR = { class: "section-label" }, DR = { class: "items-list" }, LR = {
  key: 3,
  class: "section"
}, AR = { class: "section-header" }, OR = { class: "section-label" }, NR = { class: "items-list" }, UR = {
  key: 4,
  class: "section"
}, zR = { class: "section-header" }, FR = { class: "section-label failed" }, VR = { class: "items-list" }, BR = /* @__PURE__ */ fe({
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
      Be(u) ? (n(), i("div", {
        key: 0,
        class: Ie(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: L[0] || (L[0] = (V) => C.value = !C.value)
        }, [
          t("div", pR, [
            L[4] || (L[4] = t("span", { class: "icon" }, "↓", -1)),
            L[5] || (L[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", gR, "(" + f(Be(d)) + "/" + f(Be(s).items.length) + ")", 1)
          ]),
          t("div", hR, [
            t("span", yR, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (n(), i("div", CR, [
          Be(o) ? (n(), i("div", xR, [
            L[6] || (L[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(Ao, {
              item: Be(o),
              onCancel: L[1] || (L[1] = (V) => M(Be(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Be(c).length > 0 ? (n(), i("div", SR, [
            t("div", IR, [
              t("span", ER, "Paused (" + f(Be(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: L[2] || (L[2] = //@ts-ignore
                (...V) => Be(w) && Be(w)(...V))
              }, "Resume All")
            ]),
            t("div", TR, [
              (n(!0), i(H, null, ve(Be(c), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onResume: (B) => Be(g)(V.id),
                onRemove: (B) => Be(p)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Be(a).length > 0 ? (n(), i("div", RR, [
            t("div", PR, [
              t("span", MR, "Queued (" + f(Be(a).length) + ")", 1)
            ]),
            t("div", DR, [
              (n(!0), i(H, null, ve(Be(a), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onCancel: (B) => M(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Be(l).length > 0 ? (n(), i("div", LR, [
            t("div", AR, [
              t("span", OR, "Completed (" + f(Be(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: L[3] || (L[3] = //@ts-ignore
                (...V) => Be(k) && Be(k)(...V))
              }, "Clear")
            ]),
            t("div", NR, [
              (n(!0), i(H, null, ve(Be(l).slice(0, 3), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onRemove: (B) => Be(p)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Be(r).length > 0 ? (n(), i("div", UR, [
            t("div", zR, [
              t("span", FR, "Failed (" + f(Be(r).length) + ")", 1)
            ]),
            t("div", VR, [
              (n(!0), i(H, null, ve(Be(r), (V) => (n(), D(Ao, {
                key: V.id,
                item: V,
                onRetry: (B) => Be(v)(V.id),
                onRemove: (B) => Be(p)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", wR, [
          t("div", kR, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${x.value}%` })
            }, null, 4)
          ]),
          Be(o) ? (n(), i("div", _R, [
            t("span", bR, f(Be(o).filename), 1),
            t("span", $R, f(P(Be(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), WR = /* @__PURE__ */ ge(BR, [["__scopeId", "data-v-60751cfa"]]), GR = { class: "detail-header" }, jR = { class: "item-count" }, HR = { class: "resource-list" }, KR = { class: "item-info" }, qR = { class: "item-name" }, YR = {
  key: 0,
  class: "item-subtitle"
}, JR = {
  key: 0,
  class: "installing-badge"
}, QR = ["title"], XR = {
  key: 2,
  class: "installed-badge"
}, ZR = {
  key: 3,
  class: "queued-badge"
}, eP = {
  key: 1,
  class: "no-action"
}, tP = /* @__PURE__ */ fe({
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
        t("div", GR, [
          t("span", jR, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          r.value.length > 1 ? (n(), D(Re, {
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
        t("div", HR, [
          (n(!0), i(H, null, ve(e.items, (C) => (n(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", KR, [
              t("span", qR, f(C.name), 1),
              C.subtitle ? (n(), i("span", YR, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (n(), i(H, { key: 0 }, [
              m(C) ? (n(), i("span", JR, "Installing...")) : g(C) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, QR)) : v(C) ? (n(), i("span", XR, "Installed")) : d(C) ? (n(), i("span", ZR, "Queued")) : (n(), D(Re, {
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
            ], 64)) : (n(), i("span", eP, f(C.actionDisabledReason || "Not available"), 1))
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
}), sP = /* @__PURE__ */ ge(tP, [["__scopeId", "data-v-fac0fef0"]]), oP = {
  key: 0,
  class: "loading-state"
}, nP = {
  key: 1,
  class: "analysis-results"
}, aP = {
  key: 0,
  class: "section"
}, lP = { class: "section-header" }, iP = { class: "section-title" }, rP = { class: "item-list" }, cP = { class: "package-info" }, uP = { class: "package-name" }, dP = { class: "node-count" }, fP = {
  key: 1,
  class: "installing-badge"
}, mP = {
  key: 2,
  class: "queued-badge"
}, vP = ["title"], pP = {
  key: 4,
  class: "installed-badge"
}, gP = {
  key: 1,
  class: "section"
}, hP = { class: "section-header" }, yP = { class: "section-title" }, wP = { class: "item-list" }, kP = { class: "node-type" }, _P = {
  key: 0,
  class: "overflow-note"
}, bP = {
  key: 2,
  class: "section"
}, $P = { class: "section-header" }, CP = { class: "section-title" }, xP = { class: "item-list" }, SP = { class: "model-info" }, IP = { class: "model-name" }, EP = {
  key: 1,
  class: "queued-badge"
}, TP = {
  key: 1,
  class: "no-url"
}, RP = { class: "dont-show-again" }, PP = /* @__PURE__ */ fe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = _(!1), o = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Set()), m = _(!1), v = _(null), g = _(0), w = _(null), p = _(/* @__PURE__ */ new Set()), k = _(/* @__PURE__ */ new Map()), { addToQueue: C } = xo(), { queueNodeInstall: b } = Xe(), x = U(() => M.value.length > 0 || T.value.length > 0 || L.value.length > 0), M = U(() => {
      var q, ne;
      if (!((q = a.value) != null && q.nodes)) return [];
      const R = /* @__PURE__ */ new Map(), F = (a.value.nodes.resolved || []).filter((re) => {
        var Ce;
        return !re.is_installed && ((Ce = re.package) == null ? void 0 : Ce.package_id);
      });
      for (const re of F) {
        const Ce = re.package.package_id;
        R.has(Ce) || R.set(Ce, {
          package_id: Ce,
          title: re.package.title || Ce,
          node_count: 0,
          node_types: [],
          repository: re.package.repository || null,
          latest_version: re.package.latest_version || null
        });
        const ie = R.get(Ce);
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
        var re, Ce, ie, we;
        return {
          filename: ((Ce = (re = ne.reference) == null ? void 0 : re.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((ie = ne.reference) == null ? void 0 : ie.widget_value) || ne.widget_value,
          widget_value: ((we = ne.reference) == null ? void 0 : we.widget_value) || ne.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ne.download_source || null,
          targetPath: ne.target_path || null,
          canDownload: !!(ne.download_source && ne.target_path)
        };
      }), F = (a.value.models.unresolved || []).map((ne) => {
        var re, Ce, ie, we;
        return {
          filename: ((Ce = (re = ne.reference) == null ? void 0 : re.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((ie = ne.reference) == null ? void 0 : ie.widget_value) || ne.widget_value,
          widget_value: ((we = ne.reference) == null ? void 0 : we.widget_value) || ne.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...R, ...F];
    }), V = U(() => L.value.filter((R) => R.canDownload)), B = U(() => M.value.length >= 5 ? M.value.slice(0, 4) : M.value), E = U(() => L.value.length >= 5 ? L.value.slice(0, 4) : L.value), I = U(() => M.value.length > 0 && M.value.every(
      (R) => r.value.has(R.package_id) || c.value.has(R.package_id) || u.value.has(R.package_id)
    )), A = U(() => V.value.length > 0 && V.value.every((R) => d.value.has(R.url))), te = U(() => M.value.length > 0 || V.value.length > 0), W = U(() => {
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
        F && Z(F);
      } else if (w.value === "packages") {
        const F = M.value.find((q) => q.package_id === R.id);
        F && ae(F);
      }
    }
    function z() {
      w.value === "models" ? $e() : w.value === "packages" && _e();
    }
    async function ae(R) {
      const F = R.package_id;
      if (!(r.value.has(F) || c.value.has(F) || u.value.has(F))) {
        ze(), v.value = F;
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
    function Z(R) {
      !R.url || !R.targetPath || d.value.has(R.url) || (C([{
        workflow: "unsaved",
        filename: R.filename,
        url: R.url,
        targetPath: R.targetPath
      }]), d.value.add(R.url));
    }
    async function _e() {
      for (const R of M.value)
        !r.value.has(R.package_id) && !c.value.has(R.package_id) && !u.value.has(R.package_id) && await ae(R);
    }
    function $e() {
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
      _e(), $e();
    }
    function Ue() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ne(R) {
      var re, Ce;
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
        for (let Me = 0; Me < 20; Me++) {
          const Ee = ne.activeWorkflow;
          if (!Ee) {
            await new Promise((De) => setTimeout(De, 50));
            continue;
          }
          const ee = (Ce = Ee.activeState) == null ? void 0 : Ce.id;
          if (!(F && ee === F)) {
            Me < 19 && await new Promise((De) => setTimeout(De, 50));
            continue;
          }
          if (he = !0, Ee.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Ee.filename}`), F && p.value.add(F);
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
    function qe() {
      l.value = !1, a.value = null;
    }
    function pe(R) {
      const { workflow: F } = R.detail;
      F && Ne(F);
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
      var re, Ce, ie, we, he, Me, Ee;
      const F = (re = R.detail) == null ? void 0 : re.ui_id, q = (ie = (Ce = R.detail) == null ? void 0 : Ce.status) == null ? void 0 : ie.status_str;
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
          const ee = ((Me = (he = (we = R.detail) == null ? void 0 : we.status) == null ? void 0 : he.messages) == null ? void 0 : Me[0]) || ((Ee = R.detail) == null ? void 0 : Ee.result) || "Unknown error";
          u.value.set(ne, ee), console.error("[ComfyGit] Package install failed:", ne, ee);
        }
        k.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", F);
    }
    let ue = null;
    function Te() {
      var R;
      return ue || (ue = (R = window.app) == null ? void 0 : R.api), ue;
    }
    let Pe = !1;
    function ze() {
      if (Pe) return !0;
      const R = Te();
      return R ? (R.addEventListener("cm-task-started", oe), R.addEventListener("cm-task-completed", ce), R.addEventListener("comfygit:workflow-changed", N), Pe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function N(R) {
      const { change_type: F } = R.detail;
      (F === "created" || F === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Je(() => {
      window.addEventListener("comfygit:workflow-loaded", pe);
    }), Gs(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", pe), Pe) {
        const R = Te();
        R && (R.removeEventListener("cm-task-started", oe), R.removeEventListener("cm-task-completed", ce), R.removeEventListener("comfygit:workflow-changed", N)), Pe = !1;
      }
    }), (R, F) => (n(), i(H, null, [
      l.value ? (n(), D(ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: qe
      }, {
        body: h(() => [
          s.value ? (n(), i("div", oP, [...F[4] || (F[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && x.value ? (n(), i("div", nP, [
            M.value.length > 0 ? (n(), i("div", aP, [
              t("div", lP, [
                t("span", iP, "Missing Custom Nodes (" + f(P.value) + ")", 1),
                M.value.length > 1 ? (n(), D(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: I.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    $(f(I.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", rP, [
                (n(!0), i(H, null, ve(B.value, (q) => (n(), i("div", {
                  key: q.package_id,
                  class: "package-item"
                }, [
                  t("div", cP, [
                    t("span", uP, f(q.title), 1),
                    t("span", dP, "(" + f(q.node_count) + " " + f(q.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(q.package_id) && !c.value.has(q.package_id) && !u.value.has(q.package_id) ? (n(), D(Re, {
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
                  }, 1032, ["disabled", "onClick"])) : v.value === q.package_id ? (n(), i("span", fP, "Installing...")) : c.value.has(q.package_id) ? (n(), i("span", mP, "Queued")) : u.value.has(q.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(q.package_id)
                  }, "Failed ⚠", 8, vP)) : (n(), i("span", pP, "Installed"))
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
            T.value.length > 0 ? (n(), i("div", gP, [
              t("div", hP, [
                t("span", yP, "Unknown Nodes (" + f(T.value.length) + ")", 1)
              ]),
              t("div", wP, [
                (n(!0), i(H, null, ve(T.value.slice(0, 5), (q) => (n(), i("div", {
                  key: q.node_type,
                  class: "item"
                }, [
                  t("code", kP, f(q.node_type), 1),
                  F[6] || (F[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                T.value.length > 5 ? (n(), i("div", _P, " ...and " + f(T.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            L.value.length > 0 ? (n(), i("div", bP, [
              t("div", $P, [
                t("span", CP, "Missing Models (" + f(L.value.length) + ")", 1),
                V.value.length > 1 ? (n(), D(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: A.value,
                  onClick: $e
                }, {
                  default: h(() => [
                    $(f(A.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", xP, [
                (n(!0), i(H, null, ve(E.value, (q) => (n(), i("div", {
                  key: q.widget_value,
                  class: "model-item"
                }, [
                  t("div", SP, [
                    t("span", IP, f(q.filename), 1)
                  ]),
                  q.canDownload ? (n(), i(H, { key: 0 }, [
                    d.value.has(q.url) ? (n(), i("span", EP, "Queued")) : (n(), D(Re, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ne) => Z(q)
                    }, {
                      default: h(() => [...F[7] || (F[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", TP, "Manual download required"))
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
            t("div", RP, [
              S(jn, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  F[2] || (F[2] = (q) => m.value = q),
                  Ue
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
          S(Re, {
            variant: "secondary",
            onClick: qe
          }, {
            default: h(() => [...F[10] || (F[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          te.value ? (n(), D(Re, {
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
      w.value ? (n(), D(sP, {
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
}), MP = /* @__PURE__ */ ge(PP, [["__scopeId", "data-v-512ff6ab"]]), DP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', LP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', AP = {
  comfy: DP,
  phosphor: LP
}, dl = "comfy", Qr = "comfygit-theme";
let Qs = null, Xr = dl;
function OP() {
  try {
    const e = localStorage.getItem(Qr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return dl;
}
function Zr(e = dl) {
  Qs && Qs.remove(), Qs = document.createElement("style"), Qs.id = "comfygit-theme-styles", Qs.setAttribute("data-theme", e), Qs.textContent = AP[e], document.head.appendChild(Qs), document.body.setAttribute("data-comfygit-theme", e), Xr = e;
  try {
    localStorage.setItem(Qr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function NP() {
  return Xr;
}
function UP(e) {
  Zr(e);
}
function zP(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const fl = document.createElement("link");
fl.rel = "stylesheet";
fl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(fl);
const FP = OP();
Zr(FP);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), UP(e);
  },
  getTheme: () => {
    const e = NP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Xt = null, Ot = null, Yo = null, Oo = null, ii = null, No = null, ri = null;
const ko = _(null);
let an = "no_workspace", ec = !1;
async function Dn() {
  var e;
  if (!((e = Wt) != null && e.api)) return null;
  try {
    const s = await Wt.api.fetchApi("/v2/comfygit/status");
    s.ok && (ko.value = await s.json());
  } catch {
  }
}
async function za() {
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
function Fa() {
  var s;
  if (an === "managed" || !ec) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function VP() {
  if (!ko.value) return !1;
  const e = ko.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ko.value.has_changes;
}
function Sn(e) {
  Xt && Xt.remove(), Xt = document.createElement("div"), Xt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Xt.appendChild(s), Xt.addEventListener("click", (l) => {
    l.target === Xt && Ca();
  });
  const o = (l) => {
    l.key === "Escape" && (Ca(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), aa({
    render: () => un(Y7, {
      initialView: e,
      onClose: Ca,
      onStatusUpdate: async (l) => {
        ko.value = l, Jo(), await za(), Va(), Fa();
      }
    })
  }).mount(s), document.body.appendChild(Xt);
}
function Ca() {
  Xt && (Xt.remove(), Xt = null);
}
function ci(e) {
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
  document.addEventListener("keydown", a), Yo = aa({
    render: () => un(qr, {
      status: ko.value,
      onClose: Uo,
      onCommitted: (l) => {
        Uo(), BP(l.success, l.message), Dn().then(Jo);
      }
    })
  }), Yo.mount(Ot), document.body.appendChild(Ot);
}
function Uo() {
  Yo && (Yo.unmount(), Yo = null), Ot && (Ot.remove(), Ot = null);
}
function BP(e, s) {
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
function WP() {
  Oo || (Oo = document.createElement("div"), Oo.className = "comfygit-download-queue-root", ii = aa({
    render: () => un(WR)
  }), ii.mount(Oo), document.body.appendChild(Oo), console.log("[ComfyGit] Model download queue mounted"));
}
function GP() {
  No || (No = document.createElement("div"), No.className = "comfygit-missing-resources-root", ri = aa({
    render: () => un(MP)
  }), ri.mount(No), document.body.appendChild(No), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Tt = null;
function Jo() {
  if (!Tt) return;
  const e = Tt.querySelector(".commit-indicator");
  e && (e.style.display = VP() ? "block" : "none");
}
function Va() {
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
      function: () => Sn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Tt && !Tt.disabled && ci(Tt);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Sn, Tt = document.createElement("button"), Tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Tt.innerHTML = 'Commit <span class="commit-indicator"></span>', Tt.title = "Quick Commit", Tt.onclick = () => ci(Tt), e.appendChild(s), e.appendChild(Tt), (r = (l = Wt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Wt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), WP(), GP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Sn(u);
    }));
    const { loadPendingDownloads: o } = xo();
    o(), await Promise.all([Dn(), za()]), Jo(), Va(), Fa(), setTimeout(Fa, 100), setInterval(async () => {
      await Promise.all([Dn(), za()]), Jo(), Va();
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
          p.remove(), Sn("debug-env");
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Dn(), Jo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (g) => {
        const w = zP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
