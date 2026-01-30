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
}, sc = Object.prototype.hasOwnProperty, et = (e, s) => sc.call(e, s), Be = Array.isArray, go = (e) => an(e) === "[object Map]", Co = (e) => an(e) === "[object Set]", ul = (e) => an(e) === "[object Date]", Ge = (e) => typeof e == "function", dt = (e) => typeof e == "string", ss = (e) => typeof e == "symbol", ot = (e) => e !== null && typeof e == "object", ci = (e) => (ot(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), ui = Object.prototype.toString, an = (e) => ui.call(e), oc = (e) => an(e).slice(8, -1), di = (e) => an(e) === "[object Object]", Ba = (e) => dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Fo = /* @__PURE__ */ Ua(
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
  const s = dt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let dl;
const Hn = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = dt(n) ? uc(n) : Ft(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (dt(e) || ot(e))
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
function Ee(e) {
  let s = "";
  if (dt(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Ee(e[o]);
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
const vi = (e) => !!(e && e.__v_isRef === !0), f = (e) => dt(e) ? e : e == null ? "" : Be(e) || ot(e) && (e.toString === ui || !Ge(e.toString)) ? vi(e) ? f(e.value) : JSON.stringify(e, pi, 2) : String(e), pi = (e, s) => vi(s) ? pi(e, s.value) : go(s) ? {
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
let At;
class vc {
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
  return At;
}
let it;
const aa = /* @__PURE__ */ new WeakSet();
class gi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, At && At.active && At.effects.push(this);
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
function Os(e, s) {
  return Ps(e) ? to(e) ? ko(os(s)) : ko(s) : os(s);
}
const yc = {
  __proto__: null,
  [Symbol.iterator]() {
    return la(this, Symbol.iterator, (e) => Os(this, e));
  },
  concat(...e) {
    return ro(this).concat(
      ...e.map((s) => Be(s) ? ro(s) : s)
    );
  },
  entries() {
    return la(this, "entries", (e) => (e[1] = Os(this, e[1]), e));
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
      (o) => o.map((n) => Os(this, n)),
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
    return la(this, "values", (e) => Os(this, e));
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
    return o.call(this, Os(e, g), w, e);
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
    return o.call(this, c, Os(e, u), d, e);
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
function Ac(e) {
  return !et(e, "__v_skip") && Object.isExtensible(e) && fi(e, "__v_skip", !0), e;
}
const os = (e) => ot(e) ? Ws(e) : e, ko = (e) => ot(e) ? Rn(e) : e;
function xt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Oc(e, !1);
}
function Oc(e, s) {
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
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: u, call: d } = o, m = (I) => l ? I : Gt(I) || l === !1 || l === 0 ? Ss(I, 1) : Ss(I);
  let v, g, w, p, _ = !1, C = !1;
  if (xt(e) ? (g = () => e.value, _ = Gt(e)) : to(e) ? (g = () => m(e), _ = !0) : Be(e) ? (C = !0, _ = e.some((I) => to(I) || Gt(I)), g = () => e.map((I) => {
    if (xt(I))
      return I.value;
    if (to(I))
      return m(I);
    if (Ge(I))
      return d ? d(I, 2) : I();
  })) : Ge(e) ? s ? g = d ? () => d(e, 2) : e : g = () => {
    if (w) {
      Es();
      try {
        w();
      } finally {
        Ts();
      }
    }
    const I = Xs;
    Xs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      Xs = I;
    }
  } : g = gs, s && l) {
    const I = g, G = l === !0 ? 1 / 0 : l;
    g = () => Ss(I(), G);
  }
  const $ = pc(), T = () => {
    v.stop(), $ && $.active && Fa($.effects, v);
  };
  if (i && s) {
    const I = s;
    s = (...G) => {
      I(...G), T();
    };
  }
  let D = C ? new Array(e.length).fill(gn) : gn;
  const E = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (s) {
        const G = v.run();
        if (l || _ || (C ? G.some((K, F) => zs(K, D[F])) : zs(G, D))) {
          w && w();
          const K = Xs;
          Xs = v;
          try {
            const F = [
              G,
              // pass undefined as the old value when it's changed for the first time
              D === gn ? void 0 : C && D[0] === gn ? [] : D,
              p
            ];
            D = G, d ? d(s, 3, F) : (
              // @ts-expect-error
              s(...F)
            );
          } finally {
            Xs = K;
          }
        }
      } else
        v.run();
  };
  return u && u(E), v = new gi(g), v.scheduler = c ? () => c(E, !1) : E, p = (I) => Bc(I, !1, v), w = v.onStop = () => {
    const I = Mn.get(v);
    if (I) {
      if (d)
        d(I, 4);
      else
        for (const G of I) G();
      Mn.delete(v);
    }
  }, s ? n ? E(!0) : D = v.run() : c ? c(E.bind(null, !0), !0) : v.run(), T.pause = v.pause.bind(v), T.resume = v.resume.bind(v), T.stop = T, T;
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
const Rt = [];
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
  let s = ms + 1, o = Rt.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = Rt[n], i = Zo(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Ja(e) {
  if (!(e.flags & 1)) {
    const s = Zo(e), o = Rt[Rt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Zo(o) ? Rt.push(e) : Rt.splice(Gc(s), 0, e), e.flags |= 1, Mi();
  }
}
function Mi() {
  Dn || (Dn = Ri.then(Li));
}
function jc(e) {
  Be(e) ? ho.push(...e) : Ns && e.id === -1 ? Ns.splice(fo + 1, 0, e) : e.flags & 1 || (ho.push(e), e.flags |= 1), Mi();
}
function vl(e, s, o = ms + 1) {
  for (; o < Rt.length; o++) {
    const n = Rt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Rt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
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
    for (ms = 0; ms < Rt.length; ms++) {
      const s = Rt[ms];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), ln(
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
    ms = -1, Rt.length = 0, Di(), Dn = null, (Rt.length || ho.length) && Li();
  }
}
let _t = null, Ai = null;
function Ln(e) {
  const s = _t;
  return _t = e, Ai = e && e.type.__scopeId || null, s;
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
const Oi = Symbol("_vte"), Ni = (e) => e.__isTeleport, Wo = (e) => e && (e.disabled || e.disabled === ""), pl = (e) => e && (e.defer || e.defer === ""), gl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, hl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, xa = (e, s) => {
  const o = e && e.to;
  return dt(o) ? s ? s(o) : null : o;
}, Ui = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, u, d, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: C, createComment: $ }
    } = m, T = Wo(s.props);
    let { shapeFlag: D, children: E, dynamicChildren: I } = s;
    if (e == null) {
      const G = s.el = C(""), K = s.anchor = C("");
      p(G, o, n), p(K, o, n);
      const F = (S, L) => {
        D & 16 && v(
          E,
          S,
          L,
          l,
          i,
          c,
          u,
          d
        );
      }, P = () => {
        const S = s.target = xa(s.props, _), L = zi(S, s, C, p);
        S && (c !== "svg" && gl(S) ? c = "svg" : c !== "mathml" && hl(S) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(S), T || (F(S, L), xn(s, !1)));
      };
      T && (F(o, K), xn(s, !0)), pl(s.props) ? (s.el.__isMounted = !1, Tt(() => {
        P(), delete s.el.__isMounted;
      }, i)) : P();
    } else {
      if (pl(s.props) && e.el.__isMounted === !1) {
        Tt(() => {
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
      const G = s.anchor = e.anchor, K = s.target = e.target, F = s.targetAnchor = e.targetAnchor, P = Wo(e.props), S = P ? o : K, L = P ? G : F;
      if (c === "svg" || gl(K) ? c = "svg" : (c === "mathml" || hl(K)) && (c = "mathml"), I ? (w(
        e.dynamicChildren,
        I,
        S,
        l,
        i,
        c,
        u
      ), tl(e, s, !0)) : d || g(
        e,
        s,
        S,
        L,
        l,
        i,
        c,
        u,
        !1
      ), T)
        P ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : hn(
          s,
          o,
          G,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const te = s.target = xa(
          s.props,
          _
        );
        te && hn(
          s,
          te,
          null,
          m,
          0
        );
      } else P && hn(
        s,
        K,
        F,
        m,
        1
      );
      xn(s, T);
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
  function w(C, $, T, D) {
    $.anchor = g(
      c(C),
      $,
      u(C),
      o,
      n,
      l,
      i
    ), $.targetStart = T, $.targetAnchor = D;
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
        let $ = C;
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
  return l[Oi] = i, e && (n(l, e), n(i, e)), i;
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
    onBeforeAppear: $,
    onAppear: T,
    onAfterAppear: D,
    onAppearCancelled: E
  } = s, I = String(e.key), G = Gi(o, e), K = (S, L) => {
    S && ns(
      S,
      n,
      9,
      L
    );
  }, F = (S, L) => {
    const te = L[1];
    K(S, L), Be(S) ? S.every((B) => B.length <= 1) && te() : S.length <= 1 && te();
  }, P = {
    mode: c,
    persisted: u,
    beforeEnter(S) {
      let L = d;
      if (!o.isMounted)
        if (i)
          L = $ || d;
        else
          return;
      S[Cs] && S[Cs](
        !0
        /* cancelled */
      );
      const te = G[I];
      te && Zs(e, te) && te.el[Cs] && te.el[Cs](), K(L, [S]);
    },
    enter(S) {
      let L = m, te = v, B = g;
      if (!o.isMounted)
        if (i)
          L = T || m, te = D || v, B = E || g;
        else
          return;
      let A = !1;
      const W = S[yn] = (X) => {
        A || (A = !0, X ? K(B, [S]) : K(te, [S]), P.delayedLeave && P.delayedLeave(), S[yn] = void 0);
      };
      L ? F(L, [S, W]) : W();
    },
    leave(S, L) {
      const te = String(e.key);
      if (S[yn] && S[yn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return L();
      K(w, [S]);
      let B = !1;
      const A = S[Cs] = (W) => {
        B || (B = !0, L(), W ? K(C, [S]) : K(_, [S]), S[Cs] = void 0, G[te] === e && delete G[te]);
      };
      G[te] = e, p ? F(p, [S, A]) : A();
    },
    clone(S) {
      const L = en(
        S,
        s,
        o,
        n,
        l
      );
      return l && l(L), L;
    }
  };
  return P;
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
    c.type === H ? (c.patchFlag & 128 && l++, n = n.concat(
      Qa(c.children, s, u)
    )) : (s || c.type !== $t) && n.push(u != null ? Fs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function fe(e, s) {
  return Ge(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    gt({ name: e.name }, s, { setup: e })
  ) : e;
}
function ji(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const An = /* @__PURE__ */ new WeakMap();
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
    if (wl(s), dt(m))
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
    const _ = dt(d), C = xt(d);
    if (_ || C) {
      const $ = () => {
        if (e.f) {
          const T = _ ? p(d) ? g[d] : v[d] : d.value;
          if (l)
            Be(T) && Fa(T, i);
          else if (Be(T))
            T.includes(i) || T.push(i);
          else if (_)
            v[d] = [i], p(d) && (g[d] = v[d]);
          else {
            const D = [i];
            d.value = D, e.k && (v[e.k] = D);
          }
        } else _ ? (v[d] = c, p(d) && (g[d] = c)) : C && (d.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const T = () => {
          $(), An.delete(e);
        };
        T.id = -1, An.set(e, T), Tt(T, o);
      } else
        wl(e), $();
    }
  }
}
function wl(e) {
  const s = An.get(e);
  s && (s.flags |= 8, An.delete(e));
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
  return dt(e) ? au(nu, e, !1) || e : e || Yi;
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
  if (c || dt(e)) {
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
    return s !== "default" && (o.name = s), a(), M(
      H,
      null,
      [x("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Ji(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = M(
    H,
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
  return e.some((s) => sn(s) ? !(s.type === $t || s.type === H && !Ji(s.children)) : !0) ? e : null;
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
    deactivated: $,
    beforeDestroy: T,
    beforeUnmount: D,
    destroyed: E,
    unmounted: I,
    render: G,
    renderTracked: K,
    renderTriggered: F,
    errorCaptured: P,
    serverPrefetch: S,
    // public API
    expose: L,
    inheritAttrs: te,
    // assets
    components: B,
    directives: A,
    filters: W
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
      const Z = i[ae], _e = Ge(Z) ? Z.bind(o, o) : Ge(Z.get) ? Z.get.bind(o, o) : gs, be = !Ge(Z) && Ge(Z.set) ? Z.set.bind(o) : gs, De = N({
        get: _e,
        set: be
      });
      Object.defineProperty(n, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (ze) => De.value = ze
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
  function U(ae, Z) {
    Be(Z) ? Z.forEach((_e) => ae(_e.bind(o))) : Z && ae(Z.bind(o));
  }
  if (U(Xc, g), U(Qe, w), U(Zc, p), U(Ki, _), U(Yc, C), U(Jc, $), U(ou, P), U(su, K), U(tu, F), U(qi, D), U(Gs, I), U(eu, S), Be(L))
    if (L.length) {
      const ae = e.exposed || (e.exposed = {});
      L.forEach((Z) => {
        Object.defineProperty(ae, Z, {
          get: () => o[Z],
          set: (_e) => o[Z] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === gs && (e.render = G), te != null && (e.inheritAttrs = te), B && (e.components = B), A && (e.directives = A), S && ji(e);
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
  if (dt(e)) {
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
    (m) => On(d, m, c, !0)
  ), On(d, s, c)), ot(s) && i.set(s, d), d;
}
function On(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && On(e, i, o, !0), l && l.forEach(
    (c) => On(e, c, o, !0)
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
  beforeCreate: Et,
  created: Et,
  beforeMount: Et,
  mounted: Et,
  beforeUpdate: Et,
  updated: Et,
  beforeDestroy: Et,
  beforeUnmount: Et,
  destroyed: Et,
  unmounted: Et,
  activated: Et,
  deactivated: Et,
  errorCaptured: Et,
  serverPrefetch: Et,
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
function Et(e, s) {
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
    o[n] = Et(e[n], s[n]);
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
    Tt(p, v && v.suspense);
  } : i !== "sync" && (g = !0, u.scheduler = (p, _) => {
    _ ? p() : Ja(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Vc(e, s, u);
  return on && (m ? m.push(w) : d && w()), w;
}
function hu(e, s, o) {
  const n = this.proxy, l = dt(e) ? e.includes(".") ? tr(n, e) : () => n[e] : e.bind(n, n);
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
  c && (c.trim && (l = o.map((v) => dt(v) ? v.trim() : v)), c.number && (l = o.map(jn)));
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
  } = e, $ = Ln(e);
  let T, D;
  try {
    if (o.shapeFlag & 4) {
      const I = l || n, G = I;
      T = ps(
        m.call(
          G,
          I,
          v,
          g,
          p,
          w,
          _
        )
      ), D = u;
    } else {
      const I = s;
      T = ps(
        I.length > 1 ? I(
          g,
          { attrs: u, slots: c, emit: d }
        ) : I(
          g,
          null
        )
      ), D = s.props ? u : ku(u);
    }
  } catch (I) {
    Ho.length = 0, qn(I, e, 1), T = x($t);
  }
  let E = T;
  if (D && C !== !1) {
    const I = Object.keys(D), { shapeFlag: G } = E;
    I.length && G & 7 && (i && I.some(za) && (D = bu(
      D,
      i
    )), E = Fs(E, D, !1, !0));
  }
  return o.dirs && (E = Fs(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && oo(E, o.transition), T = E, Ln($), T;
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
        let C = !1, $ = !0;
        if (Be(_))
          for (let T = 0; T < _.length; ++T) {
            const D = _[T], E = Ge(D) && D.name;
            if (E === "Boolean") {
              C = !0;
              break;
            } else E === "String" && ($ = !1);
          }
        else
          C = Ge(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = C, p[
          1
          /* shouldCastTrue */
        ] = $, (C || et(p, "default")) && u.push(g);
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
}, Tt = Au;
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
  } = e, C = (O, R, z, q = null, ne = null, re = null, $e = void 0, ie = null, we = !!R.dynamicChildren) => {
    if (O === R)
      return;
    O && !Zs(O, R) && (q = ce(O), ze(O, ne, re, !0), O = null), R.patchFlag === -2 && (we = !1, R.dynamicChildren = null);
    const { type: ge, ref: Re, shapeFlag: Se } = R;
    switch (ge) {
      case Xn:
        $(O, R, z, q);
        break;
      case $t:
        T(O, R, z, q);
        break;
      case da:
        O == null && D(R, z, q, $e);
        break;
      case H:
        B(
          O,
          R,
          z,
          q,
          ne,
          re,
          $e,
          ie,
          we
        );
        break;
      default:
        Se & 1 ? G(
          O,
          R,
          z,
          q,
          ne,
          re,
          $e,
          ie,
          we
        ) : Se & 6 ? A(
          O,
          R,
          z,
          q,
          ne,
          re,
          $e,
          ie,
          we
        ) : (Se & 64 || Se & 128) && ge.process(
          O,
          R,
          z,
          q,
          ne,
          re,
          $e,
          ie,
          we,
          Pe
        );
    }
    Re != null && ne ? Go(Re, O && O.ref, re, R || O, !R) : Re == null && O && O.ref != null && Go(O.ref, null, re, O, !0);
  }, $ = (O, R, z, q) => {
    if (O == null)
      n(
        R.el = u(R.children),
        z,
        q
      );
    else {
      const ne = R.el = O.el;
      R.children !== O.children && m(ne, R.children);
    }
  }, T = (O, R, z, q) => {
    O == null ? n(
      R.el = d(R.children || ""),
      z,
      q
    ) : R.el = O.el;
  }, D = (O, R, z, q) => {
    [O.el, O.anchor] = _(
      O.children,
      R,
      z,
      q,
      O.el,
      O.anchor
    );
  }, E = ({ el: O, anchor: R }, z, q) => {
    let ne;
    for (; O && O !== R; )
      ne = w(O), n(O, z, q), O = ne;
    n(R, z, q);
  }, I = ({ el: O, anchor: R }) => {
    let z;
    for (; O && O !== R; )
      z = w(O), l(O), O = z;
    l(R);
  }, G = (O, R, z, q, ne, re, $e, ie, we) => {
    if (R.type === "svg" ? $e = "svg" : R.type === "math" && ($e = "mathml"), O == null)
      K(
        R,
        z,
        q,
        ne,
        re,
        $e,
        ie,
        we
      );
    else {
      const ge = O.el && O.el._isVueCE ? O.el : null;
      try {
        ge && ge._beginPatch(), S(
          O,
          R,
          ne,
          re,
          $e,
          ie,
          we
        );
      } finally {
        ge && ge._endPatch();
      }
    }
  }, K = (O, R, z, q, ne, re, $e, ie) => {
    let we, ge;
    const { props: Re, shapeFlag: Se, transition: ee, dirs: Y } = O;
    if (we = O.el = c(
      O.type,
      re,
      Re && Re.is,
      Re
    ), Se & 8 ? v(we, O.children) : Se & 16 && P(
      O.children,
      we,
      null,
      q,
      ne,
      ua(O, re),
      $e,
      ie
    ), Y && qs(O, null, q, "created"), F(we, O, O.scopeId, $e, q), Re) {
      for (const Ce in Re)
        Ce !== "value" && !Fo(Ce) && i(we, Ce, null, Re[Ce], re, q);
      "value" in Re && i(we, "value", null, Re.value, re), (ge = Re.onVnodeBeforeMount) && us(ge, q, O);
    }
    Y && qs(O, null, q, "beforeMount");
    const Me = Du(ne, ee);
    Me && ee.beforeEnter(we), n(we, R, z), ((ge = Re && Re.onVnodeMounted) || Me || Y) && Tt(() => {
      ge && us(ge, q, O), Me && ee.enter(we), Y && qs(O, null, q, "mounted");
    }, ne);
  }, F = (O, R, z, q, ne) => {
    if (z && p(O, z), q)
      for (let re = 0; re < q.length; re++)
        p(O, q[re]);
    if (ne) {
      let re = ne.subTree;
      if (R === re || fr(re.type) && (re.ssContent === R || re.ssFallback === R)) {
        const $e = ne.vnode;
        F(
          O,
          $e,
          $e.scopeId,
          $e.slotScopeIds,
          ne.parent
        );
      }
    }
  }, P = (O, R, z, q, ne, re, $e, ie, we = 0) => {
    for (let ge = we; ge < O.length; ge++) {
      const Re = O[ge] = ie ? Us(O[ge]) : ps(O[ge]);
      C(
        null,
        Re,
        R,
        z,
        q,
        ne,
        re,
        $e,
        ie
      );
    }
  }, S = (O, R, z, q, ne, re, $e) => {
    const ie = R.el = O.el;
    let { patchFlag: we, dynamicChildren: ge, dirs: Re } = R;
    we |= O.patchFlag & 16;
    const Se = O.props || nt, ee = R.props || nt;
    let Y;
    if (z && Ys(z, !1), (Y = ee.onVnodeBeforeUpdate) && us(Y, z, R, O), Re && qs(R, O, z, "beforeUpdate"), z && Ys(z, !0), (Se.innerHTML && ee.innerHTML == null || Se.textContent && ee.textContent == null) && v(ie, ""), ge ? L(
      O.dynamicChildren,
      ge,
      ie,
      z,
      q,
      ua(R, ne),
      re
    ) : $e || Z(
      O,
      R,
      ie,
      null,
      z,
      q,
      ua(R, ne),
      re,
      !1
    ), we > 0) {
      if (we & 16)
        te(ie, Se, ee, z, ne);
      else if (we & 2 && Se.class !== ee.class && i(ie, "class", null, ee.class, ne), we & 4 && i(ie, "style", Se.style, ee.style, ne), we & 8) {
        const Me = R.dynamicProps;
        for (let Ce = 0; Ce < Me.length; Ce++) {
          const he = Me[Ce], j = Se[he], V = ee[he];
          (V !== j || he === "value") && i(ie, he, j, V, ne, z);
        }
      }
      we & 1 && O.children !== R.children && v(ie, R.children);
    } else !$e && ge == null && te(ie, Se, ee, z, ne);
    ((Y = ee.onVnodeUpdated) || Re) && Tt(() => {
      Y && us(Y, z, R, O), Re && qs(R, O, z, "updated");
    }, q);
  }, L = (O, R, z, q, ne, re, $e) => {
    for (let ie = 0; ie < R.length; ie++) {
      const we = O[ie], ge = R[ie], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        we.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (we.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zs(we, ge) || // - In the case of a component, it could contain anything.
        we.shapeFlag & 198) ? g(we.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      C(
        we,
        ge,
        Re,
        null,
        q,
        ne,
        re,
        $e,
        !0
      );
    }
  }, te = (O, R, z, q, ne) => {
    if (R !== z) {
      if (R !== nt)
        for (const re in R)
          !Fo(re) && !(re in z) && i(
            O,
            re,
            R[re],
            null,
            ne,
            q
          );
      for (const re in z) {
        if (Fo(re)) continue;
        const $e = z[re], ie = R[re];
        $e !== ie && re !== "value" && i(O, re, ie, $e, ne, q);
      }
      "value" in z && i(O, "value", R.value, z.value, ne);
    }
  }, B = (O, R, z, q, ne, re, $e, ie, we) => {
    const ge = R.el = O ? O.el : u(""), Re = R.anchor = O ? O.anchor : u("");
    let { patchFlag: Se, dynamicChildren: ee, slotScopeIds: Y } = R;
    Y && (ie = ie ? ie.concat(Y) : Y), O == null ? (n(ge, z, q), n(Re, z, q), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      z,
      Re,
      ne,
      re,
      $e,
      ie,
      we
    )) : Se > 0 && Se & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (L(
      O.dynamicChildren,
      ee,
      z,
      ne,
      re,
      $e,
      ie
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || ne && R === ne.subTree) && tl(
      O,
      R,
      !0
      /* shallow */
    )) : Z(
      O,
      R,
      z,
      Re,
      ne,
      re,
      $e,
      ie,
      we
    );
  }, A = (O, R, z, q, ne, re, $e, ie, we) => {
    R.slotScopeIds = ie, O == null ? R.shapeFlag & 512 ? ne.ctx.activate(
      R,
      z,
      q,
      $e,
      we
    ) : W(
      R,
      z,
      q,
      ne,
      re,
      $e,
      we
    ) : X(O, R, we);
  }, W = (O, R, z, q, ne, re, $e) => {
    const ie = O.component = Vu(
      O,
      q,
      ne
    );
    if (Yn(O) && (ie.ctx.renderer = Pe), Wu(ie, !1, $e), ie.asyncDep) {
      if (ne && ne.registerDep(ie, U, $e), !O.el) {
        const we = ie.subTree = x($t);
        T(null, we, R, z), O.placeholder = we.el;
      }
    } else
      U(
        ie,
        O,
        R,
        z,
        ne,
        re,
        $e
      );
  }, X = (O, R, z) => {
    const q = R.component = O.component;
    if ($u(O, R, z))
      if (q.asyncDep && !q.asyncResolved) {
        ae(q, R, z);
        return;
      } else
        q.next = R, q.update();
    else
      R.el = O.el, q.vnode = R;
  }, U = (O, R, z, q, ne, re, $e) => {
    const ie = () => {
      if (O.isMounted) {
        let { next: Se, bu: ee, u: Y, parent: Me, vnode: Ce } = O;
        {
          const Ve = dr(O);
          if (Ve) {
            Se && (Se.el = Ce.el, ae(O, Se, $e)), Ve.asyncDep.then(() => {
              O.isUnmounted || ie();
            });
            return;
          }
        }
        let he = Se, j;
        Ys(O, !1), Se ? (Se.el = Ce.el, ae(O, Se, $e)) : Se = Ce, ee && Cn(ee), (j = Se.props && Se.props.onVnodeBeforeUpdate) && us(j, Me, Se, Ce), Ys(O, !0);
        const V = xl(O), me = O.subTree;
        O.subTree = V, C(
          me,
          V,
          // parent may have changed if it's in a teleport
          g(me.el),
          // anchor may have changed if it's in a fragment
          ce(me),
          O,
          ne,
          re
        ), Se.el = V.el, he === null && Cu(O, V.el), Y && Tt(Y, ne), (j = Se.props && Se.props.onVnodeUpdated) && Tt(
          () => us(j, Me, Se, Ce),
          ne
        );
      } else {
        let Se;
        const { el: ee, props: Y } = R, { bm: Me, m: Ce, parent: he, root: j, type: V } = O, me = yo(R);
        Ys(O, !1), Me && Cn(Me), !me && (Se = Y && Y.onVnodeBeforeMount) && us(Se, he, R), Ys(O, !0);
        {
          j.ce && // @ts-expect-error _def is private
          j.ce._def.shadowRoot !== !1 && j.ce._injectChildStyle(V);
          const Ve = O.subTree = xl(O);
          C(
            null,
            Ve,
            z,
            q,
            O,
            ne,
            re
          ), R.el = Ve.el;
        }
        if (Ce && Tt(Ce, ne), !me && (Se = Y && Y.onVnodeMounted)) {
          const Ve = R;
          Tt(
            () => us(Se, he, Ve),
            ne
          );
        }
        (R.shapeFlag & 256 || he && yo(he.vnode) && he.vnode.shapeFlag & 256) && O.a && Tt(O.a, ne), O.isMounted = !0, R = z = q = null;
      }
    };
    O.scope.on();
    const we = O.effect = new gi(ie);
    O.scope.off();
    const ge = O.update = we.run.bind(we), Re = O.job = we.runIfDirty.bind(we);
    Re.i = O, Re.id = O.uid, we.scheduler = () => Ja(Re), Ys(O, !0), ge();
  }, ae = (O, R, z) => {
    R.component = O;
    const q = O.vnode.props;
    O.vnode = R, O.next = null, Su(O, R.props, q, z), Pu(O, R.children, z), Es(), vl(O), Ts();
  }, Z = (O, R, z, q, ne, re, $e, ie, we = !1) => {
    const ge = O && O.children, Re = O ? O.shapeFlag : 0, Se = R.children, { patchFlag: ee, shapeFlag: Y } = R;
    if (ee > 0) {
      if (ee & 128) {
        be(
          ge,
          Se,
          z,
          q,
          ne,
          re,
          $e,
          ie,
          we
        );
        return;
      } else if (ee & 256) {
        _e(
          ge,
          Se,
          z,
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
    Y & 8 ? (Re & 16 && oe(ge, ne, re), Se !== ge && v(z, Se)) : Re & 16 ? Y & 16 ? be(
      ge,
      Se,
      z,
      q,
      ne,
      re,
      $e,
      ie,
      we
    ) : oe(ge, ne, re, !0) : (Re & 8 && v(z, ""), Y & 16 && P(
      Se,
      z,
      q,
      ne,
      re,
      $e,
      ie,
      we
    ));
  }, _e = (O, R, z, q, ne, re, $e, ie, we) => {
    O = O || po, R = R || po;
    const ge = O.length, Re = R.length, Se = Math.min(ge, Re);
    let ee;
    for (ee = 0; ee < Se; ee++) {
      const Y = R[ee] = we ? Us(R[ee]) : ps(R[ee]);
      C(
        O[ee],
        Y,
        z,
        null,
        ne,
        re,
        $e,
        ie,
        we
      );
    }
    ge > Re ? oe(
      O,
      ne,
      re,
      !0,
      !1,
      Se
    ) : P(
      R,
      z,
      q,
      ne,
      re,
      $e,
      ie,
      we,
      Se
    );
  }, be = (O, R, z, q, ne, re, $e, ie, we) => {
    let ge = 0;
    const Re = R.length;
    let Se = O.length - 1, ee = Re - 1;
    for (; ge <= Se && ge <= ee; ) {
      const Y = O[ge], Me = R[ge] = we ? Us(R[ge]) : ps(R[ge]);
      if (Zs(Y, Me))
        C(
          Y,
          Me,
          z,
          null,
          ne,
          re,
          $e,
          ie,
          we
        );
      else
        break;
      ge++;
    }
    for (; ge <= Se && ge <= ee; ) {
      const Y = O[Se], Me = R[ee] = we ? Us(R[ee]) : ps(R[ee]);
      if (Zs(Y, Me))
        C(
          Y,
          Me,
          z,
          null,
          ne,
          re,
          $e,
          ie,
          we
        );
      else
        break;
      Se--, ee--;
    }
    if (ge > Se) {
      if (ge <= ee) {
        const Y = ee + 1, Me = Y < Re ? R[Y].el : q;
        for (; ge <= ee; )
          C(
            null,
            R[ge] = we ? Us(R[ge]) : ps(R[ge]),
            z,
            Me,
            ne,
            re,
            $e,
            ie,
            we
          ), ge++;
      }
    } else if (ge > ee)
      for (; ge <= Se; )
        ze(O[ge], ne, re, !0), ge++;
    else {
      const Y = ge, Me = ge, Ce = /* @__PURE__ */ new Map();
      for (ge = Me; ge <= ee; ge++) {
        const st = R[ge] = we ? Us(R[ge]) : ps(R[ge]);
        st.key != null && Ce.set(st.key, ge);
      }
      let he, j = 0;
      const V = ee - Me + 1;
      let me = !1, Ve = 0;
      const Ze = new Array(V);
      for (ge = 0; ge < V; ge++) Ze[ge] = 0;
      for (ge = Y; ge <= Se; ge++) {
        const st = O[ge];
        if (j >= V) {
          ze(st, ne, re, !0);
          continue;
        }
        let pt;
        if (st.key != null)
          pt = Ce.get(st.key);
        else
          for (he = Me; he <= ee; he++)
            if (Ze[he - Me] === 0 && Zs(st, R[he])) {
              pt = he;
              break;
            }
        pt === void 0 ? ze(st, ne, re, !0) : (Ze[pt - Me] = ge + 1, pt >= Ve ? Ve = pt : me = !0, C(
          st,
          R[pt],
          z,
          null,
          ne,
          re,
          $e,
          ie,
          we
        ), j++);
      }
      const It = me ? Lu(Ze) : po;
      for (he = It.length - 1, ge = V - 1; ge >= 0; ge--) {
        const st = Me + ge, pt = R[st], qt = R[st + 1], yt = st + 1 < Re ? (
          // #13559, fallback to el placeholder for unresolved async component
          qt.el || qt.placeholder
        ) : q;
        Ze[ge] === 0 ? C(
          null,
          pt,
          z,
          yt,
          ne,
          re,
          $e,
          ie,
          we
        ) : me && (he < 0 || ge !== It[he] ? De(pt, z, yt, 2) : he--);
      }
    }
  }, De = (O, R, z, q, ne = null) => {
    const { el: re, type: $e, transition: ie, children: we, shapeFlag: ge } = O;
    if (ge & 6) {
      De(O.component.subTree, R, z, q);
      return;
    }
    if (ge & 128) {
      O.suspense.move(R, z, q);
      return;
    }
    if (ge & 64) {
      $e.move(O, R, z, Pe);
      return;
    }
    if ($e === H) {
      n(re, R, z);
      for (let Se = 0; Se < we.length; Se++)
        De(we[Se], R, z, q);
      n(O.anchor, R, z);
      return;
    }
    if ($e === da) {
      E(O, R, z);
      return;
    }
    if (q !== 2 && ge & 1 && ie)
      if (q === 0)
        ie.beforeEnter(re), n(re, R, z), Tt(() => ie.enter(re), ne);
      else {
        const { leave: Se, delayLeave: ee, afterLeave: Y } = ie, Me = () => {
          O.ctx.isUnmounted ? l(re) : n(re, R, z);
        }, Ce = () => {
          re._isLeaving && re[Cs](
            !0
            /* cancelled */
          ), Se(re, () => {
            Me(), Y && Y();
          });
        };
        ee ? ee(re, Me, Ce) : Ce();
      }
    else
      n(re, R, z);
  }, ze = (O, R, z, q = !1, ne = !1) => {
    const {
      type: re,
      props: $e,
      ref: ie,
      children: we,
      dynamicChildren: ge,
      shapeFlag: Re,
      patchFlag: Se,
      dirs: ee,
      cacheIndex: Y
    } = O;
    if (Se === -2 && (ne = !1), ie != null && (Es(), Go(ie, null, z, O, !0), Ts()), Y != null && (R.renderCache[Y] = void 0), Re & 256) {
      R.ctx.deactivate(O);
      return;
    }
    const Me = Re & 1 && ee, Ce = !yo(O);
    let he;
    if (Ce && (he = $e && $e.onVnodeBeforeUnmount) && us(he, R, O), Re & 6)
      ve(O.component, z, q);
    else {
      if (Re & 128) {
        O.suspense.unmount(z, q);
        return;
      }
      Me && qs(O, null, R, "beforeUnmount"), Re & 64 ? O.type.remove(
        O,
        R,
        z,
        Pe,
        q
      ) : ge && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ge.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (re !== H || Se > 0 && Se & 64) ? oe(
        ge,
        R,
        z,
        !1,
        !0
      ) : (re === H && Se & 384 || !ne && Re & 16) && oe(we, R, z), q && Ue(O);
    }
    (Ce && (he = $e && $e.onVnodeUnmounted) || Me) && Tt(() => {
      he && us(he, R, O), Me && qs(O, null, R, "unmounted");
    }, z);
  }, Ue = (O) => {
    const { type: R, el: z, anchor: q, transition: ne } = O;
    if (R === H) {
      Ye(z, q);
      return;
    }
    if (R === da) {
      I(O);
      return;
    }
    const re = () => {
      l(z), ne && !ne.persisted && ne.afterLeave && ne.afterLeave();
    };
    if (O.shapeFlag & 1 && ne && !ne.persisted) {
      const { leave: $e, delayLeave: ie } = ne, we = () => $e(z, re);
      ie ? ie(O.el, re, we) : we();
    } else
      re();
  }, Ye = (O, R) => {
    let z;
    for (; O !== R; )
      z = w(O), l(O), O = z;
    l(R);
  }, ve = (O, R, z) => {
    const { bum: q, scope: ne, job: re, subTree: $e, um: ie, m: we, a: ge } = O;
    El(we), El(ge), q && Cn(q), ne.stop(), re && (re.flags |= 8, ze($e, O, R, z)), ie && Tt(ie, R), Tt(() => {
      O.isUnmounted = !0;
    }, R);
  }, oe = (O, R, z, q = !1, ne = !1, re = 0) => {
    for (let $e = re; $e < O.length; $e++)
      ze(O[$e], R, z, q, ne);
  }, ce = (O) => {
    if (O.shapeFlag & 6)
      return ce(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const R = w(O.anchor || O.el), z = R && R[Oi];
    return z ? w(z) : R;
  };
  let ue = !1;
  const Ie = (O, R, z) => {
    O == null ? R._vnode && ze(R._vnode, null, null, !0) : C(
      R._vnode || null,
      O,
      R,
      null,
      null,
      null,
      z
    ), R._vnode = O, ue || (ue = !0, vl(), Di(), ue = !1);
  }, Pe = {
    p: C,
    um: ze,
    m: De,
    r: Ue,
    mt: W,
    mc: P,
    pc: Z,
    pbc: L,
    n: ce,
    o: e
  };
  return {
    render: Ie,
    hydrate: void 0,
    createApp: mu(Ie)
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
function Au(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : jc(e);
}
const H = Symbol.for("v-fgt"), Xn = Symbol.for("v-txt"), $t = Symbol.for("v-cmt"), da = Symbol.for("v-stc"), Ho = [];
let Ut = null;
function a(e = !1) {
  Ho.push(Ut = e ? null : []);
}
function Ou() {
  Ho.pop(), Ut = Ho[Ho.length - 1] || null;
}
let tn = 1;
function Nn(e, s = !1) {
  tn += e, e < 0 && Ut && s && (Ut.hasOnce = !0);
}
function mr(e) {
  return e.dynamicChildren = tn > 0 ? Ut || po : null, Ou(), tn > 0 && Ut && Ut.push(e), e;
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
function M(e, s, o, n, l) {
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
}) => (typeof e == "number" && (e = "" + e), e != null ? dt(e) || xt(e) || Ge(e) ? { i: _t, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === H ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && vr(s),
    ref: s && In(s),
    scopeId: Ai,
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
  return u ? (sl(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= dt(o) ? 8 : 16), tn > 0 && // avoid a block node from tracking itself
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
    u && !dt(u) && (s.class = Ee(u)), ot(d) && (Ya(d) && !Be(d) && (d = gt({}, d)), s.style = Ft(d));
  }
  const c = dt(e) ? 1 : fr(e) ? 128 : Ni(e) ? 64 : ot(e) ? 4 : Ge(e) ? 2 : 0;
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
  return d && n && oo(
    v,
    d.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return x(Xn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), M($t, null, e)) : x($t, null, e);
}
function ps(e) {
  return e == null || typeof e == "boolean" ? x($t) : Be(e) ? x(
    H,
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
  else Ge(s) ? (s = { default: s, _ctx: _t }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function zu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Ee([s.class, n.class]));
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pi(Ac(e.exposed)), {
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
const N = (e, s) => Fc(e, s, on);
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
  for (const B in e)
    B in yr || (s[B] = e[B]);
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
  } = e, _ = td(l), C = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: T,
    onEnter: D,
    onEnterCancelled: E,
    onLeave: I,
    onLeaveCancelled: G,
    onBeforeAppear: K = T,
    onAppear: F = D,
    onAppearCancelled: P = E
  } = s, S = (B, A, W, X) => {
    B._enterCancelled = X, As(B, A ? v : u), As(B, A ? m : c), W && W();
  }, L = (B, A) => {
    B._isLeaving = !1, As(B, g), As(B, p), As(B, w), A && A();
  }, te = (B) => (A, W) => {
    const X = B ? F : D, U = () => S(A, B, W);
    Js(X, [A, U]), Ll(() => {
      As(A, B ? d : i), fs(A, B ? v : u), Dl(X) || Al(A, n, C, U);
    });
  };
  return gt(s, {
    onBeforeEnter(B) {
      Js(T, [B]), fs(B, i), fs(B, c);
    },
    onBeforeAppear(B) {
      Js(K, [B]), fs(B, d), fs(B, m);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(B, A) {
      B._isLeaving = !0;
      const W = () => L(B, A);
      fs(B, g), B._enterCancelled ? (fs(B, w), Ma(B)) : (Ma(B), fs(B, w)), Ll(() => {
        B._isLeaving && (As(B, g), fs(B, p), Dl(I) || Al(B, n, $, W));
      }), Js(I, [B, W]);
    },
    onEnterCancelled(B) {
      S(B, !1, void 0, !0), Js(E, [B]);
    },
    onAppearCancelled(B) {
      S(B, !0, void 0, !0), Js(P, [B]);
    },
    onLeaveCancelled(B) {
      L(B), Js(G, [B]);
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
function As(e, s) {
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
function Al(e, s, o, n) {
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
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ls}Delay`), i = n(`${Ls}Duration`), c = Ol(l, i), u = n(`${Mo}Delay`), d = n(`${Mo}Duration`), m = Ol(u, d);
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
function od(e, s, o) {
  const n = e[bo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Ul = Symbol("_vod"), nd = Symbol("_vsh"), ad = Symbol(""), ld = /(?:^|;)\s*display\s*:/;
function id(e, s, o) {
  const n = e.style, l = dt(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (dt(s))
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
  s === "class" ? od(e, n, c) : s === "style" ? id(e, o, n) : Vn(s) ? za(s) || ud(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : hd(e, s, n, c)) ? (Wl(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Vl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !dt(n)) ? Wl(e, Kt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Vl(e, s, n, c));
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
  return Hl(s) && dt(o) ? !1 : s in e;
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
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[zn] = null, As(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), u = _r(c);
      let d = c.tag || H;
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
  return dt(e) ? document.querySelector(e) : e;
}
const Ld = { class: "panel-layout" }, Ad = {
  key: 0,
  class: "panel-layout-header"
}, Od = {
  key: 1,
  class: "panel-layout-search"
}, Nd = { class: "panel-layout-content" }, Ud = {
  key: 2,
  class: "panel-layout-footer"
}, zd = /* @__PURE__ */ fe({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", Ld, [
      s.$slots.header ? (a(), r("div", Ad, [
        Ke(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", Od, [
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
}, Vd = /* @__PURE__ */ fe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), M(Xa(`h${e.level}`), {
      class: Ee(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Fd, f(e.prefix), 1)) : (a(), r("span", Bd)),
        Ke(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Wd = /* @__PURE__ */ pe(Vd, [["__scopeId", "data-v-c3875efc"]]), Gd = ["title"], jd = ["width", "height"], Hd = /* @__PURE__ */ fe({
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
}, Yd = /* @__PURE__ */ fe({
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
      t("div", Kd, [
        x(Wd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), M(xr, {
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
}, Xd = /* @__PURE__ */ fe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), M(Xa(`h${e.level}`), {
      class: Ee(["section-title", { clickable: e.clickable }]),
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
}, lf = /* @__PURE__ */ fe({
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
}, df = { class: "status-item__label" }, ff = /* @__PURE__ */ fe({
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
    const s = e, o = N(() => `issue-card--${s.severity}`);
    return (n, l) => (a(), r("div", {
      class: Ee(["issue-card", o.value])
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
        (a(!0), r(H, null, ye(e.items, (i, c) => (a(), r("div", {
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
}, $f = /* @__PURE__ */ fe({
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
      e.loading ? (a(), r("span", bf)) : y("", !0),
      e.loading ? y("", !0) : Ke(s.$slots, "default", { key: 1 }, void 0)
    ], 10, kf));
  }
}), de = /* @__PURE__ */ pe($f, [["__scopeId", "data-v-772abe47"]]), Cf = { class: "empty-state" }, xf = {
  key: 0,
  class: "empty-icon"
}, Sf = { class: "empty-message" }, If = /* @__PURE__ */ fe({
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
      e.actionLabel ? (a(), M(de, {
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
}), as = /* @__PURE__ */ pe(If, [["__scopeId", "data-v-4466284f"]]), Ef = /* @__PURE__ */ fe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Ee(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      Ke(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Tn = /* @__PURE__ */ pe(Ef, [["__scopeId", "data-v-75e9eeb8"]]), Tf = /* @__PURE__ */ fe({
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
}), Da = /* @__PURE__ */ pe(Tf, [["__scopeId", "data-v-2f186e4c"]]), Pf = { class: "detail-row" }, Rf = /* @__PURE__ */ fe({
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
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M(Da, {
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
}), mt = /* @__PURE__ */ pe(Rf, [["__scopeId", "data-v-ef15664a"]]), Mf = { class: "modal-header" }, Df = { class: "modal-body" }, Lf = { class: "status-section" }, Af = {
  key: 0,
  class: "status-section"
}, Of = { class: "section-header-row" }, Nf = {
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
}, Lm = { class: "section-header-row" }, Am = {
  key: 0,
  class: "drift-item"
}, Om = { class: "drift-list" }, Nm = {
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
}, tv = { class: "modal-actions" }, sv = /* @__PURE__ */ fe({
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
        var T, D, E;
        const $ = (E = (D = (T = s.status) == null ? void 0 : T.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : E.find((I) => I.name === C);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = N(() => {
      var w, p, _, C, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = N(() => {
      var p, _, C;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = N(() => {
      var w, p, _, C, $, T;
      return !c.value && !u.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((T = ($ = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : T.length) ?? 0) === 0;
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
      var _, C, $, T, D, E, I, G, K, F, P, S, L, te, B, A, W, X, U, ae, Z, _e;
      return a(), M(kt, { to: "body" }, [
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
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                x(mt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", Af, [
                t("div", Of, [
                  x(Nt, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
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
                    (a(!0), r(H, null, ye(n.value, (be) => (a(), r("div", {
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
                    (a(!0), r(H, null, ye(l.value, (be) => (a(), r("div", {
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
                    (a(!0), r(H, null, ye(e.status.workflows.new, (be) => (a(), r("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", Zf, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && T.length ? (a(), r("div", em, [
                  t("div", tm, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", sm, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", om, [
                    (a(!0), r(H, null, ye(e.status.workflows.modified, (be) => (a(), r("div", {
                      key: be,
                      class: "workflow-item"
                    }, [
                      t("span", nm, f(be), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (D = e.status.workflows) == null ? void 0 : D.deleted) != null && E.length ? (a(), r("div", am, [
                  t("div", lm, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", im, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", rm, [
                    (a(!0), r(H, null, ye(e.status.workflows.deleted, (be) => (a(), r("div", {
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
                    (a(!0), r(H, null, ye(i.value, (be) => (a(), r("div", {
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
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (G = (I = e.status.git_changes) == null ? void 0 : I.nodes_added) != null && G.length ? (a(), r("div", gm, [
                  t("div", hm, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", ym, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", wm, [
                    (a(!0), r(H, null, ye(e.status.git_changes.nodes_added, (be) => (a(), r("div", {
                      key: v(be),
                      class: "change-item"
                    }, [
                      t("span", _m, f(v(be)), 1),
                      g(be) ? (a(), r("span", km, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (K = e.status.git_changes) == null ? void 0 : K.nodes_removed) != null && F.length ? (a(), r("div", bm, [
                  t("div", $m, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Cm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", xm, [
                    (a(!0), r(H, null, ye(e.status.git_changes.nodes_removed, (be) => (a(), r("div", {
                      key: v(be),
                      class: "change-item"
                    }, [
                      t("span", Sm, f(v(be)), 1),
                      g(be) ? (a(), r("span", Im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = e.status.git_changes) != null && P.workflow_changes ? (a(), r("div", Em, [
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
                (S = e.status.git_changes) != null && S.has_other_changes ? (a(), r("div", Mm, [...p[21] || (p[21] = [
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
              (L = e.status.comparison) != null && L.is_synced ? y("", !0) : (a(), r("div", Dm, [
                t("div", Lm, [
                  x(Nt, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
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
                (B = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && B.length ? (a(), r("div", Am, [
                  x(mt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Om, [
                    (a(!0), r(H, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (be) => (a(), r("div", {
                      key: be,
                      class: "drift-list-item"
                    }, " - " + f(be), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (W = (A = e.status.comparison) == null ? void 0 : A.extra_nodes) != null && W.length ? (a(), r("div", Um, [
                  x(mt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", zm, [
                    (a(!0), r(H, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (be) => (a(), r("div", {
                      key: be,
                      class: "drift-list-item"
                    }, " - " + f(be), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Fm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (U = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && U.length ? (a(), r("div", Bm, [
                  x(mt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Vm, [
                    (a(!0), r(H, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (be) => (a(), r("div", {
                      key: be.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(be.name) + ": ", 1),
                      t("span", Wm, f(be.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
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
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (_e = (Z = e.status.comparison) == null ? void 0 : Z.disabled_nodes) != null && _e.length ? (a(), r("div", qm, [
                x(Nt, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Ym, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Jm, [
                  (a(!0), r(H, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (be) => (a(), r("div", {
                    key: be,
                    class: "drift-list-item"
                  }, " • " + f(be), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Qm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Xm, [
                x(Nt, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
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
}), ov = /* @__PURE__ */ pe(sv, [["__scopeId", "data-v-e2b37122"]]), nv = { class: "health-section-header" }, av = { class: "suggestions-content" }, lv = { class: "suggestions-text" }, iv = { style: { "margin-top": "var(--cg-space-3)" } }, rv = {
  key: 1,
  class: "no-issues-text"
}, cv = /* @__PURE__ */ fe({
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
      const X = n.status.workflows.analyzed || [], U = X.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return U.length === 0 && n.status.missing_models_count > 0 ? X.filter((ae) => ae.sync_state === "synced") : U;
    });
    function $() {
      const X = C.value;
      X.length !== 0 && (v.value = !0, m("repair-missing-models", X.map((U) => U.name)));
    }
    function T() {
      v.value = !1;
    }
    s({ resetRepairingState: T, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const D = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), E = N(() => n.status.has_changes), I = N(() => {
      const X = n.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), G = N(() => n.status.has_changes || D.value), K = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), F = N(() => n.status.git_changes.has_other_changes), P = N(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter((U) => U.status === "broken")) || [];
    }), S = N(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), L = N(() => P.value.length > 0), te = N(() => L.value || S.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), B = N(() => {
      const X = [];
      return n.status.workflows.new.length > 0 && X.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && X.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && X.push(`${n.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), A = N(() => {
      var ae, Z;
      const X = [], U = n.status.comparison;
      return (ae = U.missing_nodes) != null && ae.length && X.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (Z = U.extra_nodes) != null && Z.length && X.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), W = N(() => {
      var ae, Z;
      const X = [], U = n.status.comparison;
      return (ae = U.extra_nodes) != null && ae.length && (U.extra_nodes.slice(0, 3).forEach((_e) => {
        X.push(`Untracked: ${_e}`);
      }), U.extra_nodes.length > 3 && X.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (Z = U.missing_nodes) != null && Z.length && (U.missing_nodes.slice(0, 3).forEach((_e) => {
        X.push(`Missing: ${_e}`);
      }), U.missing_nodes.length > 3 && X.push(`...and ${U.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, U) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), M(Xt, {
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
                onClick: U[0] || (U[0] = (ae) => X.$emit("start-setup"))
              }, {
                default: h(() => [...U[13] || (U[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), M(Xt, {
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
                onClick: U[1] || (U[1] = (ae) => X.$emit("view-environments"))
              }, {
                default: h(() => [...U[14] || (U[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), M(Xt, {
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
                onClick: U[2] || (U[2] = (ae) => X.$emit("create-environment"))
              }, {
                default: h(() => [...U[15] || (U[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (ae) => i.value = !0),
            onMouseleave: U[5] || (U[5] = (ae) => i.value = !1)
          }, [
            t("div", nv, [
              x(Nt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...U[16] || (U[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              x(ed, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), M(de, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...U[17] || (U[17] = [
                      b(" Show All ", -1)
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
                e.status.workflows.new.length ? (a(), M(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(ds, {
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
                e.status.git_changes.nodes_added.length ? (a(), M(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(ds, {
                  key: 2,
                  icon: "●",
                  count: K.value,
                  label: K.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                F.value ? (a(), M(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                E.value && !I.value && !F.value ? (a(), M(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                E.value ? y("", !0) : (a(), M(ds, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              G.value ? {
                name: "footer",
                fn: h(() => [
                  U[19] || (U[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", av, [
                    t("span", lv, f(B.value), 1),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (ae) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...U[18] || (U[18] = [
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
          e.status.is_detached_head ? (a(), M(Xt, {
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
                onClick: U[6] || (U[6] = (ae) => X.$emit("create-branch"))
              }, {
                default: h(() => [...U[20] || (U[20] = [
                  b(" Create Branch ", -1)
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
              default: h(() => [...U[21] || (U[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            te.value ? (a(), r(H, { key: 0 }, [
              P.value.length > 0 ? (a(), M(Xt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: P.value.map((ae) => `${ae.name} — ${ae.issue_summary}`)
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[22] || (U[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              S.value.length > 0 ? (a(), M(Xt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: S.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[23] || (U[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !L.value ? (a(), M(Xt, {
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
                    onClick: U[9] || (U[9] = (ae) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...U[24] || (U[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), M(Xt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: A.value,
                items: W.value
              }, {
                actions: h(() => [
                  x(de, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...U[25] || (U[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  x(de, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (ae) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[26] || (U[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), M(Xt, {
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
                    onClick: U[11] || (U[11] = (ae) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...U[27] || (U[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : G.value ? (a(), r("span", rv, "No issues")) : (a(), M(as, {
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
        onClose: U[12] || (U[12] = (ae) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), uv = /* @__PURE__ */ pe(cv, [["__scopeId", "data-v-55fcd77f"]]), dv = ["type", "value", "placeholder", "disabled"], fv = /* @__PURE__ */ fe({
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
      class: Ee(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Ht((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ht((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, dv));
  }
}), Ko = /* @__PURE__ */ pe(fv, [["__scopeId", "data-v-0380d08f"]]), mv = { class: "branch-create-form" }, vv = { class: "form-actions" }, pv = /* @__PURE__ */ fe({
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
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        x(de, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
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
}, kv = /* @__PURE__ */ fe({
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
      t("span", hv, f(e.isCurrent ? "●" : "○"), 1),
      t("span", yv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", wv, [
        Ke(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", _v, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), bv = /* @__PURE__ */ pe(kv, [["__scopeId", "data-v-c6581a24"]]), vR = Ws({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const pR = [
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
], gR = {
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
], hR = [
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
    const Ae = await window.app.api.fetchApi(Q, ke);
    if (!Ae.ok) {
      const Qt = await Ae.json().catch(() => ({}));
      throw new Error(Qt.error || Qt.message || `Request failed: ${Ae.status}`);
    }
    const lt = await Ae.text();
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
  async function $(Q, ke = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ke })
    });
  }
  async function T() {
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
  async function D(Q, ke) {
    const Ae = { target_env: Q };
    return ke && (Ae.workspace_path = ke), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ae)
    });
  }
  async function E() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function I(Q) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function G() {
    return o("/v2/workspace/environments/create_status");
  }
  async function K(Q = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Q}`);
  }
  async function F(Q) {
    return o(`/v2/workspace/environments/${Q}`, {
      method: "DELETE"
    });
  }
  async function P(Q = !1) {
    try {
      return o(Q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ke = await n(Q), Ae = [];
      return ke.workflows.new.forEach((lt) => {
        Ae.push({ name: lt, status: "new", missing_nodes: 0, missing_models: 0, path: lt });
      }), ke.workflows.modified.forEach((lt) => {
        Ae.push({ name: lt, status: "modified", missing_nodes: 0, missing_models: 0, path: lt });
      }), ke.workflows.synced.forEach((lt) => {
        Ae.push({ name: lt, status: "synced", missing_nodes: 0, missing_models: 0, path: lt });
      }), Ae;
    }
  }
  async function S(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/details`);
  }
  async function L(Q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/resolve`, {
      method: "POST"
    });
  }
  async function te(Q, ke, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ke, install_models: Ae })
    });
  }
  async function B(Q, ke, Ae) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ke, importance: Ae })
    });
  }
  async function A() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function W() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function X(Q) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Q)}`);
  }
  async function U(Q) {
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
  async function _e(Q) {
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
  async function De() {
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
    const Ae = new URLSearchParams({ query: Q, limit: String(ke) });
    return o(`/v2/workspace/huggingface/search?${Ae}`);
  }
  async function ce(Q) {
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
  async function ue(Q, ke) {
    const Ae = ke ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ke)}` : "/v2/comfygit/config";
    return o(Ae, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Q)
    });
  }
  async function Ie(Q, ke) {
    try {
      const Ae = new URLSearchParams();
      return Q && Ae.append("level", Q), ke && Ae.append("lines", ke.toString()), o(`/v2/comfygit/debug/logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function Pe(Q, ke) {
    try {
      const Ae = new URLSearchParams();
      return Q && Ae.append("level", Q), ke && Ae.append("lines", ke.toString()), o(`/v2/workspace/debug/logs?${Ae}`);
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
  async function R(Q, ke) {
    try {
      const Ae = new URLSearchParams();
      return Q && Ae.append("level", Q), ke && Ae.append("lines", ke.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ae}`);
    } catch {
      return [];
    }
  }
  async function z() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function q(Q) {
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
  async function re(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/track-dev`, {
      method: "POST"
    });
  }
  async function $e(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/install`, {
      method: "POST"
    });
  }
  async function ie(Q) {
    var Ne, Qt, To, Po;
    const ke = Sr(), Ae = ((Qt = (Ne = window.app) == null ? void 0 : Ne.api) == null ? void 0 : Qt.clientId) ?? ((Po = (To = window.app) == null ? void 0 : To.api) == null ? void 0 : Po.initialClientId) ?? "comfygit-panel", lt = {
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
      client_id: Ae
    };
    return await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lt)
    }), console.log("[ComfyGit] Task queued with ui_id:", ke, "for package:", Q.id), o("/v2/manager/queue/start").catch((tc) => {
      console.error("[ComfyGit] Queue start failed:", tc);
    }), { ui_id: ke };
  }
  async function we(Q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Q)}/update`, {
      method: "POST"
    });
  }
  async function ge(Q) {
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
  async function Se(Q, ke) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Q, url: ke })
    });
  }
  async function ee(Q) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "DELETE"
    });
  }
  async function Y(Q, ke, Ae) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ke, push_url: Ae })
    });
  }
  async function Me(Q, ke) {
    const Ae = {};
    return ke && (Ae["X-Git-Auth-Token"] = ke), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/fetch`, {
      method: "POST",
      headers: Ae
    });
  }
  async function Ce(Q) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/status`);
    } catch {
      return null;
    }
  }
  async function he(Q = "skip", ke = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Q,
        remove_extra_nodes: ke
      })
    });
  }
  async function j(Q, ke) {
    const Ae = ke ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull-preview`;
    return o(Ae);
  }
  async function V(Q, ke = {}) {
    const Ae = { "Content-Type": "application/json" };
    return ke.authToken && (Ae["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/pull`, {
      method: "POST",
      headers: Ae,
      body: JSON.stringify({
        model_strategy: ke.modelStrategy || "skip",
        force: ke.force || !1,
        resolutions: ke.resolutions
      })
    });
  }
  async function me(Q, ke) {
    const Ae = ke ? `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(Q)}/push-preview`;
    return o(Ae);
  }
  async function Ve(Q, ke = {}) {
    const Ae = { "Content-Type": "application/json" };
    return ke.authToken && (Ae["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Q)}/push`, {
      method: "POST",
      headers: Ae,
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
  async function It(Q) {
    const ke = {
      success: 0,
      failed: []
    };
    for (const Ae of Q)
      try {
        await L(Ae), ke.success++;
      } catch (lt) {
        ke.failed.push({
          name: Ae,
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
    const Ae = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ke
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ae.ok) {
      const Ne = await Ae.json().catch(() => ({}));
      throw new Error(Ne.error || `Preview failed: ${Ae.status}`);
    }
    return Ae.json();
  }
  async function pt(Q) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Q)}`
    );
  }
  async function qt(Q, ke, Ae, lt) {
    var To;
    const Ne = new FormData();
    if (Ne.append("file", Q), Ne.append("name", ke), Ne.append("model_strategy", Ae), Ne.append("torch_backend", lt), !((To = window.app) != null && To.api))
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
  async function is(Q, ke, Ae, lt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Q,
        name: ke,
        model_strategy: Ae,
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
  async function Oe(Q) {
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
  async function J(Q) {
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
    deleteBranch: $,
    // Environment Management
    getEnvironments: T,
    switchEnvironment: D,
    getSwitchProgress: E,
    createEnvironment: I,
    getCreateProgress: G,
    getComfyUIReleases: K,
    deleteEnvironment: F,
    // Workflow Management
    getWorkflows: P,
    getWorkflowDetails: S,
    resolveWorkflow: L,
    installWorkflowDeps: te,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: A,
    getWorkspaceModels: W,
    getModelDetails: X,
    openFileLocation: U,
    addModelSource: ae,
    removeModelSource: Z,
    deleteModel: _e,
    downloadModel: be,
    scanWorkspaceModels: De,
    getModelsDirectory: ze,
    setModelsDirectory: Ue,
    getHuggingFaceRepoInfo: Ye,
    getModelsSubdirectories: ve,
    searchHuggingFaceRepos: oe,
    // Settings
    getConfig: ce,
    updateConfig: ue,
    // Debug/Logs
    getEnvironmentLogs: Ie,
    getWorkspaceLogs: Pe,
    getEnvironmentLogPath: Fe,
    getWorkspaceLogPath: O,
    getOrchestratorLogs: R,
    getOrchestratorLogPath: z,
    openFile: q,
    // Node Management
    getNodes: ne,
    trackNodeAsDev: re,
    installNode: $e,
    queueNodeInstall: ie,
    updateNode: we,
    uninstallNode: ge,
    // Git Remotes
    getRemotes: Re,
    addRemote: Se,
    removeRemote: ee,
    updateRemoteUrl: Y,
    fetchRemote: Me,
    getRemoteSyncStatus: Ce,
    // Push/Pull
    getPullPreview: j,
    pullFromRemote: V,
    getPushPreview: me,
    pushToRemote: Ve,
    validateMerge: Ze,
    // Environment Sync
    syncEnvironmentManually: he,
    // Workflow Repair
    repairWorkflowModels: It,
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
    startRunPodPod: Oe,
    getDeploymentStatus: ks,
    exportDeployPackage: cs,
    getStoredRunPodKey: lo,
    clearRunPodKey: io,
    // Custom Worker Operations
    getCustomWorkers: Hs,
    addCustomWorker: le,
    removeCustomWorker: J,
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
    }), (c, u) => (a(), M(kt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ee(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
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
}), ut = /* @__PURE__ */ pe(Pv, [["__scopeId", "data-v-8dab1081"]]), Rv = ["type", "disabled"], Mv = {
  key: 0,
  class: "spinner"
}, Dv = /* @__PURE__ */ fe({
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
      e.loading ? (a(), r("span", Mv)) : y("", !0),
      Ke(s.$slots, "default", {}, void 0)
    ], 10, Rv));
  }
}), Te = /* @__PURE__ */ pe(Dv, [["__scopeId", "data-v-f3452606"]]), Lv = { class: "commit-list" }, Av = /* @__PURE__ */ fe({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", Lv, [
      Ke(s.$slots, "default", {}, void 0)
    ]));
  }
}), Ir = /* @__PURE__ */ pe(Av, [["__scopeId", "data-v-8c5ee761"]]), Ov = { class: "commit-hash" }, Nv = /* @__PURE__ */ fe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", Ov, f(o.value), 1));
  }
}), Er = /* @__PURE__ */ pe(Nv, [["__scopeId", "data-v-7c333cc6"]]), Uv = { class: "commit-message" }, zv = { class: "commit-date" }, Fv = /* @__PURE__ */ fe({
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
}, Yv = /* @__PURE__ */ fe({
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
    }), (c, u) => (a(), M(ut, {
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
          i.value ? (a(), r("span", jv, "Loading...")) : (a(), r(H, { key: 1 }, [
            t("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), r("span", Hv, "(showing first " + f(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        i.value ? (a(), r("div", Kv, "Loading commit history...")) : n.value.length === 0 ? (a(), r("div", qv, " No commits found on this branch ")) : (a(), M(Ir, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), r(H, null, ye(n.value, (d) => (a(), M(Tr, {
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
        e.isCurrent ? y("", !0) : (a(), M(de, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: h(() => [...u[6] || (u[6] = [
            b(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (a(), M(Te, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            b(" Switch to Branch ", -1)
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
}, Xv = /* @__PURE__ */ fe({
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
    return (v, g) => (a(), M(Dt, null, {
      header: h(() => [
        x(Lt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), M(de, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: g[0] || (g[0] = (w) => n.value = !0)
            }, {
              default: h(() => [...g[2] || (g[2] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), M(gv, {
          key: 0,
          onCreate: i,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(as, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", Qv, [
          (a(!0), r(H, null, ye(e.branches, (w) => (a(), M(bv, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), M(de, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: rt((p) => o("switch", w.name), ["stop"])
              }, {
                default: h(() => [...g[3] || (g[3] = [
                  b(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (a(), M(Jv, {
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
}), Zv = /* @__PURE__ */ pe(Xv, [["__scopeId", "data-v-eefdcb00"]]), ep = /* @__PURE__ */ fe({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = N(() => `HISTORY (${s.currentRef || "detached"})`);
    return (n, l) => (a(), M(Dt, null, {
      header: h(() => [
        x(Lt, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), M(as, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(Ir, { key: 1 }, {
          default: h(() => [
            (a(!0), r(H, null, ye(e.commits, (i) => (a(), M(Tr, {
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
}, np = /* @__PURE__ */ fe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), M(Xa(`h${e.level}`), {
      class: Ee(["base-title", e.variant])
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
}, cp = /* @__PURE__ */ fe({
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
        e.placeholder ? (a(), r("option", lp, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(H, null, ye(e.options, (i) => (a(), r("option", {
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
}, pp = /* @__PURE__ */ fe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), M(kt, { to: "body" }, [
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
}, Lp = { class: "node-name" }, Ap = {
  key: 0,
  class: "node-version"
}, Op = /* @__PURE__ */ fe({
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
    function C(P) {
      switch (P) {
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
    function $(P) {
      switch (P) {
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
    function T(P) {
      if (!P.loaded_by || P.loaded_by.length === 0) return [];
      const S = P.hash || P.filename;
      return p.value.has(S) ? P.loaded_by : P.loaded_by.slice(0, 3);
    }
    function D(P) {
      return p.value.has(P);
    }
    function E(P) {
      p.value.has(P) ? p.value.delete(P) : p.value.add(P), p.value = new Set(p.value);
    }
    async function I() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function G(P, S) {
      g.value[P] = S, v.value = !0;
    }
    async function K(P) {
      try {
        await c(P);
      } catch (S) {
        m.value = S instanceof Error ? S.message : "Failed to open file location";
      }
    }
    async function F() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [P, S] of Object.entries(g.value))
          await i(o.workflowName, P, S);
        n("refresh"), n("close");
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Qe(I), (P, S) => (a(), r(H, null, [
      x(ut, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: S[4] || (S[4] = (L) => n("close"))
      }, {
        body: h(() => [
          u.value ? (a(), r(H, { key: 0 }, [
            t("section", gp, [
              x(qo, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), r("div", hp, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(H, null, ye(u.value.models, (L) => {
                var te;
                return a(), r("div", {
                  key: L.hash || L.filename,
                  class: "model-card"
                }, [
                  t("div", yp, [
                    S[6] || (S[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", wp, f(L.filename), 1)
                  ]),
                  t("div", _p, [
                    t("div", kp, [
                      S[7] || (S[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ee(["value", C(L.status)])
                      }, f($(L.status)), 3)
                    ]),
                    t("div", bp, [
                      t("span", $p, [
                        S[8] || (S[8] = b(" Importance: ", -1)),
                        x(xr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: S[0] || (S[0] = (B) => w.value = !0)
                        })
                      ]),
                      x(up, {
                        "model-value": g.value[L.filename] || L.importance,
                        options: _,
                        "onUpdate:modelValue": (B) => G(L.filename, B)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    L.loaded_by && L.loaded_by.length > 0 ? (a(), r("div", Cp, [
                      S[9] || (S[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", xp, [
                        (a(!0), r(H, null, ye(T(L), (B, A) => (a(), r("div", {
                          key: `${B.node_id}-${A}`,
                          class: "node-reference"
                        }, f(B.node_type) + " (Node #" + f(B.node_id) + ") ", 1))), 128)),
                        L.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (B) => E(L.hash || L.filename)
                        }, f(D(L.hash || L.filename) ? "▼ Show less" : `▶ View all (${L.loaded_by.length})`), 9, Sp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    L.size_mb ? (a(), r("div", Ip, [
                      S[10] || (S[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Ep, f(L.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    L.has_category_mismatch ? (a(), r("div", Tp, [
                      S[13] || (S[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Pp, [
                        S[11] || (S[11] = b(" In ", -1)),
                        t("code", null, f(L.actual_category) + "/", 1),
                        S[12] || (S[12] = b(" but loader needs ", -1)),
                        t("code", null, f((te = L.expected_categories) == null ? void 0 : te[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  L.status !== "available" ? (a(), r("div", Rp, [
                    L.status === "downloadable" ? (a(), M(Te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: S[1] || (S[1] = (B) => n("resolve"))
                    }, {
                      default: h(() => [...S[14] || (S[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : L.status === "category_mismatch" && L.file_path ? (a(), M(Te, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => K(L.file_path)
                    }, {
                      default: h(() => [...S[15] || (S[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : L.status !== "path_mismatch" ? (a(), M(Te, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: S[2] || (S[2] = (B) => n("resolve"))
                    }, {
                      default: h(() => [...S[16] || (S[16] = [
                        b(" Resolve ", -1)
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
                  b("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), r("div", Dp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(H, null, ye(u.value.nodes, (L) => (a(), r("div", {
                key: L.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Ee(["node-status", L.status === "installed" ? "installed" : "missing"])
                }, f(L.status === "installed" ? "✓" : "✕"), 3),
                t("span", Lp, f(L.name), 1),
                L.version ? (a(), r("span", Ap, "v" + f(L.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          x(Te, {
            variant: "secondary",
            onClick: S[3] || (S[3] = (L) => n("close"))
          }, {
            default: h(() => [...S[17] || (S[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Te, {
            key: 0,
            variant: "primary",
            onClick: F
          }, {
            default: h(() => [...S[18] || (S[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      x(ls, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: S[5] || (S[5] = (L) => w.value = !1)
      }, {
        content: h(() => [...S[19] || (S[19] = [
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
}), Np = /* @__PURE__ */ pe(Op, [["__scopeId", "data-v-668728e6"]]), Je = Ws({
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
  function e($) {
    for (const T of $) {
      if (Je.items.some(
        (I) => I.url === T.url && I.targetPath === T.targetPath && ["queued", "downloading", "paused", "completed"].includes(I.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${T.filename}`);
        continue;
      }
      const E = {
        id: Pr(),
        workflow: T.workflow,
        filename: T.filename,
        url: T.url,
        targetPath: T.targetPath,
        size: T.size || 0,
        type: T.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Je.items.push(E);
    }
    Je.status === "idle" && vo();
  }
  async function s($) {
    const T = pa($);
    if (T) {
      if (T.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(T.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        vs && (vs.close(), vs = null), T.status = "failed", T.error = "Cancelled by user", Je.status = "idle", vo();
      } else if (T.status === "queued") {
        const D = Je.items.findIndex((E) => E.id === $);
        D >= 0 && Je.items.splice(D, 1);
      }
    }
  }
  function o($) {
    const T = pa($);
    !T || T.status !== "failed" || (T.status = "queued", T.error = void 0, T.progress = 0, T.downloaded = 0, Je.status === "idle" && vo());
  }
  function n($) {
    const T = pa($);
    !T || T.status !== "paused" || (T.status = "queued", Je.status === "idle" && vo());
  }
  function l() {
    const $ = Je.items.filter((T) => T.status === "paused");
    for (const T of $)
      T.status = "queued";
    Je.status === "idle" && vo();
  }
  function i($) {
    const T = Je.items.findIndex((D) => D.id === $);
    T >= 0 && ["completed", "failed", "paused"].includes(Je.items[T].status) && Je.items.splice(T, 1);
  }
  function c() {
    Je.items = Je.items.filter(($) => $.status !== "completed");
  }
  function u() {
    Je.items = Je.items.filter(($) => $.status !== "failed");
  }
  const d = N(
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
  ), C = N(
    () => Je.items.some(($) => $.status === "paused")
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
  async function c(D, E) {
    var G;
    if (!((G = window.app) != null && G.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(D, E);
    if (!I.ok) {
      const K = await I.json().catch(() => ({})), F = K.error || K.message || `Request failed: ${I.status}`;
      throw new Error(F);
    }
    return I.json();
  }
  async function u(D) {
    l.value = !0, i.value = null;
    try {
      let E;
      return mo() || (E = await c(
        `/v2/comfygit/workflow/${D}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = E, E;
    } catch (E) {
      const I = E instanceof Error ? E.message : "Unknown error occurred";
      throw i.value = I, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(D, E, I, G) {
    l.value = !0, i.value = null;
    try {
      let K;
      if (!mo()) {
        const F = Object.fromEntries(E), P = Object.fromEntries(I), S = G ? Array.from(G) : [];
        K = await c(
          `/v2/comfygit/workflow/${D}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: P,
              skipped_packages: S
            })
          }
        );
      }
      return s.value = K, K;
    } catch (K) {
      const F = K instanceof Error ? K.message : "Unknown error occurred";
      throw i.value = F, K;
    } finally {
      l.value = !1;
    }
  }
  async function m(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let I;
      return mo() || (I = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), o.value = I.results, I.results;
    } catch (I) {
      const G = I instanceof Error ? I.message : "Unknown error occurred";
      throw i.value = G, I;
    } finally {
      l.value = !1;
    }
  }
  async function v(D, E = 10) {
    l.value = !0, i.value = null;
    try {
      let I;
      return mo() || (I = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: E })
        }
      )), n.value = I.results, I.results;
    } catch (I) {
      const G = I instanceof Error ? I.message : "Unknown error occurred";
      throw i.value = G, I;
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
  async function p(D) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return mo(), await _(D);
    } catch (E) {
      const I = E instanceof Error ? E.message : "Failed to install nodes";
      throw g.installError = I, E;
    }
  }
  async function _(D) {
    var I;
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
      const G = new Map(((I = E.failed) == null ? void 0 : I.map((K) => [K.node_id, K.error])) || []);
      for (let K = 0; K < g.nodesToInstall.length; K++) {
        const F = g.nodesToInstall[K], P = G.get(F);
        g.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !P,
          error: P
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function C(D, E, I) {
    w(), g.phase = "resolving", i.value = null;
    const G = Object.fromEntries(E), K = Object.fromEntries(I);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: G,
          model_choices: K
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const P = F.body.getReader(), S = new TextDecoder();
      let L = "";
      for (; ; ) {
        const { done: te, value: B } = await P.read();
        if (te) break;
        L += S.decode(B, { stream: !0 });
        const A = L.split(`

`);
        L = A.pop() || "";
        for (const W of A) {
          if (!W.trim()) continue;
          const X = W.split(`
`);
          let U = "", ae = "";
          for (const Z of X)
            Z.startsWith("event: ") ? U = Z.slice(7) : Z.startsWith("data: ") && (ae = Z.slice(6));
          if (ae)
            try {
              const Z = JSON.parse(ae);
              $(U, Z);
            } catch (Z) {
              console.warn("Failed to parse SSE event:", Z);
            }
        }
      }
    } catch (F) {
      const P = F instanceof Error ? F.message : "Unknown error occurred";
      throw i.value = P, g.error = P, g.phase = "error", F;
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
  function T(D, E) {
    const { addToQueue: I } = xo(), G = E.filter((K) => K.url && K.target_path).map((K) => ({
      workflow: D,
      filename: K.filename,
      url: K.url,
      targetPath: K.target_path,
      size: K.size || 0,
      type: "model"
    }));
    return G.length > 0 && I(G), G.length;
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
    queueModelDownloads: T
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
}, Kp = { class: "stepper-content" }, qp = /* @__PURE__ */ fe({
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
        (a(!0), r(H, null, ye(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Ee(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: u(g.id)
          }]),
          onClick: (p) => d(g.id)
        }, [
          t("div", {
            class: Ee(["step-indicator", c(g.id)])
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
}), Yp = /* @__PURE__ */ pe(qp, [["__scopeId", "data-v-2a7b3af8"]]), Jp = /* @__PURE__ */ fe({
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
}, Cg = { class: "action-buttons" }, xg = /* @__PURE__ */ fe({
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
      class: Ee(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Qp, [
        t("span", Xp, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ee(["status-badge", c.value])
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
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", tg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", sg, [
            (a(!0), r(H, null, ye(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Ee(["option-card", { selected: e.selectedOptionIndex === g }]),
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
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
        ])) : (a(), r("div", fg, [
          e.isSearching ? (a(), r("div", mg, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(H, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", vg, [
              (a(!0), r(H, null, ye(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
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
                  b(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
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
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
}), Sg = /* @__PURE__ */ pe(xg, [["__scopeId", "data-v-c2997d1d"]]), Ig = { class: "item-navigator" }, Eg = { class: "nav-item-info" }, Tg = ["title"], Pg = { class: "nav-controls" }, Rg = { class: "nav-arrows" }, Mg = ["disabled"], Dg = ["disabled"], Lg = { class: "nav-position" }, Ag = /* @__PURE__ */ fe({
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
}), Mr = /* @__PURE__ */ pe(Ag, [["__scopeId", "data-v-74af7920"]]), Og = ["type", "value", "placeholder", "disabled"], Ng = {
  key: 0,
  class: "base-input-error"
}, Ug = /* @__PURE__ */ fe({
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
          o[1] || (o[1] = Ht((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Ht((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Og),
      e.error ? (a(), r("span", Ng, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), St = /* @__PURE__ */ pe(Ug, [["__scopeId", "data-v-9ba02cdc"]]), zg = { class: "node-resolution-step" }, Fg = {
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
}, fh = { class: "node-manual-entry-modal" }, mh = { class: "node-modal-body" }, vh = { class: "node-modal-actions" }, ph = /* @__PURE__ */ fe({
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
    const $ = N(() => o.nodes[i.value]), T = N(() => o.nodes.filter((oe) => o.nodeChoices.has(oe.node_type)).length), D = N(() => $.value ? w.value.get($.value.node_type) || [] : []), E = N(() => $.value ? p.value.has($.value.node_type) : !1);
    ft($, async (oe) => {
      var ce;
      oe && ((ce = oe.options) != null && ce.length || w.value.has(oe.node_type) || p.value.has(oe.node_type) || o.nodeChoices.has(oe.node_type) || await I(oe.node_type));
    }, { immediate: !0 });
    async function I(oe) {
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
    const G = N(() => o.autoResolvedPackages.filter((oe) => !o.skippedPackages.has(oe.package_id)).length);
    function K(oe) {
      return o.skippedPackages.has(oe);
    }
    function F(oe) {
      n("package-skip", oe);
    }
    const P = N(() => {
      var ce;
      if (!$.value) return "not-found";
      const oe = o.nodeChoices.get($.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ce = $.value.options) != null && ce.length ? "ambiguous" : "not-found";
    }), S = N(() => {
      var ce;
      if (!$.value) return;
      const oe = o.nodeChoices.get($.value.node_type);
      if (oe)
        switch (oe.action) {
          case "install":
            return oe.package_id ? `→ ${oe.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ce = $.value.options) != null && ce.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function L(oe) {
      oe >= 0 && oe < o.nodes.length && (i.value = oe);
    }
    function te() {
      var oe;
      for (let ce = i.value + 1; ce < o.nodes.length; ce++) {
        const ue = o.nodes[ce];
        if (!((oe = o.nodeChoices) != null && oe.has(ue.node_type))) {
          L(ce);
          return;
        }
      }
    }
    function B() {
      $.value && (n("mark-optional", $.value.node_type), ht(() => te()));
    }
    function A() {
      $.value && (n("skip", $.value.node_type), ht(() => te()));
    }
    function W(oe) {
      $.value && (n("option-selected", $.value.node_type, oe), ht(() => te()));
    }
    function X() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function U() {
      $.value && (d.value = $.value.node_type, v.value = D.value, c.value = !0, ze(d.value));
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
    let be = null;
    function De() {
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
      $.value && (n("manual-entry", $.value.node_type, oe.package_id), Z(), ht(() => te()));
    }
    function Ye(oe) {
      $.value && (n("manual-entry", $.value.node_type, oe.package_id), ht(() => te()));
    }
    function ve() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), _e(), ht(() => te()));
    }
    return (oe, ce) => {
      var ue, Ie;
      return a(), r("div", zg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", Fg, [
          t("div", Bg, [
            ce[6] || (ce[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Vg, f(G.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Wg, [
            (a(!0), r(H, null, ye(e.autoResolvedPackages, (Pe) => (a(), r("div", {
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
                  onClick: (Fe) => F(Pe.package_id)
                }, f(K(Pe.package_id) ? "Include" : "Skip"), 9, Jg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Qg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(H, { key: 2 }, [
          t("div", Xg, [
            ce[7] || (ce[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Zg, f(T.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), M(Mr, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: ce[0] || (ce[0] = (Pe) => L(i.value - 1)),
            onNext: ce[1] || (ce[1] = (Pe) => L(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", eh, [
            x(Sg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((ue = $.value.options) != null && ue.length),
              options: $.value.options,
              choice: (Ie = e.nodeChoices) == null ? void 0 : Ie.get($.value.node_type),
              status: P.value,
              "status-label": S.value,
              "search-results": D.value,
              "is-searching": E.value,
              onMarkOptional: B,
              onSkip: A,
              onManualEntry: ae,
              onSearch: U,
              onOptionSelected: W,
              onClearChoice: X,
              onSearchResultSelected: Ye
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", th, [...ce[8] || (ce[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), M(kt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ce[4] || (ce[4] = rt((Pe) => _.value = !0, ["self"])),
            onMouseup: rt(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: ce[3] || (ce[3] = (Pe) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                ce[9] || (ce[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", sh, [
                x(St, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ce[2] || (ce[2] = (Pe) => d.value = Pe),
                  placeholder: "Search by node type, package name...",
                  onInput: De
                }, null, 8, ["modelValue"]),
                t("div", oh, [
                  v.value.length > 0 ? (a(), r("div", nh, [
                    (a(!0), r(H, null, ye(v.value, (Pe) => (a(), r("div", {
                      key: Pe.package_id,
                      class: "node-search-result-item",
                      onClick: (Fe) => Ue(Pe)
                    }, [
                      t("div", lh, [
                        t("code", ih, f(Pe.package_id), 1),
                        Pe.match_confidence ? (a(), M(Fn, {
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
        (a(), M(kt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: rt(_e, ["self"])
          }, [
            t("div", fh, [
              t("div", { class: "node-modal-header" }, [
                ce[10] || (ce[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: _e
                }, "✕")
              ]),
              t("div", mh, [
                x(St, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ce[5] || (ce[5] = (Pe) => m.value = Pe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", vh, [
                  x(Te, {
                    variant: "secondary",
                    onClick: _e
                  }, {
                    default: h(() => [...ce[11] || (ce[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Te, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: ve
                  }, {
                    default: h(() => [...ce[12] || (ce[12] = [
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
}), gh = /* @__PURE__ */ pe(ph, [["__scopeId", "data-v-6d7f8125"]]), hh = { class: "node-info" }, yh = { class: "node-info-text" }, wh = { class: "item-body" }, _h = {
  key: 0,
  class: "resolved-state"
}, kh = {
  key: 1,
  class: "multiple-options"
}, bh = { class: "options-list" }, $h = ["onClick"], Ch = ["name", "value", "checked", "onChange"], xh = { class: "option-content" }, Sh = { class: "option-header" }, Ih = { class: "option-filename" }, Eh = { class: "option-meta" }, Th = { class: "option-size" }, Ph = { class: "option-category" }, Rh = { class: "option-path" }, Mh = { class: "action-buttons" }, Dh = {
  key: 2,
  class: "unresolved"
}, Lh = { class: "action-buttons" }, Ah = /* @__PURE__ */ fe({
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
      class: Ee(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", hh, [
        t("span", yh, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Ee(["status-badge", i.value])
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
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", kh, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", bh, [
            (a(!0), r(H, null, ye(e.options, (v, g) => (a(), r("label", {
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
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            x(Te, {
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
}), Oh = /* @__PURE__ */ pe(Ah, [["__scopeId", "data-v-8a82fefa"]]), Nh = { class: "model-resolution-step" }, Uh = { class: "step-header" }, zh = { class: "step-info" }, Fh = { class: "step-title" }, Bh = { class: "step-description" }, Vh = { class: "stat-badge" }, Wh = {
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
}, oy = { class: "model-download-url-modal" }, ny = { class: "model-modal-body" }, ay = { class: "model-input-group" }, ly = { class: "model-input-group" }, iy = { class: "model-modal-actions" }, ry = /* @__PURE__ */ fe({
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
      var _e;
      return Z && ((_e = o[Z]) == null ? void 0 : _e[0]) || null;
    }
    const l = e, i = s, c = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[c.value]), C = N(() => l.models.some((Z) => Z.is_download_intent)), $ = N(() => l.models.filter(
      (Z) => l.modelChoices.has(Z.filename) || Z.is_download_intent
    ).length), T = N(() => {
      var _e;
      if (!_.value) return "";
      const Z = n((_e = _.value.reference) == null ? void 0 : _e.node_type);
      return Z ? `${Z}/${_.value.filename}` : "";
    }), D = N(() => {
      var _e;
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
      return _.value.is_download_intent ? "download" : (_e = _.value.options) != null && _e.length ? "ambiguous" : "not-found";
    }), E = N(() => {
      var _e, be;
      if (!_.value) return;
      const Z = l.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "Pending Download" : (be = _.value.options) != null && be.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function I(Z) {
      Z >= 0 && Z < l.models.length && (c.value = Z);
    }
    function G() {
      var Z;
      for (let _e = c.value + 1; _e < l.models.length; _e++) {
        const be = l.models[_e];
        if (!be.is_download_intent && !((Z = l.modelChoices) != null && Z.has(be.filename))) {
          I(_e);
          return;
        }
      }
    }
    function K() {
      _.value && (i("mark-optional", _.value.filename), ht(() => G()));
    }
    function F() {
      _.value && (i("skip", _.value.filename), ht(() => G()));
    }
    function P(Z) {
      _.value && (i("option-selected", _.value.filename, Z), ht(() => G()));
    }
    function S() {
      _.value && i("clear-choice", _.value.filename);
    }
    function L() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function te() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || T.value, d.value = !0);
    }
    function B() {
      u.value = !1, m.value = "", w.value = [];
    }
    function A() {
      d.value = !1, v.value = "", g.value = "";
    }
    function W() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function X(Z) {
      _.value && (B(), ht(() => G()));
    }
    function U() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), A(), ht(() => G()));
    }
    function ae(Z) {
      if (!Z) return "Unknown";
      const _e = Z / (1024 * 1024 * 1024);
      return _e >= 1 ? `${_e.toFixed(2)} GB` : `${(Z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (Z, _e) => {
      var be, De, ze;
      return a(), r("div", Nh, [
        t("div", Uh, [
          t("div", zh, [
            t("h3", Fh, f(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Bh, f(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Vh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), M(Mr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: _e[0] || (_e[0] = (Ue) => I(c.value - 1)),
          onNext: _e[1] || (_e[1] = (Ue) => I(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", Wh, [
          x(Oh, {
            filename: _.value.filename,
            "node-type": ((be = _.value.reference) == null ? void 0 : be.node_type) || "Unknown",
            "has-multiple-options": !!((De = _.value.options) != null && De.length),
            options: _.value.options,
            choice: (ze = e.modelChoices) == null ? void 0 : ze.get(_.value.filename),
            status: D.value,
            "status-label": E.value,
            onMarkOptional: K,
            onSkip: F,
            onDownloadUrl: te,
            onSearch: L,
            onOptionSelected: P,
            onClearChoice: S
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", Gh, [..._e[5] || (_e[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(kt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(B, ["self"])
          }, [
            t("div", jh, [
              t("div", { class: "model-modal-header" }, [
                _e[6] || (_e[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              t("div", Hh, [
                x(St, {
                  modelValue: m.value,
                  "onUpdate:modelValue": _e[2] || (_e[2] = (Ue) => m.value = Ue),
                  placeholder: "Search by filename, category...",
                  onInput: W
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", Kh, [
                  (a(!0), r(H, null, ye(w.value, (Ue) => (a(), r("div", {
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
        (a(), M(kt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(A, ["self"])
          }, [
            t("div", oy, [
              t("div", { class: "model-modal-header" }, [
                _e[7] || (_e[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              t("div", ny, [
                t("div", ay, [
                  _e[8] || (_e[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  x(St, {
                    modelValue: v.value,
                    "onUpdate:modelValue": _e[3] || (_e[3] = (Ue) => v.value = Ue),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", ly, [
                  _e[9] || (_e[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  x(St, {
                    modelValue: g.value,
                    "onUpdate:modelValue": _e[4] || (_e[4] = (Ue) => g.value = Ue),
                    placeholder: T.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", iy, [
                  x(Te, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: h(() => [..._e[10] || (_e[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  x(Te, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: U
                  }, {
                    default: h(() => [..._e[11] || (_e[11] = [
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
}, Dy = { class: "failed-node-id" }, Ly = { class: "failed-error" }, Ay = {
  key: 4,
  class: "summary-item success"
}, Oy = {
  key: 5,
  class: "restart-prompt"
}, Ny = {
  key: 3,
  class: "phase-content error"
}, Uy = { class: "error-message" }, zy = /* @__PURE__ */ fe({
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
            (a(!0), r(H, null, ye(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Ee(["install-item", i(p, _)])
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
              class: Ee(["phase-icon", l.value ? "warning" : "success"])
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
              (a(!0), r(H, null, ye(n.value, (p) => (a(), r("div", {
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
            l.value ? y("", !0) : (a(), r("div", Ay, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", Oy, [
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
}, P1 = { class: "review-summary" }, R1 = { class: "review-stats" }, M1 = { class: "review-stat" }, D1 = { class: "stat-value" }, L1 = { class: "review-stat" }, A1 = { class: "stat-value" }, O1 = { class: "review-stat" }, N1 = { class: "stat-value" }, U1 = { class: "review-stat" }, z1 = { class: "stat-value" }, F1 = {
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
}, $0 = /* @__PURE__ */ fe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: m } = Rr(), { loadPendingDownloads: v } = xo(), { openFileLocation: g } = tt(), w = k(null), p = k(!1), _ = k(!1), C = k(null), $ = k("analysis"), T = k([]), D = k(/* @__PURE__ */ new Map()), E = k(/* @__PURE__ */ new Map()), I = k(/* @__PURE__ */ new Set()), G = N(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (F.value || L.value) && j.push({ id: "nodes", label: "Nodes" }), P.value && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), $.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), K = N(() => w.value ? w.value.stats.needs_user_input : !1), F = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), P = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), S = N(() => w.value ? w.value.stats.download_intents > 0 : !1), L = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), te = N(() => w.value ? w.value.nodes.resolved.length : 0), B = N(() => w.value ? w.value.models.resolved.filter((j) => j.has_category_mismatch) : []), A = N(() => B.value.length > 0), W = N(() => F.value || L.value ? "nodes" : P.value ? "models" : "review"), X = N(() => {
      if (!w.value) return [];
      const j = w.value.nodes.resolved.filter((me) => !me.is_installed), V = /* @__PURE__ */ new Set();
      return j.filter((me) => V.has(me.package.package_id) ? !1 : (V.add(me.package.package_id), !0));
    }), U = N(() => {
      if (!w.value) return [];
      const j = w.value.nodes.resolved.filter((me) => !me.is_installed), V = /* @__PURE__ */ new Map();
      for (const me of j) {
        const Ve = V.get(me.package.package_id);
        Ve ? Ve.node_types_count++ : V.set(me.package.package_id, {
          package_id: me.package.package_id,
          title: me.package.title,
          node_types_count: 1
        });
      }
      return Array.from(V.values());
    }), ae = N(() => X.value.filter((j) => !I.value.has(j.package.package_id))), Z = N(() => w.value ? w.value.models.resolved.filter(
      (j) => j.match_type === "download_intent" || j.match_type === "property_download_intent"
    ).map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), _e = N(() => {
      if (!w.value) return [];
      const j = w.value.nodes.unresolved.map((me) => ({
        node_type: me.reference.node_type,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), V = w.value.nodes.ambiguous.map((me) => ({
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
      return [...j, ...V];
    }), be = N(() => {
      if (!w.value) return [];
      const j = w.value.models.unresolved.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), V = w.value.models.ambiguous.map((me) => ({
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
      return [...j, ...V];
    }), De = N(() => {
      const j = be.value, V = Z.value.map((me) => ({
        filename: me.filename,
        reference: me.reference,
        is_download_intent: !0,
        resolved_model: me.resolved_model,
        download_source: me.download_source,
        target_path: me.target_path,
        options: void 0
      }));
      return [...j, ...V];
    }), ze = N(() => Z.value.filter((j) => {
      const V = E.value.get(j.filename);
      return V ? V.action === "download" : !0;
    }).map((j) => ({
      filename: j.filename,
      url: j.download_source,
      target_path: j.target_path
    })));
    function Ue(j, V = 50) {
      return j.length <= V ? j : j.slice(0, V - 3) + "...";
    }
    const Ye = N(() => {
      let j = ae.value.length;
      for (const V of D.value.values())
        V.action === "install" && j++;
      for (const V of E.value.values())
        V.action === "select" && j++;
      return j;
    }), ve = N(() => {
      let j = 0;
      for (const V of E.value.values())
        V.action === "download" && j++;
      for (const V of Z.value)
        E.value.get(V.filename) || j++;
      return j;
    }), oe = N(() => {
      let j = 0;
      for (const V of D.value.values())
        V.action === "optional" && j++;
      for (const V of E.value.values())
        V.action === "optional" && j++;
      return j;
    }), ce = N(() => {
      let j = I.value.size;
      for (const V of D.value.values())
        V.action === "skip" && j++;
      for (const V of E.value.values())
        V.action === "skip" && j++;
      for (const V of _e.value)
        D.value.has(V.node_type) || j++;
      for (const V of be.value)
        E.value.has(V.filename) || j++;
      return j;
    }), ue = N(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, F.value) {
        const V = _e.value.length, me = _e.value.filter(
          (Ve) => D.value.has(Ve.node_type)
        ).length;
        j.nodes = { resolved: me, total: V };
      }
      if (P.value) {
        const V = De.value.length, me = De.value.filter(
          (Ve) => E.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        j.models = { resolved: me, total: V };
      }
      if (j.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const V = d.totalFiles || 1, me = d.completedFiles.length;
        j.applying = { resolved: me, total: V };
      }
      return j;
    });
    function Ie(j) {
      $.value = j;
    }
    function Pe() {
      const j = G.value.findIndex((V) => V.id === $.value);
      j > 0 && ($.value = G.value[j - 1].id);
    }
    function Fe() {
      const j = G.value.findIndex((V) => V.id === $.value);
      j < G.value.length - 1 && ($.value = G.value[j + 1].id);
    }
    async function O() {
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
      T.value.includes("analysis") || T.value.push("analysis"), F.value || L.value ? $.value = "nodes" : P.value ? $.value = "models" : $.value = "review";
    }
    function z(j) {
      D.value.set(j, { action: "optional" });
    }
    function q(j) {
      D.value.set(j, { action: "skip" });
    }
    function ne(j, V) {
      var Ve;
      const me = _e.value.find((Ze) => Ze.node_type === j);
      (Ve = me == null ? void 0 : me.options) != null && Ve[V] && D.value.set(j, {
        action: "install",
        package_id: me.options[V].package_id
      });
    }
    function re(j, V) {
      D.value.set(j, {
        action: "install",
        package_id: V
      });
    }
    function $e(j) {
      D.value.delete(j);
    }
    function ie(j) {
      I.value.has(j) ? I.value.delete(j) : I.value.add(j);
    }
    function we(j) {
      E.value.set(j, { action: "optional" });
    }
    function ge(j) {
      E.value.set(j, { action: "skip" });
    }
    function Re(j, V) {
      var Ve;
      const me = be.value.find((Ze) => Ze.filename === j);
      (Ve = me == null ? void 0 : me.options) != null && Ve[V] && E.value.set(j, {
        action: "select",
        selected_model: me.options[V].model
      });
    }
    function Se(j, V, me) {
      E.value.set(j, {
        action: "download",
        url: V,
        target_path: me
      });
    }
    function ee(j) {
      E.value.delete(j);
    }
    async function Y(j) {
      try {
        await g(j);
      } catch (V) {
        C.value = V instanceof Error ? V.message : "Failed to open file location";
      }
    }
    async function Me() {
      var j;
      _.value = !0, C.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const V = await i(o.workflowName, D.value, E.value, I.value);
        V.models_to_download && V.models_to_download.length > 0 && u(o.workflowName, V.models_to_download);
        const me = [
          ...V.nodes_to_install || [],
          ...ae.value.map((Ze) => Ze.package.package_id)
        ];
        d.nodesToInstall = [...new Set(me)], d.nodesToInstall.length > 0 && await c(o.workflowName), d.phase = "complete", await v();
        const Ve = d.installError || ((j = d.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Ze) => !Ze.success));
        !d.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (V) {
        C.value = V instanceof Error ? V.message : "Failed to apply resolution", d.error = C.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function Ce() {
      n("refresh"), n("restart"), n("close");
    }
    async function he() {
      var V;
      const j = ((V = d.nodeInstallProgress) == null ? void 0 : V.completedNodes.filter((me) => !me.success).map((me) => me.node_id)) || [];
      if (j.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, d.nodesToInstall = j, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (me) {
          d.error = me instanceof Error ? me.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(O), (j, V) => (a(), M(ut, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: C.value || void 0,
      "fixed-height": !0,
      onClose: V[1] || (V[1] = (me) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", By, [...V[2] || (V[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", Vy, [
          x(Yp, {
            steps: G.value,
            "current-step": $.value,
            "completed-steps": T.value,
            "step-stats": ue.value,
            onStepChange: Ie
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", Wy, [
            t("div", Gy, [
              t("div", jy, [
                V[3] || (V[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Hy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Ky, [
                t("div", qy, [
                  V[12] || (V[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Yy, [
                    te.value > 0 ? (a(), r("div", Jy, [
                      V[4] || (V[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Qy, f(te.value), 1),
                      V[5] || (V[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Xy, [
                      V[6] || (V[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Zy, f(w.value.stats.packages_needing_installation), 1),
                      V[7] || (V[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", e1, [
                      V[8] || (V[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", t1, f(w.value.nodes.ambiguous.length), 1),
                      V[9] || (V[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", s1, [
                      V[10] || (V[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", o1, f(w.value.nodes.unresolved.length), 1),
                      V[11] || (V[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", n1, [
                  V[23] || (V[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", a1, [
                    t("div", l1, [
                      V[13] || (V[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", i1, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      V[14] || (V[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", r1, [
                      V[15] || (V[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", c1, f(w.value.stats.download_intents), 1),
                      V[16] || (V[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    A.value ? (a(), r("div", u1, [
                      V[17] || (V[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", d1, f(B.value.length), 1),
                      V[18] || (V[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", f1, [
                      V[19] || (V[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", m1, f(w.value.models.ambiguous.length), 1),
                      V[20] || (V[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", v1, [
                      V[21] || (V[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", p1, f(w.value.models.unresolved.length), 1),
                      V[22] || (V[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), r("div", g1, [
                V[24] || (V[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", h1, f(_e.value.length + be.value.length) + " items need your input", 1)
              ])) : L.value ? (a(), r("div", y1, [
                V[25] || (V[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", w1, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(S.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : S.value ? (a(), r("div", _1, [
                V[26] || (V[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", k1, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : A.value ? (a(), r("div", b1, [
                V[27] || (V[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", $1, f(B.value.length) + " model" + f(B.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", C1, [...V[28] || (V[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              A.value ? (a(), r("div", x1, [
                V[31] || (V[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", S1, [
                  (a(!0), r(H, null, ye(B.value, (me) => {
                    var Ve, Ze;
                    return a(), r("div", {
                      key: me.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", I1, f(me.actual_category) + "/" + f((Ve = me.model) == null ? void 0 : Ve.filename), 1),
                      V[30] || (V[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", E1, f((Ze = me.expected_categories) == null ? void 0 : Ze[0]) + "/", 1),
                      me.file_path ? (a(), M(Te, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (It) => Y(me.file_path)
                      }, {
                        default: h(() => [...V[29] || (V[29] = [
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
          $.value === "nodes" ? (a(), M(gh, {
            key: 1,
            nodes: _e.value,
            "node-choices": D.value,
            "auto-resolved-packages": U.value,
            "skipped-packages": I.value,
            onMarkOptional: z,
            onSkip: q,
            onOptionSelected: ne,
            onManualEntry: re,
            onClearChoice: $e,
            onPackageSkip: ie
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), M(cy, {
            key: 2,
            models: De.value,
            "model-choices": E.value,
            onMarkOptional: we,
            onSkip: ge,
            onOptionSelected: Re,
            onDownloadUrl: Se,
            onClearChoice: ee
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", T1, [
            t("div", P1, [
              V[37] || (V[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", R1, [
                t("div", M1, [
                  t("span", D1, f(Ye.value), 1),
                  V[32] || (V[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", L1, [
                  t("span", A1, f(ve.value), 1),
                  V[33] || (V[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", O1, [
                  t("span", N1, f(oe.value), 1),
                  V[34] || (V[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", U1, [
                  t("span", z1, f(ce.value), 1),
                  V[35] || (V[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              U.value.length > 0 ? (a(), r("div", F1, [
                t("h4", B1, "Node Packages (" + f(U.value.length) + ")", 1),
                t("div", V1, [
                  (a(!0), r(H, null, ye(U.value, (me) => (a(), r("div", {
                    key: me.package_id,
                    class: "review-item"
                  }, [
                    t("code", W1, f(me.package_id), 1),
                    t("div", G1, [
                      I.value.has(me.package_id) ? (a(), r("span", H1, "Skipped")) : (a(), r("span", j1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              _e.value.length > 0 ? (a(), r("div", K1, [
                t("h4", q1, "Node Choices (" + f(_e.value.length) + ")", 1),
                t("div", Y1, [
                  (a(!0), r(H, null, ye(_e.value, (me) => {
                    var Ve, Ze, It, st;
                    return a(), r("div", {
                      key: me.node_type,
                      class: "review-item"
                    }, [
                      t("code", J1, f(me.node_type), 1),
                      t("div", Q1, [
                        D.value.has(me.node_type) ? (a(), r(H, { key: 0 }, [
                          ((Ve = D.value.get(me.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", X1, f((Ze = D.value.get(me.node_type)) == null ? void 0 : Ze.package_id), 1)) : ((It = D.value.get(me.node_type)) == null ? void 0 : It.action) === "optional" ? (a(), r("span", Z1, " Optional ")) : ((st = D.value.get(me.node_type)) == null ? void 0 : st.action) === "skip" ? (a(), r("span", e0, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", t0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ze.value.length > 0 ? (a(), r("div", s0, [
                t("h4", o0, "Models to Download (" + f(ze.value.length) + ")", 1),
                t("div", n0, [
                  (a(!0), r(H, null, ye(ze.value, (me) => (a(), r("div", {
                    key: me.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", a0, [
                      t("code", l0, f(me.filename), 1),
                      t("div", i0, [
                        t("span", r0, "→ " + f(me.target_path), 1),
                        me.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: me.url
                        }, f(Ue(me.url)), 9, c0)) : y("", !0)
                      ])
                    ]),
                    V[36] || (V[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              De.value.length > 0 ? (a(), r("div", u0, [
                t("h4", d0, "Models (" + f(De.value.length) + ")", 1),
                t("div", f0, [
                  (a(!0), r(H, null, ye(De.value, (me) => {
                    var Ve, Ze, It, st, pt, qt, yt;
                    return a(), r("div", {
                      key: me.filename,
                      class: "review-item"
                    }, [
                      t("code", m0, f(me.filename), 1),
                      t("div", v0, [
                        E.value.has(me.filename) ? (a(), r(H, { key: 0 }, [
                          ((Ve = E.value.get(me.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", p0, f((It = (Ze = E.value.get(me.filename)) == null ? void 0 : Ze.selected_model) == null ? void 0 : It.filename), 1)) : ((st = E.value.get(me.filename)) == null ? void 0 : st.action) === "download" ? (a(), r("span", g0, " Download ")) : ((pt = E.value.get(me.filename)) == null ? void 0 : pt.action) === "optional" ? (a(), r("span", h0, " Optional ")) : ((qt = E.value.get(me.filename)) == null ? void 0 : qt.action) === "skip" ? (a(), r("span", y0, " Skip ")) : ((yt = E.value.get(me.filename)) == null ? void 0 : yt.action) === "cancel_download" ? (a(), r("span", w0, " Cancel Download ")) : y("", !0)
                        ], 64)) : me.is_download_intent ? (a(), r("span", _0, " Pending Download ")) : (a(), r("span", k0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length === 0 && _e.value.length === 0 && De.value.length === 0 ? (a(), r("div", b0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), M(Fy, {
            key: 4,
            progress: We(d),
            onRestart: Ce,
            onRetryFailed: he
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), M(Te, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Pe
        }, {
          default: h(() => [...V[38] || (V[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        V[41] || (V[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || We(d).phase === "complete" || We(d).phase === "error" ? (a(), M(Te, {
          key: 1,
          variant: "secondary",
          onClick: V[0] || (V[0] = (me) => n("close"))
        }, {
          default: h(() => [
            b(f(We(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), M(Te, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: R
        }, {
          default: h(() => [
            b(f(W.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), M(Te, {
          key: 3,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [
            b(f(P.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), M(Te, {
          key: 4,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [...V[39] || (V[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), M(Te, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Me
        }, {
          default: h(() => [...V[40] || (V[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), C0 = /* @__PURE__ */ pe($0, [["__scopeId", "data-v-40d8d5a8"]]), x0 = { class: "search-input-wrapper" }, S0 = ["value", "placeholder"], I0 = /* @__PURE__ */ fe({
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
}), E0 = /* @__PURE__ */ pe(I0, [["__scopeId", "data-v-266f857a"]]), T0 = { class: "search-bar" }, P0 = /* @__PURE__ */ fe({
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
}, D0 = /* @__PURE__ */ fe({
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
          b(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), r("div", M0, [
        Ke(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ pe(D0, [["__scopeId", "data-v-c48e33ed"]]), L0 = { class: "item-header" }, A0 = {
  key: 0,
  class: "item-icon"
}, O0 = { class: "item-info" }, N0 = {
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
}, B0 = /* @__PURE__ */ fe({
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
      t("div", L0, [
        l.$slots.icon ? (a(), r("span", A0, [
          Ke(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", O0, [
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
}), Mt = /* @__PURE__ */ pe(B0, [["__scopeId", "data-v-cc435e0e"]]), V0 = { class: "loading-state" }, W0 = { class: "loading-message" }, G0 = /* @__PURE__ */ fe({
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
}), Ms = /* @__PURE__ */ pe(G0, [["__scopeId", "data-v-ad8436c9"]]), j0 = { class: "error-state" }, H0 = { class: "error-message" }, K0 = /* @__PURE__ */ fe({
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
      e.retry ? (a(), M(de, {
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
}), Ds = /* @__PURE__ */ pe(K0, [["__scopeId", "data-v-5397be48"]]), q0 = /* @__PURE__ */ fe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = N(
      () => i.value.filter((U) => U.status === "broken")
    ), C = N(
      () => i.value.filter((U) => U.status === "new")
    ), $ = N(
      () => i.value.filter((U) => U.status === "modified")
    ), T = N(
      () => i.value.filter((U) => U.status === "synced")
    ), D = N(() => {
      if (!d.value.trim()) return i.value;
      const U = d.value.toLowerCase();
      return i.value.filter((ae) => ae.name.toLowerCase().includes(U));
    }), E = N(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), I = N(
      () => C.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = N(
      () => $.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), K = N(
      () => T.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = N(
      () => v.value ? K.value : K.value.slice(0, 5)
    );
    async function P(U = !1) {
      c.value = !0, u.value = null;
      try {
        i.value = await l(U);
      } catch (ae) {
        u.value = ae instanceof Error ? ae.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: P });
    function S(U) {
      p.value = U, g.value = !0;
    }
    function L(U) {
      p.value = U, w.value = !0;
    }
    function te() {
      n("refresh");
    }
    async function B() {
      w.value = !1, await P(!0);
    }
    async function A() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function W(U) {
      const ae = [];
      return U.missing_nodes > 0 && ae.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && ae.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && ae.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && ae.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), ae.length > 0 ? ae.join(", ") : "Has issues";
    }
    function X(U) {
      const ae = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : ae || "Unknown";
    }
    return Qe(P), (U, ae) => (a(), r(H, null, [
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
          c.value ? (a(), M(Ms, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), M(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            E.value.length ? (a(), M(ct, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(E.value, (Z) => (a(), M(Mt, {
                  key: Z.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ae[7] || (ae[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(W(Z)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (_e) => L(Z.name)
                    }, {
                      default: h(() => [...ae[8] || (ae[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => S(Z.name)
                    }, {
                      default: h(() => [...ae[9] || (ae[9] = [
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
            I.value.length ? (a(), M(ct, {
              key: 1,
              title: "NEW",
              count: I.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(I.value, (Z) => (a(), M(Mt, {
                  key: Z.name,
                  status: Z.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(f(Z.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(X(Z)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => S(Z.name)
                    }, {
                      default: h(() => [...ae[10] || (ae[10] = [
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
            G.value.length ? (a(), M(ct, {
              key: 2,
              title: "MODIFIED",
              count: G.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(G.value, (Z) => (a(), M(Mt, {
                  key: Z.name,
                  status: Z.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ae[11] || (ae[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(X(Z)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => S(Z.name)
                    }, {
                      default: h(() => [...ae[12] || (ae[12] = [
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
            K.value.length ? (a(), M(ct, {
              key: 3,
              title: "SYNCED",
              count: K.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ae[2] || (ae[2] = (Z) => m.value = Z)
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(F.value, (Z) => (a(), M(Mt, {
                  key: Z.name,
                  status: Z.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(f(Z.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(f(Z.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(X(Z)), 1)
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => S(Z.name)
                    }, {
                      default: h(() => [...ae[13] || (ae[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && K.value.length > 5 ? (a(), M(de, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ae[1] || (ae[1] = (Z) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(K.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            D.value.length ? y("", !0) : (a(), M(as, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), M(Np, {
        key: 0,
        "workflow-name": p.value,
        onClose: ae[3] || (ae[3] = (Z) => g.value = !1),
        onResolve: ae[4] || (ae[4] = (Z) => L(p.value)),
        onRefresh: ae[5] || (ae[5] = (Z) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), M(C0, {
        key: 1,
        "workflow-name": p.value,
        onClose: B,
        onInstall: te,
        onRefresh: ae[6] || (ae[6] = (Z) => n("refresh")),
        onRestart: A
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Y0 = /* @__PURE__ */ pe(q0, [["__scopeId", "data-v-fa3f076e"]]), J0 = /* @__PURE__ */ fe({
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
}, Tw = /* @__PURE__ */ fe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = tt(), u = k(null), d = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), C = k(null);
    let $ = null;
    function T(P, S = "success", L = 2e3) {
      $ && clearTimeout($), C.value = { message: P, type: S }, $ = setTimeout(() => {
        C.value = null;
      }, L);
    }
    function D(P) {
      if (!P) return "Unknown";
      const S = 1024 * 1024 * 1024, L = 1024 * 1024;
      return P >= S ? `${(P / S).toFixed(1)} GB` : P >= L ? `${(P / L).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function E(P) {
      navigator.clipboard.writeText(P), T("Copied to clipboard!");
    }
    async function I(P) {
      try {
        await c(P), T("Opening file location...");
      } catch {
        T("Failed to open location", "error");
      }
    }
    async function G() {
      if (!(!v.value.trim() || !u.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await F();
        } catch (P) {
          p.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function K(P) {
      if (u.value) {
        w.value = P, p.value = null, _.value = null;
        try {
          await i(u.value.hash, P), T("Source removed"), await F();
        } catch (S) {
          p.value = S instanceof Error ? S.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function F() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(F), (P, S) => {
      var L;
      return a(), r(H, null, [
        x(ut, {
          title: `Model Details: ${((L = u.value) == null ? void 0 : L.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: S[5] || (S[5] = (te) => P.$emit("close"))
        }, {
          body: h(() => {
            var te, B, A, W;
            return [
              u.value ? (a(), r("div", Q0, [
                t("section", X0, [
                  t("div", Z0, [
                    S[6] || (S[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", ew, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[0] || (S[0] = (X) => E(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", tw, [
                    S[7] || (S[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", sw, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[1] || (S[1] = (X) => E(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", ow, [
                    S[8] || (S[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", nw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: S[2] || (S[2] = (X) => E(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", aw, [
                    S[9] || (S[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", lw, f(D(u.value.size)), 1)
                  ]),
                  t("div", iw, [
                    S[10] || (S[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", rw, f(u.value.category), 1)
                  ]),
                  t("div", cw, [
                    S[11] || (S[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", uw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", dw, [
                  t("h4", fw, "Locations (" + f(((te = u.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (B = u.value.locations) != null && B.length ? (a(), r("div", mw, [
                    (a(!0), r(H, null, ye(u.value.locations, (X, U) => (a(), r("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      t("span", vw, f(X.path), 1),
                      X.modified ? (a(), r("span", pw, "Modified: " + f(X.modified), 1)) : y("", !0),
                      X.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ae) => I(X.path)
                      }, " Open File Location ", 8, gw)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", hw, "No locations found"))
                ]),
                t("section", yw, [
                  t("h4", ww, "Download Sources (" + f(((A = u.value.sources) == null ? void 0 : A.length) || 0) + ")", 1),
                  (W = u.value.sources) != null && W.length ? (a(), r("div", _w, [
                    (a(!0), r(H, null, ye(u.value.sources, (X, U) => (a(), r("div", {
                      key: U,
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
                      "onUpdate:modelValue": S[3] || (S[3] = (X) => v.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: G
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
              onClick: S[4] || (S[4] = (te) => P.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), M(kt, { to: "body" }, [
          C.value ? (a(), r("div", {
            key: 0,
            class: Ee(["toast", C.value.type])
          }, f(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), nl = /* @__PURE__ */ pe(Tw, [["__scopeId", "data-v-f15cbb56"]]), Pw = ["disabled"], Rw = { class: "dropdown-value" }, Mw = ["onClick"], Dw = {
  key: 0,
  class: "dropdown-error"
}, Lw = /* @__PURE__ */ fe({
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
    function d(T) {
      return typeof T == "string" ? T : T.value;
    }
    function m(T) {
      return typeof T == "string" ? T : T.label;
    }
    const v = N(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const T = o.options.find((D) => d(D) === o.modelValue);
      return T ? m(T) : String(o.modelValue);
    });
    function g() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function p(T) {
      n("update:modelValue", d(T)), w();
    }
    function _() {
      if (!i.value) return;
      const T = i.value.getBoundingClientRect(), D = window.innerHeight, E = D - T.bottom, I = T.top, G = Math.min(300, o.options.length * 36 + 8), K = E < G && I > E;
      u.value = {
        position: "fixed",
        left: `${T.left}px`,
        width: `${T.width}px`,
        maxHeight: "300px",
        ...K ? { bottom: `${D - T.top + 4}px` } : { top: `${T.bottom + 4}px` }
      };
    }
    ft(l, async (T) => {
      T && (await ht(), _());
    });
    function C() {
      l.value && _();
    }
    function $(T) {
      T.key === "Escape" && l.value && w();
    }
    return Qe(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", $);
    }), Gs(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", $);
    }), (T, D) => (a(), r("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: i
    }, [
      t("button", {
        type: "button",
        class: Ee(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", Rw, f(v.value), 1),
        D[0] || (D[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Pw),
      (a(), M(kt, { to: "body" }, [
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
          (a(!0), r(H, null, ye(e.options, (E) => (a(), r("div", {
            key: d(E),
            class: Ee(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (I) => p(E)
          }, f(m(E)), 11, Mw))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), r("span", Dw, f(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Aw = /* @__PURE__ */ pe(Lw, [["__scopeId", "data-v-857e085b"]]);
function Ow(e) {
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
  if (!Ow(o.hostname)) return { kind: "unknown" };
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
}, c_ = { class: "action-bar" }, u_ = { class: "summary-info" }, d_ = { class: "summary-count" }, f_ = { class: "summary-size" }, m_ = /* @__PURE__ */ fe({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: i } = tt(), c = k([]), u = k(/* @__PURE__ */ new Set()), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k("name"), p = k(!0), _ = k(""), C = k(""), $ = k(""), T = k([]), D = k(!1);
    let E = !1;
    const I = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, G = N(() => {
      let ve = c.value;
      if (o.initialPath) {
        const oe = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        ve = ve.filter((ce) => ce.path.startsWith(oe) || ce.path === o.initialPath);
      }
      if (g.value && (ve = ve.filter((oe) => oe.is_model_file)), v.value.trim()) {
        const oe = v.value.toLowerCase();
        ve = ve.filter((ce) => ce.path.toLowerCase().includes(oe));
      }
      return ve;
    }), K = N(() => {
      const ve = [...G.value];
      return ve.sort((oe, ce) => {
        let ue;
        return w.value === "name" ? ue = oe.path.localeCompare(ce.path) : ue = oe.size - ce.size, p.value ? ue : -ue;
      }), ve;
    }), F = N(() => G.value.length === 0 ? !1 : G.value.every((ve) => u.value.has(ve.path))), P = N(() => G.value.some((ve) => u.value.has(ve.path))), S = N(() => {
      const ve = T.value.map((oe) => ({
        label: oe,
        value: oe
      }));
      return ve.push({ label: "Custom path...", value: "__custom__" }), ve;
    }), L = N(() => _.value === "__custom__" ? $.value.trim().length > 0 : _.value.length > 0), te = N(() => {
      let ve = 0;
      for (const oe of u.value) {
        const ce = c.value.find((ue) => ue.path === oe);
        ce && (ve += ce.size);
      }
      return ve;
    });
    function B(ve) {
      if (ve === 0) return "0 B";
      const oe = 1024 * 1024 * 1024, ce = 1024 * 1024, ue = 1024;
      return ve >= oe ? `${(ve / oe).toFixed(2)} GB` : ve >= ce ? `${(ve / ce).toFixed(1)} MB` : ve >= ue ? `${(ve / ue).toFixed(0)} KB` : `${ve} B`;
    }
    function A(ve) {
      const oe = ve.match(I);
      return oe ? `${oe[1]}${oe[4]}` : null;
    }
    function W(ve) {
      const oe = new Set(u.value), ce = oe.has(ve.path), ue = ve.shard_group || A(ve.path);
      if (ue) {
        const Ie = c.value.filter((Pe) => (Pe.shard_group || A(Pe.path)) === ue);
        ce ? Ie.forEach((Pe) => oe.delete(Pe.path)) : Ie.forEach((Pe) => oe.add(Pe.path));
      } else
        ce ? oe.delete(ve.path) : oe.add(ve.path);
      u.value = oe;
    }
    function X() {
      const ve = new Set(u.value);
      for (const oe of G.value)
        oe.is_model_file && ve.add(oe.path);
      u.value = ve;
    }
    function U() {
      u.value = /* @__PURE__ */ new Set();
    }
    function ae() {
      if (F.value) {
        const ve = new Set(u.value);
        for (const oe of G.value)
          ve.delete(oe.path);
        u.value = ve;
      } else {
        const ve = new Set(u.value);
        for (const oe of G.value)
          ve.add(oe.path);
        u.value = ve;
      }
    }
    function Z(ve) {
      w.value === ve ? p.value = !p.value : (w.value = ve, p.value = !0);
    }
    function _e(ve) {
      const oe = ve.split("/");
      return oe.length >= 2 ? oe[oe.length - 2] : null;
    }
    function be() {
      if (D.value || u.value.size === 0) return;
      const ve = /* @__PURE__ */ new Set();
      for (const ue of u.value) {
        const Ie = _e(ue);
        Ie && ve.add(Ie.toLowerCase());
      }
      if (ve.size !== 1) return;
      const oe = [...ve][0], ce = T.value.find(
        (ue) => ue.toLowerCase() === oe
      );
      ce && ce !== _.value && (E = !0, _.value = ce, ht(() => {
        E = !1;
      }));
    }
    function De() {
      return _.value === "__custom__" ? $.value.trim() : C.value.trim() ? `${_.value}/${C.value.trim()}` : _.value;
    }
    function ze() {
      if (u.value.size === 0 || !L.value) return;
      const ve = De(), oe = [];
      for (const ce of u.value) {
        const ue = c.value.find((Ie) => Ie.path === ce);
        ue && oe.push({
          url: zw(o.repoId, o.revision, ue.path),
          destination: ve,
          filename: ue.path.split("/").pop() || ue.path
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
            const ce = c.value.find((ue) => ue.path === o.preselectedFile);
            ce && W(ce);
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
        T.value = ve.directories, ve.directories.length > 0 && !_.value && (_.value = ve.directories[0]);
      } catch {
        T.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return ft(() => [o.repoId, o.revision], () => {
      o.repoId && Ue();
    }, { immediate: !1 }), ft(() => o.repoId, () => {
      D.value = !1;
    }), ft(u, () => {
      be();
    }, { deep: !0 }), ft(T, () => {
      T.value.length > 0 && u.value.size > 0 && be();
    }), ft(_, (ve, oe) => {
      E || oe === "" || (D.value = !0);
    }), Qe(() => {
      Ue(), Ye();
    }), (ve, oe) => (a(), r("div", Fw, [
      t("div", Bw, [
        t("button", {
          class: "back-btn",
          onClick: oe[0] || (oe[0] = (ce) => ve.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Vw, [
          t("span", Ww, f(e.repoId), 1),
          e.revision ? (a(), r("span", Gw, f(e.revision), 1)) : y("", !0)
        ])
      ]),
      d.value ? (a(), r("div", jw, " Loading repository files... ")) : m.value ? (a(), r("div", Hw, f(m.value), 1)) : (a(), r(H, { key: 2 }, [
        t("div", Kw, [
          x(St, {
            modelValue: v.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (ce) => v.value = ce),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", qw, [
            t("button", {
              class: Ee(["toggle-btn", { active: g.value }]),
              onClick: oe[2] || (oe[2] = (ce) => g.value = !g.value)
            }, f(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: U
            }, "Clear")
          ])
        ]),
        t("div", Yw, [
          G.value.length > 0 ? (a(), r("div", Jw, [
            t("input", {
              type: "checkbox",
              checked: F.value,
              indeterminate: P.value && !F.value,
              class: "file-checkbox",
              onChange: ae
            }, null, 40, Qw),
            t("span", {
              class: "header-name",
              onClick: oe[3] || (oe[3] = (ce) => Z("name"))
            }, [
              oe[9] || (oe[9] = b(" Name ", -1)),
              t("span", Xw, f(w.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: oe[4] || (oe[4] = (ce) => Z("size"))
            }, [
              oe[10] || (oe[10] = b(" Size ", -1)),
              t("span", Zw, f(w.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          G.value.length === 0 ? (a(), r("div", e_, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), r("div", t_, [
            (a(!0), r(H, null, ye(K.value, (ce) => (a(), r("div", {
              key: ce.path,
              class: Ee(["file-item", { selected: u.value.has(ce.path) }]),
              onClick: (ue) => W(ce)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(ce.path),
                class: "file-checkbox",
                onClick: oe[5] || (oe[5] = rt(() => {
                }, ["stop"])),
                onChange: (ue) => W(ce)
              }, null, 40, o_),
              t("span", n_, f(ce.path), 1),
              t("span", a_, f(B(ce.size)), 1)
            ], 10, s_))), 128))
          ]))
        ]),
        t("div", l_, [
          oe[11] || (oe[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", i_, [
            x(Aw, {
              modelValue: _.value,
              "onUpdate:modelValue": oe[6] || (oe[6] = (ce) => _.value = ce),
              options: S.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), r("span", r_, "/")) : y("", !0),
            _.value !== "__custom__" ? (a(), M(St, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": oe[7] || (oe[7] = (ce) => C.value = ce),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          _.value === "__custom__" ? (a(), M(St, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": oe[8] || (oe[8] = (ce) => $.value = ce),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", c_, [
          t("div", u_, [
            t("span", d_, f(u.value.size) + " file(s) selected", 1),
            t("span", f_, f(B(te.value)), 1)
          ]),
          x(Te, {
            variant: "primary",
            disabled: u.value.size === 0 || !L.value,
            onClick: ze
          }, {
            default: h(() => [...oe[12] || (oe[12] = [
              b(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), v_ = /* @__PURE__ */ pe(m_, [["__scopeId", "data-v-183acebc"]]), p_ = { class: "token-config-modal" }, g_ = { class: "provider-info" }, h_ = { class: "provider-icon" }, y_ = { class: "provider-name" }, w_ = {
  key: 0,
  class: "current-token"
}, __ = { class: "mask" }, k_ = { class: "token-input-section" }, b_ = { class: "input-label" }, $_ = { class: "help-text" }, C_ = ["href"], x_ = { class: "modal-actions" }, S_ = /* @__PURE__ */ fe({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, n = s, { updateConfig: l } = tt(), i = k(""), c = k(!1), u = k(!1), d = N(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), m = N(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = N(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), g = N(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = N(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function p() {
      if (i.value.trim()) {
        c.value = !0;
        try {
          const C = o.provider === "huggingface" ? { huggingface_token: i.value.trim() } : { civitai_api_key: i.value.trim() };
          await l(C), i.value = "", n("saved"), n("close");
        } catch (C) {
          console.error("Failed to save token:", C);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const C = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(C), n("cleared"), n("close");
      } catch (C) {
        console.error("Failed to clear token:", C);
      } finally {
        u.value = !1;
      }
    }
    return (C, $) => (a(), M(ut, {
      title: "Configure API Token",
      onClose: $[2] || ($[2] = (T) => C.$emit("close"))
    }, {
      body: h(() => [
        t("div", p_, [
          t("div", g_, [
            t("span", h_, f(m.value), 1),
            t("span", y_, f(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), r("div", w_, [
            $[4] || ($[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", __, f(e.currentTokenMask), 1),
            x(Te, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...$[3] || ($[3] = [
                b(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", k_, [
            t("label", b_, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            x(St, {
              modelValue: i.value,
              "onUpdate:modelValue": $[0] || ($[0] = (T) => i.value = T),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", $_, [
              t("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, C_)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        t("div", x_, [
          x(Te, {
            variant: "secondary",
            onClick: $[1] || ($[1] = (T) => C.$emit("close"))
          }, {
            default: h(() => [...$[5] || ($[5] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(Te, {
            variant: "primary",
            disabled: !i.value.trim(),
            loading: c.value,
            onClick: p
          }, {
            default: h(() => [...$[6] || ($[6] = [
              b(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), I_ = /* @__PURE__ */ pe(S_, [["__scopeId", "data-v-0687d0ce"]]), E_ = { class: "huggingface-tab" }, T_ = {
  key: 0,
  class: "search-section"
}, P_ = { class: "search-header" }, R_ = { class: "search-bar" }, M_ = {
  key: 1,
  class: "search-results"
}, D_ = {
  key: 0,
  class: "loading-state"
}, L_ = {
  key: 1,
  class: "error-state"
}, A_ = {
  key: 2,
  class: "results-list"
}, O_ = ["onClick"], N_ = { class: "repo-header" }, U_ = { class: "repo-id" }, z_ = { class: "repo-stats" }, F_ = {
  class: "stat",
  title: "Downloads"
}, B_ = {
  class: "stat",
  title: "Likes"
}, V_ = {
  key: 0,
  class: "repo-desc"
}, W_ = {
  key: 1,
  class: "repo-tags"
}, G_ = {
  key: 3,
  class: "empty-state"
}, j_ = {
  key: 4,
  class: "hint-state"
}, H_ = /* @__PURE__ */ fe({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = tt(), n = k("search"), l = k(""), i = k([]), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k("main"), g = k(), w = k(), p = k(!1), _ = k(null), C = N(() => {
      if (!u.value) return !1;
      const F = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || F.includes("authentication") || F.includes("unauthorized");
    });
    function $(F) {
      return F >= 1e6 ? `${(F / 1e6).toFixed(1)}M` : F >= 1e3 ? `${(F / 1e3).toFixed(1)}K` : String(F);
    }
    async function T() {
      const F = l.value.trim();
      if (!F) return;
      u.value = null;
      const P = Nw(F);
      if (P.kind === "file" && P.repoId && P.path) {
        m.value = P.repoId, v.value = P.revision || "main";
        const S = P.path.split("/");
        S.length > 1 ? g.value = S.slice(0, -1).join("/") : g.value = void 0, w.value = P.path, n.value = "browse";
        return;
      }
      if (P.kind === "repo" && P.repoId) {
        m.value = P.repoId, v.value = P.revision || "main", g.value = P.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(F) && !F.includes("://")) {
        m.value = F, v.value = "main", g.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const S = await s(F);
        i.value = S.results, d.value = !0;
      } catch (S) {
        u.value = S instanceof Error ? S.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function D(F) {
      m.value = F, v.value = "main", g.value = void 0, w.value = void 0, n.value = "browse";
    }
    function E() {
      n.value = "search", m.value = null, g.value = void 0, w.value = void 0;
    }
    async function I() {
      try {
        const F = await o();
        _.value = F.huggingface_token || null;
      } catch (F) {
        console.error("Failed to load config:", F);
      }
    }
    function G() {
      I(), C.value && l.value && T();
    }
    function K() {
      _.value = null;
    }
    return Qe(I), (F, P) => (a(), r("div", E_, [
      n.value === "search" ? (a(), r("div", T_, [
        t("div", P_, [
          t("div", R_, [
            x(St, {
              modelValue: l.value,
              "onUpdate:modelValue": P[0] || (P[0] = (S) => l.value = S),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Ht(T, ["enter"])
            }, null, 8, ["modelValue"]),
            x(Te, {
              variant: "primary",
              onClick: T,
              loading: c.value
            }, {
              default: h(() => [...P[5] || (P[5] = [
                b(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          x(Te, {
            variant: "secondary",
            size: "sm",
            onClick: P[1] || (P[1] = (S) => p.value = !0)
          }, {
            default: h(() => [
              b(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      n.value === "search" ? (a(), r("div", M_, [
        c.value ? (a(), r("div", D_, " Searching HuggingFace... ")) : u.value ? (a(), r("div", L_, [
          t("p", null, f(u.value), 1),
          C.value ? (a(), M(Te, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: P[2] || (P[2] = (S) => p.value = !0)
          }, {
            default: h(() => [...P[6] || (P[6] = [
              b(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : i.value.length > 0 ? (a(), r("div", A_, [
          (a(!0), r(H, null, ye(i.value, (S) => (a(), r("div", {
            key: S.repo_id,
            class: "repo-card",
            onClick: (L) => D(S.repo_id)
          }, [
            t("div", N_, [
              t("span", U_, f(S.repo_id), 1),
              t("div", z_, [
                t("span", F_, [
                  P[7] || (P[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + f($(S.downloads)), 1)
                ]),
                t("span", B_, [
                  P[8] || (P[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + f($(S.likes)), 1)
                ])
              ])
            ]),
            S.description ? (a(), r("p", V_, f(S.description), 1)) : y("", !0),
            S.tags.length > 0 ? (a(), r("div", W_, [
              (a(!0), r(H, null, ye(S.tags.slice(0, 5), (L) => (a(), r("span", {
                key: L,
                class: "tag"
              }, f(L), 1))), 128))
            ])) : y("", !0)
          ], 8, O_))), 128))
        ])) : d.value ? (a(), r("div", G_, " No repositories found ")) : (a(), r("div", j_, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), M(v_, {
        key: 2,
        "repo-id": m.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": w.value,
        onBack: E,
        onQueue: P[3] || (P[3] = (S) => F.$emit("queue", S))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (a(), M(I_, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: P[4] || (P[4] = (S) => p.value = !1),
        onSaved: G,
        onCleared: K
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), K_ = /* @__PURE__ */ pe(H_, [["__scopeId", "data-v-e13209bf"]]), q_ = { class: "civitai-tab" }, Y_ = /* @__PURE__ */ fe({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (a(), r("div", q_, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), J_ = /* @__PURE__ */ pe(Y_, [["__scopeId", "data-v-44948051"]]), Q_ = { class: "direct-url-tab" }, X_ = { class: "input-group" }, Z_ = { class: "input-group" }, ek = {
  key: 0,
  class: "error"
}, tk = { class: "actions" }, sk = /* @__PURE__ */ fe({
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
    return (d, m) => (a(), r("div", Q_, [
      t("div", X_, [
        m[2] || (m[2] = t("label", null, "Download URL", -1)),
        x(St, {
          modelValue: n.value,
          "onUpdate:modelValue": m[0] || (m[0] = (v) => n.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Z_, [
        m[3] || (m[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        x(St, {
          modelValue: l.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        i.value ? (a(), r("p", ek, f(i.value), 1)) : y("", !0)
      ]),
      m[5] || (m[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", tk, [
        x(Te, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: h(() => [...m[4] || (m[4] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), ok = /* @__PURE__ */ pe(sk, [["__scopeId", "data-v-01def7aa"]]), nk = { class: "download-modal" }, ak = { class: "tab-bar" }, lk = ["onClick"], ik = { class: "tab-content" }, rk = /* @__PURE__ */ fe({
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
    return (m, v) => e.show ? (a(), M(ut, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: h(() => [
        t("div", nk, [
          t("div", ak, [
            (a(), r(H, null, ye(l, (g) => t("button", {
              key: g.id,
              class: Ee(["tab-btn", { active: i.value === g.id }]),
              onClick: (w) => i.value = g.id
            }, f(g.icon) + " " + f(g.label), 11, lk)), 64))
          ]),
          t("div", ik, [
            i.value === "huggingface" ? (a(), M(K_, {
              key: 0,
              onQueue: c
            })) : i.value === "civitai" ? (a(), M(J_, { key: 1 })) : i.value === "direct" ? (a(), M(ok, {
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
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), Dr = /* @__PURE__ */ pe(rk, [["__scopeId", "data-v-90a9f401"]]), ck = /* @__PURE__ */ fe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = tt(), i = k([]), c = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(!1);
    function _() {
      g.value = !1, o("navigate", "model-index");
    }
    const C = N(
      () => i.value.reduce((P, S) => P + (S.size || 0), 0)
    ), $ = N(() => {
      if (!v.value.trim()) return i.value;
      const P = v.value.toLowerCase();
      return i.value.filter((S) => S.filename.toLowerCase().includes(P));
    }), T = N(() => {
      if (!v.value.trim()) return c.value;
      const P = v.value.toLowerCase();
      return c.value.filter((S) => S.filename.toLowerCase().includes(P));
    }), D = N(() => {
      const P = {};
      for (const L of $.value) {
        const te = L.type || "other";
        P[te] || (P[te] = []), P[te].push(L);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([L], [te]) => {
        const B = S.indexOf(L), A = S.indexOf(te);
        return B >= 0 && A >= 0 ? B - A : B >= 0 ? -1 : A >= 0 ? 1 : L.localeCompare(te);
      }).map(([L, te]) => ({ type: L, models: te }));
    });
    function E(P) {
      if (!P) return "Unknown";
      const S = P / (1024 * 1024);
      return S >= 1024 ? `${(S / 1024).toFixed(1)} GB` : `${S.toFixed(0)} MB`;
    }
    function I(P) {
      w.value = P.hash || P.filename;
    }
    function G(P) {
      o("navigate", "model-index");
    }
    function K(P) {
      alert(`Download functionality not yet implemented for ${P}`);
    }
    async function F() {
      d.value = !0, m.value = null;
      try {
        const P = await n();
        i.value = P, c.value = [];
        const S = await l();
        u.value = S.environment || "production";
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(F), (P, S) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[1] || (S[1] = (L) => g.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (L) => p.value = !0)
              }, {
                default: h(() => [...S[6] || (S[6] = [
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
          x(So, {
            modelValue: v.value,
            "onUpdate:modelValue": S[2] || (S[2] = (L) => v.value = L),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), M(Ms, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), M(Ds, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            i.value.length ? (a(), M(un, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(E(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(H, null, ye(D.value, (L) => (a(), M(ct, {
              key: L.type,
              title: L.type.toUpperCase(),
              count: L.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(L.models, (te) => (a(), M(Mt, {
                  key: te.hash || te.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...S[7] || (S[7] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(te.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(E(te.size)), 1)
                  ]),
                  details: h(() => [
                    x(mt, {
                      label: "Used by:",
                      value: (te.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    x(mt, {
                      label: "Path:",
                      value: te.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (B) => I(te)
                    }, {
                      default: h(() => [...S[8] || (S[8] = [
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
            T.value.length ? (a(), M(ct, {
              key: 1,
              title: "MISSING",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(T.value, (L) => (a(), M(Mt, {
                  key: L.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...S[9] || (S[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(L.filename), 1)
                  ]),
                  subtitle: h(() => [...S[10] || (S[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var te;
                    return [
                      x(mt, {
                        label: "Required by:",
                        value: ((te = L.workflow_names) == null ? void 0 : te.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => K(L.filename)
                    }, {
                      default: h(() => [...S[11] || (S[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => G(L.filename)
                    }, {
                      default: h(() => [...S[12] || (S[12] = [
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
            !$.value.length && !T.value.length ? (a(), M(as, {
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
        onClose: S[3] || (S[3] = (L) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            S[13] || (S[13] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(u.value) + '"', 1),
            S[14] || (S[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          x(de, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...S[15] || (S[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), M(nl, {
        key: 0,
        identifier: w.value,
        onClose: S[4] || (S[4] = (L) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      x(Dr, {
        show: p.value,
        onClose: S[5] || (S[5] = (L) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), uk = /* @__PURE__ */ pe(ck, [["__scopeId", "data-v-af3ca736"]]), dk = {
  key: 0,
  class: "indexing-progress"
}, fk = { class: "progress-info" }, mk = { class: "progress-label" }, vk = { class: "progress-count" }, pk = { class: "progress-bar" }, gk = { class: "modal-content" }, hk = { class: "modal-header" }, yk = { class: "modal-body" }, wk = { class: "input-group" }, _k = { class: "current-path" }, kk = { class: "input-group" }, bk = { class: "modal-footer" }, $k = /* @__PURE__ */ fe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = tt(), c = s, u = k([]), d = k(!1), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(!1), C = k(null), $ = k(""), T = k(!1), D = k(!1), E = k(null), I = N(
      () => u.value.reduce((A, W) => A + (W.size || 0), 0)
    ), G = N(() => {
      if (!g.value.trim()) return u.value;
      const A = g.value.toLowerCase();
      return u.value.filter((W) => {
        const X = W, U = W.sha256 || X.sha256_hash || "";
        return W.filename.toLowerCase().includes(A) || U.toLowerCase().includes(A);
      });
    }), K = N(() => {
      const A = {};
      for (const X of G.value) {
        const U = X.type || "other";
        A[U] || (A[U] = []), A[U].push(X);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([X], [U]) => {
        const ae = W.indexOf(X), Z = W.indexOf(U);
        return ae >= 0 && Z >= 0 ? ae - Z : ae >= 0 ? -1 : Z >= 0 ? 1 : X.localeCompare(U);
      }).map(([X, U]) => ({ type: X, models: U }));
    });
    function F(A) {
      if (!A) return "Unknown";
      const W = 1024 * 1024 * 1024, X = 1024 * 1024;
      return A >= W ? `${(A / W).toFixed(1)} GB` : A >= X ? `${(A / X).toFixed(0)} MB` : `${(A / 1024).toFixed(0)} KB`;
    }
    function P(A) {
      p.value = A.hash || A.filename;
    }
    async function S() {
      m.value = !0, v.value = null;
      try {
        const A = await n();
        await te(), A.changes > 0 && console.log(`Scan complete: ${A.changes} changes detected`);
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to scan models";
      } finally {
        m.value = !1;
      }
    }
    async function L() {
      if ($.value.trim()) {
        T.value = !0, v.value = null;
        try {
          const A = await i($.value.trim());
          C.value = A.path, _.value = !1, $.value = "", await te(), console.log(`Directory changed: ${A.models_indexed} models indexed`), c("refresh");
        } catch (A) {
          v.value = A instanceof Error ? A.message : "Failed to change directory";
        } finally {
          T.value = !1;
        }
      }
    }
    async function te() {
      d.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (A) {
        v.value = A instanceof Error ? A.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function B() {
      try {
        const A = await l();
        C.value = A.path;
      } catch {
      }
    }
    return Qe(() => {
      te(), B();
    }), (A, W) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: W[2] || (W[2] = (X) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                disabled: m.value,
                onClick: S
              }, {
                default: h(() => [
                  b(f(m.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (X) => _.value = !0)
              }, {
                default: h(() => [...W[11] || (W[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: W[1] || (W[1] = (X) => D.value = !0)
              }, {
                default: h(() => [...W[12] || (W[12] = [
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
          E.value ? (a(), r("div", dk, [
            t("div", fk, [
              t("span", mk, f(E.value.message), 1),
              t("span", vk, f(E.value.current) + "/" + f(E.value.total), 1)
            ]),
            t("div", pk, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          x(So, {
            modelValue: g.value,
            "onUpdate:modelValue": W[3] || (W[3] = (X) => g.value = X),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || E.value ? (a(), M(Ms, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (a(), M(Ds, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            u.value.length ? (a(), M(un, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(u.value.length) + " models • " + f(F(I.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(H, null, ye(K.value, (X) => (a(), M(ct, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(X.models, (U) => (a(), M(Mt, {
                  key: U.sha256 || U.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...W[13] || (W[13] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(U.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(F(U.size)), 1)
                  ]),
                  details: h(() => [
                    x(mt, {
                      label: "Hash:",
                      value: U.hash ? U.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ae) => P(U)
                    }, {
                      default: h(() => [...W[14] || (W[14] = [
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
            G.value.length ? y("", !0) : (a(), M(as, {
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
        onClose: W[4] || (W[4] = (X) => w.value = !1)
      }, {
        content: h(() => [...W[15] || (W[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(nl, {
        key: 0,
        identifier: p.value,
        onClose: W[5] || (W[5] = (X) => p.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(kt, { to: "body" }, [
        _.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: W[9] || (W[9] = rt((X) => _.value = !1, ["self"]))
        }, [
          t("div", gk, [
            t("div", hk, [
              W[16] || (W[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: W[6] || (W[6] = (X) => _.value = !1)
              }, "✕")
            ]),
            t("div", yk, [
              t("div", wk, [
                W[17] || (W[17] = t("label", null, "Current Directory", -1)),
                t("code", _k, f(C.value || "Not set"), 1)
              ]),
              t("div", kk, [
                W[18] || (W[18] = t("label", null, "New Directory Path", -1)),
                x(St, {
                  modelValue: $.value,
                  "onUpdate:modelValue": W[7] || (W[7] = (X) => $.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              W[19] || (W[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", bk, [
              x(Te, {
                variant: "secondary",
                onClick: W[8] || (W[8] = (X) => _.value = !1)
              }, {
                default: h(() => [...W[20] || (W[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              x(Te, {
                variant: "primary",
                disabled: !$.value.trim() || T.value,
                loading: T.value,
                onClick: L
              }, {
                default: h(() => [
                  b(f(T.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      x(Dr, {
        show: D.value,
        onClose: W[10] || (W[10] = (X) => D.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Ck = /* @__PURE__ */ pe($k, [["__scopeId", "data-v-3705114c"]]), xk = { class: "node-details" }, Sk = { class: "status-row" }, Ik = {
  key: 0,
  class: "detail-row"
}, Ek = { class: "value" }, Tk = { class: "detail-row" }, Pk = { class: "value" }, Rk = {
  key: 1,
  class: "detail-row"
}, Mk = { class: "value mono" }, Dk = {
  key: 2,
  class: "detail-row"
}, Lk = ["href"], Ak = {
  key: 3,
  class: "detail-row"
}, Ok = { class: "value mono small" }, Nk = { class: "detail-row" }, Uk = {
  key: 0,
  class: "value"
}, zk = {
  key: 1,
  class: "workflow-list"
}, Fk = /* @__PURE__ */ fe({
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
    return (u, d) => (a(), M(ut, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", xk, [
          t("div", Sk, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ee(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Ik, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Ek, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Tk, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Pk, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", Rk, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Mk, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", Dk, [
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
            ], 8, Lk)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", Ak, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Ok, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Nk, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Uk, " Not used in any workflows ")) : (a(), r("div", zk, [
              (a(!0), r(H, null, ye(e.node.used_in_workflows, (m) => (a(), r("span", {
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
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bk = /* @__PURE__ */ pe(Fk, [["__scopeId", "data-v-b342f626"]]), Vk = { class: "dialog-message" }, Wk = {
  key: 0,
  class: "dialog-details"
}, Gk = {
  key: 1,
  class: "dialog-warning"
}, jk = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), M(ut, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", Vk, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", Wk, [
          (a(!0), r(H, null, ye(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Gk, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Te, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        x(Te, {
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
}), al = /* @__PURE__ */ pe(jk, [["__scopeId", "data-v-3670b9f5"]]), Hk = { class: "mismatch-warning" }, Kk = { class: "version-mismatch" }, qk = { class: "version-actual" }, Yk = { class: "version-expected" }, Jk = { key: 0 }, Qk = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Xk = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Zk = /* @__PURE__ */ fe({
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
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), C = N(() => {
      if (!g.value.trim()) return d.value.nodes;
      const B = g.value.toLowerCase();
      return d.value.nodes.filter(
        (A) => {
          var W, X;
          return A.name.toLowerCase().includes(B) || ((W = A.description) == null ? void 0 : W.toLowerCase().includes(B)) || ((X = A.repository) == null ? void 0 : X.toLowerCase().includes(B));
        }
      );
    }), $ = N(
      () => C.value.filter((B) => B.installed && B.tracked)
    ), T = N(
      () => C.value.filter((B) => !B.installed && B.tracked)
    ), D = N(
      () => C.value.filter((B) => B.installed && !B.tracked)
    );
    function E(B) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[B] || B;
    }
    const I = N(() => o.versionMismatches.length > 0);
    function G(B) {
      return !B.used_in_workflows || B.used_in_workflows.length === 0 ? "Not used in any workflows" : B.used_in_workflows.length === 1 ? B.used_in_workflows[0] : `${B.used_in_workflows.length} workflows`;
    }
    function K(B) {
      p.value = B;
    }
    function F() {
      n("open-node-manager");
    }
    function P(B) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${B}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const A = await i(B);
            A.status === "success" ? (n("toast", `✓ Node "${B}" tracked as development`, "success"), await te()) : n("toast", `Failed to track node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            n("toast", `Error tracking node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function S(B) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${B}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const A = await u(B);
            A.status === "success" ? (n("toast", `✓ Node "${B}" removed`, "success"), await te()) : n("toast", `Failed to remove node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            n("toast", `Error removing node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function L(B) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${B}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const A = await c(B);
            A.status === "success" ? (n("toast", `✓ Node "${B}" installed`, "success"), await te()) : n("toast", `Failed to install node: ${A.message || "Unknown error"}`, "error");
          } catch (A) {
            n("toast", `Error installing node: ${A instanceof Error ? A.message : "Unknown error"}`, "error");
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
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Qe(te), (B, A) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: A[0] || (A[0] = (W) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: h(() => [...A[7] || (A[7] = [
                  b(" Browse Nodes ", -1)
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
            "onUpdate:modelValue": A[1] || (A[1] = (W) => g.value = W),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), M(Ms, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Ds, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            d.value.total_count ? (a(), M(un, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), r(H, { key: 0 }, [
                  b(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), r(H, { key: 1 }, [
                  b(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            I.value ? (a(), M(ct, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Hk, [
                  A[8] || (A[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(H, null, ye(e.versionMismatches, (W) => (a(), M(Mt, {
                  key: W.name,
                  status: "warning"
                }, {
                  icon: h(() => [...A[9] || (A[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", Kk, [
                      t("span", qk, f(W.actual), 1),
                      A[10] || (A[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Yk, f(W.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "warning",
                      size: "sm",
                      onClick: A[2] || (A[2] = (X) => n("repair-environment"))
                    }, {
                      default: h(() => [...A[11] || (A[11] = [
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
            D.value.length ? (a(), M(ct, {
              key: 2,
              title: "UNTRACKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(D.value, (W) => (a(), M(Mt, {
                  key: W.name,
                  status: "warning"
                }, {
                  icon: h(() => [...A[12] || (A[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(W.name), 1)
                  ]),
                  subtitle: h(() => [...A[13] || (A[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    x(mt, {
                      label: "Used by:",
                      value: G(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => K(W)
                    }, {
                      default: h(() => [...A[14] || (A[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => P(W.name)
                    }, {
                      default: h(() => [...A[15] || (A[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => S(W.name)
                    }, {
                      default: h(() => [...A[16] || (A[16] = [
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
            $.value.length ? (a(), M(ct, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye($.value, (W) => (a(), M(Mt, {
                  key: W.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(W.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(W.name), 1)
                  ]),
                  subtitle: h(() => [
                    W.version ? (a(), r("span", Jk, f(W.source === "development" ? "" : "v") + f(W.version), 1)) : (a(), r("span", Qk, "version unknown")),
                    t("span", Xk, " • " + f(E(W.source)), 1)
                  ]),
                  details: h(() => [
                    x(mt, {
                      label: "Used by:",
                      value: G(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => K(W)
                    }, {
                      default: h(() => [...A[17] || (A[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: F
                    }, {
                      default: h(() => [...A[18] || (A[18] = [
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
            T.value.length ? (a(), M(ct, {
              key: 4,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(T.value, (W) => (a(), M(Mt, {
                  key: W.name,
                  status: "missing"
                }, {
                  icon: h(() => [...A[19] || (A[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(W.name), 1)
                  ]),
                  subtitle: h(() => [...A[20] || (A[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    x(mt, {
                      label: "Required by:",
                      value: G(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    x(de, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => K(W)
                    }, {
                      default: h(() => [...A[21] || (A[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    x(de, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => L(W.name)
                    }, {
                      default: h(() => [...A[22] || (A[22] = [
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
            !$.value.length && !T.value.length && !D.value.length ? (a(), M(as, {
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
        onClose: A[4] || (A[4] = (W) => w.value = !1)
      }, {
        content: h(() => [...A[23] || (A[23] = [
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
            onClick: A[3] || (A[3] = (W) => w.value = !1)
          }, {
            default: h(() => [...A[24] || (A[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(Bk, {
        key: 0,
        node: p.value,
        onClose: A[5] || (A[5] = (W) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), M(al, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: A[6] || (A[6] = (W) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), eb = /* @__PURE__ */ pe(Zk, [["__scopeId", "data-v-1555a802"]]);
function Lr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const tb = { class: "remote-url-display" }, sb = ["title"], ob = ["title"], nb = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ab = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, lb = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", tb, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, sb),
      t("button", {
        class: Ee(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", ab, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", nb, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, ob)
    ]));
  }
}), ib = /* @__PURE__ */ pe(lb, [["__scopeId", "data-v-7768a58d"]]), rb = { class: "remote-title" }, cb = {
  key: 0,
  class: "default-badge"
}, ub = {
  key: 1,
  class: "sync-badge"
}, db = {
  key: 0,
  class: "ahead"
}, fb = {
  key: 1,
  class: "behind"
}, mb = {
  key: 1,
  class: "synced"
}, vb = ["href"], pb = {
  key: 1,
  class: "remote-url-text"
}, gb = /* @__PURE__ */ fe({
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
    return (m, v) => (a(), M(Mt, {
      status: n.value ? "synced" : void 0
    }, no({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", rb, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", cb, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", ub, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", db, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", fb, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", mb, "✓ synced"))
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
        }, f(d.value), 9, vb)) : (a(), r("span", pb, f(d.value), 1))
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
        n.value ? y("", !0) : (a(), M(de, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(mt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              x(ib, {
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
}), hb = /* @__PURE__ */ pe(gb, [["__scopeId", "data-v-8310f3a8"]]), yb = ["for"], wb = {
  key: 0,
  class: "base-form-field-required"
}, _b = { class: "base-form-field-input" }, kb = {
  key: 1,
  class: "base-form-field-error"
}, bb = {
  key: 2,
  class: "base-form-field-hint"
}, $b = /* @__PURE__ */ fe({
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
        e.required ? (a(), r("span", wb, "*")) : y("", !0)
      ], 8, yb)) : y("", !0),
      t("div", _b, [
        Ke(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", kb, f(e.error), 1)) : e.hint ? (a(), r("span", bb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ga = /* @__PURE__ */ pe($b, [["__scopeId", "data-v-9a1cf296"]]), Cb = { class: "remote-form" }, xb = { class: "form-header" }, Sb = { class: "form-body" }, Ib = {
  key: 0,
  class: "form-error"
}, Eb = { class: "form-actions" }, Tb = /* @__PURE__ */ fe({
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
    return (m, v) => (a(), r("div", Cb, [
      t("div", xb, [
        x(Nt, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Sb, [
        x(ga, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            x(St, {
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
            x(St, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        x(ga, { label: "Push URL (optional)" }, {
          default: h(() => [
            x(St, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", Ib, f(c.value), 1)) : y("", !0)
      ]),
      t("div", Eb, [
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
}), Pb = /* @__PURE__ */ pe(Tb, [["__scopeId", "data-v-56021b18"]]), Rb = { class: "conflict-summary-box" }, Mb = { class: "summary-header" }, Db = { class: "summary-text" }, Lb = { key: 0 }, Ab = {
  key: 1,
  class: "all-resolved"
}, Ob = { class: "summary-progress" }, Nb = { class: "progress-bar" }, Ub = { class: "progress-text" }, zb = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", Rb, [
      t("div", Mb, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", Db, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", Lb, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", Ab, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", Ob, [
        t("div", Nb, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", Ub, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Fb = /* @__PURE__ */ pe(zb, [["__scopeId", "data-v-4e9e6cc9"]]), Bb = { class: "modal-header" }, Vb = { class: "modal-title" }, Wb = { class: "modal-body" }, Gb = {
  key: 0,
  class: "error-box"
}, jb = {
  key: 0,
  class: "error-hint"
}, Hb = {
  key: 1,
  class: "loading-state"
}, Kb = { class: "commit-summary" }, qb = {
  key: 0,
  class: "changes-section"
}, Yb = {
  key: 0,
  class: "change-group",
  open: ""
}, Jb = { class: "change-count" }, Qb = { class: "change-list" }, Xb = {
  key: 0,
  class: "conflict-badge"
}, Zb = {
  key: 1,
  class: "change-group"
}, e2 = { class: "change-count" }, t2 = { class: "change-list" }, s2 = {
  key: 2,
  class: "change-group"
}, o2 = { class: "change-count" }, n2 = { class: "change-list" }, a2 = {
  key: 2,
  class: "strategy-section"
}, l2 = { class: "radio-group" }, i2 = { class: "radio-option" }, r2 = { class: "radio-option" }, c2 = { class: "radio-option" }, u2 = {
  key: 3,
  class: "up-to-date"
}, d2 = { class: "modal-actions" }, Zl = "comfygit.pullModelStrategy", f2 = /* @__PURE__ */ fe({
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
    ft(l, ($) => {
      localStorage.setItem(Zl, $);
    });
    const i = N(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = N(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = N(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = N(() => o.preview && Lr(o.preview) ? o.preview : null), v = N(() => {
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
      const T = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((D) => D.name === T);
    }
    function C($) {
      const T = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: T });
    }
    return ($, T) => {
      var D, E;
      return a(), M(kt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: T[11] || (T[11] = (I) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: T[10] || (T[10] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", Bb, [
              t("h3", Vb, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: T[0] || (T[0] = (I) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Wb, [
              e.error ? (a(), r("div", Gb, [
                T[13] || (T[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  T[12] || (T[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", jb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", Hb, [...T[14] || (T[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (D = e.preview) != null && D.has_uncommitted_changes ? (a(), r(H, { key: 2 }, [
                T[15] || (T[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                T[16] || (T[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), r(H, { key: 3 }, [
                t("div", Kb, [
                  T[17] || (T[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), r("div", qb, [
                  T[21] || (T[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", Yb, [
                    t("summary", null, [
                      T[18] || (T[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", Jb, f(c.value) + " changes", 1)
                    ]),
                    t("div", Qb, [
                      (a(!0), r(H, null, ye(e.preview.changes.workflows.added, (I) => (a(), r("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + f(I), 1))), 128)),
                      (a(!0), r(H, null, ye(e.preview.changes.workflows.modified, (I) => (a(), r("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(I) + " ", 1),
                        _(I) ? (a(), r("span", Xb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(H, null, ye(e.preview.changes.workflows.deleted, (I) => (a(), r("div", {
                        key: "d-" + I,
                        class: "change-item delete"
                      }, " - " + f(I), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), r("details", Zb, [
                    t("summary", null, [
                      T[19] || (T[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", e2, f(u.value) + " to install", 1)
                    ]),
                    t("div", t2, [
                      (a(!0), r(H, null, ye(e.preview.changes.nodes.to_install, (I) => (a(), r("div", {
                        key: I,
                        class: "change-item add"
                      }, " + " + f(I), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", s2, [
                    t("summary", null, [
                      T[20] || (T[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", o2, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", n2, [
                      (a(!0), r(H, null, ye(e.preview.changes.models.referenced, (I) => (a(), r("div", {
                        key: I,
                        class: "change-item"
                      }, f(I), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), M(Fb, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", a2, [
                  T[26] || (T[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", l2, [
                    t("label", i2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": T[1] || (T[1] = (I) => l.value = I),
                        value: "all"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      T[22] || (T[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", r2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": T[2] || (T[2] = (I) => l.value = I),
                        value: "required"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      T[23] || (T[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", c2, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": T[3] || (T[3] = (I) => l.value = I),
                        value: "skip"
                      }, null, 512), [
                        [es, l.value]
                      ]),
                      T[24] || (T[24] = t("span", null, "Skip model downloads", -1)),
                      T[25] || (T[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  T[27] || (T[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", u2, [
                  T[28] || (T[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", d2, [
              x(de, {
                variant: "secondary",
                onClick: T[4] || (T[4] = (I) => $.$emit("close"))
              }, {
                default: h(() => [...T[29] || (T[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(H, { key: 0 }, [
                x(de, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: T[5] || (T[5] = (I) => C(!1))
                }, {
                  default: h(() => [...T[30] || (T[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                x(de, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: T[6] || (T[6] = (I) => C(!0))
                }, {
                  default: h(() => [...T[31] || (T[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), M(de, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: T[7] || (T[7] = (I) => C(!0))
              }, {
                default: h(() => [...T[32] || (T[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(H, { key: 2 }, [
                m.value && !w.value ? (a(), M(de, {
                  key: 0,
                  variant: "primary",
                  onClick: T[8] || (T[8] = (I) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(de, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: T[9] || (T[9] = (I) => C(!1))
                }, {
                  default: h(() => [...T[33] || (T[33] = [
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
}), m2 = /* @__PURE__ */ pe(f2, [["__scopeId", "data-v-300c7b2f"]]), v2 = { class: "modal-header" }, p2 = { class: "modal-title" }, g2 = { class: "modal-body" }, h2 = {
  key: 0,
  class: "loading-state"
}, y2 = {
  key: 1,
  class: "warning-box"
}, w2 = {
  key: 0,
  class: "commits-section"
}, _2 = { class: "commit-list" }, k2 = { class: "commit-hash" }, b2 = { class: "commit-message" }, $2 = { class: "commit-date" }, C2 = { class: "force-option" }, x2 = { class: "checkbox-option" }, S2 = { class: "commit-summary" }, I2 = { key: 0 }, E2 = { key: 1 }, T2 = {
  key: 0,
  class: "info-box"
}, P2 = {
  key: 1,
  class: "commits-section"
}, R2 = { class: "commit-list" }, M2 = { class: "commit-hash" }, D2 = { class: "commit-message" }, L2 = { class: "commit-date" }, A2 = {
  key: 2,
  class: "up-to-date"
}, O2 = { class: "modal-actions" }, N2 = /* @__PURE__ */ fe({
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
      return a(), M(kt, { to: "body" }, [
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
            t("div", v2, [
              t("h3", p2, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", g2, [
              e.loading ? (a(), r("div", h2, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), r("div", y2, [...c[9] || (c[9] = [
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
                e.preview.commits_ahead > 0 ? (a(), r("div", w2, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", _2, [
                    (a(!0), r(H, null, ye(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", k2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", b2, f(v.message), 1),
                      t("span", $2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", C2, [
                  t("label", x2, [
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
              ], 64)) : e.preview ? (a(), r(H, { key: 3 }, [
                t("div", S2, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", I2, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", E2, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", T2, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", P2, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", R2, [
                    (a(!0), r(H, null, ye(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", M2, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", D2, f(v.message), 1),
                      t("span", L2, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", A2, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", O2, [
              x(de, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(H, { key: 0 }, [
                x(de, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
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
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(de, {
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
}), U2 = /* @__PURE__ */ pe(N2, [["__scopeId", "data-v-ae86b6a7"]]), z2 = { class: "resolution-choice-group" }, F2 = ["disabled"], B2 = ["disabled"], V2 = /* @__PURE__ */ fe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", z2, [
      t("button", {
        class: Ee(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, F2),
      t("button", {
        class: Ee(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, B2)
    ]));
  }
}), W2 = /* @__PURE__ */ pe(V2, [["__scopeId", "data-v-985715ed"]]), G2 = { class: "conflict-header" }, j2 = { class: "conflict-info" }, H2 = { class: "workflow-name" }, K2 = { class: "conflict-description" }, q2 = {
  key: 0,
  class: "resolved-badge"
}, Y2 = { class: "resolved-text" }, J2 = { class: "conflict-hashes" }, Q2 = { class: "hash-item" }, X2 = { class: "hash-item" }, Z2 = { class: "conflict-actions" }, e$ = /* @__PURE__ */ fe({
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
        class: Ee(["conflict-item", { resolved: i.value }])
      }, [
        t("div", G2, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", j2, [
            t("code", H2, f(e.conflict.name) + ".json", 1),
            t("div", K2, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", q2, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", Y2, f(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", J2, [
          t("span", Q2, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", X2, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", Z2, [
          x(W2, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), t$ = /* @__PURE__ */ pe(e$, [["__scopeId", "data-v-506d3bbf"]]), s$ = { class: "resolution-content" }, o$ = {
  key: 0,
  class: "error-box"
}, n$ = { class: "resolution-header" }, a$ = { class: "header-stats" }, l$ = { class: "stat" }, i$ = { class: "stat-value" }, r$ = { class: "stat resolved" }, c$ = { class: "stat-value" }, u$ = {
  key: 0,
  class: "stat pending"
}, d$ = { class: "stat-value" }, f$ = { class: "conflicts-list" }, m$ = {
  key: 1,
  class: "all-resolved-message"
}, v$ = /* @__PURE__ */ fe({
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
    return (w, p) => (a(), M(ut, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", s$, [
          e.error ? (a(), r("div", o$, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", n$, [
            t("div", a$, [
              t("div", l$, [
                t("span", i$, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", r$, [
                t("span", c$, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", u$, [
                t("span", d$, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", f$, [
            (a(!0), r(H, null, ye(e.workflowConflicts, (_) => (a(), M(t$, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => m(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", m$, [
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
            b(" Cancel ", -1)
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
            b(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), p$ = /* @__PURE__ */ pe(v$, [["__scopeId", "data-v-c58d150d"]]), g$ = { class: "node-conflict-item" }, h$ = { class: "node-header" }, y$ = { class: "node-name" }, w$ = { class: "node-id" }, _$ = { class: "version-comparison" }, k$ = { class: "version yours" }, b$ = { class: "version theirs" }, $$ = { class: "chosen-version" }, C$ = { class: "chosen" }, x$ = { class: "chosen-reason" }, S$ = { class: "affected-workflows" }, I$ = { class: "wf-source" }, E$ = { class: "wf-version" }, T$ = /* @__PURE__ */ fe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", g$, [
      t("div", h$, [
        t("code", y$, f(e.conflict.node_name), 1),
        t("span", w$, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", _$, [
        t("div", k$, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", b$, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", $$, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", C$, f(e.conflict.chosen_version), 1),
        t("span", x$, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", S$, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(H, null, ye(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", I$, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", E$, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), P$ = /* @__PURE__ */ pe(T$, [["__scopeId", "data-v-8b626725"]]), R$ = { class: "validation-content" }, M$ = {
  key: 0,
  class: "compatible-message"
}, D$ = { class: "conflicts-list" }, L$ = {
  key: 2,
  class: "warnings-section"
}, A$ = /* @__PURE__ */ fe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), M(ut, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        t("div", R$, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", M$, [
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
            t("div", D$, [
              (a(!0), r(H, null, ye(e.validation.node_conflicts, (u) => (a(), M(P$, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", L$, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(H, null, ye(e.validation.warnings, (u, d) => (a(), r("li", { key: d }, f(u), 1))), 128))
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
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        x(Te, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
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
}), O$ = /* @__PURE__ */ pe(A$, [["__scopeId", "data-v-fefd26ed"]]), N$ = { key: 0 }, U$ = /* @__PURE__ */ fe({
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
    } = tt(), _ = k([]), C = k(null), $ = k({}), T = k(!1), D = k(null), E = k(""), I = k(!1), G = k(null), K = k(!1), F = k("add"), P = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), S = N(() => {
      if (!E.value.trim()) return _.value;
      const he = E.value.toLowerCase();
      return _.value.filter(
        (j) => j.name.toLowerCase().includes(he) || j.fetch_url.toLowerCase().includes(he) || j.push_url.toLowerCase().includes(he)
      );
    });
    async function L() {
      T.value = !0, D.value = null;
      try {
        const he = await n();
        _.value = he.remotes, C.value = he.current_branch_tracking || null, await Promise.all(
          he.remotes.map(async (j) => {
            const V = await d(j.name);
            V && ($.value[j.name] = V);
          })
        );
      } catch (he) {
        D.value = he instanceof Error ? he.message : "Failed to load remotes";
      } finally {
        T.value = !1;
      }
    }
    function te() {
      F.value = "add", P.value = { name: "", fetchUrl: "", pushUrl: "" }, K.value = !0;
    }
    function B(he) {
      const j = _.value.find((V) => V.name === he);
      j && (F.value = "edit", P.value = {
        name: j.name,
        fetchUrl: j.fetch_url,
        pushUrl: j.push_url
      }, K.value = !0);
    }
    async function A(he) {
      try {
        F.value === "add" ? await l(he.name, he.fetchUrl) : await c(he.name, he.fetchUrl, he.pushUrl || void 0), K.value = !1, await L();
      } catch (j) {
        D.value = j instanceof Error ? j.message : "Operation failed";
      }
    }
    function W() {
      K.value = !1, P.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(he) {
      G.value = he;
      try {
        await u(he);
        const j = await d(he);
        j && ($.value[he] = j), o("toast", `✓ Fetched from ${he}`, "success");
      } catch (j) {
        o("toast", j instanceof Error ? j.message : "Fetch failed", "error");
      } finally {
        G.value = null;
      }
    }
    async function U(he) {
      if (confirm(`Remove remote "${he}"?`))
        try {
          await i(he), await L();
        } catch (j) {
          D.value = j instanceof Error ? j.message : "Failed to remove remote";
        }
    }
    function ae() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const Z = k("idle"), _e = N(() => Z.value === "pull_preview"), be = N(
      () => Z.value === "resolving" || Z.value === "validating"
    ), De = N(
      () => Z.value === "validation_review" || Z.value === "executing"
    ), ze = k(!1), Ue = k(null), Ye = k(!1), ve = k(null), oe = k(!1), ce = k(null), ue = k(null), Ie = k(/* @__PURE__ */ new Map()), Pe = k(null), Fe = k(null), O = N(() => ce.value && Lr(ce.value) ? ce.value : null);
    async function R(he) {
      ve.value = he, Z.value = "pull_preview", oe.value = !0, ce.value = null, ue.value = null;
      try {
        ce.value = await m(he);
      } catch (j) {
        ue.value = j instanceof Error ? j.message : "Failed to load pull preview";
      } finally {
        oe.value = !1;
      }
    }
    function z() {
      Z.value = "idle", ce.value = null, ue.value = null, ve.value = null;
    }
    async function q(he) {
      if (!ve.value) return;
      Z.value = "executing", ue.value = null;
      const j = ve.value;
      try {
        const V = await v(j, he);
        if (V.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${V.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        Se(), Z.value = "idle", o("toast", `✓ Pulled from ${j}`, "success"), await L();
      } catch (V) {
        ue.value = V instanceof Error ? V.message : "Pull failed", Z.value = "pull_preview";
      }
    }
    function ne() {
      O.value && (Z.value = "resolving", Fe.value = null);
    }
    function re(he, j) {
      Ie.value.set(he, { name: he, resolution: j });
    }
    function $e() {
      Z.value = "pull_preview";
    }
    async function ie() {
      Z.value = "validating", Fe.value = null;
      try {
        const he = Array.from(Ie.value.values());
        Pe.value = await p(ve.value, he), Z.value = "validation_review";
      } catch (he) {
        Fe.value = he instanceof Error ? he.message : "Validation failed", Z.value = "resolving";
      }
    }
    async function we() {
      Z.value = "executing";
      const he = ve.value;
      try {
        const j = Array.from(Ie.value.values()), V = await v(he, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: j
        });
        if (V.rolled_back) {
          ue.value = `Pull failed and was rolled back: ${V.error || "Unknown error"}`, Z.value = "pull_preview";
          return;
        }
        Se(), Z.value = "idle", o("toast", `✓ Pulled from ${he}`, "success"), await L();
      } catch (j) {
        ue.value = j instanceof Error ? j.message : "Pull failed", Z.value = "validation_review";
      }
    }
    function ge() {
      Z.value = "resolving";
    }
    function Re() {
      Se(), Z.value = "idle";
    }
    function Se() {
      Ie.value.clear(), Pe.value = null, Fe.value = null, ue.value = null, ce.value = null, ve.value = null;
    }
    async function ee(he) {
      ve.value = he, ze.value = !0, oe.value = !0, Ue.value = null;
      try {
        Ue.value = await g(he);
      } catch (j) {
        D.value = j instanceof Error ? j.message : "Failed to load push preview";
      } finally {
        oe.value = !1;
      }
    }
    function Y() {
      ze.value = !1, Ue.value = null, ve.value = null;
    }
    async function Me(he) {
      if (!ve.value) return;
      Ye.value = !0;
      const j = ve.value;
      try {
        await w(j, he), Y(), o("toast", `✓ Pushed to ${j}`, "success"), await L();
      } catch (V) {
        o("toast", V instanceof Error ? V.message : "Push failed", "error");
      } finally {
        Ye.value = !1;
      }
    }
    function Ce() {
      const he = ve.value;
      Y(), he && R(he);
    }
    return Qe(L), (he, j) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (V) => I.value = !0)
          }, {
            actions: h(() => [
              K.value ? y("", !0) : (a(), M(de, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: h(() => [...j[3] || (j[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          K.value ? y("", !0) : (a(), M(So, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": j[1] || (j[1] = (V) => E.value = V),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          T.value ? (a(), M(Ms, {
            key: 0,
            message: "Loading remotes..."
          })) : D.value ? (a(), M(Ds, {
            key: 1,
            message: D.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            K.value ? (a(), M(Pb, {
              key: 0,
              mode: F.value,
              "remote-name": P.value.name,
              "fetch-url": P.value.fetchUrl,
              "push-url": P.value.pushUrl,
              onSubmit: A,
              onCancel: W
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !K.value ? (a(), M(un, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (a(), r("span", N$, " • Tracking: " + f(C.value.remote) + "/" + f(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            S.value.length && !K.value ? (a(), M(ct, {
              key: 2,
              title: "REMOTES",
              count: S.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(S.value, (V) => (a(), M(hb, {
                  key: V.name,
                  remote: V,
                  "sync-status": $.value[V.name],
                  "fetching-remote": G.value,
                  onFetch: X,
                  onEdit: B,
                  onRemove: U,
                  onPull: R,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !S.value.length && !K.value ? (a(), M(as, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                x(de, {
                  variant: "primary",
                  onClick: te
                }, {
                  default: h(() => [...j[4] || (j[4] = [
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
      x(ls, {
        show: I.value,
        title: "About Git Remotes",
        onClose: j[2] || (j[2] = (V) => I.value = !1)
      }, {
        content: h(() => [...j[5] || (j[5] = [
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
            onClick: ae
          }, {
            default: h(() => [...j[6] || (j[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x(m2, {
        show: _e.value,
        "remote-name": ve.value || "",
        preview: ce.value,
        loading: oe.value,
        pulling: Z.value === "executing",
        error: ue.value,
        "conflict-resolutions": Ie.value,
        onClose: z,
        onPull: q,
        onOpenConflictResolution: ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      x(U2, {
        show: ze.value,
        "remote-name": ve.value || "",
        preview: Ue.value,
        loading: oe.value,
        pushing: Ye.value,
        onClose: Y,
        onPush: Me,
        onPullFirst: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      be.value && O.value ? (a(), M(p$, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: Ie.value,
        "operation-type": "pull",
        validating: Z.value === "validating",
        error: Fe.value,
        onClose: $e,
        onResolve: re,
        onApply: ie
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      De.value && Pe.value ? (a(), M(O$, {
        key: 1,
        validation: Pe.value,
        "operation-type": "pull",
        executing: Z.value === "executing",
        onProceed: we,
        onGoBack: ge,
        onCancel: Re
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), z$ = /* @__PURE__ */ pe(U$, [["__scopeId", "data-v-9ae3b76d"]]), F$ = { class: "setting-info" }, B$ = { class: "setting-label" }, V$ = {
  key: 0,
  class: "required-marker"
}, W$ = {
  key: 0,
  class: "setting-description"
}, G$ = { class: "setting-control" }, j$ = /* @__PURE__ */ fe({
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
      t("div", F$, [
        t("div", B$, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), r("span", V$, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", W$, f(e.description), 1)) : y("", !0)
      ]),
      t("div", G$, [
        Ke(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Do = /* @__PURE__ */ pe(j$, [["__scopeId", "data-v-cb5d236c"]]), H$ = { class: "toggle" }, K$ = ["checked", "disabled"], q$ = /* @__PURE__ */ fe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", H$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, K$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ei = /* @__PURE__ */ pe(q$, [["__scopeId", "data-v-71c0f550"]]), Y$ = { class: "workspace-settings-content" }, J$ = { class: "settings-section" }, Q$ = { class: "path-setting" }, X$ = { class: "path-value" }, Z$ = { class: "path-setting" }, eC = { class: "path-value" }, tC = { class: "settings-section" }, sC = { class: "settings-section" }, oC = { class: "settings-section" }, nC = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = tt(), u = k(!1), d = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(""), C = k(!1), $ = k(!1), T = k(!1), D = k(!0);
    function E(te) {
      return te.join(" ");
    }
    function I(te) {
      return te.trim() ? te.trim().split(/\s+/) : [];
    }
    const G = N(() => {
      if (!g.value) return !1;
      const te = C.value, B = $.value, A = _.value !== E(g.value.comfyui_extra_args || []);
      return te || B || A;
    });
    async function K() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", _.value = E(v.value.comfyui_extra_args || []), C.value = !1, $.value = !1;
        const te = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = te !== "false", D.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (te) {
        d.value = te instanceof Error ? te.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function F() {
      var te;
      m.value = null;
      try {
        const B = {};
        C.value && (B.civitai_api_key = w.value || null), $.value && (B.huggingface_token = p.value || null), _.value !== E(((te = g.value) == null ? void 0 : te.comfyui_extra_args) || []) && (B.comfyui_extra_args = I(_.value)), await c(B, n.workspacePath || void 0), await K(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (B) {
        const A = B instanceof Error ? B.message : "Failed to save settings";
        m.value = { type: "error", message: A }, l("error", A);
      }
    }
    function P() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = g.value.huggingface_token || "", _.value = E(g.value.comfyui_extra_args || []), C.value = !1, $.value = !1, m.value = null);
    }
    function S(te) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(te)), console.log("[ComfyGit] Auto-refresh setting saved:", te);
    }
    function L(te) {
      te ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", te ? "enabled" : "disabled");
    }
    return s({
      saveSettings: F,
      resetSettings: P,
      hasChanges: G,
      loadSettings: K
    }), Qe(K), (te, B) => (a(), r("div", Y$, [
      u.value ? (a(), M(Ms, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), M(Ds, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: K
      }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
        x(ct, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var A, W;
            return [
              t("div", J$, [
                t("div", Q$, [
                  B[7] || (B[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  B[8] || (B[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", X$, f(((A = v.value) == null ? void 0 : A.workspace_path) || "Loading..."), 1)
                ]),
                t("div", Z$, [
                  B[9] || (B[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  B[10] || (B[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", eC, f(((W = v.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        x(ct, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", tC, [
              x(Do, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  x(Ko, {
                    modelValue: w.value,
                    "onUpdate:modelValue": B[0] || (B[0] = (A) => w.value = A),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: B[1] || (B[1] = (A) => C.value = !0)
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
                    "onUpdate:modelValue": B[2] || (B[2] = (A) => p.value = A),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: B[3] || (B[3] = (A) => $.value = !0)
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
            t("div", sC, [
              x(Do, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  x(Ko, {
                    modelValue: _.value,
                    "onUpdate:modelValue": B[4] || (B[4] = (A) => _.value = A),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              B[11] || (B[11] = t("div", { class: "setting-hint" }, [
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
        x(ct, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", oC, [
              x(Do, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  x(ei, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      B[5] || (B[5] = (A) => T.value = A),
                      S
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
                    modelValue: D.value,
                    "onUpdate:modelValue": [
                      B[6] || (B[6] = (A) => D.value = A),
                      L
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), M(un, {
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
}), Ar = /* @__PURE__ */ pe(nC, [["__scopeId", "data-v-9c5b427b"]]), aC = /* @__PURE__ */ fe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Dt, null, {
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
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), M(de, {
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
        x(Ar, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), lC = { class: "base-tabs" }, iC = ["disabled", "onClick"], rC = {
  key: 0,
  class: "base-tabs__badge"
}, cC = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", lC, [
      (a(!0), r(H, null, ye(e.tabs, (u) => (a(), r("button", {
        key: u.id,
        class: Ee([
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
        u.badge ? (a(), r("span", rC, f(u.badge), 1)) : y("", !0)
      ], 10, iC))), 128))
    ]));
  }
}), Or = /* @__PURE__ */ pe(cC, [["__scopeId", "data-v-ad5e6cad"]]), uC = { class: "log-viewer-wrapper" }, dC = ["disabled", "title"], fC = /* @__PURE__ */ fe({
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
    return (m, v) => (a(), r("div", uC, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, dC),
        (a(!0), r(H, null, ye(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Ee(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Nr = /* @__PURE__ */ pe(fC, [["__scopeId", "data-v-c0cc6d21"]]), mC = /* @__PURE__ */ fe({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = tt(), c = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = N(() => c.value === "workspace" ? g.value : w.value);
    async function C() {
      d.value = !0, m.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await n(void 0, 500);
      } catch (D) {
        m.value = D instanceof Error ? D.message : `Failed to load ${c.value} logs`;
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
    async function T() {
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
    return ft(c, () => {
      C();
    }), Qe(() => {
      C(), $();
    }), (D, E) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (I) => v.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "secondary",
                size: "sm",
                onClick: T,
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
                onClick: C,
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
          x(Or, {
            modelValue: c.value,
            "onUpdate:modelValue": E[1] || (E[1] = (I) => c.value = I),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), M(Ms, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), M(Ds, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            u.value.length === 0 ? (a(), M(as, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), M(Nr, {
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
        onClose: E[3] || (E[3] = (I) => v.value = !1)
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
            onClick: E[2] || (E[2] = (I) => v.value = !1)
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
}), vC = /* @__PURE__ */ fe({
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
    }), (C, $) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (T) => d.value = !0)
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
          c.value ? (a(), M(Ms, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), M(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            i.value.length === 0 ? (a(), M(as, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), M(Nr, {
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
        onClose: $[2] || ($[2] = (T) => d.value = !1)
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
            onClick: $[1] || ($[1] = (T) => d.value = !1)
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
}), pC = { class: "env-title" }, gC = {
  key: 0,
  class: "current-badge"
}, hC = {
  key: 0,
  class: "branch-info"
}, yC = /* @__PURE__ */ fe({
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
    return (s, o) => (a(), M(Mt, {
      status: e.isCurrent ? "synced" : void 0
    }, no({
      icon: h(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", pC, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", gC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", hC, [
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
          e.lastUsed && e.showLastUsed ? (a(), M(mt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), wC = /* @__PURE__ */ pe(yC, [["__scopeId", "data-v-9231917a"]]), _C = { class: "env-details" }, kC = { class: "status-row" }, bC = {
  key: 0,
  class: "detail-row"
}, $C = { class: "value mono" }, CC = {
  key: 1,
  class: "detail-row"
}, xC = { class: "value mono small" }, SC = { class: "detail-row" }, IC = { class: "value" }, EC = { class: "detail-row" }, TC = { class: "value" }, PC = { class: "detail-row" }, RC = { class: "value" }, MC = {
  key: 2,
  class: "section-divider"
}, DC = {
  key: 3,
  class: "detail-row"
}, LC = { class: "value" }, AC = {
  key: 4,
  class: "detail-row"
}, OC = { class: "value" }, NC = { class: "footer-actions" }, UC = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), M(ut, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", _C, [
          t("div", kC, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ee(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", bC, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", $C, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", CC, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", xC, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", SC, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", IC, f(e.environment.workflow_count), 1)
          ]),
          t("div", EC, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", TC, f(e.environment.node_count), 1)
          ]),
          t("div", PC, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", RC, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", MC)) : y("", !0),
          e.environment.created_at ? (a(), r("div", DC, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", LC, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", AC, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", OC, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", NC, [
          e.canDelete ? (a(), M(Te, {
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
          x(Te, {
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
}), zC = /* @__PURE__ */ pe(UC, [["__scopeId", "data-v-59855453"]]), Ur = [
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
], Fr = "auto", FC = { class: "progress-bar" }, BC = /* @__PURE__ */ fe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", FC, [
      t("div", {
        class: Ee(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), sa = /* @__PURE__ */ pe(BC, [["__scopeId", "data-v-1beb0512"]]), VC = { class: "task-progress" }, WC = { class: "progress-info" }, GC = { class: "progress-percentage" }, jC = { class: "progress-message" }, HC = {
  key: 0,
  class: "progress-steps"
}, KC = { class: "step-icon" }, qC = { class: "step-label" }, YC = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), r("div", VC, [
      x(sa, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", WC, [
        t("span", GC, f(e.progress) + "%", 1),
        t("span", jC, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", HC, [
        (a(!0), r(H, null, ye(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Ee(["step", o(c.id)])
        }, [
          t("span", KC, f(n(c.id)), 1),
          t("span", qC, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Bn = /* @__PURE__ */ pe(YC, [["__scopeId", "data-v-9d1de66c"]]), JC = {
  key: 0,
  class: "create-env-form"
}, QC = { class: "form-field" }, XC = { class: "form-field" }, ZC = ["value"], ex = { class: "form-field" }, tx = ["disabled"], sx = ["value"], ox = { class: "form-field" }, nx = ["value"], ax = { class: "form-field form-field--checkbox" }, lx = { class: "form-checkbox" }, ix = {
  key: 1,
  class: "create-env-progress"
}, rx = { class: "creating-intro" }, cx = {
  key: 0,
  class: "progress-warning"
}, ux = {
  key: 1,
  class: "create-error"
}, dx = { class: "error-message" }, fx = {
  key: 1,
  class: "footer-status"
}, mx = 10, vx = /* @__PURE__ */ fe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = tt(), c = k(""), u = k(zr), d = k("latest"), m = k(Fr), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let C = null, $ = 0;
    const T = [
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
    async function I() {
      const S = c.value.trim();
      if (S) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const L = {
            name: S,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, te = await l(L);
          te.status === "started" ? G() : te.status === "error" && (_.value = {
            progress: 0,
            message: te.message || "Failed to start creation",
            error: te.message
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
    function G() {
      C || ($ = 0, C = window.setInterval(async () => {
        try {
          const S = await i();
          $ = 0, _.value = {
            progress: S.progress ?? 0,
            message: S.message,
            phase: S.phase,
            error: S.error
          }, S.state === "complete" ? (K(), o("created", S.environment_name || c.value.trim(), v.value)) : S.state === "error" ? (K(), _.value.error = S.error || S.message) : S.state === "idle" && p.value && (K(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= mx && (K(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      C && (clearInterval(C), C = null);
    }
    function F() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function P() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (S) {
        console.error("Failed to load ComfyUI releases:", S);
      } finally {
        w.value = !1;
      }
    }
    return Qe(async () => {
      var S;
      await ht(), (S = D.value) == null || S.focus(), P();
    }), Gs(() => {
      K();
    }), (S, L) => (a(), M(ut, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: E
    }, {
      body: h(() => [
        p.value ? (a(), r("div", ix, [
          t("p", rx, [
            L[11] || (L[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            L[12] || (L[12] = b("... ", -1))
          ]),
          x(Bn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: T
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", cx, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", ux, [
            t("p", dx, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", JC, [
          t("div", QC, [
            L[6] || (L[6] = t("label", { class: "form-label" }, "Name", -1)),
            qe(t("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": L[0] || (L[0] = (te) => c.value = te),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Ht(I, ["enter"])
            }, null, 544), [
              [zt, c.value]
            ])
          ]),
          t("div", XC, [
            L[7] || (L[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[1] || (L[1] = (te) => u.value = te),
              class: "form-select"
            }, [
              (a(!0), r(H, null, ye(We(Ur), (te) => (a(), r("option", {
                key: te,
                value: te
              }, f(te), 9, ZC))), 128))
            ], 512), [
              [hs, u.value]
            ])
          ]),
          t("div", ex, [
            L[8] || (L[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[2] || (L[2] = (te) => d.value = te),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(H, null, ye(g.value, (te) => (a(), r("option", {
                key: te.tag_name,
                value: te.tag_name
              }, f(te.name), 9, sx))), 128))
            ], 8, tx), [
              [hs, d.value]
            ])
          ]),
          t("div", ox, [
            L[9] || (L[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            qe(t("select", {
              "onUpdate:modelValue": L[3] || (L[3] = (te) => m.value = te),
              class: "form-select"
            }, [
              (a(!0), r(H, null, ye(We(ll), (te) => (a(), r("option", {
                key: te,
                value: te
              }, f(te) + f(te === "auto" ? " (detect GPU)" : ""), 9, nx))), 128))
            ], 512), [
              [hs, m.value]
            ])
          ]),
          t("div", ax, [
            t("label", lx, [
              qe(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": L[4] || (L[4] = (te) => v.value = te)
              }, null, 512), [
                [nn, v.value]
              ]),
              L[10] || (L[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(H, { key: 1 }, [
          _.value.error ? (a(), M(Te, {
            key: 0,
            variant: "secondary",
            onClick: F
          }, {
            default: h(() => [...L[15] || (L[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", fx, " Creating environment... "))
        ], 64)) : (a(), r(H, { key: 0 }, [
          x(Te, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: I
          }, {
            default: h(() => [...L[13] || (L[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Te, {
            variant: "secondary",
            onClick: L[5] || (L[5] = (te) => o("close"))
          }, {
            default: h(() => [...L[14] || (L[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), px = /* @__PURE__ */ pe(vx, [["__scopeId", "data-v-f37eaa42"]]), gx = /* @__PURE__ */ fe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = tt(), i = k([]), c = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), g = k(null), w = N(() => {
      if (!d.value.trim()) return i.value;
      const D = d.value.toLowerCase();
      return i.value.filter(
        (E) => {
          var I;
          return E.name.toLowerCase().includes(D) || ((I = E.current_branch) == null ? void 0 : I.toLowerCase().includes(D));
        }
      );
    });
    function p(D, E) {
      v.value = !1, n("created", D, E);
    }
    function _() {
      v.value = !0;
    }
    function C(D) {
      g.value = D;
    }
    function $(D) {
      g.value = null, n("delete", D);
    }
    async function T() {
      c.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return Qe(T), s({
      loadEnvironments: T,
      openCreateModal: _
    }), (D, E) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (I) => m.value = !0)
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
                onClick: T
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
          x(So, {
            modelValue: d.value,
            "onUpdate:modelValue": E[1] || (E[1] = (I) => d.value = I),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), M(Ms, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), M(Ds, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (a(), r(H, { key: 2 }, [
            w.value.length ? (a(), M(ct, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(H, null, ye(w.value, (I) => (a(), M(wC, {
                  key: I.name,
                  "environment-name": I.name,
                  "is-current": I.is_current,
                  "current-branch": I.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    I.is_current ? y("", !0) : (a(), M(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => D.$emit("switch", I.name)
                    }, {
                      default: h(() => [...E[8] || (E[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    x(de, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => C(I)
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
            w.value.length ? y("", !0) : (a(), M(as, {
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
      x(ls, {
        show: m.value,
        title: "About Environments",
        onClose: E[3] || (E[3] = (I) => m.value = !1)
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
            onClick: E[2] || (E[2] = (I) => m.value = !1)
          }, {
            default: h(() => [...E[12] || (E[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), M(zC, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: E[4] || (E[4] = (I) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(px, {
        key: 1,
        onClose: E[5] || (E[5] = (I) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), hx = /* @__PURE__ */ pe(gx, [["__scopeId", "data-v-f95999f4"]]), yx = { class: "file-path" }, wx = { class: "file-path-text" }, _x = ["title"], kx = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), r("div", yx, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", wx, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, _x)) : y("", !0)
    ]));
  }
}), bx = /* @__PURE__ */ pe(kx, [["__scopeId", "data-v-f0982173"]]), $x = { class: "export-blocked" }, Cx = { class: "issues-list" }, xx = { class: "issue-message" }, Sx = {
  key: 0,
  class: "issue-details"
}, Ix = ["onClick"], Ex = { class: "issue-fix" }, Tx = /* @__PURE__ */ fe({
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
    return (l, i) => (a(), M(ut, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", $x, [
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
          t("div", Cx, [
            (a(!0), r(H, null, ye(e.issues, (c, u) => (a(), r("div", {
              key: u,
              class: "issue-item"
            }, [
              t("div", xx, f(c.message), 1),
              c.details.length ? (a(), r("div", Sx, [
                (a(!0), r(H, null, ye(n(u), (d, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                c.details.length > 3 && !o[u] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, Ix)) : y("", !0)
              ])) : y("", !0),
              t("div", Ex, [
                c.type === "uncommitted_workflows" ? (a(), r(H, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(H, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(H, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
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
            b(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Br = /* @__PURE__ */ pe(Tx, [["__scopeId", "data-v-b52f5e32"]]), Px = { class: "export-warnings" }, Rx = {
  key: 0,
  class: "success-header"
}, Mx = { class: "warning-header" }, Dx = { class: "warning-summary" }, Lx = { class: "warning-title" }, Ax = { class: "models-section" }, Ox = { class: "models-list" }, Nx = { class: "model-info" }, Ux = { class: "model-filename" }, zx = { class: "model-workflows" }, Fx = ["onClick"], Bx = /* @__PURE__ */ fe({
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
      x(ut, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", Px, [
            e.models.length === 0 ? (a(), r("div", Rx, [...m[4] || (m[4] = [
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
              t("div", Mx, [
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
                t("div", Dx, [
                  t("h3", Lx, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", Ax, [
                t("div", Ox, [
                  (a(!0), r(H, null, ye(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", Nx, [
                      t("div", Ux, f(v.filename), 1),
                      t("div", zx, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, Fx)
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
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          x(Te, {
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
      i.value ? (a(), M(nl, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Vr = /* @__PURE__ */ pe(Bx, [["__scopeId", "data-v-b698d882"]]), Vx = { class: "export-card" }, Wx = { class: "export-path-row" }, Gx = { class: "export-actions" }, jx = {
  key: 1,
  class: "export-warning"
}, Hx = /* @__PURE__ */ fe({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = tt(), n = k(""), l = k(!1), i = k(!1), c = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), g = k(!1), w = N(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
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
    async function C() {
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
    async function T() {
      var E;
      if ((E = u.value) != null && E.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (I) {
          console.error("Failed to copy path:", I);
        }
    }
    async function D() {
      var E;
      if ((E = u.value) != null && E.path) {
        c.value = !0;
        try {
          const I = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!I.ok)
            throw new Error(`Download failed: ${I.statusText}`);
          const G = await I.blob(), K = URL.createObjectURL(G), F = u.value.path.split("/").pop() || "environment-export.tar.gz", P = document.createElement("a");
          P.href = K, P.download = F, document.body.appendChild(P), P.click(), document.body.removeChild(P), URL.revokeObjectURL(K);
        } catch (I) {
          console.error("Failed to download:", I), alert(`Download failed: ${I instanceof Error ? I.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (E, I) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (G) => d.value = !0)
          })
        ]),
        content: h(() => [
          x(ct, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", Vx, [
                I[7] || (I[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", Wx, [
                  x(Ko, {
                    modelValue: n.value,
                    "onUpdate:modelValue": I[1] || (I[1] = (G) => n.value = G),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Gx, [
                  x(de, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      I[6] || (I[6] = t("svg", {
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
          u.value ? (a(), M(ct, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              x(Mt, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, no({
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
                    x(mt, { label: "Saved to:" }, {
                      default: h(() => [
                        x(bx, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), M(mt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), r("div", jx, [...I[8] || (I[8] = [
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
                      onClick: D
                    }, {
                      default: h(() => [...I[9] || (I[9] = [
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
                      onClick: T
                    }, {
                      default: h(() => [...I[10] || (I[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    x(de, {
                      variant: "ghost",
                      size: "sm",
                      onClick: I[2] || (I[2] = (G) => u.value = null)
                    }, {
                      default: h(() => [...I[11] || (I[11] = [
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
      x(ls, {
        show: d.value,
        title: "What Gets Exported",
        onClose: I[3] || (I[3] = (G) => d.value = !1)
      }, {
        content: h(() => [...I[12] || (I[12] = [
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
      v.value && m.value ? (a(), M(Br, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: I[4] || (I[4] = (G) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), M(Vr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: I[5] || (I[5] = (G) => g.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), Kx = /* @__PURE__ */ pe(Hx, [["__scopeId", "data-v-f4d120f2"]]), qx = { class: "file-input-wrapper" }, Yx = ["accept", "multiple", "disabled"], Jx = /* @__PURE__ */ fe({
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
    }), (u, d) => (a(), r("div", qx, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, Yx),
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
}), Qx = /* @__PURE__ */ pe(Jx, [["__scopeId", "data-v-cd192091"]]), Xx = {
  key: 0,
  class: "drop-zone-empty"
}, Zx = { class: "drop-zone-text" }, e3 = { class: "drop-zone-primary" }, t3 = { class: "drop-zone-secondary" }, s3 = { class: "drop-zone-actions" }, o3 = {
  key: 1,
  class: "drop-zone-file"
}, n3 = { class: "file-info" }, a3 = { class: "file-details" }, l3 = { class: "file-name" }, i3 = { class: "file-size" }, r3 = /* @__PURE__ */ fe({
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
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = N(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m($) {
      var T;
      $.stopPropagation(), i.value++, (T = $.dataTransfer) != null && T.types.includes("Files") && (n.value = !0);
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
      const T = (D = $.dataTransfer) == null ? void 0 : D.files;
      T && T.length > 0 && _(T[0]);
    }
    function p($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function C() {
      l.value = null, o("clear");
    }
    return ($, T) => (a(), r("div", {
      class: Ee(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: rt(m, ["prevent"]),
      onDragover: rt(v, ["prevent"]),
      onDragleave: rt(g, ["prevent"]),
      onDrop: rt(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", o3, [
        t("div", n3, [
          T[1] || (T[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", a3, [
            t("div", l3, f(u.value), 1),
            t("div", i3, f(d.value), 1)
          ])
        ]),
        x(de, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...T[2] || (T[2] = [
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
      ])) : (a(), r("div", Xx, [
        T[0] || (T[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", Zx, [
          t("p", e3, f(e.primaryText), 1),
          t("p", t3, f(e.secondaryText), 1)
        ]),
        t("div", s3, [
          x(Qx, {
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
}), c3 = /* @__PURE__ */ pe(r3, [["__scopeId", "data-v-0f79cb86"]]), u3 = { class: "import-preview" }, d3 = { class: "preview-header" }, f3 = {
  key: 0,
  class: "source-env"
}, m3 = { class: "preview-content" }, v3 = { class: "preview-section" }, p3 = { class: "section-header" }, g3 = { class: "section-info" }, h3 = { class: "section-count" }, y3 = {
  key: 0,
  class: "item-list"
}, w3 = { class: "item-name" }, _3 = {
  key: 0,
  class: "item-more"
}, k3 = { class: "preview-section" }, b3 = { class: "section-header" }, $3 = { class: "section-info" }, C3 = { class: "section-count" }, x3 = {
  key: 0,
  class: "item-list"
}, S3 = { class: "item-details" }, I3 = { class: "item-name" }, E3 = { class: "item-meta" }, T3 = {
  key: 0,
  class: "item-more"
}, P3 = { class: "preview-section" }, R3 = { class: "section-header" }, M3 = { class: "section-info" }, D3 = { class: "section-count" }, L3 = {
  key: 0,
  class: "item-list"
}, A3 = { class: "item-name" }, O3 = {
  key: 0,
  class: "item-more"
}, N3 = {
  key: 0,
  class: "preview-section"
}, U3 = { class: "git-info" }, z3 = /* @__PURE__ */ fe({
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
    return (c, u) => (a(), r("div", u3, [
      t("div", d3, [
        x(Nt, null, {
          default: h(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", f3, [
          u[1] || (u[1] = b(" From: ", -1)),
          x(Da, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", m3, [
        t("div", v3, [
          t("div", p3, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", g3, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", h3, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", y3, [
            (a(!0), r(H, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", w3, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", _3, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", k3, [
          t("div", b3, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", $3, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", C3, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", x3, [
            (a(!0), r(H, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", S3, [
                t("span", I3, f(d.filename), 1),
                t("span", E3, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", T3, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", P3, [
          t("div", R3, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", M3, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", D3, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", L3, [
            (a(!0), r(H, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), r("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", A3, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", O3, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", N3, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", U3, [
            e.gitBranch ? (a(), M(mt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                x(Da, null, {
                  default: h(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), M(mt, {
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
}), F3 = /* @__PURE__ */ pe(z3, [["__scopeId", "data-v-182fe113"]]), B3 = { class: "import-config" }, V3 = { class: "config-container" }, W3 = { class: "config-field" }, G3 = { class: "input-wrapper" }, j3 = ["value"], H3 = {
  key: 0,
  class: "validating-indicator"
}, K3 = {
  key: 1,
  class: "valid-indicator"
}, q3 = {
  key: 0,
  class: "field-error"
}, Y3 = { class: "config-field" }, J3 = { class: "strategy-options" }, Q3 = ["value", "checked", "onChange"], X3 = { class: "strategy-content" }, Z3 = { class: "strategy-label" }, e5 = { class: "strategy-description" }, t5 = { class: "config-field switch-field" }, s5 = { class: "switch-label" }, o5 = ["checked"], n5 = { class: "advanced-section" }, a5 = { class: "advanced-content" }, l5 = { class: "config-field" }, i5 = ["value"], r5 = ["value"], c5 = /* @__PURE__ */ fe({
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
    return (v, g) => (a(), r("div", B3, [
      x(Nt, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", V3, [
        t("div", W3, [
          x(Tn, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", G3, [
            t("input", {
              type: "text",
              class: Ee(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, j3),
            l.value ? (a(), r("span", H3, "...")) : i.value ? (a(), r("span", K3, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", q3, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", Y3, [
          x(Tn, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", J3, [
            (a(), r(H, null, ye(c, (w) => t("label", {
              key: w.value,
              class: Ee(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, Q3),
              t("div", X3, [
                t("span", Z3, f(w.label), 1),
                t("span", e5, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", t5, [
          t("label", s5, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, o5),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", n5, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", a5, [
            t("div", l5, [
              x(Tn, null, {
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
                (a(!0), r(H, null, ye(We(ll), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, r5))), 128))
              ], 40, i5)
            ])
          ])
        ])
      ])
    ]));
  }
}), u5 = /* @__PURE__ */ pe(c5, [["__scopeId", "data-v-89ea06a1"]]), d5 = { class: "import-flow" }, f5 = {
  key: 0,
  class: "import-empty"
}, m5 = { class: "git-import-section" }, v5 = { class: "git-url-input-row" }, p5 = ["disabled"], g5 = {
  key: 0,
  class: "git-error"
}, h5 = {
  key: 1,
  class: "import-configure"
}, y5 = { class: "selected-file-bar" }, w5 = {
  key: 0,
  class: "file-bar-content"
}, _5 = { class: "file-bar-info" }, k5 = { class: "file-bar-name" }, b5 = { class: "file-bar-size" }, $5 = {
  key: 1,
  class: "file-bar-content"
}, C5 = { class: "file-bar-info" }, x5 = { class: "file-bar-name" }, S5 = {
  key: 0,
  class: "preview-loading"
}, I5 = { class: "import-actions" }, E5 = {
  key: 2,
  class: "import-progress"
}, T5 = { class: "creating-intro" }, P5 = {
  key: 0,
  class: "progress-warning"
}, R5 = {
  key: 1,
  class: "import-error"
}, M5 = { class: "error-message" }, D5 = {
  key: 3,
  class: "import-complete"
}, L5 = { class: "complete-message" }, A5 = { class: "complete-title" }, O5 = { class: "complete-details" }, N5 = { class: "complete-actions" }, U5 = /* @__PURE__ */ fe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ye, ve, oe, ce;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = tt();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), $ = k(""), T = k(!1), D = k(null), E = k(""), I = k(null), G = k(!1), K = k(null), F = k(null), P = k({
      name: ((Ye = n.initialProgress) == null ? void 0 : Ye.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), S = k(null), L = k({
      message: ((ve = n.initialProgress) == null ? void 0 : ve.message) ?? "Preparing import...",
      phase: ((oe = n.initialProgress) == null ? void 0 : oe.phase) ?? "",
      progress: ((ce = n.initialProgress) == null ? void 0 : ce.progress) ?? 0,
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
    ], B = N(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ue = F.value;
      return {
        sourceEnvironment: ue.comfyui_version ? `ComfyUI ${ue.comfyui_version}` : "Unknown",
        workflows: ue.workflows.map((Ie) => Ie.name),
        models: ue.models.map((Ie) => ({
          filename: Ie.filename,
          size: 0,
          type: Ie.relative_path.split("/")[0] || "model"
        })),
        nodes: ue.nodes.map((Ie) => Ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), A = N(() => !T.value && !D.value && F.value && P.value.name.length > 0 && !S.value && (w.value || I.value));
    async function W(ue) {
      w.value = ue, T.value = !0, D.value = null, F.value = null;
      try {
        const Ie = await i(ue);
        F.value = Ie;
      } catch (Ie) {
        D.value = Ie instanceof Error ? Ie.message : "Failed to analyze file", console.error("Preview error:", Ie);
      } finally {
        T.value = !1;
      }
    }
    function X() {
      w.value = null, I.value = null, E.value = "", K.value = null, _.value = !1, C.value = !1, $.value = "", F.value = null, D.value = null, P.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, S.value = null, l("source-cleared");
    }
    function U() {
      ze(), X(), p.value = !1, T.value = !1, G.value = !1, L.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ae() {
      if (E.value.trim()) {
        G.value = !0, K.value = null;
        try {
          const ue = await c(E.value.trim());
          I.value = E.value.trim(), F.value = ue;
        } catch (ue) {
          K.value = ue instanceof Error ? ue.message : "Failed to analyze repository";
        } finally {
          G.value = !1;
        }
      }
    }
    function Z(ue) {
      try {
        const Ie = new URL(ue);
        return Ie.host + Ie.pathname.replace(/\.git$/, "");
      } catch {
        return ue;
      }
    }
    async function _e(ue) {
      if (!ue) {
        S.value = "Environment name is required";
        return;
      }
      try {
        const Ie = await u(ue);
        S.value = Ie.valid ? null : Ie.error || "Invalid name";
      } catch {
        S.value = "Failed to validate name";
      }
    }
    async function be() {
      if (P.value.name && !(!w.value && !I.value)) {
        p.value = !0, _.value = !1, L.value = { message: `Creating environment '${P.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ue;
          if (w.value)
            ue = await d(
              w.value,
              P.value.name,
              P.value.modelStrategy,
              P.value.torchBackend
            );
          else if (I.value)
            ue = await m(
              I.value,
              P.value.name,
              P.value.modelStrategy,
              P.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ue.status === "started" ? De() : (C.value = !1, $.value = ue.message, p.value = !1, _.value = !0);
        } catch (ue) {
          C.value = !1, $.value = ue instanceof Error ? ue.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function De() {
      if (g) return;
      const ue = async () => {
        try {
          const Pe = await v();
          return L.value = {
            message: Pe.message,
            phase: Pe.phase || "",
            progress: Pe.progress ?? (Pe.state === "importing" ? 50 : 0),
            error: Pe.error || null
          }, Pe.state === "complete" ? (ze(), C.value = !0, $.value = `Environment '${Pe.environment_name}' created successfully`, p.value = !1, _.value = !0, Pe.environment_name && l("import-complete", Pe.environment_name, P.value.switchAfterImport), !1) : Pe.state === "error" ? (ze(), C.value = !1, $.value = Pe.error || Pe.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Pe) {
          return console.error("Failed to poll import progress:", Pe), !0;
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
        console.log("[ComfyGit ImportFlow] Import progress check:", ue.state, ue), ue.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ue.environment_name), p.value = !0, P.value.name = ue.environment_name || P.value.name || "", L.value = {
          progress: ue.progress ?? 0,
          message: ue.message || "Importing...",
          phase: ue.phase || "",
          error: null
        }, De());
      } catch (ue) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ue);
      }
    }), s({
      handleReset: U,
      isImporting: p,
      canImport: A
    }), (ue, Ie) => {
      var Pe;
      return a(), r("div", d5, [
        !w.value && !I.value && !p.value ? (a(), r("div", f5, [
          x(c3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: W
          }),
          Ie[7] || (Ie[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", m5, [
            Ie[5] || (Ie[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", v5, [
              qe(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Ie[0] || (Ie[0] = (Fe) => E.value = Fe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ht(ae, ["enter"]),
                disabled: G.value
              }, null, 40, p5), [
                [zt, E.value]
              ]),
              x(de, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || G.value,
                onClick: ae
              }, {
                default: h(() => [
                  b(f(G.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            K.value ? (a(), r("div", g5, f(K.value), 1)) : y("", !0),
            Ie[6] || (Ie[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || I.value) && !p.value && !_.value ? (a(), r("div", h5, [
          t("div", y5, [
            w.value ? (a(), r("div", w5, [
              Ie[8] || (Ie[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", _5, [
                t("div", k5, f(w.value.name), 1),
                t("div", b5, f(Ue(w.value.size)), 1)
              ])
            ])) : I.value ? (a(), r("div", $5, [
              Ie[10] || (Ie[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", C5, [
                t("div", x5, f(Z(I.value)), 1),
                Ie[9] || (Ie[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            x(de, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: h(() => [...Ie[11] || (Ie[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          T.value ? (a(), r("div", S5, [...Ie[12] || (Ie[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : D.value ? (a(), M(Xt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [D.value]
          }, null, 8, ["details"])) : F.value ? (a(), M(F3, {
            key: 2,
            "source-environment": B.value.sourceEnvironment,
            workflows: B.value.workflows,
            models: B.value.models,
            nodes: B.value.nodes,
            "git-branch": B.value.gitBranch,
            "git-commit": B.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (a(), M(u5, {
            key: 3,
            name: P.value.name,
            "onUpdate:name": Ie[1] || (Ie[1] = (Fe) => P.value.name = Fe),
            "model-strategy": P.value.modelStrategy,
            "onUpdate:modelStrategy": Ie[2] || (Ie[2] = (Fe) => P.value.modelStrategy = Fe),
            "torch-backend": P.value.torchBackend,
            "onUpdate:torchBackend": Ie[3] || (Ie[3] = (Fe) => P.value.torchBackend = Fe),
            "switch-after-import": P.value.switchAfterImport,
            "onUpdate:switchAfterImport": Ie[4] || (Ie[4] = (Fe) => P.value.switchAfterImport = Fe),
            "name-error": S.value,
            onValidateName: _e
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          P.value.modelStrategy === "skip" && ((Pe = F.value) != null && Pe.models_needing_download) ? (a(), M(Xt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", I5, [
            x(de, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: h(() => [...Ie[13] || (Ie[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            x(de, {
              variant: "primary",
              size: "md",
              disabled: !A.value,
              onClick: be
            }, {
              default: h(() => [...Ie[14] || (Ie[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", E5, [
          t("p", T5, [
            Ie[15] || (Ie[15] = b(" Importing environment ", -1)),
            t("strong", null, f(P.value.name), 1),
            Ie[16] || (Ie[16] = b("... ", -1))
          ]),
          x(Bn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? y("", !0) : (a(), r("p", P5, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), r("div", R5, [
            t("p", M5, f(L.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", D5, [
          t("div", {
            class: Ee(["complete-icon", C.value ? "success" : "error"])
          }, f(C.value ? "✓" : "✕"), 3),
          t("div", L5, [
            t("div", A5, f(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", O5, f($.value), 1)
          ]),
          t("div", N5, [
            x(de, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: h(() => [...Ie[17] || (Ie[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Wr = /* @__PURE__ */ pe(U5, [["__scopeId", "data-v-72cbc04e"]]), z5 = /* @__PURE__ */ fe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(H, null, [
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
}), F5 = /* @__PURE__ */ pe(z5, [["__scopeId", "data-v-e13bfe76"]]), kn = mo(), B5 = 5e3, co = k([]), ha = k(!1), ya = k(null);
let Lo = null;
async function bn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Gr(e) {
  const s = N(
    () => co.value.filter((p) => p.status === "running")
  ), o = N(
    () => co.value.filter((p) => p.status === "deploying")
  ), n = N(
    () => co.value.filter((p) => p.status === "stopped")
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
          const $ = await C.json();
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
      if (!kn) {
        const _ = u(p, "start"), C = await bn(_, { method: "POST" });
        if (!C.ok) {
          const $ = await C.json();
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
      if (!kn) {
        const _ = u(p, "terminate"), C = await bn(_, { method: "DELETE" });
        if (!C.ok) {
          const $ = await C.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function g() {
    Lo || (Lo = window.setInterval(c, B5));
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
const V5 = { class: "instance-header" }, W5 = { class: "provider-badge" }, G5 = { class: "instance-name" }, j5 = {
  key: 0,
  class: "spinner"
}, H5 = { class: "instance-details" }, K5 = {
  key: 0,
  class: "detail"
}, q5 = {
  key: 1,
  class: "detail instance-url"
}, Y5 = {
  key: 2,
  class: "detail"
}, J5 = {
  key: 3,
  class: "detail"
}, Q5 = {
  key: 4,
  class: "detail total-cost"
}, X5 = {
  key: 0,
  class: "deployment-progress"
}, Z5 = { class: "progress-message" }, eS = { class: "instance-actions" }, tS = /* @__PURE__ */ fe({
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
      class: Ee(["instance-card", l.value])
    }, [
      t("div", V5, [
        t("span", W5, f(o.value), 1),
        t("span", G5, f(e.instance.name), 1),
        t("span", {
          class: Ee(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", j5)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", H5, [
        e.instance.gpu_type ? (a(), r("span", K5, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", q5, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", Y5, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", J5, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", Q5, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", X5, [
        t("div", Z5, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), M(sa, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", eS, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(de, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(de, {
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
        e.instance.status === "running" ? (a(), M(de, {
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
        e.instance.status === "stopped" ? (a(), M(de, {
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
}), sS = /* @__PURE__ */ pe(tS, [["__scopeId", "data-v-746c3894"]]), oS = { class: "instances-tab" }, nS = { class: "instances-header" }, aS = {
  key: 0,
  class: "loading-state"
}, lS = {
  key: 1,
  class: "empty-state"
}, iS = {
  key: 2,
  class: "instances-list"
}, rS = /* @__PURE__ */ fe({
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
    return (n, l) => (a(), r("div", oS, [
      t("div", nS, [
        x(Nt, null, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", aS, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", lS, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", iS, [
        (a(!0), r(H, null, ye(o.value, (i) => (a(), M(sS, {
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
}), cS = /* @__PURE__ */ pe(rS, [["__scopeId", "data-v-ba614fc3"]]), uS = { class: "remote-header" }, dS = { class: "remote-info" }, fS = { class: "remote-icon" }, mS = { class: "remote-name" }, vS = {
  key: 0,
  class: "default-badge"
}, pS = {
  key: 1,
  class: "sync-badge"
}, gS = {
  key: 0,
  class: "ahead"
}, hS = {
  key: 1,
  class: "behind"
}, yS = {
  key: 1,
  class: "synced"
}, wS = ["href"], _S = {
  key: 1,
  class: "remote-url-text"
}, kS = { class: "remote-actions" }, bS = /* @__PURE__ */ fe({
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
      t("div", uS, [
        t("div", dS, [
          t("span", fS, f(o.value ? "🔗" : "🌐"), 1),
          t("span", mS, f(e.remote.name), 1),
          o.value ? (a(), r("span", vS, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", pS, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", gS, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", hS, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", yS, "✓ synced"))
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
        }, f(l.value), 9, wS)) : (a(), r("span", _S, f(l.value), 1))
      ]),
      t("div", kS, [
        x(de, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(de, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        x(de, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), jr = /* @__PURE__ */ pe(bS, [["__scopeId", "data-v-d687d161"]]), $S = { class: "runpod-tab" }, CS = { class: "api-key-card" }, xS = { class: "api-key-row" }, SS = { class: "api-key-input-wrapper" }, IS = ["type", "disabled"], ES = ["title"], TS = { class: "status-icon" }, PS = { class: "status-text" }, RS = {
  key: 0,
  class: "credit-balance"
}, MS = { class: "config-card" }, DS = { class: "config-row" }, LS = ["disabled"], AS = {
  key: 0,
  value: ""
}, OS = {
  key: 1,
  value: "",
  disabled: ""
}, NS = ["value", "disabled"], US = { class: "config-row" }, zS = {
  key: 0,
  class: "loading-inline"
}, FS = { class: "no-volumes-state" }, BS = { class: "no-volumes-text" }, VS = ["value"], WS = { class: "config-row" }, GS = ["disabled"], jS = {
  key: 0,
  value: ""
}, HS = {
  key: 1,
  value: ""
}, KS = {
  key: 2,
  value: ""
}, qS = ["value"], YS = { class: "config-row" }, JS = { class: "radio-group" }, QS = { class: "radio-option" }, XS = { class: "radio-label" }, ZS = { class: "radio-option disabled" }, e8 = { class: "radio-label" }, t8 = { class: "config-row" }, s8 = { class: "radio-group" }, o8 = { class: "radio-option" }, n8 = { class: "radio-label" }, a8 = { class: "radio-option disabled" }, l8 = { class: "radio-label" }, i8 = { class: "config-row" }, r8 = {
  key: 0,
  class: "loading-text"
}, c8 = {
  key: 1,
  class: "empty-remotes"
}, u8 = { class: "remotes-list" }, d8 = {
  key: 0,
  class: "sync-warning"
}, f8 = { class: "warning-content" }, m8 = { class: "remotes-footer" }, v8 = { class: "summary-card" }, p8 = {
  key: 0,
  class: "loading-text"
}, g8 = { class: "summary-row" }, h8 = { class: "summary-value" }, y8 = { class: "summary-row" }, w8 = { class: "summary-value" }, _8 = { class: "summary-row" }, k8 = { class: "summary-value" }, b8 = {
  key: 0,
  class: "summary-sub-row"
}, $8 = { class: "summary-sub-label" }, C8 = {
  key: 1,
  class: "summary-sub-row warning"
}, x8 = { class: "summary-sub-label" }, S8 = { class: "summary-row" }, I8 = { class: "summary-value" }, E8 = { class: "summary-row" }, T8 = { class: "summary-value" }, P8 = { class: "deployment-summary" }, R8 = { class: "summary-columns" }, M8 = { class: "summary-column" }, D8 = { class: "pricing-row" }, L8 = { class: "pricing-value" }, A8 = { class: "pricing-row" }, O8 = { class: "pricing-value" }, N8 = { class: "pricing-row" }, U8 = { class: "pricing-value" }, z8 = { class: "pricing-row total" }, F8 = { class: "pricing-value" }, B8 = { class: "summary-column" }, V8 = { class: "spec-row" }, W8 = { class: "spec-row" }, G8 = {
  key: 0,
  class: "spec-row"
}, j8 = {
  key: 1,
  class: "spec-row spot-warning"
}, H8 = {
  key: 4,
  class: "deploy-actions"
}, K8 = { class: "progress-content" }, q8 = { class: "phase-indicator" }, Y8 = { key: 0 }, J8 = { key: 1 }, Q8 = { key: 2 }, X8 = {
  key: 3,
  class: "spinner"
}, Z8 = { class: "phase-text" }, e4 = { class: "phase-name" }, t4 = { class: "phase-detail" }, s4 = {
  key: 0,
  class: "ready-actions"
}, o4 = { class: "console-link" }, n4 = ["href"], a4 = /* @__PURE__ */ fe({
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
      getDataCenters: $
    } = tt(), T = k(!1), D = k(""), E = k(!1), I = k(!1), G = k(null), K = k(null), F = k(""), P = k(""), S = k(""), L = k("SECURE"), te = k("ON_DEMAND"), B = k("my-comfyui-deploy"), A = k([]), W = k({}), X = k(!1), U = k(null), ae = k(null), Z = k(null), _e = k([]), be = k(!1), De = k([]), ze = k(!1), Ue = k([]), Ye = k(!1), ve = k(null), oe = k(!1), ce = k(!1), ue = k(null), Ie = k(!1), Pe = k(null), Fe = k(null), O = k(null), R = k(!1), z = k(null), q = k(!1), ne = k(!1), re = N(() => De.value.find((xe) => xe.id === P.value) || null), $e = N(() => F.value ? De.value.filter((xe) => xe.data_center_id === F.value) : De.value), ie = N(() => Ue.value.filter((xe) => xe.available)), we = N(() => U.value && W.value[U.value] || null), ge = N(() => {
      if (!U.value) return null;
      const xe = A.value.find((se) => se.name === U.value);
      return (xe == null ? void 0 : xe.fetch_url) || null;
    }), Re = N(() => E.value && P.value && S.value && ge.value && !ce.value && !R.value), Se = (xe) => {
      const se = Ue.value.find((wt) => wt.id === S.value);
      if (!se) return "0.00";
      if (xe === "SECURE") return (se.securePrice ?? 0).toFixed(2);
      if (xe === "COMMUNITY") return (se.communityPrice ?? 0).toFixed(2);
      const He = L.value === "SECURE";
      return xe === "ON_DEMAND" ? He ? (se.securePrice ?? 0).toFixed(2) : (se.communityPrice ?? 0).toFixed(2) : He ? (se.secureSpotPrice ?? 0).toFixed(2) : (se.communitySpotPrice ?? 0).toFixed(2);
    }, ee = N(() => {
      const xe = Ue.value.find((rs) => rs.id === S.value), se = De.value.find((rs) => rs.id === P.value);
      if (!xe) return null;
      const He = L.value === "SECURE", wt = te.value === "SPOT";
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
    async function Y() {
      await Ve(), await Promise.all([It(), Me()]);
    }
    async function Me() {
      X.value = !0;
      try {
        const xe = await w();
        A.value = xe.remotes, await Promise.all(
          xe.remotes.map(async (He) => {
            const wt = await p(He.name);
            wt && (W.value[He.name] = wt);
          })
        );
        const se = xe.remotes.find((He) => He.is_default);
        se ? U.value = se.name : xe.remotes.length > 0 && (U.value = xe.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function Ce(xe) {
      ae.value = xe;
      try {
        await _(xe);
        const se = await p(xe);
        se && (W.value[xe] = se), o("toast", `Fetched from ${xe}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        ae.value = null;
      }
    }
    async function he(xe) {
      Z.value = xe;
      try {
        await C(xe, { force: !1 });
        const se = await p(xe);
        se && (W.value[xe] = se), o("toast", `Pushed to ${xe}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        Z.value = null;
      }
    }
    function j(xe) {
      U.value = xe;
    }
    async function V() {
      if (D.value) {
        I.value = !0, G.value = null;
        try {
          const xe = await l(D.value, !0);
          xe.status === "success" ? (E.value = !0, K.value = xe.credit_balance ?? null, G.value = { type: "success", message: xe.message }, await Y()) : G.value = { type: "error", message: xe.message };
        } catch (xe) {
          G.value = {
            type: "error",
            message: xe instanceof Error ? xe.message : "Connection test failed"
          };
        } finally {
          I.value = !1;
        }
      }
    }
    async function me() {
      try {
        await v(), D.value = "", E.value = !1, G.value = null, K.value = null, _e.value = [], F.value = "", De.value = [], P.value = "", Ue.value = [], S.value = "", ve.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      ze.value = !0, be.value = !0;
      try {
        const xe = await i();
        De.value = xe.volumes;
        const se = /* @__PURE__ */ new Map();
        for (const He of xe.volumes)
          He.data_center_id && !se.has(He.data_center_id) && se.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (xe.volumes.length === 0) {
          const He = await $();
          _e.value = He.data_centers;
        } else
          _e.value = Array.from(se.values());
        if (De.value.length > 0) {
          const He = De.value[0];
          P.value = He.id, He.data_center_id && (F.value = He.data_center_id, await Ze(He.data_center_id));
        } else _e.value.length > 0 && (F.value = _e.value[0].id);
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
        He ? S.value = He.id : S.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ye.value = !1;
      }
    }
    ft(F, async (xe) => {
      if (!xe || ze.value) return;
      const se = De.value.find((He) => He.id === P.value);
      se && se.data_center_id !== xe && (P.value = ""), await Ze(xe);
    }), ft(P, async (xe) => {
      if (!xe) {
        Ue.value = [], S.value = "";
        return;
      }
      if (ze.value) return;
      const se = De.value.find((He) => He.id === xe);
      se && se.data_center_id !== F.value ? F.value = se.data_center_id : se && await Ze(se.data_center_id);
    });
    async function It() {
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
      if (!(!S.value || !P.value)) {
        R.value = !0, ue.value = null;
        try {
          const xe = await g();
          z.value = xe, xe.can_export ? xe.warnings.models_without_sources.length > 0 ? ne.value = !0 : await yt() : q.value = !0;
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
      ce.value = !0;
      try {
        let xe;
        if (te.value === "SPOT") {
          const He = Ue.value.find((wt) => wt.id === S.value);
          He && (xe = L.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const se = await u({
          gpu_type_id: S.value,
          pod_name: B.value || "my-comfyui-deploy",
          network_volume_id: P.value,
          cloud_type: L.value,
          pricing_type: te.value,
          spot_bid: xe,
          import_source: ge.value
        });
        ue.value = se, se.status === "success" && se.pod_id ? (Pe.value = se.pod_id, Ie.value = !0, Io(se.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", se.message, "error");
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
      Ie.value = !1, is(), Pe.value = null, Fe.value = null;
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
        xe.has_key && xe.key_preview && (D.value = `****${xe.key_preview}`, xe.valid ? (E.value = !0, K.value = xe.credit_balance ?? null, G.value = { type: "success", message: "Connected to RunPod" }, await Y()) : xe.error && (G.value = { type: "error", message: xe.error }));
      } catch {
      }
    }), Gs(() => {
      is();
    }), (xe, se) => {
      var He, wt, Bt, ws, _s, rs;
      return a(), r(H, null, [
        t("div", $S, [
          x(ct, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", CS, [
                t("div", xS, [
                  t("div", SS, [
                    qe(t("input", {
                      "onUpdate:modelValue": se[0] || (se[0] = (Oe) => D.value = Oe),
                      type: T.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, IS), [
                      [ea, D.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: se[1] || (se[1] = (Oe) => T.value = !T.value),
                      title: T.value ? "Hide key" : "Show key"
                    }, f(T.value ? "👁" : "👁‍🗨"), 9, ES)
                  ]),
                  E.value ? y("", !0) : (a(), M(de, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: I.value,
                    disabled: !D.value || I.value,
                    onClick: V
                  }, {
                    default: h(() => [...se[16] || (se[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  E.value ? (a(), M(de, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: me
                  }, {
                    default: h(() => [...se[17] || (se[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                G.value ? (a(), r("div", {
                  key: 0,
                  class: Ee(["connection-status", G.value.type])
                }, [
                  t("span", TS, f(G.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", PS, f(G.value.message), 1),
                  K.value !== null ? (a(), r("span", RS, " $" + f(K.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                se[18] || (se[18] = t("div", { class: "api-key-help" }, [
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
          E.value ? (a(), M(ct, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", MS, [
                t("div", DS, [
                  se[19] || (se[19] = t("label", { class: "config-label" }, "Region", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": se[2] || (se[2] = (Oe) => F.value = Oe),
                    class: "config-select",
                    disabled: be.value
                  }, [
                    be.value ? (a(), r("option", AS, "Loading...")) : F.value ? y("", !0) : (a(), r("option", OS, "Select a region")),
                    (a(!0), r(H, null, ye(_e.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id,
                      disabled: !Oe.available
                    }, f(Oe.id) + " (" + f(Oe.name) + ")" + f(Oe.available ? "" : " [Unavailable]"), 9, NS))), 128))
                  ], 8, LS), [
                    [hs, F.value]
                  ])
                ]),
                t("div", US, [
                  se[24] || (se[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  ze.value ? (a(), r("div", zS, "Loading volumes...")) : $e.value.length === 0 ? (a(), r(H, { key: 1 }, [
                    t("div", FS, [
                      se[20] || (se[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", BS, "No volumes in " + f(F.value || "this region"), 1)
                    ]),
                    se[21] || (se[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    se[22] || (se[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(H, { key: 2 }, [
                    qe(t("select", {
                      "onUpdate:modelValue": se[3] || (se[3] = (Oe) => P.value = Oe),
                      class: "config-select"
                    }, [
                      (a(!0), r(H, null, ye($e.value, (Oe) => (a(), r("option", {
                        key: Oe.id,
                        value: Oe.id
                      }, f(Oe.name) + " (" + f(Oe.size_gb) + "GB) ", 9, VS))), 128))
                    ], 512), [
                      [hs, P.value]
                    ]),
                    se[23] || (se[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", WS, [
                  se[25] || (se[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  qe(t("select", {
                    "onUpdate:modelValue": se[4] || (se[4] = (Oe) => S.value = Oe),
                    class: "config-select",
                    disabled: Ye.value || !P.value
                  }, [
                    P.value ? Ye.value ? (a(), r("option", HS, "Loading GPUs...")) : ie.value.length === 0 ? (a(), r("option", KS, "No GPUs available in this region")) : y("", !0) : (a(), r("option", jS, "Select a volume first")),
                    (a(!0), r(H, null, ye(ie.value, (Oe) => (a(), r("option", {
                      key: Oe.id,
                      value: Oe.id
                    }, f(Oe.displayName) + " (" + f(Oe.memoryInGb) + "GB) - $" + f(L.value === "SECURE" ? (Oe.securePrice ?? 0).toFixed(2) : (Oe.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Oe.stockStatus ? `[${Oe.stockStatus}]` : ""), 9, qS))), 128))
                  ], 8, GS), [
                    [hs, S.value]
                  ])
                ]),
                t("div", YS, [
                  se[26] || (se[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", JS, [
                    t("label", QS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[5] || (se[5] = (Oe) => L.value = Oe),
                        value: "SECURE"
                      }, null, 512), [
                        [es, L.value]
                      ]),
                      t("span", XS, "Secure ($" + f(Se("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", ZS, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[6] || (se[6] = (Oe) => L.value = Oe),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [es, L.value]
                      ]),
                      t("span", e8, "Community ($" + f(Se("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", t8, [
                  se[27] || (se[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", s8, [
                    t("label", o8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[7] || (se[7] = (Oe) => te.value = Oe),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [es, te.value]
                      ]),
                      t("span", n8, "On-Demand ($" + f(Se("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", a8, [
                      qe(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": se[8] || (se[8] = (Oe) => te.value = Oe),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [es, te.value]
                      ]),
                      t("span", l8, "Spot ($" + f(Se("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", i8, [
                  se[28] || (se[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  qe(t("input", {
                    "onUpdate:modelValue": se[9] || (se[9] = (Oe) => B.value = Oe),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [zt, B.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value ? (a(), M(ct, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              X.value ? (a(), r("div", r8, "Loading remotes...")) : A.value.length === 0 ? (a(), r("div", c8, [
                se[30] || (se[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                x(de, {
                  variant: "primary",
                  size: "xs",
                  onClick: se[10] || (se[10] = (Oe) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...se[29] || (se[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(H, { key: 2 }, [
                t("div", u8, [
                  (a(!0), r(H, null, ye(A.value, (Oe) => (a(), M(jr, {
                    key: Oe.name,
                    remote: Oe,
                    "sync-status": W.value[Oe.name],
                    "is-selected": U.value === Oe.name,
                    "is-fetching": ae.value === Oe.name,
                    "is-pushing": Z.value === Oe.name,
                    onFetch: Ce,
                    onPush: he,
                    onSelect: j
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                we.value && we.value.ahead > 0 ? (a(), r("div", d8, [
                  se[31] || (se[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", f8, [
                    t("strong", null, f(we.value.ahead) + " unpushed commit" + f(we.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(U.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  x(de, {
                    variant: "primary",
                    size: "xs",
                    loading: Z.value === U.value,
                    onClick: se[11] || (se[11] = (Oe) => U.value && he(U.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", m8, [
                  x(de, {
                    variant: "link",
                    size: "xs",
                    onClick: se[12] || (se[12] = (Oe) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...se[32] || (se[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          E.value ? (a(), M(ct, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", v8, [
                oe.value ? (a(), r("div", p8, "Loading environment summary...")) : ve.value ? (a(), r(H, { key: 1 }, [
                  t("div", g8, [
                    se[33] || (se[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", h8, f(ve.value.comfyui_version), 1)
                  ]),
                  t("div", y8, [
                    se[34] || (se[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", w8, f(ve.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", _8, [
                    se[35] || (se[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", k8, f(ve.value.model_count) + " models", 1)
                  ]),
                  ve.value.models_with_sources > 0 ? (a(), r("div", b8, [
                    t("span", $8, "└─ " + f(ve.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  ve.value.models_without_sources > 0 ? (a(), r("div", C8, [
                    t("span", x8, "└─ " + f(ve.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", S8, [
                    se[36] || (se[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", I8, f(ve.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", E8, [
                    se[37] || (se[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", T8, "~" + f(ve.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value && ee.value ? (a(), M(ct, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Oe, ks;
              return [
                t("div", P8, [
                  t("div", R8, [
                    t("div", M8, [
                      se[42] || (se[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", D8, [
                        se[38] || (se[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", L8, "$" + f(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", A8, [
                        se[39] || (se[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", O8, "$" + f(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", N8, [
                        se[40] || (se[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", U8, "$" + f(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      se[43] || (se[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", z8, [
                        se[41] || (se[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", F8, "~$" + f(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", B8, [
                      se[45] || (se[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", V8, [
                        t("span", null, f(((Oe = Ue.value.find((cs) => cs.id === S.value)) == null ? void 0 : Oe.displayName) || "GPU") + " (" + f(((ks = Ue.value.find((cs) => cs.id === S.value)) == null ? void 0 : ks.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", W8, [
                        t("span", null, "Region: " + f(F.value), 1)
                      ]),
                      re.value ? (a(), r("div", G8, [
                        t("span", null, "Volume: " + f(re.value.name), 1)
                      ])) : y("", !0),
                      te.value === "SPOT" ? (a(), r("div", j8, [...se[44] || (se[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          E.value ? (a(), r("div", H8, [
            x(de, {
              variant: "primary",
              size: "md",
              loading: R.value || ce.value,
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
                b(" " + f(R.value ? "Validating..." : ce.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ue.value ? (a(), M(ct, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              x(Mt, {
                status: ue.value.status === "success" ? "synced" : "broken"
              }, no({
                icon: h(() => [
                  b(f(ue.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(ue.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(ue.value.message), 1)
                ]),
                actions: h(() => [
                  x(de, {
                    variant: "ghost",
                    size: "xs",
                    onClick: se[13] || (se[13] = (Oe) => ue.value = null)
                  }, {
                    default: h(() => [...se[47] || (se[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ue.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    x(mt, {
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
        Ie.value ? (a(), M(ut, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Fe.value) == null ? void 0 : He.phase) === "READY" || ((wt = Fe.value) == null ? void 0 : wt.phase) === "ERROR" || ((Bt = Fe.value) == null ? void 0 : Bt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: ao
        }, no({
          body: h(() => {
            var Oe, ks, cs, lo, io, Hs, le, J, Le, je, at, vt;
            return [
              t("div", K8, [
                t("div", q8, [
                  t("div", {
                    class: Ee(["phase-icon", (ks = (Oe = Fe.value) == null ? void 0 : Oe.phase) == null ? void 0 : ks.toLowerCase()])
                  }, [
                    ((cs = Fe.value) == null ? void 0 : cs.phase) === "READY" ? (a(), r("span", Y8, "✓")) : ((lo = Fe.value) == null ? void 0 : lo.phase) === "ERROR" ? (a(), r("span", J8, "✕")) : ((io = Fe.value) == null ? void 0 : io.phase) === "STOPPED" ? (a(), r("span", Q8, "○")) : (a(), r("span", X8, "⟳"))
                  ], 2),
                  t("div", Z8, [
                    t("div", e4, f(Eo((Hs = Fe.value) == null ? void 0 : Hs.phase)), 1),
                    t("div", t4, f(((le = Fe.value) == null ? void 0 : le.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                x(sa, {
                  progress: js((J = Fe.value) == null ? void 0 : J.phase),
                  variant: ((Le = Fe.value) == null ? void 0 : Le.phase) === "ERROR" ? "error" : ((je = Fe.value) == null ? void 0 : je.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((at = Fe.value) == null ? void 0 : at.phase) === "READY" ? (a(), r("div", s4, [
                  x(de, {
                    variant: "primary",
                    size: "md",
                    onClick: Yt
                  }, {
                    default: h(() => [...se[48] || (se[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", o4, [
                  (vt = Fe.value) != null && vt.console_url ? (a(), r("a", {
                    key: 0,
                    href: Fe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, n4)) : y("", !0)
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
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        q.value && z.value ? (a(), M(Br, {
          key: 1,
          issues: z.value.blocking_issues,
          onClose: se[14] || (se[14] = (Oe) => q.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        ne.value && z.value ? (a(), M(Vr, {
          key: 2,
          models: z.value.warnings.models_without_sources,
          onConfirm: pt,
          onCancel: se[15] || (se[15] = (Oe) => ne.value = !1),
          onRevalidate: qt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), l4 = /* @__PURE__ */ pe(a4, [["__scopeId", "data-v-522cd4d9"]]), i4 = { class: "worker-header" }, r4 = { class: "worker-status" }, c4 = { class: "worker-name" }, u4 = { class: "worker-actions" }, d4 = { class: "worker-details" }, f4 = { class: "detail-item" }, m4 = { class: "detail-value" }, v4 = {
  key: 0,
  class: "detail-item"
}, p4 = { class: "detail-value" }, g4 = {
  key: 1,
  class: "detail-item"
}, h4 = { class: "detail-value mode-badge" }, y4 = {
  key: 0,
  class: "worker-stats"
}, w4 = {
  key: 0,
  class: "stat-item"
}, _4 = { key: 0 }, k4 = {
  key: 1,
  class: "worker-stats offline"
}, b4 = /* @__PURE__ */ fe({
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
      t("div", i4, [
        t("div", r4, [
          t("span", {
            class: Ee(["status-dot", e.worker.status])
          }, null, 2),
          t("span", c4, f(e.worker.name), 1)
        ]),
        t("div", u4, [
          e.worker.status === "online" ? (a(), M(de, {
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
      t("div", d4, [
        t("span", f4, [
          t("span", m4, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", v4, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", p4, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", g4, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", h4, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", y4, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", w4, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", _4, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", k4, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), $4 = /* @__PURE__ */ pe(b4, [["__scopeId", "data-v-b1be7134"]]), C4 = { class: "add-worker-content" }, x4 = { class: "manual-form" }, S4 = { class: "form-row" }, I4 = { class: "form-row-inline" }, E4 = { class: "form-field flex-2" }, T4 = { class: "form-field flex-1" }, P4 = { class: "form-row" }, R4 = { class: "api-key-wrapper" }, M4 = ["type"], D4 = { class: "result-icon" }, L4 = { class: "result-content" }, A4 = { class: "result-message" }, O4 = {
  key: 0,
  class: "result-detail"
}, N4 = { class: "modal-actions" }, U4 = /* @__PURE__ */ fe({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = tt(), l = Ws({
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
    return (p, _) => (a(), M(ut, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (C) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", C4, [
          t("div", x4, [
            t("div", S4, [
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
            t("div", I4, [
              t("div", E4, [
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
              t("div", T4, [
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
            t("div", P4, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", R4, [
                qe(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (C) => l.apiKey = C),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, M4), [
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
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), r("div", {
              key: 0,
              class: Ee(["test-result", d.value.type])
            }, [
              t("span", D4, f(d.value.type === "success" ? "✓" : "✕"), 1),
              t("div", L4, [
                t("span", A4, f(d.value.message), 1),
                d.value.gpu_info ? (a(), r("span", O4, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", N4, [
          x(de, {
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
}), z4 = /* @__PURE__ */ pe(U4, [["__scopeId", "data-v-07a00732"]]), F4 = { class: "discovered-content" }, B4 = {
  key: 0,
  class: "workers-list"
}, V4 = { class: "worker-info" }, W4 = { class: "worker-name" }, G4 = { class: "worker-address" }, j4 = {
  key: 0,
  class: "worker-gpu"
}, H4 = {
  key: 1,
  class: "empty-state"
}, K4 = {
  key: 2,
  class: "api-key-section"
}, q4 = { class: "selected-worker" }, Y4 = { class: "selected-name" }, J4 = { class: "selected-address" }, Q4 = { class: "form-row" }, X4 = { class: "api-key-wrapper" }, Z4 = ["type"], e6 = { class: "result-icon" }, t6 = { class: "result-message" }, s6 = { class: "modal-actions" }, o6 = /* @__PURE__ */ fe({
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
    return (w, p) => (a(), M(ut, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", F4, [
          e.workers.length > 0 ? (a(), r("div", B4, [
            (a(!0), r(H, null, ye(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", V4, [
                t("span", W4, f(_.name), 1),
                t("span", G4, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", j4, f(_.gpu_info), 1)) : y("", !0)
              ]),
              x(de, {
                variant: "primary",
                size: "xs",
                onClick: (C) => v(_)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", H4, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", K4, [
            t("div", q4, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", Y4, f(l.value.name), 1),
              t("span", J4, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", Q4, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", X4, [
                qe(t("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Ht(g, ["enter"])
                }, null, 40, Z4), [
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
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), r("div", {
              key: 0,
              class: Ee(["test-result", m.value.type])
            }, [
              t("span", e6, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", t6, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", s6, [
          l.value ? (a(), M(de, {
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
          l.value ? (a(), M(de, {
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
}), n6 = /* @__PURE__ */ pe(o6, [["__scopeId", "data-v-5a3e40a4"]]), a6 = { class: "deploy-content" }, l6 = { class: "section" }, i6 = {
  key: 0,
  class: "loading-text"
}, r6 = {
  key: 1,
  class: "empty-remotes"
}, c6 = {
  key: 2,
  class: "remotes-list"
}, u6 = { class: "section" }, d6 = { class: "mode-options" }, f6 = { class: "mode-option" }, m6 = ["disabled"], v6 = { class: "mode-option" }, p6 = { class: "section" }, g6 = {
  key: 0,
  class: "section"
}, h6 = { class: "summary-row" }, y6 = {
  key: 1,
  class: "sync-warning"
}, w6 = { class: "warning-content" }, _6 = { class: "modal-actions" }, k6 = /* @__PURE__ */ fe({
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
    } = tt(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), C = k(null), $ = k(o.worker.mode || "native"), T = k(""), D = k(null), E = k(!1), I = N(() => p.value && g.value[p.value] || null), G = N(() => {
      if (!p.value) return null;
      const A = v.value.find((W) => W.name === p.value);
      return (A == null ? void 0 : A.fetch_url) || null;
    }), K = N(() => G.value && !E.value);
    async function F() {
      w.value = !0;
      try {
        const A = await l();
        v.value = A.remotes, await Promise.all(
          A.remotes.map(async (X) => {
            const U = await i(X.name);
            U && (g.value[X.name] = U);
          })
        );
        const W = A.remotes.find((X) => X.is_default);
        W ? p.value = W.name : A.remotes.length > 0 && (p.value = A.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function P() {
      try {
        D.value = await d();
      } catch {
      }
    }
    async function S(A) {
      _.value = A;
      try {
        await c(A);
        const W = await i(A);
        W && (g.value[A] = W), n("toast", `Fetched from ${A}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function L(A) {
      C.value = A;
      try {
        await u(A, { force: !1 });
        const W = await i(A);
        W && (g.value[A] = W), n("toast", `Pushed to ${A}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function te(A) {
      p.value = A;
    }
    async function B() {
      if (G.value) {
        E.value = !0;
        try {
          const A = await m(o.worker.name, {
            import_source: G.value,
            mode: $.value,
            name: T.value || void 0
          });
          A.id ? (n("toast", `Deployment started: ${A.name || A.id}`, "success"), n("deployed")) : A.status === "error" ? n("toast", A.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (A) {
          n("toast", A instanceof Error ? A.message : "Deployment failed", "error");
        } finally {
          E.value = !1;
        }
      }
    }
    return Qe(() => {
      F(), P();
    }), (A, W) => (a(), M(ut, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: W[5] || (W[5] = (X) => A.$emit("close"))
    }, {
      body: h(() => [
        t("div", a6, [
          t("div", l6, [
            W[7] || (W[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", i6, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", r6, [...W[6] || (W[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", c6, [
              (a(!0), r(H, null, ye(v.value, (X) => (a(), M(jr, {
                key: X.name,
                remote: X,
                "sync-status": g.value[X.name],
                "is-selected": p.value === X.name,
                "is-fetching": _.value === X.name,
                "is-pushing": C.value === X.name,
                onFetch: S,
                onPush: L,
                onSelect: te
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", u6, [
            W[10] || (W[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", d6, [
              t("label", f6, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": W[0] || (W[0] = (X) => $.value = X),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, m6), [
                  [es, $.value]
                ]),
                W[8] || (W[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", v6, [
                qe(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": W[1] || (W[1] = (X) => $.value = X),
                  value: "native"
                }, null, 512), [
                  [es, $.value]
                ]),
                W[9] || (W[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", p6, [
            W[11] || (W[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            qe(t("input", {
              "onUpdate:modelValue": W[2] || (W[2] = (X) => T.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [zt, T.value]
            ])
          ]),
          D.value ? (a(), r("div", g6, [
            W[12] || (W[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", h6, " ComfyUI: " + f(D.value.comfyui_version) + " • " + f(D.value.node_count) + " nodes • " + f(D.value.model_count) + " models • " + f(D.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          I.value && I.value.ahead > 0 ? (a(), r("div", y6, [
            W[14] || (W[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", w6, [
              t("strong", null, f(I.value.ahead) + " unpushed commit" + f(I.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            x(de, {
              variant: "primary",
              size: "xs",
              loading: C.value === p.value,
              onClick: W[3] || (W[3] = (X) => p.value && L(p.value))
            }, {
              default: h(() => [...W[13] || (W[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", _6, [
          x(de, {
            variant: "ghost",
            size: "sm",
            onClick: W[4] || (W[4] = (X) => A.$emit("close"))
          }, {
            default: h(() => [...W[15] || (W[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          x(de, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !K.value || E.value,
            onClick: B
          }, {
            default: h(() => [...W[16] || (W[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), b6 = /* @__PURE__ */ pe(k6, [["__scopeId", "data-v-c12720d3"]]), $6 = { class: "custom-tab" }, C6 = { class: "section-header" }, x6 = { class: "section-actions" }, S6 = { class: "workers-content" }, I6 = {
  key: 0,
  class: "loading-state"
}, E6 = {
  key: 1,
  class: "empty-state"
}, T6 = {
  key: 2,
  class: "workers-list"
}, P6 = { class: "scan-icon" }, R6 = { class: "scan-message" }, M6 = /* @__PURE__ */ fe({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = tt(), u = k([]), d = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), C = k(null);
    async function $() {
      m.value = !0;
      try {
        const F = await n();
        u.value = F.workers;
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function T() {
      v.value = !0, C.value = null;
      try {
        const F = await c(), P = F.discovered.filter(
          (S) => !u.value.some((L) => L.host === S.host && L.port === S.port)
        );
        d.value = P, P.length > 0 ? p.value = !0 : F.discovered.length > 0 ? C.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : C.value = {
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
      } catch (P) {
        o("toast", P instanceof Error ? P.message : "Failed to add worker", "error");
      }
    }
    async function E(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), p.value = !1, await $();
      } catch (P) {
        o("toast", P instanceof Error ? P.message : "Failed to add worker", "error");
      }
    }
    async function I(F) {
      g.value = F;
      try {
        await i(F), o("toast", `Worker '${F}' removed`, "success"), await $();
      } catch (P) {
        o("toast", P instanceof Error ? P.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function G(F) {
      _.value = F;
    }
    function K() {
      _.value = null, o("deployed");
    }
    return Qe(() => {
      $();
    }), (F, P) => (a(), r("div", $6, [
      t("div", C6, [
        P[8] || (P[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", x6, [
          x(de, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: T
          }, {
            default: h(() => [...P[6] || (P[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          x(de, {
            variant: "secondary",
            size: "xs",
            onClick: P[0] || (P[0] = (S) => w.value = !0)
          }, {
            default: h(() => [...P[7] || (P[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", S6, [
        m.value && u.value.length === 0 ? (a(), r("div", I6, [...P[9] || (P[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), r("div", E6, [...P[10] || (P[10] = [
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
        ])])) : (a(), r("div", T6, [
          (a(!0), r(H, null, ye(u.value, (S) => (a(), M($4, {
            key: S.name,
            worker: S,
            "is-action-loading": g.value === S.name,
            onDeploy: G,
            onRemove: I
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (a(), r("div", {
        key: 0,
        class: Ee(["scan-result", C.value.type])
      }, [
        t("span", P6, f(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", R6, f(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: P[1] || (P[1] = (S) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), M(n6, {
        key: 1,
        workers: d.value,
        onClose: P[2] || (P[2] = (S) => p.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(z4, {
        key: 2,
        onClose: P[3] || (P[3] = (S) => w.value = !1),
        onAdd: D
      })) : y("", !0),
      _.value ? (a(), M(b6, {
        key: 3,
        worker: _.value,
        onClose: P[4] || (P[4] = (S) => _.value = null),
        onToast: P[5] || (P[5] = (S, L) => o("toast", S, L)),
        onDeployed: K
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), D6 = /* @__PURE__ */ pe(M6, [["__scopeId", "data-v-1637dead"]]), wa = "ComfyGit.Deploy.GitHubPAT";
function Hr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function L6(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function A6() {
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
    isRemoteHttps: L6
  };
}
const O6 = { class: "settings-content" }, N6 = { class: "settings-section" }, U6 = {
  key: 0,
  class: "ssh-warning"
}, z6 = { class: "form-row" }, F6 = { class: "token-wrapper" }, B6 = ["type"], V6 = { class: "result-icon" }, W6 = { class: "result-message" }, G6 = { class: "token-actions" }, j6 = /* @__PURE__ */ fe({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = A6(), { getRemotes: u, testGitAuth: d } = tt(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = N(() => c());
    Qe(async () => {
      var E;
      const D = n();
      D && (m.value = D);
      try {
        const G = (E = (await u()).remotes) == null ? void 0 : E.find((K) => K.name === "origin");
        G && Hr(G.url) && (p.value = !0);
      } catch {
      }
    });
    async function C() {
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
    function T() {
      i(), m.value = "", w.value = null;
    }
    return (D, E) => (a(), M(ut, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: E[2] || (E[2] = (I) => D.$emit("close"))
    }, {
      body: h(() => [
        t("div", O6, [
          t("div", N6, [
            E[8] || (E[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", U6, [...E[3] || (E[3] = [
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
            t("div", z6, [
              E[4] || (E[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", F6, [
                qe(t("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (I) => m.value = I),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, B6), [
                  [ea, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: E[1] || (E[1] = (I) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              E[5] || (E[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Ee(["test-result", w.value.type])
            }, [
              t("span", V6, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", W6, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", G6, [
              x(de, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: C
              }, {
                default: h(() => [...E[6] || (E[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), M(de, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: T
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
}), H6 = /* @__PURE__ */ pe(j6, [["__scopeId", "data-v-b21588ad"]]), K6 = /* @__PURE__ */ fe({
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
    } = Gr(), w = k(!1), p = k(!1), _ = k("instances"), C = k(null), $ = k(null), T = N(() => [
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
      C.value = F.id;
      try {
        await u(F), o("toast", "Instance stopped", "success");
      } catch (P) {
        o("toast", P instanceof Error ? P.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function E(F) {
      C.value = F.id;
      try {
        await d(F), o("toast", "Instance starting...", "success");
      } catch (P) {
        o("toast", P instanceof Error ? P.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function I(F) {
      $.value = F;
    }
    async function G() {
      const F = $.value;
      if (F) {
        $.value = null, C.value = F.id;
        try {
          await m(F), o("toast", "Instance terminated", "success");
        } catch (P) {
          o("toast", P instanceof Error ? P.message : "Failed to terminate instance", "error");
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
    }), (F, P) => (a(), r(H, null, [
      x(Dt, null, {
        header: h(() => [
          x(Lt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: P[1] || (P[1] = (S) => w.value = !0)
          }, {
            actions: h(() => [
              x(de, {
                variant: "ghost",
                size: "xs",
                onClick: P[0] || (P[0] = (S) => p.value = !0)
              }, {
                default: h(() => [...P[10] || (P[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          x(Or, {
            modelValue: _.value,
            "onUpdate:modelValue": P[2] || (P[2] = (S) => _.value = S),
            tabs: T.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), M(cS, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": C.value,
            onRefresh: We(c),
            onStop: D,
            onStart: E,
            onTerminate: I
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), M(l4, {
            key: 1,
            onToast: P[3] || (P[3] = (S, L) => o("toast", S, L)),
            onNavigate: P[4] || (P[4] = (S) => o("navigate", S)),
            onDeployed: K
          })) : y("", !0),
          _.value === "custom" ? (a(), M(D6, {
            key: 2,
            onToast: P[5] || (P[5] = (S, L) => o("toast", S, L)),
            onDeployed: K
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), M(al, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: G,
        onCancel: P[6] || (P[6] = (S) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      x(ls, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: P[7] || (P[7] = (S) => w.value = !1)
      }, {
        content: h(() => [...P[11] || (P[11] = [
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
      p.value ? (a(), M(H6, {
        key: 1,
        onClose: P[8] || (P[8] = (S) => p.value = !1),
        onSaved: P[9] || (P[9] = (S) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), q6 = /* @__PURE__ */ pe(K6, [["__scopeId", "data-v-d4e32a10"]]), Y6 = { class: "header-info" }, J6 = { class: "commit-hash" }, Q6 = {
  key: 0,
  class: "commit-refs"
}, X6 = { class: "commit-message" }, Z6 = { class: "commit-date" }, eI = {
  key: 0,
  class: "loading"
}, tI = {
  key: 1,
  class: "changes-section"
}, sI = { class: "stats-row" }, oI = { class: "stat" }, nI = { class: "stat insertions" }, aI = { class: "stat deletions" }, lI = {
  key: 0,
  class: "change-group"
}, iI = {
  key: 1,
  class: "change-group"
}, rI = {
  key: 0,
  class: "version"
}, cI = {
  key: 2,
  class: "change-group"
}, uI = { class: "change-item" }, dI = /* @__PURE__ */ fe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = tt(), n = k(null), l = k(!0), i = N(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = N(() => {
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
    }), (u, d) => (a(), M(ut, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", Y6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", J6, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", Q6, [
              (a(!0), r(H, null, ye(n.value.refs, (p) => (a(), r("span", {
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
          t("div", X6, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", Z6, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", eI, "Loading details...")) : n.value ? (a(), r("div", tI, [
            t("div", sI, [
              t("span", oI, f(n.value.stats.files_changed) + " files", 1),
              t("span", nI, "+" + f(n.value.stats.insertions), 1),
              t("span", aI, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", lI, [
              x(qo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(H, null, ye(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(H, null, ye(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(H, null, ye(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", iI, [
              x(qo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(H, null, ye(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", rI, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(H, null, ye(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", cI, [
              x(qo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", uI, [
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
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        x(Te, {
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
}), fI = /* @__PURE__ */ pe(dI, [["__scopeId", "data-v-d256ff6d"]]), mI = { class: "base-textarea-wrapper" }, vI = ["value", "rows", "placeholder", "disabled", "maxlength"], pI = {
  key: 0,
  class: "base-textarea-count"
}, gI = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), r("div", mI, [
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
      }, null, 40, vI),
      e.showCharCount && e.maxLength ? (a(), r("div", pI, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), ti = /* @__PURE__ */ pe(gI, [["__scopeId", "data-v-c6d16c93"]]), hI = ["checked", "disabled"], yI = { class: "base-checkbox-box" }, wI = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, _I = {
  key: 0,
  class: "base-checkbox-label"
}, kI = /* @__PURE__ */ fe({
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
      }, null, 40, hI),
      t("span", yI, [
        e.modelValue ? (a(), r("svg", wI, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", _I, [
        Ke(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), La = /* @__PURE__ */ pe(kI, [["__scopeId", "data-v-bf17c831"]]), bI = { class: "popover-header" }, $I = { class: "popover-body" }, CI = {
  key: 0,
  class: "changes-summary"
}, xI = {
  key: 0,
  class: "change-item"
}, SI = {
  key: 1,
  class: "change-item"
}, II = {
  key: 2,
  class: "change-item"
}, EI = {
  key: 3,
  class: "change-item"
}, TI = {
  key: 4,
  class: "change-item"
}, PI = {
  key: 5,
  class: "change-item"
}, RI = {
  key: 1,
  class: "no-changes"
}, MI = {
  key: 2,
  class: "loading"
}, DI = {
  key: 3,
  class: "issues-error"
}, LI = { class: "error-header" }, AI = { class: "error-title" }, OI = { class: "issues-list" }, NI = { class: "workflow-state" }, UI = { class: "message-section" }, zI = { class: "popover-footer" }, FI = {
  key: 1,
  class: "commit-popover"
}, BI = { class: "popover-header" }, VI = { class: "popover-body" }, WI = {
  key: 0,
  class: "changes-summary"
}, GI = {
  key: 0,
  class: "change-item"
}, jI = {
  key: 1,
  class: "change-item"
}, HI = {
  key: 2,
  class: "change-item"
}, KI = {
  key: 3,
  class: "change-item"
}, qI = {
  key: 4,
  class: "change-item"
}, YI = {
  key: 5,
  class: "change-item"
}, JI = {
  key: 1,
  class: "no-changes"
}, QI = {
  key: 2,
  class: "loading"
}, XI = {
  key: 3,
  class: "issues-error"
}, ZI = { class: "error-header" }, eE = { class: "error-title" }, tE = { class: "issues-list" }, sE = { class: "workflow-state" }, oE = { class: "message-section" }, nE = { class: "popover-footer" }, aE = /* @__PURE__ */ fe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = tt(), i = k(""), c = k(!1), u = k(!1), d = N(() => {
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
      var _, C, $, T;
      if (!(g.value && !u.value) && !(!d.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const D = await l(i.value.trim(), u.value);
          if (D.status === "success") {
            const E = `Committed: ${((_ = D.summary) == null ? void 0 : _.new) || 0} new, ${((C = D.summary) == null ? void 0 : C.modified) || 0} modified, ${(($ = D.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: E });
          } else if (D.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (D.status === "blocked") {
            const E = ((T = D.issues) == null ? void 0 : T.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
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
    return (_, C) => e.asModal ? (a(), M(kt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", bI, [
            C[11] || (C[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = ($) => n("close"))
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
          t("div", $I, [
            e.status && d.value ? (a(), r("div", CI, [
              e.status.workflows.new.length ? (a(), r("div", xI, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", SI, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", II, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", EI, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", TI, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", PI, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", RI, " No changes to commit ")) : (a(), r("div", MI, " Loading... ")),
            g.value ? (a(), r("div", DI, [
              t("div", LI, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", AI, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", OI, [
                (a(!0), r(H, null, ye(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", NI, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              x(La, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", UI, [
              x(ti, {
                modelValue: i.value,
                "onUpdate:modelValue": C[2] || (C[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", zI, [
            x(Te, {
              variant: "secondary",
              onClick: C[3] || (C[3] = ($) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                b(" Cancel ", -1)
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
                b(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", FI, [
      t("div", BI, [
        C[22] || (C[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = ($) => n("close"))
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
      t("div", VI, [
        e.status && d.value ? (a(), r("div", WI, [
          e.status.workflows.new.length ? (a(), r("div", GI, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", jI, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", HI, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", KI, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", qI, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", YI, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", JI, " No changes to commit ")) : (a(), r("div", QI, " Loading... ")),
        g.value ? (a(), r("div", XI, [
          t("div", ZI, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", eE, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", tE, [
            (a(!0), r(H, null, ye(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", sE, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          x(La, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", oE, [
          x(ti, {
            modelValue: i.value,
            "onUpdate:modelValue": C[8] || (C[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", nE, [
        x(Te, {
          variant: "secondary",
          onClick: C[9] || (C[9] = ($) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            b(" Cancel ", -1)
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
            b(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Kr = /* @__PURE__ */ pe(aE, [["__scopeId", "data-v-5f897631"]]), lE = { class: "modal-header" }, iE = { class: "modal-body" }, rE = { class: "switch-message" }, cE = { class: "switch-details" }, uE = { class: "modal-actions" }, dE = /* @__PURE__ */ fe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(kt, { to: "body" }, [
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
          t("div", lE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", iE, [
            t("p", rE, [
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
            t("p", cE, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", uE, [
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
}), fE = /* @__PURE__ */ pe(dE, [["__scopeId", "data-v-e9c5253e"]]), mE = {
  key: 0,
  class: "modal-overlay"
}, vE = { class: "modal-content" }, pE = { class: "modal-body" }, gE = { class: "progress-info" }, hE = { class: "progress-percentage" }, yE = { class: "progress-state" }, wE = { class: "switch-steps" }, _E = { class: "step-icon" }, kE = { class: "step-label" }, bE = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), M(kt, { to: "body" }, [
      e.show ? (a(), r("div", mE, [
        t("div", vE, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", pE, [
            x(sa, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", gE, [
              t("div", hE, f(e.progress) + "%", 1),
              t("div", yE, f(o.value), 1)
            ]),
            t("div", wE, [
              (a(!0), r(H, null, ye(l.value, (u) => (a(), r("div", {
                key: u.state,
                class: Ee(["switch-step", u.status])
              }, [
                t("span", _E, f(u.icon), 1),
                t("span", kE, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), $E = /* @__PURE__ */ pe(bE, [["__scopeId", "data-v-768a5078"]]), CE = { class: "modal-header" }, xE = { class: "modal-body" }, SE = {
  key: 0,
  class: "node-section"
}, IE = { class: "node-list" }, EE = {
  key: 1,
  class: "node-section"
}, TE = { class: "node-list" }, PE = { class: "modal-actions" }, RE = /* @__PURE__ */ fe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(kt, { to: "body" }, [
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
          t("div", CE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", xE, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", SE, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", IE, [
                (a(!0), r(H, null, ye(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", EE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", TE, [
                (a(!0), r(H, null, ye(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", PE, [
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
}), ME = /* @__PURE__ */ pe(RE, [["__scopeId", "data-v-7cad7518"]]), DE = [
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
], LE = "v0.0.17", AE = "Akatz", OE = { class: "social-buttons" }, NE = ["title", "aria-label", "onClick"], UE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, zE = ["d"], FE = ["title", "aria-label", "onClick"], BE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, VE = ["d"], WE = /* @__PURE__ */ fe({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", OE, [
      (a(!0), r(H, null, ye(We(DE), (l) => (a(), r(H, {
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
          (a(), r("svg", UE, [
            t("path", {
              d: l.iconPath
            }, null, 8, zE)
          ]))
        ], 8, NE)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", BE, [
            t("path", {
              d: l.iconPath
            }, null, 8, VE)
          ]))
        ], 8, FE))
      ], 64))), 128))
    ]));
  }
}), qr = /* @__PURE__ */ pe(WE, [["__scopeId", "data-v-4f846342"]]), GE = { class: "footer-info" }, jE = { class: "version" }, HE = { class: "made-by" }, KE = /* @__PURE__ */ fe({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", GE, [
      t("span", jE, f(We(LE)), 1),
      t("span", HE, [
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
        b(" by " + f(We(AE)), 1)
      ])
    ]));
  }
}), Yr = /* @__PURE__ */ pe(KE, [["__scopeId", "data-v-8bc3db0a"]]), qE = /* @__PURE__ */ fe({
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
    return (i, c) => (a(), M(ut, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => i.$emit("close"))
    }, {
      body: h(() => [
        x(Ar, {
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
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          x(Te, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => i.$emit("close"))
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
}), YE = /* @__PURE__ */ pe(qE, [["__scopeId", "data-v-fac00ae7"]]), JE = { class: "header-actions" }, QE = {
  key: 0,
  class: "wizard-step"
}, XE = { class: "form-field" }, ZE = ["placeholder"], eT = {
  key: 0,
  class: "form-error"
}, tT = { class: "form-field form-field--checkbox" }, sT = { class: "form-checkbox" }, oT = {
  key: 0,
  class: "form-field"
}, nT = ["placeholder"], aT = {
  key: 0,
  class: "form-info"
}, lT = {
  key: 1,
  class: "form-suggestion"
}, iT = {
  key: 2,
  class: "form-error"
}, rT = {
  key: 3,
  class: "form-info"
}, cT = {
  key: 1,
  class: "wizard-step"
}, uT = {
  key: 0,
  class: "progress-check-loading"
}, dT = {
  key: 0,
  class: "cli-warning"
}, fT = { class: "cli-warning-header" }, mT = {
  key: 1,
  class: "env-landing"
}, vT = { class: "env-list" }, pT = ["value"], gT = { class: "env-name" }, hT = {
  key: 2,
  class: "env-create"
}, yT = { class: "form-field" }, wT = { class: "form-field" }, _T = ["value"], kT = { class: "form-field" }, bT = ["disabled"], $T = ["value"], CT = { class: "form-field" }, xT = ["value"], ST = { class: "form-field form-field--checkbox" }, IT = { class: "form-checkbox" }, ET = {
  key: 0,
  class: "form-error"
}, TT = {
  key: 1,
  class: "env-creating"
}, PT = { class: "creating-intro" }, RT = {
  key: 3,
  class: "env-import"
}, MT = { class: "wizard-footer" }, DT = { class: "wizard-footer-actions" }, uo = 10, LT = 600 * 1e3, si = 1800 * 1e3, AT = /* @__PURE__ */ fe({
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
    } = tt(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), C = k(!1), $ = k(!1), T = k(!1), D = k(null), E = k(o.initialStep === 2), I = k(o.defaultPath), G = k(!!o.detectedModelsDir), K = k(o.detectedModelsDir || ""), F = k(null), P = k(null), S = k(null), L = k(null), te = k("my-new-env"), B = k(zr), A = k("latest"), W = k(Fr), X = k(!0), U = k(null), ae = k(null), Z = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), _e = k(!1), be = k(!1), De = k(!1), ze = k({ progress: 0, message: "" }), Ue = k({ progress: 0, message: "" }), Ye = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ve = k(0), oe = k(null), ce = k(0), ue = k(null), Ie = N(() => {
      var Ce, he;
      const ee = (Ce = I.value) == null ? void 0 : Ce.trim(), Y = !F.value, Me = !G.value || !P.value && ((he = K.value) == null ? void 0 : he.trim());
      return ee && Y && Me;
    }), Pe = N(() => {
      var ee;
      return (ee = te.value) == null ? void 0 : ee.trim();
    }), Fe = N(() => !!(g.value === 2 || ae.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = N(() => ae.value || o.workspacePath || null);
    async function R() {
      var ee;
      if (F.value = null, !!((ee = I.value) != null && ee.trim()))
        try {
          const Y = await c({ path: I.value, type: "workspace" });
          Y.valid || (F.value = Y.error || "Invalid path");
        } catch (Y) {
          F.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function z() {
      var ee;
      if (P.value = null, S.value = null, L.value = null, !!((ee = K.value) != null && ee.trim()))
        try {
          const Y = await c({ path: K.value, type: "models" });
          if (Y.valid)
            L.value = Y.model_count ?? null;
          else if (P.value = Y.error || "Invalid path", Y.suggestion) {
            S.value = Y.suggestion, K.value = Y.suggestion, P.value = null;
            const Me = await c({ path: Y.suggestion, type: "models" });
            Me.valid && (L.value = Me.model_count ?? null);
          }
        } catch (Y) {
          P.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function q() {
      var ee, Y, Me, Ce, he;
      if (F.value = null, P.value = null, await R(), (ee = F.value) != null && ee.includes("already exists")) {
        F.value = null, ae.value = ((Y = I.value) == null ? void 0 : Y.trim()) || o.defaultPath, g.value = 2, re();
        return;
      }
      if (!F.value && !(G.value && ((Me = K.value) != null && Me.trim()) && (await z(), P.value))) {
        be.value = !0;
        try {
          await l({
            workspace_path: ((Ce = I.value) == null ? void 0 : Ce.trim()) || o.defaultPath,
            models_directory: G.value && ((he = K.value) == null ? void 0 : he.trim()) || null
          }), ve.value = 0, oe.value = Date.now();
          const j = setInterval(async () => {
            var V;
            if (oe.value && Date.now() - oe.value > LT) {
              clearInterval(j), be.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const me = await i();
              if (ve.value = 0, me.state === "idle" && be.value) {
                clearInterval(j), be.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ze.value = { progress: me.progress, message: me.message }, me.state === "complete" ? (clearInterval(j), be.value = !1, ae.value = ((V = I.value) == null ? void 0 : V.trim()) || o.defaultPath, g.value = 2, re()) : me.state === "error" && (clearInterval(j), be.value = !1, F.value = me.error || "Workspace creation failed");
            } catch (me) {
              ve.value++, console.warn(`Polling failure ${ve.value}/${uo}:`, me), ve.value >= uo && (clearInterval(j), be.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (j) {
          be.value = !1, F.value = j instanceof Error ? j.message : "Failed to create workspace";
        }
      }
    }
    async function ne() {
      De.value = !0, U.value = null;
      try {
        const ee = {
          name: te.value.trim() || "my-new-env",
          python_version: B.value,
          comfyui_version: A.value,
          torch_backend: W.value,
          switch_after: X.value,
          workspace_path: ae.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ee)).status === "started") {
          ce.value = 0, ue.value = Date.now();
          const Me = setInterval(async () => {
            if (ue.value && Date.now() - ue.value > si) {
              clearInterval(Me), De.value = !1, U.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ce = await d();
              if (ce.value = 0, Ce.state === "idle" && De.value) {
                clearInterval(Me), De.value = !1, U.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ue.value = {
                progress: Ce.progress ?? 0,
                message: Ce.message,
                phase: Ce.phase
              }, Ce.state === "complete") {
                clearInterval(Me), De.value = !1;
                const he = Ce.environment_name || ee.name;
                X.value ? n("complete", he, ae.value) : (p.value = "landing", n("environment-created-no-switch", he));
              } else Ce.state === "error" && (clearInterval(Me), De.value = !1, U.value = Ce.error || "Environment creation failed");
            } catch (Ce) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${uo}:`, Ce), ce.value >= uo && (clearInterval(Me), De.value = !1, U.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        De.value = !1, U.value = ee instanceof Error ? ee.message : "Unknown error";
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
    function $e() {
      w.value && n("switch-environment", w.value, ae.value);
    }
    function ie() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function we(ee, Y) {
      C.value = !1, Y ? n("complete", ee, ae.value) : (n("environment-created-no-switch", ee), p.value = "landing");
    }
    function ge() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (K.value = o.detectedModelsDir), o.workspacePath && (ae.value = o.workspacePath), g.value === 2) {
        re();
        const ee = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await Re(), clearTimeout(ee), E.value = !1;
      }
    });
    async function Re() {
      try {
        const ee = await d();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), p.value = "create", De.value = !0, te.value = ee.environment_name || "my-new-env", Ue.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, Se();
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
        }, T.value = !0, p.value = "import", C.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function Se() {
      ce.value = 0, ue.value = Date.now();
      let ee = null;
      const Y = async () => {
        if (ue.value && Date.now() - ue.value > si)
          return ee && clearInterval(ee), De.value = !1, U.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ce = await d();
          if (ce.value = 0, Ce.state === "idle" && De.value)
            return ee && clearInterval(ee), De.value = !1, U.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ue.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ce.state === "complete") {
            ee && clearInterval(ee), De.value = !1;
            const he = Ce.environment_name || te.value;
            return n("complete", he, ae.value), !1;
          } else if (Ce.state === "error")
            return ee && clearInterval(ee), De.value = !1, U.value = Ce.error || "Environment creation failed", !1;
          return !0;
        } catch (Ce) {
          return ce.value++, console.warn(`Polling failure ${ce.value}/${uo}:`, Ce), ce.value >= uo ? (ee && clearInterval(ee), De.value = !1, U.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Y() && (ee = setInterval(async () => {
        !await Y() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, Y) => (a(), r(H, null, [
      x(ut, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Y[15] || (Y[15] = (Me) => ee.$emit("close"))
      }, {
        header: h(() => [
          Y[20] || (Y[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", JE, [
            x(qr),
            Y[19] || (Y[19] = t("span", { class: "header-divider" }, null, -1)),
            Fe.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Y[0] || (Y[0] = (Me) => _.value = !0)
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
              onClick: Y[1] || (Y[1] = (Me) => ee.$emit("close")),
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
            g.value === 1 ? (a(), r("div", QE, [
              Y[24] || (Y[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", XE, [
                Y[21] || (Y[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Y[2] || (Y[2] = (Ce) => I.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, ZE), [
                  [zt, I.value]
                ]),
                F.value ? (a(), r("p", eT, f(F.value), 1)) : y("", !0)
              ]),
              t("div", tT, [
                t("label", sT, [
                  qe(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[3] || (Y[3] = (Ce) => G.value = Ce)
                  }, null, 512), [
                    [nn, G.value]
                  ]),
                  Y[22] || (Y[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              G.value ? (a(), r("div", oT, [
                Y[23] || (Y[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                qe(t("input", {
                  "onUpdate:modelValue": Y[4] || (Y[4] = (Ce) => K.value = Ce),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, nT), [
                  [zt, K.value]
                ]),
                e.detectedModelsDir && !K.value ? (a(), r("p", aT, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                S.value ? (a(), r("p", lT, " Did you mean: " + f(S.value), 1)) : y("", !0),
                P.value ? (a(), r("p", iT, f(P.value), 1)) : y("", !0),
                L.value !== null && !P.value ? (a(), r("p", rT, " Found " + f(L.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              be.value ? (a(), M(Bn, {
                key: 1,
                progress: ze.value.progress,
                message: ze.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", cT, [
              E.value ? (a(), r("div", uT, [...Y[25] || (Y[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(H, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", dT, [
                  t("div", fT, [
                    Y[27] || (Y[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Y[28] || (Y[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Y[5] || (Y[5] = (Ce) => $.value = !0),
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
                p.value === "landing" ? (a(), r("div", mT, [
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
                      T.value = !1, p.value = "import";
                    })
                  }, [...Y[32] || (Y[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Me = o.existingEnvironments) != null && Me.length ? (a(), r(H, { key: 0 }, [
                    Y[33] || (Y[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", vT, [
                      (a(!0), r(H, null, ye(o.existingEnvironments, (Ce) => (a(), r("label", {
                        key: Ce,
                        class: Ee(["env-option", { selected: w.value === Ce }])
                      }, [
                        qe(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ce,
                          "onUpdate:modelValue": Y[8] || (Y[8] = (he) => w.value = he)
                        }, null, 8, pT), [
                          [es, w.value]
                        ]),
                        t("span", gT, f(Ce), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", hT, [
                  De.value ? (a(), r("div", TT, [
                    t("p", PT, [
                      Y[41] || (Y[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(te.value), 1),
                      Y[42] || (Y[42] = b("... ", -1))
                    ]),
                    x(Bn, {
                      progress: Ue.value.progress,
                      message: Ue.value.message,
                      "current-phase": Ue.value.phase,
                      "show-steps": !0,
                      steps: Ye
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Y[43] || (Y[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(H, { key: 0 }, [
                    Y[40] || (Y[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", yT, [
                      Y[35] || (Y[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      qe(t("input", {
                        "onUpdate:modelValue": Y[9] || (Y[9] = (Ce) => te.value = Ce),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [zt, te.value]
                      ])
                    ]),
                    t("div", wT, [
                      Y[36] || (Y[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[10] || (Y[10] = (Ce) => B.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), r(H, null, ye(We(Ur), (Ce) => (a(), r("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce), 9, _T))), 128))
                      ], 512), [
                        [hs, B.value]
                      ])
                    ]),
                    t("div", kT, [
                      Y[37] || (Y[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[11] || (Y[11] = (Ce) => A.value = Ce),
                        class: "form-select",
                        disabled: _e.value
                      }, [
                        (a(!0), r(H, null, ye(Z.value, (Ce) => (a(), r("option", {
                          key: Ce.tag_name,
                          value: Ce.tag_name
                        }, f(Ce.name), 9, $T))), 128))
                      ], 8, bT), [
                        [hs, A.value]
                      ])
                    ]),
                    t("div", CT, [
                      Y[38] || (Y[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      qe(t("select", {
                        "onUpdate:modelValue": Y[12] || (Y[12] = (Ce) => W.value = Ce),
                        class: "form-select"
                      }, [
                        (a(!0), r(H, null, ye(We(ll), (Ce) => (a(), r("option", {
                          key: Ce,
                          value: Ce
                        }, f(Ce) + f(Ce === "auto" ? " (detect GPU)" : ""), 9, xT))), 128))
                      ], 512), [
                        [hs, W.value]
                      ])
                    ]),
                    t("div", ST, [
                      t("label", IT, [
                        qe(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Y[13] || (Y[13] = (Ce) => X.value = Ce)
                        }, null, 512), [
                          [nn, X.value]
                        ]),
                        Y[39] || (Y[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (a(), r("div", ET, f(U.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", RT, [
                  x(Wr, {
                    "workspace-path": ae.value,
                    "resume-import": T.value,
                    "initial-progress": D.value ?? void 0,
                    onImportComplete: we,
                    onImportStarted: Y[14] || (Y[14] = (Ce) => C.value = !0),
                    onSourceCleared: ge
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", MT, [
            x(Yr),
            t("div", DT, [
              g.value === 1 ? (a(), M(Te, {
                key: 0,
                variant: "primary",
                disabled: !Ie.value || be.value,
                onClick: q
              }, {
                default: h(() => [
                  b(f(be.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(H, { key: 1 }, [
                !De.value && !C.value && (p.value !== "landing" || o.setupState === "no_workspace" && !ae.value) ? (a(), M(Te, {
                  key: 0,
                  variant: "secondary",
                  onClick: ie
                }, {
                  default: h(() => [...Y[44] || (Y[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), M(Te, {
                  key: 1,
                  variant: "primary",
                  disabled: !Pe.value || De.value,
                  onClick: ne
                }, {
                  default: h(() => [
                    b(f(De.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), M(Te, {
                  key: 2,
                  variant: "primary",
                  onClick: $e
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
      _.value ? (a(), M(YE, {
        key: 0,
        "workspace-path": O.value,
        onClose: Y[16] || (Y[16] = (Me) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), OT = /* @__PURE__ */ pe(AT, [["__scopeId", "data-v-9a9aadc0"]]), NT = { class: "comfygit-panel" }, UT = { class: "panel-header" }, zT = { class: "header-left" }, FT = {
  key: 0,
  class: "header-info"
}, BT = { class: "header-actions" }, VT = { class: "env-switcher" }, WT = {
  key: 0,
  class: "header-info"
}, GT = { class: "branch-name" }, jT = { class: "panel-main" }, HT = { class: "sidebar" }, KT = { class: "sidebar-content" }, qT = { class: "sidebar-section" }, YT = { class: "sidebar-section" }, JT = { class: "sidebar-section" }, QT = {
  key: 0,
  class: "sidebar-badge"
}, XT = { class: "sidebar-footer" }, ZT = { class: "content-area" }, e7 = {
  key: 0,
  class: "error-message"
}, t7 = {
  key: 1,
  class: "loading"
}, s7 = { class: "dialog-content env-selector-dialog" }, o7 = { class: "dialog-header" }, n7 = { class: "dialog-body" }, a7 = { class: "env-list" }, l7 = { class: "env-info" }, i7 = { class: "env-name-row" }, r7 = { class: "env-indicator" }, c7 = { class: "env-name" }, u7 = {
  key: 0,
  class: "env-branch"
}, d7 = {
  key: 1,
  class: "current-label"
}, f7 = { class: "env-stats" }, m7 = ["onClick"], v7 = { class: "toast-container" }, p7 = { class: "toast-message" }, oi = "ComfyGit.LastView", ni = "ComfyGit.LastSection", g7 = /* @__PURE__ */ fe({
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
      repairWorkflowModels: $,
      getSetupStatus: T
    } = tt(), D = sp(), { liveInstanceCount: E } = Gr({ autoStart: !0 }), I = k(null), G = k([]), K = k([]), F = k([]), P = N(() => F.value.find((le) => le.is_current)), S = k(null), L = k(!1), te = k(1), B = N(() => {
      var le;
      return ((le = S.value) == null ? void 0 : le.state) || "managed";
    }), A = k(!1), W = k(null), X = k(null), U = k(!1), ae = k(null), Z = k(null), _e = k(null), be = k(!1), De = k(!1), ze = k(""), Ue = k(null), Ye = k({ state: "idle", progress: 0, message: "" });
    let ve = null, oe = null;
    const ce = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ue = o.initialView ? ce[o.initialView] : null, Ie = [
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
        const le = sessionStorage.getItem(oi), J = sessionStorage.getItem(ni);
        if (le && J && Ie.includes(le) && Pe.includes(J))
          return { view: le, section: J };
      } catch {
      }
      return null;
    }
    const O = Fe(), R = k((ue == null ? void 0 : ue.view) ?? (O == null ? void 0 : O.view) ?? "status"), z = k((ue == null ? void 0 : ue.section) ?? (O == null ? void 0 : O.section) ?? "this-env");
    function q(le, J) {
      R.value = le, z.value = J;
      try {
        sessionStorage.setItem(oi, le), sessionStorage.setItem(ni, J);
      } catch {
      }
    }
    function ne(le) {
      const Le = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[le];
      Le && q(Le.view, Le.section);
    }
    function re() {
      q("branches", "this-env");
    }
    function $e() {
      n("close"), setTimeout(() => {
        var J;
        const le = document.querySelectorAll("button.comfyui-button");
        for (const Le of le)
          if (((J = Le.textContent) == null ? void 0 : J.trim()) === "Manager") {
            Le.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ie = k(null), we = k(!1), ge = k(!1), Re = k([]);
    let Se = 0;
    function ee(le, J = "info", Le = 3e3) {
      const je = ++Se;
      return Re.value.push({ id: je, message: le, type: J }), Le > 0 && setTimeout(() => {
        Re.value = Re.value.filter((at) => at.id !== je);
      }, Le), je;
    }
    function Y(le) {
      Re.value = Re.value.filter((J) => J.id !== le);
    }
    function Me(le, J) {
      ee(le, J);
    }
    const Ce = N(() => {
      if (!I.value) return "neutral";
      const le = I.value.workflows, J = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || I.value.has_changes;
      return I.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    N(() => I.value ? Ce.value === "success" ? "All synced" : Ce.value === "warning" ? "Uncommitted changes" : Ce.value === "error" ? "Not synced" : "" : "");
    async function he() {
      A.value = !0, W.value = null;
      try {
        const [le, J, Le, je] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        I.value = le, G.value = J.commits, K.value = Le.branches, F.value = je, n("statusUpdate", le), ae.value && await ae.value.loadWorkflows(!0);
      } catch (le) {
        W.value = le instanceof Error ? le.message : "Failed to load status", I.value = null, G.value = [], K.value = [];
      } finally {
        A.value = !1;
      }
    }
    function j(le) {
      X.value = le;
    }
    async function V(le) {
      var Le;
      X.value = null;
      const J = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      ie.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Le = le.hash) == null ? void 0 : Le.slice(0, 7))}?`,
        details: J ? Hs() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var vt;
          ie.value = null, st();
          const je = ee(`Checking out ${le.short_hash || ((vt = le.hash) == null ? void 0 : vt.slice(0, 7))}...`, "info", 0), at = await u(le.hash, J);
          Y(je), at.status === "success" ? ee("Restarting ComfyUI...", "success") : ee(at.message || "Checkout failed", "error");
        }
      };
    }
    async function me(le) {
      const J = I.value && (I.value.workflows.new.length > 0 || I.value.workflows.modified.length > 0 || I.value.workflows.deleted.length > 0 || I.value.has_changes);
      ie.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: J ? Hs() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, st();
          const Le = ee(`Switching to ${le}...`, "info", 0), je = await m(le, J);
          Y(Le), je.status === "success" ? ee("Restarting ComfyUI...", "success") : ee(je.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ve(le) {
      const J = ee(`Creating branch ${le}...`, "info", 0), Le = await d(le);
      Y(J), Le.status === "success" ? (ee(`Branch "${le}" created`, "success"), await he()) : ee(Le.message || "Failed to create branch", "error");
    }
    async function Ze(le, J = !1) {
      const Le = async (je) => {
        var vt;
        const at = ee(`Deleting branch ${le}...`, "info", 0);
        try {
          const Jt = await v(le, je);
          Y(at), Jt.status === "success" ? (ee(`Branch "${le}" deleted`, "success"), await he()) : (vt = Jt.message) != null && vt.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Le(!0);
            }
          } : ee(Jt.message || "Failed to delete branch", "error");
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
              ie.value = null, await Le(!0);
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
          ie.value = null, await Le(J);
        }
      };
    }
    async function It(le) {
      X.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const Le = ee(`Creating branch ${J}...`, "info", 0), je = await d(J, le.hash);
        Y(Le), je.status === "success" ? (ee(`Branch "${J}" created from ${le.short_hash}`, "success"), await he()) : ee(je.message || "Failed to create branch", "error");
      }
    }
    function st() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function pt() {
      ie.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var le;
          ie.value = null, st(), ee("Restarting environment...", "info");
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
    async function yt(le, J) {
      U.value = !1, ze.value = le, Ue.value = J || null, be.value = !0;
    }
    async function Io() {
      be.value = !1, De.value = !0, st(), Ye.value = {
        progress: 10,
        state: is(10),
        message: ys(10)
      };
      try {
        await w(ze.value, Ue.value || void 0), ao(), Eo();
      } catch (le) {
        Yt(), De.value = !1, ee(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), Ye.value = { state: "idle", progress: 0, message: "" }, Ue.value = null;
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
      const J = 60, Le = 5e3, je = 100, at = (J - le) / (Le / je);
      oe = window.setInterval(() => {
        if (le += at, le >= J && (le = J, Yt()), Ye.value.progress < J) {
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
          let le = await D.getStatus();
          if ((!le || le.state === "idle") && (le = await p()), !le)
            return;
          const J = le.progress || 0;
          J >= 60 && Yt();
          const Le = Math.max(J, Ye.value.progress), je = le.state && le.state !== "idle" && le.state !== "unknown", at = je ? le.state : is(Le), vt = je && le.message || ys(Le);
          Ye.value = {
            state: at,
            progress: Le,
            message: vt
          }, le.state === "complete" ? (Yt(), js(), De.value = !1, ee(`✓ Switched to ${ze.value}`, "success"), await he(), ze.value = "") : le.state === "rolled_back" ? (Yt(), js(), De.value = !1, ee("Switch failed, restored previous environment", "warning"), ze.value = "") : le.state === "critical_failure" && (Yt(), js(), De.value = !1, ee(`Critical error during switch: ${le.message}`, "error"), ze.value = "");
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
      be.value = !1, ze.value = "", (le = S.value) != null && le.state && S.value.state !== "managed" && (te.value = S.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function se(le) {
      we.value = !1, await he(), ee(le.message, le.success ? "success" : "error");
    }
    async function He() {
      ge.value = !1;
      const le = ee("Syncing environment...", "info", 0);
      try {
        const J = await C("skip", !0);
        if (Y(le), J.status === "success") {
          const Le = [];
          J.nodes_installed.length && Le.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && Le.push(`${J.nodes_removed.length} removed`);
          const je = Le.length ? `: ${Le.join(", ")}` : "";
          ee(`✓ Environment synced${je}`, "success"), await he();
        } else {
          const Le = J.errors.length ? J.errors.join("; ") : J.message;
          ee(`Sync failed: ${Le}`, "error");
        }
      } catch (J) {
        Y(le), ee(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function wt(le) {
      var J;
      try {
        const Le = await $(le);
        Le.failed.length === 0 ? ee(`✓ Repaired ${Le.success} workflow${Le.success === 1 ? "" : "s"}`, "success") : ee(`Repaired ${Le.success}, failed: ${Le.failed.length}`, "warning"), await he();
      } catch (Le) {
        ee(`Repair failed: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
      } finally {
        (J = _e.value) == null || J.resetRepairingState();
      }
    }
    async function Bt() {
      var J, Le;
      const le = ee("Repairing environment...", "info", 0);
      try {
        const je = await C("skip", !0);
        if (Y(le), je.status === "success") {
          const at = [];
          je.nodes_installed.length && at.push(`${je.nodes_installed.length} installed`), je.nodes_removed.length && at.push(`${je.nodes_removed.length} removed`);
          const vt = at.length ? `: ${at.join(", ")}` : "";
          ee(`✓ Environment repaired${vt}`, "success"), (J = _e.value) == null || J.closeDetailModal(), await he();
        } else {
          const at = je.errors.length ? je.errors.join(", ") : je.message || "Unknown error";
          ee(`Repair failed: ${at}`, "error");
        }
      } catch (je) {
        Y(le), ee(`Repair error: ${je instanceof Error ? je.message : "Unknown error"}`, "error");
      } finally {
        (Le = _e.value) == null || Le.resetRepairingEnvironmentState();
      }
    }
    async function ws(le, J) {
      ee(`Environment '${le}' created`, "success"), await he(), Z.value && await Z.value.loadEnvironments(), J && await yt(le);
    }
    async function _s(le) {
      var J;
      if (((J = P.value) == null ? void 0 : J.name) === le) {
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
            const Le = await _(le);
            Le.status === "success" ? (ee(`Environment "${le}" deleted`, "success"), await he(), Z.value && await Z.value.loadEnvironments()) : ee(Le.message || "Failed to delete environment", "error");
          } catch (Le) {
            ee(`Error deleting environment: ${Le instanceof Error ? Le.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function rs(le, J) {
      L.value = !1;
      try {
        S.value = await T();
      } catch {
      }
      await yt(le, J);
    }
    function Oe() {
      L.value = !1, n("close");
    }
    async function ks(le, J) {
      await yt(le, J);
    }
    async function cs(le) {
      await he(), await yt(le);
    }
    async function lo(le) {
      S.value = await T(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function io() {
      q("environments", "all-envs"), setTimeout(() => {
        var le;
        (le = Z.value) == null || le.openCreateModal();
      }, 100);
    }
    function Hs() {
      if (!I.value) return [];
      const le = [], J = I.value.workflows;
      return J.new.length && le.push(`${J.new.length} new workflow(s)`), J.modified.length && le.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && le.push(`${J.deleted.length} deleted workflow(s)`), le;
    }
    return Qe(async () => {
      try {
        if (S.value = await T(), S.value.state === "no_workspace") {
          L.value = !0, te.value = 1;
          return;
        }
        if (S.value.state === "empty_workspace") {
          L.value = !0, te.value = 2;
          return;
        }
        if (S.value.state === "unmanaged") {
          L.value = !0, te.value = 2;
          return;
        }
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await he();
    }), (le, J) => {
      var Le, je, at, vt, Jt, Ks, dn, fn, mn, Q, ke, Ae, lt;
      return a(), r("div", NT, [
        t("div", UT, [
          t("div", zT, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            I.value ? (a(), r("div", FT)) : y("", !0)
          ]),
          t("div", BT, [
            x(qr),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ee(["icon-btn", { spinning: A.value }]),
              onClick: he,
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
              onClick: J[0] || (J[0] = (Ne) => n("close")),
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
        t("div", VT, [
          t("div", { class: "env-switcher-header" }, [
            J[35] || (J[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
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
            onClick: J[1] || (J[1] = (Ne) => q("environments", "all-envs"))
          }, [
            I.value ? (a(), r("div", WT, [
              t("span", null, f(((Le = P.value) == null ? void 0 : Le.name) || ((je = I.value) == null ? void 0 : je.environment) || "Loading..."), 1),
              t("span", GT, "(" + f(I.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", jT, [
          t("div", HT, [
            t("div", KT, [
              t("div", qT, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "status" && z.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (Ne) => q("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (Ne) => q("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (Ne) => q("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "branches" }]),
                  onClick: J[5] || (J[5] = (Ne) => q("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "history" }]),
                  onClick: J[6] || (J[6] = (Ne) => q("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (Ne) => q("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (Ne) => q("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", YT, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "environments" }]),
                  onClick: J[9] || (J[9] = (Ne) => q("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (Ne) => q("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "settings" }]),
                  onClick: J[11] || (J[11] = (Ne) => q("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (Ne) => q("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", JT, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (Ne) => q("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = b(" DEPLOY ", -1)),
                  We(E) > 0 ? (a(), r("span", QT, f(We(E)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "export" }]),
                  onClick: J[14] || (J[14] = (Ne) => q("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "import" }]),
                  onClick: J[15] || (J[15] = (Ne) => q("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ee(["sidebar-item", { active: R.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (Ne) => q("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", XT, [
              x(Yr)
            ])
          ]),
          t("div", ZT, [
            W.value ? (a(), r("div", e7, f(W.value), 1)) : !I.value && R.value === "status" ? (a(), r("div", t7, " Loading status... ")) : (a(), r(H, { key: 2 }, [
              R.value === "status" ? (a(), M(uv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: _e,
                status: I.value,
                "setup-state": B.value,
                onSwitchBranch: re,
                onCommitChanges: J[17] || (J[17] = (Ne) => we.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (Ne) => ge.value = !0),
                onViewWorkflows: J[19] || (J[19] = (Ne) => q("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (Ne) => q("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (Ne) => q("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (Ne) => q("nodes", "this-env")),
                onRepairMissingModels: wt,
                onRepairEnvironment: Bt,
                onStartSetup: J[23] || (J[23] = (Ne) => L.value = !0),
                onViewEnvironments: J[24] || (J[24] = (Ne) => q("environments", "all-envs")),
                onCreateEnvironment: io
              }, null, 8, ["status", "setup-state"])) : R.value === "workflows" ? (a(), M(Y0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ae,
                onRefresh: he
              }, null, 512)) : R.value === "models-env" ? (a(), M(uk, {
                key: 2,
                onNavigate: ne
              })) : R.value === "branches" ? (a(), M(Zv, {
                key: 3,
                branches: K.value,
                current: ((at = I.value) == null ? void 0 : at.branch) || null,
                onSwitch: me,
                onCreate: Ve,
                onDelete: Ze
              }, null, 8, ["branches", "current"])) : R.value === "history" ? (a(), M(tp, {
                key: 4,
                commits: G.value,
                "current-ref": (vt = I.value) == null ? void 0 : vt.branch,
                onSelect: j,
                onCheckout: V
              }, null, 8, ["commits", "current-ref"])) : R.value === "nodes" ? (a(), M(eb, {
                key: 5,
                "version-mismatches": ((Ks = (Jt = I.value) == null ? void 0 : Jt.comparison) == null ? void 0 : Ks.version_mismatches) || [],
                onOpenNodeManager: $e,
                onRepairEnvironment: Bt,
                onToast: Me
              }, null, 8, ["version-mismatches"])) : R.value === "debug-env" ? (a(), M(vC, { key: 6 })) : R.value === "environments" ? (a(), M(hx, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Z,
                onSwitch: yt,
                onCreated: ws,
                onDelete: _s
              }, null, 512)) : R.value === "model-index" ? (a(), M(Ck, {
                key: 8,
                onRefresh: he
              })) : R.value === "settings" ? (a(), M(aC, { key: 9 })) : R.value === "debug-workspace" ? (a(), M(mC, { key: 10 })) : R.value === "deploy" ? (a(), M(q6, {
                key: 11,
                onToast: Me,
                onNavigate: ne
              })) : R.value === "export" ? (a(), M(Kx, { key: 12 })) : R.value === "import" ? (a(), M(F5, {
                key: 13,
                onImportCompleteSwitch: cs
              })) : R.value === "remotes" ? (a(), M(z$, {
                key: 14,
                onToast: Me
              })) : y("", !0)
            ], 64))
          ])
        ]),
        X.value ? (a(), M(fI, {
          key: 0,
          commit: X.value,
          onClose: J[25] || (J[25] = (Ne) => X.value = null),
          onCheckout: V,
          onCreateBranch: It
        }, null, 8, ["commit"])) : y("", !0),
        ie.value ? (a(), M(al, {
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
          onCancel: J[26] || (J[26] = (Ne) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        x(fE, {
          show: be.value,
          "from-environment": ((dn = P.value) == null ? void 0 : dn.name) || "unknown",
          "to-environment": ze.value,
          onConfirm: Io,
          onClose: xe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        we.value && I.value ? (a(), M(Kr, {
          key: 2,
          status: I.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (Ne) => we.value = !1),
          onCommitted: se
        }, null, 8, ["status"])) : y("", !0),
        ge.value && I.value ? (a(), M(ME, {
          key: 3,
          show: ge.value,
          "mismatch-details": {
            missing_nodes: I.value.comparison.missing_nodes,
            extra_nodes: I.value.comparison.extra_nodes
          },
          onConfirm: He,
          onClose: J[28] || (J[28] = (Ne) => ge.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        x($E, {
          show: De.value,
          state: Ye.value.state,
          progress: Ye.value.progress,
          message: Ye.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = rt((Ne) => U.value = !1, ["self"]))
        }, [
          t("div", s7, [
            t("div", o7, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (Ne) => U.value = !1)
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
            t("div", n7, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", a7, [
                (a(!0), r(H, null, ye(F.value, (Ne) => (a(), r("div", {
                  key: Ne.name,
                  class: Ee(["env-item", { current: Ne.is_current }])
                }, [
                  t("div", l7, [
                    t("div", i7, [
                      t("span", r7, f(Ne.is_current ? "●" : "○"), 1),
                      t("span", c7, f(Ne.name), 1),
                      Ne.current_branch ? (a(), r("span", u7, "(" + f(Ne.current_branch) + ")", 1)) : y("", !0),
                      Ne.is_current ? (a(), r("span", d7, "CURRENT")) : y("", !0)
                    ]),
                    t("div", f7, f(Ne.workflow_count) + " workflows • " + f(Ne.node_count) + " nodes ", 1)
                  ]),
                  Ne.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Qt) => yt(Ne.name)
                  }, " SWITCH ", 8, m7))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        L.value ? (a(), M(OT, {
          key: 5,
          "default-path": ((fn = S.value) == null ? void 0 : fn.default_path) || "~/comfygit",
          "detected-models-dir": ((mn = S.value) == null ? void 0 : mn.detected_models_dir) || null,
          "initial-step": te.value,
          "existing-environments": ((Q = S.value) == null ? void 0 : Q.environments) || [],
          "cli-installed": ((ke = S.value) == null ? void 0 : ke.cli_installed) ?? !0,
          "setup-state": ((Ae = S.value) == null ? void 0 : Ae.state) || "no_workspace",
          "workspace-path": ((lt = S.value) == null ? void 0 : lt.workspace_path) || null,
          onComplete: rs,
          onClose: Oe,
          onSwitchEnvironment: ks,
          onEnvironmentCreatedNoSwitch: lo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", v7, [
          x(_d, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(H, null, ye(Re.value, (Ne) => (a(), r("div", {
                key: Ne.id,
                class: Ee(["toast", Ne.type])
              }, [
                t("span", p7, f(Ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), h7 = /* @__PURE__ */ pe(g7, [["__scopeId", "data-v-45a711b4"]]), y7 = { class: "item-header" }, w7 = { class: "item-info" }, _7 = { class: "filename" }, k7 = { class: "metadata" }, b7 = { class: "size" }, $7 = {
  key: 0,
  class: "type"
}, C7 = { class: "item-actions" }, x7 = {
  key: 0,
  class: "progress-section"
}, S7 = { class: "progress-bar" }, I7 = { class: "progress-stats" }, E7 = { class: "downloaded" }, T7 = { class: "speed" }, P7 = {
  key: 0,
  class: "eta"
}, R7 = {
  key: 1,
  class: "status-msg paused"
}, M7 = {
  key: 2,
  class: "status-msg queued"
}, D7 = {
  key: 3,
  class: "status-msg completed"
}, L7 = {
  key: 4,
  class: "status-msg failed"
}, A7 = {
  key: 0,
  class: "retries"
}, O7 = /* @__PURE__ */ fe({
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
      class: Ee(["download-item", `status-${e.item.status}`])
    }, [
      t("div", y7, [
        t("div", w7, [
          t("div", _7, f(e.item.filename), 1),
          t("div", k7, [
            t("span", b7, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", $7, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", C7, [
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
      e.item.status === "downloading" ? (a(), r("div", x7, [
        t("div", S7, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", I7, [
          t("span", E7, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", T7, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", P7, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", R7, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", M7, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", D7, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", L7, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", A7, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ pe(O7, [["__scopeId", "data-v-2110df65"]]), N7 = { class: "queue-title" }, U7 = { class: "count" }, z7 = { class: "queue-actions" }, F7 = { class: "action-label" }, B7 = {
  key: 0,
  class: "overall-progress"
}, V7 = { class: "progress-bar" }, W7 = {
  key: 0,
  class: "current-mini"
}, G7 = { class: "filename" }, j7 = { class: "speed" }, H7 = {
  key: 1,
  class: "queue-content"
}, K7 = {
  key: 0,
  class: "section"
}, q7 = {
  key: 1,
  class: "section"
}, Y7 = { class: "section-header" }, J7 = { class: "section-label paused" }, Q7 = { class: "items-list" }, X7 = {
  key: 2,
  class: "section"
}, Z7 = { class: "section-header" }, eP = { class: "section-label" }, tP = { class: "items-list" }, sP = {
  key: 3,
  class: "section"
}, oP = { class: "section-header" }, nP = { class: "section-label" }, aP = { class: "items-list" }, lP = {
  key: 4,
  class: "section"
}, iP = { class: "section-header" }, rP = { class: "section-label failed" }, cP = { class: "items-list" }, uP = /* @__PURE__ */ fe({
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
    let $ = null;
    ft(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (I, G) => {
        $ && (clearTimeout($), $ = null);
        const K = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, F = G && (G.active > 0 || G.paused > 0);
        K && F && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const T = N(() => {
      var K;
      if (s.items.length === 0) return 0;
      const I = l.value.length, G = ((K = o.value) == null ? void 0 : K.progress) || 0;
      return Math.round((I + G / 100) / s.items.length * 100);
    });
    function D(I) {
      m(I);
    }
    function E(I) {
      return I === 0 ? "" : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, G) => (a(), M(kt, { to: "body" }, [
      We(u) ? (a(), r("div", {
        key: 0,
        class: Ee(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: G[0] || (G[0] = (K) => C.value = !C.value)
        }, [
          t("div", N7, [
            G[4] || (G[4] = t("span", { class: "icon" }, "↓", -1)),
            G[5] || (G[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", U7, "(" + f(We(d)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", z7, [
            t("span", F7, f(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), r("div", H7, [
          We(o) ? (a(), r("div", K7, [
            G[6] || (G[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            x(Ao, {
              item: We(o),
              onCancel: G[1] || (G[1] = (K) => D(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", q7, [
            t("div", Y7, [
              t("span", J7, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: G[2] || (G[2] = //@ts-ignore
                (...K) => We(w) && We(w)(...K))
              }, "Resume All")
            ]),
            t("div", Q7, [
              (a(!0), r(H, null, ye(We(c), (K) => (a(), M(Ao, {
                key: K.id,
                item: K,
                onResume: (F) => We(g)(K.id),
                onRemove: (F) => We(p)(K.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", X7, [
            t("div", Z7, [
              t("span", eP, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", tP, [
              (a(!0), r(H, null, ye(We(n), (K) => (a(), M(Ao, {
                key: K.id,
                item: K,
                onCancel: (F) => D(K.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", sP, [
            t("div", oP, [
              t("span", nP, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: G[3] || (G[3] = //@ts-ignore
                (...K) => We(_) && We(_)(...K))
              }, "Clear")
            ]),
            t("div", aP, [
              (a(!0), r(H, null, ye(We(l).slice(0, 3), (K) => (a(), M(Ao, {
                key: K.id,
                item: K,
                onRemove: (F) => We(p)(K.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", lP, [
            t("div", iP, [
              t("span", rP, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", cP, [
              (a(!0), r(H, null, ye(We(i), (K) => (a(), M(Ao, {
                key: K.id,
                item: K,
                onRetry: (F) => We(v)(K.id),
                onRemove: (F) => We(p)(K.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", B7, [
          t("div", V7, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${T.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", W7, [
            t("span", G7, f(We(o).filename), 1),
            t("span", j7, f(E(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), dP = /* @__PURE__ */ pe(uP, [["__scopeId", "data-v-60751cfa"]]), fP = { class: "detail-header" }, mP = { class: "item-count" }, vP = { class: "resource-list" }, pP = { class: "item-info" }, gP = { class: "item-name" }, hP = {
  key: 0,
  class: "item-subtitle"
}, yP = {
  key: 0,
  class: "installing-badge"
}, wP = ["title"], _P = {
  key: 2,
  class: "installed-badge"
}, kP = {
  key: 3,
  class: "queued-badge"
}, bP = {
  key: 1,
  class: "no-action"
}, $P = /* @__PURE__ */ fe({
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
    return (p, _) => (a(), M(ut, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => n("close"))
    }, {
      body: h(() => [
        t("div", fP, [
          t("span", mP, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          i.value.length > 1 ? (a(), M(Te, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: c.value,
            onClick: _[0] || (_[0] = (C) => n("bulk-action"))
          }, {
            default: h(() => [
              b(f(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", vP, [
          (a(!0), r(H, null, ye(e.items, (C) => (a(), r("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", pP, [
              t("span", gP, f(C.name), 1),
              C.subtitle ? (a(), r("span", hP, f(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), r(H, { key: 0 }, [
              m(C) ? (a(), r("span", yP, "Installing...")) : g(C) ? (a(), r("span", {
                key: 1,
                class: "failed-badge",
                title: w(C)
              }, "Failed ⚠", 8, wP)) : v(C) ? (a(), r("span", _P, "Installed")) : d(C) ? (a(), r("span", kP, "Queued")) : (a(), M(Te, {
                key: 4,
                size: "sm",
                variant: "secondary",
                onClick: ($) => n("action", C)
              }, {
                default: h(() => [
                  b(f(l.value), 1)
                ]),
                _: 1
              }, 8, ["onClick"]))
            ], 64)) : (a(), r("span", bP, f(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        x(Te, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => n("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            b("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), CP = /* @__PURE__ */ pe($P, [["__scopeId", "data-v-fac0fef0"]]), xP = {
  key: 0,
  class: "loading-state"
}, SP = {
  key: 1,
  class: "analysis-results"
}, IP = {
  key: 0,
  class: "section"
}, EP = { class: "section-header" }, TP = { class: "section-title" }, PP = { class: "item-list" }, RP = { class: "package-info" }, MP = { class: "package-name" }, DP = { class: "node-count" }, LP = {
  key: 1,
  class: "installing-badge"
}, AP = {
  key: 2,
  class: "queued-badge"
}, OP = ["title"], NP = {
  key: 4,
  class: "installed-badge"
}, UP = {
  key: 1,
  class: "section"
}, zP = { class: "section-header" }, FP = { class: "section-title" }, BP = { class: "item-list" }, VP = { class: "node-type" }, WP = {
  key: 0,
  class: "overflow-note"
}, GP = {
  key: 2,
  class: "section"
}, jP = { class: "section-header" }, HP = { class: "section-title" }, KP = { class: "item-list" }, qP = { class: "model-info" }, YP = { class: "model-name" }, JP = {
  key: 1,
  class: "queued-badge"
}, QP = {
  key: 1,
  class: "no-url"
}, XP = { class: "dont-show-again" }, ZP = /* @__PURE__ */ fe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), m = k(!1), v = k(null), g = k(0), w = k(null), p = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), { addToQueue: C } = xo(), { queueNodeInstall: $ } = tt(), T = N(() => D.value.length > 0 || I.value.length > 0 || G.value.length > 0), D = N(() => {
      var q, ne;
      if (!((q = n.value) != null && q.nodes)) return [];
      const R = /* @__PURE__ */ new Map(), z = (n.value.nodes.resolved || []).filter((re) => {
        var $e;
        return !re.is_installed && (($e = re.package) == null ? void 0 : $e.package_id);
      });
      for (const re of z) {
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
    }), E = N(() => D.value.reduce((R, z) => R + z.node_count, 0)), I = N(() => {
      var R;
      return (R = n.value) != null && R.nodes ? (n.value.nodes.unresolved || []).map((z) => {
        var q;
        return {
          node_type: ((q = z.reference) == null ? void 0 : q.node_type) || z.node_type
        };
      }) : [];
    }), G = N(() => {
      var q;
      if (!((q = n.value) != null && q.models)) return [];
      const R = (n.value.models.resolved || []).filter(
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
      }), z = (n.value.models.unresolved || []).map((ne) => {
        var re, $e, ie, we;
        return {
          filename: (($e = (re = ne.reference) == null ? void 0 : re.widget_value) == null ? void 0 : $e.split("/").pop()) || ((ie = ne.reference) == null ? void 0 : ie.widget_value) || ne.widget_value,
          widget_value: ((we = ne.reference) == null ? void 0 : we.widget_value) || ne.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...R, ...z];
    }), K = N(() => G.value.filter((R) => R.canDownload)), F = N(() => D.value.length >= 5 ? D.value.slice(0, 4) : D.value), P = N(() => G.value.length >= 5 ? G.value.slice(0, 4) : G.value), S = N(() => D.value.length > 0 && D.value.every(
      (R) => i.value.has(R.package_id) || c.value.has(R.package_id) || u.value.has(R.package_id)
    )), L = N(() => K.value.length > 0 && K.value.every((R) => d.value.has(R.url))), te = N(() => D.value.length > 0 || K.value.length > 0), B = N(() => {
      const R = D.value.length === 0 || S.value, z = K.value.length === 0 || L.value;
      return R && z;
    }), A = N(() => w.value === "models" ? `Missing Models (${G.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${E.value})` : ""), W = N(() => w.value === "models" ? G.value.map((R) => ({
      id: R.url || R.widget_value,
      name: R.filename,
      canAction: R.canDownload,
      actionDisabledReason: R.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? D.value.map((R) => ({
      id: R.package_id,
      name: R.title,
      subtitle: `(${R.node_count} ${R.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : []);
    function X(R) {
      if (w.value === "models") {
        const z = G.value.find((q) => q.url === R.id || q.widget_value === R.id);
        z && Z(z);
      } else if (w.value === "packages") {
        const z = D.value.find((q) => q.package_id === R.id);
        z && ae(z);
      }
    }
    function U() {
      w.value === "models" ? be() : w.value === "packages" && _e();
    }
    async function ae(R) {
      const z = R.package_id;
      if (!(i.value.has(z) || c.value.has(z) || u.value.has(z))) {
        Fe(), v.value = z;
        try {
          const { ui_id: q } = await $({
            id: z,
            version: R.latest_version || "latest",
            selected_version: R.latest_version || "latest",
            repository: R.repository || void 0,
            mode: "remote",
            channel: "default"
          });
          _.value.set(q, z), c.value.add(z), console.log("[ComfyGit] Registered pending install:", { ui_id: q, packageId: z, pendingInstalls: Array.from(_.value.entries()) });
        } catch (q) {
          console.error("[ComfyGit] Failed to queue package install:", q), u.value.set(z, "Failed to queue install request");
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
      for (const R of D.value)
        !i.value.has(R.package_id) && !c.value.has(R.package_id) && !u.value.has(R.package_id) && await ae(R);
    }
    function be() {
      const R = K.value.filter(
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
    function De() {
      _e(), be();
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
      const z = R == null ? void 0 : R.id;
      if (z && p.value.has(z)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${z} this session`);
        return;
      }
      const q = window.app, ne = (re = q == null ? void 0 : q.extensionManager) == null ? void 0 : re.workflow;
      if (ne) {
        let ge = !1;
        for (let Re = 0; Re < 20; Re++) {
          const Se = ne.activeWorkflow;
          if (!Se) {
            await new Promise((Me) => setTimeout(Me, 50));
            continue;
          }
          const ee = ($e = Se.activeState) == null ? void 0 : $e.id;
          if (!(z && ee === z)) {
            Re < 19 && await new Promise((Me) => setTimeout(Me, 50));
            continue;
          }
          if (ge = !0, Se.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${Se.filename}`), z && p.value.add(z);
            return;
          }
          break;
        }
        ge || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), m.value = !1, g.value = 0;
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
        n.value = await ie.json(), T.value && (l.value = !0, z && p.value.add(z));
      } catch (ie) {
        console.error("[ComfyGit] Failed to analyze workflow:", ie);
      } finally {
        s.value = !1;
      }
    }
    function Ye() {
      l.value = !1, n.value = null;
    }
    function ve(R) {
      const { workflow: z } = R.detail;
      z && Ue(z);
    }
    function oe(R) {
      var ne;
      const z = (ne = R.detail) == null ? void 0 : ne.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: z,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const q = _.value.get(z);
      q ? (v.value = q, console.log("[ComfyGit] Installing package:", q)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", z);
    }
    function ce(R) {
      var re, $e, ie, we, ge, Re, Se;
      const z = (re = R.detail) == null ? void 0 : re.ui_id, q = (ie = ($e = R.detail) == null ? void 0 : $e.status) == null ? void 0 : ie.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: z,
        status: q,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: R.detail
      });
      const ne = _.value.get(z);
      if (ne) {
        if (_.value.delete(z), c.value.delete(ne), v.value === ne && (v.value = null), q === "success")
          i.value.add(ne), g.value++, console.log("[ComfyGit] Package installed successfully:", ne);
        else {
          const ee = ((Re = (ge = (we = R.detail) == null ? void 0 : we.status) == null ? void 0 : ge.messages) == null ? void 0 : Re[0]) || ((Se = R.detail) == null ? void 0 : Se.result) || "Unknown error";
          u.value.set(ne, ee), console.error("[ComfyGit] Package install failed:", ne, ee);
        }
        _.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", z);
    }
    let ue = null;
    function Ie() {
      var R;
      return ue || (ue = (R = window.app) == null ? void 0 : R.api), ue;
    }
    let Pe = !1;
    function Fe() {
      if (Pe) return !0;
      const R = Ie();
      return R ? (R.addEventListener("cm-task-started", oe), R.addEventListener("cm-task-completed", ce), R.addEventListener("comfygit:workflow-changed", O), Pe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function O(R) {
      const { change_type: z } = R.detail;
      (z === "created" || z === "modified") && l.value && (l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return Qe(() => {
      window.addEventListener("comfygit:workflow-loaded", ve);
    }), Gs(() => {
      if (window.removeEventListener("comfygit:workflow-loaded", ve), Pe) {
        const R = Ie();
        R && (R.removeEventListener("cm-task-started", oe), R.removeEventListener("cm-task-completed", ce), R.removeEventListener("comfygit:workflow-changed", O)), Pe = !1;
      }
    }), (R, z) => (a(), r(H, null, [
      l.value ? (a(), M(ut, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ye
      }, {
        body: h(() => [
          s.value ? (a(), r("div", xP, [...z[4] || (z[4] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && T.value ? (a(), r("div", SP, [
            D.value.length > 0 ? (a(), r("div", IP, [
              t("div", EP, [
                t("span", TP, "Missing Custom Nodes (" + f(E.value) + ")", 1),
                D.value.length > 1 ? (a(), M(Te, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: S.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    b(f(S.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", PP, [
                (a(!0), r(H, null, ye(F.value, (q) => (a(), r("div", {
                  key: q.package_id,
                  class: "package-item"
                }, [
                  t("div", RP, [
                    t("span", MP, f(q.title), 1),
                    t("span", DP, "(" + f(q.node_count) + " " + f(q.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !i.value.has(q.package_id) && !c.value.has(q.package_id) && !u.value.has(q.package_id) ? (a(), M(Te, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === q.package_id,
                    onClick: (ne) => ae(q)
                  }, {
                    default: h(() => [
                      b(f(v.value === q.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === q.package_id ? (a(), r("span", LP, "Installing...")) : c.value.has(q.package_id) ? (a(), r("span", AP, "Queued")) : u.value.has(q.package_id) ? (a(), r("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(q.package_id)
                  }, "Failed ⚠", 8, OP)) : (a(), r("span", NP, "Installed"))
                ]))), 128)),
                D.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: z[0] || (z[0] = (q) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + f(D.value.length) + " packages...", 1),
                  z[5] || (z[5] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            I.value.length > 0 ? (a(), r("div", UP, [
              t("div", zP, [
                t("span", FP, "Unknown Nodes (" + f(I.value.length) + ")", 1)
              ]),
              t("div", BP, [
                (a(!0), r(H, null, ye(I.value.slice(0, 5), (q) => (a(), r("div", {
                  key: q.node_type,
                  class: "item"
                }, [
                  t("code", VP, f(q.node_type), 1),
                  z[6] || (z[6] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                I.value.length > 5 ? (a(), r("div", WP, " ...and " + f(I.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            G.value.length > 0 ? (a(), r("div", GP, [
              t("div", jP, [
                t("span", HP, "Missing Models (" + f(G.value.length) + ")", 1),
                K.value.length > 1 ? (a(), M(Te, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: L.value,
                  onClick: be
                }, {
                  default: h(() => [
                    b(f(L.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", KP, [
                (a(!0), r(H, null, ye(P.value, (q) => (a(), r("div", {
                  key: q.widget_value,
                  class: "model-item"
                }, [
                  t("div", qP, [
                    t("span", YP, f(q.filename), 1)
                  ]),
                  q.canDownload ? (a(), r(H, { key: 0 }, [
                    d.value.has(q.url) ? (a(), r("span", JP, "Queued")) : (a(), M(Te, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ne) => Z(q)
                    }, {
                      default: h(() => [...z[7] || (z[7] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), r("span", QP, "Manual download required"))
                ]))), 128)),
                G.value.length >= 5 ? (a(), r("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: z[1] || (z[1] = (q) => w.value = "models")
                }, [
                  t("span", null, "Show all " + f(G.value.length) + " models...", 1),
                  z[8] || (z[8] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", XP, [
              x(La, {
                modelValue: m.value,
                "onUpdate:modelValue": [
                  z[2] || (z[2] = (q) => m.value = q),
                  ze
                ]
              }, {
                default: h(() => [...z[9] || (z[9] = [
                  b(" Don't show this popup ", -1)
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
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          te.value ? (a(), M(Te, {
            key: 0,
            variant: "primary",
            disabled: B.value,
            onClick: De
          }, {
            default: h(() => [
              b(f(B.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), M(CP, {
        key: 1,
        title: A.value,
        items: W.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "packages" ? i.value : void 0,
        "failed-items": w.value === "packages" ? u.value : void 0,
        "installing-item": w.value === "packages" ? v.value : void 0,
        onClose: z[3] || (z[3] = (q) => w.value = null),
        onAction: X,
        onBulkAction: U
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), eR = /* @__PURE__ */ pe(ZP, [["__scopeId", "data-v-512ff6ab"]]), tR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', sR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', oR = {
  comfy: tR,
  phosphor: sR
}, il = "comfy", Jr = "comfygit-theme";
let Qs = null, Qr = il;
function nR() {
  try {
    const e = localStorage.getItem(Jr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return il;
}
function Xr(e = il) {
  Qs && Qs.remove(), Qs = document.createElement("style"), Qs.id = "comfygit-theme-styles", Qs.setAttribute("data-theme", e), Qs.textContent = oR[e], document.head.appendChild(Qs), document.body.setAttribute("data-comfygit-theme", e), Qr = e;
  try {
    localStorage.setItem(Jr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function aR() {
  return Qr;
}
function lR(e) {
  Xr(e);
}
function iR(e) {
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
const rR = nR();
Xr(rR);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), lR(e);
  },
  getTheme: () => {
    const e = aR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Zt = null, Ot = null, Yo = null, Oo = null, ai = null, No = null, li = null;
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
async function Aa() {
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
function Oa() {
  var s;
  if (cl === "managed" || !Zr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function cR() {
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
    render: () => cn(h7, {
      initialView: e,
      onClose: _a,
      onStatusUpdate: async (l) => {
        _o.value = l, Jo(), await Aa(), Na(), Oa();
      }
    })
  }).mount(s), document.body.appendChild(Zt);
}
function _a() {
  Zt && (Zt.remove(), Zt = null);
}
function ii(e) {
  Uo(), Ot = document.createElement("div"), Ot.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Ot.style.position = "fixed", Ot.style.top = `${s.bottom + 8}px`, Ot.style.right = `${window.innerWidth - s.right}px`, Ot.style.zIndex = "10001";
  const o = (l) => {
    Ot && !Ot.contains(l.target) && l.target !== e && (Uo(), document.removeEventListener("mousedown", o));
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
        Uo(), uR(l.success, l.message), Pn().then(Jo);
      }
    })
  }), Yo.mount(Ot), document.body.appendChild(Ot);
}
function Uo() {
  Yo && (Yo.unmount(), Yo = null), Ot && (Ot.remove(), Ot = null);
}
function uR(e, s) {
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
function dR() {
  Oo || (Oo = document.createElement("div"), Oo.className = "comfygit-download-queue-root", ai = ta({
    render: () => cn(dP)
  }), ai.mount(Oo), document.body.appendChild(Oo), console.log("[ComfyGit] Model download queue mounted"));
}
function fR() {
  No || (No = document.createElement("div"), No.className = "comfygit-missing-resources-root", li = ta({
    render: () => cn(eR)
  }), li.mount(No), document.body.appendChild(No), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Pt = null;
function Jo() {
  if (!Pt) return;
  const e = Pt.querySelector(".commit-indicator");
  e && (e.style.display = cR() ? "block" : "none");
}
function Na() {
  if (!Pt) return;
  const e = cl !== "managed";
  Pt.disabled = e, Pt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
        Pt && !Pt.disabled && ii(Pt);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = $n, Pt = document.createElement("button"), Pt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Pt.innerHTML = 'Commit <span class="commit-indicator"></span>', Pt.title = "Quick Commit", Pt.onclick = () => ii(Pt), e.appendChild(s), e.appendChild(Pt), (i = (l = Wt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Wt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), dR(), fR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      $n(u);
    }));
    const { loadPendingDownloads: o } = xo();
    o(), await Promise.all([Pn(), Aa()]), Jo(), Na(), Oa(), setTimeout(Oa, 100), setInterval(async () => {
      await Promise.all([Pn(), Aa()]), Jo(), Na();
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
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild($);
        const T = document.createElement("div");
        T.textContent = "Dependency conflict detected", T.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(T), p.appendChild(C);
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
          p.remove(), $n("debug-env");
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", C.appendChild($);
        const T = document.createElement("div");
        T.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, T.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(T), p.appendChild(C);
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
          D.disabled = !0, D.textContent = "Restarting...", D.style.opacity = "0.7", $.textContent = "Restarting...", T.textContent = "Applying changes, please wait...";
          try {
            const I = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Wt.refreshComboInNodes && (await Wt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", T.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", D.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (G) {
                console.error("[ComfyGit] Failed to refresh nodes:", G), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", T.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", D.style.display = "none";
              }
            };
            n.addEventListener("reconnected", I, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (I) {
            console.error("[ComfyGit] Failed to restart:", I), $.textContent = "Restart Failed", $.style.color = "#e53935", T.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", D.textContent = "Try Again", D.disabled = !1, D.style.opacity = "1";
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await Pn(), Jo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = iR(g.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
