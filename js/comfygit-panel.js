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
const nt = {}, po = [], gs = () => {
}, ri = () => !1, Vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), za = (e) => e.startsWith("onUpdate:"), gt = Object.assign, Fa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, sc = Object.prototype.hasOwnProperty, et = (e, s) => sc.call(e, s), Be = Array.isArray, go = (e) => an(e) === "[object Map]", Co = (e) => an(e) === "[object Set]", ul = (e) => an(e) === "[object Date]", Ge = (e) => typeof e == "function", ut = (e) => typeof e == "string", ss = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", ci = (e) => (ot(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), ui = Object.prototype.toString, an = (e) => ui.call(e), oc = (e) => an(e).slice(8, -1), di = (e) => an(e) === "[object Object]", Ba = (e) => ut(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fo = /* @__PURE__ */ Ua(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, nc = /-\w/g, Kt = Wn(
  (e) => e.replace(nc, (s) => s.slice(1).toUpperCase())
), ac = /\B([A-Z])/g, Vs = Wn(
  (e) => e.replace(ac, "-$1").toLowerCase()
), Gn = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1)), oa = Wn(
  (e) => e ? `on${Gn(e)}` : ""
), zs = (e, s) => !Object.is(e, s), Cn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, fi = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, jn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, lc = (e) => {
  const s = ut(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let dl;
const Hn = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = ut(n) ? uc(n) : Ft(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (ut(e) || ot(e))
    return e;
}
const ic = /;(?![^(]*\))/g, rc = /:([^]+)/, cc = /\/\*[^]*?\*\//g;
function uc(e) {
  const s = {};
  return e.replace(cc, "").split(ic).forEach((o) => {
    if (o) {
      const n = o.split(rc);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Ie(e) {
  let s = "";
  if (ut(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ie(e[o]);
      n && (s += n + " ");
    }
  else if (ot(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const dc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", fc = /* @__PURE__ */ Ua(dc);
function mi(e) {
  return !!e || e === "";
}
function mc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = so(e[n], s[n]);
  return o;
}
function so(e, s) {
  if (e === s) return !0;
  let o = ul(e), n = ul(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ss(e), n = ss(s), o || n)
    return e === s;
  if (o = Be(e), n = Be(s), o || n)
    return o && n ? mc(e, s) : !1;
  if (o = ot(e), n = ot(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !so(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Va(e, s) {
  return e.findIndex((o) => so(o, s));
}
const vi = (e) => !!(e && e.__v_isRef === !0), f = (e) => ut(e) ? e : e == null ? "" : Be(e) || ot(e) && (e.toString === ui || !Ge(e.toString)) ? vi(e) ? f(e.value) : JSON.stringify(e, pi, 2) : String(e), pi = (e, s) => vi(s) ? pi(e, s.value) : go(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[na(n, i) + " =>"] = l, o),
    {}
  )
} : Co(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => na(o))
} : ss(s) ? na(s) : ot(s) && !Be(s) && !di(s) ? String(s) : s, na = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ss(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ot;
class vc {
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
function pc() {
  return Ot;
}
let it;
const aa = /* @__PURE__ */ new WeakSet();
class gi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ot && Ot.active && Ot.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, aa.has(this) && (aa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fl(this), wi(this);
    const s = it, o = ts;
    it = this, ts = !0;
    try {
      return this.fn();
    } finally {
      _i(this), it = s, ts = o, this.flags &= -3;
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
    this.flags & 64 ? aa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let hi = 0, Bo, Vo;
function yi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Vo, Vo = e;
    return;
  }
  e.next = Bo, Bo = e;
}
function Wa() {
  hi++;
}
function Ga() {
  if (--hi > 0)
    return;
  if (Vo) {
    let s = Vo;
    for (Vo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Bo; ) {
    let s = Bo;
    for (Bo = void 0; s; ) {
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
function wi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function _i(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), ja(n), gc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function ka(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (ki(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function ki(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qo) || (e.globalVersion = Qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ka(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = it, n = ts;
  it = e, ts = !0;
  try {
    wi(e);
    const l = e.fn(e._value);
    (s.version === 0 || zs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    it = o, ts = n, _i(e), e.flags &= -3;
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
function gc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let ts = !0;
const bi = [];
function Es() {
  bi.push(ts), ts = !1;
}
function Ts() {
  const e = bi.pop();
  ts = e === void 0 ? !0 : e;
}
function fl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = it;
    it = void 0;
    try {
      s();
    } finally {
      it = o;
    }
  }
}
let Qo = 0;
class hc {
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
    if (!it || !ts || it === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== it)
      o = this.activeLink = new hc(it, this), it.deps ? (o.prevDep = it.depsTail, it.depsTail.nextDep = o, it.depsTail = o) : it.deps = it.depsTail = o, $i(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = it.depsTail, o.nextDep = void 0, it.depsTail.nextDep = o, it.depsTail = o, it.deps === o && (it.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, Qo++, this.notify(s);
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
function $i(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        $i(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const ba = /* @__PURE__ */ new WeakMap(), eo = Symbol(
  ""
), $a = Symbol(
  ""
), Xo = Symbol(
  ""
);
function bt(e, s, o) {
  if (ts && it) {
    let n = ba.get(e);
    n || ba.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Ha()), l.map = n, l.key = o), l.track();
  }
}
function xs(e, s, o, n, l, i) {
  const c = ba.get(e);
  if (!c) {
    Qo++;
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
        (w === "length" || w === Xo || !ss(w) && w >= v) && u(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), m && u(c.get(Xo)), s) {
        case "add":
          d ? m && u(c.get("length")) : (u(c.get(eo)), go(e) && u(c.get($a)));
          break;
        case "delete":
          d || (u(c.get(eo)), go(e) && u(c.get($a)));
          break;
        case "set":
          go(e) && u(c.get(eo));
          break;
      }
  }
  Ga();
}
function ro(e) {
  const s = Xe(e);
  return s === e ? s : (bt(s, "iterate", Xo), Gt(e) ? s : s.map(os));
}
function Kn(e) {
  return bt(e = Xe(e), "iterate", Xo), e;
}
function As(e, s) {
  return Ps(e) ? to(e) ? ko(os(s)) : ko(s) : os(s);
}
const yc = {
  __proto__: null,
  [Symbol.iterator]() {
    return la(this, Symbol.iterator, (e) => As(this, e));
  },
  concat(...e) {
    return ro(this).concat(
      ...e.map((s) => Be(s) ? ro(s) : s)
    );
  },
  entries() {
    return la(this, "entries", (e) => (e[1] = As(this, e[1]), e));
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
      (o) => o.map((n) => As(this, n)),
      arguments
    );
  },
  find(e, s) {
    return bs(
      this,
      "find",
      e,
      s,
      (o) => As(this, o),
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
      (o) => As(this, o),
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
    return ia(this, "includes", e);
  },
  indexOf(...e) {
    return ia(this, "indexOf", e);
  },
  join(e) {
    return ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ia(this, "lastIndexOf", e);
  },
  map(e, s) {
    return bs(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Ro(this, "pop");
  },
  push(...e) {
    return Ro(this, "push", e);
  },
  reduce(e, ...s) {
    return ml(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return ml(this, "reduceRight", e, s);
  },
  shift() {
    return Ro(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return bs(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Ro(this, "splice", e);
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
    return Ro(this, "unshift", e);
  },
  values() {
    return la(this, "values", (e) => As(this, e));
  }
};
function la(e, s, o) {
  const n = Kn(e), l = n[s]();
  return n !== e && !Gt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const wc = Array.prototype;
function bs(e, s, o, n, l, i) {
  const c = Kn(e), u = c !== e && !Gt(e), d = c[s];
  if (d !== wc[s]) {
    const g = d.apply(e, i);
    return u ? os(g) : g;
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
  const l = Kn(e);
  let i = o;
  return l !== e && (Gt(e) ? o.length > 3 && (i = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : i = function(c, u, d) {
    return o.call(this, c, As(e, u), d, e);
  }), l[s](i, ...n);
}
function ia(e, s, o) {
  const n = Xe(e);
  bt(n, "iterate", Xo);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Ya(o[0]) ? (o[0] = Xe(o[0]), n[s](...o)) : l;
}
function Ro(e, s, o = []) {
  Es(), Wa();
  const n = Xe(e)[s].apply(e, o);
  return Ga(), Ts(), n;
}
const _c = /* @__PURE__ */ Ua("__proto__,__v_isRef,__isVue"), Ci = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ss)
);
function kc(e) {
  ss(e) || (e = String(e));
  const s = Xe(this);
  return bt(s, "has", e), s.hasOwnProperty(e);
}
class xi {
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
      return n === (l ? i ? Rc : Ti : i ? Ei : Ii).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Be(s);
    if (!l) {
      let d;
      if (c && (d = yc[o]))
        return d;
      if (o === "hasOwnProperty")
        return kc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      xt(s) ? s : n
    );
    if ((ss(o) ? Ci.has(o) : _c(o)) || (l || bt(s, "get", o), i))
      return u;
    if (xt(u)) {
      const d = c && Ba(o) ? u : u.value;
      return l && ot(d) ? Rn(d) : d;
    }
    return ot(u) ? l ? Rn(u) : Ws(u) : u;
  }
}
class Si extends xi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Be(s) && Ba(o);
    if (!this._isShallow) {
      const m = Ps(i);
      if (!Gt(n) && !Ps(n) && (i = Xe(i), n = Xe(n)), !c && xt(i) && !xt(n))
        return m || (i.value = n), !0;
    }
    const u = c ? Number(o) < s.length : et(s, o), d = Reflect.set(
      s,
      o,
      n,
      xt(s) ? s : l
    );
    return s === Xe(l) && (u ? zs(n, i) && xs(s, "set", o, n) : xs(s, "add", o, n)), d;
  }
  deleteProperty(s, o) {
    const n = et(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && xs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ss(o) || !Ci.has(o)) && bt(s, "has", o), n;
  }
  ownKeys(s) {
    return bt(
      s,
      "iterate",
      Be(s) ? "length" : eo
    ), Reflect.ownKeys(s);
  }
}
class bc extends xi {
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
const $c = /* @__PURE__ */ new Si(), Cc = /* @__PURE__ */ new bc(), xc = /* @__PURE__ */ new Si(!0);
const Ca = (e) => e, vn = (e) => Reflect.getPrototypeOf(e);
function Sc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Xe(l), c = go(i), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, m = l[e](...n), v = o ? Ca : s ? ko : os;
    return !s && bt(
      i,
      "iterate",
      d ? $a : eo
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
function pn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ic(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, c = Xe(i), u = Xe(l);
      e || (zs(l, u) && bt(c, "get", l), bt(c, "get", u));
      const { has: d } = vn(c), m = s ? Ca : e ? ko : os;
      if (d.call(c, l))
        return m(i.get(l));
      if (d.call(c, u))
        return m(i.get(u));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && bt(Xe(l), "iterate", eo), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Xe(i), u = Xe(l);
      return e || (zs(l, u) && bt(c, "has", l), bt(c, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const c = this, u = c.__v_raw, d = Xe(u), m = s ? Ca : e ? ko : os;
      return !e && bt(d, "iterate", eo), u.forEach((v, g) => l.call(i, m(v), m(g), c));
    }
  };
  return gt(
    o,
    e ? {
      add: pn("add"),
      set: pn("set"),
      delete: pn("delete"),
      clear: pn("clear")
    } : {
      add(l) {
        !s && !Gt(l) && !Ps(l) && (l = Xe(l));
        const i = Xe(this);
        return vn(i).has.call(i, l) || (i.add(l), xs(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Gt(i) && !Ps(i) && (i = Xe(i));
        const c = Xe(this), { has: u, get: d } = vn(c);
        let m = u.call(c, l);
        m || (l = Xe(l), m = u.call(c, l));
        const v = d.call(c, l);
        return c.set(l, i), m ? zs(i, v) && xs(c, "set", l, i) : xs(c, "add", l, i), this;
      },
      delete(l) {
        const i = Xe(this), { has: c, get: u } = vn(i);
        let d = c.call(i, l);
        d || (l = Xe(l), d = c.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && xs(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Xe(this), i = l.size !== 0, c = l.clear();
        return i && xs(
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
    o[l] = Sc(l, e, s);
  }), o;
}
function Ka(e, s) {
  const o = Ic(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    et(o, l) && l in n ? o : n,
    l,
    i
  );
}
const Ec = {
  get: /* @__PURE__ */ Ka(!1, !1)
}, Tc = {
  get: /* @__PURE__ */ Ka(!1, !0)
}, Pc = {
  get: /* @__PURE__ */ Ka(!0, !1)
};
const Ii = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap();
function Mc(e) {
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
function Dc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mc(oc(e));
}
function Ws(e) {
  return Ps(e) ? e : qa(
    e,
    !1,
    $c,
    Ec,
    Ii
  );
}
function Lc(e) {
  return qa(
    e,
    !1,
    xc,
    Tc,
    Ei
  );
}
function Rn(e) {
  return qa(
    e,
    !0,
    Cc,
    Pc,
    Ti
  );
}
function qa(e, s, o, n, l) {
  if (!ot(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = Dc(e);
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
function to(e) {
  return Ps(e) ? to(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ps(e) {
  return !!(e && e.__v_isReadonly);
}
function Gt(e) {
  return !!(e && e.__v_isShallow);
}
function Ya(e) {
  return e ? !!e.__v_raw : !1;
}
function Xe(e) {
  const s = e && e.__v_raw;
  return s ? Xe(s) : e;
}
function Oc(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && fi(e, "__v_skip", !0), e;
}
const os = (e) => ot(e) ? Ws(e) : e, ko = (e) => ot(e) ? Rn(e) : e;
function xt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Ac(e, !1);
}
function Ac(e, s) {
  return xt(e) ? e : new Nc(e, s);
}
class Nc {
  constructor(s, o) {
    this.dep = new Ha(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Xe(s), this._value = o ? s : os(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Gt(s) || Ps(s);
    s = n ? s : Xe(s), zs(s, o) && (this._rawValue = s, this._value = n ? s : os(s), this.dep.trigger());
  }
}
function We(e) {
  return xt(e) ? e.value : e;
}
const Uc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return xt(l) && !xt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function Pi(e) {
  return to(e) ? e : new Proxy(e, Uc);
}
class zc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new Ha(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    it !== this)
      return yi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return ki(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Fc(e, s, o = !1) {
  let n, l;
  return Ge(e) ? n = e : (n = e.get, l = e.set), new zc(n, l, o);
}
const gn = {}, Mn = /* @__PURE__ */ new WeakMap();
let Xs;
function Bc(e, s = !1, o = Xs) {
  if (o) {
    let n = Mn.get(o);
    n || Mn.set(o, n = []), n.push(e);
  }
}
function Vc(e, s, o = nt) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (E) => l ? E : Gt(E) || l === !1 || l === 0 ? Ss(E, 1) : Ss(E);
  let v, g, w, p, _ = !1, C = !1;
  if (xt(e) ? (g = () => e.value, _ = Gt(e)) : to(e) ? (g = () => m(e), _ = !0) : Be(e) ? (C = !0, _ = e.some((E) => to(E) || Gt(E)), g = () => e.map((E) => {
    if (xt(E))
      return E.value;
    if (to(E))
      return m(E);
    if (Ge(E))
      return d ? d(E, 2) : E();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Es();
      try {
        w();
      } finally {
        Ts();
      }
    }
    const E = Xs;
    Xs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Xs = E;
    }
  } : g = gs, s && l) {
    const E = g, W = l === !0 ? 1 / 0 : l;
    g = () => Ss(E(), W);
  }
  const b = pc(), S = () => {
    v.stop(), b && b.active && Fa(b.effects, v);
  };
  if (i && s) {
    const E = s;
    s = (...W) => {
      E(...W), S();
    };
  }
  let R = C ? new Array(e.length).fill(gn) : gn;
  const I = (E) => {
    if (!(!(v.flags & 1) || !v.dirty && !E))
      if (s) {
        const W = v.run();
        if (l || _ || (C ? W.some((K, J) => zs(K, R[J])) : zs(W, R))) {
          w && w();
          const K = Xs;
          Xs = v;
          try {
            const J = [
              W,
              // pass undefined as the old value when it's changed for the first time
              R === gn ? void 0 : C && R[0] === gn ? [] : R,
              p
            ];
            R = W, d ? d(s, 3, J) : (
              // @ts-expect-error
              s(...J)
            );
          } finally {
            Xs = K;
          }
        }
      } else
        v.run();
  };
  return u && u(I), v = new gi(g), v.scheduler = c ? () => c(I, !1) : I, p = (E) => Bc(E, !1, v), w = v.onStop = () => {
    const E = Mn.get(v);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const W of E) W();
      Mn.delete(v);
    }
  }, s ? n ? I(!0) : R = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ss(e, s = 1 / 0, o) {
  if (s <= 0 || !ot(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, xt(e))
    Ss(e.value, s, o);
  else if (Be(e))
    for (let n = 0; n < e.length; n++)
      Ss(e[n], s, o);
  else if (Co(e) || go(e))
    e.forEach((n) => {
      Ss(n, s, o);
    });
  else if (di(e)) {
    for (const n in e)
      Ss(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ss(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ln(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    qn(l, s, o);
  }
}
function ns(e, s, o, n) {
  if (Ge(e)) {
    const l = ln(e, s, o, n);
    return l && ci(l) && l.catch((i) => {
      qn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(ns(e[i], s, o, n));
    return l;
  }
}
function qn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || nt;
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
      Es(), ln(i, null, 10, [
        e,
        d,
        m
      ]), Ts();
      return;
    }
  }
  Wc(e, o, l, n, c);
}
function Wc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Pt = [];
let ms = -1;
const ho = [];
let Ns = null, fo = 0;
const Ri = /* @__PURE__ */ Promise.resolve();
let Dn = null;
function ht(e) {
  const s = Dn || Ri;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Gc(e) {
  let s = ms + 1, o = Pt.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = Pt[n], i = Zo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Ja(e) {
  if (!(e.flags & 1)) {
    const s = Zo(e), o = Pt[Pt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Zo(o) ? Pt.push(e) : Pt.splice(Gc(s), 0, e), e.flags |= 1, Mi();
  }
}
function Mi() {
  Dn || (Dn = Ri.then(Li));
}
function jc(e) {
  Be(e) ? ho.push(...e) : Ns && e.id === -1 ? Ns.splice(fo + 1, 0, e) : e.flags & 1 || (ho.push(e), e.flags |= 1), Mi();
}
function vl(e, s, o = ms + 1) {
  for (; o < Pt.length; o++) {
    const n = Pt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Pt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Di(e) {
  if (ho.length) {
    const s = [...new Set(ho)].sort(
      (o, n) => Zo(o) - Zo(n)
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
function Li(e) {
  try {
    for (ms = 0; ms < Pt.length; ms++) {
      const s = Pt[ms];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), ln(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ms < Pt.length; ms++) {
      const s = Pt[ms];
      s && (s.flags &= -2);
    }
    ms = -1, Pt.length = 0, Di(), Dn = null, (Pt.length || ho.length) && Li();
  }
}
let _t = null, Oi = null;
function Ln(e) {
  const s = _t;
  return _t = e, Oi = e && e.type.__scopeId || null, s;
}
function h(e, s = _t, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && Nn(-1);
    const i = Ln(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Ln(i), n._d && Nn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, s) {
  if (_t === null)
    return e;
  const o = Zn(_t), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, u, d = nt] = s[l];
    i && (Ge(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ss(c), n.push({
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
function qs(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    i && (u.oldValue = i[c].value);
    let d = u.dir[n];
    d && (Es(), ns(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Ts());
  }
}
const Ai = Symbol("_vte"), Ni = (e) => e.__isTeleport, Wo = (e) => e && (e.disabled || e.disabled === ""), pl = (e) => e && (e.defer || e.defer === ""), gl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, hl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xa = (e, s) => {
  const o = e && e.to;
  return ut(o) ? s ? s(o) : null : o;
}, Ui = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: C, createComment: b }
    } = m, S = Wo(s.props);
    let { shapeFlag: R, children: I, dynamicChildren: E } = s;
    if (e == null) {
      const W = s.el = C(""), K = s.anchor = C("");
      p(W, o, n), p(K, o, n);
      const J = (P, A) => {
        R & 16 && v(
          I,
          P,
          A,
          l,
          i,
          c,
          u,
          d
        );
      }, M = () => {
        const P = s.target = xa(s.props, _), A = zi(P, s, C, p);
        P && (c !== "svg" && gl(P) ? c = "svg" : c !== "mathml" && hl(P) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), S || (J(P, A), xn(s, !1)));
      };
      S && (J(o, K), xn(s, !0)), pl(s.props) ? (s.el.__isMounted = !1, Et(() => {
        M(), delete s.el.__isMounted;
      }, i)) : M();
    } else {
      if (pl(s.props) && e.el.__isMounted === !1) {
        Et(() => {
          Ui.process(
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
      const W = s.anchor = e.anchor, K = s.target = e.target, J = s.targetAnchor = e.targetAnchor, M = Wo(e.props), P = M ? o : K, A = M ? W : J;
      if (c === "svg" || gl(K) ? c = "svg" : (c === "mathml" || hl(K)) && (c = "mathml"), E ? (w(
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
        A,
        l,
        i,
        c,
        u,
        !1
      ), S)
        M ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : hn(
          s,
          o,
          W,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ee = s.target = xa(
          s.props,
          _
        );
        ee && hn(
          s,
          ee,
          null,
          m,
          0
        );
      } else M && hn(
        s,
        K,
        J,
        m,
        1
      );
      xn(s, S);
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
      const p = i || !Wo(w);
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
  move: hn,
  hydrate: Hc
};
function hn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: m, props: v } = e, g = i === 2;
  if (g && n(c, s, o), (!g || Wo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && n(u, s, o);
}
function Hc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: m, createText: v }
}, g) {
  function w(C, b, S, R) {
    b.anchor = g(
      c(C),
      b,
      u(C),
      o,
      n,
      l,
      i
    ), b.targetStart = S, b.targetAnchor = R;
  }
  const p = s.target = xa(
    s.props,
    d
  ), _ = Wo(s.props);
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
        s.targetAnchor || zi(p, s, v, m), g(
          C && c(C),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    xn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const kt = Ui;
function xn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function zi(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Ai] = i, e && (n(l, e), n(i, e)), i;
}
const Cs = Symbol("_leaveCb"), yn = Symbol("_enterCb");
function Fi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qe(() => {
    e.isMounted = !0;
  }), qi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Vt = [Function, Array], Bi = {
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
}, Vi = (e) => {
  const s = e.subTree;
  return s.component ? Vi(s.component) : s;
}, Kc = {
  name: "BaseTransition",
  props: Bi,
  setup(e, { slots: s }) {
    const o = ol(), n = Fi();
    return () => {
      const l = s.default && Qa(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Wi(l), c = Xe(e), { mode: u } = c;
      if (n.isLeaving)
        return ra(i);
      const d = yl(i);
      if (!d)
        return ra(i);
      let m = en(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      d.type !== $t && oo(d, m);
      let v = o.subTree && yl(o.subTree);
      if (v && v.type !== $t && !Zs(v, d) && Vi(o).type !== $t) {
        let g = en(
          v,
          c,
          n,
          o
        );
        if (oo(v, g), u === "out-in" && d.type !== $t)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, ra(i);
        u === "in-out" && d.type !== $t ? g.delayLeave = (w, p, _) => {
          const C = Gi(
            n,
            v
          );
          C[String(v.key)] = v, w[Cs] = () => {
            p(), w[Cs] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return i;
    };
  }
};
function Wi(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== $t) {
        s = o;
        break;
      }
  }
  return s;
}
const qc = Kc;
function Gi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function en(e, s, o, n, l) {
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
    onAppear: S,
    onAfterAppear: R,
    onAppearCancelled: I
  } = s, E = String(e.key), W = Gi(o, e), K = (P, A) => {
    P && ns(
      P,
      n,
      9,
      A
    );
  }, J = (P, A) => {
    const ee = A[1];
    K(P, A), Be(P) ? P.every((F) => F.length <= 1) && ee() : P.length <= 1 && ee();
  }, M = {
    mode: c,
    persisted: u,
    beforeEnter(P) {
      let A = d;
      if (!o.isMounted)
        if (i)
          A = b || d;
        else
          return;
      P[Cs] && P[Cs](
        !0
        /* cancelled */
      );
      const ee = W[E];
      ee && Zs(e, ee) && ee.el[Cs] && ee.el[Cs](), K(A, [P]);
    },
    enter(P) {
      let A = m, ee = v, F = g;
      if (!o.isMounted)
        if (i)
          A = S || m, ee = R || v, F = I || g;
        else
          return;
      let L = !1;
      const V = P[yn] = (X) => {
        L || (L = !0, X ? K(F, [P]) : K(ee, [P]), M.delayedLeave && M.delayedLeave(), P[yn] = void 0);
      };
      A ? J(A, [P, V]) : V();
    },
    leave(P, A) {
      const ee = String(e.key);
      if (P[yn] && P[yn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return A();
      K(w, [P]);
      let F = !1;
      const L = P[Cs] = (V) => {
        F || (F = !0, A(), V ? K(C, [P]) : K(_, [P]), P[Cs] = void 0, W[ee] === e && delete W[ee]);
      };
      W[ee] = e, p ? J(p, [P, L]) : L();
    },
    clone(P) {
      const A = en(
        P,
        s,
        o,
        n,
        l
      );
      return l && l(A), A;
    }
  };
  return M;
}
function ra(e) {
  if (Yn(e))
    return e = Fs(e), e.children = null, e;
}
function yl(e) {
  if (!Yn(e))
    return Ni(e.type) && e.children ? Wi(e.children) : e;
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
function Qa(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
      Qa(c.children, s, u)
    )) : (s || c.type !== $t) && n.push(u != null ? Fs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    gt({ name: e.name }, s, { setup: e })
  ) : e;
}
function ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const On = /* @__PURE__ */ new WeakMap();
function Go(e, s, o, n, l = !1) {
  if (Be(e)) {
    e.forEach(
      (_, C) => Go(
        _,
        s && (Be(s) ? s[C] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (yo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Go(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Zn(n.component) : n.el, c = l ? null : i, { i: u, r: d } = e, m = s && s.r, v = u.refs === nt ? u.refs = {} : u.refs, g = u.setupState, w = Xe(g), p = g === nt ? ri : (_) => et(w, _);
  if (m != null && m !== d) {
    if (wl(s), ut(m))
      v[m] = null, p(m) && (g[m] = null);
    else if (xt(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (Ge(d))
    ln(d, u, 12, [c, v]);
  else {
    const _ = ut(d), C = xt(d);
    if (_ || C) {
      const b = () => {
        if (e.f) {
          const S = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Be(S) && Fa(S, i);
          else if (Be(S))
            S.includes(i) || S.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const R = [i];
            d.value = R, e.k && (v[e.k] = R);
          }
        } else _ ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const S = () => {
          b(), On.delete(e);
        };
        S.id = -1, On.set(e, S), Et(S, o);
      } else
        wl(e), b();
    }
  }
}
function wl(e) {
  const s = On.get(e);
  s && (s.flags |= 8, On.delete(e));
}
Hn().requestIdleCallback;
Hn().cancelIdleCallback;
const yo = (e) => !!e.type.__asyncLoader, Yn = (e) => e.type.__isKeepAlive;
function Yc(e, s) {
  Hi(e, "a", s);
}
function Jc(e, s) {
  Hi(e, "da", s);
}
function Hi(e, s, o = Ct) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Jn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Yn(l.parent.vnode) && Qc(n, s, o, l), l = l.parent;
  }
}
function Qc(e, s, o, n) {
  const l = Jn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  Gs(() => {
    Fa(n[s], l);
  }, o);
}
function Jn(e, s, o = Ct, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      Es();
      const u = rn(o), d = ns(s, o, e, c);
      return u(), Ts(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Rs = (e) => (s, o = Ct) => {
  (!on || e === "sp") && Jn(e, (...n) => s(...n), o);
}, Xc = Rs("bm"), Qe = Rs("m"), Zc = Rs(
  "bu"
), Ki = Rs("u"), qi = Rs(
  "bum"
), Gs = Rs("um"), eu = Rs(
  "sp"
), tu = Rs("rtg"), su = Rs("rtc");
function ou(e, s = Ct) {
  Jn("ec", e, s);
}
const nu = "components", Yi = Symbol.for("v-ndc");
function Xa(e) {
  return ut(e) ? au(nu, e, !1) || e : e || Yi;
}
function au(e, s, o = !0, n = !1) {
  const l = _t || Ct;
  if (l) {
    const i = l.type;
    {
      const u = Ku(
        i,
        !1
      );
      if (u && (u === s || u === Kt(s) || u === Gn(Kt(s))))
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
  return e && (e[s] || e[Kt(s)] || e[Gn(Kt(s))]);
}
function ye(e, s, o, n) {
  let l;
  const i = o, c = Be(e);
  if (c || ut(e)) {
    const u = c && to(e);
    let d = !1, m = !1;
    u && (d = !Gt(e), m = Ps(e), e = Kn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        d ? m ? ko(os(e[v])) : os(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, i);
  } else if (ot(e))
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
function no(e, s) {
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
  if (_t.ce || _t.parent && yo(_t.parent) && _t.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), D(
      j,
      null,
      [x("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Ji(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = D(
    j,
    {
      key: (u && !ss(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function Ji(e) {
  return e.some((s) => sn(s) ? !(s.type === $t || s.type === j && !Ji(s.children)) : !0) ? e : null;
}
const Sa = (e) => e ? pr(e) ? Zn(e) : Sa(e.parent) : null, jo = (
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
    $parent: (e) => Sa(e.parent),
    $root: (e) => Sa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Xi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ja(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ht.bind(e.proxy)),
    $watch: (e) => hu.bind(e)
  })
), ca = (e, s) => e !== nt && !e.__isScriptSetup && et(e, s), lu = {
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
        if (ca(n, s))
          return c[s] = 1, n[s];
        if (l !== nt && et(l, s))
          return c[s] = 2, l[s];
        if (et(i, s))
          return c[s] = 3, i[s];
        if (o !== nt && et(o, s))
          return c[s] = 4, o[s];
        Ia && (c[s] = 0);
      }
    }
    const m = jo[s];
    let v, g;
    if (m)
      return s === "$attrs" && bt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== nt && et(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = d.config.globalProperties, et(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return ca(l, s) ? (l[s] = o, !0) : n !== nt && et(n, s) ? (n[s] = o, !0) : et(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== nt && u[0] !== "$" && et(e, u) || ca(s, u) || et(i, u) || et(n, u) || et(jo, u) || et(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : et(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function kl(e) {
  return Be(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Ia = !0;
function iu(e) {
  const s = Xi(e), o = e.proxy, n = e.ctx;
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
    beforeDestroy: S,
    beforeUnmount: R,
    destroyed: I,
    unmounted: E,
    render: W,
    renderTracked: K,
    renderTriggered: J,
    errorCaptured: M,
    serverPrefetch: P,
    // public API
    expose: A,
    inheritAttrs: ee,
    // assets
    components: F,
    directives: L,
    filters: V
  } = s;
  if (m && ru(m, n, null), c)
    for (const ae in c) {
      const Z = c[ae];
      Ge(Z) && (n[ae] = Z.bind(o));
    }
  if (l) {
    const ae = l.call(o, o);
    ot(ae) && (e.data = Ws(ae));
  }
  if (Ia = !0, i)
    for (const ae in i) {
      const Z = i[ae], we = Ge(Z) ? Z.bind(o, o) : Ge(Z.get) ? Z.get.bind(o, o) : gs, be = !Ge(Z) && Ge(Z.set) ? Z.set.bind(o) : gs, Me = U({
        get: we,
        set: be
      });
      Object.defineProperty(n, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (ze) => Me.value = ze
      });
    }
  if (u)
    for (const ae in u)
      Qi(u[ae], n, o, ae);
  if (d) {
    const ae = Ge(d) ? d.call(o) : d;
    Reflect.ownKeys(ae).forEach((Z) => {
      vu(Z, ae[Z]);
    });
  }
  v && bl(v, e, "c");
  function N(ae, Z) {
    Be(Z) ? Z.forEach((we) => ae(we.bind(o))) : Z && ae(Z.bind(o));
  }
  if (N(Xc, g), N(Qe, w), N(Zc, p), N(Ki, _), N(Yc, C), N(Jc, b), N(ou, M), N(su, K), N(tu, J), N(qi, R), N(Gs, E), N(eu, P), Be(A))
    if (A.length) {
      const ae = e.exposed || (e.exposed = {});
      A.forEach((Z) => {
        Object.defineProperty(ae, Z, {
          get: () => o[Z],
          set: (we) => o[Z] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  W && e.render === gs && (e.render = W), ee != null && (e.inheritAttrs = ee), F && (e.components = F), L && (e.directives = L), P && ji(e);
}
function ru(e, s, o = gs) {
  Be(e) && (e = Ea(e));
  for (const n in e) {
    const l = e[n];
    let i;
    ot(l) ? "default" in l ? i = Sn(
      l.from || n,
      l.default,
      !0
    ) : i = Sn(l.from || n) : i = Sn(l), xt(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : s[n] = i;
  }
}
function bl(e, s, o) {
  ns(
    Be(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Qi(e, s, o, n) {
  let l = n.includes(".") ? tr(o, n) : () => o[n];
  if (ut(e)) {
    const i = s[e];
    Ge(i) && ft(l, i);
  } else if (Ge(e))
    ft(l, e.bind(o));
  else if (ot(e))
    if (Be(e))
      e.forEach((i) => Qi(i, s, o, n));
    else {
      const i = Ge(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ge(i) && ft(l, i, e);
    }
}
function Xi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = i.get(s);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = s : (d = {}, l.length && l.forEach(
    (m) => An(d, m, c, !0)
  ), An(d, s, c)), ot(s) && i.set(s, d), d;
}
function An(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && An(e, i, o, !0), l && l.forEach(
    (c) => An(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const u = cu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const cu = {
  data: $l,
  props: Cl,
  emits: Cl,
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
  watch: du,
  // provide / inject
  provide: $l,
  inject: uu
};
function $l(e, s) {
  return s ? e ? function() {
    return gt(
      Ge(e) ? e.call(this, this) : e,
      Ge(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function uu(e, s) {
  return zo(Ea(e), Ea(s));
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
function It(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function zo(e, s) {
  return e ? gt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Cl(e, s) {
  return e ? Be(e) && Be(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : gt(
    /* @__PURE__ */ Object.create(null),
    kl(e),
    kl(s ?? {})
  ) : s;
}
function du(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = gt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = It(e[n], s[n]);
  return o;
}
function Zi() {
  return {
    app: null,
    config: {
      isNativeTag: ri,
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
let fu = 0;
function mu(e, s) {
  return function(n, l = null) {
    Ge(n) || (n = gt({}, n)), l != null && !ot(l) && (l = null);
    const i = Zi(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: fu++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Yu,
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
          const p = m._ceVNode || x(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Zn(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (ns(
          u,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, g) {
        return i.provides[v] = g, m;
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
function vu(e, s) {
  if (Ct) {
    let o = Ct.provides;
    const n = Ct.parent && Ct.parent.provides;
    n === o && (o = Ct.provides = Object.create(n)), o[e] = s;
  }
}
function Sn(e, s, o = !1) {
  const n = ol();
  if (n || wo) {
    let l = wo ? wo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ge(s) ? s.call(n && n.proxy) : s;
  }
}
const pu = Symbol.for("v-scx"), gu = () => Sn(pu);
function ft(e, s, o) {
  return er(e, s, o);
}
function er(e, s, o = nt) {
  const { immediate: n, deep: l, flush: i, once: c } = o, u = gt({}, o), d = s && n || !s && i !== "post";
  let m;
  if (on) {
    if (i === "sync") {
      const p = gu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = gs, p.resume = gs, p.pause = gs, p;
    }
  }
  const v = Ct;
  u.call = (p, _, C) => ns(p, v, _, C);
  let g = !1;
  i === "post" ? u.scheduler = (p) => {
    Et(p, v && v.suspense);
  } : i !== "sync" && (g = !0, u.scheduler = (p, _) => {
    _ ? p() : Ja(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Vc(e, s, u);
  return on && (m ? m.push(w) : d && w()), w;
}
function hu(e, s, o) {
  const n = this.proxy, l = ut(e) ? e.includes(".") ? tr(n, e) : () => n[e] : e.bind(n, n);
  let i;
  Ge(s) ? i = s : (i = s.handler, o = s);
  const c = rn(this), u = er(l, i.bind(n), o);
  return c(), u;
}
function tr(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const yu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${Kt(s)}Modifiers`] || e[`${Vs(s)}Modifiers`];
function wu(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || nt;
  let l = o;
  const i = s.startsWith("update:"), c = i && yu(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => ut(v) ? v.trim() : v)), c.number && (l = o.map(jn)));
  let u, d = n[u = oa(s)] || // also try camelCase event handler (#2249)
  n[u = oa(Kt(s))];
  !d && i && (d = n[u = oa(Vs(s))]), d && ns(
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
    e.emitted[u] = !0, ns(
      m,
      e,
      6,
      l
    );
  }
}
const _u = /* @__PURE__ */ new WeakMap();
function sr(e, s, o = !1) {
  const n = o ? _u : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, u = !1;
  if (!Ge(e)) {
    const d = (m) => {
      const v = sr(m, s, !0);
      v && (u = !0, gt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (ot(e) && n.set(e, null), null) : (Be(i) ? i.forEach((d) => c[d] = null) : gt(c, i), ot(e) && n.set(e, c), c);
}
function Qn(e, s) {
  return !e || !Vn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), et(e, s[0].toLowerCase() + s.slice(1)) || et(e, Vs(s)) || et(e, s));
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
  } = e, b = Ln(e);
  let S, R;
  try {
    if (o.shapeFlag & 4) {
      const E = l || n, W = E;
      S = ps(
        m.call(
          W,
          E,
          v,
          g,
          p,
          w,
          _
        )
      ), R = u;
    } else {
      const E = s;
      S = ps(
        E.length > 1 ? E(
          g,
          { attrs: u, slots: c, emit: d }
        ) : E(
          g,
          null
        )
      ), R = s.props ? u : ku(u);
    }
  } catch (E) {
    Ho.length = 0, qn(E, e, 1), S = x($t);
  }
  let I = S;
  if (R && C !== !1) {
    const E = Object.keys(R), { shapeFlag: W } = I;
    E.length && W & 7 && (i && E.some(za) && (R = bu(
      R,
      i
    )), I = Fs(I, R, !1, !0));
  }
  return o.dirs && (I = Fs(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && oo(I, o.transition), S = I, Ln(b), S;
}
const ku = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Vn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, bu = (e, s) => {
  const o = {};
  for (const n in e)
    (!za(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function $u(e, s, o) {
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
        if (c[w] !== n[w] && !Qn(m, w))
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
    if (s[i] !== e[i] && !Qn(o, i))
      return !0;
  }
  return !1;
}
function Cu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const or = {}, nr = () => Object.create(or), ar = (e) => Object.getPrototypeOf(e) === or;
function xu(e, s, o, n = !1) {
  const l = {}, i = nr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lr(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : Lc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function Su(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, u = Xe(l), [d] = e.propsOptions;
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
        if (Qn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (d)
          if (et(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Kt(w);
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
    lr(e, s, l, i) && (m = !0);
    let v;
    for (const g in u)
      (!s || // for camelCase
      !et(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Vs(g)) === g || !et(s, v))) && (d ? o && // for camelCase
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
        (!s || !et(s, g)) && (delete i[g], m = !0);
  }
  m && xs(e.attrs, "set", "");
}
function lr(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (Fo(d))
        continue;
      const m = s[d];
      let v;
      l && et(l, v = Kt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Qn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, c = !0);
    }
  if (i) {
    const d = Xe(o), m = u || nt;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = Ta(
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
function Ta(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const u = et(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Ge(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = rn(l);
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
    ] && (n === "" || n === Vs(o)) && (n = !0));
  }
  return n;
}
const Iu = /* @__PURE__ */ new WeakMap();
function ir(e, s, o = !1) {
  const n = o ? Iu : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, u = [];
  let d = !1;
  if (!Ge(e)) {
    const v = (g) => {
      d = !0;
      const [w, p] = ir(g, s, !0);
      gt(c, w), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return ot(e) && n.set(e, po), po;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = Kt(i[v]);
      Il(g) && (c[g] = nt);
    }
  else if (i)
    for (const v in i) {
      const g = Kt(v);
      if (Il(g)) {
        const w = i[v], p = c[g] = Be(w) || Ge(w) ? { type: w } : gt({}, w), _ = p.type;
        let C = !1, b = !0;
        if (Be(_))
          for (let S = 0; S < _.length; ++S) {
            const R = _[S], I = Ge(R) && R.name;
            if (I === "Boolean") {
              C = !0;
              break;
            } else I === "String" && (b = !1);
          }
        else
          C = Ge(_) && _.name === "Boolean";
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
  return ot(e) && n.set(e, m), m;
}
function Il(e) {
  return e[0] !== "$" && !Fo(e);
}
const Za = (e) => e === "_" || e === "_ctx" || e === "$stable", el = (e) => Be(e) ? e.map(ps) : [ps(e)], Eu = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => el(s(...l)), o);
  return n._c = !1, n;
}, rr = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Za(l)) continue;
    const i = e[l];
    if (Ge(i))
      s[l] = Eu(l, i, n);
    else if (i != null) {
      const c = el(i);
      s[l] = () => c;
    }
  }
}, cr = (e, s) => {
  const o = el(s);
  e.slots.default = () => o;
}, ur = (e, s, o) => {
  for (const n in s)
    (o || !Za(n)) && (e[n] = s[n]);
}, Tu = (e, s, o) => {
  const n = e.slots = nr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (ur(n, s, o), o && fi(n, "_", l, !0)) : rr(s, n);
  } else s && cr(e, s);
}, Pu = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = nt;
  if (n.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? i = !1 : ur(l, s, o) : (i = !s.$stable, rr(s, l)), c = s;
  } else s && (cr(e, s), c = { default: 1 });
  if (i)
    for (const u in l)
      !Za(u) && c[u] == null && delete l[u];
}, Et = Ou;
function Ru(e) {
  return Mu(e);
}
function Mu(e, s) {
  const o = Hn();
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
  } = e, C = (O, T, z, H = null, ne = null, ie = null, Ce = void 0, ue = null, _e = !!T.dynamicChildren) => {
    if (O === T)
      return;
    O && !Zs(O, T) && (H = re(O), ze(O, ne, ie, !0), O = null), T.patchFlag === -2 && (_e = !1, T.dynamicChildren = null);
    const { type: he, ref: Re, shapeFlag: Ee } = T;
    switch (he) {
      case Xn:
        b(O, T, z, H);
        break;
      case $t:
        S(O, T, z, H);
        break;
      case da:
        O == null && R(T, z, H, Ce);
        break;
      case j:
        F(
          O,
          T,
          z,
          H,
          ne,
          ie,
          Ce,
          ue,
          _e
        );
        break;
      default:
        Ee & 1 ? W(
          O,
          T,
          z,
          H,
          ne,
          ie,
          Ce,
          ue,
          _e
        ) : Ee & 6 ? L(
          O,
          T,
          z,
          H,
          ne,
          ie,
          Ce,
          ue,
          _e
        ) : (Ee & 64 || Ee & 128) && he.process(
          O,
          T,
          z,
          H,
          ne,
          ie,
          Ce,
          ue,
          _e,
          Pe
        );
    }
    Re != null && ne ? Go(Re, O && O.ref, ie, T || O, !T) : Re == null && O && O.ref != null && Go(O.ref, null, ie, O, !0);
  }, b = (O, T, z, H) => {
    if (O == null)
      n(
        T.el = u(T.children),
        z,
        H
      );
    else {
      const ne = T.el = O.el;
      T.children !== O.children && m(ne, T.children);
    }
  }, S = (O, T, z, H) => {
    O == null ? n(
      T.el = d(T.children || ""),
      z,
      H
    ) : T.el = O.el;
  }, R = (O, T, z, H) => {
    [O.el, O.anchor] = _(
      O.children,
      T,
      z,
      H,
      O.el,
      O.anchor
    );
  }, I = ({ el: O, anchor: T }, z, H) => {
    let ne;
    for (; O && O !== T; )
      ne = w(O), n(O, z, H), O = ne;
    n(T, z, H);
  }, E = ({ el: O, anchor: T }) => {
    let z;
    for (; O && O !== T; )
      z = w(O), l(O), O = z;
    l(T);
  }, W = (O, T, z, H, ne, ie, Ce, ue, _e) => {
    if (T.type === "svg" ? Ce = "svg" : T.type === "math" && (Ce = "mathml"), O == null)
      K(
        T,
        z,
        H,
        ne,
        ie,
        Ce,
        ue,
        _e
      );
    else {
      const he = O.el && O.el._isVueCE ? O.el : null;
      try {
        he && he._beginPatch(), P(
          O,
          T,
          ne,
          ie,
          Ce,
          ue,
          _e
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, K = (O, T, z, H, ne, ie, Ce, ue) => {
    let _e, he;
    const { props: Re, shapeFlag: Ee, transition: te, dirs: q } = O;
    if (_e = O.el = c(
      O.type,
      ie,
      Re && Re.is,
      Re
    ), Ee & 8 ? v(_e, O.children) : Ee & 16 && M(
      O.children,
      _e,
      null,
      H,
      ne,
      ua(O, ie),
      Ce,
      ue
    ), q && qs(O, null, H, "created"), J(_e, O, O.scopeId, Ce, H), Re) {
      for (const $e in Re)
        $e !== "value" && !Fo($e) && i(_e, $e, null, Re[$e], ie, H);
      "value" in Re && i(_e, "value", null, Re.value, ie), (he = Re.onVnodeBeforeMount) && us(he, H, O);
    }
    q && qs(O, null, H, "beforeMount");
    const De = Du(ne, te);
    De && te.beforeEnter(_e), n(_e, T, z), ((he = Re && Re.onVnodeMounted) || De || q) && Et(() => {
      he && us(he, H, O), De && te.enter(_e), q && qs(O, null, H, "mounted");
    }, ne);
  }, J = (O, T, z, H, ne) => {
    if (z && p(O, z), H)
      for (let ie = 0; ie < H.length; ie++)
        p(O, H[ie]);
    if (ne) {
      let ie = ne.subTree;
      if (T === ie || fr(ie.type) && (ie.ssContent === T || ie.ssFallback === T)) {
        const Ce = ne.vnode;
        J(
          O,
          Ce,
          Ce.scopeId,
          Ce.slotScopeIds,
          ne.parent
        );
      }
    }
  }, M = (O, T, z, H, ne, ie, Ce, ue, _e = 0) => {
    for (let he = _e; he < O.length; he++) {
      const Re = O[he] = ue ? Us(O[he]) : ps(O[he]);
      C(
        null,
        Re,
        T,
        z,
        H,
        ne,
        ie,
        Ce,
        ue
      );
    }
  }, P = (O, T, z, H, ne, ie, Ce) => {
    const ue = T.el = O.el;
    let { patchFlag: _e, dynamicChildren: he, dirs: Re } = T;
    _e |= O.patchFlag & 16;
    const Ee = O.props || nt, te = T.props || nt;
    let q;
    if (z && Ys(z, !1), (q = te.onVnodeBeforeUpdate) && us(q, z, T, O), Re && qs(T, O, z, "beforeUpdate"), z && Ys(z, !0), (Ee.innerHTML && te.innerHTML == null || Ee.textContent && te.textContent == null) && v(ue, ""), he ? A(
      O.dynamicChildren,
      he,
      ue,
      z,
      H,
      ua(T, ne),
      ie
    ) : Ce || Z(
      O,
      T,
      ue,
      null,
      z,
      H,
      ua(T, ne),
      ie,
      !1
    ), _e > 0) {
      if (_e & 16)
        ee(ue, Ee, te, z, ne);
      else if (_e & 2 && Ee.class !== te.class && i(ue, "class", null, te.class, ne), _e & 4 && i(ue, "style", Ee.style, te.style, ne), _e & 8) {
        const De = T.dynamicProps;
        for (let $e = 0; $e < De.length; $e++) {
          const ge = De[$e], G = Ee[ge], B = te[ge];
          (B !== G || ge === "value") && i(ue, ge, G, B, ne, z);
        }
      }
      _e & 1 && O.children !== T.children && v(ue, T.children);
    } else !Ce && he == null && ee(ue, Ee, te, z, ne);
    ((q = te.onVnodeUpdated) || Re) && Et(() => {
      q && us(q, z, T, O), Re && qs(T, O, z, "updated");
    }, H);
  }, A = (O, T, z, H, ne, ie, Ce) => {
    for (let ue = 0; ue < T.length; ue++) {
      const _e = O[ue], he = T[ue], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        _e.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (_e.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zs(_e, he) || // - In the case of a component, it could contain anything.
        _e.shapeFlag & 198) ? g(_e.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      C(
        _e,
        he,
        Re,
        null,
        H,
        ne,
        ie,
        Ce,
        !0
      );
    }
  }, ee = (O, T, z, H, ne) => {
    if (T !== z) {
      if (T !== nt)
        for (const ie in T)
          !Fo(ie) && !(ie in z) && i(
            O,
            ie,
            T[ie],
            null,
            ne,
            H
          );
      for (const ie in z) {
        if (Fo(ie)) continue;
        const Ce = z[ie], ue = T[ie];
        Ce !== ue && ie !== "value" && i(O, ie, ue, Ce, ne, H);
      }
      "value" in z && i(O, "value", T.value, z.value, ne);
    }
  }, F = (O, T, z, H, ne, ie, Ce, ue, _e) => {
    const he = T.el = O ? O.el : u(""), Re = T.anchor = O ? O.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: te, slotScopeIds: q } = T;
    q && (ue = ue ? ue.concat(q) : q), O == null ? (n(he, z, H), n(Re, z, H), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      z,
      Re,
      ne,
      ie,
      Ce,
      ue,
      _e
    )) : Ee > 0 && Ee & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (A(
      O.dynamicChildren,
      te,
      z,
      ne,
      ie,
      Ce,
      ue
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || ne && T === ne.subTree) && tl(
      O,
      T,
      !0
      /* shallow */
    )) : Z(
      O,
      T,
      z,
      Re,
      ne,
      ie,
      Ce,
      ue,
      _e
    );
  }, L = (O, T, z, H, ne, ie, Ce, ue, _e) => {
    T.slotScopeIds = ue, O == null ? T.shapeFlag & 512 ? ne.ctx.activate(
      T,
      z,
      H,
      Ce,
      _e
    ) : V(
      T,
      z,
      H,
      ne,
      ie,
      Ce,
      _e
    ) : X(O, T, _e);
  }, V = (O, T, z, H, ne, ie, Ce) => {
    const ue = O.component = Vu(
      O,
      H,
      ne
    );
    if (Yn(O) && (ue.ctx.renderer = Pe), Wu(ue, !1, Ce), ue.asyncDep) {
      if (ne && ne.registerDep(ue, N, Ce), !O.el) {
        const _e = ue.subTree = x($t);
        S(null, _e, T, z), O.placeholder = _e.el;
      }
    } else
      N(
        ue,
        O,
        T,
        z,
        ne,
        ie,
        Ce
      );
  }, X = (O, T, z) => {
    const H = T.component = O.component;
    if ($u(O, T, z))
      if (H.asyncDep && !H.asyncResolved) {
        ae(H, T, z);
        return;
      } else
        H.next = T, H.update();
    else
      T.el = O.el, H.vnode = T;
  }, N = (O, T, z, H, ne, ie, Ce) => {
    const ue = () => {
      if (O.isMounted) {
        let { next: Ee, bu: te, u: q, parent: De, vnode: $e } = O;
        {
          const Ve = dr(O);
          if (Ve) {
            Ee && (Ee.el = $e.el, ae(O, Ee, Ce)), Ve.asyncDep.then(() => {
              O.isUnmounted || ue();
            });
            return;
          }
        }
        let ge = Ee, G;
        Ys(O, !1), Ee ? (Ee.el = $e.el, ae(O, Ee, Ce)) : Ee = $e, te && Cn(te), (G = Ee.props && Ee.props.onVnodeBeforeUpdate) && us(G, De, Ee, $e), Ys(O, !0);
        const B = xl(O), fe = O.subTree;
        O.subTree = B, C(
          fe,
          B,
          // parent may have changed if it's in a teleport
          g(fe.el),
          // anchor may have changed if it's in a fragment
          re(fe),
          O,
          ne,
          ie
        ), Ee.el = B.el, ge === null && Cu(O, B.el), q && Et(q, ne), (G = Ee.props && Ee.props.onVnodeUpdated) && Et(
          () => us(G, De, Ee, $e),
          ne
        );
      } else {
        let Ee;
        const { el: te, props: q } = T, { bm: De, m: $e, parent: ge, root: G, type: B } = O, fe = yo(T);
        Ys(O, !1), De && Cn(De), !fe && (Ee = q && q.onVnodeBeforeMount) && us(Ee, ge, T), Ys(O, !0);
        {
          G.ce && // @ts-expect-error _def is private
          G.ce._def.shadowRoot !== !1 && G.ce._injectChildStyle(B);
          const Ve = O.subTree = xl(O);
          C(
            null,
            Ve,
            z,
            H,
            O,
            ne,
            ie
          ), T.el = Ve.el;
        }
        if ($e && Et($e, ne), !fe && (Ee = q && q.onVnodeMounted)) {
          const Ve = T;
          Et(
            () => us(Ee, ge, Ve),
            ne
          );
        }
        (T.shapeFlag & 256 || ge && yo(ge.vnode) && ge.vnode.shapeFlag & 256) && O.a && Et(O.a, ne), O.isMounted = !0, T = z = H = null;
      }
    };
    O.scope.on();
    const _e = O.effect = new gi(ue);
    O.scope.off();
    const he = O.update = _e.run.bind(_e), Re = O.job = _e.runIfDirty.bind(_e);
    Re.i = O, Re.id = O.uid, _e.scheduler = () => Ja(Re), Ys(O, !0), he();
  }, ae = (O, T, z) => {
    T.component = O;
    const H = O.vnode.props;
    O.vnode = T, O.next = null, Su(O, T.props, H, z), Pu(O, T.children, z), Es(), vl(O), Ts();
  }, Z = (O, T, z, H, ne, ie, Ce, ue, _e = !1) => {
    const he = O && O.children, Re = O ? O.shapeFlag : 0, Ee = T.children, { patchFlag: te, shapeFlag: q } = T;
    if (te > 0) {
      if (te & 128) {
        be(
          he,
          Ee,
          z,
          H,
          ne,
          ie,
          Ce,
          ue,
          _e
        );
        return;
      } else if (te & 256) {
        we(
          he,
          Ee,
          z,
          H,
          ne,
          ie,
          Ce,
          ue,
          _e
        );
        return;
      }
    }
    q & 8 ? (Re & 16 && oe(he, ne, ie), Ee !== he && v(z, Ee)) : Re & 16 ? q & 16 ? be(
      he,
      Ee,
      z,
      H,
      ne,
      ie,
      Ce,
      ue,
      _e
    ) : oe(he, ne, ie, !0) : (Re & 8 && v(z, ""), q & 16 && M(
      Ee,
      z,
      H,
      ne,
      ie,
      Ce,
      ue,
      _e
    ));
  }, we = (O, T, z, H, ne, ie, Ce, ue, _e) => {
    O = O || po, T = T || po;
    const he = O.length, Re = T.length, Ee = Math.min(he, Re);
    let te;
    for (te = 0; te < Ee; te++) {
      const q = T[te] = _e ? Us(T[te]) : ps(T[te]);
      C(
        O[te],
        q,
        z,
        null,
        ne,
        ie,
        Ce,
        ue,
        _e
      );
    }
    he > Re ? oe(
      O,
      ne,
      ie,
      !0,
      !1,
      Ee
    ) : M(
      T,
      z,
      H,
      ne,
      ie,
      Ce,
      ue,
      _e,
      Ee
    );
  }, be = (O, T, z, H, ne, ie, Ce, ue, _e) => {
    let he = 0;
    const Re = T.length;
    let Ee = O.length - 1, te = Re - 1;
    for (; he <= Ee && he <= te; ) {
      const q = O[he], De = T[he] = _e ? Us(T[he]) : ps(T[he]);
      if (Zs(q, De))
        C(
          q,
          De,
          z,
          null,
          ne,
          ie,
          Ce,
          ue,
          _e
        );
      else
        break;
      he++;
    }
    for (; he <= Ee && he <= te; ) {
      const q = O[Ee], De = T[te] = _e ? Us(T[te]) : ps(T[te]);
      if (Zs(q, De))
        C(
          q,
          De,
          z,
          null,
          ne,
          ie,
          Ce,
          ue,
          _e
        );
      else
        break;
      Ee--, te--;
    }
    if (he > Ee) {
      if (he <= te) {
        const q = te + 1, De = q < Re ? T[q].el : H;
        for (; he <= te; )
          C(
            null,
            T[he] = _e ? Us(T[he]) : ps(T[he]),
            z,
            De,
            ne,
            ie,
            Ce,
            ue,
            _e
          ), he++;
      }
    } else if (he > te)
      for (; he <= Ee; )
        ze(O[he], ne, ie, !0), he++;
    else {
      const q = he, De = he, $e = /* @__PURE__ */ new Map();
      for (he = De; he <= te; he++) {
        const st = T[he] = _e ? Us(T[he]) : ps(T[he]);
        st.key != null && $e.set(st.key, he);
      }
      let ge, G = 0;
      const B = te - De + 1;
      let fe = !1, Ve = 0;
      const Ze = new Array(B);
      for (he = 0; he < B; he++) Ze[he] = 0;
      for (he = q; he <= Ee; he++) {
        const st = O[he];
        if (G >= B) {
          ze(st, ne, ie, !0);
          continue;
        }
        let pt;
        if (st.key != null)
          pt = $e.get(st.key);
        else
          for (ge = De; ge <= te; ge++)
            if (Ze[ge - De] === 0 && Zs(st, T[ge])) {
              pt = ge;
              break;
            }
        pt === void 0 ? ze(st, ne, ie, !0) : (Ze[pt - De] = he + 1, pt >= Ve ? Ve = pt : fe = !0, C(
          st,
          T[pt],
          z,
          null,
          ne,
          ie,
          Ce,
          ue,
          _e
        ), G++);
      }
      const St = fe ? Lu(Ze) : po;
      for (ge = St.length - 1, he = B - 1; he >= 0; he--) {
        const st = De + he, pt = T[st], qt = T[st + 1], yt = st + 1 < Re ? (
          // #13559, fallback to el placeholder for unresolved async component
          qt.el || qt.placeholder
        ) : H;
        Ze[he] === 0 ? C(
          null,
          pt,
          z,
          yt,
          ne,
          ie,
          Ce,
          ue,
          _e
        ) : fe && (ge < 0 || he !== St[ge] ? Me(pt, z, yt, 2) : ge--);
      }
    }
  }, Me = (O, T, z, H, ne = null) => {
    const { el: ie, type: Ce, transition: ue, children: _e, shapeFlag: he } = O;
    if (he & 6) {
      Me(O.component.subTree, T, z, H);
      return;
    }
    if (he & 128) {
      O.suspense.move(T, z, H);
      return;
    }
    if (he & 64) {
      Ce.move(O, T, z, Pe);
      return;
    }
    if (Ce === j) {
      n(ie, T, z);
      for (let Ee = 0; Ee < _e.length; Ee++)
        Me(_e[Ee], T, z, H);
      n(O.anchor, T, z);
      return;
    }
    if (Ce === da) {
      I(O, T, z);
      return;
    }
    if (H !== 2 && he & 1 && ue)
      if (H === 0)
        ue.beforeEnter(ie), n(ie, T, z), Et(() => ue.enter(ie), ne);
      else {
        const { leave: Ee, delayLeave: te, afterLeave: q } = ue, De = () => {
          O.ctx.isUnmounted ? l(ie) : n(ie, T, z);
        }, $e = () => {
          ie._isLeaving && ie[Cs](
            !0
            /* cancelled */
          ), Ee(ie, () => {
            De(), q && q();
          });
        };
        te ? te(ie, De, $e) : $e();
      }
    else
      n(ie, T, z);
  }, ze = (O, T, z, H = !1, ne = !1) => {
    const {
      type: ie,
      props: Ce,
      ref: ue,
      children: _e,
      dynamicChildren: he,
      shapeFlag: Re,
      patchFlag: Ee,
      dirs: te,
      cacheIndex: q
    } = O;
    if (Ee === -2 && (ne = !1), ue != null && (Es(), Go(ue, null, z, O, !0), Ts()), q != null && (T.renderCache[q] = void 0), Re & 256) {
      T.ctx.deactivate(O);
      return;
    }
    const De = Re & 1 && te, $e = !yo(O);
    let ge;
    if ($e && (ge = Ce && Ce.onVnodeBeforeUnmount) && us(ge, T, O), Re & 6)
      ve(O.component, z, H);
    else {
      if (Re & 128) {
        O.suspense.unmount(z, H);
        return;
      }
      De && qs(O, null, T, "beforeUnmount"), Re & 64 ? O.type.remove(
        O,
        T,
        z,
        Pe,
        H
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ie !== j || Ee > 0 && Ee & 64) ? oe(
        he,
        T,
        z,
        !1,
        !0
      ) : (ie === j && Ee & 384 || !ne && Re & 16) && oe(_e, T, z), H && Ue(O);
    }
    ($e && (ge = Ce && Ce.onVnodeUnmounted) || De) && Et(() => {
      ge && us(ge, T, O), De && qs(O, null, T, "unmounted");
    }, z);
  }, Ue = (O) => {
    const { type: T, el: z, anchor: H, transition: ne } = O;
    if (T === j) {
      Ye(z, H);
      return;
    }
    if (T === da) {
      E(O);
      return;
    }
    const ie = () => {
      l(z), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (O.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: Ce, delayLeave: ue } = ne, _e = () => Ce(z, ie);
      ue ? ue(O.el, ie, _e) : _e();
    } else
      ie();
  }, Ye = (O, T) => {
    let z;
    for (; O !== T; )
      z = w(O), l(O), O = z;
    l(T);
  }, ve = (O, T, z) => {
    const { bum: H, scope: ne, job: ie, subTree: Ce, um: ue, m: _e, a: he } = O;
    El(_e), El(he), H && Cn(H), ne.stop(), ie && (ie.flags |= 8, ze(Ce, O, T, z)), ue && Et(ue, T), Et(() => {
      O.isUnmounted = !0;
    }, T);
  }, oe = (O, T, z, H = !1, ne = !1, ie = 0) => {
    for (let Ce = ie; Ce < O.length; Ce++)
      ze(O[Ce], T, z, H, ne);
  }, re = (O) => {
    if (O.shapeFlag & 6)
      return re(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const T = w(O.anchor || O.el), z = T && T[Ai];
    return z ? w(z) : T;
  };
  let ce = !1;
  const Se = (O, T, z) => {
    O == null ? T._vnode && ze(T._vnode, null, null, !0) : C(
      T._vnode || null,
      O,
      T,
      null,
      null,
      null,
      z
    ), T._vnode = O, ce || (ce = !0, vl(), Di(), ce = !1);
  }, Pe = {
    p: C,
    um: ze,
    m: Me,
    r: Ue,
    mt: V,
    mc: M,
    pc: Z,
    pbc: A,
    n: re,
    o: e
  };
  return {
    render: Se,
    hydrate: void 0,
    createApp: mu(Se)
  };
}
function ua({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Ys({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Du(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function tl(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Be(n) && Be(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Us(l[i]), u.el = c.el), !o && u.patchFlag !== -2 && tl(c, u)), u.type === Xn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === $t && !u.el && (u.el = c.el);
    }
}
function Lu(e) {
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
function dr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : dr(s);
}
function El(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const fr = (e) => e.__isSuspense;
function Ou(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : jc(e);
}
const j = Symbol.for("v-fgt"), Xn = Symbol.for("v-txt"), $t = Symbol.for("v-cmt"), da = Symbol.for("v-stc"), Ho = [];
let Ut = null;
function a(e = !1) {
  Ho.push(Ut = e ? null : []);
}
function Au() {
  Ho.pop(), Ut = Ho[Ho.length - 1] || null;
}
let tn = 1;
function Nn(e, s = !1) {
  tn += e, e < 0 && Ut && s && (Ut.hasOnce = !0);
}
function mr(e) {
  return e.dynamicChildren = tn > 0 ? Ut || po : null, Au(), tn > 0 && Ut && Ut.push(e), e;
}
function r(e, s, o, n, l, i) {
  return mr(
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
  return mr(
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
function sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zs(e, s) {
  return e.type === s.type && e.key === s.key;
}
const vr = ({ key: e }) => e ?? null, In = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ut(e) || xt(e) || Ge(e) ? { i: _t, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === j ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && vr(s),
    ref: s && In(s),
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: _t
  };
  return u ? (sl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= ut(o) ? 8 : 16), tn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Ut && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Ut.push(d), d;
}
const x = Nu;
function Nu(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Yi) && (e = $t), sn(e)) {
    const u = Fs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && sl(u, o), tn > 0 && !i && Ut && (u.shapeFlag & 6 ? Ut[Ut.indexOf(e)] = u : Ut.push(u)), u.patchFlag = -2, u;
  }
  if (qu(e) && (e = e.__vccOpts), s) {
    s = Uu(s);
    let { class: u, style: d } = s;
    u && !ut(u) && (s.class = Ie(u)), ot(d) && (Ya(d) && !Be(d) && (d = gt({}, d)), s.style = Ft(d));
  }
  const c = ut(e) ? 1 : fr(e) ? 128 : Ni(e) ? 64 : ot(e) ? 4 : Ge(e) ? 2 : 0;
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
function Uu(e) {
  return e ? Ya(e) || ar(e) ? gt({}, e) : e : null;
}
function Fs(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: u, transition: d } = e, m = s ? zu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && vr(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat(In(s)) : [i, In(s)] : In(s)
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
    ssContent: e.ssContent && Fs(e.ssContent),
    ssFallback: e.ssFallback && Fs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && oo(
    v,
    d.clone(v)
  ), v;
}
function $(e = " ", s = 0) {
  return x(Xn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), D($t, null, e)) : x($t, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? x($t) : Be(e) ? x(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : sn(e) ? Us(e) : x(Xn, null, String(e));
}
function Us(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fs(e);
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
      !l && !ar(s) ? s._ctx = _t : l === 3 && _t && (_t.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ge(s) ? (s = { default: s, _ctx: _t }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function zu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ie([s.class, n.class]));
      else if (l === "style")
        s.style = Ft([s.style, n.style]);
      else if (Vn(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Be(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function us(e, s, o, n = null) {
  ns(e, s, 7, [
    o,
    n
  ]);
}
const Fu = Zi();
let Bu = 0;
function Vu(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Fu, i = {
    uid: Bu++,
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
    scope: new vc(
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
    propsOptions: ir(n, l),
    emitsOptions: sr(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: nt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = wu.bind(null, i), e.ce && e.ce(i), i;
}
let Ct = null;
const ol = () => Ct || _t;
let Un, Pa;
{
  const e = Hn(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  Un = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Ct = o
  ), Pa = s(
    "__VUE_SSR_SETTERS__",
    (o) => on = o
  );
}
const rn = (e) => {
  const s = Ct;
  return Un(e), e.scope.on(), () => {
    e.scope.off(), Un(s);
  };
}, Tl = () => {
  Ct && Ct.scope.off(), Un(null);
};
function pr(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Wu(e, s = !1, o = !1) {
  s && Pa(s);
  const { props: n, children: l } = e.vnode, i = pr(e);
  xu(e, n, i, s), Tu(e, l, o || s);
  const c = i ? Gu(e, s) : void 0;
  return s && Pa(!1), c;
}
function Gu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, lu);
  const { setup: n } = o;
  if (n) {
    Es();
    const l = e.setupContext = n.length > 1 ? Hu(e) : null, i = rn(e), c = ln(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = ci(c);
    if (Ts(), i(), (u || e.sp) && !yo(e) && ji(e), u) {
      if (c.then(Tl, Tl), s)
        return c.then((d) => {
          Pl(e, d);
        }).catch((d) => {
          qn(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Pl(e, c);
  } else
    gr(e);
}
function Pl(e, s, o) {
  Ge(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : ot(s) && (e.setupState = Pi(s)), gr(e);
}
function gr(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || gs);
  {
    const l = rn(e);
    Es();
    try {
      iu(e);
    } finally {
      Ts(), l();
    }
  }
}
const ju = {
  get(e, s) {
    return bt(e, "get", ""), e[s];
  }
};
function Hu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, ju),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function Zn(e) {
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
function Ku(e, s = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function qu(e) {
  return Ge(e) && "__vccOpts" in e;
}
const U = (e, s) => Fc(e, s, on);
function cn(e, s, o) {
  try {
    Nn(-1);
    const n = arguments.length;
    return n === 2 ? ot(s) && !Be(s) ? sn(s) ? x(e, null, [s]) : x(e, s) : x(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && sn(o) && (o = [o]), x(e, s, o));
  } finally {
    Nn(1);
  }
}
const Yu = "3.5.25";
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
const hr = Ra ? (e) => Ra.createHTML(e) : (e) => e, Ju = "http://www.w3.org/2000/svg", Qu = "http://www.w3.org/1998/Math/MathML", $s = typeof document < "u" ? document : null, Ml = $s && /* @__PURE__ */ $s.createElement("template"), Xu = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? $s.createElementNS(Ju, e) : s === "mathml" ? $s.createElementNS(Qu, e) : o ? $s.createElement(e, { is: o }) : $s.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
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
  insertStaticContent(e, s, o, n, l, i) {
    const c = o ? o.previousSibling : s.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      Ml.innerHTML = hr(
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
}, Ls = "transition", Mo = "animation", bo = Symbol("_vtc"), yr = {
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
}, wr = /* @__PURE__ */ gt(
  {},
  Bi,
  yr
), Zu = (e) => (e.displayName = "Transition", e.props = wr, e), ed = /* @__PURE__ */ Zu(
  (e, { slots: s }) => cn(qc, _r(e), s)
), Js = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Dl = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function _r(e) {
  const s = {};
  for (const F in e)
    F in yr || (s[F] = e[F]);
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
  } = e, _ = td(l), C = _ && _[0], b = _ && _[1], {
    onBeforeEnter: S,
    onEnter: R,
    onEnterCancelled: I,
    onLeave: E,
    onLeaveCancelled: W,
    onBeforeAppear: K = S,
    onAppear: J = R,
    onAppearCancelled: M = I
  } = s, P = (F, L, V, X) => {
    F._enterCancelled = X, Os(F, L ? v : u), Os(F, L ? m : c), V && V();
  }, A = (F, L) => {
    F._isLeaving = !1, Os(F, g), Os(F, p), Os(F, w), L && L();
  }, ee = (F) => (L, V) => {
    const X = F ? J : R, N = () => P(L, F, V);
    Js(X, [L, N]), Ll(() => {
      Os(L, F ? d : i), fs(L, F ? v : u), Dl(X) || Ol(L, n, C, N);
    });
  };
  return gt(s, {
    onBeforeEnter(F) {
      Js(S, [F]), fs(F, i), fs(F, c);
    },
    onBeforeAppear(F) {
      Js(K, [F]), fs(F, d), fs(F, m);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(F, L) {
      F._isLeaving = !0;
      const V = () => A(F, L);
      fs(F, g), F._enterCancelled ? (fs(F, w), Ma(F)) : (Ma(F), fs(F, w)), Ll(() => {
        F._isLeaving && (Os(F, g), fs(F, p), Dl(E) || Ol(F, n, b, V));
      }), Js(E, [F, V]);
    },
    onEnterCancelled(F) {
      P(F, !1, void 0, !0), Js(I, [F]);
    },
    onAppearCancelled(F) {
      P(F, !0, void 0, !0), Js(M, [F]);
    },
    onLeaveCancelled(F) {
      A(F), Js(W, [F]);
    }
  });
}
function td(e) {
  if (e == null)
    return null;
  if (ot(e))
    return [fa(e.enter), fa(e.leave)];
  {
    const s = fa(e);
    return [s, s];
  }
}
function fa(e) {
  return lc(e);
}
function fs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[bo] || (e[bo] = /* @__PURE__ */ new Set())).add(s);
}
function Os(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[bo];
  o && (o.delete(s), o.size || (e[bo] = void 0));
}
function Ll(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let sd = 0;
function Ol(e, s, o, n) {
  const l = e._endId = ++sd, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: u, propCount: d } = kr(e, s);
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
function kr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ls}Delay`), i = n(`${Ls}Duration`), c = Al(l, i), u = n(`${Mo}Delay`), d = n(`${Mo}Duration`), m = Al(u, d);
  let v = null, g = 0, w = 0;
  s === Ls ? c > 0 && (v = Ls, g = c, w = i.length) : s === Mo ? m > 0 && (v = Mo, g = m, w = d.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Ls : Mo : null, w = v ? v === Ls ? i.length : d.length : 0);
  const p = v === Ls && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ls}Property`).toString()
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
  return Math.max(...s.map((o, n) => Nl(o) + Nl(e[n])));
}
function Nl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ma(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function od(e, s, o) {
  const n = e[bo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ul = Symbol("_vod"), nd = Symbol("_vsh"), ad = Symbol(""), ld = /(?:^|;)\s*display\s*:/;
function id(e, s, o) {
  const n = e.style, l = ut(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (ut(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && En(n, u, "");
        }
      else
        for (const c in s)
          o[c] == null && En(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), En(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[ad];
      c && (o += ";" + c), n.cssText = o, i = ld.test(o);
    }
  } else s && e.removeAttribute("style");
  Ul in e && (e[Ul] = i ? n.display : "", e[nd] && (n.display = "none"));
}
const zl = /\s*!important$/;
function En(e, s, o) {
  if (Be(o))
    o.forEach((n) => En(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = rd(e, s);
    zl.test(o) ? e.setProperty(
      Vs(n),
      o.replace(zl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Fl = ["Webkit", "Moz", "ms"], ma = {};
function rd(e, s) {
  const o = ma[s];
  if (o)
    return o;
  let n = Kt(s);
  if (n !== "filter" && n in e)
    return ma[s] = n;
  n = Gn(n);
  for (let l = 0; l < Fl.length; l++) {
    const i = Fl[l] + n;
    if (i in e)
      return ma[s] = i;
  }
  return s;
}
const Bl = "http://www.w3.org/1999/xlink";
function Vl(e, s, o, n, l, i = fc(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Bl, s.slice(6, s.length)) : e.setAttributeNS(Bl, s, o) : o == null || i && !mi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : ss(o) ? String(o) : o
  );
}
function Wl(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? hr(o) : o);
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
    u === "boolean" ? o = mi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Is(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function cd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const Gl = Symbol("_vei");
function ud(e, s, o, n, l = null) {
  const i = e[Gl] || (e[Gl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = dd(s);
    if (n) {
      const m = i[s] = vd(
        n,
        l
      );
      Is(e, u, m, d);
    } else c && (cd(e, u, c, d), i[s] = void 0);
  }
}
const jl = /(?:Once|Passive|Capture)$/;
function dd(e) {
  let s;
  if (jl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(jl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Vs(e.slice(2)), s];
}
let va = 0;
const fd = /* @__PURE__ */ Promise.resolve(), md = () => va || (fd.then(() => va = 0), va = Date.now());
function vd(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ns(
      pd(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = md(), o;
}
function pd(e, s) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, gd = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? od(e, n, c) : s === "style" ? id(e, o, n) : Vn(s) ? za(s) || ud(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : hd(e, s, n, c)) ? (Wl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Vl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !ut(n)) ? Wl(e, Kt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Vl(e, s, n, c));
};
function hd(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Hl(s) && Ge(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Hl(s) && ut(o) ? !1 : s in e;
}
const br = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), zn = Symbol("_moveCb"), Kl = Symbol("_enterCb"), yd = (e) => (delete e.props.mode, e), wd = /* @__PURE__ */ yd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ gt({}, wr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = ol(), n = Fi();
    let l, i;
    return Ki(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Cd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(kd), l.forEach(bd);
      const u = l.filter($d);
      Ma(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        fs(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[zn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[zn] = null, Os(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), u = _r(c);
      let d = c.tag || j;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), oo(
            v,
            en(
              v,
              u,
              n,
              o
            )
          ), br.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Qa(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && oo(
          v,
          en(v, u, n, o)
        );
      }
      return x(d, null, i);
    };
  }
}), _d = wd;
function kd(e) {
  const s = e.el;
  s[zn] && s[zn](), s[Kl] && s[Kl]();
}
function bd(e) {
  $r.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function $d(e) {
  const s = br.get(e), o = $r.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function Cd(e, s, o) {
  const n = e.cloneNode(), l = e[bo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = kr(n);
  return i.removeChild(n), c;
}
const Bs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => Cn(s, o) : s;
};
function xd(e) {
  e.target.composing = !0;
}
function ql(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const jt = Symbol("_assign");
function Yl(e, s, o) {
  return s && (e = e.trim()), o && (e = jn(e)), e;
}
const zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[jt] = Bs(l);
    const i = n || l.props && l.props.type === "number";
    Is(e, s ? "change" : "input", (c) => {
      c.target.composing || e[jt](Yl(e.value, o, i));
    }), (o || i) && Is(e, "change", () => {
      e.value = Yl(e.value, o, i);
    }), s || (Is(e, "compositionstart", xd), Is(e, "compositionend", ql), Is(e, "change", ql));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[jt] = Bs(c), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? jn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, nn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[jt] = Bs(o), Is(e, "change", () => {
      const n = e._modelValue, l = $o(e), i = e.checked, c = e[jt];
      if (Be(n)) {
        const u = Va(n, l), d = u !== -1;
        if (i && !d)
          c(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), c(m);
        }
      } else if (Co(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), c(u);
      } else
        c(Cr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Jl,
  beforeUpdate(e, s, o) {
    e[jt] = Bs(o), Jl(e, s, o);
  }
};
function Jl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Be(s))
    l = Va(s, n.props.value) > -1;
  else if (Co(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = so(s, Cr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const es = {
  created(e, { value: s }, o) {
    e.checked = so(s, o.props.value), e[jt] = Bs(o), Is(e, "change", () => {
      e[jt]($o(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[jt] = Bs(n), s !== o && (e.checked = so(s, n.props.value));
  }
}, hs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = Co(s);
    Is(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? jn($o(c)) : $o(c)
      );
      e[jt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, ht(() => {
        e._assigning = !1;
      });
    }), e[jt] = Bs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Ql(e, s);
  },
  beforeUpdate(e, s, o) {
    e[jt] = Bs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Ql(e, s);
  }
};
function Ql(e, s) {
  const o = e.multiple, n = Be(s);
  if (!(o && !n && !Co(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], u = $o(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((m) => String(m) === String(u)) : c.selected = Va(s, u) > -1;
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
function Cr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const ea = {
  created(e, s, o) {
    wn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    wn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    wn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    wn(e, s, o, n, "updated");
  }
};
function Sd(e, s) {
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
          return es;
        default:
          return zt;
      }
  }
}
function wn(e, s, o, n, l) {
  const c = Sd(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const Id = ["ctrl", "shift", "alt", "meta"], Ed = {
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
  exact: (e, s) => Id.some((o) => e[`${o}Key`] && !s.includes(o))
}, rt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const u = Ed[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...i);
  }));
}, Td = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ht = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = Vs(l.key);
    if (s.some(
      (c) => c === i || Td[c] === i
    ))
      return e(l);
  }));
}, Pd = /* @__PURE__ */ gt({ patchProp: gd }, Xu);
let Xl;
function Rd() {
  return Xl || (Xl = Ru(Pd));
}
const ta = ((...e) => {
  const s = Rd().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = Dd(n);
    if (!l) return;
    const i = s._component;
    !Ge(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Md(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function Md(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Dd(e) {
  return ut(e) ? document.querySelector(e) : e;
}
const Ld = { class: "panel-layout" }, Od = {
  key: 0,
  class: "panel-layout-header"
}, Ad = {
  key: 1,
  class: "panel-layout-search"
}, Nd = { class: "panel-layout-content" }, Ud = {
  key: 2,
  class: "panel-layout-footer"
}, zd = /* @__PURE__ */ me({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", Ld, [
      s.$slots.header ? (a(), r("div", Od, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", Ad, [
        Ke(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Nd, [
        Ke(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Ud, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Dt = /* @__PURE__ */ pe(zd, [["__scopeId", "data-v-21565df9"]]), Fd = {
  key: 0,
  class: "panel-title-prefix"
}, Bd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Vd = /* @__PURE__ */ me({
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
        e.showPrefix ? (a(), r("span", Fd, f(e.prefix), 1)) : (a(), r("span", Bd)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wd = /* @__PURE__ */ pe(Vd, [["__scopeId", "data-v-c3875efc"]]), Gd = ["title"], jd = ["width", "height"], Hd = /* @__PURE__ */ me({
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
      ])], 8, jd))
    ], 8, Gd));
  }
}), xr = /* @__PURE__ */ pe(Hd, [["__scopeId", "data-v-6fc7f16d"]]), Kd = { class: "header-left" }, qd = {
  key: 0,
  class: "header-actions"
}, Yd = /* @__PURE__ */ me({
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
      t("div", Kd, [
        x(Wd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), D(xr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", qd, [
        Ke(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ pe(Yd, [["__scopeId", "data-v-55a62cd6"]]), Jd = {
  key: 0,
  class: "section-title-count"
}, Qd = {
  key: 1,
  class: "section-title-icon"
}, Xd = /* @__PURE__ */ me({
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
        e.count !== void 0 ? (a(), r("span", Jd, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Qd, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Nt = /* @__PURE__ */ pe(Xd, [["__scopeId", "data-v-559361eb"]]), Zd = { class: "status-grid" }, ef = { class: "status-grid__columns" }, tf = { class: "status-grid__column" }, sf = { class: "status-grid__title" }, of = { class: "status-grid__column status-grid__column--right" }, nf = { class: "status-grid__title" }, af = {
  key: 0,
  class: "status-grid__footer"
}, lf = /* @__PURE__ */ me({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", Zd, [
      t("div", ef, [
        t("div", tf, [
          t("h4", sf, f(e.leftTitle), 1),
          Ke(s.$slots, "left", {}, void 0)
        ]),
        t("div", of, [
          t("h4", nf, f(e.rightTitle), 1),
          Ke(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", af, [
        Ke(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), rf = /* @__PURE__ */ pe(lf, [["__scopeId", "data-v-73b7ba3f"]]), cf = {
  key: 0,
  class: "status-item__icon"
}, uf = {
  key: 1,
  class: "status-item__count"
}, df = { class: "status-item__label" }, ff = /* @__PURE__ */ me({
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
    return (n, l) => (a(), r("div", {
      class: Ie(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", cf, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", uf, f(e.count), 1)) : y("", !0),
      t("span", df, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ pe(ff, [["__scopeId", "data-v-6f929183"]]), mf = { class: "issue-card__header" }, vf = { class: "issue-card__icon" }, pf = { class: "issue-card__title" }, gf = {
  key: 0,
  class: "issue-card__content"
}, hf = {
  key: 0,
  class: "issue-card__description"
}, yf = {
  key: 1,
  class: "issue-card__items"
}, wf = {
  key: 2,
  class: "issue-card__actions"
}, _f = /* @__PURE__ */ me({
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
    return (n, l) => (a(), r("div", {
      class: Ie(["issue-card", o.value])
    }, [
      t("div", mf, [
        t("span", vf, f(e.icon), 1),
        t("h4", pf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", gf, [
        e.description ? (a(), r("p", hf, f(e.description), 1)) : y("", !0),
        Ke(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", yf, [
        (a(!0), r(j, null, ye(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", wf, [
        Ke(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ pe(_f, [["__scopeId", "data-v-df6aa348"]]), kf = ["type", "disabled"], bf = {
  key: 0,
  class: "spinner"
}, $f = /* @__PURE__ */ me({
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
      e.loading ? (a(), r("span", bf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, kf));
  }
}), de = /* @__PURE__ */ pe($f, [["__scopeId", "data-v-772abe47"]]), Cf = { class: "empty-state" }, xf = {
  key: 0,
  class: "empty-icon"
}, Sf = { class: "empty-message" }, If = /* @__PURE__ */ me({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", Cf, [
      e.icon ? (a(), r("div", xf, f(e.icon), 1)) : y("", !0),
      t("p", Sf, f(e.message), 1),
      e.actionLabel ? (a(), D(de, {
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
}), as = /* @__PURE__ */ pe(If, [["__scopeId", "data-v-4466284f"]]), Ef = /* @__PURE__ */ me({
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
}), Tn = /* @__PURE__ */ pe(Ef, [["__scopeId", "data-v-75e9eeb8"]]), Tf = /* @__PURE__ */ me({
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
}), Da = /* @__PURE__ */ pe(Tf, [["__scopeId", "data-v-2f186e4c"]]), Pf = { class: "detail-row" }, Rf = /* @__PURE__ */ me({
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
    return (s, o) => (a(), r("div", Pf, [
      x(Tn, { "min-width": e.labelMinWidth }, {
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
}), mt = /* @__PURE__ */ pe(Rf, [["__scopeId", "data-v-ef15664a"]]), Mf = { class: "modal-header" }, Df = { class: "modal-body" }, Lf = { class: "status-section" }, Of = {
  key: 0,
  class: "status-section"
}, Af = { class: "section-header-row" }, Nf = {
  key: 0,
  class: "workflow-group"
}, Uf = { class: "workflow-group-header" }, zf = { class: "workflow-group-title" }, Ff = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Vf = { class: "workflow-issue" }, Wf = {
  key: 1,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, qf = { class: "workflow-issue" }, Yf = {
  key: 2,
  class: "workflow-group"
}, Jf = { class: "workflow-group-header" }, Qf = { class: "workflow-group-title" }, Xf = { class: "workflow-list" }, Zf = { class: "workflow-name" }, em = {
  key: 3,
  class: "workflow-group"
}, tm = { class: "workflow-group-header" }, sm = { class: "workflow-group-title" }, om = { class: "workflow-list" }, nm = { class: "workflow-name" }, am = {
  key: 4,
  class: "workflow-group"
}, lm = { class: "workflow-group-header" }, im = { class: "workflow-group-title" }, rm = { class: "workflow-list" }, cm = { class: "workflow-name" }, um = {
  key: 5,
  class: "workflow-group"
}, dm = { class: "workflow-group-title" }, fm = { class: "expand-icon" }, mm = {
  key: 0,
  class: "workflow-list"
}, vm = { class: "workflow-name" }, pm = {
  key: 1,
  class: "status-section"
}, gm = {
  key: 0,
  class: "change-group"
}, hm = { class: "change-group-header" }, ym = { class: "change-group-title" }, wm = { class: "change-list" }, _m = { class: "node-name" }, km = {
  key: 0,
  class: "dev-badge"
}, bm = {
  key: 1,
  class: "change-group"
}, $m = { class: "change-group-header" }, Cm = { class: "change-group-title" }, xm = { class: "change-list" }, Sm = { class: "node-name" }, Im = {
  key: 0,
  class: "dev-badge"
}, Em = {
  key: 2,
  class: "change-group"
}, Tm = { class: "change-list" }, Pm = { class: "change-item" }, Rm = { class: "node-name" }, Mm = {
  key: 3,
  class: "change-group"
}, Dm = {
  key: 2,
  class: "status-section"
}, Lm = { class: "section-header-row" }, Om = {
  key: 0,
  class: "drift-item"
}, Am = { class: "drift-list" }, Nm = {
  key: 0,
  class: "drift-list-more"
}, Um = {
  key: 1,
  class: "drift-item"
}, zm = { class: "drift-list" }, Fm = {
  key: 0,
  class: "drift-list-more"
}, Bm = {
  key: 2,
  class: "drift-item"
}, Vm = { class: "drift-list" }, Wm = { class: "version-actual" }, Gm = { class: "version-expected" }, jm = {
  key: 0,
  class: "drift-list-more"
}, Hm = {
  key: 3,
  class: "drift-item"
}, Km = { class: "repair-action" }, qm = {
  key: 3,
  class: "status-section"
}, Ym = { class: "info-box" }, Jm = { class: "drift-list" }, Qm = {
  key: 0,
  class: "drift-list-more"
}, Xm = {
  key: 4,
  class: "status-section"
}, Zm = { class: "warning-box" }, ev = {
  key: 5,
  class: "empty-state-inline"
}, tv = { class: "modal-actions" }, sv = /* @__PURE__ */ me({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    Qe(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), ft(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), i = U(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((C) => {
        var S, R, I;
        const b = (I = (R = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : R.analyzed) == null ? void 0 : I.find((E) => E.name === C);
        return !b || b.status !== "broken";
      })) || [];
    }), c = U(() => {
      var w, p, _, C, b;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = U(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = U(() => {
      var w, p, _, C, b, S;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (b = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
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
      var _, C, b, S, R, I, E, W, K, J, M, P, A, ee, F, L, V, X, N, ae, Z, we;
      return a(), D(kt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (be) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", Mf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (be) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", Df, [
              t("div", Lf, [
                x(Nt, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                x(mt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", Of, [
                t("div", Af, [
                  x(Nt, { level: "4" }, {
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
                n.value.length ? (a(), r("div", Nf, [
                  t("div", Uf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", zf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Ff, [
                    (a(!0), r(j, null, ye(n.value, (be) => (a(), r("div", {
                      key: be.name,
                      class: "workflow-item"
                    }, [
                      t("span", Bf, f(be.name), 1),
                      t("span", Vf, f(be.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Wf, [
                  t("div", Gf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", jf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Hf, [
                    (a(!0), r(j, null, ye(l.value, (be) => (a(), r("div", {
                      key: be.name,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, f(be.name), 1),
                      t("span", qf, f(be.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), r("div", Yf, [
                  t("div", Jf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Qf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Xf, [
                    (a(!0), r(j, null, ye(e.status.workflows.new, (be) => (a(), r("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", Zf, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (b = e.status.workflows) == null ? void 0 : b.modified) != null && S.length ? (a(), r("div", em, [
                  t("div", tm, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", sm, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", om, [
                    (a(!0), r(j, null, ye(e.status.workflows.modified, (be) => (a(), r("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", nm, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (R = e.status.workflows) == null ? void 0 : R.deleted) != null && I.length ? (a(), r("div", am, [
                  t("div", lm, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", im, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", rm, [
                    (a(!0), r(j, null, ye(e.status.workflows.deleted, (be) => (a(), r("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", cm, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", um, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (be) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", dm, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", fm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", mm, [
                    (a(!0), r(j, null, ye(i.value, (be) => (a(), r("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", vm, f(be), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), r("div", pm, [
                x(Nt, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && W.length ? (a(), r("div", gm, [
                  t("div", hm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", ym, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", wm, [
                    (a(!0), r(j, null, ye(e.status.git_changes.nodes_added, (be) => (a(), r("div", {
                      key: v(be),
                      class: "change-item"
                    }, [
                      t("span", _m, f(v(be)), 1),
                      g(be) ? (a(), r("span", km, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (J = (K = e.status.git_changes) == null ? void 0 : K.nodes_removed) != null && J.length ? (a(), r("div", bm, [
                  t("div", $m, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Cm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", xm, [
                    (a(!0), r(j, null, ye(e.status.git_changes.nodes_removed, (be) => (a(), r("div", {
                      key: v(be),
                      class: "change-item"
                    }, [
                      t("span", Sm, f(v(be)), 1),
                      g(be) ? (a(), r("span", Im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (M = e.status.git_changes) != null && M.workflow_changes ? (a(), r("div", Em, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Tm, [
                    t("div", Pm, [
                      t("span", Rm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (P = e.status.git_changes) != null && P.has_other_changes ? (a(), r("div", Mm, [...p[21] || (p[21] = [
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
              (A = e.status.comparison) != null && A.is_synced ? y("", !0) : (a(), r("div", Dm, [
                t("div", Lm, [
                  x(Nt, { level: "4" }, {
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
                (F = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && F.length ? (a(), r("div", Om, [
                  x(mt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Am, [
                    (a(!0), r(j, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (be) => (a(), r("div", {
                      key: be,
                      class: "drift-list-item"
                    }, " - " + f(be), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (V = (L = e.status.comparison) == null ? void 0 : L.extra_nodes) != null && V.length ? (a(), r("div", Um, [
                  x(mt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", zm, [
                    (a(!0), r(j, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (be) => (a(), r("div", {
                      key: be,
                      class: "drift-list-item"
                    }, " - " + f(be), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Fm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (N = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && N.length ? (a(), r("div", Bm, [
                  x(mt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Vm, [
                    (a(!0), r(j, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (be) => (a(), r("div", {
                      key: be.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(be.name) + ": ", 1),
                      t("span", Wm, f(be.actual), 1),
                      p[23] || (p[23] = $(" → ", -1)),
                      t("span", Gm, f(be.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", jm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ae = e.status.comparison) == null ? void 0 : ae.packages_in_sync) === !1 ? (a(), r("div", Hm, [
                  x(mt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Km, [
                  x(de, {
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
              (we = (Z = e.status.comparison) == null ? void 0 : Z.disabled_nodes) != null && we.length ? (a(), r("div", qm, [
                x(Nt, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Ym, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Jm, [
                  (a(!0), r(j, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (be) => (a(), r("div", {
                    key: be,
                    class: "drift-list-item"
                  }, " • " + f(be), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Qm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Xm, [
                x(Nt, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Zm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), r("div", ev, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", tv, [
              x(de, {
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
}), ov = /* @__PURE__ */ pe(sv, [["__scopeId", "data-v-e2b37122"]]), nv = { class: "health-section-header" }, av = { class: "suggestions-content" }, lv = { class: "suggestions-text" }, iv = { style: { "margin-top": "var(--cg-space-3)" } }, rv = {
  key: 1,
  class: "no-issues-text"
}, cv = /* @__PURE__ */ me({
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
    const C = U(() => {
      const X = n.status.workflows.analyzed || [], N = X.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return N.length === 0 && n.status.missing_models_count > 0 ? X.filter((ae) => ae.sync_state === "synced") : N;
    });
    function b() {
      const X = C.value;
      X.length !== 0 && (v.value = !0, m("repair-missing-models", X.map((N) => N.name)));
    }
    function S() {
      v.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const R = U(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), I = U(() => n.status.has_changes), E = U(() => {
      const X = n.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), W = U(() => n.status.has_changes || R.value), K = U(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), J = U(() => n.status.git_changes.has_other_changes), M = U(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter((N) => N.status === "broken")) || [];
    }), P = U(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), A = U(() => M.value.length > 0), ee = U(() => A.value || P.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), F = U(() => {
      const X = [];
      return n.status.workflows.new.length > 0 && X.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && X.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && X.push(`${n.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), L = U(() => {
      var ae, Z;
      const X = [], N = n.status.comparison;
      return (ae = N.missing_nodes) != null && ae.length && X.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (Z = N.extra_nodes) != null && Z.length && X.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), V = U(() => {
      var ae, Z;
      const X = [], N = n.status.comparison;
      return (ae = N.extra_nodes) != null && ae.length && (N.extra_nodes.slice(0, 3).forEach((we) => {
        X.push(`Untracked: ${we}`);
      }), N.extra_nodes.length > 3 && X.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (Z = N.missing_nodes) != null && Z.length && (N.missing_nodes.slice(0, 3).forEach((we) => {
        X.push(`Missing: ${we}`);
      }), N.missing_nodes.length > 3 && X.push(`...and ${N.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, N) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), D(Xt, {
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
                onClick: N[0] || (N[0] = (ae) => X.$emit("start-setup"))
              }, {
                default: h(() => [...N[13] || (N[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), D(Xt, {
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
                onClick: N[1] || (N[1] = (ae) => X.$emit("view-environments"))
              }, {
                default: h(() => [...N[14] || (N[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), D(Xt, {
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
                onClick: N[2] || (N[2] = (ae) => X.$emit("create-environment"))
              }, {
                default: h(() => [...N[15] || (N[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (ae) => i.value = !0),
            onMouseleave: N[5] || (N[5] = (ae) => i.value = !1)
          }, [
            t("div", nv, [
              x(Nt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...N[16] || (N[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              x(ed, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), D(de, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...N[17] || (N[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            x(rf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, no({
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
                x(ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: R.value
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
                  count: K.value,
                  label: K.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                J.value ? (a(), D(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !E.value && !J.value ? (a(), D(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (a(), D(ds, {
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
                  N[19] || (N[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", av, [
                    t("span", lv, f(F.value), 1),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (ae) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...N[18] || (N[18] = [
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
          e.status.is_detached_head ? (a(), D(Xt, {
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
                onClick: N[6] || (N[6] = (ae) => X.$emit("create-branch"))
              }, {
                default: h(() => [...N[20] || (N[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", iv, [
            x(Nt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...N[21] || (N[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ee.value ? (a(), r(j, { key: 0 }, [
              M.value.length > 0 ? (a(), D(Xt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: M.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...N[22] || (N[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              P.value.length > 0 ? (a(), D(Xt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: P.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...N[23] || (N[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !A.value ? (a(), D(Xt, {
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
                    onClick: b
                  }, {
                    default: h(() => [
                      $(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  x(de, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...N[24] || (N[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), D(Xt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: L.value,
                items: V.value
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...N[25] || (N[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (ae) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...N[26] || (N[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), D(Xt, {
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
                    onClick: N[11] || (N[11] = (ae) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...N[27] || (N[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : W.value ? (a(), r("span", rv, "No issues")) : (a(), D(as, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      x(ov, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: N[12] || (N[12] = (ae) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), uv = /* @__PURE__ */ pe(cv, [["__scopeId", "data-v-55fcd77f"]]), dv = ["type", "value", "placeholder", "disabled"], fv = /* @__PURE__ */ me({
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
    return Qe(() => {
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
        d[0] || (d[0] = Ht((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ht((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, dv));
  }
}), Ko = /* @__PURE__ */ pe(fv, [["__scopeId", "data-v-0380d08f"]]), mv = { class: "branch-create-form" }, vv = { class: "form-actions" }, pv = /* @__PURE__ */ me({
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
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), r("div", mv, [
      x(Ko, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", vv, [
        x(de, {
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
        x(de, {
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
}), gv = /* @__PURE__ */ pe(pv, [["__scopeId", "data-v-7c500394"]]), hv = { class: "branch-list-item__indicator" }, yv = { class: "branch-list-item__name" }, wv = {
  key: 0,
  class: "branch-list-item__actions"
}, _v = {
  key: 0,
  class: "branch-list-item__current-label"
}, kv = /* @__PURE__ */ me({
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
      t("span", hv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", yv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", wv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", _v, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), bv = /* @__PURE__ */ pe(kv, [["__scopeId", "data-v-c6581a24"]]), eR = Ws({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const tR = [
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
], sR = {
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
}, $v = [
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
], oR = [
  ...$v,
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
function Sr() {
  return typeof crypto < "u" && crypto.randomUUID ? Sr() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function tt() {
  const e = k(!1), s = k(null);
  async function o(Q, ke) {
    var Ne;
    if (!((Ne = window.app) != null && Ne.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi(Q, ke);
    if (!Oe.ok) {
      const Qt = await Oe.json().catch(() => ({}));
      throw new Error(Qt.error || Qt.message || `Request failed: ${Oe.status}`);
    }
    const lt = await Oe.text();
    if (lt)
      return JSON.parse(lt);
  }
  async function n(Q = !1) {
    return o(Q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(Q, ke = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Q, allow_issues: ke })
    });
  }
  async function i(Q = 10, ke = 0) {
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
  async function _(Q, ke = "HEAD") {
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
  async function S() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const Q = await n();
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
  async function R(Q, ke) {
    const Oe = { target_env: Q };
    return ke && (Oe.workspace_path = ke), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Oe)
    });
  }
  async function I() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function E(Q) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function W() {
    return o("/v2/workspace/environments/create_status");
  }
  async function K(Q = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Q}`);
  }
  async function J(Q) {
    return o(`/v2/workspace/environments/${Q}`, {
      method: "DELETE"
    });
  }
  async function M(Q = !1) {
    try {
      return o(Q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ke = await n(Q), Oe = [];
      return ke.workflows.new.forEach((lt) => {
        Oe.push({ name: lt, status: "new", missing_nodes: 0, missing_models: 0, path: lt });
      }), ke.workflows.modified.forEach((lt) => {
        Oe.push({ name: lt, status: "modified", missing_nodes: 0, missing_models: 0, path: lt });
      }), ke.workflows.synced.forEach((lt) => {
        Oe.push({ name: lt, status: "synced", missing_nodes: 0, missing_models: 0, path: lt });
      }), Oe;
    }
  }
  async function P(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/details`);
  }
  async function A(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/resolve`, {
      method: "POST"
    });
  }
  async function ee(Q, ke, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ke, install_models: Oe })
    });
  }
  async function F(Q, ke, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ke, importance: Oe })
    });
  }
  async function L() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function V() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function X(Q) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Q)}`);
  }
  async function N(Q) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function ae(Q, ke) {
    return o(`/v2/workspace/models/${Q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function Z(Q, ke) {
    return o(`/v2/workspace/models/${Q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function we(Q) {
    return o(`/v2/workspace/models/${Q}`, {
      method: "DELETE"
    });
  }
  async function be(Q) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Me() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ze() {
    return o("/v2/workspace/models/directory");
  }
  async function Ue(Q) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function Ye(Q) {
    const ke = new URLSearchParams({ url: Q });
    return o(`/v2/workspace/huggingface/repo-info?${ke}`);
  }
  async function ve() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function oe(Q, ke = 10) {
    const Oe = new URLSearchParams({ query: Q, limit: String(ke) });
    return o(`/v2/workspace/huggingface/search?${Oe}`);
  }
  async function re(Q) {
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
  async function ce(Q, ke) {
    const Oe = ke ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ke)}` : "/v2/comfygit/config";
    return o(Oe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Se(Q, ke) {
    try {
      const Oe = new URLSearchParams();
      return Q && Oe.append("level", Q), ke && Oe.append("lines", ke.toString()), o(`/v2/comfygit/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Pe(Q, ke) {
    try {
      const Oe = new URLSearchParams();
      return Q && Oe.append("level", Q), ke && Oe.append("lines", ke.toString()), o(`/v2/workspace/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Fe() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function O() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function T(Q, ke) {
    try {
      const Oe = new URLSearchParams();
      return Q && Oe.append("level", Q), ke && Oe.append("lines", ke.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function z() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function H(Q) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Q })
    });
  }
  async function ne() {
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
  async function Ce(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/install`, {
      method: "POST"
    });
  }
  async function ue(Q) {
    var Ne, Qt, To, Po;
    const ke = Sr(), Oe = ((Qt = (Ne = window.app) == null ? void 0 : Ne.api) == null ? void 0 : Qt.clientId) ?? ((Po = (To = window.app) == null ? void 0 : To.api) == null ? void 0 : Po.initialClientId) ?? "comfygit-panel", lt = {
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
      client_id: Oe
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lt)
    }), console.log("[ComfyGit] Task queued with ui_id:", ke, "for package:", Q.id), o("/v2/manager/queue/start").catch((tc) => {
      console.error("[ComfyGit] Queue start failed:", tc);
    }), { ui_id: ke };
  }
  async function _e(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/update`, {
      method: "POST"
    });
  }
  async function he(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Re() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ee(Q, ke) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, url: ke })
    });
  }
  async function te(Q) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function q(Q, ke, Oe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ke, push_url: Oe })
    });
  }
  async function De(Q, ke) {
    const Oe = {};
    return ke && (Oe["X-Git-Auth-Token"] = ke), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/fetch`, {
      method: "POST",
      headers: Oe
    });
  }
  async function $e(Q) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/status`);
    } catch {
      return null;
    }
  }
  async function ge(Q = "skip", ke = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Q,
        remove_extra_nodes: ke
      })
    });
  }
  async function G(Q, ke) {
    const Oe = ke ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview`;
    return o(Oe);
  }
  async function B(Q, ke = {}) {
    const Oe = { "Content-Type": "application/json" };
    return ke.authToken && (Oe["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({
        model_strategy: ke.modelStrategy || "skip",
        force: ke.force || !1,
        resolutions: ke.resolutions
      })
    });
  }
  async function fe(Q, ke) {
    const Oe = ke ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview`;
    return o(Oe);
  }
  async function Ve(Q, ke = {}) {
    const Oe = { "Content-Type": "application/json" };
    return ke.authToken && (Oe["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/push`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({ force: ke.force || !1 })
    });
  }
  async function Ze(Q, ke) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ke })
    });
  }
  async function St(Q) {
    const ke = {
      success: 0,
      failed: []
    };
    for (const Oe of Q)
      try {
        await A(Oe), ke.success++;
      } catch (lt) {
        ke.failed.push({
          name: Oe,
          error: lt instanceof Error ? lt.message : "Unknown error"
        });
      }
    return ke;
  }
  async function st(Q) {
    var lt;
    const ke = new FormData();
    if (ke.append("file", Q), !((lt = window.app) != null && lt.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ke
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Oe.ok) {
      const Ne = await Oe.json().catch(() => ({}));
      throw new Error(Ne.error || `Preview failed: ${Oe.status}`);
    }
    return Oe.json();
  }
  async function pt(Q) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Q)}`
    );
  }
  async function qt(Q, ke, Oe, lt) {
    var To;
    const Ne = new FormData();
    if (Ne.append("file", Q), Ne.append("name", ke), Ne.append("model_strategy", Oe), Ne.append("torch_backend", lt), !((To = window.app) != null && To.api))
      throw new Error("ComfyUI API not available");
    const Qt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ne
    });
    if (!Qt.ok) {
      const Po = await Qt.json().catch(() => ({}));
      throw new Error(Po.message || Po.error || `Import failed: ${Qt.status}`);
    }
    return Qt.json();
  }
  async function yt() {
    return o("/v2/workspace/import/status");
  }
  async function Io(Q) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Q })
    });
  }
  async function is(Q, ke, Oe, lt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Q,
        name: ke,
        model_strategy: Oe,
        torch_backend: lt
      })
    });
  }
  async function ys() {
    return o("/v2/setup/status");
  }
  async function ao(Q) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Yt() {
    return o("/v2/setup/initialize_status");
  }
  async function Eo(Q) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function js() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function xe() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function se(Q, ke) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Q, save_key: ke })
    });
  }
  async function He() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function wt(Q) {
    const ke = Q ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Q)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ke);
  }
  async function Bt(Q) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function ws() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function _s(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function rs(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/stop`, {
      method: "POST"
    });
  }
  async function Ae(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/start`, {
      method: "POST"
    });
  }
  async function ks(Q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Q)}/status`);
  }
  async function cs(Q) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Q })
    });
  }
  async function lo(Q = !1) {
    return o(Q ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function io() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Hs() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function le(Q) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Y(Q) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Le(Q) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function je() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function at(Q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/info`);
  }
  async function vt(Q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances`);
  }
  async function Jt(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function Ks(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(ke)}/start`, {
      method: "POST"
    });
  }
  async function dn(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(ke)}/stop`, {
      method: "POST"
    });
  }
  async function fn(Q, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Q)}/instances/${encodeURIComponent(ke)}`, {
      method: "DELETE"
    });
  }
  async function mn(Q) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: Q })
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
    getEnvironments: S,
    switchEnvironment: R,
    getSwitchProgress: I,
    createEnvironment: E,
    getCreateProgress: W,
    getComfyUIReleases: K,
    deleteEnvironment: J,
    // Workflow Management
    getWorkflows: M,
    getWorkflowDetails: P,
    resolveWorkflow: A,
    installWorkflowDeps: ee,
    setModelImportance: F,
    // Model Management
    getEnvironmentModels: L,
    getWorkspaceModels: V,
    getModelDetails: X,
    openFileLocation: N,
    addModelSource: ae,
    removeModelSource: Z,
    deleteModel: we,
    downloadModel: be,
    scanWorkspaceModels: Me,
    getModelsDirectory: ze,
    setModelsDirectory: Ue,
    getHuggingFaceRepoInfo: Ye,
    getModelsSubdirectories: ve,
    searchHuggingFaceRepos: oe,
    // Settings
    getConfig: re,
    updateConfig: ce,
    // Debug/Logs
    getEnvironmentLogs: Se,
    getWorkspaceLogs: Pe,
    getEnvironmentLogPath: Fe,
    getWorkspaceLogPath: O,
    getOrchestratorLogs: T,
    getOrchestratorLogPath: z,
    openFile: H,
    // Node Management
    getNodes: ne,
    trackNodeAsDev: ie,
    installNode: Ce,
    queueNodeInstall: ue,
    updateNode: _e,
    uninstallNode: he,
    // Git Remotes
    getRemotes: Re,
    addRemote: Ee,
    removeRemote: te,
    updateRemoteUrl: q,
    fetchRemote: De,
    getRemoteSyncStatus: $e,
    // Push/Pull
    getPullPreview: G,
    pullFromRemote: B,
    getPushPreview: fe,
    pushToRemote: Ve,
    validateMerge: Ze,
    // Environment Sync
    syncEnvironmentManually: ge,
    // Workflow Repair
    repairWorkflowModels: St,
    // Import Operations
    previewTarballImport: st,
    previewGitImport: Io,
    validateEnvironmentName: pt,
    executeImport: qt,
    executeGitImport: is,
    getImportProgress: yt,
    // First-Time Setup
    getSetupStatus: ys,
    initializeWorkspace: ao,
    getInitializeProgress: Yt,
    validatePath: Eo,
    // Deploy Operations
    getDeploySummary: js,
    getDataCenters: xe,
    testRunPodConnection: se,
    getNetworkVolumes: He,
    getRunPodGpuTypes: wt,
    deployToRunPod: Bt,
    getRunPodPods: ws,
    terminateRunPodPod: _s,
    stopRunPodPod: rs,
    startRunPodPod: Ae,
    getDeploymentStatus: ks,
    exportDeployPackage: cs,
    getStoredRunPodKey: lo,
    clearRunPodKey: io,
    // Custom Worker Operations
    getCustomWorkers: Hs,
    addCustomWorker: le,
    removeCustomWorker: Y,
    testWorkerConnection: Le,
    scanForWorkers: je,
    getWorkerSystemInfo: at,
    getWorkerInstances: vt,
    deployToWorker: Jt,
    startWorkerInstance: Ks,
    stopWorkerInstance: dn,
    terminateWorkerInstance: fn,
    // Git Authentication
    testGitAuth: mn
  };
}
const Cv = { class: "base-modal-header" }, xv = {
  key: 0,
  class: "base-modal-title"
}, Sv = { class: "base-modal-body" }, Iv = {
  key: 0,
  class: "base-modal-loading"
}, Ev = {
  key: 1,
  class: "base-modal-error"
}, Tv = {
  key: 0,
  class: "base-modal-footer"
}, Pv = /* @__PURE__ */ me({
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
    return Qe(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), Gs(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, u) => (a(), D(kt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ie(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", Cv, [
            Ke(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", xv, f(e.title), 1)) : y("", !0)
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
          t("div", Sv, [
            e.loading ? (a(), r("div", Iv, "Loading...")) : e.error ? (a(), r("div", Ev, f(e.error), 1)) : Ke(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Tv, [
            Ke(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), dt = /* @__PURE__ */ pe(Pv, [["__scopeId", "data-v-8dab1081"]]), Rv = ["type", "disabled"], Mv = {
  key: 0,
  class: "spinner"
}, Dv = /* @__PURE__ */ me({
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
      e.loading ? (a(), r("span", Mv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Rv));
  }
}), Te = /* @__PURE__ */ pe(Dv, [["__scopeId", "data-v-f3452606"]]), Lv = { class: "commit-list" }, Ov = /* @__PURE__ */ me({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", Lv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), Ir = /* @__PURE__ */ pe(Ov, [["__scopeId", "data-v-8c5ee761"]]), Av = { class: "commit-hash" }, Nv = /* @__PURE__ */ me({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = U(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", Av, f(o.value), 1));
  }
}), Er = /* @__PURE__ */ pe(Nv, [["__scopeId", "data-v-7c333cc6"]]), Uv = { class: "commit-message" }, zv = { class: "commit-date" }, Fv = /* @__PURE__ */ me({
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
      x(Er, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Uv, f(e.message), 1),
      t("span", zv, f(e.relativeDate), 1),
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
}), Tr = /* @__PURE__ */ pe(Fv, [["__scopeId", "data-v-dd7c621b"]]), Bv = { class: "header-info" }, Vv = { class: "branch-name" }, Wv = {
  key: 0,
  class: "current-badge"
}, Gv = { class: "branch-meta" }, jv = { key: 0 }, Hv = {
  key: 0,
  class: "meta-note"
}, Kv = {
  key: 0,
  class: "loading"
}, qv = {
  key: 1,
  class: "empty-state"
}, Yv = /* @__PURE__ */ me({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = tt(), n = k([]), l = k(!1), i = k(!0);
    return Qe(async () => {
      try {
        const c = await o(s.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        i.value = !1;
      }
    }), (c, u) => (a(), D(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        t("div", Bv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Vv, f(e.branchName), 1),
          e.isCurrent ? (a(), r("span", Wv, "CURRENT")) : y("", !0)
        ]),
        x(Te, {
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
        t("div", Gv, [
          i.value ? (a(), r("span", jv, "Loading...")) : (a(), r(j, { key: 1 }, [
            t("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), r("span", Hv, "(showing first " + f(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        i.value ? (a(), r("div", Kv, "Loading commit history...")) : n.value.length === 0 ? (a(), r("div", qv, " No commits found on this branch ")) : (a(), D(Ir, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), r(j, null, ye(n.value, (d) => (a(), D(Tr, {
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
        e.isCurrent ? y("", !0) : (a(), D(de, {
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
        e.isCurrent ? y("", !0) : (a(), D(Te, {
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
}), Jv = /* @__PURE__ */ pe(Yv, [["__scopeId", "data-v-2e5437cc"]]), Qv = {
  key: 2,
  class: "branch-list"
}, Xv = /* @__PURE__ */ me({
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
    return (v, g) => (a(), D(Dt, null, {
      header: h(() => [
        x(Lt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), D(de, {
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
        n.value ? (a(), D(gv, {
          key: 0,
          onCreate: i,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (a(), D(as, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", Qv, [
          (a(!0), r(j, null, ye(e.branches, (w) => (a(), D(bv, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), D(de, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: rt((p) => o("switch", w.name), ["stop"])
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
        l.value ? (a(), D(Jv, {
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
}), Zv = /* @__PURE__ */ pe(Xv, [["__scopeId", "data-v-eefdcb00"]]), ep = /* @__PURE__ */ me({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = U(() => `HISTORY (${s.currentRef || "detached"})`);
    return (n, l) => (a(), D(Dt, null, {
      header: h(() => [
        x(Lt, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), D(as, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), D(Ir, { key: 1 }, {
          default: h(() => [
            (a(!0), r(j, null, ye(e.commits, (i) => (a(), D(Tr, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (c) => n.$emit("select", i)
            }, {
              actions: h(() => [
                x(de, {
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
}), tp = /* @__PURE__ */ pe(ep, [["__scopeId", "data-v-62a5d9da"]]);
async function _n(e, s) {
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
function sp() {
  async function e() {
    try {
      return await _n("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await _n("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await _n("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await _n("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const op = {
  key: 0,
  class: "base-title-count"
}, np = /* @__PURE__ */ me({
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
        e.count !== void 0 ? (a(), r("span", op, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qo = /* @__PURE__ */ pe(np, [["__scopeId", "data-v-5a01561d"]]), ap = ["value", "disabled"], lp = {
  key: 0,
  value: "",
  disabled: ""
}, ip = ["value"], rp = {
  key: 0,
  class: "base-select-error"
}, cp = /* @__PURE__ */ me({
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
        e.placeholder ? (a(), r("option", lp, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(j, null, ye(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, ip))), 128))
      ], 42, ap),
      e.error ? (a(), r("span", rp, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), up = /* @__PURE__ */ pe(cp, [["__scopeId", "data-v-4996bfe0"]]), dp = { class: "popover-header" }, fp = { class: "popover-title" }, mp = { class: "popover-content" }, vp = {
  key: 0,
  class: "popover-actions"
}, pp = /* @__PURE__ */ me({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), D(kt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", dp, [
            t("h4", fp, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", mp, [
            Ke(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", vp, [
            Ke(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), ls = /* @__PURE__ */ pe(pp, [["__scopeId", "data-v-42815ace"]]), gp = { class: "detail-section" }, hp = {
  key: 0,
  class: "empty-message"
}, yp = { class: "model-header" }, wp = { class: "model-name" }, _p = { class: "model-details" }, kp = { class: "model-row" }, bp = { class: "model-row" }, $p = { class: "label" }, Cp = {
  key: 0,
  class: "model-row model-row-nodes"
}, xp = { class: "node-list" }, Sp = ["onClick"], Ip = {
  key: 1,
  class: "model-row"
}, Ep = { class: "value" }, Tp = {
  key: 2,
  class: "model-row"
}, Pp = { class: "value error" }, Rp = {
  key: 0,
  class: "model-actions"
}, Mp = { class: "detail-section" }, Dp = {
  key: 0,
  class: "empty-message"
}, Lp = { class: "node-name" }, Op = {
  key: 0,
  class: "node-version"
}, Ap = /* @__PURE__ */ me({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = tt(), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(M) {
      switch (M) {
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
    function b(M) {
      switch (M) {
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
    function S(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const P = M.hash || M.filename;
      return p.value.has(P) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function R(M) {
      return p.value.has(M);
    }
    function I(M) {
      p.value.has(M) ? p.value.delete(M) : p.value.add(M), p.value = new Set(p.value);
    }
    async function E() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function W(M, P) {
      g.value[M] = P, v.value = !0;
    }
    async function K(M) {
      try {
        await c(M);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function J() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [M, P] of Object.entries(g.value))
          await i(o.workflowName, M, P);
        n("refresh"), n("close");
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Qe(E), (M, P) => (a(), r(j, null, [
      x(dt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: P[4] || (P[4] = (A) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), r(j, { key: 0 }, [
            t("section", gp, [
              x(qo, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", hp, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, ye(u.value.models, (A) => {
                var ee;
                return a(), r("div", {
                  key: A.hash || A.filename,
                  class: "model-card"
                }, [
                  t("div", yp, [
                    P[6] || (P[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", wp, f(A.filename), 1)
                  ]),
                  t("div", _p, [
                    t("div", kp, [
                      P[7] || (P[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ie(["value", C(A.status)])
                      }, f(b(A.status)), 3)
                    ]),
                    t("div", bp, [
                      t("span", $p, [
                        P[8] || (P[8] = $(" Importance: ", -1)),
                        x(xr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: P[0] || (P[0] = (F) => w.value = !0)
                        })
                      ]),
                      x(up, {
                        "model-value": g.value[A.filename] || A.importance,
                        options: _,
                        "onUpdate:modelValue": (F) => W(A.filename, F)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    A.loaded_by && A.loaded_by.length > 0 ? (a(), r("div", Cp, [
                      P[9] || (P[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", xp, [
                        (a(!0), r(j, null, ye(S(A), (F, L) => (a(), r("div", {
                          key: `${F.node_id}-${L}`,
                          class: "node-reference"
                        }, f(F.node_type) + " (Node #" + f(F.node_id) + ") ", 1))), 128)),
                        A.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (F) => I(A.hash || A.filename)
                        }, f(R(A.hash || A.filename) ? "▼ Show less" : `▶ View all (${A.loaded_by.length})`), 9, Sp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    A.size_mb ? (a(), r("div", Ip, [
                      P[10] || (P[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Ep, f(A.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    A.has_category_mismatch ? (a(), r("div", Tp, [
                      P[13] || (P[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Pp, [
                        P[11] || (P[11] = $(" In ", -1)),
                        t("code", null, f(A.actual_category) + "/", 1),
                        P[12] || (P[12] = $(" but loader needs ", -1)),
                        t("code", null, f((ee = A.expected_categories) == null ? void 0 : ee[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  A.status !== "available" ? (a(), r("div", Rp, [
                    A.status === "downloadable" ? (a(), D(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: P[1] || (P[1] = (F) => n("resolve"))
                    }, {
                      default: h(() => [...P[14] || (P[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : A.status === "category_mismatch" && A.file_path ? (a(), D(Te, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => K(A.file_path)
                    }, {
                      default: h(() => [...P[15] || (P[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : A.status !== "path_mismatch" ? (a(), D(Te, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: P[2] || (P[2] = (F) => n("resolve"))
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
            t("section", Mp, [
              x(qo, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", Dp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(j, null, ye(u.value.nodes, (A) => (a(), r("div", {
                key: A.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ie(["node-status", A.status === "installed" ? "installed" : "missing"])
                }, f(A.status === "installed" ? "✓" : "✕"), 3),
                t("span", Lp, f(A.name), 1),
                A.version ? (a(), r("span", Op, "v" + f(A.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          x(Te, {
            variant: "secondary",
            onClick: P[3] || (P[3] = (A) => n("close"))
          }, {
            default: h(() => [...P[17] || (P[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), D(Te, {
            key: 0,
            variant: "primary",
            onClick: J
          }, {
            default: h(() => [...P[18] || (P[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      x(ls, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: P[5] || (P[5] = (A) => w.value = !1)
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
}), Np = /* @__PURE__ */ pe(Ap, [["__scopeId", "data-v-668728e6"]]), Je = Ws({
  items: [],
  status: "idle"
});
let vs = null;
function Pr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function pa(e) {
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
    await Up(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Je.status = "idle", vo();
  }
}
async function Up(e) {
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
async function zp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Je.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
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
      Je.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function xo() {
  function e(b) {
    for (const S of b) {
      if (Je.items.some(
        (E) => E.url === S.url && E.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const I = {
        id: Pr(),
        workflow: S.workflow,
        filename: S.filename,
        url: S.url,
        targetPath: S.targetPath,
        size: S.size || 0,
        type: S.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Je.items.push(I);
    }
    Je.status === "idle" && vo();
  }
  async function s(b) {
    const S = pa(b);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), S.status = "failed", S.error = "Cancelled by user", Je.status = "idle", vo();
      } else if (S.status === "queued") {
        const R = Je.items.findIndex((I) => I.id === b);
        R >= 0 && Je.items.splice(R, 1);
      }
    }
  }
  function o(b) {
    const S = pa(b);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, Je.status === "idle" && vo());
  }
  function n(b) {
    const S = pa(b);
    !S || S.status !== "paused" || (S.status = "queued", Je.status === "idle" && vo());
  }
  function l() {
    const b = Je.items.filter((S) => S.status === "paused");
    for (const S of b)
      S.status = "queued";
    Je.status === "idle" && vo();
  }
  function i(b) {
    const S = Je.items.findIndex((R) => R.id === b);
    S >= 0 && ["completed", "failed", "paused"].includes(Je.items[S].status) && Je.items.splice(S, 1);
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
  ), p = U(() => Je.items.length > 0), _ = U(
    () => Je.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), C = U(
    () => Je.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Rn(Je),
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
    loadPendingDownloads: zp
  };
}
function Rr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(R, I) {
    var W;
    if (!((W = window.app) != null && W.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(R, I);
    if (!E.ok) {
      const K = await E.json().catch(() => ({})), J = K.error || K.message || `Request failed: ${E.status}`;
      throw new Error(J);
    }
    return E.json();
  }
  async function u(R) {
    l.value = !0, i.value = null;
    try {
      let I;
      return mo() || (I = await c(
        `/v2/comfygit/workflow/${R}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = I, I;
    } catch (I) {
      const E = I instanceof Error ? I.message : "Unknown error occurred";
      throw i.value = E, I;
    } finally {
      l.value = !1;
    }
  }
  async function d(R, I, E, W) {
    l.value = !0, i.value = null;
    try {
      let K;
      if (!mo()) {
        const J = Object.fromEntries(I), M = Object.fromEntries(E), P = W ? Array.from(W) : [];
        K = await c(
          `/v2/comfygit/workflow/${R}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: J,
              model_choices: M,
              skipped_packages: P
            })
          }
        );
      }
      return s.value = K, K;
    } catch (K) {
      const J = K instanceof Error ? K.message : "Unknown error occurred";
      throw i.value = J, K;
    } finally {
      l.value = !1;
    }
  }
  async function m(R, I = 10) {
    l.value = !0, i.value = null;
    try {
      let E;
      return mo() || (E = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: R, limit: I })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const W = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = W, E;
    } finally {
      l.value = !1;
    }
  }
  async function v(R, I = 10) {
    l.value = !0, i.value = null;
    try {
      let E;
      return mo() || (E = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: R, limit: I })
        }
      )), n.value = E.results, E.results;
    } catch (E) {
      const W = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = W, E;
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
  async function p(R) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return mo(), await _(R);
    } catch (I) {
      const E = I instanceof Error ? I.message : "Failed to install nodes";
      throw g.installError = E, I;
    }
  }
  async function _(R) {
    var E;
    const I = await c(
      `/v2/comfygit/workflow/${R}/install`,
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
      const W = new Map(((E = I.failed) == null ? void 0 : E.map((K) => [K.node_id, K.error])) || []);
      for (let K = 0; K < g.nodesToInstall.length; K++) {
        const J = g.nodesToInstall[K], M = W.get(J);
        g.nodeInstallProgress.completedNodes.push({
          node_id: J,
          success: !M,
          error: M
        });
      }
    }
    return g.nodesInstalled = I.nodes_installed, g.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (g.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function C(R, I, E) {
    w(), g.phase = "resolving", i.value = null;
    const W = Object.fromEntries(I), K = Object.fromEntries(E);
    try {
      const J = await fetch(`/v2/comfygit/workflow/${R}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: W,
          model_choices: K
        })
      });
      if (!J.ok)
        throw new Error(`Request failed: ${J.status}`);
      if (!J.body)
        throw new Error("No response body");
      const M = J.body.getReader(), P = new TextDecoder();
      let A = "";
      for (; ; ) {
        const { done: ee, value: F } = await M.read();
        if (ee) break;
        A += P.decode(F, { stream: !0 });
        const L = A.split(`

`);
        A = L.pop() || "";
        for (const V of L) {
          if (!V.trim()) continue;
          const X = V.split(`
`);
          let N = "", ae = "";
          for (const Z of X)
            Z.startsWith("event: ") ? N = Z.slice(7) : Z.startsWith("data: ") && (ae = Z.slice(6));
          if (ae)
            try {
              const Z = JSON.parse(ae);
              b(N, Z);
            } catch (Z) {
              console.warn("Failed to parse SSE event:", Z);
            }
        }
      }
    } catch (J) {
      const M = J instanceof Error ? J.message : "Unknown error occurred";
      throw i.value = M, g.error = M, g.phase = "error", J;
    }
  }
  function b(R, I) {
    switch (R) {
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
  function S(R, I) {
    const { addToQueue: E } = xo(), W = I.filter((K) => K.url && K.target_path).map((K) => ({
      workflow: R,
      filename: K.filename,
      url: K.url,
      targetPath: K.target_path,
      size: K.size || 0,
      type: "model"
    }));
    return W.length > 0 && E(W), W.length;
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
    queueModelDownloads: S
  };
}
const Fp = { class: "resolution-stepper" }, Bp = { class: "stepper-header" }, Vp = ["onClick"], Wp = {
  key: 0,
  class: "step-icon"
}, Gp = {
  key: 1,
  class: "step-number"
}, jp = { class: "step-label" }, Hp = {
  key: 0,
  class: "step-connector"
}, Kp = { class: "stepper-content" }, qp = /* @__PURE__ */ me({
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
    return (m, v) => (a(), r("div", Fp, [
      t("div", Bp, [
        (a(!0), r(j, null, ye(e.steps, (g, w) => (a(), r("div", {
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
            l(g.id) ? (a(), r("span", Wp, "✓")) : (a(), r("span", Gp, f(w + 1), 1))
          ], 2),
          t("div", jp, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Hp)) : y("", !0)
        ], 10, Vp))), 128))
      ]),
      t("div", Kp, [
        Ke(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Yp = /* @__PURE__ */ pe(qp, [["__scopeId", "data-v-2a7b3af8"]]), Jp = /* @__PURE__ */ me({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Ie(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Fn = /* @__PURE__ */ pe(Jp, [["__scopeId", "data-v-17ec4b80"]]), Qp = { class: "node-info" }, Xp = { class: "node-info-text" }, Zp = { class: "item-body" }, eg = {
  key: 0,
  class: "resolved-state"
}, tg = {
  key: 1,
  class: "multiple-options"
}, sg = { class: "options-list" }, og = ["onClick"], ng = ["name", "value", "checked", "onChange"], ag = { class: "option-content" }, lg = { class: "option-header" }, ig = { class: "option-package-id" }, rg = {
  key: 0,
  class: "option-title"
}, cg = { class: "option-meta" }, ug = {
  key: 0,
  class: "installed-badge"
}, dg = { class: "action-buttons" }, fg = {
  key: 2,
  class: "unresolved"
}, mg = {
  key: 0,
  class: "searching-state"
}, vg = { class: "options-list" }, pg = ["onClick"], gg = ["name", "value"], hg = { class: "option-content" }, yg = { class: "option-header" }, wg = { class: "option-package-id" }, _g = {
  key: 0,
  class: "option-description"
}, kg = { class: "option-meta" }, bg = {
  key: 0,
  class: "installed-badge"
}, $g = {
  key: 2,
  class: "unresolved-message"
}, Cg = { class: "action-buttons" }, xg = /* @__PURE__ */ me({
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
      n("option-selected", d);
    }
    return (d, m) => (a(), r("div", {
      class: Ie(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Qp, [
        t("span", Xp, [
          m[7] || (m[7] = $("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Zp, [
        i.value ? (a(), r("div", eg, [
          x(Te, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", tg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", sg, [
            (a(!0), r(j, null, ye(e.options, (v, g) => (a(), r("label", {
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
              }, null, 40, ng),
              t("div", ag, [
                t("div", lg, [
                  t("span", ig, f(v.package_id), 1),
                  x(Fn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", rg, f(v.title), 1)) : y("", !0),
                t("div", cg, [
                  v.is_installed ? (a(), r("span", ug, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, og))), 128))
          ]),
          t("div", dg, [
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
        ])) : (a(), r("div", fg, [
          e.isSearching ? (a(), r("div", mg, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(j, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", vg, [
              (a(!0), r(j, null, ye(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, gg),
                t("div", hg, [
                  t("div", yg, [
                    t("span", wg, f(v.package_id), 1),
                    x(Fn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", _g, f(l(v.description)), 1)) : y("", !0),
                  t("div", kg, [
                    v.is_installed ? (a(), r("span", bg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, pg))), 128))
            ])
          ], 64)) : (a(), r("div", $g, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Cg, [
            x(Te, {
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
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
}), Sg = /* @__PURE__ */ pe(xg, [["__scopeId", "data-v-c2997d1d"]]), Ig = { class: "item-navigator" }, Eg = { class: "nav-item-info" }, Tg = ["title"], Pg = { class: "nav-controls" }, Rg = { class: "nav-arrows" }, Mg = ["disabled"], Dg = ["disabled"], Lg = { class: "nav-position" }, Og = /* @__PURE__ */ me({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", Ig, [
      t("div", Eg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Tg)
      ]),
      t("div", Pg, [
        t("div", Rg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Mg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, Dg)
        ]),
        t("span", Lg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Mr = /* @__PURE__ */ pe(Og, [["__scopeId", "data-v-74af7920"]]), Ag = ["type", "value", "placeholder", "disabled"], Ng = {
  key: 0,
  class: "base-input-error"
}, Ug = /* @__PURE__ */ me({
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
          o[1] || (o[1] = Ht((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Ht((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ag),
      e.error ? (a(), r("span", Ng, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Mt = /* @__PURE__ */ pe(Ug, [["__scopeId", "data-v-9ba02cdc"]]), zg = { class: "node-resolution-step" }, Fg = {
  key: 0,
  class: "auto-resolved-section"
}, Bg = { class: "section-header" }, Vg = { class: "stat-badge" }, Wg = { class: "resolved-packages-list" }, Gg = { class: "package-info" }, jg = { class: "package-id" }, Hg = { class: "node-count" }, Kg = { class: "package-actions" }, qg = {
  key: 0,
  class: "status-badge install"
}, Yg = {
  key: 1,
  class: "status-badge skip"
}, Jg = ["onClick"], Qg = {
  key: 1,
  class: "section-divider"
}, Xg = { class: "step-header" }, Zg = { class: "stat-badge" }, eh = {
  key: 1,
  class: "step-body"
}, th = {
  key: 3,
  class: "empty-state"
}, sh = { class: "node-modal-body" }, oh = { class: "node-search-results-container" }, nh = {
  key: 0,
  class: "node-search-results"
}, ah = ["onClick"], lh = { class: "node-result-header" }, ih = { class: "node-result-package-id" }, rh = {
  key: 0,
  class: "node-result-description"
}, ch = {
  key: 1,
  class: "node-empty-state"
}, uh = {
  key: 2,
  class: "node-empty-state"
}, dh = {
  key: 3,
  class: "node-empty-state"
}, fh = { class: "node-manual-entry-modal" }, mh = { class: "node-modal-body" }, vh = { class: "node-modal-actions" }, ph = /* @__PURE__ */ me({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = Rr(), i = k(0), c = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && Z(), _.value = !1;
    }
    const b = U(() => o.nodes[i.value]), S = U(() => o.nodes.filter((oe) => o.nodeChoices.has(oe.node_type)).length), R = U(() => b.value ? w.value.get(b.value.node_type) || [] : []), I = U(() => b.value ? p.value.has(b.value.node_type) : !1);
    ft(b, async (oe) => {
      var re;
      oe && ((re = oe.options) != null && re.length || w.value.has(oe.node_type) || p.value.has(oe.node_type) || o.nodeChoices.has(oe.node_type) || await E(oe.node_type));
    }, { immediate: !0 });
    async function E(oe) {
      p.value.add(oe);
      try {
        const re = await l(oe, 5);
        w.value.set(oe, re);
      } catch {
        w.value.set(oe, []);
      } finally {
        p.value.delete(oe);
      }
    }
    const W = U(() => o.autoResolvedPackages.filter((oe) => !o.skippedPackages.has(oe.package_id)).length);
    function K(oe) {
      return o.skippedPackages.has(oe);
    }
    function J(oe) {
      n("package-skip", oe);
    }
    const M = U(() => {
      var re;
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
      return (re = b.value.options) != null && re.length ? "ambiguous" : "not-found";
    }), P = U(() => {
      var re;
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
      return (re = b.value.options) != null && re.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function A(oe) {
      oe >= 0 && oe < o.nodes.length && (i.value = oe);
    }
    function ee() {
      var oe;
      for (let re = i.value + 1; re < o.nodes.length; re++) {
        const ce = o.nodes[re];
        if (!((oe = o.nodeChoices) != null && oe.has(ce.node_type))) {
          A(re);
          return;
        }
      }
    }
    function F() {
      b.value && (n("mark-optional", b.value.node_type), ht(() => ee()));
    }
    function L() {
      b.value && (n("skip", b.value.node_type), ht(() => ee()));
    }
    function V(oe) {
      b.value && (n("option-selected", b.value.node_type, oe), ht(() => ee()));
    }
    function X() {
      b.value && n("clear-choice", b.value.node_type);
    }
    function N() {
      b.value && (d.value = b.value.node_type, v.value = R.value, c.value = !0, ze(d.value));
    }
    function ae() {
      m.value = "", u.value = !0;
    }
    function Z() {
      c.value = !1, d.value = "", v.value = [];
    }
    function we() {
      u.value = !1, m.value = "";
    }
    let be = null;
    function Me() {
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
      b.value && (n("manual-entry", b.value.node_type, oe.package_id), Z(), ht(() => ee()));
    }
    function Ye(oe) {
      b.value && (n("manual-entry", b.value.node_type, oe.package_id), ht(() => ee()));
    }
    function ve() {
      !b.value || !m.value.trim() || (n("manual-entry", b.value.node_type, m.value.trim()), we(), ht(() => ee()));
    }
    return (oe, re) => {
      var ce, Se;
      return a(), r("div", zg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", Fg, [
          t("div", Bg, [
            re[6] || (re[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Vg, f(W.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Wg, [
            (a(!0), r(j, null, ye(e.autoResolvedPackages, (Pe) => (a(), r("div", {
              key: Pe.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Gg, [
                t("code", jg, f(Pe.package_id), 1),
                t("span", Hg, f(Pe.node_types_count) + " node type" + f(Pe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Kg, [
                K(Pe.package_id) ? (a(), r("span", Yg, " SKIPPED ")) : (a(), r("span", qg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Fe) => J(Pe.package_id)
                }, f(K(Pe.package_id) ? "Include" : "Skip"), 9, Jg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Qg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(j, { key: 2 }, [
          t("div", Xg, [
            re[7] || (re[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Zg, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (a(), D(Mr, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: re[0] || (re[0] = (Pe) => A(i.value - 1)),
            onNext: re[1] || (re[1] = (Pe) => A(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (a(), r("div", eh, [
            x(Sg, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((ce = b.value.options) != null && ce.length),
              options: b.value.options,
              choice: (Se = e.nodeChoices) == null ? void 0 : Se.get(b.value.node_type),
              status: M.value,
              "status-label": P.value,
              "search-results": R.value,
              "is-searching": I.value,
              onMarkOptional: F,
              onSkip: L,
              onManualEntry: ae,
              onSearch: N,
              onOptionSelected: V,
              onClearChoice: X,
              onSearchResultSelected: Ye
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", th, [...re[8] || (re[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), D(kt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: re[4] || (re[4] = rt((Pe) => _.value = !0, ["self"])),
            onMouseup: rt(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: re[3] || (re[3] = (Pe) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                re[9] || (re[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", sh, [
                x(Mt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": re[2] || (re[2] = (Pe) => d.value = Pe),
                  placeholder: "Search by node type, package name...",
                  onInput: Me
                }, null, 8, ["modelValue"]),
                t("div", oh, [
                  v.value.length > 0 ? (a(), r("div", nh, [
                    (a(!0), r(j, null, ye(v.value, (Pe) => (a(), r("div", {
                      key: Pe.package_id,
                      class: "node-search-result-item",
                      onClick: (Fe) => Ue(Pe)
                    }, [
                      t("div", lh, [
                        t("code", ih, f(Pe.package_id), 1),
                        Pe.match_confidence ? (a(), D(Fn, {
                          key: 0,
                          confidence: Pe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Pe.description ? (a(), r("div", rh, f(Pe.description), 1)) : y("", !0)
                    ], 8, ah))), 128))
                  ])) : g.value ? (a(), r("div", ch, "Searching...")) : d.value ? (a(), r("div", uh, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), r("div", dh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), D(kt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: rt(we, ["self"])
          }, [
            t("div", fh, [
              t("div", { class: "node-modal-header" }, [
                re[10] || (re[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              t("div", mh, [
                x(Mt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": re[5] || (re[5] = (Pe) => m.value = Pe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", vh, [
                  x(Te, {
                    variant: "secondary",
                    onClick: we
                  }, {
                    default: h(() => [...re[11] || (re[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Te, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: ve
                  }, {
                    default: h(() => [...re[12] || (re[12] = [
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
}), gh = /* @__PURE__ */ pe(ph, [["__scopeId", "data-v-6d7f8125"]]), hh = { class: "node-info" }, yh = { class: "node-info-text" }, wh = { class: "item-body" }, _h = {
  key: 0,
  class: "resolved-state"
}, kh = {
  key: 1,
  class: "multiple-options"
}, bh = { class: "options-list" }, $h = ["onClick"], Ch = ["name", "value", "checked", "onChange"], xh = { class: "option-content" }, Sh = { class: "option-header" }, Ih = { class: "option-filename" }, Eh = { class: "option-meta" }, Th = { class: "option-size" }, Ph = { class: "option-category" }, Rh = { class: "option-path" }, Mh = { class: "action-buttons" }, Dh = {
  key: 2,
  class: "unresolved"
}, Lh = { class: "action-buttons" }, Oh = /* @__PURE__ */ me({
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
      t("div", hh, [
        t("span", yh, [
          m[7] || (m[7] = $("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ie(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", wh, [
        l.value ? (a(), r("div", _h, [
          x(Te, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", kh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", bh, [
            (a(!0), r(j, null, ye(e.options, (v, g) => (a(), r("label", {
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
              }, null, 40, Ch),
              t("div", xh, [
                t("div", Sh, [
                  t("span", Ih, f(v.model.filename), 1),
                  x(Fn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Eh, [
                  t("span", Th, f(u(v.model.size)), 1),
                  t("span", Ph, f(v.model.category), 1)
                ]),
                t("div", Rh, f(v.model.relative_path), 1)
              ])
            ], 10, $h))), 128))
          ]),
          t("div", Mh, [
            x(Te, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
        ])) : (a(), r("div", Dh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Lh, [
            x(Te, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
}), Ah = /* @__PURE__ */ pe(Oh, [["__scopeId", "data-v-8a82fefa"]]), Nh = { class: "model-resolution-step" }, Uh = { class: "step-header" }, zh = { class: "step-info" }, Fh = { class: "step-title" }, Bh = { class: "step-description" }, Vh = { class: "stat-badge" }, Wh = {
  key: 1,
  class: "step-body"
}, Gh = {
  key: 2,
  class: "empty-state"
}, jh = { class: "model-search-modal" }, Hh = { class: "model-modal-body" }, Kh = {
  key: 0,
  class: "model-search-results"
}, qh = ["onClick"], Yh = { class: "model-result-header" }, Jh = { class: "model-result-filename" }, Qh = { class: "model-result-meta" }, Xh = { class: "model-result-category" }, Zh = { class: "model-result-size" }, ey = {
  key: 0,
  class: "model-result-path"
}, ty = {
  key: 1,
  class: "model-no-results"
}, sy = {
  key: 2,
  class: "model-searching"
}, oy = { class: "model-download-url-modal" }, ny = { class: "model-modal-body" }, ay = { class: "model-input-group" }, ly = { class: "model-input-group" }, iy = { class: "model-modal-actions" }, ry = /* @__PURE__ */ me({
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
    function n(Z) {
      var we;
      return Z && ((we = o[Z]) == null ? void 0 : we[0]) || null;
    }
    const l = e, i = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = U(() => l.models[c.value]), C = U(() => l.models.some((Z) => Z.is_download_intent)), b = U(() => l.models.filter(
      (Z) => l.modelChoices.has(Z.filename) || Z.is_download_intent
    ).length), S = U(() => {
      var we;
      if (!_.value) return "";
      const Z = n((we = _.value.reference) == null ? void 0 : we.node_type);
      return Z ? `${Z}/${_.value.filename}` : "";
    }), R = U(() => {
      var we;
      if (!_.value) return "not-found";
      const Z = l.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (we = _.value.options) != null && we.length ? "ambiguous" : "not-found";
    }), I = U(() => {
      var we, be;
      if (!_.value) return;
      const Z = l.modelChoices.get(_.value.filename);
      if (Z)
        switch (Z.action) {
          case "select":
            return (we = Z.selected_model) != null && we.filename ? `→ ${Z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (be = _.value.options) != null && be.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function E(Z) {
      Z >= 0 && Z < l.models.length && (c.value = Z);
    }
    function W() {
      var Z;
      for (let we = c.value + 1; we < l.models.length; we++) {
        const be = l.models[we];
        if (!be.is_download_intent && !((Z = l.modelChoices) != null && Z.has(be.filename))) {
          E(we);
          return;
        }
      }
    }
    function K() {
      _.value && (i("mark-optional", _.value.filename), ht(() => W()));
    }
    function J() {
      _.value && (i("skip", _.value.filename), ht(() => W()));
    }
    function M(Z) {
      _.value && (i("option-selected", _.value.filename, Z), ht(() => W()));
    }
    function P() {
      _.value && i("clear-choice", _.value.filename);
    }
    function A() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function ee() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || S.value, d.value = !0);
    }
    function F() {
      u.value = !1, m.value = "", w.value = [];
    }
    function L() {
      d.value = !1, v.value = "", g.value = "";
    }
    function V() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function X(Z) {
      _.value && (F(), ht(() => W()));
    }
    function N() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), L(), ht(() => W()));
    }
    function ae(Z) {
      if (!Z) return "Unknown";
      const we = Z / (1024 * 1024 * 1024);
      return we >= 1 ? `${we.toFixed(2)} GB` : `${(Z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Z, we) => {
      var be, Me, ze;
      return a(), r("div", Nh, [
        t("div", Uh, [
          t("div", zh, [
            t("h3", Fh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Bh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Vh, f(b.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), D(Mr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: we[0] || (we[0] = (Ue) => E(c.value - 1)),
          onNext: we[1] || (we[1] = (Ue) => E(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", Wh, [
          x(Ah, {
            filename: _.value.filename,
            "node-type": ((be = _.value.reference) == null ? void 0 : be.node_type) || "Unknown",
            "has-multiple-options": !!((Me = _.value.options) != null && Me.length),
            options: _.value.options,
            choice: (ze = e.modelChoices) == null ? void 0 : ze.get(_.value.filename),
            status: R.value,
            "status-label": I.value,
            onMarkOptional: K,
            onSkip: J,
            onDownloadUrl: ee,
            onSearch: A,
            onOptionSelected: M,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Gh, [...we[5] || (we[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), D(kt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(F, ["self"])
          }, [
            t("div", jh, [
              t("div", { class: "model-modal-header" }, [
                we[6] || (we[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              t("div", Hh, [
                x(Mt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": we[2] || (we[2] = (Ue) => m.value = Ue),
                  placeholder: "Search by filename, category...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Kh, [
                  (a(!0), r(j, null, ye(w.value, (Ue) => (a(), r("div", {
                    key: Ue.hash,
                    class: "model-search-result-item",
                    onClick: (Ye) => X()
                  }, [
                    t("div", Yh, [
                      t("code", Jh, f(Ue.filename), 1)
                    ]),
                    t("div", Qh, [
                      t("span", Xh, f(Ue.category), 1),
                      t("span", Zh, f(ae(Ue.size)), 1)
                    ]),
                    Ue.relative_path ? (a(), r("div", ey, f(Ue.relative_path), 1)) : y("", !0)
                  ], 8, qh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", ty, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", sy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), D(kt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(L, ["self"])
          }, [
            t("div", oy, [
              t("div", { class: "model-modal-header" }, [
                we[7] || (we[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              t("div", ny, [
                t("div", ay, [
                  we[8] || (we[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  x(Mt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": we[3] || (we[3] = (Ue) => v.value = Ue),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", ly, [
                  we[9] || (we[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  x(Mt, {
                    modelValue: g.value,
                    "onUpdate:modelValue": we[4] || (we[4] = (Ue) => g.value = Ue),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", iy, [
                  x(Te, {
                    variant: "secondary",
                    onClick: L
                  }, {
                    default: h(() => [...we[10] || (we[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Te, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: N
                  }, {
                    default: h(() => [...we[11] || (we[11] = [
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
}), cy = /* @__PURE__ */ pe(ry, [["__scopeId", "data-v-5c700bfa"]]), uy = { class: "applying-step" }, dy = {
  key: 0,
  class: "phase-content"
}, fy = {
  key: 1,
  class: "phase-content"
}, my = { class: "phase-description" }, vy = { class: "overall-progress" }, py = { class: "progress-bar" }, gy = { class: "progress-label" }, hy = { class: "install-list" }, yy = { class: "install-icon" }, wy = { key: 0 }, _y = {
  key: 1,
  class: "spinner"
}, ky = { key: 2 }, by = { key: 3 }, $y = {
  key: 0,
  class: "install-error"
}, Cy = {
  key: 2,
  class: "phase-content"
}, xy = { class: "phase-header" }, Sy = { class: "phase-title" }, Iy = { class: "completion-summary" }, Ey = {
  key: 0,
  class: "summary-item success"
}, Ty = { class: "summary-text" }, Py = {
  key: 1,
  class: "summary-item error"
}, Ry = { class: "summary-text" }, My = {
  key: 2,
  class: "failed-list"
}, Dy = { class: "failed-node-id" }, Ly = { class: "failed-error" }, Oy = {
  key: 4,
  class: "summary-item success"
}, Ay = {
  key: 5,
  class: "restart-prompt"
}, Ny = {
  key: 3,
  class: "phase-content error"
}, Uy = { class: "error-message" }, zy = /* @__PURE__ */ me({
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
    function c(u) {
      var d, m;
      return (m = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, g, w;
      return a(), r("div", uy, [
        e.progress.phase === "resolving" ? (a(), r("div", dy, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", fy, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", my, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", vy, [
            t("div", py, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", gy, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", hy, [
            (a(!0), r(j, null, ye(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Ie(["install-item", i(p, _)])
            }, [
              t("span", yy, [
                i(p, _) === "pending" ? (a(), r("span", wy, "○")) : i(p, _) === "installing" ? (a(), r("span", _y, "◌")) : i(p, _) === "complete" ? (a(), r("span", ky, "✓")) : i(p, _) === "failed" ? (a(), r("span", by, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", $y, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", Cy, [
          t("div", xy, [
            t("span", {
              class: Ie(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", Sy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Iy, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", Ey, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", Ty, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", Py, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", Ry, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", My, [
              (a(!0), r(j, null, ye(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", Dy, f(p.node_id), 1),
                t("span", Ly, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", Oy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", Ay, [
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
        ])) : e.progress.phase === "error" ? (a(), r("div", Ny, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", Uy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Fy = /* @__PURE__ */ pe(zy, [["__scopeId", "data-v-5efaae58"]]), By = {
  key: 0,
  class: "loading-state"
}, Vy = {
  key: 1,
  class: "wizard-content"
}, Wy = {
  key: 0,
  class: "step-content"
}, Gy = { class: "analysis-summary" }, jy = { class: "analysis-header" }, Hy = { class: "summary-description" }, Ky = { class: "stats-grid" }, qy = { class: "stat-card" }, Yy = { class: "stat-items" }, Jy = {
  key: 0,
  class: "stat-item success"
}, Qy = { class: "stat-count" }, Xy = {
  key: 1,
  class: "stat-item info"
}, Zy = { class: "stat-count" }, e1 = {
  key: 2,
  class: "stat-item warning"
}, t1 = { class: "stat-count" }, s1 = {
  key: 3,
  class: "stat-item error"
}, o1 = { class: "stat-count" }, n1 = { class: "stat-card" }, a1 = { class: "stat-items" }, l1 = { class: "stat-item success" }, i1 = { class: "stat-count" }, r1 = {
  key: 0,
  class: "stat-item info"
}, c1 = { class: "stat-count" }, u1 = {
  key: 1,
  class: "stat-item warning"
}, d1 = { class: "stat-count" }, f1 = {
  key: 2,
  class: "stat-item warning"
}, m1 = { class: "stat-count" }, v1 = {
  key: 3,
  class: "stat-item error"
}, p1 = { class: "stat-count" }, g1 = {
  key: 0,
  class: "status-message warning"
}, h1 = { class: "status-text" }, y1 = {
  key: 1,
  class: "status-message info"
}, w1 = { class: "status-text" }, _1 = {
  key: 2,
  class: "status-message info"
}, k1 = { class: "status-text" }, b1 = {
  key: 3,
  class: "status-message warning"
}, $1 = { class: "status-text" }, C1 = {
  key: 4,
  class: "status-message success"
}, x1 = {
  key: 5,
  class: "category-mismatch-section"
}, S1 = { class: "mismatch-list" }, I1 = { class: "mismatch-path" }, E1 = { class: "mismatch-target" }, T1 = {
  key: 3,
  class: "step-content"
}, P1 = { class: "review-summary" }, R1 = { class: "review-stats" }, M1 = { class: "review-stat" }, D1 = { class: "stat-value" }, L1 = { class: "review-stat" }, O1 = { class: "stat-value" }, A1 = { class: "review-stat" }, N1 = { class: "stat-value" }, U1 = { class: "review-stat" }, z1 = { class: "stat-value" }, F1 = {
  key: 0,
  class: "review-section"
}, B1 = { class: "section-title" }, V1 = { class: "review-items" }, W1 = { class: "item-name" }, G1 = { class: "item-choice" }, j1 = {
  key: 0,
  class: "choice-badge install"
}, H1 = {
  key: 1,
  class: "choice-badge skip"
}, K1 = {
  key: 1,
  class: "review-section"
}, q1 = { class: "section-title" }, Y1 = { class: "review-items" }, J1 = { class: "item-name" }, Q1 = { class: "item-choice" }, X1 = {
  key: 0,
  class: "choice-badge install"
}, Z1 = {
  key: 1,
  class: "choice-badge optional"
}, e0 = {
  key: 2,
  class: "choice-badge skip"
}, t0 = {
  key: 1,
  class: "choice-badge pending"
}, s0 = {
  key: 2,
  class: "review-section"
}, o0 = { class: "section-title" }, n0 = { class: "review-items download-details" }, a0 = { class: "download-info" }, l0 = { class: "item-name" }, i0 = { class: "download-meta" }, r0 = { class: "download-path" }, c0 = ["title"], u0 = {
  key: 3,
  class: "review-section"
}, d0 = { class: "section-title" }, f0 = { class: "review-items" }, m0 = { class: "item-name" }, v0 = { class: "item-choice" }, p0 = {
  key: 0,
  class: "choice-badge install"
}, g0 = {
  key: 1,
  class: "choice-badge download"
}, h0 = {
  key: 2,
  class: "choice-badge optional"
}, y0 = {
  key: 3,
  class: "choice-badge skip"
}, w0 = {
  key: 4,
  class: "choice-badge skip"
}, _0 = {
  key: 1,
  class: "choice-badge download"
}, k0 = {
  key: 2,
  class: "choice-badge pending"
}, b0 = {
  key: 4,
  class: "no-choices"
}, $0 = /* @__PURE__ */ me({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Rr(), { loadPendingDownloads: v } = xo(), { openFileLocation: g } = tt(), w = k(null), p = k(!1), _ = k(!1), C = k(null), b = k("analysis"), S = k([]), R = k(/* @__PURE__ */ new Map()), I = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Set()), W = U(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return (J.value || A.value) && G.push({ id: "nodes", label: "Nodes" }), M.value && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), b.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), K = U(() => w.value ? w.value.stats.needs_user_input : !1), J = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), M = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), P = U(() => w.value ? w.value.stats.download_intents > 0 : !1), A = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ee = U(() => w.value ? w.value.nodes.resolved.length : 0), F = U(() => w.value ? w.value.models.resolved.filter((G) => G.has_category_mismatch) : []), L = U(() => F.value.length > 0), V = U(() => J.value || A.value ? "nodes" : M.value ? "models" : "review"), X = U(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((fe) => !fe.is_installed), B = /* @__PURE__ */ new Set();
      return G.filter((fe) => B.has(fe.package.package_id) ? !1 : (B.add(fe.package.package_id), !0));
    }), N = U(() => {
      if (!w.value) return [];
      const G = w.value.nodes.resolved.filter((fe) => !fe.is_installed), B = /* @__PURE__ */ new Map();
      for (const fe of G) {
        const Ve = B.get(fe.package.package_id);
        Ve ? Ve.node_types_count++ : B.set(fe.package.package_id, {
          package_id: fe.package.package_id,
          title: fe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), ae = U(() => X.value.filter((G) => !E.value.has(G.package.package_id))), Z = U(() => w.value ? w.value.models.resolved.filter(
      (G) => G.match_type === "download_intent" || G.match_type === "property_download_intent"
    ).map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), we = U(() => {
      if (!w.value) return [];
      const G = w.value.nodes.unresolved.map((fe) => ({
        node_type: fe.reference.node_type,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = w.value.nodes.ambiguous.map((fe) => ({
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
      return [...G, ...B];
    }), be = U(() => {
      if (!w.value) return [];
      const G = w.value.models.unresolved.map((fe) => ({
        filename: fe.reference.widget_value,
        reference: fe.reference,
        reason: fe.reason,
        is_unresolved: !0,
        options: void 0
      })), B = w.value.models.ambiguous.map((fe) => ({
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
      return [...G, ...B];
    }), Me = U(() => {
      const G = be.value, B = Z.value.map((fe) => ({
        filename: fe.filename,
        reference: fe.reference,
        is_download_intent: !0,
        resolved_model: fe.resolved_model,
        download_source: fe.download_source,
        target_path: fe.target_path,
        options: void 0
      }));
      return [...G, ...B];
    }), ze = U(() => Z.value.filter((G) => {
      const B = I.value.get(G.filename);
      return B ? B.action === "download" : !0;
    }).map((G) => ({
      filename: G.filename,
      url: G.download_source,
      target_path: G.target_path
    })));
    function Ue(G, B = 50) {
      return G.length <= B ? G : G.slice(0, B - 3) + "...";
    }
    const Ye = U(() => {
      let G = ae.value.length;
      for (const B of R.value.values())
        B.action === "install" && G++;
      for (const B of I.value.values())
        B.action === "select" && G++;
      return G;
    }), ve = U(() => {
      let G = 0;
      for (const B of I.value.values())
        B.action === "download" && G++;
      for (const B of Z.value)
        I.value.get(B.filename) || G++;
      return G;
    }), oe = U(() => {
      let G = 0;
      for (const B of R.value.values())
        B.action === "optional" && G++;
      for (const B of I.value.values())
        B.action === "optional" && G++;
      return G;
    }), re = U(() => {
      let G = E.value.size;
      for (const B of R.value.values())
        B.action === "skip" && G++;
      for (const B of I.value.values())
        B.action === "skip" && G++;
      for (const B of we.value)
        R.value.has(B.node_type) || G++;
      for (const B of be.value)
        I.value.has(B.filename) || G++;
      return G;
    }), ce = U(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, J.value) {
        const B = we.value.length, fe = we.value.filter(
          (Ve) => R.value.has(Ve.node_type)
        ).length;
        G.nodes = { resolved: fe, total: B };
      }
      if (M.value) {
        const B = Me.value.length, fe = Me.value.filter(
          (Ve) => I.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        G.models = { resolved: fe, total: B };
      }
      if (G.review = { resolved: 1, total: 1 }, b.value === "applying") {
        const B = d.totalFiles || 1, fe = d.completedFiles.length;
        G.applying = { resolved: fe, total: B };
      }
      return G;
    });
    function Se(G) {
      b.value = G;
    }
    function Pe() {
      const G = W.value.findIndex((B) => B.id === b.value);
      G > 0 && (b.value = W.value[G - 1].id);
    }
    function Fe() {
      const G = W.value.findIndex((B) => B.id === b.value);
      G < W.value.length - 1 && (b.value = W.value[G + 1].id);
    }
    async function O() {
      p.value = !0, C.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (G) {
        C.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function T() {
      S.value.includes("analysis") || S.value.push("analysis"), J.value || A.value ? b.value = "nodes" : M.value ? b.value = "models" : b.value = "review";
    }
    function z(G) {
      R.value.set(G, { action: "optional" });
    }
    function H(G) {
      R.value.set(G, { action: "skip" });
    }
    function ne(G, B) {
      var Ve;
      const fe = we.value.find((Ze) => Ze.node_type === G);
      (Ve = fe == null ? void 0 : fe.options) != null && Ve[B] && R.value.set(G, {
        action: "install",
        package_id: fe.options[B].package_id
      });
    }
    function ie(G, B) {
      R.value.set(G, {
        action: "install",
        package_id: B
      });
    }
    function Ce(G) {
      R.value.delete(G);
    }
    function ue(G) {
      E.value.has(G) ? E.value.delete(G) : E.value.add(G);
    }
    function _e(G) {
      I.value.set(G, { action: "optional" });
    }
    function he(G) {
      I.value.set(G, { action: "skip" });
    }
    function Re(G, B) {
      var Ve;
      const fe = be.value.find((Ze) => Ze.filename === G);
      (Ve = fe == null ? void 0 : fe.options) != null && Ve[B] && I.value.set(G, {
        action: "select",
        selected_model: fe.options[B].model
      });
    }
    function Ee(G, B, fe) {
      I.value.set(G, {
        action: "download",
        url: B,
        target_path: fe
      });
    }
    function te(G) {
      I.value.delete(G);
    }
    async function q(G) {
      try {
        await g(G);
      } catch (B) {
        C.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function De() {
      var G;
      _.value = !0, C.value = null, m(), d.phase = "resolving", b.value = "applying";
      try {
        const B = await i(o.workflowName, R.value, I.value, E.value);
        B.models_to_download && B.models_to_download.length > 0 && u(o.workflowName, B.models_to_download);
        const fe = [
          ...B.nodes_to_install || [],
          ...ae.value.map((Ze) => Ze.package.package_id)
        ];
        d.nodesToInstall = [...new Set(fe)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((G = d.nodeInstallProgress) == null ? void 0 : G.completedNodes.some((Ze) => !Ze.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (B) {
        C.value = B instanceof Error ? B.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function $e() {
      n("refresh"), n("restart"), n("close");
    }
    async function ge() {
      var B;
      const G = ((B = d.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((fe) => !fe.success).map((fe) => fe.node_id)) || [];
      if (G.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: G.length
        }, d.nodesToInstall = G, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (fe) {
          d.error = fe instanceof Error ? fe.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(O), (G, B) => (a(), D(dt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (fe) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", By, [...B[2] || (B[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", Vy, [
          x(Yp, {
            steps: W.value,
            "current-step": b.value,
            "completed-steps": S.value,
            "step-stats": ce.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          b.value === "analysis" ? (a(), r("div", Wy, [
            t("div", Gy, [
              t("div", jy, [
                B[3] || (B[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Hy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Ky, [
                t("div", qy, [
                  B[12] || (B[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Yy, [
                    ee.value > 0 ? (a(), r("div", Jy, [
                      B[4] || (B[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Qy, f(ee.value), 1),
                      B[5] || (B[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Xy, [
                      B[6] || (B[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Zy, f(w.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", e1, [
                      B[8] || (B[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", t1, f(w.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", s1, [
                      B[10] || (B[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", o1, f(w.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", n1, [
                  B[23] || (B[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", a1, [
                    t("div", l1, [
                      B[13] || (B[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", i1, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", r1, [
                      B[15] || (B[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", c1, f(w.value.stats.download_intents), 1),
                      B[16] || (B[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    L.value ? (a(), r("div", u1, [
                      B[17] || (B[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", d1, f(F.value.length), 1),
                      B[18] || (B[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", f1, [
                      B[19] || (B[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", m1, f(w.value.models.ambiguous.length), 1),
                      B[20] || (B[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", v1, [
                      B[21] || (B[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", p1, f(w.value.models.unresolved.length), 1),
                      B[22] || (B[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), r("div", g1, [
                B[24] || (B[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", h1, f(we.value.length + be.value.length) + " items need your input", 1)
              ])) : A.value ? (a(), r("div", y1, [
                B[25] || (B[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", w1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(P.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : P.value ? (a(), r("div", _1, [
                B[26] || (B[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", k1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : L.value ? (a(), r("div", b1, [
                B[27] || (B[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", $1, f(F.value.length) + " model" + f(F.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", C1, [...B[28] || (B[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              L.value ? (a(), r("div", x1, [
                B[31] || (B[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", S1, [
                  (a(!0), r(j, null, ye(F.value, (fe) => {
                    var Ve, Ze;
                    return a(), r("div", {
                      key: fe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", I1, f(fe.actual_category) + "/" + f((Ve = fe.model) == null ? void 0 : Ve.filename), 1),
                      B[30] || (B[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", E1, f((Ze = fe.expected_categories) == null ? void 0 : Ze[0]) + "/", 1),
                      fe.file_path ? (a(), D(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (St) => q(fe.file_path)
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
          b.value === "nodes" ? (a(), D(gh, {
            key: 1,
            nodes: we.value,
            "node-choices": R.value,
            "auto-resolved-packages": N.value,
            "skipped-packages": E.value,
            onMarkOptional: z,
            onSkip: H,
            onOptionSelected: ne,
            onManualEntry: ie,
            onClearChoice: Ce,
            onPackageSkip: ue
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          b.value === "models" ? (a(), D(cy, {
            key: 2,
            models: Me.value,
            "model-choices": I.value,
            onMarkOptional: _e,
            onSkip: he,
            onOptionSelected: Re,
            onDownloadUrl: Ee,
            onClearChoice: te
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          b.value === "review" ? (a(), r("div", T1, [
            t("div", P1, [
              B[37] || (B[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", R1, [
                t("div", M1, [
                  t("span", D1, f(Ye.value), 1),
                  B[32] || (B[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", L1, [
                  t("span", O1, f(ve.value), 1),
                  B[33] || (B[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", A1, [
                  t("span", N1, f(oe.value), 1),
                  B[34] || (B[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", U1, [
                  t("span", z1, f(re.value), 1),
                  B[35] || (B[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              N.value.length > 0 ? (a(), r("div", F1, [
                t("h4", B1, "Node Packages (" + f(N.value.length) + ")", 1),
                t("div", V1, [
                  (a(!0), r(j, null, ye(N.value, (fe) => (a(), r("div", {
                    key: fe.package_id,
                    class: "review-item"
                  }, [
                    t("code", W1, f(fe.package_id), 1),
                    t("div", G1, [
                      E.value.has(fe.package_id) ? (a(), r("span", H1, "Skipped")) : (a(), r("span", j1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              we.value.length > 0 ? (a(), r("div", K1, [
                t("h4", q1, "Node Choices (" + f(we.value.length) + ")", 1),
                t("div", Y1, [
                  (a(!0), r(j, null, ye(we.value, (fe) => {
                    var Ve, Ze, St, st;
                    return a(), r("div", {
                      key: fe.node_type,
                      class: "review-item"
                    }, [
                      t("code", J1, f(fe.node_type), 1),
                      t("div", Q1, [
                        R.value.has(fe.node_type) ? (a(), r(j, { key: 0 }, [
                          ((Ve = R.value.get(fe.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", X1, f((Ze = R.value.get(fe.node_type)) == null ? void 0 : Ze.package_id), 1)) : ((St = R.value.get(fe.node_type)) == null ? void 0 : St.action) === "optional" ? (a(), r("span", Z1, " Optional ")) : ((st = R.value.get(fe.node_type)) == null ? void 0 : st.action) === "skip" ? (a(), r("span", e0, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", t0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ze.value.length > 0 ? (a(), r("div", s0, [
                t("h4", o0, "Models to Download (" + f(ze.value.length) + ")", 1),
                t("div", n0, [
                  (a(!0), r(j, null, ye(ze.value, (fe) => (a(), r("div", {
                    key: fe.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", a0, [
                      t("code", l0, f(fe.filename), 1),
                      t("div", i0, [
                        t("span", r0, "→ " + f(fe.target_path), 1),
                        fe.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: fe.url
                        }, f(Ue(fe.url)), 9, c0)) : y("", !0)
                      ])
                    ]),
                    B[36] || (B[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Me.value.length > 0 ? (a(), r("div", u0, [
                t("h4", d0, "Models (" + f(Me.value.length) + ")", 1),
                t("div", f0, [
                  (a(!0), r(j, null, ye(Me.value, (fe) => {
                    var Ve, Ze, St, st, pt, qt, yt;
                    return a(), r("div", {
                      key: fe.filename,
                      class: "review-item"
                    }, [
                      t("code", m0, f(fe.filename), 1),
                      t("div", v0, [
                        I.value.has(fe.filename) ? (a(), r(j, { key: 0 }, [
                          ((Ve = I.value.get(fe.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", p0, f((St = (Ze = I.value.get(fe.filename)) == null ? void 0 : Ze.selected_model) == null ? void 0 : St.filename), 1)) : ((st = I.value.get(fe.filename)) == null ? void 0 : st.action) === "download" ? (a(), r("span", g0, " Download ")) : ((pt = I.value.get(fe.filename)) == null ? void 0 : pt.action) === "optional" ? (a(), r("span", h0, " Optional ")) : ((qt = I.value.get(fe.filename)) == null ? void 0 : qt.action) === "skip" ? (a(), r("span", y0, " Skip ")) : ((yt = I.value.get(fe.filename)) == null ? void 0 : yt.action) === "cancel_download" ? (a(), r("span", w0, " Cancel Download ")) : y("", !0)
                        ], 64)) : fe.is_download_intent ? (a(), r("span", _0, " Pending Download ")) : (a(), r("span", k0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length === 0 && we.value.length === 0 && Me.value.length === 0 ? (a(), r("div", b0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          b.value === "applying" ? (a(), D(Fy, {
            key: 4,
            progress: We(d),
            onRestart: $e,
            onRetryFailed: ge
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b.value !== "analysis" && b.value !== "applying" ? (a(), D(Te, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Pe
        }, {
          default: h(() => [...B[38] || (B[38] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        B[41] || (B[41] = t("div", { class: "footer-spacer" }, null, -1)),
        b.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (a(), D(Te, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (fe) => n("close"))
        }, {
          default: h(() => [
            $(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "analysis" ? (a(), D(Te, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: T
        }, {
          default: h(() => [
            $(f(V.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        b.value === "nodes" ? (a(), D(Te, {
          key: 3,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [
            $(f(M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        b.value === "models" ? (a(), D(Te, {
          key: 4,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [...B[39] || (B[39] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        b.value === "review" ? (a(), D(Te, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: De
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
}), C0 = /* @__PURE__ */ pe($0, [["__scopeId", "data-v-40d8d5a8"]]), x0 = { class: "search-input-wrapper" }, S0 = ["value", "placeholder"], I0 = /* @__PURE__ */ me({
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
    return Qe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), r("div", x0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Ht(u, ["escape"])
      }, null, 40, S0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), E0 = /* @__PURE__ */ pe(I0, [["__scopeId", "data-v-266f857a"]]), T0 = { class: "search-bar" }, P0 = /* @__PURE__ */ me({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", T0, [
      x(E0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), So = /* @__PURE__ */ pe(P0, [["__scopeId", "data-v-3d51bbfd"]]), R0 = { class: "section-group" }, M0 = {
  key: 0,
  class: "section-content"
}, D0 = /* @__PURE__ */ me({
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
    return (c, u) => (a(), r("section", R0, [
      x(Nt, {
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
      !e.collapsible || l.value ? (a(), r("div", M0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ pe(D0, [["__scopeId", "data-v-c48e33ed"]]), L0 = { class: "item-header" }, O0 = {
  key: 0,
  class: "item-icon"
}, A0 = { class: "item-info" }, N0 = {
  key: 0,
  class: "item-title"
}, U0 = {
  key: 1,
  class: "item-subtitle"
}, z0 = {
  key: 0,
  class: "item-details"
}, F0 = {
  key: 1,
  class: "item-actions"
}, B0 = /* @__PURE__ */ me({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, n = U(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), r("div", {
      class: Ie(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", L0, [
        l.$slots.icon ? (a(), r("span", O0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", A0, [
          l.$slots.title ? (a(), r("div", N0, [
            Ke(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", U0, [
            Ke(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", z0, [
        Ke(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", F0, [
        Ke(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ pe(B0, [["__scopeId", "data-v-cc435e0e"]]), V0 = { class: "loading-state" }, W0 = { class: "loading-message" }, G0 = /* @__PURE__ */ me({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", V0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", W0, f(e.message), 1)
    ]));
  }
}), Ms = /* @__PURE__ */ pe(G0, [["__scopeId", "data-v-ad8436c9"]]), j0 = { class: "error-state" }, H0 = { class: "error-message" }, K0 = /* @__PURE__ */ me({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", j0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", H0, f(e.message), 1),
      e.retry ? (a(), D(de, {
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
}), Ds = /* @__PURE__ */ pe(K0, [["__scopeId", "data-v-5397be48"]]), q0 = /* @__PURE__ */ me({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = U(
      () => i.value.filter((N) => N.status === "broken")
    ), C = U(
      () => i.value.filter((N) => N.status === "new")
    ), b = U(
      () => i.value.filter((N) => N.status === "modified")
    ), S = U(
      () => i.value.filter((N) => N.status === "synced")
    ), R = U(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter((ae) => ae.name.toLowerCase().includes(N));
    }), I = U(
      () => _.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = U(
      () => C.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), W = U(
      () => b.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = U(
      () => S.value.filter(
        (N) => !d.value.trim() || N.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), J = U(
      () => v.value ? K.value : K.value.slice(0, 5)
    );
    async function M(N = !1) {
      c.value = !0, u.value = null;
      try {
        i.value = await l(N);
      } catch (ae) {
        u.value = ae instanceof Error ? ae.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: M });
    function P(N) {
      p.value = N, g.value = !0;
    }
    function A(N) {
      p.value = N, w.value = !0;
    }
    function ee() {
      n("refresh");
    }
    async function F() {
      w.value = !1, await M(!0);
    }
    async function L() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function V(N) {
      const ae = [];
      return N.missing_nodes > 0 && ae.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && ae.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && ae.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && ae.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), ae.length > 0 ? ae.join(", ") : "Has issues";
    }
    function X(N) {
      const ae = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : ae || "Unknown";
    }
    return Qe(M), (N, ae) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          x(So, {
            modelValue: d.value,
            "onUpdate:modelValue": ae[0] || (ae[0] = (Z) => d.value = Z),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), D(Ms, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), D(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: M
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            I.value.length ? (a(), D(ct, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(I.value, (Z) => (a(), D(Rt, {
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
                    $(f(V(Z)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (we) => A(Z.name)
                    }, {
                      default: h(() => [...ae[8] || (ae[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => P(Z.name)
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
            E.value.length ? (a(), D(ct, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(E.value, (Z) => (a(), D(Rt, {
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
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => P(Z.name)
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
            W.value.length ? (a(), D(ct, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(W.value, (Z) => (a(), D(Rt, {
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
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => P(Z.name)
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
            K.value.length ? (a(), D(ct, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ae[2] || (ae[2] = (Z) => m.value = Z)
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(J.value, (Z) => (a(), D(Rt, {
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
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => P(Z.name)
                    }, {
                      default: h(() => [...ae[13] || (ae[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && K.value.length > 5 ? (a(), D(de, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ae[1] || (ae[1] = (Z) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + f(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            R.value.length ? y("", !0) : (a(), D(as, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), D(Np, {
        key: 0,
        "workflow-name": p.value,
        onClose: ae[3] || (ae[3] = (Z) => g.value = !1),
        onResolve: ae[4] || (ae[4] = (Z) => A(p.value)),
        onRefresh: ae[5] || (ae[5] = (Z) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), D(C0, {
        key: 1,
        "workflow-name": p.value,
        onClose: F,
        onInstall: ee,
        onRefresh: ae[6] || (ae[6] = (Z) => n("refresh")),
        onRestart: L
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Y0 = /* @__PURE__ */ pe(q0, [["__scopeId", "data-v-fa3f076e"]]), J0 = /* @__PURE__ */ me({
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
}), un = /* @__PURE__ */ pe(J0, [["__scopeId", "data-v-ccb7816e"]]), Q0 = {
  key: 0,
  class: "model-details"
}, X0 = { class: "detail-section" }, Z0 = { class: "detail-row" }, ew = { class: "detail-value mono" }, tw = { class: "detail-row" }, sw = { class: "detail-value mono" }, ow = { class: "detail-row" }, nw = { class: "detail-value mono" }, aw = { class: "detail-row" }, lw = { class: "detail-value" }, iw = { class: "detail-row" }, rw = { class: "detail-value" }, cw = { class: "detail-row" }, uw = { class: "detail-value" }, dw = { class: "detail-section" }, fw = { class: "section-header" }, mw = {
  key: 0,
  class: "locations-list"
}, vw = { class: "location-path mono" }, pw = {
  key: 0,
  class: "location-modified"
}, gw = ["onClick"], hw = {
  key: 1,
  class: "empty-state"
}, yw = { class: "detail-section" }, ww = { class: "section-header" }, _w = {
  key: 0,
  class: "sources-list"
}, kw = { class: "source-type" }, bw = ["href"], $w = ["disabled", "onClick"], Cw = {
  key: 1,
  class: "empty-state"
}, xw = { class: "add-source-form" }, Sw = ["disabled"], Iw = {
  key: 2,
  class: "source-error"
}, Ew = {
  key: 3,
  class: "source-success"
}, Tw = /* @__PURE__ */ me({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = tt(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let b = null;
    function S(M, P = "success", A = 2e3) {
      b && clearTimeout(b), C.value = { message: M, type: P }, b = setTimeout(() => {
        C.value = null;
      }, A);
    }
    function R(M) {
      if (!M) return "Unknown";
      const P = 1024 * 1024 * 1024, A = 1024 * 1024;
      return M >= P ? `${(M / P).toFixed(1)} GB` : M >= A ? `${(M / A).toFixed(0)} MB` : `${(M / 1024).toFixed(0)} KB`;
    }
    function I(M) {
      navigator.clipboard.writeText(M), S("Copied to clipboard!");
    }
    async function E(M) {
      try {
        await c(M), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await J();
        } catch (M) {
          p.value = M instanceof Error ? M.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function K(M) {
      if (u.value) {
        w.value = M, p.value = null, _.value = null;
        try {
          await i(u.value.hash, M), S("Source removed"), await J();
        } catch (P) {
          p.value = P instanceof Error ? P.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function J() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(J), (M, P) => {
      var A;
      return a(), r(j, null, [
        x(dt, {
          title: `Model Details: ${((A = u.value) == null ? void 0 : A.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: P[5] || (P[5] = (ee) => M.$emit("close"))
        }, {
          body: h(() => {
            var ee, F, L, V;
            return [
              u.value ? (a(), r("div", Q0, [
                t("section", X0, [
                  t("div", Z0, [
                    P[6] || (P[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", ew, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[0] || (P[0] = (X) => I(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", tw, [
                    P[7] || (P[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", sw, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[1] || (P[1] = (X) => I(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", ow, [
                    P[8] || (P[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", nw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: P[2] || (P[2] = (X) => I(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", aw, [
                    P[9] || (P[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", lw, f(R(u.value.size)), 1)
                  ]),
                  t("div", iw, [
                    P[10] || (P[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", rw, f(u.value.category), 1)
                  ]),
                  t("div", cw, [
                    P[11] || (P[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", uw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", dw, [
                  t("h4", fw, "Locations (" + f(((ee = u.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (F = u.value.locations) != null && F.length ? (a(), r("div", mw, [
                    (a(!0), r(j, null, ye(u.value.locations, (X, N) => (a(), r("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      t("span", vw, f(X.path), 1),
                      X.modified ? (a(), r("span", pw, "Modified: " + f(X.modified), 1)) : y("", !0),
                      X.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ae) => E(X.path)
                      }, " Open File Location ", 8, gw)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", hw, "No locations found"))
                ]),
                t("section", yw, [
                  t("h4", ww, "Download Sources (" + f(((L = u.value.sources) == null ? void 0 : L.length) || 0) + ")", 1),
                  (V = u.value.sources) != null && V.length ? (a(), r("div", _w, [
                    (a(!0), r(j, null, ye(u.value.sources, (X, N) => (a(), r("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      t("span", kw, f(X.type) + ":", 1),
                      t("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(X.url), 9, bw),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === X.url,
                        onClick: (ae) => K(X.url)
                      }, f(w.value === X.url ? "..." : "×"), 9, $w)
                    ]))), 128))
                  ])) : (a(), r("div", Cw, " No download sources configured ")),
                  t("div", xw, [
                    qe(t("input", {
                      "onUpdate:modelValue": P[3] || (P[3] = (X) => v.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: W
                    }, f(g.value ? "Adding..." : "Add Source"), 9, Sw)
                  ]),
                  p.value ? (a(), r("p", Iw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", Ew, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: P[4] || (P[4] = (ee) => M.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), D(kt, { to: "body" }, [
          C.value ? (a(), r("div", {
            key: 0,
            class: Ie(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), nl = /* @__PURE__ */ pe(Tw, [["__scopeId", "data-v-f15cbb56"]]), Pw = ["disabled"], Rw = { class: "dropdown-value" }, Mw = ["onClick"], Dw = {
  key: 0,
  class: "dropdown-error"
}, Lw = /* @__PURE__ */ me({
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
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function m(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = U(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((R) => d(R) === o.modelValue);
      return S ? m(S) : String(o.modelValue);
    });
    function g() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function p(S) {
      n("update:modelValue", d(S)), w();
    }
    function _() {
      if (!i.value) return;
      const S = i.value.getBoundingClientRect(), R = window.innerHeight, I = R - S.bottom, E = S.top, W = Math.min(300, o.options.length * 36 + 8), K = I < W && E > I;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...K ? { bottom: `${R - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    ft(l, async (S) => {
      S && (await ht(), _());
    });
    function C() {
      l.value && _();
    }
    function b(S) {
      S.key === "Escape" && l.value && w();
    }
    return Qe(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", b);
    }), Gs(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", b);
    }), (S, R) => (a(), r("div", {
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
        t("span", Rw, f(v.value), 1),
        R[0] || (R[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Pw),
      (a(), D(kt, { to: "body" }, [
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
          (a(!0), r(j, null, ye(e.options, (I) => (a(), r("div", {
            key: d(I),
            class: Ie(["dropdown-option", { selected: d(I) === e.modelValue }]),
            onClick: (E) => p(I)
          }, f(m(I)), 11, Mw))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), r("span", Dw, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Ow = /* @__PURE__ */ pe(Lw, [["__scopeId", "data-v-857e085b"]]);
function Aw(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Nw(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!Aw(o.hostname)) return { kind: "unknown" };
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
function Uw(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function zw(e, s, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${Uw(o)}`;
}
const Fw = { class: "hf-file-browser" }, Bw = { class: "browser-header" }, Vw = { class: "repo-info" }, Ww = { class: "repo-id" }, Gw = {
  key: 0,
  class: "revision-pill"
}, jw = {
  key: 0,
  class: "loading-state"
}, Hw = {
  key: 1,
  class: "error-state"
}, Kw = { class: "toolbar" }, qw = { class: "toolbar-actions" }, Yw = { class: "file-list-container" }, Jw = {
  key: 0,
  class: "file-list-header"
}, Qw = ["checked", "indeterminate"], Xw = { class: "sort-indicator" }, Zw = { class: "sort-indicator" }, e_ = {
  key: 1,
  class: "empty-state"
}, t_ = {
  key: 2,
  class: "file-list"
}, s_ = ["onClick"], o_ = ["checked", "onChange"], n_ = { class: "file-path" }, a_ = { class: "file-size" }, l_ = { class: "destination-section" }, i_ = { class: "destination-row" }, r_ = {
  key: 0,
  class: "path-separator"
}, c_ = { class: "action-bar" }, u_ = { class: "summary-info" }, d_ = { class: "summary-count" }, f_ = { class: "summary-size" }, m_ = /* @__PURE__ */ me({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = tt(), c = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k("name"), p = k(!0), _ = k(""), C = k(""), b = k(""), S = k([]), R = k(!1);
    let I = !1;
    const E = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, W = U(() => {
      let ve = c.value;
      if (o.initialPath) {
        const oe = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        ve = ve.filter((re) => re.path.startsWith(oe) || re.path === o.initialPath);
      }
      if (g.value && (ve = ve.filter((oe) => oe.is_model_file)), v.value.trim()) {
        const oe = v.value.toLowerCase();
        ve = ve.filter((re) => re.path.toLowerCase().includes(oe));
      }
      return ve;
    }), K = U(() => {
      const ve = [...W.value];
      return ve.sort((oe, re) => {
        let ce;
        return w.value === "name" ? ce = oe.path.localeCompare(re.path) : ce = oe.size - re.size, p.value ? ce : -ce;
      }), ve;
    }), J = U(() => W.value.length === 0 ? !1 : W.value.every((ve) => u.value.has(ve.path))), M = U(() => W.value.some((ve) => u.value.has(ve.path))), P = U(() => {
      const ve = S.value.map((oe) => ({
        label: oe,
        value: oe
      }));
      return ve.push({ label: "Custom path...", value: "__custom__" }), ve;
    }), A = U(() => _.value === "__custom__" ? b.value.trim().length > 0 : _.value.length > 0), ee = U(() => {
      let ve = 0;
      for (const oe of u.value) {
        const re = c.value.find((ce) => ce.path === oe);
        re && (ve += re.size);
      }
      return ve;
    });
    function F(ve) {
      if (ve === 0) return "0 B";
      const oe = 1024 * 1024 * 1024, re = 1024 * 1024, ce = 1024;
      return ve >= oe ? `${(ve / oe).toFixed(2)} GB` : ve >= re ? `${(ve / re).toFixed(1)} MB` : ve >= ce ? `${(ve / ce).toFixed(0)} KB` : `${ve} B`;
    }
    function L(ve) {
      const oe = ve.match(E);
      return oe ? `${oe[1]}${oe[4]}` : null;
    }
    function V(ve) {
      const oe = new Set(u.value), re = oe.has(ve.path), ce = ve.shard_group || L(ve.path);
      if (ce) {
        const Se = c.value.filter((Pe) => (Pe.shard_group || L(Pe.path)) === ce);
        re ? Se.forEach((Pe) => oe.delete(Pe.path)) : Se.forEach((Pe) => oe.add(Pe.path));
      } else
        re ? oe.delete(ve.path) : oe.add(ve.path);
      u.value = oe;
    }
    function X() {
      const ve = new Set(u.value);
      for (const oe of W.value)
        oe.is_model_file && ve.add(oe.path);
      u.value = ve;
    }
    function N() {
      u.value = /* @__PURE__ */ new Set();
    }
    function ae() {
      if (J.value) {
        const ve = new Set(u.value);
        for (const oe of W.value)
          ve.delete(oe.path);
        u.value = ve;
      } else {
        const ve = new Set(u.value);
        for (const oe of W.value)
          ve.add(oe.path);
        u.value = ve;
      }
    }
    function Z(ve) {
      w.value === ve ? p.value = !p.value : (w.value = ve, p.value = !0);
    }
    function we(ve) {
      const oe = ve.split("/");
      return oe.length >= 2 ? oe[oe.length - 2] : null;
    }
    function be() {
      if (R.value || u.value.size === 0) return;
      const ve = /* @__PURE__ */ new Set();
      for (const ce of u.value) {
        const Se = we(ce);
        Se && ve.add(Se.toLowerCase());
      }
      if (ve.size !== 1) return;
      const oe = [...ve][0], re = S.value.find(
        (ce) => ce.toLowerCase() === oe
      );
      re && re !== _.value && (I = !0, _.value = re, ht(() => {
        I = !1;
      }));
    }
    function Me() {
      return _.value === "__custom__" ? b.value.trim() : C.value.trim() ? `${_.value}/${C.value.trim()}` : _.value;
    }
    function ze() {
      if (u.value.size === 0 || !A.value) return;
      const ve = Me(), oe = [];
      for (const re of u.value) {
        const ce = c.value.find((Se) => Se.path === re);
        ce && oe.push({
          url: zw(o.repoId, o.revision, ce.path),
          destination: ve,
          filename: ce.path.split("/").pop() || ce.path
        });
      }
      n("queue", oe);
    }
    async function Ue() {
      if (o.repoId) {
        d.value = !0, m.value = null;
        try {
          const ve = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, oe = await l(ve);
          if (c.value = oe.files, o.preselectedFile) {
            const re = c.value.find((ce) => ce.path === o.preselectedFile);
            re && V(re);
          }
        } catch (ve) {
          m.value = ve instanceof Error ? ve.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ye() {
      try {
        const ve = await i();
        S.value = ve.directories, ve.directories.length > 0 && !_.value && (_.value = ve.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return ft(() => [o.repoId, o.revision], () => {
      o.repoId && Ue();
    }, { immediate: !1 }), ft(() => o.repoId, () => {
      R.value = !1;
    }), ft(u, () => {
      be();
    }, { deep: !0 }), ft(S, () => {
      S.value.length > 0 && u.value.size > 0 && be();
    }), ft(_, (ve, oe) => {
      I || oe === "" || (R.value = !0);
    }), Qe(() => {
      Ue(), Ye();
    }), (ve, oe) => (a(), r("div", Fw, [
      t("div", Bw, [
        t("button", {
          class: "back-btn",
          onClick: oe[0] || (oe[0] = (re) => ve.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Vw, [
          t("span", Ww, f(e.repoId), 1),
          e.revision ? (a(), r("span", Gw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), r("div", jw, " Loading repository files... ")) : m.value ? (a(), r("div", Hw, f(m.value), 1)) : (a(), r(j, { key: 2 }, [
        t("div", Kw, [
          x(Mt, {
            modelValue: v.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (re) => v.value = re),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", qw, [
            t("button", {
              class: Ie(["toggle-btn", { active: g.value }]),
              onClick: oe[2] || (oe[2] = (re) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: N
            }, "Clear")
          ])
        ]),
        t("div", Yw, [
          W.value.length > 0 ? (a(), r("div", Jw, [
            t("input", {
              type: "checkbox",
              checked: J.value,
              indeterminate: M.value && !J.value,
              class: "file-checkbox",
              onChange: ae
            }, null, 40, Qw),
            t("span", {
              class: "header-name",
              onClick: oe[3] || (oe[3] = (re) => Z("name"))
            }, [
              oe[9] || (oe[9] = $(" Name ", -1)),
              t("span", Xw, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: oe[4] || (oe[4] = (re) => Z("size"))
            }, [
              oe[10] || (oe[10] = $(" Size ", -1)),
              t("span", Zw, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          W.value.length === 0 ? (a(), r("div", e_, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), r("div", t_, [
            (a(!0), r(j, null, ye(K.value, (re) => (a(), r("div", {
              key: re.path,
              class: Ie(["file-item", { selected: u.value.has(re.path) }]),
              onClick: (ce) => V(re)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(re.path),
                class: "file-checkbox",
                onClick: oe[5] || (oe[5] = rt(() => {
                }, ["stop"])),
                onChange: (ce) => V(re)
              }, null, 40, o_),
              t("span", n_, f(re.path), 1),
              t("span", a_, f(F(re.size)), 1)
            ], 10, s_))), 128))
          ]))
        ]),
        t("div", l_, [
          oe[11] || (oe[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", i_, [
            x(Ow, {
              modelValue: _.value,
              "onUpdate:modelValue": oe[6] || (oe[6] = (re) => _.value = re),
              options: P.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), r("span", r_, "/")) : y("", !0),
            _.value !== "__custom__" ? (a(), D(Mt, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": oe[7] || (oe[7] = (re) => C.value = re),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          _.value === "__custom__" ? (a(), D(Mt, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": oe[8] || (oe[8] = (re) => b.value = re),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", c_, [
          t("div", u_, [
            t("span", d_, f(u.value.size) + " file(s) selected", 1),
            t("span", f_, f(F(ee.value)), 1)
          ]),
          x(Te, {
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
}), v_ = /* @__PURE__ */ pe(m_, [["__scopeId", "data-v-183acebc"]]), p_ = { class: "huggingface-tab" }, g_ = {
  key: 0,
  class: "search-section"
}, h_ = { class: "search-bar" }, y_ = {
  key: 1,
  class: "search-results"
}, w_ = {
  key: 0,
  class: "loading-state"
}, __ = {
  key: 1,
  class: "error-state"
}, k_ = {
  key: 2,
  class: "results-list"
}, b_ = ["onClick"], $_ = { class: "repo-header" }, C_ = { class: "repo-id" }, x_ = { class: "repo-stats" }, S_ = {
  class: "stat",
  title: "Downloads"
}, I_ = {
  class: "stat",
  title: "Likes"
}, E_ = {
  key: 0,
  class: "repo-desc"
}, T_ = {
  key: 1,
  class: "repo-tags"
}, P_ = {
  key: 3,
  class: "empty-state"
}, R_ = {
  key: 4,
  class: "hint-state"
}, M_ = /* @__PURE__ */ me({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s } = tt(), o = k("search"), n = k(""), l = k([]), i = k(!1), c = k(null), u = k(!1), d = k(null), m = k("main"), v = k(), g = k();
    function w(b) {
      return b >= 1e6 ? `${(b / 1e6).toFixed(1)}M` : b >= 1e3 ? `${(b / 1e3).toFixed(1)}K` : String(b);
    }
    async function p() {
      const b = n.value.trim();
      if (!b) return;
      c.value = null;
      const S = Nw(b);
      if (S.kind === "file" && S.repoId && S.path) {
        d.value = S.repoId, m.value = S.revision || "main";
        const R = S.path.split("/");
        R.length > 1 ? v.value = R.slice(0, -1).join("/") : v.value = void 0, g.value = S.path, o.value = "browse";
        return;
      }
      if (S.kind === "repo" && S.repoId) {
        d.value = S.repoId, m.value = S.revision || "main", v.value = S.path, g.value = void 0, o.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(b) && !b.includes("://")) {
        d.value = b, m.value = "main", v.value = void 0, g.value = void 0, o.value = "browse";
        return;
      }
      i.value = !0;
      try {
        const R = await s(b);
        l.value = R.results, u.value = !0;
      } catch (R) {
        c.value = R instanceof Error ? R.message : "Search failed";
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
    return (b, S) => (a(), r("div", p_, [
      o.value === "search" ? (a(), r("div", g_, [
        t("div", h_, [
          x(Mt, {
            modelValue: n.value,
            "onUpdate:modelValue": S[0] || (S[0] = (R) => n.value = R),
            placeholder: "Search repos, paste URL, or enter user/repo...",
            onKeydown: Ht(p, ["enter"])
          }, null, 8, ["modelValue"]),
          x(Te, {
            variant: "primary",
            onClick: p,
            loading: i.value
          }, {
            default: h(() => [...S[2] || (S[2] = [
              $(" Search ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])) : y("", !0),
      o.value === "search" ? (a(), r("div", y_, [
        i.value ? (a(), r("div", w_, " Searching HuggingFace... ")) : c.value ? (a(), r("div", __, f(c.value), 1)) : l.value.length > 0 ? (a(), r("div", k_, [
          (a(!0), r(j, null, ye(l.value, (R) => (a(), r("div", {
            key: R.repo_id,
            class: "repo-card",
            onClick: (I) => _(R.repo_id)
          }, [
            t("div", $_, [
              t("span", C_, f(R.repo_id), 1),
              t("div", x_, [
                t("span", S_, [
                  S[3] || (S[3] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(w(R.downloads)), 1)
                ]),
                t("span", I_, [
                  S[4] || (S[4] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(w(R.likes)), 1)
                ])
              ])
            ]),
            R.description ? (a(), r("p", E_, f(R.description), 1)) : y("", !0),
            R.tags.length > 0 ? (a(), r("div", T_, [
              (a(!0), r(j, null, ye(R.tags.slice(0, 5), (I) => (a(), r("span", {
                key: I,
                class: "tag"
              }, f(I), 1))), 128))
            ])) : y("", !0)
          ], 8, b_))), 128))
        ])) : u.value ? (a(), r("div", P_, " No repositories found ")) : (a(), r("div", R_, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), D(v_, {
        key: 2,
        "repo-id": d.value,
        revision: m.value,
        "initial-path": v.value,
        "preselected-file": g.value,
        onBack: C,
        onQueue: S[1] || (S[1] = (R) => b.$emit("queue", R))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"]))
    ]));
  }
}), D_ = /* @__PURE__ */ pe(M_, [["__scopeId", "data-v-d7828203"]]), L_ = { class: "civitai-tab" }, O_ = /* @__PURE__ */ me({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (a(), r("div", L_, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), A_ = /* @__PURE__ */ pe(O_, [["__scopeId", "data-v-44948051"]]), N_ = { class: "direct-url-tab" }, U_ = { class: "input-group" }, z_ = { class: "input-group" }, F_ = {
  key: 0,
  class: "error"
}, B_ = { class: "actions" }, V_ = /* @__PURE__ */ me({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = k(""), i = U(() => {
      const d = l.value.trim();
      if (!d) return null;
      const m = d.replace(/\\/g, "/").split("/").pop() || "";
      return m.includes(".") && !m.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = U(() => n.value.trim() !== "" && l.value.trim() !== "" && !i.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, m) => (a(), r("div", N_, [
      t("div", U_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        x(Mt, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", z_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        x(Mt, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        i.value ? (a(), r("p", F_, f(i.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", B_, [
        x(Te, {
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
}), W_ = /* @__PURE__ */ pe(V_, [["__scopeId", "data-v-01def7aa"]]), G_ = { class: "download-modal" }, j_ = { class: "tab-bar" }, H_ = ["onClick"], K_ = { class: "tab-content" }, q_ = /* @__PURE__ */ me({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: n } = xo(), l = [
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
    return (m, v) => e.show ? (a(), D(dt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", G_, [
          t("div", j_, [
            (a(), r(j, null, ye(l, (g) => t("button", {
              key: g.id,
              class: Ie(["tab-btn", { active: i.value === g.id }]),
              onClick: (w) => i.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, H_)), 64))
          ]),
          t("div", K_, [
            i.value === "huggingface" ? (a(), D(D_, {
              key: 0,
              onQueue: c
            })) : i.value === "civitai" ? (a(), D(A_, { key: 1 })) : i.value === "direct" ? (a(), D(W_, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), Dr = /* @__PURE__ */ pe(q_, [["__scopeId", "data-v-90a9f401"]]), Y_ = /* @__PURE__ */ me({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = tt(), i = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(!1);
    function _() {
      g.value = !1, o("navigate", "model-index");
    }
    const C = U(
      () => i.value.reduce((M, P) => M + (P.size || 0), 0)
    ), b = U(() => {
      if (!v.value.trim()) return i.value;
      const M = v.value.toLowerCase();
      return i.value.filter((P) => P.filename.toLowerCase().includes(M));
    }), S = U(() => {
      if (!v.value.trim()) return c.value;
      const M = v.value.toLowerCase();
      return c.value.filter((P) => P.filename.toLowerCase().includes(M));
    }), R = U(() => {
      const M = {};
      for (const A of b.value) {
        const ee = A.type || "other";
        M[ee] || (M[ee] = []), M[ee].push(A);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(M).sort(([A], [ee]) => {
        const F = P.indexOf(A), L = P.indexOf(ee);
        return F >= 0 && L >= 0 ? F - L : F >= 0 ? -1 : L >= 0 ? 1 : A.localeCompare(ee);
      }).map(([A, ee]) => ({ type: A, models: ee }));
    });
    function I(M) {
      if (!M) return "Unknown";
      const P = M / (1024 * 1024);
      return P >= 1024 ? `${(P / 1024).toFixed(1)} GB` : `${P.toFixed(0)} MB`;
    }
    function E(M) {
      w.value = M.hash || M.filename;
    }
    function W(M) {
      o("navigate", "model-index");
    }
    function K(M) {
      alert(`Download functionality not yet implemented for ${M}`);
    }
    async function J() {
      d.value = !0, m.value = null;
      try {
        const M = await n();
        i.value = M, c.value = [];
        const P = await l();
        u.value = P.environment || "production";
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(J), (M, P) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[1] || (P[1] = (A) => g.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: P[0] || (P[0] = (A) => p.value = !0)
              }, {
                default: h(() => [...P[6] || (P[6] = [
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
          x(So, {
            modelValue: v.value,
            "onUpdate:modelValue": P[2] || (P[2] = (A) => v.value = A),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), D(Ms, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), D(Ds, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length ? (a(), D(un, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(i.value.length) + " models • " + f(I(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, ye(R.value, (A) => (a(), D(ct, {
              key: A.type,
              title: A.type.toUpperCase(),
              count: A.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(A.models, (ee) => (a(), D(Rt, {
                  key: ee.hash || ee.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...P[7] || (P[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(ee.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(I(ee.size)), 1)
                  ]),
                  details: h(() => [
                    x(mt, {
                      label: "Used by:",
                      value: (ee.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    x(mt, {
                      label: "Path:",
                      value: ee.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => E(ee)
                    }, {
                      default: h(() => [...P[8] || (P[8] = [
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
            S.value.length ? (a(), D(ct, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(S.value, (A) => (a(), D(Rt, {
                  key: A.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...P[9] || (P[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(A.filename), 1)
                  ]),
                  subtitle: h(() => [...P[10] || (P[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ee;
                    return [
                      x(mt, {
                        label: "Required by:",
                        value: ((ee = A.workflow_names) == null ? void 0 : ee.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => K(A.filename)
                    }, {
                      default: h(() => [...P[11] || (P[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => W(A.filename)
                    }, {
                      default: h(() => [...P[12] || (P[12] = [
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
            !b.value.length && !S.value.length ? (a(), D(as, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      x(ls, {
        show: g.value,
        title: "About Environment Models",
        onClose: P[3] || (P[3] = (A) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            P[13] || (P[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            P[14] || (P[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          x(de, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...P[15] || (P[15] = [
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
        onClose: P[4] || (P[4] = (A) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      x(Dr, {
        show: p.value,
        onClose: P[5] || (P[5] = (A) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), J_ = /* @__PURE__ */ pe(Y_, [["__scopeId", "data-v-af3ca736"]]), Q_ = {
  key: 0,
  class: "indexing-progress"
}, X_ = { class: "progress-info" }, Z_ = { class: "progress-label" }, ek = { class: "progress-count" }, tk = { class: "progress-bar" }, sk = { class: "modal-content" }, ok = { class: "modal-header" }, nk = { class: "modal-body" }, ak = { class: "input-group" }, lk = { class: "current-path" }, ik = { class: "input-group" }, rk = { class: "modal-footer" }, ck = /* @__PURE__ */ me({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = tt(), c = s, u = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), C = k(null), b = k(""), S = k(!1), R = k(!1), I = k(null), E = U(
      () => u.value.reduce((L, V) => L + (V.size || 0), 0)
    ), W = U(() => {
      if (!g.value.trim()) return u.value;
      const L = g.value.toLowerCase();
      return u.value.filter((V) => {
        const X = V, N = V.sha256 || X.sha256_hash || "";
        return V.filename.toLowerCase().includes(L) || N.toLowerCase().includes(L);
      });
    }), K = U(() => {
      const L = {};
      for (const X of W.value) {
        const N = X.type || "other";
        L[N] || (L[N] = []), L[N].push(X);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([X], [N]) => {
        const ae = V.indexOf(X), Z = V.indexOf(N);
        return ae >= 0 && Z >= 0 ? ae - Z : ae >= 0 ? -1 : Z >= 0 ? 1 : X.localeCompare(N);
      }).map(([X, N]) => ({ type: X, models: N }));
    });
    function J(L) {
      if (!L) return "Unknown";
      const V = 1024 * 1024 * 1024, X = 1024 * 1024;
      return L >= V ? `${(L / V).toFixed(1)} GB` : L >= X ? `${(L / X).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function M(L) {
      p.value = L.hash || L.filename;
    }
    async function P() {
      m.value = !0, v.value = null;
      try {
        const L = await n();
        await ee(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function A() {
      if (b.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const L = await i(b.value.trim());
          C.value = L.path, _.value = !1, b.value = "", await ee(), console.log(`Directory changed: ${L.models_indexed} models indexed`), c("refresh");
        } catch (L) {
          v.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function ee() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function F() {
      try {
        const L = await l();
        C.value = L.path;
      } catch {
      }
    }
    return Qe(() => {
      ee(), F();
    }), (L, V) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: V[2] || (V[2] = (X) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
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
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (X) => _.value = !0)
              }, {
                default: h(() => [...V[11] || (V[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: V[1] || (V[1] = (X) => R.value = !0)
              }, {
                default: h(() => [...V[12] || (V[12] = [
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
          I.value ? (a(), r("div", Q_, [
            t("div", X_, [
              t("span", Z_, f(I.value.message), 1),
              t("span", ek, f(I.value.current) + "/" + f(I.value.total), 1)
            ]),
            t("div", tk, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          x(So, {
            modelValue: g.value,
            "onUpdate:modelValue": V[3] || (V[3] = (X) => g.value = X),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || I.value ? (a(), D(Ms, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (a(), D(Ds, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length ? (a(), D(un, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(J(E.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(j, null, ye(K.value, (X) => (a(), D(ct, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(X.models, (N) => (a(), D(Rt, {
                  key: N.sha256 || N.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...V[13] || (V[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(f(N.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(f(J(N.size)), 1)
                  ]),
                  details: h(() => [
                    x(mt, {
                      label: "Hash:",
                      value: N.hash ? N.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => M(N)
                    }, {
                      default: h(() => [...V[14] || (V[14] = [
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
            W.value.length ? y("", !0) : (a(), D(as, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      x(ls, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: V[4] || (V[4] = (X) => w.value = !1)
      }, {
        content: h(() => [...V[15] || (V[15] = [
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
        onClose: V[5] || (V[5] = (X) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), D(kt, { to: "body" }, [
        _.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: V[9] || (V[9] = rt((X) => _.value = !1, ["self"]))
        }, [
          t("div", sk, [
            t("div", ok, [
              V[16] || (V[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: V[6] || (V[6] = (X) => _.value = !1)
              }, "✕")
            ]),
            t("div", nk, [
              t("div", ak, [
                V[17] || (V[17] = t("label", null, "Current Directory", -1)),
                t("code", lk, f(C.value || "Not set"), 1)
              ]),
              t("div", ik, [
                V[18] || (V[18] = t("label", null, "New Directory Path", -1)),
                x(Mt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": V[7] || (V[7] = (X) => b.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              V[19] || (V[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", rk, [
              x(Te, {
                variant: "secondary",
                onClick: V[8] || (V[8] = (X) => _.value = !1)
              }, {
                default: h(() => [...V[20] || (V[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Te, {
                variant: "primary",
                disabled: !b.value.trim() || S.value,
                loading: S.value,
                onClick: A
              }, {
                default: h(() => [
                  $(f(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      x(Dr, {
        show: R.value,
        onClose: V[10] || (V[10] = (X) => R.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), uk = /* @__PURE__ */ pe(ck, [["__scopeId", "data-v-3705114c"]]), dk = { class: "node-details" }, fk = { class: "status-row" }, mk = {
  key: 0,
  class: "detail-row"
}, vk = { class: "value" }, pk = { class: "detail-row" }, gk = { class: "value" }, hk = {
  key: 1,
  class: "detail-row"
}, yk = { class: "value mono" }, wk = {
  key: 2,
  class: "detail-row"
}, _k = ["href"], kk = {
  key: 3,
  class: "detail-row"
}, bk = { class: "value mono small" }, $k = { class: "detail-row" }, Ck = {
  key: 0,
  class: "value"
}, xk = {
  key: 1,
  class: "workflow-list"
}, Sk = /* @__PURE__ */ me({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), D(dt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", dk, [
          t("div", fk, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", mk, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", vk, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", pk, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", gk, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", hk, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", yk, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", wk, [
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
            ], 8, _k)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", kk, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", bk, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", $k, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Ck, " Not used in any workflows ")) : (a(), r("div", xk, [
              (a(!0), r(j, null, ye(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), Ik = /* @__PURE__ */ pe(Sk, [["__scopeId", "data-v-b342f626"]]), Ek = { class: "dialog-message" }, Tk = {
  key: 0,
  class: "dialog-details"
}, Pk = {
  key: 1,
  class: "dialog-warning"
}, Rk = /* @__PURE__ */ me({
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
    return (s, o) => (a(), D(dt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", Ek, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", Tk, [
          (a(!0), r(j, null, ye(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Pk, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), D(Te, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        x(Te, {
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
}), al = /* @__PURE__ */ pe(Rk, [["__scopeId", "data-v-3670b9f5"]]), Mk = { class: "mismatch-warning" }, Dk = { class: "version-mismatch" }, Lk = { class: "version-actual" }, Ok = { class: "version-expected" }, Ak = { key: 0 }, Nk = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Uk = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, zk = /* @__PURE__ */ me({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: u } = tt(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), C = U(() => {
      if (!g.value.trim()) return d.value.nodes;
      const F = g.value.toLowerCase();
      return d.value.nodes.filter(
        (L) => {
          var V, X;
          return L.name.toLowerCase().includes(F) || ((V = L.description) == null ? void 0 : V.toLowerCase().includes(F)) || ((X = L.repository) == null ? void 0 : X.toLowerCase().includes(F));
        }
      );
    }), b = U(
      () => C.value.filter((F) => F.installed && F.tracked)
    ), S = U(
      () => C.value.filter((F) => !F.installed && F.tracked)
    ), R = U(
      () => C.value.filter((F) => F.installed && !F.tracked)
    );
    function I(F) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[F] || F;
    }
    const E = U(() => o.versionMismatches.length > 0);
    function W(F) {
      return !F.used_in_workflows || F.used_in_workflows.length === 0 ? "Not used in any workflows" : F.used_in_workflows.length === 1 ? F.used_in_workflows[0] : `${F.used_in_workflows.length} workflows`;
    }
    function K(F) {
      p.value = F;
    }
    function J() {
      n("open-node-manager");
    }
    function M(F) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${F}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const L = await i(F);
            L.status === "success" ? (n("toast", `✓ Node "${F}" tracked as development`, "success"), await ee()) : n("toast", `Failed to track node: ${L.message || "Unknown error"}`, "error");
          } catch (L) {
            n("toast", `Error tracking node: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function P(F) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${F}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const L = await u(F);
            L.status === "success" ? (n("toast", `✓ Node "${F}" removed`, "success"), await ee()) : n("toast", `Failed to remove node: ${L.message || "Unknown error"}`, "error");
          } catch (L) {
            n("toast", `Error removing node: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function A(F) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${F}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const L = await c(F);
            L.status === "success" ? (n("toast", `✓ Node "${F}" installed`, "success"), await ee()) : n("toast", `Failed to install node: ${L.message || "Unknown error"}`, "error");
          } catch (L) {
            n("toast", `Error installing node: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
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
      } catch (F) {
        v.value = F instanceof Error ? F.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Qe(ee), (F, L) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (V) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: J
              }, {
                default: h(() => [...L[7] || (L[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          x(So, {
            modelValue: g.value,
            "onUpdate:modelValue": L[1] || (L[1] = (V) => g.value = V),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), D(Ms, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), D(Ds, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            d.value.total_count ? (a(), D(un, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(j, { key: 0 }, [
                  $(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(j, { key: 1 }, [
                  $(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value ? (a(), D(ct, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Mk, [
                  L[8] || (L[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(j, null, ye(e.versionMismatches, (V) => (a(), D(Rt, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: h(() => [...L[9] || (L[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(f(V.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", Dk, [
                      t("span", Lk, f(V.actual), 1),
                      L[10] || (L[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Ok, f(V.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "warning",
                      size: "sm",
                      onClick: L[2] || (L[2] = (X) => n("repair-environment"))
                    }, {
                      default: h(() => [...L[11] || (L[11] = [
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
            R.value.length ? (a(), D(ct, {
              key: 2,
              title: "UNTRACKED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(R.value, (V) => (a(), D(Rt, {
                  key: V.name,
                  status: "warning"
                }, {
                  icon: h(() => [...L[12] || (L[12] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(f(V.name), 1)
                  ]),
                  subtitle: h(() => [...L[13] || (L[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    x(mt, {
                      label: "Used by:",
                      value: W(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => K(V)
                    }, {
                      default: h(() => [...L[14] || (L[14] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => M(V.name)
                    }, {
                      default: h(() => [...L[15] || (L[15] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => P(V.name)
                    }, {
                      default: h(() => [...L[16] || (L[16] = [
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
            b.value.length ? (a(), D(ct, {
              key: 3,
              title: "INSTALLED",
              count: b.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(b.value, (V) => (a(), D(Rt, {
                  key: V.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(f(V.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(f(V.name), 1)
                  ]),
                  subtitle: h(() => [
                    V.version ? (a(), r("span", Ak, f(V.source === "development" ? "" : "v") + f(V.version), 1)) : (a(), r("span", Nk, "version unknown")),
                    t("span", Uk, " • " + f(I(V.source)), 1)
                  ]),
                  details: h(() => [
                    x(mt, {
                      label: "Used by:",
                      value: W(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => K(V)
                    }, {
                      default: h(() => [...L[17] || (L[17] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: J
                    }, {
                      default: h(() => [...L[18] || (L[18] = [
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
            S.value.length ? (a(), D(ct, {
              key: 4,
              title: "MISSING",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(S.value, (V) => (a(), D(Rt, {
                  key: V.name,
                  status: "missing"
                }, {
                  icon: h(() => [...L[19] || (L[19] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(f(V.name), 1)
                  ]),
                  subtitle: h(() => [...L[20] || (L[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    x(mt, {
                      label: "Required by:",
                      value: W(V)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => K(V)
                    }, {
                      default: h(() => [...L[21] || (L[21] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => A(V.name)
                    }, {
                      default: h(() => [...L[22] || (L[22] = [
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
            !b.value.length && !S.value.length && !R.value.length ? (a(), D(as, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      x(ls, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: L[4] || (L[4] = (V) => w.value = !1)
      }, {
        content: h(() => [...L[23] || (L[23] = [
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
          x(de, {
            variant: "primary",
            onClick: L[3] || (L[3] = (V) => w.value = !1)
          }, {
            default: h(() => [...L[24] || (L[24] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), D(Ik, {
        key: 0,
        node: p.value,
        onClose: L[5] || (L[5] = (V) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), D(al, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: L[6] || (L[6] = (V) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), Fk = /* @__PURE__ */ pe(zk, [["__scopeId", "data-v-1555a802"]]);
function Lr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Bk = { class: "remote-url-display" }, Vk = ["title"], Wk = ["title"], Gk = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, jk = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Hk = /* @__PURE__ */ me({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), n = U(() => {
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
    return (i, c) => (a(), r("div", Bk, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, Vk),
      t("button", {
        class: Ie(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", jk, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", Gk, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Wk)
    ]));
  }
}), Kk = /* @__PURE__ */ pe(Hk, [["__scopeId", "data-v-7768a58d"]]), qk = { class: "remote-title" }, Yk = {
  key: 0,
  class: "default-badge"
}, Jk = {
  key: 1,
  class: "sync-badge"
}, Qk = {
  key: 0,
  class: "ahead"
}, Xk = {
  key: 1,
  class: "behind"
}, Zk = {
  key: 1,
  class: "synced"
}, eb = ["href"], tb = {
  key: 1,
  class: "remote-url-text"
}, sb = /* @__PURE__ */ me({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = U(() => s.fetchingRemote === s.remote.name), n = U(() => s.remote.is_default), l = U(() => s.syncStatus && s.syncStatus.behind > 0), i = U(() => s.syncStatus && s.syncStatus.ahead > 0), c = U(() => s.remote.push_url !== s.remote.fetch_url), u = U(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), D(Rt, {
      status: n.value ? "synced" : void 0
    }, no({
      icon: h(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", qk, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", Yk, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", Jk, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", Qk, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", Xk, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", Zk, "✓ synced"))
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
          onClick: v[0] || (v[0] = rt(() => {
          }, ["stop"]))
        }, f(d.value), 9, eb)) : (a(), r("span", tb, f(d.value), 1))
      ]),
      actions: h(() => [
        x(de, {
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
        x(de, {
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
        x(de, {
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
        x(de, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), D(de, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), D(mt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              x(Kk, {
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
}), ob = /* @__PURE__ */ pe(sb, [["__scopeId", "data-v-8310f3a8"]]), nb = ["for"], ab = {
  key: 0,
  class: "base-form-field-required"
}, lb = { class: "base-form-field-input" }, ib = {
  key: 1,
  class: "base-form-field-error"
}, rb = {
  key: 2,
  class: "base-form-field-hint"
}, cb = /* @__PURE__ */ me({
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
    return (n, l) => (a(), r("div", {
      class: Ie(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), r("span", ab, "*")) : y("", !0)
      ], 8, nb)) : y("", !0),
      t("div", lb, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", ib, f(e.error), 1)) : e.hint ? (a(), r("span", rb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ga = /* @__PURE__ */ pe(cb, [["__scopeId", "data-v-9a1cf296"]]), ub = { class: "remote-form" }, db = { class: "form-header" }, fb = { class: "form-body" }, mb = {
  key: 0,
  class: "form-error"
}, vb = { class: "form-actions" }, pb = /* @__PURE__ */ me({
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
    ft(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = U(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (m, v) => (a(), r("div", ub, [
      t("div", db, [
        x(Nt, null, {
          default: h(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", fb, [
        x(ga, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            x(Mt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        x(ga, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            x(Mt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        x(ga, { label: "Push URL (optional)" }, {
          default: h(() => [
            x(Mt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", mb, f(c.value), 1)) : y("", !0)
      ]),
      t("div", vb, [
        x(de, {
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
        x(de, {
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
}), gb = /* @__PURE__ */ pe(pb, [["__scopeId", "data-v-56021b18"]]), hb = { class: "conflict-summary-box" }, yb = { class: "summary-header" }, wb = { class: "summary-text" }, _b = { key: 0 }, kb = {
  key: 1,
  class: "all-resolved"
}, bb = { class: "summary-progress" }, $b = { class: "progress-bar" }, Cb = { class: "progress-text" }, xb = /* @__PURE__ */ me({
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
    return (n, l) => (a(), r("div", hb, [
      t("div", yb, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", wb, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", _b, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", kb, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", bb, [
        t("div", $b, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", Cb, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Sb = /* @__PURE__ */ pe(xb, [["__scopeId", "data-v-4e9e6cc9"]]), Ib = { class: "modal-header" }, Eb = { class: "modal-title" }, Tb = { class: "modal-body" }, Pb = {
  key: 0,
  class: "error-box"
}, Rb = {
  key: 0,
  class: "error-hint"
}, Mb = {
  key: 1,
  class: "loading-state"
}, Db = { class: "commit-summary" }, Lb = {
  key: 0,
  class: "changes-section"
}, Ob = {
  key: 0,
  class: "change-group",
  open: ""
}, Ab = { class: "change-count" }, Nb = { class: "change-list" }, Ub = {
  key: 0,
  class: "conflict-badge"
}, zb = {
  key: 1,
  class: "change-group"
}, Fb = { class: "change-count" }, Bb = { class: "change-list" }, Vb = {
  key: 2,
  class: "change-group"
}, Wb = { class: "change-count" }, Gb = { class: "change-list" }, jb = {
  key: 2,
  class: "strategy-section"
}, Hb = { class: "radio-group" }, Kb = { class: "radio-option" }, qb = { class: "radio-option" }, Yb = { class: "radio-option" }, Jb = {
  key: 3,
  class: "up-to-date"
}, Qb = { class: "modal-actions" }, Zl = "comfygit.pullModelStrategy", Xb = /* @__PURE__ */ me({
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
    ft(l, (b) => {
      localStorage.setItem(Zl, b);
    });
    const i = U(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = U(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = U(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), m = U(() => o.preview && Lr(o.preview) ? o.preview : null), v = U(() => {
      var b;
      return ((b = m.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = U(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), w = U(
      () => v.value > 0 && g.value === v.value
    ), p = U(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _(b) {
      if (!m.value) return !1;
      const S = b.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((R) => R.name === S);
    }
    function C(b) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: b, resolutions: S });
    }
    return (b, S) => {
      var R, I;
      return a(), D(kt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (E) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", Ib, [
              t("h3", Eb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (E) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", Tb, [
              e.error ? (a(), r("div", Pb, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", Rb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", Mb, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (R = e.preview) != null && R.has_uncommitted_changes ? (a(), r(j, { key: 2 }, [
                S[15] || (S[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", Db, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", Lb, [
                  S[21] || (S[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", Ob, [
                    t("summary", null, [
                      S[18] || (S[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Ab, f(c.value) + " changes", 1)
                    ]),
                    t("div", Nb, [
                      (a(!0), r(j, null, ye(e.preview.changes.workflows.added, (E) => (a(), r("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128)),
                      (a(!0), r(j, null, ye(e.preview.changes.workflows.modified, (E) => (a(), r("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(E) + " ", 1),
                        _(E) ? (a(), r("span", Ub, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(j, null, ye(e.preview.changes.workflows.deleted, (E) => (a(), r("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", zb, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", Fb, f(u.value) + " to install", 1)
                    ]),
                    t("div", Bb, [
                      (a(!0), r(j, null, ye(e.preview.changes.nodes.to_install, (E) => (a(), r("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + f(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", Vb, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", Wb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", Gb, [
                      (a(!0), r(j, null, ye(e.preview.changes.models.referenced, (E) => (a(), r("div", {
                        key: E,
                        class: "change-item"
                      }, f(E), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), D(Sb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", jb, [
                  S[26] || (S[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", Hb, [
                    t("label", Kb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      S[22] || (S[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", qb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Yb, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Skip model downloads", -1)),
                      S[25] || (S[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[27] || (S[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", Jb, [
                  S[28] || (S[28] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Qb, [
              x(de, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (E) => b.$emit("close"))
              }, {
                default: h(() => [...S[29] || (S[29] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(j, { key: 0 }, [
                x(de, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (E) => C(!1))
                }, {
                  default: h(() => [...S[30] || (S[30] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                x(de, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (E) => C(!0))
                }, {
                  default: h(() => [...S[31] || (S[31] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), D(de, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (E) => C(!0))
              }, {
                default: h(() => [...S[32] || (S[32] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(j, { key: 2 }, [
                m.value && !w.value ? (a(), D(de, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (E) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), D(de, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: S[9] || (S[9] = (E) => C(!1))
                }, {
                  default: h(() => [...S[33] || (S[33] = [
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
}), Zb = /* @__PURE__ */ pe(Xb, [["__scopeId", "data-v-300c7b2f"]]), e2 = { class: "modal-header" }, t2 = { class: "modal-title" }, s2 = { class: "modal-body" }, o2 = {
  key: 0,
  class: "loading-state"
}, n2 = {
  key: 1,
  class: "warning-box"
}, a2 = {
  key: 0,
  class: "commits-section"
}, l2 = { class: "commit-list" }, i2 = { class: "commit-hash" }, r2 = { class: "commit-message" }, c2 = { class: "commit-date" }, u2 = { class: "force-option" }, d2 = { class: "checkbox-option" }, f2 = { class: "commit-summary" }, m2 = { key: 0 }, v2 = { key: 1 }, p2 = {
  key: 0,
  class: "info-box"
}, g2 = {
  key: 1,
  class: "commits-section"
}, h2 = { class: "commit-list" }, y2 = { class: "commit-hash" }, w2 = { class: "commit-message" }, _2 = { class: "commit-date" }, k2 = {
  key: 2,
  class: "up-to-date"
}, b2 = { class: "modal-actions" }, $2 = /* @__PURE__ */ me({
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
      return a(), D(kt, { to: "body" }, [
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
            t("div", e2, [
              t("h3", t2, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", s2, [
              e.loading ? (a(), r("div", o2, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), r("div", n2, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), r(j, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", a2, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", l2, [
                    (a(!0), r(j, null, ye(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", i2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", r2, f(v.message), 1),
                      t("span", c2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", u2, [
                  t("label", d2, [
                    qe(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [nn, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), r(j, { key: 3 }, [
                t("div", f2, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", m2, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", v2, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", p2, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", g2, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", h2, [
                    (a(!0), r(j, null, ye(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", y2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", w2, f(v.message), 1),
                      t("span", _2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", k2, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", b2, [
              x(de, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(j, { key: 0 }, [
                x(de, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                x(de, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), D(de, {
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
}), C2 = /* @__PURE__ */ pe($2, [["__scopeId", "data-v-ae86b6a7"]]), x2 = { class: "resolution-choice-group" }, S2 = ["disabled"], I2 = ["disabled"], E2 = /* @__PURE__ */ me({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", x2, [
      t("button", {
        class: Ie(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, S2),
      t("button", {
        class: Ie(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, I2)
    ]));
  }
}), T2 = /* @__PURE__ */ pe(E2, [["__scopeId", "data-v-985715ed"]]), P2 = { class: "conflict-header" }, R2 = { class: "conflict-info" }, M2 = { class: "workflow-name" }, D2 = { class: "conflict-description" }, L2 = {
  key: 0,
  class: "resolved-badge"
}, O2 = { class: "resolved-text" }, A2 = { class: "conflict-hashes" }, N2 = { class: "hash-item" }, U2 = { class: "hash-item" }, z2 = { class: "conflict-actions" }, F2 = /* @__PURE__ */ me({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    ft(() => o.resolution, (d) => {
      l.value = d;
    }), ft(l, (d) => {
      d && n("resolve", d);
    });
    const i = U(() => l.value !== null), c = U(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = U(() => {
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
        t("div", P2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", R2, [
            t("code", M2, f(e.conflict.name) + ".json", 1),
            t("div", D2, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", L2, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", O2, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", A2, [
          t("span", N2, [
            m[3] || (m[3] = $("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", U2, [
            m[4] || (m[4] = $("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", z2, [
          x(T2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), B2 = /* @__PURE__ */ pe(F2, [["__scopeId", "data-v-506d3bbf"]]), V2 = { class: "resolution-content" }, W2 = {
  key: 0,
  class: "error-box"
}, G2 = { class: "resolution-header" }, j2 = { class: "header-stats" }, H2 = { class: "stat" }, K2 = { class: "stat-value" }, q2 = { class: "stat resolved" }, Y2 = { class: "stat-value" }, J2 = {
  key: 0,
  class: "stat pending"
}, Q2 = { class: "stat-value" }, X2 = { class: "conflicts-list" }, Z2 = {
  key: 1,
  class: "all-resolved-message"
}, e$ = /* @__PURE__ */ me({
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
    const o = e, n = s, l = U(() => o.resolutions.size), i = U(() => o.workflowConflicts.length - l.value), c = U(() => l.value === o.workflowConflicts.length), u = U(
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
    return (w, p) => (a(), D(dt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", V2, [
          e.error ? (a(), r("div", W2, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", G2, [
            t("div", j2, [
              t("div", H2, [
                t("span", K2, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", q2, [
                t("span", Y2, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", J2, [
                t("span", Q2, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", X2, [
            (a(!0), r(j, null, ye(e.workflowConflicts, (_) => (a(), D(B2, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", Z2, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Te, {
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
}), t$ = /* @__PURE__ */ pe(e$, [["__scopeId", "data-v-c58d150d"]]), s$ = { class: "node-conflict-item" }, o$ = { class: "node-header" }, n$ = { class: "node-name" }, a$ = { class: "node-id" }, l$ = { class: "version-comparison" }, i$ = { class: "version yours" }, r$ = { class: "version theirs" }, c$ = { class: "chosen-version" }, u$ = { class: "chosen" }, d$ = { class: "chosen-reason" }, f$ = { class: "affected-workflows" }, m$ = { class: "wf-source" }, v$ = { class: "wf-version" }, p$ = /* @__PURE__ */ me({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", s$, [
      t("div", o$, [
        t("code", n$, f(e.conflict.node_name), 1),
        t("span", a$, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", l$, [
        t("div", i$, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", r$, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", c$, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", u$, f(e.conflict.chosen_version), 1),
        t("span", d$, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", f$, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(j, null, ye(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", m$, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", v$, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), g$ = /* @__PURE__ */ pe(p$, [["__scopeId", "data-v-8b626725"]]), h$ = { class: "validation-content" }, y$ = {
  key: 0,
  class: "compatible-message"
}, w$ = { class: "conflicts-list" }, _$ = {
  key: 2,
  class: "warnings-section"
}, k$ = /* @__PURE__ */ me({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = U(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), D(dt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", h$, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", y$, [
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
            t("div", w$, [
              (a(!0), r(j, null, ye(e.validation.node_conflicts, (u) => (a(), D(g$, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", _$, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(j, null, ye(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Te, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
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
}), b$ = /* @__PURE__ */ pe(k$, [["__scopeId", "data-v-fefd26ed"]]), $$ = { key: 0 }, C$ = /* @__PURE__ */ me({
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
    } = tt(), _ = k([]), C = k(null), b = k({}), S = k(!1), R = k(null), I = k(""), E = k(!1), W = k(null), K = k(!1), J = k("add"), M = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), P = U(() => {
      if (!I.value.trim()) return _.value;
      const ge = I.value.toLowerCase();
      return _.value.filter(
        (G) => G.name.toLowerCase().includes(ge) || G.fetch_url.toLowerCase().includes(ge) || G.push_url.toLowerCase().includes(ge)
      );
    });
    async function A() {
      S.value = !0, R.value = null;
      try {
        const ge = await n();
        _.value = ge.remotes, C.value = ge.current_branch_tracking || null, await Promise.all(
          ge.remotes.map(async (G) => {
            const B = await d(G.name);
            B && (b.value[G.name] = B);
          })
        );
      } catch (ge) {
        R.value = ge instanceof Error ? ge.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ee() {
      J.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function F(ge) {
      const G = _.value.find((B) => B.name === ge);
      G && (J.value = "edit", M.value = {
        name: G.name,
        fetchUrl: G.fetch_url,
        pushUrl: G.push_url
      }, K.value = !0);
    }
    async function L(ge) {
      try {
        J.value === "add" ? await l(ge.name, ge.fetchUrl) : await c(ge.name, ge.fetchUrl, ge.pushUrl || void 0), K.value = !1, await A();
      } catch (G) {
        R.value = G instanceof Error ? G.message : "Operation failed";
      }
    }
    function V() {
      K.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(ge) {
      W.value = ge;
      try {
        await u(ge);
        const G = await d(ge);
        G && (b.value[ge] = G), o("toast", `✓ Fetched from ${ge}`, "success");
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Fetch failed", "error");
      } finally {
        W.value = null;
      }
    }
    async function N(ge) {
      if (confirm(`Remove remote "${ge}"?`))
        try {
          await i(ge), await A();
        } catch (G) {
          R.value = G instanceof Error ? G.message : "Failed to remove remote";
        }
    }
    function ae() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Z = k("idle"), we = U(() => Z.value === "pull_preview"), be = U(
      () => Z.value === "resolving" || Z.value === "validating"
    ), Me = U(
      () => Z.value === "validation_review" || Z.value === "executing"
    ), ze = k(!1), Ue = k(null), Ye = k(!1), ve = k(null), oe = k(!1), re = k(null), ce = k(null), Se = k(/* @__PURE__ */ new Map()), Pe = k(null), Fe = k(null), O = U(() => re.value && Lr(re.value) ? re.value : null);
    async function T(ge) {
      ve.value = ge, Z.value = "pull_preview", oe.value = !0, re.value = null, ce.value = null;
      try {
        re.value = await m(ge);
      } catch (G) {
        ce.value = G instanceof Error ? G.message : "Failed to load pull preview";
      } finally {
        oe.value = !1;
      }
    }
    function z() {
      Z.value = "idle", re.value = null, ce.value = null, ve.value = null;
    }
    async function H(ge) {
      if (!ve.value) return;
      Z.value = "executing", ce.value = null;
      const G = ve.value;
      try {
        const B = await v(G, ge);
        if (B.rolled_back) {
          ce.value = `Pull failed and was rolled back: ${B.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        Ee(), Z.value = "idle", o("toast", `✓ Pulled from ${G}`, "success"), await A();
      } catch (B) {
        ce.value = B instanceof Error ? B.message : "Pull failed", Z.value = "pull_preview";
      }
    }
    function ne() {
      O.value && (Z.value = "resolving", Fe.value = null);
    }
    function ie(ge, G) {
      Se.value.set(ge, { name: ge, resolution: G });
    }
    function Ce() {
      Z.value = "pull_preview";
    }
    async function ue() {
      Z.value = "validating", Fe.value = null;
      try {
        const ge = Array.from(Se.value.values());
        Pe.value = await p(ve.value, ge), Z.value = "validation_review";
      } catch (ge) {
        Fe.value = ge instanceof Error ? ge.message : "Validation failed", Z.value = "resolving";
      }
    }
    async function _e() {
      Z.value = "executing";
      const ge = ve.value;
      try {
        const G = Array.from(Se.value.values()), B = await v(ge, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: G
        });
        if (B.rolled_back) {
          ce.value = `Pull failed and was rolled back: ${B.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        Ee(), Z.value = "idle", o("toast", `✓ Pulled from ${ge}`, "success"), await A();
      } catch (G) {
        ce.value = G instanceof Error ? G.message : "Pull failed", Z.value = "validation_review";
      }
    }
    function he() {
      Z.value = "resolving";
    }
    function Re() {
      Ee(), Z.value = "idle";
    }
    function Ee() {
      Se.value.clear(), Pe.value = null, Fe.value = null, ce.value = null, re.value = null, ve.value = null;
    }
    async function te(ge) {
      ve.value = ge, ze.value = !0, oe.value = !0, Ue.value = null;
      try {
        Ue.value = await g(ge);
      } catch (G) {
        R.value = G instanceof Error ? G.message : "Failed to load push preview";
      } finally {
        oe.value = !1;
      }
    }
    function q() {
      ze.value = !1, Ue.value = null, ve.value = null;
    }
    async function De(ge) {
      if (!ve.value) return;
      Ye.value = !0;
      const G = ve.value;
      try {
        await w(G, ge), q(), o("toast", `✓ Pushed to ${G}`, "success"), await A();
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Push failed", "error");
      } finally {
        Ye.value = !1;
      }
    }
    function $e() {
      const ge = ve.value;
      q(), ge && T(ge);
    }
    return Qe(A), (ge, G) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (B) => E.value = !0)
          }, {
            actions: h(() => [
              K.value ? y("", !0) : (a(), D(de, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: h(() => [...G[3] || (G[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          K.value ? y("", !0) : (a(), D(So, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": G[1] || (G[1] = (B) => I.value = B),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          S.value ? (a(), D(Ms, {
            key: 0,
            message: "Loading remotes..."
          })) : R.value ? (a(), D(Ds, {
            key: 1,
            message: R.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            K.value ? (a(), D(gb, {
              key: 0,
              mode: J.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: L,
              onCancel: V
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !K.value ? (a(), D(un, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (a(), r("span", $$, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            P.value.length && !K.value ? (a(), D(ct, {
              key: 2,
              title: "REMOTES",
              count: P.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(P.value, (B) => (a(), D(ob, {
                  key: B.name,
                  remote: B,
                  "sync-status": b.value[B.name],
                  "fetching-remote": W.value,
                  onFetch: X,
                  onEdit: F,
                  onRemove: N,
                  onPull: T,
                  onPush: te
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !P.value.length && !K.value ? (a(), D(as, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                x(de, {
                  variant: "primary",
                  onClick: ee
                }, {
                  default: h(() => [...G[4] || (G[4] = [
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
      x(ls, {
        show: E.value,
        title: "About Git Remotes",
        onClose: G[2] || (G[2] = (B) => E.value = !1)
      }, {
        content: h(() => [...G[5] || (G[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          x(de, {
            variant: "link",
            onClick: ae
          }, {
            default: h(() => [...G[6] || (G[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x(Zb, {
        show: we.value,
        "remote-name": ve.value || "",
        preview: re.value,
        loading: oe.value,
        pulling: Z.value === "executing",
        error: ce.value,
        "conflict-resolutions": Se.value,
        onClose: z,
        onPull: H,
        onOpenConflictResolution: ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      x(C2, {
        show: ze.value,
        "remote-name": ve.value || "",
        preview: Ue.value,
        loading: oe.value,
        pushing: Ye.value,
        onClose: q,
        onPush: De,
        onPullFirst: $e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      be.value && O.value ? (a(), D(t$, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: Se.value,
        "operation-type": "pull",
        validating: Z.value === "validating",
        error: Fe.value,
        onClose: Ce,
        onResolve: ie,
        onApply: ue
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Me.value && Pe.value ? (a(), D(b$, {
        key: 1,
        validation: Pe.value,
        "operation-type": "pull",
        executing: Z.value === "executing",
        onProceed: _e,
        onGoBack: he,
        onCancel: Re
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), x$ = /* @__PURE__ */ pe(C$, [["__scopeId", "data-v-9ae3b76d"]]), S$ = { class: "setting-info" }, I$ = { class: "setting-label" }, E$ = {
  key: 0,
  class: "required-marker"
}, T$ = {
  key: 0,
  class: "setting-description"
}, P$ = { class: "setting-control" }, R$ = /* @__PURE__ */ me({
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
      t("div", S$, [
        t("div", I$, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), r("span", E$, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", T$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", P$, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Do = /* @__PURE__ */ pe(R$, [["__scopeId", "data-v-cb5d236c"]]), M$ = { class: "toggle" }, D$ = ["checked", "disabled"], L$ = /* @__PURE__ */ me({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", M$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, D$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ei = /* @__PURE__ */ pe(L$, [["__scopeId", "data-v-71c0f550"]]), O$ = { class: "workspace-settings-content" }, A$ = { class: "settings-section" }, N$ = { class: "path-setting" }, U$ = { class: "path-value" }, z$ = { class: "path-setting" }, F$ = { class: "path-value" }, B$ = { class: "settings-section" }, V$ = { class: "settings-section" }, W$ = { class: "settings-section" }, G$ = /* @__PURE__ */ me({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = tt(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(""), C = k(!1), b = k(!1), S = k(!1), R = k(!0);
    function I(ee) {
      return ee.join(" ");
    }
    function E(ee) {
      return ee.trim() ? ee.trim().split(/\s+/) : [];
    }
    const W = U(() => {
      if (!g.value) return !1;
      const ee = C.value, F = b.value, L = _.value !== I(g.value.comfyui_extra_args || []);
      return ee || F || L;
    });
    async function K() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", _.value = I(v.value.comfyui_extra_args || []), C.value = !1, b.value = !1;
        const ee = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        S.value = ee !== "false", R.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (ee) {
        d.value = ee instanceof Error ? ee.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function J() {
      var ee;
      m.value = null;
      try {
        const F = {};
        C.value && (F.civitai_api_key = w.value || null), b.value && (F.huggingface_token = p.value || null), _.value !== I(((ee = g.value) == null ? void 0 : ee.comfyui_extra_args) || []) && (F.comfyui_extra_args = E(_.value)), await c(F, n.workspacePath || void 0), await K(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (F) {
        const L = F instanceof Error ? F.message : "Failed to save settings";
        m.value = { type: "error", message: L }, l("error", L);
      }
    }
    function M() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = g.value.huggingface_token || "", _.value = I(g.value.comfyui_extra_args || []), C.value = !1, b.value = !1, m.value = null);
    }
    function P(ee) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ee)), console.log("[ComfyGit] Auto-refresh setting saved:", ee);
    }
    function A(ee) {
      ee ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ee ? "enabled" : "disabled");
    }
    return s({
      saveSettings: J,
      resetSettings: M,
      hasChanges: W,
      loadSettings: K
    }), Qe(K), (ee, F) => (a(), r("div", O$, [
      u.value ? (a(), D(Ms, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), D(Ds, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: K
      }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
        x(ct, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var L, V;
            return [
              t("div", A$, [
                t("div", N$, [
                  F[7] || (F[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  F[8] || (F[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", U$, f(((L = v.value) == null ? void 0 : L.workspace_path) || "Loading..."), 1)
                ]),
                t("div", z$, [
                  F[9] || (F[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  F[10] || (F[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", F$, f(((V = v.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        x(ct, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", B$, [
              x(Do, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  x(Ko, {
                    modelValue: w.value,
                    "onUpdate:modelValue": F[0] || (F[0] = (L) => w.value = L),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: F[1] || (F[1] = (L) => C.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              x(Do, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  x(Ko, {
                    modelValue: p.value,
                    "onUpdate:modelValue": F[2] || (F[2] = (L) => p.value = L),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: F[3] || (F[3] = (L) => b.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        x(ct, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", V$, [
              x(Do, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  x(Ko, {
                    modelValue: _.value,
                    "onUpdate:modelValue": F[4] || (F[4] = (L) => _.value = L),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              F[11] || (F[11] = t("div", { class: "setting-hint" }, [
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
        x(ct, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", W$, [
              x(Do, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  x(ei, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      F[5] || (F[5] = (L) => S.value = L),
                      P
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              x(Do, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  x(ei, {
                    modelValue: R.value,
                    "onUpdate:modelValue": [
                      F[6] || (F[6] = (L) => R.value = L),
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
        m.value ? (a(), D(un, {
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
}), Or = /* @__PURE__ */ pe(G$, [["__scopeId", "data-v-9c5b427b"]]), j$ = /* @__PURE__ */ me({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), D(Dt, null, {
      header: h(() => [
        x(Lt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
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
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), D(de, {
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
        x(Or, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), H$ = { class: "base-tabs" }, K$ = ["disabled", "onClick"], q$ = {
  key: 0,
  class: "base-tabs__badge"
}, Y$ = /* @__PURE__ */ me({
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
    return (i, c) => (a(), r("div", H$, [
      (a(!0), r(j, null, ye(e.tabs, (u) => (a(), r("button", {
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
        u.badge ? (a(), r("span", q$, f(u.badge), 1)) : y("", !0)
      ], 10, K$))), 128))
    ]));
  }
}), Ar = /* @__PURE__ */ pe(Y$, [["__scopeId", "data-v-ad5e6cad"]]), J$ = { class: "log-viewer-wrapper" }, Q$ = ["disabled", "title"], X$ = /* @__PURE__ */ me({
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
      await ht();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Qe(i), ft(() => s.logs, i);
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
    return (m, v) => (a(), r("div", J$, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, Q$),
        (a(!0), r(j, null, ye(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Ie(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Nr = /* @__PURE__ */ pe(X$, [["__scopeId", "data-v-c0cc6d21"]]), Z$ = /* @__PURE__ */ me({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = tt(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = U(() => c.value === "workspace" ? g.value : w.value);
    async function C() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (R) {
        m.value = R instanceof Error ? R.message : `Failed to load ${c.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function b() {
      try {
        const [R, I] = await Promise.all([
          o(),
          l()
        ]);
        R.exists && (g.value = R.path), I.exists && (w.value = I.path);
      } catch {
      }
    }
    async function S() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (R) {
          console.error("Failed to open log file:", R);
        } finally {
          p.value = !1;
        }
      }
    }
    return ft(c, () => {
      C();
    }), Qe(() => {
      C(), b();
    }), (R, I) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (E) => v.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  $(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(de, {
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
          x(Ar, {
            modelValue: c.value,
            "onUpdate:modelValue": I[1] || (I[1] = (E) => c.value = E),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), D(Ms, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), D(Ds, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            u.value.length === 0 ? (a(), D(as, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), D(Nr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      x(ls, {
        show: v.value,
        title: "About Logs",
        onClose: I[3] || (I[3] = (E) => v.value = !1)
      }, {
        content: h(() => [...I[4] || (I[4] = [
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
          x(de, {
            variant: "primary",
            onClick: I[2] || (I[2] = (E) => v.value = !1)
          }, {
            default: h(() => [...I[5] || (I[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), eC = /* @__PURE__ */ me({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), g = k(!1);
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
    return Qe(() => {
      w(), p();
    }), (C, b) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (S) => d.value = !0)
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
                  $(f(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(de, {
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
          c.value ? (a(), D(Ms, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), D(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            i.value.length === 0 ? (a(), D(as, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), D(Nr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      x(ls, {
        show: d.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (S) => d.value = !1)
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
          x(de, {
            variant: "primary",
            onClick: b[1] || (b[1] = (S) => d.value = !1)
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
}), tC = { class: "env-title" }, sC = {
  key: 0,
  class: "current-badge"
}, oC = {
  key: 0,
  class: "branch-info"
}, nC = /* @__PURE__ */ me({
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
    return (s, o) => (a(), D(Rt, {
      status: e.isCurrent ? "synced" : void 0
    }, no({
      icon: h(() => [
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", tC, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", sC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", oC, [
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
          x(mt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          x(mt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          x(mt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), D(mt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), aC = /* @__PURE__ */ pe(nC, [["__scopeId", "data-v-9231917a"]]), lC = { class: "env-details" }, iC = { class: "status-row" }, rC = {
  key: 0,
  class: "detail-row"
}, cC = { class: "value mono" }, uC = {
  key: 1,
  class: "detail-row"
}, dC = { class: "value mono small" }, fC = { class: "detail-row" }, mC = { class: "value" }, vC = { class: "detail-row" }, pC = { class: "value" }, gC = { class: "detail-row" }, hC = { class: "value" }, yC = {
  key: 2,
  class: "section-divider"
}, wC = {
  key: 3,
  class: "detail-row"
}, _C = { class: "value" }, kC = {
  key: 4,
  class: "detail-row"
}, bC = { class: "value" }, $C = { class: "footer-actions" }, CC = /* @__PURE__ */ me({
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
    return (l, i) => (a(), D(dt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", lC, [
          t("div", iC, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ie(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", rC, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", cC, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", uC, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", dC, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", fC, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", mC, f(e.environment.workflow_count), 1)
          ]),
          t("div", vC, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", pC, f(e.environment.node_count), 1)
          ]),
          t("div", gC, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", hC, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", yC)) : y("", !0),
          e.environment.created_at ? (a(), r("div", wC, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", _C, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", kC, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", bC, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", $C, [
          e.canDelete ? (a(), D(Te, {
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
          x(Te, {
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
}), xC = /* @__PURE__ */ pe(CC, [["__scopeId", "data-v-59855453"]]), Ur = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], zr = "3.12", ll = [
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
], Fr = "auto", SC = { class: "progress-bar" }, IC = /* @__PURE__ */ me({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", SC, [
      t("div", {
        class: Ie(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), sa = /* @__PURE__ */ pe(IC, [["__scopeId", "data-v-1beb0512"]]), EC = { class: "task-progress" }, TC = { class: "progress-info" }, PC = { class: "progress-percentage" }, RC = { class: "progress-message" }, MC = {
  key: 0,
  class: "progress-steps"
}, DC = { class: "step-icon" }, LC = { class: "step-label" }, OC = /* @__PURE__ */ me({
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
    return (l, i) => (a(), r("div", EC, [
      x(sa, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", TC, [
        t("span", PC, f(e.progress) + "%", 1),
        t("span", RC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", MC, [
        (a(!0), r(j, null, ye(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Ie(["step", o(c.id)])
        }, [
          t("span", DC, f(n(c.id)), 1),
          t("span", LC, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Bn = /* @__PURE__ */ pe(OC, [["__scopeId", "data-v-9d1de66c"]]), AC = {
  key: 0,
  class: "create-env-form"
}, NC = { class: "form-field" }, UC = { class: "form-field" }, zC = ["value"], FC = { class: "form-field" }, BC = ["disabled"], VC = ["value"], WC = { class: "form-field" }, GC = ["value"], jC = { class: "form-field form-field--checkbox" }, HC = { class: "form-checkbox" }, KC = {
  key: 1,
  class: "create-env-progress"
}, qC = { class: "creating-intro" }, YC = {
  key: 0,
  class: "progress-warning"
}, JC = {
  key: 1,
  class: "create-error"
}, QC = { class: "error-message" }, XC = {
  key: 1,
  class: "footer-status"
}, ZC = 10, ex = /* @__PURE__ */ me({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = tt(), c = k(""), u = k(zr), d = k("latest"), m = k(Fr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let C = null, b = 0;
    const S = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], R = k(null);
    function I() {
      p.value || o("close");
    }
    async function E() {
      const P = c.value.trim();
      if (P) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: P,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ee = await l(A);
          ee.status === "started" ? W() : ee.status === "error" && (_.value = {
            progress: 0,
            message: ee.message || "Failed to start creation",
            error: ee.message
          });
        } catch (A) {
          _.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      C || (b = 0, C = window.setInterval(async () => {
        try {
          const P = await i();
          b = 0, _.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase,
            error: P.error
          }, P.state === "complete" ? (K(), o("created", P.environment_name || c.value.trim(), v.value)) : P.state === "error" ? (K(), _.value.error = P.error || P.message) : P.state === "idle" && p.value && (K(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          b++, b >= ZC && (K(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      C && (clearInterval(C), C = null);
    }
    function J() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function M() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (P) {
        console.error("Failed to load ComfyUI releases:", P);
      } finally {
        w.value = !1;
      }
    }
    return Qe(async () => {
      var P;
      await ht(), (P = R.value) == null || P.focus(), M();
    }), Gs(() => {
      K();
    }), (P, A) => (a(), D(dt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: I
    }, {
      body: h(() => [
        p.value ? (a(), r("div", KC, [
          t("p", qC, [
            A[11] || (A[11] = $(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            A[12] || (A[12] = $("... ", -1))
          ]),
          x(Bn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: S
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", YC, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", JC, [
            t("p", QC, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", AC, [
          t("div", NC, [
            A[6] || (A[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: R,
              "onUpdate:modelValue": A[0] || (A[0] = (ee) => c.value = ee),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ht(E, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", UC, [
            A[7] || (A[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": A[1] || (A[1] = (ee) => u.value = ee),
              class: "form-select"
            }, [
              (a(!0), r(j, null, ye(We(Ur), (ee) => (a(), r("option", {
                key: ee,
                value: ee
              }, f(ee), 9, zC))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", FC, [
            A[8] || (A[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": A[2] || (A[2] = (ee) => d.value = ee),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(j, null, ye(g.value, (ee) => (a(), r("option", {
                key: ee.tag_name,
                value: ee.tag_name
              }, f(ee.name), 9, VC))), 128))
            ], 8, BC), [
              [hs, d.value]
            ])
          ]),
          t("div", WC, [
            A[9] || (A[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": A[3] || (A[3] = (ee) => m.value = ee),
              class: "form-select"
            }, [
              (a(!0), r(j, null, ye(We(ll), (ee) => (a(), r("option", {
                key: ee,
                value: ee
              }, f(ee) + f(ee === "auto" ? " (detect GPU)" : ""), 9, GC))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", jC, [
            t("label", HC, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": A[4] || (A[4] = (ee) => v.value = ee)
              }, null, 512), [
                [nn, v.value]
              ]),
              A[10] || (A[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(j, { key: 1 }, [
          _.value.error ? (a(), D(Te, {
            key: 0,
            variant: "secondary",
            onClick: J
          }, {
            default: h(() => [...A[15] || (A[15] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", XC, " Creating environment... "))
        ], 64)) : (a(), r(j, { key: 0 }, [
          x(Te, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: E
          }, {
            default: h(() => [...A[13] || (A[13] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Te, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (ee) => o("close"))
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
}), tx = /* @__PURE__ */ pe(ex, [["__scopeId", "data-v-f37eaa42"]]), sx = /* @__PURE__ */ me({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = U(() => {
      if (!d.value.trim()) return i.value;
      const R = d.value.toLowerCase();
      return i.value.filter(
        (I) => {
          var E;
          return I.name.toLowerCase().includes(R) || ((E = I.current_branch) == null ? void 0 : E.toLowerCase().includes(R));
        }
      );
    });
    function p(R, I) {
      v.value = !1, n("created", R, I);
    }
    function _() {
      v.value = !0;
    }
    function C(R) {
      g.value = R;
    }
    function b(R) {
      g.value = null, n("delete", R);
    }
    async function S() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Qe(S), s({
      loadEnvironments: S,
      openCreateModal: _
    }), (R, I) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (E) => m.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              x(de, {
                variant: "secondary",
                size: "sm",
                onClick: S
              }, {
                default: h(() => [...I[7] || (I[7] = [
                  $(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          x(So, {
            modelValue: d.value,
            "onUpdate:modelValue": I[1] || (I[1] = (E) => d.value = E),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), D(Ms, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), D(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), r(j, { key: 2 }, [
            w.value.length ? (a(), D(ct, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(j, null, ye(w.value, (E) => (a(), D(aC, {
                  key: E.name,
                  "environment-name": E.name,
                  "is-current": E.is_current,
                  "current-branch": E.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    E.is_current ? y("", !0) : (a(), D(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => R.$emit("switch", E.name)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => C(E)
                    }, {
                      default: h(() => [...I[9] || (I[9] = [
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
            w.value.length ? y("", !0) : (a(), D(as, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, no({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  x(de, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: h(() => [...I[10] || (I[10] = [
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
      x(ls, {
        show: m.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (E) => m.value = !1)
      }, {
        content: h(() => [...I[11] || (I[11] = [
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
          x(de, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => m.value = !1)
          }, {
            default: h(() => [...I[12] || (I[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), D(xC, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: I[4] || (I[4] = (E) => g.value = null),
        onDelete: b
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), D(tx, {
        key: 1,
        onClose: I[5] || (I[5] = (E) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), ox = /* @__PURE__ */ pe(sx, [["__scopeId", "data-v-f95999f4"]]), nx = { class: "file-path" }, ax = { class: "file-path-text" }, lx = ["title"], ix = /* @__PURE__ */ me({
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
    return (l, i) => (a(), r("div", nx, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", ax, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, lx)) : y("", !0)
    ]));
  }
}), rx = /* @__PURE__ */ pe(ix, [["__scopeId", "data-v-f0982173"]]), cx = { class: "export-blocked" }, ux = { class: "issues-list" }, dx = { class: "issue-message" }, fx = {
  key: 0,
  class: "issue-details"
}, mx = ["onClick"], vx = { class: "issue-fix" }, px = /* @__PURE__ */ me({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const s = e, o = Ws({});
    function n(l) {
      const i = s.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), D(dt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", cx, [
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
          t("div", ux, [
            (a(!0), r(j, null, ye(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", dx, f(c.message), 1),
              c.details.length ? (a(), r("div", fx, [
                (a(!0), r(j, null, ye(n(u), (d, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                c.details.length > 3 && !o[u] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, mx)) : y("", !0)
              ])) : y("", !0),
              t("div", vx, [
                c.type === "uncommitted_workflows" ? (a(), r(j, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(j, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(j, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), Br = /* @__PURE__ */ pe(px, [["__scopeId", "data-v-b52f5e32"]]), gx = { class: "export-warnings" }, hx = {
  key: 0,
  class: "success-header"
}, yx = { class: "warning-header" }, wx = { class: "warning-summary" }, _x = { class: "warning-title" }, kx = { class: "models-section" }, bx = { class: "models-list" }, $x = { class: "model-info" }, Cx = { class: "model-filename" }, xx = { class: "model-workflows" }, Sx = ["onClick"], Ix = /* @__PURE__ */ me({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), r(j, null, [
      x(dt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", gx, [
            e.models.length === 0 ? (a(), r("div", hx, [...m[4] || (m[4] = [
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
              t("div", yx, [
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
                t("div", wx, [
                  t("h3", _x, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", kx, [
                t("div", bx, [
                  (a(!0), r(j, null, ye(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", $x, [
                      t("div", Cx, f(v.filename), 1),
                      t("div", xx, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, Sx)
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
          x(Te, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          x(Te, {
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
}), Vr = /* @__PURE__ */ pe(Ix, [["__scopeId", "data-v-b698d882"]]), Ex = { class: "export-card" }, Tx = { class: "export-path-row" }, Px = { class: "export-actions" }, Rx = {
  key: 1,
  class: "export-warning"
}, Mx = /* @__PURE__ */ me({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = tt(), n = k(""), l = k(!1), i = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = U(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const I = await s();
        m.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await b() : v.value = !0;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
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
        const I = await s();
        m.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function b() {
      i.value = !0;
      try {
        const I = await o(n.value || void 0);
        u.value = I;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function S() {
      var I;
      if ((I = u.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (E) {
          console.error("Failed to copy path:", E);
        }
    }
    async function R() {
      var I;
      if ((I = u.value) != null && I.path) {
        c.value = !0;
        try {
          const E = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!E.ok)
            throw new Error(`Download failed: ${E.statusText}`);
          const W = await E.blob(), K = URL.createObjectURL(W), J = u.value.path.split("/").pop() || "environment-export.tar.gz", M = document.createElement("a");
          M.href = K, M.download = J, document.body.appendChild(M), M.click(), document.body.removeChild(M), URL.revokeObjectURL(K);
        } catch (E) {
          console.error("Failed to download:", E), alert(`Download failed: ${E instanceof Error ? E.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, E) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (W) => d.value = !0)
          })
        ]),
        content: h(() => [
          x(ct, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", Ex, [
                E[7] || (E[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", Tx, [
                  x(Ko, {
                    modelValue: n.value,
                    "onUpdate:modelValue": E[1] || (E[1] = (W) => n.value = W),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Px, [
                  x(de, {
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
          u.value ? (a(), D(ct, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              x(Rt, {
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
                    x(mt, { label: "Saved to:" }, {
                      default: h(() => [
                        x(rx, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), D(mt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), r("div", Rx, [...E[8] || (E[8] = [
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
                      loading: c.value,
                      onClick: R
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
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: S
                    }, {
                      default: h(() => [...E[10] || (E[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    x(de, {
                      variant: "ghost",
                      size: "sm",
                      onClick: E[2] || (E[2] = (W) => u.value = null)
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
      x(ls, {
        show: d.value,
        title: "What Gets Exported",
        onClose: E[3] || (E[3] = (W) => d.value = !1)
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
      v.value && m.value ? (a(), D(Br, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: E[4] || (E[4] = (W) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), D(Vr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: E[5] || (E[5] = (W) => g.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), Dx = /* @__PURE__ */ pe(Mx, [["__scopeId", "data-v-f4d120f2"]]), Lx = { class: "file-input-wrapper" }, Ox = ["accept", "multiple", "disabled"], Ax = /* @__PURE__ */ me({
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
    }), (u, d) => (a(), r("div", Lx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, Ox),
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
            $(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Nx = /* @__PURE__ */ pe(Ax, [["__scopeId", "data-v-cd192091"]]), Ux = {
  key: 0,
  class: "drop-zone-empty"
}, zx = { class: "drop-zone-text" }, Fx = { class: "drop-zone-primary" }, Bx = { class: "drop-zone-secondary" }, Vx = { class: "drop-zone-actions" }, Wx = {
  key: 1,
  class: "drop-zone-file"
}, Gx = { class: "file-info" }, jx = { class: "file-details" }, Hx = { class: "file-name" }, Kx = { class: "file-size" }, qx = /* @__PURE__ */ me({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = U(() => l.value !== null), u = U(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), d = U(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(b) {
      var S;
      b.stopPropagation(), i.value++, (S = b.dataTransfer) != null && S.types.includes("Files") && (n.value = !0);
    }
    function v(b) {
      b.stopPropagation(), b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function g(b) {
      b.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w(b) {
      var R;
      b.stopPropagation(), i.value = 0, n.value = !1;
      const S = (R = b.dataTransfer) == null ? void 0 : R.files;
      S && S.length > 0 && _(S[0]);
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
    return (b, S) => (a(), r("div", {
      class: Ie(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: rt(m, ["prevent"]),
      onDragover: rt(v, ["prevent"]),
      onDragleave: rt(g, ["prevent"]),
      onDrop: rt(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", Wx, [
        t("div", Gx, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", jx, [
            t("div", Hx, f(u.value), 1),
            t("div", Kx, f(d.value), 1)
          ])
        ]),
        x(de, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...S[2] || (S[2] = [
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
      ])) : (a(), r("div", Ux, [
        S[0] || (S[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", zx, [
          t("p", Fx, f(e.primaryText), 1),
          t("p", Bx, f(e.secondaryText), 1)
        ]),
        t("div", Vx, [
          x(Nx, {
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
}), Yx = /* @__PURE__ */ pe(qx, [["__scopeId", "data-v-0f79cb86"]]), Jx = { class: "import-preview" }, Qx = { class: "preview-header" }, Xx = {
  key: 0,
  class: "source-env"
}, Zx = { class: "preview-content" }, e3 = { class: "preview-section" }, t3 = { class: "section-header" }, s3 = { class: "section-info" }, o3 = { class: "section-count" }, n3 = {
  key: 0,
  class: "item-list"
}, a3 = { class: "item-name" }, l3 = {
  key: 0,
  class: "item-more"
}, i3 = { class: "preview-section" }, r3 = { class: "section-header" }, c3 = { class: "section-info" }, u3 = { class: "section-count" }, d3 = {
  key: 0,
  class: "item-list"
}, f3 = { class: "item-details" }, m3 = { class: "item-name" }, v3 = { class: "item-meta" }, p3 = {
  key: 0,
  class: "item-more"
}, g3 = { class: "preview-section" }, h3 = { class: "section-header" }, y3 = { class: "section-info" }, w3 = { class: "section-count" }, _3 = {
  key: 0,
  class: "item-list"
}, k3 = { class: "item-name" }, b3 = {
  key: 0,
  class: "item-more"
}, $3 = {
  key: 0,
  class: "preview-section"
}, C3 = { class: "git-info" }, x3 = /* @__PURE__ */ me({
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
    function i(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), r("div", Jx, [
      t("div", Qx, [
        x(Nt, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", Xx, [
          u[1] || (u[1] = $(" From: ", -1)),
          x(Da, null, {
            default: h(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", Zx, [
        t("div", e3, [
          t("div", t3, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", s3, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", o3, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", n3, [
            (a(!0), r(j, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", a3, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", l3, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", i3, [
          t("div", r3, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", c3, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", u3, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", d3, [
            (a(!0), r(j, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", f3, [
                t("span", m3, f(d.filename), 1),
                t("span", v3, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", p3, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", g3, [
          t("div", h3, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", y3, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", w3, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", _3, [
            (a(!0), r(j, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", k3, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", b3, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", $3, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", C3, [
            e.gitBranch ? (a(), D(mt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                x(Da, null, {
                  default: h(() => [
                    $(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), D(mt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                x(Er, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), S3 = /* @__PURE__ */ pe(x3, [["__scopeId", "data-v-182fe113"]]), I3 = { class: "import-config" }, E3 = { class: "config-container" }, T3 = { class: "config-field" }, P3 = { class: "input-wrapper" }, R3 = ["value"], M3 = {
  key: 0,
  class: "validating-indicator"
}, D3 = {
  key: 1,
  class: "valid-indicator"
}, L3 = {
  key: 0,
  class: "field-error"
}, O3 = { class: "config-field" }, A3 = { class: "strategy-options" }, N3 = ["value", "checked", "onChange"], U3 = { class: "strategy-content" }, z3 = { class: "strategy-label" }, F3 = { class: "strategy-description" }, B3 = { class: "config-field switch-field" }, V3 = { class: "switch-label" }, W3 = ["checked"], G3 = { class: "advanced-section" }, j3 = { class: "advanced-content" }, H3 = { class: "config-field" }, K3 = ["value"], q3 = ["value"], Y3 = /* @__PURE__ */ me({
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
    ft(() => o.nameError, (v) => {
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
    return (v, g) => (a(), r("div", I3, [
      x(Nt, null, {
        default: h(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", E3, [
        t("div", T3, [
          x(Tn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", P3, [
            t("input", {
              type: "text",
              class: Ie(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, R3),
            l.value ? (a(), r("span", M3, "...")) : i.value ? (a(), r("span", D3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", L3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", O3, [
          x(Tn, null, {
            default: h(() => [...g[5] || (g[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", A3, [
            (a(), r(j, null, ye(c, (w) => t("label", {
              key: w.value,
              class: Ie(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, N3),
              t("div", U3, [
                t("span", z3, f(w.label), 1),
                t("span", F3, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", B3, [
          t("label", V3, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, W3),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", G3, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", j3, [
            t("div", H3, [
              x(Tn, null, {
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
                (a(!0), r(j, null, ye(We(ll), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, q3))), 128))
              ], 40, K3)
            ])
          ])
        ])
      ])
    ]));
  }
}), J3 = /* @__PURE__ */ pe(Y3, [["__scopeId", "data-v-89ea06a1"]]), Q3 = { class: "import-flow" }, X3 = {
  key: 0,
  class: "import-empty"
}, Z3 = { class: "git-import-section" }, e5 = { class: "git-url-input-row" }, t5 = ["disabled"], s5 = {
  key: 0,
  class: "git-error"
}, o5 = {
  key: 1,
  class: "import-configure"
}, n5 = { class: "selected-file-bar" }, a5 = {
  key: 0,
  class: "file-bar-content"
}, l5 = { class: "file-bar-info" }, i5 = { class: "file-bar-name" }, r5 = { class: "file-bar-size" }, c5 = {
  key: 1,
  class: "file-bar-content"
}, u5 = { class: "file-bar-info" }, d5 = { class: "file-bar-name" }, f5 = {
  key: 0,
  class: "preview-loading"
}, m5 = { class: "import-actions" }, v5 = {
  key: 2,
  class: "import-progress"
}, p5 = { class: "creating-intro" }, g5 = {
  key: 0,
  class: "progress-warning"
}, h5 = {
  key: 1,
  class: "import-error"
}, y5 = { class: "error-message" }, w5 = {
  key: 3,
  class: "import-complete"
}, _5 = { class: "complete-message" }, k5 = { class: "complete-title" }, b5 = { class: "complete-details" }, $5 = { class: "complete-actions" }, C5 = /* @__PURE__ */ me({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ye, ve, oe, re;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = tt();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), b = k(""), S = k(!1), R = k(null), I = k(""), E = k(null), W = k(!1), K = k(null), J = k(null), M = k({
      name: ((Ye = n.initialProgress) == null ? void 0 : Ye.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), P = k(null), A = k({
      message: ((ve = n.initialProgress) == null ? void 0 : ve.message) ?? "Preparing import...",
      phase: ((oe = n.initialProgress) == null ? void 0 : oe.phase) ?? "",
      progress: ((re = n.initialProgress) == null ? void 0 : re.progress) ?? 0,
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
    ], F = U(() => {
      if (!J.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ce = J.value;
      return {
        sourceEnvironment: ce.comfyui_version ? `ComfyUI ${ce.comfyui_version}` : "Unknown",
        workflows: ce.workflows.map((Se) => Se.name),
        models: ce.models.map((Se) => ({
          filename: Se.filename,
          size: 0,
          type: Se.relative_path.split("/")[0] || "model"
        })),
        nodes: ce.nodes.map((Se) => Se.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), L = U(() => !S.value && !R.value && J.value && M.value.name.length > 0 && !P.value && (w.value || E.value));
    async function V(ce) {
      w.value = ce, S.value = !0, R.value = null, J.value = null;
      try {
        const Se = await i(ce);
        J.value = Se;
      } catch (Se) {
        R.value = Se instanceof Error ? Se.message : "Failed to analyze file", console.error("Preview error:", Se);
      } finally {
        S.value = !1;
      }
    }
    function X() {
      w.value = null, E.value = null, I.value = "", K.value = null, _.value = !1, C.value = !1, b.value = "", J.value = null, R.value = null, M.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, P.value = null, l("source-cleared");
    }
    function N() {
      ze(), X(), p.value = !1, S.value = !1, W.value = !1, A.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ae() {
      if (I.value.trim()) {
        W.value = !0, K.value = null;
        try {
          const ce = await c(I.value.trim());
          E.value = I.value.trim(), J.value = ce;
        } catch (ce) {
          K.value = ce instanceof Error ? ce.message : "Failed to analyze repository";
        } finally {
          W.value = !1;
        }
      }
    }
    function Z(ce) {
      try {
        const Se = new URL(ce);
        return Se.host + Se.pathname.replace(/\.git$/, "");
      } catch {
        return ce;
      }
    }
    async function we(ce) {
      if (!ce) {
        P.value = "Environment name is required";
        return;
      }
      try {
        const Se = await u(ce);
        P.value = Se.valid ? null : Se.error || "Invalid name";
      } catch {
        P.value = "Failed to validate name";
      }
    }
    async function be() {
      if (M.value.name && !(!w.value && !E.value)) {
        p.value = !0, _.value = !1, A.value = { message: `Creating environment '${M.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ce;
          if (w.value)
            ce = await d(
              w.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else if (E.value)
            ce = await m(
              E.value,
              M.value.name,
              M.value.modelStrategy,
              M.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ce.status === "started" ? Me() : (C.value = !1, b.value = ce.message, p.value = !1, _.value = !0);
        } catch (ce) {
          C.value = !1, b.value = ce instanceof Error ? ce.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Me() {
      if (g) return;
      const ce = async () => {
        try {
          const Pe = await v();
          return A.value = {
            message: Pe.message,
            phase: Pe.phase || "",
            progress: Pe.progress ?? (Pe.state === "importing" ? 50 : 0),
            error: Pe.error || null
          }, Pe.state === "complete" ? (ze(), C.value = !0, b.value = `Environment '${Pe.environment_name}' created successfully`, p.value = !1, _.value = !0, Pe.environment_name && l("import-complete", Pe.environment_name, M.value.switchAfterImport), !1) : Pe.state === "error" ? (ze(), C.value = !1, b.value = Pe.error || Pe.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Pe) {
          return console.error("Failed to poll import progress:", Pe), !0;
        }
      };
      await ce() && (g = setInterval(async () => {
        await ce() || ze();
      }, 2e3));
    }
    function ze() {
      g && (clearInterval(g), g = null);
    }
    function Ue(ce) {
      return ce < 1024 ? `${ce} B` : ce < 1024 * 1024 ? `${(ce / 1024).toFixed(1)} KB` : ce < 1024 * 1024 * 1024 ? `${(ce / (1024 * 1024)).toFixed(1)} MB` : `${(ce / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const ce = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ce.state, ce), ce.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ce.environment_name), p.value = !0, M.value.name = ce.environment_name || M.value.name || "", A.value = {
          progress: ce.progress ?? 0,
          message: ce.message || "Importing...",
          phase: ce.phase || "",
          error: null
        }, Me());
      } catch (ce) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ce);
      }
    }), s({
      handleReset: N,
      isImporting: p,
      canImport: L
    }), (ce, Se) => {
      var Pe;
      return a(), r("div", Q3, [
        !w.value && !E.value && !p.value ? (a(), r("div", X3, [
          x(Yx, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: V
          }),
          Se[7] || (Se[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", Z3, [
            Se[5] || (Se[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", e5, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Se[0] || (Se[0] = (Fe) => I.value = Fe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ht(ae, ["enter"]),
                disabled: W.value
              }, null, 40, t5), [
                [zt, I.value]
              ]),
              x(de, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || W.value,
                onClick: ae
              }, {
                default: h(() => [
                  $(f(W.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            K.value ? (a(), r("div", s5, f(K.value), 1)) : y("", !0),
            Se[6] || (Se[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !p.value && !_.value ? (a(), r("div", o5, [
          t("div", n5, [
            w.value ? (a(), r("div", a5, [
              Se[8] || (Se[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", l5, [
                t("div", i5, f(w.value.name), 1),
                t("div", r5, f(Ue(w.value.size)), 1)
              ])
            ])) : E.value ? (a(), r("div", c5, [
              Se[10] || (Se[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", u5, [
                t("div", d5, f(Z(E.value)), 1),
                Se[9] || (Se[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            x(de, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: h(() => [...Se[11] || (Se[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (a(), r("div", f5, [...Se[12] || (Se[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : R.value ? (a(), D(Xt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [R.value]
          }, null, 8, ["details"])) : J.value ? (a(), D(S3, {
            key: 2,
            "source-environment": F.value.sourceEnvironment,
            workflows: F.value.workflows,
            models: F.value.models,
            nodes: F.value.nodes,
            "git-branch": F.value.gitBranch,
            "git-commit": F.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          J.value ? (a(), D(J3, {
            key: 3,
            name: M.value.name,
            "onUpdate:name": Se[1] || (Se[1] = (Fe) => M.value.name = Fe),
            "model-strategy": M.value.modelStrategy,
            "onUpdate:modelStrategy": Se[2] || (Se[2] = (Fe) => M.value.modelStrategy = Fe),
            "torch-backend": M.value.torchBackend,
            "onUpdate:torchBackend": Se[3] || (Se[3] = (Fe) => M.value.torchBackend = Fe),
            "switch-after-import": M.value.switchAfterImport,
            "onUpdate:switchAfterImport": Se[4] || (Se[4] = (Fe) => M.value.switchAfterImport = Fe),
            "name-error": P.value,
            onValidateName: we
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          M.value.modelStrategy === "skip" && ((Pe = J.value) != null && Pe.models_needing_download) ? (a(), D(Xt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${J.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", m5, [
            x(de, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: h(() => [...Se[13] || (Se[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(de, {
              variant: "primary",
              size: "md",
              disabled: !L.value,
              onClick: be
            }, {
              default: h(() => [...Se[14] || (Se[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", v5, [
          t("p", p5, [
            Se[15] || (Se[15] = $(" Importing environment ", -1)),
            t("strong", null, f(M.value.name), 1),
            Se[16] || (Se[16] = $("... ", -1))
          ]),
          x(Bn, {
            progress: A.value.progress,
            message: A.value.message,
            "current-phase": A.value.phase,
            variant: A.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          A.value.error ? y("", !0) : (a(), r("p", g5, " This may take several minutes. Please wait... ")),
          A.value.error ? (a(), r("div", h5, [
            t("p", y5, f(A.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", w5, [
          t("div", {
            class: Ie(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", _5, [
            t("div", k5, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", b5, f(b.value), 1)
          ]),
          t("div", $5, [
            x(de, {
              variant: "primary",
              size: "md",
              onClick: N
            }, {
              default: h(() => [...Se[17] || (Se[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Wr = /* @__PURE__ */ pe(C5, [["__scopeId", "data-v-72cbc04e"]]), x5 = /* @__PURE__ */ me({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
          })
        ]),
        content: h(() => [
          x(Wr, { onImportComplete: l })
        ]),
        _: 1
      }),
      x(ls, {
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
}), S5 = /* @__PURE__ */ pe(x5, [["__scopeId", "data-v-e13bfe76"]]), kn = mo(), I5 = 5e3, co = k([]), ha = k(!1), ya = k(null);
let Lo = null;
async function bn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Gr(e) {
  const s = U(
    () => co.value.filter((p) => p.status === "running")
  ), o = U(
    () => co.value.filter((p) => p.status === "deploying")
  ), n = U(
    () => co.value.filter((p) => p.status === "stopped")
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
    return [...co.value].sort(
      (_, C) => (p[_.status] ?? 5) - (p[C.status] ?? 5)
    );
  });
  async function c() {
    ha.value = !0, ya.value = null;
    try {
      let p;
      if (!kn) {
        const _ = await bn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      co.value = p.instances;
    } catch (p) {
      ya.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ha.value = !1;
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
      if (!kn) {
        const _ = u(p, "stop"), C = await bn(_, { method: "POST" });
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
      if (!kn) {
        const _ = u(p, "start"), C = await bn(_, { method: "POST" });
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
      if (!kn) {
        const _ = u(p, "terminate"), C = await bn(_, { method: "DELETE" });
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
    Lo || (Lo = window.setInterval(c, I5));
  }
  function w() {
    Lo && (clearInterval(Lo), Lo = null);
  }
  return ft(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: co,
    isLoading: ha,
    error: ya,
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
const E5 = { class: "instance-header" }, T5 = { class: "provider-badge" }, P5 = { class: "instance-name" }, R5 = {
  key: 0,
  class: "spinner"
}, M5 = { class: "instance-details" }, D5 = {
  key: 0,
  class: "detail"
}, L5 = {
  key: 1,
  class: "detail instance-url"
}, O5 = {
  key: 2,
  class: "detail"
}, A5 = {
  key: 3,
  class: "detail"
}, N5 = {
  key: 4,
  class: "detail total-cost"
}, U5 = {
  key: 0,
  class: "deployment-progress"
}, z5 = { class: "progress-message" }, F5 = { class: "instance-actions" }, B5 = /* @__PURE__ */ me({
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
      t("div", E5, [
        t("span", T5, f(o.value), 1),
        t("span", P5, f(e.instance.name), 1),
        t("span", {
          class: Ie(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", R5)) : y("", !0),
          $(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", M5, [
        e.instance.gpu_type ? (a(), r("span", D5, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", L5, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", O5, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", A5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", N5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", U5, [
        t("div", z5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), D(sa, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", F5, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), D(de, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), D(de, {
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
        e.instance.status === "running" ? (a(), D(de, {
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
        e.instance.status === "stopped" ? (a(), D(de, {
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
        x(de, {
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
}), V5 = /* @__PURE__ */ pe(B5, [["__scopeId", "data-v-746c3894"]]), W5 = { class: "instances-tab" }, G5 = { class: "instances-header" }, j5 = {
  key: 0,
  class: "loading-state"
}, H5 = {
  key: 1,
  class: "empty-state"
}, K5 = {
  key: 2,
  class: "instances-list"
}, q5 = /* @__PURE__ */ me({
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
    return (n, l) => (a(), r("div", W5, [
      t("div", G5, [
        x(Nt, null, {
          default: h(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
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
            $(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), r("div", j5, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", H5, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", K5, [
        (a(!0), r(j, null, ye(o.value, (i) => (a(), D(V5, {
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
}), Y5 = /* @__PURE__ */ pe(q5, [["__scopeId", "data-v-ba614fc3"]]), J5 = { class: "remote-header" }, Q5 = { class: "remote-info" }, X5 = { class: "remote-icon" }, Z5 = { class: "remote-name" }, eS = {
  key: 0,
  class: "default-badge"
}, tS = {
  key: 1,
  class: "sync-badge"
}, sS = {
  key: 0,
  class: "ahead"
}, oS = {
  key: 1,
  class: "behind"
}, nS = {
  key: 1,
  class: "synced"
}, aS = ["href"], lS = {
  key: 1,
  class: "remote-url-text"
}, iS = { class: "remote-actions" }, rS = /* @__PURE__ */ me({
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
      const i = s.remote.fetch_url, c = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, c) => (a(), r("div", {
      class: Ie(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", J5, [
        t("div", Q5, [
          t("span", X5, f(o.value ? "🔗" : "🌐"), 1),
          t("span", Z5, f(e.remote.name), 1),
          o.value ? (a(), r("span", eS, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", tS, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", sS, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", oS, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", nS, "✓ synced"))
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
        }, f(l.value), 9, aS)) : (a(), r("span", lS, f(l.value), 1))
      ]),
      t("div", iS, [
        x(de, {
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
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), D(de, {
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
        x(de, {
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
}), jr = /* @__PURE__ */ pe(rS, [["__scopeId", "data-v-d687d161"]]), cS = { class: "runpod-tab" }, uS = { class: "api-key-card" }, dS = { class: "api-key-row" }, fS = { class: "api-key-input-wrapper" }, mS = ["type", "disabled"], vS = ["title"], pS = { class: "status-icon" }, gS = { class: "status-text" }, hS = {
  key: 0,
  class: "credit-balance"
}, yS = { class: "config-card" }, wS = { class: "config-row" }, _S = ["disabled"], kS = {
  key: 0,
  value: ""
}, bS = {
  key: 1,
  value: "",
  disabled: ""
}, $S = ["value", "disabled"], CS = { class: "config-row" }, xS = {
  key: 0,
  class: "loading-inline"
}, SS = { class: "no-volumes-state" }, IS = { class: "no-volumes-text" }, ES = ["value"], TS = { class: "config-row" }, PS = ["disabled"], RS = {
  key: 0,
  value: ""
}, MS = {
  key: 1,
  value: ""
}, DS = {
  key: 2,
  value: ""
}, LS = ["value"], OS = { class: "config-row" }, AS = { class: "radio-group" }, NS = { class: "radio-option" }, US = { class: "radio-label" }, zS = { class: "radio-option disabled" }, FS = { class: "radio-label" }, BS = { class: "config-row" }, VS = { class: "radio-group" }, WS = { class: "radio-option" }, GS = { class: "radio-label" }, jS = { class: "radio-option disabled" }, HS = { class: "radio-label" }, KS = { class: "config-row" }, qS = {
  key: 0,
  class: "loading-text"
}, YS = {
  key: 1,
  class: "empty-remotes"
}, JS = { class: "remotes-list" }, QS = {
  key: 0,
  class: "sync-warning"
}, XS = { class: "warning-content" }, ZS = { class: "remotes-footer" }, e8 = { class: "summary-card" }, t8 = {
  key: 0,
  class: "loading-text"
}, s8 = { class: "summary-row" }, o8 = { class: "summary-value" }, n8 = { class: "summary-row" }, a8 = { class: "summary-value" }, l8 = { class: "summary-row" }, i8 = { class: "summary-value" }, r8 = {
  key: 0,
  class: "summary-sub-row"
}, c8 = { class: "summary-sub-label" }, u8 = {
  key: 1,
  class: "summary-sub-row warning"
}, d8 = { class: "summary-sub-label" }, f8 = { class: "summary-row" }, m8 = { class: "summary-value" }, v8 = { class: "summary-row" }, p8 = { class: "summary-value" }, g8 = { class: "deployment-summary" }, h8 = { class: "summary-columns" }, y8 = { class: "summary-column" }, w8 = { class: "pricing-row" }, _8 = { class: "pricing-value" }, k8 = { class: "pricing-row" }, b8 = { class: "pricing-value" }, $8 = { class: "pricing-row" }, C8 = { class: "pricing-value" }, x8 = { class: "pricing-row total" }, S8 = { class: "pricing-value" }, I8 = { class: "summary-column" }, E8 = { class: "spec-row" }, T8 = { class: "spec-row" }, P8 = {
  key: 0,
  class: "spec-row"
}, R8 = {
  key: 1,
  class: "spec-row spot-warning"
}, M8 = {
  key: 4,
  class: "deploy-actions"
}, D8 = { class: "progress-content" }, L8 = { class: "phase-indicator" }, O8 = { key: 0 }, A8 = { key: 1 }, N8 = { key: 2 }, U8 = {
  key: 3,
  class: "spinner"
}, z8 = { class: "phase-text" }, F8 = { class: "phase-name" }, B8 = { class: "phase-detail" }, V8 = {
  key: 0,
  class: "ready-actions"
}, W8 = { class: "console-link" }, G8 = ["href"], j8 = /* @__PURE__ */ me({
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
    } = tt(), S = k(!1), R = k(""), I = k(!1), E = k(!1), W = k(null), K = k(null), J = k(""), M = k(""), P = k(""), A = k("SECURE"), ee = k("ON_DEMAND"), F = k("my-comfyui-deploy"), L = k([]), V = k({}), X = k(!1), N = k(null), ae = k(null), Z = k(null), we = k([]), be = k(!1), Me = k([]), ze = k(!1), Ue = k([]), Ye = k(!1), ve = k(null), oe = k(!1), re = k(!1), ce = k(null), Se = k(!1), Pe = k(null), Fe = k(null), O = k(null), T = k(!1), z = k(null), H = k(!1), ne = k(!1), ie = U(() => Me.value.find((xe) => xe.id === M.value) || null), Ce = U(() => J.value ? Me.value.filter((xe) => xe.data_center_id === J.value) : Me.value), ue = U(() => Ue.value.filter((xe) => xe.available)), _e = U(() => N.value && V.value[N.value] || null), he = U(() => {
      if (!N.value) return null;
      const xe = L.value.find((se) => se.name === N.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), Re = U(() => I.value && M.value && P.value && he.value && !re.value && !T.value), Ee = (xe) => {
      const se = Ue.value.find((wt) => wt.id === P.value);
      if (!se) return "0.00";
      if (xe === "SECURE") return (se.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (se.communityPrice ?? 0).toFixed(2);
      const He = A.value === "SECURE";
      return xe === "ON_DEMAND" ? He ? (se.securePrice ?? 0).toFixed(2) : (se.communityPrice ?? 0).toFixed(2) : He ? (se.secureSpotPrice ?? 0).toFixed(2) : (se.communitySpotPrice ?? 0).toFixed(2);
    }, te = U(() => {
      const xe = Ue.value.find((rs) => rs.id === P.value), se = Me.value.find((rs) => rs.id === M.value);
      if (!xe) return null;
      const He = A.value === "SECURE", wt = ee.value === "SPOT";
      let Bt;
      wt ? Bt = He ? xe.secureSpotPrice ?? 0 : xe.communitySpotPrice ?? 0 : Bt = He ? xe.securePrice ?? 0 : xe.communityPrice ?? 0;
      const ws = se ? se.size_gb * 14e-5 : 0, _s = 4e-3;
      return {
        gpu: Bt,
        volume: ws,
        container: _s,
        total: Bt + ws + _s
      };
    });
    async function q() {
      await Ve(), await Promise.all([St(), De()]);
    }
    async function De() {
      X.value = !0;
      try {
        const xe = await w();
        L.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (He) => {
            const wt = await p(He.name);
            wt && (V.value[He.name] = wt);
          })
        );
        const se = xe.remotes.find((He) => He.is_default);
        se ? N.value = se.name : xe.remotes.length > 0 && (N.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function $e(xe) {
      ae.value = xe;
      try {
        await _(xe);
        const se = await p(xe);
        se && (V.value[xe] = se), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        ae.value = null;
      }
    }
    async function ge(xe) {
      Z.value = xe;
      try {
        await C(xe, { force: !1 });
        const se = await p(xe);
        se && (V.value[xe] = se), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        Z.value = null;
      }
    }
    function G(xe) {
      N.value = xe;
    }
    async function B() {
      if (R.value) {
        E.value = !0, W.value = null;
        try {
          const xe = await l(R.value, !0);
          xe.status === "success" ? (I.value = !0, K.value = xe.credit_balance ?? null, W.value = { type: "success", message: xe.message }, await q()) : W.value = { type: "error", message: xe.message };
        } catch (xe) {
          W.value = {
            type: "error",
            message: xe instanceof Error ? xe.message : "Connection test failed"
          };
        } finally {
          E.value = !1;
        }
      }
    }
    async function fe() {
      try {
        await v(), R.value = "", I.value = !1, W.value = null, K.value = null, we.value = [], J.value = "", Me.value = [], M.value = "", Ue.value = [], P.value = "", ve.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      ze.value = !0, be.value = !0;
      try {
        const xe = await i();
        Me.value = xe.volumes;
        const se = /* @__PURE__ */ new Map();
        for (const He of xe.volumes)
          He.data_center_id && !se.has(He.data_center_id) && se.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const He = await b();
          we.value = He.data_centers;
        } else
          we.value = Array.from(se.values());
        if (Me.value.length > 0) {
          const He = Me.value[0];
          M.value = He.id, He.data_center_id && (J.value = He.data_center_id, await Ze(He.data_center_id));
        } else we.value.length > 0 && (J.value = we.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        ze.value = !1, be.value = !1;
      }
    }
    async function Ze(xe) {
      Ye.value = !0;
      try {
        const se = await c(xe);
        Ue.value = se.gpu_types;
        const He = Ue.value.find((wt) => wt.available);
        He ? P.value = He.id : P.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ye.value = !1;
      }
    }
    ft(J, async (xe) => {
      if (!xe || ze.value) return;
      const se = Me.value.find((He) => He.id === M.value);
      se && se.data_center_id !== xe && (M.value = ""), await Ze(xe);
    }), ft(M, async (xe) => {
      if (!xe) {
        Ue.value = [], P.value = "";
        return;
      }
      if (ze.value) return;
      const se = Me.value.find((He) => He.id === xe);
      se && se.data_center_id !== J.value ? J.value = se.data_center_id : se && await Ze(se.data_center_id);
    });
    async function St() {
      oe.value = !0;
      try {
        ve.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        oe.value = !1;
      }
    }
    async function st() {
      if (!(!P.value || !M.value)) {
        T.value = !0, ce.value = null;
        try {
          const xe = await g();
          z.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? ne.value = !0 : await yt() : H.value = !0;
        } catch (xe) {
          ce.value = {
            status: "error",
            message: xe instanceof Error ? xe.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    async function pt() {
      ne.value = !1, await yt();
    }
    async function qt() {
      try {
        const xe = await g();
        z.value = xe;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function yt() {
      re.value = !0;
      try {
        let xe;
        if (ee.value === "SPOT") {
          const He = Ue.value.find((wt) => wt.id === P.value);
          He && (xe = A.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const se = await u({
          gpu_type_id: P.value,
          pod_name: F.value || "my-comfyui-deploy",
          network_volume_id: M.value,
          cloud_type: A.value,
          pricing_type: ee.value,
          spot_bid: xe,
          import_source: he.value
        });
        ce.value = se, se.status === "success" && se.pod_id ? (Pe.value = se.pod_id, Se.value = !0, Io(se.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", se.message, "error");
      } catch (xe) {
        ce.value = {
          status: "error",
          message: xe instanceof Error ? xe.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        re.value = !1;
      }
    }
    function Io(xe) {
      ys(xe), O.value = window.setInterval(() => ys(xe), 3e3);
    }
    function is() {
      O.value && (clearInterval(O.value), O.value = null);
    }
    async function ys(xe) {
      try {
        const se = await d(xe);
        Fe.value = se, (se.phase === "READY" || se.phase === "ERROR" || se.phase === "STOPPED") && (is(), se.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (se) {
        console.error("Failed to poll deployment status:", se);
      }
    }
    function ao() {
      Se.value = !1, is(), Pe.value = null, Fe.value = null;
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
        xe.has_key && xe.key_preview && (R.value = `****${xe.key_preview}`, xe.valid ? (I.value = !0, K.value = xe.credit_balance ?? null, W.value = { type: "success", message: "Connected to RunPod" }, await q()) : xe.error && (W.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), Gs(() => {
      is();
    }), (xe, se) => {
      var He, wt, Bt, ws, _s, rs;
      return a(), r(j, null, [
        t("div", cS, [
          x(ct, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", uS, [
                t("div", dS, [
                  t("div", fS, [
                    qe(t("input", {
                      "onUpdate:modelValue": se[0] || (se[0] = (Ae) => R.value = Ae),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, mS), [
                      [ea, R.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: se[1] || (se[1] = (Ae) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, f(S.value ? "👁" : "👁‍🗨"), 9, vS)
                  ]),
                  I.value ? y("", !0) : (a(), D(de, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: E.value,
                    disabled: !R.value || E.value,
                    onClick: B
                  }, {
                    default: h(() => [...se[16] || (se[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (a(), D(de, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: fe
                  }, {
                    default: h(() => [...se[17] || (se[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                W.value ? (a(), r("div", {
                  key: 0,
                  class: Ie(["connection-status", W.value.type])
                }, [
                  t("span", pS, f(W.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", gS, f(W.value.message), 1),
                  K.value !== null ? (a(), r("span", hS, " $" + f(K.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          I.value ? (a(), D(ct, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", yS, [
                t("div", wS, [
                  se[19] || (se[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": se[2] || (se[2] = (Ae) => J.value = Ae),
                    class: "config-select",
                    disabled: be.value
                  }, [
                    be.value ? (a(), r("option", kS, "Loading...")) : J.value ? y("", !0) : (a(), r("option", bS, "Select a region")),
                    (a(!0), r(j, null, ye(we.value, (Ae) => (a(), r("option", {
                      key: Ae.id,
                      value: Ae.id,
                      disabled: !Ae.available
                    }, f(Ae.id) + " (" + f(Ae.name) + ")" + f(Ae.available ? "" : " [Unavailable]"), 9, $S))), 128))
                  ], 8, _S), [
                    [hs, J.value]
                  ])
                ]),
                t("div", CS, [
                  se[24] || (se[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  ze.value ? (a(), r("div", xS, "Loading volumes...")) : Ce.value.length === 0 ? (a(), r(j, { key: 1 }, [
                    t("div", SS, [
                      se[20] || (se[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", IS, "No volumes in " + f(J.value || "this region"), 1)
                    ]),
                    se[21] || (se[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    se[22] || (se[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(j, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": se[3] || (se[3] = (Ae) => M.value = Ae),
                      class: "config-select"
                    }, [
                      (a(!0), r(j, null, ye(Ce.value, (Ae) => (a(), r("option", {
                        key: Ae.id,
                        value: Ae.id
                      }, f(Ae.name) + " (" + f(Ae.size_gb) + "GB) ", 9, ES))), 128))
                    ], 512), [
                      [hs, M.value]
                    ]),
                    se[23] || (se[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", TS, [
                  se[25] || (se[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": se[4] || (se[4] = (Ae) => P.value = Ae),
                    class: "config-select",
                    disabled: Ye.value || !M.value
                  }, [
                    M.value ? Ye.value ? (a(), r("option", MS, "Loading GPUs...")) : ue.value.length === 0 ? (a(), r("option", DS, "No GPUs available in this region")) : y("", !0) : (a(), r("option", RS, "Select a volume first")),
                    (a(!0), r(j, null, ye(ue.value, (Ae) => (a(), r("option", {
                      key: Ae.id,
                      value: Ae.id
                    }, f(Ae.displayName) + " (" + f(Ae.memoryInGb) + "GB) - $" + f(A.value === "SECURE" ? (Ae.securePrice ?? 0).toFixed(2) : (Ae.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ae.stockStatus ? `[${Ae.stockStatus}]` : ""), 9, LS))), 128))
                  ], 8, PS), [
                    [hs, P.value]
                  ])
                ]),
                t("div", OS, [
                  se[26] || (se[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", AS, [
                    t("label", NS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[5] || (se[5] = (Ae) => A.value = Ae),
                        value: "SECURE"
                      }, null, 512), [
                        [es, A.value]
                      ]),
                      t("span", US, "Secure ($" + f(Ee("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", zS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[6] || (se[6] = (Ae) => A.value = Ae),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [es, A.value]
                      ]),
                      t("span", FS, "Community ($" + f(Ee("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", BS, [
                  se[27] || (se[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", VS, [
                    t("label", WS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[7] || (se[7] = (Ae) => ee.value = Ae),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [es, ee.value]
                      ]),
                      t("span", GS, "On-Demand ($" + f(Ee("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", jS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[8] || (se[8] = (Ae) => ee.value = Ae),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [es, ee.value]
                      ]),
                      t("span", HS, "Spot ($" + f(Ee("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", KS, [
                  se[28] || (se[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": se[9] || (se[9] = (Ae) => F.value = Ae),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [zt, F.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (a(), D(ct, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              X.value ? (a(), r("div", qS, "Loading remotes...")) : L.value.length === 0 ? (a(), r("div", YS, [
                se[30] || (se[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                x(de, {
                  variant: "primary",
                  size: "xs",
                  onClick: se[10] || (se[10] = (Ae) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...se[29] || (se[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(j, { key: 2 }, [
                t("div", JS, [
                  (a(!0), r(j, null, ye(L.value, (Ae) => (a(), D(jr, {
                    key: Ae.name,
                    remote: Ae,
                    "sync-status": V.value[Ae.name],
                    "is-selected": N.value === Ae.name,
                    "is-fetching": ae.value === Ae.name,
                    "is-pushing": Z.value === Ae.name,
                    onFetch: $e,
                    onPush: ge,
                    onSelect: G
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                _e.value && _e.value.ahead > 0 ? (a(), r("div", QS, [
                  se[31] || (se[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", XS, [
                    t("strong", null, f(_e.value.ahead) + " unpushed commit" + f(_e.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(N.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  x(de, {
                    variant: "primary",
                    size: "xs",
                    loading: Z.value === N.value,
                    onClick: se[11] || (se[11] = (Ae) => N.value && ge(N.value))
                  }, {
                    default: h(() => [
                      $(" Push to " + f(N.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", ZS, [
                  x(de, {
                    variant: "link",
                    size: "xs",
                    onClick: se[12] || (se[12] = (Ae) => o("navigate", "remotes"))
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
          I.value ? (a(), D(ct, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", e8, [
                oe.value ? (a(), r("div", t8, "Loading environment summary...")) : ve.value ? (a(), r(j, { key: 1 }, [
                  t("div", s8, [
                    se[33] || (se[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", o8, f(ve.value.comfyui_version), 1)
                  ]),
                  t("div", n8, [
                    se[34] || (se[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", a8, f(ve.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", l8, [
                    se[35] || (se[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", i8, f(ve.value.model_count) + " models", 1)
                  ]),
                  ve.value.models_with_sources > 0 ? (a(), r("div", r8, [
                    t("span", c8, "└─ " + f(ve.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  ve.value.models_without_sources > 0 ? (a(), r("div", u8, [
                    t("span", d8, "└─ " + f(ve.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", f8, [
                    se[36] || (se[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", m8, f(ve.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", v8, [
                    se[37] || (se[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", p8, "~" + f(ve.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && te.value ? (a(), D(ct, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ae, ks;
              return [
                t("div", g8, [
                  t("div", h8, [
                    t("div", y8, [
                      se[42] || (se[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", w8, [
                        se[38] || (se[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", _8, "$" + f(te.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", k8, [
                        se[39] || (se[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", b8, "$" + f(te.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", $8, [
                        se[40] || (se[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", C8, "$" + f(te.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      se[43] || (se[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", x8, [
                        se[41] || (se[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", S8, "~$" + f(te.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", I8, [
                      se[45] || (se[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", E8, [
                        t("span", null, f(((Ae = Ue.value.find((cs) => cs.id === P.value)) == null ? void 0 : Ae.displayName) || "GPU") + " (" + f(((ks = Ue.value.find((cs) => cs.id === P.value)) == null ? void 0 : ks.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", T8, [
                        t("span", null, "Region: " + f(J.value), 1)
                      ]),
                      ie.value ? (a(), r("div", P8, [
                        t("span", null, "Volume: " + f(ie.value.name), 1)
                      ])) : y("", !0),
                      ee.value === "SPOT" ? (a(), r("div", R8, [...se[44] || (se[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (a(), r("div", M8, [
            x(de, {
              variant: "primary",
              size: "md",
              loading: T.value || re.value,
              disabled: !Re.value,
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
                $(" " + f(T.value ? "Validating..." : re.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ce.value ? (a(), D(ct, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              x(Rt, {
                status: ce.value.status === "success" ? "synced" : "broken"
              }, no({
                icon: h(() => [
                  $(f(ce.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(f(ce.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(f(ce.value.message), 1)
                ]),
                actions: h(() => [
                  x(de, {
                    variant: "ghost",
                    size: "xs",
                    onClick: se[13] || (se[13] = (Ae) => ce.value = null)
                  }, {
                    default: h(() => [...se[47] || (se[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ce.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    x(mt, {
                      label: "Pod ID:",
                      value: ce.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        Se.value ? (a(), D(dt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Fe.value) == null ? void 0 : He.phase) === "READY" || ((wt = Fe.value) == null ? void 0 : wt.phase) === "ERROR" || ((Bt = Fe.value) == null ? void 0 : Bt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ao
        }, no({
          body: h(() => {
            var Ae, ks, cs, lo, io, Hs, le, Y, Le, je, at, vt;
            return [
              t("div", D8, [
                t("div", L8, [
                  t("div", {
                    class: Ie(["phase-icon", (ks = (Ae = Fe.value) == null ? void 0 : Ae.phase) == null ? void 0 : ks.toLowerCase()])
                  }, [
                    ((cs = Fe.value) == null ? void 0 : cs.phase) === "READY" ? (a(), r("span", O8, "✓")) : ((lo = Fe.value) == null ? void 0 : lo.phase) === "ERROR" ? (a(), r("span", A8, "✕")) : ((io = Fe.value) == null ? void 0 : io.phase) === "STOPPED" ? (a(), r("span", N8, "○")) : (a(), r("span", U8, "⟳"))
                  ], 2),
                  t("div", z8, [
                    t("div", F8, f(Eo((Hs = Fe.value) == null ? void 0 : Hs.phase)), 1),
                    t("div", B8, f(((le = Fe.value) == null ? void 0 : le.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                x(sa, {
                  progress: js((Y = Fe.value) == null ? void 0 : Y.phase),
                  variant: ((Le = Fe.value) == null ? void 0 : Le.phase) === "ERROR" ? "error" : ((je = Fe.value) == null ? void 0 : je.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((at = Fe.value) == null ? void 0 : at.phase) === "READY" ? (a(), r("div", V8, [
                  x(de, {
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
                t("div", W8, [
                  (vt = Fe.value) != null && vt.console_url ? (a(), r("a", {
                    key: 0,
                    href: Fe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, G8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ws = Fe.value) == null ? void 0 : ws.phase) === "READY" || ((_s = Fe.value) == null ? void 0 : _s.phase) === "ERROR" || ((rs = Fe.value) == null ? void 0 : rs.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              x(de, {
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
        H.value && z.value ? (a(), D(Br, {
          key: 1,
          issues: z.value.blocking_issues,
          onClose: se[14] || (se[14] = (Ae) => H.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ne.value && z.value ? (a(), D(Vr, {
          key: 2,
          models: z.value.warnings.models_without_sources,
          onConfirm: pt,
          onCancel: se[15] || (se[15] = (Ae) => ne.value = !1),
          onRevalidate: qt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), H8 = /* @__PURE__ */ pe(j8, [["__scopeId", "data-v-522cd4d9"]]), K8 = { class: "worker-header" }, q8 = { class: "worker-status" }, Y8 = { class: "worker-name" }, J8 = { class: "worker-actions" }, Q8 = { class: "worker-details" }, X8 = { class: "detail-item" }, Z8 = { class: "detail-value" }, e4 = {
  key: 0,
  class: "detail-item"
}, t4 = { class: "detail-value" }, s4 = {
  key: 1,
  class: "detail-item"
}, o4 = { class: "detail-value mode-badge" }, n4 = {
  key: 0,
  class: "worker-stats"
}, a4 = {
  key: 0,
  class: "stat-item"
}, l4 = { key: 0 }, i4 = {
  key: 1,
  class: "worker-stats offline"
}, r4 = /* @__PURE__ */ me({
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
      t("div", K8, [
        t("div", q8, [
          t("span", {
            class: Ie(["status-dot", e.worker.status])
          }, null, 2),
          t("span", Y8, f(e.worker.name), 1)
        ]),
        t("div", J8, [
          e.worker.status === "online" ? (a(), D(de, {
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
          x(de, {
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
      t("div", Q8, [
        t("span", X8, [
          t("span", Z8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", e4, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", t4, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", s4, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", o4, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", n4, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", a4, [
          $(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", l4, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", i4, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), c4 = /* @__PURE__ */ pe(r4, [["__scopeId", "data-v-b1be7134"]]), u4 = { class: "add-worker-content" }, d4 = { class: "manual-form" }, f4 = { class: "form-row" }, m4 = { class: "form-row-inline" }, v4 = { class: "form-field flex-2" }, p4 = { class: "form-field flex-1" }, g4 = { class: "form-row" }, h4 = { class: "api-key-wrapper" }, y4 = ["type"], w4 = { class: "result-icon" }, _4 = { class: "result-content" }, k4 = { class: "result-message" }, b4 = {
  key: 0,
  class: "result-detail"
}, $4 = { class: "modal-actions" }, C4 = /* @__PURE__ */ me({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = Ws({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), u = k(!1), d = k(null), m = U(() => l.host && l.port && l.apiKey), v = U(() => l.name && l.host && l.port && l.apiKey);
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
    return (p, _) => (a(), D(dt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", u4, [
          t("div", d4, [
            t("div", f4, [
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
            t("div", m4, [
              t("div", v4, [
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
              t("div", p4, [
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
            t("div", g4, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", h4, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, y4), [
                  [ea, l.apiKey]
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
              t("span", w4, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", _4, [
                t("span", k4, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", b4, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", $4, [
          x(de, {
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
          x(de, {
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
}), x4 = /* @__PURE__ */ pe(C4, [["__scopeId", "data-v-07a00732"]]), S4 = { class: "discovered-content" }, I4 = {
  key: 0,
  class: "workers-list"
}, E4 = { class: "worker-info" }, T4 = { class: "worker-name" }, P4 = { class: "worker-address" }, R4 = {
  key: 0,
  class: "worker-gpu"
}, M4 = {
  key: 1,
  class: "empty-state"
}, D4 = {
  key: 2,
  class: "api-key-section"
}, L4 = { class: "selected-worker" }, O4 = { class: "selected-name" }, A4 = { class: "selected-address" }, N4 = { class: "form-row" }, U4 = { class: "api-key-wrapper" }, z4 = ["type"], F4 = { class: "result-icon" }, B4 = { class: "result-message" }, V4 = { class: "modal-actions" }, W4 = /* @__PURE__ */ me({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = k(null), i = k(""), c = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await ht(), (p = d.value) == null || p.focus();
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
    return (w, p) => (a(), D(dt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", S4, [
          e.workers.length > 0 ? (a(), r("div", I4, [
            (a(!0), r(j, null, ye(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", E4, [
                t("span", T4, f(_.name), 1),
                t("span", P4, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", R4, f(_.gpu_info), 1)) : y("", !0)
              ]),
              x(de, {
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
          ])) : (a(), r("div", M4, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", D4, [
            t("div", L4, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", O4, f(l.value.name), 1),
              t("span", A4, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", N4, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", U4, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Ht(g, ["enter"])
                }, null, 40, z4), [
                  [ea, i.value]
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
              t("span", F4, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", B4, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", V4, [
          l.value ? (a(), D(de, {
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
          l.value ? (a(), D(de, {
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
}), G4 = /* @__PURE__ */ pe(W4, [["__scopeId", "data-v-5a3e40a4"]]), j4 = { class: "deploy-content" }, H4 = { class: "section" }, K4 = {
  key: 0,
  class: "loading-text"
}, q4 = {
  key: 1,
  class: "empty-remotes"
}, Y4 = {
  key: 2,
  class: "remotes-list"
}, J4 = { class: "section" }, Q4 = { class: "mode-options" }, X4 = { class: "mode-option" }, Z4 = ["disabled"], e6 = { class: "mode-option" }, t6 = { class: "section" }, s6 = {
  key: 0,
  class: "section"
}, o6 = { class: "summary-row" }, n6 = {
  key: 1,
  class: "sync-warning"
}, a6 = { class: "warning-content" }, l6 = { class: "modal-actions" }, i6 = /* @__PURE__ */ me({
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
    } = tt(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), b = k(o.worker.mode || "native"), S = k(""), R = k(null), I = k(!1), E = U(() => p.value && g.value[p.value] || null), W = U(() => {
      if (!p.value) return null;
      const L = v.value.find((V) => V.name === p.value);
      return (L == null ? void 0 : L.fetch_url) || null;
    }), K = U(() => W.value && !I.value);
    async function J() {
      w.value = !0;
      try {
        const L = await l();
        v.value = L.remotes, await Promise.all(
          L.remotes.map(async (X) => {
            const N = await i(X.name);
            N && (g.value[X.name] = N);
          })
        );
        const V = L.remotes.find((X) => X.is_default);
        V ? p.value = V.name : L.remotes.length > 0 && (p.value = L.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function M() {
      try {
        R.value = await d();
      } catch {
      }
    }
    async function P(L) {
      _.value = L;
      try {
        await c(L);
        const V = await i(L);
        V && (g.value[L] = V), n("toast", `Fetched from ${L}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function A(L) {
      C.value = L;
      try {
        await u(L, { force: !1 });
        const V = await i(L);
        V && (g.value[L] = V), n("toast", `Pushed to ${L}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function ee(L) {
      p.value = L;
    }
    async function F() {
      if (W.value) {
        I.value = !0;
        try {
          const L = await m(o.worker.name, {
            import_source: W.value,
            mode: b.value,
            name: S.value || void 0
          });
          L.id ? (n("toast", `Deployment started: ${L.name || L.id}`, "success"), n("deployed")) : L.status === "error" ? n("toast", L.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (L) {
          n("toast", L instanceof Error ? L.message : "Deployment failed", "error");
        } finally {
          I.value = !1;
        }
      }
    }
    return Qe(() => {
      J(), M();
    }), (L, V) => (a(), D(dt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: V[5] || (V[5] = (X) => L.$emit("close"))
    }, {
      body: h(() => [
        t("div", j4, [
          t("div", H4, [
            V[7] || (V[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", K4, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", q4, [...V[6] || (V[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", Y4, [
              (a(!0), r(j, null, ye(v.value, (X) => (a(), D(jr, {
                key: X.name,
                remote: X,
                "sync-status": g.value[X.name],
                "is-selected": p.value === X.name,
                "is-fetching": _.value === X.name,
                "is-pushing": C.value === X.name,
                onFetch: P,
                onPush: A,
                onSelect: ee
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", J4, [
            V[10] || (V[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", Q4, [
              t("label", X4, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": V[0] || (V[0] = (X) => b.value = X),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, Z4), [
                  [es, b.value]
                ]),
                V[8] || (V[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", e6, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": V[1] || (V[1] = (X) => b.value = X),
                  value: "native"
                }, null, 512), [
                  [es, b.value]
                ]),
                V[9] || (V[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", t6, [
            V[11] || (V[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": V[2] || (V[2] = (X) => S.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, S.value]
            ])
          ]),
          R.value ? (a(), r("div", s6, [
            V[12] || (V[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", o6, " ComfyUI: " + f(R.value.comfyui_version) + " • " + f(R.value.node_count) + " nodes • " + f(R.value.model_count) + " models • " + f(R.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          E.value && E.value.ahead > 0 ? (a(), r("div", n6, [
            V[14] || (V[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", a6, [
              t("strong", null, f(E.value.ahead) + " unpushed commit" + f(E.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            x(de, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: V[3] || (V[3] = (X) => p.value && A(p.value))
            }, {
              default: h(() => [...V[13] || (V[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", l6, [
          x(de, {
            variant: "ghost",
            size: "sm",
            onClick: V[4] || (V[4] = (X) => L.$emit("close"))
          }, {
            default: h(() => [...V[15] || (V[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(de, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !K.value || I.value,
            onClick: F
          }, {
            default: h(() => [...V[16] || (V[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), r6 = /* @__PURE__ */ pe(i6, [["__scopeId", "data-v-c12720d3"]]), c6 = { class: "custom-tab" }, u6 = { class: "section-header" }, d6 = { class: "section-actions" }, f6 = { class: "workers-content" }, m6 = {
  key: 0,
  class: "loading-state"
}, v6 = {
  key: 1,
  class: "empty-state"
}, p6 = {
  key: 2,
  class: "workers-list"
}, g6 = { class: "scan-icon" }, h6 = { class: "scan-message" }, y6 = /* @__PURE__ */ me({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = tt(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), C = k(null);
    async function b() {
      m.value = !0;
      try {
        const J = await n();
        u.value = J.workers;
      } catch (J) {
        o("toast", J instanceof Error ? J.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function S() {
      v.value = !0, C.value = null;
      try {
        const J = await c(), M = J.discovered.filter(
          (P) => !u.value.some((A) => A.host === P.host && A.port === P.port)
        );
        d.value = M, M.length > 0 ? p.value = !0 : J.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (J) {
        o("toast", J instanceof Error ? J.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function R(J) {
      try {
        await l(J), o("toast", `Worker '${J.name}' added`, "success"), w.value = !1, await b();
      } catch (M) {
        o("toast", M instanceof Error ? M.message : "Failed to add worker", "error");
      }
    }
    async function I(J) {
      try {
        await l(J), o("toast", `Worker '${J.name}' added`, "success"), p.value = !1, await b();
      } catch (M) {
        o("toast", M instanceof Error ? M.message : "Failed to add worker", "error");
      }
    }
    async function E(J) {
      g.value = J;
      try {
        await i(J), o("toast", `Worker '${J}' removed`, "success"), await b();
      } catch (M) {
        o("toast", M instanceof Error ? M.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function W(J) {
      _.value = J;
    }
    function K() {
      _.value = null, o("deployed");
    }
    return Qe(() => {
      b();
    }), (J, M) => (a(), r("div", c6, [
      t("div", u6, [
        M[8] || (M[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", d6, [
          x(de, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: S
          }, {
            default: h(() => [...M[6] || (M[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          x(de, {
            variant: "secondary",
            size: "xs",
            onClick: M[0] || (M[0] = (P) => w.value = !0)
          }, {
            default: h(() => [...M[7] || (M[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", f6, [
        m.value && u.value.length === 0 ? (a(), r("div", m6, [...M[9] || (M[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", v6, [...M[10] || (M[10] = [
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
        ])])) : (a(), r("div", p6, [
          (a(!0), r(j, null, ye(u.value, (P) => (a(), D(c4, {
            key: P.name,
            worker: P,
            "is-action-loading": g.value === P.name,
            onDeploy: W,
            onRemove: E
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (a(), r("div", {
        key: 0,
        class: Ie(["scan-result", C.value.type])
      }, [
        t("span", g6, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", h6, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: M[1] || (M[1] = (P) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), D(G4, {
        key: 1,
        workers: d.value,
        onClose: M[2] || (M[2] = (P) => p.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), D(x4, {
        key: 2,
        onClose: M[3] || (M[3] = (P) => w.value = !1),
        onAdd: R
      })) : y("", !0),
      _.value ? (a(), D(r6, {
        key: 3,
        worker: _.value,
        onClose: M[4] || (M[4] = (P) => _.value = null),
        onToast: M[5] || (M[5] = (P, A) => o("toast", P, A)),
        onDeployed: K
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), w6 = /* @__PURE__ */ pe(y6, [["__scopeId", "data-v-1637dead"]]), wa = "ComfyGit.Deploy.GitHubPAT";
function Hr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function _6(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function k6() {
  function e() {
    try {
      return localStorage.getItem(wa);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(wa, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(wa);
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
    isRemoteSsh: Hr,
    isRemoteHttps: _6
  };
}
const b6 = { class: "settings-content" }, $6 = { class: "settings-section" }, C6 = {
  key: 0,
  class: "ssh-warning"
}, x6 = { class: "form-row" }, S6 = { class: "token-wrapper" }, I6 = ["type"], E6 = { class: "result-icon" }, T6 = { class: "result-message" }, P6 = { class: "token-actions" }, R6 = /* @__PURE__ */ me({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = k6(), { getRemotes: u, testGitAuth: d } = tt(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = U(() => c());
    Qe(async () => {
      var I;
      const R = n();
      R && (m.value = R);
      try {
        const W = (I = (await u()).remotes) == null ? void 0 : I.find((K) => K.name === "origin");
        W && Hr(W.url) && (p.value = !0);
      } catch {
      }
    });
    async function C() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const R = await d(m.value);
          w.value = {
            type: R.status === "success" ? "success" : "error",
            message: R.message
          };
        } catch (R) {
          w.value = {
            type: "error",
            message: R instanceof Error ? R.message : "Connection test failed"
          };
        } finally {
          g.value = !1;
        }
      }
    }
    function b() {
      m.value && (l(m.value), o("saved"), o("close"));
    }
    function S() {
      i(), m.value = "", w.value = null;
    }
    return (R, I) => (a(), D(dt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (E) => R.$emit("close"))
    }, {
      body: h(() => [
        t("div", b6, [
          t("div", $6, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", C6, [...I[3] || (I[3] = [
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
            t("div", x6, [
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", S6, [
                qe(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (E) => m.value = E),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, I6), [
                  [ea, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: I[1] || (I[1] = (E) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              I[5] || (I[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Ie(["test-result", w.value.type])
            }, [
              t("span", E6, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", T6, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", P6, [
              x(de, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), D(de, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: S
              }, {
                default: h(() => [...I[7] || (I[7] = [
                  $(" Clear ", -1)
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
          onClick: b
        }, {
          default: h(() => [...I[10] || (I[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), M6 = /* @__PURE__ */ pe(R6, [["__scopeId", "data-v-b21588ad"]]), D6 = /* @__PURE__ */ me({
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
    } = Gr(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), b = k(null), S = U(() => [
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
    async function R(J) {
      C.value = J.id;
      try {
        await u(J), o("toast", "Instance stopped", "success");
      } catch (M) {
        o("toast", M instanceof Error ? M.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function I(J) {
      C.value = J.id;
      try {
        await d(J), o("toast", "Instance starting...", "success");
      } catch (M) {
        o("toast", M instanceof Error ? M.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function E(J) {
      b.value = J;
    }
    async function W() {
      const J = b.value;
      if (J) {
        b.value = null, C.value = J.id;
        try {
          await m(J), o("toast", "Instance terminated", "success");
        } catch (M) {
          o("toast", M instanceof Error ? M.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function K() {
      await c(), _.value = "instances";
    }
    return Qe(() => {
      c(), v();
    }), Gs(() => {
      g();
    }), (J, M) => (a(), r(j, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: M[1] || (M[1] = (P) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "ghost",
                size: "xs",
                onClick: M[0] || (M[0] = (P) => p.value = !0)
              }, {
                default: h(() => [...M[10] || (M[10] = [
                  $(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          x(Ar, {
            modelValue: _.value,
            "onUpdate:modelValue": M[2] || (M[2] = (P) => _.value = P),
            tabs: S.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), D(Y5, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": C.value,
            onRefresh: We(c),
            onStop: R,
            onStart: I,
            onTerminate: E
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), D(H8, {
            key: 1,
            onToast: M[3] || (M[3] = (P, A) => o("toast", P, A)),
            onNavigate: M[4] || (M[4] = (P) => o("navigate", P)),
            onDeployed: K
          })) : y("", !0),
          _.value === "custom" ? (a(), D(w6, {
            key: 2,
            onToast: M[5] || (M[5] = (P, A) => o("toast", P, A)),
            onDeployed: K
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
        onConfirm: W,
        onCancel: M[6] || (M[6] = (P) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      x(ls, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: M[7] || (M[7] = (P) => w.value = !1)
      }, {
        content: h(() => [...M[11] || (M[11] = [
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
      p.value ? (a(), D(M6, {
        key: 1,
        onClose: M[8] || (M[8] = (P) => p.value = !1),
        onSaved: M[9] || (M[9] = (P) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), L6 = /* @__PURE__ */ pe(D6, [["__scopeId", "data-v-d4e32a10"]]), O6 = { class: "header-info" }, A6 = { class: "commit-hash" }, N6 = {
  key: 0,
  class: "commit-refs"
}, U6 = { class: "commit-message" }, z6 = { class: "commit-date" }, F6 = {
  key: 0,
  class: "loading"
}, B6 = {
  key: 1,
  class: "changes-section"
}, V6 = { class: "stats-row" }, W6 = { class: "stat" }, G6 = { class: "stat insertions" }, j6 = { class: "stat deletions" }, H6 = {
  key: 0,
  class: "change-group"
}, K6 = {
  key: 1,
  class: "change-group"
}, q6 = {
  key: 0,
  class: "version"
}, Y6 = {
  key: 2,
  class: "change-group"
}, J6 = { class: "change-item" }, Q6 = /* @__PURE__ */ me({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = tt(), n = k(null), l = k(!0), i = U(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = U(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Qe(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), D(dt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", O6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", A6, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", N6, [
              (a(!0), r(j, null, ye(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          x(Te, {
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
          t("div", U6, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", z6, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", F6, "Loading details...")) : n.value ? (a(), r("div", B6, [
            t("div", V6, [
              t("span", W6, f(n.value.stats.files_changed) + " files", 1),
              t("span", G6, "+" + f(n.value.stats.insertions), 1),
              t("span", j6, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", H6, [
              x(qo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, ye(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, ye(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(j, null, ye(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", K6, [
              x(qo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(j, null, ye(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", q6, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(j, null, ye(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", Y6, [
              x(qo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", J6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
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
}), X6 = /* @__PURE__ */ pe(Q6, [["__scopeId", "data-v-d256ff6d"]]), Z6 = { class: "base-textarea-wrapper" }, eI = ["value", "rows", "placeholder", "disabled", "maxlength"], tI = {
  key: 0,
  class: "base-textarea-count"
}, sI = /* @__PURE__ */ me({
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
    return (i, c) => (a(), r("div", Z6, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Ht(rt((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Ht(rt((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ht(l, ["enter"])
        ]
      }, null, 40, eI),
      e.showCharCount && e.maxLength ? (a(), r("div", tI, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ti = /* @__PURE__ */ pe(sI, [["__scopeId", "data-v-c6d16c93"]]), oI = ["checked", "disabled"], nI = { class: "base-checkbox-box" }, aI = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, lI = {
  key: 0,
  class: "base-checkbox-label"
}, iI = /* @__PURE__ */ me({
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
      }, null, 40, oI),
      t("span", nI, [
        e.modelValue ? (a(), r("svg", aI, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", lI, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), La = /* @__PURE__ */ pe(iI, [["__scopeId", "data-v-bf17c831"]]), rI = { class: "popover-header" }, cI = { class: "popover-body" }, uI = {
  key: 0,
  class: "changes-summary"
}, dI = {
  key: 0,
  class: "change-item"
}, fI = {
  key: 1,
  class: "change-item"
}, mI = {
  key: 2,
  class: "change-item"
}, vI = {
  key: 3,
  class: "change-item"
}, pI = {
  key: 4,
  class: "change-item"
}, gI = {
  key: 5,
  class: "change-item"
}, hI = {
  key: 1,
  class: "no-changes"
}, yI = {
  key: 2,
  class: "loading"
}, wI = {
  key: 3,
  class: "issues-error"
}, _I = { class: "error-header" }, kI = { class: "error-title" }, bI = { class: "issues-list" }, $I = { class: "workflow-state" }, CI = { class: "message-section" }, xI = { class: "popover-footer" }, SI = {
  key: 1,
  class: "commit-popover"
}, II = { class: "popover-header" }, EI = { class: "popover-body" }, TI = {
  key: 0,
  class: "changes-summary"
}, PI = {
  key: 0,
  class: "change-item"
}, RI = {
  key: 1,
  class: "change-item"
}, MI = {
  key: 2,
  class: "change-item"
}, DI = {
  key: 3,
  class: "change-item"
}, LI = {
  key: 4,
  class: "change-item"
}, OI = {
  key: 5,
  class: "change-item"
}, AI = {
  key: 1,
  class: "no-changes"
}, NI = {
  key: 2,
  class: "loading"
}, UI = {
  key: 3,
  class: "issues-error"
}, zI = { class: "error-header" }, FI = { class: "error-title" }, BI = { class: "issues-list" }, VI = { class: "workflow-state" }, WI = { class: "message-section" }, GI = { class: "popover-footer" }, jI = /* @__PURE__ */ me({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = tt(), i = k(""), c = k(!1), u = k(!1), d = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = U(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = U(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), g = U(() => v.value.length > 0), w = U(() => g.value && !u.value);
    async function p() {
      var _, C, b, S;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const R = await l(i.value.trim(), u.value);
          if (R.status === "success") {
            const I = `Committed: ${((_ = R.summary) == null ? void 0 : _.new) || 0} new, ${((C = R.summary) == null ? void 0 : C.modified) || 0} modified, ${((b = R.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            n("committed", { success: !0, message: I });
          } else if (R.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (R.status === "blocked") {
            const I = ((S = R.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: R.message || "Commit failed" });
        } catch (R) {
          n("committed", { success: !1, message: R instanceof Error ? R.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (a(), D(kt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (b) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", rI, [
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
          t("div", cI, [
            e.status && d.value ? (a(), r("div", uI, [
              e.status.workflows.new.length ? (a(), r("div", dI, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", fI, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", mI, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", vI, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", pI, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", gI, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", hI, " No changes to commit ")) : (a(), r("div", yI, " Loading... ")),
            g.value ? (a(), r("div", wI, [
              t("div", _I, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", kI, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", bI, [
                (a(!0), r(j, null, ye(v.value, (b) => (a(), r("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f(b.name), 1),
                  t("span", $I, "(" + f(b.sync_state) + ")", 1),
                  $(": " + f(b.issue_summary), 1)
                ]))), 128))
              ]),
              x(La, {
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
            t("div", CI, [
              x(ti, {
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
          t("div", xI, [
            x(Te, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (b) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
    ])) : (a(), r("div", SI, [
      t("div", II, [
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
      t("div", EI, [
        e.status && d.value ? (a(), r("div", TI, [
          e.status.workflows.new.length ? (a(), r("div", PI, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", RI, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", MI, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", DI, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", LI, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", OI, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", AI, " No changes to commit ")) : (a(), r("div", NI, " Loading... ")),
        g.value ? (a(), r("div", UI, [
          t("div", zI, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", FI, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", BI, [
            (a(!0), r(j, null, ye(v.value, (b) => (a(), r("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, f(b.name), 1),
              t("span", VI, "(" + f(b.sync_state) + ")", 1),
              $(": " + f(b.issue_summary), 1)
            ]))), 128))
          ]),
          x(La, {
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
        t("div", WI, [
          x(ti, {
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
      t("div", GI, [
        x(Te, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (b) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
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
}), Kr = /* @__PURE__ */ pe(jI, [["__scopeId", "data-v-5f897631"]]), HI = { class: "modal-header" }, KI = { class: "modal-body" }, qI = { class: "switch-message" }, YI = { class: "switch-details" }, JI = { class: "modal-actions" }, QI = /* @__PURE__ */ me({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(kt, { to: "body" }, [
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
          t("div", HI, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", KI, [
            t("p", qI, [
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
            t("p", YI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", JI, [
            x(de, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(de, {
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
}), XI = /* @__PURE__ */ pe(QI, [["__scopeId", "data-v-e9c5253e"]]), ZI = {
  key: 0,
  class: "modal-overlay"
}, eE = { class: "modal-content" }, tE = { class: "modal-body" }, sE = { class: "progress-info" }, oE = { class: "progress-percentage" }, nE = { class: "progress-state" }, aE = { class: "switch-steps" }, lE = { class: "step-icon" }, iE = { class: "step-label" }, rE = /* @__PURE__ */ me({
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
    return (i, c) => (a(), D(kt, { to: "body" }, [
      e.show ? (a(), r("div", ZI, [
        t("div", eE, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", tE, [
            x(sa, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", sE, [
              t("div", oE, f(e.progress) + "%", 1),
              t("div", nE, f(o.value), 1)
            ]),
            t("div", aE, [
              (a(!0), r(j, null, ye(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Ie(["switch-step", u.status])
              }, [
                t("span", lE, f(u.icon), 1),
                t("span", iE, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), cE = /* @__PURE__ */ pe(rE, [["__scopeId", "data-v-768a5078"]]), uE = { class: "modal-header" }, dE = { class: "modal-body" }, fE = {
  key: 0,
  class: "node-section"
}, mE = { class: "node-list" }, vE = {
  key: 1,
  class: "node-section"
}, pE = { class: "node-list" }, gE = { class: "modal-actions" }, hE = /* @__PURE__ */ me({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), D(kt, { to: "body" }, [
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
          t("div", uE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", dE, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", fE, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", mE, [
                (a(!0), r(j, null, ye(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", vE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", pE, [
                (a(!0), r(j, null, ye(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", gE, [
            x(de, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(de, {
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
}), yE = /* @__PURE__ */ pe(hE, [["__scopeId", "data-v-7cad7518"]]), wE = [
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
], _E = "v0.0.17", kE = "Akatz", bE = { class: "social-buttons" }, $E = ["title", "aria-label", "onClick"], CE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, xE = ["d"], SE = ["title", "aria-label", "onClick"], IE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, EE = ["d"], TE = /* @__PURE__ */ me({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", bE, [
      (a(!0), r(j, null, ye(We(wE), (l) => (a(), r(j, {
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
          (a(), r("svg", CE, [
            t("path", {
              d: l.iconPath
            }, null, 8, xE)
          ]))
        ], 8, $E)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", IE, [
            t("path", {
              d: l.iconPath
            }, null, 8, EE)
          ]))
        ], 8, SE))
      ], 64))), 128))
    ]));
  }
}), qr = /* @__PURE__ */ pe(TE, [["__scopeId", "data-v-4f846342"]]), PE = { class: "footer-info" }, RE = { class: "version" }, ME = { class: "made-by" }, DE = /* @__PURE__ */ me({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", PE, [
      t("span", RE, f(We(_E)), 1),
      t("span", ME, [
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
        $(" by " + f(We(kE)), 1)
      ])
    ]));
  }
}), Yr = /* @__PURE__ */ pe(DE, [["__scopeId", "data-v-8bc3db0a"]]), LE = /* @__PURE__ */ me({
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
    return (i, c) => (a(), D(dt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        x(Or, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          x(Te, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Te, {
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
}), OE = /* @__PURE__ */ pe(LE, [["__scopeId", "data-v-fac00ae7"]]), AE = { class: "header-actions" }, NE = {
  key: 0,
  class: "wizard-step"
}, UE = { class: "form-field" }, zE = ["placeholder"], FE = {
  key: 0,
  class: "form-error"
}, BE = { class: "form-field form-field--checkbox" }, VE = { class: "form-checkbox" }, WE = {
  key: 0,
  class: "form-field"
}, GE = ["placeholder"], jE = {
  key: 0,
  class: "form-info"
}, HE = {
  key: 1,
  class: "form-suggestion"
}, KE = {
  key: 2,
  class: "form-error"
}, qE = {
  key: 3,
  class: "form-info"
}, YE = {
  key: 1,
  class: "wizard-step"
}, JE = {
  key: 0,
  class: "progress-check-loading"
}, QE = {
  key: 0,
  class: "cli-warning"
}, XE = { class: "cli-warning-header" }, ZE = {
  key: 1,
  class: "env-landing"
}, eT = { class: "env-list" }, tT = ["value"], sT = { class: "env-name" }, oT = {
  key: 2,
  class: "env-create"
}, nT = { class: "form-field" }, aT = { class: "form-field" }, lT = ["value"], iT = { class: "form-field" }, rT = ["disabled"], cT = ["value"], uT = { class: "form-field" }, dT = ["value"], fT = { class: "form-field form-field--checkbox" }, mT = { class: "form-checkbox" }, vT = {
  key: 0,
  class: "form-error"
}, pT = {
  key: 1,
  class: "env-creating"
}, gT = { class: "creating-intro" }, hT = {
  key: 3,
  class: "env-import"
}, yT = { class: "wizard-footer" }, wT = { class: "wizard-footer-actions" }, uo = 10, _T = 600 * 1e3, si = 1800 * 1e3, kT = /* @__PURE__ */ me({
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
    } = tt(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), b = k(!1), S = k(!1), R = k(null), I = k(o.initialStep === 2), E = k(o.defaultPath), W = k(!!o.detectedModelsDir), K = k(o.detectedModelsDir || ""), J = k(null), M = k(null), P = k(null), A = k(null), ee = k("my-new-env"), F = k(zr), L = k("latest"), V = k(Fr), X = k(!0), N = k(null), ae = k(null), Z = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), we = k(!1), be = k(!1), Me = k(!1), ze = k({ progress: 0, message: "" }), Ue = k({ progress: 0, message: "" }), Ye = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ve = k(0), oe = k(null), re = k(0), ce = k(null), Se = U(() => {
      var $e, ge;
      const te = ($e = E.value) == null ? void 0 : $e.trim(), q = !J.value, De = !W.value || !M.value && ((ge = K.value) == null ? void 0 : ge.trim());
      return te && q && De;
    }), Pe = U(() => {
      var te;
      return (te = ee.value) == null ? void 0 : te.trim();
    }), Fe = U(() => !!(g.value === 2 || ae.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = U(() => ae.value || o.workspacePath || null);
    async function T() {
      var te;
      if (J.value = null, !!((te = E.value) != null && te.trim()))
        try {
          const q = await c({ path: E.value, type: "workspace" });
          q.valid || (J.value = q.error || "Invalid path");
        } catch (q) {
          J.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function z() {
      var te;
      if (M.value = null, P.value = null, A.value = null, !!((te = K.value) != null && te.trim()))
        try {
          const q = await c({ path: K.value, type: "models" });
          if (q.valid)
            A.value = q.model_count ?? null;
          else if (M.value = q.error || "Invalid path", q.suggestion) {
            P.value = q.suggestion, K.value = q.suggestion, M.value = null;
            const De = await c({ path: q.suggestion, type: "models" });
            De.valid && (A.value = De.model_count ?? null);
          }
        } catch (q) {
          M.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function H() {
      var te, q, De, $e, ge;
      if (J.value = null, M.value = null, await T(), (te = J.value) != null && te.includes("already exists")) {
        J.value = null, ae.value = ((q = E.value) == null ? void 0 : q.trim()) || o.defaultPath, g.value = 2, ie();
        return;
      }
      if (!J.value && !(W.value && ((De = K.value) != null && De.trim()) && (await z(), M.value))) {
        be.value = !0;
        try {
          await l({
            workspace_path: (($e = E.value) == null ? void 0 : $e.trim()) || o.defaultPath,
            models_directory: W.value && ((ge = K.value) == null ? void 0 : ge.trim()) || null
          }), ve.value = 0, oe.value = Date.now();
          const G = setInterval(async () => {
            var B;
            if (oe.value && Date.now() - oe.value > _T) {
              clearInterval(G), be.value = !1, J.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const fe = await i();
              if (ve.value = 0, fe.state === "idle" && be.value) {
                clearInterval(G), be.value = !1, J.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ze.value = { progress: fe.progress, message: fe.message }, fe.state === "complete" ? (clearInterval(G), be.value = !1, ae.value = ((B = E.value) == null ? void 0 : B.trim()) || o.defaultPath, g.value = 2, ie()) : fe.state === "error" && (clearInterval(G), be.value = !1, J.value = fe.error || "Workspace creation failed");
            } catch (fe) {
              ve.value++, console.warn(`Polling failure ${ve.value}/${uo}:`, fe), ve.value >= uo && (clearInterval(G), be.value = !1, J.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (G) {
          be.value = !1, J.value = G instanceof Error ? G.message : "Failed to create workspace";
        }
      }
    }
    async function ne() {
      Me.value = !0, N.value = null;
      try {
        const te = {
          name: ee.value.trim() || "my-new-env",
          python_version: F.value,
          comfyui_version: L.value,
          torch_backend: V.value,
          switch_after: X.value,
          workspace_path: ae.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(te)).status === "started") {
          re.value = 0, ce.value = Date.now();
          const De = setInterval(async () => {
            if (ce.value && Date.now() - ce.value > si) {
              clearInterval(De), Me.value = !1, N.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const $e = await d();
              if (re.value = 0, $e.state === "idle" && Me.value) {
                clearInterval(De), Me.value = !1, N.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ue.value = {
                progress: $e.progress ?? 0,
                message: $e.message,
                phase: $e.phase
              }, $e.state === "complete") {
                clearInterval(De), Me.value = !1;
                const ge = $e.environment_name || te.name;
                X.value ? n("complete", ge, ae.value) : (p.value = "landing", n("environment-created-no-switch", ge));
              } else $e.state === "error" && (clearInterval(De), Me.value = !1, N.value = $e.error || "Environment creation failed");
            } catch ($e) {
              re.value++, console.warn(`Polling failure ${re.value}/${uo}:`, $e), re.value >= uo && (clearInterval(De), Me.value = !1, N.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (te) {
        Me.value = !1, N.value = te instanceof Error ? te.message : "Unknown error";
      }
    }
    async function ie() {
      we.value = !0;
      try {
        Z.value = await v();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        we.value = !1;
      }
    }
    function Ce() {
      w.value && n("switch-environment", w.value, ae.value);
    }
    function ue() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function _e(te, q) {
      C.value = !1, q ? n("complete", te, ae.value) : (n("environment-created-no-switch", te), p.value = "landing");
    }
    function he() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (K.value = o.detectedModelsDir), o.workspacePath && (ae.value = o.workspacePath), g.value === 2) {
        ie();
        const te = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Re(), clearTimeout(te), I.value = !1;
      }
    });
    async function Re() {
      try {
        const te = await d();
        if (console.log("[ComfyGit] Create progress check:", te.state, te), te.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", te.environment_name), p.value = "create", Me.value = !0, ee.value = te.environment_name || "my-new-env", Ue.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase
          }, Ee();
          return;
        }
      } catch (te) {
        console.log("[ComfyGit] Create progress check failed:", te);
      }
      try {
        const te = await m();
        console.log("[ComfyGit] Import progress check:", te.state, te), te.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", te.environment_name), R.value = {
          message: te.message || "Importing...",
          phase: te.phase || "",
          progress: te.progress ?? 0,
          environmentName: te.environment_name || ""
        }, S.value = !0, p.value = "import", C.value = !0);
      } catch (te) {
        console.log("[ComfyGit] Import progress check failed:", te);
      }
    }
    async function Ee() {
      re.value = 0, ce.value = Date.now();
      let te = null;
      const q = async () => {
        if (ce.value && Date.now() - ce.value > si)
          return te && clearInterval(te), Me.value = !1, N.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const $e = await d();
          if (re.value = 0, $e.state === "idle" && Me.value)
            return te && clearInterval(te), Me.value = !1, N.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ue.value = {
            progress: $e.progress ?? 0,
            message: $e.message,
            phase: $e.phase
          }, $e.state === "complete") {
            te && clearInterval(te), Me.value = !1;
            const ge = $e.environment_name || ee.value;
            return n("complete", ge, ae.value), !1;
          } else if ($e.state === "error")
            return te && clearInterval(te), Me.value = !1, N.value = $e.error || "Environment creation failed", !1;
          return !0;
        } catch ($e) {
          return re.value++, console.warn(`Polling failure ${re.value}/${uo}:`, $e), re.value >= uo ? (te && clearInterval(te), Me.value = !1, N.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (te = setInterval(async () => {
        !await q() && te && clearInterval(te);
      }, 2e3));
    }
    return (te, q) => (a(), r(j, null, [
      x(dt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[15] || (q[15] = (De) => te.$emit("close"))
      }, {
        header: h(() => [
          q[20] || (q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", AE, [
            x(qr),
            q[19] || (q[19] = t("span", { class: "header-divider" }, null, -1)),
            Fe.value ? (a(), r("button", {
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
              onClick: q[1] || (q[1] = (De) => te.$emit("close")),
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
            g.value === 1 ? (a(), r("div", NE, [
              q[24] || (q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", UE, [
                q[21] || (q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = ($e) => E.value = $e),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, zE), [
                  [zt, E.value]
                ]),
                J.value ? (a(), r("p", FE, f(J.value), 1)) : y("", !0)
              ]),
              t("div", BE, [
                t("label", VE, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = ($e) => W.value = $e)
                  }, null, 512), [
                    [nn, W.value]
                  ]),
                  q[22] || (q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              W.value ? (a(), r("div", WE, [
                q[23] || (q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = ($e) => K.value = $e),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, GE), [
                  [zt, K.value]
                ]),
                e.detectedModelsDir && !K.value ? (a(), r("p", jE, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                P.value ? (a(), r("p", HE, " Did you mean: " + f(P.value), 1)) : y("", !0),
                M.value ? (a(), r("p", KE, f(M.value), 1)) : y("", !0),
                A.value !== null && !M.value ? (a(), r("p", qE, " Found " + f(A.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              be.value ? (a(), D(Bn, {
                key: 1,
                progress: ze.value.progress,
                message: ze.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", YE, [
              I.value ? (a(), r("div", JE, [...q[25] || (q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(j, { key: 1 }, [
                !o.cliInstalled && !b.value ? (a(), r("div", QE, [
                  t("div", XE, [
                    q[27] || (q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    q[28] || (q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: q[5] || (q[5] = ($e) => b.value = !0),
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
                p.value === "landing" ? (a(), r("div", ZE, [
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
                      S.value = !1, p.value = "import";
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
                    t("div", eT, [
                      (a(!0), r(j, null, ye(o.existingEnvironments, ($e) => (a(), r("label", {
                        key: $e,
                        class: Ie(["env-option", { selected: w.value === $e }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: $e,
                          "onUpdate:modelValue": q[8] || (q[8] = (ge) => w.value = ge)
                        }, null, 8, tT), [
                          [es, w.value]
                        ]),
                        t("span", sT, f($e), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", oT, [
                  Me.value ? (a(), r("div", pT, [
                    t("p", gT, [
                      q[41] || (q[41] = $(" Creating environment ", -1)),
                      t("strong", null, f(ee.value), 1),
                      q[42] || (q[42] = $("... ", -1))
                    ]),
                    x(Bn, {
                      progress: Ue.value.progress,
                      message: Ue.value.message,
                      "current-phase": Ue.value.phase,
                      "show-steps": !0,
                      steps: Ye
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[43] || (q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(j, { key: 0 }, [
                    q[40] || (q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", nT, [
                      q[35] || (q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": q[9] || (q[9] = ($e) => ee.value = $e),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, ee.value]
                      ])
                    ]),
                    t("div", aT, [
                      q[36] || (q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = ($e) => F.value = $e),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, ye(We(Ur), ($e) => (a(), r("option", {
                          key: $e,
                          value: $e
                        }, f($e), 9, lT))), 128))
                      ], 512), [
                        [hs, F.value]
                      ])
                    ]),
                    t("div", iT, [
                      q[37] || (q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = ($e) => L.value = $e),
                        class: "form-select",
                        disabled: we.value
                      }, [
                        (a(!0), r(j, null, ye(Z.value, ($e) => (a(), r("option", {
                          key: $e.tag_name,
                          value: $e.tag_name
                        }, f($e.name), 9, cT))), 128))
                      ], 8, rT), [
                        [hs, L.value]
                      ])
                    ]),
                    t("div", uT, [
                      q[38] || (q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": q[12] || (q[12] = ($e) => V.value = $e),
                        class: "form-select"
                      }, [
                        (a(!0), r(j, null, ye(We(ll), ($e) => (a(), r("option", {
                          key: $e,
                          value: $e
                        }, f($e) + f($e === "auto" ? " (detect GPU)" : ""), 9, dT))), 128))
                      ], 512), [
                        [hs, V.value]
                      ])
                    ]),
                    t("div", fT, [
                      t("label", mT, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[13] || (q[13] = ($e) => X.value = $e)
                        }, null, 512), [
                          [nn, X.value]
                        ]),
                        q[39] || (q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    N.value ? (a(), r("div", vT, f(N.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", hT, [
                  x(Wr, {
                    "workspace-path": ae.value,
                    "resume-import": S.value,
                    "initial-progress": R.value ?? void 0,
                    onImportComplete: _e,
                    onImportStarted: q[14] || (q[14] = ($e) => C.value = !0),
                    onSourceCleared: he
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", yT, [
            x(Yr),
            t("div", wT, [
              g.value === 1 ? (a(), D(Te, {
                key: 0,
                variant: "primary",
                disabled: !Se.value || be.value,
                onClick: H
              }, {
                default: h(() => [
                  $(f(be.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(j, { key: 1 }, [
                !Me.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !ae.value) ? (a(), D(Te, {
                  key: 0,
                  variant: "secondary",
                  onClick: ue
                }, {
                  default: h(() => [...q[44] || (q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), D(Te, {
                  key: 1,
                  variant: "primary",
                  disabled: !Pe.value || Me.value,
                  onClick: ne
                }, {
                  default: h(() => [
                    $(f(Me.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), D(Te, {
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
      _.value ? (a(), D(OE, {
        key: 0,
        "workspace-path": O.value,
        onClose: q[16] || (q[16] = (De) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), bT = /* @__PURE__ */ pe(kT, [["__scopeId", "data-v-9a9aadc0"]]), $T = { class: "comfygit-panel" }, CT = { class: "panel-header" }, xT = { class: "header-left" }, ST = {
  key: 0,
  class: "header-info"
}, IT = { class: "header-actions" }, ET = { class: "env-switcher" }, TT = {
  key: 0,
  class: "header-info"
}, PT = { class: "branch-name" }, RT = { class: "panel-main" }, MT = { class: "sidebar" }, DT = { class: "sidebar-content" }, LT = { class: "sidebar-section" }, OT = { class: "sidebar-section" }, AT = { class: "sidebar-section" }, NT = {
  key: 0,
  class: "sidebar-badge"
}, UT = { class: "sidebar-footer" }, zT = { class: "content-area" }, FT = {
  key: 0,
  class: "error-message"
}, BT = {
  key: 1,
  class: "loading"
}, VT = { class: "dialog-content env-selector-dialog" }, WT = { class: "dialog-header" }, GT = { class: "dialog-body" }, jT = { class: "env-list" }, HT = { class: "env-info" }, KT = { class: "env-name-row" }, qT = { class: "env-indicator" }, YT = { class: "env-name" }, JT = {
  key: 0,
  class: "env-branch"
}, QT = {
  key: 1,
  class: "current-label"
}, XT = { class: "env-stats" }, ZT = ["onClick"], e7 = { class: "toast-container" }, t7 = { class: "toast-message" }, oi = "ComfyGit.LastView", ni = "ComfyGit.LastSection", s7 = /* @__PURE__ */ me({
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
      getSetupStatus: S
    } = tt(), R = sp(), { liveInstanceCount: I } = Gr({ autoStart: !0 }), E = k(null), W = k([]), K = k([]), J = k([]), M = U(() => J.value.find((le) => le.is_current)), P = k(null), A = k(!1), ee = k(1), F = U(() => {
      var le;
      return ((le = P.value) == null ? void 0 : le.state) || "managed";
    }), L = k(!1), V = k(null), X = k(null), N = k(!1), ae = k(null), Z = k(null), we = k(null), be = k(!1), Me = k(!1), ze = k(""), Ue = k(null), Ye = k({ state: "idle", progress: 0, message: "" });
    let ve = null, oe = null;
    const re = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ce = o.initialView ? re[o.initialView] : null, Se = [
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
    function Fe() {
      try {
        const le = sessionStorage.getItem(oi), Y = sessionStorage.getItem(ni);
        if (le && Y && Se.includes(le) && Pe.includes(Y))
          return { view: le, section: Y };
      } catch {
      }
      return null;
    }
    const O = Fe(), T = k((ce == null ? void 0 : ce.view) ?? (O == null ? void 0 : O.view) ?? "status"), z = k((ce == null ? void 0 : ce.section) ?? (O == null ? void 0 : O.section) ?? "this-env");
    function H(le, Y) {
      T.value = le, z.value = Y;
      try {
        sessionStorage.setItem(oi, le), sessionStorage.setItem(ni, Y);
      } catch {
      }
    }
    function ne(le) {
      const Le = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[le];
      Le && H(Le.view, Le.section);
    }
    function ie() {
      H("branches", "this-env");
    }
    function Ce() {
      n("close"), setTimeout(() => {
        var Y;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Le of le)
          if (((Y = Le.textContent) == null ? void 0 : Y.trim()) === "Manager") {
            Le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ue = k(null), _e = k(!1), he = k(!1), Re = k([]);
    let Ee = 0;
    function te(le, Y = "info", Le = 3e3) {
      const je = ++Ee;
      return Re.value.push({ id: je, message: le, type: Y }), Le > 0 && setTimeout(() => {
        Re.value = Re.value.filter((at) => at.id !== je);
      }, Le), je;
    }
    function q(le) {
      Re.value = Re.value.filter((Y) => Y.id !== le);
    }
    function De(le, Y) {
      te(le, Y);
    }
    const $e = U(() => {
      if (!E.value) return "neutral";
      const le = E.value.workflows, Y = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || E.value.has_changes;
      return E.value.comparison.is_synced ? Y ? "warning" : "success" : "error";
    });
    U(() => E.value ? $e.value === "success" ? "All synced" : $e.value === "warning" ? "Uncommitted changes" : $e.value === "error" ? "Not synced" : "" : "");
    async function ge() {
      L.value = !0, V.value = null;
      try {
        const [le, Y, Le, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        E.value = le, W.value = Y.commits, K.value = Le.branches, J.value = je, n("statusUpdate", le), ae.value && await ae.value.loadWorkflows(!0);
      } catch (le) {
        V.value = le instanceof Error ? le.message : "Failed to load status", E.value = null, W.value = [], K.value = [];
      } finally {
        L.value = !1;
      }
    }
    function G(le) {
      X.value = le;
    }
    async function B(le) {
      var Le;
      X.value = null;
      const Y = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      ue.value = {
        title: Y ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: Y ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Le = le.hash) == null ? void 0 : Le.slice(0, 7))}?`,
        details: Y ? Hs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: Y ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: Y,
        onConfirm: async () => {
          var vt;
          ue.value = null, st();
          const je = te(`Checking out ${le.short_hash || ((vt = le.hash) == null ? void 0 : vt.slice(0, 7))}...`, "info", 0), at = await u(le.hash, Y);
          q(je), at.status === "success" ? te("Restarting ComfyUI...", "success") : te(at.message || "Checkout failed", "error");
        }
      };
    }
    async function fe(le) {
      const Y = E.value && (E.value.workflows.new.length > 0 || E.value.workflows.modified.length > 0 || E.value.workflows.deleted.length > 0 || E.value.has_changes);
      ue.value = {
        title: Y ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: Y ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: Y ? Hs() : void 0,
        warning: Y ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: Y ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ue.value = null, st();
          const Le = te(`Switching to ${le}...`, "info", 0), je = await m(le, Y);
          q(Le), je.status === "success" ? te("Restarting ComfyUI...", "success") : te(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ve(le) {
      const Y = te(`Creating branch ${le}...`, "info", 0), Le = await d(le);
      q(Y), Le.status === "success" ? (te(`Branch "${le}" created`, "success"), await ge()) : te(Le.message || "Failed to create branch", "error");
    }
    async function Ze(le, Y = !1) {
      const Le = async (je) => {
        var vt;
        const at = te(`Deleting branch ${le}...`, "info", 0);
        try {
          const Jt = await v(le, je);
          q(at), Jt.status === "success" ? (te(`Branch "${le}" deleted`, "success"), await ge()) : (vt = Jt.message) != null && vt.includes("not fully merged") ? ue.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ue.value = null, await Le(!0);
            }
          } : te(Jt.message || "Failed to delete branch", "error");
        } catch (Jt) {
          q(at);
          const Ks = Jt instanceof Error ? Jt.message : "Failed to delete branch";
          Ks.includes("not fully merged") ? ue.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ue.value = null, await Le(!0);
            }
          } : te(Ks, "error");
        }
      };
      ue.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ue.value = null, await Le(Y);
        }
      };
    }
    async function St(le) {
      X.value = null;
      const Y = prompt("Enter branch name:");
      if (Y) {
        const Le = te(`Creating branch ${Y}...`, "info", 0), je = await d(Y, le.hash);
        q(Le), je.status === "success" ? (te(`Branch "${Y}" created from ${le.short_hash}`, "success"), await ge()) : te(je.message || "Failed to create branch", "error");
      }
    }
    function st() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function pt() {
      ue.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ue.value = null, st(), te("Restarting environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function qt() {
      ue.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ue.value = null, te("Stopping environment...", "info");
          try {
            (le = window.app) != null && le.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function yt(le, Y) {
      N.value = !1, ze.value = le, Ue.value = Y || null, be.value = !0;
    }
    async function Io() {
      be.value = !1, Me.value = !0, st(), Ye.value = {
        progress: 10,
        state: is(10),
        message: ys(10)
      };
      try {
        await w(ze.value, Ue.value || void 0), ao(), Eo();
      } catch (le) {
        Yt(), Me.value = !1, te(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), Ye.value = { state: "idle", progress: 0, message: "" }, Ue.value = null;
      }
    }
    function is(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function ys(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[is(le)] || "";
    }
    function ao() {
      if (oe) return;
      let le = 10;
      const Y = 60, Le = 5e3, je = 100, at = (Y - le) / (Le / je);
      oe = window.setInterval(() => {
        if (le += at, le >= Y && (le = Y, Yt()), Ye.value.progress < Y) {
          const vt = Math.floor(le);
          Ye.value = {
            progress: vt,
            state: is(vt),
            message: ys(vt)
          };
        }
      }, je);
    }
    function Yt() {
      oe && (clearInterval(oe), oe = null);
    }
    function Eo() {
      ve || (ve = window.setInterval(async () => {
        try {
          let le = await R.getStatus();
          if ((!le || le.state === "idle") && (le = await p()), !le)
            return;
          const Y = le.progress || 0;
          Y >= 60 && Yt();
          const Le = Math.max(Y, Ye.value.progress), je = le.state && le.state !== "idle" && le.state !== "unknown", at = je ? le.state : is(Le), vt = je && le.message || ys(Le);
          Ye.value = {
            state: at,
            progress: Le,
            message: vt
          }, le.state === "complete" ? (Yt(), js(), Me.value = !1, te(`✓ Switched to ${ze.value}`, "success"), await ge(), ze.value = "") : le.state === "rolled_back" ? (Yt(), js(), Me.value = !1, te("Switch failed, restored previous environment", "warning"), ze.value = "") : le.state === "critical_failure" && (Yt(), js(), Me.value = !1, te(`Critical error during switch: ${le.message}`, "error"), ze.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function js() {
      Yt(), ve && (clearInterval(ve), ve = null);
    }
    function xe() {
      var le;
      be.value = !1, ze.value = "", (le = P.value) != null && le.state && P.value.state !== "managed" && (ee.value = P.value.state === "no_workspace" ? 1 : 2, A.value = !0);
    }
    async function se(le) {
      _e.value = !1, await ge(), te(le.message, le.success ? "success" : "error");
    }
    async function He() {
      he.value = !1;
      const le = te("Syncing environment...", "info", 0);
      try {
        const Y = await C("skip", !0);
        if (q(le), Y.status === "success") {
          const Le = [];
          Y.nodes_installed.length && Le.push(`${Y.nodes_installed.length} installed`), Y.nodes_removed.length && Le.push(`${Y.nodes_removed.length} removed`);
          const je = Le.length ? `: ${Le.join(", ")}` : "";
          te(`✓ Environment synced${je}`, "success"), await ge();
        } else {
          const Le = Y.errors.length ? Y.errors.join("; ") : Y.message;
          te(`Sync failed: ${Le}`, "error");
        }
      } catch (Y) {
        q(le), te(`Sync error: ${Y instanceof Error ? Y.message : "Unknown error"}`, "error");
      }
    }
    async function wt(le) {
      var Y;
      try {
        const Le = await b(le);
        Le.failed.length === 0 ? te(`✓ Repaired ${Le.success} workflow${Le.success === 1 ? "" : "s"}`, "success") : te(`Repaired ${Le.success}, failed: ${Le.failed.length}`, "warning"), await ge();
      } catch (Le) {
        te(`Repair failed: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
      } finally {
        (Y = we.value) == null || Y.resetRepairingState();
      }
    }
    async function Bt() {
      var Y, Le;
      const le = te("Repairing environment...", "info", 0);
      try {
        const je = await C("skip", !0);
        if (q(le), je.status === "success") {
          const at = [];
          je.nodes_installed.length && at.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && at.push(`${je.nodes_removed.length} removed`);
          const vt = at.length ? `: ${at.join(", ")}` : "";
          te(`✓ Environment repaired${vt}`, "success"), (Y = we.value) == null || Y.closeDetailModal(), await ge();
        } else {
          const at = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          te(`Repair failed: ${at}`, "error");
        }
      } catch (je) {
        q(le), te(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Le = we.value) == null || Le.resetRepairingEnvironmentState();
      }
    }
    async function ws(le, Y) {
      te(`Environment '${le}' created`, "success"), await ge(), Z.value && await Z.value.loadEnvironments(), Y && await yt(le);
    }
    async function _s(le) {
      var Y;
      if (((Y = M.value) == null ? void 0 : Y.name) === le) {
        te("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ue.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ue.value = null;
          try {
            const Le = await _(le);
            Le.status === "success" ? (te(`Environment "${le}" deleted`, "success"), await ge(), Z.value && await Z.value.loadEnvironments()) : te(Le.message || "Failed to delete environment", "error");
          } catch (Le) {
            te(`Error deleting environment: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function rs(le, Y) {
      A.value = !1;
      try {
        P.value = await S();
      } catch {
      }
      await yt(le, Y);
    }
    function Ae() {
      A.value = !1, n("close");
    }
    async function ks(le, Y) {
      await yt(le, Y);
    }
    async function cs(le) {
      await ge(), await yt(le);
    }
    async function lo(le) {
      P.value = await S(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function io() {
      H("environments", "all-envs"), setTimeout(() => {
        var le;
        (le = Z.value) == null || le.openCreateModal();
      }, 100);
    }
    function Hs() {
      if (!E.value) return [];
      const le = [], Y = E.value.workflows;
      return Y.new.length && le.push(`${Y.new.length} new workflow(s)`), Y.modified.length && le.push(`${Y.modified.length} modified workflow(s)`), Y.deleted.length && le.push(`${Y.deleted.length} deleted workflow(s)`), le;
    }
    return Qe(async () => {
      try {
        if (P.value = await S(), P.value.state === "no_workspace") {
          A.value = !0, ee.value = 1;
          return;
        }
        if (P.value.state === "empty_workspace") {
          A.value = !0, ee.value = 2;
          return;
        }
        if (P.value.state === "unmanaged") {
          A.value = !0, ee.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await ge();
    }), (le, Y) => {
      var Le, je, at, vt, Jt, Ks, dn, fn, mn, Q, ke, Oe, lt;
      return a(), r("div", $T, [
        t("div", CT, [
          t("div", xT, [
            Y[31] || (Y[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            E.value ? (a(), r("div", ST)) : y("", !0)
          ]),
          t("div", IT, [
            x(qr),
            Y[34] || (Y[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ie(["icon-btn", { spinning: L.value }]),
              onClick: ge,
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
              onClick: Y[0] || (Y[0] = (Ne) => n("close")),
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
        t("div", ET, [
          t("div", { class: "env-switcher-header" }, [
            Y[35] || (Y[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: pt
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
            onClick: Y[1] || (Y[1] = (Ne) => H("environments", "all-envs"))
          }, [
            E.value ? (a(), r("div", TT, [
              t("span", null, f(((Le = M.value) == null ? void 0 : Le.name) || ((je = E.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", PT, "(" + f(E.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            Y[36] || (Y[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", RT, [
          t("div", MT, [
            t("div", DT, [
              t("div", LT, [
                Y[37] || (Y[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "status" && z.value === "this-env" }]),
                  onClick: Y[2] || (Y[2] = (Ne) => H("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "workflows" }]),
                  onClick: Y[3] || (Y[3] = (Ne) => H("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "models-env" }]),
                  onClick: Y[4] || (Y[4] = (Ne) => H("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "branches" }]),
                  onClick: Y[5] || (Y[5] = (Ne) => H("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "history" }]),
                  onClick: Y[6] || (Y[6] = (Ne) => H("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "nodes" }]),
                  onClick: Y[7] || (Y[7] = (Ne) => H("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "debug-env" }]),
                  onClick: Y[8] || (Y[8] = (Ne) => H("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              Y[41] || (Y[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", OT, [
                Y[38] || (Y[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "environments" }]),
                  onClick: Y[9] || (Y[9] = (Ne) => H("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "model-index" }]),
                  onClick: Y[10] || (Y[10] = (Ne) => H("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "settings" }]),
                  onClick: Y[11] || (Y[11] = (Ne) => H("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "debug-workspace" }]),
                  onClick: Y[12] || (Y[12] = (Ne) => H("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              Y[42] || (Y[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", AT, [
                Y[40] || (Y[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "deploy" }]),
                  onClick: Y[13] || (Y[13] = (Ne) => H("deploy", "sharing"))
                }, [
                  Y[39] || (Y[39] = $(" DEPLOY ", -1)),
                  We(I) > 0 ? (a(), r("span", NT, f(We(I)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "export" }]),
                  onClick: Y[14] || (Y[14] = (Ne) => H("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "import" }]),
                  onClick: Y[15] || (Y[15] = (Ne) => H("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ie(["sidebar-item", { active: T.value === "remotes" }]),
                  onClick: Y[16] || (Y[16] = (Ne) => H("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", UT, [
              x(Yr)
            ])
          ]),
          t("div", zT, [
            V.value ? (a(), r("div", FT, f(V.value), 1)) : !E.value && T.value === "status" ? (a(), r("div", BT, " Loading status... ")) : (a(), r(j, { key: 2 }, [
              T.value === "status" ? (a(), D(uv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: we,
                status: E.value,
                "setup-state": F.value,
                onSwitchBranch: ie,
                onCommitChanges: Y[17] || (Y[17] = (Ne) => _e.value = !0),
                onSyncEnvironment: Y[18] || (Y[18] = (Ne) => he.value = !0),
                onViewWorkflows: Y[19] || (Y[19] = (Ne) => H("workflows", "this-env")),
                onViewHistory: Y[20] || (Y[20] = (Ne) => H("history", "this-env")),
                onViewDebug: Y[21] || (Y[21] = (Ne) => H("debug-env", "this-env")),
                onViewNodes: Y[22] || (Y[22] = (Ne) => H("nodes", "this-env")),
                onRepairMissingModels: wt,
                onRepairEnvironment: Bt,
                onStartSetup: Y[23] || (Y[23] = (Ne) => A.value = !0),
                onViewEnvironments: Y[24] || (Y[24] = (Ne) => H("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : T.value === "workflows" ? (a(), D(Y0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ae,
                onRefresh: ge
              }, null, 512)) : T.value === "models-env" ? (a(), D(J_, {
                key: 2,
                onNavigate: ne
              })) : T.value === "branches" ? (a(), D(Zv, {
                key: 3,
                branches: K.value,
                current: ((at = E.value) == null ? void 0 : at.branch) || null,
                onSwitch: fe,
                onCreate: Ve,
                onDelete: Ze
              }, null, 8, ["branches", "current"])) : T.value === "history" ? (a(), D(tp, {
                key: 4,
                commits: W.value,
                "current-ref": (vt = E.value) == null ? void 0 : vt.branch,
                onSelect: G,
                onCheckout: B
              }, null, 8, ["commits", "current-ref"])) : T.value === "nodes" ? (a(), D(Fk, {
                key: 5,
                "version-mismatches": ((Ks = (Jt = E.value) == null ? void 0 : Jt.comparison) == null ? void 0 : Ks.version_mismatches) || [],
                onOpenNodeManager: Ce,
                onRepairEnvironment: Bt,
                onToast: De
              }, null, 8, ["version-mismatches"])) : T.value === "debug-env" ? (a(), D(eC, { key: 6 })) : T.value === "environments" ? (a(), D(ox, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Z,
                onSwitch: yt,
                onCreated: ws,
                onDelete: _s
              }, null, 512)) : T.value === "model-index" ? (a(), D(uk, {
                key: 8,
                onRefresh: ge
              })) : T.value === "settings" ? (a(), D(j$, { key: 9 })) : T.value === "debug-workspace" ? (a(), D(Z$, { key: 10 })) : T.value === "deploy" ? (a(), D(L6, {
                key: 11,
                onToast: De,
                onNavigate: ne
              })) : T.value === "export" ? (a(), D(Dx, { key: 12 })) : T.value === "import" ? (a(), D(S5, {
                key: 13,
                onImportCompleteSwitch: cs
              })) : T.value === "remotes" ? (a(), D(x$, {
                key: 14,
                onToast: De
              })) : y("", !0)
            ], 64))
          ])
        ]),
        X.value ? (a(), D(X6, {
          key: 0,
          commit: X.value,
          onClose: Y[25] || (Y[25] = (Ne) => X.value = null),
          onCheckout: B,
          onCreateBranch: St
        }, null, 8, ["commit"])) : y("", !0),
        ue.value ? (a(), D(al, {
          key: 1,
          title: ue.value.title,
          message: ue.value.message,
          details: ue.value.details,
          warning: ue.value.warning,
          confirmLabel: ue.value.confirmLabel,
          cancelLabel: ue.value.cancelLabel,
          secondaryLabel: ue.value.secondaryLabel,
          secondaryAction: ue.value.secondaryAction,
          destructive: ue.value.destructive,
          onConfirm: ue.value.onConfirm,
          onCancel: Y[26] || (Y[26] = (Ne) => ue.value = null),
          onSecondary: ue.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        x(XI, {
          show: be.value,
          "from-environment": ((dn = M.value) == null ? void 0 : dn.name) || "unknown",
          "to-environment": ze.value,
          onConfirm: Io,
          onClose: xe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        _e.value && E.value ? (a(), D(Kr, {
          key: 2,
          status: E.value,
          "as-modal": !0,
          onClose: Y[27] || (Y[27] = (Ne) => _e.value = !1),
          onCommitted: se
        }, null, 8, ["status"])) : y("", !0),
        he.value && E.value ? (a(), D(yE, {
          key: 3,
          show: he.value,
          "mismatch-details": {
            missing_nodes: E.value.comparison.missing_nodes,
            extra_nodes: E.value.comparison.extra_nodes
          },
          onConfirm: He,
          onClose: Y[28] || (Y[28] = (Ne) => he.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        x(cE, {
          show: Me.value,
          state: Ye.value.state,
          progress: Ye.value.progress,
          message: Ye.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: Y[30] || (Y[30] = rt((Ne) => N.value = !1, ["self"]))
        }, [
          t("div", VT, [
            t("div", WT, [
              Y[44] || (Y[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: Y[29] || (Y[29] = (Ne) => N.value = !1)
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
            t("div", GT, [
              Y[45] || (Y[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", jT, [
                (a(!0), r(j, null, ye(J.value, (Ne) => (a(), r("div", {
                  key: Ne.name,
                  class: Ie(["env-item", { current: Ne.is_current }])
                }, [
                  t("div", HT, [
                    t("div", KT, [
                      t("span", qT, f(Ne.is_current ? "●" : "○"), 1),
                      t("span", YT, f(Ne.name), 1),
                      Ne.current_branch ? (a(), r("span", JT, "(" + f(Ne.current_branch) + ")", 1)) : y("", !0),
                      Ne.is_current ? (a(), r("span", QT, "CURRENT")) : y("", !0)
                    ]),
                    t("div", XT, f(Ne.workflow_count) + " workflows • " + f(Ne.node_count) + " nodes ", 1)
                  ]),
                  Ne.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Qt) => yt(Ne.name)
                  }, " SWITCH ", 8, ZT))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        A.value ? (a(), D(bT, {
          key: 5,
          "default-path": ((fn = P.value) == null ? void 0 : fn.default_path) || "~/comfygit",
          "detected-models-dir": ((mn = P.value) == null ? void 0 : mn.detected_models_dir) || null,
          "initial-step": ee.value,
          "existing-environments": ((Q = P.value) == null ? void 0 : Q.environments) || [],
          "cli-installed": ((ke = P.value) == null ? void 0 : ke.cli_installed) ?? !0,
          "setup-state": ((Oe = P.value) == null ? void 0 : Oe.state) || "no_workspace",
          "workspace-path": ((lt = P.value) == null ? void 0 : lt.workspace_path) || null,
          onComplete: rs,
          onClose: Ae,
          onSwitchEnvironment: ks,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", e7, [
          x(_d, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(j, null, ye(Re.value, (Ne) => (a(), r("div", {
                key: Ne.id,
                class: Ie(["toast", Ne.type])
              }, [
                t("span", t7, f(Ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), o7 = /* @__PURE__ */ pe(s7, [["__scopeId", "data-v-45a711b4"]]), n7 = { class: "item-header" }, a7 = { class: "item-info" }, l7 = { class: "filename" }, i7 = { class: "metadata" }, r7 = { class: "size" }, c7 = {
  key: 0,
  class: "type"
}, u7 = { class: "item-actions" }, d7 = {
  key: 0,
  class: "progress-section"
}, f7 = { class: "progress-bar" }, m7 = { class: "progress-stats" }, v7 = { class: "downloaded" }, p7 = { class: "speed" }, g7 = {
  key: 0,
  class: "eta"
}, h7 = {
  key: 1,
  class: "status-msg paused"
}, y7 = {
  key: 2,
  class: "status-msg queued"
}, w7 = {
  key: 3,
  class: "status-msg completed"
}, _7 = {
  key: 4,
  class: "status-msg failed"
}, k7 = {
  key: 0,
  class: "retries"
}, b7 = /* @__PURE__ */ me({
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
      t("div", n7, [
        t("div", a7, [
          t("div", l7, f(e.item.filename), 1),
          t("div", i7, [
            t("span", r7, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", c7, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", u7, [
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
      e.item.status === "downloading" ? (a(), r("div", d7, [
        t("div", f7, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", m7, [
          t("span", v7, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", p7, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", g7, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", h7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", y7, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", w7, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", _7, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", k7, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Oo = /* @__PURE__ */ pe(b7, [["__scopeId", "data-v-2110df65"]]), $7 = { class: "queue-title" }, C7 = { class: "count" }, x7 = { class: "queue-actions" }, S7 = { class: "action-label" }, I7 = {
  key: 0,
  class: "overall-progress"
}, E7 = { class: "progress-bar" }, T7 = {
  key: 0,
  class: "current-mini"
}, P7 = { class: "filename" }, R7 = { class: "speed" }, M7 = {
  key: 1,
  class: "queue-content"
}, D7 = {
  key: 0,
  class: "section"
}, L7 = {
  key: 1,
  class: "section"
}, O7 = { class: "section-header" }, A7 = { class: "section-label paused" }, N7 = { class: "items-list" }, U7 = {
  key: 2,
  class: "section"
}, z7 = { class: "section-header" }, F7 = { class: "section-label" }, B7 = { class: "items-list" }, V7 = {
  key: 3,
  class: "section"
}, W7 = { class: "section-header" }, G7 = { class: "section-label" }, j7 = { class: "items-list" }, H7 = {
  key: 4,
  class: "section"
}, K7 = { class: "section-header" }, q7 = { class: "section-label failed" }, Y7 = { class: "items-list" }, J7 = /* @__PURE__ */ me({
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
    } = xo(), C = k(!1);
    let b = null;
    ft(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (E, W) => {
        b && (clearTimeout(b), b = null);
        const K = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, J = W && (W.active > 0 || W.paused > 0);
        K && J && (b = setTimeout(() => {
          _(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = U(() => {
      var K;
      if (s.items.length === 0) return 0;
      const E = l.value.length, W = ((K = o.value) == null ? void 0 : K.progress) || 0;
      return Math.round((E + W / 100) / s.items.length * 100);
    });
    function R(E) {
      m(E);
    }
    function I(E) {
      return E === 0 ? "" : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, W) => (a(), D(kt, { to: "body" }, [
      We(u) ? (a(), r("div", {
        key: 0,
        class: Ie(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (K) => C.value = !C.value)
        }, [
          t("div", $7, [
            W[4] || (W[4] = t("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", C7, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", x7, [
            t("span", S7, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), r("div", M7, [
          We(o) ? (a(), r("div", D7, [
            W[6] || (W[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            x(Oo, {
              item: We(o),
              onCancel: W[1] || (W[1] = (K) => R(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", L7, [
            t("div", O7, [
              t("span", A7, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...K) => We(w) && We(w)(...K))
              }, "Resume All")
            ]),
            t("div", N7, [
              (a(!0), r(j, null, ye(We(c), (K) => (a(), D(Oo, {
                key: K.id,
                item: K,
                onResume: (J) => We(g)(K.id),
                onRemove: (J) => We(p)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", U7, [
            t("div", z7, [
              t("span", F7, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", B7, [
              (a(!0), r(j, null, ye(We(n), (K) => (a(), D(Oo, {
                key: K.id,
                item: K,
                onCancel: (J) => R(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", V7, [
            t("div", W7, [
              t("span", G7, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...K) => We(_) && We(_)(...K))
              }, "Clear")
            ]),
            t("div", j7, [
              (a(!0), r(j, null, ye(We(l).slice(0, 3), (K) => (a(), D(Oo, {
                key: K.id,
                item: K,
                onRemove: (J) => We(p)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", H7, [
            t("div", K7, [
              t("span", q7, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", Y7, [
              (a(!0), r(j, null, ye(We(i), (K) => (a(), D(Oo, {
                key: K.id,
                item: K,
                onRetry: (J) => We(v)(K.id),
                onRemove: (J) => We(p)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", I7, [
          t("div", E7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${S.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", T7, [
            t("span", P7, f(We(o).filename), 1),
            t("span", R7, f(I(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), Q7 = /* @__PURE__ */ pe(J7, [["__scopeId", "data-v-60751cfa"]]), X7 = { class: "detail-header" }, Z7 = { class: "item-count" }, eP = { class: "resource-list" }, tP = { class: "item-info" }, sP = { class: "item-name" }, oP = {
  key: 0,
  class: "item-subtitle"
}, nP = {
  key: 0,
  class: "installing-badge"
}, aP = ["title"], lP = {
  key: 2,
  class: "installed-badge"
}, iP = {
  key: 3,
  class: "queued-badge"
}, rP = {
  key: 1,
  class: "no-action"
}, cP = /* @__PURE__ */ me({
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
    const o = e, n = s, l = U(() => o.itemType === "model" ? "Download" : "Install"), i = U(() => o.items.filter((p) => p.canAction)), c = U(() => i.value.length > 0 && i.value.every(
      (p) => {
        var _, C;
        return o.queuedItems.has(p.id) || ((_ = o.installedItems) == null ? void 0 : _.has(p.id)) || ((C = o.failedItems) == null ? void 0 : C.has(p.id));
      }
    )), u = U(() => c.value ? "All Queued" : o.itemType === "model" ? "Download All" : "Install All");
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
    return (p, _) => (a(), D(dt, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => n("close"))
    }, {
      body: h(() => [
        t("div", X7, [
          t("span", Z7, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          i.value.length > 1 ? (a(), D(Te, {
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
        t("div", eP, [
          (a(!0), r(j, null, ye(e.items, (C) => (a(), r("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", tP, [
              t("span", sP, f(C.name), 1),
              C.subtitle ? (a(), r("span", oP, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), r(j, { key: 0 }, [
              m(C) ? (a(), r("span", nP, "Installing...")) : g(C) ? (a(), r("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, aP)) : v(C) ? (a(), r("span", lP, "Installed")) : d(C) ? (a(), r("span", iP, "Queued")) : (a(), D(Te, {
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
            ], 64)) : (a(), r("span", rP, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        x(Te, {
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
}), uP = /* @__PURE__ */ pe(cP, [["__scopeId", "data-v-fac0fef0"]]), dP = {
  key: 0,
  class: "loading-state"
}, fP = {
  key: 1,
  class: "analysis-results"
}, mP = {
  key: 0,
  class: "section"
}, vP = { class: "section-header" }, pP = { class: "section-title" }, gP = { class: "item-list" }, hP = { class: "package-info" }, yP = { class: "package-name" }, wP = { class: "node-count" }, _P = {
  key: 1,
  class: "installing-badge"
}, kP = {
  key: 2,
  class: "queued-badge"
}, bP = ["title"], $P = {
  key: 4,
  class: "installed-badge"
}, CP = {
  key: 1,
  class: "section"
}, xP = { class: "section-header" }, SP = { class: "section-title" }, IP = { class: "item-list" }, EP = { class: "node-type" }, TP = {
  key: 0,
  class: "overflow-note"
}, PP = {
  key: 2,
  class: "section"
}, RP = { class: "section-header" }, MP = { class: "section-title" }, DP = { class: "item-list" }, LP = { class: "model-info" }, OP = { class: "model-name" }, AP = {
  key: 1,
  class: "queued-badge"
}, NP = {
  key: 1,
  class: "no-url"
}, UP = { class: "dont-show-again" }, zP = /* @__PURE__ */ me({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), { addToQueue: C } = xo(), { queueNodeInstall: b } = tt(), S = U(() => R.value.length > 0 || E.value.length > 0 || W.value.length > 0), R = U(() => {
      var H, ne;
      if (!((H = n.value) != null && H.nodes)) return [];
      const T = /* @__PURE__ */ new Map(), z = (n.value.nodes.resolved || []).filter((ie) => {
        var Ce;
        return !ie.is_installed && ((Ce = ie.package) == null ? void 0 : Ce.package_id);
      });
      for (const ie of z) {
        const Ce = ie.package.package_id;
        T.has(Ce) || T.set(Ce, {
          package_id: Ce,
          title: ie.package.title || Ce,
          node_count: 0,
          node_types: [],
          repository: ie.package.repository || null,
          latest_version: ie.package.latest_version || null
        });
        const ue = T.get(Ce);
        ue.node_count++, ue.node_types.push(((ne = ie.reference) == null ? void 0 : ne.node_type) || ie.node_type);
      }
      return Array.from(T.values());
    }), I = U(() => R.value.reduce((T, z) => T + z.node_count, 0)), E = U(() => {
      var T;
      return (T = n.value) != null && T.nodes ? (n.value.nodes.unresolved || []).map((z) => {
        var H;
        return {
          node_type: ((H = z.reference) == null ? void 0 : H.node_type) || z.node_type
        };
      }) : [];
    }), W = U(() => {
      var H;
      if (!((H = n.value) != null && H.models)) return [];
      const T = (n.value.models.resolved || []).filter(
        (ne) => ne.match_type === "download_intent" || ne.match_type === "property_download_intent" || ne.match_type === "not_found"
      ).map((ne) => {
        var ie, Ce, ue, _e;
        return {
          filename: ((Ce = (ie = ne.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((ue = ne.reference) == null ? void 0 : ue.widget_value) || ne.widget_value,
          widget_value: ((_e = ne.reference) == null ? void 0 : _e.widget_value) || ne.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ne.download_source || null,
          targetPath: ne.target_path || null,
          canDownload: !!(ne.download_source && ne.target_path)
        };
      }), z = (n.value.models.unresolved || []).map((ne) => {
        var ie, Ce, ue, _e;
        return {
          filename: ((Ce = (ie = ne.reference) == null ? void 0 : ie.widget_value) == null ? void 0 : Ce.split("/").pop()) || ((ue = ne.reference) == null ? void 0 : ue.widget_value) || ne.widget_value,
          widget_value: ((_e = ne.reference) == null ? void 0 : _e.widget_value) || ne.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...T, ...z];
    }), K = U(() => W.value.filter((T) => T.canDownload)), J = U(() => R.value.length >= 5 ? R.value.slice(0, 4) : R.value), M = U(() => W.value.length >= 5 ? W.value.slice(0, 4) : W.value), P = U(() => R.value.length > 0 && R.value.every(
      (T) => i.value.has(T.package_id) || c.value.has(T.package_id) || u.value.has(T.package_id)
    )), A = U(() => K.value.length > 0 && K.value.every((T) => d.value.has(T.url))), ee = U(() => R.value.length > 0 || K.value.length > 0), F = U(() => {
      const T = R.value.length === 0 || P.value, z = K.value.length === 0 || A.value;
      return T && z;
    }), L = U(() => w.value === "models" ? `Missing Models (${W.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${I.value})` : ""), V = U(() => w.value === "models" ? W.value.map((T) => ({
      id: T.url || T.widget_value,
      name: T.filename,
      canAction: T.canDownload,
      actionDisabledReason: T.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? R.value.map((T) => ({
      id: T.package_id,
      name: T.title,
      subtitle: `(${T.node_count} ${T.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : []);
    function X(T) {
      if (w.value === "models") {
        const z = W.value.find((H) => H.url === T.id || H.widget_value === T.id);
        z && Z(z);
      } else if (w.value === "packages") {
        const z = R.value.find((H) => H.package_id === T.id);
        z && ae(z);
      }
    }
    function N() {
      w.value === "models" ? be() : w.value === "packages" && we();
    }
    async function ae(T) {
      const z = T.package_id;
      if (!(i.value.has(z) || c.value.has(z) || u.value.has(z))) {
        Fe(), v.value = z;
        try {
          const { ui_id: H } = await b({
            id: z,
            version: T.latest_version || "latest",
            selected_version: T.latest_version || "latest",
            repository: T.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          _.value.set(H, z), c.value.add(z), console.log("[ComfyGit] Registered pending install:", { ui_id: H, packageId: z, pendingInstalls: Array.from(_.value.entries()) });
        } catch (H) {
          console.error("[ComfyGit] Failed to queue package install:", H), u.value.set(z, "Failed to queue install request");
        } finally {
          v.value = null;
        }
      }
    }
    function Z(T) {
      !T.url || !T.targetPath || d.value.has(T.url) || (C([{
        workflow: "unsaved",
        filename: T.filename,
        url: T.url,
        targetPath: T.targetPath
      }]), d.value.add(T.url));
    }
    async function we() {
      for (const T of R.value)
        !i.value.has(T.package_id) && !c.value.has(T.package_id) && !u.value.has(T.package_id) && await ae(T);
    }
    function be() {
      const T = K.value.filter(
        (z) => !d.value.has(z.url)
      );
      if (T.length !== 0) {
        C(T.map((z) => ({
          workflow: "unsaved",
          filename: z.filename,
          url: z.url,
          targetPath: z.targetPath
        })));
        for (const z of T)
          d.value.add(z.url);
      }
    }
    function Me() {
      we(), be();
    }
    function ze() {
      m.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ue(T) {
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const z = T == null ? void 0 : T.id;
      if (z && p.value.has(z)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${z} this session`);
        return;
      }
      try {
        const H = await fetch("/v2/comfygit/workflow/is-saved", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: T })
        });
        if (H.ok) {
          const ne = await H.json();
          if (ne.is_saved) {
            console.log(`[ComfyGit] Workflow matches saved file: ${ne.filename}, skipping popup`), z && p.value.add(z);
            return;
          }
        }
      } catch (H) {
        console.warn("[ComfyGit] Failed to check if workflow is saved:", H);
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
      try {
        const H = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: T, name: "unsaved" })
        });
        if (!H.ok) {
          const ne = await H.json();
          throw new Error(ne.error || "Failed to analyze workflow");
        }
        n.value = await H.json(), S.value && (l.value = !0, z && p.value.add(z));
      } catch (H) {
        console.error("[ComfyGit] Failed to analyze workflow:", H);
      } finally {
        s.value = !1;
      }
    }
    function Ye() {
      l.value = !1, n.value = null;
    }
    function ve(T) {
      const { workflow: z } = T.detail;
      z && Ue(z);
    }
    function oe(T) {
      var ne;
      const z = (ne = T.detail) == null ? void 0 : ne.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: z,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: T.detail
      });
      const H = _.value.get(z);
      H ? (v.value = H, console.log("[ComfyGit] Installing package:", H)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", z);
    }
    function re(T) {
      var ie, Ce, ue, _e, he, Re, Ee;
      const z = (ie = T.detail) == null ? void 0 : ie.ui_id, H = (ue = (Ce = T.detail) == null ? void 0 : Ce.status) == null ? void 0 : ue.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: z,
        status: H,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: T.detail
      });
      const ne = _.value.get(z);
      if (ne) {
        if (_.value.delete(z), c.value.delete(ne), v.value === ne && (v.value = null), H === "success")
          i.value.add(ne), g.value++, console.log("[ComfyGit] Package installed successfully:", ne);
        else {
          const te = ((Re = (he = (_e = T.detail) == null ? void 0 : _e.status) == null ? void 0 : he.messages) == null ? void 0 : Re[0]) || ((Ee = T.detail) == null ? void 0 : Ee.result) || "Unknown error";
          u.value.set(ne, te), console.error("[ComfyGit] Package install failed:", ne, te);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", z);
    }
    let ce = null;
    function Se() {
      var T;
      return ce || (ce = (T = window.app) == null ? void 0 : T.api), ce;
    }
    let Pe = !1;
    function Fe() {
      if (Pe) return !0;
      const T = Se();
      return T ? (T.addEventListener("cm-task-started", oe), T.addEventListener("cm-task-completed", re), T.addEventListener("comfygit:workflow-changed", O), Pe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function O(T) {
      const { change_type: z } = T.detail;
      (z === "created" || z === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Qe(() => {
      window.addEventListener("comfygit:workflow-loaded", ve);
    }), Gs(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", ve), Pe) {
        const T = Se();
        T && (T.removeEventListener("cm-task-started", oe), T.removeEventListener("cm-task-completed", re), T.removeEventListener("comfygit:workflow-changed", O)), Pe = !1;
      }
    }), (T, z) => (a(), r(j, null, [
      l.value ? (a(), D(dt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ye
      }, {
        body: h(() => [
          s.value ? (a(), r("div", dP, [...z[4] || (z[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && S.value ? (a(), r("div", fP, [
            R.value.length > 0 ? (a(), r("div", mP, [
              t("div", vP, [
                t("span", pP, "Missing Custom Nodes (" + f(I.value) + ")", 1),
                R.value.length > 1 ? (a(), D(Te, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: P.value,
                  onClick: we
                }, {
                  default: h(() => [
                    $(f(P.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", gP, [
                (a(!0), r(j, null, ye(J.value, (H) => (a(), r("div", {
                  key: H.package_id,
                  class: "package-item"
                }, [
                  t("div", hP, [
                    t("span", yP, f(H.title), 1),
                    t("span", wP, "(" + f(H.node_count) + " " + f(H.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !i.value.has(H.package_id) && !c.value.has(H.package_id) && !u.value.has(H.package_id) ? (a(), D(Te, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === H.package_id,
                    onClick: (ne) => ae(H)
                  }, {
                    default: h(() => [
                      $(f(v.value === H.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === H.package_id ? (a(), r("span", _P, "Installing...")) : c.value.has(H.package_id) ? (a(), r("span", kP, "Queued")) : u.value.has(H.package_id) ? (a(), r("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(H.package_id)
                  }, "Failed ⚠", 8, bP)) : (a(), r("span", $P, "Installed"))
                ]))), 128)),
                R.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: z[0] || (z[0] = (H) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(R.value.length) + " packages...", 1),
                  z[5] || (z[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            E.value.length > 0 ? (a(), r("div", CP, [
              t("div", xP, [
                t("span", SP, "Unknown Nodes (" + f(E.value.length) + ")", 1)
              ]),
              t("div", IP, [
                (a(!0), r(j, null, ye(E.value.slice(0, 5), (H) => (a(), r("div", {
                  key: H.node_type,
                  class: "item"
                }, [
                  t("code", EP, f(H.node_type), 1),
                  z[6] || (z[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                E.value.length > 5 ? (a(), r("div", TP, " ...and " + f(E.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            W.value.length > 0 ? (a(), r("div", PP, [
              t("div", RP, [
                t("span", MP, "Missing Models (" + f(W.value.length) + ")", 1),
                K.value.length > 1 ? (a(), D(Te, {
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
              t("div", DP, [
                (a(!0), r(j, null, ye(M.value, (H) => (a(), r("div", {
                  key: H.widget_value,
                  class: "model-item"
                }, [
                  t("div", LP, [
                    t("span", OP, f(H.filename), 1)
                  ]),
                  H.canDownload ? (a(), r(j, { key: 0 }, [
                    d.value.has(H.url) ? (a(), r("span", AP, "Queued")) : (a(), D(Te, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ne) => Z(H)
                    }, {
                      default: h(() => [...z[7] || (z[7] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), r("span", NP, "Manual download required"))
                ]))), 128)),
                W.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: z[1] || (z[1] = (H) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(W.value.length) + " models...", 1),
                  z[8] || (z[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", UP, [
              x(La, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  z[2] || (z[2] = (H) => m.value = H),
                  ze
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
          x(Te, {
            variant: "secondary",
            onClick: Ye
          }, {
            default: h(() => [...z[10] || (z[10] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          ee.value ? (a(), D(Te, {
            key: 0,
            variant: "primary",
            disabled: F.value,
            onClick: Me
          }, {
            default: h(() => [
              $(f(F.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), D(uP, {
        key: 1,
        title: L.value,
        items: V.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? i.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: z[3] || (z[3] = (H) => w.value = null),
        onAction: X,
        onBulkAction: N
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), FP = /* @__PURE__ */ pe(zP, [["__scopeId", "data-v-dd1934b2"]]), BP = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', VP = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', WP = {
  comfy: BP,
  phosphor: VP
}, il = "comfy", Jr = "comfygit-theme";
let Qs = null, Qr = il;
function GP() {
  try {
    const e = localStorage.getItem(Jr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return il;
}
function Xr(e = il) {
  Qs && Qs.remove(), Qs = document.createElement("style"), Qs.id = "comfygit-theme-styles", Qs.setAttribute("data-theme", e), Qs.textContent = WP[e], document.head.appendChild(Qs), document.body.setAttribute("data-comfygit-theme", e), Qr = e;
  try {
    localStorage.setItem(Jr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function jP() {
  return Qr;
}
function HP(e) {
  Xr(e);
}
function KP(e) {
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
const qP = GP();
Xr(qP);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), HP(e);
  },
  getTheme: () => {
    const e = jP();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Zt = null, At = null, Yo = null, Ao = null, ai = null, No = null, li = null;
const _o = k(null);
let cl = "managed", Zr = !1;
async function Pn() {
  var e;
  if (!((e = Wt) != null && e.api)) return null;
  try {
    const s = await Wt.api.fetchApi("/v2/comfygit/status");
    s.ok && (_o.value = await s.json());
  } catch {
  }
}
async function Oa() {
  var e;
  if ((e = Wt) != null && e.api)
    try {
      const s = await Wt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        cl = o.state, Zr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Aa() {
  var s;
  if (cl === "managed" || !Zr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function YP() {
  if (!_o.value) return !1;
  const e = _o.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || _o.value.has_changes;
}
function $n(e) {
  Zt && Zt.remove(), Zt = document.createElement("div"), Zt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Zt.appendChild(s), Zt.addEventListener("click", (l) => {
    l.target === Zt && _a();
  });
  const o = (l) => {
    l.key === "Escape" && (_a(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), ta({
    render: () => cn(o7, {
      initialView: e,
      onClose: _a,
      onStatusUpdate: async (l) => {
        _o.value = l, Jo(), await Oa(), Na(), Aa();
      }
    })
  }).mount(s), document.body.appendChild(Zt);
}
function _a() {
  Zt && (Zt.remove(), Zt = null);
}
function ii(e) {
  Uo(), At = document.createElement("div"), At.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  At.style.position = "fixed", At.style.top = `${s.bottom + 8}px`, At.style.right = `${window.innerWidth - s.right}px`, At.style.zIndex = "10001";
  const o = (l) => {
    At && !At.contains(l.target) && l.target !== e && (Uo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Uo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Yo = ta({
    render: () => cn(Kr, {
      status: _o.value,
      onClose: Uo,
      onCommitted: (l) => {
        Uo(), JP(l.success, l.message), Pn().then(Jo);
      }
    })
  }), Yo.mount(At), document.body.appendChild(At);
}
function Uo() {
  Yo && (Yo.unmount(), Yo = null), At && (At.remove(), At = null);
}
function JP(e, s) {
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
function QP() {
  Ao || (Ao = document.createElement("div"), Ao.className = "comfygit-download-queue-root", ai = ta({
    render: () => cn(Q7)
  }), ai.mount(Ao), document.body.appendChild(Ao), console.log("[ComfyGit] Model download queue mounted"));
}
function XP() {
  No || (No = document.createElement("div"), No.className = "comfygit-missing-resources-root", li = ta({
    render: () => cn(FP)
  }), li.mount(No), document.body.appendChild(No), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Tt = null;
function Jo() {
  if (!Tt) return;
  const e = Tt.querySelector(".commit-indicator");
  e && (e.style.display = YP() ? "block" : "none");
}
function Na() {
  if (!Tt) return;
  const e = cl !== "managed";
  Tt.disabled = e, Tt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const ec = document.createElement("style");
ec.textContent = `
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
document.head.appendChild(ec);
Wt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => $n()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Tt && !Tt.disabled && ii(Tt);
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
    const s = window.__comfygit_pending_workflow;
    s && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: { workflow: s }
    })));
  },
  async setup() {
    var l, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = $n, Tt = document.createElement("button"), Tt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Tt.innerHTML = 'Commit <span class="commit-indicator"></span>', Tt.title = "Quick Commit", Tt.onclick = () => ii(Tt), e.appendChild(s), e.appendChild(Tt), (i = (l = Wt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Wt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), QP(), XP(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      $n(u);
    }));
    const { loadPendingDownloads: o } = xo();
    o(), await Promise.all([Pn(), Oa()]), Jo(), Na(), Aa(), setTimeout(Aa, 100), setInterval(async () => {
      await Promise.all([Pn(), Oa()]), Jo(), Na();
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
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(S), p.appendChild(C);
        const R = document.createElement("button");
        R.textContent = "View Logs", R.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, R.onmouseover = () => R.style.background = "#c62828", R.onmouseout = () => R.style.background = "#e53935", R.onclick = () => {
          p.remove(), $n("debug-env");
        }, p.appendChild(R);
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(b);
        const S = document.createElement("div");
        S.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(S), p.appendChild(C);
        const R = document.createElement("button");
        R.textContent = "Apply Changes", R.style.cssText = `
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
        `, R.onmouseover = () => R.style.background = "rgba(255,255,255,0.1)", R.onmouseout = () => R.style.background = "transparent", R.onclick = async () => {
          R.disabled = !0, R.textContent = "Restarting...", R.style.opacity = "0.7", b.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Wt.refreshComboInNodes && (await Wt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", S.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", R.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (W) {
                console.error("[ComfyGit] Failed to refresh nodes:", W), _.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", R.style.display = "none";
              }
            };
            n.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), b.textContent = "Restart Failed", b.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", R.textContent = "Try Again", R.disabled = !1, R.style.opacity = "1";
          }
        }, p.appendChild(R);
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Pn(), Jo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = KP(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
